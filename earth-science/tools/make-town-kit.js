#!/usr/bin/env node
/* Earth Science 1.0: the Town is built from the same 3D kit as the Castle.  node tools/make-town-kit.js
   Rewrites the "village" theme and its pieces in assets/build/pieces.json from the "castle" theme there (which
   tools/make-castle-kit.py writes): every castle piece (buildings, towers, walls and gates, village life, nature,
   statues, animals, people, flags, and Fenrir's monuments) is offered in the Town too, with the same id, the same 3D
   model and the same price, so js/build3d.js draws a town exactly as it draws a castle. Only three things differ:
     - the core (reward 1) is a house that grows a storey as the town grows, instead of a keep;
     - when the town reaches its wall level a wooden fence with a gate goes up around it (theme.kitRing), not a
       curtain wall;
     - the Town's names: its ranks (Hamlet … Capital), its tabs ("Home" for the core) and its description.
   The old 2D town pieces (village-*.png sprites) are no longer offered; js/build.js maps a town saved with them onto
   these pieces (TOWN_3D in migrateIfNeeded). Run it again after tools/make-castle-kit.py. */
var fs = require("fs"), path = require("path");
var file = path.join(__dirname, "..", "assets", "build", "pieces.json");
var P = JSON.parse(fs.readFileSync(file, "utf8"));
var castle = P.themes.castle;
if (!castle || !castle.kit) throw new Error("tools/make-town-kit.js: pieces.json has no castle kit theme");

var town = JSON.parse(JSON.stringify(castle));
town.name = "Town";
town.desc = "A cottage that grows into a whole town in 3D: houses, a market, mills and a town hall, with every piece the castle has.";
town.ranks = [[0, "Hamlet"], [120, "Village"], [300, "Market town"], [600, "Town"], [1000, "Borough"], [1600, "City"], [2400, "Capital"]];
/* the same tabs, a town's order: its home, buildings and village life first, then towers and walls */
var TAB_ORDER = ["core", "house", "village", "nature", "tower", "wall", "statue", "animal", "people", "flag"];
town.tabs = castle.tabs.map(function (t) { return t[0] === "core" ? ["core", "Home"] : t.slice(); })
  .sort(function (a, b) { var i = TAB_ORDER.indexOf(a[0]), j = TAB_ORDER.indexOf(b[0]); return (i < 0 ? 99 : i) - (j < 0 ? 99 : j); });
/* the ring raised at the wall level: a wooden fence with one gate (js/build.js raiseCastleWalls) */
town.kitRing = { seg: "c-fence", gate: "fence-gate", note: "A wooden fence went up around your town — drag any length to reshape it!", soon: "One more building and a fence goes up around your town." };
delete town.ring;

/* the cores: a house that grows a storey at each theme.growAt building count, like the keep */
var W = "t_wallBlock_NE", WW = "t_wallWoodBlock_NE";
function core(id, name, desc, grow) {
  return { id: id, theme: "village", name: name, desc: desc, role: "core", kind: "core", tier: 1, price: 80, score: 40, cells: 1, cat: "core",
    parts: grow[0].slice(), grow: grow, img: "", nostyle: false };
}
var cores = [
  core("cottage", "Cottage", "A stone cottage with a gabled roof. It grows taller as your town grows.",
    [[W, "t_roofGable_NE"], [W, W, "t_roofGable_NE"], [W, W, "t_roofHighGable_NE"], [W, W, W, "t_roofHighWindow_NE"]]),
  core("house", "Timber house", "A timber house with a pointed roof. It grows taller as your town grows.",
    [[WW, "t_roofPoint_NE"], [WW, WW, "t_roofPoint_NE"], [WW, WW, "t_roofHighPoint_NE"], [WW, WW, WW, "t_roofHighPoint_NE"]]),
  core("stone-cottage", "Stone house", "A sturdy stone house with a hipped roof. It grows taller as your town grows.",
    [[W, "t_roof_NE"], [W, W, "t_roof_NE"], [W, W, "t_roofHigh_NE"], [W, WW, W, "t_roofHighWindow_NE"]])
];
var missing = [];
cores.forEach(function (c) { c.grow.forEach(function (st) { st.forEach(function (nm) { if (!P.kit.sprites[nm]) missing.push(nm); }); }); });
if (missing.length) throw new Error("tools/make-town-kit.js: kit sprites missing: " + missing.join(", "));

var copies = P.pieces.filter(function (p) { return p.theme === "castle" && p.role !== "core"; }).map(function (p) {
  var q = JSON.parse(JSON.stringify(p)); q.theme = "village"; return q;
});
var others = P.pieces.filter(function (p) { return p.theme !== "village"; });
P.pieces = others.concat(cores, copies);
P.themes.village = town;
fs.writeFileSync(file, JSON.stringify(P, null, 1));
var n = P.pieces.filter(function (p) { return p.theme === "village"; }).length;
console.log("assets/build/pieces.json: the Town is a 3D kit theme with " + n + " pieces (" + cores.length + " growing houses + " + copies.length + " from the castle kit)");
