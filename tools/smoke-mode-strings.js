/* Headless test of the Lit and Film mode "strings" (Saucers on Strings, Plan 9 from Outer Space; js/mode-strings.js):
   node tools/smoke-mode-strings.js
   Serves the repository, opens the dev page as the Lit and Film build (window.SOL_STATE = "LIT" before any script),
   picks Bad Film vs. Good Film and the Plan 9 card, and drives the mode through the scene's own methods: one saucer
   per letter, a snip that misses costs nothing, the right saucer's string scores, a wrong one costs a life, the
   stand-in, the boom mic and the death ray each cost a life and each can be avoided, the sky flips (and from level 41
   the saucers jump), the gravestones wobble, Select TWO needs both, the keys, the mouse and the SNIP button work,
   the difficulty climbs every level 2-100, levels 1, 10 and 100 play, the reading pop-up names the game and its
   controls, the 500-pixel-tall Canvas frame lays out, and no page errors. Screenshots go to tools/shots/strings-*.png.
   Prints ALL OK or the number FAILED. */
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
      if (/content11[4-9]\.js|content120\.js|favicon/.test(r.url())) return;   /* other movies' content files may still be being written */
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

  /* ── the dev page, as the Lit and Film build ── */
  var ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  await ctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  var page = await ctx.newPage();
  watch(page, "dev");
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png"), timeout: 180000 }); }
  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(900);
  check(await page.isVisible('#title-screen .card[data-family="LIT"]'), "the dev page acts as the Lit and Film build (its card is on the title screen)");
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.waitForSelector('#mode-packs .card[data-genre="BADGOOD"]');
  await page.click('#mode-packs .card[data-genre="BADGOOD"]');
  await page.waitForSelector('#skill-packs .card[data-gamemode="strings"]');
  var card = await page.evaluate(function () { var c = document.querySelector('#skill-packs .card[data-gamemode="strings"]'); return c ? { text: c.textContent.replace(/\s+/g, " ").trim(), visible: !!c.offsetParent } : null; });
  check(card && card.visible && /Plan 9/.test(card.text), "the Plan 9 card shows on the Bad Film vs. Good Film screen: " + JSON.stringify(card));
  await page.click('#skill-packs .card[data-gamemode="strings"]');
  var picked = await page.evaluate(function () {
    var o = { only: SolModes.only, def: !!SolModes.MODES.strings, ids: [] };
    [1, 10, 55, 100].forEach(function (n) { var m = SolModes.modeFor(n); o.ids.push(m ? m.id : "-"); });
    return o;
  });
  check(picked.only === "strings" && picked.def && picked.ids.join() === "strings,strings,strings,strings", "picking Plan 9 plays Saucers on Strings on every level: " + JSON.stringify(picked));
  await page.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 20000 }).catch(function () {});
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }

  async function gotoLevel(n) {
    await page.evaluate(function (n) { SolScene.scene.restart({ family: "LIT", strand: "PLAN9", night: n }); }, n);
    await page.waitForFunction(function (n) { var s = window.SolScene; return s && s.night === n && s.sos && s.claim && s.readOpen; }, n, { timeout: 20000 }).catch(function () {});
    var info = await page.evaluate(function () {
      var s = SolScene;
      return { key: s.sys.settings.key, mode: s.mode && s.mode.id, tier: s.tier, act: document.getElementById("btn-action").textContent, strand: s.strand,
        card: (document.getElementById("mode-card") || {}).textContent || "", hint: (document.getElementById("read-hint") || {}).textContent || "",
        episodes: (s.nightPacks || []).concat(s.claim ? [s.claim] : []).map(function (c) { return c.episode; }).filter(Boolean) };
    });
    if (await page.isVisible("#read-go")) await page.click("#read-go");
    await page.waitForFunction(function () { var s = window.SolScene; return s && !s.readOpen; }, null, { timeout: 8000 }).catch(function () {});
    await page.evaluate(function () { var s = SolScene, S = s.sos; for (var j = 0; j < 40 && S.saucers.some(function (q) { return q.state === "intro"; }); j++) s.sosPlaceSaucers(0.05); });
    return info;
  }
  /* in the page: hold the goofs off while a check runs; the game's own clock, not the wall clock */
  var HELPERS = function () {
    window.__q = {
      wait: function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); },
      /* step the mode's own tick n frames of 50 ms with no keys held (until f() is true, if given) */
      step: function (n, f) {
        var s = SolScene, inp = { ax: 0, ay: 0, fire: false, pull: false, ptr: null };
        for (var j = 0; j < n; j++) { if (f && f()) return true; if (s._finishing || s.ended) break; s.tickTimers(50); s.tick_strings(0.05, inp, 50); }
        return f ? !!f() : true;
      },
      until: async function (f, ms) { var t0 = Date.now(); while (!f() && Date.now() - t0 < (ms || 30000)) await __q.wait(30); return f(); },
      quiet: function () {
        var s = SolScene, S = s.sos, P = S.P;
        P.standGap = 999; P.boomGap = 999; P.rayGap = 999; P.flipGap = 999; S.flipT = 999; S.standT = 999; S.boomT = 999; S.rayT = 999;
        s.sosEndHazards();
        s.strikes = 0; s.iframeMs = 0; s.spareLives = 0; s.perks = {}; s.tutLockUntil = 0; s._guardUsed = true;
        S.cd = 0; S.queue = 0; S.lock = null; S.tx = null; S.tc = null;
        ["LEFT", "RIGHT", "UP", "DOWN", "A", "D", "W", "S", "SPACE"].forEach(function (k) { s.keys[k].isDown = false; });
      },
      still: function () { var P = SolScene.sos.P; P.swing = 0; P.drift = 0; P.bob = 0; P.wind = 0; SolScene.sos.windTh = 0; },
      byLetter: function (L) { return SolScene.sos.saucers.filter(function (q) { return q.letter === L; })[0]; },
      /* a ladder spot where no string is within reach, high on the ladder */
      gap: function () {
        var s = SolScene, S = s.sos, best = null;
        for (var x = S.xMin; x <= S.xMax; x += 4) {
          S.lx = x; S.c = 1; var nr = s.sosNearest();
          if (!nr.sau || nr.d > nr.reach * 3) { best = x; break; }
        }
        return best;
      }
    };
  };
  await page.evaluate(HELPERS);

  /* ── level 1 ── */
  var l1 = await gotoLevel(1);
  check(l1.key === "mode" && l1.mode === "strings" && l1.act === "SNIP" && l1.strand === "PLAN9", "level 1 runs Saucers on Strings in the mode scene with a SNIP button: " + JSON.stringify({ key: l1.key, mode: l1.mode, act: l1.act, strand: l1.strand }));
  check(/Saucers on Strings/.test(l1.card) && /Controls:/.test(l1.card) && /snip/i.test(l1.card) && /stand-in/.test(l1.card) && /Snip the string/.test(l1.hint),
    "the reading pop-up names the game, says how to play and lists the controls: " + l1.card.slice(0, 140) + "…");
  check(l1.episodes.length > 0 && l1.episodes.every(function (e) { return e === "plan9"; }), "the questions are Plan 9's: " + l1.episodes.slice(0, 4).join());
  await page.evaluate(HELPERS);

  var run = await page.evaluate(async function () {
    var s = SolScene, S = s.sos, P = S.P, o = {};
    o.lv = { n: P.standCount, boom: P.boomGap, ray: P.rayGap, reach: P.reach };
    __q.quiet(); __q.still();
    var letters = s.choiceLetters(), need = s.need.slice();
    o.saucers = S.saucers.length; o.letters = letters.slice().sort().join(""); o.labels = S.saucers.map(function (q) { return q.txt.text; }).sort().join("");
    o.inShot = S.saucers.every(function (q) { return q.x > 30 && q.x < s.W - 30 && q.y > 60 && q.y < S.floorY - 120 * S.k; });
    o.reachable = S.saucers.every(function (q) { return q.y - 20 * S.k > S.topBite; });
    o.strings = S.saucers.every(function (q) { return s.sosStringX(q, (S.ay0 + q.y) / 2) != null; });
    /* the keys: ◀ ▶ roll the ladder, ▼ ▲ climb */
    S.lx = s.W / 2; S.c = 1; var x0 = S.lx;
    s.keys.RIGHT.isDown = true; await __q.until(function () { return S.lx > x0 + 10; }, 90000); s.keys.RIGHT.isDown = false; o.right = S.lx - x0;
    x0 = S.lx; s.keys.A.isDown = true; await __q.until(function () { return S.lx < x0 - 10; }, 90000); s.keys.A.isDown = false; o.left = x0 - S.lx;
    s.keys.DOWN.isDown = true; await __q.until(function () { return S.c < 0.9; }, 90000); s.keys.DOWN.isDown = false; o.down = S.c;
    s.keys.W.isDown = true; await __q.until(function () { return S.c >= 1; }, 90000); s.keys.W.isDown = false; o.up = S.c;
    /* a snip that misses every string costs nothing */
    __q.gap(); var st0 = s.strikes, sc0 = s.score;
    o.miss = { res: s.sosSnip(), strikes: s.strikes - st0, score: s.score - sc0 };
    /* too low on the ladder: no string runs below a saucer */
    var w = letters.filter(function (L) { return need.indexOf(L) === -1; })[0], ws = __q.byLetter(w);
    S.cd = 0; S.c = 0; S.lx = ws.x - 12 * S.k;
    o.low = { stringThere: s.sosStringX(ws, s.sosBite().y), res: s.sosSnip(), strikes: s.strikes, state: ws.state };
    /* the wrong saucer: a life, it falls, CUT! take two */
    S.cd = 0; s.sosAimAt(ws, 1);
    var nr = s.sosNearest(); o.aimed = nr.sau === ws && nr.d <= nr.reach;
    o.glint = !!P.glint;
    var res = s.sosSnip();
    o.wrong = { res: res, strikes: s.strikes, score: s.score - sc0, state: ws.state, mark: ws.txt.text, take: S.take, label: s._lastHitLabel };
    __q.step(200, function () { return ws.state === "floor"; });
    o.wrong.landed = ws.state === "floor";
    /* snipping again where it was: nothing there now */
    S.cd = 0; s.iframeMs = 0; o.again = { res: s.sosSnip(), strikes: s.strikes };
    o.need = need.join("");
    return o;
  });
  console.log("run", JSON.stringify(run));
  check(run.saucers === run.letters.length && run.saucers >= 3 && run.labels === run.letters, "one saucer per answer letter, its letter on the dome: " + run.labels);
  check(run.inShot && run.reachable && run.strings, "every saucer hangs in the shot on a string, below the highest the shears reach");
  check(run.right > 10 && run.left > 10 && run.down < 0.9 && run.up === 1, "▶ / A roll the ladder, ▼ / W climb: " + JSON.stringify({ right: run.right, left: run.left, down: run.down, up: run.up }));
  check(run.miss.res === "miss" && run.miss.strikes === 0 && run.miss.score === 0, "a snip that misses every string costs nothing: " + JSON.stringify(run.miss));
  check(run.low.stringThere === null && run.low.res === "miss" && run.low.strikes === 0 && run.low.state === "live", "below a saucer there is no string to cut: " + JSON.stringify(run.low));
  check(run.aimed && run.wrong.res === "wrong" && run.wrong.strikes === 1 && run.wrong.score === 0 && run.wrong.mark === "✕" && run.wrong.take === 2 && /WRONG LETTER/.test(run.wrong.label || "") && run.wrong.landed,
    "snipping a wrong saucer's string: a life, it drops to the floor crossed out, and the slate says take 2: " + JSON.stringify(run.wrong));
  check(run.again.res === "miss" && run.again.strikes === 1, "a saucer on the floor can't be snipped again: " + JSON.stringify(run.again));
  check(run.lv.n === 1 && run.lv.boom === 99 && run.lv.ray === 99 && run.lv.reach > 26, "level 1 is gentle: one stand-in, no boom mic, no rays, the widest shears: " + JSON.stringify(run.lv));

  /* the real keyboard: Space snips (at a gap: costs nothing) */
  await page.evaluate(function () { __q.quiet(); __q.gap(); window.__s0 = SolScene.sos.snips; window.__x0 = SolScene.sos.lx; });
  await page.keyboard.down("Space");
  await page.waitForFunction(function () { return SolScene.sos.snips > window.__s0; }, null, { timeout: 120000 }).catch(function () {});
  await page.keyboard.up("Space");
  await page.keyboard.down("ArrowLeft");
  await page.waitForFunction(function () { return SolScene.sos.lx < window.__x0 - 10; }, null, { timeout: 90000 }).catch(function () {});
  await page.keyboard.up("ArrowLeft");
  var keys = await page.evaluate(function () { var S = SolScene.sos; return { snips: S.snips - window.__s0, moved: window.__x0 - S.lx, strikes: SolScene.strikes }; });
  check(keys.snips === 1 && keys.moved > 10 && keys.strikes === 0, "a real Space press snips once and a real ◀ rolls the ladder: " + JSON.stringify(keys));
  /* the on-screen SNIP button */
  await page.evaluate(function () { __q.quiet(); __q.gap(); window.__s1 = SolScene.sos.snips; });
  var abox = await page.evaluate(function () { var r = document.getElementById("btn-action").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
  await page.mouse.move(abox.x, abox.y); await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.sos.snips > window.__s1; }, null, { timeout: 90000 }).catch(function () {});
  await page.mouse.up();
  var btn = await page.evaluate(function () { return { snips: SolScene.sos.snips - window.__s1, strikes: SolScene.strikes }; });
  check(btn.snips === 1 && btn.strikes === 0, "the on-screen SNIP button snips: " + JSON.stringify(btn));
  /* the mouse: point at the right saucer, the shears go to its string; click and it drops: the question is answered */
  var tgt = await page.evaluate(function () {
    __q.quiet(); __q.still();
    var s = SolScene, S = s.sos, q = __q.byLetter(s.need[0]), cr = s.game.canvas.getBoundingClientRect(), sc = S.k * 0.92;
    S.lx = Math.max(S.xMin, Math.min(S.xMax, q.x + (q.x > s.W / 2 ? -140 : 140) * S.k)); S.c = 0.4;
    window.__sc0 = s.score; window.__co0 = s.nightCoins; window.__need = s.need.slice();
    return { x: cr.left + q.x * cr.width / s.W, y: cr.top + (q.y + 32 * sc) * cr.height / s.H, L: q.letter };
  });
  await page.mouse.move(tgt.x - 40, tgt.y + 40); await page.waitForTimeout(100);
  await page.mouse.move(tgt.x, tgt.y, { steps: 3 });
  await page.waitForFunction(function () { var S = SolScene.sos, nr = SolScene.sosNearest(); return S.lock && nr.sau === S.lock && nr.d <= nr.reach * 0.6 && Math.abs(S.c - S.tc) < 0.02; }, null, { timeout: 120000 }).catch(function () {});
  var mouse = await page.evaluate(function () { var S = SolScene.sos, nr = SolScene.sosNearest(); return { lock: S.lock && S.lock.letter, near: nr.sau && nr.sau.letter, d: +nr.d.toFixed(1), reach: +nr.reach.toFixed(1), c: +S.c.toFixed(2) }; });
  await shot("strings-01-level1");
  await page.mouse.down();
  await page.waitForFunction(function () { return SolScene.score > window.__sc0 || SolScene.extracted.length > 0; }, null, { timeout: 120000 }).catch(function () {});
  await page.mouse.up();
  mouse.after = await page.evaluate(function () { var s = SolScene; return { score: s.score - window.__sc0, coins: s.nightCoins > window.__co0, found: s.extracted.join(""), strikes: s.strikes }; });
  check(mouse.lock === tgt.L && mouse.near === tgt.L && mouse.d <= mouse.reach && (mouse.after.score === 1 || mouse.after.found === tgt.L) && mouse.after.strikes === 0,
    "pointing at a saucer sends the shears to its string, and a click snips it: the right letter scores: " + JSON.stringify(mouse));
  await page.evaluate(function () { __q.step(4); });
  await shot("strings-02-snipped");
  /* the rest of that question, if it needed two */
  await page.evaluate(async function () {
    var s = SolScene;
    if (s.score > window.__sc0) return;
    __q.quiet(); __q.still();
    var q = __q.byLetter(window.__need[1]); s.sosAimAt(q, 1); s.sosSnip();
  });

  /* Select TWO: the next question, told to need two letters */
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 90000 }).catch(function () {});
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 30000 }).catch(function () {});
  await page.evaluate(function () { var s = SolScene, S = s.sos; for (var j = 0; j < 40 && S.saucers.some(function (q) { return q.state === "intro"; }); j++) s.sosPlaceSaucers(0.05); });
  var two = await page.evaluate(async function () {
    var s = SolScene, S = s.sos, o = {};
    __q.quiet(); __q.still();
    o.fresh = { scene: S.scene, take: S.take, live: S.saucers.every(function (q) { return q.state === "live"; }) };
    var pair = s.choiceLetters().slice(0, 2);
    s.need = pair.slice(); s.extracted = [];
    var sc0 = s.score, co0 = s.nightCoins;
    var a = __q.byLetter(pair[0]); s.sosAimAt(a, 1);
    o.first = { res: s.sosSnip(), score: s.score - sc0, mark: a.txt.text, found: s.extracted.join(""), strikes: s.strikes };
    var b = __q.byLetter(pair[1]); S.cd = 0; s.sosAimAt(b, 1);
    o.second = { res: s.sosSnip(), score: s.score - sc0, strikes: s.strikes, coins: s.nightCoins > co0 };
    for (var j = 0; j < 200 && !S.saucers.every(function (q) { return q.state === "floor" || q.state === "gone"; }); j++) { s.sosPlaceSaucers(0.05); }
    o.cleared = S.saucers.filter(function (q) { return q.state === "floor"; }).length;
    return o;
  });
  console.log("two", JSON.stringify(two));
  check(two.fresh.scene === 2 && two.fresh.take === 1 && two.fresh.live, "a new question lowers fresh saucers and a new slate (scene 2, take 1): " + JSON.stringify(two.fresh));
  check(two.first.res === "partial" && two.first.score === 0 && two.first.mark === "✓" && two.first.found.length === 1 && two.first.strikes === 0 && two.second.res === "done" && two.second.score === 1 && two.second.strikes === 0 && two.second.coins,
    "a Select TWO question needs both saucers: the first is marked found, the second answers it: " + JSON.stringify({ first: two.first, second: two.second }));
  check(two.cleared === 2, "after the answer the other saucers are hoisted out of the shot: " + two.cleared + " left on the floor");

  /* ── the goofs, at level 55 (every hazard is on) ── */
  var l55 = await gotoLevel(55);
  await page.evaluate(HELPERS);
  check(l55.mode === "strings" && /New this time:.*two of them/.test(l55.card), "level 55: the card says what's new (two stand-ins): " + l55.card.slice(-160));
  var haz = await page.evaluate(async function () {
    var s = SolScene, S = s.sos, P = S.P, k = S.k, o = {};
    o.lv = { n: P.standCount, boom: P.boomGap, ray: P.rayGap, shuffle: P.shuffle };
    __q.quiet(); __q.still();
    /* the stand-in walks into the ladder: a life */
    S.lx = s.W * 0.5; S.c = 1; P.standSpd = 700; P.standWarn = 0.05;
    var a = s.sosStandIn(-1, 0.48);
    __q.step(20, function () { return a.phase !== "warn"; });
    o.standShown = a.spr.visible;
    __q.step(300, function () { return a.hit || S.stand.indexOf(a) === -1; });
    o.stand = { strikes: s.strikes, label: s._lastHitLabel, hit: a.hit };
    /* ...and keeping the ladder off his path (beyond his mark) avoids it */
    __q.quiet(); P.standSpd = 900; P.standWarn = 0.05; S.lx = S.xMax;
    var b = s.sosStandIn(-1, 0.4), posed = false;
    __q.step(400, function () { if (b.phase === "pose") posed = true; return S.stand.indexOf(b) === -1; });
    o.standDodge = { strikes: s.strikes, gone: S.stand.indexOf(b) === -1, posed: posed && !b.hit };
    /* the gravestones wobble when something touches them */
    S.stones.forEach(function (st) { st.a = 0; st.w = 0; });
    var st = S.stones[3]; S.lx = st.x - 120 * k;
    s.keys.D.isDown = true; await __q.until(function () { return S.lx > st.x + 30 * k; }, 90000); s.keys.D.isDown = false;
    o.wobble = +Math.abs(st.w).toFixed(2) + +Math.abs(st.a).toFixed(2);
    /* the boom mic: under it at the top of the ladder, it bonks you */
    __q.quiet(); __q.still(); S.lx = s.W * 0.5; S.c = 1;
    var bm = s.sosBoom(s.sosBite().x);
    __q.step(200, function () { return bm.hit || !S.boom; });
    o.boom = { strikes: s.strikes, label: s._lastHitLabel };
    /* ...climbing down out of the dashed box avoids it */
    __q.quiet(); S.lx = s.W * 0.5; S.c = 1;
    bm = s.sosBoom(s.sosBite().x);
    S.c = 0.35;
    __q.step(200, function () { return !S.boom; });
    o.boomDuck = { strikes: s.strikes, under: Math.abs(s.sosBite().x - bm.x) < 40 * k, gone: !S.boom, c: S.c };
    /* ...and so does rolling out from under it */
    __q.quiet(); S.lx = s.W * 0.5; S.c = 1;
    bm = s.sosBoom(s.sosBite().x); S.lx = s.W * 0.5 + 160 * k;
    __q.step(200, function () { return !S.boom; });
    o.boomRoll = { strikes: s.strikes, gone: !S.boom, c: S.c };
    /* the boom operator follows the stagehand at level 61+ only */
    o.follow55 = P.boomFollow;
    /* a death ray: under the beam, it zaps you */
    __q.quiet(); __q.still();
    var sau = S.saucers.filter(function (q) { return q.state === "live"; })[0];
    S.lx = clamp0(sau.x); S.c = 1;
    var ry = s.sosRay(sau);
    __q.step(100, function () { return ry.phase === "fire"; });
    o.rayWarnT = +P.rayWarn.toFixed(2);
    __q.step(100, function () { return ry.hit || S.rays.indexOf(ry) === -1; });
    o.ray = { strikes: s.strikes, label: s._lastHitLabel };
    /* ...rolling out of the dotted beam avoids it */
    __q.quiet(); __q.still();
    S.lx = sau.x > s.W / 2 ? S.xMin : S.xMax;
    ry = s.sosRay(sau);
    __q.step(200, function () { return S.rays.indexOf(ry) === -1; });
    o.rayDodge = { strikes: s.strikes, fired: ry.phase === "fire", far: Math.abs(S.lx - ry.x) };
    function clamp0(x) { return Math.max(S.xMin, Math.min(S.xMax, x)); }
    /* the sky flips mid-scene; from level 41 it's a continuity error and the saucers jump */
    var n0 = S.night, xs = S.saucers.map(function (q) { return q.fx; }).join();
    o.flip = { jumped: s.sosFlip(), night: S.night !== n0, moved: S.saucers.map(function (q) { return q.fx; }).join() !== xs, caption: S.txSky.text };
    return o;
  });
  console.log("haz", JSON.stringify(haz));
  check(haz.lv.n === 2 && haz.lv.boom < 90 && haz.lv.ray < 90 && haz.lv.shuffle === 1, "level 55 has two stand-ins, the boom mic, death rays and continuity errors: " + JSON.stringify(haz.lv));
  check(haz.standShown && haz.stand.strikes === 1 && /STAND-IN/.test(haz.stand.label || ""), "the stand-in walking into the ladder costs a life: " + JSON.stringify(haz.stand));
  check(haz.standDodge.strikes === 0 && haz.standDodge.gone && haz.standDodge.posed, "keeping the ladder past his tape mark avoids him: " + JSON.stringify(haz.standDodge));
  check(haz.wobble > 0.05, "rolling the ladder past a cardboard gravestone makes it wobble: " + haz.wobble);
  check(haz.boom.strikes === 1 && /BOOM MIC/.test(haz.boom.label || ""), "the boom mic dipping onto the stagehand costs a life: " + JSON.stringify(haz.boom));
  check(haz.boomDuck.strikes === 0 && haz.boomDuck.under && haz.boomDuck.gone && haz.boomRoll.strikes === 0 && haz.boomRoll.gone, "climbing down under it, or rolling out of the dashed box, avoids the boom mic: " + JSON.stringify({ duck: haz.boomDuck, roll: haz.boomRoll }));
  check(haz.ray.strikes === 1 && /DEATH RAY/.test(haz.ray.label || ""), "a death ray on the ladder costs a life: " + JSON.stringify(haz.ray));
  check(haz.rayDodge.strikes === 0 && haz.rayDodge.fired, "rolling out of the dotted beam avoids the ray: " + JSON.stringify(haz.rayDodge));
  check(haz.flip.night && haz.flip.jumped && haz.flip.moved && /CONTINUITY/.test(haz.flip.caption), "the sky flips day/night and (level 41 on) the saucers jump: " + JSON.stringify(haz.flip));

  /* the level 50 picture: every goof at once */
  var l50 = await gotoLevel(50);
  await page.evaluate(HELPERS);
  await page.evaluate(async function () {
    var s = SolScene, S = s.sos, P = S.P, k = S.k;
    __q.quiet(); s.iframeMs = 1e9; s.spareLives = 9;
    S.lx = s.W * 0.42; S.c = 1;
    var live = S.saucers.filter(function (q) { return q.state === "live"; });
    var far = live.slice().sort(function (a, b) { return Math.abs(b.x - S.lx) - Math.abs(a.x - S.lx); })[0];
    var st = s.sosStandIn(far.x > s.W / 2 ? 1 : -1, 0.3); st.phase = "in"; st.t = 0; st.spr.setVisible(true); st.x = st.side < 0 ? s.W * 0.18 : s.W * 0.82;
    s.sosRay(far);
    var bm = s.sosBoom(S.lx + 150 * k);
    if (S.night) { S.flipT = 0.01; P.flipGap = 999; }
    __q.step(14); S.flash = 0; S.skyT = 0.5;
  });
  await shot("strings-03-level50");

  /* ── level 10 and level 100: they play, and the right saucer scores ── */
  async function playRight(n) {
    var info = await gotoLevel(n);
    await page.evaluate(HELPERS);
    var r = await page.evaluate(async function () {
      var s = SolScene, S = s.sos, sc0 = s.score;
      __q.quiet(); __q.still();
      s.need.forEach(function (L) { var q = __q.byLetter(L); S.cd = 0; s.sosAimAt(q, 1); s.sosSnip(); });
      return { mode: s.mode.id, saucers: S.saucers.length, score: s.score - sc0, strikes: s.strikes, P: { reach: +S.P.reach.toFixed(1), stand: S.P.standCount, glint: S.P.glint, wind: +S.P.wind.toFixed(1) } };
    });
    r.card = info.card; r.tier = info.tier;
    return r;
  }
  var p10 = await playRight(10);
  check(p10.mode === "strings" && p10.saucers >= 3 && p10.score === 1 && p10.strikes === 0, "level 10 plays, and snipping the right saucer scores: " + JSON.stringify(p10));
  var p100 = await playRight(100);
  check(p100.mode === "strings" && p100.saucers >= 3 && p100.score === 1 && p100.strikes === 0 && p100.tier === 9 && /New this time:.*Plan 9/.test(p100.card), "level 100 plays, the right saucer scores, and the card says what's new: " + JSON.stringify(p100).slice(0, 220));
  /* the level 100 picture */
  await page.waitForFunction(function () { var g = document.getElementById("read-go"); return !SolScene._between && g && g.offsetParent; }, null, { timeout: 90000 }).catch(function () {});
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForFunction(function () { return !SolScene.readOpen; }, null, { timeout: 30000 }).catch(function () {});
  await page.evaluate(HELPERS);
  await page.evaluate(async function () {
    for (var j = 0; j < 40 && SolScene.sos.saucers.some(function (q) { return q.state === "intro"; }); j++) SolScene.sosPlaceSaucers(0.05);
    var s = SolScene, S = s.sos, k = S.k, P = S.P = s.sosParams(s.night);
    s.iframeMs = 1e9; s.spareLives = 9; S.calm = 0; P.standGap = P.boomGap = P.rayGap = P.flipGap = 999; S.flipT = 999;
    if (!S.night) { s.sosFlip(); S.flash = 0; S.skyT = 0; S.txSky.setVisible(false); }
    var live = S.saucers.filter(function (q) { return q.state === "live"; });
    /* the stagehand ducks under the boom mic in the widest gap between the saucers */
    var xs = live.map(function (q) { return q.x; }).concat([S.xMin, S.xMax]).sort(function (a, b) { return a - b; }), gx = S.xMin, gw = 0;
    for (var i2 = 1; i2 < xs.length; i2++) if (xs[i2] - xs[i2 - 1] > gw) { gw = xs[i2] - xs[i2 - 1]; gx = (xs[i2] + xs[i2 - 1]) / 2; }
    S.lx = Math.max(S.xMin, Math.min(S.xMax, gx)); S.c = 0.55;
    s.sosBoom(S.lx + HAND(k));
    function HAND(k2) { return 12 * k2; }
    var st = s.sosStandIn(-1, 0.3); st.phase = "in"; st.t = 0; st.spr.setVisible(true); st.x = s.W * 0.2;
    var st2 = s.sosStandIn(1, 0.3); st2.t = 0;
    s.sosRay(live.slice().sort(function (a, b) { return Math.abs(b.x - S.lx) - Math.abs(a.x - S.lx); })[0]);
    __q.step(16); S.flash = 0;
  });
  await shot("strings-04-level100");

  /* the difficulty: every level 2-100 harder than the one before, never easier on any setting */
  var ramp = await page.evaluate(function () {
    var f = SolModes.MODES.strings.params, s = SolScene, out = { same: typeof s.sosParams === "function" && JSON.stringify(s.sosParams(50)) === JSON.stringify(f(50)) };
    var up = ["swing", "swingSpd", "bob", "bobSpd", "drift", "driftSpd", "standSpd", "standDepth", "standCount", "boomFollow", "rays", "shuffle", "wind", "roll", "climb"],
      down = ["reach", "standGap", "standWarn", "boomGap", "boomWarn", "rayGap", "rayWarn", "flipGap", "glint"];
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
  check(ramp.same && ramp.easier.length === 0 && ramp.flat.length === 0 && ramp.keys.length === 0, "sosParams (the def's params): every level 2-100 is harder than the one before and never easier: " + JSON.stringify({ easier: ramp.easier, flat: ramp.flat, unchecked: ramp.keys }));
  var e = ramp.l1, z = ramp.l100;
  check(e.reach >= 26 && e.swing <= 0.06 && e.drift === 0 && e.standWarn >= 2.5 && e.standSpd <= 50 && e.boomGap === 99 && e.rayGap === 99 && e.shuffle === 0 && e.wind === 0 && e.glint === 1,
    "level 1 is gentle: wide shears, a slow sway, one slow stand-in with a long warning, no boom, no rays: " + JSON.stringify(e));
  check(z.reach <= 13 && z.swing >= 0.2 && z.drift >= 70 && z.standCount === 2 && z.boomFollow > 0.7 && z.rays === 2 && z.wind >= 40 && z.glint === 0 && z.boomWarn <= 1.1 && z.rayWarn <= 1.2,
    "level 100 is intense: thin strings, wide fast swings, two stand-ins, a boom that follows, two rays, the wind machine: " + JSON.stringify(z));

  /* losing: the last life ends the level with a Retry */
  var lose = await page.evaluate(async function () {
    var s = SolScene; s.spareLives = 0; s.perks = {}; s.strikes = s.needStrikes - 1; s.iframeMs = 0; s._between = false;
    s.sosEndHazards();
    s.answerWrong("Z", "WRONG LETTER");
    for (var w = 0; w < 1500 && !(s.ended && !document.getElementById("overlay").classList.contains("hidden")); w++) await new Promise(function (r) { setTimeout(r, 100); });
    await new Promise(function (r) { setTimeout(r, 300); });
    return { ended: s.ended, msg: document.getElementById("win-msg").textContent, retry: !document.getElementById("btn-retry").classList.contains("hidden") };
  });
  check(lose.ended && lose.retry && /Saucers on Strings/.test(lose.msg), "the last life ends the level and offers Retry: " + JSON.stringify(lose).slice(0, 200));
  await ctx.close();

  /* ── the 500-pixel-tall Canvas frame ── */
  var cctx = await browser.newContext({ viewport: { width: 1000, height: 500 } });
  await cctx.addInitScript(function () { window.SOL_STATE = "LIT"; });
  page = await cctx.newPage();
  watch(page, "500px");
  await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(900);
  await page.click('#title-screen .card[data-family="LIT"]');
  await page.click('#mode-packs .card[data-genre="BADGOOD"]');
  await page.click('#skill-packs .card[data-gamemode="strings"]');
  await page.click("#btn-skill-start"); await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 20000 }).catch(function () {});
  for (i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  await gotoLevel(30);
  await page.evaluate(HELPERS);
  var small = await page.evaluate(async function () {
    var s = SolScene, S = s.sos, k = S.k, o = { W: s.W, H: s.H, k: +k.toFixed(2) };
    __q.quiet(); __q.still();
    o.inShot = S.saucers.every(function (q) { return q.x > 20 && q.x < s.W - 20 && q.y > 40 && q.y + 50 * k < S.floorY; });
    o.reachable = S.saucers.every(function (q) { s.sosAimAt(q, 1); var nr = s.sosNearest(); return nr.sau === q && nr.d <= nr.reach; });
    o.ladder = S.ladTop > S.topBite && S.floorY < s.H && S.topBite > 0;
    /* no saucer hangs under a HUD button */
    var boxes = s.sosHudBoxes(), sc = k * 0.92;
    o.hud = boxes.length;
    o.clear = S.saucers.every(function (q) { return boxes.every(function (b) { return q.x + 60 * sc < b.x0 || q.x - 60 * sc > b.x1 || q.y + 50 * sc < b.y0 || q.y > b.y1; }); });
    S.lx = s.W * 0.5; S.c = 1;
    var bm = s.sosBoom(s.sosBite().x);
    __q.step(6);
    return o;
  });
  await page.screenshot({ path: path.join(shots, "strings-05-canvas500.png"), timeout: 180000 });
  check(small.H <= 500 && small.inShot && small.reachable && small.ladder && small.clear, "in the 500-pixel-tall frame every saucer hangs in the shot and every string can be reached: " + JSON.stringify(small));
  await cctx.close();

  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
