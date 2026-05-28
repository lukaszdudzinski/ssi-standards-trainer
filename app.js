/* ==========================================================================
   SSI Standards Trainer - Core Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
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
  
  const quizTimer = document.getElementById('quizTimer');
  const progressText = document.getElementById('progressText');
  const scoreText = document.getElementById('scoreText');
  const progressBarFill = document.getElementById('progressBarFill');
  
  const autoplayToggle = document.getElementById('autoplayToggle');
  const voiceControlToggle = document.getElementById('voiceControlToggle');
  
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
  });
  voiceVolume.addEventListener('input', () => {
    voiceVolumeVal.textContent = Math.round(voiceVolume.value * 100);
  });

  // --- 3. Text-to-Speech (Polish Lektor) ---
  function loadPolishVoice() {
    if (!synth) return;
    const voices = synth.getVoices();
    // Try to find a Polish voice
    speechVoice = voices.find(v => v.lang.startsWith('pl')) || null;
  }

  if (synth) {
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadPolishVoice;
    }
    loadPolishVoice();
  }

  function speakText(text, callback) {
    if (!synth) return;
    synth.cancel(); // Cancel any current speech

    speechUtterance = new SpeechSynthesisUtterance(text);
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

    let textToSpeak = `${questionObj.question}. `;
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

  repeatSpeechBtn.addEventListener('click', () => {
    if (currentQuestionIndex < activeQuestions.length) {
      const q = activeQuestions[currentQuestionIndex];
      // Speak even if autoplay is off when button is clicked manually
      let textToSpeak = `${q.question}. `;
      q.options.forEach((opt, idx) => {
        textToSpeak += `Opcja ${idx + 1}: ${opt}. `;
      });
      speakText(textToSpeak);
    }
  });

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
      
      let detectedIndex = -1;
      
      // Polish speech word matching
      if (result.includes('jeden') || result === '1' || result.includes('raz') || result.includes('pierwsz')) {
        detectedIndex = 0;
      } else if (result.includes('dwa') || result === '2' || result.includes('drug')) {
        detectedIndex = 1;
      } else if (result.includes('trzy') || result === '3' || result.includes('trzec')) {
        detectedIndex = 2;
      } else if (result.includes('cztery') || result === '4' || result.includes('czwart')) {
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
      // Auto-restart if toggle is still checked and question not yet answered
      if (voiceControlToggle.checked && !isAnswered) {
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
    if (!voiceControlToggle.checked || isAnswered) return;
    
    clearTimeout(recognitionTimeout);
    recognitionTimeout = setTimeout(() => {
      if (!isListening && !isAnswered) {
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
    quizTimer.textContent = '00:00';
    timerInterval = setInterval(() => {
      secondsElapsed++;
      const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
      const secs = String(secondsElapsed % 60).padStart(2, '0');
      quizTimer.textContent = `${mins}:${secs}`;
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
      score++;
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
      
      // Save incorrect question for end review
      incorrectQuestions.push({
        question: q.question,
        correctText: q.options[correctIndex],
        reference: q.reference
      });

      // Show liquid glass feedback panel with details
      refChapter.innerHTML = `<i class="fa-solid fa-book"></i> ${q.reference.chapter}`;
      refSection.innerHTML = `<i class="fa-solid fa-bookmark"></i> ${q.reference.section}`;
      refPage.textContent = q.reference.page;
      refQuote.textContent = `"${q.reference.quote}"`;
      
      setTimeout(() => {
        feedbackPanel.classList.add('active');
        
        // Optionally read the correct citation aloud in Polish
        if (autoplayToggle.checked) {
          speakText(`Błędna odpowiedź. Prawidłowa odpowiedź to opcja ${correctIndex + 1}. W rozdziale ${q.reference.chapter}, strona ${q.reference.page}: ${q.reference.quote}`);
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

  // Register Service Worker for offline PWA support
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker registered successfully:', reg.scope))
        .catch(err => console.error('Service Worker registration failed:', err));
    });
  }
});
