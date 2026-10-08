/* SOL Labyrinth v5.10 — the look of the Odyssey game (dist/ody only).
 *
 * The Odyssey build loads this file after js/modes.js and before js/game.js; the other
 * builds never load it, and it does nothing unless window.SOL_STATE === "ODY".
 *
 *  1. The ten realms become the ten islands of the voyage: names, titles, blurbs, the
 *     creature of each island (foe kinds moved to the island the design sheet gives them),
 *     Greek / sea palettes, floors, wall touches, particles and background sound.
 *     SolRealms.REALMS is changed in place before game.js copies the palettes.
 *  2. The four shooter modes get their Odyssey names and text (SolModes.MODES, in place).
 *  3. New art under the same texture keys, at the same sizes: Sirens for the eagles, storm
 *     gulls for the ravens, terns for Eagle Swoop's magpies (v5.12), Cyclops shepherds for the trolls, lotus blossoms, shades,
 *     Siren song, Scylla's necks, a Greek galley, Zeus's storm clouds, moly flowers,
 *     sea-worn rocks, sun-discs, Circe's swine and the giants' fire pits; and Polyphemus,
 *     a one-eyed giant of his own, in place of Fenrir's tinted wolf on boss levels.
 *     realms.js and modes.js only draw a texture when its key does not exist yet, so the
 *     Odyssey textures are made first: SolRealms.install and SolModes.install are wrapped,
 *     and the scene methods they add (setupRealm, ModeScene.create) draw them on entry.
 *  4. The logo and favicons on the start screens point at the Odyssey emblem.
 */
(function () {
  "use strict";
  if (typeof window === "undefined" || window.SOL_STATE !== "ODY") return;
  var R = window.SolRealms, M = window.SolModes;

  /* ── 1. The islands ───────────────────────────────────────────────────────── */
  var ISLANDS = {
    midgard: { name: "Troy's Shore", title: "where the long war ended", floor: "flag", wallFx: "moss", fx: "dust", amb: "wind",
      pal: { wall: 0x3b2a1e, stroke: 0x7c5a3a, lip: 0xc99a5c, floorA: 0xe9dab6, floorB: 0xcdb88e, plazaA: 0xdcc596, plazaB: 0xc8ae7c, wash: 0xd9772b, washA: 0.04, accent: 0xe8b04a, vig: 0x0a1420, vigA: 0.48, void: 0x0b1824 },
      foe: null,
      blurb: "Sandy stone beside the beached ships. Only Circe's wolves hunt here." },
    niflheim: { name: "The Land of the Lotus-Eaters", title: "the honey-sweet shore", floor: "grass", wallFx: "moss", fx: "petals", amb: "meadow",
      pal: { wall: 0x2c3a18, stroke: 0x6e8a32, lip: 0xc8c35a, floorA: 0xe6e6b0, floorB: 0xcbcf8c, plazaA: 0xe8d9a0, plazaB: 0xd6c488, wash: 0xf0c050, washA: 0.05, accent: 0xffc8dc, vig: 0x101a04, vigA: 0.46, void: 0x0c1606 },
      foe: { kind: "wisp", name: "Lotus blossoms", desc: "Lotus blossoms drift toward you through the walls. Touch one and you forget the way: you can only see close by for a few seconds." },
      blurb: "Green-gold meadows where the lotus grows." },
    jotunheim: { name: "The Island of the Cyclopes", title: "lawless giants and their flocks", floor: "rock", wallFx: "rock", fx: "dust", amb: "canyon",
      pal: { wall: 0x33291f, stroke: 0x6c5a44, lip: 0xa8906c, floorA: 0xd2c6ae, floorB: 0xb3a588, plazaA: 0xc6c49c, plazaB: 0xaeac86, wash: 0x9a7a50, washA: 0.05, accent: 0xe8b04a, vig: 0x120c06, vigA: 0.55, void: 0x0c0a08 },
      foe: { kind: "troll", name: "Cyclops shepherds", desc: "A Cyclops guards one long hall and stomps after you if you come close. Slip past when his eye is turned." },
      blurb: "Rough stone and sheep pens, built for giants." },
    muspelheim: { name: "Aeolia, Island of the Winds", title: "the floating bronze-walled island", floor: "ice", wallFx: "frost", fx: "mist", amb: "wind",
      pal: { wall: 0x5a3a1a, stroke: 0xb07a3a, lip: 0xe8b86a, floorA: 0xe8f0f2, floorB: 0xc8d8de, plazaA: 0xd8e6ea, plazaB: 0xbfd2d8, wash: 0x9fd3d6, washA: 0.06, accent: 0xe8b04a, vig: 0x0a1a2a, vigA: 0.5, void: 0x0e2236 },
      foe: { kind: "raven", name: "Storm gulls", desc: "Storm gulls fly over the walls. If one sees you, the wolves know where you are. They cannot see you in the dark." },
      blurb: "Bronze walls and a cold, rushing wind." },
    svartalfheim: { name: "The Land of the Laestrygonians", title: "the giants' harbor", floor: "basalt", wallFx: "ember", fx: "embers", amb: "fire",
      pal: { wall: 0x24140e, stroke: 0x7a3a1c, lip: 0xc8662a, floorA: 0xd4b49a, floorB: 0xb08c74, plazaA: 0xc4987c, plazaB: 0xa87e64, wash: 0xff6a2a, washA: 0.06, accent: 0xffa040, vig: 0x1a0602, vigA: 0.58, void: 0x120604 },
      foe: { kind: "vent", name: "Giants' cooking fires", desc: "Fire pits in the floor glow, then burst into flame. Wait for the fire to die down before you cross." },
      blurb: "A dark harbor glowing with the giants' fires." },
    vanaheim: { name: "Aeaea, Circe's Island", title: "the goddess's oak woods", floor: "grass", wallFx: "moss", fx: "motes", amb: "meadow",
      pal: { wall: 0x2e2240, stroke: 0x6a4e8a, lip: 0xb090d0, floorA: 0xdcd6e6, floorB: 0xbfb6d0, plazaA: 0xd2c4e2, plazaB: 0xbaa8d0, wash: 0x9a5ad8, washA: 0.06, accent: 0xe0b0ff, vig: 0x0e0618, vigA: 0.52, void: 0x0c0814 },
      foe: { kind: "boar", name: "Circe's swine", desc: "A swine charges in a straight line when it sees you down a hall. Step into a side passage and it runs into the wall." },
      blurb: "Violet oak woods full of the goddess's magic." },
    alfheim: { name: "The House of Hades", title: "the misty land of the dead", floor: "bone", wallFx: "mist", fx: "mist", amb: "hollow",
      pal: { wall: 0x1a1e24, stroke: 0x46505e, lip: 0x7e8a98, floorA: 0xb4b8bc, floorB: 0x969ca2, plazaA: 0xa4aaae, plazaB: 0x8a9096, wash: 0x5a6a8a, washA: 0.07, accent: 0xa8c8e0, vig: 0x000004, vigA: 0.66, void: 0x030406 },
      foe: { kind: "draugr", name: "Shades of the dead", desc: "The shades creep toward you, but only while you are not looking at them. Face them and they freeze." },
      blurb: "Grey halls in drifting fog, where the dead wait." },
    helheim: { name: "The Sirens' Isle", title: "the meadow of the singing bones", floor: "marble", wallFx: "gold", fx: "gold", amb: "chimes",
      pal: { wall: 0x3a1430, stroke: 0x8a3a6a, lip: 0xe8b04a, floorA: 0xf2e8d6, floorB: 0xdccdb0, plazaA: 0xe8d6b0, plazaB: 0xd6c096, wash: 0xe86a8a, washA: 0.05, accent: 0xe8b04a, vig: 0x1a0414, vigA: 0.5, void: 0x14040e },
      foe: { kind: "valkyrie", name: "Siren song", desc: "A shadow of song falls across a hall, then a Siren sweeps along it. Step out of the shadow before she arrives." },
      blurb: "White marble in a flowered meadow, where the Sirens sing." },
    asgard: { name: "Scylla and Charybdis", title: "the narrow strait", floor: "ore", wallFx: "rock", fx: "mist", amb: "cave",
      pal: { wall: 0x14242e, stroke: 0x3a5e6e, lip: 0x6a9aa8, floorA: 0xbccbd0, floorB: 0x9aacb2, plazaA: 0xaabec2, plazaB: 0x8ea4aa, wash: 0x1e5f8c, washA: 0.08, accent: 0x9fd3d6, vig: 0x020a10, vigA: 0.6, void: 0x04101a },
      foe: { kind: "serpent", name: "Scylla's necks", desc: "One of Scylla's long necks winds through the tunnels. Its whole length is dangerous, so find a way around it." },
      blurb: "Wet sea caves between the rock and the whirlpool." },
    ragnarok: { name: "Poseidon's Storm", title: "the last sea before Ithaca", floor: "ash", wallFx: "ember", fx: "snow", amb: "wind",
      pal: { wall: 0x0e1626, stroke: 0x2e4a7a, lip: 0x6a8ac8, floorA: 0xa2acbc, floorB: 0x828ca0, plazaA: 0x929eb2, plazaB: 0x76829a, wash: 0x3a6ad8, washA: 0.08, accent: 0xc8e0ff, vig: 0x000814, vigA: 0.64, void: 0x02060e },
      foe: { kind: "mix", name: "Every danger", desc: "Dangers from every island return, three at a time. Everything you have learned counts now." },
      blurb: "Thunder, black waves and lightning over the open sea." }
  };
  if (R && R.REALMS) {
    R.REALMS.forEach(function (rm) {
      var o = ISLANDS[rm.id]; if (!o) return;
      rm.name = o.name; rm.title = o.title; rm.blurb = o.blurb;
      rm.floor = o.floor; rm.wallFx = o.wallFx; rm.fx = o.fx; rm.amb = o.amb;
      rm.foe = o.foe ? { kind: o.foe.kind, name: o.foe.name, desc: o.foe.desc } : null;
      Object.keys(o.pal).forEach(function (k) { if (!rm.pal) rm.pal = {}; rm.pal[k] = o.pal[k]; });
    });
  }

  /* ── 2. The shooter modes ─────────────────────────────────────────────────── */
  var MODE_TEXT = {
    raid: {
      name: "Siren Swoop", kind: "galaga-style level",
      how: "Sirens fly in and take the top of the sky, each carrying a letter in her talons, with two guard gulls under each Siren and rows of seabirds below. Once the flock has formed, shoot the Siren that carries the right answer — she takes two arrows. Birds are always swooping down at Odysseus, and a Siren can stop and pour her song down to lure your archer away. Hit that Siren with an arrow to win him back: then two archers stand side by side and shoot two arrows at a time. A bird you shoot out of the rows stays down, so the rows thin out as you clear them, and from the second island on the rows bring new birds with tricks of their own (listed below). When the last question is answered, shoot down every bird left in the sky to clear the level.",
      rules: "A wrong letter costs a life. So does bird poo landing on you or a bird crashing into you. If a Siren's song lures your archer away, win him back before the question is answered, or it costs a life. With two archers, a hit or a song takes one archer away instead of a life. You can't shoot until the flock has flown into formation. While you clear the sky after the last answer, a hit still costs a life.",
      keys: "◀ ▶ or A / D move · Space, FIRE or a mouse button shoots (clicking does not move Odysseus).",
      tip: "SIREN SWOOP — shoot the Siren with the right letter. If a Siren lures your archer away, hit her to win him back: two archers!",
      hint1: "Shoot the Siren carrying the right letter — she takes two arrows. The passage stays in the side panel.",
      hint2: "This question has two right letters. Shoot both Sirens that carry them.",
      /* v5.12: the rows are new birds island by island (js/modes.js BIRDS: gulls, terns, hawks, owls, falcons) */
      news: ["",
        "Terns fly in the top row: fast divers that zig-zag on the way down. Bird poo now drifts toward where you stand, and diving gulls and Sirens drop two.",
        "Hawks take the top row: a hawk takes two arrows and steers at you in mid-dive. The Sirens trade places in the formation now and then.",
        "Bronze-crowned Sirens: a Siren now takes three arrows. Terns are back, in the second row.",
        "A third row of birds, and owls join the flock: an owl drops a spread of three.",
        "A storm cloud drifts across the flock. Arrows can't get through it. Terns fill the bottom row.",
        "Falcons take the top row: the fastest birds, they dive straight at you and correct their aim. A Siren's song now follows you.",
        "Birds in the formation drop poo too, not just the divers.",
        "Two storm clouds, and the Sirens trade places more often.",
        "Poseidon's storm: the rows are a mix of every bird, and one more dives at a time."]
    },
    rocks: {
      name: "The Wandering Rocks", kind: "asteroids level",
      how: "Rocks drift on the sea and a few carry letters. Hold Athena's light on the rock with the right answer to haul it in. Break the wrong letters and the plain rocks before they hit your galley. Every level brings more and faster rocks, every new question sends in another wave, and Zeus's storm clouds sweep across and throw lightning at you — shoot them for a bonus.",
      rules: "Hauling in a wrong letter costs a life. So does breaking the right answer, a bolt of lightning, or a rock hitting your galley — including a rock you let go of before it reached you.",
      keys: "◀ ▶ turn · ▲ row forward · Space, FIRE or the left mouse button shoots · ▼, Shift, PULL or the right mouse button holds Athena's light. The mouse never steers the galley.",
      tip: "THE WANDERING ROCKS — haul in the right letter with Athena's light, break the rest. Don't get hit.",
      hint1: "Haul in the rock with the right letter (▼, Shift or PULL). Break the others. The passage stays in the side panel.",
      hint2: "This question has two right letters. Haul in both rocks that carry them.",
      news: ["",
        "Shooting stars: a red line flashes where one will streak across a second later. Get out of its way.",
        "Iron rocks: the big grey-blue rocks take two shots. Small storm clouds now come too, and they aim at you.",
        "Heavy letters: Athena's light hauls letter rocks in more slowly. Hold it longer.",
        "Rough seas: your galley drifts further before it stops.",
        "Guard stones: two small stones circle every letter rock. Shoot them off before the light can haul it in.",
        "Shooting stars come twice as often, in pairs.",
        "A Siren flies past and throws spears at your galley. Shoot her for a bonus.",
        "Rock showers: a wave of small rocks pours in from one side (an arrow shows where first).",
        "Poseidon's storm: every rock moves faster, on top of everything else."]
    },
    sky: {
      name: "Chariot of Helios", kind: "flying shooter level",
      how: "Odysseus drives the sun god's chariot across the sky. Sun-discs with letters float past among storm gulls and lotus blossoms, each inside a turning golden shield with one gap in it. A sunbolt only gets through when the gap faces you, so time your shot. Shoot the disc with the right answer; discs you miss come round again. Gulls throw feathers at you (they glow orange first), and on later islands lotus blossoms throw lotus sparks and a gull guards some discs — shoot the guard out of the way.",
      rules: "Shooting a wrong disc costs a life. So does a feather, a lotus spark, or flying into a gull or a lotus blossom.",
      keys: "Arrow keys, WASD or the on-screen pad fly · Space, FIRE or a mouse button shoots (clicking does not move the chariot).",
      tip: "CHARIOT OF HELIOS — shoot the right sun-disc through the gap in its shield. Dodge the gulls, lotus blossoms and feathers.",
      hint1: "Shoot the sun-disc with the right letter through the gap in its turning shield. The passage stays in the side panel.",
      hint2: "This question has two right letters. Shoot both sun-discs that carry them, through the gaps in their shields.",
      news: ["",
        "A gull flies in front of one disc to guard it, the discs weave more, and the shield gaps are narrower.",
        "Lotus blossoms throw lotus sparks at you.",
        "Shields now reverse direction without warning, and two discs have guards.",
        "Narrower gaps and faster shields.",
        "Three discs have guards.",
        "Every shield spins at its own speed.",
        "Four discs have guards.",
        "Narrower gaps and faster shields again.",
        "Poseidon's storm: the narrowest, fastest shields of all."]
    },
    ring: {
      name: "Circe's Courtyard", kind: "arena level",
      how: "Odysseus stands in Circe's courtyard while her wolves attack, often in packs. The moly flowers wait under the ground: after the wolves come, they bloom one or two at a time, in any order and anywhere round the courtyard, and sink again a few seconds later. Shoot the moly flower with the right answer while it is in bloom. An arrow sends a wolf running. Every level the wolves come faster and in bigger numbers, and the flowers bloom for less time.",
      rules: "Shooting a wrong flower costs a life. So does letting a wolf reach you.",
      keys: "Arrow keys or WASD move and aim · Space or FIRE shoots · or click or tap to aim and shoot (Odysseus does not move).",
      tip: "CIRCE'S COURTYARD — watch for the right moly flower to bloom, and shoot it. Keep the wolves off.",
      hint1: "The moly flowers bloom after the wolves come. Shoot the one with the right letter while it is in bloom. The passage stays in the side panel.",
      hint2: "This question has two right letters. Shoot both moly flowers that carry them.",
      news: ["",
        "The alpha wolf: a big grey wolf that takes three arrows to send away.",
        "Bigger packs: Circe's wolves can come three at a time from the same side.",
        "Storm gulls fly over the courtyard and drop poo. A shadow shows where it will land.",
        "The moly flowers slide round the courtyard while they are in bloom.",
        "A quiver of six arrows: each one comes back after a moment, so don't waste them.",
        "Some wolves zig-zag as they run at you.",
        "The flowers bloom for less time, and two alpha wolves can come at once.",
        "Leaping wolves: some crouch, then leap the last stretch.",
        "Poseidon's storm: the wolves come faster, on top of everything else."]
    }
  };
  if (M && M.MODES) {
    Object.keys(MODE_TEXT).forEach(function (id) {
      var m = M.MODES[id], t = MODE_TEXT[id]; if (!m) return;
      Object.keys(t).forEach(function (k) { m[k] = Array.isArray(t[k]) ? t[k].slice() : t[k]; });
    });
  }

  /* ── 3. Art ───────────────────────────────────────────────────────────────── */
  var C = { glaze: "#1a0f0b", glaze2: "#2a1a12", terra: "#d9772b", ochre: "#e8b04a", bone: "#efe6d2", sea: "#1e5f8c", foam: "#9fd3d6", wine: "#3a0f2a" };
  var TAU = Math.PI * 2;
  function poly(c, pts) { c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); }
  function line(c, x0, y0, x1, y1) { c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke(); }
  function ell(c, x, y, rx, ry, rot) { c.beginPath(); c.ellipse(x, y, rx, ry, rot || 0, 0, TAU); }
  function petal(c, len, wid) {
    c.beginPath(); c.moveTo(0, 0);
    c.quadraticCurveTo(wid, -len * 0.5, 0, -len);
    c.quadraticCurveTo(-wid, -len * 0.5, 0, 0);
    c.closePath();
  }
  function glow(c, x, y, r, col, a) {
    var g = c.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(" + col + "," + a + ")"); g.addColorStop(1, "rgba(" + col + ",0)");
    c.fillStyle = g; c.fillRect(x - r, y - r, r * 2, r * 2);
  }

  /* A woman's head as on a black-figure vase: white face, dark hair held by a band.
     (x, y) is the face centre; s scales it; face looks at the viewer. */
  function sirenHead(c, x, y, s, flow) {
    c.save(); c.translate(x, y); c.scale(s, s);
    /* hair: a dark mass behind the face, falling to the shoulders (or streaming back) */
    c.fillStyle = "#120806"; c.strokeStyle = C.ochre; c.lineWidth = 1 / s;
    c.beginPath();
    if (flow) { c.moveTo(-1, -9); c.quadraticCurveTo(-16, -9, -22, 2); c.quadraticCurveTo(-14, 0, -12, 6); c.quadraticCurveTo(-6, 9, 1, 6); c.arc(0, -1, 8.6, 0.9 * Math.PI / 2, -Math.PI / 2, true); }
    else { c.moveTo(-8.6, -2); c.arc(0, -1.5, 8.8, Math.PI, 0); c.lineTo(9.5, 9); c.quadraticCurveTo(5, 12, 2, 9.5); c.lineTo(-2, 9.5); c.quadraticCurveTo(-5, 12, -9.5, 9); c.closePath(); }
    c.fill(); c.stroke();
    /* face */
    c.fillStyle = "#f4ecda"; ell(c, 0, 1, 6.1, 7.2); c.fill();
    c.strokeStyle = "#5a3020"; c.lineWidth = 0.7 / s; c.stroke();
    /* fringe and the ochre band */
    c.fillStyle = "#120806"; c.beginPath(); c.ellipse(0, -4.2, 6.6, 3.6, 0, Math.PI, 0); c.lineTo(6.4, -3.4); c.quadraticCurveTo(0, -1.8, -6.4, -3.4); c.closePath(); c.fill();
    c.strokeStyle = C.ochre; c.lineWidth = 1.4 / s; c.beginPath(); c.ellipse(0, -4.4, 7.4, 3.2, 0, Math.PI * 1.08, Math.PI * 1.92); c.stroke();
    /* eyes, brows, lips */
    c.fillStyle = "#1a0e0a";
    ell(c, -2.4, 0.8, 1.35, 0.85); c.fill(); ell(c, 2.4, 0.8, 1.35, 0.85); c.fill();
    c.strokeStyle = "#3a2216"; c.lineWidth = 0.6 / s;
    line(c, -3.8, -0.9, -1.2, -1.1); line(c, 1.2, -1.1, 3.8, -0.9);
    c.fillStyle = "#b8432a"; ell(c, 0, 4.6, 1.5, 0.7); c.fill();
    c.restore();
  }

  /* md-eagle-0/1 (88 × 62): a Siren, wings spread, a letter in her talons below */
  function drawSiren(up) {
    return function (c, w, h) {
      var cx = w / 2;
      c.lineJoin = "round"; c.lineCap = "round";
      /* tail fan */
      c.fillStyle = C.glaze; c.strokeStyle = C.ochre; c.lineWidth = 1.5;
      poly(c, [[cx - 5, 40], [cx - 12, 54], [cx - 6, 52], [cx, 56], [cx + 6, 52], [cx + 12, 54], [cx + 5, 40]]); c.closePath(); c.fill(); c.stroke();
      c.strokeStyle = C.terra; c.lineWidth = 1;
      line(c, cx, 43, cx, 54); line(c, cx - 2.5, 43, cx - 7, 52); line(c, cx + 2.5, 43, cx + 7, 52);
      /* wings */
      [-1, 1].forEach(function (sd) {
        c.fillStyle = C.glaze; c.strokeStyle = C.ochre; c.lineWidth = 1.5;
        c.beginPath(); c.moveTo(cx + sd * 6, 25);
        if (up) {
          c.quadraticCurveTo(cx + sd * 20, 3, cx + sd * 43, 2);
          [[38, 9], [41, 13], [34, 16], [36, 21], [28, 23], [29, 28], [20, 29], [10, 36]].forEach(function (q) { c.lineTo(cx + sd * q[0], q[1]); });
        } else {
          c.quadraticCurveTo(cx + sd * 24, 17, cx + sd * 43, 31);
          [[35, 34], [38, 40], [29, 39], [29, 45], [21, 42], [19, 46], [10, 38]].forEach(function (q) { c.lineTo(cx + sd * q[0], q[1]); });
        }
        c.closePath(); c.fill(); c.stroke();
        /* incised feathers in the clay colour, and a row of dots on the coverts */
        c.strokeStyle = C.terra; c.lineWidth = 1.1;
        if (up) { line(c, cx + sd * 12, 27, cx + sd * 36, 8); line(c, cx + sd * 12, 30, cx + sd * 31, 17); line(c, cx + sd * 11, 33, cx + sd * 25, 25); }
        else { line(c, cx + sd * 12, 30, cx + sd * 37, 35); line(c, cx + sd * 12, 33, cx + sd * 29, 40); line(c, cx + sd * 11, 36, cx + sd * 21, 41); }
        c.fillStyle = C.ochre;
        for (var i = 0; i < 4; i++) { var t = (i + 1) / 5; c.beginPath(); c.arc(cx + sd * (9 + t * (up ? 16 : 18)), up ? 25 - t * 14 : 26 + t * 2, 0.9, 0, TAU); c.fill(); }
      });
      /* legs and talons */
      c.strokeStyle = C.ochre; c.lineWidth = 2.6;
      line(c, cx - 4, 41, cx - 7, h - 3); line(c, cx + 4, 41, cx + 7, h - 3);
      c.lineWidth = 1.6;
      line(c, cx - 7, h - 3, cx - 10, h - 1); line(c, cx - 7, h - 3, cx - 4, h - 1); line(c, cx + 7, h - 3, cx + 10, h - 1); line(c, cx + 7, h - 3, cx + 4, h - 1);
      /* body, with incised breast feathers */
      c.fillStyle = C.glaze; c.strokeStyle = C.ochre; c.lineWidth = 1.5;
      ell(c, cx, 32, 9.5, 12); c.fill(); c.stroke();
      c.strokeStyle = C.terra; c.lineWidth = 0.9;
      [[cx - 3, 30], [cx + 3, 30], [cx, 34], [cx - 4, 37], [cx + 4, 37], [cx, 40]].forEach(function (q) { c.beginPath(); c.arc(q[0], q[1], 2.2, 0.15 * Math.PI, 0.85 * Math.PI); c.stroke(); });
      sirenHead(c, cx, 14, 1, false);
    };
  }

  /* md-shield stays the hoplite shield behind each Siren's letter */

  /* rf-raven-0/1 (72 × 54): a storm gull side-on, facing right */
  function drawGull(up) {
    return function (c) {
      var OUT = "#2e3640";
      c.lineJoin = "round"; c.lineCap = "round";
      c.fillStyle = "#f4f6f8"; c.strokeStyle = OUT; c.lineWidth = 1.5;
      poly(c, [[23, 27], [7, 23], [10, 29], [7, 35], [23, 32]]); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = "#30363e"; poly(c, [[7, 23], [10, 29], [7, 35], [12, 29]]); c.closePath(); c.fill();
      c.fillStyle = "#f6f8fa"; ell(c, 34, 29, 15, 8.5); c.fill(); c.stroke();
      c.fillStyle = "#d8dee4"; ell(c, 34, 32.5, 11, 3.6); c.fill();
      c.fillStyle = "#f8fafc"; c.beginPath(); c.arc(49, 24, 7.6, 0, TAU); c.fill(); c.stroke();
      c.fillStyle = "#f2c230"; c.strokeStyle = "#8a6a10"; c.lineWidth = 0.9;
      poly(c, [[55, 21.5], [67, 24.5], [64, 26.5], [55, 27]]); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = "#d23a2a"; c.beginPath(); c.arc(63, 25.6, 1.2, 0, TAU); c.fill();
      c.fillStyle = "#14181c"; c.beginPath(); c.arc(51.5, 22.4, 1.6, 0, TAU); c.fill();
      c.fillStyle = "#ffffff"; c.beginPath(); c.arc(52, 21.9, 0.5, 0, TAU); c.fill();
      /* the wing: grey mantle, black tip with white spots */
      c.fillStyle = "#9aa6b2"; c.strokeStyle = OUT; c.lineWidth = 1.4;
      c.beginPath();
      if (up) { c.moveTo(26, 26); c.quadraticCurveTo(20, 12, 12, 2); c.lineTo(20, 4); c.quadraticCurveTo(34, 9, 43, 24); }
      else { c.moveTo(26, 31); c.quadraticCurveTo(20, 44, 11, 52); c.lineTo(19, 51); c.quadraticCurveTo(35, 46, 43, 33); }
      c.closePath(); c.fill(); c.stroke();
      c.fillStyle = "#1c2026";
      if (up) poly(c, [[12, 2], [20, 4], [24, 8], [17, 10]]); else poly(c, [[11, 52], [19, 51], [24, 47], [17, 45]]);
      c.closePath(); c.fill();
      c.fillStyle = "#ffffff"; c.beginPath(); c.arc(up ? 16 : 15, up ? 5 : 49, 0.9, 0, TAU); c.fill();
    };
  }

  /* md-magpie-0/1 (72 × 54), v5.12: Siren Swoop's terns in place of Eagle Swoop's magpies — a slim white
     seabird with a black cap, a red-orange bill, a long forked tail and pale grey, black-tipped wings */
  function drawTern(up) {
    return function (c) {
      var OUT = "#2e3640";
      c.lineJoin = "round"; c.lineCap = "round";
      c.fillStyle = "#eef2f6"; c.strokeStyle = OUT; c.lineWidth = 1.3;
      poly(c, [[24, 27], [3, 20], [12, 29], [3, 37], [24, 32]]); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = "#f8fafc"; ell(c, 35, 29, 13, 7.5); c.fill(); c.stroke();
      c.fillStyle = "#dfe5ea"; ell(c, 36, 32, 9, 3); c.fill();
      c.fillStyle = "#f8fafc"; c.beginPath(); c.arc(49, 24, 7, 0, TAU); c.fill(); c.stroke();
      c.fillStyle = "#16181c"; c.beginPath(); c.arc(49, 23.5, 7, Math.PI * 0.95, Math.PI * 2.05); c.closePath(); c.fill();
      c.fillStyle = "#e85a2a"; c.strokeStyle = "#8a2a10"; c.lineWidth = 0.9;
      poly(c, [[55, 21.5], [67, 24], [55, 26.5]]); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = "#ffffff"; c.beginPath(); c.arc(51.6, 23.2, 1.3, 0, TAU); c.fill();
      c.fillStyle = "#0c0e10"; c.beginPath(); c.arc(51.9, 23.2, 0.7, 0, TAU); c.fill();
      c.fillStyle = "#b8c4ce"; c.strokeStyle = OUT; c.lineWidth = 1.3;
      if (up) poly(c, [[27, 26], [16, 3], [24, 5], [36, 9], [43, 24]]); else poly(c, [[27, 31], [15, 52], [23, 50], [36, 45], [43, 32]]);
      c.closePath(); c.fill(); c.stroke();
      c.fillStyle = "#1c2026"; if (up) poly(c, [[16, 3], [24, 5], [25, 10], [19, 9]]); else poly(c, [[15, 52], [23, 50], [24, 45], [18, 46]]);
      c.closePath(); c.fill();
    };
  }

  /* A Cyclops: one big eye, a club of olive wood, a fleece tunic. Drawn in the troll's
     88 × 96 box; the boss draws the same figure larger, angrier, club raised. */
  function drawCyclopsFig(ctx, step, boss, angry) {
    var s = step ? 3 : -3, SK = boss ? "#b97a4e" : "#c98b5c", SKD = boss ? "#94603a" : "#a8703f", OUT = "#2a1a10", HAIR = "#2e1e14";
    ctx.lineJoin = "round"; ctx.lineCap = "round";
    /* legs and sandals */
    ctx.fillStyle = SKD; ctx.strokeStyle = OUT; ctx.lineWidth = 1.2;
    ctx.fillRect(27, 66 + (step ? 2 : 0), 12, 22); ctx.strokeRect(27, 66 + (step ? 2 : 0), 12, 22);
    ctx.fillRect(47, 66 + (step ? 0 : 2), 12, 22); ctx.strokeRect(47, 66 + (step ? 0 : 2), 12, 22);
    ctx.fillStyle = "#5a3a1e"; ctx.fillRect(25, 86 + (step ? 2 : 0), 16, 6); ctx.fillRect(45, 86 + (step ? 0 : 2), 16, 6);
    ctx.strokeStyle = "#5a3a1e"; ctx.lineWidth = 1.6;
    [0, 1].forEach(function (k) { var x = k ? 47 : 27, y = 66 + ((k ? !step : step) ? 2 : 0); line(ctx, x, y + 14, x + 12, y + 18); line(ctx, x, y + 18, x + 12, y + 14); });
    /* the fleece tunic: a sheepskin, cream and curly (grey for Polyphemus) */
    var FL = boss ? "#d8d2c0" : "#ece4cc", FLD = boss ? "#a8a08c" : "#c8bc98";
    ctx.fillStyle = FL; ctx.strokeStyle = OUT; ctx.lineWidth = 1.6;
    ell(ctx, 42, 54, 27, 24); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = FLD; ctx.lineWidth = 1.2;
    for (var i = 0; i < 26; i++) {
      var a = i * 2.4, rr = 6 + (i * 7) % 19, x = 42 + Math.cos(a) * rr, y = 56 + Math.sin(a) * rr * 0.8;
      ctx.beginPath(); ctx.arc(x, y, 2.4, 0.2, Math.PI * 1.5); ctx.stroke();
    }
    /* the bare shoulder (a fleece over one shoulder) */
    ctx.fillStyle = SK; ctx.strokeStyle = OUT; ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.ellipse(57, 40, 10, 7, -0.4, 0, TAU); ctx.fill(); ctx.stroke();
    /* belt of rope */
    ctx.fillStyle = "#7a5a32"; ctx.fillRect(18, 63, 48, 5);
    ctx.strokeStyle = "#4a3418"; ctx.lineWidth = 1; for (i = 0; i < 9; i++) line(ctx, 20 + i * 5, 63, 23 + i * 5, 68);
    /* left arm */
    ctx.fillStyle = SK; ctx.strokeStyle = OUT; ctx.lineWidth = 1.2;
    ell(ctx, 15, 52 + s, 7.5, 15, 0.3); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(11, 64 + s, 5, 0, TAU); ctx.fill(); ctx.stroke();
    /* right arm and the club (raised over the head when he is angry) */
    ctx.save();
    if (angry) {
      ell(ctx, 65, 38, 7, 13, 0.25); ctx.fill(); ctx.stroke();
      ctx.translate(68, 30); ctx.rotate(0.25);
    } else {
      ell(ctx, 69, 48 - s, 7.5, 14, -0.4); ctx.fill(); ctx.stroke();
      ctx.translate(73, 56 - s); ctx.rotate(0.12);
    }
    ctx.fillStyle = "#6e4a26"; ctx.strokeStyle = "#2e1c0c"; ctx.lineWidth = 1.4;
    ctx.beginPath(); ctx.moveTo(-3.5, 6); ctx.lineTo(-6, -28); ctx.quadraticCurveTo(0, -41, 7, -29); ctx.lineTo(4, 6); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#4e3218"; ctx.beginPath(); ctx.arc(-2, -21, 2, 0, TAU); ctx.arc(3, -11, 1.6, 0, TAU); ctx.arc(-1, -32, 2.2, 0, TAU); ctx.fill();
    ctx.strokeStyle = "#8a6438"; ctx.lineWidth = 1; line(ctx, 1, 2, 2, -27);
    ctx.fillStyle = SK; ctx.strokeStyle = OUT; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(0, 2, 5.5, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.restore();
    /* head: ears, face, shaggy hair and beard */
    ctx.fillStyle = SK; ctx.strokeStyle = OUT; ctx.lineWidth = 1.2;
    ell(ctx, 25.5, 25, 3.5, 5); ctx.fill(); ctx.stroke(); ell(ctx, 58.5, 25, 3.5, 5); ctx.fill(); ctx.stroke();
    ell(ctx, 42, 24, 16.5, 16); ctx.fill(); ctx.stroke();
    ctx.fillStyle = HAIR;
    ctx.beginPath(); ctx.moveTo(25, 22);
    for (i = 0; i <= 8; i++) { var aa = Math.PI + i / 8 * Math.PI; ctx.lineTo(42 + Math.cos(aa) * 19, 20 + Math.sin(aa) * 16 + (i % 2 ? -3 : 0)); }
    ctx.lineTo(58, 22); ctx.quadraticCurveTo(42, 8, 25, 22); ctx.fill();
    /* beard */
    ctx.beginPath(); ctx.moveTo(27, 28); ctx.quadraticCurveTo(28, 44, 36, 45); ctx.lineTo(39, 49); ctx.lineTo(42, 45); ctx.lineTo(45, 49); ctx.lineTo(48, 45);
    ctx.quadraticCurveTo(56, 44, 57, 28); ctx.quadraticCurveTo(52, 36, 42, 35); ctx.quadraticCurveTo(32, 36, 27, 28); ctx.fill();
    /* the one eye */
    ctx.fillStyle = "#fffaf0"; ctx.strokeStyle = OUT; ctx.lineWidth = 1.4;
    ell(ctx, 42, 22, 7.2, 5.6); ctx.fill(); ctx.stroke();
    ctx.fillStyle = boss ? "#8a2a14" : "#6a4a1a"; ctx.beginPath(); ctx.arc(42.6, 22.4, 3.4, 0, TAU); ctx.fill();
    ctx.fillStyle = "#0e0806"; ctx.beginPath(); ctx.arc(42.6, 22.4, 1.7, 0, TAU); ctx.fill();
    ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.arc(41.2, 21, 0.9, 0, TAU); ctx.fill();
    /* one heavy brow — a scowl when angry */
    ctx.strokeStyle = HAIR; ctx.lineWidth = 3.2;
    ctx.beginPath();
    if (angry || boss) { ctx.moveTo(33, 13.5); ctx.lineTo(42, 17.5); ctx.lineTo(51, 13.5); }
    else { ctx.moveTo(34, 15); ctx.quadraticCurveTo(42, 12.5, 50, 15); }
    ctx.stroke();
    /* nose and mouth */
    ctx.fillStyle = SKD; ell(ctx, 42, 29, 3.2, 2.4); ctx.fill();
    if (angry) {
      ctx.fillStyle = "#3a0e0a"; ell(ctx, 42, 35, 5.5, 3.4); ctx.fill();
      ctx.fillStyle = "#f4f0dc"; ctx.fillRect(38.5, 32, 7, 1.6); ctx.fillRect(39.5, 36.8, 5, 1.2);
    } else if (boss) {
      ctx.fillStyle = "#3a0e0a"; poly(ctx, [[37, 34], [47, 34], [45.5, 37], [38.5, 37]]); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "#f4f0dc"; for (var tt = 0; tt < 4; tt++) ctx.fillRect(38.6 + tt * 2.2, 34, 1.5, 1.4);
    } else {
      ctx.strokeStyle = "#3a0e0a"; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(37.5, 35); ctx.quadraticCurveTo(42, 36.5, 46.5, 35); ctx.stroke();
    }
  }
  function drawCyclops(step) { return function (c) { drawCyclopsFig(c, step, false, false); }; }
  /* Polyphemus: 176 × 196 (the troll figure ×1.73 with room for the raised club), walk frames and an angry pair */
  var POLY_W = 176, POLY_H = 196, POLY_SX = 1.73, POLY_SY = 1.75, POLY_OX = 12, POLY_OY = 24;
  function drawPolyphemus(step, angry) {
    return function (c) {
      c.save(); c.translate(POLY_OX, POLY_OY); c.scale(POLY_SX, POLY_SY);
      drawCyclopsFig(c, step, true, angry);
      c.restore();
    };
  }
  function polyEye() { return { x: POLY_OX + 42 * POLY_SX - POLY_W / 2, y: POLY_OY + 22 * POLY_SY - POLY_H / 2 }; }

  /* rf-wisp (56 × 56): a lotus blossom, pink-white petals and a soft glow */
  function drawLotus(c, w) {
    var cx = w / 2, cy = w / 2, i;
    glow(c, cx, cy, w / 2, "255,190,220", 0.5);
    c.save(); c.translate(cx, cy);
    for (i = 0; i < 8; i++) {
      c.save(); c.rotate(i / 8 * TAU);
      var g = c.createLinearGradient(0, 0, 0, -21);
      g.addColorStop(0, "#fff6fa"); g.addColorStop(0.6, "#f7b8d0"); g.addColorStop(1, "#e2648f");
      c.fillStyle = g; petal(c, 21, 7.5); c.fill();
      c.strokeStyle = "#a83a66"; c.lineWidth = 1.1; c.stroke();
      c.restore();
    }
    for (i = 0; i < 8; i++) {
      c.save(); c.rotate((i + 0.5) / 8 * TAU);
      c.fillStyle = "#fff0f6"; petal(c, 13, 5); c.fill();
      c.strokeStyle = "#d47a9c"; c.lineWidth = 0.9; c.stroke();
      c.restore();
    }
    c.fillStyle = "#f2c84a"; c.strokeStyle = "#a87a14"; c.lineWidth = 1; c.beginPath(); c.arc(0, 0, 4.4, 0, TAU); c.fill(); c.stroke();
    c.fillStyle = "#a87a14"; for (i = 0; i < 6; i++) { c.beginPath(); c.arc(Math.cos(i) * 2.2, Math.sin(i) * 2.2, 0.6, 0, TAU); c.fill(); }
    c.restore();
  }

  /* rf-draugr-0/1 (56 × 76): a shade, a pale see-through hooded figure */
  function drawShade(step) {
    return function (c) {
      var a = step ? 3 : 0;
      glow(c, 28, 44, 30, "16,24,34", 0.28);
      var g = c.createLinearGradient(0, 6, 0, 74);
      g.addColorStop(0, "rgba(232,240,246,0.95)"); g.addColorStop(0.55, "rgba(200,216,228,0.8)"); g.addColorStop(1, "rgba(180,200,215,0.18)");
      /* sleeves reaching out */
      c.strokeStyle = "rgba(210,224,234,0.85)"; c.lineWidth = 6; c.lineCap = "round";
      line(c, 18, 36, 6, 46 - a); line(c, 38, 36, 50, 46 + a);
      c.strokeStyle = "rgba(40,60,80,0.55)"; c.lineWidth = 1;
      c.fillStyle = "rgba(236,244,250,0.9)"; c.beginPath(); c.arc(6, 46 - a, 2.6, 0, TAU); c.arc(50, 46 + a, 2.6, 0, TAU); c.fill();
      /* the robe, ragged and fading at the hem */
      c.fillStyle = g; c.strokeStyle = "rgba(36,52,70,0.75)"; c.lineWidth = 1.4;
      c.beginPath(); c.moveTo(28, 5);
      c.quadraticCurveTo(43, 7, 42, 26); c.quadraticCurveTo(46, 48, 49, 70);
      for (var i = 0; i < 6; i++) c.lineTo(49 - (i + 0.5) * 7, i % 2 ? 72 - a : 64 + a);
      c.lineTo(7, 70); c.quadraticCurveTo(10, 48, 14, 26); c.quadraticCurveTo(13, 7, 28, 5); c.closePath();
      c.fill(); c.stroke();
      /* folds */
      c.strokeStyle = "rgba(120,146,170,0.45)"; c.lineWidth = 1.2;
      line(c, 22, 34, 18, 64); line(c, 34, 34, 38, 64); line(c, 28, 38, 28, 66);
      /* the dark of the hood, two pale eyes */
      c.fillStyle = "#18222c"; ell(c, 28, 21, 7.6, 9); c.fill();
      c.fillStyle = "rgba(160,235,255,0.35)"; c.beginPath(); c.arc(28, 21, 7, 0, TAU); c.fill();
      c.fillStyle = "#c8f4ff"; c.beginPath(); c.arc(25, 21, 1.7, 0, TAU); c.arc(31, 21, 1.7, 0, TAU); c.fill();
    };
  }

  /* rf-valk-0/1 (124 × 84): a Siren in flight, singing, flying right */
  function drawSirenFlying(up) {
    return function (c) {
      c.lineJoin = "round"; c.lineCap = "round";
      /* her song: ochre waves ahead of her */
      c.strokeStyle = "rgba(232,176,74,0.85)"; c.lineWidth = 1.8;
      [0, 1, 2].forEach(function (k) { c.beginPath(); c.arc(98 + k * 7, 38, 5 + k * 4, -0.7, 0.7); c.stroke(); });
      /* tail */
      c.fillStyle = C.glaze; c.strokeStyle = C.ochre; c.lineWidth = 1.5;
      poly(c, [[42, 42], [14, 33], [20, 42], [10, 48], [20, 51], [14, 59], [42, 51]]); c.closePath(); c.fill(); c.stroke();
      c.strokeStyle = C.terra; c.lineWidth = 1; line(c, 40, 45, 20, 42); line(c, 40, 48, 20, 51);
      /* talons trailing */
      c.strokeStyle = C.ochre; c.lineWidth = 2.4; line(c, 56, 54, 48, 63); line(c, 63, 55, 57, 65);
      /* body */
      c.fillStyle = C.glaze; c.strokeStyle = C.ochre; c.lineWidth = 1.5;
      ell(c, 60, 46, 21, 10.5, -0.06); c.fill(); c.stroke();
      c.strokeStyle = C.terra; c.lineWidth = 0.9;
      [[52, 45], [58, 49], [64, 45], [70, 49], [76, 45]].forEach(function (q) { c.beginPath(); c.arc(q[0], q[1], 2.4, 0.15 * Math.PI, 0.85 * Math.PI); c.stroke(); });
      /* the wing, swept back */
      c.fillStyle = C.glaze; c.strokeStyle = C.ochre; c.lineWidth = 1.5;
      c.beginPath();
      if (up) { c.moveTo(72, 40); c.quadraticCurveTo(68, 12, 40, 2); [[46, 10], [36, 12], [44, 19], [34, 23], [46, 28], [40, 33], [54, 38]].forEach(function (q) { c.lineTo(q[0], q[1]); }); }
      else { c.moveTo(72, 50); c.quadraticCurveTo(66, 74, 40, 82); [[46, 74], [36, 72], [45, 66], [36, 62], [48, 58], [44, 54], [56, 52]].forEach(function (q) { c.lineTo(q[0], q[1]); }); }
      c.closePath(); c.fill(); c.stroke();
      c.strokeStyle = C.terra; c.lineWidth = 1.1;
      if (up) { line(c, 66, 36, 44, 8); line(c, 62, 38, 40, 20); line(c, 58, 39, 44, 30); }
      else { line(c, 66, 54, 44, 77); line(c, 62, 54, 40, 66); line(c, 58, 53, 46, 58); }
      /* neck and head, hair streaming back */
      c.fillStyle = "#f4ecda"; c.strokeStyle = "#5a3020"; c.lineWidth = 0.8;
      poly(c, [[76, 40], [84, 37], [86, 44], [79, 47]]); c.closePath(); c.fill();
      sirenHead(c, 90, 36, 1.05, true);
    };
  }

  /* rf-snake-head (52 × 48) and rf-snake-body (34 × 34): Scylla's neck, facing right */
  function drawScyllaHead(c) {
    c.lineJoin = "round";
    /* a frill of fins at the back of the head */
    c.fillStyle = "#2f7a6a"; c.strokeStyle = "#0f3a32"; c.lineWidth = 1.2;
    poly(c, [[16, 8], [5, 3], [9, 13], [1, 17], [8, 22], [0, 27], [8, 31], [2, 38], [10, 37], [6, 46], [17, 40]]); c.closePath(); c.fill(); c.stroke();
    /* head */
    c.fillStyle = "#2f8a72"; ell(c, 22, 24, 17, 14); c.fill(); c.stroke();
    c.fillStyle = "#4fae90"; ell(c, 23, 22, 12, 8.5); c.fill();
    /* snout and open jaws with a row of white teeth */
    c.fillStyle = "#3a9a80"; c.strokeStyle = "#0f3a32";
    poly(c, [[30, 13], [50, 17], [51, 21], [36, 23]]); c.closePath(); c.fill(); c.stroke();
    poly(c, [[30, 35], [50, 31], [51, 27], [36, 25]]); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = "#18302a"; poly(c, [[36, 23], [51, 21], [51, 27], [36, 25]]); c.closePath(); c.fill();
    c.fillStyle = "#fbf6e8";
    for (var i = 0; i < 4; i++) {
      var x = 39 + i * 3;
      poly(c, [[x, 21.6 - i * 0.1], [x + 2.4, 21.4], [x + 1.2, 24]]); c.closePath(); c.fill();
      poly(c, [[x, 26.4], [x + 2.4, 26.6], [x + 1.2, 24]]); c.closePath(); c.fill();
    }
    /* scales */
    c.strokeStyle = "rgba(15,58,50,0.55)"; c.lineWidth = 1;
    [[14, 18], [20, 14], [14, 30], [20, 34], [18, 24], [26, 28]].forEach(function (q) { c.beginPath(); c.arc(q[0], q[1], 3, 0.1 * Math.PI, 0.9 * Math.PI); c.stroke(); });
    /* eyes on both sides */
    c.fillStyle = "#ffe040"; c.strokeStyle = "#0f3a32"; c.lineWidth = 1;
    ell(c, 30, 14.5, 4, 3); c.fill(); c.stroke(); ell(c, 30, 33.5, 4, 3); c.fill(); c.stroke();
    c.fillStyle = "#101010"; c.fillRect(29.4, 12, 1.4, 5); c.fillRect(29.4, 31, 1.4, 5);
  }
  function drawScyllaBody(c, w) {
    var cc = w / 2, g = c.createRadialGradient(cc - 4, cc - 4, 2, cc, cc, cc);
    g.addColorStop(0, "#6ac4a6"); g.addColorStop(0.7, "#2f8a72"); g.addColorStop(1, "#16483e");
    c.fillStyle = g; c.beginPath(); c.arc(cc, cc, cc - 1, 0, TAU); c.fill();
    c.strokeStyle = "#0f3a32"; c.lineWidth = 1.2; c.stroke();
    c.save(); c.beginPath(); c.arc(cc, cc, cc - 2, 0, TAU); c.clip();
    c.strokeStyle = "rgba(10,50,42,0.55)"; c.lineWidth = 1.1;
    for (var row = 0; row < 4; row++) for (var k = 0; k < 4; k++) {
      var x = 4 + k * 9 + (row % 2) * 4.5, y = 6 + row * 7.5;
      c.beginPath(); c.arc(x, y, 4.2, 0.1 * Math.PI, 0.9 * Math.PI); c.stroke();
    }
    c.restore();
    c.fillStyle = "rgba(200,240,225,0.35)"; ell(c, cc - 4, cc - 5, 5, 3, -0.5); c.fill();
  }

  /* rf-boar-0/1 (80 × 56): one of Circe's swine */
  function drawSwine(step) {
    return function (ctx) {
      var l = step ? [0, 4, 4, 0] : [4, 0, 0, 4], xs = [18, 28, 44, 54], i;
      ctx.fillStyle = "#7a4a3a";
      for (i = 0; i < 4; i++) ctx.fillRect(xs[i], 40 + l[i] * 0.5, 6, 12 - l[i] * 0.5);
      ctx.fillStyle = "#3a2018"; for (i = 0; i < 4; i++) ctx.fillRect(xs[i], 50, 6, 2.5);
      ctx.fillStyle = "#d89a86"; ctx.strokeStyle = "#5a3428"; ctx.lineWidth = 1.4;
      ell(ctx, 36, 32, 26, 15); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = "#a8685a"; ctx.lineWidth = 1.6;
      for (i = 0; i < 9; i++) line(ctx, 16 + i * 5, 19 - Math.sin(i / 8 * Math.PI) * 2, 17 + i * 5, 15 - Math.sin(i / 8 * Math.PI) * 3);
      ctx.strokeStyle = "#5a3428"; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(10, 30); ctx.quadraticCurveTo(4, 26, 8, 22); ctx.quadraticCurveTo(12, 20, 9, 25); ctx.stroke();
      ctx.fillStyle = "#e2a894"; ctx.strokeStyle = "#5a3428"; ctx.lineWidth = 1.2;
      ell(ctx, 61, 32, 13, 11); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#f0b8a8"; ell(ctx, 72, 34, 5, 6); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#5a2a20"; ctx.fillRect(70.5, 32, 1.5, 3); ctx.fillRect(73, 32, 1.5, 3);
      ctx.fillStyle = "#101010"; ctx.beginPath(); ctx.arc(63, 27, 2, 0, TAU); ctx.fill();
      ctx.fillStyle = "#c88070"; ctx.strokeStyle = "#5a3428"; poly(ctx, [[54, 23], [55, 12], [62, 22]]); ctx.closePath(); ctx.fill(); ctx.stroke();
      /* a wreath of Circe's ivy round the neck */
      ctx.fillStyle = "#4a8a3a"; for (i = 0; i < 5; i++) { ell(ctx, 50 + Math.sin(i) * 1.5, 24 + i * 4.4, 2.6, 1.6, 0.6); ctx.fill(); }
    };
  }

  /* rf-vent (56 × 56): a giants' fire pit, a ring of stones round the coals */
  function drawFirePit(c) {
    var g = c.createRadialGradient(28, 28, 2, 28, 28, 20);
    g.addColorStop(0, "rgba(255,140,50,0.7)"); g.addColorStop(0.6, "rgba(120,40,16,0.9)"); g.addColorStop(1, "rgba(40,16,8,0.95)");
    c.fillStyle = g; c.beginPath(); c.arc(28, 28, 20, 0, TAU); c.fill();
    c.strokeStyle = "#2a1208"; c.lineWidth = 3;
    line(c, 16, 22, 40, 34); line(c, 18, 36, 38, 20);
    c.fillStyle = "rgba(255,170,70,0.85)"; [[24, 26], [32, 30], [28, 34], [22, 32], [33, 23]].forEach(function (q) { c.beginPath(); c.arc(q[0], q[1], 1.6, 0, TAU); c.fill(); });
    for (var i = 0; i < 10; i++) {
      var a = i / 10 * TAU, x = 28 + Math.cos(a) * 22, y = 28 + Math.sin(a) * 22;
      c.fillStyle = i % 2 ? "#6a5a4c" : "#7e6c5a"; c.strokeStyle = "#2a2018"; c.lineWidth = 1;
      ell(c, x, y, 5.6, 4.6, a); c.fill(); c.stroke();
    }
  }

  /* md-ship (44 × 52): a Greek galley from above, prow up: oars, an eye on the prow, a square sail */
  function drawGalley(c, w, h) {
    var cx = w / 2, i;
    glow(c, cx, h * 0.52, w * 0.6, "159,211,214", 0.55);
    c.lineCap = "round";
    /* oars */
    c.strokeStyle = "#f4e2b8"; c.lineWidth = 1.8;
    for (i = 0; i < 6; i++) { var y = 17 + i * 5; line(c, cx - 6, y, cx - 20, y + 4); line(c, cx + 6, y, cx + 20, y + 4); }
    /* hull: terracotta with a black-glaze rim, like a red-figure ship on a black vase */
    var g = c.createLinearGradient(cx - 9, 0, cx + 9, 0);
    g.addColorStop(0, "#b85a1c"); g.addColorStop(0.5, "#ec9a4e"); g.addColorStop(1, "#b85a1c");
    c.fillStyle = g; c.strokeStyle = C.glaze; c.lineWidth = 2;
    c.beginPath(); c.moveTo(cx, 1);
    c.quadraticCurveTo(cx + 9, 12, cx + 8, 30); c.quadraticCurveTo(cx + 7, 45, cx, 50);
    c.quadraticCurveTo(cx - 7, 45, cx - 8, 30); c.quadraticCurveTo(cx - 9, 12, cx, 1); c.closePath();
    c.fill(); c.stroke();
    c.strokeStyle = C.glaze; c.lineWidth = 1;
    line(c, cx - 3.5, 13, cx - 3.5, 44); line(c, cx + 3.5, 13, cx + 3.5, 44);
    /* the eye painted on each side of the prow */
    [-1, 1].forEach(function (sd) {
      c.fillStyle = "#fbf4e2"; ell(c, cx + sd * 4.2, 9, 2.2, 1.5, sd * 0.5); c.fill();
      c.fillStyle = "#14100c"; c.beginPath(); c.arc(cx + sd * 4.3, 9, 1, 0, TAU); c.fill();
    });
    /* the yard and the square sail, bellied forward */
    c.fillStyle = "#fbf4e2"; c.strokeStyle = C.glaze; c.lineWidth = 1.4;
    c.beginPath(); c.moveTo(cx - 17, 30); c.lineTo(cx - 16, 25); c.quadraticCurveTo(cx, 15, cx + 16, 25); c.lineTo(cx + 17, 30); c.quadraticCurveTo(cx, 25, cx - 17, 30); c.closePath(); c.fill(); c.stroke();
    c.strokeStyle = C.terra; c.lineWidth = 1.6; line(c, cx - 6, 21, cx - 6, 27); line(c, cx + 6, 21, cx + 6, 27); line(c, cx, 19.5, cx, 26.5);
    c.strokeStyle = "#3a2010"; c.lineWidth = 2; line(c, cx - 18, 30, cx + 18, 30);
    /* the stern curling up */
    c.strokeStyle = C.glaze; c.lineWidth = 1.6; c.beginPath(); c.arc(cx, 46.5, 2.2, 0, Math.PI * 1.6); c.stroke();
  }

  /* md-saucer (64 × 34): one of Zeus's storm clouds with a lightning glint */
  function drawStormCloud(c, w, h) {
    var puffs = [[0.2, 0.56, 0.2], [0.4, 0.38, 0.27], [0.62, 0.42, 0.25], [0.82, 0.58, 0.18], [0.5, 0.6, 0.27]];
    glow(c, w * 0.48, h * 0.85, h * 0.5, "255,230,120", 0.45);
    c.fillStyle = "#9aa6c0"; puffs.forEach(function (q) { c.beginPath(); c.arc(q[0] * w, q[1] * h, q[2] * w * 0.5 + 1.8, 0, TAU); c.fill(); });
    var g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "#5a6480"); g.addColorStop(1, "#22263a");
    c.fillStyle = g; puffs.forEach(function (q) { c.beginPath(); c.arc(q[0] * w, q[1] * h, q[2] * w * 0.5, 0, TAU); c.fill(); });
    c.fillStyle = "rgba(255,255,255,0.16)"; c.beginPath(); c.arc(0.4 * w, 0.3 * h, 0.08 * w, 0, TAU); c.fill();
    var bolt = [[0.52, 0.62], [0.44, 0.8], [0.52, 0.8], [0.45, 1]];
    c.lineJoin = "miter"; c.strokeStyle = "#ffd84a"; c.lineWidth = 3;
    poly(c, bolt.map(function (q) { return [q[0] * w, q[1] * h - 1]; })); c.stroke();
    c.strokeStyle = "#fffbe0"; c.lineWidth = 1.1;
    poly(c, bolt.map(function (q) { return [q[0] * w, q[1] * h - 1]; })); c.stroke();
  }

  /* md-stone (58 × 72): a moly flower — milk-white petals, a black root, and a dark heart
     where the letter sits so it stays easy to read */
  function drawMoly(c, w, h) {
    var cx = w / 2, cy = 34, i;
    c.fillStyle = "rgba(0,0,0,0.3)"; ell(c, cx, h - 6, w * 0.42, 6); c.fill();
    /* the black root */
    c.strokeStyle = "#0c0806"; c.lineCap = "round";
    c.lineWidth = 3.2; c.beginPath(); c.moveTo(cx, 54); c.quadraticCurveTo(cx - 6, 60, cx - 2, h - 5); c.stroke();
    c.lineWidth = 2; c.beginPath(); c.moveTo(cx - 1, 58); c.quadraticCurveTo(cx + 9, 62, cx + 12, h - 4); c.stroke();
    c.beginPath(); c.moveTo(cx - 2, 60); c.quadraticCurveTo(cx - 12, 63, cx - 15, h - 6); c.stroke();
    c.fillStyle = "#14100c"; ell(c, cx - 1, 59, 5.5, 4); c.fill();
    /* stem and two leaves */
    c.strokeStyle = "#3e6a32"; c.lineWidth = 3; line(c, cx, 44, cx, 56);
    c.fillStyle = "#4e8a3e"; c.strokeStyle = "#24401c"; c.lineWidth = 1;
    ell(c, cx - 8, 52, 7, 2.6, -0.5); c.fill(); c.stroke(); ell(c, cx + 8, 51, 7, 2.6, 0.5); c.fill(); c.stroke();
    /* milk-white petals */
    c.save(); c.translate(cx, cy);
    for (i = 0; i < 8; i++) {
      c.save(); c.rotate(i / 8 * TAU + 0.2);
      var g = c.createLinearGradient(0, 0, 0, -27);
      g.addColorStop(0, "#e6e0d0"); g.addColorStop(0.5, "#fbf8ef"); g.addColorStop(1, "#ffffff");
      c.fillStyle = g; petal(c, 27, 9); c.fill();
      c.strokeStyle = "#9a9484"; c.lineWidth = 1.2; c.stroke();
      c.strokeStyle = "rgba(160,150,130,0.5)"; c.lineWidth = 0.8; line(c, 0, -15, 0, -24);
      c.restore();
    }
    /* the dark heart for the letter */
    c.fillStyle = "#1a120e"; c.beginPath(); c.arc(0, 0, 14.5, 0, TAU); c.fill();
    c.strokeStyle = C.ochre; c.lineWidth = 2; c.stroke();
    c.restore();
  }

  /* md-rock-0..2 and md-rock-l (100 × 100): rocks worn grey by the sea */
  function rockShape(seed) {
    var pts = [], n = 11, i, s = seed * 9301 + 49297;
    for (i = 0; i < n; i++) { s = (s * 9301 + 49297) % 233280; pts.push(0.74 + (s / 233280) * 0.26); }
    return pts;
  }
  function drawSeaRock(seed, lettered) {
    return function (c, w, h) {
      var pts = rockShape(seed), n = pts.length, i, a, r = w * 0.46, cx = w / 2, cy = h / 2;
      c.beginPath();
      for (i = 0; i < n; i++) { a = i / n * TAU; c[i ? "lineTo" : "moveTo"](cx + Math.cos(a) * r * pts[i], cy + Math.sin(a) * r * pts[i]); }
      c.closePath();
      var g = c.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r);
      if (lettered) { g.addColorStop(0, "#a8916a"); g.addColorStop(1, "#43341f"); }
      else { g.addColorStop(0, "#9aa4aa"); g.addColorStop(1, "#353c42"); }
      c.fillStyle = g; c.fill();
      c.lineWidth = lettered ? 4 : 2; c.strokeStyle = lettered ? C.ochre : "#1a1e22"; c.stroke();
      c.save(); c.clip();
      c.fillStyle = "rgba(0,0,0,0.22)";
      [[0.3, -0.2, 0.14], [-0.35, 0.25, 0.1], [0.1, 0.4, 0.08]].forEach(function (k) { c.beginPath(); c.arc(cx + k[0] * r, cy + k[1] * r, k[2] * r, 0, TAU); c.fill(); });
      /* a wet, sea-worn tide line and barnacles */
      c.strokeStyle = "rgba(159,211,214,0.35)"; c.lineWidth = 2;
      c.beginPath(); c.arc(cx + r * 0.2, cy + r * 0.25, r * 0.9, Math.PI * 0.95, Math.PI * 1.45); c.stroke();
      c.fillStyle = "rgba(240,236,224,0.6)";
      for (i = 0; i < 9; i++) { a = seed * 1.7 + i * 2.1; var rr = r * (0.45 + (i % 3) * 0.13); c.beginPath(); c.arc(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr, 1.6, 0, TAU); c.fill(); }
      c.restore();
    };
  }

  /* md-orb (70 × 70): a sun-disc for the letter */
  function drawSunDisc(c, w, h) {
    var cx = w / 2, cy = h / 2, g = c.createRadialGradient(cx - 4, cy - 5, 2, cx, cy, w / 2);
    g.addColorStop(0, "rgba(255,252,236,1)"); g.addColorStop(0.42, "rgba(255,238,176,0.98)"); g.addColorStop(0.72, "rgba(240,176,70,0.85)"); g.addColorStop(1, "rgba(217,119,43,0)");
    c.fillStyle = g; c.beginPath(); c.arc(cx, cy, w / 2, 0, TAU); c.fill();
    c.strokeStyle = "rgba(217,119,43,0.85)"; c.lineWidth = 2;
    c.beginPath(); c.arc(cx, cy, w / 2 - 7, 0, TAU); c.stroke();
    c.strokeStyle = "rgba(232,176,74,0.9)"; c.lineWidth = 1.6;
    for (var i = 0; i < 16; i++) { var a = i / 16 * TAU; line(c, cx + Math.cos(a) * (w / 2 - 6), cy + Math.sin(a) * (w / 2 - 6), cx + Math.cos(a) * (w / 2 - 2), cy + Math.sin(a) * (w / 2 - 2)); }
  }

  /* rf-flake (12 × 12): a drop of sea spray (only Poseidon's storm uses the "snow" drift) */
  function drawSpray(c) {
    var g = c.createRadialGradient(5, 5, 0.5, 6, 6, 5.5);
    g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.6, "rgba(200,230,255,0.75)"); g.addColorStop(1, "rgba(160,200,240,0)");
    c.fillStyle = g; c.beginPath(); c.arc(6, 6, 5.5, 0, TAU); c.fill();
  }

  var ART = [
    ["md-eagle-0", 88, 62, drawSiren(true)], ["md-eagle-1", 88, 62, drawSiren(false)],
    ["rf-raven-0", 72, 54, drawGull(true)], ["rf-raven-1", 72, 54, drawGull(false)],
    ["md-magpie-0", 72, 54, drawTern(true)], ["md-magpie-1", 72, 54, drawTern(false)],
    ["rf-troll-0", 88, 96, drawCyclops(0)], ["rf-troll-1", 88, 96, drawCyclops(1)],
    ["ody-poly-0", POLY_W, POLY_H, drawPolyphemus(0, false)], ["ody-poly-1", POLY_W, POLY_H, drawPolyphemus(1, false)],
    ["ody-poly-a0", POLY_W, POLY_H, drawPolyphemus(0, true)], ["ody-poly-a1", POLY_W, POLY_H, drawPolyphemus(1, true)],
    ["rf-wisp", 56, 56, drawLotus],
    ["rf-draugr-0", 56, 76, drawShade(0)], ["rf-draugr-1", 56, 76, drawShade(1)],
    ["rf-valk-0", 124, 84, drawSirenFlying(true)], ["rf-valk-1", 124, 84, drawSirenFlying(false)],
    ["rf-snake-head", 52, 48, drawScyllaHead], ["rf-snake-body", 34, 34, drawScyllaBody],
    ["rf-boar-0", 80, 56, drawSwine(0)], ["rf-boar-1", 80, 56, drawSwine(1)],
    ["rf-vent", 56, 56, drawFirePit],
    ["rf-flake", 12, 12, drawSpray],
    ["md-ship", 44, 52, drawGalley],
    ["md-saucer", 64, 34, drawStormCloud],
    ["md-stone", 58, 72, drawMoly],
    ["md-rock-0", 100, 100, drawSeaRock(1, false)], ["md-rock-1", 100, 100, drawSeaRock(2, false)], ["md-rock-2", 100, 100, drawSeaRock(3, false)],
    ["md-rock-l", 100, 100, drawSeaRock(7, true)],
    ["md-orb", 70, 70, drawSunDisc]
  ];
  /* Draw every Odyssey texture once per texture manager; a key the original files made
     first is replaced (same key, same size, so every sprite and hitbox stays the same). */
  function odyArt(scene) {
    var T = scene && scene.textures;
    if (!T) return;
    var made = T.__odyMade || (T.__odyMade = {});
    ART.forEach(function (a) {
      var key = a[0];
      if (made[key] && T.exists(key)) return;
      try {
        if (T.exists(key)) T.remove(key);
        var t = T.createCanvas(key, a[1], a[2]);
        if (!t) return;
        a[3](t.getContext(), a[1], a[2]);
        t.refresh();
        made[key] = true;
      } catch (e) { if (window.console) console.warn("[odyssey] art " + key, e); }
    });
  }

  /* ── hooks into realms.js (maze levels) ── */
  if (R && R.install) {
    var realmsInstall = R.install;
    R.install = function (Scene, K) {
      var out = realmsInstall.apply(this, arguments);
      try { hookRealms(Scene.prototype, K); } catch (e) { if (window.console) console.warn("[odyssey] realm hooks", e); }
      return out;
    };
  }
  function hookRealms(P, K) {
    var setup = P.setupRealm;
    if (setup) P.setupRealm = function () { odyArt(this); return setup.apply(this, arguments); };
    /* lotus blossoms are drawn normally (the wisp's additive glow would wash a flower out on a light floor) */
    var spawnFoe = P.spawnFoe;
    if (spawnFoe) P.spawnFoe = function (kind) {
      var n0 = (this.foes || []).length, r = spawnFoe.apply(this, arguments);
      try {
        if (kind === "wisp" && this.foes && this.foes.length > n0) {
          var f = this.foes[this.foes.length - 1];
          if (f.spr && window.Phaser) f.spr.setBlendMode(Phaser.BlendModes.NORMAL);
        }
      } catch (e) {}
      return r;
    };
    /* Polyphemus: his own giant in place of the boss's tinted wolf; the hitbox (f.r) is unchanged */
    var spawnBoss = P.spawnFenrir;
    if (spawnBoss) P.spawnFenrir = function () {
      var r = spawnBoss.apply(this, arguments), f = this.fenrir;
      try {
        if (f && f.spr && this.textures.exists("ody-poly-0")) {
          if (f.spr.anims) { try { f.spr.anims.stop(); } catch (eA) {} }
          f.spr.setTexture("ody-poly-0").setScale(0.86).clearTint();
          f.poly = { step: 0, lx: f.x, ly: f.y };
          if (f.eye && f.eye.setRadius) f.eye.setRadius(8);
          if (f.shadow && f.shadow.setSize) f.shadow.setSize(110, 28);
        }
      } catch (e) { if (window.console) console.warn("[odyssey] polyphemus", e); }
      return r;
    };
    var tickBoss = P.tickFenrir;
    if (tickBoss) P.tickFenrir = function (ms) {
      var r = tickBoss.apply(this, arguments), f = this.fenrir;
      if (!f || !f.poly || !f.spr) return r;
      try {
        var angry = f.state === "windup" || f.state === "charge", stunned = f.stunMs > 0, pl = f.poly;
        if (Math.abs(f.x - pl.lx) + Math.abs(f.y - pl.ly) > 0.2) pl.step += ms || 16;
        pl.lx = f.x; pl.ly = f.y;
        var fr = Math.floor(pl.step / (angry ? 170 : 280)) % 2, sc = 0.86;
        if (f.spr.anims && f.spr.anims.isPlaying) { try { f.spr.anims.stop(); } catch (eA) {} }
        f.spr.setTexture((angry ? "ody-poly-a" : "ody-poly-") + fr).setPosition(f.x, f.y - 45);
        f.spr.setTint(stunned ? 0x9a9ad0 : (angry ? 0xffd6c8 : 0xffffff));
        var e = polyEye(), flipped = f.spr.flipX;
        if (f.eye) f.eye.setPosition(f.x + (flipped ? -e.x : e.x) * sc, f.y - 45 + e.y * sc).setFillStyle(0xff3a1a, stunned ? 0 : (angry ? 0.5 : 0.1));
        if (f.shadow) f.shadow.setPosition(f.x, f.y + 34);
        if (f.tag) f.tag.setPosition(f.x, f.y - 134);
      } catch (e2) {}
      return r;
    };
  }

  /* ── hooks into modes.js (shooter levels) ── */
  if (M && M.install) {
    var modesInstall = M.install;
    M.install = function () {
      var Cls = modesInstall.apply(this, arguments);
      try {
        if (Cls && Cls.prototype && Cls.prototype.create) {
          var create = Cls.prototype.create;
          Cls.prototype.create = function () { odyArt(this); return create.apply(this, arguments); };
        }
      } catch (e) { if (window.console) console.warn("[odyssey] mode hooks", e); }
      return Cls;
    };
  }

  /* ── 4. The emblem on the start screens and the browser tab ── */
  function emblem() {
    try {
      var v = "";
      document.querySelectorAll("h1.logo img").forEach(function (img) {
        var m = /\?v=[0-9.]+/.exec(img.getAttribute("src") || ""); v = m ? m[0] : v;
        if (!/odyssey-labyrinth/.test(img.getAttribute("src") || "")) img.setAttribute("src", "assets/logo/odyssey-labyrinth-512.png" + (m ? m[0] : ""));
        img.setAttribute("alt", "The Odyssey: Labyrinth of the Wine-Dark Sea");
      });
      document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]').forEach(function (l) {
        var href = l.getAttribute("href") || "", sz = /favicon-(32|64|180)\.png/.exec(href);
        if (sz && !/odyssey-favicon/.test(href)) l.setAttribute("href", href.replace(/favicon-(32|64|180)\.png/, "odyssey-favicon-$1.png"));
      });
      if (document.body) document.body.classList.add("ody");
      if (document.documentElement) document.documentElement.classList.add("ody");
    } catch (e) {}
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", emblem); else emblem();

  window.SolOdyssey = { art: odyArt, keys: ART.map(function (a) { return a[0]; }), islands: ISLANDS };
})();
