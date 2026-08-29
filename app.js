// ==========================================
// LATIHAN TKA BAHASA INGGRIS SMA 2026 - NARRATIVE TEXT
// APPLICATION LOGIC ENGINE (app.js)
// 100% Offline, Touch-Safe, SafeStorage Enabled
// ==========================================

const APP_STORAGE_KEY = 'tka_english_2026_narrative_main';
const THEME_KEY = 'tka_english_2026_theme';

// SafeStorage Wrapper
window._memoryStorage = window._memoryStorage || {};
const SafeStorage = {
  getItem(key) {
    try {
      if (typeof localStorage !== 'undefined') {
        const val = localStorage.getItem(key);
        if (val !== null) return val;
      }
    } catch (e) {
      console.warn('LocalStorage read blocked; using in-memory store', e);
    }
    return window._memoryStorage[key] || null;
  },
  setItem(key, val) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, val);
      }
    } catch (e) {
      console.warn('LocalStorage write blocked; saving in-memory', e);
    }
    window._memoryStorage[key] = String(val);
  },
  removeItem(key) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(key);
      }
    } catch (e) {
      console.warn('LocalStorage remove blocked', e);
    }
    delete window._memoryStorage[key];
  }
};
window.SafeStorage = SafeStorage;

// Application State
const AppState = {
  currentView: 'dashboard', // 'dashboard', 'workspace', 'vocab_lab', 'tka_strategy', 'final_review'
  selectedTextId: 1,
  currentQuestionIndex: 0,

  // Student Profile
  profile: {
    name: '',
    class: '',
    school: 'SMA Plus PGRI Cibinong',
    teacher: 'Muhammad Falahaen Jiddan, M.Pd. Gr.'
  },

  // Answers & Reasons
  answers: {},
  evaluations: {},

  // Mobile Switcher
  mobileActiveTab: 'read',

  // Typography
  fontSizeLevel: 0,
  fontFamily: 'serif',
  theme: 'light',

  // Vocab Lab state
  vocabFilter: 'all',
  vocabActivity: 'flipcard',
  matchingState: { selectedLeft: null, selectedRight: null, matchedPairs: [] },
  contextQuizState: { currentIndex: 0, score: 0, answered: false },
  vocabSearchQuery: ''
};

// ==========================================
// INITIALIZATION
// ==========================================
function initApp() {
  loadTheme();
  loadData();
  setupEvents();
  renderApp();
}

function loadTheme() {
  const savedTheme = SafeStorage.getItem(THEME_KEY) || 'light';
  AppState.theme = savedTheme;
  applyTheme(savedTheme);
}

function toggleTheme() {
  const newTheme = AppState.theme === 'light' ? 'dark' : 'light';
  AppState.theme = newTheme;
  SafeStorage.setItem(THEME_KEY, newTheme);
  applyTheme(newTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');
  if (themeIcon && themeLabel) {
    if (theme === 'dark') {
      themeIcon.textContent = '☀️';
      themeLabel.textContent = 'Light';
    } else {
      themeIcon.textContent = '🌙';
      themeLabel.textContent = 'Dark';
    }
  }
}

function loadData() {
  try {
    const saved = SafeStorage.getItem(APP_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.profile) AppState.profile = Object.assign(AppState.profile, parsed.profile);
      if (parsed.answers) AppState.answers = parsed.answers;
      if (parsed.evaluations) AppState.evaluations = parsed.evaluations;
    }
  } catch (e) {
    console.error('Failed to load app data', e);
  }

  const nameInp = document.getElementById('input-app-name');
  const classInp = document.getElementById('input-app-class');
  const schoolInp = document.getElementById('input-app-school');
  const teacherInp = document.getElementById('input-app-teacher');
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
      evaluations: AppState.evaluations
    };
    SafeStorage.setItem(APP_STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.error('Failed to save app data', e);
  }
}

function saveAppProfile() {
  const nameInp = document.getElementById('input-app-name');
  const classInp = document.getElementById('input-app-class');
  const schoolInp = document.getElementById('input-app-school');
  const teacherInp = document.getElementById('input-app-teacher');
  if (nameInp) AppState.profile.name = nameInp.value.trim();
  if (classInp) AppState.profile.class = classInp.value.trim();
  if (schoolInp) AppState.profile.school = schoolInp.value.trim();
  if (teacherInp) AppState.profile.teacher = teacherInp.value.trim();
  saveData();
  updateDashboardStats();
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ==========================================
// AUDIO SYNTHESIS & TTS
// ==========================================
function playTone(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    if (type === 'success') {
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.setValueAtTime(880.00, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === 'error') {
      osc.frequency.setValueAtTime(220.00, ctx.currentTime);
      osc.frequency.setValueAtTime(196.00, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    }
  } catch (e) {
    // Ignore audio error
  }
}

function speakText(text, lang = 'en-US') {
  if (!('speechSynthesis' in window)) {
    showToast('Web Speech Audio is not supported in this browser.', 'error');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
  showToast('🔊 Playing audio reading...', 'info');
}

function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    showToast('⏹ Audio stopped.', 'info');
  }
}

function speakWord(word) {
  speakText(word, 'en-US');
}

// ==========================================
// VIEW ROUTING
// ==========================================
function setView(viewName) {
  AppState.currentView = viewName;
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));

  const target = document.getElementById(`view-${viewName}`);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewName);
  });

  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewName);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (viewName === 'dashboard') {
    renderDashboard();
  } else if (viewName === 'workspace') {
    renderWorkspace();
  } else if (viewName === 'vocab_lab') {
    renderVocabLab();
  } else if (viewName === 'tka_strategy') {
    renderTKAStrategy();
  } else if (viewName === 'final_review') {
    renderFinalReview();
  }
}

function renderApp() {
  setView(AppState.currentView);
}

// ==========================================
// MODUL 1: DASHBOARD
// ==========================================
function renderDashboard() {
  updateDashboardStats();
  renderTextCards();
}

function updateDashboardStats() {
  const total = TKA_DATA.questions.length;
  let answeredCount = 0;
  let reasonedCount = 0;

  TKA_DATA.questions.forEach(q => {
    const rec = AppState.answers[q.id];
    if (rec && rec.answer !== undefined && rec.answer !== null) {
      answeredCount++;
      if (rec.reason && rec.reason.trim().length > 0) reasonedCount++;
    }
  });

  const progressPct = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

  const statAns = document.getElementById('dash-stat-answered');
  const statRea = document.getElementById('dash-stat-reasoned');
  const statPct = document.getElementById('dash-stat-progress');

  if (statAns) statAns.textContent = `${answeredCount}/${total}`;
  if (statRea) statRea.textContent = `${reasonedCount}/${total}`;
  if (statPct) statPct.textContent = `${progressPct}%`;
}

function renderTextCards() {
  const container = document.getElementById('dashboard-text-cards');
  if (!container) return;

  let html = '';
  TKA_DATA.texts.forEach(text => {
    const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
    let answered = 0;
    textQuestions.forEach(q => {
      if (AppState.answers[q.id] && AppState.answers[q.id].answer !== null) answered++;
    });

    const progressPct = textQuestions.length > 0 ? Math.round((answered / textQuestions.length) * 100) : 0;

    html += `
      <div class="text-card">
        <div>
          <div class="text-card-top">
            <span class="badge badge-blue">${text.number}</span>
            <span class="badge badge-amber">${text.questionRange}</span>
          </div>
          <h3 class="text-card-title">${text.title}</h3>
          <p class="text-card-meta">${text.vocabulary.length} Vocabularies • ${textQuestions.length} TKA Questions</p>
          
          <div style="margin-top: 14px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 700; color: var(--text-muted);">
              <span>Completion Progress</span>
              <span>${answered}/${textQuestions.length} (${progressPct}%)</span>
            </div>
            <div class="text-progress-bar-container">
              <div class="text-progress-bar-fill" style="width: ${progressPct}%;"></div>
            </div>
          </div>
        </div>

        <button class="btn btn-primary btn-sm" onclick="openWorkspace(${text.id})" style="width: 100%; margin-top: 8px;">
          ✍️ Open Worksheet →
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ==========================================
// MODUL 2: WORKSHEET & REASONING
// ==========================================
function openWorkspace(textId, qIndex = 0) {
  AppState.selectedTextId = textId;
  AppState.currentQuestionIndex = qIndex;
  setView('workspace');
}

function renderWorkspace() {
  const text = TKA_DATA.texts.find(t => t.id === AppState.selectedTextId) || TKA_DATA.texts[0];
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);

  if (AppState.currentQuestionIndex >= textQuestions.length) {
    AppState.currentQuestionIndex = 0;
  }

  const titleEl = document.getElementById('ws-title');
  if (titleEl) titleEl.textContent = `${text.number}: ${text.title}`;

  renderReadingPassage(text);
  renderQuestionPills(textQuestions);
  renderQuestionCanvas(textQuestions[AppState.currentQuestionIndex]);
  renderPeekContent(text);
  updateMobileTabVisibility();
}

function renderReadingPassage(text) {
  const readingTitle = document.getElementById('reading-title');
  const readingCite = document.getElementById('reading-citation');
  const readingContent = document.getElementById('reading-content');

  if (readingTitle) readingTitle.textContent = text.title;
  if (readingCite) readingCite.textContent = text.sourceCitation || '(Official TKA Reference)';

  if (readingContent) {
    let fullTextToRead = text.title + ". ";
    let html = '';
    text.paragraphs.forEach((p, idx) => {
      fullTextToRead += p + " ";
      html += `
        <div class="reading-paragraph">
          <span class="p-number">¶ P${idx + 1}</span>
          ${p}
        </div>
      `;
    });

    html += `
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border-color); display: flex; gap: 10px; flex-wrap: wrap;">
        <button class="btn btn-outline btn-sm" onclick="speakText(\`${escapeQuotes(fullTextToRead)}\`)">🔊 Play Passage Audio</button>
        <button class="btn btn-secondary btn-sm" onclick="stopSpeaking()">⏹ Stop Audio</button>
      </div>
    `;

    readingContent.innerHTML = html;
  }

  applyReadingFontStyles();
}

function isAnswerFilled(ans) {
  if (ans === null || ans === undefined) return false;
  if (Array.isArray(ans)) return ans.length > 0;
  if (typeof ans === 'object') return Object.keys(ans).length > 0;
  return String(ans).trim().length > 0;
}

function renderQuestionPills(textQuestions) {
  const container = document.getElementById('practice-q-nav');
  if (!container) return;

  let html = '';
  textQuestions.forEach((q, idx) => {
    const isActive = idx === AppState.currentQuestionIndex;
    const isAnswered = AppState.answers[q.id] && isAnswerFilled(AppState.answers[q.id].answer);
    
    let classes = 'q-pill';
    if (isActive) classes += ' active';
    if (isAnswered) classes += ' answered';

    html += `
      <button class="${classes}" onclick="selectQuestion(${idx})">
        ${q.number}
      </button>
    `;
  });

  container.innerHTML = html;
}

function selectQuestion(idx) {
  AppState.currentQuestionIndex = idx;
  const text = TKA_DATA.texts.find(t => t.id === AppState.selectedTextId);
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
  renderQuestionPills(textQuestions);
  renderQuestionCanvas(textQuestions[idx]);

  if (window.innerWidth <= 900) {
    setMobileTab('quiz');
  }
}

function renderQuestionCanvas(q) {
  const container = document.getElementById('practice-canvas');
  if (!container || !q) return;

  const currentRecord = AppState.answers[q.id] || { answer: null, reason: '' };
  const textQuestions = TKA_DATA.questions.filter(item => item.textId === q.textId);
  const currentIdx = textQuestions.findIndex(item => item.id === q.id);

  let formatHtml = '';

  if (q.format === 'multiple_choice') {
    formatHtml = `
      <div class="options-list">
        ${q.options.map(opt => {
          const isSelected = currentRecord.answer === opt.key;
          return `
            <div class="option-card ${isSelected ? 'selected' : ''}" onclick="handleAnswer(${q.id}, '${opt.key}')">
              <div class="opt-radio-circle">${isSelected ? '✓' : opt.key}</div>
              <div class="opt-text"><strong>(${opt.key})</strong> ${opt.text}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else if (q.format === 'multi_select') {
    const selectedArr = Array.isArray(currentRecord.answer) ? currentRecord.answer : [];
    formatHtml = `
      <p style="font-size: 0.88rem; color: var(--accent-amber); font-weight: 700; margin-bottom: 12px;">
        💡 Complex Multiple-Select: Check all correct statements (more than one answer).
      </p>
      <div class="options-list">
        ${q.options.map(opt => {
          const isChecked = selectedArr.includes(opt.key);
          return `
            <div class="option-card ${isChecked ? 'selected' : ''}" onclick="handleMultiSelect(${q.id}, '${opt.key}')">
              <div class="opt-checkbox-box">${isChecked ? '✓' : ''}</div>
              <div class="opt-text">${opt.text}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else if (q.format === 'true_false') {
    const currentTF = currentRecord.answer || {};
    formatHtml = `
      <table class="interactive-table">
        <thead>
          <tr>
            <th>Statement</th>
            <th style="width: 80px; text-align: center;">True (T)</th>
            <th style="width: 80px; text-align: center;">False (F)</th>
          </tr>
        </thead>
        <tbody>
          ${q.statements.map(st => {
            const val = currentTF[st.id] || '';
            return `
              <tr>
                <td>${st.text}</td>
                <td style="text-align: center;">
                  <label class="table-choice-label">
                    <input type="radio" name="tf_${q.id}_${st.id}" value="T" ${val === 'T' ? 'checked' : ''} onchange="handleTrueFalse(${q.id}, '${st.id}', 'T')">
                    <span>T</span>
                  </label>
                </td>
                <td style="text-align: center;">
                  <label class="table-choice-label">
                    <input type="radio" name="tf_${q.id}_${st.id}" value="F" ${val === 'F' ? 'checked' : ''} onchange="handleTrueFalse(${q.id}, '${st.id}', 'F')">
                    <span>F</span>
                  </label>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  } else if (q.format === 'categorization') {
    const currentCat = currentRecord.answer || {};
    formatHtml = `
      <table class="interactive-table">
        <thead>
          <tr>
            <th>${q.tableHeaderStatements || 'Trait / Action'}</th>
            ${q.categories.map(cat => `<th style="width: 140px; text-align: center;">${cat}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${q.items.map(item => {
            const currentSelected = currentCat[item.id] || '';
            const stmt = item.statement || item.text || '';
            return `
              <tr>
                <td>${escapeHtml(stmt)}</td>
                ${q.categories.map(cat => `
                  <td style="text-align: center;">
                    <label class="table-choice-label">
                      <input type="radio" name="cat_${q.id}_${item.id}" value="${cat}" ${currentSelected === cat ? 'checked' : ''} onchange="handleCategorization(${q.id}, '${item.id}', '${cat}')">
                      <span>${cat}</span>
                    </label>
                  </td>
                `).join('')}
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }

  const charCount = (currentRecord.reason || '').length;

  let html = `
    <div class="question-meta-row">
      <span class="badge badge-blue">Question #${q.number} of 25</span>
      <span class="badge badge-purple">${q.type}</span>
    </div>

    <div class="question-stem-text">${escapeHtml(q.question)}</div>

    ${formatHtml}

    <div class="reasoning-box-wrapper">
      <div class="reasoning-header">
        <div class="reasoning-title">
          <span>✍️ Why did you choose this answer? (Reasoning & Text Evidence)</span>
        </div>
        <div class="reasoning-char-count" id="app-char-count-${q.id}">${charCount} characters</div>
      </div>
      <div class="reasoning-subtext">
        Type your paragraph citation evidence (e.g., <em>"Paragraph 2, Line 3"</em>) or your logical rationale for choosing the answer above.
      </div>
      <textarea 
        class="student-reason-textarea" 
        placeholder="Write your textual evidence or critical thinking rationale here..." 
        oninput="handleReason(${q.id}, this.value)">${escapeHtml(currentRecord.reason || '')}</textarea>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border-color);">
      <button class="btn btn-secondary btn-sm" ${currentIdx === 0 ? 'disabled style="opacity:0.4; pointer-events:none;"' : ''} onclick="selectQuestion(${currentIdx - 1})">
        ← Previous Question
      </button>
      
      <div>
        ${currentIdx === textQuestions.length - 1 ? `
          <button class="btn btn-success btn-sm" onclick="setView('final_review')">
            📋 Finish & Check Results →
          </button>
        ` : `
          <button class="btn btn-primary btn-sm" onclick="selectQuestion(${currentIdx + 1})">
            Next Question →
          </button>
        `}
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// Answer Actions
function ensureRecord(qId) {
  if (!AppState.answers[qId]) {
    AppState.answers[qId] = { answer: null, reason: '', timestamp: Date.now() };
  }
}

function handleAnswer(qId, key) {
  ensureRecord(qId);
  AppState.answers[qId].answer = key;
  AppState.answers[qId].timestamp = Date.now();
  saveData();

  const text = TKA_DATA.texts.find(t => t.id === AppState.selectedTextId);
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
  renderQuestionPills(textQuestions);
  renderQuestionCanvas(textQuestions[AppState.currentQuestionIndex]);
  showToast(`Saved answer for Question #${textQuestions[AppState.currentQuestionIndex].number}.`, 'info');
}

function handleMultiSelect(qId, key) {
  ensureRecord(qId);
  let currentArr = Array.isArray(AppState.answers[qId].answer) ? [...AppState.answers[qId].answer] : [];
  if (currentArr.includes(key)) {
    currentArr = currentArr.filter(item => item !== key);
  } else {
    currentArr.push(key);
  }
  AppState.answers[qId].answer = currentArr.sort();
  AppState.answers[qId].timestamp = Date.now();
  saveData();

  const text = TKA_DATA.texts.find(t => t.id === AppState.selectedTextId);
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
  renderQuestionPills(textQuestions);
  renderQuestionCanvas(textQuestions[AppState.currentQuestionIndex]);
}

function handleTrueFalse(qId, stmtId, val) {
  ensureRecord(qId);
  const currentObj = AppState.answers[qId].answer && typeof AppState.answers[qId].answer === 'object' && !Array.isArray(AppState.answers[qId].answer) ? { ...AppState.answers[qId].answer } : {};
  currentObj[stmtId] = val;
  AppState.answers[qId].answer = currentObj;
  AppState.answers[qId].timestamp = Date.now();
  saveData();

  const text = TKA_DATA.texts.find(t => t.id === AppState.selectedTextId);
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
  renderQuestionPills(textQuestions);
}

function handleCategorization(qId, itemId, val) {
  ensureRecord(qId);
  const currentObj = AppState.answers[qId].answer && typeof AppState.answers[qId].answer === 'object' && !Array.isArray(AppState.answers[qId].answer) ? { ...AppState.answers[qId].answer } : {};
  currentObj[itemId] = val;
  AppState.answers[qId].answer = currentObj;
  AppState.answers[qId].timestamp = Date.now();
  saveData();

  const text = TKA_DATA.texts.find(t => t.id === AppState.selectedTextId);
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
  renderQuestionPills(textQuestions);
}

function handleReason(qId, val) {
  ensureRecord(qId);
  AppState.answers[qId].reason = val;
  AppState.answers[qId].timestamp = Date.now();
  saveData();

  const countEl = document.getElementById(`app-char-count-${qId}`);
  if (countEl) countEl.textContent = `${val.length} characters`;
}

// ------------------------------------------
// MOBILE SWITCHER & PEEK BOTTOM SHEET
// ------------------------------------------
function setMobileTab(tab) {
  AppState.mobileActiveTab = tab;
  updateMobileTabVisibility();
}

function updateMobileTabVisibility() {
  const btnRead = document.getElementById('btn-app-mobile-read');
  const btnQuiz = document.getElementById('btn-app-mobile-quiz');
  const panelRead = document.getElementById('reading-panel');
  const panelQuiz = document.getElementById('practice-panel');

  if (btnRead && btnQuiz && panelRead && panelQuiz) {
    if (window.innerWidth <= 900) {
      if (AppState.mobileActiveTab === 'read') {
        btnRead.classList.add('active');
        btnQuiz.classList.remove('active');
        panelRead.classList.remove('mobile-hidden');
        panelQuiz.classList.add('mobile-hidden');
      } else {
        btnQuiz.classList.add('active');
        btnRead.classList.remove('active');
        panelQuiz.classList.remove('mobile-hidden');
        panelRead.classList.add('mobile-hidden');
      }
    } else {
      panelRead.classList.remove('mobile-hidden');
      panelQuiz.classList.remove('mobile-hidden');
    }
  }
}

window.addEventListener('resize', updateMobileTabVisibility);

function openAppPeekModal() {
  const overlay = document.getElementById('app-peek-sheet-overlay');
  if (overlay) overlay.classList.add('active');
}

function closeAppPeekModal() {
  const overlay = document.getElementById('app-peek-sheet-overlay');
  if (overlay) overlay.classList.remove('active');
}

function renderPeekContent(text) {
  const titleEl = document.getElementById('app-peek-title');
  const bodyEl = document.getElementById('app-peek-body');
  if (titleEl) titleEl.textContent = `${text.number}: ${text.title}`;
  if (bodyEl) {
    let html = '';
    text.paragraphs.forEach((p, idx) => {
      html += `
        <div class="reading-paragraph" style="font-size: 1rem; margin-bottom: 14px;">
          <span class="p-number">¶ P${idx + 1}</span>
          ${p}
        </div>
      `;
    });
    bodyEl.innerHTML = html;
  }
}

// ------------------------------------------
// TYPOGRAPHY
// ------------------------------------------
function changeFontSize(delta) {
  if (delta === 0) AppState.fontSizeLevel = 0;
  else AppState.fontSizeLevel = Math.max(-1, Math.min(2, AppState.fontSizeLevel + delta));
  applyReadingFontStyles();
  showToast('Font size updated.', 'info');
}

function toggleFontFamily() {
  AppState.fontFamily = AppState.fontFamily === 'serif' ? 'sans' : 'serif';
  const label = document.getElementById('font-family-label');
  if (label) label.textContent = AppState.fontFamily === 'serif' ? 'Serif' : 'Sans-Serif';
  applyReadingFontStyles();
}

function applyReadingFontStyles() {
  const sizeMap = { '-1': '1.02rem', '0': '1.18rem', '1': '1.32rem', '2': '1.48rem' };
  const currentSize = sizeMap[AppState.fontSizeLevel.toString()] || '1.18rem';
  const currentFont = AppState.fontFamily === 'serif' ? 'var(--font-serif)' : 'var(--font-sans)';

  document.querySelectorAll('#reading-content .reading-paragraph').forEach(p => {
    p.style.fontSize = currentSize;
    p.style.fontFamily = currentFont;
  });
}

// ==========================================
// MODUL 3: VOCABULARY LAB
// ==========================================
function renderVocabLab() {
  const container = document.getElementById('vocab-content-area');
  if (!container) return;

  let vocabList = [];
  if (AppState.vocabFilter === 'all') {
    TKA_DATA.texts.forEach(t => {
      t.vocabulary.forEach(v => vocabList.push({ ...v, textNumber: t.number }));
    });
  } else {
    const text = TKA_DATA.texts.find(t => t.id === Number(AppState.vocabFilter));
    if (text) vocabList = text.vocabulary.map(v => ({ ...v, textNumber: text.number }));
  }

  document.querySelectorAll('.vocab-filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.textfilter === String(AppState.vocabFilter));
  });

  document.querySelectorAll('.vocab-mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === AppState.vocabActivity);
  });

  if (AppState.vocabActivity === 'flipcard') {
    renderVocabFlipcards(vocabList, container);
  } else if (AppState.vocabActivity === 'matching') {
    renderVocabMatching(vocabList, container);
  } else if (AppState.vocabActivity === 'context') {
    renderVocabContextQuiz(vocabList, container);
  } else if (AppState.vocabActivity === 'list') {
    renderVocabTable(vocabList, container);
  }
}

function filterVocab(filterVal) {
  AppState.vocabFilter = filterVal;
  renderVocabLab();
}

function setVocabActivity(activity) {
  AppState.vocabActivity = activity;
  renderVocabLab();
}

// 1. Flip Cards
function renderVocabFlipcards(vocabList, container) {
  let cardsHtml = '<div class="flip-cards-grid">';
  vocabList.forEach((v, idx) => {
    cardsHtml += `
      <div class="flip-card-wrapper">
        <div class="flip-card-inner" id="flip-card-${idx}" onclick="this.classList.toggle('flipped')">
          <div class="flip-card-front">
            <span class="badge badge-blue">${v.textNumber || 'Word'} #${idx + 1}</span>
            <div>
              <div class="word-title">${v.word}</div>
              <div class="pos-tag">${v.pos}</div>
            </div>
            <div class="hint-text">👆 Click / Tap card to flip & view meaning</div>
          </div>
          <div class="flip-card-back">
            <div>
              <div class="back-meaning">${v.meaning}</div>
              <div class="back-ipa">
                <span>${v.pronunciation}</span>
                <button class="btn-listen" onclick="event.stopPropagation(); speakWord('${v.word}')">🔊 Listen</button>
              </div>
              <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 8px;"><strong>Context:</strong> <em>"${v.context}"</em></p>
            </div>
            <div class="back-example">
              <strong>Example:</strong> ${v.example}
            </div>
          </div>
        </div>
      </div>
    `;
  });
  cardsHtml += '</div>';
  container.innerHTML = cardsHtml;
}

// 2. Matching Game
function renderVocabMatching(vocabList, container) {
  const vocabSample = [...vocabList].sort(() => Math.random() - 0.5).slice(0, 6);
  const shuffledMeanings = [...vocabSample].sort(() => Math.random() - 0.5);

  let html = `
    <div style="background: var(--bg-card); padding: 26px; border-radius: 14px; border: 1px solid var(--border-color); margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <h3 style="font-size: 1.2rem; color: var(--text-main); font-weight: 800;">🧩 Activity 2 — Match Words & Meanings</h3>
        <span class="badge badge-green" id="app-match-score">0 / ${vocabSample.length} Matched</span>
      </div>
      <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 22px;">Select an English word in the left column, then pair it with its correct meaning in the right column!</p>
      
      <div class="matching-game-grid">
        <div class="match-column" id="app-match-left">
          ${vocabSample.map(v => `
            <div class="match-item" data-word="${v.word}" onclick="handleMatchSelect('left', '${v.word}')">
              ${v.word} <span style="font-size: 0.8rem; color: var(--text-muted);">(${v.pos})</span>
            </div>
          `).join('')}
        </div>
        <div class="match-column" id="app-match-right">
          ${shuffledMeanings.map(v => `
            <div class="match-item" data-word="${v.word}" onclick="handleMatchSelect('right', '${v.word}')">
              ${v.meaning}
            </div>
          `).join('')}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: right;">
        <button class="btn btn-secondary btn-sm" onclick="renderVocabMatching(vocabList, container)">🔄 Shuffle / Play Again</button>
      </div>
    </div>
  `;
  container.innerHTML = html;
  AppState.matchingState = { selectedLeft: null, selectedRight: null, matchedPairs: [] };
}

function handleMatchSelect(col, word) {
  if (AppState.matchingState.matchedPairs.includes(word)) return;

  if (col === 'left') {
    AppState.matchingState.selectedLeft = word;
    document.querySelectorAll('#app-match-left .match-item').forEach(el => {
      el.classList.toggle('selected', el.dataset.word === word && !AppState.matchingState.matchedPairs.includes(word));
    });
  } else {
    AppState.matchingState.selectedRight = word;
    document.querySelectorAll('#app-match-right .match-item').forEach(el => {
      el.classList.toggle('selected', el.dataset.word === word && !AppState.matchingState.matchedPairs.includes(word));
    });
  }

  if (AppState.matchingState.selectedLeft && AppState.matchingState.selectedRight) {
    if (AppState.matchingState.selectedLeft === AppState.matchingState.selectedRight) {
      const matched = AppState.matchingState.selectedLeft;
      AppState.matchingState.matchedPairs.push(matched);
      playTone('success');

      const leftEl = document.querySelector(`#app-match-left [data-word="${matched}"]`);
      const rightEl = document.querySelector(`#app-match-right [data-word="${matched}"]`);
      if (leftEl) { leftEl.classList.remove('selected'); leftEl.classList.add('matched'); leftEl.innerHTML += ' ✓'; }
      if (rightEl) { rightEl.classList.remove('selected'); rightEl.classList.add('matched'); rightEl.innerHTML += ' ✓'; }

      const scoreBadge = document.getElementById('app-match-score');
      if (scoreBadge) scoreBadge.textContent = `${AppState.matchingState.matchedPairs.length} / 6 Matched`;

      showToast(`Correct pair: "${matched}"!`, 'success');
      AppState.matchingState.selectedLeft = null;
      AppState.matchingState.selectedRight = null;
    } else {
      playTone('error');
      showToast('Not quite right. Try again!', 'error');
      setTimeout(() => {
        document.querySelectorAll('.match-item.selected').forEach(el => el.classList.remove('selected'));
        AppState.matchingState.selectedLeft = null;
        AppState.matchingState.selectedRight = null;
      }, 450);
    }
  }
}

// 3. Context Quiz
function renderVocabContextQuiz(vocabList, container) {
  const currentIdx = AppState.contextQuizState.currentIndex % vocabList.length;
  const currentV = vocabList[currentIdx];

  const otherMeanings = vocabList.filter(item => item.word !== currentV.word).map(item => item.meaning);
  const options = [currentV.meaning, ...otherMeanings.slice(0, 3)].sort(() => Math.random() - 0.5);

  let html = `
    <div style="background: var(--bg-card); padding: 32px; border-radius: 14px; border: 1px solid var(--border-color); max-width: 780px; margin: 0 auto; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px;">
        <span class="badge badge-amber">Context Challenge (${currentV.textNumber || 'Text'})</span>
        <span style="font-size: 0.92rem; color: var(--text-muted); font-weight: 700;">Word ${currentIdx + 1} of ${vocabList.length}</span>
      </div>

      <h3 style="font-size: 1.25rem; color: var(--text-main); margin-bottom: 16px; font-weight: 800;">What is the contextual meaning of "<span style="color: var(--academic-blue);">${currentV.word}</span>" in this sentence?</h3>
      
      <div style="background: var(--bg-card-alt); border-left: 4px solid var(--academic-blue); padding: 18px; border-radius: 8px; font-family: var(--font-serif); font-size: 1.1rem; margin-bottom: 24px; color: var(--text-main);">
        "${currentV.context}"
      </div>

      <div class="options-list" id="app-context-options-list">
        ${options.map(opt => `
          <div class="option-card" onclick="checkContextAnswer('${escapeHtml(opt)}', '${escapeHtml(currentV.meaning)}', this)">
            <div class="opt-radio-circle"></div>
            <div class="opt-text">${opt}</div>
          </div>
        `).join('')}
      </div>

      <div id="app-context-feedback-box" style="display: none; margin-top: 20px;"></div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border-color);">
        <button class="btn btn-outline btn-sm" onclick="speakWord('${currentV.word}')">🔊 Listen Word</button>
        <button class="btn btn-primary" id="btn-app-next-context" style="display: none;" onclick="nextContextQuiz(${vocabList.length})">Next Word →</button>
      </div>
    </div>
  `;
  container.innerHTML = html;
}

function checkContextAnswer(chosen, correct, el) {
  if (AppState.contextQuizState.answered) return;
  AppState.contextQuizState.answered = true;

  const isRight = chosen === correct;
  if (isRight) playTone('success');
  else playTone('error');

  const feedbackBox = document.getElementById('app-context-feedback-box');
  const nextBtn = document.getElementById('btn-app-next-context');

  document.querySelectorAll('#app-context-options-list .option-card').forEach(card => {
    card.style.pointerEvents = 'none';
    if (card.querySelector('.opt-text').textContent.trim() === correct) {
      card.style.borderColor = 'var(--accent-green)';
      card.style.background = 'var(--accent-green-light)';
    } else if (card === el && !isRight) {
      card.style.borderColor = 'var(--accent-red)';
      card.style.background = 'var(--accent-red-light)';
    }
  });

  if (feedbackBox) {
    feedbackBox.style.display = 'block';
    if (isRight) {
      feedbackBox.innerHTML = `
        <div style="background: var(--accent-green-light); color: var(--accent-green); padding: 14px; border-radius: 8px; font-weight: 700;">
          ✓ Correct! <strong>${correct}</strong> is the most suitable contextual meaning.
        </div>
      `;
    } else {
      feedbackBox.innerHTML = `
        <div style="background: var(--accent-red-light); color: var(--accent-red); padding: 14px; border-radius: 8px; font-weight: 700;">
          ✗ Incorrect. The accurate meaning is: <strong>${correct}</strong>.
        </div>
      `;
    }
  }

  if (nextBtn) nextBtn.style.display = 'inline-flex';
}

function nextContextQuiz(total) {
  AppState.contextQuizState.answered = false;
  AppState.contextQuizState.currentIndex = (AppState.contextQuizState.currentIndex + 1) % total;
  renderVocabLab();
}

// 4. Master Table
function renderVocabTable(vocabList, container) {
  const q = (AppState.vocabSearchQuery || '').toLowerCase();
  const filtered = vocabList.filter(v => 
    v.word.toLowerCase().includes(q) || 
    v.meaning.toLowerCase().includes(q) || 
    v.context.toLowerCase().includes(q)
  );

  let html = `
    <div>
      <input type="text" class="search-input-box" placeholder="🔍 Search word, meaning, or sentence (Live Search)..." value="${escapeHtml(AppState.vocabSearchQuery)}" oninput="handleAppVocabSearch(this.value)">
      <div style="overflow-x: auto;">
        <table class="vocab-table">
          <thead>
            <tr>
              <th>Word & IPA</th>
              <th>Passage</th>
              <th>PoS</th>
              <th>Indonesian Meaning</th>
              <th>Context in Text</th>
              <th>Example Sentence</th>
              <th>Audio</th>
            </tr>
          </thead>
          <tbody>
  `;
  if (filtered.length === 0) {
    html += `<tr><td colspan="7" style="text-align: center; padding: 24px; color: var(--text-muted);">No vocabulary matching your search query.</td></tr>`;
  } else {
    filtered.forEach(v => {
      html += `
        <tr>
          <td><strong>${v.word}</strong><br><span style="font-size: 0.82rem; color: var(--text-muted);">${v.pronunciation}</span></td>
          <td><span class="badge badge-gray">${v.textNumber || 'Text'}</span></td>
          <td><span class="badge badge-cyan">${v.pos}</span></td>
          <td><strong>${v.meaning}</strong></td>
          <td style="font-size: 0.88rem; font-style: italic;">"${v.context}"</td>
          <td style="font-size: 0.88rem;">${v.example}</td>
          <td><button class="btn-listen" onclick="speakWord('${v.word}')">🔊</button></td>
        </tr>
      `;
    });
  }
  html += '</tbody></table></div></div>';
  container.innerHTML = html;
}

function handleAppVocabSearch(query) {
  AppState.vocabSearchQuery = query;
  const container = document.getElementById('vocab-content-area');
  let vocabList = [];
  if (AppState.vocabFilter === 'all') {
    TKA_DATA.texts.forEach(t => {
      t.vocabulary.forEach(v => vocabList.push({ ...v, textNumber: t.number }));
    });
  } else {
    const text = TKA_DATA.texts.find(t => t.id === Number(AppState.vocabFilter));
    if (text) vocabList = text.vocabulary.map(v => ({ ...v, textNumber: text.number }));
  }
  renderVocabTable(vocabList, container);
}

// ==========================================
// MODUL 4: STRATEGY GUIDE (4 PILLARS)
// ==========================================
function renderTKAStrategy() {
  const container = document.getElementById('strategy-cards-container');
  if (!container) return;

  let html = '';
  TKA_DATA.strategies.forEach(strat => {
    html += `
      <div class="strategy-card-accordion" id="app-strat-acc-${strat.id}">
        <div class="strategy-accordion-header" onclick="toggleAppStrategyAccordion('${strat.id}')">
          <div class="strategy-accordion-title">${strat.name}</div>
          <span class="badge badge-blue">4 HOTS PILLARS ▾</span>
        </div>
        <div class="strategy-accordion-body">
          ${strat.quickQuestion ? `<div style="font-weight: 700; color: var(--academic-blue); margin-bottom: 12px;">❓ Key Question: ${strat.quickQuestion}</div>` : ''}
          
          <div class="strategy-pillars-grid">
            <div class="pillar-box pillar-1">
              <div class="pillar-title">⚡ Pilar 1: Formula Emas</div>
              <div class="pillar-content">
                <strong>${strat.formula || 'Konsep Dasar'}</strong>
              </div>
            </div>

            <div class="pillar-box pillar-2">
              <div class="pillar-title">📌 Pillar 2: Question Stems</div>
              <div class="pillar-content">
                <ul style="padding-left: 18px; margin: 0;">
                  ${(strat.questionCharacteristics || [strat.quickQuestion || 'Standard TKA Question']).map(q => `<li>${q}</li>`).join('')}
                </ul>
              </div>
            </div>

            <div class="pillar-box pillar-3">
              <div class="pillar-title">📋 Pilar 3: Langkah Sistematis Menjawab</div>
              <div class="pillar-content">
                <ol style="padding-left: 18px; margin: 0;">
                  ${strat.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
              </div>
            </div>

            <div class="pillar-box pillar-4">
              <div class="pillar-title">⚠️ Pilar 4: Waspada Pengecoh</div>
              <div class="pillar-content">
                <ul style="padding-left: 18px; margin: 0;">
                  ${(strat.distractorTraps || ['Waspada terhadap pengecoh yang menyimpang dari konteks bacaan.']).map(trap => `<li>${trap}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function toggleAppStrategyAccordion(id) {
  const el = document.getElementById(`app-strat-acc-${id}`);
  if (el) el.classList.toggle('open');
}

// ==========================================
// MODUL 5: FINAL REVIEW & ON-DEMAND CHECK
// ==========================================
function calculateAppScore() {
  let correctCount = 0;
  let incorrectCount = 0;
  let answeredCount = 0;
  let reasonedCount = 0;
  const total = TKA_DATA.questions.length;

  TKA_DATA.questions.forEach(q => {
    const rec = AppState.answers[q.id];
    if (rec && isAnswerFilled(rec.answer)) {
      answeredCount++;
      if (rec.reason && rec.reason.trim().length > 0) reasonedCount++;
    }

    const evalStatus = AppState.evaluations[q.id];
    if (evalStatus === 'correct') {
      correctCount++;
    } else if (evalStatus === 'incorrect') {
      incorrectCount++;
    }
  });

  const evaluatedCount = correctCount + incorrectCount;
  const unevaluatedCount = total - evaluatedCount;

  return {
    total,
    answeredCount,
    reasonedCount,
    evaluatedCount,
    unevaluatedCount,
    correct: correctCount,
    incorrect: incorrectCount,
    percentage: total > 0 ? Math.round((correctCount / total) * 100) : 0
  };
}

function formatAnswerString(q, userAns) {
  if (!isAnswerFilled(userAns)) return '<em>(Unanswered)</em>';
  if (q.format === 'multiple_choice') {
    const optObj = q.options.find(o => o.key === userAns);
    return `<strong>Option (${userAns})</strong>: ${optObj ? optObj.text : ''}`;
  } else if (q.format === 'multi_select') {
    return `<strong>Selected Options</strong>: Statements [${(userAns || []).join(', ')}]`;
  } else if (q.format === 'true_false') {
    return `<div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;">` + q.statements.map(st => {
      const chosen = userAns[st.id] || '(Not answered)';
      return `<div>• <em>"${escapeHtml(st.text)}"</em> → <strong>[ ${escapeHtml(chosen)} ]</strong></div>`;
    }).join('') + `</div>`;
  } else if (q.format === 'categorization') {
    return `<div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;">` + q.items.map((it, idx) => {
      const chosen = userAns[it.id] || '(Not answered)';
      const stmt = it.statement || it.text || `Item ${idx+1}`;
      return `<div>• <em>"${escapeHtml(stmt)}"</em> → <strong>[ ${escapeHtml(chosen)} ]</strong></div>`;
    }).join('') + `</div>`;
  }
  return String(userAns);
}

function formatAnswerPlainText(q, userAns) {
  if (!isAnswerFilled(userAns)) return '(Unanswered)';
  if (q.format === 'multiple_choice') {
    const optObj = q.options.find(o => o.key === userAns);
    return `Option (${userAns}): ${optObj ? optObj.text : ''}`;
  } else if (q.format === 'multi_select') {
    return `Statements [${(userAns || []).join(', ')}]`;
  } else if (q.format === 'true_false') {
    return q.statements.map(st => {
      const chosen = userAns[st.id] || '(Not answered)';
      return `\n    - "${st.text}" → [${chosen}]`;
    }).join('');
  } else if (q.format === 'categorization') {
    return q.items.map((it, idx) => {
      const chosen = userAns[it.id] || '(Not answered)';
      const stmt = it.statement || it.text || `Item ${idx+1}`;
      return `\n    - "${stmt}" → [${chosen}]`;
    }).join('');
  }
  return String(userAns);
}

function setAppManualEvaluation(qId, status) {
  if (AppState.evaluations[qId] === status) {
    delete AppState.evaluations[qId];
    showToast(`Evaluation for Question #${qId} cleared`, 'info');
  } else {
    AppState.evaluations[qId] = status;
    if (status === 'correct') {
      playTone('success');
      showToast(`Question #${qId} marked as: ✅ Correct`, 'success');
    } else {
      playTone('error');
      showToast(`Question #${qId} marked as: ❌ Incorrect`, 'info');
    }
  }
  saveData();
  renderFinalReview();
}

function renderFinalReview() {
  const container = document.getElementById('final-review-container');
  if (!container) return;

  const scoreData = calculateAppScore();
  const studentName = AppState.profile.name || '(Not Filled)';
  const studentClass = AppState.profile.class || '(Not Filled)';
  const studentSchool = AppState.profile.school || 'SMA Plus PGRI Cibinong';
  const teacher = AppState.profile.teacher || 'Muhammad Falahaen Jiddan, M.Pd. Gr.';

  let html = `
    <div class="summary-meta-header">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--border-color); padding-bottom: 20px; margin-bottom: 22px; flex-wrap: wrap; gap: 14px;">
        <div>
          <span class="badge badge-green" style="margin-bottom: 8px;">STUDENT WORKSHEET & PERFORMANCE REPORT</span>
          <h2 style="font-size: 1.8rem; font-weight: 900; color: var(--text-main); margin-bottom: 4px;">LATIHAN TKA BAHASA INGGRIS SMA 2026 NARRATIVE TEXT</h2>
          <p style="font-size: 0.95rem; color: var(--text-muted);">25 TKA Practice Questions, Student Reasoning, Self-Evaluation & Performance Report</p>
        </div>
        <div class="action-toolbar">
          <button class="btn btn-success" onclick="sendAppToWhatsApp()">📲 Send to WhatsApp</button>
          <button class="btn btn-primary" onclick="window.print()">🖨️ Print / Save PDF</button>
          <button class="btn btn-secondary" onclick="copyAppSummary()">📋 Copy Summary</button>
          <button class="btn btn-danger" onclick="openResetModal()">🔄 Reset Worksheet</button>
        </div>
      </div>

      <div style="background: var(--bg-card-alt); border-radius: 12px; padding: 18px 24px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 22px;">
        <div>
          <div class="student-input-label">Student Name:</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--text-main);">${escapeHtml(studentName)}</div>
        </div>
        <div>
          <div class="student-input-label">Class / Group:</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--text-main);">${escapeHtml(studentClass)}</div>
        </div>
        <div>
          <div class="student-input-label">School / Institution:</div>
          <div style="font-size: 1rem; font-weight: 700; color: var(--text-main);">${escapeHtml(studentSchool)}</div>
        </div>
        <div>
          <div class="student-input-label">Teacher / Advisor:</div>
          <div style="font-size: 1rem; font-weight: 700; color: var(--text-main);">${escapeHtml(teacher)}</div>
        </div>
      </div>

      <div class="overview-stats-grid">
        <div class="stat-card">
          <div class="stat-icon" style="background: var(--accent-green-light); color: var(--accent-green);">📝</div>
          <div>
            <div class="stat-val">${scoreData.answeredCount}/${scoreData.total}</div>
            <div class="stat-label">Questions Answered</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background: var(--accent-cyan-light); color: var(--academic-blue);">✍️</div>
          <div>
            <div class="stat-val">${scoreData.reasonedCount}/${scoreData.total}</div>
            <div class="stat-label">Reasoning Provided</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background: var(--accent-green-light); color: var(--accent-green);">✅</div>
          <div>
            <div class="stat-val">${scoreData.correct}/${scoreData.total}</div>
            <div class="stat-label">Correct Score (${scoreData.percentage}%)</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background: var(--accent-red-light); color: var(--accent-red);">❌</div>
          <div>
            <div class="stat-val">${scoreData.incorrect}/${scoreData.total}</div>
            <div class="stat-label">Incorrect Answers</div>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 14px; flex-wrap: wrap; gap: 8px;">
        <span style="font-weight: 800; font-size: 1.1rem; color: var(--text-main);">📋 Student Answer Sheet & Self-Assessment:</span>
        <span style="font-size: 0.88rem; color: var(--text-muted);">Mark each question using <strong>✅ Correct</strong> or <strong>❌ Incorrect</strong> based on class review.</span>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 16px;">
  `;

  TKA_DATA.questions.forEach(q => {
    const rec = AppState.answers[q.id] || { answer: null, reason: '' };
    const isAnswered = rec.answer !== null && rec.answer !== undefined;
    const evalStatus = AppState.evaluations[q.id]; // 'correct', 'incorrect', or undefined
    const hasReason = rec.reason && rec.reason.trim().length > 0;

    let badgeStatusHtml = '';
    if (evalStatus === 'correct') {
      badgeStatusHtml = '<span class="badge badge-green">✅ MARKED CORRECT</span>';
    } else if (evalStatus === 'incorrect') {
      badgeStatusHtml = '<span class="badge badge-red">❌ MARKED INCORRECT</span>';
    } else {
      badgeStatusHtml = isAnswered 
        ? '<span class="badge badge-blue">📝 SUBMITTED (PENDING CHECK)</span>' 
        : '<span class="badge badge-gray">⚪ UNANSWERED</span>';
    }

    html += `
      <div class="summary-card-item">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
          <div>
            <span class="badge badge-blue">Text ${q.textId} • Question #${q.number}</span>
            <span class="badge badge-purple">${q.type}</span>
          </div>
          <div>
            ${badgeStatusHtml}
          </div>
        </div>

        <div style="font-weight: 800; font-size: 1.05rem; color: var(--text-main); margin-bottom: 12px; white-space: pre-line;">
          ${escapeHtml(q.question)}
        </div>

        <div style="background: var(--bg-card-alt); padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 10px; font-size: 0.95rem;">
          <div style="font-size: 0.8rem; font-weight: 800; color: var(--text-muted); margin-bottom: 4px;">STUDENT SELECTION:</div>
          <div>${formatAnswerString(q, rec.answer)}</div>
        </div>

        <div style="background: var(--accent-cyan-light); border-left: 4px solid var(--academic-blue); padding: 12px 16px; border-radius: 6px; margin-bottom: 12px;">
          <strong style="font-size: 0.86rem; color: var(--academic-blue);">✍️ Student Reasoning & Text Evidence:</strong>
          <p style="font-size: 0.92rem; color: var(--text-main); margin-top: 4px; line-height: 1.5; font-style: ${hasReason ? 'normal' : 'italic'};">
            ${hasReason ? escapeHtml(rec.reason) : 'No written reasoning provided for this question.'}
          </p>
        </div>

        <!-- Manual Evaluation Buttons -->
        <div class="manual-eval-box">
          <div>
            <strong style="font-size: 0.92rem; color: var(--text-main);">⚖️ Student Self-Assessment:</strong>
            <span style="font-size: 0.84rem; color: var(--text-muted); display: block;">Declare whether your answer is correct or incorrect:</span>
          </div>
          <div class="eval-btn-group">
            <button class="eval-btn eval-btn-correct ${evalStatus === 'correct' ? 'active' : ''}" onclick="setAppManualEvaluation(${q.id}, 'correct')">
              ✅ Correct
            </button>
            <button class="eval-btn eval-btn-incorrect ${evalStatus === 'incorrect' ? 'active' : ''}" onclick="setAppManualEvaluation(${q.id}, 'incorrect')">
              ❌ Incorrect
            </button>
          </div>
        </div>

      </div>
    `;
  });

  html += '</div>';
  container.innerHTML = html;
}

function sendAppToWhatsApp() {
  const name = AppState.profile.name || 'Student';
  const grade = AppState.profile.class || '-';
  const school = AppState.profile.school || 'SMA Plus PGRI Cibinong';
  const teacher = AppState.profile.teacher || 'Muhammad Falahaen Jiddan, M.Pd. Gr.';
  const scoreData = calculateAppScore();

  let text = `*LATIHAN TKA BAHASA INGGRIS SMA 2026 NARRATIVE TEXT*\n`;
  text += `*Student Name:* ${name}\n`;
  text += `*Class / Group:* ${grade}\n`;
  text += `*School:* ${school}\n`;
  text += `*Teacher / Advisor:* ${teacher}\n`;
  text += `*Self-Assessment Score (Correct):* ${scoreData.correct}/${scoreData.total} (${scoreData.percentage}%)\n`;
  text += `*Incorrect Answers:* ${scoreData.incorrect}/${scoreData.total}\n`;
  text += `*Pending Check / Unevaluated:* ${scoreData.unevaluatedCount}/${scoreData.total}\n`;
  text += `*Questions Answered:* ${scoreData.answeredCount}/${scoreData.total}\n`;
  text += `*Reasoning Provided:* ${scoreData.reasonedCount}/${scoreData.total}\n\n`;
  text += `*--- STUDENT ANSWER SHEET & SELF-ASSESSMENT REPORT ---*\n`;

  TKA_DATA.questions.forEach(q => {
    const rec = AppState.answers[q.id] || { answer: null, reason: '' };
    const evalStatus = AppState.evaluations[q.id];
    let statusText = '⚪ Unevaluated';
    if (evalStatus === 'correct') statusText = '✅ Correct';
    else if (evalStatus === 'incorrect') statusText = '❌ Incorrect';

    text += `\n*Question ${q.number} (${q.type})*:\n`;
    text += `• Evaluation Status: ${statusText}\n`;
    text += `• Student Selection: ${formatAnswerPlainText(q, rec.answer)}\n`;
    text += `• Text Evidence & Reasoning: ${rec.reason ? rec.reason : '(No reasoning provided)'}\n`;
  });

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function copyAppSummary() {
  const name = AppState.profile.name || 'Student';
  const grade = AppState.profile.class || '-';
  const school = AppState.profile.school || 'SMA Plus PGRI Cibinong';
  const teacher = AppState.profile.teacher || 'Muhammad Falahaen Jiddan, M.Pd. Gr.';
  const scoreData = calculateAppScore();

  let text = `LATIHAN TKA BAHASA INGGRIS SMA 2026 NARRATIVE TEXT\n`;
  text += `Student Name: ${name}\nClass: ${grade}\nSchool: ${school}\nTeacher: ${teacher}\n`;
  text += `Self-Assessment Score (Correct): ${scoreData.correct}/${scoreData.total} (${scoreData.percentage}%)\n`;
  text += `Incorrect Answers: ${scoreData.incorrect}/${scoreData.total}\n`;
  text += `Pending Check / Unevaluated: ${scoreData.unevaluatedCount}/${scoreData.total}\n`;
  text += `Questions Answered: ${scoreData.answeredCount}/${scoreData.total}\n`;
  text += `Reasoning Provided: ${scoreData.reasonedCount}/${scoreData.total}\n\n`;
  text += `--- STUDENT ANSWER SHEET & SELF-ASSESSMENT REPORT ---\n\n`;

  TKA_DATA.questions.forEach(q => {
    const rec = AppState.answers[q.id] || { answer: null, reason: '' };
    const evalStatus = AppState.evaluations[q.id];
    let statusText = '⚪ Unevaluated';
    if (evalStatus === 'correct') statusText = '✅ Correct';
    else if (evalStatus === 'incorrect') statusText = '❌ Incorrect';

    text += `Question ${q.number} (${q.type}):\n`;
    text += `Evaluation Status: ${statusText}\n`;
    text += `Student Selection: ${formatAnswerPlainText(q, rec.answer)}\n`;
    text += `Reasoning: ${rec.reason || '-'}\n\n`;
  });

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Summary copied to clipboard!', 'success');
    }).catch(() => {
      showToast('Failed to copy automatically.', 'error');
    });
  }
}

// ------------------------------------------
// MODAL ACTIONS
// ------------------------------------------
function openResetModal() {
  const m = document.getElementById('reset-modal');
  if (m) m.classList.add('active');
}

function closeAppModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('active');
}

function confirmReset() {
  AppState.answers = {};
  AppState.evaluations = {};
  SafeStorage.removeItem(APP_STORAGE_KEY);
  closeAppModal('reset-modal');
  showToast('Worksheet has been reset.', 'info');
  setView('dashboard');
}

// ------------------------------------------
// UTILITIES & EVENTS
// ------------------------------------------
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeQuotes(str) {
  if (!str) return '';
  return String(str).replace(/"/g, '\\"').replace(/'/g, "\\'").replace(/\n/g, ' ');
}

function setupEvents() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });
}

// Explicit Window Bindings
window.setView = setView;
window.toggleTheme = toggleTheme;
window.openWorkspace = openWorkspace;
window.selectQuestion = selectQuestion;
window.handleAnswer = handleAnswer;
window.handleMultiSelect = handleMultiSelect;
window.handleTrueFalse = handleTrueFalse;
window.handleCategorization = handleCategorization;
window.handleReason = handleReason;
window.changeFontSize = changeFontSize;
window.toggleFontFamily = toggleFontFamily;
window.setMobileTab = setMobileTab;
window.openAppPeekModal = openAppPeekModal;
window.closeAppPeekModal = closeAppPeekModal;
window.speakText = speakText;
window.stopSpeaking = stopSpeaking;
window.speakWord = speakWord;
window.filterVocab = filterVocab;
window.setVocabActivity = setVocabActivity;
window.handleMatchSelect = handleMatchSelect;
window.checkContextAnswer = checkContextAnswer;
window.nextContextQuiz = nextContextQuiz;
window.handleAppVocabSearch = handleAppVocabSearch;
window.openResetModal = openResetModal;
window.closeAppModal = closeAppModal;
window.confirmReset = confirmReset;
window.toggleAppStrategyAccordion = toggleAppStrategyAccordion;
window.setAppManualEvaluation = setAppManualEvaluation;
window.sendAppToWhatsApp = sendAppToWhatsApp;
window.copyAppSummary = copyAppSummary;
window.saveAppProfile = saveAppProfile;

// Guaranteed DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
