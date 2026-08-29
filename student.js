// ==========================================
// LATIHAN TKA BAHASA INGGRIS SMA 2026 - NARRATIVE TEXT
// STUDENT MODE JAVASCRIPT ENGINE (student.js)
// 100% Offline, Touch-Safe, SafeStorage Enabled
// ==========================================

const STUDENT_STORAGE_KEY = 'tka_english_2026_narrative_student';
const THEME_KEY = 'tka_english_2026_theme';

// SafeStorage Wrapper with in-memory fallback for file:// and sandboxes
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
const StudentState = {
  currentView: 'dashboard', // 'dashboard', 'student_workspace', 'vocab_lab', 'tka_strategy', 'worksheet_summary'
  selectedTextId: 1,
  currentQuestionIndex: 0,

  // Student Identity
  profile: {
    name: '',
    class: '',
    school: 'SMA Plus PGRI Cibinong',
    teacher: 'Muhammad Falahaen Jiddan, M.Pd. Gr.'
  },

  // Student Answers & Reasons: { [qId]: { answer: any, reason: string, timestamp: number } }
  answers: {},

  // Student Manual Self-Evaluations in Summary View: { [qId]: 'correct' | 'incorrect' }
  evaluations: {},

  // Mobile Switcher
  mobileActiveTab: 'read', // 'read' or 'quiz'


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
function initStudentApp() {
  loadStudentTheme();
  loadStudentData();
  setupStudentEvents();
  renderStudentApp();
}

function loadStudentTheme() {
  const savedTheme = SafeStorage.getItem(THEME_KEY) || 'light';
  StudentState.theme = savedTheme;
  applyStudentTheme(savedTheme);
}

function toggleStudentTheme() {
  const newTheme = StudentState.theme === 'light' ? 'dark' : 'light';
  StudentState.theme = newTheme;
  SafeStorage.setItem(THEME_KEY, newTheme);
  applyStudentTheme(newTheme);
}

function applyStudentTheme(theme) {
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

function loadStudentData() {
  try {
    const saved = SafeStorage.getItem(STUDENT_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.profile) StudentState.profile = Object.assign(StudentState.profile, parsed.profile);
      if (parsed.answers) StudentState.answers = parsed.answers;
      if (parsed.evaluations) StudentState.evaluations = parsed.evaluations;
    }
  } catch (e) {
    console.error('Failed to load student progress', e);
  }

  // Restore input fields
  const nameInp = document.getElementById('input-student-name');
  const classInp = document.getElementById('input-student-class');
  const schoolInp = document.getElementById('input-student-school');
  const teacherInp = document.getElementById('input-student-teacher');
  if (nameInp && StudentState.profile.name) nameInp.value = StudentState.profile.name;
  if (classInp && StudentState.profile.class) classInp.value = StudentState.profile.class;
  if (schoolInp && StudentState.profile.school) schoolInp.value = StudentState.profile.school;
  if (teacherInp && StudentState.profile.teacher) teacherInp.value = StudentState.profile.teacher;
}

function saveStudentData() {
  try {
    const payload = {
      profile: StudentState.profile,
      answers: StudentState.answers,
      evaluations: StudentState.evaluations
    };
    SafeStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.error('Failed to save student progress', e);
  }
}

function saveStudentProfile() {
  const nameInp = document.getElementById('input-student-name');
  const classInp = document.getElementById('input-student-class');
  const schoolInp = document.getElementById('input-student-school');
  const teacherInp = document.getElementById('input-student-teacher');
  if (nameInp) StudentState.profile.name = nameInp.value.trim();
  if (classInp) StudentState.profile.class = classInp.value.trim();
  if (schoolInp) StudentState.profile.school = schoolInp.value.trim();
  if (teacherInp) StudentState.profile.teacher = teacherInp.value.trim();
  saveStudentData();
  updateDashboardStats();
}

function showStudentToast(message, type = 'info') {
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
// AUDIO SYNTHESIS & TTS HELPERS
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
    showStudentToast('Web Speech Audio is not supported in this browser.', 'error');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
  showStudentToast('🔊 Playing audio reading...', 'info');
}

function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    showStudentToast('⏹ Audio stopped.', 'info');
  }
}

function speakWord(word) {
  speakText(word, 'en-US');
}

// ==========================================
// VIEW MANAGEMENT & ROUTING
// ==========================================
function setStudentView(viewName) {
  StudentState.currentView = viewName;
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  
  const target = document.getElementById(`view-${viewName}`);
  if (target) target.classList.add('active');

  // Update top nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewName);
  });

  // Update bottom nav
  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewName);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (viewName === 'dashboard') {
    renderStudentDashboard();
  } else if (viewName === 'student_workspace') {
    renderStudentWorkspace();
  } else if (viewName === 'vocab_lab') {
    renderStudentVocabLab();
  } else if (viewName === 'tka_strategy') {
    renderStudentTKAStrategy();
  } else if (viewName === 'worksheet_summary') {
    renderStudentWorksheetSummary();
  }
}

function renderStudentApp() {
  setStudentView(StudentState.currentView);
}

// ==========================================
// MODUL 1: DASHBOARD
// ==========================================
function renderStudentDashboard() {
  updateDashboardStats();
  renderStudentTextCards();
}

function updateDashboardStats() {
  const total = TKA_DATA.questions.length;
  let answeredCount = 0;
  let reasonedCount = 0;

  TKA_DATA.questions.forEach(q => {
    const rec = StudentState.answers[q.id];
    if (rec && rec.answer !== undefined && rec.answer !== null) {
      answeredCount++;
      if (rec.reason && rec.reason.trim().length > 0) reasonedCount++;
    }
  });

  const progressPct = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

  const statAns = document.getElementById('student-stat-answered');
  const statRea = document.getElementById('student-stat-reasoned');
  const statPct = document.getElementById('student-stat-progress');

  if (statAns) statAns.textContent = `${answeredCount}/${total}`;
  if (statRea) statRea.textContent = `${reasonedCount}/${total}`;
  if (statPct) statPct.textContent = `${progressPct}%`;
}

function renderStudentTextCards() {
  const container = document.getElementById('student-dashboard-cards');
  if (!container) return;

  let html = '';
  TKA_DATA.texts.forEach(text => {
    const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
    let answered = 0;
    textQuestions.forEach(q => {
      if (StudentState.answers[q.id] && StudentState.answers[q.id].answer !== null) answered++;
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

        <button class="btn btn-primary btn-sm" onclick="openStudentWorkspace(${text.id})" style="width: 100%; margin-top: 8px;">
          ✍️ Open Worksheet →
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ==========================================
// MODUL 2: WORKSHEET & STUDENT REASONING
// ==========================================
function openStudentWorkspace(textId, qIndex = 0) {
  StudentState.selectedTextId = textId;
  StudentState.currentQuestionIndex = qIndex;
  setStudentView('student_workspace');
}

function renderStudentWorkspace() {
  const text = TKA_DATA.texts.find(t => t.id === StudentState.selectedTextId) || TKA_DATA.texts[0];
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);

  if (StudentState.currentQuestionIndex >= textQuestions.length) {
    StudentState.currentQuestionIndex = 0;
  }

  const titleEl = document.getElementById('student-ws-title');
  if (titleEl) titleEl.textContent = `${text.number}: ${text.title}`;

  renderStudentReadingPassage(text);
  renderStudentQuestionPills(textQuestions);
  renderStudentQuestionCanvas(textQuestions[StudentState.currentQuestionIndex]);
  renderPeekPassageContent(text);
  updateMobileViewVisibility();
}

function renderStudentReadingPassage(text) {
  const readingTitle = document.getElementById('student-reading-title');
  const readingCite = document.getElementById('student-reading-citation');
  const readingContent = document.getElementById('student-reading-content');

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

  applyStudentReadingFontStyles();
}

function isAnswerFilled(ans) {
  if (ans === null || ans === undefined) return false;
  if (Array.isArray(ans)) return ans.length > 0;
  if (typeof ans === 'object') return Object.keys(ans).length > 0;
  return String(ans).trim().length > 0;
}

function renderStudentQuestionPills(textQuestions) {
  const container = document.getElementById('student-practice-q-nav');
  if (!container) return;

  let html = '';
  textQuestions.forEach((q, idx) => {
    const isActive = idx === StudentState.currentQuestionIndex;
    const isAnswered = StudentState.answers[q.id] && isAnswerFilled(StudentState.answers[q.id].answer);
    
    let classes = 'q-pill';
    if (isActive) classes += ' active';
    if (isAnswered) classes += ' answered';

    html += `
      <button class="${classes}" onclick="selectStudentQuestion(${idx})">
        ${q.number}
      </button>
    `;
  });

  container.innerHTML = html;
}

function selectStudentQuestion(idx) {
  StudentState.currentQuestionIndex = idx;
  const text = TKA_DATA.texts.find(t => t.id === StudentState.selectedTextId);
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
  renderStudentQuestionPills(textQuestions);
  renderStudentQuestionCanvas(textQuestions[idx]);
  
  if (window.innerWidth <= 900) {
    setMobileViewTab('quiz');
  }
}

function renderStudentQuestionCanvas(q) {
  const container = document.getElementById('student-practice-canvas');
  if (!container || !q) return;

  const currentRecord = StudentState.answers[q.id] || { answer: null, reason: '' };
  const textQuestions = TKA_DATA.questions.filter(item => item.textId === q.textId);
  const currentIdx = textQuestions.findIndex(item => item.id === q.id);

  let formatHtml = '';

  // 1. Multiple Choice
  if (q.format === 'multiple_choice') {
    formatHtml = `
      <div class="options-list">
        ${q.options.map(opt => {
          const isSelected = currentRecord.answer === opt.key;
          return `
            <div class="option-card ${isSelected ? 'selected' : ''}" onclick="handleStudentAnswer(${q.id}, '${opt.key}')">
              <div class="opt-radio-circle">${isSelected ? '✓' : opt.key}</div>
              <div class="opt-text"><strong>(${opt.key})</strong> ${opt.text}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
  // 2. Multi-Select (MCMA)
  else if (q.format === 'multi_select') {
    const selectedArr = Array.isArray(currentRecord.answer) ? currentRecord.answer : [];
    formatHtml = `
      <p style="font-size: 0.88rem; color: var(--accent-amber); font-weight: 700; margin-bottom: 12px;">
        💡 Complex Multiple-Select: Check all correct statements (more than one answer).
      </p>
      <div class="options-list">
        ${q.options.map(opt => {
          const isChecked = selectedArr.includes(opt.key);
          return `
            <div class="option-card ${isChecked ? 'selected' : ''}" onclick="handleMultiSelectToggle(${q.id}, '${opt.key}')">
              <div class="opt-checkbox-box">${isChecked ? '✓' : ''}</div>
              <div class="opt-text">${opt.text}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
  // 3. True / False Matrix
  else if (q.format === 'true_false') {
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
                    <input type="radio" name="tf_${q.id}_${st.id}" value="T" ${val === 'T' ? 'checked' : ''} onchange="handleTrueFalseAnswer(${q.id}, '${st.id}', 'T')">
                    <span>T</span>
                  </label>
                </td>
                <td style="text-align: center;">
                  <label class="table-choice-label">
                    <input type="radio" name="tf_${q.id}_${st.id}" value="F" ${val === 'F' ? 'checked' : ''} onchange="handleTrueFalseAnswer(${q.id}, '${st.id}', 'F')">
                    <span>F</span>
                  </label>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }
  // 4. Categorization Table
  else if (q.format === 'categorization') {
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
                      <input type="radio" name="cat_${q.id}_${item.id}" value="${cat}" ${currentSelected === cat ? 'checked' : ''} onchange="handleCategorizationAnswer(${q.id}, '${item.id}', '${cat}')">
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

    <!-- Mandatory Reasoning Box -->
    <div class="reasoning-box-wrapper">
      <div class="reasoning-header">
        <div class="reasoning-title">
          <span>✍️ Why did you choose this answer? (Reasoning & Text Evidence)</span>
        </div>
        <div class="reasoning-char-count" id="reason-char-count-${q.id}">${charCount} characters</div>
      </div>
      <div class="reasoning-subtext">
        Type your paragraph citation evidence (e.g., <em>"Paragraph 2, Line 3"</em>) or your logical rationale for choosing the answer above.
      </div>
      <textarea 
        class="student-reason-textarea" 
        placeholder="Write your textual evidence or critical thinking rationale here..." 
        oninput="handleReasonInput(${q.id}, this.value)">${escapeHtml(currentRecord.reason || '')}</textarea>
    </div>

    <!-- Navigation Buttons -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border-color);">
      <button class="btn btn-secondary btn-sm" ${currentIdx === 0 ? 'disabled style="opacity:0.4; pointer-events:none;"' : ''} onclick="selectStudentQuestion(${currentIdx - 1})">
        ← Previous Question
      </button>
      
      <div style="display: flex; gap: 8px;">
        ${currentIdx === textQuestions.length - 1 ? `
          <button class="btn btn-success btn-sm" onclick="setStudentView('worksheet_summary')">
            📋 Finish & Check Results →
          </button>
        ` : `
          <button class="btn btn-primary btn-sm" onclick="selectStudentQuestion(${currentIdx + 1})">
            Next Question →
          </button>
        `}
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// ------------------------------------------
// ANSWER HANDLERS
// ------------------------------------------
function ensureAnswerRecord(qId) {
  if (!StudentState.answers[qId]) {
    StudentState.answers[qId] = { answer: null, reason: '', timestamp: Date.now() };
  }
}

function handleStudentAnswer(qId, key) {
  ensureAnswerRecord(qId);
  StudentState.answers[qId].answer = key;
  StudentState.answers[qId].timestamp = Date.now();
  saveStudentData();
  
  const text = TKA_DATA.texts.find(t => t.id === StudentState.selectedTextId);
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
  renderStudentQuestionPills(textQuestions);
  renderStudentQuestionCanvas(textQuestions[StudentState.currentQuestionIndex]);
  showStudentToast(`Saved answer for Question #${textQuestions[StudentState.currentQuestionIndex].number}.`, 'info');
}

function handleMultiSelectToggle(qId, key) {
  ensureAnswerRecord(qId);
  let currentArr = Array.isArray(StudentState.answers[qId].answer) ? [...StudentState.answers[qId].answer] : [];
  if (currentArr.includes(key)) {
    currentArr = currentArr.filter(item => item !== key);
  } else {
    currentArr.push(key);
  }
  StudentState.answers[qId].answer = currentArr.sort();
  StudentState.answers[qId].timestamp = Date.now();
  saveStudentData();

  const text = TKA_DATA.texts.find(t => t.id === StudentState.selectedTextId);
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
  renderStudentQuestionPills(textQuestions);
  renderStudentQuestionCanvas(textQuestions[StudentState.currentQuestionIndex]);
}

function handleTrueFalseAnswer(qId, stmtId, val) {
  ensureAnswerRecord(qId);
  const currentObj = StudentState.answers[qId].answer && typeof StudentState.answers[qId].answer === 'object' && !Array.isArray(StudentState.answers[qId].answer) ? { ...StudentState.answers[qId].answer } : {};
  currentObj[stmtId] = val;
  StudentState.answers[qId].answer = currentObj;
  StudentState.answers[qId].timestamp = Date.now();
  saveStudentData();

  const text = TKA_DATA.texts.find(t => t.id === StudentState.selectedTextId);
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
  renderStudentQuestionPills(textQuestions);
}

function handleCategorizationAnswer(qId, itemId, val) {
  ensureAnswerRecord(qId);
  const currentObj = StudentState.answers[qId].answer && typeof StudentState.answers[qId].answer === 'object' && !Array.isArray(StudentState.answers[qId].answer) ? { ...StudentState.answers[qId].answer } : {};
  currentObj[itemId] = val;
  StudentState.answers[qId].answer = currentObj;
  StudentState.answers[qId].timestamp = Date.now();
  saveStudentData();

  const text = TKA_DATA.texts.find(t => t.id === StudentState.selectedTextId);
  const textQuestions = TKA_DATA.questions.filter(q => q.textId === text.id);
  renderStudentQuestionPills(textQuestions);
}

function handleReasonInput(qId, val) {
  ensureAnswerRecord(qId);
  StudentState.answers[qId].reason = val;
  StudentState.answers[qId].timestamp = Date.now();
  saveStudentData();

  const countEl = document.getElementById(`reason-char-count-${qId}`);
  if (countEl) countEl.textContent = `${val.length} characters`;
}

// ------------------------------------------
// MOBILE SWITCHER & PEEK BOTTOM SHEET
// ------------------------------------------
function setMobileViewTab(tab) {
  StudentState.mobileActiveTab = tab;
  updateMobileViewVisibility();
}

function updateMobileViewVisibility() {
  const btnRead = document.getElementById('btn-mobile-read');
  const btnQuiz = document.getElementById('btn-mobile-quiz');
  const panelRead = document.getElementById('student-reading-panel');
  const panelQuiz = document.getElementById('student-practice-panel');

  if (btnRead && btnQuiz && panelRead && panelQuiz) {
    if (window.innerWidth <= 900) {
      if (StudentState.mobileActiveTab === 'read') {
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

window.addEventListener('resize', updateMobileViewVisibility);

function openPeekModal() {
  const overlay = document.getElementById('peek-sheet-overlay');
  if (overlay) overlay.classList.add('active');
}

function closePeekModal() {
  const overlay = document.getElementById('peek-sheet-overlay');
  if (overlay) overlay.classList.remove('active');
}

function renderPeekPassageContent(text) {
  const titleEl = document.getElementById('peek-sheet-title');
  const bodyEl = document.getElementById('peek-sheet-body');
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
// TYPOGRAPHY CONTROLS
// ------------------------------------------
function changeStudentFontSize(delta) {
  if (delta === 0) StudentState.fontSizeLevel = 0;
  else StudentState.fontSizeLevel = Math.max(-1, Math.min(2, StudentState.fontSizeLevel + delta));
  applyStudentReadingFontStyles();
  showStudentToast('Font size updated.', 'info');
}

function toggleStudentFontFamily() {
  StudentState.fontFamily = StudentState.fontFamily === 'serif' ? 'sans' : 'serif';
  const label = document.getElementById('student-font-label');
  if (label) label.textContent = StudentState.fontFamily === 'serif' ? 'Serif' : 'Sans-Serif';
  applyStudentReadingFontStyles();
}

function applyStudentReadingFontStyles() {
  const sizeMap = { '-1': '1.02rem', '0': '1.18rem', '1': '1.32rem', '2': '1.48rem' };
  const currentSize = sizeMap[StudentState.fontSizeLevel.toString()] || '1.18rem';
  const currentFont = StudentState.fontFamily === 'serif' ? 'var(--font-serif)' : 'var(--font-sans)';

  document.querySelectorAll('#student-reading-content .reading-paragraph').forEach(p => {
    p.style.fontSize = currentSize;
    p.style.fontFamily = currentFont;
  });
}

// ==========================================
// MODUL 3: VOCABULARY / CONCEPT LAB (4 MODES)
// ==========================================
function renderStudentVocabLab() {
  const container = document.getElementById('student-vocab-content-area');
  if (!container) return;

  let vocabList = [];
  if (StudentState.vocabFilter === 'all') {
    TKA_DATA.texts.forEach(t => {
      t.vocabulary.forEach(v => vocabList.push({ ...v, textNumber: t.number }));
    });
  } else {
    const text = TKA_DATA.texts.find(t => t.id === Number(StudentState.vocabFilter));
    if (text) vocabList = text.vocabulary.map(v => ({ ...v, textNumber: text.number }));
  }

  // Filter pills highlight
  document.querySelectorAll('.vocab-filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.textfilter === String(StudentState.vocabFilter));
  });

  // Activity buttons highlight
  document.querySelectorAll('.vocab-mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === StudentState.vocabActivity);
  });

  if (StudentState.vocabActivity === 'flipcard') {
    renderStudentVocabFlipcards(vocabList, container);
  } else if (StudentState.vocabActivity === 'matching') {
    renderStudentVocabMatching(vocabList, container);
  } else if (StudentState.vocabActivity === 'context') {
    renderStudentVocabContextQuiz(vocabList, container);
  } else if (StudentState.vocabActivity === 'list') {
    renderStudentVocabTable(vocabList, container);
  }
}

function filterStudentVocab(filterVal) {
  StudentState.vocabFilter = filterVal;
  renderStudentVocabLab();
}

function setStudentVocabActivity(activity) {
  StudentState.vocabActivity = activity;
  renderStudentVocabLab();
}

// 1. 3D Flipcards
function renderStudentVocabFlipcards(vocabList, container) {
  let cardsHtml = '<div class="flip-cards-grid">';
  vocabList.forEach((v, idx) => {
    cardsHtml += `
      <div class="flip-card-wrapper">
        <div class="flip-card-inner" id="st-flip-card-${idx}" onclick="this.classList.toggle('flipped')">
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

// 2. Match Words Game
function renderStudentVocabMatching(vocabList, container) {
  const vocabSample = [...vocabList].sort(() => Math.random() - 0.5).slice(0, 6);
  const shuffledMeanings = [...vocabSample].sort(() => Math.random() - 0.5);

  let html = `
    <div style="background: var(--bg-card); padding: 26px; border-radius: 14px; border: 1px solid var(--border-color); margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <h3 style="font-size: 1.2rem; color: var(--text-main); font-weight: 800;">🧩 Activity 2 — Match Words & Meanings</h3>
        <span class="badge badge-green" id="match-score-badge">0 / ${vocabSample.length} Matched</span>
      </div>
      <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 22px;">Select an English word in the left column, then pair it with its correct meaning in the right column!</p>
      
      <div class="matching-game-grid">
        <div class="match-column" id="st-match-col-left">
          ${vocabSample.map(v => `
            <div class="match-item" data-word="${v.word}" onclick="handleStudentMatchSelect('left', '${v.word}')">
              ${v.word} <span style="font-size: 0.8rem; color: var(--text-muted);">(${v.pos})</span>
            </div>
          `).join('')}
        </div>
        <div class="match-column" id="st-match-col-right">
          ${shuffledMeanings.map(v => `
            <div class="match-item" data-word="${v.word}" onclick="handleStudentMatchSelect('right', '${v.word}')">
              ${v.meaning}
            </div>
          `).join('')}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: right;">
        <button class="btn btn-secondary btn-sm" onclick="renderStudentVocabMatching(vocabList, container)">🔄 Shuffle / Play Again</button>
      </div>
    </div>
  `;
  container.innerHTML = html;
  StudentState.matchingState = { selectedLeft: null, selectedRight: null, matchedPairs: [] };
}

function handleStudentMatchSelect(col, word) {
  if (StudentState.matchingState.matchedPairs.includes(word)) return;

  if (col === 'left') {
    StudentState.matchingState.selectedLeft = word;
    document.querySelectorAll('#st-match-col-left .match-item').forEach(el => {
      el.classList.toggle('selected', el.dataset.word === word && !StudentState.matchingState.matchedPairs.includes(word));
    });
  } else {
    StudentState.matchingState.selectedRight = word;
    document.querySelectorAll('#st-match-col-right .match-item').forEach(el => {
      el.classList.toggle('selected', el.dataset.word === word && !StudentState.matchingState.matchedPairs.includes(word));
    });
  }

  if (StudentState.matchingState.selectedLeft && StudentState.matchingState.selectedRight) {
    if (StudentState.matchingState.selectedLeft === StudentState.matchingState.selectedRight) {
      const matched = StudentState.matchingState.selectedLeft;
      StudentState.matchingState.matchedPairs.push(matched);
      playTone('success');
      
      const leftEl = document.querySelector(`#st-match-col-left [data-word="${matched}"]`);
      const rightEl = document.querySelector(`#st-match-col-right [data-word="${matched}"]`);
      if (leftEl) { leftEl.classList.remove('selected'); leftEl.classList.add('matched'); leftEl.innerHTML += ' ✓'; }
      if (rightEl) { rightEl.classList.remove('selected'); rightEl.classList.add('matched'); rightEl.innerHTML += ' ✓'; }

      const scoreBadge = document.getElementById('match-score-badge');
      if (scoreBadge) scoreBadge.textContent = `${StudentState.matchingState.matchedPairs.length} / 6 Matched`;

      showStudentToast(`Correct pair: "${matched}"!`, 'success');
      StudentState.matchingState.selectedLeft = null;
      StudentState.matchingState.selectedRight = null;
    } else {
      playTone('error');
      showStudentToast('Not quite right. Try again!', 'error');
      setTimeout(() => {
        document.querySelectorAll('.match-item.selected').forEach(el => el.classList.remove('selected'));
        StudentState.matchingState.selectedLeft = null;
        StudentState.matchingState.selectedRight = null;
      }, 450);
    }
  }
}

// 3. Context Challenge Quiz
function renderStudentVocabContextQuiz(vocabList, container) {
  const currentIdx = StudentState.contextQuizState.currentIndex % vocabList.length;
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

      <div class="options-list" id="st-context-options-list">
        ${options.map(opt => `
          <div class="option-card" onclick="checkStudentContextAnswer('${escapeHtml(opt)}', '${escapeHtml(currentV.meaning)}', this)">
            <div class="opt-radio-circle"></div>
            <div class="opt-text">${opt}</div>
          </div>
        `).join('')}
      </div>

      <div id="st-context-feedback-box" style="display: none; margin-top: 20px;"></div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border-color);">
        <button class="btn btn-outline btn-sm" onclick="speakWord('${currentV.word}')">🔊 Listen Word</button>
        <button class="btn btn-primary" id="btn-st-next-context" style="display: none;" onclick="nextStudentContextQuiz(${vocabList.length})">Next Word →</button>
      </div>
    </div>
  `;
  container.innerHTML = html;
}

function checkStudentContextAnswer(chosen, correct, el) {
  if (StudentState.contextQuizState.answered) return;
  StudentState.contextQuizState.answered = true;

  const isRight = chosen === correct;
  if (isRight) playTone('success');
  else playTone('error');

  const feedbackBox = document.getElementById('st-context-feedback-box');
  const nextBtn = document.getElementById('btn-st-next-context');

  document.querySelectorAll('#st-context-options-list .option-card').forEach(card => {
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

function nextStudentContextQuiz(total) {
  StudentState.contextQuizState.answered = false;
  StudentState.contextQuizState.currentIndex = (StudentState.contextQuizState.currentIndex + 1) % total;
  renderStudentVocabLab();
}

// 4. Word Master Table with Live Search
function renderStudentVocabTable(vocabList, container) {
  const q = (StudentState.vocabSearchQuery || '').toLowerCase();
  const filtered = vocabList.filter(v => 
    v.word.toLowerCase().includes(q) || 
    v.meaning.toLowerCase().includes(q) || 
    v.context.toLowerCase().includes(q)
  );

  let html = `
    <div>
      <input type="text" class="search-input-box" placeholder="🔍 Search word, meaning, or sentence (Live Search)..." value="${escapeHtml(StudentState.vocabSearchQuery)}" oninput="handleVocabSearch(this.value)">
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

function handleVocabSearch(query) {
  StudentState.vocabSearchQuery = query;
  const container = document.getElementById('student-vocab-content-area');
  let vocabList = [];
  if (StudentState.vocabFilter === 'all') {
    TKA_DATA.texts.forEach(t => {
      t.vocabulary.forEach(v => vocabList.push({ ...v, textNumber: t.number }));
    });
  } else {
    const text = TKA_DATA.texts.find(t => t.id === Number(StudentState.vocabFilter));
    if (text) vocabList = text.vocabulary.map(v => ({ ...v, textNumber: text.number }));
  }
  renderStudentVocabTable(vocabList, container);
}

// ==========================================
// MODUL 4: STRATEGY GUIDE (4 PILLARS ACCORDION)
// ==========================================
function renderStudentTKAStrategy() {
  const container = document.getElementById('student-strategy-cards-container');
  if (!container) return;

  let html = '';
  TKA_DATA.strategies.forEach((strat) => {
    html += `
      <div class="strategy-card-accordion" id="strat-acc-${strat.id}">
        <div class="strategy-accordion-header" onclick="toggleStrategyAccordion('${strat.id}')">
          <div class="strategy-accordion-title">${strat.name}</div>
          <span class="badge badge-blue">4 HOTS PILLARS ▾</span>
        </div>
        <div class="strategy-accordion-body">
          ${strat.quickQuestion ? `<div style="font-weight: 700; color: var(--academic-blue); margin-bottom: 12px;">❓ Key Question: ${strat.quickQuestion}</div>` : ''}
          
          <div class="strategy-pillars-grid">
            <!-- Pillar 1 -->
            <div class="pillar-box pillar-1">
              <div class="pillar-title">⚡ Pilar 1: Formula Emas</div>
              <div class="pillar-content">
                <strong>${strat.formula || 'Konsep Dasar'}</strong>
              </div>
            </div>

            <!-- Pillar 2 -->
            <div class="pillar-box pillar-2">
              <div class="pillar-title">📌 Pillar 2: Question Stems</div>
              <div class="pillar-content">
                <ul style="padding-left: 18px; margin: 0;">
                  ${(strat.questionCharacteristics || [strat.quickQuestion || 'Standard TKA Question']).map(q => `<li>${q}</li>`).join('')}
                </ul>
              </div>
            </div>

            <!-- Pillar 3 -->
            <div class="pillar-box pillar-3">
              <div class="pillar-title">📋 Pilar 3: Langkah Sistematis Menjawab</div>
              <div class="pillar-content">
                <ol style="padding-left: 18px; margin: 0;">
                  ${strat.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
              </div>
            </div>

            <!-- Pillar 4 -->
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

function toggleStrategyAccordion(id) {
  const el = document.getElementById(`strat-acc-${id}`);
  if (el) el.classList.toggle('open');
}

// ==========================================
// MODUL 5: ANSWER SHEET & ON-DEMAND CHECK
// ==========================================
function calculateScore() {
  let correctCount = 0;
  let incorrectCount = 0;
  let answeredCount = 0;
  let reasonedCount = 0;
  const total = TKA_DATA.questions.length;

  TKA_DATA.questions.forEach(q => {
    const rec = StudentState.answers[q.id];
    if (rec && isAnswerFilled(rec.answer)) {
      answeredCount++;
      if (rec.reason && rec.reason.trim().length > 0) reasonedCount++;
    }

    const evalStatus = StudentState.evaluations[q.id];
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

function setManualEvaluation(qId, status) {
  if (StudentState.evaluations[qId] === status) {
    // Toggle off if clicked again
    delete StudentState.evaluations[qId];
    showStudentToast(`Evaluation for Question #${qId} cleared`, 'info');
  } else {
    StudentState.evaluations[qId] = status;
    if (status === 'correct') {
      playTone('success');
      showStudentToast(`Question #${qId} marked as: ✅ Correct`, 'success');
    } else {
      playTone('error');
      showStudentToast(`Question #${qId} marked as: ❌ Incorrect`, 'info');
    }
  }
  saveStudentData();
  renderStudentWorksheetSummary();
}

function renderStudentWorksheetSummary() {
  const container = document.getElementById('student-summary-container');
  if (!container) return;

  const scoreData = calculateScore();
  const studentName = StudentState.profile.name || '(Not Filled)';
  const studentClass = StudentState.profile.class || '(Not Filled)';
  const studentSchool = StudentState.profile.school || 'SMA Plus PGRI Cibinong';
  const teacher = StudentState.profile.teacher || 'Muhammad Falahaen Jiddan, M.Pd. Gr.';

  let html = `
    <div class="summary-meta-header">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--border-color); padding-bottom: 20px; margin-bottom: 22px; flex-wrap: wrap; gap: 14px;">
        <div>
          <span class="badge badge-green" style="margin-bottom: 8px;">STUDENT WORKSHEET & PERFORMANCE REPORT</span>
          <h2 style="font-size: 1.8rem; font-weight: 900; color: var(--text-main); margin-bottom: 4px;">LATIHAN TKA BAHASA INGGRIS SMA 2026 NARRATIVE TEXT</h2>
          <p style="font-size: 0.95rem; color: var(--text-muted);">25 TKA Practice Questions, Student Reasoning, Self-Evaluation & Performance Report</p>
        </div>
        <div class="action-toolbar">
          <button class="btn btn-success" onclick="sendSummaryToWhatsApp()">📲 Send to WhatsApp</button>
          <button class="btn btn-primary" onclick="window.print()">🖨️ Print / Save PDF</button>
          <button class="btn btn-secondary" onclick="copySummaryToClipboard()">📋 Copy Summary</button>
          <button class="btn btn-danger" onclick="openStudentResetModal()">🔄 Reset Worksheet</button>
        </div>
      </div>

      <!-- Identity Grid -->
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

      <!-- Quick Stats -->
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

    <!-- Questions Items -->
    <div style="display: flex; flex-direction: column; gap: 16px;">
  `;

  TKA_DATA.questions.forEach(q => {
    const rec = StudentState.answers[q.id] || { answer: null, reason: '' };
    const isAnswered = rec.answer !== null && rec.answer !== undefined;
    const evalStatus = StudentState.evaluations[q.id]; // 'correct', 'incorrect', or undefined
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

        <!-- Student Answer Display -->
        <div style="background: var(--bg-card-alt); padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 10px; font-size: 0.95rem;">
          <div style="font-size: 0.8rem; font-weight: 800; color: var(--text-muted); margin-bottom: 4px;">STUDENT SELECTION:</div>
          <div>${formatAnswerString(q, rec.answer)}</div>
        </div>

        <!-- Student Reasoning Display -->
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
            <button class="eval-btn eval-btn-correct ${evalStatus === 'correct' ? 'active' : ''}" onclick="setManualEvaluation(${q.id}, 'correct')">
              ✅ Correct
            </button>
            <button class="eval-btn eval-btn-incorrect ${evalStatus === 'incorrect' ? 'active' : ''}" onclick="setManualEvaluation(${q.id}, 'incorrect')">
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

function sendSummaryToWhatsApp() {
  const name = StudentState.profile.name || 'Student';
  const grade = StudentState.profile.class || '-';
  const school = StudentState.profile.school || 'SMA Plus PGRI Cibinong';
  const teacher = StudentState.profile.teacher || 'Muhammad Falahaen Jiddan, M.Pd. Gr.';
  const scoreData = calculateScore();

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
    const rec = StudentState.answers[q.id] || { answer: null, reason: '' };
    const evalStatus = StudentState.evaluations[q.id];
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

function copySummaryToClipboard() {
  const name = StudentState.profile.name || 'Student';
  const grade = StudentState.profile.class || '-';
  const school = StudentState.profile.school || 'SMA Plus PGRI Cibinong';
  const teacher = StudentState.profile.teacher || 'Muhammad Falahaen Jiddan, M.Pd. Gr.';
  const scoreData = calculateScore();

  let text = `LATIHAN TKA BAHASA INGGRIS SMA 2026 NARRATIVE TEXT\n`;
  text += `Student Name: ${name}\nClass: ${grade}\nSchool: ${school}\nTeacher: ${teacher}\n`;
  text += `Self-Assessment Score (Correct): ${scoreData.correct}/${scoreData.total} (${scoreData.percentage}%)\n`;
  text += `Incorrect Answers: ${scoreData.incorrect}/${scoreData.total}\n`;
  text += `Pending Check / Unevaluated: ${scoreData.unevaluatedCount}/${scoreData.total}\n`;
  text += `Questions Answered: ${scoreData.answeredCount}/${scoreData.total}\n`;
  text += `Reasoning Provided: ${scoreData.reasonedCount}/${scoreData.total}\n\n`;
  text += `--- STUDENT ANSWER SHEET & SELF-ASSESSMENT REPORT ---\n\n`;

  TKA_DATA.questions.forEach(q => {
    const rec = StudentState.answers[q.id] || { answer: null, reason: '' };
    const evalStatus = StudentState.evaluations[q.id];
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
      showStudentToast('Summary copied to clipboard!', 'success');
    }).catch(() => {
      showStudentToast('Failed to copy automatically.', 'error');
    });
  } else {
    showStudentToast('Clipboard API not available.', 'error');
  }
}

// ------------------------------------------
// RESET MODAL
// ------------------------------------------
function openStudentResetModal() {
  const m = document.getElementById('student-reset-modal');
  if (m) m.classList.add('active');
}

function closeStudentModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('active');
}

function confirmStudentReset() {
  StudentState.answers = {};
  StudentState.evaluations = {};
  SafeStorage.removeItem(STUDENT_STORAGE_KEY);
  closeStudentModal('student-reset-modal');
  showStudentToast('Student worksheet has been reset.', 'info');
  setStudentView('dashboard');
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

function setupStudentEvents() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });
}

// Explicit Window Bindings
window.setStudentView = setStudentView;
window.toggleStudentTheme = toggleStudentTheme;
window.openStudentWorkspace = openStudentWorkspace;
window.selectStudentQuestion = selectStudentQuestion;
window.handleStudentAnswer = handleStudentAnswer;
window.handleMultiSelectToggle = handleMultiSelectToggle;
window.handleTrueFalseAnswer = handleTrueFalseAnswer;
window.handleCategorizationAnswer = handleCategorizationAnswer;
window.handleReasonInput = handleReasonInput;
window.changeStudentFontSize = changeStudentFontSize;
window.toggleStudentFontFamily = toggleStudentFontFamily;
window.setMobileViewTab = setMobileViewTab;
window.openPeekModal = openPeekModal;
window.closePeekModal = closePeekModal;
window.speakText = speakText;
window.stopSpeaking = stopSpeaking;
window.speakWord = speakWord;
window.filterStudentVocab = filterStudentVocab;
window.setStudentVocabActivity = setStudentVocabActivity;
window.handleStudentMatchSelect = handleStudentMatchSelect;
window.checkStudentContextAnswer = checkStudentContextAnswer;
window.nextStudentContextQuiz = nextStudentContextQuiz;
window.handleVocabSearch = handleVocabSearch;
window.openStudentResetModal = openStudentResetModal;
window.closeStudentModal = closeStudentModal;
window.confirmStudentReset = confirmStudentReset;
window.toggleStrategyAccordion = toggleStrategyAccordion;
window.setManualEvaluation = setManualEvaluation;
window.sendSummaryToWhatsApp = sendSummaryToWhatsApp;
window.copySummaryToClipboard = copySummaryToClipboard;
window.saveStudentProfile = saveStudentProfile;

// Guaranteed DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStudentApp);
} else {
  initStudentApp();
}
