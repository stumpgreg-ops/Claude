/* Headless test of the Lit and Film mode "director" (Call the Shot, js/mode-director.js): node tools/smoke-mode-director.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Film Language → Lights, Camera, Action and drives the mode through the scene's own methods: the keys pan,
   tilt and zoom (and the shot readout follows the zoom), the mouse points the camera and its wheel zooms, the
   on-screen W / T buttons zoom without rolling; a finished take of the right actor scores and a wrong one costs a
   life (and crosses the slate out); a take at the wrong shot size or with nobody in the box never finishes; the
   boom mic and a crew member in the frame while rolling each cost a life, and each can be avoided (a tighter shot
   keeps the boom out, letting go of ROLL lets the crew pass, the camera won't start rolling with them in the frame);
   Space, a mouse button and the ROLL button all roll; Select TWO needs both; the difficulty climbs every level 2-100;
   levels 1, 10 and 100 play; the reading pop-up names the game and its controls. Screenshots go to
   tools/shots/director-*.png. Prints ALL OK or the number FAILED. */
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
    /* other movies' content files (js/content114.js-content120.js) may not be written yet: their 404s are ignored */
    page.on("response", function (r) { if (r.status() === 404 && !/content1(1[4-9]|20)\.js/.test(r.url())) errors.push(tag + " 404 " + r.url()); });
    page.on("pageerror", function (e) { errors.push(tag + " pageerror: " + e.message); });
    page.on("console", function (m) {
      if (m.type() !== "error" && m.type() !== "warning") return;
      var t = m.text();
      if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader|status of 404/i.test(t)) errors.push(tag + " " + m.type() + ": " + t);
    });
  }
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }

  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  page.setDefaultTimeout(240000);   /* screenshots and waits are slow on a busy machine (software WebGL) */
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png") }); }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build (its card is on the title screen)");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-genre="LANGUAGE"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  var card = await page.evaluate(function () {
    var c = document.querySelector('#skill-packs .card[data-gamemode="director"]');
    return c ? { text: c.textContent, visible: !!c.offsetParent, strand: c.getAttribute("data-strand") } : null;
  });
  check(card && card.visible && /Call the Shot/.test(card.text) && /Lights, Camera, Action/.test(card.text), "Film Language lists Lights, Camera, Action with its game, Call the Shot: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="director"]');
  var picked = await page.evaluate(function () {
    return { only: SolModes.only, def: !!SolModes.MODES.director, l1: SolModes.modeFor(1).id, l10: SolModes.modeFor(10).id, l55: SolModes.modeFor(55).id, l100: SolModes.modeFor(100).id };
  });
  check(picked.only === "director" && picked.def && picked.l1 === "director" && picked.l10 === "director" && picked.l55 === "director" && picked.l100 === "director", "the movie card plays Call the Shot on every level: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  /* helpers in the page: the game's clock, not the wall clock (dt is capped at 50 ms a frame) */
  async function helpers() {
    await page.evaluate(function () {
      var H = window.__dr = {};
      H.wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
      H.until = async function (f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 120000)) await H.wait(30); return f(); };
      H.frames = async function (n) { var f0 = SolScene.game.loop.frame; await H.until(function () { return SolScene.game.loop.frame >= f0 + n; }); };
      /* no hazards of the game's own while a check runs, and the actors hold still */
      H.quiet = function () {
        var s = SolScene, B = s.dr;
        B.booms.forEach(function (bm) { bm.phase = "up"; bm.tip = -160; bm.cd = 1e9; bm.target = null; });
        B.crew.forEach(function (cr) { s.directorKillCrew(cr); }); B.crew = []; B.crewCd = 1e9;
        B.actors.forEach(function (a) { a.spd = 0; a.pause = 1e9; a.moving = false; });
        s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0;
        B.rec = false; B.needRelease = false; B.prog = 0; B.flash = null; B.trans = null; B.estab = false; B.rot = B.rotTo;
        ["LEFT", "RIGHT", "UP", "DOWN", "W", "A", "S", "D", "SPACE"].forEach(function (k) { s.keys[k].isDown = false; });
        if (B.zk) Object.keys(B.zk).forEach(function (k) { B.zk[k].isDown = false; });
      };
      H.idx = function (L) { return SolScene.directorIdx(L); };
      /* frame actor i at the called shot (or the given one) and roll until the take is done or the time runs out */
      H.take = async function (i, sh, ms) {
        var s = SolScene, B = s.dr, sc = s.score, st = s.strikes, tk = B.takes;
        s.directorFrame(i, sh); B.needRelease = false;
        s.keys.SPACE.isDown = true;
        await H.until(function () { return B.takes > tk || s.strikes > st || s.score > sc || s._between; }, ms || 120000);
        s.keys.SPACE.isDown = false;
        await H.frames(2);
        return { takes: B.takes - tk, strikes: s.strikes - st, score: s.score - sc };
      };
    });
  }
  /* close the reading pop-up (on level 1 it can come back once more): until the game has run a few frames with it closed */
  async function closeReading() {
    for (var tries = 0; tries < 40; tries++) {
      var st = await page.evaluate(function () {
        var s = SolScene, go = document.getElementById("read-go");
        if (s.readOpen && go && go.offsetParent) { go.click(); return "clicked"; }
        return s.readOpen || s._readPending ? "waiting" : "closed";
      });
      if (st === "closed") {
        var ok = await page.evaluate(function () { return new Promise(function (r) { var f0 = SolScene.game.loop.frame, t0 = Date.now(); (function w() { var s = SolScene; if (s.readOpen) r(false); else if (s.game.loop.frame >= f0 + 3) r(true); else if (Date.now() - t0 > 120000) r(false); else setTimeout(w, 30); })(); }); });
        if (ok) return true;
      } else await page.waitForTimeout(300);
    }
    return false;
  }
  async function gotoLevel(n) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "LANGUAGE", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.dr && s.claim && s.readOpen; }, n, { timeout: 120000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "" };
    });
    await closeReading();
    await helpers();
    return info;
  }
  async function nextQuestion() {
    await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 120000 }).catch(function () {});
    await closeReading();
  }

  var l1 = await gotoLevel(1);
  check(l1.key === "mode" && l1.mode === "director" && l1.act === "ROLL", "level 1 runs Call the Shot in the mode scene with a ROLL button: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act }));
  check(/Call the Shot/.test(l1.card) && /camera level/.test(l1.card) && /Controls:/.test(l1.card) && /pan/i.test(l1.card) && /tilt/i.test(l1.card) && /zoom/i.test(l1.card) && /CLOSE-UP/.test(l1.card) && /Frame the actor|Film a take/.test(l1.hint),
    "the reading pop-up names the game, the camera moves, the shots and the controls: " + l1.card.slice(0, 140) + "…");

  /* the opening transition (FADE IN:), then the controls */
  var open = await page.evaluate(async function () {
    var s = SolScene, B = s.dr, o = {};
    await __dr.until(function () { return B.transLog.length > 0; }, 120000);
    o.trans = B.transLog[0].head; o.say = B.transLog[0].says;
    await __dr.until(function () { return !B.trans; }, 120000);
    o.call = B.call && B.call.shot; o.callText = B.tx.call.text; o.actors = B.actors.length; o.letters = B.actors.map(function (a) { return a.label.text; }).join("");
    o.choices = s.choiceLetters().slice().sort().join("");
    o.estab = B.tx.shot.text;
    return o;
  });
  check(open.trans === "FADE IN:" && /screenplay/.test(open.say) && open.actors === open.choices.length && open.letters.split("").sort().join("") === open.choices && /DIRECTOR: “Give me a /.test(open.callText) && open.estab === "EXTREME LONG SHOT",
    "the scene fades in (FADE IN:) on an establishing shot, one actor per answer letter holds a slate, and the director calls a shot: " + JSON.stringify(open));
  await shot("director-01-establishing-1");

  var keys = await page.evaluate(async function () {
    var s = SolScene, B = s.dr, o = {}, H = __dr;
    H.quiet();
    B.vh = 400; B.cx = 1000; B.cy = 600; await H.frames(2);
    var x0 = B.cx; s.keys.RIGHT.isDown = true; await H.until(function () { return B.cx > x0 + 30; }, 300000); o.panLabel = B.tx.panR.visible; s.keys.RIGHT.isDown = false; o.pan = B.cx - x0;
    await H.frames(3);
    var y0 = B.cy; s.keys.S.isDown = true; await H.until(function () { return B.cy > y0 + 20; }, 300000); o.tiltLabel = B.tx.tiltD.visible; s.keys.S.isDown = false; o.tilt = B.cy - y0;
    await H.frames(3);
    var v0 = B.vh; B.zk.in1.isDown = true; await H.until(function () { return B.vh < 140; }, 300000); o.zoomLabel = B.tx.zoom.text; B.zk.in1.isDown = false; o.zoomIn = v0 - B.vh;
    await H.frames(2); o.tight = B.tx.shot.text;
    v0 = B.vh; B.zk.out1.isDown = true; await H.until(function () { return B.vh > 650; }, 300000); B.zk.out1.isDown = false; o.zoomOut = B.vh - v0;
    await H.frames(2); o.wide = B.tx.shot.text;
    B.vh = 300; await H.frames(2); o.long = B.tx.shot.text;
    B.vh = 180; await H.frames(2); o.medium = B.tx.shot.text;
    return o;
  });
  check(keys.pan > 30 && keys.panLabel && keys.tilt > 20 && keys.tiltLabel && keys.zoomIn > 100 && keys.zoomLabel === "ZOOM IN" && keys.zoomOut > 300,
    "▶ pans, S tilts, E zooms in and Q zooms out, and each move is labelled as it happens (PAN ▶, ▼ TILT, ZOOM IN): " + JSON.stringify(keys));
  check(keys.tight === "CLOSE-UP" && keys.medium === "MEDIUM SHOT" && keys.long === "LONG SHOT" && keys.wide === "EXTREME LONG SHOT", "the shot readout changes with the zoom: " + [keys.wide, keys.long, keys.medium, keys.tight].join(" → "));

  /* the mouse: pointing moves the camera there, the wheel zooms, the W / T buttons zoom and never roll */
  var cbox = await page.evaluate(function () { var r = SolScene.game.canvas.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  await page.evaluate(function () { var B = SolScene.dr; B.vh = 400; B.cx = 1000; B.cy = 600; window.__c0 = { x: B.cx, y: B.cy, vh: B.vh }; });
  await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y + cbox.h * 0.5);
  await page.mouse.move(cbox.x + cbox.w * 0.25, cbox.y + cbox.h * 0.3, { steps: 4 });
  var aimed = await page.evaluate(async function () { var B = SolScene.dr; await __dr.until(function () { return B.cx < window.__c0.x - 60; }, 60000); return { dx: B.cx - window.__c0.x, dy: B.cy - window.__c0.y, target: !!B.mt }; });
  await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y + cbox.h * 0.5);
  await page.evaluate(async function () { await __dr.frames(3); var B = SolScene.dr; B.mt = null; B.vx = 0; B.vy = 0; window.__v0 = B.vh; });
  await page.mouse.wheel(0, -300);
  var wheel = await page.evaluate(async function () { var B = SolScene.dr; await __dr.until(function () { return B.vh < window.__v0 - 20; }, 60000); return window.__v0 - B.vh; });
  var zb = await page.evaluate(function () { var s = SolScene, B = s.dr, r = s.game.canvas.getBoundingClientRect(); return { x: r.left + B.zb.x * r.width / s.W, t: r.top + B.zb.t * r.height / s.H, w: r.top + B.zb.w * r.height / s.H }; });
  await page.evaluate(function () { var B = SolScene.dr; B.vh = 400; B.mt = null; window.__v0 = B.vh; window.__rec = false; });
  await page.mouse.move(zb.x, zb.t); await page.mouse.down();
  var tbtn = await page.evaluate(async function () { var B = SolScene.dr; await __dr.until(function () { window.__rec = window.__rec || B.rec; return B.vh < window.__v0 - 80; }, 60000); return { zoom: window.__v0 - B.vh, rec: window.__rec || B.rec }; });
  await page.mouse.up();
  await page.mouse.move(zb.x, zb.w); await page.mouse.down();
  var wbtn = await page.evaluate(async function () { var B = SolScene.dr; window.__v1 = B.vh; await __dr.until(function () { return B.vh > window.__v1 + 80; }, 60000); return { zoom: B.vh - window.__v1, rec: B.rec }; });
  await page.mouse.up();
  check(aimed.dx < -60 && aimed.dy < -20, "moving the mouse points the camera at that spot: " + JSON.stringify(aimed));
  check(wheel > 20, "the mouse wheel zooms: " + wheel.toFixed(1));
  check(tbtn.zoom > 80 && !tbtn.rec && wbtn.zoom > 80 && !wbtn.rec, "the on-screen T and W buttons zoom in and out, and pressing them never rolls the camera: " + JSON.stringify({ T: tbtn, W: wbtn }));

  /* the takes */
  await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y + cbox.h * 0.5);
  var run = await page.evaluate(async function () {
    var s = SolScene, B = s.dr, H = __dr, o = {};
    H.quiet();
    var need = s.need.slice(), letters = s.choiceLetters(), wrongs = letters.filter(function (L) { return need.indexOf(L) === -1; });
    o.call = B.call.shot;
    /* framed at the wrong shot size: rolling never finishes the take */
    var other = B.call.shot === "CU" ? "LS" : "CU";
    var t0 = Date.now(), r0 = s.directorFrame(H.idx(wrongs[0]), other); s.keys.SPACE.isDown = true;
    var st0 = s.strikes, sc0 = s.score, f0 = s.game.loop.frame;
    await H.until(function () { return s.game.loop.frame > f0 + Math.ceil(B.P.rollMs / 50 * 1.4); }, 120000);
    o.wrongShot = { framed: r0.ok, rec: B.rec, prog: +B.prog.toFixed(3), why: B.why, takes: B.takes, strikes: s.strikes - st0, status: B.tx.status.text };
    s.keys.SPACE.isDown = false; await H.frames(2);
    /* nobody in the box: nothing */
    B.cx = 150; B.cy = 300; B.vh = 300; s.directorClamp(); s.keys.SPACE.isDown = true; f0 = s.game.loop.frame;
    await H.until(function () { return s.game.loop.frame > f0 + Math.ceil(B.P.rollMs / 50 * 1.2); }, 120000);
    o.empty = { rec: B.rec, prog: B.prog, takes: B.takes, why: B.why };
    s.keys.SPACE.isDown = false; await H.frames(2);
    /* letting go mid-take: CUT, no life, the take runs down */
    s.directorFrame(H.idx(wrongs[0])); s.keys.SPACE.isDown = true;
    await H.until(function () { return B.prog > 0.3; }, 120000);
    s.keys.SPACE.isDown = false; await H.frames(3);
    o.letGo = { rec: B.rec, strikes: s.strikes - st0, prog: +B.prog.toFixed(2), takes: B.takes };
    await H.until(function () { return B.prog === 0; }, 60000);
    /* a wrong actor, at the called shot: a life, the slate is crossed out, and filming them again costs nothing */
    H.quiet();
    var w = await H.take(H.idx(wrongs[0]));
    var wa = B.actors[H.idx(wrongs[0])];
    o.wrong = Object.assign(w, { state: wa.state, slate: wa.label.text, label: s._lastHitLabel });
    s.iframeMs = 0;
    var again = s.directorFrame(H.idx(wrongs[0])); s.keys.SPACE.isDown = true; f0 = s.game.loop.frame;
    await H.until(function () { return s.game.loop.frame > f0 + Math.ceil(B.P.rollMs / 50 * 1.3); }, 120000);
    o.again = { strikes: s.strikes - st0, why: B.why, takes: B.takes }; s.keys.SPACE.isDown = false; await H.frames(2);
    return o;
  });
  console.log("run", JSON.stringify(run));
  check(run.wrongShot.framed && run.wrongShot.rec && run.wrongShot.prog === 0 && run.wrongShot.why === "shot" && run.wrongShot.takes === 0 && run.wrongShot.strikes === 0 && /director wants/.test(run.wrongShot.status),
    "framed at the wrong shot size, the camera rolls but the take never finishes (the status says which shot the director wants): " + JSON.stringify(run.wrongShot));
  check(run.empty.rec && run.empty.prog === 0 && run.empty.takes === 0 && run.empty.why === "none", "with nobody in the box, rolling records nothing: " + JSON.stringify(run.empty));
  check(!run.letGo.rec && run.letGo.strikes === 0 && run.letGo.takes === 0, "letting go of ROLL mid-take stops it and costs nothing: " + JSON.stringify(run.letGo));
  check(run.wrong.takes === 1 && run.wrong.strikes === 1 && run.wrong.score === 0 && run.wrong.state === "dead" && run.wrong.slate === "✕" && /WRONG LETTER/.test(run.wrong.label || "") && run.again.strikes === 1 && run.again.why === "dead",
    "a finished take of a wrong actor costs a life and crosses the slate out; filming them again costs nothing: " + JSON.stringify({ wrong: run.wrong, again: run.again }));

  /* the hazards: the boom mic and the crew */
  var hz = await page.evaluate(async function () {
    var s = SolScene, B = s.dr, H = __dr, o = {};
    var need = s.need.slice(), wrongs = s.choiceLetters().filter(function (L) { return need.indexOf(L) === -1; });
    var live = wrongs.filter(function (L) { return B.actors[H.idx(L)].state === "live"; });
    var tgt = H.idx(live[0] || need[0]);
    function dropBoom(a) { var bm = B.booms[0]; bm.target = a; bm.x = a.x; bm.tip = a.feet - 170 - 30; bm.phase = "low"; bm.t = 0; B.P.boomLow = 1e6; }
    function slowTake() { B.P.rollMs = 1e7; }
    var keepRoll = B.P.rollMs;
    /* the boom hanging low over the actor, in a long shot: the camera won't start rolling */
    H.quiet(); slowTake();
    var a = B.actors[tgt];
    dropBoom(a); s.directorFrame(tgt, "LS"); await H.frames(2);
    s.keys.SPACE.isDown = true; await H.frames(4);
    o.blocked = { rec: B.rec, hz: B.hz && B.hz.kind, strikes: s.strikes, status: B.tx.status.text };
    s.keys.SPACE.isDown = false; await H.frames(2);
    /* rolling in a long shot when the boom comes down: a life */
    H.quiet(); slowTake(); s.directorFrame(tgt, "LS"); s.keys.SPACE.isDown = true; await H.until(function () { return B.rec; }, 30000);
    var st0 = s.strikes;
    var bm = B.booms[0]; bm.target = a; bm.x = a.x; bm.tip = -160; bm.phase = "down"; bm.t = 0; B.P.boomLow = 1e6;
    await H.until(function () { return s.strikes > st0 || bm.phase === "low" && bm.t > 600; }, 60000);
    o.boomHit = { strikes: s.strikes - st0, label: s._lastHitLabel, rec: B.rec, needRelease: B.needRelease, ruined: B.flash && B.flash.kind };
    s.keys.SPACE.isDown = false; await H.frames(2);
    /* ...but a close-up keeps the boom out of the frame: rolling under it costs nothing */
    H.quiet(); slowTake(); dropBoom(a); s.directorFrame(tgt, "CU"); await H.frames(2);
    var st1 = s.strikes; s.keys.SPACE.isDown = true; await H.until(function () { return B.rec; }, 30000);
    var f0 = s.game.loop.frame; await H.until(function () { return s.game.loop.frame > f0 + 30; }, 120000);
    o.boomDodge = { strikes: s.strikes - st1, rec: B.rec, hz: !!B.hz };
    s.keys.SPACE.isDown = false; await H.frames(2);
    /* a crew member walks into a long shot of a floor actor while rolling: a life */
    var fl = -1; B.actors.forEach(function (x, i) { if (!x.bal && fl < 0) fl = i; });
    H.quiet(); slowTake(); s.directorFrame(fl, "LS"); s.keys.SPACE.isDown = true; await H.until(function () { return B.rec; }, 30000);
    var st2 = s.strikes, fa = B.actors[fl];
    var cr = s.directorSpawnCrew(1, 0); cr.x = s.directorToWorld(-60, 0).x - 60; cr.spd = 400;
    await H.until(function () { return s.strikes > st2 || cr.x > fa.x + 900; }, 120000);
    o.crewHit = { strikes: s.strikes - st2, label: s._lastHitLabel, warned: true };
    s.keys.SPACE.isDown = false; await H.frames(2);
    /* ...and not rolling, the crew can cross the frame for free (the camera won't roll while they are in it) */
    H.quiet(); slowTake(); s.directorFrame(fl, "LS");
    var st3 = s.strikes; cr = s.directorSpawnCrew(-1, 0); cr.x = s.directorToWorld(s.W + 60, 0).x + 60; cr.spd = 400;
    var seen = false, blocked = false;
    await H.until(function () { if (B.hz && B.hz.kind === "crew") { if (seen && !B.rec) blocked = true; seen = true; s.keys.SPACE.isDown = true; } else s.keys.SPACE.isDown = false; return cr.x < fa.x - 900; }, 240000);
    s.keys.SPACE.isDown = false;
    o.crewDodge = { strikes: s.strikes - st3, seen: seen, blocked: blocked };
    await H.frames(2);
    /* the edge warnings: BOOM ▼ while it gets ready to dip, CREW ▶ before someone walks in */
    H.quiet(); s.directorFrame(fl, "LS"); a = B.actors[fl];
    bm = B.booms[0]; bm.target = a; bm.x = a.x; bm.tip = -160; bm.phase = "warn"; bm.t = 0; B.P.boomWarn = 1e6;
    var cr2 = s.directorSpawnCrew(1, 0); cr2.spd = 60; cr2.x = s.directorToWorld(0, 0).x - 60 - 24 * 1.15 - 20;
    await H.frames(3);
    o.warn = B.warn.filter(function (t) { return t.visible; }).map(function (t) { return t.text; });
    B.P.rollMs = keepRoll;
    return o;
  });
  await shot("director-02-warnings-1");
  console.log("hazards", JSON.stringify(hz));
  check(!hz.blocked.rec && hz.blocked.hz === "boom" && hz.blocked.strikes === 0 && /BOOM/.test(hz.blocked.status), "with the boom mic already in the frame the camera won't roll (and it costs nothing): " + JSON.stringify(hz.blocked));
  check(hz.boomHit.strikes === 1 && /BOOM IN SHOT/.test(hz.boomHit.label || "") && !hz.boomHit.rec && hz.boomHit.ruined === "boom", "the boom mic dipping into a long shot while the camera rolls ruins the take and costs a life: " + JSON.stringify(hz.boomHit));
  check(hz.boomDodge.strikes === 0 && hz.boomDodge.rec && !hz.boomDodge.hz, "a close-up keeps the same low boom out of the frame: rolling under it costs nothing: " + JSON.stringify(hz.boomDodge));
  check(hz.crewHit.strikes === 1 && /CREW IN SHOT/.test(hz.crewHit.label || ""), "a crew member walking into the frame while the camera rolls costs a life: " + JSON.stringify(hz.crewHit));
  check(hz.crewDodge.strikes === 0 && hz.crewDodge.seen && hz.crewDodge.blocked, "not rolling, the crew crosses the frame for free, and the camera won't start rolling while they are in it: " + JSON.stringify(hz.crewDodge));
  check(hz.warn.indexOf("BOOM ▼") !== -1 && hz.warn.indexOf("CREW ▶") !== -1, "the viewfinder warns before the boom dips (BOOM ▼) and before crew walk in (CREW ▶): " + JSON.stringify(hz.warn));

  /* the right actor, by holding the on-screen ROLL button: the question is answered, with coins */
  await page.evaluate(function () {
    var s = SolScene, B = s.dr; __dr.quiet(); B.P.rollMs = 900;
    window.__sc = s.score; window.__coins = s.nightCoins; window.__tk = B.takes;
    s.directorFrame(__dr.idx(s.need[0]));
  });
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.dr.prog > 0.2 || SolScene.score > window.__sc; }, null, { timeout: 120000 }).catch(function () {});
  await shot("director-03-rolling-1");
  await page.waitForFunction(function () { return SolScene.dr.takes > window.__tk || SolScene.score > window.__sc; }, null, { timeout: 120000 }).catch(function () {});
  await page.mouse.up();
  var right = await page.evaluate(async function () {
    var s = SolScene, B = s.dr, o = { score: s.score - window.__sc, coins: s.nightCoins > window.__coins, strikes: s.strikes, need: s.need.length };
    if (s.need.length > 1 && s.score === window.__sc) { s.iframeMs = 0; var r = await __dr.take(__dr.idx(s.need[1])); o.score = s.score - window.__sc; }
    await __dr.until(function () { return B.trans && B.trans.phase === "out"; }, 30000);
    o.cut = B.cutText; o.trans = B.trans && B.trans.kind;
    await __dr.until(function () { return B.transLog.length > 1; }, 60000);
    o.transText = B.transLog[B.transLog.length - 1].head;
    return o;
  });
  await shot("director-04-transition-1");
  check(right.score === 1 && right.coins && right.strikes === 0 && /PRINT IT/.test(right.cut || ""), "holding the on-screen ROLL button films the right actor: CUT! PRINT IT!, the question is answered and pays coins: " + JSON.stringify(right));
  await nextQuestion();
  var trans = await page.evaluate(async function () {
    var s = SolScene, B = s.dr, o = {};
    await __dr.until(function () { return B.trans && B.trans.phase === "in"; }, 30000);
    var lg = B.transLog[B.transLog.length - 1] || {}; o.kind = lg.kind; o.text = lg.head; o.says = lg.says || "";
    await __dr.until(function () { return !B.trans; }, 120000);
    o.fresh = B.actors.every(function (a) { return a.state === "live" || s.extracted.indexOf(a.letter) !== -1; }) && B.ghosts.length === 0;
    return o;
  });
  check(/TO:|FADE IN:|IRIS IN:/.test(trans.text) && trans.says.length > 20 && trans.fresh, "the next scene comes in with a named transition (" + trans.text + ") and fresh actors: " + JSON.stringify(trans));

  /* Select TWO, filmed with Space and with a mouse button on the canvas */
  var two = await page.evaluate(async function () {
    var s = SolScene, B = s.dr, H = __dr, o = {};
    H.quiet(); B.P.rollMs = 900;
    var letters = s.choiceLetters(), pair = letters.slice(1, 3);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, coins = s.nightCoins;
    var r1 = await H.take(H.idx(pair[0]));
    var a0 = B.actors[H.idx(pair[0])];
    o.first = { score: s.score - sc0, state: a0.state, slate: a0.label.text, found: s.extracted.join(""), strikes: s.strikes, takes: r1.takes };
    s.directorFrame(H.idx(pair[1])); B.needRelease = false; window.__sc2 = s.score; window.__coins2 = coins; window.__sc0 = sc0;
    return o;
  });
  await page.mouse.move(cbox.x + cbox.w * 0.5, cbox.y + cbox.h * 0.5);
  await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.score > window.__sc2 || SolScene.strikes > 0; }, null, { timeout: 120000 }).catch(function () {});
  await page.mouse.up();
  two.second = await page.evaluate(function () { var s = SolScene; return { score: s.score - window.__sc0, strikes: s.strikes, coins: s.nightCoins > window.__coins2 }; });
  check(two.first.score === 0 && two.first.state === "found" && two.first.slate === "✓" && two.first.found.length === 1 && two.first.strikes === 0 && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both right actors (the first take is marked ✓, the second, rolled with a mouse button, answers it): " + JSON.stringify(two));

  /* the difficulty: every level 2-100 harder than the one before, never easier on any setting */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.director.params, s = SolScene, out = { same: typeof s.directorParams === "function" && JSON.stringify(s.directorParams(50)) === JSON.stringify(f(50)) };
    var up = ["wander", "rollMs", "decay", "boomLow", "booms", "boomFollow", "crewSpd", "crewPair", "calls", "dutchP", "dutchDeg", "tau", "dart"], down = ["pauseMs", "box", "steady", "boomEvery", "boomWarn", "crewEvery", "arrows"];
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
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0 && ramp.keys.length === 0, "directorParams (on the def as params): every level 2-100 is harder than the one before and never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat, unchecked: ramp.keys }));
  var e = ramp.l1, z = ramp.l100;
  check(e.rollMs <= 1600 && e.box >= 0.16 && e.wander <= 20 && e.booms === 1 && e.boomWarn >= 1800 && e.boomEvery >= 14 && e.crewEvery >= 16 && e.dutchP === 0 && e.calls === 3 && e.arrows === 1 && e.tau <= 0.05,
    "level 1 is gentle: short takes, a big box, slow actors, one boom with a long warning, rare crew, no Dutch angles, arrows to the actors: " + JSON.stringify(e));
  check(z.rollMs >= 3000 && z.box <= 0.1 && z.wander >= 55 && z.booms === 2 && z.boomWarn <= 1000 && z.crewEvery <= 6.5 && z.crewPair >= 0.7 && z.dutchP >= 0.8 && z.calls === 4 && z.arrows === 0 && z.dart === 1 && z.tau >= 0.3,
    "level 100 is intense: long takes, a small box, fast darting actors, two booms, crew in pairs, Dutch angles, a heavy camera head, no arrows: " + JSON.stringify(z));

  /* levels 10, 50 and 100 play: the right actor scores; the cards say what's new */
  var l10 = await gotoLevel(10);
  var p10 = await page.evaluate(async function () {
    var s = SolScene, B = s.dr; await __dr.until(function () { return !B.trans; }, 120000); __dr.quiet(); B.P.rollMs = 900;
    var r = await __dr.take(__dr.idx(s.need[0])); if (s.need.length > 1 && !r.score) { s.iframeMs = 0; r = await __dr.take(__dr.idx(s.need[1])); }
    return { tier: s.tier, score: s.score, strikes: s.strikes };
  });
  check(l10.mode === "director" && p10.tier === 0 && p10.score === 1 && p10.strikes === 0, "level 10 plays Call the Shot and the right actor's take scores: " + JSON.stringify(p10));
  var l50 = await gotoLevel(50);
  var p50 = await page.evaluate(async function () {
    var s = SolScene, B = s.dr; await __dr.until(function () { return !B.trans; }, 120000);
    /* force a Dutch angle for the picture: the camera canted, pan and tilt on a slant */
    B.call.dutch = B.P.dutchDeg; B.rotTo = B.rot = B.P.dutchDeg * Math.PI / 180;
    var i = __dr.idx(s.need[0]); s.directorFrame(i); B.cx += 30; B.cy -= 10; s.directorClamp();
    await __dr.frames(3);
    return { tier: s.tier, dutch: B.tx.dutch.text, booms: B.P.booms, tau: B.P.tau };
  });
  await shot("director-05-dutch-50");
  check(l50.mode === "director" && p50.tier === 4 && /New this time:.*Dutch/.test(l50.card) && /DUTCH ANGLE \d+°/.test(p50.dutch) && p50.booms === 2,
    "level 50: Dutch angles (the viewfinder names the angle), two booms, and the card says what's new: " + JSON.stringify(p50));
  var l100 = await gotoLevel(100);
  var p100 = await page.evaluate(async function () {
    var s = SolScene, B = s.dr; await __dr.until(function () { return !B.trans; }, 120000);
    var o = { tier: s.tier, arrows: B.P.arrows, dart: B.P.dart };
    __dr.quiet(); B.P.rollMs = 1200;
    var r = await __dr.take(__dr.idx(s.need[0])); if (s.need.length > 1 && !r.score) { s.iframeMs = 0; r = await __dr.take(__dr.idx(s.need[1])); }
    o.score = s.score; o.strikes = s.strikes;
    return o;
  });
  check(l100.mode === "director" && p100.tier === 9 && /New this time:.*final cut/.test(l100.card) && p100.score === 1 && p100.strikes === 0 && p100.arrows === 0 && p100.dart === 1,
    "level 100 plays (the right actor's take scores) and the card says what's new: " + JSON.stringify(p100));
  /* the late picture: the game running on its own for a while at level 100 */
  await nextQuestion();
  var late = await page.evaluate(async function () {
    var s = SolScene, B = s.dr; s.iframeMs = 1e9; s.spareLives = 9;
    await __dr.until(function () { return !B.trans; }, 120000);
    /* a busy moment: rolling on a floor actor at a Dutch angle, the boom about to dip, a crew member about to walk in */
    __dr.quiet(); B.P.rollMs = 1e7;
    var fl = -1; B.actors.forEach(function (x, i) { if (!x.bal && fl < 0 && x.state === "live") fl = i; });
    B.call.dutch = -B.P.dutchDeg; B.rotTo = B.rot = B.call.dutch * Math.PI / 180;
    var sh = B.call.shot === "ELS" ? "LS" : B.call.shot; B.call.shot = sh;
    s.directorFrame(fl, sh);
    var me = B.actors[fl], other = B.actors.filter(function (a) { return a !== me; }).sort(function (u, v) { return Math.abs(u.x - me.x) - Math.abs(v.x - me.x); })[0], bm = B.booms[0];
    bm.target = other; bm.x = other.x; bm.phase = "warn"; bm.t = 0; B.P.boomWarn = 1e6;
    var cr = s.directorSpawnCrew(1, 0); cr.spd = 120; cr.x = s.directorToWorld(0, s.H * 0.8).x - 220;
    s.keys.SPACE.isDown = true;
    await __dr.until(function () { return B.prog > 0.0001 || B.rec; }, 60000);
    B.prog = 0.62; await __dr.frames(4);
    return { warn: B.warn.filter(function (t) { return t.visible; }).map(function (t) { return t.text; }), rec: B.rec, dutch: B.tx.dutch.text, actors: B.actors.length };
  });
  await shot("director-06-late-100");
  await page.evaluate(function () { SolScene.keys.SPACE.isDown = false; });
  check(late.actors >= 3 && late.rec && /DUTCH/.test(late.dutch), "level 100's picture: rolling at a Dutch angle with warnings at the edges: " + JSON.stringify(late));
  await page.evaluate(function () { SolScene.iframeMs = 0; });

  /* losing: the last life ends the level with a Retry */
  var lose = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0;
    s.answerWrong("Z", "WRONG LETTER");
    for (var w = 0; w < 1800 && !(s.ended && !document.getElementById("overlay").classList.contains("hidden")); w++) await new Promise(function (r) { setTimeout(r, 100); });
    await new Promise(function (r) { setTimeout(r, 300); });
    return { ended: s.ended, title: document.getElementById("win-title").textContent, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Call the Shot/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 200));
  await ctx.close();

  /* the 500-pixel-tall Canvas frame: the viewfinder still fits */
  var small = await browser.newContext({ viewport: { width: 1000, height: 500 } });
  await small.addInitScript(function () { window.SOL_STATE = "LIT"; });
  page = await small.newPage(); page.setDefaultTimeout(240000);
  watch(page, "500px");
  await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(900);
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.click('#mode-packs .card[data-genre="LANGUAGE"]');
  await page.click('#skill-packs .card[data-gamemode="director"]');
  await page.click("#btn-skill-start"); await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 60000 }).catch(function () {});
  for (i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  var lsm = await gotoLevel(30);
  var fit = await page.evaluate(async function () {
    var s = SolScene, B = s.dr; await __dr.until(function () { return !B.trans; }, 120000); __dr.quiet();
    s.directorFrame(__dr.idx(s.need[0])); await __dr.frames(3);
    var T = B.tx, inside = function (t) { var b = t.getBounds(); return b.x >= 0 && b.y >= 0 && b.right <= s.W && b.bottom <= s.H; };
    return { W: s.W, H: s.H, k: +B.k.toFixed(2), call: inside(T.call), shot: inside(T.shot), says: inside(T.says), status: inside(T.status), rocker: B.zb.t > B.top && B.zb.w < s.H, framed: B.subj && B.subj.letter === s.need[0] };
  });
  await page.screenshot({ path: path.join(shots, "director-07-canvas-500.png") });
  check(lsm.mode === "director" && fit.H <= 500 && fit.call && fit.shot && fit.says && fit.status && fit.rocker && fit.framed, "in a 500-pixel-tall frame the viewfinder's readouts fit and an actor can be framed: " + JSON.stringify(fit));
  await small.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
