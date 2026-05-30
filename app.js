/* ==========================================================================
   SSI Standards Trainer - Core Application Logic
   ========================================================================== */

const APP_VERSION = 'v2026.5.30.04';

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
  
  const soundCorrect = document.getElementById('soundCorrect');
  const soundIncorrect = document.getElementById('soundIncorrect');
  
  const voiceRate = document.getElementById('voiceRate');
  const voiceRateVal = document.getElementById('voiceRateVal');
  const voiceVolume = document.getElementById('voiceVolume');
  const voiceVolumeVal = document.getElementById('voiceVolumeVal');
  
  const pwaBanner = document.getElementById('pwaBanner');
  const installAppBtn = document.getElementById('installAppBtn');

  // --- App State ---
  let activeQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let incorrectQuestions = [];
  let isAnswered = false;
  let timerInterval = null;
  let secondsElapsed = 0;
  let isExamMode = false; // true = 50 random questions, false = all questions
  
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

  function speakText(text, callback) {
    if (!synth) return;
    synth.cancel();

    // Activate CarPlay Bluetooth Media audio stream route dynamically if enabled!
    if (carplayHackToggle && carplayHackToggle.checked) {
      playSilence();
    }

    // Dynamically apply phonetic corrections so the Polish voice sounds flawless!
    const phoneticText = getPhoneticPolishText(text);

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
      // Auto-restart if toggle is checked AND (question is not answered OR feedback panel is active)
      const isFeedbackActive = feedbackPanel.classList.contains('active');
      if (voiceControlToggle.checked && (!isAnswered || isFeedbackActive)) {
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
    
    // Shuffle the QUESTIONS_DB from questions.js
    const shuffledPool = shuffleArray(QUESTIONS_DB);
    
    if (isExamMode) {
      // 50 random questions for Exam Mode
      activeQuestions = shuffledPool.slice(0, Math.min(50, shuffledPool.length));
    } else {
      // All questions for Study Mode
      activeQuestions = shuffledPool;
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
    progressText.textContent = `Pytanie ${index + 1} / ${activeQuestions.length}`;
    scoreText.textContent = score;
    
    const progressPercent = (index / activeQuestions.length) * 100;
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
      playAudio(soundCorrect);

      // Go to next question after short delay
      setTimeout(() => {
        advanceQuestion();
      }, 1200);

    } else {
      // INCORRECT ANSWER
      selectedBtn.classList.add('incorrect');
      correctBtn.classList.add('correct');
      playAudio(soundIncorrect);
      
      // Save incorrect question for end review (only if it wasn't already a retry)
      if (!q.isRetry) {
        incorrectQuestions.push({
          question: q.question,
          correctText: q.options[correctIndex],
          reference: q.reference
        });
      }

      // Show liquid glass feedback panel with details
      refChapter.innerHTML = `<i class="fa-solid fa-book"></i> ${q.reference.chapter}`;
      refSection.innerHTML = `<i class="fa-solid fa-bookmark"></i> ${q.reference.section}`;
      refPage.textContent = q.reference.page;
      if (feedbackPdfPageNum) {
        feedbackPdfPageNum.textContent = q.reference.page;
      }
      refQuote.textContent = `"${q.reference.quote}"`;

      // --- Spaced Repetition Retry Injection ---
      if (!q.isRetry) {
        const retryQ = {
          ...q,
          isRetry: true,
          originalQuestionText: q.question
        };
        retryQ.question = "🔄 [POWTÓRKA] " + q.question;
        
        // Insert exactly 2 questions later (position currentQuestionIndex + 3)
        const insertIndex = Math.min(activeQuestions.length, currentQuestionIndex + 3);
        activeQuestions.splice(insertIndex, 0, retryQ);
        console.log(`Inserted incorrect question copy at index ${insertIndex} for retry later. Total questions: ${activeQuestions.length}`);
      }
      
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

  // Sound play helper (ensures overlap safety)
  function playAudio(audioEl) {
    if (!audioEl) return;
    audioEl.currentTime = 0;
    audioEl.play().catch(e => console.log('Audio playback blocked:', e));
  }

  // --- 8. Screen 3: Results & Statistics ---
  function showResults() {
    stopTimer();
    if (synth) synth.cancel();
    stopSpeechRecognition();

    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    const total = activeQuestions.length;
    const percent = total > 0 ? Math.round((score / total) * 100) : 0;
    
    // Set circle progress ring SVG
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    progressRingCircle.style.strokeDasharray = circumference;
    
    const offset = circumference - (percent / 100) * circumference;
    progressRingCircle.style.strokeDashoffset = offset;

    // Visual result text
    resultPercent.textContent = `${percent}%`;
    resultDetails.textContent = `Udzieliłeś ${score} poprawnych odpowiedzi na ${total} pytań w czasie ${quizTimer.textContent}.`;

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
        `;
        reviewList.appendChild(reviewEl);
      });
      incorrectReview.style.display = 'block';
    } else {
      incorrectReview.style.display = 'none';
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
  if (refPage) {
    refPage.addEventListener('click', () => {
      const pageNumVal = parseInt(refPage.textContent.trim()) || 1;
      openPdfViewer(pageNumVal);
    });
  }
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
