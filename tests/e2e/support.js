const fs = require('fs');
const path = require('path');

const EXTERNAL_ASSETS = /^https:\/\/(fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com)\//;

async function stubExternalAssets(target) {
  await target.route(EXTERNAL_ASSETS, (route) =>
    route.fulfill({ status: 200, contentType: 'text/css', body: '' })
  );
}

function collectConsoleErrors(page) {
  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => {
    errors.push(err.message);
  });
  return errors;
}

function readMatch(file, regex, label) {
  const source = fs.readFileSync(path.join(__dirname, '..', '..', file), 'utf8');
  const match = source.match(regex);
  if (!match) throw new Error(`Nie znaleziono ${label} w ${file}`);
  return match[1];
}

const APP_VERSION = readMatch('app.js', /const APP_VERSION = '([^']+)';/, 'APP_VERSION');
const CURRENT_CACHE_NAME = readMatch('sw.js', /const CACHE_NAME = '([^']+)';/, 'CACHE_NAME');

// Treść pytania porównujemy też z opcjami, bo questions.js zawiera dwa pytania o identycznej
// treści i różnych odpowiedziach. QUESTIONS_DB to globalne const z questions.js:1.
async function correctAnswerIndex(page) {
  return page.evaluate(() => {
    const text = document.querySelector('#questionText').textContent;
    const opts = [...document.querySelectorAll('.answer-btn .ans-text')].map((el) => el.textContent);
    const q = QUESTIONS_DB.find(
      (item) => item.question === text && item.options.every((o, i) => o === opts[i])
    );
    return q.answer;
  });
}

module.exports = {
  EXTERNAL_ASSETS,
  stubExternalAssets,
  collectConsoleErrors,
  APP_VERSION,
  CURRENT_CACHE_NAME,
  correctAnswerIndex,
};
