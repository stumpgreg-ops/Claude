/* Earth Science 1.0: does every question fit the side panel?  node tools/fit-questions.js [WxH ...]
   Starts a maze level in each frame size (default 640x500, 700x500, 1000x500), then puts every question of the bank
   (js/content*.js) into the side panel in turn, the way js/game.js does, and checks that the stem and all four
   answers show with at least MIN_PASSAGE pixels left for the lab notes (which scroll on their own). Lists the
   questions that don't fit, longest first. tools/audit-500.js checks the screens with whichever question a level
   happens to draw; this checks all of them. Exit 1 if any question doesn't fit. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var root = path.join(__dirname, ".."), MIN_PASSAGE = 36;
var sizes = process.argv.slice(2).filter(function (a) { return /^\d+x\d+$/.test(a); });
if (!sizes.length) sizes = ["640x500", "700x500", "1000x500", "1280x500", "1280x720", "1366x768"];   /* tools/audit-500.js's sizes */
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
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var bad = 0;
  for (var s = 0; s < sizes.length; s++) {
    var wh = sizes[s].split("x").map(Number);
    var page = await browser.newPage({ viewport: { width: wh[0], height: wh[1] } });
    await page.goto(base + "index.html", { waitUntil: "load" });
    await page.evaluate(function () { localStorage.clear(); });
    await page.reload({ waitUntil: "load" }); await page.waitForTimeout(600);
    await page.click('#title-screen .card[data-family="ALL"]');
    await page.waitForSelector("#mode-screen:not(.hidden)");
    await page.click('#mode-packs .card[data-gamemode="maze"]');
    await page.waitForSelector("#skill-screen:not(.hidden)");
    await page.waitForTimeout(400);
    await page.click("#btn-skill-start");
    await page.waitForSelector("#btn-char-confirm:visible", { timeout: 4000 }).catch(function () {});
    if (await page.isVisible("#btn-char-confirm").catch(function () { return false; })) await page.click("#btn-char-confirm");
    await page.waitForFunction(function () { return window.SolScene && SolScene.claim; }, null, { timeout: 20000 });
    await page.waitForTimeout(800);
    var res = await page.evaluate(function (MIN) {
      var body = document.querySelector("#hud .eoc-body"), item = document.querySelector("#hud .eoc-item");
      var stem = document.getElementById("eoc-stem"), ol = document.getElementById("eoc-choices");
      var gap = parseFloat(getComputedStyle(body).rowGap) || 0, out = [];
      window.HEIST_PACKS.forEach(function (p) {
        p.claims.forEach(function (c) {
          stem.textContent = c.stem;
          ol.innerHTML = "";
          c.choices.forEach(function (ch) { var li = document.createElement("li"); li.innerHTML = '<span class="let">' + ch.letter + "</span><span>" + ch.text + "</span>"; ol.appendChild(li); });
          /* the panel across the top (a narrow, tall page) puts the notes and the question side by side */
          var grid = getComputedStyle(body).display === "grid";
          var need = grid ? item.offsetHeight : item.offsetHeight + gap + MIN, have = body.clientHeight;
          if (need > have) out.push({ id: p.id + ":" + c.id, over: Math.round(need - have) });
        });
      });
      return { have: body.clientHeight, hud: document.getElementById("hud").clientWidth, out: out.sort(function (a, b) { return b.over - a.over; }) };
    }, MIN_PASSAGE);
    console.log(sizes[s] + ": panel " + res.hud + " px wide, " + res.have + " px for notes + question; " + res.out.length + " question(s) don't fit" +
      (res.out.length ? ":\n  " + res.out.map(function (o) { return o.id + " (+" + o.over + " px)"; }).join("\n  ") : ""));
    bad += res.out.length;
    await page.close();
  }
  await browser.close(); srv.close();
  process.exit(bad ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
