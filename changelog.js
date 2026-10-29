/* ==========================================================================
   SSI Standards Trainer - "Co nowego" (lista zmian po aktualizacji)
   Ładowany przed app.js. Logika bez zależności od DOM jest testowana w Node
   (testy jednostkowe), okno budowane jest dopiero przy pierwszym użyciu.
   ========================================================================== */
(function (root) {
  'use strict';

  // Domena lukaszdudzinski.github.io jest wspólna dla aplikacji UKIS: klucze mają prefiks aplikacji.
  var LAST_VERSION_KEY = 'ukis.owi-ssi.last-version';
  var UPDATED_FROM_KEY = 'ukis.owi-ssi.updated-from';
  // Ostatnia wersja z produkcji sprzed zapamiętywania wersji: pierwsze uruchomienie pokazuje zmiany od niej.
  var FIRST_TRACKED_SINCE = 'v2026.10.20.01';
  var AUTO_SHOW_DELAY_MS = 800;

  function parseVersion(v) {
    var parts = String(v || '').replace(/^v\.?/, '').split('.').map(function (n) { return parseInt(n, 10) || 0; });
    return parts[0] * 10000000000 + parts[1] * 100000000 + (parts[2] || 0) * 1000000 + (parts[3] || 0);
  }

  // Jak w BodyBuild: 'all' to wszystko, 'latest_only' to najnowszy wpis, wersja to wpisy nowsze od niej (albo najnowszy).
  function selectEntries(data, compareVersion) {
    if (!Array.isArray(data) || data.length === 0) return [];
    if (compareVersion === 'all') return data;
    if (compareVersion === 'latest_only' || !compareVersion) return [data[0]];
    var score = parseVersion(compareVersion);
    var newer = data.filter(function (log) { return parseVersion(log.version) > score; });
    return newer.length > 0 ? newer : [data[0]];
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderEntries(entries) {
    if (!entries || entries.length === 0 || !entries[0]) {
      return '<p class="changelog-empty">Brak danych o zmianach.</p>';
    }
    return entries.map(function (log) {
      var items = (log.changes || []).map(function (change) {
        return '<li>' + escapeHtml(change) + '</li>';
      }).join('');
      return '<section class="changelog-entry">' +
        '<h3>Wersja ' + escapeHtml(log.version) + ' <span class="changelog-date">(' + escapeHtml(log.date) + ')</span></h3>' +
        '<ul>' + items + '</ul></section>';
    }).join('');
  }

  // Zwraca wersję, od której pokazać zmiany (albo null), i zapamiętuje bieżącą jako obejrzaną.
  function changelogSinceAfterUpdate(storage, current) {
    if (!current) return null;
    var from = storage.getItem(UPDATED_FROM_KEY);
    var last = storage.getItem(LAST_VERSION_KEY);
    storage.removeItem(UPDATED_FROM_KEY);
    storage.setItem(LAST_VERSION_KEY, current);
    var since = from || last || FIRST_TRACKED_SINCE;
    return since !== current ? since : null;
  }

  // Tuż przed przeładowaniem po aktualizacji: zapamiętaj wersję, której użytkownik używał.
  function rememberUpdatedFrom(storage, current) {
    try {
      if (current) storage.setItem(UPDATED_FROM_KEY, current);
    } catch (e) { /* pamięć niedostępna: lista zmian pojawi się dzięki last-version */ }
  }

  // Przy starcie: po ok. 800 ms pokaż listę zmian, jeśli wersja jest nowsza niż ostatnio widziana.
  // Pod automatem (navigator.webdriver) pomijamy okno, żeby nie blokowało testów e2e,
  // chyba że test jawnie ustawił updated-from.
  function maybeShowAfterUpdate(opts) {
    try {
      if (opts.webdriver && opts.storage.getItem(UPDATED_FROM_KEY) === null) return;
      var since = changelogSinceAfterUpdate(opts.storage, opts.current);
      if (since) opts.schedule(function () { opts.show(since); }, AUTO_SHOW_DELAY_MS);
    } catch (e) {
      console.warn('Co nowego:', e);
    }
  }

  // --- Okno (tylko w przeglądarce) ---
  var CLOSE_ICON = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
  var SPARKLES_ICON = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>';

  var pendingOnUpdate = null;
  var lastFocused = null;

  function closeModal() {
    var overlay = document.getElementById('changelogOverlay');
    if (overlay) overlay.classList.remove('active');
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    lastFocused = null;
  }

  function injectModal() {
    if (document.getElementById('changelogOverlay')) return;
    var wrapper = document.createElement('div');
    wrapper.innerHTML =
      '<div id="changelogOverlay" class="changelog-overlay" role="dialog" aria-modal="true" aria-labelledby="changelogTitle">' +
        '<div class="changelog-card">' +
          '<div class="changelog-header">' +
            '<h2 id="changelogTitle">' + SPARKLES_ICON + 'Co nowego?</h2>' +
            '<button id="changelogCloseBtn" class="changelog-close" type="button" aria-label="Zamknij">' + CLOSE_ICON + '</button>' +
          '</div>' +
          '<div id="changelogContent" class="changelog-content"><p class="changelog-empty">Ładowanie zmian...</p></div>' +
          '<div class="changelog-footer"><button id="changelogUpdateBtn" class="changelog-update-btn" type="button" hidden>Zaktualizuj</button></div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(wrapper.firstChild);
    document.getElementById('changelogCloseBtn').addEventListener('click', closeModal);
    document.getElementById('changelogOverlay').addEventListener('click', function (e) {
      if (e.target === e.currentTarget) closeModal();
    });
    document.getElementById('changelogUpdateBtn').addEventListener('click', function () {
      var run = pendingOnUpdate;
      closeModal();
      if (run) run();
    });
    document.addEventListener('keydown', function (e) {
      var overlay = document.getElementById('changelogOverlay');
      if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) closeModal();
    });
  }

  // compareVersion: wersja (wpisy nowsze), 'all' (wszystkie) albo 'latest_only'.
  // opts.onUpdate: gdy podane, okno ma przycisk „Zaktualizuj” (otwarcie z toastu aktualizacji).
  function showChangelogModal(compareVersion, opts) {
    injectModal();
    pendingOnUpdate = opts && typeof opts.onUpdate === 'function' ? opts.onUpdate : null;
    var overlay = document.getElementById('changelogOverlay');
    var content = document.getElementById('changelogContent');
    var updateBtn = document.getElementById('changelogUpdateBtn');
    updateBtn.hidden = !pendingOnUpdate;
    if (!overlay.classList.contains('active')) lastFocused = document.activeElement;
    overlay.classList.add('active');
    content.innerHTML = '<p class="changelog-empty">Ładowanie zmian...</p>';
    document.getElementById('changelogCloseBtn').focus();

    return fetch('changelog.json?t=' + Date.now(), { cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        content.innerHTML = renderEntries(selectEntries(data, compareVersion));
      })
      .catch(function () {
        content.innerHTML = '<p class="changelog-empty">Nie udało się załadować listy zmian.</p>';
      });
  }

  var api = {
    LAST_VERSION_KEY: LAST_VERSION_KEY,
    UPDATED_FROM_KEY: UPDATED_FROM_KEY,
    FIRST_TRACKED_SINCE: FIRST_TRACKED_SINCE,
    parseVersion: parseVersion,
    selectEntries: selectEntries,
    renderEntries: renderEntries,
    changelogSinceAfterUpdate: changelogSinceAfterUpdate,
    rememberUpdatedFrom: rememberUpdatedFrom,
    maybeShowAfterUpdate: maybeShowAfterUpdate,
    showChangelogModal: showChangelogModal
  };

  if (typeof module === 'object' && module.exports) module.exports = api;
  if (typeof window !== 'undefined' && root === window) {
    root.UkisChangelog = api;
    root.showChangelogModal = showChangelogModal;
  }
})(typeof window !== 'undefined' ? window : globalThis);
