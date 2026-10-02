/* Headless check of the Canvas build: node tools/smoke-canvas.js [va|nj]
   (run tools/build-games.js, tools/build-appsscript.js and tools/build-canvas.js first).
   Plays Canvas's part: one server stands in for Canvas's file domain and serves only the uploaded HTML file;
   a second one, on another origin, is the Canvas page that embeds it in an iframe. Checks that the file asks
   for nothing else (every asset comes out of the file itself), that the title screen, a level and the 3D castle
   work, that music is off, and that the game's saves don't mix with another game's on the same domain. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var st = (process.argv[2] || "va").toLowerCase();
var file = path.join(__dirname, "..", "dist", "canvas", "SOLLabyrinth-" + st.toUpperCase() + "-Canvas.html");
var shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var served = [];
var files = http.createServer(function (req, res) {
  var p = decodeURIComponent(url.parse(req.url).pathname);
  served.push(p);
  if (p === "/blank") { res.writeHead(200, { "Content-Type": "text/html" }); res.end("<!DOCTYPE html><title>blank</title>"); return; }
  if (p !== "/game.html") { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { "Content-Type": "text/html" }); res.end(fs.readFileSync(file));
});
var lms = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end('<!DOCTYPE html><html><body style="margin:0;background:#fff"><h1 style="font:20px sans-serif">Course page</h1>' +
    '<iframe id="app" src="' + lms.gameUrl + '" style="width:100%;height:640px;border:0" allowfullscreen></iframe></body></html>');
});
(async function () {
  await new Promise(function (r) { files.listen(0, r); });
  await new Promise(function (r) { lms.listen(0, r); });
  lms.gameUrl = "http://127.0.0.1:" + files.address().port + "/game.html";
  var course = "http://localhost:" + lms.address().port + "/";   /* another origin than the file's */
  var browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  var ctx = await browser.newContext({ viewport: { width: 1280, height: 760 } });
  var page = await ctx.newPage();
  var errors = [], fails = [];
  page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
  page.on("console", function (m) { if (m.type() === "error") { var t = m.text(); if (!/favicon|Autoplay|AudioContext|peerjs|WebGL|GL Driver|swiftshader/i.test(t)) errors.push(t); } });
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  async function frame() { var h = await page.waitForSelector("#app"); return h.contentFrame(); }

  /* another game built on this engine already saved on Canvas's file domain */
  await page.goto(lms.gameUrl.replace("game.html", "blank"));
  await page.evaluate(function () { localStorage.setItem("afterHours.v1.night", "57"); localStorage.setItem("afterHours.v1.nick", "Other game"); });

  var t0 = Date.now();
  await page.goto(course);
  var f = await frame();
  await f.waitForSelector("#title-screen:not(.hidden)", { timeout: 60000 });
  console.log("load " + (Date.now() - t0) + " ms, " + (fs.statSync(file).size / 1048576).toFixed(1) + " MiB");
  await page.waitForTimeout(1500);
  var s1 = await f.evaluate(function () {
    return { state: window.SOL_STATE, canvas: !!window.SOL_CANVAS, boot: !!document.getElementById("sol-boot"), phaser: !!window.Phaser, build: !!window.SolBuild,
      three: !!window.THREE, music: getComputedStyle(document.getElementById("btn-music")).display,
      logo: document.querySelector("#title-screen .logo img").src.slice(0, 40), logoOk: document.querySelector("#title-screen .logo img").naturalWidth,
      night: localStorage.getItem("afterHours.v1.night") };
  });
  console.log(JSON.stringify(s1));
  check(s1.state === st.toUpperCase() && s1.canvas, "the page is the " + st.toUpperCase() + " game, Canvas build");
  check(!s1.boot && s1.phaser && s1.build && s1.three, "the loader finished and the game's scripts ran");
  check(s1.logoOk > 0 && /^data:/.test(s1.logo), "the title logo comes from the file (as a data: URL)");
  check(s1.music === "none", "no music button");
  check(s1.night !== "57", "the other game's save is not this game's");
  await page.screenshot({ path: path.join(shots, "cv-01-title.png") });

  var fam = st === "va" ? "G9" : "NJ5";
  await f.click('#title-screen .card[data-family="' + fam + '"]');
  await f.waitForSelector("#skill-screen:not(.hidden)");
  await f.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await f.isVisible("#btn-char-confirm")) await f.click("#btn-char-confirm");
  await page.waitForTimeout(3000);
  for (var i = 0; i < 12; i++) { if (await f.isVisible("#tut-skip")) { await f.click("#tut-skip"); break; } await page.waitForTimeout(300); }
  await page.waitForTimeout(1500);
  var hud = await f.evaluate(function () { return { stem: document.getElementById("eoc-stem").textContent, music: window.SolMusic.state() }; });
  check(hud.stem.length > 10, "a level starts with a question");
  check(!hud.music.key, "no music track is playing");
  if (await f.isVisible("#read-go")) await f.click("#read-go");
  await page.waitForTimeout(1500);
  var sprites = await f.evaluate(function () {
    var g = window.SolScene && SolScene.game, tx = g && g.textures, bad = [];
    if (tx) tx.getTextureKeys().forEach(function (k) { var s = tx.get(k).getSourceImage(); if (s && s.width === 0) bad.push(k); });
    return { n: tx ? tx.getTextureKeys().length : -1, bad: bad };
  });
  check(sprites.n > 10 && sprites.bad.length === 0, "the game's images loaded: " + sprites.n + " textures" + (sprites.bad.length ? ", empty: " + sprites.bad.join(",") : ""));
  await page.screenshot({ path: path.join(shots, "cv-02-maze.png") });

  /* the 3D castle */
  await f.evaluate(function () {
    var ids = ["keep", "k-stables", "k-church", "k-market", "trophy-midgard", "tower", "wall", "gate"];
    var picks = ids.map(function (id, i) { return { night: 5, piece: id, style: "blue", src: "free", deco: false, ord: i, rot: 0, cx: (i % 4) * 4, cy: Math.floor(i / 4) * 4 }; });
    localStorage.setItem("afterHours.v1.build", JSON.stringify({ v: 4, theme: "castle", salt: 7, coins: 50, kit: 2, owned: {}, rewards: {}, picks: picks, view: { a: 0, z: 1, px: 0, py: 0 }, code: "" }));
  });
  await page.reload();
  f = await frame();
  await f.waitForSelector("#title-screen:not(.hidden)", { timeout: 60000 });
  await f.evaluate(function () { SolBuild.init && SolBuild.init(); SolBuild.showGallery(); });
  await f.waitForSelector("#build-overlay:not(.hidden)");
  var loads;
  for (var w = 0; w < 40; w++) {
    await page.waitForTimeout(500);
    loads = await f.evaluate(function () { return SolBuild._loads3d(); });
    if (loads && loads.models === "ok" && loads.total > 3 && loads.loaded + loads.failed === loads.total) break;
  }
  await page.waitForTimeout(1500);
  var probe = await f.evaluate(function () { return SolBuild._probe(3, 2, 1); });
  check(probe && probe.use3d, "the castle draws in 3D");
  check(loads && loads.models === "ok" && loads.failed === 0 && loads.loaded === loads.total && loads.total > 3, "every 3D model loaded from the file: " + JSON.stringify(loads));
  await page.screenshot({ path: path.join(shots, "cv-03-castle-3d.png") });

  /* saves: every key this game wrote carries its prefix; the other game's keys are untouched */
  var keys = await f.evaluate(function () { return Object.keys(localStorage); });
  var bare = keys.filter(function (k) { return /^afterHours/.test(k) && !/^afterHours\.v1\.(night|nick)$/.test(k); });
  check(bare.length === 0 && keys.some(function (k) { return k.indexOf("solReading." + st + ":afterHours.v1.build") === 0; }), "the game's saves carry their own prefix" + (bare.length ? ": bare " + bare.join(",") : ""));
  var other = await f.evaluate(function () { return localStorage["afterHours.v1.night"]; });
  check(other === "57", "the other game's save is untouched");

  check(served.every(function (p) { return p === "/game.html" || p === "/blank"; }), "the file asked its server for nothing else: " + served.filter(function (p) { return p !== "/game.html" && p !== "/blank"; }).join(", "));
  check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.slice(0, 5).join(" | ") : ""));
  await browser.close(); files.close(); lms.close();
  console.log(fails.length ? "FAILED: " + fails.length : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
