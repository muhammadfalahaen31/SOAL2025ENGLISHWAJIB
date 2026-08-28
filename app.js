// ==========================================================================
// MPI TKA BAHASA INGGRIS SMA 2025 (WAJIB) — APPLICATION LOGIC
// Standalone, Mobile-First, Touch-Optimized Interactive Learning Engine
// Developer: Muhammad Falahaen Jiddan, M.Pd. Gr. — SMA Plus PGRI Cibinong
// ==========================================================================

// Safe Storage Wrapper (Anti-Crash in file:// and Sandboxed Webviews)
window._memoryStorage = window._memoryStorage || {};
const safeStorage = {
  getItem: function(key) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem(key);
      }
    } catch (e) {
      console.warn('LocalStorage access blocked, using memory fallback:', e);
    }
    return window._memoryStorage[key] || null;
  },
  setItem: function(key, val) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, val);
      }
    } catch (e) {
      console.warn('LocalStorage write blocked, using memory fallback:', e);
    }
    window._memoryStorage[key] = String(val);
  },
  removeItem: function(key) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch (e) {
      console.warn('LocalStorage remove blocked, using memory fallback:', e);
    }
    delete window._memoryStorage[key];
  }
};

const STORAGE_KEY_APP = 'mpi_tka_english_2025_state';
const STORAGE_KEY_THEME = 'mpi_tka_theme';

// Application Central State
const AppState = {
  currentView: 'dashboard', // 'dashboard', 'worksheet', 'vocab', 'strategy', 'results'
  selectedTextId: 1,
  currentQuestionIndex: 0,

  // Student Profile
  profile: {
    name: '',
    class: '',
    school: 'SMA Plus PGRI Cibinong',
    teacher: 'Muhammad Falahaen Jiddan, M.Pd. Gr.'
  },

  // Answers & Reasonings: { [questionId]: { answer: any, reason: string, timestamp: number } }
  answers: {},

  // Self-Assessment ratings: { [questionId]: 'correct' | 'incorrect' }
  selfAssessment: {},

  // Mobile Workspace Tab Switcher: 'read' | 'quiz'
  mobileWorksheetTab: 'quiz',

  // Typography & Reading Settings
  fontSize: 'md', // 'sm', 'md', 'lg'
  fontFamily: 'serif', // 'serif', 'sans'
  theme: 'light',

  // Vocab Lab State
  vocabFilter: 'all', // 'all', '1', '2', '3', '4'
  vocabActivity: 'flipcard', // 'flipcard', 'match', 'context', 'table'
  flipIndex: 0,
  isFlipped: false,
  matchState: {
    selectedLeft: null,
    selectedRight: null,
    matchedPairs: [],
    score: 0,
    cardsLeft: [],
    cardsRight: []
  },
  contextState: {
    currentIndex: 0,
    score: 0,
    answered: false,
    questions: []
  },

  // Speech TTS State
  speechRate: 1.0,
  isSpeaking: false
};

// ==========================================================================
// INITIALIZATION & DOM READY
// ==========================================================================
function initApp() {
  loadTheme();
  loadSavedData();
  setupEventListeners();
  renderAllViews();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ==========================================================================
// PERSISTENCE & THEME
// ==========================================================================
function loadTheme() {
  const savedTheme = safeStorage.getItem(STORAGE_KEY_THEME) || 'light';
  AppState.theme = savedTheme;
  applyTheme(savedTheme);
}

function toggleTheme() {
  const newTheme = AppState.theme === 'light' ? 'dark' : 'light';
  AppState.theme = newTheme;
  safeStorage.setItem(STORAGE_KEY_THEME, newTheme);
  applyTheme(newTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');
  if (themeIcon && themeLabel) {
    if (theme === 'dark') {
      themeIcon.textContent = '☀️';
      themeLabel.textContent = 'Light Mode';
    } else {
      themeIcon.textContent = '🌙';
      themeLabel.textContent = 'Dark Mode';
    }
  }
}

function loadSavedData() {
  try {
    const raw = safeStorage.getItem(STORAGE_KEY_APP);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.profile) AppState.profile = { ...AppState.profile, ...parsed.profile };
      if (parsed.answers) AppState.answers = parsed.answers;
      if (parsed.selfAssessment) AppState.selfAssessment = parsed.selfAssessment;
      if (parsed.currentQuestionIndex !== undefined) AppState.currentQuestionIndex = parsed.currentQuestionIndex;
      if (parsed.selectedTextId !== undefined) AppState.selectedTextId = parsed.selectedTextId;
    }
  } catch (e) {
    console.error('Error loading saved data:', e);
  }

  // Populate profile inputs
  const nameInp = document.getElementById('input-student-name');
  const classInp = document.getElementById('input-student-class');
  const schoolInp = document.getElementById('input-student-school');
  const teacherInp = document.getElementById('input-student-teacher');

  if (nameInp && AppState.profile.name) nameInp.value = AppState.profile.name;
  if (classInp && AppState.profile.class) classInp.value = AppState.profile.class;
  if (schoolInp && AppState.profile.school) schoolInp.value = AppState.profile.school;
  if (teacherInp && AppState.profile.teacher) teacherInp.value = AppState.profile.teacher;
}

function saveData() {
  try {
    const payload = {
      profile: AppState.profile,
      answers: AppState.answers,
      selfAssessment: AppState.selfAssessment,
      currentQuestionIndex: AppState.currentQuestionIndex,
      selectedTextId: AppState.selectedTextId
    };
    safeStorage.setItem(STORAGE_KEY_APP, JSON.stringify(payload));
  } catch (e) {
    console.error('Error saving data:', e);
  }
  updateDashboardStats();
}

function setupEventListeners() {
  const nameInp = document.getElementById('input-student-name');
  const classInp = document.getElementById('input-student-class');
  const schoolInp = document.getElementById('input-student-school');

  if (nameInp) {
    nameInp.addEventListener('input', (e) => {
      AppState.profile.name = e.target.value;
      saveData();
    });
  }
  if (classInp) {
    classInp.addEventListener('input', (e) => {
      AppState.profile.class = e.target.value;
      saveData();
    });
  }
  if (schoolInp) {
    schoolInp.addEventListener('input', (e) => {
      AppState.profile.school = e.target.value;
      saveData();
    });
  }
}

// ==========================================================================
// VIEW NAVIGATION
// ==========================================================================
function setView(viewId) {
  AppState.currentView = viewId;
  stopSpeech();

  // Update view sections
  const viewSections = document.querySelectorAll('.view-section');
  viewSections.forEach(sec => sec.classList.remove('active'));

  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) targetView.classList.add('active');

  // Update bottom navigation bar
  const navItems = document.querySelectorAll('.bottom-nav-item');
  navItems.forEach(item => {
    if (item.getAttribute('data-view') === viewId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // View specific refreshes
  if (viewId === 'dashboard') {
    updateDashboardStats();
    renderDashboardPassages();
  } else if (viewId === 'worksheet') {
    renderWorksheet();
  } else if (viewId === 'vocab') {
    renderVocabLab();
  } else if (viewId === 'strategy') {
    renderStrategyGuide();
  } else if (viewId === 'results') {
    renderResults();
  }
}

function renderAllViews() {
  updateDashboardStats();
  renderDashboardPassages();
  renderWorksheet();
  renderVocabLab();
  renderStrategyGuide();
  setView(AppState.currentView);
}

// ==========================================================================
// MODUL 1: DASHBOARD
// ==========================================================================
function updateDashboardStats() {
  const totalQ = TKA_DATA.questions.length;
  let answeredCount = 0;
  let reasonsCount = 0;

  TKA_DATA.questions.forEach(q => {
    const userEntry = AppState.answers[q.id];
    if (userEntry) {
      if (userEntry.answer !== undefined && userEntry.answer !== null && userEntry.answer !== '') {
        if (Array.isArray(userEntry.answer) ? userEntry.answer.length > 0 : true) {
          answeredCount++;
        }
      }
      if (userEntry.reason && userEntry.reason.trim().length > 0) {
        reasonsCount++;
      }
    }
  });

  const answeredEl = document.getElementById('dash-stat-answered');
  const reasonsEl = document.getElementById('dash-stat-reasons');
  const percentEl = document.getElementById('dash-stat-progress');

  if (answeredEl) answeredEl.textContent = `${answeredCount}/${totalQ}`;
  if (reasonsEl) reasonsEl.textContent = `${reasonsCount}/${totalQ}`;
  if (percentEl) {
    const pct = Math.round((answeredCount / totalQ) * 100);
    percentEl.textContent = `${pct}%`;
  }
}

function renderDashboardPassages() {
  const container = document.getElementById('dashboard-passages-list');
  if (!container) return;

  container.innerHTML = TKA_DATA.texts.map(text => {
    // Calculate progress for this text
    const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
    let answered = 0;
    textQuestions.forEach(q => {
      const entry = AppState.answers[q.id];
      if (entry && entry.answer) {
        if (Array.isArray(entry.answer) ? entry.answer.length > 0 : true) answered++;
      }
    });
    const pct = Math.round((answered / textQuestions.length) * 100);

    return `
      <div class="passage-card">
        <div class="passage-card-top">
          <span class="passage-genre-badge">${text.genre}</span>
          <h3 class="passage-card-title">${text.title}</h3>
          <p class="passage-card-range">${text.questionRange} (${textQuestions.length} Questions)</p>
        </div>
        <div class="passage-progress-wrapper">
          <div class="passage-progress-text">
            <span>Progress</span>
            <span>${answered}/${textQuestions.length} Completed (${pct}%)</span>
          </div>
          <div class="passage-progress-bar-bg">
            <div class="passage-progress-fill" style="width: ${pct}%"></div>
          </div>
        </div>
        <button class="btn-open-worksheet" onclick="openWorksheetForText(${text.id})">
          <span>Open Worksheet</span> ➔
        </button>
      </div>
    `;
  }).join('');
}

function openWorksheetForText(textId) {
  AppState.selectedTextId = textId;
  const firstQIndex = TKA_DATA.questions.findIndex(q => q.textId === textId);
  if (firstQIndex !== -1) {
    AppState.currentQuestionIndex = firstQIndex;
  }
  setView('worksheet');
}

// ==========================================================================
// MODUL 2: WORKSHEET & STUDENT REASONING (HOTS)
// ==========================================================================
function setMobileWorksheetTab(tabName) {
  AppState.mobileWorksheetTab = tabName;
  const wsContainer = document.getElementById('worksheet-split-area');
  if (wsContainer) {
    wsContainer.setAttribute('data-mobile-tab', tabName);
  }

  const btnRead = document.getElementById('btn-seg-read');
  const btnQuiz = document.getElementById('btn-seg-quiz');

  if (btnRead && btnQuiz) {
    if (tabName === 'read') {
      btnRead.classList.add('active');
      btnQuiz.classList.remove('active');
    } else {
      btnQuiz.classList.add('active');
      btnRead.classList.remove('active');
    }
  }
}

function renderWorksheet() {
  renderQuestionPills();
  renderCurrentPassage();
  renderCurrentQuestion();
  setMobileWorksheetTab(AppState.mobileWorksheetTab);
}

function renderQuestionPills() {
  const pillsContainer = document.getElementById('question-pills-bar');
  if (!pillsContainer) return;

  pillsContainer.innerHTML = TKA_DATA.questions.map((q, idx) => {
    const isActive = idx === AppState.currentQuestionIndex;
    const entry = AppState.answers[q.id];
    let isAnswered = false;
    if (entry && entry.answer) {
      if (q.format === 'categorization') {
        const itemKeys = Object.keys(entry.answer);
        if (itemKeys.length === q.items.length) isAnswered = true;
      } else if (Array.isArray(entry.answer)) {
        if (entry.answer.length > 0) isAnswered = true;
      } else {
        isAnswered = true;
      }
    }

    const classes = ['q-pill'];
    if (isActive) classes.push('active');
    if (isAnswered) classes.push('answered');

    return `
      <button class="${classes.join(' ')}" onclick="selectQuestionIndex(${idx})">
        ${q.number}
      </button>
    `;
  }).join('');
}

function selectQuestionIndex(idx) {
  if (idx < 0 || idx >= TKA_DATA.questions.length) return;
  AppState.currentQuestionIndex = idx;
  const q = TKA_DATA.questions[idx];
  AppState.selectedTextId = q.textId;
  saveData();
  renderWorksheet();
}

function renderCurrentPassage() {
  const text = TKA_DATA.texts.find(t => t.id === AppState.selectedTextId) || TKA_DATA.texts[0];
  const titleEl = document.getElementById('reading-text-title');
  const citationEl = document.getElementById('reading-text-citation');
  const bodyEl = document.getElementById('reading-passage-body');

  if (titleEl) titleEl.textContent = text.title;
  if (citationEl) citationEl.textContent = `${text.genre} — ${text.sourceCitation}`;

  if (bodyEl) {
    bodyEl.className = `passage-content font-${AppState.fontFamily} size-${AppState.fontSize}`;
    bodyEl.innerHTML = text.paragraphs.map((p, pIdx) => `
      <div class="passage-paragraph">
        <span class="p-number-badge">¶ P${pIdx + 1}</span>
        <p class="p-text">${p}</p>
      </div>
    `).join('');
  }
}

function setFontSize(size) {
  AppState.fontSize = size;
  renderCurrentPassage();
}

function setFontFamily(family) {
  AppState.fontFamily = family;
  renderCurrentPassage();
}

function renderCurrentQuestion() {
  const q = TKA_DATA.questions[AppState.currentQuestionIndex];
  if (!q) return;

  const numTitleEl = document.getElementById('q-number-display');
  const indTagEl = document.getElementById('q-indicator-display');
  const bodyTextEl = document.getElementById('q-body-display');
  const optionsContainer = document.getElementById('q-options-container');
  const reasonInput = document.getElementById('q-student-reason');
  const charCounter = document.getElementById('q-reason-char-count');

  if (numTitleEl) numTitleEl.textContent = `Question ${q.number} of ${TKA_DATA.questions.length}`;
  if (indTagEl) indTagEl.textContent = q.type;
  if (bodyTextEl) bodyTextEl.textContent = q.question;

  const entry = AppState.answers[q.id] || { answer: null, reason: '' };

  // Render reasoning textarea
  if (reasonInput) {
    reasonInput.value = entry.reason || '';
    if (charCounter) charCounter.textContent = `${(entry.reason || '').length} chars`;
  }

  // Render options by format
  if (optionsContainer) {
    if (q.format === 'multiple_choice') {
      optionsContainer.innerHTML = `
        <div class="options-list">
          ${q.options.map(opt => {
            const isSelected = entry.answer === opt.key;
            return `
              <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectOption('${opt.key}')">
                <div class="opt-indicator">${opt.key}</div>
                <div class="opt-text">${opt.text}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else if (q.format === 'multi_select') {
      const selectedKeys = Array.isArray(entry.answer) ? entry.answer : [];
      optionsContainer.innerHTML = `
        <div class="options-list">
          ${q.options.map(opt => {
            const isSelected = selectedKeys.includes(opt.key);
            return `
              <div class="option-item ${isSelected ? 'selected' : ''}" onclick="toggleMultiOption('${opt.key}')">
                <div class="opt-indicator">${isSelected ? '✓' : opt.key}</div>
                <div class="opt-text">${opt.text}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else if (q.format === 'categorization') {
      const currentCatAnswers = (typeof entry.answer === 'object' && entry.answer !== null) ? entry.answer : {};
      optionsContainer.innerHTML = `
        <div class="categorization-container">
          ${q.items.map(item => {
            const chosenCat = currentCatAnswers[item.id] || null;
            return `
              <div class="category-row">
                <div class="cat-statement">📌 "${item.statement}"</div>
                <div class="cat-choices">
                  ${q.categories.map(cat => `
                    <button class="cat-choice-btn ${chosenCat === cat ? 'selected' : ''}" onclick="selectCategory('${item.id}', '${cat}')">
                      ${chosenCat === cat ? '✓ ' : ''}${cat}
                    </button>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }
  }

  // Update Footer buttons
  const prevBtn = document.getElementById('btn-q-prev');
  const nextBtn = document.getElementById('btn-q-next');
  if (prevBtn) prevBtn.style.visibility = AppState.currentQuestionIndex === 0 ? 'hidden' : 'visible';
  if (nextBtn) {
    if (AppState.currentQuestionIndex === TKA_DATA.questions.length - 1) {
      nextBtn.innerHTML = '<span>View Answer Sheet</span> 📊';
      nextBtn.onclick = () => setView('results');
    } else {
      nextBtn.innerHTML = '<span>Next Question</span> ➔';
      nextBtn.onclick = () => selectQuestionIndex(AppState.currentQuestionIndex + 1);
    }
  }
}

function selectOption(key) {
  const q = TKA_DATA.questions[AppState.currentQuestionIndex];
  if (!AppState.answers[q.id]) {
    AppState.answers[q.id] = { answer: null, reason: '', timestamp: Date.now() };
  }
  AppState.answers[q.id].answer = key;
  AppState.answers[q.id].timestamp = Date.now();
  saveData();
  renderWorksheet();
}

function toggleMultiOption(key) {
  const q = TKA_DATA.questions[AppState.currentQuestionIndex];
  if (!AppState.answers[q.id]) {
    AppState.answers[q.id] = { answer: [], reason: '', timestamp: Date.now() };
  }
  let arr = Array.isArray(AppState.answers[q.id].answer) ? [...AppState.answers[q.id].answer] : [];
  if (arr.includes(key)) {
    arr = arr.filter(k => k !== key);
  } else {
    arr.push(key);
  }
  AppState.answers[q.id].answer = arr.sort();
  AppState.answers[q.id].timestamp = Date.now();
  saveData();
  renderWorksheet();
}

function selectCategory(itemId, categoryName) {
  const q = TKA_DATA.questions[AppState.currentQuestionIndex];
  if (!AppState.answers[q.id]) {
    AppState.answers[q.id] = { answer: {}, reason: '', timestamp: Date.now() };
  }
  const currentObj = (typeof AppState.answers[q.id].answer === 'object' && AppState.answers[q.id].answer !== null)
    ? { ...AppState.answers[q.id].answer }
    : {};

  currentObj[itemId] = categoryName;
  AppState.answers[q.id].answer = currentObj;
  AppState.answers[q.id].timestamp = Date.now();
  saveData();
  renderWorksheet();
}

function onReasonInput(e) {
  const q = TKA_DATA.questions[AppState.currentQuestionIndex];
  if (!AppState.answers[q.id]) {
    AppState.answers[q.id] = { answer: null, reason: '', timestamp: Date.now() };
  }
  AppState.answers[q.id].reason = e.target.value;
  AppState.answers[q.id].timestamp = Date.now();

  const charCounter = document.getElementById('q-reason-char-count');
  if (charCounter) charCounter.textContent = `${e.target.value.length} chars`;

  saveData();
}

// "👀 Peek Passage" Bottom Sheet
function openPeekPassage() {
  const text = TKA_DATA.texts.find(t => t.id === AppState.selectedTextId) || TKA_DATA.texts[0];
  const titleEl = document.getElementById('peek-sheet-title');
  const bodyEl = document.getElementById('peek-sheet-body');
  const overlay = document.getElementById('peek-sheet-overlay');

  if (titleEl) titleEl.textContent = `📖 ${text.title}`;
  if (bodyEl) {
    bodyEl.innerHTML = text.paragraphs.map((p, pIdx) => `
      <div class="passage-paragraph" style="margin-bottom: 12px;">
        <span class="p-number-badge">¶ P${pIdx + 1}</span>
        <p class="p-text">${p}</p>
      </div>
    `).join('');
  }
  if (overlay) overlay.classList.add('active');
}

function closePeekPassage() {
  const overlay = document.getElementById('peek-sheet-overlay');
  if (overlay) overlay.classList.remove('active');
}

// Web Speech TTS Reader
function speakPassage() {
  if (!('speechSynthesis' in window)) {
    showToast('Speech synthesis not supported in this browser.');
    return;
  }

  stopSpeech();
  const text = TKA_DATA.texts.find(t => t.id === AppState.selectedTextId) || TKA_DATA.texts[0];
  const fullText = text.paragraphs.join(' ');
  const utterance = new SpeechSynthesisUtterance(fullText);
  utterance.lang = 'en-US';
  utterance.rate = AppState.speechRate;

  utterance.onstart = () => {
    AppState.isSpeaking = true;
    updateTTSControls();
  };
  utterance.onend = () => {
    AppState.isSpeaking = false;
    updateTTSControls();
  };
  utterance.onerror = () => {
    AppState.isSpeaking = false;
    updateTTSControls();
  };

  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    AppState.isSpeaking = false;
    updateTTSControls();
  }
}

function updateTTSControls() {
  const playBtn = document.getElementById('btn-tts-play');
  const statusEl = document.getElementById('tts-status-text');
  if (playBtn && statusEl) {
    if (AppState.isSpeaking) {
      playBtn.textContent = '⏹ Stop Audio';
      playBtn.onclick = stopSpeech;
      statusEl.textContent = '🔊 Reading passage...';
    } else {
      playBtn.textContent = '🔊 Play Passage';
      playBtn.onclick = speakPassage;
      statusEl.textContent = 'TTS Audio Reader';
    }
  }
}

function speakWord(word) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

// ==========================================================================
// MODUL 3: VOCABULARY / CONCEPT LAB (4 INTERACTIVE MODES)
// ==========================================================================
function getFilteredVocabList() {
  let list = [];
  if (AppState.vocabFilter === 'all') {
    TKA_DATA.texts.forEach(t => { list = list.concat(t.vocabulary); });
  } else {
    const textId = parseInt(AppState.vocabFilter);
    const text = TKA_DATA.texts.find(t => t.id === textId);
    if (text) list = [...text.vocabulary];
  }
  return list;
}

function setVocabFilter(filterId) {
  AppState.vocabFilter = filterId;
  AppState.flipIndex = 0;
  AppState.isFlipped = false;
  renderVocabLab();
}

function setVocabActivity(act) {
  AppState.vocabActivity = act;
  renderVocabLab();
}

function renderVocabLab() {
  // Update filter pills active state
  const pills = document.querySelectorAll('.filter-pill-btn');
  pills.forEach(p => {
    if (p.getAttribute('data-filter') === AppState.vocabFilter) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  // Update activity tabs active state
  const tabs = document.querySelectorAll('.vocab-mode-btn');
  tabs.forEach(t => {
    if (t.getAttribute('data-act') === AppState.vocabActivity) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  // Show only active mode container
  const modes = ['flipcard', 'match', 'context', 'table'];
  modes.forEach(m => {
    const el = document.getElementById(`vocab-mode-${m}`);
    if (el) el.style.display = m === AppState.vocabActivity ? 'block' : 'none';
  });

  if (AppState.vocabActivity === 'flipcard') renderFlipCards();
  else if (AppState.vocabActivity === 'match') renderMatchGame();
  else if (AppState.vocabActivity === 'context') renderContextQuiz();
  else if (AppState.vocabActivity === 'table') renderVocabTable();
}

// Mode 1: 3D Flip Card
function renderFlipCards() {
  const list = getFilteredVocabList();
  const cardEl = document.getElementById('flipcard-item');
  const countEl = document.getElementById('flipcard-counter');

  if (!list.length || !cardEl) return;
  if (AppState.flipIndex >= list.length) AppState.flipIndex = 0;

  const v = list[AppState.flipIndex];
  if (countEl) countEl.textContent = `Card ${AppState.flipIndex + 1} of ${list.length}`;

  cardEl.classList.toggle('flipped', AppState.isFlipped);
  cardEl.innerHTML = `
    <div class="flipcard-front">
      <div class="flip-badge-row">
        <span class="flip-pos-badge">${v.pos}</span>
        <button class="tool-btn" onclick="event.stopPropagation(); speakWord('${v.word.replace(/'/g, "\\'")}')">🔊 Audio</button>
      </div>
      <div style="text-align: center; margin: auto 0;">
        <h2 class="flip-word-title">${v.word}</h2>
        <p class="flip-phonetic">${v.pronunciation || ''}</p>
      </div>
      <p class="flip-hint-bottom">👆 Tap to see Indonesian meaning</p>
    </div>
    <div class="flipcard-back">
      <div class="flip-badge-row">
        <span class="flip-pos-badge">${v.pos}</span>
        <button class="tool-btn" style="background: rgba(255,255,255,0.2); color: white;" onclick="event.stopPropagation(); speakWord('${v.word.replace(/'/g, "\\'")}')">🔊</button>
      </div>
      <div style="margin: auto 0;">
        <h3 class="flip-meaning-id">${v.meaning}</h3>
        <p class="flip-example">"${v.example || v.context}"</p>
      </div>
      <p class="flip-hint-bottom">👆 Tap to flip back</p>
    </div>
  `;
}

function flipCurrentCard() {
  AppState.isFlipped = !AppState.isFlipped;
  const cardEl = document.getElementById('flipcard-item');
  if (cardEl) cardEl.classList.toggle('flipped', AppState.isFlipped);
}

function prevFlipCard() {
  const list = getFilteredVocabList();
  if (AppState.flipIndex > 0) {
    AppState.flipIndex--;
  } else {
    AppState.flipIndex = list.length - 1;
  }
  AppState.isFlipped = false;
  renderFlipCards();
}

function nextFlipCard() {
  const list = getFilteredVocabList();
  if (AppState.flipIndex < list.length - 1) {
    AppState.flipIndex++;
  } else {
    AppState.flipIndex = 0;
  }
  AppState.isFlipped = false;
  renderFlipCards();
}

function shuffleFlipCards() {
  const list = getFilteredVocabList();
  AppState.flipIndex = Math.floor(Math.random() * list.length);
  AppState.isFlipped = false;
  renderFlipCards();
  showToast('Cards shuffled!');
}

// Mode 2: Match Words Game
function renderMatchGame() {
  const list = getFilteredVocabList();
  if (!AppState.matchState.cardsLeft.length) {
    resetMatchGame();
    return;
  }

  const scoreEl = document.getElementById('match-game-score');
  const leftCol = document.getElementById('match-col-left');
  const rightCol = document.getElementById('match-col-right');

  if (scoreEl) {
    scoreEl.textContent = `Matched: ${AppState.matchState.matchedPairs.length} / ${AppState.matchState.cardsLeft.length}`;
  }

  if (leftCol && rightCol) {
    leftCol.innerHTML = AppState.matchState.cardsLeft.map(item => {
      const isMatched = AppState.matchState.matchedPairs.includes(item.id);
      const isSelected = AppState.matchState.selectedLeft === item.id;
      return `
        <button class="match-card-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" onclick="selectMatchCard('left', '${item.id}')">
          ${item.word}
        </button>
      `;
    }).join('');

    rightCol.innerHTML = AppState.matchState.cardsRight.map(item => {
      const isMatched = AppState.matchState.matchedPairs.includes(item.id);
      const isSelected = AppState.matchState.selectedRight === item.id;
      return `
        <button class="match-card-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" onclick="selectMatchCard('right', '${item.id}')">
          ${item.meaning}
        </button>
      `;
    }).join('');
  }
}

function resetMatchGame() {
  const list = getFilteredVocabList().slice(0, 6);
  const items = list.map((v, i) => ({ id: `pair_${i}`, word: v.word, meaning: v.meaning }));

  AppState.matchState = {
    selectedLeft: null,
    selectedRight: null,
    matchedPairs: [],
    score: 0,
    cardsLeft: [...items].sort(() => Math.random() - 0.5),
    cardsRight: [...items].sort(() => Math.random() - 0.5)
  };
  renderMatchGame();
}

function selectMatchCard(side, id) {
  if (side === 'left') {
    AppState.matchState.selectedLeft = id;
  } else {
    AppState.matchState.selectedRight = id;
  }

  if (AppState.matchState.selectedLeft && AppState.matchState.selectedRight) {
    if (AppState.matchState.selectedLeft === AppState.matchState.selectedRight) {
      AppState.matchState.matchedPairs.push(AppState.matchState.selectedLeft);
      const matchedItem = AppState.matchState.cardsLeft.find(c => c.id === AppState.matchState.selectedLeft);
      if (matchedItem) speakWord(matchedItem.word);
      showToast('🎉 Correct Match!');
    } else {
      showToast('❌ Try again!');
    }
    AppState.matchState.selectedLeft = null;
    AppState.matchState.selectedRight = null;
  }

  renderMatchGame();
}

// Mode 3: Context Quiz
function renderContextQuiz() {
  const list = getFilteredVocabList();
  if (!AppState.contextState.questions.length || AppState.contextState.questions.length !== list.length) {
    AppState.contextState.questions = list.map(v => {
      const otherMeanings = list.filter(item => item.word !== v.word).map(item => item.meaning);
      const shuffledOthers = otherMeanings.sort(() => Math.random() - 0.5).slice(0, 3);
      const allChoices = [v.meaning, ...shuffledOthers].sort(() => Math.random() - 0.5);
      return {
        word: v.word,
        pos: v.pos,
        context: v.context || v.example,
        correctMeaning: v.meaning,
        choices: allChoices
      };
    });
    AppState.contextState.currentIndex = 0;
    AppState.contextState.score = 0;
    AppState.contextState.answered = false;
  }

  const q = AppState.contextState.questions[AppState.contextState.currentIndex];
  const container = document.getElementById('context-quiz-box');
  if (!q || !container) return;

  container.innerHTML = `
    <div class="quiz-context-card">
      <div class="q-header">
        <span class="q-number-title">Challenge ${AppState.contextState.currentIndex + 1} of ${AppState.contextState.questions.length}</span>
        <span class="q-indicator-tag">Score: ${AppState.contextState.score}</span>
      </div>
      <div style="font-size: 1.1rem; font-weight: 800; color: var(--academic-blue);">
        "${q.word}" <span style="font-size: 0.85rem; color: var(--text-muted);">(${q.pos})</span>
      </div>
      <p style="font-style: italic; color: var(--text-secondary);">"${q.context}"</p>
      <div style="font-weight: 700; margin-top: 4px;">What does this word mean in this context?</div>
      <div class="options-list" id="context-quiz-choices">
        ${q.choices.map(choice => `
          <button class="quiz-opt-btn" onclick="answerContextQuiz(this, '${choice.replace(/'/g, "\\'")}', '${q.correctMeaning.replace(/'/g, "\\'")}')">
            ${choice}
          </button>
        `).join('')}
      </div>
      <div id="context-quiz-footer" style="display: none; justify-content: flex-end; margin-top: 10px;">
        <button class="btn-q-nav primary" onclick="nextContextQuiz()">Next Challenge ➔</button>
      </div>
    </div>
  `;
}

function answerContextQuiz(btn, selectedChoice, correctMeaning) {
  if (AppState.contextState.answered) return;
  AppState.contextState.answered = true;

  const choicesContainer = document.getElementById('context-quiz-choices');
  const allBtns = choicesContainer.querySelectorAll('.quiz-opt-btn');

  allBtns.forEach(b => {
    b.disabled = true;
    if (b.textContent.trim() === correctMeaning.trim()) {
      b.classList.add('correct');
    }
  });

  if (selectedChoice.trim() === correctMeaning.trim()) {
    btn.classList.add('correct');
    AppState.contextState.score++;
    showToast('✨ Correct Answer!');
  } else {
    btn.classList.add('wrong');
    showToast('❌ Incorrect!');
  }

  const footer = document.getElementById('context-quiz-footer');
  if (footer) footer.style.display = 'flex';
}

function nextContextQuiz() {
  AppState.contextState.answered = false;
  if (AppState.contextState.currentIndex < AppState.contextState.questions.length - 1) {
    AppState.contextState.currentIndex++;
  } else {
    AppState.contextState.currentIndex = 0;
    showToast(`Quiz completed! Final Score: ${AppState.contextState.score} / ${AppState.contextState.questions.length}`);
  }
  renderContextQuiz();
}

// Mode 4: Word Master Table
function renderVocabTable() {
  const list = getFilteredVocabList();
  const searchInp = document.getElementById('vocab-table-search');
  const query = searchInp ? searchInp.value.toLowerCase().trim() : '';

  const filtered = list.filter(v => 
    v.word.toLowerCase().includes(query) ||
    v.meaning.toLowerCase().includes(query) ||
    v.pos.toLowerCase().includes(query)
  );

  const tbody = document.getElementById('vocab-table-body');
  if (!tbody) return;

  tbody.innerHTML = filtered.map(v => `
    <tr>
      <td>
        <div style="display: flex; align-items: center; gap: 8px;">
          <strong style="color: var(--academic-blue); font-size: 1rem;">${v.word}</strong>
          <button class="tool-btn" onclick="speakWord('${v.word.replace(/'/g, "\\'")}')">🔊</button>
        </div>
        <span style="font-size: 0.78rem; color: var(--text-muted);">${v.pronunciation || ''}</span>
      </td>
      <td><span class="flip-pos-badge">${v.pos}</span></td>
      <td><strong>${v.meaning}</strong></td>
      <td style="font-style: italic; color: var(--text-secondary); font-size: 0.85rem;">"${v.example || v.context}"</td>
    </tr>
  `).join('');
}

function filterVocabTable() {
  renderVocabTable();
}

// ==========================================================================
// MODUL 4: STRATEGY GUIDE (PANDUAN STRATEGI HOTS — 4 PILAR WAJIB)
// ==========================================================================
function renderStrategyGuide() {
  const container = document.getElementById('strategy-accordion-list');
  if (!container) return;

  container.innerHTML = TKA_DATA.strategies.map((strat, idx) => `
    <div class="strategy-item-card" id="strat-card-${strat.id}">
      <div class="strategy-header-toggle" onclick="toggleStrategyCard('${strat.id}')">
        <div class="strategy-title-wrapper">
          <span class="strategy-cat-badge">${strat.category}</span>
          <h3 class="strategy-name">${strat.name}</h3>
        </div>
        <div class="strategy-chevron">▼</div>
      </div>
      <div class="strategy-body-content">
        <!-- Pilar 1: Formula Emas -->
        <div class="pilar-block pilar-formula">
          <div class="pilar-title">⚡ Pilar 1: Formula Emas (Rumus Cepat)</div>
          <div class="formula-text">${strat.formula}</div>
        </div>

        <!-- Pilar 2: Ciri Khas Pertanyaan -->
        <div class="pilar-block pilar-pattern">
          <div class="pilar-title">📌 Pilar 2: Ciri Khas Bentuk Pertanyaan Soal</div>
          <div class="pattern-text">"${strat.quickQuestion}"</div>
        </div>

        <!-- Pilar 3: Langkah Sistematis -->
        <div class="pilar-block pilar-steps">
          <div class="pilar-title">📋 Pilar 3: Langkah Sistematis Menjawab</div>
          <ol class="steps-list">
            ${strat.steps.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>

        <!-- Pilar 4: Waspada Pengecoh -->
        <div class="pilar-block pilar-trap">
          <div class="pilar-title">⚠️ Pilar 4: Waspada Pengecoh (Distractor Trap Analysis)</div>
          <div class="trap-text">${strat.trapWarning}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleStrategyCard(id) {
  const card = document.getElementById(`strat-card-${id}`);
  if (card) card.classList.toggle('expanded');
}

// ==========================================================================
// MODUL 5: ANSWER SHEET, SELF-ASSESSMENT & PERFORMANCE ANALYTICS
// ==========================================================================
function evaluateAllAnswers() {
  let correctCount = 0;
  let incorrectCount = 0;
  let pendingCount = 0;
  let totalAssessed = 0;

  const results = TKA_DATA.questions.map(q => {
    const entry = AppState.answers[q.id] || { answer: null, reason: '' };
    const selfStatus = AppState.selfAssessment ? (AppState.selfAssessment[q.id] || null) : null;
    let isAnswered = false;

    if (entry.answer !== null && entry.answer !== undefined && entry.answer !== '') {
      if (q.format === 'multiple_choice') {
        isAnswered = true;
      } else if (q.format === 'multi_select') {
        const studentArr = Array.isArray(entry.answer) ? entry.answer : [];
        if (studentArr.length > 0) isAnswered = true;
      } else if (q.format === 'categorization') {
        const studentObj = (typeof entry.answer === 'object' && entry.answer !== null) ? entry.answer : {};
        const studentKeys = Object.keys(studentObj);
        if (studentKeys.length > 0) isAnswered = true;
      }
    }

    if (selfStatus === 'correct') {
      correctCount++;
      totalAssessed++;
    } else if (selfStatus === 'incorrect') {
      incorrectCount++;
      totalAssessed++;
    } else {
      pendingCount++;
    }

    return {
      question: q,
      studentEntry: entry,
      isAnswered,
      selfStatus
    };
  });

  const totalQuestions = TKA_DATA.questions.length;
  const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return {
    score,
    correctCount,
    incorrectCount,
    pendingCount,
    totalAssessed,
    total: totalQuestions,
    details: results
  };
}

function setSelfAssessment(qId, status) {
  if (!AppState.selfAssessment) {
    AppState.selfAssessment = {};
  }

  if (AppState.selfAssessment[qId] === status) {
    delete AppState.selfAssessment[qId];
    showToast(`Question ${qId} self-assessment cleared.`);
  } else {
    AppState.selfAssessment[qId] = status;
    if (status === 'correct') {
      showToast(`Question ${qId} marked as Correct (✅)!`);
    } else {
      showToast(`Question ${qId} marked as Incorrect (❌)!`);
    }
  }

  saveData();
  renderResults();
}

function renderResults() {
  const evalData = evaluateAllAnswers();

  const scoreNumEl = document.getElementById('res-score-number');
  const countCorrectEl = document.getElementById('res-count-correct');
  const countIncorrectEl = document.getElementById('res-count-incorrect');
  const countUnansweredEl = document.getElementById('res-count-unanswered');

  if (scoreNumEl) {
    if (evalData.totalAssessed === 0) {
      scoreNumEl.textContent = '--';
    } else {
      scoreNumEl.textContent = evalData.score;
    }
  }

  if (countCorrectEl) {
    countCorrectEl.textContent = `✅ ${evalData.correctCount} Correct`;
  }
  if (countIncorrectEl) {
    countIncorrectEl.textContent = `❌ ${evalData.incorrectCount} Incorrect`;
  }
  if (countUnansweredEl) {
    if (evalData.totalAssessed === 0) {
      countUnansweredEl.textContent = `⏳ ${evalData.total} Pending Evaluation`;
    } else {
      countUnansweredEl.textContent = `⏳ ${evalData.pendingCount} Pending Evaluation`;
    }
  }

  const listContainer = document.getElementById('results-review-list');
  if (!listContainer) return;

  listContainer.innerHTML = evalData.details.map(item => {
    const q = item.question;
    const studentAns = formatStudentAnswerText(q, item.studentEntry.answer);

    const isCorrect = item.selfStatus === 'correct';
    const isIncorrect = item.selfStatus === 'incorrect';

    let statusClass = 'unanswered';
    let statusText = '⚪ UNANSWERED';

    if (isCorrect) {
      statusClass = 'correct';
      statusText = '✅ MARKED CORRECT';
    } else if (isIncorrect) {
      statusClass = 'incorrect';
      statusText = '❌ MARKED INCORRECT';
    } else if (item.isAnswered) {
      statusClass = 'submitted';
      statusText = '📝 SUBMITTED';
    }

    return `
      <div class="review-item-card">
        <div class="review-header">
          <span style="font-weight: 900; color: var(--academic-blue);">Question ${q.number} (${q.type})</span>
          <span class="status-badge ${statusClass}">${statusText}</span>
        </div>

        <div style="font-weight: 700; color: var(--text-main); font-size: 0.98rem; line-height: 1.5;">
          ${q.question}
        </div>

        <div class="review-comparison-box">
          <div><strong>Your Answer:</strong> <span style="color: ${isCorrect ? 'var(--accent-emerald-dark)' : isIncorrect ? 'var(--accent-rose)' : 'var(--academic-blue)'}; font-weight: 700;">${studentAns || '<em>No answer submitted</em>'}</span></div>
        </div>

        <div class="reasoning-display-box">
          <div style="font-weight: 800; font-size: 0.82rem; text-transform: uppercase; color: var(--academic-blue); margin-bottom: 4px;">✍️ Your Written Reasoning & Text Evidence:</div>
          <div>${item.studentEntry.reason ? item.studentEntry.reason : '<em>No reasoning provided.</em>'}</div>
        </div>

        <!-- Student Self-Assessment Control -->
        <div class="self-assess-box">
          <div class="self-assess-label">
            <span>🎯 Self-Evaluation (Penilaian Mandiri):</span>
            <span class="self-assess-sub">State whether your answer is correct or incorrect according to your review:</span>
          </div>
          <div class="self-assess-buttons">
            <button class="btn-self-rate correct ${isCorrect ? 'active' : ''}" onclick="setSelfAssessment(${q.id}, 'correct')">
              <span>✅ Correct (Benar)</span>
            </button>
            <button class="btn-self-rate incorrect ${isIncorrect ? 'active' : ''}" onclick="setSelfAssessment(${q.id}, 'incorrect')">
              <span>❌ Incorrect (Salah)</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function formatStudentAnswerText(q, rawAnswer) {
  if (rawAnswer === null || rawAnswer === undefined || rawAnswer === '') return '';

  if (q.format === 'multiple_choice') {
    const opt = q.options.find(o => o.key === rawAnswer);
    return opt ? `Opsi ${rawAnswer} (${opt.text.substring(0, 45)}...)` : `Opsi ${rawAnswer}`;
  } else if (q.format === 'multi_select') {
    if (!Array.isArray(rawAnswer) || !rawAnswer.length) return '';
    return rawAnswer.map(k => `[✓] Opsi ${k}`).join(', ');
  } else if (q.format === 'categorization') {
    if (typeof rawAnswer !== 'object') return '';
    return Object.entries(rawAnswer).map(([itemId, cat]) => {
      const item = q.items.find(i => i.id === itemId);
      return `"${item ? item.statement : itemId}" ➔ ${cat}`;
    }).join(' | ');
  }
  return String(rawAnswer);
}

// WhatsApp Share Formatter
function shareToWhatsApp() {
  const evalData = evaluateAllAnswers();
  const profile = AppState.profile;

  let msg = `*LAPORAN HASIL LEMBAR KERJA TKA BAHASA INGGRIS SMA 2025*\n`;
  msg += `*MPI TKA WAJIB — SMA PLUS PGRI CIBINONG*\n`;
  msg += `*(Self-Assessment & Critical Reasoning Mode)*\n`;
  msg += `===================================\n`;
  msg += `👤 *Nama Siswa:* ${profile.name || '(Belum Diisi)'}\n`;
  msg += `🏫 *Kelas:* ${profile.class || '(Belum Diisi)'}\n`;
  msg += `🏛️ *Sekolah:* ${profile.school}\n`;
  msg += `👨‍🏫 *Guru Pembimbing:* ${profile.teacher}\n`;
  msg += `===================================\n`;
  msg += `📊 *SKOR MANDIRI:* ${evalData.score} / 100\n`;
  msg += `✅ *Dinilai Benar:* ${evalData.correctCount} Soal\n`;
  msg += `❌ *Dinilai Salah:* ${evalData.incorrectCount} Soal\n`;
  msg += `⏳ *Belum Dinilai:* ${evalData.pendingCount} Soal\n`;
  msg += `===================================\n\n`;
  msg += `*RINCIAN JAWABAN & ALASAN BERNALAR SISWA:*\n`;

  evalData.details.forEach(item => {
    const q = item.question;
    const selfStatusText = item.selfStatus === 'correct' ? '✅ Benar' : item.selfStatus === 'incorrect' ? '❌ Salah' : '⏳ Belum Dinilai';
    msg += `\n*No. ${q.number}* [${selfStatusText}]\n`;
    msg += `• Jawaban: ${formatStudentAnswerText(q, item.studentEntry.answer) || '(Tidak dijawab)'}\n`;
    msg += `• Alasan/Bukti Teks: ${item.studentEntry.reason || '(Tidak ada alasan)'}\n`;
  });

  msg += `\n_Dikirim via MPI TKA Bahasa Inggris 2025 (Handphone Mode)_`;

  const waUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

function printResults() {
  setTimeout(() => {
    window.print();
  }, 300);
}

function copySummaryToClipboard() {
  const evalData = evaluateAllAnswers();
  const profile = AppState.profile;

  let summary = `HASIL EVALUASI TKA BAHASA INGGRIS SMA 2025 (SELF-ASSESSMENT)\n`;
  summary += `Nama: ${profile.name || '-'} | Kelas: ${profile.class || '-'} | Skor: ${evalData.score}/100 (Benar: ${evalData.correctCount}, Salah: ${evalData.incorrectCount}, Belum Dinilai: ${evalData.pendingCount})\n`;

  navigator.clipboard.writeText(summary).then(() => {
    showToast('📋 Summary copied to clipboard!');
  }).catch(() => {
    showToast('❌ Failed to copy to clipboard.');
  });
}

// Reset Confirmation Modal
function openResetModal() {
  const modal = document.getElementById('reset-confirm-modal');
  if (modal) modal.classList.add('active');
}

function closeResetModal() {
  const modal = document.getElementById('reset-confirm-modal');
  if (modal) modal.classList.remove('active');
}

function confirmResetWorksheet() {
  AppState.answers = {};
  AppState.selfAssessment = {};
  AppState.currentQuestionIndex = 0;
  saveData();
  closeResetModal();
  showToast('🔄 Worksheet has been reset.');
  setView('worksheet');
}

// Toast Feedback Notification
function showToast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2600);
}

// ==========================================================================
// EXPLICIT GLOBAL WINDOW BINDINGS (ANTI-BUG GUARANTEE)
// ==========================================================================
window.setView = setView;
window.toggleTheme = toggleTheme;
window.openWorksheetForText = openWorksheetForText;
window.setMobileWorksheetTab = setMobileWorksheetTab;
window.selectQuestionIndex = selectQuestionIndex;
window.setFontSize = setFontSize;
window.setFontFamily = setFontFamily;
window.selectOption = selectOption;
window.toggleMultiOption = toggleMultiOption;
window.selectCategory = selectCategory;
window.onReasonInput = onReasonInput;
window.openPeekPassage = openPeekPassage;
window.closePeekPassage = closePeekPassage;
window.speakPassage = speakPassage;
window.stopSpeech = stopSpeech;
window.speakWord = speakWord;
window.setVocabFilter = setVocabFilter;
window.setVocabActivity = setVocabActivity;
window.flipCurrentCard = flipCurrentCard;
window.prevFlipCard = prevFlipCard;
window.nextFlipCard = nextFlipCard;
window.shuffleFlipCards = shuffleFlipCards;
window.selectMatchCard = selectMatchCard;
window.resetMatchGame = resetMatchGame;
window.answerContextQuiz = answerContextQuiz;
window.nextContextQuiz = nextContextQuiz;
window.filterVocabTable = filterVocabTable;
window.toggleStrategyCard = toggleStrategyCard;
window.setSelfAssessment = setSelfAssessment;
window.shareToWhatsApp = shareToWhatsApp;
window.printResults = printResults;
window.copySummaryToClipboard = copySummaryToClipboard;
window.openResetModal = openResetModal;
window.closeResetModal = closeResetModal;
window.confirmResetWorksheet = confirmResetWorksheet;
window.showToast = showToast;
