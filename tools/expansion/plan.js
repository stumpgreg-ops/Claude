/* The question expansion plan (v5.15): every Virginia selection gets enough questions for all 7 game modes x 100
   levels x 5 questions (3,500) with no repeats, and the three grades grow by the same amount so Grade 10 and 11
   keep their own grade-level questions. The game picks passages by length as levels go up (js/content.js
   targetWords: 60 words at level 1, +10 every 2 levels), so the new packs follow the levels' length tiers.
   node tools/expansion/plan.js  -> writes tools/expansion/PLAN.md (one row per new content file). */
var fs = require("fs"), path = require("path");
var TIERS = [
  /* tier, levels, prose words, poem lines, paired words (each), questions per pack, packs per file, questions needed per grade (7 modes) */
  { id: "tiny", levels: "1-8", prose: "50-90", poem: "6-8 lines", paired: "35-45", q: 5, perFile: 25, need: 280 },
  { id: "short", levels: "9-20", prose: "100-150", poem: "8-10 lines", paired: "60-80", q: 6, perFile: 25, need: 420 },
  { id: "medium", levels: "21-50", prose: "170-290", poem: "12-16 lines", paired: "110-150", q: 6, perFile: 20, need: 1050 },
  { id: "mid", levels: "51-64", prose: "310-370", poem: "18-22 lines", paired: "170-200", q: 7, perFile: 16, need: 490 },
  { id: "long", levels: "65-94", prose: "390-520", poem: "22-28 lines", paired: "200-260", q: 8, perFile: 13, need: 1050 },
  { id: "epic", levels: "95-100", prose: "540-650", poem: "", paired: "280-330", q: 8, perFile: 11, need: 210 }
];
/* questions already in each grade's tier (counted from js/content*.js on 2026-10-07) */
var HAVE = {
  G9: { tiny: 31, short: 95, medium: 143, mid: 36, long: 39, epic: 46 },
  G10: { tiny: 34, short: 99, medium: 156, mid: 18, long: 38, epic: 48 },
  G11: { tiny: 41, short: 78, medium: 176, mid: 12, long: 56, epic: 32 }
};
var TOPICS = ["coastal tide pools", "a school robotics club", "community gardens", "a small-town bakery", "storm chasing and weather",
  "a high school orchestra", "bike repair and cycling", "a local history museum", "night-sky astronomy", "part-time summer jobs",
  "a cross-country team", "animal shelters", "public libraries", "a school play backstage", "bridges and engineering",
  "beekeeping", "river cleanups", "a family restaurant", "mountain hiking", "app design and coding", "photography",
  "a school newspaper", "solar and wind energy", "deep-sea exploration", "desert ecosystems", "archaeology digs",
  "an art museum", "student filmmaking", "railroads and trains", "early aviation", "recycling and waste", "chess tournaments",
  "learning a new language", "a family farm", "street murals", "a hospital volunteer program", "marine mammals", "insects",
  "migrating birds", "rocks and caves", "a fictional ancient city", "sports science", "dance competitions", "a county fair",
  "lighthouses", "a food truck", "volcanoes", "a science fair", "a mechanic's garage", "a radio station", "ice skating",
  "a mountain rescue team", "glassblowing", "a woodworking shop", "the history of maps", "a debate team", "clock and watch repair",
  "sea turtles", "a city bus route", "a theme park job", "pottery", "a snowstorm", "a bookstore", "a neighborhood block party",
  "inventors and patents", "a marching band", "a botanical garden", "kayaking", "a puzzle hunt", "fossils", "sign language",
  "a zoo keeper", "a wildfire lookout", "a quilting circle", "a skate park", "a cooking contest", "a planetarium", "tree climbing arborists",
  "a ferry crossing", "a weather balloon launch", "a toy maker", "a newspaper archive", "a farmers market", "a coral reef", "a tutoring program"];
var KINDS = "about 25% Literary, 22% Informational, 14% Vocabulary, 14% Paired texts, 9% Poetry (none in epic), 5% Drama, 6% Functional text, 5% Argument";
var rows = [], file = 32, ti = 0;
["G9", "G10", "G11"].forEach(function (g) {
  TIERS.forEach(function (t) {
    var needQ = Math.max(0, t.need - HAVE[g][t.id]), packs = Math.ceil(needQ / t.q), files = Math.max(1, Math.round(packs / t.perFile));
    for (var i = 0; i < files; i++) {
      var n = Math.round(packs * (i + 1) / files) - Math.round(packs * i / files);
      var topics = [0, 1, 2, 3].map(function (k) { return TOPICS[(ti * 4 + k) % TOPICS.length]; }); ti++;
      rows.push({ file: "content" + file, grade: g, tier: t.id, levels: t.levels, packs: n, q: t.q, prose: t.prose, poem: t.poem, paired: t.paired, topics: topics.join("; ") });
      file++;
    }
  });
});
var out = ["# Question expansion plan (v5.15)", "",
  "One row per new file. Each file is written by one writer following tools/expansion/README.md.", "",
  "| file | grade | tier (levels) | packs | questions/pack | prose words | poem | paired (each) | topics to draw from |",
  "|---|---|---|---|---|---|---|---|---|"];
rows.forEach(function (r) { out.push("| js/" + r.file + ".js | " + r.grade + " | " + r.tier + " (" + r.levels + ") | " + r.packs + " | " + r.q + " | " + r.prose + " | " + (r.poem || "-") + " | " + r.paired + " | " + r.topics + " |"); });
var tot = rows.reduce(function (a, r) { return a + r.packs; }, 0), totQ = rows.reduce(function (a, r) { return a + r.packs * r.q; }, 0);
out.push("", rows.length + " files, " + tot + " packs, about " + totQ + " questions. Kinds in each file: " + KINDS + ".");
fs.writeFileSync(path.join(__dirname, "PLAN.md"), out.join("\n") + "\n");
fs.writeFileSync(path.join(__dirname, "plan.json"), JSON.stringify(rows, null, 1));
console.log(rows.length + " files, " + tot + " packs, ~" + totQ + " questions");
