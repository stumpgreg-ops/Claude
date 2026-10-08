/* SOL Lab Earth Science — Earth History (ES.9.a–d). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "hist-museum-drawer",
      family: "HIST",
      title: "Five fossils in a museum drawer",
      kind: "Earth History · ES.9",
      blurb: "Amber, a mold, a cast, a carbon film and a trail of footprints: how did each one form?",
      level: 1,
      passage: "<p>" + N(1) + "A drawer holds five fossils from sedimentary rock. " + N(2) + "Specimen 1 is an ant trapped in <strong>amber</strong>, hardened tree resin. " + N(3) + "Specimen 2 is a shell-shaped hollow in sandstone, called a <strong>mold</strong>. " + N(4) + "Specimen 3 is a stone copy of a clam, made of minerals that filled a mold. " + N(5) + "Specimen 4 is a thin black outline of a fern on shale. " + N(6) + "Specimen 5 is a trail of three-toed footprints in mudstone.</p>",
      claims: [
        {
          id: "trace",
          sol: "ES.9.a",
          sub: "ES.9.a.1",
          stem: "Specimen 5 is best classified as —",
          choices: [
            { letter: "A", text: "a trace fossil that records an animal's activity" },
            { letter: "B", text: "a carbon film left behind by the animal's body" },
            { letter: "C", text: "a cast formed when minerals filled an empty shell" },
            { letter: "D", text: "an original remain preserved without any change" }
          ],
          correct: "A"
        },
        {
          id: "cast",
          sol: "ES.9.a",
          sub: "ES.9.a.1",
          stem: "Which statement best describes how Specimen 3 formed?",
          choices: [
            { letter: "A", text: "The clam was squeezed flat, leaving a thin layer of carbon." },
            { letter: "B", text: "Tree resin flowed over the clam and hardened around it." },
            { letter: "C", text: "Minerals from groundwater filled the hollow left by the clam." },
            { letter: "D", text: "The clam was frozen in ice before its shell could decay." }
          ],
          correct: "C"
        },
        {
          id: "sedimentary",
          sol: "ES.9.a",
          sub: "ES.9.a.1",
          stem: "Which statement best explains why fossils like these are found mostly in sedimentary rock?",
          choices: [
            { letter: "A", text: "Igneous rock forms only at the surface, where few animals lived." },
            { letter: "B", text: "Sedimentary rock is the only rock type that contains minerals." },
            { letter: "C", text: "The heat that forms metamorphic rock helps preserve soft parts." },
            { letter: "D", text: "Sediment can bury remains without melting or crushing them." }
          ],
          correct: "D"
        },
        {
          id: "mudflat",
          sol: "ES.9.a",
          sub: "ES.9.a.2",
          stem: "Specimen 5 suggests that when the tracks were made, the area was most likely —",
          choices: [
            { letter: "A", text: "the floor of a deep ocean far from any shore" },
            { letter: "B", text: "a stretch of soft, wet mud an animal could cross" },
            { letter: "C", text: "a bare surface of hard granite bedrock" },
            { letter: "D", text: "a thick sheet of glacial ice covering the land" }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "ES.9.b",
          sub: "ES.9.b.3",
          stem: "Specimens 4 and 5 came from the same cliff. The fern shale lies directly beneath the mudstone with the tracks, and the layers have never been overturned. Which conclusion is best supported?",
          choices: [
            { letter: "A", text: "The fern was buried before the tracks were made." },
            { letter: "B", text: "The tracks were made before the fern was buried." },
            { letter: "C", text: "The fern and the tracks must be exactly the same age." },
            { letter: "D", text: "The fern and the tracks cannot be put in any order." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "hist-frozen-mammoth",
      family: "HIST",
      title: "A mammoth in the permafrost",
      kind: "Earth History · ES.9",
      blurb: "Skin, hair and a last meal, plus a carbon-14 clock.",
      level: 1,
      passage: "<p>" + N(1) + "Workers digging frozen ground in Siberia found a young woolly mammoth with its skin, hair and stomach contents in place. " + N(2) + "Fossils in which the actual tissue survives are called <strong>original remains</strong>. " + N(3) + "Its stomach held grasses and small flowering plants. " + N(4) + "A lab measured <strong>carbon-14</strong> in a hair sample; carbon-14 has a half-life of 5,730 years. " + N(5) + "The hair held 25% of the carbon-14 it had when the mammoth died.</p>",
      claims: [
        {
          id: "ice",
          sol: "ES.9.a",
          sub: "ES.9.a.1",
          stem: "Which statement best explains why the mammoth's skin and hair were preserved?",
          choices: [
            { letter: "A", text: "Minerals replaced the tissue one cell at a time." },
            { letter: "B", text: "Freezing slowed the bacteria that cause decay." },
            { letter: "C", text: "The body was pressed into a thin film of carbon." },
            { letter: "D", text: "Tree resin sealed the body away from the air." }
          ],
          correct: "B"
        },
        {
          id: "age",
          sol: "ES.9.b",
          sub: "ES.9.b.2",
          stem: "Based on sentences 4 and 5, about how long ago did the mammoth die?",
          choices: [
            { letter: "A", text: "2,865 years ago" },
            { letter: "B", text: "5,730 years ago" },
            { letter: "C", text: "11,460 years ago" },
            { letter: "D", text: "22,920 years ago" }
          ],
          correct: "C"
        },
        {
          id: "dinosaur",
          sol: "ES.9.b",
          sub: "ES.9.b.1",
          stem: "Carbon-14 could NOT be used to find the age of a 70-million-year-old dinosaur bone because —",
          choices: [
            { letter: "A", text: "dinosaur bones never contained any carbon atoms" },
            { letter: "B", text: "carbon-14 decays faster in bone than it does in hair" },
            { letter: "C", text: "the half-life of carbon-14 grows longer over time" },
            { letter: "D", text: "nearly all of its carbon-14 would have decayed long ago" }
          ],
          correct: "D"
        },
        {
          id: "climate",
          sol: "ES.9.a",
          sub: "ES.9.a.2",
          stem: "The mammoth's thick woolly hair is evidence that it lived in —",
          choices: [
            { letter: "A", text: "a cold climate with long winters" },
            { letter: "B", text: "a warm, humid rain forest" },
            { letter: "C", text: "a shallow tropical sea" },
            { letter: "D", text: "a hot desert with few plants" }
          ],
          correct: "A"
        },
        {
          id: "diet",
          sol: "ES.9.a",
          sub: "ES.9.a.2",
          stem: "Which inference is best supported by the stomach contents described in sentence 3?",
          choices: [
            { letter: "A", text: "The mammoth ate mainly fish caught in cold rivers." },
            { letter: "B", text: "The land nearby was open, with low-growing plants." },
            { letter: "C", text: "Thick forests of tall trees covered the whole region." },
            { letter: "D", text: "The mammoth went many weeks without eating anything." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "hist-index-fossil-table",
      family: "HIST",
      title: "Choosing an index fossil",
      kind: "Earth History · ES.9",
      blurb: "Four species, four ranges in space and time: which one dates a rock layer best?",
      level: 1,
      passage: "<p>" + N(1) + "A geologist compared four fossil species to decide which would make the best <strong>index fossil</strong>. " + N(2) + "The table shows where each species has been found and when it lived. " + N(3) + "Later, in Virginia's Valley and Ridge, she found trilobite X and brachiopod Y together in one Ordovician limestone layer.</p>" +
        "<table><tr><th>Species</th><th>Where found</th><th>Lived (million years ago)</th></tr><tr><td>W, a snail</td><td>one small basin in Asia</td><td>452–450</td></tr><tr><td>X, a trilobite</td><td>every continent</td><td>462–456</td></tr><tr><td>Y, a brachiopod</td><td>eastern North America</td><td>459–450</td></tr><tr><td>Z, a crinoid</td><td>every continent</td><td>470–420</td></tr></table>",
      claims: [
        {
          id: "best",
          sol: "ES.9.b",
          sub: "ES.9.b.1",
          stem: "Which species in the table would make the best index fossil?",
          choices: [
            { letter: "A", text: "Species W" },
            { letter: "B", text: "Species X" },
            { letter: "C", text: "Species Y" },
            { letter: "D", text: "Species Z" }
          ],
          correct: "B"
        },
        {
          id: "traits",
          sol: "ES.9.b",
          sub: "ES.9.b.1",
          stem: "An index fossil is most useful for dating rock layers when the species —",
          choices: [
            { letter: "A", text: "lived for a long time in one small area" },
            { letter: "B", text: "lived for a long time all over the world" },
            { letter: "C", text: "lived for a short time in one small area" },
            { letter: "D", text: "lived for a short time all over the world" }
          ],
          correct: "D"
        },
        {
          id: "overlap",
          sol: "ES.9.c",
          sub: "ES.9.c.2",
          stem: "Using the table, the limestone layer in sentence 3 most likely formed between —",
          choices: [
            { letter: "A", text: "462 and 450 million years ago" },
            { letter: "B", text: "456 and 450 million years ago" },
            { letter: "C", text: "459 and 456 million years ago" },
            { letter: "D", text: "470 and 420 million years ago" }
          ],
          correct: "C"
        },
        {
          id: "era",
          sol: "ES.9.d",
          sub: "ES.9.d.1",
          stem: "The Ordovician limestone in sentence 3 formed during which part of the geologic time scale?",
          choices: [
            { letter: "A", text: "the Paleozoic Era" },
            { letter: "B", text: "the Mesozoic Era" },
            { letter: "C", text: "the Cenozoic Era" },
            { letter: "D", text: "Precambrian time" }
          ],
          correct: "A"
        },
        {
          id: "sea",
          sol: "ES.9.d",
          sub: "ES.9.d.2",
          stem: "Trilobites and brachiopods lived only in the sea. Finding them in this limestone suggests that during the Ordovician, the Valley and Ridge was —",
          choices: [
            { letter: "A", text: "a high, dry plateau far from any coast" },
            { letter: "B", text: "covered by a warm, shallow sea" },
            { letter: "C", text: "buried under a thick sheet of glacial ice" },
            { letter: "D", text: "a desert of drifting sand dunes" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "hist-tilted-roadcut",
      family: "HIST",
      title: "Four layers in a road cut",
      kind: "Earth History · ES.9",
      blurb: "Ferns below, corals above, and the whole stack tilted: read the layers in order.",
      level: 1,
      passage: "<p>" + N(1) + "A road cut in western Virginia exposes four layers of sedimentary rock, labeled from bottom to top. " + N(2) + "Layer A is sandstone with ripple marks. " + N(3) + "Layer B is dark shale holding thin black outlines of fern leaves. " + N(4) + "Layer C is limestone packed with fossil corals and brachiopods. " + N(5) + "Layer D is sandstone with no fossils. " + N(6) + "All four layers are now tilted about 30 degrees, but none of them has been overturned. " + N(7) + "A student identifies the corals in Layer C as a species known only from rocks of the Silurian Period.</p>",
      claims: [
        {
          id: "oldest",
          sol: "ES.9.b",
          sub: "ES.9.b.1",
          stem: "Which layer is the oldest, and why?",
          choices: [
            { letter: "A", text: "Layer D, because it is at the top of the stack" },
            { letter: "B", text: "Layer C, because it holds the most fossils" },
            { letter: "C", text: "Layer A, because it is at the bottom of the stack" },
            { letter: "D", text: "Layer B, because shale takes the longest to form" }
          ],
          correct: "C"
        },
        {
          id: "film",
          sol: "ES.9.a",
          sub: "ES.9.a.1",
          stem: "The fern fossils in Layer B are best described as —",
          choices: [
            { letter: "A", text: "carbon films left after the leaves were buried and pressed" },
            { letter: "B", text: "trace fossils made by animals walking across the mud" },
            { letter: "C", text: "petrified wood in which minerals replaced the cells" },
            { letter: "D", text: "original remains kept unchanged by freezing in ice" }
          ],
          correct: "A"
        },
        {
          id: "coral",
          sol: "ES.9.a",
          sub: "ES.9.a.2",
          stem: "The fossils in Layer C show that when it formed, this area was most likely —",
          choices: [
            { letter: "A", text: "a cold, dark ocean trench" },
            { letter: "B", text: "a freshwater swamp forest" },
            { letter: "C", text: "a dry, windy desert basin" },
            { letter: "D", text: "a warm, shallow sea" }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "ES.9.a",
          sub: "ES.9.a.2",
          stem: "Which change in the environment is best supported by the fossils from Layer B up to Layer C?",
          choices: [
            { letter: "A", text: "A shallow sea dried up and became a forest." },
            { letter: "B", text: "Land with plants was flooded by the sea." },
            { letter: "C", text: "A glacier spread over a tropical swamp." },
            { letter: "D", text: "A volcano buried a living coral reef." }
          ],
          correct: "B"
        },
        {
          id: "tilt",
          sol: "ES.9.b",
          sub: "ES.9.b.3",
          stem: "Which statement best explains when the tilting in sentence 6 happened?",
          choices: [
            { letter: "A", text: "After all four layers formed, since sediment settles in flat layers" },
            { letter: "B", text: "Before Layer A formed, since the bottom layer is always the oldest" },
            { letter: "C", text: "While Layer C formed, since corals can only grow on steep slopes" },
            { letter: "D", text: "Never, since the layers were laid down at a 30-degree angle" }
          ],
          correct: "A"
        },
        {
          id: "silurian",
          sol: "ES.9.d",
          sub: "ES.9.d.1",
          stem: "Based on sentence 7, Layer C formed during the —",
          choices: [
            { letter: "A", text: "Cenozoic Era" },
            { letter: "B", text: "Mesozoic Era" },
            { letter: "C", text: "Precambrian" },
            { letter: "D", text: "Paleozoic Era" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "hist-candy-half-life",
      family: "HIST",
      title: "Shaking out a half-life",
      kind: "Earth History · ES.9",
      blurb: "A box of candies models decay; then a granite and a dike get real ages.",
      level: 2,
      passage: "<p>" + N(1) + "To model radioactive decay, a class put 200 candies, printed side up, in a covered box. " + N(2) + "Each candy stood for an atom of a <strong>parent isotope</strong>. " + N(3) + "After each shake, candies that landed printed side down counted as decayed and were removed. " + N(4) + "The table shows the results. " + N(5) + "Next the class applied the idea to real rock: potassium-40 decays to argon-40 with a half-life of 1.3 billion years. " + N(6) + "A granite holds 25% of its original potassium-40, and a basalt dike that cuts through the granite holds 50%. " + N(7) + "A sandstone layer rests on an eroded surface across the tops of both the granite and the dike.</p>" +
        "<table><tr><th>Shake</th><th>Candies left</th></tr><tr><td>0</td><td>200</td></tr><tr><td>1</td><td>104</td></tr><tr><td>2</td><td>51</td></tr><tr><td>3</td><td>27</td></tr><tr><td>4</td><td>12</td></tr></table>",
      claims: [
        {
          id: "shake",
          sol: "ES.9.b",
          sub: "ES.9.b.1",
          stem: "In this model, each shake of the box represents —",
          choices: [
            { letter: "A", text: "the total age of the rock" },
            { letter: "B", text: "one half-life of the isotope" },
            { letter: "C", text: "a single atom of daughter isotope" },
            { letter: "D", text: "the mass of the parent sample" }
          ],
          correct: "B"
        },
        {
          id: "predict",
          sol: "ES.9.b",
          sub: "ES.9.b.2",
          stem: "If the class shook the box a fifth time, about how many candies would most likely remain?",
          choices: [
            { letter: "A", text: "about 6" },
            { letter: "B", text: "about 12" },
            { letter: "C", text: "about 24" },
            { letter: "D", text: "none at all" }
          ],
          correct: "A"
        },
        {
          id: "granite",
          sol: "ES.9.b",
          sub: "ES.9.b.2",
          stem: "Based on sentences 5 and 6, how old is the granite?",
          choices: [
            { letter: "A", text: "0.65 billion years" },
            { letter: "B", text: "1.3 billion years" },
            { letter: "C", text: "2.6 billion years" },
            { letter: "D", text: "3.9 billion years" }
          ],
          correct: "C"
        },
        {
          id: "consistent",
          sol: "ES.9.c",
          sub: "ES.9.c.2",
          stem: "Which statement best evaluates the dike's radiometric age together with the cross-cutting evidence in sentence 6?",
          choices: [
            { letter: "A", text: "The dike is 2.6 billion years old, the same age as the granite it cuts." },
            { letter: "B", text: "The dike is older than the granite, since it holds more potassium-40." },
            { letter: "C", text: "The ages conflict, since a rock that cuts another must be the older one." },
            { letter: "D", text: "The dike is 1.3 billion years old, which fits because it cuts the granite." }
          ],
          correct: "D"
        },
        {
          id: "sandstone",
          sol: "ES.9.c",
          sub: "ES.9.c.2",
          stem: "Based on sentences 5 through 7, the sandstone layer must be —",
          choices: [
            { letter: "A", text: "younger than 1.3 billion years" },
            { letter: "B", text: "older than 2.6 billion years" },
            { letter: "C", text: "between 1.3 and 2.6 billion years old" },
            { letter: "D", text: "exactly 1.3 billion years old" }
          ],
          correct: "A"
        },
        {
          id: "precambrian",
          sol: "ES.9.d",
          sub: "ES.9.d.1",
          stem: "A rock that formed 2.6 billion years ago belongs to which division of the geologic time scale?",
          choices: [
            { letter: "A", text: "the Cenozoic Era" },
            { letter: "B", text: "Precambrian time" },
            { letter: "C", text: "the Mesozoic Era" },
            { letter: "D", text: "the Paleozoic Era" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "hist-culpeper-tracks",
      family: "HIST",
      title: "Tracks in the Culpeper Basin",
      kind: "Earth History · ES.9",
      blurb: "Red mudstone, mud cracks and dinosaur footprints in a Piedmont quarry.",
      level: 2,
      passage: "<p>" + N(1) + "In a quarry in the Culpeper Basin of northern Virginia, students examined red shale and sandstone from the late Triassic Period. " + N(2) + "Some layers show mud cracks and ripple marks, and one surface preserves three-toed dinosaur footprints. " + N(3) + "The basin formed when Earth's crust in this region was stretched and a long block dropped down along faults. " + N(4) + "Streams and lakes then filled the basin with sediment. " + N(5) + "Later, magma pushed up through the layers and cooled into a dark diabase dike, which radiometric dating shows is about 200 million years old.</p>",
      claims: [
        {
          id: "preserve",
          sol: "ES.9.a",
          sub: "ES.9.a.1",
          stem: "Which sequence best explains how the footprints were preserved?",
          choices: [
            { letter: "A", text: "A dinosaur stepped in soft mud, the mud firmed up, and new sediment buried it." },
            { letter: "B", text: "Minerals slowly replaced the bones of the dinosaur's feet, one cell at a time." },
            { letter: "C", text: "The dinosaur's feet froze in ice, and the ice later melted away from them." },
            { letter: "D", text: "Tree resin filled each footprint and hardened into a clear piece of amber." }
          ],
          correct: "A"
        },
        {
          id: "mudcracks",
          sol: "ES.9.a",
          sub: "ES.9.a.2",
          stem: "Taken together, the mud cracks and footprints suggest that this place was once —",
          choices: [
            { letter: "A", text: "the floor of a deep ocean basin" },
            { letter: "B", text: "a valley filled by a thick glacier" },
            { letter: "C", text: "a muddy lakeshore that sometimes dried out" },
            { letter: "D", text: "a lava field beside an active volcano" }
          ],
          correct: "C"
        },
        {
          id: "triassic",
          sol: "ES.9.d",
          sub: "ES.9.d.1",
          stem: "The Triassic Period is the first period of the —",
          choices: [
            { letter: "A", text: "Paleozoic Era, when trilobites first appeared" },
            { letter: "B", text: "Mesozoic Era, when dinosaurs first appeared" },
            { letter: "C", text: "Cenozoic Era, when humans first appeared" },
            { letter: "D", text: "Precambrian, when bacteria first appeared" }
          ],
          correct: "B"
        },
        {
          id: "dikeage",
          sol: "ES.9.c",
          sub: "ES.9.c.2",
          stem: "Based on sentences 1 and 5, the footprint layers are best described as —",
          choices: [
            { letter: "A", text: "younger than 200 million years, since the dike lies below them" },
            { letter: "B", text: "exactly 200 million years old, since the dike touches them" },
            { letter: "C", text: "impossible to date, since sedimentary rock has no age at all" },
            { letter: "D", text: "older than 200 million years, since the dike cuts through them" }
          ],
          correct: "D"
        },
        {
          id: "methods",
          sol: "ES.9.c",
          sub: "ES.9.c.1",
          stem: "Which statement correctly compares the two ways the quarry rocks were dated?",
          choices: [
            { letter: "A", text: "Cross-cutting gave the dike an age in years; radiometric dating gave only the order." },
            { letter: "B", text: "Radiometric dating gave the dike an age in years; cross-cutting gave only the order." },
            { letter: "C", text: "Both methods gave only the order of events, never an age measured in years." },
            { letter: "D", text: "Both methods worked by measuring isotopes left inside the dinosaur footprints." }
          ],
          correct: "B"
        },
        {
          id: "rifting",
          sol: "ES.9.d",
          sub: "ES.9.d.2",
          stem: "Which event in Virginia's geologic history best explains how the basin in sentence 3 formed?",
          choices: [
            { letter: "A", text: "the breakup of Pangaea, when eastern North America was pulled apart" },
            { letter: "B", text: "the continental collision that pushed up the Appalachian Mountains" },
            { letter: "C", text: "the asteroid impact that made the Chesapeake Bay crater" },
            { letter: "D", text: "the ice-age glaciers that carved valleys across the Piedmont" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "hist-valley-quarry",
      family: "HIST",
      title: "Sea fossils in the Shenandoah Valley",
      kind: "Earth History · ES.9",
      blurb: "Tilted limestone full of trilobites, capped by flat river gravel.",
      level: 2,
      passage: "<p>" + N(1) + "A class visited a limestone quarry in the Shenandoah Valley, part of Virginia's Valley and Ridge province. " + N(2) + "The gray limestone layers are not flat; they tilt steeply toward the east. " + N(3) + "In the limestone the students found trilobites, brachiopod shells and stem pieces of crinoids, all animals that lived only in the sea. " + N(4) + "Their guide explained that the limestone formed during the Cambrian and Ordovician Periods. " + N(5) + "Near the top of the quarry, the tilted layers end sharply at a wavy, eroded surface. " + N(6) + "Resting on that surface is a flat layer of rounded river gravel that is only a few million years old. " + N(7) + "The guide pointed out that the rock record between the limestone and the gravel is missing, so hundreds of millions of years are not shown in the quarry wall.</p>",
      claims: [
        {
          id: "sea",
          sol: "ES.9.a",
          sub: "ES.9.a.2",
          stem: "Which conclusion about the Shenandoah Valley is best supported by the fossils in sentence 3?",
          choices: [
            { letter: "A", text: "Sea animals once crawled inland to live on dry ground." },
            { letter: "B", text: "The area was once covered by a sea." },
            { letter: "C", text: "Rivers recently carried the shells here from the Atlantic." },
            { letter: "D", text: "The animals lived in caves inside the limestone." }
          ],
          correct: "B"
        },
        {
          id: "horizontal",
          sol: "ES.9.b",
          sub: "ES.9.b.1",
          stem: "According to the principle of original horizontality, the limestone layers —",
          choices: [
            { letter: "A", text: "were deposited flat and tilted later" },
            { letter: "B", text: "were deposited at today's steep angle" },
            { letter: "C", text: "are younger than the gravel above them" },
            { letter: "D", text: "formed from lava that flowed downhill" }
          ],
          correct: "A"
        },
        {
          id: "unconformity",
          sol: "ES.9.b",
          sub: "ES.9.b.1",
          stem: "The wavy surface described in sentences 5 through 7 is best identified as —",
          choices: [
            { letter: "A", text: "a fault, where blocks of rock slid past each other" },
            { letter: "B", text: "a dike, where magma cut across the older layers" },
            { letter: "C", text: "an unconformity, a gap where rock was eroded away" },
            { letter: "D", text: "a fossil bed, where the most shells piled up" }
          ],
          correct: "C"
        },
        {
          id: "sequence",
          sol: "ES.9.b",
          sub: "ES.9.b.3",
          stem: "Which sequence of events, from first to last, best explains the quarry wall?",
          choices: [
            { letter: "A", text: "layers tilted, limestone deposited, gravel deposited, erosion" },
            { letter: "B", text: "limestone deposited, gravel deposited, layers tilted, erosion" },
            { letter: "C", text: "gravel deposited, limestone deposited, erosion, layers tilted" },
            { letter: "D", text: "limestone deposited, layers tilted, erosion, gravel deposited" }
          ],
          correct: "D"
        },
        {
          id: "cambrian",
          sol: "ES.9.d",
          sub: "ES.9.d.1",
          stem: "The Cambrian and Ordovician Periods come at the start of the —",
          choices: [
            { letter: "A", text: "Paleozoic Era, right after Precambrian time" },
            { letter: "B", text: "Mesozoic Era, the age of the dinosaurs" },
            { letter: "C", text: "Cenozoic Era, the age of the mammals" },
            { letter: "D", text: "Precambrian, before any life existed" }
          ],
          correct: "A"
        },
        {
          id: "tilting",
          sol: "ES.9.d",
          sub: "ES.9.d.2",
          stem: "Which event in Virginia's history most likely tilted the limestone layers?",
          choices: [
            { letter: "A", text: "the asteroid impact that formed the Chesapeake Bay crater" },
            { letter: "B", text: "the stretching of crust that opened the Triassic basins" },
            { letter: "C", text: "the slow rise of sea level across the Coastal Plain" },
            { letter: "D", text: "the collision of continents that built the Appalachians" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "hist-york-river-cliffs",
      family: "HIST",
      title: "Shells and shark teeth on the York River",
      kind: "Earth History · ES.9",
      blurb: "Virginia's state fossil, whale bone and a buried crater under the Coastal Plain.",
      level: 2,
      passage: "<p>" + N(1) + "Along the York River in Virginia's Coastal Plain, cliffs about 15 meters high expose layers of loose sand and clay. " + N(2) + "A student team mapped three units, from bottom to top. " + N(3) + "Unit 1, at the water's edge, is gray clay with shark teeth and pieces of whale bone. " + N(4) + "Unit 2 is tan sand packed with large scallop shells of <em>Chesapecten jeffersonius</em>, Virginia's state fossil, which lived about 4 to 5 million years ago in the Pliocene Epoch. " + N(5) + "Unit 3, at the top, is reddish sand with no shells. " + N(6) + "Shark teeth are common in Unit 1, but shark skeletons are almost never found. " + N(7) + "Deep wells drilled near the mouth of the Chesapeake Bay pass through layers like these and, much farther down, reach a jumbled layer of broken rock left by an asteroid impact about 35 million years ago.</p>",
      claims: [
        {
          id: "pliocene",
          sol: "ES.9.d",
          sub: "ES.9.d.1",
          stem: "The Pliocene Epoch named in sentence 4 is part of which era?",
          choices: [
            { letter: "A", text: "the Mesozoic Era" },
            { letter: "B", text: "the Paleozoic Era" },
            { letter: "C", text: "the Cenozoic Era" },
            { letter: "D", text: "Precambrian time" }
          ],
          correct: "C"
        },
        {
          id: "teeth",
          sol: "ES.9.a",
          sub: "ES.9.a.1",
          stem: "Which statement best explains the observation in sentence 6?",
          choices: [
            { letter: "A", text: "Sharks of that time had teeth but no skeletons at all." },
            { letter: "B", text: "Teeth are hard, but shark skeletons are cartilage that decays." },
            { letter: "C", text: "Teeth sank to the sea floor, but skeletons always floated away." },
            { letter: "D", text: "Shark skeletons were too large to be covered by sediment." }
          ],
          correct: "B"
        },
        {
          id: "marine",
          sol: "ES.9.a",
          sub: "ES.9.a.2",
          stem: "Which conclusion is best supported by the fossils in Units 1 and 2?",
          choices: [
            { letter: "A", text: "The area was a dry forest when the shells were buried." },
            { letter: "B", text: "Whales and sharks once lived in freshwater lakes here." },
            { letter: "C", text: "Rivers carried the fossils inland from the modern bay." },
            { letter: "D", text: "Seawater covered this part of Virginia as the layers formed." }
          ],
          correct: "D"
        },
        {
          id: "oldest",
          sol: "ES.9.b",
          sub: "ES.9.b.1",
          stem: "Which unit in the cliff is the oldest, and which principle shows this?",
          choices: [
            { letter: "A", text: "Unit 1, by the principle of superposition" },
            { letter: "B", text: "Unit 3, by the principle of superposition" },
            { letter: "C", text: "Unit 2, because it holds an index fossil" },
            { letter: "D", text: "Unit 1, by the principle of cross-cutting" }
          ],
          correct: "A"
        },
        {
          id: "whale",
          sol: "ES.9.c",
          sub: "ES.9.c.2",
          stem: "Using sentences 3, 4 and 7, the best estimate for the age of the whale bone in Unit 1 is —",
          choices: [
            { letter: "A", text: "more than 35 million years, since it is at the water's edge" },
            { letter: "B", text: "between about 5 and 35 million years" },
            { letter: "C", text: "less than 4 million years, since it lies in a cliff" },
            { letter: "D", text: "the same age as the impact layer below" }
          ],
          correct: "B"
        },
        {
          id: "crater",
          sol: "ES.9.d",
          sub: "ES.9.d.2",
          stem: "Which statement best fits the buried impact layer into Virginia's geologic history?",
          choices: [
            { letter: "A", text: "An impact struck the lower bay area, and younger sediment later buried the crater." },
            { letter: "B", text: "The impact came after the scallops lived and scattered their shells inland." },
            { letter: "C", text: "The impact pushed up the Blue Ridge, which still rises west of the bay." },
            { letter: "D", text: "The impact ended the age of dinosaurs and buried their bones near the bay." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "hist-canyon-cross-section",
      family: "HIST",
      title: "A dike, a fault and an ash bed",
      kind: "Earth History · ES.9",
      blurb: "Letter the layers, order the events, then pin a date on the fault.",
      level: 3,
      passage: "<p>" + N(1) + "A geology class studied a cross-section drawn from a canyon wall. " + N(2) + "From bottom to top, it shows shale A, sandstone B and limestone C, all lying flat. " + N(3) + "A granite dike, D, cuts upward through A, B and C. " + N(4) + "A wavy erosion surface slices across the top of C and the top of the dike. " + N(5) + "Above that surface lies conglomerate E, which contains pebbles of granite that match the dike. " + N(6) + "A fault, F, breaks layers A through E and shifts them 2 meters. " + N(7) + "The top layer, sandstone G, lies across the fault without being broken. " + N(8) + "Radiometric dating shows that the dike is 320 million years old and that a volcanic ash bed within G is 270 million years old.</p>",
      claims: [
        {
          id: "crosscut",
          sol: "ES.9.b",
          sub: "ES.9.b.1",
          stem: "Which principle shows that dike D is younger than layers A, B and C?",
          choices: [
            { letter: "A", text: "the principle of superposition" },
            { letter: "B", text: "the principle of original horizontality" },
            { letter: "C", text: "the use of index fossils" },
            { letter: "D", text: "the principle of cross-cutting relationships" }
          ],
          correct: "D"
        },
        {
          id: "pebbles",
          sol: "ES.9.b",
          sub: "ES.9.b.3",
          stem: "Which observation from the passage best shows that the dike formed before conglomerate E?",
          choices: [
            { letter: "A", text: "E contains pebbles of granite that match the dike." },
            { letter: "B", text: "The dike cuts upward through shale A." },
            { letter: "C", text: "Fault F breaks both the dike and layer E." },
            { letter: "D", text: "Sandstone G lies on top of layer E." }
          ],
          correct: "A"
        },
        {
          id: "sequence",
          sol: "ES.9.b",
          sub: "ES.9.b.3",
          stem: "Which list gives the events in order from oldest to youngest?",
          choices: [
            { letter: "A", text: "A, B, C, erosion, D, E, F, G" },
            { letter: "B", text: "D, A, B, C, erosion, E, G, F" },
            { letter: "C", text: "A, B, C, D, erosion, E, F, G" },
            { letter: "D", text: "A, B, C, D, E, erosion, G, F" }
          ],
          correct: "C"
        },
        {
          id: "faultage",
          sol: "ES.9.c",
          sub: "ES.9.c.2",
          stem: "What is the best estimate for when fault F formed?",
          choices: [
            { letter: "A", text: "more than 320 million years ago" },
            { letter: "B", text: "between 320 and 270 million years ago" },
            { letter: "C", text: "less than 270 million years ago" },
            { letter: "D", text: "at the same time as the dike formed" }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "ES.9.c",
          sub: "ES.9.c.1",
          stem: "Which statement best describes how the two kinds of evidence in this cross-section differ?",
          choices: [
            { letter: "A", text: "The principles place A through G in order; the isotopes give ages in years." },
            { letter: "B", text: "The isotopes place A through G in order; the principles give ages in years." },
            { letter: "C", text: "Both kinds of evidence give exact ages in years for every layer shown." },
            { letter: "D", text: "Neither kind of evidence can be used on rocks that have been faulted." }
          ],
          correct: "A"
        },
        {
          id: "era",
          sol: "ES.9.d",
          sub: "ES.9.d.1",
          stem: "The dates in sentence 8 show that fault F formed during the —",
          choices: [
            { letter: "A", text: "Mesozoic Era" },
            { letter: "B", text: "Cenozoic Era" },
            { letter: "C", text: "Paleozoic Era" },
            { letter: "D", text: "Precambrian" }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "hist-coal-core",
      family: "HIST",
      title: "A drill core from coal country",
      kind: "Earth History · ES.9",
      blurb: "Swamp plants, a sea that came back and an ash bed with a date in southwest Virginia.",
      level: 3,
      passage: "<p>" + N(1) + "In southwest Virginia, on the Appalachian Plateau, a mining company drilled a core through flat-lying rock from the Pennsylvanian Period. " + N(2) + "The table summarizes the rock layers in the core, listed from the surface down to 25 meters. " + N(3) + "The lowest shale holds fern leaves and the bark of scale trees, preserved mostly as thin black <strong>carbon films</strong>. " + N(4) + "It also holds upright tree trunks that are <strong>casts</strong>: when each stump rotted away, sand filled the hollow it left and hardened into a stone copy. " + N(5) + "The coal itself is made of flattened leaves, bark and roots that piled up and were buried before they could rot. " + N(6) + "A thin layer of volcanic ash inside the coal contains crystals that radiometric dating places at 315 million years old. " + N(7) + "At that time, Virginia lay near the equator, and the young Appalachian Mountains were rising to the east as continents collided to form Pangaea. " + N(8) + "Rivers carried sand and mud westward from those mountains onto a broad, low plain near sea level.</p>" +
        "<table><tr><th>Depth (m)</th><th>Rock</th><th>Fossils</th></tr><tr><td>0–12</td><td>sandstone</td><td>none</td></tr><tr><td>12–15</td><td>dark shale</td><td>brachiopods, crinoids</td></tr><tr><td>15–17</td><td>coal with ash layer</td><td>flattened plants</td></tr><tr><td>17–25</td><td>gray shale</td><td>ferns, tree casts</td></tr></table>",
      claims: [
        {
          id: "cast",
          sol: "ES.9.a",
          sub: "ES.9.a.1",
          stem: "The tree trunks in sentence 4 are casts rather than molds because —",
          choices: [
            { letter: "A", text: "each trunk was pressed into a thin film of carbon" },
            { letter: "B", text: "the original wood was preserved without change" },
            { letter: "C", text: "sediment filled the hollow and made a solid copy" },
            { letter: "D", text: "each hollow stayed empty after the stump rotted" }
          ],
          correct: "C"
        },
        {
          id: "swamp",
          sol: "ES.9.a",
          sub: "ES.9.a.2",
          stem: "The coal and the plant fossils below it best support which conclusion about this area 315 million years ago?",
          choices: [
            { letter: "A", text: "It was a warm, wet lowland covered by swamp forests." },
            { letter: "B", text: "It was a cold, dry plateau with very few plants." },
            { letter: "C", text: "It was the floor of a deep ocean far from land." },
            { letter: "D", text: "It was a high mountain range topped by glaciers." }
          ],
          correct: "A"
        },
        {
          id: "flood",
          sol: "ES.9.a",
          sub: "ES.9.a.2",
          stem: "Which change is best supported by the dark shale directly above the coal?",
          choices: [
            { letter: "A", text: "The swamp dried out and became a sandy desert." },
            { letter: "B", text: "Lava flows from volcanoes buried the swamp." },
            { letter: "C", text: "Glaciers scraped the swamp plants away." },
            { letter: "D", text: "Seawater flooded the swamp and covered it in mud." }
          ],
          correct: "D"
        },
        {
          id: "ashdate",
          sol: "ES.9.c",
          sub: "ES.9.c.2",
          stem: "Which statement about the ages of the layers in the core is best supported?",
          choices: [
            { letter: "A", text: "The gray shale is younger than 315 million years, since it holds plants." },
            { letter: "B", text: "The gray shale is older than 315 million years; the dark shale is younger." },
            { letter: "C", text: "All four layers formed exactly 315 million years ago, along with the ash." },
            { letter: "D", text: "The sandstone at the top of the core is the oldest layer that was drilled." }
          ],
          correct: "B"
        },
        {
          id: "pennsylvanian",
          sol: "ES.9.d",
          sub: "ES.9.d.1",
          stem: "The Pennsylvanian Period belongs to the —",
          choices: [
            { letter: "A", text: "Mesozoic Era, when dinosaurs were common" },
            { letter: "B", text: "Cenozoic Era, after the dinosaurs died out" },
            { letter: "C", text: "Precambrian, before any land plants grew" },
            { letter: "D", text: "Paleozoic Era, before the first dinosaurs" }
          ],
          correct: "D"
        },
        {
          id: "history",
          sol: "ES.9.d",
          sub: "ES.9.d.2",
          stem: "Using sentences 7 and 8, which explanation best accounts for the coal of southwest Virginia?",
          choices: [
            { letter: "A", text: "Glaciers pushed piles of plants south from Canada into Virginia." },
            { letter: "B", text: "Lava from the Triassic basins covered forests and baked them." },
            { letter: "C", text: "Sediment from rising mountains buried swamp plants on a low plain." },
            { letter: "D", text: "Debris from the Chesapeake Bay impact buried coastal forests." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "hist-timeline-hallway",
      family: "HIST",
      title: "Earth's history down a hallway",
      kind: "Earth History · ES.9",
      blurb: "A 46-meter scale model of geologic time, with a few Virginia fossils to place.",
      level: 3,
      passage: "<p>" + N(1) + "A class built a model of Earth's history along a 46-meter hallway, where each meter stands for 100 million years. " + N(2) + "The far end, labeled 46 m, marks Earth's formation about 4.6 billion years ago, and the near end, labeled 0 m, marks today. " + N(3) + "The students taped cards at the distances shown in the table. " + N(4) + "Everything farther than the 5.4-meter card is <strong>Precambrian</strong> time; the Paleozoic, Mesozoic and Cenozoic Eras all fit in the last 5.4 meters. " + N(5) + "The earliest fossils are layered mounds built by bacteria in shallow seas, and the first oxygen-rich rocks appear long after them. " + N(6) + "Mammals first appeared in the Mesozoic, but they stayed small and few in kinds until after the 0.66-meter card. " + N(7) + "Next, the class plans to add cards for Ordovician trilobites from the Valley and Ridge, Triassic dinosaur tracks from the Culpeper Basin and Pliocene <em>Chesapecten</em> scallops from the Coastal Plain. " + N(8) + "One student asked where to tape a card for the first modern humans, who appeared about 300,000 years ago.</p>" +
        "<table><tr><th>Event</th><th>Card (m)</th></tr><tr><td>first fossils of life (bacteria)</td><td>35</td></tr><tr><td>oxygen begins to build up in air</td><td>24</td></tr><tr><td>Paleozoic begins; shelled animals spread</td><td>5.4</td></tr><tr><td>largest mass extinction ends the Paleozoic</td><td>2.5</td></tr><tr><td>mass extinction ends the Mesozoic</td><td>0.66</td></tr></table>",
      claims: [
        {
          id: "fraction",
          sol: "ES.9.d",
          sub: "ES.9.d.1",
          stem: "According to the model, about how much of Earth's history is Precambrian time?",
          choices: [
            { letter: "A", text: "about 12 percent" },
            { letter: "B", text: "about 25 percent" },
            { letter: "C", text: "about 50 percent" },
            { letter: "D", text: "almost 90 percent" }
          ],
          correct: "D"
        },
        {
          id: "humans",
          sol: "ES.9.d",
          sub: "ES.9.d.1",
          stem: "Where should the card for the first modern humans (sentence 8) be taped?",
          choices: [
            { letter: "A", text: "about 3 millimeters from the 0 m end" },
            { letter: "B", text: "about 3 meters from the 0 m end" },
            { letter: "C", text: "about 30 centimeters from the 0 m end" },
            { letter: "D", text: "right beside the 0.66-meter card" }
          ],
          correct: "A"
        },
        {
          id: "oxygen",
          sol: "ES.9.a",
          sub: "ES.9.a.2",
          stem: "Which inference is best supported by sentence 5 and the first two cards in the table?",
          choices: [
            { letter: "A", text: "Oxygen filled the air first, and that let the first bacteria appear." },
            { letter: "B", text: "Early bacteria made oxygen slowly, so it took over a billion years to build up." },
            { letter: "C", text: "The first bacteria used up all the oxygen that was in the early air." },
            { letter: "D", text: "Oxygen built up only after shelled animals began to spread in the sea." }
          ],
          correct: "B"
        },
        {
          id: "mammals",
          sol: "ES.9.a",
          sub: "ES.9.a.2",
          stem: "Which inference best explains the pattern described in sentence 6?",
          choices: [
            { letter: "A", text: "Mammals caused the dinosaurs to die out by eating their eggs." },
            { letter: "B", text: "Mammals first appeared on Earth just after the dinosaurs died." },
            { letter: "C", text: "The loss of the dinosaurs opened habitats that mammals then filled." },
            { letter: "D", text: "The extinction killed every mammal, and mammals evolved again later." }
          ],
          correct: "C"
        },
        {
          id: "virginia",
          sol: "ES.9.d",
          sub: "ES.9.d.2",
          stem: "Which list puts the Virginia fossils in sentence 7 in order from the card farthest from 0 m to the card closest to 0 m?",
          choices: [
            { letter: "A", text: "<em>Chesapecten</em>, dinosaur tracks, trilobites" },
            { letter: "B", text: "trilobites, dinosaur tracks, <em>Chesapecten</em>" },
            { letter: "C", text: "dinosaur tracks, trilobites, <em>Chesapecten</em>" },
            { letter: "D", text: "trilobites, <em>Chesapecten</em>, dinosaur tracks" }
          ],
          correct: "B"
        },
        {
          id: "potassium",
          sol: "ES.9.b",
          sub: "ES.9.b.2",
          stem: "A student adds a card at 26 m for a granite dated with potassium-40, which has a half-life of 1.3 billion years. What fraction of the granite's original potassium-40 remains today?",
          choices: [
            { letter: "A", text: "one-half" },
            { letter: "B", text: "two-thirds" },
            { letter: "C", text: "one-eighth" },
            { letter: "D", text: "one-fourth" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
