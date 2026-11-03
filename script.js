
const questions = [
  // SEKTOR 01 – MONITORY
  {
    category: "MONITORY",
    type: "choice",
    title: "Kdo sestrojil první katodovou trubici v roce 1897?",
    options: [
      "Karl Ferdinand Braun",
      "George Harry Heilmeier",
      "Kálman Tihanyi"
    ],
    answer: 0,
    explanation: "Karl Ferdinand Braun byl německý fyzik, který v roce 1897 vytvořil první katodovou trubici."
  },
  {
    category: "MONITORY",
    type: "boolean",
    title: "První barevná vakuová obrazovka vznikla v roce 1954.",
    options: ["Pravda", "Nepravda"],
    answer: 0,
    explanation: "Pravda. První barevná vakuová obrazovka se podle prezentace objevila v roce 1954."
  },
  {
    category: "MONITORY",
    type: "choice",
    title: "Co znamená zkratka CRT?",
    options: [
      "Crystal Resolution Technology",
      "Cathode Ray Tube",
      "Color Radiation Television"
    ],
    answer: 1,
    explanation: "CRT znamená Cathode Ray Tube, česky katodová neboli vakuová obrazovka."
  },
  {
    category: "MONITORY",
    type: "choice",
    title: "Kdo v roce 1936 popsal princip plazmové televize?",
    options: [
      "Ching Wan Tang",
      "Friedrich Richard Reinitzer",
      "Kálman Tihanyi"
    ],
    answer: 2,
    explanation: "Maďarský fyzik Kálman Tihanyi popsal princip plazmové televize v roce 1936."
  },
  {
    category: "MONITORY",
    type: "boolean",
    title: "LCD znamená Liquid Crystal Display.",
    options: ["Pravda", "Nepravda"],
    answer: 0,
    explanation: "Pravda. LCD je displej z tekutých krystalů."
  },

  // SEKTOR 02 – TISKÁRNY
  {
    category: "TISKÁRNY",
    type: "choice",
    title: "Která společnost uvedla v roce 1970 na trh první jehličkovou tiskárnu?",
    options: [
      "Xerox",
      "Centronics",
      "Canon"
    ],
    answer: 1,
    explanation: "Společnost Centronics uvedla v roce 1970 na trh první jehličkovou tiskárnu."
  },
  {
    category: "TISKÁRNY",
    type: "boolean",
    title: "Jehličkové tiskárny dosáhly vrcholu popularity v 80. letech.",
    options: ["Pravda", "Nepravda"],
    answer: 0,
    explanation: "Pravda. V 90. letech začal jejich úpadek kvůli nástupu inkoustových a laserových tiskáren."
  },
  {
    category: "TISKÁRNY",
    type: "choice",
    title: "Kdo přišel ve společnosti Canon s myšlenkou bublinkového inkoustového tisku?",
    options: [
      "Ichiro Endo",
      "Gary Starkweather",
      "Robert Howard"
    ],
    answer: 0,
    explanation: "Ichiro Endo z Canonu přišel s myšlenkou vytvořit kapku inkoustu zahřátím a vznikem malé bubliny."
  },
  {
    category: "TISKÁRNY",
    type: "choice",
    title: "Kdo vynalezl první laserovou tiskárnu v roce 1969?",
    options: [
      "John Vaught",
      "Robert Howard",
      "Gary Starkweather"
    ],
    answer: 2,
    explanation: "Gary Starkweather, americký inženýr ze společnosti Xerox, vynalezl první laserovou tiskárnu v roce 1969."
  },
  {
    category: "TISKÁRNY",
    type: "boolean",
    title: "HP LaserJet byla představena v roce 1984 jako první cenově dostupná stolní laserová tiskárna.",
    options: ["Pravda", "Nepravda"],
    answer: 0,
    explanation: "Pravda. Společnost Hewlett-Packard představila model HP LaserJet v roce 1984."
  },

  // SEKTOR 03 – REPRODUKTORY A OSTATNÍ
  {
    category: "ZVUK",
    type: "choice",
    title: "Kdo si v roce 1874 patentoval princip měniče s pohyblivou cívkou?",
    options: [
      "Alexander Graham Bell",
      "Werner von Siemens",
      "Gary Starkweather"
    ],
    answer: 1,
    explanation: "Werner von Siemens byl německý elektrotechnik, který si v roce 1874 patentoval tento princip."
  },
  {
    category: "ZVUK",
    type: "boolean",
    title: "Alexander Graham Bell a jeho kolegové vyvinuli funkční reproduktor v roce 1898.",
    options: ["Pravda", "Nepravda"],
    answer: 0,
    explanation: "Pravda. V roce 1898 vyvinuli funkční reproduktor pro zesílení zvuku telefonu."
  },
  {
    category: "ZVUK",
    type: "choice",
    title: "Co začaly Bell Labs vyvíjet v roce 1923?",
    options: [
      "První laserovou tiskárnu",
      "Kompletní systémy pro záznam a reprodukci hudby",
      "První LCD monitor"
    ],
    answer: 1,
    explanation: "Bell Labs zahájily v roce 1923 vývoj kompletních systémů pro záznam a reprodukci hudby."
  },
  {
    category: "ZVUK",
    type: "boolean",
    title: "Základní architektura reproduktoru byla stanovena v roce 1925.",
    options: ["Pravda", "Nepravda"],
    answer: 0,
    explanation: "Pravda. Prezentace uvádí rok 1925 jako rok stanovení základní architektury reproduktoru."
  },
  {
    category: "MONITORY",
    type: "choice",
    title: "Kdo společně v roce 1987 vyvinul první dvouvrstvou strukturu OLED?",
    options: [
      "Ching Wan Tang a Steve Van Slyke",
      "Donald Bitzer a Hiram Slottow",
      "Ichiro Endo a John Vaught"
    ],
    answer: 0,
    explanation: "Ching Wan Tang a Steve Van Slyke vyvinuli v roce 1987 první dvouvrstvou strukturu OLED."
  }
];

const groupNames = ["SEKTOR 01", "SEKTOR 02", "SEKTOR 03"];

const groupDescriptions = [
  "Základy, tiskárny a zobrazovací zařízení",
  "Monitory, zvuk a technologie tisku",
  "Pokročilé znalosti výstupních periferií"
];

let currentQuestion = 0;
let currentGroup = 0;

let answers = Array(questions.length).fill(null);
let selectedAnswers = Array(questions.length).fill(null);

const $ = id => document.getElementById(id);

function getGroup(index) {
  return Math.floor(index / 5);
}

function getGroupScore(group) {
  return answers.reduce((score, answer, index) => {
    if (getGroup(index) !== group || answer === null) return score;
    return score + (answer ? 1 : -1);
  }, 0);
}

function getGroupCorrect(group) {
  return answers.filter((answer, index) =>
    getGroup(index) === group && answer === true
  ).length;
}

function getGroupWrong(group) {
  return answers.filter((answer, index) =>
    getGroup(index) === group && answer === false
  ).length;
}

function getTotalAnswered() {
  return answers.filter(answer => answer !== null).length;
}

// VYKRESLENÍ OTÁZKY

function renderQuestion() {
  const question = questions[currentQuestion];
  const group = getGroup(currentQuestion);
  const questionInGroup = currentQuestion % 5 + 1;

  $("question-card").hidden = false;
  $("finish-panel").hidden = true;

  $("group-name").textContent = groupNames[group];
  $("group-description").textContent = groupDescriptions[group];
  $("group-count").textContent = `${questionInGroup} / 5`;
  $("group-fill").style.width = `${questionInGroup * 20}%`;

  $("question-category").textContent = question.category;
  $("question-number").textContent =
    String(currentQuestion + 1).padStart(2, "0");

  $("question-title").textContent = question.title;

  $("question-description").textContent =
    question.type === "boolean"
      ? "Rozhodni, zda je následující tvrzení pravdivé."
      : "Vyber jednu správnou odpověď.";

  $("question-type").textContent =
    question.type === "boolean" ? "PRAVDA / NEPRAVDA" : "VÝBĚR ODPOVĚDI";

  $("question-symbol").textContent =
    question.type === "boolean" ? "✓ / ✕" : "?";

  renderOptions(question);
  renderAnswerPanel(question);
  renderNavigation();
  updateScore();
}

// MOŽNOSTI A, B, C

function renderOptions(question) {
  const container = $("options");
  container.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = option;

    button.append(letter, text);

    if (answers[currentQuestion] !== null) {
      button.disabled = true;

      if (index === question.answer) {
        button.classList.add("correct");
      }

      if (
        index === selectedAnswers[currentQuestion] &&
        answers[currentQuestion] === false
      ) {
        button.classList.add("wrong");
      }
    } else {
      button.addEventListener("click", () => selectAnswer(index));
    }

    container.appendChild(button);
  });
}

// VYHODNOCENÍ ODPOVĚDI

function selectAnswer(index) {
  if (answers[currentQuestion] !== null) return;

  const question = questions[currentQuestion];
  const correct = index === question.answer;

  selectedAnswers[currentQuestion] = index;
  answers[currentQuestion] = correct;

  renderOptions(question);
  renderAnswerPanel(question);
  renderNavigation();
  updateScore();
}

function renderAnswerPanel(question) {
  const panel = $("answer-panel");
  const answered = answers[currentQuestion] !== null;

  panel.hidden = !answered;

  if (!answered) return;

  const correct = answers[currentQuestion];

  $("answer-result").textContent = correct
    ? "SPRÁVNÁ ODPOVĚĎ // +1 BOD"
    : "NESPRÁVNÁ ODPOVĚĎ // −1 BOD";

  $("answer-explanation").textContent = question.explanation;

  $("question-status").textContent = correct
    ? "PRAVDA"
    : "NEPRAVDA";

  const indicator = panel.querySelector(".answer-indicator");

  indicator.style.background = correct
    ? "var(--green)"
    : "var(--red)";

  panel.style.background = correct
    ? "#1c211a"
    : "#2b1c1c";

  $("answer-result").style.color = correct
    ? "var(--green)"
    : "var(--red)";
}

// NAVIGACE

function renderNavigation() {
  const list = $("question-list");
  list.innerHTML = "";

  questions.forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "question-nav-item";
    button.textContent = String(index + 1).padStart(2, "0");

    if (index === currentQuestion) {
      button.classList.add("active");
    }

    if (answers[index] === true) {
      button.classList.add("correct");
    } else if (answers[index] === false) {
      button.classList.add("wrong");
    }

    if (getGroup(index) > currentGroup) {
      button.disabled = true;
    } else {
      button.addEventListener("click", () => {
        currentQuestion = index;
        renderQuestion();
      });
    }

    list.appendChild(button);
  });

  $("nav-count").textContent =
    `${getTotalAnswered()} / ${questions.length}`;

  $("previous-button").disabled =
    currentQuestion === currentGroup * 5;

  $("next-button").disabled =
    answers[currentQuestion] === null;

  $("position-label").textContent =
    `${currentQuestion + 1} / ${questions.length}`;
}

function previousQuestion() {
  if (currentQuestion > currentGroup * 5) {
    currentQuestion--;
    renderQuestion();
  }
}

function nextQuestion() {
  if (answers[currentQuestion] === null) return;

  const lastQuestion = currentGroup * 5 + 4;

  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    renderQuestion();
  } else {
    showGroupFinish();
  }
}

// SKÓRE

function updateScore() {
  const score = getGroupScore(currentGroup);
  const correct = getGroupCorrect(currentGroup);
  const wrong = getGroupWrong(currentGroup);
  const answered = correct + wrong;

  $("score").textContent = score;
  $("correct-count").textContent = correct;
  $("wrong-count").textContent = wrong;
  $("score-fill").style.width = `${answered * 20}%`;
  $("score-caption").textContent = `${answered} / 5 OTÁZEK`;
}

// VÝSLEDEK JEDNOHO SEKTORU

function showGroupFinish() {
  $("question-card").hidden = true;
  $("finish-panel").hidden = false;

  const score = getGroupScore(currentGroup);
  const correct = getGroupCorrect(currentGroup);
  const wrong = getGroupWrong(currentGroup);

  $("finish-title").textContent = `${groupNames[currentGroup]} DOKONČEN`;
  $("finish-text").textContent =
    `Výsledek sektoru: ${score} bodů. Správné odpovědi: ${correct}, nesprávné odpovědi: ${wrong}.`;

  $("final-score").textContent = score;
  $("final-correct").textContent = correct;
  $("final-percent").textContent =
    `${Math.round(correct / 5 * 100)} %`;

  $("group-results").innerHTML = "";

  const button = $("restart-button");

  if (currentGroup < 2) {
    button.textContent = `POKRAČOVAT DO ${groupNames[currentGroup + 1]} →`;
    button.onclick = nextGroup;
  } else {
    showFinalResults();
  }
}

function nextGroup() {
  if (currentGroup >= 2) return;

  currentGroup++;
  currentQuestion = currentGroup * 5;

  renderQuestion();
}

// KONEČNÉ POŘADÍ

function showFinalResults() {
  const results = [0, 1, 2].map(group => ({
    group,
    score: getGroupScore(group),
    correct: getGroupCorrect(group),
    wrong: getGroupWrong(group)
  }));

  results.sort((a, b) => b.score - a.score);

  const winner = results[0];

  $("finish-title").textContent = "KVÍZ DOKONČEN";

  $("finish-text").textContent =
    `Vítězem se stává ${groupNames[winner.group]} se ziskem ${winner.score} bodů!`;

  $("final-score").textContent = winner.score;
  $("final-correct").textContent = winner.correct;
  $("final-percent").textContent =
    `${Math.round(winner.correct / 5 * 100)} %`;

  const container = $("group-results");
  container.innerHTML = "";

  results.forEach((result, index) => {
    const row = document.createElement("div");
    row.className = "group-result";

    const place = document.createElement("span");
    place.className = "group-result-place";
    place.textContent = ["🥇 1. MÍSTO", "🥈 2. MÍSTO", "🥉 3. MÍSTO"][index];

    const name = document.createElement("span");
    name.className = "group-result-name";
    name.textContent = groupNames[result.group];

    const score = document.createElement("strong");
    score.className = "group-result-score";
    score.textContent = `${result.score} bodů`;

    row.append(place, name, score);
    container.appendChild(row);
  });

  if (results[0].score === results[1].score) {
    const tie = document.createElement("p");
    tie.className = "group-result-tie";
    tie.textContent = "Na prvním místě je remíza!";
    container.appendChild(tie);
  }

  $("restart-button").textContent = "HRÁT ZNOVU";
  $("restart-button").onclick = restartQuiz;
}

// RESTART

function restartQuiz() {
  currentQuestion = 0;
  currentGroup = 0;

  answers = Array(questions.length).fill(null);
  selectedAnswers = Array(questions.length).fill(null);

  renderQuestion();
}

// TLAČÍTKA

$("previous-button").addEventListener("click", previousQuestion);
$("next-button").addEventListener("click", nextQuestion);
$("restart-button").addEventListener("click", restartQuiz);

// SPUŠTĚNÍ

renderQuestion();
