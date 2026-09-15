/* Headless smoke test: node tools/smoke.js
   Serves the game, drives the state gateway, the reward builder over 20 rewards,
   the coin shop and the start of a night, and saves screenshots to tools/shots/. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var root = path.join(__dirname, ".."), shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", mp3: "audio/mpeg" };
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
  var browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }).catch(function () { return chromium.launch(); });
  var page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  var errors = [];
  page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
  page.on("console", function (m) { if (m.type() === "error" || m.type() === "warning") { var t = m.text(); if (!/favicon|net::ERR|Autoplay|AudioContext|unpkg|peerjs|phaser|WebGL|GL Driver|swiftshader/i.test(t)) errors.push(m.type() + ": " + t); } });
  var fails = [];
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  async function shot(name) { await page.screenshot({ path: path.join(shots, name + ".png") }); }

  await page.goto(base + "index.html", { waitUntil: "load" });
  await page.waitForTimeout(800);
  check(await page.isVisible("#state-screen"), "gateway shows first");
  /* the gateway also comes first on a Chromebook that already chose a state */
  await page.evaluate(function () { localStorage.setItem("afterHours.v1.state", "VA"); });
  await page.reload({ waitUntil: "load" }); await page.waitForTimeout(800);
  check(await page.isVisible("#state-screen") && !(await page.isVisible("#title-screen")), "gateway still first with a saved state");
  check(await page.isVisible('#state-screen .card.selected[data-state="VA"]'), "saved state is pre-highlighted");
  await page.evaluate(function () { localStorage.removeItem("afterHours.v1.state"); });
  await page.reload({ waitUntil: "load" }); await page.waitForTimeout(800);
  await shot("01-gateway");
  await page.click('#state-screen .card[data-state="NJ"]');
  await page.waitForTimeout(200);
  check(await page.isVisible("#title-screen"), "title after picking New Jersey");
  check(await page.isVisible('#title-screen .card[data-family="NJ5"]'), "Grade 5 card visible for NJ");
  check(!(await page.isVisible('#title-screen .card[data-family="G9"]')), "Grade 9 card hidden for NJ");
  check((await page.textContent("#title-kicker")).indexOf("NJSLA") !== -1, "kicker names NJSLA");
  await shot("02-title-nj");

  /* content pools */
  var pools = await page.evaluate(function () {
    var out = {};
    ["G9", "G10", "G11", "NJ5"].forEach(function (f) {
      out[f] = { all: heistBuildPack(f, "ALL").claims.length, RL: heistBuildPack(f, "RL").claims.length, RI: heistBuildPack(f, "RI").claims.length, RV: heistBuildPack(f, "RV").claims.length, DSR: heistBuildPack(f, "DSR").claims.length };
    });
    out.packs = HEIST_PACKS.length;
    return out;
  });
  console.log("pools", JSON.stringify(pools));
  check(pools.NJ5.all > 250 && pools.G9.all > 180 && pools.G11.all > 500, "question pools are large");

  /* reward builder over 20 rewards (random choices) */
  await page.evaluate(function () { localStorage.removeItem("afterHours.v1.build"); SolBuild.init(); });
  for (var night = 5; night <= 100; night += 5) {
    await page.evaluate(function (n) { window.__done = false; SolBuild.showReward(n, function () { window.__done = true; }); }, night);
    await page.waitForSelector("#build-overlay:not(.hidden)", { timeout: 5000 });
    if (night === 5) {
      await page.waitForSelector(".build-theme");
      await page.click(".build-theme:nth-child(" + (Math.random() < 0.5 ? 1 : 2) + ")");
      await page.click("#build-overlay .btn.primary");
    }
    await page.waitForSelector(".build-options .build-opt");
    var nOpt = await page.$$eval(".build-options .build-opt", function (l) { return l.length; });
    check(nOpt === 3, "night " + night + ": three pieces offered");
    if (night === 5) {
      var names = await page.$$eval(".build-options .build-opt .name", function (l) { return l.map(function (e) { return e.textContent; }); });
      check(!/wall|fence|scaffold|ruin/i.test(names.join(" ")), "first offer is buildings, not walls: " + names.join(", "));
      await shot("03-first-building");
    }
    await page.click(".build-options .build-opt:nth-child(" + (1 + Math.floor(Math.random() * 3)) + ")");
    await page.click("#build-overlay .btn.primary");
    await page.waitForSelector(".build-styles .build-opt");
    if (night === 5 || night === 10) await shot("04-style-" + night);
    await page.click(".build-styles .build-opt:nth-child(" + (1 + Math.floor(Math.random() * 3)) + ")");
    await page.click("#build-overlay .btn.primary");
    await page.waitForSelector(".build-note:not(.hidden)");
    if (night === 40 || night === 100) { await page.waitForTimeout(400); await shot("05-done-" + night); }
    await page.click("#build-overlay .btn.primary");
    await page.waitForFunction(function () { return window.__done === true; });
  }
  var st = await page.evaluate(function () { return SolBuild.state(); });
  check(st.count === 20 && st.walls === true, "20 reward pieces placed and walls up: " + JSON.stringify(st));

  /* shop: coins, buildings, decorations, packs */
  await page.evaluate(function () { SolBuild.addCoins(600, "test"); window.__closed = false; SolBuild.showShop(41, function () { window.__closed = true; }); });
  await page.waitForSelector(".build-shop .build-opt");
  await shot("06-shop-buildings");
  await page.click(".build-shop .build-opt:nth-child(1)");
  await page.waitForSelector(".build-styles .build-opt");
  await page.click(".build-styles .build-opt:nth-child(2)");
  await page.click("#build-overlay .btn.primary");
  await page.waitForSelector(".build-note:not(.hidden)");
  await page.click("#build-overlay .btn.primary");
  await page.click(".build-tab:nth-child(2)");
  await page.waitForTimeout(200);
  await page.click(".build-shop .build-opt:nth-child(1)");
  await page.waitForTimeout(200);
  await page.click(".build-tab:nth-child(3)");
  await page.waitForTimeout(200);
  await shot("07-shop-packs");
  await page.click(".build-shop .build-opt:nth-child(1)");
  await page.waitForTimeout(400);
  var st2 = await page.evaluate(function () { return SolBuild.state(); });
  check(st2.buildings >= 21 && st2.decorations >= 1 && st2.coins < 600, "shop purchases landed: " + JSON.stringify(st2));
  await shot("08-shop-after");
  await page.click("#build-overlay .btn.primary");
  await page.waitForFunction(function () { return window.__closed === true; });

  /* build code round trip */
  var rt = await page.evaluate(function () {
    var code = SolBuild.exportCode(), before = JSON.stringify(SolBuild.state());
    localStorage.removeItem("afterHours.v1.build");
    var r = SolBuild.importCode(code);
    return { ok: r.ok, count: r.count, same: JSON.stringify(SolBuild.state()) === before };
  });
  check(rt.ok && rt.same, "build code round trip " + JSON.stringify(rt));

  /* gallery */
  await page.evaluate(function () { SolBuild.showGallery(); });
  await page.waitForSelector("#build-overlay:not(.hidden)");
  await page.waitForTimeout(500);
  await shot("09-gallery");
  await page.keyboard.press("Escape");

  /* start a Grade 5 night */
  await page.click('#title-screen .card[data-family="NJ5"]');
  await page.waitForSelector("#skill-screen:not(.hidden)");
  check((await page.$$eval("#skill-packs .card", function (l) { return l.length; })) === 5, "five NJ skill cards");
  await shot("10-skills-nj");
  await page.click("#btn-skill-start");
  await page.waitForTimeout(300);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForTimeout(3000);
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(300); }
  await page.waitForTimeout(1500);
  var hud = await page.evaluate(function () { return { sol: document.getElementById("job-sol").textContent, coins: document.getElementById("bonus-pip").textContent, stem: document.getElementById("eoc-stem").textContent, kick: document.getElementById("read-kicker") && document.getElementById("read-kicker").textContent }; });
  console.log("hud", JSON.stringify(hud));
  check(/Level [123]/.test(hud.sol), "HUD shows the adaptive level");
  check(/^Coins/.test(hud.coins), "HUD shows coins");
  check(hud.stem.length > 10, "a question is loaded");
  await shot("11-night-read");
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForTimeout(800);
  await shot("12-night-play");

  /* stamina: night 1 draws a tiny passage, night 90 a long one */
  var stamina = await page.evaluate(async function () {
    function wordsNow() { return window.SolScene && SolScene.claim ? SolScene.claim.words : 0; }
    var out = { target1: heistTargetWords(1), target90: heistTargetWords(90), n1: [], n90: [] };
    var sc = window.SolScene;
    for (var i = 0; i < 5; i++) { sc.nextClaim(); out.n1.push(wordsNow()); }
    sc.night = 90; sc.nightPacks = [];
    for (var j = 0; j < 5; j++) { sc.nextClaim(); out.n90.push(wordsNow()); }
    sc.night = 1;
    return out;
  });
  console.log("stamina", JSON.stringify(stamina));
  var avg = function (a) { return a.reduce(function (x, y) { return x + y; }, 0) / a.length; };
  check(avg(stamina.n1) < 130 && avg(stamina.n90) > 300, "night 1 passages are much shorter than night 90 passages");

  /* a wrong letter costs a life: three wrong grabs end the night */
  var strikeRun = await page.evaluate(function () {
    var sc = window.SolScene, out = { before: sc.strikes, hud: [], ended: false };
    for (var i = 0; i < 3; i++) {
      sc.iframeMs = 0; sc.stunMs = 0;
      sc.flagWrongAlarm({ x: sc.player.x, y: sc.player.y });
      out.hud.push(document.getElementById("strike-pip").textContent.split(" · ")[0]);
    }
    out.after = sc.strikes; out.ended = !!sc.ended; out.tag = sc.caughtFlashTag ? sc.caughtFlashTag.text : "";
    out.msg = document.getElementById("win-msg").textContent; out.title = document.getElementById("win-title").textContent;
    return out;
  });
  console.log("wrong-letter strikes", JSON.stringify(strikeRun));
  check(strikeRun.after === strikeRun.before + 3 && strikeRun.ended && /wrong letter/i.test(strikeRun.msg) && strikeRun.title === "Run over", "three wrong letters end the night");
  await page.waitForTimeout(500);
  await shot("13-run-over-wrong");

  /* adaptive + coins through the scene API */
  var adapt = await page.evaluate(function () {
    var sc = null; try { sc = window.__scene || null; } catch (e) {}
    return sc ? "scene" : "no";
  });
  console.log("errors:", errors.length ? errors : "none");
  check(errors.length === 0, "no page errors");
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
