/* Headless test of the Lit and Film mode "suit" (Suit Up, Iron Man, js/mode-suit.js): node tools/smoke-mode-suit.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Bad Film vs. Good Film and then Iron Man, and drives the mode through the scene's own methods: the right drone
   scores, a wrong drone costs a life, overheating (holding the trigger) costs a life and short bursts never do, a stall
   in the ice above the line costs a life and a quick dip does not, a hunter's laser costs a life and diving out of its
   line dodges it, a missile costs a life and can be outflown or shot down, a shield turns a blast away, Select TWO needs
   both drones, the keys, the mouse and the BLAST button work, the difficulty climbs every level 2-100, and the drones
   keep clear of the on-screen buttons at 1366x768 and in a 500-pixel-tall frame.
   The game logic is stepped by hand (scene.update / tick_suit with a fixed 33 ms), so the test does not depend on the
   frame rate. Screenshots go to tools/shots/suit-*.png. Prints ALL OK or the number FAILED. */
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
    page.on("response", function (r) { if (r.status() === 404 && !/content11[4-9]|content120/.test(r.url())) console.log(tag + " 404 " + r.url()); });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|404|Failed to load resource/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  /* the helpers the checks use, in the page: step the game by hand, quiet the hazards, line the suit up with a drone */
  function installHelpers() {
    window.__T = {
      step: function (n, inp) {
        var s = SolScene;
        for (var i = 0; i < n; i++) {
          if (s.ended || s._finishing) break;
          if (inp) { s.tickTimers(33); s.tick_suit(0.033, Object.assign({ ax: 0, ay: 0, fire: false, pull: false, ptr: null }, inp), 33); }
          else s.update(0, 33);
        }
      },
      quiet: function () {
        var s = SolScene, B = s.su, P = B.P;
        P.hunters = 0; P.missiles = 0; P.wind = 0; P.drift = 0; P.bob = 0; P.shield = 0; P.sink = 0;
        B.hunters.forEach(function (h) { try { h.spr.destroy(); } catch (e) {} }); B.hunters = [];
        B.missiles.forEach(function (m) { try { m.spr.destroy(); } catch (e) {} }); B.missiles = []; B.mWarn = [];
        B.missileCd = 1e9; B.hunterSpawn = 1e9;
        B.bolts.slice().forEach(function (b) { s.suitFreeBolt(b); });
        s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0; s._guardUsed = false;
        B.heat = 0; B.ice = 0; B.stalled = false; B.stallMs = 0; B.spin = 0; B.ohMs = 0; B.cd = 0; B.vx = 0; B.vy = 0; B.tilt = 0; B.rot = 0; B.windA = 0; B.hitQ = 0;
        B.drones.forEach(function (d) { d.enter = 1; });
        ["LEFT", "RIGHT", "UP", "DOWN", "W", "A", "S", "D", "SPACE", "SHIFT"].forEach(function (k) { s.keys[k].isDown = false; });
        s.ptr.down = false;
        __T.step(1, {});
      },
      /* the suit to the left of drone L, level with it, facing it */
      line: function (L) {
        var s = SolScene, B = s.su, k = B.k, d = B.drones[s.suitDroneIdx(L)];
        if (!d) return null;
        B.face = 1; B.rot = 0; B.tilt = 0; B.spin = 0; B.vx = 0; B.vy = 0;
        B.x = Math.max(B.minX, d.x - 230 * k);
        B.y = d.y + 14 * k + 27.5 * B.sc;
        return d;
      },
      /* for the pictures: no drones still fading out from the last question */
      tidy: function () { var s = SolScene, B = s.su; B.leaving.forEach(function (l) { s.suitKillDrone(l); }); B.leaving = []; B.drones.forEach(function (d) { d.enter = 1; }); s.bigTagMs = 0; s.bigTag.setVisible(false); __T.step(1, {}); },
      /* one blast at drone L; steps until it lands */
      shoot: function (L) {
        var s = SolScene, B = s.su, d = __T.line(L);
        if (!d) return null;
        var b = s.suitFire(0), n = 0;
        while (b && b.live && n++ < 120) __T.step(1, {});
        return { fired: !!b, gone: s.suitDroneIdx(L) === -1 };
      }
    };
  }

  async function openGame(page, w, h) {
    await page.goto(base + "index.html", { waitUntil: "load" });
    await page.waitForTimeout(900);
    var lit = await page.isVisible('#title-screen .card[data-family="LIT"]');
    await page.click('#title-screen .card[data-family="LIT"]');
    await page.waitForSelector("#mode-screen:not(.hidden)");
    await page.click('#mode-packs .card[data-genre="BADGOOD"]');
    await page.waitForSelector("#skill-screen:not(.hidden)");
    var card = await page.evaluate(function () {
      var c = document.querySelector('#skill-packs .card[data-gamemode="suit"]');
      return c ? { name: c.querySelector(".name").textContent, kind: c.querySelector(".kind").textContent, strand: c.getAttribute("data-strand"), visible: !!c.offsetParent } : null;
    });
    await page.click('#skill-packs .card[data-gamemode="suit"]');
    await page.waitForTimeout(200);
    return { lit: lit, card: card };
  }
  async function startGame(page) {
    await page.click("#btn-skill-start");
    await page.waitForTimeout(400);
    if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
    await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
    for (var i = 0; i < 16; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
    await page.evaluate(installHelpers);
  }
  async function closeReading(page) {
    await page.waitForSelector("#read-go", { state: "visible", timeout: 120000 }).catch(function () {});
    await page.click("#read-go").catch(function () {});
    await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 60000 }).catch(function () {});
  }
  async function gotoLevel(page, n) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "IRONMAN", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.su && s.claim && s.readOpen; }, n, { timeout: 120000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent, strand: s.strand,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    await closeReading(page);
    return info;
  }
  /* the next question after a right answer: skip the game clock's 0.9 s wait, then the reading pop-up */
  async function nextQuestion(page) {
    await page.evaluate(function () { var s = SolScene; try { for (var i = 0; i < 4 && s._between; i++) { s.time.preUpdate(); s.time.update(s.time.now + 400, 400); } } catch (e) {} });
    await page.waitForFunction(function () { return !SolScene._between; }, null, { timeout: 120000 }).catch(function () {});
    await closeReading(page);
  }
  async function shot(page, name) { await page.screenshot({ path: path.join(shots, name + ".png"), timeout: 180000 }); }

  /* ── the dev page, as the Lit and Film build, at 1366x768 ── */
  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  page.setDefaultTimeout(120000);
  watch(page, "dev");
  var opened = await openGame(page);
  check(opened.lit, "the dev page acts as the Lit and Film build (its card is on the title screen)");
  check(opened.card && opened.card.visible && opened.card.name === "Iron Man" && /Suit Up/.test(opened.card.kind) && opened.card.strand === "IRONMAN",
    "Bad Film vs. Good Film lists Iron Man with its game, Suit Up: " + JSON.stringify(opened.card));
  await shot(page, "suit-01-movies");
  var picked = await page.evaluate(function () {
    return { only: SolModes.only, def: !!SolModes.MODES.suit, l1: SolModes.modeFor(1).id, l10: SolModes.modeFor(10).id, l100: SolModes.modeFor(100).id,
      mix: SolLit.mixModes("BADGOOD", SolModes.MODES).indexOf("suit") !== -1 };
  });
  check(picked.only === "suit" && picked.def && picked.l1 === "suit" && picked.l10 === "suit" && picked.l100 === "suit" && picked.mix,
    "picking Iron Man plays Suit Up on every level, and the genre's mix includes it: " + JSON.stringify(picked));
  await startGame(page);

  /* ── level 1 ── */
  var l1 = await gotoLevel(page, 1);
  check(l1.key === "mode" && l1.mode === "suit" && l1.act === "BLAST" && l1.strand === "IRONMAN", "level 1 runs Suit Up in the mode scene with a BLAST button: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act, strand: l1.strand }));
  check(/Suit Up/.test(l1.card) && /armored flight level/.test(l1.card) && /Iron Man/.test(l1.card) && /Controls:.*Space or BLAST.*click/.test(l1.card) && /HEAT/.test(l1.card) && /ICE/.test(l1.card) && /Blast the drone/.test(l1.hint),
    "the reading pop-up names the game, the movie, the controls and the hazards: " + l1.card.slice(0, 140) + "…");

  /* the real keys, the real mouse and the on-screen BLAST button */
  var cbox = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  async function keyRun(key, code, frames) {
    await page.evaluate(function () { __T.quiet(); var s = SolScene, B = s.su; B.x = s.W * 0.3; B.y = (B.bandTop + B.bandBot) / 2; window.__k0 = { x: B.x, y: B.y }; });
    await page.keyboard.down(key);
    await page.waitForFunction(function (c) { return SolScene.keys[c].isDown; }, code, { timeout: 60000 }).catch(function () {});
    var r = await page.evaluate(function (n) { var s = SolScene, B = s.su; __T.step(n); return { dx: B.x - __k0.x, dy: B.y - __k0.y, vx: B.vx, vy: B.vy, face: B.face }; }, frames);
    await page.keyboard.up(key);
    await page.waitForFunction(function (c) { return !SolScene.keys[c].isDown; }, code, { timeout: 60000 }).catch(function () {});
    return r;
  }
  var keys = {};
  keys.right = await keyRun("ArrowRight", "RIGHT", 12);
  keys.a = await keyRun("a", "A", 12);
  keys.up = await keyRun("ArrowUp", "UP", 12);
  keys.s = await keyRun("s", "S", 12);
  keys.hover = await page.evaluate(function () { var B = SolScene.su; B.vy = -300 * B.k; __T.step(45); return { vy: B.vy }; });
  /* Space: a blast straight ahead (facing away from the drones, into the empty sky) */
  await page.evaluate(function () { __T.quiet(); var s = SolScene, B = s.su; B.x = s.W * 0.3; B.y = (B.bandTop + B.bandBot) / 2; B.face = -1; window.__s0 = B.shots; });
  await page.keyboard.down("Space");
  await page.waitForFunction(function () { return SolScene.keys.SPACE.isDown; }, null, { timeout: 60000 }).catch(function () {});
  keys.space = await page.evaluate(function () { var B = SolScene.su; __T.step(1); var b = B.bolts[B.bolts.length - 1]; return { shots: B.shots - __s0, ang: b ? +b.ang.toFixed(3) : null, heat: +B.heat.toFixed(3) }; });
  await page.keyboard.up("Space");
  await page.waitForFunction(function () { return !SolScene.keys.SPACE.isDown; }, null, { timeout: 60000 }).catch(function () {});
  /* the mouse: press over the sky up and to the left of the suit; the blast goes toward the pointer */
  var mp = await page.evaluate(function () {
    __T.quiet(); var s = SolScene, B = s.su, k = B.k, r = s.game.canvas.getBoundingClientRect();
    B.x = s.W * 0.3; B.y = (B.bandTop + B.bandBot) / 2; B.face = 1; window.__s0 = B.shots; window.__x0 = B.x;
    var x = B.x - 170 * k, y = B.y - 120 * k;
    return { x: r.left + x * r.width / s.W, y: r.top + y * r.height / s.H };
  });
  await page.mouse.move(mp.x, mp.y);
  await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.ptr.down; }, null, { timeout: 60000 }).catch(function () {});
  keys.mouse = await page.evaluate(function () {
    var s = SolScene, B = s.su; __T.step(1);
    var b = B.bolts[B.bolts.length - 1], want = s.suitAimAt(s.ptr.x, s.ptr.y);
    return { shots: B.shots - __s0, face: B.face, ang: b ? +b.ang.toFixed(3) : null, want: +want.toFixed(3), moved: Math.abs(B.x - __x0) > 3 };
  });
  await page.mouse.up();
  await page.waitForFunction(function () { return !SolScene.ptr.down; }, null, { timeout: 60000 }).catch(function () {});
  /* the BLAST button */
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  await page.evaluate(function () { __T.quiet(); var s = SolScene, B = s.su; B.x = s.W * 0.3; B.face = -1; __T.step(2); window.__s0 = B.shots; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  await page.waitForTimeout(300);
  keys.button = await page.evaluate(function () { var s = SolScene, B = s.su; __T.step(1); return { shots: B.shots - __s0, ptr: s.ptr.down }; });
  await page.mouse.up();
  await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y + 4);
  console.log("keys", JSON.stringify(keys));
  check(keys.right.vx > 0 && keys.right.dx > 5 && keys.right.face === 1 && keys.a.vx < 0 && keys.a.dx < -5 && keys.a.face === -1, "◀ ▶ and A / D fly the suit sideways (and turn it): " + JSON.stringify({ right: keys.right, a: keys.a }));
  check(keys.up.vy < 0 && keys.up.dy < -5 && keys.s.vy > 0 && keys.s.dy > 5 && Math.abs(keys.hover.vy) < 15, "▲ / W climbs on the boot jets, S / ▼ dives, and letting go the suit settles into a hover: " + JSON.stringify({ up: keys.up, s: keys.s, hover: keys.hover }));
  check(keys.space.shots >= 1 && keys.space.ang !== null && Math.abs(Math.cos(keys.space.ang) + 1) < 1e-6 && keys.space.heat > 0, "Space fires a repulsor blast straight ahead, and it heats the suit: " + JSON.stringify(keys.space));
  check(keys.mouse.shots >= 1 && keys.mouse.face === -1 && Math.abs(keys.mouse.ang - keys.mouse.want) < 0.02 && Math.abs(Math.sin(keys.mouse.ang)) > 0.2 && !keys.mouse.moved,
    "a mouse press fires toward the pointer (the suit turns to it) and does not fly the suit: " + JSON.stringify(keys.mouse));
  check(keys.button.shots >= 1 && !keys.button.ptr, "the on-screen BLAST button fires: " + JSON.stringify(keys.button));

  var run = await page.evaluate(function () {
    var s = SolScene, B = s.su, P = B.P, o = {}, i;
    __T.quiet();
    var need = s.need.slice(), letters = s.choiceLetters(), wrongs = letters.filter(function (L) { return need.indexOf(L) === -1; });
    o.drones = B.drones.length; o.letters = letters.slice().sort().join(""); o.tags = B.drones.map(function (d) { return d.label.text; }).sort().join("");
    o.inBand = B.drones.every(function (d) { return d.hy > B.ceilY && d.hx > 0 && d.hx < s.W; });
    /* the aim line locks on to what a blast straight ahead would hit */
    __T.line(need[0]); __T.step(1, {});
    var ah = s.suitAhead(); o.lock = ah && ah.o.letter === need[0];
    /* a wrong drone: a life, and it goes down */
    var sc0 = s.score;
    var w = __T.shoot(wrongs[0]);
    o.wrong = { fired: w.fired, gone: w.gone, strikes: s.strikes, score: s.score - sc0, label: s._lastHitLabel };
    /* holding the trigger fires again and again and overheats the suit: a life, and the repulsors vent for a moment */
    __T.quiet(); B.x = B.minX; B.y = (B.bandTop + B.bandBot) / 2; B.face = -1;
    var s0 = B.shots; s.keys.SPACE.isDown = true;
    for (i = 0; i < 400 && B.ohMs <= 0; i++) __T.step(1);
    o.hold = { shots: B.shots - s0, secs: +(i * 0.033).toFixed(2), venting: B.ohMs > 0, strikes: s.strikes, label: s._lastHitLabel, heat: +B.heat.toFixed(2) };
    var s1 = B.shots; __T.step(20); o.hold.whileVenting = B.shots - s1;
    s.keys.SPACE.isDown = false; __T.step(80);
    o.hold.after = { venting: B.ohMs > 0, heat: +B.heat.toFixed(2) };
    /* short bursts: two quick blasts, a pause, again; never overheats */
    __T.quiet(); B.x = B.minX; B.face = -1;
    var peak = 0; s0 = B.shots;
    for (i = 0; i < 10; i++) { s.suitFire(Math.PI); __T.step(7, {}); s.suitFire(Math.PI); peak = Math.max(peak, B.heat); __T.step(30, {}); }
    o.bursts = { shots: B.shots - s0, strikes: s.strikes, peak: +peak.toFixed(2), overheats: B.ohMs > 0 };
    /* above the ice line: the ICE bar fills, the engines stall (a life) and the suit drops until it thaws */
    __T.quiet(); B.x = s.W * 0.25; B.y = B.ceilY - 40 * B.k;
    for (i = 0; i < 400 && !B.stalled; i++) __T.step(1, {});
    o.ice = { stalled: B.stalled, secs: +(i * 0.033).toFixed(2), want: +(1 / P.iceRate).toFixed(2), strikes: s.strikes, label: s._lastHitLabel };
    for (i = 0; i < 400 && B.stalled; i++) __T.step(1, { ax: 1, ay: -1 });
    o.ice.recovered = { stalled: B.stalled, below: B.y > B.ceilY, ice: +B.ice.toFixed(2), secs: +(i * 0.033).toFixed(2) };
    /* a quick dip above the line and straight back down: the ice melts, no stall */
    __T.quiet(); B.y = B.ceilY + 60 * B.k;
    var top = 1e9, peakIce = 0;
    for (i = 0; i < 90 && B.y > B.ceilY - 50 * B.k; i++) { __T.step(1, { ay: -1 }); top = Math.min(top, B.y); }
    for (i = 0; i < 25; i++) { __T.step(1, {}); peakIce = Math.max(peakIce, B.ice); }
    for (i = 0; i < 200 && B.y < B.ceilY + 40 * B.k; i++) { __T.step(1, { ay: 1 }); peakIce = Math.max(peakIce, B.ice); }
    __T.step(90, {});
    o.dip = { above: top < B.ceilY, peak: +peakIce.toFixed(2), strikes: s.strikes, stalled: B.stalled, ice: +B.ice.toFixed(2) };
    /* the right drone answers and pays */
    __T.quiet(); sc0 = s.score; var coins = s.nightCoins;
    __T.shoot(need[0]); if (need.length > 1) { s.iframeMs = 0; __T.shoot(need[1]); }
    o.right = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins, between: s._between, left: B.drones.length, leaving: B.leaving.length };
    return o;
  });
  console.log("run", JSON.stringify(run));
  check(run.drones === run.letters.length && run.drones >= 3 && run.tags === run.letters && run.inBand, "one drone per answer letter, each with its letter on its tag, all under the ice line: " + run.tags);
  check(run.lock, "the lock-on finds the drone a blast straight ahead would hit");
  check(run.wrong.fired && run.wrong.gone && run.wrong.strikes === 1 && run.wrong.score === 0 && /WRONG LETTER/.test(run.wrong.label || ""), "blasting a wrong drone costs a life and it goes down: " + JSON.stringify(run.wrong));
  check(run.hold.venting && run.hold.strikes === 1 && /OVERHEAT/.test(run.hold.label || "") && run.hold.shots >= 6 && run.hold.secs > 1.5 && run.hold.whileVenting === 0 && !run.hold.after.venting && run.hold.after.heat < 0.6,
    "holding the trigger keeps firing and overheats the suit (a life), the repulsors vent for a moment, then cool: " + JSON.stringify(run.hold));
  check(run.bursts.shots === 20 && run.bursts.strikes === 0 && !run.bursts.overheats && run.bursts.peak < 0.75, "short bursts never overheat: " + JSON.stringify(run.bursts));
  check(run.ice.stalled && run.ice.strikes === 1 && /ICED UP/.test(run.ice.label || "") && Math.abs(run.ice.secs - run.ice.want) < 0.2 && !run.ice.recovered.stalled && run.ice.recovered.below && run.ice.recovered.ice === 0,
    "hovering above the ice line fills the ICE bar and stalls the engines (a life); the suit drops below the line and restarts: " + JSON.stringify(run.ice));
  check(run.dip.above && run.dip.peak > 0.05 && run.dip.strikes === 0 && !run.dip.stalled && run.dip.ice === 0, "a quick climb above the line and straight back down: the ice melts, no stall: " + JSON.stringify(run.dip));
  check(run.right.score === 1 && run.right.strikes === 0 && run.right.coins && run.right.between && run.right.left === 0 && run.right.leaving >= 1, "blasting the right drone answers the question and pays coins; the other drones fly off: " + JSON.stringify(run.right));

  /* the next question: Select TWO needs both drones */
  await nextQuestion(page);
  var two = await page.evaluate(function () {
    var s = SolScene, B = s.su, o = {};
    __T.quiet();
    o.fresh = { drones: B.drones.length, live: B.drones.every(function (d) { return d.state === "live"; }) };
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    __T.shoot(pair[0]);
    o.first = { score: s.score - sc0, found: s.extracted.join(""), strikes: s.strikes, gone: s.suitDroneIdx(pair[0]) === -1, between: s._between };
    s.iframeMs = 0;
    __T.shoot(pair[1]);
    o.second = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins };
    return o;
  });
  console.log("two", JSON.stringify(two));
  check(two.fresh.drones >= 3 && two.fresh.live, "a new question brings a fresh set of drones: " + JSON.stringify(two.fresh));
  check(two.first.score === 0 && two.first.found.length === 1 && two.first.strikes === 0 && two.first.gone && !two.first.between && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right drones: the first counts as found, the second answers it: " + JSON.stringify(two));

  /* the picture at level 1: the suit lined up with a drone, a blast on its way */
  await nextQuestion(page);
  await page.evaluate(function () {
    var s = SolScene, B = s.su; __T.quiet(); __T.tidy();
    var low = B.drones.filter(function (d) { return !d.high; }).sort(function (a, b) { return a.hy - b.hy; }), d = low[1] || low[0];
    __T.line(d.letter); B.x = Math.max(B.minX + 40, d.x - 420 * B.k);
    __T.step(5, { ax: 1 }); s.suitFire(0); __T.step(2, { ax: 1 });
  });
  await shot(page, "suit-02-level1");

  /* ── level 10: still Suit Up ── */
  var l10 = await gotoLevel(page, 10);
  check(l10.mode === "suit" && l10.tier === 0, "level 10 plays Suit Up: " + JSON.stringify({ mode: l10.mode, tier: l10.tier }));

  /* ── level 25: the hunter drone ── */
  var l25 = await gotoLevel(page, 25);
  var hunt = await page.evaluate(function () {
    var s = SolScene, B = s.su, k = B.k, o = { hunters: B.P.hunters, every: B.P.hunterEvery }, i;
    function hunter(x, y) { var h = s.suitSpawnHunter(); h.enter = 1; h.x = x; h.y = y; return h; }
    /* it paints the suit with its laser line and fires along it: in the line, a life */
    __T.quiet(); B.x = s.W * 0.3; B.y = (B.bandTop + B.bandBot) / 2;
    var h = hunter(s.W * 0.7, B.y - 90 * k); s.suitHunterAim(h);
    o.warn = { state: h.state, ms: B.P.warnMs };
    for (i = 0; i < 200 && h.state === "warn"; i++) __T.step(1, {});
    o.hit = { strikes: s.strikes, label: s._lastHitLabel, secs: +(i * 0.033).toFixed(2), flash: h.flash > 0 };
    /* diving out of the line before it fires dodges it */
    __T.quiet(); B.x = s.W * 0.3; B.y = (B.bandTop + B.bandBot) / 2 - 40 * k;
    h = hunter(s.W * 0.7, B.y - 90 * k); s.suitHunterAim(h);
    for (i = 0; i < 200 && h.state === "warn"; i++) __T.step(1, { ay: 1 });
    o.dodge = { strikes: s.strikes, fired: h.state === "patrol" && h.flash > 0 };
    /* a blast brings it down: a bonus */
    __T.quiet(); B.x = s.W * 0.12; B.y = (B.bandTop + B.bandBot) / 2; B.face = 1;
    var p = s.suitPalm(); h = hunter(B.x + 150 * k, p.y); h.state = "warn"; h.t = -1e9; h.dx = 0; h.dy = -1;
    var k0 = B.kills, b = s.suitFire(0);
    for (i = 0; i < 60 && b.live; i++) __T.step(1, {});
    o.down = { kills: B.kills - k0, gone: B.hunters.indexOf(h) === -1 || h.state === "gone", strikes: s.strikes };
    return o;
  });
  console.log("hunt", JSON.stringify(hunt));
  check(l25.tier === 2 && /New this time:.*hunter drone/.test(l25.card) && hunt.hunters === 1 && hunt.every > 0, "level 25: a hunter drone, and the card says what's new: " + JSON.stringify({ tier: l25.tier, hunters: hunt.hunters }));
  check(hunt.warn.state === "warn" && hunt.hit.strikes === 1 && /LASER/.test(hunt.hit.label || "") && hunt.hit.flash && Math.abs(hunt.hit.secs - hunt.warn.ms / 1000) < 0.1,
    "the hunter paints a laser line first and fires along it after the warning: in the line, a life: " + JSON.stringify(hunt.hit));
  check(hunt.dodge.fired && hunt.dodge.strikes === 0, "diving out of the laser line before it fires dodges it: " + JSON.stringify(hunt.dodge));
  check(hunt.down.kills === 1 && hunt.down.gone && hunt.down.strikes === 0, "a blast brings the hunter down: " + JSON.stringify(hunt.down));

  /* ── level 55: crosswind, a drone above the ice line, shields; the picture ── */
  var l55 = await gotoLevel(page, 55);
  var shield = await page.evaluate(function () {
    var s = SolScene, B = s.su, P = B.P, o = {}, i;
    /* the crosswind pushes a hovering suit sideways */
    s.iframeMs = 1e9; B.x = s.W * 0.5; B.y = (B.bandTop + B.bandBot) / 2; B.vx = 0; B.t = 0; B.wph = 1.2;
    var x0 = B.x; __T.step(40, {});
    o.wind = { P: P.wind, now: +B.windA.toFixed(1), drift: +(B.x - x0).toFixed(1), sign: Math.sign(B.windA) === Math.sign(B.x - x0), hud: B.txWind.visible };
    o.high = B.drones.filter(function (d) { return d.high && d.hy < B.ceilY; }).length;
    var need = s.need.slice(), sh = P.shield;
    /* a blast at a drone with its shield up bounces off: no answer, no life */
    __T.quiet(); P.shield = sh;
    var lt = need[0], d = B.drones[s.suitDroneIdx(lt)];
    d.sph = ((1.02 - (B.t / 3.4) % 1) % 1 + 1) % 1;
    o.up = s.suitShieldUp(d);
    var sc0 = s.score;
    var r = __T.shoot(lt);
    o.bounce = { score: s.score - sc0, strikes: s.strikes, still: s.suitDroneIdx(lt) !== -1 };
    /* the same drone with its shield down: the blast gets through and answers */
    d.sph = ((1 + (sh + 1) / 2 - (B.t / 3.4) % 1) % 1 + 1) % 1;
    o.down = s.suitShieldUp(d);
    if (need.length > 1) s.need = [lt];
    __T.shoot(lt);
    o.through = { score: s.score - sc0, strikes: s.strikes };
    return o;
  });
  console.log("l55", JSON.stringify(shield));
  check(l55.mode === "suit" && l55.tier === 5 && /New this time:.*shield/.test(l55.card), "level 55: the card names the shields");
  check(shield.wind.P > 0 && Math.abs(shield.wind.now) > 1 && Math.abs(shield.wind.drift) > 3 && shield.wind.sign && shield.wind.hud, "the crosswind pushes the hovering suit sideways, and the HUD shows it: " + JSON.stringify(shield.wind));
  check(shield.high === 1, "one drone hovers above the ice line from level 41: " + shield.high);
  check(shield.up === 1 && shield.bounce.score === 0 && shield.bounce.strikes === 0 && shield.bounce.still && shield.down === 0 && shield.through.score === 1 && shield.through.strikes === 0,
    "a shield that is up turns a blast away (no answer, no life); with it down the blast gets through: " + JSON.stringify(shield));
  /* the level-55 picture: the hunter painting the suit, shields, the wind */
  await nextQuestion(page);
  await page.evaluate(function () {
    var s = SolScene, B = s.su, k = B.k; s.iframeMs = 0; s.spareLives = 9; __T.tidy();
    var low = B.drones.filter(function (d) { return !d.high; }).sort(function (a, b) { return a.hy - b.hy; }), d = low[1] || low[0];
    __T.line(d.letter); B.x = Math.max(B.minX + 40, d.x - 440 * k);
    B.hunterSpawn = 0; __T.step(2, {}); B.hunters.forEach(function (h) { h.enter = 1; h.u = 0; h.ph = 0.4; h.cd = 1e9; });
    __T.step(4, { ax: 1 }); B.hunters.forEach(function (h) { s.suitHunterAim(h); }); __T.step(Math.round(B.P.warnMs / 33 * 0.6), {});
    s.suitFire(0); __T.step(2, {});
  });
  await shot(page, "suit-03-level55");

  /* ── level 65: missiles ── */
  var l65 = await gotoLevel(page, 65);
  var mis = await page.evaluate(function () {
    var s = SolScene, B = s.su, P = B.P, k = B.k, o = { missiles: P.missiles }, i, m;
    var turn = P.missileTurn, sp = P.missileSp;
    /* MISSILE LOCK first, then it launches from the side the arrow shows */
    __T.quiet(); P.missiles = 1; P.missileTurn = turn; B.x = s.W * 0.3; B.y = (B.bandTop + B.bandBot) / 2;
    var w = s.suitMissileLock(); P.missiles = 0;
    for (i = 0; i < 200 && !B.missiles.length; i++) __T.step(1, {});
    o.lock = { warned: w.length, launched: B.missiles.length, secs: +(i * 0.033).toFixed(2), from: B.missiles[0] && B.missiles[0].x > s.W / 2 ? 1 : -1, side: w[0].side };
    /* hovering in its path: a life */
    for (i = 0; i < 300 && B.missiles.length; i++) __T.step(1, {});
    o.hit = { strikes: s.strikes, label: s._lastHitLabel, left: B.missiles.length };
    /* outflown: it runs out of fuel and falls away */
    __T.quiet(); B.x = s.W * 0.2; B.y = (B.bandTop + B.bandBot) / 2;
    m = s.suitLaunch(1, B.y); m.fuel = 0.5;
    var dud = false;
    for (i = 0; i < 200 && B.missiles.length; i++) { __T.step(1, { ax: -1 }); dud = dud || m.state === "dud"; }
    o.outfly = { dud: dud, strikes: s.strikes, left: B.missiles.length };
    /* shot down: a bonus */
    __T.quiet(); B.x = s.W * 0.15; B.y = (B.bandTop + B.bandBot) / 2; B.face = 1; P.missileTurn = 0;
    var p = s.suitPalm(); m = s.suitLaunch(1, p.y); m.ang = Math.PI;
    var k0 = B.kills; __T.step(3, {}); var b = s.suitFire(0);
    for (i = 0; i < 80 && B.missiles.length; i++) __T.step(1, {});
    o.down = { kills: B.kills - k0, left: B.missiles.length, strikes: s.strikes };
    P.missileTurn = turn;
    return o;
  });
  console.log("missiles", JSON.stringify(mis));
  check(l65.tier === 6 && /New this time:.*missiles/.test(l65.card) && mis.missiles === 1, "level 65: homing missiles, and the card says what's new");
  check(mis.lock.warned === 1 && mis.lock.launched === 1 && mis.lock.secs > 0.5 && mis.lock.from === mis.lock.side, "MISSILE LOCK sounds first, then the missile launches from the side the arrow shows: " + JSON.stringify(mis.lock));
  check(mis.hit.strikes === 1 && /MISSILE/.test(mis.hit.label || "") && mis.hit.left === 0, "a missile that reaches the suit costs a life: " + JSON.stringify(mis.hit));
  check(mis.outfly.dud && mis.outfly.strikes === 0 && mis.outfly.left === 0, "a missile that runs out of fuel falls away harmlessly: " + JSON.stringify(mis.outfly));
  check(mis.down.kills === 1 && mis.down.left === 0 && mis.down.strikes === 0, "a blast shoots a missile down: " + JSON.stringify(mis.down));

  /* ── level 100: everything; the picture; losing ── */
  var l100 = await gotoLevel(page, 100);
  var late = await page.evaluate(function () {
    var s = SolScene, B = s.su, P = B.P, k = B.k; s.iframeMs = 1e9; s.spareLives = 9;
    var o = { tier: s.tier, hunters: P.hunters, missiles: P.missiles, high: B.drones.filter(function (d) { return d.high; }).length, lock: P.lock };
    B.drones.forEach(function (d) { d.enter = 1; });
    B.x = s.W * 0.3; B.y = B.ceilY + 70 * k; B.face = 1;
    while (B.hunters.length < 2) s.suitSpawnHunter();
    B.hunters.forEach(function (h, i) { h.enter = 1; h.u = i * 2.2; h.cd = 1e9; });
    s.suitMissileLock(); for (var i = 0; i < 200 && B.missiles.length < 2; i++) __T.step(1, { ax: 1 });
    B.x = s.W * 0.3; B.y = B.ceilY + 70 * k; B.vx = 0; B.vy = 0;
    __T.step(4, { ax: 1, ay: -1 });
    B.hunters.forEach(function (h) { s.suitHunterAim(h); });
    __T.step(8, {}); s.suitFire(0); __T.step(2, {});
    o.live = B.hunters.length;
    return o;
  });
  await shot(page, "suit-04-level100");
  check(l100.mode === "suit" && late.tier === 9 && /New this time:.*final battle/.test(l100.card) && late.hunters === 2 && late.missiles === 2 && late.high === 2 && late.lock === 0 && late.live === 2,
    "level 100 plays Suit Up with everything: two hunters, missiles in pairs, two drones above the ice line, no lock-on: " + JSON.stringify(late));
  var lose = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    __T.quiet(); s.strikes = s.needStrikes - 1;
    s.suitOverheat();
    for (var w = 0; w < 600 && !(s.ended && !document.getElementById("overlay").classList.contains("hidden")); w++) {
      try { s.time.preUpdate(); s.time.update(s.time.now + 100, 100); } catch (e) {}
      await new Promise(function (r) { setTimeout(r, 100); });
    }
    return { ended: s.ended, title: document.getElementById("win-title").textContent, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Suit Up/.test(lose.msg) && /overheated/i.test(lose.msg), "overheating on the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 220));

  /* the difficulty: every level 2-100 harder than the one before, never easier on any setting */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.suit.params, s = SolScene, out = { same: typeof s.suitParams === "function" && JSON.stringify(s.suitParams(50)) === JSON.stringify(f(50)) };
    var up = ["heatShot", "iceRate", "ceil", "sink", "bob", "drift", "driftSp", "hunters", "wind", "high", "shield", "missiles", "missileSp", "missileTurn"];
    var down = ["cool", "thaw", "hover", "hunterEvery", "missileEvery", "warnMs", "lock"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) {
        if ((k === "hunterEvery" || k === "missileEvery") && !a[k]) { if (b[k]) harder = true; return; }   /* 0: none yet */
        if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true;
      });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l100: ramp.l100 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0, "suitParams (on the def as params): every level 2-100 is harder than the one before and never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat }));
  var e = ramp.l1, z = ramp.l100;
  check(e.heatShot < 0.18 && e.cool > 0.39 && e.iceRate < 0.31 && e.hover > 6 && e.drift === 0 && e.hunters === 0 && e.wind === 0 && e.high === 0 && e.shield === 0 && e.missiles === 0 && e.lock === 1,
    "level 1 is gentle: about six quick blasts before the suit overheats, over three seconds above the ice line, still drones, firm hover, no hunters, wind, shields or missiles, and the lock-on: " + JSON.stringify(e));
  check(z.heatShot > 0.33 && z.cool < 0.25 && z.iceRate > 0.89 && z.hunters === 2 && z.missiles === 2 && z.high === 2 && z.shield > 0.6 && z.wind > 200 && z.warnMs < 560 && z.lock === 0,
    "level 100 is intense: three blasts to overheat, a stall in about a second, two hunters, pairs of missiles, shields up most of the time, strong wind: " + JSON.stringify(z));

  /* the drones keep clear of the on-screen buttons (1366x768) */
  async function layoutCheck(pg) {
    return pg.evaluate(function () {
      var s = SolScene, B = s.su, k = B.k, bad = [];
      B.drones.forEach(function (d) {
        var x0 = d.hx - 44 * k - B.P.drift * k, x1 = d.hx + 44 * k + B.P.drift * k, y0 = d.hy - 28 * k, y1 = d.hy + 58 * k;
        (B.boxes.list || []).forEach(function (bx) { if (x1 > bx.x0 && x0 < bx.x1 && y1 > bx.y0 && y0 < bx.y1) bad.push(d.letter); });
        if (x0 < 0 || x1 > s.W || y0 < 0 || y1 > s.H) bad.push(d.letter + "@edge");
      });
      var high = B.drones.filter(function (d) { return d.high && d.hy < B.ceilY; }).length;
      if (high !== B.P.high) bad.push("high " + high + " of " + B.P.high);
      return { bad: bad, n: B.drones.length, high: high, boxes: (B.boxes.list || []).length, W: s.W, H: s.H };
    });
  }
  await page.evaluate(function () { SolScene.scene.restart({ family: "LIT", strand: "IRONMAN", night: 100 }); });
  await page.waitForFunction(function () { var s = window.SolScene; return s && s.night === 100 && s.su && s.claim && s.readOpen; }, null, { timeout: 120000 }).catch(function () {});
  var lay768 = await layoutCheck(page);
  check(lay768.bad.length === 0 && lay768.n >= 3 && lay768.boxes >= 2, "1366x768: every drone (with its drift) is on the canvas and clear of the on-screen buttons, and the high ones stay above the ice line: " + JSON.stringify(lay768));
  await shot(page, "suit-06-reading");
  await ctx.close();

  /* ── a 500-pixel-tall frame (the Canvas assignment page) ── */
  var ctx2 = await browser.newContext({ viewport: { width: 1000, height: 500 } });
  await ctx2.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var p2 = await ctx2.newPage();
  p2.setDefaultTimeout(120000);
  watch(p2, "500");
  await openGame(p2);
  await startGame(p2);
  var small = await gotoLevel(p2, 50);
  var lay500 = await layoutCheck(p2);
  await p2.evaluate(function () {
    var s = SolScene, B = s.su; s.iframeMs = 0; s.spareLives = 9; __T.tidy();
    var low = B.drones.filter(function (d) { return !d.high; }).sort(function (a, b) { return a.hy - b.hy; }), d = low[low.length - 1];
    __T.line(d.letter); B.x = Math.max(B.minX + 30, d.x - 300 * B.k);
    __T.step(3, { ax: 1 }); s.suitFire(0); __T.step(2, {});
  });
  await p2.screenshot({ path: path.join(shots, "suit-05-frame500.png"), timeout: 180000 });
  var hud500 = await p2.evaluate(function () { var B = SolScene.su; return { k: +B.k.toFixed(2), hud: [Math.round(B.hudX), Math.round(B.hudY), Math.round(B.hudW)], W: SolScene.W, H: SolScene.H, tk: B.tk }; });
  check(small.mode === "suit" && lay500.bad.length === 0 && lay500.n >= 3 && hud500.H === 500 && hud500.hud[0] + hud500.hud[2] <= hud500.W,
    "a 500-pixel-tall frame: Suit Up plays, every drone stays on the canvas and clear of the buttons, the HUD fits: " + JSON.stringify({ lay: lay500, hud: hud500 }));
  await ctx2.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
