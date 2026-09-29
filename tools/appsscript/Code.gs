/* SOL Labyrinth for Google Apps Script — the whole project is this one file.
   The game lives in a public GitHub repository. School filters block GitHub on Chromebooks, but this
   script runs on Google's servers, so it fetches the game there and hands it to the page.

   Set up (once):
     1. script.google.com → New project. Delete what is in Code.gs, paste this whole file, click Save.
     2. Deploy → New deployment → gear icon → Web app.
        Execute as: Me.   Who has access: Anyone (or: Anyone in your school's domain).
        Click Deploy, then Authorize access and allow it (it needs "connect to an external service").
     3. Copy the Web app URL (ends in /exec). That is the game's link. In Google Sites: Insert → Embed →
        By URL → paste it → Insert, then drag the frame bigger.
   New versions of the game arrive by themselves: the page always loads the newest one. */

var BASES = __BASES__;

/* the page */
function doGet() {
  return HtmlService.createHtmlOutput(fetchText_("loader.html"))
    .setTitle("__TITLE__")
    .addMetaTag("viewport", "width=device-width, initial-scale=1")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/* called by the page: which parts make up the newest game */
function solManifest() {
  return fetchText_("manifest.json");
}

/* called by the page: one part of the game, as base64 */
function solPart(name) {
  if (!/^sol-[0-9a-f]+-\d+\.bin$/.test(String(name))) throw new Error("bad part name");
  return Utilities.base64Encode(fetch_(name).getContent());
}

function fetchText_(name) {
  var cache = CacheService.getScriptCache(), key = "sol:" + name, hit = cache.get(key);
  if (hit) return hit;
  var text = fetch_(name).getContentText();
  if (text.length < 90000) cache.put(key, text, 300);
  return text;
}

function fetch_(name) {
  var last = "";
  for (var i = 0; i < BASES.length; i++) {
    try {
      var r = UrlFetchApp.fetch(BASES[i] + name, { muteHttpExceptions: true, followRedirects: true });
      if (r.getResponseCode() === 200) return r;
      last = BASES[i] + name + " → " + r.getResponseCode();
    } catch (e) { last = String(e); }
  }
  throw new Error("Could not load " + name + " (" + last + ")");
}
