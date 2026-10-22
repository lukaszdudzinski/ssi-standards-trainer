const { test, expect } = require('@playwright/test');
const { stubExternalAssets, CURRENT_CACHE_NAME } = require('./support');

test.use({ serviceWorkers: 'allow' });

test('activate prawdziwego SW zostawia cache sąsiadów', async ({ page, context, browserName }) => {
  test.skip(browserName !== 'chromium', 'Cykl życia SW sprawdzamy w Chromium; logikę pokrywa tests/unit/test_sw.js');
  await stubExternalAssets(context); // zapytania z SW (cache.addAll) przechodzą przez context.route
  await page.goto('/manifest.json'); // ta sama domena, bez app.js: brak przeładowania po controllerchange
  await page.evaluate(async () => {
    for (const n of ['ukis-bodybuild-v1', 'ukis-bikelog-v1', 'ukis-dive-tools-v1', 'ssi-standards-trainer-v1.1']) await caches.open(n);
  });
  await page.evaluate(async () => {
    const reg = await navigator.serviceWorker.register('./sw.js');
    const sw = reg.installing || reg.waiting || reg.active;
    if (sw.state !== 'activated') await new Promise((res, rej) => sw.addEventListener('statechange', () => {
      if (sw.state === 'activated') res();
      if (sw.state === 'redundant') rej(new Error('SW redundant'));
    }));
  });
  const keys = await page.evaluate(() => caches.keys());
  expect(keys.sort()).toEqual([CURRENT_CACHE_NAME, 'ukis-bikelog-v1', 'ukis-bodybuild-v1', 'ukis-dive-tools-v1'].sort());
});
