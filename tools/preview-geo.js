/* Look at Geometry packs the way students see them: node tools/preview-geo.js [js/content201.js ...] [--id pack-id]
   For each GEO pack it draws the passage (figure + givens) with the game's own CSS in the two places it appears: the
   side panel during play (340 px wide, figure at most 150 px tall) and the reading pop-up (640 px wide), then the
   six questions, and saves tools/shots/geo/<pack-id>.png. It also lists figure labels that overlap each other or run
   outside the figure, which usually means a label is misplaced. Exit 1 if any pack has such a problem. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url"), vm = require("vm");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var root = path.join(__dirname, ".."), out = path.join(__dirname, "shots", "geo");
fs.mkdirSync(out, { recursive: true });
var args = process.argv.slice(2), only = null, files = [];
for (var i = 0; i < args.length; i++) { if (args[i] === "--id") only = args[++i]; else files.push(path.basename(args[i])); }
if (!files.length) files = fs.readdirSync(path.join(root, "js")).filter(function (f) { return /^content2\d\d\.js$/.test(f); });
var sandbox = { window: {}, console: console }; sandbox.global = sandbox.window;
vm.runInNewContext(fs.readFileSync(path.join(root, "js", "content.js"), "utf8"), sandbox);
var start = sandbox.window.HEIST_PACKS.length;
files.forEach(function (f) { vm.runInNewContext(fs.readFileSync(path.join(root, "js", f), "utf8"), sandbox, { filename: f }); });
var packs = sandbox.window.HEIST_PACKS.slice(start).filter(function (p) { return p.family === "GEO" && (!only || p.id === only); });
if (!packs.length) { console.log("no GEO packs found"); process.exit(1); }

var MIME = { html: "text/html", js: "application/javascript", css: "text/css", png: "image/png" };
var srv = http.createServer(function (req, res) {
  var u = url.parse(req.url).pathname;
  if (u === "/__geo.html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end('<!DOCTYPE html><html><head><meta charset="utf-8"><link rel="stylesheet" href="/css/after-hours.css">' +
      '<style>body{margin:0;padding:12px;background:var(--bg);display:flex;gap:16px;align-items:flex-start;width:max-content}' +
      '.col{display:flex;flex-direction:column;gap:8px}.lab{color:var(--gold);font:700 11px system-ui;letter-spacing:.1em;text-transform:uppercase}' +
      '#side{width:340px;background:#141822;border:2px solid #c9b48a;border-radius:10px;padding:8px}' +
      '#pop{width:640px;background:#141822;border:2px solid var(--gold);border-radius:16px;padding:14px}' +
      '#qs{width:420px;color:var(--ink);font:14px/1.35 system-ui}#qs li{margin:0 0 8px}#qs .k{color:var(--gold);font-weight:700}' +
      '</style></head><body><div class="col"><div class="lab">Side panel (340 px)</div><div id="side"><div id="eoc-passage" class="passage"></div></div></div>' +
      '<div class="col"><div class="lab">Reading pop-up</div><div id="pop"><div class="read-scroll"><div id="read-passage" class="passage"></div></div></div></div>' +
      '<div class="col"><div class="lab">Questions (key in gold)</div><ol id="qs"></ol></div></body></html>');
    return;
  }
  var f = path.join(root, decodeURIComponent(u));
  fs.readFile(f, function (err, buf) {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": MIME[f.split(".").pop()] || "application/octet-stream" }); res.end(buf);
  });
});
(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }).catch(function () { return chromium.launch(); });
  var page = await browser.newPage({ viewport: { width: 1480, height: 900 } });
  await page.goto("http://127.0.0.1:" + srv.address().port + "/__geo.html", { waitUntil: "load" });
  var bad = 0;
  for (var p of packs) {
    var res = await page.evaluate(function (p) {
      document.getElementById("eoc-passage").innerHTML = p.passage;
      document.getElementById("read-passage").innerHTML = p.passage;
      var qs = document.getElementById("qs"); qs.innerHTML = "";
      p.claims.forEach(function (c) {
        var li = document.createElement("li"), keys = [].concat(c.correct);
        li.appendChild(document.createTextNode(c.stem + " [" + c.sub + "]"));
        c.choices.forEach(function (ch) { var d = document.createElement("div"); d.textContent = ch.letter + ". " + ch.text; if (keys.indexOf(ch.letter) !== -1) d.className = "k"; li.appendChild(d); });
        qs.appendChild(li);
      });
      /* labels that overlap or leave the figure, measured in the larger (pop-up) copy */
      var issues = [];
      document.querySelectorAll("#read-passage svg").forEach(function (svg, si) {
        var box = svg.getBoundingClientRect(), ts = Array.prototype.slice.call(svg.querySelectorAll("text"));
        var rs = ts.map(function (t) { return t.getBoundingClientRect(); });
        rs.forEach(function (r, a) {
          if (r.left < box.left - 2 || r.right > box.right + 2 || r.top < box.top - 2 || r.bottom > box.bottom + 2) issues.push("figure " + (si + 1) + ': label "' + ts[a].textContent + '" runs outside the figure');
          for (var b = a + 1; b < rs.length; b++) {
            var q = rs[b], ox = Math.min(r.right, q.right) - Math.max(r.left, q.left), oy = Math.min(r.bottom, q.bottom) - Math.max(r.top, q.top);
            if (ox > 2 && oy > 2) issues.push("figure " + (si + 1) + ': labels "' + ts[a].textContent + '" and "' + ts[b].textContent + '" overlap');
          }
        });
      });
      var side = document.querySelector("#eoc-passage svg"), sr = side && side.getBoundingClientRect();
      return { issues: issues, sideH: sr ? Math.round(sr.height) : 0 };
    }, p);
    await page.waitForTimeout(50);
    await page.screenshot({ path: path.join(out, p.id + ".png"), fullPage: true });
    var line = (res.issues.length ? "FAIL " : "ok   ") + p.id + (res.sideH ? "  (figure " + res.sideH + " px tall in the side panel)" : "  (no figure)");
    console.log(line); res.issues.forEach(function (s) { console.log("       " + s); });
    if (res.issues.length) bad++;
  }
  await browser.close(); srv.close();
  console.log("\n" + packs.length + " pack(s); screenshots in tools/shots/geo/" + (bad ? "; " + bad + " with label problems" : ""));
  process.exit(bad ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
