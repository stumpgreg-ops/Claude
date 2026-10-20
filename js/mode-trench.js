/* SOL Labyrinth v5.22 — the Lit and Film mode "trench": Trench Run (A New Hope, 1977; genre SCIFI, episode NEWHOPE).
 *
 * A pseudo-3D chase view down a metal trench on the surface of a battle station. A generic twin-engine
 * starfighter (a flat swept wing, fins at the tips: not any film's ship) flies away from the camera; the trench
 * floor, walls, catwalks and turrets are projected from world space (X across, -1..1; Y up, floor -1 to rim
 * RIM; z ahead of the camera) every frame into a few Graphics layers, far to near. The camera rides above and
 * behind the ship, so the floor ahead (where the ports come) is never hidden behind it.
 *
 * The answer: exhaust ports come down the trench floor one after another, each with a letter on a hologram
 * over it (ports you pass come round again). The torpedo flies straight ahead in the ship's lane and dives;
 * the sight on the floor (corner brackets) shows where a port must be at the moment you fire. A port inside
 * the sight (it turns green while the targeting computer is on) takes the torpedo: answerPick. A wrong letter
 * costs a life and its port is crossed out; a miss costs nothing.
 * The hazards, each a life: turret bolts (the dome glows red first, a red ring marks where the bolt will
 * cross), catwalks (a red frame on the ship's plane shows where each will pass), from 21 pylons, from 61 gates
 * (fly through the window), from 51 a fighter on your tail (a red lock-on ring that follows you: jink out of it
 * before it closes). trenchParams(n) is the one difficulty curve (also on the def as `params`).
 *
 * Registered with SolModes.extend (js/modes.js); the methods are copied onto ModeScene, so `this` is the
 * mode scene. Textures are drawn once (canvasTex) under "md-trench-" keys.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, shuffle = L.shuffle, snd = L.snd, canvasTex = L.canvasTex, mix = L.mix;

  /* ── the world ── */
  var FLOOR = -1, RIM = 1.25;            /* the trench's floor and rim heights; its walls stand at X = ±1 */
  var ZS = 2.8;                          /* the ship's distance ahead of the camera */
  var ZNEAR = 0.45, ZFAR = 44;           /* the near clip and the draw distance */
  var SEG = 1.4;                         /* one wall panel along the trench */
  var SIGHT = 10;                        /* the sight: where a port must be when the torpedo leaves */
  var TORP_U = 7;                        /* a torpedo's speed ahead of the ship */
  var SHIP_HW = 0.19, SHIP_HH = 0.07;    /* the part of the ship a hazard can touch (the wings reach 0.28) */
  var SHIP_SPAN = 0.7;                  /* the ship's drawn wingspan */
  var XMAX = 0.78, YMIN = FLOOR + 0.17, YMAX = RIM - 0.3;
  var CAM_UP = 1.4, CAM_FY = 0.6, CAM_FX = 0.62;   /* the chase camera: above the ship, following it */
  var PORT_R = 0.3, PORT_F = 0.5;        /* a port's hole and its square frame (half-sizes) */
  var STEER_V = 2.5;                     /* the ship's top speed across the trench, units a second */
  var WARN_S = 2.1;                      /* seconds before a catwalk reaches the ship that its red frame shows */
  var SHIP_TW = 240, SHIP_TH = 120;

  var C = { fog: 0x020308, wall: 0x5f6772, wallD: 0x2d323a, wallL: 0x939ca8, floorA: 0x3b4149, floorB: 0x353b42, seam: 0x121519,
    surf: 0x515862, lightY: 0xffe2a0, lightB: 0xa8dcff, cat: 0x69717b, catTop: 0x98a0aa, catBot: 0x2f343b, pylon: 0x59606a,
    bolt: 0xff4a2a, boltCore: 0xffe6d0, torp: 0x7fc8ff, amber: 0xffb43c, green: 0x6dff9a, red: 0xff4a3a };
  var HUD_FONT = "'Courier New', Courier, monospace", LET_FONT = "'Trebuchet MS', 'Arial Black', sans-serif";

  /* ── difficulty: one curve for every level 1-100, each level harder than the one before ── */
  function trenchParams(n) {
    n = Math.max(1, Math.min(100, Number(n) || 1));
    return {
      speed: 6.4 + n * 0.066,                                       /* the trench rushes by, units a second (6.5 at 1, 13 at 100) */
      portGap: 30 - n * 0.15,                                       /* units from one port to the next */
      tolX: 0.46 - n * 0.0021,                                      /* how far off the port's centre the lane may be */
      tolZ: 2.0 - n * 0.0095,                                       /* the sight's depth, ± units (0.31 s at 1, 0.08 s at 100) */
      lockLight: n < 81 ? 1 : 0,                                    /* the sight turns green when a port is in it */
      turretEvery: 3.6 - n * 0.025,                                 /* seconds between one turret's burst and the next */
      warnMs: 1150 - n * 6,                                         /* a turret glows this long before it fires */
      boltSpd: 9 + n * 0.1,                                         /* a bolt's own speed, on top of the trench's */
      aimErr: 0.42 - n * 0.0042,                                    /* how far off the ship the turrets aim (0 at 100) */
      boltR: 0.12 + n * 0.0008,                                     /* a bolt's reach */
      catGap: 34 - n * 0.18,                                        /* units from one catwalk to the next */
      catTh: 0.3 + n * 0.003,                                       /* a catwalk's thickness */
      doubleCat: n >= 11 ? Math.min(0.5, 0.25 + (n - 11) * 0.003) : 0,   /* catwalks in pairs, one over the other */
      gapH: n >= 11 ? 0.95 - (n - 11) * 0.004 : 0.95,               /* the gap between a pair */
      pylons: n >= 21 ? Math.min(0.42, 0.2 + (n - 21) * 0.004) : 0, /* the share of obstacles that are pylons */
      pylonW: 0.5 + n * 0.0022,
      volley: n >= 91 ? 3 : n >= 31 ? 2 : 1,                        /* bolts in a turret's burst */
      shutter: n >= 41 ? Math.min(0.5, 0.26 + (n - 41) * 0.004) : 0, /* the share of the time a port's blast shutter is shut */
      tails: n >= 81 ? 2 : n >= 51 ? 1 : 0,                         /* fighters on your tail */
      lockMs: 2700 - n * 10,                                        /* a lock-on ring takes this long to close */
      tailEvery: 7.5 - n * 0.03,                                    /* seconds between lock-ons */
      tailTrack: 0.5 + n * 0.008,                                   /* how fast a lock-on ring follows you, units a second */
      frames: n >= 61 ? Math.min(0.4, 0.2 + (n - 61) * 0.005) : 0,  /* the share of obstacles that are gates */
      lead: n >= 71 ? Math.min(1, 0.45 + (n - 71) * 0.02) : 0       /* turrets aim where you are going */
    };
  }

  function hash(g, k) { var x = Math.sin(g * 127.1 + k * 311.7) * 43758.5453; return x - Math.floor(x); }
  function sfx(name, a) {
    var R = window.SolRealms;
    if (!R || !R.blip) return;
    try {
      if (name === "torp") { R.blip(260, 1100, 0.2, "sawtooth", 0.028); R.hiss(0.22, 2600, 0.03); }
      else if (name === "boom") { R.hiss(0.9, 320, 0.09); R.blip(130, 38, 0.8, "triangle", 0.09); }
      else if (name === "wrong") { R.hiss(0.35, 500, 0.05); R.blip(220, 90, 0.35, "square", 0.035); }
      else if (name === "miss") { R.blip(520, 200, 0.12, "triangle", 0.03); R.hiss(0.12, 1500, 0.02); }
      else if (name === "clang") { R.blip(980, 940, 0.16, "square", 0.025); R.blip(1310, 1260, 0.14, "square", 0.018, 0.03); }
      else if (name === "charge") R.blip(180, 640, a || 0.9, "sine", 0.014);
      else if (name === "bolt") { R.blip(1500, 260, 0.17, "square", 0.022); }
      else if (name === "whoosh") R.hiss(0.18, 3200, 0.025);
      else if (name === "warn") R.blip(880, 880, 0.06, "square", 0.014);
      else if (name === "lock") R.blip(1250, 1250, 0.05, "sine", 0.022);
      else if (name === "tailfire") { R.blip(1700, 300, 0.12, "square", 0.02); R.blip(1600, 280, 0.12, "square", 0.02, 0.08); }
      else if (name === "crash") { R.hiss(0.45, 700, 0.07); R.blip(160, 60, 0.3, "sawtooth", 0.04); }
    } catch (e) {}
  }

  /* ── art, drawn once ── */
  function poly(c, pts) { c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); c.closePath(); }
  /* the starfighter from behind: a flat swept wing with a little droop, a fin at each tip, a round hull with the
     canopy on top and two engines. Light grey with amber bands. */
  function drawShip(c, w, h) {
    var cx = w / 2, g;
    c.lineJoin = "round"; c.lineCap = "round";
    function side(sx) {
      /* the wing: thick at the root, thin and drooping at the tip */
      g = c.createLinearGradient(0, 54, 0, 82);
      g.addColorStop(0, "#f1f4f7"); g.addColorStop(0.5, "#c3cad2"); g.addColorStop(1, "#7f8892");
      c.fillStyle = g;
      poly(c, [[cx + sx * 22, 56], [cx + sx * 104, 70], [cx + sx * 110, 73], [cx + sx * 108, 78], [cx + sx * 22, 80]]); c.fill();
      c.strokeStyle = "#3b424b"; c.lineWidth = 1.6; c.stroke();
      /* panel lines and the amber band */
      c.strokeStyle = "rgba(59,66,75,0.55)"; c.lineWidth = 1;
      c.beginPath(); c.moveTo(cx + sx * 40, 60); c.lineTo(cx + sx * 40, 79); c.moveTo(cx + sx * 78, 66); c.lineTo(cx + sx * 78, 78); c.stroke();
      c.fillStyle = "#e8892e";
      poly(c, [[cx + sx * 54, 62], [cx + sx * 64, 64], [cx + sx * 64, 79], [cx + sx * 54, 79.3]]); c.fill();
      c.fillStyle = "#3b424b"; poly(c, [[cx + sx * 22, 77], [cx + sx * 108, 76], [cx + sx * 108, 78], [cx + sx * 22, 80]]); c.fill();
      /* the fin at the tip, leaning out a little, with a red-orange tip light */
      g = c.createLinearGradient(cx + sx * 100, 0, cx + sx * 114, 0);
      g.addColorStop(0, "#dfe4ea"); g.addColorStop(1, "#8f98a2");
      c.fillStyle = g;
      poly(c, [[cx + sx * 101, 74], [cx + sx * 109, 74], [cx + sx * 116, 34], [cx + sx * 110, 32]]); c.fill();
      c.strokeStyle = "#3b424b"; c.lineWidth = 1.4; c.stroke();
      c.fillStyle = "#ff8a3a"; c.beginPath(); c.arc(cx + sx * 113, 33, 3, 0, Math.PI * 2); c.fill();
      /* the gun under the tip, seen end-on */
      c.fillStyle = "#2b3037"; c.beginPath(); c.arc(cx + sx * 104, 82, 5.5, 0, Math.PI * 2); c.fill();
      c.strokeStyle = "#8f98a2"; c.lineWidth = 1.5; c.stroke();
      c.fillStyle = "#11151a"; c.beginPath(); c.arc(cx + sx * 104, 82, 2.4, 0, Math.PI * 2); c.fill();
    }
    side(-1); side(1);
    /* the hull */
    g = c.createRadialGradient(cx - 8, 52, 4, cx, 66, 40);
    g.addColorStop(0, "#f6f8fa"); g.addColorStop(0.55, "#c4cbd3"); g.addColorStop(1, "#6f7882");
    c.fillStyle = g; c.beginPath(); c.ellipse(cx, 67, 33, 28, 0, 0, Math.PI * 2); c.fill();
    c.strokeStyle = "#3b424b"; c.lineWidth = 1.8; c.stroke();
    /* a spine fin on top and the canopy */
    c.fillStyle = "#b9c1ca"; poly(c, [[cx - 3, 42], [cx + 3, 42], [cx + 1.5, 30], [cx - 1.5, 30]]); c.fill();
    c.strokeStyle = "#3b424b"; c.lineWidth = 1.2; c.stroke();
    g = c.createLinearGradient(0, 40, 0, 58);
    g.addColorStop(0, "#2d4560"); g.addColorStop(1, "#0d1622");
    c.fillStyle = g; c.beginPath(); c.ellipse(cx, 50, 17, 10, 0, Math.PI, 0); c.lineTo(cx + 17, 52); c.lineTo(cx - 17, 52); c.closePath(); c.fill();
    c.strokeStyle = "#3b424b"; c.lineWidth = 1.4; c.stroke();
    c.strokeStyle = "rgba(190,225,255,0.7)"; c.lineWidth = 1.6; c.beginPath(); c.ellipse(cx - 2, 49, 11, 6, 0, Math.PI * 1.1, Math.PI * 1.6); c.stroke();
    /* the amber band round the hull and the two engines */
    c.strokeStyle = "#e8892e"; c.lineWidth = 3; c.beginPath(); c.ellipse(cx, 67, 31, 26, 0, Math.PI * 0.08, Math.PI * 0.92); c.stroke();
    [-14, 14].forEach(function (dx) {
      c.fillStyle = "#262b32"; c.beginPath(); c.arc(cx + dx, 72, 12.5, 0, Math.PI * 2); c.fill();
      c.strokeStyle = "#9aa3ad"; c.lineWidth = 2; c.stroke();
      g = c.createRadialGradient(cx + dx, 72, 1, cx + dx, 72, 9);
      g.addColorStop(0, "#fffbe8"); g.addColorStop(0.45, "#ffd27a"); g.addColorStop(1, "#ff7a2a");
      c.fillStyle = g; c.beginPath(); c.arc(cx + dx, 72, 8.5, 0, Math.PI * 2); c.fill();
    });
  }
  function drawGlow(r, gg, b) {
    return function (c, w, h) {
      var g = c.createRadialGradient(w / 2, h / 2, 1, w / 2, h / 2, w / 2);
      g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.18, "rgba(" + r + "," + gg + "," + b + ",0.9)");
      g.addColorStop(0.5, "rgba(" + r + "," + gg + "," + b + ",0.25)"); g.addColorStop(1, "rgba(" + r + "," + gg + "," + b + ",0)");
      c.fillStyle = g; c.fillRect(0, 0, w, h);
    };
  }
  /* the hologram badge a port's letter sits on: a hexagon of light */
  function drawBadge(c, w, h) {
    var cx = w / 2, cy = h / 2, i, r = w / 2 - 5, pts = [];
    for (i = 0; i < 6; i++) { var a = Math.PI / 6 + i * Math.PI / 3; pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); }
    var g = c.createRadialGradient(cx, cy, 2, cx, cy, r);
    g.addColorStop(0, "rgba(40,30,12,0.92)"); g.addColorStop(1, "rgba(14,10,6,0.92)");
    c.fillStyle = g; poly(c, pts); c.fill();
    c.strokeStyle = "rgba(255,255,255,1)"; c.lineWidth = 4; c.stroke();
    c.strokeStyle = "rgba(255,255,255,0.45)"; c.lineWidth = 1.5;
    pts = []; for (i = 0; i < 6; i++) { var b = Math.PI / 6 + i * Math.PI / 3; pts.push([cx + Math.cos(b) * (r - 7), cy + Math.sin(b) * (r - 7)]); }
    poly(c, pts); c.stroke();
    /* scan lines */
    c.fillStyle = "rgba(255,255,255,0.06)";
    for (i = 8; i < h - 8; i += 4) c.fillRect(8, i, w - 16, 1.5);
  }
  /* deep space behind the trench: stars, a nebula and a ringed planet, drawn for the canvas size */
  function drawSky(W, H) {
    return function (c) {
      var g = c.createLinearGradient(0, 0, 0, H), i, seed = 7;
      function rr() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
      g.addColorStop(0, "#03050b"); g.addColorStop(0.5, "#070b18"); g.addColorStop(1, "#02030a");
      c.fillStyle = g; c.fillRect(0, 0, W, H);
      [[0.72, 0.12, 0.42, "rgba(90,60,150,0.16)"], [0.3, 0.2, 0.36, "rgba(40,90,160,0.14)"], [0.55, 0.05, 0.25, "rgba(160,70,110,0.08)"]].forEach(function (n) {
        var r = Math.max(W, H) * n[2], gr = c.createRadialGradient(W * n[0], H * n[1], 2, W * n[0], H * n[1], r);
        gr.addColorStop(0, n[3]); gr.addColorStop(1, "rgba(0,0,0,0)"); c.fillStyle = gr; c.fillRect(0, 0, W, H);
      });
      for (i = 0; i < Math.round(W * H / 2600); i++) {
        var x = rr() * W, y = rr() * H, s = rr(), col = s > 0.93 ? "rgba(255,214,170," : s > 0.86 ? "rgba(170,205,255," : "rgba(255,255,255,";
        c.fillStyle = col + (0.35 + rr() * 0.6).toFixed(2) + ")";
        c.fillRect(x, y, s > 0.97 ? 2.2 : s > 0.8 ? 1.6 : 1.1, s > 0.97 ? 2.2 : s > 0.8 ? 1.6 : 1.1);
        if (s > 0.985) { c.fillStyle = "rgba(255,255,255,0.18)"; c.beginPath(); c.arc(x + 1, y + 1, 4, 0, Math.PI * 2); c.fill(); }
      }
      /* a ringed planet, high on the left */
      var px = W * 0.26, py = H * 0.1, pr = Math.min(W, H) * 0.075;
      c.save(); c.translate(px, py); c.rotate(-0.32);
      c.strokeStyle = "rgba(220,190,150,0.35)"; c.lineWidth = Math.max(2, pr * 0.12);
      c.beginPath(); c.ellipse(0, 0, pr * 2.1, pr * 0.42, 0, Math.PI, Math.PI * 2); c.stroke();
      g = c.createRadialGradient(-pr * 0.4, -pr * 0.4, pr * 0.1, 0, 0, pr);
      g.addColorStop(0, "#e8c99a"); g.addColorStop(0.6, "#a7784a"); g.addColorStop(1, "#3a2414");
      c.fillStyle = g; c.beginPath(); c.arc(0, 0, pr, 0, Math.PI * 2); c.fill();
      c.strokeStyle = "rgba(120,80,40,0.35)"; c.lineWidth = pr * 0.08;
      [-0.35, 0.05, 0.4].forEach(function (b) { c.beginPath(); c.ellipse(0, b * pr, pr * Math.sqrt(1 - b * b) * 0.98, pr * 0.1, 0, 0, Math.PI * 2); c.stroke(); });
      c.strokeStyle = "rgba(230,200,160,0.5)"; c.lineWidth = Math.max(2, pr * 0.12);
      c.beginPath(); c.ellipse(0, 0, pr * 2.1, pr * 0.42, 0, 0, Math.PI); c.stroke();
      c.restore();
    };
  }
  function trenchArt(scene) {
    canvasTex(scene, "md-trench-ship", SHIP_TW, SHIP_TH, drawShip);
    canvasTex(scene, "md-trench-flame", 64, 64, drawGlow(255, 170, 80));
    canvasTex(scene, "md-trench-badge", 96, 96, drawBadge);
  }

  /* ── projection: camera space (X, Y, z) to the screen ── */
  var QP = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }], P1 = { x: 0, y: 0 }, P2 = { x: 0, y: 0 };
  function pj(B, X, Y, z, o) { var q = B.F / z; o.x = B.cx + (X - B.camX) * q; o.y = B.cy - (Y - B.camY) * q; return o; }
  function fogK(z) { var f = clamp((z - 2) / (ZFAR * 0.72 - 2), 0, 1); return Math.pow(f, 0.6); }
  function fogC(col, z) { return mix(col, C.fog, fogK(z)); }
  function fillQ(g, col, a) {
    g.fillStyle(col, a == null ? 1 : a);
    g.fillTriangle(QP[0].x, QP[0].y, QP[1].x, QP[1].y, QP[2].x, QP[2].y);
    g.fillTriangle(QP[0].x, QP[0].y, QP[2].x, QP[2].y, QP[3].x, QP[3].y);
  }
  /* a rectangle on a wall (the plane X = x) between depths za, zb and heights y0, y1 */
  function qWall(B, x, za, zb, y0, y1) { pj(B, x, y0, za, QP[0]); pj(B, x, y1, za, QP[1]); pj(B, x, y1, zb, QP[2]); pj(B, x, y0, zb, QP[3]); }
  /* a rectangle on a level plane (the floor, a catwalk's top) */
  function qFlat(B, y, za, zb, x0, x1) { pj(B, x0, y, za, QP[0]); pj(B, x1, y, za, QP[1]); pj(B, x1, y, zb, QP[2]); pj(B, x0, y, zb, QP[3]); }
  /* a rectangle facing the camera */
  function qFront(B, z, x0, x1, y0, y1) { pj(B, x0, y0, z, QP[0]); pj(B, x1, y0, z, QP[1]); pj(B, x1, y1, z, QP[2]); pj(B, x0, y1, z, QP[3]); }

  M.extend("trench", {
    name: "Trench Run", kind: "trench flight level", level: "trench flight level", act: "FIRE",
    how: "The last attack of A New Hope: race your starfighter down the battle station's trench. Exhaust ports in the floor come toward you, each with a letter glowing over it. Steer into the lane of the port with the right answer and fire a torpedo when that port slides into the sight ahead of you (the brackets turn green). Ports you pass come round again, and the targeting computer at the bottom shows them coming. Turrets glow red, then fire (a red ring marks where each bolt will cross), and catwalks cross the trench (a red frame shows where): steer clear.",
    rules: "A torpedo into a wrong letter's port costs a life, and that port is crossed out. So does a turret bolt or flying into a catwalk (later a pylon or a gate, and from level 51 the fire of a fighter on your tail). A miss costs nothing: fire again.",
    keys: "Arrow keys, WASD or the on-screen pad steer up, down, left and right (or point with the mouse or a finger and the ship follows) · Space, FIRE or a mouse button fires a torpedo.",
    tip: "TRENCH RUN — steer into the lane of the port with the right letter and fire when it slides into the sight. Dodge the turret bolts and the catwalks.",
    hint1: "Fire a torpedo into the exhaust port with the right letter. The passage stays in the side panel.",
    hint2: "This question has two right letters. Hit both ports that carry them.",
    news: ["",
      "Catwalks come in pairs, one over the other: fly through the gap between them. The trench is faster.",
      "Pylons: tall struts stand in the trench. Steer left or right around them.",
      "The turrets fire two bolts in a row.",
      "Blast shutters: each exhaust port opens and closes. A torpedo only goes in while the port is open.",
      "An enemy fighter is on your tail: a red lock-on ring closes in on your ship. Jink out of it before it fires.",
      "Gates: walls across the trench with one window in them. Fly through the window.",
      "The turrets lead their aim: they shoot where you are going. Change direction to throw them off.",
      "The targeting computer is off: the sight no longer turns green. Trust your eyes. Two fighters are on your tail.",
      "The final run: turrets fire three bolts at a time, and everything is faster."],
    params: trenchParams
  }, {
    trenchParams: function (n) { return trenchParams(n); },
    trenchSightZ: function () { return SIGHT; },

    setup_trench: function () {
      trenchArt(this);
      var P = trenchParams(this.night), i;
      var B = this.tr = { P: P, t: 0, dist: 0, ship: { x: 0, y: -0.15, vx: 0, vy: 0 }, camX: 0, camY: 0, aim: null,
        ports: [], obs: [], bolts: [], torps: [], tails: [], blasts: [], dust: [], queue: [], marks: {},
        nextPort: 0, nextObs: 0, turretT: 2.5, tailT: 5, charge: null, cd: 0, armed: false, lastFrame: -9, grace: 0,
        quiet: false, lpx: null, lpy: null, skyKey: null, told: {}, lastLetter: null,
        stats: { torps: 0, hits: 0, misses: 0, shut: 0, bolts: 0, boltHits: 0, crashes: 0, dodged: 0, tailShots: 0, tailHits: 0 } };
      this.cameras.main.setBackgroundColor("#03050b");
      B.sky = this.add.image(0, 0, "__DEFAULT").setOrigin(0, 0).setDepth(0);
      B.wG = this.add.graphics().setDepth(2);                         /* the trench and everything farther than the ship */
      B.gG = this.add.graphics().setDepth(3).setBlendMode(1);         /* glows (added light) */
      B.badges = this.add.container(0, 0).setDepth(5);
      B.flames = [0, 1].map(function () { return this.add.image(0, 0, "md-trench-flame").setDepth(7).setBlendMode(1); }, this);
      B.shipImg = this.add.image(0, 0, "md-trench-ship").setDepth(8);
      B.nG = this.add.graphics().setDepth(9);                         /* what has passed the ship */
      B.hG = this.add.graphics().setDepth(15);                        /* the sight, the warnings, the targeting computer */
      var hud = { fontFamily: HUD_FONT, fontSize: 12, color: "#ffb43c", fontStyle: "bold" };
      B.tcTitle = this.add.text(0, 0, "TARGETING COMPUTER", hud).setOrigin(0, 0).setDepth(16);
      B.tcStatus = this.add.text(0, 0, "", hud).setOrigin(1, 0).setDepth(16);
      B.chips = [];
      for (i = 0; i < 6; i++) B.chips.push(this.add.text(0, 0, "", { fontFamily: LET_FONT, fontSize: 14, color: "#ffb43c", fontStyle: "bold" }).setOrigin(0.5).setDepth(17).setVisible(false));
      B.warnTx = [];
      for (i = 0; i < 3; i++) B.warnTx.push(this.add.text(0, 0, "", { fontFamily: HUD_FONT, fontSize: 13, color: "#ff8a7a", fontStyle: "bold", stroke: "#1a0604", strokeThickness: 4 }).setOrigin(0.5, 1).setDepth(16).setVisible(false));
      B.tailTx = this.add.text(0, 0, "LOCK-ON! JINK!", { fontFamily: HUD_FONT, fontSize: 15, color: "#ff6a5a", fontStyle: "bold", stroke: "#1a0604", strokeThickness: 5 }).setOrigin(0.5, 1).setDepth(16).setVisible(false);
      for (i = 0; i < 26; i++) B.dust.push({ x: rnd(-1, 1), y: rnd(FLOOR, RIM), z: rnd(ZNEAR, 16) });
      this.trenchLayout();
      B.nextObs = ZFAR + 14;
      this.makeSol(this.W / 2, this.H / 2, "up").setVisible(false);   /* the pilot flies; the sprite stays for coin pop-ups */
    },

    /* everything that depends on the canvas size */
    trenchLayout: function () {
      var B = this.tr, W = this.W, H = this.H;
      B.k = clamp(Math.min(H / 768, W / 1000), 0.6, 1.3);
      B.F = Math.min(H * 0.8, W * 0.62);
      B.cx = W / 2; B.cy = H * 0.22;
      var key = "md-trench-sky-" + W + "x" + H;
      if (B.skyKey !== key) {
        var old = B.skyKey;
        canvasTex(this, key, W, H, drawSky(W, H));
        B.skyKey = key; B.sky.setTexture(key);
        if (old && old !== key) { try { this.textures.remove(old); } catch (e) {} }
      }
      /* the targeting computer, bottom centre, clear of the on-screen pad and the FIRE button */
      var pw = clamp(W * 0.36, 200, 340), ph = Math.round(clamp(58 * B.k, 46, 66)), px = W / 2 - pw / 2;
      var pad = this.trenchPadBox();
      if (pad && pad.x1 > px - 6 && pad.y0 < H) px = Math.min(pad.x1 + 8, W - pw - 8);
      B.tc = { x: px, y: H - ph - 8, w: pw, h: ph };
      var fs = Math.round(clamp(11 * B.k, 9, 13));
      B.tcTitle.setFontSize(fs).setPosition(px + 8, B.tc.y + 5);
      B.tcStatus.setFontSize(fs).setPosition(px + pw - 8, B.tc.y + 5);
      B.chips.forEach(function (t) { t.setFontSize(Math.round(clamp(15 * B.k, 12, 18))); });
      B.warnTx.forEach(function (t) { t.setFontSize(Math.round(clamp(13 * B.k, 11, 15))); });
      B.tailTx.setFontSize(Math.round(clamp(15 * B.k, 12, 17)));
      B.shipS = SHIP_SPAN * B.F / ZS / SHIP_TW;
      B.shipImg.setScale(B.shipS);
      B.flames.forEach(function (f) { f.setScale(B.shipS * 0.7); });
    },
    trenchPadBox: function () {
      try {
        var pad = document.querySelector("#controls .dpad") || document.querySelector(".dpad"), cv = this.game && this.game.canvas;
        if (!pad || !cv || !pad.offsetParent) return null;
        var a = pad.getBoundingClientRect(), c = cv.getBoundingClientRect();
        if (!a.width || !a.height || !c.width || !c.height) return null;
        var fx = this.W / c.width, fy = this.H / c.height;
        return { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
      } catch (e) { return null; }
    },
    resize_trench: function () { this.trenchLayout(); },

    /* the ship's place on the screen (the camera follows it) */
    trenchCam: function () {
      var B = this.tr, s = B.ship;
      B.camX = s.x * CAM_FX;
      B.camY = CAM_UP + s.y * CAM_FY;
    },
    trenchShipScreen: function () { var B = this.tr; return pj(B, B.ship.x, B.ship.y, ZS, { x: 0, y: 0 }); },
    /* where on the trench's cross-section the pointer is (the ship flies there) */
    trenchUnproject: function (px, py) {
      var B = this.tr, q = B.F / ZS;
      return { x: clamp((px - B.cx) / q / (1 - CAM_FX), -XMAX, XMAX), y: clamp((CAM_UP - (py - B.cy) / q) / (1 - CAM_FY), YMIN, YMAX) };
    },

    /* ── a new question: new ports ── */
    answers_trench: function () {
      var B = this.tr, self = this;
      B.ports.slice().forEach(function (p) { self.trenchKillPort(p); });
      B.ports = []; B.torps = []; B.marks = {}; B.queue = []; B.lastLetter = null;
      this.choiceLetters().forEach(function (Lt) { if (self.extracted.indexOf(Lt) !== -1) B.marks[Lt] = "found"; });
      B.nextPort = B.dist + 30;
      B.grace = 2.2; B.charge = null; B.tails = []; B.bolts = [];
      B.nextObs = Math.max(B.nextObs, B.dist + ZFAR + 6);
      B.armed = false;
    },
    trenchLive: function () {
      var B = this.tr;
      return this.choiceLetters().filter(function (Lt) { return !B.marks[Lt]; });
    },
    trenchNextLetter: function () {
      var B = this.tr, live = this.trenchLive(), self = this;
      B.queue = B.queue.filter(function (Lt) { return live.indexOf(Lt) !== -1; });
      if (!B.queue.length) {
        B.queue = shuffle(live.slice());
        if (B.queue.length > 1 && B.queue[0] === B.lastLetter) B.queue.push(B.queue.shift());
      }
      var Lt = B.queue.shift() || live[0] || (self.choiceLetters()[0]);
      B.lastLetter = Lt;
      return Lt;
    },
    /* a port at world distance s (or camera depth z) */
    trenchSpawnPort: function (letter, x, z) {
      var B = this.tr, k = B.k;
      var p = { s: B.dist + (z == null ? ZFAR : z), x: x == null ? this.trenchLane() : x, letter: letter, ph: rnd(0, 10), state: "live", hitT: 0 };
      p.badge = this.add.image(0, 0, "md-trench-badge").setDepth(5);
      p.txt = this.add.text(0, 0, letter, { fontFamily: LET_FONT, fontSize: 56, color: "#fff4d6", fontStyle: "bold", stroke: "#2a1604", strokeThickness: 6 }).setOrigin(0.5).setDepth(6);
      if (B.marks[letter]) p.state = B.marks[letter];
      this.trenchPaintPort(p);
      B.ports.push(p);
      return p;
    },
    trenchLane: function () {
      var B = this.tr, n = this.night || 1;
      if (n <= 10) return [-0.5, 0, 0.5][Math.floor(Math.random() * 3)] + rnd(-0.06, 0.06);
      return rnd(-0.62, 0.62);
    },
    trenchPaintPort: function (p) {
      var dead = p.state === "dead", found = p.state === "found";
      p.badge.setTint(dead ? 0xff5a4a : found ? 0x6dff9a : 0xffb43c);
      p.txt.setText(dead ? "✕" : found ? "✓" : p.letter).setColor(dead ? "#ffb0a6" : found ? "#d6ffe2" : "#fff4d6");
    },
    trenchKillPort: function (p) {
      var B = this.tr, i = B.ports.indexOf(p);
      if (i !== -1) B.ports.splice(i, 1);
      try { p.badge.destroy(); p.txt.destroy(); } catch (e) {}
    },
    /* the port's blast shutter: 1 open, 0 shut */
    trenchOpen: function (p, t) {
      var sh = this.tr.P.shutter;
      if (!sh) return 1;
      var per = 2.6, u = (((t == null ? this.tr.t : t) + p.ph) % per) / per, shut = sh, tr = 0.09;
      /* open for (1 - shut) of the cycle, then the plates slide shut */
      if (u < 1 - shut - tr) return 1;
      if (u < 1 - shut) return 1 - (u - (1 - shut - tr)) / tr;
      if (u < 1 - tr) return 0;
      return (u - (1 - tr)) / tr;
    },

    /* ── obstacles: a list of boxes across the trench at one depth ── */
    trenchSpawnObs: function (kind, o, z) {
      var B = this.tr, P = B.P, boxes = [], th = P.catTh, a, y;
      o = o || {};
      if (kind === "cat") {
        y = o.y != null ? o.y : (Math.random() < 0.5 ? rnd(0.35, 0.8) : rnd(-0.55, -0.05));
        boxes.push({ x0: -1, x1: 1, y0: y - th / 2, y1: y + th / 2, t: "cat" });
      } else if (kind === "double") {
        y = o.y != null ? o.y : rnd(-0.3, 0.45);
        a = P.gapH / 2;
        boxes.push({ x0: -1, x1: 1, y0: y + a, y1: y + a + th, t: "cat" });
        boxes.push({ x0: -1, x1: 1, y0: y - a - th, y1: y - a, t: "cat" });
      } else if (kind === "pylon") {
        var w = P.pylonW, side = o.side != null ? o.side : [-1, 0, 1][Math.floor(Math.random() * 3)];
        var xc = side * (1 - w / 2);
        boxes.push({ x0: xc - w / 2, x1: xc + w / 2, y0: FLOOR, y1: RIM, t: "pylon" });
      } else if (kind === "gate") {
        var ww = 0.95, wh = 0.7, xw = o.x != null ? o.x : rnd(-0.45, 0.45), yw = o.y != null ? o.y : rnd(-0.45, 0.6);
        boxes.push({ x0: -1, x1: 1, y0: yw + wh / 2, y1: RIM, t: "gate" });
        boxes.push({ x0: -1, x1: 1, y0: FLOOR, y1: yw - wh / 2, t: "gate" });
        boxes.push({ x0: -1, x1: xw - ww / 2, y0: yw - wh / 2, y1: yw + wh / 2, t: "gate" });
        boxes.push({ x0: xw + ww / 2, x1: 1, y0: yw - wh / 2, y1: yw + wh / 2, t: "gate" });
      }
      var ob = { s: B.dist + (z == null ? ZFAR : z), d: kind === "pylon" ? 0.5 : 0.42, kind: kind, boxes: boxes, hit: false, passed: false, warned: false, ph: rnd(0, 6) };
      B.obs.push(ob);
      return ob;
    },
    trenchObsLabel: function (ob) {
      return ob.kind === "pylon" ? "PYLON" : ob.kind === "gate" ? "GATE" : ob.kind === "double" ? "CATWALKS" : "CATWALK";
    },

    /* ── turret bolts ── */
    trenchSpawnBolt: function (x0, y0, z0, tx, ty) {
      var B = this.tr, P = B.P, v = P.speed + P.boltSpd, T = Math.max(0.2, (z0 - ZS) / v);
      var b = { x: x0, y: y0, z: z0, vx: (tx - x0) / T, vy: (ty - y0) / T, vz: -v, tx: tx, ty: ty, crossed: false, t: 0 };
      B.bolts.push(b);
      B.stats.bolts += 1;
      sfx("bolt");
      return b;
    },
    /* a turret fires at the ship: where it is (from level 71, where it is going), a little off at low levels */
    trenchTurretShot: function (side, z) {
      var B = this.tr, P = B.P, s = B.ship, v = P.speed + P.boltSpd;
      var x0 = side * 0.98, y0 = RIM + 0.15, T = Math.max(0.2, (z - ZS) / v);
      var a = rnd(0, Math.PI * 2), r = Math.sqrt(Math.random()) * P.aimErr;
      var tx = clamp(s.x + P.lead * s.vx * T + Math.cos(a) * r, -0.95, 0.95), ty = clamp(s.y + P.lead * s.vy * T + Math.sin(a) * r * 0.7, FLOOR + 0.05, RIM - 0.05);
      return this.trenchSpawnBolt(x0, y0, z, tx, ty);
    },
    /* the turrets stand on the rim, one on every few panels (decided by the panel's number) */
    trenchTurretAt: function (g) { return hash(g, 2) < 0.3 ? (hash(g, 1) < 0.5 ? -1 : 1) : 0; },

    /* ── a fighter on your tail: a lock-on ring ── */
    trenchSpawnTail: function (x, y) {
      var B = this.tr, s = B.ship;
      var tl = { x: x == null ? clamp(s.x + rnd(-0.35, 0.35), -XMAX, XMAX) : x, y: y == null ? clamp(s.y + rnd(-0.25, 0.25), YMIN, YMAX) : y, t: 0, beep: 0 };
      B.tails.push(tl);
      if (!B.told.tail) { B.told.tail = true; this.toast("An enemy fighter is on your tail! Keep moving: get out of the red lock-on ring before it closes.", 4200); }
      return tl;
    },
    trenchTailR: function (tl) { var u = clamp(tl.t / this.tr.P.lockMs, 0, 1); return 0.5 - 0.24 * u; },

    /* ── torpedoes ── */
    trenchFire: function () {
      var B = this.tr, P = B.P, s = B.ship, v = P.speed;
      var T = (SIGHT - ZS) / (TORP_U + v), zLand = ZS + TORP_U * T, best = null, bd = 1e9;
      B.ports.forEach(function (p) {
        var z = p.s - B.dist, dz = Math.abs(z - SIGHT), dx = Math.abs(p.x - s.x);
        if (dz <= P.tolZ && dx <= P.tolX && dz + dx < bd) { bd = dz + dx; best = p; }
      });
      var tp = { x0: s.x, y0: s.y - 0.04, x: s.x, y: s.y, z: ZS, t: 0, T: T, zLand: zLand, port: best, zPort0: best ? best.s - B.dist : 0, tAt: B.t };
      B.torps.push(tp);
      B.cd = 380; B.stats.torps += 1;
      sfx("torp");
      if (!B.told.fire && !best) { B.told.fire = true; this.toast("Fire when the port is inside the corner brackets of the sight (they turn green), and steer into its lane.", 3800); }
      return tp;
    },
    trenchTorpLand: function (tp) {
      var B = this.tr, p = tp.port, self = this, scr = pj(B, tp.x, FLOOR, Math.max(ZNEAR, tp.z), { x: 0, y: 0 });
      if (!p || B.ports.indexOf(p) === -1) {
        B.stats.misses += 1;
        this.burst(scr.x, scr.y, 0x9fd8ff, 6);
        B.blasts.push({ x: tp.x, s: B.dist + tp.z, t: 0, big: false, col: 0x9fd8ff });
        sfx("miss");
        if (!B.told.miss) { B.told.miss = true; this.toast("Missed! Line up with the port's lane and fire when it is inside the sight. A miss costs nothing.", 3600); }
        return "miss";
      }
      if (this.trenchOpen(p) < 0.5) {
        B.stats.shut += 1;
        this.burst(scr.x, scr.y, 0xffe08a, 8);
        sfx("clang");
        if (!B.told.shut) { B.told.shut = true; this.toast("Clang! The blast shutter was shut. Fire while the port is open.", 3200); }
        return "shut";
      }
      if (p.state !== "live") {
        sfx("miss");
        this.toast(p.state === "dead" ? "That port is crossed out. Try another letter." : "You already hit that port. Find the other right letter.", 2600);
        return "done-port";
      }
      B.stats.hits += 1;
      B.lastPort = p;
      var res = this.answerPick(p.letter, scr.x, scr.y - 30 * B.k);
      if (res === "wrong") {
        p.state = "dead"; B.marks[p.letter] = "dead"; p.hitT = 1;
        B.blasts.push({ x: p.x, s: p.s, t: 0, big: false, col: 0xff5a3a });
        sfx("wrong");
      } else if (res === "partial" || res === "done") {
        p.state = "found"; B.marks[p.letter] = "found"; p.hitT = 1;
        B.blasts.push({ x: p.x, s: p.s, t: 0, big: true, col: 0xffc060 });
        sfx("boom");
      }
      this.trenchPaintPort(p);
      return res;
    },

    tick_trench: function (s, inp, ms) {
      var B = this.tr, P = B.P, k = B.k, sh = B.ship, i, self = this;
      var frame = this.game && this.game.loop ? this.game.loop.frame : 0;
      if (frame !== B.lastFrame + 1) B.armed = false;   /* the reading pop-up was open: a key still held does not fire */
      B.lastFrame = frame;
      B.t += s;
      if (!inp.fire) B.armed = true;
      if (B.cd > 0) B.cd -= ms;
      if (B.grace > 0) B.grace -= s;
      if (!B.told.start) { B.told.start = true; this.toast("Steer into the lane of the port with the right letter and fire (Space) when it slides into the sight on the floor.", 5200); }

      /* the ship: the keys or the pad; else it flies toward the pointer once the pointer moves or is held down */
      var p = this.ptr, tvx, tvy;
      var moved = B.lpx != null && Math.abs(p.x - B.lpx) + Math.abs(p.y - B.lpy) > 2;
      B.lpx = p.x; B.lpy = p.y;
      if (inp.ax || inp.ay) { B.aim = null; tvx = inp.ax * STEER_V; tvy = -inp.ay * STEER_V * 0.9; }
      else {
        if (moved || inp.ptr) B.aim = this.trenchUnproject(p.x, p.y);
        if (B.aim) { tvx = clamp((B.aim.x - sh.x) * 7, -STEER_V, STEER_V); tvy = clamp((B.aim.y - sh.y) * 7, -STEER_V * 0.9, STEER_V * 0.9); }
        else { tvx = 0; tvy = 0; }
      }
      var acc = Math.min(1, s * 9);
      sh.vx += (tvx - sh.vx) * acc; sh.vy += (tvy - sh.vy) * acc;
      sh.x += sh.vx * s; sh.y += sh.vy * s;
      if (sh.x < -XMAX || sh.x > XMAX) { sh.x = clamp(sh.x, -XMAX, XMAX); sh.vx = 0; }
      if (sh.y < YMIN || sh.y > YMAX) { sh.y = clamp(sh.y, YMIN, YMAX); sh.vy = 0; }
      this.trenchCam();

      /* the trench rushes by */
      B.dist += P.speed * s;
      var live = !this._between && !this._finishing;

      /* the ports come one after another, never right on top of an obstacle */
      if (live && B.dist + ZFAR >= B.nextPort) {
        var clash = B.obs.filter(function (o) { return Math.abs(o.s - B.nextPort) < 5; })[0];
        if (clash) B.nextPort = clash.s + clash.d + 5;
        else { this.trenchSpawnPort(this.trenchNextLetter(), null, B.nextPort - B.dist); B.nextPort += P.portGap * rnd(0.9, 1.1); }
      }
      /* obstacles */
      if (live && !B.quiet && B.dist + ZFAR >= B.nextObs) {
        var near = B.ports.filter(function (q) { return Math.abs(q.s - B.nextObs) < 5; })[0];
        if (near) B.nextObs = near.s + 5.5;
        else {
          var r = Math.random(), kind = "cat";
          if (r < P.frames) kind = "gate"; else if (r < P.frames + P.pylons) kind = "pylon"; else if (Math.random() < P.doubleCat) kind = "double";
          this.trenchSpawnObs(kind, null, B.nextObs - B.dist);
          B.nextObs += P.catGap * rnd(0.8, 1.2);
        }
      }
      /* the turrets: one glows, then fires (a burst of P.volley bolts) */
      if (live && !B.quiet && B.grace <= 0) {
        if (!B.charge) {
          B.turretT -= s;
          if (B.turretT <= 0) {
            var cands = [], g0 = Math.floor((B.dist + 18) / SEG), g1 = Math.floor((B.dist + 34) / SEG), g;
            for (g = g0; g <= g1; g++) if (this.trenchTurretAt(g)) cands.push(g);
            if (cands.length) {
              g = cands[Math.floor(Math.random() * cands.length)];
              B.charge = { g: g, side: this.trenchTurretAt(g), t: 0, shots: 0 };
              sfx("charge", P.warnMs / 1000);
            }
            B.turretT = P.turretEvery * rnd(0.8, 1.2);
          }
        }
      }
      if (B.charge) {
        var ch = B.charge, cz = (ch.g + 0.5) * SEG - B.dist;
        ch.t += ms;
        if (cz < ZS + 3 || !live) B.charge = null;
        else if (ch.t >= P.warnMs + ch.shots * 190) {
          this.trenchTurretShot(ch.side, cz);
          ch.shots += 1;
          if (!B.told.bolt) { B.told.bolt = true; this.toast("Turret fire! A red ring shows where each bolt will cross. Steer out of it.", 3600); }
          if (ch.shots >= P.volley) B.charge = null;
        }
      }
      /* fighters on your tail */
      if (P.tails && live && !B.quiet && B.grace <= 0) {
        B.tailT -= s;
        if (B.tailT <= 0 && B.tails.length < P.tails) { this.trenchSpawnTail(); B.tailT = B.tails.length < P.tails ? 1.1 : P.tailEvery * rnd(0.85, 1.15); }
      }

      /* bolts */
      for (i = B.bolts.length - 1; i >= 0; i--) {
        var b = B.bolts[i], zb = b.z;
        b.t += s; b.x += b.vx * s; b.y += b.vy * s; b.z += b.vz * s;
        if (!b.crossed && b.z <= ZS) {
          b.crossed = true;
          var u = (zb - ZS) / Math.max(1e-6, zb - b.z), cx = b.x - b.vx * s * (1 - u), cy = b.y - b.vy * s * (1 - u);
          var ex = (cx - sh.x) / (SHIP_HW + P.boltR), ey = (cy - sh.y) / (SHIP_HH + P.boltR);
          if (ex * ex + ey * ey < 1 && live) {
            var sp = this.trenchShipScreen();
            this.burst(sp.x, sp.y, 0xff7a4a, 14); sfx("crash");
            if (this.loseLife("hit", "A TURRET BOLT HIT YOU")) B.stats.boltHits += 1;
          } else if (ex * ex + ey * ey < 4) sfx("whoosh");
        }
        if (b.z < ZNEAR) B.bolts.splice(i, 1);
        if (this._finishing) return;
      }
      /* obstacles: a hit when the ship's box meets one of theirs as they pass */
      for (i = B.obs.length - 1; i >= 0; i--) {
        var ob = B.obs[i], z0 = ob.s - B.dist, z1 = z0 + ob.d;
        if (!ob.warned && z0 - ZS < P.speed * WARN_S && z0 > ZS) {
          ob.warned = true; sfx("warn");
          if (!B.told[ob.kind]) {
            B.told[ob.kind] = true;
            this.toast(ob.kind === "pylon" ? "A pylon ahead! The red frame shows where it will pass: steer around it." :
              ob.kind === "gate" ? "A gate ahead! Fly through its window: the red frame shows the wall." :
              ob.kind === "double" ? "Two catwalks! Fly through the gap between them, or around them." :
              "A catwalk ahead! The red frame shows where it will pass: fly over or under it.", 3800);
          }
        }
        if (!ob.hit && !ob.passed && z0 <= ZS + 0.12 && z1 >= ZS - 0.12) {
          for (var j = 0; j < ob.boxes.length; j++) {
            var bx = ob.boxes[j];
            if (sh.x + SHIP_HW > bx.x0 && sh.x - SHIP_HW < bx.x1 && sh.y + SHIP_HH > bx.y0 && sh.y - SHIP_HH < bx.y1) {
              ob.hit = true;
              if (live) {
                var sp2 = this.trenchShipScreen();
                this.burst(sp2.x, sp2.y, 0xffd08a, 16); sfx("crash");
                if (this.loseLife("hit", "YOU HIT A " + this.trenchObsLabel(ob).replace(/S$/, ""))) B.stats.crashes += 1;
              }
              break;
            }
          }
        }
        if (!ob.passed && z1 < ZS - 0.12) { ob.passed = true; if (!ob.hit) B.stats.dodged += 1; }
        if (z1 < ZNEAR) B.obs.splice(i, 1);
        if (this._finishing) return;
      }
      /* the lock-on rings follow the ship, close, and fire */
      for (i = B.tails.length - 1; i >= 0; i--) {
        var tl = B.tails[i], dx = sh.x - tl.x, dy = sh.y - tl.y, dd = Math.sqrt(dx * dx + dy * dy), stp = P.tailTrack * s;
        if (dd > 1e-4) { tl.x += dx / dd * Math.min(stp, dd); tl.y += dy / dd * Math.min(stp, dd); }
        tl.t += ms; tl.beep -= ms;
        if (tl.beep <= 0) { sfx("lock"); tl.beep = 120 + 500 * (1 - clamp(tl.t / P.lockMs, 0, 1)); }
        if (tl.t >= P.lockMs) {
          var R = this.trenchTailR(tl), ddx = sh.x - tl.x, ddy = sh.y - tl.y;
          B.stats.tailShots += 1; sfx("tailfire");
          B.blasts.push({ tail: true, x: tl.x, y: tl.y, t: 0 });
          if (ddx * ddx + ddy * ddy < R * R && live) {
            var sp3 = this.trenchShipScreen();
            this.burst(sp3.x, sp3.y, 0xff7a4a, 14);
            if (this.loseLife("hit", "THE FIGHTER ON YOUR TAIL HIT YOU")) B.stats.tailHits += 1;
          }
          B.tails.splice(i, 1);
          if (this._finishing) return;
        }
      }
      /* torpedoes */
      for (i = B.torps.length - 1; i >= 0; i--) {
        var tp = B.torps[i];
        tp.t += s;
        var uu = clamp(tp.t / tp.T, 0, 1);
        if (tp.port && B.ports.indexOf(tp.port) !== -1) {
          var zl = tp.zPort0 - P.speed * tp.T;
          tp.x = tp.x0 + (tp.port.x - tp.x0) * (1 - (1 - uu) * (1 - uu));
          tp.z = ZS + (zl - ZS) * uu;
        } else { tp.x = tp.x0; tp.z = ZS + TORP_U * tp.t; }
        tp.y = tp.y0 + (FLOOR + 0.02 - tp.y0) * uu * uu;
        if (uu >= 1) { B.torps.splice(i, 1); this.trenchTorpLand(tp); if (this._finishing || this.ended) return; }
      }
      /* firing */
      if (inp.fire && B.armed && B.cd <= 0 && live) this.trenchFire();
      /* ports that have gone by */
      B.ports.slice().forEach(function (q) { if (q.s - B.dist < ZNEAR - 0.6) self.trenchKillPort(q); });
      for (i = B.blasts.length - 1; i >= 0; i--) { B.blasts[i].t += s; if (B.blasts[i].t > (B.blasts[i].big ? 1.3 : 0.6)) B.blasts.splice(i, 1); }
      B.dust.forEach(function (d) { d.z -= P.speed * 1.1 * s; if (d.z < ZNEAR) { d.z = rnd(10, 16); d.x = rnd(-1, 1); d.y = rnd(FLOOR, RIM); } });

      this.trenchDraw();
    },

    /* ═══ drawing ═══ */
    trenchDraw: function () {
      var B = this.tr, W = this.W, H = this.H, g = B.wG, gl = B.gG, ng = B.nG, k = B.k, i, self = this;
      g.clear(); gl.clear(); ng.clear(); B.hG.clear();
      var gA = Math.floor((B.dist + ZNEAR) / SEG), gB = Math.floor((B.dist + ZFAR) / SEG);
      for (var gg = gB; gg >= gA; gg--) this.trenchSeg(gg);
      /* the ship's shadow on the floor: it shows how high you fly */
      var sh = B.ship, shc = pj(B, sh.x, FLOOR, ZS, P1), srx = 0.3 * B.F / ZS, sry = Math.max(2, srx * (B.camY - FLOOR) / ZS * 0.5);
      g.fillStyle(0x000000, 0.16); g.fillEllipse(shc.x, shc.y, srx * 2, sry * 2);
      g.fillStyle(0x000000, 0.2); g.fillEllipse(shc.x, shc.y, srx * 1.2, sry * 1.1);
      /* speed dust */
      B.dust.forEach(function (d) {
        if (d.z < ZNEAR + 0.1) return;
        pj(B, d.x, d.y, d.z, P1); pj(B, d.x, d.y, d.z + 0.5 + B.P.speed * 0.05, P2);
        g.lineStyle(Math.max(1, 1.4 * B.F / d.z * 0.004), 0xcfe0ff, 0.25 * (1 - fogK(d.z)));
        g.lineBetween(P1.x, P1.y, P2.x, P2.y);
      });
      /* the objects, far to near: ports, obstacles, bolts, torpedoes, blasts */
      var list = [];
      B.ports.forEach(function (p) { list.push({ z: p.s - B.dist, f: "trenchDrawPort", o: p }); });
      B.obs.forEach(function (o) { list.push({ z: o.s - B.dist + o.d, f: "trenchDrawObs", o: o }); });
      B.bolts.forEach(function (b) { list.push({ z: b.z, f: "trenchDrawBolt", o: b }); });
      B.torps.forEach(function (t) { list.push({ z: t.z, f: "trenchDrawTorp", o: t }); });
      B.blasts.forEach(function (b) { if (!b.tail) list.push({ z: b.s - B.dist, f: "trenchDrawBlast", o: b }); });
      list.sort(function (a, b) { return b.z - a.z; });
      list.forEach(function (it) { self[it.f](it.o, it.z); });
      this.trenchDrawShip();
      this.trenchDrawHud();
    },
    /* one panel of the trench: the surface and the rim (when the camera is above it), the walls, the floor */
    trenchSeg: function (gi) {
      var B = this.tr, g = B.wG, gl = B.gG;
      var za = Math.max(ZNEAR, gi * SEG - B.dist), zb = (gi + 1) * SEG - B.dist;
      if (zb <= ZNEAR + 0.01) return;
      var zm = (za + zb) / 2, f = fogK(zm), h1 = hash(gi, 3), h2 = hash(gi, 4), sd, x, j;
      var above = B.camY > RIM;
      /* the station's surface beyond the rims, seen from above */
      if (above) {
        [-1, 1].forEach(function (sd) {
          qFlat(B, RIM, za, zb, sd < 0 ? -40 : 1, sd < 0 ? -1 : 40); fillQ(g, fogC(gi % 2 ? C.surf : mix(C.surf, C.seam, 0.18), zm));
          /* plating: lanes of darker and lighter plates running away from the rim */
          for (var lx = 1.5; lx < 9; lx += 1.6) {
            var hv = hash(gi, 90 + lx * 3 + (sd > 0 ? 1 : 0));
            if (hv < 0.45) { qFlat(B, RIM, za, zb, sd > 0 ? lx : -lx - 0.9, sd > 0 ? lx + 0.9 : -lx); fillQ(g, fogC(hv < 0.2 ? C.wallD : C.wall, zm), 0.7); }
          }
          qFlat(B, RIM, za, zb, sd > 0 ? 1 : -1.12, sd > 0 ? 1.12 : -1); fillQ(g, fogC(C.wallL, zm), 0.8);
        });
      }
      /* towers and turrets on the rim */
      for (j = 0; j < 2; j++) {
        sd = j ? 1 : -1;
        if (hash(gi, 5 + j) < 0.22) {
          var x0 = sd * (1.18 + hash(gi, 9) * 0.3), x1 = x0 + sd * 0.32, th = 0.12 + hash(gi, 8 + j) * 0.3, zt0 = za + (zb - za) * 0.25, zt1 = zt0 + 0.5;
          this.trenchBox(g, Math.min(x0, x1), Math.max(x0, x1), RIM, RIM + th, Math.max(ZNEAR, zt0), zt1, C.wall, 1);
        }
      }
      var tsd = this.trenchTurretAt(gi);
      if (tsd) this.trenchDrawTurret(gi, tsd, (za + zb) / 2);
      /* the walls: lit from high on the left, so the right wall is brighter; a dark lower band, long grooves,
         machinery boxes, a bright lip at the rim, a seam at each panel */
      var z0 = gi * SEG - B.dist, L0 = zb - z0;
      function zf(u) { return Math.max(ZNEAR, z0 + L0 * u); }
      function wq(sd, u0, u1, y0, y1, col, a, layer) {
        if (z0 + L0 * u1 <= ZNEAR) return;
        qWall(B, sd, zf(u0), zf(u1), y0, y1); fillQ(layer || g, layer ? col : fogC(col, zm), a);
      }
      for (j = 0; j < 2; j++) {
        sd = j ? 1 : -1;
        var base = mix(sd > 0 ? C.wall : mix(C.wall, C.wallD, 0.35), C.wallD, gi % 2 ? 0 : 0.1);
        wq(sd, 0, 1, FLOOR, -0.3, mix(base, C.wallD, 0.6));
        wq(sd, 0, 1, -0.3, RIM - 0.1, base);
        wq(sd, 0, 1, RIM - 0.1, RIM, C.wallL);
        /* machinery: boxes on the wall, the same every time this panel comes by */
        var n = 2 + Math.floor(hash(gi, 10 + j) * 4);
        for (var q = 0; q < n; q++) {
          var ya = FLOOR + 0.06 + hash(gi, 20 + j * 7 + q) * 2.0, yh = 0.07 + hash(gi, 30 + j * 7 + q) * 0.32;
          var fa = hash(gi, 40 + j * 7 + q) * 0.7, fb = Math.min(1, fa + 0.12 + hash(gi, 50 + j * 7 + q) * 0.5);
          var tone = hash(gi, 60 + j * 7 + q);
          wq(sd, fa, fb, ya, Math.min(RIM - 0.12, ya + yh), tone < 0.55 ? C.wallD : tone < 0.8 ? C.seam : C.wallL, tone < 0.8 ? 0.85 : 0.55);
        }
        /* the long grooves that run the length of the trench */
        wq(sd, 0, 1, -0.33, -0.28, C.seam, 0.9);
        wq(sd, 0, 1, 0.42, 0.46, C.seam, 0.75);
        wq(sd, 0, 1, 0.46, 0.49, C.wallL, 0.35);
        /* lit windows */
        if (hash(gi, 70 + j) < 0.3) {
          var yl = -0.75 + hash(gi, 72 + j) * 1.6, col = hash(gi, 74 + j) < 0.5 ? C.lightY : C.lightB;
          for (x = 0; x < 3; x++) wq(sd, 0.15 + x * 0.25, 0.27 + x * 0.25, yl, yl + 0.06, col, 0.8 * (1 - f), gl);
        }
        /* a rib every fourth panel */
        if (gi % 4 === 0) { wq(sd, 0, 0.1, FLOOR, RIM, C.wallL, 0.75); wq(sd, 0.1, 0.18, FLOOR, RIM, C.seam, 0.85); }
        wq(sd, 0, 0.035, FLOOR, RIM, C.seam, 0.9);
      }
      /* the floor: plates, a centre channel, seams */
      qFlat(B, FLOOR, za, zb, -1, 1); fillQ(g, fogC(gi % 2 ? C.floorA : C.floorB, zm));
      qFlat(B, FLOOR, za, zb, -0.08, 0.08); fillQ(g, fogC(C.seam, zm), 0.8);
      qFlat(B, FLOOR, za, zb, -1, -0.84); fillQ(g, fogC(C.wallD, zm), 0.85);
      qFlat(B, FLOOR, za, zb, 0.84, 1); fillQ(g, fogC(C.wallD, zm), 0.85);
      if (h1 > 0.5 && z0 + L0 * 0.85 > ZNEAR) { x = -0.75 + h2 * 1.2; qFlat(B, FLOOR, zf(0.2), zf(0.85), x, x + 0.3); fillQ(g, fogC(C.wallD, zm), 0.6); }
      if (z0 + L0 * 0.04 > ZNEAR) { qFlat(B, FLOOR, zf(0), zf(0.04), -1, 1); fillQ(g, fogC(C.seam, zm), 0.9); }
      /* guide lights along the floor's edges */
      if (gi % 2 === 0) {
        [-0.93, 0.93].forEach(function (lx) {
          pj(B, lx, FLOOR, za + (zb - za) * 0.5, P1);
          var rr = Math.max(1, 0.03 * B.F / zm);
          gl.fillStyle(0x9fd8ff, 0.8 * (1 - f)); gl.fillCircle(P1.x, P1.y, rr);
        });
      }
    },
    /* a box in the world, the faces the camera can see, then its front */
    trenchBox: function (g, x0, x1, y0, y1, zf, zk, col, a) {
      var B = this.tr, zm = (zf + zk) / 2;
      if (zk <= ZNEAR) return;
      zf = Math.max(ZNEAR, zf);
      if (B.camY > y1) { qFlat(B, y1, zf, zk, x0, x1); fillQ(g, fogC(mix(col, 0xffffff, 0.22), zm), a); }
      if (B.camY < y0) { qFlat(B, y0, zf, zk, x0, x1); fillQ(g, fogC(mix(col, 0x000000, 0.5), zm), a); }
      if (B.camX < x0) { qWall(B, x0, zf, zk, y0, y1); fillQ(g, fogC(mix(col, 0x000000, 0.28), zm), a); }
      if (B.camX > x1) { qWall(B, x1, zf, zk, y0, y1); fillQ(g, fogC(mix(col, 0x000000, 0.28), zm), a); }
      qFront(B, zf, x0, x1, y0, y1); fillQ(g, fogC(col, zf), a);
    },
    trenchDrawTurret: function (gi, sd, z) {
      var B = this.tr, g = B.wG, gl = B.gG, ch = B.charge;
      if (z < ZNEAR + 0.3) return;
      var x0 = sd > 0 ? 1.02 : -1.3, x1 = x0 + 0.28;
      this.trenchBox(g, x0, x1, RIM, RIM + 0.1, z - 0.14, z + 0.14, 0x4a515b, 1);
      var c = pj(B, sd * 1.16, RIM + 0.16, z, P1), r = 0.12 * B.F / z;
      g.fillStyle(fogC(0x3a4049, z), 1); g.fillCircle(c.x, c.y, r);
      g.fillStyle(fogC(0x7d8691, z), 1); g.fillCircle(c.x - r * 0.22, c.y - r * 0.28, r * 0.55);
      g.fillStyle(fogC(0x14171c, z), 1); g.fillRect(c.x - r * 0.95, c.y - r * 0.12, r * 1.9, r * 0.32);
      /* twin barrels, pointing into the trench */
      var bw = Math.max(1.2, 0.03 * B.F / z), bx = null;
      g.lineStyle(bw, fogC(0x22262c, z), 1);
      [-0.035, 0.035].forEach(function (dy) {
        pj(B, sd * 1.16, RIM + 0.16 + dy, z, P2); var x0 = P2.x, y0 = P2.y;
        bx = pj(B, sd * 0.98, RIM + 0.15 + dy, z - 0.08, P2); g.lineBetween(x0, y0, bx.x, bx.y);
      });
      bx = pj(B, sd * 0.98, RIM + 0.15, z - 0.08, P2);
      var charging = ch && ch.g === gi, u = charging ? clamp(ch.t / B.P.warnMs, 0, 1) : 0;
      gl.fillStyle(0xff3a20, charging ? 0.35 + 0.6 * u : 0.25 * (1 - fogK(z))); gl.fillCircle(bx.x, bx.y, Math.max(1.5, r * (charging ? 0.5 + 1.6 * u : 0.3)));
      if (charging) { gl.fillStyle(0xffd0b0, 0.5 + 0.5 * u); gl.fillCircle(bx.x, bx.y, Math.max(1, r * 0.35 * (0.5 + u))); }
    },
    trenchDrawPort: function (p, z) {
      var B = this.tr, g = B.wG, gl = B.gG, k = B.k;
      if (z < ZNEAR + 0.2) { p.badge.setVisible(false); p.txt.setVisible(false); return; }
      var fade = 1 - fogK(z), open = this.trenchOpen(p);
      /* the housing: a dark square frame with a lit rim, sunk in the floor */
      qFlat(B, FLOOR, z - PORT_F, z + PORT_F, p.x - PORT_F, p.x + PORT_F); fillQ(g, fogC(0x2a2f37, z));
      qFlat(B, FLOOR, z - PORT_F * 0.82, z + PORT_F * 0.82, p.x - PORT_F * 0.82, p.x + PORT_F * 0.82); fillQ(g, fogC(0x8c949e, z));
      qFlat(B, FLOOR, z - PORT_F * 0.7, z + PORT_F * 0.7, p.x - PORT_F * 0.7, p.x + PORT_F * 0.7); fillQ(g, fogC(0x1c2027, z));
      /* the hole: an ellipse on the floor */
      var c = pj(B, p.x, FLOOR, z, P1), rx = PORT_R * B.F / z, ry = Math.max(1, PORT_R * B.F * (B.camY - FLOOR) / (z * z));
      var col = p.state === "dead" ? 0xff3a2a : p.state === "found" ? 0x6dff9a : 0xff9a30, pulse = 0.8 + 0.2 * Math.sin(B.t * 6 + p.ph);
      g.fillStyle(0x0a0604, 1); g.fillEllipse(c.x, c.y, rx * 2, ry * 2);
      gl.fillStyle(col, (p.state === "dead" ? 0.35 : 0.7) * pulse * fade); gl.fillEllipse(c.x, c.y, rx * 1.5, ry * 1.5);
      gl.fillStyle(0xffffff, 0.35 * pulse * fade * (p.state === "dead" ? 0.2 : 1)); gl.fillEllipse(c.x, c.y, rx * 0.6, ry * 0.6);
      /* the blast shutter: two plates that slide in from the sides */
      if (open < 1) {
        var cov = PORT_F * 0.72 * (1 - open);
        qFlat(B, FLOOR + 0.002, z - PORT_F * 0.72, z + PORT_F * 0.72, p.x - PORT_F * 0.72, p.x - PORT_F * 0.72 + cov); fillQ(g, fogC(0x7b838d, z));
        qFlat(B, FLOOR + 0.002, z - PORT_F * 0.72, z + PORT_F * 0.72, p.x + PORT_F * 0.72 - cov, p.x + PORT_F * 0.72); fillQ(g, fogC(0x6a727c, z));
        if (open < 0.5) { qFlat(B, FLOOR + 0.003, z - PORT_F * 0.72, z + PORT_F * 0.72, p.x - 0.02, p.x + 0.02); fillQ(g, fogC(0xffb43c, z), 0.8); }
      }
      /* the hologram: a thin beam up to the letter */
      var top = pj(B, p.x, FLOOR + 0.55, z, P2);
      gl.lineStyle(Math.max(1, 0.03 * B.F / z), col, 0.3 * fade); gl.lineBetween(c.x, c.y, top.x, top.y);
      var size = clamp(0.42 * B.F / z, Math.max(26, 24 * k), 96 * k), a = clamp((z - ZS - 0.4) / 1.5, 0, 1) * clamp(0.35 + fade, 0, 1);
      p.badge.setVisible(true).setPosition(top.x, top.y - size * 0.45).setDisplaySize(size, size).setAlpha(a * 0.95).setDepth(5 + 1 / z);
      p.txt.setVisible(true).setPosition(top.x, top.y - size * 0.45).setScale(size * 0.62 / 56).setAlpha(a).setDepth(5.0001 + 1 / z);
    },
    trenchDrawObs: function (ob, zk) {
      var B = this.tr, zf = ob.s - B.dist, near = zf < ZS, g = near ? B.nG : B.wG, gl = B.gG, self = this;
      /* once it has gone by the ship, it fades so the view stays clear */
      var a = near ? clamp((zf - 1.1) / (ZS - 1.1), 0, 1) * 0.85 : 1;
      if (zk <= ZNEAR || a <= 0.02) return;
      ob.boxes.forEach(function (bx) {
        var col = bx.t === "pylon" ? C.pylon : bx.t === "gate" ? 0x5e6670 : C.cat;
        self.trenchBox(g, bx.x0, bx.x1, bx.y0, bx.y1, zf, zk, col, a);
        var zz = Math.max(ZNEAR, zf);
        if (bx.t === "cat") {
          /* a yellow edge, small windows on the front, rails on top */
          qFront(B, zz, bx.x0, bx.x1, bx.y1 - 0.04, bx.y1); fillQ(g, fogC(0xe8b030, zz), a);
          qFront(B, zz, bx.x0, bx.x1, bx.y0, bx.y0 + 0.03); fillQ(g, fogC(0x2a2f36, zz), a);
          for (var wx = -0.85; wx < 0.9; wx += 0.34) { qFront(B, zz, wx, wx + 0.12, bx.y0 + (bx.y1 - bx.y0) * 0.35, bx.y0 + (bx.y1 - bx.y0) * 0.6); fillQ(g, fogC(0x1e2329, zz), a); }
          for (var rx = -0.9; rx <= 0.91; rx += 0.3) {
            pj(B, rx, bx.y1, zz + 0.05, P1); pj(B, rx, bx.y1 + 0.1, zz + 0.05, P2);
            g.lineStyle(Math.max(1, 0.018 * B.F / zz), fogC(0xb0b8c2, zz), a); g.lineBetween(P1.x, P1.y, P2.x, P2.y);
          }
          pj(B, -1, bx.y1 + 0.1, zz + 0.05, P1); pj(B, 1, bx.y1 + 0.1, zz + 0.05, P2); g.lineBetween(P1.x, P1.y, P2.x, P2.y);
        } else if (bx.t === "gate") {
          qFront(B, zz, bx.x0, bx.x1, bx.y0, bx.y1);
          g.lineStyle(Math.max(1, 0.02 * B.F / zz), fogC(0xe8b030, zz), a); g.strokePoints(QP, true);
        } else {
          for (var yy = FLOOR + 0.25; yy < RIM; yy += 0.45) { qFront(B, zz, bx.x0 + 0.06, bx.x1 - 0.06, yy, yy + 0.05); fillQ(g, fogC(0x2a2f36, zz), a); }
        }
        /* a blinking red light */
        var lc = pj(B, (Math.max(bx.x0, -0.9) + Math.min(bx.x1, 0.9)) / 2, bx.t === "cat" ? bx.y0 + 0.02 : bx.y1 - 0.1, zz, P1);
        if (Math.sin(B.t * 7 + ob.ph) > 0) { gl.fillStyle(0xff3020, 0.9 * a * (1 - fogK(zz))); gl.fillCircle(lc.x, lc.y, Math.max(1.5, 0.035 * B.F / zz)); }
      });
    },
    trenchDrawBolt: function (b, z) {
      var B = this.tr, g = b.z < ZS ? B.nG : B.wG, gl = B.gG;
      /* once past the ship it streaks out of sight: fade it fast so it never fills the screen */
      var fa = clamp((z - ZS * 0.55) / (ZS * 0.45), 0, 1);
      if (z < ZNEAR || fa <= 0.02) return;
      var len = 1.6, tz = b.z + len, sp = Math.sqrt(b.vx * b.vx + b.vy * b.vy + b.vz * b.vz);
      pj(B, b.x, b.y, b.z, P1); pj(B, b.x - b.vx / sp * len, b.y - b.vy / sp * len, tz, P2);
      var w = Math.max(2, 0.06 * B.F / Math.max(z, ZS));
      gl.lineStyle(w * 3.4, C.bolt, 0.45 * fa); gl.lineBetween(P1.x, P1.y, P2.x, P2.y);
      g.lineStyle(w * 1.4, C.bolt, fa); g.lineBetween(P1.x, P1.y, P2.x, P2.y);
      g.lineStyle(w * 0.6, C.boltCore, fa); g.lineBetween(P1.x, P1.y, P2.x, P2.y);
    },
    trenchDrawTorp: function (t, z) {
      var B = this.tr, g = B.wG, gl = B.gG;
      if (z < ZNEAR) return;
      var c = pj(B, t.x, t.y, z, P1), r = Math.max(2, 0.07 * B.F / z);
      var tail = pj(B, t.x0 + (t.x - t.x0) * 0.6, t.y0 + (t.y - t.y0) * 0.5, ZS + (z - ZS) * 0.45, P2);
      gl.lineStyle(r * 1.2, C.torp, 0.35); gl.lineBetween(tail.x, tail.y, c.x, c.y);
      gl.fillStyle(C.torp, 0.5); gl.fillCircle(c.x, c.y, r * 2.2);
      g.fillStyle(0xffffff, 1); g.fillCircle(c.x, c.y, r * 0.8);
    },
    trenchDrawBlast: function (b, z) {
      var B = this.tr, gl = B.gG, g = z < ZS ? B.nG : B.wG;
      if (z < ZNEAR + 0.1) return;
      var life = b.big ? 1.3 : 0.6, u = b.t / life, c = pj(B, b.x, FLOOR, z, P1), s = B.F / z;
      if (b.big) {
        /* a column of light out of the port */
        var top = pj(B, b.x, FLOOR + 0.4 + 2.2 * Math.min(1, u * 2), z, P2), w = 0.32 * s * (1 - u * 0.6);
        gl.lineStyle(w * 2.2, b.col, 0.35 * (1 - u)); gl.lineBetween(c.x, c.y, top.x, top.y);
        gl.lineStyle(w, 0xfff2d0, 0.8 * (1 - u)); gl.lineBetween(c.x, c.y, top.x, top.y);
        gl.fillStyle(b.col, 0.6 * (1 - u)); gl.fillCircle(c.x, c.y, 0.5 * s * (0.4 + u));
      } else {
        gl.fillStyle(b.col, 0.7 * (1 - u)); gl.fillCircle(c.x, c.y - 0.1 * s, 0.25 * s * (0.4 + u));
        g.fillStyle(0xffffff, 0.6 * (1 - u)); g.fillCircle(c.x, c.y - 0.1 * s, 0.08 * s * (1 - u));
      }
    },
    trenchDrawShip: function () {
      var B = this.tr, sh = B.ship, sp = pj(B, sh.x, sh.y, ZS, P1);
      var bank = clamp(-sh.vx / STEER_V, -1, 1) * 0.32, pitch = clamp(sh.vy / STEER_V, -1, 1);
      B.shipImg.setPosition(sp.x, sp.y).setRotation(bank).setScale(B.shipS, B.shipS * (1 - 0.08 * Math.abs(pitch)));
      this.blink(B.shipImg);
      this.player.setPosition(sp.x, sp.y - 30 * B.k);
      var cs = Math.cos(bank), sn = Math.sin(bank), sc = B.shipS;
      B.flames.forEach(function (f, i) {
        var dx = (i ? 14 : -14) * sc, dy = (72 - SHIP_TH / 2) * sc;
        f.setPosition(sp.x + dx * cs - dy * sn, sp.y + dx * sn + dy * cs).setAlpha((0.75 + 0.25 * Math.sin(B.t * 40 + i * 2)) * B.shipImg.alpha)
          .setScale(sc * (0.62 + 0.1 * Math.sin(B.t * 31 + i)));
      });
    },
    /* the sight, the warnings, the lock-on rings and the targeting computer */
    trenchDrawHud: function () {
      var B = this.tr, P = B.P, g = B.hG, k = B.k, sh = B.ship, W = this.W, H = this.H, i, self = this;
      var playing = !this._between && !this._finishing;
      /* the sight on the floor: where a port must be when the torpedo leaves */
      var lockP = null;
      B.ports.forEach(function (p) { var z = p.s - B.dist; if (Math.abs(z - SIGHT) <= P.tolZ && Math.abs(p.x - sh.x) <= P.tolX && p.state === "live") lockP = p; });
      B.locked = lockP;
      var lit = lockP && P.lockLight, col = lit ? C.green : C.amber, a0 = playing ? 0.9 : 0.35;
      var xa = sh.x - P.tolX, xb = sh.x + P.tolX, za = SIGHT - P.tolZ, zb = SIGHT + P.tolZ;
      var cs = [pj(B, xa, FLOOR, za, { x: 0, y: 0 }), pj(B, xb, FLOOR, za, { x: 0, y: 0 }), pj(B, xb, FLOOR, zb, { x: 0, y: 0 }), pj(B, xa, FLOOR, zb, { x: 0, y: 0 })];
      g.lineStyle(Math.max(2, 3 * k), 0x000000, 0.45 * a0);
      for (i = 0; i < 4; i++) this.trenchBracket(g, cs[i], cs[(i + 1) % 4], cs[(i + 3) % 4]);
      g.lineStyle(Math.max(1.5, 2.2 * k), col, a0);
      for (i = 0; i < 4; i++) this.trenchBracket(g, cs[i], cs[(i + 1) % 4], cs[(i + 3) % 4]);
      var mid = pj(B, sh.x, FLOOR, SIGHT, P1);
      g.fillStyle(col, a0); g.fillCircle(mid.x, mid.y, 2.2 * k);
      /* the torpedo's path, dotted, from the ship down to the sight */
      for (i = 1; i < 9; i++) {
        var u = i / 9, z = ZS + (SIGHT - ZS) * u, y = sh.y + (FLOOR - sh.y) * u * u;
        pj(B, sh.x, y, z, P2); g.fillStyle(col, 0.5 * a0 * (1 - u * 0.5)); g.fillCircle(P2.x, P2.y, 1.6 * k);
      }
      /* the red frame: where the next catwalk, pylon or gate will pass (only the next one, so the view stays clear);
         a gate shows its window in green instead: fly through there */
      var wi = 0, nextOb = null, nt = 1e9;
      B.obs.forEach(function (ob) {
        var tt = (ob.s - B.dist - ZS) / P.speed;
        if (tt > 0 && tt <= WARN_S && !ob.hit && tt < nt) { nt = tt; nextOb = ob; }
      });
      if (nextOb) {
        var ob = nextOb, al = 0.3 + 0.6 * (1 - nt / WARN_S), top = 1e9, lx = 0, gate = ob.kind === "gate";
        ob.boxes.forEach(function (bx) {
          var x0 = Math.max(-1, bx.x0), x1 = Math.min(1, bx.x1), y0 = Math.max(FLOOR, bx.y0), y1 = Math.min(RIM, bx.y1);
          qFront(B, ZS, x0, x1, y0, y1);
          g.fillStyle(C.red, (gate ? 0.1 : 0.13) * al); g.fillPoints(QP, true);
          if (!gate) { g.lineStyle(Math.max(1.5, 2.2 * k), C.red, al); g.strokePoints(QP, true); }
          if (QP[2].y < top) { top = QP[2].y; lx = (QP[2].x + QP[3].x) / 2; }
        });
        if (gate) {
          var wb = ob.boxes;
          qFront(B, ZS, wb[2].x1, wb[3].x0, wb[1].y1, wb[0].y0);
          g.lineStyle(Math.max(2, 3 * k), C.green, al); g.strokePoints(QP, true);
          top = QP[2].y; lx = (QP[2].x + QP[3].x) / 2;
        }
        B.warnTx[wi].setText(gate ? "GATE: FLY THROUGH" : self.trenchObsLabel(ob)).setColor(gate ? "#9affb8" : "#ff8a7a")
          .setPosition(clamp(lx, 90, W - 90), Math.max(16, top - 4)).setAlpha(al).setVisible(true);
        wi++;
      }
      for (; wi < B.warnTx.length; wi++) B.warnTx[wi].setVisible(false);
      /* where each bolt in the air will cross the ship's plane */
      B.bolts.forEach(function (b) {
        if (b.crossed) return;
        var c = pj(B, b.tx, b.ty, ZS, P1), u = clamp(1 - (b.z - ZS) / 20, 0, 1), r = (SHIP_HH + P.boltR) * B.F / ZS;
        g.lineStyle(Math.max(1.5, 2 * k), C.red, 0.35 + 0.5 * u); g.strokeCircle(c.x, c.y, r * (1.6 - 0.5 * u));
        g.lineBetween(c.x - r * 0.5, c.y, c.x + r * 0.5, c.y); g.lineBetween(c.x, c.y - r * 0.5, c.x, c.y + r * 0.5);
      });
      /* the lock-on rings */
      var tailTop = null;
      B.tails.forEach(function (tl) {
        var c = pj(B, tl.x, tl.y, ZS, P1), r = self.trenchTailR(tl) * B.F / ZS, u = clamp(tl.t / P.lockMs, 0, 1), rot = B.t * 2.5;
        g.lineStyle(Math.max(2, 3 * k), C.red, 0.55 + 0.4 * u); g.strokeCircle(c.x, c.y, r);
        for (var q = 0; q < 4; q++) {
          var an = rot + q * Math.PI / 2;
          g.lineBetween(c.x + Math.cos(an) * r * 0.75, c.y + Math.sin(an) * r * 0.75, c.x + Math.cos(an) * r * 1.15, c.y + Math.sin(an) * r * 1.15);
        }
        g.fillStyle(C.red, 0.08 + 0.12 * u); g.fillCircle(c.x, c.y, r);
        if (tailTop == null || c.y - r < tailTop.y) tailTop = { x: c.x, y: c.y - r };
      });
      if (tailTop) B.tailTx.setPosition(clamp(tailTop.x, 80, W - 80), Math.max(18, tailTop.y - 6)).setVisible(true).setAlpha(0.6 + 0.4 * Math.sin(B.t * 10));
      else B.tailTx.setVisible(false);
      /* the shots from the fighter behind: streaks from the bottom of the screen */
      B.blasts.forEach(function (b) {
        if (!b.tail) return;
        var c = pj(B, b.x, b.y, ZS, P1), u = b.t / 0.6;
        g.lineStyle(Math.max(2, 4 * k), C.bolt, 0.9 * (1 - u));
        g.lineBetween(c.x - 120 * k * (1 - u), H + 10, c.x, c.y); g.lineBetween(c.x + 120 * k * (1 - u), H + 10, c.x, c.y);
      });
      this.trenchDrawComputer();
    },
    /* one corner of the sight: two short strokes toward the corners beside it */
    trenchBracket: function (g, c, n1, n2) {
      g.lineBetween(c.x, c.y, c.x + (n1.x - c.x) * 0.3, c.y + (n1.y - c.y) * 0.3);
      g.lineBetween(c.x, c.y, c.x + (n2.x - c.x) * 0.3, c.y + (n2.y - c.y) * 0.3);
    },
    /* the targeting computer: the ports coming down a range scale toward the sight, and which way to steer */
    trenchDrawComputer: function () {
      var B = this.tr, P = B.P, g = B.hG, k = B.k, T = B.tc, sh = B.ship, self = this;
      g.fillStyle(0x0a0702, 0.82); g.fillRoundedRect(T.x, T.y, T.w, T.h, 6);
      g.lineStyle(2, C.amber, 0.9); g.strokeRoundedRect(T.x, T.y, T.w, T.h, 6);
      var y = T.y + T.h * 0.68, xL = T.x + 14, xR = T.x + T.w - 14, xs = xL + (xR - xL) * 0.16, ppu = (xR - xs) / (ZFAR - SIGHT);
      /* the scale: ticks fading into the distance, the sight's window */
      g.lineStyle(1.5, C.amber, 0.6); g.lineBetween(xL, y, xR, y);
      for (var r = 0; r <= ZFAR - SIGHT; r += 5) { var tx = xs + r * ppu; g.lineBetween(tx, y - 3, tx, y + 3); }
      var lit = B.locked && P.lockLight;
      g.fillStyle(lit ? C.green : C.amber, lit ? 0.35 : 0.18); g.fillRect(xs - P.tolZ * ppu, y - T.h * 0.26, P.tolZ * 2 * ppu, T.h * 0.42);
      g.lineStyle(2, lit ? C.green : C.amber, 1); g.strokeRect(xs - P.tolZ * ppu, y - T.h * 0.26, P.tolZ * 2 * ppu, T.h * 0.42);
      /* the ports as chips */
      var next = null, ci = 0;
      B.ports.slice().sort(function (a, b) { return a.s - b.s; }).forEach(function (p) {
        var z = p.s - B.dist, x = xs + (z - SIGHT) * ppu;
        if (x < xL - 4 || x > xR + 4 || ci >= B.chips.length) return;
        if (!next && p.state === "live" && z > SIGHT - P.tolZ) next = p;
        var ch = B.chips[ci++], txt = p.state === "dead" ? "✕" : p.state === "found" ? "✓" : p.letter;
        ch.setText(txt).setPosition(x, y - T.h * 0.05).setVisible(true).setColor(p.state === "dead" ? "#ff8a7a" : p.state === "found" ? "#6dff9a" : (lit && p === B.locked ? "#6dff9a" : "#ffd27a"));
      });
      for (; ci < B.chips.length; ci++) B.chips[ci].setVisible(false);
      /* what to do */
      var msg, colr = "#ffb43c";
      if (this._between || this._finishing) msg = "GOOD HIT";
      else if (lit) { msg = "IN RANGE · FIRE!"; colr = "#6dff9a"; }
      else if (next) {
        var dx = next.x - sh.x;
        msg = Math.abs(dx) > P.tolX * 0.8 ? (dx < 0 ? "◀ STEER LEFT · " : "STEER RIGHT ▶ · ") + next.letter : "LINED UP · " + next.letter;
      } else msg = "SCANNING…";
      if (B.tcStatus.text !== msg) B.tcStatus.setText(msg);
      B.tcStatus.setColor(colr);
    },

    /* a right answer: the burst in the port; bolts, rings and charging turrets stand down until the next question */
    clear_trench: function () {
      var B = this.tr;
      B.bolts = []; B.tails = []; B.charge = null;
      B.torps = [];
      if (B.lastPort) { B.lastPort.state = "found"; this.trenchPaintPort(B.lastPort); }
    }
  });
})();
