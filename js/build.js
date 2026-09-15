/*
 * SOL Labyrinth — "Town & Castle" reward builder (v2, modular).   window.SolBuild
 *
 * Every 5 nights won (5, 10, … 100 = 20 rewards) a pop-up covers the game.
 * Reward 1: the student picks a Town or a Castle (permanent), then a livable
 *           starting building (cottage / stone cottage / house, or keep / lodge /
 *           great hall) and a STYLE for it.
 * Rewards 2–20: the game offers three building pieces that fit the next lot of
 *           the estate (a wing, a tower, a bakery, a gatehouse…); the student
 *           picks one, then picks its style. Pieces attach to fixed lots around
 *           the core so the estate reads as one growing building.
 * Walls:    at reward `wallLevel` (pieces.json, 8 = night 40) a ring of walls
 *           (castle) or fences (town) goes up around the whole estate by itself.
 *
 * Styles (pieces.json themes.*.styles): three per theme, sprites pre-recoloured
 * under assets/build/styles/<style>/. Each style names a partner style that
 * "matches" it, so the style step can suggest a complement.
 *
 * Coins:    the game awards coins (SolBuild.addCoins) for correct answers, a
 *           perfect night and bonus pickups. SolBuild.showShop opens the shop
 *           after any night: buildings for the next lot, decorations, and packs.
 *
 * Public API
 *   SolBuild.init()                     load assets/build/pieces.json + saved build
 *   SolBuild.rewardDue(night)           true when night % 5 === 0 and no pick for that night
 *   SolBuild.showReward(night, onDone)  full-screen reward flow; onDone() when Continue is tapped
 *   SolBuild.showGallery(onClose)       "My Town" / "My Castle" viewer with build-code Copy / Load
 *   SolBuild.showShop(night, onClose)   coin shop (buildings, decorations, packs)
 *   SolBuild.addCoins(n, why)           add (or spend, n<0) coins; returns the balance
 *   SolBuild.coins() / economy()        balance / {answer, perfectNight, bonusMin, bonusMax, bonusPer}
 *   SolBuild.close() / isOpen() / exportCode() / importCode(str) / state()
 *
 * Save record (localStorage "afterHours.v1.build"):
 *   {v:3, theme:"village"|"castle"|null, salt:<int>, coins:<int>,
 *    picks:[{night:5, piece:"keep", style:"stone", lot:1, src:"reward"|"shop", deco:false}], code:"…"}
 *   Building lot 1 is the core; lot k (2..) is pieces.json lots[k-2]; a decoration's
 *   lot indexes pieces.json decoLots. Reward picks are one per reward night.
 *   A v1 record ({v:1, picks:[{night,piece,slot}]}) is migrated on load: the
 *   theme is kept and every reward already earned becomes a default piece in
 *   the theme's first style, so the reward calendar is unchanged.
 */
(function () {
  "use strict";

  var LS_KEY = "afterHours.v1.build";
  var DATA_URL = "assets/build/pieces.json";
  var EVERY = 5;                          /* a reward every 5 nights            */
  var TOTAL = 20;                         /* 20 rewards = nights 5..100          */
  var OPTIONS = 3;                        /* pieces offered per reward           */
  var THEME_ORDER = ["village", "castle"];
  var THEME_BLURB = { village: "A cottage that grows into a whole town.", castle: "A keep that grows into a fortress." };
  var SHOP_TABS = [["build", "Buildings"], ["deco", "Decorations"], ["pack", "Packs"]];
  var KIND_HINT = { side: "This piece joins the side of your building.", back: "This piece goes behind your building.",
    front: "This piece goes out front, by the entrance.", far: "This piece stands at the back of the estate." };

  var data = null;                        /* parsed pieces.json                  */
  var loadState = "idle";                 /* idle | loading | ok | fail          */
  var waiters = [];
  var save = null;                        /* the build record (see header)       */
  var imgCache = {};                      /* src -> {img, ok:null|true|false}    */
  var ui = null;                          /* DOM refs, created once              */
  var mode = null;                        /* "reward" | "gallery" | null=closed  */
  var step = null;                        /* theme | pick | style | done | gallery | shop */
  var cur = null;                         /* live state of the open overlay      */
  var drawQueued = false;

  /* ── save record ─────────────────────────────────────────────────────────── */
  function freshSave() { return { v: 3, theme: null, salt: Math.floor(Math.random() * 900000000) + 1, coins: 0, picks: [], code: "" }; }
  /* Keep only well-formed picks. Reward picks: one per reward night. Shop picks: any night 1..100. */
  function cleanPicks(list) {
    var out = [], seenReward = {}, order = 0;
    (Array.isArray(list) ? list : []).forEach(function (p) {
      var n = p && typeof p === "object" ? parseInt(p.night, 10) : NaN, src = p && p.src === "shop" ? "shop" : "reward";
      if (!(n >= 1 && n <= EVERY * TOTAL) || typeof p.piece !== "string") return;
      if (src === "reward") { if (n % EVERY || seenReward[n]) return; seenReward[n] = true; }
      var pk = { night: n, piece: p.piece, style: typeof p.style === "string" ? p.style : "", lot: parseInt(p.lot, 10) || 0,
        src: src, deco: !!p.deco, ord: order++ };
      if (p.cx != null && p.cy != null && isFinite(parseInt(p.cx, 10)) && isFinite(parseInt(p.cy, 10))) { pk.cx = parseInt(p.cx, 10); pk.cy = parseInt(p.cy, 10); }
      out.push(pk);
    });
    return out;
  }
  function loadSave() {
    var s = null;
    try { s = JSON.parse(localStorage.getItem(LS_KEY) || "null"); } catch (e) { s = null; }
    if (!s || typeof s !== "object" || !(s.v >= 1 && s.v <= 3)) s = freshSave();
    if (s.v === 1) s = { v: 3, theme: s.theme, salt: s.salt, picks: s.picks, code: "", migrate: true };
    s.picks = cleanPicks(s.picks);
    s.salt = parseInt(s.salt, 10); if (!(s.salt > 0)) s.salt = freshSave().salt;
    s.coins = Math.max(0, parseInt(s.coins, 10) || 0);
    if (typeof s.theme !== "string") s.theme = null;
    if (typeof s.code !== "string") s.code = "";
    s.v = 3;
    return s;
  }
  function buildingPicks() { return save.picks.filter(function (p) { return !p.deco; }); }
  function decoPicks() { return save.picks.filter(function (p) { return p.deco; }); }
  function nextLot() { var used = {}, k = 1; buildingPicks().forEach(function (p) { used[p.lot] = true; }); while (used[k]) k++; return k; }
  function nextDecoLot() { var used = {}, k = 1; decoPicks().forEach(function (p) { used[p.lot] = true; }); while (used[k]) k++; return k; }
  /* Once pieces.json is in: turn v1 picks (scattered props) into default modular picks. */
  function migrateIfNeeded() {
    if (!save || !data) return;
    var changed = false;
    if (save.theme && !themeDef(save.theme)) { save.theme = null; save.picks = []; changed = true; }
    var usedLots = {}, usedDeco = {};
    save.picks.forEach(function (p) {
      var pc = pieceById(p.piece);
      if (pc && pc.role === "deco" && !p.deco) { p.deco = true; changed = true; }
      if (p.deco) { if (!(p.lot > 0) || usedDeco[p.lot]) { p.lot = 1; while (usedDeco[p.lot]) p.lot++; changed = true; } usedDeco[p.lot] = true; }
      else { if (!(p.lot > 0) || usedLots[p.lot]) { p.lot = 1; while (usedLots[p.lot]) p.lot++; changed = true; } usedLots[p.lot] = true; }
    });
    save.picks.forEach(function (p, i) {
      var k = p.lot, pc = pieceById(p.piece), ok;
      if (p.deco) { ok = pc && pc.theme === save.theme && pc.role === "deco"; if (!ok) { p.piece = defaultDeco(i); changed = true; } return; }
      if (k === 1) ok = pc && pc.theme === save.theme && pc.role === "core";
      else ok = pc && pc.theme === save.theme && pc.role === "module";
      if (!ok) { p.piece = defaultPiece(k, i); changed = true; }
      if (!styleDef(p.style)) { p.style = defaultStyle(); changed = true; }
    });
    if (save.migrate) { delete save.migrate; changed = true; }
    if (changed) persist();
    ensurePositions();
  }
  function persist() {
    save.picks.sort(function (a, b) { return (a.night - b.night) || ((a.ord || 0) - (b.ord || 0)); });
    save.code = exportCode();
    try { localStorage.setItem(LS_KEY, JSON.stringify(save)); } catch (e) {}
    refreshButton();
  }

  /* ── pieces.json helpers ─────────────────────────────────────────────────── */
  function themes() { return (data && data.themes) || {}; }
  function themeDef(id) { return themes()[id] || null; }
  function themeName(id) { var t = themeDef(id); return (t && t.name) || (id === "castle" ? "Castle" : "Town"); }
  function stylesOf(theme) { var t = themeDef(theme || save.theme); return (t && t.styles) || []; }
  function styleDef(id) { var s = stylesOf(), i; for (i = 0; i < s.length; i++) if (s[i].id === id) return s[i]; return null; }
  function styleName(id) { var s = styleDef(id); return s ? s.name : ""; }
  function defaultStyle() { var s = stylesOf(); return s.length ? s[0].id : ""; }
  function pieceById(id) { var p = (data && data.pieces) || [], i; for (i = 0; i < p.length; i++) if (p[i].id === id) return p[i]; return null; }
  function piecesOf(theme, role) { return ((data && data.pieces) || []).filter(function (p) { return p.theme === theme && p.role === role; }); }
  function lotFor(k) { var L = (data && data.lots) || [], i; for (i = 0; i < L.length; i++) if (L[i].k === k) return L[i]; return k === 1 ? { k: 1, u: 0, v: 0, kind: "core" } : { k: k, u: k, v: k, kind: "side" }; }
  function fitsLot(p, lot) { return !p.fits || p.fits.indexOf(lot.kind) !== -1; }
  function decoLotFor(k) { var L = (data && data.decoLots) || [], i; for (i = 0; i < L.length; i++) if (L[i].k === k) return L[i]; return { k: k, u: 0.5 + (k % 5), v: 0.5 + Math.floor(k / 5) }; }
  function packsList() { return (data && data.packs) || []; }
  function economy() { var e = (data && data.economy) || {}; return { answer: e.answer || 10, perfectNight: e.perfectNight || 25, bonusMin: e.bonusMin || 3, bonusMax: e.bonusMax || 12, bonusPer: e.bonusPer || 500 }; }
  function priceOf(p) { return p ? (p.price || [0, 40, 80, 140, 220][p.tier || 1] || 40) : 0; }
  function defaultDeco(i) { var list = piecesOf(save.theme, "deco"); return list.length ? list[(i || 0) % list.length].id : ""; }
  function pickFor(night) { var i; for (i = 0; i < save.picks.length; i++) if (save.picks[i].night === night && save.picks[i].src !== "shop") return save.picks[i]; return null; }
  function bandFor(k) { return Math.max(1, Math.min(4, Math.ceil(k / 5))); }   /* reward 1-5 → tier 1 … 16-20 → tier 4 */
  function nextRewardNight() { var n; for (n = EVERY; n <= EVERY * TOTAL; n += EVERY) if (!pickFor(n)) return n; return null; }
  function wallLevel() { var t = themeDef(save.theme); return (t && t.wallLevel) || 8; }
  function wallsUp() { return !!save.theme && buildingPicks().length >= wallLevel(); }
  /* The style the student has used most (ties → the core's style). */
  function dominantStyle() {
    var count = {}, best = null, bn = -1;
    buildingPicks().forEach(function (p) { count[p.style] = (count[p.style] || 0) + 1; });
    if (buildingPicks().length && count[buildingPicks()[0].style]) count[buildingPicks()[0].style] += 0.5;
    Object.keys(count).forEach(function (k) { if (count[k] > bn && styleDef(k)) { bn = count[k]; best = k; } });
    return best || defaultStyle();
  }
  function partnerStyle(id) { var s = styleDef(id); return (s && s.pairs && s.pairs[0]) || null; }
  function imgFor(piece, style) {
    var s = styleDef(style), dir = (s && s.dir) || "", src = piece.img || "";
    if (!dir || piece.nostyle) return src;
    return src.replace(/^(.*\/)?([^\/]+)$/, function (m, d, f) { return (d || "") + dir + f; });
  }
  function defaultPiece(k, i) {
    var lot = lotFor(k), list = k === 1 ? piecesOf(save.theme, "core")
      : piecesOf(save.theme, "module").filter(function (p) { return fitsLot(p, lot) && (p.tier || 1) <= bandFor(k); });
    if (!list.length) list = piecesOf(save.theme, k === 1 ? "core" : "module");
    return list.length ? list[(i || 0) % list.length].id : "";
  }

  function load() {
    if (loadState !== "idle") return;
    loadState = "loading";
    var xhr = new XMLHttpRequest();
    function settle() {
      if (loadState === "fail") console.warn("[SolBuild] could not load " + DATA_URL);
      if (loadState === "ok") migrateIfNeeded();
      var w = waiters; waiters = [];
      w.forEach(function (fn) { fn(); });
      refreshButton();
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      try {
        if ((xhr.status >= 200 && xhr.status < 300) || (xhr.status === 0 && xhr.responseText)) {
          data = JSON.parse(xhr.responseText);
          if (!data || data.v !== 2) throw new Error("pieces.json v2 expected");
          loadState = "ok";
        } else loadState = "fail";
      } catch (e) { loadState = "fail"; }
      settle();
    };
    try { xhr.open("GET", DATA_URL, true); xhr.timeout = 20000; xhr.send(); } catch (e) { loadState = "fail"; settle(); }
  }
  function whenReady(fn) { if (loadState === "ok" || loadState === "fail") fn(); else { waiters.push(fn); load(); } }

  /* ── seeded RNG (Park–Miller) and the offer ──────────────────────────────── */
  function rng(seed) {
    var s = (Math.abs(Math.floor(seed)) % 2147483646) + 1;
    return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  }
  function shuffle(arr, r) { var i, j, t; for (i = arr.length - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }

  /* Three pieces for reward k. Reward 1 offers every core building. Otherwise:
     modules that fit the lot's kind, unowned first, the current band's tier
     first, then lower tiers; each group shuffled with seed = night + salt so a
     reload before picking shows the same three while students differ. */
  function offerFor(night, kLot, bandOverride) {
    var k = kLot || nextLot(), band = bandOverride || bandFor(Math.min(k, TOTAL)), lot = lotFor(k), owned = {}, r = rng(night * 7 + k + save.salt), out = [], wantOwned, t;
    if (k === 1) return piecesOf(save.theme, "core");
    save.picks.forEach(function (p) { owned[p.piece] = true; });
    var mods = piecesOf(save.theme, "module").filter(function (p) { return fitsLot(p, lot); });
    for (wantOwned = 0; wantOwned < 2 && out.length < OPTIONS; wantOwned++) {
      for (t = band; t >= 1 && out.length < OPTIONS; t--) {
        shuffle(mods.filter(function (p) { return (p.tier || 1) === t && !!owned[p.id] === !!wantOwned; }), r)
          .forEach(function (p) { if (out.length < OPTIONS && out.indexOf(p) === -1) out.push(p); });
      }
    }
    /* Thin lots (a "far" lot at band 1 has one or two candidates): borrow from the next tiers up, then from any module. */
    for (t = band + 1; t <= 4 && out.length < OPTIONS; t++) {
      shuffle(mods.filter(function (p) { return (p.tier || 1) === t; }), r).forEach(function (p) { if (out.length < OPTIONS && out.indexOf(p) === -1) out.push(p); });
    }
    if (out.length < OPTIONS) shuffle(piecesOf(save.theme, "module").slice(), r).forEach(function (p) { if (out.length < OPTIONS && out.indexOf(p) === -1) out.push(p); });
    return out;
  }

  /* ── build codes: base64url("4|theme|salt|coins|night:piece:style:lot:flags:cx,cy…") + 2-char checksum
     flags: r = reward, s = shop, d = decoration; cx,cy = grid cell. v1–v3 codes still load (pieces get auto-placed). */
  function b64url(s) { return btoa(unescape(encodeURIComponent(s))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function unb64url(s) { s = s.replace(/-/g, "+").replace(/_/g, "/"); while (s.length % 4) s += "="; return decodeURIComponent(escape(atob(s))); }
  function checksum(s) { var h = 7, i; for (i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 1296; return ("0" + h.toString(36)).slice(-2); }
  function exportCode() {
    if (!save) save = loadSave();
    var list = save.picks.map(function (p) { return p.night + ":" + p.piece + ":" + (p.style || "") + ":" + (p.lot || 0) + ":" + (p.src === "shop" ? "s" : "r") + (p.deco ? "d" : "") + ":" + (p.cx != null ? p.cx + "," + p.cy : ""); }).join(",;").replace(/,;/g, ";");
    var body = b64url("4|" + (save.theme || "") + "|" + save.salt + "|" + (save.coins || 0) + "|" + list);
    return body + checksum(body);
  }
  function parseCode(str) {
    var s = String(str || "").replace(/\s+/g, ""), body = s.slice(0, -2), raw, parts, theme, salt, coins = 0, picks = [], seen = {}, bad = null, ver, listStr;
    if (s.length < 4) return { ok: false, error: "Paste a build code first." };
    if (checksum(body) !== s.slice(-2)) return { ok: false, error: "That code has a typo — check every letter and try again." };
    try { raw = unb64url(body); } catch (e) { return { ok: false, error: "That is not a build code." }; }
    parts = raw.split("|"); ver = parts[0];
    if (!((ver === "1" || ver === "2") && parts.length === 4) && !((ver === "3" || ver === "4") && parts.length === 5)) return { ok: false, error: "That build code is from a different version." };
    theme = parts[1] || null; salt = parseInt(parts[2], 10);
    if (ver === "3" || ver === "4") { coins = Math.max(0, parseInt(parts[3], 10) || 0); listStr = parts[4]; } else listStr = parts[3];
    if (theme && data && !themeDef(theme)) return { ok: false, error: "Unknown build type: " + theme };
    if (!(salt > 0)) return { ok: false, error: "That build code is damaged." };
    if (listStr) listStr.split(ver === "4" ? ";" : ",").forEach(function (item) {
      var f = item.split(":"), night = parseInt(f[0], 10), flags = (ver === "3" || ver === "4") ? (f[4] || "r") : "r", shop = flags.indexOf("s") !== -1, pos, pk;
      if (bad) return;
      if (f.length < 3 || !f[1] || !(night >= 1 && night <= EVERY * TOTAL)) { bad = "bad pick list"; return; }
      if (!shop) { if (night % EVERY || seen[night]) { bad = "bad pick list"; return; } seen[night] = true; }
      pk = { night: night, piece: f[1], style: ver === "1" ? "" : (f[2] || ""), lot: ver === "1" ? night / EVERY : (parseInt(f[3], 10) || 0),
        src: shop ? "shop" : "reward", deco: flags.indexOf("d") !== -1 };
      if (ver === "4" && f[5]) { pos = f[5].split(","); if (pos.length === 2 && isFinite(parseInt(pos[0], 10))) { pk.cx = parseInt(pos[0], 10); pk.cy = parseInt(pos[1], 10); } }
      picks.push(pk);
    });
    if (bad) return { ok: false, error: "That build code is damaged (" + bad + ")." };
    if (picks.length && !theme) return { ok: false, error: "That build code is damaged (no build type)." };
    return { ok: true, rec: { v: 3, theme: theme, salt: salt, coins: coins, picks: picks, code: "" } };
  }
  function importCode(str) {
    if (!save) save = loadSave();
    var r = parseCode(str);
    if (!r.ok) return r;
    save = r.rec; save.picks = cleanPicks(save.picks);
    migrateIfNeeded(); persist();
    if (mode) { if (step === "gallery") fillGallery(); else redraw(); }
    return { ok: true, count: save.picks.length };
  }

  /* ── canvas: painted backgrounds (no images) ─────────────────────────────── */
  function ellipse(ctx, x, y, rx, ry) { ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fill(); }
  function paintBg(ctx, W, H, theme) { if (theme === "castle") paintCastle(ctx, W, H); else paintVillage(ctx, W, H); }
  function paintVillage(ctx, W, H) {
    var hz = H * 0.36, g, i, r = rng(4242);
    g = ctx.createLinearGradient(0, 0, 0, hz); g.addColorStop(0, "#4f9fe6"); g.addColorStop(1, "#d6ecfb");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, hz);
    ctx.fillStyle = "#fff3b0"; ellipse(ctx, W * 0.84, H * 0.11, W * 0.045, W * 0.045);
    ctx.fillStyle = "rgba(255,255,255,.75)";
    ellipse(ctx, W * 0.2, H * 0.14, W * 0.09, H * 0.045); ellipse(ctx, W * 0.55, H * 0.09, W * 0.07, H * 0.035);
    ctx.fillStyle = "#8fc47f";
    ellipse(ctx, W * 0.18, hz + H * 0.03, W * 0.38, H * 0.13); ellipse(ctx, W * 0.78, hz + H * 0.03, W * 0.42, H * 0.11);
    g = ctx.createLinearGradient(0, hz, 0, H); g.addColorStop(0, "#82c45e"); g.addColorStop(1, "#3e8b2f");
    ctx.fillStyle = g; ctx.fillRect(0, hz, W, H - hz);
    ctx.fillStyle = "rgba(120,160,80,.35)"; ellipse(ctx, W * 0.5, H * 0.68, W * 0.42, H * 0.27);   /* the estate's meadow */
    for (i = 0; i < 40; i++) {
      ctx.fillStyle = i % 3 ? "#fff59a" : "#ff9ab8";
      ellipse(ctx, r() * W, hz + H * 0.06 + r() * (H - hz - H * 0.06), 2.2, 2.2);
    }
  }
  function paintCastle(ctx, W, H) {
    var g, i;
    g = ctx.createLinearGradient(0, 0, 0, H * 0.8); g.addColorStop(0, "#2f5da8"); g.addColorStop(0.7, "#8fb6e8"); g.addColorStop(1, "#f4d3b0");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "rgba(255,255,255,.8)";
    ellipse(ctx, W * 0.15, H * 0.2, W * 0.1, H * 0.04); ellipse(ctx, W * 0.7, H * 0.12, W * 0.08, H * 0.035); ellipse(ctx, W * 0.9, H * 0.3, W * 0.07, H * 0.03);
    ctx.fillStyle = "#6c7fa6"; ctx.beginPath(); ctx.moveTo(0, H * 0.72);
    [[0.1, 0.5], [0.22, 0.62], [0.35, 0.44], [0.5, 0.58], [0.62, 0.4], [0.78, 0.6], [0.9, 0.48], [1, 0.66]]
      .forEach(function (p) { ctx.lineTo(W * p[0], H * p[1]); });
    ctx.lineTo(W, H * 0.8); ctx.lineTo(0, H * 0.8); ctx.fill();
    g = ctx.createLinearGradient(0, H * 0.4, 0, H); g.addColorStop(0, "#8ccf68"); g.addColorStop(1, "#3c8a30");
    ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(0, H); ctx.lineTo(0, H * 0.74);
    ctx.quadraticCurveTo(W * 0.5, H * 0.1, W, H * 0.74); ctx.lineTo(W, H); ctx.fill();
    ctx.fillStyle = "rgba(60,110,50,.35)"; ellipse(ctx, W * 0.5, H * 0.68, W * 0.42, H * 0.27);
    ctx.fillStyle = "#2f7a2a";
    for (i = 0; i < 9; i++) ellipse(ctx, W * (0.04 + i * 0.115), H * (0.96 + (i % 2) * 0.02), W * 0.045, H * 0.04);
  }
  function banner(ctx, W, H, text) {
    ctx.fillStyle = "rgba(8,10,14,.55)"; ctx.fillRect(0, H * 0.42, W, H * 0.16);
    ctx.fillStyle = "#f5c842"; ctx.font = "700 " + Math.round(Math.max(14, W * 0.032)) + "px 'Trebuchet MS', sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(text, W / 2, H * 0.5, W * 0.9);
  }

  /* ── canvas: the estate ──────────────────────────────────────────────────── */
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
  /* ── the estate grid ──────────────────────────────────────────────────────
     Pieces sit on an isometric grid of square cells (theme.cell px per cell,
     scene px). A piece covers n×n cells (piece.cells) from its top-left cell
     (cx, cy); +cx runs down-right on screen, +cy down-left. New pieces are
     auto-placed touching the building; students can drag any piece to a free
     spot (the "place" step and the gallery's Arrange mode). */
  function cellPx() { var t = themeDef(save.theme); return (t && t.cell) || 36; }
  function cellsOf(p) { return Math.max(1, (p && p.cells) || 1); }
  function cellXY(cx, cy) { var C = cellPx(); return { x: (cx - cy) * C / 2, y: (cx + cy) * C / 4 }; }
  function pxToCell(x, y) { var C = cellPx(); return { u: (x / (C / 2) + y / (C / 4)) / 2, v: (y / (C / 4) - x / (C / 2)) / 2 }; }
  function rectsOf(ignore) {
    var out = [];
    save.picks.forEach(function (pk) {
      var p = pieceById(pk.piece);
      if (!p || pk === ignore || pk.cx == null) return;
      out.push({ cx: pk.cx, cy: pk.cy, n: cellsOf(p), pk: pk });
    });
    return out;
  }
  function overlaps(cx, cy, n, r) { return cx < r.cx + r.n && cx + n > r.cx && cy < r.cy + r.n && cy + n > r.cy; }
  function touches(cx, cy, n, r) {
    var sideX = (cx + n === r.cx || r.cx + r.n === cx) && cy < r.cy + r.n && cy + n > r.cy;
    var sideY = (cy + n === r.cy || r.cy + r.n === cy) && cx < r.cx + r.n && cx + n > r.cx;
    return sideX || sideY;
  }
  function spotFree(cx, cy, n, ignore) {
    var rs = rectsOf(ignore), i;
    for (i = 0; i < rs.length; i++) if (overlaps(cx, cy, n, rs[i])) return false;
    return true;
  }
  /* Nearest free spot that touches an existing piece (or the origin for the first piece). */
  function autoPlace(n, ignore) {
    var rs = rectsOf(ignore), i, ring, cx, cy, best = null, bd = Infinity, sumx = 0, sumy = 0, d;
    if (!rs.length) return { cx: -Math.floor(n / 2), cy: -Math.floor(n / 2) };
    rs.forEach(function (r) { sumx += r.cx + r.n / 2; sumy += r.cy + r.n / 2; });
    var mx = sumx / rs.length, my = sumy / rs.length, R = 14;
    for (ring = 0; ring <= R; ring++) {
      for (cx = Math.round(mx) - ring; cx <= Math.round(mx) + ring; cx++) for (cy = Math.round(my) - ring; cy <= Math.round(my) + ring; cy++) {
        if (Math.max(Math.abs(cx - Math.round(mx)), Math.abs(cy - Math.round(my))) !== ring) continue;
        if (!spotFree(cx, cy, n, ignore)) continue;
        var adj = false;
        for (i = 0; i < rs.length; i++) if (touches(cx, cy, n, rs[i])) { adj = true; break; }
        if (!adj) continue;
        d = Math.abs(cx + n / 2 - mx) + Math.abs(cy + n / 2 - my) + (cx + cy) * 0.01;   /* tiny bias toward the front */
        if (d < bd) { bd = d; best = { cx: cx, cy: cy }; }
      }
      if (best) return best;
    }
    return { cx: Math.round(mx) + R, cy: Math.round(my) + R };
  }
  /* Every pick gets a position (older saves and pack purchases are placed here). */
  function ensurePositions() {
    var changed = false;
    save.picks.filter(function (pk) { return !pk.deco; }).concat(save.picks.filter(function (pk) { return pk.deco; })).forEach(function (pk) {
      var p = pieceById(pk.piece);
      if (!p || (pk.cx != null && pk.cy != null)) return;
      var pos = autoPlace(cellsOf(p)); pk.cx = pos.cx; pk.cy = pos.cy; changed = true;
    });
    if (changed) persist();
  }
  function bboxCells(ignore) {
    var rs = rectsOf(ignore), b = null;
    rs.forEach(function (r) {
      if (!b) b = { u0: r.cx, v0: r.cy, u1: r.cx + r.n, v1: r.cy + r.n };
      else { b.u0 = Math.min(b.u0, r.cx); b.v0 = Math.min(b.v0, r.cy); b.u1 = Math.max(b.u1, r.cx + r.n); b.v1 = Math.max(b.v1, r.cy + r.n); }
    });
    return b;
  }
  function itemFor(p, pk, cx, cy, style, extra) {
    var n = cellsOf(p), c = cellXY(cx + n / 2, cy + n / 2), it = { p: p, pk: pk, style: style, x: c.x, y: c.y, a: 1, depth: cx + cy + n, cx: cx, cy: cy, n: n };
    var k; if (extra) for (k in extra) it[k] = extra[k];
    return it;
  }
  /* Everything to draw, in scene px. */
  function sceneItems() {
    var items = [], t = themeDef(save.theme), dom = dominantStyle(), drag = cur && cur.drag;
    ensurePositions();
    save.picks.forEach(function (pk) {
      var p = pieceById(pk.piece);
      if (!p) return;
      if (drag && drag.pk === pk) {
        items.push(itemFor(p, pk, drag.cx, drag.cy, pk.style || dom, { a: drag.ok ? 0.85 : 0.45, bad: !drag.ok, ghost: true }));
        return;
      }
      items.push(itemFor(p, pk, pk.cx, pk.cy, pk.style || dom, { ghost: cur && cur.placedKey === pk }));
    });
    if (t && t.ring && wallsUp()) ringItems(t.ring, dom).forEach(function (it) { items.push(it); });
    return items;
  }
  /* The wall/fence ring hugs the estate one cell out; segments are 2 cells long so they join. */
  function ringItems(ring, style) {
    var seg = pieceById(ring.seg), corner = ring.corner ? pieceById(ring.corner) : null, gate = ring.gate ? pieceById(ring.gate) : null;
    var b = bboxCells(), items = [], len, u0, v0, u1, v1, i, c, nseg, gateAt;
    if (!seg || !b) return items;
    len = Math.max(1, cellsOf(seg));
    u0 = b.u0 - 1; v0 = b.v0 - 1; u1 = b.u1 + 1; v1 = b.v1 + 1;   /* outer corners */
    var span = Math.max(u1 - u0, v1 - v0); u1 = u0 + span; v1 = v0 + span;   /* square ring */
    nseg = Math.ceil(span / len);
    gateAt = Math.floor(nseg / 2);
    function push(p, cx, cy, flip, key, front) {
      c = cellXY(cx, cy);
      items.push({ p: p, style: style, x: c.x, y: c.y, a: front ? 0.94 : 1, depth: cx + cy, flip: flip, key: key, ring: true });
    }
    for (i = 0; i < nseg; i++) {
      var f = Math.min(u0 + i * len + len / 2, u1 - len / 2), g = Math.min(v0 + i * len + len / 2, v1 - len / 2);
      push(seg, f, v0 + 0.5, true, "wb" + i, false);                         /* back-left edge (along u) */
      push(seg, u0 + 0.5, g, false, "wl" + i, false);                        /* back-right edge (along v) */
      push(seg, f, v1 + 0.5, true, "wf" + i, true);                          /* front-left edge (along u) */
      if (i === gateAt && gate) push(gate, u1 + 0.5, g, false, "gate", true);
      else if (i !== gateAt || gate) push(seg, u1 + 0.5, g, false, "wr" + i, true);   /* front-right edge, gap when no gate piece */
    }
    if (corner) [[u0 + 0.5, v0 + 0.5], [u1 + 0.5, v0 + 0.5], [u1 + 0.5, v1 + 0.5], [u0 + 0.5, v1 + 0.5]].forEach(function (q, ci) { push(corner, q[0], q[1], false, "c" + ci, ci >= 2); });
    return items;
  }
  function sceneScale1() { var t = themeDef(save.theme); return (t && t.drawScale) || (data && data.drawScale) || 1; }
  function unitScale(p) { var t = themeDef(save.theme), tu = (t && t.unitPx) || p.unitPx || 1, pu = p.unitPx || tu; return pu ? tu / pu : 1; }
  /* Fit: bounding box of every sprite (scene px), padded when the student may drag, → scale + offset. */
  function fitScene(items, W, H) {
    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity, base = sceneScale1(), sc, ox, oy, pad;
    items.forEach(function (it) {
      var us = unitScale(it.p), w = (it.p.w || 60) * base * us, h = (it.p.h || 60) * base * us, ax = it.p.ax != null ? it.p.ax : 0.5, ay = it.p.ay != null ? it.p.ay : 1;
      var l = it.x * base - w * ax, tp = it.y * base - h * ay;
      minX = Math.min(minX, l); maxX = Math.max(maxX, l + w); minY = Math.min(minY, tp); maxY = Math.max(maxY, tp + h);
    });
    if (!items.length) { minX = -100; maxX = 100; minY = -60; maxY = 40; }
    pad = (cur && (step === "place" || cur.arrange)) ? cellPx() * base * 2.5 : cellPx() * base * 0.5;
    minX -= pad; maxX += pad; minY -= pad * 0.5; maxY += pad * 0.5;
    var bw = Math.max(1, maxX - minX), bh = Math.max(1, maxY - minY);
    var maxS = (W / ((data && data.sceneW) || 1120)) * 1.0;
    sc = Math.min(maxS, (W * 0.94) / bw, (H * 0.9) / bh);
    ox = W / 2 - ((minX + maxX) / 2) * sc; oy = H * 0.52 - ((minY + maxY) / 2) * sc;
    return { s: sc * base, ox: ox, oy: oy, base: base };
  }
  function drawPiece(ctx, it, fit) {
    var p = it.p, src = imgFor(p, it.style), c = getImg(src), s = fit.s * unitScale(p), x = fit.ox + it.x * fit.s / fit.base, y = fit.oy + it.y * fit.s / fit.base;
    var w = (p.w || 60) * s / fit.base, h = (p.h || 60) * s / fit.base, ax = p.ax != null ? p.ax : 0.5, ay = p.ay != null ? p.ay : 1, iw, ih, dw, dh;
    ctx.save(); ctx.globalAlpha = it.a;
    if (it.n && (it.ghost || (cur && cur.arrange))) {                       /* footprint diamond under a movable piece */
      var C = cellPx() * fit.s / fit.base, q = [cellXY(it.cx, it.cy), cellXY(it.cx + it.n, it.cy), cellXY(it.cx + it.n, it.cy + it.n), cellXY(it.cx, it.cy + it.n)];
      ctx.beginPath(); q.forEach(function (pt, i) { var px = fit.ox + pt.x * fit.s / fit.base, py = fit.oy + pt.y * fit.s / fit.base; if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); });
      ctx.closePath(); ctx.fillStyle = it.bad ? "rgba(255,90,90,.35)" : it.ghost ? "rgba(245,200,66,.35)" : "rgba(245,200,66,.12)"; ctx.fill();
      ctx.lineWidth = Math.max(1, C * 0.04); ctx.strokeStyle = it.bad ? "#ff6b6b" : "rgba(245,200,66,.85)"; ctx.stroke();
    }
    if (c.ok) {
      iw = c.img.naturalWidth || p.w || 1; ih = c.img.naturalHeight || p.h || 1; dw = iw * s / fit.base; dh = ih * s / fit.base;
      if (!it.flip) { ctx.fillStyle = "rgba(0,0,0,.16)"; ellipse(ctx, x, y + 2, dw * 0.4, dw * 0.1); }
      if (it.flip) { ctx.translate(x, y); ctx.scale(-1, 1); ctx.drawImage(c.img, -dw * (1 - ax), -dh * ay, dw, dh); }
      else ctx.drawImage(c.img, x - dw * ax, y - dh * ay, dw, dh);
    } else if (c.ok === false || !it.flip) {
      ctx.fillStyle = "rgba(0,0,0,.2)"; ellipse(ctx, x, y + 2, w * 0.45, w * 0.11);
      ctx.fillStyle = c.ok === null ? "rgba(255,255,255,.3)" : "rgba(58,65,80,.9)";
      ctx.fillRect(x - w / 2, y - h, w, h);
      ctx.strokeStyle = "#f5c842"; ctx.lineWidth = 1.5; ctx.strokeRect(x - w / 2, y - h, w, h);
      ctx.fillStyle = "#e8e6df"; ctx.font = "700 " + Math.max(9, Math.round(w * 0.14)) + "px 'Trebuchet MS', sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(p.name || p.id, x, y - h / 2, w - 4);
    }
    ctx.restore();
  }
  var lastFit = null;
  function redraw() {
    if (!ui || !mode) return;
    var cv = ui.canvas, ctx = cv.getContext("2d"), W = cv._w || 1, H = cv._h || 1, items, fit;
    ctx.setTransform(cv._dpr || 1, 0, 0, cv._dpr || 1, 0, 0);
    ctx.clearRect(0, 0, W, H);
    paintBg(ctx, W, H, save.theme || "village");
    if (!save.theme) { banner(ctx, W, H, loadState === "ok" ? "Win Night 5 to start building" : "Build data not available"); lastFit = null; return; }
    items = sceneItems();
    fit = lastFit = fitScene(items, W, H);
    items.sort(function (a, b) { return (a.depth - b.depth) || (a.y - b.y) || (a.x - b.x); }).forEach(function (it) { drawPiece(ctx, it, fit); });
  }

  /* ── dragging pieces ─────────────────────────────────────────────────────── */
  function canvasScenePt(e) {
    var r = ui.canvas.getBoundingClientRect(), fit = lastFit;
    if (!fit) return null;
    var x = (e.clientX - r.left) * (ui.canvas._w / (r.width || 1)), y = (e.clientY - r.top) * (ui.canvas._h / (r.height || 1));
    return { x: (x - fit.ox) * fit.base / fit.s, y: (y - fit.oy) * fit.base / fit.s, sx: x, sy: y, fit: fit };
  }
  function hitPick(pt) {
    /* The footprint under the cursor wins; only if no footprint is hit do we accept a sprite's image box (tall towers). */
    var cell = pxToCell(pt.x, pt.y), cu = Math.floor(cell.u), cvv = Math.floor(cell.v), fit = pt.fit;
    var bestFoot = null, bfd = -Infinity, bestBox = null, bbd = -Infinity;
    rectsOf().forEach(function (r) {
      var depth = r.cx + r.cy + r.n, p = pieceById(r.pk.piece);
      if (cu >= r.cx && cu < r.cx + r.n && cvv >= r.cy && cvv < r.cy + r.n) { if (depth > bfd) { bfd = depth; bestFoot = r.pk; } return; }
      if (!p) return;
      var it = itemFor(p, r.pk, r.cx, r.cy, ""), us = unitScale(p), sc = fit.s * us / fit.base, w = (p.w || 60) * sc, h = (p.h || 60) * sc;
      var x = fit.ox + it.x * fit.s / fit.base, y = fit.oy + it.y * fit.s / fit.base, ax = p.ax != null ? p.ax : 0.5, ay = p.ay != null ? p.ay : 1;
      if (pt.sx >= x - w * ax && pt.sx <= x - w * ax + w && pt.sy >= y - h * ay && pt.sy <= y - h * ay + h && depth > bbd) { bbd = depth; bestBox = r.pk; }
    });
    return bestFoot || bestBox;
  }
  function draggable(pk) { return !!pk && ((step === "place" && cur && cur.placedKey === pk) || (cur && cur.arrange)); }
  function onPointerDown(e) {
    if (!cur || !lastFit || !(step === "place" || cur.arrange)) return;
    var pt = canvasScenePt(e); if (!pt) return;
    var pk = hitPick(pt);
    if (!draggable(pk)) { if (step === "place" && cur.placedKey && pk !== cur.placedKey) ui.note.textContent = "Drag the glowing piece."; return; }
    var cell = pxToCell(pt.x, pt.y);
    cur.drag = { pk: pk, id: e.pointerId, du: cell.u - pk.cx, dv: cell.v - pk.cy, cx: pk.cx, cy: pk.cy, ok: true };
    try { ui.canvas.setPointerCapture(e.pointerId); } catch (err) {}
    e.preventDefault();
    redraw();
  }
  function onPointerMove(e) {
    if (!cur || !cur.drag || cur.drag.id !== e.pointerId) return;
    var pt = canvasScenePt(e); if (!pt) return;
    var cell = pxToCell(pt.x, pt.y), d = cur.drag, p = pieceById(d.pk.piece), n = cellsOf(p);
    var cx = Math.round(cell.u - d.du), cy = Math.round(cell.v - d.dv);
    if (cx === d.cx && cy === d.cy) return;
    d.cx = cx; d.cy = cy; d.ok = spotFree(cx, cy, n, d.pk);
    e.preventDefault();
    redraw();
  }
  function onPointerUp(e) {
    if (!cur || !cur.drag || cur.drag.id !== e.pointerId) return;
    var d = cur.drag; cur.drag = null;
    try { ui.canvas.releasePointerCapture(e.pointerId); } catch (err) {}
    if (d.ok && (d.cx !== d.pk.cx || d.cy !== d.pk.cy)) { d.pk.cx = d.cx; d.pk.cy = d.cy; persist(); ui.note.textContent = joinedNote(d.pk); }
    else if (!d.ok) ui.note.textContent = "That spot is taken — the piece went back.";
    redraw();
  }
  function joinedNote(pk) {
    var p = pieceById(pk.piece), rs = rectsOf(pk), i, n = cellsOf(p);
    for (i = 0; i < rs.length; i++) if (touches(pk.cx, pk.cy, n, rs[i])) return (p.name || "Piece") + " joined to the " + (pieceById(rs[i].pk.piece) || {}).name + ".";
    return (p.name || "Piece") + " placed on its own. Drag it against another piece to join them.";
  }

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
    ui.styles = el("div", "build-styles hidden");
    ui.tabs = el("div", "build-tabs hidden");
    ui.shop = el("div", "build-options build-shop hidden");
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
    [head, ui.sub, ui.themes, ui.options, ui.styles, ui.tabs, ui.shop, ui.sceneWrap, ui.note, ui.codeWrap, ui.row].forEach(function (n) { ui.card.appendChild(n); });
    ui.overlay.appendChild(ui.card);
    document.body.appendChild(ui.overlay);

    ui.overlay.addEventListener("pointerdown", function (e) { if (e.target === ui.overlay) e.preventDefault(); });
    ui.canvas.addEventListener("pointerdown", onPointerDown);
    ui.canvas.addEventListener("pointermove", onPointerMove);
    ui.canvas.addEventListener("pointerup", onPointerUp);
    ui.canvas.addEventListener("pointercancel", onPointerUp);
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
  function optionCard(p, style, name, meta) {
    var b = btn("build-opt"), pic = el("div", "pic"), img = new Image();
    img.alt = ""; img.onerror = function () { pic.innerHTML = ""; pic.appendChild(el("span", "ph", name)); };
    img.src = imgFor(p, style); pic.appendChild(img);
    b.appendChild(pic); b.appendChild(el("span", "name", name)); b.appendChild(el("span", "meta", meta || ""));
    return b;
  }
  function fillOptions() {
    ui.options.innerHTML = "";
    var dom = dominantStyle();
    cur.offer.forEach(function (p) {
      var b = optionCard(p, dom, p.name || p.id, p.desc || "");
      b.addEventListener("click", function () {
        if (step !== "pick" || !cur || !ui.primary) return;
        cur.piece = p; selectIn(ui.options, b);
        ui.primary.disabled = false; ui.primary.textContent = "Choose the " + (p.name || p.id);
      });
      ui.options.appendChild(b);
    });
  }
  function fillStyles() {
    ui.styles.innerHTML = "";
    var dom = dominantStyle(), partner = partnerStyle(dom), first = nextLot() === 1;
    stylesOf().forEach(function (st) {
      var meta = st.desc || "", tag = "";
      if (!first && st.id === dom) tag = "Same as most of your " + themeName(save.theme).toLowerCase();
      else if (!first && st.id === partner) tag = "Matches your " + styleName(dom);
      var b = optionCard(cur.piece, st.id, st.name, meta + (tag ? " · " + tag : ""));
      if (tag) b.appendChild(el("span", "match", tag));
      b.addEventListener("click", function () {
        if (step !== "style" || !cur || !ui.primary) return;
        cur.stylePick = st.id; selectIn(ui.styles, b);
        ui.primary.disabled = false; ui.primary.textContent = "Build it in " + st.name;
        redraw();
      });
      ui.styles.appendChild(b);
      if (st.id === (cur.stylePick || dom)) { cur.stylePick = st.id; selectIn(ui.styles, b); }
    });
  }
  function styleSummary() {
    var count = {}, parts = [];
    save.picks.forEach(function (p) { count[p.style] = (count[p.style] || 0) + 1; });
    stylesOf().forEach(function (s) { if (count[s.id]) parts.push(count[s.id] + " " + s.name); });
    return parts.join(" · ");
  }
  function fillGallery() {
    var n = Math.min(save.picks.length, TOTAL), next = nextRewardNight(), lvl = wallLevel();
    ui.kicker.textContent = "Reward gallery"; ui.badge.textContent = n + " / " + TOTAL;
    ui.title.textContent = save.theme ? "My " + themeName(save.theme) : "My build";
    ui.sub.textContent = loadState !== "ok" ? "Build data could not be loaded on this page." :
      !save.theme ? "Win Night 5 to choose a Town or a Castle. You add a new piece every 5 nights." :
      n + " of " + TOTAL + " pieces" + (styleSummary() ? " (" + styleSummary() + ")" : "") + " · " +
      (wallsUp() ? (save.theme === "castle" ? "walls up" : "fence up") : (save.theme === "castle" ? "walls" : "fence") + " at piece " + lvl) + " · " +
      (next ? "next reward after night " + next : "your build is complete!");
    ui.codeOut.value = exportCode(); ui.codeIn.value = ""; ui.codeMsg.textContent = ""; ui.loadBtn.textContent = "Load";
    ui.badge.textContent = n + " / " + TOTAL + " · " + coinLabel();
    var buttons = [{ label: "Close", primary: true, onTap: function () { var cb = cur && cur.onClose; closeOverlay(); if (cb) cb(); } }];
    if (save.theme && loadState === "ok") {
      buttons.unshift({ label: "Shop (" + coinLabel() + ")", onTap: function () {
        cur.shop = true; cur.night = cur.night || 1; cur.tab = "build"; mode = "shop"; showStep("shop");
      } });
      if (save.picks.length) buttons.unshift({ label: cur.arrange ? "Done arranging" : "Arrange pieces", onTap: function () {
        cur.arrange = !cur.arrange; cur.drag = null; fillGallery();
      } });
    }
    if (cur.arrange) { ui.sub.textContent = "Drag any piece to a free spot. Snap it against another piece to join them. Walls and fences move by themselves."; show(ui.note, true); ui.note.textContent = ui.note.textContent || "Tap and drag a piece."; }
    else show(ui.note, false);
    setButtons(buttons);
    layoutCanvas(); redraw();
  }

  /* ── steps ───────────────────────────────────────────────────────────────── */
  function showStep(s) {
    step = s;
    var name = cur && cur.piece ? (cur.piece.name || cur.piece.id) : "", lot, tn;
    show(ui.themes, s === "theme"); show(ui.options, s === "pick"); show(ui.styles, s === "style");
    show(ui.tabs, s === "shop"); show(ui.shop, s === "shop");
    show(ui.sceneWrap, s === "style" || s === "place" || s === "done" || s === "gallery" || s === "shop");
    show(ui.note, s === "place" || s === "done" || s === "shop"); show(ui.codeWrap, s === "gallery");
    if (cur) { cur.drag = null; if (s !== "place" && s !== "done") cur.placedKey = null; }
    ui.note.textContent = "";
    if (s === "gallery") { fillGallery(); return; }
    if (s === "shop") { fillShop(); return; }
    tn = themeName(save.theme || (cur && cur.themePick) || "village");
    ui.badge.textContent = cur.shop ? coinLabel() : "REWARD";
    ui.kicker.textContent = cur.shop ? "Night " + cur.night + " · shop" : "Night " + cur.night + " reward · piece " + cur.k + " of " + TOTAL;
    if (s === "theme") {
      ui.kicker.textContent = "Night " + cur.night + " reward · your first building";
      ui.title.textContent = "Build a Town or a Castle?";
      ui.sub.textContent = "You add a new piece every 5 nights, all the way to night 100. This choice is permanent.";
      setButtons([{ label: "Tap one to choose", primary: true, disabled: true, onTap: function () {
        if (!cur.themePick) return; save.theme = cur.themePick; persist(); beginPick();
      } }]);
      fillThemes();
    } else if (s === "pick") {
      lot = lotFor(cur.k);
      ui.title.textContent = cur.k === 1 ? "Choose your first building" : "Add a piece to your " + tn;
      ui.sub.textContent = cur.k === 1 ? "Every " + tn.toLowerCase() + " starts with a home. You pick its style next, and every new piece can match it or mix it up."
        : (KIND_HINT[lot.kind] || "") + " Tap one of the three, then pick its style.";
      setButtons([{ label: "Tap a piece first", primary: true, disabled: true, onTap: beginStyle }]);
      fillOptions();
    } else if (s === "style") {
      ui.title.textContent = "Which style for the " + name + "?";
      ui.sub.textContent = nextLot() === 1 ? "Pieces in the same style match; the game will also suggest a style that goes with yours."
        : "Keep your look, or mix in a second style that matches." + (cur.shop ? " Costs " + priceOf(cur.piece) + " coins." : "");
      setButtons([{ label: "Back", onTap: function () { showStep(cur.shop ? "shop" : "pick"); } },
        { label: cur.shop ? "Buy and build it" : "Build it", primary: true, disabled: !cur.stylePick, onTap: place }]);
      fillStyles(); layoutCanvas(); redraw();
    } else if (s === "place") {
      ui.title.textContent = "Where does the " + name + " go?";
      ui.sub.textContent = "It has joined your " + tn.toLowerCase() + ". Drag it (finger or mouse) to any free spot — snap it against another piece to join them — then tap Keep it here.";
      ui.note.textContent = cur.placedKey ? joinedNote(cur.placedKey) : "";
      setButtons([{ label: "Keep it here", primary: true, onTap: function () { showStep("done"); } }]);
      layoutCanvas(); redraw();
    } else if (s === "done") {
      var nb = buildingPicks().length;
      ui.title.textContent = name + " built in " + styleName(cur.stylePick) + "!";
      ui.sub.textContent = cur.shop ? "Bought for " + priceOf(cur.piece) + " coins. " + coinLabel() + " left."
        : "Piece " + cur.k + " of " + TOTAL + " is in place." + (cur.k < TOTAL ? " Next reward after night " + (cur.night + EVERY) + "." : " Your build is complete!");
      ui.note.textContent = nb === wallLevel() && cur.lot === nb && !cur.shop ? (save.theme === "castle" ? "The castle walls went up around your estate!" : "A fence now rings your town!")
        : nb === wallLevel() - 1 ? "One more building and the " + (save.theme === "castle" ? "walls go up." : "fence goes up.")
        : "Added to your " + tn + "!";
      setButtons(cur.shop ? [{ label: "Back to shop", primary: true, onTap: function () { cur.piece = null; cur.stylePick = null; showStep("shop"); } }]
        : [{ label: "Continue", primary: true, onTap: finish }]);
      layoutCanvas(); redraw();
    }
    if (ui.primary && !ui.primary.disabled) { try { ui.primary.focus(); } catch (e) {} }
  }
  function beginPick() {
    cur.lot = nextLot();
    cur.offer = offerFor(cur.night, cur.lot);
    if (!cur.offer.length) { console.warn("[SolBuild] no pieces for theme " + save.theme); finish(); return; }
    showStep("pick");
  }
  function beginStyle() {
    if (!cur || !cur.piece) return;
    if (!stylesOf().length) { cur.stylePick = ""; place(); return; }
    if (!cur.stylePick) cur.stylePick = dominantStyle();
    showStep("style");
  }
  function place() {
    if (!cur || !cur.piece) return;
    if (cur.shop) {
      var cost = priceOf(cur.piece);
      if (save.coins < cost) { ui.note.textContent = "Not enough coins."; return; }
      save.coins -= cost;
    } else if (pickFor(cur.night)) return;
    cur.lot = nextLot();
    var pos = autoPlace(cellsOf(cur.piece));
    var pk = { night: cur.night, piece: cur.piece.id, style: cur.stylePick || defaultStyle(), lot: cur.lot, src: cur.shop ? "shop" : "reward", deco: false, ord: save.picks.length, cx: pos.cx, cy: pos.cy };
    save.picks.push(pk); cur.placedKey = pk;
    persist();
    showStep("place");
  }
  function coinLabel() { return (save.coins || 0) + " coin" + (save.coins === 1 ? "" : "s"); }

  /* ── the shop ────────────────────────────────────────────────────────────── */
  function shopOffers() {
    var lot = nextLot(), band = Math.max(1, Math.min(4, Math.ceil((cur.night || 1) / 25)));
    var builds = offerFor(cur.night, lot, Math.max(band, bandFor(Math.min(lot, TOTAL))));
    var decos = shuffle(piecesOf(save.theme, "deco").slice(), rng(cur.night * 13 + save.salt)).slice(0, 6);
    return { builds: builds, decos: decos, packs: packsList() };
  }
  function packPrice(pk, off) {
    var total = 0, i;
    if (pk.kind === "deco") for (i = 0; i < pk.count; i++) total += priceOf(off.decos[i % off.decos.length]);
    else { for (i = 0; i < pk.count; i++) total += priceOf(off.builds[i % off.builds.length]); for (i = 0; i < (pk.decos || 0); i++) total += priceOf(off.decos[i % off.decos.length]); }
    return Math.max(5, Math.round(total * (1 - (pk.discount || 0)) / 5) * 5);
  }
  function packContents(pk, off) {
    var names = [], i;
    if (pk.kind === "deco") for (i = 0; i < pk.count; i++) names.push(off.decos[i % off.decos.length].name);
    else { for (i = 0; i < pk.count; i++) names.push(off.builds[i % off.builds.length].name); for (i = 0; i < (pk.decos || 0); i++) names.push(off.decos[i % off.decos.length].name); }
    return names.join(" + ");
  }
  function buyDeco(p) {
    var cost = priceOf(p);
    if (save.coins < cost) { ui.note.textContent = "Not enough coins for the " + p.name + "."; return false; }
    save.coins -= cost;
    var pos = autoPlace(cellsOf(p));
    save.picks.push({ night: cur.night, piece: p.id, style: "", lot: nextDecoLot(), src: "shop", deco: true, ord: save.picks.length, cx: pos.cx, cy: pos.cy });
    persist(); return true;
  }
  function buyPack(pk, off) {
    var cost = packPrice(pk, off), i, dom = dominantStyle();
    if (save.coins < cost) { ui.note.textContent = "Not enough coins for the " + pk.name + "."; return; }
    save.coins -= cost;
    if (pk.kind !== "deco") for (i = 0; i < pk.count; i++) {
      var b = off.builds[i % off.builds.length], bp = autoPlace(cellsOf(b));
      save.picks.push({ night: cur.night, piece: b.id, style: dom, lot: nextLot(), src: "shop", deco: false, ord: save.picks.length, cx: bp.cx, cy: bp.cy });
    }
    for (i = 0; i < (pk.kind === "deco" ? pk.count : (pk.decos || 0)); i++) {
      var d = off.decos[i % off.decos.length], dp = autoPlace(cellsOf(d));
      save.picks.push({ night: cur.night, piece: d.id, style: "", lot: nextDecoLot(), src: "shop", deco: true, ord: save.picks.length, cx: dp.cx, cy: dp.cy });
    }
    persist();
    ui.note.textContent = pk.name + " bought: " + packContents(pk, off) + ". " + coinLabel() + " left.";
    fillShop(true);
  }
  function fillShop(keepNote) {
    var off = shopOffers(), tab = cur.tab || "build", tn = themeName(save.theme);
    ui.badge.textContent = coinLabel();
    ui.kicker.textContent = "Night " + cur.night + " · shop";
    ui.title.textContent = "Spend coins on your " + tn;
    ui.sub.textContent = "Coins come from correct answers (" + economy().answer + " each), a perfect night (+" + economy().perfectNight + ") and bonus pickups. Free reward pieces still come every 5 nights.";
    if (!keepNote) ui.note.textContent = "";
    ui.tabs.innerHTML = "";
    SHOP_TABS.forEach(function (t) {
      var b = btn("build-tab" + (t[0] === tab ? " selected" : ""), t[1]);
      b.addEventListener("click", function () { cur.tab = t[0]; fillShop(); });
      ui.tabs.appendChild(b);
    });
    ui.shop.innerHTML = "";
    var dom = dominantStyle();
    function card(p, style, name, meta, price, onBuy) {
      var b = optionCard(p, style, name, meta), tag = el("span", "price", price + " coins");
      if (save.coins < price) { tag.classList.add("short"); }
      b.appendChild(tag);
      b.addEventListener("click", function () { if (step === "shop") onBuy(); });
      ui.shop.appendChild(b);
    }
    if (tab === "build") {
      var lot = lotFor(nextLot());
      ui.note.textContent = ui.note.textContent || (KIND_HINT[lot.kind] || "") + " Tap a building to buy it and choose its style.";
      off.builds.forEach(function (p) {
        card(p, dom, p.name, p.desc, priceOf(p), function () {
          if (save.coins < priceOf(p)) { ui.note.textContent = "Not enough coins for the " + p.name + " (" + priceOf(p) + ")."; return; }
          cur.piece = p; cur.stylePick = dom; showStep("style");
        });
      });
    } else if (tab === "deco") {
      ui.note.textContent = ui.note.textContent || "Decorations go in the yard between your buildings.";
      off.decos.forEach(function (p) {
        card(p, "", p.name, p.desc, priceOf(p), function () { if (buyDeco(p)) { ui.note.textContent = p.name + " added. " + coinLabel() + " left."; fillShop(true); } });
      });
    } else {
      ui.note.textContent = ui.note.textContent || "Packs bundle pieces at a discount. Buildings in a pack use your main style.";
      off.packs.forEach(function (pk) {
        var first = pk.kind === "deco" ? off.decos[0] : off.builds[0];
        if (!first) return;
        card(first, pk.kind === "deco" ? "" : dom, pk.name, pk.desc + " Today: " + packContents(pk, off) + ".", packPrice(pk, off), function () { buyPack(pk, off); });
      });
    }
    setButtons([{ label: "Done", primary: true, onTap: function () { var cb = cur && cur.onClose; closeOverlay(); if (cb) cb(); } }]);
    layoutCanvas(); redraw();
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
    if (mode === "gallery" || mode === "shop") {
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
    if (save.picks.length && !cur.confirmLoad) {
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

  function refreshButton() {
    var b = document.getElementById("btn-build") || document.getElementById("btn-town");
    if (!b) return;
    b.textContent = state().label;
    if (!b._solBuild && b.id === "btn-build") { b._solBuild = true; b.addEventListener("click", function (e) { e.preventDefault(); showGallery(); }); }
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
      cur = { night: night, k: night / EVERY, lot: 1, band: bandFor(night / EVERY), onDone: onDone || null,
        offer: null, piece: null, stylePick: null, themePick: null, shop: false };
      openOverlay("reward");
      if (save.theme && themeDef(save.theme)) beginPick(); else showStep("theme");
    });
  }
  function showGallery(onClose) {
    init();
    whenReady(function () {
      if (mode === "reward") return;
      buildDom();
      cur = { onClose: onClose || null, confirmLoad: false };
      openOverlay("gallery");
      showStep("gallery");
    });
  }
  function showShop(night, onClose) {
    night = parseInt(night, 10) || 1;
    init();
    whenReady(function () {
      if (mode === "reward") return;
      if (loadState !== "ok" || !save.theme || !themeDef(save.theme)) { if (onClose) onClose(); return; }
      buildDom();
      cur = { onClose: onClose || null, night: night, shop: true, tab: "build", piece: null, stylePick: null };
      openOverlay("shop");
      showStep("shop");
    });
  }
  function addCoins(n, why) {
    if (!save) save = loadSave();
    n = parseInt(n, 10) || 0;
    save.coins = Math.max(0, (save.coins || 0) + n);
    persist();
    if (mode && ui) ui.badge.textContent = mode === "reward" ? ui.badge.textContent : coinLabel();
    return save.coins;
  }
  function coins() { if (!save) save = loadSave(); return save.coins || 0; }
  function state() {
    if (!save) save = loadSave();
    var nm = save.theme ? themeName(save.theme) : null, nb = save.picks.filter(function (p) { return !p.deco; }).length;
    return { theme: save.theme, themeName: nm, count: Math.min(save.picks.filter(function (p) { return p.src !== "shop"; }).length, TOTAL), total: TOTAL,
      buildings: nb, decorations: save.picks.length - nb, coins: save.coins || 0, canShop: !!save.theme && loadState === "ok",
      nextNight: nextRewardNight(), label: "My " + (nm || "Town"), loaded: loadState, walls: !!save.theme && nb >= wallLevel(), style: save.theme ? dominantStyle() : null };
  }

  document.addEventListener("keydown", onKey, true);

  window.SolBuild = {
    init: init, rewardDue: rewardDue, showReward: showReward, showGallery: showGallery, showShop: showShop,
    addCoins: addCoins, coins: coins, economy: economy,
    close: closeOverlay, isOpen: function () { return !!mode; },
    exportCode: exportCode, importCode: importCode, state: state,
    LS_KEY: LS_KEY, version: 3,
    _hitAt: function (clientX, clientY) { var pt = canvasScenePt({ clientX: clientX, clientY: clientY }); var pk = pt && hitPick(pt); return { pt: pt && { x: pt.x, y: pt.y, sx: pt.sx, sy: pt.sy }, cell: pt && pxToCell(pt.x, pt.y), pick: pk ? pk.piece + "@" + pk.cx + "," + pk.cy : null, step: step, arrange: !!(cur && cur.arrange), draggable: draggable(pk) };
    },
    /* test hook: canvas-space centre of the i-th pick (used by tools/smoke.js to drag pieces) */
    _pickScreen: function (i) {
      var pk = save && save.picks[i], p = pk && pieceById(pk.piece), fit = lastFit;
      if (!pk || !p || !fit || pk.cx == null) return null;
      var it = itemFor(p, pk, pk.cx, pk.cy, ""), r = ui.canvas.getBoundingClientRect();
      return { x: r.left + (fit.ox + it.x * fit.s / fit.base) * (r.width / ui.canvas._w), y: r.top + (fit.oy + it.y * fit.s / fit.base) * (r.height / ui.canvas._h) - 4, cx: pk.cx, cy: pk.cy };
    }
  };
})();
