(() => {
  const screen = document.getElementById("screen");

  const navMenu = document.getElementById("navMenu");
  const hamburger = document.getElementById("hamburger");
  const navHome = document.getElementById("navHome");
  const navHomeLink = document.getElementById("navHomeLink");
  const navHow = document.getElementById("navHow");
  const navWords = document.getElementById("navWords");

  const DEFAULT_WORDS = [
    "apple",
    "banana",
    "orange",
    "grape",
    "pineapple",
    "mango",
    "strawberry",
    "blueberry",
    "watermelon",
    "peach",
    "pear",
    "cherry",
    "lemon",
    "lime",
    "coconut",
    "avocado",
    "tomato",
    "carrot",
    "potato",
    "onion",
    "garlic",
    "pepper",
    "broccoli",
    "lettuce",
    "spinach",
    "cabbage",
    "cucumber",
    "pumpkin",
    "corn",
    "rice",
    "bread",
    "pasta",
    "pizza",
    "burger",
    "sandwich",
    "taco",
    "burrito",
    "sushi",
    "steak",
    "chicken",
    "bacon",
    "sausage",
    "egg",
    "cheese",
    "butter",
    "milk",
    "yogurt",
    "icecream",
    "cake",
    "cookie",
    "donut",
    "muffin",
    "pancake",
    "waffle",
    "chocolate",
    "candy",
    "popcorn",
    "chips",
    "fries",
    "cereal",
    "soup",
    "salad",
    "coffee",
    "tea",
    "soda",
    "juice",
    "water",
    "smoothie",
    "milkshake",
    "beer",
    "wine",
    "bottle",
    "glass",
    "cup",
    "plate",
    "bowl",
    "spoon",
    "fork",
    "knife",
    "napkin",
    "table",
    "chair",
    "couch",
    "bed",
    "pillow",
    "blanket",
    "mattress",
    "desk",
    "shelf",
    "drawer",
    "cabinet",
    "mirror",
    "lamp",
    "clock",
    "watch",
    "calendar",
    "phone",
    "laptop",
    "computer",
    "keyboard",
    "mouse",
    "screen",
    "charger",
    "battery",
    "cable",
    "speaker",
    "headphones",
    "microphone",
    "camera",
    "printer",
    "remote",
    "television",
    "radio",
    "book",
    "notebook",
    "paper",
    "pen",
    "pencil",
    "marker",
    "eraser",
    "ruler",
    "backpack",
    "bag",
    "wallet",
    "key",
    "lock",
    "door",
    "window",
    "wall",
    "floor",
    "ceiling",
    "roof",
    "house",
    "apartment",
    "building",
    "garage",
    "elevator",
    "stairs",
    "hallway",
    "kitchen",
    "bathroom",
    "bedroom",
    "office",
    "classroom",
    "library",
    "school",
    "hospital",
    "store",
    "restaurant",
    "cafe",
    "bar",
    "gym",
    "park",
    "beach",
    "forest",
    "desert",
    "mountain",
    "river",
    "lake",
    "ocean",
    "island",
    "city",
    "village",
    "road",
    "street",
    "highway",
    "bridge",
    "tunnel",
    "car",
    "truck",
    "bus",
    "train",
    "airplane",
    "helicopter",
    "boat",
    "ship",
    "bicycle",
    "scooter",
    "skateboard",
    "motorcycle",
    "taxi",
    "subway",
    "ticket",
    "passport",
    "suitcase",
    "map",
    "compass",
    "sign",
    "signal",
    "light",
    "traffic",
    "gas",
    "engine",
    "wheel",
    "tire",
    "brake",
    "seat",
    "helmet",
    "jacket",
    "shirt",
    "pants",
    "shorts",
    "dress",
    "skirt",
    "socks",
    "shoes",
    "boots",
    "hat",
    "cap",
    "gloves",
    "scarf",
    "sunglasses",
    "belt",
    "button",
    "zipper",
    "pocket",
    "fabric",
    "cotton",
    "leather",
    "plastic",
    "metal",
    "wood",
    "glass",
    "stone",
    "sand",
    "dirt",
    "mud",
    "fire",
    "smoke",
    "ash",
    "steam",
    "ice",
    "snow",
    "rain",
    "storm",
    "wind",
    "thunder",
    "lightning",
    "cloud",
    "sky",
    "sun",
    "moon",
    "star",
    "space",
    "planet",
    "galaxy",
    "universe",
    "rocket",
    "astronaut",
    "alien",
    "robot",
    "drone",
    "machine",
    "tool",
    "hammer",
    "nail",
    "screw",
    "wrench",
    "drill",
    "saw",
    "ladder",
    "rope",
    "chain",
    "box",
    "package",
    "gift",
    "toy",
    "game",
    "puzzle",
    "card",
    "dice",
    "coin",
    "trophy",
    "medal",
    "ball",
    "bat",
    "racket",
    "net",
    "goal",
    "field",
    "court",
    "player",
    "team",
    "coach",
    "referee",
    "whistle",
    "score",
    "win",
    "lose",
    "draw",
    "run",
    "walk",
    "jump",
    "climb",
    "swim",
    "dive",
    "fly",
    "crawl",
    "sit",
    "stand",
    "sleep",
    "wake",
    "eat",
    "drink",
    "cook",
    "bake",
    "fry",
    "boil",
    "cut",
    "chop",
    "mix",
    "stir",
    "pour",
    "taste",
    "smell",
    "touch",
    "see",
    "hear",
    "think",
    "know",
    "learn",
    "teach",
    "read",
    "write",
    "draw",
    "paint",
    "build",
    "fix",
    "break",
    "open",
    "close",
    "start",
    "stop",
    "push",
    "pull",
    "throw",
    "catch",
    "hit",
    "kick",
    "roll",
    "spin",
    "shake",
    "laugh",
    "cry",
    "smile",
    "shout",
    "whisper",
    "talk",
    "listen",
    "call",
    "text",
    "watch",
    "play",
    "work",
    "rest",
    "travel",
    "drive",
    "ride",
    "explore",
    "search",
    "find",
    "hide",
    "show",
    "share",
    "give",
    "take",
    "buy",
    "sell",
    "pay",
    "save",
    "spend",
    "count",
    "measure",
    "compare",
    "choose",
    "decide",
    "plan",
    "create",
    "imagine",
    "dream",
    "remember",
    "forget",
    "hope",
    "fear",
    "love",
    "hate",
    "like",
    "dislike",
    "want",
    "need",
    "try",
    "fail",
    "succeed",
  ];

  const STORAGE_KEY = "find_the_imposter_custom_words_v1";

  const state = {
    route: "home", // home | how | words | game
    step: "welcome",
    playerCount: 4,
    names: [],
    currentNameIndex: 0,
    imposterIndex: -1,
    pair: null,
    revealIndex: 0,
    attemptsLeft: 3,
    eliminated: new Set(),
    gameOver: false,
    winner: null,
    lastResult: null,
  };

  function randInt(maxExclusive) {
    return Math.floor(Math.random() * maxExclusive);
  }

  function safeJsonParse(str, fallback) {
    try {
      return JSON.parse(str);
    } catch {
      return fallback;
    }
  }

  function normalizeWord(str) {
    return String(str ?? "")
      .trim()
      .toLowerCase()
      .replaceAll(/\s+/g, " ");
  }

  function titleize(word) {
    const w = normalizeWord(word);
    if (!w) return "";
    return w.charAt(0).toUpperCase() + w.slice(1);
  }

  function loadCustomWords() {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = safeJsonParse(raw, []);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(normalizeWord).filter(Boolean);
  }

  function saveCustomWords(words) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
  }

  function getAllWords() {
    const set = new Set();
    for (const w of DEFAULT_WORDS) set.add(normalizeWord(w));
    for (const w of loadCustomWords()) set.add(normalizeWord(w));
    return [...set].filter(Boolean);
  }

  function pickTwoDistinct(words) {
    if (words.length < 2) {
      return ["mystery", "secret"];
    }
    const a = words[randInt(words.length)];
    let b = words[randInt(words.length)];
    let guard = 0;
    while (b === a && guard < 20) {
      b = words[randInt(words.length)];
      guard += 1;
    }
    return [a, b === a ? words[(words.indexOf(a) + 1) % words.length] : b];
  }

  function pickPair() {
    const words = getAllWords();
    const [common, imposter] = pickTwoDistinct(words);
    return {
      common: titleize(common),
      imposter: titleize(imposter),
      hint: "Both are everyday words.",
    };
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setStep(step) {
    state.step = step;
    render();
  }

  function setRoute(route, step) {
    state.route = route;
    if (typeof step === "string") state.step = step;
    render();
  }

  function closeMenu() {
    if (!navMenu || !hamburger) return;
    navMenu.dataset.open = "false";
    hamburger.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (!navMenu || !hamburger) return;
    const next = navMenu.dataset.open !== "true";
    navMenu.dataset.open = next ? "true" : "false";
    hamburger.setAttribute("aria-expanded", next ? "true" : "false");
  }

  function initNav() {
    if (hamburger) hamburger.addEventListener("click", toggleMenu);

    const goHome = () => {
      closeMenu();
      resetGame(false);
      setRoute("home", "welcome");
    };

    if (navHome) navHome.addEventListener("click", goHome);
    if (navHomeLink) navHomeLink.addEventListener("click", goHome);

    if (navHow)
      navHow.addEventListener("click", () => {
        closeMenu();
        setRoute("how", "how");
      });

    if (navWords)
      navWords.addEventListener("click", () => {
        closeMenu();
        setRoute("words", "words");
      });

    document.addEventListener("click", (e) => {
      if (!navMenu || navMenu.dataset.open !== "true") return;
      if (e.target === hamburger) return;
      if (navMenu.contains(e.target)) return;
      closeMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  function resetGame(resetSetup = true) {
    state.route = "home";
    state.step = "welcome";
    if (resetSetup) {
      state.playerCount = 4;
      state.names = [];
      state.currentNameIndex = 0;
    }
    state.imposterIndex = -1;
    state.pair = null;
    state.revealIndex = 0;
    state.attemptsLeft = 3;
    state.eliminated = new Set();
    state.gameOver = false;
    state.winner = null;
    state.lastResult = null;
  }

  function computeAttempts(playerCount) {
    if (playerCount > 6) return 3;
    if (playerCount > 4) return 2;
    return 1;
  }

  function startGame() {
    state.pair = pickPair();
    state.imposterIndex = randInt(state.names.length);
    state.revealIndex = 0;
    state.attemptsLeft = computeAttempts(state.names.length);
    state.eliminated = new Set();
    state.gameOver = false;
    state.winner = null;
    state.lastResult = null;
    setRoute("game", "revealIntro");
  }

  function getWordForPlayer(index) {
    if (!state.pair) return "";
    return index === state.imposterIndex ? state.pair.imposter : state.pair.common;
  }

  function remainingPlayers() {
    const arr = [];
    for (let i = 0; i < state.names.length; i++) {
      if (!state.eliminated.has(i)) arr.push(i);
    }
    return arr;
  }

  function aliveCount() {
    return remainingPlayers().length;
  }

  function endGame(winner) {
    state.gameOver = true;
    state.winner = winner; // "civilians" | "imposter"
    setStep("gameOver");
  }

  function attemptEliminate(index) {
    if (state.gameOver) return;
    if (state.eliminated.has(index)) return;

    state.attemptsLeft -= 1;

    if (index === state.imposterIndex) {
      state.lastResult = {
        type: "success",
        message: "You caught the imposter.",
      };
      endGame("civilians");
      return;
    }

    state.eliminated.add(index);
    state.lastResult = {
      type: "warning",
      message: `${state.names[index]} was not the imposter.`,
    };

    if (state.attemptsLeft <= 0) {
      endGame("imposter");
      return;
    }

    // Optional: if too few players remain, imposter effectively wins.
    if (aliveCount() <= 2) {
      endGame("imposter");
      return;
    }

    setStep("eliminate");
  }

  function render() {
    if (state.route === "how") {
      renderHowToPlay();
      return;
    }
    if (state.route === "words") {
      renderWords();
      return;
    }

    switch (state.step) {
      case "welcome":
        renderWelcome();
        break;
      case "playerCount":
        renderPlayerCount();
        break;
      case "names":
        renderNames();
        break;
      case "revealIntro":
        renderRevealIntro();
        break;
      case "reveal":
        renderReveal();
        break;
      case "revealDone":
        renderRevealDone();
        break;
      case "eliminate":
        renderEliminate();
        break;
      case "gameOver":
        renderGameOver();
        break;
      default:
        renderWelcome();
        break;
    }
  }

  function renderWelcome() {
    screen.innerHTML = `
      <div class="vStack">
        <div class="hero">
          <div class="vStack">
            <div class="title nightTitle">Night Games: Find the Imposter</div>
            <div class="subtitle">Beach air, bonfire heat, and one liar hiding in plain sight.</div>
            <div class="ruleCard">Rule: If the imposter wins, civilians drink. Otherwise, the imposter drinks.</div>

            <div>
              <div class="label">Players</div>
              <input class="input" id="count" type="number" min="3" max="12" value="${state.playerCount}" />
            </div>

            <div class="pill">
              <span>Chances to guess:</span>
              <strong id="chances">${computeAttempts(state.playerCount)}</strong>
            </div>

            <div class="hStack">
              <button class="btn btnPrimary" id="startBtn">Start Game</button>
            </div>

            <div class="small">Keep your word secret. Ask questions that expose liars.</div>
          </div>

          <div class="heroImageWrap" aria-hidden="true">
            <img class="heroImage" src="assets/hero.jpg" alt="Night games" loading="eager" />
          </div>
        </div>
      </div>
    `;

    const countInput = document.getElementById("count");
    const chancesEl = document.getElementById("chances");

    const syncCount = () => {
      const n = Number.parseInt(countInput.value, 10);
      if (!Number.isFinite(n)) return;
      state.playerCount = n;
      chancesEl.textContent = String(computeAttempts(n));
    };

    countInput.addEventListener("input", syncCount);

    document.getElementById("startBtn").addEventListener("click", () => {
      const n = Number.parseInt(countInput.value, 10);
      if (!Number.isFinite(n) || n < 3 || n > 12) {
        alert("Please choose a number of players between 3 and 12.");
        return;
      }

      state.playerCount = n;
      state.names = new Array(n).fill("");
      state.currentNameIndex = 0;
      setRoute("game", "names");
    });
  }

  function renderPlayerCount() {
    screen.innerHTML = `
      <div class="vStack">
        <div class="title">Players</div>
        <div class="subtitle">Enter how many people are playing.</div>

        <div>
          <div class="label">Number of players (3 to 12)</div>
          <input class="input" id="count" type="number" min="3" max="12" value="${state.playerCount}" />
        </div>

        <div class="hStack">
          <button class="btn" id="back">Back</button>
          <button class="btn btnPrimary" id="next">Next</button>
        </div>
      </div>
    `;

    document.getElementById("back").addEventListener("click", () => setStep("welcome"));
    document.getElementById("next").addEventListener("click", () => {
      const raw = document.getElementById("count").value;
      const n = Number.parseInt(raw, 10);

      if (!Number.isFinite(n) || n < 3 || n > 12) {
        alert("Please choose a number of players between 3 and 12.");
        return;
      }

      state.playerCount = n;
      state.names = new Array(n).fill("");
      state.currentNameIndex = 0;
      setRoute("game", "names");
    });
  }

  function renderNames() {
    const i = state.currentNameIndex;
    const n = state.playerCount;

    const existingNames = state.names
      .map((nm, idx) => {
        const label = nm?.trim() ? escapeHtml(nm.trim()) : `Player ${idx + 1}`;
        const status = nm?.trim() ? "" : " <span class=\"small\">(not set)</span>";
        return `<div class="choiceRow"><div><strong>${label}</strong>${status}</div></div>`;
      })
      .join("");

    screen.innerHTML = `
      <div class="vStack">
        <div class="title">Enter names</div>
        <div class="subtitle">Type each player’s name. You can keep defaults if you want.</div>

        <div class="grid2">
          <div>
            <div class="label">Player ${i + 1} of ${n}</div>
            <input class="input" id="name" type="text" maxlength="22" value="${escapeHtml(state.names[i] || "")}" placeholder="e.g. Alex" />
            <div class="small">Press Enter to save and continue.</div>
          </div>
          <div>
            <div class="label">Current list</div>
            <div class="list">${existingNames}</div>
          </div>
        </div>

        <div class="hStack">
          <button class="btn" id="back">Back</button>
          <button class="btn" id="prev" ${i === 0 ? "disabled" : ""}>Previous</button>
          <button class="btn btnPrimary" id="saveNext">${i === n - 1 ? "Finish setup" : "Save & next"}</button>
        </div>
      </div>
    `;

    const nameInput = document.getElementById("name");
    nameInput.focus();

    const save = () => {
      const raw = nameInput.value.trim();
      state.names[i] = raw ? raw : `Player ${i + 1}`;
    };

    const goNext = () => {
      save();
      if (state.currentNameIndex < n - 1) {
        state.currentNameIndex += 1;
        render();
      } else {
        startGame();
      }
    };

    document.getElementById("back").addEventListener("click", () => setRoute("home", "welcome"));
    document.getElementById("prev").addEventListener("click", () => {
      save();
      state.currentNameIndex = Math.max(0, state.currentNameIndex - 1);
      render();
    });

    document.getElementById("saveNext").addEventListener("click", goNext);
    nameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") goNext();
    });
  }

  function renderRevealIntro() {
    screen.innerHTML = `
      <div class="vStack">
        <div class="title">Secret word reveal</div>
        <div class="subtitle">
          Each player will look at the screen <strong>one at a time</strong>.
          Tap “I’m ready” only when the correct person is holding the device.
        </div>

        <div class="pill">
          <span>Attempts:</span>
          <strong>${state.attemptsLeft}</strong>
        </div>

        <div class="hStack">
          <button class="btn" id="reset">Reset</button>
          <button class="btn btnPrimary" id="ready">I’m ready</button>
        </div>
      </div>
    `;

    document.getElementById("reset").addEventListener("click", () => {
      if (confirm("Reset the game setup?")) {
        resetGame();
        render();
      }
    });

    document.getElementById("ready").addEventListener("click", () => setStep("reveal"));
  }

  function renderReveal() {
    const idx = state.revealIndex;
    const player = state.names[idx];

    screen.innerHTML = `
      <div class="vStack">
        <div class="title">${escapeHtml(player)}’s turn</div>
        <div class="subtitle">Make sure nobody else is looking.</div>

        <div class="hr"></div>

        <div class="bigWord" id="word">••••••••</div>
        <div class="small" id="hint">Hint: ${escapeHtml(state.pair?.hint || "")}</div>

        <div class="hStack">
          <button class="btn btnPrimary" id="show">Show my word</button>
          <button class="btn" id="hide">Hide</button>
        </div>

        <div class="hStack">
          <button class="btn" id="next">${idx === state.names.length - 1 ? "Done" : "Next player"}</button>
        </div>
      </div>
    `;

    const wordEl = document.getElementById("word");
    const showBtn = document.getElementById("show");
    const hideBtn = document.getElementById("hide");
    const nextBtn = document.getElementById("next");

    const hide = () => {
      wordEl.textContent = "••••••••";
    };

    const show = () => {
      wordEl.textContent = getWordForPlayer(idx);
    };

    hide();

    showBtn.addEventListener("click", show);
    hideBtn.addEventListener("click", hide);

    nextBtn.addEventListener("click", () => {
      hide();
      if (state.revealIndex < state.names.length - 1) {
        state.revealIndex += 1;
        render();
      } else {
        setStep("revealDone");
      }
    });
  }

  function renderRevealDone() {
    screen.innerHTML = `
      <div class="vStack">
        <div class="title">Discussion time</div>
        <div class="subtitle">
          Talk as a group. Ask questions. When you’re ready, start eliminating.
        </div>

        <div class="pill">
          <span>Attempts left:</span>
          <strong>${state.attemptsLeft}</strong>
        </div>

        <div class="hStack">
          <button class="btn" id="revealAgain">Re-reveal words</button>
          <button class="btn btnPrimary" id="startElim">Start elimination</button>
        </div>

        <div class="small">Note: Re-reveal is helpful if someone forgot their word.</div>
      </div>
    `;

    document.getElementById("revealAgain").addEventListener("click", () => {
      state.revealIndex = 0;
      setStep("revealIntro");
    });

    document.getElementById("startElim").addEventListener("click", () => {
      state.lastResult = null;
      setStep("eliminate");
    });
  }

  function renderEliminate() {
    const alive = remainingPlayers();

    const attemptsLine = `<div class="attemptWarning">Civilians have <strong>${state.attemptsLeft}</strong> attempt${state.attemptsLeft === 1 ? "" : "s"} left.</div>`;

    const resultBanner =
      state.lastResult?.type === "success"
        ? `<div class="success">${escapeHtml(state.lastResult.message)}</div>`
        : state.lastResult?.type === "warning"
          ? `<div class="warning">${escapeHtml(state.lastResult.message)}</div>`
          : "";

    const options = alive
      .map((idx) => {
        const name = escapeHtml(state.names[idx]);
        return `
          <div class="choiceRow">
            <div><strong>${name}</strong></div>
            <button class="btn btnDanger" data-elim="${idx}">Eliminate</button>
          </div>
        `;
      })
      .join("");

    screen.innerHTML = `
      <div class="vStack">
        <div class="title">Elimination</div>
        <div class="subtitle">Choose who you want to eliminate (group decision).</div>

        ${resultBanner}

        ${attemptsLine}

        <div class="pill">
          <span>Attempts left:</span>
          <strong>${state.attemptsLeft}</strong>
        </div>

        <div class="hr"></div>

        <div class="list">${options}</div>

        <div class="hStack">
          <button class="btn" id="reset">Reset</button>
        </div>
      </div>
    `;

    for (const btn of screen.querySelectorAll("button[data-elim]")) {
      btn.addEventListener("click", () => {
        const idx = Number.parseInt(btn.getAttribute("data-elim"), 10);
        if (!Number.isFinite(idx)) return;

        if (!confirm(`Eliminate ${state.names[idx]}?`)) return;
        attemptEliminate(idx);
      });
    }

    document.getElementById("reset").addEventListener("click", () => {
      if (confirm("Reset the game setup?")) {
        resetGame();
        render();
      }
    });
  }

  function renderGameOver() {
    const imposterName = state.names[state.imposterIndex];
    const civWord = state.pair?.common ?? "";
    const impWord = state.pair?.imposter ?? "";
    const totalAttempts = computeAttempts(state.names.length);

    const title = state.winner === "civilians" ? "Civilians win" : "Imposter wins";
    const banner =
      state.winner === "civilians"
        ? `<div class="success">You caught the imposter in time.</div>`
        : `<div class="warning">The imposter survived ${totalAttempts} attempt${totalAttempts === 1 ? "" : "s"}.</div>`;

    screen.innerHTML = `
      <div class="vStack">
        <div class="title">${title}</div>
        ${banner}

        <div class="hr"></div>

        <div class="subtitle">Reveal:</div>
        <div class="list">
          <div class="choiceRow"><div><strong>Imposter</strong></div><div>${escapeHtml(imposterName)}</div></div>
          <div class="choiceRow"><div><strong>Civilians’ word</strong></div><div>${escapeHtml(civWord)}</div></div>
          <div class="choiceRow"><div><strong>Imposter’s word</strong></div><div>${escapeHtml(impWord)}</div></div>
        </div>

        <div class="hStack">
          <button class="btn" id="playAgain">Play again</button>
          <button class="btn btnPrimary" id="newWords">New round (same players)</button>
        </div>
      </div>
    `;

    document.getElementById("playAgain").addEventListener("click", () => {
      resetGame();
      render();
    });

    document.getElementById("newWords").addEventListener("click", () => {
      // same players, new random pair & imposter
      startGame();
    });
  }

  function renderHowToPlay() {
    screen.innerHTML = `
      <div class="vStack">
        <div class="title">How to play</div>
        <div class="subtitle">
          Pass the device around. Each player privately sees a secret word.
          One player is the imposter and gets a different word.
        </div>

        <div class="hr"></div>

        <div class="list">
          <div class="choiceRow"><div><strong>1) Setup</strong></div><div class="small">Choose players, enter names.</div></div>
          <div class="choiceRow"><div><strong>2) Reveal</strong></div><div class="small">Each player taps “Show my word” once.</div></div>
          <div class="choiceRow"><div><strong>3) Talk</strong></div><div class="small">Ask questions. Imposter tries to blend in.</div></div>
          <div class="choiceRow"><div><strong>4) Eliminate</strong></div><div class="small">You have limited chances to guess.</div></div>
        </div>

        <div class="warning">Pro tip: Avoid yes/no questions. Ask for examples, places, and actions.</div>

        <div class="hStack">
          <button class="btn btnPrimary" id="goHome">Home</button>
        </div>
      </div>
    `;

    document.getElementById("goHome").addEventListener("click", () => {
      setRoute("home", "welcome");
    });
  }

  function renderWords() {
    const all = getAllWords();
    const custom = loadCustomWords();

    const rows = all
      .slice()
      .sort((a, b) => a.localeCompare(b))
      .map((w) => {
        return `
          <div class="choiceRow">
            <div><strong>${escapeHtml(titleize(w))}</strong></div>
          </div>
        `;
      })
      .join("");

    screen.innerHTML = `
      <div class="vStack">
        <div class="title">Add Words</div>
        <div class="subtitle">View existing words and add new ones. Custom words are saved on this device.</div>

        <div class="pill"><span>Total words:</span> <strong>${all.length}</strong> <span class="small">(Custom: ${custom.length})</span></div>

        <div class="hr"></div>

        <div class="grid2">
          <div class="vStack">
            <div>
              <div class="label">Word</div>
              <input class="input" id="wWord" type="text" maxlength="28" placeholder="e.g. Pineapple" />
            </div>

            <div class="hStack">
              <button class="btn btnPrimary" id="addWord">Add</button>
              <button class="btn" id="goHome">Home</button>
            </div>
          </div>

          <div class="vStack">
            <div class="label">All words</div>
            <div class="list" style="max-height: 420px; overflow: auto; padding-right: 4px;">${rows}</div>
          </div>
        </div>
      </div>
    `;

    document.getElementById("goHome").addEventListener("click", () => {
      setRoute("home", "welcome");
    });

    document.getElementById("addWord").addEventListener("click", () => {
      const word = normalizeWord(document.getElementById("wWord").value);
      if (!word) {
        alert("Please enter a word.");
        return;
      }

      const existingAll = new Set(getAllWords().map(normalizeWord));
      if (existingAll.has(word)) {
        alert("That word already exists.");
        return;
      }

      const nextCustom = [...new Set([...loadCustomWords(), word])];
      saveCustomWords(nextCustom);
      render();
    });
  }

  // Boot
  initNav();
  render();
})();
