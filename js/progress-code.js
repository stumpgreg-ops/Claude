/* SOL Labyrinth: progress codes (format 1). ONE file for the code format, used by the game (js/progress.js makes a
   code) and by the teacher page (tools/build-teacher.js inlines this file and reads codes with it), so the two can't
   drift. It runs in a browser (window.SolProgressCode) and in Node (module.exports).

   A code looks like  SOL1-VA-0F4K-1A2B-...  : "SOL" + the format number, the game (VA, NJ or ODY), then the payload
   in Crockford base32 (0-9 A-Z without I L O U; typed I and L read as 1, O as 0, any case), in blocks of 4.
   The payload is a string of bits. Each number is written in groups of 5 bits (4 bits of the number, lowest first,
   and a "more follows" bit), so small numbers take one character. In order:
     game id, game version (major, minor, patch), when the code was made (minutes since 2025-01-01 UTC),
     the nickname (its length, then 6 bits a letter), first and last day played (days since 2025-01-01; the last as
     days after the first), days played, minutes played, levels started / won / lost, highest level reached / won,
     questions answered / right on the first try / wrong picks, game modes tried, the number of skills, and for each
     skill of that game (BUILDS[...].skills, in order) answered / right on the first try;
   then a 30-bit tag (a hash of the payload bits and the game's secret), then zero bits up to a whole character.
   The tag turns a typo or a made-up code into INVALID. The secret ships inside the game, so it stops typos and
   casual tampering, not a determined student who reads the source. */
(function (root) {
  "use strict";
  var FORMAT = 1;
  var ALPHA = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
  var NICK_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -";
  var NICK_MAX = 12, TAG_BITS = 30;
  var EPOCH = Date.UTC(2025, 0, 1);
  var DAY = 86400000;
  var BUILDS = {
    VA: { id: 1, tag: "VA", name: "Sol's Labyrinth (Virginia)", short: "Virginia", assignment: "Sol's Labyrinth progress",
      skillWord: "Skill", secret: "va.7Qm2-kestrel-41c9-amber",
      skills: [["RL", "Literary"], ["RI", "Informational"], ["RV", "Vocabulary"], ["DSR", "Paired texts"]] },
    NJ: { id: 2, tag: "NJ", name: "Sol's Labyrinth (New Jersey)", short: "New Jersey", assignment: "Sol's Labyrinth progress",
      skillWord: "Skill", secret: "nj.3Rx8-heron-b62d-cobalt",
      skills: [["RL", "Literature"], ["RI", "Informational"], ["RV", "Vocabulary"], ["DSR", "Paired texts"]] },
    ODY: { id: 3, tag: "ODY", name: "The Odyssey: Labyrinth of the Wine-Dark Sea", short: "The Odyssey", assignment: "Odyssey game progress",
      skillWord: "Episode", secret: "ody.9Kd4-dolphin-e17a-saffron",
      skills: [["LOTUS", "Lotus-Eaters"], ["CYCLOPS", "Cyclops"], ["CIRCE", "Circe"], ["HELIOS", "Cattle of the Sun"], ["CALYPSO", "Calypso"], ["VOYAGE", "Whole voyage"]] }
  };
  function buildById(id) { for (var k in BUILDS) if (BUILDS[k].id === id) return k; return null; }

  /* ── dates: a local calendar day "YYYY-MM-DD" <-> days since 2025-01-01 ── */
  function dayNum(ymd) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(ymd || ""));
    if (!m) return 0;
    return Math.max(0, Math.round((Date.UTC(+m[1], +m[2] - 1, +m[3]) - EPOCH) / DAY));
  }
  function dayStr(n) {
    var d = new Date(EPOCH + Math.max(0, n) * DAY);
    return d.getUTCFullYear() + "-" + ("0" + (d.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + d.getUTCDate()).slice(-2);
  }

  /* ── bits ── */
  function Writer() { this.b = []; }
  Writer.prototype.fixed = function (v, n) { for (var i = n - 1; i >= 0; i--) this.b.push((v >>> i) & 1); };
  Writer.prototype.num = function (v) {
    v = Math.max(0, Math.floor(Number(v) || 0));
    if (v > 0x3fffffff) v = 0x3fffffff;
    do { var g = v % 16; v = Math.floor(v / 16); this.fixed((v > 0 ? 16 : 0) | g, 5); } while (v > 0);
  };
  function Reader(bits) { this.b = bits; this.i = 0; }
  Reader.prototype.fixed = function (n) {
    if (this.i + n > this.b.length) throw new Error("short");
    var v = 0;
    for (var k = 0; k < n; k++) v = v * 2 + this.b[this.i++];
    return v;
  };
  Reader.prototype.num = function () {
    var v = 0, mul = 1, g, guard = 0;
    do {
      g = this.fixed(5);
      v += (g & 15) * mul; mul *= 16;
      if (++guard > 8) throw new Error("number too long");
    } while (g & 16);
    return v;
  };

  /* FNV-1a over the game's secret and the payload bits, then a 32-bit finaliser; the top 30 bits are the tag */
  function tagOf(secret, bits) {
    var s = secret + "|" + bits.join(""), h = 0x811c9dc5, i;
    for (i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    h ^= h >>> 16; h = Math.imul(h, 0x85ebca6b) >>> 0; h ^= h >>> 13; h = Math.imul(h, 0xc2b2ae35) >>> 0; h ^= h >>> 16;
    return (h >>> 0) >>> (32 - TAG_BITS);
  }

  function cleanNick(s) {
    var out = "";
    String(s || "").replace(/[_.]/g, "-").split("").forEach(function (ch) { if (out.length < NICK_MAX && NICK_CHARS.indexOf(ch) !== -1) out += ch; });
    return out.replace(/\s+/g, " ").trim();
  }
  function parseVersion(v) {
    var m = /(\d+)\.(\d+)(?:\.(\d+))?/.exec(String(v || ""));
    return m ? [+m[1], +m[2], +(m[3] || 0)] : [0, 0, 0];
  }

  /* encode(build, s, opts) -> "SOL1-VA-...."
     s: { first, last ("YYYY-MM-DD" or null), days, minutes, started, won, lost, hiReached, hiWon, answered, right,
          wrong, modes, skills: { RL: { a, r }, ... } }; opts: { nick, version ("5.12.2"), now (ms) } */
  function encode(build, s, opts) {
    var B = BUILDS[build];
    if (!B) throw new Error("unknown game " + build);
    opts = opts || {}; s = s || {};
    var w = new Writer(), ver = parseVersion(opts.version), now = opts.now != null ? opts.now : Date.now();
    var nick = cleanNick(opts.nick), first = s.first ? dayNum(s.first) : 0, last = s.last ? dayNum(s.last) : first;
    w.num(B.id);
    w.num(ver[0]); w.num(ver[1]); w.num(ver[2]);
    w.num(Math.max(0, Math.floor((now - EPOCH) / 60000)));
    w.num(nick.length);
    for (var i = 0; i < nick.length; i++) w.fixed(NICK_CHARS.indexOf(nick.charAt(i)), 6);
    w.num(first); w.num(Math.max(0, last - first)); w.num(s.days);
    w.num(s.minutes);
    w.num(s.started); w.num(s.won); w.num(s.lost);
    w.num(s.hiReached); w.num(s.hiWon);
    w.num(s.answered); w.num(s.right); w.num(s.wrong);
    w.num(s.modes);
    w.num(B.skills.length);
    B.skills.forEach(function (k) { var r = (s.skills && s.skills[k[0]]) || {}; w.num(r.a); w.num(r.r); });
    var payload = w.b.slice();
    w.fixed(tagOf(B.secret, payload), TAG_BITS);
    while (w.b.length % 5) w.b.push(0);
    var chars = "";
    for (var j = 0; j < w.b.length; j += 5) {
      var v = 0;
      for (var q = 0; q < 5; q++) v = v * 2 + w.b[j + q];
      chars += ALPHA.charAt(v);
    }
    return "SOL" + FORMAT + "-" + B.tag + "-" + chars.match(/.{1,4}/g).join("-");
  }

  /* decode("SOL1-VA-....") -> { ok: true, build, code, data } or { ok: false, build, why } */
  function decode(text) {
    var t = String(text || "").toUpperCase().replace(/[\s-]+/g, "");
    var m = /^SOL(\d+)(VA|NJ|ODY)([0-9A-Z]*)$/.exec(t);
    if (!m) return { ok: false, build: null, why: "This is not a progress code." };
    var build = m[2], B = BUILDS[build];
    if (+m[1] !== FORMAT) return { ok: false, build: build, why: "Made by a newer version of the game (format " + m[1] + "): get the newest teacher page." };
    var body = m[3].replace(/O/g, "0").replace(/[IL]/g, "1"), bits = [];
    if (/U/.test(body)) return { ok: false, build: build, why: "Has a letter that is never in a code (U): a typo?" };
    if (body.length < 12) return { ok: false, build: build, why: "Too short: part of the code is missing." };
    for (var i = 0; i < body.length; i++) {
      var v = ALPHA.indexOf(body.charAt(i));
      for (var q = 4; q >= 0; q--) bits.push((v >>> q) & 1);
    }
    var r = new Reader(bits), d = {};
    try {
      var id = r.num();
      if (id !== B.id) throw new Error("game");
      d.version = r.num() + "." + r.num() + "." + r.num();
      d.made = EPOCH + r.num() * 60000;
      var nl = r.num(), nick = "";
      if (nl > NICK_MAX) throw new Error("nick");
      for (var k = 0; k < nl; k++) nick += NICK_CHARS.charAt(r.fixed(6));
      d.nick = nick;
      var first = r.num(), span = r.num();
      d.days = r.num();
      d.first = d.days ? dayStr(first) : null;
      d.last = d.days ? dayStr(first + span) : null;
      d.minutes = r.num();
      d.started = r.num(); d.won = r.num(); d.lost = r.num();
      d.hiReached = r.num(); d.hiWon = r.num();
      d.answered = r.num(); d.right = r.num(); d.wrong = r.num();
      d.modes = r.num();
      var ns = r.num();
      if (ns > 20) throw new Error("skills");
      d.skills = [];
      for (var s = 0; s < ns; s++) {
        var def = B.skills[s] || ["S" + (s + 1), B.skillWord + " " + (s + 1)];
        d.skills.push({ key: def[0], name: def[1], a: r.num(), r: r.num() });
      }
      var payload = bits.slice(0, r.i);
      var tag = r.fixed(TAG_BITS);
      var rest = bits.slice(r.i);
      if (rest.length >= 5 || rest.some(function (x) { return x; })) throw new Error("extra");
      if (tag !== tagOf(B.secret, payload)) throw new Error("tag");
      if (d.right > d.answered || d.won + d.lost > d.started || d.hiWon > d.hiReached || d.hiReached > 100) throw new Error("numbers");
    } catch (e) {
      return { ok: false, build: build, why: "Does not check out: a typo, a missing part, or a changed code." };
    }
    return { ok: true, build: build, code: format(t), data: d };
  }
  /* the canonical way to write a code (blocks of 4) */
  function format(t) {
    var m = /^SOL(\d+)(VA|NJ|ODY)([0-9A-Z]*)$/.exec(String(t).toUpperCase().replace(/[\s-]+/g, ""));
    return m ? "SOL" + m[1] + "-" + m[2] + "-" + (m[3].match(/.{1,4}/g) || []).join("-") : String(t);
  }

  /* findCodes(text) -> every code in any text: [{ raw, before, result }]. A code runs to the end of its line; if a
     word typed after it (on the same line) breaks it, the last space-separated pieces are dropped one at a time until
     it checks out. `before` is the text on the line before the code (a "Name: CODE" line gives the name). */
  function findCodes(text) {
    var out = [], re = /SOL[ \t]*(\d+)[ \t]*-?[ \t]*(VA|NJ|ODY)([0-9A-Za-z \t-]*)/gi, m;
    text = String(text || "");
    while ((m = re.exec(text))) {
      var lineStart = text.lastIndexOf("\n", m.index) + 1;
      var before = text.slice(lineStart, m.index);
      var head = "SOL" + m[1] + "-" + m[2].toUpperCase() + "-";
      var pieces = m[3].replace(/^[\s-]+/, "").split(/[ \t]+/).filter(Boolean), res = null, k;
      for (k = pieces.length; k >= 1; k--) {
        res = decode(head + pieces.slice(0, k).join(""));
        if (res.ok) break;
      }
      if (!res || !res.ok) { k = pieces.length; res = decode(head + pieces.join("")); }
      var raw = (head + pieces.slice(0, Math.max(k, 1)).join(" ")).replace(/-+$/, "");
      out.push({ raw: raw.length > 140 ? raw.slice(0, 140) + "…" : raw, before: before, result: res });
    }
    return out;
  }

  var api = { FORMAT: FORMAT, BUILDS: BUILDS, buildById: buildById, encode: encode, decode: decode, format: format,
    findCodes: findCodes, dayNum: dayNum, dayStr: dayStr, cleanNick: cleanNick, parseVersion: parseVersion, _tag: tagOf };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.SolProgressCode = api;
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
