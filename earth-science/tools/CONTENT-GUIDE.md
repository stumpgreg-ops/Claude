# Writing question packs for SOL Lab (Virginia EOC Earth Science)

Every pack is one **stimulus** (short field notes, a lab, a data table, a map or model described in
words) plus 4–6 multiple-choice questions ("claims"). Packs live in `js/content*.js`, one file per
unit. Each file is an IIFE that pushes into the live `HEIST_PACKS` array:

```js
/* SOL Lab Earth Science — <unit> (<standards>). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    { /* pack */ },
    ...
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
```

Validate with `node tools/validate-content.js js/contentN.js` — it must print `OK — no errors`.
Fix warnings too where you can (spread answer keys, keep the correct choice from being the longest,
mix LOTS and HOTS).

## Pack shape

```js
{
  id: "rock-shenandoah-cut",       // unique, lowercase, unit-slug
  family: "ROCK",                  // INV | SPACE | ROCK | RES | TECT | HIST | OCEAN | ATMO
  title: "A road cut near Front Royal",
  kind: "Minerals & Rocks · ES.5",  // unit name · standard(s)
  blurb: "One line shown on the pack card.",
  level: 2,                        // 1 easy · 2 medium · 3 hard (reading + reasoning load)
  passage: "<p>" + N(1) + "First sentence. " + N(2) + "Second sentence. ... </p>",
  claims: [
    {
      id: "texture",               // unique within the pack
      sol: "ES.5.c",               // the KEY IDEA (standard + lower-case letter)
      sub: "ES.5.c.2",             // the SKILL within that key idea (js/standards-es.js) — LOTS or HOTS
      stem: "Based on its texture, the rock in sentence 3 most likely formed —",
      choices: [
        { letter: "A", text: "..." },
        { letter: "B", text: "..." },
        { letter: "C", text: "..." },
        { letter: "D", text: "..." }
      ],
      correct: "B"                 // or ["A", "C"] for a Select TWO item (stem must say "Select TWO")
    }
  ]
}
```

## Skills, LOTS and HOTS (every question)

`js/standards-es.js` holds the 2018 Virginia Earth Science SOL: twelve standards (ES.1–ES.12), their
key ideas (ES.4.a) and the **skills** each key idea is split into (ES.4.a.1, ES.4.a.2 …). Every skill
is labeled:

- **LOTS — lower-order thinking** (Bloom's remember / understand / apply): identify, describe,
  explain, classify, read a map or table, use a key, calculate.
- **HOTS — higher-order thinking** (Bloom's analyze / evaluate / create): analyze data or a model,
  compare, infer, predict from a model, sequence events from evidence, evaluate a design, a claim or a
  trade-off, choose the best hypothesis.

Every claim carries **both** `sol` (the key idea) and `sub` (the skill), and `sub` must be one of that
key idea's skills; the validator checks it. Choose the skill the question really asks for:
"Which mineral is the hardest?" with a hardness table is `ES.4.a.1` (identify, LOTS); "A sample
scratches glass but not quartz and has a white streak. Which mineral is it most likely?" with a key is
`ES.4.a.2` (use a key, LOTS); "Two samples share color and luster; which test would best tell them
apart?" is `ES.4.a.3` (analyze, HOTS). A question is HOTS only if a student has to reason with the
stimulus — read two things together, predict, infer, judge — not just recall a fact. A pack of six
should have **at least two LOTS and at least two HOTS** items; level-1 packs lean LOTS, level-3 packs
lean HOTS.

## The stimulus

The stimulus is what the Virginia test calls the "passage" of a science item set: a few
sentences that set up an investigation, an observation, a map, a model or a data set, and that the
questions can point back to. Write it as HTML:

- `<p>` paragraphs, every sentence numbered with `N(i)` so stems can say "In sentence 3, …".
- Data tables use a real `<table>`: `<table><tr><th>Sample</th><th>Hardness</th><th>Streak</th></tr><tr><td>A</td><td>6</td><td>white</td></tr>…</table>`.
  Keep tables to 2–4 columns and 3–6 rows so they fit the side panel on a Chromebook.
- Short lists of steps or observations may use `<ol>`/`<ul>`.
- Bold key terms with `<strong>`; use `<em>` for genus and species names.
- No images. Describe a map, cross-section, graph or model in words ("On the topographic map the
  contour lines are 20 m apart; on the east side of the hill they are packed close together …";
  "In the cross-section, layer A is on the bottom, then B and C; a dike of granite, D, cuts through
  A and B but not C").
- Word counts (excluding the sentence numbers and table cells) by tier:

| tier   | levels  | words   | questions |
|--------|---------|---------|-----------|
| tiny   | 1–15    | 40–70   | 4–5       |
| short  | 16–40   | 70–110  | 5–6       |
| medium | 41–70   | 110–160 | 6         |
| long   | 71–100  | 160–220 | 6         |

The picker aims for a longer stimulus as levels go by (`STAMINA` in `js/content.js`), so each
unit file needs every tier: aim for roughly 3 tiny, 3 short, 3 medium and 2 long packs (11 packs).

## Units and standards

Packs align to the **2018 Virginia Science Standards of Learning, Earth Science**. A pack's `family`
decides which unit card it sits under and which codes it may use; the validator rejects a code
outside the unit.

| family | unit                          | codes allowed       | key ideas |
|--------|-------------------------------|---------------------|-----------|
| INV    | Scientific Investigation      | ES.1.a–f            | a questions/problems · b planning & carrying out investigations · c interpreting/analyzing/evaluating data · d conclusions & explanations · e models (incl. topographic maps, profiles, latitude/longitude) · f communicating information; hypothesis vs theory vs law |
| SPACE  | Universe & Solar System       | ES.2.a–d, ES.3.a–b  | 2.a big bang & its evidence · 2.b stars, star systems, galaxies change over time · 2.c sun, planets, moons, comets, meteors, asteroids, dwarf planets: characteristics come from their materials · 2.d space exploration · 3.a Earth supports life (distance from sun, water, atmosphere, magnetic field) · 3.b seasons, tides, eclipses, moon phases |
| ROCK   | Minerals & Rocks              | ES.4.a–c, ES.5.a–d  | 4.a mineral identification · 4.b mineral uses (ores) · 4.c how minerals form · 5.a Earth materials are finite and recycled · 5.b the rock cycle as a model · 5.c igneous / sedimentary / metamorphic properties · 5.d weathering, erosion and tectonics transform rock |
| RES    | Resources & Fresh Water       | ES.6.a–d, ES.8.a–d  | 6.a costs and benefits of resource use · 6.b availability, renewal rate, economics · 6.c Virginia's resources · 6.d energy sources · 8.a soil and karst · 8.b groundwater, porosity, permeability · 8.c water quality and supply · 8.d stream processes, Virginia's watersheds, the Chesapeake Bay |
| TECT   | Plate Tectonics               | ES.7.a–c            | a Earth's layers, convection, seismic evidence · b plate boundaries and their features, hot spots, earthquakes, volcanoes · c mountain building (the Appalachians), ocean basins, evidence for plate tectonics |
| HIST   | Earth History                 | ES.9.a–d            | a fossils · b superposition, cross-cutting, index fossils, half-life · c relative + absolute dating together · d geologic time scale and Virginia's rocks and fossils |
| OCEAN  | Oceans                        | ES.10.a–e           | a seawater properties, tides, waves, currents, upwelling · b ocean circulation, heat and climate · c sea-floor features · d sea level, ice, ocean chemistry over time · e human impact and policy, the Chesapeake Bay |
| ATMO   | Atmosphere, Weather & Climate | ES.11.a–d, ES.12.a–e| 11.a composition and layers · 11.b biologic/geologic change of the atmosphere · 11.c natural and human stresses (ozone, greenhouse, pollution) · 11.d human decisions and policy · 12.a energy transfer and uneven heating · 12.b predicting weather (fronts, pressure, maps) · 12.c severe weather · 12.d forecast models and tools · 12.e climate and climate change |

The Virginia test embeds the ES.1 practices in every unit: a Minerals pack can (and should)
include a question about a control or the trend in a table, but tag it with the unit's own code
(`ES.4.a`) when it is really about minerals, and with `ES.1.x` **only in the INV unit**. Every unit
file should still read like a lab or a field study: data, trials, variables, maps.

## Writing rules

- **Original text only.** No copied test items, textbook passages or real published data sets. No
  real people. Invented but realistic numbers.
- **Accurate science.** Use correct, current Earth science (Mohs scale values, half-lives, the
  geologic time scale, plate boundary types, the order of the planets, the composition of air:
  about 78% nitrogen, 21% oxygen). When in doubt, choose a simpler fact you are sure of.
- **Virginia where it fits.** The five physiographic provinces (Coastal Plain, Piedmont, Blue Ridge,
  Valley and Ridge, Appalachian Plateau), karst and caverns in the Shenandoah Valley, the fall line,
  the Chesapeake Bay and its rivers (James, York, Rappahannock, Potomac), coal in southwest Virginia,
  titanium and sand on the Coastal Plain, kyanite, the Chesapeake Bay impact crater, the 2011
  Mineral earthquake, nor'easters and hurricanes on the coast, fossils such as Chesapecten. About a
  third of the packs.
- **One defensible answer.** Distractors are plausible (a true-but-off-question fact, a common
  misconception such as "summer happens when Earth is closest to the sun" or "the moon's phases are
  caused by Earth's shadow", a reversed cause and effect, a misread table row) but clearly wrong on a
  careful re-read. Keep the four choices similar in length and grammar. Never let the correct choice
  be the only one that repeats a phrase from the stem.
- **Spread the keys**: across a pack's items use each letter at least once, no letter more than twice.
- **Stems** use test phrasing: "Which conclusion is best supported by the data in the table?",
  "The independent variable in this investigation is —", "Which statement best explains why…",
  "Based on the model, which of these would most likely happen if…", "Which of the following is the
  best hypothesis for…", "Select TWO …". Stems that end in a dash have choices that complete the
  sentence (lower-case start).
- **Skills per pack** (6 items): mix at least three different key ideas, include at least one data or
  investigation item (a control, a variable, a trend, a conclusion) and at least two LOTS and two HOTS
  items.
- **Level tags**: in each file spread levels roughly evenly. Level 1 = one-step recall or a direct read
  of the table; level 3 = multi-step reasoning, an explanation of mechanism, a prediction from a model,
  or a Select TWO.
- Escape quotes inside JS strings (`\"`), use plain apostrophes, and keep each choice on one line as in
  the existing files.
