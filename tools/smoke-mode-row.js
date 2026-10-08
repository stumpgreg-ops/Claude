/* Headless test of the Odyssey mode "row" (Row Past the Sirens, js/mode-row.js): node tools/smoke-mode-row.js
   Serves the repository, makes the dev page act as the Odyssey build (window.SOL_STATE = "ODY" before any script),
   plays the mode on level 12 (its first island in the Odyssey rotation) and level 98 and checks: the mode card on
   the mode screen; the right letter's passage scores; a wrong letter's passage costs a life and is crossed out;
   the hazards (the Sirens' rocks, and Odysseus breaking free when the rhythm collapses) cost a life; Select TWO
   needs both; the strokes are judged PERFECT / GOOD / MISS and Space, a click and the ROW button all row; the
   difficulty ramp (levels 2-100 never easier, harder overall); no page errors. Then it builds the games
   (node tools/build-games.js; NO_BUILD=1 skips it) and checks the mode runs in dist/ody and is not offered in
   dist/va. Screenshots go to tools/shots/row-*.png. Prints ALL OK or N FAILED. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url"), cp = require("child_process");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var repo = path.join(__dirname, ".."), root = repo, shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", mp3: "audio/mpeg", webp: "image/webp", glb: "model/gltf-binary" };
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
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  var errors = [];
  page.on("response", function (r) { if (r.status() === 404 && !/favicon/.test(r.url())) console.log("404", r.url()); });
  page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
  page.on("console", function (m) { if (m.type() === "error" || m.type() === "warning") { var t = m.text(); if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader/i.test(t)) errors.push(m.type() + ": " + t); } });
  var fails = [];
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  async function shot(name) { await page.screenshot({ path: path.join(shots, "row-" + name + ".png") }); }
  async function gotoLevel(n) {
    await page.evaluate(function (n) { var b = document.getElementById("btn-next"); b.dataset.goto = String(n); b.click(); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.claim && s.readOpen; }, n, { timeout: 20000 }).catch(function () {});
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 8000 }).catch(function () {});
    await page.waitForTimeout(200);
  }
  async function closeReading(ms) {
    var t0 = Date.now();
    while (Date.now() - t0 < (ms || 15000)) {
      if (await page.isVisible("#read-go")) { await page.click("#read-go"); break; }
      await page.waitForTimeout(200);
    }
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 8000 }).catch(function () {});
  }
  /* page-side helpers: wait on the game, not the clock (a busy machine runs the game slower than real time) */
  var HELPERS = function () {
    window.__rowT = {
      wait: function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); },
      until: async function (f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 30000)) await window.__rowT.wait(30); return !!f(); },
      /* no beat, no song, no posts of its own, no drift: only what a check sets up happens */
      quiet: function () {
        var s = window.SolScene, R = s.rw;
        s.rowStop(); R.P.pull = 0; R.P.tug = 0; R.song.state = "calm"; R.song.t = 0; R.song.cd = 1e12; R.kx = 0;
        R.rows.forEach(function (r) { s.rowKillRow(r); }); R.rows = []; R.dead = []; R.dist = -1e12;
        s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0; R.auto = false; R.mom = 0.5;
        R.ship.x = (R.chanL + R.chanR) / 2;
      },
      /* a line of posts just ahead of the ship; resolves once it has crossed the ship's middle */
      sail: async function (letters, at) {
        var s = window.SolScene, R = s.rw, row = s.rowMakeRow(letters, R.ship.y - 16);
        if (at != null) { var k = letters.indexOf(at); R.ship.x = (row.b[k] + row.b[k + 1]) / 2; }
        await window.__rowT.until(function () { return row.done || s._between; });
        await window.__rowT.wait(60);
        return row;
      }
    };
  };

  /* ── 1. the Odyssey game's mode screen offers the card ── */
  await page.addInitScript(function () { window.SOL_STATE = "ODY"; });
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(800);
  await page.click('#title-screen .card[data-family="ODY"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  var card = await page.evaluate(function () {
    var c = document.querySelector('#mode-packs .card[data-gamemode="row"]');
    return { shown: !!c && !!c.offsetParent, text: c ? c.textContent : "", def: !!(window.SolModes && SolModes.MODES.row), ids: Array.prototype.map.call(document.querySelectorAll("#mode-packs .card"), function (x) { return x.getAttribute("data-gamemode"); }).join(",") };
  });
  await shot("01-mode-screen");
  check(card.shown && /Row Past the Sirens/.test(card.text) && card.def, "the Odyssey mode screen shows the Row Past the Sirens card: " + JSON.stringify(card));
  var rot = await page.evaluate(function () {
    var keep = SolModes.only, o = {};
    SolModes.only = null;
    o.lv = [12, 59, 74, 98].map(function (n) { var m = SolModes.modeFor(n); return m ? m.id : "-"; }).join(",");
    SolModes.only = "row"; o.only = [1, 2, 10, 55].map(function (n) { return SolModes.modeFor(n).id; }).join(",");
    SolModes.only = keep;
    return o;
  });
  check(rot.lv === "row,row,row,row" && rot.only === "row,row,row,row", "the Odyssey rotation plays it on levels 12, 59, 74 and 98; picked alone it plays every level: " + JSON.stringify(rot));
  await page.click('#mode-packs .card[data-gamemode="row"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  await page.click("#btn-skill-start"); await page.waitForTimeout(300);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForTimeout(2500);
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(300); }
  await page.evaluate(HELPERS);

  /* ── 2. level 12 ── */
  await page.evaluate(function () { var s = window.SolScene; if (s) s.tutLockUntil = 0; });
  await page.evaluate(function (n) { var b = document.getElementById("btn-next"); b.dataset.goto = String(n); b.click(); }, 12);
  await page.waitForFunction(function () { var s = window.SolScene; return s && s.night === 12 && s.claim && s.readOpen; }, null, { timeout: 20000 }).catch(function () {});
  var intro = await page.evaluate(function () {
    var s = SolScene, c = document.getElementById("mode-card");
    return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent, card: c ? c.textContent : "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
  });
  await shot("02-card-12");
  check(intro.key === "mode" && intro.mode === "row" && intro.act === "ROW" && /Row Past the Sirens/.test(intro.card) && /rhythm level/.test(intro.card) && /New this time/.test(intro.card) && /swells/.test(intro.card) && /Controls:/.test(intro.card),
    "level 12 runs Row Past the Sirens in the mode scene, a ROW button, and the reading card explains it (and what's new): " + JSON.stringify({ key: intro.key, mode: intro.mode, tier: intro.tier, act: intro.act }));
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 8000 }).catch(function () {});

  /* the count-in, then the song: its notes fly to the ring on the ship (v5.17.2: no drum band at the bottom) */
  var beat = await page.evaluate(async function () {
    var T = window.__rowT, s = SolScene, R = s.rw, o = {};
    s.spareLives = 9; R.auto = true;
    o.countIn = R.countIn.length; o.liveFromAhead = R.liveFrom > R.clock;
    await T.until(function () { return R.stats.perfect >= 3; }, 90000);
    o.perfect = R.stats.perfect; o.notes = R.notes.length; o.marks = R.notes.filter(function (n) { return n.m && n.m.visible; }).length;
    var mast = R.ship.y, flying = R.notes.filter(function (n) { return n.m && n.m.visible && !n.judged; });
    o.nearShip = flying.length > 0 && flying.every(function (n) { return n.m.y <= mast + 2 && n.m.y >= mast - 420 * R.k; });
    o.big = flying.length ? Math.round(flying[0].m.displayHeight) : 0; o.band = !!(R.drum || R.laneG);
    o.mom = R.mom;
    return o;
  });
  await shot("03-level-12");
  check(beat.countIn === 3 && beat.liveFromAhead && beat.perfect >= 3 && beat.marks >= 2 && beat.nearShip && beat.big >= 50 && !beat.band && beat.mom > 0.7, "after a 3-2-1 count-in the song's notes fly in big over the sea to the ring on the ship (no band at the bottom), and strokes as they land build the crew's stroke: " + JSON.stringify(beat));

  /* the song is not a steady count: phrases of long and short notes and rests (level 12: no off-beats yet) */
  var song = await page.evaluate(function () {
    var s = SolScene, R = s.rw, o = {}, bars = [], j;
    s.rowStop(); R.plainLeft = 0;
    for (j = 0; j < 40; j++) { var n0 = R.notes.length; s.rowMeasure(R.clock + 1e6 + j * R.bd * 4); bars.push(R.notes.slice(n0)); }
    var key = function (b) { return b.map(function (n) { return Math.round((n.t - b[0].t) / R.bd * 2) / 2; }).join(","); };
    var pats = {}; bars.forEach(function (b) { pats[key(b) + "@" + Math.round(((b[0].t - R.clock - 1e6) % (R.bd * 4)) / R.bd * 2) / 2] = 1; });
    o.patterns = Object.keys(pats).length;
    o.long = bars.filter(function (b) { return b.length < 4; }).length;
    o.off = R.notes.filter(function (n) { return n.kind !== "beat"; }).length;
    o.pitches = Object.keys(R.notes.reduce(function (a, n) { a[n.f] = 1; return a; }, {})).length;
    o.acc = R.acc.length;
    s.rowStop();
    return o;
  });
  check(song.patterns >= 5 && song.long >= 10 && song.off === 0 && song.pitches >= 4 && song.acc >= 40,
    "level 12's song changes from bar to bar (long notes, rests), sung on several pitches over a lyre, with no off-beats yet: " + JSON.stringify(song));

  /* strokes judged: PERFECT, GOOD, MISS (early) and a stroke off the beat; misses snap Odysseus's ropes */
  var judge = await page.evaluate(async function () {
    var T = window.__rowT, s = SolScene, R = s.rw, P = R.P, o = {};
    T.quiet(); R.P.tug = s.rowParams(12).tug; s.rowRestart(0);
    await T.until(function () { return R.notes.length >= 6; });
    var n = R.notes.filter(function (x) { return x.t >= R.liveFrom; });
    var m0 = R.mom;
    o.perfect = s.rowPress(n[0].t + 8); o.momUp = R.mom > m0;
    o.good = s.rowPress(n[1].t + (P.perfectW + P.goodW) / 2);
    var x0 = R.ship.x, kx0 = R.kx;
    o.early = s.rowPress(n[2].t - (P.goodW + 60)); o.earlyWord = R.fb2.text; o.tug = R.kx < kx0;
    o.off = s.rowPress((n[3].t + n[4].t) / 2);
    o.missRun = R.missRun; o.fb = R.fb.text;
    await T.until(function () { return R.ropesShown === P.breakAt - 2; }, 5000);
    o.ropes = R.ropeTxt.text;
    o.late = s.rowPress(n[5].t + (P.goodW + 40)); o.lateWord = R.fb2.text;
    s.rowStop(); R.missRun = 0;
    return o;
  });
  check(judge.perfect === "perfect" && judge.momUp && judge.good === "good" && judge.early === "miss" && /EARLY/.test(judge.earlyWord) && judge.tug && judge.off === "off" && judge.missRun === 2 && /○○/.test(judge.ropes) && judge.late === "miss" && /LATE/.test(judge.lateWord),
    "strokes are judged by timing: PERFECT, GOOD, MISS (too early / too late) and off the beat; a miss tugs the ship toward the rocks and snaps one of Odysseus's ropes: " + JSON.stringify(judge));

  /* real input: Space, a click on the sea and the ROW button all row; a click does not steer */
  var p0 = await page.evaluate(async function () {
    var T = window.__rowT, s = SolScene, R = s.rw;
    T.quiet(); s.spareLives = 9; R.P.breakAt = 99; s.rowRestart(0);
    await T.until(function () { return R.clock > R.liveFrom + 50; }, 60000);
    return { presses: R.stats.presses, x: R.ship.x };
  });
  /* one input at a time: wait until the game has counted it and moved on (two inputs in one frame are one stroke) */
  async function stroke(send) {
    var n0 = await page.evaluate(function () { var R = SolScene.rw; return { n: R.stats.presses, c: R.clock }; });
    await send();
    await page.waitForFunction(function (n0) { var R = SolScene.rw; return R.stats.presses > n0.n && R.clock > n0.c + 150; }, n0, { timeout: 30000 }).catch(function () {});
  }
  var cb = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  await stroke(function () { return page.keyboard.press("Space"); });
  await stroke(function () { return page.mouse.click(cb.x + cb.w * 0.6, cb.y + cb.h * 0.35); });
  await stroke(function () { return page.click("#btn-action"); });
  var p1 = await page.evaluate(async function () { var T = window.__rowT, s = SolScene, R = s.rw; await T.wait(150); R.P.breakAt = s.rowParams(12).breakAt; return { presses: R.stats.presses, x: R.ship.x }; });
  check(p1.presses - p0.presses === 3 && Math.abs(p1.x - p0.x) < 2, "Space, a click and the ROW button each count as a stroke, and a click does not steer: " + JSON.stringify({ strokes: p1.presses - p0.presses, moved: Math.round(p1.x - p0.x) }));

  /* steering: full only with a strong stroke; the song pulls toward the rocks, harder in a swell */
  var steer = await page.evaluate(async function () {
    var T = window.__rowT, s = SolScene, R = s.rw, P0 = s.rowParams(12), o = {};
    async function rate(mom, key, ms) {
      R.ship.x = (R.chanL + R.chanR) / 2; R.mom = mom;
      if (key) s.keys[key].isDown = true;
      var x0 = R.ship.x, c0 = R.clock;
      await T.until(function () { return R.clock - c0 >= ms; });
      if (key) s.keys[key].isDown = false;
      return (R.ship.x - x0) / ((R.clock - c0) / 1000);
    }
    T.quiet(); s.spareLives = 9;
    o.weak = await rate(0, "RIGHT", 300);
    o.strong = await rate(1, "RIGHT", 300);
    o.left = await rate(1, "LEFT", 300);
    R.P.pull = P0.pull;
    o.calm = await rate(0, null, 600);
    R.song.state = "swell"; R.song.t = 0; R.song.cd = 1e12; R.P.swellMs = 1e9;
    o.swell = await rate(0, null, 600);
    o.swellStrong = await rate(1, null, 600);
    o.label = R.songLabel.text; o.tint = R.tint.alpha;
    T.quiet();
    return o;
  });
  check(steer.strong > 2 * steer.weak && steer.weak > 0 && steer.left < 0 && steer.calm < 0 && steer.swell < 1.5 * steer.calm && steer.swellStrong > steer.swell && /PULLS/.test(steer.label) && steer.tint > 0.2,
    "◀ ▶ steer, at full speed only with a strong stroke; the song drags the ship toward the rocks, much harder in a swell (less with a strong stroke): " + JSON.stringify(steer));

  /* the passages: past a wrong letter costs a life and crosses it out; a crossed-out passage is safe after */
  var gates = await page.evaluate(async function () {
    var T = window.__rowT, s = SolScene, R = s.rw, o = {};
    T.quiet(); s.score = 0; s.extracted = [];
    var need = s.need.slice(), letters = s.choiceLetters(), wrongL = letters.filter(function (L) { return need.indexOf(L) === -1; })[0];
    o.need = need.join(""); o.letters = letters.join("");
    var row = await T.sail(letters, wrongL);
    var g = row.gates.filter(function (x) { return x.letter === wrongL; })[0];
    o.wrong = s.strikes; o.label = s._lastHitLabel; o.mark = g.state; o.cross = g.mk.visible && g.mk.text === "✕"; o.score = s.score;
    s.strikes = 0; s.iframeMs = 0;
    var later = await T.sail(letters, wrongL);
    var g2 = later.gates.filter(function (x) { return x.letter === wrongL; })[0];
    o.laterMark = g2.state; o.again = s.strikes; o.dead = R.dead.slice();
    T.quiet();
    return o;
  });
  check(gates.wrong === 1 && /WRONG LETTER/.test(gates.label || "") && gates.mark === "wrong" && gates.cross && gates.score === 0 && gates.laterMark === "wrong" && gates.again === 0,
    "steering through a wrong letter's passage costs a life and crosses the letter out; its passage in the next line is crossed out and safe: " + JSON.stringify(gates));

  /* the hazards: the Sirens' rocks, and Odysseus breaking free when the rhythm collapses */
  var haz = await page.evaluate(async function () {
    var T = window.__rowT, s = SolScene, R = s.rw, P = R.P, o = {};
    T.quiet();
    R.ship.x = s.rowEdgeX(R.ship.y) - 2;
    await T.until(function () { return s.strikes > 0; });
    o.rocks = s.strikes; o.rocksLabel = s._lastHitLabel; o.regroup = R.countIn.length === 3 && R.liveFrom > R.clock;
    await T.until(function () { return R.kx < 60; });
    o.pushed = R.ship.x - R.hull > s.rowEdgeX(R.ship.y) + 2;
    /* the rhythm: every miss in a row snaps a rope; the last one sets him free */
    T.quiet(); s.rowRestart(0);
    o.breakAt = P.breakAt;
    await T.until(function () { return R.notes.some(function (n) { return n.t >= R.liveFrom; }); }, 30000);
    o.ropes = [];
    var m0 = R.stats.miss;
    await T.until(function () { o.ropes.push(R.ropeTxt.text); return s.strikes > 0; }, 90000);
    o.free = s.strikes; o.freeLabel = s._lastHitLabel; o.misses = R.stats.miss - m0; o.breaks = R.stats.breaks;
    o.retied = R.missRun === 0 && R.countIn.length === 3 && R.liveFrom > R.clock;
    o.ropes = o.ropes.filter(function (t, i, a) { return a.indexOf(t) === i; });
    T.quiet();
    return o;
  });
  check(haz.rocks === 1 && /SIRENS' ROCKS/.test(haz.rocksLabel || "") && haz.regroup && haz.pushed, "the song dragging the ship onto the Sirens' rocks costs a life; the crew pushes off and finds the beat again: " + JSON.stringify({ rocks: haz.rocks, label: haz.rocksLabel, regroup: haz.regroup, pushed: haz.pushed }));
  check(haz.free === 1 && /BROKE FREE/.test(haz.freeLabel || "") && haz.misses === haz.breakAt && haz.breakAt === 4 && haz.breaks >= 1 && haz.retied && haz.ropes.length >= 3,
    "letting the beat go: each miss in a row snaps a rope, and at 4 Odysseus breaks free — a life; the crew ties him again and counts in: " + JSON.stringify({ free: haz.free, label: haz.freeLabel, misses: haz.misses, ropes: haz.ropes, retied: haz.retied }));

  /* Select TWO: the first right passage is half the answer (ticked from then on), the second answers it */
  var two = await page.evaluate(async function () {
    var T = window.__rowT, s = SolScene, R = s.rw, o = {};
    T.quiet(); s.extracted = []; var sc0 = s.score, letters = s.choiceLetters(), pair = letters.slice(0, 2);
    s.need = pair.slice();
    await T.sail(letters, pair[0]);
    o.first = s.score - sc0; o.found = s.extracted.join(""); o.strikes = s.strikes;
    var later = await T.sail(letters, pair[0]);
    var g = later.gates.filter(function (x) { return x.letter === pair[0]; })[0];
    o.ticked = g.state === "right" && g.mk.text === "✓" && g.mk.visible; o.afterTick = s.score - sc0 + s.strikes;
    T.quiet();
    var coins = s.nightCoins;
    await T.sail(letters, pair[1]);
    o.second = s.score - sc0; o.coins = s.nightCoins > coins; o.strikes2 = s.strikes;
    return o;
  });
  check(two.first === 0 && two.found.length === 1 && two.strikes === 0 && two.ticked && two.afterTick === 0 && two.second === 1 && two.coins && two.strikes2 === 0,
    "a Select TWO question needs both right passages: the first is ticked and safe after, the second answers and pays coins: " + JSON.stringify(two));

  /* the next question: steering through its right passage(s) answers it */
  await closeReading();
  var right = await page.evaluate(async function () {
    var T = window.__rowT, s = SolScene, o = {}, sc = s.score, letters = s.choiceLetters();
    o.need = s.need.length;
    for (var j = 0; j < o.need; j++) { T.quiet(); await T.sail(letters, s.need[j]); }
    o.right = s.score - sc; o.strikes = s.strikes; o.tag = s.bigTag.text;
    return o;
  });
  check(right.right === 1 && right.strikes === 0 && /CORRECT/.test(right.tag), "steering through the right letter's passage answers the question: " + JSON.stringify(right));

  /* a picture of level 12 in play */
  await closeReading();
  await page.evaluate(async function () {
    var T = window.__rowT, s = SolScene, R = s.rw;
    s.spareLives = 9; R.auto = true; R.dist = R.P.rowGap - 40;
    await T.until(function () { return R.rows.length && R.rows[0].y > s.H * 0.3; }, 30000);
  });
  await shot("04-play-12");

  /* ── 3. the difficulty ramp ── */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.row.params, s = SolScene, easier = [], flat = [], n;
    var up = ["bpm", "quickP", "syncP", "denseP", "pull", "tug", "swellMul", "swellMs", "scroll", "sway"], down = ["perfectW", "goodW", "breakAt", "swellEvery", "swellWarn", "rowGap", "chanFrac"];
    for (n = 2; n <= 100; n++) {
      var a = f(n - 1), b = f(n), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n); if (!harder) flat.push(n);
    }
    var pick = function (p) { return { bpm: +p.bpm.toFixed(1), perfectW: +p.perfectW.toFixed(0), goodW: +p.goodW.toFixed(0), breakAt: p.breakAt, quickP: +p.quickP.toFixed(2), syncP: +p.syncP.toFixed(2), denseP: +p.denseP.toFixed(2), pull: +p.pull.toFixed(0), swellMul: +p.swellMul.toFixed(2), swellEvery: Math.round(p.swellEvery), swellMs: Math.round(p.swellMs), scroll: Math.round(p.scroll), rowGap: Math.round(p.rowGap), chanFrac: +p.chanFrac.toFixed(3), sway: +p.sway.toFixed(2) }; };
    return { easier: easier, flat: flat, same: JSON.stringify(s.rowParams(37)) === JSON.stringify(f(37)), l2: pick(f(2)), l12: pick(f(12)), l50: pick(f(50)), l99: pick(f(99)) };
  });
  console.log("ramp", JSON.stringify({ l2: ramp.l2, l12: ramp.l12, l50: ramp.l50, l99: ramp.l99 }));
  check(ramp.easier.length === 0 && ramp.flat.length === 0 && ramp.same, "rowParams: every level 2-100 is harder than the one before and never easier on any setting: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat }));
  var a12 = ramp.l12, a99 = ramp.l99;
  check(a12.bpm <= 75 && a12.perfectW >= 70 && a12.goodW >= 150 && a12.breakAt === 4 && a12.quickP === 0 && a12.syncP === 0 && a12.denseP === 0 && a12.pull <= 30 && a12.swellEvery >= 9000 && a12.chanFrac >= 0.95,
    "level 12 is fair for a first try: a slow song, wide timing windows, no quick notes or syncopation, 4 ropes, a gentle song, a wide channel: " + JSON.stringify(a12));
  check(a99.bpm >= 125 && a99.perfectW <= 40 && a99.goodW <= 95 && a99.breakAt === 3 && a99.quickP >= 0.7 && a99.syncP >= 0.55 && a99.denseP >= 0.4 && a99.pull >= 3 * a12.pull && a99.swellEvery <= 4000 && a99.rowGap <= 0.6 * a12.rowGap && a99.chanFrac <= 0.75 && a99.sway > 0,
    "level 99 is intense: a fast song, narrow windows, quick notes, syncopation and busy runs, 3 ropes, a strong song that swells often, posts coming fast through a narrow, drifting channel: " + JSON.stringify(a99));

  /* ── 4. level 98: the late features run ── */
  await gotoLevel(98);
  var late = await page.evaluate(async function () {
    var T = window.__rowT, s = SolScene, R = s.rw, o = { mode: s.mode.id, tier: s.tier, card: (document.getElementById("mode-card") || {}).textContent || "", breakAt: R.P.breakAt, ropes: R.ropeTxt.text };
    var kinds = {};
    s.rowStop(); R.genT = R.clock; R.plainLeft = 0;
    var bars = [];
    for (var j = 0; j < 60; j++) { var n0 = R.notes.length; s.rowMeasure(R.clock + 1e6 + j * R.bd * 4); bars.push(R.notes.slice(n0)); }
    R.notes.forEach(function (n) { kinds[n.kind] = (kinds[n.kind] || 0) + 1; });
    o.kinds = kinds; o.perBar = R.notes.length / 60;
    o.quick = bars.filter(function (b) { return b.some(function (n, i) { return i && Math.abs(n.t - b[i - 1].t - R.bd / 2) < 1; }); }).length;
    o.sync = bars.filter(function (b) { return b.some(function (n) { return n.kind === "off" && !b.some(function (x) { return Math.abs(n.t - x.t - R.bd / 2) < 1; }); }); }).length;
    o.busy = bars.filter(function (b) { return b.length >= 6; }).length;
    s.rowRestart(300);
    var row = s.rowMakeRow(s.choiceLetters(), 120), b0 = row.b[1];
    await T.until(function () { return Math.abs(row.b[1] - b0) > 3; }, 8000);
    o.drift = Math.abs(row.b[1] - b0) > 3;
    s.rowKillRow(row); R.rows.splice(R.rows.indexOf(row), 1);
    s.spareLives = 9; R.auto = true; R.dist = R.P.rowGap - 30;
    await T.until(function () { return R.rows.length && R.rows[0].y > s.H * 0.25 && R.stats.perfect > 4; }, 30000);
    o.rows = R.rows.length; o.reef = s.W - R.chanR;
    return o;
  });
  await shot("05-play-98");
  check(late.mode === "row" && late.tier === 9 && /New this time/.test(late.card) && /Ithaca/.test(late.card) && late.breakAt === 3 && /^ROPES [●○]{3}$/.test(late.ropes) && late.kinds.off > 0 && late.quick > 0 && late.sync > 0 && late.busy > 0 && late.drift && late.reef > 150,
    "level 98: three ropes, quick notes, syncopation and busy runs in the song, drifting posts, a reef narrowing the channel, and the card says what's new: " + JSON.stringify({ mode: late.mode, tier: late.tier, ropes: late.ropes, card: late.card.slice(-120), breakAt: late.breakAt, kinds: late.kinds, quick: late.quick, sync: late.sync, busy: late.busy, perBar: +late.perBar.toFixed(2), drift: late.drift, reef: Math.round(late.reef) }));

  console.log("errors (dev page):", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors on the dev page acting as the Odyssey build");

  /* ── 5. the builds ── */
  if (process.env.NO_BUILD !== "1") {
    try { cp.execFileSync(process.execPath, [path.join(repo, "tools", "build-games.js")], { cwd: repo, stdio: "pipe" }); console.log("built dist/"); }
    catch (eB) { check(false, "node tools/build-games.js: " + String(eB.stderr || eB.message).slice(0, 300)); }
  }
  var odyDir = path.join(repo, "dist", "ody"), vaDir = path.join(repo, "dist", "va");
  if (fs.existsSync(path.join(odyDir, "index.html")) && fs.existsSync(path.join(vaDir, "index.html"))) {
    await page.close();   /* one game at a time: a second page rendering in the background starves the first */
    var page2 = await browser.newPage({ viewport: { width: 1366, height: 768 } }), errs2 = [];
    page2.on("pageerror", function (e) { errs2.push("pageerror: " + e.message); });
    page2.on("console", function (m) { if (m.type() === "error" || m.type() === "warning") { var t = m.text(); if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader/i.test(t)) errs2.push(m.type() + ": " + t); } });
    page = page2;
    /* dist/ody: the card, and the mode plays (level 1 when picked alone; level 12 in the Odyssey rotation) */
    root = odyDir;
    await page.goto(base + "index.html", { waitUntil: "load" });
    await page.evaluate(function () { localStorage.clear(); });
    await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(800);
    var od = await page.evaluate(function () { return { state: window.SOL_STATE, title: !document.getElementById("title-screen").classList.contains("hidden") }; });
    await page.click('#title-screen .card[data-family="ODY"]');
    await page.waitForSelector("#mode-screen:not(.hidden)");
    od.card = await page.evaluate(function () { var c = document.querySelector('#mode-packs .card[data-gamemode="row"]'); return c && c.offsetParent ? c.textContent : ""; });
    await page.click('#mode-packs .card[data-gamemode="row"]');
    await page.waitForSelector("#skill-screen:not(.hidden)");
    await page.click("#btn-skill-start"); await page.waitForTimeout(300);
    if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
    await page.waitForTimeout(2500);
    for (i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(300); }
    await closeReading();
    await page.evaluate(HELPERS);
    od.l1 = await page.evaluate(async function () {
      var T = window.__rowT, s = SolScene;
      await T.until(function () { return s.rw && !s.readOpen && s.rw.stats.miss + s.rw.stats.perfect > 0; }, 60000);
      return { night: s.night, mode: s.mode && s.mode.id, saved: localStorage.getItem("afterHours.ody.gameMode"), ticking: !!s.rw && s.rw.clock > 1000, island: s.realm && s.realm.name };
    });
    await page.evaluate(function () { SolModes.only = null; });
    await gotoLevel(12);
    od.l12 = await page.evaluate(async function () {
      var T = window.__rowT, s = SolScene, R = s.rw;
      s.spareLives = 9; R.auto = true; R.dist = R.P.rowGap - 40;
      await T.until(function () { return R.rows.length && R.rows[0].y > s.H * 0.3 && R.stats.perfect > 2; }, 30000);
      return { mode: s.mode.id, night: s.night, island: s.realm && s.realm.name, rows: R.rows.length, perfect: R.stats.perfect, card: (document.getElementById("mode-card") || {}).textContent || "" };
    });
    await page.screenshot({ path: path.join(shots, "row-06-dist-ody-12.png") });
    console.log("dist/ody", JSON.stringify(od));
    check(od.state === "ODY" && od.title && /Row Past the Sirens/.test(od.card) && od.l1.mode === "row" && od.l1.ticking && od.l1.saved === "row",
      "dist/ody: the mode screen offers Row Past the Sirens, and picked alone it plays from level 1: " + JSON.stringify(od.l1));
    check(od.l12.mode === "row" && od.l12.night === 12 && od.l12.rows > 0 && od.l12.perfect > 2 && /Lotus/.test(od.l12.island || ""), "dist/ody: level 12 (the Lotus-Eaters' island) plays it in the Odyssey rotation: " + JSON.stringify({ mode: od.l12.mode, island: od.l12.island, rows: od.l12.rows }));
    console.log("errors (dist/ody):", errs2.length ? errs2 : "none");
    check(errs2.length === 0, "dist/ody: no page errors");
    /* dist/va: no card, and a saved pick of it falls back to All modes */
    root = vaDir;
    await page.goto(base + "index.html", { waitUntil: "load" });
    await page.evaluate(function () { localStorage.clear(); localStorage.setItem("afterHours.v1.gameMode", "row"); });
    await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(800);
    await page.click('#title-screen .card[data-family="G9"]');
    await page.waitForSelector("#mode-screen:not(.hidden)");
    var va = await page.evaluate(function () {
      var ids = Array.prototype.map.call(document.querySelectorAll("#mode-packs .card"), function (c) { return c.getAttribute("data-gamemode"); });
      return { state: window.SOL_STATE, ids: ids.join(","), only: SolModes.only, l12: (SolModes.modeFor(12) || {}).id || "-", text: document.getElementById("mode-packs").textContent };
    });
    await page.screenshot({ path: path.join(shots, "row-07-dist-va-modes.png") });
    console.log("dist/va", JSON.stringify(va));
    check(va.state === "VA" && va.ids.indexOf("row") === -1 && !/Sirens/.test(va.text) && va.only === null && va.l12 !== "row", "dist/va: the mode screen does not offer Row Past the Sirens, a saved pick of it falls back to All modes, and its rotation never plays it: " + JSON.stringify({ ids: va.ids, only: va.only, l12: va.l12 }));
    check(errs2.length === 0, "dist/va: no page errors");
    root = repo;
  } else check(false, "dist/ody and dist/va exist (run node tools/build-games.js)");

  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
