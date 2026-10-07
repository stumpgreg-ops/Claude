/* The teacher progress page's script (tools/build-teacher.js inlines it after js/progress-code.js).
   Reads progress codes from pasted text, from .txt / .html files and from Canvas's "Download Submissions" .zip
   (unzipped here: the zip's central directory or local headers, and DecompressionStream("deflate-raw")), checks
   each code, and shows one row per student with a suggested participation grade from the teacher's goals. */
(function () {
  "use strict";
  var C = window.SolProgressCode, ST = window.TEACHER_STATE, B = C.BUILDS[ST];
  var LS = "solTeacher." + ST + ".goals";
  var GOALS = [
    { k: "minutes", label: "Minutes played", unit: "minutes", def: 60, w: 1 },
    { k: "won", label: "Levels won", unit: "levels", def: 10, w: 1 },
    { k: "answered", label: "Questions answered", unit: "questions", def: 50, w: 1 },
    { k: "days", label: "Days played", unit: "days", def: 5, w: 0 },
    { k: "acc", label: "Right on the first try", unit: "%", def: 70, w: 0 }
  ];
  var DEF_POINTS = 100;
  var $ = function (id) { return document.getElementById(id); };
  var rows = [], notes = [], sortBy = { k: "student", dir: 1 };

  /* ── goals (remembered in this browser) ── */
  var goals = loadGoals();
  function loadGoals() {
    var g = { points: DEF_POINTS };
    GOALS.forEach(function (x) { g[x.k] = { t: x.def, w: x.w }; });
    try {
      var s = JSON.parse(localStorage.getItem(LS) || "null");
      if (s && typeof s === "object") {
        if (s.points > 0) g.points = +s.points;
        GOALS.forEach(function (x) {
          var v = s[x.k];
          if (v && v.t > 0) g[x.k].t = +v.t;
          if (v && v.w >= 0) g[x.k].w = +v.w;
        });
      }
    } catch (e) {}
    return g;
  }
  function saveGoals() { try { localStorage.setItem(LS, JSON.stringify(goals)); } catch (e) {} }
  function numIn(v, min, max, dflt) { v = parseFloat(v); return isFinite(v) ? Math.min(max, Math.max(min, v)) : dflt; }
  function paintGoals() {
    var tb = $("goal-rows");
    tb.innerHTML = "";
    GOALS.forEach(function (x) {
      var tr = document.createElement("tr");
      tr.innerHTML = "<td>" + x.label + "</td>" +
        '<td><input type="number" min="1" max="' + (x.k === "acc" ? 100 : 100000) + '" step="1" data-k="' + x.k + '" data-f="t" aria-label="' + x.label + ' for full credit" /> ' + x.unit + "</td>" +
        '<td><input type="number" min="0" max="10" step="1" data-k="' + x.k + '" data-f="w" aria-label="How much ' + x.label + ' counts" /></td>';
      tb.appendChild(tr);
    });
    Array.prototype.forEach.call(tb.querySelectorAll("input"), function (inp) {
      inp.value = goals[inp.dataset.k][inp.dataset.f];
      inp.addEventListener("input", function () {
        var f = inp.dataset.f, x = goals[inp.dataset.k];
        if (f === "t") x.t = numIn(inp.value, 1, inp.dataset.k === "acc" ? 100 : 100000, x.t);
        else x.w = numIn(inp.value, 0, 10, x.w);
        saveGoals(); paint();
      });
    });
    $("points").value = goals.points;
  }
  $("points").addEventListener("input", function () { goals.points = numIn($("points").value, 1, 1000, goals.points); saveGoals(); paint(); });
  $("goals-reset").addEventListener("click", function () {
    try { localStorage.removeItem(LS); } catch (e) {}
    goals = loadGoals(); paintGoals(); paint();
  });

  function grade(r) {
    if (!r.ok || r.build !== ST) return null;
    var d = r.data, sumW = 0, got = 0;
    GOALS.forEach(function (x) {
      var g = goals[x.k], w = g.w;
      if (!(w > 0)) return;
      var v = x.k === "acc" ? (d.answered ? 100 * d.right / d.answered : 0) : d[x.k];
      sumW += w; got += w * Math.min(1, v / g.t);
    });
    if (!sumW) return null;
    return Math.round(10 * goals.points * got / sumW) / 10;
  }

  /* ── reading codes ── */
  function norm(s) { return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, ""); }
  function cleanName(s) {
    return String(s || "").replace(/[\t:,;=|]+\s*$/, "").replace(/^[\s\-*•·>\d.)]+/, "").replace(/\s+/g, " ").trim().slice(0, 60);
  }
  /* Canvas names a submission file after the student: "smithann_12345_67890_text.html" (or "smithann_LATE_...") */
  function nameFromFile(f) {
    var base = String(f).split(/[\\/]/).pop().replace(/\.[a-z0-9]+$/i, "");
    var parts = base.split("_");
    if (parts.length >= 3 && /^\d+$/.test(parts[parts.length - 2] || "") || parts.length >= 2 && /^(LATE|\d+)$/i.test(parts[1])) return parts[0];
    return base;
  }
  /* text from an HTML submission: block tags become line breaks, entities are decoded */
  function htmlText(html) {
    var t = String(html).replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<\/?(p|div|br|li|ul|ol|tr|td|th|h\d|table|section|article|blockquote|pre)\b[^>]*>/gi, "\n")
      .replace(/<[^>]*>/g, "");
    var ta = document.createElement("textarea");
    ta.innerHTML = t;
    return ta.value;
  }
  function addText(text, source, fileName) {
    var found = C.findCodes(text), n = 0;
    found.forEach(function (f) {
      var name = "";
      if (fileName) name = nameFromFile(fileName);
      else if (/[\t:,;=|]\s*$/.test(f.before)) name = cleanName(f.before);
      addRow(f, name, source);
      n++;
    });
    return n;
  }
  function addRow(f, name, source) {
    var res = f.result, r = { name: name, source: source, raw: res.ok ? res.code : f.raw, ok: !!res.ok, build: res.build,
      data: res.ok ? res.data : null, why: res.ok ? "" : res.why, count: 1 };
    r.student = name || (r.data && r.data.nick ? r.data.nick : "");
    r.key = name ? "n:" + norm(name) : (r.data && r.data.nick ? "k:" + norm(r.data.nick) : "c:" + norm(r.raw));
    var old = null, i;
    for (i = 0; i < rows.length; i++) if (rows[i].key === r.key) { old = rows[i]; break; }
    if (!old) { rows.push(r); return; }
    if (old.raw === r.raw) return;                     /* the same code twice */
    var better = (r.ok && !old.ok) || (r.ok && old.ok && (r.build === ST) > (old.build === ST)) ||
      (r.ok === old.ok && (r.build === ST) === (old.build === ST) && r.ok && r.data.made > old.data.made);
    var keep = better ? r : old;
    keep.count = old.count + 1;
    rows[i] = keep;
  }
  function msg(text, bad) { var m = $("msg"); m.textContent = text; m.className = bad ? "bad" : "ok"; }

  /* ── .zip files ── */
  function u16(u, o) { return u[o] | (u[o + 1] << 8); }
  function u32(u, o) { return (u[o] | (u[o + 1] << 8) | (u[o + 2] << 16) | (u[o + 3] << 24)) >>> 0; }
  var utf8 = new TextDecoder("utf-8");
  function zipEntries(u) {
    var list = [], i, eocd = -1;
    for (i = u.length - 22; i >= 0 && i >= u.length - 65558; i--) if (u32(u, i) === 0x06054b50) { eocd = i; break; }
    if (eocd >= 0) {
      var n = u16(u, eocd + 10), off = u32(u, eocd + 16);
      for (i = 0; i < n && off + 46 <= u.length && u32(u, off) === 0x02014b50; i++) {
        var nl = u16(u, off + 28), xl = u16(u, off + 30), cl = u16(u, off + 32);
        list.push({ name: utf8.decode(u.subarray(off + 46, off + 46 + nl)), method: u16(u, off + 10), size: u32(u, off + 20), at: u32(u, off + 42) });
        off += 46 + nl + xl + cl;
      }
    }
    if (!list.length) {                                /* no central directory: walk the local headers */
      var p = 0;
      while (p + 30 <= u.length && u32(u, p) === 0x04034b50) {
        var flags = u16(u, p + 6), size = u32(u, p + 18), nl2 = u16(u, p + 26), xl2 = u16(u, p + 28);
        if ((flags & 8) && !size) break;
        list.push({ name: utf8.decode(u.subarray(p + 30, p + 30 + nl2)), method: u16(u, p + 8), size: size, at: p });
        p += 30 + nl2 + xl2 + size;
      }
    }
    return list;
  }
  function inflate(bytes) {
    if (typeof DecompressionStream === "undefined") return Promise.reject(new Error("nozip"));
    var ds;
    try { ds = new DecompressionStream("deflate-raw"); } catch (e) { return Promise.reject(new Error("nozip")); }
    return new Response(new Blob([bytes]).stream().pipeThrough(ds)).arrayBuffer().then(function (b) { return new Uint8Array(b); });
  }
  function readZip(buf) {
    var u = new Uint8Array(buf), list = zipEntries(u), out = [];
    if (!list.length) return Promise.reject(new Error("notzip"));
    return list.reduce(function (p, e) {
      return p.then(function () {
        if (/\/$/.test(e.name) || /(^|\/)(__MACOSX|\.)/.test(e.name)) return;
        if (u32(u, e.at) !== 0x04034b50) return;
        var start = e.at + 30 + u16(u, e.at + 26) + u16(u, e.at + 28), data = u.subarray(start, start + e.size);
        var got = e.method === 0 ? Promise.resolve(data) : e.method === 8 ? inflate(data) : Promise.resolve(null);
        return got.then(function (b) { if (b) out.push({ name: e.name, text: utf8.decode(b) }); });
      });
    }, Promise.resolve()).then(function () { return out; });
  }
  function readFiles(files) {
    var total = 0, filesRead = 0, problems = [];
    files = Array.prototype.slice.call(files || []);
    if (!files.length) return;
    msg("Reading " + files.length + " file" + (files.length === 1 ? "" : "s") + "…");
    files.reduce(function (p, f) {
      return p.then(function () {
        return f.arrayBuffer().then(function (buf) {
          var u = new Uint8Array(buf);
          if (u.length >= 4 && u32(u, 0) === 0x04034b50 || /\.zip$/i.test(f.name)) {
            return readZip(buf).then(function (entries) {
              entries.forEach(function (e) {
                filesRead++;
                var n = addText(/\.html?$/i.test(e.name) ? htmlText(e.text) : e.text, "zip", e.name);
                total += n;
                if (!n) problems.push(nameFromFile(e.name) + ": no code in the submission");
              });
            }, function (err) {
              problems.push(err.message === "nozip" ? f.name + ": this browser can't open .zip files. Use Chrome (or unzip the file and choose the files inside it)." : f.name + ": not a .zip file Canvas made, or it is damaged.");
            });
          }
          filesRead++;
          var text = utf8.decode(u), n2 = addText(/\.html?$/i.test(f.name) || /^\s*</.test(text) ? htmlText(text) : text, "file", /\.(html?|txt)$/i.test(f.name) && /_/.test(f.name) ? f.name : "");
          total += n2;
          if (!n2) problems.push(f.name + ": no code in the file");
        });
      });
    }, Promise.resolve()).then(function () {
      notes = problems;
      paint();
      if (!total && problems.length && /browser can't open/.test(problems.join(" "))) msg(problems[0], true);
      else msg("Found " + total + " code" + (total === 1 ? "" : "s") + " in " + filesRead + " file" + (filesRead === 1 ? "" : "s") + "." + (problems.length ? " See the notes under the table." : ""), !total);
    }, function (e) { msg("Could not read the file: " + e.message, true); });
  }

  /* ── the table ── */
  function pct(a, b) { return b ? Math.round(100 * a / b) : null; }
  function fmtDay(s) {
    if (!s) return "";
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
    return m ? new Date(+m[1], +m[2] - 1, +m[3]).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) : s;
  }
  function fmtTime(ms) {
    var d = new Date(ms);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) + " " + d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  }
  function isoTime(ms) { var d = new Date(ms); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2); }
  function D(r) { return r.ok ? r.data : null; }
  function status(r) {
    if (!r.ok) return "INVALID";
    if (r.build !== ST) return "Other game";
    return "Valid";
  }
  var COLS = [
    { k: "student", h: "Student", v: function (r) { return r.student || "(no name)"; }, cls: "name l" },
    { k: "nick", h: "Nickname in code", v: function (r) { return D(r) ? D(r).nick : ""; }, cls: "l" },
    { k: "status", h: "Code", v: status, cls: "l status" },
    { k: "grade", h: "Suggested grade (of " + "{P})", v: grade, num: true, cls: "grade" },
    { k: "hi", h: "Highest level", v: function (r) { return D(r) && D(r).hiReached; }, num: true, show: function (r) { var d = D(r); return d ? d.hiReached + (d.hiWon !== d.hiReached ? " (won " + d.hiWon + ")" : "") : ""; } },
    { k: "won", h: "Levels won", v: function (r) { return D(r) && D(r).won; }, num: true },
    { k: "started", h: "Levels played", v: function (r) { return D(r) && D(r).started; }, num: true },
    { k: "answered", h: "Questions answered", v: function (r) { return D(r) && D(r).answered; }, num: true },
    { k: "acc", h: "% right first try", v: function (r) { return D(r) && pct(D(r).right, D(r).answered); }, num: true, show: function (r) { var p = D(r) && pct(D(r).right, D(r).answered); return p == null ? "" : p + "%"; } },
    { k: "minutes", h: "Minutes played", v: function (r) { return D(r) && D(r).minutes; }, num: true },
    { k: "days", h: "Days played", v: function (r) { return D(r) && D(r).days; }, num: true },
    { k: "first", h: "First played", v: function (r) { return D(r) && D(r).first; }, show: function (r) { return fmtDay(D(r) && D(r).first); } },
    { k: "last", h: "Last played", v: function (r) { return D(r) && D(r).last; }, show: function (r) { return fmtDay(D(r) && D(r).last); } }
  ];
  B.skills.forEach(function (s, i) {
    COLS.push({ k: "sk" + i, h: s[1] + " (% right)", skill: s,
      v: function (r) { var d = D(r); if (!d || r.build !== ST || !d.skills[i]) return null; return pct(d.skills[i].r, d.skills[i].a); }, num: true,
      show: function (r) { var d = D(r); if (!d || r.build !== ST || !d.skills[i] || !d.skills[i].a) return d && r.build === ST ? "–" : ""; var x = d.skills[i]; return pct(x.r, x.a) + "% of " + x.a; } });
  });
  COLS.push({ k: "made", h: "Code made", v: function (r) { return D(r) && D(r).made; }, show: function (r) { return D(r) ? fmtTime(D(r).made) : ""; } });

  function cmp(a, b) {
    var c = COLS.filter(function (x) { return x.k === sortBy.k; })[0] || COLS[0];
    var x = c.v(a), y = c.v(b);
    var ex = x == null || x === "", ey = y == null || y === "";
    if (ex || ey) return ex === ey ? 0 : ex ? 1 : -1;      /* blanks last */
    if (c.num) return (x - y) * sortBy.dir;
    return String(x).localeCompare(String(y), undefined, { numeric: true, sensitivity: "base" }) * sortBy.dir;
  }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function head(c) { return c.h.replace("{P}", goals.points); }
  function paint() {
    var t = $("table"), sorted = rows.slice().sort(function (a, b) { return cmp(a, b) || String(a.student).localeCompare(String(b.student)); });
    var valid = rows.filter(function (r) { return r.ok && r.build === ST; }).length, bad = rows.filter(function (r) { return !r.ok; }).length;
    var other = rows.length - valid - bad;
    $("counts").innerHTML = rows.length ? "<span><b>" + rows.length + "</b> student" + (rows.length === 1 ? "" : "s") + "</span><span class=\"st-ok\">" + valid + " valid</span>" +
      (bad ? "<span class=\"st-bad\">" + bad + " INVALID</span>" : "") + (other ? "<span class=\"st-other\">" + other + " from another game</span>" : "") : "";
    if (!rows.length) {
      t.innerHTML = '<tbody><tr><td class="empty">No codes yet. Add them in box 2.</td></tr></tbody>';
    } else {
      var h = "<thead><tr>" + COLS.map(function (c) {
        return '<th class="' + (c.cls || "") + '" data-k="' + c.k + '" title="Sort by ' + esc(head(c)) + '">' + esc(head(c)) +
          (sortBy.k === c.k ? ' <span class="arr">' + (sortBy.dir > 0 ? "▲" : "▼") + "</span>" : "") + "</th>";
      }).join("") + "</tr></thead><tbody>";
      sorted.forEach(function (r) {
        var cls = !r.ok ? "invalid" : r.build !== ST ? "other" : "";
        h += '<tr class="' + cls + '">' + COLS.map(function (c) {
          var v;
          if (c.k === "status") {
            v = !r.ok ? '<span class="st-bad">INVALID</span><div class="small" title="' + esc(r.raw) + '">' + esc(r.why) + "</div>" :
              r.build !== ST ? '<span class="st-other">Other game</span><div class="small">' + esc(C.BUILDS[r.build].short) + ": use that game's teacher page</div>" :
              '<span class="st-ok">Valid</span>' + (r.count > 1 ? '<div class="small">' + r.count + " codes: newest kept</div>" : "");
          } else if (c.k === "grade") {
            var g = grade(r); v = g == null ? (r.ok && r.build === ST ? "–" : "") : String(g);
          } else v = esc(c.show ? c.show(r) : c.v(r));
          return '<td class="' + (c.cls || "") + '">' + (v == null ? "" : v) + "</td>";
        }).join("") + "</tr>";
      });
      t.innerHTML = h + "</tbody>";
      Array.prototype.forEach.call(t.querySelectorAll("th"), function (th) {
        th.addEventListener("click", function () {
          var k = th.getAttribute("data-k");
          sortBy = { k: k, dir: sortBy.k === k ? -sortBy.dir : (COLS.filter(function (c) { return c.k === k; })[0].num ? -1 : 1) };
          paint();
        });
      });
    }
    var nl = $("notes"), list = [];
    rows.forEach(function (r) {
      if (r.count > 1) list.push((r.student || r.raw) + ": " + r.count + " different codes; the table shows " + (r.ok ? "the newest one (made " + fmtTime(r.data.made) + ")" : "the last one") + ".");
      if (!r.ok) list.push((r.student || "A code") + ": INVALID: " + r.why + " Ask the student to copy the code again with the Copy code button. (What was read: " + r.raw + ")");
    });
    list = list.concat(notes);
    nl.innerHTML = list.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
    var csv = $("csv"), enable = rows.length > 0;
    csv.classList.toggle("disabled", !enable);
    if (enable) {
      try {
        if (csv._url) URL.revokeObjectURL(csv._url);
        csv._url = URL.createObjectURL(new Blob(["﻿" + table(",")], { type: "text/csv" }));
        csv.href = csv._url;
        csv.download = B.short.replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "") + "-progress-" + isoTime(Date.now()).slice(0, 10) + ".csv";
      } catch (e) { csv.href = "#"; }
    } else csv.href = "#";
  }
  /* the table as text: CSV (",") or tab-separated for pasting into a spreadsheet ("\t") */
  function table(sep) {
    var hdr = ["Student", "Nickname in code", "Code status", "Suggested grade", "Points possible", "Highest level", "Highest level won", "Levels played", "Levels won", "Levels lost",
      "Questions answered", "Right on first try", "% right first try", "Wrong picks", "Minutes played", "Days played", "First played", "Last played", "Game modes tried"];
    B.skills.forEach(function (s) { hdr.push(s[1] + " answered", s[1] + " right first try", s[1] + " % right"); });
    hdr.push("Code made", "Game", "Game version", "Code", "Note");
    var out = [hdr], sorted = rows.slice().sort(function (a, b) { return cmp(a, b) || String(a.student).localeCompare(String(b.student)); });
    sorted.forEach(function (r) {
      var d = D(r), g = grade(r), mine = r.ok && r.build === ST;
      var line = [r.student || "", d ? d.nick : "", r.ok ? (mine ? "Valid" : "Other game") : "INVALID", g == null ? "" : g, mine ? goals.points : ""];
      if (d) line.push(d.hiReached, d.hiWon, d.started, d.won, d.lost, d.answered, d.right, pct(d.right, d.answered) == null ? "" : pct(d.right, d.answered), d.wrong, d.minutes, d.days, d.first || "", d.last || "", d.modes);
      else line.push("", "", "", "", "", "", "", "", "", "", "", "", "", "");
      B.skills.forEach(function (s, i) { var x = mine && d.skills[i]; line.push(x ? x.a : "", x ? x.r : "", x && x.a ? pct(x.r, x.a) : ""); });
      line.push(d ? isoTime(d.made) : "", r.build ? C.BUILDS[r.build].short : "", d ? d.version : "", r.raw, !r.ok ? r.why : r.count > 1 ? r.count + " codes, newest kept" : "");
      out.push(line);
    });
    return out.map(function (l) {
      return l.map(function (v) {
        v = String(v == null ? "" : v);
        if (sep === "\t") return v.replace(/[\t\r\n]+/g, " ");
        return /[",\r\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
      }).join(sep);
    }).join("\r\n") + "\r\n";
  }

  /* ── buttons ── */
  $("read").addEventListener("click", function () {
    var t = $("paste").value;
    if (!t.trim()) { msg("Paste some codes in the box first.", true); return; }
    var n = addText(t, "paste", "");
    notes = [];
    paint();
    if (n) { $("paste").value = ""; msg("Found " + n + " code" + (n === 1 ? "" : "s") + "."); }
    else msg("No code found. A code starts with SOL2-" + ST + "- (or SOL1-" + ST + "- from before v5.14)", true);
  });
  $("clear").addEventListener("click", function () { rows = []; notes = []; paint(); msg(""); $("copybox").hidden = true; });
  $("choose").addEventListener("click", function () { $("file").click(); });
  $("file").addEventListener("change", function () { readFiles($("file").files); $("file").value = ""; });
  var drop = $("drop");
  ["dragenter", "dragover"].forEach(function (t) { drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.add("over"); }); });
  ["dragleave", "drop"].forEach(function (t) { drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.remove("over"); }); });
  drop.addEventListener("drop", function (e) { readFiles(e.dataTransfer && e.dataTransfer.files); });
  /* a file dropped anywhere else on the page is read too, instead of the browser opening it */
  window.addEventListener("dragover", function (e) { e.preventDefault(); });
  window.addEventListener("drop", function (e) { e.preventDefault(); if (e.target !== drop && !drop.contains(e.target)) readFiles(e.dataTransfer && e.dataTransfer.files); });
  $("csv").addEventListener("click", function (e) {
    if (!rows.length) { e.preventDefault(); msg("Add some codes first.", true); return; }
    showCopy(table(","), "If the download didn't start (Canvas can block downloads in a preview), copy this text instead: press Ctrl+C, paste it into a spreadsheet.");
  });
  $("copy").addEventListener("click", function () {
    if (!rows.length) { msg("Add some codes first.", true); return; }
    var text = table("\t");
    function fallback() { showCopy(text, "The table is selected below: press Ctrl+C to copy it, then paste it into a spreadsheet."); }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { msg("Copied the table. Paste it into a spreadsheet (Ctrl+V)."); }, fallback);
        return;
      }
    } catch (e) {}
    fallback();
  });
  function showCopy(text, hint) {
    $("copybox").hidden = false;
    $("copyhint").textContent = hint;
    var ta = $("copytext");
    ta.value = text;
    ta.focus(); ta.select();
  }
  $("print").addEventListener("click", function () { window.print(); });

  paintGoals();
  paint();
  window.TeacherPage = { addText: addText, readFiles: readFiles, rows: function () { return rows; }, table: table, grade: grade, readZip: readZip, nameFromFile: nameFromFile };
})();
