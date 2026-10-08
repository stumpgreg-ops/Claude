/* SOL Lab Earth Science: the 2018 Virginia Science Standards of Learning for Earth Science (ES.1 to ES.12), their key
   ideas (ES.4.a) and the SKILLS each key idea is split into (ES.4.a.1), one per thing a student does, the way the
   reading game splits its standards (SOL Labyrinth v5.17, js/standards-va.js there).

   Each skill is LOTS or HOTS:
     LOTS  lower-order thinking (Bloom's remember / understand / apply): identify, describe, explain, classify,
           interpret a map or table, calculate, use a key.
     HOTS  higher-order thinking (Bloom's analyze / evaluate / create): analyze, compare, infer, predict from a model,
           sequence events from evidence, evaluate a design, a claim or a trade-off.
   A key idea that asks students both to know something and to reason with it is split into a LOTS skill and a HOTS
   skill. Every question names its skill (claim.sub = "ES.4.a.1") and its key idea (claim.sol = "ES.4.a");
   tools/validate-content.js checks they match. The progress code carries results per skill (js/progress-code.js
   STDS) and the teacher page's standards report shows each key idea with its skills, and LOTS and HOTS in total.

   WORDING. `src` on each key idea says where its wording comes from:
     "2018"    matches the 2018 Earth Science Curriculum Framework (VDOE) as quoted by copies of it.
     "recon"   reconstructed from the 2018 framework's structure and topics; check it against the VDOE PDF
               (Science Standards of Learning, 2018, Earth Science) before quoting it. The topics are right; the
               words may differ.
   Edit this file to adjust a skill's text or its LOTS/HOTS level, then run node tools/validate-content.js. */
(function (root) {
  "use strict";
  function K(text, src, skills) {
    return { text: text, src: src, skills: skills.map(function (s) { return { id: "", text: s[0], level: s[1] }; }) };
  }
  var STD = {
    "ES.1": { name: "Scientific and engineering practices",
      text: "The student will demonstrate an understanding of scientific and engineering practices.", src: "2018", keys: {
      a: K("asking questions and defining problems", "2018", [
        ["Identify a testable question or problem that arises from observations of Earth phenomena", "LOTS"],
        ["Formulate or choose the best hypothesis that predicts how a dependent variable responds to an independent variable", "HOTS"]]),
      b: K("planning and carrying out investigations", "2018", [
        ["Identify the independent and dependent variables, constants, control and repeated trials of an investigation", "LOTS"],
        ["Select appropriate tools, metric units and safe procedures to collect data", "LOTS"],
        ["Evaluate or improve the design of an investigation", "HOTS"]]),
      c: K("interpreting, analyzing, and evaluating data", "2018", [
        ["Read and interpret data in tables, graphs and maps", "LOTS"],
        ["Calculate means, rates and gradients from data", "LOTS"],
        ["Analyze data to identify trends, patterns, outliers and relationships", "HOTS"]]),
      d: K("constructing and critiquing conclusions and explanations", "2018", [
        ["Explain a phenomenon using evidence from an investigation", "LOTS"],
        ["Evaluate whether a conclusion is supported by the evidence and identify sources of error", "HOTS"]]),
      e: K("developing and using models", "2018", [
        ["Use models such as topographic maps, profiles, diagrams and latitude and longitude to describe Earth features", "LOTS"],
        ["Use a model to predict an outcome or explain a system", "HOTS"],
        ["Evaluate the merits and limitations of a model", "HOTS"]]),
      f: K("obtaining, evaluating, and communicating information", "2018", [
        ["Explain the difference between a scientific hypothesis, theory and law", "LOTS"],
        ["Evaluate the reliability of a source, a claim or a set of evidence", "HOTS"]]) } },

    "ES.2": { name: "The universe",
      text: "The student will investigate and understand that the universe and its contents formed and have changed over a long period of time.", src: "recon", keys: {
      a: K("the big bang theory is the current scientific explanation for the origin of the universe", "recon", [
        ["Describe the evidence for the big bang theory (expansion, red shift, cosmic background radiation)", "LOTS"],
        ["Analyze how evidence supports or tests the big bang theory", "HOTS"]]),
      b: K("stars, star systems, and galaxies change over long periods of time", "2018", [
        ["Describe how stars form and change over their life cycles, and the main types of galaxies", "LOTS"],
        ["Compare stars by mass, temperature and luminosity (H-R diagram) and predict how they will change", "HOTS"]]),
      c: K("characteristics of the sun, planets and their moons, comets, meteors, asteroids, and dwarf planets are determined by materials found in each body", "2018", [
        ["Describe the characteristics of the sun, planets, moons, comets, meteors, asteroids and dwarf planets", "LOTS"],
        ["Relate a body's composition and distance from the sun (the solar nebular theory) to its characteristics", "HOTS"]]),
      d: K("evidence attained through space exploration has increased our understanding of the structure and nature of our universe", "2018", [
        ["Identify what telescopes, probes, satellites and crewed missions have contributed to our understanding of space", "LOTS"],
        ["Evaluate how new evidence from space exploration changed a scientific explanation", "HOTS"]]) } },

    "ES.3": { name: "Earth in the solar system",
      text: "The student will investigate and understand that Earth is unique in our solar system.", src: "2018", keys: {
      a: K("Earth supports life because of its relative proximity to the sun and other factors", "2018", [
        ["Describe the factors that let Earth support life (distance from the sun, liquid water, atmosphere, magnetic field, size)", "LOTS"],
        ["Compare Earth with other planets and moons to explain why Earth supports life", "HOTS"]]),
      b: K("the dynamics of the sun-Earth-moon system cause seasons, tides, and eclipses", "2018", [
        ["Explain how Earth's tilt and revolution cause the seasons", "LOTS"],
        ["Explain how the positions of the sun, Earth and moon cause moon phases, tides and eclipses", "LOTS"],
        ["Predict or analyze seasons, tides or eclipses from a model or data", "HOTS"]]) } },

    "ES.4": { name: "Minerals",
      text: "The student will investigate and understand how to identify major rock-forming and ore minerals.", src: "recon", keys: {
      a: K("analysis of physical and chemical properties supports mineral identification", "2018", [
        ["Identify minerals by hardness, color, streak, luster, cleavage, fracture and special properties", "LOTS"],
        ["Use an identification key or table to identify an unknown mineral", "LOTS"],
        ["Analyze test results to tell apart minerals with similar properties", "HOTS"]]),
      b: K("characteristics of minerals determine the uses of minerals", "2018", [
        ["Describe the uses of common rock-forming and ore minerals", "LOTS"],
        ["Relate a mineral's properties to the way it is used", "HOTS"]]),
      c: K("rock-forming minerals originate and are formed in specific ways", "2018", [
        ["Describe how minerals form (cooling magma or lava, evaporation, precipitation, heat and pressure)", "LOTS"],
        ["Infer how and where a mineral formed from its crystal size and setting", "HOTS"]]) } },

    "ES.5": { name: "Rocks and the rock cycle",
      text: "The student will investigate and understand that igneous, metamorphic, and sedimentary rocks form and change through the rock cycle.", src: "recon", keys: {
      a: K("Earth materials are finite and are transformed over time", "recon", [
        ["Explain that Earth materials are finite and are recycled and transformed over geologic time", "LOTS"]]),
      b: K("the rock cycle is a model of how rocks form and change", "recon", [
        ["Describe the processes of the rock cycle (weathering, erosion, deposition, compaction and cementation, melting, heat and pressure)", "LOTS"],
        ["Trace a pathway through the rock cycle and evaluate the rock cycle as a model", "HOTS"]]),
      c: K("igneous, sedimentary, and metamorphic rocks have chemical and physical properties that reflect how they formed", "recon", [
        ["Classify rocks as igneous, sedimentary or metamorphic by texture and composition", "LOTS"],
        ["Infer the environment in which a rock formed from its texture and composition", "HOTS"]]),
      d: K("plate tectonics and surface processes transform Earth materials", "recon", [
        ["Explain how physical and chemical weathering and erosion break down and move rock", "LOTS"],
        ["Analyze how plate tectonic settings and surface processes produce particular rocks", "HOTS"]]) } },

    "ES.6": { name: "Resources",
      text: "The student will investigate and understand that resource use is complex.", src: "2018", keys: {
      a: K("global resource use has environmental liabilities and benefits", "2018", [
        ["Describe the environmental costs and benefits of using a resource", "LOTS"],
        ["Evaluate the trade-offs of using a resource", "HOTS"]]),
      b: K("availability, renewal rates, and economic effects are considerations when using resources", "2018", [
        ["Classify resources as renewable or nonrenewable and explain their renewal rates", "LOTS"],
        ["Analyze data on availability, renewal rate and cost to support a resource decision", "HOTS"]]),
      c: K("use of resources in Virginia has environmental and economic impacts", "2018", [
        ["Identify Virginia's major resources and where in Virginia they are found", "LOTS"],
        ["Analyze the environmental and economic impacts of using a resource in Virginia", "HOTS"]]),
      d: K("the use of different energy sources has environmental and economic effects", "recon", [
        ["Describe how energy sources (fossil fuels, nuclear, solar, wind, water, geothermal, biomass) produce energy", "LOTS"],
        ["Compare energy sources by their environmental and economic effects", "HOTS"]]) } },

    "ES.7": { name: "Plate tectonics",
      text: "The student will investigate and understand that plate tectonic theory explains Earth's internal and external geologic processes.", src: "recon", keys: {
      a: K("convection currents in Earth's interior drive plate motion, and Earth's layers differ in composition and properties", "recon", [
        ["Describe Earth's layers (crust, mantle, outer and inner core; lithosphere and asthenosphere) and their properties", "LOTS"],
        ["Explain how convection in the mantle moves tectonic plates", "LOTS"],
        ["Analyze seismic and other evidence for the structure of Earth's interior", "HOTS"]]),
      b: K("features and processes occur within plates and at plate boundaries", "2018", [
        ["Identify plate boundary types and the features and processes at each (ridges, trenches, rifts, volcanic arcs, faults, hot spots)", "LOTS"],
        ["Analyze earthquake, volcano or landform data to infer the type of plate boundary", "HOTS"]]),
      c: K("interaction between tectonic plates forms mountain ranges and ocean basins over time", "recon", [
        ["Describe how plate interactions build mountains (including the Appalachians) and open and close ocean basins", "LOTS"],
        ["Evaluate evidence for plate tectonics (sea-floor spreading, magnetic stripes, fossils, rock ages, continental fit)", "HOTS"]]) } },

    "ES.8": { name: "Fresh water",
      text: "The student will investigate and understand that freshwater resources influence and are influenced by geologic processes and the activities of humans.", src: "2018", keys: {
      a: K("water impacts geologic processes including soil development and karst topography", "2018", [
        ["Describe how soil develops and the layers of a soil profile", "LOTS"],
        ["Explain how karst topography (sinkholes, caves, springs) forms in limestone", "LOTS"],
        ["Analyze how climate, parent rock, slope and time affect soil and karst development", "HOTS"]]),
      b: K("the characteristics of subsurface materials affect groundwater, the water table, and the water supply", "recon", [
        ["Describe the zone of aeration, zone of saturation, water table, aquifers, porosity and permeability", "LOTS"],
        ["Analyze porosity and permeability data to predict groundwater movement and supply", "HOTS"]]),
      c: K("weather and human use affect the location, quality, and supply of fresh water", "2018", [
        ["Identify sources of freshwater pollution and ways to conserve and protect fresh water", "LOTS"],
        ["Evaluate how weather events and human activities affect freshwater quality and supply", "HOTS"]]),
      d: K("stream processes shape Virginia's major watersheds, including the Chesapeake Bay and its tributaries", "2018", [
        ["Identify watershed boundaries and Virginia's major watersheds", "LOTS"],
        ["Analyze how stream erosion and deposition shape a watershed", "HOTS"]]) } },

    "ES.9": { name: "Earth history",
      text: "The student will investigate and understand that the history of Earth and its life can be inferred from rocks and fossils.", src: "2018", keys: {
      a: K("traces and remains of ancient, often extinct, life are preserved by various means in many sedimentary rocks", "2018", [
        ["Describe how fossils form and are preserved", "LOTS"],
        ["Infer past environments and changes from fossil evidence", "HOTS"]]),
      b: K("superposition, cross-cutting relationships, index fossils, and radioactive decay are methods of dating bodies of rock", "2018", [
        ["Describe the principles of relative dating and how radioactive decay dates rock", "LOTS"],
        ["Calculate an age or the amount of parent isotope left using half-life", "LOTS"],
        ["Sequence the events in a rock cross-section using relative dating principles", "HOTS"]]),
      c: K("absolute and relative dating have different applications but can be used together to determine the age of rocks and structures", "2018", [
        ["Explain how relative dating and absolute dating differ", "LOTS"],
        ["Combine relative and absolute dating evidence to determine the age of rocks or events", "HOTS"]]),
      d: K("rocks and fossils from many different geologic periods and epochs are found in Virginia", "2018", [
        ["Describe the geologic time scale (eons, eras, periods, epochs) and major events in Earth's history", "LOTS"],
        ["Relate the rocks and fossils of Virginia's regions to Virginia's geologic history", "HOTS"]]) } },

    "ES.10": { name: "Oceans",
      text: "The student will investigate and understand that oceans are complex, dynamic systems and are subject to long- and short-term variations.", src: "2018", keys: {
      a: K("ocean water has physical and chemical properties that vary and that drive tides, waves, currents, and upwelling", "recon", [
        ["Describe how temperature and salinity affect the density of seawater", "LOTS"],
        ["Explain the causes of tides, waves, currents and upwelling", "LOTS"],
        ["Analyze ocean data such as temperature, salinity and density profiles", "HOTS"]]),
      b: K("ocean circulation transfers energy and interacts with weather and climate", "recon", [
        ["Describe surface currents and deep (density-driven) currents", "LOTS"],
        ["Analyze how ocean circulation moves heat and affects weather and climate", "HOTS"]]),
      c: K("features of the sea floor reflect tectonic and other geologic processes", "recon", [
        ["Identify sea-floor features (continental shelf, slope and rise, abyssal plain, mid-ocean ridge, trench, seamount)", "LOTS"],
        ["Interpret a sea-floor profile or sea-floor ages in terms of plate tectonics", "HOTS"]]),
      d: K("sea level, ice caps, and ocean chemistry change over long and short time spans", "recon", [
        ["Describe causes of changes in sea level, polar ice and ocean chemistry", "LOTS"],
        ["Analyze data on sea level, ice or ocean chemistry to identify trends and causes", "HOTS"]]),
      e: K("human actions, including economic and public policy issues, impact oceans and the coastal zone including the Chesapeake Bay", "2018", [
        ["Describe how human activities affect the oceans and the Chesapeake Bay (runoff, nutrients, dead zones, overfishing, development)", "LOTS"],
        ["Evaluate actions and policies that protect the oceans, the coast and the Chesapeake Bay", "HOTS"]]) } },

    "ES.11": { name: "The atmosphere",
      text: "The student will investigate and understand that the atmosphere is a complex, dynamic system and is subject to long- and short-term variations.", src: "2018", keys: {
      a: K("the composition of the atmosphere is critical to most forms of life", "2018", [
        ["Describe the composition and layers of the atmosphere", "LOTS"],
        ["Analyze data on the atmosphere's composition, temperature and pressure", "HOTS"]]),
      b: K("biologic and geologic interactions over long and short time spans change atmospheric composition", "2018", [
        ["Describe how life and geologic processes (photosynthesis, volcanoes, weathering) changed the atmosphere over time", "LOTS"],
        ["Analyze evidence of past changes in the atmosphere (ice cores, rocks, fossils)", "HOTS"]]),
      c: K("natural events and human actions may stress atmospheric regulation mechanisms", "recon", [
        ["Identify natural events and human actions that change the atmosphere (eruptions, burning fuels, CFCs)", "LOTS"],
        ["Analyze how these stresses affect the greenhouse effect, the ozone layer and air quality", "HOTS"]]),
      d: K("human actions, including economic and policy decisions, affect the atmosphere", "recon", [
        ["Describe actions and policies that reduce air pollution and protect the atmosphere", "LOTS"],
        ["Evaluate the costs and benefits of a decision or policy that affects the atmosphere", "HOTS"]]) } },

    "ES.12": { name: "Weather and climate",
      text: "The student will investigate and understand that Earth's weather and climate are the result of the interaction of the sun's energy with the atmosphere, oceans, and the land.", src: "2018", keys: {
      a: K("weather involves the reflection, absorption, storage, and redistribution of energy over short to medium time spans", "recon", [
        ["Describe how radiation, conduction and convection transfer energy in the atmosphere", "LOTS"],
        ["Analyze how uneven heating of land, water and latitudes drives winds and circulation", "HOTS"]]),
      b: K("weather patterns can be predicted based on changes in current conditions", "recon", [
        ["Interpret weather maps, fronts, air masses, pressure systems and station models", "LOTS"],
        ["Predict the weather from changes in pressure, fronts and other conditions", "HOTS"]]),
      c: K("extreme imbalances in energy distribution in the oceans, atmosphere, and the land may lead to severe weather conditions", "recon", [
        ["Describe how thunderstorms, tornadoes and hurricanes form", "LOTS"],
        ["Analyze the conditions that lead to severe weather", "HOTS"]]),
      d: K("models based on current conditions are used to predict weather phenomena", "recon", [
        ["Describe the tools and models meteorologists use (radar, satellites, weather balloons, computer models)", "LOTS"],
        ["Evaluate a forecast and the limits of a weather model", "HOTS"]]),
      e: K("changes in the atmosphere and the oceans due to natural and human activity affect global climate", "recon", [
        ["Describe the factors that affect climate (latitude, elevation, nearness to water, ocean currents, greenhouse gases)", "LOTS"],
        ["Analyze climate data to identify trends and natural and human causes of climate change", "HOTS"]]) } }
  };

  /* The flat table the teacher page and the validator read: a standard (ES.4), a key idea (ES.4.a) with its skills
     (ES.4.a.1 ...), and SKILL: each skill's key idea, text and LOTS/HOTS level. */
  var STANDARDS = {}, SKILL = {}, ORDER = [];
  Object.keys(STD).forEach(function (code) {
    var s = STD[code];
    STANDARDS[code] = { text: "Standard " + code + ": " + s.text, name: s.name, src: s.src, skills: [] };
    ORDER.push(code);
    Object.keys(s.keys).forEach(function (L) {
      var k = s.keys[L], kc = code + "." + L;
      k.skills.forEach(function (sk, i) { sk.id = kc + "." + (i + 1); SKILL[sk.id] = { code: kc, text: sk.text, level: sk.level }; });
      STANDARDS[kc] = { text: s.name + ": " + k.text.charAt(0).toUpperCase() + k.text.slice(1) + ".", key: k.text, src: k.src, skills: k.skills };
      ORDER.push(kc);
    });
  });
  var api = { STANDARDS: STANDARDS, SKILL: SKILL, ORDER: ORDER };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.SolStandards = api;
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
