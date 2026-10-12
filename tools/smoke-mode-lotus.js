/* Headless test for the Odyssey mode "lotus" (The Lotus-Eaters, js/mode-lotus.js): node tools/smoke-mode-lotus.js
   Serves the repository (as tools/smoke.js does), plays the dev page as the Odyssey build
   (window.SOL_STATE = "ODY" before any script) with only this mode picked, and drives the mode
   deterministically: the meadow is cleared of Lotus-Eaters, petal drifts and men, then a man, a Lotus-Eater
   or a drift is put right beside Odysseus and the keys are pressed from inside the game's own input read.
   It proves: the mode card shows on the mode screen and the Mixed rotation plays it on level 12 (the
   Lotus-Eaters' island) of the Odyssey only; taking hold of the right man and leading him onto the beach
   answers; a wrong man refuses, costs a life and is crossed out (on later men too, and grabbing him again costs
   nothing); a Lotus-Eater's touch and a petal drift make Odysseus forget (slower, the pale haze, the line) and
   cost no life; Select TWO needs both men; at level 98 a Lotus-Eater lures the man you lead away (no life) and
   he can be caught again, and the meadow has its late features; lotusParams never gets easier from level 2 to
   100; the layout works in 1000×500 and 760×500 frames; no page errors. Then, when dist/ exists
   (node tools/build-games.js), the mode runs in dist/ody and is not offered in dist/va.
   Screenshots go to tools/shots/lotus-*.png. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var root = path.join(__dirname, ".."), shots = path.join(__dirname, "shots");
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
  var errors = [];
  function watch(page) {
    page.on("response", function (r) { if (r.status() === 404) console.log("404", r.url()); });
    page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
    page.on("console", function (m) { if (m.type() === "error" || m.type() === "warning") { var t = m.text(); if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader/i.test(t)) errors.push(m.type() + ": " + t); } });
  }
  var page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  watch(page);
  var fails = [];
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png") }); }
  async function startGame(p) {
    await p.click("#btn-skill-start"); await p.waitForTimeout(400);
    if (await p.isVisible("#btn-char-confirm")) await p.evaluate(function () { setTimeout(function () { document.getElementById("btn-char-confirm").click(); }, 0); });
    await p.waitForFunction(function () { var s = window.SolScene; return !!(s && s.claim); }, null, { timeout: 90000 }).catch(function () {});
  }

  /* the dev page as the Odyssey build */
  await page.addInitScript(function () { window.SOL_STATE = "ODY"; });
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(800);
  check(await page.isVisible('#title-screen .card[data-family="ODY"]'), "the dev page plays as the Odyssey build (its title screen, the Odyssey card)");
  await page.click('#title-screen .card[data-family="ODY"]');
  await page.waitForSelector("#mode-screen:not(.hidden)");
  var card = await page.evaluate(function () {
    var c = document.querySelector('#mode-packs .card[data-gamemode="lotus"]');
    var ids = Array.prototype.map.call(document.querySelectorAll("#mode-packs .card"), function (x) { return x.getAttribute("data-gamemode"); });
    return c ? { text: c.textContent, shown: !!c.offsetParent, third: ids.indexOf("lotus") === 2, ids: ids.join(",") } : null;
  });
  await shot("lotus-01-mode-screen");
  check(card && card.shown && /The Lotus-Eaters/.test(card.text) && card.third, "the Lotus-Eaters card shows on the mode screen, third in story order: " + JSON.stringify(card));
  var rot = await page.evaluate(function () {
    var o = {}, only = SolModes.only, keep = window.SOL_STATE, n, a = [];
    SolModes.only = null;
    for (n = 1; n <= 100; n++) if ((SolModes.modeFor(n) || {}).id === "lotus") a.push(n);
    o.ody = a.join(","); o.ep = SolModes.episodeFor(12);
    delete window.SOL_STATE; a = [];
    for (n = 1; n <= 100; n++) if ((SolModes.modeFor(n) || {}).id === "lotus") a.push(n);
    o.other = a.join(",");
    window.SOL_STATE = keep;
    SolModes.only = "lotus"; a = [];
    for (n = 1; n <= 100; n++) if ((SolModes.modeFor(n) || {}).id !== "lotus") a.push(n);
    o.onlyMisses = a.length;
    SolModes.only = only;
    return o;
  });
  check(rot.ody === "12" && rot.ep === "LOTUS" && rot.other === "" && rot.onlyMisses === 0, "the Mixed rotation plays it on level 12 of the Odyssey (the Lotus-Eaters' island, asking Book 9's Lotus-Eaters questions) and never in the other builds; picked alone it plays every level: " + JSON.stringify(rot));
  await page.click('#mode-packs .card[data-gamemode="lotus"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  check(await page.evaluate(function () { return SolModes.only; }) === "lotus", "picking the card plays only The Lotus-Eaters");
  await startGame(page);
  await page.waitForTimeout(1000);
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(300); }

  async function gotoLevel(n, cardShot) {
    await page.evaluate(function (n) { var b = document.getElementById("btn-next"); b.dataset.goto = String(n); b.click(); }, n);
    await page.waitForTimeout(1500);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.claim && s.readOpen; }, n, { timeout: 15000 }).catch(function () {});
    if (cardShot) await shot(cardShot);
    var info = await page.evaluate(function () {
      var m = document.getElementById("mode-card"), s = window.SolScene;
      return { card: m && !m.classList.contains("hidden") ? m.textContent : "", act: document.getElementById("btn-action").textContent, key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier };
    });
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 5000 }).catch(function () {});
    await page.waitForTimeout(300);
    return info;
  }

  /* ── level 12, the Lotus-Eaters' island ── */
  var l12 = await gotoLevel(12, "lotus-02-card-12");
  check(l12.key === "mode" && l12.mode === "lotus" && l12.act === "GRAB" && /The Lotus-Eaters/.test(l12.card) && /rescue level/.test(l12.card) && /Controls:.*Space, GRAB/.test(l12.card) && /New this time:.*offer you the lotus/.test(l12.card),
    "level 12 runs The Lotus-Eaters in the mode scene with a GRAB button; its card gives the rules, the keys and what's new: " + JSON.stringify(l12).slice(0, 260));
  await page.waitForTimeout(1200);
  await shot("lotus-03-play-12");

  /* the drive harness, kept on the page for both runs */
  await page.evaluate(function () {
    var H = window.__lt = {};
    H.wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
    H.until = async function (f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 20000)) await H.wait(25); return f(); };
    H.hook = function () {
      var s = SolScene; H.s = s; H.S = s.lt; H.ctl = null; H.frames = 0; H.ri = s.readInput; H.picks = [];
      s.readInput = function () { H.frames++; if (H.ctl) H.ctl(); return H.ri.apply(this, arguments); };
      var oap = s.answerPick; H.oap = oap;
      s.answerPick = function (L) { var r = oap.apply(this, arguments); H.picks.push(L + "=" + r); return r; };
      s.needExtracts = 99; s.needStrikes = 99; s.tutLockUntil = 0;
    };
    H.unhook = function () { H.s.readInput = H.ri; H.s.answerPick = H.oap; H.ctl = null; };
    H.keys = function (o) { var k = H.s.keys; o = o || {}; ["LEFT", "RIGHT", "UP", "DOWN", "SPACE"].forEach(function (n) { k[n].isDown = !!o[n]; }); };
    /* one press of the action key (up for a few frames, as the first frame after the reading card never counts; down one frame, up the next) */
    H.press = async function () {
      var ph = -3; H.ctl = function () { if (ph < 0) { H.keys({}); ph++; } else if (ph === 0) { H.keys({ SPACE: true }); ph = 1; } else if (ph === 1) { H.keys({}); ph = 2; } };
      await H.until(function () { return ph >= 2; }, 5000); await H.wait(60); H.ctl = null;
    };
    /* nothing about but Odysseus, at (x, y) */
    H.quiet = function (x, y) {
      var s = H.s, S = H.S; H.keys({}); H.ctl = null;
      S.crew.forEach(function (c) { s.lotusKill(c); }); S.crew = [];
      S.eaters.forEach(function (e) { e.spr.destroy(); }); S.eaters = [];
      S.clouds.forEach(function (k) { k.spr.destroy(); }); S.clouds = [];
      S.dead = []; S.aboard = []; S.ody.lead = null; S.ody.forget = 0; S.ody.imm = 0;
      S.ody.x = x != null ? x : s.W * 0.3; S.ody.y = y != null ? y : (S.fy0 + S.fy1) / 2;
      s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s._lastHitLabel = "";
    };
    H.add = function (L, dx) { var S = H.S, c = H.s.lotusAddCrew(L, S.ody.x + (dx || -26) * S.vs, S.ody.y); c.a = 1; c.state = "eat"; c.pause = 1e9; return c; };
    H.nextQ = async function () {
      var s = H.s;
      await H.until(function () { var g = document.getElementById("read-go"); return !s._between && !!g && !!g.offsetParent; });
      var g = document.getElementById("read-go"); if (g && g.offsetParent) g.click();
      await H.until(function () { return !s.readOpen; });
    };
    H.q = function () { var s = H.s, letters = s.choiceLetters(), right = s.need[0]; s.need = [right]; return { right: right, wrongs: letters.filter(function (L) { return L !== right; }), letters: letters }; };
  });

  var run = await page.evaluate(async function () {
    var H = window.__lt; H.hook();
    var s = H.s, S = H.S, o = {};
    /* the right man: take hold of him and lead him onto the beach by the ships */
    H.quiet(); var q = H.q(), sc0 = s.score;
    var c1 = H.add(q.right);
    await H.press();
    o.right = { led: S.ody.lead === c1, state: c1.state, act: document.getElementById("btn-action").textContent };
    var sp0 = s.lotusSpeed();
    H.ctl = function () { H.keys({ RIGHT: true }); };
    await H.until(function () { return s.score > sc0 || s._between; }, 25000);
    H.ctl = null; H.keys({});
    o.right.score = s.score - sc0; o.right.strikes = s.strikes; o.right.slow = Math.round(sp0 / (205 * S.vs) * 100) / 100; o.right.x = Math.round(c1.x); o.right.boardX = Math.round(S.boardX);
    await H.nextQ();

    /* a wrong man: he refuses, a life, the letter crossed out on every man; grabbing him again costs nothing */
    H.quiet(); q = H.q();
    var w1 = H.add(q.wrongs[0]);
    await H.press();
    o.wrong = { led: !!S.ody.lead, strikes: s.strikes, label: s._lastHitLabel, mark: w1.mark, cross: w1.xm.visible, say: S.say.visible ? S.say.text : "", dead: S.dead.join("") };
    var w2 = H.add(q.wrongs[0], 26);
    o.wrong.later = { mark: w2.mark, cross: w2.xm.visible };
    await H.wait(1700); s.iframeMs = 0; var st0 = s.strikes;
    await H.press();
    o.wrong.again = { led: !!S.ody.lead, cost: s.strikes - st0 };

    /* a Lotus-Eater: she comes to offer the lotus, and Odysseus forgets (slower, the haze, the line), no life */
    H.quiet();
    var spNorm = s.lotusSpeed(), f0 = S.forgets;
    var e = s.lotusEater(S.ody.x - 120 * S.vs, S.ody.y); e.seeking = true; e.re = 1e9; e.cd = 0;
    await H.until(function () { return S.forgets > f0; }, 15000);
    await H.wait(500);
    o.eater = { forgot: S.forgets - f0, forgetMs: Math.round(S.ody.forget), strikes: s.strikes, slow: Math.round(s.lotusSpeed() / spNorm * 100) / 100, haze: Math.round(S.haze * 100) / 100, dream: S.dream.visible, cd: e.cd > 0 };
    await H.until(function () { return S.ody.forget <= 0; }, 10000);
    await H.wait(400);
    o.eater.after = { forget: S.ody.forget, imm: S.ody.imm > 0, slow: Math.round(s.lotusSpeed() / spNorm * 100) / 100 };

    /* a drift of lotus petals: the same, no life */
    H.quiet(); f0 = S.forgets;
    s.lotusCloud(S.ody.x, S.ody.y - 14 * S.vs);
    await H.until(function () { return S.forgets > f0; }, 5000);
    o.cloud = { forgot: S.forgets - f0, strikes: s.strikes, forget: Math.round(S.ody.forget) };

    /* Select TWO: the first right man is tied aboard (ticked, also on later men); the second answers */
    H.quiet(); await H.until(function () { return S.haze < 0.05; }, 5000);
    var letters = s.choiceLetters(); s.extracted = []; var two = letters.slice(0, 2); s.need = two.slice();
    sc0 = s.score; var coins = s.nightCoins;
    var t1 = H.add(two[0]);
    await H.press();
    H.ctl = function () { H.keys({ RIGHT: true }); };
    await H.until(function () { return s.extracted.length === 1; }, 25000);
    H.ctl = null; H.keys({});
    var t1b = H.add(two[0], 30);
    o.two = { first: s.score - sc0, found: s.extracted.join(""), state: t1.state, later: t1b.mark, aboard: S.aboardTxt.text, strikes: s.strikes };
    S.ody.x = s.W * 0.3; var t2 = H.add(two[1]);
    await H.press();
    o.two.led2 = S.ody.lead === t2;
    H.ctl = function () { H.keys({ RIGHT: true }); };
    await H.until(function () { return s.score > sc0 || s._between; }, 25000);
    H.ctl = null; H.keys({});
    o.two.second = s.score - sc0; o.two.coins = s.nightCoins > coins;
    await H.nextQ();
    o.picks = H.picks.join(" ");
    H.unhook();
    return o;
  }).catch(function (e) { return { err: String(e) }; });
  console.log("lotus", JSON.stringify(run));
  if (run.err) check(false, "the level 12 run: " + run.err);
  else {
    check(run.right.led && run.right.state === "led" && run.right.act === "LET GO" && run.right.score === 1 && run.right.strikes === 0 && run.right.slow < 0.75,
      "the right man: GRAB takes hold of him (the button reads LET GO), he follows slowly, and leading him onto the beach by the ships answers: " + JSON.stringify(run.right));
    check(!run.wrong.led && run.wrong.strikes === 1 && /WRONG LETTER/.test(run.wrong.label) && run.wrong.mark === "wrong" && run.wrong.cross && /stay here forever/.test(run.wrong.say),
      "a wrong man refuses (\"I will stay here forever!\"), costs a life and is crossed out: " + JSON.stringify(run.wrong));
    check(run.wrong.later.mark === "wrong" && run.wrong.later.cross && !run.wrong.again.led && run.wrong.again.cost === 0, "the wrong letter is crossed out on later men too, and grabbing one again costs nothing: " + JSON.stringify({ later: run.wrong.later, again: run.wrong.again }));
    check(run.eater.forgot === 1 && run.eater.strikes === 0 && run.eater.slow < 0.6 && run.eater.haze > 0.5 && run.eater.dream && run.eater.cd && run.eater.after.forget === 0 && run.eater.after.slow === 1,
      "a Lotus-Eater comes to offer the lotus: Odysseus forgets (slower, the pale haze, \"the sweet lotus…\"), no life, then his head clears: " + JSON.stringify(run.eater));
    check(run.cloud.forgot === 1 && run.cloud.strikes === 0 && run.cloud.forget > 0, "walking through a drift of lotus petals makes him forget too, no life: " + JSON.stringify(run.cloud));
    check(run.two.first === 0 && run.two.found.length === 1 && run.two.later === "right" && /✓/.test(run.two.aboard) && run.two.strikes === 0 && run.two.led2 && run.two.second === 1 && run.two.coins,
      "Select TWO needs both men: the first is tied aboard (ticked, on later men too), the second answers and pays coins: " + JSON.stringify(run.two));
  }

  /* a picture of the lotus dream: a Lotus-Eater beside Odysseus, a man on the rope */
  if (!run.err) {
    await page.evaluate(async function () {
      var H = window.__lt; H.hook(); var s = H.s, S = H.S;
      H.quiet(s.W * 0.42); var q = H.q(), c = H.add(q.right); c.pause = 1e9;
      await H.press();
      H.add(q.wrongs[0], 90).pause = 1e9; H.add(q.wrongs[1] || q.wrongs[0], -110);
      var e = s.lotusEater(S.ody.x + 30 * S.vs, S.ody.y + 6 * S.vs); e.re = 1e9;
      s.lotusCloud(S.ody.x - 200 * S.vs, S.ody.y - 90 * S.vs).vx = 0;
      await H.until(function () { return S.haze > 0.9; }, 4000);
      H.unhook();
    });
    await shot("lotus-03b-forget-12");
  }

  /* the difficulty: one curve, every level 2-100 harder than the one before and never easier in any way */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.lotus.params, s = SolScene, out = { same: typeof f === "function" && JSON.stringify(f(57)) === JSON.stringify(s.lotusParams(57)) };
    var up = ["extra", "wanderSp", "pull", "eaters", "eaterSp", "seek", "forgetMs", "clouds", "cloudR", "cloudSp", "lureR", "lureSp"];
    var down = ["leadK", "eaterCd", "forgetK", "lureMs", "windEvery"];
    var easier = [], flat = [], n, keys = Object.keys(f(50));
    out.covered = keys.filter(function (k) { return up.indexOf(k) === -1 && down.indexOf(k) === -1; });
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat;
    function pick(p) { var o = {}; Object.keys(p).forEach(function (k) { o[k] = Math.round(p[k] * 1000) / 1000; }); return o; }
    out.l2 = pick(f(2)); out.l12 = pick(f(12)); out.l99 = pick(f(99));
    return out;
  });
  console.log("ramp", JSON.stringify(ramp));
  check(ramp.same && ramp.covered.length === 0 && ramp.easier.length === 0 && ramp.flat.length === 0, "lotusParams (the def's params): every level 2-100 is harder than the one before and never easier in any way: " + JSON.stringify({ same: ramp.same, covered: ramp.covered, easier: ramp.easier, flat: ramp.flat }));
  var a12 = ramp.l12, a99 = ramp.l99, a2 = ramp.l2;
  check(a12.eaters === 1 && a12.seek <= 0.25 && a12.clouds === 0 && a12.lureMs > 1e8 && a12.extra === 0 && a12.leadK >= 0.68 && a12.pull <= 12 && a12.forgetMs <= 1700,
    "level 12 (the island it belongs to) is fair: one slow Lotus-Eater who seldom comes over, no petal drifts, no luring, a man per letter, an easy lead: " + JSON.stringify(a12));
  check(a99.eaters === 4 && a99.seek >= 0.75 && a99.clouds === 5 && a99.lureMs <= 500 && a99.extra === 3 && a99.leadK <= 0.51 && a99.wanderSp >= 2.5 * a2.wanderSp && a99.eaterSp >= 2.5 * a2.eaterSp && a99.windEvery < 4000 && a99.forgetMs >= 2900,
    "level 99 is intense: four quick Lotus-Eaters who keep coming, five drifts the wind turns, luring in under half a second, three extra men, a slow lead: " + JSON.stringify(a99));

  /* ── level 98: the late features, and a Lotus-Eater lures the man you lead away ── */
  var l98 = await gotoLevel(98, "lotus-04-card-98");
  await page.waitForTimeout(1500);
  await shot("lotus-05-play-98");
  var late = await page.evaluate(async function () {
    var H = window.__lt; H.hook();
    var s = H.s, S = H.S, o = {};
    o.feat = { eaters: S.eaters.length, clouds: S.clouds.length, crew: S.crew.length, letters: s.choiceLetters().length, wind: S.P.windEvery < 1e8, lure: S.P.lureMs };
    H.quiet(); var q = H.q();
    var c = H.add(q.right);
    await H.press();
    o.led = S.ody.lead === c;
    var e = s.lotusEater(c.x - 20 * S.vs, c.y + 4 * S.vs); e.re = 1e9; e.cd = 0; e.seeking = false; e.tx = e.x; e.ty = e.y;
    var lures = S.lures;
    await H.until(function () { return c.lureT > 0; }, 3000);
    o.ring = c.lureT > 0 && S.lureMark.visible;
    await H.until(function () { return S.lures > lures; }, 5000);
    o.lured = { state: c.state, lead: !!S.ody.lead, strikes: s.strikes, act: document.getElementById("btn-action").textContent };
    /* catch him again: walk up and grab */
    e.spr.destroy(); S.eaters = [];
    await H.until(function () { return c.state !== "lured"; }, 5000);
    S.ody.x = c.x + 20 * S.vs; S.ody.y = c.y;
    await H.press();
    o.again = { led: S.ody.lead === c, strikes: s.strikes };
    H.unhook();
    return o;
  }).catch(function (e) { return { err: String(e) }; });
  console.log("late", JSON.stringify(late));
  check(l98.tier === 9 && /New this time:.*Ithaca is calling/.test(l98.card), "level 98's card says what's new: " + JSON.stringify(l98).slice(0, 200));
  check(!late.err && late.feat.eaters === 4 && late.feat.clouds === 5 && late.feat.crew === late.feat.letters + 3 && late.feat.wind && late.feat.lure < 500,
    "level 98 has its late features: four Lotus-Eaters, five petal drifts, three extra dazed men, the turning wind, quick luring: " + JSON.stringify(late.feat || late));
  check(!late.err && late.led && late.ring && late.lured.state === "lured" && !late.lured.lead && late.lured.strikes === 0 && late.lured.act === "GRAB" && late.again.led && late.again.strikes === 0,
    "a Lotus-Eater lures the man you lead away (a red ring first, no life), and he can be caught again: " + JSON.stringify(late));

  /* short frames: the Canvas embed is 500 px tall */
  var frames = {};
  for (var fw of [1000, 760]) {
    await page.setViewportSize({ width: fw, height: 500 });
    await page.waitForTimeout(1200);
    frames[fw] = await page.evaluate(function () {
      var s = SolScene, S = s.lt, o = S.ody, inside = function (x, y) { return x >= 0 && x <= s.W && y >= 0 && y <= s.H; };
      return { W: s.W, H: s.H, fps: Math.round(s.game.loop.actualFps), vs: Math.round(S.vs * 100) / 100, ody: inside(o.x, o.y), crew: S.crew.every(function (c) { return c.state === "gone" || inside(c.x, c.y); }),
        ships: S.ships.every(function (sh) { return sh.x - sh.displayHeight / 2 < s.W && sh.y > 0 && sh.y < s.H; }), board: S.boardX < S.seaX && S.sandX > s.W * 0.5, plants: S.plants.length };
    });
    await shot("lotus-0" + (fw === 1000 ? 6 : 7) + "-frame-" + fw + "x500");
  }
  console.log("frames", JSON.stringify(frames));
  check([1000, 760].every(function (k) { var f = frames[k]; return f && f.ody && f.crew && f.ships && f.board && f.plants >= 4; }), "the layout works in 1000×500 and 760×500 frames (everyone inside, the ships and the beach in view, lotus bushes in the meadow): " + JSON.stringify(frames));
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.waitForTimeout(600);

  console.log("errors (dev page):", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors on the dev page");
  await page.close();

  /* ── the builds (node tools/build-games.js): it runs in dist/ody, and dist/va does not offer it ── */
  var distRoot = path.join(root, "dist");
  if (!fs.existsSync(path.join(distRoot, "ody", "index.html")) || !fs.existsSync(path.join(distRoot, "va", "index.html"))) console.log("skip  dist/ody and dist/va (run node tools/build-games.js)");
  else {
    var e0 = errors.length;
    root = path.join(distRoot, "ody");
    var dp = await browser.newPage({ viewport: { width: 1366, height: 768 } });
    watch(dp);
    await dp.goto(base + "index.html", { waitUntil: "load" });
    await dp.evaluate(function () { localStorage.clear(); });
    await dp.reload({ waitUntil: "load" }); await dp.waitForTimeout(800);
    await dp.click('#title-screen .card[data-family="ODY"]');
    await dp.waitForSelector("#mode-screen:not(.hidden)");
    var oc = await dp.evaluate(function () { var c = document.querySelector('#mode-packs .card[data-gamemode="lotus"]'); return { state: window.SOL_STATE, card: !!c && !!c.offsetParent && /The Lotus-Eaters/.test(c.textContent) }; });
    await dp.click('#mode-packs .card[data-gamemode="lotus"]');
    await dp.waitForSelector("#skill-screen:not(.hidden)");
    await startGame(dp);
    await dp.waitForFunction(function () { var s = window.SolScene; return s && s.claim && s.readOpen; }, null, { timeout: 30000 }).catch(function () {});
    for (var t = 0; t < 12; t++) { if (await dp.isVisible("#tut-skip")) { await dp.click("#tut-skip"); break; } if (await dp.isVisible("#read-go")) break; await dp.waitForTimeout(300); }
    if (await dp.isVisible("#read-go")) await dp.click("#read-go");
    await dp.waitForTimeout(400);
    var t0 = await dp.evaluate(function () { var s = window.SolScene; return s && s.lt ? s.lt.t : -1; });
    await dp.waitForFunction(function (t0) { var s = window.SolScene; return s && s.lt && s.lt.t > t0 + 0.6; }, t0, { timeout: 60000 }).catch(function () {});
    var orun = await dp.evaluate(function () { var s = window.SolScene; return { mode: s && s.mode && s.mode.id, t: s && s.lt ? Math.round(s.lt.t * 10) / 10 : -1, crew: s && s.lt ? s.lt.crew.length : 0, act: document.getElementById("btn-action").textContent, fps: s && s.game ? Math.round(s.game.loop.actualFps) : -1 }; });
    orun.ran = orun.t > t0 + 0.5;   /* game time: a busy headless machine runs the game far slower than the clock */
    await dp.screenshot({ path: path.join(shots, "lotus-08-dist-ody.png") });
    console.log("dist/ody", JSON.stringify({ card: oc, run: orun }));
    check(oc.state === "ODY" && oc.card && orun.mode === "lotus" && orun.ran && orun.crew >= 3 && orun.act === "GRAB", "dist/ody: the Lotus-Eaters card is offered and the mode runs: " + JSON.stringify({ card: oc, run: orun }));
    await dp.close();
    root = path.join(distRoot, "va");
    var vp = await browser.newPage({ viewport: { width: 1366, height: 768 } });
    watch(vp);
    await vp.goto(base + "index.html", { waitUntil: "load" });
    await vp.evaluate(function () { localStorage.clear(); localStorage.setItem("afterHours.v1.gameMode", "lotus"); });
    await vp.reload({ waitUntil: "load" }); await vp.waitForTimeout(800);
    await vp.click('#title-screen .card[data-family="G9"]');
    await vp.waitForSelector("#mode-screen:not(.hidden)");
    var vc = await vp.evaluate(function () {
      var a = []; for (var n = 1; n <= 100; n++) if ((SolModes.modeFor(n) || {}).id === "lotus") a.push(n);
      var sel = document.querySelector("#mode-packs .card.selected");
      return { state: window.SOL_STATE, cards: Array.prototype.map.call(document.querySelectorAll("#mode-packs .card"), function (c) { return c.getAttribute("data-gamemode"); }).join(","), lotusLevels: a.join(","), only: SolModes.only, selected: sel ? sel.getAttribute("data-gamemode") : "" };
    });
    console.log("dist/va", JSON.stringify(vc));
    check(vc.state === "VA" && vc.cards.indexOf("lotus") === -1 && vc.cards.indexOf("ALL") !== -1 && vc.lotusLevels === "" && !vc.only, "dist/va: the mode screen does not offer The Lotus-Eaters, a saved pick of it falls back to All, and no level plays it: " + JSON.stringify(vc));
    await vp.close();
    root = path.join(__dirname, "..");
    console.log("errors (dist):", errors.length > e0 ? errors.slice(e0) : "none");
    check(errors.length === e0, "no page errors in dist/ody and dist/va");
  }

  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
