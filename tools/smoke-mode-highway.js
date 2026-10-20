/* Headless test of the Lit and Film mode "highway" (Night Highway, Detour; js/mode-highway.js): node tools/smoke-mode-highway.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any
   script), picks Film Noir and then Detour, and drives the mode through the scene's own methods: the right
   hitchhiker scores, a wrong one costs a life and never comes back, each hazard (an oncoming truck, a DETOUR
   barricade, a stalled car, a truck passing in your lane) costs a life and can be avoided, a speeding car can't
   pick anyone up from level 31, Select TWO needs both, the keys, the mouse and the BRAKE button work, and the
   difficulty climbs every level 2-100. Screenshots go to tools/shots/highway-*.png. Prints ALL OK or the number FAILED. */
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

(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var errors = [], fails = [];
  function watch(page, tag) {
    page.on("response", function (r) {
      if (r.status() !== 404) return;
      /* other movies' content files may still be being written */
      if (/content1(1[4-9]|20)\.js/.test(r.url())) return;
      errors.push(tag + " 404 " + r.url());
    });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|status of 404/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  async function openGame(ctx, tag) {
    var page = await ctx.newPage();
    watch(page, tag);
    await page.goto(base + "index.html", { waitUntil: "load" });
    await page.waitForTimeout(900);
    return page;
  }

  /* ── the dev page, as the Lit and Film build ── */
  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await openGame(ctx, "dev");
  page.setDefaultTimeout(180000);
  async function shot(name) { await page.screenshot({ path: path.join(shots, "highway-" + name + ".png"), timeout: 180000 }); }
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build (its card is on the title screen)");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-genre="NOIR"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="highway"]');
    return c ? { text: c.textContent.replace(/\s+/g, " ").trim(), visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && /Detour/.test(card.text), "the Detour card shows on the Film Noir screen: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="highway"]');
  await page.waitForTimeout(200);
  var picked = await page.evaluate(function () {
    return { only: SolModes.only, def: !!SolModes.MODES.highway, l1: (SolModes.modeFor(1) || {}).id, l10: (SolModes.modeFor(10) || {}).id, l100: (SolModes.modeFor(100) || {}).id };
  });
  check(picked.only === "highway" && picked.def && picked.l1 === "highway" && picked.l10 === "highway" && picked.l100 === "highway", "picking Detour plays Night Highway on every level: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 300000 }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  async function gotoLevel(n) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "DETOUR", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.hw && s.claim && s.readOpen; }, n, { timeout: 300000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent, strand: s.strand,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 120000 }).catch(function () {});
    await page.waitForTimeout(300);
    return info;
  }
  /* a still picture: hitchhikers on both shoulders, a truck coming, the car mid-lane */
  async function stage(n, opts) {
    await page.evaluate(async function (o) {
      var s = SolScene, B = s.hw;
      s.iframeMs = 0; s.spareLives = 9;
      B.objs.slice().forEach(function (x) { s.hwRemove(x); });
      var L = s.choiceLetters();
      B.truckT = 99; B.nextHaz = 1e9; B.nextHiker = 1e9;
      s.hwSpawn("hiker", 1.32, 6.5, { letter: L[0] });
      s.hwSpawn("hiker", -1.32, 9.5, { letter: L[1] });
      if (L[2]) s.hwSpawn("hiker", 1.32, 15, { letter: L[2] });
      s.hwSpawn("truck", -0.5, o.truckZ || 13);
      if (o.barrier) { s.hwSpawn("barrier", 0.5, 24); s.hwSpawn("ahead", 1.95, 12); }
      if (o.stall) s.hwSpawn("stall", -1.34, 17);
      if (o.fog) { B.fogT = 99; B.fogAmt = 0.6; }
      B.v = 0.0001; B.P.speed = 0.0001;
      if (o.say) { s.hwSay(o.say); B.capT = 2.5; } else B.capT = 20;
      var f0 = s.game.loop.frame, t0 = Date.now();
      while (s.game.loop.frame < f0 + 12 && Date.now() - t0 < 300000) await new Promise(function (r) { setTimeout(r, 50); });
    }, opts || {});
  }

  var l1 = await gotoLevel(1);
  check(l1.key === "mode" && l1.mode === "highway" && l1.act === "BRAKE" && l1.strand === "DETOUR", "level 1 runs Night Highway in the mode scene with a BRAKE button, on the DETOUR strand: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act, strand: l1.strand }));
  check(/Night Highway/.test(l1.card) && /noir driving level/.test(l1.card) && /Controls:/.test(l1.card) && /BRAKE/.test(l1.card) && /hitchhiker/.test(l1.hint),
    "the reading pop-up names the game and its controls: " + l1.card.slice(0, 140) + "…");

  /* left alone, the road brings hitchhikers with this question's letters, and an oncoming truck */
  var live = await page.evaluate(async function () {
    var s = SolScene, B = s.hw, t0 = Date.now();
    s.iframeMs = 1e9; s.spareLives = 9;
    B.truckT = Math.min(B.truckT, 0.4); B.nextHiker = Math.min(B.nextHiker, B.dist + 0.3);   /* the spawners as they are, just sooner */
    while ((!B.objs.some(function (o) { return o.kind === "hiker"; }) || !B.objs.some(function (o) { return o.kind === "truck"; })) && Date.now() - t0 < 300000) await new Promise(function (r) { setTimeout(r, 100); });
    var L = s.choiceLetters();
    var hk = B.objs.filter(function (o) { return o.kind === "hiker"; });
    return { hikers: hk.length, ok: hk.every(function (o) { return L.indexOf(o.letter) !== -1 && Math.abs(Math.abs(o.x) - 1.32) < 0.01; }), trucks: B.objs.filter(function (o) { return o.kind === "truck" && o.x < 0; }).length, letters: hk.map(function (o) { return o.letter; }).join("") };
  });
  check(live.hikers >= 1 && live.ok && live.trucks >= 1, "left alone, hitchhikers with the question's letters stand on the shoulders and a truck comes down the left lane: " + JSON.stringify(live));
  await shot("01-level1-live");

  /* the scripted checks: the game's own clock; no natural traffic while a check runs */
  var HELPERS = function () {
    window.__hw = {
      wait: function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); },
      until: async function (f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < Math.max(ms || 0, 400000)) await window.__hw.wait(30); return f(); },
      frames: async function (n) { var lp = SolScene.game.loop, f0 = lp.frame; await window.__hw.until(function () { return lp.frame >= f0 + n; }); },
      quiet: function () {
        var s = SolScene, B = s.hw;
        B.objs.slice().forEach(function (o) { s.hwRemove(o); });
        B.nextHiker = 1e12; B.nextHaz = 1e12; B.truckT = 1e12; B.nextMile = 1e12; B.fogT = 0; B.fogAmt = 0; B.flickT = 0;
        B.vx = 0; B.ptrAim = null; B.hitT = 0;
        s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
        ["LEFT", "RIGHT", "UP", "DOWN", "A", "D", "W", "S", "SPACE"].forEach(function (k) { s.keys[k].isDown = false; });
      },
      /* put the car at x and send o down the road at it; resolve when it has reached the car */
      meet: async function (kind, x, carX, extra) {
        var s = SolScene, B = s.hw;
        B.carX = carX; B.vx = 0; B.ptrAim = null;
        var o = s.hwSpawn(kind, x, 2.2 + 0.7, extra);
        await window.__hw.until(function () { return o.done || o.gone; });
        await window.__hw.wait(80);
        return o;
      }
    };
  };
  await page.evaluate(HELPERS);

  var run = await page.evaluate(async function () {
    var s = SolScene, B = s.hw, H = window.__hw, o = {};
    H.quiet();
    var need = s.need.slice(), letters = s.choiceLetters(), wrongs = letters.filter(function (L) { return need.indexOf(L) === -1; });
    o.letters = letters.join(""); o.need = need.join("");
    /* a stranger the car drives past (in its lane): nothing happens */
    var st0 = s.strikes, sc0 = s.score;
    await H.meet("hiker", 1.32, 0.5, { letter: wrongs[0] });
    o.past = { strikes: s.strikes - st0, score: s.score - sc0 };
    /* a wrong passenger: a life, and that letter never thumbs a ride again */
    H.quiet(); sc0 = s.score;
    var w = await H.meet("hiker", -1.32, -1.32, { letter: wrongs[0] });
    o.wrong = { strikes: s.strikes, score: s.score - sc0, label: s._lastHitLabel, dead: B.dead.indexOf(wrongs[0]) !== -1, boarded: w.anim === "board" || w.gone };
    var seen = []; B.queue = [];
    for (var i = 0; i < 24; i++) seen.push(s.hwNextLetter());
    o.wrong.never = seen.indexOf(wrongs[0]) === -1 && seen.every(function (L) { return letters.indexOf(L) !== -1; });
    /* an oncoming truck: in its lane it costs a life, in your own lane it passes */
    H.quiet(); await H.meet("truck", -0.5, -0.5);
    o.truck = { strikes: s.strikes, label: s._lastHitLabel };
    H.quiet(); var tp = B.trucksPassed; await H.meet("truck", -0.5, 0.5);
    o.truckMiss = { strikes: s.strikes, passed: B.trucksPassed - tp };
    /* it honks when you're in its lane */
    H.quiet(); B.carX = -0.5; var hk = s.hwSpawn("truck", -0.5, 14.5);
    await H.until(function () { return hk.honked || hk.gone; }, 60000);
    o.honk = !!hk.honked; s.hwRemove(hk);
    /* a DETOUR barricade in your lane, and the way round it */
    H.quiet(); await H.meet("barrier", 0.5, 0.5);
    o.barrier = { strikes: s.strikes, label: s._lastHitLabel };
    H.quiet(); await H.meet("barrier", 0.5, -0.5);
    o.barrierMiss = { strikes: s.strikes };
    H.quiet(); await H.meet("barrier", 0.5, 1.45);
    o.barrierShoulder = { strikes: s.strikes };
    /* a stalled car on the shoulder */
    H.quiet(); await H.meet("stall", 1.34, 1.32);
    o.stall = { strikes: s.strikes, label: s._lastHitLabel };
    H.quiet(); await H.meet("stall", 1.34, 0.5);
    o.stallMiss = { strikes: s.strikes };
    /* a hit is shrugged off while the car is still blinking from the last one */
    H.quiet(); await H.meet("truck", -0.5, -0.5); var st1 = s.strikes; await H.meet("truck", -0.5, -0.5);
    o.blink = { first: st1, second: s.strikes };
    /* the hazard spawner: a barricade comes with a DETOUR AHEAD sign closer to the car */
    H.quiet(); B.P.barrier = 1; B.P.fogP = 0; B.P.stall = 0;
    var kind = s.hwHazard(), bar = B.objs.filter(function (x) { return x.kind === "barrier"; })[0], ah = B.objs.filter(function (x) { return x.kind === "ahead"; })[0];
    o.spawnBar = { kind: kind, lane: bar && bar.x, warn: !!(ah && bar && ah.z < bar.z && ah.x > 1.5) };
    B.P = s.highwayParams(s.night);
    /* the right passenger answers the question and pays coins */
    H.quiet(); sc0 = s.score; var coins = s.nightCoins;
    var r = await H.meet("hiker", 1.32, 1.32, { letter: need[0] });
    if (need.length > 1) { s.iframeMs = 0; await H.meet("hiker", -1.32, -1.32, { letter: need[1] }); }
    o.right = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins, boarded: r.anim === "board" || r.gone };
    return o;
  });
  console.log("run", JSON.stringify(run));
  check(run.past.strikes === 0 && run.past.score === 0, "driving past a hitchhiker in your lane does nothing: " + JSON.stringify(run.past));
  check(run.wrong.strikes === 1 && run.wrong.score === 0 && /WRONG LETTER/.test(run.wrong.label || "") && run.wrong.dead && run.wrong.never && run.wrong.boarded,
    "a wrong passenger costs a life, and that stranger never comes round again: " + JSON.stringify(run.wrong));
  check(run.truck.strikes === 1 && /TRUCK/.test(run.truck.label || "") && run.truckMiss.strikes === 0 && run.truckMiss.passed === 1 && run.honk,
    "an oncoming truck in its lane costs a life (it honks first); keeping to your lane, it passes: " + JSON.stringify({ hit: run.truck, miss: run.truckMiss, honk: run.honk }));
  check(run.barrier.strikes === 1 && /DETOUR/.test(run.barrier.label || "") && run.barrierMiss.strikes === 0 && run.barrierShoulder.strikes === 0,
    "a DETOUR barricade in your lane costs a life; swerving into the other lane or onto the shoulder misses it: " + JSON.stringify([run.barrier, run.barrierMiss, run.barrierShoulder]));
  check(run.stall.strikes === 1 && /STALLED/.test(run.stall.label || "") && run.stallMiss.strikes === 0, "a stalled car on the shoulder costs a life; staying in your lane misses it: " + JSON.stringify([run.stall, run.stallMiss]));
  check(run.blink.first === 1 && run.blink.second === 1, "a second hit while the car still blinks costs nothing: " + JSON.stringify(run.blink));
  check(run.spawnBar.kind === "barrier" && run.spawnBar.lane === 0.5 && run.spawnBar.warn, "a barricade comes in your lane with a DETOUR AHEAD sign before it: " + JSON.stringify(run.spawnBar));
  check(run.right.score === 1 && run.right.strikes === 0 && run.right.coins && run.right.boarded, "pulling up beside the right hitchhiker answers the question and pays coins: " + JSON.stringify(run.right));

  /* the next question: its reading pop-up, then the controls and Select TWO */
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 300000 }).catch(function () {});
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 300000 }).catch(function () {});
  await page.evaluate(function () { window.__hw.quiet(); SolScene.hw.carX = 0.5; });
  var ctl = {};
  await page.keyboard.down("ArrowLeft");
  ctl.left = await page.evaluate(async function () { await window.__hw.until(function () { return SolScene.hw.carX < -0.3; }, 400000); return SolScene.hw.carX; });
  await page.keyboard.up("ArrowLeft");
  await page.keyboard.down("d");
  ctl.right = await page.evaluate(async function () { await window.__hw.until(function () { return SolScene.hw.carX > 0.9; }, 400000); return SolScene.hw.carX; });
  await page.keyboard.up("d");
  await page.keyboard.down("ArrowUp");
  ctl.gas = await page.evaluate(async function () { var B = SolScene.hw; await window.__hw.until(function () { return B.v > B.P.speed * 1.12; }, 400000); return +(B.v / B.P.speed).toFixed(2); });
  await page.keyboard.up("ArrowUp");
  await page.keyboard.down("Space");
  ctl.brake = await page.evaluate(async function () { var B = SolScene.hw; await window.__hw.until(function () { return B.v < B.P.speed * 0.6 && B.braking; }, 400000); return +(B.v / B.P.speed).toFixed(2); });
  await page.keyboard.up("Space");
  await page.evaluate(async function () { var B = SolScene.hw; await window.__hw.until(function () { return B.v > B.P.speed * 0.95; }, 60000); });
  /* the on-screen BRAKE button */
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  ctl.button = await page.evaluate(async function () { var B = SolScene.hw; await window.__hw.until(function () { return B.v < B.P.speed * 0.6 && B.braking; }, 400000); return +(B.v / B.P.speed).toFixed(2); });
  await page.mouse.up();
  /* the mouse: move it and the car steers toward it; hold a button and it brakes */
  var cbox = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  await page.evaluate(function () { SolScene.hw.carX = 0.5; });
  await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y + cbox.h * 0.5);
  await page.mouse.move(cbox.x + cbox.w * 0.12, cbox.y + cbox.h * 0.5, { steps: 4 });
  ctl.mouseLeft = await page.evaluate(async function () { await window.__hw.until(function () { return SolScene.hw.carX < -0.9; }, 400000); return +SolScene.hw.carX.toFixed(2); });
  await page.mouse.move(cbox.x + cbox.w * 0.88, cbox.y + cbox.h * 0.5, { steps: 4 });
  ctl.mouseRight = await page.evaluate(async function () { await window.__hw.until(function () { return SolScene.hw.carX > 0.9; }, 400000); return +SolScene.hw.carX.toFixed(2); });
  await page.mouse.down();
  ctl.mouseBrake = await page.evaluate(async function () { var B = SolScene.hw; await window.__hw.until(function () { return B.v < B.P.speed * 0.6 && B.braking; }, 400000); return +(B.v / B.P.speed).toFixed(2); });
  await page.mouse.up();
  await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y - 30);
  console.log("controls", JSON.stringify(ctl));
  check(ctl.left < -0.3 && ctl.right > 0.9, "◀ and D steer the car across the road: " + JSON.stringify({ left: ctl.left, right: ctl.right }));
  check(ctl.gas >= 1.12 && ctl.brake <= 0.6, "▲ speeds up and Space brakes: " + JSON.stringify({ gas: ctl.gas, brake: ctl.brake }));
  check(ctl.button <= 0.6, "holding the on-screen BRAKE button brakes: " + ctl.button);
  check(ctl.mouseLeft < -0.9 && ctl.mouseRight > 0.9 && ctl.mouseBrake <= 0.6, "the car steers toward the mouse, and a held mouse button brakes: " + JSON.stringify({ l: ctl.mouseLeft, r: ctl.mouseRight, brake: ctl.mouseBrake }));

  var two = await page.evaluate(async function () {
    var s = SolScene, B = s.hw, H = window.__hw, o = {};
    H.quiet();
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    await H.meet("hiker", 1.32, 1.32, { letter: pair[0] });
    o.first = { score: s.score - sc0, found: s.extracted.join(""), strikes: s.strikes };
    var seen = []; B.queue = [];
    for (var i = 0; i < 16; i++) seen.push(s.hwNextLetter());
    o.first.again = seen.indexOf(pair[0]) !== -1;
    await H.meet("hiker", -1.32, -1.32, { letter: pair[1] });
    o.second = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins };
    return o;
  });
  check(two.first.score === 0 && two.first.found === "" + two.first.found && two.first.found.length === 1 && !two.first.again && two.first.strikes === 0 && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right hitchhikers (the first one found stops coming round): " + JSON.stringify(two));

  /* the difficulty: every level 2-100 harder than the one before, never easier on any setting */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.highway.params, s = SolScene, out = { same: typeof s.highwayParams === "function" && JSON.stringify(s.highwayParams(50)) === JSON.stringify(f(50)) };
    var up = ["speed", "truckSpd", "barrier", "fogP", "fog", "rain", "pair", "stall", "flicker", "pass"], down = ["reach", "gap", "pickTol", "truckEvery", "hazGap", "pickMax", "grip", "fair"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.keys = Object.keys(f(1)).filter(function (k) { return up.indexOf(k) === -1 && down.indexOf(k) === -1; });
    out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l100: ramp.l100 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0 && ramp.keys.length === 0, "highwayParams (on the def as params): every level 2-100 is harder than the one before and never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat, unchecked: ramp.keys }));
  var e = ramp.l1, z = ramp.l100;
  check(e.speed < 3.5 && e.reach > 18 && e.truckEvery > 11 && e.pickTol > 0.55 && e.barrier === 0 && e.fogP === 0 && e.pickMax > 1 && e.grip > 20 && e.stall === 0 && e.flicker === 0 && e.pass === 0 && e.fair === 1,
    "level 1 is gentle: slow, long headlights, a truck every 11 s, a wide pick-up, nothing else on the road: " + JSON.stringify(e));
  check(z.speed > 5.5 && z.reach < 14 && z.truckEvery < 3 && z.barrier > 0.7 && z.fog > 0.5 && z.pickMax < 0.65 && z.grip <= 3.1 && z.pair > 0.65 && z.stall >= 0.6 && z.flicker > 0.15 && z.pass > 0.55,
    "level 100 is intense: fast, short headlights, trucks in pairs and passing, barricades, fog, stalls, flicker, a slick road: " + JSON.stringify(z));

  /* level 10: still Night Highway; level 31: a speeding car can't pick anyone up */
  var l10 = await gotoLevel(10);
  check(l10.mode === "highway" && l10.tier === 0, "level 10 plays Night Highway: " + JSON.stringify({ mode: l10.mode, tier: l10.tier }));
  var l31 = await gotoLevel(31);
  await page.evaluate(HELPERS);
  var fast = await page.evaluate(async function () {
    var s = SolScene, B = s.hw, H = window.__hw, o = {};
    H.quiet(); s.spareLives = 0;
    var need = s.need.slice(), sc0 = s.score;
    B.v = B.P.speed;
    var a = await H.meet("hiker", 1.32, 1.32, { letter: need[0] });
    o.fast = { score: s.score - sc0, strikes: s.strikes, jumped: a.anim === "jump" || a.gone, msg: s.scoreToastMsg };
    s.keys.SPACE.isDown = true;
    await H.until(function () { return B.v <= B.P.speed * B.P.pickMax; }, 60000);
    await H.meet("hiker", 1.32, 1.32, { letter: need[0] });
    if (need.length > 1) await H.meet("hiker", -1.32, -1.32, { letter: need[1] });
    s.keys.SPACE.isDown = false;
    o.slow = { score: s.score - sc0, strikes: s.strikes };
    return o;
  });
  check(/New this time:.*brake/i.test(l31.card) && fast.fast.score === 0 && fast.fast.strikes === 0 && fast.fast.jumped && /Too fast/.test(fast.fast.msg) && fast.slow.score === 1 && fast.slow.strikes === 0,
    "level 31: the card says what's new; at full speed a hitchhiker jumps back (no life, no answer); braking under the mark, they get in: " + JSON.stringify(fast));

  /* the later hazards: fog cuts the beams' reach, the headlights flicker, a truck passes in your lane */
  var l85 = await gotoLevel(85);
  await page.evaluate(HELPERS);
  var lateH = await page.evaluate(async function () {
    var s = SolScene, B = s.hw, H = window.__hw, o = {};
    H.quiet();
    var r0 = B.reachNow; B.P.fogP = 3; B.P.barrier = 0; B.P.stall = 0;
    o.fogKind = s.hwHazard();
    await H.until(function () { return B.fogAmt > 0.6; }, 60000);
    o.fog = { before: +r0.toFixed(1), during: +B.reachNow.toFixed(1) };
    H.quiet(); await H.wait(50);
    B.P.flicker = 0; B.flickT = 0.8; var dark = false; await H.until(function () { if (B.beam < 0.5) dark = true; return B.flickT <= 0; }, 60000);
    await H.frames(4);
    o.flicker = { dark: dark, back: B.beam === 1 };
    H.quiet(); B.P.pass = 1; B.carX = 0.5;
    var ps = s.hwSpawnTrucks(); ps.z = 2.9; var other = B.objs.filter(function (x) { return x.kind === "truck" && x !== ps; })[0]; if (other) other.z = 3.3;
    await H.until(function () { return ps.done; }); await H.wait(80);
    o.pass = { passer: ps.x, strikes: s.strikes, label: s._lastHitLabel };
    H.quiet(); B.P.pass = 1; B.carX = 1.45;
    ps = s.hwSpawnTrucks(); ps.z = 2.9; other = B.objs.filter(function (x) { return x.kind === "truck" && x !== ps; })[0]; if (other) other.z = 3.3;
    await H.until(function () { return ps.done && (!other || other.done); }); await H.wait(80);
    o.passMiss = { strikes: s.strikes };
    B.P = s.highwayParams(s.night);
    return o;
  });
  check(lateH.fogKind === "fog" && lateH.fog.during < lateH.fog.before * 0.75, "a fog bank cuts the headlights' reach: " + JSON.stringify(lateH.fog));
  check(lateH.flicker.dark && lateH.flicker.back, "the headlights flicker out and come back (level 71 on): " + JSON.stringify(lateH.flicker));
  check(lateH.pass.passer === 0.5 && lateH.pass.strikes === 1 && /TRUCK/.test(lateH.pass.label || "") && lateH.passMiss.strikes === 0,
    "a truck passing another comes down your lane: it costs a life, and the shoulder dodges both (level 81 on): " + JSON.stringify(lateH));

  /* the pictures: levels 1, 50 and 100 */
  await gotoLevel(1); await stage(1, { say: "Night. The desert. Two lanes of blacktop and nowhere to hide." }); await shot("02-level1");
  var l50 = await gotoLevel(50); await stage(50, { barrier: true, fog: true }); await shot("03-level50");
  check(l50.mode === "highway" && /New this time:/.test(l50.card), "level 50 plays Night Highway and the card says what's new");
  var l100 = await gotoLevel(100); await stage(100, { barrier: true, stall: true, truckZ: 7, say: "The trucks don't stop for anybody. Neither does fate." }); await shot("04-level100");
  check(l100.mode === "highway" && l100.tier === 9 && /New this time:.*end of the road/i.test(l100.card), "level 100 plays Night Highway; the card says it's the end of the road: " + JSON.stringify({ mode: l100.mode, tier: l100.tier }));
  /* a real drive at level 100 for a moment: no errors, things on the road */
  var drive = await page.evaluate(async function () {
    var s = SolScene, B = s.hw, f0 = s.game.loop.frame, t0 = Date.now(); s.iframeMs = 1e9; s.spareLives = 9;
    B.P = s.highwayParams(100); B.v = B.P.speed; B.nextHiker = B.dist; B.truckT = 0; B.nextHaz = B.dist;
    while (s.game.loop.frame < f0 + 120 && Date.now() - t0 < 120000) await new Promise(function (r) { setTimeout(r, 100); });
    return { objs: B.objs.length, dist: +B.dist.toFixed(1), strikes: s.strikes };
  });
  check(drive.dist > 5 && drive.objs > 0, "level 100 drives on its own: " + JSON.stringify(drive));
  await shot("05-level100-live");

  /* losing: the last life ends the level with a Retry */
  var lose = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    s.answerWrong("Z", "WRONG LETTER");
    for (var w = 0; w < 4000 && !(s.ended && !document.getElementById("overlay").classList.contains("hidden")); w++) await new Promise(function (r) { setTimeout(r, 100); });
    await new Promise(function (r) { setTimeout(r, 300); });
    return { ended: s.ended, title: document.getElementById("win-title").textContent, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Night Highway/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 200));
  var fxGone = await page.evaluate(async function () {
    var old = SolScene.hw;
    SolScene.scene.restart({ family: "LIT", strand: "DETOUR", night: 2 });
    for (var w = 0; w < 3000 && !(window.SolScene && SolScene.night === 2 && SolScene.hw && SolScene.hw !== old); w++) await new Promise(function (r) { setTimeout(r, 100); });
    /* a camera's post FX live in its post pipelines; count the colour matrices (one: this level's own) */
    var cam = SolScene.cameras.main, mine = SolScene.hw.fxCM;
    return { fx: mine ? (cam.postPipelines || []).filter(function (pp) { return pp.controller && pp.controller.type === mine.type; }).length : -1,
      this: !!mine && (cam.postPipelines || []).some(function (pp) { return pp.controller === mine; }), webgl: SolScene.game.renderer.type === 2 };
  });
  check(!fxGone.webgl || (fxGone.fx === 1 && fxGone.this), "the black-and-white filter is put on once and taken off when the level ends: " + JSON.stringify(fxGone));
  await ctx.close();

  /* ── the 500-pixel-tall Canvas frame ── */
  var ctx2 = await browser.newContext({ viewport: { width: 900, height: 500 } });
  await ctx2.addInitScript(function () { window.SOL_STATE = "LIT"; });
  page = await openGame(ctx2, "500px");
  page.setDefaultTimeout(180000);
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.click('#mode-packs .card[data-genre="NOIR"]');
  await page.click('#skill-packs .card[data-gamemode="highway"]');
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim && SolScene.hw; }, null, { timeout: 300000 }).catch(function () {});
  for (i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 300000 }).catch(function () {});
  await stage(1, { say: "Out here the road never ends. It just runs out of light." });
  var small = await page.evaluate(function () {
    var s = SolScene, B = s.hw, c = B.car, top = c.y - c.displayHeight;
    var hk = B.objs.filter(function (o) { return o.kind === "hiker" && o.z < 10; }).map(function (o) { return { x: Math.round(o.sign.x), y: Math.round(o.sign.y), w: Math.round(o.sign.displayWidth) }; });
    return { W: s.W, H: s.H, car: { x: Math.round(c.x), bottom: Math.round(c.y), top: Math.round(top), w: Math.round(c.displayWidth) }, gauge: { x: B.gx, y: B.gy, r: B.gR }, signs: hk };
  });
  await page.screenshot({ path: path.join(shots, "highway-06-frame500.png"), timeout: 180000 });
  check(small.H <= 500 && small.car.bottom <= small.H && small.car.top > small.H * 0.5 && small.car.w < small.W * 0.4 && small.gauge.y + small.gauge.r < small.H * 0.4 &&
    small.signs.length >= 2 && small.signs.every(function (g) { return g.x > 0 && g.x < small.W && g.y > 0 && g.w >= 24; }),
    "in the 500-pixel-tall frame the car, the gauge and readable signs fit the canvas: " + JSON.stringify(small));
  await ctx2.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
