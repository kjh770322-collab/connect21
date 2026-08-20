/**
 * 나의 탐구 프로젝트 - 초등 과학 탐구 과정 도우미
 * 해답을 주지 않고, 관찰·질문·증거 중심으로 안내합니다.
 */

const STORAGE_KEY = 'connect21-science-inquiry-v1';
const COPILOT_HINTS = {
  1: [
    '내가 고른 주제를 눈으로 관찰할 수 있는지 질문해 줘',
    '주제가 너무 넓은지 스스로 좁히는 질문을 해 줘',
    '초등학생이 안전하게 탐구할 수 있는지 점검 질문을 해 줘'
  ],
  2: [
    '내 질문이 실험으로 확인할 수 있는지 질문해 줘',
    '가설에 이유를 붙이도록 도와주는 질문만 해 줘',
    '바꿀 것과 잴 것을 나누는 힌트를 질문으로 줘'
  ],
  3: [
    '공정한 실험인지 점검하는 질문을 해 줘',
    '준비물과 순서에서 빠진 점을 질문으로 알려 줘',
    '안전 약속을 스스로 적게 질문해 줘'
  ],
  4: [
    '표의 숫자가 결론과 맞는지 묻는 질문을 해 줘',
    '가설과 달라도 괜찮은 이유를 쉽게 설명해 줘',
    '증거와 추측을 구별하는 질문을 해 줘'
  ],
  5: [
    '발표에 방법과 증거가 들어갔는지 질문해 줘',
    '친구가 따라 할 수 있게 빠진 정보를 질문으로 찾아 줘',
    '한 줄 메시지를 스스로 다듬는 질문을 해 줘'
  ],
  6: [
    '잘한 과학 습관을 찾도록 질문해 줘',
    '다음에 더 공정하게 할 점을 질문으로 이끌어 줘',
    '새로운 탐구 질문 씨앗을 스스로 떠올리게 도와줘'
  ]
};

const STEPS = [
  { n: 1, icon: '🔍', title: '탐구 주제 찾기', sub: '관찰하고 주제 고르기' },
  { n: 2, icon: '💡', title: '탐구 질문과 가설', sub: '확인할 질문 만들기' },
  { n: 3, icon: '🧪', title: '실험 계획하기', sub: '공정한 실험 설계' },
  { n: 4, icon: '📊', title: '결과 정리 및 결론', sub: '증거로 말하기' },
  { n: 5, icon: '🖥️', title: '탐구 발표 준비', sub: '과정 나누기' },
  { n: 6, icon: '💗', title: '성찰하기', sub: '다음 탐구 다짐' }
];

const defaultState = () => ({
  currentStep: 1,
  interests: [],
  topic: '',
  topicReason: '',
  question: '',
  independentVar: '',
  dependentVar: '',
  hypothesisIf: '',
  hypothesisThen: '',
  hypothesisBecause: '',
  controlledVars: '',
  materials: [],
  procedure: [],
  repeats: '',
  safety: '',
  results: [
    { condition: '', t1: '', t2: '', t3: '', note: '' },
    { condition: '', t1: '', t2: '', t3: '', note: '' }
  ],
  observation: '',
  hypothesisCheck: '',
  evidence: '',
  conclusion: '',
  presentTitle: '',
  presentHook: '',
  presentMethod: '',
  presentResult: '',
  presentMessage: '',
  reflectGood: '',
  reflectHard: '',
  reflectNext: '',
  reflectNewQ: ''
});

let state = defaultState();

document.addEventListener('DOMContentLoaded', () => {
  loadProject();
  bindFields();
  renderAll();
  goToStep(state.currentStep, false);
  document.getElementById('copilot-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'copilot-modal') closeCopilot();
  });
});

function bindFields() {
  document.querySelectorAll('[data-field]').forEach((el) => {
    const field = el.getAttribute('data-field');
    el.addEventListener('input', () => {
      state[field] = el.value;
      if (field.startsWith('present')) renderPresentPreview();
      if (field === 'topic') updateCertificate();
      updateProgress();
    });
  });

  const interest = document.getElementById('interest-input');
  if (interest) {
    interest.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addInterest();
      }
    });
  }

  ['material-input', 'procedure-input'].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addListItem(id === 'material-input' ? 'materials' : 'procedure');
      }
    });
  });

  document.querySelectorAll('#hypothesis-check .choice-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.hypothesisCheck = btn.dataset.value;
      renderChoices();
      saveProject(false);
    });
  });
}

function hydrateFields() {
  document.querySelectorAll('[data-field]').forEach((el) => {
    const field = el.getAttribute('data-field');
    if (typeof state[field] === 'string') el.value = state[field];
  });
}

function renderAll() {
  renderNav();
  renderInterests();
  renderList('materials');
  renderList('procedure');
  renderResults();
  renderChoices();
  renderPresentPreview();
  hydrateFields();
  updateCertificate();
  updateProgress();
}

function renderNav() {
  const nav = document.getElementById('step-nav');
  if (!nav) return;
  nav.innerHTML = STEPS.map((s) => `
    <button class="step-btn ${s.n === state.currentStep ? 'active' : ''} ${isStepFilled(s.n) ? 'done' : ''}" type="button" onclick="goToStep(${s.n})">
      <span class="step-ico">${s.icon}</span>
      <span>
        <strong>${s.n}단계: ${s.title}</strong>
        <span>${s.sub}</span>
      </span>
    </button>
  `).join('');
}

function isStepFilled(n) {
  if (n === 1) return !!(state.topic && state.topicReason);
  if (n === 2) return !!(state.question && state.hypothesisThen);
  if (n === 3) return state.procedure.length > 0 && !!state.controlledVars;
  if (n === 4) return !!(state.observation && state.conclusion);
  if (n === 5) return !!(state.presentTitle && state.presentMessage);
  if (n === 6) return !!(state.reflectGood && state.reflectNext);
  return false;
}

function filledCount() {
  return STEPS.filter((s) => isStepFilled(s.n)).length;
}

function updateProgress() {
  const filled = filledCount();
  const percent = Math.max(17, Math.round((Math.max(filled, state.currentStep) / 6) * 100));
  const label = `진행률: ${percent}% · 현재 단계: ${state.currentStep}/6`;
  const top = document.getElementById('top-progress-label');
  const sidePct = document.getElementById('sidebar-percent');
  const bar = document.getElementById('sidebar-bar');
  const complete = document.getElementById('sidebar-complete');
  if (top) top.textContent = label;
  if (sidePct) sidePct.textContent = `${percent}%`;
  if (bar) bar.style.width = `${percent}%`;
  if (complete) complete.textContent = `${Math.max(filled, 1)}/6 단계 ${filled ? '작성' : '진행 중'}`;

  const prev = document.getElementById('btn-prev');
  const next = document.getElementById('btn-next');
  if (prev) prev.disabled = state.currentStep === 1;
  if (next) {
    next.disabled = state.currentStep === 6;
    next.textContent = state.currentStep === 6 ? '완료' : '다음';
  }
  renderNav();
}

function goToStep(n, save = true) {
  state.currentStep = Math.min(6, Math.max(1, n));
  document.querySelectorAll('.step-pane').forEach((pane) => {
    pane.classList.toggle('active', Number(pane.dataset.step) === state.currentStep);
  });
  updateProgress();
  renderCopilotHints();
  if (save) saveProject(false);
  const scroller = document.querySelector('.workspace-scroll');
  if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
}

function goNext() {
  if (state.currentStep < 6) goToStep(state.currentStep + 1);
}

function goPrev() {
  if (state.currentStep > 1) goToStep(state.currentStep - 1);
}

function addInterest() {
  const input = document.getElementById('interest-input');
  const value = (input?.value || '').trim();
  if (!value) return toast('궁금한 것을 한 줄 적어 주세요.');
  if (state.interests.includes(value)) return toast('이미 적은 관심사예요.');
  state.interests.push(value);
  input.value = '';
  renderInterests();
  saveProject(false);
}

function removeInterest(i) {
  state.interests.splice(i, 1);
  renderInterests();
  saveProject(false);
}

function renderInterests() {
  const box = document.getElementById('interest-chips');
  if (!box) return;
  if (!state.interests.length) {
    box.innerHTML = '';
    return;
  }
  box.innerHTML = state.interests.map((item, i) => `
    <span class="chip">${escapeHtml(item)} <button type="button" aria-label="삭제" onclick="removeInterest(${i})">×</button></span>
  `).join('');
}

function addListItem(key) {
  const inputId = key === 'materials' ? 'material-input' : 'procedure-input';
  const input = document.getElementById(inputId);
  const value = (input?.value || '').trim();
  if (!value) return toast('내용을 적고 추가해 주세요.');
  state[key].push(value);
  input.value = '';
  renderList(key);
  saveProject(false);
}

function removeListItem(key, i) {
  state[key].splice(i, 1);
  renderList(key);
  saveProject(false);
}

function renderList(key) {
  const id = key === 'materials' ? 'materials-list' : 'procedure-list';
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = state[key].map((item, i) => `
    <li><span>${escapeHtml(item)}</span><button type="button" onclick="removeListItem('${key}', ${i})">삭제</button></li>
  `).join('');
}

function addResultRow() {
  state.results.push({ condition: '', t1: '', t2: '', t3: '', note: '' });
  renderResults();
}

function removeResultRow(i) {
  if (state.results.length <= 1) return;
  state.results.splice(i, 1);
  renderResults();
  saveProject(false);
}

function updateResult(i, field, value) {
  state.results[i][field] = value;
  saveProject(false);
}

function renderResults() {
  const body = document.getElementById('result-body');
  if (!body) return;
  body.innerHTML = state.results.map((row, i) => `
    <tr>
      <td><input value="${escapeAttr(row.condition)}" placeholder="예: 물 50mL" oninput="updateResult(${i}, 'condition', this.value)"></td>
      <td><input value="${escapeAttr(row.t1)}" placeholder="측정값" oninput="updateResult(${i}, 't1', this.value)"></td>
      <td><input value="${escapeAttr(row.t2)}" placeholder="측정값" oninput="updateResult(${i}, 't2', this.value)"></td>
      <td><input value="${escapeAttr(row.t3)}" placeholder="측정값" oninput="updateResult(${i}, 't3', this.value)"></td>
      <td><input value="${escapeAttr(row.note)}" placeholder="본 것" oninput="updateResult(${i}, 'note', this.value)"></td>
      <td><button class="btn btn-ghost" type="button" onclick="removeResultRow(${i})">삭제</button></td>
    </tr>
  `).join('');
}

function renderChoices() {
  document.querySelectorAll('#hypothesis-check .choice-chip').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.value === state.hypothesisCheck);
  });
}

function updateCertificate() {
  const el = document.getElementById('certificate-text');
  if (!el) return;
  const topic = state.topic ? `「${state.topic}」` : '나의 주제';
  el.textContent = `${topic}를 탐구하며 주제부터 성찰까지 과정을 따라왔어요. 정답을 맞히는 것보다, 관찰하고 비교하고 이유를 묻는 일이 과학입니다.`;
}

function renderPresentPreview() {
  const box = document.getElementById('present-preview-body');
  if (!box) return;
  const lines = [
    state.presentTitle && `제목: ${state.presentTitle}`,
    state.presentHook && `궁금증: ${state.presentHook}`,
    state.presentMethod && `방법: ${state.presentMethod}`,
    state.presentResult && `결과: ${state.presentResult}`,
    state.presentMessage && `메시지: ${state.presentMessage}`
  ].filter(Boolean);
  box.textContent = lines.length ? lines.join('\n\n') : '아직 적은 내용이 없어요. 칸을 채우면 여기에 모여요.';
}

function openCopilotHelp(kind) {
  const prompt = buildCopilotPrompt(kind);
  copyHint(prompt);
  openCopilot();
}

function buildCopilotPrompt(kind) {
  const rule = '나는 초등학생이야. 정답, 실험 결과, 가설, 결론을 대신 적지 마. 쉬운 말로 질문만 해서 내가 스스로 생각하게 도와줘.';
  const interests = state.interests.length ? state.interests.join(', ') : '아직 적지 않음';

  if (kind === 'topic') {
    return `${rule} 내가 궁금한 것은: ${interests}. 관찰하거나 실험으로 알아볼 수 있는 탐구 질문을 함께 찾도록 도와줘.`;
  }
  if (kind === 1) {
    return `${rule} 내 탐구 주제는 "${state.topic || '아직 없음'}"이고, 고른 이유는 "${state.topicReason || '아직 없음'}"이야. 관심사는 ${interests}. 눈으로 볼 수 있는지, 너무 넓지 않은지, 안전한지 점검 질문을 해 줘.`;
  }
  if (kind === 2) {
    return `${rule} 탐구 질문은 "${state.question || '아직 없음'}"이고, 가설은 "만약 ${state.hypothesisIf} 그러면 ${state.hypothesisThen} 왜냐하면 ${state.hypothesisBecause}"야. 실험으로 확인할 수 있는지, 이유가 있는지 질문해 줘.`;
  }
  if (kind === 3) {
    return `${rule} 바꿀 것은 "${state.independentVar}", 잴 것은 "${state.dependentVar}", 같게 할 것은 "${state.controlledVars}", 순서는 "${state.procedure.join(' → ') || '아직 없음'}"이야. 공정한 실험인지, 안전이 빠지지 않았는지 질문해 줘.`;
  }
  if (kind === 4) {
    return `${rule} 내가 본 것은 "${state.observation || '아직 없음'}"이고, 결론은 "${state.conclusion || '아직 없음'}"이야. 증거가 "${state.evidence || '아직 없음'}". 결론이 표의 사실과 맞는지 질문해 줘.`;
  }
  if (kind === 5) {
    return `${rule} 발표 제목은 "${state.presentTitle || '아직 없음'}", 방법은 "${state.presentMethod || '아직 없음'}", 한 줄 메시지는 "${state.presentMessage || '아직 없음'}"이야. 친구들이 따라 할 수 있게 빠진 점을 질문으로 찾아 줘.`;
  }
  return `${rule} 잘한 점은 "${state.reflectGood || '아직 없음'}", 어려웠던 점은 "${state.reflectHard || '아직 없음'}", 다음에 할 점은 "${state.reflectNext || '아직 없음'}"이야. 더 공정하게 탐구하려면 무엇을 돌아보면 좋을지 질문해 줘.`;
}

function openCopilot() {
  const modal = document.getElementById('copilot-modal');
  modal.hidden = false;
  renderCopilotHints();
}

function closeCopilot() {
  document.getElementById('copilot-modal').hidden = true;
}

function renderCopilotHints() {
  const box = document.getElementById('copilot-hints');
  if (!box) return;
  const hints = COPILOT_HINTS[state.currentStep] || [];
  box.innerHTML = hints.map((h) => `<button class="hint-chip" type="button" onclick="copyHint(${JSON.stringify(h)})">${escapeHtml(h)}</button>`).join('');
}

function copyHint(text) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
  toast('도움 질문을 복사했어요. 코파일럿 창에 붙여 넣어 보세요.');
}

function saveProject(showToast) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (showToast) toast('탐구 일지를 저장했어요.');
}

function loadProject() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    state = { ...defaultState(), ...JSON.parse(raw) };
  } catch (e) {
    state = defaultState();
  }
}

function printProject() {
  window.print();
}

function toast(message) {
  const el = document.getElementById('toast');
  el.hidden = false;
  el.textContent = message;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { el.hidden = true; }, 2400);
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, '&#39;');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCopilot();
});
