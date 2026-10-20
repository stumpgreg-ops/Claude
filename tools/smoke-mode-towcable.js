/* Headless test of the Lit and Film mode "towcable" (Tow Cable, The Empire Strikes Back; js/mode-towcable.js):
   node tools/smoke-mode-towcable.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any
   script), picks Science Fiction, then The Empire Strikes Back, and drives the mode through the scene's own
   methods: the keys, the mouse and the HARPOON button fly and fire; the harpoon hooks the walker in the target
   box (or the one clicked); circling its legs wraps the cable and trips it; the right walker scores, a wrong
   one costs a life; a cannon bolt costs a life and can be dodged; a walker reaching the shield generator costs a
   life; Select TWO needs both; the difficulty climbs every level 2-100; levels 1, 10, 50 and 100 play it.
   Screenshots go to tools/shots/towcable-*.png. Prints ALL OK or the number FAILED.
   Everything waits on the game's own frames, so it also passes on a slow software-GL machine. */
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
      if (r.status() !== 404) return;
      /* other movies' question files may still be being written */
      if (/content1(1[4-9]|20)\.js/.test(r.url()) || /favicon/.test(r.url())) console.log(tag + " 404 (ignored) " + r.url());
      else errors.push(tag + " 404 " + r.url());
    });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Failed to load resource|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  page.setDefaultTimeout(120000);
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, "towcable-" + name + ".png") }); }
  /* the game's own frames (the machine may be slow) */
  async function frames(n) {
    await page.evaluate(async function (n) { var f0 = SolScene.game.loop.frame, t0 = Date.now(); while (SolScene.game.loop.frame < f0 + n && Date.now() - t0 < 90000) await new Promise(function (r) { setTimeout(r, 20); }); }, n);
  }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build (its card is on the title screen)");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector('#mode-packs .card[data-genre="SCIFI"]');
  await page.click('#mode-packs .card[data-genre="SCIFI"]');
  await page.waitForSelector('#skill-packs .card[data-gamemode="towcable"]');
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="towcable"]');
    return c ? { text: c.textContent, strand: c.getAttribute("data-strand"), visible: !!c.offsetParent } : null;
  });
  check(card && card.visible && /Empire Strikes Back/.test(card.text) && card.strand === "EMPIRE", "the movie card for The Empire Strikes Back shows on the Science Fiction screen: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="towcable"]');
  var picked = await page.evaluate(function () {
    return { only: SolModes.only, def: !!SolModes.MODES.towcable, ids: [1, 10, 50, 100].map(function (n) { var m = SolModes.modeFor(n); return m ? m.id : "-"; }).join(","),
      mix: SolLit.mixModes("SCIFI", SolModes.MODES).indexOf("towcable") !== -1 };
  });
  check(picked.only === "towcable" && picked.def && picked.ids === "towcable,towcable,towcable,towcable" && picked.mix, "the movie card plays Tow Cable on every level (and the genre's mix includes it): " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  async function gotoLevel(n) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "EMPIRE", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.tc && s.claim && s.readOpen; }, n, { timeout: 120000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, strand: s.strand, act: document.getElementById("btn-action").textContent,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 30000 }).catch(function () {});
    await frames(2);
    return info;
  }
  /* in-page helpers, installed once per scene */
  async function helpers() {
    await page.evaluate(function () {
      var H = window.__tc = {};
      H.wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
      H.frames = async function (n) { var f0 = SolScene.game.loop.frame, t0 = Date.now(); while (SolScene.game.loop.frame < f0 + n && Date.now() - t0 < 90000) await H.wait(15); };
      H.until = async function (f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 120000)) await H.wait(25); return f(); };
      /* no guns, no march, walkers in place: nothing happens unless a check makes it happen */
      H.quiet = function () {
        var s = SolScene, B = s.tc;
        B.P.fireGap = 1e9; B.fireCd = 1e9; B.shots.forEach(function (sh) { sh.w.aiming = false; }); B.shots = []; B.bolts = [];
        B.vMarch = 0; B.P.wind = 0; B.windA = 0; B.squalls = [];
        B.walkers.forEach(function (w) { if (w.state === "enter") { w.x = w.tx; w.state = "live"; } });
        s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
        B.follow = false; B.sp.vx = 0; B.sp.vy = 0; B.sp.spin = 0;
        ["SPACE", "LEFT", "RIGHT", "UP", "DOWN", "W", "A", "S", "D"].forEach(function (k) { s.keys[k].isDown = false; });
      };
      H.walker = function (L) { return SolScene.towWalker(L); };
      /* park the speeder (ground point) beside a walker, out of its legs */
      H.park = function (w, dx, dy) { var B = SolScene.tc; B.sp.x = w.x + (dx == null ? 120 : dx) * B.k; B.sp.gy = w.gy + (dy == null ? 30 : dy) * B.k; B.sp.vx = 0; B.sp.vy = 0; B.follow = false; };
      /* fly circles round a walker's legs, one step a frame, until it falls (or maxFrames) */
      H.circle = async function (w, maxFrames, dir) {
        var s = SolScene, B = s.tc, a = Math.atan2(B.sp.gy - w.gy, B.sp.x - w.x), n = 0;
        while (B.tow && B.tow.w === w && n < (maxFrames || 400)) {
          var r = 100 * w.sc + 26 * B.k;
          a += (dir || 1) * 0.42;
          B.sp.x = w.x + Math.cos(a) * r; B.sp.gy = w.gy + Math.sin(a) * r; B.sp.vx = 0; B.sp.vy = 0; B.follow = false;
          await H.frames(1); n++;
        }
        return n;
      };
      H.hook = async function (w) {
        var s = SolScene, B = s.tc;
        s.towHarpoon(w);
        await H.until(function () { return !B.tow || B.tow.phase === "tight"; });
        return B.tow;
      };
    });
  }

  /* ── level 1 ── */
  var l1 = await gotoLevel(1);
  check(l1.key === "mode" && l1.mode === "towcable" && l1.act === "HARPOON" && l1.strand === "EMPIRE", "level 1 runs Tow Cable in the mode scene with a HARPOON button: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act, strand: l1.strand }));
  check(/Tow Cable/.test(l1.card) && /snowspeeder level/.test(l1.card) && /Controls:.*Arrow keys.*mouse.*HARPOON/.test(l1.card) && /Lives:/.test(l1.card) && /Harpoon the walker/.test(l1.hint),
    "the reading pop-up names the game, its rules and its controls: " + l1.card.slice(0, 140) + "…");
  await helpers();

  var run = await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc, o = {};
    await H.until(function () { return B.walkers.every(function (w) { return w.state !== "enter"; }); }, 60000);
    H.quiet();
    var need = s.need.slice(), letters = s.choiceLetters();
    o.walkers = B.walkers.length; o.letters = letters.join(""); o.plates = B.walkers.map(function (w) { return w.txt.text; }).join("");
    o.need = need.join("");
    /* the keys fly the speeder */
    B.sp.x = s.W * 0.3; B.sp.gy = s.H * 0.7;
    var x0 = B.sp.x; s.keys.RIGHT.isDown = true;
    await H.until(function () { return B.sp.x > x0 + 15; }, 60000);
    s.keys.RIGHT.isDown = false; o.keyRight = B.sp.x - x0;
    var y0 = B.sp.gy; s.keys.S.isDown = true;
    await H.until(function () { return B.sp.gy > y0 + 15; }, 60000);
    s.keys.S.isDown = false; o.keyDown = B.sp.gy - y0;
    await H.frames(3);
    return o;
  });
  console.log("run", JSON.stringify(run));
  check(run.walkers === run.letters.length && run.walkers >= 3 && run.plates === run.letters, "one walker per answer letter, its letter on its plate: " + run.plates);
  check(run.keyRight > 15 && run.keyDown > 15, "the arrow keys and WASD fly the speeder: " + JSON.stringify({ right: run.keyRight, down: run.keyDown }));

  /* the real mouse: move it over the canvas and the speeder follows the pointer */
  var cbox = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  var before = await page.evaluate(function () { var B = SolScene.tc; B.sp.x = SolScene.W * 0.25; B.sp.gy = SolScene.H * 0.62; return { x: B.sp.x, gy: B.sp.gy }; });
  await page.mouse.move(cbox.x + cbox.w * 0.45, cbox.y + cbox.h * 0.8, { steps: 4 });
  await frames(12);
  var mouse = await page.evaluate(function () { var B = SolScene.tc; return { follow: B.follow, x: B.sp.x, gy: B.sp.gy, px: SolScene.ptr.x, py: SolScene.ptr.y }; });
  var d0 = Math.hypot(before.x - mouse.px, before.gy - mouse.py), d1 = Math.hypot(mouse.x - mouse.px, mouse.gy - mouse.py);
  check(mouse.follow && d1 < d0 - 20, "moving the mouse over the canvas: the speeder follows the pointer: " + JSON.stringify({ follow: mouse.follow, before: Math.round(d0), after: Math.round(d1) }));

  /* the target box and Space: hook a wrong walker, then Space again cuts the cable (no life) */
  var sp1 = await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc, o = {};
    H.quiet();
    var wrong = B.walkers.filter(function (w) { return s.need.indexOf(w.letter) === -1; })[0];
    H.park(wrong, 120, 25);
    await H.frames(2);
    o.lock = B.lock ? B.lock.letter : null; o.want = wrong.letter;
    /* far from every walker: nothing to lock */
    B.sp.x = 12; B.sp.gy = B.sTop + 2; await H.frames(2); o.farLock = B.lock ? B.lock.letter : null;
    H.park(wrong, 120, 25); await H.frames(2);
    window.__wrong = wrong.letter;
    return o;
  });
  await page.keyboard.down("Space"); await frames(2); await page.keyboard.up("Space");
  await page.waitForFunction(function () { var T = SolScene.tc.tow; return T && T.phase === "tight"; }, null, { timeout: 120000 }).catch(function () {});
  var hooked = await page.evaluate(function () { var T = SolScene.tc.tow; return T ? { letter: T.w.letter, phase: T.phase } : null; });
  await page.evaluate(async function () { var B = SolScene.tc; await window.__tc.until(function () { return B.tow && B.tow.t > 400; }); });
  await page.keyboard.down("Space"); await frames(2); await page.keyboard.up("Space");
  await frames(2);
  var cut = await page.evaluate(function () { return { tow: !!SolScene.tc.tow, strikes: SolScene.strikes, score: SolScene.score }; });
  check(sp1.lock === sp1.want && sp1.farLock === null, "the target box locks on to the nearest walker in harpoon range, and on nothing out of range: " + JSON.stringify(sp1));
  check(hooked && hooked.letter === sp1.want && hooked.phase === "tight" && !cut.tow && cut.strikes === 0 && cut.score === 0, "Space fires the harpoon into the locked walker; Space again cuts the cable loose, free: " + JSON.stringify({ hooked: hooked, cut: cut }));

  /* the on-screen HARPOON button fires too */
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  await page.mouse.move(abox.x, abox.y);
  await frames(1);
  await page.evaluate(function () { var s = SolScene, B = s.tc; window.__tc.quiet(); window.__tc.park(B.walkers[0], 120, 25); });
  await frames(2);
  await page.mouse.down(); await frames(2); await page.mouse.up();
  await page.waitForFunction(function () { return !!SolScene.tc.tow; }, null, { timeout: 60000 }).catch(function () {});
  var btn = await page.evaluate(function () { var T = SolScene.tc.tow; var o = T ? T.w.letter : null; SolScene.towCut(true); return o; });
  var want0 = await page.evaluate(function () { return SolScene.tc.walkers[0].letter; });
  check(btn === want0, "the on-screen HARPOON button fires the harpoon: " + btn);

  /* a mouse click on a walker picks that walker, even when the target box is on another one */
  var clickInfo = await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc;
    H.quiet();
    var ws = B.walkers.slice().sort(function (a, b) { return a.x - b.x; }), a = ws[1], b = ws[2];
    B.sp.x = (a.x + b.x) / 2; B.sp.gy = (a.gy + b.gy) / 2;
    await H.frames(2);
    var other = B.lock === a ? b : a;
    var cr = s.game.canvas.getBoundingClientRect(), hx = other.x + 8 * other.sc, hy = other.gy - 142 * other.sc;
    return { lock: B.lock && B.lock.letter, pick: other.letter, inRange: Math.hypot(B.sp.x - other.x, B.sp.gy - other.gy) <= B.P.range * B.k,
      x: cr.left + hx * cr.width / s.W, y: cr.top + hy * cr.height / s.H, spx: cr.left + B.sp.dx * cr.width / s.W, spy: cr.top + B.sp.dy * cr.height / s.H };
  });
  await page.mouse.move(clickInfo.x, clickInfo.y); await page.mouse.down(); await frames(2); await page.mouse.up();
  await page.waitForFunction(function () { return !!SolScene.tc.tow; }, null, { timeout: 60000 }).catch(function () {});
  var clicked = await page.evaluate(function () { var T = SolScene.tc.tow; var o = T ? T.w.letter : null; SolScene.towCut(true); return o; });
  check(clickInfo.inRange && clicked === clickInfo.pick, "clicking a walker in range fires the harpoon into that walker: " + JSON.stringify({ lock: clickInfo.lock, clicked: clicked, want: clickInfo.pick }));

  /* wrap a wrong walker: it falls, and its letter costs a life */
  var wrong = await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc, o = {};
    H.quiet();
    var w = H.walker(window.__wrong);
    H.park(w, 120, 25);
    var T = await H.hook(w);
    o.hooked = !!T;
    var sc0 = s.score;
    /* half a loop: the ring fills a little, the legs pull together */
    await H.circle(w, 7);
    o.half = { prog: +(B.tow && B.tow.prog || 0).toFixed(2), bind: +w.bind.toFixed(2), state: w.state };
    o.frames = await H.circle(w, 400);
    await H.until(function () { return w.state === "down"; });
    await H.frames(2);
    o.state = w.state; o.mark = w.mark; o.plate = w.txt.text; o.strikes = s.strikes; o.score = s.score - sc0; o.label = s._lastHitLabel; o.trips = B.trips;
    return o;
  });
  console.log("wrong", JSON.stringify(wrong));
  check(wrong.hooked && wrong.half.prog > 0.05 && wrong.half.prog < 1 && wrong.half.bind > 0.05 && wrong.half.state === "live", "circling a hooked walker's legs wraps the cable: the ring fills and the legs pull together: " + JSON.stringify(wrong.half));
  check(wrong.state === "down" && wrong.mark === "wrong" && wrong.plate === "✕" && wrong.strikes === 1 && wrong.score === 0 && /WRONG LETTER/.test(wrong.label || ""),
    "a full wrap trips the walker; a wrong letter costs a life and is crossed out: " + JSON.stringify(wrong));

  /* the legs: flying into them only bumps the speeder aside */
  var bump = await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc;
    H.quiet();
    var w = B.walkers.filter(function (x) { return x.state === "live"; })[0];
    B.sp.x = w.x; B.sp.gy = w.gy; await H.frames(2);
    var ex = (B.sp.x - w.x) / (76 * w.sc), ey = (B.sp.gy - w.gy) / (24 * w.sc);
    return { outside: ex * ex + ey * ey >= 0.99, strikes: s.strikes };
  });
  check(bump.outside && bump.strikes === 0, "flying into a walker's legs bumps the speeder out, and costs nothing: " + JSON.stringify(bump));

  /* a cannon bolt: under it costs a life */
  var gun = await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc, o = {};
    H.quiet();
    var w = B.walkers.filter(function (x) { return x.state === "live"; }).sort(function (a, b) { return a.x - b.x; })[0];
    var m = s.towMuzzle(w);
    B.sp.x = m.x - 150 * B.k; B.sp.gy = m.y + 70 * B.k + s.towAlt(m.y + 70 * B.k); await H.frames(2);
    var sh = s.towAim(w);
    o.aim = !!sh;
    await H.until(function () { return sh.locked || B.shots.indexOf(sh) === -1; });
    o.warned = sh.locked;
    await H.frames(1);
    o.drawn = B.fxG.commandBuffer.length > 0;
    await H.until(function () { return B.shots.indexOf(sh) === -1 && !B.bolts.length; });
    await H.frames(2);
    o.strikes = s.strikes; o.label = s._lastHitLabel; o.hits = B.hits;
    return o;
  });
  check(gun.aim && gun.warned && gun.drawn && gun.strikes === 1 && /CANNON/.test(gun.label || "") && gun.hits === 1, "a walker's gun glows, aims a red line that locks, then fires; a bolt hitting the speeder costs a life: " + JSON.stringify(gun));
  /* ...and moving once the line locks dodges it */
  var dodge = await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc, o = {};
    H.quiet();
    var w = B.walkers.filter(function (x) { return x.state === "live"; }).sort(function (a, b) { return a.x - b.x; })[0];
    var m = s.towMuzzle(w);
    B.sp.x = m.x - 150 * B.k; B.sp.gy = m.y + 70 * B.k + s.towAlt(m.y + 70 * B.k); await H.frames(2);
    var sh = s.towAim(w), b0 = 0;
    await H.until(function () { return sh.locked; });
    s.keys.DOWN.isDown = true;
    await H.until(function () { if (B.bolts.length) b0 = B.bolts.length; return B.shots.indexOf(sh) === -1 && !B.bolts.length; });
    s.keys.DOWN.isDown = false;
    await H.frames(2);
    o.strikes = s.strikes; o.bolts = b0;
    /* and behind a walker its guns can't reach you: no walker takes aim */
    H.quiet();
    B.walkers.forEach(function (x) { x.aiming = false; });
    B.sp.x = s.W - 12; B.sp.gy = B.sTop + 4; B.P.fireGap = 0.2; B.fireCd = 0;
    var r0 = B.walkers.filter(function (x) { return x.state === "live"; }).every(function (x) { return s.towMuzzle(x).x < B.sp.x - 20; });
    await H.frames(4);
    o.behind = { rightOfAll: r0, shots: B.shots.length };
    H.quiet();
    return o;
  });
  check(dodge.strikes === 0 && dodge.bolts >= 1, "flying out of the way once the line locks dodges the bolt (no life): " + JSON.stringify(dodge));
  check(dodge.behind.rightOfAll && dodge.behind.shots === 0, "the guns only point forward: behind the walkers none of them takes aim: " + JSON.stringify(dodge.behind));

  /* the march: a walker's head at the shield generator costs a life; the ion cannon drives them back */
  var march = await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc, o = {};
    H.quiet();
    o.start = +B.marchF.toFixed(3);
    var w = B.walkers.filter(function (x) { return x.state === "live"; }).sort(function (a, b) { return a.x - b.x; })[0];
    var d = (w.x - 150 * w.sc) - (B.genX + 3); w.x -= d; w.tx -= d;
    B.vMarch = 60 * B.k;
    await H.until(function () { return s.strikes > 0; }, 60000);
    B.vMarch = 0;
    o.strikes = s.strikes; o.label = s._lastHitLabel; o.ion = B.ion > 0; o.push = w.pushV > 0;
    var x1 = w.x;
    await H.frames(6);
    o.back = w.x > x1;
    o.past = (w.x - 150 * w.sc) > B.genX;
    return o;
  });
  check(march.start < 0.2 && march.strikes === 1 && /SHIELD GENERATOR/.test(march.label || "") && march.ion && march.push && march.back && march.past,
    "a walker reaching the shield generator costs a life, and the ion cannon drives the walkers back: " + JSON.stringify(march));

  /* the right walker: wrapped and tripped, it answers the question and pays */
  var right = await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc, o = {};
    H.quiet();
    var sc0 = s.score, coins = s.nightCoins, w = H.walker(s.need[0]);
    H.park(w, 120, 25);
    await H.hook(w);
    await H.circle(w, 400);
    await H.until(function () { return w.state === "down"; });
    if (s.need.length > 1) { var w2 = H.walker(s.need[1]); s.iframeMs = 0; H.park(w2, 120, 25); await H.hook(w2); await H.circle(w2, 400); await H.until(function () { return w2.state === "down"; }); }
    await H.frames(2);
    o.score = s.score - sc0; o.strikes = s.strikes; o.coins = s.nightCoins > coins; o.mark = w.mark; o.plate = w.txt.text; o.between = s._between;
    return o;
  });
  check(right.score === 1 && right.strikes === 0 && right.coins && right.mark === "right" && right.plate === "✓", "tripping the walker with the right letter answers the question and pays coins: " + JSON.stringify(right));
  await shot("02-right-1");

  /* the next question: a fresh line of walkers, then Select TWO */
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 120000 }).catch(function () {});
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 30000 }).catch(function () {});
  var two = await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc, o = {};
    o.fresh = { n: B.walkers.length, live: B.walkers.every(function (w) { return w.state === "enter" || w.state === "live"; }), entering: B.walkers.some(function (w) { return w.state === "enter"; }), tow: !!B.tow, march: +B.marchF.toFixed(3) };
    await H.until(function () { return B.walkers.every(function (w) { return w.state !== "enter"; }); }, 60000);
    H.quiet();
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    var a = H.walker(pair[0]); H.park(a, 120, 25); await H.hook(a); await H.circle(a, 400); await H.until(function () { return a.state === "down"; }); await H.frames(2);
    o.first = { score: s.score - sc0, mark: a.mark, plate: a.txt.text, found: s.extracted.join(""), strikes: s.strikes };
    var b = H.walker(pair[1]); H.park(b, 120, 25); await H.hook(b); await H.circle(b, 400); await H.until(function () { return b.state === "down"; }); await H.frames(2);
    o.second = { score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > coins, mark: b.mark };
    return o;
  });
  check(two.fresh.n >= 3 && two.fresh.live && two.fresh.entering && !two.fresh.tow && two.fresh.march < 0.05, "a new question brings a fresh line of walkers marching in, and the march starts over: " + JSON.stringify(two.fresh));
  check(two.first.score === 0 && two.first.mark === "right" && two.first.plate === "✓" && two.first.found.length === 1 && two.first.strikes === 0 && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right walkers: the first is marked found, the second answers it: " + JSON.stringify(two));

  /* the difficulty: every level 2-100 harder than the one before, never easier on any setting */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.towcable.params, s = SolScene, out = { same: typeof s.towParams === "function" && JSON.stringify(s.towParams(50)) === JSON.stringify(f(50)) };
    var up = ["boltSpd", "shooters", "twin", "wind", "tetherShoot", "lead", "squalls", "loops"], down = ["warnMs", "lockMs", "fireGap", "snapMs", "range", "cable", "marchS"];
    var easier = [], flat = [], n;
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat; out.l1 = f(1); out.l50 = f(50); out.l100 = f(100);
    out.news = SolModes.MODES.towcable.news.length;
    return out;
  });
  console.log("ramp", JSON.stringify({ l1: ramp.l1, l50: ramp.l50, l100: ramp.l100 }));
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0 && ramp.news === 10, "towParams (on the def as params): every level 2-100 is harder than the one before and never easier; a news line for each tier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat, news: ramp.news }));
  var e = ramp.l1, z = ramp.l100;
  check(e.shooters === 1 && !e.twin && !e.wind && !e.tetherShoot && !e.lead && !e.squalls && e.snapMs >= 99999 && e.warnMs >= 1600 && e.boltSpd <= 220 && e.loops <= 1.6 && e.marchS >= 120 && e.range >= 280,
    "level 1 is gentle: one gun at a time with a long warning, slow single bolts, no wind, a short wrap, a slow march: " + JSON.stringify(e));
  check(z.shooters === 3 && z.twin && z.wind >= 100 && z.tetherShoot && z.lead >= 0.9 && z.squalls === 2 && z.snapMs <= 900 && z.warnMs <= 820 && z.boltSpd >= 500 && z.loops >= 3.4 && z.marchS <= 50,
    "level 100 is intense: three guns, twin fast bolts that lead you, strong wind, two squalls, a cable that snaps, a long wrap, a fast march: " + JSON.stringify(z));

  /* the early picture: hooked and wrapping, a gun taking aim */
  async function scene(name, opts) {
    await page.evaluate(async function (opts) {
      var s = SolScene, B = s.tc, H = window.__tc;
      await H.until(function () { return B.walkers.every(function (w) { return w.state !== "enter"; }); }, 60000);
      s.iframeMs = 0; s.spareLives = 9; s.strikes = 0;
      var ws = B.walkers.slice().sort(function (a, b) { return a.x - b.x; }), w = ws[1];
      B.follow = false;
      H.park(w, 125, 40);
      await H.hook(w);
      if (B.tow) { B.tow.accum = Math.PI * 2 * B.P.loops * (opts.wrap || 0.6); B.tow.last = Math.atan2(B.sp.gy - w.gy, B.sp.x - w.x); }
      var sh = s.towAim(ws[0]); if (sh) sh.t = B.P.warnMs - B.P.lockMs - 30;
      if (opts.second && ws[3]) { var sh2 = s.towAim(ws[3]); if (sh2) sh2.t = 300; }
      if (opts.bolt && ws[2]) { var m = s.towMuzzle(ws[2]); B.bolts.push({ x: m.x - 60 * B.k, y: m.y + 30 * B.k, ux: -0.89, uy: 0.45, spd: 0, run: 0, max: 1e9, len: 34 * B.k }); }
      if (opts.march) { B.vMarch = 0; ws.forEach(function (x) { var d = (x.x - 150 * x.sc - B.genX) * opts.march; x.x -= d; x.tx -= d; }); }
      s.iframeMs = 1e9;
    }, opts || {});
    await frames(4);
    await shot(name);
    await page.evaluate(function () { SolScene.iframeMs = 0; });
  }
  await gotoLevel(1); await helpers();
  await page.evaluate(function () { window.__tc.quiet(); });
  await scene("01-level-1", { wrap: 0.55 });
  /* a walker toppling */
  await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc; H.quiet(); s.iframeMs = 1e9;
    var w = B.walkers.filter(function (x) { return x.state === "live" && s.need.indexOf(x.letter) === -1; })[0];
    s.towTrip(w); w.fallT = 640; w.halfDone = 4;
  });
  await frames(3); await shot("03-falling-1");

  /* level 10 plays it too */
  var l10 = await gotoLevel(10);
  check(l10.mode === "towcable" && l10.tier === 0, "level 10 plays Tow Cable: " + JSON.stringify({ mode: l10.mode, tier: l10.tier }));
  /* level 50: the card says what's new; the middle picture */
  var l50 = await gotoLevel(50); await helpers();
  var p50 = await page.evaluate(function () { var P = SolScene.tc.P; return { shooters: P.shooters, twin: P.twin, wind: P.wind, tetherShoot: P.tetherShoot }; });
  check(l50.mode === "towcable" && l50.tier === 4 && /New this time:.*wrapping fires at you/.test(l50.card) && p50.shooters === 2 && p50.twin && p50.wind > 0 && p50.tetherShoot,
    "level 50: two guns, twin bolts, wind, the hooked walker fires too, and the card says what's new: " + JSON.stringify(p50));
  await scene("04-level-50", { wrap: 0.35, second: true, bolt: true, march: 0.45 });
  /* level 100 */
  var l100 = await gotoLevel(100); await helpers();
  var late = await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc;
    await H.frames(6);
    return { tier: s.tier, squalls: B.squalls.length, wind: B.windA !== 0, windSign: B.txWind.visible, shooters: B.P.shooters };
  });
  check(l100.mode === "towcable" && late.tier === 9 && /New this time:.*final assault/.test(l100.card) && late.squalls === 2 && late.wind && late.windSign && late.shooters === 3,
    "level 100: two snow squalls, the wind blows (with its sign), three guns, and the card says what's new: " + JSON.stringify(late));
  await page.evaluate(function () { var B = SolScene.tc; B.squalls[0].x = 0.3; B.squalls[0].y = 0.75; });
  await scene("05-level-100", { wrap: 0.8, second: true, bolt: true, march: 0.7 });
  /* level 100's snapping cable */
  var snap = await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc;
    H.quiet(); s.iframeMs = 1e9;
    var w = B.walkers.filter(function (x) { return x.state === "live"; }).sort(function (a, b) { return a.x - b.x; })[0];
    H.park(w, -130, 20);
    await H.hook(w);
    if (!B.tow) return { hooked: false };
    /* pull straight away from it and hold */
    s.keys.LEFT.isDown = true;
    await H.until(function () { return !B.tow; }, 120000);
    s.keys.LEFT.isDown = false;
    return { hooked: true, tow: !!B.tow, strikes: s.strikes, state: w.state };
  });
  check(snap.hooked && !snap.tow && snap.strikes === 0 && snap.state === "live", "level 100: a cable pulled tight too long snaps (no life, harpoon again): " + JSON.stringify(snap));

  /* losing: the last life ends the level with a Retry */
  var lose = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    window.__tc.quiet(); s.strikes = s.needStrikes - 1;
    s.answerWrong("Z", "WRONG LETTER");
    for (var w = 0; w < 400 && !(s.ended && !document.getElementById("overlay").classList.contains("hidden")); w++) await new Promise(function (r) { setTimeout(r, 100); });
    await new Promise(function (r) { setTimeout(r, 300); });
    return { ended: s.ended, title: document.getElementById("win-title").textContent, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Tow Cable/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 200));
  await ctx.close();

  /* the 500-pixel-tall Canvas frame */
  var small = await browser.newContext({ viewport: { width: 1000, height: 500 } });
  await small.addInitScript(function () { window.SOL_STATE = "LIT"; });
  page = await small.newPage();
  page.setDefaultTimeout(120000);
  watch(page, "500px");
  await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(900);
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.click('#mode-packs .card[data-genre="SCIFI"]');
  await page.click('#skill-packs .card[data-gamemode="towcable"]');
  await page.click("#btn-skill-start"); await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
  for (i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  await gotoLevel(30); await helpers();
  var fit = await page.evaluate(async function () {
    var s = SolScene, B = s.tc, H = window.__tc;
    await H.until(function () { return B.walkers.every(function (w) { return w.state !== "enter"; }); }, 60000);
    var inside = B.walkers.every(function (w) { var top = w.gy - 192 * w.sc, l = w.x - 165 * w.sc, r = w.x + 98 * w.sc; return top > B.hz - 10 && w.gy < s.H && l > 0 && r < s.W + 4; });
    var font = B.walkers.map(function (w) { return 40 * w.sc * w.txt.scaleX; });
    return { W: s.W, H: s.H, inside: inside, minFont: Math.min.apply(null, font) };
  });
  await page.evaluate(function () { window.__tc.quiet(); });
  await scene("06-frame-500", { wrap: 0.5, second: true });
  check(fit.H <= 500 && fit.inside && fit.minFont >= 22, "in the 500-pixel-tall frame every walker fits on the plain and its letter stays readable: " + JSON.stringify(fit));
  await small.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
