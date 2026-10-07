/* SOL Labyrinth: progress codes (formats 1 and 2). ONE file for the code format, used by the game (js/progress.js makes a
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
   FORMAT 2 (v5.14, "SOL2-...") adds, after the skills, what the game needs to RESTORE a student's game from their
   last code (on a new Chromebook, or after the browser's data was cleared): the level to play next, the realms whose
   Fang was won (one bit each), and the town or castle: its theme, salt, coins, kit, the pieces owned (beyond those
   placed), the reward picked at each 5th level, and every placed piece (piece, style, how it was got, decoration,
   turn, and its cell). A word (theme, style or piece id) is 0 for none, its place in WORDS + 2, or 1 and the word spelled out.
   The teacher page reads format 1 and 2 alike and skips the restore part.
   then a 30-bit tag (a hash of the payload bits and the game's secret), then zero bits up to a whole character.
   The tag turns a typo or a made-up code into INVALID. The secret ships inside the game, so it stops typos and
   casual tampering, not a determined student who reads the source. */
(function (root) {
  "use strict";
  var FORMAT = 2;                                   /* the newest format; decode() reads 1 and 2 */
  var ALPHA = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
  var NICK_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -";
  var NICK_MAX = 12, TAG_BITS = 30;
  var EPOCH = Date.UTC(2025, 0, 1);
  /* format 2: the words a restore part names, by number. APPEND ONLY: a word's place must never change, or codes
     already made would read wrong (tools/smoke-progress.js checks every theme, style and piece in pieces.json is here;
     a word that isn't is spelled out, so it still works, only longer). */
  var WORDS = [
    "village", "castle", "tile", "slate", "thatch", "blue", "red", "green", "gold", "cottage", "stone-cottage",
    "house", "stall", "steps", "cottage-wing", "stone-wing", "lamp-path", "house-wing", "bakery", "dock", "chapel",
    "arch", "tavern", "windmill", "watermill", "square", "harbour", "manor", "town-hall", "bell-tower", "grand-mill",
    "fence", "well", "lamp", "barrels", "crates", "hay-cart", "barrel-cart", "haystacks", "cobbles", "signpost",
    "keep", "round-keep", "watch-keep", "wall", "gate", "doorway", "stairs-wall", "corner-tower", "round-tower",
    "square-tower", "gate-tower", "roof-tower", "balcony-tower", "watchtower", "grand-tower", "arch-tower",
    "great-tower", "royal-tower", "flag", "flag-wide", "banner-long", "banner-short", "bridge", "stone-stairs",
    "knight", "knight-red", "king", "ballista", "catapult", "ram", "trebuchet", "siege-tower", "c-cottage", "hut",
    "stable", "barn", "c-tavern", "stone-hall", "c-chapel", "c-manor", "c-windmill", "stall-red", "stall-green",
    "cart", "c-hay-cart", "lantern", "lamp-post", "lamp-double", "bench", "fountain", "pool", "waterwheel", "planks",
    "stone-path", "well-sign", "campfire", "tent", "log-pile", "wheat", "pumpkins", "pot", "urn", "wood-bridge",
    "hedge", "hedge-gate", "c-fence", "fence-gate", "rail-fence", "oak", "pine", "round-pine", "autumn-tree",
    "tall-tree", "small-tree", "fir", "tall-fir", "poplar", "bush", "bushes", "flowers-red", "flowers-yellow",
    "flowers-purple", "flowers-mixed", "mushrooms", "tan-mushrooms", "boulder", "rocks", "tall-rock", "crag",
    "stump", "lily-pads", "obelisk", "column", "great-column", "stone-head", "stone-ring", "pedestal",
    "knight-statue", "king-statue", "stone-pillar", "small-obelisk", "glass-lantern", "cow", "horse", "pig", "goat",
    "chicken", "dog", "rabbit", "duck", "owl", "k-castle", "k-townhall", "k-barracks", "k-archery", "k-market",
    "k-mine", "k-shipyard", "k-stables", "k-tent", "k-workshop", "k-blacksmith", "k-church", "k-home-a", "k-home-b",
    "k-lumbermill", "k-shrine", "k-inn", "k-watermill", "k-windmill", "k-tower-a", "k-tower-b", "k-tower-base",
    "k-tower-cannon", "k-tower-catapult", "k-watchtower", "k-well", "k-grain", "k-site", "k-ruins", "k-stage",
    "k-platform", "k-barrels", "k-crates", "k-supplies", "k-hay", "k-wheelbarrow", "k-target", "k-weapons",
    "k-trough", "k-cannonballs", "k-camp-tent", "k-bucket", "k-pallet", "k-cart", "k-merchant-cart", "k-catapult",
    "k-cannon", "k-warhorse", "k-soldier", "k-banner", "k-flag", "k-tree-a", "k-tree-b", "k-grove-a", "k-grove-b",
    "k-rock", "k-stones", "trophy-midgard", "trophy-niflheim", "trophy-jotunheim", "trophy-muspelheim",
    "trophy-svartalfheim", "trophy-vanaheim", "trophy-alfheim", "trophy-helheim", "trophy-asgard", "trophy-ragnarok"
  ];
  var WORD_CHARS = "abcdefghijklmnopqrstuvwxyz0123456789-_ABCDEFGHIJKLMNOPQRSTUVWXYZ", WORD_MAX = 40;
  var SRC = ["reward", "shop", "auto", "free"];
  var PICKS_MAX = 2000, LIST_MAX = 2000;
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
  Writer.prototype.word = function (s) {
    s = String(s || "");
    if (!s) { this.num(0); return; }
    var i = WORDS.indexOf(s);
    if (i !== -1) { this.num(i + 2); return; }
    var t = "";
    for (var k = 0; k < s.length && t.length < WORD_MAX; k++) if (WORD_CHARS.indexOf(s.charAt(k)) !== -1) t += s.charAt(k);
    this.num(1); this.num(t.length);
    for (k = 0; k < t.length; k++) this.fixed(WORD_CHARS.indexOf(t.charAt(k)), 6);
  };
  Writer.prototype.signed = function (v) { v = Math.round(Number(v) || 0); this.num(v >= 0 ? v * 2 : -v * 2 - 1); };
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

  Reader.prototype.word = function () {
    var i = this.num();
    if (i === 0) return "";
    if (i > 1) { if (i - 2 >= WORDS.length) throw new Error("word"); return WORDS[i - 2]; }
    var n = this.num(), t = "";
    if (n > WORD_MAX) throw new Error("word");
    for (var k = 0; k < n; k++) t += WORD_CHARS.charAt(this.fixed(6));
    return t;
  };
  Reader.prototype.signed = function () { var n = this.num(); return n % 2 ? -(n + 1) / 2 : n / 2; };

  /* format 2's restore part. sv: { night, fangs: [realm numbers 0..15], build: null or { theme, salt, coins, kit,
     owned: [ids], rewards: { "5": id, ... }, picks: [{ piece, style, src, deco, rot, cx, cy }] } } */
  function writeSave(w, sv) {
    sv = sv || {};
    w.num(Math.max(1, Math.min(100, Math.floor(Number(sv.night) || 1))));
    var mask = 0;
    (sv.fangs || []).forEach(function (i) { i = Math.floor(Number(i)); if (i >= 0 && i < 16) mask |= 1 << i; });
    w.num(mask);
    var b = sv.build;
    w.fixed(b ? 1 : 0, 1);
    if (!b) return;
    var picks = (b.picks || []).slice(0, PICKS_MAX), placed = {};
    picks.forEach(function (p) { placed[p.piece] = 1; });
    w.word(b.theme || "");
    w.num(b.salt); w.num(b.coins); w.num(b.kit);
    var owned = (b.owned || []).filter(function (id) { return id && !placed[id]; }).slice(0, LIST_MAX);
    w.num(owned.length);
    owned.forEach(function (id) { w.word(id); });
    var rk = Object.keys(b.rewards || {}).filter(function (k) { var n = parseInt(k, 10); return b.rewards[k] && n >= 5 && n <= 100 && n % 5 === 0; });
    w.num(rk.length);
    rk.forEach(function (k) { w.num(parseInt(k, 10) / 5); w.word(b.rewards[k]); });
    w.num(picks.length);
    picks.forEach(function (p) {
      var hasPos = p.cx != null && p.cy != null && isFinite(p.cx) && isFinite(p.cy);
      w.word(p.piece); w.word(p.style || "");
      w.fixed(Math.max(0, SRC.indexOf(p.src)), 2); w.fixed(p.deco ? 1 : 0, 1); w.fixed((Number(p.rot) || 0) & 3, 2);
      w.fixed(hasPos ? 1 : 0, 1);
      if (hasPos) { w.signed(p.cx); w.signed(p.cy); }
    });
  }
  function readSave(r) {
    var sv = { night: r.num(), fangs: [], build: null }, mask = r.num(), i, n;
    if (sv.night < 1 || sv.night > 100) throw new Error("night");
    for (i = 0; i < 16; i++) if (mask & (1 << i)) sv.fangs.push(i);
    if (!r.fixed(1)) return sv;
    var b = sv.build = { theme: r.word() || null, salt: r.num(), coins: r.num(), kit: r.num(), owned: [], rewards: {}, picks: [] };
    n = r.num(); if (n > LIST_MAX) throw new Error("owned");
    for (i = 0; i < n; i++) b.owned.push(r.word());
    n = r.num(); if (n > 20) throw new Error("rewards");
    for (i = 0; i < n; i++) { var lv = r.num() * 5; if (lv < 5 || lv > 100) throw new Error("reward"); b.rewards[lv] = r.word(); }
    n = r.num(); if (n > PICKS_MAX) throw new Error("picks");
    for (i = 0; i < n; i++) {
      var p = { piece: r.word(), style: r.word() };
      p.src = SRC[r.fixed(2)]; p.deco = !!r.fixed(1); p.rot = r.fixed(2);
      if (r.fixed(1)) { p.cx = r.signed(); p.cy = r.signed(); }
      b.picks.push(p);
    }
    return sv;
  }

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

  /* encode(build, s, opts) -> "SOL1-VA-...." (or "SOL2-VA-...." with opts.save: see writeSave)
     s: { first, last ("YYYY-MM-DD" or null), days, minutes, started, won, lost, hiReached, hiWon, answered, right,
          wrong, modes, skills: { RL: { a, r }, ... } }; opts: { nick, version ("5.12.2"), now (ms), save } */
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
    var fmt = opts.save ? 2 : 1;
    if (fmt === 2) writeSave(w, opts.save);
    var payload = w.b.slice();
    w.fixed(tagOf(B.secret, payload), TAG_BITS);
    while (w.b.length % 5) w.b.push(0);
    var chars = "";
    for (var j = 0; j < w.b.length; j += 5) {
      var v = 0;
      for (var q = 0; q < 5; q++) v = v * 2 + w.b[j + q];
      chars += ALPHA.charAt(v);
    }
    return "SOL" + fmt + "-" + B.tag + "-" + chars.match(/.{1,4}/g).join("-");
  }

  /* decode("SOL1-VA-....") -> { ok: true, build, code, data } or { ok: false, build, why }; a format 2 code's data
     also has .format 2 and .save (see readSave) */
  function decode(text) {
    var t = String(text || "").toUpperCase().replace(/[\s-]+/g, "");
    var m = /^SOL(\d+)(VA|NJ|ODY)([0-9A-Z]*)$/.exec(t);
    if (!m) return { ok: false, build: null, why: "This is not a progress code." };
    var build = m[2], B = BUILDS[build];
    var fmt = +m[1];
    if (fmt < 1 || fmt > FORMAT) return { ok: false, build: build, why: "Made by a newer version of the game (format " + m[1] + "): get the newest teacher page." };
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
      d.format = fmt;
      if (fmt === 2) d.save = readSave(r);
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

  var api = { FORMAT: FORMAT, BUILDS: BUILDS, WORDS: WORDS, buildById: buildById, encode: encode, decode: decode, format: format,
    findCodes: findCodes, dayNum: dayNum, dayStr: dayStr, cleanNick: cleanNick, parseVersion: parseVersion, _tag: tagOf };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.SolProgressCode = api;
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
