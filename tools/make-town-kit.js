#!/usr/bin/env node
/* v5.20: the Town is built from the same 3D models as the Castle.
   Rewrites the "village" (Town) theme in assets/build/pieces.json from the "castle" theme that tools/make-castle-kit.py
   writes: every castle piece except the keeps is copied into the Town (same id, same models, same price), and the Town
   gets its own three starting homes that grow a storey as the town grows (like the keep), its own tabs, ranks and packs,
   and a wooden fence (not a curtain wall) that goes up round it at the 8th building.
   Run it after tools/make-castle-kit.py:   node tools/make-town-kit.js
   The old Town (2D pictures from the Modular Village Pack, Red Tile / Slate / Thatch styles) is gone; js/build.js
   turns a saved old town into this one (TOWN_MAP there). */
var fs = require("fs"), path = require("path");
var pj = path.join(__dirname, "..", "assets", "build", "pieces.json");
var text = fs.readFileSync(pj, "utf8"), d = JSON.parse(text);
var castle = d.themes.castle;
if (!castle || !castle.kit) throw new Error("make-town-kit: run tools/make-castle-kit.py first (no castle kit theme)");

/* the three homes a town starts from: stacked Kenney Fantasy Town walls and roofs (the models the castle's cottages,
   halls and manor use); stage 0..3 at the theme's growAt building counts */
var W = "t_wallBlock_NE", WW = "t_wallWoodBlock_NE";
function core(id, name, desc, score, grow) {
  return { id: id, theme: "village", name: name, desc: desc, role: "core", kind: "core", tier: 1, price: 80, score: score, cells: 1, cat: "core",
    parts: grow[0], grow: grow, img: "", nostyle: false };
}
var cores = [
  core("cottage", "Timber cottage", "A snug timber cottage. It grows a storey as your town grows.", 40,
    [[WW, "t_roofGable_NE"], [WW, WW, "t_roofGable_NE"], [W, WW, "t_roofHighGable_NE"], [W, WW, WW, "t_roofHighGable_NE"]]),
  core("stone-cottage", "Stone cottage", "A stone cottage with a pointed roof. It grows a storey as your town grows.", 40,
    [[W, "t_roofPoint_NE"], [W, W, "t_roofPoint_NE"], [W, W, "t_roofHighPoint_NE"], [W, W, W, "t_roofHighPoint_NE"]]),
  core("house", "Town house", "A two-storey house. It grows taller, with a window in the roof, as your town grows.", 42,
    [[W, WW, "t_roof_NE"], [W, WW, "t_roofHigh_NE"], [W, W, WW, "t_roofHigh_NE"], [W, W, WW, "t_roofHighWindow_NE"]])
];
/* every other castle piece, as a Town piece; the cheapest houses are tier 1 so the first rewards can offer them */
var copies = d.pieces.filter(function (p) { return p.theme === "castle" && p.role !== "core"; }).map(function (p) {
  var q = JSON.parse(JSON.stringify(p));
  q.theme = "village";
  if (q.cat === "house" && (q.price || 0) <= 60) q.tier = 1;
  return q;
});
d.pieces = d.pieces.filter(function (p) { return p.theme !== "village"; }).concat(cores, copies);

function pack(id, name, desc, items, discount) { return { id: id, name: name, desc: desc, items: items, discount: discount }; }
d.themes.village = {
  name: "Town", desc: "A cottage that grows into a whole town: houses, a market hall, mills and a town hall, fences that turn corners, roofs in your colour.",
  kit: true, cell: castle.cell, cellH: castle.cellH, unitPx: 1, drawScale: 1, wallLevel: castle.wallLevel, growAt: castle.growAt.slice(),
  coreNoun: "home", offerCats: ["house"], shopFirst: [],
  autoWall: { seg: "c-fence", gate: "fence-gate", note: "A wooden fence went up around your town — drag any piece of it to reshape it!",
    soon: "One more building and a fence goes up around your town." },
  tabs: [["core", "Home"], ["house", "Buildings"], ["village", "Village"], ["nature", "Nature"], ["animal", "Animals"], ["statue", "Statues"],
    ["wall", "Walls & gates"], ["tower", "Towers"], ["people", "People & siege"], ["flag", "Flags"]],
  styles: JSON.parse(JSON.stringify(castle.styles)),
  ranks: [[0, "Hamlet"], [120, "Village"], [300, "Market town"], [600, "Town"], [1000, "Borough"], [1600, "City"], [2400, "Capital"]],
  packs: [
    pack("town", "Town pack", "A town hall, two houses, a well and a market hall, 20% off.", ["k-townhall", "k-home-a", "k-home-b", "k-well", "k-market"], 0.2),
    pack("village", "Village pack", "A cottage, a market stall, a cart, a lantern and a bench, 20% off.", ["c-cottage", "stall-red", "cart", "lantern", "bench"], 0.2),
    pack("farm", "Farm pack", "A stable, a rail fence, a cow, a horse and a chicken, 20% off.", ["stable", "rail-fence", "cow", "horse", "chicken"], 0.2),
    pack("mills", "Mill pack", "A lumber mill, a stone windmill and a water mill, 15% off.", ["k-lumbermill", "k-windmill", "k-watermill"], 0.15),
    pack("garden", "Garden pack", "Flowers, an oak, bushes and a hedge, 25% off.", ["flowers-mixed", "flowers-red", "oak", "bushes", "hedge"], 0.25),
    pack("fences", "Fence pack", "Four lengths of wooden fence and a fence gate, 25% off. They turn corners by themselves.", ["c-fence", "c-fence", "c-fence", "c-fence", "fence-gate"], 0.25),
    pack("monuments", "Monument pack", "A fountain, an obelisk, a column and a knight statue, 20% off.", ["fountain", "obelisk", "column", "knight-statue"], 0.2),
    pack("craft", "Craft pack", "A blacksmith, a workshop and a shrine, 15% off.", ["k-blacksmith", "k-workshop", "k-shrine"], 0.15)
  ]
};
var have = {};
d.pieces.forEach(function (p) { if (p.theme === "village") have[p.id] = 1; });
d.themes.village.packs.forEach(function (pk) { pk.items.forEach(function (id) { if (!have[id]) throw new Error("make-town-kit: pack " + pk.id + " names " + id + ", not a town piece"); }); });
var indent = (text.match(/\n( +)"/) || [0, " "])[1];
fs.writeFileSync(pj, JSON.stringify(d, null, indent.length) + (/\n$/.test(text) ? "\n" : ""));
console.log("town pieces: " + cores.length + " homes + " + copies.length + " from the castle -> " + pj);
