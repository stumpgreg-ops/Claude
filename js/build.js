/*
 * SOL Labyrinth — "Town & Castle" reward builder.            window.SolBuild
 *
 * Every 5 nights won (5, 10, … 100 = 20 rewards) a pop-up covers the game with
 * THREE pieces to choose from. The chosen piece is placed (by tap) in the
 * student's own Town or Castle, which grows from humble to amazing by night 100.
 * The build persists in localStorage "afterHours.v1.build" and can be carried
 * between Chromebooks with a short build code.
 *
 * All DOM is created here (document.body.appendChild) — index.html only needs
 * the script/link tags. See INTEGRATION-build.md for the game.js hook.
 *
 * Public API
 *   SolBuild.init()                     load assets/build/pieces.json + saved build (idempotent, safe to call twice)
 *   SolBuild.rewardDue(night)           true when night % 5 === 0 and no pick is recorded for that night
 *   SolBuild.showReward(night, onDone)  full-screen reward flow; onDone() fires when the student taps Continue
 *   SolBuild.showGallery(onClose)       "My Town" / "My Castle" viewer with Build-code Copy / Load
 *   SolBuild.close()                    programmatic close (no callbacks fire)
 *   SolBuild.isOpen()                   true while either overlay is up
 *   SolBuild.exportCode()               compact base64url code + 2-char checksum
 *   SolBuild.importCode(str)            validates, replaces the build; returns {ok, error|count}
 *   SolBuild.state()                    {theme, themeName, count, total, nextNight, label, loaded}
 *
 * Save record (localStorage "afterHours.v1.build"):
 *   {v:1, theme:"village"|"castle"|null, salt:<int>, picks:[{night:5, piece:"well", slot:"s1"}], code:"…"}
 *   salt seeds the per-student offer RNG; code is a cached exportCode() for teachers peeking at storage.
 */
(function () {
  "use strict";

  var LS_KEY = "afterHours.v1.build";
  var DATA_URL = "assets/build/pieces.json";
  var EVERY = 5;                          /* a reward every 5 nights            */
  var TOTAL = 20;                         /* 20 rewards = nights 5..100          */
  var OPTIONS = 3;                        /* pieces offered per reward           */
  var THEME_ORDER = ["village", "castle"];
  var THEME_BLURB = { village: "Cottages, a well and a winding road.", castle: "Walls, towers and a keep on the hill." };

  var data = null;                        /* parsed pieces.json                  */
  var loadState = "idle";                 /* idle | loading | ok | fail          */
  var waiters = [];                       /* callbacks waiting for the load      */
  var save = null;                        /* the build record (see header)       */
  var imgCache = {};                      /* src -> {img, ok:null|true|false}    */
  var ui = null;                          /* DOM refs, created once              */
  var mode = null;                        /* "reward" | "gallery" | null=closed  */
  var step = null;                        /* theme | pick | place | done | gallery */
  var cur = null;                         /* live state of the open overlay      */
  var rafOn = false, drawQueued = false;

  /* ── save record ─────────────────────────────────────────────────────────── */
  function freshSave() { return { v: 1, theme: null, salt: Math.floor(Math.random() * 900000000) + 1, picks: [], code: "" }; }
  /* Keep only well-formed picks so a hand-edited record can never throw later (pickFor / persist / occupied). */
  function cleanPicks(list) {
    var out = [], seen = {};
    (list instanceof Array ? list : []).forEach(function (p) {
      var n = p && typeof p === "object" ? parseInt(p.night, 10) : NaN;
      if (!(n >= EVERY && n <= EVERY * TOTAL) || n % EVERY || seen[n] || typeof p.piece !== "string" || typeof p.slot !== "string") return;
      seen[n] = true; out.push({ night: n, piece: p.piece, slot: p.slot });
    });
    return out;
  }
  function loadSave() {
    var s = null;
    try { s = JSON.parse(localStorage.getItem(LS_KEY) || "null"); } catch (e) { s = null; }
    if (!s || typeof s !== "object" || s.v !== 1) s = freshSave();
    s.picks = cleanPicks(s.picks);
    s.salt = parseInt(s.salt, 10); if (!(s.salt > 0)) s.salt = freshSave().salt;
    if (typeof s.theme !== "string") s.theme = null;
    if (typeof s.code !== "string") s.code = "";
    return s;
  }
  function persist() {
    save.picks.sort(function (a, b) { return a.night - b.night; });
    save.code = exportCode();
    try { localStorage.setItem(LS_KEY, JSON.stringify(save)); } catch (e) {}
    refreshButton();
  }

  /* ── pieces.json helpers ─────────────────────────────────────────────────── */
  function themes() { return (data && data.themes) || {}; }
  function themeDef(id) { return themes()[id] || null; }
  function themeName(id) { var t = themeDef(id); return (t && t.name) || (id === "castle" ? "Castle" : "Town"); }
  function slotsOf(id) { var t = themeDef(id); return (t && t.slots) || []; }
  function slotById(id) { var s = slotsOf(save.theme), i; for (i = 0; i < s.length; i++) if (s[i].id === id) return s[i]; return null; }
  function pieceById(id) { var p = (data && data.pieces) || [], i; for (i = 0; i < p.length; i++) if (p[i].id === id) return p[i]; return null; }
  function piecesOf(theme, tier) {
    return ((data && data.pieces) || []).filter(function (p) { return p.theme === theme && (p.tier || 1) === tier; });
  }
  function pickFor(night) { var i; for (i = 0; i < save.picks.length; i++) if (save.picks[i].night === night) return save.picks[i]; return null; }
  function bandFor(k) { return Math.max(1, Math.min(4, Math.ceil(k / 5))); }   /* reward 1-5 → tier 1 … 16-20 → tier 4 */
  function nextRewardNight() { var n; for (n = EVERY; n <= EVERY * TOTAL; n += EVERY) if (!pickFor(n)) return n; return null; }
  function occupied() { var o = {}; save.picks.forEach(function (p) { o[p.slot] = true; }); return o; }

  function load() {
    if (loadState !== "idle") return;
    loadState = "loading";
    var xhr = new XMLHttpRequest();
    function settle() {
      if (loadState === "fail") console.warn("[SolBuild] could not load " + DATA_URL);
      var w = waiters; waiters = [];
      w.forEach(function (fn) { fn(); });
      refreshButton();
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      try {
        if ((xhr.status >= 200 && xhr.status < 300) || (xhr.status === 0 && xhr.responseText)) { data = JSON.parse(xhr.responseText); loadState = "ok"; }
        else loadState = "fail";
      } catch (e) { loadState = "fail"; }
      settle();
    };
    /* timeout: a stalled request must still settle, or the game's end-of-night overlay (shown from onDone) never appears */
    try { xhr.open("GET", DATA_URL, true); xhr.timeout = 20000; xhr.send(); } catch (e) { loadState = "fail"; settle(); }
  }
  function whenReady(fn) { if (loadState === "ok" || loadState === "fail") fn(); else { waiters.push(fn); load(); } }

  /* ── seeded RNG (Park–Miller; exact in doubles) and the offer ────────────── */
  function rng(seed) {
    var s = (Math.abs(Math.floor(seed)) % 2147483646) + 1;
    return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  }
  function shuffle(arr, r) { var i, j, t; for (i = arr.length - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }

  /* Three pieces for a night. Priority: unowned pieces of the current tier, then
     unowned from the nearest lower tiers, then owned (tier, then lower). Each
     group is shuffled with seed = night + salt, so a reload before picking
     shows the same three, while different students see different offers. */
  function offerFor(night) {
    var band = bandFor(night / EVERY), owned = {}, r = rng(night + save.salt), out = [], wantOwned, t;
    save.picks.forEach(function (p) { owned[p.piece] = true; });
    for (wantOwned = 0; wantOwned < 2; wantOwned++) {
      for (t = band; t >= 1; t--) {
        shuffle(piecesOf(save.theme, t).filter(function (p) { return !!owned[p.id] === !!wantOwned; }), r)
          .forEach(function (p) { if (out.length < OPTIONS) out.push(p); });
      }
    }
    return out;
  }
  /* Slots the student may tap: unoccupied and unlocked for this band; else any unoccupied. */
  function freeSlots(band) {
    var slots = slotsOf(save.theme), occ = occupied();
    var f = slots.filter(function (s) { return !occ[s.id] && (s.tier || 1) <= band; });
    if (!f.length) f = slots.filter(function (s) { return !occ[s.id]; });
    return f;
  }

  /* ── build codes: base64url("1|theme|salt|night:piece:slot,…") + 2-char checksum */
  function b64url(s) { return btoa(unescape(encodeURIComponent(s))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function unb64url(s) { s = s.replace(/-/g, "+").replace(/_/g, "/"); while (s.length % 4) s += "="; return decodeURIComponent(escape(atob(s))); }
  function checksum(s) { var h = 7, i; for (i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 1296; return ("0" + h.toString(36)).slice(-2); }
  function exportCode() {
    if (!save) save = loadSave();
    var list = save.picks.map(function (p) { return p.night + ":" + p.piece + ":" + p.slot; }).join(",");
    var body = b64url("1|" + (save.theme || "") + "|" + save.salt + "|" + list);
    return body + checksum(body);
  }
  function parseCode(str) {
    var s = String(str || "").replace(/\s+/g, ""), body = s.slice(0, -2), raw, parts, theme, salt, picks = [], seen = {}, bad = null;
    if (s.length < 4) return { ok: false, error: "Paste a build code first." };
    if (checksum(body) !== s.slice(-2)) return { ok: false, error: "That code has a typo — check every letter and try again." };
    try { raw = unb64url(body); } catch (e) { return { ok: false, error: "That is not a build code." }; }
    parts = raw.split("|");
    if (parts.length !== 4 || parts[0] !== "1") return { ok: false, error: "That build code is from a different version." };
    theme = parts[1] || null; salt = parseInt(parts[2], 10);
    if (theme && data && !themeDef(theme)) return { ok: false, error: "Unknown build type: " + theme };
    if (!(salt > 0)) return { ok: false, error: "That build code is damaged." };
    if (parts[3]) parts[3].split(",").forEach(function (item) {
      var f = item.split(":"), night = parseInt(f[0], 10), pc = f.length === 3 ? pieceById(f[1]) : null;
      if (bad) return;
      if (f.length !== 3 || !f[1] || !f[2] || !(night >= EVERY && night <= EVERY * TOTAL) || night % EVERY || seen[night]) { bad = "bad pick list"; return; }
      if (data && (!pc || pc.theme !== theme)) { bad = "unknown piece " + f[1]; return; }
      if (data && !slotsOf(theme).some(function (sl) { return sl.id === f[2]; })) { bad = "unknown spot " + f[2]; return; }
      seen[night] = true; picks.push({ night: night, piece: f[1], slot: f[2] });
    });
    if (bad) return { ok: false, error: "That build code is damaged (" + bad + ")." };
    if (picks.length && !theme) return { ok: false, error: "That build code is damaged (no build type)." };
    return { ok: true, rec: { v: 1, theme: theme, salt: salt, picks: picks, code: "" } };
  }
  function importCode(str) {
    if (!save) save = loadSave();
    var r = parseCode(str);
    if (!r.ok) return r;
    save = r.rec; persist();
    if (mode) { if (step === "gallery") fillGallery(); else redraw(); }
    return { ok: true, count: save.picks.length };
  }

  /* ── canvas: painted backgrounds (no images) ─────────────────────────────── */
  function ellipse(ctx, x, y, rx, ry) { ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fill(); }
  function paintBg(ctx, W, H, theme) { if (theme === "castle") paintCastle(ctx, W, H); else paintVillage(ctx, W, H); }

  /* Tapered dirt road along the quadratic curve a→c→b; width shrinks from w0 to w1. */
  function road(ctx, a, c, b, w0, w1) {
    var L = [], R = [], t, x, y, dx, dy, n, w;
    for (t = 0; t <= 1.0001; t += 0.05) {
      x = (1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0];
      y = (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1];
      dx = 2 * (1 - t) * (c[0] - a[0]) + 2 * t * (b[0] - c[0]);
      dy = 2 * (1 - t) * (c[1] - a[1]) + 2 * t * (b[1] - c[1]);
      n = Math.sqrt(dx * dx + dy * dy) || 1; w = (w0 + (w1 - w0) * t) / 2;
      L.push([x - dy / n * w, y + dx / n * w]); R.push([x + dy / n * w, y - dx / n * w]);
    }
    ctx.beginPath();
    L.forEach(function (p, i) { if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); });
    R.reverse().forEach(function (p) { ctx.lineTo(p[0], p[1]); });
    ctx.closePath(); ctx.fillStyle = "#c39a63"; ctx.fill();
    ctx.strokeStyle = "rgba(255,240,200,.55)"; ctx.lineWidth = 2; ctx.setLineDash([6, 9]);
    ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.quadraticCurveTo(c[0], c[1], b[0], b[1]); ctx.stroke(); ctx.setLineDash([]);
  }
  function paintVillage(ctx, W, H) {
    var hz = H * 0.42, g, i, r = rng(4242);
    g = ctx.createLinearGradient(0, 0, 0, hz); g.addColorStop(0, "#4f9fe6"); g.addColorStop(1, "#d6ecfb");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, hz);
    ctx.fillStyle = "#fff3b0"; ellipse(ctx, W * 0.84, H * 0.13, W * 0.045, W * 0.045);
    ctx.fillStyle = "rgba(255,255,255,.75)";
    ellipse(ctx, W * 0.2, H * 0.16, W * 0.09, H * 0.045); ellipse(ctx, W * 0.55, H * 0.1, W * 0.07, H * 0.035);
    ctx.fillStyle = "#8fc47f";
    ellipse(ctx, W * 0.18, hz + H * 0.03, W * 0.38, H * 0.13); ellipse(ctx, W * 0.78, hz + H * 0.03, W * 0.42, H * 0.11);
    g = ctx.createLinearGradient(0, hz, 0, H); g.addColorStop(0, "#82c45e"); g.addColorStop(1, "#3e8b2f");
    ctx.fillStyle = g; ctx.fillRect(0, hz, W, H - hz);
    road(ctx, [W * 0.18, H * 1.02], [W * 0.5, H * 0.62], [W * 0.99, hz + H * 0.05], W * 0.13, W * 0.012);
    for (i = 0; i < 40; i++) {                     /* fixed-seed flowers: never flicker between redraws */
      ctx.fillStyle = i % 3 ? "#fff59a" : "#ff9ab8";
      ellipse(ctx, r() * W, hz + H * 0.08 + r() * (H - hz - H * 0.08), 2.2, 2.2);
    }
  }
  function paintCastle(ctx, W, H) {
    var g, i;
    g = ctx.createLinearGradient(0, 0, 0, H * 0.8); g.addColorStop(0, "#2f5da8"); g.addColorStop(0.7, "#8fb6e8"); g.addColorStop(1, "#f4d3b0");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "rgba(255,255,255,.8)";
    ellipse(ctx, W * 0.15, H * 0.2, W * 0.1, H * 0.04); ellipse(ctx, W * 0.7, H * 0.12, W * 0.08, H * 0.035); ellipse(ctx, W * 0.9, H * 0.3, W * 0.07, H * 0.03);
    ctx.fillStyle = "#6c7fa6"; ctx.beginPath(); ctx.moveTo(0, H * 0.72);          /* far mountains */
    [[0.1, 0.5], [0.22, 0.62], [0.35, 0.44], [0.5, 0.58], [0.62, 0.4], [0.78, 0.6], [0.9, 0.48], [1, 0.66]]
      .forEach(function (p) { ctx.lineTo(W * p[0], H * p[1]); });
    ctx.lineTo(W, H * 0.8); ctx.lineTo(0, H * 0.8); ctx.fill();
    g = ctx.createLinearGradient(0, H * 0.45, 0, H); g.addColorStop(0, "#8ccf68"); g.addColorStop(1, "#3c8a30");   /* the hill */
    ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(0, H); ctx.lineTo(0, H * 0.78);
    ctx.quadraticCurveTo(W * 0.5, H * 0.2, W, H * 0.78); ctx.lineTo(W, H); ctx.fill();
    ctx.fillStyle = "#2f7a2a";
    for (i = 0; i < 9; i++) ellipse(ctx, W * (0.04 + i * 0.115), H * (0.96 + (i % 2) * 0.02), W * 0.045, H * 0.04);
  }
  function banner(ctx, W, H, text) {
    ctx.fillStyle = "rgba(8,10,14,.55)"; ctx.fillRect(0, H * 0.42, W, H * 0.16);
    ctx.fillStyle = "#f5c842"; ctx.font = "700 " + Math.round(Math.max(14, W * 0.032)) + "px 'Trebuchet MS', sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(text, W / 2, H * 0.5, W * 0.9);
  }

  /* ── canvas: pieces ──────────────────────────────────────────────────────── */
  function getImg(src) {
    var c = imgCache[src];
    if (c) return c;
    c = imgCache[src] = { img: new Image(), ok: null };
    if (!src) { c.ok = false; return c; }
    c.img.onload = function () { c.ok = true; scheduleDraw(); };
    c.img.onerror = function () { c.ok = false; scheduleDraw(); };
    c.img.src = src;
    return c;
  }
  function scheduleDraw() { if (drawQueued) return; drawQueued = true; requestAnimationFrame(function () { drawQueued = false; redraw(); }); }

  /* Slot pitch in px: median nearest-neighbour distance between slots, clamped. A piece with w:1 is one pitch wide. */
  function pitchPx(W, H) {
    var s = slotsOf(save.theme), nn = [], i, j, m, dx, dy, med;
    for (i = 0; i < s.length; i++) {
      m = Infinity;
      for (j = 0; j < s.length; j++) if (j !== i) { dx = (s[i].x - s[j].x) * W; dy = (s[i].y - s[j].y) * H; m = Math.min(m, Math.sqrt(dx * dx + dy * dy)); }
      if (m < Infinity) nn.push(m);
    }
    nn.sort(function (a, b) { return a - b; });
    med = nn.length ? nn[Math.floor(nn.length / 2)] * 1.15 : W * 0.12;
    return Math.max(W * 0.07, Math.min(W * 0.16, med));
  }
  /* Every sprite in a theme was pre-rendered at the same pixels-per-unit, so pieces
     keep their true relative sizes: draw at natural size × one scene scale
     (canvas width / pieces.json sceneW × drawScale). (ax, ay) is the sprite's
     ground-contact point as fractions of the image (default bottom-centre). */
  function sceneScale(W) {
    var sw = (data && data.sceneW) || 1120, th = themeDef(save.theme);
    var ds = (th && th.drawScale) || (data && data.drawScale) || 1;   /* per-theme scale wins */
    return (W / sw) * ds;
  }
  /* Draw one piece anchored at (x,y). A missing or still-loading image draws a labelled placeholder instead of throwing. */
  function drawPiece(ctx, p, x, y, pitch, alpha) {
    var bw = pitch * 0.9, bh = pitch * 0.9, c = getImg(p.img), iw, ih, s, dw, dh, ax, ay;
    ctx.save(); ctx.globalAlpha = alpha;
    if (c.ok) {
      iw = c.img.naturalWidth || 1; ih = c.img.naturalHeight || 1; s = sceneScale(ctx.canvas._w || 1); dw = iw * s; dh = ih * s;
      ax = (p.ax != null) ? p.ax : 0.5; ay = (p.ay != null) ? p.ay : 1;
      ctx.fillStyle = "rgba(0,0,0,.16)"; ellipse(ctx, x, y + 2, dw * 0.4, dw * 0.1);
      ctx.drawImage(c.img, x - dw * ax, y - dh * ay, dw, dh);
    } else {
      ctx.fillStyle = "rgba(0,0,0,.2)"; ellipse(ctx, x, y + 2, bw * 0.45, bw * 0.11);
      ctx.fillStyle = c.ok === null ? "rgba(255,255,255,.35)" : "rgba(58,65,80,.9)";
      ctx.fillRect(x - bw / 2, y - bh, bw, bh);
      ctx.strokeStyle = "#f5c842"; ctx.lineWidth = 1.5; ctx.strokeRect(x - bw / 2, y - bh, bw, bh);
      ctx.fillStyle = "#e8e6df"; ctx.font = "700 " + Math.max(9, Math.round(pitch * 0.13)) + "px 'Trebuchet MS', sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(p.name || p.id, x, y - bh / 2, bw - 4);
    }
    ctx.restore();
  }
  function redraw() {
    if (!ui || !mode) return;
    var cv = ui.canvas, ctx = cv.getContext("2d"), W = cv._w || 1, H = cv._h || 1, now = Date.now(), pitch, items;
    ctx.setTransform(cv._dpr || 1, 0, 0, cv._dpr || 1, 0, 0);
    ctx.clearRect(0, 0, W, H);
    paintBg(ctx, W, H, save.theme || "village");
    if (!save.theme) { banner(ctx, W, H, loadState === "ok" ? "Win Night 5 to start building" : "Build data not available"); return; }
    pitch = pitchPx(W, H);
    if (step === "place" && cur) cur.free.forEach(function (s) {               /* pulsing free spots */
      var r = pitch * (0.26 + 0.05 * Math.sin(now / 260 + s.x * 9));
      ctx.beginPath(); ctx.ellipse(s.x * W, s.y * H, r, r * 0.45, 0, 0, Math.PI * 2);
      ctx.fillStyle = cur.hover === s ? "rgba(245,200,66,.5)" : "rgba(245,200,66,.22)"; ctx.fill();
      ctx.lineWidth = 2; ctx.strokeStyle = "#f5c842"; ctx.stroke();
    });
    items = save.picks.map(function (p) { return { p: pieceById(p.piece), s: slotById(p.slot), a: 1 }; });
    if (step === "place" && cur && cur.hover) items.push({ p: cur.piece, s: cur.hover, a: 0.6 });   /* ghost preview */
    items.filter(function (it) { return it.p && it.s; })
      .sort(function (a, b) { return a.s.y - b.s.y; })                            /* back to front */
      .forEach(function (it) { drawPiece(ctx, it.p, it.s.x * W, it.s.y * H, pitch, it.a); });
    if (step === "done" && cur && cur.slot) {                                    /* halo on the new piece */
      ctx.beginPath(); ctx.ellipse(cur.slot.x * W, cur.slot.y * H + 2, pitch * 0.5, pitch * 0.2, 0, 0, Math.PI * 2);
      ctx.lineWidth = 3; ctx.strokeStyle = "rgba(245,200,66,.9)"; ctx.stroke();
    }
  }
  function pulse() { if (!mode || step !== "place") { rafOn = false; return; } redraw(); requestAnimationFrame(pulse); }
  function startPulse() { if (!rafOn) { rafOn = true; requestAnimationFrame(pulse); } }

  /* 16:9 canvas sized to the card and the height left over by the other rows; devicePixelRatio aware. */
  function layoutCanvas() {
    var cv = ui.canvas, wrap = ui.sceneWrap, kids = ui.card.children, used = 0, i, maxH, w, h, dpr;
    for (i = 0; i < kids.length; i++) if (kids[i] !== wrap && !kids[i].classList.contains("hidden")) used += kids[i].offsetHeight + 8;
    maxH = Math.max(150, Math.floor(window.innerHeight * 0.94 - 64 - used));
    w = wrap.clientWidth || 600; h = Math.round(w * 9 / 16);
    if (h > maxH) { h = maxH; w = Math.round(h * 16 / 9); }
    dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.style.width = w + "px"; cv.style.height = h + "px";
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv._w = w; cv._h = h; cv._dpr = dpr;
  }
  function canvasPoint(e) { var r = ui.canvas.getBoundingClientRect(); return { x: (e.clientX - r.left) / (r.width || 1), y: (e.clientY - r.top) / (r.height || 1) }; }
  function nearestFree(pt) {
    var W = ui.canvas._w, H = ui.canvas._h, best = null, bd = Infinity, lim = Math.max(28, pitchPx(W, H) * 0.55);
    (cur.free || []).forEach(function (s) { var dx = (s.x - pt.x) * W, dy = (s.y - pt.y) * H, d = Math.sqrt(dx * dx + dy * dy); if (d < bd) { bd = d; best = s; } });
    return bd <= lim ? best : null;
  }

  /* ── DOM (built once, appended to body) ──────────────────────────────────── */
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function show(n, on) { n.classList.toggle("hidden", !on); }
  function btn(cls, label) { var b = el("button", cls, label); b.type = "button"; return b; }
  function buildDom() {
    if (ui) return;
    ui = {};
    ui.overlay = el("div", "hidden"); ui.overlay.id = "build-overlay";
    ui.overlay.setAttribute("role", "dialog"); ui.overlay.setAttribute("aria-modal", "true"); ui.overlay.setAttribute("aria-hidden", "true");
    ui.card = el("div", "build-card");
    var head = el("div", "build-head"), hl = el("div"), codeLab, loadLab;
    ui.kicker = el("p", "tut-kicker"); ui.title = el("h2"); hl.appendChild(ui.kicker); hl.appendChild(ui.title);
    ui.badge = el("span", "build-badge"); head.appendChild(hl); head.appendChild(ui.badge);
    ui.sub = el("p", "build-sub");
    ui.themes = el("div", "build-themes hidden");
    ui.options = el("div", "build-options hidden");
    ui.sceneWrap = el("div", "build-scene hidden"); ui.canvas = el("canvas"); ui.sceneWrap.appendChild(ui.canvas);
    ui.note = el("p", "build-note hidden");
    ui.codeWrap = el("div", "build-code hidden");
    codeLab = el("label", "lab", "Build code"); ui.codeOut = el("input"); ui.codeOut.readOnly = true; ui.codeOut.id = "build-code-out"; codeLab.htmlFor = ui.codeOut.id;
    ui.copyBtn = btn("btn", "Copy");
    loadLab = el("label", "lab", "Load code"); ui.codeIn = el("input"); ui.codeIn.id = "build-code-in"; loadLab.htmlFor = ui.codeIn.id;
    ui.codeIn.placeholder = "Paste a build code from another Chromebook"; ui.codeIn.autocomplete = "off"; ui.codeIn.spellcheck = false;
    ui.loadBtn = btn("btn", "Load");
    ui.codeMsg = el("p", "build-msg");
    [codeLab, ui.codeOut, ui.copyBtn, loadLab, ui.codeIn, ui.loadBtn, ui.codeMsg].forEach(function (n) { ui.codeWrap.appendChild(n); });
    ui.row = el("div", "row build-row");
    [head, ui.sub, ui.themes, ui.options, ui.sceneWrap, ui.note, ui.codeWrap, ui.row].forEach(function (n) { ui.card.appendChild(n); });
    ui.overlay.appendChild(ui.card);
    document.body.appendChild(ui.overlay);

    /* Backdrop taps do nothing — a reward can only be dismissed with Continue. */
    ui.overlay.addEventListener("pointerdown", function (e) { if (e.target === ui.overlay) e.preventDefault(); });
    ui.canvas.addEventListener("pointermove", function (e) { if (step === "place" && cur) cur.hover = nearestFree(canvasPoint(e)); });
    ui.canvas.addEventListener("pointerleave", function () { if (cur) cur.hover = null; });
    ui.canvas.addEventListener("click", function (e) {
      if (step !== "place" || !cur) return;
      var s = nearestFree(canvasPoint(e));
      if (s) placeAt(s); else ui.note.textContent = "Tap one of the glowing spots.";
    });
    ui.copyBtn.addEventListener("click", copyCode);
    ui.loadBtn.addEventListener("click", doLoad);
    ui.codeIn.addEventListener("input", function () { if (cur) cur.confirmLoad = false; ui.loadBtn.textContent = "Load"; ui.codeMsg.textContent = ""; });
    window.addEventListener("resize", function () { if (mode && !ui.sceneWrap.classList.contains("hidden")) { layoutCanvas(); redraw(); } });
  }
  function setButtons(list) {
    ui.row.innerHTML = ""; ui.primary = null;
    list.forEach(function (b) {
      var n = btn("btn" + (b.primary ? " primary" : ""), b.label);
      n.disabled = !!b.disabled;
      n.addEventListener("click", function (e) { e.preventDefault(); if (!n.disabled && b.onTap) b.onTap(); });
      if (b.primary) ui.primary = n;
      ui.row.appendChild(n);
    });
  }
  function selectIn(container, node) { Array.prototype.forEach.call(container.children, function (c) { c.classList.toggle("selected", c === node); }); }

  function fillThemes() {
    ui.themes.innerHTML = "";
    var ids = Object.keys(themes()); if (!ids.length) ids = THEME_ORDER;
    ids.forEach(function (id) {
      var b = btn("build-theme"), cv = el("canvas"), t = themeDef(id);
      cv.width = 320; cv.height = 180; paintBg(cv.getContext("2d"), 320, 180, id);
      b.appendChild(cv); b.appendChild(el("span", "name", "My " + themeName(id)));
      b.appendChild(el("span", "meta", (t && t.desc) || THEME_BLURB[id] || ""));
      b.addEventListener("click", function () {
        if (step !== "theme" || !cur || !ui.primary) return;
        cur.themePick = id; selectIn(ui.themes, b);
        ui.primary.disabled = false; ui.primary.textContent = "Start my " + themeName(id);
      });
      ui.themes.appendChild(b);
    });
  }
  function fillOptions() {
    ui.options.innerHTML = "";
    cur.offer.forEach(function (p) {
      var b = btn("build-opt"), pic = el("div", "pic"), img = new Image();
      img.alt = ""; img.onerror = function () { pic.innerHTML = ""; pic.appendChild(el("span", "ph", p.name || p.id)); };
      img.src = p.img || ""; pic.appendChild(img);
      b.appendChild(pic); b.appendChild(el("span", "name", p.name || p.id)); b.appendChild(el("span", "meta", p.desc || ""));
      b.addEventListener("click", function () {
        if (step !== "pick" || !cur || !ui.primary) return;
        cur.piece = p; selectIn(ui.options, b);
        ui.primary.disabled = false; ui.primary.textContent = "Choose the " + (p.name || p.id);
      });
      ui.options.appendChild(b);
    });
  }
  function fillGallery() {
    var n = Math.min(save.picks.length, TOTAL), next = nextRewardNight();
    ui.kicker.textContent = "Reward gallery"; ui.badge.textContent = n + " / " + TOTAL;
    ui.title.textContent = save.theme ? "My " + themeName(save.theme) : "My build";
    ui.sub.textContent = loadState !== "ok" ? "Build data could not be loaded on this page." :
      !save.theme ? "Win Night 5 to choose a Town or a Castle. You earn a new piece every 5 nights." :
      n + " of " + TOTAL + " pieces · " + (next ? "next reward after night " + next : "your build is complete!");
    ui.codeOut.value = exportCode(); ui.codeIn.value = ""; ui.codeMsg.textContent = ""; ui.loadBtn.textContent = "Load";
    setButtons([{ label: "Close", primary: true, onTap: function () { var cb = cur && cur.onClose; closeOverlay(); if (cb) cb(); } }]);
    layoutCanvas(); redraw();
  }

  /* ── steps ───────────────────────────────────────────────────────────────── */
  function showStep(s) {
    step = s;
    var name = cur && cur.piece ? (cur.piece.name || cur.piece.id) : "";
    show(ui.themes, s === "theme"); show(ui.options, s === "pick");
    show(ui.sceneWrap, s === "place" || s === "done" || s === "gallery");
    show(ui.note, s === "place" || s === "done"); show(ui.codeWrap, s === "gallery");
    ui.note.textContent = "";
    if (s === "gallery") { fillGallery(); return; }
    ui.badge.textContent = "REWARD";
    ui.kicker.textContent = "Night " + cur.night + " reward · piece " + cur.k + " of " + TOTAL;
    if (s === "theme") {
      ui.kicker.textContent = "Night " + cur.night + " reward · your first piece";
      ui.title.textContent = "Build a Town or a Castle?";
      ui.sub.textContent = "You earn a new piece every 5 nights, all the way to night 100. This choice is permanent.";
      setButtons([{ label: "Tap one to choose", primary: true, disabled: true, onTap: function () {
        if (!cur.themePick) return; save.theme = cur.themePick; persist(); beginPick();
      } }]);
      fillThemes();
    } else if (s === "pick") {
      ui.title.textContent = "Pick a piece for your " + themeName(save.theme);
      ui.sub.textContent = "Tap one of the three. Then you choose where it goes.";
      setButtons([{ label: "Tap a piece first", primary: true, disabled: true, onTap: beginPlace }]);
      fillOptions();
    } else if (s === "place") {
      ui.title.textContent = "Where does the " + name + " go?";
      ui.sub.textContent = "Tap a glowing spot in your " + themeName(save.theme) + ".";
      setButtons([{ label: "Place it for me", onTap: function () { placeAt(null); } }]);
      layoutCanvas(); startPulse();
    } else if (s === "done") {
      ui.title.textContent = name + " added!";
      ui.sub.textContent = "Piece " + cur.k + " of " + TOTAL + " is in place." + (cur.k < TOTAL ? " Next reward after night " + (cur.night + EVERY) + "." : " Your build is complete!");
      ui.note.textContent = "Added to your " + themeName(save.theme) + "!";
      setButtons([{ label: "Continue", primary: true, onTap: finish }]);
      layoutCanvas(); redraw();
    }
    if (ui.primary && !ui.primary.disabled) { try { ui.primary.focus(); } catch (e) {} }
  }
  function beginPick() {
    cur.offer = offerFor(cur.night);
    if (!cur.offer.length) { console.warn("[SolBuild] no pieces for theme " + save.theme); finish(); return; }
    showStep("pick");
  }
  function beginPlace() {
    if (!cur || !cur.piece) return;
    cur.free = freeSlots(cur.band);
    if (!cur.free.length) { placeAt(null); return; }   /* nothing free: auto-place */
    showStep("place");
  }
  function placeAt(slot) {
    if (!cur || !cur.piece || cur.slot) return;
    var all = slotsOf(save.theme);
    if (!slot) slot = cur.free[0] || all[save.picks.length % Math.max(1, all.length)] || { id: "?", x: 0.5, y: 0.8 };
    save.picks.push({ night: cur.night, piece: cur.piece.id, slot: slot.id });
    cur.slot = slot; cur.hover = null; persist();
    showStep("done");
  }
  function finish() { var cb = cur && cur.onDone; closeOverlay(); if (cb) cb(); }
  function openOverlay(m) { mode = m; ui.overlay.classList.remove("hidden"); ui.overlay.setAttribute("aria-hidden", "false"); }
  function closeOverlay() {
    mode = null; step = null; cur = null;
    if (ui) { ui.overlay.classList.add("hidden"); ui.overlay.setAttribute("aria-hidden", "true"); }
  }

  /* Keys: during a reward Escape is swallowed (Continue is the only way out); in the gallery Escape closes. */
  function onKey(e) {
    if (!mode) return;
    var k = e.key || e.code, esc = k === "Escape" || k === "Esc", cb;
    if (mode === "gallery") {
      if (esc) { e.preventDefault(); e.stopPropagation(); cb = cur && cur.onClose; closeOverlay(); if (cb) cb(); }
      else if (k === "Enter" && e.target === ui.codeIn) { e.preventDefault(); e.stopPropagation(); doLoad(); }
      return;
    }
    if (esc) e.preventDefault();
    if (esc || k === " " || k === "Enter" || k === "Tab") { e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation(); }
  }

  /* ── build-code row ──────────────────────────────────────────────────────── */
  function copyCode() {
    var txt = ui.codeOut.value;
    function done(ok) { ui.copyBtn.textContent = ok ? "Copied!" : "Select + Ctrl+C"; setTimeout(function () { ui.copyBtn.textContent = "Copy"; }, 1600); }
    function fallback() { try { ui.codeOut.focus(); ui.codeOut.select(); done(document.execCommand("copy")); } catch (e) { done(false); } }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { done(true); }, fallback);
    else fallback();
  }
  function doLoad() {
    var r = parseCode(ui.codeIn.value);
    ui.codeMsg.className = "build-msg";
    if (!r.ok) { ui.codeMsg.textContent = r.error; ui.codeMsg.className = "build-msg bad"; return; }
    if (save.picks.length && !cur.confirmLoad) {           /* confirm before replacing a real build */
      cur.confirmLoad = true; ui.loadBtn.textContent = "Yes, replace";
      ui.codeMsg.textContent = "This replaces your current build (" + save.picks.length + " pieces). Tap again to confirm.";
      return;
    }
    cur.confirmLoad = false;
    r = importCode(ui.codeIn.value);
    fillGallery();
    ui.codeMsg.textContent = r.ok ? "Loaded " + r.count + " pieces." : r.error;
    ui.codeMsg.className = "build-msg " + (r.ok ? "ok" : "bad");
  }

  /* Optional title-screen button: <button id="btn-build" class="btn">My Town</button> — bound + relabelled here. */
  function refreshButton() {
    var b = document.getElementById("btn-build");
    if (!b) return;
    b.textContent = state().label;
    if (!b._solBuild) { b._solBuild = true; b.addEventListener("click", function (e) { e.preventDefault(); showGallery(); }); }
  }

  /* ── public API ──────────────────────────────────────────────────────────── */
  function init() { if (!save) save = loadSave(); load(); refreshButton(); }
  function rewardDue(night) {
    night = parseInt(night, 10);
    if (!save) save = loadSave();
    return night > 0 && night % EVERY === 0 && night <= EVERY * TOTAL && !pickFor(night);
  }
  function showReward(night, onDone) {
    night = parseInt(night, 10);
    init();
    whenReady(function () {
      if (mode || loadState !== "ok" || !rewardDue(night)) { if (onDone) onDone(); return; }
      buildDom();
      cur = { night: night, k: night / EVERY, band: bandFor(night / EVERY), onDone: onDone || null,
        offer: null, piece: null, slot: null, free: [], hover: null, themePick: null };
      openOverlay("reward");
      if (save.theme && themeDef(save.theme)) beginPick(); else showStep("theme");
    });
  }
  function showGallery(onClose) {
    init();
    whenReady(function () {
      if (mode === "reward") return;              /* never interrupt a reward */
      buildDom();
      cur = { onClose: onClose || null, confirmLoad: false };
      openOverlay("gallery");
      showStep("gallery");
    });
  }
  function state() {
    if (!save) save = loadSave();
    var nm = save.theme ? themeName(save.theme) : null;
    return { theme: save.theme, themeName: nm, count: Math.min(save.picks.length, TOTAL), total: TOTAL,
      nextNight: nextRewardNight(), label: "My " + (nm || "Town"), loaded: loadState };
  }

  /* Registered at script load (not in buildDom) so it sits ahead of game.js's own document-capture
     keydown listeners: same node + same phase fire in registration order, and build.js loads first. */
  document.addEventListener("keydown", onKey, true);

  window.SolBuild = {
    init: init, rewardDue: rewardDue, showReward: showReward, showGallery: showGallery,
    close: closeOverlay, isOpen: function () { return !!mode; },
    exportCode: exportCode, importCode: importCode, state: state,
    LS_KEY: LS_KEY, version: 1
  };
})();
