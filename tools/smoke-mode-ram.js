/* Headless test for the Odyssey mode "Under the Ram" (js/mode-ram.js): node tools/smoke-mode-ram.js
   Serves the repository, makes the dev page act as the Odyssey build (window.SOL_STATE = "ODY" before any
   script), picks the mode on the mode screen and drives it deterministically through the scene's methods:
   the right letter scores, a wrong letter costs a life and is crossed out, Polyphemus's hand costs a life,
   the flock leaving without Odysseus costs a life, Select TWO needs both letters, and the difficulty climbs
   at every level. Then, if the builds exist (node tools/build-games.js), the mode runs in dist/ody and is
   not offered in dist/va. Screenshots go to tools/shots/ram-*.png. Prints ALL OK or N FAILED. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var repo = path.join(__dirname, ".."), root = repo, shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", mp3: "audio/mpeg", webp: "image/webp", svg: "image/svg+xml" };
var srv = http.createServer(function (req, res) {
  var f = path.join(root, decodeURIComponent(url.parse(req.url).pathname));
  if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, function (err, buf) {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": MIME[f.split(".").pop()] || "application/octet-stream" }); res.end(buf);
  });
});
(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }).catch(function () { return chromium.launch(); });
  var page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  var errors = [];
  page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
  page.on("console", function (m) { if (m.type() === "error") { var t = m.text(); if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|WebGL|GL Driver|swiftshader/i.test(t)) errors.push("console: " + t); } });
  var fails = [];
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png") }); }
  async function gotoLevel(n) {
    await page.evaluate(function (n) { var b = document.getElementById("btn-next"); b.dataset.goto = String(n); b.click(); }, n);
    await page.waitForTimeout(1200);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.claim && s.readOpen; }, n, { timeout: 15000 }).catch(function () {});
    var card = await page.evaluate(function () { var c = document.getElementById("mode-card"); return c && !c.classList.contains("hidden") ? c.textContent : ""; });
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 5000 }).catch(function () {});
    await page.waitForTimeout(200);
    return card;
  }

  /* the dev page as the Odyssey build */
  await page.addInitScript(function () { window.SOL_STATE = "ODY"; });
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(800);
  await page.evaluate(function () { localStorage.clear(); });
  await page.reload({ waitUntil: "load" }); await page.waitForTimeout(800);
  await page.click('#title-screen .card[data-family="ODY"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  var card = await page.evaluate(function () {
    var c = document.querySelector('#mode-packs .card[data-gamemode="ram"]');
    return c ? { text: c.textContent, visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && /Under the Ram/.test(card.text), "the Under the Ram card shows on the Odyssey mode screen: " + JSON.stringify(card));
  await shot("ram-00-mode-screen");
  await page.click('#mode-packs .card[data-gamemode="ram"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  await page.click("#btn-skill-start"); await page.waitForTimeout(300);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { var s = window.SolScene; return s && s.claim && s.readOpen; }, null, { timeout: 15000 }).catch(function () {});
  var l1 = await page.evaluate(function () {
    var s = SolScene, c = document.getElementById("mode-card");
    return { key: s.sys.settings.key, mode: s.mode && s.mode.id, night: s.night, only: SolModes.only, act: document.getElementById("btn-action").textContent,
      card: c ? c.textContent : "", rams: s.ram ? s.ram.rams.length : 0, letters: s.choiceLetters().join("") };
  });
  console.log("level 1", JSON.stringify(l1).slice(0, 400));
  check(l1.key === "mode" && l1.mode === "ram" && l1.only === "ram" && l1.act === "CLING", "picking the card plays Under the Ram in the mode scene, with a CLING button: " + JSON.stringify({ key: l1.key, mode: l1.mode, only: l1.only, act: l1.act }));
  check(/Under the Ram/.test(l1.card) && /Controls:/.test(l1.card) && /Space, CLING or a mouse button/.test(l1.card) && !/New this time/.test(l1.card), "the reading card explains the mode and its controls (level 1 has nothing new)");
  check(l1.rams >= 8, "a flock of at least eight rams, each with a letter: " + l1.rams + " rams, letters " + l1.letters);
  await shot("ram-01-card");
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForTimeout(500);

  /* the first time the Mixed rotation brings it: level 22 (island 3, the Cyclopes) */
  var rot = await page.evaluate(function () {
    var only = SolModes.only; SolModes.only = null;
    var o = [22, 62, 94].map(function (n) { var m = SolModes.modeFor(n); return m ? m.id : "-"; }).join(",");
    SolModes.only = only; return o;
  });
  check(rot === "ram,ram,ram", "the Odyssey's Mixed rotation plays it on levels 22, 62 and 94: " + rot);

  var card22 = await gotoLevel(22);
  check(/New this time/.test(card22) && /bigger flock/i.test(card22), "level 22's card says what is new this time: " + card22.slice(-140));
  var run = await page.evaluate(async function () {
    var s = SolScene, R = s.ram, o = { mode: s.mode.id, tier: s.tier };
    function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
    /* wait on the game, not the clock (a busy machine runs the game slower than real time) */
    async function until(f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 20000)) await wait(30); return f(); }
    async function gwait(ms) { var t0 = R.t; await until(function () { return R.t - t0 >= ms / 1000; }, 30000); }
    /* one press of Space that the game has seen go down and come up again */
    async function press() {
      var f0 = R.lastFrame;
      s.keys.SPACE.isDown = true; await until(function () { return R.prevFire && R.lastFrame > f0; });
      s.keys.SPACE.isDown = false; await until(function () { return !R.prevFire; });
    }
    s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
    /* no releases, gropes, under-checks or roars of their own while the scripted checks run */
    function quiet() {
      R.hold = true; R.roar.state = "calm"; R.roar.t = 0;
      R.hands.forEach(function (h) { s.ramHandReset(h); });
      R.rams.forEach(function (r) { r.held = 0; r.scat = 0; });
      if (R.ody.state !== "foot") { if (R.ody.state === "cling") s.ramLetGo(); R.ody.state = "foot"; }
      s.strikes = 0; s.iframeMs = 0;
    }
    function home() { var b = R.start; R.ody.x = b.x; R.ody.y = b.y; R.ody.state = "foot"; R.ody.spr.setVisible(true).setAlpha(1); }
    function inCave(L, mark) { return R.rams.filter(function (r) { return r.letter === L && r.state !== "gone" && !r.crossed && (mark == null || r.mark === mark); }); }
    /* Odysseus stands by ram r and presses Space (again if a scattering or fading ram slipped away) until he is under it */
    async function grab(r) {
      for (var k = 0; k < 8 && !(R.ody.state === "cling" && R.ody.ram === r); k++) {
        r.held = 1e9; r.a = 1; R.ody.state = "foot"; R.ody.x = r.x - 22; R.ody.y = r.y;
        await press();
      }
      r.held = 0;
      return R.ody.state === "cling" && R.ody.ram === r;
    }
    /* walk Odysseus up to a ram of letter L, grab on, then the flock lets it go out of the door */
    async function ride(L) {
      var r = inCave(L, "")[0];
      if (!r) return { none: true };
      r.state = "graze"; r.pause = 1e9; r.x = R.fx0 + R.caveW * 0.5; r.y = R.doorY; r.vx = r.vy = 0;
      var clung = await grab(r);
      r.state = "exit"; r.x = R.thrX - 26; r.y = R.doorY; r.lane = 0;
      await until(function () { return r.crossed || s._between; });
      await gwait(60);
      return { clung: clung, crossed: r.crossed };
    }
    quiet(); home(); s.score = 0; s.extracted = [];
    var need = s.need.slice(), letters = s.choiceLetters(), wrongL = letters.filter(function (L) { return need.indexOf(L) === -1; })[0];
    o.flock = { rams: R.rams.length, perLetter: letters.map(function (L) { return inCave(L).length; }), plaques: R.rams.every(function (r) { return r.txt && r.txt.text === r.letter; }) };
    /* Space next to nothing does nothing; next to a ram it grabs on, and again lets go */
    home(); R.ody.x = R.fx0 + 20; R.ody.y = R.fy0 + 20;
    R.rams.forEach(function (r) { if (dist2(r, R.ody) < 90) { r.x += 160; } });
    function dist2(a, b) { return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)); }
    await press();
    o.alone = R.ody.state;
    var r0 = inCave(letters[0])[0]; r0.pause = 1e9; r0.x = R.fx0 + R.caveW * 0.45; r0.y = R.doorY + 60;
    await grab(r0); r0.held = 1e9;
    o.cling = { state: R.ody.state, on: R.ody.ram === r0, act: document.getElementById("btn-action").textContent, hud: R.hud.text };
    await gwait(150);
    await press(); r0.held = 0;
    o.letGo = { state: R.ody.state, act: document.getElementById("btn-action").textContent };
    await gwait(100);
    /* a wrong letter: a life, crossed out on the other rams, and a crossed-out ram can't be ridden */
    quiet(); home();
    o.wrongRide = await ride(wrongL);
    o.wrong = { strikes: s.strikes, label: s._lastHitLabel, dead: R.dead.slice(), crossed: inCave(wrongL).every(function (r) { return r.mark === "wrong" && r.txt.text === "✕"; }), left: inCave(wrongL).length };
    await until(function () { return R.ody.state === "foot"; });
    quiet();
    var cr = inCave(wrongL)[0];
    if (cr) { cr.pause = 1e9; R.ody.x = cr.x - 28; R.ody.y = cr.y; s.ramTryCling(); o.wrong.refused = R.ody.state === "foot"; }
    /* Polyphemus's groping hand: a shadow first, then a life if Odysseus is on foot under it; thrown back into the cave */
    quiet(); R.ody.x = R.wallX0 - Math.min(R.reachR * 0.8, 170); R.ody.y = R.doorY + 10; R.ody.spr.setVisible(true);
    R.rams.forEach(function (r) { if (r.state !== "gone" && Math.abs(r.x - R.ody.x) < 70 && Math.abs(r.y - R.ody.y) < 70) r.x -= 150; });
    var h = R.hands[0], gx = R.ody.x, gy = R.ody.y;
    s.ramGrope(h, gx, gy, 500);
    await until(function () { return h.t >= 250; });
    o.shadow = h.phase === "warn" && !h.low && s.strikes === 0;
    await until(function () { return s.strikes > 0 || h.phase === "back" || h.mode === "sweep"; });
    o.grope = { strikes: s.strikes, label: s._lastHitLabel, state: R.ody.state };
    await until(function () { return R.ody.state === "foot"; });
    o.grope.landed = { x: Math.round(R.ody.x), back: R.ody.x < R.fx0 + R.caveW * 0.35 };
    /* under a ram he is safe from a hand feeling backs or the floor (as in Homer) */
    quiet();
    var r1 = inCave(letters[1], "")[0] || inCave(need[0], "")[0];
    r1.pause = 1e9; r1.x = gx; r1.y = gy; r1.vx = r1.vy = 0;
    s.ramCling(r1);
    s.ramGrope(h, r1.x, r1.y, 400);
    await until(function () { return h.mode === "sweep" || h.phase === "back"; });
    o.safeUnder = { strikes: s.strikes, still: R.ody.state === "cling" };
    /* feeling UNDER his ram: a life */
    quiet(); r1.x = gx; r1.y = gy; s.ramCling(r1);
    s.ramUnder(h, r1, 450);
    await until(function () { return s.strikes > 0 || h.phase === "back"; });
    o.under = { strikes: s.strikes, label: s._lastHitLabel };
    await until(function () { return R.ody.state === "foot"; });
    /* ... unless he lets go and gets away in time */
    quiet(); r1.x = gx; r1.y = gy; r1.held = 0; s.ramCling(r1);
    s.ramUnder(h, r1, 900);
    await gwait(250); s.ramLetGo(); R.ody.x -= 130;
    await until(function () { return h.phase === "back" || h.mode === "sweep"; });
    o.dodged = { strikes: s.strikes, state: R.ody.state };
    /* Polyphemus roars: the rams scatter, and a ram's rider holds on */
    quiet(); var r2 = inCave(need[0], "")[0]; r2.x = R.fx0 + R.caveW * 0.45; r2.y = R.doorY; s.ramCling(r2);
    s.ramRoar();
    o.roar = { scattered: R.rams.filter(function (r) { return r.scat > 0; }).length, holds: R.ody.state === "cling" && R.ody.ram === r2, say: R.say.text };
    await gwait(300);
    quiet(); R.rams.forEach(function (r) { r.scat = 0; });
    /* the whole flock goes out without him: a life, and a new flock comes in */
    home();
    var old = R.rams, k = 0;
    R.rams.forEach(function (r) { if (r.state !== "gone" && !r.crossed) { r.state = "exit"; r.x = R.thrX - 30 - (k++) * 6; r.y = R.doorY; r.lane = 0; } });
    await until(function () { return R.rams !== old; });
    await gwait(100);
    o.flockOut = { strikes: s.strikes, label: s._lastHitLabel, fresh: R.rams !== old, rams: R.rams.length, crossedKept: inCave(wrongL).every(function (r) { return r.mark === "wrong"; }) };
    /* a Select TWO question: the first right letter is half the answer, the second answers it */
    quiet(); home(); s.extracted = []; R.dead = [];
    var sc0 = s.score, two = need.concat(letters.filter(function (L) { return need.indexOf(L) === -1 && L !== wrongL; })).slice(0, 2);
    s.need = two.slice();
    R.rams.forEach(function (r) { if (r.mark) { r.mark = ""; r.spr.clearTint(); r.txt.setText(r.letter).setColor("#140c0a"); } });
    o.two = { r1: await ride(two[0]) };
    o.two.first = s.score - sc0; o.two.found = s.extracted.slice().join(""); o.two.marked = inCave(two[0]).every(function (r) { return r.mark === "right"; }); o.two.strikes = s.strikes;
    await until(function () { return R.ody.state === "foot"; });
    quiet(); home();
    var coins = s.nightCoins;
    o.two.r2 = await ride(two[1]);
    o.two.second = s.score - sc0; o.two.coins = s.nightCoins > coins; o.two.free = R.ody.state;
    /* the next question: a new flock; its right letter answers it */
    await until(function () { var g = document.getElementById("read-go"); return !s._between && !!g && !!g.offsetParent; });
    var rgo = document.getElementById("read-go"); if (rgo && rgo.offsetParent) rgo.click();
    await until(function () { return !s.readOpen; });
    o.next = { rams: R.rams.length, odyBack: R.ody.state === "foot" && R.ody.x < R.fx0 + 80 };
    var sc1 = s.score; quiet();
    for (var j = 0; j < s.need.length; j++) { quiet(); home(); await ride(s.need[j]); }
    o.right = s.score - sc1; o.rightStrikes = s.strikes;
    R.hold = false;
    return o;
  });
  console.log("run", JSON.stringify(run));
  check(run.mode === "ram" && run.tier === 2, "level 22 runs Under the Ram (island 3)");
  check(run.flock.rams >= 8 && run.flock.perLetter.every(function (n) { return n >= 2; }) && run.flock.plaques, "every letter is on two or more rams, painted on the tag: " + JSON.stringify(run.flock));
  check(run.alone === "foot" && run.cling.state === "cling" && run.cling.on && run.cling.act === "LET GO" && /Under ram/.test(run.cling.hud) && run.letGo.state === "foot" && run.letGo.act === "CLING",
    "Space by a ram grabs on under it (the button turns to LET GO), Space again lets go; Space next to nothing does nothing: " + JSON.stringify({ alone: run.alone, cling: run.cling, letGo: run.letGo }));
  check(run.wrongRide.clung && run.wrong.strikes === 1 && /WRONG LETTER/.test(run.wrong.label || "") && run.wrong.dead.length === 1 && run.wrong.crossed && run.wrong.left > 0 && run.wrong.refused,
    "riding out on a wrong letter costs a life; that letter is crossed out on the other rams, which can't be ridden: " + JSON.stringify(run.wrong));
  check(run.shadow && run.grope.strikes === 1 && /POLYPHEMUS CAUGHT YOU/.test(run.grope.label || "") && (run.grope.state === "thrown" || run.grope.state === "foot") && run.grope.landed.back,
    "a groping hand shows a shadow first, then catches Odysseus on foot (a life) and throws him back into the cave: " + JSON.stringify({ shadow: run.shadow, grope: run.grope }));
  check(run.safeUnder.strikes === 0 && run.safeUnder.still, "under a ram, a hand coming down on him finds only fleece: " + JSON.stringify(run.safeUnder));
  check(run.under.strikes === 1 && /UNDER THE RAM/.test(run.under.label || "") && run.dodged.strikes === 0, "a hand feeling UNDER his ram costs a life; letting go and getting away in time costs nothing: " + JSON.stringify({ under: run.under, dodged: run.dodged }));
  check(run.roar.scattered > 3 && run.roar.holds && /ROAR/.test(run.roar.say), "a roar scatters the rams and the rider holds on: " + JSON.stringify(run.roar));
  check(run.flockOut.strikes === 1 && /FLOCK WENT OUT/.test(run.flockOut.label || "") && run.flockOut.fresh && run.flockOut.rams >= 8 && run.flockOut.crossedKept,
    "if the whole flock goes out without him it costs a life and a new flock comes in (crossed-out letters stay crossed out): " + JSON.stringify(run.flockOut));
  check(run.two.r1.clung && run.two.first === 0 && run.two.found.length === 1 && run.two.marked && run.two.strikes === 0 && run.two.second === 1 && run.two.coins,
    "a Select TWO question needs both: the first right ram is marked found, the second answers and pays coins: " + JSON.stringify(run.two));
  check(run.next.rams >= 8 && run.next.odyBack && run.right === 1 && run.rightStrikes === 0, "the next question brings a new flock, and riding out on its right letter answers it: " + JSON.stringify({ next: run.next, right: run.right, strikes: run.rightStrikes }));

  /* the picture at the first level in the rotation, with everything running (no lives lost for the picture):
     Odysseus under a ram on its way to the door, the rest of the flock grazing, a hand groping */
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); var s = window.SolScene; return s && (!s.readOpen || (g && g.offsetParent)); }, null, { timeout: 20000 }).catch(function () {});
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 15000 }).catch(function () {});
  await page.evaluate(async function () {
    var s = SolScene, R = s.ram; s.iframeMs = 1e9; s.spareLives = 9;
    var r = R.rams.filter(function (q) { return q.state === "graze" && !q.mark; })[0];
    if (r) { r.x = R.fx0 + R.caveW * 0.5; r.y = R.doorY + 50; r.state = "go"; s.ramCling(r); }
    R.gropeCd = 1e9; R.relCd = 1500;
    var t0 = R.t; while (R.t - t0 < 1.2) await new Promise(function (res) { setTimeout(res, 50); });
    /* a grope coming down on an empty spot: the shadow and the closing ring */
    var spot = s.ramClampReach(R.wallX0 - R.reachR * 0.7, R.doorY - R.doorH * 0.75);
    s.ramGrope(R.hands[0], spot.x, spot.y, 2400);
    t0 = R.t; while (R.t - t0 < 1.3) await new Promise(function (res) { setTimeout(res, 50); });
  });
  await shot("ram-22-early");

  /* the difficulty: harder at every level 2-100, never easier; fair at 21, intense at 99 */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.ram.params, up = ["rams", "walkSp", "grazeSp", "handSp", "sweepDepth", "reach", "gropers", "scatterSp"],
      down = ["flockMs", "releaseMs", "gropeEvery", "warn", "aimErr", "underEvery", "roarEvery", "roarWarn"], easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      ["again", "doubleUnder", "loudRoar"].forEach(function (k) { if (a[k] && !b[k]) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    function pick(n) { var p = f(n), o = {}; Object.keys(p).forEach(function (k) { o[k] = typeof p[k] === "number" ? Math.round(p[k] * 1000) / 1000 : p[k]; }); return o; }
    return { easier: easier, flat: flat, l2: pick(2), l21: pick(21), l50: pick(50), l99: pick(99), l100: pick(100), same: SolScene.ramParams(57).walkSp === f(57).walkSp };
  });
  console.log("ramp l2 ", JSON.stringify(ramp.l2));
  console.log("ramp l21", JSON.stringify(ramp.l21));
  console.log("ramp l50", JSON.stringify(ramp.l50));
  console.log("ramp l99", JSON.stringify(ramp.l99));
  check(ramp.easier.length === 0 && ramp.flat.length === 0 && ramp.same, "the difficulty (MODES.ram.params) is harder at every level 2-100 than at the one before, never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat }));
  var a21 = ramp.l21, a99 = ramp.l99;
  check(a21.gropers === 1 && a21.underEvery >= 1e8 && a21.warn >= 1200 && a21.flockMs >= 40000 && a21.reach <= 0.32 && a21.walkSp <= 70,
    "level 21 is fair for a first time: one hand gropes at a time with a long warning, no feeling under the rams, an unhurried flock: " + JSON.stringify(a21));
  check(a99.gropers === 2 && a99.warn <= 700 && a99.underEvery <= 3500 && a99.flockMs <= 26000 && a99.roarEvery <= 9000 && a99.walkSp >= a21.walkSp * 1.7 && a99.reach >= 0.5 && a99.again && a99.doubleUnder && a99.loudRoar,
    "level 99 is intense: both hands grope, short warnings, frequent checks under the rams and roars, a fast flock: " + JSON.stringify(a99));
  check(ramp.l100.walkSp > ramp.l2.walkSp && ramp.l100.flockMs < ramp.l2.flockMs, "level 100 is harder than level 2 overall");

  /* the picture at level 99 */
  var card99 = await gotoLevel(99);
  check(/New this time/.test(card99) && /Ithaca is close/.test(card99), "level 99's card names what is new (the last island)");
  var late = await page.evaluate(async function () {
    var s = SolScene, R = s.ram; s.iframeMs = 1e9; s.spareLives = 9;
    var r = R.rams.filter(function (q) { return q.state === "graze" && !q.mark; })[0];
    if (r) { R.ody.x = R.wallX0 - 220; R.ody.y = R.doorY - 60; }
    R.gropeCd = 300; R.underCd = 600; R.relCd = 0;
    var t0 = R.t, w0 = Date.now(); while (R.t - t0 < 3 && Date.now() - w0 < 40000) await new Promise(function (res) { setTimeout(res, 50); });
    return { tier: s.tier, gropers: R.P.gropers, groping: R.hands.filter(function (h) { return h.mode !== "sweep"; }).length, rams: R.rams.length, inCave: R.inCave };
  });
  console.log("level 99", JSON.stringify(late));
  check(late.tier === 9 && late.gropers === 2 && late.rams >= 11, "level 99 runs with a bigger flock and both hands groping: " + JSON.stringify(late));
  await shot("ram-99-late");
  await page.evaluate(function () { SolScene.iframeMs = 0; });

  /* the builds (node tools/build-games.js): the mode runs in the Odyssey game and is not offered in Virginia's */
  var distRoot = path.join(repo, "dist");
  if (!fs.existsSync(path.join(distRoot, "ody", "index.html"))) console.log("skip  dist/ody (run node tools/build-games.js)");
  else {
    root = path.join(distRoot, "ody");
    var p2 = await browser.newPage({ viewport: { width: 1366, height: 768 } });
    p2.on("pageerror", function (e) { errors.push("dist/ody pageerror: " + e.message); });
    p2.on("console", function (m) { if (m.type() === "error") { var t = m.text(); if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|WebGL|GL Driver|swiftshader/i.test(t)) errors.push("dist/ody console: " + t); } });
    await p2.goto(base + "index.html", { waitUntil: "load" }); await p2.waitForTimeout(600);
    await p2.evaluate(function () { localStorage.clear(); });
    await p2.reload({ waitUntil: "load" }); await p2.waitForTimeout(800);
    await p2.click('#title-screen .card[data-family="ODY"]');
    await p2.waitForSelector("#mode-screen:not(.hidden)");
    var dcard = await p2.evaluate(function () { return { state: window.SOL_STATE, has: !!document.querySelector('#mode-packs .card[data-gamemode="ram"]') }; });
    await p2.click('#mode-packs .card[data-gamemode="ram"]');
    await p2.waitForSelector("#skill-screen:not(.hidden)");
    await p2.click("#btn-skill-start"); await p2.waitForTimeout(300);
    if (await p2.isVisible("#btn-char-confirm")) await p2.click("#btn-char-confirm");
    await p2.waitForFunction(function () { var s = window.SolScene; return s && s.claim && s.readOpen; }, null, { timeout: 15000 }).catch(function () {});
    await p2.waitForSelector("#read-go", { state: "visible", timeout: 15000 }).catch(function () {});
    if (await p2.isVisible("#read-go")) await p2.click("#read-go");
    await p2.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen && s.ram; }, null, { timeout: 15000 }).catch(function () {});
    var dplay = await p2.evaluate(async function () {
      var s = SolScene, R = s.ram, t0 = Date.now(); s.iframeMs = 1e9;
      function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
      /* hold the right arrow (the game's own keys) until Odysseus has walked a little, then let the game run 3 s of its own time */
      s.keys.RIGHT.isDown = true; while (R.ody.x < R.start.x + 60 && Date.now() - t0 < 20000) await wait(30); s.keys.RIGHT.isDown = false;
      var g0 = R.t; while (R.t - g0 < 3 && Date.now() - t0 < 40000) await wait(50);
      s.iframeMs = 0;
      return { mode: s.mode.id, fam: s.family, rams: s.ram.rams.length, moved: s.ram.ody.x > s.ram.start.x + 40, island: s.realm && s.realm.name, flag: document.getElementById("round-flag").textContent };
    });
    console.log("dist/ody", JSON.stringify(dcard), JSON.stringify(dplay));
    await p2.screenshot({ path: path.join(shots, "ram-dist-ody.png") });
    check(dcard.state === "ODY" && dcard.has && dplay.mode === "ram" && dplay.fam === "ODY" && dplay.rams >= 8 && dplay.moved, "dist/ody: the card is offered and Under the Ram runs (Odysseus walks, the flock is in the cave): " + JSON.stringify(dplay));
    await p2.close();
  }
  if (!fs.existsSync(path.join(distRoot, "va", "index.html"))) console.log("skip  dist/va (run node tools/build-games.js)");
  else {
    root = path.join(distRoot, "va");
    var p3 = await browser.newPage({ viewport: { width: 1366, height: 768 } });
    p3.on("pageerror", function (e) { errors.push("dist/va pageerror: " + e.message); });
    await p3.goto(base + "index.html", { waitUntil: "load" }); await p3.waitForTimeout(600);
    await p3.evaluate(function () { localStorage.clear(); localStorage.setItem("afterHours.v1.gameMode", "ram"); });
    await p3.reload({ waitUntil: "load" }); await p3.waitForTimeout(800);
    await p3.click('#title-screen .card[data-family="G9"]');
    await p3.waitForSelector("#mode-screen:not(.hidden)");
    var va = await p3.evaluate(function () {
      return { state: window.SOL_STATE, cards: Array.prototype.map.call(document.querySelectorAll("#mode-packs .card"), function (c) { return c.getAttribute("data-gamemode"); }), only: window.SolModes ? SolModes.only : "?",
        rot: [2, 22, 62].map(function (n) { var m = SolModes.modeFor(n); return m ? m.id : "-"; }).join(",") };
    });
    console.log("dist/va", JSON.stringify(va));
    check(va.state === "VA" && va.cards.length > 0 && va.cards.indexOf("ram") === -1 && va.only === null && va.rot === "raid,raid,raid", "dist/va: the mode screen does not offer Under the Ram, a saved pick of it falls back to All modes, and the rotation never plays it: " + JSON.stringify(va));
    await p3.close();
  }
  root = repo;

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
