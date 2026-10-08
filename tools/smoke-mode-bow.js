/* Headless test of the Odyssey mode "bow" (Bend the Bow, js/mode-bow.js): node tools/smoke-mode-bow.js
   Serves the repository, opens the dev page as the Odyssey build (window.SOL_STATE = "ODY" before any
   script), picks Bend the Bow on the game mode screen and drives the mode through the scene's own
   methods: the right row scores, a wrong row costs a life and is crossed out, a thrown footstool or cup
   costs a life (and stepping back dodges it), an empty quiver costs a life, Select TWO needs both rows,
   the keys, the mouse and the DRAW button work, and the difficulty climbs every level 2-100.
   Then, when the builds exist (node tools/build-games.js), dist/ody plays the mode and dist/va does not
   offer it. Screenshots go to tools/shots/. Prints ALL OK or the number FAILED. */
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
    page.on("response", function (r) { if (r.status() === 404) console.log(tag + " 404 " + r.url()); });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  /* ── the dev page, as the Odyssey build ── */
  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "ODY"; });
  var page = await ctx.newPage();
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png") }); }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);
  check(await page.isVisible('#title-screen .card[data-family="ODY"]'), "the dev page acts as the Odyssey build (the Odyssey card is on the title screen)");
  await page.click('#title-screen .card[data-family="ODY"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  var card = await page.evaluate(function () {
    var c = document.querySelector('#mode-packs .card[data-gamemode="bow"]');
    return c ? { name: c.querySelector(".name").textContent, kind: c.querySelector(".kind").textContent, visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && card.name === "Bend the Bow", "the Bend the Bow card shows on the game mode screen: " + JSON.stringify(card));
  await shot("bow-01-mode-screen");
  await page.click('#mode-packs .card[data-gamemode="bow"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  var picked = await page.evaluate(function () {
    var o = { only: SolModes.only, def: !!SolModes.MODES.bow, l1: SolModes.modeFor(1).id, l10: SolModes.modeFor(10).id, l55: SolModes.modeFor(55).id };
    /* the Mixed rotation: island 2 level 9, island 5 level 6, island 7 level 8, island 10 level 6 — and never outside the Odyssey build */
    SolModes.only = null;
    o.mixed = [19, 46, 68, 96].map(function (n) { var m = SolModes.modeFor(n); return m ? m.id : "-"; }).join(",");
    delete window.SOL_STATE;
    var other = []; for (var n = 1; n <= 100; n++) { var m = SolModes.modeFor(n); if (m && m.id === "bow") other.push(n); }
    o.other = other.length;
    window.SOL_STATE = "ODY";
    SolModes.only = "bow";
    return o;
  });
  check(picked.only === "bow" && picked.def && picked.l1 === "bow" && picked.l10 === "bow" && picked.l55 === "bow", "picking Bend the Bow plays it on every level: " + JSON.stringify(picked));
  check(picked.mixed === "bow,bow,bow,bow" && picked.other === 0, "the Odyssey's Mixed rotation plays it on levels 19, 46, 68 and 96, and no other build ever does: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 20000 }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  async function gotoLevel(n) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "ODY", strand: "ALL", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.bw && s.claim && s.readOpen; }, n, { timeout: 20000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 8000 }).catch(function () {});
    await page.waitForTimeout(300);
    return info;
  }

  var l19 = await gotoLevel(19);
  check(l19.key === "mode" && l19.mode === "bow" && l19.act === "DRAW", "level 19 runs Bend the Bow in the mode scene with a DRAW button: " + JSON.stringify({ key: l19.key, mode: l19.mode, act: l19.act }));
  check(/Bend the Bow/.test(l19.card) && /archery level/.test(l19.card) && /Controls:/.test(l19.card) && /New this time:.*sway/.test(l19.card) && /twelve axe rings/.test(l19.hint),
    "the reading pop-up explains the mode, its controls and what is new: " + l19.card.slice(0, 120) + "…");

  /* the scripted run: no hazards of its own while a check runs; the game's clock, not the wall clock */
  var run = await page.evaluate(async function () {
    var s = SolScene, B = s.bw, o = {};
    function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
    async function until(f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 30000)) await wait(30); return f(); }
    function quiet() {
      B.P.drain = 0; B.pat = 1; s.bowEndVolley(); B.P.sway = 0; B.P.wind = 0;
      B.arrows.slice().forEach(function (a) { s.bowFree(a); });
      s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
      B.quiver = B.P.quiver; B.drawing = false; B.hold = 0;
      s.keys.A.isDown = false; s.keys.SPACE.isDown = false;
    }
    async function shootRow(i, pw, da) {
      var a = s.bowShoot(s.bowRowAim(i) + (da || 0), pw || 1);
      await until(function () { return a.state !== "fly"; }, 6000);
      await wait(60);
      return a;
    }
    function idx(L) { for (var i = 0; i < B.rows.length; i++) if (B.rows[i].letter === L) return i; return -1; }
    quiet();
    var need = s.need.slice(), letters = s.choiceLetters();
    o.rows = B.rows.length; o.letters = letters.join("");
    o.plaques = B.rows.map(function (r) { return r.label.text; }).join("");
    var wrongs = letters.filter(function (L) { return need.indexOf(L) === -1; });

    /* the keys aim; the mouse aims; Space draws, the meter fills, and letting go shoots */
    var a0 = B.aim; s.keys.UP.isDown = true;
    await until(function () { return B.aim > a0 + 0.04; }, 20000);
    s.keys.UP.isDown = false; o.keyAim = B.aim - a0;
    var a1 = B.aim; s.keys.S.isDown = true;
    await until(function () { return B.aim < a1 - 0.04; }, 20000);
    s.keys.S.isDown = false; o.keyAimDown = a1 - B.aim;
    o.armed = B.armed;
    return o;
  });
  /* the real mouse: move it over the canvas and the bow follows */
  var cbox = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  var aimBefore = await page.evaluate(function () { return SolScene.bw.aim; });
  await page.mouse.move(cbox.x + cbox.w * 0.8, cbox.y + cbox.h * 0.12, { steps: 4 });
  await page.waitForTimeout(400);
  var mouse = await page.evaluate(function () { var s = SolScene, B = s.bw, p = s.ptr; return { aim: B.aim, want: Math.max(B.aimMin, Math.min(B.aimMax, Math.atan(s.bowSolveU(p.y, Math.max(p.x, B.sx + 70 * B.k))))) }; });
  run.mouse = { moved: Math.abs(mouse.aim - aimBefore) > 0.05, follows: Math.abs(mouse.aim - mouse.want) < 0.01 };
  /* pointing at a plaque lines the bow up with that row (the arrow's arc runs through the pointer) */
  var pl = await page.evaluate(function () { var s = SolScene, B = s.bw, r = B.rows[1], cr = s.game.canvas.getBoundingClientRect(); B.P.sway = 0; return { x: cr.left + r.plaque.x * cr.width / s.W, y: cr.top + r.plaque.y * cr.height / s.H }; });
  await page.mouse.move(pl.x - 30, pl.y - 30); await page.waitForTimeout(150);
  await page.mouse.move(pl.x, pl.y, { steps: 3 }); await page.waitForTimeout(400);
  run.mouse.plaque = await page.evaluate(function () { var s = SolScene, B = s.bw; return { lined: s.bowLinedUp(B.aim, B.rows[1]), glow: B.glowRow }; });
  await page.mouse.move(cbox.x + cbox.w * 0.3, cbox.y + cbox.h * 0.2);
  await page.waitForTimeout(200);
  /* a real Space press: aim between two rows (a wasted arrow), hold until the meter is in the gold band, let go */
  await page.evaluate(function () { var s = SolScene, B = s.bw; s.ptr.x = B.lpx; s.ptr.y = B.lpy; B.aim = (s.bowRowAim(1) + s.bowRowAim(2)) / 2; B.P.drain = 0; B.pat = 1; window.__q0 = B.quiver; window.__s0 = B.shots; window.__p0 = B.pat; });
  await page.keyboard.down("Space");
  await page.waitForFunction(function () { var B = SolScene.bw; return B.drawing && B.hold >= B.P.drawMs + 60; }, null, { timeout: 30000 }).catch(function () {});
  var drawn = await page.evaluate(function () { var B = SolScene.bw; return { drawing: B.drawing, hold: B.hold, guide: B.fxG.commandBuffer.length > 0 }; });
  await shot("bow-02-drawing-19");
  await page.keyboard.up("Space");
  await page.waitForFunction(function () { var B = SolScene.bw; return B.shots > window.__s0 && !B.arrows.some(function (a) { return a.state === "fly"; }); }, null, { timeout: 30000 }).catch(function () {});
  run.space = await page.evaluate(function () { var s = SolScene, B = s.bw; return { shots: B.shots - window.__s0, quiver: window.__q0 - B.quiver, wasted: B.wastedQ, strikes: s.strikes, score: s.score, patience: window.__p0 - B.pat }; });
  run.space.drawn = drawn;
  /* the on-screen DRAW button: hold it, then let go */
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  await page.evaluate(function () { window.__s1 = SolScene.bw.shots; SolScene.bw.cd = 0; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  await page.waitForFunction(function () { var B = SolScene.bw; return B.drawing && B.hold >= B.P.drawMs + 60; }, null, { timeout: 30000 }).catch(function () {});
  await page.mouse.up();
  await page.waitForFunction(function () { return SolScene.bw.shots > window.__s1; }, null, { timeout: 5000 }).catch(function () {});
  run.button = await page.evaluate(function () { return SolScene.bw.shots - window.__s1; });
  await page.waitForTimeout(1200);

  var run2 = await page.evaluate(async function () {
    var s = SolScene, B = s.bw, o = {};
    function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
    async function until(f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 30000)) await wait(30); return f(); }
    function quiet() {
      B.P.drain = 0; B.pat = 1; s.bowEndVolley(); B.P.sway = 0; B.P.wind = 0; B.windA = 0;
      B.arrows.slice().forEach(function (a) { s.bowFree(a); });
      s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
      B.quiver = B.P.quiver; B.drawing = false; B.hold = 0;
      s.keys.A.isDown = false; s.keys.SPACE.isDown = false;
    }
    async function shootRow(i, pw, da) {
      var a = s.bowShoot(s.bowRowAim(i) + (da || 0), pw || 1);
      await until(function () { return a.state !== "fly"; }, 6000);
      await wait(60);
      return a;
    }
    function idx(L) { for (var i = 0; i < B.rows.length; i++) if (B.rows[i].letter === L) return i; return -1; }
    quiet();
    var need = s.need.slice(), letters = s.choiceLetters(), wrongs = letters.filter(function (L) { return need.indexOf(L) === -1; });
    /* the aim lines up with a row: its axes light up (level 19 has the glow) */
    B.aim = s.bowRowAim(idx(wrongs[0])); await wait(150);
    o.glow = B.glowRow === idx(wrongs[0]);
    /* a half-drawn arrow at the right angle drops into the axes: wasted, nothing picked */
    var w0 = B.wastedQ, st0 = s.strikes, sc0 = s.score;
    var weak = await shootRow(idx(wrongs[0]), 0.6);
    o.weak = { wasted: B.wastedQ - w0, strikes: s.strikes - st0, score: s.score - sc0, rings: weak.rk };
    /* v5.17.2: let go in the red, even at the calmest moment of the tremble, and the arrow flies wide of the row */
    quiet(); w0 = B.wastedQ; st0 = s.strikes; sc0 = s.score;
    B.aim = s.bowRowAim(idx(wrongs[0])); B.shakeAmp = B.P.shakeDeg * Math.PI / 180 * 0.7; B.shakeA = 0;
    var errRed = s.bowShakeErr(B.P.drawMs + B.P.sweetMs + 20), errGold = s.bowShakeErr(B.P.drawMs + 20);
    var red = await shootRow(idx(wrongs[0]), 1, errRed);
    B.shakeAmp = 0; B.shakeA = 0;
    o.red = { err: +(errRed * 180 / Math.PI).toFixed(2), gold: errGold, wasted: B.wastedQ - w0, strikes: s.strikes - st0, score: s.score - sc0, rings: red.rk };
    /* a fully drawn arrow just off the row hits an axe: a wasted arrow, no life, the suitors grow angrier */
    quiet(); var p0 = B.pat; w0 = B.wastedQ;
    var off = await shootRow(idx(wrongs[0]), 1, 3 * Math.PI / 180);
    o.off = { wasted: B.wastedQ - w0, strikes: s.strikes, patience: +(p0 - B.pat).toFixed(3) };
    /* a wrong row: a life, the row is crossed out */
    quiet(); sc0 = s.score;
    var wr = await shootRow(idx(wrongs[0]));
    var wrow = B.rows[idx(wrongs[0])];
    o.wrong = { strikes: s.strikes, score: s.score - sc0, rings: wr.rk, state: wrow.state, plaque: wrow.label.text, label: s._lastHitLabel, stuck: wr.state === "stuck" && wr.keep };
    /* shooting the crossed-out row again costs nothing more */
    s.iframeMs = 0;
    await shootRow(idx(wrongs[0]));
    o.again = s.strikes;
    /* the suitors throw: under the arc it costs a life */
    quiet();
    var v = s.bowVolley(); v.list.forEach(function (th) { th.target = "mark"; });
    var h0 = B.hits;
    await until(function () { return v.list.some(function (th) { return th.phase === "warn"; }); });
    await wait(100);
    o.volleyTag = B.txPat.text;
    o.warn = { up: B.suitors[v.list[0].si].up, name: B.suitors[v.list[0].si].tag.text, strikes: s.strikes };
    await until(function () { return !B.volley; });
    o.hit = { strikes: s.strikes, hits: B.hits - h0, label: s._lastHitLabel, refill: +B.pat.toFixed(3), want: +B.P.refill.toFixed(3) };
    /* ...and stepping back into the doorway (◀ or A held) dodges it */
    quiet();
    v = s.bowVolley(); v.list.forEach(function (th) { th.target = "mark"; });
    s.keys.A.isDown = true;
    await until(function () { return v.list.every(function (th) { return th.phase === "fall" || th.phase === "gone"; }); });
    o.dodge = { strikes: s.strikes, back: Math.abs(B.ox - B.bx) < 1, landed: v.list.every(function (th) { return th.phase === "fall" || th.phase === "gone"; }) };
    /* in the doorway the bow can't be drawn */
    s.keys.SPACE.isDown = true; await wait(250); o.dodge.drew = B.drawing; s.keys.SPACE.isDown = false;
    s.keys.A.isDown = false;
    await until(function () { return Math.abs(B.ox - B.mx) < 0.5 && !B.volley; });
    /* the last arrow wasted: a life, and a fresh quiver */
    quiet(); B.quiver = 1;
    await shootRow(0, 1, -6 * Math.PI / 180);
    o.quiver = { strikes: s.strikes, label: s._lastHitLabel, quiver: B.quiver, full: B.P.quiver };
    /* the right row answers the question and pays coins */
    quiet(); sc0 = s.score; var coins = s.nightCoins;
    var right = await shootRow(idx(need[0]));
    if (need.length > 1) { s.iframeMs = 0; await shootRow(idx(need[1])); }
    o.right = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins, rings: right.rk, between: s._between };
    return o;
  });
  /* the next question: its reading pop-up, then Select TWO */
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 8000 }).catch(function () {});
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 5000 }).catch(function () {});
  var two = await page.evaluate(async function () {
    var s = SolScene, B = s.bw, o = {};
    function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
    async function until(f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 30000)) await wait(30); return f(); }
    B.P.drain = 0; B.pat = 1; B.P.sway = 0; B.P.wind = 0; B.windA = 0; s.strikes = 0; s.iframeMs = 0; s.spareLives = 0;
    o.fresh = { quiver: B.quiver === B.P.quiver, live: B.rows.every(function (r) { return r.state === "live"; }), arrows: B.arrows.length };
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    function idx(L) { for (var i = 0; i < B.rows.length; i++) if (B.rows[i].letter === L) return i; return -1; }
    var a = s.bowShoot(s.bowRowAim(idx(pair[0])), 1);
    await until(function () { return a.state !== "fly"; });
    await wait(60);
    var r0 = B.rows[idx(pair[0])];
    o.first = { score: s.score - sc0, state: r0.state, plaque: r0.label.text, found: s.extracted.join(""), strikes: s.strikes };
    var b = s.bowShoot(s.bowRowAim(idx(pair[1])), 1);
    await until(function () { return b.state !== "fly"; });
    await wait(60);
    o.second = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins };
    return o;
  });
  await page.waitForTimeout(1300);
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForTimeout(400);
  /* the early picture: an arrow on its way, with the meter and the dotted line */
  await page.evaluate(async function () {
    var s = SolScene, B = s.bw, t0 = Date.now(); s.iframeMs = 1e9; s.spareLives = 9;
    s.keys.SPACE.isDown = false; await new Promise(function (r) { setTimeout(r, 300); });
    B.aim = s.bowRowAim(0) - 0.004; s.keys.SPACE.isDown = true;
    while (!B.drawing && Date.now() - t0 < 3000) await new Promise(function (r) { setTimeout(r, 30); });
    B.hold = B.P.drawMs + 60;
    await new Promise(function (r) { setTimeout(r, 300); });
    s.bowShoot(s.bowRowAim(0), 1);
    await new Promise(function (r) { setTimeout(r, 90); });
  });
  await shot("bow-03-early-19");
  await page.evaluate(function () { SolScene.keys.SPACE.isDown = false; });
  console.log("run", JSON.stringify(run));
  console.log("run2", JSON.stringify(run2));
  console.log("two", JSON.stringify(two));
  check(run.rows === run.letters.length && run.rows >= 3 && run.plaques === run.letters, "one row of twelve axes per answer letter, its letter on the plaque: " + run.plaques);
  check(run.keyAim > 0.04 && run.keyAimDown > 0.04, "▲ and S aim the bow up and down: " + JSON.stringify({ up: run.keyAim, down: run.keyAimDown }));
  check(run.mouse.moved && run.mouse.follows && run.mouse.plaque.lined && run.mouse.plaque.glow === 1, "the bow follows the mouse, and pointing at a row's plaque lines the shot up with that row: " + JSON.stringify(run.mouse));
  check(run.space.drawn.drawing && run.space.drawn.guide && run.space.shots === 1 && run.space.quiver === 1 && run.space.wasted >= 1 && run.space.strikes === 0 && run.space.patience > 0.05,
    "holding Space draws the bow, letting go shoots; an arrow between the rows is wasted (no life, but the quiver and the suitors' patience drop): " + JSON.stringify(run.space));
  check(run.button === 1, "holding the on-screen DRAW button draws, letting go shoots: " + run.button);
  check(run2.glow, "the row the aim lines up with lights up (level 19)");
  check(run2.weak.wasted === 1 && run2.weak.strikes === 0 && run2.weak.score === 0 && run2.weak.rings < 12, "a half-drawn arrow drops into the axes: wasted, nothing picked: " + JSON.stringify(run2.weak));
  check(run2.red.gold === 0 && run2.red.err > 0.5 && run2.red.wasted === 1 && run2.red.strikes === 0 && run2.red.score === 0 && run2.red.rings < 12, "let go in the red, even at the calmest moment of the shaking, and the arrow flies wide and strikes an axe (in the gold it flies true): " + JSON.stringify(run2.red));
  check(run2.off.wasted === 1 && run2.off.strikes === 0 && run2.off.patience > 0.1, "an arrow that hits an axe is wasted: no life, the suitors lose patience: " + JSON.stringify(run2.off));
  check(run2.wrong.strikes === 1 && run2.wrong.score === 0 && run2.wrong.rings === 12 && run2.wrong.state === "dead" && run2.wrong.plaque === "✕" && /WRONG LETTER/.test(run2.wrong.label || "") && run2.wrong.stuck && run2.again === 1,
    "through all twelve rings of a wrong row: a life, the row is crossed out, and shooting it again costs nothing: " + JSON.stringify(run2.wrong) + " again: " + run2.again);
  check(run2.warn.up && /!$/.test(run2.warn.name) && run2.warn.strikes === 0 && run2.hit.strikes === 1 && run2.hit.hits === 1 && /FOOTSTOOL|CUP/.test(run2.hit.label || "") && run2.hit.refill === run2.hit.want && /THROWING/.test(run2.volleyTag),
    "when patience runs out a suitor stands (named) and throws along an arc; under it costs a life, and their patience refills: " + JSON.stringify({ warn: run2.warn, hit: run2.hit }));
  check(run2.dodge.strikes === 0 && run2.dodge.back && run2.dodge.landed && !run2.dodge.drew, "holding ◀ / A steps back into the doorway and dodges the throw (no drawing from there): " + JSON.stringify(run2.dodge));
  check(run2.quiver.strikes === 1 && /QUIVER/.test(run2.quiver.label || "") && run2.quiver.quiver === run2.quiver.full, "wasting the last arrow costs a life and brings a fresh quiver: " + JSON.stringify(run2.quiver));
  check(run2.right.score === 1 && run2.right.strikes === 0 && run2.right.coins && run2.right.rings === 12, "through all twelve rings of the right row answers the question and pays coins: " + JSON.stringify(run2.right));
  check(two.fresh.quiver && two.fresh.live && two.fresh.arrows === 0, "a new question brings fresh rows and a full quiver: " + JSON.stringify(two.fresh));
  check(two.first.score === 0 && two.first.state === "found" && two.first.plaque === "✓" && two.first.found.length === 1 && two.first.strikes === 0 && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right rows: the first is marked found, the second answers it: " + JSON.stringify(two));

  /* the difficulty: every level 2-100 harder than the one before, never easier on any setting */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.bow.params, s = SolScene, out = { same: f === SolModes.MODES.bow.params && typeof s.bowParams === "function" && JSON.stringify(s.bowParams(50)) === JSON.stringify(f(50)) };
    var up = ["sway", "swaySpd", "shakeDeg", "wind", "drain", "missCost", "throwers", "doorP"], down = ["gap", "drawMs", "sweetMs", "shakeMs", "guide", "glow", "refill", "warnMs", "flightMs", "quiver"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat;
    out.l2 = f(2); out.l19 = f(19); out.l50 = f(50); out.l99 = f(99);
    return out;
  });
  console.log("ramp", JSON.stringify({ l2: ramp.l2, l50: ramp.l50, l99: ramp.l99 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0, "bowParams (on the def as params): every level 2-100 is harder than the one before and never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat }));
  var e = ramp.l19, z = ramp.l99;
  check(e.gap >= 32 && e.sway <= 12 && e.wind === 0 && e.throwers === 1 && e.warnMs >= 1200 && e.flightMs >= 900 && e.drawMs <= 650 && e.sweetMs >= 300 && e.sweetMs <= 360 && e.quiver === 10 && e.glow === 1 && e.drain <= 0.05,
    "level 19, the first time it comes round, is fair: wide rings, a gentle sway, no draft, one thrower with a long warning, a quick meter with a short gold band, ten arrows: " + JSON.stringify(e));
  check(z.gap <= 23 && z.sway >= 38 && z.wind >= 30 && z.throwers === 3 && z.doorP > 0.4 && z.warnMs <= 500 && z.drawMs <= 430 && z.sweetMs <= 140 && z.quiver === 5 && z.glow === 0 && z.drain >= 0.11,
    "level 99 is intense: narrow rings, big fast sway, strong drafts, three throwers (some at the doorway), a short gold band, five arrows: " + JSON.stringify(z));

  /* level 68 (island 7) and 96 (island 10): the card says what's new; the late picture */
  var l68 = await gotoLevel(68);
  var p68 = await page.evaluate(function () { var P = SolScene.bw.P; return { throwers: P.throwers, doorP: P.doorP, wind: P.wind }; });
  check(l68.mode === "bow" && l68.tier === 6 && /New this time:.*Two suitors/.test(l68.card) && p68.throwers === 2 && p68.doorP > 0 && p68.wind > 0, "level 68: two throwers, throws at the doorway, the draft, and the card says what's new: " + JSON.stringify(p68));
  var l96 = await gotoLevel(96);
  var late = await page.evaluate(async function () {
    var s = SolScene, B = s.bw; s.iframeMs = 1e9; s.spareLives = 9;
    var o = { tier: s.tier, wind: B.P.wind, glow: B.P.glow };
    await new Promise(function (r) { setTimeout(r, 1500); });
    o.windNow = B.windA !== 0; o.draft = B.txDraft.visible;
    B.pat = 0.0001;
    await new Promise(function (r) { var t0 = Date.now(); (function w() { if ((B.volley && B.volley.list.some(function (th) { return th.phase === "warn" && th.t > 200; })) || Date.now() - t0 > 4000) r(); else setTimeout(w, 30); })(); });
    o.volley = B.volley ? B.volley.list.length : 0;
    B.aim = s.bowRowAim(1); s.bowShoot(B.aim, 1);
    await new Promise(function (r) { setTimeout(r, 90); });
    return o;
  });
  await shot("bow-04-late-96");
  check(l96.mode === "bow" && late.tier === 9 && /New this time:.*three suitors/.test(l96.card) && late.windNow && late.draft && late.glow === 0 && late.volley === 3, "level 96: the draft blows (with its sign), no glow, three suitors throw at once: " + JSON.stringify(late));
  await page.evaluate(function () { SolScene.iframeMs = 0; });

  /* losing: the last life ends the level with a Retry */
  var lose = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    s.bowEndVolley(); s.bw.P.drain = 0;
    s.answerWrong("Z", "WRONG LETTER");
    for (var w = 0; w < 40 && !(s.ended && !document.getElementById("overlay").classList.contains("hidden")); w++) await new Promise(function (r) { setTimeout(r, 100); });   /* the end sequence takes a moment; longer under load */
    await new Promise(function (r) { setTimeout(r, 300); });
    return { ended: s.ended, title: document.getElementById("win-title").textContent, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Bend the Bow/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 200));
  await ctx.close();

  /* ── the standalone builds ── */
  var distRoot = path.join(repo, "dist");
  if (fs.existsSync(path.join(distRoot, "ody", "index.html"))) {
    root = path.join(distRoot, "ody");
    var dpage = await browser.newPage({ viewport: { width: 1366, height: 768 } });
    watch(dpage, "dist/ody");
    await dpage.goto(base + "index.html", { waitUntil: "load" }); await dpage.waitForTimeout(900);
    var dst = await dpage.evaluate(function () { return { state: window.SOL_STATE, bow: !!(window.SolModes && SolModes.MODES.bow) }; });
    await dpage.click('#title-screen .card[data-family="ODY"]'); await dpage.waitForTimeout(300);
    var dcards = await dpage.evaluate(function () { return Array.prototype.map.call(document.querySelectorAll("#mode-packs .card"), function (c) { return c.getAttribute("data-gamemode"); }); });
    await dpage.click('#mode-packs .card[data-gamemode="bow"]'); await dpage.waitForTimeout(300);
    await dpage.click("#btn-skill-start"); await dpage.waitForTimeout(300);
    if (await dpage.isVisible("#btn-char-confirm")) await dpage.click("#btn-char-confirm");
    await dpage.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 20000 }).catch(function () {});
    for (var j = 0; j < 12; j++) { if (await dpage.isVisible("#tut-skip")) { await dpage.click("#tut-skip"); break; } await dpage.waitForTimeout(250); }
    await dpage.evaluate(function () { SolScene.scene.restart({ family: "ODY", strand: "ALL", night: 19 }); });
    await dpage.waitForFunction(function () { var s = window.SolScene; return s && s.night === 19 && s.bw && s.claim && s.readOpen; }, null, { timeout: 20000 }).catch(function () {});
    if (await dpage.isVisible("#read-go")) await dpage.click("#read-go");
    await dpage.waitForTimeout(500);
    var dplay = await dpage.evaluate(async function () {
      var s = SolScene, B = s.bw; if (!B) return null;
      s.spareLives = 0; s.strikes = 0; s.iframeMs = 0; B.P.drain = 0; B.P.sway = 0;
      var i = -1; B.rows.forEach(function (r, k) { if (r.letter === s.need[0]) i = k; });
      var sc = s.score, a = s.bowShoot(s.bowRowAim(i), 1), t0 = Date.now();
      while (a.state === "fly" && Date.now() - t0 < 6000) await new Promise(function (r) { setTimeout(r, 30); });
      return { mode: s.mode.id, realm: s.realm && s.realm.name, score: s.score - sc, card: (document.getElementById("mode-card") || {}).textContent.slice(0, 60) };
    });
    await dpage.screenshot({ path: path.join(shots, "bow-05-dist-ody.png") });
    check(dst.state === "ODY" && dst.bow && dcards.indexOf("bow") !== -1 && dplay && dplay.mode === "bow" && dplay.score === 1, "dist/ody: Bend the Bow is offered, runs, and the right row scores: " + JSON.stringify({ dst: dst, play: dplay }));
    await dpage.close();
  } else console.log("skip  dist/ody (run node tools/build-games.js)");
  if (fs.existsSync(path.join(distRoot, "va", "index.html"))) {
    root = path.join(distRoot, "va");
    var vpage = await browser.newPage({ viewport: { width: 1366, height: 768 } });
    watch(vpage, "dist/va");
    await vpage.goto(base + "index.html", { waitUntil: "load" }); await vpage.waitForTimeout(900);
    await vpage.evaluate(function () { localStorage.setItem("afterHours.v1.gameMode", "bow"); });
    await vpage.reload({ waitUntil: "load" }); await vpage.waitForTimeout(900);
    await vpage.click('#title-screen .card[data-family="G9"]'); await vpage.waitForTimeout(300);
    var vcards = await vpage.evaluate(function () {
      var rot = []; for (var n = 1; n <= 100; n++) { var m = SolModes.modeFor(n); if (m && m.id === "bow") rot.push(n); }
      return { cards: Array.prototype.map.call(document.querySelectorAll("#mode-packs .card"), function (c) { return c.getAttribute("data-gamemode"); }), only: SolModes.only, rot: rot.length, state: window.SOL_STATE };
    });
    check(vcards.cards.length > 0 && vcards.cards.indexOf("bow") === -1 && vcards.only === null && vcards.rot === 0, "dist/va: the mode screen does not offer Bend the Bow, a saved pick of it falls back to All modes, and no level plays it: " + JSON.stringify(vcards));
    await vpage.close();
  } else console.log("skip  dist/va (run node tools/build-games.js)");
  root = repo;

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
