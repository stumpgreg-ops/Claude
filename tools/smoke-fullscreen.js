/* Headless check of the "Full screen" button (v5.24): node tools/smoke-fullscreen.js (run tools/build-games.js first).
   After the game has gone full screen and the player leaves it (Esc), a "⛶ Full screen" button shows on top of every
   screen — a level, the shop, the builder, the badges, the progress window, the teacher screen and the title — and one
   click puts the game back in full screen. It never shows before the game has been full screen, nor while it is. */
var path = require("path"), fs = require("fs"), http = require("http");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var dir = path.join(__dirname, "..", "dist", "va"), fails = [];
function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
var TYPES = { ".js": "text/javascript", ".html": "text/html", ".css": "text/css", ".json": "application/json", ".png": "image/png", ".webp": "image/webp", ".glb": "model/gltf-binary", ".mp3": "audio/mpeg", ".ogg": "audio/ogg" };
var srv = http.createServer(function (q, r) {
  var p = decodeURIComponent(q.url.split("?")[0]); if (p === "/") p = "/index.html";
  var f = path.join(dir, p);
  if (f.indexOf(dir) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
  r.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" }); r.end(fs.readFileSync(f));
});
(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  var page = await (await browser.newContext({ viewport: { width: 1280, height: 760 } })).newPage(), errors = [];
  page.on("pageerror", function (e) { errors.push(e.message); });
  await page.goto("http://127.0.0.1:" + srv.address().port + "/");
  await page.waitForSelector("#title-screen:not(.hidden)");
  await page.waitForTimeout(600);
  /* the button: shown, on top (what a click at its middle lands on), and the game's full-screen state */
  function state() {
    var b = document.getElementById("btn-fs-back"), shown = !!(b && !b.classList.contains("hidden") && getComputedStyle(b).display !== "none" && b.getBoundingClientRect().width > 0), top = false;
    if (shown) { var r = b.getBoundingClientRect(), e = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); top = e === b || b.contains(e); }
    return { fs: !!document.fullscreenElement, shown: shown, top: top };
  }
  /* the browser switches in its own time (slow under software rendering): wait until it has, and the button has followed */
  async function settle(fsWanted) {
    await page.waitForFunction(function (want) {
      var b = document.getElementById("btn-fs-back"), shown = !!(b && !b.classList.contains("hidden"));
      return !!document.fullscreenElement === want && shown === !want;
    }, fsWanted, { timeout: 8000 }).catch(function () {});
    await page.waitForTimeout(150);
  }
  async function leave() { await page.evaluate(function () { return document.exitFullscreen(); }); await settle(false); }
  async function back(where) {
    var s = await page.evaluate(state);
    check(!s.fs && s.shown && s.top, where + ": out of full screen, the Full screen button shows on top: " + JSON.stringify(s));
    await page.click("#btn-fs-back");
    await settle(true);
    s = await page.evaluate(state);
    check(s.fs && !s.shown, where + ": one click puts the game back in full screen and the button goes: " + JSON.stringify(s));
  }
  var s0 = await page.evaluate(state);
  check(!s0.fs && !s0.shown, "before the game has been full screen, no button: " + JSON.stringify(s0));

  /* a level (starting one goes full screen) */
  await page.click('#title-screen .card[data-family="G9"]'); await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-gamemode="ALL"]'); await page.waitForSelector("#skill-screen:not(.hidden)");
  await page.click("#btn-skill-start"); await page.waitForTimeout(500);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 30000 });
  await page.waitForTimeout(1500);
  var s1 = await page.evaluate(state);
  check(s1.fs && !s1.shown, "starting a level goes full screen; no button while full screen: " + JSON.stringify(s1));
  await leave(); await back("a level (the first window open)");
  for (var i = 0; i < 8; i++) for (var sel of ["#tut-skip", "#read-go"]) if (await page.isVisible(sel)) { await page.click(sel); await page.waitForTimeout(300); }
  await leave(); await back("a level, playing");

  /* the shop, the builder, the badges, the progress window, the teacher screen */
  var screens = [
    ["the shop", function () { SolBuild.showShop(1); }, "#build-overlay:not(.hidden)", function () { SolBuild.close(); }],
    ["the builder (My Town)", function () { SolBuild.showGallery(); }, "#build-overlay:not(.hidden)", function () { SolBuild.close(); }],
    ["the badges", function () { SolBadges.show(); }, null, function () { SolBadges.hide(); }],
    ["the progress window", function () { SolProgress.show(); }, null, function () { SolProgress.hide(); }],
    ["the teacher screen", function () { SolTeacher.show(); }, "#teacher-overlay:not(.hidden)", function () { SolTeacher.hide(); }]
  ];
  for (var sc of screens) {
    await page.evaluate(sc[1]);
    if (sc[2]) await page.waitForSelector(sc[2], { timeout: 15000 }); else await page.waitForTimeout(800);
    await page.waitForTimeout(600);
    await leave(); await back(sc[0]);
    await page.evaluate(sc[3]); await page.waitForTimeout(400);
  }

  /* the title screen. Menu asks "Leave this level?" in a browser dialog (Yes), and Chrome leaves full screen to
     show a dialog, so the button is already there on the title screen */
  page.once("dialog", function (d) { d.accept(); });
  await page.evaluate(function () { document.getElementById("btn-quit").click(); });
  await page.waitForSelector("#title-screen:not(.hidden)", { timeout: 30000 });
  if (await page.evaluate(function () { return !!document.fullscreenElement; })) await leave(); else await settle(false);
  await back("the title screen");
  await page.screenshot({ path: path.join(__dirname, "shots", "fs-01.png") });
  check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.slice(0, 3).join(" | ") : ""));
  await browser.close(); srv.close();
  console.log(fails.length ? "\n" + fails.length + " FAILED" : "\nALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
