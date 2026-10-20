/* SOL Labyrinth v5.22 — the Lit and Film mode "roulette": Rick's Roulette (Casablanca, 1942; genre NOIR).
 *
 * Rick's Café Américain after dark, in black and white: Moorish arched windows with their venetian blinds shut,
 * two ceiling fans turning slowly over the haze, the piano at the left, the croupier behind the wheel, and the
 * café's front door at the right, where the police will come in. The roulette wheel fills the middle of the
 * table, tilted toward the student. Each answer letter rides the wheel on a white chip over its own run of
 * ivory pockets; black pockets between the letters are the house's.
 *
 * The student runs the ball. Walk along the front of the table (◀ ▶ / A D / the pad, or the mouse) to pick where
 * the ball leaves your hand, then spin it (Space, SPIN or a click): it races round the rim against the wheel,
 * slows, drops off the track and rattles into a pocket, and whatever pocket it stops in is the pick
 * (answerPick). The ball's flight is real physics, the same every time (rlPredict): the rim run, the drop and,
 * from level 21, the steel diamonds on the bowl that knock a ball landing on them farther along. The wheel keeps
 * turning while the ball rolls, so the skill is leading the letter: release early and let the wheel bring the
 * letter to the ball. Early on a white ring shows the pocket the ball would land in if thrown now; later the ring
 * blurs to an arc, then only a mark on the bowl shows where the ball will drop, and at the top levels nothing.
 * The wheel speeds up every level, the letters' pockets narrow, the ball jitters more, and the croupier pushes
 * the wheel to new speeds (and, from 51, the other way) between spins.
 *
 * The second threat: the airport's searchlight swings across the town and in through the blinds, slatted light
 * sweeping across the café. Anyone standing in it is seen: hold ▼ (S, Shift or the right mouse button) to duck
 * until it has passed (a life if it catches you standing). And the police raid closes in: the RAID bar fills
 * while you wait and every time the house wins; when it fills, the gendarmes come through the door (a life).
 * rlParams(n) is the one difficulty curve for levels 1-100 (also on the def as `params`).
 *
 * Registered with SolModes.extend (js/modes.js); the methods below are copied onto ModeScene, so `this` is the
 * mode scene. Every texture is drawn once (canvasTex) under an "md-roulette-" key.
 */
(function () {
  "use strict";
  var M = typeof window !== "undefined" ? window.SolModes : null;
  if (!M || !M.extend || !M.lib) return;
  var L = M.lib, clamp = L.clamp, rnd = L.rnd, canvasTex = L.canvasTex, snd = L.snd;
  var TAU = Math.PI * 2, HALF = Math.PI / 2;
  var SERIF = "Georgia, 'Times New Roman', serif", TYPE = "'Courier New', Courier, monospace";
  var SQ = 0.42;                      /* the wheel's tilt: an ellipse this flat */
  var R_TRACK = 0.915, R_POCKET = 0.57, R_P0 = 0.49, R_P1 = 0.65, R_BAND = 0.77, R_DIAM = 0.815;
  var SPAN = 0.78;                    /* how far round the front of the wheel the student can walk, radians either side */
  var DIAM_W = 0.12;                  /* half the arc of a steel diamond on the bowl */
  var V1 = 2.4;                       /* the ball's speed when it leaves the track, rad/s */

  function wrap(a) { a %= TAU; return a < 0 ? a + TAU : a; }
  function ease(u) { return u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2; }

  /* ── difficulty: one curve, every level 2-100 a little harder than the one before ── */
  function rlParams(n) {
    n = clamp(Math.floor(Number(n) || 1), 1, 100);
    var w = n <= 30 ? 3 : n <= 70 ? 2 : 1;                         /* pockets a letter owns */
    var hg = n <= 10 ? 1 : n <= 50 ? 2 : n <= 70 ? 3 : 2;          /* house pockets between two letters */
    return {
      pockets: w, house: hg, share: w / (w + hg),                   /* the share of the wheel that is letters: .75 ... .33 */
      spin: 0.78 + n * 0.0085 + (n >= 91 ? 0.05 : 0),               /* the wheel, rad/s: 0.79 at 1, 1.66 at 100 */
      v0: 6.2 + n * 0.03,                                           /* the ball off the hand, rad/s */
      rimT: 1.75 - n * 0.0035,                                      /* seconds on the track */
      dropT: 0.72 - n * 0.0012,                                     /* seconds from the track to the pocket */
      jitter: n >= 11 ? 0.02 + (n - 11) * 0.0008 : 0,               /* the ball's bounce: ± rad (0.091 at 100) */
      guide: n <= 30 ? 3 : n <= 60 ? 2 : n <= 80 ? 1 : 0,           /* 3 the ring · 2 an arc · 1 the drop mark · 0 nothing */
      blur: n > 30 ? 0.05 + (n - 31) * 0.0025 : 0,                  /* how wide the arc is past the jitter */
      diamonds: n <= 20 ? 0 : n <= 40 ? 4 : n <= 60 ? 6 : 8,
      kick: n > 20 ? 0.36 + (n - 21) * 0.004 : 0,                   /* a diamond knocks the ball this far on, rad */
      pushRate: n >= 31 ? 0.1 + (n - 31) * 0.0015 : 0,              /* the croupier's pushes a second */
      pushVar: n >= 31 ? 0.12 + (n - 31) * 0.004 : 0,               /* ... change the speed by up to this share */
      flipP: n >= 51 ? 0.25 + (n - 51) * 0.005 : 0,                 /* ... and turn the wheel the other way */
      sweepEvery: 12 - n * 0.065,                                   /* seconds between searchlight sweeps */
      warnMs: Math.max(850, 2700 - n * 18.5),                       /* the warning before it comes in */
      bandW: 0.15 + n * 0.0011,                                     /* the slatted light's width, share of the canvas */
      sweepSpd: 0.42 + n * 0.002,                                   /* its speed, canvas widths a second */
      doubleP: n >= 41 ? 0.2 + (n - 41) * 0.008 : 0,                /* it swings back the way it came */
      beams: n >= 81 ? 2 : 1,
      drain: 1 / (72 - n * 0.47),                                   /* the raid bar a second: 72 s at 1, 25 s at 100 */
      houseCost: 0.06 + n * 0.0006                                  /* the raid bar when the house wins */
    };
  }

  /* ── art, drawn once ── */
  function drawGrain(c, w, h) {
    var img = c.createImageData(w, h), d = img.data, i;
    for (i = 0; i < d.length; i += 4) {
      var v = Math.random() < 0.5 ? 0 : 255;
      d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = Math.random() < 0.5 ? Math.floor(Math.random() * 90) : 0;
    }
    c.putImageData(img, 0, 0);
  }
  function drawChip(c, w, h) {
    var cx = w / 2, cy = h / 2, r = w / 2 - 2, i;
    c.fillStyle = "rgba(0,0,0,0.55)"; c.beginPath(); c.arc(cx + 1, cy + 2, r, 0, TAU); c.fill();
    c.fillStyle = "#f4f2ec"; c.beginPath(); c.arc(cx, cy, r, 0, TAU); c.fill();
    c.fillStyle = "#151515";
    for (i = 0; i < 8; i++) {
      var a0 = i / 8 * TAU + 0.12, a1 = a0 + TAU / 16;
      c.beginPath(); c.arc(cx, cy, r, a0, a1); c.arc(cx, cy, r * 0.74, a1, a0, true); c.closePath(); c.fill();
    }
    c.strokeStyle = "#151515"; c.lineWidth = 1.6; c.beginPath(); c.arc(cx, cy, r, 0, TAU); c.stroke();
    c.beginPath(); c.arc(cx, cy, r * 0.66, 0, TAU); c.stroke();
    c.fillStyle = "#ffffff"; c.beginPath(); c.arc(cx, cy, r * 0.64, 0, TAU); c.fill();
  }
  function drawBall(c, w, h) {
    var g = c.createRadialGradient(w * 0.38, h * 0.34, 1, w / 2, h / 2, w / 2);
    g.addColorStop(0, "#ffffff"); g.addColorStop(0.55, "#e8e8e8"); g.addColorStop(1, "#8a8a8a");
    c.fillStyle = g; c.beginPath(); c.arc(w / 2, h / 2, w / 2 - 0.5, 0, TAU); c.fill();
  }
  function drawGlow(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 1, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(255,255,255,0.9)"); g.addColorStop(0.3, "rgba(255,255,255,0.35)"); g.addColorStop(1, "rgba(255,255,255,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }
  function drawHaze(c, w, h) {
    var g = c.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(220,220,220,0.5)"); g.addColorStop(0.6, "rgba(200,200,200,0.18)"); g.addColorStop(1, "rgba(200,200,200,0)");
    c.save(); c.scale(1, h / w); c.fillStyle = g; c.fillRect(0, 0, w, w); c.restore();
  }
  /* the student, seen from behind: slicked dark hair and a white dinner jacket. Shoulders at y 70, 120 wide */
  function drawMan(c, w, h) {
    var cx = w / 2, g;
    c.lineJoin = "round";
    /* the jacket */
    g = c.createLinearGradient(0, 60, w, 60);
    g.addColorStop(0, "#fafafa"); g.addColorStop(0.55, "#d8d8d8"); g.addColorStop(1, "#9c9c9c");
    c.fillStyle = g;
    c.beginPath(); c.moveTo(cx - 20, 58); c.quadraticCurveTo(cx - 56, 60, cx - 60, 86); c.lineTo(cx - 64, h); c.lineTo(cx + 64, h); c.lineTo(cx + 60, 86);
    c.quadraticCurveTo(cx + 56, 60, cx + 20, 58); c.closePath(); c.fill();
    c.strokeStyle = "#2a2a2a"; c.lineWidth = 1.6; c.stroke();
    c.strokeStyle = "rgba(60,60,60,0.55)"; c.lineWidth = 1.4;
    c.beginPath(); c.moveTo(cx, 66); c.lineTo(cx + 1, h); c.stroke();                              /* the back seam */
    c.beginPath(); c.moveTo(cx - 44, 74); c.quadraticCurveTo(cx - 48, 100, cx - 46, h); c.stroke();  /* the sleeves' seams */
    c.beginPath(); c.moveTo(cx + 44, 74); c.quadraticCurveTo(cx + 48, 100, cx + 46, h); c.stroke();
    /* the collar and the neck */
    c.fillStyle = "#7a7a7a"; c.fillRect(cx - 9, 44, 18, 16);
    c.fillStyle = "#f2f2f2"; c.beginPath(); c.moveTo(cx - 20, 58); c.quadraticCurveTo(cx, 50, cx + 20, 58); c.lineTo(cx + 15, 64); c.quadraticCurveTo(cx, 58, cx - 15, 64); c.closePath(); c.fill();
    c.strokeStyle = "#2a2a2a"; c.lineWidth = 1.2; c.stroke();
    /* the head: ears, then slicked hair with a comb's lines */
    c.fillStyle = "#8a8a8a";
    c.beginPath(); c.ellipse(cx - 17, 30, 4, 7, 0, 0, TAU); c.fill(); c.beginPath(); c.ellipse(cx + 17, 30, 4, 7, 0, 0, TAU); c.fill();
    g = c.createLinearGradient(cx - 18, 0, cx + 18, 0); g.addColorStop(0, "#2e2e2e"); g.addColorStop(0.4, "#0e0e0e"); g.addColorStop(1, "#050505");
    c.fillStyle = g; c.beginPath(); c.ellipse(cx, 26, 17, 22, 0, 0, TAU); c.fill();
    c.fillStyle = "#7a7a7a"; c.beginPath(); c.moveTo(cx - 10, 44); c.quadraticCurveTo(cx, 50, cx + 10, 44); c.lineTo(cx + 9, 50); c.lineTo(cx - 9, 50); c.closePath(); c.fill();
    c.strokeStyle = "rgba(170,170,170,0.35)"; c.lineWidth = 1;
    for (var i = -2; i <= 2; i++) { c.beginPath(); c.moveTo(cx + i * 5, 6); c.quadraticCurveTo(cx + i * 6.5, 22, cx + i * 5.5, 40); c.stroke(); }
  }
  /* a gendarme's silhouette (kepi, cape, shoulders), for the frosted glass and the raid */
  function drawCop(c, w, h) {
    var cx = w / 2;
    c.fillStyle = "#050505";
    c.beginPath(); c.moveTo(cx - 9, 6); c.lineTo(cx + 9, 4); c.lineTo(cx + 10, 18); c.lineTo(cx + 15, 21); c.lineTo(cx - 13, 22); c.lineTo(cx - 10, 18); c.closePath(); c.fill();
    c.beginPath(); c.ellipse(cx, 30, 10, 12, 0, 0, TAU); c.fill();
    c.beginPath(); c.moveTo(cx - 6, 40); c.quadraticCurveTo(cx - 30, 44, cx - 34, 70); c.lineTo(cx - 30, h); c.lineTo(cx + 30, h); c.lineTo(cx + 34, 70); c.quadraticCurveTo(cx + 30, 44, cx + 6, 40); c.closePath(); c.fill();
  }

  /* the café, drawn once for the canvas size (B is the layout) */
  function drawRoom(B, W, H) {
    return function (c) {
      var k = B.k, g, i, j, x, y;
      /* the back wall */
      g = c.createLinearGradient(0, 0, 0, B.floorY);
      g.addColorStop(0, "#050505"); g.addColorStop(0.45, "#1a1a1a"); g.addColorStop(1, "#111111");
      c.fillStyle = g; c.fillRect(0, 0, W, B.floorY);
      for (i = 0; i < 900; i++) { c.fillStyle = "rgba(255,255,255," + rnd(0.01, 0.04) + ")"; c.fillRect(rnd(0, W), rnd(B.ceilY, B.floorY), 1.5, 1.5); }
      /* a tiled dado along the bottom of the wall: a band of small diamonds */
      var dy = B.floorY - 34 * k;
      c.fillStyle = "#141414"; c.fillRect(0, dy, W, B.floorY - dy);
      c.fillStyle = "#3a3a3a"; c.fillRect(0, dy, W, 2 * k);
      for (x = 0; x < W; x += 16 * k) {
        c.fillStyle = (Math.round(x / (16 * k)) % 2) ? "#2c2c2c" : "#202020";
        c.beginPath(); c.moveTo(x, dy + 16 * k); c.lineTo(x + 8 * k, dy + 7 * k); c.lineTo(x + 16 * k, dy + 16 * k); c.lineTo(x + 8 * k, dy + 25 * k); c.closePath(); c.fill();
      }
      /* the windows: night sky, the town, the airport's tower in the far one */
      B.win.forEach(function (wn, wi) {
        var x0 = wn.x - wn.w / 2, x1 = wn.x + wn.w / 2, r = wn.w / 2;
        c.save();
        c.beginPath(); c.moveTo(x0, wn.bot); c.lineTo(x0, wn.spring); c.arc(wn.x, wn.spring, r, Math.PI, 0); c.lineTo(x1, wn.bot); c.closePath(); c.clip();
        g = c.createLinearGradient(0, wn.top, 0, wn.bot);
        g.addColorStop(0, "#050505"); g.addColorStop(0.7, "#1b1b1b"); g.addColorStop(1, "#2c2c2c");
        c.fillStyle = g; c.fillRect(x0, wn.top, wn.w, wn.bot - wn.top);
        /* the town: flat roofs, a dome, a tower */
        c.fillStyle = "#060606";
        var hy = wn.bot - 10 * k;
        for (x = x0 - 6; x < x1 + 6; x += rnd(8, 16) * k) { var bh = rnd(8, 26) * k; c.fillRect(x, hy - bh, rnd(9, 18) * k, bh + 12 * k); }
        if (wi === 1) { c.beginPath(); c.arc(wn.x - wn.w * 0.15, hy - 18 * k, 11 * k, Math.PI, 0); c.fill(); c.fillRect(wn.x - wn.w * 0.15 - 11 * k, hy - 18 * k, 22 * k, 20 * k); }
        if (wi === B.towerWin) {
          var tx = wn.x + wn.w * 0.18;
          c.fillRect(tx - 4 * k, hy - 70 * k, 8 * k, 72 * k); c.fillRect(tx - 9 * k, hy - 76 * k, 18 * k, 8 * k);
          c.fillStyle = "#9a9a9a"; c.beginPath(); c.arc(tx, hy - 80 * k, 3.5 * k, 0, TAU); c.fill();
        }
        c.fillStyle = "rgba(200,200,200,0.35)";
        for (i = 0; i < 6; i++) c.fillRect(rnd(x0, x1), hy - rnd(4, 18) * k, 2 * k, 2.5 * k);
        c.restore();
        /* the frame and the tiled arch round it */
        c.strokeStyle = "#060606"; c.lineWidth = 7 * k;
        c.beginPath(); c.moveTo(x0, wn.bot); c.lineTo(x0, wn.spring); c.arc(wn.x, wn.spring, r, Math.PI, 0); c.lineTo(x1, wn.bot); c.stroke();
        c.strokeStyle = "#3c3c3c"; c.lineWidth = 2 * k;
        c.beginPath(); c.moveTo(x0 - 9 * k, wn.bot); c.lineTo(x0 - 9 * k, wn.spring); c.arc(wn.x, wn.spring, r + 9 * k, Math.PI, 0); c.lineTo(x1 + 9 * k, wn.bot); c.stroke();
        for (i = 0; i <= 14; i++) {
          var a = Math.PI + i / 14 * Math.PI, ax = wn.x + Math.cos(a) * (r + 5 * k), ay = wn.spring + Math.sin(a) * (r + 5 * k);
          c.fillStyle = i % 2 ? "#555" : "#2a2a2a"; c.beginPath(); c.arc(ax, ay, 2.6 * k, 0, TAU); c.fill();
        }
        c.fillStyle = "#4a4a4a"; c.fillRect(x0 - 12 * k, wn.bot, wn.w + 24 * k, 6 * k);
        c.fillStyle = "#101010"; c.fillRect(x0 - 12 * k, wn.bot + 6 * k, wn.w + 24 * k, 3 * k);
      });
      /* wall sconces between the windows */
      B.sconce.forEach(function (sx) {
        g = c.createRadialGradient(sx, B.sconceY, 2, sx, B.sconceY, 60 * k);
        g.addColorStop(0, "rgba(255,255,255,0.32)"); g.addColorStop(1, "rgba(255,255,255,0)");
        c.fillStyle = g; c.fillRect(sx - 60 * k, B.sconceY - 60 * k, 120 * k, 120 * k);
        c.fillStyle = "#cfcfcf"; c.beginPath(); c.moveTo(sx - 7 * k, B.sconceY - 6 * k); c.lineTo(sx + 7 * k, B.sconceY - 6 * k); c.lineTo(sx + 4 * k, B.sconceY + 6 * k); c.lineTo(sx - 4 * k, B.sconceY + 6 * k); c.closePath(); c.fill();
      });
      /* a street lamp's light through blinds on the wall by the door: slanting stripes */
      (function () {
        var x0 = B.win[2].x + B.win[2].w * 0.75, x1 = B.door.x0 - 16 * k, ya = B.win[2].top + 10 * k, yb = B.floorY - 36 * k, sl = 18 * k;
        if (x1 - x0 < 30 * k) return;
        c.save(); c.beginPath(); c.rect(x0, ya, x1 - x0, yb - ya); c.clip();
        for (var yy = ya - (x1 - x0); yy < yb + 10; yy += sl) {
          c.fillStyle = "rgba(255,255,255,0.075)";
          c.beginPath(); c.moveTo(x0, yy); c.lineTo(x1, yy + (x1 - x0) * 0.45); c.lineTo(x1, yy + (x1 - x0) * 0.45 + sl * 0.55); c.lineTo(x0, yy + sl * 0.55); c.closePath(); c.fill();
        }
        c.restore();
      })();
      /* the front door at the right: a dark frame, frosted glass, a lamp over it */
      var d = B.door;
      c.fillStyle = "#070707"; c.fillRect(d.x0 - 10 * k, d.top - 12 * k, d.x1 - d.x0 + 20 * k, d.bot - d.top + 12 * k);
      for (j = 0; j < 2; j++) {
        var px0 = d.x0 + j * (d.x1 - d.x0) / 2 + 5 * k, pw = (d.x1 - d.x0) / 2 - 10 * k;
        g = c.createLinearGradient(0, d.top, 0, d.bot);
        g.addColorStop(0, "#4a4a4a"); g.addColorStop(1, "#2a2a2a");
        c.fillStyle = g; c.fillRect(px0, d.top + 6 * k, pw, (d.bot - d.top) * 0.62);
        c.strokeStyle = "#0a0a0a"; c.lineWidth = 2 * k;
        for (i = 1; i < 3; i++) { c.beginPath(); c.moveTo(px0, d.top + 6 * k + (d.bot - d.top) * 0.62 * i / 3); c.lineTo(px0 + pw, d.top + 6 * k + (d.bot - d.top) * 0.62 * i / 3); c.stroke(); }
        c.fillStyle = "#121212"; c.fillRect(px0, d.top + 12 * k + (d.bot - d.top) * 0.62, pw, (d.bot - d.top) * 0.33);
        c.fillStyle = "#8a8a8a"; c.fillRect(j ? px0 + 3 * k : px0 + pw - 7 * k, d.top + (d.bot - d.top) * 0.66, 4 * k, 12 * k);
      }
      g = c.createRadialGradient((d.x0 + d.x1) / 2, d.top - 6 * k, 2, (d.x0 + d.x1) / 2, d.top - 6 * k, 50 * k);
      g.addColorStop(0, "rgba(255,255,255,0.3)"); g.addColorStop(1, "rgba(255,255,255,0)");
      c.fillStyle = g; c.fillRect((d.x0 + d.x1) / 2 - 50 * k, d.top - 56 * k, 100 * k, 100 * k);
      c.fillStyle = "#d0d0d0"; c.fillRect((d.x0 + d.x1) / 2 - 6 * k, d.top - 12 * k, 12 * k, 6 * k);
      /* the ceiling: a dark band with beams */
      c.fillStyle = "#060606"; c.fillRect(0, 0, W, B.ceilY);
      c.fillStyle = "#151515"; for (x = 0; x < W; x += 90 * k) c.fillRect(x, 0, 10 * k, B.ceilY);
      c.fillStyle = "#2a2a2a"; c.fillRect(0, B.ceilY - 3 * k, W, 3 * k);
      /* the floor: dark tiles in perspective */
      g = c.createLinearGradient(0, B.floorY, 0, H);
      g.addColorStop(0, "#151515"); g.addColorStop(1, "#070707");
      c.fillStyle = g; c.fillRect(0, B.floorY, W, H - B.floorY);
      c.strokeStyle = "rgba(255,255,255,0.05)"; c.lineWidth = 1;
      var vx = W / 2, vy = B.floorY - H * 0.6;
      for (i = -16; i <= 16; i++) { x = W / 2 + i * W / 14; c.beginPath(); c.moveTo(vx + (x - vx) * 0.0, B.floorY); c.moveTo(vx + (x - vx) * (B.floorY - vy) / (H - vy), B.floorY); c.lineTo(x, H); c.stroke(); }
      for (y = B.floorY, j = 1; y < H; j++) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); y += 6 * k * j; }
      /* the piano at the left, its lamp, and the pianist at the keys */
      var pn = B.piano;
      c.fillStyle = "#050505"; c.fillRect(pn.x, pn.top, pn.w, pn.bot - pn.top);
      c.fillStyle = "#1e1e1e"; c.fillRect(pn.x + 3 * k, pn.top + 3 * k, pn.w - 6 * k, 3 * k);
      c.fillStyle = "#d8d8d8"; c.fillRect(pn.x - 4 * k, pn.keyY, pn.w + 8 * k, 6 * k);
      c.fillStyle = "#050505"; for (x = pn.x; x < pn.x + pn.w; x += 5 * k) c.fillRect(x, pn.keyY, 2 * k, 3.5 * k);
      g = c.createRadialGradient(pn.x + pn.w * 0.75, pn.top - 8 * k, 2, pn.x + pn.w * 0.75, pn.top - 8 * k, 70 * k);
      g.addColorStop(0, "rgba(255,255,255,0.35)"); g.addColorStop(1, "rgba(255,255,255,0)");
      c.fillStyle = g; c.fillRect(pn.x + pn.w * 0.75 - 70 * k, pn.top - 78 * k, 140 * k, 140 * k);
      c.fillStyle = "#bdbdbd"; c.beginPath(); c.moveTo(pn.x + pn.w * 0.75 - 9 * k, pn.top - 4 * k); c.lineTo(pn.x + pn.w * 0.75 + 9 * k, pn.top - 4 * k); c.lineTo(pn.x + pn.w * 0.75 + 5 * k, pn.top - 16 * k); c.lineTo(pn.x + pn.w * 0.75 - 5 * k, pn.top - 16 * k); c.closePath(); c.fill();
      var mx = pn.x + pn.w * 0.42, my = pn.keyY;
      c.fillStyle = "#0a0a0a";
      c.beginPath(); c.ellipse(mx, my - 36 * k, 9 * k, 10 * k, 0, 0, TAU); c.fill();
      c.beginPath(); c.moveTo(mx - 20 * k, my + 30 * k); c.quadraticCurveTo(mx - 22 * k, my - 22 * k, mx, my - 26 * k); c.quadraticCurveTo(mx + 22 * k, my - 22 * k, mx + 20 * k, my + 30 * k); c.closePath(); c.fill();
      c.fillStyle = "#cfcfcf"; c.beginPath(); c.moveTo(mx - 4 * k, my - 25 * k); c.lineTo(mx + 4 * k, my - 25 * k); c.lineTo(mx, my - 12 * k); c.closePath(); c.fill();
      /* patrons at little tables along the wall, in silhouette, with table lamps */
      B.patrons.forEach(function (pt, pi) {
        var tx = pt.x, ty = B.floorY + 6 * k;
        g = c.createRadialGradient(tx, ty - 14 * k, 2, tx, ty - 14 * k, 46 * k);
        g.addColorStop(0, "rgba(255,255,255,0.28)"); g.addColorStop(1, "rgba(255,255,255,0)");
        c.fillStyle = g; c.fillRect(tx - 46 * k, ty - 60 * k, 92 * k, 92 * k);
        [-1, 1].forEach(function (sd, si) {
          var hx = tx + sd * 26 * k, hy = ty - 32 * k;
          c.fillStyle = "#070707";
          c.beginPath(); c.moveTo(hx - 15 * k, ty + 14 * k); c.quadraticCurveTo(hx - 16 * k, hy + 10 * k, hx, hy + 8 * k); c.quadraticCurveTo(hx + 16 * k, hy + 10 * k, hx + 15 * k, ty + 14 * k); c.closePath(); c.fill();
          c.beginPath(); c.ellipse(hx, hy, 7 * k, 8 * k, 0, 0, TAU); c.fill();
          if ((pi + si) % 2 === 0) { c.fillRect(hx - 12 * k, hy - 5 * k, 24 * k, 3 * k); c.fillRect(hx - 7 * k, hy - 12 * k, 14 * k, 8 * k); }   /* a fedora */
          else { c.beginPath(); c.ellipse(hx + sd * 2 * k, hy - 6 * k, 11 * k, 4 * k, -0.2 * sd, 0, TAU); c.fill(); }                       /* a hat with a brim */
        });
        c.fillStyle = "#101010"; c.beginPath(); c.ellipse(tx, ty, 22 * k, 5 * k, 0, 0, TAU); c.fill();
        c.fillRect(tx - 2 * k, ty, 4 * k, 18 * k);
        c.fillStyle = "#e0e0e0"; c.beginPath(); c.moveTo(tx - 6 * k, ty - 4 * k); c.lineTo(tx + 6 * k, ty - 4 * k); c.lineTo(tx + 3 * k, ty - 14 * k); c.lineTo(tx - 3 * k, ty - 14 * k); c.closePath(); c.fill();
      });
      /* the croupier behind the wheel: dark jacket, white shirt front, a bow tie, the rake */
      var cr = B.croupier;
      c.fillStyle = "#080808";
      c.beginPath(); c.moveTo(cr.x - 36 * k, cr.y); c.quadraticCurveTo(cr.x - 38 * k, cr.y - 62 * k, cr.x, cr.y - 66 * k); c.quadraticCurveTo(cr.x + 38 * k, cr.y - 62 * k, cr.x + 36 * k, cr.y); c.closePath(); c.fill();
      c.fillStyle = "#d6d6d6"; c.beginPath(); c.moveTo(cr.x - 9 * k, cr.y - 64 * k); c.lineTo(cr.x + 9 * k, cr.y - 64 * k); c.lineTo(cr.x + 5 * k, cr.y); c.lineTo(cr.x - 5 * k, cr.y); c.closePath(); c.fill();
      c.fillStyle = "#080808"; c.beginPath(); c.moveTo(cr.x - 8 * k, cr.y - 66 * k); c.lineTo(cr.x, cr.y - 62 * k); c.lineTo(cr.x - 8 * k, cr.y - 58 * k); c.closePath(); c.fill();
      c.beginPath(); c.moveTo(cr.x + 8 * k, cr.y - 66 * k); c.lineTo(cr.x, cr.y - 62 * k); c.lineTo(cr.x + 8 * k, cr.y - 58 * k); c.closePath(); c.fill();
      c.fillStyle = "#6e6e6e"; c.beginPath(); c.ellipse(cr.x, cr.y - 82 * k, 11 * k, 13 * k, 0, 0, TAU); c.fill();
      c.fillStyle = "#0a0a0a"; c.beginPath(); c.ellipse(cr.x, cr.y - 88 * k, 11.5 * k, 8 * k, 0, Math.PI, TAU); c.fill();
      c.fillRect(cr.x - 11.5 * k, cr.y - 89 * k, 23 * k, 4 * k);
      c.strokeStyle = "#3a3a3a"; c.lineWidth = 2.5 * k; c.beginPath(); c.moveTo(cr.x + 30 * k, cr.y - 30 * k); c.lineTo(cr.x + 78 * k, cr.y + 14 * k); c.stroke();
      /* the roulette table: a dark wooden rail and the felt */
      var T = B.table;
      c.fillStyle = "#050505";
      c.beginPath(); c.moveTo(T.tl - 14 * k, T.top - 12 * k); c.lineTo(T.tr + 14 * k, T.top - 12 * k); c.lineTo(T.br + 22 * k, H + 2); c.lineTo(T.bl - 22 * k, H + 2); c.closePath(); c.fill();
      g = c.createLinearGradient(0, T.top - 12 * k, 0, T.top);
      g.addColorStop(0, "#5a5a5a"); g.addColorStop(1, "#1c1c1c");
      c.fillStyle = g; c.beginPath(); c.moveTo(T.tl - 14 * k, T.top - 12 * k); c.lineTo(T.tr + 14 * k, T.top - 12 * k); c.lineTo(T.tr, T.top); c.lineTo(T.tl, T.top); c.closePath(); c.fill();
      g = c.createRadialGradient(B.cx, B.cy - B.R * 0.1, 10, B.cx, B.cy, W * 0.62);
      g.addColorStop(0, "#787878"); g.addColorStop(0.32, "#555555"); g.addColorStop(0.62, "#2a2a2a"); g.addColorStop(1, "#0c0c0c");
      c.fillStyle = g; c.beginPath(); c.moveTo(T.tl, T.top); c.lineTo(T.tr, T.top); c.lineTo(T.br, H + 2); c.lineTo(T.bl, H + 2); c.closePath(); c.fill();
      for (i = 0; i < 1600; i++) { c.fillStyle = "rgba(" + (Math.random() < 0.5 ? "0,0,0" : "255,255,255") + ",0.05)"; c.fillRect(rnd(T.bl, T.br), rnd(T.top, H), 1.2, 1.2); }
      /* moonlight through the blinds: pale slatted stripes falling across the felt, and on the wall by the door */
      B.win.forEach(function (wn, wi) {
        var ya = T.top + 4 * k, yb = H, sh = W * 0.16, x0 = wn.x - wn.w * 0.4 + sh * 0.2, x1 = wn.x + wn.w * 0.6 + sh * 0.2, yy = ya, st2 = 7 * k, on = true;
        while (yy < yb) {
          var y2 = Math.min(yb, yy + st2), fa = (yy - ya) / (yb - ya), fb = (y2 - ya) / (yb - ya);
          if (on) {
            c.fillStyle = "rgba(255,255,255," + (0.07 * (1 - fa * 0.6)) + ")";
            c.beginPath(); c.moveTo(x0 + sh * fa - wn.w * 0.4 * fa, yy); c.lineTo(x1 + sh * fa + wn.w * 0.5 * fa, yy); c.lineTo(x1 + sh * fb + wn.w * 0.5 * fb, y2); c.lineTo(x0 + sh * fb - wn.w * 0.4 * fb, y2); c.closePath(); c.fill();
          }
          yy = y2; st2 *= on ? 1.0 : 1.09; on = !on;
        }
      });
      /* the betting layout on the felt, right of the wheel: a grid of numbers */
      var bl = B.layout;
      if (bl) {
        c.strokeStyle = "rgba(235,235,235,0.75)"; c.lineWidth = 1.4 * k; c.fillStyle = "rgba(235,235,235,0.7)";
        c.font = "bold " + Math.round(10 * k) + "px " + TYPE; c.textAlign = "center"; c.textBaseline = "middle";
        var cols = 6, rows = 3, num = 1;
        for (j = 0; j <= rows; j++) {
          var yy = bl.y0 + (bl.y1 - bl.y0) * j / rows, sk = (yy - bl.y0) * 0.35;
          c.beginPath(); c.moveTo(bl.x0 - sk, yy); c.lineTo(bl.x1 + sk * 0.2, yy); c.stroke();
        }
        for (i = 0; i <= cols; i++) {
          var xx = bl.x0 + (bl.x1 - bl.x0) * i / cols, sk2 = (bl.y1 - bl.y0) * 0.35 * (1 - i / cols) - (bl.y1 - bl.y0) * 0.07 * (i / cols);
          c.beginPath(); c.moveTo(xx, bl.y0); c.lineTo(xx - sk2, bl.y1); c.stroke();
        }
        for (i = 0; i < cols; i++) for (j = 0; j < rows; j++) {
          var fx = (i + 0.5) / cols, fy = (j + 0.5) / rows, py = bl.y0 + (bl.y1 - bl.y0) * fy;
          var px = bl.x0 + (bl.x1 - bl.x0) * fx - (py - bl.y0) * 0.35 * (1 - fx) + (py - bl.y0) * 0.07 * fx * 0;
          c.fillText(String(num++ + (num % 2 ? 3 : 7)), px, py);
        }
        c.beginPath(); c.moveTo(bl.x0, bl.y0); c.lineTo(bl.x0 - 22 * k, (bl.y0 + bl.y1) / 2); c.lineTo(bl.x0 - (bl.y1 - bl.y0) * 0.35, bl.y1); c.stroke();
        c.fillText("0", bl.x0 - 12 * k - (bl.y1 - bl.y0) * 0.1, (bl.y0 + bl.y1) / 2);
        c.font = "bold " + Math.round(11 * k) + "px " + TYPE;
        c.fillText("RICK'S", (bl.x0 + bl.x1) / 2 - (bl.y1 - bl.y0) * 0.2, bl.y1 + 16 * k);
      }
      /* stacks of chips left of the wheel */
      B.stacks.forEach(function (st) {
        for (var h2 = 0; h2 < st.n; h2++) {
          var sy = st.y - h2 * 3.2 * k;
          c.fillStyle = "#050505"; c.beginPath(); c.ellipse(st.x, sy + 1.5 * k, 12 * k, 4.5 * k, 0, 0, TAU); c.fill();
          c.fillStyle = st.col; c.beginPath(); c.ellipse(st.x, sy, 12 * k, 4.5 * k, 0, 0, TAU); c.fill();
          c.strokeStyle = "rgba(0,0,0,0.6)"; c.lineWidth = 1; c.stroke();
        }
      });
      /* the wheel's bowl (it never turns): the wooden rim, the ball track, the slope to the rotor */
      var cx = B.cx, cy = B.cy, R = B.R;
      function ell(r) { c.beginPath(); c.ellipse(cx, cy, r * R, r * R * SQ, 0, 0, TAU); }
      c.fillStyle = "rgba(0,0,0,0.55)"; c.beginPath(); c.ellipse(cx, cy + 14 * k, 1.12 * R, 1.12 * R * SQ, 0, 0, TAU); c.fill();
      g = c.createLinearGradient(cx - R, cy - R * SQ, cx + R, cy + R * SQ);
      g.addColorStop(0, "#3a3a3a"); g.addColorStop(0.5, "#141414"); g.addColorStop(1, "#2a2a2a");
      c.fillStyle = g; ell(1.08); c.fill();
      c.fillStyle = "#0a0a0a"; c.beginPath(); c.ellipse(cx, cy + 8 * k, 1.08 * R, 1.08 * R * SQ, 0, 0, Math.PI); c.ellipse(cx, cy, 1.08 * R, 1.08 * R * SQ, 0, Math.PI, 0, true); c.fill();
      c.strokeStyle = "#6a6a6a"; c.lineWidth = 1.5 * k; ell(1.08); c.stroke();
      g = c.createLinearGradient(cx - R, cy - R * SQ, cx + R * 0.6, cy + R * SQ);
      g.addColorStop(0, "#e2e2e2"); g.addColorStop(0.5, "#a8a8a8"); g.addColorStop(1, "#6c6c6c");
      c.fillStyle = g; ell(0.99); c.fill();
      c.strokeStyle = "rgba(0,0,0,0.5)"; c.lineWidth = 1; ell(0.84); c.stroke();
      g = c.createLinearGradient(cx - R, cy, cx + R, cy);
      g.addColorStop(0, "#5c5c5c"); g.addColorStop(1, "#3a3a3a");
      c.fillStyle = g; ell(0.83); c.fill();
      c.fillStyle = "#050505"; ell(R_BAND + 0.01); c.fill();
      /* the lamp's pool of light over the wheel */
      g = c.createRadialGradient(cx, cy - R * 0.3, 10, cx, cy, R * 1.6);
      g.addColorStop(0, "rgba(255,255,255,0.10)"); g.addColorStop(1, "rgba(255,255,255,0)");
      c.fillStyle = g; c.fillRect(cx - R * 1.6, cy - R * 1.6, R * 3.2, R * 3.2);
    };
  }
  /* the blinds over the windows (they sit over the searchlight's beam, which shows through the gaps) */
  function drawBlinds(B, W, H) {
    return function (c) {
      var k = B.k, y, i;
      B.win.forEach(function (wn) {
        var x0 = wn.x - wn.w / 2, x1 = wn.x + wn.w / 2, r = wn.w / 2, sl = 6.5 * k, gap = 3.2 * k;
        /* the arch: a carved lattice */
        c.save(); c.beginPath(); c.moveTo(x0, wn.spring + 1); c.arc(wn.x, wn.spring, r, Math.PI, 0); c.closePath(); c.clip();
        c.strokeStyle = "#1c1c1c"; c.lineWidth = 3 * k;
        for (i = -12; i <= 12; i++) {
          c.beginPath(); c.moveTo(wn.x + i * 10 * k - r, wn.spring); c.lineTo(wn.x + i * 10 * k + r, wn.spring - 2 * r); c.stroke();
          c.beginPath(); c.moveTo(wn.x + i * 10 * k + r, wn.spring); c.lineTo(wn.x + i * 10 * k - r, wn.spring - 2 * r); c.stroke();
        }
        c.restore();
        c.fillStyle = "#1c1c1c"; c.fillRect(x0, wn.spring - 2 * k, wn.w, 5 * k);
        /* the slats */
        for (y = wn.spring + 4 * k; y < wn.bot - 2; y += sl + gap) {
          var g = c.createLinearGradient(0, y, 0, y + sl);
          g.addColorStop(0, "#c4c4c4"); g.addColorStop(0.45, "#8e8e8e"); g.addColorStop(1, "#3e3e3e");
          c.fillStyle = g; c.fillRect(x0, y, wn.w, Math.min(sl, wn.bot - y));
        }
        c.strokeStyle = "rgba(20,20,20,0.85)"; c.lineWidth = 1.2 * k;
        [0.25, 0.75].forEach(function (f) { c.beginPath(); c.moveTo(x0 + wn.w * f, wn.spring); c.lineTo(x0 + wn.w * f, wn.bot); c.stroke(); });
        c.fillStyle = "#0a0a0a"; c.fillRect(x0 - 3 * k, wn.spring - 4 * k, wn.w + 6 * k, 4 * k);
      });
    };
  }
  function drawVignette(W, H) {
    return function (c) {
      var g = c.createRadialGradient(W / 2, H * 0.52, Math.min(W, H) * 0.3, W / 2, H * 0.52, Math.max(W, H) * 0.75);
      g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(0.7, "rgba(0,0,0,0.38)"); g.addColorStop(1, "rgba(0,0,0,0.85)");
      c.fillStyle = g; c.fillRect(0, 0, W, H);
    };
  }
  function ensureArt(scene) {
    canvasTex(scene, "md-roulette-grain", 256, 256, drawGrain);
    canvasTex(scene, "md-roulette-chip", 52, 52, drawChip);
    canvasTex(scene, "md-roulette-ball", 16, 16, drawBall);
    canvasTex(scene, "md-roulette-glow", 128, 128, drawGlow);
    canvasTex(scene, "md-roulette-haze", 200, 90, drawHaze);
    canvasTex(scene, "md-roulette-man", 140, 150, drawMan);
    canvasTex(scene, "md-roulette-cop", 72, 110, drawCop);
  }

  /* sound: the realm kit's blips */
  function blip(f, f2, d, type, v, delay) { try { var R = window.SolRealms; if (R && R.blip) R.blip(f, f2, d, type, v, delay); } catch (e) {} }
  function hiss(d, f, v, delay) { try { var R = window.SolRealms; if (R && R.hiss) R.hiss(d, f, v, delay); } catch (e) {} }
  function chord(fs, v, d) { fs.forEach(function (f, i) { blip(f, f * 0.998, d || 1.1, "triangle", v || 0.03, i * 0.07); }); }

  M.extend("roulette", {
    name: "Rick's Roulette", kind: "roulette level", level: "roulette level", act: "SPIN",
    how: "Casablanca, Rick's Café, after dark. The roulette wheel turns, and every answer letter rides it on a white chip over its own ivory pockets; the black pockets between them belong to the house. You run the ball. Spin it and it races round the rim against the wheel, slows, drops and rattles into a pocket: whatever pocket it stops in is your pick. The wheel keeps turning while the ball rolls, so throw early and let the wheel bring your letter to the ball. On the first levels a white ring shows the pocket the ball would stop in if you threw right now: spin when the ring sits on the right letter. Walk along the table to throw from another spot. Meanwhile the airport searchlight swings through the blinds: when the slatted light comes across the café, duck until it has passed. And the police are coming: the RAID bar fills while you wait and every time the house wins.",
    rules: "The ball stopping in a wrong letter's pocket costs a life. So does the searchlight catching you standing, or the police raid getting to the door before you answer. A black house pocket costs no life, but the raid comes closer.",
    keys: "Space, SPIN, or a click spins the ball · ◀ ▶, A / D, the pad or the mouse walk along the table · hold ▼, S, Shift or the right mouse button to duck under the searchlight.",
    tip: "RICK'S ROULETTE — spin the ball into the right letter's pocket. Duck (▼) when the searchlight comes through the blinds.",
    hint1: "Land the ball in a pocket under the right letter's chip. The passage stays in the side panel.",
    hint2: "This question has two right letters. Land the ball on both of them.",
    news: ["",
      "More of the house: two black pockets between the letters now. The ball bounces a little, so it may not stop exactly where the ring says. Aim for the middle of a letter.",
      "Steel diamonds on the bowl: a ball that drops onto one gets knocked farther along. Walk along the table to throw past them (the ring still shows where it really lands).",
      "Each letter has two pockets now. The croupier gives the wheel a push now and then, so its speed changes, and the white ring has become a blur: aim for the middle of it.",
      "The searchlight can swing back the way it came: stay down until it is really gone. Six diamonds.",
      "Three house pockets between the letters, and a push can send the wheel spinning the other way.",
      "No more ring: only a mark on the bowl shows where the ball will drop. Lead your letter: the wheel turns while the ball rolls. Eight diamonds.",
      "One pocket a letter.",
      "No marks at all: you know this wheel by now. And a second searchlight sweeps from the other side.",
      "The last night in Casablanca: the fastest wheel, the quickest police, everything at once."],
    params: rlParams
  }, {
    rlParams: function (n) { return rlParams(n); },

    setup_roulette: function () {
      ensureArt(this);
      var P = rlParams(this.night), i, self = this;
      var B = this.rl = { P: P, t: 0, k: 1, th: 0, w: P.spin, wTarget: P.spin, push: null, pushIn: P.pushRate ? rnd(0.7, 1.3) / P.pushRate : 0,
        launch: HALF, duck: false, duckK: 0, armed: false, lpx: null, lpy: null, sectors: [], pockets: [], NP: 1, pa: 1,
        ball: null, cd: 0, raid: 0, raidAnim: 0, whistleT: 0, lastPocket: -1, fanA: 0, haze: [], told: {}, spins: 0, houseWins: 0, wins: 0, hits: 0, raids: 0,
        sl: { phase: "idle", t: 0, next: Math.max(5.5, P.sweepEvery * 0.75), bands: [], hit: false, swings: 0 }, roomKey: null, flick: 0 };
      this.cameras.main.setBackgroundColor("#050505");
      this.rlLayout();
      B.room = this.add.image(0, 0, B.roomKey).setOrigin(0, 0).setDepth(0);
      B.skyG = this.add.graphics().setDepth(1);
      B.blinds = this.add.image(0, 0, B.blindsKey).setOrigin(0, 0).setDepth(2);
      B.doorG = this.add.graphics().setDepth(3);
      B.cops = [];
      for (i = 0; i < 3; i++) B.cops.push(this.add.image(0, 0, "md-roulette-cop").setOrigin(0.5, 1).setDepth(3).setVisible(false));
      B.fanG = this.add.graphics().setDepth(4);
      B.lamps = [];
      for (i = 0; i < 2; i++) B.lamps.push(this.add.image(0, 0, "md-roulette-glow").setDepth(4).setBlendMode(1).setAlpha(0.5));
      for (i = 0; i < 7; i++) B.haze.push({ spr: this.add.image(0, 0, "md-roulette-haze").setDepth(5).setAlpha(0.12), x: Math.random(), y: rnd(0.12, 0.55), v: rnd(0.006, 0.016) * (i % 2 ? 1 : -1), s: rnd(1.4, 2.6), ph: rnd(0, 6) });
      B.wheelG = this.add.graphics().setDepth(7);
      B.guideG = this.add.graphics().setDepth(9);
      B.ballShadow = this.add.image(0, 0, "md-roulette-glow").setDepth(10).setTint(0x000000).setAlpha(0).setVisible(false);
      B.ballSpr = this.add.image(0, 0, "md-roulette-ball").setDepth(10).setVisible(false);
      B.armG = this.add.graphics().setDepth(12);
      B.fxG = this.add.graphics().setDepth(13); B.fx = []; B.trail = [];
      B.man = this.add.image(0, 0, "md-roulette-man").setOrigin(0.5, 0).setDepth(11);
      B.handBall = this.add.image(0, 0, "md-roulette-ball").setDepth(13);
      B.shaftG = this.add.graphics().setDepth(14).setBlendMode(1);
      B.rushG = this.add.graphics().setDepth(15);
      B.rush = [];
      for (i = 0; i < 3; i++) B.rush.push(this.add.image(0, 0, "md-roulette-cop").setOrigin(0.5, 1).setDepth(15).setVisible(false));
      B.grain = this.add.tileSprite(0, 0, this.W, this.H, "md-roulette-grain").setOrigin(0, 0).setDepth(17).setAlpha(0.13);
      B.vig = this.add.image(0, 0, B.vigKey).setOrigin(0, 0).setDepth(17.5);
      B.dim = this.add.graphics().setDepth(17.6);
      B.uiG = this.add.graphics().setDepth(21);
      var st = function (sz, col) { return { fontFamily: TYPE, fontSize: sz, color: col || "#f0f0f0", fontStyle: "bold", stroke: "#000000", strokeThickness: 4 }; };
      B.txRaid = this.add.text(0, 0, "THE POLICE", st(13)).setOrigin(0, 0.5).setDepth(22);
      B.txWarn = this.add.text(0, 0, "SEARCHLIGHT", st(15)).setOrigin(0.5).setDepth(22).setVisible(false);
      B.txDuck = this.add.text(0, 0, "DUCK! ▼", st(18, "#ffffff")).setOrigin(0.5, 1).setDepth(22).setVisible(false);
      B.txSpin = this.add.text(0, 0, "", st(12, "#d8d8d8")).setOrigin(0.5, 0).setDepth(22);
      B.txWheel = this.add.text(0, 0, "", st(12, "#d8d8d8")).setOrigin(0.5, 0.5).setDepth(22).setVisible(false);
      this.rlPlaceStatic();
      this.makeSol(B.cx, B.cy, "up").setVisible(false);
      /* the reading pop-up disarms the spin: a key or button still held when it closes does not spin */
      if (!this._rlReadWrap) {   /* once per scene instance (Phaser reuses it on restart) */
        var openReading = this.openReading;
        this._rlReadWrap = true;
        this.openReading = function (reason) { if (self.rl) self.rl.armed = false; return openReading.call(self, reason); };
      }   /* the student is drawn by the mode; the sprite stays for coin pop-ups */
    },

    /* everything that depends on the canvas size */
    rlLayout: function () {
      var B = this.rl, W = this.W, H = this.H, k, i;
      k = B.k = clamp(Math.min(H / 768, W / 1000), 0.55, 1.3);
      B.ceilY = Math.round(H * 0.055);
      B.floorY = Math.round(H * 0.47);
      B.R = Math.round(Math.min(W * 0.255, H * 0.43));
      B.cx = Math.round(W * 0.44);
      B.cy = Math.round(H * 0.615);
      /* the on-screen pad over the canvas's bottom-left corner: the wheel and the student keep clear of it */
      var pad = this.rlPadBox();
      if (pad && pad.x0 < W * 0.4 && pad.y1 > B.cy) B.cx = Math.round(Math.max(B.cx, pad.x1 + B.R * 1.12 + 10 * k));
      B.cx = Math.min(B.cx, Math.round(W - B.R * 1.12 - 10 * k));
      B.wallTop = B.ceilY;
      var ww = clamp(W * 0.115, 70 * k, 150 * k);
      var top = B.ceilY + H * 0.07, bot = B.floorY - 40 * k;
      B.win = [0.12, 0.33, 0.56].map(function (f) { return { x: W * f, w: ww, top: top, spring: top + ww / 2, bot: bot }; });
      B.towerWin = 2;
      B.sconce = [W * 0.225, W * 0.445];
      B.sconceY = top + (bot - top) * 0.35;
      B.door = { x0: W * 0.75, x1: W * 0.75 + clamp(W * 0.14, 90 * k, 190 * k), top: B.ceilY + H * 0.085, bot: B.floorY };
      B.piano = { x: W * 0.01, w: W * 0.11, top: B.floorY - 52 * k, bot: B.floorY + 24 * k, keyY: B.floorY - 14 * k };
      B.patrons = [{ x: W * 0.235 }, { x: W * 0.665 }];
      B.croupier = { x: B.cx + B.R * 0.62, y: B.cy - B.R * SQ * 1.25 - 10 * k };
      B.table = { top: B.cy - B.R * SQ * 1.25 - 4 * k, tl: W * 0.07, tr: W * 0.95, bl: W * 0.0 - 30 * k, br: W + 30 * k };
      var lx0 = B.cx + B.R * 1.22, lx1 = W * 0.93;
      B.layout = lx1 - lx0 > 120 * k ? { x0: lx0 + (B.R * SQ) * 0.35, x1: lx1, y0: B.cy - B.R * SQ * 0.8, y1: B.cy + B.R * SQ * 0.9 } : null;
      B.stacks = [];
      var sx0 = B.cx - B.R * 1.22;
      if (sx0 > 60 * k) for (i = 0; i < 4; i++) B.stacks.push({ x: sx0 - i * 28 * k - 10 * k, y: B.cy + B.R * SQ * 0.2 + (i % 2) * 10 * k, n: 3 + ((i * 5) % 6), col: ["#e8e8e8", "#3a3a3a", "#9a9a9a", "#e8e8e8"][i] });
      B.fans = [{ x: W * 0.27, y: B.ceilY + 20 * k }, { x: W * 0.66, y: B.ceilY + 20 * k }];
      B.manH = 150 * k * 1.05;
      B.manY = Math.min(H - 70 * k, B.cy + B.R * SQ * 1.1 + 18 * k);   /* the top of his head, standing */
      B.manDuckY = H - 22 * k;
      var key = "md-roulette-room-" + W + "x" + H;
      if (B.roomKey !== key) {
        var old = [B.roomKey, B.blindsKey, B.vigKey];
        canvasTex(this, key, W, H, drawRoom(B, W, H));
        canvasTex(this, "md-roulette-blinds-" + W + "x" + H, W, H, drawBlinds(B, W, H));
        canvasTex(this, "md-roulette-vig-" + W + "x" + H, W, H, drawVignette(W, H));
        B.roomKey = key; B.blindsKey = "md-roulette-blinds-" + W + "x" + H; B.vigKey = "md-roulette-vig-" + W + "x" + H;
        if (B.room) B.room.setTexture(B.roomKey);
        if (B.blinds) B.blinds.setTexture(B.blindsKey);
        if (B.vig) B.vig.setTexture(B.vigKey);
        var self = this;
        old.forEach(function (o) { if (o && [B.roomKey, B.blindsKey, B.vigKey].indexOf(o) === -1) { try { self.textures.remove(o); } catch (e) {} } });
      }
    },
    rlPadBox: function () {
      try {
        var pad = document.querySelector("#controls .dpad") || document.querySelector(".dpad"), cv = this.game && this.game.canvas;
        if (!pad || !cv) return null;
        var a = pad.getBoundingClientRect(), c = cv.getBoundingClientRect();
        if (!a.width || !a.height || !c.width || !c.height) return null;
        if (a.right < c.left || a.left > c.right || a.bottom < c.top || a.top > c.bottom) return null;
        var fx = this.W / c.width, fy = this.H / c.height;
        return { x0: (a.left - c.left) * fx, y0: (a.top - c.top) * fy, x1: (a.right - c.left) * fx, y1: (a.bottom - c.top) * fy };
      } catch (e) { return null; }
    },
    rlPlaceStatic: function () {
      var B = this.rl, k = B.k, W = this.W, H = this.H;
      B.room.setPosition(0, 0); B.blinds.setPosition(0, 0); B.vig.setPosition(0, 0);
      B.grain.setSize(W, H);
      B.man.setScale(k * 1.05);
      B.handBall.setScale(k * 0.95);
      B.cops.forEach(function (c) { c.setScale(k * 0.9); });
      B.rush.forEach(function (c) { c.setScale(k * 1.5); });
      B.lamps.forEach(function (l, i) { l.setPosition(B.fans[i].x, B.fans[i].y + 34 * k).setScale(2.2 * k); });
      B.txRaid.setFontSize(Math.round(13 * k)).setOrigin(0.5, 1).setPosition((B.door.x0 + B.door.x1) / 2, B.door.top - 24 * k);
      B.txWarn.setFontSize(Math.round(15 * k));
      B.txDuck.setFontSize(Math.round(18 * k));
      B.txSpin.setFontSize(Math.round(12 * k));
      B.txWheel.setFontSize(Math.round(12 * k));
      B.chipS = 0.92 * k;
      (B.sectors || []).forEach(function (sc) { sc.txt.setFontSize(Math.round(27 * k)); });
    },
    resize_roulette: function () {
      var B = this.rl;
      this.rlLayout();
      this.rlPlaceStatic();
      B.sl.bands.forEach(function (b) { b.x = clamp(b.x, -0.5 * this.W, 1.5 * this.W); }, this);
    },

    /* ── the wheel ── */
    /* a point on the wheel, world angle a (0 = right, π/2 = the front), radius r (1 = the ball track's outer edge) */
    rlPt: function (a, r) { var B = this.rl; return { x: B.cx + Math.cos(a) * r * B.R, y: B.cy + Math.sin(a) * r * B.R * SQ }; },
    answers_roulette: function () {
      var B = this.rl, P = B.P, self = this, k = B.k;
      B.sectors.forEach(function (sc) { try { sc.chip.destroy(); sc.txt.destroy(); } catch (e) {} });
      B.sectors = []; B.pockets = [];
      var letters = this.choiceLetters(), n = letters.length;
      letters.forEach(function (Lt, j) {
        var sc = { letter: Lt, state: self.extracted.indexOf(Lt) !== -1 ? "found" : "live", first: B.pockets.length, n: P.pockets };
        for (var i = 0; i < P.pockets; i++) B.pockets.push({ sec: j });
        for (i = 0; i < P.house; i++) B.pockets.push({ sec: -1 });
        sc.chip = self.add.image(-99, -99, "md-roulette-chip").setDepth(8);
        sc.txt = self.add.text(-99, -99, Lt, { fontFamily: SERIF, fontSize: Math.round(27 * k), color: "#0a0a0a", fontStyle: "bold" }).setOrigin(0.5).setDepth(8);
        B.sectors.push(sc);
        self.rlPaint(sc);
      });
      B.NP = Math.max(1, B.pockets.length); B.pa = TAU / B.NP;
      if (B.ball && B.ball.state !== "rest") this.rlDropBall();
      B.ball = null; B.cd = 0; B.raid = 0; B.lastPick = null;
      this.rlDrawWheel();
    },
    rlPaint: function (sc) {
      sc.txt.setText(sc.state === "dead" ? "✕" : sc.state === "found" ? "✓" : sc.letter).setColor(sc.state === "dead" ? "#6a6a6a" : "#0a0a0a");
      sc.chip.setTint(sc.state === "dead" ? 0x6a6a6a : 0xffffff);
    },
    /* what lies under rotor-frame angle a: the pocket's index and its letter sector (or the house) */
    rlPocketAt: function (a) {
      var B = this.rl, i = Math.floor(wrap(a) / B.pa) % B.NP;
      var p = B.pockets[i] || { sec: -1 };
      return { i: i, sec: p.sec, sc: p.sec >= 0 ? B.sectors[p.sec] : null };
    },
    /* the rotor-frame angle at the middle of a letter's run of pockets */
    rlSectorMid: function (j) { var B = this.rl, sc = B.sectors[j]; return (sc.first + sc.n / 2) * B.pa; },
    /* the diamond (if any) at world angle a */
    rlDiamondAt: function (a) {
      var B = this.rl, n = B.P.diamonds, i;
      for (i = 0; i < n; i++) { var d = HALF + Math.PI / n + i * TAU / n, x = Math.atan2(Math.sin(a - d), Math.cos(a - d)); if (Math.abs(x) <= DIAM_W) return d; }
      return null;
    },
    rlBallDir: function () { return this.rl.w >= 0 ? -1 : 1; },
    /* where a ball thrown now from launch angle thL would stop (no jitter): the physics the throw uses */
    rlPredict: function (thL) {
      var B = this.rl, P = B.P, sB = this.rlBallDir(), w = B.w;
      if (thL == null) thL = B.launch;
      var D1 = (P.v0 + V1) / 2 * P.rimT, phi1 = thL + sB * D1;
      var dia = this.rlDiamondAt(phi1), kick = dia != null ? sB * P.kick : 0;
      var D2 = (sB * V1 + w) / 2 * P.dropT;
      var phiL = phi1 + D2 + kick, thW = B.th + w * (P.rimT + P.dropT);
      var a = wrap(phiL - thW), pk = this.rlPocketAt(a);
      return { phi1: phi1, phiL: phiL, alpha: a, kick: kick, diamond: dia, pocket: pk.i, sec: pk.sec, letter: pk.sc ? pk.sc.letter : null, T: P.rimT + P.dropT };
    },
    /* (for the tests) turn the wheel so a ball thrown now from here stops in the middle of letter Lt (or a house pocket: Lt null) */
    rlAimFor: function (Lt) {
      var B = this.rl, j, a;
      if (Lt == null) { for (j = 0; j < B.NP; j++) if (B.pockets[j].sec < 0) break; a = (j + 0.5) * B.pa; }
      else { for (j = 0; j < B.sectors.length; j++) if (B.sectors[j].letter === Lt) break; if (j >= B.sectors.length) return null; a = this.rlSectorMid(j); }
      var p = this.rlPredict();
      B.th = wrap(B.th + (p.alpha - a));
      return this.rlPredict();
    },

    /* ── the throw ── */
    rlCanThrow: function () {
      var B = this.rl;
      return !this._between && !this._finishing && !this.ended && !(B.ball && B.ball.state !== "rest") && B.cd <= 0 && B.duckK < 0.25 && !B.push && B.raidAnim <= 0;
    },
    rlThrow: function (jit) {
      var B = this.rl, P = B.P;
      if (!this.rlCanThrow()) return null;
      var pr = this.rlPredict();
      var j = jit != null ? jit : (P.jitter ? rnd(-P.jitter, P.jitter) : 0);
      var b = B.ball = { state: "rim", t: 0, th0: B.launch, sB: this.rlBallDir(), w: B.w, phi: B.launch, r: R_TRACK, pred: pr, jit: j, kick: pr.kick, lastIdx: -1, tick: 0 };
      B.spins += 1; B.lastPocket = -1;
      hiss(0.35, 2400, 0.05); blip(520, 900, 0.18, "triangle", 0.03);
      if (!B.told.spin) { B.told.spin = true; this.toast("There it goes. The ball runs against the wheel, drops, and the pocket it stops in is your answer.", 3600); }
      return b;
    },
    rlDropBall: function () { var B = this.rl; B.ball = null; B.ballSpr.setVisible(false); B.ballShadow.setVisible(false); },
    rlTickBall: function (s) {
      var B = this.rl, P = B.P, b = B.ball;
      if (!b) return;
      var fresh = false;   /* the tick the ball leaves the track: its time is already counted */
      if (b.state === "rim") {
        b.t += s;
        var a = (P.v0 - V1) / P.rimT, t = Math.min(b.t, P.rimT);
        b.phi = b.th0 + b.sB * (P.v0 * t - 0.5 * a * t * t);
        b.r = R_TRACK;
        b.tick += s * (P.v0 - a * t);
        if (b.tick > 1.4) { b.tick = 0; blip(2600, 2400, 0.015, "sine", 0.006); }
        if (b.t >= P.rimT) {
          b.state = "drop"; b.t = b.t - P.rimT; fresh = true; b.phi1 = b.th0 + b.sB * (P.v0 + V1) / 2 * P.rimT;
          if (b.kick) { blip(1900, 1300, 0.05, "square", 0.03); hiss(0.08, 3500, 0.04); var q = this.rlPt(b.phi1, R_DIAM); this.rlFlash(q.x, q.y, 22); if (!B.told.diamond) { B.told.diamond = true; this.toast("Clack! The ball hit a steel diamond and got knocked farther along. Walk along the table to throw past them.", 3800); } }
        }
      }
      if (b.state === "drop") {
        if (!fresh) b.t += s;
        var u = clamp(b.t / P.dropT, 0, 1), tt = Math.min(b.t, P.dropT);
        b.phi = b.phi1 + b.sB * V1 * tt + (b.w - b.sB * V1) * tt * tt / (2 * P.dropT) + (b.kick + b.jit) * ease(Math.min(1, u * 1.6));
        var hop = u > 0.45 ? Math.abs(Math.sin(u * Math.PI * 6)) * 0.05 * (1 - u) : (b.kick && u < 0.3 ? Math.sin(u / 0.3 * Math.PI) * 0.06 : 0);
        b.r = R_TRACK - (R_TRACK - R_POCKET) * ease(u) + hop;
        if (u > 0.4) {
          var idx = this.rlPocketAt(b.phi - B.th).i;
          if (idx !== b.lastIdx) { b.lastIdx = idx; blip(1500 + Math.random() * 500, 900, 0.025, "square", 0.012); }
        }
        if (b.t >= P.dropT) this.rlLand();
      }
      if (b.state === "rest") {
        b.t += s;
        var mid = (b.idx + 0.5) * B.pa, f = Math.min(1, b.t / 0.2);
        b.alpha = b.alpha0 + (mid - b.alpha0) * f;
        b.phi = B.th + b.alpha; b.r = R_POCKET;
      }
    },
    /* the ball stops in a pocket: that pocket is the pick */
    rlLand: function () {
      var B = this.rl, P = B.P, b = B.ball;
      /* the ball's angle is for the exact moment it stopped; turn the wheel back by the part of this tick after it */
      var over = Math.max(0, b.t - P.dropT), a = wrap(b.phi - (B.th - B.w * over)), pk = this.rlPocketAt(a);
      b.state = "rest"; b.t = 0; b.alpha0 = a; b.idx = pk.i;
      /* keep the ball's settle short of the next pocket */
      if (Math.abs(a - (pk.i + 0.5) * B.pa) > B.pa) b.alpha0 = (pk.i + 0.5) * B.pa;
      B.lastPocket = pk.i; B.cd = 0.45;
      blip(240, 120, 0.12, "triangle", 0.05); hiss(0.06, 1800, 0.03);
      var q = this.rlPt(b.phi, R_POCKET), res = "house";
      if (!pk.sc) {
        B.houseWins += 1;
        if (!this._between) B.raid += P.houseCost;
        chord([196, 233, 294], 0.022, 0.9);
        this.toast(B.houseWins === 1 ? "A black pocket. The house wins; it always does. The ball comes back to you, but the police are a step closer." : "The house wins. Spin again before the police get here.", 2600);
      } else if (pk.sc.state !== "live") {
        res = pk.sc.state;
        if (!this._between) B.raid += P.houseCost * 0.5;
        this.toast(pk.sc.state === "dead" ? "That letter's crossed out. Find another one." : "You already found that letter. Land the other right one.", 2600);
      } else {
        B.lastPick = pk.sc;
        res = this.answerPick(pk.sc.letter, q.x, q.y - 20 * B.k);
        if (res === "wrong") { pk.sc.state = "dead"; this.rlPaint(pk.sc); chord([147, 175, 208], 0.03, 1.2); }
        else if (res === "partial") { pk.sc.state = "found"; this.rlPaint(pk.sc); chord([262, 330, 392], 0.025, 1); }
        else if (res === "done") { B.wins += 1; chord([262, 330, 392, 523], 0.03, 1.4); }
      }
      b.result = res;
      return res;
    },

    /* a white ring that opens and fades (the film's own flash, no colour) */
    rlFlash: function (x, y, r) { this.rl.fx.push({ x: x, y: y, r: r * this.rl.k, t: 0 }); },
    rlDrawFx: function (s) {
      var B = this.rl, g = B.fxG, k = B.k, b = B.ball, i;
      g.clear();
      B.fx = B.fx.filter(function (f) {
        f.t += s;
        var u = f.t / 0.45;
        if (u >= 1) return false;
        g.lineStyle(3 * k * (1 - u), 0xffffff, 1 - u); g.strokeCircle(f.x, f.y, f.r * (0.3 + u));
        g.fillStyle(0xffffff, 0.35 * (1 - u)); g.fillCircle(f.x, f.y, f.r * 0.35 * (1 - u));
        return true;
      });
      /* the ball's streak while it races round the rim */
      if (b && b.state !== "rest") {
        B.trail.push({ phi: b.phi, r: b.r });
        if (B.trail.length > 7) B.trail.shift();
        for (i = 0; i < B.trail.length - 1; i++) {
          var q = this.rlPt(B.trail[i].phi, B.trail[i].r);
          g.fillStyle(0xffffff, 0.08 + 0.05 * i); g.fillCircle(q.x, q.y - 3 * k, (2 + i * 0.5) * k);
        }
      } else B.trail = [];
    },

    /* ── the croupier's push ── */
    rlTickPush: function (s) {
      var B = this.rl, P = B.P;
      if (B.push) {
        B.push.t += s;
        var f = clamp(B.push.t / 0.6, 0, 1);
        B.w = B.push.w0 + (B.push.w1 - B.push.w0) * ease(f);
        if (f >= 1) { B.push = null; B.pushIn = rnd(0.7, 1.3) / P.pushRate; }
        return;
      }
      if (!P.pushRate || (B.ball && B.ball.state !== "rest") || this._between) return;
      B.pushIn -= s;
      if (B.pushIn <= 0) this.rlStartPush();
    },
    rlStartPush: function () {
      var B = this.rl, P = B.P, sgn = B.w >= 0 ? 1 : -1;
      if (P.flipP && Math.random() < P.flipP) sgn = -sgn;
      var w1 = sgn * P.spin * (1 + rnd(-P.pushVar, P.pushVar));
      B.push = { t: 0, w0: B.w, w1: w1 };
      hiss(0.5, 600, 0.05); blip(140, 90, 0.3, "triangle", 0.04);
      if (!B.told.push) { B.told.push = true; this.toast("The croupier gives the wheel a push: its speed changes. Wait for it to settle, then spin.", 3400); }
      else if ((w1 >= 0) !== (B.push.w0 >= 0) && !B.told.flip) { B.told.flip = true; this.toast("The wheel turns the other way now, so the ball runs the other way too.", 3200); }
      return B.push;
    },

    /* ── the searchlight ── */
    rlTickLight: function (s, ms, hidden) {
      var B = this.rl, P = B.P, S = B.sl, W = this.W, k = B.k;
      S.t += ms;
      if (S.phase === "idle") {
        if (!this._between) S.next -= s;
        if (S.next <= 0) this.rlSweep();
      } else if (S.phase === "warn") {
        if (S.t >= S.warnMs) {
          S.phase = "sweep"; S.t = 0; S.hit = false;
          var bw = P.bandW * W;
          S.bands = [{ dir: S.dir, x: S.dir > 0 ? -bw : W + bw }];
          if (P.beams > 1) S.bands.push({ dir: -S.dir, x: S.dir > 0 ? W + bw * 1.6 : -bw * 1.6 });
          blip(90, 120, 0.6, "sine", 0.05);
        }
      } else if (S.phase === "sweep" || S.phase === "back") {
        var v = P.sweepSpd * W, bw2 = P.bandW * W, out = true;
        S.bands.forEach(function (b) { b.x += b.dir * v * s; if (b.dir > 0 ? b.x < W + bw2 : b.x > -bw2) out = false; });
        if (this.rlLit() && !hidden && !this._between && !S.hit) {
          S.hit = true;
          this.rlFlash(B.manX, B.manY + 40 * k, 60);
          if (this.loseLife("hit", "THE SEARCHLIGHT CAUGHT YOU")) B.hits += 1;
          if (!B.told.caught) { B.told.caught = true; this.toast("Caught standing in the searchlight. Next time hold ▼ (or S) and stay down until the light has gone by.", 3800); }
        }
        if (out) {
          if (S.phase === "sweep" && P.doubleP && Math.random() < P.doubleP) {
            S.phase = "back"; S.t = 0; S.hit = false; S.swings += 1;
            S.bands.forEach(function (b) { b.dir = -b.dir; b.x += b.dir * bw2 * 0.6; });
            blip(110, 80, 0.4, "sine", 0.04);
            if (!B.told.back) { B.told.back = true; this.toast("It's swinging back! Stay down.", 2400); }
          } else {
            S.phase = "idle"; S.t = 0; S.bands = []; S.next = P.sweepEvery * rnd(0.8, 1.2);
          }
        }
      }
    },
    /* start the searchlight's warning now (dir: +1 it comes from the left) */
    rlSweep: function (dir) {
      var B = this.rl, S = B.sl;
      S.phase = "warn"; S.t = 0; S.dir = dir || (Math.random() < 0.5 ? 1 : -1); S.warnMs = B.P.warnMs; S.hit = false;
      if (!B.told.light) { B.told.light = true; S.warnMs = Math.max(S.warnMs, 3000); this.toast("The searchlight is swinging round toward the blinds. When the slatted light comes across, hold ▼ (or S) to duck until it has passed.", 4600); }
      blip(70, 95, 1.0, "sine", 0.04);
      return S;
    },
    /* is the student standing in the slatted light? (the light's x at his shoulders) */
    rlLit: function () {
      var B = this.rl, W = this.W, H = this.H, bw = B.P.bandW * W, half = 40 * B.k, x = B.manX, y0 = B.floorY - 60 * B.k;
      var f = clamp((B.manY + 60 * B.k - y0) / (H - y0), 0, 1), lean = -W * 0.07 * (1 - f);   /* the shaft's middle at his shoulders */
      return B.sl.bands.some(function (b) { return Math.abs(x - (b.x + lean)) < bw * (0.3 + 0.2 * f) + half; });
    },

    /* ── the raid ── */
    rlTickRaid: function (s) {
      var B = this.rl, P = B.P, k = B.k;
      if (B.raidAnim > 0) { B.raidAnim -= s; return; }
      if (!this._between) B.raid += P.drain * s;
      if (B.raid >= 0.72) {
        B.whistleT -= s;
        if (B.whistleT <= 0) { B.whistleT = B.raid > 0.9 ? 0.7 : 1.4; this.rlWhistle(); }
        if (!B.told.raid) { B.told.raid = true; this.toast("Police whistles outside. Answer before they come through that door!", 3200); }
      }
      if (B.raid >= 1 && !this._between) this.rlRaid();
    },
    rlWhistle: function () { var i; for (i = 0; i < 4; i++) blip(i % 2 ? 2350 : 2600, i % 2 ? 2300 : 2550, 0.09, "square", 0.012, i * 0.1); },
    rlRaid: function () {
      var B = this.rl, k = B.k;
      B.raid = 0.25; B.raidAnim = 1.8; B.raids += 1;
      this.rlWhistle(); hiss(0.6, 300, 0.08);
      if (this.loseLife("hit", "THE POLICE RAIDED THE CAFÉ")) B.hits += 1;
      if (!B.told.raided) { B.told.raided = true; this.toast("The police raid the café. That costs a life. They'll be back, so be quicker.", 3600); }
      return B.raidAnim;
    },

    /* ── every frame ── */
    tick_roulette: function (s, inp, ms) {
      var B = this.rl, P = B.P, k = B.k, W = this.W, H = this.H;   /* (the reading pop-up disarms the spin: setup) */
      B.t += s;
      if (B.cd > 0) B.cd -= s;
      if (!B.told.start) {
        B.told.start = true;
        this.toast(["No marks tonight: you know this wheel. Spin early, and let the wheel carry your letter round to where the ball drops.",
          "Only a mark on the bowl now: the ball drops off the track there. Spin early, so the wheel brings your letter to it.",
          "Spin (Space) when the white blur sits on the middle of the right letter. The ball bounces a little.",
          "Spin (Space) when the white ring sits on the right letter. The wheel keeps turning while the ball rolls."][P.guide], 5200);
      }

      /* duck: ▼ / S / Shift / the right mouse button */
      var rightBtn = !!(this.ptr && this.ptr.down && this.ptr.right);
      B.duck = inp.ay > 0 || !!inp.pull || rightBtn;
      B.duckK = clamp(B.duckK + (B.duck ? 9 : -7) * s, 0, 1);
      var hidden = B.duckK > 0.6;

      /* walk along the front of the table: keys and pad, or the mouse (when it moves) */
      var lo = HALF - SPAN, hi = HALF + SPAN;
      if (!B.duck) {
        if (inp.ax) B.launch -= inp.ax * 1.25 * s;   /* right on screen is a smaller angle at the front */
        else {
          var p = this.ptr, moved = B.lpx != null && Math.abs(p.x - B.lpx) + Math.abs(p.y - B.lpy) > 2;
          if (moved && !rightBtn) {
            var want = Math.acos(clamp((p.x - B.cx) / (R_TRACK * B.R), Math.cos(hi), Math.cos(lo)));
            B.launch += clamp(want - B.launch, -2.6 * s, 2.6 * s);
            B.ptrWant = want;
          } else if (B.ptrWant != null && Math.abs(B.ptrWant - B.launch) > 1e-3) B.launch += clamp(B.ptrWant - B.launch, -2.6 * s, 2.6 * s);
        }
        if (inp.ax) B.ptrWant = null;
      }
      B.lpx = this.ptr.x; B.lpy = this.ptr.y;
      B.launch = clamp(B.launch, lo, hi);

      /* the spin: on the press */
      var fire = inp.fire && !rightBtn;
      if (!fire) B.armed = true;
      else if (B.armed) {
        B.armed = false;
        if (this.rlCanThrow()) this.rlThrow();
        else if (B.duckK >= 0.25 && !B.told.duckSpin) { B.told.duckSpin = true; this.toast("Stand up first (let go of ▼) to spin the ball.", 2400); }
        else if (B.push && !B.told.pushSpin) { B.told.pushSpin = true; this.toast("Wait: the croupier is pushing the wheel. Spin when it settles.", 2400); }
      }

      /* the wheel, the ball, the croupier, the searchlight, the raid */
      this.rlTickPush(s);
      B.th = wrap(B.th + B.w * s);
      this.rlTickBall(s);
      if (this._finishing) return;
      this.rlTickLight(s, ms, hidden);
      if (this._finishing) return;
      this.rlTickRaid(s);
      if (this._finishing) return;

      this.rlDrawWheel();
      this.rlDrawRoom(s);
      this.rlDrawMan();
      this.rlDrawLight();
      this.rlDrawFx(s);
      this.rlDrawUi();
    },

    /* the rotor: pockets, frets, the letters' band and chips, the cone and the turret; the diamonds on the bowl */
    rlDrawWheel: function () {
      var B = this.rl, g = B.wheelG, k = B.k, self = this, i, j, th = B.th;
      g.clear();
      if (!B.NP || !B.pockets.length) return;
      var P0 = function (a, r) { return self.rlPt(a, r); };
      /* the letters' band: each letter's run lighter, the house's dark */
      for (i = 0; i < B.NP; i++) {
        var a0 = th + i * B.pa, a1 = a0 + B.pa, pk = B.pockets[i], sc = pk.sec >= 0 ? B.sectors[pk.sec] : null, pts = [], m = 3;
        for (j = 0; j <= m; j++) pts.push(P0(a0 + (a1 - a0) * j / m, R_BAND));
        for (j = m; j >= 0; j--) pts.push(P0(a0 + (a1 - a0) * j / m, R_P1));
        var front = 0.75 + 0.25 * Math.sin((a0 + a1) / 2);
        var col = !sc ? 0x1a1a1a : sc.state === "dead" ? 0x3c3c3c : sc.state === "found" ? 0xf6f6f6 : 0xb4b0a6;
        g.fillStyle(col, 1); g.fillPoints(pts, true);
        if (front < 0.75) { g.fillStyle(0x000000, (0.75 - front) * 0.9); g.fillPoints(pts, true); }
        /* the pocket */
        pts = [];
        for (j = 0; j <= m; j++) pts.push(P0(a0 + (a1 - a0) * j / m, R_P1));
        for (j = m; j >= 0; j--) pts.push(P0(a0 + (a1 - a0) * j / m, R_P0));
        col = !sc ? 0x0c0c0c : sc.state === "dead" ? 0x2e2e2e : sc.state === "found" ? 0xffffff : 0xe9e5da;
        g.fillStyle(col, 1); g.fillPoints(pts, true);
        if (sc && sc.state === "dead") { var c0 = P0(a0 + B.pa * 0.2, R_P0 + 0.03), c1 = P0(a1 - B.pa * 0.2, R_P1 - 0.03), c2 = P0(a0 + B.pa * 0.2, R_P1 - 0.03), c3 = P0(a1 - B.pa * 0.2, R_P0 + 0.03); g.lineStyle(1.5 * k, 0x8a8a8a, 0.8); g.lineBetween(c0.x, c0.y, c1.x, c1.y); g.lineBetween(c2.x, c2.y, c3.x, c3.y); }
        if (front < 0.8) { g.fillStyle(0x000000, (0.8 - front) * 0.8); g.fillPoints(pts, true); }
      }
      /* the frets between pockets, and the edges of each letter's run */
      for (i = 0; i < B.NP; i++) {
        var a = th + i * B.pa, q0 = P0(a, R_P0), q1 = P0(a, R_P1), q2 = P0(a, R_BAND);
        var edge = B.pockets[i].sec !== B.pockets[(i + B.NP - 1) % B.NP].sec;
        g.lineStyle((edge ? 2.6 : 1.4) * k, edge ? 0xffffff : 0x9a9a9a, edge ? 0.95 : 0.85); g.lineBetween(q0.x, q0.y, q1.x, q1.y);
        if (edge) { g.lineStyle(2 * k, 0x050505, 1); g.lineBetween(q1.x, q1.y, q2.x, q2.y); }
      }
      g.lineStyle(1.5 * k, 0xd0d0d0, 0.9); g.strokeEllipse(B.cx, B.cy, R_P1 * B.R * 2, R_P1 * B.R * SQ * 2);
      g.lineStyle(1.2 * k, 0x6a6a6a, 0.9); g.strokeEllipse(B.cx, B.cy, R_BAND * B.R * 2, R_BAND * B.R * SQ * 2);
      /* the cone: dark, with turning spokes; the turret's cross */
      g.fillStyle(0x161616, 1); g.fillEllipse(B.cx, B.cy, R_P0 * B.R * 2, R_P0 * B.R * SQ * 2);
      g.fillStyle(0x262626, 1); g.fillEllipse(B.cx, B.cy - 2 * k, R_P0 * B.R * 1.5, R_P0 * B.R * SQ * 1.5);
      for (i = 0; i < 8; i++) {
        var sa = th + i * TAU / 8, s0 = P0(sa, 0.12), s1 = P0(sa, R_P0 - 0.02);
        g.lineStyle(1.4 * k, i % 2 ? 0x4a4a4a : 0x6a6a6a, 0.9); g.lineBetween(s0.x, s0.y, s1.x, s1.y);
      }
      var lift = 16 * k, hub = this.rlPt(0, 0);
      g.fillStyle(0x8a8a8a, 1); g.fillRect(hub.x - 3 * k, hub.y - lift, 6 * k, lift);
      for (i = 0; i < 4; i++) {
        var ta = th * 1 + i * HALF, tp = this.rlPt(ta, 0.2);
        var tx = tp.x, ty = tp.y - lift;
        g.lineStyle(3 * k, 0x0a0a0a, 1); g.lineBetween(hub.x, hub.y - lift, tx, ty);
        g.lineStyle(1.6 * k, 0xd8d8d8, 1); g.lineBetween(hub.x, hub.y - lift, tx, ty);
        g.fillStyle(0xeeeeee, 1); g.fillCircle(tx, ty, 3.2 * k);
      }
      g.fillStyle(0xf2f2f2, 1); g.fillCircle(hub.x, hub.y - lift, 4.5 * k);
      /* the diamonds on the bowl */
      for (i = 0; i < B.P.diamonds; i++) {
        var d = HALF + Math.PI / B.P.diamonds + i * TAU / B.P.diamonds, dc = P0(d, R_DIAM), da = P0(d - DIAM_W * 0.8, R_DIAM), db = P0(d + DIAM_W * 0.8, R_DIAM), dt = P0(d, R_DIAM + 0.035), dd = P0(d, R_DIAM - 0.035);
        g.fillStyle(0x050505, 1); g.fillPoints([{ x: da.x - 1, y: da.y }, { x: dt.x, y: dt.y - 1.5 }, { x: db.x + 1, y: db.y }, { x: dd.x, y: dd.y + 1.5 }], true);
        g.fillStyle(0xf4f4f4, 1); g.fillPoints([da, dt, db, dd], true);
        g.fillStyle(0xffffff, 1); g.fillCircle(dc.x, dc.y, 1.2 * k);
      }
      /* the chips with their letters, standing over each letter's run */
      B.sectors.forEach(function (sc, si) {
        var am = th + self.rlSectorMid(si), pp = self.rlPt(am, (R_P1 + R_BAND) / 2 + 0.03), f = 0.84 + 0.16 * Math.sin(am);
        sc.chip.setPosition(pp.x, pp.y - 6 * k * f).setScale(B.chipS * f, B.chipS * f * 0.9).setDepth(9.2 + (Math.sin(am) > 0 ? 0.2 : 0));
        sc.txt.setPosition(pp.x, pp.y - 6 * k * f).setScale(f).setDepth(9.3 + (Math.sin(am) > 0 ? 0.2 : 0));
      });
    },

    /* the guides: the ring (or arc) where a ball thrown now would stop, or the mark on the bowl where it drops */
    rlDrawGuide: function () {
      var B = this.rl, P = B.P, g = B.guideG, k = B.k, self = this, j;
      g.clear();
      if (!P.guide || this._between || !this.rlCanThrow() && !(B.ball && B.ball.state === "rest")) return;
      if (B.ball && B.ball.state !== "rest") return;
      var pr = this.rlPredict(), pulse = 0.75 + 0.25 * Math.sin(B.t * 7);
      if (P.guide >= 2) {
        var ok = pr.sec >= 0 && B.sectors[pr.sec].state === "live";
        if (P.guide === 3) {
          var a0 = B.th + pr.pocket * B.pa, a1 = a0 + B.pa, pts = [], m = 4;
          for (j = 0; j <= m; j++) pts.push(this.rlPt(a0 + (a1 - a0) * j / m, R_BAND + 0.01));
          for (j = m; j >= 0; j--) pts.push(this.rlPt(a0 + (a1 - a0) * j / m, R_P0 - 0.01));
          var inner = [];
          for (j = 0; j <= m; j++) inner.push(this.rlPt(a0 + (a1 - a0) * j / m, R_P1));
          for (j = m; j >= 0; j--) inner.push(this.rlPt(a0 + (a1 - a0) * j / m, R_P0));
          g.fillStyle(0xffffff, 0.16 + 0.14 * pulse); g.fillPoints(inner, true);
          g.lineStyle(6.5 * k, 0x000000, 0.7); g.strokePoints(pts, true);
          g.lineStyle(3.4 * k, 0xffffff, pulse); g.strokePoints(pts, true);
          var c = this.rlPt(B.th + pr.alpha, R_POCKET);
          g.fillStyle(0xffffff, 0.35 + 0.3 * pulse); g.fillCircle(c.x, c.y, 5 * k);
          g.lineStyle(1.5 * k, 0x000000, 0.7); g.strokeCircle(c.x, c.y, 5 * k);
        } else {
          var hw = P.jitter + P.blur, n = 14, pts2 = [];
          for (j = 0; j <= n; j++) pts2.push(this.rlPt(B.th + pr.alpha - hw + 2 * hw * j / n, R_P1 - 0.02));
          for (j = n; j >= 0; j--) pts2.push(this.rlPt(B.th + pr.alpha - hw + 2 * hw * j / n, R_P0 + 0.02));
          g.fillStyle(0xffffff, 0.22 + 0.12 * pulse); g.fillPoints(pts2, true);
          g.lineStyle(1.6 * k, 0xffffff, 0.6 * pulse); g.strokePoints(pts2, true);
        }
        if (ok && P.guide === 3) {
          var sc = B.sectors[pr.sec], ch = sc.chip;
          g.lineStyle(5 * k, 0x000000, 0.6); g.strokeCircle(ch.x, ch.y, 27 * k * ch.scaleX / B.chipS);
          g.lineStyle(3 * k, 0xffffff, pulse); g.strokeCircle(ch.x, ch.y, 27 * k * ch.scaleX / B.chipS);
        }
      }
      /* the drop mark: where on the bowl the ball leaves the track (and a diamond it would hit) */
      if (P.guide >= 1) {
        var q = this.rlPt(pr.phi1, R_DIAM - 0.005), hit = pr.diamond != null;
        g.fillStyle(0x000000, 0.6); g.fillTriangle(q.x - 8 * k, q.y - 14 * k, q.x + 8 * k, q.y - 14 * k, q.x, q.y - 1 * k);
        g.fillStyle(hit ? 0xffffff : 0xdedede, 0.9); g.fillTriangle(q.x - 5.5 * k, q.y - 12.5 * k, q.x + 5.5 * k, q.y - 12.5 * k, q.x, q.y - 3 * k);
        if (hit) { g.lineStyle(2 * k, 0xffffff, pulse); g.strokeCircle(q.x, q.y, 9 * k); }
        if (P.guide === 1) {
          var L2 = this.rlPt(pr.phiL, R_P1 + 0.02);
          g.lineStyle(2 * k, 0xffffff, 0.5); g.strokeCircle(L2.x, L2.y, 6 * k);
        }
      }
    },

    rlDrawRoom: function (s) {
      var B = this.rl, k = B.k, W = this.W, H = this.H, g = B.fanG, i;
      g.clear();
      /* the ceiling fans: a down-rod, the motor, four lazy blades */
      B.fanA += s * 1.7;
      B.fans.forEach(function (f, fi) {
        var hubY = f.y + 22 * k, L2 = 66 * k, a0 = B.fanA * (fi ? -1 : 1) + fi;
        g.lineStyle(3 * k, 0x1a1a1a, 1); g.lineBetween(f.x, 0, f.x, hubY);
        for (i = 0; i < 4; i++) {
          var a = a0 + i * HALF, ca = Math.cos(a), sa = Math.sin(a), tipx = f.x + ca * L2, tipy = hubY + sa * L2 * 0.2;
          var nx = -sa * 9 * k, ny = ca * 9 * k * 0.2;
          g.fillStyle(0x0c0c0c, 1);
          g.fillPoints([{ x: f.x + ca * 8 * k - nx * 0.5, y: hubY + sa * 1.6 * k - ny * 0.5 }, { x: tipx - nx, y: tipy - ny }, { x: tipx + nx, y: tipy + ny }, { x: f.x + ca * 8 * k + nx * 0.5, y: hubY + sa * 1.6 * k + ny * 0.5 }], true);
          g.lineStyle(1, 0x5a5a5a, 0.7); g.lineBetween(tipx - nx, tipy - ny, tipx + nx, tipy + ny);
        }
        g.fillStyle(0x2a2a2a, 1); g.fillEllipse(f.x, hubY, 22 * k, 10 * k);
        g.fillStyle(0x4a4a4a, 1); g.fillEllipse(f.x, hubY - 2 * k, 14 * k, 5 * k);
        /* the lamp under the fan, the blades cutting its light */
        g.fillStyle(0xdedede, 1); g.fillEllipse(f.x, hubY + 12 * k, 16 * k, 10 * k);
        var cut = Math.abs(Math.sin(a0 * 2));
        B.lamps[fi].setPosition(f.x, hubY + 14 * k).setAlpha(0.42 + 0.12 * cut);
      });
      /* the haze drifting under the fans */
      B.haze.forEach(function (h) {
        h.x += h.v * s; if (h.x > 1.2) h.x = -0.2; if (h.x < -0.2) h.x = 1.2;
        h.spr.setPosition(h.x * W, h.y * H + Math.sin(B.t * 0.3 + h.ph) * 8 * k).setScale(h.s * k * 1.6, h.s * k).setAlpha(0.06 + 0.04 * Math.sin(B.t * 0.5 + h.ph));
      });
      /* the film's grain and its flicker */
      B.grain.setTilePosition(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
      B.flick -= s;
      B.dim.clear();
      if (B.flick <= 0) { B.flick = rnd(0.04, 0.12); B.dimA = Math.random() < 0.12 ? rnd(0.06, 0.12) : rnd(0, 0.035); }
      B.dim.fillStyle(0x000000, B.dimA || 0); B.dim.fillRect(0, 0, W, H);
      /* the searchlight outside: a pale beam through the gaps in the blinds */
      var sg = B.skyG, S = B.sl, P = B.P;
      sg.clear();
      var bx, ba;
      if (S.phase === "idle") { bx = 0.5 + 0.7 * Math.sin(B.t * 0.23); ba = 0.12; }
      else if (S.phase === "warn") { var f2 = clamp(S.t / S.warnMs, 0, 1); bx = S.dir > 0 ? -0.3 + f2 * 0.45 : 1.3 - f2 * 0.45; ba = 0.15 + 0.5 * f2; }
      else { bx = S.bands.length ? S.bands[0].x / W : 0.5; ba = 0.75; }
      B.win.forEach(function (wn) {
        var x0 = wn.x - wn.w / 2, x1 = wn.x + wn.w / 2, cxp = bx * W, bw = W * 0.12;
        var near = clamp(1 - Math.abs(cxp - wn.x) / (W * 0.35), 0, 1);
        if (near <= 0) return;
        var la = clamp(cxp - bw / 2 + 0, x0, x1), lb = clamp(cxp + bw / 2, x0, x1), ta = clamp(cxp - bw / 2 - 30 * k, x0, x1), tb = clamp(cxp + bw / 2 - 30 * k, x0, x1);
        sg.fillStyle(0xffffff, ba * near * 0.35); sg.fillRect(x0, wn.top, wn.w, wn.bot - wn.top);
        if (lb > la || tb > ta) { sg.fillStyle(0xffffff, ba * near); sg.fillPoints([{ x: ta, y: wn.top }, { x: tb, y: wn.top }, { x: lb, y: wn.bot }, { x: la, y: wn.bot }], true); }
      });
      /* the police at the door: shapes on the frosted glass, nearer as the raid bar fills; then the raid */
      var dg = B.doorG, d = B.door, r = B.raidAnim > 0 ? 1 : B.raid;
      dg.clear();
      B.cops.forEach(function (c, ci) {
        var on = r > 0.3 + ci * 0.15 && B.raidAnim <= 0;
        c.setVisible(on);
        if (!on) return;
        var f3 = clamp((r - 0.3 - ci * 0.15) / 0.5, 0, 1);
        c.setPosition(d.x0 + (d.x1 - d.x0) * (0.28 + ci * 0.24), d.top + (d.bot - d.top) * 0.66).setScale(k * (0.6 + 0.35 * f3), k * (0.6 + 0.35 * f3)).setAlpha(0.25 + 0.6 * f3);
      });
      if (B.raidAnim > 0) {
        /* the door flung open: light from the street, and the gendarmes coming in */
        var ra = B.raidAnim / 1.8;
        dg.fillStyle(0xffffff, 0.55 * ra); dg.fillRect(d.x0, d.top, d.x1 - d.x0, d.bot - d.top);
        B.rush.forEach(function (c, ci) {
          var u = clamp(1 - ra - ci * 0.08, 0, 1);
          c.setVisible(u > 0).setPosition(d.x0 + (d.x1 - d.x0) * (0.3 + ci * 0.2) - u * W * (0.15 + ci * 0.1), d.bot + u * H * 0.42).setScale(k * (1 + u * 1.2)).setAlpha(clamp(ra * 2, 0, 1));
        });
      } else B.rush.forEach(function (c) { c.setVisible(false); });
    },

    /* the student at the front of the table: his arm reaches the rim where the ball leaves his hand */
    rlDrawMan: function () {
      var B = this.rl, k = B.k, g = B.armG, b = B.ball;
      var hand = this.rlPt(B.launch, R_TRACK + 0.02), x = hand.x;
      B.manX = x;
      var y = B.manY + (B.manDuckY - B.manY) * ease(B.duckK);
      B.man.setPosition(x - 8 * k, y);
      this.blink(B.man);
      this.player.setPosition(x, y);
      g.clear();
      var holding = !(b && b.state !== "rest") && B.duckK < 0.3 && !this._between;
      if (B.duckK < 0.4) {
        var sx = x + 38 * k, sy = y + 82 * k * 1.05, du = B.duckK / 0.4;
        var hx = hand.x + 6 * k + (sx + 10 * k - hand.x) * du, hy = hand.y + 6 * k + (sy - 30 * k - hand.y) * du;
        var ex = (sx + hx) / 2 + 22 * k, ey = (sy + hy) / 2 + 12 * k;
        g.lineStyle(17 * k, 0x2a2a2a, B.man.alpha); g.strokePoints([{ x: sx, y: sy }, { x: ex, y: ey }, { x: hx, y: hy }]);
        g.lineStyle(13 * k, 0xe4e4e4, B.man.alpha); g.strokePoints([{ x: sx, y: sy }, { x: ex, y: ey }, { x: hx, y: hy }]);
        g.fillStyle(0x0a0a0a, B.man.alpha); g.fillCircle(hx, hy, 6.5 * k);
        g.fillStyle(0x8a8a8a, B.man.alpha); g.fillCircle(hx, hy - 1 * k, 5.5 * k);
      }
      B.handBall.setVisible(holding).setPosition(hand.x, hand.y - 2 * k);
      /* the ball on the wheel */
      if (b) {
        var q = this.rlPt(b.phi, b.r), f = 0.85 + 0.15 * Math.sin(b.phi);
        B.ballSpr.setVisible(true).setPosition(q.x, q.y - (b.r > R_P1 ? 3 * k : 2 * k)).setScale(k * 0.95 * f);
        B.ballShadow.setVisible(true).setPosition(q.x + 2 * k, q.y + 2 * k).setScale(0.12 * k).setAlpha(0.5);
      } else { B.ballSpr.setVisible(false); B.ballShadow.setVisible(false); }
      this.rlDrawGuide();
    },

    /* the searchlight through the blinds: slatted shafts of light sweeping across the café */
    rlDrawLight: function () {
      var B = this.rl, P = B.P, S = B.sl, g = B.shaftG, W = this.W, H = this.H, k = B.k;
      g.clear();
      if (!S.bands.length) return;
      var bw = P.bandW * W, y0 = B.floorY - 60 * k;
      S.bands.forEach(function (b) {
        var skew = -W * 0.07;   /* the light leans in from the high windows behind, at the left */
        var top = { a: b.x - bw * 0.3 + skew, b: b.x + bw * 0.3 + skew };
        function xAt(edge, y) { var f = (y - y0) / (H - y0); return edge === 0 ? top.a + (b.x - bw / 2 - top.a) * f : top.b + (b.x + bw / 2 - top.b) * f; }
        g.fillStyle(0xffffff, 0.07); g.fillPoints([{ x: top.a, y: y0 }, { x: top.b, y: y0 }, { x: b.x + bw / 2, y: H }, { x: b.x - bw / 2, y: H }], true);
        g.fillStyle(0xffffff, 0.06); g.fillPoints([{ x: top.a + bw * 0.12, y: y0 }, { x: top.b - bw * 0.12, y: y0 }, { x: b.x + bw * 0.3, y: H }, { x: b.x - bw * 0.3, y: H }], true);
        /* the slats' stripes, wider apart toward the front */
        var y = y0, step = 9 * k, on = true;
        while (y < H) {
          var y2 = Math.min(H, y + step);
          if (on) { g.fillStyle(0xffffff, 0.24); g.fillPoints([{ x: xAt(0, y), y: y }, { x: xAt(1, y), y: y }, { x: xAt(1, y2), y: y2 }, { x: xAt(0, y2), y: y2 }], true); }
          y = y2; step *= on ? 1.0 : 1.12; on = !on;
        }
      });
    },

    rlDrawUi: function () {
      var B = this.rl, P = B.P, k = B.k, W = this.W, H = this.H, g = B.uiG, S = B.sl;
      g.clear();
      /* the raid bar, top left */
      var bw = Math.max(110 * k, B.door.x1 - B.door.x0), x0 = (B.door.x0 + B.door.x1) / 2 - bw / 2, bh = 10 * k, y = B.door.top - 15 * k, f = clamp(B.raidAnim > 0 ? 1 : B.raid, 0, 1);
      var hot = f > 0.72, flash = hot && Math.floor(B.t * 6) % 2 === 0;
      g.fillStyle(0x000000, 0.75); g.fillRect(x0 - 3 * k, y - bh / 2 - 3 * k, bw + 6 * k, bh + 6 * k);
      g.fillStyle(0x3a3a3a, 1); g.fillRect(x0, y - bh / 2, bw, bh);
      g.fillStyle(flash ? 0xffffff : 0xcfcfcf, 1); g.fillRect(x0, y - bh / 2, bw * f, bh);
      g.lineStyle(1.5 * k, 0xffffff, 0.9); g.strokeRect(x0, y - bh / 2, bw, bh);
      var raidTxt = B.raidAnim > 0 ? "RAID!" : hot ? "POLICE WHISTLES!" : "THE POLICE";
      if (B.txRaid.text !== raidTxt) B.txRaid.setText(raidTxt);
      /* the searchlight's warning: an arrow on the side it comes from */
      var warn = S.phase === "warn", live = S.phase === "sweep" || S.phase === "back";
      if (warn) {
        var fx = clamp(S.t / S.warnMs, 0, 1), dx = S.dir > 0 ? 1 : -1, pl = 0.6 + 0.4 * Math.sin(B.t * 14);
        var wtxt = P.beams > 1 ? "SEARCHLIGHTS" : "SEARCHLIGHT";
        if (B.txWarn.text !== wtxt) B.txWarn.setText(wtxt);
        var wx = B.cx, wy = B.table.top - 30 * k;
        B.txWarn.setVisible(true).setPosition(wx, wy);
        var hw = B.txWarn.width / 2 + 16 * k;
        g.fillStyle(0x000000, 0.72); g.fillRoundedRect(wx - hw - 44 * k, wy - 17 * k, (hw + 44 * k) * 2, 34 * k, 8 * k);
        g.lineStyle(2 * k, 0xffffff, pl); g.strokeRoundedRect(wx - hw - 44 * k, wy - 17 * k, (hw + 44 * k) * 2, 34 * k, 8 * k);
        /* chevrons on the side the light comes from, pointing the way it will cross (both sides when two lights come) */
        var sides = P.beams > 1 ? [-1, 1] : [-dx];
        sides.forEach(function (sd) {
          var d = -sd;
          for (var c2 = 0; c2 < 2; c2++) {
            var ax = wx + sd * (hw + 30 * k - c2 * 13 * k), ph = (B.t * 3 + c2 * 0.5) % 1;
            g.fillStyle(0xffffff, Math.min(1, 0.45 + 0.55 * ph * fx));
            g.fillTriangle(ax + d * 7 * k, wy, ax - d * 5 * k, wy - 9 * k, ax - d * 5 * k, wy + 9 * k);
          }
        });
      } else B.txWarn.setVisible(false);
      /* DUCK! when the light is coming and he is standing */
      var nearLight = live && S.bands.some(function (b) { return Math.abs(b.x - B.manX) < P.bandW * W / 2 + W * 0.22; });
      var showDuck = (warn && S.t > S.warnMs * 0.4 || nearLight) && B.duckK < 0.6;
      B.txDuck.setVisible(showDuck).setPosition(B.manX, B.manY - 8 * k + Math.sin(B.t * 12) * 2 * k);
      /* the spin readiness under the hand */
      var txt = "";
      if (B.duckK > 0.6) txt = "DUCKED";
      else if (B.push) txt = "PUSH!";
      else if (B.ball && B.ball.state !== "rest") txt = "";
      else if (this.rlCanThrow()) txt = "SPIN ▸ Space";
      if (B.txSpin.text !== txt) B.txSpin.setText(txt);
      var hand = this.rlPt(B.launch, R_TRACK + 0.02);
      B.txSpin.setPosition(clamp(hand.x + 70 * k, 60 * k, W - 60 * k), Math.min(H - 18 * k, hand.y + 30 * k)).setVisible(!!txt && !showDuck);
      if (B.push) {
        B.txWheel.setVisible(true).setText((B.push.w1 >= 0) !== (B.push.w0 >= 0) ? "THE WHEEL TURNS BACK" : "THE CROUPIER PUSHES").setPosition(B.cx, B.cy - B.R * SQ - 34 * k);
      } else B.txWheel.setVisible(false);
    },

    /* a right answer: the winning letter's pockets stay lit until the next question */
    clear_roulette: function () {
      var B = this.rl, self = this;
      if (B.lastPick) { B.lastPick.state = "found"; this.rlPaint(B.lastPick); var c = B.lastPick.chip; this.burst(c.x, c.y, 0xffffff, 18); }
      try { B.guideG.clear(); } catch (e) {}
      self.rlDrawWheel();
    }
  });
})();
