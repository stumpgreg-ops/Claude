/* Headless test of the Lit and Film mode "trench" (Trench Run, A New Hope; js/mode-trench.js): node tools/smoke-mode-trench.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Science Fiction, then A New Hope (its game is Trench Run), and drives the mode through the scene's own
   methods: the right port scores, a wrong port costs a life and is crossed out, a miss costs nothing, every hazard
   (a turret bolt, a catwalk, a pylon, a gate, the fighter on your tail) costs a life and can be dodged, a shut blast
   shutter turns a torpedo away, Select TWO needs both ports, the keys, the mouse and the FIRE button work, the
   reading pop-up names the game and its controls, and the difficulty climbs every level 2-100. It plays levels 1,
   10, 61 and 100, and level 1 again in the 500-pixel-tall Canvas frame. The game is stepped with the scene's own
   tick (tick_trench) where timing matters, so the checks do not depend on how fast headless Chromium draws.
   Screenshots go to tools/shots/trench-*.png. Prints ALL OK or the number FAILED. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var repo = path.join(__dirname, ".."), shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", mp3: "audio/mpeg", webp: "image/webp", svg: "image/svg+xml", glb: "model/gltf-binary" };
var srv = http.createServer(function (req, res) {
  var f = path.join(repo, decodeURIComponent(url.parse(req.url).pathname));
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
      /* other movies' content files may still be being written: their 404s are not this mode's */
      if (r.status() === 404 && !/content1(1[4-9]|20)\.js|favicon/.test(r.url())) errors.push(tag + " 404 " + r.url());
    });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message + " " + String(e.stack || "").split("\n").slice(1, 2).join("")); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|404/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  /* the page's own helpers: step the mode with its tick (1/30 s a step), a quiet trench for one check at a time */
  function helpers() {
    window.__T = {
      step: function (n, inp) {
        var s = SolScene, I = { ax: (inp && inp.ax) || 0, ay: (inp && inp.ay) || 0, fire: false, ptr: null }, i;
        for (i = 0; i < n; i++) { if (s._finishing || s.ended || s.readOpen) break; s.tick_trench(1 / 30, I, 1000 / 30); }
        return i;
      },
      quiet: function () {
        var s = SolScene, B = s.tr;
        B.quiet = true; B.nextPort = 1e9; B.charge = null; B.bolts = []; B.tails = []; B.torps = []; B.obs = []; B.grace = 0;
        B.ports.slice().forEach(function (p) { s.trenchKillPort(p); });
        s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0; s._guardUsed = true;
        B.ship.x = 0; B.ship.y = 0; B.ship.vx = 0; B.ship.vy = 0; B.aim = null; B.cd = 0;
        ["LEFT", "RIGHT", "UP", "DOWN", "W", "A", "S", "D", "SPACE"].forEach(function (k) { s.keys[k].isDown = false; });
      },
      /* fire at a port standing in the sight in the ship's lane; step until the torpedo lands */
      shoot: function (p, asItIs) {
        var s = SolScene, B = s.tr, w = 0;
        /* (from level 41 the ports have blast shutters: wait until this one will be open when the torpedo lands) */
        while (!asItIs && s.trenchOpen(p, B.t + 0.5) < 1 && w++ < 400) __T.step(1);
        p.s = B.dist + s.trenchSightZ(); B.ship.x = p.x; s.trenchCam();
        var t = s.trenchFire(), n = 0;
        while (B.torps.indexOf(t) !== -1 && n++ < 200) __T.step(1);
        return t;
      },
      /* answer the question: a torpedo into each right port (a Select TWO question needs both) */
      answer: function (x) {
        var s = SolScene, ports = [];
        s.need.slice().forEach(function (L, i) {
          if (s.extracted.indexOf(L) !== -1) return;
          s.iframeMs = 0;
          var p = s.trenchSpawnPort(L, (x || 0) + i * 0.3 - 0.15, 20); __T.shoot(p); ports.push(p);
        });
        return ports;
      }
    };
  }

  /* ── the dev page, as the Lit and Film build ── */
  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, "trench-" + name + ".png"), timeout: 180000 }); }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build (its card is on the title screen)");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector('#mode-packs .card[data-genre="SCIFI"]');
  await page.click('#mode-packs .card[data-genre="SCIFI"]');
  await page.waitForSelector('#skill-packs .card[data-gamemode="trench"]');
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="trench"]');
    return c ? { text: c.textContent, strand: c.getAttribute("data-strand"), visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && /A New Hope/.test(card.text) && card.strand === "NEWHOPE", "the A New Hope card shows on the Science Fiction movie screen: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="trench"]');
  var picked = await page.evaluate(function () {
    return { only: SolModes.only, def: !!SolModes.MODES.trench, l1: (SolModes.modeFor(1) || {}).id, l10: (SolModes.modeFor(10) || {}).id, l100: (SolModes.modeFor(100) || {}).id,
      game: SolLit.movieByMode("trench").game };
  });
  check(picked.def && picked.l1 === "trench" && picked.l10 === "trench" && picked.l100 === "trench" && picked.game === "Trench Run", "A New Hope plays Trench Run on every level: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 30000 }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  await page.evaluate(helpers);

  async function gotoLevel(n, keepOpen) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "NEWHOPE", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.tr && s.claim && s.readOpen; }, n, { timeout: 30000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "",
        need: s.need.slice(), letters: s.choiceLetters(), ports: s.tr.ports.length, strand: s.strand };
    });
    if (keepOpen) return info;
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 10000 }).catch(function () {});
    await page.waitForTimeout(200);
    return info;
  }
  /* the next question's reading pop-up (the scene's own clock brings it, slowly in headless Chromium) */
  async function closeReading() {
    await page.waitForFunction(function () { var g = document.getElementById("read-go"); return SolScene.readOpen && !SolScene._between && g && g.offsetParent; }, null, { timeout: 90000 }).catch(function () {});
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 8000 }).catch(function () {});
  }

  /* ── level 1 ── */
  var l1 = await gotoLevel(1, true);
  await shot("01-reading-1");
  check(l1.key === "mode" && l1.mode === "trench" && l1.act === "FIRE" && l1.strand === "NEWHOPE", "level 1 runs Trench Run in the mode scene with a FIRE button, on A New Hope's questions: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act, strand: l1.strand }));
  check(/Trench Run/.test(l1.card) && /trench flight level/.test(l1.card) && /Controls:/.test(l1.card) && /Arrow keys/.test(l1.card) && /FIRE/.test(l1.card) && /exhaust port/.test(l1.hint),
    "the reading pop-up names the game and explains it and its controls: " + l1.card.slice(0, 140) + "…");
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 10000 }).catch(function () {});
  await page.evaluate(helpers);

  /* the early picture: a port coming into the sight, a catwalk ahead, a bolt in the air, a torpedo away */
  await page.evaluate(function () {
    var s = SolScene, B = s.tr; __T.quiet(); s.iframeMs = 1e9; s.spareLives = 9;
    var L = s.choiceLetters();
    s.trenchSpawnPort(L[0], -0.25, 16); s.trenchSpawnPort(L[1], 0.35, 30); s.trenchSpawnObs("cat", { y: 0.62 }, 13.5);
    B.ship.x = -0.25; B.ship.y = -0.1;
    __T.step(18);
    s.trenchSpawnBolt(1.06, 1.41, 15, 0.12, 0.05);
    __T.step(6); s.trenchFire(); __T.step(3); s.iframeMs = 0;
  });
  await page.waitForTimeout(700);
  await shot("02-play-1");

  var run = await page.evaluate(function () {
    var s = SolScene, B = s.tr, o = {}, need = s.need.slice(), letters = s.choiceLetters();
    var wrongs = letters.filter(function (L) { return need.indexOf(L) === -1; });
    o.letters = letters.join(""); o.need = need.join("");
    /* the ports come one after another in the rotation, each with its letter on the hologram */
    __T.quiet(); B.nextPort = B.dist + 30; B.queue = []; B.marks = {};
    var seen = [];
    for (var i = 0; i < 1200 && seen.length < letters.length; i++) {
      __T.step(1);
      B.ports.forEach(function (p) { if (seen.indexOf(p.letter) === -1) seen.push(p.letter); });
    }
    o.rotation = seen.slice().sort().join("") === letters.slice().sort().join("");
    o.badge = B.ports.length ? B.ports[0].txt.text : "";
    /* a miss: no port in the sight — nothing picked, no life */
    __T.quiet();
    var p0 = s.trenchSpawnPort(wrongs[0], 0.5, 25), sc0 = s.score;
    B.ship.x = -0.5; var t0 = s.trenchFire(), n = 0;
    while (B.torps.indexOf(t0) !== -1 && n++ < 200) __T.step(1);
    o.miss = { strikes: s.strikes, score: s.score - sc0, misses: B.stats.misses, port: p0.state };
    /* the lane matters: the port in the sight but out of the ship's lane is a miss too */
    __T.quiet(); p0 = s.trenchSpawnPort(wrongs[0], 0.55, s.trenchSightZ()); B.ship.x = -0.4; s.trenchCam();
    var t1 = s.trenchFire(); n = 0; while (B.torps.indexOf(t1) !== -1 && n++ < 200) __T.step(1);
    o.lane = { strikes: s.strikes, target: !!t1.port, port: p0.state };
    /* a wrong port: a life, the port is crossed out, and hitting it again costs nothing more */
    __T.quiet(); sc0 = s.score;
    var pw = s.trenchSpawnPort(wrongs[0], 0.2, 20);
    __T.shoot(pw);
    o.wrong = { strikes: s.strikes, score: s.score - sc0, state: pw.state, badge: pw.txt.text, label: s._lastHitLabel, mark: B.marks[wrongs[0]] };
    s.iframeMs = 0; __T.shoot(pw); o.again = s.strikes;
    /* the crossed-out letter does not come round again */
    B.nextPort = B.dist + 30; B.queue = [];
    var crossed = 0; for (i = 0; i < 900; i++) { __T.step(1); B.ports.forEach(function (p) { if (p !== pw && p.letter === wrongs[0]) crossed++; }); }
    o.wrong.comesBack = crossed;
    return o;
  });
  console.log("run", JSON.stringify(run));
  check(run.rotation && run.badge.length === 1, "the exhaust ports come down the trench in turn, one per answer letter, each letter on its hologram: " + JSON.stringify({ rotation: run.rotation, badge: run.badge }));
  check(run.miss.strikes === 0 && run.miss.score === 0 && run.miss.misses >= 1 && run.miss.port === "live", "a torpedo that misses every port costs nothing: " + JSON.stringify(run.miss));
  check(run.lane.strikes === 0 && !run.lane.target && run.lane.port === "live", "a port in the sight but out of the ship's lane is a miss: " + JSON.stringify(run.lane));
  check(run.wrong.strikes === 1 && run.wrong.score === 0 && run.wrong.state === "dead" && run.wrong.badge === "✕" && /WRONG LETTER/.test(run.wrong.label || "") && run.again === 1 && run.wrong.comesBack === 0,
    "a torpedo into a wrong port costs a life and crosses it out; it costs nothing again and never comes back: " + JSON.stringify(run.wrong) + " again " + run.again);

  /* the hazards at level 1: a turret bolt and a catwalk, each a life, each dodged by steering */
  var haz = await page.evaluate(function () {
    var s = SolScene, B = s.tr, o = {};
    function bolt(tx, ty) { return s.trenchSpawnBolt(1.06, 1.41, 14, tx, ty); }
    function until(f, n) { for (var i = 0; i < (n || 300) && !f(); i++) __T.step(1); return f(); }
    /* a bolt at the ship: a life */
    __T.quiet(); B.ship.x = 0; B.ship.y = 0;
    var b = bolt(0, 0); until(function () { return b.crossed; });
    o.bolt = { strikes: s.strikes, label: s._lastHitLabel, hits: B.stats.boltHits };
    /* the same bolt, and the ship steers away (▶ held): no life */
    __T.quiet(); b = bolt(0, 0);
    for (var i = 0; i < 300 && !b.crossed; i++) __T.step(1, { ax: 1, ay: -1 });
    o.boltDodge = { strikes: s.strikes, x: +B.ship.x.toFixed(2), y: +B.ship.y.toFixed(2), crossed: b.crossed };
    /* a turret glows, then fires on its own */
    __T.quiet(); B.quiet = false; B.nextObs = 1e9; B.turretT = 0; B.P.tails = 0; s.iframeMs = 1e9;
    until(function () { return !!B.charge; }, 200);
    o.charge = !!B.charge;
    var nb = B.stats.bolts; until(function () { return B.stats.bolts > nb; }, 200);
    o.fired = B.stats.bolts - nb;
    /* a catwalk at the ship's height: a life */
    __T.quiet(); B.ship.y = 0.1;
    var c = s.trenchSpawnObs("cat", { y: 0.1 }, 12);
    o.frameShown = false;
    until(function () { if (B.warnTx[0].visible && B.warnTx[0].text === "CATWALK") o.frameShown = true; return c.passed || c.hit; });
    o.cat = { strikes: s.strikes, hit: c.hit, label: s._lastHitLabel };
    /* a catwalk overhead: fly under it */
    __T.quiet(); B.ship.y = -0.6; c = s.trenchSpawnObs("cat", { y: 0.6 }, 12);
    until(function () { return c.passed || c.hit; });
    o.catUnder = { strikes: s.strikes, hit: c.hit, dodged: B.stats.dodged };
    /* the catwalk comes at the ship's height, and the ship climbs over it in time (▲ held) */
    __T.quiet(); B.ship.y = -0.5; c = s.trenchSpawnObs("cat", { y: -0.5 }, 12);
    for (var j = 0; j < 400 && !(c.passed || c.hit); j++) __T.step(1, { ay: -1 });
    o.catOver = { strikes: s.strikes, hit: c.hit, y: +B.ship.y.toFixed(2) };
    return o;
  });
  console.log("haz", JSON.stringify(haz));
  check(haz.bolt.strikes === 1 && /TURRET BOLT/.test(haz.bolt.label || ""), "a turret bolt that reaches the ship costs a life: " + JSON.stringify(haz.bolt));
  check(haz.boltDodge.strikes === 0 && haz.boltDodge.crossed, "steering out of the bolt's red ring dodges it: " + JSON.stringify(haz.boltDodge));
  check(haz.charge && haz.fired >= 1, "the turrets glow, then fire on their own: " + JSON.stringify({ charge: haz.charge, fired: haz.fired }));
  check(haz.cat.strikes === 1 && haz.cat.hit && /CATWALK/.test(haz.cat.label || "") && haz.frameShown, "flying into a catwalk costs a life (its red frame shows first): " + JSON.stringify(haz.cat) + " frame " + haz.frameShown);
  check(haz.catUnder.strikes === 0 && !haz.catUnder.hit && haz.catOver.strikes === 0 && !haz.catOver.hit, "flying under a catwalk, or climbing over it in time, costs nothing: " + JSON.stringify({ under: haz.catUnder, over: haz.catOver }));

  /* the controls: the keys steer and fire, the mouse steers and fires, the FIRE button fires (the real game loop) */
  await page.evaluate(function () { __T.quiet(); });
  async function waitFor(f, arg, ms) { return page.waitForFunction(f, arg, { timeout: ms || 40000 }).then(function () { return true; }).catch(function () { return false; }); }
  await page.keyboard.down("ArrowRight");
  var kr = await waitFor(function () { return SolScene.tr.ship.x > 0.25; });
  await page.keyboard.up("ArrowRight");
  await page.keyboard.down("w");
  var kw = await waitFor(function () { return SolScene.tr.ship.y > 0.25; });
  await page.keyboard.up("w");
  await page.keyboard.down("a");
  var ka = await waitFor(function () { return SolScene.tr.ship.x < 0; });
  await page.keyboard.up("a");
  await page.evaluate(function () { window.__t0 = SolScene.tr.stats.torps; });
  await page.keyboard.down("Space");
  var ks = await waitFor(function () { return SolScene.tr.stats.torps > window.__t0; });
  await page.keyboard.up("Space");
  var keys = { right: kr, up: kw, left: ka, space: ks };
  /* the mouse: point low on the left and the ship flies there; click to fire */
  var cbox = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  await page.evaluate(function () { __T.quiet(); SolScene.tr.ship.x = 0.4; SolScene.tr.ship.y = 0.4; });
  /* the screen point where the ship sits at (-0.5, -0.5) once it is there (the camera follows it) */
  var tgt = await page.evaluate(function () {
    var s = SolScene, B = s.tr, sx = B.ship.x, sy = B.ship.y; B.ship.x = -0.5; B.ship.y = -0.5; s.trenchCam();
    var p = s.trenchShipScreen(), r = s.game.canvas.getBoundingClientRect();
    B.ship.x = sx; B.ship.y = sy; s.trenchCam();
    return { x: r.left + p.x * r.width / s.W, y: r.top + p.y * r.height / s.H };
  });
  await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y + cbox.h * 0.3);
  await page.mouse.move(tgt.x, tgt.y, { steps: 4 });
  var mm = await waitFor(function () { var B = SolScene.tr; return B.aim && B.ship.x < -0.3 && B.ship.y < -0.3; });
  var mouse = await page.evaluate(function () { var B = SolScene.tr; return { aim: B.aim, x: +B.ship.x.toFixed(2), y: +B.ship.y.toFixed(2) }; });
  mouse.flew = mm;
  await page.evaluate(function () { window.__t1 = SolScene.tr.stats.torps; SolScene.tr.cd = 0; });
  await page.mouse.down();
  mouse.click = await waitFor(function () { return SolScene.tr.stats.torps > window.__t1; });
  await page.mouse.up();
  /* the on-screen FIRE button */
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, label: document.getElementById("btn-action").textContent }; });
  await page.waitForTimeout(500);
  await page.evaluate(function () { window.__t2 = SolScene.tr.stats.torps; SolScene.tr.cd = 0; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  var button = await waitFor(function () { return SolScene.tr.stats.torps > window.__t2; });
  await page.mouse.up();
  /* the on-screen pad steers (its ◀ button) */
  var pad = await page.evaluate(function () {
    var b = Array.prototype.filter.call(document.querySelectorAll("#controls .dpad button, .dpad button, .dpad [data-dir]"), function (e) { return /left|◀/i.test((e.getAttribute("data-dir") || "") + e.textContent + (e.getAttribute("aria-label") || "")) && e.offsetParent; })[0];
    if (!b) return null; var r = b.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  });
  var padOk = null;
  if (pad) {
    await page.evaluate(function () { __T.quiet(); SolScene.tr.ship.x = 0.5; });
    await page.mouse.move(pad.x, pad.y); await page.mouse.down();
    padOk = await waitFor(function () { return SolScene.tr.ship.x < 0.2; });
    await page.mouse.up();
  }
  console.log("controls", JSON.stringify({ keys: keys, mouse: mouse, button: button, pad: padOk }));
  check(keys.right && keys.up && keys.left && keys.space, "the arrow keys and WASD steer the ship, Space fires a torpedo: " + JSON.stringify(keys));
  check(mouse.flew && mouse.click, "the ship flies toward the mouse pointer, and a click fires: " + JSON.stringify(mouse));
  check(button && abox.label === "FIRE", "the on-screen FIRE button fires a torpedo: " + JSON.stringify({ fired: button, label: abox.label }));
  check(padOk !== false, "the on-screen pad steers the ship" + (pad ? "" : " (no pad button found on this screen)") + ": " + padOk);

  /* the right port answers the question and pays coins */
  await page.waitForTimeout(300);
  var right = await page.evaluate(function () {
    var s = SolScene, B = s.tr; __T.quiet();
    var sc0 = s.score, coins = s.nightCoins, need = s.need.slice();
    var p = s.trenchSpawnPort(need[0], -0.3, 20);
    __T.shoot(p);
    if (need.length > 1) { s.iframeMs = 0; var p2 = s.trenchSpawnPort(need[1], 0.3, 20); __T.shoot(p2); }
    return { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins, state: p.state, badge: p.txt.text, between: s._between, hits: B.stats.hits };
  });
  console.log("right", JSON.stringify(right));
  check(right.score === 1 && right.strikes === 0 && right.coins && right.state === "found" && right.badge === "✓", "a torpedo into the right port answers the question and pays coins: " + JSON.stringify(right));
  /* the next question: its reading pop-up, fresh ports; then Select TWO */
  await closeReading();
  await page.evaluate(helpers);
  var two = await page.evaluate(function () {
    var s = SolScene, B = s.tr, o = {};
    o.fresh = { ports: B.ports.every(function (p) { return p.state === "live"; }), marks: Object.keys(B.marks).length };
    __T.quiet();
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    var a = s.trenchSpawnPort(pair[0], -0.2, 20);
    __T.shoot(a);
    o.first = { score: s.score - sc0, state: a.state, badge: a.txt.text, found: s.extracted.join(""), strikes: s.strikes };
    /* the found letter leaves the rotation */
    B.nextPort = B.dist + 30; B.queue = [];
    var back = 0; for (var i = 0; i < 600; i++) { __T.step(1); B.ports.forEach(function (p) { if (p !== a && p.letter === pair[0]) back++; }); }
    o.first.comesBack = back;
    __T.quiet(); s.need = pair.slice();
    var b = s.trenchSpawnPort(pair[1], 0.25, 20);
    __T.shoot(b);
    o.second = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins };
    return o;
  });
  console.log("two", JSON.stringify(two));
  check(two.fresh.ports && two.fresh.marks === 0, "a new question brings fresh ports: " + JSON.stringify(two.fresh));
  check(two.first.score === 0 && two.first.state === "found" && two.first.badge === "✓" && two.first.found.length === 1 && two.first.strikes === 0 && two.first.comesBack === 0 && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right ports: the first is marked found and leaves the rotation, the second answers it: " + JSON.stringify(two));

  /* ── the difficulty: every level 2-100 harder than the one before, never easier on any setting ── */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.trench.params, s = SolScene, out = { same: typeof s.trenchParams === "function" && JSON.stringify(s.trenchParams(50)) === JSON.stringify(f(50)) };
    var up = ["speed", "boltSpd", "boltR", "catTh", "doubleCat", "pylons", "pylonW", "volley", "shutter", "tails", "tailTrack", "frames", "lead"];
    var down = ["portGap", "tolX", "tolZ", "lockLight", "turretEvery", "warnMs", "aimErr", "catGap", "gapH", "lockMs", "tailEvery"];
    var easier = [], flat = [], n, keys = Object.keys(f(1)), missing = keys.filter(function (k) { return up.indexOf(k) === -1 && down.indexOf(k) === -1; });
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.missing = missing;
    out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l100: ramp.l100 }));
  check(ramp.same && !ramp.missing.length && ramp.easier.length === 0 && ramp.flat.length === 0, "trenchParams (on the def as params): every level 2-100 is harder than the one before and never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat, unchecked: ramp.missing }));
  var e = ramp.l1, z = ramp.l100;
  check(e.speed < 7 && e.portGap > 29 && e.tolX >= 0.45 && e.tolZ >= 1.95 && e.lockLight === 1 && e.turretEvery >= 3.5 && e.warnMs >= 1100 && e.aimErr >= 0.4 && e.volley === 1 && e.tails === 0 && e.pylons === 0 && e.frames === 0 && e.shutter === 0 && e.doubleCat === 0 && e.lead === 0,
    "level 1 is gentle: a slow trench, ports far apart, a wide sight that turns green, slow loose turret fire, lone catwalks, nothing else: " + JSON.stringify(e));
  check(z.speed >= 12.9 && z.tolZ <= 1.06 && z.tolX <= 0.26 && z.lockLight === 0 && z.volley === 3 && z.tails === 2 && z.shutter >= 0.49 && z.frames >= 0.39 && z.lead >= 0.99 && z.aimErr <= 0.001 && z.turretEvery <= 1.11,
    "level 100 is intense: twice the speed, a narrow sight with no lock light, three-bolt bursts that lead their aim, shutters, gates and two fighters on your tail: " + JSON.stringify(z));

  /* ── level 10 ── */
  var l10 = await gotoLevel(10);
  await page.evaluate(helpers);
  var p10 = await page.evaluate(function () {
    var s = SolScene, B = s.tr; s.iframeMs = 1e9; s.spareLives = 9;
    __T.step(150);
    var o = { mode: s.mode.id, tier: s.tier, speed: B.P.speed, dist: +B.dist.toFixed(1), ports: B.ports.length };
    __T.quiet(); var sc = s.score; __T.answer(0.1); o.score = s.score - sc;
    return o;
  });
  check(l10.mode === "trench" && p10.tier === 0 && p10.dist > 30 && p10.ports >= 1 && p10.score === 1, "level 10 plays: the trench runs, ports come, the right port scores: " + JSON.stringify(p10));

  /* ── level 61: pylons, gates, the fighter on your tail and blast shutters, each a life and each avoidable ── */
  var l61 = await gotoLevel(61);
  await page.evaluate(helpers);
  var h61 = await page.evaluate(function () {
    var s = SolScene, B = s.tr, o = { tier: s.tier, P: { pylons: B.P.pylons, frames: B.P.frames, tails: B.P.tails, shutter: B.P.shutter, volley: B.P.volley } };
    function until(f, n) { for (var i = 0; i < (n || 300) && !f(); i++) __T.step(1); return f(); }
    /* a pylon on the left: in its way, a life; to its right, nothing */
    __T.quiet(); B.ship.x = -0.6; var c = s.trenchSpawnObs("pylon", { side: -1 }, 12); until(function () { return c.passed || c.hit; });
    o.pylon = { strikes: s.strikes, hit: c.hit, label: s._lastHitLabel };
    __T.quiet(); B.ship.x = 0.5; c = s.trenchSpawnObs("pylon", { side: -1 }, 12); until(function () { return c.passed || c.hit; });
    o.pylonDodge = { strikes: s.strikes, hit: c.hit };
    /* a gate: the wall costs a life, the window is safe */
    __T.quiet(); B.ship.x = 0.7; B.ship.y = -0.8; c = s.trenchSpawnObs("gate", { x: 0, y: 0.1 }, 12); until(function () { return c.passed || c.hit; });
    o.gate = { strikes: s.strikes, hit: c.hit, label: s._lastHitLabel };
    __T.quiet(); B.ship.x = 0; B.ship.y = 0.1; c = s.trenchSpawnObs("gate", { x: 0, y: 0.1 }, 12); until(function () { return c.passed || c.hit; });
    o.gateDodge = { strikes: s.strikes, hit: c.hit };
    /* the lock-on ring: sit still in it and it costs a life; jink away and it closes on nothing */
    __T.quiet(); B.ship.x = 0; B.ship.y = 0; var tl = s.trenchSpawnTail(0, 0);
    o.tailShown = false;
    until(function () { if (B.tailTx.visible) o.tailShown = true; return B.tails.indexOf(tl) === -1; }, 400);
    o.tail = { strikes: s.strikes, label: s._lastHitLabel, shots: B.stats.tailShots };
    __T.quiet(); B.ship.x = -0.7; B.ship.y = -0.7; tl = s.trenchSpawnTail(-0.7, -0.7);
    for (var i = 0; i < 400 && B.tails.indexOf(tl) !== -1; i++) { var dir = Math.floor(i / 25) % 2 ? -1 : 1; __T.step(1, { ax: dir, ay: -dir }); }
    o.tailDodge = { strikes: s.strikes, gone: B.tails.indexOf(tl) === -1 };
    /* the fighters come on their own */
    __T.quiet(); B.quiet = false; B.nextObs = 1e9; B.turretT = 99; B.tailT = 0; s.iframeMs = 1e9;
    until(function () { return B.tails.length > 0; }, 60);
    o.tailAuto = B.tails.length;
    /* a shut blast shutter turns a torpedo away; open, it takes it */
    __T.quiet(); var sc0 = s.score, wr = s.choiceLetters().filter(function (L) { return s.need.indexOf(L) === -1; })[0];
    var p = s.trenchSpawnPort(wr, 0, 20), tt = 0;
    while (s.trenchOpen(p, B.t + 0.3) > 0.2 && tt++ < 400) __T.step(1);
    var shut0 = B.stats.shut; __T.shoot(p, true);
    o.shut = { clanks: B.stats.shut - shut0, strikes: s.strikes, state: p.state };
    __T.quiet(); var ps = __T.answer(0);
    o.open = { score: s.score - sc0, state: ps.map(function (q) { return q.state; }).join(",") };
    return o;
  });
  console.log("h61", JSON.stringify(h61));
  check(l61.mode === "trench" && h61.tier === 6 && /New this time:.*window/.test(l61.card) && h61.P.pylons > 0 && h61.P.frames > 0 && h61.P.tails === 1 && h61.P.shutter > 0 && h61.P.volley === 2,
    "level 61: pylons, gates, a fighter on your tail, shutters, two-bolt bursts; the card says what is new: " + JSON.stringify(h61.P));
  check(h61.pylon.strikes === 1 && h61.pylon.hit && /PYLON/.test(h61.pylon.label || "") && h61.pylonDodge.strikes === 0 && !h61.pylonDodge.hit, "a pylon costs a life, and steering around it costs nothing: " + JSON.stringify({ hit: h61.pylon, dodge: h61.pylonDodge }));
  check(h61.gate.strikes === 1 && h61.gate.hit && /GATE/.test(h61.gate.label || "") && h61.gateDodge.strikes === 0 && !h61.gateDodge.hit, "a gate's wall costs a life, and its window is safe: " + JSON.stringify({ hit: h61.gate, dodge: h61.gateDodge }));
  check(h61.tail.strikes === 1 && /TAIL/.test(h61.tail.label || "") && h61.tailShown && h61.tailDodge.strikes === 0 && h61.tailDodge.gone && h61.tailAuto >= 1,
    "the fighter on your tail: its closing lock-on ring costs a life, jinking out of it costs nothing, and it comes on its own: " + JSON.stringify({ hit: h61.tail, shown: h61.tailShown, dodge: h61.tailDodge, auto: h61.tailAuto }));
  check(h61.shut.clanks === 1 && h61.shut.strikes === 0 && h61.shut.state === "live" && h61.open.score === 1 && /^found(,found)?$/.test(h61.open.state), "a shut blast shutter turns the torpedo away (no letter, no life); open, the port takes it: " + JSON.stringify({ shut: h61.shut, open: h61.open }));

  /* ── level 50 and 100: the pictures, and the right port still scores ── */
  async function busy(n, name) {
    await gotoLevel(n);
    await page.evaluate(helpers);
    var o = await page.evaluate(function () {
      var s = SolScene, B = s.tr; s.iframeMs = 1e9; s.spareLives = 99; s.needStrikes = 999;
      for (var i = 0; i < 260; i++) { __T.step(1, { ax: Math.sin(i / 20), ay: Math.cos(i / 31) * 0.6 }); }
      /* (a wrong letter for the picture's torpedo, so the question is still open for the scoring check after it) */
      var L = s.choiceLetters().filter(function (x) { return s.need.indexOf(x) === -1; }), p = s.trenchSpawnPort(L[0], -0.2, 13);
      s.trenchSpawnObs("cat", { y: 0.7 }, 17);
      B.ship.x = -0.2; B.ship.y = -0.25; __T.step(12); s.trenchFire(); __T.step(4); s.iframeMs = 0;
      return { mode: s.mode.id, tier: s.tier, ports: B.ports.length, obs: B.obs.length, bolts: B.stats.bolts, tails: B.stats.tailShots, t: +B.t.toFixed(1) };
    });
    await page.waitForTimeout(800);
    await shot(name);
    var sc = await page.evaluate(function () { var s = SolScene; s.iframeMs = 0; __T.quiet(); var sc = s.score; __T.answer(0.2); return s.score - sc; });
    o.score = sc;
    return o;
  }
  var b50 = await busy(50, "03-play-50");
  console.log("b50", JSON.stringify(b50));
  check(b50.mode === "trench" && b50.tier === 4 && b50.bolts >= 2 && b50.score === 1, "level 50 plays: turrets fire, the right port scores: " + JSON.stringify(b50));
  var b100 = await busy(100, "04-play-100");
  console.log("b100", JSON.stringify(b100));
  check(b100.mode === "trench" && b100.tier === 9 && b100.bolts >= 4 && b100.tails >= 1 && b100.score === 1, "level 100 plays: bursts of turret fire, fighters on your tail, the right port scores: " + JSON.stringify(b100));
  var l100card = await page.evaluate(function () { return (document.getElementById("mode-card") || {}).textContent || ""; });
  await closeReading();

  /* losing: the last life ends the level with a Retry */
  var lose = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.needStrikes = 3; s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    __T.quiet(); s.strikes = s.needStrikes - 1;
    var b = s.trenchSpawnBolt(1.06, 1.41, 12, 0, 0);
    for (var i = 0; i < 200 && !b.crossed; i++) __T.step(1);
    for (var w = 0; w < 900 && !(s.ended && !document.getElementById("overlay").classList.contains("hidden")); w++) await new Promise(function (r) { setTimeout(r, 100); });
    await new Promise(function (r) { setTimeout(r, 300); });
    return { ended: s.ended, title: document.getElementById("win-title").textContent, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Trench Run/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 220));
  await ctx.close();

  /* ── the 500-pixel-tall Canvas frame ── */
  var ctx2 = await browser.newContext({ viewport: { width: 900, height: 500 } });
  await ctx2.addInitScript(function () { window.SOL_STATE = "LIT"; });
  page = await ctx2.newPage();
  watch(page, "500px");
  await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(900);
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.click('#mode-packs .card[data-genre="SCIFI"]');
  await page.click('#skill-packs .card[data-gamemode="trench"]');
  await page.click("#btn-skill-start"); await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 30000 }).catch(function () {});
  for (var j = 0; j < 12; j++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  await gotoLevel(1);
  await page.evaluate(helpers);
  var small = await page.evaluate(function () {
    var s = SolScene, B = s.tr; s.iframeMs = 1e9; s.spareLives = 9;
    __T.quiet(); var L = s.choiceLetters();
    s.trenchSpawnPort(L[0], 0.2, 15); s.trenchSpawnPort(L[1], -0.4, 31); s.trenchSpawnObs("cat", { y: -0.45 }, 12);
    B.ship.x = 0.2; B.ship.y = 0.1; __T.step(12); s.iframeMs = 0;
    var sp = s.trenchShipScreen(), T = B.tc, pad = s.trenchPadBox(), act = document.getElementById("btn-action").getBoundingClientRect(), cv = s.game.canvas.getBoundingClientRect();
    var fx = s.W / cv.width, ax0 = (act.left - cv.left) * fx;
    var over = pad ? !(T.x >= pad.x1 || T.x + T.w <= pad.x0 || T.y >= pad.y1 || T.y + T.h <= pad.y0) : false;
    return { W: s.W, H: s.H, ship: { x: Math.round(sp.x), y: Math.round(sp.y) }, tc: T, padOver: over, actClear: T.x + T.w <= ax0 || T.y + T.h <= (act.top - cv.top) * fx };
  });
  await page.waitForTimeout(800);
  await shot("05-canvas-500");
  check(small.H <= 500 && small.ship.y > small.H * 0.3 && small.ship.y < small.tc.y && small.tc.y + small.tc.h <= small.H && !small.padOver && small.actClear,
    "in the 500-pixel-tall frame the ship, the trench and the targeting computer fit, clear of the pad and the FIRE button: " + JSON.stringify(small));
  await ctx2.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
