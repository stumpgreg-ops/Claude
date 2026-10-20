/* Headless test of the Lit and Film mode "lastcar" (The Last Car, Double Indemnity; js/mode-lastcar.js):
   node tools/smoke-mode-lastcar.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Film Noir, then Double Indemnity, and drives the mode through the scene's own methods. Game time is
   advanced by calling the scene's update() with 50 ms steps (T.step), so the checks do not depend on how fast a
   loaded machine renders; the real keyboard, mouse and JUMP button are checked against real frames.
   Checks: the mode plays on levels 1, 10 and 100; the right letter scores; a wrong letter costs a life; a
   telegraph pole, a signal arm and the conductor each cost a life and can each be avoided; landing between
   markers costs nothing; Select TWO needs both; keys, mouse and the action button work; the difficulty climbs
   every level 2-100; the reading pop-up names the game and its controls; no page errors. Screenshots go to
   tools/shots/lastcar-*.png. Prints ALL OK or the number FAILED. */
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
    page.on("response", function (r) { if (r.status() === 404 && !/content11[4-9]|content120/.test(r.url())) console.log(tag + " 404 " + r.url()); });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      /* requestFullscreen: the page shell's own full-screen request, refused when a slow headless run lets the click's user activation expire */
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|404|Failed to load resource|requestFullscreen/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  page.setDefaultTimeout(240000);
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, "lastcar-" + name + ".png"), timeout: 240000 }); }
  /* wait for n real frames (the screenshots and the real-input checks need the page's own loop) */
  async function frames(n) {
    var f0 = await page.evaluate(function () { return SolScene.game.loop.frame; });
    await page.waitForFunction(function (f) { return SolScene.game.loop.frame >= f; }, f0 + n, { timeout: 240000, polling: 50 });
  }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build (its card is on the title screen)");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-genre="NOIR"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="lastcar"]');
    return c ? { name: c.querySelector(".name").textContent, kind: c.querySelector(".kind").textContent, strand: c.getAttribute("data-strand"), visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && card.name === "Double Indemnity" && /The Last Car/.test(card.kind) && card.strand === "INDEMNITY", "the Double Indemnity card shows on the Film Noir screen, with its game: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="lastcar"]');
  var picked = await page.evaluate(function () {
    var o = { only: SolModes.only, def: !!SolModes.MODES.lastcar, l: [1, 10, 55, 100].map(function (n) { var m = SolModes.modeFor(n); return m ? m.id : "-"; }).join(",") };
    o.mix = [];
    var only = SolModes.only; SolModes.only = "lit-noir";
    for (var n = 1; n <= 8; n++) { var m = SolModes.modeFor(n); o.mix.push(m ? m.id : "-"); }
    SolModes.only = only;
    return o;
  });
  check(picked.only === "lastcar" && picked.def && picked.l === "lastcar,lastcar,lastcar,lastcar", "picking Double Indemnity plays The Last Car on every level: " + JSON.stringify(picked));
  check(picked.mix.indexOf("lastcar") !== -1, "Film Noir's All plays The Last Car in its turn: " + picked.mix.join(","));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  async function gotoLevel(n) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "INDEMNITY", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.lc && s.claim && s.readOpen; }, n, { timeout: 120000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, strand: s.strand, act: document.getElementById("btn-action").textContent,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 60000 }).catch(function () {});
    await installHelpers();
    return info;
  }
  /* the test's own helpers, in the page: T.step advances the game 50 ms at a time through the scene's update() */
  async function installHelpers() {
    await page.evaluate(function () {
      var T = window.T = {};
      T.s = function () { return SolScene; };
      T.step = function (n, until) {
        var s = SolScene;
        for (var i = 0; i < n; i++) { if (until && until()) return true; s.update(performance.now(), 50); }
        return until ? !!until() : true;
      };
      T.keysUp = function () { var k = SolScene.keys; Object.keys(k).forEach(function (n) { k[n].isDown = false; }); };
      T.quiet = function () {
        var s = SolScene, S = s.lc;
        T.keysUp();
        s.lcHold(true);
        S.cond.st = "in"; S.cond.t = 0; S.cond.next = 1e12; S.condSpr.setVisible(false); S.lantern.setVisible(false);
        s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0; s._lastHitLabel = "";
        if (S.pl.state !== "plat") s.lcRespawn();
        S.fade = 0; S.fadeDir = 0; S.pl.duck = false; S.pl.vx = 0; S.ptrT = null; S.lpx = s.ptr.x; S.lpy = s.ptr.y;
        if (S.hat) { try { S.hat.spr.destroy(); } catch (e) {} S.hat = null; }
        T.step(2);
      };
      /* a press of a key: down for one step, up for one step */
      T.press = function (key) { var s = SolScene; s.keys[key].isDown = true; T.step(1); s.keys[key].isDown = false; T.step(1); };
      T.landed = function () { var st = SolScene.lc.pl.state; return st === "ground"; };
      T.back = function () { var S = SolScene.lc; return S.pl.state === "plat" && S.fade === 0 && S.fadeDir === 0; };
      /* the wrong letters not crossed out yet (landing on a crossed-out board is only a miss) */
      T.wrongs = function () { var s = SolScene; return s.choiceLetters().filter(function (L) { return s.need.indexOf(L) === -1 && s.lc.dead.indexOf(L) === -1; }); };
    });
  }

  /* ── level 1 ── */
  var l1 = await gotoLevel(1);
  check(l1.key === "mode" && l1.mode === "lastcar" && l1.act === "JUMP" && l1.strand === "INDEMNITY", "level 1 runs The Last Car in the mode scene with a JUMP button, on Double Indemnity's questions: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act, strand: l1.strand }));
  check(/The Last Car/.test(l1.card) && /noir/i.test(l1.card) && /Controls:/.test(l1.card) && /JUMP/.test(l1.card) && /duck/i.test(l1.card) && /conductor/i.test(l1.card) && /marker/.test(l1.hint),
    "the reading pop-up names the game and its controls: " + l1.card.slice(0, 140) + "…");

  var run = await page.evaluate(function () {
    var s = SolScene, S = s.lc, o = {};
    T.quiet();
    var wrongs = T.wrongs(), need = s.need.slice();
    o.letters = s.choiceLetters().join(""); o.need = need.join("");
    /* the keys walk him along the platform */
    var px0 = S.pl.px; s.keys.LEFT.isDown = true; T.step(8); s.keys.LEFT.isDown = false; T.step(4);
    var px1 = S.pl.px; s.keys.D.isDown = true; T.step(8); s.keys.D.isDown = false; T.step(4);
    o.walk = { left: +(px0 - px1).toFixed(1), right: +(S.pl.px - px1).toFixed(1) };
    /* ducking (▼) */
    s.keys.DOWN.isDown = true; T.step(2); o.duck = S.pl.duck; s.keys.DOWN.isDown = false; T.step(2); o.unduck = !S.pl.duck;
    /* a wrong letter: a marker set so a jump made now lands in its pool of light */
    T.quiet();
    var m = s.lcPlace("mark", s.lcJumpX(), wrongs[0]);
    var pr = s.lcPredict();
    o.predict = { mark: pr.mark === m, pole: !!pr.pole };
    T.press("SPACE");
    o.jumped = S.pl.state === "air";
    T.step(60, T.landed);
    o.wrong = { landed: T.landed(), strikes: s.strikes, label: s._lastHitLabel, score: s.score, state: m.state, x: m.xm.visible, dx: Math.round(S.pl.x - s.lcX(m)) };
    o.wrongBack = T.step(120, T.back);
    /* a later board with the crossed-out letter comes crossed out */
    var m2 = s.lcPlace("mark", s.W + 40, wrongs[0]); o.deadAgain = m2.state === "dead"; s.lcFree(m2);
    /* landing between the markers costs nothing */
    T.quiet();
    var ms0 = S.misses; T.press("W");
    T.step(60, T.landed);
    o.miss = { strikes: s.strikes, misses: S.misses - ms0, score: s.score };
    o.missBack = T.step(120, T.back);
    /* a telegraph pole: in the air when it passes costs a life; the ring warns first */
    T.quiet();
    var v = S.P.speed * S.k, p = s.lcPlace("pole", S.pl.x + v * 0.3);
    o.poleWarn = { pred: !!s.lcPredict().pole };
    T.step(1); o.poleWarn.tag = S.ringTag.visible;
    var ph0 = S.poleHits; T.press("SPACE");
    T.step(60, T.landed);
    o.pole = { strikes: s.strikes, label: s._lastHitLabel, hits: S.poleHits - ph0 };
    T.step(120, T.back);
    /* ... and standing still while it passes costs nothing */
    T.quiet();
    p = s.lcPlace("pole", S.pl.x + v * 0.3);
    T.step(40, function () { return s.lcX(p) < S.pl.x - 60; });
    o.poleSafe = { strikes: s.strikes, passed: s.lcX(p) < S.pl.x - 60 };
    /* the conductor: standing in his light costs a life */
    T.quiet();
    S.pl.px = S.walk1; T.step(1);
    var C = s.lcConductorNow("warn");
    T.step(4); o.warn = { st: C.st, cue: S.doorCue.visible };
    T.step(200, function () { return C.st === "out"; });
    o.out = { st: C.st, spr: S.condSpr.visible, inLight: s.lcInLight(S.pl.x) };
    T.step(200, function () { return s.strikes > 0 || C.st === "in"; });
    o.seen = { strikes: s.strikes, label: s._lastHitLabel, n: S.seenN };
    T.step(200, function () { return C.st === "in"; });
    /* ... ducking below the railing hides you */
    T.quiet();
    S.pl.px = S.walk1; s.keys.S.isDown = true; T.step(2);
    var hid0 = S.hidN; s.lcConductorNow("warn");
    T.step(400, function () { return C.st === "in" && C.t > 0; });
    o.ducked = { strikes: s.strikes, hid: S.hidN - hid0, duck: S.pl.duck };
    s.keys.S.isDown = false;
    /* ... and so does the dark corner, beyond the doorway's light (to level 50) */
    T.quiet();
    S.pl.px = S.walk0; T.step(2);
    hid0 = S.hidN; s.lcConductorNow("warn");
    T.step(400, function () { return C.st === "in" && C.t > 0; });
    o.corner = { strikes: s.strikes, hid: S.hidN - hid0, inLight: s.lcInLight(S.pl.x) };
    T.quiet();
    return o;
  });
  console.log("run", JSON.stringify(run));
  check(run.walk.left > 10 && run.walk.right > 10, "◀ and D walk him along the platform: " + JSON.stringify(run.walk));
  check(run.duck && run.unduck, "▼ ducks him below the railing, letting go stands him up");
  check(run.predict.mark && !run.predict.pole && run.jumped, "the landing ring predicts the marker a jump would land on (level 1 lights its board), and Space jumps");
  check(run.wrong.landed && run.wrong.strikes === 1 && /WRONG LETTER/.test(run.wrong.label) && run.wrong.score === 0 && run.wrong.state === "dead" && run.wrong.x && run.wrongBack && run.deadAgain,
    "landing at a wrong letter costs a life and crosses that letter out (later boards too); then he is back on the platform: " + JSON.stringify(run.wrong));
  check(run.miss.strikes === 0 && run.miss.misses === 1 && run.miss.score === 0 && run.missBack, "landing between the markers costs no life: " + JSON.stringify(run.miss));
  check(run.poleWarn.pred && run.poleWarn.tag && run.pole.strikes === 1 && /POLE/.test(run.pole.label) && run.pole.hits === 1, "the ring warns of a pole in the way, and flying into it costs a life: " + JSON.stringify(run.poleWarn) + " " + JSON.stringify(run.pole));
  check(run.poleSafe.strikes === 0 && run.poleSafe.passed, "a pole that passes while he stands on the platform costs nothing: " + JSON.stringify(run.poleSafe));
  check(run.warn.st === "warn" && run.warn.cue && run.out.st === "out" && run.out.spr && run.out.inLight && run.seen.strikes === 1 && /CONDUCTOR/.test(run.seen.label) && run.seen.n === 1,
    "footsteps warn, the conductor steps out, and standing in his light costs a life: " + JSON.stringify({ warn: run.warn, out: run.out, seen: run.seen }));
  check(run.ducked.strikes === 0 && run.ducked.hid === 1 && run.ducked.duck, "ducking below the railing hides you from the conductor: " + JSON.stringify(run.ducked));
  check(run.corner.strikes === 0 && run.corner.hid === 1 && !run.corner.inLight, "so does standing in the dark corner beyond his light (level 1): " + JSON.stringify(run.corner));

  /* the picture: a jump in the air over a marker, with the ring and the pools of light */
  await page.evaluate(function () {
    var s = SolScene, S = s.lc, L = s.choiceLetters();
    T.quiet(); s.spareLives = 9;
    s.lcPlace("mark", s.lcJumpX() - 60 * S.k, T.wrongs()[0]); s.lcPlace("mark", s.lcJumpX() + 330 * S.k, L[1]); s.lcPlace("pole", s.lcJumpX() + 160 * S.k);
    s.lcPlace("mark", s.lcJumpX() - 400 * S.k, L[2]);
    T.press("SPACE"); T.step(5);
  });
  await frames(2);
  await shot("01-level1-jump");
  await page.evaluate(function () { var s = SolScene, S = s.lc; T.step(120, T.back); T.quiet(); s.spareLives = 9; S.pl.px = S.walk0 + 30; s.lcPlace("mark", s.lcJumpX() + 200 * S.k, s.choiceLetters()[0]); s.lcConductorNow("out"); T.step(3); });
  await frames(2);
  await shot("02-level1-conductor");
  await page.evaluate(function () { var s = SolScene; s.iframeMs = 0; T.quiet(); });

  /* the real keyboard, mouse and JUMP button (real frames) */
  var cbox = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  async function realJump(fn) {
    await page.evaluate(function () { T.quiet(); SolScene.iframeMs = 1e9; window.__j0 = SolScene.lc.jumps; });
    await fn();
    var ok = await page.waitForFunction(function () { return SolScene.lc.jumps > window.__j0; }, null, { timeout: 120000, polling: 50 }).then(function () { return true; }).catch(function () { return false; });
    await page.evaluate(function () { T.keysUp(); T.step(120, T.back); SolScene.iframeMs = 0; });
    return ok;
  }
  var real = {};
  real.space = await realJump(async function () {
    await page.keyboard.down("Space");
    await page.waitForFunction(function () { return SolScene.lc.jumps > window.__j0; }, null, { timeout: 120000, polling: 50 }).catch(function () {});
    await page.keyboard.up("Space");
  });
  real.click = await realJump(async function () {
    await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y + cbox.h * 0.3);
    await page.mouse.down();
    await page.waitForFunction(function () { return SolScene.lc.jumps > window.__j0; }, null, { timeout: 120000, polling: 50 }).catch(function () {});
    await page.mouse.up();
  });
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, vis: r.width > 0 }; });
  real.button = await realJump(async function () {
    await page.mouse.move(abox.x, abox.y);
    await page.mouse.down();
    await page.waitForFunction(function () { return SolScene.lc.jumps > window.__j0; }, null, { timeout: 120000, polling: 50 }).catch(function () {});
    await page.mouse.up();
  });
  /* pointing walks him toward the pointer; holding the right button ducks */
  var plat = await page.evaluate(function () { var s = SolScene, S = s.lc, r = s.game.canvas.getBoundingClientRect(); T.quiet(); S.pl.px = S.walk1; T.step(1); return { x: r.left + (S.xCar0 + S.walk0 * S.k) * r.width / s.W, y: r.top + (S.yPlat - 60 * S.k) * r.height / s.H, px: S.pl.px }; });
  await page.mouse.move(plat.x + 40, plat.y - 30);
  await page.mouse.move(plat.x, plat.y, { steps: 3 });
  await page.waitForFunction(function (px) { return SolScene.lc.pl.px < px - 15; }, plat.px, { timeout: 120000, polling: 50 }).catch(function () {});
  real.point = await page.evaluate(function (px) { return +(px - SolScene.lc.pl.px).toFixed(1); }, plat.px);
  await page.mouse.down({ button: "right" });
  await page.waitForFunction(function () { return SolScene.lc.pl.duck; }, null, { timeout: 120000, polling: 50 }).catch(function () {});
  real.rightDuck = await page.evaluate(function () { return SolScene.lc.pl.duck && SolScene.lc.pl.state === "plat"; });
  await page.mouse.up({ button: "right" });
  await page.mouse.move(cbox.x + 5, cbox.y + cbox.h - 5);
  await page.evaluate(function () { T.quiet(); });
  console.log("real", JSON.stringify(real));
  check(real.space, "a real Space press jumps");
  check(real.click, "a real mouse click on the picture jumps");
  check(abox.vis && real.button, "the on-screen JUMP button jumps");
  check(real.point > 15 && real.rightDuck, "pointing with the mouse walks him toward the pointer, and holding the right button ducks: " + JSON.stringify({ point: real.point, duck: real.rightDuck }));

  /* the right letter answers the question and pays coins */
  var right = await page.evaluate(function () {
    var s = SolScene, S = s.lc;
    T.quiet();
    var sc0 = s.score, coins = s.nightCoins, need = s.need.slice();
    var m = s.lcPlace("mark", s.lcJumpX(), need[0]);
    T.press("SPACE"); T.step(60, T.landed);
    var o = { score: s.score - sc0, strikes: s.strikes };
    if (need.length > 1) { T.step(200, T.back); s.lcPlace("mark", s.lcJumpX(), need[1]); T.press("SPACE"); T.step(60, T.landed); }
    o.score = s.score - sc0; o.coins = s.nightCoins > coins; o.strikes = s.strikes; o.found = m.label.text;
    return o;
  });
  check(right.score === 1 && right.strikes === 0 && right.coins && right.found === "✓", "landing at the right letter answers the question and pays coins: " + JSON.stringify(right));
  /* the next question: its reading pop-up, then Select TWO */
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 120000 }).catch(function () {});
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 60000 }).catch(function () {});
  var two = await page.evaluate(function () {
    var s = SolScene, S = s.lc, o = {};
    T.quiet();
    o.fresh = { back: S.pl.state === "plat", marks: S.marks.length };
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    var a = s.lcPlace("mark", s.lcJumpX(), pair[0]);
    T.press("SPACE"); T.step(60, T.landed);
    o.first = { score: s.score - sc0, state: a.state, board: a.label.text, found: s.extracted.join(""), strikes: s.strikes };
    o.firstBack = T.step(200, T.back);
    var b2 = s.lcPlace("mark", s.W + 30, pair[0]); o.foundAgain = b2.state === "found"; s.lcFree(b2);
    s.lcPlace("mark", s.lcJumpX(), pair[1]);
    T.press("SPACE"); T.step(60, T.landed);
    o.second = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins };
    return o;
  });
  console.log("two", JSON.stringify(two));
  check(two.fresh.back && two.first.score === 0 && two.first.state === "found" && two.first.board === "✓" && two.first.found.length === 1 && two.first.strikes === 0 && two.firstBack && two.foundAgain &&
    two.second.score === 1 && two.second.strikes === 0 && two.second.coins, "a Select TWO question needs both right markers: the first is marked found, the second answers it: " + JSON.stringify(two));
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 120000 }).catch(function () {});

  /* the difficulty: every level 2-100 harder than the one before, never easier on any setting */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.lastcar.params, s = SolScene, out = { same: typeof s.lastcarParams === "function" && JSON.stringify(s.lastcarParams(50)) === JSON.stringify(f(50)) };
    var up = ["speed", "condLook", "reach", "beam", "steam", "slick", "sway", "twice"], down = ["gapS", "tol", "airCtl", "poleGap", "sigGap", "condEvery", "condWarn", "condGrace", "guide", "poleWarn"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat;
    out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    out.news = SolModes.MODES.lastcar.news.length;
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l100: ramp.l100 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0 && ramp.news === 10, "lastcarParams (on the def as params): every level 2-100 is harder than the one before and never easier, with a news line per tier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat }));
  var e = ramp.l1, z = ramp.l100;
  check(e.speed < 220 && e.gapS > 2.2 && e.tol >= 43 && e.sigGap > 1e8 && e.condWarn >= 2700 && e.condGrace >= 600 && e.guide === 1 && e.poleWarn === 1 && e.beam === 0 && e.steam === 0 && e.slick === 0 && e.sway === 0,
    "level 1 is gentle: a slow train, wide pools of light, no signals, a long warning before the conductor, the board and the ring guide the jump: " + JSON.stringify(e));
  check(z.speed >= 500 && z.gapS < 1.3 && z.tol <= 27 && z.sigGap < 2000 && z.condWarn <= 1100 && z.guide === 0 && z.poleWarn === 0 && z.beam === 1 && z.steam > 0.75 && z.sway > 0 && z.twice > 0.6,
    "level 100 is intense: a fast train, small pools, signals, the flashlight, steam, rain and sway: " + JSON.stringify(z));

  /* level 10: plays, no signals yet; level 15: signal arms (duck under them) */
  var l10 = await gotoLevel(10);
  var p10 = await page.evaluate(function () { var s = SolScene; return { sig: s.lc.P.sigGap, tier: s.tier, k: s.lc.k }; });
  check(l10.mode === "lastcar" && l10.tier === 0 && p10.sig > 1e8, "level 10 plays The Last Car (no signal masts yet): " + JSON.stringify(p10));
  var l15 = await gotoLevel(15);
  var sig = await page.evaluate(function () {
    var s = SolScene, S = s.lc, o = {}, v = S.P.speed * S.k;
    T.quiet();
    var g = s.lcPlace("sig", S.pl.x + 160 * S.k);
    T.step(60, function () { return s.lcX(g) < S.pl.x - 80 * S.k; });
    o.hit = { strikes: s.strikes, label: s._lastHitLabel, n: S.sigHits };
    T.quiet();
    s.keys.DOWN.isDown = true; T.step(2);
    g = s.lcPlace("sig", S.pl.x + 160 * S.k);
    T.step(60, function () { return s.lcX(g) < S.pl.x - 80 * S.k; });
    o.duck = { strikes: s.strikes, duck: S.pl.duck };
    s.keys.DOWN.isDown = false;
    T.quiet();
    /* the line plans signals on its own from level 11, never where they would spoil a jump */
    s.lcHold(false); S.plans = [];
    var line = s.lcSpawnU(); S.lastMarkU = line; S.nextSigU = line; S.nextPoleU = line;
    s.lcPlan(line + 30000);
    var marks = S.plans.filter(function (p) { return p.kind === "mark"; }), sigs = S.plans.filter(function (p) { return p.kind === "sig"; }), poles = S.plans.filter(function (p) { return p.kind === "pole"; });
    var vT = S.P.speed * 0.619, badPole = 0, badSig = 0;
    marks.forEach(function (m) {
      poles.forEach(function (p) { if (p.u > m.u - vT - 30 && p.u < m.u + 50) badPole++; });
      sigs.forEach(function (p) { if (p.u > m.u - vT - 0.25 * S.P.speed && p.u < m.u + 40) badSig++; });
    });
    o.plan = { marks: marks.length, sigs: sigs.length, poles: poles.length, badPole: badPole, badSig: badSig };
    T.quiet();
    return o;
  });
  console.log("sig", JSON.stringify(sig));
  check(l15.tier === 1 && /New this time:.*Signal masts/.test(l15.card), "level 15: the card says signal masts are new");
  check(sig.hit.strikes === 1 && /SIGNAL/.test(sig.hit.label) && sig.hit.n === 1, "a signal arm passing at head height costs a life: " + JSON.stringify(sig.hit));
  check(sig.duck.strikes === 0 && sig.duck.duck, "ducking (▼) lets the signal arm pass over: " + JSON.stringify(sig.duck));
  check(sig.plan.marks > 20 && sig.plan.sigs > 3 && sig.plan.poles > 10 && sig.plan.badPole === 0 && sig.plan.badSig === 0, "the line ahead never puts a pole or a signal where it would spoil the jump onto a marker: " + JSON.stringify(sig.plan));

  /* level 55: the flashlight finds the dark corner; ducking still hides you. The middle picture. */
  var l55 = await gotoLevel(55);
  var beam = await page.evaluate(function () {
    var s = SolScene, S = s.lc, o = { beam: S.P.beam }, C = S.cond;
    T.quiet();
    S.pl.px = S.walk0; T.step(2);
    s.lcConductorNow("warn");
    T.step(400, function () { return s.strikes > 0 || (C.st === "in" && C.t > 0); });
    o.corner = { strikes: s.strikes, label: s._lastHitLabel };
    T.quiet();
    S.pl.px = S.walk0; s.keys.S.isDown = true; T.step(2);
    s.lcConductorNow("warn");
    T.step(400, function () { return C.st === "in" && C.t > 0; });
    o.duck = { strikes: s.strikes };
    s.keys.S.isDown = false;
    T.quiet();
    return o;
  });
  check(l55.tier === 5 && /flashlight/.test(l55.card) && beam.beam === 1 && beam.corner.strikes === 1 && /CONDUCTOR/.test(beam.corner.label) && beam.duck.strikes === 0,
    "level 55: the conductor's flashlight finds the dark corner, but ducking still hides you: " + JSON.stringify(beam));
  await page.evaluate(function () {
    var s = SolScene, S = s.lc, L = s.choiceLetters();
    T.quiet(); s.iframeMs = 1e9; s.lcHold(false); S.P.steam = 0.7; S.puffCd = 0;
    T.step(30);
    s.lcHold(true);
    s.lcPlace("mark", s.lcJumpX() + 100 * S.k, L[0]); s.lcPlace("mark", s.lcJumpX() + 480 * S.k, L[1]);
    s.lcPlace("sig", S.pl.x + 300 * S.k); s.lcPlace("pole", s.lcJumpX() + 260 * S.k);
    S.pl.px = S.walk0 + 20; s.keys.DOWN.isDown = true; T.step(2);
    s.lcConductorNow("out"); T.step(18);
  });
  await frames(2);
  await shot("03-level55");
  await page.evaluate(function () { SolScene.iframeMs = 0; T.quiet(); });

  /* level 100 */
  var l100 = await gotoLevel(100);
  var late = await page.evaluate(function () {
    var s = SolScene, S = s.lc, L = s.choiceLetters(), o = { tier: s.tier, speed: S.P.speed, rain: S.P.slick > 0 };
    s.spareLives = 9;
    T.step(60);
    o.planned = S.marks.length + S.plans.filter(function (p) { return p.kind === "mark"; }).length;
    T.quiet(); s.spareLives = 9;
    s.lcPlace("mark", s.lcJumpX() - 30 * S.k, T.wrongs()[0]); s.lcPlace("mark", s.lcJumpX() + 560 * S.k, s.need[0]); s.lcPlace("pole", s.lcJumpX() + 300 * S.k);
    T.press("SPACE"); T.step(6);
    return o;
  });
  await frames(2);
  await shot("04-level100");
  /* the canvas changes size in play (resize_lastcar): the scene is laid out again and keeps playing */
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 60000 }).catch(function () {});
  var before = await page.evaluate(function () { var s = SolScene; T.step(120, T.back); return { W: s.W, H: s.H, k: s.lc.k }; });
  await page.setViewportSize({ width: 1100, height: 560 });
  await page.waitForFunction(function (w) { return SolScene.W !== w; }, before.W, { timeout: 120000 }).catch(function () {});
  await frames(2);
  var rs = await page.evaluate(function () {
    var s = SolScene, S = s.lc, L = s.choiceLetters();
    T.quiet();
    var m = s.lcPlace("mark", s.lcJumpX(), T.wrongs()[0]), p = s.lcPlace("pole", s.W - 20);
    s.iframeMs = 0; T.press("SPACE"); T.step(60, T.landed);
    return { W: s.W, H: s.H, k: +S.k.toFixed(3), onPlat: S.xCar0 > 0 && S.xWall < s.W, poleSy: Math.abs(p.spr.scaleY - S.poleSy) < 1e-6, landed: T.landed(), strikes: s.strikes, fits: S.yGnd < s.H - S.barB };
  });
  await page.setViewportSize({ width: 1366, height: 768 });
  await frames(2);
  check(rs.W !== before.W && rs.k !== before.k && rs.onPlat && rs.poleSy && rs.fits && rs.landed && rs.strikes === 1, "a resized canvas lays the scene out again and it keeps playing: " + JSON.stringify({ before: before, after: rs }));
  check(l100.mode === "lastcar" && late.tier === 9 && /New this time:.*last stop/i.test(l100.card) && late.rain && late.planned > 0, "level 100 plays The Last Car at full speed, in the rain: " + JSON.stringify(late));

  /* losing: the last life ends the level with a Retry */
  var lose = await page.evaluate(async function () {
    var s = SolScene; T.step(120, T.back); T.quiet(); s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    s.answerWrong("Z", "WRONG LETTER");
    for (var w = 0; w < 600 && !(s.ended && !document.getElementById("overlay").classList.contains("hidden")); w++) await new Promise(function (r) { setTimeout(r, 100); });
    return { ended: s.ended, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /The Last Car/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 200));
  await ctx.close();

  /* ── the 500-pixel-tall Canvas frame ── */
  var ctx2 = await browser.newContext({ viewport: { width: 900, height: 500 } });
  await ctx2.addInitScript(function () { window.SOL_STATE = "LIT"; });
  page = await ctx2.newPage(); page.setDefaultTimeout(240000);
  watch(page, "frame500");
  await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(900);
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.click('#mode-packs .card[data-genre="NOIR"]');
  await page.click('#skill-packs .card[data-gamemode="lastcar"]');
  await page.click("#btn-skill-start"); await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
  for (i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  await gotoLevel(30);
  var small = await page.evaluate(function () {
    var s = SolScene, S = s.lc, L = s.choiceLetters();
    T.quiet(); s.spareLives = 9;
    s.lcPlace("mark", s.lcJumpX(), L[0]); s.lcPlace("mark", s.lcJumpX() + 420 * S.k, L[1]);
    return { W: s.W, H: s.H, k: +S.k.toFixed(3), roof: Math.round(S.yRoof), gnd: Math.round(S.yGnd), bar: S.barB, platX: Math.round(S.xCar0), ring: Math.round(s.lcLandX()), fits: S.yRoof > 20 && S.yGnd + 10 < s.H - S.barB && s.lcLandX() > 0 && S.xWall < s.W * 0.7 };
  });
  await frames(2);
  await page.screenshot({ path: path.join(shots, "lastcar-05-frame500.png"), timeout: 240000 });
  check(small.fits, "in a 500-pixel-tall frame the car, the platform, the ring and the cinders all fit: " + JSON.stringify(small));
  await ctx2.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
