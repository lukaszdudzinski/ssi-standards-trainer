const { test, expect } = require('@playwright/test');
const { stubExternalAssets, correctAnswerIndex } = require('./support');

test('odpowiedź w quizie zapisuje ssi_stats_history widoczne w statystykach po przeładowaniu', async ({ page }) => {
  await stubExternalAssets(page);
  // Lektor (speechSynthesis) w trybie headless nie jest przedmiotem testu.
  await page.addInitScript(() => localStorage.setItem('autoplay', 'false'));
  await page.goto('/');
  await page.selectOption('#categoryFilter', 'ogolne');
  await page.click('#startTestBtn');
  await expect(page.locator('#quizScreen')).toHaveClass(/active/);
  await expect(page.locator('#progressText')).toHaveText('Pytanie 1 / 50');
  const idx = await correctAnswerIndex(page);
  await page.click(`.answer-btn[data-index="${idx}"]`);
  await expect(page.locator(`.answer-btn[data-index="${idx}"]`)).toHaveClass(/correct/);
  await expect(page.locator('#scoreText')).toHaveText('1');
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('ssi_stats_history')));
  expect(stored).toEqual({ 'Standardy Ogólne': { correct: 1, incorrect: 0 } });
  await page.reload();
  await expect(page.locator('#welcomeScreen')).toHaveClass(/active/);
  const row = page.locator('#statsGrid .stats-item-bar', { hasText: 'Standardy Ogólne' });
  await expect(row.locator('.stats-value')).toHaveText('1/1 (100%)');
});
