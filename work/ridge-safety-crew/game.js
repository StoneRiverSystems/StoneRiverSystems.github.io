const POSE = {
  wave: ["img/ridge-wave.webp", "Ridge the buck waving"],
  hips: ["img/ridge-hands-on-hips.webp", "Ridge standing proud with hands on his hips"],
  run: ["img/ridge-run.webp", "Ridge running"],
  wrench: ["img/ridge-wrench.webp", "Ridge leaning on a big wrench"]
};
const FACE_YAY = ["img/ridge-laugh.webp", "img/ridge-head-wink.webp", "img/ridge-head-grin.webp"];
const FACE_OOPS = "img/ridge-head-surprised.webp";

/* ---------- Drawings for Part 2 (ink style) ---------- */
const S = 'stroke="#1E1A17" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"';
const ART = {
  pole: `<svg viewBox="0 0 240 220" role="img" aria-label="A wooden pole with wires and a gray can on it">
    <path d="M0,210 H240" ${S} fill="none"/>
    <path d="M0,70 Q40,92 74,58 M166,58 Q200,92 240,70 M74,58 Q120,84 166,58" ${S} fill="none"/>
    <rect x="112" y="24" width="16" height="186" fill="#A47148" ${S}/>
    <rect x="58" y="48" width="124" height="12" rx="3" fill="#A47148" ${S}/>
    <rect x="68" y="38" width="12" height="12" rx="3" fill="#E8E8E8" ${S}/><rect x="114" y="14" width="12" height="12" rx="3" fill="#E8E8E8" ${S}/><rect x="160" y="38" width="12" height="12" rx="3" fill="#E8E8E8" ${S}/>
    <rect x="132" y="88" width="38" height="50" rx="8" fill="#B8C0C6" ${S}/>
    <path d="M151,88 V64" ${S} fill="none"/></svg>`,
  meter: `<svg viewBox="0 0 240 220" role="img" aria-label="A box with round dials and a yellow pipe on the side of a house">
    <rect x="0" y="0" width="240" height="200" fill="#F1E6CF"/>
    <path d="M0,40 H240 M0,80 H240 M0,120 H240 M0,160 H240" stroke="#D9C9A6" stroke-width="3"/>
    <path d="M0,200 H240" ${S} fill="none"/>
    <path d="M80,200 V160 H100 M160,120 H190 V0" stroke="#1E1A17" stroke-width="20" fill="none"/>
    <path d="M80,200 V160 H100 M160,120 H190 V0" stroke="#F2C230" stroke-width="12" fill="none"/>
    <rect x="96" y="80" width="68" height="96" rx="12" fill="#C9CFD3" ${S}/>
    <rect x="106" y="92" width="48" height="44" rx="6" fill="#fff" ${S}/>
    <circle cx="118" cy="106" r="7" fill="#fff" stroke="#1E1A17" stroke-width="3"/><circle cx="142" cy="106" r="7" fill="#fff" stroke="#1E1A17" stroke-width="3"/>
    <circle cx="118" cy="124" r="7" fill="#fff" stroke="#1E1A17" stroke-width="3"/><circle cx="142" cy="124" r="7" fill="#fff" stroke="#1E1A17" stroke-width="3"/>
    <path d="M118,106 l4,-4 M142,106 l-4,-4 M118,124 l4,4 M142,124 l4,-3" stroke="#1E1A17" stroke-width="2.5"/></svg>`,
  hydrant: `<svg viewBox="0 0 240 220" role="img" aria-label="A short red metal post with caps on its sides">
    <path d="M0,206 H240" ${S} fill="none"/>
    <rect x="82" y="188" width="76" height="18" rx="4" fill="#D7372B" ${S}/>
    <rect x="94" y="96" width="52" height="92" fill="#D7372B" ${S}/>
    <path d="M90,98 Q120,52 150,98 Z" fill="#D7372B" ${S}/>
    <rect x="112" y="54" width="16" height="12" rx="2" fill="#D7372B" ${S}/>
    <rect x="68" y="124" width="26" height="22" rx="4" fill="#D7372B" ${S}/><rect x="146" y="124" width="26" height="22" rx="4" fill="#D7372B" ${S}/>
    <circle cx="120" cy="146" r="13" fill="#E8584C" ${S}/>
    <path d="M86,102 H154" ${S} fill="none"/></svg>`,
  transformer: `<svg viewBox="0 0 240 220" role="img" aria-label="A big green metal box sitting on the grass">
    <rect x="0" y="182" width="240" height="38" fill="#9CCB7A"/>
    <path d="M0,182 H240" ${S} fill="none"/>
    <rect x="40" y="176" width="160" height="14" rx="3" fill="#C2C2BC" ${S}/>
    <rect x="50" y="60" width="140" height="116" rx="6" fill="#3E7A4C" ${S}/>
    <path d="M120,66 V170" ${S} fill="none"/>
    <path d="M86,96 L104,128 H68 Z" fill="#FFD21A" stroke="#1E1A17" stroke-width="4" stroke-linejoin="round"/>
    <path d="M86,106 V118 M86,123 V124" stroke="#1E1A17" stroke-width="4" stroke-linecap="round"/>
    <circle cx="132" cy="118" r="6" fill="#C2C2BC" stroke="#1E1A17" stroke-width="3"/></svg>`,
  manhole: `<svg viewBox="0 0 240 220" role="img" aria-label="A round heavy metal lid in the street">
    <rect x="0" y="40" width="240" height="160" fill="#8C8C86"/>
    <path d="M20,120 H60 M90,120 H150 M180,120 H220" stroke="#F2F2EA" stroke-width="6" stroke-dasharray="1 0" opacity="0"/>
    <ellipse cx="120" cy="124" rx="92" ry="52" fill="#5A5A56" ${S}/>
    <ellipse cx="120" cy="124" rx="76" ry="40" fill="#6E6E69" stroke="#1E1A17" stroke-width="3"/>
    <path d="M60,110 L180,110 M52,124 H188 M60,138 H180 M90,88 L80,160 M120,84 V164 M150,88 L160,160" stroke="#4A4A46" stroke-width="3" fill="none"/>
    <rect x="88" y="114" width="64" height="20" rx="4" fill="#5A5A56" stroke="#1E1A17" stroke-width="2.5"/>
    <text x="120" y="129" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="13" fill="#E6E6DE">SEWER</text></svg>`,
  flagRed: flags("#D7372B", "red"),
  flagYellow: flags("#FFD21A", "yellow"),
  marker: `<svg viewBox="0 0 240 220" role="img" aria-label="A yellow post with a warning sign standing in a field">
    <rect x="0" y="180" width="240" height="40" fill="#9CCB7A"/>
    <path d="M0,180 H240" ${S} fill="none"/>
    <path d="M30,180 l6,-12 l4,12 M190,180 l5,-14 l5,14 M70,180 l4,-9 l4,9" stroke="#2F6B2A" stroke-width="3" fill="none"/>
    <rect x="104" y="40" width="32" height="146" rx="4" fill="#FFD21A" ${S}/>
    <path d="M104,52 Q120,24 136,52 Z" fill="#F26B1D" ${S}/>
    <rect x="72" y="70" width="96" height="58" rx="6" fill="#FFFFFF" ${S}/>
    <text x="120" y="92" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="17" fill="#D7372B">WARNING</text>
    <text x="120" y="108" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="9" fill="#1E1A17">CALL BEFORE</text>
    <text x="120" y="120" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="9" fill="#1E1A17">YOU DIG · 811</text></svg>`
};
function flags(color, name) {
  const one = (x, h) => `<path d="M${x},196 V${196 - h}" stroke="#1E1A17" stroke-width="4"/><path d="M${x},${196 - h} h46 v30 h-46 Z" fill="${color}" ${S}/>`;
  return `<svg viewBox="0 0 240 220" role="img" aria-label="Small ${name} flags on wire sticks in the grass">
    <rect x="0" y="190" width="240" height="30" fill="#9CCB7A"/><path d="M0,190 H240" ${S} fill="none"/>
    ${one(34, 110)}${one(104, 130)}${one(170, 104)}</svg>`;
}

/* ---------- Questions ---------- */
const PART1 = [
  { q: "After a big storm, you see a power line lying on the ground. What do you do?",
    right: "Stay far away and tell a grown-up right away", wrong: ["Poke it with a stick to see if it works", "Step over it carefully"],
    why: "A power line on the ground can still have electricity in it, even if it looks dead. Stay far back and have a grown-up call for help." },
  { q: "You smell something like rotten eggs inside the house. What do you do?",
    right: "Tell a grown-up and go outside together", wrong: ["Hold your nose and keep playing", "Flip on a light to look around"],
    why: "Natural gas has a rotten-egg smell added so we can notice it. Get outside with your family, and let a grown-up call for help from a safe spot." },
  { q: "Your family wants to dig a hole to plant a new tree. What should happen first?",
    right: "A grown-up calls 811 before anyone digs", wrong: ["Grab a shovel and start digging", "Dig really fast so it's quick"],
    why: "Pipes and wires can be hiding underground. Calling 811 is free, and someone comes to mark where it's safe to dig." },
  { q: "You see big pipes and machines behind a fence near the road. What do you do?",
    right: "Stay outside the fence and look from far away", wrong: ["Climb the fence to get a closer look", "Throw rocks to hear the sound"],
    why: "Fences and signs are there to keep people safe. Machines and pipes can be hot, loud, or dangerous. Only trained workers go inside." },
  { q: "It's a super hot summer day and you're playing outside. What helps keep you safe?",
    right: "Drink water and take breaks in the shade", wrong: ["Keep running and skip water", "Only drink soda"],
    why: "On the Gulf Coast it gets HOT! Water and shade breaks keep your body cool. Feeling dizzy or tired? Tell a grown-up and cool down." },
  { q: "A hurricane is coming. How can you help your family get ready?",
    right: "Help pack a kit with water, snacks, and a flashlight", wrong: ["Go to the beach to watch the big waves", "Hide your flashlight so nobody finds it"],
    why: "A storm kit with water, food, flashlights, and batteries helps your family if the power goes out. Always listen to your grown-ups during a storm." },
  { q: "You're going on a bike ride. What do you wear?",
    right: "A helmet, buckled snug", wrong: ["No helmet, it messes up my hair", "A helmet, but not buckled"],
    why: "Ridge never skips his hard hat at work, and you shouldn't skip your helmet! It only works when it's buckled." },
  { q: "You find a lighter or matches on the table. What do you do?",
    right: "Don't touch them and tell a grown-up", wrong: ["Try lighting one, just once", "Hide them in your room"],
    why: "Lighters and matches are tools for grown-ups only. Leave them where they are and let a grown-up put them away." }
];
const PART2 = [
  { art: "pole", q: "Ridge is pointing up high. What is this?", right: "A power pole with electric wires", wrong: ["A really tall flagpole", "A tree with no leaves"],
    why: "Power poles carry electricity to houses. Never climb them, and never fly kites or drones near the wires." },
  { art: "meter", q: "Ridge found this on the side of a house. What is it?", right: "A gas meter", wrong: ["A doorbell", "A water fountain"],
    why: "A gas meter shows how much natural gas a home uses. Don't play on it or hang things on it. Smell rotten eggs nearby? Tell a grown-up!" },
  { art: "hydrant", q: "What is Ridge showing you by the street?", right: "A fire hydrant", wrong: ["A trash can", "A little seat"],
    why: "Firefighters hook their hoses to hydrants to get water fast. Never play with one, and keep the space around it clear." },
  { art: "transformer", q: "This big green box is in a yard. What is it?", right: "An electrical box (a transformer)", wrong: ["A toy box", "A good spot to sit"],
    why: "These boxes have strong electricity inside. Never sit on them, climb them, or use them as base in tag or hide and seek." },
  { art: "manhole", q: "Ridge spots this round lid in the road. What is it?", right: "A manhole cover", wrong: ["A giant cookie", "A trampoline"],
    why: "Manhole covers lead to sewer and water pipes deep underground. They're super heavy. Never try to lift one or play near an open one." },
  { art: "flagRed", q: "Ridge found RED flags in the grass. What do they mean?", right: "A buried electric line is under here", wrong: ["Treasure is buried here", "A race starts here"],
    why: "After someone calls 811, workers mark buried lines with colors. RED means electric. Leave the flags right where they are!" },
  { art: "flagYellow", q: "Now Ridge sees YELLOW flags. What do they mean?", right: "A buried gas or oil line is under here", wrong: ["A bee nest is here", "There's a lemonade stand"],
    why: "YELLOW flags mean gas, oil, or steam lines are buried there. Never pull up marking flags. They keep diggers safe." },
  { art: "marker", q: "Ridge's favorite! What is this yellow post with a sign?", right: "A sign that a pipeline is buried nearby", wrong: ["A mailbox", "A bus stop"],
    why: "Pipeline markers show where pipelines run underground, the kind of work StoneRiver does. Never dig near one. See bubbling water or hear hissing? Tell a grown-up." }
];

/* ---------- State ---------- */
let state = { screen: "intro", part: 1, i: 0, s1: 0, s2: 0, answered: false, name: "" };
let set1 = [], set2 = [];
const $content = document.getElementById("content");
const $img = document.getElementById("ridgeImg");
const $progress = document.getElementById("progress");

function setRidge(p, anim) {
  $img.src = p[0]; $img.alt = p[1];
  $img.classList.remove("bounce", "shake");
  if (anim) { void $img.offsetWidth; $img.classList.add(anim); }
}
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c])); }
const total = () => PART1.length + PART2.length;

function drawProgress() {
  $progress.innerHTML = "";
  if (state.screen !== "q") return;
  const list = state.part === 1 ? set1 : set2;
  const lab = document.createElement("span"); lab.className = "part"; lab.textContent = "PART " + state.part; $progress.appendChild(lab);
  list.forEach((_, k) => {
    const s = document.createElement("span"); s.className = "dot";
    if (k < state.i || (k === state.i && state.answered)) s.classList.add("done"); else if (k === state.i) s.classList.add("now");
    $progress.appendChild(s);
  });
  $progress.setAttribute("aria-label", "Part " + state.part + ", question " + (state.i + 1) + " of " + list.length);
}

function intro() {
  state = { screen: "intro", part: 1, i: 0, s1: 0, s2: 0, answered: false, name: state.name || "" };
  setRidge(POSE.wave);
  $content.innerHTML = `
    <h1>Ridge's Junior Safety Crew</h1>
    <div class="bubble">Hey there, partner! I'm Ridge, StoneRiver's safety buck. Pass my 2-part safety test and earn your Junior Safety Crew badge!</div>
    <div class="parts">
      <div><b>Part 1: Safe Choices</b>What should you do? ${PART1.length} questions</div>
      <div><b>Part 2: Spot the Utility</b>What is Ridge pointing at? ${PART2.length} questions</div>
    </div>
    <div class="field">
      <label for="kidName">What's your first name? (it goes on your badge)</label>
      <input id="kidName" type="text" maxlength="24" autocomplete="off" placeholder="First name" value="${esc(state.name)}">
    </div>
    <div class="row"><button class="btn orange" id="startBtn" type="button">Let's go!</button></div>`;
  document.getElementById("startBtn").onclick = () => {
    state.name = document.getElementById("kidName").value.trim();
    set1 = PART1.map(q => ({ ...q, opts: shuffle([q.right, ...q.wrong]) }));
    set2 = PART2.map(q => ({ ...q, opts: shuffle([q.right, ...q.wrong]) }));
    state.screen = "q"; state.part = 1; state.i = 0; question();
  };
  drawProgress();
}

function question() {
  const list = state.part === 1 ? set1 : set2, q = list[state.i];
  state.answered = false;
  if (state.part === 1) setRidge(state.i % 2 ? POSE.hips : POSE.run);
  else setRidge(POSE.wave);
  $content.innerHTML = `
    <div class="label">Part ${state.part} · Question ${state.i + 1} of ${list.length}</div>
    ${state.part === 2 ? `<div class="spot"><span class="tag" aria-hidden="true">LOOK!</span>${ART[q.art]}</div>` : ""}
    <h2>${esc(q.q)}</h2>
    <div class="choices">${q.opts.map((o, k) => `<button class="choice" type="button" data-k="${k}">${esc(o)}</button>`).join("")}</div>
    <div id="fb"></div>`;
  $content.querySelectorAll(".choice").forEach(b => b.onclick = () => answer(+b.dataset.k));
  drawProgress();
}

function answer(k) {
  if (state.answered) return;
  state.answered = true;
  const list = state.part === 1 ? set1 : set2, q = list[state.i], ok = q.opts[k] === q.right;
  if (ok) { if (state.part === 1) state.s1++; else state.s2++; }
  $content.querySelectorAll(".choice").forEach((b, n) => {
    b.disabled = true;
    if (q.opts[n] === q.right) b.classList.add("right"); else if (n === k) b.classList.add("wrong");
  });
  if (ok) setRidge(state.part === 1 ? POSE.wave : POSE.hips, "bounce"); else setRidge(POSE.hips, "shake");
  const face = ok ? FACE_YAY[state.i % FACE_YAY.length] : FACE_OOPS;
  const last = state.i === list.length - 1;
  document.getElementById("fb").outerHTML = `
    <div class="feedback ${ok ? "good" : "bad"}">
      <img src="${face}" alt="${ok ? "Ridge cheering" : "Ridge looking surprised"}">
      <div><strong>${ok ? ["You got it!", "Safety star!", "That's the one!"][state.i % 3] : "Whoa, not that one!"}</strong>
      ${ok ? "" : "The right answer is: <b>" + esc(q.right) + "</b>. "}${esc(q.why)}</div>
    </div>
    <div class="row"><button class="btn" id="nextBtn" type="button">${last ? (state.part === 1 ? "On to Part 2!" : "Get my badge!") : "Next question"}</button></div>`;
  const nb = document.getElementById("nextBtn");
  nb.onclick = () => { if (!last) { state.i++; question(); } else if (state.part === 1) halfway(); else finish(); };
  nb.focus({ preventScroll: true });
  nb.scrollIntoView({ block: "nearest", behavior: "smooth" });
  drawProgress();
}

function halfway() {
  state.screen = "half";
  setRidge(POSE.wrench, "bounce");
  $content.innerHTML = `
    <div class="label">Part 1 complete</div>
    <h2>Nice work! You got ${state.s1} of ${PART1.length}.</h2>
    <div class="bubble">Now for Part 2: <b>Spot the Utility</b>. I'll point at things you can see around town, like power poles and gas meters. Can you tell me what they are?</div>
    <div class="row"><button class="btn orange" id="p2Btn" type="button">Start Part 2</button></div>`;
  document.getElementById("p2Btn").onclick = () => { state.screen = "q"; state.part = 2; state.i = 0; question(); };
  drawProgress();
}

function finish() {
  state.screen = "end";
  setRidge(POSE.wave, "bounce");
  const n = total(), s = state.s1 + state.s2;
  const msg = s === n ? "Perfect score! Ridge is so proud of you." : s >= n - 3 ? "Great job! You really know your safety stuff." : "Good try! Play again and you'll be a safety pro in no time.";
  const nm = state.name || "Safety Star";
  $content.innerHTML = `
    <div class="badge" role="img" aria-label="Junior Safety Crew badge for ${esc(nm)}">
      <div class="title">OFFICIAL</div>
      <div class="who">${esc(nm)}</div>
      <div class="title">JUNIOR SAFETY CREW</div>
      <div>Approved by Ridge • StoneRiver Safety Team</div>
    </div>
    <div class="score">You got ${s} out of ${n} right! (Part 1: ${state.s1}/${PART1.length} · Part 2: ${state.s2}/${PART2.length})</div>
    <div class="bubble">${msg} Remember: when something seems unsafe, stop and tell a grown-up.</div>
    <div class="send" id="printBox">
      <h3>Print my badge</h3>
      <div class="row"><button class="btn" id="printBtn" type="button">Print my badge</button></div>
      <p class="small">Prints just your badge on one page. Ask a grown-up to help!</p>
      <div class="status" id="status" role="status"></div>
    </div>
    <div class="row">
      <button class="btn orange" id="againBtn" type="button">Play again</button>
      <button class="btn plain" id="exitBtn" type="button">Exit game</button>
    </div>`;
  document.getElementById("againBtn").onclick = intro;
  document.getElementById("exitBtn").onclick = goodbye;
  setupSend(nm, s, n);
  drawProgress();
}

function goodbye() {
  state.screen = "bye";
  setRidge(POSE.wave, "bounce");
  $content.innerHTML = `
    <div class="label">See you next time</div>
    <h1>Thanks for playing, partner!</h1>
    <div class="bubble">Stay safe out there. Look out for your herd, and always tell a grown-up when something doesn't look right.</div>
    <div class="row"><button class="btn orange" id="backBtn" type="button">Back to start</button></div>`;
  document.getElementById("backBtn").onclick = intro;
  drawProgress();
}

/* ---------- Badge picture + email ---------- */
function setupSend(nm, s, n) {
  const $btn = document.getElementById("printBtn");
  document.getElementById("pbName").textContent = nm;
  document.getElementById("pbScore").textContent = s + " out of " + n + " right";
  $btn.onclick = () => window.print();
}

intro();
