/* SOL Labyrinth v5.8.5 — shooter levels.
 *
 * Every other level of each realm (levels 2, 4, 6 and 8) swaps the maze for a
 * shooter, in rotation:
 *   2  Eagle Swoop   galaga style: eagles carry the letters above a raven guard and dive; shoot the right eagle
 *   4  Rune Rocks    asteroids style: beam in the rock with the right letter, blast the rest
 *   6  Sun Chariot   side-scrolling flyer: shoot the letter orb with the right answer
 *   8  Wolf Ring     arena: Hati attack; runestones rise one or two at a time; shoot the right one while it is up
 * Odd levels stay in the maze and every tenth level is still Fenrir's boss maze.
 * v5.10, the Odyssey build only (window.SOL_STATE === "ODY"): level 9 of every island is
 *   9  Scylla and Charybdis  steering level: sail through the gate with the right letter while
 *                            Charybdis's whirlpool pulls and Scylla's heads strike
 *
 * The questions, the reading pop-up, lives, coins, the adaptive reading level,
 * the castle perks and the end-of-level screens are the maze's own: ModeScene
 * extends NightScene and only replaces the playfield. A wrong letter costs a life
 * and so does getting hit, the same as a wrong letter or a catch in the maze.
 *
 * game.js calls SolModes.install(NightScene, internals) after SolRealms.install
 * and switches scenes in restartNight(). Load order: after realms.js, before game.js.
 */
(function () {
  "use strict";

  var MODES = {
    raid: {
      id: "raid", name: "Eagle Swoop", kind: "galaga-style level",
      how: "Great eagles fly in and take the top of the sky, each carrying a letter in its talons, with two guard ravens under each eagle and rows of ravens below. Once the flock has formed, shoot the eagle that carries the right answer — it takes two arrows. Birds are always swooping down at Sol, and an eagle can stop and shine a beam down to catch him and carry him off. Hit that eagle with an arrow to free him: then two Sols stand side by side and shoot two arrows at a time.",
      rules: "A wrong letter costs a life. So does bird poo landing on you or a bird crashing into you. If an eagle carries Sol off, free him before the question is answered, or it costs a life. With two Sols, a hit or a beam takes one Sol away instead of a life. You can't shoot until the flock has flown into formation.",
      keys: "◀ ▶ or A / D move · Space, FIRE or a mouse button shoots (clicking does not move Sol).",
      tip: "EAGLE SWOOP — shoot the eagle with the right letter. If an eagle carries Sol off, hit it to get him back: two Sols!",
      hint1: "Shoot the eagle carrying the right letter — it takes two arrows. The passage stays in the side panel.",
      hint2: "This question has two right letters. Shoot both eagles that carry them.",
      news: ["",
        "Bird poo now drifts toward where you stand, and every diving bird drops two.",
        "The eagles trade places in the formation now and then. Keep your eye on the right letter.",
        "Iron-helmed eagles: an eagle now takes three arrows.",
        "A third row of ravens guards the eagles.",
        "A storm cloud drifts across the flock. Arrows can't get through it.",
        "An eagle's catching beam now follows you.",
        "Ravens in the formation drop poo too, not just the divers.",
        "Two storm clouds, and the eagles trade places more often.",
        "Ragnarok: one more bird dives at a time, on top of everything else."]
    },
    rocks: {
      id: "rocks", name: "Rune Rocks", kind: "asteroids level",
      how: "Rocks drift through space and a few carry letters. Hold your beam on the rock with the right answer to pull it in. Blast the wrong letters and the plain rocks before they hit you. Every level brings more and faster rocks, every new question sends in another wave, and dark-elf saucers fly across and shoot at you — shoot them for a bonus.",
      rules: "Pulling in a wrong letter costs a life. So does blasting the right answer, a saucer's shot, or a rock hitting your ship — including a rock you let go of before it reached you.",
      keys: "◀ ▶ turn · ▲ thrust · Space, FIRE or the left mouse button shoots · ▼, Shift, PULL or the right mouse button holds the beam. The mouse never steers the ship.",
      tip: "RUNE ROCKS — beam in the right letter, blast the rest. Don't get hit.",
      hint1: "Pull in the rock with the right letter (▼, Shift or PULL). Blast the others. The passage stays in the side panel.",
      hint2: "This question has two right letters. Pull in both rocks that carry them.",
      news: ["",
        "Comets: a red line flashes where a comet will streak across a second later. Get out of its way.",
        "Iron rocks: the big grey-blue rocks take two shots. Small dark-elf saucers now come too, and they aim at you.",
        "Heavy runes: the beam pulls letter rocks in more slowly. Hold it longer.",
        "Slippery space: your ship drifts further before it stops.",
        "Guard stones: two small stones circle every letter rock. Shoot them off before the beam can pull it in.",
        "Comets come twice as often, in pairs.",
        "A valkyrie flies past and throws spears at your ship. Shoot her for a bonus.",
        "Rock showers: a wave of small rocks pours in from one side (an arrow shows where first).",
        "Ragnarok: every rock moves faster, on top of everything else."]
    },
    sky: {
      id: "sky", name: "Sun Chariot", kind: "flying shooter level",
      how: "Sol drives the sun's chariot across the sky. Letter orbs float past among ravens and will-o'-wisps, each inside a turning golden shield with one gap in it. A sunbolt only gets through when the gap faces you, so time your shot. Shoot the orb with the right answer; orbs you miss come round again. Ravens throw feathers at you (they glow orange first), and in later realms wisps throw sparks and a raven guards some orbs — shoot the guard out of the way.",
      rules: "Shooting a wrong orb costs a life. So does a feather, a spark, or flying into a raven or a wisp.",
      keys: "Arrow keys, WASD or the on-screen pad fly · Space, FIRE or a mouse button shoots (clicking does not move the chariot).",
      tip: "SUN CHARIOT — shoot the right orb through the gap in its shield. Dodge the ravens, wisps and feathers.",
      hint1: "Shoot the orb with the right letter through the gap in its turning shield. The passage stays in the side panel.",
      hint2: "This question has two right letters. Shoot both orbs that carry them, through the gaps in their shields.",
      news: ["",
        "A raven flies in front of one orb to guard it, the orbs weave more, and the shield gaps are narrower.",
        "Will-o'-wisps throw sparks at you.",
        "Shields now reverse direction without warning, and two orbs have guards.",
        "Narrower gaps and faster shields.",
        "Three orbs have guards.",
        "Every shield spins at its own speed.",
        "Four orbs have guards.",
        "Narrower gaps and faster shields again.",
        "Ragnarok: the narrowest, fastest shields of all."]
    },
    ring: {
      id: "ring", name: "Wolf Ring", kind: "arena level",
      how: "Sol stands in a stone ring while the Hati attack, often in packs. The letter runestones are sunk in the ground: after the wolves come, they rise one or two at a time, in any order and anywhere round the ring, and sink again a few seconds later. Shoot the runestone with the right answer while it is up. An arrow sends a wolf running. Every level the wolves come faster and in bigger numbers, and the stones stay up for less time.",
      rules: "Shooting a wrong stone costs a life. So does letting a wolf reach you.",
      keys: "Arrow keys or WASD move and aim · Space or FIRE shoots · or click or tap to aim and shoot (Sol does not move).",
      tip: "WOLF RING — watch for the right runestone to rise, and shoot it. Keep the wolves off.",
      hint1: "The runestones rise after the wolves come. Shoot the one with the right letter while it is up. The passage stays in the side panel.",
      hint2: "This question has two right letters. Shoot both runestones that carry them.",
      news: ["",
        "The alpha wolf: a big grey wolf that takes three arrows to send away.",
        "Bigger packs: the Hati can come three at a time from the same side.",
        "Ravens fly over the ring and drop poo. A shadow shows where it will land.",
        "The runestones slide round the ring while they are up.",
        "A quiver of six arrows: each one comes back after a moment, so don't waste them.",
        "Some wolves zig-zag as they run at you.",
        "The runestones stay up for less time, and two alpha wolves can come at once.",
        "Leaping wolves: some crouch, then leap the last stretch.",
        "Ragnarok: the wolves come faster, on top of everything else."]
    },
    /* v5.10: the Odyssey build only (window.SOL_STATE === "ODY"): Book 12, the strait between Scylla and Charybdis */
    strait: {
      id: "strait", name: "Scylla and Charybdis", kind: "steering level", level: "steering level", act: "ROW",
      how: "Odysseus's ship sails up the narrow strait. Gates of rock pillars come down the water toward you, each marked with a letter. Steer through the gate with the right answer; you can sail past the others in the open water between them. Gates you miss come round again. On the right, Charybdis's whirlpool swirls: when the water there turns dark and spins faster, she is about to surge and drag your ship toward her. On the left, Scylla waits on her cliff: a dark shadow on the water shows where one of her heads will strike next. Get out from under it.",
      rules: "Sailing through a wrong gate costs a life. So does hitting a rock, touching the dark centre of Charybdis, or being under one of Scylla's heads when it strikes — she snatches a crewman, as she took six men from Odysseus.",
      keys: "Arrow keys, WASD or the on-screen pad steer · Space, ROW or a mouse button: the crew pulls hard for a moment (a burst of speed). The mouse does not steer.",
      tip: "SCYLLA AND CHARYBDIS — steer through the gate with the right letter. Keep away from the whirlpool and from Scylla's shadows.",
      hint1: "Steer through the gate marked with the right letter. The passage stays in the side panel.",
      hint2: "This question has two right letters. Sail through both gates that carry them.",
      news: ["",
        "Charybdis tugs at the ship all the time now, not only when she surges.",
        "Scylla strikes with two heads at once.",
        "The gates sway from side to side.",
        "Lone rocks stand in the water between the gates. Steer round them.",
        "Scylla strikes with three heads at once.",
        "A head that misses strikes again at once: watch for a second shadow right where you are.",
        "Four of Scylla's heads strike at once.",
        "More lone rocks, narrower gates, and Charybdis surges more often.",
        "Ithaca is close: the strait runs faster, on top of everything else."]
    }
  };
  var SLOTS = { 2: "raid", 4: "rocks", 6: "sky", 8: "ring" };
  /* v5.10: the Odyssey build's Mixed rotation adds the strait on level 9 of every island (10 stays the boss) */
  /* v5.11: the Odyssey build mixes its own modes into each island's levels 2, 4, 6, 8 and 9
     (js/mode-ram.js, mode-bow.js, mode-raft.js, mode-row.js register themselves with SolModes.extend).
     One row per island; a mode that is not loaded falls back to the maze. */
  var ODY_ROT = [
    ["raid", "rocks", "sky", "ring", "strait"],   /* 1 Troy's Shore */
    ["row", "rocks", "sky", "ring", "bow"],       /* 2 the Lotus-Eaters */
    ["ram", "rocks", "sky", "ring", "strait"],    /* 3 the Cyclopes */
    ["raid", "raft", "sky", "ring", "strait"],    /* 4 Aeolia */
    ["raid", "rocks", "bow", "ring", "strait"],   /* 5 the Laestrygonians */
    ["raid", "rocks", "sky", "ring", "row"],      /* 6 Circe's island */
    ["ram", "rocks", "sky", "bow", "strait"],     /* 7 the House of Hades */
    ["raid", "row", "sky", "ring", "strait"],     /* 8 the Sirens' isle */
    ["raft", "rocks", "sky", "ring", "strait"],   /* 9 Scylla and Charybdis */
    ["raft", "ram", "bow", "row", "strait"]       /* 10 Poseidon's storm */
  ];
  var ODY_SLOT_IDX = { 2: 0, 4: 1, 6: 2, 8: 3, 9: 4 };
  /* v5.11: modes kept in their own files: SolModes.extend(id, def, methods) adds the MODES entry and,
     at install, copies the methods (setup_<id>, answers_<id>, tick_<id>, clear_<id>, resize_<id>, ...) onto ModeScene */
  var EXT = {};
  function extend(id, def, methods) {
    def.id = id;
    MODES[id] = def;
    EXT[id] = methods || {};
    return def;
  }
  function isOdy() { return typeof window !== "undefined" && window.SOL_STATE === "ODY"; }
  var BEAM_KEY = "afterHours.v1.beamLearned";   /* set once a student has pulled a rock in */
  var WING = 40, CAPT_UP = 54;   /* Eagle Swoop: the second Sol stands WING px to the right; a caught Sol hangs CAPT_UP px over his eagle */

  /* v5.8.3: the game mode the student picked (game.js sets SolModes.only): null plays every mode in turn,
     "maze" only the maze, a mode's id only that mode, on every level (boss levels too) */
  function modeFor(n) {
    n = Math.floor(Number(n) || 0);
    if (n < 1 || n > 100) return null;
    var only = window.SolModes && window.SolModes.only;
    if (only === "maze") return null;
    if (only && MODES[only]) return MODES[only];
    var slot = ((n - 1) % 10) + 1, id;
    if (isOdy()) {
      var row = ODY_ROT[Math.min(9, Math.floor((n - 1) / 10))];
      id = ODY_SLOT_IDX[slot] != null ? row[ODY_SLOT_IDX[slot]] : null;
    } else id = SLOTS[slot];
    return id && MODES[id] ? MODES[id] : null;
  }

  /* ── small helpers ── */
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function dist(ax, ay, bx, by) { var dx = ax - bx, dy = ay - by; return Math.sqrt(dx * dx + dy * dy); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function hex(c) { return "#" + ("000000" + (c >>> 0).toString(16)).slice(-6); }
  function mix(a, b, t) {
    var ar = (a >> 16) & 255, ag = (a >> 8) & 255, ab = a & 255, br = (b >> 16) & 255, bg = (b >> 8) & 255, bb = b & 255;
    return (Math.round(ar + (br - ar) * t) << 16) | (Math.round(ag + (bg - ag) * t) << 8) | Math.round(ab + (bb - ab) * t);
  }
  function angDiff(a, b) { var d = a - b; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; }
  function kill(o) {
    if (!o) return;
    ["spr", "label", "shield", "extra"].forEach(function (k) { if (o[k]) { try { o[k].destroy(); } catch (e) {} o[k] = null; } });
  }

  /* sound: the realm kit's WebAudio blips (quiet; nothing flashes) */
  function snd(name) {
    var R = window.SolRealms;
    if (!R || !R.blip) return;
    try {
      if (name === "shot") R.blip(1100, 520, 0.07, "square", 0.018);
      else if (name === "pop") { R.hiss(0.16, 1800, 0.04); R.blip(420, 180, 0.12, "triangle", 0.03); }
      else if (name === "rock") { R.hiss(0.28, 500, 0.06); }
      else if (name === "beam") R.blip(300, 360, 0.12, "sine", 0.02);
      else if (name === "yelp") { R.blip(900, 1300, 0.08, "triangle", 0.04); R.blip(1300, 700, 0.12, "triangle", 0.035, 0.08); }
      else if (name === "caw" && R.sfx) R.sfx.caw();
      else if (name === "chime" && R.sfx) R.sfx.chime();
      else if (name === "howl" && R.sfx) R.sfx.howl();
    } catch (e) {}
  }

  /* ── art, drawn once into canvas textures ── */
  function canvasTex(scene, key, w, h, draw) {
    if (scene.textures.exists(key)) return;
    var t = scene.textures.createCanvas(key, w, h);
    if (!t) return;
    draw(t.getContext(), w, h);
    t.refresh();
  }
  function drawArrow(c, w, h) {
    c.strokeStyle = "#e8d6a8"; c.lineWidth = 3; c.beginPath(); c.moveTo(w / 2, 9); c.lineTo(w / 2, h - 3); c.stroke();
    c.fillStyle = "#ffd84a"; c.beginPath(); c.moveTo(w / 2, 0); c.lineTo(w - 1, 11); c.lineTo(1, 11); c.closePath(); c.fill();
    c.fillStyle = "#d8553f"; c.fillRect(1, h - 10, 3, 9); c.fillRect(w - 4, h - 10, 3, 9);
  }
  function drawBolt(c, w, h) {
    var g = c.createRadialGradient(w * 0.62, h / 2, 1, w * 0.62, h / 2, w * 0.5);
    g.addColorStop(0, "rgba(255,255,230,1)"); g.addColorStop(0.35, "rgba(255,220,90,0.95)"); g.addColorStop(1, "rgba(255,150,30,0)");
    c.fillStyle = g; c.beginPath(); c.ellipse(w / 2, h / 2, w / 2, h / 2, 0, 0, Math.PI * 2); c.fill();
  }
  /* v5.7.7: bird poo — thick and white with a dark outline so it reads on any sky */
  function drawPoo(c, w, h) {
    c.fillStyle = "#1a1a22"; c.beginPath(); c.moveTo(w / 2, 1); c.quadraticCurveTo(w - 1, h * 0.55, w / 2, h - 1); c.quadraticCurveTo(1, h * 0.55, w / 2, 1); c.fill();
    c.fillStyle = "#f7f7ee"; c.beginPath(); c.moveTo(w / 2, 4); c.quadraticCurveTo(w - 4, h * 0.56, w / 2, h - 4); c.quadraticCurveTo(4, h * 0.56, w / 2, 4); c.fill();
    c.fillStyle = "#b9b9a8"; c.beginPath(); c.arc(w * 0.42, h * 0.66, w * 0.14, 0, Math.PI * 2); c.fill();
    c.fillStyle = "#ffffff"; c.beginPath(); c.arc(w * 0.6, h * 0.48, w * 0.09, 0, Math.PI * 2); c.fill();
  }
  function drawSplat(c, w, h) {
    var cx = w / 2, cy = h / 2, i, a, r;
    c.fillStyle = "#1a1a22"; c.beginPath();
    for (i = 0; i <= 16; i++) { a = i / 16 * Math.PI * 2; r = (i % 2 ? 0.28 : 0.46) * w; c[i ? "lineTo" : "moveTo"](cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.8); }
    c.fill();
    c.fillStyle = "#f7f7ee"; c.beginPath();
    for (i = 0; i <= 16; i++) { a = i / 16 * Math.PI * 2; r = (i % 2 ? 0.23 : 0.41) * w; c[i ? "lineTo" : "moveTo"](cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.8); }
    c.fill();
    c.fillStyle = "#c8c8b6"; c.beginPath(); c.arc(cx - w * 0.08, cy + h * 0.06, w * 0.1, 0, Math.PI * 2); c.fill();
  }
  function drawFeather(c, w, h) {
    /* v5.7.7: a light outline so a dark feather shows against a dark sky */
    c.fillStyle = "#f2ecff"; c.beginPath(); c.moveTo(w / 2, 0);
    c.quadraticCurveTo(w, h * 0.45, w / 2, h - 1); c.quadraticCurveTo(0, h * 0.45, w / 2, 0); c.fill();
    c.fillStyle = "#2a2238"; c.beginPath(); c.moveTo(w / 2, 3);
    c.quadraticCurveTo(w - 3, h * 0.45, w / 2, h - 4); c.quadraticCurveTo(3, h * 0.45, w / 2, 3); c.fill();
    c.strokeStyle = "#c8c0e8"; c.lineWidth = 1.5; c.beginPath(); c.moveTo(w / 2, 3); c.lineTo(w / 2, h); c.stroke();
  }
  function drawEagle(up) {
    return function (c, w, h) {
      var cx = w / 2;
      /* wings */
      c.fillStyle = "#4a321c"; c.strokeStyle = "#d8a73a"; c.lineWidth = 1.5;
      [-1, 1].forEach(function (sd) {
        c.beginPath(); c.moveTo(cx + sd * 8, 24);
        if (up) { c.lineTo(cx + sd * 30, 4); c.lineTo(cx + sd * 43, 2); c.lineTo(cx + sd * 38, 12); c.lineTo(cx + sd * 42, 16); c.lineTo(cx + sd * 34, 22); c.lineTo(cx + sd * 36, 28); c.lineTo(cx + sd * 12, 36); }
        else { c.lineTo(cx + sd * 30, 22); c.lineTo(cx + sd * 43, 34); c.lineTo(cx + sd * 34, 36); c.lineTo(cx + sd * 38, 44); c.lineTo(cx + sd * 28, 42); c.lineTo(cx + sd * 26, 48); c.lineTo(cx + sd * 12, 38); }
        c.closePath(); c.fill(); c.stroke();
      });
      /* tail, body, head */
      c.fillStyle = "#e8e2d0"; c.beginPath(); c.moveTo(cx - 8, 44); c.lineTo(cx + 8, 44); c.lineTo(cx + 11, 54); c.lineTo(cx - 11, 54); c.closePath(); c.fill();
      c.fillStyle = "#6a4a2a"; c.beginPath(); c.ellipse(cx, 32, 11, 16, 0, 0, Math.PI * 2); c.fill();
      c.fillStyle = "#f2efe6"; c.beginPath(); c.arc(cx, 15, 8.5, 0, Math.PI * 2); c.fill();
      c.fillStyle = "#f0b030"; c.beginPath(); c.moveTo(cx - 3.5, 17); c.lineTo(cx + 3.5, 17); c.lineTo(cx, 25); c.closePath(); c.fill();
      c.fillStyle = "#1a1208"; c.beginPath(); c.arc(cx - 3.5, 13, 1.6, 0, Math.PI * 2); c.arc(cx + 3.5, 13, 1.6, 0, Math.PI * 2); c.fill();
      /* talons, gripping the letter below */
      c.strokeStyle = "#f0b030"; c.lineWidth = 3;
      c.beginPath(); c.moveTo(cx - 5, 44); c.lineTo(cx - 8, h - 2); c.moveTo(cx + 5, 44); c.lineTo(cx + 8, h - 2); c.stroke();
    };
  }
  function drawCloud(c, w, h) {
    var puffs = [[0.22, 0.6, 0.2], [0.4, 0.42, 0.26], [0.62, 0.45, 0.24], [0.8, 0.62, 0.18], [0.5, 0.68, 0.26]];
    c.fillStyle = "#c8d0e0"; puffs.forEach(function (q) { c.beginPath(); c.arc(q[0] * w, q[1] * h, q[2] * w * 0.5 + 3, 0, Math.PI * 2); c.fill(); });
    c.fillStyle = "#5e6878"; puffs.forEach(function (q) { c.beginPath(); c.arc(q[0] * w, q[1] * h, q[2] * w * 0.5, 0, Math.PI * 2); c.fill(); });
    c.fillStyle = "rgba(255,255,255,0.18)"; c.beginPath(); c.arc(0.4 * w, 0.36 * h, 0.1 * w, 0, Math.PI * 2); c.fill();
  }
  function drawShield(c, w, h) {
    var r = w / 2 - 2;
    c.fillStyle = "#b8742e"; c.beginPath(); c.arc(w / 2, h / 2, r, 0, Math.PI * 2); c.fill();
    c.fillStyle = "#f3e1a8"; c.beginPath(); c.arc(w / 2, h / 2, r - 6, 0, Math.PI * 2); c.fill();
    c.strokeStyle = "#ffd84a"; c.lineWidth = 3; c.beginPath(); c.arc(w / 2, h / 2, r, 0, Math.PI * 2); c.stroke();
  }
  function rockShape(seed) {
    var pts = [], n = 11, i, s = seed * 9301 + 49297;
    for (i = 0; i < n; i++) { s = (s * 9301 + 49297) % 233280; pts.push(0.74 + (s / 233280) * 0.26); }
    return pts;
  }
  function drawRock(seed, lettered) {
    return function (c, w, h) {
      var pts = rockShape(seed), n = pts.length, i, a, r = w * 0.46, cx = w / 2, cy = h / 2;
      c.beginPath();
      for (i = 0; i < n; i++) { a = i / n * Math.PI * 2; c[i ? "lineTo" : "moveTo"](cx + Math.cos(a) * r * pts[i], cy + Math.sin(a) * r * pts[i]); }
      c.closePath();
      var g = c.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r);
      if (lettered) { g.addColorStop(0, "#8a7a5a"); g.addColorStop(1, "#3e3424"); }
      else { g.addColorStop(0, "#8c8a88"); g.addColorStop(1, "#3a3836"); }
      c.fillStyle = g; c.fill();
      c.lineWidth = lettered ? 4 : 2; c.strokeStyle = lettered ? "#ffd84a" : "#1e1c1a"; c.stroke();
      c.fillStyle = "rgba(0,0,0,0.25)";
      [[0.3, -0.2, 0.14], [-0.35, 0.25, 0.1], [0.1, 0.4, 0.08]].forEach(function (k) { c.beginPath(); c.arc(cx + k[0] * r, cy + k[1] * r, k[2] * r, 0, Math.PI * 2); c.fill(); });
    };
  }
  /* v5.8.4: a dark-elf saucer (Asteroids' flying saucer) */
  function drawSaucer(c, w, h) {
    c.fillStyle = "rgba(160,255,190,0.18)"; c.beginPath(); c.ellipse(w / 2, h * 0.62, w * 0.5, h * 0.36, 0, 0, Math.PI * 2); c.fill();
    c.fillStyle = "#9ad8ff"; c.beginPath(); c.ellipse(w / 2, h * 0.42, w * 0.2, h * 0.3, 0, Math.PI, 0); c.fill();
    c.fillStyle = "#4a3a6a"; c.beginPath(); c.ellipse(w / 2, h * 0.58, w * 0.46, h * 0.2, 0, 0, Math.PI * 2); c.fill();
    c.strokeStyle = "#c8b8f0"; c.lineWidth = 2; c.stroke();
    c.fillStyle = "#9affb0";
    for (var i = 0; i < 5; i++) { c.beginPath(); c.arc(w * (0.22 + i * 0.14), h * 0.6, 2.2, 0, Math.PI * 2); c.fill(); }
  }
  function drawShip(c, w, h) {
    var g = c.createRadialGradient(w / 2, h * 0.58, 2, w / 2, h * 0.58, w * 0.5);
    g.addColorStop(0, "rgba(255,230,120,0.55)"); g.addColorStop(1, "rgba(255,200,60,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    c.fillStyle = "#f0c040"; c.beginPath(); c.moveTo(w / 2, 2); c.lineTo(w - 6, h - 6); c.lineTo(w / 2, h - 16); c.lineTo(6, h - 6); c.closePath(); c.fill();
    c.strokeStyle = "#7a4a10"; c.lineWidth = 2.5; c.stroke();
    c.fillStyle = "#8ad8ff"; c.beginPath(); c.ellipse(w / 2, h * 0.46, 5, 9, 0, 0, Math.PI * 2); c.fill();
  }
  function drawChariot(c, w, h) {
    var g = c.createRadialGradient(w * 0.34, h * 0.36, 3, w * 0.34, h * 0.36, 34);
    g.addColorStop(0, "rgba(255,250,200,1)"); g.addColorStop(0.5, "rgba(255,210,70,0.9)"); g.addColorStop(1, "rgba(255,150,30,0)");
    c.fillStyle = g; c.beginPath(); c.arc(w * 0.34, h * 0.36, 34, 0, Math.PI * 2); c.fill();
    c.fillStyle = "#c8902a"; c.beginPath(); c.moveTo(14, h * 0.5); c.lineTo(w - 26, h * 0.5); c.quadraticCurveTo(w - 10, h * 0.5, w - 14, h * 0.74); c.lineTo(20, h * 0.74); c.closePath(); c.fill();
    c.strokeStyle = "#6a3e0c"; c.lineWidth = 2; c.stroke();
    c.strokeStyle = "#ffe07a"; c.lineWidth = 4; c.beginPath(); c.moveTo(w - 16, h * 0.56); c.lineTo(w - 2, h * 0.44); c.stroke();
    c.fillStyle = "#6a3e0c"; c.beginPath(); c.arc(w * 0.42, h * 0.8, 11, 0, Math.PI * 2); c.fill();
    c.strokeStyle = "#ffd84a"; c.lineWidth = 3; c.beginPath(); c.arc(w * 0.42, h * 0.8, 11, 0, Math.PI * 2); c.stroke();
    c.beginPath(); c.moveTo(w * 0.42 - 11, h * 0.8); c.lineTo(w * 0.42 + 11, h * 0.8); c.moveTo(w * 0.42, h * 0.8 - 11); c.lineTo(w * 0.42, h * 0.8 + 11); c.stroke();
  }
  /* v5.7.9: the sun chariot with two golden horses pulling it, facing right. The car sits in the left half
     (its centre at x = TEAM_CAR), the horses in the right; frame 0 and 1 are the two strides of a gallop. */
  var TEAM_W = 200, TEAM_H = 80, TEAM_CAR = 45;
  function drawHorse(c, x, y, frame, body, shade) {
    var ln = function (pts, w, col) { c.strokeStyle = col; c.lineWidth = w; c.lineCap = "round"; c.lineJoin = "round"; c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); c.stroke(); };
    var legs = frame ? [[[x + 13, y + 6], [x + 20, y + 14], [x + 14, y + 23]], [[x + 9, y + 6], [x + 12, y + 16], [x + 6, y + 23]], [[x - 12, y + 6], [x - 6, y + 15], [x - 10, y + 23]], [[x - 16, y + 6], [x - 14, y + 16], [x - 18, y + 23]]]
                     : [[[x + 13, y + 6], [x + 24, y + 12], [x + 32, y + 18]], [[x + 9, y + 6], [x + 18, y + 14], [x + 24, y + 21]], [[x - 12, y + 6], [x - 22, y + 13], [x - 30, y + 19]], [[x - 16, y + 6], [x - 26, y + 12], [x - 34, y + 16]]];
    legs.forEach(function (L) { ln(L, 5.5, "#5a3c12"); ln(L, 3.4, shade); });
    /* tail: a golden flame */
    ln([[x - 20, y - 4], [x - 30, y - 6], [x - 38, y + 2]], 6, "#5a3c12"); ln([[x - 20, y - 4], [x - 30, y - 6], [x - 38, y + 2]], 4, "#ffcf4a");
    /* body, neck, head */
    c.fillStyle = body; c.strokeStyle = "#5a3c12"; c.lineWidth = 1.6;
    c.beginPath(); c.ellipse(x, y, 22, 10.5, 0, 0, Math.PI * 2); c.fill(); c.stroke();
    c.beginPath(); c.moveTo(x + 12, y - 6); c.lineTo(x + 22, y - 20); c.lineTo(x + 30, y - 17); c.lineTo(x + 21, y + 1); c.closePath(); c.fill(); c.stroke();
    c.save(); c.translate(x + 32, y - 17); c.rotate(0.55); c.beginPath(); c.ellipse(0, 0, 9.5, 5, 0, 0, Math.PI * 2); c.fill(); c.stroke(); c.restore();
    c.beginPath(); c.moveTo(x + 24, y - 21); c.lineTo(x + 26, y - 28); c.lineTo(x + 29, y - 20); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = "#2a1a08"; c.beginPath(); c.arc(x + 31, y - 19, 1.4, 0, Math.PI * 2); c.fill();
    /* mane */
    ln([[x + 12, y - 8], [x + 17, y - 16], [x + 23, y - 22]], 4.5, "#ffcf4a");
  }
  function drawTeam(frame) {
    return function (c, w, h) {
      /* the traces from the car to the horses' chests */
      c.strokeStyle = "#7a4a10"; c.lineWidth = 2.5;
      c.beginPath(); c.moveTo(92, 50); c.lineTo(148, 42); c.moveTo(92, 54); c.lineTo(136, 54); c.stroke();
      drawHorse(c, 150, 38, frame ? 0 : 1, "#e2d4ae", "#cdbb8c");   /* the far horse, a stride apart */
      c.save(); c.translate(0, 6); drawChariot(c, 100, 72); c.restore();
      drawHorse(c, 136, 50, frame, "#f7eed6", "#e6d8b2");
    };
  }
  function drawOrb(c, w, h) {
    var g = c.createRadialGradient(w * 0.42, h * 0.38, 2, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,255,0.95)"); g.addColorStop(0.45, "rgba(170,210,255,0.75)"); g.addColorStop(0.85, "rgba(80,120,220,0.55)"); g.addColorStop(1, "rgba(60,90,200,0)");
    c.fillStyle = g; c.beginPath(); c.arc(w / 2, h / 2, w / 2, 0, Math.PI * 2); c.fill();
    c.strokeStyle = "rgba(255,230,140,0.9)"; c.lineWidth = 2.5; c.beginPath(); c.arc(w / 2, h / 2, w / 2 - 6, 0, Math.PI * 2); c.stroke();
  }
  function drawStone(c, w, h) {
    c.fillStyle = "rgba(0,0,0,0.3)"; c.beginPath(); c.ellipse(w / 2, h - 6, w * 0.42, 6, 0, 0, Math.PI * 2); c.fill();
    c.fillStyle = "#77736c"; c.beginPath(); c.moveTo(6, h - 8); c.lineTo(8, 22); c.quadraticCurveTo(w / 2, -6, w - 8, 22); c.lineTo(w - 6, h - 8); c.closePath(); c.fill();
    c.strokeStyle = "#35322e"; c.lineWidth = 3; c.stroke();
    c.strokeStyle = "rgba(255,255,255,0.18)"; c.lineWidth = 2; c.beginPath(); c.moveTo(14, h - 14); c.lineTo(14, 26); c.stroke();
  }
  function drawHills(color, amp, seed) {
    return function (c, w, h) {
      c.fillStyle = hex(color); c.beginPath(); c.moveTo(0, h);
      for (var x = 0; x <= w; x += 4) {
        var t = x / w * Math.PI * 2;
        var y = h * 0.45 - Math.sin(t * 2 + seed) * amp * 0.5 - Math.sin(t * 5 + seed * 2) * amp * 0.25 - Math.sin(t * 9 + seed * 3) * amp * 0.12;
        c.lineTo(x, y);
      }
      c.lineTo(w, h); c.closePath(); c.fill();
    };
  }
  /* ── v5.10: Scylla and Charybdis art (the Odyssey sheet's palette: Aegean blue, sea-foam, terracotta,
     ochre, black glaze, bone white). Every texture that tiles is drawn three times, wrapped. ── */
  var ST = { blue: "#1e5f8c", deep: "#123f60", foam: "#9fd3d6", bone: "#efe6d2", terra: "#d9772b", ochre: "#e8b04a", glaze: "#140c0a", wine: "#3a0f2a",
    green: "#3f8f7a", greenDk: "#1b4a40", greenLt: "#7cc4a8" };
  var SHIP_W = 76, SHIP_H = 124;
  function drawStraitWater(c, w, h) {
    var g = c.createLinearGradient(0, 0, w, 0), i, k, x, y;
    g.addColorStop(0, "#17527a"); g.addColorStop(0.5, ST.blue); g.addColorStop(1, "#17527a");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    var seed = 11;
    function r() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    /* long wave crests, then foam flecks; each drawn at y-h, y and y+h so the tile wraps */
    for (i = 0; i < 26; i++) {
      x = r() * w; y = r() * h; var len = 26 + r() * 46, col = i % 3 ? "rgba(70,140,190,0.55)" : "rgba(159,211,214,0.30)";
      for (k = -1; k <= 1; k++) for (var j = -1; j <= 1; j++) {
        c.strokeStyle = col; c.lineWidth = i % 3 ? 2.5 : 2; c.beginPath();
        c.moveTo(x - len / 2 + j * w, y + k * h); c.quadraticCurveTo(x + j * w, y - 6 + k * h, x + len / 2 + j * w, y + k * h); c.stroke();
      }
    }
    for (i = 0; i < 40; i++) {
      x = r() * w; y = r() * h;
      for (k = -1; k <= 1; k++) for (var j2 = -1; j2 <= 1; j2++) { c.fillStyle = "rgba(239,230,210," + (0.12 + r() * 0.2).toFixed(2) + ")"; c.beginPath(); c.arc(x + j2 * w, y + k * h, 1 + r() * 1.6, 0, Math.PI * 2); c.fill(); }
    }
  }
  /* the cliffs: Scylla's high cliff on the left (its sea edge on the right of the texture), the low rocks under
     Charybdis's fig tree on the right (flip = true puts the sea edge on the left) */
  function drawStraitCliff(flip, high) {
    return function (c, w, h) {
      function edge(y) { return w * (high ? 0.8 : 0.62) + Math.sin(y / h * Math.PI * 2 * 3) * w * 0.07 + Math.sin(y / h * Math.PI * 2 * 7 + 1) * w * 0.04; }
      c.save();
      if (flip) { c.translate(w, 0); c.scale(-1, 1); }
      var g = c.createLinearGradient(0, 0, w, 0);
      if (high) { g.addColorStop(0, "#1a100c"); g.addColorStop(0.6, "#3a2418"); g.addColorStop(1, "#6a3a22"); }
      else { g.addColorStop(0, "#2a2a26"); g.addColorStop(1, "#5a5448"); }
      c.fillStyle = g; c.beginPath(); c.moveTo(0, 0);
      var y;
      for (y = 0; y <= h; y += 4) c.lineTo(edge(y), y);
      c.lineTo(0, h); c.closePath(); c.fill();
      /* strata and cracks in terracotta and black glaze */
      for (var i = 0; i < 9; i++) {
        var yy = (i + 0.5) * h / 9;
        c.strokeStyle = high ? (i % 2 ? "rgba(217,119,43,0.35)" : "rgba(20,12,10,0.6)") : "rgba(20,12,10,0.4)"; c.lineWidth = high ? 3 : 2;
        c.beginPath(); c.moveTo(4, yy); c.quadraticCurveTo(edge(yy) * 0.5, yy + (i % 2 ? 10 : -10), edge(yy) - 6, yy + 4); c.stroke();
      }
      /* foam where the sea breaks on the rock */
      c.strokeStyle = "rgba(159,211,214,0.85)"; c.lineWidth = 4; c.beginPath();
      for (y = 0; y <= h; y += 4) c[y ? "lineTo" : "moveTo"](edge(y) + 3, y);
      c.stroke();
      c.strokeStyle = "rgba(239,230,210,0.55)"; c.lineWidth = 2; c.setLineDash([6, 9]); c.beginPath();
      for (y = 0; y <= h; y += 4) c[y ? "lineTo" : "moveTo"](edge(y) + 9, y);
      c.stroke(); c.setLineDash([]);
      c.restore();
    };
  }
  /* Charybdis: a spiral of dark water with foam arms; the second layer is foam only and turns faster */
  function drawWhirl(foamOnly) {
    return function (c, w, h) {
      var cx = w / 2, cy = h / 2, R = w / 2, k, r;
      if (!foamOnly) {
        var g = c.createRadialGradient(cx, cy, 2, cx, cy, R);
        g.addColorStop(0, "rgba(6,16,26,1)"); g.addColorStop(0.18, "rgba(10,30,48,1)"); g.addColorStop(0.55, "rgba(18,63,96,0.9)"); g.addColorStop(1, "rgba(30,95,140,0)");
        c.fillStyle = g; c.beginPath(); c.arc(cx, cy, R, 0, Math.PI * 2); c.fill();
      }
      var arms = foamOnly ? 3 : 5;
      for (k = 0; k < arms; k++) {
        var a0 = k / arms * Math.PI * 2 + (foamOnly ? 0.5 : 0);
        c.beginPath();
        for (r = R * 0.08; r <= R * 0.94; r += 2) {
          var a = a0 + Math.log(r / (R * 0.08)) * 1.9;
          c[r === R * 0.08 ? "moveTo" : "lineTo"](cx + Math.cos(a) * r, cy + Math.sin(a) * r);
        }
        c.strokeStyle = foamOnly ? "rgba(239,230,210,0.55)" : (k % 2 ? "rgba(159,211,214,0.55)" : "rgba(70,140,190,0.6)");
        c.lineWidth = foamOnly ? 3 : 5; c.lineCap = "round"; c.stroke();
      }
    };
  }
  function drawPillar(lettered) {
    return function (c, w, h) {
      var cx = w / 2, cy = h / 2, pts = rockShape(lettered ? 5 : 9), n = pts.length, i, a, r = w * 0.4;
      c.fillStyle = "rgba(159,211,214,0.45)"; c.beginPath(); c.arc(cx, cy + 2, w * 0.49, 0, Math.PI * 2); c.fill();
      c.beginPath();
      for (i = 0; i < n; i++) { a = i / n * Math.PI * 2; c[i ? "lineTo" : "moveTo"](cx + Math.cos(a) * r * pts[i], cy + Math.sin(a) * r * pts[i]); }
      c.closePath();
      var g = c.createRadialGradient(cx - r * 0.3, cy - r * 0.35, r * 0.1, cx, cy, r);
      g.addColorStop(0, lettered ? "#9a6440" : "#7a6a5a"); g.addColorStop(1, lettered ? "#3a2014" : "#2a2420");
      c.fillStyle = g; c.fill(); c.lineWidth = 2.5; c.strokeStyle = ST.glaze; c.stroke();
      if (lettered) {
        /* a bone-white plaque with a terracotta rim, like a painted pot, for the letter */
        c.fillStyle = ST.terra; c.beginPath(); c.arc(cx, cy, r * 0.74, 0, Math.PI * 2); c.fill();
        c.fillStyle = ST.bone; c.beginPath(); c.arc(cx, cy, r * 0.62, 0, Math.PI * 2); c.fill();
      } else {
        c.fillStyle = "rgba(0,0,0,0.25)";
        [[0.3, -0.2, 0.18], [-0.3, 0.25, 0.14]].forEach(function (q) { c.beginPath(); c.arc(cx + q[0] * r, cy + q[1] * r, q[2] * r, 0, Math.PI * 2); c.fill(); });
      }
    };
  }
  /* Odysseus's galley from above, bow up: black hull with a terracotta stripe, the painted eye on each side of the
     prow, a square bone-and-terracotta sail on its yard, and five oars a side (frame 0 forward, frame 1 back) */
  function drawGalley(frame) {
    return function (c, w, h) {
      var cx = w / 2, top = 8, bot = h - 6, hw = 13, i;
      c.lineCap = "round";
      /* oars */
      for (i = 0; i < 5; i++) {
        var oy = top + 34 + i * 14, sw = frame ? 7 : -7;
        [-1, 1].forEach(function (sd) {
          c.strokeStyle = "#5a3418"; c.lineWidth = 3;
          c.beginPath(); c.moveTo(cx + sd * (hw - 2), oy); c.lineTo(cx + sd * (w / 2 - 4), oy + sw); c.stroke();
          c.strokeStyle = ST.ochre; c.lineWidth = 4; c.beginPath(); c.moveTo(cx + sd * (w / 2 - 10), oy + sw * 0.8); c.lineTo(cx + sd * (w / 2 - 3), oy + sw); c.stroke();
        });
      }
      /* hull */
      c.fillStyle = ST.glaze; c.beginPath();
      c.moveTo(cx, top); c.quadraticCurveTo(cx + hw + 3, top + 26, cx + hw, top + 60); c.quadraticCurveTo(cx + hw - 1, bot - 18, cx + 5, bot - 4);
      c.lineTo(cx, bot); c.lineTo(cx - 5, bot - 4); c.quadraticCurveTo(cx - hw + 1, bot - 18, cx - hw, top + 60); c.quadraticCurveTo(cx - hw - 3, top + 26, cx, top); c.closePath(); c.fill();
      c.strokeStyle = ST.terra; c.lineWidth = 2; c.stroke();
      /* deck */
      c.fillStyle = "#8a5a32"; c.beginPath();
      c.moveTo(cx, top + 14); c.quadraticCurveTo(cx + hw - 3, top + 32, cx + hw - 4, top + 60); c.quadraticCurveTo(cx + hw - 5, bot - 22, cx, bot - 10);
      c.quadraticCurveTo(cx - hw + 5, bot - 22, cx - hw + 4, top + 60); c.quadraticCurveTo(cx - hw + 3, top + 32, cx, top + 14); c.closePath(); c.fill();
      c.strokeStyle = "rgba(20,12,10,0.45)"; c.lineWidth = 1;
      for (i = 0; i < 6; i++) { var by = top + 34 + i * 13; c.beginPath(); c.moveTo(cx - hw + 5, by); c.lineTo(cx + hw - 5, by); c.stroke(); }
      /* the crew at the benches */
      c.fillStyle = "#c98a52";
      for (i = 0; i < 5; i++) { c.beginPath(); c.arc(cx - 5, top + 40 + i * 14, 2.4, 0, Math.PI * 2); c.arc(cx + 5, top + 40 + i * 14, 2.4, 0, Math.PI * 2); c.fill(); }
      /* the painted eyes on the prow */
      [-1, 1].forEach(function (sd) {
        var ex = cx + sd * 7, ey = top + 17;
        c.fillStyle = ST.bone; c.beginPath(); c.ellipse(ex, ey, 3.2, 5.5, sd * 0.35, 0, Math.PI * 2); c.fill();
        c.fillStyle = "#b8321e"; c.beginPath(); c.arc(ex, ey, 2.2, 0, Math.PI * 2); c.fill();
        c.fillStyle = ST.glaze; c.beginPath(); c.arc(ex, ey, 1.2, 0, Math.PI * 2); c.fill();
      });
      /* the stern post curls back */
      c.strokeStyle = ST.terra; c.lineWidth = 3; c.beginPath(); c.arc(cx, bot - 8, 5, 0.2, Math.PI - 0.2); c.stroke();
      /* yard and the square sail, bellied forward */
      var sy = top + 50;
      c.fillStyle = ST.bone; c.beginPath(); c.moveTo(cx - 30, sy); c.quadraticCurveTo(cx, sy - 14, cx + 30, sy); c.lineTo(cx + 28, sy + 9); c.quadraticCurveTo(cx, sy - 3, cx - 28, sy + 9); c.closePath(); c.fill();
      c.fillStyle = ST.terra;
      [-18, -6, 6, 18].forEach(function (dx) { c.beginPath(); c.moveTo(cx + dx - 2.5, sy - 10 + Math.abs(dx) * 0.33); c.lineTo(cx + dx + 2.5, sy - 10 + Math.abs(dx) * 0.33); c.lineTo(cx + dx + 2.5, sy + 4 + Math.abs(dx) * 0.2); c.lineTo(cx + dx - 2.5, sy + 4 + Math.abs(dx) * 0.2); c.closePath(); c.fill(); });
      c.strokeStyle = "#5a3418"; c.lineWidth = 2.5; c.beginPath(); c.moveTo(cx - 32, sy + 1); c.quadraticCurveTo(cx, sy - 13, cx + 32, sy + 1); c.stroke();
      c.fillStyle = "#5a3418"; c.beginPath(); c.arc(cx, sy - 6, 3, 0, Math.PI * 2); c.fill();
    };
  }
  /* one of Scylla's heads from above, facing right: a long sea-green serpent's head with a fin crest */
  function drawScyllaHead(c, w, h) {
    var cy = h / 2;
    c.fillStyle = ST.greenDk; c.beginPath(); c.moveTo(4, cy - 9); c.lineTo(14, cy - 19); c.lineTo(22, cy - 10); c.lineTo(30, cy - 20); c.lineTo(36, cy - 9); c.lineTo(36, cy + 9); c.lineTo(30, cy + 20); c.lineTo(22, cy + 10); c.lineTo(14, cy + 19); c.lineTo(4, cy + 9); c.closePath(); c.fill();
    var g = c.createLinearGradient(0, cy - 14, 0, cy + 14);
    g.addColorStop(0, ST.greenLt); g.addColorStop(0.5, ST.green); g.addColorStop(1, "#2c6e5c");
    c.fillStyle = g; c.strokeStyle = ST.greenDk; c.lineWidth = 2;
    c.beginPath(); c.moveTo(2, cy - 11); c.quadraticCurveTo(30, cy - 17, w - 6, cy - 5); c.quadraticCurveTo(w, cy, w - 6, cy + 5); c.quadraticCurveTo(30, cy + 17, 2, cy + 11); c.closePath(); c.fill(); c.stroke();
    /* the mouth line and a few white teeth */
    c.strokeStyle = ST.greenDk; c.lineWidth = 1.5; c.beginPath(); c.moveTo(w - 6, cy); c.lineTo(w - 26, cy); c.stroke();
    c.fillStyle = ST.bone;
    [w - 10, w - 16, w - 22].forEach(function (x) { c.beginPath(); c.moveTo(x, cy - 1); c.lineTo(x - 2.5, cy - 4.5); c.lineTo(x - 5, cy - 1); c.fill(); c.beginPath(); c.moveTo(x, cy + 1); c.lineTo(x - 2.5, cy + 4.5); c.lineTo(x - 5, cy + 1); c.fill(); });
    /* eyes */
    [-1, 1].forEach(function (sd) {
      c.fillStyle = ST.ochre; c.beginPath(); c.ellipse(w * 0.52, cy + sd * 9, 4.5, 3.2, 0, 0, Math.PI * 2); c.fill();
      c.fillStyle = ST.glaze; c.beginPath(); c.ellipse(w * 0.53, cy + sd * 9, 1.4, 2.6, 0, 0, Math.PI * 2); c.fill();
    });
  }
  /* the fig tree on Charybdis's rock (Homer: "a great fig tree, in full leaf") */
  function drawFig(c, w, h) {
    var cx = w / 2, cy = h / 2;
    c.fillStyle = "rgba(0,0,0,0.3)"; c.beginPath(); c.arc(cx + 4, cy + 5, w * 0.42, 0, Math.PI * 2); c.fill();
    [[0, 0, 0.36, "#2f5a22"], [-0.18, -0.14, 0.22, "#4a7a2e"], [0.18, -0.1, 0.2, "#5e8f3a"], [0.08, 0.18, 0.22, "#4a7a2e"], [-0.16, 0.14, 0.18, "#5e8f3a"]].forEach(function (q) {
      c.fillStyle = q[3]; c.beginPath(); c.arc(cx + q[0] * w, cy + q[1] * h, q[2] * w, 0, Math.PI * 2); c.fill();
    });
    c.fillStyle = "#6a2a4a";
    [[-0.1, -0.05], [0.14, 0.06], [0.02, 0.2], [-0.2, 0.12], [0.2, -0.16]].forEach(function (q) { c.beginPath(); c.arc(cx + q[0] * w, cy + q[1] * h, 2.6, 0, Math.PI * 2); c.fill(); });
  }
  function ensureStraitArt(scene) {
    canvasTex(scene, "md-strait-water", 256, 256, drawStraitWater);
    canvasTex(scene, "md-strait-cliff", 128, 256, drawStraitCliff(false, true));
    canvasTex(scene, "md-strait-shore", 64, 256, drawStraitCliff(true, false));
    canvasTex(scene, "md-strait-whirl", 256, 256, drawWhirl(false));
    canvasTex(scene, "md-strait-foam", 256, 256, drawWhirl(true));
    canvasTex(scene, "md-strait-pillar", 56, 56, drawPillar(true));
    canvasTex(scene, "md-strait-rock", 56, 56, drawPillar(false));
    canvasTex(scene, "md-strait-ship-0", SHIP_W, SHIP_H, drawGalley(0));
    canvasTex(scene, "md-strait-ship-1", SHIP_W, SHIP_H, drawGalley(1));
    canvasTex(scene, "md-strait-head", 64, 44, drawScyllaHead);
    canvasTex(scene, "md-strait-fig", 64, 64, drawFig);
  }
  function ensureModeArt(scene, pal) {
    canvasTex(scene, "md-arrow", 12, 34, drawArrow);
    canvasTex(scene, "md-bolt", 34, 12, drawBolt);
    canvasTex(scene, "md-feather", 16, 32, drawFeather);
    canvasTex(scene, "md-poo", 22, 28, drawPoo);
    canvasTex(scene, "md-splat", 54, 44, drawSplat);
    canvasTex(scene, "md-shield", 42, 42, drawShield);
    canvasTex(scene, "md-cloud", 180, 80, drawCloud);
    canvasTex(scene, "md-eagle-0", 88, 62, drawEagle(true));
    canvasTex(scene, "md-eagle-1", 88, 62, drawEagle(false));
    for (var i = 0; i < 3; i++) canvasTex(scene, "md-rock-" + i, 100, 100, drawRock(i + 1, false));
    canvasTex(scene, "md-rock-l", 100, 100, drawRock(7, true));
    canvasTex(scene, "md-ship", 44, 52, drawShip);
    canvasTex(scene, "md-saucer", 64, 34, drawSaucer);
    canvasTex(scene, "md-chariot", 110, 72, drawChariot);
    canvasTex(scene, "md-team-0", TEAM_W, TEAM_H, drawTeam(0));
    canvasTex(scene, "md-team-1", TEAM_W, TEAM_H, drawTeam(1));
    canvasTex(scene, "md-orb", 70, 70, drawOrb);
    canvasTex(scene, "md-stone", 58, 72, drawStone);
    if (pal && scene.realm) {
      canvasTex(scene, "md-hills-far-" + scene.realm.id, 512, 200, drawHills(mix(pal.wall, pal.void, 0.35), 90, 1));
      canvasTex(scene, "md-hills-near-" + scene.realm.id, 512, 150, drawHills(mix(pal.wall, pal.stroke, 0.25), 60, 4));
    }
    if (window.SolRealms && SolRealms._ensureArt) { try { SolRealms._ensureArt(scene); } catch (e) {} }
  }

  function install(NightScene, K) {
    var Input = K.Input;

    class ModeScene extends NightScene {
      constructor() { super("mode"); }

      init(data) {
        super.init(data);   /* family, strand, level, question pack, realm and perks (realms.js wraps init) */
        this.mode = modeFor(this.night) || MODES.raid;
        /* v5.7.9: each mode comes round once a realm; every time it comes round it adds something (MODES[id].news) */
        this.tier = clamp(Math.floor(((this.night || 1) - 1) / 10), 0, 9);
      }

      /* ── lifecycle ── */
      create() {
        var self = this;
        K.setPlayScene(this);
        if (this.time) this.time.timeScale = 1;
        K.installSafeCamFlash(this);
        this._tabHidden = !!(typeof document !== "undefined" && document.hidden);
        K.hideTrapIntro();
        K.hideTut();
        try {
          var ov = document.getElementById("overlay"); if (ov) ov.classList.add("hidden");
          var fl = document.getElementById("flash"); if (fl) fl.className = "";
        } catch (eD) {}
        try { K.hideReading(); } catch (eR) {}

        this.ended = false; this._finishing = false; this._between = false;
        this._nightStarted = false; this._readPending = false; this.readOpen = false;
        this.tutDone = true; this.tutOpen = false; this.codexOpen = false; this.trapOpen = false;
        this.score = 0; this.scoreJuice = 0; this.scoreToastMs = 0; this.scoreToastMsg = "";
        this.oneUpAwarded = false; this.oneUpFlash = 0;
        this.spareLives = (this.perks && this.perks.blessing) ? 1 : 0;
        this._guardUsed = false; this._hudClaimId = null;
        this.strikes = 0; this.round = 1; this.kills = 0;
        this.usedClaims = K.loadUsedClaims(this.family, this.strand);
        this.adapt = K.loadAdapt(this.family);
        this.nightPacks = []; this.nightWrong = 0; this.nightCoins = 0; this.claimWrong = 0; this.extracted = [];
        this.iframeMs = 0; this.bigTagMs = 0; this.lastStrikeReason = ""; this._lastHitLabel = "";
        this.janitors = []; this.slips = []; this.shutters = [];
        this._beamHelpDone = false; this.helpOpen = false;

        this.pal = (this.realm && this.realm.pal) || { wall: 0x2f3b2c, stroke: 0x5a7050, lip: 0x8aa47a, floorA: 0xdcd4b4, floorB: 0xb9b08e, accent: 0xf5d76e, wash: 0x6aa84a, void: 0x07100a };
        this.W = this.scale.width; this.H = this.scale.height;
        ensureModeArt(this, this.pal);
        this.cameras.main.setBackgroundColor(hex(this.pal.void));

        this.keys = this.input.keyboard.addKeys("LEFT,RIGHT,UP,DOWN,W,A,S,D,SPACE,SHIFT");
        this.ptr = { down: false, x: 0, y: 0, t: -9999 };
        this.input.on("pointerdown", function (p) { self.ptr.down = true; self.ptr.right = !!(p.rightButtonDown && p.rightButtonDown()); self.ptr.x = p.x; self.ptr.y = p.y; self.ptr.t = self.time.now; });
        this.input.on("pointermove", function (p) { self.ptr.x = p.x; self.ptr.y = p.y; if (p.isDown || self.ptr.down) self.ptr.t = self.time.now; });
        this.input.on("pointerup", function () { self.ptr.down = false; self.ptr.right = false; });
        this.input.on("pointerupoutside", function () { self.ptr.down = false; self.ptr.right = false; });
        try { if (this.input.mouse) this.input.mouse.disableContextMenu(); } catch (eM) {}   /* the right button is a game button here */

        this.sparks = this.add.particles(0, 0, "spark", { speed: { min: 60, max: 260 }, lifespan: 460, scale: { start: 0.9, end: 0 }, emitting: false }).setDepth(30);
        this.dust = this.add.particles(0, 0, this.textures.exists("rf-dot") ? "rf-dot" : "spark", { speed: { min: 40, max: 200 }, lifespan: 560, scale: { start: 0.8, end: 0 }, alpha: { start: 0.9, end: 0 }, emitting: false }).setDepth(29);
        this.fxG = this.add.graphics().setDepth(19);
        this.bigTag = this.add.text(this.W / 2, this.H * 0.36, "", { fontFamily: "Trebuchet MS", fontSize: 34, color: "#ffe08a", fontStyle: "bold", stroke: "#1a1008", strokeThickness: 7, align: "center" }).setOrigin(0.5).setDepth(60).setVisible(false);

        /* the side-panel controls: FIRE, and PULL for the rock beam */
        try {
          var st = document.getElementById("stage");
          if (st) { st.classList.add("mode-play"); st.classList.add("mode-" + this.mode.id); }
          var act = document.getElementById("btn-action"), sh = document.getElementById("btn-shutter");
          if (act) { if (act.dataset.mazeLabel == null) act.dataset.mazeLabel = act.textContent; act.textContent = this.mode.act || "FIRE"; }
          if (sh) { if (sh.dataset.mazeLabel == null) sh.dataset.mazeLabel = sh.textContent; sh.textContent = "PULL"; }
        } catch (eS) {}
        this._onResize = function (size) { self.relayout(size && size.width || self.scale.width, size && size.height || self.scale.height); };
        this.scale.on("resize", this._onResize);
        var cleanup = function () { self.cleanupMode(); };
        this.events.once("shutdown", cleanup);
        this.events.once("destroy", cleanup);

        this["setup_" + this.mode.id]();
        this.nextClaim();   /* picks the question; calls placeSlips(), which builds this mode's letter targets */
        this.paintHud();
      }

      cleanupMode() {
        try { this.scale.off("resize", this._onResize); } catch (e) {}
        try {
          var st = document.getElementById("stage");
          if (st) Object.keys(MODES).forEach(function (k) { st.classList.remove("mode-" + k); });
          if (st) st.classList.remove("mode-play");
          var act = document.getElementById("btn-action"), sh = document.getElementById("btn-shutter");
          if (act && act.dataset.mazeLabel != null) act.textContent = act.dataset.mazeLabel;
          if (sh && sh.dataset.mazeLabel != null) sh.textContent = sh.dataset.mazeLabel;
          var card = document.getElementById("mode-card"); if (card) card.classList.add("hidden");
        } catch (e2) {}
        Input.shutterHeld = false;
        this.hideBeamHelp();
      }

      placeSlips() {
        this.slips = [];
        var fn = this["answers_" + this.mode.id];
        if (fn) fn.call(this);
      }

      choiceLetters() {
        var c = this.claim, out = [];
        ((c && c.choices) || []).forEach(function (ch) { if (ch && ch.letter && out.indexOf(ch.letter) === -1) out.push(String(ch.letter)); });
        (this.need || []).forEach(function (L) { if (out.indexOf(L) === -1) out.push(L); });
        return out;
      }

      update(t, dt) {
        if (this._tabHidden && typeof document !== "undefined" && !document.hidden) {
          this._tabHidden = false;
          try { if (this.scene && this.scene.isPaused && this.scene.isPaused()) this.scene.resume(); } catch (e) {}
        }
        if (this._tabHidden) return;
        if (!(dt > 0)) return;
        if (dt > 50) dt = 50;
        if (this.readOpen && !K.readingIsVisible()) this.readOpen = false;
        if (this._readPending && this.claim && !this.ended) {
          this._readPending = false;
          this.openReading(this._readReason || "start");
        }
        if (!this.readOpen && !this.ended && this.mode.id === "rocks" && !this._beamHelpDone) this.showBeamHelp();
        if (this.readOpen || this.ended || this.helpOpen) { Input.actEdge = false; Input.shutterEdge = false; return; }
        var inp = this.readInput();
        this.tickTimers(dt);
        if (!this._finishing) {
          try { this["tick_" + this.mode.id](dt / 1000, inp, dt); }
          catch (err) { if (window.console) console.error("[modes] tick failed", err); }
        }
        Input.actEdge = false;
        Input.shutterEdge = false;
      }

      readInput() {
        var k = this.keys;
        var left = k.LEFT.isDown || k.A.isDown || Input.ax < 0, right = k.RIGHT.isDown || k.D.isDown || Input.ax > 0;
        var up = k.UP.isDown || k.W.isDown || Input.ay < 0, down = k.DOWN.isDown || k.S.isDown || Input.ay > 0;
        var locked = Date.now() < (this.tutLockUntil || 0);
        var ptr = this.ptr.down ? this.ptr : null;
        var rightBeam = this.mode.id === "rocks" && !!ptr && !!ptr.right;   /* Rune Rocks: the right mouse button is the beam */
        return {
          ax: (right ? 1 : 0) - (left ? 1 : 0),
          ay: (down ? 1 : 0) - (up ? 1 : 0),
          fire: !locked && (k.SPACE.isDown || Input.act || (!!ptr && !rightBeam)),
          pull: k.SHIFT.isDown || !!Input.shutterHeld || (this.mode.id === "rocks" && down) || rightBeam,
          ptr: locked ? null : ptr
        };
      }

      tickTimers(dt) {
        if (this.iframeMs > 0) this.iframeMs = Math.max(0, this.iframeMs - dt);
        if (this.scoreToastMs > 0) {
          this.scoreToastMs = Math.max(0, this.scoreToastMs - dt);
          if (this.scoreToastMs <= 0) this.paintCarryFlag();
        }
        if (this.bigTagMs > 0) {
          this.bigTagMs -= dt;
          this.bigTag.setAlpha(clamp(this.bigTagMs / 400, 0, 1));
          if (this.bigTagMs <= 0) this.bigTag.setVisible(false);
        }
      }

      relayout(w, h) {
        var oldW = this.W || w, oldH = this.H || h;
        this.W = w; this.H = h;
        var fn = this["resize_" + this.mode.id];
        if (fn) { try { fn.call(this, oldW, oldH); } catch (e) {} }
      }

      /* ── shared rules ── */
      /* The student chose letter L (shot it, beamed it in). */
      answerPick(L, x, y) {
        if (this.ended || this._finishing || this._between) return "ignore";
        if ((this.need || []).indexOf(L) === -1) { this.answerWrong(L, "WRONG LETTER (" + L + ")", x, y); return "wrong"; }
        if (this.extracted.indexOf(L) === -1) this.extracted.push(L);
        this.burst(x, y, 0xffe066, 26);
        if (window.AfterHoursAudio) { try { AfterHoursAudio.extract(); } catch (e) {} }
        var self = this, done = this.need.every(function (n) { return self.extracted.indexOf(n) !== -1; });
        if (!done) {
          var more = this.need.length - this.extracted.length;
          this.showTag(L + " IS RIGHT · " + more + " MORE", "#9aefc0");
          this.toast("Letter " + L + " is right. This question needs " + more + " more letter" + (more === 1 ? "" : "s") + ".", 3200);
          this.paintHud();
          return "partial";
        }
        this.score += 1;
        K.adaptEvent(this, this.claimWrong ? "struggled" : "clean", this.claim);
        this.giveCoins(this.coinEconomy().answer, "Correct answer");
        K.pingTeacher(this, "playing");
        this.showTag("CORRECT!", "#9aefc0");
        snd("chime");
        var clr = this["clear_" + this.mode.id];
        if (clr) clr.call(this);
        if (this.score >= this.needExtracts) {
          this._finishing = true;
          this.paintHud();
          this.time.delayedCall(1100, function () { if (!self.ended) self.endRun(true); });
          return "done";
        }
        this.round += 1;
        this._between = true;
        this.time.delayedCall(900, function () { self._between = false; if (!self.ended && !self._finishing) self.nextClaim(); });
        return "done";
      }

      answerWrong(L, label, x, y) {
        if (label !== "YOU BLASTED THE RIGHT ANSWER") this.noteWrongLetter(L);
        this.claimWrong = (this.claimWrong || 0) + 1;
        this.nightWrong = (this.nightWrong || 0) + 1;
        K.adaptEvent(this, "wrong", this.claim);
        if (x != null) this.burst(x, y, 0xff6a4a, 16);
        this.loseLife("wrong", label || "WRONG LETTER");
      }

      /* A hit or a wrong letter. Hits respect the safety blink; wrong letters always count. */
      loseLife(reason, label) {
        if (this.ended || this._finishing) return false;
        var hurt = reason !== "wrong";
        if (hurt && this.iframeMs > 0) return false;
        if (hurt && this.perks && this.perks.guard && !this._guardUsed) {
          this._guardUsed = true;
          this.iframeMs = 1600;
          this.showTag("BLOCKED", "#9ad8ff");
          this.toast("Your castle guard blocked that hit! (once per level)", 2800);
          return false;
        }
        var spent = false;
        if ((this.spareLives || 0) > 0) { this.spareLives -= 1; spent = true; }
        else { this.strikes += 1; this.lastStrikeReason = hurt ? "hit" : "wrong"; this._lastHitLabel = label; }
        this.iframeMs = 1700 + ((this.perks && this.perks.hearth) ? 1000 : 0);
        var left = Math.max(0, this.needStrikes - this.strikes);
        this.showTag(spent ? label + " · 1UP SAVED YOU" : (left > 0 ? label + " · " + left + (left === 1 ? " LIFE" : " LIVES") + " LEFT" : label), "#ff9a7a");
        try { this.cameras.main.shake(200, 0.01); } catch (e) {}
        if (window.AfterHoursAudio) { try { if (hurt) AfterHoursAudio.catch(); else AfterHoursAudio.alarm(); } catch (e2) {} }
        this.paintHud();
        if (this.strikes >= this.needStrikes) {
          var self = this;
          this._finishing = true;
          this.time.delayedCall(800, function () { if (!self.ended) self.endRun(false); });
        }
        return true;
      }

      addKill(x, y, why) {
        this.kills += 1;
        this.scoreJuice = (this.scoreJuice || 0) + 120;
        if (this.kills % 12 === 0) this.awardBonusPoints(1500, why || "Twelve in a row");
        else if (this.checkOneUp) this.checkOneUp();
      }

      burst(x, y, color, n) {
        try { this.dust.particleTint = color; this.dust.emitParticleAt(x, y, n || 14); } catch (e) {}
        try { this.sparks.emitParticleAt(x, y, Math.ceil((n || 14) / 2)); } catch (e2) {}
      }
      showTag(text, color) {
        this.bigTag.setText(text).setColor(color || "#ffe08a").setPosition(this.W / 2, this.H * 0.36).setAlpha(1).setVisible(true);
        this.bigTagMs = 1500;
      }
      toast(msg, ms) {
        this.scoreToastMs = Math.max(this.scoreToastMs || 0, ms || 2600);
        this.scoreToastMsg = msg;
        this.paintCarryFlag();
      }
      letterText(x, y, L, size, color, stroke) {
        return this.add.text(x, y, L, { fontFamily: "Trebuchet MS", fontSize: size || 26, color: color || "#2a1604", fontStyle: "bold", stroke: stroke || "#fff6d8", strokeThickness: 4 }).setOrigin(0.5).setDepth(14);
      }
      blink(spr) {
        if (!spr) return;
        spr.setAlpha(this.iframeMs > 0 ? (Math.floor(this.iframeMs / 120) % 2 ? 0.35 : 1) : 1);
      }
      makeSol(x, y, face, scale) {
        this.player = this.physics.add.sprite(x, y, "kid").setDepth(20);
        try { this.applyCharPreset(); } catch (e) {}
        this.player.setScale(scale || 1.5);
        this.faceIdle(face || "down");
        return this.player;
      }
      faceIdle(dir) {
        this.playerFaceDir = dir;
        if (!this.player || !this.playerSheetKey) return;
        try {
          if (this.player.anims) this.player.anims.stop();
          this.player.setTexture(this.playerSheetKey, (({ down: 4, left: 5, right: 6, up: 7 })[dir] || 4) * 8);
        } catch (e) {}
      }
      drawSkyBg(stars, space) {
        if (this.bgG) this.bgG.destroy();
        var g = this.bgG = this.add.graphics().setDepth(0), W = this.W, H = this.H, pal = this.pal, i, bands = 32;
        var top = mix(pal.void, 0x000000, space ? 0.4 : 0.2), bot = space ? mix(pal.void, pal.stroke, 0.22) : mix(pal.wall, pal.wash || pal.stroke, 0.3);
        for (i = 0; i < bands; i++) {
          g.fillStyle(mix(top, bot, i / (bands - 1)), 1);
          g.fillRect(0, Math.floor(H * i / bands), W, Math.ceil(H / bands) + 1);
        }
        var n = stars == null ? 90 : stars;
        for (i = 0; i < n; i++) {
          g.fillStyle(i % 7 ? 0xffffff : (pal.accent || 0xffe08a), rnd(0.25, 0.85));
          g.fillCircle(rnd(0, W), rnd(0, H * 0.8), i % 9 ? 1.2 : 2.2);
        }
      }

      /* ── the HUD and the reading pop-up (maze versions, retold for the shooters) ── */
      paintHud() {
        super.paintHud();
        try {
          if (!this.claim) return;
          var sp = document.getElementById("score-pip");
          if (sp) sp.textContent = "Answers " + this.score + " / " + this.needExtracts;
          var rf = document.getElementById("round-flag");
          if (rf && rf.textContent.indexOf(this.mode.name) === -1) rf.textContent += " · " + this.mode.name;
          /* the realm pip: castle perks only (no maze creature, no Fenrir here) */
          var pip = document.getElementById("realm-pip");
          if (pip) {
            var n = (this.perkList || []).length, txt = n ? "★ " + n + " perk" + (n === 1 ? "" : "s") : "";
            if (pip.textContent !== txt) pip.textContent = txt;
            pip.title = (this.perkList || []).map(function (q) { return q.name + ": " + q.desc; }).join("\n");
            pip.classList.toggle("hidden", !txt);
            pip.classList.remove("boss");
          }
          var ev = document.getElementById("evidence");
          if (ev && this.need && this.need.length > 1) ev.textContent = this.extracted.length + " of " + this.need.length + " right letters found. This question needs both.";
        } catch (e) {}
      }
      paintCarryFlag() {
        var flag = document.getElementById("carry-flag");
        if (!flag || !this.mode) return;
        var toast = (this.scoreToastMs || 0) > 0 && this.scoreToastMsg;
        flag.textContent = toast ? this.scoreToastMsg : this.mode.tip;
        flag.className = "carry-flag" + (toast ? " prio-score" : "");
      }
      openReading(reason) {
        var m = this.mode, card = document.getElementById("mode-card");
        if (!card) {
          var rc = document.getElementById("read-card"), sc = document.getElementById("read-scroll");
          if (rc && sc) { card = document.createElement("div"); card.id = "mode-card"; card.className = "realm-card mode-card hidden"; rc.insertBefore(card, sc); }
        }
        if (card) {
          if (reason === "start") {
            card.innerHTML = '<p class="rk">Level ' + this.night + " · " + (m.level || "shooter level") + " · " + (this.realm ? this.realm.name : "") + "</p>" +
              "<h3>" + m.name + " <span>· " + m.kind + "</span></h3>" +
              "<p>" + m.how + "</p><p class=\"foe\"><b>Lives:</b> " + m.rules + "</p>" +
              "<p class=\"perks\"><b>Controls:</b> " + m.keys + "</p>" +
              (this.tier > 0 && m.news && m.news[this.tier] ? "<p class=\"new\"><b>New this time:</b> " + m.news[this.tier] + "</p>" : "");
            card.classList.remove("hidden");
            card.setAttribute("data-mode", m.id);
          } else card.classList.add("hidden");
        }
        var r = super.openReading(reason);
        try {
          var hint = document.getElementById("read-hint");
          if (hint) hint.textContent = (this.need && this.need.length > 1) ? m.hint2 : m.hint1;
        } catch (e) {}
        return r;
      }
      endRun(win) {
        if (this.ended) return;
        try { this.fxG.clear(); } catch (e0) {}
        super.endRun(win);
        try {
          var t = document.getElementById("win-title"), msg = document.getElementById("win-msg"), m = this.mode;
          if (win) {
            if (t && t.textContent === "Level cleared") t.textContent = m.name + " cleared";
            var nx = modeFor(this.night + 1);
            if (msg && this.night < 100) msg.textContent += " Next: " + (nx ? nx.name + " (" + nx.kind + ")." : ((this.night + 1) % 10 === 0 ? "Fenrir's boss maze." : "back to the maze."));
          } else if (msg) {
            msg.textContent = this.lossReason() + "In " + m.name + ", wrong letters and hits both cost a life. Retry this level — the campaign stays here.";
          }
        } catch (e) {}
      }

      /* what used the last life, in words (the label is the one the big tag showed) */
      lossReason() {
        var lab = this._lastHitLabel || "";
        if (lab === "YOU BLASTED THE RIGHT ANSWER") return "You blasted the rock with the right answer, and that used your last life. Pull the right letter in with the beam instead of shooting it. ";
        if (this.lastStrikeReason === "wrong") return "That wrong letter used your last life. " + this.wrongLetterNote();
        return lab ? "Last hit: " + lab.toLowerCase() + ". " : "";
      }

      /* ═══ 1. EAGLE SWOOP — galaga ══════════════════════════════════════════
         The eagles in the top row carry the letters in their talons, the way
         Galaga's boss ships carry a captured fighter. Rows of ravens fly in
         below them and shield them. Ravens and eagles peel off and dive; a
         diving eagle can stop and shine a beam down to catch Sol. An eagle
         takes two arrows; the second decides its letter.
         v5.8.2, Galaga's capture: the eagle whose beam catches a lone Sol
         carries a copy of him back to the formation (v5.8.3: no life yet; it
         costs a life only if he is still held when the question is answered). The next
         arrow that hits that eagle frees him (it doesn't hurt the eagle, so
         it never picks the eagle's letter), and he flies down to stand next
         to Sol: two Sols, two arrows at a time. With two Sols, a beam, a bird
         or poo takes one of them away instead of a life. */
      setup_raid() {
        this.drawSkyBg(110);
        this.raidGround();
        this.makeSol(this.W / 2, this.H - 62, "up");
        this.raid = { arrows: [], feathers: [], ravens: [], ravSlots: [], cd: 0, clock: 0, fcx: this.W / 2, breath: 1, swayAmp: 60, top: 112,
          diveCd: 4000, refillCd: 8000, huginn: null, huginnCd: rnd(12000, 18000), fired: 0, total: 1, capt: null, wing: null };
      }
      raidGround() {
        if (this.groundG) this.groundG.destroy();
        var g = this.groundG = this.add.graphics().setDepth(1), W = this.W, H = this.H;
        g.fillStyle(mix(this.pal.wall, 0x000000, 0.2), 1); g.fillRect(0, H - 28, W, 28);
        g.fillStyle(this.pal.stroke, 0.6); g.fillRect(0, H - 28, W, 3);
      }
      resize_raid(oldW, oldH) {
        var R = this.raid, dy = this.H - oldH;
        this.drawSkyBg(110); this.raidGround();
        if (this.player) this.player.y = this.H - 62;
        R.feathers.forEach(function (f) { f.y += dy; });
        this.raidSway();
      }
      /* v5.8.4: one difficulty curve, a little harder every level (dives come sooner and faster,
         more birds dive at once, poo falls faster, eagles beam more often) */
      raidParams(n) {
        n = Math.max(1, n || 1);
        return {
          maxDivers: 2 + Math.floor(n / 20) + (this.tier >= 9 ? 1 : 0),   /* 2 at first, 3 from 20 … 7 at 100 */
          diveCdMul: 1 - Math.min(0.55, n / 180),
          diveSpd: 1 + Math.min(0.75, n / 132),
          featherSp: 230 + n * 1.3,
          beamP: Math.min(0.75, 0.45 + n * 0.003)
        };
      }
      raidSway() {
        var R = this.raid, span = 0;
        R.ravens.forEach(function (e) { span = Math.max(span, Math.abs(e.sx) * 2 + 80); });
        R.swayAmp = clamp((this.W - span) / 2 - 40, 0, 80);
      }
      answers_raid() {
        var R = this.raid, W = this.W, H = this.H, self = this, i, r, c;
        this.raidDropCaptive();
        R.ravens.forEach(kill); R.ravens = []; R.ravSlots = [];
        var letters = shuffle(this.choiceLetters().slice()), n = letters.length;
        var gapE = 100, gapR = 62, cols = clamp(Math.floor((W * 0.72) / gapR), 6, 11), rows = this.tier >= 4 ? 3 : 2;
        var list = [];
        for (i = 0; i < n; i++) {
          var eg = { kind: "eagle", letter: letters[i], hp: this.tier >= 3 ? 3 : 2, alive: true, sx: (i - (n - 1) / 2) * gapE, sy: 0, state: "wait", x: -99, y: -99 };
          eg.spr = this.add.image(-99, -99, "md-eagle-0").setScale(1.12).setDepth(13);
          if (eg.hp > 2) eg.spr.setTint(0xcfd8e6);   /* an iron helm */
          eg.shield = this.add.image(-99, -99, "md-shield").setDepth(12).setScale(0.95);
          eg.label = this.letterText(-99, -99, eg.letter, 22, "#2a1604", "#fff6d8");
          list.push(eg);
        }
        for (r = 0; r < rows; r++) for (c = 0; c < cols; c++) R.ravSlots.push({ sx: (c - (cols - 1) / 2) * gapR, sy: 112 + r * 54 });
        var rav = [];
        R.ravSlots.forEach(function (sl, k) { rav.push(self.raidRaven(k)); });
        /* v5.7.7: two guard ravens hang just under every eagle's letter; they never dive, and fly back if shot */
        list.forEach(function (eg2) { [-1, 1].forEach(function (sd) { rav.push(self.raidGuard(eg2, sd)); }); });
        R.total = rav.length;
        /* they fly in by groups from alternating sides: the eagles with the first ravens */
        shuffle(rav);
        list = list.concat(rav);
        var g = 0, k2 = 0, size = Math.max(6, n + 2);
        list.forEach(function (e, idx) {
          if (idx && idx % size === 0) { g++; k2 = 0; }
          e.delay = g * 750 + k2 * 110; e.side = g % 2 ? 1 : -1; k2++;
        });
        R.ravens = list;
        R.ready = false; R.readyWarned = false; R.guardCd = 5000;   /* v5.7.7: no arrows until the flock has formed */
        this.showTag("GET READY — THE FLOCK IS FLYING IN", "#ffe08a");
        R.diveCd = 600;
        R.refillCd = 9000;
        this.raidSway();
        snd("caw");
      }
      raidGuard(eg, sd) {
        var e = { kind: "raven", guard: true, guardOf: eg, gside: sd, letter: null, hp: 1, alive: true, slot: -1, sx: eg.sx + sd * 23, sy: 74, state: "wait", x: -99, y: -99 };
        e.spr = this.add.image(-99, -99, "rf-raven-0").setScale(0.66).setTint(0xc8d4ff).setDepth(12);
        return e;
      }
      raidRaven(k) {
        var sl = this.raid.ravSlots[k];
        var e = { kind: "raven", letter: null, hp: 1, alive: true, slot: k, sx: sl.sx, sy: sl.sy, state: "wait", x: -99, y: -99 };
        e.spr = this.add.image(-99, -99, "rf-raven-0").setScale(0.72).setDepth(12);
        return e;
      }
      raidSlot(e) {
        var R = this.raid;
        return { x: R.fcx + e.sx * R.breath, y: R.top + e.sy * (0.94 + 0.06 * R.breath) };
      }
      raidPos(o) { return { x: o.x, y: o.y }; }
      raidPlace(e) {
        if (e.spr) e.spr.setPosition(e.x, e.y);
        if (e.shield) e.shield.setPosition(e.x, e.y + 42);
        if (e.label) e.label.setPosition(e.x, e.y + 42);
      }
      raidBez(e) {
        var P = e.path, u = clamp(P.t, 0, 1), v = 1 - u, end = P.p3 || this.raidSlot(e);
        var a = v * v * v, b = 3 * v * v * u, c = 3 * v * u * u, d = u * u * u;
        return { x: a * P.p0.x + b * P.p1.x + c * P.p2.x + d * end.x, y: a * P.p0.y + b * P.p1.y + c * P.p2.y + d * end.y };
      }
      raidEntry(e) {
        var W = this.W, H = this.H, sd = e.side || -1;
        e.state = "enter";
        e.path = { p0: { x: W / 2 + sd * (W * 0.5 + 40), y: H * 0.12 }, p1: { x: W / 2 + sd * W * 0.08, y: H * 0.72 }, p2: { x: W / 2 - sd * W * 0.3, y: H * 0.5 }, p3: null, t: 0, dur: 2.1, next: "form" };
      }
      /* Galaga's dive: a loop up and out, a swoop at Sol, off the bottom, back in from the top */
      raidDive(e, dx) {
        var W = this.W, H = this.H, p = this.player, sd = e.x < W / 2 ? -1 : 1, tx = clamp(p.x + rnd(-40, 40), 40, W - 40);
        e.state = "dive"; e.drops = 0; e.dx = dx || 0;
        var spd = this.raidParams(this.night).diveSpd;
        e.path = { p0: { x: e.x, y: e.y }, p1: { x: e.x + sd * 130, y: e.y - 110 }, p2: { x: tx - sd * 190 + e.dx, y: H * 0.72 }, p3: { x: tx + sd * 140 + e.dx, y: H + 70 }, t: 0, dur: 2.8 / spd, next: "return" };
      }
      raidBeamDive(e) {
        var W = this.W, H = this.H, p = this.player, sd = e.x < W / 2 ? -1 : 1, tx = clamp(p.x + rnd(-50, 50), 70, W - 70), hy = Math.max(e.y + 80, H * 0.44);
        e.state = "dive"; e.drops = 9; e.beamer = true;
        e.path = { p0: { x: e.x, y: e.y }, p1: { x: e.x + sd * 110, y: e.y - 80 }, p2: { x: tx, y: hy - 90 }, p3: { x: tx, y: hy }, t: 0, dur: 2.0, next: "beam" };
      }
      raidHit(o) {
        if (!o || !o.alive) return;
        var x = o.x, y = o.y;
        if (o.captive && !o.captive.freeing) { this.raidFree(o); return; }   /* held, or still rising up the beam */
        if (o.kind === "eagle" && o.hp > 1) {
          o.hp -= 1;
          if (o.spr) o.spr.setTint(0xffb08a);
          this.burst(x, y, 0xffb08a, 10);
          snd("pop");
          this.toast(o.hp === 1 ? "That eagle is hurt. One more arrow and its letter " + o.letter + " is your answer." : "That eagle's iron helm took it. " + o.hp + " more arrows for letter " + o.letter + ".", 2600);
          return;
        }
        o.alive = false;
        kill(o);
        this.burst(x, y, o.kind === "eagle" ? 0xc89a5a : 0x5a4a78, 12);
        snd("pop");
        if (o.letter) this.answerPick(o.letter, x, y);
        else this.addKill(x, y, "Twelve ravens");
      }
      /* the target an arrow meets first, coming up from below (so the ravens shield the eagles) */
      raidArrowHit(ax, y0, y1) {
        var R = this.raid, best = null, bestY = -1e9;
        R.ravens.forEach(function (e) {
          if (!e.alive || e.state === "wait") return;
          var boxes = e.kind === "eagle" ? [[38, -27, 22], [21, 20, 64]] : [[25, -18, 18]];
          boxes.forEach(function (b) {
            if (Math.abs(ax - e.x) < b[0] && y1 <= e.y + b[2] && y0 >= e.y + b[1] && e.y + b[2] > bestY) { best = e; bestY = e.y + b[2]; }
          });
        });
        return best;
      }
      tick_raid(s, inp, ms) {
        var R = this.raid, p = this.player, W = this.W, H = this.H, i, self = this;
        R.clock += s;
        /* Sol walks with the keys or the ◀ ▶ pad only; a mouse button or a tap just shoots */
        var vx = inp.ax * 430;
        p.x = clamp(p.x + vx * s, 30, W - 30 - (R.wing ? WING : 0)); p.y = H - 62;
        this.tickPlayerCharAnim(0, vx ? -1 : 0, false);
        this.blink(p);
        if (R.wing) {
          R.wing.setPosition(p.x + WING, p.y);
          try { R.wing.setTexture(p.texture.key, p.frame.name); } catch (eW) {}
          this.blink(R.wing);
        }
        this.raidCaptiveTick(s);
        /* arrows */
        R.cd -= ms;
        if (!R.ready && R.ravens.length && R.ravens.every(function (o) { return o.state !== "wait" && o.state !== "enter"; })) {
          R.ready = true; this.showTag("FIRE!", "#9aefc0"); snd("caw");
        }
        if (inp.fire && !R.ready && !R.readyWarned) { R.readyWarned = true; this.toast("Wait for the flock to fly into formation — then fire!", 2200); }
        if (inp.fire && R.ready && R.cd <= 0 && R.arrows.length < (R.wing ? 4 : 2)) {
          R.arrows.push({ x: p.x, y: p.y - 36, spr: this.add.image(p.x, p.y - 36, "md-arrow").setDepth(18) });
          if (R.wing) R.arrows.push({ x: R.wing.x, y: p.y - 36, spr: this.add.image(R.wing.x, p.y - 36, "md-arrow").setDepth(18) });
          R.cd = 260; R.fired += 1; snd("shot");
        }
        for (i = R.arrows.length - 1; i >= 0; i--) {
          var a = R.arrows[i], y0 = a.y, hit = false;
          a.y -= 760 * s; a.spr.y = a.y;
          var tgt = this._finishing ? null : this.raidArrowHit(a.x, y0, a.y);
          var cl = (R.clouds || []).filter(function (c) { return Math.abs(a.x - c.x) < 78 && y0 >= c.y - 28 && a.y <= c.y + 28; })[0];
          if (cl && (!tgt || cl.y + 28 >= tgt.y)) { hit = true; tgt = null; this.burst(a.x, cl.y + 20, 0x9aa4b8, 6); }
          if (tgt) { hit = true; this.raidHit(tgt); }
          if (!hit && R.huginn && Math.abs(a.x - R.huginn.x) < 32 && a.y < R.huginn.y + 24 && y0 > R.huginn.y - 24) {
            hit = true;
            this.burst(R.huginn.x, R.huginn.y, 0xffd84a, 24);
            this.awardBonusPoints(3000, "Huginn, Odin's raven!");
            kill(R.huginn); R.huginn = null; R.huginnCd = rnd(15000, 24000);
          }
          if (hit || a.y < -30) { a.spr.destroy(); R.arrows.splice(i, 1); }
        }
        this.fxG.clear();
        if (this._finishing) return;
        /* the formation sways, then breathes */
        R.fcx = W / 2 + Math.sin(R.clock * 0.5) * R.swayAmp;
        R.breath = 1 + 0.07 * Math.sin(R.clock * 1.3);
        var flap = Math.floor(R.clock * 4) % 2, divers = 0, anyForm = false;
        for (i = 0; i < R.ravens.length; i++) {
          var e = R.ravens[i];
          if (!e.alive) continue;
          var ox = e.x, oy = e.y;
          if (e.state === "wait") {
            e.delay -= ms;
            if (e.delay <= 0) this.raidEntry(e);
            else continue;
          }
          if (e.state === "form") {
            var sl = this.raidSlot(e); e.x = sl.x; e.y = sl.y; anyForm = true;
          } else if (e.state === "beam") {
            this.raidBeamTick(e, s, ms);
            if (!e.alive) continue;
          } else if (e.path) {
            e.path.t += s / e.path.dur;
            var q = this.raidBez(e); e.x = q.x; e.y = q.y;
            if (e.state === "dive" && !e.beamer) {
              var want = this.tier >= 1 ? 2 : 1;
              if (e.drops < want && e.path.t > 0.42 + e.drops * 0.14 && e.y < p.y - 110 && e.y > 0) { e.drops++; this.raidFeather(e.x, e.y + 16); }
            }
            if (e.path.t >= 1) {
              var nx = e.path.next;
              if (nx === "form") { e.state = "form"; e.path = null; }
              else if (nx === "beam") { e.state = "beam"; e.beamMs = 0; e.path = null; e.hoverY = e.y; }
              else if (nx === "return") {
                var sl2 = this.raidSlot(e);
                e.state = "return"; e.x = sl2.x; e.y = -60;
                e.path = { p0: { x: sl2.x, y: -60 }, p1: { x: sl2.x, y: sl2.y * 0.4 }, p2: { x: sl2.x, y: sl2.y * 0.8 }, p3: null, t: 0, dur: 1.3, next: "form" };
              }
            }
          }
          if (e.state === "dive" || e.state === "beam") { if (e.lead) divers++; }
          /* look where they fly */
          var mvx = (e.x - ox) / Math.max(s, 0.001), mvy = (e.y - oy) / Math.max(s, 0.001);
          if (e.spr) {
            if (e.kind === "raven") {
              e.spr.setTexture("rf-raven-" + flap);
              if (e.state === "form") e.spr.setFlipX(false).setRotation(0);
              else if (Math.abs(mvx) + Math.abs(mvy) > 5) { e.spr.setFlipX(mvx < 0); e.spr.setRotation(clamp((mvx < 0 ? -1 : 1) * Math.atan2(mvy, Math.abs(mvx) + 1) * 0.6, -0.9, 0.9)); }
            } else {
              e.spr.setTexture("md-eagle-" + (e.state === "beam" ? 1 : flap));
              e.spr.setRotation(e.state === "form" ? 0 : clamp(mvx / 700, -0.45, 0.45));
            }
          }
          this.raidPlace(e);
          if (e.captive && e.captive.held) e.captive.spr.setPosition(e.x, e.y - CAPT_UP);
          /* a diving bird that reaches Sol costs a life (or, with two Sols, one of them) */
          var who = e.y > p.y - 70 && (e.state === "dive" || e.state === "return") ? this.raidSolAt(e.x, e.y, e.kind === "eagle" ? 38 : 30) : 0;
          if (who) {
            this.raidHurt(who, e.kind === "eagle" ? "AN EAGLE CRASHED INTO YOU" : "A RAVEN CRASHED INTO YOU");
            if (e.kind === "raven") { e.alive = false; this.burst(e.x, e.y, 0x5a4a78, 12); kill(e); }
          }
        }
        R.ravens = R.ravens.filter(function (o) { return o.alive; });
        /* who dives next */
        R.diveCd -= ms;
        var RP = this.raidParams(this.night), maxDivers = RP.maxDivers;
        var flying = R.ravens.filter(function (o) { return o.alive && (o.state === "dive" || o.state === "beam" || o.state === "return"); }).length;
        if (R.ready && anyForm && (flying === 0 || (R.diveCd <= 0 && divers < maxDivers))) {   /* never an empty sky */
          this.raidLaunch();
          R.diveCd = rnd(700, 1400) * RP.diveCdMul;
        }
        /* v5.7.9 (realm 3 on): two eagles trade places now and then */
        if (this.tier >= 2 && R.ready) {
          R.swapCd = (R.swapCd == null ? 6000 : R.swapCd) - ms;
          if (R.swapCd <= 0) { R.swapCd = this.tier >= 8 ? 4000 : 6500; this.raidSwap(); }
        }
        /* (realm 6 on) storm clouds drift across the flock and stop arrows */
        if (this.tier >= 5) this.raidClouds(s, ms);
        /* (realm 8 on) ravens in the formation drop poo too */
        if (this.tier >= 7 && R.ready) {
          R.fpooCd = (R.fpooCd == null ? 2500 : R.fpooCd) - ms;
          if (R.fpooCd <= 0) {
            R.fpooCd = rnd(1800, 3000) * (this.tier >= 9 ? 0.7 : 1);
            var fr = R.ravens.filter(function (o) { return o.alive && o.kind === "raven" && !o.guard && o.state === "form"; });
            if (fr.length) { var fe = fr[Math.floor(Math.random() * fr.length)]; this.raidFeather(fe.x, fe.y + 16); }
          }
        }
        /* guards fly back to an eagle that is home in the formation */
        R.guardCd -= ms;
        if (R.guardCd <= 0) {
          R.guardCd = 5000;
          R.ravens.filter(function (o) { return o.kind === "eagle" && o.alive && o.state === "form"; }).forEach(function (eg) {
            [-1, 1].forEach(function (sd) {
              if (!R.ravens.some(function (o) { return o.guard && o.guardOf === eg && o.gside === sd && o.alive; })) { var ng = self.raidGuard(eg, sd); ng.delay = 0; ng.side = sd; R.ravens.push(ng); }
            });
          });
        }
        /* when the ravens thin out, more fly in to shield the eagles */
        R.refillCd -= ms;
        if (R.refillCd <= 0) {
          R.refillCd = 5000;
          var used = {}, liveRav = 0;
          R.ravens.forEach(function (o) { if (o.kind === "raven" && !o.guard) { used[o.slot] = 1; liveRav++; } });
          if (liveRav <= R.total * 0.75 && R.ravens.some(function (o) { return o.kind === "eagle"; })) {
            var empties = R.ravSlots.map(function (x, k) { return k; }).filter(function (k) { return !used[k]; });
            shuffle(empties).slice(0, 4).forEach(function (k, j) {
              var nr = self.raidRaven(k); nr.delay = j * 130; nr.side = Math.random() < 0.5 ? -1 : 1; R.ravens.push(nr);
            });
          }
        }
        /* falling feathers */
        for (i = R.feathers.length - 1; i >= 0; i--) {
          var f = R.feathers[i], gone = false;
          f.t += s; f.y += this.raidParams(this.night).featherSp * s; f.x += (f.vx || 0) * s;
          f.spr.setPosition(f.x, f.y).setScale(1, 1 + Math.min(0.25, f.t * 0.3));
          var fw = this.raidSolAt(f.x, f.y, 26);
          if (fw) {
            gone = true;
            var two = !!R.wing, sx = fw === 2 ? R.wing.x : p.x;
            if (this.raidHurt(fw, "SPLAT! BIRD POO GOT YOU")) this.raidSplat(two ? sx : p.x, p.y - 22, !two);
          } else if (f.y > H - 30) { gone = true; this.raidSplat(f.x, H - 26, false); }
          if (gone) { f.spr.destroy(); R.feathers.splice(i, 1); }
        }
        /* Huginn, the golden raven, crosses the top now and then */
        if (!R.huginn) {
          R.huginnCd -= ms;
          if (R.huginnCd <= 0) {
            var fromL = Math.random() < 0.5;
            R.huginn = { x: fromL ? -50 : W + 50, y: 62, vx: fromL ? 170 : -170, spr: this.add.image(0, 62, "rf-raven-0").setScale(0.7).setTint(0xffd84a).setDepth(12).setFlipX(!fromL) };
            snd("caw");
          }
        } else {
          R.huginn.x += R.huginn.vx * s;
          R.huginn.spr.setPosition(R.huginn.x, R.huginn.y + Math.sin(this.time.now / 160) * 4);
          if (R.huginn.x < -80 || R.huginn.x > W + 80) { kill(R.huginn); R.huginn = null; R.huginnCd = rnd(14000, 22000); }
        }
      }
      /* two eagles in the formation swap slots (their guards swap with them) */
      raidSwap() {
        var R = this.raid, self = this;
        var eg = shuffle(R.ravens.filter(function (o) { return o.alive && o.kind === "eagle" && o.state === "form"; })).slice(0, 2);
        if (eg.length < 2) return;
        var a = eg[0], b = eg[1], t = a.sx; a.sx = b.sx; b.sx = t;
        R.ravens.forEach(function (o) { if (o.guard) { if (o.guardOf === a) o.guardOf = b; else if (o.guardOf === b) o.guardOf = a; } });
        [a, b].forEach(function (e) {
          var to = self.raidSlot(e);
          e.state = "swap";
          e.path = { p0: { x: e.x, y: e.y }, p1: { x: e.x, y: e.y + 80 }, p2: { x: to.x, y: to.y + 80 }, p3: null, t: 0, dur: 1.1, next: "form" };
        });
        if (!R.toldSwap) { R.toldSwap = true; this.toast("Watch out: the eagles trade places! Follow the right letter.", 2600); }
      }
      raidClouds(s, ms) {
        var R = this.raid, W = this.W, want = this.tier >= 8 ? 2 : 1, i;
        R.clouds = R.clouds || [];
        R.cloudCd = (R.cloudCd == null ? 1500 : R.cloudCd) - ms;
        if (R.clouds.length < want && R.cloudCd <= 0) {
          var fromL = Math.random() < 0.5, c = { x: fromL ? -110 : W + 110, y: R.top + rnd(20, 100), vx: (fromL ? 1 : -1) * rnd(40, 70) };
          c.spr = this.add.image(c.x, c.y, "md-cloud").setDepth(16).setAlpha(0.92);
          R.clouds.push(c); R.cloudCd = 3000;
        }
        for (i = R.clouds.length - 1; i >= 0; i--) {
          var c2 = R.clouds[i];
          c2.x += c2.vx * s; c2.spr.setPosition(c2.x, c2.y);
          if ((c2.vx > 0 && c2.x > W + 130) || (c2.vx < 0 && c2.x < -130)) { c2.spr.destroy(); R.clouds.splice(i, 1); }
        }
      }
      /* a white splat on Sol (it rides along and fades) or on the ground */
      raidSplat(x, y, onSol) {
        var sp = this.add.image(x, y, "md-splat").setDepth(onSol ? 22 : 3).setScale(onSol ? 1 : 0.7).setAlpha(0.95), self = this, p = this.player;
        snd("pop");
        this.tweens.add({ targets: sp, alpha: 0, delay: onSol ? 700 : 500, duration: onSol ? 500 : 700, onComplete: function () { sp.destroy(); },
          onUpdate: function () { if (onSol && p) sp.setPosition(p.x, p.y - 22); } });
      }
      raidFeather(x, y) {
        var p = this.player, fall = Math.max(0.4, (p.y - y) / (this.raidParams(this.night).featherSp - 20));
        var vx = clamp((p.x - x) / fall, -140, 140) * (this.tier >= 1 ? 1 : 0.6);
        this.raid.feathers.push({ x: x, y: y, vx: vx, t: 0, spr: this.add.image(x, y, "md-poo").setDepth(17) });
      }
      raidLaunch() {
        var R = this.raid, self = this;
        var form = R.ravens.filter(function (o) { return o.alive && o.state === "form"; });
        var eagles = form.filter(function (o) { return o.kind === "eagle"; }), ravens = form.filter(function (o) { return o.kind === "raven" && !o.guard; });
        var beaming = !!R.capt || R.ravens.some(function (o) { return o.alive && (o.state === "beam" || o.beamer); });
        if (eagles.length && (Math.random() < 0.5 || !ravens.length)) {
          var eg = eagles[Math.floor(Math.random() * eagles.length)];
          eg.lead = true;
          if (!beaming && Math.random() < this.raidParams(this.night).beamP) { this.raidBeamDive(eg); return; }
          eg.beamer = false;
          this.raidDive(eg, 0);
          /* up to two ravens fly escort, as in Galaga */
          ravens.sort(function (a, b) { return Math.abs(a.x - eg.x) - Math.abs(b.x - eg.x); }).slice(0, 2).forEach(function (o, j) { o.lead = false; o.beamer = false; self.raidDive(o, j ? 46 : -46); o.path = { p0: { x: o.x, y: o.y }, p1: { x: eg.path.p1.x + o.dx, y: eg.path.p1.y + 30 }, p2: { x: eg.path.p2.x + o.dx, y: eg.path.p2.y + 20 }, p3: { x: eg.path.p3.x + o.dx, y: eg.path.p3.y }, t: 0, dur: eg.path.dur, next: "return" }; });
          return;
        }
        if (!ravens.length) return;
        var rv = ravens[Math.floor(Math.random() * ravens.length)];
        rv.lead = true; rv.beamer = false;
        this.raidDive(rv, 0);
      }
      /* the eagle's catching beam: it grows for 0.6s (a fair warning), shines, then pulls back */
      raidBeamTick(e, s, ms) {
        var p = this.player, g = this.fxG, H = this.H;
        e.beamMs += ms;
        e.x += Math.sin(this.raid.clock * 1.6) * 12 * s;
        if (this.tier >= 6) e.x += clamp(p.x - e.x, -1, 1) * 60 * s;   /* the beam follows Sol */
        e.y = e.hoverY + Math.sin(this.raid.clock * 3) * 3;
        var ms0 = e.beamMs, grow = ms0 < 600 ? ms0 / 600 : ms0 < 2800 ? 1 : Math.max(0, 1 - (ms0 - 2800) / 400);
        var top = e.y + 66, full = (H - 30) - top, len = full * grow, w0 = 14, w1 = 14 + len * 0.16;
        if (len > 4) {
          var pulse = 0.2 + 0.05 * Math.sin(this.raid.clock * 4);
          g.fillStyle(0xffe08a, pulse);
          g.fillPoints([{ x: e.x - w0, y: top }, { x: e.x + w0, y: top }, { x: e.x + w1, y: top + len }, { x: e.x - w1, y: top + len }], true);
          g.lineStyle(2, 0xfff2b8, 0.45);
          for (var k = 0; k < 4; k++) {
            var yy = ((this.raid.clock * 90 + k * full / 4) % full);
            if (yy > len) continue;
            var ww = w0 + yy * 0.16;
            g.lineBetween(e.x - ww, top + yy, e.x + ww, top + yy);
          }
        }
        if (grow >= 1 && ms0 < 2800) {
          var half = w0 + (p.y - 10 - top) * 0.16, R = this.raid;
          var bw = Math.abs(p.x - e.x) < half + 6 ? 1 : (R.wing && Math.abs(R.wing.x - e.x) < half + 6 ? 2 : 0);
          if (bw && R.wing) { if (this.raidHurt(bw, "THE EAGLE'S BEAM")) e.beamMs = 2800; }
          else if (bw && !R.capt && e.kind === "eagle") { if (!this.iframeMs && !this.ended && !this._finishing) { this.raidCapture(e); e.beamMs = 2800; } }
          else if (bw) { if (this.loseLife("hit", "THE EAGLE'S BEAM CAUGHT YOU")) e.beamMs = 2800; }
        }
        if (ms0 >= 3200) {
          e.state = "return"; e.beamer = false;
          e.path = { p0: { x: e.x, y: e.y }, p1: { x: e.x, y: e.y - 120 }, p2: { x: this.raidSlot(e).x, y: this.raidSlot(e).y + 90 }, p3: null, t: 0, dur: 1.5, next: "form" };
        }
      }
      /* ── v5.8.2: Galaga's capture and the double Sol ── */
      /* which Sol a thing at (x, y) touches: 1 Sol, 2 the second Sol, 0 neither */
      raidSolAt(x, y, r) {
        var p = this.player, w = this.raid.wing;
        if (dist(x, y, p.x, p.y - 10) < r) return 1;
        if (w && dist(x, y, w.x, w.y - 10) < r) return 2;
        return 0;
      }
      /* a hit: with two Sols it takes one away (no life), with one it costs a life */
      raidHurt(who, label) {
        var R = this.raid, p = this.player;
        if (!R.wing) return this.loseLife("hit", label);
        if (this.ended || this._finishing || this.iframeMs > 0) return false;
        var w = R.wing, x = who === 2 ? w.x : p.x;
        this.burst(x, p.y - 10, 0xff9a7a, 18);
        if (who !== 2) p.x = w.x;   /* the Sol that's left stands where he stood */
        w.destroy(); R.wing = null;
        this.iframeMs = 1500;
        this.showTag(label + " · ONE SOL LEFT", "#ff9a7a");
        this.toast("You lost one of your two Sols, but not a life. Get caught by a beam again to win him back.", 2800);
        try { this.cameras.main.shake(160, 0.008); } catch (e) {}
        if (window.AfterHoursAudio) { try { AfterHoursAudio.catch(); } catch (e2) {} }
        return true;
      }
      /* the beam lifts a copy of Sol up to the eagle, which takes him back to the formation */
      raidCapture(e) {
        var R = this.raid, p = this.player;
        var spr = this.add.sprite(p.x, p.y, p.texture.key, p.frame.name).setScale(p.scaleX, p.scaleY).setDepth(14).setTint(0xffd27a);
        R.capt = { eagle: e, spr: spr, held: false, freeing: false, t: 0, x0: p.x, y0: p.y };
        e.captive = R.capt;
        this.iframeMs = 1200;
        this.showTag("THE EAGLE CAUGHT SOL!", "#ffd27a");
        try { this.cameras.main.shake(160, 0.006); } catch (e1) {}
        this.toast("The eagle caught Sol! Hit that eagle (letter " + e.letter + ") with an arrow to free him and get two Sols. If he's still caught when this question ends, you lose a life.", 4800);
      }
      /* an arrow hit the eagle that holds Sol: he flies down to stand next to Sol */
      raidFree(e) {
        var R = this.raid, c = R.capt;
        e.captive = null;
        if (!c) return;
        c.held = false; c.freeing = true; c.t = 0; c.x0 = c.spr.x; c.y0 = c.spr.y;
        c.spr.clearTint();
        this.burst(c.x0, c.y0, 0xffe08a, 16);
        snd("chime");
        this.showTag("SOL IS FREE!", "#9aefc0");
      }
      raidCaptiveTick(s) {
        var R = this.raid, c = R.capt, p = this.player;
        if (!c) return;
        if (!c.held && !c.freeing) {   /* rising up the beam, turning */
          c.t = Math.min(1, c.t + s / 1.2);
          var e = c.eagle, u = c.t * c.t * (3 - 2 * c.t);
          if (!e.alive) { this.raidDropCaptive(); return; }
          c.spr.setPosition(c.x0 + (e.x - c.x0) * u, c.y0 + (e.y - CAPT_UP - c.y0) * u).setRotation(c.t < 1 ? c.t * Math.PI * 4 : 0);
          if (c.t >= 1) c.held = true;
        } else if (c.freeing) {   /* down to Sol's side */
          c.t = Math.min(1, c.t + s / 1.0);
          var tx = Math.min(p.x + WING, this.W - 30), u2 = c.t * c.t * (3 - 2 * c.t);
          c.spr.setPosition(c.x0 + (tx - c.x0) * u2, c.y0 + (p.y - c.y0) * u2);
          if (c.t >= 1) this.raidDock();
        }
      }
      raidDock() {
        var R = this.raid, c = R.capt, p = this.player;
        if (!c) return;
        c.spr.destroy(); R.capt = null;
        if (R.wing || this.ended) return;
        p.x = Math.min(p.x, this.W - 30 - WING);
        R.wing = this.add.sprite(p.x + WING, p.y, p.texture.key, p.frame.name).setScale(p.scaleX, p.scaleY).setDepth(20);
        this.awardBonusPoints(1000, "Sol rescued");
        this.showTag("DOUBLE SOL!", "#9aefc0");
        this.toast("Two Sols! You shoot two arrows at a time. A hit takes one Sol away instead of a life.", 3400);
      }
      /* the flock is going (a new question, a correct answer): a held Sol goes with it and that costs a life,
         except on the level's last answer (v5.8.3); one on his way down lands */
      raidDropCaptive() {
        var R = this.raid, c = R.capt;
        if (!c) return;
        if (c.freeing) { this.raidDock(); return; }
        if (c.eagle) c.eagle.captive = null;
        try { c.spr.destroy(); } catch (e) {}
        R.capt = null;
        if (this.score < this.needExtracts) { this.iframeMs = 0; this.loseLife("hit", "THE EAGLE KEPT SOL"); }
      }
      clear_raid() {
        var R = this.raid, self = this;
        this.raidDropCaptive();
        R.ravens.forEach(function (o) { if (o.alive && o.state !== "wait") self.burst(o.x, o.y, o.kind === "eagle" ? 0xc89a5a : 0x5a4a78, 8); kill(o); });
        R.ravens = [];
        R.feathers.forEach(kill); R.feathers = [];
        (R.clouds || []).forEach(kill); R.clouds = [];
        try { this.fxG.clear(); } catch (e) {}
      }

      /* ── Rune Rocks: a one-card "how to pull a rock in" pop-up. It shows after the reading pop-up
         on each Rune Rocks level until the student has pulled a rock in once on this Chromebook. ── */
      showBeamHelp() {
        this._beamHelpDone = true;
        var learned = false;
        try { learned = localStorage.getItem(BEAM_KEY) === "1"; } catch (e) {}
        if (learned) return;
        var self = this, ov = document.getElementById("beam-help");
        if (!ov) {
          ov = document.createElement("div");
          ov.id = "beam-help"; ov.className = "beam-help"; ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); ov.setAttribute("aria-labelledby", "beam-help-title");
          ov.innerHTML = '<div class="tut-card beam-card">' +
            '<p class="tut-kicker">Rune Rocks · how to pull a rock in</p>' +
            '<h2 id="beam-help-title">Use the beam</h2>' +
            '<svg viewBox="0 0 360 120" width="100%" role="img" aria-label="The ship points at a rock; a gold beam pulls it in">' +
              '<polygon points="70,60 300,18 300,102" fill="rgba(255,224,122,0.22)"/>' +
              '<line x1="78" y1="60" x2="252" y2="60" stroke="#ffe07a" stroke-width="5" opacity="0.6"/>' +
              '<g transform="translate(52,60) rotate(90)"><polygon points="0,-22 16,16 0,8 -16,16" fill="#f0c040" stroke="#7a4a10" stroke-width="2.5"/></g>' +
              '<circle cx="270" cy="60" r="27" fill="#5a4c34" stroke="#ffd84a" stroke-width="4"/>' +
              '<text x="270" y="69" text-anchor="middle" font-family="Trebuchet MS, sans-serif" font-weight="bold" font-size="26" fill="#fff6d8">B</text>' +
              '<path d="M226 88 L150 88" stroke="#fff" stroke-width="3" fill="none" marker-end="url(#bh-arrow)"/>' +
              '<defs><marker id="bh-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#fff"/></marker></defs>' +
            '</svg>' +
            '<ol class="beam-steps">' +
              '<li><b>Point your ship</b> at the rock with the right letter: ◀ ▶ turn, ▲ moves you closer. (The mouse does not steer.)</li>' +
              '<li><b>Hold the beam:</b> ▼ or Shift, the <b>PULL</b> button, or the <b>right mouse button</b>. A gold cone shines in front of the ship.</li>' +
              '<li><b>Keep holding until the rock touches your ship.</b> Then it counts as your answer.</li>' +
            '</ol>' +
            '<p class="beam-warn"><b>Don\'t let go early!</b> A rock you let go of keeps flying at you, and a rock hitting your ship costs a life — even the right one. Don\'t shoot the right rock either; shoot the wrong letters and the plain rocks.</p>' +
            '<button type="button" class="btn primary" id="beam-help-ok">Got it</button>' +
            '</div>';
          (document.getElementById("stage") || document.body).appendChild(ov);
        }
        ov.classList.remove("hidden");
        this.helpOpen = true;
        var close = function () { self.hideBeamHelp(); self.tutLockUntil = Date.now() + 350; };
        var btn = document.getElementById("beam-help-ok");
        if (btn) { btn.onclick = close; try { btn.focus(); } catch (e2) {} }
        this._beamKey = function (ev) { if (ev.key === "Enter" || ev.key === " " || ev.key === "Escape") { ev.preventDefault(); close(); } };
        document.addEventListener("keydown", this._beamKey, true);
      }
      hideBeamHelp() {
        this.helpOpen = false;
        if (this._beamKey) { document.removeEventListener("keydown", this._beamKey, true); this._beamKey = null; }
        var ov = document.getElementById("beam-help");
        if (ov) ov.classList.add("hidden");
      }

      /* ═══ 2. RUNE ROCKS — asteroids ═══════════════════════════════════════
         v5.8.4: harder every level, the way Asteroids gets harder every wave:
         more rocks to start with, a fuller field, faster respawns and faster
         rocks, level by level; each new question in a level sends in another
         wave of big rocks; and dark-elf saucers fly across and shoot — a big
         one that fires anywhere (level 6 on) and a small one that aims at the
         ship (level 16 on), coming more often and aiming better as levels rise. */
      rkParams(n, wave) {
        n = Math.max(1, n || 1); wave = Math.max(1, wave || 1);
        var w = wave - 1;
        return {
          start: Math.min(14, 3 + Math.round(n / 8)),                 /* 3 at level 1, 4 at 4, 9 at 48, 14 at 88+ */
          waveAdd: w ? Math.min(6, 1 + Math.floor(n / 20)) : 0,     /* big rocks each new question brings */
          cap: Math.min(36, 8 + Math.floor(n / 4) + 2 * w),           /* plain rock sizes kept on the field */
          spawnMs: Math.max(700, 3000 - n * 20 - w * 150),
          speed: (1 + n * 0.009 + w * 0.04) * (this.tier >= 9 ? 1.25 : 1),
          speedAdd: n * 0.3,
          saucer: n >= 6,
          saucerMs: Math.max(7000, 26000 - n * 170) * Math.max(0.6, 1 - w * 0.1),
          smallShare: n >= 16 ? clamp(0.25 + (n - 16) / 80, 0.25, 0.85) : 0,
          aimErr: Math.max(0.06, 0.45 - Math.max(0, n - 16) * 0.005),
          saucerFireMs: Math.max(550, 1300 - n * 6)
        };
      }
      setup_rocks() {
        this.drawSkyBg(160, true);
        var W = this.W, H = this.H;
        var ship = { x: W / 2, y: H / 2, vx: 0, vy: 0, ang: -Math.PI / 2, spr: this.add.image(W / 2, H / 2, "md-ship").setScale(1.2).setDepth(20) };
        this.makeSol(W / 2, H / 2, "up").setVisible(false);   /* Sol flies the ship; the sprite stays for coin pop-ups */
        this.rk = { ship: ship, rocks: [], bullets: [], cd: 0, spawnCd: 0, target: null, beamSnd: 0, gen: 0,
          warns: [], cometCd: 6000, valk: null, valkCd: 10000, spears: [], showerCd: 11000,
          wave: 0, saucers: [], sBullets: [], saucerCd: 0 };
        var P = this.rkParams(this.night, 1), i;
        this.rk.saucerCd = P.saucerMs * 0.6;
        for (i = 0; i < P.start; i++) this.rockFromEdge(3, null);
      }
      resize_rocks() { this.drawSkyBg(160, true); }
      rockMake(size, letter, x, y, vx, vy) {
        var R = this.rk, rad = size === 3 ? 46 : size === 2 ? 32 : 18;
        var o = { x: x, y: y, vx: vx, vy: vy, size: size, r: letter ? 34 : rad, letter: letter || null, rot: rnd(0, 6), spin: rnd(-1.2, 1.2), gen: R.gen };
        o.spr = this.add.image(x, y, letter ? "md-rock-l" : "md-rock-" + Math.floor(rnd(0, 3))).setScale((letter ? 34 : rad) / 46).setDepth(11);
        if (letter) { o.spin *= 0.4; o.label = this.letterText(x, y, letter, 30, "#fff4c8", "#1a1008").setDepth(14); }
        else if (size === 3 && this.tier >= 2) { o.hp = 2; o.spr.setTint(0xa8b8d0); }   /* an iron rock: two shots */
        R.rocks.push(o);
        return o;
      }
      rockFromEdge(size, letter) {
        var W = this.W, H = this.H, side = Math.floor(rnd(0, 4)), x, y, S = this.rk.ship, tries = 0;
        do {
          side = Math.floor(rnd(0, 4));
          x = side === 0 ? -40 : side === 1 ? W + 40 : rnd(0, W);
          y = side === 2 ? -40 : side === 3 ? H + 40 : rnd(0, H);
          tries++;
        } while (tries < 8 && dist(x, y, S.x, S.y) < 220);
        var tx = rnd(W * 0.2, W * 0.8), ty = rnd(H * 0.2, H * 0.8), a = Math.atan2(ty - y, tx - x);
        var P = this.rkParams(this.night, this.rk.wave);
        var sp = letter ? (rnd(34, 56) + this.night * 0.2) * (this.tier >= 9 ? 1.25 : 1) : rnd(40, 80) * P.speed + P.speedAdd;
        return this.rockMake(size, letter, x, y, Math.cos(a) * sp, Math.sin(a) * sp);
      }
      /* a letter rock; from realm 6 two guard stones circle it and block the beam until they are shot off */
      letterRock(L) {
        var o = this.rockFromEdge(2, L), k;
        if (this.tier >= 5) for (k = 0; k < 2; k++) { var g = this.rockMake(1, null, o.x, o.y, 0, 0); g.orbitOf = o; g.oa = k * Math.PI; g.spr.setTint(0xe8c890); }
        return o;
      }
      rockRemove(o) {
        var R = this.rk, i = R.rocks.indexOf(o), self = this;
        if (i >= 0) R.rocks.splice(i, 1);
        if (R.target === o) R.target = null;
        kill(o);
        R.rocks.filter(function (q) { return q.orbitOf === o; }).forEach(function (q) { self.burst(q.x, q.y, 0xe8c890, 6); self.rockRemove(q); });
      }
      answers_rocks() {
        var R = this.rk, self = this, k;
        R.gen += 1;
        R.rocks.filter(function (o) { return o.letter; }).forEach(function (o) { self.burst(o.x, o.y, 0xffd84a, 10); self.rockRemove(o); });
        shuffle(this.choiceLetters().slice()).forEach(function (L) { self.letterRock(L); });
        /* v5.8.4: every new question is a new wave, with more big rocks */
        R.wave += 1;
        var P = this.rkParams(this.night, R.wave);
        for (k = 0; k < P.waveAdd; k++) this.rockFromEdge(3, null);
        if (P.waveAdd) this.toast("Wave " + R.wave + ": " + P.waveAdd + " more big rock" + (P.waveAdd === 1 ? "" : "s") + " fly in.", 2400);
      }
      rockShot(o, noCredit) {
        var self = this;
        if (o.letter) {
          var L = o.letter, gen = this.rk.gen;
          this.burst(o.x, o.y, 0xffb04a, 16); snd("rock");
          this.rockRemove(o);
          if ((this.need || []).indexOf(L) !== -1 && this.extracted.indexOf(L) === -1) {
            this.answerWrong(L, "YOU BLASTED THE RIGHT ANSWER");
            /* the right answer comes back so the question can still be answered */
            this.time.delayedCall(1600, function () { if (!self.ended && !self._finishing && self.rk.gen === gen && self.extracted.indexOf(L) === -1) self.letterRock(L); });
          } else {
            this.toast("Letter " + L + " was not the answer. Rock cleared.", 2400);
            this.addKill(o.x, o.y, "Rocks cleared");
          }
          return;
        }
        if (!noCredit && o.hp > 1) { o.hp -= 1; o.spr.setTint(0xd8e0ec); this.burst(o.x, o.y, 0xc8d4e8, 8); snd("rock"); return; }   /* iron */
        this.burst(o.x, o.y, 0x9a9488, o.size * 6); snd("rock");
        if (o.size > 1) {
          var a = Math.atan2(o.vy, o.vx), sp = Math.sqrt(o.vx * o.vx + o.vy * o.vy) * 1.3 + 20, k;
          for (k = -1; k <= 1; k += 2) this.rockMake(o.size - 1, null, o.x, o.y, Math.cos(a + k * 0.7) * sp, Math.sin(a + k * 0.7) * sp);
        }
        this.rockRemove(o);
        if (!noCredit) this.addKill(o.x, o.y, "Rocks cleared");
      }
      rockCaught(o) {
        try { localStorage.setItem(BEAM_KEY, "1"); } catch (eL) {}   /* the beam pop-up has done its job */
        var x = o.x, y = o.y, L = o.letter;
        this.rockRemove(o);
        if (L) this.answerPick(L, x, y);
        else { this.burst(x, y, 0x9a9488, 10); this.toast("Plain rock crushed in the beam.", 1600); this.scoreJuice = (this.scoreJuice || 0) + 60; }
      }
      wrap(o, m) {
        var W = this.W, H = this.H;
        if (o.x < -m) o.x = W + m; else if (o.x > W + m) o.x = -m;
        if (o.y < -m) o.y = H + m; else if (o.y > H + m) o.y = -m;
      }
      tick_rocks(s, inp, ms) {
        var R = this.rk, S = R.ship, W = this.W, H = this.H, i, j, self = this, g = this.fxG;
        g.clear();
        /* steering */
        /* only the keys and the pad steer; a mouse button just fires (left) or holds the beam (right) */
        var thrust = inp.ay < 0;
        S.ang += inp.ax * 3.8 * s;
        if (thrust) { S.vx += Math.cos(S.ang) * 420 * s; S.vy += Math.sin(S.ang) * 420 * s; }
        var sp = Math.sqrt(S.vx * S.vx + S.vy * S.vy);
        if (sp > 340) { S.vx *= 340 / sp; S.vy *= 340 / sp; }
        var damp = Math.pow(this.tier >= 4 ? 0.8 : 0.55, s); S.vx *= damp; S.vy *= damp;   /* slippery from realm 5 */
        S.x += S.vx * s; S.y += S.vy * s;
        this.wrap(S, 24);
        S.spr.setPosition(S.x, S.y).setRotation(S.ang + Math.PI / 2);
        this.blink(S.spr);
        this.player.setPosition(S.x, S.y);
        var nx = Math.cos(S.ang), ny = Math.sin(S.ang);
        if (thrust) {
          g.fillStyle(0xffa030, 0.85);
          g.fillTriangle(S.x - nx * 22 - ny * 7, S.y - ny * 22 + nx * 7, S.x - nx * 22 + ny * 7, S.y - ny * 22 - nx * 7, S.x - nx * (34 + Math.random() * 10), S.y - ny * (34 + Math.random() * 10));
        }
        /* shots */
        R.cd -= ms;
        if (inp.fire && R.cd <= 0 && R.bullets.length < 6) {
          R.bullets.push({ x: S.x + nx * 26, y: S.y + ny * 26, vx: nx * 640 + S.vx * 0.5, vy: ny * 640 + S.vy * 0.5, life: 0.9, spr: this.add.image(S.x, S.y, "md-bolt").setDepth(18).setRotation(S.ang) });
          R.cd = 170; R.fired = (R.fired || 0) + 1; snd("shot");
        }
        for (i = R.bullets.length - 1; i >= 0; i--) {
          var b = R.bullets[i], hit = null;
          b.x += b.vx * s; b.y += b.vy * s; b.life -= s;
          this.wrap(b, 10);
          b.spr.setPosition(b.x, b.y);
          for (j = 0; j < R.rocks.length; j++) { if (dist(b.x, b.y, R.rocks[j].x, R.rocks[j].y) < R.rocks[j].r + 4) { hit = R.rocks[j]; break; } }
          if (!hit) {
            for (j = 0; j < R.saucers.length; j++) {
              var sc = R.saucers[j];
              if (dist(b.x, b.y, sc.x, sc.y) < (sc.small ? 18 : 28)) { this.saucerDown(sc, true); b.life = 0; break; }
            }
          }
          if (!hit && b.life > 0 && R.valk && dist(b.x, b.y, R.valk.x, R.valk.y) < 32) {
            this.burst(R.valk.x, R.valk.y, 0xe0e8ff, 20); this.awardBonusPoints(1500, "Valkyrie driven off");
            kill(R.valk); R.valk = null; R.valkCd = rnd(14000, 20000); b.life = 0;
          }
          if (hit || b.life <= 0) { b.spr.destroy(); R.bullets.splice(i, 1); }
          if (hit) { this.rockShot(hit); if (this._finishing) return; }
        }
        /* the beam: pulls in the nearest rock in front of the ship */
        R.target = null;
        if (!inp.pull) R.lock = null;
        if (inp.pull) {
          var best = null, bd = 1e9;
          /* v5.8.5: the beam stays locked on the rock it is pulling until that rock is in or the beam is let
             go. Before, it re-picked the nearest rock in its cone every frame, so a rock drifting into the cone
             closer to the ship, or the pulled rock sliding out of the narrow cone in the last moment, dropped the
             pulled rock, which flew on and hit the ship as "let go too soon" while the beam was still held. */
          var lk = R.lock;
          if (lk && R.rocks.indexOf(lk) >= 0 && dist(lk.x, lk.y, S.x, S.y) <= 330) best = lk;
          else R.lock = null;
          if (!best) R.rocks.forEach(function (o) {
            if (o.size > 2 || o.comet || o.orbitOf) return;
            var dd = dist(o.x, o.y, S.x, S.y);
            if (dd > 270 || dd >= bd) return;
            if (Math.abs(angDiff(Math.atan2(o.y - S.y, o.x - S.x), S.ang)) > 0.45) return;
            best = o; bd = dd;
          });
          var len = 270, spread = 0.42;
          g.fillStyle(0xffe07a, 0.13);
          g.fillTriangle(S.x + nx * 18, S.y + ny * 18, S.x + Math.cos(S.ang - spread) * len, S.y + Math.sin(S.ang - spread) * len, S.x + Math.cos(S.ang + spread) * len, S.y + Math.sin(S.ang + spread) * len);
          R.beamSnd -= ms;
          if (R.beamSnd <= 0) { snd("beam"); R.beamSnd = 420; }
          var guarded = best && R.rocks.some(function (q) { return q.orbitOf === best; });
          if (guarded) {
            g.lineStyle(4, 0xff6a5a, 0.6); g.lineBetween(S.x + nx * 18, S.y + ny * 18, best.x, best.y);
            if (!R.toldGuard) { R.toldGuard = true; this.toast("Its guard stones block the beam. Shoot them off first.", 2600); }
            best = null;
          }
          if (best) {
            R.target = best; R.lock = best; best.beamT = this.time.now;
            g.lineStyle(5, 0xffe07a, 0.55); g.lineBetween(S.x + nx * 18, S.y + ny * 18, best.x, best.y);
            g.lineStyle(2, 0xffffff, 0.8); g.strokeCircle(best.x, best.y, best.r + 6);
            var tx = S.x - best.x, ty = S.y - best.y, tl = Math.sqrt(tx * tx + ty * ty) || 1;
            var pullF = best.letter && this.tier >= 3 ? (this.tier >= 9 ? 0.5 : 0.6) : 1;   /* heavy runes from realm 4 */
            best.vx = best.vx * Math.pow(0.2, s) + tx / tl * 320 * s * 4 * pullF;
            best.vy = best.vy * Math.pow(0.2, s) + ty / tl * 320 * s * 4 * pullF;
            if (tl < best.r + 20) { this.rockCaught(best); if (this._finishing) return; }
          }
        }
        /* rocks drift and wrap; any rock but the beamed one hurts */
        for (i = R.rocks.length - 1; i >= 0; i--) {
          var o = R.rocks[i];
          if (!o) continue;
          if (o.orbitOf) { o.oa += 1.7 * s; o.x = o.orbitOf.x + Math.cos(o.oa) * 60; o.y = o.orbitOf.y + Math.sin(o.oa) * 60; }
          else { o.x += o.vx * s; o.y += o.vy * s; }
          o.rot += o.spin * s;
          if (o.comet) { if (o.x < -90 || o.x > W + 90 || o.y < -90 || o.y > H + 90) { this.rockRemove(o); continue; } }
          else if (!o.orbitOf) this.wrap(o, o.r + 8);
          o.spr.setPosition(o.x, o.y).setRotation(o.rot);
          if (o.label) o.label.setPosition(o.x, o.y);
          if (o !== R.target && dist(o.x, o.y, S.x, S.y) < o.r + 17 && this.iframeMs <= 0) {
            var early = o.beamT && this.time.now - o.beamT < 1600;   /* let go of the beam before it was in */
            var hurt = this.loseLife("hit", early ? "YOU LET GO OF THE BEAM TOO SOON" : "HIT BY A ROCK");
            if (hurt && early) this.toast("Keep holding the beam until the rock touches your ship. A rock you let go of keeps coming and hits you.", 4200);
            if (hurt) {
              var ka = Math.atan2(S.y - o.y, S.x - o.x);
              S.vx = Math.cos(ka) * 220; S.vy = Math.sin(ka) * 220;
              if (!o.letter) this.rockShot(o, true);
              else { o.vx = -Math.cos(ka) * 80; o.vy = -Math.sin(ka) * 80; }
            }
            if (this._finishing) return;
          }
        }
        this.rockExtras(s, ms);
        if (this._finishing) return;
        this.rockSaucers(s, ms);
        if (this._finishing) return;
        /* keep the field busy: fuller and faster to refill every level and every wave */
        var P = this.rkParams(this.night, R.wave);
        var blanks = R.rocks.filter(function (o) { return !o.letter; }).reduce(function (a, o) { return a + o.size; }, 0);
        R.spawnCd -= ms;
        if (R.spawnCd <= 0 && blanks < P.cap) { this.rockFromEdge(3, null); R.spawnCd = P.spawnMs; }
      }
      /* v5.8.4: dark-elf saucers, Asteroids' flying saucers. A big one wanders across and fires anywhere;
         a small one is quicker and aims at the ship. Their shots break plain rocks too. */
      rockSaucers(s, ms) {
        var R = this.rk, S = R.ship, W = this.W, H = this.H, P = this.rkParams(this.night, R.wave), i, j, self = this;
        if (P.saucer && R.saucers.length === 0) {
          R.saucerCd -= ms;
          if (R.saucerCd <= 0) {
            R.saucerCd = P.saucerMs;
            var small = Math.random() < P.smallShare, fromL = Math.random() < 0.5;
            var sc = { small: small, x: fromL ? -40 : W + 40, y: rnd(H * 0.15, H * 0.85), vx: (fromL ? 1 : -1) * (small ? 170 : 110), vy: 0,
              turnCd: rnd(900, 1800), fireCd: 700, t: 0,
              spr: this.add.image(0, 0, "md-saucer").setDepth(16).setScale(small ? 0.62 : 1).setTint(small ? 0xffb0c8 : 0xffffff) };
            R.saucers.push(sc);
            snd("caw");
            if (!R.toldSaucer || (small && !R.toldSmall)) {
              R.toldSaucer = true; if (small) R.toldSmall = true;
              this.toast(small ? "A small dark-elf saucer! It aims at your ship. Shoot it for a big bonus." : "A dark-elf saucer! It shoots in all directions. Dodge its shots, or shoot it for a bonus.", 3600);
            }
          }
        }
        for (i = R.saucers.length - 1; i >= 0; i--) {
          var u = R.saucers[i];
          u.t += s; u.x += u.vx * s; u.y += u.vy * s;
          if (u.y < -20) u.y = H + 20; else if (u.y > H + 20) u.y = -20;
          u.turnCd -= ms;
          if (u.turnCd <= 0) { u.turnCd = rnd(900, 1800); u.vy = [0, -1, 1][Math.floor(rnd(0, 3))] * Math.abs(u.vx) * 0.6; }
          u.spr.setPosition(u.x, u.y + Math.sin(u.t * 6) * 2);
          u.fireCd -= ms;
          if (u.fireCd <= 0 && u.x > 0 && u.x < W) {
            u.fireCd = P.saucerFireMs * (u.small ? 0.85 : 1);
            var a = u.small ? Math.atan2(S.y - u.y, S.x - u.x) + rnd(-P.aimErr, P.aimErr) : rnd(0, Math.PI * 2);
            R.sBullets.push({ x: u.x, y: u.y, vx: Math.cos(a) * 330, vy: Math.sin(a) * 330, life: 1.6,
              spr: this.add.image(u.x, u.y, "md-bolt").setTint(0x9affb0).setDepth(17).setRotation(a) });
            snd("shot");
          }
          if (dist(u.x, u.y, S.x, S.y) < (u.small ? 26 : 34) && this.iframeMs <= 0) {
            this.loseLife("hit", "A DARK-ELF SAUCER RAMMED YOU");
            this.saucerDown(u, false);
            if (this._finishing) return;
            continue;
          }
          if (u.x < -70 || u.x > W + 70) { kill(u); R.saucers.splice(i, 1); }
        }
        for (i = R.sBullets.length - 1; i >= 0; i--) {
          var b = R.sBullets[i], gone = false;
          b.x += b.vx * s; b.y += b.vy * s; b.life -= s;
          this.wrap(b, 10);
          b.spr.setPosition(b.x, b.y);
          if (dist(b.x, b.y, S.x, S.y) < 18) {
            gone = true;
            if (this.iframeMs <= 0) this.loseLife("hit", "A DARK-ELF SAUCER SHOT YOU");
          } else {
            for (j = 0; j < R.rocks.length; j++) {
              var o = R.rocks[j];
              if (!o.letter && !o.orbitOf && !o.comet && dist(b.x, b.y, o.x, o.y) < o.r) { this.rockShot(o, true); gone = true; break; }
            }
          }
          if (gone || b.life <= 0) { b.spr.destroy(); R.sBullets.splice(i, 1); }
          if (this._finishing) return;
        }
      }
      saucerDown(u, byPlayer) {
        var R = this.rk, i = R.saucers.indexOf(u);
        if (i >= 0) R.saucers.splice(i, 1);
        this.burst(u.x, u.y, 0x9affb0, 22); snd("rock");
        kill(u);
        if (byPlayer) this.awardBonusPoints(u.small ? 2000 : 1000, u.small ? "Small saucer shot down" : "Saucer shot down");
      }
      /* comets (realm 2 on), a valkyrie (realm 8 on) and rock showers (realm 9 on) */
      rockExtras(s, ms) {
        var R = this.rk, S = R.ship, W = this.W, H = this.H, g = this.fxG, i, self = this;
        if (this.tier >= 1) {
          R.cometCd -= ms;
          if (R.cometCd <= 0) {
            R.cometCd = this.tier >= 5 ? rnd(4000, 6000) : rnd(8000, 11000);
            var n = this.tier >= 5 ? 2 : 1, side = Math.random() < 0.5 ? -1 : 1, ang = rnd(-0.35, 0.35);
            for (i = 0; i < n; i++) {
              var cy = clamp(S.y + rnd(-120, 120) + i * 90, 40, H - 40), x0 = side < 0 ? -60 : W + 60;
              var vx = -side * Math.cos(ang) * 560, vy = Math.sin(ang) * 560;
              R.warns.push({ kind: "comet", x0: x0, y: cy, vx: vx, vy: vy, t: 0 });
            }
          }
        }
        for (i = R.warns.length - 1; i >= 0; i--) {
          var w = R.warns[i]; w.t += ms;
          if (w.kind === "comet") {
            g.lineStyle(3, 0xff5a4a, 0.25 + 0.35 * Math.abs(Math.sin(w.t / 90)));
            g.lineBetween(w.x0, w.y, w.x0 + w.vx * 3, w.y + w.vy * 3);
            if (w.t >= 1000) { var c = this.rockMake(1, null, w.x0, w.y, w.vx, w.vy); c.comet = true; c.spr.setTint(0xffb070); R.warns.splice(i, 1); snd("rock"); }
          } else {
            g.fillStyle(0xff5a4a, 0.35 + 0.35 * Math.abs(Math.sin(w.t / 90)));
            var ex = w.side === 0 ? 16 : W - 16, k;
            for (k = 0; k < 3; k++) { var yy = H * (0.3 + k * 0.2); g.fillTriangle(ex, yy - 14, ex, yy + 14, ex + (w.side === 0 ? 24 : -24), yy); }
            if (w.t >= 1200) {
              for (k = 0; k < 5; k++) this.rockMake(1, null, w.side === 0 ? -30 : W + 30, H * (0.15 + k * 0.17), (w.side === 0 ? 1 : -1) * rnd(150, 200), rnd(-30, 30));
              R.warns.splice(i, 1); snd("rock");
            }
          }
        }
        if (this.tier >= 8) {
          R.showerCd -= ms;
          if (R.showerCd <= 0) { R.showerCd = rnd(14000, 18000); R.warns.push({ kind: "shower", side: Math.random() < 0.5 ? 0 : 1, t: 0 }); }
        }
        if (this.tier >= 7) {
          if (!R.valk) {
            R.valkCd -= ms;
            if (R.valkCd <= 0) {
              var fromL = Math.random() < 0.5, vy0 = Math.random() < 0.5 ? rnd(50, H * 0.25) : rnd(H * 0.75, H - 50);
              R.valk = { x: fromL ? -50 : W + 50, y: vy0, vx: fromL ? 140 : -140, fireCd: 900, t: 0, spr: this.add.image(0, 0, "rf-valk-0").setScale(0.8).setDepth(15).setFlipX(!fromL) };
            }
          } else {
            var V = R.valk; V.t += s; V.x += V.vx * s;
            V.spr.setPosition(V.x, V.y + Math.sin(V.t * 3) * 6).setTexture("rf-valk-" + (Math.floor(V.t * 4) % 2));
            V.fireCd -= ms;
            if (V.fireCd <= 0 && V.x > 0 && V.x < W) {
              V.fireCd = 1500;
              var dx = S.x - V.x, dy = S.y - V.y, dl = Math.sqrt(dx * dx + dy * dy) || 1;
              R.spears.push({ x: V.x, y: V.y, vx: dx / dl * 300, vy: dy / dl * 300, spr: this.add.image(V.x, V.y, "md-arrow").setTint(0xe0e8ff).setDepth(17).setRotation(Math.atan2(dy, dx) + Math.PI / 2) });
              snd("shot");
            }
            if (V.x < -80 || V.x > W + 80) { kill(V); R.valk = null; R.valkCd = rnd(14000, 20000); }
          }
        }
        for (i = R.spears.length - 1; i >= 0; i--) {
          var sp = R.spears[i], gone = false;
          sp.x += sp.vx * s; sp.y += sp.vy * s; sp.spr.setPosition(sp.x, sp.y);
          if (dist(sp.x, sp.y, S.x, S.y) < 22) { gone = true; this.loseLife("hit", "A VALKYRIE'S SPEAR HIT YOU"); }
          else if (sp.x < -40 || sp.x > W + 40 || sp.y < -40 || sp.y > H + 40) gone = true;
          if (gone) { sp.spr.destroy(); R.spears.splice(i, 1); }
          if (this._finishing) return;
        }
      }
      clear_rocks() {
        var R = this.rk, self = this;
        R.gen += 1;
        R.rocks.filter(function (o) { return o.letter; }).forEach(function (o) { self.burst(o.x, o.y, 0xffd84a, 10); self.rockRemove(o); });
      }

      /* ═══ 3. SUN CHARIOT — side-scrolling flyer ═══════════════════════════
         v5.7.5: harder from the start and climbing faster. The first Sun Chariot
         (level 6) plays like level 30 used to, and every later one adds more.
         Ravens throw feathers at Sol (after a short orange wind-up), wisps throw
         sparks from level 26, and from level 16 the orbs weave more and some are
         guarded by a raven flying in front of them that has to be shot first. */
      skyParams(n) {
        var eff = 22.5 + n * 1.25;          /* v5.8.4: climbs from level 1 (24) — 30 at level 6, 42 at 16, 80 at 46, 142 at 96 */
        var late = n - 1, tier = clamp(Math.floor((n - 1) / 10), 0, 9);
        return {
          eff: eff,
          spawnMs: Math.max(380, 1200 - eff * 6),
          ravenSp: 170 + Math.min(130, eff * 0.9),         /* + up to 70 random */
          wispSp: 110 + Math.min(90, eff * 0.6),
          wispHome: 60 + Math.min(80, eff * 0.5),
          wispShare: 0.25 + Math.min(0.2, eff / 600),
          throwP: clamp(0.35 + eff / 300, 0.35, 0.85),     /* chance a raven throws a feather */
          featherSp: 230 + Math.min(170, eff * 1.2),
          sparkP: n >= 26 ? clamp(0.3 + (eff - 55) / 250, 0.3, 0.7) : 0,
          sparkSp: 180 + Math.min(120, eff),
          orbSp: 90 + Math.min(100, eff * 0.6),                /* v5.7.9: faster from the start */
          bob: 34 + Math.min(56, late * 1.1),                  /* and they wobble more from the start */
          bobFr: 1.8 + Math.min(1.2, late * 0.015),
          guards: n >= 16 ? 1 + Math.floor((n - 16) / 20) : 0,  /* 1 at 16, 2 at 36, 3 at 56, 4 at 76 */
          /* v5.7.9: every orb sits in a turning shield with one gap; a bolt only gets through the gap. Each
             Sun Chariot level (one per realm) narrows the gap and spins it faster; from the fourth the shields
             reverse now and then, from the seventh they spin at different speeds. Orbs are smaller too. */
          tier: tier,
          orbScale: 0.8, coreR: 24, shieldR: 40,
          gapHalf: Math.max(35, 62 - tier * 3) * Math.PI / 180,  /* half the gap: 62° at level 6, 35° by level 96 */
          spin: Math.min(2.6, 1.3 + tier * 0.15),               /* radians a second */
          flip: tier >= 3,                                       /* shields reverse every 2.5–5 s */
          spinVar: tier >= 6 ? 0.45 : 0.15
        };
      }
      setup_sky() {
        this.drawSkyBg(50);
        this.skyHills();
        var x = this.W * 0.2, y = this.H / 2;
        /* v5.7.9: two horses pull the chariot; the team is drawn smaller than the old chariot on its own */
        this.teamS = 0.74; this.teamOff = (TEAM_W / 2 - TEAM_CAR) * this.teamS;
        this.chariot = this.add.image(x + this.teamOff, y, "md-team-0").setScale(this.teamS).setDepth(21);
        this.makeSol(x - 4, y - 17, "right", 1.2);
        this.sky = { bolts: [], foes: [], orbs: [], shots: [], cd: 0, spawnCd: 1800, t: 0, x: x, y: y, P: this.skyParams(this.night) };
      }
      skyHills() {
        var id = this.realm ? this.realm.id : "midgard", W = this.W, H = this.H;
        if (this.hillFar) this.hillFar.destroy();
        if (this.hillNear) this.hillNear.destroy();
        if (this.textures.exists("md-hills-far-" + id)) this.hillFar = this.add.tileSprite(0, H, W, 200, "md-hills-far-" + id).setOrigin(0, 1).setDepth(1);
        if (this.textures.exists("md-hills-near-" + id)) this.hillNear = this.add.tileSprite(0, H, W, 150, "md-hills-near-" + id).setOrigin(0, 1).setDepth(2);
      }
      resize_sky() { this.drawSkyBg(50); this.skyHills(); }
      answers_sky() {
        var K2 = this.sky, W = this.W, H = this.H, self = this, P = K2.P;
        K2.orbs.forEach(kill); K2.orbs = [];
        K2.foes = K2.foes.filter(function (f) { if (f.kind === "guard") { kill(f); return false; } return true; });
        var letters = shuffle(this.choiceLetters().slice()), n = letters.length;
        var lanes = []; for (var i = 0; i < n; i++) lanes.push(90 + (H - 190) * (n === 1 ? 0.5 : i / (n - 1)));
        shuffle(lanes);
        letters.forEach(function (L, k) {
          var o = { x: W + 90 + k * 200, by: lanes[k], y: lanes[k], ph: rnd(0, 6), letter: L, vx: -P.orbSp * rnd(0.9, 1.1),
            gap: rnd(0, Math.PI * 2), spin: P.spin * rnd(1 - P.spinVar, 1 + P.spinVar) * (Math.random() < 0.5 ? -1 : 1), flipCd: rnd(2500, 5000) };
          o.spr = self.add.image(o.x, o.y, "md-orb").setScale(P.orbScale).setDepth(13);
          o.label = self.letterText(o.x, o.y, L, 24, "#1a2a5a", "#ffffff");
          K2.orbs.push(o);
        });
        /* guards: right and wrong orbs alike, so a guard gives nothing away */
        shuffle(K2.orbs.slice()).slice(0, Math.min(P.guards, n)).forEach(function (o) { o.guarded = true; self.skyGuard(o); });
      }
      skyGuard(o) {
        var g = { kind: "guard", orb: o, x: o.x - 58, y: o.y, r: 22, t: rnd(0, 3), spr: this.add.image(o.x - 58, o.y, "rf-raven-0").setScale(0.72).setFlipX(true).setTint(0xd8c8ff).setDepth(15) };
        this.sky.foes.push(g);
        return g;
      }
      skyThrow(x, y, spark) {
        var K2 = this.sky, P = K2.P, tx = K2.x, ty = K2.y - 8, dx = tx - x, dy = ty - y, dl = Math.sqrt(dx * dx + dy * dy) || 1, sp = spark ? P.sparkSp : P.featherSp;
        var spr = spark ? this.add.image(x, y, "spark").setTint(0xbfe8ff).setScale(1.1).setDepth(17) : this.add.image(x, y, "md-feather").setDepth(17);
        K2.shots.push({ x: x, y: y, vx: dx / dl * sp, vy: dy / dl * sp, spark: !!spark, t: 0, spr: spr });
        snd(spark ? "beam" : "shot");
      }
      tick_sky(s, inp, ms) {
        var K2 = this.sky, W = this.W, H = this.H, P = K2.P, i, j, self = this;
        K2.t += s;
        if (this.hillFar) this.hillFar.tilePositionX += 30 * s;
        if (this.hillNear) this.hillNear.tilePositionX += 80 * s;
        /* flying */
        var vx = inp.ax * 380, vy = inp.ay * 380;
        if (inp.ay && inp.ax) { vx *= 0.7071; vy *= 0.7071; }
        K2.x = clamp(K2.x + vx * s, 60, W * 0.55); K2.y = clamp(K2.y + vy * s, 56, H - 44);
        this.chariot.setPosition(K2.x + this.teamOff, K2.y + Math.sin(K2.t * 3) * 2).setTexture("md-team-" + (Math.floor(K2.t * 7) % 2));
        this.player.setPosition(K2.x - 4, K2.y - 17 + Math.sin(K2.t * 3) * 2);
        this.blink(this.chariot); this.blink(this.player);
        /* sunbolts: the first thing in a bolt's path takes it (a guard shields its orb) */
        K2.cd -= ms;
        if (inp.fire && K2.cd <= 0) {
          var bx0 = K2.x + (TEAM_W - TEAM_CAR) * this.teamS;   /* from in front of the horses */
          K2.bolts.push({ x: bx0, y: K2.y - 4, spr: this.add.image(bx0, K2.y - 4, "md-bolt").setDepth(18) });
          K2.cd = 200; K2.fired = (K2.fired || 0) + 1; snd("shot");
        }
        for (i = K2.bolts.length - 1; i >= 0; i--) {
          var b = K2.bolts[i], x0 = b.x, best = null, bx = 1e9, isOrb = false, blocked = false;
          b.x += 820 * s; b.spr.x = b.x;
          K2.foes.forEach(function (f) { if (Math.abs(f.y - b.y) < f.r + 6 && f.x + f.r + 6 >= x0 && f.x - f.r - 6 <= b.x && f.x < bx) { best = f; bx = f.x; isOrb = false; } });
          /* an orb: the bolt meets its shield where it crosses the circle; the gap lets it through to the orb */
          K2.orbs.forEach(function (o) {
            var R = P.shieldR, dy = b.y - o.y;
            if (Math.abs(dy) >= R) return;
            var ex = o.x - Math.sqrt(R * R - dy * dy);
            if (ex < x0 - 2 || ex > b.x + 2 || ex >= bx) return;
            var open = Math.abs(angDiff(Math.atan2(dy, ex - o.x), o.gap)) < P.gapHalf;
            if (open && Math.abs(dy) > P.coreR) return;          /* through the gap but past the orb */
            best = o; bx = ex; isOrb = true; blocked = !open;
          });
          if (best && isOrb && blocked) {
            this.burst(bx, b.y, 0xffd84a, 6); snd("rock");
            best.hitT = 180;
            if (!K2.toldShield) { K2.toldShield = true; this.toast("The orb's shield stopped that sunbolt. Shoot when the gap faces you.", 2600); }
          } else if (best && !isOrb) {
            this.burst(best.x, best.y, best.kind === "wisp" ? 0xbfe8ff : 0x5a4a78, 12); snd("pop");
            kill(best); K2.foes.splice(K2.foes.indexOf(best), 1); this.addKill(best.x, best.y, "Sky cleared");
          } else if (best) {
            K2.orbs.splice(K2.orbs.indexOf(best), 1);
            kill(best);
            this.answerPick(best.letter, best.x, best.y);
          }
          if (best || b.x > W + 30) { b.spr.destroy(); K2.bolts.splice(i, 1); }
          if (this._finishing) return;
        }
        /* orbs drift past and come round again (weaving harder from level 16) */
        var g = this.fxG; g.clear();
        K2.orbs.forEach(function (o) {
          o.x += o.vx * s; o.y = o.by + Math.sin(K2.t * P.bobFr + o.ph) * P.bob;
          if (P.flip) { o.flipCd -= ms; if (o.flipCd <= 0) { o.spin = -o.spin; o.flipCd = rnd(2500, 5000); } }
          o.gap += o.spin * s;
          if (o.hitT) o.hitT = Math.max(0, o.hitT - ms);
          /* the shield: a thick gold ring with a dark edge, open where the gap is */
          var a0 = o.gap + P.gapHalf, a1 = o.gap - P.gapHalf + Math.PI * 2;
          g.lineStyle(10, 0x3a2608, 0.8); g.beginPath(); g.arc(o.x, o.y, P.shieldR, a0, a1, false); g.strokePath();
          g.lineStyle(6, o.hitT ? 0xffffff : 0xffd84a, 0.95); g.beginPath(); g.arc(o.x, o.y, P.shieldR, a0, a1, false); g.strokePath();
          if (o.x < -60) {
            o.x = W + 60 + rnd(0, 220); o.by = rnd(90, H - 100);
            if (o.guarded && !K2.foes.some(function (f) { return f.orb === o; })) self.skyGuard(o);   /* a new guard each time round */
          }
          o.spr.setPosition(o.x, o.y); o.label.setPosition(o.x, o.y);
        });
        /* ravens and wisps */
        K2.spawnCd -= ms;
        if (K2.spawnCd <= 0 && !this._between) {
          var wisp = Math.random() < P.wispShare, y0 = rnd(60, H - 60);
          var foe = wisp
            ? { kind: "wisp", x: W + 40, y: y0, by: y0, r: 20, sp: P.wispSp, spr: this.add.image(W + 40, y0, "rf-wisp").setScale(0.7).setDepth(15) }
            : { kind: "raven", x: W + 40, y: y0, by: y0, r: 22, sp: P.ravenSp + rnd(0, 70), amp: rnd(20, 80), fr: rnd(1.5, 3), t: 0, spr: this.add.image(W + 40, y0, "rf-raven-0").setScale(0.7).setFlipX(true).setDepth(15) };
          /* will it throw, and from how far along? */
          var pThrow = wisp ? P.sparkP : P.throwP;
          if (Math.random() < pThrow) foe.throwX = rnd(K2.x + 220, W - 60);
          K2.foes.push(foe);
          K2.spawnCd = P.spawnMs * rnd(0.7, 1.3);
        }
        for (i = K2.foes.length - 1; i >= 0; i--) {
          var e = K2.foes[i];
          if (e.kind === "guard") {
            if (K2.orbs.indexOf(e.orb) === -1) { kill(e); K2.foes.splice(i, 1); continue; }
            e.t += s; e.x = e.orb.x - 58; e.y = e.orb.y + Math.sin(e.t * 5) * 4;
            e.spr.setPosition(e.x, e.y).setTexture("rf-raven-" + (Math.floor(e.t * 4) % 2));
          } else if (e.kind === "wisp") {
            e.x -= e.sp * s;
            e.y += clamp(K2.y - e.y, -1, 1) * P.wispHome * s;
            e.spr.setPosition(e.x, e.y).setAlpha(0.75 + Math.sin(K2.t * 8 + i) * 0.2);
          } else {
            e.t += s; e.x -= e.sp * s; e.y = e.by + Math.sin(e.t * e.fr) * e.amp;
            e.spr.setPosition(e.x, e.y).setTexture("rf-raven-" + (Math.floor(e.t * 4) % 2));
          }
          /* the wind-up (it glows orange for a third of a second), then the throw */
          if (e.throwX != null && e.x <= e.throwX && !e.thrown) {
            e.wind = (e.wind || 0) + ms;
            if (e.kind === "raven") e.spr.setTint(0xffb060);
            if (e.wind >= 330) { e.thrown = true; e.spr.clearTint(); this.skyThrow(e.x - 16, e.y, e.kind === "wisp"); }
          }
          if (dist(e.x, e.y, K2.x, K2.y - 8) < e.r + 20 || dist(e.x, e.y, K2.x + 72 * this.teamS, K2.y) < e.r + 14) {   /* the car or the horses */
            var hurt = this.loseLife("hit", e.kind === "wisp" ? "A WISP HIT YOU" : "A RAVEN HIT YOU");
            if (hurt) { this.burst(e.x, e.y, 0xff9a7a, 12); kill(e); K2.foes.splice(i, 1); }
            if (this._finishing) return;
            continue;
          }
          if (e.x < -60 && e.kind !== "guard") { kill(e); K2.foes.splice(i, 1); }
        }
        /* feathers and sparks */
        for (i = K2.shots.length - 1; i >= 0; i--) {
          var sh = K2.shots[i];
          sh.t += s; sh.x += sh.vx * s; sh.y += sh.vy * s;
          sh.spr.setPosition(sh.x, sh.y).setRotation(sh.spark ? sh.t * 6 : Math.atan2(sh.vy, sh.vx) + Math.PI / 2 + Math.sin(sh.t * 10) * 0.3);
          var gone = sh.x < -30 || sh.x > W + 30 || sh.y < -30 || sh.y > H + 30;
          if (!gone && (dist(sh.x, sh.y, K2.x, K2.y - 8) < 26 || dist(sh.x, sh.y, K2.x + 72 * this.teamS, K2.y) < 18)) {
            gone = true;
            this.loseLife("hit", sh.spark ? "A WISP'S SPARK HIT YOU" : "HIT BY A FEATHER");
            if (this._finishing) { sh.spr.destroy(); K2.shots.splice(i, 1); return; }
          }
          if (gone) { sh.spr.destroy(); K2.shots.splice(i, 1); }
        }
      }
      clear_sky() {
        var K2 = this.sky, self = this;
        K2.foes.forEach(function (f) { self.burst(f.x, f.y, 0xffd84a, 6); kill(f); }); K2.foes = [];
        K2.orbs.forEach(function (o) { self.burst(o.x, o.y, 0xbfe8ff, 8); kill(o); }); K2.orbs = [];
        K2.shots.forEach(kill); K2.shots = [];
        K2.spawnCd = 1800;
        try { this.fxG.clear(); } catch (e) {}
      }

      /* ═══ 4. WOLF RING — arena ════════════════════════════════════════════
         v5.8.4: harder from the start and harder every level. One curve sets how many wolves run at
         once, how fast they come and run, how often they come in packs, how long a stone stays up
         and how long the head start is; the alpha wolf comes from level 12 and bigger packs from 21. */
      ringParams(n) {
        n = Math.max(1, n || 1);
        var eff = 25 + n * 1.1;                       /* 26 at level 1, 34 at 8, 133 at 98 */
        return {
          eff: eff,
          cap: Math.min(10, 3 + Math.floor(eff / 18)) + (this.tier >= 9 ? 1 : 0),   /* wolves running at once: 4 at first */
          spawnMs: Math.max(420, 1700 - eff * 10),
          wolfSp: Math.min(310, 160 + eff * 1.3),
          packP: clamp(0.15 + eff / 220, 0.15, 0.75),
          packMax: n >= 21 ? 3 : 2,
          upMs: Math.max(2400, 5600 - eff * 25) * (this.tier >= 7 ? 0.85 : 1),
          headStart: Math.max(1400, 3600 - eff * 15),
          alpha: n >= 12,
          alphaMs: Math.max(5000, 13000 - eff * 50),
          maxAlphas: this.tier >= 7 ? 2 : 1
        };
      }
      setup_ring() {
        this.rg = { arrows: [], wolves: [], stones: [], cd: 0, spawnCd: 2200, aim: -Math.PI / 2, frameMs: 0,
          ammo: 6, ammoMs: 0, alphaCd: 7000, drops: [], rav: null, ravCd: 5000 };
        this.ringLayout();
        this.makeSol(this.rg.cx, this.rg.cy, "up");
      }
      ringLayout() {
        var W = this.W, H = this.H, rg = this.rg, pal = this.pal;
        rg.cx = W / 2; rg.cy = H / 2; rg.R = Math.min(W, H) * 0.45;
        if (this.bgG) this.bgG.destroy();
        var g = this.bgG = this.add.graphics().setDepth(0), i;
        g.fillStyle(mix(pal.void, 0x000000, 0.1), 1); g.fillRect(0, 0, W, H);
        g.fillStyle(mix(pal.floorB, 0x000000, 0.45), 1); g.fillCircle(rg.cx, rg.cy, rg.R + 18);
        g.fillStyle(mix(pal.floorA, 0x000000, 0.32), 1); g.fillCircle(rg.cx, rg.cy, rg.R);
        g.lineStyle(2, mix(pal.accent || 0xffe08a, 0x000000, 0.35), 0.5); g.strokeCircle(rg.cx, rg.cy, rg.R * 0.5); g.strokeCircle(rg.cx, rg.cy, rg.R * 0.18);
        for (i = 0; i < 28; i++) {
          var a = i / 28 * Math.PI * 2;
          g.fillStyle(mix(pal.lip, 0x6a665e, 0.5), 1);
          g.fillCircle(rg.cx + Math.cos(a) * (rg.R + 10), rg.cy + Math.sin(a) * (rg.R + 10), 9);
        }
      }
      resize_ring() {
        var rg = this.rg, oldCx = rg.cx, oldCy = rg.cy;
        this.ringLayout();
        var dx = rg.cx - oldCx, dy = rg.cy - oldCy;
        if (this.player) { this.player.x += dx; this.player.y += dy; }
        rg.wolves.forEach(function (w) { w.x += dx; w.y += dy; });
        this.ringPlaceStones();
      }
      /* v5.7.5: the runestones start sunk in the ground. The Hati attack first; after a few seconds
         the stones rise one or two at a time, in a shuffled order, on random spots round the ring. Each
         stays up for a few seconds, then sinks and the next rise, so the right answer is only open
         for a moment and never before the wolves are on the move. */
      answers_ring() {
        var rg = this.rg, self = this;
        rg.stones.forEach(kill); rg.stones = [];
        var letters = shuffle(this.choiceLetters().slice());
        rg.stoneA0 = rnd(0, Math.PI * 2);
        rg.slotN = 8;
        letters.forEach(function (L) {
          var o = { letter: L, dead: false, state: "down", t: 0, slot: 0, x: -999, y: -999 };
          o.spr = self.add.image(0, 0, "md-stone").setDepth(9).setVisible(false);
          o.label = self.letterText(0, 0, L, 30, "#ffe07a", "#1a1008").setDepth(10).setVisible(false);
          rg.stones.push(o);
        });
        rg.queue = [];
        var GP = this.ringParams(this.night);
        rg.riseCd = GP.headStart;                         /* the wolves get a head start */
        rg.spawnCd = Math.min(rg.spawnCd, 600);
        rg.upMs = GP.upMs;                                /* how long a stone stays up */
      }
      ringSlotPos(k, drift) {
        var rg = this.rg, a = rg.stoneA0 + k / rg.slotN * Math.PI * 2 + (drift || 0);
        return { x: rg.cx + Math.cos(a) * (rg.R - 34), y: rg.cy + Math.sin(a) * (rg.R - 34) };
      }
      ringPlaceStones() {
        var self = this;
        this.rg.stones.forEach(function (o) {
          if (o.state === "down") return;
          var q = self.ringSlotPos(o.slot, o.drift); o.x = q.x; o.y = q.y;
          self.ringDrawStone(o);
        });
      }
      ringDrawStone(o) {
        var k = o.state === "rising" ? clamp(o.t / 400, 0, 1) : o.state === "sinking" ? clamp(1 - o.t / 350, 0, 1) : o.state === "up" ? 1 : 0;
        o.spr.setVisible(k > 0).setScale(1, Math.max(0.01, k)).setPosition(o.x, o.y + (1 - k) * 34);
        o.label.setVisible(k > 0.6).setAlpha(k).setPosition(o.x, o.y - 2);
      }
      /* raise a stone on a free spot, not right beside Sol */
      ringRaise(o) {
        var rg = this.rg, p = this.player, self = this, used = {}, free = [], k;
        rg.stones.forEach(function (q) { if (q !== o && q.state !== "down") used[q.slot] = true; });
        for (k = 0; k < rg.slotN; k++) if (!used[k]) { var q2 = this.ringSlotPos(k); if (!p || dist(q2.x, q2.y, p.x, p.y) > 130) free.push(k); }
        if (!free.length) for (k = 0; k < rg.slotN; k++) if (!used[k]) free.push(k);
        o.slot = free[Math.floor(Math.random() * free.length)] || 0;
        o.drift = 0; o.dv = this.tier >= 4 ? (Math.random() < 0.5 ? -1 : 1) * rnd(0.22, 0.38) * (this.tier >= 9 ? 1.3 : 1) : 0;   /* sliding stones from realm 5 */
        var pos = this.ringSlotPos(o.slot); o.x = pos.x; o.y = pos.y;
        o.state = "rising"; o.t = 0;
        this.burst(o.x, o.y + 20, 0x9a8a6a, 10);
        snd("rock");
        this.ringDrawStone(o);
      }
      ringStones(ms) {
        var rg = this.rg, self = this;
        rg.stones.forEach(function (o) {
          if (o.state === "down") return;
          o.t += ms;
          if (o.dv && o.state === "up" && !o.dead) { o.drift += o.dv * ms / 1000; var q3 = self.ringSlotPos(o.slot, o.drift); o.x = q3.x; o.y = q3.y; }
          if (o.state === "rising" && o.t >= 400) { o.state = "up"; o.t = 0; }
          else if (o.state === "up" && o.t >= (o.dead ? 1000 : rg.upMs)) { o.state = "sinking"; o.t = 0; }
          else if (o.state === "sinking" && o.t >= 350) { o.state = "down"; o.t = 0; if (!rg.stones.some(function (q) { return q.state !== "down"; })) rg.riseCd = 900; }
          self.ringDrawStone(o);
        });
        if (this._between) return;
        rg.riseCd -= ms;
        if (rg.riseCd > 0 || rg.stones.some(function (q) { return q.state !== "down"; })) return;
        /* next one or two, from a shuffled round of the stones still in play */
        var live = rg.stones.filter(function (q) { return !q.dead; });
        if (!live.length) return;
        rg.queue = rg.queue.filter(function (q) { return !q.dead; });
        if (!rg.queue.length) rg.queue = shuffle(live.slice());
        var n = Math.min(rg.queue.length, Math.random() < 0.5 ? 1 : 2);
        for (var i = 0; i < n; i++) this.ringRaise(rg.queue.shift());
        rg.riseCd = 99999;
      }
      tick_ring(s, inp, ms) {
        var rg = this.rg, p = this.player, i, j, self = this, g = this.fxG, now = this.time.now;
        g.clear();
        /* move */
        var ax = inp.ax, ay = inp.ay, l = Math.sqrt(ax * ax + ay * ay) || 1;
        p.x += ax / l * 320 * s; p.y += ay / l * 320 * s;
        var dc = dist(p.x, p.y, rg.cx, rg.cy), lim = rg.R - 34;
        if (dc > lim) { p.x = rg.cx + (p.x - rg.cx) / dc * lim; p.y = rg.cy + (p.y - rg.cy) / dc * lim; }
        this.ringStones(ms);
        rg.stones.forEach(function (o) {
          if (o.state !== "up") return;
          var d = dist(p.x, p.y, o.x, o.y);
          if (d < 40 && d > 0) { p.x = o.x + (p.x - o.x) / d * 40; p.y = o.y + (p.y - o.y) / d * 40; }
        });
        /* aim: the mouse or a finger if one is in use, else the way Sol walks */
        if (inp.ptr || now - this.ptr.t < 1500) rg.aim = Math.atan2(this.ptr.y - p.y, this.ptr.x - p.x);
        else if (ax || ay) rg.aim = Math.atan2(ay, ax);
        var ca = Math.cos(rg.aim), sa = Math.sin(rg.aim);
        this.playerFaceDir = Math.abs(ca) > Math.abs(sa) ? (ca > 0 ? "right" : "left") : (sa > 0 ? "down" : "up");
        this.tickPlayerCharAnim(ax, ay, false);
        this.blink(p);
        g.lineStyle(3, 0xffe07a, 0.55); g.lineBetween(p.x + ca * 26, p.y + sa * 26, p.x + ca * 58, p.y + sa * 58);
        g.fillStyle(0xffe07a, 0.7); g.fillTriangle(p.x + ca * 66, p.y + sa * 66, p.x + ca * 54 - sa * 7, p.y + sa * 54 + ca * 7, p.x + ca * 54 + sa * 7, p.y + sa * 54 - ca * 7);
        /* arrows */
        rg.cd -= ms;
        var quiver = this.tier >= 5;   /* realm 6 on: six arrows, each comes back after a moment */
        if (quiver) {
          if (rg.ammo < 6) { rg.ammoMs += ms; if (rg.ammoMs >= 650) { rg.ammoMs = 0; rg.ammo += 1; } } else rg.ammoMs = 0;
          for (var qi = 0; qi < 6; qi++) { g.fillStyle(qi < rg.ammo ? 0xffe07a : 0x5a5040, qi < rg.ammo ? 0.95 : 0.6); g.fillRect(p.x - 21 + qi * 7, p.y - 46, 4, 10); }
          if (inp.fire && rg.cd <= 0 && rg.ammo <= 0 && !rg.toldAmmo) { rg.toldAmmo = true; this.toast("Out of arrows! They come back one at a time.", 2200); }
        }
        if (inp.fire && rg.cd <= 0 && rg.arrows.length < 5 && (!quiver || rg.ammo > 0)) {
          if (quiver) rg.ammo -= 1;
          rg.arrows.push({ x: p.x + ca * 22, y: p.y + sa * 22, vx: ca * 720, vy: sa * 720, spr: this.add.image(p.x, p.y, "md-arrow").setRotation(rg.aim + Math.PI / 2).setDepth(18) });
          rg.cd = 260; snd("shot");
        }
        for (i = rg.arrows.length - 1; i >= 0; i--) {
          var a = rg.arrows[i], hit = false;
          a.x += a.vx * s; a.y += a.vy * s; a.spr.setPosition(a.x, a.y);
          for (j = 0; j < rg.wolves.length && !hit; j++) {
            var w = rg.wolves[j];
            if (w.state === "run" && dist(a.x, a.y, w.x, w.y) < (w.alpha ? 42 : 30)) {
              hit = true;
              if (w.alpha && w.hp > 1) {
                w.hp -= 1; this.burst(w.x, w.y, 0xd8dce4, 10); snd("yelp");
                var kb = Math.atan2(w.y - p.y, w.x - p.x); w.x += Math.cos(kb) * 50; w.y += Math.sin(kb) * 50;
                if (!rg.toldAlpha) { rg.toldAlpha = true; this.toast("The alpha wolf takes three arrows!", 2200); }
              } else { this.wolfScare(w); this.addKill(w.x, w.y, w.alpha ? "Alpha wolf chased off" : "Wolves chased off"); }
            }
          }
          for (j = 0; j < rg.stones.length && !hit; j++) {
            var o = rg.stones[j];
            var upEnough = o.state === "up" || (o.state === "rising" && o.t > 200);
            if (!o.dead && upEnough && dist(a.x, a.y, o.x, o.y) < 30) {
              hit = true;
              var res = this.answerPick(o.letter, o.x, o.y);
              if (res === "wrong") { o.dead = true; o.spr.setTint(0x555555); o.label.setText("✕").setColor("#8a8a8a"); o.state = "up"; o.t = 0; }
              else if (res === "partial") { o.dead = true; o.spr.setTint(0xffe07a); o.state = "up"; o.t = 0; }
            }
          }
          if (hit || dist(a.x, a.y, rg.cx, rg.cy) > rg.R + 90) { a.spr.destroy(); rg.arrows.splice(i, 1); }
          if (this._finishing) return;
        }
        /* the Hati */
        var running = rg.wolves.filter(function (w) { return w.state === "run"; }).length;
        rg.spawnCd -= ms;
        var GP = this.ringParams(this.night), cap = GP.cap;
        if (rg.spawnCd <= 0 && !this._between && running < cap) {
          var sa2 = rnd(0, Math.PI * 2), pk;
          this.ringWolf(sa2, false);
          /* packs: one or two more from the same side */
          for (pk = 1; pk < GP.packMax && running + pk < cap + 1; pk++) { if (Math.random() < GP.packP) this.ringWolf(sa2 + pk * 0.2, false); else break; }
          if (Math.random() < 0.25) snd("howl");
          rg.spawnCd = GP.spawnMs * rnd(0.75, 1.25) * (this.tier >= 9 ? 0.75 : 1);
        }
        if (GP.alpha && !this._between) {
          rg.alphaCd -= ms;
          var alphas = rg.wolves.filter(function (w) { return w.alpha && w.state === "run"; }).length;
          if (rg.alphaCd <= 0 && alphas < GP.maxAlphas) { this.ringWolf(rnd(0, Math.PI * 2), true); snd("howl"); rg.alphaCd = GP.alphaMs * rnd(0.8, 1.2); }
        }
        if (this.tier >= 3) this.ringRavens(s, ms);
        rg.frameMs += ms;
        var frame = "hati" + (1 + Math.floor(rg.frameMs / 110) % 3);
        for (i = rg.wolves.length - 1; i >= 0; i--) {
          var wv = rg.wolves[i], tx, ty;
          if (wv.state === "run") { tx = p.x; ty = p.y; }
          else { tx = wv.x + (wv.x - rg.cx); ty = wv.y + (wv.y - rg.cy); }
          var dx = tx - wv.x, dy = ty - wv.y, dl = Math.sqrt(dx * dx + dy * dy) || 1, spd = wv.state === "run" ? wv.sp : 420;
          if (wv.state === "run") {
            wv.t = (wv.t || 0) + s;
            /* leaping wolves crouch (a clear pause), then leap the last stretch */
            if (wv.leap && !wv.leapt && dl < 190) { wv.crouch = (wv.crouch || 0) + ms; wv.spr.setTint(0xffc080); if (wv.crouch < 380) spd = 0; else { wv.leapt = true; wv.dash = 480; wv.spr.clearTint(); } }
            if (wv.dash > 0) { wv.dash -= ms; spd *= 2.3; }
            if (wv.zig && dl > 70) { var zz = Math.sin(wv.t * 6 + wv.ph) * spd * 0.8; wv.x += -dy / dl * zz * s; wv.y += dx / dl * zz * s; }
          }
          wv.x += dx / dl * spd * s; wv.y += dy / dl * spd * s;
          wv.spr.setPosition(wv.x, wv.y).setTexture(frame).setFlipX(dx < 0);
          if (wv.state === "flee") {
            wv.spr.setAlpha(Math.max(0, wv.spr.alpha - s * 1.2));
            if (dist(wv.x, wv.y, rg.cx, rg.cy) > rg.R + 160 || wv.spr.alpha <= 0.02) { kill(wv); rg.wolves.splice(i, 1); }
            continue;
          }
          if (dist(wv.x, wv.y, p.x, p.y) < (wv.alpha ? 44 : 36)) {
            var hurt = this.loseLife("hit", "A WOLF CAUGHT YOU");
            if (hurt) rg.wolves.forEach(function (o) { if (o.state === "run" && dist(o.x, o.y, p.x, p.y) < 280) self.wolfScare(o, true); });
            if (this._finishing) return;
          }
        }
      }
      ringWolf(ang, alpha) {
        var rg = this.rg, wx = rg.cx + Math.cos(ang) * (rg.R + 70), wy = rg.cy + Math.sin(ang) * (rg.R + 70);
        var w = { x: wx, y: wy, state: "run", sp: this.ringParams(this.night).wolfSp * rnd(0.9, 1.1) * (alpha ? 0.85 : 1), ph: rnd(0, 6),
          alpha: !!alpha, hp: alpha ? 3 : 1, zig: !alpha && this.tier >= 6 && Math.random() < 0.5, leap: !alpha && this.tier >= 8 && Math.random() < 0.4,
          spr: this.add.image(wx, wy, "hati1").setScale(alpha ? 0.74 : 0.5).setDepth(16) };
        if (alpha) w.spr.setTint(0xb8c0cc);
        rg.wolves.push(w);
        return w;
      }
      /* realm 4 on: a raven crosses the ring and drops poo; a shadow grows where it will land */
      ringRavens(s, ms) {
        var rg = this.rg, p = this.player, W = this.W, H = this.H, g = this.fxG, i, self = this;
        if (!rg.rav) {
          rg.ravCd -= ms;
          if (rg.ravCd <= 0 && !this._between) {
            var fromL = Math.random() < 0.5, y0 = rnd(rg.cy - rg.R * 0.6, rg.cy + rg.R * 0.6);
            rg.rav = { x: fromL ? -40 : W + 40, y: y0, vx: fromL ? 200 : -200, dropped: false, t: 0, spr: this.add.image(0, y0, "rf-raven-0").setScale(0.8).setDepth(20).setFlipX(!fromL) };
            snd("caw");
          }
        } else {
          var r = rg.rav; r.t += s; r.x += r.vx * s;
          r.spr.setPosition(r.x, r.y).setTexture("rf-raven-" + (Math.floor(r.t * 4) % 2));
          if (!r.dropped && Math.abs(r.x - p.x) < 60) { r.dropped = true; rg.drops.push({ x: p.x + rnd(-30, 30), y: p.y + rnd(-30, 30), t: 0 }); }
          if (r.x < -60 || r.x > W + 60) { kill(r); rg.rav = null; rg.ravCd = rnd(5000, 8000); }
        }
        for (i = rg.drops.length - 1; i >= 0; i--) {
          var d = rg.drops[i]; d.t += ms;
          var k = clamp(d.t / 1000, 0, 1);
          g.fillStyle(0x000000, 0.12 + 0.3 * k); g.fillEllipse(d.x, d.y + 8, 20 + 30 * k, 10 + 14 * k);
          if (d.t >= 1000) {
            var sp = this.add.image(d.x, d.y, "md-splat").setDepth(8).setScale(0.8);
            this.tweens.add({ targets: sp, alpha: 0, delay: 500, duration: 700, onComplete: function () { sp.destroy(); } });
            snd("pop");
            if (dist(p.x, p.y, d.x, d.y) < 34) this.loseLife("hit", "SPLAT! BIRD POO GOT YOU");
            rg.drops.splice(i, 1);
            if (this._finishing) return;
          }
        }
      }
      wolfScare(w, quiet) {
        w.state = "flee";
        w.spr.setTint(0xbfd8ff);
        if (!quiet) { this.burst(w.x, w.y, 0xbfd8ff, 10); snd("yelp"); }
      }
      clear_ring() {
        var rg = this.rg, self = this;
        rg.wolves.forEach(function (w) { if (w.state === "run") self.wolfScare(w, true); });
        rg.stones.forEach(function (o) { self.burst(o.x, o.y, 0xffe07a, 8); kill(o); });
        rg.stones = [];
        rg.spawnCd = 2400;
      }

      /* ═══ 5. SCYLLA AND CHARYBDIS — steering (v5.10, the Odyssey build) ════
         Odyssey 12: the galley sails up the strait (the water scrolls down the
         screen toward it). Gates of two rock pillars come down, each marked
         with a letter; sailing between a gate's pillars picks that letter. A
         row holds two or three gates with open water between them, so a gate
         can be passed by; its letter comes round again in a later row. On the
         right, Charybdis: a whirlpool that tugs at the ship (from level 19),
         and every few seconds darkens and spins faster for about a second,
         then surges and drags the ship toward her; her dark centre costs a
         life. On the left, Scylla's cliff: a shadow and a closing ring on the
         water mark where a head will strike, then the head lunges there and
         snatches a crewman (a life) if the ship is under it. Scylla's reach
         ends partway across the strait, so the safe water is next to
         Charybdis — Circe's choice. A wrong gate, a pillar or a lone rock
         also cost a life. straitParams sets one curve for all of it. */
      straitParams(n) {
        n = Math.max(1, n || 1);
        return {
          scroll: (95 + n * 1.3) * (n >= 99 ? 1.1 : 1),          /* px a second: 107 at 9, 159 at 49, 246 at 99 */
          rowGap: Math.max(300, 480 - n * 1.8),                  /* px between rows of gates */
          gateW: Math.max(78, 150 - n * 0.75) * (n >= 89 ? 0.94 : 1),   /* the opening between a gate's pillars */
          sway: n >= 39 ? Math.min(80, 24 + (n - 39) * 0.8) : 0,  /* gates swaying side to side, px */
          rockP: n >= 49 ? Math.min(0.85, 0.3 + (n - 49) * 0.008 + (n >= 89 ? 0.15 : 0)) : 0,   /* a lone rock in a row */
          basePull: n >= 19 ? Math.min(90, 20 + (n - 19) * 0.8) : 0,   /* Charybdis's tug between surges, px a second */
          surgePull: 120 + n * 1.7,                              /* her pull in a surge (the ship steers at 330) */
          surgeEvery: Math.max(3200, 9800 - n * 65) * (n >= 89 ? 0.9 : 1),   /* calm water between surges, ms */
          surgeMs: 1700 + n * 12,                                /* how long a surge lasts */
          surgeWarn: Math.max(800, 1100 - n * 3),                /* the warning: dark, fast water first */
          coreR: 40 + n * 0.25,                                  /* her deadly centre */
          heads: n >= 79 ? 4 : n >= 59 ? 3 : n >= 29 ? 2 : 1,    /* Scylla's heads striking at once */
          strikeEvery: Math.max(1000, 4300 - n * 33),            /* ms between strikes */
          strikeWarn: Math.max(560, 1250 - n * 7),               /* the shadow on the water before a strike */
          strikeMs: Math.max(110, 280 - n * 1.7),                /* the lunge */
          strikeR: 40 + n * 0.12,                                /* what a strike covers */
          aimErr: Math.max(0, 70 - n * 0.7),                     /* how far from the ship she aims */
          reach: Math.min(0.9, 0.55 + n * 0.0035),               /* how far across the strait her necks reach */
          again: n >= 69                                         /* a head that misses strikes again at once */
        };
      }
      setup_strait() {
        ensureStraitArt(this);
        var P = this.straitParams(this.night);
        var S = this.st = { rows: [], heads: [], dead: [], queue: [], dist: 0, t: 0, rowMs: 0, rowCd: 0, kx: 0, ky: 0, wA: 0, frameMs: 0, frame: 0,
          surge: { state: "calm", t: 0, cd: P.surgeEvery * 0.6 }, headCd: Math.max(2600, P.strikeEvery), P: P };
        this.cameras.main.setBackgroundColor(ST.deep);
        S.water = this.add.tileSprite(0, 0, this.W, this.H, "md-strait-water").setOrigin(0, 0).setDepth(0);
        S.cliff = this.add.tileSprite(0, 0, 128, this.H, "md-strait-cliff").setOrigin(0, 0).setDepth(5);
        S.shore = this.add.tileSprite(0, 0, 64, this.H, "md-strait-shore").setOrigin(0, 0).setDepth(5);
        S.whirl = this.add.image(0, 0, "md-strait-whirl").setDepth(3);
        S.foam = this.add.image(0, 0, "md-strait-foam").setDepth(4).setAlpha(0.85);
        S.fig = this.add.image(0, 0, "md-strait-fig").setDepth(6);
        S.lowG = this.add.graphics().setDepth(7);
        S.neckG = this.add.graphics().setDepth(21);
        S.label = this.add.text(0, 0, "", { fontFamily: "Georgia, 'Palatino Linotype', serif", fontSize: 17, color: "#efe6d2", fontStyle: "bold", stroke: "#140c0a", strokeThickness: 5 }).setOrigin(1, 1).setDepth(23);
        this.straitLayout();
        var x = S.chanL + (S.chanR - S.chanL) * 0.4, y = this.H - 110;
        S.ship = { x: x, y: y, spr: this.add.image(x, y, "md-strait-ship-0").setScale(0.9).setDepth(20) };
        this.makeSol(x, y, "up").setVisible(false);   /* Odysseus steers; the sprite stays for coin pop-ups */
      }
      straitLayout() {
        var S = this.st, W = this.W, H = this.H, P = S.P;
        S.cliffW = clamp(Math.round(W * 0.085), 56, 120);
        S.shoreW = clamp(Math.round(W * 0.035), 24, 44);
        S.cliffEdge = S.cliffW * 0.86;                      /* where Scylla's cliff meets the sea */
        S.wx = W - S.shoreW - 30; S.wy = H * 0.56;           /* Charybdis, under the fig tree's rock */
        S.wR = clamp(P.coreR * 2.9, 120, 200);
        S.minX = S.cliffEdge + 18; S.maxX = W - S.shoreW * 0.55 - 12;
        S.yMin = H * 0.42; S.yMax = H - 52;
        S.chanL = S.cliffEdge + 22; S.chanR = Math.max(S.chanL + 200, S.wx - P.coreR - 56);
        S.reachX = S.chanL + (S.wx - S.chanL) * P.reach;     /* Scylla's necks reach no further */
        S.water.setSize(W, H);
        S.cliff.setSize(S.cliffW, H).setTileScale(S.cliffW / 128, S.cliffW / 128);
        S.shore.setPosition(W - S.shoreW, 0).setSize(S.shoreW, H).setTileScale(S.shoreW / 64, S.shoreW / 64);
        S.whirl.setPosition(S.wx, S.wy).setScale(S.wR / 128);
        S.foam.setPosition(S.wx, S.wy).setScale(S.wR / 128);
        S.fig.setPosition(W - S.shoreW * 0.4, S.wy - S.wR * 0.62);
        S.label.setPosition(S.wx + 10, S.wy - S.wR * 0.5);
      }
      resize_strait(oldW, oldH) {
        var S = this.st, fx = this.W / (oldW || this.W), fy = this.H / (oldH || this.H);
        this.straitLayout();
        S.ship.x = clamp(S.ship.x * fx, S.minX, S.maxX); S.ship.y = clamp(S.ship.y * fy, S.yMin, S.yMax);
        S.rows.forEach(function (r) { r.y *= fy; r.gates.forEach(function (g) { g.base *= fx; }); r.rocks.forEach(function (k) { k.base *= fx; }); });
        S.heads.forEach(function (h) { h.x *= fx; h.y *= fy; h.ay *= fy; });
      }
      /* the letters still in play: not picked wrong, not found yet */
      straitLive() {
        var S = this.st, self = this;
        return this.choiceLetters().filter(function (L) { return S.dead.indexOf(L) === -1 && self.extracted.indexOf(L) === -1; });
      }
      answers_strait() {
        var S = this.st, self = this;
        S.rows.forEach(function (r) { self.straitKillRow(r); });
        S.rows = []; S.dead = []; S.queue = [];
        S.dist = S.P.rowGap - Math.min(S.P.rowGap, S.P.scroll * 1.2);   /* the first row comes in about a second */
      }
      /* a row of gates (letters) at height y; xs (optional) are the gates' centres */
      straitRow(letters, y, xs) {
        var S = this.st, P = S.P, self = this, pr = 18, half = P.gateW / 2, n = letters.length;
        var row = { y: y, gates: [], rocks: [], done: false, rel: null, ph: rnd(0, 6) };
        var slot = (S.chanR - S.chanL) / Math.max(1, n), hf = half + pr * 2;
        letters.forEach(function (L, k) {
          var cx = xs && xs[k] != null ? xs[k] : S.chanL + slot * k + hf + rnd(0, Math.max(0, slot - hf * 2));
          var g = { letter: L, base: cx, cx: cx, half: half, state: "live", posts: [], labels: [] };
          [-1, 1].forEach(function (sd) {
            g.posts.push(self.add.image(cx + sd * (half + pr), y, "md-strait-pillar").setDepth(8).setScale(0.86));
            g.labels.push(self.add.text(cx + sd * (half + pr), y, L, { fontFamily: "Georgia, 'Palatino Linotype', serif", fontSize: 22, color: ST.glaze, fontStyle: "bold" }).setOrigin(0.5).setDepth(9));
          });
          if (S.dead.indexOf(L) !== -1) self.straitPaint(g, "wrong");
          else if (self.extracted.indexOf(L) !== -1) self.straitPaint(g, "right");
          row.gates.push(g);
        });
        /* a lone rock in the open water between the gates (level 49 on) */
        if (!xs && P.rockP > 0 && Math.random() < P.rockP) {
          for (var t = 0; t < 14; t++) {
            var rx = rnd(S.chanL + pr, S.chanR - pr);
            if (row.gates.every(function (g) { return Math.abs(rx - g.base) > g.half + pr * 3 + 34; })) {
              row.rocks.push({ base: rx, x: rx, spr: this.add.image(rx, y, "md-strait-rock").setDepth(8).setScale(0.8).setRotation(rnd(0, 6)) });
              break;
            }
          }
        }
        S.rows.push(row);
        return row;
      }
      straitSpawnRow() {
        var S = this.st, P = S.P, live = this.straitLive(), pick = [];
        if (!live.length) return null;
        var foot = P.gateW + 4 * 18 + 70, per = Math.min(live.length, clamp(Math.floor((S.chanR - S.chanL) / foot), 1, 3));
        S.queue = S.queue.filter(function (L) { return live.indexOf(L) !== -1; });
        while (pick.length < per) {
          if (!S.queue.length) S.queue = shuffle(live.filter(function (L) { return pick.indexOf(L) === -1; }));
          if (!S.queue.length) break;
          var L = S.queue.shift();
          if (pick.indexOf(L) === -1) pick.push(L);
        }
        return this.straitRow(shuffle(pick), -44);
      }
      straitPaint(g, state) {
        g.state = state;
        g.posts.forEach(function (p) { p.setTint(state === "wrong" ? 0x8a8a8a : 0xbff0c8); });
        g.labels.forEach(function (t) { t.setText(state === "wrong" ? "✕" : "✓").setColor(state === "wrong" ? "#5a5a5a" : "#1f6a3a"); });
      }
      straitMark(L, state) {
        var self = this;
        this.st.rows.forEach(function (r) { r.gates.forEach(function (g) { if (g.letter === L) self.straitPaint(g, state); }); });
      }
      straitKillRow(r) {
        r.gates.forEach(function (g) { g.posts.concat(g.labels).forEach(function (o) { try { o.destroy(); } catch (e) {} }); });
        r.rocks.forEach(function (k) { try { k.spr.destroy(); } catch (e) {} });
      }
      /* the ship sailed between a gate's pillars */
      straitThrough(g) {
        var res = this.answerPick(g.letter, g.cx, this.st.ship.y - 24);
        if (res === "wrong") { if (this.st.dead.indexOf(g.letter) === -1) this.st.dead.push(g.letter); this.straitMark(g.letter, "wrong"); }
        else if (res === "partial") this.straitMark(g.letter, "right");
        return res;
      }
      /* the hull: four circles along the keel */
      straitHull() {
        var sh = this.st.ship;
        return [-34, -11, 11, 34].map(function (d) { return { x: sh.x, y: sh.y + d }; });
      }
      straitTouch(x, y, r) {
        return this.straitHull().some(function (c) { return dist(c.x, c.y, x, y) < r + 10; });
      }
      straitBump(x, y, label) {
        var S = this.st;
        this.burst(x, y, 0x9fd3d6, 12);
        snd("rock");
        this.loseLife("hit", label);
        S.kx = (S.ship.x >= x ? 1 : -1) * 420;
      }
      /* Scylla: a head will strike at (x, y) after `warn` ms */
      straitStrike(x, y, warn, follow) {
        var S = this.st, H = this.H;
        x = clamp(x, S.minX, Math.max(S.minX, S.reachX)); y = clamp(y, S.yMin - 30, S.yMax + 10);
        var ay = clamp(y - rnd(60, 150), 30, H - 30);
        var h = { x: x, y: y, t: 0, warn: warn, phase: "warn", ay: ay, follow: !!follow, tip: null,
          spr: this.add.image(S.cliffEdge, ay, "md-strait-head").setDepth(22).setAlpha(0) };
        S.heads.push(h);
        if (!S.toldScylla) { S.toldScylla = true; this.toast("Scylla! A dark shadow on the water shows where her head will strike. Steer out from under it.", 4200); }
        return h;
      }
      straitVolley() {
        var S = this.st, P = S.P, sh = S.ship, self = this;
        var busy = S.heads.filter(function (h) { return h.phase === "warn" || h.phase === "strike"; }).length, k = Math.max(0, P.heads - busy), i;
        for (i = 0; i < k; i++) {
          var a = rnd(0, Math.PI * 2), r = i === 0 ? rnd(0, P.aimErr) : rnd(P.strikeR * 1.9, P.strikeR * 3.4);   /* the first at the ship, the others round it */
          self.straitStrike(sh.x + Math.cos(a) * r, sh.y + Math.sin(a) * r * 0.8, P.strikeWarn + i * 180);
        }
        if (k) snd("caw");
      }
      straitNeck(h, tip) {
        var S = this.st, g = S.neckG, ax = S.cliffEdge - 34, ay = h.ay;
        var cx = S.cliffEdge + (tip.x - S.cliffEdge) * 0.35, cy = Math.min(ay, tip.y) - Math.min(46, Math.abs(tip.x - ax) * 0.25), i, pts = [];
        for (i = 0; i <= 22; i++) { var u = i / 22, v = 1 - u; pts.push({ x: v * v * ax + 2 * v * u * cx + u * u * tip.x, y: v * v * ay + 2 * v * u * cy + u * u * tip.y }); }
        /* a smooth tube: thick strokes, with a disc on every joint to round it */
        g.lineStyle(20, 0x1b4a40, 1); g.strokePoints(pts);
        g.fillStyle(0x1b4a40, 1); pts.forEach(function (p) { g.fillCircle(p.x, p.y, 10); });
        g.lineStyle(14, 0x3f8f7a, 1); g.strokePoints(pts);
        g.fillStyle(0x3f8f7a, 1); pts.forEach(function (p) { g.fillCircle(p.x, p.y, 7); });
        g.lineStyle(3, 0x7cc4a8, 0.7); g.strokePoints(pts.map(function (p) { return { x: p.x, y: p.y - 3 }; }));
        var p0 = pts[pts.length - 2];
        h.spr.setPosition(tip.x, tip.y).setRotation(Math.atan2(tip.y - p0.y, tip.x - p0.x)).setAlpha(1);
      }
      tick_strait(s, inp, ms) {
        var S = this.st, P = S.P, W = this.W, H = this.H, sh = S.ship, self = this, i, lg = S.lowG;
        S.t += s;
        lg.clear(); S.neckG.clear();
        var dy = P.scroll * s;
        S.water.tilePositionY -= dy;
        S.cliff.tilePositionY -= dy / S.cliff.tileScaleY;
        S.shore.tilePositionY -= dy / S.shore.tileScaleY;
        /* steering: keys or the pad; Space, ROW or a mouse button pulls hard for a moment */
        S.rowCd -= ms; S.rowMs = Math.max(0, S.rowMs - ms);
        if (inp.fire && S.rowCd <= 0) {
          S.rowMs = 650; S.rowCd = 1900; S.rows0 = (S.rows0 || 0) + 1;
          try { if (window.SolRealms && SolRealms.hiss) SolRealms.hiss(0.25, 900, 0.04); } catch (eH) {}
        }
        var boost = S.rowMs > 0 ? 1.7 : 1, diag = inp.ax && inp.ay ? 0.7071 : 1;
        var vx = inp.ax * 330 * boost * diag, vy = inp.ay * 240 * boost * diag;
        /* Charybdis pulls toward her centre: a tug between surges, hard in a surge */
        var su = S.surge, pull = P.basePull;
        if (su.state === "surge") pull = Math.max(pull, P.surgePull);
        var dxw = S.wx - sh.x, dyw = S.wy - sh.y, dw = Math.sqrt(dxw * dxw + dyw * dyw) || 1;
        var f = pull * (0.55 + 0.45 * clamp(1 - dw / (W * 0.8), 0, 1)), px = dxw / dw * f, py = dyw / dw * f * 0.6;
        sh.x = clamp(sh.x + (vx + px + S.kx) * s, S.minX, S.maxX);
        sh.y = clamp(sh.y + (vy + py + S.ky) * s, S.yMin, S.yMax);
        S.kx *= Math.pow(0.03, s); S.ky *= Math.pow(0.03, s);
        S.frameMs += ms;
        if (S.frameMs >= (S.rowMs > 0 ? 130 : 300)) { S.frameMs = 0; S.frame = 1 - S.frame; }
        sh.spr.setPosition(sh.x, sh.y).setTexture("md-strait-ship-" + S.frame).setRotation(clamp((vx + px + S.kx) / 1500, -0.25, 0.25));
        this.blink(sh.spr);
        this.player.setPosition(sh.x, sh.y);
        /* the wake */
        var wa = S.rowMs > 0 ? 0.6 : 0.38;
        for (i = 0; i < 5; i++) {
          var wy = sh.y + 50 + i * 11 + ((S.t * P.scroll) % 11), ww = 8 + i * 5;
          lg.fillStyle(0xefe6d2, wa * (1 - i / 5)); lg.fillEllipse(sh.x - ww, wy, 7, 3); lg.fillEllipse(sh.x + ww, wy, 7, 3);
        }
        /* Charybdis: calm → warning (dark, fast water) → surge → calm */
        su.t += ms;
        if (su.state === "calm" && su.t >= su.cd) {
          su.state = "warn"; su.t = 0;
          try { if (window.SolRealms && SolRealms.hiss) SolRealms.hiss(0.9, 300, 0.05); } catch (eS) {}
          if (!S.toldSurge) { S.toldSurge = true; this.toast("Charybdis is about to surge! When her water turns dark and spins fast, steer away from the whirlpool.", 4200); }
        } else if (su.state === "warn" && su.t >= P.surgeWarn) { su.state = "surge"; su.t = 0; }
        else if (su.state === "surge" && su.t >= P.surgeMs) { su.state = "calm"; su.t = 0; su.cd = P.surgeEvery; }
        var wk = su.state === "warn" ? clamp(su.t / P.surgeWarn, 0, 1) : su.state === "surge" ? 1 : 0;
        S.wA += (0.9 + wk * 3.6) * s;
        var tint = mix(0xffffff, 0x4a5878, wk), pulse = su.state === "surge" ? 1 + 0.05 * Math.sin(S.t * 9) : 1;
        S.whirl.setRotation(-S.wA).setTint(tint).setScale(S.wR / 128 * pulse);
        S.foam.setRotation(-S.wA * 1.6).setAlpha(0.85 - wk * 0.35).setScale(S.wR / 128 * pulse);
        S.label.setText(su.state === "warn" ? "Charybdis stirs…" : su.state === "surge" ? "CHARYBDIS SURGES!" : "");
        if (su.state === "surge") {
          /* foam streaks spiralling in */
          lg.lineStyle(3, 0x9fd3d6, 0.45);
          for (i = 0; i < 12; i++) {
            var rr = S.wR * 1.9 - ((S.t * 170 + i * 41) % (S.wR * 1.5)), a0 = i / 12 * Math.PI * 2 - S.t * 2.2;
            lg.beginPath(); lg.arc(S.wx, S.wy, rr, a0, a0 + 0.45, false); lg.strokePath();
          }
        }
        /* her dark centre: a life, and she spits the ship back out */
        if (dw < P.coreR + 8) {
          this.burst(sh.x, sh.y, 0x9fd3d6, 22);
          this.loseLife("hit", "CHARYBDIS SWALLOWED YOUR SHIP");
          S.kx = -720; S.ky = (sh.y < S.wy ? -1 : 1) * 160;
          if (su.state !== "calm") { su.state = "calm"; su.t = 0; su.cd = P.surgeEvery; }
          if (this._finishing) return;
        }
        /* the gates come down the strait */
        S.dist += dy;
        if (!this._between && S.dist >= P.rowGap) { S.dist = 0; this.straitSpawnRow(); }
        var rows = S.rows.slice();
        for (i = 0; i < rows.length; i++) {
          var row = rows[i];
          if (S.rows.indexOf(row) === -1) continue;
          row.y += dy;
          /* the whole row sways together, kept inside the channel */
          var off = 0;
          if (P.sway) {
            var lo = 1e9, hi = -1e9;
            row.gates.forEach(function (g) { lo = Math.min(lo, g.base - g.half - 36); hi = Math.max(hi, g.base + g.half + 36); });
            row.rocks.forEach(function (k) { lo = Math.min(lo, k.base - 18); hi = Math.max(hi, k.base + 18); });
            off = clamp(Math.sin(S.t * 1.1 + row.ph) * P.sway, S.chanL - lo, S.chanR - hi);
            if (S.chanL - lo > S.chanR - hi) off = 0;
          }
          row.gates.forEach(function (g) {
            g.cx = g.base + off;
            [-1, 1].forEach(function (sd, k) { var gx = g.cx + sd * (g.half + 18); g.posts[k].setPosition(gx, row.y); g.labels[k].setPosition(gx, row.y); });
            /* the rope of floats across the opening */
            var col = g.state === "wrong" ? 0x8a8a8a : g.state === "right" ? 0x7af0a0 : 0xe8b04a;
            lg.lineStyle(2, 0xefe6d2, 0.45); lg.lineBetween(g.cx - g.half, row.y, g.cx + g.half, row.y);
            lg.fillStyle(col, 0.95);
            for (var fx = -g.half + 8; fx <= g.half - 8; fx += 16) lg.fillCircle(g.cx + fx, row.y, 3.2);
          });
          row.rocks.forEach(function (k) { k.x = k.base + off; k.spr.setPosition(k.x, row.y); });
          /* pillars and rocks: a life, and the ship bounces off */
          if (this.iframeMs <= 0) {
            var hitAt = null;
            row.gates.forEach(function (g) { g.posts.forEach(function (p) { if (!hitAt && self.straitTouch(p.x, p.y, 17)) hitAt = p; }); });
            row.rocks.forEach(function (k) { if (!hitAt && self.straitTouch(k.x, row.y, 17)) hitAt = { x: k.x, y: row.y }; });
            if (hitAt) { this.straitBump(hitAt.x, hitAt.y, "YOU HIT THE ROCKS"); if (this._finishing) return; }
          }
          /* through a gate: the row crosses the ship's middle */
          var rel = row.y - sh.y;
          if (!row.done && row.rel != null && row.rel < 0 && rel >= 0) {
            row.done = true;
            var gate = row.gates.filter(function (g) { return g.state === "live" && Math.abs(sh.x - g.cx) < g.half; })[0];
            if (gate) { this.straitThrough(gate); if (this._finishing) return; }
          }
          row.rel = rel;
          if (row.y > H + 60) { this.straitKillRow(row); S.rows.splice(S.rows.indexOf(row), 1); }
        }
        /* Scylla */
        S.headCd -= ms;
        if (S.headCd <= 0 && !this._between) { this.straitVolley(); S.headCd = P.strikeEvery * rnd(0.85, 1.15); }
        for (i = S.heads.length - 1; i >= 0; i--) {
          var h = S.heads[i], start = { x: S.cliffEdge + 6, y: h.ay };
          h.t += ms;
          if (h.phase === "warn") {
            var k = clamp(h.t / h.warn, 0, 1);
            lg.fillStyle(0x06121c, 0.16 + 0.42 * k); lg.fillEllipse(h.x, h.y, P.strikeR * 2, P.strikeR * 1.7);
            lg.lineStyle(3, 0x9fd3d6, 0.45 + 0.45 * k); lg.strokeCircle(h.x, h.y, P.strikeR * (2.3 - 1.3 * k));
            lg.lineStyle(2, 0xd9772b, 0.5 + 0.4 * k); lg.strokeEllipse(h.x, h.y, P.strikeR * 2, P.strikeR * 1.7);
            /* the head rears out of the cliff, looking at the spot */
            this.straitNeck(h, { x: start.x + 6 + 10 * k, y: h.ay + Math.sin(S.t * 6 + i) * 3 });
            h.spr.setRotation(Math.atan2(h.y - h.ay, h.x - start.x)).setAlpha(0.6 + 0.4 * k);
            if (h.t >= h.warn) { h.phase = "strike"; h.t = 0; snd("rock"); }
          } else if (h.phase === "strike") {
            var u = clamp(h.t / P.strikeMs, 0, 1), e = 1 - (1 - u) * (1 - u);
            h.tip = { x: start.x + (h.x - start.x) * e, y: h.ay + (h.y - h.ay) * e };
            this.straitNeck(h, h.tip);
            if (u >= 1) {
              h.phase = "hold"; h.t = 0;
              this.burst(h.x, h.y, 0x9fd3d6, 16);
              if (this.straitTouch(h.x, h.y, P.strikeR - 4)) {
                this.loseLife("hit", "SCYLLA SNATCHED A CREWMAN");
                if (this._finishing) return;
              } else if (P.again && !h.follow) {
                this.straitStrike(sh.x + rnd(-P.aimErr, P.aimErr) * 0.5, sh.y, Math.max(450, P.strikeWarn * 0.75), true);
              }
            }
          } else if (h.phase === "hold") {
            this.straitNeck(h, h.tip);
            if (h.t >= 220) { h.phase = "back"; h.t = 0; }
          } else {
            var b = clamp(1 - h.t / 360, 0, 1);
            this.straitNeck(h, { x: start.x + (h.x - start.x) * b, y: h.ay + (h.y - h.ay) * b });
            h.spr.setAlpha(b);
            if (h.t >= 360) { try { h.spr.destroy(); } catch (eD) {} S.heads.splice(i, 1); }
          }
        }
      }
      clear_strait() {
        var S = this.st, self = this;
        S.rows.forEach(function (r) { r.gates.forEach(function (g) { self.burst(g.cx, r.y, 0xe8b04a, 6); }); self.straitKillRow(r); });
        S.rows = [];
        S.heads.forEach(function (h) { try { h.spr.destroy(); } catch (e) {} });
        S.heads = [];
        S.headCd = Math.max(S.headCd, 1800);
        try { S.lowG.clear(); S.neckG.clear(); } catch (e2) {}
      }
    }

    Object.keys(EXT).forEach(function (id) {
      Object.keys(EXT[id]).forEach(function (k) { ModeScene.prototype[k] = EXT[id][k]; });
    });
    return ModeScene;
  }

  /* v5.7.9: the maze draws Sol riding this chariot while the CHARIOT power lasts */
  function ensureChariotArt(scene) { canvasTex(scene, "md-team-0", TEAM_W, TEAM_H, drawTeam(0)); canvasTex(scene, "md-team-1", TEAM_W, TEAM_H, drawTeam(1)); }
  window.SolModes = { MODES: MODES, SLOTS: SLOTS, ODY_ROT: ODY_ROT, modeFor: modeFor, install: install, ensureChariotArt: ensureChariotArt, extend: extend,
    /* v5.11: the shared helpers, for the modes in their own files */
    lib: { clamp: clamp, rnd: rnd, dist: dist, shuffle: shuffle, hex: hex, mix: mix, angDiff: angDiff, kill: kill, snd: snd, canvasTex: canvasTex,
      isOdy: isOdy, ST: ST, drawGalley: drawGalley, drawArrow: drawArrow, drawSplat: drawSplat, drawStraitWater: drawStraitWater, SHIP_W: SHIP_W, SHIP_H: SHIP_H },
    TEAM: { w: TEAM_W, h: TEAM_H, car: TEAM_CAR } };
})();
