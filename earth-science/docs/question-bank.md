# SOL Lab — Earth Science question bank (teacher review copy)

Every lab-notes pack and question in the game, grouped by unit and difficulty level, with the answer key and the 2018 Virginia Earth Science SOL skill each item is tagged with (ES.4.a.2 = standard ES.4, key idea a, skill 2) and whether that skill is **LOTS** (lower-order thinking: identify, describe, explain, calculate) or **HOTS** (higher-order thinking: analyze, compare, infer, predict, evaluate). Generated from `js/content*.js` by `node tools/question-bank.js`; edit the pack files, not this page.

**Totals:** 89 packs · 506 questions · level 1: 165 · level 2: 191 · level 3: 150 · LOTS: 265 · HOTS: 241

## How the game chooses questions for a student

- Every pack carries a **level** tag: 1 (one-step recall or a direct read of the table), 2 (a typical EOC item: apply a concept or read a trend), 3 (multi-step reasoning, mechanism, prediction from a model, or a Select TWO).
- Each student's Chromebook keeps an **ability** score per unit that starts at 1.6 (between levels 1 and 2). A question answered with no wrong letter grabbed nudges it up by 0.12; grabbing a wrong letter drops it by 0.18. The picker weights every candidate by how close its level is to the ability score, so an **average high-school student** (ability settling around 2) draws mostly level 2 packs, with level 1 and 3 packs mixed in at lower weight.
- On All-skills levels the picker also leans toward the standards the student has missed most, and it prefers lab notes near the level's target length (short notes early, longer notes later).
- The HUD shows the current tag as `SOL · ES.9.b.3 · HOTS · Level 2`.

**The list under "Level 2" in each unit is therefore the core of what an average student sees; level 1 is the floor for a struggling student and level 3 the stretch for a strong one.**

## Contents

- Scientific Investigation (ES.1): 11 packs, 63 questions
- Universe & Solar System (ES.2 · ES.3): 11 packs, 63 questions
- Minerals & Rocks (ES.4 · ES.5): 11 packs, 59 questions
- Resources & Fresh Water (ES.6 · ES.8): 11 packs, 63 questions
- Plate Tectonics (ES.7): 11 packs, 63 questions
- Earth History (ES.9): 11 packs, 63 questions
- Oceans (ES.10): 11 packs, 63 questions
- Atmosphere, Weather & Climate (ES.11 · ES.12): 12 packs, 69 questions


---

# Scientific Investigation (ES.1)

Standards in this unit:

- ES.1.a — asking questions and defining problems
- ES.1.b — planning and carrying out investigations
- ES.1.c — interpreting, analyzing, and evaluating data
- ES.1.d — constructing and critiquing conclusions and explanations
- ES.1.e — developing and using models
- ES.1.f — obtaining, evaluating, and communicating information


## Level 1 — foundation

### Sand and water under a lamp  
`inv-sand-water-lamp` · Investigation · ES.1 · level 1 · 86 words · 5 questions

> (1) A student asked whether dry sand or water warms faster when both receive the same energy. (2) She filled two identical cups, one with 200 g of dry sand and one with 200 g of water, and placed a thermometer 1 cm below each surface. (3) Both cups sat 30 cm from the same heat lamp for 20 minutes, and she recorded the temperatures every 5 minutes.
> 
> | Time (min) | Sand (°C) | Water (°C) |
> |---|---|---|
> | 0 | 21 | 21 |
> | 5 | 26 | 22 |
> | 10 | 31 | 23 |
> | 15 | 35 | 24 |
> | 20 | 38 | 25 |

1. **[ES.1.a.1 · LOTS]** Which question was this investigation designed to answer?  
   _Skill: Identify a testable question or problem that arises from observations of Earth phenomena_
   - A. Does a heat lamp give off more light than the sun?
   - B. Does dry sand or water warm faster under one lamp?
   - C. How deep does heat travel into a cup of sand?
   - D. Does water evaporate faster than damp sand dries?
   - **Key: B**

2. **[ES.1.b.1 · LOTS]** Which of these did the student keep the same for both cups?  
   _Skill: Identify the independent and dependent variables, constants, control and repeated trials of an investigation_
   - A. the mass of material in each cup
   - B. the type of material in each cup
   - C. the temperature reading in each cup
   - D. the amount each cup warmed in 20 minutes
   - **Key: A**

3. **[ES.1.c.1 · LOTS]** According to the table, what was the temperature of the sand at 10 minutes?  
   _Skill: Read and interpret data in tables, graphs and maps_
   - A. 23 °C
   - B. 26 °C
   - C. 31 °C
   - D. 35 °C
   - **Key: C**

4. **[ES.1.c.3 · HOTS]** Which statement best describes a pattern in the data?  
   _Skill: Analyze data to identify trends, patterns, outliers and relationships_
   - A. The water warmed faster than the sand after 10 minutes.
   - B. Both cups warmed by the same amount in the first 5 minutes.
   - C. The sand's temperature rose by the same amount every 5 minutes.
   - D. The sand warmed more than the water in every 5-minute interval.
   - **Key: D**

5. **[ES.1.d.2 · HOTS]** A classmate says the data show that water does not absorb energy from the lamp. Why is this claim not supported?  
   _Skill: Evaluate whether a conclusion is supported by the evidence and identify sources of error_
   - A. The two cups started at different temperatures.
   - B. The water's temperature rose 4 °C during the test.
   - C. The cups sat at different distances from the lamp.
   - D. The water was under the lamp for less time than the sand.
   - **Key: B**

### Pore space in three sediments  
`inv-sediment-porosity` · Investigation · ES.1 · level 1 · 79 words · 5 questions

> (1) A class measured the **porosity**, the percent of a sediment's volume that is open pore space, of three dry sediments. (2) Each group filled a beaker to the 200 mL mark with one sediment. (3) They slowly poured in water from a graduated cylinder until the water just reached the top of the sediment. (4) The volume of water added equals the volume of the pore spaces.
> 
> | Sediment | Water added (mL) |
> |---|---|
> | Gravel | 64 |
> | Coarse sand | 70 |
> | Sand and silt mix | 48 |

1. **[ES.1.b.2 · LOTS]** Which tool and metric unit are best for measuring the water added to each beaker?  
   _Skill: Select appropriate tools, metric units and safe procedures to collect data_
   - A. a graduated cylinder, in milliliters
   - B. a metric ruler, read in centimeters
   - C. a thermometer, read in degrees Celsius
   - D. a spring scale, read in newtons
   - **Key: A**

2. **[ES.1.c.2 · LOTS]** What was the porosity of the coarse sand?  
   _Skill: Calculate means, rates and gradients from data_
   - A. 14%
   - B. 30%
   - C. 35%
   - D. 70%
   - **Key: C**

3. **[ES.1.c.1 · LOTS]** According to the table, which sediment had the least pore space?  
   _Skill: Read and interpret data in tables, graphs and maps_
   - A. the gravel
   - B. the sand and silt mix
   - C. the coarse sand
   - D. all three had equal pore space
   - **Key: B**

4. **[ES.1.a.2 · HOTS]** The class next plans to mix different amounts of silt into coarse sand. Which is the best hypothesis for that test?  
   _Skill: Formulate or choose the best hypothesis that predicts how a dependent variable responds to an independent variable_
   - A. Coarse sand is the most common sediment in Virginia streams.
   - B. If water is poured in faster, then the sand will hold more silt.
   - C. If silt is added, then the beaker will still be filled to 200 mL.
   - D. If more silt is added, then the porosity will decrease.
   - **Key: D**

5. **[ES.1.d.2 · HOTS]** One group reported a porosity of 45% for the gravel, far above the class result. Which error most likely caused this?  
   _Skill: Evaluate whether a conclusion is supported by the evidence and identify sources of error_
   - A. They kept pouring after water rose above the gravel.
   - B. They stopped pouring before water reached the top.
   - C. They used gravel that was dry when they began.
   - D. They poured the water slowly from the cylinder.
   - **Key: A**

### Three points on a Virginia grid  
`inv-latlong-virginia` · Investigation · ES.1 · level 1 · 69 words · 5 questions

> (1) Lines of **latitude** run east–west and measure degrees north or south of the equator; lines of **longitude** run north–south. (2) On a Virginia map, a student marked three points. (3) Point P, near the Chesapeake Bay's mouth, is at 37° N, 76° W. (4) Point Q, near Roanoke, is at 37° N, 80° W. (5) Point R, near Charlottesville, is at 38° N, 78° W. (6) One degree of latitude spans about 111 km.

1. **[ES.1.e.1 · LOTS]** Which two points lie on the same line of latitude?  
   _Skill: Use models such as topographic maps, profiles, diagrams and latitude and longitude to describe Earth features_
   - A. P and R
   - B. Q and R
   - C. P and Q
   - D. all three points
   - **Key: C**

2. **[ES.1.e.1 · LOTS]** Compared with Point Q, Point P is located —  
   _Skill: Use models such as topographic maps, profiles, diagrams and latitude and longitude to describe Earth features_
   - A. farther east
   - B. farther west
   - C. farther north
   - D. farther south
   - **Key: A**

3. **[ES.1.c.2 · LOTS]** About how far north of the 37° N line is Point R?  
   _Skill: Calculate means, rates and gradients from data_
   - A. 37 km
   - B. 111 km
   - C. 222 km
   - D. 380 km
   - **Key: B**

4. **[ES.1.e.2 · HOTS]** A town is at 39° N, 78° W. Based on the grid, the town is about —  
   _Skill: Use a model to predict an outcome or explain a system_
   - A. 111 km due south of Point R
   - B. 222 km due north of Point R
   - C. 111 km due east of Point P
   - D. 111 km due north of Point R
   - **Key: D**

5. **[ES.1.e.3 · HOTS]** Which is a limitation of describing Point Q by its latitude and longitude alone?  
   _Skill: Evaluate the merits and limitations of a model_
   - A. The numbers do not show which hemispheres Q is in.
   - B. The numbers do not show Q's elevation or landforms.
   - C. The numbers cannot be used north of the equator.
   - D. The numbers change each time a new map is printed.
   - **Key: B**

### Cooling rate and crystal size  
`inv-salol-crystals` · Investigation · ES.1 · level 1 · 104 words · 6 questions

> (1) A class asked how the rate of cooling affects the size of crystals that form from a melted substance. (2) The teacher melted **salol**, a solid that melts at about 43 °C, in a warm-water bath. (3) Wearing goggles, students placed one drop of melted salol on a glass slide chilled in ice water and one drop on a slide warmed to 40 °C. (4) They watched each drop harden through a hand lens. (5) The drop on the cold slide hardened in about 30 seconds into many tiny crystals. (6) The drop on the warm slide took about 6 minutes and formed a few large, needle-shaped crystals.

1. **[ES.1.a.1 · LOTS]** Which new question could the class test with the same materials?  
   _Skill: Identify a testable question or problem that arises from observations of Earth phenomena_
   - A. Why do some minerals have a glassy luster?
   - B. Would a slide at 20 °C give middle-sized crystals?
   - C. How long ago did the granite in Virginia cool?
   - D. Which crystal shape do most students like best?
   - **Key: B**

2. **[ES.1.b.1 · LOTS]** The dependent variable in this investigation is —  
   _Skill: Identify the independent and dependent variables, constants, control and repeated trials of an investigation_
   - A. the temperature of each glass slide
   - B. the kind of substance that was melted
   - C. the size of each drop placed on a slide
   - D. the size of the crystals that formed
   - **Key: D**

3. **[ES.1.c.1 · LOTS]** According to sentences 5 and 6, the drop that formed large crystals —  
   _Skill: Read and interpret data in tables, graphs and maps_
   - A. hardened in about 6 minutes on the warm slide
   - B. hardened in about 30 seconds on the cold slide
   - C. hardened in about 6 minutes on the cold slide
   - D. hardened in about 30 seconds on the warm slide
   - **Key: A**

4. **[ES.1.d.1 · LOTS]** Which statement best explains why the drop on the warm slide formed larger crystals?  
   _Skill: Explain a phenomenon using evidence from an investigation_
   - A. The warm slide added extra salol to the drop.
   - B. Fast cooling gave its crystals more time to grow.
   - C. Slow cooling gave its crystals more time to grow.
   - D. The hand lens made only those crystals look larger.
   - **Key: C**

5. **[ES.1.e.2 · HOTS]** If the salol drops are a model of cooling magma, an igneous rock with large crystals most likely formed —  
   _Skill: Use a model to predict an outcome or explain a system_
   - A. slowly, deep underground
   - B. quickly, as lava at the surface
   - C. quickly, as ash blown into the air
   - D. in seconds, as lava poured into the sea
   - **Key: A**

6. **[ES.1.d.2 · HOTS]** Which is the main weakness of the class's evidence?  
   _Skill: Evaluate whether a conclusion is supported by the evidence and identify sources of error_
   - A. The students wore goggles while watching the drops.
   - B. Both drops came from the same batch of melted salol.
   - C. The students used a hand lens to view both drops.
   - D. Each slide temperature was tested with only one drop.
   - **Key: D**


## Level 2 — average student (core)

### Slope in a stream table  
`inv-stream-table-slope` · Investigation · ES.1 · level 2 · 106 words · 6 questions

> (1) Students used a **stream table**, a long tray of moist sand with a hose at the upper end that releases water at 1 L per minute. (2) They raised the upper end on blocks to set slopes of 5°, 10° and 15°. (3) For each run, water flowed for 3 minutes, and the sand washed into a bucket at the lower end was dried and weighed. (4) Each slope was run three times, and the sand was smoothed back into place before every run. (5) In every run a single channel formed, and it was deepest at 15°.
> 
> | Slope | Average sand eroded (g) |
> |---|---|
> | 5° | 120 |
> | 10° | 260 |
> | 15° | 410 |

1. **[ES.1.b.1 · LOTS]** In this investigation, the independent variable is —  
   _Skill: Identify the independent and dependent variables, constants, control and repeated trials of an investigation_
   - A. the mass of sand washed into the bucket
   - B. the rate at which the hose releases water
   - C. the length of time the water flowed
   - D. the slope of the stream table
   - **Key: D**

2. **[ES.1.a.2 · HOTS]** Which hypothesis was this investigation best designed to test?  
   _Skill: Formulate or choose the best hypothesis that predicts how a dependent variable responds to an independent variable_
   - A. If the slope increases, then more sand will be eroded.
   - B. If more water flows, then the channel will be wider.
   - C. If the sand is dry, then less sand will be eroded.
   - D. If the slope increases, then the water will slow down.
   - **Key: A**

3. **[ES.1.c.1 · LOTS]** According to the table, the average mass of sand eroded at a 10° slope was —  
   _Skill: Read and interpret data in tables, graphs and maps_
   - A. 120 g
   - B. 150 g
   - C. 260 g
   - D. 410 g
   - **Key: C**

4. **[ES.1.c.3 · HOTS]** Which relationship is shown by the data?  
   _Skill: Analyze data to identify trends, patterns, outliers and relationships_
   - A. As slope increased, less sand was eroded.
   - B. As slope increased, more sand was eroded.
   - C. Slope had no clear effect on the sand eroded.
   - D. Eroded sand stayed the same above a 10° slope.
   - **Key: B**

5. **[ES.1.b.3 · HOTS]** Which change would most improve what the class can conclude about slope and erosion?  
   _Skill: Evaluate or improve the design of an investigation_
   - A. adding 20° and 25° slopes, with three runs of each
   - B. changing the water flow rate and slope in the same runs
   - C. running each slope once instead of three times
   - D. using a different type of sand for each slope
   - **Key: A**

6. **[ES.1.e.3 · HOTS]** Which is a limitation of the stream table as a model of a real river?  
   _Skill: Evaluate the merits and limitations of a model_
   - A. It shows that faster water carries more sediment.
   - B. It lets students control the slope and flow rate.
   - C. It runs for minutes; rivers erode for years.
   - D. It uses flowing water to move sediment downhill.
   - **Key: C**

### Statements about a cavern  
`inv-cavern-sources` · Investigation · ES.1 · level 2 · 108 words · 6 questions

> (1) While writing a report on a limestone cavern, a student collected four statements. (2) **W:** "If water drips onto a stalactite faster, then it will grow longer each year." (3) **X:** "The theory of plate tectonics explains how the rock layers around the cavern were folded." (4) **Y:** "The law of superposition states that in undisturbed rock layers, the oldest layer is at the bottom." (5) **Z:** A souvenir flyer with no author says, "Stalactites here grow 10 cm every year." (6) She also found a cave scientist's report, checked by other scientists before publication, that measured stalactite growth in the same cavern for 12 years and found about 0.2 mm per year.

1. **[ES.1.f.1 · LOTS]** Statement W is best described as —  
   _Skill: Explain the difference between a scientific hypothesis, theory and law_
   - A. a law, because it describes what always happens in caves
   - B. a theory, because it explains a wide range of observations
   - C. a hypothesis, because it makes a testable prediction
   - D. an observation, because it was written down inside a cave
   - **Key: C**

2. **[ES.1.f.1 · LOTS]** Which statement correctly compares a scientific law, such as Y, with a scientific theory, such as X?  
   _Skill: Explain the difference between a scientific hypothesis, theory and law_
   - A. A law describes what happens; a theory explains why.
   - B. A theory becomes a law once it has been proven true.
   - C. A law is an idea that scientists have not yet tested.
   - D. A theory has less evidence behind it than a hypothesis.
   - **Key: A**

3. **[ES.1.f.2 · HOTS]** Which source is more reliable for the stalactite growth rate, and why?  
   _Skill: Evaluate the reliability of a source, a claim or a set of evidence_
   - A. the flyer, because it was printed at the cavern itself
   - B. the report, because other scientists checked its methods
   - C. the flyer, because its number is larger and easier to see
   - D. neither, because growth in caves cannot be measured
   - **Key: B**

4. **[ES.1.f.2 · HOTS]** Which evidence would best help the student check the claim in statement Z?  
   _Skill: Evaluate the reliability of a source, a claim or a set of evidence_
   - A. a photograph of the largest stalactite in the cavern
   - B. the number of people who tour the cavern each year
   - C. a second flyer printed by a different gift shop
   - D. measurements of the same stalactites taken years apart
   - **Key: D**

5. **[ES.1.d.2 · HOTS]** Using the report's rate, the student concludes that a 20 cm stalactite is about 1,000 years old. Which is the best evaluation of this conclusion?  
   _Skill: Evaluate whether a conclusion is supported by the evidence and identify sources of error_
   - A. It is wrong, because 200 mm at 0.2 mm per year is only 100 years.
   - B. It is certain, because a measured growth rate is a scientific law.
   - C. It is reasonable, but it is an estimate, since rates can change.
   - D. It is wrong, because stalactites in this cavern grow 10 cm a year.
   - **Key: C**

6. **[ES.1.a.1 · LOTS]** Which question about the cavern could be answered by a scientific investigation?  
   _Skill: Identify a testable question or problem that arises from observations of Earth phenomena_
   - A. Is this cavern the most beautiful one in the country?
   - B. Does the drip rate change how fast a stalactite grows?
   - C. Should visitors be allowed to touch the formations?
   - D. Which formation in the cavern is the most interesting?
   - **Key: B**

### Contours on a Blue Ridge hill  
`inv-topo-laurel-knob` · Investigation · ES.1 · level 2 · 138 words · 6 questions

> (1) A student studied a practice topographic map of a Blue Ridge hill in Virginia called Laurel Knob. (2) The map's **contour interval** is 20 m. (3) The lowest contour line, 600 m, circles the base of the hill, and the highest closed contour is 780 m; an X marks the summit at 787 m. (4) On the east side of the hill, the contour lines are about 1 mm apart, while on the west side they are about 5 mm apart. (5) The map scale is 1 cm = 250 m. (6) A trail on the west side climbs from the 600 m line to the 780 m line over a map distance of 6 cm. (7) On the north side, a small stream crosses several contour lines, and where it crosses, each line bends into a V that points uphill, toward the summit.

1. **[ES.1.e.1 · LOTS]** Which side of Laurel Knob is steepest?  
   _Skill: Use models such as topographic maps, profiles, diagrams and latitude and longitude to describe Earth features_
   - A. the east side, where contour lines are closest together
   - B. the west side, where contour lines are farthest apart
   - C. the north side, where the stream crosses the contours
   - D. the south side, because it faces away from the stream
   - **Key: A**

2. **[ES.1.c.2 · LOTS]** What is the average gradient of the trail described in sentence 6?  
   _Skill: Calculate means, rates and gradients from data_
   - A. 30 m/km
   - B. 120 m/km
   - C. 180 m/km
   - D. 1,500 m/km
   - **Key: B**

3. **[ES.1.e.2 · HOTS]** A profile drawn from west to east across the summit would most likely show —  
   _Skill: Use a model to predict an outcome or explain a system_
   - A. a steep climb on the west and a gentle drop on the east
   - B. the same steepness on both sides of the summit
   - C. two summits separated by a narrow valley
   - D. a gentle climb on the west and a steep drop on the east
   - **Key: D**

4. **[ES.1.e.3 · HOTS]** Which is a limitation of this map as a model of Laurel Knob?  
   _Skill: Evaluate the merits and limitations of a model_
   - A. It cannot show which side of the hill is steeper.
   - B. It cannot show the elevation of the summit.
   - C. It may miss rises or dips of less than 20 m.
   - D. It cannot show which way the stream flows.
   - **Key: C**

5. **[ES.1.c.1 · LOTS]** Which elevation could belong to a point inside the 780 m closed contour?  
   _Skill: Read and interpret data in tables, graphs and maps_
   - A. 765 m
   - B. 775 m
   - C. 785 m
   - D. 805 m
   - **Key: C**

6. **[ES.1.d.1 · LOTS]** Which statement best explains why the contour lines bend into a V that points uphill where they cross the stream?  
   _Skill: Explain a phenomenon using evidence from an investigation_
   - A. Streams flow up toward the summit of a hill.
   - B. The stream has cut a valley into the slope.
   - C. The contour interval is larger near streams.
   - D. Flowing water builds up the land along its banks.
   - **Key: B**

### A rooftop weather station  
`inv-rooftop-weather` · Investigation · ES.1 · level 2 · 158 words · 6 questions

> (1) Students at a high school run a weather station on the school roof. (2) Every 6 hours on a Monday and Tuesday in March, they recorded the temperature, the air pressure and the direction the wind came from. (3) A band of heavy showers and gusty wind passed over the school between 6 p.m. Monday and midnight. (4) Afterward, the sky cleared and the air felt much drier. (5) On Tuesday morning, a student found an unsigned social-media post that said, "Our town will get 30 cm of snow tonight!" (6) The National Weather Service forecast for Tuesday night, based on data from many stations, satellites and computer models, called for clear skies and a low of −1 °C. (7) The class compared both claims with their own readings.
> 
> | Time | Temp. (°C) | Pressure (mb) | Wind from |
> |---|---|---|---|
> | Mon 6 a.m. | 12 | 1012 | S |
> | Mon noon | 17 | 1006 | SW |
> | Mon 6 p.m. | 15 | 1001 | SW |
> | Tue midnight | 6 | 1008 | NW |
> | Tue 6 a.m. | 2 | 1016 | NW |

1. **[ES.1.b.2 · LOTS]** To measure how much rain fell from the showers in sentence 3, the students should use —  
   _Skill: Select appropriate tools, metric units and safe procedures to collect data_
   - A. a barometer, read in millibars
   - B. an anemometer, read in kilometers per hour
   - C. a rain gauge, read in millimeters
   - D. a thermometer, read in degrees Celsius
   - **Key: C**

2. **[ES.1.c.1 · LOTS]** According to the table, the lowest air pressure was recorded at —  
   _Skill: Read and interpret data in tables, graphs and maps_
   - A. noon on Monday
   - B. 6 p.m. on Monday
   - C. midnight on Tuesday
   - D. 6 a.m. on Tuesday
   - **Key: B**

3. **[ES.1.c.2 · LOTS]** What is the mean of the five temperature readings in the table?  
   _Skill: Calculate means, rates and gradients from data_
   - A. 9.5 °C
   - B. 10.4 °C
   - C. 13.0 °C
   - D. 52.0 °C
   - **Key: B**

4. **[ES.1.c.3 · HOTS]** Which change in the data from 6 p.m. Monday to midnight best shows that a cold front passed?  
   _Skill: Analyze data to identify trends, patterns, outliers and relationships_
   - A. Temperature rose, pressure fell, and the wind stayed southwest.
   - B. Temperature and pressure both fell, and the wind turned south.
   - C. Temperature held steady, and pressure kept falling slowly.
   - D. Temperature fell, pressure rose, and the wind turned northwest.
   - **Key: D**

5. **[ES.1.d.2 · HOTS]** A student concludes, "Air pressure always rises when the temperature falls." Which statement best evaluates this conclusion?  
   _Skill: Evaluate whether a conclusion is supported by the evidence and identify sources of error_
   - A. It is supported, because every reading pair shows pressure rising as temperature drops.
   - B. It is supported, because from 6 p.m. to midnight temperature fell and pressure rose.
   - C. It is not supported, because from noon to 6 p.m. temperature and pressure both fell.
   - D. It is not supported, because the pressure stayed the same for the whole two days.
   - **Key: C**

6. **[ES.1.f.2 · HOTS]** Which is the best reason to rely on the forecast in sentence 6 rather than the post in sentence 5?  
   _Skill: Evaluate the reliability of a source, a claim or a set of evidence_
   - A. It draws on many data sources, and rising pressure points to clearing.
   - B. The forecast agrees with what most of the students hoped would happen.
   - C. The post is short, and short messages are almost always found wrong.
   - D. The post was read in the morning, before any of the snow could fall.
   - **Key: A**


## Level 3 — stretch

### Salt and the rate of evaporation  
`inv-salt-evaporation` · Investigation · ES.1 · level 3 · 161 words · 6 questions

> (1) Ocean water is salty while most lakes and rivers are fresh, and a student wondered whether dissolved salt changes how fast water evaporates. (2) She filled three identical shallow pans with 500 mL of liquid each: Pan 1 held fresh water, Pan 2 held water with 35 g of salt per liter (about as salty as the ocean), and Pan 3 held water with 70 g of salt per liter. (3) The pans sat side by side on the same sunny windowsill for four days. (4) Each evening she weighed every pan on an electronic balance and recorded the mass of water lost that day. (5) The table shows her results. (6) She did not record the weather. (7) From these data she concluded, "Adding salt slows evaporation."
> 
> | Day | Pan 1, 0 g/L (g lost) | Pan 2, 35 g/L (g lost) | Pan 3, 70 g/L (g lost) |
> |---|---|---|---|
> | 1 | 32 | 30 | 28 |
> | 2 | 33 | 31 | 29 |
> | 3 | 18 | 17 | 16 |
> | 4 | 37 | 36 | 34 |
> | Total | 120 | 114 | 107 |

1. **[ES.1.a.2 · HOTS]** Which hypothesis was the student testing?  
   _Skill: Formulate or choose the best hypothesis that predicts how a dependent variable responds to an independent variable_
   - A. If the pans sit in sunlight, then the salt will evaporate too.
   - B. If more water evaporates, then the salt concentration will fall.
   - C. If water holds more salt, then less of it will evaporate.
   - D. If a day is cloudy, then the pans will gain mass from the air.
   - **Key: C**

2. **[ES.1.b.1 · LOTS]** Which of these was a constant in the investigation?  
   _Skill: Identify the independent and dependent variables, constants, control and repeated trials of an investigation_
   - A. the amount of salt in each liter of water
   - B. the mass of water each pan lost each day
   - C. the total mass each pan lost in four days
   - D. the starting volume of liquid in each pan
   - **Key: D**

3. **[ES.1.c.2 · LOTS]** What was Pan 1's average rate of evaporation over the four days?  
   _Skill: Calculate means, rates and gradients from data_
   - A. 30 g per day
   - B. 33 g per day
   - C. 40 g per day
   - D. 120 g per day
   - **Key: A**

4. **[ES.1.c.3 · HOTS]** On Day 3, all three pans lost much less mass than on the other days. The most likely explanation is —  
   _Skill: Analyze data to identify trends, patterns, outliers and relationships_
   - A. a mistake in mixing the salt into Pan 3 only
   - B. a cooler, cloudier day that slowed every pan
   - C. the salt in Pan 1 slowing its evaporation
   - D. the pans running dry before the day ended
   - **Key: B**

5. **[ES.1.b.3 · HOTS]** Which change would most improve the reliability of her results?  
   _Skill: Evaluate or improve the design of an investigation_
   - A. using three pans at each salt level and averaging them
   - B. moving Pan 3 to a shadier windowsill than the others
   - C. using a different volume of liquid in each of the pans
   - D. weighing the pans only on the first and the last day
   - **Key: A**

6. **[ES.1.d.2 · HOTS]** Select TWO statements that correctly evaluate the conclusion in sentence 7.  
   _Skill: Evaluate whether a conclusion is supported by the evidence and identify sources of error_
   - A. It is not supported, because Pan 2 lost more mass than Pan 1.
   - B. It is supported by a trend: total mass lost fell as salt rose.
   - C. It is now proven, so no further trials are needed.
   - D. Its support is limited, because each salt level had only one pan.
   - **Key: B and D**

### Tracing dye through Valley karst  
`inv-karst-dye-trace` · Investigation · ES.1 · level 3 · 189 words · 6 questions

> (1) Much of Virginia's Shenandoah Valley sits on limestone, a rock that slowly dissolves in slightly acidic groundwater. (2) Over thousands of years this forms **karst**: sinkholes, caves and springs connected by underground passages. (3) After storms, the water in a farm's well turns cloudy, so a county water team asked where water that enters a large sinkhole on the farm travels. (4) During a rain on April 2, the team poured a harmless fluorescent dye into the sinkhole. (5) They placed charcoal packets, which absorb the dye, in the farm well and in three springs, and checked them every day for the next 14 days. (6) The table shows the results. (7) Springs A and C lie northeast of the sinkhole, the same direction the limestone layers run; Spring B lies to the south. (8) The team's model shows sinkhole water moving through connected passages that run northeast along the limestone layers. (9) A neighbor's website, which cites no measurements, says sinkhole water "always flows straight to the nearest spring."
> 
> | Site | Distance from sinkhole (km) | Days until dye found |
> |---|---|---|
> | Farm well | 0.8 | 1 |
> | Spring A | 3.0 | 2 |
> | Spring B | 1.2 | not found |
> | Spring C | 6.0 | 5 |

1. **[ES.1.a.1 · LOTS]** Which question was the dye trace designed to answer?  
   _Skill: Identify a testable question or problem that arises from observations of Earth phenomena_
   - A. Where does water that enters the sinkhole travel?
   - B. How old is the limestone beneath the farm?
   - C. How much rain falls on the valley in April?
   - D. Why does fluorescent dye glow in ultraviolet light?
   - **Key: A**

2. **[ES.1.c.2 · LOTS]** What was the average rate at which the dye traveled from the sinkhole to Spring C?  
   _Skill: Calculate means, rates and gradients from data_
   - A. 0.8 km per day
   - B. 1.2 km per day
   - C. 3.0 km per day
   - D. 30 km per day
   - **Key: B**

3. **[ES.1.d.1 · LOTS]** Which statement best explains why the farm's well turns cloudy after storms?  
   _Skill: Explain a phenomenon using evidence from an investigation_
   - A. The well draws all of its water from Spring B.
   - B. Limestone filters storm water slowly, as fine sand does.
   - C. Muddy runoff reaches the well fast through open passages.
   - D. Dye from the April test is what clouded the well water.
   - **Key: C**

4. **[ES.1.d.2 · HOTS]** The team concludes that the sinkhole is not connected to Spring B. Which is a possible weakness in this conclusion?  
   _Skill: Evaluate whether a conclusion is supported by the evidence and identify sources of error_
   - A. Spring C is farther from the sinkhole than Spring A.
   - B. The charcoal packets absorbed dye from the water.
   - C. The dye reached the well before it reached any spring.
   - D. Dye might have reached Spring B after the 14 days ended.
   - **Key: D**

5. **[ES.1.e.2 · HOTS]** Based on the team's model, if fertilizer were washed into the sinkhole, which sites would most likely be polluted?  
   _Skill: Use a model to predict an outcome or explain a system_
   - A. only Spring B, because it is the nearest spring
   - B. the farm well and Springs A and C, within days
   - C. no sites, because limestone filters out fertilizer
   - D. Spring B first, and then the farm well a week later
   - **Key: B**

6. **[ES.1.f.2 · HOTS]** Which is the best evaluation of the website's claim in sentence 9?  
   _Skill: Evaluate the reliability of a source, a claim or a set of evidence_
   - A. It is not reliable: the nearest spring, B, showed no dye in 14 days.
   - B. It is reliable, because water always flows straight downhill.
   - C. It is reliable, because the neighbor lives near the sinkhole.
   - D. It cannot be judged, because dye traces are not evidence.
   - **Key: A**

### Modeling a living shoreline  
`inv-living-shoreline` · Investigation · ES.1 · level 3 · 213 words · 6 questions

> (1) Many shorelines along the Chesapeake Bay are losing land as waves wear away their sandy banks. (2) Some property owners now build a **living shoreline**: marsh grass planted along the bank, with a low line of rocks, called a sill, just offshore. (3) Two students asked whether a living shoreline reduces the amount of sand that waves remove from a bank. (4) In a wave tank 1.5 m long, they built two banks, each from 4.0 kg of damp sand sloped at the same angle. (5) Bank 1 was left bare; Bank 2 had 60 plastic grass stems pushed into it and a row of pebbles 10 cm in front of it. (6) A paddle sent 20 waves per minute, all the same height, against each bank for 10 minutes. (7) The students then dried and weighed the sand that had washed off each bank. (8) They rebuilt the banks and repeated the test for three trials in all. (9) Afterward, one student wrote, "Our results prove that living shorelines will stop all erosion in the Bay." (10) The other pointed out that real marsh grass has roots, and real Bay storms send waves of many different heights.
> 
> | Trial | Bank 1 sand lost (g) | Bank 2 sand lost (g) |
> |---|---|---|
> | 1 | 640 | 210 |
> | 2 | 610 | 190 |
> | 3 | 670 | 230 |
> | Average | 640 | 210 |

1. **[ES.1.b.1 · LOTS]** Which part of the setup served as the control?  
   _Skill: Identify the independent and dependent variables, constants, control and repeated trials of an investigation_
   - A. Bank 2, the bank with stems and pebbles
   - B. Bank 1, the bank that was left bare
   - C. the paddle that made the same waves
   - D. the 4.0 kg of sand used in each bank
   - **Key: B**

2. **[ES.1.a.2 · HOTS]** Which hypothesis best fits the students' question in sentence 3?  
   _Skill: Formulate or choose the best hypothesis that predicts how a dependent variable responds to an independent variable_
   - A. If waves are taller, then more sand will wash off a bank.
   - B. If a bank loses more sand, then the waves will grow larger.
   - C. If sand is damp, then marsh grass will grow faster in it.
   - D. If a bank has grass and a sill, then it will lose less sand.
   - **Key: D**

3. **[ES.1.c.3 · HOTS]** Which statement best compares the results for the two banks?  
   _Skill: Analyze data to identify trends, patterns, outliers and relationships_
   - A. Bank 2 lost about half as much sand as Bank 1.
   - B. Bank 2 lost about 430 g more sand than Bank 1.
   - C. Bank 2 lost about one-third as much sand as Bank 1.
   - D. Both banks lost about the same mass in Trial 2.
   - **Key: C**

4. **[ES.1.b.3 · HOTS]** Which change to the investigation would best address the point about storms in sentence 10?  
   _Skill: Evaluate or improve the design of an investigation_
   - A. repeating the tests with several wave heights
   - B. using more sand in Bank 1 than in Bank 2 each trial
   - C. running each setup once instead of three times
   - D. running more trials on Bank 2 than on Bank 1
   - **Key: A**

5. **[ES.1.e.3 · HOTS]** Select TWO limitations of the wave tank as a model of a real Chesapeake Bay shoreline.  
   _Skill: Evaluate the merits and limitations of a model_
   - A. The plastic stems have no roots to hold the sand.
   - B. Each bank started with the same mass of sand.
   - C. Every wave in the tank was the same height.
   - D. Each setup was tested in three separate trials.
   - **Key: A and C**

6. **[ES.1.f.1 · LOTS]** Which statement about the students' work uses scientific terms correctly?  
   _Skill: Explain the difference between a scientific hypothesis, theory and law_
   - A. Three matching trials turned their hypothesis into a law.
   - B. Their hypothesis was proven true for every Bay shoreline.
   - C. Their prediction became a theory once averages were found.
   - D. Their hypothesis was supported by the data they collected.
   - **Key: D**


---

# Universe & Solar System (ES.2 · ES.3)

Standards in this unit:

- ES.2.a — the big bang theory and the origin of the universe
- ES.2.b — stars, star systems, and galaxies change over long periods of time
- ES.2.c — characteristics of the sun, planets, moons, comets, meteors, asteroids, and dwarf planets are determined by their materials
- ES.2.d — evidence from space exploration has increased our understanding of the universe
- ES.3.a — Earth supports life because of its relative proximity to the sun and other factors
- ES.3.b — the dynamics of the sun-Earth-moon system cause seasons, tides, and eclipses


## Level 1 — foundation

### A month of moon sketches  
`space-moon-log-roanoke` · Universe & Solar System · ES.2 · ES.3 · level 1 · 73 words · 5 questions

> (1) From her backyard in Roanoke, a student observed the moon once a week for a month and recorded its phase. (2) The moon could not be seen at all on October 2. (3) On the night of October 17, the full moon slowly darkened to a dull coppery red for about an hour before brightening again.
> 
> | Date | Moon phase |
> |---|---|
> | October 2 | new moon |
> | October 9 | first quarter |
> | October 17 | full moon |
> | October 24 | third quarter |

1. **[ES.3.b.2 · LOTS]** The moon's appearance changed from week to week because —  
   _Skill: Explain how the positions of the sun, Earth and moon cause moon phases, tides and eclipses_
   - A. Earth's shadow covered a larger or smaller part of the moon each week
   - B. the moon turned a different face toward Earth each week
   - C. we saw different amounts of the moon's sunlit half as it orbited
   - D. clouds of gas on the moon hid part of its surface each week
   - **Key: C**

2. **[ES.3.b.2 · LOTS]** Which arrangement best explains what the student saw in sentence 3?  
   _Skill: Explain how the positions of the sun, Earth and moon cause moon phases, tides and eclipses_
   - A. Earth was between the sun and the moon, and Earth's shadow fell on the moon.
   - B. The moon was between the sun and Earth, and the moon's own shadow fell on Earth.
   - C. The sun was between Earth and the moon, so the moon got less light.
   - D. The moon was at a right angle to the sun and Earth, half in shadow.
   - **Key: A**

3. **[ES.2.c.1 · LOTS]** The student could see the moon at night because the moon —  
   _Skill: Describe the characteristics of the sun, planets, moons, comets, meteors, asteroids and dwarf planets_
   - A. makes its own light by nuclear fusion
   - B. glows from heat left in its molten core
   - C. gives off light from gases in its thick atmosphere
   - D. reflects sunlight from its rocky surface
   - **Key: D**

4. **[ES.3.b.3 · HOTS]** Based on the table, the next new moon most likely happened on about —  
   _Skill: Predict or analyze seasons, tides or eclipses from a model or data_
   - A. October 24
   - B. October 31
   - C. November 9
   - D. November 16
   - **Key: B**

5. **[ES.3.b.3 · HOTS]** On which date in the table was the moon in the right position for a solar eclipse to be possible?  
   _Skill: Predict or analyze seasons, tides or eclipses from a model or data_
   - A. October 9
   - B. October 17
   - C. October 2
   - D. October 24
   - **Key: C**

### Three galaxies, one shift  
`space-galaxy-shapes` · Universe & Solar System · ES.2 · level 1 · 71 words · 5 questions

> (1) Students at a school observatory in Fairfax County photographed three galaxies. (2) Galaxy X is a flat disk with bright arms curving out from its center. (3) Galaxy Y is a smooth oval of old, yellowish stars with little gas or dust. (4) Galaxy Z has no definite shape. (5) A university catalog showed that the dark lines in each galaxy's spectrum are shifted toward red, compared with the same lines measured in a lab.

1. **[ES.2.b.1 · LOTS]** Galaxy Y is best classified as —  
   _Skill: Describe how stars form and change over their life cycles, and the main types of galaxies_
   - A. a spiral galaxy
   - B. an irregular galaxy
   - C. an elliptical galaxy
   - D. a barred spiral galaxy
   - **Key: C**

2. **[ES.2.b.1 · LOTS]** Our own galaxy, the Milky Way, has the same basic shape as —  
   _Skill: Describe how stars form and change over their life cycles, and the main types of galaxies_
   - A. Galaxy X
   - B. Galaxy Y
   - C. Galaxy Z
   - D. none of the three galaxies
   - **Key: A**

3. **[ES.2.a.2 · HOTS]** Which conclusion is best supported by the observation in sentence 5?  
   _Skill: Analyze how evidence supports or tests the big bang theory_
   - A. The galaxies are moving toward Earth and will soon collide with it.
   - B. The galaxies are moving away from us, as expected in an expanding universe.
   - C. The galaxies are made only of cool red stars, so all of their light looks red.
   - D. The galaxies are hidden behind dust clouds that turn their light red.
   - **Key: B**

4. **[ES.2.a.2 · HOTS]** A fourth galaxy is found to be twice as far away as Galaxy X. If the universe is expanding, its spectrum would most likely show —  
   _Skill: Analyze how evidence supports or tests the big bang theory_
   - A. a blue shift, because it is moving toward Earth instead
   - B. the same red shift that Galaxy X shows
   - C. no shift, because it is too far away to measure
   - D. a larger red shift, because it is moving away faster
   - **Key: D**

5. **[ES.2.d.1 · LOTS]** A telescope in orbit, such as the Hubble Space Telescope, takes sharper galaxy images than the school's telescope mainly because it —  
   _Skill: Identify what telescopes, probes, satellites and crewed missions have contributed to our understanding of space_
   - A. is much closer to the faraway galaxies it photographs
   - B. is above the air, which blurs and absorbs light
   - C. moves at the same speed as the galaxies
   - D. uses sunlight to make the galaxies brighter
   - **Key: B**

### Noon sun over Charlottesville  
`space-seasons-charlottesville` · Universe & Solar System · ES.3 · level 1 · 82 words · 5 questions

> (1) A student in Charlottesville, at about 38° N latitude, measured how high the sun stood above the horizon at noon and counted the hours of daylight on four dates. (2) She also learned that Earth is closest to the sun in early January (about 147 million km) and farthest from it in early July (about 152 million km).
> 
> | Date | Noon sun height | Daylight |
> |---|---|---|
> | March 20 | 52° | 12.1 h |
> | June 21 | 75° | 14.8 h |
> | September 22 | 52° | 12.1 h |
> | December 21 | 29° | 9.5 h |

1. **[ES.3.b.1 · LOTS]** Virginia has seasons mainly because —  
   _Skill: Explain how Earth's tilt and revolution cause the seasons_
   - A. Earth's distance from the sun changes during the year
   - B. Earth's axis is tilted as Earth revolves around the sun
   - C. the sun gives off much more energy in summer than in winter
   - D. Earth spins faster on its axis in summer than in winter
   - **Key: B**

2. **[ES.3.b.3 · HOTS]** A classmate says summer happens when Earth is closest to the sun. Which information from the passage best shows that this idea is wrong?  
   _Skill: Predict or analyze seasons, tides or eclipses from a model or data_
   - A. Earth is closest to the sun in January, during Virginia's winter.
   - B. The noon sun was at the same height in March and in September.
   - C. The number of daylight hours in Charlottesville changes during the year.
   - D. The noon sun stood highest in the sky on the date in June.
   - **Key: A**

3. **[ES.3.b.1 · LOTS]** Compared with December 21, on June 21 Charlottesville received —  
   _Skill: Explain how Earth's tilt and revolution cause the seasons_
   - A. fewer hours of daylight and more direct sunlight
   - B. more hours of daylight but less direct sunlight
   - C. the same hours of daylight and a higher noon sun
   - D. more hours of daylight and more direct sunlight
   - **Key: D**

4. **[ES.3.b.3 · HOTS]** On December 21, a city in Argentina at 38° S latitude would most likely have —  
   _Skill: Predict or analyze seasons, tides or eclipses from a model or data_
   - A. winter, with a noon sun about 29° above the horizon
   - B. spring, with about 12 hours of daylight
   - C. summer, with a noon sun about 75° above the horizon
   - D. winter, because Earth is far from the sun in December
   - **Key: C**

5. **[ES.3.b.1 · LOTS]** On March 20 and September 22, day and night were each about 12 hours long because —  
   _Skill: Explain how Earth's tilt and revolution cause the seasons_
   - A. Earth was at its closest point to the sun on those dates
   - B. the sun's most direct rays struck the equator on those dates
   - C. the sun's most direct rays struck the Tropic of Cancer
   - D. Earth's axis was not tilted at all on either of those two dates
   - **Key: B**

### Six planets by the numbers  
`space-planet-table` · Universe & Solar System · ES.2 · ES.3 · level 1 · 104 words · 6 questions

> (1) An Earth science class collected data on six planets to test an idea from the solar nebular theory: a planet's makeup depends on how far from the sun it formed. (2) Density hints at what a planet is mostly made of; liquid water has a density of 1.0 g/cm³, common rock about 3, and iron about 8. (3) One astronomical unit (AU) is Earth's average distance from the sun, about 150 million km.
> 
> | Planet | Distance (AU) | Density (g/cm³) | Orbit time (Earth years) |
> |---|---|---|---|
> | Mercury | 0.39 | 5.4 | 0.24 |
> | Earth | 1.0 | 5.5 | 1.0 |
> | Mars | 1.5 | 3.9 | 1.9 |
> | Jupiter | 5.2 | 1.3 | 11.9 |
> | Saturn | 9.5 | 0.7 | 29.5 |
> | Neptune | 30.1 | 1.6 | 165 |

1. **[ES.2.c.1 · LOTS]** According to the table, which planet has a density lower than that of liquid water?  
   _Skill: Describe the characteristics of the sun, planets, moons, comets, meteors, asteroids and dwarf planets_
   - A. Jupiter
   - B. Neptune
   - C. Mars
   - D. Saturn
   - **Key: D**

2. **[ES.2.c.2 · HOTS]** Which conclusion is best supported by the data in the table?  
   _Skill: Relate a body's composition and distance from the sun (the solar nebular theory) to its characteristics_
   - A. Planets that formed far from the sun are made of denser materials.
   - B. Inner planets are dense like rock and metal; outer planets are far less dense.
   - C. Each planet is denser than the planet just inside its orbit around the sun.
   - D. All six planets have about the same density, whatever their distance from the sun.
   - **Key: B**

3. **[ES.2.c.2 · HOTS]** Uranus orbits between Saturn and Neptune, at about 19 AU. Based on the table, the time Uranus takes to orbit the sun is most likely about —  
   _Skill: Relate a body's composition and distance from the sun (the solar nebular theory) to its characteristics_
   - A. 8 Earth years
   - B. 20 Earth years
   - C. 84 Earth years
   - D. 200 Earth years
   - **Key: C**

4. **[ES.3.a.2 · HOTS]** Mars has a very thin atmosphere. Using the table and this fact, which best explains why liquid water does not last on the surface of Mars today?  
   _Skill: Compare Earth with other planets and moons to explain why Earth supports life_
   - A. Mars is denser than Earth, so its water sinks deep into its core.
   - B. Mars takes less time than Earth to orbit, so it has short summers.
   - C. Mars is a gas planet with no solid surface where liquid water could collect.
   - D. Mars is farther out and its thin air holds little heat, so water freezes.
   - **Key: D**

5. **[ES.3.a.1 · LOTS]** Earth's distance of 1 AU from the sun is important for life mainly because it —  
   _Skill: Describe the factors that let Earth support life (distance from the sun, liquid water, atmosphere, magnetic field, size)_
   - A. keeps surface temperatures in the range where water stays liquid
   - B. makes Earth the densest of all eight planets in the whole solar system
   - C. gives Earth the shortest orbit time of any planet in the table
   - D. keeps Earth out of the path of every asteroid and comet
   - **Key: A**

6. **[ES.2.d.1 · LOTS]** Much of what scientists know about Jupiter, Saturn and Neptune came from —  
   _Skill: Identify what telescopes, probes, satellites and crewed missions have contributed to our understanding of space_
   - A. crewed missions that landed on each of these planets
   - B. telescopes that astronauts built on the moon's surface
   - C. uncrewed probes that flew past or orbited these planets
   - D. samples of gas brought back to Earth from each of the planets
   - **Key: C**


## Level 2 — average student (core)

### A heavy stone in a hayfield  
`space-pittsylvania-meteorite` · Universe & Solar System · ES.2 · ES.3 · level 2 · 89 words · 6 questions

> (1) Late one night, people in Pittsylvania County, Virginia, saw a brilliant streak of light cross the sky and then heard a loud boom. (2) A week later, a student found a fist-sized stone in a hayfield nearby. (3) It had a thin, black, glassy crust and felt very heavy for its size. (4) In the school lab, the stone attracted a magnet and had a density of 7.6 g/cm³. (5) A cut face showed shiny crystals of iron and nickel metal. (6) For comparison, most rocks at Earth's surface have densities near 2.7 g/cm³.

1. **[ES.2.c.1 · LOTS]** The streak of light in sentence 1 is best called —  
   _Skill: Describe the characteristics of the sun, planets, moons, comets, meteors, asteroids and dwarf planets_
   - A. a comet
   - B. a meteor
   - C. an asteroid
   - D. a meteorite
   - **Key: B**

2. **[ES.2.c.1 · LOTS]** Which term correctly names the stone the student found in the hayfield?  
   _Skill: Describe the characteristics of the sun, planets, moons, comets, meteors, asteroids and dwarf planets_
   - A. a meteorite
   - B. a meteoroid
   - C. a comet nucleus
   - D. a dwarf planet
   - **Key: A**

3. **[ES.2.c.2 · HOTS]** The stone's density and metal content suggest that it most likely came from —  
   _Skill: Relate a body's composition and distance from the sun (the solar nebular theory) to its characteristics_
   - A. the icy nucleus of a comet from beyond Neptune
   - B. the metal-rich interior of an asteroid that broke apart
   - C. the cloudy outer layers of a gas planet such as Jupiter
   - D. a piece of Virginia bedrock thrown up when the stone hit the ground
   - **Key: B**

4. **[ES.2.c.2 · HOTS]** A classmate claims the stone is a piece of a comet. Which evidence best argues against this claim?  
   _Skill: Relate a body's composition and distance from the sun (the solar nebular theory) to its characteristics_
   - A. It was found in a hayfield only a week after the streak of light was seen.
   - B. It made a loud boom as it passed through the air.
   - C. It is made of dense metal, while comets are mostly ice and dust.
   - D. It has a thin crust that is black and glassy.
   - **Key: C**

5. **[ES.3.a.1 · LOTS]** Most meteoroids that enter Earth's atmosphere never reach the ground. This shows that the atmosphere helps protect life on Earth by —  
   _Skill: Describe the factors that let Earth support life (distance from the sun, liquid water, atmosphere, magnetic field, size)_
   - A. blocking all of the sunlight from reaching the surface at night
   - B. pulling most meteoroids into orbit around the planet
   - C. producing the magnetic field that pushes rocks away
   - D. heating and burning up most small space rocks as they fall
   - **Key: D**

6. **[ES.2.d.1 · LOTS]** Which mission would give the most direct evidence about what asteroids are made of?  
   _Skill: Identify what telescopes, probes, satellites and crewed missions have contributed to our understanding of space_
   - A. a space telescope that takes photographs of faraway galaxies
   - B. a weather satellite that orbits above Earth's equator
   - C. a probe that collects rock from an asteroid and returns it
   - D. a crew that spends six months on the space station
   - **Key: C**

### Tides at the Virginia Beach pier  
`space-virginia-beach-tides` · Universe & Solar System · ES.2 · ES.3 · level 2 · 115 words · 6 questions

> (1) A marine science club measured the **tidal range**, the difference in water height between a high tide and the next low tide, at a fishing pier in Virginia Beach. (2) The pier has two high tides and two low tides on almost every day. (3) The table shows the largest range measured on five dates and the moon's phase on each date. (4) On the night of the full moon, club members also looked at the moon through a telescope and saw thousands of ancient craters.
> 
> | Date | Moon phase | Tidal range (m) |
> |---|---|---|
> | April 1 | new moon | 1.3 |
> | April 8 | first quarter | 0.7 |
> | April 16 | full moon | 1.2 |
> | April 23 | third quarter | 0.7 |
> | April 30 | new moon | 1.3 |

1. **[ES.3.b.2 · LOTS]** The daily rise and fall of the water at the pier is caused mainly by —  
   _Skill: Explain how the positions of the sun, Earth and moon cause moon phases, tides and eclipses_
   - A. strong winds that push the ocean water toward the shore each day
   - B. the gravitational pull of the moon and sun on Earth's oceans
   - C. the moon's shadow passing over the ocean twice each day
   - D. Earth's revolution around the sun once each year
   - **Key: B**

2. **[ES.3.b.3 · HOTS]** Which pattern is shown by the data in the table?  
   _Skill: Predict or analyze seasons, tides or eclipses from a model or data_
   - A. The tidal range was greatest at the new and full moons.
   - B. The tidal range was greatest at the first and third quarter moons.
   - C. The tidal range grew larger every week of the month.
   - D. The tidal range was the same at every moon phase.
   - **Key: A**

3. **[ES.3.b.2 · LOTS]** The large ranges on April 1 and April 16 are called spring tides. Spring tides happen when the sun, Earth and moon are —  
   _Skill: Explain how the positions of the sun, Earth and moon cause moon phases, tides and eclipses_
   - A. at right angles to one another in space
   - B. at their greatest distances apart
   - C. lined up in a nearly straight line
   - D. moving in opposite directions
   - **Key: C**

4. **[ES.3.b.3 · HOTS]** Based on the table, the largest tidal range on May 7, about one week after the April 30 new moon, would most likely be about —  
   _Skill: Predict or analyze seasons, tides or eclipses from a model or data_
   - A. 0.3 m
   - B. 0.7 m
   - C. 1.3 m
   - D. 2.0 m
   - **Key: B**

5. **[ES.3.a.1 · LOTS]** Oceans like the one at Virginia Beach can exist on Earth's surface mainly because Earth —  
   _Skill: Describe the factors that let Earth support life (distance from the sun, liquid water, atmosphere, magnetic field, size)_
   - A. has a moon large enough to raise tides
   - B. is tilted on its axis, which gives most places four seasons
   - C. is the largest planet in the solar system
   - D. is at a distance from the sun where water stays liquid
   - **Key: D**

6. **[ES.2.c.1 · LOTS]** The craters seen in sentence 4 have lasted for billions of years mainly because the moon has —  
   _Skill: Describe the characteristics of the sun, planets, moons, comets, meteors, asteroids and dwarf planets_
   - A. no air or liquid water to wear them away
   - B. a thick atmosphere that shields its surface
   - C. active volcanoes that keep rebuilding them
   - D. a strong magnetic field that holds rocks in place
   - **Key: A**

### Five stars and an H-R diagram  
`space-star-catalog` · Universe & Solar System · ES.2 · level 2 · 179 words · 6 questions

> (1) Astronomy students at a college observatory in the Shenandoah Valley compared the sun with four other stars from a star catalog. (2) A star forms when gravity pulls together gas and dust in a **nebula** until its core is hot enough for hydrogen to fuse into helium. (3) On an **H-R diagram**, a graph of stars' temperature and luminosity, most stars lie on a band called the main sequence, where hotter stars are also brighter and more massive. (4) A star spends most of its life on the main sequence. (5) What happens next depends on its mass. (6) A star like the sun swells into a red giant and then leaves behind a small, hot core called a white dwarf. (7) A star more than about eight times the sun's mass becomes a red supergiant, then explodes as a supernova, leaving a neutron star or a black hole.
> 
> | Star | Surface temperature (K) | Luminosity: energy given off (sun = 1) | Mass (sun = 1) |
> |---|---|---|---|
> | Sun | 5,800 | 1 | 1 |
> | P | 30,000 | 50,000 | 18 |
> | Q | 3,400 | 0.01 | 0.3 |
> | R | 3,600 | 40,000 | 15 |
> | S | 10,000 | 0.001 | 0.6 |

1. **[ES.2.b.1 · LOTS]** According to the passage, a contracting ball of gas and dust becomes a true star when —  
   _Skill: Describe how stars form and change over their life cycles, and the main types of galaxies_
   - A. a nearby planet collects enough gas to begin glowing
   - B. hydrogen in its core begins to fuse into helium
   - C. a supernova blows the nebula around it apart
   - D. its outer layers cool and turn a deep red color
   - **Key: B**

2. **[ES.2.b.2 · HOTS]** Star S is hotter than the sun but gives off only one-thousandth as much energy. Which best explains this?  
   _Skill: Compare stars by mass, temperature and luminosity (H-R diagram) and predict how they will change_
   - A. It is a white dwarf, the small leftover core of a sun-like star.
   - B. It is a main-sequence star that has much more mass than our sun does.
   - C. It is a red supergiant that is near the end of its life.
   - D. It is much farther from Earth than the sun is.
   - **Key: A**

3. **[ES.2.b.2 · HOTS]** Based on the passage, Star P will most likely end its life as —  
   _Skill: Compare stars by mass, temperature and luminosity (H-R diagram) and predict how they will change_
   - A. a white dwarf, after a red giant stage
   - B. a main-sequence star that never changes
   - C. a supernova that leaves a neutron star or black hole
   - D. a cold nebula that slowly forms new planets around it
   - **Key: C**

4. **[ES.2.b.2 · HOTS]** Massive stars use up their hydrogen much faster than small stars do. Which star in the table will most likely stay on the main sequence the longest?  
   _Skill: Compare stars by mass, temperature and luminosity (H-R diagram) and predict how they will change_
   - A. Star P
   - B. the sun
   - C. Star R
   - D. Star Q
   - **Key: D**

5. **[ES.2.c.1 · LOTS]** The sun produces its energy by —  
   _Skill: Describe the characteristics of the sun, planets, moons, comets, meteors, asteroids and dwarf planets_
   - A. nuclear fusion of hydrogen into helium in its core
   - B. burning coal and natural gas throughout its outer layers
   - C. reflecting the light of other stars near it
   - D. slowly cooling from a molten iron center
   - **Key: A**

6. **[ES.2.d.1 · LOTS]** The James Webb Space Telescope observes infrared light, which passes through dust that blocks visible light. This makes it especially useful for —  
   _Skill: Identify what telescopes, probes, satellites and crewed missions have contributed to our understanding of space_
   - A. measuring the surface temperature of Earth's oceans
   - B. seeing new stars forming inside dusty nebulae
   - C. landing on the surfaces of distant planets
   - D. collecting samples of gas from the sun
   - **Key: B**

### A CubeSat from Wallops  
`space-wallops-cubesat` · Universe & Solar System · ES.2 · ES.3 · level 2 · 168 words · 6 questions

> (1) NASA's Wallops Flight Facility, on Virginia's Eastern Shore, launches rockets, scientific balloons and small satellites. (2) A high school team built a **CubeSat**, a satellite about the size of a loaf of bread, that carried a counter for charged particles. (3) A rocket launched from Wallops carried it to an orbit about 400 km up, on a path that crossed high northern and southern latitudes. (4) The team's teacher explained that the sun gives off a steady stream of charged particles called the **solar wind**. (5) Earth's magnetic field turns most of these particles aside, but some are guided down toward the poles, where they cause auroras. (6) She added that the first U.S. satellite, launched in 1958, carried a particle counter that found belts of charged particles trapped by Earth's magnetic field. (7) Before then, many scientists expected the space around Earth to be nearly empty.
> 
> | CubeSat location | Particle counts per second |
> |---|---|
> | Over the equator | 12 |
> | Over Virginia (38° N) | 20 |
> | Near the North Pole | 145 |
> | Near the South Pole | 138 |

1. **[ES.2.d.1 · LOTS]** Why did the team need a satellite in orbit, rather than a counter on the ground, to measure the solar wind?  
   _Skill: Identify what telescopes, probes, satellites and crewed missions have contributed to our understanding of space_
   - A. Earth's magnetic field and air keep most of these particles from reaching the ground.
   - B. Charged particles can be counted only at night, and space far above Earth is always dark.
   - C. Particle counters are too large to be used inside a school laboratory.
   - D. The solar wind blows only over the oceans, where no stations are built.
   - **Key: A**

2. **[ES.3.a.1 · LOTS]** According to the passage, Earth's magnetic field helps make Earth suitable for life by —  
   _Skill: Describe the factors that let Earth support life (distance from the sun, liquid water, atmosphere, magnetic field, size)_
   - A. holding the moon in its monthly orbit around Earth
   - B. turning aside most charged particles from the sun
   - C. keeping Earth at the right distance from the sun
   - D. producing the oxygen found in Earth's atmosphere
   - **Key: B**

3. **[ES.3.a.1 · LOTS]** Which statement is best supported by the data in the table?  
   _Skill: Describe the factors that let Earth support life (distance from the sun, liquid water, atmosphere, magnetic field, size)_
   - A. Particle counts were about the same everywhere along the orbit.
   - B. Particle counts were lowest near both poles and highest directly over the equator.
   - C. Particle counts were highest near the poles, where the field guides particles in.
   - D. Particle counts over Virginia were higher than near the North Pole.
   - **Key: C**

4. **[ES.3.a.2 · HOTS]** Mars has had no global magnetic field for billions of years, and orbiters have measured gas escaping from the top of its atmosphere. Which inference is best supported?  
   _Skill: Compare Earth with other planets and moons to explain why Earth supports life_
   - A. The solar wind has stripped away much of Mars's air, leaving it thin and cold.
   - B. Mars must be closer to the sun than Earth is, so its air simply boils away into space.
   - C. Mars will soon have a thicker atmosphere than Earth has today.
   - D. Mars lost its air because it has no liquid water on its surface today.
   - **Key: A**

5. **[ES.2.d.2 · HOTS]** How did the 1958 discovery described in sentences 6 and 7 change scientists' understanding of space near Earth?  
   _Skill: Evaluate how new evidence from space exploration changed a scientific explanation_
   - A. It showed that the moon has a magnetic field that is as strong as Earth's.
   - B. It showed that the solar wind does not actually reach Earth.
   - C. It showed that the space around Earth holds trapped charged particles.
   - D. It showed that satellites cannot survive above the atmosphere.
   - **Key: C**

6. **[ES.2.c.1 · LOTS]** The solar wind streams out from the sun, a star made mostly of —  
   _Skill: Describe the characteristics of the sun, planets, moons, comets, meteors, asteroids and dwarf planets_
   - A. iron and nickel
   - B. rock and ice
   - C. carbon dioxide and nitrogen
   - D. hydrogen and helium
   - **Key: D**


## Level 3 — stretch

### A model of the solar nebula  
`space-solar-nebula` · Universe & Solar System · ES.2 · level 3 · 154 words · 6 questions

> (1) The **solar nebular theory** explains how the solar system formed about 4.6 billion years ago. (2) A huge, slowly spinning cloud of gas and dust began to collapse under its own gravity. (3) Most of the mass fell to the center, which grew hot and dense enough to fuse hydrogen and became the sun. (4) The rest flattened into a spinning disk. (5) Close to the young sun it was too hot for ice to form, so only rock and metal clumped together, building small planets. (6) Farther out, beyond a boundary called the **frost line** between the orbits of Mars and Jupiter, ice could form as well. (7) There, planets grew large enough for their gravity to pull in huge amounts of hydrogen and helium gas. (8) Leftover rocky pieces remain as asteroids, mostly between Mars and Jupiter. (9) Leftover icy pieces remain as comets and as small bodies in the Kuiper belt beyond Neptune, including dwarf planets such as Pluto.

1. **[ES.2.c.2 · HOTS]** According to the model, Mercury, Venus, Earth and Mars are small, dense and rocky because they —  
   _Skill: Relate a body's composition and distance from the sun (the solar nebular theory) to its characteristics_
   - A. formed where it was too hot for ice, so only rock and metal collected
   - B. formed beyond the frost line, where the most gas was available
   - C. lost all their ice when the sun grew much larger long afterward
   - D. were pulled away from the gas giants by the young sun's strong gravity
   - **Key: A**

2. **[ES.2.c.2 · HOTS]** A newly discovered object orbits the sun in the Kuiper belt. Based on the model, which TWO properties is it most likely to have? Select TWO.  
   _Skill: Relate a body's composition and distance from the sun (the solar nebular theory) to its characteristics_
   - A. a thick atmosphere of hydrogen and helium
   - B. a body made mostly of ice mixed with rock
   - C. a density close to that of solid iron
   - D. a surface far colder than water's freezing point
   - **Key: B and D**

3. **[ES.2.c.1 · LOTS]** Pluto is classified as a dwarf planet rather than a planet because it —  
   _Skill: Describe the characteristics of the sun, planets, moons, comets, meteors, asteroids and dwarf planets_
   - A. is made of ice and rock rather than of hydrogen and helium gas
   - B. orbits Neptune instead of orbiting the sun
   - C. is round but shares its orbit zone with many other objects
   - D. is too far away to be seen with any telescope
   - **Key: C**

4. **[ES.2.c.1 · LOTS]** When a comet's orbit brings it close to the sun, it grows a long, glowing tail because —  
   _Skill: Describe the characteristics of the sun, planets, moons, comets, meteors, asteroids and dwarf planets_
   - A. its ice turns to gas, and the sun blows the gas and dust outward
   - B. it collides with asteroids and leaves a trail of broken rock
   - C. it catches fire from the oxygen it meets in the sun's outer atmosphere
   - D. its rocky core melts and the lava flows out behind it
   - **Key: A**

5. **[ES.2.b.1 · LOTS]** According to the model, the center of the collapsing cloud became a star when it —  
   _Skill: Describe how stars form and change over their life cycles, and the main types of galaxies_
   - A. cooled enough for ice to form in its outer layers
   - B. was struck by a large icy body from the Kuiper belt
   - C. spun fast enough to flatten into a thin disk
   - D. became hot and dense enough for hydrogen to fuse
   - **Key: D**

6. **[ES.2.d.2 · HOTS]** Space telescopes have photographed young stars inside flat, spinning disks of gas and dust, some with gaps where planets may form. How does this evidence relate to the solar nebular theory?  
   _Skill: Evaluate how new evidence from space exploration changed a scientific explanation_
   - A. It disproves the theory, because our solar system has no such disk today.
   - B. It supports the theory, because the theory predicts disks around new stars.
   - C. It has no bearing on the theory, because those stars are not the sun.
   - D. It shows that planets form first and their stars form much later.
   - **Key: B**

### Clues to an expanding universe  
`space-expanding-universe` · Universe & Solar System · ES.2 · level 3 · 207 words · 6 questions

> (1) In the 1920s, astronomers using the largest telescopes of the time spread the light from distant galaxies into spectra. (2) Dark lines made by elements such as hydrogen appeared at longer, redder wavelengths than the same lines measured in a laboratory, a pattern called **red shift**. (3) A red shift shows that a light source is moving away from the observer. (4) The table shows rounded modern values for four galaxies.
> 
> | Galaxy | Distance (millions of light-years) | Speed away from us (km/s) |
> |---|---|---|
> | A | 50 | 1,100 |
> | B | 100 | 2,200 |
> | C | 200 | 4,400 |
> | D | 400 | 8,800 |
> 
> (5) By the 1950s, most astronomers accepted that the universe is expanding, but they debated two explanations. (6) A steady-state model said the universe has no beginning and that new matter forms as it expands, so it always looks about the same and never had a hot early stage. (7) The **big bang theory** said the universe began about 13.8 billion years ago in an extremely hot, dense state and has been expanding and cooling ever since, so a faint glow of leftover radiation should fill all of space. (8) In 1965, two radio engineers in New Jersey detected a weak microwave signal coming equally from every direction in the sky. (9) Later satellites mapped this **cosmic microwave background** in detail.

1. **[ES.2.a.1 · LOTS]** The cosmic microwave background described in sentences 7 through 9 is best described as —  
   _Skill: Describe the evidence for the big bang theory (expansion, red shift, cosmic background radiation)_
   - A. radio signals sent out by distant spacecraft
   - B. heat given off by the sun and nearby stars
   - C. sunlight reflected from the gas clouds that lie between galaxies
   - D. leftover radiation from the hot, dense early universe
   - **Key: D**

2. **[ES.2.a.2 · HOTS]** Which pattern is shown by the data in the galaxy table?  
   _Skill: Analyze how evidence supports or tests the big bang theory_
   - A. Closer galaxies are moving away faster than distant ones.
   - B. Galaxies that are farther away are moving away faster.
   - C. All of the galaxies are moving away at about the same speed.
   - D. The galaxies are moving toward us at increasing speeds.
   - **Key: B**

3. **[ES.2.a.2 · HOTS]** Galaxy E is 300 million light-years away. Based on the table, its speed away from us is most likely about —  
   _Skill: Analyze how evidence supports or tests the big bang theory_
   - A. 3,300 km/s
   - B. 5,500 km/s
   - C. 6,600 km/s
   - D. 13,200 km/s
   - **Key: C**

4. **[ES.2.d.2 · HOTS]** Which observation most strongly favored the big bang theory over the steady-state model?  
   _Skill: Evaluate how new evidence from space exploration changed a scientific explanation_
   - A. the microwave glow from every direction, which the big bang had predicted
   - B. the red shift of galaxies, which showed that distant galaxies move away
   - C. the dark lines in galaxy spectra, which are made by hydrogen and other elements
   - D. the large size of the 1920s telescopes, which let astronomers see farther
   - **Key: A**

5. **[ES.2.a.1 · LOTS]** Which TWO observations described in the passage are evidence for the big bang theory? Select TWO.  
   _Skill: Describe the evidence for the big bang theory (expansion, red shift, cosmic background radiation)_
   - A. red shifts that increase with a galaxy's distance
   - B. hydrogen lines measured in an Earth laboratory
   - C. a faint microwave glow from every direction
   - D. the bright light given off by nearby stars
   - **Key: A and C**

6. **[ES.2.b.1 · LOTS]** Our own galaxy, the Milky Way, is best described as —  
   _Skill: Describe how stars form and change over their life cycles, and the main types of galaxies_
   - A. an elliptical galaxy made only of old red stars
   - B. a spiral galaxy of billions of stars, one of them the sun
   - C. the group of eight planets that orbit the sun
   - D. a cloud of gas and dust where the sun and new planets are forming
   - **Key: B**

### Why only Earth?  
`space-why-earth-life` · Universe & Solar System · ES.2 · ES.3 · level 3 · 181 words · 6 questions

> (1) An astronomy club at a Virginia high school asked why Earth is the only world known to support life. (2) Members compared Earth with two neighboring planets and with Europa, a large icy moon of Jupiter.
> 
> | World | Distance from sun (AU) | Average surface temperature (°C) | Atmosphere |
> |---|---|---|---|
> | Venus | 0.72 | 464 | very thick, mostly carbon dioxide |
> | Earth | 1.00 | 15 | mostly nitrogen and oxygen |
> | Mars | 1.52 | −63 | very thin, mostly carbon dioxide |
> | Europa | 5.2 | −160 | almost none |
> 
> (3) Mercury, the closest planet to the sun at 0.39 AU, has almost no atmosphere and an average temperature of about 167 °C. (4) Earth's strong magnetic field turns aside most of the solar wind, but Mars has had no global magnetic field for billions of years. (5) Orbiting spacecraft have measured gas escaping from the top of Mars's atmosphere. (6) Rovers on Mars have found dry river channels and layered rocks that formed in standing water. (7) At Europa, a probe that orbited Jupiter measured magnetic signals suggesting a salty ocean beneath the moon's icy crust. (8) Scientists think this ocean stays liquid because Jupiter's gravity squeezes and flexes Europa, heating its interior.

1. **[ES.3.a.1 · LOTS]** Based on the table and the passage, which TWO factors help Earth keep liquid water on its surface? Select TWO.  
   _Skill: Describe the factors that let Earth support life (distance from the sun, liquid water, atmosphere, magnetic field, size)_
   - A. its distance from the sun, which keeps temperatures moderate
   - B. its atmosphere, which holds in heat without trapping too much
   - C. its distance, which is the shortest of the four worlds in the table
   - D. its air, which is made mostly of carbon dioxide gas
   - **Key: A and B**

2. **[ES.3.a.2 · HOTS]** Venus is almost twice as far from the sun as Mercury, yet Venus is much hotter. Which best explains this?  
   _Skill: Compare Earth with other planets and moons to explain why Earth supports life_
   - A. Venus moves closer to the sun than Mercury for most of its orbit.
   - B. Venus's thick carbon dioxide atmosphere traps heat from the sun.
   - C. Venus has a strong magnetic field that collects the solar wind.
   - D. Venus has deep oceans that store heat from the sun all year.
   - **Key: B**

3. **[ES.3.a.2 · HOTS]** Which explanation of Mars's thin atmosphere is best supported by sentences 4 and 5?  
   _Skill: Compare Earth with other planets and moons to explain why Earth supports life_
   - A. Without a global magnetic field, Mars has slowly lost gas to the solar wind.
   - B. Mars is much too close to the sun for its weak gravity to hold on to any gases.
   - C. The rovers on Mars have used up much of the gas in its atmosphere.
   - D. Mars's cold temperatures froze all of its air into solid rock.
   - **Key: A**

4. **[ES.2.d.2 · HOTS]** How did the rover findings in sentence 6 change scientists' view of Mars?  
   _Skill: Evaluate how new evidence from space exploration changed a scientific explanation_
   - A. They showed that Mars has always been as dry as it is today.
   - B. They showed that Mars has liquid oceans on its surface now.
   - C. They showed that Mars once had liquid water and was likely warmer.
   - D. They showed that Mars has a much stronger magnetic field than Earth.
   - **Key: C**

5. **[ES.2.c.1 · LOTS]** According to the passage, Europa's ocean can stay liquid even though its surface averages −160 °C because —  
   _Skill: Describe the characteristics of the sun, planets, moons, comets, meteors, asteroids and dwarf planets_
   - A. sunlight at 5.2 AU is strong enough to melt its ice
   - B. its thick atmosphere traps the sun's heat like a warm blanket
   - C. the solar wind warms the ocean through the crust
   - D. Jupiter's gravity flexes the moon and heats its interior
   - **Key: D**

6. **[ES.2.d.1 · LOTS]** The evidence for an ocean on Europa described in the passage came from —  
   _Skill: Identify what telescopes, probes, satellites and crewed missions have contributed to our understanding of space_
   - A. a telescope on Earth that photographed the ocean
   - B. astronauts who drilled down through Europa's ice
   - C. a rover that landed and drove on Europa's surface
   - D. a Jupiter orbiter that measured magnetic signals
   - **Key: D**


---

# Minerals & Rocks (ES.4 · ES.5)

Standards in this unit:

- ES.4.a — analysis of physical and chemical properties supports mineral identification
- ES.4.b — characteristics of minerals determine the uses of minerals
- ES.4.c — rock-forming minerals originate and are formed in specific ways
- ES.5.a — Earth materials are finite and are transformed over time
- ES.5.b — the rock cycle is a model of how rocks form and change
- ES.5.c — rock properties reflect how igneous, sedimentary, and metamorphic rocks formed
- ES.5.d — plate tectonics and surface processes transform Earth materials


## Level 1 — foundation

### Four unknown minerals  
`rock-four-unknowns` · Minerals & Rocks · ES.4 · level 1 · 96 words · 5 questions

> (1) A student tested four unknown minerals with a fingernail (hardness about 2.5), a copper penny (about 3.5) and a glass plate (about 5.5). (2) She also rubbed each one across a white streak plate and placed a drop of dilute acid on it. (3) All four samples were light colored with a nonmetallic luster. (4) Her results are shown in the table.
> 
> | Sample | Hardness test | Streak | Acid |
> |---|---|---|---|
> | W | scratched by fingernail | white | no fizz |
> | X | scratches glass | colorless | no fizz |
> | Y | scratched by penny, not by fingernail | white | fizzes |
> | Z | scratched by glass, not by penny | white | no fizz |

1. **[ES.4.a.1 · LOTS]** Which sample is the softest?  
   _Skill: Identify minerals by hardness, color, streak, luster, cleavage, fracture and special properties_
   - A. Sample X
   - B. Sample Z
   - C. Sample W
   - D. Sample Y
   - **Key: C**

2. **[ES.4.a.2 · LOTS]** Based on the table and the Mohs hardness scale, Sample Y is most likely —  
   _Skill: Use an identification key or table to identify an unknown mineral_
   - A. talc
   - B. gypsum
   - C. quartz
   - D. calcite
   - **Key: D**

3. **[ES.4.a.3 · HOTS]** Besides the acid test, which test or observation would best tell Sample W from Sample Y?  
   _Skill: Analyze test results to tell apart minerals with similar properties_
   - A. trying to scratch each with a fingernail
   - B. rubbing each across the streak plate
   - C. comparing the colors of the two samples
   - D. comparing how each one reflects light
   - **Key: A**

4. **[ES.4.b.1 · LOTS]** Sample W turns out to be gypsum. Gypsum is mined mainly to make —  
   _Skill: Describe the uses of common rock-forming and ore minerals_
   - A. table salt
   - B. drywall
   - C. pencil lead
   - D. window glass
   - **Key: B**

5. **[ES.4.a.3 · HOTS]** Which conclusion about the hardness of Sample Z is supported by the test results?  
   _Skill: Analyze test results to tell apart minerals with similar properties_
   - A. It is softer than a fingernail.
   - B. It is between 3.5 and 5.5.
   - C. It is harder than Sample X.
   - D. It is softer than Sample Y.
   - **Key: B**

### Two dishes of salt water  
`rock-salt-dishes` · Minerals & Rocks · ES.4 · level 1 · 69 words · 4 questions

> (1) A class poured 50 mL of the same salt water into each of two shallow dishes. (2) Dish 1 sat on a warm, sunny windowsill and was dry in 2 days. (3) Dish 2 sat in a cool cabinet and was dry in 9 days. (4) Dish 1 held many tiny cube-shaped crystals, while Dish 2 held fewer, larger cubes. (5) When tapped gently, the crystals broke into smaller cubes with smooth sides.

1. **[ES.4.c.1 · LOTS]** The crystals in both dishes formed when —  
   _Skill: Describe how minerals form (cooling magma or lava, evaporation, precipitation, heat and pressure)_
   - A. melted rock cooled and hardened
   - B. heat and pressure changed old minerals
   - C. water evaporated and left dissolved minerals
   - D. rock fragments were pressed together
   - **Key: C**

2. **[ES.4.a.1 · LOTS]** The way the crystals broke in sentence 5 shows that this mineral has —  
   _Skill: Identify minerals by hardness, color, streak, luster, cleavage, fracture and special properties_
   - A. cleavage
   - B. fracture
   - C. double refraction
   - D. magnetism
   - **Key: A**

3. **[ES.4.c.2 · HOTS]** Which conclusion about crystal size is best supported by the results?  
   _Skill: Infer how and where a mineral formed from its crystal size and setting_
   - A. Warmer places always grow larger crystals.
   - B. Crystals that grow slowly become larger.
   - C. The amount of water sets the crystal shape.
   - D. Crystals stop growing once they form cubes.
   - **Key: B**

4. **[ES.4.b.1 · LOTS]** The mineral in the dishes is halite. Halite is mined mainly for use as —  
   _Skill: Describe the uses of common rock-forming and ore minerals_
   - A. lead for pencils
   - B. wallboard for houses
   - C. sand for window glass
   - D. table salt and road salt
   - **Key: D**

### A field trip rock kit  
`rock-field-trip-kit` · Minerals & Rocks · ES.5 · level 1 · 55 words · 4 questions

> (1) A rock kit from a Virginia field trip held three samples. (2) Sample 1, from the Blue Ridge, had large, interlocking crystals of pink feldspar, gray quartz and black mica. (3) Sample 2 was made of rounded sand grains held together by natural cement. (4) Sample 3 had light and dark minerals lined up in wavy, parallel bands.

1. **[ES.5.c.1 · LOTS]** Sample 2 is best classified as —  
   _Skill: Classify rocks as igneous, sedimentary or metamorphic by texture and composition_
   - A. an extrusive igneous rock
   - B. a clastic sedimentary rock
   - C. a foliated metamorphic rock
   - D. a chemical sedimentary rock
   - **Key: B**

2. **[ES.5.c.1 · LOTS]** Which rock type does Sample 3 belong to?  
   _Skill: Classify rocks as igneous, sedimentary or metamorphic by texture and composition_
   - A. foliated metamorphic, such as gneiss
   - B. intrusive igneous, such as granite
   - C. clastic sedimentary, such as sandstone
   - D. non-foliated metamorphic, such as marble
   - **Key: A**

3. **[ES.5.c.2 · HOTS]** The large crystals in Sample 1 are evidence that it formed —  
   _Skill: Infer the environment in which a rock formed from its texture and composition_
   - A. from lava that cooled quickly on the surface
   - B. from sediment that settled in layers in water
   - C. from magma that cooled slowly deep underground
   - D. from seawater that evaporated in a shallow basin
   - **Key: C**

4. **[ES.5.b.2 · HOTS]** Which series of processes could turn a rock like Sample 1 into a rock like Sample 2?  
   _Skill: Trace a pathway through the rock cycle and evaluate the rock cycle as a model_
   - A. melting into magma, then cooling quickly at the surface
   - B. heating and squeezing deep underground without melting
   - C. burial, melting, and then slow cooling deep underground
   - D. weathering and erosion, then deposition and cementation
   - **Key: D**

### A museum case of ores  
`rock-ore-display` · Minerals & Rocks · ES.4 · ES.5 · level 1 · 114 words · 5 questions

> (1) A science museum in Richmond set up a case of **ore minerals**, minerals that are mined because a useful metal can be removed from them at a profit. (2) A volunteer tested each sample with a streak plate and a hardness kit and listed the metal it supplies. (3) Her results are in the table. (4) A sign beside the case explains that most of the iron, lead and copper used today comes from deposits that took millions of years to form and are being mined much faster than new ones can form.
> 
> | Mineral | Metal | Streak | Hardness |
> |---|---|---|---|
> | Hematite | iron | reddish brown | 5.5–6.5 |
> | Magnetite | iron | black | 5.5–6.5 |
> | Galena | lead | lead gray | 2.5 |
> | Chalcopyrite | copper | greenish black | 3.5–4 |

1. **[ES.4.b.1 · LOTS]** According to the table, which mineral would a company mine to obtain copper?  
   _Skill: Describe the uses of common rock-forming and ore minerals_
   - A. galena
   - B. hematite
   - C. chalcopyrite
   - D. magnetite
   - **Key: C**

2. **[ES.4.a.2 · LOTS]** A visitor's unknown metallic sample has a hardness of about 2.5 and leaves a gray streak. Based on the table, it is most likely —  
   _Skill: Use an identification key or table to identify an unknown mineral_
   - A. galena
   - B. magnetite
   - C. hematite
   - D. chalcopyrite
   - **Key: A**

3. **[ES.4.a.3 · HOTS]** Hematite and magnetite can both look dark gray and metallic. Which test from the table best tells them apart?  
   _Skill: Analyze test results to tell apart minerals with similar properties_
   - A. a hardness test, because their hardness differs
   - B. a streak test, because their streaks differ
   - C. a label check, because their metals differ
   - D. a color check, because their colors differ
   - **Key: B**

4. **[ES.4.b.2 · HOTS]** Long ago, hematite was ground into powder to make red paint. Which property in the table best explains this use?  
   _Skill: Relate a mineral's properties to the way it is used_
   - A. its hardness of 5.5 to 6.5
   - B. the iron that it contains
   - C. its use as an ore mineral
   - D. its reddish-brown streak
   - **Key: D**

5. **[ES.5.a.1 · LOTS]** Which statement best explains the sign described in sentence 4?  
   _Skill: Explain that Earth materials are finite and are recycled and transformed over geologic time_
   - A. Ore deposits are nonrenewable because they form far more slowly than people use them.
   - B. Ore deposits are renewable because the rock cycle replaces them every few years.
   - C. Ore deposits are found only in Virginia, so the world supply is small.
   - D. Ore deposits form quickly but are hard to find deep underground.
   - **Key: A**


## Level 2 — average student (core)

### Cracks, rust and pits  
`rock-winter-hike` · Minerals & Rocks · ES.5 · level 2 · 99 words · 6 questions

> (1) On a winter hike in the Blue Ridge, a student found a granite boulder split by a crack that was filled with ice. (2) Water in the crack had frozen and thawed many times that season. (3) Nearby, a greenstone outcrop was covered with rusty orange stains where iron-bearing minerals were exposed to air and rain. (4) Later, in the Valley and Ridge, she saw gray limestone covered with smooth pits and small holes. (5) A sign said that rainwater, made slightly acidic by carbon dioxide, slowly dissolves this rock. (6) A stream at the bottom of the hill carried pebbles and sand away.

1. **[ES.5.d.1 · LOTS]** The crack in the granite boulder grew mainly because —  
   _Skill: Explain how physical and chemical weathering and erosion break down and move rock_
   - A. water expands when it freezes and pushes the rock apart
   - B. acid in rainwater dissolved the minerals in the granite
   - C. the boulder slowly melted during the warmest days
   - D. iron in the rock reacted with oxygen and turned to rust
   - **Key: A**

2. **[ES.5.d.1 · LOTS]** The rusty stains in sentence 3 are evidence of —  
   _Skill: Explain how physical and chemical weathering and erosion break down and move rock_
   - A. frost wedging, a type of physical weathering
   - B. oxidation, a type of chemical weathering
   - C. deposition of iron by a moving stream
   - D. abrasion of the rock by wind-blown sand
   - **Key: B**

3. **[ES.5.d.2 · HOTS]** Which statement best explains why the limestone is pitted while the granite in sentence 1 is not?  
   _Skill: Analyze how plate tectonic settings and surface processes produce particular rocks_
   - A. Limestone is an igneous rock that cools into pitted shapes.
   - B. Granite is softer than limestone, so it wears down evenly.
   - C. Granite forms at the surface, where rainwater cannot reach it.
   - D. Limestone is mostly calcite, which dissolves in weak carbonic acid.
   - **Key: D**

4. **[ES.5.d.2 · HOTS]** Based on sentences 1 and 2, in which setting would ice most likely break rock the fastest?  
   _Skill: Analyze how plate tectonic settings and surface processes produce particular rocks_
   - A. a hot desert where it never drops below freezing
   - B. a polar ice sheet that stays frozen all year
   - C. a mountain where it freezes at night and thaws by day
   - D. a tropical rain forest that is warm and wet all year
   - **Key: C**

5. **[ES.5.b.1 · LOTS]** In sentence 6, the stream moving pebbles and sand downhill is an example of —  
   _Skill: Describe the processes of the rock cycle (weathering, erosion, deposition, compaction and cementation, melting, heat and pressure)_
   - A. compaction
   - B. erosion
   - C. cementation
   - D. crystallization
   - **Key: B**

6. **[ES.5.a.1 · LOTS]** Calcite dissolved from the limestone can later build new rock, such as cave formations. This shows that Earth materials are —  
   _Skill: Explain that Earth materials are finite and are recycled and transformed over geologic time_
   - A. recycled into new forms rather than used up for good
   - B. created brand new each time a rainstorm passes
   - C. destroyed completely by chemical weathering
   - D. replaced by living things within a few weeks
   - **Key: A**

### Mining Virginia  
`rock-virginia-map` · Minerals & Rocks · ES.4 · ES.5 · level 2 · 95 words · 5 questions

> (1) A student made a map of mineral resources mined in Virginia. (2) In the Piedmont, **kyanite** is mined at Willis Mountain in Buckingham County and used to make bricks and linings that hold up inside very hot furnaces and kilns. (3) Also in Buckingham County, dark gray slate splits into thin, flat sheets that have been used for roofing for more than a century. (4) In the Valley and Ridge, limestone is quarried, crushed for gravel and heated to make cement. (5) On the Coastal Plain, heavy dark sand grains of **ilmenite** are mined as a source of titanium.

1. **[ES.4.b.1 · LOTS]** According to the map, ilmenite is mined in Virginia as a source of —  
   _Skill: Describe the uses of common rock-forming and ore minerals_
   - A. the metal iron
   - B. the metal titanium
   - C. the metal copper
   - D. the metal lead
   - **Key: B**

2. **[ES.4.b.2 · HOTS]** Which property of kyanite best explains its use in furnace linings?  
   _Skill: Relate a mineral's properties to the way it is used_
   - A. It stays solid and strong at very high temperatures.
   - B. It is soft enough to scratch with a fingernail.
   - C. It is pulled strongly toward a magnet.
   - D. It dissolves quickly in warm water.
   - **Key: A**

3. **[ES.5.c.1 · LOTS]** The slate described in sentence 3 is a —  
   _Skill: Classify rocks as igneous, sedimentary or metamorphic by texture and composition_
   - A. non-foliated metamorphic rock formed from limestone
   - B. clastic sedimentary rock formed from sand grains
   - C. foliated metamorphic rock formed from shale
   - D. extrusive igneous rock formed from lava
   - **Key: C**

4. **[ES.5.a.1 · LOTS]** Which statement about Virginia's kyanite and limestone deposits is most accurate?  
   _Skill: Explain that Earth materials are finite and are recycled and transformed over geologic time_
   - A. A quarry's deposit grows back within a few decades after it closes.
   - B. They are renewable because new rock forms somewhere every day.
   - C. They will never run out because rock is found everywhere.
   - D. Once a deposit is used up, it cannot be replaced on a human time scale.
   - **Key: D**

5. **[ES.5.d.2 · HOTS]** The ilmenite grains on the Coastal Plain most likely got there because —  
   _Skill: Analyze how plate tectonic settings and surface processes produce particular rocks_
   - A. they crystallized from lava erupting on the Coastal Plain
   - B. they formed when seawater evaporated in tidal pools
   - C. rivers carried them from weathered rocks farther inland
   - D. acid rain dissolved limestone and left them behind
   - **Key: C**

### Crystals on cold glass  
`rock-salol-slides` · Minerals & Rocks · ES.4 · ES.5 · level 2 · 151 words · 6 questions

> (1) A student investigated how cooling rate affects crystal size using salol, a white solid that melts at about 42 °C. (2) She melted the salol in a warm water bath and placed 5 drops on each of three glass slides. (3) One slide had been warmed to 40 °C, one was at room temperature (22 °C), and one had been chilled on ice (2 °C). (4) She timed how long the liquid took to become solid, then measured the longest crystals with a hand lens and a ruler. (5) She repeated the test three times and recorded the averages in the table. (6) Her teacher explained that the slides model how melted rock cools: magma deep underground loses heat slowly, while lava at the surface loses heat quickly.
> 
> | Slide | Time to become solid | Crystal length |
> |---|---|---|
> | Warm (40 °C) | 9 min | 4.0 mm |
> | Room (22 °C) | 2 min | 1.5 mm |
> | Chilled (2 °C) | 20 s | 0.2 mm |

1. **[ES.4.c.1 · LOTS]** Which statement describes the pattern in the table?  
   _Skill: Describe how minerals form (cooling magma or lava, evaporation, precipitation, heat and pressure)_
   - A. The slower the salol cooled, the larger its crystals grew.
   - B. The faster the salol cooled, the larger its crystals grew.
   - C. Crystal length stayed about the same on all three slides.
   - D. The chilled slide took the longest time to become solid.
   - **Key: A**

2. **[ES.4.c.1 · LOTS]** Why did the student place the same number of drops on every slide?  
   _Skill: Describe how minerals form (cooling magma or lava, evaporation, precipitation, heat and pressure)_
   - A. so the salol would cool faster on every slide
   - B. so she would not need to repeat any trials
   - C. so the crystals would all grow to one size
   - D. so slide temperature was the only thing changed
   - **Key: D**

3. **[ES.4.c.2 · HOTS]** A mineral sample has crystals too small to see without a microscope. Based on this lab, the mineral most likely formed —  
   _Skill: Infer how and where a mineral formed from its crystal size and setting_
   - A. from magma that cooled slowly deep underground
   - B. from lava that cooled quickly at Earth's surface
   - C. from seawater that evaporated over many years
   - D. from melted rock that cooled at a steady 40 °C
   - **Key: B**

4. **[ES.5.c.2 · HOTS]** Which slide best models the formation of granite, an igneous rock with crystals large enough to see easily?  
   _Skill: Infer the environment in which a rock formed from its texture and composition_
   - A. the chilled slide, because granite forms from lava on the surface
   - B. the warm slide, because granite forms from magma cooling underground
   - C. the room-temperature slide, because granite forms at everyday air temperatures
   - D. the chilled slide, because granite forms where ocean water cools magma
   - **Key: B**

5. **[ES.5.b.1 · LOTS]** In the rock cycle, the step modeled by the liquid salol turning solid is —  
   _Skill: Describe the processes of the rock cycle (weathering, erosion, deposition, compaction and cementation, melting, heat and pressure)_
   - A. weathering and erosion
   - B. compaction and cementation
   - C. cooling and crystallization
   - D. heat and pressure
   - **Key: C**

6. **[ES.5.c.2 · HOTS]** An igneous rock has a few large crystals scattered in a mass of tiny crystals. Based on the lab, which history best explains this texture?  
   _Skill: Infer the environment in which a rock formed from its texture and composition_
   - A. It cooled quickly at the surface, then slowly far underground.
   - B. It cooled at one steady rate from start to finish.
   - C. It never melted, so its crystals were squeezed into place.
   - D. It cooled slowly underground, then quickly after it erupted.
   - **Key: D**

### The mineral test kit  
`rock-mystery-kit` · Minerals & Rocks · ES.4 · level 2 · 161 words · 6 questions

> (1) A student was given four unknown mineral samples and a testing kit. (2) The kit held a streak plate, a magnet, a dropper of dilute hydrochloric acid and a chart of the Mohs hardness scale. (3) Wearing goggles, she recorded the hardness, streak and other properties of each sample in the table. (4) Samples 2 and 4 were both white and glassy, and by eye they were almost impossible to tell apart. (5) When she set a clear piece of Sample 2 on a printed page, every letter under it appeared twice. (6) Her teacher said that one sample came from a thick layer found between beds of gypsum and shale in an old mine. (7) That layer, the teacher added, formed in a dry climate long ago.
> 
> | Sample | Hardness | Streak | Other properties |
> |---|---|---|---|
> | 1 | 7 | colorless | breaks along curved, shell-like surfaces |
> | 2 | 3 | white | fizzes in acid; breaks into slanted blocks |
> | 3 | 6 | black | pulled toward the magnet |
> | 4 | 2.5 | white | breaks into cubes; dissolves in water |

1. **[ES.4.a.1 · LOTS]** The curved, shell-like surfaces on Sample 1 show that it breaks by —  
   _Skill: Identify minerals by hardness, color, streak, luster, cleavage, fracture and special properties_
   - A. fracture rather than cleavage
   - B. cleavage in three directions
   - C. splitting into thin, flat sheets
   - D. reacting with the dilute acid
   - **Key: A**

2. **[ES.4.a.2 · LOTS]** Using the table and the Mohs scale, Sample 2 is most likely —  
   _Skill: Use an identification key or table to identify an unknown mineral_
   - A. quartz
   - B. gypsum
   - C. fluorite
   - D. calcite
   - **Key: D**

3. **[ES.4.a.3 · HOTS]** Which test would be LEAST useful for telling Sample 2 from Sample 4?  
   _Skill: Analyze test results to tell apart minerals with similar properties_
   - A. placing a drop of acid on each
   - B. rubbing each on the streak plate
   - C. dropping a piece of each in water
   - D. comparing the shapes of broken pieces
   - **Key: B**

4. **[ES.4.a.1 · LOTS]** The observation in sentence 5 is a special property called —  
   _Skill: Identify minerals by hardness, color, streak, luster, cleavage, fracture and special properties_
   - A. magnetism
   - B. fluorescence
   - C. double refraction
   - D. effervescence
   - **Key: C**

5. **[ES.4.b.2 · HOTS]** Sample 3 is an iron ore. Which property would make it easiest to separate Sample 3 grains from crushed waste rock at a mine?  
   _Skill: Relate a mineral's properties to the way it is used_
   - A. its black streak
   - B. its hardness of 6
   - C. its pull toward a magnet
   - D. its dark color
   - **Key: C**

6. **[ES.4.c.2 · HOTS]** Based on sentences 6 and 7 and the table, which sample most likely came from the layer in the old mine, and how did it form?  
   _Skill: Infer how and where a mineral formed from its crystal size and setting_
   - A. Sample 4; it formed as water in a shallow sea evaporated
   - B. Sample 1; it formed as magma cooled slowly underground
   - C. Sample 3; it formed as lava cooled quickly at the surface
   - D. Sample 2; it formed under great heat and pressure
   - **Key: A**


## Level 3 — stretch

### The crayon rock cycle  
`rock-crayon-cycle` · Minerals & Rocks · ES.5 · level 3 · 137 words · 6 questions

> (1) To model the rock cycle, a class used old crayons. (2) First, they scraped the crayons with a plastic knife into small shavings of several colors. (3) They pressed a handful of shavings firmly inside a sheet of foil to make a crumbly block in which each shaving could still be seen. (4) Next, they wrapped a second block in foil, set it in warm water for two minutes and squeezed it hard between two heavy books; the colors smeared into flattened streaks, but the wax never became liquid. (5) Finally, the teacher melted a third block in a foil cup over hot water and let it cool into a solid blob with no separate shavings. (6) The same crayon wax was used again and again in every step, and no new wax was added. (7) The whole activity took one class period.

1. **[ES.5.b.1 · LOTS]** In the model, pressing the shavings into a crumbly block in sentence 3 represents —  
   _Skill: Describe the processes of the rock cycle (weathering, erosion, deposition, compaction and cementation, melting, heat and pressure)_
   - A. melting and cooling of magma
   - B. compaction and cementation of sediment
   - C. heat and pressure deep in the crust
   - D. weathering of rock at the surface
   - **Key: B**

2. **[ES.5.c.1 · LOTS]** The streaked block in sentence 4 stands for a metamorphic rock. Which real metamorphic rock forms from limestone?  
   _Skill: Classify rocks as igneous, sedimentary or metamorphic by texture and composition_
   - A. marble
   - B. slate
   - C. quartzite
   - D. gneiss
   - **Key: A**

3. **[ES.5.b.2 · HOTS]** Which pathway could change a sandstone into an igneous rock?  
   _Skill: Trace a pathway through the rock cycle and evaluate the rock cycle as a model_
   - A. weathering into sand, then compaction and cementation
   - B. heating and squeezing that stop before the rock melts
   - C. more cement added by minerals in moving groundwater
   - D. deep burial and heating until it melts, then cooling
   - **Key: D**

4. **[ES.5.b.2 · HOTS]** Which statement describes the most important limitation of the crayon model?  
   _Skill: Trace a pathway through the rock cycle and evaluate the rock cycle as a model_
   - A. It shows sediment, which real rocks never break down into.
   - B. It includes melting, which never happens inside the real Earth.
   - C. Its changes take minutes; real ones take thousands of years or more.
   - D. It shows that one type of rock can change into another type.
   - **Key: C**

5. **[ES.5.a.1 · LOTS]** Sentence 6 best represents the idea that —  
   _Skill: Explain that Earth materials are finite and are recycled and transformed over geologic time_
   - A. new rock material is added to Earth mostly from space
   - B. Earth's rock material is finite and is recycled into new rocks
   - C. each type of rock can form only once in Earth's history
   - D. rock material that melts is lost from Earth for good
   - **Key: B**

6. **[ES.5.d.2 · HOTS]** On Earth, the melting step modeled in sentence 5 most likely happens —  
   _Skill: Analyze how plate tectonic settings and surface processes produce particular rocks_
   - A. where an ocean plate sinks into the mantle at a subduction zone
   - B. on a lake bottom where thin layers of mud slowly settle
   - C. in a desert where wind piles loose sand into tall dunes
   - D. in a limestone cave where groundwater drips from the roof
   - **Key: A**

### From the Piedmont to the Valley  
`rock-richmond-to-valley` · Minerals & Rocks · ES.5 · level 3 · 190 words · 6 questions

> (1) A geology class drove west from Richmond to the Shenandoah Valley and described one rock at each stop. (2) Stop 1, in the Piedmont, was a shiny schist with flat flakes of mica lined up in parallel and a few small red garnet crystals. (3) Stop 2, in Buckingham County, was a dark gray slate that split into thin, smooth sheets. (4) Stop 3, in the Blue Ridge, had two rocks side by side: a coarse granite with crystals up to 2 cm long, and a green rock called **greenstone**. (5) A sign explained that the greenstone began as basalt lava flows about 570 million years ago and was later changed by heat and pressure, without melting, when the Appalachian Mountains formed. (6) Stop 4, in the Valley and Ridge, was gray limestone full of fossil shells; drops of dilute acid fizzed on it, and a cave entrance opened in the hillside nearby. (7) Stop 5, on a ridge top, was a hard sandstone made mostly of rounded quartz grains. (8) The class noticed that across the Valley and Ridge, the long ridges are capped by sandstone, while the valleys between them are floored by limestone.

1. **[ES.5.c.1 · LOTS]** Which TWO rocks from the trip are foliated metamorphic rocks? Select TWO.  
   _Skill: Classify rocks as igneous, sedimentary or metamorphic by texture and composition_
   - A. the schist at Stop 1
   - B. the slate at Stop 2
   - C. the granite at Stop 3
   - D. the sandstone at Stop 5
   - **Key: A and B**

2. **[ES.5.c.2 · HOTS]** The 2 cm crystals in the granite at Stop 3 are evidence that the granite formed —  
   _Skill: Infer the environment in which a rock formed from its texture and composition_
   - A. from lava that cooled quickly on the surface
   - B. from sand grains cemented together in water
   - C. from magma that cooled slowly far below the surface
   - D. from limestone squeezed during mountain building
   - **Key: C**

3. **[ES.5.d.2 · HOTS]** Which statement best explains the pattern described in sentence 8?  
   _Skill: Analyze how plate tectonic settings and surface processes produce particular rocks_
   - A. Limestone is harder than sandstone, so it sinks into the valleys.
   - B. Sandstone forms only on hilltops, and limestone forms only in valleys.
   - C. Rivers laid down limestone in the valleys after the ridges formed.
   - D. Quartz sandstone resists weathering, but limestone dissolves in weak acid.
   - **Key: D**

4. **[ES.5.b.2 · HOTS]** Which sequence best describes the history of the greenstone in sentence 5?  
   _Skill: Trace a pathway through the rock cycle and evaluate the rock cycle as a model_
   - A. sediment was cemented into rock, which then melted and cooled
   - B. lava cooled into basalt, which heat and pressure then changed
   - C. magma cooled into granite, which then weathered into sediment
   - D. basalt melted into lava, which then cooled into a new igneous rock
   - **Key: B**

5. **[ES.5.c.1 · LOTS]** The slate at Stop 2 most likely formed from which parent rock?  
   _Skill: Classify rocks as igneous, sedimentary or metamorphic by texture and composition_
   - A. shale
   - B. granite
   - C. limestone
   - D. sandstone
   - **Key: A**

6. **[ES.5.d.1 · LOTS]** The cave near Stop 4 most likely formed when —  
   _Skill: Explain how physical and chemical weathering and erosion break down and move rock_
   - A. frost wedging split the limestone into large blocks
   - B. lava drained out of a tube beneath a cooled crust
   - C. groundwater holding carbonic acid dissolved the limestone
   - D. wind-blown sand slowly carved a hollow in the cliff
   - **Key: C**

### A granite countertop  
`rock-granite-countertop` · Minerals & Rocks · ES.4 · ES.5 · level 3 · 175 words · 6 questions

> (1) A company sells polished granite countertops cut from a quarry in the Virginia Piedmont. (2) The granite formed hundreds of millions of years ago when a large body of magma cooled slowly deep underground. (3) It contains three main minerals: pink orthoclase feldspar (hardness 6), gray quartz (hardness 7) and thin black flakes of biotite mica (hardness 2.5–3). (4) All three are **silicate** minerals, built from silicon and oxygen, the two most abundant elements in Earth's crust. (5) On a broken edge, the feldspar shows flat, smooth surfaces that flash in the light, while the quartz shows curved, glassy surfaces. (6) A buyer rubbed a steel knife (hardness about 5.5) across a scrap piece: the knife scratched the mica but left no mark on the feldspar or the quartz. (7) Old scraps piled outside the quarry office show changes over time. (8) On scraps left out for decades, many feldspar grains have turned into soft, white clay, while the quartz grains still look fresh. (9) Rain washes the loose quartz grains into a nearby creek, where they collect as sand on a sandbar.

1. **[ES.4.a.1 · LOTS]** The feldspar surfaces described in sentence 5 are evidence that feldspar has —  
   _Skill: Identify minerals by hardness, color, streak, luster, cleavage, fracture and special properties_
   - A. fracture
   - B. a white streak
   - C. cleavage
   - D. double refraction
   - **Key: C**

2. **[ES.4.a.3 · HOTS]** Which conclusion is supported by the knife test in sentence 6?  
   _Skill: Analyze test results to tell apart minerals with similar properties_
   - A. The mica is softer than the knife; feldspar and quartz are harder.
   - B. The feldspar is harder than the quartz because the knife missed it.
   - C. The knife is harder than all three minerals found in the granite.
   - D. The quartz and the mica have about the same hardness as each other.
   - **Key: A**

3. **[ES.4.b.2 · HOTS]** Which property makes this granite a good choice for a kitchen countertop?  
   _Skill: Relate a mineral's properties to the way it is used_
   - A. It contains mica, which bends and flakes off easily.
   - B. Its minerals dissolve in water, so spills wipe away.
   - C. It is a sedimentary rock that splits into thin slabs.
   - D. Its feldspar and quartz are harder than a steel knife.
   - **Key: D**

4. **[ES.4.b.1 · LOTS]** Quartz sand like the grains on the sandbar is the main raw material for making —  
   _Skill: Describe the uses of common rock-forming and ore minerals_
   - A. drywall
   - B. glass
   - C. table salt
   - D. pencil lead
   - **Key: B**

5. **[ES.5.d.1 · LOTS]** The change in the feldspar described in sentence 8 is an example of —  
   _Skill: Explain how physical and chemical weathering and erosion break down and move rock_
   - A. chemical weathering, which forms new minerals
   - B. physical weathering by frost wedging
   - C. erosion of grains by running water
   - D. metamorphism by heat and pressure
   - **Key: A**

6. **[ES.5.b.2 · HOTS]** Suppose the sand on the sandbar is buried and cemented, then much later heated and squeezed without melting. It would most likely become —  
   _Skill: Trace a pathway through the rock cycle and evaluate the rock cycle as a model_
   - A. shale, then slate
   - B. limestone, then marble
   - C. sandstone, then quartzite
   - D. basalt, then greenstone
   - **Key: C**


---

# Resources & Fresh Water (ES.6 · ES.8)

Standards in this unit:

- ES.6.a — global resource use has environmental liabilities and benefits
- ES.6.b — availability, renewal rates, and economic effects are considerations when using resources
- ES.6.c — use of resources in Virginia has environmental and economic impacts
- ES.6.d — energy sources have environmental and economic effects
- ES.8.a — water impacts geologic processes including soil development and karst topography
- ES.8.b — subsurface materials affect groundwater and the water supply
- ES.8.c — weather and human use affect the location, quality, and supply of fresh water
- ES.8.d — stream processes shape Virginia's major watersheds, including the Chesapeake Bay


## Level 1 — foundation

### Virginia's resource table  
`res-virginia-resource-table` · Resources & Fresh Water · ES.6 · level 1 · 97 words · 5 questions

> (1) A student made a table of resources produced in Virginia. (2) A **renewable** resource is replaced by nature about as fast as people use it. (3) Kyanite, mined in the Piedmont, is used to make heat-resistant bricks and ceramics. (4) Virginia sets yearly limits on how many oysters may be harvested from the Chesapeake Bay.
> 
> | Resource | Where found | Time to form or regrow |
> |---|---|---|
> | Coal | Appalachian Plateau | millions of years |
> | Kyanite | Piedmont | millions of years |
> | Titanium sands | Coastal Plain | millions of years |
> | Pine timber | across the state | about 30 years |
> | Oysters | Chesapeake Bay | 2 to 3 years to reach market size |

1. **[ES.6.c.1 · LOTS]** According to the table, coal in Virginia is mined in the —  
   _Skill: Identify Virginia's major resources and where in Virginia they are found_
   - A. Coastal Plain
   - B. Blue Ridge
   - C. Appalachian Plateau
   - D. Valley and Ridge
   - **Key: C**

2. **[ES.6.b.1 · LOTS]** Which resource in the table is renewable?  
   _Skill: Classify resources as renewable or nonrenewable and explain their renewal rates_
   - A. coal
   - B. pine timber
   - C. kyanite
   - D. titanium sands
   - **Key: B**

3. **[ES.6.c.1 · LOTS]** Based on the passage, kyanite from Virginia is mainly used to make —  
   _Skill: Identify Virginia's major resources and where in Virginia they are found_
   - A. heat-resistant bricks and ceramics
   - B. white pigment for paint and paper
   - C. fuel for electric power plants
   - D. fertilizer for corn and soybeans
   - **Key: A**

4. **[ES.6.b.2 · HOTS]** A county's pine forests take about 30 years to regrow, so roughly 3 percent of the forest can be replaced each year. If the county cuts 5 percent of its forest every year, its supply of mature timber will most likely —  
   _Skill: Analyze data on availability, renewal rate and cost to support a resource decision_
   - A. grow larger, because each cut area is replanted at once
   - B. stay the same, because pine is a renewable resource
   - C. turn into coal within a few hundred more years
   - D. shrink, because cutting is faster than regrowth
   - **Key: D**

5. **[ES.6.c.2 · HOTS]** Which statement best explains how the oyster limits in sentence 4 help Virginia's seafood economy over time?  
   _Skill: Analyze the environmental and economic impacts of using a resource in Virginia_
   - A. They keep harvests below the rate oysters are replaced, so harvests can go on for years.
   - B. They make oysters a nonrenewable resource, so each oyster sells for a higher price.
   - C. They let watermen take every oyster in a single year, before prices have a chance to drop.
   - D. They keep oysters from growing to market size, so more of them can fit in the Bay.
   - **Key: A**

### A soil pit in a Piedmont field  
`res-soil-pit-piedmont` · Resources & Fresh Water · ES.6 · ES.8 · level 1 · 70 words · 5 questions

> (1) Students dug a 1.5 m pit in a flat Piedmont field. (2) The top layer was dark, crumbly soil mixed with roots and decayed plant matter. (3) Below it lay a reddish layer rich in clay that water had carried down from above. (4) Next came broken, partly weathered granite, and at the bottom was solid granite **bedrock**. (5) A few centimeters of soil like this can take hundreds of years to form.

1. **[ES.8.a.1 · LOTS]** The dark layer described in sentence 2 is the —  
   _Skill: Describe how soil develops and the layers of a soil profile_
   - A. A horizon, or topsoil
   - B. B horizon, or subsoil
   - C. C horizon, or weathered rock
   - D. bedrock beneath the soil
   - **Key: A**

2. **[ES.8.a.1 · LOTS]** The mineral grains in this soil most likely came from —  
   _Skill: Describe how soil develops and the layers of a soil profile_
   - A. sand blown in from the Coastal Plain
   - B. decayed leaves and roots in the top layer
   - C. weathering of the granite beneath the field
   - D. limestone washed in from the Valley and Ridge
   - **Key: C**

3. **[ES.6.b.1 · LOTS]** Based on sentence 5, why is soil often treated as a nonrenewable resource?  
   _Skill: Classify resources as renewable or nonrenewable and explain their renewal rates_
   - A. It forms only on the floors of lakes and oceans.
   - B. It forms far more slowly than it can be lost to erosion.
   - C. It is made mostly of fossil fuels such as coal.
   - D. It can no longer hold water once it has been plowed.
   - **Key: B**

4. **[ES.8.a.3 · HOTS]** The same kind of granite lies beneath a cold, dry region. Compared with the soil in the Piedmont pit, the soil there would most likely be —  
   _Skill: Analyze how climate, parent rock, slope and time affect soil and karst development_
   - A. thicker, because cold temperatures speed up chemical weathering
   - B. the same, because soil depends only on the type of parent rock
   - C. thicker, because dry air adds more decayed leaves to the surface
   - D. thinner, because chemical weathering is slow in cold, dry places
   - **Key: D**

5. **[ES.6.a.2 · HOTS]** A farmer plans to clear the trees from a steep hillside to plant corn. Which is the best evaluation of this plan?  
   _Skill: Evaluate the trade-offs of using a resource_
   - A. It adds cropland, but bare soil on the slope may erode much faster than new soil forms.
   - B. It has no real risk, because soil on a hillside is fully replaced every few years.
   - C. It will make the soil thicker, because tree roots no longer hold the soil in place.
   - D. It will not change erosion, because the slope of land does not affect running water.
   - **Key: A**

### Where does a raindrop go?  
`res-raindrop-divide` · Resources & Fresh Water · ES.8 · level 1 · 63 words · 5 questions

> (1) A **watershed** is all the land that drains into one body of water. (2) Rain near Richmond flows into the James River and then the Chesapeake Bay. (3) Rain near Abingdon, in southwest Virginia, flows to the Holston, Tennessee, Ohio and Mississippi rivers. (4) High ground called a **divide** separates the two watersheds. (5) Where the James slows near the Bay, mud settles out of the water.

1. **[ES.8.d.1 · LOTS]** According to sentence 2, the James River empties into the —  
   _Skill: Identify watershed boundaries and Virginia's major watersheds_
   - A. Gulf of Mexico
   - B. Chesapeake Bay
   - C. Ohio River
   - D. Holston River
   - **Key: B**

2. **[ES.8.d.1 · LOTS]** A divide is best described as —  
   _Skill: Identify watershed boundaries and Virginia's major watersheds_
   - A. high ground that separates two watersheds
   - B. the place where a river empties into a bay
   - C. a low area where water collects after rain
   - D. the line where fresh water meets seawater
   - **Key: A**

3. **[ES.8.d.1 · LOTS]** Which river is also part of the Chesapeake Bay watershed?  
   _Skill: Identify watershed boundaries and Virginia's major watersheds_
   - A. the Tennessee
   - B. the Holston
   - C. the Mississippi
   - D. the Rappahannock
   - **Key: D**

4. **[ES.8.c.2 · HOTS]** During a storm, extra fertilizer washes off a farm field near Richmond. Based on the passage, where would the fertilizer most likely end up?  
   _Skill: Evaluate how weather events and human activities affect freshwater quality and supply_
   - A. in the Gulf of Mexico, by way of the Ohio River
   - B. in the Holston River of southwest Virginia
   - C. in the Chesapeake Bay, by way of the James River
   - D. on top of the divide between the two watersheds
   - **Key: C**

5. **[ES.8.d.2 · HOTS]** If mud keeps settling where the James slows (sentence 5) for hundreds of years, that area will most likely —  
   _Skill: Analyze how stream erosion and deposition shape a watershed_
   - A. become shallower as mud builds up new marshy land
   - B. become a deep canyon carved by the slow water
   - C. move upstream into the mountains near Abingdon
   - D. stay the same, because the mud dissolves in salt water
   - **Key: A**

### Sand, gravel and clay in a column  
`res-porosity-columns` · Resources & Fresh Water · ES.8 · level 1 · 132 words · 6 questions

> (1) Students filled identical plastic cylinders with 100 mL of dry gravel, sand or clay collected beside a Virginia stream. (2) To measure **porosity**, they slowly poured water into each cylinder until the sediment was just covered and recorded how much water it took. (3) To compare **permeability**, they then opened a small hole in the bottom of each cylinder and timed how long 25 mL of water took to drain out. (4) They also tested a mix of equal parts gravel and sand. (5) The gravel had come from the stream channel, and the clay from the flat floodplain beside it.
> 
> | Sediment | Water held (mL) | Time for 25 mL to drain |
> |---|---|---|
> | Gravel | 32 | 6 s |
> | Sand | 36 | 45 s |
> | Clay | 48 | did not drain in 10 min |
> | Gravel and sand mix | 22 | 30 s |

1. **[ES.8.b.1 · LOTS]** Which was kept the same for every sediment to make the comparison fair?  
   _Skill: Describe the zone of aeration, zone of saturation, water table, aquifers, porosity and permeability_
   - A. the type of sediment in each cylinder
   - B. the volume of sediment in each cylinder
   - C. the time the water took to drain out
   - D. the amount of water each sediment held
   - **Key: B**

2. **[ES.8.b.1 · LOTS]** According to the table, which sediment was the most permeable?  
   _Skill: Describe the zone of aeration, zone of saturation, water table, aquifers, porosity and permeability_
   - A. gravel
   - B. sand
   - C. clay
   - D. the gravel and sand mix
   - **Key: A**

3. **[ES.8.b.2 · HOTS]** Which conclusion is best supported by the results for clay?  
   _Skill: Analyze porosity and permeability data to predict groundwater movement and supply_
   - A. Clay holds little water because its grains are so tiny.
   - B. The more water a sediment holds, the faster water drains through it.
   - C. Clay would be the best layer to tap with a drinking-water well.
   - D. A sediment with high porosity can still have very low permeability.
   - **Key: D**

4. **[ES.8.b.2 · HOTS]** Which statement best explains why the gravel and sand mix held less water than either sediment alone?  
   _Skill: Analyze porosity and permeability data to predict groundwater movement and supply_
   - A. Mixing the two sediments made each grain grow larger.
   - B. Sand grains filled many of the spaces between the gravel.
   - C. Gravel soaks water into the inside of each of its pieces.
   - D. Water drained out of the mix before it could be measured.
   - **Key: B**

5. **[ES.8.c.1 · LOTS]** A county wants to build a landfill where leaking liquid is least likely to reach the groundwater. Based on the data, the best material to lie beneath the landfill is a thick layer of —  
   _Skill: Identify sources of freshwater pollution and ways to conserve and protect fresh water_
   - A. gravel
   - B. sand
   - C. clay
   - D. gravel mixed with sand
   - **Key: C**

6. **[ES.8.d.2 · HOTS]** Sentence 5 says the gravel came from the stream channel and the clay from the floodplain. Which statement best explains this pattern?  
   _Skill: Analyze how stream erosion and deposition shape a watershed_
   - A. Fast channel water carries clay away; slow floodwater on the floodplain lets it settle.
   - B. Clay forms in place on the floodplain when gravel there slowly weathers into fine mud.
   - C. Floods push gravel onto the floodplain and leave the fine clay behind in the channel.
   - D. Clay grains are heavier than gravel, so they sink first wherever the water runs deep.
   - **Key: A**


## Level 2 — average student (core)

### Sinkholes and springs in the Shenandoah Valley  
`res-shenandoah-karst` · Resources & Fresh Water · ES.6 · ES.8 · level 2 · 100 words · 6 questions

> (1) The Shenandoah Valley, in the Valley and Ridge province, is underlain by thick layers of limestone. (2) Rainwater absorbs carbon dioxide from the air and soil, forming weak **carbonic acid** that slowly dissolves limestone along cracks. (3) Over thousands of years this has produced caverns, sinkholes and springs. (4) A creek on one farm flows into a sinkhole and disappears underground. (5) Geologists poured a harmless green dye into the sinkhole, and it appeared in a spring 3 km away only 20 hours later. (6) Nearby, a quarry mines the same limestone and pumps groundwater out of its pit so that workers can dig deeper.

1. **[ES.8.a.2 · LOTS]** According to sentence 2, carbonic acid forms when —  
   _Skill: Explain how karst topography (sinkholes, caves, springs) forms in limestone_
   - A. limestone dissolves in fresh water
   - B. rainwater absorbs carbon dioxide
   - C. a cavern roof collapses in a field
   - D. a quarry crushes limestone into lime
   - **Key: B**

2. **[ES.8.a.2 · LOTS]** Which statement best describes how most sinkholes in the valley form?  
   _Skill: Explain how karst topography (sinkholes, caves, springs) forms in limestone_
   - A. Wind blows away the loose soil from a dry, bare farm field.
   - B. Colliding plates push rock layers up into a ridge.
   - C. Ground collapses into a space where limestone dissolved.
   - D. A river drops sediment in a low, round basin.
   - **Key: C**

3. **[ES.8.a.3 · HOTS]** The Blue Ridge, just east of the valley, is mostly granite and other rocks that do not dissolve easily in weak acid. Compared with the valley, the Blue Ridge most likely has —  
   _Skill: Analyze how climate, parent rock, slope and time affect soil and karst development_
   - A. fewer caverns and sinkholes, because its rock resists carbonic acid
   - B. more caverns, because granite has more cracks than limestone does
   - C. more sinkholes, because it receives more rain than the valley does
   - D. the same karst features, because both areas receive the same rain
   - **Key: A**

4. **[ES.8.c.2 · HOTS]** A farmer spreads manure beside the sinkhole just before a heavy rain. Based on the dye test, which result is most likely?  
   _Skill: Evaluate how weather events and human activities affect freshwater quality and supply_
   - A. Thick soil will filter out the manure long before it reaches any water.
   - B. Bacteria from the manure could reach the spring within about a day.
   - C. The manure will stay trapped in the sinkhole for thousands of years.
   - D. The rain will carry the manure east into the rocks of the Blue Ridge.
   - **Key: B**

5. **[ES.6.c.1 · LOTS]** Which statement about Virginia's limestone resource is accurate?  
   _Skill: Identify Virginia's major resources and where in Virginia they are found_
   - A. It is mined on the Coastal Plain as a source of titanium.
   - B. It is burned in power plants to generate the state's electricity.
   - C. It formed from cooled lava flows in the Blue Ridge.
   - D. It is quarried in the Valley and Ridge for stone and lime.
   - **Key: D**

6. **[ES.6.c.2 · HOTS]** The quarry in sentence 6 provides jobs and stone for roads. Which is the most likely environmental cost of its pumping in this karst area?  
   _Skill: Analyze the environmental and economic impacts of using a resource in Virginia_
   - A. Nearby wells may go dry, and new sinkholes may open as the water table drops.
   - B. The limestone will stop dissolving forever once the groundwater is removed.
   - C. Nearby springs will flow faster because less groundwater is left to feed them.
   - D. The rock will turn soft and crumbly, so the quarry will produce less stone.
   - **Key: A**

### Comparing Virginia's power sources  
`res-power-sources-table` · Resources & Fresh Water · ES.6 · level 2 · 133 words · 6 questions

> (1) A Virginia utility compared six ways to generate electricity. (2) In coal and natural gas plants, burning fuel boils water into steam that spins a turbine connected to a generator. (3) Nuclear plants, such as those at North Anna and Surry, also make steam, using heat released when uranium atoms split. (4) Solar panels change sunlight directly into electricity, while wind turbines, including those off Virginia Beach, are turned by moving air. (5) Hydroelectric dams use falling water to spin turbines. (6) The table gives the approximate carbon dioxide released over each source's whole life cycle.
> 
> | Source | CO2 (grams per kWh) | Runs day and night on demand? |
> |---|---|---|
> | Coal | about 1,000 | yes |
> | Natural gas | about 450 | yes |
> | Nuclear | about 12 | yes |
> | Solar | about 40 | no |
> | Wind | about 11 | no |
> | Hydroelectric | about 20 | yes, while the reservoir holds water |

1. **[ES.6.d.1 · LOTS]** In a natural gas power plant, what directly spins the turbine?  
   _Skill: Describe how energy sources (fossil fuels, nuclear, solar, wind, water, geothermal, biomass) produce energy_
   - A. steam made with heat from the burning fuel
   - B. sunlight striking a field of panels
   - C. falling water released from a reservoir
   - D. moving air that pushes on long blades
   - **Key: A**

2. **[ES.6.d.1 · LOTS]** Which source in the table generates electricity without spinning a turbine?  
   _Skill: Describe how energy sources (fossil fuels, nuclear, solar, wind, water, geothermal, biomass) produce energy_
   - A. wind
   - B. solar
   - C. hydroelectric
   - D. natural gas
   - **Key: B**

3. **[ES.6.d.2 · HOTS]** A city wants the source with the lowest carbon dioxide release that can also run day and night on demand. Based on the table, the best choice is —  
   _Skill: Compare energy sources by their environmental and economic effects_
   - A. wind
   - B. solar
   - C. nuclear
   - D. natural gas
   - **Key: C**

4. **[ES.6.d.2 · HOTS]** The utility replaces a coal plant with a natural gas plant that makes the same amount of electricity. Based on the table, its carbon dioxide release will drop by about —  
   _Skill: Compare energy sources by their environmental and economic effects_
   - A. 10 percent
   - B. 25 percent
   - C. 55 percent
   - D. 95 percent
   - **Key: C**

5. **[ES.6.a.2 · HOTS]** Which statement best evaluates a trade-off of nuclear power?  
   _Skill: Evaluate the trade-offs of using a resource_
   - A. It releases little carbon dioxide, but its waste stays radioactive for thousands of years.
   - B. It releases no carbon dioxide at all and leaves no waste behind once its fuel is used up.
   - C. It runs on a renewable fuel, but it releases more carbon dioxide than a coal-fired plant.
   - D. It leaves no waste behind, but it can run only during hours when the sun is shining.
   - **Key: A**

6. **[ES.6.b.1 · LOTS]** Which source in the table depends on a nonrenewable fuel even though it releases little carbon dioxide?  
   _Skill: Classify resources as renewable or nonrenewable and explain their renewal rates_
   - A. wind
   - B. hydroelectric
   - C. solar
   - D. nuclear
   - **Key: D**

### Coal and a creek in southwest Virginia  
`res-coal-acid-drainage` · Resources & Fresh Water · ES.6 · ES.8 · level 2 · 155 words · 6 questions

> (1) Coal is mined in the Appalachian Plateau of southwest Virginia, in counties such as Wise and Buchanan. (2) It formed from the remains of swamp plants that were buried and compressed over millions of years. (3) Mining has provided jobs and tax money, and Virginia coal has been burned to generate electricity and shipped overseas for making steel. (4) Where mining exposes rock containing the mineral pyrite, air and water react with it to form sulfuric acid, a problem called **acid mine drainage**. (5) At an abandoned mine, the acidic water now flows through a channel lined with crushed limestone before it enters a creek. (6) Students measured pH and counted fish species at three sites. (7) Since 1977, federal law has required companies to **reclaim** surface mines by reshaping and replanting the land.
> 
> | Site | pH | Fish species |
> |---|---|---|
> | Creek above the mine | 7.1 | 9 |
> | Mine water before the limestone channel | 3.8 | 0 |
> | Creek below where treated water enters | 6.6 | 6 |

1. **[ES.6.c.1 · LOTS]** Besides coal, which resource is also produced in large amounts in the Appalachian Plateau of southwest Virginia?  
   _Skill: Identify Virginia's major resources and where in Virginia they are found_
   - A. natural gas
   - B. titanium sands
   - C. farmed oysters
   - D. offshore wind
   - **Key: A**

2. **[ES.6.a.1 · LOTS]** According to sentence 4, acid mine drainage forms when —  
   _Skill: Describe the environmental costs and benefits of using a resource_
   - A. limestone dissolves in rainwater
   - B. coal is burned in a power plant
   - C. pyrite in exposed rock reacts with air and water
   - D. reclaimed land is replanted with grass and trees
   - **Key: C**

3. **[ES.8.c.2 · HOTS]** Which conclusion about the creek is best supported by the pH and fish data?  
   _Skill: Evaluate how weather events and human activities affect freshwater quality and supply_
   - A. The creek above the mine is more acidic than the mine water.
   - B. The limestone channel makes the water in the creek more strongly acidic.
   - C. The number of fish species rises as the pH goes down.
   - D. The mine water is acidic, yet six fish species live where treated water enters.
   - **Key: D**

4. **[ES.6.a.2 · HOTS]** Which is the best evaluation of the limestone channel?  
   _Skill: Evaluate the trade-offs of using a resource_
   - A. It fully solves the problem, because the pH below it equals the pH above the mine.
   - B. It helps, but there are still fewer fish species below it than above the mine.
   - C. It fails, because no fish species can be found anywhere along the creek.
   - D. It harms the creek, because limestone makes the water more strongly acidic.
   - **Key: B**

5. **[ES.6.c.2 · HOTS]** In recent decades, many power plants have switched from coal to natural gas. Which is the most likely economic effect on coal counties such as Wise and Buchanan?  
   _Skill: Analyze the environmental and economic impacts of using a resource in Virginia_
   - A. more mining jobs, because power plants are buying less coal
   - B. no change, because Virginia coal is used only to make steel
   - C. fewer mining jobs and less local tax money from coal
   - D. more farmland, because unmined coal seams turn into soil
   - **Key: C**

6. **[ES.6.b.1 · LOTS]** Based on sentence 2, coal is classified as nonrenewable because —  
   _Skill: Classify resources as renewable or nonrenewable and explain their renewal rates_
   - A. it forms over millions of years, far slower than it is used
   - B. it is found only in the far southwest corner of Virginia
   - C. it releases carbon dioxide into the air whenever it is burned
   - D. it cannot be replaced by any other source of energy
   - **Key: A**

### A dry summer and a shallow well  
`res-drought-well` · Resources & Fresh Water · ES.6 · ES.8 · level 2 · 140 words · 6 questions

> (1) A family in Virginia's Piedmont gets its water from a well 8 m deep. (2) Below their yard, the pores in the ground near the surface hold mostly air, but deeper down every pore and crack is filled with water. (3) The top of the water-filled zone is the **water table**. (4) A county hydrologist recorded monthly rainfall and the depth to the water table in a nearby monitoring well. (5) She estimates that rain and snowmelt **recharge** the county's aquifer with about 40 million liters of water per day, while wells already pump out about 30 million liters per day. (6) A new factory has asked to pump an extra 15 million liters per day. (7) In August, the family's well stopped producing water.
> 
> | Month | Rainfall (cm) | Depth to water table (m) |
> |---|---|---|
> | April | 10 | 5.8 |
> | June | 5 | 6.9 |
> | August | 2 | 9.2 |
> | October | 9 | 6.4 |

1. **[ES.8.b.1 · LOTS]** The deeper zone described in sentence 2, where every pore and crack is filled with water, is called the —  
   _Skill: Describe the zone of aeration, zone of saturation, water table, aquifers, porosity and permeability_
   - A. zone of aeration
   - B. zone of saturation
   - C. A horizon of the soil
   - D. drainage divide
   - **Key: B**

2. **[ES.6.b.1 · LOTS]** Groundwater in the county's aquifer stays a renewable resource only as long as —  
   _Skill: Classify resources as renewable or nonrenewable and explain their renewal rates_
   - A. the amount pumped out does not exceed recharge
   - B. the water table stays at one depth all year long
   - C. every family well is drilled deeper than 8 m
   - D. no rain or snow falls during the summer months
   - **Key: A**

3. **[ES.8.b.2 · HOTS]** Which statement best explains why the family's well stopped producing water in August?  
   _Skill: Analyze porosity and permeability data to predict groundwater movement and supply_
   - A. August rain filled the zone of aeration with air.
   - B. The water table rose above the top of the well.
   - C. The ground below became too permeable to hold water.
   - D. The water table dropped below the bottom of the well.
   - **Key: D**

4. **[ES.8.c.2 · HOTS]** Which relationship is shown by the data in the table?  
   _Skill: Evaluate how weather events and human activities affect freshwater quality and supply_
   - A. Months with more rain had a deeper water table.
   - B. The water table stayed at the same depth all year.
   - C. Months with less rain had a deeper water table.
   - D. Rainfall had no connection to water table depth.
   - **Key: C**

5. **[ES.8.c.1 · LOTS]** Which action would best help the family conserve groundwater during a drought?  
   _Skill: Identify sources of freshwater pollution and ways to conserve and protect fresh water_
   - A. fixing leaky faucets and taking shorter showers
   - B. watering the lawn every afternoon in the heat
   - C. drilling a second, deeper well beside the first
   - D. washing the family cars in the driveway more often
   - **Key: A**

6. **[ES.6.b.2 · HOTS]** Which statement about the factory's request is best supported by the numbers in sentences 5 and 6?  
   _Skill: Analyze data on availability, renewal rate and cost to support a resource decision_
   - A. Approving it would keep the total pumping well below the aquifer's recharge rate.
   - B. Approving it would make pumping exceed recharge, so water levels would likely fall.
   - C. The aquifer can supply any amount, because rain and snow refill it every single year.
   - D. The factory by itself would use more water than the aquifer receives each day.
   - **Key: B**


## Level 3 — stretch

### A bend in the Rappahannock  
`res-rappahannock-meander` · Resources & Fresh Water · ES.6 · ES.8 · level 3 · 149 words · 6 questions

> (1) A field class studied a sharp bend, or **meander**, where the Rappahannock River winds toward the Chesapeake Bay. (2) They measured the current speed and sampled the river bottom at three places. (3) On the outside of the bend, the bank was a steep wall of bare soil with tree roots hanging out of it. (4) On the inside of the bend, a low bar of sand sloped gently into the water. (5) Beyond the banks, a wide, flat floodplain was covered with a layer of fine silt left by a flood the year before. (6) Upstream, a company has proposed dredging sand and gravel from the riverbed to sell for concrete, and an old dam once supplied a nearby mill with hydroelectric power.
> 
> | Location | Current speed (m/s) | Bottom material |
> |---|---|---|
> | Outside of the bend | 1.3 | gravel and cobbles |
> | Middle of the channel | 0.8 | gravel and sand |
> | Inside of the bend | 0.3 | fine sand |

1. **[ES.8.d.2 · HOTS]** Based on the table and sentences 3 and 4, where is the river eroding its banks the most?  
   _Skill: Analyze how stream erosion and deposition shape a watershed_
   - A. on the inside of the bend, where sand is building up
   - B. on the floodplain, where the silt layer was left behind
   - C. on the outside of the bend, where the current is fastest
   - D. upstream of the dam, where the old mill once stood
   - **Key: C**

2. **[ES.8.d.2 · HOTS]** If these processes continue for hundreds of years, the meander will most likely —  
   _Skill: Analyze how stream erosion and deposition shape a watershed_
   - A. straighten as sand fills in the outside of the bend
   - B. bend more sharply as the outside bank wears back and the bar builds
   - C. stay in the same place, because tree roots hold every bank
   - D. move uphill, away from the floodplain and toward the nearby ridges
   - **Key: B**

3. **[ES.8.d.1 · LOTS]** Which river belongs to the same major watershed as the Rappahannock?  
   _Skill: Identify watershed boundaries and Virginia's major watersheds_
   - A. the York
   - B. the New
   - C. the Clinch
   - D. the Roanoke
   - **Key: A**

4. **[ES.8.a.3 · HOTS]** Soil on this floodplain developed differently from soil on a hilltop nearby. Which statement best explains the difference?  
   _Skill: Analyze how climate, parent rock, slope and time affect soil and karst development_
   - A. Floodplain soil is thinner, because each flood strips away its entire top layer.
   - B. Floodplain soil is made only of leaves, while hilltop soil has no organic matter.
   - C. Hilltop soil is younger, because new silt is added to it during every flood.
   - D. Floodplain soil builds up from silt floods leave; hilltop soil forms from rock below.
   - **Key: D**

5. **[ES.6.c.2 · HOTS]** Which statement best weighs the dredging proposal in sentence 6?  
   _Skill: Analyze the environmental and economic impacts of using a resource in Virginia_
   - A. It supplies sand and gravel for building, but it can cloud the water and harm riverbed habitat.
   - B. It has no real costs, because the river replaces all of the sand and gravel within a few days.
   - C. It would stop all erosion on the outside of the bend, so it would bring only benefits downstream.
   - D. It would make the water clearer forever, because sediment would no longer be in the river.
   - **Key: A**

6. **[ES.6.d.1 · LOTS]** A hydroelectric dam, like the old one in sentence 6, produces electricity by —  
   _Skill: Describe how energy sources (fossil fuels, nuclear, solar, wind, water, geothermal, biomass) produce energy_
   - A. burning wood to boil water into steam
   - B. letting falling water spin a turbine and generator
   - C. splitting atoms dissolved in the river water
   - D. collecting sunlight that reflects off the reservoir
   - **Key: B**

### Titanium sands and a thirsty aquifer  
`res-coastal-plain-aquifer` · Resources & Fresh Water · ES.6 · ES.8 · level 3 · 200 words · 6 questions

> (1) Virginia's Coastal Plain is built of layers of sand, gravel and clay that slope gently toward the Atlantic Ocean. (2) In Dinwiddie and Sussex counties, some sand layers contain heavy minerals such as ilmenite and rutile, which have been mined for titanium dioxide, a white pigment used in paint, paper and plastics. (3) Miners dig up the sand, separate out the heavy minerals, return the clean sand to the pit and replant the land as farm fields or forest. (4) Deeper sand layers form **aquifers**, separated by clay layers that slow the movement of water between them. (5) Cities and industries in southeastern Virginia pump large amounts of fresh water from these aquifers. (6) Salty groundwater lies deeper and closer to the ocean, and when fresh water is pumped out faster than it is recharged, the salty water can move inland, a process called **saltwater intrusion**. (7) A monitoring well near the coast recorded the data below. (8) To slow the decline, a regional utility has begun injecting highly treated wastewater back into the deep aquifer, a project costing hundreds of millions of dollars.
> 
> | Year | Water level (m below sea level) | Chloride (mg/L) |
> |---|---|---|
> | 1980 | 15 | 40 |
> | 1995 | 28 | 70 |
> | 2010 | 41 | 140 |
> | 2025 | 47 | 210 |

1. **[ES.6.c.1 · LOTS]** According to the passage, Virginia's titanium minerals are found in —  
   _Skill: Identify Virginia's major resources and where in Virginia they are found_
   - A. limestone layers of the Valley and Ridge
   - B. coal seams of the Appalachian Plateau
   - C. sand layers of the Coastal Plain
   - D. granite bedrock of the Blue Ridge
   - **Key: C**

2. **[ES.8.b.1 · LOTS]** Based on sentence 4, an aquifer is best described as —  
   _Skill: Describe the zone of aeration, zone of saturation, water table, aquifers, porosity and permeability_
   - A. a clay layer that blocks the flow of groundwater
   - B. a permeable layer that stores and transmits water
   - C. the zone above the water table where pores hold air
   - D. a pool of seawater resting on top of the land
   - **Key: B**

3. **[ES.8.b.2 · HOTS]** Which conclusion about the aquifer is best supported by the data in the table?  
   _Skill: Analyze porosity and permeability data to predict groundwater movement and supply_
   - A. As the water level fell, chloride rose, which fits salty water moving in.
   - B. As the water level fell, chloride also fell, so the water grew fresher.
   - C. The water level rose steadily after 1980 even as pumping increased.
   - D. Water level and chloride changed in no clear pattern over the years.
   - **Key: A**

4. **[ES.8.c.2 · HOTS]** Drinking water should usually contain less than 250 mg/L of chloride. If pumping continues at the same rate, which prediction is best supported by the data?  
   _Skill: Evaluate how weather events and human activities affect freshwater quality and supply_
   - A. Chloride will drop to zero once the clay layers fill with seawater.
   - B. The water level will rise back to sea level with no change in pumping.
   - C. The aquifer will turn into a clay layer that can no longer hold water.
   - D. Chloride will likely rise past 250 mg/L within a few decades.
   - **Key: D**

5. **[ES.6.a.2 · HOTS]** Which statement best evaluates the injection project in sentence 8?  
   _Skill: Evaluate the trade-offs of using a resource_
   - A. It costs nothing, because the wastewater is free to collect and reuse.
   - B. It is costly, but it adds water to the aquifer and may slow intrusion.
   - C. It speeds up saltwater intrusion by adding salt to the fresh aquifer.
   - D. It has no benefit, because aquifers cannot take in water from wells.
   - **Key: B**

6. **[ES.6.c.2 · HOTS]** Select TWO statements that correctly describe impacts of mining the heavy-mineral sands described in sentences 2 and 3.  
   _Skill: Analyze the environmental and economic impacts of using a resource in Virginia_
   - A. It provides a raw material for products such as white paint.
   - B. It permanently turns the mined land into a deep, open lake.
   - C. It disturbs farmland and forest until the land is replanted.
   - D. It releases large amounts of carbon dioxide by burning sand.
   - **Key: A and C**

### Nitrate after the storm  
`res-york-nitrate` · Resources & Fresh Water · ES.6 · ES.8 · level 3 · 193 words · 6 questions

> (1) A high school team tested nitrate, a nutrient found in fertilizer and wastewater, in four small streams that all flow into a creek in the York River watershed. (2) Site A drains a forest. (3) Site B drains corn fields that farmers fertilize each spring to increase their harvests. (4) Site C is just below the pipe where a town's wastewater treatment plant releases its treated water. (5) Site D drains a new housing development with lawns and storm drains. (6) The team sampled each site once after a dry week and again the day after 5 cm of rain. (7) In the Chesapeake Bay, extra nutrients feed large blooms of algae; when the algae die and decay, bacteria use up the dissolved oxygen, leaving zones where fish and crabs cannot survive. (8) Pollution that comes from a single, identifiable place is called **point source** pollution, while pollution that washes off a wide area is **nonpoint source** pollution. (9) Town leaders and farmers are now deciding how to protect the streams.
> 
> | Site | Nitrate after dry week (mg/L) | Nitrate after storm (mg/L) |
> |---|---|---|
> | A (forest) | 0.2 | 0.3 |
> | B (corn fields) | 1.1 | 4.8 |
> | C (below treatment plant) | 3.2 | 2.0 |
> | D (housing development) | 0.7 | 2.9 |

1. **[ES.8.c.1 · LOTS]** Which site is affected mainly by a point source of pollution?  
   _Skill: Identify sources of freshwater pollution and ways to conserve and protect fresh water_
   - A. Site A
   - B. Site B
   - C. Site C
   - D. Site D
   - **Key: C**

2. **[ES.8.c.2 · HOTS]** Which conclusion is best supported by comparing the two columns of data?  
   _Skill: Evaluate how weather events and human activities affect freshwater quality and supply_
   - A. The storm lowered nitrate at every site by adding clean rainwater.
   - B. Rain washed nitrate off fields and lawns and diluted the plant's steady outflow.
   - C. The forest became the largest source of nitrate in the streams after the storm.
   - D. The treatment plant released more nitrate in the storm than the fields.
   - **Key: B**

3. **[ES.8.d.1 · LOTS]** Why can nitrate from these streams affect the Chesapeake Bay?  
   _Skill: Identify watershed boundaries and Virginia's major watersheds_
   - A. Nitrate in the streams evaporates and is carried through the air all the way to the Bay.
   - B. The York River flows west into the Ohio River, which empties into the Bay.
   - C. Tides push Bay water up to the source of every stream twice each day.
   - D. The streams are in the Bay's watershed, so their water reaches it through the York.
   - **Key: D**

4. **[ES.6.a.1 · LOTS]** Based on sentence 7, which is the main environmental cost when fertilizer from farm fields reaches the Bay?  
   _Skill: Describe the environmental costs and benefits of using a resource_
   - A. Algae blooms die and decay, using up the oxygen fish and crabs need.
   - B. The Bay water becomes too salty for fish and crabs to survive in it.
   - C. The nitrate forms a hard crust that buries the oyster reefs.
   - D. The fertilizer heats the water until the algae can no longer grow.
   - **Key: A**

5. **[ES.8.c.2 · HOTS]** Select TWO actions that would most likely lower the nitrate at Site B after storms.  
   _Skill: Evaluate how weather events and human activities affect freshwater quality and supply_
   - A. Plant strips of grass and trees between the fields and the stream.
   - B. Upgrade the wastewater treatment plant that discharges at Site C.
   - C. Grow winter cover crops that hold soil and take up leftover nitrogen.
   - D. Spread extra fertilizer on the fields just before heavy rain is forecast.
   - **Key: A and C**

6. **[ES.6.a.2 · HOTS]** The farmers at Site B consider cutting their fertilizer use in half. Which is the best evaluation of this trade-off?  
   _Skill: Evaluate the trade-offs of using a resource_
   - A. Nitrate in the stream would rise, because less fertilizer leaves more nitrogen behind.
   - B. Nitrate runoff would likely drop, but crop harvests and farm income might drop too.
   - C. Crop harvests would surely rise, and the nitrate in the stream would not change.
   - D. There is no trade-off at all, because fertilizer gives farmers no real benefits.
   - **Key: B**


---

# Plate Tectonics (ES.7)

Standards in this unit:

- ES.7.a — convection in Earth's interior drives plate motion; Earth's layers differ
- ES.7.b — features and processes occur within plates and at plate boundaries
- ES.7.c — plate interactions form mountain ranges and ocean basins; evidence for plate tectonics


## Level 1 — foundation

### A chart of Earth's layers  
`tect-layer-chart` · Plate Tectonics · ES.7 · level 1 · 81 words · 5 questions

> (1) A class made a chart of Earth's layers, from the surface to the center. (2) For each layer they listed its state of matter and its average density. (3) Oceanic crust is thin and made of dense basalt, while continental crust is thicker and made of lighter granite. (4) Both temperature and pressure increase steadily with depth.
> 
> | Layer | State | Density (g/cm³) |
> |---|---|---|
> | Continental crust | solid | 2.7 |
> | Oceanic crust | solid | 3.0 |
> | Mantle | solid rock that flows slowly | 3.3–5.6 |
> | Outer core | liquid | 9.9–12.2 |
> | Inner core | solid | 12.8–13.1 |

1. **[ES.7.a.1 · LOTS]** According to the chart, which layer of Earth is liquid?  
   _Skill: Describe Earth's layers (crust, mantle, outer and inner core; lithosphere and asthenosphere) and their properties_
   - A. the mantle
   - B. the inner core
   - C. the outer core
   - D. the oceanic crust
   - **Key: C**

2. **[ES.7.a.3 · HOTS]** Which conclusion is best supported by the chart?  
   _Skill: Analyze seismic and other evidence for the structure of Earth's interior_
   - A. Density increases from the crust toward Earth's center.
   - B. Every layer below the crust is liquid.
   - C. The crust is the densest layer because it is the coolest.
   - D. Density is about the same in every solid layer.
   - **Key: A**

3. **[ES.7.a.3 · HOTS]** The inner core is hotter than the outer core, yet it is solid. Which inference based on sentence 4 best explains this?  
   _Skill: Analyze seismic and other evidence for the structure of Earth's interior_
   - A. Convection currents in the mantle keep the inner core cool.
   - B. The enormous pressure at the center keeps its iron solid.
   - C. The inner core is made of lighter material than the outer core.
   - D. Heat from the outer core cannot reach the inner core.
   - **Key: B**

4. **[ES.7.b.1 · LOTS]** Based on the chart, when oceanic crust and continental crust collide, which process most likely occurs?  
   _Skill: Identify plate boundary types and the features and processes at each (ridges, trenches, rifts, volcanic arcs, faults, hot spots)_
   - A. The continental crust sinks beneath the oceanic crust.
   - B. Both plates rise to form a mid-ocean ridge.
   - C. The two plates slide past each other with no sinking.
   - D. The oceanic crust sinks beneath the continental crust.
   - **Key: D**

5. **[ES.7.a.2 · LOTS]** The slow circulation of mantle rock, in which hotter rock rises and cooler rock sinks, is called —  
   _Skill: Explain how convection in the mantle moves tectonic plates_
   - A. convection
   - B. conduction
   - C. subduction
   - D. radiation
   - **Key: A**

### The 2011 Mineral earthquake  
`tect-mineral-quake` · Plate Tectonics · ES.7 · level 1 · 69 words · 5 questions

> (1) In August 2011, a magnitude 5.8 earthquake struck near the town of Mineral in Louisa County, Virginia. (2) Its focus was about 6 km underground. (3) Shaking was felt from Georgia to Canada. (4) Virginia lies in the middle of the North American Plate, far from any plate boundary, so this was an **intraplate** earthquake. (5) Geologists think it released stress along very old faults that formed when the Appalachian Mountains were built.

1. **[ES.7.b.1 · LOTS]** The point on Earth's surface directly above the focus described in sentence 2 is called the —  
   _Skill: Identify plate boundary types and the features and processes at each (ridges, trenches, rifts, volcanic arcs, faults, hot spots)_
   - A. fault scarp
   - B. hot spot
   - C. epicenter
   - D. seismic gap
   - **Key: C**

2. **[ES.7.b.1 · LOTS]** The magnitude of 5.8 in sentence 1 is a measure of the —  
   _Skill: Identify plate boundary types and the features and processes at each (ridges, trenches, rifts, volcanic arcs, faults, hot spots)_
   - A. depth of the focus below the surface
   - B. energy released by the earthquake
   - C. distance at which the shaking was felt
   - D. number of aftershocks that followed
   - **Key: B**

3. **[ES.7.b.2 · HOTS]** Earthquakes in western South America near Chile are far more frequent than in Virginia, and their foci range from shallow near the coast to about 600 km deep farther inland. Which conclusion best explains these data?  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. Chile lies above a subduction zone where an ocean plate sinks.
   - B. Chile sits on a mid-ocean ridge where two plates pull apart.
   - C. Chile sits over a hot spot in the middle of a single plate.
   - D. Chile lies on a transform fault where two plates slide past.
   - **Key: A**

4. **[ES.7.c.1 · LOTS]** According to sentence 5, the old faults beneath central Virginia most likely formed when —  
   _Skill: Describe how plate interactions build mountains (including the Appalachians) and open and close ocean basins_
   - A. the 2011 earthquake first cracked the crust
   - B. ancient plate collisions pushed up the mountains
   - C. a hot spot melted rock beneath Louisa County
   - D. glaciers scraped across central Virginia
   - **Key: B**

5. **[ES.7.b.2 · HOTS]** A student claims the Mineral earthquake happened at a plate boundary beneath Louisa County. Which sentence gives the best evidence against this claim?  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. sentence 1
   - B. sentence 2
   - C. sentence 3
   - D. sentence 4
   - **Key: D**

### Islands over a hot spot  
`tect-hawaii-chain` · Plate Tectonics · ES.7 · level 1 · 84 words · 5 questions

> (1) The Hawaiian Islands sit in the middle of the Pacific Plate, in a line from the Big Island (southeast) to Kauai (northwest). (2) They formed over a **hot spot**, a plume of hot mantle rock that stays in nearly one place. (3) Only the Big Island has active volcanoes today. (4) The table lists the age of each island's oldest rock.
> 
> | Island | Distance from active volcanoes (km) | Age of oldest rock (million years) |
> |---|---|---|
> | Big Island | 0 | 0.5 |
> | Maui | 190 | 1.3 |
> | Oahu | 360 | 3.4 |
> | Kauai | 520 | 5.1 |

1. **[ES.7.b.1 · LOTS]** According to sentence 2, a hot spot is —  
   _Skill: Identify plate boundary types and the features and processes at each (ridges, trenches, rifts, volcanic arcs, faults, hot spots)_
   - A. a crack where two plates pull apart
   - B. a place where one plate sinks under another
   - C. a rising plume of hot rock beneath a plate
   - D. a fault where two plates slide past each other
   - **Key: C**

2. **[ES.7.a.1 · LOTS]** The Pacific Plate is a piece of the lithosphere, which is made of —  
   _Skill: Describe Earth's layers (crust, mantle, outer and inner core; lithosphere and asthenosphere) and their properties_
   - A. the crust and the rigid top of the mantle
   - B. the liquid outer core and the lower mantle
   - C. the soft, slowly flowing asthenosphere
   - D. the oceanic crust and the inner core
   - **Key: A**

3. **[ES.7.b.1 · LOTS]** Why does only the Big Island have active volcanoes?  
   _Skill: Identify plate boundary types and the features and processes at each (ridges, trenches, rifts, volcanic arcs, faults, hot spots)_
   - A. It is the oldest island in the chain.
   - B. It sits above the hot spot right now.
   - C. It lies on a convergent plate boundary.
   - D. It is the closest island to a mid-ocean ridge.
   - **Key: B**

4. **[ES.7.b.2 · HOTS]** Based on the table and sentence 1, in which direction is the Pacific Plate moving over the hot spot?  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. toward the northwest
   - B. toward the southeast
   - C. toward the northeast
   - D. toward the southwest
   - **Key: A**

5. **[ES.7.b.2 · HOTS]** Which prediction is best supported by the data?  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. A new island will form northwest of Kauai.
   - B. Kauai will move back over the hot spot.
   - C. Oahu's volcanoes will become active again.
   - D. A new island will form southeast of the Big Island.
   - **Key: D**

### Two continents, one puzzle  
`tect-continent-puzzle` · Plate Tectonics · ES.7 · level 1 · 109 words · 6 questions

> (1) A class cut out paper maps of South America and Africa and fit them together like puzzle pieces. (2) The fit was closest when they cut along the edge of the **continental shelf** instead of the shoreline. (3) Next they marked where fossils of _Mesosaurus_ have been found. (4) This small reptile lived in fresh water about 280 million years ago, and its fossils occur only in southern Africa and eastern South America. (5) The class also found that a belt of rock of the same type and age in Brazil lines up with a matching belt in West Africa. (6) Today the South Atlantic Ocean, thousands of kilometers wide, separates the two continents.

1. **[ES.7.c.2 · HOTS]** Why are the Mesosaurus fossils strong evidence that the two continents were once joined?  
   _Skill: Evaluate evidence for plate tectonics (sea-floor spreading, magnetic stripes, fossils, rock ages, continental fit)_
   - A. A small freshwater reptile could not have crossed a wide salty ocean.
   - B. Mesosaurus lived on every continent at the same time.
   - C. Reptile fossils form only where two continents touch each other.
   - D. Mesosaurus lived long after the Atlantic Ocean had opened.
   - **Key: A**

2. **[ES.7.c.2 · HOTS]** Which statement best explains why the fit improved when the class cut along the continental shelf?  
   _Skill: Evaluate evidence for plate tectonics (sea-floor spreading, magnetic stripes, fossils, rock ages, continental fit)_
   - A. Continental shelves are made of new oceanic crust from the ridge.
   - B. Shelf edges are straight lines, so any two continents fit along them.
   - C. The shelf edge is the real edge of the continent; shorelines shift with sea level.
   - D. Shorelines are much older than shelves, so they have drifted farther.
   - **Key: C**

3. **[ES.7.c.1 · LOTS]** The South Atlantic Ocean in sentence 6 formed mainly by —  
   _Skill: Describe how plate interactions build mountains (including the Appalachians) and open and close ocean basins_
   - A. subduction as one plate sank beneath the other
   - B. two plates sliding past each other along a fault
   - C. rivers eroding a deep valley between the continents
   - D. rifting and sea-floor spreading as the plates moved apart
   - **Key: D**

4. **[ES.7.b.1 · LOTS]** A mid-ocean ridge runs down the middle of the Atlantic today. This ridge is a —  
   _Skill: Identify plate boundary types and the features and processes at each (ridges, trenches, rifts, volcanic arcs, faults, hot spots)_
   - A. convergent boundary where old crust is destroyed
   - B. divergent boundary where new oceanic crust forms
   - C. transform boundary where crust is neither made nor lost
   - D. hot spot in the middle of a single plate
   - **Key: B**

5. **[ES.7.a.2 · LOTS]** Scientists now explain that the continents move because —  
   _Skill: Explain how convection in the mantle moves tectonic plates_
   - A. they ride on plates moved by convection in the mantle
   - B. they float on top of the liquid outer core
   - C. ocean currents push against their coastlines
   - D. Earth's spin flings them toward the equator
   - **Key: A**

6. **[ES.7.c.2 · HOTS]** Which additional observation would give the strongest further support for the idea that the two continents were joined?  
   _Skill: Evaluate evidence for plate tectonics (sea-floor spreading, magnetic stripes, fossils, rock ages, continental fit)_
   - A. Both continents have large tropical rainforests today.
   - B. Matching ancient glacier deposits of the same age are found on both.
   - C. Large rivers on both continents empty into the Atlantic.
   - D. Both continents have earthquakes and active volcanoes.
   - **Key: B**


## Level 2 — average student (core)

### Where the S waves vanish  
`tect-wave-shadow` · Plate Tectonics · ES.7 · level 2 · 108 words · 6 questions

> (1) After a large earthquake, seismograph stations around the world record two kinds of waves that travel through Earth's interior. (2) **P waves** are push-pull waves that can travel through solids, liquids and gases. (3) **S waves** shake rock from side to side and can travel only through solids. (4) The table shows what stations at different distances from the epicenter recorded, with distance measured as an angle around Earth's center. (5) Between about 104° and 140°, few direct P waves arrive, because P waves bend when they enter the core.
> 
> | Distance from epicenter | P waves recorded? | S waves recorded? |
> |---|---|---|
> | 30° | yes | yes |
> | 90° | yes | yes |
> | 120° | very weak | no |
> | 160° | yes | no |

1. **[ES.7.a.1 · LOTS]** Earth's outer core is best described as —  
   _Skill: Describe Earth's layers (crust, mantle, outer and inner core; lithosphere and asthenosphere) and their properties_
   - A. solid iron and nickel under great pressure
   - B. liquid iron and nickel
   - C. solid rock that flows very slowly
   - D. melted granite from the crust
   - **Key: B**

2. **[ES.7.a.3 · HOTS]** Which conclusion is best supported by the S-wave data in the table?  
   _Skill: Analyze seismic and other evidence for the structure of Earth's interior_
   - A. A layer deep inside Earth is liquid, so S waves cannot cross it.
   - B. S waves are faster than P waves, so they reach far stations first.
   - C. Earth's interior is solid all the way to the center.
   - D. Stations past 90° are too far away to record any waves.
   - **Key: A**

3. **[ES.7.a.3 · HOTS]** A new station is built 150° from the epicenter. Based on the table and sentence 5, it would most likely record —  
   _Skill: Analyze seismic and other evidence for the structure of Earth's interior_
   - A. both P waves and S waves
   - B. S waves but no P waves
   - C. P waves but no S waves
   - D. neither P waves nor S waves
   - **Key: C**

4. **[ES.7.b.2 · HOTS]** Another earthquake in the study had its focus 450 km deep, beneath a deep-ocean trench. This earthquake most likely occurred at a —  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. mid-ocean ridge where two plates pull apart
   - B. transform fault where two plates slide past
   - C. hot spot under the middle of a plate
   - D. subduction zone where one plate sinks under another
   - **Key: D**

5. **[ES.7.c.2 · HOTS]** World maps show that most earthquakes occur in narrow belts along ridges, trenches and young mountain ranges. How does this pattern support the theory of plate tectonics?  
   _Skill: Evaluate evidence for plate tectonics (sea-floor spreading, magnetic stripes, fossils, rock ages, continental fit)_
   - A. Earthquakes are spread evenly, as expected if plates did not exist.
   - B. Most earthquakes happen where plates meet and move against each other.
   - C. Earthquakes build whole ridges and trenches in a single day.
   - D. Earthquakes happen only where the crust is thickest.
   - **Key: B**

6. **[ES.7.a.2 · LOTS]** The heat that drives convection in the mantle comes mainly from —  
   _Skill: Explain how convection in the mantle moves tectonic plates_
   - A. heat left from Earth's formation and from radioactive decay
   - B. sunlight absorbed by rocks and soil at the surface
   - C. friction from tides rubbing against the ocean floor
   - D. warm ocean currents flowing over the sea floor
   - **Key: A**

### Stripes on the sea floor  
`tect-magnetic-stripes` · Plate Tectonics · ES.7 · level 2 · 113 words · 6 questions

> (1) A research ship towed a magnetometer across the Mid-Atlantic Ridge from west to east. (2) When lava cools at the ridge, magnetic minerals in the basalt line up with Earth's magnetic field, which has reversed many times. (3) The survey found stripes of **normal** and **reversed** polarity running parallel to the ridge, and the pattern on the west side was a mirror image of the pattern on the east side. (4) The crew also dated basalt from the sea floor at several distances from the ridge axis.
> 
> | Distance from ridge axis | Age of basalt (million years) |
> |---|---|
> | 80 km west | 4.0 |
> | 40 km west | 2.0 |
> | 0 km (axis) | 0 |
> | 40 km east | 2.0 |
> | 80 km east | 4.0 |

1. **[ES.7.c.2 · HOTS]** The mirror-image stripe pattern in sentence 3 is best explained by —  
   _Skill: Evaluate evidence for plate tectonics (sea-floor spreading, magnetic stripes, fossils, rock ages, continental fit)_
   - A. new crust forming at the ridge and moving away on both sides
   - B. old crust sinking back into the mantle at the ridge
   - C. the magnetic field staying the same through Earth's history
   - D. sediment from the continents settling evenly on the sea floor
   - **Key: A**

2. **[ES.7.c.1 · LOTS]** Using the table, about how fast is the sea floor moving away from the ridge axis on each side?  
   _Skill: Describe how plate interactions build mountains (including the Appalachians) and open and close ocean basins_
   - A. 0.2 cm per year
   - B. 2 cm per year
   - C. 20 cm per year
   - D. 40 cm per year
   - **Key: B**

3. **[ES.7.b.1 · LOTS]** The Mid-Atlantic Ridge is an example of a —  
   _Skill: Identify plate boundary types and the features and processes at each (ridges, trenches, rifts, volcanic arcs, faults, hot spots)_
   - A. convergent boundary between two oceanic plates
   - B. transform boundary between two oceanic plates
   - C. divergent boundary between two plates
   - D. convergent boundary between two continents
   - **Key: C**

4. **[ES.7.c.2 · HOTS]** If the crew had dated basalt 120 km east of the ridge axis, its age would most likely be about —  
   _Skill: Evaluate evidence for plate tectonics (sea-floor spreading, magnetic stripes, fossils, rock ages, continental fit)_
   - A. 2 million years
   - B. 4 million years
   - C. 6 million years
   - D. 12 million years
   - **Key: C**

5. **[ES.7.a.2 · LOTS]** Which process in the mantle helps explain why the plates move apart at this ridge?  
   _Skill: Explain how convection in the mantle moves tectonic plates_
   - A. Hot mantle rock rises beneath the ridge as part of a convection current.
   - B. Cold mantle rock sinks beneath the ridge and drags the crust down.
   - C. The liquid outer core pushes the two plates apart from below.
   - D. Ocean water cools the crust at the ridge and makes it expand.
   - **Key: A**

6. **[ES.7.b.2 · HOTS]** Which set of observations would best show that a boundary is divergent rather than a subduction zone?  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. earthquakes that get deeper in one direction beneath a continent
   - B. a deep trench beside a curved chain of volcanic islands
   - C. a belt of high folded mountains with no volcanoes
   - D. shallow earthquakes and young basalt along a central rift valley
   - **Key: D**

### Three stations, one epicenter  
`tect-three-stations` · Plate Tectonics · ES.7 · level 2 · 154 words · 6 questions

> (1) A small earthquake shook the Valley and Ridge province of western Virginia, where the rock layers are folded and cut by old faults. (2) Three seismograph stations, X, Y and Z, recorded it. (3) At each station the P wave arrived first and the S wave arrived later. (4) The longer the lag between the two arrivals, the farther the station was from the epicenter. (5) Students used a travel-time graph to change each lag into a distance, shown in the table. (6) On a map, they drew a circle around each station with a radius equal to its distance from the epicenter. (7) The circles for Stations X and Y crossed at two places, point M and point N. (8) The circle for Station Z passed through point N but not point M. (9) The earthquake had a magnitude of 3.1, and few people felt it.
> 
> | Station | S–P lag (seconds) | Distance (km) |
> |---|---|---|
> | X | 12 | 100 |
> | Y | 20 | 165 |
> | Z | 30 | 250 |

1. **[ES.7.b.1 · LOTS]** The place underground where the rock first broke and the earthquake began is called the —  
   _Skill: Identify plate boundary types and the features and processes at each (ridges, trenches, rifts, volcanic arcs, faults, hot spots)_
   - A. magnitude
   - B. focus
   - C. shadow zone
   - D. hot spot
   - **Key: B**

2. **[ES.7.b.2 · HOTS]** Based on sentences 6 through 8, where was the epicenter?  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. at point M
   - B. at point N
   - C. at Station X, the closest station
   - D. halfway between Stations X and Y
   - **Key: B**

3. **[ES.7.b.2 · HOTS]** Why did the students need data from Station Z to locate the epicenter?  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. Station Z was the only station that recorded S waves.
   - B. Station Z was needed to measure the magnitude.
   - C. Two circles cross at two points; a third shows which is right.
   - D. Station Z was closest to the focus, so its lag was shortest.
   - **Key: C**

4. **[ES.7.b.1 · LOTS]** According to sentence 3, the P wave reached each station first because P waves —  
   _Skill: Identify plate boundary types and the features and processes at each (ridges, trenches, rifts, volcanic arcs, faults, hot spots)_
   - A. travel faster than S waves
   - B. start closer to the station than S waves
   - C. can travel only through liquid rock
   - D. are released after the S waves
   - **Key: A**

5. **[ES.7.a.3 · HOTS]** Seismologists find that P waves speed up as they travel deeper into the mantle, then slow sharply when they enter the outer core. These changes are best explained by —  
   _Skill: Analyze seismic and other evidence for the structure of Earth's interior_
   - A. changes in the state and properties of rock with depth
   - B. the mantle being liquid and the outer core being solid
   - C. the waves losing energy the farther they travel
   - D. the crust being thicker than the whole mantle
   - **Key: A**

6. **[ES.7.c.1 · LOTS]** The folded rock layers and old faults described in sentence 1 formed mainly when —  
   _Skill: Describe how plate interactions build mountains (including the Appalachians) and open and close ocean basins_
   - A. the Atlantic Ocean opened and stretched the crust
   - B. a hot spot pushed the rock layers straight upward
   - C. lava from the Mid-Atlantic Ridge flowed over them
   - D. Africa collided with North America as Pangaea formed
   - **Key: D**

### A cross-section of the Andes  
`tect-andes-section` · Plate Tectonics · ES.7 · level 2 · 133 words · 6 questions

> (1) A student drew a cross-section of the west coast of South America, from the Pacific Ocean on the left to the middle of the continent on the right. (2) On the left, the Nazca Plate, made of oceanic crust, moves east toward South America at about 7 cm per year. (3) It meets the South American Plate at a deep ocean **trench** just offshore. (4) The student marked the foci of recent earthquakes: those near the trench are shallow, and they get deeper toward the east, reaching about 600 km below the surface. (5) About 300 km east of the trench, a line of steep volcanoes rises along the Andes Mountains. (6) These volcanoes erupt thick, sticky, gas-rich magma. (7) Under both plates, the student shaded the **asthenosphere**, a hot layer of the upper mantle that flows slowly.

1. **[ES.7.b.2 · HOTS]** The boundary in this cross-section is best classified as —  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. a divergent boundary where two plates pull apart
   - B. a convergent boundary where an ocean plate subducts
   - C. a transform boundary where two plates slide past
   - D. a convergent boundary where two continents collide
   - **Key: B**

2. **[ES.7.b.2 · HOTS]** The pattern of earthquake depths in sentence 4 is best explained by —  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. magma rising straight up from the outer core
   - B. the two plates pulling apart beneath the Andes
   - C. the Nazca Plate sinking at an angle beneath South America
   - D. the South American Plate sinking west under the Nazca Plate
   - **Key: C**

3. **[ES.7.a.1 · LOTS]** Why does the Nazca Plate sink beneath South America instead of the other way around?  
   _Skill: Describe Earth's layers (crust, mantle, outer and inner core; lithosphere and asthenosphere) and their properties_
   - A. Oceanic crust is denser than continental crust.
   - B. Oceanic crust is thicker than continental crust.
   - C. Continental crust is denser than oceanic crust.
   - D. The weight of ocean water pushes the plate down.
   - **Key: A**

4. **[ES.7.a.1 · LOTS]** The asthenosphere differs from the lithosphere above it because the asthenosphere —  
   _Skill: Describe Earth's layers (crust, mantle, outer and inner core; lithosphere and asthenosphere) and their properties_
   - A. is made of liquid iron and nickel
   - B. is colder and more rigid
   - C. is part of the continental crust
   - D. is hot and soft enough to flow slowly
   - **Key: D**

5. **[ES.7.b.2 · HOTS]** Hawaii's broad volcanoes erupt runny basalt lava that flows out quietly. Compared with them, the Andes volcanoes are most likely to —  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. erupt more explosively, because thick magma traps gas
   - B. erupt more quietly, because thick magma flows easily
   - C. build broad, gentle shield shapes from runny lava
   - D. erupt the same way, because all magma is alike
   - **Key: A**

6. **[ES.7.c.1 · LOTS]** At the rate in sentence 2, about how much Nazca Plate sea floor sinks into the trench in 1 million years?  
   _Skill: Describe how plate interactions build mountains (including the Appalachians) and open and close ocean basins_
   - A. 7 km
   - B. 70 km
   - C. 700 km
   - D. 7,000 km
   - **Key: B**


## Level 3 — stretch

### Four sites, four boundaries?  
`tect-four-sites` · Plate Tectonics · ES.7 · level 3 · 165 words · 6 questions

> (1) A geology class used world maps of earthquakes, volcanoes and landforms to compare four regions, labeled W, X, Y and Z. (2) Their observations are summarized in the table. (3) At Site W, GPS stations on opposite sides of a long valley on a continent are moving apart about 1 cm each year, and the valley floor is slowly sinking. (4) At Site X, the deepest earthquakes occur farthest from the trench, beneath the islands. (5) At Site Y, limestone containing fossils of sea animals is found near the tops of the highest peaks. (6) At Site Z, a stream that crosses the fault has been offset sideways by about 100 m, and GPS shows the land on one side moving north past the land on the other.
> 
> | Site | Earthquakes | Volcanoes | Landform |
> |---|---|---|---|
> | W | shallow | basalt lava flows | rift valley with lakes |
> | X | shallow to 600 km | explosive, on islands | trench beside an arc of islands |
> | Y | shallow to medium | none | very high folded mountains |
> | Z | shallow | none | long, straight fault |

1. **[ES.7.b.2 · HOTS]** Which site is most likely a transform boundary?  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. Site W
   - B. Site X
   - C. Site Y
   - D. Site Z
   - **Key: D**

2. **[ES.7.b.2 · HOTS]** Site X is best classified as a boundary where —  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. two plates pull apart and new crust forms
   - B. one oceanic plate sinks beneath another oceanic plate
   - C. two continents collide and neither one sinks
   - D. two plates slide past each other with no subduction
   - **Key: B**

3. **[ES.7.c.1 · LOTS]** The sea-animal fossils near the mountaintops at Site Y are best explained by —  
   _Skill: Describe how plate interactions build mountains (including the Appalachians) and open and close ocean basins_
   - A. sea-floor sediments squeezed and lifted when two continents collided
   - B. sea level once rising higher than the tallest mountains on Earth
   - C. lava from a hot spot carrying shells up to the peaks
   - D. a rift valley at Site Y flooding with seawater
   - **Key: A**

4. **[ES.7.a.2 · LOTS]** The motion of the GPS stations at Site W is driven mainly by —  
   _Skill: Explain how convection in the mantle moves tectonic plates_
   - A. convection currents in the mantle
   - B. the pull of the moon's gravity on the crust
   - C. the spinning of the liquid outer core
   - D. erosion that widens the valley floor
   - **Key: A**

5. **[ES.7.b.2 · HOTS]** Select TWO sites where the plates are moving toward each other.  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. Site W
   - B. Site X
   - C. Site Y
   - D. Site Z
   - **Key: B and C**

6. **[ES.7.c.2 · HOTS]** A student claims that Site W may one day become a new ocean basin. Which evidence best supports this claim?  
   _Skill: Evaluate evidence for plate tectonics (sea-floor spreading, magnetic stripes, fossils, rock ages, continental fit)_
   - A. Earthquakes at Site W happen only at shallow depths.
   - B. Site W lies far from any deep-ocean trench today.
   - C. Its sides spread apart as basalt fills its sinking floor.
   - D. Site W has no folded mountains or marine fossils.
   - **Key: C**

### The rise and fall of the Appalachians  
`tect-appalachian-story` · Plate Tectonics · ES.7 · level 3 · 203 words · 6 questions

> (1) The Appalachian Mountains stretch from Alabama to Newfoundland, and Virginia's Blue Ridge and Valley and Ridge provinces are part of them. (2) Geologists have pieced together their history from rock layers, fossils and rock ages. (3) Between about 460 and 270 million years ago, three collisions closed the ancient oceans that lay east of North America: first a chain of volcanic islands, then a small landmass, and finally Africa crashed into North America. (4) Each collision folded and faulted the rock layers and pushed them westward, and the last one helped join the continents into the supercontinent **Pangaea**. (5) At their peak, the Appalachians may have been as tall as the Himalayas are today. (6) About 200 million years ago, Pangaea began to rift apart, and the Atlantic Ocean opened between North America and Africa. (7) Basins that formed during this rifting, filled with red sandstone and shale, are found in Virginia's Piedmont. (8) Since then, weathering and erosion have worn the Appalachians down to rounded ridges, most under 2,000 m high. (9) Mountains of the same age and rock types as the Appalachians are found today in northwestern Africa and in Scotland and Norway. (10) The Atlantic is still widening by about 2.5 cm per year at the Mid-Atlantic Ridge.

1. **[ES.7.c.1 · LOTS]** According to sentences 3 and 4, the Appalachian Mountains were built mainly by —  
   _Skill: Describe how plate interactions build mountains (including the Appalachians) and open and close ocean basins_
   - A. plates pulling apart as the Atlantic Ocean opened
   - B. collisions that closed an ocean and joined continents
   - C. a hot spot that lifted the crust from below
   - D. weathering and erosion carving deep valleys
   - **Key: B**

2. **[ES.7.c.2 · HOTS]** Which sentence gives the best evidence that North America and Africa were once joined?  
   _Skill: Evaluate evidence for plate tectonics (sea-floor spreading, magnetic stripes, fossils, rock ages, continental fit)_
   - A. sentence 2
   - B. sentence 5
   - C. sentence 8
   - D. sentence 9
   - **Key: D**

3. **[ES.7.c.2 · HOTS]** Which sequence of events is supported by the passage?  
   _Skill: Evaluate evidence for plate tectonics (sea-floor spreading, magnetic stripes, fossils, rock ages, continental fit)_
   - A. old oceans close → Pangaea forms → Atlantic opens → mountains wear down
   - B. Atlantic opens → old oceans close → Pangaea forms → mountains wear down
   - C. Pangaea forms → old oceans close → mountains wear down → Atlantic opens
   - D. mountains wear down → Atlantic opens → Pangaea forms → old oceans close
   - **Key: A**

4. **[ES.7.b.2 · HOTS]** The red sandstone basins in sentence 7 are evidence that Virginia once lay at which kind of plate boundary?  
   _Skill: Analyze earthquake, volcano or landform data to infer the type of plate boundary_
   - A. a divergent boundary, where a continent was pulled apart
   - B. a convergent boundary, where an ocean plate subducted
   - C. a transform boundary, where plates slid past each other
   - D. no boundary at all, only a hot spot under the plate
   - **Key: A**

5. **[ES.7.a.2 · LOTS]** Which process deep inside Earth supplied the force that moved the plates in these collisions?  
   _Skill: Explain how convection in the mantle moves tectonic plates_
   - A. the magnetic field produced in Earth's core
   - B. mantle convection and the pull of sinking plates
   - C. weathering and erosion of the growing mountains
   - D. the pull of the moon and the sun on the oceans
   - **Key: B**

6. **[ES.7.c.1 · LOTS]** At the rate in sentence 10, about how much wider will the Atlantic Ocean become in the next 4 million years?  
   _Skill: Describe how plate interactions build mountains (including the Appalachians) and open and close ocean basins_
   - A. 1 km
   - B. 10 km
   - C. 100 km
   - D. 1,000 km
   - **Key: C**

### Did the continents move?  
`tect-drift-debate` · Plate Tectonics · ES.7 · level 3 · 198 words · 6 questions

> (1) In a class debate, two students argued about whether the continents have moved. (2) Student 1 said the continents have always been where they are now, and that the same fossils appear on different continents because animals and plants crossed land bridges that later sank into the sea. (3) Student 2 said the continents were once joined in Pangaea and have since moved apart on slowly moving plates. (4) The class then collected the evidence below.
> 
> - (5) Fossils of the seed fern _Glossopteris_, a plant of cool, wet climates, are found in South America, Africa, India, Australia and Antarctica.
> - (6) Thick layers of coal, which forms from the remains of swamp plants, are found in Antarctica.
> - (7) Scratches cut by glaciers about 300 million years ago are found in southern Africa, India and South America, some in places that are tropical today.
> - (8) Drilling shows that the oldest sea floor is about 180 million years old, while the oldest continental rocks are about 4 billion years old.
> - (9) Sea-floor rock is youngest at the mid-ocean ridges and gets older with distance from them.
> - (10) Sonar surveys and drilling in the South Atlantic found oceanic basalt on the sea floor but no sunken blocks of continental rock.

1. **[ES.7.c.2 · HOTS]** Which sentence gives the strongest evidence against Student 1's land-bridge explanation?  
   _Skill: Evaluate evidence for plate tectonics (sea-floor spreading, magnetic stripes, fossils, rock ages, continental fit)_
   - A. sentence 5
   - B. sentence 6
   - C. sentence 9
   - D. sentence 10
   - **Key: D**

2. **[ES.7.c.2 · HOTS]** The coal described in sentence 6 best supports which conclusion?  
   _Skill: Evaluate evidence for plate tectonics (sea-floor spreading, magnetic stripes, fossils, rock ages, continental fit)_
   - A. Antarctica was once in a warmer place where swamp plants grew.
   - B. Antarctica's ice slowly turned frozen seawater into coal.
   - C. Coal forms best in cold, icy climates like Antarctica's today.
   - D. Swamp plants floated to Antarctica from other continents.
   - **Key: A**

3. **[ES.7.c.2 · HOTS]** Select TWO sentences that best support sea-floor spreading, the idea that new sea floor forms at ridges and old sea floor is later recycled into the mantle.  
   _Skill: Evaluate evidence for plate tectonics (sea-floor spreading, magnetic stripes, fossils, rock ages, continental fit)_
   - A. sentence 5
   - B. sentence 7
   - C. sentence 8
   - D. sentence 9
   - **Key: C and D**

4. **[ES.7.a.2 · LOTS]** Student 2's idea needs a force that moves the plates. Today scientists explain that plates move mainly because —  
   _Skill: Explain how convection in the mantle moves tectonic plates_
   - A. tides drag the continents through the solid sea floor
   - B. Earth's spin flings the continents toward the equator
   - C. mantle convection carries them and sinking edges pull them
   - D. sunlight heats the crust near the equator so it expands
   - **Key: C**

5. **[ES.7.b.1 · LOTS]** Old sea floor is recycled into the mantle where it sinks at a —  
   _Skill: Identify plate boundary types and the features and processes at each (ridges, trenches, rifts, volcanic arcs, faults, hot spots)_
   - A. mid-ocean ridge, where two plates pull apart
   - B. deep-ocean trench, where one plate subducts
   - C. rift valley, where a continent splits open
   - D. hot spot, where a plume melts the crust
   - **Key: B**

6. **[ES.7.a.1 · LOTS]** The mantle, into which old sea floor sinks, is best described as —  
   _Skill: Describe Earth's layers (crust, mantle, outer and inner core; lithosphere and asthenosphere) and their properties_
   - A. solid rock that can flow very slowly over long periods
   - B. a layer of liquid iron and nickel around the core
   - C. a thin layer of granite and basalt under the oceans
   - D. an ocean of melted rock just beneath the crust
   - **Key: A**


---

# Earth History (ES.9)

Standards in this unit:

- ES.9.a — traces and remains of ancient life are preserved in sedimentary rocks
- ES.9.b — superposition, cross-cutting relationships, index fossils, and radioactive decay date rocks
- ES.9.c — absolute and relative dating can be used together to determine age
- ES.9.d — rocks and fossils from many geologic periods and epochs are found in Virginia


## Level 1 — foundation

### Five fossils in a museum drawer  
`hist-museum-drawer` · Earth History · ES.9 · level 1 · 70 words · 5 questions

> (1) A drawer holds five fossils from sedimentary rock. (2) Specimen 1 is an ant trapped in **amber**, hardened tree resin. (3) Specimen 2 is a shell-shaped hollow in sandstone, called a **mold**. (4) Specimen 3 is a stone copy of a clam, made of minerals that filled a mold. (5) Specimen 4 is a thin black outline of a fern on shale. (6) Specimen 5 is a trail of three-toed footprints in mudstone.

1. **[ES.9.a.1 · LOTS]** Specimen 5 is best classified as —  
   _Skill: Describe how fossils form and are preserved_
   - A. a trace fossil that records an animal's activity
   - B. a carbon film left behind by the animal's body
   - C. a cast formed when minerals filled an empty shell
   - D. an original remain preserved without any change
   - **Key: A**

2. **[ES.9.a.1 · LOTS]** Which statement best describes how Specimen 3 formed?  
   _Skill: Describe how fossils form and are preserved_
   - A. The clam was squeezed flat, leaving a thin layer of carbon.
   - B. Tree resin flowed over the clam and hardened around it.
   - C. Minerals from groundwater filled the hollow left by the clam.
   - D. The clam was frozen in ice before its shell could decay.
   - **Key: C**

3. **[ES.9.a.1 · LOTS]** Which statement best explains why fossils like these are found mostly in sedimentary rock?  
   _Skill: Describe how fossils form and are preserved_
   - A. Igneous rock forms only at the surface, where few animals lived.
   - B. Sedimentary rock is the only rock type that contains minerals.
   - C. The heat that forms metamorphic rock helps preserve soft parts.
   - D. Sediment can bury remains without melting or crushing them.
   - **Key: D**

4. **[ES.9.a.2 · HOTS]** Specimen 5 suggests that when the tracks were made, the area was most likely —  
   _Skill: Infer past environments and changes from fossil evidence_
   - A. the floor of a deep ocean far from any shore
   - B. a stretch of soft, wet mud an animal could cross
   - C. a bare surface of hard granite bedrock
   - D. a thick sheet of glacial ice covering the land
   - **Key: B**

5. **[ES.9.b.3 · HOTS]** Specimens 4 and 5 came from the same cliff. The fern shale lies directly beneath the mudstone with the tracks, and the layers have never been overturned. Which conclusion is best supported?  
   _Skill: Sequence the events in a rock cross-section using relative dating principles_
   - A. The fern was buried before the tracks were made.
   - B. The tracks were made before the fern was buried.
   - C. The fern and the tracks must be exactly the same age.
   - D. The fern and the tracks cannot be put in any order.
   - **Key: A**

### A mammoth in the permafrost  
`hist-frozen-mammoth` · Earth History · ES.9 · level 1 · 68 words · 5 questions

> (1) Workers digging frozen ground in Siberia found a young woolly mammoth with its skin, hair and stomach contents in place. (2) Fossils in which the actual tissue survives are called **original remains**. (3) Its stomach held grasses and small flowering plants. (4) A lab measured **carbon-14** in a hair sample; carbon-14 has a half-life of 5,730 years. (5) The hair held 25% of the carbon-14 it had when the mammoth died.

1. **[ES.9.a.1 · LOTS]** Which statement best explains why the mammoth's skin and hair were preserved?  
   _Skill: Describe how fossils form and are preserved_
   - A. Minerals replaced the tissue one cell at a time.
   - B. Freezing slowed the bacteria that cause decay.
   - C. The body was pressed into a thin film of carbon.
   - D. Tree resin sealed the body away from the air.
   - **Key: B**

2. **[ES.9.b.2 · LOTS]** Based on sentences 4 and 5, about how long ago did the mammoth die?  
   _Skill: Calculate an age or the amount of parent isotope left using half-life_
   - A. 2,865 years ago
   - B. 5,730 years ago
   - C. 11,460 years ago
   - D. 22,920 years ago
   - **Key: C**

3. **[ES.9.b.1 · LOTS]** Carbon-14 could NOT be used to find the age of a 70-million-year-old dinosaur bone because —  
   _Skill: Describe the principles of relative dating and how radioactive decay dates rock_
   - A. dinosaur bones never contained any carbon atoms
   - B. carbon-14 decays faster in bone than it does in hair
   - C. the half-life of carbon-14 grows longer over time
   - D. nearly all of its carbon-14 would have decayed long ago
   - **Key: D**

4. **[ES.9.a.2 · HOTS]** The mammoth's thick woolly hair is evidence that it lived in —  
   _Skill: Infer past environments and changes from fossil evidence_
   - A. a cold climate with long winters
   - B. a warm, humid rain forest
   - C. a shallow tropical sea
   - D. a hot desert with few plants
   - **Key: A**

5. **[ES.9.a.2 · HOTS]** Which inference is best supported by the stomach contents described in sentence 3?  
   _Skill: Infer past environments and changes from fossil evidence_
   - A. The mammoth ate mainly fish caught in cold rivers.
   - B. The land nearby was open, with low-growing plants.
   - C. Thick forests of tall trees covered the whole region.
   - D. The mammoth went many weeks without eating anything.
   - **Key: B**

### Choosing an index fossil  
`hist-index-fossil-table` · Earth History · ES.9 · level 1 · 83 words · 5 questions

> (1) A geologist compared four fossil species to decide which would make the best **index fossil**. (2) The table shows where each species has been found and when it lived. (3) Later, in Virginia's Valley and Ridge, she found trilobite X and brachiopod Y together in one Ordovician limestone layer.
> 
> | Species | Where found | Lived (million years ago) |
> |---|---|---|
> | W, a snail | one small basin in Asia | 452–450 |
> | X, a trilobite | every continent | 462–456 |
> | Y, a brachiopod | eastern North America | 459–450 |
> | Z, a crinoid | every continent | 470–420 |

1. **[ES.9.b.1 · LOTS]** Which species in the table would make the best index fossil?  
   _Skill: Describe the principles of relative dating and how radioactive decay dates rock_
   - A. Species W
   - B. Species X
   - C. Species Y
   - D. Species Z
   - **Key: B**

2. **[ES.9.b.1 · LOTS]** An index fossil is most useful for dating rock layers when the species —  
   _Skill: Describe the principles of relative dating and how radioactive decay dates rock_
   - A. lived for a long time in one small area
   - B. lived for a long time all over the world
   - C. lived for a short time in one small area
   - D. lived for a short time all over the world
   - **Key: D**

3. **[ES.9.c.2 · HOTS]** Using the table, the limestone layer in sentence 3 most likely formed between —  
   _Skill: Combine relative and absolute dating evidence to determine the age of rocks or events_
   - A. 462 and 450 million years ago
   - B. 456 and 450 million years ago
   - C. 459 and 456 million years ago
   - D. 470 and 420 million years ago
   - **Key: C**

4. **[ES.9.d.1 · LOTS]** The Ordovician limestone in sentence 3 formed during which part of the geologic time scale?  
   _Skill: Describe the geologic time scale (eons, eras, periods, epochs) and major events in Earth's history_
   - A. the Paleozoic Era
   - B. the Mesozoic Era
   - C. the Cenozoic Era
   - D. Precambrian time
   - **Key: A**

5. **[ES.9.d.2 · HOTS]** Trilobites and brachiopods lived only in the sea. Finding them in this limestone suggests that during the Ordovician, the Valley and Ridge was —  
   _Skill: Relate the rocks and fossils of Virginia's regions to Virginia's geologic history_
   - A. a high, dry plateau far from any coast
   - B. covered by a warm, shallow sea
   - C. buried under a thick sheet of glacial ice
   - D. a desert of drifting sand dunes
   - **Key: B**

### Four layers in a road cut  
`hist-tilted-roadcut` · Earth History · ES.9 · level 1 · 88 words · 6 questions

> (1) A road cut in western Virginia exposes four layers of sedimentary rock, labeled from bottom to top. (2) Layer A is sandstone with ripple marks. (3) Layer B is dark shale holding thin black outlines of fern leaves. (4) Layer C is limestone packed with fossil corals and brachiopods. (5) Layer D is sandstone with no fossils. (6) All four layers are now tilted about 30 degrees, but none of them has been overturned. (7) A student identifies the corals in Layer C as a species known only from rocks of the Mississippian Period.

1. **[ES.9.b.1 · LOTS]** Which layer is the oldest, and why?  
   _Skill: Describe the principles of relative dating and how radioactive decay dates rock_
   - A. Layer D, because it is at the top of the stack
   - B. Layer C, because it holds the most fossils
   - C. Layer A, because it is at the bottom of the stack
   - D. Layer B, because shale takes the longest to form
   - **Key: C**

2. **[ES.9.a.1 · LOTS]** The fern fossils in Layer B are best described as —  
   _Skill: Describe how fossils form and are preserved_
   - A. carbon films left after the leaves were buried and pressed
   - B. trace fossils made by animals walking across the mud
   - C. petrified wood in which minerals replaced the cells
   - D. original remains kept unchanged by freezing in ice
   - **Key: A**

3. **[ES.9.a.2 · HOTS]** The fossils in Layer C show that when it formed, this area was most likely —  
   _Skill: Infer past environments and changes from fossil evidence_
   - A. a cold, dark ocean trench
   - B. a freshwater swamp forest
   - C. a dry, windy desert basin
   - D. a warm, shallow sea
   - **Key: D**

4. **[ES.9.a.2 · HOTS]** Which change in the environment is best supported by the fossils from Layer B up to Layer C?  
   _Skill: Infer past environments and changes from fossil evidence_
   - A. A shallow sea dried up and became a forest.
   - B. Land with plants was flooded by the sea.
   - C. A glacier spread over a tropical swamp.
   - D. A volcano buried a living coral reef.
   - **Key: B**

5. **[ES.9.b.3 · HOTS]** Which statement best explains when the tilting in sentence 6 happened?  
   _Skill: Sequence the events in a rock cross-section using relative dating principles_
   - A. After all four layers formed, since sediment settles in flat layers
   - B. Before Layer A formed, since the bottom layer is always the oldest
   - C. While Layer C formed, since corals can only grow on steep slopes
   - D. Never, since the layers were laid down at a 30-degree angle
   - **Key: A**

6. **[ES.9.d.1 · LOTS]** Based on sentence 7, Layer C formed during the —  
   _Skill: Describe the geologic time scale (eons, eras, periods, epochs) and major events in Earth's history_
   - A. Cenozoic Era
   - B. Mesozoic Era
   - C. Precambrian
   - D. Paleozoic Era
   - **Key: D**


## Level 2 — average student (core)

### Shaking out a half-life  
`hist-candy-half-life` · Earth History · ES.9 · level 2 · 117 words · 6 questions

> (1) To model radioactive decay, a class put 200 candies, printed side up, in a covered box. (2) Each candy stood for an atom of a **parent isotope**. (3) After each shake, candies that landed printed side down counted as decayed and were removed. (4) The table shows the results. (5) Next the class applied the idea to real rock: potassium-40 decays to argon-40 with a half-life of 1.3 billion years. (6) A granite holds 25% of its original potassium-40, and a basalt dike that cuts through the granite holds 50%. (7) A sandstone layer rests on an eroded surface across the tops of both the granite and the dike.
> 
> | Shake | Candies left |
> |---|---|
> | 0 | 200 |
> | 1 | 104 |
> | 2 | 51 |
> | 3 | 27 |
> | 4 | 12 |

1. **[ES.9.b.1 · LOTS]** In this model, each shake of the box represents —  
   _Skill: Describe the principles of relative dating and how radioactive decay dates rock_
   - A. the total age of the rock
   - B. one half-life of the isotope
   - C. a single atom of daughter isotope
   - D. the mass of the parent sample
   - **Key: B**

2. **[ES.9.b.2 · LOTS]** If the class shook the box a fifth time, about how many candies would most likely remain?  
   _Skill: Calculate an age or the amount of parent isotope left using half-life_
   - A. about 6
   - B. about 12
   - C. about 24
   - D. none at all
   - **Key: A**

3. **[ES.9.b.2 · LOTS]** Based on sentences 5 and 6, how old is the granite?  
   _Skill: Calculate an age or the amount of parent isotope left using half-life_
   - A. 0.65 billion years
   - B. 1.3 billion years
   - C. 2.6 billion years
   - D. 3.9 billion years
   - **Key: C**

4. **[ES.9.c.2 · HOTS]** Which statement best evaluates the dike's radiometric age together with the cross-cutting evidence in sentence 6?  
   _Skill: Combine relative and absolute dating evidence to determine the age of rocks or events_
   - A. The dike is 2.6 billion years old, the same age as the granite it cuts.
   - B. The dike is older than the granite, since it holds more potassium-40.
   - C. The ages conflict, since a rock that cuts another must be the older one.
   - D. The dike is 1.3 billion years old, which fits because it cuts the granite.
   - **Key: D**

5. **[ES.9.c.2 · HOTS]** Based on sentences 5 through 7, the sandstone layer must be —  
   _Skill: Combine relative and absolute dating evidence to determine the age of rocks or events_
   - A. younger than 1.3 billion years
   - B. older than 2.6 billion years
   - C. between 1.3 and 2.6 billion years old
   - D. exactly 1.3 billion years old
   - **Key: A**

6. **[ES.9.d.1 · LOTS]** A rock that formed 2.6 billion years ago belongs to which division of the geologic time scale?  
   _Skill: Describe the geologic time scale (eons, eras, periods, epochs) and major events in Earth's history_
   - A. the Cenozoic Era
   - B. Precambrian time
   - C. the Mesozoic Era
   - D. the Paleozoic Era
   - **Key: B**

### Tracks in the Culpeper Basin  
`hist-culpeper-tracks` · Earth History · ES.9 · level 2 · 88 words · 6 questions

> (1) In a quarry in the Culpeper Basin of northern Virginia, students examined red shale and sandstone from the late Triassic Period. (2) Some layers show mud cracks and ripple marks, and one surface preserves three-toed dinosaur footprints. (3) The basin formed when Earth's crust in this region was stretched and a long block dropped down along faults. (4) Streams and lakes then filled the basin with sediment. (5) Later, magma pushed up through the layers and cooled into a dark diabase dike, which radiometric dating shows is about 200 million years old.

1. **[ES.9.a.1 · LOTS]** Which sequence best explains how the footprints were preserved?  
   _Skill: Describe how fossils form and are preserved_
   - A. A dinosaur stepped in soft mud, the mud firmed up, and new sediment buried it.
   - B. Minerals slowly replaced the bones of the dinosaur's feet, one cell at a time.
   - C. The dinosaur's feet froze in ice, and the ice later melted away from them.
   - D. Tree resin filled each footprint and hardened into a clear piece of amber.
   - **Key: A**

2. **[ES.9.a.2 · HOTS]** Taken together, the mud cracks and footprints suggest that this place was once —  
   _Skill: Infer past environments and changes from fossil evidence_
   - A. the floor of a deep ocean basin
   - B. a valley filled by a thick glacier
   - C. a muddy lakeshore that sometimes dried out
   - D. a lava field beside an active volcano
   - **Key: C**

3. **[ES.9.d.1 · LOTS]** The Triassic Period is the first period of the —  
   _Skill: Describe the geologic time scale (eons, eras, periods, epochs) and major events in Earth's history_
   - A. Paleozoic Era, when trilobites first appeared
   - B. Mesozoic Era, when dinosaurs first appeared
   - C. Cenozoic Era, when humans first appeared
   - D. Precambrian, when bacteria first appeared
   - **Key: B**

4. **[ES.9.c.2 · HOTS]** Based on sentences 1 and 5, the footprint layers are best described as —  
   _Skill: Combine relative and absolute dating evidence to determine the age of rocks or events_
   - A. younger than 200 million years, since the dike lies below them
   - B. exactly 200 million years old, since the dike touches them
   - C. impossible to date, since sedimentary rock has no age at all
   - D. older than 200 million years, since the dike cuts through them
   - **Key: D**

5. **[ES.9.c.1 · LOTS]** Which statement correctly compares the two ways the quarry rocks were dated?  
   _Skill: Explain how relative dating and absolute dating differ_
   - A. Cross-cutting gave the dike an age in years; radiometric dating gave only the order.
   - B. Radiometric dating gave the dike an age in years; cross-cutting gave only the order.
   - C. Both methods gave only the order of events, never an age measured in years.
   - D. Both methods worked by measuring isotopes left inside the dinosaur footprints.
   - **Key: B**

6. **[ES.9.d.2 · HOTS]** Which event in Virginia's geologic history best explains how the basin in sentence 3 formed?  
   _Skill: Relate the rocks and fossils of Virginia's regions to Virginia's geologic history_
   - A. the breakup of Pangaea, when eastern North America was pulled apart
   - B. the continental collision that pushed up the Appalachian Mountains
   - C. the asteroid impact that made the Chesapeake Bay crater
   - D. the ice-age glaciers that carved valleys across the Piedmont
   - **Key: A**

### Sea fossils in the Shenandoah Valley  
`hist-valley-quarry` · Earth History · ES.9 · level 2 · 130 words · 6 questions

> (1) A class visited a limestone quarry in the Shenandoah Valley, part of Virginia's Valley and Ridge province. (2) The gray limestone layers are not flat; they tilt steeply toward the east. (3) In the limestone the students found trilobites, brachiopod shells and stem pieces of crinoids, all animals that lived only in the sea. (4) Their guide explained that the limestone formed during the Cambrian and Ordovician Periods. (5) Near the top of the quarry, the tilted layers end sharply at a wavy, eroded surface. (6) Resting on that surface is a flat layer of rounded river gravel that is only a few million years old. (7) The guide pointed out that the rock record between the limestone and the gravel is missing, so hundreds of millions of years are not shown in the quarry wall.

1. **[ES.9.a.2 · HOTS]** Which conclusion about the Shenandoah Valley is best supported by the fossils in sentence 3?  
   _Skill: Infer past environments and changes from fossil evidence_
   - A. Sea animals once crawled inland to live on dry ground.
   - B. The area was once covered by a sea.
   - C. Rivers recently carried the shells here from the Atlantic.
   - D. The animals lived in caves inside the limestone.
   - **Key: B**

2. **[ES.9.b.1 · LOTS]** According to the principle of original horizontality, the limestone layers —  
   _Skill: Describe the principles of relative dating and how radioactive decay dates rock_
   - A. were deposited flat and tilted later
   - B. were deposited at today's steep angle
   - C. are younger than the gravel above them
   - D. formed from lava that flowed downhill
   - **Key: A**

3. **[ES.9.b.1 · LOTS]** The wavy surface described in sentences 5 through 7 is best identified as —  
   _Skill: Describe the principles of relative dating and how radioactive decay dates rock_
   - A. a fault, where blocks of rock slid past each other
   - B. a dike, where magma cut across the older layers
   - C. an unconformity, a gap where rock was eroded away
   - D. a fossil bed, where the most shells piled up
   - **Key: C**

4. **[ES.9.b.3 · HOTS]** Which sequence of events, from first to last, best explains the quarry wall?  
   _Skill: Sequence the events in a rock cross-section using relative dating principles_
   - A. layers tilted, limestone deposited, gravel deposited, erosion
   - B. limestone deposited, gravel deposited, layers tilted, erosion
   - C. gravel deposited, limestone deposited, erosion, layers tilted
   - D. limestone deposited, layers tilted, erosion, gravel deposited
   - **Key: D**

5. **[ES.9.d.1 · LOTS]** The Cambrian and Ordovician Periods come at the start of the —  
   _Skill: Describe the geologic time scale (eons, eras, periods, epochs) and major events in Earth's history_
   - A. Paleozoic Era, right after Precambrian time
   - B. Mesozoic Era, the age of the dinosaurs
   - C. Cenozoic Era, the age of the mammals
   - D. Precambrian, before any life existed
   - **Key: A**

6. **[ES.9.d.2 · HOTS]** Which event in Virginia's history most likely tilted the limestone layers?  
   _Skill: Relate the rocks and fossils of Virginia's regions to Virginia's geologic history_
   - A. the asteroid impact that formed the Chesapeake Bay crater
   - B. the stretching of crust that opened the Triassic basins
   - C. the slow rise of sea level across the Coastal Plain
   - D. the collision of continents that built the Appalachians
   - **Key: D**

### Shells and shark teeth on the York River  
`hist-york-river-cliffs` · Earth History · ES.9 · level 2 · 138 words · 6 questions

> (1) Along the York River in Virginia's Coastal Plain, cliffs about 15 meters high expose layers of loose sand and clay. (2) A student team mapped three units, from bottom to top. (3) Unit 1, at the water's edge, is gray clay with shark teeth and pieces of whale bone. (4) Unit 2 is tan sand packed with large scallop shells of _Chesapecten jeffersonius_, Virginia's state fossil, which lived about 4 to 5 million years ago in the Pliocene Epoch. (5) Unit 3, at the top, is reddish sand with no shells. (6) Shark teeth are common in Unit 1, but shark skeletons are almost never found. (7) Deep wells drilled near the mouth of the Chesapeake Bay pass through layers like these and, much farther down, reach a jumbled layer of broken rock left by an asteroid impact about 35 million years ago.

1. **[ES.9.d.1 · LOTS]** The Pliocene Epoch named in sentence 4 is part of which era?  
   _Skill: Describe the geologic time scale (eons, eras, periods, epochs) and major events in Earth's history_
   - A. the Mesozoic Era
   - B. the Paleozoic Era
   - C. the Cenozoic Era
   - D. Precambrian time
   - **Key: C**

2. **[ES.9.a.1 · LOTS]** Which statement best explains the observation in sentence 6?  
   _Skill: Describe how fossils form and are preserved_
   - A. Sharks of that time had teeth but no skeletons at all.
   - B. Teeth are hard, but shark skeletons are cartilage that decays.
   - C. Teeth sank to the sea floor, but skeletons always floated away.
   - D. Shark skeletons were too large to be covered by sediment.
   - **Key: B**

3. **[ES.9.a.2 · HOTS]** Which conclusion is best supported by the fossils in Units 1 and 2?  
   _Skill: Infer past environments and changes from fossil evidence_
   - A. The area was a dry forest when the shells were buried.
   - B. Whales and sharks once lived in freshwater lakes here.
   - C. Rivers carried the fossils inland from the modern bay.
   - D. Seawater covered this part of Virginia as the layers formed.
   - **Key: D**

4. **[ES.9.b.1 · LOTS]** Which unit in the cliff is the oldest, and which principle shows this?  
   _Skill: Describe the principles of relative dating and how radioactive decay dates rock_
   - A. Unit 1, by the principle of superposition
   - B. Unit 3, by the principle of superposition
   - C. Unit 2, because it holds an index fossil
   - D. Unit 1, by the principle of cross-cutting
   - **Key: A**

5. **[ES.9.c.2 · HOTS]** Using sentences 3, 4 and 7, the best estimate for the age of the whale bone in Unit 1 is —  
   _Skill: Combine relative and absolute dating evidence to determine the age of rocks or events_
   - A. more than 35 million years, since it is at the water's edge
   - B. between about 5 and 35 million years
   - C. less than 4 million years, since it lies in a cliff
   - D. the same age as the impact layer below
   - **Key: B**

6. **[ES.9.d.2 · HOTS]** Which statement best fits the buried impact layer into Virginia's geologic history?  
   _Skill: Relate the rocks and fossils of Virginia's regions to Virginia's geologic history_
   - A. An impact struck the lower bay area, and younger sediment later buried the crater.
   - B. The impact came after the scallops lived and scattered their shells inland.
   - C. The impact pushed up the Blue Ridge, which still rises west of the bay.
   - D. The impact ended the age of dinosaurs and buried their bones near the bay.
   - **Key: A**


## Level 3 — stretch

### A dike, a fault and an ash bed  
`hist-canyon-cross-section` · Earth History · ES.9 · level 3 · 118 words · 6 questions

> (1) A geology class studied a cross-section drawn from a canyon wall. (2) From bottom to top, it shows shale A, sandstone B and limestone C, all lying flat. (3) A granite dike, D, cuts upward through A, B and C. (4) A wavy erosion surface slices across the top of C and the top of the dike. (5) Above that surface lies conglomerate E, which contains pebbles of granite that match the dike. (6) A fault, F, breaks layers A through E and shifts them 2 meters. (7) The top layer, sandstone G, lies across the fault without being broken. (8) Radiometric dating shows that the dike is 320 million years old and that a volcanic ash bed within G is 270 million years old.

1. **[ES.9.b.1 · LOTS]** Which principle shows that dike D is younger than layers A, B and C?  
   _Skill: Describe the principles of relative dating and how radioactive decay dates rock_
   - A. the principle of superposition
   - B. the principle of original horizontality
   - C. the use of index fossils
   - D. the principle of cross-cutting relationships
   - **Key: D**

2. **[ES.9.b.3 · HOTS]** Which observation from the passage best shows that the dike formed before conglomerate E?  
   _Skill: Sequence the events in a rock cross-section using relative dating principles_
   - A. E contains pebbles of granite that match the dike.
   - B. The dike cuts upward through shale A.
   - C. Fault F breaks both the dike and layer E.
   - D. Sandstone G lies on top of layer E.
   - **Key: A**

3. **[ES.9.b.3 · HOTS]** Which list gives the events in order from oldest to youngest?  
   _Skill: Sequence the events in a rock cross-section using relative dating principles_
   - A. A, B, C, erosion, D, E, F, G
   - B. D, A, B, C, erosion, E, G, F
   - C. A, B, C, D, erosion, E, F, G
   - D. A, B, C, D, E, erosion, G, F
   - **Key: C**

4. **[ES.9.c.2 · HOTS]** What is the best estimate for when fault F formed?  
   _Skill: Combine relative and absolute dating evidence to determine the age of rocks or events_
   - A. more than 320 million years ago
   - B. between 320 and 270 million years ago
   - C. less than 270 million years ago
   - D. at the same time as the dike formed
   - **Key: B**

5. **[ES.9.c.1 · LOTS]** Which statement best describes how the two kinds of evidence in this cross-section differ?  
   _Skill: Explain how relative dating and absolute dating differ_
   - A. The principles place A through G in order; the isotopes give ages in years.
   - B. The isotopes place A through G in order; the principles give ages in years.
   - C. Both kinds of evidence give exact ages in years for every layer shown.
   - D. Neither kind of evidence can be used on rocks that have been faulted.
   - **Key: A**

6. **[ES.9.d.1 · LOTS]** The dates in sentence 8 show that fault F formed during the —  
   _Skill: Describe the geologic time scale (eons, eras, periods, epochs) and major events in Earth's history_
   - A. Mesozoic Era
   - B. Cenozoic Era
   - C. Paleozoic Era
   - D. Precambrian
   - **Key: C**

### A drill core from coal country  
`hist-coal-core` · Earth History · ES.9 · level 3 · 191 words · 6 questions

> (1) In southwest Virginia, on the Appalachian Plateau, a mining company drilled a core through flat-lying rock from the Pennsylvanian Period. (2) The table summarizes the rock layers in the core, listed from the surface down to 25 meters. (3) The lowest shale holds fern leaves and the bark of scale trees, preserved mostly as thin black **carbon films**. (4) It also holds upright tree trunks that are **casts**: when each stump rotted away, sand filled the hollow it left and hardened into a stone copy. (5) The coal itself is made of flattened leaves, bark and roots that piled up and were buried before they could rot. (6) A thin layer of volcanic ash inside the coal contains crystals that radiometric dating places at 315 million years old. (7) At that time, Virginia lay near the equator, and the young Appalachian Mountains were rising to the east as continents collided to form Pangaea. (8) Rivers carried sand and mud westward from those mountains onto a broad, low plain near sea level.
> 
> | Depth (m) | Rock | Fossils |
> |---|---|---|
> | 0–12 | sandstone | none |
> | 12–15 | dark shale | brachiopods, crinoids |
> | 15–17 | coal with ash layer | flattened plants |
> | 17–25 | gray shale | ferns, tree casts |

1. **[ES.9.a.1 · LOTS]** The tree trunks in sentence 4 are casts rather than molds because —  
   _Skill: Describe how fossils form and are preserved_
   - A. each trunk was pressed into a thin film of carbon
   - B. the original wood was preserved without change
   - C. sediment filled the hollow and made a solid copy
   - D. each hollow stayed empty after the stump rotted
   - **Key: C**

2. **[ES.9.a.2 · HOTS]** The coal and the plant fossils below it best support which conclusion about this area 315 million years ago?  
   _Skill: Infer past environments and changes from fossil evidence_
   - A. It was a warm, wet lowland covered by swamp forests.
   - B. It was a cold, dry plateau with very few plants.
   - C. It was the floor of a deep ocean far from land.
   - D. It was a high mountain range topped by glaciers.
   - **Key: A**

3. **[ES.9.a.2 · HOTS]** Which change is best supported by the dark shale directly above the coal?  
   _Skill: Infer past environments and changes from fossil evidence_
   - A. The swamp dried out and became a sandy desert.
   - B. Lava flows from volcanoes buried the swamp.
   - C. Glaciers scraped the swamp plants away.
   - D. Seawater flooded the swamp and covered it in mud.
   - **Key: D**

4. **[ES.9.c.2 · HOTS]** Which statement about the ages of the layers in the core is best supported?  
   _Skill: Combine relative and absolute dating evidence to determine the age of rocks or events_
   - A. The gray shale is younger than 315 million years, since it holds plants.
   - B. The gray shale is older than 315 million years; the dark shale is younger.
   - C. All four layers formed exactly 315 million years ago, along with the ash.
   - D. The sandstone at the top of the core is the oldest layer that was drilled.
   - **Key: B**

5. **[ES.9.d.1 · LOTS]** The Pennsylvanian Period belongs to the —  
   _Skill: Describe the geologic time scale (eons, eras, periods, epochs) and major events in Earth's history_
   - A. Mesozoic Era, when dinosaurs were common
   - B. Cenozoic Era, after the dinosaurs died out
   - C. Precambrian, before any land plants grew
   - D. Paleozoic Era, before the first dinosaurs
   - **Key: D**

6. **[ES.9.d.2 · HOTS]** Using sentences 7 and 8, which explanation best accounts for the coal of southwest Virginia?  
   _Skill: Relate the rocks and fossils of Virginia's regions to Virginia's geologic history_
   - A. Glaciers pushed piles of plants south from Canada into Virginia.
   - B. Lava from the Triassic basins covered forests and baked them.
   - C. Sediment from rising mountains buried swamp plants on a low plain.
   - D. Debris from the Chesapeake Bay impact buried coastal forests.
   - **Key: C**

### Earth's history down a hallway  
`hist-timeline-hallway` · Earth History · ES.9 · level 3 · 201 words · 6 questions

> (1) A class built a model of Earth's history along a 46-meter hallway, where each meter stands for 100 million years. (2) The far end, labeled 46 m, marks Earth's formation about 4.6 billion years ago, and the near end, labeled 0 m, marks today. (3) The students taped cards at the distances shown in the table. (4) Everything farther than the 5.4-meter card is **Precambrian** time; the Paleozoic, Mesozoic and Cenozoic Eras all fit in the last 5.4 meters. (5) The earliest fossils are layered mounds built by bacteria in shallow seas, and the first oxygen-rich rocks appear long after them. (6) Mammals first appeared in the Mesozoic, but they stayed small and few in kinds until after the 0.66-meter card. (7) Next, the class plans to add cards for Ordovician trilobites from the Valley and Ridge, Triassic dinosaur tracks from the Culpeper Basin and Pliocene _Chesapecten_ scallops from the Coastal Plain. (8) One student asked where to tape a card for the first modern humans, who appeared about 300,000 years ago.
> 
> | Event | Card (m) |
> |---|---|
> | first fossils of life (bacteria) | 35 |
> | oxygen begins to build up in air | 24 |
> | Paleozoic begins; shelled animals spread | 5.4 |
> | largest mass extinction ends the Paleozoic | 2.5 |
> | mass extinction ends the Mesozoic | 0.66 |

1. **[ES.9.d.1 · LOTS]** According to the model, about how much of Earth's history is Precambrian time?  
   _Skill: Describe the geologic time scale (eons, eras, periods, epochs) and major events in Earth's history_
   - A. about 12 percent
   - B. about 25 percent
   - C. about 50 percent
   - D. almost 90 percent
   - **Key: D**

2. **[ES.9.d.1 · LOTS]** Where should the card for the first modern humans (sentence 8) be taped?  
   _Skill: Describe the geologic time scale (eons, eras, periods, epochs) and major events in Earth's history_
   - A. about 3 millimeters from the 0 m end
   - B. about 3 meters from the 0 m end
   - C. about 30 centimeters from the 0 m end
   - D. right beside the 0.66-meter card
   - **Key: A**

3. **[ES.9.a.2 · HOTS]** Which inference is best supported by sentence 5 and the first two cards in the table?  
   _Skill: Infer past environments and changes from fossil evidence_
   - A. Oxygen filled the air first, and that let the first bacteria appear.
   - B. Early bacteria made oxygen slowly, so it took over a billion years to build up.
   - C. The first bacteria used up all the oxygen that was in the early air.
   - D. Oxygen built up only after shelled animals began to spread in the sea.
   - **Key: B**

4. **[ES.9.a.2 · HOTS]** Which inference best explains the pattern described in sentence 6?  
   _Skill: Infer past environments and changes from fossil evidence_
   - A. Mammals caused the dinosaurs to die out by eating their eggs.
   - B. Mammals first appeared on Earth just after the dinosaurs died.
   - C. The loss of the dinosaurs opened habitats that mammals then filled.
   - D. The extinction killed every mammal, and mammals evolved again later.
   - **Key: C**

5. **[ES.9.d.2 · HOTS]** Which list puts the Virginia fossils in sentence 7 in order from the card farthest from 0 m to the card closest to 0 m?  
   _Skill: Relate the rocks and fossils of Virginia's regions to Virginia's geologic history_
   - A. <em>Chesapecten</em>, dinosaur tracks, trilobites
   - B. trilobites, dinosaur tracks, <em>Chesapecten</em>
   - C. dinosaur tracks, trilobites, <em>Chesapecten</em>
   - D. trilobites, <em>Chesapecten</em>, dinosaur tracks
   - **Key: B**

6. **[ES.9.b.2 · LOTS]** A student adds a card at 26 m for a granite dated with potassium-40, which has a half-life of 1.3 billion years. What fraction of the granite's original potassium-40 remains today?  
   _Skill: Calculate an age or the amount of parent isotope left using half-life_
   - A. one-half
   - B. two-thirds
   - C. one-eighth
   - D. one-fourth
   - **Key: D**


---

# Oceans (ES.10)

Standards in this unit:

- ES.10.a — properties of ocean water; tides, waves, currents, and upwelling
- ES.10.b — ocean circulation transfers energy and affects weather and climate
- ES.10.c — features of the sea floor reflect geologic processes
- ES.10.d — sea level, ice caps, and ocean chemistry change over time
- ES.10.e — human actions, economics, and public policy impact oceans, the coast, and the Chesapeake Bay


## Level 1 — foundation

### A buoy that tracks ocean pH  
`ocean-ph-buoy` · Oceans · ES.10 · level 1 · 71 words · 5 questions

> (1) A buoy anchored in the open Atlantic Ocean has measured the carbon dioxide (CO2) in the air and the **pH** of the surface water since 1990. (2) Seawater absorbs CO2 from the air, and the dissolved gas forms a weak acid. (3) The yearly averages are shown in the table.
> 
> | Year | CO2 in air (ppm) | Surface pH |
> |---|---|---|
> | 1990 | 355 | 8.11 |
> | 2000 | 370 | 8.09 |
> | 2010 | 390 | 8.07 |
> | 2020 | 413 | 8.05 |

1. **[ES.10.d.2 · HOTS]** Which statement best describes the relationship shown in the buoy data?  
   _Skill: Analyze data on sea level, ice or ocean chemistry to identify trends and causes_
   - A. As CO2 in the air increased, the pH of the surface water decreased.
   - B. As CO2 in the air increased, the pH of the surface water increased.
   - C. The pH of the surface water stayed the same while CO2 increased.
   - D. CO2 in the air and the pH of the water both decreased over time.
   - **Key: A**

2. **[ES.10.d.1 · LOTS]** The drop in pH shown in the table means the surface water has become —  
   _Skill: Describe causes of changes in sea level, polar ice and ocean chemistry_
   - A. more basic
   - B. more acidic
   - C. less salty
   - D. less dense
   - **Key: B**

3. **[ES.10.e.1 · LOTS]** Which human activity is the main source of the extra CO2 the buoy detected?  
   _Skill: Describe how human activities affect the oceans and the Chesapeake Bay (runoff, nutrients, dead zones, overfishing, development)_
   - A. releasing CFCs from old refrigerators
   - B. washing fertilizer from fields into rivers
   - C. building stone jetties along sandy beaches
   - D. burning fossil fuels such as coal, oil and gas
   - **Key: D**

4. **[ES.10.d.1 · LOTS]** If the change shown in the table continues, it will most likely make it harder for some sea life to —  
   _Skill: Describe causes of changes in sea level, polar ice and ocean chemistry_
   - A. find fresh water to drink
   - B. swim against surface currents
   - C. build shells of calcium carbonate
   - D. absorb sunlight near the surface
   - **Key: C**

5. **[ES.10.d.2 · HOTS]** If the trend in the table continues at the same rate, the surface pH in 2030 will most likely be closest to —  
   _Skill: Analyze data on sea level, ice or ocean chemistry to identify trends and causes_
   - A. 8.15
   - B. 8.11
   - C. 8.03
   - D. 6.50
   - **Key: C**

### Tide times on a Virginia Beach pier  
`ocean-tide-pier` · Oceans · ES.10 · level 1 · 78 words · 5 questions

> (1) A student fishing from a pier at Virginia Beach recorded the time and height of each high and low tide on the day of a **full moon**. (2) She noticed that the difference between high and low water, the **tidal range**, was larger than it had been one week earlier. (3) Her record is shown in the table.
> 
> | Tide | Time | Height (m) |
> |---|---|---|
> | High | 3:10 a.m. | 1.3 |
> | Low | 9:22 a.m. | -0.1 |
> | High | 3:35 p.m. | 1.2 |
> | Low | 9:48 p.m. | 0.0 |

1. **[ES.10.a.2 · LOTS]** Which is the main cause of the rise and fall of the water shown in the table?  
   _Skill: Explain the causes of tides, waves, currents and upwelling_
   - A. wind pushing waves onto the beach
   - B. the sun heating and expanding the water
   - C. the moon's gravity pulling on Earth's oceans
   - D. the Gulf Stream carrying water past the pier
   - **Key: C**

2. **[ES.10.a.3 · HOTS]** Based on the pattern in the table, the first high tide of the next day would most likely occur at about —  
   _Skill: Analyze ocean data such as temperature, salinity and density profiles_
   - A. 3:10 a.m.
   - B. 4:00 a.m.
   - C. 9:22 a.m.
   - D. 3:35 p.m.
   - **Key: B**

3. **[ES.10.a.2 · LOTS]** Which statement best explains why the tidal range in sentence 2 was larger on the day of the full moon?  
   _Skill: Explain the causes of tides, waves, currents and upwelling_
   - A. The sun, Earth and moon were lined up, so their pulls combined.
   - B. The moon was at a right angle to the sun, so its pull was doubled.
   - C. The full moon reflected sunlight that warmed and raised the water.
   - D. Earth's shadow on the moon reduced the pull of the sun on the ocean.
   - **Key: A**

4. **[ES.10.a.3 · HOTS]** One week after this record was made, the moon will be at third quarter. On that day the student would most likely record —  
   _Skill: Analyze ocean data such as temperature, salinity and density profiles_
   - A. only one high tide and one low tide
   - B. a larger tidal range than on the full moon
   - C. no tides at all because the moon is half lit
   - D. a smaller tidal range than on the full moon
   - **Key: D**

5. **[ES.10.a.2 · LOTS]** The Virginia coast has two high tides and two low tides each day because —  
   _Skill: Explain the causes of tides, waves, currents and upwelling_
   - A. the moon orbits Earth twice each day
   - B. the sun and moon take turns pulling on the ocean
   - C. Earth rotates through two bulges of water each day
   - D. winds change direction every six hours along the coast
   - **Key: C**

### Making waves in a tank  
`ocean-wave-tank` · Oceans · ES.10 · level 1 · 83 words · 5 questions

> (1) A class blew a fan across a long tank of water and measured the **wave height** (trough to crest) and the **wavelength** (crest to crest) at three fan speeds. (2) A cork in the middle bobbed up and down as each wave passed but stayed in nearly the same place. (3) At the shallow, sloping end of the tank, the waves grew taller and tipped over as **breakers**.
> 
> | Fan speed | Wave height (cm) | Wavelength (cm) |
> |---|---|---|
> | Low | 1.0 | 20 |
> | Medium | 2.5 | 30 |
> | High | 4.0 | 40 |

1. **[ES.10.a.2 · LOTS]** In the ocean, the fan in this model represents —  
   _Skill: Explain the causes of tides, waves, currents and upwelling_
   - A. the pull of the moon on the water
   - B. the turning of Earth on its axis
   - C. cold water sinking near the poles
   - D. wind transferring energy to the water
   - **Key: D**

2. **[ES.10.a.3 · HOTS]** Based on the wave-tank data in the table, which conclusion is best supported?  
   _Skill: Analyze ocean data such as temperature, salinity and density profiles_
   - A. Stronger wind makes waves that are taller and longer.
   - B. Wave height does not depend on the speed of the wind.
   - C. Stronger wind makes waves with shorter wavelengths.
   - D. Wave height decreases as the wavelength increases.
   - **Key: A**

3. **[ES.10.a.2 · LOTS]** The motion of the cork in sentence 2 shows that waves —  
   _Skill: Explain the causes of tides, waves, currents and upwelling_
   - A. push floating objects to shore at the speed of the wave
   - B. move energy forward while the water mostly stays in place
   - C. form only when water flows from one end of a tank to the other
   - D. travel along the bottom of the water and not at the surface
   - **Key: B**

4. **[ES.10.a.2 · LOTS]** Which statement best explains why the waves became breakers at the shallow end?  
   _Skill: Explain the causes of tides, waves, currents and upwelling_
   - A. The fan blew harder on the water at the shallow end.
   - B. The water at the shallow end was saltier and denser.
   - C. The bottom slowed each wave, so it grew steep and toppled.
   - D. The cork blocked the waves and made them pile up.
   - **Key: C**

5. **[ES.10.a.3 · HOTS]** If the class set the fan to a speed between medium and high, the wave height would most likely be about —  
   _Skill: Analyze ocean data such as temperature, salinity and density profiles_
   - A. 1.5 cm
   - B. 3.2 cm
   - C. 4.8 cm
   - D. 6.0 cm
   - **Key: B**

### Four colors in a column  
`ocean-density-column` · Oceans · ES.10 · level 1 · 117 words · 6 questions

> (1) To model how seawater forms layers, a student filled four cups with water of different temperatures and salinities and added a different food coloring to each. (2) She measured the density of each sample and then slowly poured all four into one tall clear column, starting with the densest. (3) The colors stayed in separate layers instead of mixing. (4) Her teacher explained that similar layering happens near the poles, where seawater becomes so cold and salty that it grows denser than the water around it and sinks toward the ocean floor.
> 
> | Cup (color) | Temperature (°C) | Salinity (ppt) | Density (g/mL) |
> |---|---|---|---|
> | A (blue) | 4 | 35 | 1.028 |
> | B (red) | 40 | 0 | 0.992 |
> | C (green) | 22 | 35 | 1.024 |
> | D (yellow) | 22 | 0 | 0.998 |

1. **[ES.10.a.1 · LOTS]** The water that formed the bottom layer of the column was —  
   _Skill: Describe how temperature and salinity affect the density of seawater_
   - A. warm and fresh
   - B. cold and salty
   - C. room temperature and salty
   - D. room temperature and fresh
   - **Key: B**

2. **[ES.10.a.3 · HOTS]** Comparing cups C and D shows the effect of which variable on density?  
   _Skill: Analyze ocean data such as temperature, salinity and density profiles_
   - A. temperature, because both cups had the same salinity
   - B. food coloring, because each cup had a different color
   - C. volume, because each cup held a different amount
   - D. salinity, because both cups were at the same temperature
   - **Key: D**

3. **[ES.10.a.1 · LOTS]** Which statement best explains why the red water ended up as the top layer?  
   _Skill: Describe how temperature and salinity affect the density of seawater_
   - A. It was warm and fresh, so it was the least dense.
   - B. It was the densest water, so it floated on the rest.
   - C. It had the highest salinity of the four samples.
   - D. Red food coloring is lighter than the other colors.
   - **Key: A**

4. **[ES.10.b.1 · LOTS]** The sinking of cold, salty water described in sentence 4 is what drives —  
   _Skill: Describe surface currents and deep (density-driven) currents_
   - A. wind-driven surface currents such as the Gulf Stream
   - B. the two high tides that reach the coast each day
   - C. deep currents that move cold water along the sea floor
   - D. the breaking waves that move sand along beaches
   - **Key: C**

5. **[ES.10.a.3 · HOTS]** A fifth sample of fresh water at 4 °C has a density of 1.000 g/mL. If it were gently added to the column, it would most likely settle —  
   _Skill: Analyze ocean data such as temperature, salinity and density profiles_
   - A. below the blue layer
   - B. between the blue and green layers
   - C. between the green and yellow layers
   - D. above the red layer
   - **Key: C**

6. **[ES.10.d.2 · HOTS]** Melting ice from Greenland adds fresh water to the surface of the North Atlantic. Based on the model, this would most likely —  
   _Skill: Analyze data on sea level, ice or ocean chemistry to identify trends and causes_
   - A. make the surface water denser, so more of it sinks
   - B. make the surface water less dense, so less of it sinks
   - C. have no effect, because density depends only on temperature
   - D. raise the salinity of the deep water near the poles
   - **Key: B**


## Level 2 — average student (core)

### Salt from the Susquehanna to Cape Henry  
`ocean-bay-salinity` · Oceans · ES.10 · level 2 · 119 words · 6 questions

> (1) The Chesapeake Bay is an **estuary**, a partly enclosed body of water where fresh river water mixes with salty ocean water. (2) In April, a research boat measured surface **salinity** at five stations from the mouth of the Susquehanna River south to the Bay's mouth at Cape Henry, Virginia. (3) For comparison, the open Atlantic averages about 35 parts per thousand (ppt). (4) At station 3, the crew found that water near the bottom was 4 ppt saltier than water at the surface. (5) Many of the rivers that feed the Bay drain farmland and cities.
> 
> | Station | Location | Surface salinity (ppt) |
> |---|---|---|
> | 1 | Susquehanna River mouth | 0 |
> | 2 | Upper Bay | 6 |
> | 3 | Middle Bay | 13 |
> | 4 | Lower Bay | 20 |
> | 5 | Cape Henry | 27 |

1. **[ES.10.a.3 · HOTS]** Which statement best describes the pattern in the salinity data?  
   _Skill: Analyze ocean data such as temperature, salinity and density profiles_
   - A. Salinity is highest near the river mouth and falls toward the ocean.
   - B. Salinity is about the same at every station in the Bay.
   - C. Salinity rises from the river mouth toward the Atlantic Ocean.
   - D. Salinity at Cape Henry is higher than in the open Atlantic.
   - **Key: C**

2. **[ES.10.a.1 · LOTS]** If all of the surface samples were the same temperature, which station's sample would be the most dense?  
   _Skill: Describe how temperature and salinity affect the density of seawater_
   - A. Station 1
   - B. Station 2
   - C. Station 3
   - D. Station 5
   - **Key: D**

3. **[ES.10.a.1 · LOTS]** Which statement best explains the observation in sentence 4?  
   _Skill: Describe how temperature and salinity affect the density of seawater_
   - A. Saltier water is denser, so it sinks below fresher water.
   - B. Fresher water is denser, so it sinks below saltier water.
   - C. Sand on the bottom dissolves and adds salt to deep water.
   - D. Sunlight evaporates bottom water and leaves salt behind.
   - **Key: A**

4. **[ES.10.a.3 · HOTS]** After a very rainy May with high river flow, the surface salinity at station 3 would most likely —  
   _Skill: Analyze ocean data such as temperature, salinity and density profiles_
   - A. rise, because rain carries salt from the land
   - B. fall, because more fresh water dilutes the salt
   - C. stay the same, because the Bay is connected to the ocean
   - D. rise, because fast rivers push ocean water up the Bay
   - **Key: B**

5. **[ES.10.e.1 · LOTS]** Fertilizer that washes off farmland in the Bay's watershed (sentence 5) adds which of these to the Bay?  
   _Skill: Describe how human activities affect the oceans and the Chesapeake Bay (runoff, nutrients, dead zones, overfishing, development)_
   - A. salt that raises the Bay's salinity
   - B. oxygen that helps crabs and fish breathe
   - C. sand that rebuilds eroded beaches
   - D. nitrogen and phosphorus that feed algae
   - **Key: D**

6. **[ES.10.d.2 · HOTS]** Sea level at the mouth of the Bay is rising. If river flow stays the same, the salinity at station 4 over the coming decades will most likely —  
   _Skill: Analyze data on sea level, ice or ocean chemistry to identify trends and causes_
   - A. increase, as salty ocean water reaches farther up the Bay
   - B. decrease, as the deeper water dilutes the salt already there
   - C. drop to 0 ppt, as the Bay becomes cut off from the ocean
   - D. stay the same, as salinity depends only on water temperature
   - **Key: A**

### Tracking sand at Virginia Beach  
`ocean-longshore-sand` · Oceans · ES.10 · level 2 · 122 words · 6 questions

> (1) On a day when waves rolled in from the northeast, students at Virginia Beach saw them strike the shore at an angle, setting up a **longshore current** that flowed parallel to the beach. (2) They buried a bucket of orange-dyed sand at the water's edge and searched for it later. (3) A stone jetty juts into the ocean at an inlet 2 km south of their site. (4) The city pumps sand onto eroded beaches every few years, a practice called **beach nourishment**. (5) On the Eastern Shore, undeveloped barrier islands are slowly moving toward the mainland as sea level rises.
> 
> | Time after burial | Where the orange sand was found |
> |---|---|
> | 6 hours | 25 m south |
> | 24 hours | 90 m south |
> | 48 hours | 170 m south |

1. **[ES.10.a.2 · LOTS]** According to sentence 1, the longshore current is caused by —  
   _Skill: Explain the causes of tides, waves, currents and upwelling_
   - A. fresh water flowing out of the inlet
   - B. the moon's gravity pulling on the beach
   - C. cold, dense water sinking offshore
   - D. waves striking the shore at an angle
   - **Key: D**

2. **[ES.10.a.3 · HOTS]** Which conclusion about the orange sand is best supported by the table?  
   _Skill: Analyze ocean data such as temperature, salinity and density profiles_
   - A. The current carried sand north at about 170 m per day.
   - B. The sand stayed in place for the first 24 hours.
   - C. The current carried sand south at about 85 m per day.
   - D. The sand moved faster on the second day than the first.
   - **Key: C**

3. **[ES.10.a.3 · HOTS]** If the current keeps flowing in the same direction for several weeks, sand will most likely —  
   _Skill: Analyze ocean data such as temperature, salinity and density profiles_
   - A. pile up on the north side of the jetty
   - B. pile up on the south side of the jetty
   - C. build up at the students' study site
   - D. move north toward the Chesapeake Bay
   - **Key: A**

4. **[ES.10.e.1 · LOTS]** Under these conditions, the jetty in sentence 3 would most likely cause the beach just south of it to —  
   _Skill: Describe how human activities affect the oceans and the Chesapeake Bay (runoff, nutrients, dead zones, overfishing, development)_
   - A. widen, because the jetty adds new sand to it
   - B. narrow, because sand is trapped before reaching it
   - C. stay the same, because jetties do not affect sand
   - D. flood, because the jetty raises the local sea level
   - **Key: B**

5. **[ES.10.e.2 · HOTS]** Which statement best weighs a benefit against a cost of beach nourishment?  
   _Skill: Evaluate actions and policies that protect the oceans, the coast and the Chesapeake Bay_
   - A. It ends erosion for good, but it makes the ocean water saltier.
   - B. It costs nothing because the sand is free, but it narrows the beach.
   - C. A wider beach shields buildings, but the work is costly and repeated.
   - D. It stops the longshore current, but it harms the Gulf Stream.
   - **Key: C**

6. **[ES.10.d.1 · LOTS]** Sentence 5 links the moving barrier islands to rising sea level. Which is a cause of the worldwide rise in sea level?  
   _Skill: Describe causes of changes in sea level, polar ice and ocean chemistry_
   - A. melting of glaciers and ice sheets on land
   - B. melting of sea ice already floating in the Arctic
   - C. evaporation of water from the ocean surface
   - D. the Coriolis effect turning surface currents
   - **Key: A**

### Crossing the Gulf Stream  
`ocean-gulf-stream` · Oceans · ES.10 · level 2 · 138 words · 6 questions

> (1) On a February day, a research ship sailed straight east from Virginia Beach and measured the sea-surface temperature every 50 km. (2) About 100 km offshore, the sea floor drops steeply from the shallow continental shelf toward the deep ocean. (3) Farther out, the ship crossed the **Gulf Stream**, a fast, narrow surface current that carries warm water from the tropics north along the coast and then northeast across the Atlantic toward Europe. (4) Like other large surface currents in the Northern Hemisphere, its path curves to the right as it moves. (5) Water in the Gulf Stream stays warmer than the water near the coast all year, and in late summer hurricanes moving north from the Caribbean often pass over it.
> 
> | Distance from shore (km) | Surface temperature (°C) |
> |---|---|
> | 50 | 6 |
> | 100 | 8 |
> | 150 | 12 |
> | 200 | 23 |
> | 250 | 24 |
> | 300 | 18 |

1. **[ES.10.b.1 · LOTS]** Surface currents such as the Gulf Stream are driven mainly by —  
   _Skill: Describe surface currents and deep (density-driven) currents_
   - A. the gravity of the moon and the sun
   - B. steady winds blowing over the ocean
   - C. heat rising from the mid-ocean ridge
   - D. cold, salty water sinking at the poles
   - **Key: B**

2. **[ES.10.b.1 · LOTS]** The curving of the current's path described in sentence 4 is caused by —  
   _Skill: Describe surface currents and deep (density-driven) currents_
   - A. the Coriolis effect of Earth's rotation
   - B. the daily rise and fall of the tides
   - C. fresh water flowing out of the Bay
   - D. waves breaking on the barrier islands
   - **Key: A**

3. **[ES.10.a.3 · HOTS]** Based on the table, the ship was most likely inside the Gulf Stream from about —  
   _Skill: Analyze ocean data such as temperature, salinity and density profiles_
   - A. 50 to 100 km offshore
   - B. 100 to 150 km offshore
   - C. 200 to 250 km offshore
   - D. 300 km offshore and beyond
   - **Key: C**

4. **[ES.10.b.2 · HOTS]** Based on sentence 3, which statement best explains how the Gulf Stream affects climate?  
   _Skill: Analyze how ocean circulation moves heat and affects weather and climate_
   - A. It carries cold polar water south and cools Virginia's summers.
   - B. It moves heat to the sea floor, so it cannot warm the air above.
   - C. It blocks sunlight from the ocean and chills the air above it.
   - D. It moves tropical heat north and gives western Europe milder winters.
   - **Key: D**

5. **[ES.10.b.2 · HOTS]** A hurricane moving north over the Gulf Stream, rather than over the cooler water near the coast, would most likely —  
   _Skill: Analyze how ocean circulation moves heat and affects weather and climate_
   - A. weaken, because warm water evaporates less than cold water
   - B. turn back south, because the current flows against it
   - C. strengthen, because the warm water supplies heat and moisture
   - D. stop moving, because the current is faster than the storm
   - **Key: C**

6. **[ES.10.c.1 · LOTS]** The steep drop described in sentence 2 is the boundary between the continental shelf and the —  
   _Skill: Identify sea-floor features (continental shelf, slope and rise, abyssal plain, mid-ocean ridge, trench, seamount)_
   - A. abyssal plain
   - B. mid-ocean ridge
   - C. ocean trench
   - D. continental slope
   - **Key: D**

### Sonar from Virginia to the ridge  
`ocean-sonar-profile` · Oceans · ES.10 · level 2 · 142 words · 6 questions

> (1) A survey ship sent sound pulses from its hull to the sea floor and timed the echoes, a method called **sonar**. (2) Sound travels about 1,500 m per second in seawater, so an echo that returns in 2 seconds means the floor is 1,500 m down. (3) The ship sailed east from the Virginia coast toward the middle of the Atlantic Ocean, and the table shows some of its depth readings. (4) At 900 km, the echo time dropped from about 7 seconds to under 2 seconds as the ship passed over a steep-sided underwater mountain with a flat top, then rose back to 7 seconds. (5) At 1,500 km, a thermometer lowered to the bottom read 2 °C, although the surface water there was 20 °C.
> 
> | Distance from coast (km) | Depth (m) |
> |---|---|
> | 40 | 50 |
> | 110 | 140 |
> | 200 | 2,500 |
> | 450 | 4,900 |
> | 1,500 | 5,300 |
> | 3,800 | 2,600 |

1. **[ES.10.c.1 · LOTS]** The shallow, gently sloping sea floor from the coast out to about 110 km is the —  
   _Skill: Identify sea-floor features (continental shelf, slope and rise, abyssal plain, mid-ocean ridge, trench, seamount)_
   - A. abyssal plain
   - B. continental rise
   - C. continental shelf
   - D. mid-ocean ridge
   - **Key: C**

2. **[ES.10.c.2 · HOTS]** Between which two readings in the table does the sea floor slope most steeply?  
   _Skill: Interpret a sea-floor profile or sea-floor ages in terms of plate tectonics_
   - A. 110 km and 200 km
   - B. 200 km and 450 km
   - C. 450 km and 1,500 km
   - D. 1,500 km and 3,800 km
   - **Key: A**

3. **[ES.10.c.1 · LOTS]** The feature the ship crossed at 900 km (sentence 4) is best identified as —  
   _Skill: Identify sea-floor features (continental shelf, slope and rise, abyssal plain, mid-ocean ridge, trench, seamount)_
   - A. an ocean trench
   - B. a guyot
   - C. a continental rise
   - D. an abyssal plain
   - **Key: B**

4. **[ES.10.c.2 · HOTS]** The sea floor rises to 2,600 m at 3,800 km. If rock samples were collected along the whole route, scientists would most likely find that the rock —  
   _Skill: Interpret a sea-floor profile or sea-floor ages in terms of plate tectonics_
   - A. is oldest at 3,800 km and gets younger toward Virginia
   - B. is the same age at every point along the route
   - C. is youngest at 1,500 km, where the floor is deepest
   - D. is youngest at 3,800 km and gets older toward Virginia
   - **Key: D**

5. **[ES.10.b.1 · LOTS]** Which statement best explains the bottom temperature reported in sentence 5?  
   _Skill: Describe surface currents and deep (density-driven) currents_
   - A. The water is river water that sank because fresh water is dense.
   - B. The water is part of a deep current that sank near the poles.
   - C. The water was cooled by contact with ice on the sea floor.
   - D. The water flowed down from the warm Gulf Stream above it.
   - **Key: B**

6. **[ES.10.d.2 · HOTS]** About 20,000 years ago, during the last ice age, sea level was about 120 m lower than today. Which location in the table was most likely dry land at that time?  
   _Skill: Analyze data on sea level, ice or ocean chemistry to identify trends and causes_
   - A. 40 km from the coast
   - B. 110 km from the coast
   - C. 200 km from the coast
   - D. 450 km from the coast
   - **Key: A**


## Level 3 — stretch

### A tide gauge in Norfolk  
`ocean-sewells-point` · Oceans · ES.10 · level 3 · 141 words · 6 questions

> (1) A tide gauge at Sewells Point in Norfolk has recorded water levels since the 1920s, and the table shows the yearly average sea level there compared with 1930. (2) A GPS station near the gauge shows that the land itself is sinking about 2.5 mm per year, partly because groundwater pumped from deep aquifers lets buried sediment compact and partly because the crust is still adjusting after the last ice age. (3) At the same time, the ocean is rising worldwide as land ice melts and seawater warms. (4) Some Norfolk streets now flood during strong high tides even on sunny days. (5) City planners are comparing a concrete floodwall with **living shorelines**, which use marsh plants and oyster reefs along the water's edge to soften waves.
> 
> | Year | Sea level compared with 1930 (mm) |
> |---|---|
> | 1930 | 0 |
> | 1950 | 90 |
> | 1970 | 180 |
> | 1990 | 280 |
> | 2010 | 400 |

1. **[ES.10.d.2 · HOTS]** Which statement best describes the change in sea level shown in the table?  
   _Skill: Analyze data on sea level, ice or ocean chemistry to identify trends and causes_
   - A. Sea level rose at exactly the same rate in every 20-year period.
   - B. Sea level rose the whole time, and it rose faster after 1990.
   - C. Sea level rose until 1970 and then began to fall again.
   - D. Sea level rose until 1990 and then stayed about the same.
   - **Key: B**

2. **[ES.10.d.2 · HOTS]** Between 1990 and 2010 the water at the gauge rose about 6 mm per year. Using sentence 2, about how much of that yearly rise came from the ocean itself rising?  
   _Skill: Analyze data on sea level, ice or ocean chemistry to identify trends and causes_
   - A. 2.5 mm per year
   - B. 6.0 mm per year
   - C. 8.5 mm per year
   - D. 3.5 mm per year
   - **Key: D**

3. **[ES.10.a.1 · LOTS]** Sentence 3 says warming seawater helps raise sea level. This happens because warmer seawater —  
   _Skill: Describe how temperature and salinity affect the density of seawater_
   - A. is less dense, so the same mass takes up more space
   - B. is denser, so it sinks and pushes water upward
   - C. holds more dissolved salt, which adds to its volume
   - D. evaporates faster, which adds more water to the ocean
   - **Key: A**

4. **[ES.10.e.1 · LOTS]** Which human activity named in the passage adds to the rise in water level at the gauge?  
   _Skill: Describe how human activities affect the oceans and the Chesapeake Bay (runoff, nutrients, dead zones, overfishing, development)_
   - A. planting marsh grass along the shore
   - B. pumping groundwater from deep aquifers
   - C. measuring land height with GPS stations
   - D. building oyster reefs at the water's edge
   - **Key: B**

5. **[ES.10.e.2 · HOTS]** Which is a benefit of a living shoreline that a concrete floodwall would NOT provide?  
   _Skill: Evaluate actions and policies that protect the oceans, the coast and the Chesapeake Bay_
   - A. full protection from even the largest storm surge
   - B. an end to the sinking of land under the city
   - C. habitat for fish and crabs and cleaner water
   - D. a lower rate of sea-level rise at the gauge
   - **Key: C**

6. **[ES.10.d.1 · LOTS]** Which of these changes would add the most water to the ocean and raise sea level?  
   _Skill: Describe causes of changes in sea level, polar ice and ocean chemistry_
   - A. melting of floating sea ice in the Arctic Ocean
   - B. melting of icebergs already floating in the sea
   - C. freezing of seawater into new ice near Antarctica
   - D. melting of the ice sheet that covers Greenland
   - **Key: D**

### Cold water, anchovies and El Niño  
`ocean-peru-upwelling` · Oceans · ES.10 · level 3 · 214 words · 6 questions

> (1) Along the coast of Peru, steady trade winds push surface water westward, away from the shore. (2) Cold water from below rises to replace it, a process called **upwelling**. (3) The rising water carries nutrients that feed plankton, which support one of the world's largest anchovy fisheries. (4) Beneath the warm surface layer lies the **thermocline**, a layer in which temperature drops quickly with depth. (5) In a normal year, a probe lowered off Peru read 18 °C at the surface, 17 °C at 20 m, 13 °C at 40 m, 12 °C at 60 m and 11.5 °C at 100 m. (6) Every few years, during an **El Niño**, the trade winds weaken, warm water spreads east across the Pacific, and the thermocline off Peru sinks deeper, so the upwelled water is warm and poor in nutrients. (7) An El Niño usually lasts about a year, so it is a short-term variation rather than a long-term change. (8) Its effects reach far away: during El Niño years, stronger winds high over the tropical Atlantic tend to tear apart storms as they form. (9) Peru has sometimes shortened or closed its anchovy season during an El Niño.
> 
> | Year | Surface temperature off Peru (°C) | Anchovy catch (million tonnes) |
> |---|---|---|
> | 1 | 17 | 6.5 |
> | 2 | 18 | 6.0 |
> | 3 | 24 | 1.2 |
> | 4 | 18 | 5.4 |

1. **[ES.10.a.2 · LOTS]** Upwelling off the coast of Peru depends mainly on —  
   _Skill: Explain the causes of tides, waves, currents and upwelling_
   - A. tides that lift deep water toward the surface
   - B. warm surface water sinking near the coast
   - C. winds that push surface water away from shore
   - D. rivers that pour fresh water into the ocean
   - **Key: C**

2. **[ES.10.a.3 · HOTS]** Which year in the table was most likely an El Niño year?  
   _Skill: Analyze ocean data such as temperature, salinity and density profiles_
   - A. Year 1
   - B. Year 2
   - C. Year 3
   - D. Year 4
   - **Key: C**

3. **[ES.10.a.3 · HOTS]** Based on the readings in sentence 5, the thermocline off Peru in a normal year lies between about —  
   _Skill: Analyze ocean data such as temperature, salinity and density profiles_
   - A. 0 m and 20 m deep
   - B. 20 m and 40 m deep
   - C. 40 m and 60 m deep
   - D. 60 m and 100 m deep
   - **Key: B**

4. **[ES.10.a.1 · LOTS]** Water above the thermocline mixes very little with the water below it because the upper water is —  
   _Skill: Describe how temperature and salinity affect the density of seawater_
   - A. colder, so it is denser
   - B. saltier, so it is denser
   - C. the same density but faster
   - D. warmer, so it is less dense
   - **Key: D**

5. **[ES.10.b.2 · HOTS]** Based on sentence 8, during an El Niño year the Atlantic coast, including Virginia, would most likely face —  
   _Skill: Analyze how ocean circulation moves heat and affects weather and climate_
   - A. fewer hurricanes than usual
   - B. more hurricanes than usual
   - C. strong new upwelling off Virginia Beach
   - D. no change, since the Pacific is far away
   - **Key: A**

6. **[ES.10.e.2 · HOTS]** Which statement best evaluates Peru's decision in sentence 9?  
   _Skill: Evaluate actions and policies that protect the oceans, the coast and the Chesapeake Bay_
   - A. It raises the catch that year, since the fish have more time to grow.
   - B. It has no cost, since few people in Peru earn money from anchovies.
   - C. It ends El Niño sooner, since fewer boats let upwelling return.
   - D. It cuts income for a season but helps the stock recover afterward.
   - **Key: D**

### The Bay's summer dead zone  
`ocean-bay-dead-zone` · Oceans · ES.10 · level 3 · 204 words · 6 questions

> (1) Every summer, part of the deep water in the Chesapeake Bay holds so little dissolved oxygen that crabs, fish and oysters must leave or die. (2) The problem starts with nitrogen and phosphorus from fertilizer, manure, sewage and air pollution. (3) These **nutrients** wash into rivers and feed huge **algal blooms** in spring. (4) When the algae die and sink, bacteria decompose them and use up the oxygen in the deep water. (5) In summer, a warm, fresher layer sits on top of cooler, saltier bottom water, so oxygen from the air cannot mix down. (6) Oysters once filtered much of the Bay's water, but overharvesting and disease left only a small fraction of them; today blue crab and menhaden catches are managed with limits. (7) Menhaden are small fish eaten by striped bass, ospreys and other predators. (8) In 2010 the Bay states and Washington, D.C., adopted a "pollution diet," the Chesapeake Bay **TMDL**, which caps nutrients and sediment and calls for upgraded sewage plants, fences that keep cattle out of streams and forested buffers along streams. (9) The table shows monitoring results.
> 
> | Year | Nitrogen reaching the Bay (million lb) | Average summer dead zone (km³) |
> |---|---|---|
> | 2006 | 300 | 9.0 |
> | 2010 | 285 | 8.4 |
> | 2014 | 260 | 7.1 |
> | 2018 | 270 | 7.6 |
> | 2022 | 240 | 6.2 |

1. **[ES.10.e.1 · LOTS]** Which sequence best shows how fertilizer runoff leads to the dead zone?  
   _Skill: Describe how human activities affect the oceans and the Chesapeake Bay (runoff, nutrients, dead zones, overfishing, development)_
   - A. nutrients → more oxygen → fish die → algae grow
   - B. algae die → nutrients enter → oxygen rises → crabs leave
   - C. sediment → oysters grow → algae die → oxygen rises
   - D. nutrients → algal bloom → algae die → bacteria use oxygen
   - **Key: D**

2. **[ES.10.a.1 · LOTS]** The surface layer described in sentence 5 stays on top of the bottom water because it is —  
   _Skill: Describe how temperature and salinity affect the density of seawater_
   - A. warmer and fresher, so it is less dense
   - B. colder and saltier, so it is less dense
   - C. warmer and saltier, so it is more dense
   - D. cooler and fresher, so it is more dense
   - **Key: A**

3. **[ES.10.e.2 · HOTS]** Based on the table, which statement best evaluates the progress made under the pollution diet?  
   _Skill: Evaluate actions and policies that protect the oceans, the coast and the Chesapeake Bay_
   - A. The dead zone disappeared within a few years after 2010.
   - B. Nitrogen and the dead zone have mostly decreased, with ups and downs.
   - C. Nitrogen rose every year, but the dead zone shrank anyway.
   - D. The dead zone grew larger each time nitrogen went down.
   - **Key: B**

4. **[ES.10.d.1 · LOTS]** Water in the Bay has been slowly warming. Warmer water would most likely make the dead zone worse because warm water —  
   _Skill: Describe causes of changes in sea level, polar ice and ocean chemistry_
   - A. holds more dissolved oxygen than cold water
   - B. is denser, so it sinks and carries oxygen down
   - C. holds less dissolved oxygen than cold water
   - D. contains less salt than the cold water below
   - **Key: C**

5. **[ES.10.e.2 · HOTS]** Which action would most directly reduce the cause of the dead zone at its source?  
   _Skill: Evaluate actions and policies that protect the oceans, the coast and the Chesapeake Bay_
   - A. building concrete seawalls along the Bay shore
   - B. dredging deeper shipping channels in the Bay
   - C. raising the yearly limit on the blue crab catch
   - D. planting forest buffers that trap farm runoff
   - **Key: D**

6. **[ES.10.e.2 · HOTS]** Virginia sets a yearly limit on how many menhaden may be caught. Select TWO statements that describe a likely result of this limit.  
   _Skill: Evaluate actions and policies that protect the oceans, the coast and the Chesapeake Bay_
   - A. More menhaden remain to feed striped bass and ospreys.
   - B. The dead zone grows because menhaden add nitrogen.
   - C. Fishing companies earn less in the short term.
   - D. The upper Bay becomes saltier than the ocean.
   - **Key: A and C**


---

# Atmosphere, Weather & Climate (ES.11 · ES.12)

Standards in this unit:

- ES.11.a — the composition of the atmosphere is critical to most forms of life
- ES.11.b — biologic and geologic interactions change atmospheric composition
- ES.11.c — natural events and human actions may stress atmospheric regulation
- ES.11.d — human actions, including economic and policy decisions, affect the atmosphere
- ES.12.a — weather involves the reflection, absorption, storage, and redistribution of energy
- ES.12.b — weather patterns can be predicted from changes in current conditions
- ES.12.c — extreme imbalances in energy distribution may lead to severe weather
- ES.12.d — models based on current conditions are used to predict weather
- ES.12.e — natural and human changes in the atmosphere and oceans affect global climate


## Level 1 — foundation

### A jar of schoolyard air  
`atmo-air-sample` · Atmosphere, Weather & Climate · ES.11 · ES.12 · level 1 · 83 words · 5 questions

> (1) A Fredericksburg class sent a jar of schoolyard air to a lab. (2) The lab removed the water vapor and reported each remaining gas as a percent of the dry air, shown in the table. (3) Air from a humid July afternoon held about 3% water vapor, but air from a cold January morning held less than 0.5%. (4) Air sampled beside a busy highway at rush hour held 0.06% carbon dioxide.
> 
> | Gas | Percent of dry air |
> |---|---|
> | Nitrogen | 78.1 |
> | Oxygen | 20.9 |
> | Argon | 0.9 |
> | Carbon dioxide | 0.04 |

1. **[ES.11.a.1 · LOTS]** According to the table, which gas makes up the largest share of dry air?  
   _Skill: Describe the composition and layers of the atmosphere_
   - A. oxygen
   - B. nitrogen
   - C. argon
   - D. carbon dioxide
   - **Key: B**

2. **[ES.11.a.2 · HOTS]** Which conclusion is best supported by sentence 3?  
   _Skill: Analyze data on the atmosphere's composition, temperature and pressure_
   - A. The amount of water vapor in air changes with weather and season.
   - B. Water vapor is a fixed part of air, just like nitrogen and argon.
   - C. Cold winter air holds more water vapor than warm summer air.
   - D. Water vapor replaces most of the oxygen in air during summer.
   - **Key: A**

3. **[ES.11.b.1 · LOTS]** Most of the oxygen in the sample was added to Earth's atmosphere over time by —  
   _Skill: Describe how life and geologic processes (photosynthesis, volcanoes, weathering) changed the atmosphere over time_
   - A. gases released from volcanoes during eruptions
   - B. lightning splitting nitrogen gas into separate atoms
   - C. photosynthesis by cyanobacteria and, later, plants
   - D. evaporation of water from the early oceans
   - **Key: C**

4. **[ES.12.e.1 · LOTS]** Carbon dioxide is only 0.04% of dry air, yet it affects climate because it —  
   _Skill: Describe the factors that affect climate (latitude, elevation, nearness to water, ocean currents, greenhouse gases)_
   - A. blocks most visible sunlight before it reaches the ground
   - B. forms the layer that absorbs the sun's ultraviolet rays
   - C. makes up the water droplets that form most clouds
   - D. absorbs heat given off by Earth's surface and warms the air
   - **Key: D**

5. **[ES.11.c.2 · HOTS]** Which is the best explanation for the result in sentence 4?  
   _Skill: Analyze how these stresses affect the greenhouse effect, the ozone layer and air quality_
   - A. Car engines burning gasoline release carbon dioxide into the nearby air.
   - B. Plants along the highway release carbon dioxide during photosynthesis.
   - C. Traffic noise causes nitrogen in the air to change into carbon dioxide.
   - D. Rush-hour air is colder, and cold air always holds more carbon dioxide.
   - **Key: A**

### A balloon over Wallops Island  
`atmo-balloon-climb` · Atmosphere, Weather & Climate · ES.11 · ES.12 · level 1 · 73 words · 5 questions

> (1) At dawn, meteorologists at Wallops Island on Virginia's Eastern Shore released a helium weather balloon carrying a **radiosonde**, a small instrument package that radios back temperature, humidity and air pressure. (2) Some of its readings are shown in the table. (3) The balloon swelled as it rose and finally burst near 30 km.
> 
> | Altitude (km) | Temperature (°C) | Pressure (mb) |
> |---|---|---|
> | 0 | 18 | 1013 |
> | 5 | -14 | 540 |
> | 10 | -45 | 265 |
> | 15 | -56 | 120 |
> | 25 | -50 | 25 |

1. **[ES.11.a.1 · LOTS]** From 0 to 10 km, where the temperature dropped steadily, the balloon was rising through the —  
   _Skill: Describe the composition and layers of the atmosphere_
   - A. stratosphere
   - B. mesosphere
   - C. troposphere
   - D. thermosphere
   - **Key: C**

2. **[ES.11.a.2 · HOTS]** Which statement is best supported by the pressure data?  
   _Skill: Analyze data on the atmosphere's composition, temperature and pressure_
   - A. Pressure fell as the balloon rose, dropping about half in the first 5 km.
   - B. Pressure stayed nearly the same until the balloon passed 15 km.
   - C. Pressure rose as the balloon climbed into colder air.
   - D. Pressure dropped by the same amount in every 5 km of the climb.
   - **Key: A**

3. **[ES.11.a.2 · HOTS]** Between 15 km and 25 km the temperature rose. The best explanation is that the balloon had entered the —  
   _Skill: Analyze data on the atmosphere's composition, temperature and pressure_
   - A. stratosphere, where ozone absorbs ultraviolet energy from the sun
   - B. troposphere, where warm air rises from the heated ground
   - C. mesosphere, where meteors burn up and heat the air
   - D. thermosphere, where the air is thickest and holds the most heat
   - **Key: A**

4. **[ES.12.d.1 · LOTS]** Forecasters use radiosonde readings like these mainly to —  
   _Skill: Describe the tools and models meteorologists use (radar, satellites, weather balloons, computer models)_
   - A. measure how much rain fell at the launch site overnight
   - B. supply upper-air data to computer models that predict weather
   - C. track the exact path of hurricanes far out at sea
   - D. count lightning strikes inside distant thunderstorms
   - **Key: B**

5. **[ES.12.a.1 · LOTS]** The warmest reading in the troposphere was near the ground because the troposphere is heated mainly —  
   _Skill: Describe how radiation, conduction and convection transfer energy in the atmosphere_
   - A. from above, by sunlight absorbed in the ozone layer
   - B. by heat flowing upward from Earth's molten core
   - C. by friction as the wind blows across the ocean
   - D. from below, by contact with the warm ground
   - **Key: D**

### Sand, sea and a boardwalk flag  
`atmo-beach-breeze` · Atmosphere, Weather & Climate · ES.12 · level 1 · 73 words · 5 questions

> (1) On a sunny June day at Virginia Beach, a student measured the temperature of the dry sand and of the ocean water and noted which way a flag on the boardwalk was blowing. (2) Her data are in the table. (3) The sand and the water received about the same amount of sunlight all day.
> 
> | Time | Sand (°C) | Ocean (°C) | Wind blows from |
> |---|---|---|---|
> | 6 a.m. | 20 | 23 | the land |
> | 2 p.m. | 39 | 24 | the ocean |

1. **[ES.12.a.1 · LOTS]** The sand warmed much more than the water by 2 p.m. mainly because —  
   _Skill: Describe how radiation, conduction and convection transfer energy in the atmosphere_
   - A. water needs more energy than sand to warm by the same amount
   - B. the sand received far more sunlight than the water did
   - C. the ocean water reflected all of the sunlight back to space
   - D. the wind carried heat away from the sand all afternoon
   - **Key: A**

2. **[ES.12.a.2 · HOTS]** Which statement best explains the wind at 2 p.m.?  
   _Skill: Analyze how uneven heating of land, water and latitudes drives winds and circulation_
   - A. Cool air sinking over the hot sand pushed air out toward the sea.
   - B. Air over the hot sand rose, and cooler, denser air over the ocean moved in.
   - C. Water evaporating from the ocean pushed the air toward land.
   - D. Warm air from the land flowed out over the cooler water.
   - **Key: B**

3. **[ES.12.a.1 · LOTS]** Warm air rising above the hot sand and carrying heat upward is an example of energy transfer by —  
   _Skill: Describe how radiation, conduction and convection transfer energy in the atmosphere_
   - A. radiation
   - B. conduction
   - C. convection
   - D. reflection
   - **Key: C**

4. **[ES.12.a.2 · HOTS]** Based on the data, which wind would most likely blow at 2 a.m. on a clear night?  
   _Skill: Analyze how uneven heating of land, water and latitudes drives winds and circulation_
   - A. a breeze from the ocean, because water cools faster than land
   - B. a breeze from the land, because land cools faster than water
   - C. no wind at all, because the sun is not heating anything
   - D. a breeze from the ocean, because the sand stays hottest at night
   - **Key: B**

5. **[ES.12.e.1 · LOTS]** Compared with an inland town at the same latitude and elevation, Virginia Beach most likely has —  
   _Skill: Describe the factors that affect climate (latitude, elevation, nearness to water, ocean currents, greenhouse gases)_
   - A. colder winters and hotter summers
   - B. the same temperature all year long
   - C. almost no rain or snow in most years
   - D. milder winters and cooler summers
   - **Key: D**

### Reading Roanoke's station model  
`atmo-station-model` · Atmosphere, Weather & Climate · ES.11 · ES.12 · level 1 · 110 words · 6 questions

> (1) Roanoke's 4 p.m. station model shows 68 (upper left), 61 (lower left) and 112 (upper right). (2) The key says the upper left is the temperature (°F), the lower left is the dew point (°F), and the upper right is sea-level pressure in code: put a 10 in front and a decimal point before the last digit, so 098 means 1009.8 mb. (3) The wind barb's shaft points toward the direction the wind comes from, and each full feather is about 10 knots. (4) Roanoke's barb points to the southwest and has two full feathers. (5) The circle is three-quarters shaded with clouds. (6) The pressure has fallen 1.8 mb in the past three hours.

1. **[ES.12.b.1 · LOTS]** What is the sea-level air pressure at Roanoke?  
   _Skill: Interpret weather maps, fronts, air masses, pressure systems and station models_
   - A. 112.0 mb
   - B. 911.2 mb
   - C. 1011.2 mb
   - D. 1112.0 mb
   - **Key: C**

2. **[ES.12.b.1 · LOTS]** Which describes the wind at Roanoke?  
   _Skill: Interpret weather maps, fronts, air masses, pressure systems and station models_
   - A. about 20 knots, blowing from the southwest toward the northeast
   - B. about 20 knots, blowing from the northeast toward the southwest
   - C. about 2 knots, blowing from the southwest toward the northeast
   - D. about 10 knots, blowing from the northwest toward the southeast
   - **Key: A**

3. **[ES.12.b.2 · HOTS]** Which forecast for the next 12 hours is best supported by the station model?  
   _Skill: Predict the weather from changes in pressure, fronts and other conditions_
   - A. clearing skies and rising pressure as a high moves in
   - B. more clouds and a chance of rain as a low or front nears
   - C. dry, sunny weather because the dew point is below the temperature
   - D. snow, because the dew point is below the freezing point
   - **Key: B**

4. **[ES.12.b.2 · HOTS]** If the air cools to 61 °F overnight with no change in its moisture, which will most likely happen?  
   _Skill: Predict the weather from changes in pressure, fronts and other conditions_
   - A. The pressure will rise to 1061.0 mb.
   - B. The wind will shift to come from the north.
   - C. The relative humidity will fall to about 50%.
   - D. The air will be saturated, so fog may form.
   - **Key: D**

5. **[ES.11.a.1 · LOTS]** That afternoon a hiker carried a barometer from Roanoke to a mountaintop about 1,400 m higher, and its reading dropped by about 150 mb. The best explanation is that —  
   _Skill: Describe the composition and layers of the atmosphere_
   - A. at a higher elevation there is less air above pressing down
   - B. cold mountain air is heavier than the air in the valley
   - C. the clouds over the mountain pushed down on the barometer
   - D. air pressure always falls during the late afternoon
   - **Key: A**

6. **[ES.12.d.1 · LOTS]** Meteorologists plot station models from hundreds of places on one map mainly to —  
   _Skill: Describe the tools and models meteorologists use (radar, satellites, weather balloons, computer models)_
   - A. measure how high each weather balloon rose that morning
   - B. replace the need for radar and satellite images
   - C. locate high- and low-pressure centers and fronts
   - D. record each town's average climate over 30 years
   - **Key: C**


## Level 2 — average student (core)

### The hole over Antarctica  
`atmo-ozone-cfc` · Atmosphere, Weather & Climate · ES.11 · level 2 · 113 words · 6 questions

> (1) The **ozone layer**, about 15 to 35 km up, absorbs most of the sun's harmful ultraviolet (UV) radiation. (2) In the 1970s, scientists found that **CFCs**, gases once used in spray cans, refrigerators and air conditioners, drift up into this layer, where UV light breaks them apart and frees chlorine that destroys ozone. (3) In 1987 nations signed the **Montreal Protocol** to phase out CFCs, and companies switched to substitute chemicals. (4) The table shows the average size of the "ozone hole" over Antarctica each spring (rounded). (5) CFC molecules can last 50 to 100 years in the air.
> 
> | Year | Ozone hole area (million km²) |
> |---|---|
> | 1982 | 3 |
> | 1990 | 19 |
> | 2000 | 25 |
> | 2010 | 22 |
> | 2020 | 20 |

1. **[ES.11.a.1 · LOTS]** The ozone layer described in sentence 1 lies mainly in the —  
   _Skill: Describe the composition and layers of the atmosphere_
   - A. troposphere
   - B. stratosphere
   - C. mesosphere
   - D. thermosphere
   - **Key: B**

2. **[ES.11.c.1 · LOTS]** Which human action was the main cause of the ozone hole?  
   _Skill: Identify natural events and human actions that change the atmosphere (eruptions, burning fuels, CFCs)_
   - A. burning coal and oil, which adds carbon dioxide to the air
   - B. clearing forests, which reduces the oxygen made by plants
   - C. releasing CFCs, which break down and free chlorine
   - D. driving cars in cities, which forms smog near the ground
   - **Key: C**

3. **[ES.11.c.2 · HOTS]** Based on the passage, a thinner ozone layer would most likely lead to —  
   _Skill: Analyze how these stresses affect the greenhouse effect, the ozone layer and air quality_
   - A. more UV reaching the ground and more cases of skin cancer
   - B. less sunlight reaching the ground and cooler summers
   - C. more acid rain falling on lakes and forests
   - D. a thicker layer of smog over large cities
   - **Key: A**

4. **[ES.11.d.2 · HOTS]** Which statement best evaluates the Montreal Protocol, using the table and sentence 5?  
   _Skill: Evaluate the costs and benefits of a decision or policy that affects the atmosphere_
   - A. It failed, because the hole was larger in 2020 than in 1982.
   - B. It worked at once, because the hole shrank right after 1987.
   - C. It made no difference, because CFCs never reach the stratosphere.
   - D. It seems to be working, but slowly, because CFCs linger for decades.
   - **Key: D**

5. **[ES.11.d.1 · LOTS]** Under the Montreal Protocol, nations agreed to —  
   _Skill: Describe actions and policies that reduce air pollution and protect the atmosphere_
   - A. stop producing CFCs and replace them with other chemicals
   - B. plant trees to add more ozone to the stratosphere
   - C. limit the carbon dioxide released by power plants and cars
   - D. launch ozone gas into the upper atmosphere by rocket
   - **Key: A**

6. **[ES.11.d.2 · HOTS]** Some substitute chemicals do not harm ozone but trap heat strongly as greenhouse gases. What does this show about decisions that affect the atmosphere?  
   _Skill: Evaluate the costs and benefits of a decision or policy that affects the atmosphere_
   - A. Any chemical that is safe for ozone is also safe for climate.
   - B. Fixing one problem can cause another, so trade-offs must be weighed.
   - C. Treaties should never limit chemicals that companies already use.
   - D. Greenhouse warming and ozone loss are exactly the same problem.
   - **Key: B**

### Tracking a late-summer hurricane  
`atmo-hurricane-track` · Atmosphere, Weather & Climate · ES.12 · level 2 · 114 words · 6 questions

> (1) A cluster of thunderstorms moved west off Africa in late August and drifted across the Atlantic. (2) Over warm water it grew into a **hurricane**, a huge storm spinning around a center of very low pressure. (3) The table tracks the storm. (4) On day 6 it came ashore in North Carolina and moved north into southern Virginia, where heavy rain flooded rivers. (5) Records show that the average surface temperature of this part of the Atlantic has risen about 0.5 °C over the past 40 years.
> 
> | Day | Location | Water (°C) | Top wind (mph) |
> |---|---|---|---|
> | 1 | central Atlantic | 27 | 40 |
> | 3 | east of the Bahamas | 29 | 110 |
> | 5 | off North Carolina | 28 | 120 |
> | 6 | over land | none | 60 |

1. **[ES.12.c.1 · LOTS]** A hurricane gets most of its energy from —  
   _Skill: Describe how thunderstorms, tornadoes and hurricanes form_
   - A. cold, dry air that flows south from central Canada
   - B. heat released when water vapor from the warm sea condenses
   - C. friction between the storm's winds and the ground
   - D. the pull of the moon's gravity on the ocean tides
   - **Key: B**

2. **[ES.12.c.2 · HOTS]** Which best explains the change in top wind speed from day 5 to day 6?  
   _Skill: Analyze the conditions that lead to severe weather_
   - A. Over land it lost its warm, moist air supply and was slowed by friction.
   - B. The storm moved into an area of warmer ocean water near the coast.
   - C. Rain falling from the storm cooled the ocean and doubled its strength.
   - D. The storm's low-pressure center grew even deeper over land.
   - **Key: A**

3. **[ES.12.c.2 · HOTS]** Based on the hurricane readings in the table, which conclusion is best supported?  
   _Skill: Analyze the conditions that lead to severe weather_
   - A. The storm was strongest on day 1, when it first formed.
   - B. Water temperature had no effect on the storm's wind speed.
   - C. The storm was strongest while over water of 28 °C or warmer.
   - D. The storm weakened each day it spent over the ocean.
   - **Key: C**

4. **[ES.12.d.1 · LOTS]** Which tool would best let forecasters follow the storm's position while it was in the central Atlantic, far from any coast?  
   _Skill: Describe the tools and models meteorologists use (radar, satellites, weather balloons, computer models)_
   - A. a rain gauge on the Virginia coast
   - B. a barometer at an inland weather station
   - C. Doppler radar at a coastal airport
   - D. a weather satellite high above Earth
   - **Key: D**

5. **[ES.12.c.1 · LOTS]** The storm's winds spiraled counterclockwise around its center. This curving of moving air in the Northern Hemisphere is caused by —  
   _Skill: Describe how thunderstorms, tornadoes and hurricanes form_
   - A. Earth's rotation, called the Coriolis effect
   - B. the tilt of Earth's axis toward the sun
   - C. the pull of the moon's gravity on the air
   - D. heat flowing up out of Earth's interior
   - **Key: A**

6. **[ES.12.e.2 · HOTS]** Based on sentence 5 and the table, which prediction is most reasonable if this part of the Atlantic keeps warming?  
   _Skill: Analyze climate data to identify trends and natural and human causes of climate change_
   - A. Hurricanes there will begin to form only over land.
   - B. Storms there will have more energy available to grow strong.
   - C. Hurricanes there will stop spinning around their centers.
   - D. Warmer water will make storms weaken faster while at sea.
   - **Key: B**

### A cold front reaches Harrisonburg  
`atmo-cold-front` · Atmosphere, Weather & Climate · ES.12 · level 2 · 151 words · 6 questions

> (1) At 6 a.m. on an April day, the weather map showed a low-pressure center over Ohio with a **cold front** trailing south through West Virginia. (2) Ahead of the front, southerly winds carried warm, humid **maritime tropical** air from the Gulf of Mexico into Virginia. (3) Behind it, a **continental polar** air mass from Canada was pushing east, and a high-pressure center sat over Illinois. (4) Near the low, the isobars on the map were packed close together. (5) A student in Harrisonburg, in the Shenandoah Valley, recorded the data in the table from her school's weather station. (6) Between 3 and 4 p.m., a line of thunderstorms with heavy rain, gusty winds and small hail passed over the town.
> 
> | Time | Pressure (mb) | Temp / dew point (°C) | Wind from |
> |---|---|---|---|
> | 6 a.m. | 1009 | 21 / 18 | south |
> | noon | 1004 | 26 / 19 | south |
> | 6 p.m. | 1008 | 16 / 7 | northwest |
> | midnight | 1016 | 7 / -1 | northwest |

1. **[ES.12.b.1 · LOTS]** The air mass described in sentence 3 is most likely —  
   _Skill: Interpret weather maps, fronts, air masses, pressure systems and station models_
   - A. cold and dry
   - B. warm and humid
   - C. cold and humid
   - D. warm and dry
   - **Key: A**

2. **[ES.12.b.2 · HOTS]** Based on the table, when did the cold front most likely pass Harrisonburg?  
   _Skill: Predict the weather from changes in pressure, fronts and other conditions_
   - A. before 6 a.m.
   - B. between 6 a.m. and noon
   - C. between noon and 6 p.m.
   - D. after midnight
   - **Key: C**

3. **[ES.12.c.2 · HOTS]** Which best explains why thunderstorms formed as the front arrived?  
   _Skill: Analyze the conditions that lead to severe weather_
   - A. Cold, dense air pushed under the warm, moist air and forced it to rise quickly.
   - B. Warm air slid gently up over cold air, spreading thin clouds over a wide area.
   - C. The high-pressure center over Illinois made air sink over the town.
   - D. Dry air from Canada added extra water vapor to the clouds over the town.
   - **Key: A**

4. **[ES.12.b.1 · LOTS]** The closely packed isobars near the low in sentence 4 show that the winds there were —  
   _Skill: Interpret weather maps, fronts, air masses, pressure systems and station models_
   - A. calm, because the pressure was the same everywhere
   - B. strong, because pressure changed a lot over a short distance
   - C. blowing straight out of the low toward the high
   - D. weak, because the low pulled air away from the area
   - **Key: B**

5. **[ES.12.b.2 · HOTS]** Which forecast for Harrisonburg the next day is best supported by the map and the data?  
   _Skill: Predict the weather from changes in pressure, fronts and other conditions_
   - A. warm and humid with more afternoon thunderstorms
   - B. steady rain and fog as a warm front arrives
   - C. cool, dry and mostly clear as high pressure moves in
   - D. hurricane-force winds as the pressure keeps falling
   - **Key: C**

6. **[ES.12.a.1 · LOTS]** Inside the thunderstorm clouds, strong currents of rising warm air carried heat upward. This is energy transfer by —  
   _Skill: Describe how radiation, conduction and convection transfer energy in the atmosphere_
   - A. conduction
   - B. radiation
   - C. reflection
   - D. convection
   - **Key: D**

### Air from long ago  
`atmo-ice-core` · Atmosphere, Weather & Climate · ES.11 · ES.12 · level 2 · 140 words · 6 questions

> (1) Earth's earliest atmosphere formed mostly from gases released by volcanoes: water vapor, carbon dioxide and nitrogen, with almost no free oxygen. (2) About 2.4 billion years ago, oxygen made by cyanobacteria began to build up. (3) In rocks from around that time, geologists find **banded iron formations**, thin red layers of iron oxide that settled on ancient sea floors. (4) A much more recent record comes from **ice cores** drilled in Antarctica, where falling snow is pressed into ice that seals in tiny bubbles of air. (5) Scientists measured the carbon dioxide in bubbles from three different cores and averaged the results, shown in the table with temperature estimates. (6) Air measured today holds about 420 ppm of carbon dioxide.
> 
> | Age of ice (years ago) | CO₂ (ppm) | Temperature vs. recent times (°C) |
> |---|---|---|
> | 125,000 | 280 | +1 |
> | 60,000 | 210 | -5 |
> | 20,000 | 185 | -8 |
> | 2,000 | 278 | 0 |

1. **[ES.11.b.1 · LOTS]** The gases of Earth's earliest atmosphere came mainly from —  
   _Skill: Describe how life and geologic processes (photosynthesis, volcanoes, weathering) changed the atmosphere over time_
   - A. photosynthesis by early ocean organisms
   - B. volcanoes releasing gases from Earth's interior
   - C. ice sheets melting at the poles
   - D. air leaking from the moon after it formed
   - **Key: B**

2. **[ES.11.b.2 · HOTS]** The banded iron formations in sentence 3 are evidence that —  
   _Skill: Analyze evidence of past changes in the atmosphere (ice cores, rocks, fossils)_
   - A. oxygen was building up and reacting with iron dissolved in seawater
   - B. the early air already held as much oxygen as the air does today
   - C. volcanoes stopped erupting once the first oceans formed
   - D. iron meteorites rained onto the sea floor for millions of years
   - **Key: A**

3. **[ES.12.e.2 · HOTS]** Which pattern is shown by the ice-core data?  
   _Skill: Analyze climate data to identify trends and natural and human causes of climate change_
   - A. Temperature was highest when carbon dioxide was lowest.
   - B. Carbon dioxide stayed the same while temperature changed.
   - C. Carbon dioxide and temperature rose and fell together.
   - D. Temperature has risen steadily for 125,000 years.
   - **Key: C**

4. **[ES.11.a.1 · LOTS]** The air sealed in the ice-core bubbles is made mostly of —  
   _Skill: Describe the composition and layers of the atmosphere_
   - A. oxygen
   - B. carbon dioxide
   - C. water vapor
   - D. nitrogen
   - **Key: D**

5. **[ES.11.c.2 · HOTS]** How does the value in sentence 6 compare with the ice-core data, and what best explains it?  
   _Skill: Analyze how these stresses affect the greenhouse effect, the ozone layer and air quality_
   - A. It is far above every value in the table, mainly from burning fossil fuels.
   - B. It is within the natural range in the table, so no cause is needed.
   - C. It is below every value in the table, because of more photosynthesis.
   - D. It is far above every value in the table, mainly because oceans cooled.
   - **Key: A**

6. **[ES.11.b.2 · HOTS]** Why did the scientists measure bubbles from three different ice cores instead of just one?  
   _Skill: Analyze evidence of past changes in the atmosphere (ice cores, rocks, fossils)_
   - A. to change the independent variable for each sample
   - B. to check that results repeat and are not due to one site
   - C. to make sure all the ice formed in the same year
   - D. to add more carbon dioxide to the bubbles before testing
   - **Key: B**


## Level 3 — stretch

### Sixty years of carbon dioxide  
`atmo-keeling-data` · Atmosphere, Weather & Climate · ES.11 · ES.12 · level 3 · 137 words · 6 questions

> (1) A mountaintop station far from any city has measured carbon dioxide in the air since the late 1950s. (2) The table shows rounded yearly averages, along with global average temperature compared with the 1951–1980 average. (3) Within each year, carbon dioxide dips by about 6 ppm during the Northern Hemisphere summer and climbs again in winter. (4) Ice-core records show that carbon dioxide stayed between about 180 and 300 ppm for at least 800,000 years before 1800. (5) A state is now debating limits on carbon dioxide from its power plants. (6) Supporters say the limits will slow warming and reduce other air pollution; opponents point out that plants would need costly upgrades or new fuels, which could raise electric bills for a time.
> 
> | Year | CO₂ (ppm) | Temperature change (°C) |
> |---|---|---|
> | 1960 | 317 | 0.0 |
> | 1980 | 339 | +0.3 |
> | 2000 | 370 | +0.4 |
> | 2020 | 414 | +1.0 |

1. **[ES.12.e.2 · HOTS]** Which statement best describes the carbon dioxide trend in the table?  
   _Skill: Analyze climate data to identify trends and natural and human causes of climate change_
   - A. It rose in each 20-year period, and each rise was larger.
   - B. It rose quickly at first and then leveled off after 2000.
   - C. It rose by the same amount in every 20-year period.
   - D. It fell between 1980 and 2000 and then rose again.
   - **Key: A**

2. **[ES.11.b.1 · LOTS]** The summer dip described in sentence 3 is best explained by —  
   _Skill: Describe how life and geologic processes (photosynthesis, volcanoes, weathering) changed the atmosphere over time_
   - A. oceans releasing more carbon dioxide as they warm in summer
   - B. volcanoes erupting less often during the summer months
   - C. Northern Hemisphere plants taking in more of it for photosynthesis
   - D. warm summer air holding less nitrogen and more oxygen
   - **Key: C**

3. **[ES.11.c.1 · LOTS]** Which human activity is the main cause of the long-term rise in carbon dioxide?  
   _Skill: Identify natural events and human actions that change the atmosphere (eruptions, burning fuels, CFCs)_
   - A. releasing CFCs from old refrigerators and spray cans
   - B. releasing sulfur dioxide that forms acid rain
   - C. clearing snow and ice from roads in winter
   - D. burning coal, oil and natural gas for energy
   - **Key: D**

4. **[ES.12.e.1 · LOTS]** Which statement best describes the greenhouse effect?  
   _Skill: Describe the factors that affect climate (latitude, elevation, nearness to water, ocean currents, greenhouse gases)_
   - A. Gases block incoming sunlight, so less energy reaches the ground.
   - B. Gases absorb heat given off by Earth's surface and send some back down.
   - C. A hole in the ozone layer lets extra heat leak in from space.
   - D. Greenhouse gases make Earth's surface reflect more sunlight.
   - **Key: B**

5. **[ES.11.d.2 · HOTS]** Which choice correctly pairs a cost with a benefit of the limits debated in sentences 5 and 6?  
   _Skill: Evaluate the costs and benefits of a decision or policy that affects the atmosphere_
   - A. Cost: cleaner air near the plants. Benefit: higher electric bills.
   - B. Cost: costly plant upgrades. Benefit: slower warming and cleaner air.
   - C. Cost: slower warming. Benefit: plants must change their fuels.
   - D. Cost: less air pollution. Benefit: costly plant upgrades.
   - **Key: B**

6. **[ES.12.e.2 · HOTS]** A student claims the warming in the table was caused by the sun growing brighter. Which additional data would best test this claim?  
   _Skill: Analyze climate data to identify trends and natural and human causes of climate change_
   - A. measurements of the sun's energy output over the same years
   - B. the number of hurricanes that struck Virginia since 1960
   - C. carbon dioxide readings from a second mountaintop station
   - D. the average summer rainfall at the station each year
   - **Key: A**

### Mountains, Piedmont and shore  
`atmo-blue-ridge-tidewater` · Atmosphere, Weather & Climate · ES.11 · ES.12 · level 3 · 144 words · 6 questions

> (1) Students compared the climate of three Virginia weather stations that lie within about two degrees of latitude of one another. (2) Norfolk sits beside the Chesapeake Bay and the Atlantic, Lynchburg is in the Piedmont about 250 km inland, and Big Meadows is on a ridge in the Blue Ridge. (3) Their 30-year averages are in the table. (4) The students noticed that in winter, snow often covers the ground at Big Meadows for weeks, while Norfolk's ground is usually bare. (5) They also read that in the year after a very large volcanic eruption in the tropics, Earth's average temperature can drop by a few tenths of a degree, because the eruption sends sulfur gases high into the stratosphere.
> 
> | Station | Elevation (m) | July / January (°C) | Precipitation (cm/yr) |
> |---|---|---|---|
> | Norfolk | 5 | 26 / 6 | 120 |
> | Lynchburg | 280 | 25 / 1 | 105 |
> | Big Meadows | 1,070 | 19 / -3 | 135 |

1. **[ES.12.e.1 · LOTS]** Which is the best explanation for Big Meadows being cooler than Lynchburg in both July and January?  
   _Skill: Describe the factors that affect climate (latitude, elevation, nearness to water, ocean currents, greenhouse gases)_
   - A. Big Meadows is closer to the ocean, which cools it all year.
   - B. Big Meadows gets more direct sunlight because it is higher.
   - C. Big Meadows is much higher, and air cools with altitude.
   - D. Big Meadows lies far south of Lynchburg, nearer the equator.
   - **Key: C**

2. **[ES.12.e.2 · HOTS]** Which conclusion is best supported by the July and January data?  
   _Skill: Analyze climate data to identify trends and natural and human causes of climate change_
   - A. Norfolk's range is smallest, likely because nearby water warms and cools slowly.
   - B. Lynchburg's range is smallest, likely because it lies far from the ocean.
   - C. Big Meadows' range is largest, likely because it gets the most precipitation.
   - D. All three ranges are the same, because the stations share a latitude.
   - **Key: A**

3. **[ES.12.e.1 · LOTS]** Big Meadows gets the most precipitation of the three stations. Which best explains this?  
   _Skill: Describe the factors that affect climate (latitude, elevation, nearness to water, ocean currents, greenhouse gases)_
   - A. Air sinking down the mountain slopes warms and gains water vapor.
   - B. High places are closer to the sun, so more water evaporates there.
   - C. Snow on the ground reflects sunlight, and reflected light makes rain.
   - D. Moist air pushed up the mountain slopes cools, and its water vapor condenses.
   - **Key: D**

4. **[ES.11.c.1 · LOTS]** Sentence 5 describes a natural event that changes the atmosphere. Which is another natural event that adds gases and particles to the air?  
   _Skill: Identify natural events and human actions that change the atmosphere (eruptions, burning fuels, CFCs)_
   - A. exhaust from cars burning gasoline
   - B. a large wildfire started by lightning
   - C. CFCs leaking from old refrigerators
   - D. smoke from coal-burning power plants
   - **Key: B**

5. **[ES.11.c.2 · HOTS]** Which best explains how the eruption in sentence 5 could cool Earth?  
   _Skill: Analyze how these stresses affect the greenhouse effect, the ozone layer and air quality_
   - A. Sulfur gases form tiny droplets that reflect sunlight back to space.
   - B. Volcanic gases destroy all of the carbon dioxide in the air.
   - C. Lava flowing into the sea cools ocean water around the world.
   - D. The eruption pushes Earth slightly farther away from the sun.
   - **Key: A**

6. **[ES.12.a.1 · LOTS]** The snow cover in sentence 4 also helps keep Big Meadows cold in winter because snow —  
   _Skill: Describe how radiation, conduction and convection transfer energy in the atmosphere_
   - A. absorbs most of the sunlight that strikes it
   - B. releases heat into the air above it by conduction
   - C. has a high albedo and reflects most incoming sunlight
   - D. gives off greenhouse gases as it slowly melts
   - **Key: C**

### Forecasting a coastal nor'easter  
`atmo-noreaster-forecast` · Atmosphere, Weather & Climate · ES.12 · level 3 · 194 words · 6 questions

> (1) On a cold February morning, Virginia forecasters watched a new low-pressure system forming off the coast of the Carolinas. (2) Cold, dry continental air covered the land, while the Gulf Stream offshore was much warmer, and this sharp temperature contrast was feeding the storm. (3) Weather satellites showed a large comma-shaped shield of clouds, and Doppler radar along the coast showed bands of heavy rain moving north. (4) Radiosondes launched from several stations that morning measured temperature, humidity and wind speed high above the region. (5) These measurements were fed into a computer model that was run 20 times, each time starting from slightly different conditions to allow for small measurement errors; this is called an **ensemble forecast**. (6) The results for Norfolk are summarized in the table. (7) Forecasters warned that if the low tracked close to the coast, strong northeast winds would push seawater onto low-lying streets in Norfolk and Virginia Beach. (8) They also noted that ensemble runs spread farther apart with each additional day into the future.
> 
> | Storm track | Model runs | Rain at Norfolk (cm) | Peak gust (km/h) |
> |---|---|---|---|
> | within 150 km of the coast | 15 | 5 to 8 | 80 |
> | far offshore | 5 | less than 1 | 40 |

1. **[ES.12.d.1 · LOTS]** Which tool in the passage detects where rain is falling near the coast and how the rain bands are moving?  
   _Skill: Describe the tools and models meteorologists use (radar, satellites, weather balloons, computer models)_
   - A. a radiosonde
   - B. a barometer
   - C. a rain gauge
   - D. Doppler radar
   - **Key: D**

2. **[ES.12.d.2 · HOTS]** Based on the ensemble results, which is the best forecast to give the public?  
   _Skill: Evaluate a forecast and the limits of a weather model_
   - A. Heavy rain and strong winds are certain in Norfolk.
   - B. There is about a 75% chance of heavy rain and strong winds in Norfolk.
   - C. Norfolk will get less than 1 cm of rain, because some runs show that.
   - D. No forecast can be made, because the model runs do not agree.
   - **Key: B**

3. **[ES.12.d.2 · HOTS]** Using sentences 5 and 8, which statement best explains a limit of computer weather models?  
   _Skill: Evaluate a forecast and the limits of a weather model_
   - A. Small starting errors grow over time, so later days are less certain.
   - B. Running a model more times makes the real storm grow weaker.
   - C. Models are most accurate for forecasts made many weeks ahead.
   - D. A model gives a wrong answer unless it is run exactly 20 times.
   - **Key: A**

4. **[ES.12.c.1 · LOTS]** This kind of storm is called a nor'easter because —  
   _Skill: Describe how thunderstorms, tornadoes and hurricanes form_
   - A. it forms only over the northeastern states, never off Virginia
   - B. it always moves from the northeast toward the southwest
   - C. its strongest winds blow onto the coast from the northeast
   - D. it forms when two hurricanes meet in the North Atlantic
   - **Key: C**

5. **[ES.12.c.1 · LOTS]** Which condition described in the passage did the most to give the storm its energy?  
   _Skill: Describe how thunderstorms, tornadoes and hurricanes form_
   - A. the comma-shaped cloud shield seen on satellite images
   - B. the radiosondes launched into the sky that morning
   - C. the computer model that was run 20 different times
   - D. the contrast between cold air over land and the warm Gulf Stream
   - **Key: D**

6. **[ES.12.b.2 · HOTS]** Which TWO observations in Norfolk would show that the storm is tracking close to the coast, as most runs predicted? Select TWO.  
   _Skill: Predict the weather from changes in pressure, fronts and other conditions_
   - A. The barometer reading falls steadily through the day.
   - B. The wind shifts to blow gently from the west.
   - C. Northeast winds grow stronger, with higher gusts.
   - D. The sky clears and the air becomes very dry.
   - **Key: A and C**

### Clearing the air over Shenandoah  
`atmo-shenandoah-air` · Atmosphere, Weather & Climate · ES.11 · level 3 · 189 words · 6 questions

> (1) In the 1980s, many brook trout streams in Shenandoah National Park were becoming too acidic for fish to survive. (2) Coal-burning power plants upwind released **sulfur dioxide** and nitrogen oxides, which reacted with water in clouds to form sulfuric and nitric acids that fell as **acid rain**. (3) Normal rain has a pH of about 5.6, and the park's thin soils and hard rock did little to neutralize the extra acid. (4) In 1990, Congress strengthened the **Clean Air Act**, setting a cap on total sulfur dioxide emissions and letting companies buy and sell emission permits. (5) Many plants installed scrubbers, which cost millions of dollars each, while others switched to low-sulfur coal or natural gas. (6) The table shows regional emissions and the average pH of rain measured in the park. (7) A second problem is **ground-level ozone**, the main ingredient of smog, which forms when nitrogen oxides and other gases from cars and factories react in strong sunlight; Richmond issues most of its air-quality alerts in July and August.
> 
> | Year | Sulfur dioxide released (thousand tons) | Average rain pH |
> |---|---|---|
> | 1990 | 900 | 4.4 |
> | 2000 | 650 | 4.6 |
> | 2010 | 250 | 4.9 |
> | 2020 | 60 | 5.2 |

1. **[ES.11.c.1 · LOTS]** The human action that most directly caused the acidic streams in sentence 1 was —  
   _Skill: Identify natural events and human actions that change the atmosphere (eruptions, burning fuels, CFCs)_
   - A. releasing CFCs from refrigerators
   - B. burning coal to produce electricity
   - C. clearing forests for new farmland
   - D. pumping groundwater for drinking
   - **Key: B**

2. **[ES.11.c.2 · HOTS]** Which conclusion is best supported by the table?  
   _Skill: Analyze how these stresses affect the greenhouse effect, the ozone layer and air quality_
   - A. As sulfur dioxide emissions fell, rain in the park became less acidic.
   - B. As sulfur dioxide emissions fell, rain in the park became more acidic.
   - C. Rain in the park reached the pH of normal rain by 2010.
   - D. Rain pH did not change, so the emission cap had no effect.
   - **Key: A**

3. **[ES.11.d.1 · LOTS]** Which action helped power plants reduce their sulfur dioxide emissions under the 1990 law?  
   _Skill: Describe actions and policies that reduce air pollution and protect the atmosphere_
   - A. building taller smokestacks to spread the gas farther
   - B. installing scrubbers to remove sulfur from exhaust
   - C. burning more high-sulfur coal during the night
   - D. adding CFCs to the exhaust to neutralize the acid
   - **Key: B**

4. **[ES.11.d.2 · HOTS]** A critic argues that the 1990 law cost too much. Which evidence from the passage best supports the view that its benefits were worth the cost?  
   _Skill: Evaluate the costs and benefits of a decision or policy that affects the atmosphere_
   - A. Scrubbers cost millions of dollars for each power plant.
   - B. Normal rain is slightly acidic, with a pH of about 5.6.
   - C. Emissions fell by over 90%, and rain in the park became less acidic.
   - D. Some plants stopped burning coal and switched to natural gas.
   - **Key: C**

5. **[ES.11.c.2 · HOTS]** Based on sentence 7, on which day would a ground-level ozone alert be most likely in Richmond?  
   _Skill: Analyze how these stresses affect the greenhouse effect, the ozone layer and air quality_
   - A. a cold, cloudy January day with light traffic
   - B. a rainy April day with a strong, steady breeze
   - C. a cool, clear October night after rush hour
   - D. a hot, sunny, still July afternoon with heavy traffic
   - **Key: D**

6. **[ES.11.a.1 · LOTS]** Which statement correctly compares ground-level ozone with the ozone layer?  
   _Skill: Describe the composition and layers of the atmosphere_
   - A. Ground-level ozone is a pollutant, while ozone in the stratosphere shields life from UV.
   - B. Both are harmful pollutants that should be removed from the atmosphere.
   - C. Ground-level ozone shields life from UV, while stratospheric ozone forms smog.
   - D. The ozone layer lies in the troposphere, just above the smog over cities.
   - **Key: A**

