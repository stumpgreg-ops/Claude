/* SOL Lab — question-pack machinery for the Virginia EOC Earth Science SOL build.
   The packs themselves live in js/content2.js onward (one file per unit) and push into
   HEIST_PACKS. This file defines the units (families), the standards map that drives the
   skill screen, the strand filter, the adaptive level estimate and the stamina schedule. */
(function (global) {
  var PACKS = [];

  /* Units. `id` is the pack family; the title screen shows one card per unit plus Full review.
     `stds` lists the standard prefixes a pack in that unit may use (checked by the validator). */
  var FAMILIES = [
    { id: "ALL", label: "Full review", short: "Full review", kind: "All units", meta: "Every unit mixed, leaning toward the standards you miss most. Best in the last weeks before the test.", stds: ["ES.1", "ES.2", "ES.3", "ES.4", "ES.5", "ES.6", "ES.7", "ES.8", "ES.9", "ES.10", "ES.11", "ES.12"] },
    { id: "INV", label: "Scientific Investigation", short: "Investigation", kind: "ES.1", meta: "Variables, controls, data tables, graphs, topographic maps, models and conclusions. The practices every other unit is tested through.", stds: ["ES.1"] },
    { id: "SPACE", label: "Universe & Solar System", short: "Space", kind: "ES.2 · ES.3", meta: "The big bang, stars and galaxies, the planets and smaller bodies, space exploration, seasons, tides and eclipses.", stds: ["ES.2", "ES.3"] },
    { id: "ROCK", label: "Minerals & Rocks", short: "Minerals & Rocks", kind: "ES.4 · ES.5", meta: "Mineral properties and uses, how minerals form, the rock cycle, rock types and weathering.", stds: ["ES.4", "ES.5"] },
    { id: "RES", label: "Resources & Fresh Water", short: "Resources & Water", kind: "ES.6 · ES.8", meta: "Renewable and nonrenewable resources, energy, Virginia's resources, soil, karst, groundwater and watersheds.", stds: ["ES.6", "ES.8"] },
    { id: "TECT", label: "Plate Tectonics", short: "Plate Tectonics", kind: "ES.7", meta: "Earth's layers, convection, plate boundaries, earthquakes, volcanoes, mountain building and the evidence for plate tectonics.", stds: ["ES.7"] },
    { id: "HIST", label: "Earth History", short: "Earth History", kind: "ES.9", meta: "Fossils, superposition and cross-cutting, index fossils, half-life, the geologic time scale and Virginia's rocks and fossils.", stds: ["ES.9"] },
    { id: "OCEAN", label: "Oceans", short: "Oceans", kind: "ES.10", meta: "Seawater, tides, waves, currents, upwelling, the sea floor, sea level and the Chesapeake Bay.", stds: ["ES.10"] },
    { id: "ATMO", label: "Atmosphere, Weather & Climate", short: "Weather & Climate", kind: "ES.11 · ES.12", meta: "The atmosphere's layers and gases, air pollution, energy transfer, fronts and forecasts, severe weather and climate.", stds: ["ES.11", "ES.12"] }
  ];
  /* Which pack families feed each selection. */
  var FAMILY_POOL = {};
  FAMILIES.forEach(function (f) { FAMILY_POOL[f.id] = f.id === "ALL" ? FAMILIES.filter(function (x) { return x.id !== "ALL"; }).map(function (x) { return x.id; }) : [f.id]; });

  /* Standards map (2018 Virginia Science Standards of Learning, Earth Science, ES.1–ES.12 with their key
     ideas). The skill screen shows these as cards; `strand` is the prefix a claim's `sol` code must start with.
     The full wording, and the SKILLS each key idea is split into with their LOTS/HOTS level, are in
     js/standards-es.js (window.SolStandards). */
  var STANDARDS = {
    "ES.1": { name: "Scientific and engineering practices", keys: {
      a: "asking questions and defining problems",
      b: "planning and carrying out investigations",
      c: "interpreting, analyzing, and evaluating data",
      d: "constructing and critiquing conclusions and explanations",
      e: "developing and using models",
      f: "obtaining, evaluating, and communicating information" } },
    "ES.2": { name: "The universe", keys: {
      a: "the big bang theory and the origin of the universe",
      b: "stars, star systems, and galaxies change over long periods of time",
      c: "characteristics of the sun, planets, moons, comets, meteors, asteroids, and dwarf planets are determined by their materials",
      d: "evidence from space exploration has increased our understanding of the universe" } },
    "ES.3": { name: "Earth in the solar system", keys: {
      a: "Earth supports life because of its relative proximity to the sun and other factors",
      b: "the dynamics of the sun-Earth-moon system cause seasons, tides, and eclipses" } },
    "ES.4": { name: "Minerals", keys: {
      a: "analysis of physical and chemical properties supports mineral identification",
      b: "characteristics of minerals determine the uses of minerals",
      c: "rock-forming minerals originate and are formed in specific ways" } },
    "ES.5": { name: "Rocks and the rock cycle", keys: {
      a: "Earth materials are finite and are transformed over time",
      b: "the rock cycle is a model of how rocks form and change",
      c: "rock properties reflect how igneous, sedimentary, and metamorphic rocks formed",
      d: "plate tectonics and surface processes transform Earth materials" } },
    "ES.6": { name: "Resources", keys: {
      a: "global resource use has environmental liabilities and benefits",
      b: "availability, renewal rates, and economic effects are considerations when using resources",
      c: "use of resources in Virginia has environmental and economic impacts",
      d: "energy sources have environmental and economic effects" } },
    "ES.7": { name: "Plate tectonics", keys: {
      a: "convection in Earth's interior drives plate motion; Earth's layers differ",
      b: "features and processes occur within plates and at plate boundaries",
      c: "plate interactions form mountain ranges and ocean basins; evidence for plate tectonics" } },
    "ES.8": { name: "Fresh water", keys: {
      a: "water impacts geologic processes including soil development and karst topography",
      b: "subsurface materials affect groundwater and the water supply",
      c: "weather and human use affect the location, quality, and supply of fresh water",
      d: "stream processes shape Virginia's major watersheds, including the Chesapeake Bay" } },
    "ES.9": { name: "Earth history", keys: {
      a: "traces and remains of ancient life are preserved in sedimentary rocks",
      b: "superposition, cross-cutting relationships, index fossils, and radioactive decay date rocks",
      c: "absolute and relative dating can be used together to determine age",
      d: "rocks and fossils from many geologic periods and epochs are found in Virginia" } },
    "ES.10": { name: "Oceans", keys: {
      a: "properties of ocean water; tides, waves, currents, and upwelling",
      b: "ocean circulation transfers energy and affects weather and climate",
      c: "features of the sea floor reflect geologic processes",
      d: "sea level, ice caps, and ocean chemistry change over time",
      e: "human actions, economics, and public policy impact oceans, the coast, and the Chesapeake Bay" } },
    "ES.11": { name: "The atmosphere", keys: {
      a: "the composition of the atmosphere is critical to most forms of life",
      b: "biologic and geologic interactions change atmospheric composition",
      c: "natural events and human actions may stress atmospheric regulation",
      d: "human actions, including economic and policy decisions, affect the atmosphere" } },
    "ES.12": { name: "Weather and climate", keys: {
      a: "weather involves the reflection, absorption, storage, and redistribution of energy",
      b: "weather patterns can be predicted from changes in current conditions",
      c: "extreme imbalances in energy distribution may lead to severe weather",
      d: "models based on current conditions are used to predict weather",
      e: "natural and human changes in the atmosphere and oceans affect global climate" } }
  };

  /* Skill cards per unit (strand = the sol-code prefix the filter keeps). */
  var SKILLS = {
    INV: [
      { strand: "ES.1.A", kind: "ES.1 a", name: "Questions & hypotheses", meta: "Testable questions, hypotheses, and what an investigation can and cannot answer." },
      { strand: "ES.1.B", kind: "ES.1 b", name: "Design & variables", meta: "Independent, dependent and controlled variables, controls, repeated trials, tools and safety." },
      { strand: "ES.1.C", kind: "ES.1 c", name: "Data & graphs", meta: "Reading tables and graphs, trends, means, rates and outliers." },
      { strand: "ES.1.E", kind: "ES.1 e", name: "Maps & models", meta: "Topographic maps, contour lines, profiles, latitude and longitude, and what a model can't show." },
      { strand: "ES.1.D", kind: "ES.1 d · f", name: "Conclusions & sources", meta: "Claims the evidence supports, sources of error, hypothesis vs theory vs law, reliable sources." }
    ],
    SPACE: [
      { strand: "ES.2.A", kind: "ES.2 a", name: "The big bang", meta: "Red shift, the expanding universe and the cosmic background radiation." },
      { strand: "ES.2.B", kind: "ES.2 b", name: "Stars & galaxies", meta: "Nebulae, the life cycle of stars, the H-R diagram and types of galaxies." },
      { strand: "ES.2.C", kind: "ES.2 c", name: "Solar system bodies", meta: "The sun, terrestrial and gas planets, moons, comets, meteors, asteroids and dwarf planets." },
      { strand: "ES.2.D", kind: "ES.2 d", name: "Space exploration", meta: "Telescopes, probes, satellites and what they have taught us." },
      { strand: "ES.3.A", kind: "ES.3 a", name: "A planet for life", meta: "Distance from the sun, liquid water, the atmosphere and the magnetic field." },
      { strand: "ES.3.B", kind: "ES.3 b", name: "Seasons, tides & eclipses", meta: "Earth's tilt, moon phases, spring and neap tides, solar and lunar eclipses." }
    ],
    ROCK: [
      { strand: "ES.4.A", kind: "ES.4 a", name: "Identifying minerals", meta: "Hardness, streak, luster, cleavage, fracture and special properties." },
      { strand: "ES.4.B", kind: "ES.4 b · c", name: "Mineral uses & origins", meta: "Ores and everyday uses, and how minerals form from magma, water and pressure." },
      { strand: "ES.5.B", kind: "ES.5 a · b", name: "The rock cycle", meta: "Weathering, erosion, deposition, melting, heat and pressure, and Earth's finite materials." },
      { strand: "ES.5.C", kind: "ES.5 c", name: "Rock types", meta: "Igneous, sedimentary and metamorphic rocks: texture, composition and where they form." },
      { strand: "ES.5.D", kind: "ES.5 d", name: "Weathering & tectonics", meta: "Physical and chemical weathering, erosion, and the rocks plate settings make." }
    ],
    RES: [
      { strand: "ES.6.A", kind: "ES.6 a · b", name: "Resource trade-offs", meta: "Renewable and nonrenewable resources, renewal rates, costs and benefits." },
      { strand: "ES.6.C", kind: "ES.6 c", name: "Virginia's resources", meta: "Coal, natural gas, limestone, sand and gravel, titanium, timber and the Bay." },
      { strand: "ES.6.D", kind: "ES.6 d", name: "Energy sources", meta: "Fossil fuels, nuclear, solar, wind, water, geothermal and biomass." },
      { strand: "ES.8.A", kind: "ES.8 a", name: "Soil & karst", meta: "Soil profiles, sinkholes, caverns and springs in Virginia's limestone." },
      { strand: "ES.8.B", kind: "ES.8 b", name: "Groundwater", meta: "Porosity, permeability, aquifers and the water table." },
      { strand: "ES.8.C", kind: "ES.8 c · d", name: "Water quality & watersheds", meta: "Pollution, conservation, stream processes and Virginia's watersheds." }
    ],
    TECT: [
      { strand: "ES.7.A", kind: "ES.7 a", name: "Earth's layers", meta: "Crust, mantle and core, lithosphere and asthenosphere, seismic waves and convection." },
      { strand: "ES.7.B", kind: "ES.7 b", name: "Plate boundaries", meta: "Divergent, convergent and transform boundaries, hot spots, earthquakes and volcanoes." },
      { strand: "ES.7.C", kind: "ES.7 c", name: "Mountains & evidence", meta: "Mountain building, the Appalachians, sea-floor spreading and the evidence for plate tectonics." }
    ],
    HIST: [
      { strand: "ES.9.A", kind: "ES.9 a", name: "Fossils", meta: "How fossils form and what they tell us about past environments." },
      { strand: "ES.9.B", kind: "ES.9 b", name: "Dating rocks", meta: "Superposition, cross-cutting relationships, index fossils and half-life." },
      { strand: "ES.9.C", kind: "ES.9 c", name: "Relative & absolute age", meta: "Using relative and absolute dating together." },
      { strand: "ES.9.D", kind: "ES.9 d", name: "Time scale & Virginia", meta: "Eons, eras, periods and epochs, and Virginia's rocks and fossils." }
    ],
    OCEAN: [
      { strand: "ES.10.A", kind: "ES.10 a", name: "Seawater, tides & waves", meta: "Salinity, temperature, density, tides, waves and upwelling." },
      { strand: "ES.10.B", kind: "ES.10 b", name: "Currents & climate", meta: "Surface and deep currents, the Gulf Stream and how the ocean moves heat." },
      { strand: "ES.10.C", kind: "ES.10 c", name: "The sea floor", meta: "Shelf, slope, abyssal plain, ridges, trenches and seamounts." },
      { strand: "ES.10.D", kind: "ES.10 d", name: "Sea level & ice", meta: "Changes in sea level, polar ice and ocean chemistry." },
      { strand: "ES.10.E", kind: "ES.10 e", name: "People & the Bay", meta: "Runoff, dead zones, fisheries, coasts and the policies that protect them." }
    ],
    ATMO: [
      { strand: "ES.11.A", kind: "ES.11 a · b", name: "The air we breathe", meta: "The atmosphere's gases and layers, and how life and geology changed them." },
      { strand: "ES.11.C", kind: "ES.11 c · d", name: "People & the air", meta: "Air pollution, the ozone layer, the greenhouse effect and the policies that protect the air." },
      { strand: "ES.12.A", kind: "ES.12 a", name: "Energy & wind", meta: "Radiation, conduction, convection, uneven heating and global winds." },
      { strand: "ES.12.B", kind: "ES.12 b · d", name: "Forecasting", meta: "Air masses, fronts, pressure, weather maps and forecast models." },
      { strand: "ES.12.C", kind: "ES.12 c", name: "Severe weather", meta: "Thunderstorms, tornadoes and hurricanes." },
      { strand: "ES.12.E", kind: "ES.12 e", name: "Climate", meta: "What controls climate, and natural and human causes of climate change." }
    ]
  };
  SKILLS.ALL = Object.keys(STANDARDS).map(function (k) {
    return { strand: k, kind: k, name: STANDARDS[k].name, meta: Object.keys(STANDARDS[k].keys).map(function (L) { return L + ") " + STANDARDS[k].keys[L]; }).join("; ") + "." };
  });
  /* Thinking level: every question's skill is LOTS (identify, describe, explain, calculate) or HOTS (analyze,
     compare, infer, predict, evaluate); js/standards-es.js. Full review can practice just one level. */
  SKILLS.ALL.push({ strand: "HOTS", kind: "HOTS", name: "Higher-order only", meta: "Only the questions that ask you to analyze, compare, infer, predict or evaluate, from every unit." });
  SKILLS.ALL.push({ strand: "LOTS", kind: "LOTS", name: "Lower-order only", meta: "Only the questions that ask you to identify, describe, explain or calculate, from every unit." });
  Object.keys(SKILLS).forEach(function (fam) {
    SKILLS[fam].push({ strand: "ALL", kind: "All skills", name: "All", meta: fam === "ALL" ? "Every standard mixed, leaning toward the ones you miss most." : "Everything in this unit mixed, leaning toward the skills you miss most." });
  });
  /* Some skill cards cover two key ideas (ES.1 d·f, ES.4 b·c ...): extra prefixes the card also keeps. */
  var STRAND_ALIASES = { "ES.1.D": ["ES.1.F"], "ES.4.B": ["ES.4.C"], "ES.5.B": ["ES.5.A"], "ES.6.A": ["ES.6.B"],
    "ES.8.C": ["ES.8.D"], "ES.11.A": ["ES.11.B"], "ES.11.C": ["ES.11.D"], "ES.12.B": ["ES.12.D"] };
  /* A question's skill (claim.sub, "ES.4.a.1") and its thinking level, LOTS or HOTS (js/standards-es.js). */
  function skillLevel(claim) {
    var S = global.SolStandards, sub = claim && claim.sub;
    return S && sub && S.SKILL[sub] ? S.SKILL[sub].level : "";
  }

  function wordCount(s) {
    return String(s).replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  }

  function letterIndex(claim, letter) {
    var ch = (claim && claim.choices) || [];
    var L = String(letter).toUpperCase();
    for (var i = 0; i < ch.length; i++) {
      if (String(ch[i].letter).toUpperCase() === L) return i;
    }
    var fallback = "ABCD".indexOf(L);
    return fallback >= 0 ? fallback : 0;
  }

  function correctList(claim) {
    var c = claim && claim.correct;
    if (c == null) return [];
    var raw = Array.isArray(c) ? c.slice() : [c];
    return raw.map(function (x) {
      if (typeof x === "number") return x;
      return letterIndex(claim, x);
    });
  }

  function isMulti(claim) {
    return correctList(claim).length > 1;
  }

  /* A claim's strand is its full key-idea code, upper-cased: "ES.10.a" -> "ES.10.A". */
  function strandOf(claim) {
    if (claim && claim.strand) return String(claim.strand).toUpperCase();
    var sol = String((claim && claim.sol) || "").toUpperCase().replace(/\s+/g, "");
    return /^ES\.\d/.test(sol) ? sol : "ES.1";
  }
  function standardOf(claim) {
    var m = /^(ES\.\d+)/.exec(strandOf(claim));
    return m ? m[1] : "ES.1";
  }
  function prefixMatch(code, prefix) {
    return code === prefix || code.indexOf(prefix + ".") === 0;
  }
  function strandMatch(claim, strand) {
    strand = String(strand || "ALL").toUpperCase();
    if (!strand || strand === "ALL" || strand === "NULL") return true;
    if (strand === "LOTS" || strand === "HOTS") return (claim && (claim.skillLevel || skillLevel(claim))) === strand;
    if (!/^ES\.\d/.test(strand)) return true;
    var code = strandOf(claim);
    if (prefixMatch(code, strand)) return true;
    var extra = STRAND_ALIASES[strand] || [];
    for (var i = 0; i < extra.length; i++) if (prefixMatch(code, extra[i])) return true;
    return false;
  }

  /* Difficulty 1–3 for the adaptive picker: the pack's own `level` tag, or an
     estimate from sentence length and long words when a pack has none. */
  function syllables(word) {
    word = word.toLowerCase().replace(/[^a-z]/g, "");
    if (!word) return 0;
    if (word.length <= 3) return 1;
    var v = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "").match(/[aeiouy]{1,2}/g);
    return v ? v.length : 1;
  }
  function readingGrade(html) {
    var text = String(html).replace(/<[^>]+>/g, " ").replace(/\(\d+\)/g, " ");
    var words = text.split(/\s+/).filter(Boolean), sents = text.split(/[.!?]+\s/).filter(Boolean).length || 1, syl = 0;
    if (!words.length) return 5;
    words.forEach(function (w) { syl += syllables(w); });
    return 0.39 * (words.length / sents) + 11.8 * (syl / words.length) - 15.59;   /* Flesch–Kincaid grade */
  }
  function passageWords(p) {
    if (p._words) return p._words;
    var text = String(p.passage || "").replace(/<[^>]+>/g, " ").replace(/\(\d+\)/g, " ");
    p._words = text.split(/\s+/).filter(Boolean).length;
    return p._words;
  }
  /* Stamina schedule: the stimulus length the picker aims for on a given level. Word counts
     include table cells, so a "tiny" 60-word note with a data table measures 80-100.
     Level 1 targets ~65 words; every 3 levels the target grows by 5 words, reaching ~225
     words by level 99. Tune in STAMINA. */
  var STAMINA = { start: 65, step: 5, every: 3, max: 240 };
  function targetWords(night) {
    night = Math.max(1, parseInt(night, 10) || 1);
    return Math.min(STAMINA.max, STAMINA.start + STAMINA.step * Math.floor((night - 1) / STAMINA.every));
  }
  function packLevel(p) {
    if (p.level === 1 || p.level === 2 || p.level === 3) return p.level;
    var g = readingGrade(p.passage || "");
    return g < 8 ? 1 : g < 10.5 ? 2 : 3;
  }

  function familyDef(id) {
    for (var i = 0; i < FAMILIES.length; i++) if (FAMILIES[i].id === id) return FAMILIES[i];
    return null;
  }

  function buildPack(family, strand) {
    family = family || "ALL";
    strand = String(strand == null ? "ALL" : strand).toUpperCase();
    if (!strand || strand === "NULL") strand = "ALL";
    var pool = FAMILY_POOL[family] || FAMILY_POOL.ALL;
    var src = PACKS.filter(function (p) {
      return pool.indexOf(p.family) !== -1;
    });
    if (!src.length) src = PACKS.slice();
    var slips = [];
    var claims = [];
    src.forEach(function (p) {
      var lvl = packLevel(p);
      p.claims.forEach(function (c) {
        /* A Part B item is only ever asked right after its Part A, so the strand
           filter follows the Part A and Part B is never drawn on its own. */
        var isPartB = p.claims.some(function (o) { return o.partB === c.id; });
        if (!isPartB && !strandMatch(c, strand)) return;
        var choices = (c.choices || []).map(function (ch, i) {
          return {
            letter: ch.letter,
            text: ch.text,
            slipIndex: i
          };
        });
        claims.push({
          id: p.id + ":" + c.id,
          packId: p.id,
          sol: c.sol,
          sub: c.sub || "",
          skillLevel: skillLevel(c),
          strand: strandOf(c),
          standard: standardOf(c),
          level: lvl,
          words: passageWords(p),
          partB: c.partB ? p.id + ":" + c.partB : null,
          isPartB: isPartB,
          stem: c.stem,
          doThis: c.stem,
          claim: c.stem,
          choices: choices,
          correct: c.correct,
          passage: p.passage,
          packTitle: p.title,
          family: p.family
        });
      });
    });
    /* If the strand filter emptied the pool (sparse strand in a unit), fall back to unit-all. */
    if (!claims.length && strand !== "ALL") {
      return buildPack(family, "ALL");
    }
    var card = familyDef(family);
    var title = card ? card.label : family;
    if (strand && strand !== "ALL") title = title + " · " + strand;
    return {
      family: family,
      strand: strand,
      title: title,
      slips: slips,
      claims: claims
    };
  }

  global.HEIST_PACKS = PACKS;
  global.HEIST_FAMILIES = FAMILIES;
  global.HEIST_FAMILY_POOL = FAMILY_POOL;
  global.HEIST_STANDARDS = STANDARDS;
  global.HEIST_SKILLS = SKILLS;
  global.heistWordCount = wordCount;
  global.heistBuildPack = buildPack;
  global.heistCorrectList = correctList;
  global.heistStrandOf = strandOf;
  global.heistStandardOf = standardOf;
  global.heistStrandMatch = strandMatch;
  global.heistFamilyDef = familyDef;
  global.heistPackLevel = packLevel;
  global.heistTargetWords = targetWords;
  global.heistStamina = STAMINA;
  global.heistIsMulti = isMulti;
  global.heistSkillLevel = skillLevel;
})(typeof window !== "undefined" ? window : global);
