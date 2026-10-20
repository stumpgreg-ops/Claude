/* SOL Labyrinth v5.22 — the Lit and Film mode "yuma": Make the 3:10 (3:10 to Yuma, 1957, Delmer Daves; from Elmore
 * Leonard's story). Genre: the Western.
 *
 * The main street of Contention, Arizona Territory, seen from across the street in sepia: the false fronts of the
 * hotel, the saloon and the bank on the left, the depot with its big station clock in the middle, and the 3:10 to Yuma
 * standing at the platform on the right, steam up, every car with a letter over its door. Heat shimmers over the
 * desert on the horizon and over the dusty street.
 *
 * The rancher (Dan Evans) starts on the hotel steps with the handcuffed outlaw (Ben Wade) on a short lead behind him,
 * and walks him across town, cover to cover (water troughs, barrels, hay bales, wagons, freight crates and baggage
 * carts, laid out fresh for every question), to the car with the right letter: walking up its steps picks that
 * letter (answerPick). A wrong car costs a life and its door is nailed shut. Select TWO needs both cars.
 *
 * Wade's gang is up on the rooftops. A gunman rises behind a false front, aims (a dotted red line follows the
 * rancher), the line turns solid (it is locked) and he fires along it. The line stops at the first piece of cover
 * between him and the rancher: if it stops short, the shot hits the cover; if it reaches the rancher, it knocks his
 * hat off (a life). Stepping off the solid line also dodges it. The station clock counts down to 3:10: if it gets
 * there the train pulls out (a life) and the conductor backs it in for one more try. Later tiers add Wade digging in
 * his heels (tap RUN to drag him), gang riders galloping down a lane of the street (a dashed line warns), gunmen on
 * the depot roof and the water tower, a freight wagon rolling along the street (moving cover), second shots, gunmen
 * walking the rooftops while they aim, and gunmen on the train's roof. yumaParams(n) sets one curve for levels 1-100.
 *
 * Controls: arrows / WASD / the pad walk; hold Space or RUN to run (it spends breath, which comes back, faster
 * behind cover); click or tap to walk to a spot or to a car. Different from Showdown at Noon (a stand-and-draw duel):
 * this one is all movement and cover under a clock.
 *
 * Registered with SolModes.extend (js/modes.js); the methods are copied onto ModeScene, so `this` is the mode scene.
 * Every texture is drawn once with canvasTex under an "md-yuma-" key (the street again only when the canvas resizes).
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, shuffle = L.shuffle, canvasTex = L.canvasTex;

  var TAU = Math.PI * 2, TS = 2;        /* sprite textures are drawn at twice their size and shown at k / TS */
  var SERIF = "Georgia, 'Times New Roman', serif";
  /* the sepia sheet: ink, wood, dust and a single red for danger */
  var C = { ink: "#2a1a0e", umber: "#4b301b", sienna: "#7b5030", rust: "#94582c", tan: "#bf9260", sand: "#dcb983",
    cream: "#f1e0b8", paper: "#f6e9c8", red: "#b3311c", steel: "#cfc3a8" };
  var WALK = 132;         /* the rancher's pace with Wade in tow, px a second at k = 1 */
  var RUNK = 1.8;         /* running is this much faster */
  var LEADD = 30;         /* Wade walks this far behind on the lead */
  var CHEST = 40, CHEST_LOW = 20;
  var LOCO_S = 0.88;      /* the locomotive's size against the coaches */
  var CS = 1.15;          /* cover is drawn this much bigger than its texture units */   /* where a shot aims: above the feet, standing and crouched */
  var DOOR_HALF = 16;     /* half the width of a car's steps */

  /* ── difficulty: one curve for every level 1-100, each level a little harder than the one before ── */
  function yumaParams(n) {
    n = clamp(Math.floor(Number(n) || 1), 1, 100);
    return {
      clockS: 100 - n * 0.68,                                   /* seconds from the hotel to 3:10: 99 at 1, 32 at 100 */
      gunMax: n >= 91 ? 4 : n >= 41 ? 3 : n >= 11 ? 2 : 1,      /* gunmen up at once */
      popMs: 4300 - n * 27,                                     /* a new gunman rises every ... ms (4.3 s to 1.6 s) */
      aimMs: 1750 - n * 9.5,                                    /* he follows you with the dotted line (1.7 s to 0.8 s) */
      lockMs: 1200 - n * 7,                                     /* the solid line (he has you in his sights) before the shot: 1.2 s to 0.5 s */
      track: 2.2 + n * 0.05,                                    /* how fast the dotted line catches up with you */
      coverN: n >= 71 ? 6 : n >= 41 ? 7 : 8,                    /* pieces of cover across the street */
      windS: 3.4 - n * 0.012,                                   /* seconds of running on a full breath */
      wadeEvery: n >= 21 ? 16000 - (n - 21) * 90 : 1e9,         /* Wade digs in his heels every ... ms */
      wadeTaps: n >= 21 ? 3 + Math.floor((n - 21) / 20) : 0,    /* taps of RUN to drag him along */
      riderEvery: n >= 31 ? 15000 - (n - 31) * 100 : 1e9,       /* a gang rider gallops down the street */
      riderWarn: 2000 - n * 11,                                 /* the dashed lane before he comes, ms */
      riderSp: 560 + n * 3,                                     /* px a second */
      sideGuns: n >= 41 ? 1 : 0,                                /* gunmen on the depot roof and the water tower */
      wagonSp: n >= 51 ? 34 + (n - 51) * 0.9 : 0,               /* a freight wagon rolls along the street */
      doubleP: n >= 61 ? 0.3 + (n - 61) * 0.012 : 0,            /* a gunman aims again for a second shot */
      roofWalk: n >= 71 ? 36 + (n - 71) * 1.2 : 0,              /* gunmen walk the rooftops while they aim, px a second */
      trainGuns: n >= 81 ? 1 : 0,                               /* gunmen on the train's roof */
      grace: 2600 - n * 10                                      /* ms before the first gunman rises */
    };
  }

  /* ── small helpers ── */
  function tex(scene, key, w, h, draw) {
    canvasTex(scene, key, Math.ceil(w * TS), Math.ceil(h * TS), function (c) { c.save(); c.scale(TS, TS); draw(c, w, h); c.restore(); });
  }
  function path(c, pts) { c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); }
  function rrect(c, x, y, w, h, r) {
    c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
  }
  function seeded(seed) { var s = seed >>> 0 || 1; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
  function hexN(s) { return parseInt(s.slice(1), 16); }
  /* where a segment from (x0, y0) along (dx, dy), t in [0, tMax], first enters a rectangle (null if it misses) */
  function segRect(x0, y0, dx, dy, tMax, r) {
    var t0 = 0, t1 = tMax, p = [-dx, dx, -dy, dy], q = [x0 - r.x0, r.x1 - x0, y0 - r.y0, r.y1 - y0];
    for (var i = 0; i < 4; i++) {
      if (Math.abs(p[i]) < 1e-9) { if (q[i] < 0) return null; continue; }
      var t = q[i] / p[i];
      if (p[i] < 0) { if (t > t1) return null; if (t > t0) t0 = t; } else { if (t < t0) return null; if (t < t1) t1 = t; }
    }
    return t0;
  }
  function ysnd(name) {
    var R = window.SolRealms;
    if (!R || !R.blip) return;
    try {
      if (name === "bang") { R.hiss(0.22, 2600, 0.09); R.blip(170, 40, 0.2, "square", 0.05); R.hiss(0.5, 500, 0.03, 0.06); }
      else if (name === "ping") { R.blip(2600, 820, 0.24, "sine", 0.03, 0.03); }
      else if (name === "thunk") { R.blip(140, 70, 0.1, "triangle", 0.06); R.hiss(0.08, 1200, 0.03); }
      else if (name === "cock") { R.blip(1400, 1400, 0.025, "square", 0.02); R.blip(900, 900, 0.03, "square", 0.02, 0.07); }
      else if (name === "glint") { R.blip(2200, 3000, 0.08, "sine", 0.015); }
      else if (name === "whistle") { R.blip(587, 600, 0.9, "sine", 0.04); R.blip(740, 760, 0.9, "sine", 0.03); R.blip(880, 900, 0.9, "triangle", 0.015); }
      else if (name === "bell") { R.blip(1320, 1300, 0.35, "triangle", 0.025); R.blip(1980, 1960, 0.25, "sine", 0.01); }
      else if (name === "hoof") { for (var i = 0; i < 6; i++) R.blip(120 + (i % 2) * 30, 60, 0.06, "triangle", 0.05, i * 0.12); }
      else if (name === "steam") { R.hiss(0.5, 3200, 0.025); }
      else if (name === "hat") { R.blip(700, 300, 0.18, "triangle", 0.04); }
      else if (name === "slam") { R.blip(110, 50, 0.16, "square", 0.06); R.hiss(0.1, 800, 0.04); }
      else if (name === "yank") { R.blip(300, 520, 0.08, "triangle", 0.04); }
      else if (name === "thud") { R.blip(90, 40, 0.2, "triangle", 0.07); R.hiss(0.25, 400, 0.05); }
    } catch (e) {}
  }

  /* ══ the art ══════════════════════════════════════════════════════════ */
  /* a hat: brim and a pinched crown, its brim's middle at (x, y) */
  function hat(c, x, y, col, band, wide) {
    var b = wide || 11;
    c.fillStyle = col; c.strokeStyle = C.ink; c.lineWidth = 1.2;
    path(c, [[x - 6, y + 0.5], [x - 5.6, y - 7], [x - 1.5, y - 8.4], [x, y - 6.8], [x + 1.5, y - 8.4], [x + 5.6, y - 7], [x + 6, y + 0.5]]); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = band; c.fillRect(x - 5.8, y - 2.8, 11.6, 2);
    c.fillStyle = col; c.beginPath(); c.moveTo(x - b, y + 0.6); c.quadraticCurveTo(x, y - 3.2, x + b, y + 0.6); c.quadraticCurveTo(x, y + 2.6, x - b, y + 0.6); c.fill(); c.stroke();
  }
  /* a figure seen from the side, facing right, feet at (22, 68) in a 44x70 box. who: "ran" (the rancher: his hat is a
     sprite of its own, so a shot can knock it off) or "wade" (black hat on). pose: 0 stand, 1 stride, 2 crouch / dig in */
  var FIG_W = 44, FIG_H = 70, FEET = 68;
  function drawFigure(who, pose) {
    return function (c) {
      var I = C.ink, cx = 22, fy = FEET, ran = who === "ran";
      var P = ran ? { pants: "#5d3f27", shirt: "#e0c48e", vest: "#6a4226", skin: "#d2a06c", boot: "#2b1a0f" }
        : { pants: "#3b2f27", shirt: "#5a4a3c", vest: "#1d1611", skin: "#cc9866", boot: "#1a110a" };
      var crouch = ran && pose === 2, dig = !ran && pose === 2;
      var hip = crouch ? fy - 12 : fy - 30, sh = crouch ? fy - 28 : fy - 49, tx = dig ? -5 : crouch ? 2 : 0, hx = cx + 1 + tx, hy = sh - 8;
      c.lineCap = "round"; c.lineJoin = "round";
      function limb(pts, wd, col) { c.strokeStyle = I; c.lineWidth = wd + 2.2; path(c, pts); c.stroke(); c.strokeStyle = col; c.lineWidth = wd; path(c, pts); c.stroke(); }
      function boot(x, y) { c.fillStyle = P.boot; path(c, [[x - 4, y - 5], [x + 2, y - 5], [x + 6, y - 0.5], [x - 4, y - 0.5]]); c.closePath(); c.fill(); }
      if (crouch) {   /* down on one knee */
        limb([[cx - 3, hip], [cx - 7, fy - 3], [cx - 15, fy - 3]], 6, P.pants); boot(cx - 17, fy);
        limb([[cx + 1, hip], [cx + 9, fy - 12], [cx + 9, fy - 3]], 6, P.pants); boot(cx + 10, fy);
      } else if (dig) {
        limb([[cx - 4, hip], [cx + 1, fy - 13], [cx + 5, fy - 3]], 6, P.pants); boot(cx + 6, fy);
        limb([[cx, hip], [cx + 7, fy - 13], [cx + 12, fy - 3]], 6, P.pants); boot(cx + 13, fy);
      } else {
        var a = pose === 1 ? 8 : 2.5;
        limb([[cx - 1, hip], [cx - 1 - a * 0.45, fy - 15], [cx - 1 - a, fy - 3]], 6, P.pants); boot(cx - a, fy);
        limb([[cx + 1, hip], [cx + 1 + a * 0.5, fy - 15], [cx + 1 + a, fy - 3]], 6, P.pants); boot(cx + 2 + a, fy);
      }
      /* the back arm: the rancher's reaches back to the lead */
      if (ran) limb([[cx - 4 + tx, sh + 3], [cx - 9 + tx, sh + 11], [cx - 13 + tx, sh + 16]], 4.2, P.shirt);
      else limb([[cx - 3 + tx, sh + 3], [cx + 1 + tx, sh + 12], [cx + 7 + tx, sh + 15]], 4.2, P.shirt);
      /* the torso, the vest and the belt */
      c.fillStyle = P.shirt; path(c, [[cx - 7 + tx, sh], [cx + 6 + tx, sh], [cx + 6, hip + 1], [cx - 7, hip + 1]]); c.closePath(); c.fill();
      c.strokeStyle = I; c.lineWidth = 1.3; c.stroke();
      c.fillStyle = P.vest; path(c, [[cx - 7 + tx, sh], [cx - 1 + tx, sh], [cx - 2, hip - 2], [cx - 7, hip - 1]]); c.closePath(); c.fill();
      path(c, [[cx + 3 + tx, sh + 1], [cx + 6 + tx, sh], [cx + 6, hip - 1], [cx + 2, hip - 2]]); c.closePath(); c.fill();
      c.fillStyle = I; c.fillRect(cx - 7, hip - 2.5, 13, 3); c.fillStyle = "#c9b27a"; c.fillRect(cx + 1, hip - 2.5, 3, 3);
      /* neck and head, in profile */
      c.fillStyle = P.skin; c.fillRect(hx - 2.5, sh - 5, 5, 6);
      c.beginPath(); c.arc(hx, hy, 6, 0, TAU); c.fill(); c.strokeStyle = I; c.lineWidth = 1.2; c.stroke();
      path(c, [[hx + 5.5, hy - 1.5], [hx + 8, hy + 1.5], [hx + 5.4, hy + 2]]); c.fillStyle = P.skin; c.fill(); c.stroke();
      c.fillStyle = I; c.fillRect(hx + 2.4, hy - 1.6, 1.6, 1.6);
      c.fillStyle = "rgba(60,30,10,0.35)"; c.beginPath(); c.arc(hx - 0.5, hy + 2, 4.6, 0.1, Math.PI * 0.95); c.fill();
      if (ran) {
        c.fillStyle = "#8a3a22"; path(c, [[hx - 4, sh - 2], [hx + 4, sh - 2], [hx, sh + 4]]); c.closePath(); c.fill();   /* neckerchief */
        /* the shotgun at port arms across the body, and the front arm on it */
        limb([[cx - 9 + tx, sh + 20], [cx + 19 + tx, sh - 3]], 2.2, "#3c3832");
        c.strokeStyle = I; c.lineWidth = 6; path(c, [[cx - 10 + tx, sh + 21], [cx - 1 + tx, sh + 14]]); c.stroke();
        c.strokeStyle = "#86522a"; c.lineWidth = 4; c.stroke();
        limb([[cx + 3 + tx, sh + 3], [cx + 7 + tx, sh + 11], [cx + 10 + tx, sh + 7]], 4.2, P.shirt);
        c.fillStyle = P.skin; c.beginPath(); c.arc(cx + 10 + tx, sh + 7, 2.2, 0, TAU); c.fill();
      } else {
        hat(c, hx, hy - 4, "#1d140d", "#a89a78", 11);
        /* the front arm, cuffed to the back one: two steel rings and a short chain */
        limb([[cx + 2 + tx, sh + 3], [cx + 5 + tx, sh + 12], [cx + 9 + tx, sh + 14]], 4.2, P.shirt);
        c.strokeStyle = I; c.lineWidth = 3.4; c.beginPath(); c.arc(cx + 9 + tx, sh + 14, 2.3, 0, TAU); c.stroke(); c.beginPath(); c.arc(cx + 8 + tx, sh + 17.5, 2.3, 0, TAU); c.stroke();
        c.strokeStyle = "#e9e0c8"; c.lineWidth = 1.6; c.beginPath(); c.arc(cx + 9 + tx, sh + 14, 2.3, 0, TAU); c.stroke(); c.beginPath(); c.arc(cx + 8 + tx, sh + 17.5, 2.3, 0, TAU); c.stroke();
      }
    };
  }
  /* the rancher's hat on its own (28x14, the brim's middle at (14, 11)) */
  function drawHat(c) { hat(c, 14, 11, "#86603a", "#4a2e18", 12); }
  /* a gang gunman, waist up, facing right (46x58; the shoulder at (23, 24)); his rifle and arms are drawn every frame */
  function drawGunman(v) {
    return function (c) {
      var I = C.ink, cx = 23, sh = 24, hy = 13;
      var shirt = ["#7c5a3c", "#5e4c3c", "#8e6c48"][v];
      c.fillStyle = shirt; path(c, [[cx - 11, sh], [cx + 10, sh], [cx + 11, 58], [cx - 12, 58]]); c.closePath(); c.fill();
      c.strokeStyle = I; c.lineWidth = 1.3; c.stroke();
      c.fillStyle = "#24180f"; path(c, [[cx - 11, sh], [cx - 3, sh], [cx - 5, 58], [cx - 12, 58]]); c.closePath(); c.fill();
      path(c, [[cx + 4, sh], [cx + 10, sh], [cx + 11, 58], [cx + 5, 58]]); c.closePath(); c.fill();
      c.fillStyle = "#3a2618"; c.fillRect(cx - 11, 46, 22, 4);   /* a cartridge belt across */
      c.fillStyle = "#c9a95e"; for (var i = 0; i < 6; i++) c.fillRect(cx - 9 + i * 3.4, 46.6, 1.4, 2.6);
      c.fillStyle = "#c79565"; c.fillRect(cx - 2.5, sh - 6, 5, 7);
      c.beginPath(); c.arc(cx, hy, 6.5, 0, TAU); c.fill(); c.strokeStyle = I; c.lineWidth = 1.2; c.stroke();
      /* the bandana mask */
      c.fillStyle = "#6e2c1c"; path(c, [[cx - 6.6, hy + 0.5], [cx + 7.5, hy + 0.5], [cx + 6, hy + 6], [cx + 1, hy + 11], [cx - 6, hy + 5]]); c.closePath(); c.fill();
      c.strokeStyle = "rgba(240,210,160,0.5)"; c.lineWidth = 0.8; c.beginPath(); c.moveTo(cx - 4, hy + 3); c.lineTo(cx + 5, hy + 3); c.stroke();
      c.fillStyle = I; c.fillRect(cx + 2.5, hy - 2.2, 2.2, 1.4);
      hat(c, cx, hy - 4.5, "#2a1d13", "#6a5236", 13);
    };
  }
  /* a gang rider on a galloping horse, facing right (110x84, hooves on the bottom edge); two frames */
  function drawRider(f) {
    return function (c) {
      var I = C.ink, H = "#5a3a22", Hd = "#2c1a0e";
      c.lineCap = "round"; c.lineJoin = "round";
      function leg(pts) { c.strokeStyle = I; c.lineWidth = 6.2; path(c, pts); c.stroke(); c.strokeStyle = H; c.lineWidth = 4; path(c, pts); c.stroke(); }
      if (f === 0) {   /* stretched out */
        leg([[38, 52], [24, 64], [10, 72]]); leg([[44, 54], [36, 68], [30, 82]]);
        leg([[76, 52], [90, 62], [104, 66]]); leg([[70, 54], [80, 68], [86, 82]]);
      } else {         /* gathered */
        leg([[38, 52], [44, 66], [36, 82]]); leg([[44, 54], [54, 68], [52, 82]]);
        leg([[76, 52], [72, 66], [64, 80]]); leg([[70, 54], [64, 66], [70, 82]]);
      }
      /* tail, body, neck and head */
      c.fillStyle = Hd; path(c, [[30, 40], [14, 42], [4, 54], [16, 50], [26, 50]]); c.closePath(); c.fill();
      c.fillStyle = H; c.beginPath(); c.ellipse(56, 46, 28, 12, -0.04, 0, TAU); c.fill(); c.strokeStyle = I; c.lineWidth = 1.4; c.stroke();
      path(c, [[72, 42], [86, 22], [94, 18], [104, 26], [100, 30], [90, 30], [82, 46]]); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = Hd; path(c, [[74, 38], [84, 20], [90, 18], [80, 36]]); c.closePath(); c.fill();
      c.fillStyle = I; c.fillRect(95, 21, 2, 2);
      /* the rider: hat, bandana, coat, a leg down the side */
      c.strokeStyle = I; c.lineWidth = 6.4; path(c, [[56, 34], [62, 46], [58, 56]]); c.stroke();
      c.strokeStyle = "#3a2c22"; c.lineWidth = 4.4; c.stroke();
      c.fillStyle = "#6e5236"; path(c, [[50, 16], [62, 16], [64, 36], [48, 36]]); c.closePath(); c.fill(); c.strokeStyle = I; c.lineWidth = 1.2; c.stroke();
      c.strokeStyle = I; c.lineWidth = 5.4; path(c, [[60, 20], [72, 28], [84, 26]]); c.stroke(); c.strokeStyle = "#6e5236"; c.lineWidth = 3.4; c.stroke();
      c.fillStyle = "#c79565"; c.beginPath(); c.arc(57, 9, 5.6, 0, TAU); c.fill(); c.strokeStyle = I; c.lineWidth = 1; c.stroke();
      c.fillStyle = "#6e2c1c"; path(c, [[51.5, 9], [63, 9], [61, 14], [55, 16]]); c.closePath(); c.fill();
      hat(c, 57, 5, "#2a1d13", "#6a5236", 11);
    };
  }
  /* ── cover: each texture's bottom edge is the ground line ── */
  var COVER = {
    trough: { w: 96, h: 42, face: [-44, -33, 44, -3], d: 12, street: true },
    barrels: { w: 58, h: 52, face: [-25, -46, 25, -2], d: 14, street: true, plat: true },
    wagon: { w: 172, h: 80, face: [-64, -66, 64, -4], d: 16, street: true },
    hay: { w: 82, h: 46, face: [-37, -40, 37, -2], d: 12, street: true },
    crates: { w: 70, h: 60, face: [-31, -56, 33, -2], d: 14, plat: true },
    cart: { w: 104, h: 50, face: [-46, -42, 46, -4], d: 14, plat: true }
  };
  function plank(c, x, y, w, h, col, dark) {
    c.fillStyle = col; c.fillRect(x, y, w, h);
    c.strokeStyle = dark; c.lineWidth = 1; c.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
  }
  function drawTrough(c) {
    var I = C.ink;
    c.fillStyle = "#4a2e18"; path(c, [[10, 34], [18, 34], [16, 42], [8, 42]]); c.closePath(); c.fill(); path(c, [[78, 34], [86, 34], [88, 42], [80, 42]]); c.closePath(); c.fill();
    plank(c, 4, 12, 88, 9, "#8d5c33", "#5a3a1e"); plank(c, 4, 21, 88, 8, "#83542e", "#5a3a1e"); plank(c, 4, 29, 88, 8, "#7a4d2a", "#5a3a1e");
    c.fillStyle = "#3e2b1c"; c.fillRect(4, 12, 5, 25); c.fillRect(87, 12, 5, 25); c.fillRect(44, 12, 4, 25);
    c.fillStyle = "#a87a4c"; c.fillRect(2, 9, 92, 4);
    c.fillStyle = "#9da293"; c.fillRect(6, 9.5, 84, 2.6); c.fillStyle = "rgba(255,250,230,0.7)"; c.fillRect(14, 10, 26, 1); c.fillRect(56, 10, 12, 1);
    c.strokeStyle = I; c.lineWidth = 1.4; c.strokeRect(3, 9, 90, 28);
  }
  function barrel(c, x, y, w, h) {
    var g = c.createLinearGradient(x, 0, x + w, 0);
    g.addColorStop(0, "#5e3a1e"); g.addColorStop(0.4, "#a0703e"); g.addColorStop(1, "#4a2c16");
    c.fillStyle = g; c.beginPath(); c.moveTo(x + 3, y); c.quadraticCurveTo(x - 2, y + h / 2, x + 3, y + h); c.lineTo(x + w - 3, y + h); c.quadraticCurveTo(x + w + 2, y + h / 2, x + w - 3, y); c.closePath(); c.fill();
    c.strokeStyle = C.ink; c.lineWidth = 1.3; c.stroke();
    c.strokeStyle = "rgba(42,26,14,0.45)"; c.lineWidth = 0.8;
    for (var i = 1; i < 5; i++) { c.beginPath(); c.moveTo(x + w * i / 5, y + 1); c.lineTo(x + w * i / 5, y + h - 1); c.stroke(); }
    c.fillStyle = "#2e241c"; c.fillRect(x, y + h * 0.2, w, 2.4); c.fillRect(x, y + h * 0.75, w, 2.4);
    c.fillStyle = "#3a2516"; c.beginPath(); c.ellipse(x + w / 2, y + 1, w / 2 - 2, 2.4, 0, 0, TAU); c.fill();
  }
  function drawBarrels(c) { barrel(c, 26, 4, 26, 40); barrel(c, 5, 12, 27, 39); }
  function drawWagon(c) {
    var I = C.ink;
    /* the tongue, down to the ground at the front */
    c.strokeStyle = I; c.lineWidth = 4; c.beginPath(); c.moveTo(148, 50); c.lineTo(170, 74); c.stroke();
    c.strokeStyle = "#7a4d2a"; c.lineWidth = 2.4; c.stroke();
    /* a load under a lashed tarp */
    c.fillStyle = "#cdb48a"; c.beginPath(); c.moveTo(26, 26); c.quadraticCurveTo(40, 2, 86, 4); c.quadraticCurveTo(132, 4, 144, 26); c.closePath(); c.fill();
    c.strokeStyle = I; c.lineWidth = 1.3; c.stroke();
    c.strokeStyle = "rgba(80,50,26,0.6)"; c.lineWidth = 1;
    [50, 86, 120].forEach(function (x) { c.beginPath(); c.moveTo(x, 4); c.lineTo(x + 2, 26); c.stroke(); });
    /* the box: sideboards and stakes */
    plank(c, 20, 24, 130, 9, "#8d5c33", "#5a3a1e"); plank(c, 20, 33, 130, 9, "#7d4f2b", "#5a3a1e"); plank(c, 20, 42, 130, 7, "#6c4324", "#4a2e18");
    c.fillStyle = "#3e2b1c"; [20, 62, 106, 146].forEach(function (x) { c.fillRect(x, 22, 4, 28); });
    c.strokeStyle = I; c.lineWidth = 1.4; c.strokeRect(20, 24, 130, 25);
    /* the seat */
    c.fillStyle = "#5a3a1e"; c.fillRect(138, 14, 16, 4); c.fillRect(150, 14, 3, 12);
    c.fillStyle = "#2e241c"; c.fillRect(22, 50, 128, 4);
  }
  function drawWheel(c) {
    var cx = 23, cy = 23, r = 21, I = C.ink;
    c.strokeStyle = I; c.lineWidth = 5.4; c.beginPath(); c.arc(cx, cy, r - 2, 0, TAU); c.stroke();
    c.strokeStyle = "#8d6038"; c.lineWidth = 3.2; c.stroke();
    c.strokeStyle = "#6a4222"; c.lineWidth = 2;
    for (var i = 0; i < 12; i++) { var a = i / 12 * TAU; c.beginPath(); c.moveTo(cx + Math.cos(a) * 4, cy + Math.sin(a) * 4); c.lineTo(cx + Math.cos(a) * (r - 3), cy + Math.sin(a) * (r - 3)); c.stroke(); }
    c.fillStyle = "#3a2618"; c.beginPath(); c.arc(cx, cy, 5, 0, TAU); c.fill();
    c.fillStyle = "#b08a58"; c.beginPath(); c.arc(cx, cy, 2, 0, TAU); c.fill();
  }
  function drawHay(c) {
    function bale(x, y, w, h) {
      c.fillStyle = "#d4ac62"; c.fillRect(x, y, w, h);
      c.strokeStyle = "rgba(140,98,40,0.7)"; c.lineWidth = 0.9;
      for (var i = 0; i < 14; i++) { var yy = y + 2 + (i * 7.3) % (h - 3); c.beginPath(); c.moveTo(x + 2 + (i * 13) % 9, yy); c.lineTo(x + w - 3 - (i * 5) % 7, yy + (i % 3) - 1); c.stroke(); }
      c.strokeStyle = "#5a3a1e"; c.lineWidth = 1.6; c.beginPath(); c.moveTo(x + w * 0.3, y); c.lineTo(x + w * 0.3, y + h); c.moveTo(x + w * 0.7, y); c.lineTo(x + w * 0.7, y + h); c.stroke();
      c.strokeStyle = C.ink; c.lineWidth = 1.3; c.strokeRect(x, y, w, h);
      c.fillStyle = "#e8c47a"; for (var j = 0; j < 7; j++) c.fillRect(x + 3 + j * (w - 6) / 7, y - 1.5, 2.4, 2);
    }
    bale(4, 24, 74, 21); bale(16, 6, 48, 19);
  }
  function drawCrates(c) {
    function crate(x, y, w, h, word) {
      c.fillStyle = "#a57a48"; c.fillRect(x, y, w, h);
      c.strokeStyle = "#5a3a1e"; c.lineWidth = 3; c.strokeRect(x + 1.5, y + 1.5, w - 3, h - 3);
      c.lineWidth = 2.4; c.beginPath(); c.moveTo(x + 3, y + 3); c.lineTo(x + w - 3, y + h - 3); c.stroke();
      c.strokeStyle = C.ink; c.lineWidth = 1.3; c.strokeRect(x, y, w, h);
      if (word) { c.fillStyle = "rgba(42,26,14,0.75)"; c.font = "bold 7px " + SERIF; c.textAlign = "center"; c.fillText(word, x + w / 2, y + h / 2 - 2); }
    }
    crate(4, 22, 48, 37, "EXPRESS"); crate(30, 2, 34, 22, ""); crate(52, 30, 16, 29, "");
  }
  function drawCart(c) {
    var I = C.ink;
    c.fillStyle = "#3a2618"; [16, 34, 70, 88].forEach(function (x) { c.beginPath(); c.arc(x, 44, 5.5, 0, TAU); c.fill(); });
    c.fillStyle = "#b08a58"; [16, 34, 70, 88].forEach(function (x) { c.beginPath(); c.arc(x, 44, 1.8, 0, TAU); c.fill(); });
    plank(c, 6, 32, 92, 6, "#7a4d2a", "#4a2e18");
    c.strokeStyle = I; c.lineWidth = 3; c.beginPath(); c.moveTo(98, 34); c.lineTo(104, 22); c.stroke();
    /* a trunk with straps and a carpetbag */
    c.fillStyle = "#5c3d26"; rrect(c, 12, 10, 44, 22, 4); c.fill(); c.strokeStyle = I; c.lineWidth = 1.3; c.stroke();
    c.fillStyle = "#c9a95e"; c.fillRect(22, 10, 3, 22); c.fillRect(42, 10, 3, 22);
    c.fillStyle = "#8a4a2c"; rrect(c, 60, 16, 30, 16, 5); c.fill(); c.stroke();
    c.strokeStyle = "#e0c896"; c.lineWidth = 1; c.beginPath(); c.arc(75, 16, 6, Math.PI, 0); c.stroke();
  }
  /* the locomotive (facing right, rails on the bottom edge, 230x150) and its tender (88x110) */
  function drawLoco(c) {
    var I = C.ink, D = "#2c2520";
    c.lineJoin = "round";
    /* the cab */
    c.fillStyle = "#6a4022"; c.fillRect(0, 30, 46, 78); c.strokeStyle = I; c.lineWidth = 1.6; c.strokeRect(0, 30, 46, 78);
    c.fillStyle = "#3a2216"; c.fillRect(-4, 22, 56, 10);
    c.fillStyle = "#f2dfae"; rrect(c, 9, 42, 24, 22, 3); c.fill(); c.fillStyle = "#2a1c12"; c.fillRect(12, 45, 18, 16);
    /* the boiler, bands, domes, bell, stack, headlamp */
    var g = c.createLinearGradient(0, 60, 0, 104); g.addColorStop(0, "#5a4c40"); g.addColorStop(0.35, "#3a312a"); g.addColorStop(1, "#1e1814");
    c.fillStyle = g; c.fillRect(44, 60, 150, 44); c.strokeStyle = I; c.strokeRect(44, 60, 150, 44);
    c.fillStyle = "#a88a50"; [72, 108, 144, 176].forEach(function (x) { c.fillRect(x, 60, 4, 44); });
    c.fillStyle = D; c.fillRect(192, 56, 22, 52);
    c.fillStyle = "#a88a50"; path(c, [[116, 60], [118, 46], [126, 40], [134, 46], [136, 60]]); c.closePath(); c.fill(); c.strokeStyle = I; c.lineWidth = 1.2; c.stroke();
    c.fillStyle = "#4a3e34"; path(c, [[86, 60], [88, 50], [96, 46], [104, 50], [106, 60]]); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = "#c8a45c"; path(c, [[154, 58], [156, 48], [162, 46], [168, 48], [170, 58]]); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = D; c.fillRect(188, 28, 12, 30);
    path(c, [[176, 4], [212, 4], [202, 30], [186, 30]]); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = "#4a3e34"; c.fillRect(174, 2, 40, 4);
    c.fillStyle = "#3a2216"; c.fillRect(198, 38, 22, 18); c.fillStyle = "#f6e6b8"; c.beginPath(); c.arc(214, 47, 6, 0, TAU); c.fill();
    c.fillStyle = "rgba(255,240,200,0.5)"; c.beginPath(); c.arc(214, 47, 9, 0, TAU); c.fill();
    /* cylinder, running board, wheels and rods, the cowcatcher */
    c.fillStyle = "#3a312a"; c.fillRect(184, 98, 30, 18); c.strokeStyle = I; c.strokeRect(184, 98, 30, 18);
    c.fillStyle = "#1e1814"; c.fillRect(40, 104, 170, 6);
    [[72, 124, 22], [124, 124, 22], [190, 136, 12]].forEach(function (w) {
      c.fillStyle = "#1e1814"; c.beginPath(); c.arc(w[0], w[1], w[2], 0, TAU); c.fill();
      c.strokeStyle = "#8a7a5a"; c.lineWidth = 2; c.beginPath(); c.arc(w[0], w[1], w[2] - 3, 0, TAU); c.stroke();
      c.lineWidth = 1.4; for (var i = 0; i < 10; i++) { var a = i / 10 * TAU; c.beginPath(); c.moveTo(w[0], w[1]); c.lineTo(w[0] + Math.cos(a) * (w[2] - 3), w[1] + Math.sin(a) * (w[2] - 3)); c.stroke(); }
    });
    c.strokeStyle = "#b8a070"; c.lineWidth = 4; c.beginPath(); c.moveTo(66, 130); c.lineTo(130, 130); c.lineTo(196, 108); c.stroke();
    c.fillStyle = "#4a3a2c"; path(c, [[206, 112], [230, 146], [204, 146]]); c.closePath(); c.fill();
    c.strokeStyle = "#8a7a5a"; c.lineWidth = 1.2; for (var j = 0; j < 4; j++) { c.beginPath(); c.moveTo(208 + j * 4, 114 + j * 5); c.lineTo(206 + j * 4, 146); c.stroke(); }
  }
  function drawTender(c) {
    var I = C.ink;
    c.fillStyle = "#3a312a"; c.fillRect(2, 40, 84, 52); c.strokeStyle = I; c.lineWidth = 1.6; c.strokeRect(2, 40, 84, 52);
    c.fillStyle = "#a88a50"; c.fillRect(2, 44, 84, 3); c.fillRect(2, 84, 84, 3);
    /* cordwood stacked on top */
    for (var r = 0; r < 3; r++) for (var i = 0; i < 9 - r; i++) {
      var x = 8 + i * 9 + r * 4.5, y = 36 - r * 8;
      c.fillStyle = "#7a5030"; c.beginPath(); c.arc(x, y, 4.4, 0, TAU); c.fill(); c.strokeStyle = I; c.lineWidth = 1; c.stroke();
      c.fillStyle = "#c8a070"; c.beginPath(); c.arc(x, y, 1.8, 0, TAU); c.fill();
    }
    c.fillStyle = "#1e1814"; c.fillRect(0, 92, 88, 6);
    [16, 34, 56, 74].forEach(function (x) { c.fillStyle = "#1e1814"; c.beginPath(); c.arc(x, 102, 8, 0, TAU); c.fill(); c.strokeStyle = "#8a7a5a"; c.lineWidth = 1.4; c.beginPath(); c.arc(x, 102, 5.6, 0, TAU); c.stroke(); });
  }
  /* a soft puff (smoke, steam and dust), and a muzzle flash */
  function drawPuff(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 1, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,255,0.95)"); g.addColorStop(0.5, "rgba(255,255,255,0.55)"); g.addColorStop(1, "rgba(255,255,255,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  function drawGrain(c, w, h) {
    var r = seeded(31);
    for (var i = 0; i < 1400; i++) {
      var x = r() * w, y = r() * h, a = r();
      c.fillStyle = a < 0.5 ? "rgba(40,22,8," + (0.25 + r() * 0.4) + ")" : "rgba(255,240,205," + (0.2 + r() * 0.35) + ")";
      c.fillRect(x, y, r() < 0.85 ? 1 : 2, r() < 0.85 ? 1 : 2);
    }
  }
  function drawTumble(c) {
    var r = seeded(5), cx = 18, cy = 18;
    c.strokeStyle = "rgba(90,60,30,0.9)"; c.lineWidth = 1;
    for (var i = 0; i < 46; i++) {
      var a0 = r() * TAU, a1 = a0 + rnd(0.6, 2.2), rr0 = 4 + r() * 12;
      c.beginPath(); c.arc(cx + (r() - 0.5) * 6, cy + (r() - 0.5) * 6, rr0, a0, a1); c.stroke();
    }
  }
  function ensureYumaArt(scene) {
    tex(scene, "md-yuma-ran-0", FIG_W, FIG_H, drawFigure("ran", 0));
    tex(scene, "md-yuma-ran-1", FIG_W, FIG_H, drawFigure("ran", 1));
    tex(scene, "md-yuma-ran-2", FIG_W, FIG_H, drawFigure("ran", 2));
    tex(scene, "md-yuma-wade-0", FIG_W, FIG_H, drawFigure("wade", 0));
    tex(scene, "md-yuma-wade-1", FIG_W, FIG_H, drawFigure("wade", 1));
    tex(scene, "md-yuma-wade-2", FIG_W, FIG_H, drawFigure("wade", 2));
    tex(scene, "md-yuma-hat", 28, 14, drawHat);
    for (var i = 0; i < 3; i++) tex(scene, "md-yuma-gun-" + i, 46, 58, drawGunman(i));
    tex(scene, "md-yuma-rider-0", 110, 84, drawRider(0));
    tex(scene, "md-yuma-rider-1", 110, 84, drawRider(1));
    tex(scene, "md-yuma-trough", COVER.trough.w, COVER.trough.h, drawTrough);
    tex(scene, "md-yuma-barrels", COVER.barrels.w, COVER.barrels.h, drawBarrels);
    tex(scene, "md-yuma-wagon", COVER.wagon.w, COVER.wagon.h, drawWagon);
    tex(scene, "md-yuma-wheel", 46, 46, drawWheel);
    tex(scene, "md-yuma-hay", COVER.hay.w, COVER.hay.h, drawHay);
    tex(scene, "md-yuma-crates", COVER.crates.w, COVER.crates.h, drawCrates);
    tex(scene, "md-yuma-cart", COVER.cart.w, COVER.cart.h, drawCart);
    tex(scene, "md-yuma-loco", 230, 150, drawLoco);
    tex(scene, "md-yuma-tender", 88, 110, drawTender);
    tex(scene, "md-yuma-tumble", 36, 36, drawTumble);
    canvasTex(scene, "md-yuma-puff", 64, 64, drawPuff);
    canvasTex(scene, "md-yuma-grain", 160, 160, drawGrain);
  }

  /* ── the backdrop, drawn for the canvas size (Y is the layout) ── */
  /* the sky and the desert behind the town */
  function drawSky(Y, W, H) {
    return function (c) {
      var g = c.createLinearGradient(0, 0, 0, Y.horizonY);
      g.addColorStop(0, "#d6a25e"); g.addColorStop(0.45, "#e9c48a"); g.addColorStop(1, "#f6e2b6");
      c.fillStyle = g; c.fillRect(0, 0, W, Y.horizonY + 2);
      var sx = W * 0.8, sy = H * 0.1;
      g = c.createRadialGradient(sx, sy, 2, sx, sy, H * 0.42);
      g.addColorStop(0, "rgba(255,248,226,0.95)"); g.addColorStop(0.1, "rgba(255,240,200,0.6)"); g.addColorStop(0.5, "rgba(255,226,170,0.16)"); g.addColorStop(1, "rgba(255,226,170,0)");
      c.fillStyle = g; c.fillRect(0, 0, W, Y.horizonY);
      c.fillStyle = "#fff8e4"; c.beginPath(); c.arc(sx, sy, H * 0.03, 0, TAU); c.fill();
      /* high streaks of cloud */
      var r = seeded(11);
      for (var i = 0; i < 7; i++) {
        var cx = r() * W, cy = H * (0.04 + r() * 0.16), cw = W * (0.08 + r() * 0.16);
        c.fillStyle = "rgba(255,246,222," + (0.18 + r() * 0.2) + ")"; c.beginPath(); c.ellipse(cx, cy, cw, 2 + r() * 3, 0, 0, TAU); c.fill();
      }
      g = c.createLinearGradient(0, Y.horizonY, 0, Y.bandTop);
      g.addColorStop(0, "#ecd2a0"); g.addColorStop(1, "#d6b27a");
      c.fillStyle = g; c.fillRect(0, Y.horizonY, W, Y.bandTop - Y.horizonY);
    };
  }
  /* the mesas on the horizon (sliced into strips that waver in the heat) */
  function drawFar(Y, W, H) {
    return function (c, w, h) {
      var y0 = Y.farTop, hz = Y.horizonY - y0, k = Y.k;
      var g = c.createLinearGradient(0, -y0, 0, Y.horizonY - y0);
      g.addColorStop(0, "#d6a25e"); g.addColorStop(0.45, "#e9c48a"); g.addColorStop(1, "#f6e2b6");
      c.fillStyle = g; c.fillRect(0, 0, w, hz + 1);
      g = c.createLinearGradient(0, hz, 0, Y.bandTop - y0);
      g.addColorStop(0, "#ecd2a0"); g.addColorStop(1, "#d6b27a");
      c.fillStyle = g; c.fillRect(0, hz, w, h - hz);
      var r = seeded(23);
      function mesa(x, wd, ht, col) {
        c.fillStyle = col; c.beginPath(); c.moveTo(x - wd * 0.62, hz + 1);
        c.lineTo(x - wd * 0.42, hz - ht * 0.55); c.lineTo(x - wd * 0.36, hz - ht); c.lineTo(x + wd * 0.33, hz - ht); c.lineTo(x + wd * 0.4, hz - ht * 0.6); c.lineTo(x + wd * 0.64, hz + 1); c.closePath(); c.fill();
      }
      for (var i = 0; i < 6; i++) mesa(r() * w, (60 + r() * 120) * k, (10 + r() * 16) * k, "rgba(205,160,104,0.55)");
      for (i = 0; i < 4; i++) mesa(r() * w, (40 + r() * 80) * k, (18 + r() * 22) * k, "rgba(184,134,84,0.7)");
      /* the heat haze over the ground */
      c.fillStyle = "rgba(255,244,214,0.35)"; c.fillRect(0, hz - 2 * k, w, 4 * k);
    };
  }
  /* the town: storefronts, the depot, the platform, the rails, the street */
  function drawTown(Y, W, H) {
    return function (c) {
      var k = Y.k, bt = Y.bandTop, r = seeded(7), g, i;
      c.lineCap = "butt"; c.lineJoin = "miter";
      /* rails and ballast behind the platform (seen when the train pulls out) */
      var ry = Y.coachBot;
      c.fillStyle = "#b3906a"; c.fillRect(Y.platX0 - 6 * k, ry - 16 * k, W - Y.platX0 + 6 * k, 16 * k);
      c.fillStyle = "#5a3a22"; for (var x = Y.platX0; x < W; x += 12 * k) c.fillRect(x, ry - 13 * k, 5 * k, 12 * k);
      c.fillStyle = "#3a312a"; c.fillRect(Y.platX0 - 6 * k, ry - 13 * k, W, 2.4 * k); c.fillRect(Y.platX0 - 6 * k, ry - 5 * k, W, 2.6 * k);
      /* the water tower and a telegraph pole behind the train */
      var wx = Y.towerX, wt = Y.towerTop, tw = 52 * k, th = 46 * k;
      c.strokeStyle = "#4a2e18"; c.lineWidth = 4 * k;
      [[-0.42, -0.6], [0.42, 0.6], [-0.16, -0.22], [0.16, 0.22]].forEach(function (lg) { c.beginPath(); c.moveTo(wx + lg[0] * tw, wt + th); c.lineTo(wx + lg[1] * tw, ry - 16 * k); c.stroke(); });
      c.lineWidth = 1.6 * k; c.beginPath(); c.moveTo(wx - 0.5 * tw, wt + th + 30 * k); c.lineTo(wx + 0.5 * tw, wt + th + 30 * k); c.stroke();
      g = c.createLinearGradient(wx - tw / 2, 0, wx + tw / 2, 0);
      g.addColorStop(0, "#6a4424"); g.addColorStop(0.45, "#a2764a"); g.addColorStop(1, "#5a3a1e");
      c.fillStyle = g; c.fillRect(wx - tw / 2, wt, tw, th);
      c.strokeStyle = "rgba(42,26,14,0.5)"; c.lineWidth = 1;
      for (i = 1; i < 8; i++) { c.beginPath(); c.moveTo(wx - tw / 2 + tw * i / 8, wt); c.lineTo(wx - tw / 2 + tw * i / 8, wt + th); c.stroke(); }
      c.fillStyle = "#2e241c"; c.fillRect(wx - tw / 2, wt + th * 0.25, tw, 2.4 * k); c.fillRect(wx - tw / 2, wt + th * 0.7, tw, 2.4 * k);
      c.fillStyle = "#4a3020"; path(c, [[wx - tw / 2 - 4 * k, wt + 1], [wx, wt - 22 * k], [wx + tw / 2 + 4 * k, wt + 1]]); c.closePath(); c.fill();
      c.strokeStyle = C.ink; c.lineWidth = 1.2; c.strokeRect(wx - tw / 2, wt, tw, th);
      c.strokeStyle = "#3a2618"; c.lineWidth = 3 * k; c.beginPath(); c.moveTo(wx + tw / 2, wt + th * 0.8); c.lineTo(wx + tw / 2 + 18 * k, wt + th + 12 * k); c.stroke();
      var px = Y.poleX, ptop = Y.coachTop - 46 * k;
      c.fillStyle = "#5a3a22"; c.fillRect(px - 2 * k, ptop, 4 * k, ry - 16 * k - ptop);
      c.fillRect(px - 16 * k, ptop + 6 * k, 32 * k, 3 * k);
      c.fillStyle = "#e8dcc0"; [-13, -5, 5, 13].forEach(function (o) { c.fillRect(px + o * k - 1.2 * k, ptop + 2.5 * k, 2.4 * k, 4 * k); });
      c.strokeStyle = "rgba(42,26,14,0.55)"; c.lineWidth = 1;
      [-13, 13].forEach(function (o) {
        c.beginPath(); c.moveTo(px + o * k, ptop + 3 * k); c.quadraticCurveTo((px + Y.depotX1) / 2, ptop + 16 * k, Y.clockX + o * k * 0.6, Y.towerCapY + 30 * k); c.stroke();
        c.beginPath(); c.moveTo(px + o * k, ptop + 3 * k); c.quadraticCurveTo((px + W) / 2, ptop + 14 * k, W + 4, ptop + 4 * k); c.stroke();
      });

      /* ── the street: dust, ruts and hoofprints ── */
      var st = bt - 16 * k;
      g = c.createLinearGradient(0, st, 0, H);
      g.addColorStop(0, "#c49b68"); g.addColorStop(0.22, "#d8b684"); g.addColorStop(0.7, "#dcbb8a"); g.addColorStop(1, "#c39a66");
      c.fillStyle = g; c.fillRect(0, st, W, H - st);
      [0.38, 0.7].forEach(function (f, n) {
        var y = bt + (Y.bandBot - bt) * f;
        for (var j = 0; j < 2; j++) {
          c.strokeStyle = "rgba(110,72,38,0.14)"; c.lineWidth = 3.4 * k; c.beginPath();
          for (var xx = 0; xx <= W + 20; xx += 20) { var yy = y + j * 10 * k + Math.sin(xx * 0.009 + n * 3) * 5 * k; if (xx) c.lineTo(xx, yy); else c.moveTo(xx, yy); }
          c.stroke();
        }
      });
      for (i = 0; i < 340; i++) {
        var pxx = r() * W, pyy = bt + r() * (H - bt);
        c.fillStyle = r() < 0.55 ? "rgba(112,74,40,0.28)" : "rgba(252,240,210,0.4)";
        c.fillRect(pxx, pyy, (1 + r() * 2.2) * k, (1 + r()) * k);
      }
      c.strokeStyle = "rgba(100,64,32,0.25)"; c.lineWidth = 1.3 * k;
      for (i = 0; i < 46; i++) { var hx = r() * W, hy = bt + 20 * k + r() * (Y.bandBot - bt - 20 * k); c.beginPath(); c.arc(hx, hy, 2.6 * k, 0.2 * Math.PI, 0.8 * Math.PI, true); c.stroke(); }

      /* ── the platform ── */
      var p0 = Y.platX0 - 4 * k, pb = Y.coachBot, pf = Y.platFront;
      g = c.createLinearGradient(0, pb, 0, pf);
      g.addColorStop(0, "#8a5c34"); g.addColorStop(1, "#a7784a");
      c.fillStyle = g; c.fillRect(p0, pb, W - p0, pf - pb);
      c.strokeStyle = "rgba(60,36,18,0.45)"; c.lineWidth = 1;
      for (var yy2 = pb + 5 * k; yy2 < pf; yy2 += 5.5 * k) { c.beginPath(); c.moveTo(p0, yy2); c.lineTo(W, yy2); c.stroke(); }
      for (i = 0; i < 40; i++) { var jx = p0 + r() * (W - p0), jy = pb + Math.floor(r() * ((pf - pb) / (5.5 * k))) * 5.5 * k; c.beginPath(); c.moveTo(jx, jy); c.lineTo(jx, jy + 5.5 * k); c.stroke(); }
      c.fillStyle = "#4a2e18"; c.fillRect(p0, pf, W - p0, 6 * k);
      c.fillStyle = "rgba(60,36,18,0.3)"; c.fillRect(p0, pf + 6 * k, W - p0, 6 * k);
      c.fillStyle = "#4a2e18"; c.fillRect(p0, pb, 5 * k, pf - pb + 6 * k);

      /* ── the storefronts ── */
      Y.fronts.forEach(function (b) { drawFront(c, b, Y, k, r); });
      drawDepot(c, Y, k);

      /* the near side of the street: the edge of the far boardwalk we look across from */
      var ny = H - 11 * k;
      c.fillStyle = "#5a3a20"; c.fillRect(0, ny, W, H - ny);
      c.fillStyle = "#7a5030"; c.fillRect(0, ny, W, 3 * k);
      c.strokeStyle = "rgba(30,18,8,0.6)"; c.lineWidth = 1;
      for (i = 0; i < W; i += 46 * k) { c.beginPath(); c.moveTo(i, ny); c.lineTo(i, H); c.stroke(); }
    };
  }
  function drawFront(c, b, Y, k, r) {
    var x0 = b.x0, x1 = b.x1, w = x1 - x0, top = b.top, base = Y.bandTop - 14 * k, I = C.ink, i, g;
    /* the false front's outline */
    function outline() {
    c.beginPath();
    if (b.kind === "saloon") { c.moveTo(x0, base); c.lineTo(x0, top + 26 * k); c.lineTo(x0 + w * 0.22, top + 26 * k); c.lineTo(x0 + w * 0.22, top + 12 * k); c.lineTo(x0 + w * 0.36, top + 12 * k); c.lineTo(x0 + w * 0.36, top); c.lineTo(x1 - w * 0.36, top); c.lineTo(x1 - w * 0.36, top + 12 * k); c.lineTo(x1 - w * 0.22, top + 12 * k); c.lineTo(x1 - w * 0.22, top + 26 * k); c.lineTo(x1, top + 26 * k); c.lineTo(x1, base); }
    else if (b.kind === "bank") { c.moveTo(x0, base); c.lineTo(x0, top + 20 * k); c.lineTo(x0 + w / 2, top); c.lineTo(x1, top + 20 * k); c.lineTo(x1, base); }
    else { c.moveTo(x0, base); c.lineTo(x0, top); c.lineTo(x1, top); c.lineTo(x1, base); }
    c.closePath();
    }
    c.save();
    outline();
    g = c.createLinearGradient(x0, 0, x1, 0);
    g.addColorStop(0, b.col[0]); g.addColorStop(0.5, b.col[1]); g.addColorStop(1, b.col[0]);
    c.fillStyle = g; c.fill();
    c.clip();
    /* clapboards, weathered */
    for (var y = top + 3 * k; y < base; y += 5 * k) {
      c.fillStyle = "rgba(42,26,14," + (0.12 + r() * 0.08) + ")"; c.fillRect(x0, y, w, 1.1 * k);
      c.fillStyle = "rgba(255,240,205,0.08)"; c.fillRect(x0, y + 1.2 * k, w, 1.2 * k);
    }
    for (i = 0; i < 18; i++) { c.fillStyle = "rgba(42,26,14,0.07)"; c.fillRect(x0 + r() * w, top + r() * (base - top), 10 * k + r() * 30 * k, 4 * k); }
    var lit = c.createLinearGradient(0, top, 0, base);
    lit.addColorStop(0, "rgba(255,236,190,0.18)"); lit.addColorStop(1, "rgba(40,22,8,0.18)");
    c.fillStyle = lit; c.fillRect(x0, top, w, base - top);
    c.restore();
    /* the cornice on top */
    c.fillStyle = "#3e2716";
    if (b.kind === "bank") { c.strokeStyle = "#3e2716"; c.lineWidth = 5 * k; c.beginPath(); c.moveTo(x0 - 2 * k, top + 21 * k); c.lineTo(x0 + w / 2, top + 1 * k); c.lineTo(x1 + 2 * k, top + 21 * k); c.stroke(); c.fillRect(x0 - 3 * k, top + 20 * k, w + 6 * k, 5 * k); }
    else if (b.kind === "saloon") { c.fillRect(x0 + w * 0.36 - 2 * k, top - 3 * k, w * 0.28 + 4 * k, 6 * k); c.fillRect(x0 + w * 0.22 - 2 * k, top + 10 * k, w * 0.14 + 2 * k, 4 * k); c.fillRect(x1 - w * 0.36, top + 10 * k, w * 0.14 + 2 * k, 4 * k); c.fillRect(x0 - 2 * k, top + 24 * k, w * 0.22 + 2 * k, 4 * k); c.fillRect(x1 - w * 0.22, top + 24 * k, w * 0.22 + 2 * k, 4 * k); }
    else { c.fillRect(x0 - 3 * k, top - 3 * k, w + 6 * k, 7 * k); for (i = 0; i < 8; i++) c.fillRect(x0 + (i + 0.5) * w / 8 - 2 * k, top + 4 * k, 4 * k, 5 * k); }
    outline(); c.strokeStyle = I; c.lineWidth = 1.4; c.stroke();
    /* the sign board */
    var sy = b.signY, sw = Math.min(w * 0.78, (b.name.length * 14 + 22) * k), sh = 21 * k;
    c.fillStyle = "rgba(30,18,8,0.35)"; c.fillRect(x0 + w / 2 - sw / 2 + 2 * k, sy + 2 * k, sw, sh);
    c.fillStyle = "#efdcae"; c.fillRect(x0 + w / 2 - sw / 2, sy, sw, sh);
    c.strokeStyle = I; c.lineWidth = 1.5 * k; c.strokeRect(x0 + w / 2 - sw / 2, sy, sw, sh);
    c.fillStyle = "#2a1a0e"; c.font = "bold " + Math.round(14 * k) + "px " + SERIF; c.textAlign = "center"; c.textBaseline = "middle";
    var txt = b.name.split("").join(String.fromCharCode(8202));
    c.fillText(txt, x0 + w / 2, sy + sh / 2 + 1 * k, sw - 8 * k);
    /* upper windows */
    var uy = b.upY, wn = b.wins, ww = Math.min(20 * k, w / (wn * 1.9)), wh = 30 * k;
    if (uy) for (var row = 0; uy + row * 46 * k + wh < base - 112 * k; row++) for (i = 0; i < wn; i++) {
      var wx = x0 + w * (i + 0.5) / wn - ww / 2, wy = uy + row * 46 * k;
      c.fillStyle = "#e6d2a4"; c.fillRect(wx - 3 * k, wy - 3 * k, ww + 6 * k, wh + 6 * k);
      c.fillStyle = "#2a1c12"; c.fillRect(wx, wy, ww, wh);
      c.fillStyle = "#cdb48a"; c.fillRect(wx, wy, ww, wh * (0.3 + r() * 0.35));
      c.fillStyle = "rgba(255,246,220,0.35)"; c.fillRect(wx + 2 * k, wy + wh * 0.7, ww * 0.3, wh * 0.22);
      c.strokeStyle = I; c.lineWidth = 1; c.strokeRect(wx - 3 * k, wy - 3 * k, ww + 6 * k, wh + 6 * k);
      c.fillStyle = "#3e2716"; c.fillRect(wx - 5 * k, wy + wh + 3 * k, ww + 10 * k, 3 * k);
    }
    /* the hotel's balcony, the porch roofs */
    var gy = base - 80 * k;   /* the ground floor's top */
    if (b.kind === "hotel") {
      c.fillStyle = "#3e2716"; c.fillRect(x0 - 2 * k, gy - 6 * k, w + 4 * k, 6 * k);
      c.strokeStyle = "#3e2716"; c.lineWidth = 2 * k;
      c.beginPath(); c.moveTo(x0, gy - 22 * k); c.lineTo(x1, gy - 22 * k); c.stroke();
      for (var bx = x0 + 4 * k; bx < x1; bx += 7 * k) { c.lineWidth = 1.3 * k; c.beginPath(); c.moveTo(bx, gy - 22 * k); c.lineTo(bx, gy - 6 * k); c.stroke(); }
      c.fillStyle = "#4a2e18"; [x0 + 3 * k, x0 + w / 2 - 2 * k, x1 - 7 * k].forEach(function (px) { c.fillRect(px, gy, 4 * k, base - gy); });
    } else {
      g = c.createLinearGradient(0, gy - 16 * k, 0, gy + 4 * k);
      g.addColorStop(0, "#5a3a20"); g.addColorStop(1, "#3a2414");
      c.fillStyle = g; path(c, [[x0 - 2 * k, gy - 14 * k], [x1 + 2 * k, gy - 14 * k], [x1 + 6 * k, gy + 4 * k], [x0 - 6 * k, gy + 4 * k]]); c.closePath(); c.fill();
      c.strokeStyle = "rgba(255,236,190,0.2)"; c.lineWidth = 1; for (var sx = x0; sx < x1; sx += 6 * k) { c.beginPath(); c.moveTo(sx, gy - 13 * k); c.lineTo(sx - 2 * k, gy + 3 * k); c.stroke(); }
      c.fillStyle = "#4a2e18"; [x0 - 3 * k, x1 - 1 * k].forEach(function (px) { c.fillRect(px, gy + 4 * k, 4 * k, base - gy - 4 * k); });
    }
    /* the ground floor: shade under the porch, the door and the windows */
    c.fillStyle = "rgba(40,22,8,0.22)"; c.fillRect(x0, gy, w, base - gy);
    var dw = (b.kind === "hotel" ? 30 : 26) * k, dx = b.doorX - dw / 2, dy = gy + 8 * k;
    c.fillStyle = "#e0c896"; c.fillRect(dx - 3 * k, dy - 3 * k, dw + 6 * k, base - dy + 3 * k);
    c.fillStyle = "#1e130b"; c.fillRect(dx, dy, dw, base - dy);
    if (b.kind === "saloon") {
      c.fillStyle = "#8a5a32"; var bw2 = dw / 2 - 1 * k, by = dy + 18 * k, bh = 28 * k;
      [dx, dx + dw / 2 + 1 * k].forEach(function (x) { rrect(c, x, by, bw2, bh, 3 * k); c.fill(); c.strokeStyle = I; c.lineWidth = 1; c.stroke(); });
    } else if (b.kind === "hotel") {
      c.fillStyle = "#5a3a20"; c.fillRect(dx + 2 * k, dy + 6 * k, dw / 2 - 3 * k, base - dy - 8 * k); c.fillRect(dx + dw / 2 + 1 * k, dy + 6 * k, dw / 2 - 3 * k, base - dy - 8 * k);
      c.fillStyle = "#cdb48a"; c.fillRect(dx, dy - 1 * k, dw, 5 * k);
    } else { c.fillStyle = "#5a3a20"; c.fillRect(dx + 3 * k, dy + 4 * k, dw - 6 * k, base - dy - 6 * k); c.fillStyle = "#cdb48a"; c.fillRect(dx + 6 * k, dy + 8 * k, dw - 12 * k, 12 * k); }
    var ww2 = Math.min(34 * k, (w - dw) / 2 - 16 * k);
    [b.doorX - dw / 2 - 10 * k - ww2, b.doorX + dw / 2 + 10 * k].forEach(function (wx2) {
      if (ww2 < 10 * k || wx2 < x0 + 3 * k || wx2 + ww2 > x1 - 3 * k) return;
      c.fillStyle = "#e0c896"; c.fillRect(wx2 - 2 * k, dy + 4 * k, ww2 + 4 * k, 40 * k);
      c.fillStyle = "#2a1c12"; c.fillRect(wx2, dy + 6 * k, ww2, 36 * k);
      c.fillStyle = "rgba(255,246,220,0.28)"; path(c, [[wx2 + ww2 * 0.15, dy + 6 * k], [wx2 + ww2 * 0.45, dy + 6 * k], [wx2 + ww2 * 0.2, dy + 42 * k], [wx2, dy + 42 * k]]); c.closePath(); c.fill();
      c.strokeStyle = "#e0c896"; c.lineWidth = 1.2 * k; c.beginPath(); c.moveTo(wx2 + ww2 / 2, dy + 6 * k); c.lineTo(wx2 + ww2 / 2, dy + 42 * k); c.stroke();
    });
    /* a wanted poster by the bank door (no likeness: a sketch of a hat) */
    if (b.kind === "bank" || b.kind === "store") {
      var qx = x1 - 22 * k, qy = gy + 14 * k;
      if (qx > b.doorX + dw / 2 + 4 * k) {
        c.save(); c.translate(qx, qy); c.rotate(0.05);
        c.fillStyle = "#f2e2b8"; c.fillRect(-10 * k, 0, 20 * k, 26 * k); c.strokeStyle = I; c.lineWidth = 0.8; c.strokeRect(-10 * k, 0, 20 * k, 26 * k);
        c.fillStyle = I; c.font = "bold " + Math.max(5, Math.round(5 * k)) + "px " + SERIF; c.textAlign = "center"; c.textBaseline = "alphabetic"; c.fillText("WANTED", 0, 6 * k);
        c.fillStyle = "rgba(42,26,14,0.7)"; c.beginPath(); c.arc(0, 13 * k, 3.6 * k, 0, TAU); c.fill(); c.fillRect(-6 * k, 9 * k, 12 * k, 1.6 * k);
        c.fillStyle = I; c.fillText("$200", 0, 24 * k);
        c.restore();
      }
    }
    /* the boardwalk and its step */
    c.fillStyle = "#9a6c42"; c.fillRect(x0 - 4 * k, base, w + 8 * k, Y.bandTop - 2 * k - base);
    c.strokeStyle = "rgba(42,26,14,0.45)"; c.lineWidth = 1; for (var px2 = x0 - 4 * k; px2 < x1 + 4 * k; px2 += 7 * k) { c.beginPath(); c.moveTo(px2, base); c.lineTo(px2, Y.bandTop - 2 * k); c.stroke(); }
    c.fillStyle = "#4a2e18"; c.fillRect(x0 - 4 * k, Y.bandTop - 4 * k, w + 8 * k, 4 * k);
    /* a hitching rail in front of the saloon */
    if (b.kind === "saloon") {
      var hy2 = Y.bandTop - 6 * k;
      c.fillStyle = "#4a2e18"; [x0 + 8 * k, x1 - 12 * k].forEach(function (px3) { c.fillRect(px3, hy2 - 22 * k, 4 * k, 22 * k); });
      c.fillRect(x0 + 6 * k, hy2 - 22 * k, w - 14 * k, 4 * k);
    }
  }
  function drawDepot(c, Y, k) {
    var I = C.ink, x0 = Y.depotX0, x1 = Y.depotX1, w = x1 - x0, cx = Y.clockX, base = Y.bandTop - 12 * k, top = Y.depotTop, g, i;
    /* the clock tower, behind the roof */
    var tw = 30 * k;
    c.fillStyle = "#9a6c42"; c.fillRect(cx - tw, Y.towerCapY, tw * 2, Y.ridgeY - Y.towerCapY + 6 * k);
    c.strokeStyle = "rgba(42,26,14,0.4)"; c.lineWidth = 1; for (i = -tw; i < tw; i += 5 * k) { c.beginPath(); c.moveTo(cx + i, Y.towerCapY); c.lineTo(cx + i, Y.ridgeY); c.stroke(); }
    c.strokeStyle = I; c.lineWidth = 1.4; c.strokeRect(cx - tw, Y.towerCapY, tw * 2, Y.ridgeY - Y.towerCapY);
    c.fillStyle = "#4a3020"; path(c, [[cx - tw - 6 * k, Y.towerCapY + 2 * k], [cx, Y.towerCapY - 28 * k], [cx + tw + 6 * k, Y.towerCapY + 2 * k]]); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = "#3e2716"; c.fillRect(cx - 1.5 * k, Y.towerCapY - 40 * k, 3 * k, 14 * k);
    /* the clock face (the hands are drawn every frame) */
    var R = Y.clockR;
    c.fillStyle = "#3e2716"; c.beginPath(); c.arc(cx, Y.clockY, R + 4 * k, 0, TAU); c.fill();
    g = c.createRadialGradient(cx - R * 0.3, Y.clockY - R * 0.3, 1, cx, Y.clockY, R);
    g.addColorStop(0, "#fff6dc"); g.addColorStop(1, "#e6d0a2");
    c.fillStyle = g; c.beginPath(); c.arc(cx, Y.clockY, R, 0, TAU); c.fill();
    c.strokeStyle = I; c.lineWidth = 1.2; c.stroke();
    for (i = 0; i < 60; i++) {
      var a = i / 60 * TAU - Math.PI / 2, big = i % 5 === 0, r0 = R * (big ? 0.78 : 0.86);
      c.strokeStyle = I; c.lineWidth = big ? 1.6 * k : 0.7;
      c.beginPath(); c.moveTo(cx + Math.cos(a) * r0, Y.clockY + Math.sin(a) * r0); c.lineTo(cx + Math.cos(a) * R * 0.93, Y.clockY + Math.sin(a) * R * 0.93); c.stroke();
    }
    c.fillStyle = I; c.font = "bold " + Math.max(6, Math.round(7.5 * k)) + "px " + SERIF; c.textAlign = "center"; c.textBaseline = "middle";
    [["XII", 0], ["III", 3], ["VI", 6], ["IX", 9]].forEach(function (n) { var a = n[1] / 12 * TAU - Math.PI / 2; c.fillText(n[0], cx + Math.cos(a) * R * 0.6, Y.clockY + Math.sin(a) * R * 0.6); });
    /* 3:10 marked in red on the dial */
    var a10 = 10 / 60 * TAU - Math.PI / 2;
    c.strokeStyle = C.red; c.lineWidth = 3 * k; c.beginPath(); c.arc(cx, Y.clockY, R * 0.9, a10 - 0.07, a10 + 0.07); c.stroke();
    /* the roof: deep eaves on brackets */
    g = c.createLinearGradient(0, Y.ridgeY, 0, top);
    g.addColorStop(0, "#4a3020"); g.addColorStop(1, "#6a4428");
    c.fillStyle = g; path(c, [[x0 - 16 * k, top], [x0 + 18 * k, Y.ridgeY], [x1 - 18 * k, Y.ridgeY], [x1 + 16 * k, top]]); c.closePath(); c.fill();
    c.strokeStyle = "rgba(20,10,4,0.4)"; c.lineWidth = 1;
    for (var yy = Y.ridgeY + 5 * k; yy < top; yy += 5 * k) { var f = (yy - Y.ridgeY) / (top - Y.ridgeY); c.beginPath(); c.moveTo(x0 + 18 * k - f * 34 * k, yy); c.lineTo(x1 - 18 * k + f * 34 * k, yy); c.stroke(); }
    c.strokeStyle = I; c.lineWidth = 1.4; c.stroke();
    path(c, [[x0 - 16 * k, top], [x0 + 18 * k, Y.ridgeY], [x1 - 18 * k, Y.ridgeY], [x1 + 16 * k, top]]); c.closePath(); c.stroke();
    /* the walls: board and batten */
    g = c.createLinearGradient(x0, 0, x1, 0);
    g.addColorStop(0, "#9a6a40"); g.addColorStop(0.5, "#b4865a"); g.addColorStop(1, "#946640");
    c.fillStyle = g; c.fillRect(x0, top, w, base - top);
    c.fillStyle = "rgba(42,26,14,0.3)"; for (i = x0 + 3 * k; i < x1; i += 6 * k) c.fillRect(i, top, 1.6 * k, base - top);
    c.fillStyle = "rgba(40,22,8,0.35)"; c.fillRect(x0, top, w, 12 * k);   /* the eave's shadow */
    c.fillStyle = "#3e2716"; for (i = 0; i < 5; i++) { var bx = x0 + (i + 0.5) * w / 5; path(c, [[bx - 2 * k, top], [bx + 2 * k, top], [bx + 2 * k, top + 12 * k]]); c.closePath(); c.fill(); }
    c.strokeStyle = I; c.lineWidth = 1.4; c.strokeRect(x0, top, w, base - top);
    /* the town's name on the eave */
    var sw = Math.min(w - 10 * k, 120 * k), sy = top - 13 * k;
    c.fillStyle = "#efdcae"; c.fillRect(cx - sw / 2, sy, sw, 15 * k); c.strokeStyle = I; c.lineWidth = 1.2; c.strokeRect(cx - sw / 2, sy, sw, 15 * k);
    c.fillStyle = I; c.font = "bold " + Math.round(10.5 * k) + "px " + SERIF; c.textAlign = "center"; c.textBaseline = "middle";
    c.fillText("CONTENTION", cx, sy + 8 * k, sw - 6 * k);
    /* the timetable slate (the countdown is written on it every frame) */
    var bw = Math.min(w - 16 * k, 104 * k), by = Y.boardY - 16 * k, bh = 40 * k;
    c.fillStyle = "#4a2e18"; c.fillRect(cx - bw / 2 - 3 * k, by - 3 * k, bw + 6 * k, bh + 6 * k);
    c.fillStyle = "#2c2622"; c.fillRect(cx - bw / 2, by, bw, bh);
    c.fillStyle = "rgba(240,230,210,0.85)"; c.font = "bold " + Math.round(8.5 * k) + "px " + SERIF; c.fillText("3:10 TO YUMA", cx, by + 8 * k, bw - 6 * k);
    c.fillStyle = "rgba(240,230,210,0.25)"; c.fillRect(cx - bw / 2 + 6 * k, by + 14 * k, bw - 12 * k, 0.8);
    /* windows either side and the door */
    [x0 + w * 0.13, x1 - w * 0.13 - 16 * k].forEach(function (wx) {
      if (Math.abs(wx + 8 * k - cx) < bw / 2 + 12 * k) return;
      c.fillStyle = "#e0c896"; c.fillRect(wx - 2 * k, base - 50 * k, 20 * k, 36 * k);
      c.fillStyle = "#2a1c12"; c.fillRect(wx, base - 48 * k, 16 * k, 32 * k);
      c.fillStyle = "rgba(255,246,220,0.3)"; c.fillRect(wx + 2 * k, base - 46 * k, 4 * k, 26 * k);
    });
    c.fillStyle = "#e0c896"; c.fillRect(cx - 13 * k, base - 36 * k, 26 * k, 36 * k);
    c.fillStyle = "#1e130b"; c.fillRect(cx - 10 * k, base - 33 * k, 20 * k, 33 * k);
    /* its boardwalk */
    c.fillStyle = "#9a6c42"; c.fillRect(x0 - 4 * k, base, w + 4 * k, Y.bandTop - base);
    c.fillStyle = "#4a2e18"; c.fillRect(x0 - 4 * k, Y.bandTop - 4 * k, w + 4 * k, 4 * k);
    /* a bench and a lamp post */
    c.fillStyle = "#4a2e18"; c.fillRect(x0 + 8 * k, base - 14 * k, 30 * k, 3 * k); c.fillRect(x0 + 10 * k, base - 12 * k, 2 * k, 12 * k); c.fillRect(x0 + 34 * k, base - 12 * k, 2 * k, 12 * k); c.fillRect(x0 + 8 * k, base - 24 * k, 30 * k, 2 * k);
  }
  /* the cars of the 3:10: n coaches, one door each, a letter placard over every door */
  function drawCoaches(Y, n) {
    return function (c, w, h) {
      var k = Y.k, I = C.ink, cw = w / n, ch = Y.coachH, roofH = ch * 0.13, lb = roofH + ch * 0.12, bodyB = ch - ch * 0.17, i;
      for (i = 0; i < n; i++) {
        var x0 = i * cw + 4 * k, x1 = (i + 1) * cw - 4 * k, cwi = x1 - x0, dx = (x0 + x1) / 2;
        /* the roof and its clerestory */
        c.fillStyle = "#33251b"; rrect(c, x0 - 2 * k, 2 * k, cwi + 4 * k, roofH, 5 * k); c.fill();
        c.fillStyle = "#4a3626"; c.fillRect(x0 + cwi * 0.14, -1 * k + 0.5, cwi * 0.72, roofH * 0.55);
        c.fillStyle = "#e6d2a0"; for (var q = x0 + cwi * 0.18; q < x0 + cwi * 0.84; q += 9 * k) c.fillRect(q, 0.6 * roofH * 0.2 + 0.5, 4 * k, roofH * 0.25);
        /* the letterboard and the body */
        c.fillStyle = "#cfb07c"; c.fillRect(x0, roofH, cwi, lb - roofH);
        var g = c.createLinearGradient(0, lb, 0, bodyB);
        g.addColorStop(0, "#8a5630"); g.addColorStop(1, "#6a3e22");
        c.fillStyle = g; c.fillRect(x0, lb, cwi, bodyB - lb);
        c.fillStyle = "rgba(30,16,6,0.25)"; for (var gx = x0 + 3 * k; gx < x1; gx += 4 * k) c.fillRect(gx, lb + ch * 0.36, 0.9 * k, bodyB - lb - ch * 0.36);
        c.fillStyle = "#c9a95e"; c.fillRect(x0, lb + ch * 0.34, cwi, 1.4 * k);
        /* windows either side of the door */
        var dw = Math.min(26 * k, cwi * 0.3), winW = 9 * k, winH = ch * 0.2, wy = lb + ch * 0.07;
        for (var wx = x0 + 6 * k; wx + winW < dx - dw / 2 - 4 * k; wx += 15 * k) win(wx);
        for (wx = x1 - 6 * k - winW; wx > dx + dw / 2 + 4 * k; wx -= 15 * k) win(wx);
        function win(x) {
          c.fillStyle = "#e6d2a0"; rrect(c, x - 1.5 * k, wy - 1.5 * k, winW + 3 * k, winH + 3 * k, 4 * k); c.fill();
          c.fillStyle = "#2b2016"; rrect(c, x, wy, winW, winH, 3.5 * k); c.fill();
          c.fillStyle = "rgba(255,246,220,0.35)"; c.fillRect(x + 1.5 * k, wy + winH * 0.5, 2 * k, winH * 0.4);
        }
        /* the door, its handrails and steps */
        var dTop = lb + ch * 0.03;
        c.fillStyle = "#e6d2a0"; c.fillRect(dx - dw / 2 - 2 * k, dTop - 2 * k, dw + 4 * k, bodyB - dTop + 2 * k);
        c.fillStyle = "#4a2a16"; c.fillRect(dx - dw / 2, dTop, dw, bodyB - dTop);
        c.fillStyle = "#2b2016"; rrect(c, dx - dw / 2 + 4 * k, dTop + 4 * k, dw - 8 * k, (bodyB - dTop) * 0.36, 3 * k); c.fill();
        c.fillStyle = "#c9a95e"; c.fillRect(dx + dw / 2 - 6 * k, dTop + (bodyB - dTop) * 0.55, 3 * k, 3 * k);
        c.strokeStyle = "#e6d2a0"; c.lineWidth = 1.6 * k; c.beginPath(); c.moveTo(dx - dw / 2 - 5 * k, dTop + 8 * k); c.lineTo(dx - dw / 2 - 5 * k, ch - 2 * k); c.moveTo(dx + dw / 2 + 5 * k, dTop + 8 * k); c.lineTo(dx + dw / 2 + 5 * k, ch - 2 * k); c.stroke();
        c.fillStyle = "#3a2618"; c.fillRect(dx - dw / 2 - 2 * k, bodyB, dw + 4 * k, ch - bodyB);
        c.fillStyle = "#e0c896"; c.fillRect(dx - dw / 2 - 2 * k, bodyB + (ch - bodyB) * 0.42, dw + 4 * k, 2 * k); c.fillRect(dx - dw / 2 - 4 * k, ch - 3 * k, dw + 8 * k, 2.4 * k);
        /* the underframe and the trucks */
        c.fillStyle = "#241a12"; c.fillRect(x0, bodyB, dx - dw / 2 - 2 * k - x0, 5 * k); c.fillRect(dx + dw / 2 + 2 * k, bodyB, x1 - dx - dw / 2 - 2 * k, 5 * k);
        [x0 + 12 * k, x0 + 24 * k, x1 - 24 * k, x1 - 12 * k].forEach(function (wx2) {
          if (Math.abs(wx2 - dx) < dw / 2 + 10 * k) return;
          c.fillStyle = "#1e1814"; c.beginPath(); c.arc(wx2, ch - 6 * k, 6 * k, 0, TAU); c.fill();
          c.strokeStyle = "#8a7a5a"; c.lineWidth = 1; c.beginPath(); c.arc(wx2, ch - 6 * k, 4 * k, 0, TAU); c.stroke();
        });
        c.strokeStyle = I; c.lineWidth = 1.4; c.strokeRect(x0, roofH, cwi, bodyB - roofH);
        /* the letter placard over the door (the letter is a text object) */
        var py = Y.placardDy;
        c.fillStyle = "rgba(30,16,6,0.35)"; c.beginPath(); c.ellipse(dx + 1.5 * k, py + 2 * k, 17 * k, 13 * k, 0, 0, TAU); c.fill();
        c.fillStyle = "#3e2716"; c.beginPath(); c.ellipse(dx, py, 17 * k, 13 * k, 0, 0, TAU); c.fill();
        c.fillStyle = "#f4e6c4"; c.beginPath(); c.ellipse(dx, py, 14 * k, 10.5 * k, 0, 0, TAU); c.fill();
        /* the coupler to the next car */
        if (i < n - 1) { c.fillStyle = "#241a12"; c.fillRect(x1 - 2 * k, bodyB - 4 * k, 12 * k, 4 * k); }
      }
    };
  }
  /* the vignette: sepia corners */
  function drawVignette(c, w, h) {
    var g = c.createRadialGradient(w / 2, h * 0.48, Math.min(w, h) * 0.35, w / 2, h * 0.5, Math.max(w, h) * 0.75);
    g.addColorStop(0, "rgba(60,32,10,0)"); g.addColorStop(0.7, "rgba(60,32,10,0.22)"); g.addColorStop(1, "rgba(40,20,6,0.6)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }

  /* ══ the mode ══════════════════════════════════════════════════════════ */
  M.extend("yuma", {
    name: "Make the 3:10", kind: "escort level", level: "escort level", act: "RUN",
    how: "Contention, Arizona Territory: the 3:10 to Yuma is standing at the depot. The rancher Dan Evans has the outlaw Ben Wade in handcuffs, and he has to walk him across town and put him on that train. Every car has a letter over its door: walk Wade up the steps of the car with the right answer. Wade's gang is up on the rooftops. When a gunman rises, a dotted red line follows you; when it turns solid, he is about to fire along it. Keep cover between you and him (a water trough, barrels, hay, a wagon, freight crates): if the red line stops at the cover, you're safe. Then run for the next cover. Watch the station clock: the train leaves at 3:10.",
    rules: "Boarding a car with a wrong letter costs a life, and that car's door is nailed shut. A gunman's shot that reaches you costs a life too (it knocks your hat off), and so does missing the train: if the clock reaches 3:10 the 3:10 pulls out, and the conductor backs it in for one more try. Later on, a gang rider galloping down the street costs a life if he catches you in his lane.",
    keys: "Arrow keys, WASD or the on-screen pad walk · hold Space or RUN to run (it uses your breath, which comes back, faster behind cover) · or click or tap where to walk, and click a car to walk to it · walk up (▲) the steps of a car to board it.",
    tip: "MAKE THE 3:10 — walk Wade to the car with the right letter. Keep cover between you and the red lines from the rooftops.",
    hint1: "Walk Wade up the steps of the train car with the right letter. The passage stays in the side panel.",
    hint2: "This question has two right letters. Board both cars that carry them.",
    news: ["",
      "Two of Wade's gang can be up on the rooftops at once.",
      "Wade digs in his heels: when he stops, tap Space or RUN (or click) to drag him along.",
      "Gang riders gallop down the street. A dust cloud and a dashed line show the lane he will ride: get out of it.",
      "Gunmen on the depot roof and the water tower fire from the right, three can be up at once, and there is less cover.",
      "A freight wagon rolls along the street: moving cover. Keep up with it.",
      "A gunman can fire twice: after one shot he aims again, quicker.",
      "Gunmen walk along the rooftops while they aim, so their lines swing. Still less cover.",
      "Gunmen climb onto the roof of the train, right over the platform.",
      "The whole gang: four guns at once, faster riders and the tightest clock, on top of everything else."],
    params: yumaParams
  }, {
    yumaParams: function (n) { return yumaParams(n); },

    setup_yuma: function () {
      ensureYumaArt(this);
      var P = yumaParams(this.night), self = this, i;
      var Y = this.yu = { P: P, t: 0, covers: [], doors: [], spots: [], guns: [], puffs: [], pool: [], trail: [], told: {}, left: P.clockS, popCd: P.grace,
        riderCd: P.riderEvery * 0.55, wadeCd: P.wadeEvery * 0.6, rider: null, dig: null, goal: null, hatFly: null, lastFrame: -9, prevAct: false, prevPtr: false,
        stepT: 0, smokeT: 0, hissT: 2, bellT: 0, warned15: false, tumble: null, tumbleCd: 6000, hits: 0, shots: 0, blocked: 0, vult: [rnd(0, 6), rnd(0, 6)],
        train: { state: "in", dx: 0, v: 0, t: 0, lost: false }, keys: {}, clicks: [] };
      /* clicks are queued: a quick click can start and end between two frames */
      this.input.on("pointerdown", function (p) { if (self.yu && self.yu.clicks.length < 8 && !(p.rightButtonDown && p.rightButtonDown())) self.yu.clicks.push({ x: p.x, y: p.y }); });
      this.cameras.main.setBackgroundColor("#d6a25e");
      this.yumaLayout();
      Y.sky = this.add.image(0, 0, Y.keys.sky).setOrigin(0, 0).setDepth(0);
      Y.slices = [];
      for (i = 0; i < 9; i++) Y.slices.push(this.add.image(0, 0, Y.keys.far).setOrigin(0, 0).setDepth(0.5));
      Y.skyG = this.add.graphics().setDepth(0.8);
      Y.town = this.add.image(0, 0, Y.keys.town).setOrigin(0, 0).setDepth(2);
      Y.clockG = this.add.graphics().setDepth(2.2);
      Y.rifleG = this.add.graphics().setDepth(2.1);
      Y.trainRifleG = this.add.graphics().setDepth(3.1);
      Y.coach = this.add.image(0, 0, "__DEFAULT").setOrigin(0, 1).setDepth(3);
      Y.loco = this.add.image(0, 0, "md-yuma-loco").setOrigin(0, 1).setDepth(3);
      Y.doorG = this.add.graphics().setDepth(3.2);
      Y.shadowG = this.add.graphics().setDepth(9.5);
      Y.leadG = this.add.graphics().setDepth(10);
      Y.fxG = this.add.graphics().setDepth(25);
      Y.heatG = this.add.graphics().setDepth(26);
      Y.hudG = this.add.graphics().setDepth(45);
      Y.vig = this.add.image(0, 0, Y.keys.vig).setOrigin(0, 0).setDepth(40);
      Y.grain = this.add.tileSprite(0, 0, this.W, this.H, "md-yuma-grain").setOrigin(0, 0).setDepth(41).setAlpha(0.2);
      Y.ran = { x: 0, y: 0, face: 1, state: "walk", t: 0, walk: 0, wind: 1, crouch: false, moving: false, running: false,
        spr: this.add.image(0, 0, "md-yuma-ran-0").setOrigin(0.5, FEET / FIG_H).setDepth(15),
        hat: this.add.image(0, 0, "md-yuma-hat").setOrigin(0.5, 11 / 14).setDepth(15) };
      Y.wade = { x: 0, y: 0, face: 1, walk: 0, spr: this.add.image(0, 0, "md-yuma-wade-0").setOrigin(0.5, FEET / FIG_H).setDepth(15) };
      var serif = SERIF;
      Y.txLeave = this.add.text(0, 0, "", { fontFamily: serif, fontSize: 13, color: "#f2e6c8", fontStyle: "bold" }).setOrigin(0.5).setDepth(2.3);
      Y.txDig = this.add.text(0, 0, "", { fontFamily: serif, fontSize: 15, color: "#fff2cc", fontStyle: "bold", stroke: C.ink, strokeThickness: 5, align: "center" }).setOrigin(0.5, 1).setDepth(46).setVisible(false);
      Y.txYou = this.add.text(0, 0, "YOU", { fontFamily: serif, fontSize: 13, color: "#fff2cc", fontStyle: "bold", stroke: C.ink, strokeThickness: 4 }).setOrigin(0.5, 1).setDepth(46).setVisible(false);
      Y.tumbleSpr = this.add.image(-99, -99, "md-yuma-tumble").setDepth(14).setVisible(false);
      this.yumaPlaceStatic();
      this.makeSol(Y.start.x, Y.start.y - 40, "right").setVisible(false);   /* the coin pop-ups follow this sprite */
    },

    /* everything that depends on the canvas size; draws the backdrop for it */
    yumaLayout: function () {
      var Y = this.yu, W = this.W, H = this.H, k, i;
      k = Y.k = clamp(Math.min(H / 680, W / 1040), 0.5, 1.3);
      Y.horizonY = Math.round(H * 0.34);
      Y.farTop = Math.round(Y.horizonY - H * 0.1);
      Y.bandTop = Math.round(H * 0.575);
      Y.bandBot = Math.round(H - Math.max(18 * k, H * 0.05));
      Y.depotX0 = Math.round(W * 0.315); Y.depotX1 = Math.round(W * 0.425);
      Y.platX0 = Y.depotX1 + Math.round(6 * k);
      Y.platFront = Y.bandTop + Math.round(44 * k);
      Y.coachBot = Y.bandTop - Math.round(10 * k);
      Y.coachH = Math.round(Math.min(H * 0.2, 150 * k));
      Y.coachTop = Y.coachBot - Y.coachH;
      Y.stripX0 = Y.platX0 + Math.round(6 * k);
      Y.stripX1 = W - Math.round(196 * k);
      Y.placardDy = Math.round(Y.coachH * 0.13 + Y.coachH * 0.06);
      Y.towerX = Math.round(Y.stripX0 + (Y.stripX1 - Y.stripX0) * 0.2);
      Y.towerTop = Math.round(Y.coachTop - 54 * k);
      Y.poleX = Math.round(Y.stripX0 + (Y.stripX1 - Y.stripX0) * 0.62);
      /* the depot and its clock */
      Y.clockX = Math.round((Y.depotX0 + Y.depotX1) / 2);
      Y.depotTop = Math.round(Y.bandTop - 12 * k - Math.max(96 * k, H * 0.17));
      Y.ridgeY = Math.round(Y.depotTop - Math.max(30 * k, H * 0.05));
      Y.clockR = Math.round(21 * k);
      Y.clockY = Math.round(Y.ridgeY - Y.clockR - 9 * k);
      Y.towerCapY = Math.round(Y.clockY - Y.clockR - 10 * k);
      Y.boardY = Math.round(Y.depotTop + 34 * k);
      /* the storefronts */
      var R = Y.depotX0 - 10 * k, x = 0, defs = [
        { name: "HOTEL", f: 0.36, top: 0.215, kind: "hotel", col: ["#a87a4a", "#c29464"], wins: 3 },
        { gap: 0.035 },
        { name: "SALOON", f: 0.27, top: 0.295, kind: "saloon", col: ["#9a6a3c", "#b4844e"], wins: 2 },
        { gap: 0.03 },
        { name: "BANK", f: 0.305, top: 0.265, kind: "bank", col: ["#b08a5e", "#caa676"], wins: 2 }];
      Y.fronts = [];
      defs.forEach(function (d) {
        if (d.gap) { x += d.gap * R; return; }
        var b = { name: d.name, kind: d.kind, col: d.col, wins: d.wins, x0: Math.round(x), x1: Math.round(x + d.f * R), top: Math.round(H * d.top) };
        var base = Y.bandTop - 14 * k;
        b.signY = b.top + (d.kind === "saloon" ? 32 : d.kind === "bank" ? 28 : 10) * k;
        b.upY = d.kind === "hotel" ? b.top + 40 * k : b.signY + 32 * k;
        if (b.upY + 30 * k > base - 104 * k) b.upY = 0;
        b.doorX = Math.round(b.x0 + (b.x1 - b.x0) * (d.kind === "hotel" ? 0.5 : 0.5));
        Y.fronts.push(b);
        x += d.f * R;
      });
      Y.hotelDoorX = Y.fronts[0].doorX;
      Y.start = { x: Y.hotelDoorX, y: Y.bandTop + 12 * k };
      Y.walkX0 = 14 * k; Y.walkX1 = W - 14 * k;
      Y.coverX0 = Y.start.x + 70 * k; Y.coverX1 = Y.stripX1 - 30 * k;
      /* where the gang can rise: the false fronts, the depot roof, the water tower, the train's roof */
      Y.spots = [];
      Y.fronts.forEach(function (b, bi) {
        var w = b.x1 - b.x0, n = bi === 0 ? 2 : 1;
        for (var j = 0; j < n; j++) {
          var sx = n === 1 ? b.x0 + w * 0.5 : b.x0 + w * (0.28 + j * 0.44), ey = b.kind === "saloon" ? b.top + (Math.abs(sx - (b.x0 + w / 2)) < w * 0.14 ? 0 : 12 * k) : b.kind === "bank" ? b.top + 20 * k * Math.abs(sx - (b.x0 + w / 2)) / (w / 2) : b.top;
          Y.spots.push({ kind: "front", x: sx, y: ey, x0: b.x0 + 14 * k, x1: b.x1 - 14 * k, cd: 0, busy: false });
        }
      });
      Y.spots.push({ kind: "side", x: Y.depotX0 + (Y.depotX1 - Y.depotX0) * 0.2, y: Y.ridgeY + 2 * k, x0: Y.depotX0 + 20 * k, x1: Y.clockX - 36 * k, cd: 0, busy: false });
      Y.spots.push({ kind: "side", x: Y.towerX, y: Y.towerTop + 1 * k, x0: Y.towerX - 10 * k, x1: Y.towerX + 10 * k, cd: 0, busy: false });
      /* the backdrop textures for this size */
      var self = this, sz = W + "x" + H;
      function swap(name, key, w, h, draw) {
        var old = Y.keys[name];
        if (old === key) return;
        canvasTex(self, key, w, h, draw);
        Y.keys[name] = key;
        if (old && old !== key) { try { self.textures.remove(old); } catch (e) {} }
      }
      swap("sky", "md-yuma-sky-" + sz, W, H, drawSky(Y, W, H));
      Y.farW = W + 24;
      Y.farH = Math.max(20, Math.round(Y.horizonY - Y.farTop + H * 0.05));
      swap("far", "md-yuma-far-" + sz, Y.farW, Y.farH, drawFar(Y, W, H));
      swap("town", "md-yuma-town-" + sz, W, H, drawTown(Y, W, H));
      swap("vig", "md-yuma-vig-" + sz, W, H, drawVignette);
    },
    /* positions of the fixed things */
    yumaPlaceStatic: function () {
      var Y = this.yu, W = this.W, H = this.H, k = Y.k, i, n = Y.slices.length, sh = Y.farH / n;
      Y.sky.setTexture(Y.keys.sky).setPosition(0, 0);
      Y.slices.forEach(function (s, j) { s.setTexture(Y.keys.far).setCrop(0, j * sh, Y.farW, sh + 1).setPosition(-12, Y.farTop); });
      Y.town.setTexture(Y.keys.town).setPosition(0, 0);
      Y.vig.setTexture(Y.keys.vig).setPosition(0, 0);
      Y.grain.setSize(W, H);
      Y.txLeave.setFontSize(Math.max(9, Math.round(12 * k))).setPosition(Y.clockX, Y.boardY + 9 * k);
      Y.txDig.setFontSize(Math.max(11, Math.round(15 * k)));
      Y.txYou.setFontSize(Math.max(10, Math.round(13 * k)));
      Y.ran.spr.setScale(k / TS); Y.ran.hat.setScale(k / TS); Y.wade.spr.setScale(k / TS);
      Y.tumbleSpr.setScale(k / TS);
      this.yumaTrainArt();
    },
    /* the coaches for this many letters, at this size */
    yumaTrainArt: function () {
      var Y = this.yu, k = Y.k, n = Math.max(1, Y.doors.length || 4), key = "md-yuma-coach-" + n + "-" + this.W + "x" + this.H;
      var w = Y.stripX1 - Y.stripX0, h = Y.coachH + 2;
      if (!this.textures.exists(key)) canvasTex(this, key, Math.max(4, Math.round(w)), Math.round(h), drawCoaches(Y, n));
      if (Y.keys.coach && Y.keys.coach !== key) { var old = Y.keys.coach; Y.coach.setTexture(key); try { this.textures.remove(old); } catch (e) {} }
      Y.keys.coach = key;
      Y.coach.setTexture(key);
      Y.loco.setScale(k / TS * LOCO_S);
      this.yumaPlaceTrain();
    },
    yumaPlaceTrain: function () {
      var Y = this.yu, k = Y.k, dx = Y.train.dx, n = Y.doors.length;
      Y.coach.setPosition(Y.stripX0 + dx, Y.coachBot + 2);
      Y.locoX = Y.stripX1 + 4 * k + dx;
      Y.loco.setPosition(Y.locoX, Y.coachBot + 3 * k);
      var cw = (Y.stripX1 - Y.stripX0) / Math.max(1, n);
      Y.doors.forEach(function (d, i) {
        d.x = Y.stripX0 + cw * (i + 0.5) + dx;
        d.label.setPosition(d.x, Y.coachTop + Y.placardDy + 1 * k);
      });
    },
    resize_yuma: function (oldW, oldH) {
      var Y = this.yu, oT = Y.bandTop, oB = Y.bandBot, self = this;
      function mapX(x) { return x * self.W / oldW; }
      function mapY(y) { return Y.bandTop + (y - oT) * (Y.bandBot - Y.bandTop) / Math.max(1, oB - oT); }
      var rx = Y.ran.x, ry = Y.ran.y, wx = Y.wade.x, wy = Y.wade.y;
      this.yumaLayout();
      this.yumaPlaceStatic();
      Y.ran.x = mapX(rx); Y.ran.y = mapY(ry); Y.wade.x = mapX(wx); Y.wade.y = mapY(wy);
      Y.trail = []; Y.goal = null;
      Y.covers.forEach(function (c) { self.yumaCoverPos(c); });
      Y.doors.forEach(function (d) { d.label.setFontSize(Math.round(22 * Y.k)); });
      Y.guns.slice().forEach(function (g) { self.yumaGunFree(g); });
      if (Y.rider) this.yumaRiderEnd();
      if (Y.train.state !== "in") { Y.train.state = "in"; Y.train.dx = 0; }
      this.yumaPlaceTrain();
    },

    /* ── a new question: fresh cover, the doors lettered, back at the hotel with the clock reset ── */
    answers_yuma: function () {
      var Y = this.yu, P = Y.P, self = this, k = Y.k;
      Y.doors.forEach(function (d) { try { d.label.destroy(); } catch (e) {} });
      Y.doors = [];
      var letters = this.choiceLetters();
      letters.forEach(function (Lt) {
        var d = { letter: Lt, state: self.extracted.indexOf(Lt) !== -1 ? "found" : "live", x: 0,
          label: self.add.text(0, 0, Lt, { fontFamily: SERIF, fontSize: Math.round(22 * k), color: C.ink, fontStyle: "bold" }).setOrigin(0.5).setDepth(3.3) };
        Y.doors.push(d);
      });
      Y.train = { state: "in", dx: 0, v: 0, t: 0, lost: false };
      this.yumaTrainArt();
      Y.doors.forEach(function (d) { self.yumaPaintDoor(d); });
      Y.guns.slice().forEach(function (g) { self.yumaGunFree(g); });
      Y.spots.forEach(function (s) { s.cd = 0; s.busy = false; });
      if (Y.rider) this.yumaRiderEnd();
      this.yumaCoverLayout();
      var R = Y.ran;
      R.x = Y.start.x; R.y = Y.start.y; R.face = 1; R.state = "walk"; R.t = 0; R.wind = 1; R.crouch = false; R.spr.setAlpha(1).setAngle(0); R.hat.setAlpha(1).setAngle(0);
      Y.hatFly = null; Y.dig = null; Y.goal = null;
      Y.wade.x = R.x - LEADD * k; Y.wade.y = R.y + 2 * k; Y.wade.spr.setAlpha(1);
      Y.trail = [{ x: R.x, y: R.y }, { x: Y.wade.x, y: Y.wade.y }];
      Y.left = P.clockS; Y.popCd = P.grace; Y.warned15 = false;
      Y.riderCd = P.riderEvery * rnd(0.45, 0.7); Y.wadeCd = P.wadeEvery * rnd(0.5, 0.8);
      Y.boardMs = 0; Y.clicks.length = 0;
      this.yumaPlaceTrain();
    },
    /* the cover, laid out fresh: one piece per column, zig-zagging high and low so there is always a next cover */
    yumaCoverLayout: function () {
      var Y = this.yu, P = Y.P, self = this, n = P.coverN, i, wagons = 0;
      Y.covers.forEach(function (c) { self.yumaCoverKill(c); });
      Y.covers = [];
      var hi = Math.random() < 0.5, vmax = P.wagonSp > 0 ? 0.68 : 1;   /* the rolling wagon keeps the front lane to itself */
      for (i = 0; i < n; i++) {
        var u = (i + 0.5 + rnd(-0.18, 0.18)) / n, x = Y.coverX0 + u * (Y.coverX1 - Y.coverX0), plat = x > Y.platX0 + 30 * Y.k, type;
        if (plat) type = shuffle(["crates", "cart", "barrels", "crates"])[0];
        else { var opts = ["trough", "barrels", "hay", "trough", "wagon"]; if (wagons >= 1 || i === 0) opts.pop(); type = shuffle(opts)[0]; }
        if (type === "wagon") wagons++;
        hi = !hi;
        var v = (plat ? rnd(0.42, 0.95) : hi ? rnd(0.08, 0.4) : rnd(0.62, 1)) * vmax;
        Y.covers.push(this.yumaCoverMake(type, u, v));
      }
      /* the rolling wagon (level 51 on): moving cover along the street */
      if (P.wagonSp > 0) {
        var wu = rnd(0.15, 0.45), wc = this.yumaCoverMake("wagon", wu, 1);
        wc.vu = (Math.random() < 0.5 ? -1 : 1) * P.wagonSp / Math.max(1, Y.coverX1 - Y.coverX0);
        wc.rolling = true;
        Y.covers.push(wc);
      }
    },
    yumaCoverMake: function (type, u, v) {
      var T = COVER[type], c = { type: type, u: u, v: v, T: T, vu: 0, rolling: false, rot: 0,
        spr: this.add.image(0, 0, "md-yuma-" + type).setOrigin(0.5, 1) };
      if (type === "wagon") c.wheels = [this.add.image(0, 0, "md-yuma-wheel"), this.add.image(0, 0, "md-yuma-wheel")];
      this.yumaCoverPos(c);
      return c;
    },
    yumaCoverKill: function (c) {
      try { c.spr.destroy(); } catch (e) {}
      if (c.wheels) c.wheels.forEach(function (w) { try { w.destroy(); } catch (e2) {} });
    },
    /* where a cover stands (x, y: the middle of its ground line), its face (blocks shots) and its footprint (blocks walking) */
    yumaCoverPos: function (c) {
      var Y = this.yu, k = Y.k * CS, T = c.T, top = Y.bandTop + 30 * Y.k, bot = Y.bandBot - 30 * Y.k;
      c.x = Y.coverX0 + c.u * (Y.coverX1 - Y.coverX0);
      c.y = top + c.v * Math.max(10, bot - top);
      c.face = { x0: c.x + T.face[0] * k, y0: c.y + T.face[1] * k, x1: c.x + T.face[2] * k, y1: c.y + T.face[3] * k };
      c.foot = { x0: c.face.x0 + 2 * k, y0: c.y - T.d * k, x1: c.face.x1 - 2 * k, y1: c.y };
      var dep = this.yumaZ(c.y - 1);
      c.spr.setPosition(c.x, c.y).setScale(k / TS).setDepth(dep);
      if (c.wheels) {
        c.wheels[0].setPosition(c.x - 42 * k, c.y - 21 * k).setScale(k / TS).setDepth(dep + 0.0001).setRotation(c.rot);
        c.wheels[1].setPosition(c.x + 40 * k, c.y - 21 * k).setScale(k / TS).setDepth(dep + 0.0001).setRotation(c.rot);
      }
    },
    yumaZ: function (y) { return 10 + clamp(y / Math.max(1, this.H), 0, 1) * 10; },
    yumaPaintDoor: function (d) {
      d.label.setText(d.state === "dead" ? "✕" : d.state === "found" ? "✓" : d.letter).setColor(d.state === "dead" ? "#6a5a48" : d.state === "found" ? "#1f5a2a" : C.ink);
    },

    /* ══ the frame ══ */
    tick_yuma: function (s, inp, ms) {
      var Y = this.yu, P = Y.P, frame = (this.game && this.game.loop && this.game.loop.frame) || 0;
      /* the action: Space or the RUN button (a mouse button walks, and only counts as a yank when Wade digs in) */
      var fresh = Y.lastFrame === frame - 1;
      var act = !!(this.keys.SPACE.isDown || (inp.fire && !inp.ptr));
      var actEdge = act && !Y.prevAct && fresh;
      var click = Y.clicks.length ? Y.clicks[Y.clicks.length - 1] : null, ptrEdge = !!click && fresh;
      Y.clicks.length = 0;
      Y.prevAct = act; Y.lastFrame = frame;
      Y.t += s;
      if (!Y.told.start) { Y.told.start = true; this.toast("Walk Wade from cover to cover to the car with the right letter. A red line from a rooftop is a gunman's aim: keep cover between you and it.", 6000); }
      var live = !this._between && !this._finishing;
      /* the clock and the train */
      if (live && Y.train.state === "in") {
        Y.left -= s;
        if (Y.left <= 15 && !Y.warned15) { Y.warned15 = true; ysnd("whistle"); this.toast("The 3:10 leaves in 15 seconds! Get Wade aboard.", 3000); }
        if (Y.left <= 0) this.yumaTrainGo();
      }
      this.yumaTickTrain(s, ms);
      if (this._finishing) return;
      /* the rancher, Wade, the gang, the riders */
      this.yumaTickRancher(s, ms, inp, act, actEdge || (Y.dig && ptrEdge), click);
      if (this._finishing) return;
      this.yumaTickWade(s, ms);
      if (live) {
        this.yumaTickCovers(s);
        this.yumaTickGuns(s, ms);
        if (this._finishing) return;
        this.yumaTickRider(s, ms);
        if (this._finishing) return;
      }
      this.yumaDraw(s, ms);
    },

    /* ── the rancher ── */
    yumaChest: function () { var Y = this.yu, R = Y.ran; return { x: R.x + 1 * Y.k * R.face, y: R.y - (R.crouch ? CHEST_LOW : CHEST) * Y.k }; },
    yumaGoalFor: function (px, py) {
      var Y = this.yu, k = Y.k;
      /* a click on a car: walk to its steps and board it */
      if (Y.train.state === "in" && py < Y.platFront && py > Y.coachTop - 20 * k) {
        for (var i = 0; i < Y.doors.length; i++) {
          var d = Y.doors[i], cw = (Y.stripX1 - Y.stripX0) / Y.doors.length;
          if (Math.abs(px - d.x) < cw * 0.45 && (py < Y.bandTop || Math.abs(px - d.x) < DOOR_HALF * k * 1.6)) return { x: d.x, y: Y.bandTop - 16 * k, door: d };
        }
      }
      return { x: clamp(px, Y.walkX0, Y.walkX1), y: clamp(py, Y.bandTop, Y.bandBot), door: null };
    },
    yumaTickRancher: function (s, ms, inp, act, actEdge, click) {
      var Y = this.yu, P = Y.P, k = Y.k, R = Y.ran;
      R.t += ms;
      if (R.state === "down") {   /* knocked flat by a rider: up again in a moment */
        R.spr.setAngle(-80 * R.face * clamp(1 - Math.max(0, R.t - 500) / 400, 0, 1));
        if (R.t > 900) { R.state = "walk"; R.spr.setAngle(0); }
        this.player.setPosition(R.x, R.y - 40 * k);
        return;
      }
      if (R.state === "board") {   /* up the steps and in */
        var u = clamp(R.t / 420, 0, 1);
        R.y = R.by - 10 * k * u; R.spr.setAlpha(1 - u); R.hat.setAlpha(1 - u);
        this.player.setPosition(R.x, R.y - 40 * k);
        return;
      }
      if (R.state === "bounce") {  /* the conductor sends them back down the steps */
        var b = clamp(R.t / 380, 0, 1);
        R.y = R.by + (R.ty - R.by) * b; R.x += (R.tx - R.x) * Math.min(1, s * 10);
        if (b >= 1) R.state = "walk";
        this.player.setPosition(R.x, R.y - 40 * k);
        return;
      }
      if (this._between) { this.player.setPosition(R.x, R.y - 40 * k); return; }
      /* where to go: the keys or the pad; else a click (or a held button) sets a spot to walk to */
      var ax = inp.ax, ay = inp.ay;
      var pp = inp.ptr || click;
      if (pp && !(Y.dig && actEdge)) Y.goal = this.yumaGoalFor(pp.x, pp.y);
      if (ax || ay) Y.goal = null;
      if (!ax && !ay && Y.goal) {
        /* to a car: along the platform first, up its steps only when lined up with them */
        var gyT = Y.goal.door && Math.abs(Y.goal.x - R.x) > 3 * k ? Math.max(Y.goal.y, Y.bandTop + 4 * k) : Y.goal.y;
        var gx = Y.goal.x - R.x, gy = gyT - R.y, gd = Math.sqrt(gx * gx + gy * gy);
        if (gd < 3 * k) { if (Y.goal.door) { ax = 0; ay = -1; } else Y.goal = null; }
        else { ax = gx / gd; ay = gy / gd; var st = this.yumaSteer(R.x, R.y, ax, ay, Y.goal); ax = st.x; ay = st.y; }
      }
      var l = Math.sqrt(ax * ax + ay * ay);
      R.moving = l > 0.01;
      var inCover = this.yumaInCover();
      R.running = R.moving && act && R.wind > 0.02;
      if (R.running) { R.wind = Math.max(0, R.wind - s / P.windS); if (R.wind <= 0.02 && !Y.told.breath) { Y.told.breath = true; this.toast("Out of breath! Get behind cover: your breath comes back faster there.", 3200); } }
      else R.wind = Math.min(1, R.wind + s / (inCover ? 1.3 : 3.4));
      /* Wade digging in his heels: only taps of RUN move him */
      if (Y.dig) {
        if (actEdge) {
          Y.dig.taps -= 1; ysnd("yank");
          Y.wade.x += (R.x - Y.wade.x) * 0.22; Y.wade.y += (R.y - Y.wade.y) * 0.22;
          if (Y.dig.taps <= 0) { Y.dig = null; Y.wadeCd = P.wadeEvery * rnd(0.85, 1.15); this.toast("Wade gives up and walks on.", 1600); }
        }
      }
      if (R.moving) {
        var sp = WALK * k * (R.running ? RUNK : 1) * (Y.dig ? 0.6 : 1);
        R.x += ax / l * sp * s; R.y += ay / l * sp * s;
        if (Math.abs(ax) > 0.2) R.face = ax > 0 ? 1 : -1;
        R.walk += sp * s;
        Y.stepT -= s;
        if (Y.stepT <= 0) { Y.stepT = R.running ? 0.12 : 0.22; this.yumaPuff(R.x - R.face * 4 * k, R.y - 2 * k, "dust", R.running ? 1 : 0.6); }
      }
      /* the lead: with Wade dug in, the rancher can't go further than the lead */
      if (Y.dig) {
        var lx = R.x - Y.wade.x, ly = R.y - Y.wade.y, ld = Math.sqrt(lx * lx + ly * ly), mx = (LEADD + 16) * k;
        if (ld > mx) { R.x = Y.wade.x + lx / ld * mx; R.y = Y.wade.y + ly / ld * mx; }
      }
      this.yumaCollide(R);
      /* the top of the street; at a car's steps it goes up the steps (boarding) */
      var door = this.yumaDoorAt(R.x);
      if (door && Y.goal && Y.goal.door && Y.goal.door !== door) door = null;   /* walking past another car to the one he clicked */
      var topY = door ? Y.bandTop - 18 * k : Y.bandTop;
      R.x = clamp(R.x, Y.walkX0, Y.walkX1); R.y = clamp(R.y, topY, Y.bandBot);
      if (door && R.y < Y.bandTop - 9 * k) this.yumaBoard(door);
      R.crouch = !R.moving && inCover && R.state === "walk";
      this.player.setPosition(R.x, R.y - 40 * k);
      if (R.y < Y.bandTop + 3 * k && !door && !Y.told.top && R.x > Y.platX0 && Y.train.state === "in") { Y.told.top = true; this.toast("Line up with a car's steps (under its letter) and walk up to board it.", 2800); }
    },
    /* walking to a clicked spot: around a piece of cover in the way, not into it */
    yumaSteer: function (x, y, ux, uy, goal) {
      var Y = this.yu, k = Y.k, pad = 11 * k, look = 22 * k, px = x + ux * look, py = y + uy * look;
      for (var i = 0; i < Y.covers.length; i++) {
        var f = Y.covers[i].foot;
        if (!(px > f.x0 - pad && px < f.x1 + pad && py > f.y0 - pad && py < f.y1 + pad)) continue;
        if (goal.x > f.x0 - pad && goal.x < f.x1 + pad && goal.y > f.y1) return { x: ux, y: uy };   /* the spot is just in front of it */
        var up = goal.y < (f.y0 + f.y1) / 2;
        if (up && f.y0 - pad * 2 < Y.bandTop) up = false;
        if (!up && f.y1 + pad * 2 > Y.bandBot) up = true;
        var vx = ux >= 0 ? 0.3 : -0.3, vy = up ? -1 : 1, l = Math.sqrt(vx * vx + vy * vy);
        return { x: vx / l, y: vy / l };
      }
      return { x: ux, y: uy };
    },
    yumaDoorAt: function (x) {
      var Y = this.yu, k = Y.k;
      if (Y.train.state !== "in") return null;
      for (var i = 0; i < Y.doors.length; i++) if (Math.abs(x - Y.doors[i].x) < DOOR_HALF * k) return Y.doors[i];
      return null;
    },
    /* the rancher's feet can't go through cover */
    yumaCollide: function (o) {
      var Y = this.yu, rad = 8 * Y.k;
      Y.covers.forEach(function (c) {
        var f = c.foot, nx = clamp(o.x, f.x0, f.x1), ny = clamp(o.y, f.y0, f.y1), dx = o.x - nx, dy = o.y - ny, d2 = dx * dx + dy * dy;
        if (d2 >= rad * rad) return;
        if (d2 > 1e-6) { var d = Math.sqrt(d2); o.x = nx + dx / d * rad; o.y = ny + dy / d * rad; return; }
        /* inside: out the shortest way */
        var e = [o.x - f.x0 + rad, f.x1 - o.x + rad, o.y - f.y0 + rad, f.y1 - o.y + rad], m = Math.min.apply(null, e);
        if (m === e[0]) o.x = f.x0 - rad; else if (m === e[1]) o.x = f.x1 + rad; else if (m === e[2]) o.y = f.y0 - rad; else o.y = f.y1 + rad;
      });
    },
    /* behind cover: just in front of a piece (between it and us, so it is between you and the rooftops) */
    yumaInCover: function () {
      var Y = this.yu, R = Y.ran, k = Y.k;
      for (var i = 0; i < Y.covers.length; i++) {
        var c = Y.covers[i];
        if (R.x > c.face.x0 + 4 * k && R.x < c.face.x1 - 4 * k && R.y >= c.y - 1 && R.y < c.y + 26 * k) return c;
      }
      return null;
    },
    /* up the steps of a car: its letter is the answer */
    yumaBoard: function (d) {
      var Y = this.yu, R = Y.ran, k = Y.k;
      if (R.state !== "walk" || this._between || this._finishing) { R.y = Y.bandTop; return; }
      Y.goal = null;
      if (d.state !== "live") {
        R.y = Y.bandTop + 4 * k; Y.bumps = (Y.bumps || 0) + 1;
        this.toast(d.state === "dead" ? "That car's door is nailed shut. Try another letter." : "Wade already found that letter's car. Board the other right one.", 2600);
        return;
      }
      Y.lastDoor = d;
      R.by = R.y; R.t = 0;
      var res = this.answerPick(d.letter, d.x, Y.coachTop + Y.placardDy);
      if (res === "wrong") {
        d.state = "dead"; this.yumaPaintDoor(d); ysnd("slam");
        R.state = "bounce"; R.t = 0; R.by = R.y; R.ty = Y.bandTop + 34 * k; R.tx = R.x;
        Y.wade.y = Math.max(Y.wade.y, Y.bandTop + 30 * k);
        this.yumaPuff(d.x, Y.bandTop - 4 * k, "dust", 1.2);
        if (!Y.told.wrong) { Y.told.wrong = true; this.toast("Wrong car! The conductor slams the door and nails it shut. Find the car with the right letter.", 3400); }
      } else if (res === "partial") {
        d.state = "found"; this.yumaPaintDoor(d);
        R.state = "bounce"; R.t = 0; R.by = R.y; R.ty = Y.bandTop + 26 * k; R.tx = R.x;
      } else if (res === "done") {
        d.state = "found"; this.yumaPaintDoor(d);
      } else { R.y = Y.bandTop; }
      return res;
    },

    /* ── Wade on the lead: he follows the rancher's path, or digs in his heels ── */
    yumaTickWade: function (s, ms) {
      var Y = this.yu, P = Y.P, k = Y.k, R = Y.ran, Wd = Y.wade;
      /* the rancher's path, newest first */
      var last = Y.trail[0];
      if (!last || Math.abs(last.x - R.x) + Math.abs(last.y - R.y) > 2 * k) Y.trail.unshift({ x: R.x, y: R.y });
      if (Y.trail.length > 120) Y.trail.length = 120;
      if (R.state === "board") { var u = clamp(R.t / 420, 0, 1); Wd.x += (R.x - Wd.x) * Math.min(1, s * 6); Wd.y += (R.by - Wd.y) * Math.min(1, s * 6); Wd.spr.setAlpha(1 - u * 0.9); this.yumaPlaceWade(false); return; }
      /* digging in (level 21 on): when the rancher is out in the open */
      if (!Y.dig && P.wadeEvery < 1e8 && !this._between && R.state === "walk") {
        if (R.moving && !this.yumaInCover()) Y.wadeCd -= ms;
        if (Y.wadeCd <= 0) {
          Y.dig = { taps: P.wadeTaps, t: 0 };
          ysnd("thud");
          if (!Y.told.dig) { Y.told.dig = true; this.toast("Wade digs in his heels! Tap Space or RUN (or click) to drag him along.", 3600); }
        }
      }
      if (Y.dig) { Y.dig.t += ms; this.yumaPlaceWade(true); return; }
      /* the point on the path LEADD behind the rancher */
      var want = LEADD * k, acc = 0, tx = R.x, ty = R.y, i;
      for (i = 1; i < Y.trail.length; i++) {
        var a = Y.trail[i - 1], b = Y.trail[i], seg = Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
        if (acc + seg >= want) { var f = (want - acc) / Math.max(1e-6, seg); tx = a.x + (b.x - a.x) * f; ty = a.y + (b.y - a.y) * f; break; }
        acc += seg; tx = b.x; ty = b.y;
      }
      if (acc < want) {   /* the path is shorter than the lead (a fresh start): keep his distance */
        var rx = Wd.x - R.x, ry = Wd.y - R.y, rd = Math.sqrt(rx * rx + ry * ry) || 1;
        if (rd <= want * 1.15) { tx = Wd.x; ty = Wd.y; } else { tx = R.x + rx / rd * want; ty = R.y + ry / rd * want; }
      }
      var dx = tx - Wd.x, dy = ty - Wd.y, d = Math.sqrt(dx * dx + dy * dy), mv = WALK * k * 2.4 * s;
      if (d > 0.5) { var st = Math.min(d, mv); Wd.x += dx / d * st; Wd.y += dy / d * st; if (Math.abs(dx) > 0.3) Wd.face = dx > 0 ? 1 : -1; Wd.walk += st; }
      Wd.moving = d > 0.8;
      this.yumaPlaceWade(false);
    },
    yumaPlaceWade: function (dig) {
      var Y = this.yu, Wd = Y.wade, k = Y.k;
      var fr = dig ? 2 : Wd.moving ? (Math.floor(Wd.walk / (14 * k)) % 2) : 0;
      if (dig) Wd.face = Y.ran.x > Wd.x ? -1 : 1;   /* leaning back, away from the rancher */
      Wd.spr.setTexture("md-yuma-wade-" + fr).setPosition(Wd.x, Wd.y).setFlipX(Wd.face < 0).setDepth(this.yumaZ(Wd.y));
    },

    /* ── the rolling wagon ── */
    yumaTickCovers: function (s) {
      var Y = this.yu, self = this, k = Y.k;
      Y.covers.forEach(function (c) {
        if (!c.rolling) return;
        var uMax = (Y.platX0 - 90 * k - Y.coverX0) / Math.max(1, Y.coverX1 - Y.coverX0);
        c.u += c.vu * s;
        if (c.u < 0.02) { c.u = 0.02; c.vu = Math.abs(c.vu); }
        if (c.u > uMax) { c.u = uMax; c.vu = -Math.abs(c.vu); }
        c.rot += c.vu * (Y.coverX1 - Y.coverX0) * s / (21 * k);
        c.spr.setFlipX(c.vu < 0);
        self.yumaCoverPos(c);
      });
      /* a wagon rolling into the rancher shoves him along */
      this.yumaCollide(Y.ran);
    },

    /* ── the gang on the rooftops ── */
    yumaTickGuns: function (s, ms) {
      var Y = this.yu, P = Y.P, self = this, R = Y.ran;
      Y.spots.forEach(function (sp) { if (sp.cd > 0) sp.cd -= ms; });
      if (R.state === "walk") Y.popCd -= ms;
      if (Y.popCd <= 0 && Y.guns.length < P.gunMax && R.state === "walk") {
        if (this.yumaGunSpawn()) Y.popCd = P.popMs * rnd(0.8, 1.2);
        else Y.popCd = 400;
      }
      Y.guns.slice().forEach(function (g) { if (!self._finishing) self.yumaGunTick(g, s, ms); });
    },
    /* the spots this level uses */
    yumaSpotsOpen: function () {
      var Y = this.yu, P = Y.P, list = Y.spots.filter(function (sp) { return sp.kind === "front" || (sp.kind === "side" && P.sideGuns); });
      if (P.trainGuns && Y.train.state === "in") {
        var cw = (Y.stripX1 - Y.stripX0) / Math.max(1, Y.doors.length);
        if (!Y.trainSpots || Y.trainSpots.n !== Y.doors.length || Y.trainSpots.w !== this.W) {
          Y.trainSpots = { n: Y.doors.length, w: this.W, list: [] };
          for (var i = 0; i < Y.doors.length; i++) Y.trainSpots.list.push({ kind: "train", x: Y.stripX0 + cw * (i + 0.5) + (i % 2 ? 1 : -1) * cw * 0.22, y: Y.coachTop + 3 * Y.k, x0: Y.stripX0 + cw * i + 12 * Y.k, x1: Y.stripX0 + cw * (i + 1) - 12 * Y.k, cd: 0, busy: false });
        }
        list = list.concat(Y.trainSpots.list);
      }
      return list;
    },
    yumaGunSpawn: function (force) {
      var Y = this.yu, R = Y.ran, W = this.W, open = this.yumaSpotsOpen().filter(function (sp) { return !sp.busy && sp.cd <= 0; });
      if (!open.length) return null;
      var tot = 0, ws = open.map(function (sp) { var w = 1 / (1 + Math.abs(sp.x - R.x) / (0.3 * W)); tot += w; return w; });
      var r = Math.random() * tot, i;
      for (i = 0; i < open.length; i++) { r -= ws[i]; if (r <= 0) break; }
      return this.yumaGunAt(open[Math.min(i, open.length - 1)]);
    },
    yumaGunAt: function (sp) {
      var Y = this.yu, k = Y.k, C0 = this.yumaChest();
      sp.busy = true;
      var train = sp.kind === "train";
      var g = { sp: sp, x: sp.x, edge: sp.y, state: "rise", t: 0, tx: C0.x + rnd(-50, 50) * k, ty: C0.y + rnd(-30, 10) * k, lx: 0, ly: 0, second: false, dir: Math.random() < 0.5 ? -1 : 1,
        spr: this.add.image(sp.x, sp.y + 60 * k, "md-yuma-gun-" + Math.floor(Math.random() * 3)).setOrigin(0.5, 1).setScale(k / TS).setDepth(train ? 2.6 : 1.5) };
      Y.guns.push(g);
      ysnd("glint");
      if (!Y.told.gun) { Y.told.gun = true; this.toast("One of Wade's gang on the roof! When his red line turns solid he fires. Put cover between you and him.", 4200); }
      return g;
    },
    yumaGunFree: function (g) {
      var Y = this.yu, i = Y.guns.indexOf(g);
      if (i !== -1) Y.guns.splice(i, 1);
      g.sp.busy = false; g.sp.cd = 1500;
      try { g.spr.destroy(); } catch (e) {}
    },
    /* his shoulder and muzzle, aiming at (tx, ty) */
    yumaGunAim: function (g, tx, ty) {
      var k = this.yu.k, sx = g.x, sy = g.spr.y - 34 * k, dx = tx - sx, dy = ty - sy, d = Math.sqrt(dx * dx + dy * dy) || 1;
      return { sx: sx, sy: sy, ux: dx / d, uy: dy / d, mx: sx + dx / d * 30 * k, my: sy + dy / d * 30 * k };
    },
    /* a shot's path from the muzzle: where the first cover between the gunman and (feetY) stops it */
    yumaRayBlock: function (mx, my, ux, uy, tMax, feetY) {
      var Y = this.yu, best = null, k = Y.k;
      Y.covers.forEach(function (c) {
        if (c.y > feetY + 2 * k) return;   /* only cover between him and you */
        var t = segRect(mx, my, ux, uy, tMax, c.face);
        if (t != null && (best == null || t < best.t)) best = { t: t, c: c };
      });
      return best;
    },
    /* would a shot from this gunman (a: his aim) hit the rancher now? He has him in his sights: only cover between them saves him */
    yumaShotHits: function (a) {
      var Y = this.yu, R = Y.ran, C0 = this.yumaChest();
      var dx = C0.x - a.mx, dy = C0.y - a.my, d = Math.sqrt(dx * dx + dy * dy) || 1;
      var blk = this.yumaRayBlock(a.mx, a.my, dx / d, dy / d, d, R.y);
      var open = R.state === "walk" || R.state === "down";
      return { hit: open && !blk, t: d, blk: blk };
    },
    yumaGunTick: function (g, s, ms) {
      var Y = this.yu, P = Y.P, k = Y.k, C0 = this.yumaChest();
      g.t += ms;
      var shown = g.edge + 22 * k, hidden = g.edge + 62 * k;
      if (g.state === "rise") {
        var u = clamp(g.t / 320, 0, 1);
        g.spr.y = hidden + (shown - hidden) * u;
        if (u >= 1) { g.state = "aim"; g.t = 0; }
      } else if (g.state === "aim") {
        var f = Math.min(1, P.track * s);
        g.tx += (C0.x - g.tx) * f; g.ty += (C0.y - g.ty) * f;
        if (P.roofWalk) { g.x += g.dir * P.roofWalk * k * s; if (g.x < g.sp.x0) { g.x = g.sp.x0; g.dir = 1; } if (g.x > g.sp.x1) { g.x = g.sp.x1; g.dir = -1; } }
        if (g.t >= (g.second ? P.aimMs * 0.45 : P.aimMs)) { g.state = "lock"; g.t = 0; g.lx = g.tx; g.ly = g.ty; ysnd("cock"); }
      } else if (g.state === "lock") {
        g.lx = g.tx = C0.x; g.ly = g.ty = C0.y;   /* he has you in his sights now: the solid line follows you exactly */
        if (P.roofWalk) { g.x += g.dir * P.roofWalk * k * s; if (g.x < g.sp.x0) { g.x = g.sp.x0; g.dir = 1; } if (g.x > g.sp.x1) { g.x = g.sp.x1; g.dir = -1; } }
        if (g.t >= P.lockMs) this.yumaFire(g);
      } else if (g.state === "fire") {
        if (g.t >= 260) {
          if (!g.second && P.doubleP > 0 && Math.random() < P.doubleP) { g.second = true; g.state = "aim"; g.t = 0; }
          else { g.state = "duck"; g.t = 0; }
        }
      } else if (g.state === "duck") {
        var d = clamp(g.t / 300, 0, 1);
        g.spr.y = shown + (hidden - shown) * d;
        if (d >= 1) { this.yumaGunFree(g); return; }
      }
      g.spr.x = g.x;
      g.spr.setFlipX(g.tx < g.x);
      /* only what is above the roof's edge shows */
      var topY = g.spr.y - 58 * k, vis = clamp((g.edge + 3 * k - topY) * TS / k, 0, 58 * TS);
      g.spr.setCrop(0, 0, 46 * TS, vis).setVisible(vis > 0.5);
    },
    /* BANG: at the rancher; the first cover between them takes the shot */
    yumaFire: function (g) {
      var Y = this.yu, k = Y.k, C0 = this.yumaChest(), a = this.yumaGunAim(g, C0.x, C0.y), res = this.yumaShotHits(a), end;
      g.state = "fire"; g.t = 0;
      Y.shots += 1;
      ysnd("bang");
      if (res.hit) {
        end = { x: C0.x, y: C0.y };
        if (this.loseLife("hit", "A ROOFTOP SHOT KNOCKED YOUR HAT OFF")) {
          Y.hits += 1;
          this.yumaHatOff(a.ux);
          if (!Y.told.hit && !this._finishing) { Y.told.hit = true; this.toast("Hit! When a line turns solid, get cover between you and him: the line stops at the cover.", 3400); }
        }
      } else if (res.blk) {
        end = { x: a.mx + a.ux * res.blk.t, y: a.my + a.uy * res.blk.t };
        Y.blocked += 1; ysnd("ping"); this.yumaPuff(end.x, end.y, "chip", 1);
        if (!Y.told.safe) { Y.told.safe = true; this.toast("The trough took that shot! Cover between you and the gunman keeps you safe.", 2800); }
      } else {
        end = { x: C0.x + rnd(-10, 10) * k, y: Y.ran.y + 2 * k };
        this.yumaPuff(end.x, end.y, "dust", 1.1);
      }
      g.flash = { mx: a.mx, my: a.my, ex: end.x, ey: end.y, t: 0 };
      this.yumaPuff(a.mx, a.my, "smoke", 0.7);
      return res;
    },
    yumaHatOff: function (ux) {
      var Y = this.yu, R = Y.ran, k = Y.k;
      Y.hatFly = { x: R.hat.x, y: R.hat.y, vx: (ux >= 0 ? 1 : -1) * rnd(90, 150) * k, vy: -260 * k, rot: 0, t: 0 };
      ysnd("hat");
    },

    /* ── gang riders (level 31 on): a dashed lane, a dust cloud, then a horse at a gallop ── */
    yumaTickRider: function (s, ms) {
      var Y = this.yu, P = Y.P, k = Y.k, R = Y.ran, W = this.W;
      if (!Y.rider) {
        if (P.riderEvery > 1e8 || R.state !== "walk") return;
        Y.riderCd -= ms;
        if (Y.riderCd <= 0) this.yumaRiderStart();
        return;
      }
      var r = Y.rider;
      r.t += ms;
      if (r.state === "warn") {
        if (r.t >= P.riderWarn) { r.state = "ride"; r.t = 0; ysnd("hoof"); r.spr.setVisible(true); }
        return;
      }
      r.x += r.dir * P.riderSp * k * s;
      r.bob += s * 14;
      if (Math.abs(r.x - R.x) < 34 * k && Math.abs(R.y - r.y) < 15 * k && R.state === "walk" && !r.hitDone) {
        r.hitDone = true;
        if (this.loseLife("hit", "A GANG RIDER KNOCKED YOU FLAT")) {
          R.state = "down"; R.t = 0; Y.goal = null; ysnd("thud");
          this.yumaPuff(R.x, R.y, "dust", 1.6);
          if (!Y.told.rider) { Y.told.rider = true; this.toast("Knocked flat! When a dashed line crosses the street, step out of that lane before the rider comes.", 3600); }
        }
      }
      Y.stepRider = (Y.stepRider || 0) - s;
      if (Y.stepRider <= 0) { Y.stepRider = 0.06; this.yumaPuff(r.x - r.dir * 30 * k, r.y - 2 * k, "dust", 1.2); }
      if ((r.dir > 0 && r.x > W + 80 * k) || (r.dir < 0 && r.x < -80 * k)) this.yumaRiderEnd();
    },
    yumaRiderStart: function (laneY, dir) {
      var Y = this.yu, P = Y.P, k = Y.k, R = Y.ran;
      var y = laneY != null ? laneY : clamp(R.y + rnd(-5, 5) * k, Y.bandTop + 20 * k, Y.bandBot);
      var d = dir || (R.x < this.W / 2 ? -1 : 1);
      Y.rider = { state: "warn", t: 0, y: y, dir: d, x: d > 0 ? -70 * k : this.W + 70 * k, bob: 0, hitDone: false,
        spr: this.add.image(0, 0, "md-yuma-rider-0").setOrigin(0.5, 1).setScale(k / TS * 1.05).setFlipX(d < 0).setVisible(false) };
      Y.riderCd = P.riderEvery * rnd(0.8, 1.2);
      ysnd("hoof");
      if (!Y.told.lane) { Y.told.lane = true; this.toast("Hoofbeats! A gang rider is coming down the dashed line. Get out of that lane!", 3200); }
      return Y.rider;
    },
    yumaRiderEnd: function () {
      var Y = this.yu;
      if (Y.rider) { try { Y.rider.spr.destroy(); } catch (e) {} }
      Y.rider = null;
    },

    /* ── the train: it pulls out at 3:10 (a life) and the conductor backs it in again ── */
    yumaTrainGo: function () {
      var Y = this.yu, T = Y.train;
      if (T.state !== "in") return;
      T.state = "leaving"; T.t = 0; T.v = 0; T.lost = false;
      ysnd("whistle"); ysnd("bell");
      var self = this;
      Y.guns.slice().forEach(function (g) { if (g.sp.kind === "train") self.yumaGunFree(g); });
      if (Y.ran.state === "walk" && this.yumaDoorAt(Y.ran.x) && Y.ran.y < Y.bandTop) Y.ran.y = Y.bandTop;
    },
    yumaTickTrain: function (s, ms) {
      var Y = this.yu, T = Y.train, k = Y.k, W = this.W;
      T.t += ms;
      if (T.state === "leaving") {
        T.v += 260 * k * s; T.dx += T.v * s;
        if (!T.lost && T.t > 1300) {
          T.lost = true;
          this.iframeMs = 0;
          if (this.loseLife("hit", "THE 3:10 LEFT WITHOUT YOU") && !this._finishing) this.toast("The 3:10 pulled out without you! That costs a life. The conductor backs it in for one more try.", 3800);
          if (this._finishing) return;
        }
        if (T.dx > W) { T.state = "back"; T.t = 0; }
        this.yumaPlaceTrain();
      } else if (T.state === "back") {
        var u = clamp(T.t / 2200, 0, 1), e = 1 - Math.pow(1 - u, 3);
        T.dx = W * (1 - e);
        if (u >= 1) { T.state = "in"; T.dx = 0; Y.left = Y.P.clockS; Y.warned15 = false; ysnd("steam"); }
        this.yumaPlaceTrain();
      }
      /* smoke from the stack, steam at the cylinders */
      Y.smokeT -= s;
      if (Y.smokeT <= 0) {
        Y.smokeT = T.state === "in" ? 0.32 : 0.1;
        this.yumaPuff(Y.locoX + 194 * k * LOCO_S, Y.coachBot + 3 * k - 146 * k * LOCO_S, "smoke", T.state === "in" ? 1 : 1.5);
      }
      Y.hissT -= s;
      if (Y.hissT <= 0 && T.state === "in") { Y.hissT = rnd(2.5, 4.5); ysnd("steam"); this.yumaPuff(Y.locoX + 196 * k * LOCO_S, Y.coachBot - 8 * k, "steam", 1.3); this.yumaPuff(Y.locoX + 176 * k * LOCO_S, Y.coachBot - 4 * k, "steam", 1); }
    },

    /* ── puffs: dust at the feet, gun smoke, the stack's smoke, steam, wood chips off cover ── */
    yumaPuff: function (x, y, kind, size) {
      var Y = this.yu, k = Y.k, p = Y.pool.pop();
      if (Y.puffs.length > 70) return;
      if (!p) p = { img: this.add.image(0, 0, "md-yuma-puff") };
      var z = size || 1;
      p.kind = kind; p.x = x; p.y = y; p.t = 0;
      if (kind === "dust") { p.max = 650; p.vx = rnd(-14, 14) * k; p.vy = rnd(-26, -10) * k; p.r0 = 6 * z * k; p.r1 = 20 * z * k; p.a0 = 0.5; p.tint = 0xcaa070; p.depth = 9.6; }
      else if (kind === "smoke") { p.max = 2600 * Math.min(1.4, z); p.vx = rnd(-40, -22) * k; p.vy = rnd(-34, -22) * k; p.r0 = 10 * z * k; p.r1 = 46 * z * k; p.a0 = 0.55; p.tint = 0x8a7a68; p.depth = y < Y.coachTop ? 3.5 : 24; }
      else if (kind === "steam") { p.max = 900; p.vx = rnd(-50, 10) * k; p.vy = rnd(-20, -6) * k; p.r0 = 8 * z * k; p.r1 = 30 * z * k; p.a0 = 0.7; p.tint = 0xfff6e2; p.depth = 3.6; }
      else { p.max = 420; p.vx = rnd(-20, 20) * k; p.vy = rnd(-40, -20) * k; p.r0 = 4 * z * k; p.r1 = 14 * z * k; p.a0 = 0.85; p.tint = 0xe6c690; p.depth = 24; }
      p.img.setVisible(true).setTint(p.tint).setDepth(p.depth);
      Y.puffs.push(p);
      this.yumaPuffDraw(p);
      return p;
    },
    yumaPuffDraw: function (p) {
      var u = clamp(p.t / p.max, 0, 1), r = p.r0 + (p.r1 - p.r0) * Math.sqrt(u);
      p.img.setPosition(p.x, p.y).setScale(r * 2 / 64).setAlpha(p.a0 * (1 - u) * (u < 0.1 ? u / 0.1 : 1));
    },

    /* ══ drawing every frame ══ */
    yumaDraw: function (s, ms) {
      var Y = this.yu, P = Y.P, k = Y.k, R = Y.ran, W = this.W, H = this.H, fx = Y.fxG, i;
      fx.clear(); Y.hudG.clear(); Y.shadowG.clear(); Y.leadG.clear(); Y.rifleG.clear(); Y.trainRifleG.clear(); Y.clockG.clear(); Y.doorG.clear(); Y.skyG.clear(); Y.heatG.clear();
      /* the heat: the horizon wavers, light ripples over the street */
      var n = Y.slices.length;
      for (i = 0; i < n; i++) Y.slices[i].x = -12 + Math.sin(Y.t * 2.3 + i * 0.9) * (0.6 + i * 0.25) * k + Math.sin(Y.t * 5.1 + i * 2.1) * 0.5 * k;
      for (i = 0; i < 6; i++) {
        var hy = Y.bandTop + (Y.bandBot - Y.bandTop) * (i + 0.5) / 6 + Math.sin(Y.t * 1.4 + i * 1.7) * 4 * k;
        Y.heatG.fillStyle(0xfff4d6, 0.035 + 0.02 * Math.sin(Y.t * 2 + i));
        for (var hx = -40; hx < W; hx += 60 * k) Y.heatG.fillEllipse(hx + ((Y.t * 18 * k + i * 37) % (60 * k)), hy + Math.sin(hx * 0.03 + Y.t * 3) * 1.5 * k, 46 * k, 2.4 * k);
      }
      /* vultures circling high up */
      Y.vult.forEach(function (ph, j) {
        var a = Y.t * 0.35 + ph, vx = W * (0.2 + j * 0.35) + Math.cos(a) * 60 * k, vy = H * (0.07 + j * 0.03) + Math.sin(a) * 14 * k, fl = Math.sin(Y.t * 3 + j) * 2 * k;
        Y.skyG.lineStyle(2 * k, 0x3a2414, 0.75);
        Y.skyG.beginPath(); Y.skyG.moveTo(vx - 9 * k, vy - 2 * k + fl); Y.skyG.lineTo(vx - 3 * k, vy); Y.skyG.lineTo(vx, vy + 1.5 * k); Y.skyG.lineTo(vx + 3 * k, vy); Y.skyG.lineTo(vx + 9 * k, vy - 2 * k + fl); Y.skyG.strokePath();
      });
      /* the station clock's hands, and the countdown on the slate */
      var minsLeft = clamp(Y.left / P.clockS, 0, 1) * 12, m = 10 - minsLeft, cx = Y.clockX, cy = Y.clockY, cr = Y.clockR;
      var am = (m / 60) * TAU - Math.PI / 2, ah = ((3 + m / 60) / 12) * TAU - Math.PI / 2;
      Y.clockG.lineStyle(3.2 * k, 0x2a1a0e, 1); Y.clockG.lineBetween(cx, cy, cx + Math.cos(ah) * cr * 0.5, cy + Math.sin(ah) * cr * 0.5);
      Y.clockG.lineStyle(2 * k, 0x2a1a0e, 1); Y.clockG.lineBetween(cx, cy, cx + Math.cos(am) * cr * 0.82, cy + Math.sin(am) * cr * 0.82);
      Y.clockG.fillStyle(0x2a1a0e, 1); Y.clockG.fillCircle(cx, cy, 2.2 * k);
      var secs = Math.max(0, Math.ceil(Y.left)), urgent = Y.left <= 15 && Y.train.state === "in";
      var txt = Y.train.state === "in" ? "LEAVES IN " + Math.floor(secs / 60) + ":" + ("0" + (secs % 60)).slice(-2) : Y.train.state === "leaving" ? "PULLING OUT!" : "BACKING IN";
      if (Y.txLeave.text !== txt) Y.txLeave.setText(txt);
      Y.txLeave.setColor(urgent ? (Math.floor(Y.t * 4) % 2 ? "#ff8a6a" : "#f2e6c8") : "#f2e6c8");
      if (urgent) { Y.bellT -= s; if (Y.bellT <= 0) { Y.bellT = 1; ysnd("bell"); } }
      /* the doors: nailed shut, or a found letter */
      Y.doors.forEach(function (d) {
        var top = Y.coachTop + Y.coachH * 0.28, bot = Y.coachBot - Y.coachH * 0.17, dw = Math.min(26 * k, (Y.stripX1 - Y.stripX0) / Y.doors.length * 0.3);
        if (d.state === "dead") {
          Y.doorG.lineStyle(4 * k, 0x8a6a44, 1); Y.doorG.lineBetween(d.x - dw * 0.6, top + 8 * k, d.x + dw * 0.6, bot - 8 * k); Y.doorG.lineBetween(d.x + dw * 0.6, top + 8 * k, d.x - dw * 0.6, bot - 8 * k);
          Y.doorG.lineStyle(1.2, 0x2a1a0e, 1); Y.doorG.strokeRect(d.x - dw / 2, top, dw, bot - top);
        } else if (d.state === "live" && Y.train.state === "in" && R.state === "walk" && Math.abs(R.x - d.x) < DOOR_HALF * k && R.y < Y.bandTop + 40 * k) {
          var pu = 0.6 + 0.4 * Math.sin(Y.t * 8);
          Y.doorG.lineStyle(2.5 * k, 0xfff2c0, pu); Y.doorG.strokeEllipse(d.x, Y.coachTop + Y.placardDy, 38 * k, 30 * k);
          Y.doorG.fillStyle(0xfff2c0, 0.25 * pu); Y.doorG.fillRect(d.x - DOOR_HALF * k, Y.bandTop - 18 * k, DOOR_HALF * 2 * k, 14 * k);
        }
      });
      /* puffs */
      for (i = Y.puffs.length - 1; i >= 0; i--) {
        var p = Y.puffs[i];
        p.t += ms; p.x += p.vx * s; p.y += p.vy * s;
        if (p.t >= p.max) { p.img.setVisible(false); Y.puffs.splice(i, 1); Y.pool.push(p); continue; }
        this.yumaPuffDraw(p);
      }
      /* the rancher and his hat */
      var fr = R.state === "walk" ? (R.crouch ? 2 : R.moving ? (Math.floor(R.walk / (13 * k)) % 2) : 0) : 0;
      R.spr.setTexture("md-yuma-ran-" + fr).setPosition(R.x, R.y).setFlipX(R.face < 0).setDepth(this.yumaZ(R.y));
      if (R.state === "walk" || R.state === "bounce" || R.state === "down") this.blink(R.spr);
      var hOff = fr === 2 ? { x: 3, y: 40 } : { x: 1, y: FEET - 7 };
      if (Y.hatFly) {
        var hf = Y.hatFly; hf.t += ms; hf.vy += 700 * k * s; hf.x += hf.vx * s; hf.y += hf.vy * s; hf.rot += 9 * s;
        var gy = R.y + 4 * k;
        if (hf.y > gy && hf.vy > 0) { hf.y = gy; hf.vy *= -0.3; hf.vx *= 0.5; }
        R.hat.setPosition(hf.x, hf.y).setRotation(hf.rot).setAlpha(clamp(1 - (hf.t - 900) / 300, 0, 1)).setDepth(this.yumaZ(R.y) + 0.001);
        if (hf.t > 1200) { Y.hatFly = null; R.hat.setRotation(0).setAlpha(1); }
      } else {
        var ang = R.spr.rotation, hx2 = R.x + (hOff.x * R.face) * k, hy2 = R.y - hOff.y * k;
        if (R.state === "down") { var rc = R.spr.rotation; hx2 = R.x + Math.sin(rc) * hOff.y * k; hy2 = R.y - Math.cos(rc) * hOff.y * k; }
        R.hat.setPosition(hx2, hy2).setRotation(ang).setFlipX(R.face < 0).setDepth(this.yumaZ(R.y) + 0.001);
        if (R.state !== "board") R.hat.setAlpha(R.spr.alpha);
      }
      /* shadows under people and things */
      Y.shadowG.fillStyle(0x4a2a10, 0.22);
      Y.covers.forEach(function (c) { Y.shadowG.fillEllipse(c.x + 4 * k, c.y - 1 * k, (c.face.x1 - c.face.x0) * 1.05, 9 * k); });
      if (R.spr.alpha > 0.3) Y.shadowG.fillEllipse(R.x + 2 * k, R.y, 26 * k, 6 * k);
      if (Y.wade.spr.alpha > 0.3) Y.shadowG.fillEllipse(Y.wade.x + 2 * k, Y.wade.y, 26 * k, 6 * k);
      /* the lead: a short rope from the rancher's hand to Wade's cuffs */
      if (R.spr.alpha > 0.3 && Y.wade.spr.alpha > 0.3 && R.state !== "down") {
        var hx3 = R.x - R.face * 11 * k, hy3 = R.y - (R.crouch ? 12 : 32) * k;
        var dg = Y.dig ? 2 : 0, wx = Y.wade.x + Y.wade.face * (9 - dg * 7) * k, wy = Y.wade.y - (36 - dg) * k;
        var sag = Y.dig ? 1 * k : 9 * k, mx2 = (hx3 + wx) / 2, my2 = (hy3 + wy) / 2 + sag;
        Y.leadG.setDepth(Math.min(R.spr.depth, Y.wade.spr.depth) + 0.0005);
        Y.leadG.lineStyle(2.2 * k, 0x3a2414, 1); Y.leadG.beginPath(); Y.leadG.moveTo(hx3, hy3);
        for (var q = 1; q <= 8; q++) { var u2 = q / 8, a2 = (1 - u2) * (1 - u2), b2 = 2 * (1 - u2) * u2, c2 = u2 * u2; Y.leadG.lineTo(a2 * hx3 + b2 * mx2 + c2 * wx, a2 * hy3 + b2 * my2 + c2 * wy); }
        Y.leadG.strokePath();
      }
      /* "YOU" over the rancher at the start of a run */
      Y.txYou.setVisible(Y.ran.state === "walk" && Y.left > Y.P.clockS - 3 && !this._between).setPosition(R.x, R.y - 74 * k);
      /* Wade digging in */
      if (Y.dig) {
        Y.txDig.setVisible(true).setText("WADE DIGS IN!\nTAP RUN ×" + Y.dig.taps).setPosition(Y.wade.x, Y.wade.y - 72 * k + Math.sin(Y.t * 10) * 2 * k);
      } else Y.txDig.setVisible(false);
      /* the breath meter, when it isn't full */
      if (R.wind < 0.999 && R.state === "walk") {
        var bw = 34 * k, bx = R.x - bw / 2, by = R.y + 6 * k;
        Y.hudG.fillStyle(0x2a1a0e, 0.75); Y.hudG.fillRect(bx - 1.5 * k, by - 1.5 * k, bw + 3 * k, 6 * k);
        Y.hudG.fillStyle(R.wind < 0.25 ? 0xd0543a : 0xf0dca8, 1); Y.hudG.fillRect(bx, by, bw * R.wind, 3 * k);
      }
      /* the gang: risen bodies, rifles, the aim lines */
      var self = this, C0 = this.yumaChest();
      Y.guns.forEach(function (g) { self.yumaDrawGun(g, C0); });
      /* the rider: the dashed lane first, then the horse */
      if (Y.rider) this.yumaDrawRider();
      /* the tumbleweed: now and then, just for the look of it */
      this.yumaTumble(s, ms);
      /* the film: grain that jumps, a flicker of light */
      Y.grain.tilePositionX = Math.floor(Math.random() * 160); Y.grain.tilePositionY = Math.floor(Math.random() * 160);
      Y.grain.setAlpha(0.16 + Math.random() * 0.06);
      Y.vig.setAlpha(0.92 + Math.sin(Y.t * 13) * 0.03 + Math.random() * 0.03);
    },
    yumaDrawGun: function (g, C0) {
      var Y = this.yu, P = Y.P, k = Y.k, fx = Y.fxG, train = g.sp.kind === "train", rg = train ? Y.trainRifleG : Y.rifleG;
      var up = g.state === "aim" || g.state === "lock" || g.state === "fire" || (g.state === "rise" && g.t > 200);
      var tx = g.state === "lock" || g.state === "fire" ? g.lx : g.tx, ty = g.state === "lock" || g.state === "fire" ? g.ly : g.ty;
      var a = this.yumaGunAim(g, tx, ty);
      if (up) {
        /* the rifle and the arms holding it, leaning over the edge of the roof */
        var bx = a.sx - a.ux * 6 * k, by = a.sy - a.uy * 6 * k, gx2 = a.sx + a.ux * 12 * k, gy2 = a.sy + a.uy * 12 * k;
        rg.lineStyle(4.6 * k, 0x2a1a0e, 1); rg.lineBetween(bx, by, a.mx, a.my);
        rg.lineStyle(3.2 * k, 0x6a4222, 1); rg.lineBetween(bx, by, gx2, gy2);
        rg.lineStyle(1.8 * k, 0x8a8478, 1); rg.lineBetween(gx2, gy2, a.mx, a.my);
        var nx = -a.uy, ny = a.ux;
        rg.lineStyle(4 * k, 0x2a1a0e, 1); rg.lineBetween(a.sx - nx * 4 * k, a.sy - ny * 4 * k, a.sx + a.ux * 16 * k + nx * 1.5 * k, a.sy + a.uy * 16 * k + ny * 1.5 * k);
        rg.lineStyle(2.6 * k, 0x6a5038, 1); rg.lineBetween(a.sx - nx * 4 * k, a.sy - ny * 4 * k, a.sx + a.ux * 16 * k + nx * 1.5 * k, a.sy + a.uy * 16 * k + ny * 1.5 * k);
      }
      if (g.state === "rise") {
        /* a glint of sun off the barrel as he comes up */
        var gl = clamp(1 - g.t / 320, 0, 1);
        fx.fillStyle(0xfff6d8, 0.9 * gl); fx.fillCircle(g.x + 10 * k, g.edge - 6 * k, 6 * k * (0.5 + gl));
        fx.lineStyle(1.5 * k, 0xfff6d8, gl); fx.lineBetween(g.x + 10 * k - 12 * k, g.edge - 6 * k, g.x + 10 * k + 12 * k, g.edge - 6 * k); fx.lineBetween(g.x + 10 * k, g.edge - 18 * k, g.x + 10 * k, g.edge + 6 * k);
      }
      if (g.state === "aim" || g.state === "lock") {
        var lock = g.state === "lock", R = Y.ran;
        /* the line: to where he is aiming (dotted, catching up with you) or, locked, right at you; it stops at cover */
        var ex = tx - a.mx, ey = ty - a.my, tEnd = Math.sqrt(ex * ex + ey * ey) || 1;
        var blk = this.yumaRayBlock(a.mx, a.my, a.ux, a.uy, tEnd, R.y), tStop = blk ? blk.t : tEnd;
        var onYou = !blk && Math.abs(tx - C0.x) + Math.abs(ty - C0.y) < 24 * k && (R.state === "walk" || R.state === "down");
        var pulse = 0.65 + 0.35 * Math.sin(Y.t * (lock ? 22 : 8));
        if (lock) {
          fx.lineStyle(7 * k, 0x2a1a0e, 0.5); fx.lineBetween(a.mx, a.my, a.mx + a.ux * tStop, a.my + a.uy * tStop);
          fx.lineStyle(3.6 * k, 0xe0402a, 0.75 + 0.25 * pulse); fx.lineBetween(a.mx, a.my, a.mx + a.ux * tStop, a.my + a.uy * tStop);
        } else {
          var prog = clamp(g.t / P.aimMs, 0, 1);
          for (var t = 6 * k; t < tStop; t += 12 * k) {
            fx.fillStyle(0x2a1a0e, 0.45 + 0.3 * prog); fx.fillCircle(a.mx + a.ux * t, a.my + a.uy * t, 3.8 * k);
            fx.fillStyle(0xe0402a, 0.7 + 0.3 * prog); fx.fillCircle(a.mx + a.ux * t, a.my + a.uy * t, 2.5 * k);
          }
        }
        if (blk) {
          /* stopped at the cover: a small cream burst says "safe here" */
          var sx = a.mx + a.ux * blk.t, sy = a.my + a.uy * blk.t;
          fx.lineStyle(2 * k, 0xfff2c8, 0.9); fx.strokeCircle(sx, sy, 5 * k);
          fx.lineBetween(sx - 8 * k, sy, sx - 3 * k, sy); fx.lineBetween(sx + 3 * k, sy, sx + 8 * k, sy); fx.lineBetween(sx, sy - 8 * k, sx, sy - 3 * k);
        }
        if (onYou) {
          /* it reaches you: a red ring (pulsing hard when he is about to fire) */
          var rr = (lock ? 22 : 26) * k * (lock ? 1 + 0.12 * Math.sin(Y.t * 22) : 1);
          fx.lineStyle(5 * k, 0x2a1a0e, lock ? 0.45 : 0.25); fx.strokeCircle(C0.x, C0.y, rr);
          fx.lineStyle(2.6 * k, 0xd8381e, lock ? 1 : 0.5); fx.strokeCircle(C0.x, C0.y, rr);
          if (lock && !Y.told.move) { Y.told.move = true; this.toast("The solid red line reaches you: he's about to fire! Get a trough, a wagon or crates between you and him.", 3400); }
        }
      }
      if (g.flash) {
        var f = g.flash; f.t += 16;
        var fa = clamp(1 - f.t / 180, 0, 1);
        if (fa > 0) {
          fx.lineStyle(2.2 * k, 0xfff2c8, fa); fx.lineBetween(f.mx, f.my, f.ex, f.ey);
          fx.fillStyle(0xfff6d8, fa); fx.fillCircle(f.mx, f.my, 7 * k * fa + 2 * k);
          fx.fillStyle(0xffc860, fa * 0.8);
          for (var sp = 0; sp < 6; sp++) { var an = sp / 6 * TAU + 0.3; fx.fillTriangle(f.mx, f.my, f.mx + Math.cos(an) * 14 * k * fa, f.my + Math.sin(an) * 14 * k * fa, f.mx + Math.cos(an + 0.3) * 5 * k, f.my + Math.sin(an + 0.3) * 5 * k); }
        } else g.flash = null;
      }
    },
    yumaDrawRider: function () {
      var Y = this.yu, P = Y.P, k = Y.k, r = Y.rider, fx = Y.fxG, W = this.W;
      if (r.state === "warn") {
        var u = clamp(r.t / P.riderWarn, 0, 1), dash = 18 * k, off = (Y.t * 140 * k * r.dir) % (dash * 2);
        /* the lane he will ride: a reddish band with a running dashed line down the middle */
        fx.fillStyle(0xb3311c, 0.08 + 0.1 * u + 0.04 * Math.sin(Y.t * 10)); fx.fillRect(0, r.y - 15 * k, W, 30 * k);
        fx.lineStyle(1.6 * k, 0x7a2a18, 0.5 + 0.3 * u);
        fx.lineBetween(0, r.y - 15 * k, W, r.y - 15 * k); fx.lineBetween(0, r.y + 15 * k, W, r.y + 15 * k);
        fx.lineStyle(4 * k, 0xb3311c, 0.6 + 0.4 * u);
        for (var x = -dash * 2 + off; x < W + dash * 2; x += dash * 2) fx.lineBetween(x, r.y, x + dash, r.y);
        /* chevrons and a dust cloud at the side he will come from */
        var ex = r.dir > 0 ? 18 * k : W - 18 * k;
        for (var j = 0; j < 3; j++) {
          var cx = ex + r.dir * j * 14 * k, a = (Math.floor(Y.t * 6) + j) % 3 === 0 ? 1 : 0.45;
          fx.lineStyle(3.4 * k, 0xc8321c, a); fx.beginPath(); fx.moveTo(cx - r.dir * 5 * k, r.y - 9 * k); fx.lineTo(cx + r.dir * 4 * k, r.y); fx.lineTo(cx - r.dir * 5 * k, r.y + 9 * k); fx.strokePath();
        }
        Y.dustT = (Y.dustT || 0) - 0.016;
        if (Y.dustT <= 0) { Y.dustT = 0.09; this.yumaPuff(ex - r.dir * 10 * k, r.y - 6 * k, "dust", 1.6 + u); }
        return;
      }
      var jump = 0;
      Y.covers.forEach(function (c) {
        if (r.y < c.y - c.T.d * k - 10 * k || r.y > c.y + 24 * k) return;
        var half = (c.face.x1 - c.face.x0) / 2 + 30 * k, d = Math.abs(r.x - c.x);
        if (d < half) jump = Math.max(jump, Math.cos(d / half * Math.PI / 2) * (c.face.y1 - c.face.y0 + 10 * k));
      });
      r.spr.setTexture("md-yuma-rider-" + (Math.floor(r.bob) % 2)).setPosition(r.x, r.y - Math.abs(Math.sin(r.bob)) * 4 * k - jump).setDepth(this.yumaZ(r.y) + 0.002);
    },
    yumaTumble: function (s, ms) {
      var Y = this.yu, k = Y.k, tw = Y.tumble, W = this.W;
      if (!tw) {
        Y.tumbleCd -= ms;
        if (Y.tumbleCd <= 0) { Y.tumbleCd = rnd(14000, 26000); Y.tumble = { x: -30 * k, y: Y.bandBot + 4 * k, vx: rnd(70, 110) * k, rot: 0, ph: 0 }; Y.tumbleSpr.setVisible(true); }
        return;
      }
      tw.x += tw.vx * s; tw.rot += tw.vx / (16 * k) * s; tw.ph += s * 5;
      Y.tumbleSpr.setPosition(tw.x, tw.y - 14 * k - Math.abs(Math.sin(tw.ph)) * 10 * k).setRotation(tw.rot).setDepth(this.yumaZ(tw.y));
      if (tw.x > W + 40 * k) { Y.tumble = null; Y.tumbleSpr.setVisible(false); }
    },

    /* a right answer: Wade goes up the steps, the whistle blows, the gang ducks; the next question starts back at the hotel */
    clear_yuma: function () {
      var Y = this.yu, self = this, R = Y.ran, d = Y.lastDoor;
      if (d) { d.state = "found"; this.yumaPaintDoor(d); }
      R.state = "board"; R.t = 0; R.by = R.y; Y.goal = null; Y.dig = null;
      Y.guns.slice().forEach(function (g) { self.yumaGunFree(g); });
      if (Y.rider) this.yumaRiderEnd();
      ysnd("whistle");
      this.yumaPuff(Y.locoX + 196 * Y.k * LOCO_S, Y.coachBot - 8 * Y.k, "steam", 1.6);
      try { Y.fxG.clear(); } catch (e) {}
    }
  });
})();
