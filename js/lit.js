/* SOL Labyrinth v5.21 — the Lit and Film game (grades 11-12 elective): its genres, its movies and their games.
 *
 * The Lit and Film build (window.SOL_STATE === "LIT", tools/build-games.js LIT) has no grades and no skills.
 * The game mode screen lists the GENRES; picking one opens the movie screen (the skill screen), which lists the
 * genre's movies, the genre's basics and All. Every movie has its own game (a mode in js/mode-<id>.js that
 * registers itself with SolModes.extend) and its own questions (packs with family "LIT", its genre and its
 * episode). A movie card plays its game on every level and asks only that movie's questions; the basics card
 * and All play the genre's games in turn (the mix mode "lit-<genre>") with the basics' or every question of
 * the genre. Each movie and each mix keeps its own level, as every game mode does.
 *
 * Loaded by the dev page and the Lit and Film build only, before game.js; tools/validate-content.js reads it
 * with require(). Nothing here runs unless SOL_STATE is "LIT".
 */
(function (root) {
  "use strict";

  /* ep: the packs' episode (lowercase) and the movie card's strand (uppercase). mode: its game's SolModes id. */
  var GENRES = [
    { id: "HISTORY", name: "Film History", kind: "Where movies came from", basics: "history",
      meta: "From flip books and Edison's peephole to the Lumières, Méliès, the silent stars, the talkies and Technicolor.",
      basicsCard: { kind: "Film history", name: "From Nickelodeons to Technicolor", meta: "The inventions, the studios, sound and color: how the movies grew up." },
      movies: [
        { ep: "train", mode: "crank", title: "Arrival of a Train", year: 1895, by: "Auguste and Louis Lumière",
          meta: "The first audiences, the Cinematograph and the birth of cinema.", game: "Hand-Crank Camera" },
        { ep: "moon", mode: "moonshot", title: "A Trip to the Moon", year: 1902, by: "Georges Méliès",
          meta: "A magician discovers special effects and makes the first science fiction film.", game: "Shoot the Moon" },
        { ep: "circus", mode: "tightrope", title: "The Circus", year: 1928, by: "Charlie Chaplin",
          meta: "The Little Tramp and the silent era: acting without words, live music and intertitles.", game: "The Tightrope" },
        { ep: "jazz", mode: "sync", title: "The Jazz Singer", year: 1927, by: "Warner Bros.",
          meta: "Vitaphone, the first talkie and everything sound changed.", game: "Keep It in Sync" }
      ] },
    { id: "LANGUAGE", name: "Film Language", kind: "How movies speak", basics: null,
      meta: "Shots, angles, camera moves and transitions: the vocabulary of the camera and the editor.",
      movies: [
        { ep: "language", mode: "director", title: "Lights, Camera, Action", year: null, by: null,
          meta: "Sequence, cut and shot; long shot to close-up; high, low and Dutch angles; pan, tilt and dolly; fades, dissolves and wipes.", game: "Call the Shot" }
      ] },
    { id: "BADGOOD", name: "Bad Film vs. Good Film", kind: "Judging the craft", basics: "badgood",
      meta: "Writing, editing, acting and moviemaking: what goes wrong in the worst movie ever made and right in a good one.",
      basicsCard: { kind: "Four lenses", name: "Writing, Editing, Acting, Moviemaking", meta: "Name the flaw, weigh the evidence, judge the film." },
      movies: [
        { ep: "plan9", mode: "strings", title: "Plan 9 from Outer Space", year: 1957, by: "Ed Wood",
          meta: "Saucers on strings, a teleprompter, day turning to night: the worst movie of all time?", game: "Saucers on Strings" },
        { ep: "ironman", mode: "suit", title: "Iron Man", year: 2008, by: "Jon Favreau",
          meta: "A selfish arms dealer becomes a hero: setup and payoff, natural acting, effects you believe.", game: "Suit Up" }
      ] },
    { id: "NOIR", name: "Film Noir", kind: "Shadows and fate", basics: "noir",
      meta: "Hardboiled heroes, femmes fatales, venetian-blind shadows and bleak endings, 1941-1958.",
      basicsCard: { kind: "The noir elements", name: "What Makes a Noir", meta: "Its roots, its rules, its lighting and its characters, and the Hays Code." },
      movies: [
        { ep: "detour", mode: "highway", title: "Detour", year: 1945, by: "Edgar G. Ulmer",
          meta: "A hitchhiking pianist, a desert highway and a fate he can't outrun.", game: "Night Highway" },
        { ep: "scarlet", mode: "gallery", title: "Scarlet Street", year: 1945, by: "Fritz Lang",
          meta: "A meek painter, a femme fatale and a con man. Symbolism in film.", game: "The Gallery" },
        { ep: "indemnity", mode: "lastcar", title: "Double Indemnity", year: 1944, by: "Billy Wilder",
          meta: "An insurance man, a perfect murder and a confession: the noirest noir.", game: "The Last Car" },
        { ep: "casablanca", mode: "roulette", title: "Casablanca", year: 1942, by: "Michael Curtiz",
          meta: "Rick's Café, letters of transit and a sacrifice. Noir or no?", game: "Rick's Roulette" }
      ] },
    { id: "WESTERN", name: "Westerns", kind: "Cowboys and the frontier", basics: "western",
      meta: "Lawmen and outlaws, the town and the wilderness, the code of honor and the showdown.",
      basicsCard: { kind: "Elements of the Western", name: "The Frontier Code", meta: "The setting, the hero, the showdown and the symbols of the genre." },
      movies: [
        { ep: "highnoon", mode: "noon", title: "High Noon", year: 1952, by: "Fred Zinnemann",
          meta: "A marshal alone as the clock ticks toward noon. With \"The Tin Star\" by John W. Cunningham.", game: "Showdown at Noon" },
        { ep: "truegrit", mode: "charge", title: "True Grit", year: 2010, by: "Joel and Ethan Coen",
          meta: "Mattie Ross, Rooster Cogburn and an unforgiving world. From Charles Portis's novel.", game: "Reins in His Teeth" },
        { ep: "yuma", mode: "yuma", title: "3:10 to Yuma", year: 1957, by: "Delmer Daves",
          meta: "A rancher has to get an outlaw onto the 3:10 train. From Elmore Leonard's story.", game: "Make the 3:10" }
      ] },
    { id: "SCIFI", name: "Science Fiction", kind: "The original trilogy", basics: "scifi",
      meta: "The elements of science fiction and the Hero's Journey, through Star Wars.",
      basicsCard: { kind: "Sci-fi and the Hero's Journey", name: "A Galaxy of Ideas", meta: "What makes science fiction, and Joseph Campbell's monomyth." },
      movies: [
        { ep: "newhope", mode: "trench", title: "A New Hope", year: 1977, by: "George Lucas",
          meta: "A farm boy hears the call to adventure.", game: "Trench Run" },
        { ep: "empire", mode: "towcable", title: "The Empire Strikes Back", year: 1980, by: "Irvin Kershner",
          meta: "Training, trials and a terrible truth.", game: "Tow Cable" },
        { ep: "jedi", mode: "speeder", title: "Return of the Jedi", year: 1983, by: "Richard Marquand",
          meta: "The hero returns and redeems his father.", game: "Forest Chase" }
      ] },
    { id: "HORROR", name: "Horror and Suspense", kind: "Fear and dread", basics: "horror",
      meta: "Horror shocks, suspense makes you wait: what scary movies do and what they teach us.",
      basicsCard: { kind: "Horror and suspense", name: "What Horror Films Teach Us", meta: "Shock versus dread, fear faced safely, and the fears of a society." },
      movies: [
        { ep: "ring", mode: "tape", title: "The Ring", year: 2002, by: "Gore Verbinski",
          meta: "A cursed videotape and seven days. Color symbolism and the remake of Ringu.", game: "Seven Days" }
      ] }
  ];

  function genre(id) { id = String(id || "").toUpperCase(); return GENRES.filter(function (g) { return g.id === id; })[0] || null; }
  function mixId(gid) { return "lit-" + String(gid).toLowerCase(); }
  /* the genre an episode, a movie mode or a mix mode belongs to */
  function genreOf(x) {
    x = String(x || "").toLowerCase();
    for (var i = 0; i < GENRES.length; i++) {
      var g = GENRES[i];
      if (mixId(g.id) === x || g.basics === x || g.id.toLowerCase() === x) return g;
      for (var j = 0; j < g.movies.length; j++) if (g.movies[j].ep === x || g.movies[j].mode === x) return g;
    }
    return null;
  }
  function movieByMode(id) {
    for (var i = 0; i < GENRES.length; i++) for (var j = 0; j < GENRES[i].movies.length; j++) if (GENRES[i].movies[j].mode === id) return GENRES[i].movies[j];
    return null;
  }
  function movieByEp(ep) {
    ep = String(ep || "").toLowerCase();
    for (var i = 0; i < GENRES.length; i++) for (var j = 0; j < GENRES[i].movies.length; j++) if (GENRES[i].movies[j].ep === ep) return GENRES[i].movies[j];
    return null;
  }
  /* the games a mix plays in turn (only those whose mode file is loaded) */
  function mixModes(gid, MODES) {
    var g = genre(gid);
    return g ? g.movies.map(function (m) { return m.mode; }).filter(function (id) { return !MODES || MODES[id]; }) : [];
  }
  /* the strand a card picks: a movie's episode, a genre's basics, or "G:<GENRE>" for all of the genre */
  function strandMatchesPack(strand, pack) {
    strand = String(strand || "").toUpperCase();
    if (strand.indexOf("G:") === 0) return String(pack && pack.genre || "").toUpperCase() === strand.slice(2);
    return String(pack && pack.episode || "").toUpperCase() === strand;
  }
  function isLitStrand(strand) {
    strand = String(strand || "").toUpperCase();
    if (strand.indexOf("G:") === 0) return !!genre(strand.slice(2));
    return !!genreOf(strand.toLowerCase());
  }

  /* The ten realms (ten levels each) become the ten reels of a night at the movies. Only the names change: every Lit
     and Film level is a movie's own game, which draws its own world. */
  var REELS = {
    midgard: ["The Nickelodeon", "a nickel a show", "A storefront theater with a piano by the screen."],
    niflheim: ["The Picture Palace", "the silent era's grand theaters", "Gilded balconies, an organ and a velvet curtain."],
    jotunheim: ["The Soundstage", "quiet on the set", "Lights, cables and a microphone on a boom."],
    muspelheim: ["The Back Lot", "Main Street, the Old West and Paris in one afternoon", "False fronts and painted skies."],
    svartalfheim: ["The Drive-In", "a double feature under the stars", "Cars in rows and a screen against the night."],
    vanaheim: ["The Editing Room", "where the movie is really made", "Reels, splicers and a cutting table."],
    alfheim: ["The Screening Room", "the critics are watching", "Twelve seats and twelve opinions."],
    helheim: ["The Premiere", "the red carpet", "Searchlights, cameras and a crowd outside."],
    asgard: ["The Film Festival", "the world's best films", "A week of screenings and standing ovations."],
    ragnarok: ["Awards Night", "the last reel", "Every genre, every game, and the envelope, please."]
  };
  if (root && root.SOL_STATE === "LIT" && root.SolRealms && root.SolRealms.REALMS) {
    root.SolRealms.REALMS.forEach(function (rm) {
      var r = REELS[rm.id]; if (!r) return;
      rm.name = r[0]; rm.title = r[1]; rm.blurb = r[2];
    });
  }

  var api = { GENRES: GENRES, REELS: REELS, genre: genre, genreOf: genreOf, mixId: mixId, mixModes: mixModes, movieByMode: movieByMode, movieByEp: movieByEp,
    strandMatchesPack: strandMatchesPack, isLitStrand: isLitStrand };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.SolLit = api;
})(typeof window !== "undefined" ? window : null);
