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

  // 1.5. Syntax & Parsing Integrity Check
  const { execSync } = require('child_process');
  try {
    execSync('node -c app.js', { cwd: __dirname });
    assert(true, 'app.js syntax is 100% correct and parseable');
  } catch (e) {
    assert(false, `app.js has syntax error: ${e.message}`);
  }

  try {
    execSync('node -c questions.js', { cwd: __dirname });
    assert(true, 'questions.js syntax is 100% correct and parseable');
  } catch (e) {
    assert(false, `questions.js has syntax error: ${e.message}`);
  }

  try {
    execSync('node -c sw.js', { cwd: __dirname });
    assert(true, 'sw.js syntax is 100% correct and parseable');
  } catch (e) {
    assert(false, `sw.js has syntax error: ${e.message}`);
  }

  // 2. Process Validation: Version Sync Check
  const jsVersionMatch = jsContent.match(/const APP_VERSION = '([^']+)';/);
  assert(jsVersionMatch !== null, 'app.js must declare an APP_VERSION constant');
  
  const appVersion = jsVersionMatch ? jsVersionMatch[1] : null;
  console.log(`Detected APP_VERSION: ${appVersion}`);
  
  assert(appVersion === 'v2026.5.30.04', 'APP_VERSION must be exactly v2026.5.30.04');

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

  // 8. Process Validation: Quit Quiz & Exam Timer Updates
  assert(htmlContent.includes('id="quitQuizBtn"'), 'index.html must contain a quitQuizBtn element');
  assert(cssContent.includes('.quit-btn'), 'index.css must define styling for the quit-btn');
  assert(cssContent.includes('.timer.overtime'), 'index.css must define styling for the overtime timer');
  assert(jsContent.includes('isExamMode'), 'app.js must track the isExamMode variable');

  // 9. Process Validation: CarPlay Audio Silence & Repeat Button
  assert(htmlContent.includes('class="repeat-btn pulse-glow"') || htmlContent.includes('class="repeat-btn"'), 'index.html must contain a repeat-btn class element');
  assert(htmlContent.includes('id="carplayHackToggle"'), 'index.html must contain carplayHackToggle switch element');
  assert(cssContent.includes('.repeat-btn'), 'index.css must define styling for .repeat-btn');
  assert(jsContent.includes('carplayHackToggle'), 'app.js must define carplayHackToggle reference');
  assert(jsContent.includes('initSettings()'), 'app.js must implement initSettings function');
  assert(jsContent.includes("localStorage.setItem('autoplay'"), 'app.js must save autoplay setting to localStorage');
  assert(jsContent.includes("localStorage.setItem('voiceControl'"), 'app.js must save voiceControl setting to localStorage');
  assert(jsContent.includes("localStorage.setItem('carplayHack'"), 'app.js must save carplayHack setting to localStorage');

  // 10. Process Validation: Spaced Repetition & Offline PDF Viewer
  assert(swContent.includes("'./STANDARDS-SCUBA_Polish_IM.pdf'"), 'sw.js must cache STANDARDS-SCUBA_Polish_IM.pdf');
  assert(swContent.includes("'./pdf.min.js'"), 'sw.js must cache pdf.min.js');
  assert(swContent.includes("'./pdf.worker.min.js'"), 'sw.js must cache pdf.worker.min.js');
  assert(htmlContent.includes('id="openPdfMainMenuBtn"'), 'index.html must contain an openPdfMainMenuBtn element');
  assert(htmlContent.includes('id="pdfModal"'), 'index.html must contain a pdfModal element');
  assert(htmlContent.includes('id="pdfCanvas"'), 'index.html must contain a pdfCanvas element');
  assert(htmlContent.includes('clickable-page-badge'), 'index.html must contain clickable-page-badge element');
  assert(cssContent.includes('.clickable-page-badge'), 'index.css must define styling for .clickable-page-badge');
  assert(cssContent.includes('.pdf-modal-content'), 'index.css must define styling for .pdf-modal-content');
  assert(cssContent.includes('.modal-overlay'), 'index.css must define styling for .modal-overlay');
  assert(jsContent.includes('isRetry'), 'app.js must track the isRetry variable for retries');
  assert(jsContent.includes('.splice('), 'app.js must inject retry questions using splice');
  assert(jsContent.includes('openPdfViewer'), 'app.js must implement openPdfViewer function');
  assert(jsContent.includes('closePdfViewer'), 'app.js must implement closePdfViewer function');

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
