/* SOL Lab Earth Science — Resources & Fresh Water (ES.6, ES.8). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "res-virginia-resource-table",
      family: "RES",
      title: "Virginia's resource table",
      kind: "Resources & Fresh Water · ES.6",
      blurb: "Coal, kyanite, pine and oysters: where they come from and how fast they come back.",
      level: 1,
      passage: "<p>" + N(1) + "A student made a table of resources produced in Virginia. " + N(2) + "A <strong>renewable</strong> resource is replaced by nature about as fast as people use it. " + N(3) + "Kyanite, mined in the Piedmont, is used to make heat-resistant bricks and ceramics. " + N(4) + "Virginia sets yearly limits on how many oysters may be harvested from the Chesapeake Bay.</p>" +
        "<table><tr><th>Resource</th><th>Where found</th><th>Time to form or regrow</th></tr>" +
        "<tr><td>Coal</td><td>Appalachian Plateau</td><td>millions of years</td></tr>" +
        "<tr><td>Kyanite</td><td>Piedmont</td><td>millions of years</td></tr>" +
        "<tr><td>Titanium sands</td><td>Coastal Plain</td><td>millions of years</td></tr>" +
        "<tr><td>Pine timber</td><td>across the state</td><td>about 30 years</td></tr>" +
        "<tr><td>Oysters</td><td>Chesapeake Bay</td><td>2 to 3 years to reach market size</td></tr></table>",
      claims: [
        {
          id: "coal-where",
          sol: "ES.6.c",
          sub: "ES.6.c.1",
          stem: "According to the table, coal in Virginia is mined in the —",
          choices: [
            { letter: "A", text: "Coastal Plain" },
            { letter: "B", text: "Blue Ridge" },
            { letter: "C", text: "Appalachian Plateau" },
            { letter: "D", text: "Valley and Ridge" }
          ],
          correct: "C"
        },
        {
          id: "renewable",
          sol: "ES.6.b",
          sub: "ES.6.b.1",
          stem: "Which resource in the table is renewable?",
          choices: [
            { letter: "A", text: "coal" },
            { letter: "B", text: "pine timber" },
            { letter: "C", text: "kyanite" },
            { letter: "D", text: "titanium sands" }
          ],
          correct: "B"
        },
        {
          id: "kyanite-use",
          sol: "ES.6.c",
          sub: "ES.6.c.1",
          stem: "Based on the passage, kyanite from Virginia is mainly used to make —",
          choices: [
            { letter: "A", text: "heat-resistant bricks and ceramics" },
            { letter: "B", text: "white pigment for paint and paper" },
            { letter: "C", text: "fuel for electric power plants" },
            { letter: "D", text: "fertilizer for corn and soybeans" }
          ],
          correct: "A"
        },
        {
          id: "forest-rate",
          sol: "ES.6.b",
          sub: "ES.6.b.2",
          stem: "A county's pine forests take about 30 years to regrow, so roughly 3 percent of the forest can be replaced each year. If the county cuts 5 percent of its forest every year, the forest will most likely —",
          choices: [
            { letter: "A", text: "grow larger, because each cut area is replanted" },
            { letter: "B", text: "stay the same size, because pine is renewable" },
            { letter: "C", text: "turn into coal within a few hundred years" },
            { letter: "D", text: "shrink, because cutting is faster than regrowth" }
          ],
          correct: "D"
        },
        {
          id: "oyster-limits",
          sol: "ES.6.c",
          sub: "ES.6.c.2",
          stem: "Which statement best explains how the oyster limits in sentence 4 help Virginia's seafood economy over time?",
          choices: [
            { letter: "A", text: "They keep harvests below the rate oysters are replaced, so harvests can go on for years." },
            { letter: "B", text: "They make oysters a nonrenewable resource, so each oyster sells for a higher price." },
            { letter: "C", text: "They let watermen take every oyster in a single year, before prices have a chance to drop." },
            { letter: "D", text: "They keep oysters from growing to market size, so more of them can fit in the Bay." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "res-soil-pit-piedmont",
      family: "RES",
      title: "A soil pit in a Piedmont field",
      kind: "Resources & Fresh Water · ES.6 · ES.8",
      blurb: "Dig down through the horizons, from dark topsoil to solid granite.",
      level: 1,
      passage: "<p>" + N(1) + "Students dug a 1.5 m pit in a flat Piedmont field. " + N(2) + "The top layer was dark, crumbly soil mixed with roots and decayed plant matter. " + N(3) + "Below it lay a reddish layer rich in clay that water had carried down from above. " + N(4) + "Next came broken, partly weathered granite, and at the bottom was solid granite <strong>bedrock</strong>. " + N(5) + "A few centimeters of soil like this can take hundreds of years to form.</p>",
      claims: [
        {
          id: "horizon-a",
          sol: "ES.8.a",
          sub: "ES.8.a.1",
          stem: "The dark layer described in sentence 2 is the —",
          choices: [
            { letter: "A", text: "A horizon, or topsoil" },
            { letter: "B", text: "B horizon, or subsoil" },
            { letter: "C", text: "C horizon, or weathered rock" },
            { letter: "D", text: "bedrock beneath the soil" }
          ],
          correct: "A"
        },
        {
          id: "parent",
          sol: "ES.8.a",
          sub: "ES.8.a.1",
          stem: "The mineral grains in this soil most likely came from —",
          choices: [
            { letter: "A", text: "sand blown in from the Coastal Plain" },
            { letter: "B", text: "decayed leaves and roots in the top layer" },
            { letter: "C", text: "weathering of the granite beneath the field" },
            { letter: "D", text: "limestone washed in from the Valley and Ridge" }
          ],
          correct: "C"
        },
        {
          id: "soil-nonrenewable",
          sol: "ES.6.b",
          sub: "ES.6.b.1",
          stem: "Based on sentence 5, why is soil often treated as a nonrenewable resource?",
          choices: [
            { letter: "A", text: "It forms only on the floors of lakes and oceans." },
            { letter: "B", text: "It forms far more slowly than it can be lost to erosion." },
            { letter: "C", text: "It is made mostly of fossil fuels such as coal." },
            { letter: "D", text: "It can no longer hold water once it has been plowed." }
          ],
          correct: "B"
        },
        {
          id: "climate",
          sol: "ES.8.a",
          sub: "ES.8.a.3",
          stem: "The same kind of granite lies beneath a cold, dry region. Compared with the soil in the Piedmont pit, the soil there would most likely be —",
          choices: [
            { letter: "A", text: "thicker, because cold temperatures speed up chemical weathering" },
            { letter: "B", text: "the same, because soil depends only on the type of parent rock" },
            { letter: "C", text: "thicker, because dry air adds more decayed leaves to the surface" },
            { letter: "D", text: "thinner, because chemical weathering is slow in cold, dry places" }
          ],
          correct: "D"
        },
        {
          id: "clear-slope",
          sol: "ES.6.a",
          sub: "ES.6.a.2",
          stem: "A farmer plans to clear the trees from a steep hillside to plant corn. Which is the best evaluation of this plan?",
          choices: [
            { letter: "A", text: "It adds cropland, but bare soil on the slope may erode much faster than new soil forms." },
            { letter: "B", text: "It has no real risk, because soil on a hillside is fully replaced every few years." },
            { letter: "C", text: "It will make the soil thicker, because tree roots no longer hold the soil in place." },
            { letter: "D", text: "It will not change erosion, because the slope of land does not affect running water." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "res-raindrop-divide",
      family: "RES",
      title: "Where does a raindrop go?",
      kind: "Resources & Fresh Water · ES.8",
      blurb: "Two raindrops, one ridge, and two very different trips to the sea.",
      level: 1,
      passage: "<p>" + N(1) + "A <strong>watershed</strong> is all the land that drains into one body of water. " + N(2) + "Rain near Richmond flows into the James River and then the Chesapeake Bay. " + N(3) + "Rain near Abingdon, in southwest Virginia, flows to the Holston, Tennessee, Ohio and Mississippi rivers. " + N(4) + "High ground called a <strong>divide</strong> separates the two watersheds. " + N(5) + "Where the James slows near the Bay, mud settles out of the water.</p>",
      claims: [
        {
          id: "james-mouth",
          sol: "ES.8.d",
          sub: "ES.8.d.1",
          stem: "According to sentence 2, the James River empties into the —",
          choices: [
            { letter: "A", text: "Gulf of Mexico" },
            { letter: "B", text: "Chesapeake Bay" },
            { letter: "C", text: "Ohio River" },
            { letter: "D", text: "Holston River" }
          ],
          correct: "B"
        },
        {
          id: "divide",
          sol: "ES.8.d",
          sub: "ES.8.d.1",
          stem: "A divide is best described as —",
          choices: [
            { letter: "A", text: "high ground that separates two watersheds" },
            { letter: "B", text: "the place where a river empties into a bay" },
            { letter: "C", text: "a low area where water collects after rain" },
            { letter: "D", text: "the line where fresh water meets seawater" }
          ],
          correct: "A"
        },
        {
          id: "tributary",
          sol: "ES.8.d",
          sub: "ES.8.d.1",
          stem: "Which river is also part of the Chesapeake Bay watershed?",
          choices: [
            { letter: "A", text: "the Tennessee" },
            { letter: "B", text: "the Holston" },
            { letter: "C", text: "the Mississippi" },
            { letter: "D", text: "the Rappahannock" }
          ],
          correct: "D"
        },
        {
          id: "fertilizer",
          sol: "ES.8.c",
          sub: "ES.8.c.2",
          stem: "During a storm, extra fertilizer washes off a farm field near Richmond. Based on the passage, where would the fertilizer most likely end up?",
          choices: [
            { letter: "A", text: "in the Gulf of Mexico, by way of the Ohio River" },
            { letter: "B", text: "in the Holston River of southwest Virginia" },
            { letter: "C", text: "in the Chesapeake Bay, by way of the James River" },
            { letter: "D", text: "on top of the divide between the two watersheds" }
          ],
          correct: "C"
        },
        {
          id: "mud",
          sol: "ES.8.d",
          sub: "ES.8.d.2",
          stem: "If mud keeps settling where the James slows (sentence 5) for hundreds of years, that area will most likely —",
          choices: [
            { letter: "A", text: "become shallower as mud builds up new marshy land" },
            { letter: "B", text: "become a deep canyon carved by the slow water" },
            { letter: "C", text: "move upstream into the mountains near Abingdon" },
            { letter: "D", text: "stay the same, because the mud dissolves in salt water" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "res-porosity-columns",
      family: "RES",
      title: "Sand, gravel and clay in a column",
      kind: "Resources & Fresh Water · ES.8",
      blurb: "Pour water through three sediments: which holds the most, and which lets it through?",
      level: 1,
      passage: "<p>" + N(1) + "Students filled identical plastic cylinders with 100 mL of dry gravel, sand or clay collected beside a Virginia stream. " + N(2) + "To measure <strong>porosity</strong>, they slowly poured water into each cylinder until the sediment was just covered and recorded how much water it took. " + N(3) + "To compare <strong>permeability</strong>, they then opened a small hole in the bottom of each cylinder and timed how long 25 mL of water took to drain out. " + N(4) + "They also tested a mix of equal parts gravel and sand. " + N(5) + "The gravel had come from the stream channel, and the clay from the flat floodplain beside it.</p>" +
        "<table><tr><th>Sediment</th><th>Water held (mL)</th><th>Time for 25 mL to drain</th></tr>" +
        "<tr><td>Gravel</td><td>32</td><td>6 s</td></tr>" +
        "<tr><td>Sand</td><td>36</td><td>45 s</td></tr>" +
        "<tr><td>Clay</td><td>48</td><td>did not drain in 10 min</td></tr>" +
        "<tr><td>Gravel and sand mix</td><td>22</td><td>30 s</td></tr></table>",
      claims: [
        {
          id: "constant",
          sol: "ES.8.b",
          sub: "ES.8.b.1",
          stem: "Which was kept the same for every sediment to make the comparison fair?",
          choices: [
            { letter: "A", text: "the type of sediment in each cylinder" },
            { letter: "B", text: "the volume of sediment in each cylinder" },
            { letter: "C", text: "the time the water took to drain out" },
            { letter: "D", text: "the amount of water each sediment held" }
          ],
          correct: "B"
        },
        {
          id: "most-permeable",
          sol: "ES.8.b",
          sub: "ES.8.b.1",
          stem: "According to the table, which sediment was the most permeable?",
          choices: [
            { letter: "A", text: "gravel" },
            { letter: "B", text: "sand" },
            { letter: "C", text: "clay" },
            { letter: "D", text: "the gravel and sand mix" }
          ],
          correct: "A"
        },
        {
          id: "clay-conclusion",
          sol: "ES.8.b",
          sub: "ES.8.b.2",
          stem: "Which conclusion is best supported by the results for clay?",
          choices: [
            { letter: "A", text: "Clay holds little water because its grains are so tiny." },
            { letter: "B", text: "The more water a sediment holds, the faster water drains through it." },
            { letter: "C", text: "Clay would be the best layer to tap with a drinking-water well." },
            { letter: "D", text: "A sediment with high porosity can still have very low permeability." }
          ],
          correct: "D"
        },
        {
          id: "mixed",
          sol: "ES.8.b",
          sub: "ES.8.b.2",
          stem: "Which statement best explains why the gravel and sand mix held less water than either sediment alone?",
          choices: [
            { letter: "A", text: "Mixing the two sediments made each grain grow larger." },
            { letter: "B", text: "Sand grains filled many of the spaces between the gravel." },
            { letter: "C", text: "Gravel soaks water into the inside of each of its pieces." },
            { letter: "D", text: "Water drained out of the mix before it could be measured." }
          ],
          correct: "B"
        },
        {
          id: "landfill",
          sol: "ES.8.c",
          sub: "ES.8.c.1",
          stem: "A county wants to build a landfill where leaking liquid is least likely to reach the groundwater. Based on the data, the best material to lie beneath the landfill is a thick layer of —",
          choices: [
            { letter: "A", text: "gravel" },
            { letter: "B", text: "sand" },
            { letter: "C", text: "clay" },
            { letter: "D", text: "gravel mixed with sand" }
          ],
          correct: "C"
        },
        {
          id: "floodplain",
          sol: "ES.8.d",
          sub: "ES.8.d.2",
          stem: "Sentence 5 says the gravel came from the stream channel and the clay from the floodplain. Which statement best explains this pattern?",
          choices: [
            { letter: "A", text: "Fast channel water carries clay away; slow floodwater on the floodplain lets it settle." },
            { letter: "B", text: "Clay forms in place on the floodplain when gravel there slowly weathers into fine mud." },
            { letter: "C", text: "Floods push gravel onto the floodplain and leave the fine clay behind in the channel." },
            { letter: "D", text: "Clay grains are heavier than gravel, so they sink first wherever the water runs deep." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "res-shenandoah-karst",
      family: "RES",
      title: "Sinkholes and springs in the Shenandoah Valley",
      kind: "Resources & Fresh Water · ES.6 · ES.8",
      blurb: "A dye trace shows how fast water moves through limestone.",
      level: 2,
      passage: "<p>" + N(1) + "The Shenandoah Valley, in the Valley and Ridge province, is underlain by thick layers of limestone. " + N(2) + "Rainwater absorbs carbon dioxide from the air and soil, forming weak <strong>carbonic acid</strong> that slowly dissolves limestone along cracks. " + N(3) + "Over thousands of years this has produced caverns, sinkholes and springs. " + N(4) + "A creek on one farm flows into a sinkhole and disappears underground. " + N(5) + "Geologists poured a harmless green dye into the sinkhole, and it appeared in a spring 3 km away only 20 hours later. " + N(6) + "Nearby, a quarry mines the same limestone and pumps groundwater out of its pit so that workers can dig deeper.</p>",
      claims: [
        {
          id: "acid",
          sol: "ES.8.a",
          sub: "ES.8.a.2",
          stem: "According to sentence 2, carbonic acid forms when —",
          choices: [
            { letter: "A", text: "limestone dissolves in fresh water" },
            { letter: "B", text: "rainwater absorbs carbon dioxide" },
            { letter: "C", text: "a cavern roof collapses in a field" },
            { letter: "D", text: "a quarry crushes limestone into lime" }
          ],
          correct: "B"
        },
        {
          id: "sinkhole",
          sol: "ES.8.a",
          sub: "ES.8.a.2",
          stem: "Which statement best describes how most sinkholes in the valley form?",
          choices: [
            { letter: "A", text: "Wind blows away the loose soil from a dry, bare farm field." },
            { letter: "B", text: "Colliding plates push rock layers up into a ridge." },
            { letter: "C", text: "Ground collapses into a space where limestone dissolved." },
            { letter: "D", text: "A river drops sediment in a low, round basin." }
          ],
          correct: "C"
        },
        {
          id: "blue-ridge",
          sol: "ES.8.a",
          sub: "ES.8.a.3",
          stem: "The Blue Ridge, just east of the valley, is made mostly of granite and other rocks that do not dissolve easily in weak acid. Compared with the valley, the Blue Ridge most likely has —",
          choices: [
            { letter: "A", text: "fewer caverns and sinkholes, because its rock resists carbonic acid" },
            { letter: "B", text: "more caverns, because granite has more cracks than limestone does" },
            { letter: "C", text: "more sinkholes, because it receives more rain than the valley does" },
            { letter: "D", text: "the same karst features, because both areas receive the same rain" }
          ],
          correct: "A"
        },
        {
          id: "dye",
          sol: "ES.8.c",
          sub: "ES.8.c.2",
          stem: "A farmer spreads manure beside the sinkhole just before a heavy rain. Based on the dye test, which result is most likely?",
          choices: [
            { letter: "A", text: "Thick soil will filter out the manure long before it reaches any water." },
            { letter: "B", text: "Bacteria from the manure could reach the spring within about a day." },
            { letter: "C", text: "The manure will stay trapped in the sinkhole for thousands of years." },
            { letter: "D", text: "The rain will carry the manure east into the rocks of the Blue Ridge." }
          ],
          correct: "B"
        },
        {
          id: "limestone-resource",
          sol: "ES.6.c",
          sub: "ES.6.c.1",
          stem: "Which statement about Virginia's limestone resource is accurate?",
          choices: [
            { letter: "A", text: "It is mined on the Coastal Plain as a source of titanium." },
            { letter: "B", text: "It is burned in power plants to generate the state's electricity." },
            { letter: "C", text: "It formed from cooled lava flows in the Blue Ridge." },
            { letter: "D", text: "It is quarried in the Valley and Ridge for stone and lime." }
          ],
          correct: "D"
        },
        {
          id: "quarry-pumping",
          sol: "ES.6.c",
          sub: "ES.6.c.2",
          stem: "The quarry in sentence 6 provides jobs and stone for roads. Which is the most likely environmental cost of its pumping in this karst area?",
          choices: [
            { letter: "A", text: "Nearby wells may go dry, and new sinkholes may open as the water table drops." },
            { letter: "B", text: "The limestone will stop dissolving forever once the groundwater is removed." },
            { letter: "C", text: "Nearby springs will flow faster because less groundwater is left to feed them." },
            { letter: "D", text: "The rock will turn soft and crumbly, so the quarry will produce less stone." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "res-power-sources-table",
      family: "RES",
      title: "Comparing Virginia's power sources",
      kind: "Resources & Fresh Water · ES.6",
      blurb: "Coal, gas, nuclear, sun, wind and water: a table of carbon and reliability.",
      level: 2,
      passage: "<p>" + N(1) + "A Virginia utility compared six ways to generate electricity. " + N(2) + "In coal and natural gas plants, burning fuel boils water into steam that spins a turbine connected to a generator. " + N(3) + "Nuclear plants, such as those at North Anna and Surry, also make steam, using heat released when uranium atoms split. " + N(4) + "Solar panels change sunlight directly into electricity, while wind turbines, including those off Virginia Beach, are turned by moving air. " + N(5) + "Hydroelectric dams use falling water to spin turbines. " + N(6) + "The table gives the approximate carbon dioxide released over each source's whole life cycle.</p>" +
        "<table><tr><th>Source</th><th>CO<sub>2</sub> (grams per kWh)</th><th>Runs day and night on demand?</th></tr>" +
        "<tr><td>Coal</td><td>about 1,000</td><td>yes</td></tr>" +
        "<tr><td>Natural gas</td><td>about 450</td><td>yes</td></tr>" +
        "<tr><td>Nuclear</td><td>about 12</td><td>yes</td></tr>" +
        "<tr><td>Solar</td><td>about 40</td><td>no</td></tr>" +
        "<tr><td>Wind</td><td>about 11</td><td>no</td></tr>" +
        "<tr><td>Hydroelectric</td><td>about 20</td><td>yes, while the reservoir holds water</td></tr></table>",
      claims: [
        {
          id: "gas-steam",
          sol: "ES.6.d",
          sub: "ES.6.d.1",
          stem: "In a natural gas power plant, what directly spins the turbine?",
          choices: [
            { letter: "A", text: "steam made with heat from the burning fuel" },
            { letter: "B", text: "sunlight striking a field of panels" },
            { letter: "C", text: "falling water released from a reservoir" },
            { letter: "D", text: "moving air that pushes on long blades" }
          ],
          correct: "A"
        },
        {
          id: "no-turbine",
          sol: "ES.6.d",
          sub: "ES.6.d.1",
          stem: "Which source in the table generates electricity without spinning a turbine?",
          choices: [
            { letter: "A", text: "wind" },
            { letter: "B", text: "solar" },
            { letter: "C", text: "hydroelectric" },
            { letter: "D", text: "natural gas" }
          ],
          correct: "B"
        },
        {
          id: "low-reliable",
          sol: "ES.6.d",
          sub: "ES.6.d.2",
          stem: "A city wants the source with the lowest carbon dioxide release that can also run day and night on demand. Based on the table, the best choice is —",
          choices: [
            { letter: "A", text: "wind" },
            { letter: "B", text: "solar" },
            { letter: "C", text: "nuclear" },
            { letter: "D", text: "natural gas" }
          ],
          correct: "C"
        },
        {
          id: "gas-switch",
          sol: "ES.6.d",
          sub: "ES.6.d.2",
          stem: "The utility replaces a coal plant with a natural gas plant that makes the same amount of electricity. Based on the table, its carbon dioxide release will drop by about —",
          choices: [
            { letter: "A", text: "10 percent" },
            { letter: "B", text: "25 percent" },
            { letter: "C", text: "55 percent" },
            { letter: "D", text: "95 percent" }
          ],
          correct: "C"
        },
        {
          id: "nuclear-tradeoff",
          sol: "ES.6.a",
          sub: "ES.6.a.2",
          stem: "Which statement best evaluates a trade-off of nuclear power?",
          choices: [
            { letter: "A", text: "It releases little carbon dioxide, but its waste stays radioactive for thousands of years." },
            { letter: "B", text: "It releases no carbon dioxide at all and leaves no waste behind once its fuel is used up." },
            { letter: "C", text: "It runs on a renewable fuel, but it releases more carbon dioxide than a coal-fired plant." },
            { letter: "D", text: "It leaves no waste behind, but it can run only during hours when the sun is shining." }
          ],
          correct: "A"
        },
        {
          id: "uranium",
          sol: "ES.6.b",
          sub: "ES.6.b.1",
          stem: "Which source in the table depends on a nonrenewable fuel even though it releases little carbon dioxide?",
          choices: [
            { letter: "A", text: "wind" },
            { letter: "B", text: "hydroelectric" },
            { letter: "C", text: "solar" },
            { letter: "D", text: "nuclear" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "res-coal-acid-drainage",
      family: "RES",
      title: "Coal and a creek in southwest Virginia",
      kind: "Resources & Fresh Water · ES.6 · ES.8",
      blurb: "Coal brings jobs to the Appalachian Plateau, but an old mine turns a creek orange.",
      level: 2,
      passage: "<p>" + N(1) + "Coal is mined in the Appalachian Plateau of southwest Virginia, in counties such as Wise and Buchanan. " + N(2) + "It formed from the remains of swamp plants that were buried and compressed over millions of years. " + N(3) + "Mining has provided jobs and tax money, and Virginia coal has been burned to generate electricity and shipped overseas for making steel. " + N(4) + "Where mining exposes rock containing the mineral pyrite, air and water react with it to form sulfuric acid, a problem called <strong>acid mine drainage</strong>. " + N(5) + "At an abandoned mine, the acidic water now flows through a channel lined with crushed limestone before it enters a creek. " + N(6) + "Students measured pH and counted fish species at three sites. " + N(7) + "Since 1977, federal law has required companies to <strong>reclaim</strong> surface mines by reshaping and replanting the land.</p>" +
        "<table><tr><th>Site</th><th>pH</th><th>Fish species</th></tr>" +
        "<tr><td>Creek above the mine</td><td>7.1</td><td>9</td></tr>" +
        "<tr><td>Mine water before the limestone channel</td><td>3.8</td><td>0</td></tr>" +
        "<tr><td>Creek below where treated water enters</td><td>6.6</td><td>6</td></tr></table>",
      claims: [
        {
          id: "natural-gas",
          sol: "ES.6.c",
          sub: "ES.6.c.1",
          stem: "Besides coal, which resource is also produced in large amounts in the Appalachian Plateau of southwest Virginia?",
          choices: [
            { letter: "A", text: "natural gas" },
            { letter: "B", text: "titanium sands" },
            { letter: "C", text: "farmed oysters" },
            { letter: "D", text: "offshore wind" }
          ],
          correct: "A"
        },
        {
          id: "pyrite",
          sol: "ES.6.a",
          sub: "ES.6.a.1",
          stem: "According to sentence 4, acid mine drainage forms when —",
          choices: [
            { letter: "A", text: "limestone dissolves in rainwater" },
            { letter: "B", text: "coal is burned in a power plant" },
            { letter: "C", text: "pyrite in exposed rock reacts with air and water" },
            { letter: "D", text: "reclaimed land is replanted with grass and trees" }
          ],
          correct: "C"
        },
        {
          id: "data",
          sol: "ES.8.c",
          sub: "ES.8.c.2",
          stem: "Which conclusion is best supported by the data in the table?",
          choices: [
            { letter: "A", text: "The creek above the mine is more acidic than the mine water." },
            { letter: "B", text: "The limestone channel makes the water in the creek more strongly acidic." },
            { letter: "C", text: "The number of fish species rises as the pH goes down." },
            { letter: "D", text: "The mine water is acidic, but some fish live below the treated water." }
          ],
          correct: "D"
        },
        {
          id: "limestone-eval",
          sol: "ES.6.a",
          sub: "ES.6.a.2",
          stem: "Which is the best evaluation of the limestone channel?",
          choices: [
            { letter: "A", text: "It fully solves the problem, because the pH below it equals the pH above the mine." },
            { letter: "B", text: "It helps, but there are still fewer fish species below it than above the mine." },
            { letter: "C", text: "It fails, because no fish species can be found anywhere along the creek." },
            { letter: "D", text: "It harms the creek, because limestone makes the water more strongly acidic." }
          ],
          correct: "B"
        },
        {
          id: "coal-jobs",
          sol: "ES.6.c",
          sub: "ES.6.c.2",
          stem: "In recent decades, many power plants have switched from coal to natural gas. Which is the most likely economic effect on coal counties such as Wise and Buchanan?",
          choices: [
            { letter: "A", text: "more mining jobs, because power plants are buying less coal" },
            { letter: "B", text: "no change, because Virginia coal is used only to make steel" },
            { letter: "C", text: "fewer mining jobs and less local tax money from coal" },
            { letter: "D", text: "more farmland, because unmined coal seams turn into soil" }
          ],
          correct: "C"
        },
        {
          id: "coal-nonrenewable",
          sol: "ES.6.b",
          sub: "ES.6.b.1",
          stem: "Based on sentence 2, coal is classified as nonrenewable because —",
          choices: [
            { letter: "A", text: "it forms over millions of years, far slower than it is used" },
            { letter: "B", text: "it is found only in the far southwest corner of Virginia" },
            { letter: "C", text: "it releases carbon dioxide into the air whenever it is burned" },
            { letter: "D", text: "it cannot be replaced by any other source of energy" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "res-drought-well",
      family: "RES",
      title: "A dry summer and a shallow well",
      kind: "Resources & Fresh Water · ES.6 · ES.8",
      blurb: "Track the water table through a drought, then decide whether a factory can pump more.",
      level: 2,
      passage: "<p>" + N(1) + "A family in Virginia's Piedmont gets its water from a well 8 m deep. " + N(2) + "Below their yard, the pores in the ground near the surface hold mostly air, but deeper down every pore and crack is filled with water. " + N(3) + "The top of the water-filled zone is the <strong>water table</strong>. " + N(4) + "A county hydrologist recorded monthly rainfall and the depth to the water table in a nearby monitoring well. " + N(5) + "She estimates that rain and snowmelt <strong>recharge</strong> the county's aquifer with about 40 million liters of water per day, while wells already pump out about 30 million liters per day. " + N(6) + "A new factory has asked to pump an extra 15 million liters per day. " + N(7) + "In August, the family's well stopped producing water.</p>" +
        "<table><tr><th>Month</th><th>Rainfall (cm)</th><th>Depth to water table (m)</th></tr>" +
        "<tr><td>April</td><td>10</td><td>5.8</td></tr>" +
        "<tr><td>June</td><td>5</td><td>6.9</td></tr>" +
        "<tr><td>August</td><td>2</td><td>9.2</td></tr>" +
        "<tr><td>October</td><td>9</td><td>6.4</td></tr></table>",
      claims: [
        {
          id: "saturation",
          sol: "ES.8.b",
          sub: "ES.8.b.1",
          stem: "The deeper zone described in sentence 2, where every pore and crack is filled with water, is called the —",
          choices: [
            { letter: "A", text: "zone of aeration" },
            { letter: "B", text: "zone of saturation" },
            { letter: "C", text: "A horizon of the soil" },
            { letter: "D", text: "drainage divide" }
          ],
          correct: "B"
        },
        {
          id: "gw-renewable",
          sol: "ES.6.b",
          sub: "ES.6.b.1",
          stem: "Groundwater in the county's aquifer stays a renewable resource only as long as —",
          choices: [
            { letter: "A", text: "the amount pumped out does not exceed recharge" },
            { letter: "B", text: "the water table stays at one depth all year long" },
            { letter: "C", text: "every family well is drilled deeper than 8 m" },
            { letter: "D", text: "no rain or snow falls during the summer months" }
          ],
          correct: "A"
        },
        {
          id: "dry-well",
          sol: "ES.8.b",
          sub: "ES.8.b.2",
          stem: "Which statement best explains why the family's well stopped producing water in August?",
          choices: [
            { letter: "A", text: "August rain filled the zone of aeration with air." },
            { letter: "B", text: "The water table rose above the top of the well." },
            { letter: "C", text: "The ground below became too permeable to hold water." },
            { letter: "D", text: "The water table dropped below the bottom of the well." }
          ],
          correct: "D"
        },
        {
          id: "trend",
          sol: "ES.8.c",
          sub: "ES.8.c.2",
          stem: "Which relationship is shown by the data in the table?",
          choices: [
            { letter: "A", text: "Months with more rain had a deeper water table." },
            { letter: "B", text: "The water table stayed at the same depth all year." },
            { letter: "C", text: "Months with less rain had a deeper water table." },
            { letter: "D", text: "Rainfall had no connection to water table depth." }
          ],
          correct: "C"
        },
        {
          id: "conserve",
          sol: "ES.8.c",
          sub: "ES.8.c.1",
          stem: "Which action would best help the family conserve groundwater during a drought?",
          choices: [
            { letter: "A", text: "fixing leaky faucets and taking shorter showers" },
            { letter: "B", text: "watering the lawn every afternoon in the heat" },
            { letter: "C", text: "drilling a second, deeper well beside the first" },
            { letter: "D", text: "washing the family cars in the driveway more often" }
          ],
          correct: "A"
        },
        {
          id: "factory",
          sol: "ES.6.b",
          sub: "ES.6.b.2",
          stem: "Which statement about the factory's request is best supported by the numbers in sentences 5 and 6?",
          choices: [
            { letter: "A", text: "Approving it would keep the total pumping well below the aquifer's recharge rate." },
            { letter: "B", text: "Approving it would make pumping exceed recharge, so water levels would likely fall." },
            { letter: "C", text: "The aquifer can supply any amount, because rain and snow refill it every single year." },
            { letter: "D", text: "The factory by itself would use more water than the aquifer receives each day." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "res-rappahannock-meander",
      family: "RES",
      title: "A bend in the Rappahannock",
      kind: "Resources & Fresh Water · ES.6 · ES.8",
      blurb: "Measure the current around a river bend and predict how the channel will change.",
      level: 3,
      passage: "<p>" + N(1) + "A field class studied a sharp bend, or <strong>meander</strong>, where the Rappahannock River winds toward the Chesapeake Bay. " + N(2) + "They measured the current speed and sampled the river bottom at three places. " + N(3) + "On the outside of the bend, the bank was a steep wall of bare soil with tree roots hanging out of it. " + N(4) + "On the inside of the bend, a low bar of sand sloped gently into the water. " + N(5) + "Beyond the banks, a wide, flat floodplain was covered with a layer of fine silt left by a flood the year before. " + N(6) + "Upstream, a company has proposed dredging sand and gravel from the riverbed to sell for concrete, and an old dam once supplied a nearby mill with hydroelectric power.</p>" +
        "<table><tr><th>Location</th><th>Current speed (m/s)</th><th>Bottom material</th></tr>" +
        "<tr><td>Outside of the bend</td><td>1.3</td><td>gravel and cobbles</td></tr>" +
        "<tr><td>Middle of the channel</td><td>0.8</td><td>gravel and sand</td></tr>" +
        "<tr><td>Inside of the bend</td><td>0.3</td><td>fine sand</td></tr></table>",
      claims: [
        {
          id: "erosion-where",
          sol: "ES.8.d",
          sub: "ES.8.d.2",
          stem: "Based on the table and sentences 3 and 4, where is the river eroding its banks the most?",
          choices: [
            { letter: "A", text: "on the inside of the bend, where sand is building up" },
            { letter: "B", text: "on the floodplain, where the silt layer was left behind" },
            { letter: "C", text: "on the outside of the bend, where the current is fastest" },
            { letter: "D", text: "upstream of the dam, where the old mill once stood" }
          ],
          correct: "C"
        },
        {
          id: "predict-shape",
          sol: "ES.8.d",
          sub: "ES.8.d.2",
          stem: "If these processes continue for hundreds of years, the meander will most likely —",
          choices: [
            { letter: "A", text: "straighten as sand fills in the outside of the bend" },
            { letter: "B", text: "grow wider as the outside bank wears back and the bar builds" },
            { letter: "C", text: "stay in the same place, because tree roots hold every bank" },
            { letter: "D", text: "move uphill, away from the floodplain and toward the nearby ridges" }
          ],
          correct: "B"
        },
        {
          id: "same-watershed",
          sol: "ES.8.d",
          sub: "ES.8.d.1",
          stem: "Which river belongs to the same major watershed as the Rappahannock?",
          choices: [
            { letter: "A", text: "the York" },
            { letter: "B", text: "the New" },
            { letter: "C", text: "the Clinch" },
            { letter: "D", text: "the Roanoke" }
          ],
          correct: "A"
        },
        {
          id: "floodplain-soil",
          sol: "ES.8.a",
          sub: "ES.8.a.3",
          stem: "Soil on this floodplain developed differently from soil on a hilltop nearby. Which statement best explains the difference?",
          choices: [
            { letter: "A", text: "Floodplain soil is thinner, because each flood strips away its entire top layer." },
            { letter: "B", text: "Floodplain soil is made only of leaves, while hilltop soil has no organic matter." },
            { letter: "C", text: "Hilltop soil is younger, because new silt is added to it during every flood." },
            { letter: "D", text: "Floodplain soil builds up from silt floods leave; hilltop soil forms from rock below." }
          ],
          correct: "D"
        },
        {
          id: "dredge",
          sol: "ES.6.c",
          sub: "ES.6.c.2",
          stem: "Which statement best weighs the dredging proposal in sentence 6?",
          choices: [
            { letter: "A", text: "It supplies sand and gravel for building, but it can cloud the water and harm riverbed habitat." },
            { letter: "B", text: "It has no real costs, because the river replaces all of the sand and gravel within a few days." },
            { letter: "C", text: "It would stop all erosion on the outside of the bend, so it would bring only benefits downstream." },
            { letter: "D", text: "It would make the water clearer forever, because sediment would no longer be in the river." }
          ],
          correct: "A"
        },
        {
          id: "hydro",
          sol: "ES.6.d",
          sub: "ES.6.d.1",
          stem: "A hydroelectric dam, like the old one in sentence 6, produces electricity by —",
          choices: [
            { letter: "A", text: "burning wood to boil water into steam" },
            { letter: "B", text: "letting falling water spin a turbine and generator" },
            { letter: "C", text: "splitting atoms dissolved in the river water" },
            { letter: "D", text: "collecting sunlight that reflects off the reservoir" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "res-coastal-plain-aquifer",
      family: "RES",
      title: "Titanium sands and a thirsty aquifer",
      kind: "Resources & Fresh Water · ES.6 · ES.8",
      blurb: "On the Coastal Plain, mining, pumping and the sea all compete for the same sands.",
      level: 3,
      passage: "<p>" + N(1) + "Virginia's Coastal Plain is built of layers of sand, gravel and clay that slope gently toward the Atlantic Ocean. " + N(2) + "In Dinwiddie and Sussex counties, some sand layers contain heavy minerals such as ilmenite and rutile, which have been mined for titanium dioxide, a white pigment used in paint, paper and plastics. " + N(3) + "Miners dig up the sand, separate out the heavy minerals, return the clean sand to the pit and replant the land as farm fields or forest. " + N(4) + "Deeper sand layers form <strong>aquifers</strong>, separated by clay layers that slow the movement of water between them. " + N(5) + "Cities and industries in southeastern Virginia pump large amounts of fresh water from these aquifers. " + N(6) + "Salty groundwater lies deeper and closer to the ocean, and when fresh water is pumped out faster than it is recharged, the salty water can move inland, a process called <strong>saltwater intrusion</strong>. " + N(7) + "A monitoring well near the coast recorded the data below. " + N(8) + "To slow the decline, a regional utility has begun injecting highly treated wastewater back into the deep aquifer, a project costing hundreds of millions of dollars.</p>" +
        "<table><tr><th>Year</th><th>Water level (m below sea level)</th><th>Chloride (mg/L)</th></tr>" +
        "<tr><td>1980</td><td>15</td><td>40</td></tr>" +
        "<tr><td>1995</td><td>28</td><td>70</td></tr>" +
        "<tr><td>2010</td><td>41</td><td>140</td></tr>" +
        "<tr><td>2025</td><td>47</td><td>210</td></tr></table>",
      claims: [
        {
          id: "titanium",
          sol: "ES.6.c",
          sub: "ES.6.c.1",
          stem: "According to the passage, Virginia's titanium minerals are found in —",
          choices: [
            { letter: "A", text: "limestone layers of the Valley and Ridge" },
            { letter: "B", text: "coal seams of the Appalachian Plateau" },
            { letter: "C", text: "sand layers of the Coastal Plain" },
            { letter: "D", text: "granite bedrock of the Blue Ridge" }
          ],
          correct: "C"
        },
        {
          id: "aquifer",
          sol: "ES.8.b",
          sub: "ES.8.b.1",
          stem: "Based on sentence 4, an aquifer is best described as —",
          choices: [
            { letter: "A", text: "a clay layer that blocks the flow of groundwater" },
            { letter: "B", text: "a permeable layer that stores and transmits water" },
            { letter: "C", text: "the zone above the water table where pores hold air" },
            { letter: "D", text: "a pool of seawater resting on top of the land" }
          ],
          correct: "B"
        },
        {
          id: "trend",
          sol: "ES.8.b",
          sub: "ES.8.b.2",
          stem: "Which conclusion about the aquifer is best supported by the data in the table?",
          choices: [
            { letter: "A", text: "As the water level fell, chloride rose, which fits salty water moving in." },
            { letter: "B", text: "As the water level fell, chloride also fell, so the water grew fresher." },
            { letter: "C", text: "The water level rose steadily after 1980 even as pumping increased." },
            { letter: "D", text: "Water level and chloride changed in no clear pattern over the years." }
          ],
          correct: "A"
        },
        {
          id: "predict",
          sol: "ES.8.c",
          sub: "ES.8.c.2",
          stem: "Drinking water should usually contain less than 250 mg/L of chloride. If pumping continues at the same rate, which prediction is best supported by the data?",
          choices: [
            { letter: "A", text: "Chloride will drop to zero once the clay layers fill with seawater." },
            { letter: "B", text: "The water level will rise back to sea level with no change in pumping." },
            { letter: "C", text: "The aquifer will turn into a clay layer that can no longer hold water." },
            { letter: "D", text: "Chloride will likely rise past 250 mg/L within a few decades." }
          ],
          correct: "D"
        },
        {
          id: "inject",
          sol: "ES.6.a",
          sub: "ES.6.a.2",
          stem: "Which statement best evaluates the injection project in sentence 8?",
          choices: [
            { letter: "A", text: "It costs nothing, because the wastewater is free to collect and reuse." },
            { letter: "B", text: "It is costly, but it adds water to the aquifer and may slow intrusion." },
            { letter: "C", text: "It speeds up saltwater intrusion by adding salt to the fresh aquifer." },
            { letter: "D", text: "It has no benefit, because aquifers cannot take in water from wells." }
          ],
          correct: "B"
        },
        {
          id: "mining-impacts",
          sol: "ES.6.c",
          sub: "ES.6.c.2",
          stem: "Select TWO statements that correctly describe impacts of mining the heavy-mineral sands described in sentences 2 and 3.",
          choices: [
            { letter: "A", text: "It provides a raw material for products such as white paint." },
            { letter: "B", text: "It permanently turns the mined land into a deep, open lake." },
            { letter: "C", text: "It disturbs farmland and forest until the land is replanted." },
            { letter: "D", text: "It releases large amounts of carbon dioxide by burning sand." }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "res-york-nitrate",
      family: "RES",
      title: "Nitrate after the storm",
      kind: "Resources & Fresh Water · ES.6 · ES.8",
      blurb: "Four streams in the York River watershed, one dry week and one big storm.",
      level: 3,
      passage: "<p>" + N(1) + "A high school team tested nitrate, a nutrient found in fertilizer and wastewater, in four small streams that all flow into a creek in the York River watershed. " + N(2) + "Site A drains a forest. " + N(3) + "Site B drains corn fields that farmers fertilize each spring to increase their harvests. " + N(4) + "Site C is just below the pipe where a town's wastewater treatment plant releases its treated water. " + N(5) + "Site D drains a new housing development with lawns and storm drains. " + N(6) + "The team sampled each site once after a dry week and again the day after 5 cm of rain. " + N(7) + "In the Chesapeake Bay, extra nutrients feed large blooms of algae; when the algae die and decay, bacteria use up the dissolved oxygen, leaving zones where fish and crabs cannot survive. " + N(8) + "Pollution that comes from a single, identifiable place is called <strong>point source</strong> pollution, while pollution that washes off a wide area is <strong>nonpoint source</strong> pollution. " + N(9) + "Town leaders and farmers are now deciding how to protect the streams.</p>" +
        "<table><tr><th>Site</th><th>Nitrate after dry week (mg/L)</th><th>Nitrate after storm (mg/L)</th></tr>" +
        "<tr><td>A (forest)</td><td>0.2</td><td>0.3</td></tr>" +
        "<tr><td>B (corn fields)</td><td>1.1</td><td>4.8</td></tr>" +
        "<tr><td>C (below treatment plant)</td><td>3.2</td><td>2.0</td></tr>" +
        "<tr><td>D (housing development)</td><td>0.7</td><td>2.9</td></tr></table>",
      claims: [
        {
          id: "point",
          sol: "ES.8.c",
          sub: "ES.8.c.1",
          stem: "Which site is affected mainly by a point source of pollution?",
          choices: [
            { letter: "A", text: "Site A" },
            { letter: "B", text: "Site B" },
            { letter: "C", text: "Site C" },
            { letter: "D", text: "Site D" }
          ],
          correct: "C"
        },
        {
          id: "storm",
          sol: "ES.8.c",
          sub: "ES.8.c.2",
          stem: "Which conclusion is best supported by comparing the two columns of data?",
          choices: [
            { letter: "A", text: "The storm lowered nitrate at every site by adding clean rainwater." },
            { letter: "B", text: "Rain washed nitrate off fields and lawns and diluted the plant's steady outflow." },
            { letter: "C", text: "The forest became the largest source of nitrate in the streams after the storm." },
            { letter: "D", text: "The treatment plant released more nitrate in the storm than the fields." }
          ],
          correct: "B"
        },
        {
          id: "bay-link",
          sol: "ES.8.d",
          sub: "ES.8.d.1",
          stem: "Why can nitrate from these streams affect the Chesapeake Bay?",
          choices: [
            { letter: "A", text: "Nitrate in the streams evaporates and is carried through the air all the way to the Bay." },
            { letter: "B", text: "The York River flows west into the Ohio River, which empties into the Bay." },
            { letter: "C", text: "Tides push Bay water up to the source of every stream twice each day." },
            { letter: "D", text: "The streams are in the Bay's watershed, so their water reaches it through the York." }
          ],
          correct: "D"
        },
        {
          id: "fert-cost",
          sol: "ES.6.a",
          sub: "ES.6.a.1",
          stem: "Based on sentence 7, which is the main environmental cost when fertilizer from farm fields reaches the Bay?",
          choices: [
            { letter: "A", text: "Algae blooms die and decay, using up the oxygen fish and crabs need." },
            { letter: "B", text: "The Bay water becomes too salty for fish and crabs to survive in it." },
            { letter: "C", text: "The nitrate forms a hard crust that buries the oyster reefs." },
            { letter: "D", text: "The fertilizer heats the water until the algae can no longer grow." }
          ],
          correct: "A"
        },
        {
          id: "reduce-b",
          sol: "ES.8.c",
          sub: "ES.8.c.2",
          stem: "Select TWO actions that would most likely lower the nitrate at Site B after storms.",
          choices: [
            { letter: "A", text: "Plant strips of grass and trees between the fields and the stream." },
            { letter: "B", text: "Upgrade the wastewater treatment plant that discharges at Site C." },
            { letter: "C", text: "Grow winter cover crops that hold soil and take up leftover nitrogen." },
            { letter: "D", text: "Spread extra fertilizer on the fields just before heavy rain is forecast." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "half-fertilizer",
          sol: "ES.6.a",
          sub: "ES.6.a.2",
          stem: "The farmers at Site B consider cutting their fertilizer use in half. Which is the best evaluation of this trade-off?",
          choices: [
            { letter: "A", text: "Nitrate in the stream would rise, because less fertilizer leaves more nitrogen behind." },
            { letter: "B", text: "Nitrate runoff would likely drop, but crop harvests and farm income might drop too." },
            { letter: "C", text: "Crop harvests would surely rise, and the nitrate in the stream would not change." },
            { letter: "D", text: "There is no trade-off at all, because fertilizer gives farmers no real benefits." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
