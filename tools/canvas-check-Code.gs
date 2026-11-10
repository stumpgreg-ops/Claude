/* Canvas check: the optional Apps Script half (goes with tools/canvas-check.html).

   It only proves a round trip: the check page sends a random test number, this script keeps it for 10 minutes,
   and the page asks for it back. No student information is sent or kept.

   Set it up (about 5 minutes, once):
   1. Go to script.google.com while signed in to your school Google account and click New project.
   2. Delete what is in Code.gs, paste this whole file in, and click Save.
   3. Click Deploy > New deployment. Next to "Select type", click the gear and pick Web app.
        Execute as:      Me
        Who has access:  Anyone
      (If "Anyone" isn't offered and only "Anyone within [your district]" is, deploy with that anyway. The check
       page will then fail the round trip, and that is the answer we need: the game couldn't report from home.)
   4. Click Deploy, allow access when Google asks, and copy the Web app link (it ends in /exec).
   5. Paste the link into box 3 on the Canvas check page and click Test it.
   You can delete the project afterwards (script.google.com > the project > Remove). */

function doGet(e) {
  var p = (e && e.parameter) || {};
  var out = { ok: true, kind: "canvas-check" };
  if (p.nonce) out.got = CacheService.getScriptCache().get("n:" + clean_(p.nonce)) || "";
  return json_(out);
}

function doPost(e) {
  var body = (e && e.postData && e.postData.contents) || "", n = "";
  try { n = clean_(JSON.parse(body).nonce); } catch (x) {}
  if (n) CacheService.getScriptCache().put("n:" + n, "received", 600);
  return json_({ ok: true, saved: !!n });
}

function clean_(s) { return String(s || "").replace(/[^a-z0-9]/gi, "").slice(0, 40); }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
