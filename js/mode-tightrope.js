/* SOL Labyrinth v5.21 — the Lit and Film mode "tightrope": The Tightrope (Film History: The Circus, 1928).
 *
 * A silent picture: black and white, film grain, flicker, scratches, a vignette, sprocket holes down both edges,
 * iris-in and iris-out between the acts, intertitle cards for every message and a honky-tonk piano playing along
 * (a jaunty promenade, and an agitato tremolo when things go wrong). High under the big top a little tramp in a
 * bowler hat, with his cane, stands on the platform at the top of the king pole. High wires run out from there to
 * a platform on each side (two up, two down for four letters), and on every platform an easel holds a title card
 * with a letter. Walk the wire to the platform with the right letter: reaching it answers with that letter
 * (answerPick). A wrong card is crossed out and costs a life; walk back to the pole and try another.
 *
 * The balance: you walk the way you lean. ◀ ▶ (the pad, or the mouse held left or right of him) push the lean;
 * a lean past the STEADY mark walks him that way, faster the further he leans; past the black at either end of the
 * BALANCE dial he falls into the net (a life; he climbs back up to the platform he left). At first the lean rights
 * itself; every level it rights itself less, until from about level 69 it tips over on its own and you have to
 * feather the keys. ▲ ▼ pick the upper or lower wire at the king pole. Space, the SWAT button or a click on him
 * swings the cane.
 *
 * Hazards (each costs a life, each can be avoided): falling; monkeys from the menagerie, which climb onto the wire
 * and run at him, jump on his back, tug his balance and, if not swatted off in time, pull him off the wire
 * (from level 21 they also pull his bowler over his eyes: the picture irises in around him); from level 41 a
 * monkey on the top rope drops bananas (a dotted line shows where); from level 51 the peels stay on the wire and
 * make him slip; from level 31 the wires sway and from level 61 drafts blow through the tent flaps.
 * tightropeParams sets one difficulty curve for all of it.
 *
 * Registered with SolModes.extend (js/modes.js); the methods below are copied onto ModeScene, so `this` is the
 * mode scene. Every texture is drawn once (canvasTex) under an "md-tightrope-" key. The film look and the
 * intertitle cards are drawn on the scene's postupdate event, so they keep running under the reading card and
 * after the level ends; the ModeScene's own big tag is shown as an intertitle card instead.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, snd = L.snd, canvasTex = L.canvasTex;

  var TAU = Math.PI * 2;
  var SERIF = "Georgia, 'Palatino Linotype', 'Book Antiqua', 'Times New Roman', serif";
  var PAPER = "#efece4", INK = "#0b0b0a";
  var DZ = 0.1, WF = 0.45, RED = 0.78;   /* the lean: standing still below DZ, full walking pace at WF, the black from RED; 1 falls */
  var IRIS_R = 200;                      /* the iris texture's hole, px */
  var LEAN_ROT = 0.62;                   /* how far he tilts (rad) at a lean of 1 */
  var TS = 1.22;                         /* the tramp's size (his drawing is about 72 units tall) */
  /* the page's own buttons over the canvas: the platforms and cards keep clear of them */
  var KEEP_OUT = ["#btn-quit", "#btn-char", "#btn-music-hud", "#music-vol-hud", "#btn-fs", "#controls .dpad", "#btn-action", "#minimap"];
  var TIERS = { up: -1, mid: 0, low: 1 };
  /* which platforms the letters take, in letter order: side (-1 left, 1 right) and tier */
  var SLOTS = {
    1: [[1, "mid"]],
    2: [[-1, "mid"], [1, "mid"]],
    3: [[-1, "up"], [1, "up"], [-1, "low"]],
    4: [[-1, "up"], [1, "up"], [-1, "low"], [1, "low"]],
    5: [[-1, "up"], [1, "up"], [-1, "low"], [1, "low"], [-1, "mid"]],
    6: [[-1, "up"], [1, "up"], [-1, "mid"], [1, "mid"], [-1, "low"], [1, "low"]]
  };
  var ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"];

  /* ── difficulty: one curve for every level 1-100, each level harder than the one before ── */
  function tightropeParams(n) {
    n = Math.max(1, Number(n) || 1);
    return {
      tip: -2.2 + n * 0.032,                          /* the lean rights itself (<0) or tips over (>0): -2.17 at 1, +1.0 at 100 */
      damp: 3.2 - n * 0.012,                          /* how quickly a sway dies down: 3.19 at 1, 2.0 at 100 */
      push: 1.2 + n * 0.01,                           /* how hard a key pushes the lean (sharper, so it overshoots more) */
      wobble: 0.25 + n * 0.011,                       /* the wire's own wobble: 0.26 at 1, 1.35 at 100 */
      walk: 88,                                       /* px a second at a full walking lean (scaled) */
      monkeyFirst: 8 - n * 0.045,                     /* s before the first monkey: 7.96 at 1, 3.5 at 100 */
      monkeyEvery: 14 - n * 0.1,                      /* s between monkeys: 13.9 at 1, 4 at 100 */
      monkeySp: 34 + n * 0.62,                        /* a running monkey, px a second: 34.6 at 1, 96 at 100 */
      monkeys: n >= 71 ? 3 : n >= 11 ? 2 : 1,         /* loose at once */
      grip: n >= 91 ? 4 : n >= 61 ? 3 : n >= 21 ? 2 : 1,   /* swats to shake one off your back */
      clingMs: 6000 - n * 30,                         /* on your back this long on the wire, it pulls you off: 5.97 s at 1, 3 s at 100 */
      tug: 0.3 + n * 0.006,                           /* a tug's jolt to the lean */
      bias: 0.3 + n * 0.006,                          /* the weight of a monkey on one shoulder */
      reach: 74 - n * 0.2,                            /* the cane's reach, px: 73.8 at 1, 54 at 100 */
      hatDelay: n >= 21 ? 2000 - n * 9 : 99999,       /* ms on your back before it pulls your hat over your eyes (21 on) */
      sway: n >= 31 ? 0.3 + (n - 31) * 0.01 : 0,      /* the wires swing (31 on) */
      bananaEvery: n >= 41 ? 9 - (n - 41) * 0.06 : 99,   /* s between bananas from the top rope (41 on) */
      warnMs: 1500 - n * 8,                           /* the dotted line before a banana falls: 1492 at 1, 700 at 100 */
      peels: n >= 51 ? 1 : 0,                         /* peels stay on the wire (51 on) */
      gust: n >= 61 ? 0.5 + (n - 61) * 0.014 : 0,     /* drafts through the tent flaps (61 on) */
      gustEvery: n >= 61 ? 13 - (n - 61) * 0.1 : 99,
      ropers: n >= 81 ? 2 : n >= 41 ? 1 : 0,          /* monkeys on the top rope dropping bananas */
      swatJolt: 0.2 + n * 0.003                       /* a swing of the cane jolts the lean a little */
    };
  }

  /* ── art, drawn once ── */
  function path(c, pts) { c.beginPath(); pts.forEach(function (q, i) { c[i ? "lineTo" : "moveTo"](q[0], q[1]); }); }
  /* the letter card on its easel: an intertitle card, black with a white double rule and corner flourishes */
  function drawCard(c, w, h) {
    var g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "#1c1c1b"); g.addColorStop(1, "#050505");
    c.fillStyle = g; c.fillRect(1, 1, w - 2, h - 2);
    c.strokeStyle = PAPER; c.lineWidth = 2; c.strokeRect(4, 4, w - 8, h - 8);
    c.lineWidth = 0.9; c.strokeRect(7.5, 7.5, w - 15, h - 15);
    c.lineWidth = 1.1;
    [[7.5, 7.5, 0], [w - 7.5, 7.5, 1], [w - 7.5, h - 7.5, 2], [7.5, h - 7.5, 3]].forEach(function (q) {
      var a = q[2] * Math.PI / 2;
      c.beginPath(); c.arc(q[0], q[1], 5, a, a + Math.PI / 2); c.stroke();
      c.beginPath(); c.arc(q[0] + Math.cos(a + Math.PI / 4) * 5, q[1] + Math.sin(a + Math.PI / 4) * 5, 1.3, 0, TAU); c.fillStyle = PAPER; c.fill();
    });
    c.fillStyle = PAPER;
    [[w / 2, 11], [w / 2, h - 11]].forEach(function (q) {
      c.beginPath(); c.moveTo(q[0] - 7, q[1]); c.lineTo(q[0], q[1] - 2); c.lineTo(q[0] + 7, q[1]); c.lineTo(q[0], q[1] + 2); c.closePath(); c.fill();
    });
    c.strokeStyle = "#000"; c.lineWidth = 1; c.strokeRect(0.5, 0.5, w - 1, h - 1);
  }
  /* a monkey from the menagerie, side view facing right: a little vest and a fez. pose: run0, run1, cling, sit */
  function drawMonkey(pose) {
    return function (c, w, h) {
      var D = "#2e2c2a", F = "#cfcbc1", V = "#8c8880";
      c.lineCap = "round"; c.lineJoin = "round";
      function limb(pts, wd) { c.strokeStyle = D; c.lineWidth = wd; path(c, pts); c.stroke(); }
      var bx = 20, by = 25;
      if (pose === "cling") { bx = 21; by = 22; }
      if (pose === "sit") { bx = 21; by = 22; }
      /* the tail, a curl behind */
      c.strokeStyle = D; c.lineWidth = 2.6;
      c.beginPath();
      if (pose === "sit") { c.moveTo(bx - 7, by + 4); c.quadraticCurveTo(bx - 10, by + 16, bx - 4, by + 18); c.quadraticCurveTo(bx + 1, by + 19, bx - 1, by + 14); }
      else { c.moveTo(bx - 8, by + 1); c.quadraticCurveTo(bx - 18, by - 2, bx - 15, by - 12); c.quadraticCurveTo(bx - 12, by - 18, bx - 9, by - 13); }
      c.stroke();
      /* legs and arms */
      if (pose === "run0") {
        limb([[bx - 5, by + 3], [bx - 11, by + 9], [bx - 15, by + 12]], 3.4);
        limb([[bx + 4, by + 3], [bx + 9, by + 9], [bx + 13, by + 12]], 3.4);
        limb([[bx + 5, by - 3], [bx + 13, by + 4], [bx + 17, by + 11]], 3);
      } else if (pose === "run1") {
        limb([[bx - 4, by + 4], [bx - 3, by + 9], [bx + 1, by + 12]], 3.4);
        limb([[bx + 3, by + 4], [bx + 2, by + 9], [bx + 5, by + 12]], 3.4);
        limb([[bx + 5, by - 3], [bx + 9, by + 5], [bx + 7, by + 11]], 3);
      } else if (pose === "cling") {
        limb([[bx - 4, by + 4], [bx - 9, by + 9], [bx - 6, by + 14]], 3.4);
        limb([[bx + 3, by + 4], [bx + 9, by + 10], [bx + 13, by + 12]], 3.4);
        limb([[bx + 4, by - 4], [bx + 11, by - 11], [bx + 16, by - 15]], 3);
        limb([[bx - 1, by - 4], [bx + 6, by - 13], [bx + 9, by - 18]], 3);
      } else {
        limb([[bx - 3, by + 5], [bx + 1, by + 10], [bx - 1, by + 16]], 3.4);
        limb([[bx + 3, by + 5], [bx + 8, by + 10], [bx + 7, by + 16]], 3.4);
        limb([[bx + 4, by - 2], [bx + 12, by + 1], [bx + 16, by - 4]], 3);
        /* a banana in hand */
        c.strokeStyle = "#111"; c.lineWidth = 3.6; c.beginPath(); c.arc(bx + 18, by - 9, 6, Math.PI * 0.35, Math.PI * 1.05); c.stroke();
        c.strokeStyle = "#e6e2d6"; c.lineWidth = 2.2; c.beginPath(); c.arc(bx + 18, by - 9, 6, Math.PI * 0.35, Math.PI * 1.05); c.stroke();
      }
      /* the body and the vest */
      c.fillStyle = D; c.beginPath(); c.ellipse(bx, by, 9, 7.5, pose === "cling" ? -0.6 : -0.15, 0, TAU); c.fill();
      c.fillStyle = V; path(c, [[bx - 5, by - 5], [bx + 6, by - 6], [bx + 6, by + 3], [bx - 5, by + 4]]); c.closePath(); c.fill();
      c.fillStyle = "#f2efe6"; [[bx + 4, by - 3], [bx + 4, by + 0.5]].forEach(function (q) { c.beginPath(); c.arc(q[0], q[1], 0.9, 0, TAU); c.fill(); });
      /* the head: dark fur round a pale face, an ear, a fez with a tassel */
      var hx = bx + 10, hy = by - 9;
      if (pose === "cling") { hx = bx + 8; hy = by - 10; }
      c.fillStyle = D; c.beginPath(); c.arc(hx, hy, 7, 0, TAU); c.fill();
      c.fillStyle = F; c.beginPath(); c.arc(hx - 5, hy - 0.5, 2.6, 0, TAU); c.fill();
      c.fillStyle = D; c.beginPath(); c.arc(hx - 5, hy - 0.5, 1.2, 0, TAU); c.fill();
      c.fillStyle = F; c.beginPath(); c.ellipse(hx + 2.2, hy + 1, 4.6, 4.2, 0, 0, TAU); c.fill();
      c.fillStyle = "#000"; c.beginPath(); c.arc(hx + 1.2, hy - 0.6, 1.05, 0, TAU); c.arc(hx + 4.2, hy - 0.6, 1.05, 0, TAU); c.fill();
      c.strokeStyle = "#3a3734"; c.lineWidth = 0.9; c.beginPath(); c.arc(hx + 3, hy + 2.6, 1.6, 0.2, Math.PI - 0.2); c.stroke();
      c.fillStyle = "#151515"; path(c, [[hx - 3.5, hy - 5.5], [hx + 3.5, hy - 6.5], [hx + 2.6, hy - 12], [hx - 2.4, hy - 11.4]]); c.closePath(); c.fill();
      c.strokeStyle = "#f2efe6"; c.lineWidth = 0.8; c.beginPath(); c.moveTo(hx - 3.2, hy - 7); c.lineTo(hx + 3.3, hy - 8); c.stroke();
      c.strokeStyle = "#151515"; c.lineWidth = 1.1; c.beginPath(); c.moveTo(hx + 0.2, hy - 11.8); c.quadraticCurveTo(hx - 4, hy - 13, hx - 5, hy - 8.5); c.stroke();
    };
  }
  /* a light rim round a dark drawing, so it reads against the dark canopy */
  function outlined(draw, col) {
    return function (c, w, h) {
      var off = document.createElement("canvas"); off.width = w; off.height = h;
      var o = off.getContext("2d");
      draw(o, w, h);
      var rim = document.createElement("canvas"); rim.width = w; rim.height = h;
      var r = rim.getContext("2d");
      r.drawImage(off, 0, 0);
      r.globalCompositeOperation = "source-in"; r.fillStyle = col; r.fillRect(0, 0, w, h);
      [[-1.5, 0], [1.5, 0], [0, -1.5], [0, 1.5], [-1.1, -1.1], [1.1, -1.1], [-1.1, 1.1], [1.1, 1.1]].forEach(function (d) { c.drawImage(rim, d[0], d[1]); });
      c.drawImage(off, 0, 0);
    };
  }
  function drawBanana(c, w, h) {
    c.lineCap = "round";
    c.strokeStyle = "#0b0b0b"; c.lineWidth = 6; c.beginPath(); c.arc(w / 2, -2, 10, Math.PI * 0.2, Math.PI * 0.8); c.stroke();
    c.strokeStyle = "#ebe7dc"; c.lineWidth = 3.8; c.beginPath(); c.arc(w / 2, -2, 10, Math.PI * 0.2, Math.PI * 0.8); c.stroke();
    c.strokeStyle = "#0b0b0b"; c.lineWidth = 1.6; c.beginPath(); c.moveTo(w / 2 + 8, 4.5); c.lineTo(w / 2 + 10.5, 2.5); c.stroke();
  }
  function drawPeel(c, w, h) {
    c.lineCap = "round"; c.lineJoin = "round";
    var cx = w / 2, by = h - 2;
    [[-10, -1], [-5, -6], [5, -6], [10, -1]].forEach(function (q, i) {
      c.strokeStyle = "#0b0b0b"; c.lineWidth = 4.6; c.beginPath(); c.moveTo(cx, by - 3); c.quadraticCurveTo(cx + q[0] * 0.5, by - 8, cx + q[0], by + q[1]); c.stroke();
      c.strokeStyle = i % 2 ? "#d8d4c8" : "#ebe7dc"; c.lineWidth = 2.6; c.stroke();
    });
    c.fillStyle = "#0b0b0b"; c.beginPath(); c.arc(cx, by - 4, 2.4, 0, TAU); c.fill();
  }
  /* film grain: specks of light and dark, tiled over the screen and moved every frame */
  function drawGrain(c, w, h) {
    var img = c.createImageData(w, h), d = img.data, i, v, a;
    for (i = 0; i < w * h; i++) {
      if (Math.random() > 0.16) continue;
      v = Math.random() < 0.5 ? 0 : 255; a = 10 + Math.random() * 46;
      d[i * 4] = d[i * 4 + 1] = d[i * 4 + 2] = v; d[i * 4 + 3] = a;
    }
    c.putImageData(img, 0, 0);
  }
  function drawVignette(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, w * 0.28, w / 2, h / 2, w * 0.72);
    g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(0.6, "rgba(0,0,0,0.22)"); g.addColorStop(1, "rgba(0,0,0,0.72)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  /* the iris: black with a round hole of IRIS_R px and a soft edge */
  function drawIris(c, w, h) {
    c.fillStyle = "#000"; c.fillRect(0, 0, w, h);
    c.globalCompositeOperation = "destination-out";
    var g = c.createRadialGradient(w / 2, h / 2, IRIS_R - 7, w / 2, h / 2, IRIS_R + 3);
    g.addColorStop(0, "rgba(0,0,0,1)"); g.addColorStop(1, "rgba(0,0,0,0)");
    c.fillStyle = g; c.beginPath(); c.arc(w / 2, h / 2, IRIS_R + 4, 0, TAU); c.fill();
    c.globalCompositeOperation = "source-over";
  }
  function drawSoft(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,250,0.55)"); g.addColorStop(0.5, "rgba(255,255,250,0.2)"); g.addColorStop(1, "rgba(255,255,250,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  function ensureTightropeArt(scene) {
    canvasTex(scene, "md-tightrope-card", 56, 66, drawCard);
    ["run0", "run1", "cling", "sit"].forEach(function (p) { canvasTex(scene, "md-tightrope-monkey-" + p, 46, 44, outlined(drawMonkey(p), "rgba(236,232,222,0.85)")); });
    canvasTex(scene, "md-tightrope-banana", 26, 14, drawBanana);
    canvasTex(scene, "md-tightrope-peel", 28, 14, drawPeel);
    canvasTex(scene, "md-tightrope-grain", 256, 256, drawGrain);
    canvasTex(scene, "md-tightrope-vignette", 256, 256, drawVignette);
    canvasTex(scene, "md-tightrope-iris", 512, 512, drawIris);
    canvasTex(scene, "md-tightrope-soft", 128, 128, drawSoft);
  }

  /* the big top, drawn once for the canvas size: the striped canopy, the valance, the stands full of people, the
     ring, the king pole and the spotlights. G is the layout. */
  function drawBigTop(G, W, H) {
    return function (c) {
      var k = G.k, cx = G.cx, base = G.canopyY, floorY = G.floorY, i, g, x, r;
      /* the canopy: canvas stripes running down from the peak, falling away into the dark at the top */
      g = c.createLinearGradient(0, 0, 0, base);
      g.addColorStop(0, "#1e1e1d"); g.addColorStop(1, "#6e6c67");
      c.fillStyle = g; c.fillRect(0, 0, W, base);
      var peakY = -H * 0.32, nS = 26;
      for (i = 0; i < nS; i += 2) {
        var x0 = cx + (i / nS - 0.5) * W * 2.6, x1 = cx + ((i + 1) / nS - 0.5) * W * 2.6;
        g = c.createLinearGradient(0, 0, 0, base);
        g.addColorStop(0, "rgba(200,197,188,0.25)"); g.addColorStop(1, "rgba(214,211,202,0.62)");
        c.fillStyle = g; path(c, [[cx, peakY], [x0, base + 4], [x1, base + 4]]); c.closePath(); c.fill();
      }
      /* the canvas sags between the ropes: seams across the stripes */
      c.strokeStyle = "rgba(20,20,19,0.28)"; c.lineWidth = 1.5 * k;
      for (i = 1; i <= 3; i++) {
        var yy = base * i / 4;
        c.beginPath(); c.moveTo(0, yy - 6 * k); c.quadraticCurveTo(cx, yy + 22 * k, W, yy - 6 * k); c.stroke();
      }
      g = c.createLinearGradient(0, 0, 0, base);
      g.addColorStop(0, "rgba(6,6,6,0.9)"); g.addColorStop(0.35, "rgba(6,6,6,0.45)"); g.addColorStop(1, "rgba(6,6,6,0.06)");
      c.fillStyle = g; c.fillRect(0, 0, W, base);
      /* the stands: rows of people under the canopy's edge, their faces catching the ring lights */
      g = c.createLinearGradient(0, base, 0, floorY);
      g.addColorStop(0, "#151514"); g.addColorStop(1, "#2a2927");
      c.fillStyle = g; c.fillRect(0, base, W, floorY - base);
      var rows = 6;
      for (r = 0; r < rows; r++) {
        var ry = base + 12 * k + r * (floorY - base - 16 * k) / rows, sz = (2.6 + r * 0.45) * k, step = (9 + r * 1.6) * k;
        for (x = (r % 2) * step * 0.5; x < W + step; x += step) {
          var lit = 0.25 + 0.35 * (1 - Math.abs(x - cx) / (W * 0.6)) + r * 0.04, j = Math.sin(x * 12.9898 + r * 78.233) * 43758.5453; j = j - Math.floor(j);
          var gy = Math.round(clamp(lit, 0.15, 0.7) * 120 + j * 30);
          c.fillStyle = "rgb(" + gy + "," + gy + "," + (gy - 3) + ")";
          c.beginPath(); c.arc(x + (j - 0.5) * step * 0.5, ry, sz, 0, TAU); c.fill();
          c.fillRect(x + (j - 0.5) * step * 0.5 - sz * 1.4, ry + sz * 0.8, sz * 2.8, sz * 1.6);
          if (j > 0.62) { c.fillStyle = "#0c0c0c"; c.fillRect(x + (j - 0.5) * step * 0.5 - sz * 1.1, ry - sz * 1.5, sz * 2.2, sz * 0.9); c.fillRect(x + (j - 0.5) * step * 0.5 - sz * 0.7, ry - sz * 2.2, sz * 1.4, sz * 0.9); }
        }
      }
      /* the valance round the canopy's edge: scallops, light and dark, with tassels */
      var sw = 34 * k, vy = base;
      c.fillStyle = "#0e0e0e"; c.fillRect(0, vy - 6 * k, W, 8 * k);
      for (x = -sw / 2, i = 0; x < W + sw; x += sw, i++) {
        c.fillStyle = i % 2 ? "#d9d6cd" : "#3c3b38";
        c.beginPath(); c.moveTo(x, vy); c.quadraticCurveTo(x + sw / 2, vy + 22 * k, x + sw, vy); c.closePath(); c.fill();
        c.strokeStyle = "#0b0b0b"; c.lineWidth = 1.4 * k; c.stroke();
        c.strokeStyle = "#0b0b0b"; c.lineWidth = 1.2 * k; c.beginPath(); c.moveTo(x + sw, vy); c.lineTo(x + sw, vy + 16 * k); c.stroke();
        c.fillStyle = "#e9e6de"; c.beginPath(); c.arc(x + sw, vy + 17 * k, 2.4 * k, 0, TAU); c.fill();
      }
      c.fillStyle = "#e9e6de"; c.fillRect(0, vy - 5 * k, W, 1.6 * k);
      /* the ring: sawdust, the painted curb, the floor */
      g = c.createLinearGradient(0, floorY, 0, H);
      g.addColorStop(0, "#77746d"); g.addColorStop(1, "#a7a39a");
      c.fillStyle = g; c.fillRect(0, floorY, W, H - floorY);
      var rcx = cx, rcy = floorY + (H - floorY) * 0.7, rrx = W * 0.52, rry = (H - floorY) * 0.62;
      c.fillStyle = "rgba(240,236,226,0.35)"; c.beginPath(); c.ellipse(rcx, rcy, rrx * 0.96, rry * 0.9, 0, 0, TAU); c.fill();
      for (i = 0; i < 40; i++) {
        var a0 = Math.PI + i / 40 * Math.PI, a1 = Math.PI + (i + 1) / 40 * Math.PI;
        c.strokeStyle = i % 2 ? "#e8e5dc" : "#1a1a19"; c.lineWidth = 7 * k;
        c.beginPath(); c.ellipse(rcx, rcy, rrx, rry, 0, a0, a1); c.stroke();
      }
      c.fillStyle = "#0c0c0b"; c.fillRect(0, floorY - 2 * k, W, 3 * k);
      /* the king pole, guy ropes to the canopy */
      var pw = 9 * k;
      g = c.createLinearGradient(cx - pw, 0, cx + pw, 0);
      g.addColorStop(0, "#222"); g.addColorStop(0.45, "#8d8a83"); g.addColorStop(1, "#1a1a1a");
      c.fillStyle = g; c.fillRect(cx - pw / 2, 0, pw, floorY);
      c.strokeStyle = "rgba(225,222,212,0.35)"; c.lineWidth = 1 * k;
      [-0.48, -0.3, 0.3, 0.48].forEach(function (f) { c.beginPath(); c.moveTo(cx, G.cy - 40 * k); c.lineTo(cx + f * W, base - 4 * k); c.stroke(); });
      for (i = 0; i < 3; i++) { c.fillStyle = "#0e0e0e"; c.fillRect(cx - pw * 0.9, G.cy + 46 * k + i * 70 * k, pw * 1.8, 4 * k); }
      /* the spotlights from high in the canopy */
      [[G.sw + 30 * k, 0.24], [W - G.sw - 30 * k, 0.76]].forEach(function (q) {
        g = c.createLinearGradient(q[0], 0, W * q[1], floorY);
        g.addColorStop(0, "rgba(255,253,244,0.16)"); g.addColorStop(1, "rgba(255,253,244,0.02)");
        c.fillStyle = g; path(c, [[q[0] - 6 * k, 0], [q[0] + 6 * k, 0], [W * q[1] + W * 0.14, floorY], [W * q[1] - W * 0.14, floorY]]); c.closePath(); c.fill();
        c.fillStyle = "#0e0e0e"; c.beginPath(); c.ellipse(q[0], 4 * k, 14 * k, 9 * k, 0, 0, TAU); c.fill();
        c.fillStyle = "#f4f1e8"; c.beginPath(); c.ellipse(q[0], 7 * k, 8 * k, 4 * k, 0, 0, TAU); c.fill();
      });
      /* the top rope, where monkeys run (and drop bananas from level 41) */
      c.strokeStyle = "#141414"; c.lineWidth = 2.4 * k; c.beginPath(); c.moveTo(0, G.ropeY - 4 * k); c.quadraticCurveTo(cx, G.ropeY + 8 * k, W, G.ropeY - 4 * k); c.stroke();
      c.strokeStyle = "rgba(230,227,218,0.45)"; c.lineWidth = 0.8 * k; c.stroke();
    };
  }

  M.extend("tightrope", {
    name: "The Tightrope", kind: "balancing level", level: "balancing level", act: "SWAT",
    how: "A silent picture under the big top. A little tramp in a bowler hat stands on the platform at the top of the king pole. High wires run out from it to a platform on each side, and on every platform an easel holds a title card with a letter. Walk the wire to the platform with the right answer. You walk the way you lean: lean a little and he walks, lean further and he hurries. Watch the BALANCE dial: if the needle swings into the black, he falls into the net. Monkeys escape from the menagerie and run along the wire at him. Swat them with the cane before they jump on his back and tug him off balance.",
    rules: "Reaching the platform with a wrong letter costs a life (its card is crossed out: walk back and try another). So does falling off the wire, a monkey that hangs on his back too long and pulls him off, and, later, a banana dropped on his head from the top rope.",
    keys: "◀ ▶, A / D or the pad lean him (he walks the way he leans) · ▲ ▼ or W / S pick the upper or lower wire at the king pole · Space or SWAT swings the cane (press it again and again to shake off a monkey) · or hold the mouse button to the left or right of him to lean, and click him to swat.",
    tip: "THE TIGHTROPE — walk the wire to the platform with the right letter. Keep the needle out of the black, and swat the monkeys.",
    hint1: "Walk the high wire to the platform whose title card shows the right letter. The passage stays in the side panel.",
    hint2: "This question has two right letters. Walk to both platforms that show them.",
    news: ["",
      "Two monkeys can be loose at once, and the lean rights itself less: hold a key down too long and he tips toward the black, so ease off before the needle gets there.",
      "Hat over the eyes: a monkey on his back pulls the bowler down, and the picture irises in around him until you swat it off. Monkeys now hang on for two swats.",
      "The wires sway: the rigging creaks and the wire swings under him, tugging at his balance.",
      "A monkey on the top rope drops bananas. A dotted line shows where one will fall: get out from under it.",
      "Banana peels stay on the wire, and stepping on one makes him slip. Swat a peel off with the cane first.",
      "Drafts: the tent flaps blow open and a gust pushes him sideways. The pennant on the king pole shows which way. Monkeys hang on for three swats, and before long the lean stops righting itself at all: he tips over unless you hold him steady.",
      "Three monkeys can be loose at once, and they run faster.",
      "Two monkeys on the top rope drop bananas.",
      "The grand finale: it takes four swats to shake a monkey off, on top of everything else."],
    params: tightropeParams
  }, {
    tightropeParams: function (n) { return tightropeParams(n); },

    setup_tightrope: function () {
      ensureTightropeArt(this);
      var P = tightropeParams(this.night), self = this, i;
      var T = this.tr = { P: P, t: 0, wires: [], monkeys: [], bananas: [], peels: [], ropers: [], gust: { phase: "off", cd: P.gustEvery * rnd(0.5, 0.8), dir: 1, t: 0 },
        where: "center", w: -1, s: 0, th: 0, om: 0, sel: -1, face: 1, walkPh: 0, walkAmt: 0, v: 0, dist: 0, ph: [rnd(0, 6), rnd(0, 6), rnd(0, 6)],
        lastPlat: { where: "center" }, fall: null, swatT: 0, swatCd: 0, swatDir: 1, bowT: 0, hat: false, cause: null,
        monkeyCd: P.monkeyFirst, banCd: Math.min(5, P.bananaEvery), fireWas: false, ptrWas: false, ptrSwat: false, ayWas: 0,
        iris: { r: 0, x: 0, y: 0, mode: "closed" }, waitOpen: true, title: "", sub: "",
        mus: { pos: 0, next: 0, kind: "walk", ducked: false, duckAt: 0 }, told: {}, falls: 0, qFalls: 0, swats: 0, slips: 0, bonks: 0, lastFrame: -9, bgKey: null };
      this.cameras.main.setBackgroundColor("#0b0b0a");
      this.trLayout();
      T.bg = this.add.image(0, 0, T.bgKey).setOrigin(0, 0).setDepth(0);
      T.spot = this.add.image(0, 0, "md-tightrope-soft").setDepth(1).setBlendMode(1);
      T.rigG = this.add.graphics().setDepth(2);
      T.netG = this.add.graphics().setDepth(3);
      T.wireG = this.add.graphics().setDepth(4);
      T.trG = this.add.graphics().setDepth(9);
      T.fxG = this.add.graphics().setDepth(12);
      T.hint = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 14, color: PAPER, fontStyle: "bold italic", stroke: INK, strokeThickness: 4, align: "center" }).setOrigin(0.5, 0).setDepth(14);
      T.draft = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 14, color: PAPER, fontStyle: "bold", stroke: INK, strokeThickness: 4 }).setOrigin(0.5, 0.5).setDepth(14);
      T.meterG = this.add.graphics().setDepth(92);
      T.meterTx = this.add.text(0, 0, "BALANCE", { fontFamily: SERIF, fontSize: 12, color: PAPER, fontStyle: "bold", stroke: INK, strokeThickness: 3 }).setOrigin(0.5, 1).setDepth(92);
      T.irisImg = this.add.image(0, 0, "md-tightrope-iris").setDepth(90).setVisible(false);
      T.irisG = this.add.graphics().setDepth(90);
      T.titleG = this.add.graphics().setDepth(91);
      T.titleTx = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 40, color: PAPER, fontStyle: "italic", align: "center" }).setOrigin(0.5).setDepth(91);
      T.subTx = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 17, color: PAPER, align: "center" }).setOrigin(0.5).setDepth(91);
      T.tagG = this.add.graphics().setDepth(96);
      T.tagTx = this.add.text(0, 0, "", { fontFamily: SERIF, fontSize: 24, color: PAPER, fontStyle: "bold", align: "center", lineSpacing: 4 }).setOrigin(0.5).setDepth(96);
      T.grain = this.add.tileSprite(0, 0, this.W, this.H, "md-tightrope-grain").setOrigin(0, 0).setDepth(97);
      T.vig = this.add.image(0, 0, "md-tightrope-vignette").setOrigin(0, 0).setDepth(98);
      T.filmG = this.add.graphics().setDepth(98);
      T.sprG = this.add.graphics().setDepth(99);
      for (i = 0; i < 3; i++) T.ropers.push({ x: 0, tx: 0, spr: this.add.image(-99, -99, "md-tightrope-monkey-sit").setDepth(8).setVisible(false), drop: null, ph: rnd(0, 6) });
      T.scratch = [{ x: rnd(0.2, 0.8), v: rnd(-0.02, 0.02), a: 0 }, { x: rnd(0.1, 0.9), v: rnd(-0.04, 0.04), a: 0 }];
      this.trPlaceStatic();
      this.makeSol(this.W / 2, T.cy - 40, "down").setVisible(false);   /* the tramp walks; the sprite stays for coin pop-ups */
      /* the film look and the intertitles keep running under the reading card and after the level ends */
      var post = function () { try { self.trPost(); } catch (e) { if (window.console) console.error("[tightrope] post", e); } };
      this.events.on("postupdate", post);
      /* the shared bursts of sparks come out silver here, not gold (only on this scene, only while this mode runs) */
      this.burst = function (x, y, color, n) { try { this.dust.particleTint = 0xefece4; this.dust.emitParticleAt(x, y, n || 14); } catch (e) {} };
      var off = function () {
        try { self.events.off("postupdate", post); } catch (e) {}
        try { if (Object.prototype.hasOwnProperty.call(self, "burst")) delete self.burst; } catch (e3) {}
        if (self.tr && self.tr.mus.ducked && window.SolMusic && SolMusic.duck) { self.tr.mus.ducked = false; try { SolMusic.duck(false); } catch (e2) {} }
      };
      this.events.once("shutdown", off);
      this.events.once("destroy", off);
      this.trPost();
    },

    /* everything that depends on the canvas size */
    trLayout: function () {
      var T = this.tr, W = this.W, H = this.H, k;
      k = T.k = clamp(Math.min(H / 768, W / 1026), 0.6, 1.25);
      T.sw = Math.round(13 * k);                      /* the sprocket strips */
      T.cx = Math.round(W / 2); T.cy = Math.round(H * 0.4);
      T.tierY = { up: Math.round(H * 0.25), mid: T.cy, low: Math.round(H * 0.555) };
      T.pw = Math.round(84 * k);
      T.half = W / 2 - T.sw - T.pw / 2 - 6 * k;
      T.canopyY = Math.round(H * 0.64); T.floorY = Math.round(H * 0.82);
      T.netY = Math.round(H * 0.69); T.netL = T.sw + 16 * k; T.netR = W - T.sw - 16 * k;
      T.keep = this.trKeepOut();
      var topBar = 0;
      T.keep.forEach(function (b) { if (b.y0 < H * 0.12 && b.x1 > W * 0.25 && b.x0 < W * 0.75) topBar = Math.max(topBar, b.y1); });
      T.ropeY = Math.round(Math.max(H * 0.11, topBar + 40 * k));
      T.cardW = 50 * k; T.cardH = 59 * k;
      T.meter = { x: T.cx, y: H - 10 * k, r: 60 * k };
      var key = "md-tightrope-bg-" + W + "x" + H;
      if (T.bgKey !== key) {
        var old = T.bgKey;
        canvasTex(this, key, W, H, drawBigTop(T, W, H));
        T.bgKey = key;
        if (T.bg) T.bg.setTexture(key);
        if (old && old !== key) { try { this.textures.remove(old); } catch (e) {} }
      }
      var self = this;
      T.wires.forEach(function (wr) { self.trWireGeom(wr); });
    },
    /* a wire's ends: A at the king pole's platform, B at its own platform's inner edge; E where he stands there */
    trWireGeom: function (wr) {
      var T = this.tr, k = T.k, sd = wr.side, f = wr.tier === "up" ? 1 : wr.tier === "mid" ? 0.9 : 0.8, self = this;
      wr.py = T.tierY[wr.tier];
      /* in from the edge until the platform and its card are clear of the page's buttons */
      function hits(ff) {
        var px = T.cx + sd * T.half * ff, cx = px + sd * 13 * k, cy = wr.py - 7 * k - T.cardH / 2;
        var bx0 = Math.min(px - T.pw / 2, cx - T.cardW / 2) - 6 * k, bx1 = Math.max(px + T.pw / 2, cx + T.cardW / 2) + 6 * k, by0 = cy - T.cardH / 2 - 6 * k, by1 = wr.py + 18 * k;
        return (T.keep || []).some(function (b) { return b.x0 < bx1 && b.x1 > bx0 && b.y0 < by1 && b.y1 > by0; });
      }
      while (f > 0.42 && hits(f)) f -= 0.02;
      void self;
      wr.px = T.cx + sd * T.half * f;
      wr.A = { x: T.cx + sd * 17 * k, y: T.cy };
      wr.B = { x: wr.px - sd * (T.pw / 2 - 2 * k), y: wr.py };
      wr.E = { x: wr.px - sd * (T.pw / 2 - 15 * k), y: wr.py };
      wr.dx = sd;
      wr.len = Math.sqrt(Math.pow(wr.B.x - wr.A.x, 2) + Math.pow(wr.B.y - wr.A.y, 2));
      wr.cardX = wr.px + sd * 13 * k; wr.cardY = wr.py - 7 * k - T.cardH / 2;
    },
    /* the page's buttons over the canvas, in canvas pixels */
    trKeepOut: function () {
      var out = [], self = this;
      try {
        var cv = this.game && this.game.canvas, c = cv.getBoundingClientRect();
        if (!c.width || !c.height) return out;
        var fx = this.W / c.width, fy = this.H / c.height;
        KEEP_OUT.forEach(function (sel) {
          var el = document.querySelector(sel);
          if (!el || !el.offsetParent) return;
          var a = el.getBoundingClientRect();
          if (!a.width || !a.height || a.right < c.left || a.left > c.right || a.bottom < c.top || a.top > c.bottom) return;
          out.push({ x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy });
        });
      } catch (e) {}
      void self;
      return out;
    },
    trPlaceStatic: function () {
      var T = this.tr, k = T.k, W = this.W, H = this.H, self = this;
      T.bg.setPosition(0, 0);
      T.grain.setSize(W, H);
      T.vig.setDisplaySize(W, H);
      T.hint.setFontSize(Math.round(14 * k));
      T.draft.setFontSize(Math.round(15 * k));
      T.meterTx.setFontSize(Math.round(12 * k)).setPosition(T.meter.x, T.meter.y - T.meter.r - 5 * k);
      T.titleTx.setFontSize(Math.round(44 * k)); T.subTx.setFontSize(Math.round(18 * k));
      T.tagTx.setFontSize(Math.round(24 * k));
      T.wires.forEach(function (wr) {
        wr.card.setPosition(wr.cardX, wr.cardY).setScale(T.cardW / 56, T.cardH / 66);
        wr.label.setPosition(wr.cardX, wr.cardY + 1 * k).setFontSize(Math.round(32 * k));
      });
      this.trDrawRig();
      void self; void W; void H;
    },
    resize_tightrope: function () {
      var T = this.tr;
      this.trLayout();
      this.trPlaceStatic();
      T.monkeys.forEach(function (m) { if (m.state === "fly") m.state = "gone"; });
      if (T.fall) { T.fall.y = Math.min(T.fall.y, T.netY); }
    },

    /* the platforms, their poles and easels, and the king pole's platform (redrawn on a new question or a resize) */
    trDrawRig: function () {
      var T = this.tr, k = T.k, g = T.rigG, self = this;
      g.clear();
      function deck(x, y, w) {
        g.fillStyle(0x0d0d0c, 1); g.fillRect(x - w / 2, y, w, 7 * k);
        g.fillStyle(0x9d9a92, 1); g.fillRect(x - w / 2, y, w, 2.4 * k);
        /* a fringe of pennants under the deck */
        var n = Math.max(3, Math.round(w / (10 * k))), pw = w / n, i;
        for (i = 0; i < n; i++) {
          g.fillStyle(i % 2 ? 0xe4e1d8 : 0x2a2927, 1);
          g.fillTriangle(x - w / 2 + i * pw, y + 7 * k, x - w / 2 + (i + 1) * pw, y + 7 * k, x - w / 2 + (i + 0.5) * pw, y + 15 * k);
        }
      }
      /* the side platforms on their poles */
      T.wires.forEach(function (wr) {
        var x = wr.px, y = wr.py, w = T.pw;
        g.fillStyle(0x161615, 1); g.fillRect(x - 3 * k, y, 6 * k, T.floorY - y);
        g.fillStyle(0x7a776f, 1); g.fillRect(x - 1 * k, y, 1.6 * k, T.floorY - y);
        g.lineStyle(1.2 * k, 0x0e0e0e, 0.85); g.lineBetween(x, y + 30 * k, x + wr.side * 30 * k, T.floorY); g.lineBetween(x, y + 30 * k, x - wr.side * 30 * k, T.floorY);
        deck(x, y, w);
        /* the easel behind the card */
        g.lineStyle(2.4 * k, 0x111110, 1);
        g.lineBetween(wr.cardX - T.cardW * 0.32, y, wr.cardX - T.cardW * 0.12, wr.cardY - T.cardH * 0.38);
        g.lineBetween(wr.cardX + T.cardW * 0.32, y, wr.cardX + T.cardW * 0.12, wr.cardY - T.cardH * 0.38);
        g.lineBetween(wr.cardX + wr.side * 4 * k, y, wr.cardX - wr.side * 3 * k, wr.cardY);
      });
      /* the king pole's round platform with a star */
      var cx = T.cx, cy = T.cy, cw = 40 * k;
      deck(cx, cy, cw);
      g.fillStyle(0xe9e6dd, 1);
      var pts = [], i, a, r;
      for (i = 0; i < 10; i++) { a = -Math.PI / 2 + i * Math.PI / 5; r = (i % 2 ? 2.2 : 5) * k; pts.push({ x: cx + Math.cos(a) * r, y: cy + 22 * k + Math.sin(a) * r }); }
      g.fillPoints(pts, true);
      void self;
    },

    answers_tightrope: function () {
      var T = this.tr, k = T.k, self = this;
      T.wires.forEach(function (wr) { try { wr.card.destroy(); wr.label.destroy(); } catch (e) {} });
      T.wires = [];
      this.trClearHazards(true);
      var letters = this.choiceLetters().slice(0, 6), slots = SLOTS[letters.length] || SLOTS[4];
      letters.forEach(function (Lt, i) {
        var sl = slots[i] || slots[slots.length - 1];
        var wr = { letter: Lt, side: sl[0], tier: sl[1], state: "live" };
        self.trWireGeom(wr);
        wr.card = self.add.image(wr.cardX, wr.cardY, "md-tightrope-card").setDepth(5);
        wr.label = self.add.text(wr.cardX, wr.cardY, Lt, { fontFamily: SERIF, fontSize: Math.round(32 * k), color: PAPER, fontStyle: "bold" }).setOrigin(0.5).setDepth(6);
        if (self.extracted.indexOf(Lt) !== -1) wr.state = "found";
        T.wires.push(wr);
        self.trPaint(wr);
      });
      /* he starts each question on the king pole's platform, facing the wires on the right; the picture irises in */
      T.where = "center"; T.w = -1; T.s = 0; T.th = 0; T.om = 0; T.v = 0; T.face = 1; T.hat = false; T.fall = null; T.bowT = 0;
      T.lastPlat = { where: "center" };
      T.sel = this.trTiers().indexOf("up") !== -1 ? -1 : 0;
      T.qFalls = 0; T.cause = null;
      T.monkeyCd = T.P.monkeyFirst; T.banCd = Math.min(5, T.P.bananaEvery);
      T.iris.r = 0; T.iris.mode = "closed"; T.waitOpen = true;
      T.title = "The Tightrope";
      T.sub = "Level " + this.night + "  ·  Act " + (ROMAN[this.round] || this.round);
      this.trPlaceStatic();
    },
    trPaint: function (wr) {
      var dead = wr.state === "dead", found = wr.state === "found";
      wr.card.setTint(dead ? 0x6a6864 : 0xffffff);
      wr.label.setText(dead ? "✕" : found ? "✓" : wr.letter).setColor(dead ? "#9a978f" : PAPER);
    },
    /* the tiers that have wires, top to bottom */
    trTiers: function () {
      var out = [];
      ["up", "mid", "low"].forEach(function (t) { if (this.tr.wires.some(function (w) { return w.tier === t; })) out.push(t); }, this);
      return out;
    },
    /* the wire on this side nearest the picked tier */
    trWireFor: function (side) {
      var T = this.tr, best = -1, bd = 9;
      T.wires.forEach(function (wr, i) { if (wr.side !== side) return; var d = Math.abs(TIERS[wr.tier] - T.sel); if (d < bd) { bd = d; best = i; } });
      return best;
    },
    trWireOf: function (Lt) { for (var i = 0; i < this.tr.wires.length; i++) if (this.tr.wires[i].letter === Lt) return i; return -1; },

    /* a point on wire i at s (0 at the king pole, 1 at its platform): the wire dips under his feet and sways */
    trWirePt: function (i, s) {
      var T = this.tr, wr = T.wires[i], x = wr.A.x + (wr.B.x - wr.A.x) * s, y = wr.A.y + (wr.B.y - wr.A.y) * s;
      y += this.trSwayY(s);
      if (T.where === "wire" && T.w === i && !T.fall) {
        var dip = this.trDip(), ts = T.s;
        y += s <= ts ? (ts > 0 ? dip * s / ts : 0) : (ts < 1 ? dip * (1 - s) / (1 - ts) : 0);
      } else y += 2.5 * T.k * 4 * s * (1 - s);
      return { x: x, y: y };
    },
    trSwayY: function (s) { var T = this.tr; return T.P.sway ? T.P.sway * 7 * T.k * Math.sin(T.t * 1.9) * 4 * s * (1 - s) : 0; },
    trDip: function () { var T = this.tr; return 9 * T.k * Math.sqrt(Math.max(0, 4 * T.s * (1 - T.s))) + 2 * T.k; },
    /* where his feet are */
    trFeet: function () {
      var T = this.tr;
      if (T.fall) return { x: T.fall.x, y: T.fall.y };
      if (T.where === "center") return { x: T.cx, y: T.cy };
      var wr = T.wires[T.w];
      if (!wr) return { x: T.cx, y: T.cy };
      if (T.where === "end") return { x: wr.E.x, y: wr.E.y };
      return this.trWirePt(T.w, T.s);
    },
    /* the middle of his body (for swats, bananas and coins) */
    trBody: function () {
      var T = this.tr, f = this.trFeet(), a = T.fall ? T.fall.rot : T.th * LEAN_ROT, h = 36 * TS * T.k;
      return { x: f.x + Math.sin(a) * h, y: f.y - Math.cos(a) * h };
    },
    /* put him somewhere (for the tests, and after a fall) */
    trPlace: function (where, w, s) {
      var T = this.tr;
      T.where = where; T.w = where === "center" ? -1 : w; T.s = where === "end" ? 1 : where === "center" ? 0 : clamp(s, 0.01, 0.99);
      T.th = 0; T.om = 0; T.v = 0; T.fall = null;
    },

    tick_tightrope: function (s, inp, ms) {
      var T = this.tr, P = T.P, k = T.k, self = this, frame = this.game && this.game.loop ? this.game.loop.frame : 0;
      var gap = frame !== T.lastFrame + 1;
      T.lastFrame = frame;
      T.t += s;
      if (T.waitOpen) { T.waitOpen = false; T.iris.mode = "open"; if (!T.told.start) { T.told.start = true; this.toast("Lean ▶ to walk out along the wire (◀ for the left side). ▲ ▼ pick the upper or lower wire. Keep the BALANCE needle out of the black!", 6000); } }
      if (T.swatCd > 0) T.swatCd -= s;
      if (T.swatT > 0) T.swatT -= s;
      if (T.bowT > 0) T.bowT -= s;
      T.dist = 0;

      /* input: the lean (keys, pad, or the mouse held left or right of him) */
      var u = inp.ax, p = this.ptr, fireKey = !!(this.keys.SPACE.isDown || (inp.fire && !p.down));
      var body = this.trBody();
      if (p.down && !T.ptrWas && !gap) {
        var near = Math.abs(p.x - body.x) < 38 * k && Math.abs(p.y - body.y) < 54 * k;
        T.ptrSwat = near;
        if (near) this.trSwat();
        else if (T.where === "center") this.trPointerPick(p.x, p.y);
      }
      if (!p.down) T.ptrSwat = false;
      if (p.down && !T.ptrSwat && inp.ptr) {
        var dx = p.x - body.x;
        if (Math.abs(dx) > 14 * k) u = clamp(dx / (120 * k), -1, 1);
        if (T.where === "center" && Math.abs(dx) > 40 * k) this.trPointerPick(p.x, p.y);
      }
      T.ptrWas = p.down;
      /* the cane: Space or SWAT (a press, not a hold) */
      if (fireKey && !T.fireWas && !gap) this.trSwat();
      T.fireWas = fireKey;
      /* ▲ ▼ at the king pole pick the upper or lower wire */
      if (inp.ay && inp.ay !== T.ayWas && T.where === "center") {
        var tiers = this.trTiers().map(function (t) { return TIERS[t]; }), j = tiers.indexOf(T.sel);
        if (j === -1) j = 0;
        j = clamp(j + inp.ay, 0, tiers.length - 1);
        if (tiers[j] !== T.sel) { T.sel = tiers[j]; this.trSfx("tick"); }
      }
      T.ayWas = inp.ay;

      /* the hazards first: what they push on his lean (T.dist) goes into this step's balance */
      if (!this._between && !T.fall) {
        this.trMonkeys(s, ms);
        this.trBananas(s, ms);
        this.trGust(s);
      } else this.trMonkeysIdle(s);
      if (this._finishing) return;
      if (T.fall) { this.trFallStep(s); }
      else if (!this._between) this.trBalance(s, u);
      else { T.th *= Math.max(0, 1 - 4 * s); T.om = 0; T.v = 0; }
      if (this._finishing) return;
      if (this._between && T.iris.mode !== "closed") T.iris.mode = "closed";   /* iris out on him tipping his hat */
      if (!this._between && !T.fall) T.iris.mode = T.hat ? "hat" : "open";
      this.trMusic(s);
      this.trDraw(s);
    },

    /* the lean and the walk */
    trBalance: function (s, u) {
      var T = this.tr, P = T.P, k = T.k;
      if (T.where === "wire") {
        var wob = Math.sin(T.t * 1.3 + T.ph[0]) * 0.5 + Math.sin(T.t * 2.9 + T.ph[1]) * 0.3 + Math.sin(T.t * 5.3 + T.ph[2]) * 0.2;
        var wf0 = this.trWalkF(T.th);
        if (P.sway) T.dist += P.sway * 0.9 * Math.cos(T.t * 1.9) * 4 * T.s * (1 - T.s);
        var acc = P.tip * T.th + P.push * u - P.damp * T.om + P.wobble * wob * (0.55 + 0.45 * Math.abs(wf0)) + T.dist;
        T.om = clamp(T.om + acc * s, -4, 4);
        T.th += T.om * s;
        if (Math.abs(T.th) >= 1) { this.trFall(); return; }
        if (Math.abs(T.th) > RED && !T.told.red) { T.told.red = true; this.toast("Teetering! Lean the other way (◀ ▶) to bring the needle out of the black.", 3200); }
        var wf = this.trWalkF(T.th), wr = T.wires[T.w], s0 = T.s;
        T.v = P.walk * k * wf;
        T.s += T.v * wr.dx * s / wr.len;
        if (Math.abs(wf) > 0.05) T.face = wf > 0 ? 1 : -1;
        T.walkPh += Math.abs(T.v) * s * 0.11 / k; T.walkAmt = Math.min(1, Math.abs(wf) * 1.5);
        /* a banana peel underfoot */
        var self = this;
        T.peels.slice().forEach(function (pe) {
          if (pe.w !== T.w || pe.state !== "on") return;
          var r = 7 * k / wr.len;
          if ((s0 - pe.s) * (T.s - pe.s) <= 0 || Math.abs(T.s - pe.s) < r * 0.5) self.trSlip(pe);
        });
        if (T.fall) return;
        if (T.s >= 1) this.trArrive(T.w);
        else if (T.s <= 0) this.trArrive(-1);
      } else {
        /* on a platform he is steady: the lean follows the keys, and leaning toward a wire steps onto it */
        T.th += (u * 0.45 - T.th) * Math.min(1, 7 * s); T.om = 0; T.v = 0; T.walkAmt = 0;
        if (u) T.face = u > 0 ? 1 : -1;
        if (Math.abs(T.th) > 0.3 && u) {
          if (T.where === "center") {
            var wi = this.trWireFor(u > 0 ? 1 : -1);
            if (wi >= 0) { T.lastPlat = { where: "center" }; T.where = "wire"; T.w = wi; T.s = 0.012; T.th = Math.sign(u) * 0.3; T.om = 0; }
          } else if (T.where === "end") {
            var we = T.wires[T.w];
            if (u * we.dx < 0) { T.lastPlat = { where: "end", w: T.w }; T.where = "wire"; T.s = 0.988; T.th = Math.sign(u) * 0.3; T.om = 0; }
          }
        }
      }
    },
    /* walking pace (-1 … 1) for a lean */
    trWalkF: function (th) { var a = Math.abs(th); return (th < 0 ? -1 : 1) * clamp((a - DZ) / (WF - DZ), 0, 1); },

    /* he steps onto a platform: the king pole's (i = -1) or a letter's, which answers with that letter */
    trArrive: function (i) {
      var T = this.tr, k = T.k;
      T.th *= 0.3; T.om = 0; T.v = 0;
      if (i < 0) { T.where = "center"; T.w = -1; T.s = 0; T.lastPlat = { where: "center" }; return null; }
      var wr = T.wires[i];
      T.where = "end"; T.w = i; T.s = 1; T.lastPlat = { where: "end", w: i };
      if (wr.state !== "live") {
        this.toast(wr.state === "dead" ? "That card is crossed out. Walk back to the king pole and try another wire." : "You already found that letter. Find the other right one.", 3000);
        return "old";
      }
      var clean = !T.qFalls && !this.claimWrong;
      var res = this.answerPick(wr.letter, wr.E.x, wr.E.y - 80 * k);
      if (res === "wrong") {
        wr.state = "dead"; this.trPaint(wr);
        this.trSfx("wrong");
        if (!T.told.wrong) { T.told.wrong = true; this.toast("Wrong card! Walk back to the king pole (lean the other way) and try another wire.", 3600); }
      } else if (res === "partial") {
        wr.state = "found"; this.trPaint(wr); T.bowT = 0.9; this.trSfx("right");
      } else if (res === "done") {
        wr.state = "found"; this.trPaint(wr); T.bowT = 1.0; this.trSfx("right");
        if (clean && !this.ended) this.awardBonusPoints(800, "A clean act: not one fall");
      }
      return res;
    },

    /* ── falling into the net ── */
    trFall: function (label) {
      var T = this.tr, k = T.k, f = this.trFeet();
      if (T.fall) return false;
      var cause = label || (T.cause && T.cause.until > T.t ? T.cause.label : (T.monkeys.some(function (m) { return m.state === "cling"; }) ? "A MONKEY PULLED YOU OFF THE WIRE" :
        (T.gust.phase === "blow" ? "A GUST BLEW YOU OFF THE WIRE" : "YOU FELL INTO THE NET")));
      var dir = T.th >= 0 ? 1 : -1;
      T.fall = { t: 0, x: f.x, y: f.y, vx: dir * 70 * k, vy: -120 * k, rot: T.th * LEAN_ROT, spin: dir * 7, bounces: 0, phase: "drop", landX: 0, sag: 0, label: cause };
      T.falls += 1; T.qFalls += 1; T.hat = false; T.cause = null;
      T.title = "Into the Net!"; T.sub = "…and up the ladder again.";
      var self = this;
      T.monkeys.forEach(function (m) { if (m.state === "cling") self.trKnockOff(m, true); });
      this.trSfx("fall");
      this.loseLife("hit", cause);
      return true;
    },
    trFallStep: function (s) {
      var T = this.tr, F = T.fall, k = T.k;
      if (!F) return;
      F.t += s;
      if (F.phase === "drop" || F.phase === "bounce") {
        F.vy += 980 * k * s; F.x += F.vx * s; F.y += F.vy * s; F.rot += F.spin * s;
        F.x = clamp(F.x, T.netL + 20 * k, T.netR - 20 * k);
        if (F.y >= T.netY && F.vy > 0) {
          F.y = T.netY; F.landX = F.x; F.sag = Math.min(26 * k, F.vy * 0.05);
          F.bounces += 1; F.vy = -F.vy * (F.bounces === 1 ? 0.5 : 0.35); F.vx *= 0.4; F.spin *= 0.5;
          if (F.bounces === 1) this.trSfx("boing");
          if (F.bounces >= 3) { F.phase = "rest"; F.vy = 0; F.vx = 0; F.t = 0; }
          else F.phase = "bounce";
        }
      } else if (F.phase === "rest") {
        F.rot += (Math.PI / 2 * (F.rot >= 0 ? 1 : -1) - F.rot) * Math.min(1, 6 * s);
        if (F.t > 0.35) T.iris.mode = "closed";
        if ((F.t > 0.35 && T.iris.r < 4 || F.t > 1.1) && !this._finishing && !this.ended) {
          /* he climbs back up to the platform he left */
          var lp = T.lastPlat;
          T.fall = null;
          if (lp.where === "end" && T.wires[lp.w]) this.trPlace("end", lp.w); else this.trPlace("center");
          T.iris.mode = "open";
          this.trClearHazards(false);
        }
      }
      F.sag *= Math.max(0, 1 - 5 * s);
    },

    /* ── the cane ── */
    trSwat: function () {
      var T = this.tr, P = T.P, k = T.k, self = this;
      if (T.swatCd > 0 || T.fall || this._between || this._finishing) return 0;
      T.swatT = 0.3; T.swatCd = 0.2; T.swats += 1;
      this.trSfx("swish");
      var hits = 0, cl = null;
      T.monkeys.forEach(function (m) { if (m.state === "cling") cl = m; });
      if (cl) {
        cl.grip -= 1; T.swatDir = -cl.side;
        if (cl.grip <= 0) { this.trKnockOff(cl); hits++; }
        else { this.trSfx("thwack"); this.toast("Again! Keep swatting to shake it off (" + cl.grip + " more).", 1800); }
      } else {
        var best = null, bd = 1e9;
        T.monkeys.forEach(function (m) {
          if (m.state !== "run" && m.state !== "climb") return;
          var d = self.trPathDist(m);
          if (d <= P.reach * k) { self.trKnockOff(m); hits++; }
          else if (d < bd) { bd = d; best = m; }
        });
        T.peels.forEach(function (pe) {
          if (pe.state !== "on") return;
          var wr = T.wires[pe.w], d = T.where === "wire" && pe.w === T.w ? Math.abs(pe.s - T.s) * wr.len : T.where === "end" && pe.w === T.w ? (1 - pe.s) * wr.len : T.where === "center" ? pe.s * wr.len : 1e9;
          if (d <= P.reach * k) { self.trPeelOff(pe); hits++; }
        });
        if (!hits && best && !T.told.reach) { T.told.reach = true; this.toast("Too far! Wait until the monkey is close (about a cane's length), then swat.", 2600); }
      }
      if (T.where === "wire") T.om += (Math.random() < 0.5 ? -1 : 1) * P.swatJolt;
      return hits;
    },
    /* how far a monkey is from him along the wires, px */
    trPathDist: function (m) {
      var T = this.tr, wm = T.wires[m.w], lm = wm ? wm.len : 0;
      if (m.state === "climb") return 1e9;
      if (T.where === "center") return m.s * lm;
      var ts = T.where === "end" ? 1 : T.s, lt = T.wires[T.w] ? T.wires[T.w].len : 0;
      if (m.w === T.w) return Math.abs(ts - m.s) * lm;
      return m.s * lm + ts * lt;
    },

    /* ── monkeys ── */
    trSpawnMonkey: function (opt) {
      var T = this.tr, k = T.k;
      opt = opt || {};
      if (!T.wires.length) return null;
      var w, s;
      if (opt.w != null) { w = opt.w; s = opt.s != null ? opt.s : 1; }
      else if (T.where === "wire") { w = T.w; s = T.s < 0.5 ? 1 : 0; }
      else if (T.where === "end") { w = T.w; s = 0; }
      else { w = Math.floor(Math.random() * T.wires.length); s = 1; }
      var m = { w: w, s: s, state: opt.run ? "run" : "climb", t: 0, grip: T.P.grip, side: Math.random() < 0.5 ? -1 : 1, cling: 0, tugCd: rnd(0.4, 0.8), ph: rnd(0, 6), x: 0, y: 0, dir: 1, vx: 0, vy: 0, rot: 0, b: 0,
        spr: this.add.image(-99, -99, "md-tightrope-monkey-run0").setDepth(8).setScale(k * 1.15) };
      T.monkeys.push(m);
      this.trSfx("chatter");
      if (!T.told.monkey) { T.told.monkey = true; this.toast("A monkey is loose! It's coming along the wire. When it's close, swat it with the cane (Space or SWAT).", 4600); }
      return m;
    },
    trMonkeys: function (s, ms) {
      var T = this.tr, P = T.P, k = T.k, self = this;
      var live = T.monkeys.filter(function (m) { return m.state === "climb" || m.state === "run" || m.state === "cling"; }).length;
      T.monkeyCd -= s;
      if (T.monkeyCd <= 0) {
        if (live < P.monkeys && T.iris.mode !== "closed") this.trSpawnMonkey();
        T.monkeyCd = P.monkeyEvery * rnd(0.8, 1.2);
      }
      T.monkeys.slice().forEach(function (m) {
        m.t += s;
        var wr = T.wires[m.w];
        if (!wr && m.state !== "fly" && m.state !== "gone") { m.state = "gone"; }
        if (m.state === "climb") {
          if (m.t >= 0.9) { m.state = "run"; m.t = 0; }
        } else if (m.state === "run") {
          var step = P.monkeySp * k * s / wr.len, d;
          if (T.where === "center") { m.s = Math.max(0, m.s - step); m.dir = -wr.dx; }
          else {
            var ts = T.where === "end" ? 1 : T.s;
            if (m.w === T.w) { d = ts - m.s; m.s += clamp(d, -step, step); m.dir = (d >= 0 ? 1 : -1) * wr.dx; }
            else { m.s -= step; m.dir = -wr.dx; if (m.s <= 0) { var nw = T.wires[T.w]; m.s = 0; m.w = T.w; m.dir = nw.dx; } }
          }
          if (self.trPathDist(m) < 13 * k) self.trCling(m);
        } else if (m.state === "cling") {
          if (T.where === "wire") {
            m.cling += ms;
            T.dist += m.side * P.bias;
            m.tugCd -= s;
            if (m.tugCd <= 0) { m.tugCd = rnd(0.5, 1.1); T.om += (Math.random() < 0.7 ? m.side : -m.side) * P.tug; self.trSfx("chatter"); }
            if (m.cling >= P.clingMs) { T.om += m.side * 3; self.trFall("A MONKEY PULLED YOU OFF THE WIRE"); }
          }
          if (P.hatDelay < 99999 && m.t * 1000 >= P.hatDelay && !T.hat) {
            T.hat = true;
            if (!T.told.hat) { T.told.hat = true; self.toast("The monkey pulled your hat over your eyes! Swat it off (Space) to see again.", 3600); }
          }
        }
        self.trMonkeyMove(m, s);
      });
      T.monkeys = T.monkeys.filter(function (m) { if (m.state === "gone") { try { m.spr.destroy(); } catch (e) {} return false; } return true; });
      if (!T.monkeys.some(function (m) { return m.state === "cling"; })) T.hat = false;
    },
    /* between questions and while he falls, monkeys already knocked off finish their tumble */
    trMonkeysIdle: function (s) {
      var T = this.tr, self = this;
      T.monkeys.forEach(function (m) { if (m.state === "fly") self.trMonkeyMove(m, s); });
      T.monkeys = T.monkeys.filter(function (m) { if (m.state === "gone") { try { m.spr.destroy(); } catch (e) {} return false; } return true; });
      T.bananas.forEach(function (b) { if (b.phase === "drop") self.trBananaMove(b, s); });
    },
    trCling: function (m) {
      var T = this.tr, P = T.P;
      m.state = "cling"; m.t = 0; m.cling = 0; m.tugCd = rnd(0.5, 0.9);
      if (T.where === "wire") T.om += m.side * P.tug;
      this.trSfx("chatter");
      if (!T.told.cling) { T.told.cling = true; this.toast("A monkey jumped on your back! Swat it off (Space, SWAT or click him) before it pulls you off the wire.", 4200); }
    },
    trKnockOff: function (m, quiet) {
      var T = this.tr, k = T.k, b = this.trBody(), d;
      if (m.state !== "cling") { var p = this.trMonkeyXY(m); m.x = p.x; m.y = p.y; d = m.x >= b.x ? 1 : -1; }
      else { m.x = m.spr.x; m.y = m.spr.y; d = -T.face; }
      m.state = "fly"; m.t = 0; m.vx = d * rnd(110, 170) * k; m.vy = -rnd(200, 260) * k; m.rot = 0; m.b = 0;
      if (!quiet) {
        this.trSfx("thwack"); this.trSfx("shriek");
        this.burst(m.x, m.y, 0xefece4, 10);
        this.addKill(m.x, m.y, "Twelve monkeys swatted");
      }
      if (!T.monkeys.some(function (o) { return o !== m && o.state === "cling"; })) T.hat = false;
    },
    trMonkeyXY: function (m) {
      var T = this.tr, k = T.k, wr = T.wires[m.w];
      if (!wr) return { x: m.x, y: m.y };
      if (m.state === "climb") {
        var u = clamp(m.t / 0.9, 0, 1), top = m.s >= 0.5 ? wr.B : { x: T.cx + 10 * k * wr.dx, y: T.cy };
        return { x: top.x, y: top.y + (1 - u) * 70 * k };
      }
      return this.trWirePt(m.w, m.s);
    },
    trMonkeyMove: function (m, s) {
      var T = this.tr, k = T.k, spr = m.spr, p;
      if (m.state === "fly") {
        m.t += s; m.vy += 900 * k * s; m.x += m.vx * s; m.y += m.vy * s; m.rot += (m.vx > 0 ? 9 : -9) * s;
        if (m.y >= T.netY - 4 * k && m.vy > 0) { m.y = T.netY - 4 * k; m.vy = -m.vy * 0.45; m.b += 1; if (m.b === 1) this.trSfx("boing2"); }
        if (m.b >= 2 || m.t > 2.2) spr.setAlpha(Math.max(0, spr.alpha - 2.5 * s));
        if (spr.alpha <= 0.02 || m.x < -40 || m.x > this.W + 40) m.state = "gone";
        spr.setTexture("md-tightrope-monkey-cling").setPosition(m.x, m.y).setRotation(m.rot).setFlipX(m.vx < 0).setOrigin(0.5, 0.5);
        return;
      }
      if (m.state === "cling") {
        var f = this.trFeet(), a = T.th * LEAN_ROT, lx = -T.face * 6 * TS * k, ly = -50 * TS * k;
        var wig = Math.sin(T.t * 13 + m.ph) * 2 * k;
        spr.setTexture("md-tightrope-monkey-cling").setOrigin(0.5, 0.6).setFlipX(T.face < 0).setDepth(10)
          .setPosition(f.x + lx * Math.cos(a) - ly * Math.sin(a) + wig, f.y + lx * Math.sin(a) + ly * Math.cos(a)).setRotation(a + Math.sin(T.t * 9 + m.ph) * 0.15);
        return;
      }
      p = this.trMonkeyXY(m);
      var hop = m.state === "run" ? Math.abs(Math.sin(T.t * 11 + m.ph)) * 4 * k : 0;
      spr.setTexture(m.state === "climb" ? "md-tightrope-monkey-cling" : (Math.floor(T.t * 9 + m.ph) % 2 ? "md-tightrope-monkey-run0" : "md-tightrope-monkey-run1"))
        .setOrigin(0.5, 0.95).setPosition(p.x, p.y - hop + (m.state === "climb" ? 20 * k : 0)).setRotation(0).setFlipX(m.dir < 0).setDepth(8);
    },
    /* new question, or after a fall: monkeys and bananas go away (peels too on a new question) */
    trClearHazards: function (all) {
      var T = this.tr;
      T.monkeys.forEach(function (m) { try { m.spr.destroy(); } catch (e) {} });
      T.monkeys = []; T.hat = false;
      T.bananas.forEach(function (b) { try { b.spr.destroy(); } catch (e) {} });
      T.bananas = [];
      T.ropers.forEach(function (r) { r.drop = null; });
      if (all) { T.peels.forEach(function (p) { try { p.spr.destroy(); } catch (e) {} }); T.peels = []; }
      T.monkeyCd = Math.max(T.monkeyCd, T.P.monkeyFirst * 0.6);
      T.gust.phase = "off"; T.gust.cd = Math.max(T.gust.cd, 4);
    },

    /* ── bananas from the top rope (level 41 on) ── */
    trBananas: function (s, ms) {
      var T = this.tr, P = T.P, self = this;
      if (P.ropers) {
        T.banCd -= s;
        if (T.banCd <= 0 && T.iris.mode !== "closed") {
          T.banCd = P.bananaEvery * rnd(0.85, 1.15);
          this.trDropBanana();
        }
      }
      T.bananas.slice().forEach(function (b) { self.trBananaMove(b, s); });
      T.bananas = T.bananas.filter(function (b) { if (b.phase === "gone") { try { b.spr.destroy(); } catch (e) {} return false; } return true; });
    },
    /* a monkey on the top rope picks a spot just ahead of him and drops a banana there after the warning */
    trDropBanana: function (at) {
      var T = this.tr, P = T.P, k = T.k, i, r = null;
      for (i = 0; i < Math.max(1, P.ropers); i++) if (!T.ropers[i].drop) { r = T.ropers[i]; break; }
      if (!r) return null;
      var tg;
      if (at) tg = at;
      else if (T.where === "wire") {
        var wr = T.wires[T.w], ahead = T.v * wr.dx * (P.warnMs / 1000 + 0.5) * 0.5 / wr.len, ss = clamp(T.s + ahead, 0.06, 0.94);
        tg = { w: T.w, s: ss };
      } else tg = { w: T.where === "end" ? T.w : -1, s: T.where === "end" ? 1 : 0, plat: true };
      var pt = tg.plat ? (tg.w >= 0 ? T.wires[tg.w].E : { x: T.cx, y: T.cy }) : this.trWirePt(tg.w, tg.s);
      var b = { phase: "warn", t: 0, tx: pt.x, ty: pt.y, w: tg.plat ? -1 : tg.w, s: tg.s, roper: r, x: pt.x, y: T.ropeY, vy: 0, hit: false,
        spr: this.add.image(-99, -99, "md-tightrope-banana").setDepth(8).setScale(k).setVisible(false) };
      r.drop = b; r.tx = pt.x;
      T.bananas.push(b);
      this.trSfx("chatter");
      if (!T.told.banana) { T.told.banana = true; this.toast("A monkey on the top rope is dropping a banana! Get out from under the dotted line.", 4000); }
      return b;
    },
    trBananaMove: function (b, s) {
      var T = this.tr, P = T.P, k = T.k;
      b.t += s * 1000;
      if (b.phase === "warn") {
        if (b.t >= P.warnMs) { b.phase = "fall"; b.t = 0; b.spr.setVisible(true); b.y = T.ropeY + 10 * k; b.vy = 60 * k; this.trSfx("whistle"); }
      } else if (b.phase === "fall") {
        b.vy += 1300 * k * s; b.y += b.vy * s;
        b.spr.setPosition(b.x, b.y).setRotation(b.t * 0.012);
        var body = this.trBody(), f = this.trFeet();
        if (!T.fall && Math.abs(body.x - b.x) < 22 * k && b.y >= f.y - 90 * k && b.y <= f.y - 24 * k && !b.hit) {
          b.hit = true; b.phase = "drop"; b.vy = -180 * k; b.vx = (Math.random() < 0.5 ? -1 : 1) * 90 * k; if (b.roper) b.roper.drop = null;
          T.bonks += 1;
          this.trSfx("bonk");
          this.burst(b.x, b.y, 0xefece4, 8);
          this.loseLife("hit", "A BANANA BONKED YOU");
          if (T.where === "wire") T.om += (Math.random() < 0.5 ? -1 : 1) * 0.6;
          return;
        }
        if (b.y >= b.ty) {
          if (b.roper) b.roper.drop = null;
          if (P.peels && b.w >= 0 && T.wires[b.w]) {
            /* it lands on the wire and stays: a peel */
            b.phase = "gone";
            var pe = { w: b.w, s: b.s, state: "on", spr: this.add.image(-99, -99, "md-tightrope-peel").setDepth(7).setScale(k).setOrigin(0.5, 0.85) };
            T.peels.push(pe);
            if (!T.told.peel) { T.told.peel = true; this.toast("A banana peel on the wire! Step on it and you slip. Swat it off with the cane when you're close.", 4000); }
          } else { b.phase = "drop"; b.vx = 0; }
        }
      } else if (b.phase === "drop") {
        b.vy += 1300 * k * s; b.y += b.vy * s; b.x += (b.vx || 0) * s;
        b.spr.setPosition(b.x, b.y).setRotation(b.spr.rotation + 8 * s);
        if (b.y > T.netY) b.phase = "gone";
      }
    },
    trSlip: function (pe) {
      var T = this.tr, dir = T.v !== 0 ? (T.v > 0 ? 1 : -1) : T.face;
      T.om += dir * 2.6;
      T.slips += 1;
      T.cause = { label: "YOU SLIPPED ON A BANANA PEEL", until: T.t + 2 };
      this.trPeelOff(pe);
      this.trSfx("slip");
      if (!T.told.slip) { T.told.slip = true; this.toast("Whoops, a banana peel! Next time swat it off the wire before you step on it.", 3200); }
    },
    trPeelOff: function (pe) {
      var p = this.trWirePt(pe.w, pe.s);
      pe.state = "off";
      var b = { phase: "drop", t: 0, x: p.x, y: p.y, vy: -150 * this.tr.k, vx: (Math.random() < 0.5 ? -1 : 1) * 80 * this.tr.k, spr: pe.spr.setTexture("md-tightrope-peel") };
      this.tr.bananas.push(b);
      this.tr.peels = this.tr.peels.filter(function (o) { return o !== pe; });
    },

    /* ── drafts (level 61 on) ── */
    trGust: function (s) {
      var T = this.tr, P = T.P, G = T.gust;
      if (!P.gust) return;
      G.t += s;
      if (G.phase === "off") {
        G.cd -= s;
        if (G.cd <= 0) { G.phase = "warn"; G.t = 0; G.dir = Math.random() < 0.5 ? -1 : 1; this.trSfx("wind"); if (!T.told.gust) { T.told.gust = true; this.toast("A draft is coming through the tent flaps! The pennant shows which way: lean against it.", 3800); } }
      } else if (G.phase === "warn") {
        if (G.t >= 1.3) { G.phase = "blow"; G.t = 0; }
      } else if (G.phase === "blow") {
        if (T.where === "wire") T.dist += G.dir * P.gust * (0.6 + 0.4 * Math.sin(G.t * 3));
        if (G.t >= 2.6) { G.phase = "off"; G.cd = P.gustEvery * rnd(0.85, 1.15); }
      }
    },

    /* ── the mouse at the king pole: the wire nearest the pointer ── */
    trPointerPick: function (x, y) {
      var T = this.tr, side = x >= T.cx ? 1 : -1, best = null, bd = 1e9;
      T.wires.forEach(function (wr) {
        if (wr.side !== side) return;
        var my = wr.A.y + (wr.B.y - wr.A.y) * clamp((x - wr.A.x) / (wr.B.x - wr.A.x), 0, 1);
        var d = Math.min(Math.abs(y - my), Math.abs(y - wr.cardY));
        if (d < bd) { bd = d; best = wr; }
      });
      if (best && TIERS[best.tier] !== T.sel) { T.sel = TIERS[best.tier]; this.trSfx("tick"); }
    },

    /* ── the piano: a jaunty promenade, and an agitato when he teeters or a monkey is on him ── */
    trMusic: function (s) {
      var T = this.tr, Mu = T.mus, Rm = window.SolRealms;
      var peril = !!T.fall || Math.abs(T.th) > 0.66 || T.monkeys.some(function (m) { return m.state === "cling"; }) || T.gust.phase === "blow";
      var kind = peril ? "peril" : "walk";
      if (kind !== Mu.kind) { Mu.kind = kind; Mu.pos = Math.floor(Mu.pos / 8) * 8; Mu.next = Mu.pos; }
      var bpm = kind === "peril" ? 168 : 116;
      Mu.pos += s * bpm / 60 * 2;
      var guard = 0;
      while (Mu.next <= Mu.pos && guard++ < 4) { this.trNote(kind, Mu.next); Mu.next += 1; }
      if (Mu.next < Mu.pos - 2) Mu.next = Math.ceil(Mu.pos);
      /* the level's own background track stays low under the piano */
      var now = Date.now();
      if (window.SolMusic && SolMusic.duck && (!Mu.ducked || now - Mu.duckAt > 500)) { Mu.ducked = true; Mu.duckAt = now; try { SolMusic.duck(true); } catch (e) {} }
      void Rm;
    },
    trNote: function (kind, i) {
      var Rm = window.SolRealms;
      if (!Rm || !Rm.blip) return;
      function key(n, dur, vol) {
        var f = 440 * Math.pow(2, (n - 69) / 12);
        Rm.blip(f, f * 0.996, dur, "triangle", vol);
        Rm.blip(f * 1.006, f * 1.002, dur * 0.8, "triangle", vol * 0.45);   /* a honky-tonk detune */
        Rm.blip(f * 2, f * 2, dur * 0.35, "sine", vol * 0.22);
      }
      try {
        if (kind === "walk") {
          var bar = Math.floor(i / 8) % 8, e = i % 8, ch = WALK_CH[bar], mel = WALK_MEL[bar][e];
          if (mel) key(mel, 0.28, 0.03);
          if (e === 0) key(ch[0], 0.4, 0.034);
          else if (e === 4) key(ch[1], 0.4, 0.03);
          else if (e === 2 || e === 6) { key(ch[2], 0.18, 0.012); key(ch[3], 0.18, 0.011); key(ch[4], 0.18, 0.011); }
        } else {
          var e2 = i % 8, b2 = Math.floor(i / 8) % 2, dim = b2 ? [58, 61, 64, 67] : [57, 60, 63, 66];
          key(dim[e2 % 4] + 12, 0.14, 0.02);
          key(dim[(e2 + 2) % 4], 0.14, 0.012);
          if (e2 % 2 === 0) key(b2 ? 46 : 45, 0.2, 0.03);
        }
      } catch (e3) {}
    },
    trSfx: function (name) {
      var R = window.SolRealms;
      if (!R || !R.blip) return;
      try {
        if (name === "swish") R.hiss(0.14, 2400, 0.05);
        else if (name === "thwack") { R.blip(700, 260, 0.07, "triangle", 0.06); R.hiss(0.05, 1200, 0.05); }
        else if (name === "chatter") { R.blip(1500, 1900, 0.05, "square", 0.012); R.blip(1700, 2100, 0.05, "square", 0.012, 0.07); R.blip(1450, 1800, 0.05, "square", 0.011, 0.14); }
        else if (name === "shriek") R.blip(1800, 2600, 0.16, "sawtooth", 0.012, 0.03);
        else if (name === "fall") R.blip(1400, 180, 0.9, "sine", 0.05);    /* a slide whistle, down */
        else if (name === "boing") { R.blip(150, 330, 0.22, "triangle", 0.06); R.blip(330, 140, 0.25, "triangle", 0.04, 0.2); }
        else if (name === "boing2") R.blip(260, 420, 0.12, "triangle", 0.025);
        else if (name === "bonk") { R.blip(900, 500, 0.06, "square", 0.04); R.blip(600, 300, 0.1, "triangle", 0.05, 0.05); }
        else if (name === "whistle") R.blip(2200, 900, 0.4, "sine", 0.015);
        else if (name === "slip") { R.blip(500, 1600, 0.25, "sine", 0.04); R.blip(1600, 300, 0.4, "sine", 0.04, 0.25); }
        else if (name === "wind") R.hiss(1.2, 500, 0.04);
        else if (name === "tick") R.blip(1300, 1300, 0.04, "triangle", 0.025);
        else if (name === "right") { [60, 64, 67, 72].forEach(function (n, j) { var f = 440 * Math.pow(2, (n - 69) / 12); R.blip(f, f, 0.35, "triangle", 0.04, j * 0.07); }); }
        else if (name === "wrong") { R.blip(311, 293, 0.3, "sawtooth", 0.02); R.blip(293, 262, 0.45, "sawtooth", 0.02, 0.3); }
      } catch (e) {}
    },

    /* ── drawing every frame ── */
    trDraw: function (s) {
      var T = this.tr, P = T.P, k = T.k, self = this, fx = T.fxG;
      fx.clear();
      this.trDrawWires();
      this.trDrawNet();
      /* the guide at the king pole: the picked wire on each side is dotted in light */
      if (T.where === "center" && !this._between && !T.fall) {
        [-1, 1].forEach(function (sd) {
          var wi = self.trWireFor(sd);
          if (wi < 0) return;
          var wr = T.wires[wi], n = Math.max(6, Math.round(wr.len / (16 * k))), j;
          for (j = 1; j < n; j++) {
            var p = self.trWirePt(wi, j / n), pulse = 0.55 + 0.45 * Math.sin(T.t * 6 - j * 0.6);
            fx.fillStyle(0xf4f1e8, 0.35 + 0.5 * pulse); fx.fillCircle(p.x, p.y - 5 * k, 2.1 * k);
          }
          fx.lineStyle(2.2 * k, 0xf4f1e8, 0.75 + 0.25 * Math.sin(T.t * 6)); fx.strokeRect(wr.cardX - T.cardW / 2 - 4 * k, wr.cardY - T.cardH / 2 - 4 * k, T.cardW + 8 * k, T.cardH + 8 * k);
        });
        var nt = this.trTiers().length;
        T.hint.setText(nt > 1 ? "▲ ▼ pick a wire\n◀ ▶ lean to walk" : "◀ ▶ lean to walk").setPosition(T.cx, T.cy + 30 * k).setVisible(true);
      } else T.hint.setVisible(false);
      /* the monkeys on the top rope, and the dotted lines where bananas will fall */
      T.ropers.forEach(function (r, i) {
        var on = i < P.ropers;
        r.spr.setVisible(on);
        if (!on) return;
        var home = T.cx + (i ? 1 : -1) * self.W * 0.22 + Math.sin(T.t * 0.5 + r.ph) * self.W * 0.06;
        var tx = r.drop ? r.drop.tx : home;
        r.x = r.x ? r.x + clamp(tx - r.x, -420 * k * s, 420 * k * s) : home;
        var ry = T.ropeY + 2 * k + 6 * k * (1 - Math.pow((r.x - T.cx) / (self.W / 2), 2));
        r.spr.setPosition(r.x, ry + 4 * k).setOrigin(0.5, 0.85).setScale(k * 1.15).setFlipX(tx < r.x - 2);
      });
      T.bananas.forEach(function (b) {
        if (b.phase !== "warn") return;
        var u = clamp(b.t / P.warnMs, 0, 1), y0 = T.ropeY + 14 * k, n = Math.max(4, Math.round((b.ty - y0) / (13 * k))), j;
        for (j = 0; j < n; j++) {
          if (j / n > 0.25 + u * 0.75) break;
          var y = y0 + (b.ty - y0) * j / n;
          fx.fillStyle(0x0b0b0b, 0.8); fx.fillCircle(b.tx, y, 3.4 * k);
          fx.fillStyle(0xf4f1e8, 0.75 + 0.25 * u); fx.fillCircle(b.tx, y, 2.1 * k);
        }
        var pulse = 1 + 0.15 * Math.sin(T.t * 14);
        fx.lineStyle(4.5 * k, 0x0b0b0b, 0.7); fx.strokeCircle(b.tx, b.ty - 34 * k, (24 - 6 * u) * k * pulse);
        fx.lineStyle(2.4 * k, 0xf4f1e8, 0.6 + 0.4 * u); fx.strokeCircle(b.tx, b.ty - 34 * k, (24 - 6 * u) * k * pulse);
      });
      T.peels.forEach(function (pe) { var p = self.trWirePt(pe.w, pe.s); pe.spr.setPosition(p.x, p.y + 1 * k); });
      /* the pennant on top of the king pole, and the draft sign */
      var G = T.gust, py = Math.max(T.ropeY + 26 * k, T.tierY.up - 70 * k), pdir = P.gust ? (G.phase === "off" ? 1 : G.dir) : 1;
      var flap = G.phase === "off" ? 0.25 : 1, wv = Math.sin(T.t * (G.phase === "off" ? 3 : 14)) * 4 * k * flap;
      fx.lineStyle(2 * k, 0x0b0b0b, 1); fx.lineBetween(T.cx, py + 4 * k, T.cx, py - 20 * k);
      fx.fillStyle(0xeeebe2, 1); fx.fillTriangle(T.cx, py - 20 * k, T.cx, py - 8 * k, T.cx + pdir * (26 * k + 6 * k * flap), py - 14 * k + wv);
      fx.lineStyle(1.2 * k, 0x0b0b0b, 1); fx.strokeTriangle(T.cx, py - 20 * k, T.cx, py - 8 * k, T.cx + pdir * (26 * k + 6 * k * flap), py - 14 * k + wv);
      if (P.gust && G.phase !== "off") T.draft.setText(G.dir > 0 ? "DRAFT ▶▶" : "◀◀ DRAFT").setPosition(T.cx + G.dir * 74 * k, py - 14 * k).setVisible(Math.floor(T.t * (G.phase === "warn" ? 6 : 2)) % 2 === 0 || G.phase === "blow");
      else T.draft.setVisible(false);
      /* the spotlight on him */
      var b0 = this.trBody();
      T.spot.setPosition(b0.x, b0.y).setScale(2.4 * k).setAlpha(0.55 + 0.05 * Math.sin(T.t * 3));
      this.trDrawTramp();
      this.player.setPosition(b0.x, b0.y - 50 * k);
      this.trDrawMeter();
    },
    trDrawWires: function () {
      var T = this.tr, k = T.k, g = T.wireG, self = this;
      g.clear();
      T.wires.forEach(function (wr, i) {
        var pts = [], n = 16, j;
        for (j = 0; j <= n; j++) pts.push(self.trWirePt(i, j / n));
        if (T.where === "wire" && T.w === i && !T.fall) {
          var f = self.trFeet(); pts = [];
          for (j = 0; j <= n; j++) { var sj = j / n; if (sj < T.s && (j + 1) / n > T.s) { pts.push(self.trWirePt(i, sj)); pts.push(f); } else pts.push(self.trWirePt(i, sj)); }
        }
        var dead = wr.state === "dead";
        g.lineStyle(3.2 * k, 0x0b0b0b, 1); g.strokePoints(pts);
        g.lineStyle(1.1 * k, dead ? 0x6a6864 : 0xd9d6cd, 0.85); g.strokePoints(pts.map(function (q) { return { x: q.x, y: q.y - 1.2 * k }; }));
      });
    },
    trDrawNet: function () {
      var T = this.tr, k = T.k, g = T.netG, x0 = T.netL, x1 = T.netR, y = T.netY, F = T.fall, n = 46, i;
      g.clear();
      function yAt(x) {
        var d = 4 * k * Math.sin((x - x0) / (x1 - x0) * Math.PI);
        if (F && F.sag > 0.3) d += F.sag * Math.max(0, 1 - Math.abs(x - F.landX) / (90 * k));
        return y + d;
      }
      var depth = 16 * k;
      g.lineStyle(1.1 * k, 0xe4e1d8, 0.6);
      for (i = 0; i <= n; i++) {
        var xa = x0 + (x1 - x0) * i / n, xb = x0 + (x1 - x0) * Math.min(n, i + 2) / n, xc = x0 + (x1 - x0) * Math.max(0, i - 2) / n;
        g.lineBetween(xa, yAt(xa), xb, yAt(xb) + depth);
        g.lineBetween(xa, yAt(xa), xc, yAt(xc) + depth);
      }
      var pts = [], pts2 = [];
      for (i = 0; i <= n; i++) { var xx = x0 + (x1 - x0) * i / n; pts.push({ x: xx, y: yAt(xx) }); pts2.push({ x: xx, y: yAt(xx) + depth }); }
      g.lineStyle(2.6 * k, 0x0b0b0b, 1); g.strokePoints(pts); g.strokePoints(pts2);
      g.lineStyle(1.6 * k, 0xeeebe2, 0.95); g.strokePoints(pts); g.lineStyle(1 * k, 0xeeebe2, 0.6); g.strokePoints(pts2);
      g.lineStyle(1.6 * k, 0x0b0b0b, 1); g.lineBetween(x0, y, x0, T.floorY); g.lineBetween(x1, y, x1, T.floorY);
    },
    /* the little tramp, drawn facing right with his feet at (0, 0), then turned to face his way and tilted by the lean */
    trDrawTramp: function () {
      var T = this.tr, k = T.k, g = T.trG, F = T.fall, t = T.t;
      var feet = this.trFeet(), rot = F ? F.rot : T.th * LEAN_ROT, face = T.face;
      g.clear();
      g.setPosition(feet.x, feet.y).setRotation(rot).setScale(face * k * TS, k * TS);
      this.blink(g);
      var sw = Math.sin(T.walkPh) * T.walkAmt, teeter = !F && Math.abs(T.th) > 0.6;
      /* legs: baggy trousers, the big shoes turned out */
      var bf = { x: -5 - sw * 6, y: -2 }, ff = { x: 5 + sw * 6, y: -2.5 };
      if (F) { bf = { x: -9, y: -8 }; ff = { x: 9, y: -10 }; }
      g.lineStyle(8, 0x34332f, 1); g.lineBetween(-2, -29, bf.x, bf.y - 3);
      g.fillStyle(0x0c0c0c, 1); g.fillEllipse(bf.x - 3, bf.y, 16, 6);
      g.lineStyle(8.5, 0x45443f, 1); g.lineBetween(3, -29, ff.x, ff.y - 3);
      g.lineStyle(1, 0x1c1c1a, 0.9); g.lineBetween(ff.x - 3, ff.y - 5, ff.x + 3, ff.y - 5);
      g.fillStyle(0x0c0c0c, 1); g.fillEllipse(ff.x + 5, ff.y, 18, 6.5);
      g.fillStyle(0x8a8780, 1); g.fillEllipse(ff.x + 8, ff.y - 1.6, 5, 1.6);
      g.fillStyle(0x3e3d39, 1); g.fillEllipse(0.5, -31, 19, 10);
      /* the back arm, out for balance */
      var aB = Math.PI + 0.45, aF = -0.45, cane = -0.15;
      if (teeter) { aB = Math.PI + 0.2 + Math.sin(t * 15) * 1.1; aF = -0.4 + Math.sin(t * 15 + 2) * 1.1; cane = aF + 0.6; }
      if (F) { aB = Math.PI + 1.2 + Math.sin(t * 20) * 0.6; aF = -1.3 + Math.sin(t * 20 + 1) * 0.6; cane = aF + 0.8; }
      if (T.bowT > 0) { aF = -1.6; aB = Math.PI + 0.8; }
      if (T.swatT > 0) { var u = 1 - T.swatT / 0.3; aF = -2.2 + u * 3.0; cane = aF + 0.15; }
      var sb = { x: -4, y: -47 }, hb = { x: sb.x + Math.cos(aB) * 17, y: sb.y + Math.sin(aB) * 17 };
      g.lineStyle(4.6, 0x0d0d0d, 1); g.lineBetween(sb.x, sb.y, hb.x, hb.y);
      g.fillStyle(0xdedbd2, 1); g.fillCircle(hb.x, hb.y, 2.4);
      /* the tight little jacket, the shirt front and a bow tie */
      g.fillStyle(0x121212, 1); g.fillPoints([{ x: -8, y: -50 }, { x: 7, y: -50 }, { x: 10, y: -33 }, { x: -10, y: -33 }], true);
      g.fillStyle(0xebe8e0, 1); g.fillTriangle(-1, -50, 5, -50, 2.5, -41);
      g.fillStyle(0x0b0b0b, 1); g.fillTriangle(0.5, -49.5, 2.5, -47.5, 0.5, -45.5); g.fillTriangle(4.5, -49.5, 2.5, -47.5, 4.5, -45.5);
      g.fillStyle(0x6e6c66, 1); g.fillCircle(3.6, -39, 0.9); g.fillCircle(3.9, -36, 0.9);
      g.lineStyle(1, 0x55534e, 0.9); g.lineBetween(-9, -33, 9, -33);
      /* the head: a pale face, a dark eye under a raised brow, curly hair at the nape */
      var hy = -58;
      g.fillStyle(0x0b0b0b, 1); g.fillCircle(-4.5, hy + 1, 2.6); g.fillCircle(-3.5, hy + 3.5, 2.2);
      g.fillStyle(0xeceae3, 1); g.fillCircle(2, hy, 7.2);
      g.lineStyle(1, 0x2a2a28, 1); g.strokeCircle(2, hy, 7.2);
      g.fillStyle(0xeceae3, 1); g.fillCircle(8.6, hy + 0.8, 1.6);
      if (T.hat) {
        g.fillStyle(0x0b0b0b, 1); g.fillRect(-6, hy - 5, 17, 6);
      } else {
        g.fillStyle(0x0b0b0b, 1); g.fillCircle(5.4, hy - 1.2, 1.15);
        g.lineStyle(1.1, 0x0b0b0b, 1); g.lineBetween(3.6, hy - 3.8, 7, hy - 4.6);
      }
      g.lineStyle(1, 0x3a3936, 1); g.lineBetween(5, hy + 4, 7.4, hy + 3.6);
      /* the bowler: brim and dome (tipped on a bow, pulled down by a monkey) */
      var lift = T.bowT > 0 ? -7 * Math.sin(Math.min(1, (1 - T.bowT)) * Math.PI) : 0, hd = T.hat ? 4 : 0;
      g.fillStyle(0x0b0b0b, 1); g.fillEllipse(2, hy - 5.8 + lift + hd, 22, 3.8);
      g.beginPath(); g.arc(2, hy - 6.4 + lift + hd, 7.8, Math.PI, 0, false); g.closePath(); g.fillPath();
      g.lineStyle(1.3, 0x77756f, 1); g.beginPath(); g.arc(2, hy - 6.4 + lift + hd, 5.6, Math.PI * 1.15, Math.PI * 1.55, false); g.strokePath();
      g.lineStyle(1.2, 0x4a4945, 1); g.lineBetween(-5.6, hy - 8 + lift + hd, 9.6, hy - 8 + lift + hd);
      /* the front arm and the cane (a light edge so it shows against his dark coat) */
      var sf = { x: 4, y: -47 }, hf = { x: sf.x + Math.cos(aF) * 17, y: sf.y + Math.sin(aF) * 17 };
      var ce = { x: hf.x + Math.cos(cane) * 26, y: hf.y + Math.sin(cane) * 26 };
      g.lineStyle(3.6, 0x8c8a83, 1); g.lineBetween(hf.x, hf.y, ce.x, ce.y);
      g.lineStyle(2.2, 0x0b0b0b, 1); g.lineBetween(hf.x, hf.y, ce.x, ce.y);
      var ca = cane + Math.PI;
      g.lineStyle(2.4, 0x0b0b0b, 1); g.beginPath(); g.arc(hf.x + Math.cos(ca) * 3, hf.y + Math.sin(ca) * 3 - 0, 3.2, ca - Math.PI * 0.2, ca + Math.PI * 0.95, false); g.strokePath();
      g.lineStyle(4.6, 0x111111, 1); g.lineBetween(sf.x, sf.y, hf.x, hf.y);
      g.fillStyle(0xdedbd2, 1); g.fillCircle(hf.x, hf.y, 2.4);
      if (T.swatT > 0) {
        var u2 = 1 - T.swatT / 0.3;
        g.lineStyle(2, 0xf4f1e8, 0.6 * (1 - u2));
        g.beginPath(); g.arc(sf.x, sf.y, 40, -2.2 + 0.15, -2.2 + 0.15 + u2 * 3.0, false); g.strokePath();
      }
    },
    trDrawMeter: function () {
      var T = this.tr, k = T.k, g = T.meterG, m = T.meter, R = m.r, cx = m.x, cy = m.y;
      g.clear();
      var span = Math.PI / 2 * 0.94;
      function ang(v) { return -Math.PI / 2 + v * span; }
      function wedge(a0, a1, r0, r1, col, al) {
        var pts = [], n = 10, i;
        for (i = 0; i <= n; i++) { var a = a0 + (a1 - a0) * i / n; pts.push({ x: cx + Math.cos(a) * r1, y: cy + Math.sin(a) * r1 }); }
        for (i = n; i >= 0; i--) { var b = a0 + (a1 - a0) * i / n; pts.push({ x: cx + Math.cos(b) * r0, y: cy + Math.sin(b) * r0 }); }
        g.fillStyle(col, al == null ? 1 : al); g.fillPoints(pts, true);
      }
      var danger = Math.abs(T.th) > RED && T.where === "wire" && !T.fall;
      wedge(ang(-1.04), ang(1.04), 0, R + 6 * k, 0x0b0b0b, 0.92);
      wedge(ang(-1), ang(1), 0, R, 0xe9e6dc);
      wedge(ang(-RED), ang(-DZ), R * 0.55, R, 0xb9b6ad);
      wedge(ang(DZ), ang(RED), R * 0.55, R, 0xb9b6ad);
      wedge(ang(-1), ang(-RED), R * 0.3, R, 0x0b0b0b);
      wedge(ang(RED), ang(1), R * 0.3, R, 0x0b0b0b);
      var i;
      for (i = -10; i <= 10; i++) {
        var a = ang(i / 10), r0 = i % 5 ? R * 0.84 : R * 0.72;
        if (Math.abs(i / 10) > RED) continue;
        g.lineStyle(1.2 * k, 0x0b0b0b, 1); g.lineBetween(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0, cx + Math.cos(a) * R * 0.98, cy + Math.sin(a) * R * 0.98);
      }
      /* walk arrows on the dial */
      [-1, 1].forEach(function (sd) {
        var a = ang(sd * 0.48), r = R * 0.42, x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
        g.fillStyle(0x3a3936, 1); g.fillTriangle(x + sd * 6 * k, y, x - sd * 3 * k, y - 5 * k, x - sd * 3 * k, y + 5 * k);
      });
      var na = ang(clamp(T.where === "wire" || T.fall ? T.th : T.th, -1.04, 1.04)), nx = cx + Math.cos(na) * R * 0.94, ny = cy + Math.sin(na) * R * 0.94;
      g.lineStyle(5 * k, 0xf4f1e8, 1); g.lineBetween(cx, cy, nx, ny);
      g.lineStyle(2.6 * k, 0x0b0b0b, 1); g.lineBetween(cx, cy, nx, ny);
      g.fillStyle(0x0b0b0b, 1); g.fillCircle(cx, cy, 5 * k);
      g.fillStyle(0xf4f1e8, 1); g.fillCircle(cx, cy, 2 * k);
      var flash = danger && Math.floor(T.t * 8) % 2 === 0;
      g.lineStyle(2 * k, flash ? 0xffffff : 0xb9b6ad, 1);
      g.beginPath(); g.arc(cx, cy, R + 3 * k, ang(-1.04), ang(1.04), false); g.strokePath();
      T.meterTx.setText(danger ? "TEETERING!" : "BALANCE");
    },

    /* ── the film: iris, title card, intertitles, grain, flicker, scratches, sprockets (every frame, always) ── */
    trPost: function () {
      var T = this.tr;
      if (!T || !T.grain) return;
      var W = this.W, H = this.H, k = T.k, dt = Math.min(0.05, ((this.game && this.game.loop && this.game.loop.delta) || 16) / 1000);
      if (this._finishing && T.fall && !this.ended) { this.trFallStep(dt); this.trDrawTramp(); this.trDrawNet(); }
      if (this._finishing && !T.fall && T.iris.mode !== "closed" && this.strikes < this.needStrikes) T.iris.mode = "closed";
      if (this._finishing && T.bowT > 0) T.bowT -= dt;
      /* the iris */
      var I = T.iris, full = Math.sqrt(W * W + H * H) + 10, want = I.mode === "open" ? full : I.mode === "hat" ? 122 * k : 0;
      var f = this.trFeet(), b = this.trBody();
      I.x = I.mode === "open" && I.r > full * 0.6 ? W / 2 : b.x; I.y = I.mode === "open" && I.r > full * 0.6 ? H / 2 : b.y;
      if (I.mode === "closed" && T.waitOpen) I.r = 0;
      var rate = full / (I.mode === "open" ? 0.75 : 0.6);
      I.r += clamp(want - I.r, -rate * dt, rate * dt);
      this.trIrisDraw(full);
      void f;
      /* the BALANCE dial stays up through the hat's iris, and goes dark with the picture between acts */
      var ma = I.mode === "hat" ? 1 : clamp(I.r / (full * 0.4), 0, 1);
      T.meterG.setAlpha(ma); T.meterTx.setAlpha(ma);
      /* the title card on the black, between the acts */
      var tA = clamp(1 - I.r / (60 * k), 0, 1);
      T.titleG.clear();
      if (tA > 0.01 && T.title) {
        T.titleTx.setText(T.title).setPosition(W / 2, H * 0.45).setAlpha(tA).setVisible(true);
        T.subTx.setText(T.sub).setPosition(W / 2, H * 0.45 + 44 * k).setAlpha(tA).setVisible(!!T.sub);
        var bw = Math.max(T.titleTx.width, T.subTx.width) + 90 * k, bh = 150 * k, x0 = W / 2 - bw / 2, y0 = H * 0.45 - 62 * k;
        T.titleG.lineStyle(2 * k, 0xefece4, tA); T.titleG.strokeRect(x0, y0, bw, bh);
        T.titleG.lineStyle(1 * k, 0xefece4, tA * 0.8); T.titleG.strokeRect(x0 + 6 * k, y0 + 6 * k, bw - 12 * k, bh - 12 * k);
        T.titleG.fillStyle(0xefece4, tA); T.titleG.fillCircle(W / 2, y0 + 6 * k, 3 * k); T.titleG.fillCircle(W / 2, y0 + bh - 6 * k, 3 * k);
        T.titleG.lineStyle(1.2 * k, 0xefece4, tA); T.titleG.lineBetween(W / 2 - 50 * k, H * 0.45 + 26 * k, W / 2 + 50 * k, H * 0.45 + 26 * k);
      } else { T.titleTx.setVisible(false); T.subTx.setVisible(false); }
      /* the scene's big tag, as an intertitle card */
      var bt = this.bigTag, tg = T.tagG;
      tg.clear();
      if (bt && this.bigTagMs > 0 && bt.text) {
        var al = clamp(this.bigTagMs / 400, 0, 1), txt = String(bt.text).replace(/ · /g, "\n");
        if (T.tagTx.text !== txt) T.tagTx.setText(txt);
        T.tagTx.setWordWrapWidth(Math.max(200, W - 120 * k)).setPosition(W / 2, Math.max(70 * k, H * 0.16)).setAlpha(al).setVisible(true);
        var tw = T.tagTx.width + 64 * k, th = T.tagTx.height + 34 * k, tx0 = W / 2 - tw / 2, ty0 = T.tagTx.y - th / 2;
        tg.fillStyle(0x070707, 0.94 * al); tg.fillRect(tx0, ty0, tw, th);
        tg.lineStyle(2 * k, 0xefece4, al); tg.strokeRect(tx0 + 4 * k, ty0 + 4 * k, tw - 8 * k, th - 8 * k);
        tg.lineStyle(0.9 * k, 0xefece4, al * 0.8); tg.strokeRect(tx0 + 8 * k, ty0 + 8 * k, tw - 16 * k, th - 16 * k);
        [[tx0 + 8 * k, ty0 + 8 * k], [tx0 + tw - 8 * k, ty0 + 8 * k], [tx0 + 8 * k, ty0 + th - 8 * k], [tx0 + tw - 8 * k, ty0 + th - 8 * k]].forEach(function (q) { tg.fillStyle(0xefece4, al); tg.fillCircle(q[0], q[1], 2.2 * k); });
      } else T.tagTx.setVisible(false);
      if (bt) bt.setVisible(false);
      /* grain, flicker, scratches, dust, gate weave */
      T.grain.setTilePosition(Math.random() * 256, Math.random() * 256).setAlpha(0.85);
      var fg = T.filmG;
      fg.clear();
      var fl = 0.03 + Math.random() * 0.05 + (Math.random() < 0.04 ? 0.06 : 0);
      fg.fillStyle(0x000000, fl); fg.fillRect(0, 0, W, H);
      if (Math.random() < 0.05) { fg.fillStyle(0xffffff, 0.035); fg.fillRect(0, 0, W, H); }
      T.scratch.forEach(function (sc, i) {
        sc.x += sc.v * dt; if (sc.x < 0.05 || sc.x > 0.95) sc.v = -sc.v;
        if (Math.random() < 0.08) sc.a = Math.random() < 0.55 ? rnd(0.15, 0.4) : 0;
        if (sc.a > 0) { fg.lineStyle(i ? 1 : 1.5, i ? 0x111111 : 0xf4f1e8, sc.a); fg.lineBetween(sc.x * W + Math.sin(T.t * 7 + i) * 2, 0, sc.x * W + Math.sin(T.t * 5 + i) * 3, H); }
      });
      var nd = Math.random() < 0.5 ? 0 : Math.floor(rnd(1, 4)), j;
      for (j = 0; j < nd; j++) {
        fg.fillStyle(Math.random() < 0.6 ? 0x0b0b0b : 0xf4f1e8, rnd(0.35, 0.7));
        var dx = rnd(0, W), dy = rnd(0, H), dr = rnd(0.8, 2.6) * k;
        fg.fillCircle(dx, dy, dr);
        if (Math.random() < 0.3) fg.fillCircle(dx + dr * 1.4, dy + dr * 0.6, dr * 0.6);
      }
      /* sprocket holes down both edges, running with the film */
      var sp = T.sprG, swd = T.sw, hole = 13 * k, gap = 24 * k, off = (T.t * 70 * k) % gap;
      sp.clear();
      sp.fillStyle(0x050505, 1); sp.fillRect(0, 0, swd, H); sp.fillRect(W - swd, 0, swd, H);
      for (var y = -gap + off; y < H + gap; y += gap) {
        sp.fillStyle(0xcfccc3, 0.85);
        sp.fillRoundedRect(swd * 0.25, y, swd * 0.5, hole * 0.6, 2 * k);
        sp.fillRoundedRect(W - swd * 0.75, y, swd * 0.5, hole * 0.6, 2 * k);
      }
      sp.fillStyle(0x000000, 0.6); sp.fillRect(swd - 1, 0, 1.5, H); sp.fillRect(W - swd - 0.5, 0, 1.5, H);
    },
    trIrisDraw: function (full) {
      var T = this.tr, I = T.iris, W = this.W, H = this.H, g = T.irisG;
      g.clear();
      if (I.r >= full - 1) { T.irisImg.setVisible(false); return; }
      if (I.r <= 2) { T.irisImg.setVisible(false); g.fillStyle(0x000000, 1); g.fillRect(0, 0, W, H); return; }
      var sc = I.r / IRIS_R, half = 256 * sc;
      T.irisImg.setVisible(true).setPosition(I.x, I.y).setScale(sc);
      var x0 = I.x - half, x1 = I.x + half, y0 = I.y - half, y1 = I.y + half;
      g.fillStyle(0x000000, 1);
      if (y0 > 0) g.fillRect(0, 0, W, y0 + 1);
      if (y1 < H) g.fillRect(0, y1 - 1, W, H - y1 + 1);
      if (x0 > 0) g.fillRect(0, Math.max(0, y0), x0 + 1, Math.min(H, y1) - Math.max(0, y0));
      if (x1 < W) g.fillRect(x1 - 1, Math.max(0, y0), W - x1 + 1, Math.min(H, y1) - Math.max(0, y0));
    },

    /* a right answer: he tips his hat, the monkeys go, and the picture irises out to the next act */
    clear_tightrope: function () {
      var T = this.tr, self = this;
      T.monkeys.forEach(function (m) { if (m.state === "cling" || m.state === "run" || m.state === "climb") self.trKnockOff(m, true); });
      T.bananas.forEach(function (b) { try { b.spr.destroy(); } catch (e) {} });
      T.bananas = []; T.hat = false;
      T.ropers.forEach(function (r) { r.drop = null; });
      T.gust.phase = "off";
      T.title = "Correct!"; T.sub = "";
    }
  });

  /* the promenade: eight bars of eighth notes (MIDI; 0 = rest) over oom-pah chords [bass 1, bass 3, chord] */
  var WALK_MEL = [
    [76, 0, 79, 76, 72, 0, 74, 76], [77, 76, 74, 72, 74, 0, 0, 0],
    [71, 0, 74, 71, 67, 0, 69, 71], [72, 71, 69, 67, 79, 0, 0, 0],
    [76, 0, 79, 76, 72, 0, 74, 76], [77, 0, 81, 77, 74, 0, 72, 69],
    [67, 72, 76, 79, 77, 74, 71, 74], [72, 0, 67, 0, 72, 0, 0, 0]
  ];
  var C = [48, 43, 60, 64, 67], G7 = [43, 50, 59, 65, 67], F = [41, 48, 60, 65, 69];
  var WALK_CH = [C, C, G7, G7, C, F, G7, C];
})();
