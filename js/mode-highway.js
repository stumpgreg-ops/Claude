/* SOL Labyrinth v5.21 — the Lit and Film mode "highway": Night Highway (Detour, 1945; genre NOIR, strand DETOUR).
 *
 * Film noir on a desert two-lane at night, in black and white. The view is from behind a 1940s convertible,
 * a pseudo-3D road running to a dark horizon of mesas, telephone poles and a moon behind the clouds. The only
 * light on the ground is the car's headlights: a soft cone that fades out at the edge of its reach, and past it
 * the road is black. Rain falls the whole way (it shows white in the beams), fog banks roll in (from 21) and cut
 * the beams short.
 *
 * The letters are hitchhikers on the shoulders, each with a cardboard sign. Steer onto the shoulder beside the
 * one with the right letter to pick them up (answerPick); a wrong passenger costs a life and never thumbs again.
 * Strangers you pass come round again. Oncoming trucks thunder down the left lane (their headlights show long
 * before they do); a crash costs a life. From 11 DETOUR barricades block your lane (a DETOUR AHEAD sign warns,
 * flares burn on them); from 31 a hitchhiker gets in only if you brake (the speedometer's white mark); from 41 the
 * wet road makes the car slide; from 51 trucks run in pairs; from 61 stalled cars with no lights sit on the
 * shoulders; from 71 the headlights flicker out; from 81 a truck passing another comes at you in your lane.
 * highwayParams sets one difficulty curve for all of it.
 *
 * Controls: ◀ ▶ / A D / the pad steer; Space, BRAKE, ▼ or a mouse button brake; ▲ speeds up; moving the mouse
 * (or a finger) steers toward it. Registered with SolModes.extend (js/modes.js); the methods below are copied
 * onto ModeScene, so `this` is the mode scene. Every texture is drawn once (canvasTex) under an "md-hw-" key;
 * the canvas is turned black-and-white with the camera's colour matrix where WebGL allows (everything drawn
 * here is grey already). The text speaks in a hardboiled first person, never quoting the film.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, shuffle = L.shuffle, canvasTex = L.canvasTex;

  var TAU = Math.PI * 2;
  /* the world: one unit is a lane's width; the road runs from -1 (left edge) to 1 (right edge); the car's lane is
     +0.5, the oncoming lane -0.5; the gravel shoulders reach 1.55 and the hitchhikers stand at 1.32 */
  var Z_CAR = 2.2, Z_REAR = 1.85, Z_FAR = 46, LANE = 0.5, SHOULDER = 1.32, X_MAX = 1.52, ROAD = 1, GRAVEL = 1.58;
  var CAR_W = 0.62, CAR_HW = 0.29, TRUCK_W = 0.78, TRUCK_HW = 0.35, BAR_W = 0.8, BAR_HW = 0.38, STALL_HW = 0.29;
  var HIKER_H = 0.94, SIGN_W = 0.6, SIGN_DX = 0.31, SIGN_UP = 0.53;
  var STEER = 2.0, BRAKE_K = 0.42, GAS_K = 1.25;
  var BEAM0 = -0.19, BEAM1 = 0.21, BEAM_MIN = 0.3, BEAM_SOFT = 0.55;   /* the beams' half-width at depth z: BEAM0 + BEAM1 z (a fan from the car) */
  var POLE = 7.5, DASH = 2.6, DASH_LEN = 1.1, JOINT = 1.8;
  var TYPE = "'Courier New', Courier, monospace", SERIF = "Georgia, 'Times New Roman', serif";
  var BLEND_ADD = 1;

  /* the narrator: original lines in a hardboiled voice */
  var VOICE = {
    start: ["Night. The desert. Two lanes of blacktop and nowhere to hide.",
      "Out here the road never ends. It just runs out of light.",
      "Everybody with a sign has a story. Most of them end badly.",
      "I didn't pick this road. The road picked me.",
      "Fate had its thumb out tonight. I'd better choose right.",
      "Somewhere ahead was Los Angeles. Somewhere ahead was trouble.",
      "The headlights showed me just enough road to get into trouble.",
      "Rain, the white line, and a piano tune I couldn't shake.",
      "Every mile sign was counting down to something.",
      "The trucks don't stop for anybody. Neither does fate."],
    right: ["The right stranger, for once. Fate looked the other way.",
      "For a change, luck rode shotgun.",
      "That one checked out. The road didn't care, but I did."],
    wrong: ["Wrong stranger. I knew it the minute the door shut.",
      "Fate had me by the collar again.",
      "Bad pick. On a road like this, you only get so many."],
    hit: ["Close. Too close. The night wasn't done with me.",
      "The truck didn't even slow down.",
      "Whatever was out there, it had my number."],
    fog: ["The fog came in like a bad memory."],
    flicker: ["The lights died. For a second, so did I."]
  };

  /* ── difficulty: one curve for every level 1-100, each level harder than the one before ── */
  function highwayParams(n) {
    n = clamp(Math.floor(Number(n) || 1), 1, 100);
    return {
      speed: 3.3 + n * 0.026,                                     /* cruising speed, lanes a second: 3.33 at 1, 5.9 at 100 */
      reach: 19 - n * 0.055,                                      /* how far the headlights reach: 18.9 at 1, 13.5 at 100 */
      gap: 12.5 - n * 0.04,                                       /* road between one hitchhiker and the next: 12.5 → 8.5 */
      pickTol: 0.56 - n * 0.0016,                                 /* how close beside a hitchhiker the car has to pull up */
      truckEvery: 11.5 - n * 0.092,                               /* seconds between oncoming trucks: 11.4 → 2.3 */
      truckSpd: 2.2 + n * 0.03,                                   /* a truck's own speed */
      hazGap: Math.max(10, 26 - n * 0.16),                        /* road between hazards (barricades, stalls, fog) */
      barrier: n >= 11 ? Math.min(0.75, 0.25 + (n - 11) * 0.0056) : 0,   /* a DETOUR barricade in your lane */
      fogP: n >= 21 ? Math.min(0.85, 0.35 + (n - 21) * 0.0063) : 0,      /* a fog bank */
      fog: n >= 21 ? Math.min(0.55, 0.25 + (n - 21) * 0.0038) : 0,       /* how much of the beams' reach a fog bank takes */
      pickMax: n >= 31 ? Math.max(0.6, 0.86 - (n - 31) * 0.0037) : 2,    /* share of cruising speed a hitchhiker will get in at */
      grip: n >= 41 ? Math.max(3, 9 - (n - 41) * 0.1) : 40,              /* how fast the car takes the steering (low: it slides) */
      rain: 0.35 + n * 0.0065,                                    /* how hard it rains */
      pair: n >= 51 ? Math.min(0.7, 0.3 + (n - 51) * 0.008) : 0,         /* a second truck nose to tail */
      stall: n >= 61 ? Math.min(0.6, 0.25 + (n - 61) * 0.009) : 0,       /* a stalled car with no lights on a shoulder */
      flicker: n >= 71 ? 0.05 + (n - 71) * 0.0035 : 0,                   /* chance a second that the headlights blink out */
      pass: n >= 81 ? Math.min(0.6, 0.22 + (n - 81) * 0.019) : 0,        /* a truck passing another, in your lane */
      fair: n < 21 ? 1 : 0                                        /* early on, no truck arrives with a left-side hitchhiker */
    };
  }

  /* ── art, drawn once ── */
  function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
  function ell(c, x, y, rx, ry) { c.beginPath(); c.ellipse(x, y, Math.max(0.1, rx), Math.max(0.1, ry), 0, 0, TAU); }

  /* the convertible from behind, top up, a fedora in the rear window. 240x150, wheels on the bottom edge */
  function drawCarRear(stalled) {
    return function (c, w, h) {
      var body = stalled ? "#232323" : "#1b1b1d", g;
      c.fillStyle = "rgba(0,0,0,0.7)"; ell(c, w / 2, h - 5, w * 0.5, 7); c.fill();
      c.fillStyle = "#070707"; rr(c, 20, h - 38, 34, 36, 7); c.fill(); rr(c, w - 54, h - 38, 34, 36, 7); c.fill();
      /* the soft top and the rear window */
      g = c.createLinearGradient(0, 6, 0, 66);
      g.addColorStop(0, stalled ? "#2a2a2a" : "#3a3a3c"); g.addColorStop(1, "#141414");
      c.fillStyle = g; c.beginPath(); c.moveTo(52, 66); c.bezierCurveTo(56, 18, 80, 8, w / 2, 8); c.bezierCurveTo(w - 80, 8, w - 56, 18, w - 52, 66); c.closePath(); c.fill();
      c.strokeStyle = "rgba(255,255,255,0.12)"; c.lineWidth = 1.5;
      [0.32, 0.5, 0.68].forEach(function (f) { c.beginPath(); c.moveTo(w * f, 10); c.lineTo(w * f + (f - 0.5) * 40, 64); c.stroke(); });
      if (!stalled) {
        g = c.createLinearGradient(0, 22, 0, 52);
        g.addColorStop(0, "#a8a8a8"); g.addColorStop(1, "#6a6a6a");
        c.fillStyle = g; rr(c, w / 2 - 34, 24, 68, 26, 10); c.fill();
        /* the driver: a fedora and shoulders against the glow of his own headlights */
        c.fillStyle = "#0b0b0b"; c.beginPath(); c.ellipse(w / 2 - 6, 44, 20, 9, 0, Math.PI, 0); c.fill();
        c.fillRect(w / 2 - 26, 43, 40, 8);
        c.beginPath(); c.arc(w / 2 - 6, 38, 6.5, 0, TAU); c.fill();
        c.beginPath(); c.ellipse(w / 2 - 6, 32.5, 12, 2.6, 0, 0, TAU); c.fill();
        c.fillRect(w / 2 - 12, 26, 12, 7);
      } else { c.fillStyle = "#4a4a4a"; rr(c, w / 2 - 34, 24, 68, 26, 10); c.fill(); }
      /* the body: round rear fenders and the trunk */
      g = c.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, body); g.addColorStop(0.18, stalled ? "#3a3a3a" : "#4c4c50"); g.addColorStop(0.5, body); g.addColorStop(0.82, stalled ? "#3a3a3a" : "#4c4c50"); g.addColorStop(1, body);
      c.fillStyle = g; c.beginPath();
      c.moveTo(8, h - 28); c.bezierCurveTo(2, 96, 12, 66, 44, 62); c.lineTo(w - 44, 62); c.bezierCurveTo(w - 12, 66, w - 2, 96, w - 8, h - 28); c.closePath(); c.fill();
      c.fillStyle = body; c.beginPath(); c.moveTo(46, 66); c.bezierCurveTo(60, 58, w - 60, 58, w - 46, 66); c.lineTo(w - 52, h - 30); c.lineTo(52, h - 30); c.closePath(); c.fill();
      c.strokeStyle = stalled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.28)"; c.lineWidth = 2;
      c.beginPath(); c.moveTo(50, 70); c.bezierCurveTo(70, 63, w - 70, 63, w - 50, 70); c.stroke();
      c.beginPath(); c.moveTo(w / 2, 66); c.lineTo(w / 2, h - 46); c.stroke();
      /* tail lights, on the fenders */
      [32, w - 32].forEach(function (x) {
        c.fillStyle = "#0a0a0a"; ell(c, x, 88, 7.5, 12); c.fill();
        c.fillStyle = stalled ? "#3c3c3c" : "#e8e8e8"; ell(c, x, 88, 5, 9.5); c.fill();
      });
      /* the chrome bumper and the plate */
      g = c.createLinearGradient(0, h - 40, 0, h - 26);
      g.addColorStop(0, "#f0f0f0"); g.addColorStop(0.5, "#8a8a8a"); g.addColorStop(1, "#cfcfcf");
      c.fillStyle = g; rr(c, 6, h - 40, w - 12, 13, 6); c.fill();
      if (stalled) { c.fillStyle = "rgba(0,0,0,0.45)"; rr(c, 6, h - 40, w - 12, 13, 6); c.fill(); }
      c.fillStyle = stalled ? "#5a5a5a" : "#d8d8d8"; c.fillRect(w / 2 - 22, h - 60, 44, 18);
      c.strokeStyle = "#111"; c.lineWidth = 1.5; c.strokeRect(w / 2 - 22, h - 60, 44, 18);
      c.fillStyle = "#111"; c.font = "bold 10px " + SERIF; c.textAlign = "center"; c.textBaseline = "middle";
      c.fillText(stalled ? "-- --" : "CALIF 45", w / 2, h - 51);
    };
  }
  /* an oncoming truck, from the front: the trailer's box behind, the cab, a tall grille, two round headlights. 220x300 */
  var TRUCK_TW = 220, TRUCK_TH = 300, TRUCK_LIGHTS = [[50, 222], [170, 222]];
  function drawTruck(c, w, h) {
    var g, x;
    c.fillStyle = "rgba(0,0,0,0.75)"; ell(c, w / 2, h - 5, w * 0.5, 9); c.fill();
    /* the trailer's box over the cab, with its clearance lamps */
    g = c.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, "#151515"); g.addColorStop(0.5, "#2a2a2a"); g.addColorStop(1, "#121212");
    c.fillStyle = g; c.fillRect(4, 2, w - 8, 70);
    c.strokeStyle = "rgba(255,255,255,0.08)"; c.lineWidth = 2; for (x = 20; x < w - 8; x += 26) { c.beginPath(); c.moveTo(x, 6); c.lineTo(x, 68); c.stroke(); }
    c.fillStyle = "#f0f0f0"; [14, w - 14].forEach(function (xx) { ell(c, xx, 10, 5, 4); c.fill(); });
    [70, 90, 110, 130, 150].forEach(function (xx) { ell(c, xx, 9, 3.5, 3); c.fill(); });
    /* the wheels */
    c.fillStyle = "#080808"; rr(c, 12, h - 56, 40, 54, 7); c.fill(); rr(c, w - 52, h - 56, 40, 54, 7); c.fill();
    /* the cab and its windshield */
    g = c.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, "#1c1c1c"); g.addColorStop(0.3, "#3c3c3c"); g.addColorStop(0.7, "#2e2e2e"); g.addColorStop(1, "#161616");
    c.fillStyle = g; rr(c, 28, 60, w - 56, 108, 16); c.fill();
    c.fillStyle = "#5c5c5e"; rr(c, 40, 76, 66, 50, 6); c.fill(); rr(c, w - 106, 76, 66, 50, 6); c.fill();
    c.fillStyle = "rgba(255,255,255,0.18)"; c.beginPath(); c.moveTo(46, 122); c.lineTo(80, 80); c.lineTo(94, 80); c.lineTo(60, 122); c.closePath(); c.fill();
    c.fillStyle = "#0e0e0e"; c.beginPath(); c.arc(76, 110, 9, Math.PI, 0); c.fill(); c.fillRect(64, 110, 24, 16);   /* the driver */
    c.fillStyle = "#e8e8e8"; [78, 96, 110, 124, 142].forEach(function (xx) { ell(c, xx, 67, 3.5, 3); c.fill(); });
    /* the fenders and the hood */
    c.fillStyle = "#232323"; c.beginPath(); c.moveTo(4, h - 54); c.bezierCurveTo(2, 196, 26, 180, 66, 178); c.lineTo(66, h - 54); c.closePath(); c.fill();
    c.beginPath(); c.moveTo(w - 4, h - 54); c.bezierCurveTo(w - 2, 196, w - 26, 180, w - 66, 178); c.lineTo(w - 66, h - 54); c.closePath(); c.fill();
    c.fillStyle = "#2c2c2c"; c.fillRect(60, 166, w - 120, h - 216);
    /* the grille: tall chrome bars */
    g = c.createLinearGradient(0, 172, 0, h - 60);
    g.addColorStop(0, "#e0e0e0"); g.addColorStop(1, "#727272");
    c.fillStyle = "#0c0c0c"; rr(c, 76, 172, w - 152, h - 232, 8); c.fill();
    c.fillStyle = g; for (x = 80; x < w - 82; x += 8) c.fillRect(x, 176, 4, h - 240);
    /* the headlights (they glow on their own, drawn by the scene) and the bumper */
    TRUCK_LIGHTS.forEach(function (p) {
      c.fillStyle = "#9a9a9a"; ell(c, p[0], p[1], 18, 18); c.fill();
      c.fillStyle = "#ffffff"; ell(c, p[0], p[1], 14, 14); c.fill();
    });
    g = c.createLinearGradient(0, h - 64, 0, h - 46);
    g.addColorStop(0, "#f0f0f0"); g.addColorStop(0.5, "#8a8a8a"); g.addColorStop(1, "#c8c8c8");
    c.fillStyle = g; rr(c, 2, h - 66, w - 4, 18, 6); c.fill();
  }
  /* a hitchhiker, 130x210, feet on the bottom edge; the arm toward the road holds the sign (drawn by the scene).
     dir "r": the sign is held out to the right (a hitchhiker on the left shoulder); "l" mirrored. */
  var HIKER_FEET = 48, HIKER_HAND = [118, 92];
  function drawHiker(v, dir) {
    return function (c, w, h) {
      if (dir === "l") { c.translate(w, 0); c.scale(-1, 1); }
      var fx = HIKER_FEET, coat = ["#b9b4aa", "#8e8a84", "#2e2e32", "#6e6a62"][v], dark = "#121212";
      c.lineCap = "round"; c.lineJoin = "round";
      c.fillStyle = "rgba(0,0,0,0.6)"; ell(c, fx, h - 3, 30, 5); c.fill();
      /* luggage: a suitcase, a handbag, a sea bag */
      if (v === 0 || v === 3) { c.fillStyle = "#3a3632"; rr(c, fx - 44, h - 40, 26, 36, 3); c.fill(); c.strokeStyle = "#151515"; c.lineWidth = 2; c.strokeRect(fx - 44, h - 40, 26, 36); c.beginPath(); c.moveTo(fx - 36, h - 40); c.lineTo(fx - 36, h - 46); c.lineTo(fx - 26, h - 46); c.lineTo(fx - 26, h - 40); c.stroke(); }
      if (v === 2) { c.fillStyle = "#d0ccc2"; ell(c, fx - 30, h - 16, 16, 13); c.fill(); c.strokeStyle = "#333"; c.lineWidth = 2; c.beginPath(); c.moveTo(fx - 30, h - 29); c.lineTo(fx - 26, h - 36); c.stroke(); }
      /* legs and shoes */
      c.strokeStyle = v === 1 ? "#5a5a5a" : dark; c.lineWidth = v === 1 ? 6 : 11;
      c.beginPath(); c.moveTo(fx - 8, 148); c.lineTo(fx - 10, h - 8); c.moveTo(fx + 8, 148); c.lineTo(fx + 11, h - 8); c.stroke();
      c.fillStyle = "#050505"; ell(c, fx - 13, h - 6, 9, 4.5); c.fill(); ell(c, fx + 14, h - 6, 9, 4.5); c.fill();
      /* the coat: a belted trench coat, a long woman's coat, a pea coat, an old overcoat */
      c.fillStyle = coat; c.beginPath();
      var hem = v === 2 ? 132 : v === 1 ? 166 : 158;
      c.moveTo(fx - 17, 66); c.lineTo(fx + 17, 66); c.lineTo(fx + 21, 104); c.lineTo(fx + 27, hem); c.lineTo(fx - 27, hem); c.lineTo(fx - 21, 104); c.closePath(); c.fill();
      c.strokeStyle = "rgba(0,0,0,0.55)"; c.lineWidth = 1.6;
      c.beginPath(); c.moveTo(fx, 70); c.lineTo(fx + 3, hem); c.stroke();
      c.beginPath(); c.moveTo(fx - 12, 66); c.lineTo(fx, 88); c.lineTo(fx + 12, 66); c.stroke();   /* lapels */
      if (v === 0 || v === 1) { c.fillStyle = "rgba(0,0,0,0.5)"; c.fillRect(fx - 21, 104, 42, 6); }   /* the belt */
      if (v === 2) { c.fillStyle = "#cfcfcf"; [80, 94, 108].forEach(function (y) { c.beginPath(); c.arc(fx - 6, y, 2, 0, TAU); c.arc(fx + 8, y, 2, 0, TAU); c.fill(); }); }
      /* the free arm hangs; the road-side arm reaches out to the sign */
      c.strokeStyle = coat; c.lineWidth = 10;
      c.beginPath(); c.moveTo(fx - 15, 72); c.lineTo(fx - 22, 104); c.lineTo(fx - 20, 128); c.stroke();
      c.beginPath(); c.moveTo(fx + 15, 72); c.lineTo(fx + 42, 86); c.lineTo(HIKER_HAND[0] - 6, HIKER_HAND[1]); c.stroke();
      c.fillStyle = "#c8c4bc"; c.beginPath(); c.arc(fx - 20, 131, 5, 0, TAU); c.fill(); c.beginPath(); c.arc(HIKER_HAND[0] - 4, HIKER_HAND[1], 5.5, 0, TAU); c.fill();
      /* the head and the hat */
      c.fillStyle = "#cfcac0"; c.fillRect(fx - 4, 52, 8, 14);
      c.beginPath(); c.arc(fx, 44, 12, 0, TAU); c.fill();
      c.fillStyle = "rgba(0,0,0,0.35)"; c.beginPath(); c.arc(fx - 3, 46, 11, Math.PI * 0.5, Math.PI * 1.5); c.fill();
      c.fillStyle = dark;
      if (v === 0) { ell(c, fx, 35, 22, 5); c.fill(); rr(c, fx - 12, 18, 24, 18, 6); c.fill(); c.fillStyle = "#4a4a4a"; c.fillRect(fx - 12, 30, 24, 4); }
      else if (v === 1) { c.fillStyle = "#e0dcd4"; c.beginPath(); c.moveTo(fx - 15, 50); c.quadraticCurveTo(fx - 18, 26, fx, 28); c.quadraticCurveTo(fx + 18, 26, fx + 15, 50); c.lineTo(fx + 10, 40); c.quadraticCurveTo(fx, 34, fx - 10, 40); c.closePath(); c.fill(); c.fillStyle = "#1a1a1a"; c.beginPath(); c.moveTo(fx - 14, 50); c.quadraticCurveTo(fx - 22, 64, fx - 12, 68); c.lineTo(fx - 8, 54); c.closePath(); c.fill(); c.fillStyle = "#2a2a2a"; rr(c, fx + 18, 118, 16, 14, 3); c.fill(); }
      else if (v === 2) { c.fillStyle = "#f2f2f2"; c.beginPath(); c.ellipse(fx, 32, 15, 5, 0, 0, TAU); c.fill(); rr(c, fx - 11, 24, 22, 10, 4); c.fill(); }
      else { ell(c, fx + 4, 33, 16, 4); c.fill(); c.beginPath(); c.ellipse(fx, 31, 13, 7, 0, Math.PI, 0); c.fill(); }
    };
  }
  /* a cardboard sign with a letter painted on it, 120x86 */
  function drawSign(Lt) {
    return function (c, w, h) {
      c.fillStyle = "#1a1a1a"; c.beginPath(); c.moveTo(4, 6); c.lineTo(w - 3, 2); c.lineTo(w - 2, h - 4); c.lineTo(8, h - 1); c.closePath(); c.fill();
      var g = c.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "#f2efe8"); g.addColorStop(1, "#cfcac0");
      c.fillStyle = g; c.beginPath(); c.moveTo(7, 9); c.lineTo(w - 6, 5); c.lineTo(w - 5, h - 7); c.lineTo(10, h - 4); c.closePath(); c.fill();
      c.strokeStyle = "rgba(0,0,0,0.25)"; c.lineWidth = 1.2; c.beginPath(); c.moveTo(30, 10); c.lineTo(36, h - 6); c.stroke();
      c.fillStyle = "#0a0a0a"; c.font = "bold 66px " + SERIF; c.textAlign = "center"; c.textBaseline = "middle";
      c.save(); c.translate(w / 2 + 2, h / 2 + 4); c.rotate(-0.05); c.fillText(Lt, 0, 0); c.restore();
    };
  }
  /* a DETOUR barricade: a striped sawhorse, a sign with an arrow, two flare pots. 260x150 */
  function drawBarrier(c, w, h) {
    c.fillStyle = "rgba(0,0,0,0.6)"; ell(c, w / 2, h - 4, w * 0.48, 6); c.fill();
    c.strokeStyle = "#1a1a1a"; c.lineWidth = 7; c.lineCap = "round";
    [[54, 70, 36, h - 6], [54, 70, 74, h - 6], [w - 54, 70, w - 74, h - 6], [w - 54, 70, w - 36, h - 6]].forEach(function (l) { c.beginPath(); c.moveTo(l[0], l[1]); c.lineTo(l[2], l[3]); c.stroke(); });
    /* the striped board */
    c.save(); c.beginPath(); c.rect(12, 64, w - 24, 30); c.clip();
    c.fillStyle = "#f2f2f2"; c.fillRect(12, 64, w - 24, 30);
    c.fillStyle = "#0e0e0e"; for (var x = -20; x < w + 30; x += 34) { c.beginPath(); c.moveTo(x, 94); c.lineTo(x + 17, 94); c.lineTo(x + 47, 64); c.lineTo(x + 30, 64); c.closePath(); c.fill(); }
    c.restore();
    c.strokeStyle = "#0a0a0a"; c.lineWidth = 2.5; c.strokeRect(12, 64, w - 24, 30);
    /* the sign on top */
    c.fillStyle = "#0e0e0e"; c.fillRect(w / 2 - 3, 40, 6, 26);
    c.fillStyle = "#f4f4f4"; c.fillRect(w / 2 - 62, 6, 124, 38); c.strokeStyle = "#0a0a0a"; c.lineWidth = 4; c.strokeRect(w / 2 - 60, 8, 120, 34);
    c.fillStyle = "#0a0a0a"; c.font = "bold 22px " + SERIF; c.textAlign = "center"; c.textBaseline = "middle"; c.fillText("DETOUR", w / 2 + 12, 26);
    c.beginPath(); c.moveTo(w / 2 - 52, 25); c.lineTo(w / 2 - 38, 15); c.lineTo(w / 2 - 38, 35); c.closePath(); c.fill();
    /* flare pots, round bombs on the road */
    [22, w - 22].forEach(function (x) {
      c.fillStyle = "#151515"; ell(c, x, h - 16, 13, 12); c.fill(); c.fillRect(x - 3, h - 36, 6, 12);
      c.fillStyle = "#3a3a3a"; ell(c, x - 4, h - 20, 4, 4); c.fill();
    });
  }
  var BAR_FLARES = [[22, 112], [238, 112]];
  /* a DETOUR AHEAD diamond on a post, 120x210 */
  function drawDetourAhead(c, w, h) {
    c.fillStyle = "#1a1a1a"; c.fillRect(w / 2 - 4, 90, 8, h - 90);
    c.save(); c.translate(w / 2, 58); c.rotate(Math.PI / 4);
    c.fillStyle = "#0e0e0e"; c.fillRect(-40, -40, 80, 80);
    c.fillStyle = "#efefef"; c.fillRect(-36, -36, 72, 72);
    c.strokeStyle = "#0e0e0e"; c.lineWidth = 3; c.strokeRect(-31, -31, 62, 62);
    c.restore();
    c.fillStyle = "#0a0a0a"; c.textAlign = "center"; c.textBaseline = "middle";
    c.font = "bold 17px " + SERIF; c.fillText("DETOUR", w / 2, 50);
    c.font = "bold 14px " + SERIF; c.fillText("AHEAD", w / 2, 70);
  }
  /* a mileage sign: LOS ANGELES and the miles left, 190x170 */
  function drawMileSign(miles) {
    return function (c, w, h) {
      c.fillStyle = "#1a1a1a"; c.fillRect(30, 70, 8, h - 70); c.fillRect(w - 38, 70, 8, h - 70);
      c.fillStyle = "#151515"; c.fillRect(4, 4, w - 8, 80);
      c.strokeStyle = "#e8e8e8"; c.lineWidth = 3; c.strokeRect(10, 10, w - 20, 68);
      c.fillStyle = "#ededed"; c.textAlign = "center"; c.textBaseline = "middle";
      c.font = "bold 22px " + SERIF; c.fillText("LOS ANGELES", w / 2, 32);
      c.font = "bold 26px " + SERIF; c.fillText(String(miles), w / 2, 60);
    };
  }
  function drawGlow(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.12, "rgba(255,255,255,0.85)"); g.addColorStop(0.35, "rgba(230,230,230,0.28)"); g.addColorStop(1, "rgba(200,200,200,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  function drawStreak(c, w, h) {
    var g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "rgba(255,255,255,0.9)"); g.addColorStop(0.35, "rgba(255,255,255,0.35)"); g.addColorStop(1, "rgba(255,255,255,0)");
    c.fillStyle = g; c.beginPath(); c.ellipse(w / 2, h / 2, w / 2, h / 2, 0, 0, TAU); c.fill();
  }
  function drawFlame(c, w, h) {
    var g = c.createLinearGradient(0, h, 0, 0);
    g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.5, "rgba(230,230,230,0.8)"); g.addColorStop(1, "rgba(200,200,200,0)");
    c.fillStyle = g; c.beginPath(); c.moveTo(w / 2, 0); c.quadraticCurveTo(w, h * 0.6, w / 2, h); c.quadraticCurveTo(0, h * 0.6, w / 2, 0); c.fill();
  }
  function drawGrain(c, w, h) {
    var img = c.createImageData(w, h), d = img.data, i;
    for (i = 0; i < d.length; i += 4) {
      var r = Math.random(), on = r < 0.05 || r > 0.95;
      d[i] = d[i + 1] = d[i + 2] = r > 0.5 ? 255 : 0; d[i + 3] = on ? 150 : 0;
    }
    c.putImageData(img, 0, 0);
  }
  function drawMist(c, w, h) {
    for (var i = 0; i < 40; i++) {
      /* soft blobs well inside the tile's height, so the strip has no hard top or bottom edge */
      var x = (i * 97) % w, y = h * (0.4 + 0.2 * ((i * 53) % 17) / 17), r = 22 + (i * 37) % 16;
      [x, x - w, x + w].forEach(function (xx) {
        var g = c.createRadialGradient(xx, y, 0, xx, y, r * 1.6);
        g.addColorStop(0, "rgba(220,220,220,0.32)"); g.addColorStop(1, "rgba(220,220,220,0)");
        c.fillStyle = g; c.fillRect(xx - r * 1.6, y - r * 1.6, r * 3.2, r * 3.2);
      });
    }
  }
  /* a strip of mesas, seamless left to right */
  function drawMesas(c, w, h) {
    var x, y;
    c.fillStyle = "#121214"; c.beginPath(); c.moveTo(0, h);
    for (x = 0; x <= w; x += 4) {
      var u = x / w * TAU;
      y = h - 26 - 22 * Math.max(0, Math.sin(u * 3 + 0.4)) - 34 * Math.pow(Math.max(0, Math.sin(u * 2 + 1.2)), 6) * 1.6 - 8 * Math.sin(u * 11) * 0.5;
      y = Math.round(y / 6) * 6;   /* the flat tops of mesas */
      c.lineTo(x, y);
    }
    c.lineTo(w, h); c.closePath(); c.fill();
    c.fillStyle = "#0a0a0b"; c.beginPath(); c.moveTo(0, h);
    for (x = 0; x <= w; x += 4) { var v = x / w * TAU; c.lineTo(x, h - 10 - 9 * Math.max(0, Math.sin(v * 5 + 2)) - 5 * Math.sin(v * 13)); }
    c.lineTo(w, h); c.closePath(); c.fill();
  }
  function drawClouds(c, w, h) {
    for (var i = 0; i < 26; i++) {
      var x = (i * 151) % w, y = 30 + ((i * 71) % 9) * 14, rx = 70 + (i * 29) % 90, ry = 14 + (i * 13) % 16;
      [x, x - w, x + w].forEach(function (xx) {
        var g = c.createRadialGradient(xx, y, 0, xx, y, rx);
        g.addColorStop(0, "rgba(70,70,74,0.75)"); g.addColorStop(0.6, "rgba(50,50,54,0.4)"); g.addColorStop(1, "rgba(40,40,44,0)");
        c.save(); c.translate(xx, y); c.scale(1, ry / rx); c.translate(-xx, -y);
        c.fillStyle = g; c.beginPath(); c.arc(xx, y, rx, 0, TAU); c.fill(); c.restore();
      });
    }
  }
  function drawMoon(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(240,240,236,1)"); g.addColorStop(0.18, "rgba(230,230,226,1)"); g.addColorStop(0.2, "rgba(200,200,200,0.35)"); g.addColorStop(1, "rgba(160,160,160,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    c.fillStyle = "rgba(150,150,150,0.5)"; ell(c, w / 2 - 5, h / 2 - 3, 4, 3); c.fill(); ell(c, w / 2 + 6, h / 2 + 5, 3, 2.5); c.fill();
  }
  /* the sky and the ground under everything */
  function drawSky(B) {
    return function (c, w, h) {
      var g = c.createLinearGradient(0, 0, 0, B.yH);
      g.addColorStop(0, "#050506"); g.addColorStop(0.6, "#18181b"); g.addColorStop(1, "#3c3c40");
      c.fillStyle = g; c.fillRect(0, 0, w, B.yH + 1);
      for (var i = 0; i < 70; i++) {
        var x = (i * 389) % w, y = ((i * 211) % 1000) / 1000 * B.yH * 0.75;
        c.fillStyle = "rgba(255,255,255," + (0.2 + (i % 5) * 0.12) + ")"; c.fillRect(x, y, i % 9 ? 1.2 : 2, i % 9 ? 1.2 : 2);
      }
      g = c.createLinearGradient(0, B.yH, 0, h);
      g.addColorStop(0, "#1a1a1a"); g.addColorStop(1, "#303030");
      c.fillStyle = g; c.fillRect(0, B.yH, w, h - B.yH);
    };
  }
  /* the dark: everything below the horizon, with the headlights' cone cut out of it (soft edges). Its width is
     the canvas plus the car's sway either way; x = PAD + W/2 is the car */
  function coneOff(B, y) { return BEAM0 * (y - B.yH) + BEAM1 * B.S0; }
  function drawDark(B) {
    return function (c, w, h) {
      var cx = w / 2, y0 = B.yH, i;
      c.fillStyle = "rgba(2,2,3,0.91)"; c.fillRect(0, y0, w, h - y0);
      c.globalCompositeOperation = "destination-out";
      for (i = 0; i < 11; i++) {
        var grow = (10 - i) * 11 * B.k;
        c.fillStyle = "rgba(0,0,0,0.24)";
        c.beginPath();
        c.moveTo(cx - coneOff(B, h) - grow * 0.35, h);
        c.lineTo(cx - coneOff(B, y0) - grow, y0);
        c.lineTo(cx + coneOff(B, y0) + grow, y0);
        c.lineTo(cx + coneOff(B, h) + grow * 0.35, h);
        c.closePath(); c.fill();
      }
      /* the spill round the car: its own lights, dimly */
      var g = c.createRadialGradient(cx, h - 40 * B.k, 0, cx, h - 40 * B.k, 300 * B.k);
      g.addColorStop(0, "rgba(0,0,0,0.55)"); g.addColorStop(1, "rgba(0,0,0,0)");
      c.fillStyle = g; c.fillRect(0, y0, w, h - y0);
    };
  }
  /* the beams' own glow (added on top: rain and fog shine in it) */
  function drawBeam(B) {
    return function (c, w, h) {
      var cx = w / 2, y0 = B.yH, yc = B.yH + B.S0 / (Z_CAR + 0.3);
      var g = c.createLinearGradient(0, h, 0, y0);
      var fc = clamp((h - yc) / (h - y0), 0.05, 0.6);
      g.addColorStop(0, "rgba(255,255,255,0)"); g.addColorStop(fc * 0.8, "rgba(255,255,255,0)"); g.addColorStop(fc + 0.04, "rgba(255,255,255,0.95)"); g.addColorStop(0.78, "rgba(255,255,255,0.3)"); g.addColorStop(1, "rgba(255,255,255,0)");
      c.fillStyle = g;
      for (var i = 0; i < 6; i++) {
        var grow = (5 - i) * 13 * B.k;
        c.globalAlpha = 0.2;
        c.beginPath();
        c.moveTo(cx - coneOff(B, h) - grow * 0.3, h);
        c.lineTo(cx - coneOff(B, y0) - grow, y0);
        c.lineTo(cx + coneOff(B, y0) + grow, y0);
        c.lineTo(cx + coneOff(B, h) + grow * 0.3, h);
        c.closePath(); c.fill();
      }
    };
  }
  /* the end of the beams' reach: opaque for the far 62%, then fading out (see hwPlaceLight) */
  function drawFade(c, w, h) {
    var g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "rgba(2,2,3,0.97)"); g.addColorStop(0.62, "rgba(2,2,3,0.95)"); g.addColorStop(0.8, "rgba(2,2,3,0.55)"); g.addColorStop(1, "rgba(2,2,3,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  function drawHaze(c, w, h) {
    var g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "rgba(150,150,152,0)"); g.addColorStop(0.25, "rgba(150,150,152,0.85)"); g.addColorStop(0.62, "rgba(130,130,132,0.75)"); g.addColorStop(1, "rgba(120,120,122,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  function drawVignette(c, w, h) {
    var g = c.createRadialGradient(w / 2, h * 0.55, Math.min(w, h) * 0.35, w / 2, h * 0.55, Math.sqrt(w * w + h * h) * 0.62);
    g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,0.78)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  function ensureHwArt(scene) {
    canvasTex(scene, "md-hw-car", 240, 150, drawCarRear(false));
    canvasTex(scene, "md-hw-stall", 240, 150, drawCarRear(true));
    canvasTex(scene, "md-hw-truck", TRUCK_TW, TRUCK_TH, drawTruck);
    for (var v = 0; v < 4; v++) { canvasTex(scene, "md-hw-hiker-" + v + "-r", 130, 210, drawHiker(v, "r")); canvasTex(scene, "md-hw-hiker-" + v + "-l", 130, 210, drawHiker(v, "l")); }
    canvasTex(scene, "md-hw-barrier", 260, 150, drawBarrier);
    canvasTex(scene, "md-hw-ahead", 120, 210, drawDetourAhead);
    canvasTex(scene, "md-hw-glow", 128, 128, drawGlow);
    canvasTex(scene, "md-hw-streak", 32, 160, drawStreak);
    canvasTex(scene, "md-hw-flame", 24, 44, drawFlame);
    canvasTex(scene, "md-hw-grain", 128, 128, drawGrain);
    canvasTex(scene, "md-hw-mist", 512, 200, drawMist);
    canvasTex(scene, "md-hw-mesas", 1024, 120, drawMesas);
    canvasTex(scene, "md-hw-clouds", 1024, 180, drawClouds);
    canvasTex(scene, "md-hw-moon", 150, 150, drawMoon);
    canvasTex(scene, "md-hw-fade", 8, 256, drawFade);
    canvasTex(scene, "md-hw-haze", 8, 256, drawHaze);
  }
  function gray(l) { var v = Math.round(clamp(l, 0, 1) * 255); return (v << 16) | (v << 8) | v; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function hash(i) { var x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }

  M.extend("highway", {
    name: "Night Highway", kind: "noir driving level", level: "driving level", act: "BRAKE",
    how: "Detour, 1945: a down-on-his-luck piano player thumbs his way west, and fate keeps catching up with him. Now you're behind the wheel on a desert highway at night. The only light out here is your headlights; past them the road is black. Hitchhikers stand on the shoulders, each holding a cardboard sign with a letter. Steer onto the shoulder beside the one with the right answer to pick them up. Strangers you drive past come round again. Oncoming trucks thunder down the left lane: their headlights show long before they do, so get back to the right lane in time. Brake to slow down and read the signs.",
    rules: "Picking up a wrong hitchhiker costs a life (that stranger never thumbs a ride again). So does crashing into an oncoming truck, and on later levels hitting a DETOUR barricade or a stalled car.",
    keys: "◀ ▶, A / D or the on-screen pad steer · hold Space, BRAKE, ▼ or a mouse button to slow down · ▲ or W speeds up · or move the mouse (or a finger) and the car steers toward it.",
    tip: "NIGHT HIGHWAY — pull onto the shoulder beside the hitchhiker with the right letter. Keep out of the trucks' lane.",
    hint1: "Steer onto the shoulder beside the hitchhiker whose sign shows the right letter. The passage stays in the side panel.",
    hint2: "This question has two right letters. Pick up both hitchhikers whose signs carry them.",
    news: ["",
      "DETOUR barricades: a sawhorse and two flares block your lane. A DETOUR AHEAD sign warns you. Swerve around (watch for trucks).",
      "Fog rolls in off the desert. A fog bank cuts your headlights short, so the signs show later. Brake to buy time.",
      "Hitchhikers won't jump into a speeding car: brake as you pull over, so the speedometer needle is under the white mark.",
      "Heavier rain and a slick road: the car slides a little after you steer.",
      "Trucks run in pairs now, nose to tail, and they come faster.",
      "Stalled cars with no lights sit on the shoulders. You only see them in your headlights.",
      "Bad wiring: your headlights flicker and go dark for a moment now and then.",
      "A truck passing another truck comes at you in YOUR lane. Two pairs of lights side by side: get onto a shoulder.",
      "The end of the road: faster, darker and more trucks, on top of everything else."],
    params: highwayParams
  }, {
    highwayParams: function (n) { return highwayParams(n); },

    setup_highway: function () {
      ensureHwArt(this);
      var P = highwayParams(this.night), self = this, i;
      var B = this.hw = { P: P, t: 0, dist: 0, v: P.speed, carX: LANE, vx: 0, camX: LANE * 0.65, curve: 0, parX: 0,
        objs: [], letters: [], queue: [], dead: [], sideRun: 0, lastSide: 0, nextHiker: 4, nextHaz: 30, nextMile: 18, truckT: 5,
        fogT: 0, fogAmt: 0, flickT: 0, beam: 1, reachNow: P.reach, hitT: 0, wob: 0, ptrAim: null, lpx: null,
        rain: [], told: {}, picks: 0, hits: 0, trucksPassed: 0, capT: 99, capFull: "", qHit: false, sndT: 0, gravelT: 0, scratch: 0, keys: {} };
      B.miles = Math.max(3, 505 - this.night * 5);
      this.cameras.main.setBackgroundColor("#060607");
      /* black and white: the camera's colour matrix (WebGL); everything drawn here is grey already */
      try {
        var cam = this.cameras.main;
        if (cam.postFX && this.renderer && this.renderer.type === 2) { B.fxCM = cam.postFX.addColorMatrix(); B.fxCM.grayscale(1); }
      } catch (eF) { B.fxCM = null; }
      this.events.once("shutdown", function () { self.hwShutdown(); });
      this.events.once("destroy", function () { self.hwShutdown(); });
      /* the layers, back to front */
      B.sky = this.add.image(0, 0, "md-hw-car").setOrigin(0, 0).setDepth(0);
      B.moon = this.add.image(0, 0, "md-hw-moon").setDepth(0.3);
      B.clouds = this.add.tileSprite(0, 0, 16, 16, "md-hw-clouds").setOrigin(0, 0).setDepth(0.5);
      B.mesas = this.add.tileSprite(0, 0, 16, 16, "md-hw-mesas").setOrigin(0, 1).setDepth(1);
      B.roadG = this.add.graphics().setDepth(2);
      B.dark = this.add.image(0, 0, "md-hw-car").setOrigin(0.5, 0).setDepth(3);
      B.fade = this.add.image(0, 0, "md-hw-fade").setOrigin(0, 0).setDepth(3.2);
      B.haze = this.add.image(0, 0, "md-hw-haze").setOrigin(0, 0).setDepth(3.4).setAlpha(0);
      B.lightG = this.add.graphics().setDepth(3.6).setBlendMode(BLEND_ADD);
      B.beamImg = this.add.image(0, 0, "md-hw-car").setOrigin(0.5, 0).setDepth(3.8).setBlendMode(BLEND_ADD);
      B.poleG = this.add.graphics().setDepth(4.8);
      B.rainG = this.add.graphics().setDepth(10);
      B.car = this.add.image(0, 0, "md-hw-car").setOrigin(0.5, 1).setDepth(11);
      B.tail = [0, 1].map(function () { return self.add.image(0, 0, "md-hw-glow").setDepth(11.2).setBlendMode(BLEND_ADD); });
      B.tailRef = [0, 1].map(function () { return self.add.image(0, 0, "md-hw-streak").setOrigin(0.5, 0).setDepth(3.7).setBlendMode(BLEND_ADD); });
      B.glare = this.add.image(0, 0, "md-hw-glow").setDepth(12).setBlendMode(BLEND_ADD).setAlpha(0);
      B.mist = this.add.tileSprite(0, 0, 16, 16, "md-hw-mist").setOrigin(0, 0).setDepth(12.5).setAlpha(0);
      B.uiG = this.add.graphics().setDepth(15);
      B.vig = this.add.image(0, 0, "md-hw-car").setOrigin(0, 0).setDepth(18);
      B.grain = this.add.tileSprite(0, 0, 16, 16, "md-hw-grain").setOrigin(0, 0).setDepth(18.5).setAlpha(0.09);
      B.fxG = this.add.graphics().setDepth(19);
      B.cap = this.add.text(0, 0, "", { fontFamily: TYPE, fontSize: 18, color: "#ececec", fontStyle: "italic", stroke: "#000000", strokeThickness: 5, align: "center" }).setOrigin(0.5, 0).setDepth(16);
      B.mph = this.add.text(0, 0, "MPH", { fontFamily: TYPE, fontSize: 11, color: "#d8d8d8", fontStyle: "bold" }).setOrigin(0.5).setDepth(16);
      B.pickTx = this.add.text(0, 0, "", { fontFamily: TYPE, fontSize: 11, color: "#ffffff", fontStyle: "bold", stroke: "#000", strokeThickness: 3 }).setOrigin(0, 0.5).setDepth(16);
      for (i = 0; i < 260; i++) B.rain.push({ x: Math.random(), y: Math.random(), l: rnd(0.6, 1.4), sp: rnd(0.8, 1.25) });
      /* the scene's own big tag, in a typewriter face */
      try { this.bigTag.setFontFamily(TYPE).setStroke("#000000", 7); } catch (eT) {}
      this.hwLayout();
      this.makeSol(B.cx, B.H * 0.8, "up").setVisible(false);   /* the car drives; the sprite stays for coin pop-ups */
    },
    hwShutdown: function () {
      var B = this.hw;
      if (!B || B.shut) return;
      B.shut = true;
      try { if (B.fxCM && this.cameras && this.cameras.main && this.cameras.main.postFX) this.cameras.main.postFX.remove(B.fxCM); } catch (e) {}
      B.fxCM = null;
    },

    /* everything that depends on the canvas size */
    hwLayout: function () {
      var B = this.hw, W = this.W, H = this.H, i;
      B.W = W; B.H = H; B.cx = W / 2;
      B.k = clamp(Math.min(H / 768, W / 1000), 0.55, 1.3);
      B.signK = H < 640 ? 1.2 : 1;   /* a small frame: the signs a little larger, to be read in time */
      B.yH = Math.round(H * 0.4);
      B.S0 = Math.min((H - B.yH) * 1.5, W * 0.68);
      B.zNear = B.S0 / (H - B.yH);
      B.zs = []; var zA = B.zNear * 0.9;
      for (i = 0; i < 36; i++) B.zs.push(zA * Math.pow(Z_FAR / zA, i / 35));
      B.pad = Math.round(Math.max(200, 0.36 * B.S0 / Z_CAR * X_MAX) + 40);
      var key = "md-hw-sky-" + W + "x" + H, dk = "md-hw-dark-" + W + "x" + H, bk = "md-hw-beam-" + W + "x" + H, vk = "md-hw-vig-" + W + "x" + H;
      if (B.skyKey !== key) {
        var old = [B.skyKey, B.darkKey, B.beamKey, B.vigKey];
        canvasTex(this, key, W, H, drawSky(B));
        canvasTex(this, dk, W + B.pad * 2, H, drawDark(B));
        canvasTex(this, bk, W + B.pad * 2, H, drawBeam(B));
        canvasTex(this, vk, W, H, drawVignette);
        B.skyKey = key; B.darkKey = dk; B.beamKey = bk; B.vigKey = vk;
        B.sky.setTexture(key); B.dark.setTexture(dk); B.beamImg.setTexture(bk); B.vig.setTexture(vk);
        var self = this;
        old.forEach(function (o) { if (o && [key, dk, bk, vk].indexOf(o) === -1) { try { self.textures.remove(o); } catch (e) {} } });
      }
      B.sky.setPosition(0, 0);
      B.vig.setPosition(0, 0);
      B.clouds.setPosition(0, 0).setSize(W, Math.round(B.yH * 0.75)).setTileScale(1, B.yH * 0.75 / 180);
      B.mesas.setPosition(0, B.yH + 1).setSize(W, Math.round(120 * B.k)).setTileScale(B.k, B.k);
      B.grain.setSize(W, H);
      B.mist.setPosition(0, B.yH - 30 * B.k).setSize(W, Math.round(H - B.yH + 30 * B.k)).setTileScale(1.4 * B.k, 1.6 * B.k);
      B.fade.setDisplaySize(W, 10);
      B.haze.setDisplaySize(W, 10);
      B.moon.setScale(B.k);
      B.cap.setFontSize(Math.round(clamp(21 * B.k, 14, 24))).setWordWrapWidth(Math.max(220, W * 0.62)).setPosition(W / 2, Math.max(56, H * 0.09));
      B.mph.setFontSize(Math.round(11 * B.k));
      B.pickTx.setFontSize(Math.round(11 * B.k));
      /* the gauge: top left, clear of the Menu button */
      B.gR = Math.round(40 * B.k); B.gx = Math.round(18 + B.gR + 6); B.gy = Math.round(Math.max(64 * B.k + B.gR, 70 + B.gR * 0.4));
    },
    resize_highway: function () {
      this.hwLayout();
    },

    /* ── the projection: depth z (lanes ahead of the camera), x across the road (lanes) ── */
    hwBend: function (z) { var B = this.hw; return B.curve * (z * z - Z_CAR * Z_CAR); },
    hwX: function (wx, z) { var B = this.hw; return B.cx + (wx + this.hwBend(z) - B.camX) * B.S0 / z; },
    hwY: function (z) { var B = this.hw; return B.yH + B.S0 / z; },
    hwSc: function (z) { return this.hw.S0 / z; },
    /* how brightly the headlights light a point (0-1) */
    hwLight: function (wx, z) {
      var B = this.hw;
      if (z < Z_CAR + 0.15) return 0.2 * B.beam;
      var d = clamp((B.reachNow - z) / (B.reachNow * 0.38), 0, 1);
      var off = Math.abs(wx + this.hwBend(z) - B.carX) - Math.max(BEAM_MIN, BEAM0 + BEAM1 * z);
      return d * clamp(1 - off / BEAM_SOFT, 0, 1) * B.beam;
    },

    /* ── a new question: the hitchhikers' letters; the road ahead cleared for a moment ── */
    answers_highway: function () {
      var B = this.hw, self = this;
      B.objs.slice().forEach(function (o) { if (o.kind === "hiker" || o.z < 16) self.hwRemove(o); });
      B.letters = this.choiceLetters();
      B.dead = [];
      B.queue = [];
      B.nextHiker = B.dist + 1.5;
      B.truckT = Math.max(B.truckT, 3.5);
      B.nextHaz = Math.max(B.nextHaz, B.dist + 10);
      B.qHit = false;
      this.hwSay(pick(VOICE.start));
      this.hwMotif("open");
    },
    hwLive: function (L2) { return this.hw.dead.indexOf(L2) === -1 && this.extracted.indexOf(L2) === -1; },
    hwNextLetter: function () {
      var B = this.hw, self = this, tries = 0;
      while (tries++ < 3) {
        while (B.queue.length) { var L2 = B.queue.shift(); if (self.hwLive(L2)) return L2; }
        var live = B.letters.filter(function (x) { return self.hwLive(x); });
        if (!live.length) return null;
        /* the same letter never twice running, if there's a choice */
        B.queue = shuffle(live.slice());
        if (B.queue.length > 1 && B.queue[0] === B.lastLetter) B.queue.push(B.queue.shift());
      }
      return null;
    },

    /* ── things on the road ── */
    hwSpawn: function (kind, x, z, extra) {
      var B = this.hw, self = this, o = { kind: kind, x: x, z: z, pz: z, v: 0, done: false, imgs: [], glows: [], t: 0, ph: rnd(0, TAU) };
      if (extra) Object.keys(extra).forEach(function (k) { o[k] = extra[k]; });
      if (kind === "hiker") {
        var dir = x > 0 ? "l" : "r";
        B.hikerV = ((B.hikerV || 0) + 1 + Math.floor(Math.random() * 3)) % 4;
        canvasTex(this, "md-hw-sign-" + o.letter, 120, 86, drawSign(o.letter));
        o.body = this.add.image(0, 0, "md-hw-hiker-" + B.hikerV + "-" + dir).setOrigin((dir === "r" ? HIKER_FEET : 130 - HIKER_FEET) / 130, 1);
        o.sign = this.add.image(0, 0, "md-hw-sign-" + o.letter);
        o.imgs = [o.body, o.sign];
        o.side = x > 0 ? 1 : -1;
      } else if (kind === "truck") {
        o.body = this.add.image(0, 0, "md-hw-truck").setOrigin(0.5, 1);
        o.imgs = [o.body];
        o.glows = [0, 1].map(function () { return self.add.image(0, 0, "md-hw-glow").setBlendMode(BLEND_ADD); });
        o.refs = [0, 1].map(function () { return self.add.image(0, 0, "md-hw-streak").setOrigin(0.5, 0).setBlendMode(BLEND_ADD).setDepth(3.7); });
        o.halo = this.add.image(0, 0, "md-hw-glow").setBlendMode(BLEND_ADD);
        o.glows.push(o.halo);
        o.v = o.v || B.P.truckSpd;
      } else if (kind === "barrier") {
        o.body = this.add.image(0, 0, "md-hw-barrier").setOrigin(0.5, 1);
        o.imgs = [o.body];
        o.glows = [0, 1].map(function () { return self.add.image(0, 0, "md-hw-glow").setBlendMode(BLEND_ADD); });
        o.flames = [0, 1].map(function () { return self.add.image(0, 0, "md-hw-flame").setOrigin(0.5, 1).setBlendMode(BLEND_ADD); });
      } else if (kind === "stall") {
        o.body = this.add.image(0, 0, "md-hw-stall").setOrigin(0.5, 1);
        o.imgs = [o.body];
      } else if (kind === "ahead") {
        o.body = this.add.image(0, 0, "md-hw-ahead").setOrigin(0.5, 1);
        o.imgs = [o.body];
      } else if (kind === "mile") {
        var mk = "md-hw-mile-" + o.miles;
        canvasTex(this, mk, 190, 170, drawMileSign(o.miles));
        o.body = this.add.image(0, 0, mk).setOrigin(0.5, 1);
        o.imgs = [o.body];
      }
      B.objs.push(o);
      this.hwPlace(o);
      return o;
    },
    hwRemove: function (o) {
      var B = this.hw, i = B.objs.indexOf(o);
      if (i !== -1) B.objs.splice(i, 1);
      [o.imgs, o.glows, o.refs, o.flames].forEach(function (list) { (list || []).forEach(function (im) { try { im.destroy(); } catch (e) {} }); });
      o.imgs = []; o.glows = []; o.refs = []; o.flames = [];
      o.gone = true;
    },
    hwSpawnHiker: function () {
      var B = this.hw, P = B.P, Lt = this.hwNextLetter();
      if (!Lt) return null;
      /* the side: either, but never three in a row on one side */
      var side = Math.random() < 0.55 ? 1 : -1;
      if (B.sideRun >= 2 && side === B.lastSide) side = -side;
      B.sideRun = side === B.lastSide ? B.sideRun + 1 : 1; B.lastSide = side;
      B.lastLetter = Lt;
      var z = Math.min(Z_FAR - 1, P.reach + 6);
      /* keep clear of a stalled car on the same shoulder */
      var self = this;
      if (B.objs.some(function (o) { return o.kind === "stall" && Math.sign(o.x) === side && Math.abs(o.z - z) < 5; })) side = -side;
      if (B.objs.some(function (o) { return o.kind === "stall" && Math.sign(o.x) === side && Math.abs(o.z - z) < 5; })) z += 6;
      return self.hwSpawn("hiker", side * SHOULDER, z, { letter: Lt });
    },
    hwSpawnTrucks: function () {
      var B = this.hw, P = B.P, z = Z_FAR - 0.5;
      if (P.pass && Math.random() < P.pass) {
        /* one truck passing another: side by side, the passer in your lane */
        this.hwSpawn("truck", -LANE, z);
        var ps = this.hwSpawn("truck", LANE, z - 1.6, { passer: true });
        if (!B.told.pass) { B.told.pass = true; this.toast("Two pairs of headlights side by side: a truck is passing another in YOUR lane. Get onto a shoulder!", 4600); }
        return ps;
      }
      var t = this.hwSpawn("truck", -LANE, z);
      if (P.pair && Math.random() < P.pair) this.hwSpawn("truck", -LANE, z + 5.5);
      return t;
    },
    hwHazard: function () {
      var B = this.hw, P = B.P, r = Math.random(), self = this;
      var near = function (side, z) { return B.objs.some(function (o) { return o.kind === "hiker" && (side == null || Math.sign(o.x) === side) && Math.abs(o.z - z) < 4.5; }); };
      if (P.fogP && r < P.fogP * 0.35 && B.fogT <= 0) {
        B.fogT = rnd(5, 9);
        if (!B.told.fog) { B.told.fog = true; this.toast("Fog! The headlights don't reach as far. Brake to give yourself time to read the signs.", 4200); this.hwSay(VOICE.fog[0]); }
        return "fog";
      }
      r = Math.random();
      if (P.barrier && r < P.barrier) {
        var zb = Z_FAR - 0.5;
        if (near(1, zb)) return null;
        this.hwSpawn("barrier", LANE, zb);
        this.hwSpawn("ahead", 1.95, zb - 13);
        return "barrier";
      }
      r = Math.random();
      if (P.stall && r < P.stall) {
        var side = Math.random() < 0.5 ? 1 : -1, zs = Math.min(Z_FAR - 1, P.reach + 8);
        if (near(side, zs)) side = -side;
        if (near(side, zs)) return null;
        this.hwSpawn("stall", side * (SHOULDER + 0.02), zs);
        return "stall";
      }
      return null;
    },

    /* ── the frame ── */
    tick_highway: function (s, inp, ms) {
      var B = this.hw, P = B.P, self = this, i;
      B.t += s;
      if (!B.told.start) { B.told.start = true; this.toast("Steer ◀ ▶ onto the shoulder beside the hitchhiker with the right letter. Hold Space or BRAKE to slow down and read the signs.", 6000); }

      /* steering: the keys or the pad; else the pointer, when it moves or is held down */
      var p = this.ptr, moved = B.lpx != null && Math.abs(p.x - B.lpx) > 2;
      B.lpx = p.x;
      if (inp.ax) B.ptrAim = null;
      else if (moved || inp.ptr) B.ptrAim = clamp((p.x - B.cx) / (B.W * 0.34) * 1.45, -X_MAX, X_MAX);
      var want = inp.ax ? inp.ax * STEER : B.ptrAim != null ? clamp((B.ptrAim - B.carX) * 5, -1, 1) * STEER : 0;
      if (B.hitT > 0) { B.hitT -= s; want *= 0.35; }
      B.vx += (want - B.vx) * Math.min(1, P.grip * s);
      B.carX += B.vx * s;
      if (B.carX > X_MAX) { B.carX = X_MAX; B.vx = Math.min(0, B.vx); }
      if (B.carX < -X_MAX) { B.carX = -X_MAX; B.vx = Math.max(0, B.vx); }
      B.camX += (B.carX * 0.65 - B.camX) * Math.min(1, 5 * s);

      /* speed: brake (Space, BRAKE, ▼, a mouse button), gas (▲) */
      var brake = !!inp.fire || inp.ay > 0, gas = inp.ay < 0 && !brake;
      var tgt = P.speed * (brake ? BRAKE_K : gas ? GAS_K : 1) * (B.hitT > 0 ? 0.55 : 1);
      B.v += (tgt - B.v) * Math.min(1, (tgt < B.v ? 2.6 : 1.1) * s);
      B.braking = brake;
      B.dist += B.v * s;
      B.curve = 0.0055 * Math.sin(B.dist * 0.011) + 0.003 * Math.sin(B.dist * 0.029 + 2);
      B.parX += B.curve * B.v * s * 2400;
      var gravel = Math.abs(B.carX) > ROAD + 0.05;
      if (gravel && (B.gravelT -= s) <= 0) { B.gravelT = 0.22; this.hwSnd("gravel"); }

      /* the weather and the lights */
      if (B.fogT > 0) B.fogT -= s;
      B.fogAmt += ((B.fogT > 0 ? 1 : 0) - B.fogAmt) * Math.min(1, 0.7 * s);
      if (P.flicker && B.flickT <= 0 && !this._between && Math.random() < P.flicker * s) {
        B.flickT = rnd(0.45, 0.9);
        if (!B.told.flicker) { B.told.flicker = true; this.toast("The headlights are flickering! Keep your lane and wait for them to come back.", 3600); this.hwSay(VOICE.flicker[0]); }
      }
      if (B.flickT > 0) { B.flickT -= s; B.beam = (Math.floor(B.flickT * 13) % 4 === 0) ? 0.7 : 0.04; if (Math.random() < 0.08) this.hwSnd("click"); }
      else B.beam = 1;
      B.reachNow = P.reach * (1 - P.fog * B.fogAmt) * (B.beam < 0.5 ? 0.25 : 1);
      if ((B.sndT -= s) <= 0) { B.sndT = 1.15; this.hwSnd("rain"); }

      /* what comes down the road */
      if (!this._between) {
        if (B.dist >= B.nextHiker) { this.hwSpawnHiker(); B.nextHiker = B.dist + P.gap * rnd(0.9, 1.12); }
        if (B.dist >= B.nextHaz) { this.hwHazard(); B.nextHaz = B.dist + P.hazGap * rnd(0.8, 1.25); }
        B.truckT -= s;
        if (B.truckT <= 0) {
          /* early on, a truck never meets the car beside a left-side hitchhiker */
          var eta = (Z_FAR - 0.5 - Z_CAR) / (B.v + P.truckSpd), clash = P.fair && B.objs.some(function (o) { return o.kind === "hiker" && o.x < 0 && Math.abs((o.z - Z_CAR) / Math.max(0.5, B.v) - eta) < 1.8; });
          if (clash) B.truckT = 0.6;
          else { this.hwSpawnTrucks(); B.truckT = P.truckEvery * rnd(0.75, 1.25); }
        }
      }
      if (B.dist >= B.nextMile) { this.hwSpawn("mile", 2.05, Z_FAR - 1, { miles: B.miles }); B.miles = Math.max(1, B.miles - 1); B.nextMile = B.dist + rnd(70, 95); }

      /* move everything; pick up, crash or pass at the car */
      var list = B.objs.slice();
      for (i = 0; i < list.length; i++) {
        var o = list[i];
        if (o.gone) continue;
        o.pz = o.z; o.t += s;
        if (o.anim) { this.hwAnim(o, s); continue; }
        o.z -= (B.v + o.v) * s;
        if (o.pz > Z_CAR && o.z <= Z_CAR && !o.done) this.hwAtCar(o);
        if (o.gone || o.anim) continue;
        if (o.z < 0.95) { this.hwRemove(o); continue; }
        if (o.kind === "truck" && !o.honked && o.z > Z_CAR && o.z < 15 && Math.abs(B.carX - o.x) < CAR_HW + TRUCK_HW + 0.06) {
          o.honked = true; this.hwSnd("horn");
          if (!B.told.horn) { B.told.horn = true; this.toast("A truck is coming at you in your lane! Steer out of its way.", 3200); }
        }
        this.hwPlace(o);
        if (this._finishing) break;
      }

      this.hwDraw(s);
    },
    /* an object reaches the car */
    hwAtCar: function (o) {
      var B = this.hw, P = B.P, dx = Math.abs(B.carX - o.x), sx = this.hwX(o.x, Z_CAR), sy = this.hwY(Z_CAR) - 0.45 * this.hwSc(Z_CAR);
      o.done = true;
      if (o.kind === "hiker") {
        if (dx >= P.pickTol) return null;
        if (this._between || this._finishing) return null;
        if (B.v > P.speed * P.pickMax + 1e-6) {
          /* too fast: the stranger jumps back from the gravel */
          o.anim = "jump"; o.at = 0; o.fx = o.x; o.fz = o.z;
          this.hwSnd("skid");
          this.toast("Too fast! Brake (Space, BRAKE or ▼) so the needle is under the white mark, or they won't get in.", 3600);
          return "fast";
        }
        o.anim = "board"; o.at = 0; o.fx = o.x; o.fz = o.z;
        B.v *= 0.55;
        this.hwSnd("door");
        var hadHit = B.qHit, res = this.answerPick(o.letter, sx, sy);
        if (res === "wrong") { B.dead.push(o.letter); this.hwSay(pick(VOICE.wrong)); this.hwMotif("wrong"); }
        else if (res === "partial" || res === "done") {
          B.picks += 1;
          if (res === "done") { this.hwSay(pick(VOICE.right)); if (!this.claimWrong && !hadHit && !this.ended) this.awardBonusPoints(800, "The right passenger, first try"); }
          this.hwMotif("right");
        }
        return res;
      }
      if (this._between || this._finishing) return null;
      var hw = o.kind === "truck" ? TRUCK_HW : o.kind === "barrier" ? BAR_HW : o.kind === "stall" ? STALL_HW : -1;
      if (hw < 0) return null;
      if (dx < CAR_HW + hw) {
        var label = o.kind === "truck" ? "A TRUCK RAN YOU OFF THE ROAD" : o.kind === "barrier" ? "YOU HIT THE DETOUR BARRICADE" : "YOU HIT A STALLED CAR";
        var lost = this.loseLife("hit", label);
        this.burst(sx, this.hwY(Z_CAR) - 20, 0xffffff, 18);
        this.hwSnd("crash");
        B.hitT = 0.8; B.wob = 1; B.v *= 0.5;
        B.vx = (B.carX >= o.x ? 1 : -1) * 2.4;
        if (lost) { B.hits += 1; B.qHit = true; if (!this._finishing) this.hwSay(pick(VOICE.hit)); }
        if (o.kind === "barrier") { o.anim = "smash"; o.at = 0; }
        return lost ? "hit" : "blocked";
      }
      if (o.kind === "truck") {
        this.hwSnd("whoosh");
        B.trucksPassed += 1;
        this.addKill(sx, sy, "Twelve trucks dodged");
      }
      return "pass";
    },
    /* the short animations: a passenger climbing in, a stranger jumping back, a barricade knocked flying */
    hwAnim: function (o, s) {
      var B = this.hw;
      o.at += s;
      if (o.anim === "board") {
        var u = clamp(o.at / 0.45, 0, 1);
        o.x = o.fx + (B.carX - o.fx) * u; o.z = o.fz + (Z_CAR + 0.3 - o.fz) * u;
        this.hwPlace(o);
        o.imgs.forEach(function (im) { im.setAlpha(1 - u); });
        if (u >= 1) this.hwRemove(o);
      } else if (o.anim === "jump") {
        o.z -= B.v * s;
        o.x = o.fx + Math.sign(o.fx) * Math.min(0.5, o.at * 2.2);
        this.hwPlace(o);
        if (o.z < 0.95) this.hwRemove(o);
      } else if (o.anim === "smash") {
        o.z -= B.v * s * 0.6;
        this.hwPlace(o);
        o.body.setRotation(o.at * 3 * (o.x > B.carX ? 1 : -1)).setAlpha(clamp(1 - o.at / 0.7, 0, 1));
        if (o.at > 0.7 || o.z < 0.95) this.hwRemove(o);
      }
    },
    /* an object's images at its depth, lit by the headlights */
    hwPlace: function (o) {
      var B = this.hw, z = Math.max(0.6, o.z), sc = this.hwSc(z), sx = this.hwX(o.x, z), sy = this.hwY(z);
      var dep = 5 + 4 * (1 - clamp(z / Z_FAR, 0, 1)), lit = this.hwLight(o.x, z), amb = 0.07, far = z > B.reachNow * 1.05;
      if (o.kind === "hiker") {
        var bs = HIKER_H * sc / 210;
        o.body.setPosition(sx, sy).setScale(bs).setDepth(dep).setTint(gray(Math.max(amb, lit * 0.95)));
        var sgx = sx - o.side * SIGN_DX * sc, sgy = sy - SIGN_UP * sc;
        var inR = clamp((B.reachNow * 1.05 - z) / 2.5, 0, 1);
        o.sign.setPosition(sgx, sgy).setScale(SIGN_W * sc * B.signK / 120).setDepth(dep + 0.01).setRotation(0.07 * Math.sin(B.t * 2.6 + o.ph))
          .setTint(gray(Math.max(amb, lit, 0.62 * inR * Math.max(B.beam, 0.25))));
      } else if (o.kind === "truck") {
        o.body.setPosition(sx, sy).setScale(TRUCK_W * sc / TRUCK_TW).setDepth(dep).setTint(gray(Math.max(0.13, lit * 0.9)));
        var k = TRUCK_W / TRUCK_TW, fog = B.fogAmt, warn = o.honked && o.z > Z_CAR ? 0.75 + 0.25 * Math.sin(B.t * 22) : 1;
        o.halo.setPosition(sx, sy - (TRUCK_TH - TRUCK_LIGHTS[0][1]) * k * sc).setScale(Math.max(90 * B.k, 2.6 * sc) * (1 + fog) / 128).setDepth(dep + 0.015)
          .setAlpha(clamp(0.32 * warn * (0.6 + 0.4 * fog) * clamp((Z_FAR - z) / 8, 0, 1), 0, 0.5));
        for (var j = 0; j < 2; j++) {
          var lx = sx + (TRUCK_LIGHTS[j][0] - TRUCK_TW / 2) * k * sc, ly = sy - (TRUCK_TH - TRUCK_LIGHTS[j][1]) * k * sc;
          var gs = Math.max(30 * B.k, 0.8 * sc) * (1 + fog * 0.8) / 128;
          o.glows[j].setPosition(lx, ly).setScale(gs).setDepth(dep + 0.02).setAlpha(clamp(0.95 * warn * (1 - fog * 0.35 * clamp(z / 20, 0, 1)), 0, 1));
          o.refs[j].setPosition(lx, sy - 2).setScale(Math.max(5 * B.k, 0.1 * sc) / 32, Math.max(18 * B.k, 0.55 * sc) / 160).setAlpha(clamp(0.5 - z / 90, 0.15, 0.5));
        }
      } else if (o.kind === "barrier") {
        o.body.setPosition(sx, sy).setScale(BAR_W * sc / 260).setDepth(dep).setTint(gray(Math.max(0.1, lit)));
        var kb = BAR_W / 260;
        for (var f = 0; f < 2; f++) {
          var fx = sx + (BAR_FLARES[f][0] - 130) * kb * sc, fy = sy - (150 - BAR_FLARES[f][1]) * kb * sc, fl = 0.85 + 0.15 * Math.sin(B.t * 17 + f * 2 + o.ph) + 0.08 * Math.sin(B.t * 41 + f);
          o.flames[f].setPosition(fx, fy).setScale(Math.max(0.35 * B.k, 0.11 * sc / 24 * 0.9) * fl * 1.0, Math.max(0.35 * B.k, 0.11 * sc / 24) * fl * 1.1).setDepth(dep + 0.02).setAlpha(o.anim ? 0 : 0.95);
          o.glows[f].setPosition(fx, fy - 4).setScale(Math.max(22 * B.k, 0.5 * sc) * fl / 128).setDepth(dep + 0.03).setAlpha(o.anim ? 0 : 0.55 * (1 - B.fogAmt * 0.3));
        }
      } else if (o.kind === "stall") {
        o.body.setPosition(sx, sy).setScale(CAR_W * sc / 240).setDepth(dep).setRotation(-0.04 * Math.sign(o.x)).setTint(gray(Math.max(0.045, lit * 0.85)));
      } else if (o.kind === "ahead") {
        o.body.setPosition(sx, sy).setScale(0.42 * sc / 120).setDepth(dep).setTint(gray(Math.max(0.06, far ? 0 : lit)));
      } else if (o.kind === "mile") {
        o.body.setPosition(sx, sy).setScale(0.72 * sc / 190).setDepth(dep).setTint(gray(Math.max(0.06, lit)));
      }
    },

    /* ── drawing every frame ── */
    hwDraw: function (s) {
      var B = this.hw, P = B.P, self = this, W = B.W, H = B.H, k = B.k, i, z, j;
      var X = function (wx, zz) { return self.hwX(wx, zz); }, Y = function (zz) { return self.hwY(zz); };
      /* the sky drifts with the bends */
      B.mesas.tilePositionX = B.parX / k;
      B.clouds.tilePositionX = B.parX * 0.5 + B.t * 6;
      B.moon.setPosition(((W * 0.74 - B.parX * 0.35) % (W * 1.3) + W * 1.3) % (W * 1.3) - W * 0.15, B.yH * 0.3);
      /* the road */
      var g = B.roadG, zs = B.zs, L1 = [], R1 = [], L2 = [], R2 = [];
      g.clear();
      for (i = 0; i < zs.length; i++) {
        z = zs[i]; var y = Y(z);
        L1.push({ x: X(-GRAVEL, z), y: y }); R1.push({ x: X(GRAVEL, z), y: y });
        L2.push({ x: X(-ROAD, z), y: y }); R2.push({ x: X(ROAD, z), y: y });
      }
      g.fillStyle(0x545454, 1); g.fillPoints(L1.concat(R1.slice().reverse()), true);
      g.fillStyle(0x47474a, 1); g.fillPoints(L2.concat(R2.slice().reverse()), true);
      /* the edges of the blacktop, worn */
      g.lineStyle(Math.max(1, 2 * k), 0x2c2c2e, 1); g.strokePoints(L2); g.strokePoints(R2);
      var zA = zs[0];
      /* the joints in the concrete, and the dashes of the white line */
      var jz0 = Math.ceil((B.dist + zA) / JOINT) * JOINT;
      for (var jd = jz0; jd - B.dist < 22; jd += JOINT) {
        z = jd - B.dist; g.lineStyle(Math.max(1, 0.018 * this.hwSc(z)), 0x2e2e30, 0.9); g.lineBetween(X(-ROAD, z), Y(z), X(ROAD, z), Y(z));
      }
      var d0 = Math.floor((B.dist + zA) / DASH) * DASH;
      for (var dd = d0; dd - B.dist < Z_FAR * 0.85; dd += DASH) {
        var za = Math.max(zA, dd - B.dist), zb = dd - B.dist + DASH_LEN;
        if (zb <= za) continue;
        g.fillStyle(0xe8e8e8, 1);
        g.fillPoints([{ x: X(-0.035, za), y: Y(za) }, { x: X(0.035, za), y: Y(za) }, { x: X(0.035, zb), y: Y(zb) }, { x: X(-0.035, zb), y: Y(zb) }], true);
      }
      /* the dark and the light */
      var cSX = this.hwX(B.carX, Z_REAR);
      B.carSX = cSX;
      B.dark.setPosition(cSX, 0);
      var fh = B.S0 / (0.62 * Math.max(1.2, B.reachNow));
      B.fade.setPosition(0, B.yH).setDisplaySize(W, fh);
      B.haze.setPosition(0, B.yH - fh * 0.25).setDisplaySize(W, fh * 1.25).setAlpha(B.fogAmt * 0.7);
      B.beamImg.setPosition(cSX, 0).setAlpha((0.34 + 0.5 * B.fogAmt + 0.1 * P.rain) * (B.beam > 0.5 ? 1 : 0.15));
      B.mist.tilePositionX = B.t * 22 + B.parX * 0.8; B.mist.tilePositionY = -B.dist * 4;
      B.mist.setAlpha(B.fogAmt * 0.5).setVisible(B.fogAmt > 0.02);
      B.haze.setVisible(B.fogAmt > 0.02);
      /* the poles, their wires, the scrub at the roadside: silhouettes until the beams find them */
      var pg = B.poleG; pg.clear();
      var p0 = Math.ceil((B.dist + zA) / POLE) * POLE, prev = null;
      for (var pd = p0; pd - B.dist < Z_FAR; pd += POLE) {
        z = pd - B.dist;
        var sc = this.hwSc(z), px = X(2.35, z), py = Y(z), top = py - 2.6 * sc, lit = this.hwLight(2.35, z);
        var col = gray(0.03 + lit * 0.6);
        pg.lineStyle(Math.max(1.2, 0.07 * sc), col, 1); pg.lineBetween(px, py, px, top);
        pg.lineStyle(Math.max(1, 0.045 * sc), col, 1); pg.lineBetween(px - 0.32 * sc, top + 0.12 * sc, px + 0.32 * sc, top + 0.12 * sc);
        if (prev) {
          pg.lineStyle(Math.max(0.8, 0.012 * sc), 0x0c0c0c, 0.9);
          for (j = -1; j <= 1; j += 2) {
            var ax = px + j * 0.26 * sc, ay = top + 0.12 * sc, bx = prev.x + j * 0.26 * prev.sc, by = prev.top + 0.12 * prev.sc;
            pg.beginPath(); pg.moveTo(ax, ay);
            for (var q = 1; q <= 6; q++) { var u = q / 6; pg.lineTo(ax + (bx - ax) * u, ay + (by - ay) * u + Math.sin(u * Math.PI) * 0.18 * (sc + prev.sc) * 0.5); }
            pg.strokePath();
          }
        }
        prev = { x: px, top: top, sc: sc };
      }
      /* scrub and stones */
      var SCRUB = 1.9, s0 = Math.ceil((B.dist + zA) / SCRUB);
      for (var si = s0; (si * SCRUB) - B.dist < 26; si++) {
        z = si * SCRUB - B.dist;
        var h1 = hash(si), side = h1 < 0.5 ? -1 : 1, wx = side * (1.75 + hash(si + 7) * 1.8), sc2 = this.hwSc(z), l2 = this.hwLight(wx, z);
        var bx2 = X(wx, z), by2 = Y(z), sz = (0.08 + hash(si + 3) * 0.14) * sc2;
        pg.fillStyle(gray(0.04 + l2 * 0.42), 1);
        if (hash(si + 11) < 0.6) { pg.fillEllipse(bx2, by2 - sz * 0.45, sz * 2.2, sz * 1.1); pg.fillEllipse(bx2 - sz * 0.6, by2 - sz * 0.3, sz * 1.2, sz * 0.8); }
        else pg.fillEllipse(bx2, by2 - sz * 0.2, sz * 1.2, sz * 0.6);
      }
      /* the trucks' beams on the wet road, and their reflections */
      var lg = B.lightG; lg.clear();
      B.objs.forEach(function (o) {
        if (o.kind !== "truck" || o.z <= Z_CAR) return;
        /* in five steps, fading toward its near end */
        var a = clamp(0.1 + B.fogAmt * 0.12, 0, 0.3) * clamp((Z_FAR - o.z) / 10, 0, 1), len = 9, q;
        for (q = 0; q < 5; q++) {
          var z1 = o.z - len * q / 5, z2 = Math.max(Z_CAR - 0.5, o.z - len * (q + 1) / 5), w1 = 0.32 + 0.63 * q / 5, w2 = 0.32 + 0.63 * (q + 1) / 5;
          if (z2 >= z1) break;
          lg.fillStyle(0xffffff, a * (1 - q / 5));
          lg.fillPoints([{ x: X(o.x - w1, z1), y: Y(z1) }, { x: X(o.x + w1, z1), y: Y(z1) }, { x: X(o.x + w2, z2), y: Y(z2) }, { x: X(o.x - w2, z2), y: Y(z2) }], true);
        }
      });
      /* the glare of the nearest truck in front */
      var near = null;
      B.objs.forEach(function (o) { if (o.kind === "truck" && o.z > Z_CAR && (!near || o.z < near.z)) near = o; });
      if (near && near.z < 11) {
        var ga = clamp((11 - near.z) / 8.5, 0, 1);
        B.glare.setPosition(this.hwX(near.x, near.z), this.hwY(near.z) - 0.25 * this.hwSc(near.z)).setScale((W * 0.9 * ga + 60) / 128).setAlpha(0.42 * ga);
      } else B.glare.setAlpha(0);
      /* the car */
      var cs = CAR_W * this.hwSc(Z_REAR) / 240;
      if (B.wob > 0) B.wob = Math.max(0, B.wob - s * 1.4);
      B.car.setPosition(cSX, this.hwY(Z_REAR) + (Math.abs(B.carX) > ROAD + 0.05 ? Math.sin(B.t * 47) * 1.5 * k : 0)).setScale(cs)
        .setRotation(clamp(B.vx * 0.035, -0.08, 0.08) + Math.sin(B.t * 30) * 0.08 * B.wob).setTint(0xd8d8d8);
      this.blink(B.car);
      var ty = this.hwY(Z_REAR) - 62 * cs;
      for (j = 0; j < 2; j++) {
        var tx = cSX + (j ? 1 : -1) * 88 * cs, br = B.braking ? 1 : 0.55;
        B.tail[j].setPosition(tx, ty).setScale((B.braking ? 70 : 46) * cs / 128).setAlpha(br * B.car.alpha);
        B.tailRef[j].setPosition(tx, this.hwY(Z_REAR) + 2).setScale(10 * cs / 32, (B.braking ? 90 : 60) * cs / 160).setAlpha(0.35 * br);
      }
      this.player.setPosition(cSX, this.hwY(Z_REAR) - 150 * cs);
      /* the rain: white in the beams, a ghost of itself in the dark */
      var rg = B.rainG; rg.clear();
      var n = Math.round(70 + P.rain * 150), fall = 1.35 * H, slant = -0.12 - B.vx * 0.05, inBeam, yR = B.yH + B.S0 / Math.max(1.5, B.reachNow);
      for (i = 0; i < n && i < B.rain.length; i++) {
        var d = B.rain[i];
        d.y += fall * d.sp * s / H; d.x += slant * d.sp * s * 0.6 * fall / W;
        if (d.y > 1) { d.y -= 1; d.x = Math.random(); }
        if (d.x < 0) d.x += 1; if (d.x > 1) d.x -= 1;
        var x0 = d.x * W, y0 = d.y * H, len = (14 + 22 * d.l) * k;
        inBeam = B.beam > 0.5 && y0 > yR && Math.abs(x0 - cSX) < coneOff(B, y0) + 10;
        rg.lineStyle(inBeam ? 1.6 : 1, 0xffffff, inBeam ? 0.55 : 0.11);
        rg.lineBetween(x0, y0, x0 + slant * len * 0.6, y0 + len);
      }
      /* splashes on the lit road */
      if (B.beam > 0.5) for (i = 0; i < 14; i++) {
        var zz = rnd(Z_CAR + 0.5, Math.min(12, B.reachNow)), wxx = rnd(-1.2, 1.2) + B.carX * 0.5, sp = this.hwSc(zz);
        if (this.hwLight(wxx, zz) < 0.3) continue;
        rg.lineStyle(1, 0xffffff, 0.35); rg.strokeEllipse(X(wxx, zz), Y(zz), 0.12 * sp, 0.03 * sp);
      }
      this.hwDrawUi();
      /* the film: grain, a flicker, now and then a scratch */
      B.grain.tilePositionX = Math.random() * 128; B.grain.tilePositionY = Math.random() * 128;
      var fx = B.fxG; fx.clear();
      fx.fillStyle(0x000000, Math.random() * 0.045); fx.fillRect(0, 0, W, H);
      if (B.scratch > 0) { B.scratch -= s; fx.lineStyle(1, 0xffffff, 0.22); fx.lineBetween(B.scrX, 0, B.scrX + 3, H); }
      else if (Math.random() < 0.25 * s) { B.scratch = rnd(0.08, 0.3); B.scrX = rnd(W * 0.1, W * 0.9); }
      /* the narrator's caption types itself out, then fades */
      if (B.capT < 9) {
        B.capT += s;
        var nch = Math.min(B.capFull.length, Math.floor(B.capT * 34));
        if (B.cap.text.length !== nch) B.cap.setText(B.capFull.slice(0, nch));
        B.cap.setAlpha(clamp((7.5 - B.capT) / 1.2, 0, 1));
      }
    },
    /* the speedometer: a 1940s dial; from level 31 a white mark shows how slow a hitchhiker wants you */
    hwDrawUi: function () {
      var B = this.hw, P = B.P, g = B.uiG, x = B.gx, y = B.gy, r = B.gR, k = B.k, i;
      g.clear();
      var maxV = P.speed * GAS_K * 1.08, a0 = Math.PI * 0.8, a1 = Math.PI * 2.2;
      var ang = function (v) { return a0 + (a1 - a0) * clamp(v / maxV, 0, 1); };
      g.fillStyle(0x000000, 0.72); g.fillCircle(x, y, r + 6 * k);
      g.lineStyle(3 * k, 0xbdbdbd, 1); g.strokeCircle(x, y, r + 3 * k);
      g.fillStyle(0x161616, 1); g.fillCircle(x, y, r);
      if (P.pickMax < 2) {
        var va = ang(0.02), vb = ang(P.speed * P.pickMax);
        g.lineStyle(6 * k, 0xffffff, 0.9); g.beginPath(); g.arc(x, y, r - 6 * k, va, vb, false); g.strokePath();
      }
      for (i = 0; i <= 10; i++) {
        var a = a0 + (a1 - a0) * i / 10, r1 = r - (i % 2 ? 4 : 9) * k;
        g.lineStyle(i % 2 ? 1 : 2, 0xd0d0d0, 1); g.lineBetween(x + Math.cos(a) * r1, y + Math.sin(a) * r1, x + Math.cos(a) * (r - 1), y + Math.sin(a) * (r - 1));
      }
      var an = ang(B.v), slow = B.v <= P.speed * P.pickMax + 1e-6;
      g.lineStyle(2.5 * k, P.pickMax < 2 && slow ? 0xffffff : 0xb8b8b8, 1); g.lineBetween(x, y, x + Math.cos(an) * (r - 8 * k), y + Math.sin(an) * (r - 8 * k));
      g.fillStyle(0xd0d0d0, 1); g.fillCircle(x, y, 3.5 * k);
      B.mph.setText(Math.round(B.v * 12) + " MPH").setPosition(x, y + r * 0.5);
      if (P.pickMax < 2) B.pickTx.setText(slow ? "SLOW ENOUGH" : "BRAKE TO PICK UP").setPosition(x + r + 10 * k, y).setAlpha(1);
      else B.pickTx.setAlpha(0);
    },

    /* the narrator */
    hwSay: function (line) {
      var B = this.hw;
      B.capFull = line; B.capT = 0; B.cap.setText("").setAlpha(1);
    },

    /* ── sound: horns, the rain, the door, a few notes of a lonely piano ── */
    hwSnd: function (name) {
      var R = window.SolRealms;
      if (!R || !R.blip) return;
      try {
        if (name === "horn") { R.blip(233, 226, 0.6, "sawtooth", 0.03); R.blip(294, 286, 0.6, "sawtooth", 0.026); R.blip(233, 226, 0.5, "sawtooth", 0.03, 0.7); R.blip(294, 286, 0.5, "sawtooth", 0.026, 0.7); }
        else if (name === "whoosh") { R.hiss(0.7, 520, 0.08); R.blip(110, 70, 0.6, "triangle", 0.03); }
        else if (name === "crash") { R.hiss(0.55, 320, 0.11); R.blip(95, 40, 0.45, "square", 0.045); R.hiss(0.3, 2400, 0.04, 0.08); }
        else if (name === "door") { R.blip(150, 70, 0.12, "triangle", 0.07); R.blip(120, 60, 0.12, "triangle", 0.06, 0.16); }
        else if (name === "skid") { R.hiss(0.35, 2800, 0.05); R.blip(700, 520, 0.25, "sawtooth", 0.012); }
        else if (name === "rain") { R.hiss(1.6, 4200, 0.008); }
        else if (name === "gravel") { R.hiss(0.14, 900, 0.022); }
        else if (name === "click") { R.blip(1800, 1200, 0.03, "square", 0.008); }
      } catch (e) {}
    },
    hwMotif: function (kind) {
      var R = window.SolRealms, notes;
      if (!R || !R.blip) return;
      /* original phrases in A minor, on a soft piano-like voice */
      if (kind === "open") notes = [[220, 0], [261.6, 0.3], [329.6, 0.6], [311.1, 0.9], [293.7, 1.35]];
      else if (kind === "right") notes = [[329.6, 0], [392, 0.18], [440, 0.36], [523.3, 0.54]];
      else notes = [[110, 0], [116.5, 0], [164.8, 0.02], [103.8, 0.5]];
      try {
        notes.forEach(function (nt) {
          R.blip(nt[0], nt[0] * 0.998, kind === "wrong" ? 1.1 : 0.9, "triangle", kind === "wrong" ? 0.05 : 0.045, nt[1]);
          R.blip(nt[0] * 2, nt[0] * 2, 0.5, "sine", 0.01, nt[1]);
        });
      } catch (e) {}
    },

    /* a right answer: the other strangers fade into the night; the next question brings new ones */
    clear_highway: function () {
      var B = this.hw, self = this;
      B.objs.slice().forEach(function (o) { if (o.kind === "hiker" && o.anim !== "board") self.hwRemove(o); });
    }
  });
})();
