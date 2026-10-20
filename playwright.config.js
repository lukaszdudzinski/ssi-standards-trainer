const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/e2e',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : [['list']],
  use: {
    baseURL: 'http://127.0.0.1:8082',
    // app.js:1745-1750 przeładowuje stronę po controllerchange (clients.claim przy pierwszej wizycie),
    // więc SW jest domyślnie zablokowany; sw-cache-isolation.spec.js włącza go jawnie.
    serviceWorkers: 'block',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
  ],
  webServer: {
    command: 'npx http-server . -p 8082 -a 127.0.0.1 -c-1 -s',
    url: 'http://127.0.0.1:8082/index.html',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
