/* SOL Lab Earth Science — Plate Tectonics (ES.7.a–c). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "tect-layer-chart",
      family: "TECT",
      title: "A chart of Earth's layers",
      kind: "Plate Tectonics · ES.7",
      blurb: "Five layers, their states and densities: read the chart from crust to center.",
      level: 1,
      passage: "<p>" + N(1) + "A class made a chart of Earth's layers, from the surface to the center. " + N(2) + "For each layer they listed its state of matter and its average density. " + N(3) + "Oceanic crust is thin and made of dense basalt, while continental crust is thicker and made of lighter granite. " + N(4) + "Both temperature and pressure increase steadily with depth.</p>" +
        "<table><tr><th>Layer</th><th>State</th><th>Density (g/cm³)</th></tr><tr><td>Continental crust</td><td>solid</td><td>2.7</td></tr><tr><td>Oceanic crust</td><td>solid</td><td>3.0</td></tr><tr><td>Mantle</td><td>solid rock that flows slowly</td><td>3.3–5.6</td></tr><tr><td>Outer core</td><td>liquid</td><td>9.9–12.2</td></tr><tr><td>Inner core</td><td>solid</td><td>12.8–13.1</td></tr></table>",
      claims: [
        {
          id: "liquid",
          sol: "ES.7.a",
          sub: "ES.7.a.1",
          stem: "According to the chart, which layer of Earth is liquid?",
          choices: [
            { letter: "A", text: "the mantle" },
            { letter: "B", text: "the inner core" },
            { letter: "C", text: "the outer core" },
            { letter: "D", text: "the oceanic crust" }
          ],
          correct: "C"
        },
        {
          id: "trend",
          sol: "ES.7.a",
          sub: "ES.7.a.3",
          stem: "Which conclusion is best supported by the chart?",
          choices: [
            { letter: "A", text: "Density increases from the crust toward Earth's center." },
            { letter: "B", text: "Every layer below the crust is liquid." },
            { letter: "C", text: "The crust is the densest layer because it is the coolest." },
            { letter: "D", text: "Density is about the same in every solid layer." }
          ],
          correct: "A"
        },
        {
          id: "inner",
          sol: "ES.7.a",
          sub: "ES.7.a.3",
          stem: "The inner core is hotter than the outer core, yet it is solid. Which inference based on sentence 4 best explains this?",
          choices: [
            { letter: "A", text: "Convection currents in the mantle keep the inner core cool." },
            { letter: "B", text: "The enormous pressure at the center keeps its iron solid." },
            { letter: "C", text: "The inner core is made of lighter material than the outer core." },
            { letter: "D", text: "Heat from the outer core cannot reach the inner core." }
          ],
          correct: "B"
        },
        {
          id: "collide",
          sol: "ES.7.b",
          sub: "ES.7.b.1",
          stem: "Based on the chart, when oceanic crust and continental crust collide, which process most likely occurs?",
          choices: [
            { letter: "A", text: "The continental crust sinks beneath the oceanic crust." },
            { letter: "B", text: "Both plates rise to form a mid-ocean ridge." },
            { letter: "C", text: "The two plates slide past each other with no sinking." },
            { letter: "D", text: "The oceanic crust sinks beneath the continental crust." }
          ],
          correct: "D"
        },
        {
          id: "convection",
          sol: "ES.7.a",
          sub: "ES.7.a.2",
          stem: "The slow circulation of mantle rock, in which hotter rock rises and cooler rock sinks, is called —",
          choices: [
            { letter: "A", text: "convection" },
            { letter: "B", text: "conduction" },
            { letter: "C", text: "subduction" },
            { letter: "D", text: "radiation" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "tect-mineral-quake",
      family: "TECT",
      title: "The 2011 Mineral earthquake",
      kind: "Plate Tectonics · ES.7",
      blurb: "A rare jolt in Louisa County, far from any plate boundary.",
      level: 1,
      passage: "<p>" + N(1) + "In August 2011, a magnitude 5.8 earthquake struck near the town of Mineral in Louisa County, Virginia. " + N(2) + "Its focus was about 6 km underground. " + N(3) + "Shaking was felt from Georgia to Canada. " + N(4) + "Virginia lies in the middle of the North American Plate, far from any plate boundary, so this was an <strong>intraplate</strong> earthquake. " + N(5) + "Geologists think it released stress along very old faults that formed when the Appalachian Mountains were built.</p>",
      claims: [
        {
          id: "epicenter",
          sol: "ES.7.b",
          sub: "ES.7.b.1",
          stem: "The point on Earth's surface directly above the focus described in sentence 2 is called the —",
          choices: [
            { letter: "A", text: "fault scarp" },
            { letter: "B", text: "hot spot" },
            { letter: "C", text: "epicenter" },
            { letter: "D", text: "seismic gap" }
          ],
          correct: "C"
        },
        {
          id: "magnitude",
          sol: "ES.7.b",
          sub: "ES.7.b.1",
          stem: "The magnitude of 5.8 in sentence 1 is a measure of the —",
          choices: [
            { letter: "A", text: "depth of the focus below the surface" },
            { letter: "B", text: "energy released by the earthquake" },
            { letter: "C", text: "distance at which the shaking was felt" },
            { letter: "D", text: "number of aftershocks that followed" }
          ],
          correct: "B"
        },
        {
          id: "chile",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "Earthquakes in western South America near Chile are far more frequent than in Virginia, and their foci range from shallow near the coast to about 600 km deep farther inland. Which conclusion best explains these data?",
          choices: [
            { letter: "A", text: "Chile lies above a subduction zone where an ocean plate sinks." },
            { letter: "B", text: "Chile sits on a mid-ocean ridge where two plates pull apart." },
            { letter: "C", text: "Chile sits over a hot spot in the middle of a single plate." },
            { letter: "D", text: "Chile lies on a transform fault where two plates slide past." }
          ],
          correct: "A"
        },
        {
          id: "oldfaults",
          sol: "ES.7.c",
          sub: "ES.7.c.1",
          stem: "According to sentence 5, the old faults beneath central Virginia most likely formed when —",
          choices: [
            { letter: "A", text: "the 2011 earthquake first cracked the crust" },
            { letter: "B", text: "ancient plate collisions pushed up the mountains" },
            { letter: "C", text: "a hot spot melted rock beneath Louisa County" },
            { letter: "D", text: "glaciers scraped across central Virginia" }
          ],
          correct: "B"
        },
        {
          id: "refute",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "A student claims the Mineral earthquake happened at a plate boundary beneath Louisa County. Which sentence gives the best evidence against this claim?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 2" },
            { letter: "C", text: "sentence 3" },
            { letter: "D", text: "sentence 4" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "tect-hawaii-chain",
      family: "TECT",
      title: "Islands over a hot spot",
      kind: "Plate Tectonics · ES.7",
      blurb: "Four Hawaiian islands, four ages: which way is the plate moving?",
      level: 1,
      passage: "<p>" + N(1) + "The Hawaiian Islands sit in the middle of the Pacific Plate, in a line from the Big Island (southeast) to Kauai (northwest). " + N(2) + "They formed over a <strong>hot spot</strong>, a plume of hot mantle rock that stays in nearly one place. " + N(3) + "Only the Big Island has active volcanoes today. " + N(4) + "The table lists the age of each island's oldest rock.</p>" +
        "<table><tr><th>Island</th><th>Distance from active volcanoes (km)</th><th>Age of oldest rock (million years)</th></tr><tr><td>Big Island</td><td>0</td><td>0.5</td></tr><tr><td>Maui</td><td>190</td><td>1.3</td></tr><tr><td>Oahu</td><td>360</td><td>3.4</td></tr><tr><td>Kauai</td><td>520</td><td>5.1</td></tr></table>",
      claims: [
        {
          id: "hotspot",
          sol: "ES.7.b",
          sub: "ES.7.b.1",
          stem: "According to sentence 2, a hot spot is —",
          choices: [
            { letter: "A", text: "a crack where two plates pull apart" },
            { letter: "B", text: "a place where one plate sinks under another" },
            { letter: "C", text: "a rising plume of hot rock beneath a plate" },
            { letter: "D", text: "a fault where two plates slide past each other" }
          ],
          correct: "C"
        },
        {
          id: "litho",
          sol: "ES.7.a",
          sub: "ES.7.a.1",
          stem: "The Pacific Plate is a piece of the lithosphere, which is made of —",
          choices: [
            { letter: "A", text: "the crust and the rigid top of the mantle" },
            { letter: "B", text: "the liquid outer core and the lower mantle" },
            { letter: "C", text: "the soft, slowly flowing asthenosphere" },
            { letter: "D", text: "the oceanic crust and the inner core" }
          ],
          correct: "A"
        },
        {
          id: "active",
          sol: "ES.7.b",
          sub: "ES.7.b.1",
          stem: "Why does only the Big Island have active volcanoes?",
          choices: [
            { letter: "A", text: "It is the oldest island in the chain." },
            { letter: "B", text: "It sits above the hot spot right now." },
            { letter: "C", text: "It lies on a convergent plate boundary." },
            { letter: "D", text: "It is the closest island to a mid-ocean ridge." }
          ],
          correct: "B"
        },
        {
          id: "direction",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "Based on the table and sentence 1, in which direction is the Pacific Plate moving over the hot spot?",
          choices: [
            { letter: "A", text: "toward the northwest" },
            { letter: "B", text: "toward the southeast" },
            { letter: "C", text: "toward the northeast" },
            { letter: "D", text: "toward the southwest" }
          ],
          correct: "A"
        },
        {
          id: "next",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "Which prediction is best supported by the data?",
          choices: [
            { letter: "A", text: "A new island will form northwest of Kauai." },
            { letter: "B", text: "Kauai will move back over the hot spot." },
            { letter: "C", text: "Oahu's volcanoes will become active again." },
            { letter: "D", text: "A new island will form southeast of the Big Island." }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "tect-continent-puzzle",
      family: "TECT",
      title: "Two continents, one puzzle",
      kind: "Plate Tectonics · ES.7",
      blurb: "Paper maps, a freshwater reptile and matching rock belts across the South Atlantic.",
      level: 1,
      passage: "<p>" + N(1) + "A class cut out paper maps of South America and Africa and fit them together like puzzle pieces. " + N(2) + "The fit was closest when they cut along the edge of the <strong>continental shelf</strong> instead of the shoreline. " + N(3) + "Next they marked where fossils of <em>Mesosaurus</em> have been found. " + N(4) + "This small reptile lived in fresh water about 280 million years ago, and its fossils occur only in southern Africa and eastern South America. " + N(5) + "The class also found that a belt of rock of the same type and age in Brazil lines up with a matching belt in West Africa. " + N(6) + "Today the South Atlantic Ocean, thousands of kilometers wide, separates the two continents.</p>",
      claims: [
        {
          id: "reptile",
          sol: "ES.7.c",
          sub: "ES.7.c.2",
          stem: "Why are the Mesosaurus fossils strong evidence that the two continents were once joined?",
          choices: [
            { letter: "A", text: "A small freshwater reptile could not have crossed a wide salty ocean." },
            { letter: "B", text: "Mesosaurus lived on every continent at the same time." },
            { letter: "C", text: "Reptile fossils form only where two continents touch each other." },
            { letter: "D", text: "Mesosaurus lived long after the Atlantic Ocean had opened." }
          ],
          correct: "A"
        },
        {
          id: "shelf",
          sol: "ES.7.c",
          sub: "ES.7.c.2",
          stem: "Which statement best explains why the fit improved when the class cut along the continental shelf?",
          choices: [
            { letter: "A", text: "Continental shelves are made of new oceanic crust from the ridge." },
            { letter: "B", text: "Shelf edges are straight lines, so any two continents fit along them." },
            { letter: "C", text: "The shelf edge is the real edge of the continent; shorelines shift with sea level." },
            { letter: "D", text: "Shorelines are much older than shelves, so they have drifted farther." }
          ],
          correct: "C"
        },
        {
          id: "atlantic",
          sol: "ES.7.c",
          sub: "ES.7.c.1",
          stem: "The South Atlantic Ocean in sentence 6 formed mainly by —",
          choices: [
            { letter: "A", text: "subduction as one plate sank beneath the other" },
            { letter: "B", text: "two plates sliding past each other along a fault" },
            { letter: "C", text: "rivers eroding a deep valley between the continents" },
            { letter: "D", text: "rifting and sea-floor spreading as the plates moved apart" }
          ],
          correct: "D"
        },
        {
          id: "ridge",
          sol: "ES.7.b",
          sub: "ES.7.b.1",
          stem: "A mid-ocean ridge runs down the middle of the Atlantic today. This ridge is a —",
          choices: [
            { letter: "A", text: "convergent boundary where old crust is destroyed" },
            { letter: "B", text: "divergent boundary where new oceanic crust forms" },
            { letter: "C", text: "transform boundary where crust is neither made nor lost" },
            { letter: "D", text: "hot spot in the middle of a single plate" }
          ],
          correct: "B"
        },
        {
          id: "drive",
          sol: "ES.7.a",
          sub: "ES.7.a.2",
          stem: "Scientists now explain that the continents move because —",
          choices: [
            { letter: "A", text: "they ride on plates moved by convection in the mantle" },
            { letter: "B", text: "they float on top of the liquid outer core" },
            { letter: "C", text: "ocean currents push against their coastlines" },
            { letter: "D", text: "Earth's spin flings them toward the equator" }
          ],
          correct: "A"
        },
        {
          id: "glacier",
          sol: "ES.7.c",
          sub: "ES.7.c.2",
          stem: "Which additional observation would give the strongest further support for the idea that the two continents were joined?",
          choices: [
            { letter: "A", text: "Both continents have large tropical rainforests today." },
            { letter: "B", text: "Matching ancient glacier deposits of the same age are found on both." },
            { letter: "C", text: "Large rivers on both continents empty into the Atlantic." },
            { letter: "D", text: "Both continents have earthquakes and active volcanoes." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "tect-wave-shadow",
      family: "TECT",
      title: "Where the S waves vanish",
      kind: "Plate Tectonics · ES.7",
      blurb: "Seismograph stations around the globe reveal a liquid layer deep inside Earth.",
      level: 2,
      passage: "<p>" + N(1) + "After a large earthquake, seismograph stations around the world record two kinds of waves that travel through Earth's interior. " + N(2) + "<strong>P waves</strong> are push-pull waves that can travel through solids, liquids and gases. " + N(3) + "<strong>S waves</strong> shake rock from side to side and can travel only through solids. " + N(4) + "The table shows what stations at different distances from the epicenter recorded, with distance measured as an angle around Earth's center. " + N(5) + "Between about 104° and 140°, few direct P waves arrive, because P waves bend when they enter the core.</p>" +
        "<table><tr><th>Distance from epicenter</th><th>P waves recorded?</th><th>S waves recorded?</th></tr><tr><td>30°</td><td>yes</td><td>yes</td></tr><tr><td>90°</td><td>yes</td><td>yes</td></tr><tr><td>120°</td><td>very weak</td><td>no</td></tr><tr><td>160°</td><td>yes</td><td>no</td></tr></table>",
      claims: [
        {
          id: "outercore",
          sol: "ES.7.a",
          sub: "ES.7.a.1",
          stem: "Earth's outer core is best described as —",
          choices: [
            { letter: "A", text: "solid iron and nickel under great pressure" },
            { letter: "B", text: "liquid iron and nickel" },
            { letter: "C", text: "solid rock that flows very slowly" },
            { letter: "D", text: "melted granite from the crust" }
          ],
          correct: "B"
        },
        {
          id: "sdata",
          sol: "ES.7.a",
          sub: "ES.7.a.3",
          stem: "Which conclusion is best supported by the S-wave data in the table?",
          choices: [
            { letter: "A", text: "A layer deep inside Earth is liquid, so S waves cannot cross it." },
            { letter: "B", text: "S waves are faster than P waves, so they reach far stations first." },
            { letter: "C", text: "Earth's interior is solid all the way to the center." },
            { letter: "D", text: "Stations past 90° are too far away to record any waves." }
          ],
          correct: "A"
        },
        {
          id: "station150",
          sol: "ES.7.a",
          sub: "ES.7.a.3",
          stem: "A new station is built 150° from the epicenter. Based on the table and sentence 5, it would most likely record —",
          choices: [
            { letter: "A", text: "both P waves and S waves" },
            { letter: "B", text: "S waves but no P waves" },
            { letter: "C", text: "P waves but no S waves" },
            { letter: "D", text: "neither P waves nor S waves" }
          ],
          correct: "C"
        },
        {
          id: "deepfocus",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "Another earthquake in the study had its focus 450 km deep, beneath a deep-ocean trench. This earthquake most likely occurred at a —",
          choices: [
            { letter: "A", text: "mid-ocean ridge where two plates pull apart" },
            { letter: "B", text: "transform fault where two plates slide past" },
            { letter: "C", text: "hot spot under the middle of a plate" },
            { letter: "D", text: "subduction zone where one plate sinks under another" }
          ],
          correct: "D"
        },
        {
          id: "belts",
          sol: "ES.7.c",
          sub: "ES.7.c.2",
          stem: "World maps show that most earthquakes occur in narrow belts along ridges, trenches and young mountain ranges. How does this pattern support the theory of plate tectonics?",
          choices: [
            { letter: "A", text: "Earthquakes are spread evenly, as expected if plates did not exist." },
            { letter: "B", text: "Most earthquakes happen where plates meet and move against each other." },
            { letter: "C", text: "Earthquakes build whole ridges and trenches in a single day." },
            { letter: "D", text: "Earthquakes happen only where the crust is thickest." }
          ],
          correct: "B"
        },
        {
          id: "heat",
          sol: "ES.7.a",
          sub: "ES.7.a.2",
          stem: "The heat that drives convection in the mantle comes mainly from —",
          choices: [
            { letter: "A", text: "heat left from Earth's formation and from radioactive decay" },
            { letter: "B", text: "sunlight absorbed by rocks and soil at the surface" },
            { letter: "C", text: "friction from tides rubbing against the ocean floor" },
            { letter: "D", text: "warm ocean currents flowing over the sea floor" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "tect-magnetic-stripes",
      family: "TECT",
      title: "Stripes on the sea floor",
      kind: "Plate Tectonics · ES.7",
      blurb: "A magnetometer survey and dated basalt across the Mid-Atlantic Ridge.",
      level: 2,
      passage: "<p>" + N(1) + "A research ship towed a magnetometer across the Mid-Atlantic Ridge from west to east. " + N(2) + "When lava cools at the ridge, magnetic minerals in the basalt line up with Earth's magnetic field, which has reversed many times. " + N(3) + "The survey found stripes of <strong>normal</strong> and <strong>reversed</strong> polarity running parallel to the ridge, and the pattern on the west side was a mirror image of the pattern on the east side. " + N(4) + "The crew also dated basalt from the sea floor at several distances from the ridge axis.</p>" +
        "<table><tr><th>Distance from ridge axis</th><th>Age of basalt (million years)</th></tr><tr><td>80 km west</td><td>4.0</td></tr><tr><td>40 km west</td><td>2.0</td></tr><tr><td>0 km (axis)</td><td>0</td></tr><tr><td>40 km east</td><td>2.0</td></tr><tr><td>80 km east</td><td>4.0</td></tr></table>",
      claims: [
        {
          id: "mirror",
          sol: "ES.7.c",
          sub: "ES.7.c.2",
          stem: "The mirror-image stripe pattern in sentence 3 is best explained by —",
          choices: [
            { letter: "A", text: "new crust forming at the ridge and moving away on both sides" },
            { letter: "B", text: "old crust sinking back into the mantle at the ridge" },
            { letter: "C", text: "the magnetic field staying the same through Earth's history" },
            { letter: "D", text: "sediment from the continents settling evenly on the sea floor" }
          ],
          correct: "A"
        },
        {
          id: "rate",
          sol: "ES.7.c",
          sub: "ES.7.c.1",
          stem: "Using the table, about how fast is the sea floor moving away from the ridge axis on each side?",
          choices: [
            { letter: "A", text: "0.2 cm per year" },
            { letter: "B", text: "2 cm per year" },
            { letter: "C", text: "20 cm per year" },
            { letter: "D", text: "40 cm per year" }
          ],
          correct: "B"
        },
        {
          id: "boundary",
          sol: "ES.7.b",
          sub: "ES.7.b.1",
          stem: "The Mid-Atlantic Ridge is an example of a —",
          choices: [
            { letter: "A", text: "convergent boundary between two oceanic plates" },
            { letter: "B", text: "transform boundary between two oceanic plates" },
            { letter: "C", text: "divergent boundary between two plates" },
            { letter: "D", text: "convergent boundary between two continents" }
          ],
          correct: "C"
        },
        {
          id: "km120",
          sol: "ES.7.c",
          sub: "ES.7.c.2",
          stem: "If the crew had dated basalt 120 km east of the ridge axis, its age would most likely be about —",
          choices: [
            { letter: "A", text: "2 million years" },
            { letter: "B", text: "4 million years" },
            { letter: "C", text: "6 million years" },
            { letter: "D", text: "12 million years" }
          ],
          correct: "C"
        },
        {
          id: "upwell",
          sol: "ES.7.a",
          sub: "ES.7.a.2",
          stem: "Which process in the mantle helps explain why the plates move apart at this ridge?",
          choices: [
            { letter: "A", text: "Hot mantle rock rises beneath the ridge as part of a convection current." },
            { letter: "B", text: "Cold mantle rock sinks beneath the ridge and drags the crust down." },
            { letter: "C", text: "The liquid outer core pushes the two plates apart from below." },
            { letter: "D", text: "Ocean water cools the crust at the ridge and makes it expand." }
          ],
          correct: "A"
        },
        {
          id: "divergent",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "Which set of observations would best show that a boundary is divergent rather than a subduction zone?",
          choices: [
            { letter: "A", text: "earthquakes that get deeper in one direction beneath a continent" },
            { letter: "B", text: "a deep trench beside a curved chain of volcanic islands" },
            { letter: "C", text: "a belt of high folded mountains with no volcanoes" },
            { letter: "D", text: "shallow earthquakes and young basalt along a central rift valley" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "tect-three-stations",
      family: "TECT",
      title: "Three stations, one epicenter",
      kind: "Plate Tectonics · ES.7",
      blurb: "S–P lags, three circles on a map, and a small quake in the Valley and Ridge.",
      level: 2,
      passage: "<p>" + N(1) + "A small earthquake shook the Valley and Ridge province of western Virginia, where the rock layers are folded and cut by old faults. " + N(2) + "Three seismograph stations, X, Y and Z, recorded it. " + N(3) + "At each station the P wave arrived first and the S wave arrived later. " + N(4) + "The longer the lag between the two arrivals, the farther the station was from the epicenter. " + N(5) + "Students used a travel-time graph to change each lag into a distance, shown in the table. " + N(6) + "On a map, they drew a circle around each station with a radius equal to its distance from the epicenter. " + N(7) + "The circles for Stations X and Y crossed at two places, point M and point N. " + N(8) + "The circle for Station Z passed through point N but not point M. " + N(9) + "The earthquake had a magnitude of 3.1, and few people felt it.</p>" +
        "<table><tr><th>Station</th><th>S–P lag (seconds)</th><th>Distance (km)</th></tr><tr><td>X</td><td>12</td><td>100</td></tr><tr><td>Y</td><td>20</td><td>165</td></tr><tr><td>Z</td><td>30</td><td>250</td></tr></table>",
      claims: [
        {
          id: "focus",
          sol: "ES.7.b",
          sub: "ES.7.b.1",
          stem: "The place underground where the rock first broke and the earthquake began is called the —",
          choices: [
            { letter: "A", text: "magnitude" },
            { letter: "B", text: "focus" },
            { letter: "C", text: "shadow zone" },
            { letter: "D", text: "hot spot" }
          ],
          correct: "B"
        },
        {
          id: "locate",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "Based on sentences 6 through 8, where was the epicenter?",
          choices: [
            { letter: "A", text: "at point M" },
            { letter: "B", text: "at point N" },
            { letter: "C", text: "at Station X, the closest station" },
            { letter: "D", text: "halfway between Stations X and Y" }
          ],
          correct: "B"
        },
        {
          id: "third",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "Why did the students need data from Station Z to locate the epicenter?",
          choices: [
            { letter: "A", text: "Station Z was the only station that recorded S waves." },
            { letter: "B", text: "Station Z was needed to measure the magnitude." },
            { letter: "C", text: "Two circles cross at two points; a third shows which is right." },
            { letter: "D", text: "Station Z was closest to the focus, so its lag was shortest." }
          ],
          correct: "C"
        },
        {
          id: "pfirst",
          sol: "ES.7.b",
          sub: "ES.7.b.1",
          stem: "According to sentence 3, the P wave reached each station first because P waves —",
          choices: [
            { letter: "A", text: "travel faster than S waves" },
            { letter: "B", text: "start closer to the station than S waves" },
            { letter: "C", text: "can travel only through liquid rock" },
            { letter: "D", text: "are released after the S waves" }
          ],
          correct: "A"
        },
        {
          id: "speedchange",
          sol: "ES.7.a",
          sub: "ES.7.a.3",
          stem: "Seismologists find that P waves speed up as they travel deeper into the mantle, then slow sharply when they enter the outer core. These changes are best explained by —",
          choices: [
            { letter: "A", text: "changes in the state and properties of rock with depth" },
            { letter: "B", text: "the mantle being liquid and the outer core being solid" },
            { letter: "C", text: "the waves losing energy the farther they travel" },
            { letter: "D", text: "the crust being thicker than the whole mantle" }
          ],
          correct: "A"
        },
        {
          id: "folds",
          sol: "ES.7.c",
          sub: "ES.7.c.1",
          stem: "The folded rock layers and old faults described in sentence 1 formed mainly when —",
          choices: [
            { letter: "A", text: "the Atlantic Ocean opened and stretched the crust" },
            { letter: "B", text: "a hot spot pushed the rock layers straight upward" },
            { letter: "C", text: "lava from the Mid-Atlantic Ridge flowed over them" },
            { letter: "D", text: "Africa collided with North America as Pangaea formed" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "tect-andes-section",
      family: "TECT",
      title: "A cross-section of the Andes",
      kind: "Plate Tectonics · ES.7",
      blurb: "Trench, sinking slab, deepening earthquakes and a line of explosive volcanoes.",
      level: 2,
      passage: "<p>" + N(1) + "A student drew a cross-section of the west coast of South America, from the Pacific Ocean on the left to the middle of the continent on the right. " + N(2) + "On the left, the Nazca Plate, made of oceanic crust, moves east toward South America at about 7 cm per year. " + N(3) + "It meets the South American Plate at a deep ocean <strong>trench</strong> just offshore. " + N(4) + "The student marked the foci of recent earthquakes: those near the trench are shallow, and they get deeper toward the east, reaching about 600 km below the surface. " + N(5) + "About 300 km east of the trench, a line of steep volcanoes rises along the Andes Mountains. " + N(6) + "These volcanoes erupt thick, sticky, gas-rich magma. " + N(7) + "Under both plates, the student shaded the <strong>asthenosphere</strong>, a hot layer of the upper mantle that flows slowly.</p>",
      claims: [
        {
          id: "classify",
          sol: "ES.7.b",
          sub: "ES.7.b.1",
          stem: "The boundary in this cross-section is best classified as —",
          choices: [
            { letter: "A", text: "a divergent boundary where two plates pull apart" },
            { letter: "B", text: "a convergent boundary where an ocean plate subducts" },
            { letter: "C", text: "a transform boundary where two plates slide past" },
            { letter: "D", text: "a convergent boundary where two continents collide" }
          ],
          correct: "B"
        },
        {
          id: "depths",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "The pattern of earthquake depths in sentence 4 is best explained by —",
          choices: [
            { letter: "A", text: "magma rising straight up from the outer core" },
            { letter: "B", text: "the two plates pulling apart beneath the Andes" },
            { letter: "C", text: "the Nazca Plate sinking at an angle beneath South America" },
            { letter: "D", text: "the South American Plate sinking west under the Nazca Plate" }
          ],
          correct: "C"
        },
        {
          id: "whysink",
          sol: "ES.7.a",
          sub: "ES.7.a.1",
          stem: "Why does the Nazca Plate sink beneath South America instead of the other way around?",
          choices: [
            { letter: "A", text: "Oceanic crust is denser than continental crust." },
            { letter: "B", text: "Oceanic crust is thicker than continental crust." },
            { letter: "C", text: "Continental crust is denser than oceanic crust." },
            { letter: "D", text: "The weight of ocean water pushes the plate down." }
          ],
          correct: "A"
        },
        {
          id: "astheno",
          sol: "ES.7.a",
          sub: "ES.7.a.1",
          stem: "The asthenosphere differs from the lithosphere above it because the asthenosphere —",
          choices: [
            { letter: "A", text: "is made of liquid iron and nickel" },
            { letter: "B", text: "is colder and more rigid" },
            { letter: "C", text: "is part of the continental crust" },
            { letter: "D", text: "is hot and soft enough to flow slowly" }
          ],
          correct: "D"
        },
        {
          id: "eruption",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "Hawaii's broad volcanoes erupt runny basalt lava that flows out quietly. Compared with them, the Andes volcanoes are most likely to —",
          choices: [
            { letter: "A", text: "erupt more explosively, because thick magma traps gas" },
            { letter: "B", text: "erupt more quietly, because thick magma flows easily" },
            { letter: "C", text: "build broad, gentle shield shapes from runny lava" },
            { letter: "D", text: "erupt the same way, because all magma is alike" }
          ],
          correct: "A"
        },
        {
          id: "consumed",
          sol: "ES.7.c",
          sub: "ES.7.c.1",
          stem: "At the rate in sentence 2, about how much Nazca Plate sea floor sinks into the trench in 1 million years?",
          choices: [
            { letter: "A", text: "7 km" },
            { letter: "B", text: "70 km" },
            { letter: "C", text: "700 km" },
            { letter: "D", text: "7,000 km" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "tect-four-sites",
      family: "TECT",
      title: "Four sites, four boundaries?",
      kind: "Plate Tectonics · ES.7",
      blurb: "Earthquakes, volcanoes and landforms at four mystery sites: name each boundary.",
      level: 3,
      passage: "<p>" + N(1) + "A geology class used world maps of earthquakes, volcanoes and landforms to compare four regions, labeled W, X, Y and Z. " + N(2) + "Their observations are summarized in the table. " + N(3) + "At Site W, GPS stations on opposite sides of a long valley on a continent are moving apart about 1 cm each year, and the valley floor is slowly sinking. " + N(4) + "At Site X, the deepest earthquakes occur farthest from the trench, beneath the islands. " + N(5) + "At Site Y, limestone containing fossils of sea animals is found near the tops of the highest peaks. " + N(6) + "At Site Z, a stream that crosses the fault has been offset sideways by about 100 m, and GPS shows the land on one side moving north past the land on the other.</p>" +
        "<table><tr><th>Site</th><th>Earthquakes</th><th>Volcanoes</th><th>Landform</th></tr><tr><td>W</td><td>shallow</td><td>basalt lava flows</td><td>rift valley with lakes</td></tr><tr><td>X</td><td>shallow to 600 km</td><td>explosive, on islands</td><td>trench beside an arc of islands</td></tr><tr><td>Y</td><td>shallow to medium</td><td>none</td><td>very high folded mountains</td></tr><tr><td>Z</td><td>shallow</td><td>none</td><td>long, straight fault</td></tr></table>",
      claims: [
        {
          id: "transform",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "Which site is most likely a transform boundary?",
          choices: [
            { letter: "A", text: "Site W" },
            { letter: "B", text: "Site X" },
            { letter: "C", text: "Site Y" },
            { letter: "D", text: "Site Z" }
          ],
          correct: "D"
        },
        {
          id: "islandarc",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "Site X is best classified as a boundary where —",
          choices: [
            { letter: "A", text: "two plates pull apart and new crust forms" },
            { letter: "B", text: "one oceanic plate sinks beneath another oceanic plate" },
            { letter: "C", text: "two continents collide and neither one sinks" },
            { letter: "D", text: "two plates slide past each other with no subduction" }
          ],
          correct: "B"
        },
        {
          id: "seafossils",
          sol: "ES.7.c",
          sub: "ES.7.c.1",
          stem: "The sea-animal fossils near the mountaintops at Site Y are best explained by —",
          choices: [
            { letter: "A", text: "sea-floor sediments squeezed and lifted when two continents collided" },
            { letter: "B", text: "sea level once rising higher than the tallest mountains on Earth" },
            { letter: "C", text: "lava from a hot spot carrying shells up to the peaks" },
            { letter: "D", text: "a rift valley at Site Y flooding with seawater" }
          ],
          correct: "A"
        },
        {
          id: "gpsmotion",
          sol: "ES.7.a",
          sub: "ES.7.a.2",
          stem: "The motion of the GPS stations at Site W is driven mainly by —",
          choices: [
            { letter: "A", text: "convection currents in the mantle that carry the plates" },
            { letter: "B", text: "the pull of the moon's gravity on the crust" },
            { letter: "C", text: "the spinning of the liquid outer core" },
            { letter: "D", text: "erosion that widens the valley floor" }
          ],
          correct: "A"
        },
        {
          id: "converge",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "Select TWO sites where the plates are moving toward each other.",
          choices: [
            { letter: "A", text: "Site W" },
            { letter: "B", text: "Site X" },
            { letter: "C", text: "Site Y" },
            { letter: "D", text: "Site Z" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "newocean",
          sol: "ES.7.c",
          sub: "ES.7.c.2",
          stem: "A student claims that Site W may one day become a new ocean basin. Which evidence best supports this claim?",
          choices: [
            { letter: "A", text: "Earthquakes at Site W happen only at shallow depths." },
            { letter: "B", text: "Site W lies far from any deep-ocean trench today." },
            { letter: "C", text: "Its sides are spreading apart as basalt fills its sinking floor." },
            { letter: "D", text: "Site W has no folded mountains or marine fossils." }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "tect-appalachian-story",
      family: "TECT",
      title: "The rise and fall of the Appalachians",
      kind: "Plate Tectonics · ES.7",
      blurb: "Three collisions, a supercontinent, a new ocean, and 200 million years of erosion.",
      level: 3,
      passage: "<p>" + N(1) + "The Appalachian Mountains stretch from Alabama to Newfoundland, and Virginia's Blue Ridge and Valley and Ridge provinces are part of them. " + N(2) + "Geologists have pieced together their history from rock layers, fossils and rock ages. " + N(3) + "Between about 460 and 270 million years ago, three collisions closed the ancient oceans that lay east of North America: first a chain of volcanic islands, then a small landmass, and finally Africa crashed into North America. " + N(4) + "Each collision folded and faulted the rock layers and pushed them westward, and the last one helped join the continents into the supercontinent <strong>Pangaea</strong>. " + N(5) + "At their peak, the Appalachians may have been as tall as the Himalayas are today. " + N(6) + "About 200 million years ago, Pangaea began to rift apart, and the Atlantic Ocean opened between North America and Africa. " + N(7) + "Basins that formed during this rifting, filled with red sandstone and shale, are found in Virginia's Piedmont. " + N(8) + "Since then, weathering and erosion have worn the Appalachians down to rounded ridges, most under 2,000 m high. " + N(9) + "Mountains of the same age and rock types as the Appalachians are found today in northwestern Africa and in Scotland and Norway. " + N(10) + "The Atlantic is still widening by about 2.5 cm per year at the Mid-Atlantic Ridge.</p>",
      claims: [
        {
          id: "built",
          sol: "ES.7.c",
          sub: "ES.7.c.1",
          stem: "According to sentences 3 and 4, the Appalachian Mountains were built mainly by —",
          choices: [
            { letter: "A", text: "plates pulling apart as the Atlantic Ocean opened" },
            { letter: "B", text: "collisions that closed an ocean and joined continents" },
            { letter: "C", text: "a hot spot that lifted the crust from below" },
            { letter: "D", text: "weathering and erosion carving deep valleys" }
          ],
          correct: "B"
        },
        {
          id: "joined",
          sol: "ES.7.c",
          sub: "ES.7.c.2",
          stem: "Which sentence gives the best evidence that North America and Africa were once joined?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 5" },
            { letter: "C", text: "sentence 8" },
            { letter: "D", text: "sentence 9" }
          ],
          correct: "D"
        },
        {
          id: "sequence",
          sol: "ES.7.c",
          sub: "ES.7.c.2",
          stem: "Which sequence of events is supported by the passage?",
          choices: [
            { letter: "A", text: "old oceans close → Pangaea forms → Atlantic opens → mountains wear down" },
            { letter: "B", text: "Atlantic opens → old oceans close → Pangaea forms → mountains wear down" },
            { letter: "C", text: "Pangaea forms → old oceans close → mountains wear down → Atlantic opens" },
            { letter: "D", text: "mountains wear down → Atlantic opens → Pangaea forms → old oceans close" }
          ],
          correct: "A"
        },
        {
          id: "riftbasins",
          sol: "ES.7.b",
          sub: "ES.7.b.2",
          stem: "The red sandstone basins in sentence 7 are evidence that Virginia once lay at which kind of plate boundary?",
          choices: [
            { letter: "A", text: "a divergent boundary, where a continent was pulled apart" },
            { letter: "B", text: "a convergent boundary, where an ocean plate subducted" },
            { letter: "C", text: "a transform boundary, where plates slid past each other" },
            { letter: "D", text: "no boundary at all, only a hot spot under the plate" }
          ],
          correct: "A"
        },
        {
          id: "force",
          sol: "ES.7.a",
          sub: "ES.7.a.2",
          stem: "Which process deep inside Earth supplied the force that moved the plates in these collisions?",
          choices: [
            { letter: "A", text: "the magnetic field produced in Earth's core" },
            { letter: "B", text: "mantle convection, with sinking plates pulling plates along" },
            { letter: "C", text: "weathering and erosion of the growing mountains" },
            { letter: "D", text: "the pull of the moon and the sun on the oceans" }
          ],
          correct: "B"
        },
        {
          id: "widen",
          sol: "ES.7.c",
          sub: "ES.7.c.1",
          stem: "At the rate in sentence 10, about how much wider will the Atlantic Ocean become in the next 4 million years?",
          choices: [
            { letter: "A", text: "1 km" },
            { letter: "B", text: "10 km" },
            { letter: "C", text: "100 km" },
            { letter: "D", text: "1,000 km" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "tect-drift-debate",
      family: "TECT",
      title: "Did the continents move?",
      kind: "Plate Tectonics · ES.7",
      blurb: "Land bridges or moving plates? Weigh fossils, coal, glacier scratches and sea-floor ages.",
      level: 3,
      passage: "<p>" + N(1) + "In a class debate, two students argued about whether the continents have moved. " + N(2) + "Student 1 said the continents have always been where they are now, and that the same fossils appear on different continents because animals and plants crossed land bridges that later sank into the sea. " + N(3) + "Student 2 said the continents were once joined in Pangaea and have since moved apart on slowly moving plates. " + N(4) + "The class then collected the evidence below.</p>" +
        "<ul><li>" + N(5) + "Fossils of the seed fern <em>Glossopteris</em>, a plant of cool, wet climates, are found in South America, Africa, India, Australia and Antarctica.</li>" +
        "<li>" + N(6) + "Thick layers of coal, which forms from the remains of swamp plants, are found in Antarctica.</li>" +
        "<li>" + N(7) + "Scratches cut by glaciers about 300 million years ago are found in southern Africa, India and South America, some in places that are tropical today.</li>" +
        "<li>" + N(8) + "Drilling shows that the oldest sea floor is about 180 million years old, while the oldest continental rocks are about 4 billion years old.</li>" +
        "<li>" + N(9) + "Sea-floor rock is youngest at the mid-ocean ridges and gets older with distance from them.</li>" +
        "<li>" + N(10) + "Sonar surveys and drilling in the South Atlantic found oceanic basalt on the sea floor but no sunken blocks of continental rock.</li></ul>",
      claims: [
        {
          id: "bridges",
          sol: "ES.7.c",
          sub: "ES.7.c.2",
          stem: "Which sentence gives the strongest evidence against Student 1's land-bridge explanation?",
          choices: [
            { letter: "A", text: "sentence 5" },
            { letter: "B", text: "sentence 6" },
            { letter: "C", text: "sentence 9" },
            { letter: "D", text: "sentence 10" }
          ],
          correct: "D"
        },
        {
          id: "coal",
          sol: "ES.7.c",
          sub: "ES.7.c.2",
          stem: "The coal described in sentence 6 best supports which conclusion?",
          choices: [
            { letter: "A", text: "Antarctica was once in a warmer place where swamp plants grew." },
            { letter: "B", text: "Antarctica's ice slowly turned frozen seawater into coal." },
            { letter: "C", text: "Coal forms best in cold, icy climates like Antarctica's today." },
            { letter: "D", text: "Swamp plants floated to Antarctica from other continents." }
          ],
          correct: "A"
        },
        {
          id: "spreading",
          sol: "ES.7.c",
          sub: "ES.7.c.2",
          stem: "Select TWO sentences that best support sea-floor spreading, the idea that new sea floor forms at ridges and old sea floor is later recycled into the mantle.",
          choices: [
            { letter: "A", text: "sentence 5" },
            { letter: "B", text: "sentence 7" },
            { letter: "C", text: "sentence 8" },
            { letter: "D", text: "sentence 9" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "mechanism",
          sol: "ES.7.a",
          sub: "ES.7.a.2",
          stem: "Student 2's idea needs a force that moves the plates. Today scientists explain that plates move mainly because —",
          choices: [
            { letter: "A", text: "tides drag the continents through the solid sea floor" },
            { letter: "B", text: "Earth's spin flings the continents toward the equator" },
            { letter: "C", text: "mantle convection carries them and sinking edges pull them" },
            { letter: "D", text: "sunlight heats the crust near the equator so it expands" }
          ],
          correct: "C"
        },
        {
          id: "recycle",
          sol: "ES.7.b",
          sub: "ES.7.b.1",
          stem: "Old sea floor is recycled into the mantle where it sinks at a —",
          choices: [
            { letter: "A", text: "mid-ocean ridge, where two plates pull apart" },
            { letter: "B", text: "deep-ocean trench, where one plate subducts" },
            { letter: "C", text: "rift valley, where a continent splits open" },
            { letter: "D", text: "hot spot, where a plume melts the crust" }
          ],
          correct: "B"
        },
        {
          id: "mantle",
          sol: "ES.7.a",
          sub: "ES.7.a.1",
          stem: "The mantle, into which old sea floor sinks, is best described as —",
          choices: [
            { letter: "A", text: "solid rock that can flow very slowly over long periods" },
            { letter: "B", text: "a layer of liquid iron and nickel around the core" },
            { letter: "C", text: "a thin layer of granite and basalt under the oceans" },
            { letter: "D", text: "an ocean of melted rock just beneath the crust" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
