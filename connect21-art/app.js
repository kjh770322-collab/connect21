/**
 * 아뜰리에 AI (Art Atelier AI) - Application Logic
 * Elementary School Art Appreciation & Expression 10-Step Agent Engine
 */

// 1. Masterpiece Dataset with Real Image & SVG Art Visuals
const MASTERPIECES = [
  {
    id: "gogh",
    title: "별이 빛나는 밤 (The Starry Night)",
    artist: "빈센트 반 고흐 (Vincent van Gogh)",
    year: "1889년",
    period: "후기 인상주의",
    reason: "꿈틀거리는 요동치는 선과 강렬한 보라/노랑 대비가 네 감성과 딱 맞아!",
    taste: ["B", "B", "B"],
    desc: "고흐가 생레미 요양원에서 밤하늘을 보며 그린 명화입니다. 소용돌이치는 불타는 듯한 밤하늘과 거대한 사이프러스 나무가 강렬한 마음의 회오리를 전해줍니다.",
    elements: "요동치는 곡선, 노랑과 파랑의 강한 명암 대비, 거친 물감 질감",
    img: "art image/1.png",
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0B132B"/>
      <!-- Moon & Stars -->
      <circle cx="330" cy="60" r="35" fill="#FFD166" opacity="0.9"/>
      <circle cx="330" cy="60" r="48" stroke="#FFE699" stroke-width="4" fill="none" opacity="0.5"/>
      <circle cx="80" cy="70" r="15" fill="#FFD166"/>
      <circle cx="200" cy="50" r="18" fill="#FFD166"/>
      <circle cx="260" cy="110" r="12" fill="#FFD166"/>
      <!-- Swirls -->
      <path d="M 20 100 Q 150 40 280 90 T 380 70" stroke="#3A86FF" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.7"/>
      <path d="M 40 120 Q 180 70 300 120 T 390 100" stroke="#8338EC" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.6"/>
      <!-- Village & Hills -->
      <path d="M 0 200 Q 100 160 200 210 T 400 190 L 400 300 L 0 300 Z" fill="#1C2541"/>
      <polygon points="120,240 135,210 150,240" fill="#3A86FF"/>
      <rect x="180" y="230" width="30" height="25" fill="#FFD166" opacity="0.8"/>
      <!-- Cypress Tree -->
      <path d="M 50 300 Q 30 180 45 90 Q 75 160 85 300 Z" fill="#0B090A"/>
      <path d="M 35 300 Q 15 190 35 110 Q 60 170 65 300 Z" fill="#161A1D"/>
    </svg>`
  },
  {
    id: "monet",
    title: "수련 연못과 일본식 다리 (Water Lilies)",
    artist: "클로드 모네 (Claude Monet)",
    year: "1899년",
    period: "인상주의",
    reason: "빛과 시간에 따라 살랑이는 몽환적인 자연의 색채를 좋아하는 너에게 추천해!",
    taste: ["A", "A", "A"],
    desc: "모네가 지베르니 정원의 연못을 붓으로 담아낸 명작입니다. 햇살이 수면에 반사되어 시시각각 변화하는 다채로운 초록, 보라, 핑크빛 물결이 장관을 이룹니다.",
    elements: "부드러운 빛의 조화, 빛깔의 반사, 유연한 수평 곡선",
    img: "art image/2.png",
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#2D6A4F"/>
      <!-- Water Reflections -->
      <path d="M 0 100 C 100 80 300 120 400 90 L 400 300 L 0 300 Z" fill="#40916C"/>
      <ellipse cx="100" cy="220" rx="40" ry="12" fill="#74C69D"/>
      <ellipse cx="280" cy="240" rx="60" ry="15" fill="#74C69D"/>
      <ellipse cx="190" cy="180" rx="35" ry="10" fill="#52B788"/>
      <!-- Lilies Flowers -->
      <circle cx="95" cy="218" r="6" fill="#FFB703"/>
      <circle cx="285" cy="238" r="8" fill="#FF006E"/>
      <circle cx="185" cy="178" r="5" fill="#FFB703"/>
      <!-- Bridge -->
      <path d="M 30 160 Q 200 90 370 160" stroke="#95D5B2" stroke-width="10" fill="none"/>
      <path d="M 40 180 Q 200 110 360 180" stroke="#74C69D" stroke-width="6" fill="none"/>
      <!-- Bridge Posts -->
      <line x1="100" y1="135" x2="100" y2="170" stroke="#95D5B2" stroke-width="4"/>
      <line x1="200" y1="115" x2="200" y2="150" stroke="#95D5B2" stroke-width="4"/>
      <line x1="300" y1="135" x2="300" y2="170" stroke="#95D5B2" stroke-width="4"/>
    </svg>`
  },
  {
    id: "seurat",
    title: "그랑드 자트 섬의 일요일 오후",
    artist: "조르주 쇠라 (Georges Seurat)",
    year: "1884년",
    period: "신인상주의 (점묘법)",
    reason: "수만 개의 무수한 점을 찍어 만든 놀라운 정교함과 조화로움을 느껴봐!",
    taste: ["A", "A", "B"],
    desc: "물감을 섞지 않고 순수한 색의 점을 찍어 빛을 표현한 '점묘법'의 대표작입니다. 일요일 오후 파리 시민들의 한가로운 휴식이 질서정연하게 표현되어 있습니다.",
    elements: "점묘 기법의 입자감, 명확한 수직·수평 구도, 평화로운 조화",
    img: "art image/3.png",
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#D8F3DC"/>
      <!-- River & Park -->
      <path d="M 0 0 L 400 0 L 400 120 L 0 180 Z" fill="#90E0EF"/>
      <path d="M 0 180 Q 200 140 400 120 L 400 300 L 0 300 Z" fill="#74C69D"/>
      <!-- Trees Dots -->
      <circle cx="60" cy="90" r="45" fill="#2D6A4F"/>
      <circle cx="340" cy="70" r="55" fill="#1B4332"/>
      <!-- People Silhouettes -->
      <ellipse cx="320" cy="210" rx="15" ry="40" fill="#081C15"/>
      <circle cx="320" cy="160" r="10" fill="#081C15"/>
      <ellipse cx="140" cy="220" rx="12" ry="30" fill="#1D3557"/>
      <!-- Umbrella -->
      <path d="M 290 150 Q 320 130 350 150 Z" fill="#E63946"/>
    </svg>`
  },
  {
    id: "lee",
    title: "흰 소 (White Bull)",
    artist: "이중섭 (Lee Jung-seob)",
    year: "1953년",
    period: "한국 근대 미술",
    reason: "거칠고 역동적인 붓 터치 속에서 강인한 한국의 민족 정신과 힘이 느껴져!",
    taste: ["B", "B", "A"],
    desc: "이중섭 화백의 대표작으로, 뼈가 굵고 힘찬 흰 소의 역동적 모습을 담아냈습니다. 힘든 시기에도 꺾이지 않는 강한 생명력과 정열이 붓질 하나하나에 녹아있습니다.",
    elements: "강렬한 에너지를 지닌 선, 굵은 질감, 주황과 흰색의 대비",
    img: "art image/4.png",
    svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#CB997E"/>
      <!-- Bull Body Outline -->
      <path d="M 80 180 C 60 140 100 100 160 110 C 220 90 300 110 330 150 C 350 180 320 220 280 230 C 220 240 140 230 80 180 Z" fill="#FFE8D6" stroke="#6B705C" stroke-width="8"/>
      <!-- Horns & Head -->
      <path d="M 90 140 Q 60 90 40 110" stroke="#386641" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M 110 130 Q 100 70 80 85" stroke="#386641" stroke-width="9" fill="none" stroke-linecap="round"/>
      <!-- Dynamic Brush Strokes -->
      <path d="M 120 140 Q 200 170 300 140" stroke="#A5A58D" stroke-width="12" fill="none" opacity="0.6"/>
      <line x1="120" y1="220" x2="110" y2="280" stroke="#6B705C" stroke-width="12" stroke-linecap="round"/>
      <line x1="280" y1="220" x2="290" y2="285" stroke="#6B705C" stroke-width="12" stroke-linecap="round"/>
    </svg>`
  }
];

function renderMasterpieceVisual(mp) {
  if (mp.img) {
    return `<img src="${mp.img}" alt="${mp.title}" style="width:100%; height:100%; object-fit:cover;">`;
  }
  return mp.svg;
}

// Balance Game Questions Data
const TASTE_ROUNDS = [
  {
    round: 1,
    factor: "색감",
    title: "1차. 어떤 색의 그림에 더 눈이 가나요?",
    question: "어떤 색의 그림에 더 눈이 가나요?",
    optA: { emoji: "🌸", label: "밝고 부드러운 색" },
    optB: { emoji: "🔥", label: "진하고 강렬한 색" }
  },
  {
    round: 2,
    factor: "분위기",
    title: "2차. 어떤 느낌의 그림을 더 보고 싶나요?",
    question: "어떤 느낌의 그림을 더 보고 싶나요?",
    optA: { emoji: "🌿", label: "편안하고 아름다운 그림" },
    optB: { emoji: "🔮", label: "신기하고 상상하게 되는 그림" }
  },
  {
    round: 3,
    factor: "표현 방식",
    title: "3차. 어떤 표현이 더 마음에 드나요?",
    question: "어떤 표현이 더 마음에 드나요?",
    optA: { emoji: "👀", label: "모습을 알아보기 쉬운 그림" },
    optB: { emoji: "✨", label: "독특하게 바꾸어 표현한 그림" }
  }
];

const BALANCE_QUESTIONS = TASTE_ROUNDS;

// Expression Styles Data
const EXPRESSION_STYLES = [
  { id: "color", icon: "🎨", title: "색채 변형", desc: "원작의 색상을 반대로 바꾸거나 밤/낮 분위기로 칠해보기" },
  { id: "parody", icon: "🎭", title: "패러디 & 재구성", desc: "내 모습이나 현대 캐릭터를 작품 속에 쏙 집어넣기" },
  { id: "collage", icon: "🧩", title: "입체 & 콜라주", desc: "잡지, 종이, 클레이 점토를 이용해 3D 입체로 입히기" },
  { id: "material", icon: "🖌️", title: "재료 바꾸기", desc: "수채화를 스크래치, 핑거페인팅, 또는 테이프 아트로 표현하기" },
  { id: "modern", icon: "🌌", title: "현대적 재해석", desc: "100년 전 명화 속 장소를 2026년 미래 도시로 바꾸어 그리기" }
];

// Application State Variables
let currentStep = 1;
let currentBalanceRound = 0;
let balanceSelections = [];
let selectedMasterpiece = MASTERPIECES[0];
let recommendedMasterpieceId = MASTERPIECES[0].id;
let selectedExpressionStyle = EXPRESSION_STYLES[0];

// Step 3 Agent Guided Chat Messages Log
let guidedStepIndex = 0; // 0 to 5 (6 guide steps)
const GUIDED_STEPS = [
  { step: "관찰", question: "작품을 보았을 때 가장 먼저 눈에 띄는 대상을 말해보세요!", term: "사실적 관찰" },
  { step: "재료", question: "화가는 어떤 재료와 도구(붓, 캔버스 등)로 그렸을까요?", term: "미술 재료·용구" },
  { step: "색상", question: "작품 전체에서 어떤 색깔이나 빛의 기운이 느껴지나요?", term: "색의 3속성(명도/채도/색상)" },
  { step: "요소", question: "그림 속 선(곡선/직선)이나 형태, 질감은 어떠한가요?", term: "조형 요소(점·선·면)" },
  { step: "원리", question: "작품에서 균형이나 강렬한 대비, 움직임이 느껴지나요?", term: "조형 원리(대비·동세)" },
  { step: "느낌", question: "이 작품을 다 보고 난 후 나의 마음이나 감정은 어떤가요?", term: "느낌과 해석" }
];

let studentGuidedAnswers = {};
let studentLedAnswers = [];

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderWizardTrack();
  initBalanceGame();
  renderMasterpieceGrid();
  renderExpressionStyles();
  initCanvas();
  initFloatingArtChatbot();
  updateStepView();
});

/* 1. Wizard Track Render */
function renderWizardTrack() {
  const container = document.getElementById("wizard-track-container");
  if (!container) return;

  const stepLabels = [
    "① 취향 찾기", "② 작품 추천", "③ 함께 감상", "④ 스스로 감상", "⑤ 감상문",
    "⑥ 해설 보완", "⑦ 결과 카드", "⑧ 표현 구상", "⑨ 제작 계획서", "⑩ 나만의 작품"
  ];

  container.innerHTML = stepLabels.map((label, idx) => `
    <div class="wizard-step-node ${idx + 1 === currentStep ? 'active' : ''} ${idx + 1 < currentStep ? 'completed' : ''}" onclick="jumpToStep(${idx + 1})">
      <div class="step-node-num">${idx + 1 < currentStep ? '✓' : idx + 1}</div>
      <div class="step-node-label">${label}</div>
    </div>
  `).join("");
}

function updateStepView() {
  renderWizardTrack();
  
  // Hide all step panes, show active
  for (let i = 1; i <= 10; i++) {
    const pane = document.getElementById(`step-pane-${i}`);
    if (pane) {
      if (i === currentStep) {
        pane.classList.add("active");
      } else {
        pane.classList.remove("active");
      }
    }
  }

  window.scrollTo({ top: 100, behavior: "smooth" });
}

function jumpToStep(stepNum) {
  currentStep = stepNum;
  updateStepView();
  if (stepNum === 2) {
    recommendArtworkFromTaste();
    renderMasterpieceGrid();
    renderFocusArtwork();
  }
}

function goNext() {
  if (currentStep === 1) {
    recommendArtworkFromTaste();
  }
  if (currentStep < 10) {
    currentStep++;
    updateStepView();
    onEnterStep(currentStep);
  }
}

function goPrev() {
  if (currentStep > 1) {
    currentStep--;
    updateStepView();
  }
}

/* 2. Step 1: Balance Game Logic */
function initBalanceGame() {
  currentBalanceRound = 0;
  balanceSelections = [];
  renderBalanceRound();
}

function renderBalanceRound() {
  const qTitle = document.getElementById("balance-q-title");
  const optionsGrid = document.getElementById("balance-options-grid");
  const resultCard = document.getElementById("balance-result-card");

  if (currentBalanceRound < BALANCE_QUESTIONS.length) {
    const q = BALANCE_QUESTIONS[currentBalanceRound];
    qTitle.textContent = q.title;
    resultCard.style.display = "none";
    optionsGrid.style.display = "grid";

    optionsGrid.innerHTML = `
      <div class="balance-option-card" onclick="selectBalanceOption('A')">
        <span class="balance-emoji">${q.optA.emoji}</span>
        <span class="balance-label">${q.optA.label}</span>
      </div>
      <div class="balance-option-card" onclick="selectBalanceOption('B')">
        <span class="balance-emoji">${q.optB.emoji}</span>
        <span class="balance-label">${q.optB.label}</span>
      </div>
    `;
  } else {
    // Game Completed -> Show Result
    qTitle.textContent = "🎉 취향 분석 완료!";
    optionsGrid.style.display = "none";
    resultCard.style.display = "block";

    document.getElementById("balance-result-text").innerHTML = `
      <strong>🎨 나의 3차 월드컵 취향</strong><br>
      ${getTasteSummary("<br>")}<br><br>
      <strong>2단계에서 공부할 추천 작품:</strong> ${escapeHtml(recommendArtworkFromTaste().title)}
    `;
  }
}

function selectBalanceOption(choice) {
  balanceSelections.push(choice);
  currentBalanceRound++;
  renderBalanceRound();
}

/* 3. Step 2: Masterpiece Selection */
function renderMasterpieceGrid() {
  const container = document.getElementById("masterpiece-grid");
  if (!container) return;

  container.innerHTML = MASTERPIECES.map(mp => {
    const isRecommended = mp.id === recommendedMasterpieceId;
    const isSelected = mp.id === selectedMasterpiece.id;
    return `
    <div class="masterpiece-card ${isSelected ? 'selected' : ''} ${isRecommended ? 'highlighted' : 'dimmed'}" onclick="selectMasterpiece('${mp.id}')">
      ${isRecommended ? '<div class="highlight-ribbon">✨ 취향 추천</div>' : ''}
      <div class="masterpiece-img-box">
        ${renderMasterpieceVisual(mp)}
      </div>
      <div class="masterpiece-info">
        <div class="masterpiece-title">${mp.title}</div>
        <div class="masterpiece-artist">${mp.artist}</div>
        <div class="masterpiece-reason">💡 ${mp.reason}</div>
      </div>
    </div>
  `;
  }).join("");

  const highlighted = container.querySelector(".masterpiece-card.highlighted");
  if (highlighted && currentStep === 2) {
    requestAnimationFrame(() => {
      highlighted.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
}

function selectMasterpiece(id) {
  const found = MASTERPIECES.find(m => m.id === id);
  if (found) {
    selectedMasterpiece = found;
    renderMasterpieceGrid();
    renderFocusArtwork();
  }
}

function recommendArtworkFromTaste() {
  const picks = [0, 1, 2].map((i) => balanceSelections[i] || "A");
  let best = MASTERPIECES[0];
  let bestScore = -1;
  MASTERPIECES.forEach((mp) => {
    const score = (mp.taste || []).reduce((sum, value, i) => sum + (value === picks[i] ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      best = mp;
    }
  });
  selectedMasterpiece = best;
  recommendedMasterpieceId = best.id;
  return best;
}

function matchReasonText(mp) {
  const labels = TASTE_ROUNDS.map((round, i) => {
    const choice = balanceSelections[i] || mp.taste[i];
    const text = choice === "B" ? round.optB.label : round.optA.label;
    return `${round.factor}: ${text}`;
  });
  return labels.join(" · ");
}

function renderFocusArtwork() {
  const box = document.getElementById("focus-artwork-card");
  if (!box) return;
  const mp = selectedMasterpiece;
  box.innerHTML = `
    <div class="focus-badge">오늘의 중점 작품</div>
    <div class="focus-layout">
      <div class="focus-visual">${renderMasterpieceVisual(mp)}</div>
      <div class="focus-copy">
        <h3>${escapeHtml(mp.title)}</h3>
        <p class="focus-artist">${escapeHtml(mp.artist)} · ${escapeHtml(mp.year)}</p>
        <p>${escapeHtml(mp.desc)}</p>
        <p class="focus-match">왜 이 그림인가요? ${escapeHtml(matchReasonText(mp))}</p>
        <button type="button" class="recommend-menu-btn primary" onclick="askRecommendBot('study')">이 작품, 도슨트와 공부하기</button>
      </div>
    </div>
  `;
}

/* 4. Trigger logic when entering a step */
function onEnterStep(stepNum) {
  if (stepNum === 2) {
    recommendArtworkFromTaste();
    renderMasterpieceGrid();
    renderFocusArtwork();
  } else if (stepNum === 3) {
    initGuidedAgentChat();
  } else if (stepNum === 4) {
    initStudentLedChat();
  } else if (stepNum === 5) {
    generateAppreciationEssay();
  } else if (stepNum === 6) {
    renderCommentaryStep();
  } else if (stepNum === 7) {
    renderResultCardStep();
  } else if (stepNum === 9) {
    renderProductionPlanSheet();
  }
}

/* 5. Step 3: Agent Guided Chat */
function initGuidedAgentChat() {
  const headerInfo = document.getElementById("guided-chat-header");
  const messagesArea = document.getElementById("guided-chat-messages");

  headerInfo.innerHTML = `
    <div style="width: 50px; height: 50px; border-radius: 8px; overflow: hidden; border: 2px solid white; flex-shrink: 0;">
      ${renderMasterpieceVisual(selectedMasterpiece)}
    </div>
    <div>
      <div style="font-family: 'Jua'; font-size: 1.2rem;">${selectedMasterpiece.title}</div>
      <div style="font-size: 0.85rem; opacity: 0.8;">${selectedMasterpiece.artist}</div>
    </div>
  `;

  guidedStepIndex = 0;
  studentGuidedAnswers = {};
  messagesArea.innerHTML = "";

  // Agent First Message
  appendAgentMessage("guided-chat-messages", `안녕! 나는 너의 미술 감상 도우미 **아뜰리에 Agent**야! 🎨\n지금부터 《${selectedMasterpiece.title}》 작품을 함께 깊이 있게 감상해 볼 거야.\n\n첫 번째 질문이야: **${GUIDED_STEPS[0].question}**`);
}

function sendGuidedStudentMessage() {
  const input = document.getElementById("guided-chat-input");
  const text = input.value.trim();
  if (!text) return;

  // Append Student Message
  appendStudentMessage("guided-chat-messages", text);
  input.value = "";

  // Save answer
  const currentGuide = GUIDED_STEPS[guidedStepIndex];
  studentGuidedAnswers[currentGuide.step] = text;

  guidedStepIndex++;

  setTimeout(() => {
    if (guidedStepIndex < GUIDED_STEPS.length) {
      const nextGuide = GUIDED_STEPS[guidedStepIndex];
      const feedbackPraise = getAgentPraise(currentGuide.term, text);
      appendAgentMessage("guided-chat-messages", `${feedbackPraise}\n\n다음 관점이야! **${nextGuide.question}** (관점: ${nextGuide.term})`);
    } else {
      appendAgentMessage("guided-chat-messages", `🎉 정말 훌륭하게 6가지 감상 관점(관찰, 재료, 색상, 요소, 원리, 느낌)을 모두 이야기했어!\n너의 풍부한 관찰력 덕분에 훌륭한 감상문 재료가 준비되었단다. 다음 단계로 넘어가서 너 스스로 질문을 만들어볼까?`);
    }
  }, 600);
}

function getAgentPraise(term, studentText) {
  const praises = [
    `우와! "${studentText}"라고 훌륭하게 답변했구나! 이 내용은 미술에서 **'${term}'**을 아주 잘 포착한 거란다! 🌟`,
    `멋진 지적이야! 너의 민감한 눈 덕분에 **'${term}'**의 특징이 잘 드러났어! 👏`,
    `정말 감각적인 답이야! 화가가 표현하고자 한 **'${term}'**을 제대로 파악했네! ✨`
  ];
  return praises[Math.floor(Math.random() * praises.length)];
}

function insertGuidedHint(hintText) {
  const input = document.getElementById("guided-chat-input");
  input.value = hintText;
  input.focus();
}

/* 6. Step 4: Student-Led Chat */
function initStudentLedChat() {
  const messagesArea = document.getElementById("student-led-chat-messages");
  messagesArea.innerHTML = "";
  studentLedAnswers = [];

  appendAgentMessage("student-led-chat-messages", `이번 단계는 **학생 주도 감상 단계**야! 🔍\n연습했던 감상 관점(관찰, 재료, 색, 조형요소, 느낌)을 바탕으로, 네가 직접 작품을 보고 **질문을 하나 만들고, 그 질문에 스스로 답해보는 시간** 간단하게 2~3가지 질문을 스스로 만들어봐!`);
}

function sendStudentLedMessage() {
  const input = document.getElementById("student-led-chat-input");
  const text = input.value.trim();
  if (!text) return;

  appendStudentMessage("student-led-chat-messages", text);
  input.value = "";
  studentLedAnswers.push(text);

  setTimeout(() => {
    appendAgentMessage("student-led-chat-messages", `💡 우와! 스스로 직접 질문을 던지고 감상해보았구나! "${text}"라는 생각은 작품을 입체적으로 이해하는 데 큰 도움이 된단다. 아주 잘했어! 🌟`);
  }, 600);
}

function insertStudentLedQuestion(qTemplate) {
  const input = document.getElementById("student-led-chat-input");
  input.value = qTemplate;
  input.focus();
}

/* 7. Step 5: Synthesize Essay */
function generateAppreciationEssay() {
  const essayBox = document.getElementById("essay-preview-box");
  const mp = selectedMasterpiece;

  const obs = studentGuidedAnswers["관찰"] || "작품 중심의 선명한 형태들이 먼저 눈에 띄었습니다.";
  const mat = studentGuidedAnswers["재료"] || "유채 물감과 붓을 활용하여 굵고 진하게 그려졌습니다.";
  const col = studentGuidedAnswers["색상"] || "강렬한 노랑과 시원한 보라/파랑이 대비를 이루고 있습니다.";
  const ele = studentGuidedAnswers["요소"] || "꿈틀거리는 곡선과 면이 조화를 이루며 생동감을 줍니다.";
  const pri = studentGuidedAnswers["원리"] || "역동적인 동세와 색채의 대비가 화면 전체에 에너지를 부여합니다.";
  const feel = studentGuidedAnswers["느낌"] || "작품을 보는 순간 마음속에서 요동치는 강한 감정을 느꼈습니다.";

  const studentLedText = studentLedAnswers.length > 0 ? "\n또한, 스스로 탐구하며 " + studentLedAnswers.join(" ") : "";

  const fullEssay = `제목: 《${mp.title}》을 감상하고

나는 ${mp.artist} 화가의 《${mp.title}》 작품을 감상하였다. 

작품을 자세히 관찰해보았을 때, 가장 먼저 ${obs} 이 점이 매우 인상 깊었다. 화가는 이 그림을 그리기 위해 ${mat} 표현 방식을 사용하였다.

색채적인 면에서는 ${col} 조화가 돋보였으며, 조형 요소와 원리 측면에서는 ${ele} 특징과 ${pri} 느껴졌다.${studentLedText}

이 작품을 감상하면서 나는 ${feel} 느낄 수 있었다. ${mp.artist} 화가의 작품 세계와 미술적 열정에 대해 깊이 공감할 수 있는 뜻깊은 시간이었다.`;

  essayBox.value = fullEssay;
}

/* 8. Step 6: Artwork Commentary & Refinement */
function renderCommentaryStep() {
  const container = document.getElementById("commentary-content-box");
  const mp = selectedMasterpiece;

  container.innerHTML = `
    <div style="background: #FFFBEA; border: 2px dashed #FCD34D; padding: 1.5rem; border-radius: 16px; margin-bottom: 1.5rem;">
      <h3 style="font-family: 'Jua'; font-size: 1.5rem; color: #B45309; margin-bottom: 0.5rem;">
        📖 Agent가 들려주는 《${mp.title}》 명화 비하인드 스토리
      </h3>
      <p style="font-size: 1.05rem; color: #78350F; line-height: 1.7;">${mp.desc}</p>
      <div style="margin-top: 1rem; font-weight: 700; color: #92400E;">
        ✨ 미술사적 핵심 조형 특징: ${mp.elements}
      </div>
    </div>
  `;
}

function refineEssayWithCommentary() {
  const mp = selectedMasterpiece;
  const essayBox = document.getElementById("essay-preview-box");
  if (essayBox) {
    essayBox.value += `\n\n[작품 해설을 읽은 후 덧붙이는 글]\n작품 해설을 통해 알게 된 것처럼, ${mp.artist}의 의도인 "${mp.desc.substring(0, 50)}..."라는 비하인드 스토리를 접하니 작품 속 명암과 색채의 진정한 의미가 한층 더 깊이 있게 느껴졌다.`;
    alert("✨ 작품 해설 내용이 감상문에 멋지게 반영되었습니다!");
  }
  goNext();
}

/* 9. Step 7: Appreciation Result Card */
function renderResultCardStep() {
  const container = document.getElementById("result-card-display");
  const mp = selectedMasterpiece;
  const essayText = document.getElementById("essay-preview-box").value;

  container.innerHTML = `
    <div class="result-card-header">
      <div class="result-artwork-box">
        ${renderMasterpieceVisual(mp)}
      </div>
      <div class="result-header-text">
        <h3>🖼️ ${mp.title}</h3>
        <div class="result-header-artist">작가: ${mp.artist} (${mp.year}, ${mp.period})</div>
        <div class="teacher-feedback-box">
          <div class="teacher-feedback-title">💬 AI 선생님의 구체적 칭찬 피드백</div>
          <div class="teacher-feedback-content">
            "작품 속 색채의 대비와 조형 요소의 특징을 정밀하게 관찰하여 자신만의 감정 언어로 풍부하게 표현한 점이 매우 뛰어납니다! 🌟"
          </div>
        </div>
      </div>
    </div>

    <div style="font-family: 'Jua'; font-size: 1.3rem; color: var(--primary-art-dark); margin-bottom: 0.5rem;">
      📝 내가 작성한 최종 미술 감상문
    </div>
    <div class="essay-display-box">${escapeHtml(essayText)}</div>

    <div class="further-question-box">
      <div class="further-question-title">💡 AI가 추천하는 한 걸음 더 생각 질문</div>
      <div style="font-size: 0.98rem; color: #4C1D95; line-height: 1.6;">
        1. 만약 내가 이 작품 속에 주인공으로 들어간다면 무슨 행동을 하고 있을까요?<br>
        2. 이 작품의 색을 180도 바꾸어 밤을 낮으로 표현한다면 어떤 기분이 들까요?
      </div>
    </div>
  `;
}

/* 10. Step 8: Expression Styles */
function renderExpressionStyles() {
  const container = document.getElementById("expression-styles-grid");
  if (!container) return;

  container.innerHTML = EXPRESSION_STYLES.map(st => `
    <div class="expression-style-card ${st.id === selectedExpressionStyle.id ? 'selected' : ''}" onclick="selectExpressionStyle('${st.id}')">
      <span class="expression-icon">${st.icon}</span>
      <div class="expression-title">${st.title}</div>
      <div class="expression-desc">${st.desc}</div>
    </div>
  `).join("");
}

function selectExpressionStyle(id) {
  const found = EXPRESSION_STYLES.find(s => s.id === id);
  if (found) {
    selectedExpressionStyle = found;
    renderExpressionStyles();
  }
}

/* 11. Step 9: Production Plan Sheet */
function renderProductionPlanSheet() {
  const container = document.getElementById("plan-sheet-display");
  const mp = selectedMasterpiece;
  const st = selectedExpressionStyle;

  const keepText = document.getElementById("plan-keep-input")?.value || "원작의 구도와 주요 주제 대상";
  const changeText = document.getElementById("plan-change-input")?.value || "색채 분위기 및 주인공 캐릭터 표현";
  const toolsText = document.getElementById("plan-tools-input")?.value || "8크레파스, 수채화 물감, 종이 싹둑 콜라주";

  container.innerHTML = `
    <div style="text-align: center; border-bottom: 2px dashed #E2E8F0; padding-bottom: 1rem; margin-bottom: 1.5rem;">
      <h2 style="font-family: 'Jua'; font-size: 2rem; color: var(--primary-art-dark);">
        📋 나만의 미술 시각적 표현 제작 계획서
      </h2>
      <p style="font-size: 1rem; color: var(--text-muted);">감상 결과를 바탕으로 새로운 창의적 작품을 계획합니다.</p>
    </div>

    <div class="plan-grid-table">
      <div class="plan-field-box">
        <div class="plan-field-label">🖼️ 원작 명화 정보</div>
        <div class="plan-field-value">${mp.title} (${mp.artist})</div>
      </div>

      <div class="plan-field-box">
        <div class="plan-field-label">💡 선택한 표현 기법</div>
        <div class="plan-field-value">${st.icon} ${st.title}</div>
      </div>

      <div class="plan-field-box">
        <div class="plan-field-label">🔒 그대로 유지할 요소 (Keep)</div>
        <div class="plan-field-value">${escapeHtml(keepText)}</div>
      </div>

      <div class="plan-field-box">
        <div class="plan-field-label">✨ 새롭게 바꿀 요소 (Change)</div>
        <div class="plan-field-value">${escapeHtml(changeText)}</div>
      </div>

      <div class="plan-field-box">
        <div class="plan-field-label">🖌️ 사용할 미술 재료 & 용구</div>
        <div class="plan-field-value">${escapeHtml(toolsText)}</div>
      </div>

      <div class="plan-field-box">
        <div class="plan-field-label">🎯 나의 표현 의도 및 메시지</div>
        <div class="plan-field-value">원작의 느낌을 살리면서 나의 감성을 담아 창의적으로 재해석한다.</div>
      </div>
    </div>
  `;
}

/* 12. Step 10: Canvas Draw Pad */
let canvas, ctx;
let isDrawing = false;
let currentColor = "#FF6B6B";
let currentLineWidth = 6;
let isEraser = false;

function initCanvas() {
  canvas = document.getElementById("art-canvas");
  if (!canvas) return;
  ctx = canvas.getContext("2d");

  // Canvas size
  canvas.width = 600;
  canvas.height = 400;

  // Background white
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Touch & Mouse Listeners
  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDraw);
  canvas.addEventListener("mouseleave", stopDraw);

  canvas.addEventListener("touchstart", (e) => { e.preventDefault(); startDraw(getTouchPos(e)); });
  canvas.addEventListener("touchmove", (e) => { e.preventDefault(); draw(getTouchPos(e)); });
  canvas.addEventListener("touchend", stopDraw);
}

function getTouchPos(e) {
  const rect = canvas.getBoundingClientRect();
  const touch = e.touches[0];
  return {
    clientX: touch.clientX,
    clientY: touch.clientY
  };
}

function startDraw(e) {
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.beginPath();
  ctx.moveTo(x, y);
}

function draw(e) {
  if (!isDrawing) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.strokeStyle = isEraser ? "#FFFFFF" : currentColor;
  ctx.lineWidth = isEraser ? currentLineWidth * 3 : currentLineWidth;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.lineTo(x, y);
  ctx.stroke();
}

function stopDraw() {
  isDrawing = false;
}

function setCanvasColor(color) {
  currentColor = color;
  isEraser = false;
}

function setLineWidth(width) {
  currentLineWidth = width;
}

function toggleEraser() {
  isEraser = !isEraser;
}

function clearCanvas() {
  if (confirm("스케치패드를 모두 지울까요?")) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function saveCanvasToGallery() {
  const dataUrl = canvas.toDataURL("image/png");
  const gallery = document.getElementById("gallery-container");
  const titleInput = document.getElementById("canvas-title-input")?.value || "나의 창의 미술 작품";

  if (!gallery) return;

  const cardHtml = `
    <div class="gallery-card">
      <img class="gallery-card-img" src="${dataUrl}" alt="작품">
      <div class="gallery-card-info">
        <div class="gallery-card-title">${escapeHtml(titleInput)}</div>
        <div class="gallery-card-artist">원작 변형: 《${selectedMasterpiece.title}》</div>
        <div style="font-size: 0.85rem; color: #06D6A0; font-weight: 700;">🏅 감상·표현 완료 스탬프</div>
      </div>
    </div>
  `;

  gallery.insertAdjacentHTML("afterbegin", cardHtml);
  alert("🎉 나만의 멋진 작품이 갤러리에 등록되었습니다!");
}

/* Helper Functions */
function appendAgentMessage(containerId, text) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble agent";
  bubble.innerHTML = `
    <div class="agent-name">🤖 아뜰리에 Agent</div>
    <div>${escapeHtml(text).replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</div>
  `;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function appendStudentMessage(containerId, text) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble student";
  bubble.innerHTML = `<div>${escapeHtml(text)}</div>`;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function printPlanSheet() {
  window.print();
}

function copyCopilotPrompt(promptText) {
  navigator.clipboard?.writeText(promptText).catch(() => {});
  openArtChatbot();
  alert(`💡 대화 힌트:\n"${promptText}"\n\n왼쪽 아래 챗봇 창에 붙여 넣어 보세요!`);
}

const ARTWORK_LIST_FOR_BOT = "별이 빛나는 밤(고흐), 수련 연못과 일본식 다리(모네), 그랑드 자트 섬의 일요일 오후(쇠라), 흰 소(이중섭)";

function getTasteSummary(sep = " / ") {
  return TASTE_ROUNDS.map((round, i) => {
    const choice = balanceSelections[i];
    const picked = choice === "A"
      ? `A ${round.optA.label}`
      : choice === "B"
        ? `B ${round.optB.label}`
        : "아직 고르지 않음";
    return `${round.round}차 ${round.factor}(${round.question}) → ${picked}`;
  }).join(sep);
}

function buildRecommendPrompt(kind) {
  const rule = "너는 초등학생 미술 도슨트야. 쉬운 말로 말해.";
  const works = `작품 4점: ${ARTWORK_LIST_FOR_BOT}`;
  const worldcup = [
    "1차 색감: 어떤 색의 그림에 더 눈이 가나요? A 밝고 부드러운 색 / B 진하고 강렬한 색",
    "2차 분위기: 어떤 느낌의 그림을 더 보고 싶나요? A 편안하고 아름다운 그림 / B 신기하고 상상하게 되는 그림",
    "3차 표현 방식: 어떤 표현이 더 마음에 드나요? A 모습을 알아보기 쉬운 그림 / B 독특하게 바꾸어 표현한 그림"
  ].join("\n");

  if (kind === "worldcup") {
    return `${rule} 지금은 1단계야. ${works}\n3번의 이상형 월드컵을 한 질문씩 물어봐.\n${worldcup}\n세 답을 들으면 4점 중 성향에 가장 맞는 작품 딱 1점을 추천하고, 왜 맞는지 짧게 설명해. 2단계에서 그 작품만 중점적으로 공부한다고 안내해.`;
  }
  if (kind === 1 || kind === 2 || kind === 3) {
    const round = TASTE_ROUNDS[kind - 1];
    return `${rule} ${works}\n지금은 ${kind}차(${round.factor})만 물어봐. 질문: ${round.question} A ${round.optA.label} / B ${round.optB.label}.`;
  }
  if (kind === "study") {
    const mp = selectedMasterpiece;
    return `${rule} 지금은 2단계야. 학생이 중점적으로 공부할 작품은 《${mp.title}》(${mp.artist})이야. 관찰, 색, 느낌 질문을 하나씩 해서 이 작품만 깊게 공부하게 도와줘. 다른 작품으로 주제를 바꾸지 마.`;
  }
  const taste = getTasteSummary("\n");
  const rec = recommendArtworkFromTaste();
  return `${rule}\n${works}\n학생의 3번 월드컵 취향:\n${taste}\n이 취향에 맞는 작품 1점으로 《${rec.title}》을 추천해도 돼. 이유는 짧게, 2단계에서 이 그림을 중점 공부한다고 말해.`;
}

function askRecommendBot(kind) {
  copyCopilotPrompt(buildRecommendPrompt(kind));
}

function loadArtCopilotFrame() {
  const frame = document.getElementById("art-copilot-frame");
  if (!frame) return;
  const src = "https://copilotstudio.microsoft.com/environments/9324e73a-cd4e-e049-b7ba-177af6165e9c/bots/crbf2_bot_Rv6Ihh/webchat?__version__=2&enableFileAttachment=false&cliAgent=true";
  if (!frame.src || frame.src === "about:blank" || frame.src.endsWith("about:blank")) {
    frame.src = src;
  }
}

function openArtChatbot() {
  const btn = document.getElementById("floating-art-chatbot-btn");
  const modal = document.getElementById("floating-art-chatbot-modal");
  if (!modal) return;
  modal.hidden = false;
  modal.classList.add("open");
  if (btn) btn.classList.add("is-open");
  loadArtCopilotFrame();
}

function closeArtChatbot() {
  const btn = document.getElementById("floating-art-chatbot-btn");
  const modal = document.getElementById("floating-art-chatbot-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.hidden = true;
  if (btn) btn.classList.remove("is-open");
}

function initFloatingArtChatbot() {
  const btn = document.getElementById("floating-art-chatbot-btn");
  const closeBtn = document.getElementById("close-art-modal-btn");

  if (btn) {
    btn.addEventListener("click", () => {
      const modal = document.getElementById("floating-art-chatbot-modal");
      if (modal && modal.classList.contains("open")) {
        closeArtChatbot();
      } else {
        openArtChatbot();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeArtChatbot);
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
