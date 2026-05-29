// Automated tests for new application processes: Versioning, Update Trigger, Speech Repeating
const fs = require('fs');
const path = require('path');

console.log('===================================================');
console.log('RUNNING NEW APPLICATION PROCESSES VALIDATION');
console.log('===================================================');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`✅ PROCESS PASSED: ${message}`);
  } else {
    failed++;
    console.error(`❌ PROCESS FAILED: ${message}`);
  }
}

try {
  // 1. Load files
  const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  const jsContent = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
  const cssContent = fs.readFileSync(path.join(__dirname, 'index.css'), 'utf8');
  const swContent = fs.readFileSync(path.join(__dirname, 'sw.js'), 'utf8');
  const manifestContent = fs.readFileSync(path.join(__dirname, 'manifest.json'), 'utf8');

  // 2. Process Validation: Version Sync Check
  const jsVersionMatch = jsContent.match(/const APP_VERSION = '([^']+)';/);
  assert(jsVersionMatch !== null, 'app.js must declare an APP_VERSION constant');
  
  const appVersion = jsVersionMatch ? jsVersionMatch[1] : null;
  console.log(`Detected APP_VERSION: ${appVersion}`);
  
  assert(appVersion === 'v2026.5.29.01', 'APP_VERSION must be exactly v2026.5.29.01');

  // Check SW cache name sync
  const swCacheMatch = swContent.match(/const CACHE_NAME = 'ssi-standards-trainer-([^']+)';/);
  assert(swCacheMatch !== null, 'sw.js must declare a CACHE_NAME');
  const swVersion = swCacheMatch ? swCacheMatch[1] : null;
  assert(swVersion === appVersion, `sw.js cache version (${swVersion}) must match app.js version (${appVersion})`);

  // Check manifest icon files sync
  const manifest = JSON.parse(manifestContent);
  const manifestIcons = manifest.icons.map(i => i.src);
  assert(manifestIcons.includes('./logo_pro_192.png'), 'manifest.json must cache logo_pro_192.png');
  assert(manifestIcons.includes('./logo_pro_512.png'), 'manifest.json must cache logo_pro_512.png');

  // Check index.html icons sync
  assert(htmlContent.includes('href="logo_pro_192.png"'), 'index.html favicon link must point to logo_pro_192.png');
  assert(htmlContent.includes('href="logo_pro_512.png"'), 'index.html apple touch icon link must point to logo_pro_512.png');
  
  // Verify inside app logos remain logo.png as requested
  assert(htmlContent.includes('class="welcome-logo"') && htmlContent.includes('src="logo.png"'), 'Inside welcome logo must remain logo.png B&W');
  assert(htmlContent.includes('class="app-logo"') && htmlContent.includes('src="logo.png"'), 'Inside app logo must remain logo.png B&W');

  // 3. Process Validation: UI Updates
  assert(htmlContent.includes('id="appVersion"'), 'index.html must have an appVersion element');
  assert(htmlContent.includes('id="welcomeVersion"'), 'index.html must have a welcomeVersion element');
  assert(htmlContent.includes('id="updateToast"'), 'index.html must have an updateToast element');
  assert(htmlContent.includes('id="updateToastBtn"'), 'index.html must have an updateToastBtn element');
  assert(htmlContent.includes('data-tab="bluetooth"'), 'index.html must have a CarPlay Bluetooth settings tab button');
  assert(htmlContent.includes('id="tab-bluetooth"'), 'index.html must have a CarPlay Bluetooth tab content pane');

  // 4. Process Validation: CSS Glassmorphism toast
  assert(cssContent.includes('.update-toast'), 'index.css must declare styles for .update-toast');
  assert(cssContent.includes('.update-toast.show'), 'index.css must declare active styles for .update-toast.show');
  assert(cssContent.includes('.btn-update'), 'index.css must declare styles for the update button');

  // 5. Process Validation: Speech Recognition Repeating Triggers
  assert(jsContent.includes('repeatSpeech()'), 'app.js must implement the repeatSpeech function');
  assert(jsContent.includes("result.includes('powtórz')"), 'app.js speech recognition result handler must check for "powtórz" command');
  assert(jsContent.includes("result.includes('jeszcze raz')"), 'app.js speech recognition result handler must check for "jeszcze raz" command');
  assert(jsContent.includes("result.includes('czytaj')"), 'app.js speech recognition result handler must check for "czytaj" command');

  // 6. Process Validation: Feedback screen mic listening fixes
  assert(jsContent.includes('const isFeedbackActive = feedbackPanel.classList.contains(\'active\');'), 'app.js must detect if the feedback panel is active inside SW helpers');
  assert(jsContent.includes('(!isAnswered || isFeedbackActive)'), 'app.js SW helpers must keep mic active on incorrect feedback panels');

  // 7. Process Validation: Service Worker SkipWaiting Updates
  assert(swContent.includes("event.data.action === 'skipWaiting'"), 'sw.js must listen for the skipWaiting action');
  assert(jsContent.includes('navigator.serviceWorker.addEventListener(\'controllerchange\''), 'app.js must handle controller changes to reload page on update');

  console.log('\n===================================================');
  console.log('PROCESSES VALIDATION SUMMARY');
  console.log('===================================================');
  console.log(`Passed tests: ${passed}`);
  console.log(`Failed tests: ${failed}`);

  if (failed === 0) {
    console.log('🎉 ALL APPLICATION PROCESSES VALIDATED SUCCESSFULLY!');
    process.exit(0);
  } else {
    console.error('⚠️ SOME PROCESS VALIDATIONS FAILED!');
    process.exit(1);
  }

} catch (err) {
  console.error('Testing process failure:', err);
  process.exit(1);
}
