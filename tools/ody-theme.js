/* The Odyssey reskin's words: require("./ody-theme").apply(outDir)
   Called by tools/build-games.js for the Odyssey build only (dist/ody/), after the copy and the
   index.html rewrite. Every player-visible word that names the Norse game (Sol, the Hati, Fenrir,
   the realms, Ragnarok, runes, ravens, eagles, saucers ...) is retold for the Odyssey: Odysseus,
   Circe's wolves, Polyphemus, the islands, Ithaca, moly flowers, gulls, Sirens, storm clouds.
   The names come from the shared design sheet (v5.10).

   SAFETY (the repository's own files are never touched; only the copies in outDir):
   - In .js files only the text INSIDE string literals changes (double, single and the text parts of
     template literals; tools/ody-jstok.js finds them and skips comments and regex literals).
   - A literal without a space (texture keys, ids, kinds, event names, CSS classes, save keys) only
     changes when an exact entry below names it; the general rules never touch it, nor a literal
     that looks like a CSS class list or a console tag ("[realms] ...").
   - The REALMS table in js/realms.js and the MODES table in js/modes.js are left alone: js/odyssey.js
     rewrites them at runtime.
   - After rewriting, each file must still parse (vm.Script) and its sequence of non-string tokens
     must be identical to the original's; otherwise this throws and the build fails.
   - A review of every changed literal (file, line, BEFORE -> AFTER) and every Norse word left in a
     literal or in index.html (LEFT, with the reason) is written to <outDir>/../ody-theme-review.txt. */
"use strict";
var fs = require("fs"), path = require("path"), vm = require("vm");
var tokenize = require("./ody-jstok").tokenize;

var GAME_TITLE = "The Odyssey: Labyrinth of the Wine-Dark Sea";

/* ── exact literals, per file: [content, replacement, optional regex the text before the literal on its line must match] ──
   An exact entry wins over the general rules, and its replacement is final. */
var EXACT = {
  "js/game.js": [
    /* the (unused) theme record */
    ["SOL Labyrinth", GAME_TITLE, /title:\s*$/],
    ["Sol", "Odysseus", /player:\s*$/],
    ["Hati", "wolf", /[{,]\s*patrol:\s*$/],
    ["Hati", "wolves", /patrolPlural:\s*$/],
    ["Norse", "Greek", /myth:\s*$/],
    /* the tutorial */
    ["The Hati hunt you", "Circe's wolves hunt you"],
    /* toasts whose count comes from the code ("... clipped " + n + " Hati!") */
    [" Hati!", " of Circe's wolves!"],
    [" Hati frozen (", " Wolves frozen ("],
    [" Hati peel to investigate. Touch still catches!", " of Circe's wolves peeling off to investigate. Touch still catches!"],
    [" Hati peel to the mast. Touch still catches!", " of Circe's wolves peeling off to the mast. Touch still catches!"],
    ["Hati smashed!", "Wolf smashed!"],
    ["SKULL! Hati poisoned — stunned!", "SKULL! Wolf poisoned — stunned!"],
    /* the game-mode screen (GAME_MODE_DEFS): the sheet's mode names */
    ["The full campaign: the maze on odd levels and Fenrir's boss levels, a shooter level on the even ones.",
     "The full voyage: the maze, Polyphemus's boss levels, and a shooter or sailing level in between."],
    ["Sneak past Hati, grab the right letter and get out through EXIT · SAFE. Every level is the maze.",
     "Sneak past Circe's wolves, grab the right letter and get out through EXIT · SAFE. Every level is the maze."],
    ["Eagle Swoop", "Siren Swoop"],
    ["Shoot the eagle carrying the right letter while the flock dives at you.", "Shoot the Siren carrying the right letter while the gulls dive at you."],
    ["Rune Rocks", "The Wandering Rocks"],
    ["Pull the rock with the right letter in with your beam and blast the rest.", "Haul the rock with the right letter in with Athena's light and break the rest."],
    ["Sun Chariot", "Chariot of Helios"],
    ["Fly the sun's chariot and shoot the right orb through the gap in its shield.", "Fly the sun god's chariot and hit the right sun-disc through the gap in its shield."],
    ["Wolf Ring", "Circe's Courtyard"],
    ["Keep the wolves off and shoot the right runestone when it rises.", "Keep Circe's wolves and lions off and shoot the right moly flower while it blooms."]
  ],
  "js/realms.js": [
    /* FOE_NAMES: "You knocked <x> flat." and "CAUGHT BY <X>" */
    ["a raven", "a storm gull"], ["a troll", "a Cyclops"], ["a fire vent", "a cooking fire"], ["the serpent", "Scylla's neck"],
    ["a boar", "a swine"], ["a wisp", "a lotus blossom"], ["a draugr", "a shade"], ["a valkyrie", "a Siren song"],
    ["Fenrir", "Polyphemus", /fenrir:\s*$/],
    /* the boss level: boulders across the gate */
    ["A chain breaks! ", "A boulder rolls away! "],
    [" left on Fenrir's gate.", " left at Polyphemus's gate."],
    ["The last chain breaks! Fenrir flees.", "The last boulder rolls away! Polyphemus flees."],
    ["Fenrir howls. He is coming for you!", "Polyphemus roars. He is coming for you!"],
    ["FENRIR", "POLYPHEMUS"], ["FENRIR!", "POLYPHEMUS!"],
    ["RUNE!", "AEGIS!"],
    ["Fenrir's gate · ", "Polyphemus's gate · "],
    [" chain", " boulder", /chainsLeft \|\| 0\) \+\s*$/],
    ["All creatures return", "Every danger returns"],
    ['<p class="boss"><b>Boss level: Fenrir.</b> The great wolf has chained the gate with ',
     '<p class="boss"><b>Boss level: Polyphemus.</b> The Cyclops has rolled '],
    [" locks. Every correct answer you carry to EXIT breaks one. A wrong letter makes him charge, so read carefully.</p>",
     " boulders across the gate. Every correct answer you carry to EXIT rolls one away. A wrong letter makes him charge, so read carefully.</p>"],
    ["Fenrir smells the rune you picked up. Get it to EXIT before he catches you!", "Polyphemus heard you pick up a letter. Get it to EXIT before he catches you!"],
    /* the island creatures' toasts */
    ["A raven spotted you! The wolves are coming.", "A storm gull spotted you! The wolves are coming."],
    ["A wisp dazzled you! You can only see close by for a moment.", "A lotus blossom made you forget the way! You can only see close by for a moment."],
    ["A golden shadow falls across the hall. Step out of it!", "The shadow of a Siren's song falls across the hall. Step out of it!"],
    /* the boss prize: the Ram's Fleece, and the island's monument */
    [" coins for beating Fenrir in ", " coins for beating Polyphemus at "],
    ["You won Fenrir's Fang of ", "You won the Ram's Fleece of "],
    [" now stands in your castle — a monument only a Fenrir-beater can have.", " now stands in your castle — a monument only a Cyclops-beater can have."],
    [" Fenrir's treasure: +50 coins (choose the Castle in the builder to collect Fenrir's monuments).",
     " Polyphemus's treasure: +50 coins (choose the Castle in the builder to collect the island monuments)."],
    ["Fenrir's chains are broken and the gate is open. ", "The boulders are rolled away and the gate is open. "],
    ["You beat Ragnarok!", "You reached Ithaca!"]
  ],
  "js/modes.js": [
    /* Siren Swoop (Eagle Swoop): Sirens carry the letters, gulls dive, a Siren's song lures a crewman away */
    ["That eagle is hurt. One more arrow and its letter ", "That Siren is hurt. One more arrow and her letter "],
    ["That eagle's iron helm took it. ", "That Siren's bronze helmet took it. "],
    ["Twelve ravens", "Twelve gulls"],
    ["Huginn, Odin's raven!", "Zeus's omen bird!"],
    ["AN EAGLE CRASHED INTO YOU", "A SIREN CRASHED INTO YOU"],
    ["A RAVEN CRASHED INTO YOU", "A GULL CRASHED INTO YOU"],
    ["Watch out: the eagles trade places! Follow the right letter.", "Watch out: the Sirens trade places! Follow the right letter."],
    ["THE EAGLE'S BEAM", "THE SIREN'S SONG"],
    ["THE EAGLE'S BEAM CAUGHT YOU", "THE SIREN'S SONG CAUGHT YOU"],
    [" · ONE SOL LEFT", " · ONE ARCHER LEFT"],
    ["You lost one of your two Sols, but not a life. Get caught by a beam again to win him back.",
     "You lost your second archer, but not a life. Let a Siren's song catch you again to win a crewman back."],
    ["THE EAGLE CAUGHT SOL!", "A SIREN LURED A CREWMAN AWAY!"],
    ["The eagle caught Sol! Hit that eagle (letter ", "A Siren's song lured a crewman away! Hit that Siren (letter "],
    [") with an arrow to free him and get two Sols. If he's still caught when this question ends, you lose a life.",
     ") with an arrow to win him back and fight with two archers. If he's still hers when this question ends, you lose a life."],
    ["SOL IS FREE!", "YOUR CREWMAN IS FREE!"],
    ["Sol rescued", "Crewman rescued"],
    ["DOUBLE SOL!", "TWO ARCHERS!"],
    ["Two Sols! You shoot two arrows at a time. A hit takes one Sol away instead of a life.",
     "Two archers! You shoot two arrows at a time. A hit takes your crewman away instead of a life."],
    ["THE EAGLE KEPT SOL", "THE SIREN KEPT YOUR CREWMAN"],
    /* The Wandering Rocks (Rune Rocks): Zeus's storm clouds are the saucers, a Siren is the valkyrie */
    ['<p class="tut-kicker">Rune Rocks · how to pull a rock in</p>', '<p class="tut-kicker">The Wandering Rocks · how to pull a rock in</p>'],
    ["Valkyrie driven off", "Siren driven off"],
    ["A small dark-elf saucer! It aims at your ship. Shoot it for a big bonus.", "A small storm cloud! It aims its lightning at your ship. Shoot it for a big bonus."],
    ["A dark-elf saucer! It shoots in all directions. Dodge its shots, or shoot it for a bonus.",
     "One of Zeus's storm clouds! It throws lightning in all directions. Dodge the bolts, or shoot it for a bonus."],
    ["A DARK-ELF SAUCER RAMMED YOU", "A STORM CLOUD RAMMED YOU"],
    ["A DARK-ELF SAUCER SHOT YOU", "ZEUS'S LIGHTNING HIT YOU"],
    ["Small saucer shot down", "Small storm cloud scattered"],
    ["Saucer shot down", "Storm cloud scattered"],
    ["A VALKYRIE'S SPEAR HIT YOU", "A SIREN'S SPEAR HIT YOU"],
    /* Chariot of Helios (Sun Chariot): sun-discs, gulls and lotus blossoms */
    ["The orb's shield stopped that sunbolt. Shoot when the gap faces you.", "The sun-disc's shield stopped that sunbolt. Shoot when the gap faces you."],
    ["A WISP HIT YOU", "A LOTUS BLOSSOM HIT YOU"],
    ["A RAVEN HIT YOU", "A GULL HIT YOU"],
    ["A WISP'S SPARK HIT YOU", "A LOTUS SPARK HIT YOU"],
    /* Circe's Courtyard (Wolf Ring): the lead wolf */
    ["The alpha wolf takes three arrows!", "The lead wolf takes three arrows!"],
    ["Alpha wolf chased off", "Lead wolf chased off"]
  ],
  "js/build.js": [
    ["a realm", "an island"],   /* realmName()'s fallback */
    ["Wet floors never slow Sol down or trip her.", "Wet floors never slow Odysseus down or trip him."],
    ["Ravens, trolls and the other realm creatures show on the map.", "Storm gulls, Cyclopes and the other island creatures show on the map."]
  ],
  "js/music.js": [
    /* REALM_TRACKS display names: the islands, in realm order */
    ["Midgard", "Troy's Shore"], ["Niflheim", "The Land of the Lotus-Eaters"], ["Jotunheim", "The Island of the Cyclopes"],
    ["Muspelheim", "Aeolia, Island of the Winds"], ["Svartalfheim", "The Land of the Laestrygonians"], ["Vanaheim", "Aeaea, Circe's Island"],
    ["Alfheim", "The House of Hades"], ["Helheim", "The Sirens' Isle"], ["Asgard", "Scylla and Charybdis"], ["Ragnarok", "Poseidon's Storm"]
  ]
};

/* ── the general rules, in order (most specific first); they only run on literals with a space ── */
var RULES = [
  /* Circe's wolves (the Hati): a name used as singular AND plural, so the grammar is worked out here */
  [/\b[Tt]he Hati wolves\b/g, "Circe's wolves"],
  [/\bHati wolves\b/g, "Circe's wolves"],
  [/\byou and Hati both\b/g, "you and the wolves both"],
  [/\beach Hati peels to their\b/g, "each wolf peels to its"],
  [/\bheated Hati ignores\b/g, "the heated wolf ignores"],
  [/\bguard Hati cuts\b/g, "the guard wolf cuts"],
  [/\bwander Hati peels\b/g, "the wandering wolf peels"],
  [/\bphase Hati\b/g, "phase through wolves"],
  [/\bHati stun\b/g, "the wolves get stunned"],
  [/\bHati freeze\b/g, "wolf freeze"],
  [/\b(a|A|one|One|each|Each|every|Every|any|Any|the next|The next)((?: (?:chasing|heated|guard|wandering|single|lone))*) Hati\b/g, "$1$2 wolf"],
  [/\b(all|All|two|Two|three|Three|nearby|Nearby|chasing|Chasing|smashed|Smashed|other|Other|more|More|both|Both)( +)Hati\b/g, "$1$2wolves"],
  [/\b(the|The) Hati\b/g, "$1 wolves"],
  [/(^|[.!?]\s+)Hati (frozen|inbound|smashed|poisoned)\b/g, "$1Wolves $2"],
  [/\bHati (frozen|inbound|smashed|poisoned)\b/g, "wolves $1"],
  [/(^|[.!?]\s+)Hati\b/g, "$1The wolves"],
  [/\bHati\b/g, "the wolves"],
  /* Polyphemus (Fenrir), his boulders and the Ram's Fleece */
  [/\bFenrir's Fangs\b/g, "Ram's Fleeces"],
  [/\bFenrir's Fang\b/g, "the Ram's Fleece"],
  [/\bFenrir-beater\b/g, "Cyclops-beater"],
  [/\bFenrir howls\b/g, "Polyphemus roars"],
  [/\b[Tt]he great wolf\b/g, "the Cyclops"],
  [/\bFenrir's\b/g, "Polyphemus's"],
  [/\bFenrir\b/g, "Polyphemus"],
  [/\bFENRIR\b/g, "POLYPHEMUS"],
  /* the hero */
  [/\bSol's CHARIOT\b/g, "Helios's CHARIOT"],
  [/\b[Tt]he Rune of Sol\b/g, "Athena's Aegis"],
  [/\bRune of Sol\b/g, "Athena's Aegis"],
  [/\bSol's\b/g, "Odysseus's"],
  [/\bSol\b/g, "Odysseus"],
  /* the voyage */
  [/\ba realm\b/g, "an island"],
  [/\bA realm\b/g, "An island"],
  [/(^|[^-\w])realms(?![-\w])/g, "$1islands"],
  [/(^|[^-\w])realm(?![-\w])/g, "$1island"],
  [/(^|[^-\w])Realms(?![-\w])/g, "$1Islands"],
  [/(^|[^-\w])Realm(?![-\w])/g, "$1Island"],
  [/\bREALM\b/g, "ISLAND"],
  [/\bYou beat Ragnarok\b/g, "You reached Ithaca"],
  [/\bRagnarok\b/g, "Poseidon's Storm"],
  [/\bRune Rocks\b/g, "The Wandering Rocks"],
  [/\b([Rr])unestones\b/g, function (m, r) { return r === "R" ? "Moly flowers" : "moly flowers"; }],
  [/\b([Rr])unestone\b/g, function (m, r) { return r === "R" ? "Moly flower" : "moly flower"; }],
  [/\brunes\b/g, "letters"],
  [/\brune\b/g, "letter"],
  [/\bNorse\b/g, "Greek"]
];

/* the words that must not be left where a player reads them */
var LEFT_RE = /\b(Hati|Fenrir|Sol|Odin|Valkyries?|Ragnarok|Midgard|Niflheim|Jotunheim|Muspelheim|Svartalfheim|Vanaheim|Alfheim|Helheim|Asgard|Huginn|Norse)\b|rune|realm|hati|fenrir|valkyr|ragnarok|huginn|odin\b/i;

/* ── string-literal helpers ── */
/* the content of a literal with its own quote unescaped (\' -> ' in '...'), other escapes kept as written */
function unq(raw, q) {
  var out = "";
  for (var i = 0; i < raw.length; i++) {
    if (raw[i] === "\\" && i + 1 < raw.length) {
      if (raw[i + 1] === q) { out += q; i++; continue; }
      out += raw[i] + raw[i + 1]; i++; continue;
    }
    out += raw[i];
  }
  return out;
}
/* and back: every bare quote of the literal's kind escaped again */
function req(txt, q) {
  var out = "";
  for (var i = 0; i < txt.length; i++) {
    if (txt[i] === "\\" && i + 1 < txt.length) { out += txt[i] + txt[i + 1]; i++; continue; }
    out += txt[i] === q ? "\\" + q : txt[i];
  }
  return out;
}

function isClassList(txt) { return /^[a-z0-9 _-]+$/.test(txt) && /-/.test(txt); }
function generic(txt) {
  if (!/\s/.test(txt)) return txt;                      /* ids, keys, kinds, event names */
  if (/^\[/.test(txt)) return txt;                      /* console tags: "[realms] spawn " */
  if (isClassList(txt)) return txt;                     /* CSS class lists: "realm-card mode-card hidden" */
  var out = txt;
  RULES.forEach(function (r) { out = out.replace(r[0], r[1]); });
  return out;
}

/* the [start, end) source range of the table `var NAME = [ ... ]` / `{ ... }` */
function tableRange(toks, name) {
  for (var i = 0; i + 3 < toks.length; i++) {
    if (toks[i].type === "id" && toks[i].text === "var" && toks[i + 1].text === name && toks[i + 2].text === "=" && /^[\[{]$/.test(toks[i + 3].text)) {
      var depth = 0;
      for (var j = i + 3; j < toks.length; j++) {
        var t = toks[j].text;
        if (toks[j].type === "punct" && (t === "[" || t === "{" || t === "(")) depth++;
        else if (toks[j].type === "punct" && (t === "]" || t === "}" || t === ")")) { depth--; if (!depth) return [toks[i].start, toks[j].end]; }
      }
    }
  }
  throw new Error("ody-theme: no table " + name);
}

function lineStartBefore(src, at) { var k = src.lastIndexOf("\n", at - 1); return src.slice(k + 1, at); }

/* rewrites one .js file's literals; returns { src, changes: [...], left: [...] } */
function themeJs(rel, src) {
  var toks = tokenize(src), exact = EXACT[rel] || [], skip = [];
  if (rel === "js/realms.js") skip.push(tableRange(toks, "REALMS"));
  if (rel === "js/modes.js") skip.push(tableRange(toks, "MODES"));
  var out = "", last = 0, changes = [], used = {};
  toks.forEach(function (t) {
    if (t.type !== "str" && t.type !== "tpl") return;
    if (skip.some(function (r) { return t.start >= r[0] && t.end <= r[1]; })) return;
    var q = t.type === "str" ? t.q : "`";
    var raw = t.type === "str" ? t.text.slice(1, -1) : t.text;
    var txt = t.type === "str" ? unq(raw, q) : raw;
    var before = lineStartBefore(src, t.start), next = null;
    for (var k = 0; k < exact.length; k++) {
      if (exact[k][0] === txt && (!exact[k][2] || exact[k][2].test(before))) { next = exact[k][1]; used[k] = 1; break; }
    }
    if (next === null) next = generic(txt);
    if (next === txt) return;
    var bs = function (s) { return (s.match(/\\/g) || []).length; };
    if (/[\n\r]/.test(next) || bs(next) !== bs(txt) || (t.type === "tpl" && /`|\$\{/.test(next)))
      throw new Error("ody-theme: unsafe replacement in " + rel + ":" + t.line);
    var nraw = t.type === "str" ? req(next, q) : next;
    var a = t.type === "str" ? t.start + 1 : t.start, b = t.type === "str" ? t.end - 1 : t.end;
    out += src.slice(last, a) + nraw; last = b;
    changes.push({ file: rel, line: t.line, before: txt, after: next });
  });
  out += src.slice(last);
  exact.forEach(function (e, k) { if (!used[k]) throw new Error("ody-theme: " + rel + " has no literal " + JSON.stringify(e[0]) + " (the source changed? update tools/ody-theme.js)"); });

  /* checks: it parses, and only string contents changed */
  try { new vm.Script(out, { filename: rel }); } catch (e) { throw new Error("ody-theme: " + rel + " no longer parses: " + e.message); }
  var a2 = tokenize(out);
  if (a2.length !== toks.length) throw new Error("ody-theme: " + rel + " token count changed");
  for (var i = 0; i < toks.length; i++) {
    var x = toks[i], y = a2[i];
    if (x.type !== y.type || x.q !== y.q || ((x.type !== "str" && x.type !== "tpl") && x.text !== y.text) || x.line !== y.line)
      throw new Error("ody-theme: " + rel + ":" + x.line + " code changed (" + x.text + " -> " + y.text + ")");
  }

  /* what is left */
  var left = [];
  a2.forEach(function (t) {
    if (t.type !== "str" && t.type !== "tpl") return;
    var txt = t.type === "str" ? unq(t.text.slice(1, -1), t.q) : t.text;
    if (!LEFT_RE.test(txt)) return;
    var inTable = skip.some(function (r) { return t.start >= r[0] && t.end <= r[1]; });   /* offsets match: tables are untouched */
    left.push({ file: rel, line: t.line, text: txt, why: leftReason(rel, txt, inTable) });
  });
  return { src: out, changes: changes, left: left };
}

function leftReason(rel, txt, inTable) {
  if (inTable) return rel === "js/realms.js" ? "REALMS table: js/odyssey.js rewrites it at runtime" : "MODES table: js/odyssey.js rewrites it at runtime";
  if (/^\[/.test(txt)) return "console tag, never shown";
  if (/^afterHours\./.test(txt)) return "save key";
  if (/^[a-z0-9_.\/-]+$/.test(txt)) return "id / key / kind / texture, file or class name, not shown";
  if (isClassList(txt)) return "CSS class list, not shown";
  if (txt === "SOL Labyrinth · ") return "document.title prefix (\"SOL Labyrinth · The Odyssey\"): the ODY index.html sets the real title again right after game.js runs";
  if (/^SOL\b|\bSOL\b/.test(txt) && !/\b(Hati|Fenrir|Sol)\b/.test(txt)) return "SOL = the Virginia test, not the hero";
  return "UNEXPECTED — check";
}

/* ── index.html: the words on the page (the structure is tools/build-games.js's) ── */
var INDEX = [
  [/Correct letters call Sol's CHARIOT\./, "Correct letters call Helios's CHARIOT."],
  [/Hati cannot see you in either booth\./, "Circe's wolves cannot see you in either booth."],
  [/<h2 id="tut-title">You are Sol<\/h2>/, '<h2 id="tut-title">You are Odysseus</h2>']
];
function themeIndex(html) {
  var changes = [];
  INDEX.forEach(function (r) {
    var m = html.match(r[0]);
    if (!m) throw new Error("ody-theme: index.html has no " + r[0]);
    var line = html.slice(0, m.index).split("\n").length;
    html = html.replace(r[0], r[1]);
    changes.push({ file: "index.html", line: line, before: m[0], after: r[1] });
  });
  var left = [];
  html.split("\n").forEach(function (l, i) {
    if (/^\s*<script src=|^\s*<link /.test(l)) return;   /* file names */
    var vis = l.replace(/<[^>]*?\b(alt|title|aria-label|placeholder)="([^"]*)"[^>]*>/g, " $2 ").replace(/<[^>]*>/g, " ");
    if (LEFT_RE.test(vis)) left.push({ file: "index.html", line: i + 1, text: vis.trim(), why: /\bSOL\b/.test(vis) && !/\bSol\b/.test(vis) ? "SOL = the Virginia test, not the hero" : "UNEXPECTED — check" });
  });
  return { html: html, changes: changes, left: left };
}

/* ── assets/build/pieces.json: the ten bosses' monuments ── */
var TROPHIES = {
  "trophy-midgard": ["Hero of Troy", "A bronze-armed hero on a double plinth, raised for beating Polyphemus on Troy's Shore. Only beating Polyphemus gives it."],
  "trophy-niflheim": ["Lotus Obelisk", "A tall obelisk from the honey-sweet shore of the Lotus-Eaters, won by beating Polyphemus there. Only beating Polyphemus gives it."],
  "trophy-jotunheim": ["Cyclops Head", "A stone head of a one-eyed giant from the Island of the Cyclopes, won by beating Polyphemus there. Only beating Polyphemus gives it."],
  "trophy-muspelheim": ["Beacon of the Winds", "A beacon on a high plinth, its flame fed by the winds of Aeolus's floating island. Only beating Polyphemus gives it."],
  "trophy-svartalfheim": ["Giants' Urn", "A giant's bronze urn on a carved column from the harbor of the Laestrygonians. Only beating Polyphemus gives it."],
  "trophy-vanaheim": ["Circe's Ring", "A standing ring of stone from Circe's oak woods on Aeaea, won by beating Polyphemus there. Only beating Polyphemus gives it."],
  "trophy-alfheim": ["Spire of the Shades", "A spire of pale stone from the misty House of Hades, the tallest obelisk in the land of the dead. Only beating Polyphemus gives it."],
  "trophy-helheim": ["Siren Ward Stone", "A carved ward stone and urn from the Sirens' Isle, to keep their song away. Only beating Polyphemus gives it."],
  "trophy-asgard": ["King of the Strait", "A sea-king on a double plinth, raised for beating Polyphemus in the narrow strait of Scylla and Charybdis. Only beating Polyphemus gives it."],
  "trophy-ragnarok": ["Homecoming Column", "A king atop a great column: Odysseus home on Ithaca at last, after Poseidon's storm. Only beating Polyphemus gives it."]
};
function themePieces(text) {
  var data = JSON.parse(text), changes = [], left = [], seen = 0;
  var indent = (text.match(/\n( +)"/) || [0, " "])[1];
  data.pieces.forEach(function (p) {
    var t = TROPHIES[p.id];
    if (t) {
      seen++;
      if (!p.boss) throw new Error("ody-theme: pieces.json " + p.id + " is not a boss trophy");
      changes.push({ file: "assets/build/pieces.json", line: p.id, before: p.name + " | " + p.desc, after: t[0] + " | " + t[1] });
      p.name = t[0]; p.desc = t[1];
    }
    ["name", "desc"].forEach(function (k) { if (p[k] && LEFT_RE.test(p[k])) left.push({ file: "assets/build/pieces.json", line: p.id, text: p[k], why: "UNEXPECTED — check" }); });
  });
  if (seen !== Object.keys(TROPHIES).length) throw new Error("ody-theme: pieces.json has " + seen + " of the 10 boss trophies");
  return { text: JSON.stringify(data, null, indent) + (/\n$/.test(text) ? "\n" : ""), changes: changes, left: left };
}

var COMPUTED = [
  "js/build.js:1340,1347  realmName(p.boss) -> \"Midgard\", \"Niflheim\" ...  — computed from the realm id (the id capitalised), so the castle gallery's locked-trophy tag reads \"Beat Polyphemus in Midgard\" and its note \"... on the last level of Midgard to win it.\" PLAYER-VISIBLE: needs a source change in js/build.js realmName() (e.g. take the name from window.SolRealms.REALMS, which js/odyssey.js rewrites)."
];

var JS_FILES = ["js/game.js", "js/realms.js", "js/modes.js", "js/build.js", "js/music.js"];

function apply(outDir) {
  var changes = [], left = [];
  JS_FILES.forEach(function (rel) {
    var p = path.join(outDir, rel), r = themeJs(rel, fs.readFileSync(p, "utf8"));
    fs.writeFileSync(p, r.src);
    changes = changes.concat(r.changes); left = left.concat(r.left);
  });
  var ip = path.join(outDir, "index.html"), ri = themeIndex(fs.readFileSync(ip, "utf8"));
  fs.writeFileSync(ip, ri.html);
  changes = changes.concat(ri.changes); left = left.concat(ri.left);
  var pp = path.join(outDir, "assets/build/pieces.json"), rp = themePieces(fs.readFileSync(pp, "utf8"));
  fs.writeFileSync(pp, rp.text);
  changes = changes.concat(rp.changes); left = left.concat(rp.left);

  /* the review */
  var per = {};
  changes.forEach(function (c) { per[c.file] = (per[c.file] || 0) + 1; });
  var lines = ["The Odyssey build: every changed literal (tools/ody-theme.js)", ""];
  lines.push("Changed: " + Object.keys(per).map(function (f) { return f + " " + per[f]; }).join(", ") + " (" + changes.length + " in all)", "");
  changes.forEach(function (c) { lines.push(c.file + ":" + c.line + "  " + JSON.stringify(c.before) + "\n    -> " + JSON.stringify(c.after)); });
  lines.push("", "Norse words still in a literal or in index.html (" + left.length + "), grouped:", "");
  var groups = {}, order = [];
  left.forEach(function (l) {
    var key = l.file + "\u0000" + l.text + "\u0000" + l.why;
    if (!groups[key]) { groups[key] = { l: l, lines: [] }; order.push(key); }
    groups[key].lines.push(l.line);
  });
  var unexpected = 0;
  order.forEach(function (k) {
    var g = groups[k];
    if (/UNEXPECTED/.test(g.l.why)) unexpected++;
    lines.push("LEFT: " + g.l.file + ":" + g.lines.join(",") + "  " + JSON.stringify(g.l.text.length > 160 ? g.l.text.slice(0, 160) + "…" : g.l.text) + "  — " + g.l.why);
  });
  /* names the code builds from ids: no string to change */
  COMPUTED.forEach(function (c) { lines.push("LEFT: " + c); });
  fs.writeFileSync(path.join(outDir, "..", "ody-theme-review.txt"), lines.join("\n") + "\n");
  return { changes: changes.length, perFile: per, left: left.length, unexpected: unexpected };
}

module.exports = { apply: apply, _themeJs: themeJs, _generic: generic };
