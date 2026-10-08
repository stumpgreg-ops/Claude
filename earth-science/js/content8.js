/* SOL Lab Earth Science — Oceans (ES.10.a–e). Original text only; all data invented but realistic. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "ocean-ph-buoy",
      family: "OCEAN",
      title: "A buoy that tracks ocean pH",
      kind: "Oceans · ES.10",
      blurb: "Thirty years of carbon dioxide and pH readings from one Atlantic buoy.",
      level: 1,
      passage: "<p>" + N(1) + "A buoy anchored in the open Atlantic Ocean has measured the carbon dioxide (CO<sub>2</sub>) in the air and the <strong>pH</strong> of the surface water since 1990. " + N(2) + "Seawater absorbs CO<sub>2</sub> from the air, and the dissolved gas forms a weak acid. " + N(3) + "The yearly averages are shown in the table.</p>" +
        "<table><tr><th>Year</th><th>CO<sub>2</sub> in air (ppm)</th><th>Surface pH</th></tr><tr><td>1990</td><td>355</td><td>8.11</td></tr><tr><td>2000</td><td>370</td><td>8.09</td></tr><tr><td>2010</td><td>390</td><td>8.07</td></tr><tr><td>2020</td><td>413</td><td>8.05</td></tr></table>",
      claims: [
        {
          id: "trend",
          sol: "ES.10.d",
          sub: "ES.10.d.2",
          stem: "Which statement best describes the relationship shown in the buoy data?",
          choices: [
            { letter: "A", text: "As CO2 in the air increased, the pH of the surface water decreased." },
            { letter: "B", text: "As CO2 in the air increased, the pH of the surface water increased." },
            { letter: "C", text: "The pH of the surface water stayed the same while CO2 increased." },
            { letter: "D", text: "CO2 in the air and the pH of the water both decreased over time." }
          ],
          correct: "A"
        },
        {
          id: "acidic",
          sol: "ES.10.d",
          sub: "ES.10.d.1",
          stem: "The drop in pH shown in the table means the surface water has become —",
          choices: [
            { letter: "A", text: "more basic" },
            { letter: "B", text: "more acidic" },
            { letter: "C", text: "less salty" },
            { letter: "D", text: "less dense" }
          ],
          correct: "B"
        },
        {
          id: "source",
          sol: "ES.10.e",
          sub: "ES.10.e.1",
          stem: "Which human activity is the main source of the extra CO2 the buoy detected?",
          choices: [
            { letter: "A", text: "releasing CFCs from old refrigerators" },
            { letter: "B", text: "washing fertilizer from fields into rivers" },
            { letter: "C", text: "building stone jetties along sandy beaches" },
            { letter: "D", text: "burning fossil fuels such as coal, oil and gas" }
          ],
          correct: "D"
        },
        {
          id: "shells",
          sol: "ES.10.d",
          sub: "ES.10.d.1",
          stem: "If the change shown in the table continues, it will most likely make it harder for some sea life to —",
          choices: [
            { letter: "A", text: "find fresh water to drink" },
            { letter: "B", text: "swim against surface currents" },
            { letter: "C", text: "build shells of calcium carbonate" },
            { letter: "D", text: "absorb sunlight near the surface" }
          ],
          correct: "C"
        },
        {
          id: "predict",
          sol: "ES.10.d",
          sub: "ES.10.d.2",
          stem: "If the trend in the table continues at the same rate, the surface pH in 2030 will most likely be closest to —",
          choices: [
            { letter: "A", text: "8.15" },
            { letter: "B", text: "8.11" },
            { letter: "C", text: "8.03" },
            { letter: "D", text: "6.50" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "ocean-tide-pier",
      family: "OCEAN",
      title: "Tide times on a Virginia Beach pier",
      kind: "Oceans · ES.10",
      blurb: "Two highs, two lows and a full moon: read one day of tides.",
      level: 1,
      passage: "<p>" + N(1) + "A student fishing from a pier at Virginia Beach recorded the time and height of each high and low tide on the day of a <strong>full moon</strong>. " + N(2) + "She noticed that the difference between high and low water, the <strong>tidal range</strong>, was larger than it had been one week earlier. " + N(3) + "Her record is shown in the table.</p>" +
        "<table><tr><th>Tide</th><th>Time</th><th>Height (m)</th></tr><tr><td>High</td><td>3:10 a.m.</td><td>1.3</td></tr><tr><td>Low</td><td>9:22 a.m.</td><td>-0.1</td></tr><tr><td>High</td><td>3:35 p.m.</td><td>1.2</td></tr><tr><td>Low</td><td>9:48 p.m.</td><td>0.0</td></tr></table>",
      claims: [
        {
          id: "cause",
          sol: "ES.10.a",
          sub: "ES.10.a.2",
          stem: "Which is the main cause of the rise and fall of the water shown in the table?",
          choices: [
            { letter: "A", text: "wind pushing waves onto the beach" },
            { letter: "B", text: "the sun heating and expanding the water" },
            { letter: "C", text: "the moon's gravity pulling on Earth's oceans" },
            { letter: "D", text: "the Gulf Stream carrying water past the pier" }
          ],
          correct: "C"
        },
        {
          id: "next",
          sol: "ES.10.a",
          sub: "ES.10.a.3",
          stem: "Based on the pattern in the table, the first high tide of the next day would most likely occur at about —",
          choices: [
            { letter: "A", text: "3:10 a.m." },
            { letter: "B", text: "4:00 a.m." },
            { letter: "C", text: "9:22 a.m." },
            { letter: "D", text: "3:35 p.m." }
          ],
          correct: "B"
        },
        {
          id: "spring",
          sol: "ES.10.a",
          sub: "ES.10.a.2",
          stem: "Which statement best explains why the tidal range in sentence 2 was larger on the day of the full moon?",
          choices: [
            { letter: "A", text: "The sun, Earth and moon were lined up, so their pulls combined." },
            { letter: "B", text: "The moon was at a right angle to the sun, so its pull was doubled." },
            { letter: "C", text: "The full moon reflected sunlight that warmed and raised the water." },
            { letter: "D", text: "Earth's shadow on the moon reduced the pull of the sun on the ocean." }
          ],
          correct: "A"
        },
        {
          id: "neap",
          sol: "ES.10.a",
          sub: "ES.10.a.3",
          stem: "One week after this record was made, the moon will be at third quarter. On that day the student would most likely record —",
          choices: [
            { letter: "A", text: "only one high tide and one low tide" },
            { letter: "B", text: "a larger tidal range than on the full moon" },
            { letter: "C", text: "no tides at all because the moon is half lit" },
            { letter: "D", text: "a smaller tidal range than on the full moon" }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "ES.10.a",
          sub: "ES.10.a.2",
          stem: "The Virginia coast has two high tides and two low tides each day because —",
          choices: [
            { letter: "A", text: "the moon orbits Earth twice each day" },
            { letter: "B", text: "the sun and moon take turns pulling on the ocean" },
            { letter: "C", text: "Earth rotates through two bulges of water each day" },
            { letter: "D", text: "winds change direction every six hours along the coast" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "ocean-wave-tank",
      family: "OCEAN",
      title: "Making waves in a tank",
      kind: "Oceans · ES.10",
      blurb: "A fan, a cork and a sloping beach in a long tank of water.",
      level: 1,
      passage: "<p>" + N(1) + "A class blew a fan across a long tank of water and measured the <strong>wave height</strong> (trough to crest) and the <strong>wavelength</strong> (crest to crest) at three fan speeds. " + N(2) + "A cork in the middle bobbed up and down as each wave passed but stayed in nearly the same place. " + N(3) + "At the shallow, sloping end of the tank, the waves grew taller and tipped over as <strong>breakers</strong>.</p>" +
        "<table><tr><th>Fan speed</th><th>Wave height (cm)</th><th>Wavelength (cm)</th></tr><tr><td>Low</td><td>1.0</td><td>20</td></tr><tr><td>Medium</td><td>2.5</td><td>30</td></tr><tr><td>High</td><td>4.0</td><td>40</td></tr></table>",
      claims: [
        {
          id: "fan",
          sol: "ES.10.a",
          sub: "ES.10.a.2",
          stem: "In the ocean, the fan in this model represents —",
          choices: [
            { letter: "A", text: "the pull of the moon on the water" },
            { letter: "B", text: "the turning of Earth on its axis" },
            { letter: "C", text: "cold water sinking near the poles" },
            { letter: "D", text: "wind transferring energy to the water" }
          ],
          correct: "D"
        },
        {
          id: "conclude",
          sol: "ES.10.a",
          sub: "ES.10.a.3",
          stem: "Based on the wave-tank data in the table, which conclusion is best supported?",
          choices: [
            { letter: "A", text: "Stronger wind makes waves that are taller and longer." },
            { letter: "B", text: "Wave height does not depend on the speed of the wind." },
            { letter: "C", text: "Stronger wind makes waves with shorter wavelengths." },
            { letter: "D", text: "Wave height decreases as the wavelength increases." }
          ],
          correct: "A"
        },
        {
          id: "cork",
          sol: "ES.10.a",
          sub: "ES.10.a.2",
          stem: "The motion of the cork in sentence 2 shows that waves —",
          choices: [
            { letter: "A", text: "push floating objects to shore at the speed of the wave" },
            { letter: "B", text: "move energy forward while the water mostly stays in place" },
            { letter: "C", text: "form only when water flows from one end of a tank to the other" },
            { letter: "D", text: "travel along the bottom of the water and not at the surface" }
          ],
          correct: "B"
        },
        {
          id: "breakers",
          sol: "ES.10.a",
          sub: "ES.10.a.2",
          stem: "Which statement best explains why the waves became breakers at the shallow end?",
          choices: [
            { letter: "A", text: "The fan blew harder on the water at the shallow end." },
            { letter: "B", text: "The water at the shallow end was saltier and denser." },
            { letter: "C", text: "The bottom slowed each wave, so it grew steep and toppled." },
            { letter: "D", text: "The cork blocked the waves and made them pile up." }
          ],
          correct: "C"
        },
        {
          id: "between",
          sol: "ES.10.a",
          sub: "ES.10.a.3",
          stem: "If the class set the fan to a speed between medium and high, the wave height would most likely be about —",
          choices: [
            { letter: "A", text: "1.5 cm" },
            { letter: "B", text: "3.2 cm" },
            { letter: "C", text: "4.8 cm" },
            { letter: "D", text: "6.0 cm" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "ocean-bay-salinity",
      family: "OCEAN",
      title: "Salt from the Susquehanna to Cape Henry",
      kind: "Oceans · ES.10",
      blurb: "Five stations down the Chesapeake Bay show how fresh water meets the sea.",
      level: 2,
      passage: "<p>" + N(1) + "The Chesapeake Bay is an <strong>estuary</strong>, a partly enclosed body of water where fresh river water mixes with salty ocean water. " + N(2) + "In April, a research boat measured surface <strong>salinity</strong> at five stations from the mouth of the Susquehanna River south to the Bay's mouth at Cape Henry, Virginia. " + N(3) + "For comparison, the open Atlantic averages about 35 parts per thousand (ppt). " + N(4) + "At station 3, the crew found that water near the bottom was 4 ppt saltier than water at the surface. " + N(5) + "Many of the rivers that feed the Bay drain farmland and cities.</p>" +
        "<table><tr><th>Station</th><th>Location</th><th>Surface salinity (ppt)</th></tr><tr><td>1</td><td>Susquehanna River mouth</td><td>0</td></tr><tr><td>2</td><td>Upper Bay</td><td>6</td></tr><tr><td>3</td><td>Middle Bay</td><td>13</td></tr><tr><td>4</td><td>Lower Bay</td><td>20</td></tr><tr><td>5</td><td>Cape Henry</td><td>27</td></tr></table>",
      claims: [
        {
          id: "pattern",
          sol: "ES.10.a",
          sub: "ES.10.a.3",
          stem: "Which statement best describes the pattern in the salinity data?",
          choices: [
            { letter: "A", text: "Salinity is highest near the river mouth and falls toward the ocean." },
            { letter: "B", text: "Salinity is about the same at every station in the Bay." },
            { letter: "C", text: "Salinity rises from the river mouth toward the Atlantic Ocean." },
            { letter: "D", text: "Salinity at Cape Henry is higher than in the open Atlantic." }
          ],
          correct: "C"
        },
        {
          id: "densest",
          sol: "ES.10.a",
          sub: "ES.10.a.1",
          stem: "If all of the surface samples were the same temperature, which station's sample would be the most dense?",
          choices: [
            { letter: "A", text: "Station 1" },
            { letter: "B", text: "Station 2" },
            { letter: "C", text: "Station 3" },
            { letter: "D", text: "Station 5" }
          ],
          correct: "D"
        },
        {
          id: "bottom",
          sol: "ES.10.a",
          sub: "ES.10.a.1",
          stem: "Which statement best explains the observation in sentence 4?",
          choices: [
            { letter: "A", text: "Saltier water is denser, so it sinks below fresher water." },
            { letter: "B", text: "Fresher water is denser, so it sinks below saltier water." },
            { letter: "C", text: "Sand on the bottom dissolves and adds salt to deep water." },
            { letter: "D", text: "Sunlight evaporates bottom water and leaves salt behind." }
          ],
          correct: "A"
        },
        {
          id: "rain",
          sol: "ES.10.a",
          sub: "ES.10.a.3",
          stem: "After a very rainy May with high river flow, the surface salinity at station 3 would most likely —",
          choices: [
            { letter: "A", text: "rise, because rain carries salt from the land" },
            { letter: "B", text: "fall, because more fresh water dilutes the salt" },
            { letter: "C", text: "stay the same, because the Bay is connected to the ocean" },
            { letter: "D", text: "rise, because fast rivers push ocean water up the Bay" }
          ],
          correct: "B"
        },
        {
          id: "nutrients",
          sol: "ES.10.e",
          sub: "ES.10.e.1",
          stem: "Fertilizer that washes off farmland in the Bay's watershed (sentence 5) adds which of these to the Bay?",
          choices: [
            { letter: "A", text: "salt that raises the Bay's salinity" },
            { letter: "B", text: "oxygen that helps crabs and fish breathe" },
            { letter: "C", text: "sand that rebuilds eroded beaches" },
            { letter: "D", text: "nitrogen and phosphorus that feed algae" }
          ],
          correct: "D"
        },
        {
          id: "sealevel",
          sol: "ES.10.d",
          sub: "ES.10.d.2",
          stem: "Sea level at the mouth of the Bay is rising. If river flow stays the same, the salinity at station 4 over the coming decades will most likely —",
          choices: [
            { letter: "A", text: "increase, as salty ocean water reaches farther up the Bay" },
            { letter: "B", text: "decrease, as the deeper water dilutes the salt already there" },
            { letter: "C", text: "drop to 0 ppt, as the Bay becomes cut off from the ocean" },
            { letter: "D", text: "stay the same, as salinity depends only on water temperature" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "ocean-density-column",
      family: "OCEAN",
      title: "Four colors in a column",
      kind: "Oceans · ES.10",
      blurb: "Cold, warm, salty and fresh water stack up in a density lab.",
      level: 1,
      passage: "<p>" + N(1) + "To model how seawater forms layers, a student filled four cups with water of different temperatures and salinities and added a different food coloring to each. " + N(2) + "She measured the density of each sample and then slowly poured all four into one tall clear column, starting with the densest. " + N(3) + "The colors stayed in separate layers instead of mixing. " + N(4) + "Her teacher explained that similar layering happens near the poles, where seawater becomes so cold and salty that it grows denser than the water around it and sinks toward the ocean floor.</p>" +
        "<table><tr><th>Cup (color)</th><th>Temperature (°C)</th><th>Salinity (ppt)</th><th>Density (g/mL)</th></tr><tr><td>A (blue)</td><td>4</td><td>35</td><td>1.028</td></tr><tr><td>B (red)</td><td>40</td><td>0</td><td>0.992</td></tr><tr><td>C (green)</td><td>22</td><td>35</td><td>1.024</td></tr><tr><td>D (yellow)</td><td>22</td><td>0</td><td>0.998</td></tr></table>",
      claims: [
        {
          id: "bottom",
          sol: "ES.10.a",
          sub: "ES.10.a.1",
          stem: "The water that formed the bottom layer of the column was —",
          choices: [
            { letter: "A", text: "warm and fresh" },
            { letter: "B", text: "cold and salty" },
            { letter: "C", text: "room temperature and salty" },
            { letter: "D", text: "room temperature and fresh" }
          ],
          correct: "B"
        },
        {
          id: "variable",
          sol: "ES.10.a",
          sub: "ES.10.a.3",
          stem: "Comparing cups C and D shows the effect of which variable on density?",
          choices: [
            { letter: "A", text: "temperature, because both cups had the same salinity" },
            { letter: "B", text: "food coloring, because each cup had a different color" },
            { letter: "C", text: "volume, because each cup held a different amount" },
            { letter: "D", text: "salinity, because both cups were at the same temperature" }
          ],
          correct: "D"
        },
        {
          id: "red",
          sol: "ES.10.a",
          sub: "ES.10.a.1",
          stem: "Which statement best explains why the red water ended up as the top layer?",
          choices: [
            { letter: "A", text: "It was warm and fresh, so it was the least dense." },
            { letter: "B", text: "It was the densest water, so it floated on the rest." },
            { letter: "C", text: "It had the highest salinity of the four samples." },
            { letter: "D", text: "Red food coloring is lighter than the other colors." }
          ],
          correct: "A"
        },
        {
          id: "deep",
          sol: "ES.10.b",
          sub: "ES.10.b.1",
          stem: "The sinking of cold, salty water described in sentence 4 is what drives —",
          choices: [
            { letter: "A", text: "wind-driven surface currents such as the Gulf Stream" },
            { letter: "B", text: "the two high tides that reach the coast each day" },
            { letter: "C", text: "deep currents that move cold water along the sea floor" },
            { letter: "D", text: "the breaking waves that move sand along beaches" }
          ],
          correct: "C"
        },
        {
          id: "fifth",
          sol: "ES.10.a",
          sub: "ES.10.a.3",
          stem: "A fifth sample of fresh water at 4 °C has a density of 1.000 g/mL. If it were gently added to the column, it would most likely settle —",
          choices: [
            { letter: "A", text: "below the blue layer" },
            { letter: "B", text: "between the blue and green layers" },
            { letter: "C", text: "between the green and yellow layers" },
            { letter: "D", text: "above the red layer" }
          ],
          correct: "C"
        },
        {
          id: "meltwater",
          sol: "ES.10.d",
          sub: "ES.10.d.2",
          stem: "Melting ice from Greenland adds fresh water to the surface of the North Atlantic. Based on the model, this would most likely —",
          choices: [
            { letter: "A", text: "make the surface water denser, so more of it sinks" },
            { letter: "B", text: "make the surface water less dense, so less of it sinks" },
            { letter: "C", text: "have no effect, because density depends only on temperature" },
            { letter: "D", text: "raise the salinity of the deep water near the poles" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "ocean-longshore-sand",
      family: "OCEAN",
      title: "Tracking sand at Virginia Beach",
      kind: "Oceans · ES.10",
      blurb: "Orange sand, a stone jetty and barrier islands on the move.",
      level: 2,
      passage: "<p>" + N(1) + "On a day when waves rolled in from the northeast, students at Virginia Beach saw them strike the shore at an angle, setting up a <strong>longshore current</strong> that flowed parallel to the beach. " + N(2) + "They buried a bucket of orange-dyed sand at the water's edge and searched for it later. " + N(3) + "A stone jetty juts into the ocean at an inlet 2 km south of their site. " + N(4) + "The city pumps sand onto eroded beaches every few years, a practice called <strong>beach nourishment</strong>. " + N(5) + "On the Eastern Shore, undeveloped barrier islands are slowly moving toward the mainland as sea level rises.</p>" +
        "<table><tr><th>Time after burial</th><th>Where the orange sand was found</th></tr><tr><td>6 hours</td><td>25 m south</td></tr><tr><td>24 hours</td><td>90 m south</td></tr><tr><td>48 hours</td><td>170 m south</td></tr></table>",
      claims: [
        {
          id: "cause",
          sol: "ES.10.a",
          sub: "ES.10.a.2",
          stem: "According to sentence 1, the longshore current is caused by —",
          choices: [
            { letter: "A", text: "fresh water flowing out of the inlet" },
            { letter: "B", text: "the moon's gravity pulling on the beach" },
            { letter: "C", text: "cold, dense water sinking offshore" },
            { letter: "D", text: "waves striking the shore at an angle" }
          ],
          correct: "D"
        },
        {
          id: "rate",
          sol: "ES.10.a",
          sub: "ES.10.a.3",
          stem: "Which conclusion about the orange sand is best supported by the table?",
          choices: [
            { letter: "A", text: "The current carried sand north at about 170 m per day." },
            { letter: "B", text: "The sand stayed in place for the first 24 hours." },
            { letter: "C", text: "The current carried sand south at about 85 m per day." },
            { letter: "D", text: "The sand moved faster on the second day than the first." }
          ],
          correct: "C"
        },
        {
          id: "jetty",
          sol: "ES.10.a",
          sub: "ES.10.a.3",
          stem: "If the current keeps flowing in the same direction for several weeks, sand will most likely —",
          choices: [
            { letter: "A", text: "pile up on the north side of the jetty" },
            { letter: "B", text: "pile up on the south side of the jetty" },
            { letter: "C", text: "build up at the students' study site" },
            { letter: "D", text: "move north toward the Chesapeake Bay" }
          ],
          correct: "A"
        },
        {
          id: "downdrift",
          sol: "ES.10.e",
          sub: "ES.10.e.1",
          stem: "Under these conditions, the jetty in sentence 3 would most likely cause the beach just south of it to —",
          choices: [
            { letter: "A", text: "widen, because the jetty adds new sand to it" },
            { letter: "B", text: "narrow, because sand is trapped before reaching it" },
            { letter: "C", text: "stay the same, because jetties do not affect sand" },
            { letter: "D", text: "flood, because the jetty raises the local sea level" }
          ],
          correct: "B"
        },
        {
          id: "nourish",
          sol: "ES.10.e",
          sub: "ES.10.e.2",
          stem: "Which statement best weighs a benefit against a cost of beach nourishment?",
          choices: [
            { letter: "A", text: "It ends erosion for good, but it makes the ocean water saltier." },
            { letter: "B", text: "It costs nothing because the sand is free, but it narrows the beach." },
            { letter: "C", text: "A wider beach shields buildings, but the work is costly and repeated." },
            { letter: "D", text: "It stops the longshore current, but it harms the Gulf Stream." }
          ],
          correct: "C"
        },
        {
          id: "sealevel",
          sol: "ES.10.d",
          sub: "ES.10.d.1",
          stem: "Sentence 5 links the moving barrier islands to rising sea level. Which is a cause of the worldwide rise in sea level?",
          choices: [
            { letter: "A", text: "melting of glaciers and ice sheets on land" },
            { letter: "B", text: "melting of sea ice already floating in the Arctic" },
            { letter: "C", text: "evaporation of water from the ocean surface" },
            { letter: "D", text: "the Coriolis effect turning surface currents" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "ocean-gulf-stream",
      family: "OCEAN",
      title: "Crossing the Gulf Stream",
      kind: "Oceans · ES.10",
      blurb: "A winter cruise east from Virginia Beach finds a river of warm water.",
      level: 2,
      passage: "<p>" + N(1) + "On a February day, a research ship sailed straight east from Virginia Beach and measured the sea-surface temperature every 50 km. " + N(2) + "About 100 km offshore, the sea floor drops steeply from the shallow continental shelf toward the deep ocean. " + N(3) + "Farther out, the ship crossed the <strong>Gulf Stream</strong>, a fast, narrow surface current that carries warm water from the tropics north along the coast and then northeast across the Atlantic toward Europe. " + N(4) + "Like other large surface currents in the Northern Hemisphere, its path curves to the right as it moves. " + N(5) + "Water in the Gulf Stream stays warmer than the water near the coast all year, and in late summer hurricanes moving north from the Caribbean often pass over it.</p>" +
        "<table><tr><th>Distance from shore (km)</th><th>Surface temperature (°C)</th></tr><tr><td>50</td><td>6</td></tr><tr><td>100</td><td>8</td></tr><tr><td>150</td><td>12</td></tr><tr><td>200</td><td>23</td></tr><tr><td>250</td><td>24</td></tr><tr><td>300</td><td>18</td></tr></table>",
      claims: [
        {
          id: "wind",
          sol: "ES.10.b",
          sub: "ES.10.b.1",
          stem: "Surface currents such as the Gulf Stream are driven mainly by —",
          choices: [
            { letter: "A", text: "the gravity of the moon and the sun" },
            { letter: "B", text: "steady winds blowing over the ocean" },
            { letter: "C", text: "heat rising from the mid-ocean ridge" },
            { letter: "D", text: "cold, salty water sinking at the poles" }
          ],
          correct: "B"
        },
        {
          id: "coriolis",
          sol: "ES.10.b",
          sub: "ES.10.b.1",
          stem: "The curving of the current's path described in sentence 4 is caused by —",
          choices: [
            { letter: "A", text: "the Coriolis effect of Earth's rotation" },
            { letter: "B", text: "the daily rise and fall of the tides" },
            { letter: "C", text: "fresh water flowing out of the Bay" },
            { letter: "D", text: "waves breaking on the barrier islands" }
          ],
          correct: "A"
        },
        {
          id: "where",
          sol: "ES.10.a",
          sub: "ES.10.a.3",
          stem: "Based on the table, the ship was most likely inside the Gulf Stream from about —",
          choices: [
            { letter: "A", text: "50 to 100 km offshore" },
            { letter: "B", text: "100 to 150 km offshore" },
            { letter: "C", text: "200 to 250 km offshore" },
            { letter: "D", text: "300 km offshore and beyond" }
          ],
          correct: "C"
        },
        {
          id: "climate",
          sol: "ES.10.b",
          sub: "ES.10.b.2",
          stem: "Based on sentence 3, which statement best explains how the Gulf Stream affects climate?",
          choices: [
            { letter: "A", text: "It carries cold polar water south and cools Virginia's summers." },
            { letter: "B", text: "It moves heat to the sea floor, so it cannot warm the air above." },
            { letter: "C", text: "It blocks sunlight from the ocean and chills the air above it." },
            { letter: "D", text: "It moves tropical heat north and gives western Europe milder winters." }
          ],
          correct: "D"
        },
        {
          id: "hurricane",
          sol: "ES.10.b",
          sub: "ES.10.b.2",
          stem: "A hurricane moving north over the Gulf Stream, rather than over the cooler water near the coast, would most likely —",
          choices: [
            { letter: "A", text: "weaken, because warm water evaporates less than cold water" },
            { letter: "B", text: "turn back south, because the current flows against it" },
            { letter: "C", text: "strengthen, because the warm water supplies heat and moisture" },
            { letter: "D", text: "stop moving, because the current is faster than the storm" }
          ],
          correct: "C"
        },
        {
          id: "slope",
          sol: "ES.10.c",
          sub: "ES.10.c.1",
          stem: "The steep drop described in sentence 2 is the boundary between the continental shelf and the —",
          choices: [
            { letter: "A", text: "abyssal plain" },
            { letter: "B", text: "mid-ocean ridge" },
            { letter: "C", text: "ocean trench" },
            { letter: "D", text: "continental slope" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "ocean-sonar-profile",
      family: "OCEAN",
      title: "Sonar from Virginia to the ridge",
      kind: "Oceans · ES.10",
      blurb: "Echo soundings trace the sea floor from the coast to the middle of the Atlantic.",
      level: 2,
      passage: "<p>" + N(1) + "A survey ship sent sound pulses from its hull to the sea floor and timed the echoes, a method called <strong>sonar</strong>. " + N(2) + "Sound travels about 1,500 m per second in seawater, so an echo that returns in 2 seconds means the floor is 1,500 m down. " + N(3) + "The ship sailed east from the Virginia coast toward the middle of the Atlantic Ocean, and the table shows some of its depth readings. " + N(4) + "At 900 km, the echo time dropped from about 7 seconds to under 2 seconds as the ship passed over a steep-sided underwater mountain with a flat top, then rose back to 7 seconds. " + N(5) + "At 1,500 km, a thermometer lowered to the bottom read 2 °C, although the surface water there was 20 °C.</p>" +
        "<table><tr><th>Distance from coast (km)</th><th>Depth (m)</th></tr><tr><td>40</td><td>50</td></tr><tr><td>110</td><td>140</td></tr><tr><td>200</td><td>2,500</td></tr><tr><td>450</td><td>4,900</td></tr><tr><td>1,500</td><td>5,300</td></tr><tr><td>3,800</td><td>2,600</td></tr></table>",
      claims: [
        {
          id: "shelf",
          sol: "ES.10.c",
          sub: "ES.10.c.1",
          stem: "The shallow, gently sloping sea floor from the coast out to about 110 km is the —",
          choices: [
            { letter: "A", text: "abyssal plain" },
            { letter: "B", text: "continental rise" },
            { letter: "C", text: "continental shelf" },
            { letter: "D", text: "mid-ocean ridge" }
          ],
          correct: "C"
        },
        {
          id: "steep",
          sol: "ES.10.c",
          sub: "ES.10.c.2",
          stem: "Between which two readings in the table does the sea floor slope most steeply?",
          choices: [
            { letter: "A", text: "110 km and 200 km" },
            { letter: "B", text: "200 km and 450 km" },
            { letter: "C", text: "450 km and 1,500 km" },
            { letter: "D", text: "1,500 km and 3,800 km" }
          ],
          correct: "A"
        },
        {
          id: "guyot",
          sol: "ES.10.c",
          sub: "ES.10.c.1",
          stem: "The feature the ship crossed at 900 km (sentence 4) is best identified as —",
          choices: [
            { letter: "A", text: "an ocean trench" },
            { letter: "B", text: "a guyot" },
            { letter: "C", text: "a continental rise" },
            { letter: "D", text: "an abyssal plain" }
          ],
          correct: "B"
        },
        {
          id: "ages",
          sol: "ES.10.c",
          sub: "ES.10.c.2",
          stem: "The sea floor rises to 2,600 m at 3,800 km. If rock samples were collected along the whole route, scientists would most likely find that the rock —",
          choices: [
            { letter: "A", text: "is oldest at 3,800 km and gets younger toward Virginia" },
            { letter: "B", text: "is the same age at every point along the route" },
            { letter: "C", text: "is youngest at 1,500 km, where the floor is deepest" },
            { letter: "D", text: "is youngest at 3,800 km and gets older toward Virginia" }
          ],
          correct: "D"
        },
        {
          id: "cold",
          sol: "ES.10.b",
          sub: "ES.10.b.1",
          stem: "Which statement best explains the bottom temperature reported in sentence 5?",
          choices: [
            { letter: "A", text: "The water is river water that sank because fresh water is dense." },
            { letter: "B", text: "The water is part of a deep current that sank near the poles." },
            { letter: "C", text: "The water was cooled by contact with ice on the sea floor." },
            { letter: "D", text: "The water flowed down from the warm Gulf Stream above it." }
          ],
          correct: "B"
        },
        {
          id: "iceage",
          sol: "ES.10.d",
          sub: "ES.10.d.2",
          stem: "About 20,000 years ago, during the last ice age, sea level was about 120 m lower than today. Which location in the table was most likely dry land at that time?",
          choices: [
            { letter: "A", text: "40 km from the coast" },
            { letter: "B", text: "110 km from the coast" },
            { letter: "C", text: "200 km from the coast" },
            { letter: "D", text: "450 km from the coast" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "ocean-sewells-point",
      family: "OCEAN",
      title: "A tide gauge in Norfolk",
      kind: "Oceans · ES.10",
      blurb: "Eighty years of rising water at Sewells Point, and two ways to hold it back.",
      level: 3,
      passage: "<p>" + N(1) + "A tide gauge at Sewells Point in Norfolk has recorded water levels since the 1920s, and the table shows the yearly average sea level there compared with 1930. " + N(2) + "A GPS station near the gauge shows that the land itself is sinking about 2.5 mm per year, partly because groundwater pumped from deep aquifers lets buried sediment compact and partly because the crust is still adjusting after the last ice age. " + N(3) + "At the same time, the ocean is rising worldwide as land ice melts and seawater warms. " + N(4) + "Some Norfolk streets now flood during strong high tides even on sunny days. " + N(5) + "City planners are comparing a concrete floodwall with <strong>living shorelines</strong>, which use marsh plants and oyster reefs along the water's edge to soften waves.</p>" +
        "<table><tr><th>Year</th><th>Sea level compared with 1930 (mm)</th></tr><tr><td>1930</td><td>0</td></tr><tr><td>1950</td><td>90</td></tr><tr><td>1970</td><td>180</td></tr><tr><td>1990</td><td>280</td></tr><tr><td>2010</td><td>400</td></tr></table>",
      claims: [
        {
          id: "trend",
          sol: "ES.10.d",
          sub: "ES.10.d.2",
          stem: "Which statement best describes the change in sea level shown in the table?",
          choices: [
            { letter: "A", text: "Sea level rose at exactly the same rate in every 20-year period." },
            { letter: "B", text: "Sea level rose the whole time, and it rose faster after 1990." },
            { letter: "C", text: "Sea level rose until 1970 and then began to fall again." },
            { letter: "D", text: "Sea level rose until 1990 and then stayed about the same." }
          ],
          correct: "B"
        },
        {
          id: "split",
          sol: "ES.10.d",
          sub: "ES.10.d.2",
          stem: "Between 1990 and 2010 the water at the gauge rose about 6 mm per year. Using sentence 2, about how much of that yearly rise came from the ocean itself rising?",
          choices: [
            { letter: "A", text: "2.5 mm per year" },
            { letter: "B", text: "6.0 mm per year" },
            { letter: "C", text: "8.5 mm per year" },
            { letter: "D", text: "3.5 mm per year" }
          ],
          correct: "D"
        },
        {
          id: "expand",
          sol: "ES.10.a",
          sub: "ES.10.a.1",
          stem: "Sentence 3 says warming seawater helps raise sea level. This happens because warmer seawater —",
          choices: [
            { letter: "A", text: "is less dense, so the same mass takes up more space" },
            { letter: "B", text: "is denser, so it sinks and pushes water upward" },
            { letter: "C", text: "holds more dissolved salt, which adds to its volume" },
            { letter: "D", text: "evaporates faster, which adds more water to the ocean" }
          ],
          correct: "A"
        },
        {
          id: "human",
          sol: "ES.10.e",
          sub: "ES.10.e.1",
          stem: "Which human activity named in the passage adds to the rise in water level at the gauge?",
          choices: [
            { letter: "A", text: "planting marsh grass along the shore" },
            { letter: "B", text: "pumping groundwater from deep aquifers" },
            { letter: "C", text: "measuring land height with GPS stations" },
            { letter: "D", text: "building oyster reefs at the water's edge" }
          ],
          correct: "B"
        },
        {
          id: "living",
          sol: "ES.10.e",
          sub: "ES.10.e.2",
          stem: "Which is a benefit of a living shoreline that a concrete floodwall would NOT provide?",
          choices: [
            { letter: "A", text: "full protection from even the largest storm surge" },
            { letter: "B", text: "an end to the sinking of land under the city" },
            { letter: "C", text: "habitat for fish and crabs and cleaner water" },
            { letter: "D", text: "a lower rate of sea-level rise at the gauge" }
          ],
          correct: "C"
        },
        {
          id: "ice",
          sol: "ES.10.d",
          sub: "ES.10.d.1",
          stem: "Which of these changes would add the most water to the ocean and raise sea level?",
          choices: [
            { letter: "A", text: "melting of floating sea ice in the Arctic Ocean" },
            { letter: "B", text: "melting of icebergs already floating in the sea" },
            { letter: "C", text: "freezing of seawater into new ice near Antarctica" },
            { letter: "D", text: "melting of the ice sheet that covers Greenland" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "ocean-peru-upwelling",
      family: "OCEAN",
      title: "Cold water, anchovies and El Niño",
      kind: "Oceans · ES.10",
      blurb: "Upwelling, a thermocline and a warm year off the coast of Peru.",
      level: 3,
      passage: "<p>" + N(1) + "Along the coast of Peru, steady trade winds push surface water westward, away from the shore. " + N(2) + "Cold water from below rises to replace it, a process called <strong>upwelling</strong>. " + N(3) + "The rising water carries nutrients that feed plankton, which support one of the world's largest anchovy fisheries. " + N(4) + "Beneath the warm surface layer lies the <strong>thermocline</strong>, a layer in which temperature drops quickly with depth. " + N(5) + "In a normal year, a probe lowered off Peru read 18 °C at the surface, 17 °C at 20 m, 13 °C at 40 m, 12 °C at 60 m and 11.5 °C at 100 m. " + N(6) + "Every few years, during an <strong>El Niño</strong>, the trade winds weaken, warm water spreads east across the Pacific, and the thermocline off Peru sinks deeper, so the upwelled water is warm and poor in nutrients. " + N(7) + "An El Niño usually lasts about a year, so it is a short-term variation rather than a long-term change. " + N(8) + "Its effects reach far away: during El Niño years, stronger winds high over the tropical Atlantic tend to tear apart storms as they form. " + N(9) + "Peru has sometimes shortened or closed its anchovy season during an El Niño.</p>" +
        "<table><tr><th>Year</th><th>Surface temperature off Peru (°C)</th><th>Anchovy catch (million tonnes)</th></tr><tr><td>1</td><td>17</td><td>6.5</td></tr><tr><td>2</td><td>18</td><td>6.0</td></tr><tr><td>3</td><td>24</td><td>1.2</td></tr><tr><td>4</td><td>18</td><td>5.4</td></tr></table>",
      claims: [
        {
          id: "cause",
          sol: "ES.10.a",
          sub: "ES.10.a.2",
          stem: "Upwelling off the coast of Peru depends mainly on —",
          choices: [
            { letter: "A", text: "tides that lift deep water toward the surface" },
            { letter: "B", text: "warm surface water sinking near the coast" },
            { letter: "C", text: "winds that push surface water away from shore" },
            { letter: "D", text: "rivers that pour fresh water into the ocean" }
          ],
          correct: "C"
        },
        {
          id: "elnino",
          sol: "ES.10.a",
          sub: "ES.10.a.3",
          stem: "Which year in the table was most likely an El Niño year?",
          choices: [
            { letter: "A", text: "Year 1" },
            { letter: "B", text: "Year 2" },
            { letter: "C", text: "Year 3" },
            { letter: "D", text: "Year 4" }
          ],
          correct: "C"
        },
        {
          id: "thermocline",
          sol: "ES.10.a",
          sub: "ES.10.a.3",
          stem: "Based on the readings in sentence 5, the thermocline off Peru in a normal year lies between about —",
          choices: [
            { letter: "A", text: "0 m and 20 m deep" },
            { letter: "B", text: "20 m and 40 m deep" },
            { letter: "C", text: "40 m and 60 m deep" },
            { letter: "D", text: "60 m and 100 m deep" }
          ],
          correct: "B"
        },
        {
          id: "layers",
          sol: "ES.10.a",
          sub: "ES.10.a.1",
          stem: "Water above the thermocline mixes very little with the water below it because the upper water is —",
          choices: [
            { letter: "A", text: "colder, so it is denser" },
            { letter: "B", text: "saltier, so it is denser" },
            { letter: "C", text: "the same density but faster" },
            { letter: "D", text: "warmer, so it is less dense" }
          ],
          correct: "D"
        },
        {
          id: "atlantic",
          sol: "ES.10.b",
          sub: "ES.10.b.2",
          stem: "Based on sentence 8, during an El Niño year the Atlantic coast, including Virginia, would most likely face —",
          choices: [
            { letter: "A", text: "fewer hurricanes than usual" },
            { letter: "B", text: "more hurricanes than usual" },
            { letter: "C", text: "strong new upwelling off Virginia Beach" },
            { letter: "D", text: "no change, since the Pacific is far away" }
          ],
          correct: "A"
        },
        {
          id: "season",
          sol: "ES.10.e",
          sub: "ES.10.e.2",
          stem: "Which statement best evaluates Peru's decision in sentence 9?",
          choices: [
            { letter: "A", text: "It raises the catch that year, since the fish have more time to grow." },
            { letter: "B", text: "It has no cost, since few people in Peru earn money from anchovies." },
            { letter: "C", text: "It ends El Niño sooner, since fewer boats let upwelling return." },
            { letter: "D", text: "It cuts income for a season but helps the stock recover afterward." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "ocean-bay-dead-zone",
      family: "OCEAN",
      title: "The Bay's summer dead zone",
      kind: "Oceans · ES.10",
      blurb: "Nutrients, algae, oysters and a pollution diet for the Chesapeake Bay.",
      level: 3,
      passage: "<p>" + N(1) + "Every summer, part of the deep water in the Chesapeake Bay holds so little dissolved oxygen that crabs, fish and oysters must leave or die. " + N(2) + "The problem starts with nitrogen and phosphorus from fertilizer, manure, sewage and air pollution. " + N(3) + "These <strong>nutrients</strong> wash into rivers and feed huge <strong>algal blooms</strong> in spring. " + N(4) + "When the algae die and sink, bacteria decompose them and use up the oxygen in the deep water. " + N(5) + "In summer, a warm, fresher layer sits on top of cooler, saltier bottom water, so oxygen from the air cannot mix down. " + N(6) + "Oysters once filtered much of the Bay's water, but overharvesting and disease left only a small fraction of them; today blue crab and menhaden catches are managed with limits. " + N(7) + "Menhaden are small fish eaten by striped bass, ospreys and other predators. " + N(8) + "In 2010 the Bay states and Washington, D.C., adopted a \"pollution diet,\" the Chesapeake Bay <strong>TMDL</strong>, which caps nutrients and sediment and calls for upgraded sewage plants, fences that keep cattle out of streams and forested buffers along streams. " + N(9) + "The table shows monitoring results.</p>" +
        "<table><tr><th>Year</th><th>Nitrogen reaching the Bay (million lb)</th><th>Average summer dead zone (km³)</th></tr><tr><td>2006</td><td>300</td><td>9.0</td></tr><tr><td>2010</td><td>285</td><td>8.4</td></tr><tr><td>2014</td><td>260</td><td>7.1</td></tr><tr><td>2018</td><td>270</td><td>7.6</td></tr><tr><td>2022</td><td>240</td><td>6.2</td></tr></table>",
      claims: [
        {
          id: "sequence",
          sol: "ES.10.e",
          sub: "ES.10.e.1",
          stem: "Which sequence best shows how fertilizer runoff leads to the dead zone?",
          choices: [
            { letter: "A", text: "nutrients → more oxygen → fish die → algae grow" },
            { letter: "B", text: "algae die → nutrients enter → oxygen rises → crabs leave" },
            { letter: "C", text: "sediment → oysters grow → algae die → oxygen rises" },
            { letter: "D", text: "nutrients → algal bloom → algae die → bacteria use oxygen" }
          ],
          correct: "D"
        },
        {
          id: "layers",
          sol: "ES.10.a",
          sub: "ES.10.a.1",
          stem: "The surface layer described in sentence 5 stays on top of the bottom water because it is —",
          choices: [
            { letter: "A", text: "warmer and fresher, so it is less dense" },
            { letter: "B", text: "colder and saltier, so it is less dense" },
            { letter: "C", text: "warmer and saltier, so it is more dense" },
            { letter: "D", text: "cooler and fresher, so it is more dense" }
          ],
          correct: "A"
        },
        {
          id: "tmdl",
          sol: "ES.10.e",
          sub: "ES.10.e.2",
          stem: "Based on the table, which statement best evaluates the progress made under the pollution diet?",
          choices: [
            { letter: "A", text: "The dead zone disappeared within a few years after 2010." },
            { letter: "B", text: "Nitrogen and the dead zone have mostly decreased, with ups and downs." },
            { letter: "C", text: "Nitrogen rose every year, but the dead zone shrank anyway." },
            { letter: "D", text: "The dead zone grew larger each time nitrogen went down." }
          ],
          correct: "B"
        },
        {
          id: "warm",
          sol: "ES.10.d",
          sub: "ES.10.d.1",
          stem: "Water in the Bay has been slowly warming. Warmer water would most likely make the dead zone worse because warm water —",
          choices: [
            { letter: "A", text: "holds more dissolved oxygen than cold water" },
            { letter: "B", text: "is denser, so it sinks and carries oxygen down" },
            { letter: "C", text: "holds less dissolved oxygen than cold water" },
            { letter: "D", text: "contains less salt than the cold water below" }
          ],
          correct: "C"
        },
        {
          id: "source",
          sol: "ES.10.e",
          sub: "ES.10.e.2",
          stem: "Which action would most directly reduce the cause of the dead zone at its source?",
          choices: [
            { letter: "A", text: "building concrete seawalls along the Bay shore" },
            { letter: "B", text: "dredging deeper shipping channels in the Bay" },
            { letter: "C", text: "raising the yearly limit on the blue crab catch" },
            { letter: "D", text: "planting forest buffers that trap farm runoff" }
          ],
          correct: "D"
        },
        {
          id: "menhaden",
          sol: "ES.10.e",
          sub: "ES.10.e.2",
          stem: "Virginia sets a yearly limit on how many menhaden may be caught. Select TWO statements that describe a likely result of this limit.",
          choices: [
            { letter: "A", text: "More menhaden remain to feed striped bass and ospreys." },
            { letter: "B", text: "The dead zone grows because menhaden add nitrogen." },
            { letter: "C", text: "Fishing companies earn less in the short term." },
            { letter: "D", text: "The upper Bay becomes saltier than the ocean." }
          ],
          correct: ["A", "C"]
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
