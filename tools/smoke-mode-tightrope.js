/* Headless test of the Lit and Film mode "tightrope" (The Tightrope, js/mode-tightrope.js): node tools/smoke-mode-tightrope.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Film History, then The Circus, and drives the mode through the scene's own methods. The game runs on the
   real loop, but the checks step it with the scene's own tick (TRT.step: 1/60 s a step), so they don't depend on
   how fast the headless browser draws: walking the wire to the right letter scores, a wrong letter costs a life and
   crosses its card out, a fall costs a life (and an automatic balancer never falls), a monkey left on his back pulls
   him off (a swat sends it flying), a banana dropped on him costs a life (walking away dodges it), a peel makes him
   slip (a swat knocks it off), drafts push him, Select TWO needs both platforms, the keys, the mouse and the SWAT
   button work, the difficulty climbs every level 2-100, and levels 1, 10 and 100 play. Screenshots go to
   tools/shots/tightrope-*.png. Prints ALL OK or the number FAILED. */
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

/* in the page: step the scene with its own tick, and an automatic walker that balances like a careful player */
function helpers() {
  var TIERS = { up: -1, mid: 0, low: 1 };
  var TRT = window.TRT = {};
  TRT.step = function (ax, ay, fire) {
    var s = window.SolScene, T = s.tr, ms = 1000 / 60;
    s.ptr.down = false;
    T.lastFrame = s.game.loop.frame - 1;
    s.tickTimers(ms);
    s.tick_tightrope(ms / 1000, { ax: ax || 0, ay: ay || 0, fire: !!fire, pull: false, ptr: null }, ms);
  };
  TRT.stop = function () { var s = window.SolScene; return s._between || s._finishing || s.ended || s.readOpen; };
  /* run for sec seconds of game time; ctl(T) returns [ax, ay, fire] */
  TRT.sim = function (sec, ctl, until) {
    var s = window.SolScene, n = Math.round(sec * 60), i;
    for (i = 0; i < n; i++) {
      if (TRT.stop() || (until && until(s.tr))) break;
      var c = ctl ? ctl(s.tr, s) || [] : [];
      TRT.step(c[0], c[1], c[2]);
    }
    return i / 60;
  };
  /* the balancer: lean a little toward where it wants to go, and hold the needle there */
  TRT.lean = function (T, goal, amt) {
    var tgt = (amt == null ? 0.3 : amt) * goal, u = (tgt - T.th) * 5 - T.om * 1.2;
    return u > 0.15 ? 1 : u < -0.15 ? -1 : 0;
  };
  TRT.hold = function (T) { return [T.where === "wire" ? TRT.lean(T, 0, 0) : 0]; };
  /* walk to the platform with letter L (back to the king pole first if needed) */
  TRT.walkTo = function (L, maxSec) {
    var s = window.SolScene, T = s.tr, wi = s.trWireOf(L), wr = T.wires[wi], falls0 = T.falls;
    if (wi < 0) return { err: "no wire " + L };
    var t = TRT.sim(maxSec || 40, function (T) {
      if (T.fall) return [0];
      if (T.where === "center") { T.sel = TIERS[wr.tier]; return [wr.side]; }
      if (T.where === "end") return [-T.wires[T.w].dx];
      var goal = T.w === wi ? wr.dx : -T.wires[T.w].dx;
      return [TRT.lean(T, goal)];
    }, function (T) { return T.where === "end" && T.w === wi; });
    return { at: T.where === "end" && T.w === wi, falls: T.falls - falls0, t: +t.toFixed(2) };
  };
  /* no monkeys, bananas or drafts unless a check asks for them; lives back */
  TRT.quiet = function (keepWobble) {
    var s = window.SolScene, T = s.tr, P = T.P;
    P.monkeyEvery = 1e9; P.monkeyFirst = 1e9; T.monkeyCd = 1e9; T.banCd = 1e9; P.bananaEvery = 1e9; T.gust.phase = "off"; T.gust.cd = 1e9;
    if (!keepWobble) { P.wobble = 0; P.sway = 0; }
    s.trClearHazards(true); T.monkeyCd = 1e9; T.gust.cd = 1e9;
    s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
    T.th = 0; T.om = 0; T.fall = null; T.iris.mode = "open";
  };
}

(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var errors = [], fails = [];
  function watch(page, tag) {
    page.on("response", function (r) { if (r.status() === 404 && !/content1(1[4-9]|20)\.js/.test(r.url())) console.log(tag + " 404 " + r.url()); });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      /* requestFullscreen: game.js asks for full screen on the start click; on a slow machine the click's gesture expires first */
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|404 \(Not Found\)|requestFullscreen/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  await ctx.addInitScript(helpers);
  var page = await ctx.newPage();
  page.setDefaultTimeout(120000);
  watch(page, "dev");
  async function frames(n) {
    var f0 = await page.evaluate(function () { return SolScene.game.loop.frame; });
    await page.waitForFunction(function (f) { return SolScene.game.loop.frame >= f; }, f0 + (n || 3), { timeout: 120000 }).catch(function () {});
  }
  async function shot(name) { await frames(3); await page.screenshot({ path: path.join(shots, name + ".png"), timeout: 120000 }); }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build (its card is on the title screen)");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector('#mode-packs .card[data-genre="HISTORY"]');
  await page.click('#mode-packs .card[data-genre="HISTORY"]');
  await page.waitForSelector('#skill-packs .card[data-gamemode="tightrope"]');
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="tightrope"]');
    return c ? { name: c.querySelector(".name").textContent, kind: c.querySelector(".kind").textContent, strand: c.getAttribute("data-strand"), visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && card.name === "The Circus" && /The Tightrope/.test(card.kind), "The Circus card shows on the Film History screen and names its game: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="tightrope"]');
  var picked = await page.evaluate(function () {
    return { only: SolModes.only, def: !!SolModes.MODES.tightrope, l1: SolModes.modeFor(1).id, l10: SolModes.modeFor(10).id, l55: SolModes.modeFor(55).id, l100: SolModes.modeFor(100).id };
  });
  check(picked.def && picked.l1 === "tightrope" && picked.l10 === "tightrope" && picked.l55 === "tightrope" && picked.l100 === "tightrope", "picking The Circus plays The Tightrope on every level: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
  for (var i = 0; i < 20; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  async function gotoLevel(n, keepRead) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "CIRCUS", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.tr && s.claim && s.readOpen; }, n, { timeout: 120000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent, ep: s.claim && s.claim.episode,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "", wires: s.tr.wires.length, letters: s.choiceLetters().join("") };
    });
    if (keepRead) return info;
    await closeReading();
    return info;
  }
  async function closeReading() {
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 60000 }).catch(function () {});
    await frames(2);
  }
  /* the next question after a right answer: wait for its reading card and close it */
  async function nextQuestion() {
    /* the scene's clock runs the 0.9 s pause between questions; under a heavy load a frame's step is capped, so hurry it */
    await page.evaluate(function () { SolScene.time.timeScale = 25; });
    await page.waitForFunction(function () { var s = SolScene; return !s._between && (s.readOpen || s.ended); }, null, { timeout: 240000 }).catch(function () {});
    await page.evaluate(function () { SolScene.time.timeScale = 1; });
    await closeReading();
  }

  /* ── level 1: the reading card, then the scripted checks ── */
  var l1 = await gotoLevel(1, true);
  await shot("tightrope-01-reading-1");
  await closeReading();
  check(l1.key === "mode" && l1.mode === "tightrope" && l1.act === "SWAT" && l1.wires === l1.letters.length && l1.wires >= 2, "level 1 runs The Tightrope in the mode scene with a SWAT button and one platform per letter: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act, wires: l1.wires, letters: l1.letters, ep: l1.ep }));
  check(/The Tightrope/.test(l1.card) && /balancing level/.test(l1.card) && /Controls:.*lean.*SWAT/.test(l1.card) && /Lives:/.test(l1.card) && /platform/.test(l1.hint),
    "the reading pop-up names the game, its lives and its controls: " + l1.card.slice(0, 140) + "…");

  var run = await page.evaluate(function () {
    var s = SolScene, T = s.tr, o = {};
    TRT.quiet();
    o.params1 = { tip: T.P.tip, monkeys: T.P.monkeys, ropers: T.P.ropers };
    o.start = { where: T.where, iris: T.iris.mode };
    /* standing on the king pole's platform he never falls, whatever the lean */
    T.th = 0; TRT.sim(2, function () { return [0]; });
    o.stand = { falls: T.falls, where: T.where };
    /* a wrong letter: walk there; a life, its card crossed out */
    var need = s.need.slice(), letters = s.choiceLetters(), wrongs = letters.filter(function (L) { return need.indexOf(L) === -1; });
    var w = TRT.walkTo(wrongs[0]);
    var wr = T.wires[s.trWireOf(wrongs[0])];
    o.wrong = { walk: w, strikes: s.strikes, score: s.score, state: wr.state, card: wr.label.text, label: s._lastHitLabel };
    /* stepping on it again costs nothing more */
    TRT.sim(1.5, function (T) { return [T.where === "end" ? -T.wires[T.w].dx : TRT.lean(T, -T.wires[T.w].dx)]; }, function (T) { return T.where === "wire" && T.s < 0.8; });
    s.iframeMs = 0;
    var again = TRT.walkTo(wrongs[0]);
    o.again = { at: again.at, strikes: s.strikes };
    /* a fall: lean him past the black and let go: a life, he lands in the net and climbs back up */
    TRT.quiet();
    s.trPlace("wire", s.trWireOf(need[0]), 0.5); T.lastPlat = { where: "center" };
    T.th = 0.92; T.om = 2.2;
    TRT.sim(0.5, function () { return [0]; }, function (T) { return !!T.fall; });
    o.fall = { falling: !!T.fall, strikes: s.strikes, label: s._lastHitLabel };
    TRT.sim(4, function () { return [0]; }, function (T) { return !T.fall && T.iris.mode === "open"; });
    o.back = { fall: !!T.fall, where: T.where };
    return o;
  });
  var l1alone = await page.evaluate(function () {
    var s = SolScene, T = s.tr, mx = 0; TRT.quiet(); s.trPlace("wire", 0, 0.5); T.th = 0.1;
    TRT.sim(6, function (T) { mx = Math.max(mx, Math.abs(T.th)); return [0]; }, function (T) { return !!T.fall || T.where !== "wire"; });
    s.trPlace("center");
    return { maxLean: +mx.toFixed(2), where: T.where };
  });
  console.log("run", JSON.stringify(run));
  check(run.params1.tip < -2 && run.params1.monkeys === 1 && run.params1.ropers === 0 && run.start.where === "center", "level 1 is gentle: the lean rights itself, one monkey at a time, no bananas; he starts on the king pole: " + JSON.stringify(run.params1));
  check(run.stand.falls === 0 && run.stand.where === "center", "standing on a platform he never falls");
  check(run.wrong.walk.at && run.wrong.walk.falls === 0 && run.wrong.strikes === 1 && run.wrong.score === 0 && run.wrong.state === "dead" && run.wrong.card === "✕" && /WRONG LETTER/.test(run.wrong.label || "") && run.again.at && run.again.strikes === 1,
    "walking the wire to a wrong letter costs a life and crosses its card out; going there again costs nothing: " + JSON.stringify({ wrong: run.wrong, again: run.again }));
  check(run.fall.falling && run.fall.strikes === 1 && /NET/.test(run.fall.label || "") && !run.back.fall && run.back.where === "center", "leaning into the black drops him into the net (a life), and he climbs back to the platform he left: " + JSON.stringify({ fall: run.fall, back: run.back }));

  /* monkeys: one on his back pulls him off unless swatted; a swat sends a running one flying */
  var mk = await page.evaluate(function () {
    var s = SolScene, T = s.tr, P = T.P, o = {}, need = s.need.slice(), wi = s.trWireOf(need[0]);
    TRT.quiet(); s.trPlace("wire", wi, 0.4);
    var m = s.trSpawnMonkey({ w: wi, s: 0.95, run: true });
    TRT.sim(12, TRT.hold, function () { return m.state === "cling"; });
    o.cling = m.state === "cling";
    TRT.sim(P.clingMs / 1000 + 1.5, TRT.hold, function (T) { return !!T.fall; });
    o.pulled = { fall: !!T.fall, strikes: s.strikes, label: s._lastHitLabel, monkey: m.state };
    TRT.sim(4, function () { return [0]; }, function (T) { return !T.fall; });
    /* avoided: swat it when it comes within a cane's length */
    TRT.quiet(); s.trPlace("wire", wi, 0.4);
    var m2 = s.trSpawnMonkey({ w: wi, s: 0.95, run: true }), swung = false;
    TRT.sim(12, function (T) { var d = s.trPathDist(m2); if (!swung && d <= P.reach * T.k * 0.9) { swung = true; return [TRT.hold(T)[0], 0, true]; } return TRT.hold(T); }, function () { return m2.state !== "run"; });
    o.swat = { state: m2.state, strikes: s.strikes, swung: swung };
    TRT.sim(1, TRT.hold);
    /* one already on his back: swats shake it off (level 1: one swat) */
    TRT.quiet(); s.trPlace("wire", wi, 0.4);
    var m3 = s.trSpawnMonkey({ w: wi, s: 0.42, run: true });
    TRT.sim(2, TRT.hold, function () { return m3.state === "cling"; });
    var c3 = m3.state === "cling";
    TRT.step(0, 0, false); TRT.step(0, 0, true); TRT.sim(0.4, TRT.hold);
    o.shake = { clung: c3, state: m3.state, strikes: s.strikes, fall: !!T.fall, grip: P.grip };
    return o;
  });
  console.log("monkeys", JSON.stringify(mk));
  check(mk.cling && mk.pulled.fall && mk.pulled.strikes === 1 && /MONKEY/.test(mk.pulled.label || ""), "a monkey runs along the wire and jumps on his back; left there, it pulls him off the wire (a life): " + JSON.stringify(mk.pulled));
  check(mk.swat.swung && mk.swat.state === "fly" && mk.swat.strikes === 0, "a swat when it comes within a cane's length sends the monkey flying into the net, no life lost: " + JSON.stringify(mk.swat));
  check(mk.shake.clung && mk.shake.state === "fly" && mk.shake.strikes === 0 && !mk.shake.fall, "a swat shakes a monkey off his back: " + JSON.stringify(mk.shake));

  /* the right letter: the automatic balancer walks him there (the wire wobbles as usual), and it scores */
  var right = await page.evaluate(function () {
    var s = SolScene, T = s.tr, o = {}, need = s.need.slice(), sc0 = s.score, coins = s.nightCoins;
    TRT.quiet(true); s.trPlace("center");
    var a = TRT.walkTo(need[0]);
    o.first = a;
    if (need.length > 1 && !TRT.stop()) o.second = TRT.walkTo(need[1]);
    o.score = s.score - sc0; o.strikes = s.strikes; o.coins = s.nightCoins > coins; o.between = s._between || s._finishing;
    o.card = T.wires[s.trWireOf(need[0])].label.text;
    return o;
  });
  console.log("right", JSON.stringify(right));
  check(right.first.at && right.first.falls === 0 && right.score === 1 && right.strikes === 0 && right.coins && right.between, "walking the wire to the right letter answers the question and pays coins (the picture irises out to the next act): " + JSON.stringify(right));
  /* the iris closes on him, and the next act irises in */
  var irisOut = await page.evaluate(function () { return SolScene.tr.iris.mode; });
  await nextQuestion();
  var fresh = await page.evaluate(function () {
    var s = SolScene, T = s.tr;
    return { where: T.where, live: T.wires.every(function (w) { return w.state === "live"; }), monkeys: T.monkeys.length, title: T.sub, iris: T.iris.mode };
  });
  check(irisOut === "closed" && fresh.where === "center" && fresh.live && fresh.monkeys === 0 && /Act II/.test(fresh.title), "a right answer irises out; the next act starts back on the king pole with fresh cards: " + JSON.stringify({ irisOut: irisOut, fresh: fresh }));

  /* Select TWO: the first right platform is marked found, the second answers it */
  var two = await page.evaluate(function () {
    var s = SolScene, T = s.tr, o = {};
    TRT.quiet(true);
    var letters = s.choiceLetters(), pair = [letters[0], letters[letters.length - 1]];
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score;
    o.a = TRT.walkTo(pair[0]);
    var w0 = T.wires[s.trWireOf(pair[0])];
    o.first = { score: s.score - sc0, state: w0.state, card: w0.label.text, found: s.extracted.join(""), strikes: s.strikes };
    o.b = TRT.walkTo(pair[1]);
    o.second = { score: s.score - sc0, strikes: s.strikes };
    return o;
  });
  console.log("two", JSON.stringify(two));
  check(two.a.at && two.first.score === 0 && two.first.state === "found" && two.first.card === "✓" && two.first.found.length === 1 && two.b.at && two.second.score === 1 && two.second.strikes === 0,
    "a Select TWO question needs both right platforms: the first is marked found, the second answers it: " + JSON.stringify({ first: two.first, second: two.second }));
  await nextQuestion();

  /* the controls: real keys, the mouse and the SWAT button */
  await page.evaluate(function () { TRT.quiet(); SolScene.trPlace("center"); window.__sw = SolScene.tr.swats; });
  await page.keyboard.down("ArrowRight");
  await page.waitForFunction(function () { var T = SolScene.tr; return T.th > 0.2 || T.where === "wire"; }, null, { timeout: 120000 }).catch(function () {});
  var keys = await page.evaluate(function () { var T = SolScene.tr; return { th: +T.th.toFixed(2), where: T.where, side: T.w >= 0 ? T.wires[T.w].side : 0 }; });
  await page.keyboard.up("ArrowRight");
  await page.evaluate(function () { TRT.quiet(); SolScene.trPlace("center"); SolScene.tr.sel = -1; });
  await page.keyboard.down("s");
  await page.waitForFunction(function () { return SolScene.tr.sel === 1 || SolScene.tr.sel === 0; }, null, { timeout: 120000 }).catch(function () {});
  await page.keyboard.up("s");
  keys.sel = await page.evaluate(function () { return SolScene.tr.sel; });
  await page.keyboard.down("Space");
  await page.waitForFunction(function () { return SolScene.tr.swats > window.__sw; }, null, { timeout: 120000 }).catch(function () {});
  await page.keyboard.up("Space");
  keys.swat = await page.evaluate(function () { return SolScene.tr.swats - window.__sw; });
  /* the mouse: hold the button left of him and he leans left; click him and he swats */
  var geo = await page.evaluate(function () {
    var s = SolScene, cr = s.game.canvas.getBoundingClientRect(); TRT.quiet(); s.trPlace("center"); s.tr.swatCd = 0;
    var b = s.trBody(); window.__sw = s.tr.swats;
    return { bx: cr.left + b.x * cr.width / s.W, by: cr.top + b.y * cr.height / s.H, fx: cr.width / s.W };
  });
  await page.mouse.move(geo.bx - 160 * geo.fx, geo.by);
  await page.mouse.down();
  await page.waitForFunction(function () { var T = SolScene.tr; return T.th < -0.2 || T.where === "wire"; }, null, { timeout: 120000 }).catch(function () {});
  var mouse = await page.evaluate(function () { var T = SolScene.tr; return { th: +T.th.toFixed(2), where: T.where, side: T.w >= 0 ? T.wires[T.w].side : 0 }; });
  await page.mouse.up();
  await page.evaluate(function () { TRT.quiet(); SolScene.trPlace("center"); SolScene.tr.swatCd = 0; });
  await frames(2);
  await page.mouse.move(geo.bx, geo.by);
  await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.tr.swats > window.__sw; }, null, { timeout: 120000 }).catch(function () {});
  await page.mouse.up();
  mouse.swat = await page.evaluate(function () { return { swats: SolScene.tr.swats - window.__sw, th: SolScene.tr.th }; });
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); SolScene.tr.swatCd = 0; window.__sw = SolScene.tr.swats; return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.tr.swats > window.__sw; }, null, { timeout: 120000 }).catch(function () {});
  await page.mouse.up();
  var button = await page.evaluate(function () { return SolScene.tr.swats - window.__sw; });
  console.log("controls", JSON.stringify({ keys: keys, mouse: mouse, button: button }));
  check((keys.th > 0.2 || keys.side === 1) && keys.sel !== -1 && keys.swat >= 1, "▶ leans him right (and out along a right-hand wire), S picks the lower wire, Space swings the cane: " + JSON.stringify(keys));
  check((mouse.th < -0.2 || mouse.side === -1) && mouse.swat.swats >= 1, "holding the mouse button left of him leans him left; clicking him swings the cane: " + JSON.stringify(mouse));
  check(button >= 1, "the on-screen SWAT button swings the cane: " + button);

  /* the difficulty: every level 2-100 harder than the one before, never easier on any setting */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.tightrope.params, s = SolScene, out = { same: typeof s.tightropeParams === "function" && JSON.stringify(s.tightropeParams(50)) === JSON.stringify(f(50)) };
    var up = ["tip", "wobble", "monkeySp", "monkeys", "grip", "tug", "bias", "sway", "peels", "gust", "ropers", "swatJolt"],
      down = ["damp", "monkeyFirst", "monkeyEvery", "clingMs", "reach", "hatDelay", "bananaEvery", "warnMs", "gustEvery"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l100: ramp.l100 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0, "tightropeParams (on the def as params): every level 2-100 is harder than the one before and never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat }));
  var e1 = ramp.l1, z = ramp.l100;
  check(e1.tip < -2 && e1.monkeyEvery > 13 && e1.monkeySp < 36 && e1.grip === 1 && e1.ropers === 0 && e1.gust === 0 && e1.sway === 0 && e1.clingMs > 5500,
    "level 1 is gentle: the lean rights itself, a slow monkey now and then, one swat, no bananas, sway or drafts: " + JSON.stringify(e1));
  check(z.tip > 0.9 && z.monkeys === 3 && z.grip === 4 && z.ropers === 2 && z.gust > 1 && z.sway > 0.9 && z.peels === 1 && z.warnMs <= 700,
    "level 100 is intense: the lean tips over on its own, three monkeys, four swats, two banana throwers, peels, sway and drafts: " + JSON.stringify(z));

  /* level 10: the balancer walks a whole answer with the wobble on */
  var l10 = await gotoLevel(10);
  var p10 = await page.evaluate(function () {
    var s = SolScene, need = s.need.slice(), sc0 = s.score; TRT.quiet(true);
    var a = TRT.walkTo(need[0]); if (need.length > 1 && !TRT.stop()) TRT.walkTo(need[1]);
    return { walk: a, score: s.score - sc0, strikes: s.strikes };
  });
  check(l10.mode === "tightrope" && l10.tier === 0 && p10.walk.at && p10.walk.falls === 0 && p10.score === 1, "level 10 plays: the wire walked to the right letter scores: " + JSON.stringify(p10));

  /* level 25: the hat over his eyes */
  var l25 = await gotoLevel(25);
  var hat = await page.evaluate(function () {
    var s = SolScene, T = s.tr, P = T.P, wi = 0; TRT.quiet(); s.trPlace("wire", wi, 0.4);
    var m = s.trSpawnMonkey({ w: wi, s: 0.43, run: true });
    TRT.sim(2, TRT.hold, function () { return m.state === "cling"; });
    TRT.sim(P.hatDelay / 1000 + 0.3, TRT.hold, function (T) { return T.hat; });
    var o = { hat: T.hat, iris: T.iris.mode, grip: P.grip };
    TRT.step(0, 0, false); TRT.step(0, 0, true); TRT.sim(0.3, TRT.hold);
    o.after1 = m.state;
    T.swatCd = 0; TRT.step(0, 0, false); TRT.step(0, 0, true); TRT.sim(0.3, TRT.hold);
    o.after2 = m.state; o.hatAfter = T.hat; o.strikes = s.strikes;
    return o;
  });
  check(/New this time:.*Hat over the eyes/.test(l25.card) && hat.hat && hat.iris === "hat" && hat.grip === 2 && hat.after1 === "cling" && hat.after2 === "fly" && !hat.hatAfter && hat.strikes === 0,
    "level 25: a monkey on his back pulls the bowler over his eyes (the picture irises in round him); two swats shake it off: " + JSON.stringify(hat));

  /* level 50: bananas from the top rope (a life; walking away dodges it), peels (a slip; a swat clears them) */
  var l50 = await gotoLevel(50);
  var ban = await page.evaluate(function () {
    var s = SolScene, T = s.tr, P = T.P, o = {}, wi = 0;
    o.ropers = P.ropers; o.peels = P.peels;
    TRT.quiet(); s.trPlace("wire", wi, 0.45);
    var b = s.trDropBanana({ w: wi, s: 0.45 });
    TRT.sim(P.warnMs / 1000 + 1.5, TRT.hold, function () { return b.hit || b.phase === "gone"; });
    o.hit = { hit: b.hit, strikes: s.strikes, label: s._lastHitLabel };
    TRT.sim(0.5, TRT.hold);
    /* dodged: walk on toward the platform as soon as the dotted line shows */
    TRT.quiet(); s.trPlace("wire", wi, 0.3);
    var b2 = s.trDropBanana({ w: wi, s: 0.3 }), wr = T.wires[wi];
    TRT.sim(P.warnMs / 1000 + 1.5, function (T) { return [T.where === "wire" ? TRT.lean(T, wr.dx) : 0]; }, function () { return b2.phase === "gone" || b2.hit || b2.phase === "drop"; });
    o.dodge = { hit: b2.hit, strikes: s.strikes, s: +T.s.toFixed(2), where: T.where, peels: T.peels.length };
    /* a banana that misses falls into the net: no peel before level 51 */
    TRT.quiet(); s.trPlace("wire", wi, 0.2);
    var b3 = s.trDropBanana({ w: wi, s: 0.7 });
    TRT.sim(P.warnMs / 1000 + 1.5, TRT.hold, function () { return b3.phase === "gone"; });
    o.peelOn = T.peels.length;
    return o;
  });
  console.log("bananas", JSON.stringify(ban));
  check(ban.ropers === 1 && ban.hit.hit && ban.hit.strikes === 1 && /BANANA/.test(ban.hit.label || ""), "level 50: a banana dropped on his head from the top rope costs a life: " + JSON.stringify(ban.hit));
  check(!ban.dodge.hit && ban.dodge.strikes === 0, "walking out from under the dotted line dodges the banana: " + JSON.stringify(ban.dodge));
  check(ban.peels === 0 && ban.peelOn === 0, "before level 51 a banana that misses falls into the net (no peel)");
  /* peels come at level 51 */
  await gotoLevel(55);
  var peel = await page.evaluate(function () {
    var s = SolScene, T = s.tr, P = T.P, o = {}, wi = 0, wr = T.wires[wi];
    TRT.quiet(); s.trPlace("wire", wi, 0.25);
    var b3 = s.trDropBanana({ w: wi, s: 0.62 });
    TRT.sim(P.warnMs / 1000 + 1.5, TRT.hold, function () { return b3.phase === "gone"; });
    o.peelOn = T.peels.length;
    var sl0 = T.slips;
    TRT.sim(8, function (T) { return [T.fall ? 0 : T.where === "wire" ? TRT.lean(T, wr.dx) : 0]; }, function (T) { return T.slips > sl0 || T.where === "end"; });
    o.slips = T.slips - sl0;
    TRT.sim(2.5, function () { return [0]; }, function (T) { return !!T.fall; });
    o.fall = !!T.fall; o.strikes = s.strikes; o.label = s._lastHitLabel;
    TRT.sim(4, function () { return [0]; }, function (T) { return !T.fall; });
    TRT.quiet(); s.trPlace("wire", wi, 0.25);
    var b4 = s.trDropBanana({ w: wi, s: 0.62 });
    TRT.sim(P.warnMs / 1000 + 1.5, TRT.hold, function () { return b4.phase === "gone"; });
    var pe = T.peels[0], sl1 = T.slips, swung = false;
    T.swatCd = 0;
    TRT.sim(8, function (T) {
      if (!swung && pe && Math.abs(pe.s - T.s) * wr.len < P.reach * T.k * 0.8) { swung = true; return [0, 0, true]; }
      return [T.where === "wire" ? TRT.lean(T, wr.dx) : 0];
    }, function (T) { return T.where === "end"; });
    o.swat = { swung: swung, peels: T.peels.length, slips: T.slips - sl1, at: T.where, strikes: s.strikes };
    return o;
  });
  console.log("peel", JSON.stringify(peel));
  check(peel.peelOn === 1 && peel.slips === 1 && peel.fall && peel.strikes === 1 && /PEEL/.test(peel.label || ""), "level 55: a banana that misses leaves a peel on the wire; stepping on it he slips and falls (a life): " + JSON.stringify(peel));
  check(peel.swat.swung && peel.swat.peels === 0 && peel.swat.slips === 0 && peel.swat.at === "end", "a swat knocks the peel off the wire and he walks on safely: " + JSON.stringify(peel.swat));

  /* level 65: a draft pushes him the way the pennant points */
  var l65 = await gotoLevel(65);
  var gust = await page.evaluate(function () {
    var s = SolScene, T = s.tr, P = T.P, o = {}; TRT.quiet(); s.trPlace("wire", 0, 0.5);
    P.tip = 0; T.gust.phase = "blow"; T.gust.t = 0; T.gust.dir = 1; T.gust.cd = 1e9;
    TRT.sim(1.5, function () { return [0]; });
    o.th = +T.th.toFixed(2); o.gust = P.gust;
    T.gust.phase = "off"; TRT.quiet();
    return o;
  });
  check(/New this time:.*Drafts/.test(l65.card) && gust.gust > 0 && gust.th > 0.15, "level 65: a draft through the tent flaps pushes his lean: " + JSON.stringify(gust));

  /* level 100: the balancer still walks it (the lean tips over on its own here) */
  var l100 = await gotoLevel(100);
  var p100 = await page.evaluate(function () {
    var s = SolScene, need = s.need.slice(), sc0 = s.score; TRT.quiet(true);
    var a = TRT.walkTo(need[0]); if (need.length > 1 && !TRT.stop()) TRT.walkTo(need[1]);
    return { walk: a, score: s.score - sc0, strikes: s.strikes, tip: s.tr.P.tip };
  });
  await nextQuestion();
  check(l100.mode === "tightrope" && l100.tier === 9 && /grand finale/.test(l100.card) && p100.walk.at && p100.walk.falls === 0 && p100.score === 1, "level 100 plays, and a careful balancer still walks the wire to the right letter: " + JSON.stringify(p100));
  /* left alone on the wire, the lean grows by itself at level 100 (at level 1 it rights itself: see l1alone) */
  var alone = await page.evaluate(function () {
    var s = SolScene, T = s.tr, mx = 0; TRT.quiet(); s.trPlace("wire", 0, 0.5); T.th = 0.1;
    TRT.sim(6, function (T) { mx = Math.max(mx, Math.abs(T.th)); return [0]; }, function (T) { return !!T.fall || T.where !== "wire"; });
    var o = { maxLean: +mx.toFixed(2), fell: !!T.fall, where: T.where };
    TRT.sim(4, function () { return [0]; }, function (T) { return !T.fall; });
    return o;
  });
  check(alone.maxLean > 0.4 && l1alone.maxLean < 0.15, "left alone on the wire his lean rights itself at level 1 but tips over on its own at level 100: " + JSON.stringify({ l1: l1alone, l100: alone }));

  /* the pictures: level 1, level 50 and level 100 in play */
  async function pose(n, setup) {
    await gotoLevel(n);
    await page.evaluate(setup);
    await page.waitForFunction(function () { return SolScene.tr.iris.r > 1000 || SolScene.tr.iris.mode === "hat"; }, null, { timeout: 120000 }).catch(function () {});
  }
  await pose(1, function () {
    var s = SolScene, T = s.tr; TRT.quiet(); T.iris.r = 5000; s.iframeMs = 0;
    var wi = s.trWireOf(s.choiceLetters()[1]); s.trPlace("wire", wi, 0.42); T.th = 0.3; T.face = T.wires[wi].dx;
    var m = s.trSpawnMonkey({ w: wi, s: 0.85, run: true }); m.dir = -T.wires[wi].dx;
    TRT.step(0, 0, false);
  });
  await shot("tightrope-02-play-1");
  await pose(50, function () {
    var s = SolScene, T = s.tr; TRT.quiet(); T.iris.r = 5000; s.iframeMs = 0;
    var wi = s.trWireOf(s.choiceLetters()[0]); s.trPlace("wire", wi, 0.55); T.th = -0.5; T.face = T.wires[wi].dx;
    var m = s.trSpawnMonkey({ w: wi, s: 0.55, run: true }); s.trCling(m);
    var b = s.trDropBanana({ w: s.trWireOf(s.choiceLetters()[3] || s.choiceLetters()[1]), s: 0.5 }); b.t = 600;
    T.swatT = 0.15; s.showTag("A MONKEY ON YOUR BACK! · SWAT IT OFF", "#ffe08a");
    for (var i = 0; i < 5; i++) TRT.step(0, 0, false);
  });
  await shot("tightrope-03-play-50");
  await pose(100, function () {
    var s = SolScene, T = s.tr; TRT.quiet(); T.iris.r = 5000; s.iframeMs = 0;
    var wi = s.trWireOf(s.choiceLetters()[2] || s.choiceLetters()[0]); s.trPlace("wire", wi, 0.62); T.th = 0.84; T.face = T.wires[wi].dx;
    T.gust.phase = "blow"; T.gust.dir = 1; T.gust.t = 0;
    s.trSpawnMonkey({ w: wi, s: 0.15, run: true });
    var o = s.trSpawnMonkey({ w: s.trWireOf(s.choiceLetters()[1]), s: 0.6, run: true }); s.trKnockOff(o, true); o.vx = 40; o.vy = -60;
    T.peels.push({ w: wi, s: 0.85, state: "on", spr: s.add.image(-99, -99, "md-tightrope-peel").setDepth(7).setScale(T.k).setOrigin(0.5, 0.85) });
    var b = s.trDropBanana({ w: s.trWireOf(s.choiceLetters()[0]), s: 0.4 }); b.t = 900;
    TRT.step(0, 0, false);
  });
  await shot("tightrope-04-play-100");
  /* the hat over his eyes: the picture irises in round him (level 25) */
  await pose(25, function () {
    var s = SolScene, T = s.tr; TRT.quiet(); s.iframeMs = 0;
    var wi = s.trWireOf(s.choiceLetters()[1]); s.trPlace("wire", wi, 0.5); T.th = 0.45; T.face = T.wires[wi].dx;
    var m = s.trSpawnMonkey({ w: wi, s: 0.5, run: true }); s.trCling(m); T.hat = true; T.iris.r = 400; T.iris.mode = "hat";
    TRT.step(0, 0, false);
    s.helpOpen = true;   /* hold the game still (the film keeps running) while the iris closes in */
  });
  await page.waitForFunction(function () { return SolScene.tr.iris.r < 160; }, null, { timeout: 120000 }).catch(function () {});
  await shot("tightrope-05-hat-25");
  /* the title card on the black between acts */
  await page.evaluate(function () { var T = SolScene.tr; T.iris.mode = "closed"; T.iris.r = 0; T.title = "The Tightrope"; T.sub = "Level 25  ·  Act II"; });
  await shot("tightrope-06-title");
  await page.evaluate(function () { SolScene.helpOpen = false; });

  /* losing: the last life ends the level with a Retry */
  var lose = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    TRT.quiet(); s.strikes = s.needStrikes - 1; s.trPlace("wire", 0, 0.5); s.tr.th = 0.99; s.tr.om = 2;
    TRT.sim(0.5, function () { return [0]; }, function (T) { return !!T.fall; });
    for (var w = 0; w < 300 && !(s.ended && !document.getElementById("overlay").classList.contains("hidden")); w++) await new Promise(function (r) { setTimeout(r, 200); });
    await new Promise(function (r) { setTimeout(r, 300); });
    return { ended: s.ended, title: document.getElementById("win-title").textContent, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /The Tightrope/.test(lose.msg), "falling with the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 220));
  await ctx.close();

  /* the 500-pixel-tall Canvas frame */
  var sctx = await browser.newContext({ viewport: { width: 900, height: 500 } });
  await sctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  await sctx.addInitScript(helpers);
  page = await sctx.newPage();
  page.setDefaultTimeout(120000);
  watch(page, "500px");
  await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(900);
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.click('#mode-packs .card[data-genre="HISTORY"]');
  await page.click('#skill-packs .card[data-gamemode="tightrope"]');
  await page.click("#btn-skill-start"); await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
  for (i = 0; i < 20; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  await gotoLevel(30);
  var small = await page.evaluate(function () {
    var s = SolScene, T = s.tr, need = s.need.slice(), sc0 = s.score; TRT.quiet(true); T.iris.r = 5000;
    var pad = document.querySelector("#controls .dpad") || document.querySelector(".dpad"), cv = s.game.canvas.getBoundingClientRect(), box = null;
    if (pad && pad.offsetParent) { var a = pad.getBoundingClientRect(); box = { x1: (a.right - cv.left) * s.W / cv.width, y0: (a.top - cv.top) * s.H / cv.height }; }
    /* every card and platform on screen, and none under the pad */
    var onScreen = T.wires.every(function (w) { return w.cardX - T.cardW / 2 >= 0 && w.cardX + T.cardW / 2 <= s.W && w.cardY - T.cardH / 2 >= 0 && w.py < s.H; });
    var clearOfPad = !box || T.wires.every(function (w) { return !(w.px - T.pw / 2 < box.x1 && w.py + 16 * T.k > box.y0); });
    var a2 = TRT.walkTo(need[0]); if (need.length > 1 && !TRT.stop()) TRT.walkTo(need[1]);
    return { W: s.W, H: s.H, k: T.k, onScreen: onScreen, clearOfPad: clearOfPad, pad: box, walk: a2, score: s.score - sc0 };
  });
  await nextQuestion();
  await page.evaluate(function () { var s = SolScene, T = s.tr; TRT.quiet(); T.iris.r = 5000; s.trPlace("wire", 1, 0.5); T.th = 0.2; s.trSpawnMonkey({ w: 1, s: 0.9, run: true }); TRT.step(0, 0, false); });
  await shot("tightrope-07-canvas-500");
  check(small.H <= 500 && small.onScreen && small.clearOfPad && small.walk.at && small.score === 1, "in the 500-pixel-tall Canvas frame every card is on screen and clear of the pad, and it plays: " + JSON.stringify(small));
  await sctx.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
