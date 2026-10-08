/* SOL Lab Earth Science — Atmosphere, Weather & Climate (ES.11, ES.12). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "atmo-air-sample",
      family: "ATMO",
      title: "A jar of schoolyard air",
      kind: "Atmosphere, Weather & Climate · ES.11 · ES.12",
      blurb: "A lab report on the gases in Fredericksburg air: read the percents.",
      level: 1,
      passage: "<p>" + N(1) + "A Fredericksburg class sent a jar of schoolyard air to a lab. " + N(2) + "The lab removed the water vapor and reported each remaining gas as a percent of the dry air, shown in the table. " + N(3) + "Air from a humid July afternoon held about 3% water vapor, but air from a cold January morning held less than 0.5%. " + N(4) + "Air sampled beside a busy highway at rush hour held 0.06% carbon dioxide.</p>" +
        "<table><tr><th>Gas</th><th>Percent of dry air</th></tr><tr><td>Nitrogen</td><td>78.1</td></tr><tr><td>Oxygen</td><td>20.9</td></tr><tr><td>Argon</td><td>0.9</td></tr><tr><td>Carbon dioxide</td><td>0.04</td></tr></table>",
      claims: [
        {
          id: "most",
          sol: "ES.11.a",
          sub: "ES.11.a.1",
          stem: "According to the table, which gas makes up the largest share of dry air?",
          choices: [
            { letter: "A", text: "oxygen" },
            { letter: "B", text: "nitrogen" },
            { letter: "C", text: "argon" },
            { letter: "D", text: "carbon dioxide" }
          ],
          correct: "B"
        },
        {
          id: "vapor",
          sol: "ES.11.a",
          sub: "ES.11.a.2",
          stem: "Which conclusion is best supported by sentence 3?",
          choices: [
            { letter: "A", text: "The amount of water vapor in air changes with weather and season." },
            { letter: "B", text: "Water vapor is a fixed part of air, just like nitrogen and argon." },
            { letter: "C", text: "Cold winter air holds more water vapor than warm summer air." },
            { letter: "D", text: "Water vapor replaces most of the oxygen in air during summer." }
          ],
          correct: "A"
        },
        {
          id: "oxygen",
          sol: "ES.11.b",
          sub: "ES.11.b.1",
          stem: "Most of the oxygen in the sample was added to Earth's atmosphere over time by —",
          choices: [
            { letter: "A", text: "gases released from volcanoes during eruptions" },
            { letter: "B", text: "lightning splitting nitrogen gas into separate atoms" },
            { letter: "C", text: "photosynthesis by cyanobacteria and, later, plants" },
            { letter: "D", text: "evaporation of water from the early oceans" }
          ],
          correct: "C"
        },
        {
          id: "co2",
          sol: "ES.12.e",
          sub: "ES.12.e.1",
          stem: "Carbon dioxide is only 0.04% of dry air, yet it affects climate because it —",
          choices: [
            { letter: "A", text: "blocks most visible sunlight before it reaches the ground" },
            { letter: "B", text: "forms the layer that absorbs the sun's ultraviolet rays" },
            { letter: "C", text: "makes up the water droplets that form most clouds" },
            { letter: "D", text: "absorbs heat given off by Earth's surface and warms the air" }
          ],
          correct: "D"
        },
        {
          id: "road",
          sol: "ES.11.c",
          sub: "ES.11.c.2",
          stem: "Which is the best explanation for the result in sentence 4?",
          choices: [
            { letter: "A", text: "Car engines burning gasoline release carbon dioxide into the nearby air." },
            { letter: "B", text: "Plants along the highway release carbon dioxide during photosynthesis." },
            { letter: "C", text: "Traffic noise causes nitrogen in the air to change into carbon dioxide." },
            { letter: "D", text: "Rush-hour air is colder, and cold air always holds more carbon dioxide." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "atmo-balloon-climb",
      family: "ATMO",
      title: "A balloon over Wallops Island",
      kind: "Atmosphere, Weather & Climate · ES.11 · ES.12",
      blurb: "Follow a weather balloon up through the atmosphere's layers.",
      level: 1,
      passage: "<p>" + N(1) + "At dawn, meteorologists at Wallops Island on Virginia's Eastern Shore released a helium weather balloon carrying a <strong>radiosonde</strong>, a small instrument package that radios back temperature, humidity and air pressure. " + N(2) + "Some of its readings are shown in the table. " + N(3) + "The balloon swelled as it rose and finally burst near 30 km.</p>" +
        "<table><tr><th>Altitude (km)</th><th>Temperature (°C)</th><th>Pressure (mb)</th></tr><tr><td>0</td><td>18</td><td>1013</td></tr><tr><td>5</td><td>-14</td><td>540</td></tr><tr><td>10</td><td>-45</td><td>265</td></tr><tr><td>15</td><td>-56</td><td>120</td></tr><tr><td>25</td><td>-50</td><td>25</td></tr></table>",
      claims: [
        {
          id: "layer",
          sol: "ES.11.a",
          sub: "ES.11.a.1",
          stem: "From 0 to 10 km, where the temperature dropped steadily, the balloon was rising through the —",
          choices: [
            { letter: "A", text: "stratosphere" },
            { letter: "B", text: "mesosphere" },
            { letter: "C", text: "troposphere" },
            { letter: "D", text: "thermosphere" }
          ],
          correct: "C"
        },
        {
          id: "pressure",
          sol: "ES.11.a",
          sub: "ES.11.a.2",
          stem: "Which statement is best supported by the pressure data?",
          choices: [
            { letter: "A", text: "Pressure fell as the balloon rose, dropping about half in the first 5 km." },
            { letter: "B", text: "Pressure stayed nearly the same until the balloon passed 15 km." },
            { letter: "C", text: "Pressure rose as the balloon climbed into colder air." },
            { letter: "D", text: "Pressure dropped by the same amount in every 5 km of the climb." }
          ],
          correct: "A"
        },
        {
          id: "warming",
          sol: "ES.11.a",
          sub: "ES.11.a.2",
          stem: "Between 15 km and 25 km the temperature rose. The best explanation is that the balloon had entered the —",
          choices: [
            { letter: "A", text: "stratosphere, where ozone absorbs ultraviolet energy from the sun" },
            { letter: "B", text: "troposphere, where warm air rises from the heated ground" },
            { letter: "C", text: "mesosphere, where meteors burn up and heat the air" },
            { letter: "D", text: "thermosphere, where the air is thickest and holds the most heat" }
          ],
          correct: "A"
        },
        {
          id: "radiosonde",
          sol: "ES.12.d",
          sub: "ES.12.d.1",
          stem: "Forecasters use radiosonde readings like these mainly to —",
          choices: [
            { letter: "A", text: "measure how much rain fell at the launch site overnight" },
            { letter: "B", text: "supply upper-air data to computer models that predict weather" },
            { letter: "C", text: "track the exact path of hurricanes far out at sea" },
            { letter: "D", text: "count lightning strikes inside distant thunderstorms" }
          ],
          correct: "B"
        },
        {
          id: "ground",
          sol: "ES.12.a",
          sub: "ES.12.a.1",
          stem: "The warmest reading in the troposphere was near the ground because the troposphere is heated mainly —",
          choices: [
            { letter: "A", text: "from above, by sunlight absorbed in the ozone layer" },
            { letter: "B", text: "by heat flowing upward from Earth's molten core" },
            { letter: "C", text: "by friction as the wind blows across the ocean" },
            { letter: "D", text: "from below, by the ground, which absorbs sunlight and warms the air" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "atmo-beach-breeze",
      family: "ATMO",
      title: "Sand, sea and a boardwalk flag",
      kind: "Atmosphere, Weather & Climate · ES.12",
      blurb: "Why the breeze at Virginia Beach turns around between morning and afternoon.",
      level: 1,
      passage: "<p>" + N(1) + "On a sunny June day at Virginia Beach, a student measured the temperature of the dry sand and of the ocean water and noted which way a flag on the boardwalk was blowing. " + N(2) + "Her data are in the table. " + N(3) + "The sand and the water received about the same amount of sunlight all day.</p>" +
        "<table><tr><th>Time</th><th>Sand (°C)</th><th>Ocean (°C)</th><th>Wind blows from</th></tr><tr><td>6 a.m.</td><td>20</td><td>23</td><td>the land</td></tr><tr><td>2 p.m.</td><td>39</td><td>24</td><td>the ocean</td></tr></table>",
      claims: [
        {
          id: "sand",
          sol: "ES.12.a",
          sub: "ES.12.a.1",
          stem: "The sand warmed much more than the water by 2 p.m. mainly because —",
          choices: [
            { letter: "A", text: "water needs more energy than sand to warm by the same amount" },
            { letter: "B", text: "the sand received far more sunlight than the water did" },
            { letter: "C", text: "the ocean water reflected all of the sunlight back to space" },
            { letter: "D", text: "the wind carried heat away from the sand all afternoon" }
          ],
          correct: "A"
        },
        {
          id: "seabreeze",
          sol: "ES.12.a",
          sub: "ES.12.a.2",
          stem: "Which statement best explains the wind at 2 p.m.?",
          choices: [
            { letter: "A", text: "Cool air sinking over the hot sand pushed air out toward the sea." },
            { letter: "B", text: "Air over the hot sand rose, and cooler, denser air over the ocean moved in." },
            { letter: "C", text: "Water evaporating from the ocean pushed the air toward land." },
            { letter: "D", text: "Warm air from the land flowed out over the cooler water." }
          ],
          correct: "B"
        },
        {
          id: "convection",
          sol: "ES.12.a",
          sub: "ES.12.a.1",
          stem: "Warm air rising above the hot sand and carrying heat upward is an example of energy transfer by —",
          choices: [
            { letter: "A", text: "radiation" },
            { letter: "B", text: "conduction" },
            { letter: "C", text: "convection" },
            { letter: "D", text: "reflection" }
          ],
          correct: "C"
        },
        {
          id: "night",
          sol: "ES.12.a",
          sub: "ES.12.a.2",
          stem: "Based on the data, which wind would most likely blow at 2 a.m. on a clear night?",
          choices: [
            { letter: "A", text: "a breeze from the ocean, because water cools faster than land" },
            { letter: "B", text: "a breeze from the land, because land cools faster than water" },
            { letter: "C", text: "no wind at all, because the sun is not heating anything" },
            { letter: "D", text: "a breeze from the ocean, because the sand stays hottest at night" }
          ],
          correct: "B"
        },
        {
          id: "climate",
          sol: "ES.12.e",
          sub: "ES.12.e.1",
          stem: "Compared with an inland town at the same latitude and elevation, Virginia Beach most likely has —",
          choices: [
            { letter: "A", text: "colder winters and hotter summers" },
            { letter: "B", text: "the same temperature all year long" },
            { letter: "C", text: "almost no rain or snow in most years" },
            { letter: "D", text: "milder winters and cooler summers" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "atmo-station-model",
      family: "ATMO",
      title: "Reading Roanoke's station model",
      kind: "Atmosphere, Weather & Climate · ES.11 · ES.12",
      blurb: "Decode temperature, dew point, pressure and wind from one weather-map symbol.",
      level: 1,
      passage: "<p>" + N(1) + "Roanoke's 4 p.m. station model shows 68 (upper left), 61 (lower left) and 112 (upper right). " + N(2) + "The key says the upper left is the temperature (°F), the lower left is the dew point (°F), and the upper right is sea-level pressure in code: put a 10 in front and a decimal point before the last digit, so 098 means 1009.8 mb. " + N(3) + "The wind barb's shaft points toward the direction the wind comes from, and each full feather is about 10 knots. " + N(4) + "Roanoke's barb points to the southwest and has two full feathers. " + N(5) + "The circle is three-quarters shaded with clouds. " + N(6) + "The pressure has fallen 1.8 mb in the past three hours.</p>",
      claims: [
        {
          id: "pressure",
          sol: "ES.12.b",
          sub: "ES.12.b.1",
          stem: "What is the sea-level air pressure at Roanoke?",
          choices: [
            { letter: "A", text: "112.0 mb" },
            { letter: "B", text: "911.2 mb" },
            { letter: "C", text: "1011.2 mb" },
            { letter: "D", text: "1112.0 mb" }
          ],
          correct: "C"
        },
        {
          id: "wind",
          sol: "ES.12.b",
          sub: "ES.12.b.1",
          stem: "Which describes the wind at Roanoke?",
          choices: [
            { letter: "A", text: "about 20 knots, blowing from the southwest toward the northeast" },
            { letter: "B", text: "about 20 knots, blowing from the northeast toward the southwest" },
            { letter: "C", text: "about 2 knots, blowing from the southwest toward the northeast" },
            { letter: "D", text: "about 10 knots, blowing from the northwest toward the southeast" }
          ],
          correct: "A"
        },
        {
          id: "forecast",
          sol: "ES.12.b",
          sub: "ES.12.b.2",
          stem: "Which forecast for the next 12 hours is best supported by the station model?",
          choices: [
            { letter: "A", text: "clearing skies and rising pressure as a high moves in" },
            { letter: "B", text: "more clouds and a chance of rain as a low or front nears" },
            { letter: "C", text: "dry, sunny weather because the dew point is below the temperature" },
            { letter: "D", text: "snow, because the dew point is below the freezing point" }
          ],
          correct: "B"
        },
        {
          id: "fog",
          sol: "ES.12.b",
          sub: "ES.12.b.2",
          stem: "If the air cools to 61 °F overnight with no change in its moisture, which will most likely happen?",
          choices: [
            { letter: "A", text: "The pressure will rise to 1061.0 mb." },
            { letter: "B", text: "The wind will shift to come from the north." },
            { letter: "C", text: "The relative humidity will fall to about 50%." },
            { letter: "D", text: "The air will become saturated, so fog or dew may form." }
          ],
          correct: "D"
        },
        {
          id: "mountain",
          sol: "ES.11.a",
          sub: "ES.11.a.2",
          stem: "That afternoon a hiker carried a barometer from Roanoke to a mountaintop about 1,400 m higher, and its reading dropped by about 150 mb. The best explanation is that —",
          choices: [
            { letter: "A", text: "at a higher elevation there is less air above pressing down" },
            { letter: "B", text: "cold mountain air is heavier than the air in the valley" },
            { letter: "C", text: "the clouds over the mountain pushed down on the barometer" },
            { letter: "D", text: "air pressure always falls during the late afternoon" }
          ],
          correct: "A"
        },
        {
          id: "map",
          sol: "ES.12.d",
          sub: "ES.12.d.1",
          stem: "Meteorologists plot station models from hundreds of places on one map mainly to —",
          choices: [
            { letter: "A", text: "measure how high each weather balloon rose that morning" },
            { letter: "B", text: "replace the need for radar and satellite images" },
            { letter: "C", text: "locate high- and low-pressure centers and fronts" },
            { letter: "D", text: "record each town's average climate over 30 years" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "atmo-ozone-cfc",
      family: "ATMO",
      title: "The hole over Antarctica",
      kind: "Atmosphere, Weather & Climate · ES.11",
      blurb: "CFCs, the ozone layer and a treaty: is the hole closing?",
      level: 2,
      passage: "<p>" + N(1) + "The <strong>ozone layer</strong>, about 15 to 35 km up, absorbs most of the sun's harmful ultraviolet (UV) radiation. " + N(2) + "In the 1970s, scientists found that <strong>CFCs</strong>, gases once used in spray cans, refrigerators and air conditioners, drift up into this layer, where UV light breaks them apart and frees chlorine that destroys ozone. " + N(3) + "In 1987 nations signed the <strong>Montreal Protocol</strong> to phase out CFCs, and companies switched to substitute chemicals. " + N(4) + "The table shows the average size of the \"ozone hole\" over Antarctica each spring (rounded). " + N(5) + "CFC molecules can last 50 to 100 years in the air.</p>" +
        "<table><tr><th>Year</th><th>Ozone hole area (million km²)</th></tr><tr><td>1982</td><td>3</td></tr><tr><td>1990</td><td>19</td></tr><tr><td>2000</td><td>25</td></tr><tr><td>2010</td><td>22</td></tr><tr><td>2020</td><td>20</td></tr></table>",
      claims: [
        {
          id: "where",
          sol: "ES.11.a",
          sub: "ES.11.a.1",
          stem: "The ozone layer described in sentence 1 lies mainly in the —",
          choices: [
            { letter: "A", text: "troposphere" },
            { letter: "B", text: "stratosphere" },
            { letter: "C", text: "mesosphere" },
            { letter: "D", text: "thermosphere" }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "ES.11.c",
          sub: "ES.11.c.1",
          stem: "Which human action was the main cause of the ozone hole?",
          choices: [
            { letter: "A", text: "burning coal and oil, which adds carbon dioxide to the air" },
            { letter: "B", text: "clearing forests, which reduces the oxygen made by plants" },
            { letter: "C", text: "releasing CFCs, which break down and free chlorine" },
            { letter: "D", text: "driving cars in cities, which forms smog near the ground" }
          ],
          correct: "C"
        },
        {
          id: "uv",
          sol: "ES.11.c",
          sub: "ES.11.c.2",
          stem: "Based on the passage, a thinner ozone layer would most likely lead to —",
          choices: [
            { letter: "A", text: "more UV reaching the ground and more cases of skin cancer" },
            { letter: "B", text: "less sunlight reaching the ground and cooler summers" },
            { letter: "C", text: "more acid rain falling on lakes and forests" },
            { letter: "D", text: "a thicker layer of smog over large cities" }
          ],
          correct: "A"
        },
        {
          id: "evaluate",
          sol: "ES.11.d",
          sub: "ES.11.d.2",
          stem: "Which statement best evaluates the Montreal Protocol, using the table and sentence 5?",
          choices: [
            { letter: "A", text: "It failed, because the hole was larger in 2020 than in 1982." },
            { letter: "B", text: "It worked at once, because the hole shrank right after 1987." },
            { letter: "C", text: "It made no difference, because CFCs never reach the stratosphere." },
            { letter: "D", text: "It seems to be working, but slowly, because CFCs linger for decades." }
          ],
          correct: "D"
        },
        {
          id: "action",
          sol: "ES.11.d",
          sub: "ES.11.d.1",
          stem: "Under the Montreal Protocol, nations agreed to —",
          choices: [
            { letter: "A", text: "stop producing CFCs and replace them with other chemicals" },
            { letter: "B", text: "plant trees to add more ozone to the stratosphere" },
            { letter: "C", text: "limit the carbon dioxide released by power plants and cars" },
            { letter: "D", text: "launch ozone gas into the upper atmosphere by rocket" }
          ],
          correct: "A"
        },
        {
          id: "tradeoff",
          sol: "ES.11.d",
          sub: "ES.11.d.2",
          stem: "Some substitute chemicals do not harm ozone but trap heat strongly as greenhouse gases. What does this show about decisions that affect the atmosphere?",
          choices: [
            { letter: "A", text: "Any chemical that is safe for ozone is also safe for climate." },
            { letter: "B", text: "Fixing one problem can cause another, so trade-offs must be weighed." },
            { letter: "C", text: "Treaties should never limit chemicals that companies already use." },
            { letter: "D", text: "Greenhouse warming and ozone loss are exactly the same problem." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "atmo-hurricane-track",
      family: "ATMO",
      title: "Tracking a late-summer hurricane",
      kind: "Atmosphere, Weather & Climate · ES.12",
      blurb: "Warm water, landfall and a storm's rise and fall, day by day.",
      level: 2,
      passage: "<p>" + N(1) + "A cluster of thunderstorms moved west off Africa in late August and drifted across the Atlantic. " + N(2) + "Over warm water it grew into a <strong>hurricane</strong>, a huge storm spinning around a center of very low pressure. " + N(3) + "The table tracks the storm. " + N(4) + "On day 6 it came ashore in North Carolina and moved north into southern Virginia, where heavy rain flooded rivers. " + N(5) + "Records show that the average surface temperature of this part of the Atlantic has risen about 0.5 °C over the past 40 years.</p>" +
        "<table><tr><th>Day</th><th>Location</th><th>Water (°C)</th><th>Top wind (mph)</th></tr><tr><td>1</td><td>central Atlantic</td><td>27</td><td>40</td></tr><tr><td>3</td><td>east of the Bahamas</td><td>29</td><td>110</td></tr><tr><td>5</td><td>off North Carolina</td><td>28</td><td>120</td></tr><tr><td>6</td><td>over land</td><td>none</td><td>60</td></tr></table>",
      claims: [
        {
          id: "energy",
          sol: "ES.12.c",
          sub: "ES.12.c.1",
          stem: "A hurricane gets most of its energy from —",
          choices: [
            { letter: "A", text: "cold, dry air that flows south from central Canada" },
            { letter: "B", text: "heat released when water vapor from the warm sea condenses" },
            { letter: "C", text: "friction between the storm's winds and the ground" },
            { letter: "D", text: "the pull of the moon's gravity on the ocean tides" }
          ],
          correct: "B"
        },
        {
          id: "landfall",
          sol: "ES.12.c",
          sub: "ES.12.c.2",
          stem: "Which best explains the change in top wind speed from day 5 to day 6?",
          choices: [
            { letter: "A", text: "Over land the storm lost its supply of warm, moist air and was slowed by friction." },
            { letter: "B", text: "The storm moved into an area of warmer ocean water near the coast." },
            { letter: "C", text: "Rain falling from the storm cooled the ocean and doubled its strength." },
            { letter: "D", text: "The storm's low-pressure center grew even deeper over land." }
          ],
          correct: "A"
        },
        {
          id: "data",
          sol: "ES.12.c",
          sub: "ES.12.c.2",
          stem: "Which conclusion is best supported by the data in the table?",
          choices: [
            { letter: "A", text: "The storm was strongest on day 1, when it first formed." },
            { letter: "B", text: "Water temperature had no effect on the storm's wind speed." },
            { letter: "C", text: "The storm was strongest while over water of 28 °C or warmer." },
            { letter: "D", text: "The storm weakened each day it spent over the ocean." }
          ],
          correct: "C"
        },
        {
          id: "tool",
          sol: "ES.12.d",
          sub: "ES.12.d.1",
          stem: "Which tool would best let forecasters follow the storm's position while it was in the central Atlantic, far from any coast?",
          choices: [
            { letter: "A", text: "a rain gauge on the Virginia coast" },
            { letter: "B", text: "a barometer at an inland weather station" },
            { letter: "C", text: "Doppler radar at a coastal airport" },
            { letter: "D", text: "a weather satellite high above Earth" }
          ],
          correct: "D"
        },
        {
          id: "spin",
          sol: "ES.12.c",
          sub: "ES.12.c.1",
          stem: "The storm's winds spiraled counterclockwise around its center. This curving of moving air in the Northern Hemisphere is caused by —",
          choices: [
            { letter: "A", text: "Earth's rotation, called the Coriolis effect" },
            { letter: "B", text: "the tilt of Earth's axis toward the sun" },
            { letter: "C", text: "the pull of the moon's gravity on the air" },
            { letter: "D", text: "heat flowing up out of Earth's interior" }
          ],
          correct: "A"
        },
        {
          id: "future",
          sol: "ES.12.e",
          sub: "ES.12.e.2",
          stem: "Based on sentence 5 and the table, which prediction is most reasonable if this part of the Atlantic keeps warming?",
          choices: [
            { letter: "A", text: "Hurricanes there will begin to form only over land." },
            { letter: "B", text: "Storms there will have more energy available to grow strong." },
            { letter: "C", text: "Hurricanes there will stop spinning around their centers." },
            { letter: "D", text: "Warmer water will make storms weaken faster while at sea." }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "atmo-cold-front",
      family: "ATMO",
      title: "A cold front reaches Harrisonburg",
      kind: "Atmosphere, Weather & Climate · ES.12",
      blurb: "A weather map, a day of barometer readings and an afternoon squall line.",
      level: 2,
      passage: "<p>" + N(1) + "At 6 a.m. on an April day, the weather map showed a low-pressure center over Ohio with a <strong>cold front</strong> trailing south through West Virginia. " + N(2) + "Ahead of the front, southerly winds carried warm, humid <strong>maritime tropical</strong> air from the Gulf of Mexico into Virginia. " + N(3) + "Behind it, a <strong>continental polar</strong> air mass from Canada was pushing east, and a high-pressure center sat over Illinois. " + N(4) + "Near the low, the isobars on the map were packed close together. " + N(5) + "A student in Harrisonburg, in the Shenandoah Valley, recorded the data in the table from her school's weather station. " + N(6) + "Between 3 and 4 p.m., a line of thunderstorms with heavy rain, gusty winds and small hail passed over the town.</p>" +
        "<table><tr><th>Time</th><th>Pressure (mb)</th><th>Temp / dew point (°C)</th><th>Wind from</th></tr><tr><td>6 a.m.</td><td>1009</td><td>21 / 18</td><td>south</td></tr><tr><td>noon</td><td>1004</td><td>26 / 19</td><td>south</td></tr><tr><td>6 p.m.</td><td>1008</td><td>16 / 7</td><td>northwest</td></tr><tr><td>midnight</td><td>1016</td><td>7 / -1</td><td>northwest</td></tr></table>",
      claims: [
        {
          id: "cp",
          sol: "ES.12.b",
          sub: "ES.12.b.1",
          stem: "The air mass described in sentence 3 is most likely —",
          choices: [
            { letter: "A", text: "cold and dry" },
            { letter: "B", text: "warm and humid" },
            { letter: "C", text: "cold and humid" },
            { letter: "D", text: "warm and dry" }
          ],
          correct: "A"
        },
        {
          id: "passage",
          sol: "ES.12.b",
          sub: "ES.12.b.2",
          stem: "Based on the table, when did the cold front most likely pass Harrisonburg?",
          choices: [
            { letter: "A", text: "before 6 a.m." },
            { letter: "B", text: "between 6 a.m. and noon" },
            { letter: "C", text: "between noon and 6 p.m." },
            { letter: "D", text: "after midnight" }
          ],
          correct: "C"
        },
        {
          id: "storms",
          sol: "ES.12.c",
          sub: "ES.12.c.2",
          stem: "Which best explains why thunderstorms formed as the front arrived?",
          choices: [
            { letter: "A", text: "Cold, dense air pushed under the warm, moist air and forced it to rise quickly." },
            { letter: "B", text: "Warm air slid gently up over cold air, spreading thin clouds over a wide area." },
            { letter: "C", text: "The high-pressure center over Illinois made air sink over the town." },
            { letter: "D", text: "Dry air from Canada added extra water vapor to the clouds over the town." }
          ],
          correct: "A"
        },
        {
          id: "isobars",
          sol: "ES.12.b",
          sub: "ES.12.b.1",
          stem: "The closely packed isobars near the low in sentence 4 show that the winds there were —",
          choices: [
            { letter: "A", text: "calm, because the pressure was the same everywhere" },
            { letter: "B", text: "strong, because pressure changed a lot over a short distance" },
            { letter: "C", text: "blowing straight out of the low toward the high" },
            { letter: "D", text: "weak, because the low pulled air away from the area" }
          ],
          correct: "B"
        },
        {
          id: "tomorrow",
          sol: "ES.12.b",
          sub: "ES.12.b.2",
          stem: "Which forecast for Harrisonburg the next day is best supported by the map and the data?",
          choices: [
            { letter: "A", text: "warm and humid with more afternoon thunderstorms" },
            { letter: "B", text: "steady rain and fog as a warm front arrives" },
            { letter: "C", text: "cool, dry and mostly clear as high pressure moves in" },
            { letter: "D", text: "hurricane-force winds as the pressure keeps falling" }
          ],
          correct: "C"
        },
        {
          id: "convection",
          sol: "ES.12.a",
          sub: "ES.12.a.1",
          stem: "Inside the thunderstorm clouds, strong currents of rising warm air carried heat upward. This is energy transfer by —",
          choices: [
            { letter: "A", text: "conduction" },
            { letter: "B", text: "radiation" },
            { letter: "C", text: "reflection" },
            { letter: "D", text: "convection" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "atmo-ice-core",
      family: "ATMO",
      title: "Air from long ago",
      kind: "Atmosphere, Weather & Climate · ES.11 · ES.12",
      blurb: "Volcanoes, iron-banded rocks and bubbles in Antarctic ice tell how the air has changed.",
      level: 2,
      passage: "<p>" + N(1) + "Earth's earliest atmosphere formed mostly from gases released by volcanoes: water vapor, carbon dioxide and nitrogen, with almost no free oxygen. " + N(2) + "About 2.4 billion years ago, oxygen made by cyanobacteria began to build up. " + N(3) + "In rocks from around that time, geologists find <strong>banded iron formations</strong>, thin red layers of iron oxide that settled on ancient sea floors. " + N(4) + "A much more recent record comes from <strong>ice cores</strong> drilled in Antarctica, where falling snow is pressed into ice that seals in tiny bubbles of air. " + N(5) + "Scientists measured the carbon dioxide in bubbles from three different cores and averaged the results, shown in the table with temperature estimates. " + N(6) + "Air measured today holds about 420 ppm of carbon dioxide.</p>" +
        "<table><tr><th>Age of ice (years ago)</th><th>CO₂ (ppm)</th><th>Temperature vs. recent times (°C)</th></tr><tr><td>125,000</td><td>280</td><td>+1</td></tr><tr><td>60,000</td><td>210</td><td>-5</td></tr><tr><td>20,000</td><td>185</td><td>-8</td></tr><tr><td>2,000</td><td>278</td><td>0</td></tr></table>",
      claims: [
        {
          id: "outgas",
          sol: "ES.11.b",
          sub: "ES.11.b.1",
          stem: "The gases of Earth's earliest atmosphere came mainly from —",
          choices: [
            { letter: "A", text: "photosynthesis by early ocean organisms" },
            { letter: "B", text: "volcanoes releasing gases from Earth's interior" },
            { letter: "C", text: "ice sheets melting at the poles" },
            { letter: "D", text: "air leaking from the moon after it formed" }
          ],
          correct: "B"
        },
        {
          id: "bif",
          sol: "ES.11.b",
          sub: "ES.11.b.2",
          stem: "The banded iron formations in sentence 3 are evidence that —",
          choices: [
            { letter: "A", text: "oxygen was building up and reacting with iron dissolved in seawater" },
            { letter: "B", text: "the early air already held as much oxygen as the air does today" },
            { letter: "C", text: "volcanoes stopped erupting once the first oceans formed" },
            { letter: "D", text: "iron meteorites rained onto the sea floor for millions of years" }
          ],
          correct: "A"
        },
        {
          id: "pattern",
          sol: "ES.12.e",
          sub: "ES.12.e.2",
          stem: "Which pattern is shown by the ice-core data?",
          choices: [
            { letter: "A", text: "Temperature was highest when carbon dioxide was lowest." },
            { letter: "B", text: "Carbon dioxide stayed the same while temperature changed." },
            { letter: "C", text: "Carbon dioxide and temperature rose and fell together." },
            { letter: "D", text: "Temperature has risen steadily for 125,000 years." }
          ],
          correct: "C"
        },
        {
          id: "nitrogen",
          sol: "ES.11.a",
          sub: "ES.11.a.1",
          stem: "The air sealed in the ice-core bubbles is made mostly of —",
          choices: [
            { letter: "A", text: "oxygen" },
            { letter: "B", text: "carbon dioxide" },
            { letter: "C", text: "water vapor" },
            { letter: "D", text: "nitrogen" }
          ],
          correct: "D"
        },
        {
          id: "today",
          sol: "ES.11.c",
          sub: "ES.11.c.2",
          stem: "How does the value in sentence 6 compare with the ice-core data, and what best explains it?",
          choices: [
            { letter: "A", text: "It is far above every value in the table, mainly from burning fossil fuels." },
            { letter: "B", text: "It is within the natural range in the table, so no cause is needed." },
            { letter: "C", text: "It is below every value in the table, because of more photosynthesis." },
            { letter: "D", text: "It is far above every value in the table, mainly because oceans cooled." }
          ],
          correct: "A"
        },
        {
          id: "three",
          sol: "ES.11.b",
          sub: "ES.11.b.2",
          stem: "Why did the scientists measure bubbles from three different ice cores instead of just one?",
          choices: [
            { letter: "A", text: "to change the independent variable for each sample" },
            { letter: "B", text: "to check that results repeat and are not due to one site" },
            { letter: "C", text: "to make sure all the ice formed in the same year" },
            { letter: "D", text: "to add more carbon dioxide to the bubbles before testing" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "atmo-keeling-data",
      family: "ATMO",
      title: "Sixty years of carbon dioxide",
      kind: "Atmosphere, Weather & Climate · ES.11 · ES.12",
      blurb: "A mountaintop CO₂ record, global temperature and a power-plant debate.",
      level: 3,
      passage: "<p>" + N(1) + "A mountaintop station far from any city has measured carbon dioxide in the air since the late 1950s. " + N(2) + "The table shows rounded yearly averages, along with global average temperature compared with the 1951–1980 average. " + N(3) + "Within each year, carbon dioxide dips by about 6 ppm during the Northern Hemisphere summer and climbs again in winter. " + N(4) + "Ice-core records show that carbon dioxide stayed between about 180 and 300 ppm for at least 800,000 years before 1800. " + N(5) + "A state is now debating limits on carbon dioxide from its power plants. " + N(6) + "Supporters say the limits will slow warming and reduce other air pollution; opponents point out that plants would need costly upgrades or new fuels, which could raise electric bills for a time.</p>" +
        "<table><tr><th>Year</th><th>CO₂ (ppm)</th><th>Temperature change (°C)</th></tr><tr><td>1960</td><td>317</td><td>0.0</td></tr><tr><td>1980</td><td>339</td><td>+0.3</td></tr><tr><td>2000</td><td>370</td><td>+0.4</td></tr><tr><td>2020</td><td>414</td><td>+1.0</td></tr></table>",
      claims: [
        {
          id: "trend",
          sol: "ES.12.e",
          sub: "ES.12.e.2",
          stem: "Which statement best describes the carbon dioxide trend in the table?",
          choices: [
            { letter: "A", text: "It rose in each 20-year period, and each rise was larger." },
            { letter: "B", text: "It rose quickly at first and then leveled off after 2000." },
            { letter: "C", text: "It rose by the same amount in every 20-year period." },
            { letter: "D", text: "It fell between 1980 and 2000 and then rose again." }
          ],
          correct: "A"
        },
        {
          id: "dip",
          sol: "ES.11.b",
          sub: "ES.11.b.1",
          stem: "The summer dip described in sentence 3 is best explained by —",
          choices: [
            { letter: "A", text: "oceans releasing more carbon dioxide as they warm in summer" },
            { letter: "B", text: "volcanoes erupting less often during the summer months" },
            { letter: "C", text: "Northern Hemisphere plants taking in more of it for photosynthesis" },
            { letter: "D", text: "warm summer air holding less nitrogen and more oxygen" }
          ],
          correct: "C"
        },
        {
          id: "source",
          sol: "ES.11.c",
          sub: "ES.11.c.1",
          stem: "Which human activity is the main cause of the long-term rise in carbon dioxide?",
          choices: [
            { letter: "A", text: "releasing CFCs from old refrigerators and spray cans" },
            { letter: "B", text: "releasing sulfur dioxide that forms acid rain" },
            { letter: "C", text: "clearing snow and ice from roads in winter" },
            { letter: "D", text: "burning coal, oil and natural gas for energy" }
          ],
          correct: "D"
        },
        {
          id: "greenhouse",
          sol: "ES.12.e",
          sub: "ES.12.e.1",
          stem: "Which statement best describes the greenhouse effect?",
          choices: [
            { letter: "A", text: "Gases block incoming sunlight, so less energy reaches the ground." },
            { letter: "B", text: "Gases absorb heat given off by Earth's surface and send some back down." },
            { letter: "C", text: "A hole in the ozone layer lets extra heat leak in from space." },
            { letter: "D", text: "Greenhouse gases make Earth's surface reflect more sunlight." }
          ],
          correct: "B"
        },
        {
          id: "policy",
          sol: "ES.11.d",
          sub: "ES.11.d.2",
          stem: "Which choice correctly pairs a cost with a benefit of the limits debated in sentences 5 and 6?",
          choices: [
            { letter: "A", text: "Cost: cleaner air near the plants. Benefit: higher electric bills." },
            { letter: "B", text: "Cost: costly plant upgrades. Benefit: slower warming and cleaner air." },
            { letter: "C", text: "Cost: slower warming. Benefit: plants must change their fuels." },
            { letter: "D", text: "Cost: less air pollution. Benefit: costly plant upgrades." }
          ],
          correct: "B"
        },
        {
          id: "sun",
          sol: "ES.12.e",
          sub: "ES.12.e.2",
          stem: "A student claims the warming in the table was caused by the sun growing brighter. Which additional data would best test this claim?",
          choices: [
            { letter: "A", text: "measurements of the sun's energy output over the same years" },
            { letter: "B", text: "the number of hurricanes that struck Virginia since 1960" },
            { letter: "C", text: "carbon dioxide readings from a second mountaintop station" },
            { letter: "D", text: "the average summer rainfall at the station each year" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "atmo-blue-ridge-tidewater",
      family: "ATMO",
      title: "Mountains, Piedmont and shore",
      kind: "Atmosphere, Weather & Climate · ES.11 · ES.12",
      blurb: "Compare climate at Norfolk, Lynchburg and Big Meadows, and see what a volcano can do.",
      level: 3,
      passage: "<p>" + N(1) + "Students compared the climate of three Virginia weather stations that lie within about two degrees of latitude of one another. " + N(2) + "Norfolk sits beside the Chesapeake Bay and the Atlantic, Lynchburg is in the Piedmont about 250 km inland, and Big Meadows is on a ridge in the Blue Ridge. " + N(3) + "Their 30-year averages are in the table. " + N(4) + "The students noticed that in winter, snow often covers the ground at Big Meadows for weeks, while Norfolk's ground is usually bare. " + N(5) + "They also read that in the year after a very large volcanic eruption in the tropics, Earth's average temperature can drop by a few tenths of a degree, because the eruption sends sulfur gases high into the stratosphere.</p>" +
        "<table><tr><th>Station</th><th>Elevation (m)</th><th>July / January (°C)</th><th>Precipitation (cm/yr)</th></tr><tr><td>Norfolk</td><td>5</td><td>26 / 6</td><td>120</td></tr><tr><td>Lynchburg</td><td>280</td><td>25 / 1</td><td>105</td></tr><tr><td>Big Meadows</td><td>1,070</td><td>19 / -3</td><td>135</td></tr></table>",
      claims: [
        {
          id: "elevation",
          sol: "ES.12.e",
          sub: "ES.12.e.1",
          stem: "Which is the best explanation for Big Meadows being cooler than Lynchburg in both July and January?",
          choices: [
            { letter: "A", text: "Big Meadows is closer to the ocean, which cools it all year." },
            { letter: "B", text: "Big Meadows gets more direct sunlight because it is higher." },
            { letter: "C", text: "Big Meadows is much higher, and air in the troposphere cools with altitude." },
            { letter: "D", text: "Big Meadows lies far south of Lynchburg, nearer the equator." }
          ],
          correct: "C"
        },
        {
          id: "range",
          sol: "ES.12.e",
          sub: "ES.12.e.2",
          stem: "Which conclusion is best supported by the July and January data?",
          choices: [
            { letter: "A", text: "Norfolk's range is smallest, likely because nearby water warms and cools slowly." },
            { letter: "B", text: "Lynchburg's range is smallest, likely because it lies far from the ocean." },
            { letter: "C", text: "Big Meadows' range is largest, likely because it gets the most precipitation." },
            { letter: "D", text: "All three ranges are the same, because the stations share a latitude." }
          ],
          correct: "A"
        },
        {
          id: "precip",
          sol: "ES.12.e",
          sub: "ES.12.e.2",
          stem: "Big Meadows gets the most precipitation of the three stations. Which best explains this?",
          choices: [
            { letter: "A", text: "Air sinking down the mountain slopes warms and gains water vapor." },
            { letter: "B", text: "High places are closer to the sun, so more water evaporates there." },
            { letter: "C", text: "Snow on the ground reflects sunlight, and reflected light makes rain." },
            { letter: "D", text: "Moist air pushed up the mountain slopes cools, and its water vapor condenses." }
          ],
          correct: "D"
        },
        {
          id: "natural",
          sol: "ES.11.c",
          sub: "ES.11.c.1",
          stem: "Sentence 5 describes a natural event that changes the atmosphere. Which is another natural event that adds gases and particles to the air?",
          choices: [
            { letter: "A", text: "exhaust from cars burning gasoline" },
            { letter: "B", text: "a large wildfire started by lightning" },
            { letter: "C", text: "CFCs leaking from old refrigerators" },
            { letter: "D", text: "smoke from coal-burning power plants" }
          ],
          correct: "B"
        },
        {
          id: "cooling",
          sol: "ES.11.c",
          sub: "ES.11.c.2",
          stem: "Which best explains how the eruption in sentence 5 could cool Earth?",
          choices: [
            { letter: "A", text: "Sulfur gases form tiny droplets that reflect sunlight back to space." },
            { letter: "B", text: "Volcanic gases destroy all of the carbon dioxide in the air." },
            { letter: "C", text: "Lava flowing into the sea cools ocean water around the world." },
            { letter: "D", text: "The eruption pushes Earth slightly farther away from the sun." }
          ],
          correct: "A"
        },
        {
          id: "albedo",
          sol: "ES.12.a",
          sub: "ES.12.a.1",
          stem: "The snow cover in sentence 4 also helps keep Big Meadows cold in winter because snow —",
          choices: [
            { letter: "A", text: "absorbs most of the sunlight that strikes it" },
            { letter: "B", text: "releases heat into the air above it by conduction" },
            { letter: "C", text: "has a high albedo and reflects most incoming sunlight" },
            { letter: "D", text: "gives off greenhouse gases as it slowly melts" }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "atmo-noreaster-forecast",
      family: "ATMO",
      title: "Forecasting a coastal nor'easter",
      kind: "Atmosphere, Weather & Climate · ES.12",
      blurb: "Satellites, radar, radiosondes and 20 model runs: how sure is the forecast for Norfolk?",
      level: 3,
      passage: "<p>" + N(1) + "On a cold February morning, Virginia forecasters watched a new low-pressure system forming off the coast of the Carolinas. " + N(2) + "Cold, dry continental air covered the land, while the Gulf Stream offshore was much warmer, and this sharp temperature contrast was feeding the storm. " + N(3) + "Weather satellites showed a large comma-shaped shield of clouds, and Doppler radar along the coast showed bands of heavy rain moving north. " + N(4) + "Radiosondes launched from several stations that morning measured temperature, humidity and wind speed high above the region. " + N(5) + "These measurements were fed into a computer model that was run 20 times, each time starting from slightly different conditions to allow for small measurement errors; this is called an <strong>ensemble forecast</strong>. " + N(6) + "The results for Norfolk are summarized in the table. " + N(7) + "Forecasters warned that if the low tracked close to the coast, strong northeast winds would push seawater onto low-lying streets in Norfolk and Virginia Beach. " + N(8) + "They also noted that ensemble runs spread farther apart with each additional day into the future.</p>" +
        "<table><tr><th>Storm track</th><th>Model runs</th><th>Rain at Norfolk (cm)</th><th>Peak gust (km/h)</th></tr><tr><td>within 150 km of the coast</td><td>15</td><td>5 to 8</td><td>80</td></tr><tr><td>far offshore</td><td>5</td><td>less than 1</td><td>40</td></tr></table>",
      claims: [
        {
          id: "radar",
          sol: "ES.12.d",
          sub: "ES.12.d.1",
          stem: "Which tool in the passage detects where rain is falling near the coast and how the rain bands are moving?",
          choices: [
            { letter: "A", text: "a radiosonde" },
            { letter: "B", text: "a barometer" },
            { letter: "C", text: "a rain gauge" },
            { letter: "D", text: "Doppler radar" }
          ],
          correct: "D"
        },
        {
          id: "ensemble",
          sol: "ES.12.d",
          sub: "ES.12.d.2",
          stem: "Based on the ensemble results, which is the best forecast to give the public?",
          choices: [
            { letter: "A", text: "Heavy rain and strong winds are certain in Norfolk." },
            { letter: "B", text: "There is about a 75% chance of heavy rain and strong winds in Norfolk." },
            { letter: "C", text: "Norfolk will get less than 1 cm of rain, because some runs show that." },
            { letter: "D", text: "No forecast can be made, because the model runs do not agree." }
          ],
          correct: "B"
        },
        {
          id: "limits",
          sol: "ES.12.d",
          sub: "ES.12.d.2",
          stem: "Using sentences 5 and 8, which statement best explains a limit of computer weather models?",
          choices: [
            { letter: "A", text: "Small errors in the starting data grow over time, so later days are less certain." },
            { letter: "B", text: "Running a model more times makes the real storm grow weaker." },
            { letter: "C", text: "Models are most accurate for forecasts made many weeks ahead." },
            { letter: "D", text: "A model gives a wrong answer unless it is run exactly 20 times." }
          ],
          correct: "A"
        },
        {
          id: "name",
          sol: "ES.12.c",
          sub: "ES.12.c.1",
          stem: "This kind of storm is called a nor'easter because —",
          choices: [
            { letter: "A", text: "it forms only over the northeastern states, never off Virginia" },
            { letter: "B", text: "it always moves from the northeast toward the southwest" },
            { letter: "C", text: "its strongest winds blow onto the coast from the northeast" },
            { letter: "D", text: "it forms when two hurricanes meet in the North Atlantic" }
          ],
          correct: "C"
        },
        {
          id: "fuel",
          sol: "ES.12.c",
          sub: "ES.12.c.2",
          stem: "Which condition described in the passage did the most to give the storm its energy?",
          choices: [
            { letter: "A", text: "the comma-shaped cloud shield seen on satellite images" },
            { letter: "B", text: "the radiosondes launched into the sky that morning" },
            { letter: "C", text: "the computer model that was run 20 different times" },
            { letter: "D", text: "the contrast between cold air over land and the warm Gulf Stream" }
          ],
          correct: "D"
        },
        {
          id: "closer",
          sol: "ES.12.b",
          sub: "ES.12.b.2",
          stem: "Which TWO observations in Norfolk would show that the storm is tracking close to the coast, as most runs predicted? Select TWO.",
          choices: [
            { letter: "A", text: "The barometer reading falls steadily through the day." },
            { letter: "B", text: "The wind shifts to blow gently from the west." },
            { letter: "C", text: "Northeast winds grow stronger, with higher gusts." },
            { letter: "D", text: "The sky clears and the air becomes very dry." }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "atmo-shenandoah-air",
      family: "ATMO",
      title: "Clearing the air over Shenandoah",
      kind: "Atmosphere, Weather & Climate · ES.11",
      blurb: "Acid rain, trout streams, the Clean Air Act and summer smog alerts.",
      level: 3,
      passage: "<p>" + N(1) + "In the 1980s, many brook trout streams in Shenandoah National Park were becoming too acidic for fish to survive. " + N(2) + "Coal-burning power plants upwind released <strong>sulfur dioxide</strong> and nitrogen oxides, which reacted with water in clouds to form sulfuric and nitric acids that fell as <strong>acid rain</strong>. " + N(3) + "Normal rain has a pH of about 5.6, and the park's thin soils and hard rock did little to neutralize the extra acid. " + N(4) + "In 1990, Congress strengthened the <strong>Clean Air Act</strong>, setting a cap on total sulfur dioxide emissions and letting companies buy and sell emission permits. " + N(5) + "Many plants installed scrubbers, which cost millions of dollars each, while others switched to low-sulfur coal or natural gas. " + N(6) + "The table shows regional emissions and the average pH of rain measured in the park. " + N(7) + "A second problem is <strong>ground-level ozone</strong>, the main ingredient of smog, which forms when nitrogen oxides and other gases from cars and factories react in strong sunlight; Richmond issues most of its air-quality alerts in July and August.</p>" +
        "<table><tr><th>Year</th><th>Sulfur dioxide released (thousand tons)</th><th>Average rain pH</th></tr><tr><td>1990</td><td>900</td><td>4.4</td></tr><tr><td>2000</td><td>650</td><td>4.6</td></tr><tr><td>2010</td><td>250</td><td>4.9</td></tr><tr><td>2020</td><td>60</td><td>5.2</td></tr></table>",
      claims: [
        {
          id: "source",
          sol: "ES.11.c",
          sub: "ES.11.c.1",
          stem: "The human action that most directly caused the acidic streams in sentence 1 was —",
          choices: [
            { letter: "A", text: "releasing CFCs from refrigerators" },
            { letter: "B", text: "burning coal to produce electricity" },
            { letter: "C", text: "clearing forests for new farmland" },
            { letter: "D", text: "pumping groundwater for drinking" }
          ],
          correct: "B"
        },
        {
          id: "trend",
          sol: "ES.11.c",
          sub: "ES.11.c.2",
          stem: "Which conclusion is best supported by the table?",
          choices: [
            { letter: "A", text: "As sulfur dioxide emissions fell, rain in the park became less acidic." },
            { letter: "B", text: "As sulfur dioxide emissions fell, rain in the park became more acidic." },
            { letter: "C", text: "Rain in the park reached the pH of normal rain by 2010." },
            { letter: "D", text: "Rain pH did not change, so the emission cap had no effect." }
          ],
          correct: "A"
        },
        {
          id: "scrubbers",
          sol: "ES.11.d",
          sub: "ES.11.d.1",
          stem: "Which action helped power plants reduce their sulfur dioxide emissions under the 1990 law?",
          choices: [
            { letter: "A", text: "building taller smokestacks to spread the gas farther" },
            { letter: "B", text: "installing scrubbers to remove sulfur from exhaust" },
            { letter: "C", text: "burning more high-sulfur coal during the night" },
            { letter: "D", text: "adding CFCs to the exhaust to neutralize the acid" }
          ],
          correct: "B"
        },
        {
          id: "worth",
          sol: "ES.11.d",
          sub: "ES.11.d.2",
          stem: "A critic argues that the 1990 law cost too much. Which evidence from the passage best supports the view that its benefits were worth the cost?",
          choices: [
            { letter: "A", text: "Scrubbers cost millions of dollars for each power plant." },
            { letter: "B", text: "Normal rain is slightly acidic, with a pH of about 5.6." },
            { letter: "C", text: "Emissions fell by over 90%, and rain in the park became less acidic." },
            { letter: "D", text: "Some plants stopped burning coal and switched to natural gas." }
          ],
          correct: "C"
        },
        {
          id: "smog",
          sol: "ES.11.c",
          sub: "ES.11.c.2",
          stem: "Based on sentence 7, on which day would a ground-level ozone alert be most likely in Richmond?",
          choices: [
            { letter: "A", text: "a cold, cloudy January day with light traffic" },
            { letter: "B", text: "a rainy April day with a strong, steady breeze" },
            { letter: "C", text: "a cool, clear October night after rush hour" },
            { letter: "D", text: "a hot, sunny, still July afternoon with heavy traffic" }
          ],
          correct: "D"
        },
        {
          id: "ozone",
          sol: "ES.11.a",
          sub: "ES.11.a.1",
          stem: "Which statement correctly compares ground-level ozone with the ozone layer?",
          choices: [
            { letter: "A", text: "Ground-level ozone is a pollutant, while ozone in the stratosphere shields life from UV." },
            { letter: "B", text: "Both are harmful pollutants that should be removed from the atmosphere." },
            { letter: "C", text: "Ground-level ozone shields life from UV, while stratospheric ozone forms smog." },
            { letter: "D", text: "The ozone layer lies in the troposphere, just above the smog over cities." }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
