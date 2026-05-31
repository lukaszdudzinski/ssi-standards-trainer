/* ==========================================================================
   SSI Standards Trainer - Core Application Logic
   ========================================================================== */

const APP_VERSION = 'v2026.5.31.07';

document.addEventListener('DOMContentLoaded', () => {
  // Render version in UI
  document.getElementById('appVersion').textContent = APP_VERSION;
  document.getElementById('welcomeVersion').textContent = APP_VERSION;

  // --- UI Elements ---
  const welcomeScreen = document.getElementById('welcomeScreen');
  const quizScreen = document.getElementById('quizScreen');
  const resultsScreen = document.getElementById('resultsScreen');
  
  const startTestBtn = document.getElementById('startTestBtn');
  const startPracticeBtn = document.getElementById('startPracticeBtn');
  const restartTestBtn = document.getElementById('restartTestBtn');
  const backToHomeBtn = document.getElementById('backToHomeBtn');
  const startReinforcementBtn = document.getElementById('startReinforcementBtn');
  const reinforcementYesBtn = document.getElementById('reinforcementYesBtn');
  const reinforcementNoBtn = document.getElementById('reinforcementNoBtn');
  
  const themeToggle = document.getElementById('themeToggle');
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettingsBtn = document.getElementById('closeSettingsBtn');
  
  const questionCard = document.getElementById('questionCard');
  const openPdfMainMenuBtn = document.getElementById('openPdfMainMenuBtn');
  const pdfModal = document.getElementById('pdfModal');
  const closePdfBtn = document.getElementById('closePdfBtn');
  
  // Custom HTML5 PDF elements
  const prevPageBtn = document.getElementById('prevPageBtn');
  const nextPageBtn = document.getElementById('nextPageBtn');
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const currentPageNumText = document.getElementById('currentPageNumText');
  const totalPagesText = document.getElementById('totalPagesText');
  const pdfCanvasContainer = document.getElementById('pdfCanvasContainer');
  const pdfCanvas = document.getElementById('pdfCanvas');
  const pdfLoadingIndicator = document.getElementById('pdfLoadingIndicator');

  const quizTimer = document.getElementById('quizTimer');
  const quitQuizBtn = document.getElementById('quitQuizBtn');
  const progressText = document.getElementById('progressText');
  const scoreText = document.getElementById('scoreText');
  const progressBarFill = document.getElementById('progressBarFill');
  
  const autoplayToggle = document.getElementById('autoplayToggle');
  const voiceControlToggle = document.getElementById('voiceControlToggle');
  const carplayHackToggle = document.getElementById('carplayHackToggle');
  
  const questionText = document.getElementById('questionText');
  const repeatSpeechBtn = document.getElementById('repeatSpeechBtn');
  const answersGrid = document.getElementById('answersGrid');
  const answerButtons = document.querySelectorAll('.answer-btn');
  
  const voiceStatusContainer = document.getElementById('voiceStatusContainer');
  const voiceStatusText = document.getElementById('voiceStatusText');
  
  const feedbackPanel = document.getElementById('feedbackPanel');
  const feedbackHeader = document.getElementById('feedbackHeader');
  const refChapter = document.getElementById('refChapter');
  const refSection = document.getElementById('refSection');
  const refPage = document.getElementById('refPage');
  const refQuote = document.getElementById('refQuote');
  const nextQuestionBtn = document.getElementById('nextQuestionBtn');
  const openPdfFeedbackBtn = document.getElementById('openPdfFeedbackBtn');
  const feedbackPdfPageNum = document.getElementById('feedbackPdfPageNum');
  
  const resultPercent = document.getElementById('resultPercent');
  const resultVerdict = document.getElementById('resultVerdict');
  const resultDetails = document.getElementById('resultDetails');
  const progressRingCircle = document.getElementById('progressRingCircle');
  const incorrectReview = document.getElementById('incorrectReview');
  const reviewList = document.getElementById('reviewList');

  // --- Premium UI Elements ---
  const categoryFilter = document.getElementById('categoryFilter');
  const startFlashcardsBtn = document.getElementById('startFlashcardsBtn');
  const statsGrid = document.getElementById('statsGrid');
  const resetStatsBtn = document.getElementById('resetStatsBtn');
  
  const flashcardScreen = document.getElementById('flashcardScreen');
  const quitFlashcardsBtn = document.getElementById('quitFlashcardsBtn');
  const flashcardProgressText = document.getElementById('flashcardProgressText');
  const flashcardLearnedText = document.getElementById('flashcardLearnedText');
  const flashcardProgressBarFill = document.getElementById('flashcardProgressBarFill');
  const flashcardContainer = document.getElementById('flashcardContainer');
  const flashcard = document.getElementById('flashcard');
  const flashcardFrontText = document.getElementById('flashcardFrontText');
  const flashcardBackText = document.getElementById('flashcardBackText');
  const flashcardRefChapter = document.getElementById('flashcardRefChapter');
  const flashcardRefPage = document.getElementById('flashcardRefPage');
  const flashcardRefQuote = document.getElementById('flashcardRefQuote');
  const flashcardPdfBtn = document.getElementById('flashcardPdfBtn');
  const flashcardFeedbackPdfPageNum = document.getElementById('flashcardFeedbackPdfPageNum');
  const flashcardFlipBtn = document.getElementById('flashcardFlipBtn');
  const flashcardIncorrectBtn = document.getElementById('flashcardIncorrectBtn');
  const flashcardCorrectBtn = document.getElementById('flashcardCorrectBtn');
  const flashcardNextBtn = document.getElementById('flashcardNextBtn');
  const flashcardAnswersRow = document.getElementById('flashcardAnswersRow');
  
  // Procedural Web Audio API sound synthesizers (100% offline & zero network calls!)
  function playSynthesizedCorrect() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      gain1.gain.setValueAtTime(0.08, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 0.35);
      
      setTimeout(() => {
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
        gain2.gain.setValueAtTime(0.08, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start();
        osc2.stop(ctx.currentTime + 0.45);
      }, 80);
    } catch (e) {
      console.log('Correct chime failed:', e);
    }
  }

  function playSynthesizedIncorrect() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
      osc.frequency.linearRampToValueAtTime(147, ctx.currentTime + 0.35); // slide down to D3
      
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {
      console.log('Incorrect buzz failed:', e);
    }
  }
  
  const voiceRate = document.getElementById('voiceRate');
  const voiceRateVal = document.getElementById('voiceRateVal');
  const voiceVolume = document.getElementById('voiceVolume');
  const voiceVolumeVal = document.getElementById('voiceVolumeVal');
  
  const pwaBanner = document.getElementById('pwaBanner');
  const installAppBtn = document.getElementById('installAppBtn');

  // --- App State ---
  let activeQuestions = [];
  let baseQuestionsCount = 0;
  let retryCount = 0;
  let currentQuestionIndex = 0;
  let score = 0;
  let incorrectQuestions = [];
  let isAnswered = false;
  let timerInterval = null;
  let secondsElapsed = 0;
  let isExamMode = false; // true = 50 random questions, false = all questions
  
  // Premium State variables
  let isFlashcardMode = false;
  let flashcardLearnedCount = 0;
  let isCardFlipped = false;
  let awaitingReinforcementChoice = false;
  
  // Voice Synthesis & Recognition variables
  let synth = window.speechSynthesis;
  let speechUtterance = null;
  let speechVoice = null;
  let recognition = null;
  let isListening = false;
  let recognitionTimeout = null;

  // --- 1. Theme Toggle & Dark/Light Mode ---
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      themeToggle.innerHTML = '<i class="fa-solid fa-sun" style="color: #f59e0b;"></i>';
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }

  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      themeToggle.innerHTML = '<i class="fa-solid fa-sun" style="color: #f59e0b;"></i>';
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem('theme', 'dark');
    }
  });

  initTheme();

  // --- Dynamic Category Classification & Analytics System (v2026.5.30.10) ---

  // Dynamic keyword and chapter-based category classifier (Krok 2.2)
  function getQuestionCategory(q) {
    if (q.category) {
      // Map potential internal keys to canonical names
      const normalized = q.category.toLowerCase().trim();
      if (normalized.includes('metodyka') || normalized.includes('psychologia')) return 'Metodyka i Psychologia';
      if (normalized.includes('ogolne') || normalized.includes('standardy')) return 'Standardy Ogólne';
      if (normalized.includes('wspolczynniki') || normalized.includes('wiek') || normalized.includes('proporcj')) return 'Współczynniki i Wiek';
      if (normalized.includes('fizyka') || normalized.includes('fizjologia')) return 'Fizyka i Fizjologia';
      if (normalized.includes('specjalizacje') || normalized.includes('specjaln')) return 'Specjalizacje';
      return q.category; // fallback to whatever string is there
    }
    
    const questionText = q.question.toLowerCase();
    const chapterText = (q.reference?.chapter || "").toLowerCase();
    const sectionText = (q.reference?.section || "").toLowerCase();
    
    // 1. Współczynniki i Wiek
    if (
      questionText.includes('współczynnik') ||
      questionText.includes('wiek') ||
      questionText.includes('głębokość') ||
      questionText.includes('limit głębokości') ||
      questionText.includes('proporcj') ||
      questionText.includes('stosunek') ||
      questionText.includes('maksymalna liczba') ||
      questionText.includes('ile lat') ||
      questionText.includes('ilu kursantów') ||
      sectionText.includes('współczynnik') ||
      sectionText.includes('limity') ||
      chapterText.includes('współczynnik')
    ) {
      return 'Współczynniki i Wiek';
    }
    
    // 2. Fizyka i Fizjologia
    if (
      questionText.includes('oświadczenia zdrowotnego') ||
      questionText.includes('oświadczenie zdrowotne') ||
      questionText.includes('oświadczenia medycznego') ||
      questionText.includes('oświadczenie medyczne') ||
      questionText.includes('medyczn') ||
      questionText.includes('nitrox') ||
      questionText.includes('nitroks') ||
      questionText.includes('dekompres') ||
      questionText.includes('altitude') ||
      questionText.includes('science of diving') ||
      chapterText.includes('science of diving') ||
      sectionText.includes('nitrox') ||
      sectionText.includes('nitroks') ||
      questionText.includes('fizyk') ||
      questionText.includes('fizjolog') ||
      questionText.includes('ciśnienie') ||
      questionText.includes('zużycie powietrza') ||
      questionText.includes('przerwanie ciągłości') ||
      questionText.includes('tkanki płucnej') ||
      questionText.includes('grupa powtórzeniowa') ||
      questionText.includes('przerwa powierzchniowa') ||
      questionText.includes('ppo2') ||
      questionText.includes('mod dla') ||
      questionText.includes('ucisk') ||
      questionText.includes('squeeze')
    ) {
      return 'Fizyka i Fizjologia';
    }
    
    // 3. Specjalizacje
    if (
      chapterText.includes('specjalizacj') ||
      sectionText.includes('specjalizacj') ||
      questionText.includes('perfect buoyancy') ||
      questionText.includes('dry suit') ||
      questionText.includes('suchego skafandra') ||
      questionText.includes('night & limited') ||
      questionText.includes('deep diving') ||
      questionText.includes('navigation') ||
      questionText.includes('ecology') ||
      questionText.includes('computer diving') ||
      questionText.includes('explorers') ||
      questionText.includes('explorer') ||
      questionText.includes('advanced adventurer') ||
      questionText.includes('advanced open water') ||
      chapterText.includes('explorers') ||
      chapterText.includes('advanced open water')
    ) {
      return 'Specjalizacje';
    }

    // 4. Metodyka i Psychologia
    if (
      chapterText.includes('ocena sprawności') ||
      chapterText.includes('prowadzenie programów') ||
      sectionText.includes('nadzór') ||
      questionText.includes('nadzór') ||
      questionText.includes('współnauczania') ||
      questionText.includes('co-teaching') ||
      questionText.includes('sprawności fizycznej') ||
      questionText.includes('stres') ||
      questionText.includes('rescue') ||
      questionText.includes('psycholog') ||
      questionText.includes('metod') ||
      questionText.includes('ocena sprawności') ||
      questionText.includes('filozofia') ||
      questionText.includes('cykl lojalnościowy') ||
      questionText.includes('diament nurka') ||
      questionText.includes('komfort przez powtarzanie') ||
      questionText.includes('uczenie się') ||
      questionText.includes('domenie') ||
      questionText.includes('kognitywnej') ||
      questionText.includes('afektywnej') ||
      questionText.includes('psychomotorycznej') ||
      questionText.includes('dorosłych') ||
      questionText.includes('andragogik') ||
      questionText.includes('mentor')
    ) {
      return 'Metodyka i Psychologia';
    }

    // 5. Standardy Ogólne (Default)
    return 'Standardy Ogólne';
  }

  // Update Dropdown numbers and render stats dashboard (Krok 2.2 / 2.4)
  function updateCategoryOptionsAndStats() {
    const counts = {
      'all': QUESTIONS_DB.length,
      'Metodyka i Psychologia': 0,
      'Standardy Ogólne': 0,
      'Współczynniki i Wiek': 0,
      'Fizyka i Fizjologia': 0,
      'Specjalizacje': 0
    };
    
    QUESTIONS_DB.forEach(q => {
      const cat = getQuestionCategory(q);
      if (counts[cat] !== undefined) {
        counts[cat]++;
      }
    });

    // Update index.html Dropdown option labels
    const options = categoryFilter.options;
    for (let i = 0; i < options.length; i++) {
      const val = options[i].value;
      if (val === 'all') {
        options[i].textContent = `Wszystko (${counts['all']})`;
      } else if (val === 'metodyka') {
        options[i].textContent = `Metodyka i Psychologia (${counts['Metodyka i Psychologia']})`;
      } else if (val === 'ogolne') {
        options[i].textContent = `Standardy Ogólne (${counts['Standardy Ogólne']})`;
      } else if (val === 'wspolczynniki') {
        options[i].textContent = `Współczynniki i Wiek (${counts['Współczynniki i Wiek']})`;
      } else if (val === 'fizyka') {
        options[i].textContent = `Fizyka i Fizjologia (${counts['Fizyka i Fizjologia']})`;
      } else if (val === 'specjalizacje') {
        options[i].textContent = `Specjalizacje (${counts['Specjalizacje']})`;
      }
    }

    // Render Stats panel on Welcome Screen
    const statsHistory = JSON.parse(localStorage.getItem('ssi_stats_history')) || {};
    statsGrid.innerHTML = '';

    const categories = [
      { key: 'Metodyka i Psychologia', icon: 'fa-graduation-cap', color: '#a78bfa' },
      { key: 'Standardy Ogólne', icon: 'fa-book', color: '#38bdf8' },
      { key: 'Współczynniki i Wiek', icon: 'fa-arrow-down-up-across-line', color: '#fb923c' },
      { key: 'Fizyka i Fizjologia', icon: 'fa-heart-pulse', color: '#f87171' },
      { key: 'Specjalizacje', icon: 'fa-award', color: '#34d399' }
    ];

    categories.forEach(cat => {
      const stat = statsHistory[cat.key] || { correct: 0, incorrect: 0 };
      const total = stat.correct + stat.incorrect;
      const rate = total > 0 ? Math.round((stat.correct / total) * 100) : 0;
      
      const barEl = document.createElement('div');
      barEl.className = 'stats-item-bar';
      barEl.innerHTML = `
        <div class="stats-info">
          <span class="stats-label"><i class="fa-solid ${cat.icon}" style="color: ${cat.color};"></i> ${cat.key}</span>
          <span class="stats-value">${stat.correct}/${total} (${rate}%)</span>
        </div>
        <div class="stats-meter">
          <div class="stats-meter-fill" style="width: ${rate}%; background: linear-gradient(90deg, ${cat.color}, #ffffff);"></div>
        </div>
      `;
      statsGrid.appendChild(barEl);
    });
  }

  // Record question attempt stats (Krok 2.4)
  function recordQuestionAttempt(questionObj, isCorrect) {
    // Only record stats if not a session retry and not in flashcard mode
    if (questionObj.isRetry || isFlashcardMode) return;
    
    const cat = getQuestionCategory(questionObj);
    const statsHistory = JSON.parse(localStorage.getItem('ssi_stats_history')) || {};
    
    if (!statsHistory[cat]) {
      statsHistory[cat] = { correct: 0, incorrect: 0 };
    }
    
    if (isCorrect) {
      statsHistory[cat].correct++;
    } else {
      statsHistory[cat].incorrect++;
    }
    
    localStorage.setItem('ssi_stats_history', JSON.stringify(statsHistory));
    updateCategoryOptionsAndStats();
  }

  // Reset stats history (Krok 2.4)
  function resetStatsHistory() {
    if (confirm("Czy na pewno chcesz zresetować wszystkie statystyki nauki oraz kolejkę powtórek?")) {
      localStorage.removeItem('ssi_stats_history');
      localStorage.removeItem('ssi_spaced_repetition_errors');
      updateCategoryOptionsAndStats();
      alert("Statystyki i powtórki zostały zresetowane.");
    }
  }

  resetStatsBtn.addEventListener('click', resetStatsHistory);
  
  // Init categories and stats view on start
  updateCategoryOptionsAndStats();

  // --- 1.5 Load & Save PWA Settings ---
  function initSettings() {
    const savedAutoplay = localStorage.getItem('autoplay');
    if (savedAutoplay !== null) {
      autoplayToggle.checked = (savedAutoplay === 'true');
    } else {
      autoplayToggle.checked = true; // default true
    }

    const savedVoiceControl = localStorage.getItem('voiceControl');
    if (savedVoiceControl !== null) {
      voiceControlToggle.checked = (savedVoiceControl === 'true');
    } else {
      voiceControlToggle.checked = false; // default false
    }

    const savedCarplayHack = localStorage.getItem('carplayHack');
    if (savedCarplayHack !== null) {
      carplayHackToggle.checked = (savedCarplayHack === 'true');
    } else {
      carplayHackToggle.checked = true; // default true (enabled)
    }

    const savedRate = localStorage.getItem('voiceRate');
    if (savedRate !== null) {
      voiceRate.value = savedRate;
      voiceRateVal.textContent = savedRate;
    }

    const savedVolume = localStorage.getItem('voiceVolume');
    if (savedVolume !== null) {
      voiceVolume.value = savedVolume;
      voiceVolumeVal.textContent = Math.round(savedVolume * 100);
    }
  }

  // Event Listeners to persist changes
  autoplayToggle.addEventListener('change', () => {
    localStorage.setItem('autoplay', autoplayToggle.checked);
  });

  voiceControlToggle.addEventListener('change', () => {
    localStorage.setItem('voiceControl', voiceControlToggle.checked);
  });

  carplayHackToggle.addEventListener('change', () => {
    localStorage.setItem('carplayHack', carplayHackToggle.checked);
  });

  initSettings();

  // --- 2. Settings & PWA Guide Navigation ---
  settingsBtn.addEventListener('click', () => settingsModal.classList.add('active'));
  closeSettingsBtn.addEventListener('click', () => settingsModal.classList.remove('active'));
  
  // Close modal when clicking outside content
  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) settingsModal.classList.remove('active');
  });

  // Modal tab buttons
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(`tab-${tabId}`).classList.add('active');
    });
  });

  // Voice speed and volume slider change
  voiceRate.addEventListener('input', () => {
    voiceRateVal.textContent = voiceRate.value;
    localStorage.setItem('voiceRate', voiceRate.value);
  });
  voiceVolume.addEventListener('input', () => {
    voiceVolumeVal.textContent = Math.round(voiceVolume.value * 100);
    localStorage.setItem('voiceVolume', voiceVolume.value);
  });

  // --- 3. Text-to-Speech (Polish Lektor with Phonetic English Corrections) ---
  function getPhoneticPolishText(text) {
    let result = text;
    const dictionary = {
      'SSI': 'es es aj',
      'Open Water Diver': 'ołpen łoter dajwer',
      'Scuba Diver': 'skuba dajwer',
      'Try Scuba': 'traj skuba',
      'Scuba Skills Update': 'skuba skils apdejt',
      'Perfect Buoyancy': 'perfekt bojansy',
      'Diver Stress & Rescue': 'dajwer stres end reskju',
      'Stress & Rescue': 'stres end reskju',
      'Dive Guide': 'dajv gajd',
      'Divemaster': 'dajv master',
      'Science of Diving': 'sajens of dajwing',
      'Referral Diver': 'referal dajwer',
      'Indoor Diver': 'indor dajwer',
      'PWA': 'pe wu a',
      'Advanced Open Water Diver': 'adwansd ołpen łoter dajwer',
      'Enriched Air Nitrox': 'enriczt er najtroks',
      'Nitrox': 'najtroks',
      'Deep Diving': 'dip dajwing',
      'Decompression Diving': 'dekompreszyn dajwing',
      'Altitude Diving': 'altitjud dajwing',
      'Computer Diving': 'kompjuter dajwing',
      'Equipment Techniques': 'ekwipment teknik',
      'Explorer': 'eksplorer',
      'Explorers': 'eksplorers',
      'Specialty Instructor': 'speszalti instruktor',
      'Instructor Training Course': 'instruktor trejning kors',
      'Instructor Evaluation': 'instruktor ewaluojszyn',
      'Direct Application': 'dajrekt aplikiejszyn',
      'QMS': 'ku em es',
      'Co-Teaching': 'ko-ticzing',
      'experienced diver test': 'ekspiriensd dajwer test',
      'ISO': 'i zo'
    };

    // Replace English words with Polish phonetic spellings
    for (const [key, value] of Object.entries(dictionary)) {
      const regex = new RegExp('\\b' + key + '\\b', 'gi');
      result = result.replace(regex, value);
    }
    return result;
  }

  function loadPolishVoice() {
    if (!synth) return;
    const voices = synth.getVoices();
    speechVoice = voices.find(v => v.lang.startsWith('pl')) || null;
  }

  if (synth) {
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadPolishVoice;
    }
    loadPolishVoice();
  }

  function playSilence() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      }
    } catch (e) {
      console.log('CarPlay silence route error:', e);
    }
  }

  function cleanTextForSpeech(text) {
    if (!text) return '';
    return text
      .replace(/🔄\s*\[POWTÓRKA\]\s*/g, '')
      .replace(/🔄/g, '')
      .replace(/🔥/g, '')
      .replace(/🔁/g, '')
      .replace(/\[POWTÓRKA\]/gi, '')
      .trim();
  }

  function speakText(text, callback) {
    if (!synth) return;
    synth.cancel();

    // Activate CarPlay Bluetooth Media audio stream route dynamically if enabled!
    if (carplayHackToggle && carplayHackToggle.checked) {
      playSilence();
    }

    // Clean text of emojis and special prefixes
    const cleanText = cleanTextForSpeech(text);

    // Dynamically apply phonetic corrections so the Polish voice sounds flawless!
    const phoneticText = getPhoneticPolishText(cleanText);

    speechUtterance = new SpeechSynthesisUtterance(phoneticText);
    if (speechVoice) speechUtterance.voice = speechVoice;
    
    speechUtterance.lang = 'pl-PL';
    speechUtterance.rate = parseFloat(voiceRate.value);
    speechUtterance.volume = parseFloat(voiceVolume.value);

    speechUtterance.onend = () => {
      if (callback) callback();
    };

    speechUtterance.onerror = (e) => {
      console.error('Speech error:', e);
      if (callback) callback();
    };

    synth.speak(speechUtterance);
  }

  function speakQuestionAndOptions(questionObj) {
    if (!autoplayToggle.checked) return;

    let textToSpeak = "";
    if (questionObj.isRetry) {
      textToSpeak += "Powtórka pytania. ";
    }
    textToSpeak += `${questionObj.question}. `;
    textToSpeak += `Opcja pierwsza: ${questionObj.options[0]}. `;
    textToSpeak += `Opcja druga: ${questionObj.options[1]}. `;
    textToSpeak += `Opcja trzecia: ${questionObj.options[2]}. `;
    textToSpeak += `Opcja czwarta: ${questionObj.options[3]}.`;

    speakText(textToSpeak, () => {
      // If voice recognition is enabled, restart/ensure listening is active after lektor finishes reading
      if (voiceControlToggle.checked && !isAnswered) {
        startSpeechRecognition();
      }
    });
  }
  function repeatSpeech() {
    if (currentQuestionIndex < activeQuestions.length && !isAnswered) {
      const q = activeQuestions[currentQuestionIndex];
      let textToSpeak = "";
      if (q.isRetry) {
        textToSpeak += "Powtórka pytania. ";
      }
      textToSpeak += `${q.question}. `;
      q.options.forEach((opt, idx) => {
        textToSpeak += `Opcja ${idx + 1}: ${opt}. `;
      });
      
      // Stop recognition while speaking to avoid feedback loops!
      stopSpeechRecognition();
      
      speakText(textToSpeak, () => {
        // If voice recognition is enabled, restart after lektor finishes
        if (voiceControlToggle.checked && !isAnswered) {
          startSpeechRecognition();
        }
      });
    }
  }

  repeatSpeechBtn.addEventListener('click', repeatSpeech);

  // --- 4. Speech Recognition (Polish Speech-to-Text) ---
  function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      voiceControlToggle.checked = false;
      voiceControlToggle.disabled = true;
      console.warn('Speech recognition not supported in this browser.');
      return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'pl-PL';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      isListening = true;
      voiceStatusContainer.style.display = 'flex';
      voiceStatusText.textContent = 'Słucham... powiedz "jeden", "dwa", "trzy" lub "cztery"';
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript.toLowerCase().trim();
      console.log('Recognized speech:', result);
      
      // If in flashcard mode, check for flashcard specific voice commands
      if (isFlashcardMode) {
        if (!isCardFlipped) {
          // Card is Front (Question side)
          if (result.includes('znam') || result.includes('tak') || result.includes('wiem') || result.includes('znam to') || result.includes('kojarzę') || result.includes('yes') || result.includes('znamy')) {
            voiceStatusText.innerHTML = `Wykryto komendę: <strong>Znam</strong>`;
            setTimeout(() => {
              markFlashcardLearned(true);
            }, 800);
            return;
          } else if (result.includes('nie znam') || result.includes('nie') || result.includes('nie wiem') || result.includes('nie znam tego') || result.includes('niee') || result.includes('reguła') || result.includes('no') || result.includes('nieznane')) {
            voiceStatusText.innerHTML = `Wykryto komendę: <strong>Nie znam</strong>`;
            setTimeout(() => {
              markFlashcardLearned(false);
            }, 800);
            return;
          } else if (result.includes('obróć') || result.includes('odwróć') || result.includes('pokaż') || result.includes('karta')) {
            voiceStatusText.innerHTML = `Wykryto komendę: <strong>Obróć</strong>`;
            setTimeout(() => {
              flipFlashcard();
            }, 800);
            return;
          }
        } else {
          // Card is Back (Answer side)
          if (result.includes('dalej') || result.includes('następna') || result.includes('ok') || result.includes('rozumiem') || result.includes('następ') || result.includes('dale') || result.includes('next')) {
            voiceStatusText.innerHTML = `Wykryto komendę: <strong>Dalej</strong>`;
            setTimeout(() => {
              if (flashcardNextBtn && flashcardNextBtn.style.display === 'flex') {
                nextFlashcard();
              } else {
                markFlashcardLearned(true);
              }
            }, 800);
            return;
          } else if (result.includes('znam') || result.includes('tak') || result.includes('wiem')) {
            voiceStatusText.innerHTML = `Wykryto komendę: <strong>Znam</strong>`;
            setTimeout(() => {
              markFlashcardLearned(true);
            }, 800);
            return;
          } else if (result.includes('nie znam') || result.includes('nie') || result.includes('nie wiem')) {
            voiceStatusText.innerHTML = `Wykryto komendę: <strong>Nie znam</strong>`;
            setTimeout(() => {
              handleFlashcardIncorrect();
            }, 800);
            return;
          }
        }
      }

      // If awaiting reinforcement choice, check for "tak" / "nie" command
      if (awaitingReinforcementChoice) {
        if (result.includes('tak') || result.includes('chcę') || result.includes('rozpocznij') || result.includes('utrwal') || result.includes('yes') || result.includes('taki')) {
          voiceStatusText.innerHTML = `Wykryto komendę: <strong>TAK (Rozpocznij)</strong>`;
          awaitingReinforcementChoice = false;
          setTimeout(() => {
            startReinforcementQuiz();
          }, 800);
          return;
        } else if (result.includes('nie') || result.includes('nie chcę') || result.includes('wróć') || result.includes('zamknij') || result.includes('no') || result.includes('niee')) {
          voiceStatusText.innerHTML = `Wykryto komendę: <strong>NIE (Ekran Główny)</strong>`;
          awaitingReinforcementChoice = false;
          setTimeout(() => {
            if (synth) synth.cancel();
            resultsScreen.classList.remove('active');
            welcomeScreen.classList.add('active');
          }, 800);
          return;
        }
      }

      // If feedback panel is active, check for "dalej" navigation command
      if (feedbackPanel.classList.contains('active')) {
        if (result.includes('dalej') || result.includes('następ') || result.includes('ok') || result.includes('tak') || result.includes('dale')) {
          voiceStatusText.innerHTML = `Wykryto komendę: <strong>Dalej</strong>`;
          setTimeout(() => {
            feedbackPanel.classList.remove('active');
            advanceQuestion();
          }, 800);
          return;
        }
      }

      // Check for voice repeat command
      if (result.includes('powtórz') || result.includes('jeszcze raz') || result.includes('czytaj') || result.includes('odczytaj') || result.includes('powtór')) {
        voiceStatusText.innerHTML = `Wykryto komendę: <strong>Powtórz</strong>`;
        setTimeout(() => {
          repeatSpeech();
        }, 500);
        return;
      }
      
      let detectedIndex = -1;
      
      // Clean transcript and split into words to avoid substring false positives (e.g. "oraz" triggering "raz", "patrzy" triggering "trzy")
      const words = result.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").split(/\s+/);
      const hasWord = (targetList) => words.some(w => targetList.includes(w));

      if (hasWord(['jeden', 'jedynka', '1', 'raz', 'pierwsza', 'pierwsze', 'pierwszy', 'pierwszą', 'a'])) {
        detectedIndex = 0;
      } else if (hasWord(['dwa', 'dwójka', '2', 'druga', 'drugie', 'drugi', 'drugą', 'b'])) {
        detectedIndex = 1;
      } else if (hasWord(['trzy', 'trójka', '3', 'trzecia', 'trzecie', 'trzeci', 'trzecią', 'c'])) {
        detectedIndex = 2;
      } else if (hasWord(['cztery', 'czwórka', '4', 'czwarta', 'czwarte', 'czwarty', 'czwartą', 'd'])) {
        detectedIndex = 3;
      }

      if (detectedIndex !== -1 && !isAnswered) {
        voiceStatusText.innerHTML = `Wykryto: <strong>odpowiedź ${detectedIndex + 1}</strong>`;
        // Visual indicator glow on button
        const btn = answersGrid.children[detectedIndex];
        btn.classList.add('pulse-glow');
        
        // Short delay for visual confirmation before checking answer
        setTimeout(() => {
          btn.classList.remove('pulse-glow');
          selectAnswer(detectedIndex);
        }, 1000);
      } else {
        voiceStatusText.textContent = `Nie zrozumiałem: "${result}". Spróbuj ponownie.`;
        setTimeout(() => {
          if (voiceControlToggle.checked && !isAnswered) {
            startSpeechRecognition();
          }
        }, 1500);
      }
    };

    recognition.onerror = (event) => {
      console.log('Recognition error:', event.error);
      if (event.error === 'no-speech') {
        // Silently restart on silence timeout
        restartRecognitionSilently();
      } else {
        stopSpeechRecognition();
      }
    };

    recognition.onend = () => {
      isListening = false;
      // Auto-restart if toggle is checked AND (question is not answered OR feedback panel is active OR isFlashcardMode is active)
      const isFeedbackActive = feedbackPanel.classList.contains('active');
      if (voiceControlToggle.checked && (!isAnswered || isFeedbackActive || isFlashcardMode)) {
        restartRecognitionSilently();
      } else {
        voiceStatusContainer.style.display = 'none';
      }
    };
  }

  function startSpeechRecognition() {
    if (!recognition) return;
    if (isListening) return;

    try {
      recognition.start();
    } catch (e) {
      console.error('Error starting recognition:', e);
    }
  }

  function stopSpeechRecognition() {
    if (!recognition) return;
    try {
      recognition.stop();
    } catch (e) {}
    isListening = false;
    voiceStatusContainer.style.display = 'none';
  }

  function restartRecognitionSilently() {
    const isFeedbackActive = feedbackPanel.classList.contains('active');
    if (!voiceControlToggle.checked || (isAnswered && !isFeedbackActive)) return;
    
    clearTimeout(recognitionTimeout);
    recognitionTimeout = setTimeout(() => {
      if (!isListening && (!isAnswered || isFeedbackActive)) {
        startSpeechRecognition();
      }
    }, 300);
  }

  voiceControlToggle.addEventListener('change', () => {
    if (voiceControlToggle.checked) {
      startSpeechRecognition();
    } else {
      stopSpeechRecognition();
    }
  });

  // Initialize recognition
  initSpeechRecognition();

  // --- 5. Quiz Setup & Fisher-Yates Shuffle ---
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function startQuiz(mode) {
    isExamMode = (mode === 'exam');
    isFlashcardMode = false;
    
    // 1. Filter by category (Krok 2.2)
    const selectedCategoryVal = categoryFilter.value;
    let filteredPool = QUESTIONS_DB;
    
    if (selectedCategoryVal !== 'all') {
      const canonicalMap = {
        'metodyka': 'Metodyka i Psychologia',
        'ogolne': 'Standardy Ogólne',
        'wspolczynniki': 'Współczynniki i Wiek',
        'fizyka': 'Fizyka i Fizjologia',
        'specjalizacje': 'Specjalizacje'
      };
      const selectedCanonical = canonicalMap[selectedCategoryVal];
      filteredPool = QUESTIONS_DB.filter(q => getQuestionCategory(q) === selectedCanonical);
    }

    if (filteredPool.length === 0) {
      alert("Brak pytań w wybranej kategorii!");
      return;
    }

    // 2. Shuffle completely the selected pool
    const finalPool = shuffleArray(filteredPool);
    
    // 3. Select 50 questions for Exam Mode, or all for Practice Mode
    if (isExamMode) {
      activeQuestions = finalPool.slice(0, Math.min(50, finalPool.length));
    } else {
      activeQuestions = finalPool;
    }

    baseQuestionsCount = activeQuestions.length;
    retryCount = 0;
    const statusRetries = document.getElementById('statusRetries');
    if (statusRetries) {
      statusRetries.style.display = isExamMode ? 'none' : 'flex';
      const retriesText = document.getElementById('retriesText');
      if (retriesText) retriesText.textContent = 'Powtórki: 0';
    }

    currentQuestionIndex = 0;
    score = 0;
    incorrectQuestions = [];
    isAnswered = false;
    secondsElapsed = 0;
    
    welcomeScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    startTimer();
    loadQuestion(0);
  }

  // --- 6. Timer Functionality ---
  function startTimer() {
    clearInterval(timerInterval);
    quizTimer.classList.remove('overtime');
    quizTimer.textContent = isExamMode ? '45:00' : '00:00';
    
    timerInterval = setInterval(() => {
      secondsElapsed++;
      
      if (isExamMode) {
        const totalLimit = 45 * 60; // 45 minutes = 2700 seconds
        if (secondsElapsed <= totalLimit) {
          const remaining = totalLimit - secondsElapsed;
          const mins = String(Math.floor(remaining / 60)).padStart(2, '0');
          const secs = String(remaining % 60).padStart(2, '0');
          quizTimer.textContent = `${mins}:${secs}`;
          
          if (remaining === 0) {
            // Time has run out!
            alert("Czas się skończył! Możesz dokończyć test, od teraz naliczamy czas po limicie.");
            quizTimer.classList.add('overtime');
          }
        } else {
          // Overtime!
          const overtime = secondsElapsed - totalLimit;
          const mins = String(Math.floor(overtime / 60)).padStart(2, '0');
          const secs = String(overtime % 60).padStart(2, '0');
          quizTimer.textContent = `+${mins}:${secs}`;
          quizTimer.classList.add('overtime');
        }
      } else {
        // Study Mode (count-up)
        const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
        const secs = String(secondsElapsed % 60).padStart(2, '0');
        quizTimer.textContent = `${mins}:${secs}`;
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  // --- 7. Quiz Flow & Question Render ---
  function loadQuestion(index) {
    isAnswered = false;
    feedbackPanel.classList.remove('active');
    
    // Stop lektor and mic before loading next question
    if (synth) synth.cancel();
    stopSpeechRecognition();

    const q = activeQuestions[index];
    
    // UI Progress update
    const baseIndex = activeQuestions.slice(0, index + 1).filter(item => !item.isRetry).length;
    
    if (q.isRetry) {
      progressText.textContent = `Powtórka pytania ${baseIndex} / ${baseQuestionsCount}`;
    } else {
      progressText.textContent = `Pytanie ${baseIndex} / ${baseQuestionsCount}`;
    }
    
    scoreText.textContent = score;
    
    const retriesText = document.getElementById('retriesText');
    if (retriesText) {
      retriesText.textContent = `Powtórki: ${retryCount}`;
    }
    
    const progressPercent = baseQuestionsCount > 0 ? ((baseIndex - 1) / baseQuestionsCount) * 100 : 0;
    progressBarFill.style.width = `${progressPercent}%`;

    // Render Question & Options
    questionText.textContent = q.question;
    
    answerButtons.forEach((btn, idx) => {
      btn.className = 'answer-btn'; // reset styles
      btn.querySelector('.ans-text').textContent = q.options[idx];
    });

    // Handle retry badge in question card
    let retryBadge = questionCard.querySelector('.retry-badge');
    if (retryBadge) retryBadge.remove();
    
    if (q.isRetry) {
      const badge = document.createElement('span');
      badge.className = 'retry-badge';
      badge.innerHTML = '<i class="fa-solid fa-clock-rotate-left"></i> Powtórka';
      questionCard.querySelector('.question-actions').appendChild(badge);
    } else if (q.isSpacedRepetition) {
      const badge = document.createElement('span');
      badge.className = 'retry-badge';
      badge.style.background = 'rgba(0, 242, 254, 0.12)';
      badge.style.borderColor = 'rgba(0, 242, 254, 0.25)';
      badge.style.color = 'var(--color-cyan)';
      badge.innerHTML = '<i class="fa-solid fa-clock"></i> Powtórka (Spaced Rep)';
      questionCard.querySelector('.question-actions').appendChild(badge);
    }

    // Autoplay voice synthesis if enabled
    setTimeout(() => {
      speakQuestionAndOptions(q);
      
      // If voice recognition is enabled and lektor didn't auto-start, start listening
      if (voiceControlToggle.checked && !autoplayToggle.checked) {
        startSpeechRecognition();
      }
    }, 300);
  }

  function selectAnswer(selectedIndex) {
    if (isAnswered) return;
    isAnswered = true;
    
    // Stop any mic/listening immediately on click
    stopSpeechRecognition();
    if (synth) synth.cancel();

    const q = activeQuestions[currentQuestionIndex];
    const correctIndex = q.answer;
    
    const selectedBtn = answersGrid.children[selectedIndex];
    const correctBtn = answersGrid.children[correctIndex];

    if (selectedIndex === correctIndex) {
      // CORRECT ANSWER
      // Only increment score if this is not a retry!
      if (!q.isRetry) {
        score++;
      }
      scoreText.textContent = score;
      selectedBtn.classList.add('correct');
      playSynthesizedCorrect();

      // Krok 2.4: Record attempt and Krok 2.3: Remove from Spaced Repetition queue
      recordQuestionAttempt(q, true);
      if (!q.isRetry) {
        const spacedRepErrors = JSON.parse(localStorage.getItem('ssi_spaced_repetition_errors')) || [];
        const indexToRemove = spacedRepErrors.indexOf(q.question);
        if (indexToRemove !== -1) {
          spacedRepErrors.splice(indexToRemove, 1);
          localStorage.setItem('ssi_spaced_repetition_errors', JSON.stringify(spacedRepErrors));
        }
      }

      // Go to next question after short delay
      setTimeout(() => {
        advanceQuestion();
      }, 1200);

    } else {
      // INCORRECT ANSWER
      selectedBtn.classList.add('incorrect');
      correctBtn.classList.add('correct');
      playSynthesizedIncorrect();

      // Krok 2.4: Record attempt and Krok 2.3: Add to Spaced Repetition queue
      recordQuestionAttempt(q, false);
      if (!q.isRetry) {
        const spacedRepErrors = JSON.parse(localStorage.getItem('ssi_spaced_repetition_errors')) || [];
        if (!spacedRepErrors.includes(q.question)) {
          spacedRepErrors.push(q.question);
          localStorage.setItem('ssi_spaced_repetition_errors', JSON.stringify(spacedRepErrors));
        }
      }
      
      // Save incorrect question for end review and increment attempt count
      if (!q.isRetry) {
        incorrectQuestions.push({
          question: q.question,
          correctText: q.options[correctIndex],
          reference: q.reference,
          originalQuestion: q,
          retriesCount: 1
        });
      } else {
        const baseText = q.originalQuestionText || q.question;
        const existingErr = incorrectQuestions.find(err => err.question === baseText);
        if (existingErr) {
          existingErr.retriesCount++;
        }
      }

      // Show liquid glass feedback panel with details
      refChapter.innerHTML = `<i class="fa-solid fa-book"></i> ${q.reference.chapter}`;
      refSection.innerHTML = `<i class="fa-solid fa-bookmark"></i> ${q.reference.section}`;
      refPage.textContent = q.reference.page;
      if (feedbackPdfPageNum) {
        feedbackPdfPageNum.textContent = q.reference.page;
      }
      refQuote.textContent = `"${q.reference.quote}"`;

      // --- Spaced Repetition Retry Injection (Twardy tryb aż do skutku we wszystkich trybach) ---
      retryCount++;
      const baseText = q.originalQuestionText || q.question;
      const retryQ = {
        ...q,
        isRetry: true,
        originalQuestionText: baseText,
        question: "🔄 [POWTÓRKA] " + baseText
      };
      
      // Wrzuć dokładnie za 3 pytania (lub na koniec, jeśli test krótszy). Gwarancja powrotu pytania.
      const insertIndex = Math.min(activeQuestions.length, currentQuestionIndex + 4);
      activeQuestions.splice(insertIndex, 0, retryQ);
      console.log(`Błąd w pytaniu. Twardy Tryb: Wstrzyknięto powtórkę "${baseText.substring(0,20)}..." na indeks ${insertIndex}. Razem w kolejce: ${activeQuestions.length}`);
      
      setTimeout(() => {
        feedbackPanel.classList.add('active');
        
        // Optionally read the correct citation aloud in Polish
        if (autoplayToggle.checked) {
          // Robust and detailed voice feedback template for hierarchy and longer quotes!
          speakText(`Błędna odpowiedź. Prawidłowa odpowiedź to opcja ${correctIndex + 1}. Według standardów SSI, rozdział: ${q.reference.chapter}, podrozdział: ${q.reference.section}, na stronie ${q.reference.page}. Oficjalny zapis ze standardów brzmi: ${q.reference.quote}`, () => {
            // Restart recognition to listen for "dalej" when lektor finishes
            if (voiceControlToggle.checked) {
              startSpeechRecognition();
            }
          });
        } else {
          // Start recognition immediately if autoplay is disabled
          if (voiceControlToggle.checked) {
            startSpeechRecognition();
          }
        }
      }, 400);
    }
  }

  function advanceQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
      loadQuestion(currentQuestionIndex);
    } else {
      showResults();
    }
  }

  nextQuestionBtn.addEventListener('click', () => {
    feedbackPanel.classList.remove('active');
    advanceQuestion();
  });

  // Attach click listeners to answer buttons
  answerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'));
      selectAnswer(idx);
    });
  });

  // Sound helper deprecated in favor of Web Audio API synthesis

  // --- 8. Screen 3: Results & Statistics ---
  function showResults() {
    stopTimer();
    if (synth) synth.cancel();
    stopSpeechRecognition();

    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    const total = baseQuestionsCount;
    const percent = total > 0 ? Math.round((score / total) * 100) : 0;
    
    // Set circle progress ring SVG
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    progressRingCircle.style.strokeDasharray = circumference;
    
    const offset = circumference - (percent / 100) * circumference;
    progressRingCircle.style.strokeDashoffset = offset;

    // Visual result text
    resultPercent.textContent = `${percent}%`;
    if (!isExamMode && retryCount > 0) {
      resultDetails.textContent = `Udzieliłeś ${score} poprawnych odpowiedzi na ${total} pytań w czasie ${quizTimer.textContent}. W trakcie sesji wygenerowano i zaliczono ${retryCount} powtórek błędnych odpowiedzi.`;
    } else {
      resultDetails.textContent = `Udzieliłeś ${score} poprawnych odpowiedzi na ${total} pytań w czasie ${quizTimer.textContent}.`;
    }

    // Passing score criteria is 90% (Instructor standards)
    if (percent >= 90) {
      resultVerdict.textContent = 'Gratulacje! Zdałeś Egzamin!';
      resultVerdict.style.color = 'var(--color-green)';
      progressRingCircle.style.stroke = 'var(--color-green)';
    } else {
      resultVerdict.textContent = 'Niestety, spróbuj jeszcze raz!';
      resultVerdict.style.color = 'var(--color-red)';
      progressRingCircle.style.stroke = 'var(--color-red)';
    }

    // Show incorrect questions review list if there are mistakes
    const reinforcementPrompt = document.getElementById('reinforcementPrompt');
    if (incorrectQuestions.length > 0) {
      reviewList.innerHTML = '';
      incorrectQuestions.forEach(item => {
        const reviewEl = document.createElement('div');
        reviewEl.className = 'review-item';
        reviewEl.innerHTML = `
          <div class="review-q">${item.question}</div>
          <div class="review-ref">
            <strong>Poprawna odp:</strong> ${item.correctText}<br>
            <small>PDF Str. ${item.reference.page} • ${item.reference.chapter} • ${item.reference.section}</small>
          </div>
          <span class="badge-retry"><i class="fa-solid fa-clock-rotate-left"></i> Nieudane próby: ${item.retriesCount}</span>
        `;
        reviewList.appendChild(reviewEl);
      });
      incorrectReview.style.display = 'block';
      
      if (reinforcementPrompt) {
        reinforcementPrompt.style.display = 'block';
      }

      // Voice prompt trigger: Lektor asks if user wants to start Reinforcement Session
      setTimeout(() => {
        const statusText = `Czy chcesz rozpocząć sesję utrwalającą?`;
        awaitingReinforcementChoice = true;
        
        speakText(statusText, () => {
          if (voiceControlToggle.checked) {
            startSpeechRecognition();
          }
        });
      }, 1000);

    } else {
      incorrectReview.style.display = 'none';
      if (reinforcementPrompt) {
        reinforcementPrompt.style.display = 'none';
      }
    }
  }

  // --- 9. Screen Nav Buttons ---
  startTestBtn.addEventListener('click', () => startQuiz('exam'));
  startPracticeBtn.addEventListener('click', () => startQuiz('practice'));
  
  restartTestBtn.addEventListener('click', () => {
    startQuiz(isExamMode ? 'exam' : 'practice');
  });
  
  backToHomeBtn.addEventListener('click', () => {
    if (synth) synth.cancel();
    stopSpeechRecognition();
    resultsScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
  });

  quitQuizBtn.addEventListener('click', () => {
    if (confirm("Czy na pewno chcesz przerwać ten test i wrócić do menu głównego? Twój obecny postęp zostanie utracony.")) {
      stopTimer();
      if (synth) synth.cancel();
      stopSpeechRecognition();
      quizScreen.classList.remove('active');
      welcomeScreen.classList.add('active');
    }
  });

  function startReinforcementQuiz() {
    if (synth) synth.cancel();
    stopSpeechRecognition();
    awaitingReinforcementChoice = false;

    if (incorrectQuestions.length === 0) return;

    // Extract original questions and reset retry flags so they act as fresh base questions
    const uniqueFailed = incorrectQuestions.map(item => {
      const cleanQ = { ...item.originalQuestion };
      delete cleanQ.isRetry;
      delete cleanQ.originalQuestionText;
      return cleanQ;
    });

    isExamMode = false;
    isFlashcardMode = false;

    // Shuffle the unique failed questions
    activeQuestions = shuffleArray(uniqueFailed);
    baseQuestionsCount = activeQuestions.length;
    retryCount = 0;

    // Setup Status Bar Retries counter
    const statusRetries = document.getElementById('statusRetries');
    if (statusRetries) {
      statusRetries.style.display = 'flex';
      const retriesText = document.getElementById('retriesText');
      if (retriesText) retriesText.textContent = 'Powtórki: 0';
    }

    currentQuestionIndex = 0;
    score = 0;
    incorrectQuestions = [];
    isAnswered = false;
    secondsElapsed = 0;

    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');

    startTimer();
    loadQuestion(0);
  }

  if (startReinforcementBtn) {
    startReinforcementBtn.addEventListener('click', startReinforcementQuiz);
  }
  if (reinforcementYesBtn) {
    reinforcementYesBtn.addEventListener('click', startReinforcementQuiz);
  }
  if (reinforcementNoBtn) {
    reinforcementNoBtn.addEventListener('click', () => {
      if (synth) synth.cancel();
      stopSpeechRecognition();
      awaitingReinforcementChoice = false;
      resultsScreen.classList.remove('active');
      welcomeScreen.classList.add('active');
    });
  }

  // --- Tryb Fiszki (Flashcards Engine) (Krok 2.1) ---
  
  function startFlashcards() {
    isFlashcardMode = true;
    isExamMode = false;
    flashcardLearnedCount = 0;
    
    // 1. Filter by category
    const selectedCategoryVal = categoryFilter.value;
    let filteredPool = QUESTIONS_DB;
    
    if (selectedCategoryVal !== 'all') {
      const canonicalMap = {
        'metodyka': 'Metodyka i Psychologia',
        'ogolne': 'Standardy Ogólne',
        'wspolczynniki': 'Współczynniki i Wiek',
        'fizyka': 'Fizyka i Fizjologia',
        'specjalizacje': 'Specjalizacje'
      };
      const selectedCanonical = canonicalMap[selectedCategoryVal];
      filteredPool = QUESTIONS_DB.filter(q => getQuestionCategory(q) === selectedCanonical);
    }

    if (filteredPool.length === 0) {
      alert("Brak pytań w wybranej kategorii!");
      return;
    }

    // Shuffle the pool for flashcards
    activeQuestions = shuffleArray(filteredPool);
    currentQuestionIndex = 0;
    
    welcomeScreen.classList.remove('active');
    flashcardScreen.classList.add('active');
    
    loadFlashcard(0);
  }

  function loadFlashcard(index) {
    isCardFlipped = false;
    flashcard.classList.remove('flipped');
    
    // Reset controls UI state
    if (flashcardAnswersRow) flashcardAnswersRow.style.display = 'flex';
    if (flashcardNextBtn) flashcardNextBtn.style.display = 'none';
    
    if (synth) synth.cancel();
    stopSpeechRecognition();

    const q = activeQuestions[index];
    
    // Progress UI
    flashcardProgressText.textContent = `Karta ${index + 1} / ${activeQuestions.length}`;
    flashcardLearnedText.textContent = flashcardLearnedCount;
    
    const progressPercent = (index / activeQuestions.length) * 100;
    flashcardProgressBarFill.style.width = `${progressPercent}%`;

    // Render texts
    flashcardFrontText.textContent = q.question;
    flashcardBackText.textContent = q.options[q.answer];
    flashcardRefChapter.innerHTML = `<i class="fa-solid fa-book"></i> ${q.reference.chapter}`;
    flashcardRefPage.textContent = q.reference.page;
    flashcardFeedbackPdfPageNum.textContent = q.reference.page;
    flashcardRefQuote.textContent = `"${q.reference.quote}"`;

    // Autoplay TTS for front card if enabled
    if (autoplayToggle.checked) {
      setTimeout(() => {
        speakText(q.question + ". Czy znasz to zagadnienie?", () => {
          if (voiceControlToggle.checked) {
            startSpeechRecognition();
          }
        });
      }, 300);
    } else if (voiceControlToggle.checked) {
      setTimeout(() => {
        startSpeechRecognition();
      }, 300);
    }
  }

  function flipFlashcard() {
    isCardFlipped = !isCardFlipped;
    if (isCardFlipped) {
      flashcard.classList.add('flipped');
      playSynthesizedCorrect(); // light audio chime on flip
      
      const q = activeQuestions[currentQuestionIndex];
      // Autoplay TTS for correct answer citation if enabled
      if (autoplayToggle.checked) {
        speakText(`Prawidłowa odpowiedź: ${q.options[q.answer]}. Zgodnie ze standardami strona ${q.reference.page}: ${q.reference.quote}`, () => {
          if (voiceControlToggle.checked) {
            startSpeechRecognition();
          }
        });
      }
    } else {
      flashcard.classList.remove('flipped');
    }
  }

  function handleFlashcardIncorrect() {
    const q = activeQuestions[currentQuestionIndex];
    
    // Add to Spaced Repetition queue if they don't know it!
    const spacedRepErrors = JSON.parse(localStorage.getItem('ssi_spaced_repetition_errors')) || [];
    if (!spacedRepErrors.includes(q.question)) {
      spacedRepErrors.push(q.question);
      localStorage.setItem('ssi_spaced_repetition_errors', JSON.stringify(spacedRepErrors));
    }
    
    isCardFlipped = true;
    flashcard.classList.add('flipped');
    
    // Switch answers button row to the Next action button
    if (flashcardAnswersRow) flashcardAnswersRow.style.display = 'none';
    if (flashcardNextBtn) flashcardNextBtn.style.display = 'flex';
    
    playSynthesizedCorrect();
    
    // Voice explanation of the rule
    speakText(`Prawidłowa odpowiedź: ${q.options[q.answer]}. Zgodnie ze standardami strona ${q.reference.page}: ${q.reference.quote}`, () => {
      if (voiceControlToggle.checked) {
        startSpeechRecognition();
      }
    });
  }

  function markFlashcardLearned(isLearned) {
    const q = activeQuestions[currentQuestionIndex];
    
    if (isLearned) {
      flashcardLearnedCount++;
      // Remove from Spaced Repetition queue if they know it!
      const spacedRepErrors = JSON.parse(localStorage.getItem('ssi_spaced_repetition_errors')) || [];
      const idxToRemove = spacedRepErrors.indexOf(q.question);
      if (idxToRemove !== -1) {
        spacedRepErrors.splice(idxToRemove, 1);
        localStorage.setItem('ssi_spaced_repetition_errors', JSON.stringify(spacedRepErrors));
      }
      
      currentQuestionIndex++;
      if (currentQuestionIndex < activeQuestions.length) {
        loadFlashcard(currentQuestionIndex);
      } else {
        // Finished all cards!
        alert(`Gratulacje! Przejrzałeś wszystkie fiszki w tym dziale. Twój wynik: ${flashcardLearnedCount} / ${activeQuestions.length} zapamiętanych.`);
        quitFlashcards();
      }
    } else {
      handleFlashcardIncorrect();
    }
  }

  function nextFlashcard() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
      loadFlashcard(currentQuestionIndex);
    } else {
      // Finished all cards!
      alert(`Gratulacje! Przejrzałeś wszystkie fiszki w tym dziale. Twój wynik: ${flashcardLearnedCount} / ${activeQuestions.length} zapamiętanych.`);
      quitFlashcards();
    }
  }

  function quitFlashcards() {
    if (synth) synth.cancel();
    stopSpeechRecognition();
    
    flashcardScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
    
    // Refresh stats dashboard
    updateCategoryOptionsAndStats();
  }

  // --- Flashcard Event Bindings ---
  startFlashcardsBtn.addEventListener('click', startFlashcards);
  quitFlashcardsBtn.addEventListener('click', quitFlashcards);
  flashcardFlipBtn.addEventListener('click', flipFlashcard);
  
  // Tapping the card also flips it!
  flashcardContainer.addEventListener('click', (e) => {
    // Avoid double flipping when clicking buttons or scrollbars inside the card back
    if (e.target.closest('button') || e.target.closest('.ref-quote')) return;
    flipFlashcard();
  });
  
  flashcardIncorrectBtn.addEventListener('click', () => markFlashcardLearned(false));
  flashcardCorrectBtn.addEventListener('click', () => markFlashcardLearned(true));
  if (flashcardNextBtn) {
    flashcardNextBtn.addEventListener('click', nextFlashcard);
  }
  
  flashcardPdfBtn.addEventListener('click', () => {
    const pageNumVal = parseInt(flashcardFeedbackPdfPageNum.textContent.trim()) || 1;
    openPdfViewer(pageNumVal);
  });

  // Premium Keyboard Shortcuts for Desktop
  document.addEventListener('keydown', (e) => {
    if (flashcardScreen.classList.contains('active')) {
      if (e.code === 'Space') {
        e.preventDefault();
        flipFlashcard();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        if (isCardFlipped && flashcardNextBtn && flashcardNextBtn.style.display === 'flex') {
          nextFlashcard();
        } else {
          markFlashcardLearned(false);
        }
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        if (isCardFlipped && flashcardNextBtn && flashcardNextBtn.style.display === 'flex') {
          nextFlashcard();
        } else {
          markFlashcardLearned(true);
        }
      }
    }
  });

  // --- 10. PWA Integration & Offline Capabilities ---
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent standard install bar
    e.preventDefault();
    deferredPrompt = e;
    // Show custom banner
    pwaBanner.style.display = 'flex';
  });

  installAppBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    
    pwaBanner.style.display = 'none';
    deferredPrompt.prompt();
    
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);
    deferredPrompt = null;
  });

  window.addEventListener('appinstalled', () => {
    console.log('PWA was installed successfully');
    pwaBanner.style.display = 'none';
    deferredPrompt = null;
  });

  // Register Service Worker for offline PWA support and update handling
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => {
          console.log('Service Worker registered successfully:', reg.scope);
          
          // Check for service worker updates
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, show update toast!
                  showUpdateToast(reg);
                }
              });
            }
          });
        })
        .catch(err => console.error('Service Worker registration failed:', err));
    });

    // Handle controller change (reloads page when skipWaiting finishes)
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload(true);
      }
    });
  }

  // --- 8. HTML5 Canvas PDF Standards Viewer Controls ---
  let pdfDoc = null;
  let pdfPageNum = 1;
  let pageRendering = false;
  let pageNumPending = null;
  let pdfScale = 1.25; // Good default zoom for standard mobile layout

  // Set worker path
  if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = './pdf.worker.min.js';
  }

  function renderPdfPage(num) {
    if (!pdfDoc || !pdfCanvas) return;
    pageRendering = true;
    
    if (pdfLoadingIndicator) {
      pdfLoadingIndicator.style.display = 'flex';
    }
    
    pdfDoc.getPage(num).then(page => {
      if (!pdfCanvas) return;
      const ctx = pdfCanvas.getContext('2d');
      const viewport = page.getViewport({ scale: pdfScale });
      
      pdfCanvas.height = viewport.height;
      pdfCanvas.width = viewport.width;
      
      const renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };
      
      const renderTask = page.render(renderContext);
      
      renderTask.promise.then(() => {
        pageRendering = false;
        if (pdfLoadingIndicator) {
          pdfLoadingIndicator.style.display = 'none';
        }
        
        if (pageNumPending !== null) {
          renderPdfPage(pageNumPending);
          pageNumPending = null;
        }
      });
    }).catch(err => {
      console.error('Error rendering PDF page:', err);
      pageRendering = false;
      if (pdfLoadingIndicator) {
        pdfLoadingIndicator.style.display = 'none';
      }
    });
    
    if (currentPageNumText) {
      currentPageNumText.textContent = num;
    }
  }

  function queueRenderPage(num) {
    if (pageRendering) {
      pageNumPending = num;
    } else {
      renderPdfPage(num);
    }
  }

  function loadPdfDocument(targetPage = 1) {
    if (pdfLoadingIndicator) {
      pdfLoadingIndicator.style.display = 'flex';
    }
    
    if (pdfDoc) {
      pdfPageNum = targetPage;
      renderPdfPage(pdfPageNum);
      return;
    }
    
    const pdfUrl = 'STANDARDS-SCUBA_Polish_IM.pdf';
    
    pdfjsLib.getDocument(pdfUrl).promise.then(pdfDoc_ => {
      pdfDoc = pdfDoc_;
      if (totalPagesText) {
        totalPagesText.textContent = pdfDoc.numPages;
      }
      pdfPageNum = targetPage;
      renderPdfPage(pdfPageNum);
    }).catch(err => {
      console.error('Error loading PDF document:', err);
      if (pdfLoadingIndicator) {
        pdfLoadingIndicator.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: var(--color-red);"></i> Błąd wczytywania standardów. Upewnij się, że plik PDF został pobrany.`;
      }
    });
  }

  function openPdfViewer(pageNumVal = 1) {
    // Pause speech recognition while viewing PDF
    stopSpeechRecognition();
    
    // Open modal
    if (pdfModal) {
      pdfModal.classList.add('active');
    }
    
    // Load and render
    loadPdfDocument(pageNumVal);
    console.log(`Opened HTML5 PDF viewer on page ${pageNumVal}`);
  }

  function closePdfViewer() {
    if (pdfModal) {
      pdfModal.classList.remove('active');
    }
    
    // Resume speech recognition if enabled and quiz is not answered
    if (voiceControlToggle.checked && !isAnswered && currentQuestionIndex < activeQuestions.length) {
      startSpeechRecognition();
    }
  }

  function onPrevPage() {
    if (pdfPageNum <= 1) return;
    pdfPageNum--;
    queueRenderPage(pdfPageNum);
  }

  function onNextPage() {
    if (!pdfDoc || pdfPageNum >= pdfDoc.numPages) return;
    pdfPageNum++;
    queueRenderPage(pdfPageNum);
  }

  // Prev / Next click listeners
  if (prevPageBtn) prevPageBtn.addEventListener('click', onPrevPage);
  if (nextPageBtn) nextPageBtn.addEventListener('click', onNextPage);

  // Zoom click listeners
  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      pdfScale += 0.25;
      if (pdfScale > 3.0) pdfScale = 3.0;
      renderPdfPage(pdfPageNum);
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      pdfScale -= 0.25;
      if (pdfScale < 0.5) pdfScale = 0.5;
      renderPdfPage(pdfPageNum);
    });
  }

  // Swipe Gestures for Fluid Mobile Page Flipping
  if (pdfCanvasContainer) {
    let touchStartX = 0;
    let touchEndX = 0;
    
    pdfCanvasContainer.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    pdfCanvasContainer.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      
      const swipeThreshold = 50; // pixels
      if (touchStartX - touchEndX > swipeThreshold) {
        // Swiped Left -> Next page
        onNextPage();
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swiped Right -> Previous page
        onPrevPage();
      }
    }, { passive: true });
  }

  // App interactions
  if (openPdfMainMenuBtn) {
    openPdfMainMenuBtn.addEventListener('click', () => openPdfViewer(1));
  }
  if (closePdfBtn) {
    closePdfBtn.addEventListener('click', closePdfViewer);
  }
  // refPage click listener deprecated since the upper badge is now static
  if (openPdfFeedbackBtn) {
    openPdfFeedbackBtn.addEventListener('click', () => {
      const pageNumVal = feedbackPdfPageNum ? (parseInt(feedbackPdfPageNum.textContent.trim()) || 1) : 1;
      openPdfViewer(pageNumVal);
    });
  }

  function showUpdateToast(reg) {
    const toast = document.getElementById('updateToast');
    const updateBtn = document.getElementById('updateToastBtn');
    
    if (toast && updateBtn) {
      toast.classList.add('show');
      updateBtn.addEventListener('click', () => {
        toast.classList.remove('show');
        if (reg.waiting) {
          reg.waiting.postMessage({ action: 'skipWaiting' });
        }
      });
    }
  }
});
