/**
 * 도덕 마인드 숲 (Moral Mind Forest) - Application Logic
 * Scaffolding & Moral Reflection Web App for Elementary Students
 */

// Moral Concepts Data
const MORAL_CONCEPTS = [
  {
    id: "care",
    title: "배려 (Consideration)",
    icon: "🤝",
    color: "#EBF7EE",
    tagColor: "#236B44",
    tagText: "따뜻한 마음",
    definition: "다른 사람의 입장과 마음을 먼저 헤아리고, 도움이 되는 행동을 정성껏 다해요.",
    dilemmaTitle: "일상 속 생각하기",
    dilemmaText: "모둠 청소 시간에 힘들어하는 동아리 친구를 보았을 때, 못 본 척하고 먼저 가버릴까요?",
    scaffoldHint: "내가 만약 그 친구라면 어떤 도움을 받을 때 고맙고 마음이 따뜻해질까요?"
  },
  {
    id: "honesty",
    title: "정직 (Honesty)",
    icon: "💎",
    color: "#EEF4FF",
    tagColor: "#1D4ED8",
    tagText: "거짓 없는 진실",
    definition: "거짓 없이 솔직하고 당당하게 말하며, 마음과 행동을 일치시켜 나갑니다.",
    dilemmaTitle: "일상 속 생각하기",
    dilemmaText: "실수로 친구의 학용품을 부러뜨렸는데 아무도 보지 못했을 때, 솔직하게 말해야 할까요?",
    scaffoldHint: "순간의 두려움보다 정직하게 사과했을 때 느낄 마음의 평화와 믿음을 떠올려 보세요."
  },
  {
    id: "responsibility",
    title: "책임 (Responsibility)",
    icon: "🌱",
    color: "#FFF4E5",
    tagColor: "#B45309",
    tagText: "끝까지 최선",
    definition: "내가 맡은 역할과 나의 말과 행동 결과에 대해 끝까지 최선을 다하고 수용해요.",
    dilemmaTitle: "일상 속 생각하기",
    dilemmaText: "모둠 발표 자료를 만들기로 약속했지만, 게임이 너무 하고 싶어서 미루고 싶을 때 어떻게 할까요?",
    scaffoldHint: "내가 약속을 지켰을 때 모둠원 모두가 얻게 되는 기쁨과 신뢰를 상상해 보세요."
  },
  {
    id: "fairness",
    title: "공정 & 존중 (Fairness)",
    icon: "⚖️",
    color: "#F3E8FF",
    tagColor: "#6D28D9",
    tagText: "치우침 없는 마음",
    definition: "편견이나 차별 없이 규칙을 지키며, 서로의 차이를 소중히 존중합니다.",
    dilemmaTitle: "일상 속 생각하기",
    dilemmaText: "놀이를 할 때 친한 친구에게만 유리하게 규칙을 정하고 싶은 마음이 들 때 어떻게 해야 할까요?",
    scaffoldHint: "모두가 같은 기준과 기회를 가질 때 게임이 훨씬 공정하고 즐거워집니다."
  },
  {
    id: "kindness",
    title: "친절 & 협동 (Cooperation)",
    icon: "❤️",
    color: "#FFEBF2",
    tagColor: "#BE185D",
    tagText: "함께하는 다정함",
    definition: "고운 말과 따뜻한 표정으로 대하고, 어려움이 있을 때 서로의 힘을 모아요.",
    dilemmaTitle: "일상 속 생각하기",
    dilemmaText: "체육 시간에 서툰 친구가 실수를 해서 경기에 질 것 같을 때 어떤 말을 해주는 게 좋을까요?",
    scaffoldHint: "비난 대신 '괜찮아! 다시 해보자!'라는 응원의 말이 친구에게 큰 힘이 됩니다."
  },
  {
    id: "selfcontrol",
    title: "절제 & 자기통제 (Self-Control)",
    icon: "🧘‍♂️",
    color: "#E0F2FE",
    tagColor: "#0369A1",
    tagText: "마음의 조절",
    definition: "나의 욕구나 감정을 순간의 충동대로 표현하지 않고, 바람직하게 조절해요.",
    dilemmaTitle: "일상 속 생각하기",
    dilemmaText: "스마트폰이나 게임을 약속한 시간이 지났는데 더 하고 싶을 때 스스로 멈출 수 있나요?",
    scaffoldHint: "지금 순간의 절제가 더 큰 목표와 나의 절제 능력을 성장시켜 줍니다."
  }
];

// Sentence Starters for Scaffolding (Step 3 & Step 4)
const SENTENCE_STARTERS = {
  empathy: [
    "상대방은 나의 행동을 보고 아마 ~라고 느꼈을 것 같습니다.",
    "내가 만약 그 상황에서 상대방이었다면 ~한 마음이 들었을 것 같습니다."
  ],
  moralReasoning: [
    "이 상황에서 가장 중요하게 지켜야 할 도덕적 가치는 [개념]입니다. 왜냐하면...",
    "내가 순간의 이익이나 기분보다는 ~을 고려했다면 결과가 달라졌을 것입니다.",
    "나의 행동이 다른 사람에게 어떤 영향을 주는지 생각했을 때, 잘못되었던 점은..."
  ],
  actionPlan: [
    "앞으로 비슷한 일이 생긴다면, 나는 주저 없이 ~하게 행동하겠습니다.",
    "나의 도덕적 성찰을 실천하기 위해 오늘부터 매일 ~을 지키겠습니다.",
    "상대방의 마음을 위로하기 위해 나는 먼저 찾아가 ~라고 사과/이야기하겠습니다."
  ]
};

// Badges Criteria
const BADGES = [
  { id: 1, name: "새싹 성찰가", icon: "🌱", desc: "첫 도덕 성찰 작성 완료!", requiredCount: 1 },
  { id: 2, name: "배려의 나무", icon: "🌳", desc: "성찰 일지 3회 이상 작성", requiredCount: 3 },
  { id: 3, name: "정직과 책임의 파수꾼", icon: "🛡️", desc: "성찰 일지 5회 이상 작성", requiredCount: 5 },
  { id: 4, name: "도덕 지혜의 숲 리더", icon: "👑", desc: "성찰 일지 10회 이상 작성", requiredCount: 10 }
];

// Current State
let currentStep = 1;
let selectedConcept = "care";
let selectedEmotions = [];
let reflectionLogs = JSON.parse(localStorage.getItem("moral_reflection_logs") || "[]");

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  renderConceptCards();
  initTabNavigation();
  initStepWizard();
  initEmotionSelector();
  initScaffoldingStarters();
  initFloatingChatbot();
  renderHistoryLogs();
  updateBadges();
});

/* 1. Render Moral Concept Cards */
function renderConceptCards() {
  const container = document.getElementById("concept-cards-container");
  if (!container) return;

  container.innerHTML = MORAL_CONCEPTS.map(c => `
    <div class="concept-card" style="border-top: 5px solid ${c.tagColor};">
      <div class="concept-header">
        <div class="concept-badge-icon" style="background: ${c.color};">
          ${c.icon}
        </div>
        <div class="concept-title-box">
          <h3>${c.title}</h3>
          <span class="concept-tag" style="background: ${c.color}; color: ${c.tagColor};">${c.tagText}</span>
        </div>
      </div>
      <div class="concept-body">
        <div class="concept-def">${c.definition}</div>
        <div class="dilemma-box">
          <div class="dilemma-title"><span>💡</span> ${c.dilemmaTitle}</div>
          <div class="dilemma-text">"${c.dilemmaText}"</div>
        </div>
        <div class="scaffold-hint-box">
          <div class="scaffold-hint-title"><span>🧩</span> 생각 비계 (Scaffolding Tip)</div>
          <div class="scaffold-hint-text">${c.scaffoldHint}</div>
        </div>
      </div>
      <button class="card-action-btn" onclick="startWorksheetWithConcept('${c.id}')">
        <span>✍️</span> 이 개념으로 성찰하기
      </button>
    </div>
  `).join("");
}

/* Tab Navigation */
function initTabNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      navBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });
}

function startWorksheetWithConcept(conceptId) {
  selectedConcept = conceptId;
  
  // Highlight chip
  const chipBtns = document.querySelectorAll("#concept-chips .chip-btn");
  chipBtns.forEach(btn => {
    if (btn.getAttribute("data-concept") === conceptId) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });

  // Switch tab to Worksheet
  document.querySelector('[data-tab="tab-worksheet"]').click();
  goToStep(1);
}

/* 2. Step Wizard Logic */
function initStepWizard() {
  const conceptChips = document.querySelectorAll("#concept-chips .chip-btn");
  conceptChips.forEach(chip => {
    chip.addEventListener("click", () => {
      conceptChips.forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      selectedConcept = chip.getAttribute("data-concept");
    });
  });
}

function goToStep(stepNum) {
  if (stepNum < 1 || stepNum > 4) return;
  currentStep = stepNum;

  // Update Progress Bar
  const progressPercent = ((stepNum - 1) / 3) * 100;
  document.getElementById("step-progress-bar").style.width = `${progressPercent}%`;

  // Update Items
  for (let i = 1; i <= 4; i++) {
    const item = document.getElementById(`step-item-${i}`);
    const pane = document.getElementById(`step-pane-${i}`);
    
    item.classList.remove("active", "completed");
    pane.classList.remove("active");

    if (i === stepNum) {
      item.classList.add("active");
      pane.classList.add("active");
    } else if (i < stepNum) {
      item.classList.add("completed");
    }
  }

  window.scrollTo({ top: 150, behavior: "smooth" });
}

/* 3. Emotion Selector */
function initEmotionSelector() {
  const emotionGrid = document.getElementById("emotion-grid");
  if (!emotionGrid) return;

  const emotions = [
    { emoji: "😔", label: "속상함" },
    { emoji: "😰", label: "당황스러움" },
    { emoji: "🥺", label: "미안함" },
    { emoji: "😡", label: "화남/억울함" },
    { emoji: "😟", label: "걱정됨" },
    { emoji: "😌", label: "후련하고 솔직함" }
  ];

  emotionGrid.innerHTML = emotions.map(e => `
    <div class="emotion-card" onclick="toggleEmotion(this, '${e.label}')">
      <span class="emotion-emoji">${e.emoji}</span>
      <span class="emotion-label">${e.label}</span>
    </div>
  `).join("");
}

function toggleEmotion(element, label) {
  element.classList.toggle("selected");
  if (selectedEmotions.includes(label)) {
    selectedEmotions = selectedEmotions.filter(item => item !== label);
  } else {
    selectedEmotions.push(label);
  }
}

/* 4. Scaffolding Sentence Starter Insertion */
function initScaffoldingStarters() {
  const container3 = document.getElementById("scaffold-starters-step3");
  const container4 = document.getElementById("scaffold-starters-step4");

  if (container3) {
    container3.innerHTML = SENTENCE_STARTERS.moralReasoning.map(starter => `
      <button class="starter-btn" onclick="insertStarter('input-step3', '${starter}')">
        ➕ "${starter}"
      </button>
    `).join("");
  }

  if (container4) {
    container4.innerHTML = SENTENCE_STARTERS.actionPlan.map(starter => `
      <button class="starter-btn" onclick="insertStarter('input-step4', '${starter}')">
        ➕ "${starter}"
      </button>
    `).join("");
  }
}

function insertStarter(textareaId, starterText) {
  const textarea = document.getElementById(textareaId);
  if (!textarea) return;

  const conceptObj = MORAL_CONCEPTS.find(c => c.id === selectedConcept);
  const formattedText = starterText.replace("[개념]", conceptObj ? conceptObj.title.split(" ")[0] : "도덕적 가치");

  if (textarea.value.trim() === "") {
    textarea.value = formattedText;
  } else {
    textarea.value += "\n" + formattedText;
  }
  textarea.focus();
}

/* 5. Save Reflection Log */
function saveReflection() {
  const situation = document.getElementById("input-step1").value.trim();
  const empathy = document.getElementById("input-step2").value.trim();
  const reasoning = document.getElementById("input-step3").value.trim();
  const actionPlan = document.getElementById("input-step4").value.trim();

  if (!situation || !reasoning || !actionPlan) {
    alert("성찰 내용을 작성해 주세요! (1단계, 3단계, 4단계는 필수입니다)");
    return;
  }

  const conceptObj = MORAL_CONCEPTS.find(c => c.id === selectedConcept);

  const newLog = {
    id: Date.now(),
    date: new Date().toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric", weekday: "short" }),
    conceptId: selectedConcept,
    conceptTitle: conceptObj ? conceptObj.title : "도덕 성찰",
    conceptIcon: conceptObj ? conceptObj.icon : "🌱",
    situation: situation,
    emotions: selectedEmotions.length > 0 ? selectedEmotions.join(", ") : "감정 기록 없음",
    empathy: empathy || "작성 안 됨",
    reasoning: reasoning,
    actionPlan: actionPlan
  };

  reflectionLogs.unshift(newLog);
  localStorage.setItem("moral_reflection_logs", JSON.stringify(reflectionLogs));

  alert("🎉 성찰 일지가 성공적으로 저장되었습니다! 칭찬 뱃지를 확인해보세요.");

  // Clear Form
  document.getElementById("input-step1").value = "";
  document.getElementById("input-step2").value = "";
  document.getElementById("input-step3").value = "";
  document.getElementById("input-step4").value = "";
  selectedEmotions = [];
  document.querySelectorAll(".emotion-card").forEach(c => c.classList.remove("selected"));

  renderHistoryLogs();
  updateBadges();

  // Switch to History Tab
  document.querySelector('[data-tab="tab-history"]').click();
}

/* Render History Logs */
function renderHistoryLogs() {
  const container = document.getElementById("history-cards-container");
  if (!container) return;

  if (reflectionLogs.length === 0) {
    container.innerHTML = `
      <div class="empty-history">
        <span class="empty-icon">📝</span>
        <h3>아직 작성된 성찰 일지가 없습니다.</h3>
        <p style="margin-top: 0.5rem;">'단계별 성찰 비계' 탭에서 첫 번째 성찰 일지를 작성해보세요!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = reflectionLogs.map(log => `
    <div class="history-card">
      <div class="history-card-header">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <span style="font-size: 1.4rem;">${log.conceptIcon}</span>
          <span class="history-concept-badge">${log.conceptTitle}</span>
        </div>
        <span class="history-date">📅 ${log.date}</span>
      </div>
      <div class="history-body-grid">
        <div class="history-box">
          <div class="history-box-title">1. 있었던 상황 & 감정</div>
          <div class="history-box-content">${escapeHtml(log.situation)}</div>
          <div style="margin-top: 0.4rem; font-size: 0.85rem; color: #D97706; font-weight: 700;">
            기억나는 감정: ${escapeHtml(log.emotions)}
          </div>
        </div>
        <div class="history-box">
          <div class="history-box-title">2. 도덕적 성찰 내용</div>
          <div class="history-box-content">${escapeHtml(log.reasoning)}</div>
        </div>
      </div>
      <div class="history-box" style="margin-top: 0.8rem; background: #EBF7EE; border-left: 4px solid #3A9B67;">
        <div class="history-box-title" style="color: #236B44;">3. 앞으로의 실천 다짐</div>
        <div class="history-box-content" style="color: #1C4D31; font-weight: 700;">"${escapeHtml(log.actionPlan)}"</div>
      </div>
      <div class="history-card-actions">
        <button class="btn-sm-delete" onclick="deleteLog(${log.id})">🗑️ 삭제</button>
      </div>
    </div>
  `).join("");
}

function deleteLog(id) {
  if (confirm("정말 이 성찰 일지를 삭제할까요?")) {
    reflectionLogs = reflectionLogs.filter(log => log.id !== id);
    localStorage.setItem("moral_reflection_logs", JSON.stringify(reflectionLogs));
    renderHistoryLogs();
    updateBadges();
  }
}

/* Update Badges Unlock */
function updateBadges() {
  const container = document.getElementById("badges-grid");
  if (!container) return;

  const count = reflectionLogs.length;

  container.innerHTML = BADGES.map(badge => {
    const isUnlocked = count >= badge.requiredCount;
    return `
      <div class="badge-item ${isUnlocked ? 'unlocked' : ''}">
        <span class="badge-icon-img">${badge.icon}</span>
        <div class="badge-name">${badge.name}</div>
        <div class="badge-desc">${isUnlocked ? '✨ 해금됨!' : `${badge.requiredCount}회 작성 필요`}</div>
      </div>
    `;
  }).join("");
}

/* Floating Chatbot Toggle */
function initFloatingChatbot() {
  const floatBtn = document.getElementById("floating-chatbot-btn");
  const modal = document.getElementById("floating-chatbot-modal");
  const closeBtn = document.getElementById("close-modal-btn");

  if (!floatBtn || !modal) return;

  floatBtn.addEventListener("click", () => {
    modal.classList.toggle("open");
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  }
}

function openChatbotTabWithPrompt(promptText) {
  // Switch to Chatbot tab
  document.querySelector('[data-tab="tab-chatbot"]').click();
  
  // Notice user
  alert(`💡 챗봇 프롬프트 팁:\n"${promptText}"\n\n아래 챗봇 창에서 질문해 보세요!`);
}

function printWorksheet() {
  window.print();
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
