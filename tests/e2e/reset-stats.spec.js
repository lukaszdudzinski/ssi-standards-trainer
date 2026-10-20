const { test, expect } = require('@playwright/test');
const { stubExternalAssets } = require('./support');

// localStorage i CacheStorage są wspólne dla wszystkich aplikacji UKIS w tej samej domenie,
// więc reset statystyk nie może dotknąć niczego poza dwoma własnymi kluczami statystyk.
const NEIGHBOURS = {
  'uki-pro-unlocked': 'true',
  uki_bikes_list: '[{"id":1}]',
  'kvvfs-local-x': 'db',
  userNick: 'Nurek',
  'uki-avatar': 'data:image/png;base64,AA',
  'uki-custom-wallpaper': 'wall',
  uki_error_logs: '[]',
  theme: 'light',
};
const OWN_SETTINGS = {
  autoplay: 'false',
  voiceControl: 'false',
  carplayHack: 'true',
  voiceRate: '1.2',
  voiceVolume: '0.8',
};
const OWN_STATS = {
  ssi_stats_history: '{"Standardy Ogólne":{"correct":3,"incorrect":1}}',
  ssi_spaced_repetition_errors: '["Pytanie testowe"]',
};
const SEED = { ...NEIGHBOURS, ...OWN_SETTINGS, ...OWN_STATS };
const FOREIGN_CACHE = 'ukis-dive-tools-v1';

async function seedAndOpen(page) {
  await stubExternalAssets(page);
  await page.addInitScript((seed) => {
    for (const [k, v] of Object.entries(seed)) localStorage.setItem(k, v);
  }, SEED);
  await page.goto('/');
  // Cudzy cache innej aplikacji UKIS.
  await page.evaluate((name) => caches.open(name), FOREIGN_CACHE);
}

async function snapshot(page) {
  return page.evaluate(async (keys) => {
    const result = Object.fromEntries(keys.map((k) => [k, localStorage.getItem(k)]));
    result.cacheKeys = (await caches.keys()).sort();
    return result;
  }, Object.keys(SEED));
}

test('reset statystyk usuwa tylko statystyki i powtórki', async ({ page }) => {
  const dialogs = [];
  page.on('dialog', async (d) => {
    dialogs.push(`${d.type()}:${d.message()}`);
    await d.accept();
  });
  await seedAndOpen(page);

  const row = page.locator('#statsGrid .stats-item-bar', { hasText: 'Standardy Ogólne' });
  await expect(row.locator('.stats-value')).toHaveText('3/4 (75%)');

  await page.click('#resetStatsBtn');
  await expect(row.locator('.stats-value')).toHaveText('0/0 (0%)');

  const after = await snapshot(page);
  expect(dialogs).toEqual([
    'confirm:Czy na pewno chcesz zresetować wszystkie statystyki nauki oraz kolejkę powtórek?',
    'alert:Statystyki i powtórki zostały zresetowane.',
  ]);
  expect(after.ssi_stats_history).toBeNull();
  expect(after.ssi_spaced_repetition_errors).toBeNull();
  for (const [k, v] of Object.entries({ ...NEIGHBOURS, ...OWN_SETTINGS })) expect(after[k], k).toBe(v);
  expect(after.cacheKeys).toContain(FOREIGN_CACHE);
});

test('reset statystyk anulowany niczego nie usuwa', async ({ page }) => {
  const dialogs = [];
  page.on('dialog', async (d) => {
    dialogs.push(`${d.type()}:${d.message()}`);
    await d.dismiss();
  });
  await seedAndOpen(page);
  const before = await snapshot(page);

  await page.click('#resetStatsBtn');
  await expect.poll(() => dialogs.length).toBe(1);

  const after = await snapshot(page);
  expect(dialogs).toEqual([
    'confirm:Czy na pewno chcesz zresetować wszystkie statystyki nauki oraz kolejkę powtórek?',
  ]);
  expect(after).toEqual(before);
  for (const [k, v] of Object.entries(OWN_STATS)) expect(after[k], k).toBe(v);
});
