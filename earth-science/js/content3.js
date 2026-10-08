/* SOL Lab Earth Science — Universe & Solar System (ES.2.a–d, ES.3.a–b). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "space-moon-log-roanoke",
      family: "SPACE",
      title: "A month of moon sketches",
      kind: "Universe & Solar System · ES.2 · ES.3",
      blurb: "Four phases, one coppery full moon: read a backyard moon log from Roanoke.",
      level: 1,
      passage: "<p>" + N(1) + "From her backyard in Roanoke, a student observed the moon once a week for a month and recorded its phase. " + N(2) + "The moon could not be seen at all on October 2. " + N(3) + "On the night of October 17, the full moon slowly darkened to a dull coppery red for about an hour before brightening again.</p>" +
        "<table><tr><th>Date</th><th>Moon phase</th></tr><tr><td>October 2</td><td>new moon</td></tr><tr><td>October 9</td><td>first quarter</td></tr><tr><td>October 17</td><td>full moon</td></tr><tr><td>October 24</td><td>third quarter</td></tr></table>",
      claims: [
        {
          id: "phases",
          sol: "ES.3.b",
          sub: "ES.3.b.2",
          stem: "The moon's appearance changed from week to week because —",
          choices: [
            { letter: "A", text: "Earth's shadow covered a larger or smaller part of the moon each week" },
            { letter: "B", text: "the moon turned a different face toward Earth each week" },
            { letter: "C", text: "we saw different amounts of the moon's sunlit half as it orbited" },
            { letter: "D", text: "clouds of gas on the moon hid part of its surface each week" }
          ],
          correct: "C"
        },
        {
          id: "red-moon",
          sol: "ES.3.b",
          sub: "ES.3.b.2",
          stem: "Which arrangement best explains what the student saw in sentence 3?",
          choices: [
            { letter: "A", text: "Earth was between the sun and the moon, and Earth's shadow fell on the moon." },
            { letter: "B", text: "The moon was between the sun and Earth, and the moon's own shadow fell on Earth." },
            { letter: "C", text: "The sun was between Earth and the moon, so the moon got less light." },
            { letter: "D", text: "The moon was at a right angle to the sun and Earth, half in shadow." }
          ],
          correct: "A"
        },
        {
          id: "moonlight",
          sol: "ES.2.c",
          sub: "ES.2.c.1",
          stem: "The student could see the moon at night because the moon —",
          choices: [
            { letter: "A", text: "makes its own light by nuclear fusion" },
            { letter: "B", text: "glows from heat left in its molten core" },
            { letter: "C", text: "gives off light from gases in its thick atmosphere" },
            { letter: "D", text: "reflects sunlight from its rocky surface" }
          ],
          correct: "D"
        },
        {
          id: "next-new",
          sol: "ES.3.b",
          sub: "ES.3.b.3",
          stem: "Based on the table, the next new moon most likely happened on about —",
          choices: [
            { letter: "A", text: "October 24" },
            { letter: "B", text: "October 31" },
            { letter: "C", text: "November 9" },
            { letter: "D", text: "November 16" }
          ],
          correct: "B"
        },
        {
          id: "solar-date",
          sol: "ES.3.b",
          sub: "ES.3.b.3",
          stem: "On which date in the table was the moon in the right position for a solar eclipse to be possible?",
          choices: [
            { letter: "A", text: "October 9" },
            { letter: "B", text: "October 17" },
            { letter: "C", text: "October 2" },
            { letter: "D", text: "October 24" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "space-galaxy-shapes",
      family: "SPACE",
      title: "Three galaxies, one shift",
      kind: "Universe & Solar System · ES.2",
      blurb: "Sort three galaxies by shape and read what their spectra say.",
      level: 1,
      passage: "<p>" + N(1) + "Students at a school observatory in Fairfax County photographed three galaxies. " + N(2) + "Galaxy X is a flat disk with bright arms curving out from its center. " + N(3) + "Galaxy Y is a smooth oval of old, yellowish stars with little gas or dust. " + N(4) + "Galaxy Z has no definite shape. " + N(5) + "A university catalog showed that the dark lines in each galaxy's spectrum are shifted toward red, compared with the same lines measured in a lab.</p>",
      claims: [
        {
          id: "type-y",
          sol: "ES.2.b",
          sub: "ES.2.b.1",
          stem: "Galaxy Y is best classified as —",
          choices: [
            { letter: "A", text: "a spiral galaxy" },
            { letter: "B", text: "an irregular galaxy" },
            { letter: "C", text: "an elliptical galaxy" },
            { letter: "D", text: "a barred spiral galaxy" }
          ],
          correct: "C"
        },
        {
          id: "milky-way",
          sol: "ES.2.b",
          sub: "ES.2.b.1",
          stem: "Our own galaxy, the Milky Way, has the same basic shape as —",
          choices: [
            { letter: "A", text: "Galaxy X" },
            { letter: "B", text: "Galaxy Y" },
            { letter: "C", text: "Galaxy Z" },
            { letter: "D", text: "none of the three galaxies" }
          ],
          correct: "A"
        },
        {
          id: "red-shift",
          sol: "ES.2.a",
          sub: "ES.2.a.2",
          stem: "Which conclusion is best supported by the observation in sentence 5?",
          choices: [
            { letter: "A", text: "The galaxies are moving toward Earth and will soon collide with it." },
            { letter: "B", text: "The galaxies are moving away from us, as expected in an expanding universe." },
            { letter: "C", text: "The galaxies are made only of cool red stars, so all of their light looks red." },
            { letter: "D", text: "The galaxies are hidden behind dust clouds that turn their light red." }
          ],
          correct: "B"
        },
        {
          id: "farther",
          sol: "ES.2.a",
          sub: "ES.2.a.2",
          stem: "A fourth galaxy is found to be twice as far away as Galaxy X. If the universe is expanding, its spectrum would most likely show —",
          choices: [
            { letter: "A", text: "a blue shift, because it is moving toward Earth instead" },
            { letter: "B", text: "the same red shift that Galaxy X shows" },
            { letter: "C", text: "no shift, because it is too far away to measure" },
            { letter: "D", text: "a larger red shift, because it is moving away faster" }
          ],
          correct: "D"
        },
        {
          id: "space-scope",
          sol: "ES.2.d",
          sub: "ES.2.d.1",
          stem: "A telescope in orbit, such as the Hubble Space Telescope, takes sharper galaxy images than the school's telescope mainly because it —",
          choices: [
            { letter: "A", text: "is much closer to the faraway galaxies it photographs" },
            { letter: "B", text: "is above the air, which blurs and absorbs light" },
            { letter: "C", text: "moves at the same speed as the galaxies" },
            { letter: "D", text: "uses sunlight to make the galaxies brighter" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "space-seasons-charlottesville",
      family: "SPACE",
      title: "Noon sun over Charlottesville",
      kind: "Universe & Solar System · ES.3",
      blurb: "Sun height, day length and Earth's distance: what really causes the seasons?",
      level: 1,
      passage: "<p>" + N(1) + "A student in Charlottesville, at about 38° N latitude, measured how high the sun stood above the horizon at noon and counted the hours of daylight on four dates. " + N(2) + "She also learned that Earth is closest to the sun in early January (about 147 million km) and farthest from it in early July (about 152 million km).</p>" +
        "<table><tr><th>Date</th><th>Noon sun height</th><th>Daylight</th></tr><tr><td>March 20</td><td>52°</td><td>12.1 h</td></tr><tr><td>June 21</td><td>75°</td><td>14.8 h</td></tr><tr><td>September 22</td><td>52°</td><td>12.1 h</td></tr><tr><td>December 21</td><td>29°</td><td>9.5 h</td></tr></table>",
      claims: [
        {
          id: "cause",
          sol: "ES.3.b",
          sub: "ES.3.b.1",
          stem: "Virginia has seasons mainly because —",
          choices: [
            { letter: "A", text: "Earth's distance from the sun changes during the year" },
            { letter: "B", text: "Earth's axis is tilted as Earth revolves around the sun" },
            { letter: "C", text: "the sun gives off much more energy in summer than in winter" },
            { letter: "D", text: "Earth spins faster on its axis in summer than in winter" }
          ],
          correct: "B"
        },
        {
          id: "closest",
          sol: "ES.3.b",
          sub: "ES.3.b.3",
          stem: "A classmate says summer happens when Earth is closest to the sun. Which information from the passage best shows that this idea is wrong?",
          choices: [
            { letter: "A", text: "Earth is closest to the sun in January, during Virginia's winter." },
            { letter: "B", text: "The noon sun was at the same height in March and in September." },
            { letter: "C", text: "The number of daylight hours in Charlottesville changes during the year." },
            { letter: "D", text: "The noon sun stood highest in the sky on the date in June." }
          ],
          correct: "A"
        },
        {
          id: "june-dec",
          sol: "ES.3.b",
          sub: "ES.3.b.1",
          stem: "Compared with December 21, on June 21 Charlottesville received —",
          choices: [
            { letter: "A", text: "fewer hours of daylight and more direct sunlight" },
            { letter: "B", text: "more hours of daylight but less direct sunlight" },
            { letter: "C", text: "the same hours of daylight and a higher noon sun" },
            { letter: "D", text: "more hours of daylight and more direct sunlight" }
          ],
          correct: "D"
        },
        {
          id: "south",
          sol: "ES.3.b",
          sub: "ES.3.b.3",
          stem: "On December 21, a city in Argentina at 38° S latitude would most likely have —",
          choices: [
            { letter: "A", text: "winter, with a noon sun about 29° above the horizon" },
            { letter: "B", text: "spring, with about 12 hours of daylight" },
            { letter: "C", text: "summer, with a noon sun about 75° above the horizon" },
            { letter: "D", text: "winter, because Earth is far from the sun in December" }
          ],
          correct: "C"
        },
        {
          id: "equinox",
          sol: "ES.3.b",
          sub: "ES.3.b.1",
          stem: "On March 20 and September 22, day and night were each about 12 hours long because —",
          choices: [
            { letter: "A", text: "Earth was at its closest point to the sun on those dates" },
            { letter: "B", text: "the sun's most direct rays struck the equator on those dates" },
            { letter: "C", text: "the sun's most direct rays struck the Tropic of Cancer" },
            { letter: "D", text: "Earth's axis was not tilted at all on either of those two dates" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "space-planet-table",
      family: "SPACE",
      title: "Six planets by the numbers",
      kind: "Universe & Solar System · ES.2 · ES.3",
      blurb: "Distance, density and orbit time: does where a planet formed decide what it is made of?",
      level: 1,
      passage: "<p>" + N(1) + "An Earth science class collected data on six planets to test an idea from the solar nebular theory: a planet's makeup depends on how far from the sun it formed. " + N(2) + "Density hints at what a planet is mostly made of; liquid water has a density of 1.0 g/cm³, common rock about 3, and iron about 8. " + N(3) + "One astronomical unit (AU) is Earth's average distance from the sun, about 150 million km.</p>" +
        "<table><tr><th>Planet</th><th>Distance (AU)</th><th>Density (g/cm³)</th><th>Orbit time (Earth years)</th></tr>" +
        "<tr><td>Mercury</td><td>0.39</td><td>5.4</td><td>0.24</td></tr><tr><td>Earth</td><td>1.0</td><td>5.5</td><td>1.0</td></tr><tr><td>Mars</td><td>1.5</td><td>3.9</td><td>1.9</td></tr><tr><td>Jupiter</td><td>5.2</td><td>1.3</td><td>11.9</td></tr><tr><td>Saturn</td><td>9.5</td><td>0.7</td><td>29.5</td></tr><tr><td>Neptune</td><td>30.1</td><td>1.6</td><td>165</td></tr></table>",
      claims: [
        {
          id: "least-dense",
          sol: "ES.2.c",
          sub: "ES.2.c.1",
          stem: "According to the table, which planet has a density lower than that of liquid water?",
          choices: [
            { letter: "A", text: "Jupiter" },
            { letter: "B", text: "Neptune" },
            { letter: "C", text: "Mars" },
            { letter: "D", text: "Saturn" }
          ],
          correct: "D"
        },
        {
          id: "inner-outer",
          sol: "ES.2.c",
          sub: "ES.2.c.2",
          stem: "Which conclusion is best supported by the data in the table?",
          choices: [
            { letter: "A", text: "Planets that formed far from the sun are made of denser materials." },
            { letter: "B", text: "Inner planets are dense like rock and metal; outer planets are far less dense." },
            { letter: "C", text: "Each planet is denser than the planet just inside its orbit around the sun." },
            { letter: "D", text: "All six planets have about the same density, whatever their distance from the sun." }
          ],
          correct: "B"
        },
        {
          id: "uranus",
          sol: "ES.2.c",
          sub: "ES.2.c.2",
          stem: "Uranus orbits between Saturn and Neptune, at about 19 AU. Based on the table, the time Uranus takes to orbit the sun is most likely about —",
          choices: [
            { letter: "A", text: "8 Earth years" },
            { letter: "B", text: "20 Earth years" },
            { letter: "C", text: "84 Earth years" },
            { letter: "D", text: "200 Earth years" }
          ],
          correct: "C"
        },
        {
          id: "mars-water",
          sol: "ES.3.a",
          sub: "ES.3.a.2",
          stem: "Mars has a very thin atmosphere. Using the table and this fact, which best explains why liquid water does not last on the surface of Mars today?",
          choices: [
            { letter: "A", text: "Mars is denser than Earth, so its water sinks deep into its core." },
            { letter: "B", text: "Mars takes less time than Earth to orbit, so it has short summers." },
            { letter: "C", text: "Mars is a gas planet with no solid surface where liquid water could collect." },
            { letter: "D", text: "Mars is farther out and its thin air holds little heat, so water freezes." }
          ],
          correct: "D"
        },
        {
          id: "one-au",
          sol: "ES.3.a",
          sub: "ES.3.a.1",
          stem: "Earth's distance of 1 AU from the sun is important for life mainly because it —",
          choices: [
            { letter: "A", text: "keeps surface temperatures in the range where water stays liquid" },
            { letter: "B", text: "makes Earth the densest of all eight planets in the whole solar system" },
            { letter: "C", text: "gives Earth the shortest orbit time of any planet in the table" },
            { letter: "D", text: "keeps Earth out of the path of every asteroid and comet" }
          ],
          correct: "A"
        },
        {
          id: "probes",
          sol: "ES.2.d",
          sub: "ES.2.d.1",
          stem: "Much of what scientists know about Jupiter, Saturn and Neptune came from —",
          choices: [
            { letter: "A", text: "crewed missions that landed on each of these planets" },
            { letter: "B", text: "telescopes that astronauts built on the moon's surface" },
            { letter: "C", text: "uncrewed probes that flew past or orbited these planets" },
            { letter: "D", text: "samples of gas brought back to Earth from each of the planets" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "space-pittsylvania-meteorite",
      family: "SPACE",
      title: "A heavy stone in a hayfield",
      kind: "Universe & Solar System · ES.2 · ES.3",
      blurb: "A fireball over Southside Virginia, a dense black stone, and the clues to where it came from.",
      level: 2,
      passage: "<p>" + N(1) + "Late one night, people in Pittsylvania County, Virginia, saw a brilliant streak of light cross the sky and then heard a loud boom. " + N(2) + "A week later, a student found a fist-sized stone in a hayfield nearby. " + N(3) + "It had a thin, black, glassy crust and felt very heavy for its size. " + N(4) + "In the school lab, the stone attracted a magnet and had a density of 7.6 g/cm³. " + N(5) + "A cut face showed shiny crystals of iron and nickel metal. " + N(6) + "For comparison, most rocks at Earth's surface have densities near 2.7 g/cm³.</p>",
      claims: [
        {
          id: "streak",
          sol: "ES.2.c",
          sub: "ES.2.c.1",
          stem: "The streak of light in sentence 1 is best called —",
          choices: [
            { letter: "A", text: "a comet" },
            { letter: "B", text: "a meteor" },
            { letter: "C", text: "an asteroid" },
            { letter: "D", text: "a meteorite" }
          ],
          correct: "B"
        },
        {
          id: "stone",
          sol: "ES.2.c",
          sub: "ES.2.c.1",
          stem: "Which term correctly names the stone the student found in the hayfield?",
          choices: [
            { letter: "A", text: "a meteorite" },
            { letter: "B", text: "a meteoroid" },
            { letter: "C", text: "a comet nucleus" },
            { letter: "D", text: "a dwarf planet" }
          ],
          correct: "A"
        },
        {
          id: "source",
          sol: "ES.2.c",
          sub: "ES.2.c.2",
          stem: "The stone's density and metal content suggest that it most likely came from —",
          choices: [
            { letter: "A", text: "the icy nucleus of a comet from beyond Neptune" },
            { letter: "B", text: "the metal-rich interior of an asteroid that broke apart" },
            { letter: "C", text: "the cloudy outer layers of a gas planet such as Jupiter" },
            { letter: "D", text: "a piece of Virginia bedrock thrown up when the stone hit the ground" }
          ],
          correct: "B"
        },
        {
          id: "not-comet",
          sol: "ES.2.c",
          sub: "ES.2.c.2",
          stem: "A classmate claims the stone is a piece of a comet. Which evidence best argues against this claim?",
          choices: [
            { letter: "A", text: "It was found in a hayfield only a week after the streak of light was seen." },
            { letter: "B", text: "It made a loud boom as it passed through the air." },
            { letter: "C", text: "It is made of dense metal, while comets are mostly ice and dust." },
            { letter: "D", text: "It has a thin crust that is black and glassy." }
          ],
          correct: "C"
        },
        {
          id: "shield",
          sol: "ES.3.a",
          sub: "ES.3.a.1",
          stem: "Most meteoroids that enter Earth's atmosphere never reach the ground. This shows that the atmosphere helps protect life on Earth by —",
          choices: [
            { letter: "A", text: "blocking all of the sunlight from reaching the surface at night" },
            { letter: "B", text: "pulling most meteoroids into orbit around the planet" },
            { letter: "C", text: "producing the magnetic field that pushes rocks away" },
            { letter: "D", text: "heating and burning up most small space rocks as they fall" }
          ],
          correct: "D"
        },
        {
          id: "sample-return",
          sol: "ES.2.d",
          sub: "ES.2.d.1",
          stem: "Which mission would give the most direct evidence about what asteroids are made of?",
          choices: [
            { letter: "A", text: "a space telescope that takes photographs of faraway galaxies" },
            { letter: "B", text: "a weather satellite that orbits above Earth's equator" },
            { letter: "C", text: "a probe that collects rock from an asteroid and returns it" },
            { letter: "D", text: "a crew that spends six months on the space station" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "space-virginia-beach-tides",
      family: "SPACE",
      title: "Tides at the Virginia Beach pier",
      kind: "Universe & Solar System · ES.2 · ES.3",
      blurb: "A month of tidal ranges beside the moon's phases: find the spring and neap tides.",
      level: 2,
      passage: "<p>" + N(1) + "A marine science club measured the <strong>tidal range</strong>, the difference in water height between a high tide and the next low tide, at a fishing pier in Virginia Beach. " + N(2) + "The pier has two high tides and two low tides on almost every day. " + N(3) + "The table shows the largest range measured on five dates and the moon's phase on each date. " + N(4) + "On the night of the full moon, club members also looked at the moon through a telescope and saw thousands of ancient craters.</p>" +
        "<table><tr><th>Date</th><th>Moon phase</th><th>Tidal range (m)</th></tr><tr><td>April 1</td><td>new moon</td><td>1.3</td></tr><tr><td>April 8</td><td>first quarter</td><td>0.7</td></tr><tr><td>April 16</td><td>full moon</td><td>1.2</td></tr><tr><td>April 23</td><td>third quarter</td><td>0.7</td></tr><tr><td>April 30</td><td>new moon</td><td>1.3</td></tr></table>",
      claims: [
        {
          id: "tide-cause",
          sol: "ES.3.b",
          sub: "ES.3.b.2",
          stem: "The daily rise and fall of the water at the pier is caused mainly by —",
          choices: [
            { letter: "A", text: "strong winds that push the ocean water toward the shore each day" },
            { letter: "B", text: "the gravitational pull of the moon and sun on Earth's oceans" },
            { letter: "C", text: "the moon's shadow passing over the ocean twice each day" },
            { letter: "D", text: "Earth's revolution around the sun once each year" }
          ],
          correct: "B"
        },
        {
          id: "pattern",
          sol: "ES.3.b",
          sub: "ES.3.b.3",
          stem: "Which pattern is shown by the data in the table?",
          choices: [
            { letter: "A", text: "The tidal range was greatest at the new and full moons." },
            { letter: "B", text: "The tidal range was greatest at the first and third quarter moons." },
            { letter: "C", text: "The tidal range grew larger every week of the month." },
            { letter: "D", text: "The tidal range was the same at every moon phase." }
          ],
          correct: "A"
        },
        {
          id: "spring",
          sol: "ES.3.b",
          sub: "ES.3.b.2",
          stem: "The large ranges on April 1 and April 16 are called spring tides. Spring tides happen when the sun, Earth and moon are —",
          choices: [
            { letter: "A", text: "at right angles to one another in space" },
            { letter: "B", text: "at their greatest distances apart" },
            { letter: "C", text: "lined up in a nearly straight line" },
            { letter: "D", text: "moving in opposite directions" }
          ],
          correct: "C"
        },
        {
          id: "may-7",
          sol: "ES.3.b",
          sub: "ES.3.b.3",
          stem: "Based on the table, the largest tidal range on May 7, about one week after the April 30 new moon, would most likely be about —",
          choices: [
            { letter: "A", text: "0.3 m" },
            { letter: "B", text: "0.7 m" },
            { letter: "C", text: "1.3 m" },
            { letter: "D", text: "2.0 m" }
          ],
          correct: "B"
        },
        {
          id: "oceans",
          sol: "ES.3.a",
          sub: "ES.3.a.1",
          stem: "Oceans like the one at Virginia Beach can exist on Earth's surface mainly because Earth —",
          choices: [
            { letter: "A", text: "has a moon large enough to raise tides" },
            { letter: "B", text: "is tilted on its axis, which gives most places four seasons" },
            { letter: "C", text: "is the largest planet in the solar system" },
            { letter: "D", text: "is at a distance from the sun where water stays liquid" }
          ],
          correct: "D"
        },
        {
          id: "craters",
          sol: "ES.2.c",
          sub: "ES.2.c.1",
          stem: "The craters seen in sentence 4 have lasted for billions of years mainly because the moon has —",
          choices: [
            { letter: "A", text: "no air or liquid water to wear them away" },
            { letter: "B", text: "a thick atmosphere that shields its surface" },
            { letter: "C", text: "active volcanoes that keep rebuilding them" },
            { letter: "D", text: "a strong magnetic field that holds rocks in place" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "space-star-catalog",
      family: "SPACE",
      title: "Five stars and an H-R diagram",
      kind: "Universe & Solar System · ES.2",
      blurb: "Temperature, luminosity and mass from a star catalog: where is each star in its life?",
      level: 2,
      passage: "<p>" + N(1) + "Astronomy students at a college observatory in the Shenandoah Valley compared the sun with four other stars from a star catalog. " + N(2) + "A star forms when gravity pulls together gas and dust in a <strong>nebula</strong> until its core is hot enough for hydrogen to fuse into helium. " + N(3) + "On an <strong>H-R diagram</strong>, a graph of stars' temperature and luminosity, most stars lie on a band called the main sequence, where hotter stars are also brighter and more massive. " + N(4) + "A star spends most of its life on the main sequence. " + N(5) + "What happens next depends on its mass. " + N(6) + "A star like the sun swells into a red giant and then leaves behind a small, hot core called a white dwarf. " + N(7) + "A star more than about eight times the sun's mass becomes a red supergiant, then explodes as a supernova, leaving a neutron star or a black hole.</p>" +
        "<table><tr><th>Star</th><th>Surface temperature (K)</th><th>Luminosity: energy given off (sun = 1)</th><th>Mass (sun = 1)</th></tr>" +
        "<tr><td>Sun</td><td>5,800</td><td>1</td><td>1</td></tr><tr><td>P</td><td>30,000</td><td>50,000</td><td>18</td></tr><tr><td>Q</td><td>3,400</td><td>0.01</td><td>0.3</td></tr><tr><td>R</td><td>3,600</td><td>40,000</td><td>15</td></tr><tr><td>S</td><td>10,000</td><td>0.001</td><td>0.6</td></tr></table>",
      claims: [
        {
          id: "becomes-star",
          sol: "ES.2.b",
          sub: "ES.2.b.1",
          stem: "According to the passage, a contracting ball of gas and dust becomes a true star when —",
          choices: [
            { letter: "A", text: "a nearby planet collects enough gas to begin glowing" },
            { letter: "B", text: "hydrogen in its core begins to fuse into helium" },
            { letter: "C", text: "a supernova blows the nebula around it apart" },
            { letter: "D", text: "its outer layers cool and turn a deep red color" }
          ],
          correct: "B"
        },
        {
          id: "star-s",
          sol: "ES.2.b",
          sub: "ES.2.b.2",
          stem: "Star S is hotter than the sun but gives off only one-thousandth as much energy. Which best explains this?",
          choices: [
            { letter: "A", text: "It is a white dwarf, the small leftover core of a sun-like star." },
            { letter: "B", text: "It is a main-sequence star that has much more mass than our sun does." },
            { letter: "C", text: "It is a red supergiant that is near the end of its life." },
            { letter: "D", text: "It is much farther from Earth than the sun is." }
          ],
          correct: "A"
        },
        {
          id: "fate-p",
          sol: "ES.2.b",
          sub: "ES.2.b.2",
          stem: "Based on the passage, Star P will most likely end its life as —",
          choices: [
            { letter: "A", text: "a white dwarf, after a red giant stage" },
            { letter: "B", text: "a main-sequence star that never changes" },
            { letter: "C", text: "a supernova that leaves a neutron star or black hole" },
            { letter: "D", text: "a cold nebula that slowly forms new planets around it" }
          ],
          correct: "C"
        },
        {
          id: "longest-life",
          sol: "ES.2.b",
          sub: "ES.2.b.2",
          stem: "Massive stars use up their hydrogen much faster than small stars do. Which star in the table will most likely stay on the main sequence the longest?",
          choices: [
            { letter: "A", text: "Star P" },
            { letter: "B", text: "the sun" },
            { letter: "C", text: "Star R" },
            { letter: "D", text: "Star Q" }
          ],
          correct: "D"
        },
        {
          id: "sun-energy",
          sol: "ES.2.c",
          sub: "ES.2.c.1",
          stem: "The sun produces its energy by —",
          choices: [
            { letter: "A", text: "nuclear fusion of hydrogen into helium in its core" },
            { letter: "B", text: "burning coal and natural gas throughout its outer layers" },
            { letter: "C", text: "reflecting the light of other stars near it" },
            { letter: "D", text: "slowly cooling from a molten iron center" }
          ],
          correct: "A"
        },
        {
          id: "infrared",
          sol: "ES.2.d",
          sub: "ES.2.d.1",
          stem: "The James Webb Space Telescope observes infrared light, which passes through dust that blocks visible light. This makes it especially useful for —",
          choices: [
            { letter: "A", text: "measuring the surface temperature of Earth's oceans" },
            { letter: "B", text: "seeing new stars forming inside dusty nebulae" },
            { letter: "C", text: "landing on the surfaces of distant planets" },
            { letter: "D", text: "collecting samples of gas from the sun" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "space-wallops-cubesat",
      family: "SPACE",
      title: "A CubeSat from Wallops",
      kind: "Universe & Solar System · ES.2 · ES.3",
      blurb: "A student satellite counts charged particles from the sun and maps Earth's magnetic shield.",
      level: 2,
      passage: "<p>" + N(1) + "NASA's Wallops Flight Facility, on Virginia's Eastern Shore, launches rockets, scientific balloons and small satellites. " + N(2) + "A high school team built a <strong>CubeSat</strong>, a satellite about the size of a loaf of bread, that carried a counter for charged particles. " + N(3) + "A rocket launched from Wallops carried it to an orbit about 400 km up, on a path that crossed high northern and southern latitudes. " + N(4) + "The team's teacher explained that the sun gives off a steady stream of charged particles called the <strong>solar wind</strong>. " + N(5) + "Earth's magnetic field turns most of these particles aside, but some are guided down toward the poles, where they cause auroras. " + N(6) + "She added that the first U.S. satellite, launched in 1958, carried a particle counter that found belts of charged particles trapped by Earth's magnetic field. " + N(7) + "Before then, many scientists expected the space around Earth to be nearly empty.</p>" +
        "<table><tr><th>CubeSat location</th><th>Particle counts per second</th></tr><tr><td>Over the equator</td><td>12</td></tr><tr><td>Over Virginia (38° N)</td><td>20</td></tr><tr><td>Near the North Pole</td><td>145</td></tr><tr><td>Near the South Pole</td><td>138</td></tr></table>",
      claims: [
        {
          id: "why-orbit",
          sol: "ES.2.d",
          sub: "ES.2.d.1",
          stem: "Why did the team need a satellite in orbit, rather than a counter on the ground, to measure the solar wind?",
          choices: [
            { letter: "A", text: "Earth's magnetic field and air keep most of these particles from reaching the ground." },
            { letter: "B", text: "Charged particles can be counted only at night, and space far above Earth is always dark." },
            { letter: "C", text: "Particle counters are too large to be used inside a school laboratory." },
            { letter: "D", text: "The solar wind blows only over the oceans, where no stations are built." }
          ],
          correct: "A"
        },
        {
          id: "field-life",
          sol: "ES.3.a",
          sub: "ES.3.a.1",
          stem: "According to the passage, Earth's magnetic field helps make Earth suitable for life by —",
          choices: [
            { letter: "A", text: "holding the moon in its monthly orbit around Earth" },
            { letter: "B", text: "turning aside most charged particles from the sun" },
            { letter: "C", text: "keeping Earth at the right distance from the sun" },
            { letter: "D", text: "producing the oxygen found in Earth's atmosphere" }
          ],
          correct: "B"
        },
        {
          id: "counts",
          sol: "ES.3.a",
          sub: "ES.3.a.1",
          stem: "Which statement is best supported by the data in the table?",
          choices: [
            { letter: "A", text: "Particle counts were about the same everywhere along the orbit." },
            { letter: "B", text: "Particle counts were lowest near both poles and highest directly over the equator." },
            { letter: "C", text: "Particle counts were highest near the poles, where the field guides particles in." },
            { letter: "D", text: "Particle counts over Virginia were higher than near the North Pole." }
          ],
          correct: "C"
        },
        {
          id: "mars-field",
          sol: "ES.3.a",
          sub: "ES.3.a.2",
          stem: "Mars has had no global magnetic field for billions of years, and orbiters have measured gas escaping from the top of its atmosphere. Which inference is best supported?",
          choices: [
            { letter: "A", text: "The solar wind has stripped away much of Mars's air, leaving it thin and cold." },
            { letter: "B", text: "Mars must be closer to the sun than Earth is, so its air simply boils away into space." },
            { letter: "C", text: "Mars will soon have a thicker atmosphere than Earth has today." },
            { letter: "D", text: "Mars lost its air because it has no liquid water on its surface today." }
          ],
          correct: "A"
        },
        {
          id: "belts",
          sol: "ES.2.d",
          sub: "ES.2.d.2",
          stem: "How did the 1958 discovery described in sentences 6 and 7 change scientists' understanding of space near Earth?",
          choices: [
            { letter: "A", text: "It showed that the moon has a magnetic field that is as strong as Earth's." },
            { letter: "B", text: "It showed that the solar wind does not actually reach Earth." },
            { letter: "C", text: "It showed that the space around Earth holds trapped charged particles." },
            { letter: "D", text: "It showed that satellites cannot survive above the atmosphere." }
          ],
          correct: "C"
        },
        {
          id: "sun-makeup",
          sol: "ES.2.c",
          sub: "ES.2.c.1",
          stem: "The solar wind streams out from the sun, a star made mostly of —",
          choices: [
            { letter: "A", text: "iron and nickel" },
            { letter: "B", text: "rock and ice" },
            { letter: "C", text: "carbon dioxide and nitrogen" },
            { letter: "D", text: "hydrogen and helium" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "space-solar-nebula",
      family: "SPACE",
      title: "A model of the solar nebula",
      kind: "Universe & Solar System · ES.2",
      blurb: "One spinning cloud, a frost line, and why rocky worlds sit inside and giant ones outside.",
      level: 3,
      passage: "<p>" + N(1) + "The <strong>solar nebular theory</strong> explains how the solar system formed about 4.6 billion years ago. " + N(2) + "A huge, slowly spinning cloud of gas and dust began to collapse under its own gravity. " + N(3) + "Most of the mass fell to the center, which grew hot and dense enough to fuse hydrogen and became the sun. " + N(4) + "The rest flattened into a spinning disk. " + N(5) + "Close to the young sun it was too hot for ice to form, so only rock and metal clumped together, building small planets. " + N(6) + "Farther out, beyond a boundary called the <strong>frost line</strong> between the orbits of Mars and Jupiter, ice could form as well. " + N(7) + "There, planets grew large enough for their gravity to pull in huge amounts of hydrogen and helium gas. " + N(8) + "Leftover rocky pieces remain as asteroids, mostly between Mars and Jupiter. " + N(9) + "Leftover icy pieces remain as comets and as small bodies in the Kuiper belt beyond Neptune, including dwarf planets such as Pluto.</p>",
      claims: [
        {
          id: "inner",
          sol: "ES.2.c",
          sub: "ES.2.c.2",
          stem: "According to the model, Mercury, Venus, Earth and Mars are small, dense and rocky because they —",
          choices: [
            { letter: "A", text: "formed where it was too hot for ice, so only rock and metal collected" },
            { letter: "B", text: "formed beyond the frost line, where the most gas was available" },
            { letter: "C", text: "lost all their ice when the sun grew much larger long afterward" },
            { letter: "D", text: "were pulled away from the gas giants by the young sun's strong gravity" }
          ],
          correct: "A"
        },
        {
          id: "kuiper",
          sol: "ES.2.c",
          sub: "ES.2.c.2",
          stem: "A newly discovered object orbits the sun in the Kuiper belt. Based on the model, which TWO properties is it most likely to have? Select TWO.",
          choices: [
            { letter: "A", text: "a thick atmosphere of hydrogen and helium" },
            { letter: "B", text: "a body made mostly of ice mixed with rock" },
            { letter: "C", text: "a density close to that of solid iron" },
            { letter: "D", text: "a surface far colder than water's freezing point" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "pluto",
          sol: "ES.2.c",
          sub: "ES.2.c.1",
          stem: "Pluto is classified as a dwarf planet rather than a planet because it —",
          choices: [
            { letter: "A", text: "is made of ice and rock rather than of hydrogen and helium gas" },
            { letter: "B", text: "orbits Neptune instead of orbiting the sun" },
            { letter: "C", text: "is round but shares its orbit zone with many other objects" },
            { letter: "D", text: "is too far away to be seen with any telescope" }
          ],
          correct: "C"
        },
        {
          id: "comet-tail",
          sol: "ES.2.c",
          sub: "ES.2.c.1",
          stem: "When a comet's orbit brings it close to the sun, it grows a long, glowing tail because —",
          choices: [
            { letter: "A", text: "its ice turns to gas, and the sun blows the gas and dust outward" },
            { letter: "B", text: "it collides with asteroids and leaves a trail of broken rock" },
            { letter: "C", text: "it catches fire from the oxygen it meets in the sun's outer atmosphere" },
            { letter: "D", text: "its rocky core melts and the lava flows out behind it" }
          ],
          correct: "A"
        },
        {
          id: "sun-ignites",
          sol: "ES.2.b",
          sub: "ES.2.b.1",
          stem: "According to the model, the center of the collapsing cloud became a star when it —",
          choices: [
            { letter: "A", text: "cooled enough for ice to form in its outer layers" },
            { letter: "B", text: "was struck by a large icy body from the Kuiper belt" },
            { letter: "C", text: "spun fast enough to flatten into a thin disk" },
            { letter: "D", text: "became hot and dense enough for hydrogen to fuse" }
          ],
          correct: "D"
        },
        {
          id: "disks",
          sol: "ES.2.d",
          sub: "ES.2.d.2",
          stem: "Space telescopes have photographed young stars inside flat, spinning disks of gas and dust, some with gaps where planets may form. How does this evidence relate to the solar nebular theory?",
          choices: [
            { letter: "A", text: "It disproves the theory, because our solar system has no such disk today." },
            { letter: "B", text: "It supports the theory, because the theory predicts disks around new stars." },
            { letter: "C", text: "It has no bearing on the theory, because those stars are not the sun." },
            { letter: "D", text: "It shows that planets form first and their stars form much later." }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "space-expanding-universe",
      family: "SPACE",
      title: "Clues to an expanding universe",
      kind: "Universe & Solar System · ES.2",
      blurb: "Red shifts, a galaxy table and a faint microwave glow: weigh the evidence for the big bang.",
      level: 3,
      passage: "<p>" + N(1) + "In the 1920s, astronomers using the largest telescopes of the time spread the light from distant galaxies into spectra. " + N(2) + "Dark lines made by elements such as hydrogen appeared at longer, redder wavelengths than the same lines measured in a laboratory, a pattern called <strong>red shift</strong>. " + N(3) + "A red shift shows that a light source is moving away from the observer. " + N(4) + "The table shows rounded modern values for four galaxies.</p>" +
        "<table><tr><th>Galaxy</th><th>Distance (millions of light-years)</th><th>Speed away from us (km/s)</th></tr><tr><td>A</td><td>50</td><td>1,100</td></tr><tr><td>B</td><td>100</td><td>2,200</td></tr><tr><td>C</td><td>200</td><td>4,400</td></tr><tr><td>D</td><td>400</td><td>8,800</td></tr></table>" +
        "<p>" + N(5) + "By the 1950s, most astronomers accepted that the universe is expanding, but they debated two explanations. " + N(6) + "A steady-state model said the universe has no beginning and that new matter forms as it expands, so it always looks about the same and never had a hot early stage. " + N(7) + "The <strong>big bang theory</strong> said the universe began about 13.8 billion years ago in an extremely hot, dense state and has been expanding and cooling ever since, so a faint glow of leftover radiation should fill all of space. " + N(8) + "In 1965, two radio engineers in New Jersey detected a weak microwave signal coming equally from every direction in the sky. " + N(9) + "Later satellites mapped this <strong>cosmic microwave background</strong> in detail.</p>",
      claims: [
        {
          id: "cmb",
          sol: "ES.2.a",
          sub: "ES.2.a.1",
          stem: "The cosmic microwave background described in sentences 7 through 9 is best described as —",
          choices: [
            { letter: "A", text: "radio signals sent out by distant spacecraft" },
            { letter: "B", text: "heat given off by the sun and nearby stars" },
            { letter: "C", text: "sunlight reflected from the gas clouds that lie between galaxies" },
            { letter: "D", text: "leftover radiation from the hot, dense early universe" }
          ],
          correct: "D"
        },
        {
          id: "hubble-trend",
          sol: "ES.2.a",
          sub: "ES.2.a.2",
          stem: "Which pattern is shown by the data in the galaxy table?",
          choices: [
            { letter: "A", text: "Closer galaxies are moving away faster than distant ones." },
            { letter: "B", text: "Galaxies that are farther away are moving away faster." },
            { letter: "C", text: "All of the galaxies are moving away at about the same speed." },
            { letter: "D", text: "The galaxies are moving toward us at increasing speeds." }
          ],
          correct: "B"
        },
        {
          id: "galaxy-e",
          sol: "ES.2.a",
          sub: "ES.2.a.2",
          stem: "Galaxy E is 300 million light-years away. Based on the table, its speed away from us is most likely about —",
          choices: [
            { letter: "A", text: "3,300 km/s" },
            { letter: "B", text: "5,500 km/s" },
            { letter: "C", text: "6,600 km/s" },
            { letter: "D", text: "13,200 km/s" }
          ],
          correct: "C"
        },
        {
          id: "steady-state",
          sol: "ES.2.d",
          sub: "ES.2.d.2",
          stem: "Which observation most strongly favored the big bang theory over the steady-state model?",
          choices: [
            { letter: "A", text: "the microwave glow from every direction, which the big bang had predicted" },
            { letter: "B", text: "the red shift of galaxies, which showed that distant galaxies move away" },
            { letter: "C", text: "the dark lines in galaxy spectra, which are made by hydrogen and other elements" },
            { letter: "D", text: "the large size of the 1920s telescopes, which let astronomers see farther" }
          ],
          correct: "A"
        },
        {
          id: "two-clues",
          sol: "ES.2.a",
          sub: "ES.2.a.1",
          stem: "Which TWO observations described in the passage are evidence for the big bang theory? Select TWO.",
          choices: [
            { letter: "A", text: "red shifts that increase with a galaxy's distance" },
            { letter: "B", text: "hydrogen lines measured in an Earth laboratory" },
            { letter: "C", text: "a faint microwave glow from every direction" },
            { letter: "D", text: "the bright light given off by nearby stars" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "our-galaxy",
          sol: "ES.2.b",
          sub: "ES.2.b.1",
          stem: "Our own galaxy, the Milky Way, is best described as —",
          choices: [
            { letter: "A", text: "an elliptical galaxy made only of old red stars" },
            { letter: "B", text: "a spiral galaxy of billions of stars, one of them the sun" },
            { letter: "C", text: "the group of eight planets that orbit the sun" },
            { letter: "D", text: "a cloud of gas and dust where the sun and new planets are forming" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "space-why-earth-life",
      family: "SPACE",
      title: "Why only Earth?",
      kind: "Universe & Solar System · ES.2 · ES.3",
      blurb: "Compare Venus, Earth, Mars and Europa to see what makes a world fit for life.",
      level: 3,
      passage: "<p>" + N(1) + "An astronomy club at a Virginia high school asked why Earth is the only world known to support life. " + N(2) + "Members compared Earth with two neighboring planets and with Europa, a large icy moon of Jupiter.</p>" +
        "<table><tr><th>World</th><th>Distance from sun (AU)</th><th>Average surface temperature (°C)</th><th>Atmosphere</th></tr>" +
        "<tr><td>Venus</td><td>0.72</td><td>464</td><td>very thick, mostly carbon dioxide</td></tr><tr><td>Earth</td><td>1.00</td><td>15</td><td>mostly nitrogen and oxygen</td></tr><tr><td>Mars</td><td>1.52</td><td>−63</td><td>very thin, mostly carbon dioxide</td></tr><tr><td>Europa</td><td>5.2</td><td>−160</td><td>almost none</td></tr></table>" +
        "<p>" + N(3) + "Mercury, the closest planet to the sun at 0.39 AU, has almost no atmosphere and an average temperature of about 167 °C. " + N(4) + "Earth's strong magnetic field turns aside most of the solar wind, but Mars has had no global magnetic field for billions of years. " + N(5) + "Orbiting spacecraft have measured gas escaping from the top of Mars's atmosphere. " + N(6) + "Rovers on Mars have found dry river channels and layered rocks that formed in standing water. " + N(7) + "At Europa, a probe that orbited Jupiter measured magnetic signals suggesting a salty ocean beneath the moon's icy crust. " + N(8) + "Scientists think this ocean stays liquid because Jupiter's gravity squeezes and flexes Europa, heating its interior.</p>",
      claims: [
        {
          id: "earth-two",
          sol: "ES.3.a",
          sub: "ES.3.a.1",
          stem: "Based on the table and the passage, which TWO factors help Earth keep liquid water on its surface? Select TWO.",
          choices: [
            { letter: "A", text: "its distance from the sun, which keeps temperatures moderate" },
            { letter: "B", text: "its atmosphere, which holds in heat without trapping too much" },
            { letter: "C", text: "its distance, which is the shortest of the four worlds in the table" },
            { letter: "D", text: "its air, which is made mostly of carbon dioxide gas" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "venus-heat",
          sol: "ES.3.a",
          sub: "ES.3.a.2",
          stem: "Venus is almost twice as far from the sun as Mercury, yet Venus is much hotter. Which best explains this?",
          choices: [
            { letter: "A", text: "Venus moves closer to the sun than Mercury for most of its orbit." },
            { letter: "B", text: "Venus's thick carbon dioxide atmosphere traps heat from the sun." },
            { letter: "C", text: "Venus has a strong magnetic field that collects the solar wind." },
            { letter: "D", text: "Venus has deep oceans that store heat from the sun all year." }
          ],
          correct: "B"
        },
        {
          id: "mars-air",
          sol: "ES.3.a",
          sub: "ES.3.a.2",
          stem: "Which explanation of Mars's thin atmosphere is best supported by sentences 4 and 5?",
          choices: [
            { letter: "A", text: "Without a global magnetic field, Mars has slowly lost gas to the solar wind." },
            { letter: "B", text: "Mars is much too close to the sun for its weak gravity to hold on to any gases." },
            { letter: "C", text: "The rovers on Mars have used up much of the gas in its atmosphere." },
            { letter: "D", text: "Mars's cold temperatures froze all of its air into solid rock." }
          ],
          correct: "A"
        },
        {
          id: "rovers",
          sol: "ES.2.d",
          sub: "ES.2.d.2",
          stem: "How did the rover findings in sentence 6 change scientists' view of Mars?",
          choices: [
            { letter: "A", text: "They showed that Mars has always been as dry as it is today." },
            { letter: "B", text: "They showed that Mars has liquid oceans on its surface now." },
            { letter: "C", text: "They showed that Mars once had liquid water and was likely warmer." },
            { letter: "D", text: "They showed that Mars has a much stronger magnetic field than Earth." }
          ],
          correct: "C"
        },
        {
          id: "europa-ocean",
          sol: "ES.2.c",
          sub: "ES.2.c.1",
          stem: "According to the passage, Europa's ocean can stay liquid even though its surface averages −160 °C because —",
          choices: [
            { letter: "A", text: "sunlight at 5.2 AU is strong enough to melt its ice" },
            { letter: "B", text: "its thick atmosphere traps the sun's heat like a warm blanket" },
            { letter: "C", text: "the solar wind warms the ocean through the crust" },
            { letter: "D", text: "Jupiter's gravity flexes the moon and heats its interior" }
          ],
          correct: "D"
        },
        {
          id: "europa-probe",
          sol: "ES.2.d",
          sub: "ES.2.d.1",
          stem: "The evidence for an ocean on Europa described in the passage came from —",
          choices: [
            { letter: "A", text: "a telescope on Earth that photographed the ocean" },
            { letter: "B", text: "astronauts who drilled down through Europa's ice" },
            { letter: "C", text: "a rover that landed and drove on Europa's surface" },
            { letter: "D", text: "a Jupiter orbiter that measured magnetic signals" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
