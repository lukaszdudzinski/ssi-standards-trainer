const { test, expect } = require('@playwright/test');
const { stubExternalAssets, collectConsoleErrors, APP_VERSION } = require('./support');

test('start aplikacji bez błędów konsoli', async ({ page }) => {
  await stubExternalAssets(page);
  // Przy serviceWorkers: 'block' Playwright zwraca z navigator.serviceWorker.register() undefined,
  // więc app.js:1725 (reg.scope) rzuca TypeError, który app.js:1746 loguje jako console.error.
  // To artefakt blokady SW w teście (z włączonym SW błędu nie ma), nie błąd aplikacji.
  // Zwracamy atrapę rejestracji zamiast filtrować błędy konsoli.
  await page.addInitScript(() => {
    navigator.serviceWorker.register = () =>
      Promise.resolve({ scope: location.origin + '/', installing: null, addEventListener() {} });
  });
  const errors = collectConsoleErrors(page);
  await page.goto('/');
  await expect(page.locator('#welcomeScreen')).toHaveClass(/active/);
  await expect(page.locator('#welcomeVersion')).toHaveText(APP_VERSION);
  await expect(page.locator('#appVersion')).toHaveText(APP_VERSION);
  await expect(page.locator('#categoryFilter option[value="all"]')).toHaveText(/^Wszystko \(\d+\)$/);
  await expect(page.locator('#statsGrid .stats-item-bar')).toHaveCount(5);
  await expect(page.locator('#startTestBtn')).toBeVisible();
  expect(errors).toEqual([]);
});
