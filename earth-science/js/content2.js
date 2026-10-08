/* SOL Lab Earth Science — Scientific Investigation (ES.1.a–f). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "inv-sand-water-lamp",
      family: "INV",
      title: "Sand and water under a lamp",
      kind: "Investigation · ES.1",
      blurb: "Two cups, one heat lamp: which warms faster, land or water?",
      level: 1,
      passage: "<p>" + N(1) + "A student asked whether dry sand or water warms faster when both receive the same energy. " + N(2) + "She filled two identical cups, one with 200 g of dry sand and one with 200 g of water, and placed a thermometer 1 cm below each surface. " + N(3) + "Both cups sat 30 cm from the same heat lamp for 20 minutes, and she recorded the temperatures every 5 minutes.</p>" +
        "<table><tr><th>Time (min)</th><th>Sand (°C)</th><th>Water (°C)</th></tr><tr><td>0</td><td>21</td><td>21</td></tr><tr><td>5</td><td>26</td><td>22</td></tr><tr><td>10</td><td>31</td><td>23</td></tr><tr><td>15</td><td>35</td><td>24</td></tr><tr><td>20</td><td>38</td><td>25</td></tr></table>",
      claims: [
        {
          id: "question",
          sol: "ES.1.a",
          sub: "ES.1.a.1",
          stem: "Which question was this investigation designed to answer?",
          choices: [
            { letter: "A", text: "Does a heat lamp give off more light than the sun?" },
            { letter: "B", text: "Does dry sand or water warm faster under one lamp?" },
            { letter: "C", text: "How deep does heat travel into a cup of sand?" },
            { letter: "D", text: "Does water evaporate faster than damp sand dries?" }
          ],
          correct: "B"
        },
        {
          id: "constant",
          sol: "ES.1.b",
          sub: "ES.1.b.1",
          stem: "Which of these did the student keep the same for both cups?",
          choices: [
            { letter: "A", text: "the mass of material in each cup" },
            { letter: "B", text: "the type of material in each cup" },
            { letter: "C", text: "the temperature reading in each cup" },
            { letter: "D", text: "the amount each cup warmed in 20 minutes" }
          ],
          correct: "A"
        },
        {
          id: "read",
          sol: "ES.1.c",
          sub: "ES.1.c.1",
          stem: "According to the table, what was the temperature of the sand at 10 minutes?",
          choices: [
            { letter: "A", text: "23 °C" },
            { letter: "B", text: "26 °C" },
            { letter: "C", text: "31 °C" },
            { letter: "D", text: "35 °C" }
          ],
          correct: "C"
        },
        {
          id: "pattern",
          sol: "ES.1.c",
          sub: "ES.1.c.3",
          stem: "Which statement best describes a pattern in the data?",
          choices: [
            { letter: "A", text: "The water warmed faster than the sand after 10 minutes." },
            { letter: "B", text: "Both cups warmed by the same amount in the first 5 minutes." },
            { letter: "C", text: "The sand's temperature rose by the same amount every 5 minutes." },
            { letter: "D", text: "The sand warmed more than the water in every 5-minute interval." }
          ],
          correct: "D"
        },
        {
          id: "claim",
          sol: "ES.1.d",
          sub: "ES.1.d.2",
          stem: "A classmate says the data show that water does not absorb energy from the lamp. Why is this claim not supported?",
          choices: [
            { letter: "A", text: "The two cups started at different temperatures." },
            { letter: "B", text: "The water's temperature rose 4 °C during the test." },
            { letter: "C", text: "The cups sat at different distances from the lamp." },
            { letter: "D", text: "The water was under the lamp for less time than the sand." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "inv-sediment-porosity",
      family: "INV",
      title: "Pore space in three sediments",
      kind: "Investigation · ES.1",
      blurb: "Pour water into gravel, sand and a silty mix: how much space hides between the grains?",
      level: 1,
      passage: "<p>" + N(1) + "A class measured the <strong>porosity</strong>, the percent of a sediment's volume that is open pore space, of three dry sediments. " + N(2) + "Each group filled a beaker to the 200 mL mark with one sediment. " + N(3) + "They slowly poured in water from a graduated cylinder until the water just reached the top of the sediment. " + N(4) + "The volume of water added equals the volume of the pore spaces.</p>" +
        "<table><tr><th>Sediment</th><th>Water added (mL)</th></tr><tr><td>Gravel</td><td>64</td></tr><tr><td>Coarse sand</td><td>70</td></tr><tr><td>Sand and silt mix</td><td>48</td></tr></table>",
      claims: [
        {
          id: "tool",
          sol: "ES.1.b",
          sub: "ES.1.b.2",
          stem: "Which tool and metric unit are best for measuring the water added to each beaker?",
          choices: [
            { letter: "A", text: "a graduated cylinder, read in milliliters" },
            { letter: "B", text: "a metric ruler, read in centimeters" },
            { letter: "C", text: "a thermometer, read in degrees Celsius" },
            { letter: "D", text: "a spring scale, read in newtons" }
          ],
          correct: "A"
        },
        {
          id: "calc",
          sol: "ES.1.c",
          sub: "ES.1.c.2",
          stem: "What was the porosity of the coarse sand?",
          choices: [
            { letter: "A", text: "14%" },
            { letter: "B", text: "30%" },
            { letter: "C", text: "35%" },
            { letter: "D", text: "70%" }
          ],
          correct: "C"
        },
        {
          id: "least",
          sol: "ES.1.c",
          sub: "ES.1.c.1",
          stem: "According to the table, which sediment had the least pore space?",
          choices: [
            { letter: "A", text: "the gravel" },
            { letter: "B", text: "the sand and silt mix" },
            { letter: "C", text: "the coarse sand" },
            { letter: "D", text: "all three had equal pore space" }
          ],
          correct: "B"
        },
        {
          id: "hypothesis",
          sol: "ES.1.a",
          sub: "ES.1.a.2",
          stem: "The class next plans to mix different amounts of silt into coarse sand. Which is the best hypothesis for that test?",
          choices: [
            { letter: "A", text: "Coarse sand is the most common sediment in Virginia streams." },
            { letter: "B", text: "If water is poured in faster, then the sand will hold more silt." },
            { letter: "C", text: "If silt is added, then the beaker will still be filled to 200 mL." },
            { letter: "D", text: "If more silt is mixed in, then porosity will drop as silt fills pores." }
          ],
          correct: "D"
        },
        {
          id: "error",
          sol: "ES.1.d",
          sub: "ES.1.d.2",
          stem: "One group reported a porosity of 45% for the gravel, far above the class result. Which error most likely caused this?",
          choices: [
            { letter: "A", text: "They kept pouring after water rose above the gravel." },
            { letter: "B", text: "They stopped pouring before water reached the top." },
            { letter: "C", text: "They used gravel that was dry when they began." },
            { letter: "D", text: "They poured the water slowly from the cylinder." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "inv-latlong-virginia",
      family: "INV",
      title: "Three points on a Virginia grid",
      kind: "Investigation · ES.1",
      blurb: "Latitude, longitude and the 111 km rule, from the Bay to Roanoke.",
      level: 1,
      passage: "<p>" + N(1) + "Lines of <strong>latitude</strong> run east–west and measure degrees north or south of the equator; lines of <strong>longitude</strong> run north–south and measure degrees east or west of the prime meridian. " + N(2) + "On a map of Virginia, a student marked three points. " + N(3) + "Point P, near the mouth of the Chesapeake Bay, is at 37° N, 76° W. " + N(4) + "Point Q, near Roanoke, is at 37° N, 80° W. " + N(5) + "Point R, in the Piedmont near Charlottesville, is at 38° N, 78° W. " + N(6) + "One degree of latitude spans about 111 km.</p>",
      claims: [
        {
          id: "same-lat",
          sol: "ES.1.e",
          sub: "ES.1.e.1",
          stem: "Which two points lie on the same line of latitude?",
          choices: [
            { letter: "A", text: "P and R" },
            { letter: "B", text: "Q and R" },
            { letter: "C", text: "P and Q" },
            { letter: "D", text: "all three points" }
          ],
          correct: "C"
        },
        {
          id: "direction",
          sol: "ES.1.e",
          sub: "ES.1.e.1",
          stem: "Compared with Point Q, Point P is located —",
          choices: [
            { letter: "A", text: "farther east" },
            { letter: "B", text: "farther west" },
            { letter: "C", text: "farther north" },
            { letter: "D", text: "farther south" }
          ],
          correct: "A"
        },
        {
          id: "distance",
          sol: "ES.1.c",
          sub: "ES.1.c.2",
          stem: "About how far north of the 37° N line is Point R?",
          choices: [
            { letter: "A", text: "37 km" },
            { letter: "B", text: "111 km" },
            { letter: "C", text: "222 km" },
            { letter: "D", text: "380 km" }
          ],
          correct: "B"
        },
        {
          id: "predict",
          sol: "ES.1.e",
          sub: "ES.1.e.2",
          stem: "A town is at 39° N, 78° W. Based on the grid, the town is about —",
          choices: [
            { letter: "A", text: "111 km due south of Point R" },
            { letter: "B", text: "222 km due north of Point R" },
            { letter: "C", text: "111 km due east of Point P" },
            { letter: "D", text: "111 km due north of Point R" }
          ],
          correct: "D"
        },
        {
          id: "limit",
          sol: "ES.1.e",
          sub: "ES.1.e.3",
          stem: "Which is a limitation of describing Point Q by its latitude and longitude alone?",
          choices: [
            { letter: "A", text: "The numbers do not show which hemispheres Q is in." },
            { letter: "B", text: "The numbers do not show Q's elevation or landforms." },
            { letter: "C", text: "The numbers cannot be used north of the equator." },
            { letter: "D", text: "The numbers change each time a new map is printed." }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "inv-stream-table-slope",
      family: "INV",
      title: "Slope in a stream table",
      kind: "Investigation · ES.1",
      blurb: "Tilt the tray, run the hose, weigh the sand that washes out.",
      level: 2,
      passage: "<p>" + N(1) + "Students used a <strong>stream table</strong>, a long tray of moist sand with a hose at the upper end that releases water at 1 L per minute. " + N(2) + "They raised the upper end on blocks to set slopes of 5°, 10° and 15°. " + N(3) + "For each run, water flowed for 3 minutes, and the sand washed into a bucket at the lower end was dried and weighed. " + N(4) + "Each slope was run three times, and the sand was smoothed back into place before every run. " + N(5) + "In every run a single channel formed, and it was deepest at 15°.</p>" +
        "<table><tr><th>Slope</th><th>Average sand eroded (g)</th></tr><tr><td>5°</td><td>120</td></tr><tr><td>10°</td><td>260</td></tr><tr><td>15°</td><td>410</td></tr></table>",
      claims: [
        {
          id: "iv",
          sol: "ES.1.b",
          sub: "ES.1.b.1",
          stem: "In this investigation, the independent variable is —",
          choices: [
            { letter: "A", text: "the mass of sand washed into the bucket" },
            { letter: "B", text: "the rate at which the hose releases water" },
            { letter: "C", text: "the length of time the water flowed" },
            { letter: "D", text: "the slope of the stream table" }
          ],
          correct: "D"
        },
        {
          id: "hypothesis",
          sol: "ES.1.a",
          sub: "ES.1.a.2",
          stem: "Which hypothesis was this investigation best designed to test?",
          choices: [
            { letter: "A", text: "If the slope increases, then more sand will be eroded." },
            { letter: "B", text: "If more water flows, then the channel will be wider." },
            { letter: "C", text: "If the sand is dry, then less sand will be eroded." },
            { letter: "D", text: "If the slope increases, then the water will slow down." }
          ],
          correct: "A"
        },
        {
          id: "read",
          sol: "ES.1.c",
          sub: "ES.1.c.1",
          stem: "According to the table, the average mass of sand eroded at a 10° slope was —",
          choices: [
            { letter: "A", text: "120 g" },
            { letter: "B", text: "150 g" },
            { letter: "C", text: "260 g" },
            { letter: "D", text: "410 g" }
          ],
          correct: "C"
        },
        {
          id: "trend",
          sol: "ES.1.c",
          sub: "ES.1.c.3",
          stem: "Which relationship is shown by the data?",
          choices: [
            { letter: "A", text: "As slope increased, less sand was eroded." },
            { letter: "B", text: "As slope increased, more sand was eroded." },
            { letter: "C", text: "Slope had no clear effect on the sand eroded." },
            { letter: "D", text: "Eroded sand stayed the same above a 10° slope." }
          ],
          correct: "B"
        },
        {
          id: "improve",
          sol: "ES.1.b",
          sub: "ES.1.b.3",
          stem: "Which change would most improve what the class can conclude about slope and erosion?",
          choices: [
            { letter: "A", text: "testing more slopes, such as 20° and 25°, three times each" },
            { letter: "B", text: "changing the water flow rate and slope in the same runs" },
            { letter: "C", text: "running each slope once instead of three times" },
            { letter: "D", text: "using a different type of sand for each slope" }
          ],
          correct: "A"
        },
        {
          id: "model-limit",
          sol: "ES.1.e",
          sub: "ES.1.e.3",
          stem: "Which is a limitation of the stream table as a model of a real river?",
          choices: [
            { letter: "A", text: "It shows that faster water carries more sediment." },
            { letter: "B", text: "It lets students control the slope and flow rate." },
            { letter: "C", text: "It runs for minutes, but rivers erode for many years." },
            { letter: "D", text: "It uses flowing water to move sediment downhill." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "inv-salol-crystals",
      family: "INV",
      title: "Cooling rate and crystal size",
      kind: "Investigation · ES.1",
      blurb: "A drop on a cold slide, a drop on a warm one: watch the crystals grow.",
      level: 1,
      passage: "<p>" + N(1) + "A class asked how the rate of cooling affects the size of crystals that form from a melted substance. " + N(2) + "The teacher melted <strong>salol</strong>, a solid that melts at about 43 °C, in a warm-water bath. " + N(3) + "Wearing goggles, students placed one drop of melted salol on a glass slide chilled in ice water and one drop on a slide warmed to 40 °C. " + N(4) + "They watched each drop harden through a hand lens. " + N(5) + "The drop on the cold slide hardened in about 30 seconds into many tiny crystals. " + N(6) + "The drop on the warm slide took about 6 minutes and formed a few large, needle-shaped crystals.</p>",
      claims: [
        {
          id: "new-question",
          sol: "ES.1.a",
          sub: "ES.1.a.1",
          stem: "Which new question could the class test with the same materials?",
          choices: [
            { letter: "A", text: "Why do some minerals have a glassy luster?" },
            { letter: "B", text: "Would a slide at 20 °C give middle-sized crystals?" },
            { letter: "C", text: "How long ago did the granite in Virginia cool?" },
            { letter: "D", text: "Which crystal shape do most students like best?" }
          ],
          correct: "B"
        },
        {
          id: "dv",
          sol: "ES.1.b",
          sub: "ES.1.b.1",
          stem: "The dependent variable in this investigation is —",
          choices: [
            { letter: "A", text: "the temperature of each glass slide" },
            { letter: "B", text: "the kind of substance that was melted" },
            { letter: "C", text: "the size of each drop placed on a slide" },
            { letter: "D", text: "the size of the crystals that formed" }
          ],
          correct: "D"
        },
        {
          id: "read",
          sol: "ES.1.c",
          sub: "ES.1.c.1",
          stem: "According to sentences 5 and 6, the drop that formed large crystals —",
          choices: [
            { letter: "A", text: "hardened in about 6 minutes on the warm slide" },
            { letter: "B", text: "hardened in about 30 seconds on the cold slide" },
            { letter: "C", text: "hardened in about 6 minutes on the cold slide" },
            { letter: "D", text: "hardened in about 30 seconds on the warm slide" }
          ],
          correct: "A"
        },
        {
          id: "explain",
          sol: "ES.1.d",
          sub: "ES.1.d.1",
          stem: "Which statement best explains why the drop on the warm slide formed larger crystals?",
          choices: [
            { letter: "A", text: "The warm slide added extra salol to the drop." },
            { letter: "B", text: "Fast cooling gave its crystals more time to grow." },
            { letter: "C", text: "Slow cooling gave its crystals more time to grow." },
            { letter: "D", text: "The hand lens made only those crystals look larger." }
          ],
          correct: "C"
        },
        {
          id: "magma",
          sol: "ES.1.e",
          sub: "ES.1.e.2",
          stem: "If the salol drops are a model of cooling magma, an igneous rock with large crystals most likely formed —",
          choices: [
            { letter: "A", text: "slowly, deep underground" },
            { letter: "B", text: "quickly, as lava at the surface" },
            { letter: "C", text: "quickly, as ash blown into the air" },
            { letter: "D", text: "in seconds, as lava poured into the sea" }
          ],
          correct: "A"
        },
        {
          id: "weakness",
          sol: "ES.1.d",
          sub: "ES.1.d.2",
          stem: "Which is the main weakness of the class's evidence?",
          choices: [
            { letter: "A", text: "The students wore goggles while watching the drops." },
            { letter: "B", text: "Both drops came from the same batch of melted salol." },
            { letter: "C", text: "The students used a hand lens to view both drops." },
            { letter: "D", text: "Each slide temperature was tested with only one drop." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "inv-cavern-sources",
      family: "INV",
      title: "Statements about a cavern",
      kind: "Investigation · ES.1",
      blurb: "A hypothesis, a theory, a law, a flyer and a report: sort them and weigh them.",
      level: 2,
      passage: "<p>" + N(1) + "While writing a report on a limestone cavern, a student collected four statements. " + N(2) + "<strong>W:</strong> \"If water drips onto a stalactite faster, then the stalactite will grow longer each year.\" " + N(3) + "<strong>X:</strong> \"The theory of plate tectonics explains how the rock layers around the cavern were folded.\" " + N(4) + "<strong>Y:</strong> \"The law of superposition states that in undisturbed rock layers, the oldest layer is at the bottom.\" " + N(5) + "<strong>Z:</strong> A souvenir flyer with no author says, \"Stalactites here grow 10 cm every year.\" " + N(6) + "The student also found a cave scientist's report, checked by other scientists before it was published, that measured stalactite growth in the same cavern for 12 years and found about 0.2 mm per year.</p>",
      claims: [
        {
          id: "classify-w",
          sol: "ES.1.f",
          sub: "ES.1.f.1",
          stem: "Statement W is best described as —",
          choices: [
            { letter: "A", text: "a law, because it describes what always happens in caves" },
            { letter: "B", text: "a theory, because it explains a wide range of observations" },
            { letter: "C", text: "a hypothesis, because it makes a prediction that can be tested" },
            { letter: "D", text: "an observation, because it was written down inside a cave" }
          ],
          correct: "C"
        },
        {
          id: "law-theory",
          sol: "ES.1.f",
          sub: "ES.1.f.1",
          stem: "Which statement correctly compares a scientific law, such as Y, with a scientific theory, such as X?",
          choices: [
            { letter: "A", text: "A law describes what happens; a theory explains how or why." },
            { letter: "B", text: "A theory becomes a law once it has been proven true." },
            { letter: "C", text: "A law is an idea that scientists have not yet tested." },
            { letter: "D", text: "A theory has less evidence behind it than a hypothesis." }
          ],
          correct: "A"
        },
        {
          id: "reliable",
          sol: "ES.1.f",
          sub: "ES.1.f.2",
          stem: "Which source is more reliable for the stalactite growth rate, and why?",
          choices: [
            { letter: "A", text: "the flyer, because it was printed at the cavern itself" },
            { letter: "B", text: "the report, because other scientists checked its methods" },
            { letter: "C", text: "the flyer, because its number is larger and easier to see" },
            { letter: "D", text: "neither, because growth in caves cannot be measured" }
          ],
          correct: "B"
        },
        {
          id: "check",
          sol: "ES.1.f",
          sub: "ES.1.f.2",
          stem: "Which evidence would best help the student check the claim in statement Z?",
          choices: [
            { letter: "A", text: "a photograph of the largest stalactite in the cavern" },
            { letter: "B", text: "the number of people who tour the cavern each year" },
            { letter: "C", text: "a second flyer printed by a different gift shop" },
            { letter: "D", text: "measurements of the same stalactites taken years apart" }
          ],
          correct: "D"
        },
        {
          id: "age",
          sol: "ES.1.d",
          sub: "ES.1.d.2",
          stem: "Using the report's rate, the student concludes that a 20 cm stalactite is about 1,000 years old. Which is the best evaluation of this conclusion?",
          choices: [
            { letter: "A", text: "It is wrong, because 200 mm at 0.2 mm per year is only 100 years." },
            { letter: "B", text: "It is certain, because a measured growth rate is a scientific law." },
            { letter: "C", text: "It is reasonable, but the rate may have changed, so it is an estimate." },
            { letter: "D", text: "It is wrong, because stalactites in this cavern grow 10 cm a year." }
          ],
          correct: "C"
        },
        {
          id: "testable",
          sol: "ES.1.a",
          sub: "ES.1.a.1",
          stem: "Which question about the cavern could be answered by a scientific investigation?",
          choices: [
            { letter: "A", text: "Is this cavern the most beautiful one in the country?" },
            { letter: "B", text: "Does the drip rate change how fast a stalactite grows?" },
            { letter: "C", text: "Should visitors be allowed to touch the formations?" },
            { letter: "D", text: "Which formation in the cavern is the most interesting?" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "inv-topo-laurel-knob",
      family: "INV",
      title: "Contours on a Blue Ridge hill",
      kind: "Investigation · ES.1",
      blurb: "Read a contour map of a Virginia knob: steep sides, a trail gradient and a stream's V.",
      level: 2,
      passage: "<p>" + N(1) + "A student studied a practice topographic map of a Blue Ridge hill in Virginia called Laurel Knob. " + N(2) + "The map's <strong>contour interval</strong> is 20 m. " + N(3) + "The lowest contour line, 600 m, circles the base of the hill, and the highest closed contour is 780 m; an X marks the summit at 787 m. " + N(4) + "On the east side of the hill, the contour lines are about 1 mm apart, while on the west side they are about 5 mm apart. " + N(5) + "The map scale is 1 cm = 250 m. " + N(6) + "A trail on the west side climbs from the 600 m line to the 780 m line over a map distance of 6 cm. " + N(7) + "On the north side, a small stream crosses several contour lines, and where it crosses, each line bends into a V that points uphill, toward the summit.</p>",
      claims: [
        {
          id: "steep",
          sol: "ES.1.e",
          sub: "ES.1.e.1",
          stem: "Which side of Laurel Knob is steepest?",
          choices: [
            { letter: "A", text: "the east side, where contour lines are closest together" },
            { letter: "B", text: "the west side, where contour lines are farthest apart" },
            { letter: "C", text: "the north side, where the stream crosses the contours" },
            { letter: "D", text: "the south side, because it faces away from the stream" }
          ],
          correct: "A"
        },
        {
          id: "gradient",
          sol: "ES.1.c",
          sub: "ES.1.c.2",
          stem: "What is the average gradient of the trail described in sentence 6?",
          choices: [
            { letter: "A", text: "30 m/km" },
            { letter: "B", text: "120 m/km" },
            { letter: "C", text: "180 m/km" },
            { letter: "D", text: "1,500 m/km" }
          ],
          correct: "B"
        },
        {
          id: "profile",
          sol: "ES.1.e",
          sub: "ES.1.e.2",
          stem: "A profile drawn from west to east across the summit would most likely show —",
          choices: [
            { letter: "A", text: "a steep climb on the west and a gentle drop on the east" },
            { letter: "B", text: "the same steepness on both sides of the summit" },
            { letter: "C", text: "two summits separated by a narrow valley" },
            { letter: "D", text: "a gentle climb on the west and a steep drop on the east" }
          ],
          correct: "D"
        },
        {
          id: "map-limit",
          sol: "ES.1.e",
          sub: "ES.1.e.3",
          stem: "Which is a limitation of this map as a model of Laurel Knob?",
          choices: [
            { letter: "A", text: "It cannot show which side of the hill is steeper." },
            { letter: "B", text: "It cannot show the elevation of the summit." },
            { letter: "C", text: "It may miss rises or dips of less than 20 m." },
            { letter: "D", text: "It cannot show which way the stream flows." }
          ],
          correct: "C"
        },
        {
          id: "inside",
          sol: "ES.1.c",
          sub: "ES.1.c.1",
          stem: "Which elevation could belong to a point inside the 780 m closed contour?",
          choices: [
            { letter: "A", text: "765 m" },
            { letter: "B", text: "775 m" },
            { letter: "C", text: "785 m" },
            { letter: "D", text: "805 m" }
          ],
          correct: "C"
        },
        {
          id: "v-shape",
          sol: "ES.1.d",
          sub: "ES.1.d.1",
          stem: "Which statement best explains why the contour lines bend into a V that points uphill where they cross the stream?",
          choices: [
            { letter: "A", text: "Streams flow up toward the summit of a hill." },
            { letter: "B", text: "The stream has cut a valley into the slope." },
            { letter: "C", text: "The contour interval is larger near streams." },
            { letter: "D", text: "Flowing water builds up the land along its banks." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "inv-rooftop-weather",
      family: "INV",
      title: "A rooftop weather station",
      kind: "Investigation · ES.1",
      blurb: "Two days of readings, a passing storm, and a rumor about snow.",
      level: 2,
      passage: "<p>" + N(1) + "Students at a high school run a weather station on the school roof. " + N(2) + "Every 6 hours on a Monday and Tuesday in March, they recorded the temperature, the air pressure and the direction the wind came from. " + N(3) + "A band of heavy showers and gusty wind passed over the school between 6 p.m. Monday and midnight. " + N(4) + "Afterward, the sky cleared and the air felt much drier. " + N(5) + "On Tuesday morning, a student found an unsigned social-media post that said, \"Our town will get 30 cm of snow tonight!\" " + N(6) + "The National Weather Service forecast for Tuesday night, based on data from many stations, satellites and computer models, called for clear skies and a low of −1 °C. " + N(7) + "The class compared both claims with their own readings.</p>" +
        "<table><tr><th>Time</th><th>Temp. (°C)</th><th>Pressure (mb)</th><th>Wind from</th></tr><tr><td>Mon 6 a.m.</td><td>12</td><td>1012</td><td>S</td></tr><tr><td>Mon noon</td><td>17</td><td>1006</td><td>SW</td></tr><tr><td>Mon 6 p.m.</td><td>15</td><td>1001</td><td>SW</td></tr><tr><td>Tue midnight</td><td>6</td><td>1008</td><td>NW</td></tr><tr><td>Tue 6 a.m.</td><td>2</td><td>1016</td><td>NW</td></tr></table>",
      claims: [
        {
          id: "rain-tool",
          sol: "ES.1.b",
          sub: "ES.1.b.2",
          stem: "To measure how much rain fell from the showers in sentence 3, the students should use —",
          choices: [
            { letter: "A", text: "a barometer, read in millibars" },
            { letter: "B", text: "an anemometer, read in kilometers per hour" },
            { letter: "C", text: "a rain gauge, read in millimeters" },
            { letter: "D", text: "a thermometer, read in degrees Celsius" }
          ],
          correct: "C"
        },
        {
          id: "low-pressure",
          sol: "ES.1.c",
          sub: "ES.1.c.1",
          stem: "According to the table, the lowest air pressure was recorded at —",
          choices: [
            { letter: "A", text: "noon on Monday" },
            { letter: "B", text: "6 p.m. on Monday" },
            { letter: "C", text: "midnight on Tuesday" },
            { letter: "D", text: "6 a.m. on Tuesday" }
          ],
          correct: "B"
        },
        {
          id: "mean",
          sol: "ES.1.c",
          sub: "ES.1.c.2",
          stem: "What is the mean of the five temperature readings in the table?",
          choices: [
            { letter: "A", text: "9.5 °C" },
            { letter: "B", text: "10.4 °C" },
            { letter: "C", text: "13.0 °C" },
            { letter: "D", text: "52.0 °C" }
          ],
          correct: "B"
        },
        {
          id: "front",
          sol: "ES.1.c",
          sub: "ES.1.c.3",
          stem: "Which change in the data from 6 p.m. Monday to midnight best shows that a cold front passed?",
          choices: [
            { letter: "A", text: "Temperature rose, pressure fell, and the wind stayed southwest." },
            { letter: "B", text: "Temperature and pressure both fell, and the wind turned south." },
            { letter: "C", text: "Temperature held steady, and pressure kept falling slowly." },
            { letter: "D", text: "Temperature fell, pressure rose, and the wind turned northwest." }
          ],
          correct: "D"
        },
        {
          id: "always",
          sol: "ES.1.d",
          sub: "ES.1.d.2",
          stem: "A student concludes, \"Air pressure always rises when the temperature falls.\" Which statement best evaluates this conclusion?",
          choices: [
            { letter: "A", text: "It is supported, because every reading pair shows pressure rising as temperature drops." },
            { letter: "B", text: "It is supported, because from 6 p.m. to midnight temperature fell and pressure rose." },
            { letter: "C", text: "It is not supported, because from noon to 6 p.m. temperature and pressure both fell." },
            { letter: "D", text: "It is not supported, because the pressure stayed the same for the whole two days." }
          ],
          correct: "C"
        },
        {
          id: "source",
          sol: "ES.1.f",
          sub: "ES.1.f.2",
          stem: "Which is the best reason to rely on the forecast in sentence 6 rather than the post in sentence 5?",
          choices: [
            { letter: "A", text: "The forecast uses wide data, and rising pressure suggests clear skies." },
            { letter: "B", text: "The forecast agrees with what most students hoped would happen." },
            { letter: "C", text: "The post is short, and short messages are almost always wrong." },
            { letter: "D", text: "The post was read in the morning, before any snow could fall." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "inv-salt-evaporation",
      family: "INV",
      title: "Salt and the rate of evaporation",
      kind: "Investigation · ES.1",
      blurb: "Three pans, three salt levels, four days on a sunny windowsill.",
      level: 3,
      passage: "<p>" + N(1) + "Ocean water is salty while most lakes and rivers are fresh, and a student wondered whether dissolved salt changes how fast water evaporates. " + N(2) + "She filled three identical shallow pans with 500 mL of liquid each: Pan 1 held fresh water, Pan 2 held water with 35 g of salt per liter (about as salty as the ocean), and Pan 3 held water with 70 g of salt per liter. " + N(3) + "The pans sat side by side on the same sunny windowsill for four days. " + N(4) + "Each evening she weighed every pan on an electronic balance and recorded the mass of water lost that day. " + N(5) + "The table shows her results. " + N(6) + "She did not record the weather. " + N(7) + "From these data she concluded, \"Adding salt slows evaporation.\"</p>" +
        "<table><tr><th>Day</th><th>Pan 1, 0 g/L (g lost)</th><th>Pan 2, 35 g/L (g lost)</th><th>Pan 3, 70 g/L (g lost)</th></tr><tr><td>1</td><td>32</td><td>30</td><td>28</td></tr><tr><td>2</td><td>33</td><td>31</td><td>29</td></tr><tr><td>3</td><td>18</td><td>17</td><td>16</td></tr><tr><td>4</td><td>37</td><td>36</td><td>34</td></tr><tr><td>Total</td><td>120</td><td>114</td><td>107</td></tr></table>",
      claims: [
        {
          id: "hypothesis",
          sol: "ES.1.a",
          sub: "ES.1.a.2",
          stem: "Which hypothesis was the student testing?",
          choices: [
            { letter: "A", text: "If the pans sit in sunlight, then the salt will evaporate too." },
            { letter: "B", text: "If more water evaporates, then the salt concentration will fall." },
            { letter: "C", text: "If the salt concentration is higher, then less water will evaporate." },
            { letter: "D", text: "If a day is cloudy, then the pans will gain mass from the air." }
          ],
          correct: "C"
        },
        {
          id: "constant",
          sol: "ES.1.b",
          sub: "ES.1.b.1",
          stem: "Which of these was a constant in the investigation?",
          choices: [
            { letter: "A", text: "the amount of salt in each liter of water" },
            { letter: "B", text: "the mass of water each pan lost each day" },
            { letter: "C", text: "the total mass each pan lost in four days" },
            { letter: "D", text: "the starting volume of liquid in each pan" }
          ],
          correct: "D"
        },
        {
          id: "rate",
          sol: "ES.1.c",
          sub: "ES.1.c.2",
          stem: "What was Pan 1's average rate of evaporation over the four days?",
          choices: [
            { letter: "A", text: "30 g per day" },
            { letter: "B", text: "33 g per day" },
            { letter: "C", text: "40 g per day" },
            { letter: "D", text: "120 g per day" }
          ],
          correct: "A"
        },
        {
          id: "day3",
          sol: "ES.1.c",
          sub: "ES.1.c.3",
          stem: "On Day 3, all three pans lost much less mass than on the other days. The most likely explanation is —",
          choices: [
            { letter: "A", text: "a mistake in mixing the salt into Pan 3 only" },
            { letter: "B", text: "a cooler, cloudier day that slowed every pan" },
            { letter: "C", text: "the salt in Pan 1 slowing its evaporation" },
            { letter: "D", text: "the pans running dry before the day ended" }
          ],
          correct: "B"
        },
        {
          id: "improve",
          sol: "ES.1.b",
          sub: "ES.1.b.3",
          stem: "Which change would most improve the reliability of her results?",
          choices: [
            { letter: "A", text: "setting up three pans at each salt level and averaging them" },
            { letter: "B", text: "moving Pan 3 to a shadier windowsill than the others" },
            { letter: "C", text: "using a different volume of liquid in each of the pans" },
            { letter: "D", text: "weighing the pans only on the first and the last day" }
          ],
          correct: "A"
        },
        {
          id: "evaluate",
          sol: "ES.1.d",
          sub: "ES.1.d.2",
          stem: "Select TWO statements that correctly evaluate the conclusion in sentence 7.",
          choices: [
            { letter: "A", text: "It is not supported, because Pan 2 lost more mass than Pan 1." },
            { letter: "B", text: "It is supported by a trend: total mass lost fell as salt rose." },
            { letter: "C", text: "It is now proven, so no further trials are needed." },
            { letter: "D", text: "Its support is limited, because each salt level had only one pan." }
          ],
          correct: ["B", "D"]
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "inv-karst-dye-trace",
      family: "INV",
      title: "Tracing dye through Valley karst",
      kind: "Investigation · ES.1",
      blurb: "Dye goes into a Shenandoah Valley sinkhole. Where does it come out?",
      level: 3,
      passage: "<p>" + N(1) + "Much of Virginia's Shenandoah Valley sits on limestone, a rock that slowly dissolves in slightly acidic groundwater. " + N(2) + "Over thousands of years this forms <strong>karst</strong>: sinkholes, caves and springs connected by underground passages. " + N(3) + "After storms, the water in a farm's well turns cloudy, so a county team asked where water that enters a large sinkhole on the farm travels. " + N(4) + "During a rain on April 2, the team poured a harmless fluorescent dye into the sinkhole. " + N(5) + "They placed charcoal packets, which absorb the dye, in the farm well and in three springs, and checked them every day for 14 days. " + N(6) + "The table shows the results. " + N(7) + "Springs A and C lie northeast of the sinkhole, the same direction the limestone layers run; Spring B lies to the south. " + N(8) + "The team's model shows sinkhole water moving through connected passages that run northeast along the limestone layers. " + N(9) + "A neighbor's website, which cites no measurements, says sinkhole water \"always flows straight to the nearest spring.\"</p>" +
        "<table><tr><th>Site</th><th>Distance from sinkhole (km)</th><th>Days until dye found</th></tr><tr><td>Farm well</td><td>0.8</td><td>1</td></tr><tr><td>Spring A</td><td>3.0</td><td>2</td></tr><tr><td>Spring B</td><td>1.2</td><td>not found</td></tr><tr><td>Spring C</td><td>6.0</td><td>5</td></tr></table>",
      claims: [
        {
          id: "question",
          sol: "ES.1.a",
          sub: "ES.1.a.1",
          stem: "Which question was the dye trace designed to answer?",
          choices: [
            { letter: "A", text: "Where does water that enters the sinkhole travel?" },
            { letter: "B", text: "How old is the limestone beneath the farm?" },
            { letter: "C", text: "How much rain falls on the valley in April?" },
            { letter: "D", text: "Why does fluorescent dye glow in ultraviolet light?" }
          ],
          correct: "A"
        },
        {
          id: "speed",
          sol: "ES.1.c",
          sub: "ES.1.c.2",
          stem: "What was the average rate at which the dye traveled from the sinkhole to Spring C?",
          choices: [
            { letter: "A", text: "0.8 km per day" },
            { letter: "B", text: "1.2 km per day" },
            { letter: "C", text: "3.0 km per day" },
            { letter: "D", text: "30 km per day" }
          ],
          correct: "B"
        },
        {
          id: "cloudy",
          sol: "ES.1.d",
          sub: "ES.1.d.1",
          stem: "Which statement best explains why the farm's well turns cloudy after storms?",
          choices: [
            { letter: "A", text: "The well draws all of its water from Spring B." },
            { letter: "B", text: "Limestone filters storm water slowly, as fine sand does." },
            { letter: "C", text: "Muddy runoff reaches the well quickly through open passages." },
            { letter: "D", text: "Dye from the April test is what clouded the well water." }
          ],
          correct: "C"
        },
        {
          id: "weakness",
          sol: "ES.1.d",
          sub: "ES.1.d.2",
          stem: "The team concludes that the sinkhole is not connected to Spring B. Which is a possible weakness in this conclusion?",
          choices: [
            { letter: "A", text: "Spring C is farther from the sinkhole than Spring A." },
            { letter: "B", text: "The charcoal packets absorbed dye from the water." },
            { letter: "C", text: "The dye reached the well before it reached any spring." },
            { letter: "D", text: "Dye might have reached Spring B after the 14 days ended." }
          ],
          correct: "D"
        },
        {
          id: "predict",
          sol: "ES.1.e",
          sub: "ES.1.e.2",
          stem: "Based on the team's model, if fertilizer were washed into the sinkhole, which sites would most likely be polluted?",
          choices: [
            { letter: "A", text: "only Spring B, because it is the nearest spring" },
            { letter: "B", text: "the farm well and Springs A and C, within days" },
            { letter: "C", text: "no sites, because limestone filters out fertilizer" },
            { letter: "D", text: "Spring B first, and then the farm well a week later" }
          ],
          correct: "B"
        },
        {
          id: "website",
          sol: "ES.1.f",
          sub: "ES.1.f.2",
          stem: "Which is the best evaluation of the website's claim in sentence 9?",
          choices: [
            { letter: "A", text: "It is not reliable: the nearest spring, B, never received dye." },
            { letter: "B", text: "It is reliable, because water always flows straight downhill." },
            { letter: "C", text: "It is reliable, because the neighbor lives near the sinkhole." },
            { letter: "D", text: "It cannot be judged, because dye traces are not evidence." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "inv-living-shoreline",
      family: "INV",
      title: "Modeling a living shoreline",
      kind: "Investigation · ES.1",
      blurb: "A wave tank tests whether marsh grass and a rock sill can protect a Chesapeake Bay bank.",
      level: 3,
      passage: "<p>" + N(1) + "Many shorelines along the Chesapeake Bay are losing land as waves wear away their sandy banks. " + N(2) + "Some property owners now build a <strong>living shoreline</strong>: marsh grass planted along the bank, with a low line of rocks, called a sill, just offshore. " + N(3) + "Two students asked whether a living shoreline reduces the amount of sand that waves remove from a bank. " + N(4) + "In a wave tank 1.5 m long, they built two banks, each from 4.0 kg of damp sand sloped at the same angle. " + N(5) + "Bank 1 was left bare; Bank 2 had 60 plastic grass stems pushed into it and a row of pebbles 10 cm in front of it. " + N(6) + "A paddle sent 20 waves per minute, all the same height, against each bank for 10 minutes. " + N(7) + "The students then dried and weighed the sand that had washed off each bank. " + N(8) + "They rebuilt the banks and repeated the test for three trials in all. " + N(9) + "Afterward, one student wrote, \"Our results prove that living shorelines will stop all erosion in the Bay.\" " + N(10) + "The other pointed out that real marsh grass has roots, and real Bay storms send waves of many different heights.</p>" +
        "<table><tr><th>Trial</th><th>Bank 1 sand lost (g)</th><th>Bank 2 sand lost (g)</th></tr><tr><td>1</td><td>640</td><td>210</td></tr><tr><td>2</td><td>610</td><td>190</td></tr><tr><td>3</td><td>670</td><td>230</td></tr><tr><td>Average</td><td>640</td><td>210</td></tr></table>",
      claims: [
        {
          id: "control",
          sol: "ES.1.b",
          sub: "ES.1.b.1",
          stem: "Which part of the setup served as the control?",
          choices: [
            { letter: "A", text: "Bank 2, the bank with stems and pebbles" },
            { letter: "B", text: "Bank 1, the bank that was left bare" },
            { letter: "C", text: "the paddle that made the same waves" },
            { letter: "D", text: "the 4.0 kg of sand used in each bank" }
          ],
          correct: "B"
        },
        {
          id: "hypothesis",
          sol: "ES.1.a",
          sub: "ES.1.a.2",
          stem: "Which hypothesis best fits the students' question in sentence 3?",
          choices: [
            { letter: "A", text: "If waves are taller, then more sand will wash off a bank." },
            { letter: "B", text: "If a bank loses sand, then the waves will grow larger." },
            { letter: "C", text: "If sand is damp, then marsh grass will grow faster in it." },
            { letter: "D", text: "If a bank has grass and a sill, then waves will remove less sand." }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "ES.1.c",
          sub: "ES.1.c.3",
          stem: "Which statement best compares the results for the two banks?",
          choices: [
            { letter: "A", text: "Bank 2 lost about half as much sand as Bank 1." },
            { letter: "B", text: "Bank 2 lost about 430 g more sand than Bank 1." },
            { letter: "C", text: "Bank 2 lost about one-third as much sand as Bank 1." },
            { letter: "D", text: "Both banks lost about the same mass in Trial 2." }
          ],
          correct: "C"
        },
        {
          id: "extend",
          sol: "ES.1.b",
          sub: "ES.1.b.3",
          stem: "Which change to the investigation would best address the point about storms in sentence 10?",
          choices: [
            { letter: "A", text: "repeating the test with several different wave heights" },
            { letter: "B", text: "using more sand in Bank 1 than in Bank 2" },
            { letter: "C", text: "running each setup once instead of three times" },
            { letter: "D", text: "giving Bank 2 more trials than Bank 1" }
          ],
          correct: "A"
        },
        {
          id: "limits",
          sol: "ES.1.e",
          sub: "ES.1.e.3",
          stem: "Select TWO limitations of the wave tank as a model of a real Chesapeake Bay shoreline.",
          choices: [
            { letter: "A", text: "The plastic stems have no roots to hold the sand." },
            { letter: "B", text: "Each bank started with the same mass of sand." },
            { letter: "C", text: "Every wave in the tank was the same height." },
            { letter: "D", text: "Each setup was tested in three separate trials." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "terms",
          sol: "ES.1.f",
          sub: "ES.1.f.1",
          stem: "Which statement about the students' work uses scientific terms correctly?",
          choices: [
            { letter: "A", text: "Three matching trials turned their hypothesis into a law." },
            { letter: "B", text: "Their hypothesis was proven true for every Bay shoreline." },
            { letter: "C", text: "Their prediction became a theory once averages were found." },
            { letter: "D", text: "Their prediction was a hypothesis, and their data supported it." }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
