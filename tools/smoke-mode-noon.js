/* Headless test of the Lit and Film mode "noon" (Showdown at Noon, High Noon; js/mode-noon.js): node tools/smoke-mode-noon.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Westerns, then High Noon, and drives the mode through the scene's own methods and through real keys, the
   mouse and the DRAW button: the clock ticks to the bell, drawing before the bell is a foul (a warning the first
   time on levels 1-10, then a life), the right outlaw scores, a wrong one costs a life, an outlaw's shot costs a life
   unless you duck, the rooftop gunman's too (and shooting him pays), barrels block shots, Select TWO needs both, the
   difficulty climbs every level 2-100, and the reading pop-up names the game and its controls. It plays levels 1, 10,
   50, 65, 75 and 100, and the 500-pixel-tall Canvas frame. Screenshots go to tools/shots/noon-*.png.
   Prints ALL OK or the number FAILED. Other movies' content files may still be being written: their 404s and
   syntax errors are reported and ignored. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var repo = path.join(__dirname, ".."), root = repo, shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", mp3: "audio/mpeg", webp: "image/webp", svg: "image/svg+xml", glb: "model/gltf-binary" };
var srv = http.createServer(function (req, res) {
  var f = path.join(root, decodeURIComponent(url.parse(req.url).pathname));
  if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, function (err, buf) {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": MIME[f.split(".").pop()] || "application/octet-stream" }); res.end(buf);
  });
});
var LONG = 240000;   /* the machine may be busy: every wait is generous, and the game's own clock is used, not the wall clock */

(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var errors = [], ignored = [], fails = [];
  function watch(page, tag) {
    page.on("response", function (r) { if (r.status() === 404) { var u = r.url(); if (/content1(1[4-9]|20)\.js/.test(u)) ignored.push("404 " + u); else console.log(tag + " 404 " + u); } });
    page.on("pageerror", function (e) {
      var st = String(e.stack || "");
      /* another movie's content file half-written: a syntax error that is not in this mode's file */
      if (/SyntaxError|Unexpected (end of input|token)|Invalid or unexpected token/.test(e.name + " " + e.message) && !/mode-noon/.test(st)) { ignored.push(tag + " " + e.message); return; }
      errors.push(tag + " pageerror: " + e.message + " " + st.split("\n").slice(0, 3).join(" | "));
    });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|404/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  /* ── the dev page, as the Lit and Film build ── */
  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  page.setDefaultTimeout(LONG);
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png"), timeout: LONG }); console.log("shot  tools/shots/" + name + ".png"); }
  await page.goto(base + "index.html", { waitUntil: "load", timeout: LONG });
  await page.waitForTimeout(900);
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build (its card is on the title screen)");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector('#mode-packs .card[data-genre="WESTERN"]');
  await page.click('#mode-packs .card[data-genre="WESTERN"]');
  await page.waitForSelector('#skill-packs .card[data-gamemode="noon"]');
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="noon"]');
    return c ? { text: c.textContent, strand: c.getAttribute("data-strand"), visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && /High Noon/.test(card.text) && /Showdown at Noon/.test(card.text), "the High Noon card shows on the Westerns movie screen and names its game: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="noon"]');
  var picked = await page.evaluate(function () {
    return { only: SolModes.only, def: !!SolModes.MODES.noon, l1: SolModes.modeFor(1).id, l10: SolModes.modeFor(10).id, l55: SolModes.modeFor(55).id, l100: SolModes.modeFor(100).id };
  });
  check(picked.only === "noon" && picked.def && picked.l1 === "noon" && picked.l10 === "noon" && picked.l55 === "noon" && picked.l100 === "noon", "picking High Noon plays Showdown at Noon on every level: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: LONG }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  async function gotoLevel(n) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "HIGHNOON", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.nn && s.claim && s.readOpen; }, n, { timeout: LONG }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, strand: s.strand, act: document.getElementById("btn-action").textContent,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: LONG }).catch(function () {});
    await page.waitForTimeout(200);
    return info;
  }
  /* the game's own helpers, put on the page once per level (the scene is new each time) */
  async function helpers() {
    await page.evaluate(function () {
      var s = SolScene, R = s.nn;
      window.__wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
      window.__until = async function (f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 200000)) await window.__wait(40); return f(); };
      /* no hazards of the game's own while a check runs */
      window.__quiet = function () {
        R.P.drawMs = 1e9; R.nextAim = 1e9; R.P.roof = 0; R.roofAt = -1; R.P.dust = 0; R.P.fakes = 0; R.fakeAt = []; R.swapAt = [];
        R.outlaws.forEach(function (o) { if (o.st === "aim" || o.st === "shoot") { o.st = "stand"; o.pose = "stand"; } o.cover = false; });
        s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0; R.grace = 0; R.cd = 0; R.ammo = 6; R.reload = 0;
        ["SPACE", "S", "DOWN", "LEFT", "RIGHT", "A", "D", "SHIFT"].forEach(function (k) { if (s.keys[k]) s.keys[k].isDown = false; });
      };
      window.__byLetter = function (L) { return R.outlaws.filter(function (o) { return o.letter === L; })[0]; };
      window.__chest = function (o) { var c = s.noonChest(o), cr = s.game.canvas.getBoundingClientRect(); return { x: cr.left + c.x * cr.width / s.W, y: cr.top + c.y * cr.height / s.H }; };
      /* skip the rest of the wait: the remaining ticks come quickly, and the bell is the clock's own */
      window.__toBell = async function () {
        R.plan = R.plan.map(function () { return 40; }); R.nextTick = Math.min(R.nextTick, 40);
        R.outlaws.forEach(function (o) { if (o.st === "wait") o.delay = 0; });
        await window.__until(function () { return R.phase === "draw"; });
        await window.__until(function () { return R.outlaws.every(function (o) { return o.st !== "walk" && o.st !== "wait" && o.st !== "swap"; }); });
      };
    });
  }

  /* ═══ level 1 ═══ */
  var l1 = await gotoLevel(1);
  check(l1.key === "mode" && l1.mode === "noon" && l1.act === "DRAW" && l1.strand === "HIGHNOON", "level 1 runs Showdown at Noon in the mode scene, with High Noon's questions and a DRAW button: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act, strand: l1.strand }));
  check(/Showdown at Noon/.test(l1.card) && /quick-draw level/.test(l1.card) && /Controls:/.test(l1.card) && /Space, DRAW/.test(l1.card) && /duck/.test(l1.card) && /foul/.test(l1.card) && /Wait for the bell/.test(l1.hint),
    "the reading pop-up names the game and explains it, its lives and its controls: " + l1.card.slice(0, 140) + "…");
  await helpers();
  var a = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, o = {};
    __quiet();
    o.letters = s.choiceLetters().join(""); o.posters = R.outlaws.map(function (q) { return q.txt.text; }).join("");
    o.phase = R.phase; o.min = R.min; o.mark = R.mark; o.ticks = R.ticksLeft;
    o.markFirst = s.noonMarkMin(0); o.markLast = s.noonMarkMin(s.needExtracts - 1); o.need = s.needExtracts;
    /* the outlaws step out of the doorways and take their places (quickly here: the test machine may be slow) */
    R.outlaws.forEach(function (q) { q.delay = Math.min(q.delay, 60); q.walk = 300; });
    await __until(function () { return R.outlaws.every(function (q) { return q.st === "stand"; }); });
    o.standing = R.outlaws.every(function (q) { return q.st === "stand" && q.spr.visible && q.poster.visible; });
    o.onScreen = R.outlaws.every(function (q) { return q.sx > 0 && q.sx < s.W && q.poster.y - 45 * q.ps > 0 && q.sy < s.H; });
    o.ticked = R.min > o.min || R.ticksLeft < o.ticks;
    return o;
  });
  check(a.letters.length >= 3 && a.posters === a.letters && a.phase === "enter" && a.mark - a.min === 5 && a.ticks === 5, "one outlaw per answer letter, each under a wanted poster with his letter; the clock starts five minutes before the bell: " + JSON.stringify(a));
  check(a.markLast === 120 && a.markFirst === 120 - 15 * (a.need - 1) && a.mark === a.markFirst, "the last showdown of the level is at twelve noon, the others on the quarter hours: " + JSON.stringify({ first: a.markFirst, last: a.markLast }));
  check(a.standing && a.onScreen, "the outlaws walk out into the street and stand in full view, posters on screen: " + JSON.stringify({ standing: a.standing, onScreen: a.onScreen }));
  await shot("noon-01-wait-level1");

  /* real keys during the wait: ◀ ▶ pick an outlaw (aiming is allowed); Space before the bell is a foul */
  await page.evaluate(function () { __quiet(); SolScene.nn.lock = null; });
  await page.keyboard.down("ArrowRight"); await page.waitForFunction(function () { return !!SolScene.nn.lock; }, null, { timeout: LONG }).catch(function () {}); await page.keyboard.up("ArrowRight");
  await page.waitForFunction(function () { return SolScene.nn.prevAx === 0; }, null, { timeout: LONG }).catch(function () {});
  var k1 = await page.evaluate(function () { var R = SolScene.nn; window.__l1 = R.lock; return R.lock ? R.lock.slot : -1; });
  await page.keyboard.down("ArrowRight"); await page.waitForFunction(function () { return SolScene.nn.lock !== window.__l1; }, null, { timeout: LONG }).catch(function () {}); await page.keyboard.up("ArrowRight");
  await page.waitForFunction(function () { return SolScene.nn.prevAx === 0; }, null, { timeout: LONG }).catch(function () {});
  var k2 = await page.evaluate(function () { var R = SolScene.nn; return R.lock ? R.lock.slot : -1; });
  await page.keyboard.down("a"); await page.waitForFunction(function () { return SolScene.nn.lock === window.__l1; }, null, { timeout: LONG }).catch(function () {}); await page.keyboard.up("a");
  var k3 = await page.evaluate(function () { var R = SolScene.nn; return { slot: R.lock ? R.lock.slot : -1, strikes: SolScene.strikes, fouls: R.fouls }; });
  check(k1 >= 0 && k2 === k1 + 1 && k3.slot === k1 && k3.strikes === 0 && k3.fouls === 0, "▶ and A move the sight from outlaw to outlaw, and aiming before the bell is no foul: " + JSON.stringify({ k1: k1, k2: k2, k3: k3 }));
  async function pressSpace(cond) {
    await page.keyboard.down("Space");
    await page.waitForFunction(cond, null, { timeout: LONG }).catch(function () {});
    await page.keyboard.up("Space");
    await page.waitForFunction(function () { return !SolScene.nn.prevFire; }, null, { timeout: LONG }).catch(function () {});
  }
  await page.evaluate(function () { var s = SolScene, R = s.nn; __quiet(); R.plan = R.plan.map(function () { return 1e6; }); R.nextTick = 1e6; });
  await pressSpace(function () { return SolScene.nn.fouls >= 1; });
  var foul1 = await page.evaluate(function () { var s = SolScene, R = s.nn; return { fouls: R.fouls, strikes: s.strikes, phase: R.phase, big: R.txBig.text, toast: s.scoreToastMsg }; });
  await page.evaluate(function () { SolScene.iframeMs = 0; });
  await pressSpace(function () { return SolScene.nn.fouls >= 2; });
  var foul2 = await page.evaluate(function () { var s = SolScene, R = s.nn; return { fouls: R.fouls, strikes: s.strikes, label: s._lastHitLabel, phase: R.phase }; });
  check(foul1.fouls === 1 && foul1.strikes === 0 && foul1.phase !== "draw" && /FOUL/.test(foul1.big) && /warning/.test(foul1.toast), "level 1: Space before the bell is a foul, and the first one is only a warning: " + JSON.stringify(foul1));
  check(foul2.fouls === 2 && foul2.strikes === 1 && /FOUL/.test(foul2.label || ""), "the next foul costs a life: " + JSON.stringify(foul2));

  /* the clock ticks to the bell; then DRAW */
  var bell = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, o = {};
    __quiet();
    var m0 = R.min, t0 = R.ticksLeft;
    await __toBell();
    o.ticked = R.min - m0; o.ticks = t0; o.phase = R.phase; o.atMark = R.min === R.mark; o.big = R.txBig.text; o.status = R.txStatus.text;
    return o;
  });
  check(bell.phase === "draw" && bell.atMark && /DRAW/.test(bell.big) && /DRAW/.test(bell.status), "the minute hand ticks to the mark, the bell strikes and it is DRAW: " + JSON.stringify(bell));
  await page.waitForTimeout(250);
  await shot("noon-02-draw-level1");

  /* after the bell: a wrong letter with Space costs a life; the outlaw leaves the street */
  await page.evaluate(function () {
    var s = SolScene, R = s.nn; __quiet();
    var w = R.outlaws.filter(function (q) { return s.need.indexOf(q.letter) === -1 && q.res === "live"; })[0];
    R.lock = w; window.__w = w; window.__sc0 = s.score;
  });
  await pressSpace(function () { return window.__w.res !== "live"; });
  var wrong = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, w = window.__w;
    var o = { strikes: s.strikes, res: w.res, mark: w.mark.text, label: s._lastHitLabel, score: s.score - window.__sc0, ammo: R.ammo, guns: R.guns.length };
    await __until(function () { return w.st === "leave" || w.st === "gone"; });
    o.gone = w.st === "leave" || w.st === "gone"; o.targetable = s.noonTargets().indexOf(w) !== -1;
    return o;
  });
  check(wrong.strikes === 1 && wrong.res === "dead" && wrong.mark === "✕" && /WRONG LETTER/.test(wrong.label || "") && wrong.score === 0 && wrong.ammo === 5 && wrong.guns >= 1 && wrong.gone && !wrong.targetable,
    "after the bell, Space on a wrong letter: his gun flies, a life, his poster is crossed out and he leaves the street: " + JSON.stringify(wrong));

  /* an outlaw takes aim: standing, his shot costs a life (and knocks the hat off); ducking (holding S) dodges it */
  var shotAt = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, o = {};
    __quiet();
    var foe = R.outlaws.filter(function (q) { return q.res === "live"; })[0];
    s.noonTell(foe);
    await __until(function () { return /DUCK/.test(R.txStatus.text) || foe.st !== "aim"; });
    o.aiming = { st: foe.st, status: R.txStatus.text };
    await __until(function () { return foe.st !== "aim"; });
    o.strikes = s.strikes; o.label = s._lastHitLabel; o.hat = !!R.hatOff;
    window.__foe = foe;
    return o;
  });
  await page.evaluate(function () { __quiet(); });
  await page.keyboard.down("s");
  await page.waitForFunction(function () { return SolScene.nn.duckA >= 1; }, null, { timeout: LONG }).catch(function () {});
  var dodge = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, o = {}, foe = window.__foe, d0 = R.dodged || 0;
    s.noonTell(foe);
    await __until(function () { return foe.st !== "aim"; });
    o.strikes = s.strikes; o.dodged = (R.dodged || 0) - d0; o.duck = R.duckA;
    o.fireDucked = s.noonFire(foe.sx, foe.sy - 100 * foe.sc);
    o.status = R.txStatus.text;
    return o;
  });
  await page.keyboard.up("s");
  await page.waitForFunction(function () { return SolScene.nn.duckA <= 0; }, null, { timeout: LONG }).catch(function () {});
  check(shotAt.aiming.st === "aim" && /DUCK/.test(shotAt.aiming.status) && shotAt.strikes === 1 && shotAt.label === "OUTGUNNED" && shotAt.hat, "an outlaw takes aim (DUCK! on the sign); standing there, his shot costs a life and knocks the marshal's hat off: " + JSON.stringify(shotAt));
  check(dodge.strikes === 0 && dodge.dodged === 1 && dodge.duck === 1 && dodge.fireDucked === "ducked", "holding S ducks behind the trough: the shot hits the trough, no life (and you can't shoot while ducked): " + JSON.stringify(dodge));

  /* the DRAW button fires: at empty sky it is a miss, no life */
  await page.evaluate(function () { var s = SolScene, R = s.nn; __quiet(); R.lock = null; R.lockMouse = false; R.sx = s.W * 0.5; R.sy = s.H * 0.04; window.__s0 = R.shots; });
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.nn.shots > window.__s0; }, null, { timeout: LONG }).catch(function () {});
  await page.mouse.up();
  var btn = await page.evaluate(function () { var s = SolScene, R = s.nn; return { shots: R.shots - window.__s0, strikes: s.strikes, ammo: R.ammo }; });
  check(btn.shots === 1 && btn.strikes === 0 && btn.ammo === 5, "the on-screen DRAW button fires the six-shooter; a miss costs nothing but a bullet: " + JSON.stringify(btn));

  /* the mouse: hovering an outlaw puts the sight on him; clicking the right one answers the question and pays */
  var right = await page.evaluate(function () { __quiet(); var s = SolScene, o = __byLetter(s.need[0]); window.__r = o; window.__sc0 = s.score; window.__c0 = s.nightCoins; return __chest(o); });
  await page.mouse.move(right.x - 40, right.y + 30); await page.waitForTimeout(100);
  await page.mouse.move(right.x, right.y, { steps: 3 });
  await page.waitForFunction(function () { return SolScene.nn.lock === window.__r; }, null, { timeout: LONG }).catch(function () {});
  var hover = await page.evaluate(function () { return SolScene.nn.lock === window.__r; });
  await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.score > window.__sc0 || SolScene.strikes > 0; }, null, { timeout: LONG }).catch(function () {});
  await page.mouse.up();
  var rightRes = await page.evaluate(function () { var s = SolScene, R = s.nn; return { score: s.score - window.__sc0, strikes: s.strikes, coins: s.nightCoins > window.__c0, res: window.__r.res, mark: window.__r.mark.text, between: s._between, phase: R.phase }; });
  check(hover && rightRes.score === 1 && rightRes.strikes === 0 && rightRes.coins && rightRes.res === "found" && rightRes.phase === "clear", "the mouse aims at the outlaw under it, and a click on the right one answers the question and pays coins: " + JSON.stringify({ hover: hover, res: rightRes }));
  await page.mouse.move(5, 5);

  /* the next question: the clock races on to the next quarter; then Select TWO */
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: LONG }).catch(function () {});
  var q2 = await page.evaluate(function () { var R = SolScene.nn; return { min: R.min, mark: R.mark, phase: R.phase, fresh: R.outlaws.every(function (o) { return o.res === "live" && o.st === "wait"; }), ammo: R.ammo }; });
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: LONG }).catch(function () {});
  check(q2.mark === a.mark + 15 && q2.min === q2.mark - 5 && q2.phase === "enter" && q2.fresh && q2.ammo === 6, "a new question: the clock has moved on to five minutes before the next quarter, new outlaws, a full six-shooter: " + JSON.stringify(q2));
  var two = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, o = {};
    __quiet();
    await __toBell();
    __quiet();
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, c0 = s.nightCoins, A = __byLetter(pair[0]), B = __byLetter(pair[1]);
    var ca = s.noonChest(A);
    o.r1 = s.noonFire(ca.x, ca.y);
    o.first = { score: s.score - sc0, res: A.res, mark: A.mark.text, strikes: s.strikes, found: s.extracted.join("") };
    R.cd = 0;
    var cb = s.noonChest(B);
    o.r2 = s.noonFire(cb.x, cb.y);
    o.second = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > c0 };
    return o;
  });
  check(two.r1 === "partial" && two.first.score === 0 && two.first.res === "found" && two.first.mark === "✓" && two.first.found.length === 1 && two.first.strikes === 0 && two.r2 === "done" && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right outlaws: the first is ticked, the second answers it: " + JSON.stringify(two));
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: LONG }).catch(function () {});

  /* the six-shooter: six shots, then a reload */
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: LONG }).catch(function () {});
  await helpers();
  var six = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, o = {};
    __quiet(); await __toBell(); __quiet();
    for (var i = 0; i < 6; i++) { R.cd = 0; s.noonFire(s.W * 0.5, s.H * 0.03); }
    o.ammo = R.ammo; o.reload = R.reload > 0; R.cd = 0;
    o.seventh = s.noonFire(s.W * 0.5, s.H * 0.03);
    await __until(function () { return R.reload <= 0; });
    o.after = R.ammo; o.strikes = s.strikes;
    return o;
  });
  check(six.ammo === 0 && six.reload && six.seventh === "reload" && six.after === 6 && six.strikes === 0, "six shots empty the six-shooter, the seventh clicks, and it reloads by itself: " + JSON.stringify(six));

  /* the difficulty: every level 2-100 harder than the one before, never easier on any setting */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.noon.params, s = SolScene, out = { same: typeof s.noonParams === "function" && JSON.stringify(s.noonParams(50)) === JSON.stringify(f(50)) };
    var up = ["aimers", "strafe", "strafeSpd", "fakes", "swaps", "dust", "roof", "cover", "jitter", "reloadMs"], down = ["waitMs", "enterMs", "drawMs", "tellMs", "gapMs", "freeFouls", "quickMs"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    out.news = SolModes.MODES.noon.news.length;
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l50: ramp.l50, l100: ramp.l100 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0 && ramp.news === 10, "noonParams (on the def as params): every level 2-100 is harder than the one before and never easier; a news line for each tier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat, news: ramp.news }));
  var e = ramp.l1, z = ramp.l100;
  check(e.waitMs >= 7000 && e.drawMs >= 5500 && e.tellMs >= 1500 && e.gapMs >= 4500 && e.aimers === 1 && e.freeFouls === 1 && !e.strafe && !e.fakes && !e.swaps && !e.dust && !e.roof && !e.cover && !e.jitter,
    "level 1 is gentle: a seven-second count to the bell, nearly six seconds before anyone aims, a long warning before a shot, one free foul, no tricks: " + JSON.stringify(e));
  check(z.waitMs <= 2700 && z.drawMs <= 1500 && z.tellMs <= 650 && z.aimers === 3 && z.freeFouls === 0 && z.fakes >= 0.5 && z.swaps >= 1.5 && z.roof >= 0.9 && z.cover >= 0.99 && z.jitter >= 0.45,
    "level 100 is intense: a quick count, outlaws aiming at once with a short warning, three at a time, fake-outs, swaps, a rooftop gunman, barrels, an uneven clock: " + JSON.stringify(z));

  /* ═══ level 10 ═══ */
  var l10 = await gotoLevel(10);
  await helpers();
  var p10 = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, o = { tier: s.tier, free: R.P.freeFouls };
    __quiet(); await __toBell(); __quiet();
    var r = __byLetter(s.need[0]), c = s.noonChest(r), sc0 = s.score;
    o.res = s.noonFire(c.x, c.y); o.score = s.score - sc0;
    return o;
  });
  check(l10.mode === "noon" && /Showdown at Noon/.test(l10.card) && p10.tier === 0 && p10.free === 1 && p10.res === "done" && p10.score === 1, "level 10 plays Showdown at Noon and the right outlaw scores: " + JSON.stringify(p10));

  /* ═══ level 50: fake-outs, swaps, dust ═══ */
  var l50 = await gotoLevel(50);
  await helpers();
  var p50 = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, o = { tier: s.tier, fakes: R.P.fakes, swaps: R.P.swaps };
    s.iframeMs = 0; s.strikes = 0; s.spareLives = 0; s.perks = {};
    await __until(function () { return R.outlaws.every(function (q) { return q.st === "stand" || q.st === "swap"; }); });
    R.plan = R.plan.map(function () { return 1e6; }); R.nextTick = 1e6; R.fakeAt = []; R.swapAt = [];
    await __until(function () { return R.outlaws.every(function (q) { return q.st === "stand"; }); });
    /* a fake-out is not the bell: no draw, no life */
    s.noonFake(); s.noonFake();
    o.fake = { phase: R.phase, strikes: s.strikes, last: R.lastFake };
    /* two outlaws trade places while the clock ticks */
    var before = R.outlaws.map(function (q) { return q.letter + q.slot; }).join(",");
    var xs = R.outlaws.map(function (q) { return q.Xm; });
    s.noonSwap();
    var moving = R.outlaws.filter(function (q) { return q.st === "swap"; });
    o.swapping = moving.length;
    await __until(function () { return R.outlaws.every(function (q) { return q.st === "stand"; }); });
    o.swapped = moving.length === 2 && Math.abs(moving[0].X - xs[R.outlaws.indexOf(moving[1])]) < 0.01 && Math.abs(moving[1].X - xs[R.outlaws.indexOf(moving[0])]) < 0.01;
    o.slots = before !== R.outlaws.map(function (q) { return q.letter + q.slot; }).join(",");
    /* the shootout picture: one aims, and the sight is on another */
    __quiet(); await __toBell(); __quiet();
    R.P.dust = 0;
    var live = R.outlaws.filter(function (q) { return q.res === "live"; });
    s.noonTell(live[live.length - 1]).aimMs = 1e9; R.lock = live[0];
    R.dusts.push({ x: s.W * 0.18, v: 0, y: R.hy + 0.02 * s.H, img: s.add.image(0, 0, "md-noon-dust").setDepth(8.7), t: 0 });
    await __wait(500);
    return o;
  });
  await shot("noon-03-shootout-level50");
  check(l50.mode === "noon" && p50.tier === 4 && /New this time:.*trade places/.test(l50.card) && p50.fakes > 0 && p50.swaps > 0, "level 50: fake-outs and swaps are in, and the card says what's new: " + JSON.stringify({ tier: p50.tier, fakes: p50.fakes, swaps: p50.swaps }));
  check(p50.fake.phase !== "draw" && p50.fake.strikes === 0 && !!p50.fake.last, "a fake-out (a shutter, the whistle, a crow, a twitch) is not the bell and costs nothing: " + JSON.stringify(p50.fake));
  check(p50.swapping === 2 && p50.swapped && p50.slots, "two outlaws walk across and trade places, posters and all: " + JSON.stringify({ swapping: p50.swapping, swapped: p50.swapped, slots: p50.slots }));

  /* ═══ level 65: the rooftop gunman ═══ */
  var l65 = await gotoLevel(65);
  await helpers();
  var p65 = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, o = { roofP: R.P.roof };
    __quiet(); await __toBell(); __quiet();
    var rf = s.noonRoofSpawn();
    o.spawned = !!rf;
    await __until(function () { return rf.st === "aim"; });
    o.aimTargetable = s.noonTargets().indexOf(rf) !== -1;
    R.lock = rf; window.__rf = rf;
    return o;
  });
  await shot("noon-06-rooftop-level65");
  var p65b = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, o = {}, rf = window.__rf;
    await __until(function () { return rf.st !== "aim"; });
    o.hit = { strikes: s.strikes, label: s._lastHitLabel };
    s.iframeMs = 0; s.strikes = 0;
    R.duckA = 1; s.keys.S.isDown = true;
    rf.next = 0; await __until(function () { return rf.st === "aim"; }); await __until(function () { return rf.st !== "aim"; });
    o.ducked = s.strikes;
    s.keys.S.isDown = false; await __until(function () { return R.duckA <= 0; });
    var c0 = s.nightCoins, c = s.noonChest(rf); R.cd = 0;
    o.shoot = s.noonFire(c.x, c.y);
    o.paid = s.nightCoins > c0; o.dead = rf.dead; o.strikes = s.strikes;
    return o;
  });
  Object.keys(p65b).forEach(function (key) { p65[key] = p65b[key]; });
  check(l65.mode === "noon" && /New this time:.*rooftops/.test(l65.card) && p65.roofP > 0 && p65.spawned && p65.aimTargetable, "level 65: a gunman rises on a rooftop and can be aimed at: " + JSON.stringify({ roofP: p65.roofP, spawned: p65.spawned, targetable: p65.aimTargetable }));
  check(p65.hit.strikes === 1 && /ROOFTOP/.test(p65.hit.label || "") && p65.ducked === 0 && p65.shoot === "roof" && p65.paid && p65.dead && p65.strikes === 0,
    "his shot costs a life when you stand, nothing when you duck; shooting him (no letter) pays a bonus: " + JSON.stringify(p65));

  /* ═══ level 75: barrels ═══ */
  var l75 = await gotoLevel(75);
  await helpers();
  var p75 = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, o = { cover: R.P.cover };
    o.withCover = R.outlaws.filter(function (q) { return q.cover; }).length;
    __quiet();
    R.outlaws.forEach(function (q) { q.cover = !!q.cov; });
    await __toBell();
    R.P.drawMs = 1e9; R.nextAim = 1e9; R.P.roof = 0; R.roofAt = -1; s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {};
    var cq = R.outlaws.filter(function (q) { return q.cover && q.res === "live"; })[0];
    o.has = !!cq;
    if (!cq) return o;
    cq.st = "duck"; cq.upT = 1e9;
    await __until(function () { return cq.dk >= 1; });
    var c = { x: cq.sx, y: cq.sy - 40 * cq.sc }, sc0 = s.score; R.cd = 0;
    o.res = s.noonFire(c.x, c.y); o.strikes = s.strikes; o.score = s.score - sc0; o.live = cq.res;
    return o;
  });
  check(l75.mode === "noon" && /New this time:.*barrels/.test(l75.card) && p75.cover > 0 && p75.withCover >= 1 && p75.has && p75.res === "cover" && p75.strikes === 0 && p75.score === 0 && p75.live === "live",
    "level 75: some outlaws have barrels; a shot at one who has ducked behind them hits the barrel (no letter, no life): " + JSON.stringify(p75));

  /* ═══ level 100 ═══ */
  var l100 = await gotoLevel(100);
  await helpers();
  var p100 = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, o = { tier: s.tier, aimers: R.P.aimers };
    s.iframeMs = 1e9; s.spareLives = 9;
    var t0 = R.t;
    await __until(function () { return R.phase === "draw"; });
    o.bellAfter = R.t - t0;
    o.wait = R.P.waitMs;
    await __until(function () { return R.outlaws.filter(function (q) { return q.st === "aim" && q.aimT >= 0; }).length >= 2 || R.pt > 4000; });
    o.aiming = R.outlaws.filter(function (q) { return q.st === "aim"; }).length;
    /* hold the picture: the aims stay up, nothing fires, no invulnerable blink */
    R.outlaws.forEach(function (q) { if (q.st === "aim") q.aimMs = 1e9; });
    R.nextAim = 1e9; if (R.roof) R.roof.dead = true; R.roofAt = -1;
    s.iframeMs = 0; R.lock = R.outlaws.filter(function (q) { return q.res === "live"; })[0];
    await __wait(300);
    return o;
  });
  await shot("noon-04-level100");
  check(l100.mode === "noon" && p100.tier === 9 && /New this time:.*High noon/.test(l100.card) && p100.aimers === 3 && p100.bellAfter < 4000 && p100.aiming >= 2, "level 100: the bell comes quickly and several outlaws take aim at once: " + JSON.stringify(p100));

  /* the window changes size mid-level: the town is redrawn and everything keeps its place on the street */
  await page.setViewportSize({ width: 1180, height: 640 });
  await page.waitForFunction(function () { var s = SolScene; return s.nn && s.nn.sizeKey === s.W + "x" + s.H && s.H < 700; }, null, { timeout: LONG }).catch(function () {});
  await page.waitForTimeout(400);
  var rs = await page.evaluate(function () {
    var s = SolScene, R = s.nn;
    return { W: s.W, H: s.H, key: R.sizeKey, town: R.town.texture.key, posters: R.outlaws.every(function (q) { return !q.poster.visible || (q.poster.x > 0 && q.poster.x < s.W && q.poster.y > 0); }), clock: R.face.y < s.H * 0.3 };
  });
  check(rs.H < 700 && rs.town === "md-noon-town-" + rs.key && rs.posters && rs.clock, "a resize mid-level redraws the town for the new size and keeps the posters and the clock in place: " + JSON.stringify(rs));
  await page.setViewportSize({ width: 1366, height: 768 });

  /* losing: the last life ends the level with a Retry */
  var lose = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    var f0 = s._finishing;
    s.answerWrong("Z", "WRONG LETTER");
    await __until(function () { return s.ended && !document.getElementById("overlay").classList.contains("hidden"); }, 120000);
    await __wait(300);
    return { finishingBefore: f0, strikes: s.strikes, ended: s.ended, title: document.getElementById("win-title").textContent, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Showdown at Noon/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 220));
  await ctx.close();

  /* ═══ the 500-pixel-tall Canvas frame ═══ */
  var cctx = await browser.newContext({ viewport: { width: 1000, height: 500 } });
  await cctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  page = await cctx.newPage();
  page.setDefaultTimeout(LONG);
  watch(page, "frame500");
  await page.goto(base + "index.html", { waitUntil: "load", timeout: LONG });
  await page.waitForTimeout(900);
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.click('#mode-packs .card[data-genre="WESTERN"]');
  await page.click('#skill-packs .card[data-gamemode="noon"]');
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: LONG }).catch(function () {});
  for (i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  await gotoLevel(30);
  await helpers();
  var small = await page.evaluate(async function () {
    var s = SolScene, R = s.nn, o = { W: s.W, H: s.H };
    __quiet(); await __toBell(); __quiet();
    var live = R.outlaws.filter(function (q) { return q.res === "live"; });
    s.noonTell(live[0]).aimMs = 1e9; R.lock = live[live.length - 1];
    await __wait(400);
    o.posters = R.outlaws.every(function (q) { return q.poster.y - 45 * q.ps >= 0 && q.poster.x - 37 * q.ps >= 0 && q.poster.x + 37 * q.ps <= s.W && 30 * q.ps >= 17; });
    o.letterPx = Math.round(40 * Math.min.apply(null, R.outlaws.map(function (q) { return q.ps; })));
    o.marshal = R.marshal.y < s.H - 60 && R.mx > 0 && R.mx < s.W;
    o.clock = R.clock.y - R.clock.r > 0;
    var pad = R.padBox;
    o.padClear = !pad || pad.x1 <= R.trX - R.trW / 2 || pad.y1 < R.trY;
    var sc0 = s.score;
    s.need.slice().forEach(function (L) { var c = s.noonChest(__byLetter(L)); R.cd = 0; o.res = s.noonFire(c.x, c.y); });   /* both letters on a Select TWO */
    o.score = s.score - sc0;
    return o;
  });
  await page.waitForTimeout(150);
  await shot("noon-05-canvas-frame-500");
  check(small.H <= 500 && small.posters && small.letterPx >= 24 && small.marshal && small.clock && small.padClear && small.res === "done" && small.score === 1,
    "in the 500-pixel-tall frame the posters, the clock and the marshal all fit, the letters stay readable, the pad is clear, and it plays: " + JSON.stringify(small));
  await cctx.close();

  if (ignored.length) console.log("ignored (other movies' content files are being written):", ignored.length, ignored.slice(0, 4));
  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
