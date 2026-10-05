/* Headless test for the Odyssey mode "raft" (Calypso's Raft, js/mode-raft.js): node tools/smoke-mode-raft.js
   Serves the repository (as tools/smoke.js does), plays the dev page as the Odyssey build
   (window.SOL_STATE = "ODY" before any script) with only this mode picked, and drives the mode
   deterministically: the sea is made flat and the random hazards are frozen, then letters, rocks,
   Poseidon's waves and Ino's veil are put on the sea right in front of the raft.
   It proves: the mode card shows on the mode screen; the right letter scores; a wrong letter costs a
   life and is crossed out (also on later buoys); a hop clears a wrong buoy; stars need a hop and
   sunken buoys a dive; Poseidon's wave is telegraphed, swamps a raft that is not on top of it (a life)
   and is ridden by a raft that is; rocks cost a life and can be jumped; Ino's veil takes a hit;
   Select TWO needs both letters; raftParams never gets easier from level 2 to 100 and is much harder
   at 99; no page errors. Then, when dist/ exists (node tools/build-games.js), the mode runs in
   dist/ody and is not offered in dist/va. Screenshots go to tools/shots/raft-*.png. */
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
  /* New game, then Play on the character picker: the click that boots the game is sent from inside the page,
     since booting can keep a busy machine's page from answering a mouse click for a long while */
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
    var c = document.querySelector('#mode-packs .card[data-gamemode="raft"]');
    return c ? { text: c.textContent, shown: !!c.offsetParent } : null;
  });
  await shot("raft-01-mode-screen");
  check(card && card.shown && /Calypso's Raft/.test(card.text), "the Calypso's Raft card shows on the mode screen: " + JSON.stringify(card));
  /* the rotation: the Odyssey build's Mixed rotation places it; the other builds never do; picked alone it plays every level */
  var rot = await page.evaluate(function () {
    var o = {}, only = SolModes.only, keep = window.SOL_STATE, n, a = [];
    SolModes.only = null;
    for (n = 1; n <= 100; n++) if ((SolModes.modeFor(n) || {}).id === "raft") a.push(n);
    o.ody = a.join(",");
    delete window.SOL_STATE; a = [];
    for (n = 1; n <= 100; n++) if ((SolModes.modeFor(n) || {}).id === "raft") a.push(n);
    o.other = a.join(",");
    window.SOL_STATE = keep;
    SolModes.only = "raft"; a = [];
    for (n = 1; n <= 100; n++) if ((SolModes.modeFor(n) || {}).id !== "raft") a.push(n);
    o.onlyMisses = a.length;
    SolModes.only = only;
    return o;
  });
  check(rot.ody === "34,82,92" && rot.other === "" && rot.onlyMisses === 0, "the Mixed rotation plays it on levels 34, 82 and 92 of the Odyssey and never in the other builds; picked alone it plays every level: " + JSON.stringify(rot));
  await page.click('#mode-packs .card[data-gamemode="raft"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  check(await page.evaluate(function () { return SolModes.only; }) === "raft", "picking the card plays only Calypso's Raft");
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

  /* ── level 34, the mode's first island (Aeolia, island 4) ── */
  var l34 = await gotoLevel(34, "raft-02-card-34");
  check(l34.key === "mode" && l34.mode === "raft" && l34.act === "LIFT" && /Calypso's Raft/.test(l34.card) && /wave-riding level/.test(l34.card) && /Controls:.*▲, W, Space, LIFT/.test(l34.card) && /New this time:.*Squalls/.test(l34.card),
    "level 34 runs Calypso's Raft in the mode scene with a LIFT button; its card gives the rules, the keys and what's new: " + JSON.stringify(l34).slice(0, 260));

  var run = await page.evaluate(async function () {
    var s = SolScene, S = s.rf, R = S.raft, o = {};
    function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
    /* wait on the game, not the clock (a busy machine runs the game slower than real time) */
    async function until(f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 20000)) await wait(25); return f(); }
    function keys(up, down) { s.keys.UP.isDown = !!up; s.keys.DOWN.isDown = !!down; }
    /* the keys are pressed from inside the game's own input read, frame by frame (no polling lag) */
    var ctl = null, frames = 0, ri = s.readInput;
    s.readInput = function () { frames++; if (ctl) ctl(); return ri.apply(this, arguments); };
    function drive(f) { ctl = f; }
    /* a log of the answers the mode reports, to read back if a check fails */
    var picks = [], oap = s.answerPick;
    s.answerPick = function (L) { var r = oap.apply(this, arguments); picks.push(L + "=" + r + "@" + frames); return r; };
    function boxR() { return S.rx + S.box.r * S.RS; }
    function boxL() { return S.rx + S.box.l * S.RS; }
    s.needExtracts = 99; s.needStrikes = 99; s.tutLockUntil = 0;
    /* a flat sea, nothing random coming, no lives in hand */
    function quiet() {
      keys(false, false);
      S.breakCd = 1e9; S.breakers.forEach(function (b) { b.curl.destroy(); }); S.breakers = [];
      S.plans = []; S.planU = 1e12;
      S.letters.forEach(function (x) { s.raftFree(x); }); S.letters = [];
      S.rocks.forEach(function (k) { k.spr.destroy(); }); S.rocks = [];
      if (S.veil) { S.veil.spr.destroy(); S.veil = null; }
      S.hasVeil = false; S.veilDue = false; S.veilCd = 1e9;
      S.sq.on = false; S.sq.lvl = 0; S.sq.next = 1e9; S.gu.state = "calm"; S.gu.next = 1e9;
      S.segs.forEach(function (g) { g.h = 0; }); S.P.waveMin = 0; S.P.waveMax = 0;
      S.dead = []; R.tumble = 0; R.air = false; R.vy = 0; R.dip = 0; R.y = s.raftSurf(S.rx); R.lastSy = R.y; ctl = null;
      s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s._lastHitLabel = "";
    }
    /* the next question's reading pop-up: close it so the level runs on */
    async function nextQ() {
      await until(function () { var g = document.getElementById("read-go"); return !s._between && !!g && !!g.offsetParent; });
      var g = document.getElementById("read-go"); if (g && g.offsetParent) g.click();
      await until(function () { return !s.readOpen; });
    }
    function add(L, kind, d) { return s.raftAddLetter(L, kind, S.cam + S.rx + (d || 260)); }
    function passed(x) { return x.x + (x.r || 0) < boxL() - 4; }
    async function past(x) { await until(function () { return x.touched || passed(x) || s._between; }); }
    quiet();
    await until(function () { return Math.abs(R.y - S.seaY) < 1 && !R.air; });
    var letters = s.choiceLetters(), right = s.need[0], wrongs = letters.filter(function (L) { return s.need.indexOf(L) === -1; });
    var wrong = wrongs[0], wrong2 = wrongs[1] || wrongs[0];
    s.need = [right];
    o.letters = letters.join("");

    /* the right letter on a buoy: let the waves carry the raft into it */
    var sc0 = s.score, b1 = add(right, "buoy");
    await past(b1);
    o.right = { touched: b1.touched, score: s.score - sc0, strikes: s.strikes };
    await nextQ(); quiet();

    /* a wrong letter: a life, and it is crossed out, on this buoy and on the later ones */
    right = s.need[0]; letters = s.choiceLetters(); wrongs = letters.filter(function (L) { return s.need.indexOf(L) === -1; }); wrong = wrongs[0]; wrong2 = wrongs[1] || wrongs[0];
    s.need = [right];
    var w1 = add(wrong, "buoy");
    await past(w1);
    o.wrong = { touched: w1.touched, strikes: s.strikes, label: s._lastHitLabel, state: w1.state, cross: w1.xm.visible, dead: S.dead.slice() };
    var w2 = add(wrong, "buoy", 200);
    o.wrong.later = { state: w2.state, cross: w2.xm.visible };
    var st0 = s.strikes;
    await past(w2);
    o.wrong.laterTouched = w2.touched; o.wrong.laterCost = s.strikes - st0;
    /* the queue sends crossed-out letters too (crossed out), but never a found one */
    var sent = {}; for (var q = 0; q < letters.length * 3; q++) sent[s.raftNextLetter()] = 1;
    o.wrong.queue = Object.keys(sent).sort().join("");

    /* a hop (▲ held) clears a wrong buoy */
    quiet();
    var h1 = add(wrong2, "buoy", 300), hops0 = S.hops, f0 = frames;
    drive(function () { keys(h1.x - h1.r - boxR() <= 40 && !passed(h1), false); });
    await until(function () { return h1.touched || passed(h1); });
    o.hop = { touched: h1.touched, strikes: s.strikes, hops: S.hops - hops0, frames: frames - f0 };

    /* a star: out of reach unless you hop; the right one answers */
    quiet();
    var s1 = add(wrong2, "star", 300);
    await past(s1);
    o.starSkip = { touched: s1.touched, strikes: s.strikes };
    quiet(); sc0 = s.score;
    var s2 = add(right, "star", 300); f0 = frames;
    drive(function () { keys(s2.x - s2.r - boxR() <= 60 && !s2.touched, false); });
    await past(s2);
    o.star = { touched: s2.touched, score: s.score - sc0, strikes: s.strikes, frames: frames - f0, y0: Math.round(s2.y0), seaY: Math.round(S.seaY) };
    await nextQ(); quiet();

    /* a sunken buoy: the raft sails over it unless it dives; the right one answers */
    right = s.need[0]; letters = s.choiceLetters(); wrongs = letters.filter(function (L) { return s.need.indexOf(L) === -1; }); wrong = wrongs[0];
    s.need = [right];
    var d1 = add(wrong, "deep");
    await past(d1);
    o.deepSkip = { touched: d1.touched, strikes: s.strikes };
    quiet(); sc0 = s.score;
    var d2 = add(right, "deep"), low = ""; f0 = frames;
    drive(function () { keys(false, true); if (R.spr.texture.key === "md-raft-raft-2") low = R.spr.texture.key; });
    await past(d2);
    o.deep = { touched: d2.touched, score: s.score - sc0, strikes: s.strikes, lowered: low, frames: frames - f0 };
    await nextQ(); quiet();

    /* Poseidon's wave: first a dark swell and a rumble on the right (it does not move yet), then it rolls in */
    var bw = s.raftBreaker(0);
    await until(function () { return bw.t >= 300 || bw.state !== "warn"; });
    o.warn = { state: bw.state, label: S.warnText.visible, x: Math.round(bw.x), W: s.W, rising: bw.A > 0 && bw.A < bw.Amax };
    await until(function () { return bw.state === "run"; });
    o.warn.after = bw.state;
    /* not on top of it: swamped, a life */
    quiet();
    function wave() { var b = s.raftBreaker(0); b.state = "run"; b.t = 900; b.x = S.rx + 420; return b; }
    var bs = wave();
    await until(function () { return bs.checked; });
    o.swamp = { strikes: s.strikes, label: s._lastHitLabel, tumble: R.tumble > 0 };
    await until(function () { return R.tumble <= 0 && S.breakers.length === 0; });
    o.swamp.back = R.tumble <= 0 && !isNaN(R.y);
    /* holding ▲ as it arrives: on top of it, no life */
    quiet();
    var rides = S.rides, br = wave();
    drive(function () { keys(true, false); });
    await until(function () { return br.checked; });
    drive(null); keys(false, false);
    o.ride = { strikes: s.strikes, rides: S.rides - rides };
    await until(function () { return S.breakers.length === 0; });

    /* a rock: a life; a hop clears it */
    quiet();
    s.raftSpawn({ u: S.cam + S.rx + 300, kind: "rock" });
    var k1 = S.rocks[S.rocks.length - 1];
    await until(function () { return k1.hit || k1.u - S.cam + k1.hw < boxL() - 4; });
    o.rock = { hit: k1.hit, strikes: s.strikes, label: s._lastHitLabel };
    quiet();
    s.raftSpawn({ u: S.cam + S.rx + 320, kind: "rock" });
    var k2 = S.rocks[S.rocks.length - 1];
    drive(function () { var kx = k2.u - S.cam; keys(kx - k2.hw - boxR() <= 40 && kx + k2.hw >= boxL() - 4, false); });
    await until(function () { return k2.hit || k2.u - S.cam + k2.hw < boxL() - 4; });
    drive(null); keys(false, false);
    o.rockHop = { hit: k2.hit, strikes: s.strikes };

    /* Ino's veil: sail into it, and it takes the next hit */
    quiet();
    s.raftSpawn({ u: S.cam + S.rx + 240, kind: "veil" });
    await until(function () { return S.hasVeil || !S.veil; });
    await until(function () { return S.mastVeil.visible; }, 3000);
    o.veil = { got: S.hasVeil, onMast: S.mastVeil.visible };
    var bv = wave();
    await until(function () { return bv.checked; });
    o.veil.strikes = s.strikes; o.veil.gone = !S.hasVeil; o.veil.tag = s.bigTag.text;

    /* one more press of ▲ in the air lifts the raft once more, and only once a flight */
    quiet();
    var l0 = S.lifts || 0, ph = 0, vyAfter = 0;
    drive(function () {
      if (ph === 0) { keys(true, false); if (R.air) ph = 1; }
      else if (ph === 1) { keys(false, false); if (R.vy > 0) ph = 2; }
      else if (ph === 2) { keys(true, false); ph = 3; }
      else if (ph === 3) { keys(false, false); vyAfter = R.vy; ph = 4; }
      else if (ph === 4) { keys(true, false); ph = 5; }
      else { keys(false, false); ph = 6; }
    });
    await until(function () { return ph >= 6; });
    await until(function () { return !R.air; });
    o.airLift = { lifts: (S.lifts || 0) - l0, vyAfter: Math.round(vyAfter) };

    /* a squall: the stars go out under storm clouds and the sea goes dark round a pool of light; lightning lights it */
    quiet();
    S.P.dark = Math.max(S.P.dark, 0.6); S.P.squallMs = 1e9; S.lightCd = 1e9; S.sq.t = 0; S.sq.next = 0;
    await until(function () { return S.sq.lvl >= 0.95; });
    o.squall = { shown: S.dark.visible, dark: Math.round(S.dark.alpha * 100) / 100, stars: Math.round(S.sky.alpha * 100) / 100, clouds: Math.round(S.cloud.alpha * 100) / 100 };
    S.lightCd = 0;
    await until(function () { return S.flash > 0.6; }, 5000);
    o.squall.lit = Math.round(S.dark.alpha * 100) / 100;
    quiet();

    /* Select TWO: the first right letter is half the answer (marked found, also on later buoys); the second answers it */
    quiet();
    letters = s.choiceLetters(); s.extracted = []; var two = letters.slice(0, 2); s.need = two.slice();
    sc0 = s.score; var coins = s.nightCoins;
    var t1 = add(two[0], "buoy");
    await past(t1);
    var t1b = add(two[0], "buoy", 200);
    o.two = { first: s.score - sc0, found: s.extracted.join(""), mark: t1.state, later: t1b.state, strikes: s.strikes };
    await past(t1b);
    o.two.laterStrikes = s.strikes;
    quiet();
    var t2 = add(two[1], "buoy");
    await past(t2);
    o.two.second = s.score - sc0; o.two.coins = s.nightCoins > coins;
    await nextQ(); quiet();
    s.readInput = ri;
    o.frames = frames; o.picks = picks.join(" ");
    s.answerPick = oap;
    return o;
  });
  console.log("raft", JSON.stringify(run));
  check(run.right.touched && run.right.score === 1 && run.right.strikes === 0, "the right letter: the waves carry the raft into its buoy and it answers the question: " + JSON.stringify(run.right));
  check(run.wrong.touched && run.wrong.strikes === 1 && /WRONG LETTER/.test(run.wrong.label) && run.wrong.state === "wrong" && run.wrong.cross, "a wrong letter costs a life and is crossed out: " + JSON.stringify(run.wrong));
  check(run.wrong.later.state === "wrong" && run.wrong.later.cross && run.wrong.laterTouched && run.wrong.laterCost === 0 && run.wrong.queue.length === run.letters.length, "the wrong letter is crossed out on later buoys too, and touching it again costs nothing: " + JSON.stringify(run.wrong.later) + " queue " + run.wrong.queue);
  check(!run.hop.touched && run.hop.strikes === 0 && run.hop.hops > 0, "holding ▲ hops the raft over a wrong buoy: " + JSON.stringify(run.hop));
  check(!run.starSkip.touched && run.starSkip.strikes === 0 && run.star.touched && run.star.score === 1 && run.star.strikes === 0, "a star hangs out of reach unless you hop; hopping to the right one answers: " + JSON.stringify({ skip: run.starSkip, star: run.star }));
  check(!run.deepSkip.touched && run.deepSkip.strikes === 0 && run.deep.touched && run.deep.score === 1 && run.deep.lowered === "md-raft-raft-2", "a sunken buoy: the raft sails over it unless it dives (▼, sail lowered); diving to the right one answers: " + JSON.stringify({ skip: run.deepSkip, deep: run.deep }));
  check(run.warn.state === "warn" && run.warn.label && run.warn.x === run.warn.W + 60 && run.warn.rising && run.warn.after === "run", "Poseidon's wave is telegraphed: a dark swell rises at the right edge with a warning before it rolls in: " + JSON.stringify(run.warn));
  check(run.swamp.strikes === 1 && /SWAMPED/.test(run.swamp.label) && run.swamp.tumble && run.swamp.back, "a raft that is not on top of Poseidon's wave is swamped: a life: " + JSON.stringify(run.swamp));
  check(run.ride.strikes === 0 && run.ride.rides === 1, "holding ▲ as the wave arrives rides on top of it, no life: " + JSON.stringify(run.ride));
  check(run.rock.hit && run.rock.strikes === 1 && /ROCKS/.test(run.rock.label) && !run.rockHop.hit && run.rockHop.strikes === 0, "a rock costs a life; a hop clears it: " + JSON.stringify({ rock: run.rock, hop: run.rockHop }));
  check(run.veil.got && run.veil.onMast && run.veil.strikes === 0 && run.veil.gone && /VEIL/.test(run.veil.tag), "Ino's veil: sailing into it puts it on the mast, and it takes the next hit: " + JSON.stringify(run.veil));
  check(run.airLift.lifts === 1 && run.airLift.vyAfter < 0, "pressing ▲ again in the air lifts the raft once more (once a flight): " + JSON.stringify(run.airLift));
  check(run.squall.shown && run.squall.dark >= 0.4 && run.squall.stars <= 0.2 && run.squall.clouds >= 0.9 && run.squall.lit < run.squall.dark * 0.5, "a squall hides the stars and darkens the sea round a pool of light; lightning lights it up: " + JSON.stringify(run.squall));
  check(run.two.first === 0 && run.two.found.length === 1 && run.two.mark === "right" && run.two.later === "right" && run.two.strikes === 0 && run.two.laterStrikes === 0 && run.two.second === 1 && run.two.coins,
    "Select TWO needs both: the first right letter is marked found (on later buoys too), the second answers and pays coins: " + JSON.stringify(run.two));

  /* the difficulty: one curve, every level 2-100 at least as hard as the one before, much harder at 99 */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.raft.params, s = SolScene, out = { same: typeof f === "function" && JSON.stringify(f(57)) === JSON.stringify(s.raftParams(57)) };
    var up = ["scroll", "waveMin", "waveMax", "steep", "deep", "clear", "breakSp", "breakH", "double", "rockP", "rockH", "rockPair", "dark", "squallMs", "lightMs", "gust", "veilMs"];
    var down = ["lenMin", "lenMax", "gap", "breakEvery", "breakWarn", "calmMs", "seeR", "gustEvery", "conflict"];
    var easier = [], flat = [], n, keys = Object.keys(f(50));
    out.covered = keys.filter(function (k) { return up.indexOf(k) === -1 && down.indexOf(k) === -1; });
    for (n = 1; n < 100; n++) {
      var a = f(n), b = f(n + 1), harder = false, worse = false;
      up.forEach(function (k) { if (b[k] > a[k] + 1e-9) harder = true; if (b[k] < a[k] - 1e-9) worse = true; });
      down.forEach(function (k) { if (b[k] < a[k] - 1e-9) harder = true; if (b[k] > a[k] + 1e-9) worse = true; });
      if (worse) easier.push(n + 1); if (!harder) flat.push(n + 1);
    }
    out.easier = easier; out.flat = flat;
    function pick(p) { var o = {}; ["scroll", "waveMax", "gap", "deep", "clear", "breakEvery", "breakWarn", "rockP", "dark", "seeR", "gust"].forEach(function (k) { o[k] = Math.round(p[k] * 1000) / 1000; }); return o; }
    out.l2 = pick(f(2)); out.l34 = pick(f(34)); out.l50 = pick(f(50)); out.l99 = pick(f(99));
    return out;
  });
  console.log("ramp", JSON.stringify(ramp));
  check(ramp.same && ramp.covered.length === 0 && ramp.easier.length === 0 && ramp.flat.length === 0, "raftParams (the def's params): every level 2-100 is harder than the one before and never easier in any way: " + JSON.stringify({ same: ramp.same, covered: ramp.covered, easier: ramp.easier, flat: ramp.flat }));
  var a34 = ramp.l34, a99 = ramp.l99, a2 = ramp.l2;
  check(a34.breakWarn >= 1500 && a34.breakEvery >= 8500 && a34.gap >= 360 && a34.dark <= 0.5 && a34.seeR >= 340 && a34.rockP <= 0.3 && a34.gust === 0,
    "level 34 (the first island it comes to) is fair: long warnings, waves 9 s apart, letters 2-3 s apart, light squalls, few rocks, no gusts: " + JSON.stringify(a34));
  check(a99.scroll >= 2.3 * a2.scroll && a99.breakEvery <= 0.25 * a2.breakEvery && a99.breakWarn <= 700 && a99.gap <= 0.65 * a2.gap && a99.dark >= 0.85 && a99.seeR <= 200 && a99.gust > 0.5 && a99.deep >= 0.5,
    "level 99 is intense: the sea runs 2.4x as fast, a wave every 3 s with 0.65 s warning, letters under a second apart, dark squalls, the four winds: " + JSON.stringify(a99));

  /* level 34 played as it comes, for the picture (hits and letters have no effect here) */
  async function play(n, name) {
    var info = await gotoLevel(n);
    await page.evaluate(function () {
      var s = SolScene; window.__raftSpawned = { star: 0, buoy: 0, deep: 0 };
      var add = s.raftAddLetter; s.raftAddLetter = function (L, kind, u) { window.__raftSpawned[kind]++; return add.call(this, L, kind, u); };
      s.raftHurt = function () { return false; }; s.answerPick = function () { return "ignore"; };
    });
    await page.waitForFunction(function () { var S = SolScene.rf; return S.letters.length >= 1 && S.letters.some(function (o) { return o.x > 140 && o.x < SolScene.W - 120; }); }, null, { timeout: 30000 }).catch(function () {});
    await page.waitForTimeout(600);
    await shot(name);
    return Object.assign(info, await page.evaluate(function () { var S = SolScene.rf; return { cam: Math.round(S.cam), spawned: window.__raftSpawned, rocks: S.rocks.length }; }));
  }
  var p34 = await play(34, "raft-03-play-34");
  check(p34.cam > 300 && p34.spawned.star + p34.spawned.buoy + p34.spawned.deep >= 1, "level 34 plays on its own: the sea runs and letters come: " + JSON.stringify(p34));
  var p92 = await play(92, "raft-04-play-92");
  check(p92.tier === 9 && /New this time:.*Poseidon's storm/.test(p92.card) && p92.cam > 300, "level 92 (Poseidon's storm) plays, and its card says what's new: " + JSON.stringify(p92).slice(0, 200));

  console.log("errors (dev page):", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors on the dev page");
  await page.close();   /* its game would keep running and slow the next pages down */

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
    var oc = await dp.evaluate(function () { var c = document.querySelector('#mode-packs .card[data-gamemode="raft"]'); return { state: window.SOL_STATE, card: !!c && !!c.offsetParent && /Calypso's Raft/.test(c.textContent) }; });
    await dp.click('#mode-packs .card[data-gamemode="raft"]');
    await dp.waitForSelector("#skill-screen:not(.hidden)");
    await startGame(dp);
    await dp.waitForFunction(function () { var s = window.SolScene; return s && s.claim && s.readOpen; }, null, { timeout: 30000 }).catch(function () {});
    for (var t = 0; t < 12; t++) { if (await dp.isVisible("#tut-skip")) { await dp.click("#tut-skip"); break; } if (await dp.isVisible("#read-go")) break; await dp.waitForTimeout(300); }
    if (await dp.isVisible("#read-go")) await dp.click("#read-go");
    await dp.waitForTimeout(400);
    var cam0 = await dp.evaluate(function () { var s = window.SolScene; return s && s.rf ? s.rf.cam : -1; });
    await dp.waitForFunction(function (c0) { var s = window.SolScene; return s && s.rf && s.rf.cam > c0 + 300; }, cam0, { timeout: 30000 }).catch(function () {});
    var orun = await dp.evaluate(function () { var s = window.SolScene; return { mode: s && s.mode && s.mode.id, night: s && s.night, cam: s && s.rf ? Math.round(s.rf.cam) : -1, act: document.getElementById("btn-action").textContent }; });
    orun.moved = orun.cam > cam0 + 300;
    await dp.screenshot({ path: path.join(shots, "raft-05-dist-ody.png") });
    console.log("dist/ody", JSON.stringify({ card: oc, run: orun }));
    check(oc.state === "ODY" && oc.card && orun.mode === "raft" && orun.moved && orun.act === "LIFT", "dist/ody: the Calypso's Raft card is offered and the mode runs: " + JSON.stringify({ card: oc, run: orun }));
    await dp.close();
    root = path.join(distRoot, "va");
    var vp = await browser.newPage({ viewport: { width: 1366, height: 768 } });
    watch(vp);
    await vp.goto(base + "index.html", { waitUntil: "load" });
    await vp.evaluate(function () { localStorage.clear(); });
    await vp.reload({ waitUntil: "load" }); await vp.waitForTimeout(800);
    await vp.click('#title-screen .card[data-family="G9"]');
    await vp.waitForSelector("#mode-screen:not(.hidden)");
    var vc = await vp.evaluate(function () {
      var a = []; for (var n = 1; n <= 100; n++) if ((SolModes.modeFor(n) || {}).id === "raft") a.push(n);
      return { state: window.SOL_STATE, cards: Array.prototype.map.call(document.querySelectorAll("#mode-packs .card"), function (c) { return c.getAttribute("data-gamemode"); }).join(","), raftLevels: a.join(",") };
    });
    console.log("dist/va", JSON.stringify(vc));
    check(vc.state === "VA" && vc.cards.indexOf("raft") === -1 && vc.cards.indexOf("ALL") !== -1 && vc.raftLevels === "", "dist/va: the mode screen does not offer Calypso's Raft and no level plays it: " + JSON.stringify(vc));
    await vp.close();
    root = path.join(__dirname, "..");
    console.log("errors (dist):", errors.length > e0 ? errors.slice(e0) : "none");
    check(errors.length === e0, "no page errors in dist/ody and dist/va");
  }

  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
