/* SOL Lab Earth Science — Minerals & Rocks (ES.4.a–c, ES.5.a–d). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "rock-four-unknowns",
      family: "ROCK",
      title: "Four unknown minerals",
      kind: "Minerals & Rocks · ES.4",
      blurb: "A fingernail, a penny, a glass plate and a streak plate: name the unknowns.",
      level: 1,
      passage: "<p>" + N(1) + "A student tested four unknown minerals with a fingernail (hardness about 2.5), a copper penny (about 3.5) and a glass plate (about 5.5). " + N(2) + "She also rubbed each one across a white streak plate and placed a drop of dilute acid on it. " + N(3) + "All four samples were light colored with a nonmetallic luster. " + N(4) + "Her results are shown in the table.</p>" +
        "<table><tr><th>Sample</th><th>Hardness test</th><th>Streak</th><th>Acid</th></tr>" +
        "<tr><td>W</td><td>scratched by fingernail</td><td>white</td><td>no fizz</td></tr>" +
        "<tr><td>X</td><td>scratches glass</td><td>colorless</td><td>no fizz</td></tr>" +
        "<tr><td>Y</td><td>scratched by penny, not by fingernail</td><td>white</td><td>fizzes</td></tr>" +
        "<tr><td>Z</td><td>scratched by glass, not by penny</td><td>white</td><td>no fizz</td></tr></table>",
      claims: [
        {
          id: "softest",
          sol: "ES.4.a",
          sub: "ES.4.a.1",
          stem: "Which sample is the softest?",
          choices: [
            { letter: "A", text: "Sample X" },
            { letter: "B", text: "Sample Z" },
            { letter: "C", text: "Sample W" },
            { letter: "D", text: "Sample Y" }
          ],
          correct: "C"
        },
        {
          id: "name-y",
          sol: "ES.4.a",
          sub: "ES.4.a.2",
          stem: "Based on the table and the Mohs hardness scale, Sample Y is most likely —",
          choices: [
            { letter: "A", text: "talc" },
            { letter: "B", text: "gypsum" },
            { letter: "C", text: "quartz" },
            { letter: "D", text: "calcite" }
          ],
          correct: "D"
        },
        {
          id: "tell-apart",
          sol: "ES.4.a",
          sub: "ES.4.a.3",
          stem: "Besides the acid test, which test or observation would best tell Sample W from Sample Y?",
          choices: [
            { letter: "A", text: "trying to scratch each with a fingernail" },
            { letter: "B", text: "rubbing each across the streak plate" },
            { letter: "C", text: "comparing the colors of the two samples" },
            { letter: "D", text: "comparing how each one reflects light" }
          ],
          correct: "A"
        },
        {
          id: "gypsum-use",
          sol: "ES.4.b",
          sub: "ES.4.b.1",
          stem: "Sample W turns out to be gypsum. Gypsum is mined mainly to make —",
          choices: [
            { letter: "A", text: "table salt" },
            { letter: "B", text: "drywall" },
            { letter: "C", text: "pencil lead" },
            { letter: "D", text: "window glass" }
          ],
          correct: "B"
        },
        {
          id: "sample-z",
          sol: "ES.4.a",
          sub: "ES.4.a.3",
          stem: "Which conclusion about the hardness of Sample Z is supported by the test results?",
          choices: [
            { letter: "A", text: "It is softer than a fingernail." },
            { letter: "B", text: "It is between 3.5 and 5.5." },
            { letter: "C", text: "It is harder than Sample X." },
            { letter: "D", text: "It is softer than Sample Y." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "rock-salt-dishes",
      family: "ROCK",
      title: "Two dishes of salt water",
      kind: "Minerals & Rocks · ES.4",
      blurb: "One dish dries fast, one dries slow: compare the crystals that grow.",
      level: 1,
      passage: "<p>" + N(1) + "A class poured 50 mL of the same salt water into each of two shallow dishes. " + N(2) + "Dish 1 sat on a warm, sunny windowsill and was dry in 2 days. " + N(3) + "Dish 2 sat in a cool cabinet and was dry in 9 days. " + N(4) + "Dish 1 held many tiny cube-shaped crystals, while Dish 2 held fewer, larger cubes. " + N(5) + "When tapped gently, the crystals broke into smaller cubes with smooth sides.</p>",
      claims: [
        {
          id: "how-formed",
          sol: "ES.4.c",
          sub: "ES.4.c.1",
          stem: "The crystals in both dishes formed when —",
          choices: [
            { letter: "A", text: "melted rock cooled and hardened" },
            { letter: "B", text: "heat and pressure changed old minerals" },
            { letter: "C", text: "water evaporated and left dissolved minerals" },
            { letter: "D", text: "rock fragments were pressed together" }
          ],
          correct: "C"
        },
        {
          id: "breakage",
          sol: "ES.4.a",
          sub: "ES.4.a.1",
          stem: "The way the crystals broke in sentence 5 shows that this mineral has —",
          choices: [
            { letter: "A", text: "cleavage" },
            { letter: "B", text: "fracture" },
            { letter: "C", text: "double refraction" },
            { letter: "D", text: "magnetism" }
          ],
          correct: "A"
        },
        {
          id: "size-rule",
          sol: "ES.4.c",
          sub: "ES.4.c.2",
          stem: "Which conclusion about crystal size is best supported by the results?",
          choices: [
            { letter: "A", text: "Warmer places always grow larger crystals." },
            { letter: "B", text: "Crystals that grow slowly become larger." },
            { letter: "C", text: "The amount of water sets the crystal shape." },
            { letter: "D", text: "Crystals stop growing once they form cubes." }
          ],
          correct: "B"
        },
        {
          id: "halite-use",
          sol: "ES.4.b",
          sub: "ES.4.b.1",
          stem: "The mineral in the dishes is halite. Halite is mined mainly for use as —",
          choices: [
            { letter: "A", text: "lead for pencils" },
            { letter: "B", text: "wallboard for houses" },
            { letter: "C", text: "sand for window glass" },
            { letter: "D", text: "table salt and road salt" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "rock-field-trip-kit",
      family: "ROCK",
      title: "A field trip rock kit",
      kind: "Minerals & Rocks · ES.5",
      blurb: "Crystals, sand grains and wavy bands: sort three Virginia rocks.",
      level: 1,
      passage: "<p>" + N(1) + "A rock kit from a Virginia field trip held three samples. " + N(2) + "Sample 1, from the Blue Ridge, had large, interlocking crystals of pink feldspar, gray quartz and black mica. " + N(3) + "Sample 2 was made of rounded sand grains held together by natural cement. " + N(4) + "Sample 3 had light and dark minerals lined up in wavy, parallel bands.</p>",
      claims: [
        {
          id: "sample2",
          sol: "ES.5.c",
          sub: "ES.5.c.1",
          stem: "Sample 2 is best classified as —",
          choices: [
            { letter: "A", text: "an extrusive igneous rock" },
            { letter: "B", text: "a clastic sedimentary rock" },
            { letter: "C", text: "a foliated metamorphic rock" },
            { letter: "D", text: "a chemical sedimentary rock" }
          ],
          correct: "B"
        },
        {
          id: "sample3",
          sol: "ES.5.c",
          sub: "ES.5.c.1",
          stem: "Which rock type does Sample 3 belong to?",
          choices: [
            { letter: "A", text: "foliated metamorphic, such as gneiss" },
            { letter: "B", text: "intrusive igneous, such as granite" },
            { letter: "C", text: "clastic sedimentary, such as sandstone" },
            { letter: "D", text: "non-foliated metamorphic, such as marble" }
          ],
          correct: "A"
        },
        {
          id: "big-crystals",
          sol: "ES.5.c",
          sub: "ES.5.c.2",
          stem: "The large crystals in Sample 1 are evidence that it formed —",
          choices: [
            { letter: "A", text: "from lava that cooled quickly on the surface" },
            { letter: "B", text: "from sediment that settled in layers in water" },
            { letter: "C", text: "from magma that cooled slowly deep underground" },
            { letter: "D", text: "from seawater that evaporated in a shallow basin" }
          ],
          correct: "C"
        },
        {
          id: "path",
          sol: "ES.5.b",
          sub: "ES.5.b.2",
          stem: "Which series of processes could turn a rock like Sample 1 into a rock like Sample 2?",
          choices: [
            { letter: "A", text: "melting into magma, then cooling quickly at the surface" },
            { letter: "B", text: "heating and squeezing deep underground without melting" },
            { letter: "C", text: "burial, melting, and then slow cooling deep underground" },
            { letter: "D", text: "weathering and erosion, then deposition and cementation" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "rock-ore-display",
      family: "ROCK",
      title: "A museum case of ores",
      kind: "Minerals & Rocks · ES.4 · ES.5",
      blurb: "Iron, lead and copper ores: read the streak and hardness labels.",
      level: 1,
      passage: "<p>" + N(1) + "A science museum in Richmond set up a case of <strong>ore minerals</strong>, minerals that are mined because a useful metal can be removed from them at a profit. " + N(2) + "A volunteer tested each sample with a streak plate and a hardness kit and listed the metal it supplies. " + N(3) + "Her results are in the table. " + N(4) + "A sign beside the case explains that most of the iron, lead and copper used today comes from deposits that took millions of years to form and are being mined much faster than new ones can form.</p>" +
        "<table><tr><th>Mineral</th><th>Metal</th><th>Streak</th><th>Hardness</th></tr>" +
        "<tr><td>Hematite</td><td>iron</td><td>reddish brown</td><td>5.5–6.5</td></tr>" +
        "<tr><td>Magnetite</td><td>iron</td><td>black</td><td>5.5–6.5</td></tr>" +
        "<tr><td>Galena</td><td>lead</td><td>lead gray</td><td>2.5</td></tr>" +
        "<tr><td>Chalcopyrite</td><td>copper</td><td>greenish black</td><td>3.5–4</td></tr></table>",
      claims: [
        {
          id: "copper",
          sol: "ES.4.b",
          sub: "ES.4.b.1",
          stem: "According to the table, which mineral would a company mine to obtain copper?",
          choices: [
            { letter: "A", text: "galena" },
            { letter: "B", text: "hematite" },
            { letter: "C", text: "chalcopyrite" },
            { letter: "D", text: "magnetite" }
          ],
          correct: "C"
        },
        {
          id: "unknown",
          sol: "ES.4.a",
          sub: "ES.4.a.2",
          stem: "A visitor's unknown metallic sample has a hardness of about 2.5 and leaves a gray streak. Based on the table, it is most likely —",
          choices: [
            { letter: "A", text: "galena" },
            { letter: "B", text: "magnetite" },
            { letter: "C", text: "hematite" },
            { letter: "D", text: "chalcopyrite" }
          ],
          correct: "A"
        },
        {
          id: "iron-pair",
          sol: "ES.4.a",
          sub: "ES.4.a.3",
          stem: "Hematite and magnetite can both look dark gray and metallic. Which test from the table best tells them apart?",
          choices: [
            { letter: "A", text: "a hardness test, because their hardness differs" },
            { letter: "B", text: "a streak test, because their streaks differ" },
            { letter: "C", text: "a label check, because their metals differ" },
            { letter: "D", text: "a color check, because their colors differ" }
          ],
          correct: "B"
        },
        {
          id: "red-paint",
          sol: "ES.4.b",
          sub: "ES.4.b.2",
          stem: "Long ago, hematite was ground into powder to make red paint. Which property in the table best explains this use?",
          choices: [
            { letter: "A", text: "its hardness of 5.5 to 6.5" },
            { letter: "B", text: "the iron that it contains" },
            { letter: "C", text: "its use as an ore mineral" },
            { letter: "D", text: "its reddish-brown streak" }
          ],
          correct: "D"
        },
        {
          id: "finite",
          sol: "ES.5.a",
          sub: "ES.5.a.1",
          stem: "Which statement best explains the sign described in sentence 4?",
          choices: [
            { letter: "A", text: "Ore deposits are nonrenewable because they form far more slowly than people use them." },
            { letter: "B", text: "Ore deposits are renewable because the rock cycle replaces them every few years." },
            { letter: "C", text: "Ore deposits are found only in Virginia, so the world supply is small." },
            { letter: "D", text: "Ore deposits form quickly but are hard to find deep underground." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "rock-winter-hike",
      family: "ROCK",
      title: "Cracks, rust and pits",
      kind: "Minerals & Rocks · ES.5",
      blurb: "A winter hike from the Blue Ridge to the Valley shows rock breaking down.",
      level: 2,
      passage: "<p>" + N(1) + "On a winter hike in the Blue Ridge, a student found a granite boulder split by a crack that was filled with ice. " + N(2) + "Water in the crack had frozen and thawed many times that season. " + N(3) + "Nearby, a greenstone outcrop was covered with rusty orange stains where iron-bearing minerals were exposed to air and rain. " + N(4) + "Later, in the Valley and Ridge, she saw gray limestone covered with smooth pits and small holes. " + N(5) + "A sign said that rainwater, made slightly acidic by carbon dioxide, slowly dissolves this rock. " + N(6) + "A stream at the bottom of the hill carried pebbles and sand away.</p>",
      claims: [
        {
          id: "ice-crack",
          sol: "ES.5.d",
          sub: "ES.5.d.1",
          stem: "The crack in the granite boulder grew mainly because —",
          choices: [
            { letter: "A", text: "water expands when it freezes and pushes the rock apart" },
            { letter: "B", text: "acid in rainwater dissolved the minerals in the granite" },
            { letter: "C", text: "the boulder slowly melted during the warmest days" },
            { letter: "D", text: "iron in the rock reacted with oxygen and turned to rust" }
          ],
          correct: "A"
        },
        {
          id: "rust",
          sol: "ES.5.d",
          sub: "ES.5.d.1",
          stem: "The rusty stains in sentence 3 are evidence of —",
          choices: [
            { letter: "A", text: "frost wedging, a type of physical weathering" },
            { letter: "B", text: "oxidation, a type of chemical weathering" },
            { letter: "C", text: "deposition of iron by a moving stream" },
            { letter: "D", text: "abrasion of the rock by wind-blown sand" }
          ],
          correct: "B"
        },
        {
          id: "pits",
          sol: "ES.5.d",
          sub: "ES.5.d.2",
          stem: "Which statement best explains why the limestone is pitted while the granite in sentence 1 is not?",
          choices: [
            { letter: "A", text: "Limestone is an igneous rock that cools into pitted shapes." },
            { letter: "B", text: "Granite is softer than limestone, so it wears down evenly." },
            { letter: "C", text: "Granite forms at the surface, where rainwater cannot reach it." },
            { letter: "D", text: "Limestone is mostly calcite, which dissolves in weak carbonic acid." }
          ],
          correct: "D"
        },
        {
          id: "where-frost",
          sol: "ES.5.d",
          sub: "ES.5.d.2",
          stem: "Based on sentences 1 and 2, in which setting would ice most likely break rock the fastest?",
          choices: [
            { letter: "A", text: "a hot desert where it never drops below freezing" },
            { letter: "B", text: "a polar ice sheet that stays frozen all year" },
            { letter: "C", text: "a mountain where it freezes at night and thaws by day" },
            { letter: "D", text: "a tropical rain forest that is warm and wet all year" }
          ],
          correct: "C"
        },
        {
          id: "stream",
          sol: "ES.5.b",
          sub: "ES.5.b.1",
          stem: "In sentence 6, the stream moving pebbles and sand downhill is an example of —",
          choices: [
            { letter: "A", text: "compaction" },
            { letter: "B", text: "erosion" },
            { letter: "C", text: "cementation" },
            { letter: "D", text: "crystallization" }
          ],
          correct: "B"
        },
        {
          id: "recycled",
          sol: "ES.5.a",
          sub: "ES.5.a.1",
          stem: "Calcite dissolved from the limestone can later build new rock, such as cave formations. This shows that Earth materials are —",
          choices: [
            { letter: "A", text: "recycled into new forms rather than used up for good" },
            { letter: "B", text: "created brand new each time a rainstorm passes" },
            { letter: "C", text: "destroyed completely by chemical weathering" },
            { letter: "D", text: "replaced by living things within a few weeks" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "rock-virginia-map",
      family: "ROCK",
      title: "Mining Virginia",
      kind: "Minerals & Rocks · ES.4 · ES.5",
      blurb: "Kyanite, slate, limestone and titanium sand: what Virginia mines and why.",
      level: 2,
      passage: "<p>" + N(1) + "A student made a map of mineral resources mined in Virginia. " + N(2) + "In the Piedmont, <strong>kyanite</strong> is mined at Willis Mountain in Buckingham County and used to make bricks and linings that hold up inside very hot furnaces and kilns. " + N(3) + "Also in Buckingham County, dark gray slate splits into thin, flat sheets that have been used for roofing for more than a century. " + N(4) + "In the Valley and Ridge, limestone is quarried, crushed for gravel and heated to make cement. " + N(5) + "On the Coastal Plain, heavy dark sand grains of <strong>ilmenite</strong> are mined as a source of titanium.</p>",
      claims: [
        {
          id: "ilmenite",
          sol: "ES.4.b",
          sub: "ES.4.b.1",
          stem: "According to the map, ilmenite is mined in Virginia as a source of —",
          choices: [
            { letter: "A", text: "the metal iron" },
            { letter: "B", text: "the metal titanium" },
            { letter: "C", text: "the metal copper" },
            { letter: "D", text: "the metal lead" }
          ],
          correct: "B"
        },
        {
          id: "kyanite",
          sol: "ES.4.b",
          sub: "ES.4.b.2",
          stem: "Which property of kyanite best explains its use in furnace linings?",
          choices: [
            { letter: "A", text: "It stays solid and strong at very high temperatures." },
            { letter: "B", text: "It is soft enough to scratch with a fingernail." },
            { letter: "C", text: "It is pulled strongly toward a magnet." },
            { letter: "D", text: "It dissolves quickly in warm water." }
          ],
          correct: "A"
        },
        {
          id: "slate",
          sol: "ES.5.c",
          sub: "ES.5.c.1",
          stem: "The slate described in sentence 3 is a —",
          choices: [
            { letter: "A", text: "non-foliated metamorphic rock formed from limestone" },
            { letter: "B", text: "clastic sedimentary rock formed from sand grains" },
            { letter: "C", text: "foliated metamorphic rock formed from shale" },
            { letter: "D", text: "extrusive igneous rock formed from lava" }
          ],
          correct: "C"
        },
        {
          id: "deposits",
          sol: "ES.5.a",
          sub: "ES.5.a.1",
          stem: "Which statement about Virginia's kyanite and limestone deposits is most accurate?",
          choices: [
            { letter: "A", text: "A quarry's deposit grows back within a few decades after it closes." },
            { letter: "B", text: "They are renewable because new rock forms somewhere every day." },
            { letter: "C", text: "They will never run out because rock is found everywhere." },
            { letter: "D", text: "Once a deposit is used up, it cannot be replaced on a human time scale." }
          ],
          correct: "D"
        },
        {
          id: "sand-source",
          sol: "ES.5.d",
          sub: "ES.5.d.2",
          stem: "The ilmenite grains on the Coastal Plain most likely got there because —",
          choices: [
            { letter: "A", text: "they crystallized from lava erupting on the Coastal Plain" },
            { letter: "B", text: "they formed when seawater evaporated in tidal pools" },
            { letter: "C", text: "rivers carried them from weathered rocks farther inland" },
            { letter: "D", text: "acid rain dissolved limestone and left them behind" }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "rock-salol-slides",
      family: "ROCK",
      title: "Crystals on cold glass",
      kind: "Minerals & Rocks · ES.4 · ES.5",
      blurb: "Melted salol cools on warm, room and chilled slides: a model of magma and lava.",
      level: 2,
      passage: "<p>" + N(1) + "A student investigated how cooling rate affects crystal size using salol, a white solid that melts at about 42 °C. " + N(2) + "She melted the salol in a warm water bath and placed 5 drops on each of three glass slides. " + N(3) + "One slide had been warmed to 40 °C, one was at room temperature (22 °C), and one had been chilled on ice (2 °C). " + N(4) + "She timed how long the liquid took to become solid, then measured the longest crystals with a hand lens and a ruler. " + N(5) + "She repeated the test three times and recorded the averages in the table. " + N(6) + "Her teacher explained that the slides model how melted rock cools: magma deep underground loses heat slowly, while lava at the surface loses heat quickly.</p>" +
        "<table><tr><th>Slide</th><th>Time to become solid</th><th>Crystal length</th></tr>" +
        "<tr><td>Warm (40 °C)</td><td>9 min</td><td>4.0 mm</td></tr>" +
        "<tr><td>Room (22 °C)</td><td>2 min</td><td>1.5 mm</td></tr>" +
        "<tr><td>Chilled (2 °C)</td><td>20 s</td><td>0.2 mm</td></tr></table>",
      claims: [
        {
          id: "trend",
          sol: "ES.4.c",
          sub: "ES.4.c.1",
          stem: "Which statement describes the pattern in the table?",
          choices: [
            { letter: "A", text: "The slower the salol cooled, the larger its crystals grew." },
            { letter: "B", text: "The faster the salol cooled, the larger its crystals grew." },
            { letter: "C", text: "Crystal length stayed about the same on all three slides." },
            { letter: "D", text: "The chilled slide took the longest time to become solid." }
          ],
          correct: "A"
        },
        {
          id: "constant",
          sol: "ES.4.c",
          sub: "ES.4.c.1",
          stem: "Why did the student place the same number of drops on every slide?",
          choices: [
            { letter: "A", text: "so the salol would cool faster on every slide" },
            { letter: "B", text: "so she would not need to repeat any trials" },
            { letter: "C", text: "so the crystals would all grow to one size" },
            { letter: "D", text: "so slide temperature was the only thing changed" }
          ],
          correct: "D"
        },
        {
          id: "tiny-crystals",
          sol: "ES.4.c",
          sub: "ES.4.c.2",
          stem: "A mineral sample has crystals too small to see without a microscope. Based on this lab, the mineral most likely formed —",
          choices: [
            { letter: "A", text: "from magma that cooled slowly deep underground" },
            { letter: "B", text: "from lava that cooled quickly at Earth's surface" },
            { letter: "C", text: "from seawater that evaporated over many years" },
            { letter: "D", text: "from melted rock that cooled at a steady 40 °C" }
          ],
          correct: "B"
        },
        {
          id: "granite-model",
          sol: "ES.5.c",
          sub: "ES.5.c.2",
          stem: "Which slide best models the formation of granite, an igneous rock with crystals large enough to see easily?",
          choices: [
            { letter: "A", text: "the chilled slide, because granite forms from lava on the surface" },
            { letter: "B", text: "the warm slide, because granite forms from magma cooling underground" },
            { letter: "C", text: "the room-temperature slide, because granite forms at everyday air temperatures" },
            { letter: "D", text: "the chilled slide, because granite forms where ocean water cools magma" }
          ],
          correct: "B"
        },
        {
          id: "cycle-step",
          sol: "ES.5.b",
          sub: "ES.5.b.1",
          stem: "In the rock cycle, the step modeled by the liquid salol turning solid is —",
          choices: [
            { letter: "A", text: "weathering and erosion" },
            { letter: "B", text: "compaction and cementation" },
            { letter: "C", text: "cooling and crystallization" },
            { letter: "D", text: "heat and pressure" }
          ],
          correct: "C"
        },
        {
          id: "two-sizes",
          sol: "ES.5.c",
          sub: "ES.5.c.2",
          stem: "An igneous rock has a few large crystals scattered in a mass of tiny crystals. Based on the lab, which history best explains this texture?",
          choices: [
            { letter: "A", text: "It cooled quickly at the surface, then slowly far underground." },
            { letter: "B", text: "It cooled at one steady rate from start to finish." },
            { letter: "C", text: "It never melted, so its crystals were squeezed into place." },
            { letter: "D", text: "It cooled slowly underground, then quickly after it erupted." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "rock-mystery-kit",
      family: "ROCK",
      title: "The mineral test kit",
      kind: "Minerals & Rocks · ES.4",
      blurb: "Acid, a magnet and a streak plate: identify four look-alike minerals.",
      level: 2,
      passage: "<p>" + N(1) + "A student was given four unknown mineral samples and a testing kit. " + N(2) + "The kit held a streak plate, a magnet, a dropper of dilute hydrochloric acid and a chart of the Mohs hardness scale. " + N(3) + "Wearing goggles, she recorded the hardness, streak and other properties of each sample in the table. " + N(4) + "Samples 2 and 4 were both white and glassy, and by eye they were almost impossible to tell apart. " + N(5) + "When she set a clear piece of Sample 2 on a printed page, every letter under it appeared twice. " + N(6) + "Her teacher said that one sample came from a thick layer found between beds of gypsum and shale in an old mine. " + N(7) + "That layer, the teacher added, formed in a dry climate long ago.</p>" +
        "<table><tr><th>Sample</th><th>Hardness</th><th>Streak</th><th>Other properties</th></tr>" +
        "<tr><td>1</td><td>7</td><td>colorless</td><td>breaks along curved, shell-like surfaces</td></tr>" +
        "<tr><td>2</td><td>3</td><td>white</td><td>fizzes in acid; breaks into slanted blocks</td></tr>" +
        "<tr><td>3</td><td>6</td><td>black</td><td>pulled toward the magnet</td></tr>" +
        "<tr><td>4</td><td>2.5</td><td>white</td><td>breaks into cubes; dissolves in water</td></tr></table>",
      claims: [
        {
          id: "shell-break",
          sol: "ES.4.a",
          sub: "ES.4.a.1",
          stem: "The curved, shell-like surfaces on Sample 1 show that it breaks by —",
          choices: [
            { letter: "A", text: "fracture rather than cleavage" },
            { letter: "B", text: "cleavage in three directions" },
            { letter: "C", text: "splitting into thin, flat sheets" },
            { letter: "D", text: "reacting with the dilute acid" }
          ],
          correct: "A"
        },
        {
          id: "sample2-name",
          sol: "ES.4.a",
          sub: "ES.4.a.2",
          stem: "Using the table and the Mohs scale, Sample 2 is most likely —",
          choices: [
            { letter: "A", text: "quartz" },
            { letter: "B", text: "gypsum" },
            { letter: "C", text: "fluorite" },
            { letter: "D", text: "calcite" }
          ],
          correct: "D"
        },
        {
          id: "least-useful",
          sol: "ES.4.a",
          sub: "ES.4.a.3",
          stem: "Which test would be LEAST useful for telling Sample 2 from Sample 4?",
          choices: [
            { letter: "A", text: "placing a drop of acid on each" },
            { letter: "B", text: "rubbing each on the streak plate" },
            { letter: "C", text: "dropping a piece of each in water" },
            { letter: "D", text: "comparing the shapes of broken pieces" }
          ],
          correct: "B"
        },
        {
          id: "double",
          sol: "ES.4.a",
          sub: "ES.4.a.1",
          stem: "The observation in sentence 5 is a special property called —",
          choices: [
            { letter: "A", text: "magnetism" },
            { letter: "B", text: "fluorescence" },
            { letter: "C", text: "double refraction" },
            { letter: "D", text: "effervescence" }
          ],
          correct: "C"
        },
        {
          id: "separate-ore",
          sol: "ES.4.b",
          sub: "ES.4.b.2",
          stem: "Sample 3 is an iron ore. Which property would make it easiest to separate Sample 3 grains from crushed waste rock at a mine?",
          choices: [
            { letter: "A", text: "its black streak" },
            { letter: "B", text: "its hardness of 6" },
            { letter: "C", text: "its pull toward a magnet" },
            { letter: "D", text: "its dark color" }
          ],
          correct: "C"
        },
        {
          id: "evaporite",
          sol: "ES.4.c",
          sub: "ES.4.c.2",
          stem: "Based on sentences 6 and 7 and the table, which sample most likely came from the layer in the old mine, and how did it form?",
          choices: [
            { letter: "A", text: "Sample 4; it formed as water in a shallow sea evaporated" },
            { letter: "B", text: "Sample 1; it formed as magma cooled slowly underground" },
            { letter: "C", text: "Sample 3; it formed as lava cooled quickly at the surface" },
            { letter: "D", text: "Sample 2; it formed under great heat and pressure" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "rock-crayon-cycle",
      family: "ROCK",
      title: "The crayon rock cycle",
      kind: "Minerals & Rocks · ES.5",
      blurb: "Shave it, press it, squeeze it, melt it: judge a classroom rock cycle model.",
      level: 3,
      passage: "<p>" + N(1) + "To model the rock cycle, a class used old crayons. " + N(2) + "First, they scraped the crayons with a plastic knife into small shavings of several colors. " + N(3) + "They pressed a handful of shavings firmly inside a sheet of foil to make a crumbly block in which each shaving could still be seen. " + N(4) + "Next, they wrapped a second block in foil, set it in warm water for two minutes and squeezed it hard between two heavy books; the colors smeared into flattened streaks, but the wax never became liquid. " + N(5) + "Finally, the teacher melted a third block in a foil cup over hot water and let it cool into a solid blob with no separate shavings. " + N(6) + "The same crayon wax was used again and again in every step, and no new wax was added. " + N(7) + "The whole activity took one class period.</p>",
      claims: [
        {
          id: "press",
          sol: "ES.5.b",
          sub: "ES.5.b.1",
          stem: "In the model, pressing the shavings into a crumbly block in sentence 3 represents —",
          choices: [
            { letter: "A", text: "melting and cooling of magma" },
            { letter: "B", text: "compaction and cementation of sediment" },
            { letter: "C", text: "heat and pressure deep in the crust" },
            { letter: "D", text: "weathering of rock at the surface" }
          ],
          correct: "B"
        },
        {
          id: "marble",
          sol: "ES.5.c",
          sub: "ES.5.c.1",
          stem: "The streaked block in sentence 4 stands for a metamorphic rock. Which real metamorphic rock forms from limestone?",
          choices: [
            { letter: "A", text: "marble" },
            { letter: "B", text: "slate" },
            { letter: "C", text: "quartzite" },
            { letter: "D", text: "gneiss" }
          ],
          correct: "A"
        },
        {
          id: "to-igneous",
          sol: "ES.5.b",
          sub: "ES.5.b.2",
          stem: "Which pathway could change a sandstone into an igneous rock?",
          choices: [
            { letter: "A", text: "weathering into sand, then compaction and cementation" },
            { letter: "B", text: "heating and squeezing that stop before the rock melts" },
            { letter: "C", text: "more cement added by minerals in moving groundwater" },
            { letter: "D", text: "deep burial and heating until it melts, then cooling" }
          ],
          correct: "D"
        },
        {
          id: "limitation",
          sol: "ES.5.b",
          sub: "ES.5.b.2",
          stem: "Which statement describes the most important limitation of the crayon model?",
          choices: [
            { letter: "A", text: "It shows sediment, which real rocks never break down into." },
            { letter: "B", text: "It includes melting, which never happens inside the real Earth." },
            { letter: "C", text: "Its changes take minutes; real ones take thousands of years or more." },
            { letter: "D", text: "It shows that one type of rock can change into another type." }
          ],
          correct: "C"
        },
        {
          id: "same-wax",
          sol: "ES.5.a",
          sub: "ES.5.a.1",
          stem: "Sentence 6 best represents the idea that —",
          choices: [
            { letter: "A", text: "new rock material is added to Earth mostly from space" },
            { letter: "B", text: "Earth's rock material is finite and is recycled into new rocks" },
            { letter: "C", text: "each type of rock can form only once in Earth's history" },
            { letter: "D", text: "rock material that melts is lost from Earth for good" }
          ],
          correct: "B"
        },
        {
          id: "where-melt",
          sol: "ES.5.d",
          sub: "ES.5.d.2",
          stem: "On Earth, the melting step modeled in sentence 5 most likely happens —",
          choices: [
            { letter: "A", text: "where an ocean plate sinks into the mantle at a subduction zone" },
            { letter: "B", text: "on a lake bottom where thin layers of mud slowly settle" },
            { letter: "C", text: "in a desert where wind piles loose sand into tall dunes" },
            { letter: "D", text: "in a limestone cave where groundwater drips from the roof" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "rock-richmond-to-valley",
      family: "ROCK",
      title: "From the Piedmont to the Valley",
      kind: "Minerals & Rocks · ES.5",
      blurb: "Five stops across Virginia: schist, slate, granite, greenstone, limestone and sandstone.",
      level: 3,
      passage: "<p>" + N(1) + "A geology class drove west from Richmond to the Shenandoah Valley and described one rock at each stop. " + N(2) + "Stop 1, in the Piedmont, was a shiny schist with flat flakes of mica lined up in parallel and a few small red garnet crystals. " + N(3) + "Stop 2, in Buckingham County, was a dark gray slate that split into thin, smooth sheets. " + N(4) + "Stop 3, in the Blue Ridge, had two rocks side by side: a coarse granite with crystals up to 2 cm long, and a green rock called <strong>greenstone</strong>. " + N(5) + "A sign explained that the greenstone began as basalt lava flows about 570 million years ago and was later changed by heat and pressure, without melting, when the Appalachian Mountains formed. " + N(6) + "Stop 4, in the Valley and Ridge, was gray limestone full of fossil shells; drops of dilute acid fizzed on it, and a cave entrance opened in the hillside nearby. " + N(7) + "Stop 5, on a ridge top, was a hard sandstone made mostly of rounded quartz grains. " + N(8) + "The class noticed that across the Valley and Ridge, the long ridges are capped by sandstone, while the valleys between them are floored by limestone.</p>",
      claims: [
        {
          id: "foliated",
          sol: "ES.5.c",
          sub: "ES.5.c.1",
          stem: "Which TWO rocks from the trip are foliated metamorphic rocks? Select TWO.",
          choices: [
            { letter: "A", text: "the schist at Stop 1" },
            { letter: "B", text: "the slate at Stop 2" },
            { letter: "C", text: "the granite at Stop 3" },
            { letter: "D", text: "the sandstone at Stop 5" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "coarse",
          sol: "ES.5.c",
          sub: "ES.5.c.2",
          stem: "The 2 cm crystals in the granite at Stop 3 are evidence that the granite formed —",
          choices: [
            { letter: "A", text: "from lava that cooled quickly on the surface" },
            { letter: "B", text: "from sand grains cemented together in water" },
            { letter: "C", text: "from magma that cooled slowly far below the surface" },
            { letter: "D", text: "from limestone squeezed during mountain building" }
          ],
          correct: "C"
        },
        {
          id: "ridges",
          sol: "ES.5.d",
          sub: "ES.5.d.2",
          stem: "Which statement best explains the pattern described in sentence 8?",
          choices: [
            { letter: "A", text: "Limestone is harder than sandstone, so it sinks into the valleys." },
            { letter: "B", text: "Sandstone forms only on hilltops, and limestone forms only in valleys." },
            { letter: "C", text: "Rivers laid down limestone in the valleys after the ridges formed." },
            { letter: "D", text: "Quartz sandstone resists weathering, but limestone dissolves in weak acid." }
          ],
          correct: "D"
        },
        {
          id: "greenstone",
          sol: "ES.5.b",
          sub: "ES.5.b.2",
          stem: "Which sequence best describes the history of the greenstone in sentence 5?",
          choices: [
            { letter: "A", text: "sediment was cemented into rock, which then melted and cooled" },
            { letter: "B", text: "lava cooled into basalt, which heat and pressure then changed" },
            { letter: "C", text: "magma cooled into granite, which then weathered into sediment" },
            { letter: "D", text: "basalt melted into lava, which then cooled into a new igneous rock" }
          ],
          correct: "B"
        },
        {
          id: "parent",
          sol: "ES.5.c",
          sub: "ES.5.c.1",
          stem: "The slate at Stop 2 most likely formed from which parent rock?",
          choices: [
            { letter: "A", text: "shale" },
            { letter: "B", text: "granite" },
            { letter: "C", text: "limestone" },
            { letter: "D", text: "sandstone" }
          ],
          correct: "A"
        },
        {
          id: "cave",
          sol: "ES.5.d",
          sub: "ES.5.d.1",
          stem: "The cave near Stop 4 most likely formed when —",
          choices: [
            { letter: "A", text: "frost wedging split the limestone into large blocks" },
            { letter: "B", text: "lava drained out of a tube beneath a cooled crust" },
            { letter: "C", text: "groundwater holding carbonic acid dissolved the limestone" },
            { letter: "D", text: "wind-blown sand slowly carved a hollow in the cliff" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "rock-granite-countertop",
      family: "ROCK",
      title: "A granite countertop",
      kind: "Minerals & Rocks · ES.4 · ES.5",
      blurb: "Feldspar, quartz and mica: from a Piedmont quarry to the kitchen and back to sand.",
      level: 3,
      passage: "<p>" + N(1) + "A company sells polished granite countertops cut from a quarry in the Virginia Piedmont. " + N(2) + "The granite formed hundreds of millions of years ago when a large body of magma cooled slowly deep underground. " + N(3) + "It contains three main minerals: pink orthoclase feldspar (hardness 6), gray quartz (hardness 7) and thin black flakes of biotite mica (hardness 2.5–3). " + N(4) + "All three are <strong>silicate</strong> minerals, built from silicon and oxygen, the two most abundant elements in Earth's crust. " + N(5) + "On a broken edge, the feldspar shows flat, smooth surfaces that flash in the light, while the quartz shows curved, glassy surfaces. " + N(6) + "A buyer rubbed a steel knife (hardness about 5.5) across a scrap piece: the knife scratched the mica but left no mark on the feldspar or the quartz. " + N(7) + "Old scraps piled outside the quarry office show changes over time. " + N(8) + "On scraps left out for decades, many feldspar grains have turned into soft, white clay, while the quartz grains still look fresh. " + N(9) + "Rain washes the loose quartz grains into a nearby creek, where they collect as sand on a sandbar.</p>",
      claims: [
        {
          id: "flash",
          sol: "ES.4.a",
          sub: "ES.4.a.1",
          stem: "The feldspar surfaces described in sentence 5 are evidence that feldspar has —",
          choices: [
            { letter: "A", text: "fracture" },
            { letter: "B", text: "a white streak" },
            { letter: "C", text: "cleavage" },
            { letter: "D", text: "double refraction" }
          ],
          correct: "C"
        },
        {
          id: "knife",
          sol: "ES.4.a",
          sub: "ES.4.a.3",
          stem: "Which conclusion is supported by the knife test in sentence 6?",
          choices: [
            { letter: "A", text: "The mica is softer than the knife; feldspar and quartz are harder." },
            { letter: "B", text: "The feldspar is harder than the quartz because the knife missed it." },
            { letter: "C", text: "The knife is harder than all three minerals found in the granite." },
            { letter: "D", text: "The quartz and the mica have about the same hardness as each other." }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "ES.4.b",
          sub: "ES.4.b.2",
          stem: "Which property makes this granite a good choice for a kitchen countertop?",
          choices: [
            { letter: "A", text: "It contains mica, which bends and flakes off easily." },
            { letter: "B", text: "Its minerals dissolve in water, so spills wipe away." },
            { letter: "C", text: "It is a sedimentary rock that splits into thin slabs." },
            { letter: "D", text: "It is mostly feldspar and quartz, which a knife cannot scratch." }
          ],
          correct: "D"
        },
        {
          id: "glass",
          sol: "ES.4.b",
          sub: "ES.4.b.1",
          stem: "Quartz sand like the grains on the sandbar is the main raw material for making —",
          choices: [
            { letter: "A", text: "drywall" },
            { letter: "B", text: "glass" },
            { letter: "C", text: "table salt" },
            { letter: "D", text: "pencil lead" }
          ],
          correct: "B"
        },
        {
          id: "clay",
          sol: "ES.5.d",
          sub: "ES.5.d.1",
          stem: "The change in the feldspar described in sentence 8 is an example of —",
          choices: [
            { letter: "A", text: "chemical weathering, which forms new minerals" },
            { letter: "B", text: "physical weathering by frost wedging" },
            { letter: "C", text: "erosion of grains by running water" },
            { letter: "D", text: "metamorphism by heat and pressure" }
          ],
          correct: "A"
        },
        {
          id: "sand-future",
          sol: "ES.5.b",
          sub: "ES.5.b.2",
          stem: "Suppose the sand on the sandbar is buried and cemented, then much later heated and squeezed without melting. It would most likely become —",
          choices: [
            { letter: "A", text: "shale, then slate" },
            { letter: "B", text: "limestone, then marble" },
            { letter: "C", text: "sandstone, then quartzite" },
            { letter: "D", text: "basalt, then greenstone" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
