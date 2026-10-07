/* SOL Labyrinth — v5.15 expansion: Grade 10 LONG passages (Virginia G10, 390-520 words).
 * Twelve original packs, eight questions each, on solar and wind energy, deep-sea
 * exploration, desert ecosystems and archaeology digs. Original text only. Loaded after
 * content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── LONG · Literary (level 2) · wind energy ───────────── */
    {
      id: "g10-rl-c80-turbine-fourteen",
      family: "G10",
      title: "Turbine Fourteen",
      kind: "Literary · 10.RL",
      blurb: "A stalled wind turbine, an eighty-meter ladder, and a fear that will not simply leave.",
      level: 2,
      passage:
        "<p>" + N(1) + "The turbine numbered fourteen had stopped turning at dawn, and by nine o'clock Teodora Lungu was standing at its base, staring up a white tower that seemed to lean against the clouds. " +
        N(2) + "Her aunt Mirela, who had serviced the wind farm on the ridge above Valea Mare for eleven years, was already checking the clips on two harnesses. " +
        N(3) + "Teodora had asked to shadow her for a week of summer break, picturing laptops and data screens, not this. " +
        N(4) + "Ever since she had slipped from a hayloft at age eight and lain on the barn floor with the wind knocked out of her, high places had made her hands go cold.</p>" +
        "<p>" + N(5) + "\"The ladder is inside the tower,\" Mirela said, handing her a helmet. " +
        N(6) + "\"Eighty meters. Three points on the rungs, always, and the safety line does the rest.\" " +
        N(7) + "She paused. " +
        N(8) + "\"The tower doesn't care how brave you feel, so you don't have to feel brave.\" " +
        N(9) + "Inside, the air was cool and smelled of oil and metal. " +
        N(10) + "The ladder rose through a narrow steel tube, lit every few meters by a caged bulb, and the only sounds were the click of the fall-arrest slider and Teodora's own breathing.</p>" +
        "<p>" + N(11) + "She counted rungs to keep her mind busy: forty, ninety, one hundred and sixty. " +
        N(12) + "Somewhere past two hundred she made the mistake of looking down, where the bulbs shrank into a dotted line, and her arms locked. " +
        N(13) + "Below her, Mirela stopped climbing and said nothing at all. " +
        N(14) + "The silence stretched long enough that Teodora heard the tower creak as it shifted in the wind. " +
        N(15) + "Then her aunt's voice came up the tube, calm and unhurried: \"Don't look up and don't look down. Look at the rung in front of your face. That's the only one you have to climb.\" " +
        N(16) + "Teodora stared at the painted steel, chipped at one edge, and moved her right hand to the next rung.</p>" +
        "<p>" + N(17) + "The nacelle at the top was a cramped room of machinery, as big as a delivery van and humming faintly. " +
        N(18) + "Mirela traced the stoppage to a sensor that told the turbine which way the wind was blowing; its cable had worked loose, so the machine had shut itself down rather than guess. " +
        N(19) + "Teodora held the flashlight and read numbers off a screen while her aunt tightened the connector. " +
        N(20) + "When it was done, Mirela opened the roof hatch, and the whole valley spread out below them: the river, the red roofs, and thirty-one other turbines turning like slow white clocks.</p>" +
        "<p>" + N(21) + "The blades of number fourteen began to move as they climbed down. " +
        N(22) + "In the truck afterward, Teodora realized she had not counted a single rung on the way down. " +
        N(23) + "\"Does it go away?\" she asked. \"The fear?\" " +
        N(24) + "Mirela shook her head. " +
        N(25) + "\"It doesn't leave. It just gets a smaller seat.\" " +
        N(26) + "That night Teodora wrote 312 rungs in her notebook, then crossed out the number and wrote, underneath it, one at a time.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does the story develop through Teodora's climb inside the tower?",
          choices: [
            { letter: "A", text: "Courage can mean acting while fear is still present." },
            { letter: "B", text: "Most fears disappear once their cause is understood." },
            { letter: "C", text: "Young people learn best when adults leave them alone." },
            { letter: "D", text: "Technical jobs are more exciting than people expect." }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point of Teodora's climb?",
          choices: [
            { letter: "A", text: "Sentence 11, when she counts rungs to stay busy" },
            { letter: "B", text: "Sentence 12, when her arms lock after looking down" },
            { letter: "C", text: "Sentence 16, when she moves her hand to the next rung" },
            { letter: "D", text: "Sentence 21, when the blades begin to turn again" }
          ],
          correct: "C"
        },
        {
          id: "silence",
          sol: "10.RL.1.C",
          stem: "Mirela's silence in sentences 13 and 14 suggests that she —",
          choices: [
            { letter: "A", text: "is too frightened herself to say anything" },
            { letter: "B", text: "has not noticed that Teodora has stopped" },
            { letter: "C", text: "wants Teodora to give up and climb down" },
            { letter: "D", text: "is giving Teodora time before guiding her" }
          ],
          correct: "D"
        },
        {
          id: "clocks",
          sol: "10.RL.2.A",
          stem: "In sentence 20, comparing the turbines to slow white clocks mainly suggests that they —",
          choices: [
            { letter: "A", text: "are old machines that need constant repair" },
            { letter: "B", text: "move with a steady, measured rhythm" },
            { letter: "C", text: "are too far away to be seen clearly" },
            { letter: "D", text: "remind Teodora that her time is running out" }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in sentences 9 and 10, such as the narrow tube, the caged bulbs and the click of the slider, mainly create a mood of —",
          choices: [
            { letter: "A", text: "enclosed tension" },
            { letter: "B", text: "cheerful excitement" },
            { letter: "C", text: "sleepy boredom" },
            { letter: "D", text: "angry frustration" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          stem: "The tone of Mirela's remark in sentence 8 is best described as —",
          choices: [
            { letter: "A", text: "harshly critical" },
            { letter: "B", text: "nervously joking" },
            { letter: "C", text: "dryly practical" },
            { letter: "D", text: "deeply sorrowful" }
          ],
          correct: "C"
        },
        {
          id: "hayloft",
          sol: "10.RL.3.A",
          stem: "The author includes the hayloft memory in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "explain why Teodora chose to shadow her aunt" },
            { letter: "B", text: "establish the fear that gives the climb its stakes" },
            { letter: "C", text: "show that Teodora grew up on a farm in the valley" },
            { letter: "D", text: "suggest that Mirela was to blame for the accident" }
          ],
          correct: "B"
        },
        {
          id: "loose",
          sol: "10.RV.1.C",
          stem: "In sentence 18, the phrase worked loose most nearly means —",
          choices: [
            { letter: "A", text: "had recently been repaired" },
            { letter: "B", text: "was used far too heavily" },
            { letter: "C", text: "had been cut on purpose" },
            { letter: "D", text: "had slowly come unfastened" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── LONG · Literary (level 3) · deep-sea exploration ───────────── */
    {
      id: "g10-rl-c80-night-watch",
      family: "G10",
      title: "The Night Watch",
      kind: "Literary · 10.RL",
      blurb: "Four nights of watching nothing on a research ship, and nine seconds that change everything.",
      level: 3,
      passage:
        "<p>" + N(1) + "For the first four nights aboard the research ship <em>Corvina</em>, Itzel Ramirez watched the bottom of the ocean do nothing. " +
        N(2) + "Her shift ran from three to seven in the morning, in a windowless control room where six monitors showed the view from a remotely operated vehicle hovering two thousand four hundred meters below. " +
        N(3) + "Her job was to keep the dive log: time, depth, water temperature, and a short note whenever anything appeared on screen. " +
        N(4) + "Most nights, nothing did, unless she counted the marine snow, the endless pale flecks of drifting debris that fell through the lights like static on an old television.</p>" +
        "<p>" + N(5) + "The other students in the summer program had been given jobs that sounded like science. " +
        N(6) + "Marcus was helping sort sediment cores; Priyanka was running water samples through a machine that cost more than a house. " +
        N(7) + "Itzel had been handed a clipboard and a chair. " +
        N(8) + "On the fourth night she wrote \"marine snow, sediment, nothing\" eleven times in a row, and the words began to look like a complaint she was filing against the whole expedition.</p>" +
        "<p>" + N(9) + "On the fifth night she tried something different, mostly to stay awake. " +
        N(10) + "Instead of writing nothing, she wrote what the nothing looked like: the snow thicker at 4:12, a brittle star's arm curling at 4:40, a trench in the mud that might have been dragged by something that had already left. " +
        N(11) + "The log grew crowded with small, exact sentences. " +
        N(12) + "At 5:53 a shape drifted into the upper corner of the third monitor, translucent and faintly pink, pulsing like a lung. " +
        N(13) + "It was there for nine seconds. " +
        N(14) + "She wrote down the time, the depth, the temperature, and the words \"unknown, gelatinous, about the size of a hand, moving against the current,\" and then she sat very still, as if the creature might hear her through two kilometers of water.</p>" +
        "<p>" + N(15) + "At the morning briefing, Dr. Halloran, the chief scientist, scrolled through the logs on the big screen without much expression until she reached Itzel's. " +
        N(16) + "She stopped, rewound the video to 5:53, and played the nine seconds three times. " +
        N(17) + "Nobody spoke. " +
        N(18) + "\"We have been diving this ridge for three seasons,\" Dr. Halloran said finally, \"and I have never seen that animal, in person or in a book.\" " +
        N(19) + "Marcus, who had found nothing in his cores but mud, leaned over to look at Itzel's clipboard as though it might be hiding more.</p>" +
        "<p>" + N(20) + "Afterward, Dr. Halloran stopped her in the narrow corridor outside the galley. " +
        N(21) + "\"Most of this work,\" she said, \"is watching nothing carefully enough that you notice the moment it turns into something.\" " +
        N(22) + "Itzel nodded, though she was not sure she had done it on purpose. " +
        N(23) + "That evening, when the watch schedule went up on the galley wall, she found the three-to-seven slot still empty, picked up the pen hanging beside it, and wrote her own name.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the story about Itzel's watch?",
          choices: [
            { letter: "A", text: "Expensive equipment matters more than human observers." },
            { letter: "B", text: "Students in research programs are often treated unfairly." },
            { letter: "C", text: "Close attention can turn routine work into discovery." },
            { letter: "D", text: "Competition among classmates pushes people to work harder." }
          ],
          correct: "C"
        },
        {
          id: "cause",
          sol: "10.RL.1.B",
          stem: "Which event most directly leads to the discovery described in paragraph 3?",
          choices: [
            { letter: "A", text: "Itzel decides to describe exactly what she sees on screen." },
            { letter: "B", text: "Dr. Halloran assigns Itzel a better monitor to watch." },
            { letter: "C", text: "Marcus finishes sorting the sediment cores early." },
            { letter: "D", text: "The vehicle is moved into much deeper water." }
          ],
          correct: "A"
        },
        {
          id: "resent",
          sol: "10.RL.1.C",
          stem: "Sentence 8 suggests that, at this point in the story, Itzel —",
          choices: [
            { letter: "A", text: "is too tired to record the data accurately" },
            { letter: "B", text: "feels that her assignment is pointless" },
            { letter: "C", text: "expects the expedition to find something soon" },
            { letter: "D", text: "has decided to ask for a different job" }
          ],
          correct: "B"
        },
        {
          id: "static",
          sol: "10.RL.2.A",
          stem: "In sentence 4, comparing the marine snow to static on an old television suggests that, to Itzel, it —",
          choices: [
            { letter: "A", text: "threatens the vehicle's cameras and lights" },
            { letter: "B", text: "is the most interesting thing on the screen" },
            { letter: "C", text: "makes the video impossible to record" },
            { letter: "D", text: "seems like meaningless background noise" }
          ],
          correct: "D"
        },
        {
          id: "still",
          sol: "10.RL.2.B",
          stem: "The details in sentence 14, the exact notes and Itzel sitting very still, mainly create a mood of —",
          choices: [
            { letter: "A", text: "growing boredom" },
            { letter: "B", text: "nervous guilt" },
            { letter: "C", text: "hushed wonder" },
            { letter: "D", text: "playful humor" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in Itzel's story is most ironic?",
          choices: [
            { letter: "A", text: "Marcus finds only mud in his sediment cores." },
            { letter: "B", text: "The job that seemed least like science yields the big find." },
            { letter: "C", text: "Itzel writes the same note eleven times on one night." },
            { letter: "D", text: "Dr. Halloran has studied the ridge for three seasons." }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The author ends the story with Itzel writing her own name in the empty slot mainly to —",
          choices: [
            { letter: "A", text: "suggest that no one else wants to work with her" },
            { letter: "B", text: "reveal that Dr. Halloran ordered her to continue" },
            { letter: "C", text: "hint that she plans to leave the program soon" },
            { letter: "D", text: "show that her view of the night watch has changed" }
          ],
          correct: "D"
        },
        {
          id: "translucent",
          sol: "10.RV.1.D",
          stem: "The author describes the creature as translucent rather than clear in sentence 12. Compared with clear, translucent suggests that the animal —",
          choices: [
            { letter: "A", text: "lets light through but can still be faintly seen" },
            { letter: "B", text: "is completely invisible against the dark water" },
            { letter: "C", text: "glows brightly with a light of its own" },
            { letter: "D", text: "is coated in a thin layer of gray mud" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── LONG · Informational (level 1) · desert ecosystems ───────────── */
    {
      id: "g10-ri-c80-desert-crust",
      family: "G10",
      title: "The Living Skin of the Desert",
      kind: "Informational · 10.RI",
      blurb: "The dark, crunchy ground between desert shrubs is not dirt at all. It is alive.",
      level: 1,
      passage:
        "<p>" + N(1) + "In many deserts, the ground between the shrubs looks like plain dark dirt. " +
        N(2) + "Look closer, especially after a rain, and you may see a bumpy, crusty surface that crunches underfoot like burnt toast. " +
        N(3) + "This layer is not dirt at all. " +
        N(4) + "Scientists call it biological soil crust, and it is alive.</p>" +
        "<p>" + N(5) + "Biological soil crust is a community of tiny organisms living together at the surface of the soil. " +
        N(6) + "Its members include cyanobacteria, an ancient group of bacteria that make food from sunlight, along with lichens, mosses, and fungi. " +
        N(7) + "Some of the cyanobacteria grow long, sticky threads. " +
        N(8) + "When rain falls, these threads swell and wind between grains of sand, binding them together like stitches in fabric. " +
        N(9) + "Over many years, the crust becomes a thin but tough skin over the ground, often darker and lumpier the older it gets.</p>" +
        "<p>" + N(10) + "That skin does important work. " +
        N(11) + "First, it holds soil in place. " +
        N(12) + "Desert winds can be fierce, and bare sand blows away easily, but crusted ground resists erosion. " +
        N(13) + "Second, the crust helps water soak in rather than run off. " +
        N(14) + "Its rough, lumpy surface slows rainwater and gives it time to enter the ground. " +
        N(15) + "Third, some cyanobacteria in the crust take nitrogen from the air and turn it into a form that plants can use. " +
        N(16) + "In soils that are low in nutrients, this natural fertilizer can make the difference between a shrub that thrives and one that struggles. " +
        N(17) + "Small animals benefit too, since the plants that grow in healthy crust feed insects, lizards, and birds.</p>" +
        "<p>" + N(18) + "The crust has one great weakness: it is fragile when dry. " +
        N(19) + "A single footprint, bike tire, or hoof can crush it. " +
        N(20) + "Once broken, it recovers slowly, far more slowly than most hikers would guess. " +
        N(21) + "Researchers estimate that the cyanobacteria may return within a few years, but mosses and lichens can take decades, and a fully developed crust may need centuries. " +
        N(22) + "In the meantime, the broken soil is open to wind and water, and the damage can spread from a single track to the ground around it.</p>" +
        "<p>" + N(23) + "For this reason, many desert parks ask visitors to stay on trails and to step on rocks or in sandy washes if they must leave the path, and to keep bikes and vehicles on established roads. " +
        N(24) + "Some park rangers teach a simple phrase: \"Don't bust the crust.\" " +
        N(25) + "The rule may seem fussy to hikers who see only dirt. " +
        N(26) + "Yet the crust under their boots may be older than they are, and it quietly holds the desert together.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the article on soil crust?",
          choices: [
            { letter: "A", text: "Desert parks should close their trails to protect plant life." },
            { letter: "B", text: "Soil crust is a fragile living layer that protects desert land." },
            { letter: "C", text: "Cyanobacteria are the most important living things on Earth." },
            { letter: "D", text: "Desert ground is mostly dead sand that blows away easily." }
          ],
          correct: "B"
        },
        {
          id: "plants",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the idea that the crust helps desert plants grow?",
          choices: [
            { letter: "A", text: "\"Over many years, the crust becomes a thin but tough skin over the ground.\"" },
            { letter: "B", text: "\"A single footprint, bike tire, or hoof can crush it.\"" },
            { letter: "C", text: "\"Some park rangers teach a simple phrase: 'Don't bust the crust.'\"" },
            { letter: "D", text: "\"...take nitrogen from the air and turn it into a form that plants can use.\"" }
          ],
          correct: "D"
        },
        {
          id: "phrase",
          sol: "10.RI.1.C",
          stem: "The author includes the phrase Don't bust the crust in sentence 24 mainly to —",
          choices: [
            { letter: "A", text: "show a memorable way parks teach visitors to protect it" },
            { letter: "B", text: "prove that rangers are strict with careless hikers" },
            { letter: "C", text: "explain how the crust forms after heavy rainstorms" },
            { letter: "D", text: "suggest that broken crust can be repaired quickly" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          stem: "How is paragraph 3 (sentences 10 through 17) organized?",
          choices: [
            { letter: "A", text: "as a problem followed by its solution" },
            { letter: "B", text: "as a comparison of two kinds of desert" },
            { letter: "C", text: "as a list of benefits marked by order words" },
            { letter: "D", text: "as a sequence of steps in the crust's growth" }
          ],
          correct: "C"
        },
        {
          id: "stitches",
          sol: "10.RI.2.B",
          stem: "The author compares the sticky threads to stitches in fabric in sentence 8 mainly to emphasize that they —",
          choices: [
            { letter: "A", text: "were planted on purpose by scientists" },
            { letter: "B", text: "tear apart easily when they are stretched" },
            { letter: "C", text: "give the desert floor its bright colors" },
            { letter: "D", text: "bind loose grains into a connected surface" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of the article's final paragraph is best described as —",
          choices: [
            { letter: "A", text: "respectful and persuasive" },
            { letter: "B", text: "angry and accusing toward hikers" },
            { letter: "C", text: "amused and quietly dismissive" },
            { letter: "D", text: "anxious and mostly hopeless" }
          ],
          correct: "A"
        },
        {
          id: "bio",
          sol: "10.RV.1.A",
          stem: "The word biological in sentence 4 contains the root bio-, as in biology and biography. The root bio- most nearly means —",
          choices: [
            { letter: "A", text: "earth" },
            { letter: "B", text: "small" },
            { letter: "C", text: "life" },
            { letter: "D", text: "water" }
          ],
          correct: "C"
        },
        {
          id: "fussy",
          sol: "10.RV.1.C",
          stem: "In sentence 25, the word fussy most nearly means —",
          choices: [
            { letter: "A", text: "messy and disorganized" },
            { letter: "B", text: "too concerned with details" },
            { letter: "C", text: "difficult to understand clearly" },
            { letter: "D", text: "dangerous to ignore on a hike" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── LONG · Informational (level 2) · solar energy ───────────── */
    {
      id: "g10-ri-c80-floating-solar",
      family: "G10",
      title: "Panels on the Water",
      kind: "Informational · 10.RI",
      blurb: "Solar farms need space. Some engineers have found it on reservoirs and ponds.",
      level: 2,
      passage:
        "<p>" + N(1) + "Solar panels need space, and space is often the hardest thing to find. " +
        N(2) + "A large solar farm can cover hundreds of acres, land that might otherwise grow crops, shelter wildlife, or hold homes. " +
        N(3) + "Engineers in several countries have begun testing an answer that sounds almost too simple: put the panels on water.</p>" +
        "<p>" + N(4) + "These floating solar arrays sit on rows of hollow plastic pontoons that keep them on the surface, anchored to the bottom or the shore of a reservoir, a quarry lake, or a pond at a water treatment plant. " +
        N(5) + "From above, they look like a dark raft stitched together from hundreds of rectangles. " +
        N(6) + "Cables carry the electricity to shore, where it joins the grid like power from any other source.</p>" +
        "<p>" + N(7) + "Water offers more than open space. " +
        N(8) + "Solar panels actually work less efficiently as they heat up, and the water beneath a floating array keeps the panels cooler than they would be on a sunbaked roof or field. " +
        N(9) + "Several test sites have reported output a few percent higher than similar panels on land. " +
        N(10) + "The benefit runs in both directions. " +
        N(11) + "By shading the surface, the panels reduce evaporation, saving water that would otherwise rise into the air, an advantage that matters most in dry regions where every reservoir is closely watched. " +
        N(12) + "The shade can also slow the growth of algae, which thrive in warm, sunny water.</p>" +
        "<p>" + N(13) + "The idea is not without drawbacks. " +
        N(14) + "Anchoring a floating array so that it survives storms, waves, and changing water levels costs more than bolting panels to the ground. " +
        N(15) + "Maintenance crews need boats. " +
        N(16) + "Biologists also point out that covering too much of a lake could reduce the sunlight that underwater plants need, which in turn could affect fish and birds. " +
        N(17) + "Most projects therefore cover only a portion of a water body, often less than a third.</p>" +
        "<p>" + N(18) + "Imagine a mid-sized town whose drinking-water reservoir sits beside its treatment plant. " +
        N(19) + "The plant's pumps use a great deal of electricity. " +
        N(20) + "A floating array covering a tenth of the reservoir could supply much of that power on sunny days, lower evaporation in summer, and never take an acre of farmland. " +
        N(21) + "For a town like that, the reservoir is already fenced, already managed, and already connected to power lines, which makes it an unusually convenient site.</p>" +
        "<p>" + N(22) + "Floating solar will not replace rooftop panels or wind turbines, and it is not the right choice for every lake. " +
        N(23) + "But it shows how rethinking where energy is made can solve two problems at once. " +
        N(24) + "Sometimes the best place for a new idea is a surface that was there all along.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which of these best summarizes the article about floating solar arrays?",
          choices: [
            { letter: "A", text: "Floating solar is cheaper and simpler than any solar farm on land." },
            { letter: "B", text: "Reservoirs should be fully covered with panels to stop evaporation." },
            { letter: "C", text: "Solar panels perform poorly in most climates unless cooled by water." },
            { letter: "D", text: "Panels on water save land and water but bring costs and limits." }
          ],
          correct: "D"
        },
        {
          id: "output",
          sol: "10.RI.1.B",
          stem: "Which detail best supports the claim that floating panels can produce more power than similar panels on land?",
          choices: [
            { letter: "A", text: "Test sites have reported output a few percent higher." },
            { letter: "B", text: "Cables carry the electricity to shore to join the grid." },
            { letter: "C", text: "The shade from the panels can slow the growth of algae." },
            { letter: "D", text: "Most projects cover less than a third of the water." }
          ],
          correct: "A"
        },
        {
          id: "town",
          sol: "10.RI.1.C",
          stem: "The author includes the example of the town in paragraph 5 mainly to —",
          choices: [
            { letter: "A", text: "prove that every town should build a floating array" },
            { letter: "B", text: "describe the history of the first floating array" },
            { letter: "C", text: "show how the benefits could combine at one site" },
            { letter: "D", text: "explain why water treatment pumps need electricity" }
          ],
          correct: "C"
        },
        {
          id: "para4",
          sol: "10.RI.2.A",
          stem: "How does paragraph 4 (sentences 13 through 17) relate to paragraph 3?",
          choices: [
            { letter: "A", text: "It gives more examples of the same benefits." },
            { letter: "B", text: "It presents drawbacks that balance those benefits." },
            { letter: "C", text: "It explains how the panels are manufactured." },
            { letter: "D", text: "It retells paragraph 3 from a biologist's view." }
          ],
          correct: "B"
        },
        {
          id: "directions",
          sol: "10.RI.2.B",
          stem: "The statement in sentence 10 that the benefit runs in both directions mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the water helps the panels and the panels help the water" },
            { letter: "B", text: "electricity can flow both to and from the shore" },
            { letter: "C", text: "the panels can be turned to face either way" },
            { letter: "D", text: "engineers and biologists agree on the design" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "10.RI.2.C",
          stem: "The author's attitude toward floating solar is best described as —",
          choices: [
            { letter: "A", text: "enthusiastic and unquestioning" },
            { letter: "B", text: "doubtful that it will ever be useful" },
            { letter: "C", text: "worried that it harms most lakes" },
            { letter: "D", text: "interested but realistic about limits" }
          ],
          correct: "D"
        },
        {
          id: "pontoons",
          sol: "10.RV.1.B",
          stem: "In sentence 4, the context suggests that pontoons are —",
          choices: [
            { letter: "A", text: "underwater power cables" },
            { letter: "B", text: "floating supports for the array" },
            { letter: "C", text: "anchors sunk into the mud" },
            { letter: "D", text: "boats used by repair crews" }
          ],
          correct: "B"
        },
        {
          id: "vapor",
          sol: "10.RV.1.A",
          stem: "The word evaporation in sentence 11 contains the root vapor, as in vaporize. Based on this, evaporation refers to water that is —",
          choices: [
            { letter: "A", text: "freezing near the surface" },
            { letter: "B", text: "draining through the ground" },
            { letter: "C", text: "changing into a gas and rising" },
            { letter: "D", text: "spilling over the top of a dam" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── LONG · Vocabulary (level 1) · archaeology dig ───────────── */
    {
      id: "g10-rv-c80-field-school",
      family: "G10",
      title: "Square by Square",
      kind: "Vocabulary · 10.RV",
      blurb: "Jun-ho came to the dig for treasure. The screen table had something else in mind.",
      level: 1,
      passage:
        "<p>" + N(1) + "On the first morning of the field school, Jun-ho Park expected to find treasure by lunch. " +
        N(2) + "By noon he had found eleven pebbles, a bottle cap from a soda nobody sold anymore, and a sunburn. " +
        N(3) + "The <strong>excavation</strong> sat in a hayfield outside town, where a farmhouse had stood until it burned in 1880, and it looked less like an adventure than a set of shallow square holes marked off with string.</p>" +
        "<p>" + N(4) + "The site director, Ms. Teresa Ndlovu, explained that every square was dug in thin layers, a few centimeters at a time. " +
        N(5) + "\"We are <strong>meticulous</strong> here,\" she said. \"That means we notice everything and skip nothing.\" " +
        N(6) + "Each bucket of soil went to a screen, where volunteers would <strong>sift</strong> it, shaking the dirt through the wire mesh so that anything larger than a fingernail stayed behind. " +
        N(7) + "Jun-ho found the work <strong>tedious</strong>. " +
        N(8) + "Shake, pick, bag, label; shake, pick, bag, label. " +
        N(9) + "After two days his arms ached, and the bags on the table held mostly gravel.</p>" +
        "<p>" + N(10) + "On the third day, a woman named Gloria, who had volunteered at digs for twenty years, showed him how to look at the screen differently. " +
        N(11) + "She held up a flake of gray that he would have tossed aside. " +
        N(12) + "\"Burnt bone,\" she said. \"Somebody cooked dinner right here.\" " +
        N(13) + "Then she pointed out a green glass bead no bigger than a lentil, a curved sliver of blue-and-white china, and a square nail, the kind blacksmiths once made by hand. " +
        N(14) + "Jun-ho <strong>scrutinized</strong> the next screenful, turning each crumb over before he let it fall.</p>" +
        "<p>" + N(15) + "By the end of the week the table told a story. " +
        N(16) + "The china came from at least three different plates, one of them mended long ago with glue. " +
        N(17) + "The beads clustered in one corner of a square, where Ms. Ndlovu thought a sewing box might have spilled. " +
        N(18) + "Using maps, old letters, and the objects themselves, the team began to <strong>reconstruct</strong> a family's daily life: what they ate, what they repaired rather than replaced, where someone had sat in the evening light to sew.</p>" +
        "<p>" + N(19) + "On the last afternoon, Jun-ho found a child's marble, chipped and cloudy. " +
        N(20) + "He did not shout or wave anyone over. " +
        N(21) + "He bagged it, labeled it with the square and the depth, and set it beside the beads. " +
        N(22) + "It was not treasure, he thought. " +
        N(23) + "It was better: it was proof that someone his little sister's age had once lost something here and maybe gone looking for it in the grass.</p>",
      claims: [
        {
          id: "excavation",
          sol: "10.RV.1.A",
          stem: "The word excavation in sentence 3 comes from the Latin ex- (out) and cavare (to hollow). Based on this, an excavation is a site where people —",
          choices: [
            { letter: "A", text: "dig out and remove earth" },
            { letter: "B", text: "build new houses in rows" },
            { letter: "C", text: "plant and harvest crops" },
            { letter: "D", text: "measure land with string" }
          ],
          correct: "A"
        },
        {
          id: "reconstruct",
          sol: "10.RV.1.A",
          stem: "The prefix re- in reconstruct (sentence 18) means again, as in rebuild and retell. Based on this, to reconstruct a family's daily life is to —",
          choices: [
            { letter: "A", text: "change it to make it more exciting" },
            { letter: "B", text: "forget it once the dig has ended" },
            { letter: "C", text: "piece it together again from evidence" },
            { letter: "D", text: "copy it word for word from a book" }
          ],
          correct: "C"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.B",
          stem: "In sentence 5, Ms. Ndlovu restates meticulous as meaning —",
          choices: [
            { letter: "A", text: "quick and highly efficient" },
            { letter: "B", text: "careful about every detail" },
            { letter: "C", text: "quiet and very polite" },
            { letter: "D", text: "strict about every rule" }
          ],
          correct: "B"
        },
        {
          id: "sift",
          sol: "10.RV.1.B",
          stem: "Sentence 6 explains that to sift soil is to —",
          choices: [
            { letter: "A", text: "soak it in a bucket of water to wash it" },
            { letter: "B", text: "pile it in a heap beside the square" },
            { letter: "C", text: "dig it out in very thin layers" },
            { letter: "D", text: "shake it through a screen to catch things" }
          ],
          correct: "D"
        },
        {
          id: "tedious",
          sol: "10.RV.1.C",
          stem: "In sentence 7, the word tedious most nearly means —",
          choices: [
            { letter: "A", text: "physically dangerous" },
            { letter: "B", text: "dull and repetitive" },
            { letter: "C", text: "hard to understand" },
            { letter: "D", text: "surprisingly rewarding" }
          ],
          correct: "B"
        },
        {
          id: "scrutinized",
          sol: "10.RV.1.D",
          stem: "The author writes that Jun-ho scrutinized the screen in sentence 14 rather than simply looked at it. Compared with looked at, scrutinized suggests that he —",
          choices: [
            { letter: "A", text: "examined it closely and carefully" },
            { letter: "B", text: "glanced at it quickly and moved on" },
            { letter: "C", text: "pretended to inspect it for Gloria" },
            { letter: "D", text: "watched it from a short distance" }
          ],
          correct: "A"
        },
        {
          id: "clustered",
          sol: "10.RV.1.C",
          stem: "In sentence 17, the word clustered most nearly means —",
          choices: [
            { letter: "A", text: "lay buried very deeply" },
            { letter: "B", text: "broke into small pieces" },
            { letter: "C", text: "slowly changed color" },
            { letter: "D", text: "gathered close together" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does Jun-ho's week at the dig best develop?",
          choices: [
            { letter: "A", text: "Experienced workers should handle the most important tasks." },
            { letter: "B", text: "Hard work is usually rewarded with valuable treasure." },
            { letter: "C", text: "Ordinary objects can reveal meaningful human stories." },
            { letter: "D", text: "History is best learned from old maps and letters." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── LONG · Vocabulary (level 3) · deep-sea exploration ───────────── */
    {
      id: "g10-rv-c80-vent-life",
      family: "G10",
      title: "Life Without Sunlight",
      kind: "Vocabulary · 10.RV",
      blurb: "Cracks in the deep seafloor turned out to hold one of biology's biggest surprises.",
      level: 3,
      passage:
        "<p>" + N(1) + "For most of human history, the deep seafloor was imagined as a vast, empty plain, too cold, too dark, and too crushed by pressure to support much life. " +
        N(2) + "The assumption made sense. " +
        N(3) + "Below about a thousand meters, no sunlight penetrates at all, and the water hovers just above freezing. " +
        N(4) + "It is among the most <strong>inhospitable</strong> environments on the planet.</p>" +
        "<p>" + N(5) + "That picture changed in the late twentieth century, when researchers in deep-diving submersibles began exploring hydrothermal vents, cracks in the seafloor where volcanic heat warms seawater and sends it gushing back out, loaded with dissolved minerals. " +
        N(6) + "Around these vents they found crowded communities: tube worms taller than a person, pale crabs, shrimp, clams, and dense mats of bacteria. " +
        N(7) + "Life was not merely surviving there; it was flourishing.</p>" +
        "<p>" + N(8) + "The puzzle was energy. " +
        N(9) + "On land and in shallow seas, nearly every food chain begins with photosynthesis, in which plants and algae use sunlight to make food. " +
        N(10) + "At the vents, the base of the food chain is <strong>chemosynthesis</strong>: microbes draw energy from chemicals such as hydrogen sulfide in the vent water and use it to build sugars. " +
        N(11) + "Many vent animals feed on these microbes directly, and some, like the giant tube worms, carry them inside their bodies in a partnership that benefits both.</p>" +
        "<p>" + N(12) + "Vent communities are also surprisingly <strong>ephemeral</strong>. " +
        N(13) + "A vent may gush for years or decades, then shift or shut down as the rock beneath it moves, and the animals that depend on it starve or scatter. " +
        N(14) + "Yet new vents open elsewhere, and larvae drifting in the currents somehow find them, sometimes across hundreds of kilometers of dark water. " +
        N(15) + "How they locate these scattered oases remains <strong>elusive</strong>; scientists have theories, but no one has yet followed a single larva on its journey.</p>" +
        "<p>" + N(16) + "Many species found at vents are <strong>endemic</strong>, living nowhere else on Earth, and some have been recorded at only one vent field. " +
        N(17) + "That makes each new expedition a chance to find animals never seen before, but it also means a single disturbance could erase a species before it is even described. " +
        N(18) + "Microbes, by contrast, are <strong>ubiquitous</strong> in the deep sea; nearly every sample of vent water or rock teems with them.</p>" +
        "<p>" + N(19) + "The discovery of vent life did more than add species to a list. " +
        N(20) + "It showed that life can run on chemical energy instead of sunlight, a finding that has led some scientists to wonder whether similar communities might exist in dark oceans beneath the ice of distant moons. " +
        N(21) + "The deep sea, once dismissed as empty, turned out to hold one of biology's largest surprises.</p>",
      claims: [
        {
          id: "inhospitable",
          sol: "10.RV.1.A",
          stem: "The word inhospitable in sentence 4 combines the prefix in- (not) with hospitable (welcoming). Based on this, an inhospitable environment is one that —",
          choices: [
            { letter: "A", text: "has never been visited by people" },
            { letter: "B", text: "is unwelcoming and hard to live in" },
            { letter: "C", text: "is full of hidden living things" },
            { letter: "D", text: "changes quickly from year to year" }
          ],
          correct: "B"
        },
        {
          id: "chemo",
          sol: "10.RV.1.A",
          stem: "The word chemosynthesis joins chemo- (chemical) with synthesis (putting together). Based on its parts and sentence 10, chemosynthesis is a process of —",
          choices: [
            { letter: "A", text: "breaking down rock with volcanic heat" },
            { letter: "B", text: "making food with energy from sunlight" },
            { letter: "C", text: "separating minerals from seawater" },
            { letter: "D", text: "building food with chemical energy" }
          ],
          correct: "D"
        },
        {
          id: "ephemeral",
          sol: "10.RV.1.B",
          stem: "Sentence 13 helps the reader understand that ephemeral means —",
          choices: [
            { letter: "A", text: "lasting only a limited time" },
            { letter: "B", text: "extremely hot and dangerous" },
            { letter: "C", text: "widely scattered apart" },
            { letter: "D", text: "hidden from human view" }
          ],
          correct: "A"
        },
        {
          id: "elusive",
          sol: "10.RV.1.C",
          stem: "In sentence 15, the word elusive most nearly means —",
          choices: [
            { letter: "A", text: "widely accepted" },
            { letter: "B", text: "easy to observe" },
            { letter: "C", text: "hard to pin down" },
            { letter: "D", text: "recently proven" }
          ],
          correct: "C"
        },
        {
          id: "endemic",
          sol: "10.RV.1.C",
          stem: "As it is used in sentence 16, the word endemic describes species that are —",
          choices: [
            { letter: "A", text: "in danger of dying out" },
            { letter: "B", text: "larger than their relatives" },
            { letter: "C", text: "found in only one place" },
            { letter: "D", text: "common across the ocean" }
          ],
          correct: "C"
        },
        {
          id: "flourishing",
          sol: "10.RV.1.D",
          stem: "The author writes in sentence 7 that vent life was flourishing rather than merely surviving. Compared with surviving, flourishing suggests that the communities were —",
          choices: [
            { letter: "A", text: "barely holding on" },
            { letter: "B", text: "thriving and abundant" },
            { letter: "C", text: "newly arrived there" },
            { letter: "D", text: "harmful to visitors" }
          ],
          correct: "B"
        },
        {
          id: "dismissed",
          sol: "10.RV.1.D",
          stem: "In sentence 21, the author says the deep sea was once dismissed as empty. The word dismissed carries a connotation of —",
          choices: [
            { letter: "A", text: "being judged unimportant without much thought" },
            { letter: "B", text: "being officially closed to all explorers" },
            { letter: "C", text: "being praised for its strange beauty" },
            { letter: "D", text: "being feared by sailors for centuries" }
          ],
          correct: "A"
        },
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the passage on vent life?",
          choices: [
            { letter: "A", text: "The deep seafloor is mostly an empty plain with little life." },
            { letter: "B", text: "Tube worms are the largest animals living in the deep ocean." },
            { letter: "C", text: "Scientists have finally traced how vent larvae find new vents." },
            { letter: "D", text: "Vents showed that life can thrive on chemical energy in the dark." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── LONG · Paired texts (level 2) · solar energy ───────────── */
    {
      id: "g10-dsr-c80-school-roof",
      family: "G10",
      title: "Sun on the School Roof",
      kind: "Paired texts · 10.DSR",
      blurb: "A student editorial calls for rooftop solar now. The facilities director answers.",
      level: 2,
      passage:
        "<p><strong>Text 1 — \"Our Roof Is Wasting Sunshine,\" an editorial by Selin Arslan in the Westbrook High Courier</strong></p>" +
        "<p>" + N(1) + "Every sunny afternoon, the flat roof of Westbrook High soaks up enough sunlight to power a good share of our classrooms, and every afternoon we let it go to waste. " +
        N(2) + "The roof covers nearly two acres, faces open sky, and has no trees shading it. " +
        N(3) + "It is, in other words, an ideal place for solar panels. " +
        N(4) + "Our district spent more than three hundred thousand dollars on electricity last year, according to the budget posted on its website. " +
        N(5) + "Schools in neighboring counties have installed rooftop arrays and now report lower bills, and some even use their panels in science classes, letting students track how much power is produced each hour. " +
        N(6) + "Critics will say the panels cost too much up front. " +
        N(7) + "But many districts avoid that cost by signing agreements with companies that install and own the panels, then sell the power back to the school at a lower rate than the utility charges. " +
        N(8) + "The school pays nothing to install them and starts saving on the first sunny day. " +
        N(9) + "Students have already shown they care; more than four hundred signed the Environmental Club's petition last spring. " +
        N(10) + "The school board should approve a rooftop solar project this year. " +
        N(11) + "Every month we wait is another month of free energy left sitting on the roof.</p>" +
        "<p><strong>Text 2 — A letter to the editors from Anil Bhatt, Director of Facilities</strong></p>" +
        "<p>" + N(12) + "I read Selin Arslan's editorial with real interest, and I agree with more of it than she might expect. " +
        N(13) + "Our roof does receive strong sun, and a power agreement of the kind she describes is a sensible way to pay for panels. " +
        N(14) + "There is, however, a problem she could not have seen from the parking lot. " +
        N(15) + "The Westbrook roof is twenty-two years old, and our engineers expect it to need full replacement within about four years. " +
        N(16) + "Solar panels last twenty-five years or more. " +
        N(17) + "If we install them now, we would have to pay a crew to remove them, store them, and reinstall them when the roof is replaced, an expense that could erase several years of savings. " +
        N(18) + "I have asked the board to consider two other options. " +
        N(19) + "The first is to replace the roof on an earlier schedule and add panels at the same time. " +
        N(20) + "The second is to build a solar canopy over the student parking lot, a raised frame of panels that would shade the cars below and keep the panels off the roof entirely. " +
        N(21) + "Both options can begin with a design study this year. " +
        N(22) + "Ms. Arslan is right that waiting has a cost. " +
        N(23) + "But building on a roof that is about to come apart has a cost too, and I would rather we pay for good timing than for doing the job twice.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do Selin Arslan and Mr. Bhatt agree?",
          choices: [
            { letter: "A", text: "The current roof should get panels this school year." },
            { letter: "B", text: "The parking lot is the best place for the panels." },
            { letter: "C", text: "A power agreement is a sensible way to pay for panels." },
            { letter: "D", text: "The student petition means the board must act now." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes a key difference between the editorial and the letter?",
          choices: [
            { letter: "A", text: "Text 1 urges quick action; Text 2 urges careful timing." },
            { letter: "B", text: "Text 1 opposes solar power; Text 2 supports it fully." },
            { letter: "C", text: "Text 1 uses cost data; Text 2 relies only on feelings." },
            { letter: "D", text: "Text 1 targets students; Text 2 targets solar companies." }
          ],
          correct: "A"
        },
        {
          id: "pairing",
          sol: "10.DSR.D",
          stem: "Pairing the editorial with the facilities director's letter mainly helps readers —",
          choices: [
            { letter: "A", text: "learn how solar panels turn sunlight into power" },
            { letter: "B", text: "compare the electricity costs of several districts" },
            { letter: "C", text: "decide whether student petitions should be allowed" },
            { letter: "D", text: "see how a good idea can run into practical limits" }
          ],
          correct: "D"
        },
        {
          id: "next",
          sol: "10.DSR.E",
          stem: "Using both texts, what is the most likely next step for the Westbrook district?",
          choices: [
            { letter: "A", text: "installing panels on the current roof this spring" },
            { letter: "B", text: "starting a design study for a new roof or a canopy" },
            { letter: "C", text: "canceling every plan for solar power at the school" },
            { letter: "D", text: "holding a second petition drive among the students" }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "10.DSR.E",
          stem: "A reader who uses both texts about the Westbrook roof could best conclude that —",
          choices: [
            { letter: "A", text: "the editorial was based on false budget figures" },
            { letter: "B", text: "Mr. Bhatt doubts that solar panels save money" },
            { letter: "C", text: "the board has already turned down the petition" },
            { letter: "D", text: "solar power may come, but not on today's roof" }
          ],
          correct: "D"
        },
        {
          id: "challenge",
          sol: "10.DSR.E",
          stem: "Which sentence from Text 1 does Mr. Bhatt's letter most directly challenge?",
          choices: [
            { letter: "A", text: "\"It is, in other words, an ideal place for solar panels.\"" },
            { letter: "B", text: "\"Critics will say the panels cost too much up front.\"" },
            { letter: "C", text: "\"Students have already shown they care.\"" },
            { letter: "D", text: "\"Our district spent more than three hundred thousand dollars on electricity last year.\"" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of Mr. Bhatt's final sentence is best described as —",
          choices: [
            { letter: "A", text: "sarcastic and dismissive" },
            { letter: "B", text: "anxious and uncertain" },
            { letter: "C", text: "firm but reasonable" },
            { letter: "D", text: "playful and joking" }
          ],
          correct: "C"
        },
        {
          id: "canopy",
          sol: "10.RV.1.B",
          stem: "In sentence 20, the words that follow canopy help the reader understand that a solar canopy is —",
          choices: [
            { letter: "A", text: "a special coating painted on a roof" },
            { letter: "B", text: "a raised frame that covers and shades an area" },
            { letter: "C", text: "a row of trees planted beside a parking lot" },
            { letter: "D", text: "a storage shed for panels awaiting repair" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── LONG · Paired texts (level 3) · desert ecosystems ───────────── */
    {
      id: "g10-dsr-c80-desert-bloom",
      family: "G10",
      title: "When the Desert Blooms",
      kind: "Paired texts · 10.DSR",
      blurb: "A botanist watches seeds wake after years of drought; an article counts the crowds that follow.",
      level: 3,
      passage:
        "<p><strong>Text 1 — \"Waiting Seeds,\" from the field notebook of a desert botanist</strong></p>" +
        "<p>" + N(1) + "For three dry years, the basin below our research station looked like a parking lot made of gravel. " +
        N(2) + "Visitors stopped at the overlook, frowned, and drove on. " +
        N(3) + "What they could not see was that the ground was full of seeds, thousands in every square meter, each one sealed in a coat thick enough to wait out drought. " +
        N(4) + "Some desert annuals will not sprout until a single storm drops at least an inch of rain, enough to promise that the soil will stay moist long enough for a plant to flower and set seed of its own. " +
        N(5) + "A light shower is not enough; the seeds seem to know the difference. " +
        N(6) + "This February, the inch finally came. " +
        N(7) + "Within two weeks the basin turned green, and by early March it was gold and violet from rim to rim, poppies and desert sunflowers and sand verbena crowding every gap between the rocks. " +
        N(8) + "I have studied these plants for nineteen years, and still I walked out at dawn and simply stood there. " +
        N(9) + "Even so, not every seed answered the rain. " +
        N(10) + "Many stayed <em>dormant</em>, a reserve held back in case this bloom failed. " +
        N(11) + "The flowers in front of me were only part of the story; the rest was still underground, waiting for a year I may not live to see.</p>" +
        "<p><strong>Text 2 — \"When a Bloom Draws a Crowd\"</strong></p>" +
        "<p>" + N(12) + "Rare desert wildflower displays, sometimes called superblooms, have become famous online, and that fame brings people. " +
        N(13) + "During one recent bloom, weekend attendance at a desert state park rose to more than ten times its usual level. " +
        N(14) + "Most visitors came to look, but some left the trails to pose among the flowers for photographs. " +
        N(15) + "Each step off the path crushes plants before they can drop seeds, and repeated trampling packs the soil so hard that future seedlings struggle to push through. " +
        N(16) + "Rangers responded by roping off fragile areas, adding volunteer guides at popular overlooks, and posting signs that read \"Leave only footprints, and leave them on the trail.\" " +
        N(17) + "Managers also face a timing problem. " +
        N(18) + "Because blooms depend on unpredictable rain, a park may go years without crowds and then receive tens of thousands of visitors with only a few weeks' warning. " +
        N(19) + "Some parks now partner with local schools and volunteer groups so that trained helpers can be called in quickly when a bloom begins. " +
        N(20) + "Botanists say the stakes are higher than a single season. " +
        N(21) + "A bloom is the moment when the desert restocks its supply of seeds, and flowers that are picked or flattened cannot contribute to the next one. " +
        N(22) + "The display that draws the crowds is also the desert's investment in its own future.</p>",
      claims: [
        {
          id: "both",
          sol: "10.DSR.D",
          stem: "Which idea do the field notes and the article both support?",
          choices: [
            { letter: "A", text: "A light rain shower is enough to start a bloom." },
            { letter: "B", text: "A bloom is brief but matters for the desert's future." },
            { letter: "C", text: "Visitors should stay away from deserts in spring." },
            { letter: "D", text: "Desert seeds all sprout at once after a storm." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "The two texts about the desert bloom differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "argues for closing parks, while Text 2 opposes closings" },
            { letter: "B", text: "explains ranger training, while Text 2 describes flowers" },
            { letter: "C", text: "gives a personal view, while Text 2 examines crowd effects" },
            { letter: "D", text: "focuses on online fame, while Text 2 focuses on seed coats" }
          ],
          correct: "C"
        },
        {
          id: "pairing",
          sol: "10.DSR.D",
          stem: "Pairing the botanist's notes with the article mainly helps readers understand —",
          choices: [
            { letter: "A", text: "why trampling a bloom harms more than one season" },
            { letter: "B", text: "how two kinds of desert flowers differ in color" },
            { letter: "C", text: "how to photograph wildflowers from an overlook" },
            { letter: "D", text: "why botanists would rather parks had no visitors" }
          ],
          correct: "A"
        },
        {
          id: "together",
          sol: "10.DSR.E",
          stem: "Which idea becomes clear only when the field notes and the article are read together?",
          choices: [
            { letter: "A", text: "Some desert annuals need about an inch of rain to sprout." },
            { letter: "B", text: "Park attendance can rise tenfold during a bloom." },
            { letter: "C", text: "The botanist has studied these plants for nineteen years." },
            { letter: "D", text: "Trampling threatens the seed reserve that outlasts drought." }
          ],
          correct: "D"
        },
        {
          id: "frowned",
          sol: "10.DSR.E",
          stem: "How does Text 2 add to the detail in sentence 2 of Text 1 that visitors frowned and drove on?",
          choices: [
            { letter: "A", text: "It shows that the same place draws crowds once it blooms." },
            { letter: "B", text: "It explains that rangers turned visitors away in drought." },
            { letter: "C", text: "It proves that most visitors dislike desert scenery." },
            { letter: "D", text: "It reveals that the overlook was closed for repairs." }
          ],
          correct: "A"
        },
        {
          id: "volunteers",
          sol: "10.DSR.E",
          stem: "Based on both texts, why might a park call in trained volunteers soon after an inch of rain falls?",
          choices: [
            { letter: "A", text: "Volunteers must plant seeds before the soil dries." },
            { letter: "B", text: "Rangers need help measuring the total rainfall." },
            { letter: "C", text: "A bloom and its crowds could arrive within weeks." },
            { letter: "D", text: "Heavy rain damages trails that need quick repair." }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which sentence from Text 2 best supports the claim that trampling harms future blooms, not just the current one?",
          choices: [
            { letter: "A", text: "Sentence 13, about attendance rising tenfold" },
            { letter: "B", text: "Sentence 16, about signs and roped-off areas" },
            { letter: "C", text: "Sentence 18, about crowds arriving with little warning" },
            { letter: "D", text: "Sentence 15, about packed soil blocking seedlings" }
          ],
          correct: "D"
        },
        {
          id: "dormant",
          sol: "10.RV.1.A",
          stem: "The word dormant in sentence 10 comes from the Latin dormire, to sleep, as in dormitory. Based on this, dormant seeds are —",
          choices: [
            { letter: "A", text: "dead and slowly decaying" },
            { letter: "B", text: "alive but inactive for now" },
            { letter: "C", text: "growing quickly underground" },
            { letter: "D", text: "too damaged ever to sprout" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── LONG · Poetry (level 3) · archaeology dig ───────────── */
    {
      id: "g10-rl-c80-sherd",
      family: "G10",
      title: "Sherd, Square C-4",
      kind: "Poetry · 10.RL",
      blurb: "A student logs a broken piece of pottery, then finds a thumbprint left nine hundred years ago.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Square C-4, level three: I log it<br>" +
        L(2) + "the way they taught me, depth and color, size,<br>" +
        L(3) + "a curve of reddish clay no wider<br>" +
        L(4) + "than a playing card, the rim intact,<br>" +
        L(5) + "one painted band gone brown as tea.<br>" +
        L(6) + "I clear the dirt off with a brush<br>" +
        L(7) + "meant for watercolors, careful<br>" +
        L(8) + "as someone dusting a sleeping face.<br>" +
        L(9) + "Number, bag, and move along:<br>" +
        L(10) + "the trench has eighty more like this,<br>" +
        L(11) + "and the sun is climbing toward noon.<br>" +
        L(12) + "But when I tilt it toward the light<br>" +
        L(13) + "I find, along the inside lip,<br>" +
        L(14) + "a print, the whorls of someone's thumb<br>" +
        L(15) + "pressed in while the clay was wet,<br>" +
        L(16) + "the way you'd steady something spinning.<br>" +
        L(17) + "Nine hundred years, the tag will say.<br>" +
        L(18) + "It does not feel like nine hundred years.<br>" +
        L(19) + "It feels like a hand let go of this<br>" +
        L(20) + "a moment ago, to answer someone<br>" +
        L(21) + "calling from another room,<br>" +
        L(22) + "and might come back for it.<br>" +
        L(23) + "I set the sherd down in its bag<br>" +
        L(24) + "the way you'd hand a thing back to its owner.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does the poem about the sherd develop?",
          choices: [
            { letter: "A", text: "Archaeology is too slow to reveal anything meaningful." },
            { letter: "B", text: "Ancient potters were more skilled than modern artists." },
            { letter: "C", text: "Careful records matter more than personal feelings." },
            { letter: "D", text: "A single object can make the distant past feel near." }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "10.RL.1.B",
          stem: "Which line marks the shift in the speaker's attitude toward the sherd?",
          choices: [
            { letter: "A", text: "Line 1, \"Square C-4, level three: I log it\"" },
            { letter: "B", text: "Line 12, \"But when I tilt it toward the light\"" },
            { letter: "C", text: "Line 9, \"Number, bag, and move along\"" },
            { letter: "D", text: "Line 17, \"Nine hundred years, the tag will say\"" }
          ],
          correct: "B"
        },
        {
          id: "speaker",
          sol: "10.RL.1.C",
          stem: "Lines 1 through 5 characterize the speaker at first as —",
          choices: [
            { letter: "A", text: "methodical and focused on procedure" },
            { letter: "B", text: "bored and eager to quit the dig" },
            { letter: "C", text: "amazed and overwhelmed by the find" },
            { letter: "D", text: "careless and hurried in the heat" }
          ],
          correct: "A"
        },
        {
          id: "face",
          sol: "10.RL.2.A",
          stem: "In line 8, comparing the brushing to dusting a sleeping face suggests that the speaker handles the sherd with —",
          choices: [
            { letter: "A", text: "nervous haste" },
            { letter: "B", text: "cool detachment" },
            { letter: "C", text: "gentle tenderness" },
            { letter: "D", text: "growing irritation" }
          ],
          correct: "C"
        },
        {
          id: "room",
          sol: "10.RL.2.B",
          stem: "The image in lines 19 through 22 of a hand letting go to answer someone calling mainly creates a sense of —",
          choices: [
            { letter: "A", text: "danger and suspense" },
            { letter: "B", text: "closeness across time" },
            { letter: "C", text: "regret and blame" },
            { letter: "D", text: "humor and lightness" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Lines 17 and 18 are ironic because —",
          choices: [
            { letter: "A", text: "the tag lists the wrong date for the sherd" },
            { letter: "B", text: "the speaker doubts the clay is truly old" },
            { letter: "C", text: "the trench is much older than the sherd" },
            { letter: "D", text: "the stated age clashes with how near it feels" }
          ],
          correct: "D"
        },
        {
          id: "close",
          sol: "10.RL.3.A",
          stem: "How does line 24 function in the poem?",
          choices: [
            { letter: "A", text: "It ends by treating the sherd as its maker's property." },
            { letter: "B", text: "It returns to the record-keeping tone of line 1." },
            { letter: "C", text: "It explains why the dig must end before noon." },
            { letter: "D", text: "It introduces a new character who owns the sherd." }
          ],
          correct: "A"
        },
        {
          id: "sherd",
          sol: "10.RV.1.B",
          stem: "Based on the description in lines 3 through 5, the sherd the speaker finds is best described as —",
          choices: [
            { letter: "A", text: "a whole painted clay bowl" },
            { letter: "B", text: "a carved stone hand tool" },
            { letter: "C", text: "a broken piece of pottery" },
            { letter: "D", text: "a small copper trade coin" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── LONG · Drama (level 1) · solar energy in the desert ───────────── */
    {
      id: "g10-rl-c80-solar-car",
      family: "G10",
      title: "Checkpoint at Sundown",
      kind: "Drama · 10.RL",
      blurb: "A student solar car team argues at a desert checkpoint: race on now, or wait for the sun?",
      level: 1,
      passage:
        "<p><em>" + N(1) + "A gravel checkpoint beside a desert highway, late afternoon on the first day of a student solar race. " +
        N(2) + "A low, flat solar car sits in the sun beside the team van. " +
        N(3) + "CAMILA studies a tablet while YUSUF, still wearing his helmet, paces. " +
        N(4) + "MR. TOIVONEN, the team's adviser, unfolds a camp chair.</em></p>" +
        "<p><strong>YUSUF:</strong> " + N(5) + "We're in fourth place, and the next checkpoint is only ninety kilometers away. " +
        N(6) + "If we leave now, we pass the Lakeside team before sunset.</p>" +
        "<p><strong>CAMILA:</strong> " + N(7) + "If we leave now, we run out of battery forty kilometers from the checkpoint. " +
        N(8) + "The numbers are right here.</p>" +
        "<p><strong>YUSUF:</strong> " + N(9) + "The numbers said we'd lose the hill climb yesterday, and we didn't.</p>" +
        "<p><strong>CAMILA:</strong> " + N(10) + "Because a cloud moved and the panels caught full sun for twenty minutes. " +
        N(11) + "That was luck, Yusuf, not a plan.</p>" +
        "<p><strong>MR. TOIVONEN:</strong> <em>(sitting, calmly)</em> " + N(12) + "What does the battery say right now?</p>" +
        "<p><strong>CAMILA:</strong> " + N(13) + "Thirty-one percent. " +
        N(14) + "The sun's getting low, so the panels are only adding a little. " +
        N(15) + "If we park the car and tilt the array toward the west for an hour, we can reach fifty.</p>" +
        "<p><strong>YUSUF:</strong> " + N(16) + "An hour! " +
        N(17) + "Lakeside will be gone by then.</p>" +
        "<p><strong>MR. TOIVONEN:</strong> " + N(18) + "Lakeside isn't the race. " +
        N(19) + "The race is getting this car across the finish line in three days. " +
        N(20) + "Every team that's stranded on the shoulder tonight will be out of the running tomorrow. " +
        N(21) + "A battery is a promise you make to tomorrow, and you two keep wanting to spend tomorrow's promise this afternoon.</p>" +
        "<p><strong>YUSUF:</strong> <em>(takes off his helmet and looks down the empty highway)</em> " + N(22) + "I've been driving for six hours, and my hands still feel the road. " +
        N(23) + "It feels like we're giving up.</p>" +
        "<p><strong>CAMILA:</strong> <em>(more softly)</em> " + N(24) + "We're not giving up. " +
        N(25) + "We're saving it for when it counts. " +
        N(26) + "Tomorrow morning the sun will be high over the salt flats, and with a full charge you can drive as fast as you want.</p>" +
        "<p><strong>YUSUF:</strong> <em>(after a pause)</em> " + N(27) + "As fast as I want?</p>" +
        "<p><strong>CAMILA:</strong> " + N(28) + "Within the speed limit. " +
        N(29) + "And within my numbers.</p>" +
        "<p><em>" + N(30) + "YUSUF laughs and starts unclipping the panel brackets so the array can tilt. " +
        N(31) + "CAMILA kneels beside him, reading angles off the tablet. " +
        N(32) + "MR. TOIVONEN watches them work for a moment and smiles.</em></p>" +
        "<p><strong>MR. TOIVONEN:</strong> " + N(33) + "Best decision this team has made all week, and neither of you made it alone.</p>" +
        "<p><em>" + N(34) + "The sun sinks toward the distant mountains as the three of them tilt the glittering panels to meet it. " +
        N(35) + "On the highway, a single car hums past, heading east, and nobody looks up to watch it go.</em></p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best supported by the scene at the checkpoint?",
          choices: [
            { letter: "A", text: "Patience and planning can matter more than speed." },
            { letter: "B", text: "Winning a race always requires taking big risks." },
            { letter: "C", text: "Adults should make the decisions for student teams." },
            { letter: "D", text: "New technology tends to fail at the worst moment." }
          ],
          correct: "A"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict of the scene is best described as a disagreement over whether to —",
          choices: [
            { letter: "A", text: "let Camila drive the next stage of the race" },
            { letter: "B", text: "report the Lakeside team for breaking rules" },
            { letter: "C", text: "drop out of the race after the hill climb" },
            { letter: "D", text: "keep driving now or stop to recharge" }
          ],
          correct: "D"
        },
        {
          id: "camila",
          sol: "10.RL.1.C",
          stem: "Camila's lines in sentences 7 through 11 show that she is someone who —",
          choices: [
            { letter: "A", text: "enjoys arguing just to win" },
            { letter: "B", text: "doubts Yusuf's skill as a driver" },
            { letter: "C", text: "trusts evidence more than luck" },
            { letter: "D", text: "ignores the adviser's advice" }
          ],
          correct: "C"
        },
        {
          id: "promise",
          sol: "10.RL.2.A",
          stem: "Mr. Toivonen's statement in sentence 21 that a battery is a promise you make to tomorrow suggests that —",
          choices: [
            { letter: "A", text: "the battery is likely to fail by morning" },
            { letter: "B", text: "saving energy now makes later driving possible" },
            { letter: "C", text: "the team must buy a new battery tonight" },
            { letter: "D", text: "promises are harder to keep during a race" }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The stage directions in sentences 34 and 35 mainly create a mood of —",
          choices: [
            { letter: "A", text: "tense dread" },
            { letter: "B", text: "bitter defeat" },
            { letter: "C", text: "noisy celebration" },
            { letter: "D", text: "hopeful calm" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          stem: "The tone of Camila's reply in sentences 28 and 29 is best described as —",
          choices: [
            { letter: "A", text: "teasing but firm" },
            { letter: "B", text: "angry and harsh" },
            { letter: "C", text: "nervous and unsure" },
            { letter: "D", text: "sad and apologetic" }
          ],
          correct: "A"
        },
        {
          id: "question",
          sol: "10.RL.3.A",
          stem: "Mr. Toivonen's question in sentence 12 mainly serves to —",
          choices: [
            { letter: "A", text: "show that he has not been listening" },
            { letter: "B", text: "steer the argument toward the facts" },
            { letter: "C", text: "introduce a new problem with the car" },
            { letter: "D", text: "end the team's racing for the day" }
          ],
          correct: "B"
        },
        {
          id: "saving",
          sol: "10.RV.1.D",
          stem: "Yusuf says the team is giving up, but Camila says they are saving it (sentences 23 through 25). Compared with giving up, saving suggests —",
          choices: [
            { letter: "A", text: "losing something for good" },
            { letter: "B", text: "wasting something carelessly" },
            { letter: "C", text: "holding something back for later" },
            { letter: "D", text: "hiding something from rivals" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── LONG · Functional text (level 1) · solar energy ───────────── */
    {
      id: "g10-ri-c80-community-solar",
      family: "G10",
      title: "Community Solar Sign-Up",
      kind: "Functional text · 10.RI",
      blurb: "A cooperative's guide to buying a share of a solar garden without putting panels on your roof.",
      level: 1,
      passage:
        "<p><strong>Harlow Valley Community Solar: How to Subscribe</strong></p>" +
        "<p>" + N(1) + "Harlow Valley Electric Cooperative is building a community solar garden on the former gravel pit off Mill Road, and members may now sign up for a share of its output. " +
        N(2) + "This guide explains how the program works, who can join, and what to expect on your bill.</p>" +
        "<p><strong>What is community solar?</strong> " + N(3) + "Community solar lets members benefit from solar power without installing panels on their own homes. " +
        N(4) + "You subscribe to a portion of the solar garden, measured in blocks of 250 watts each. " +
        N(5) + "Each month, the electricity your blocks produce appears as a credit on your bill. " +
        N(6) + "This option works well for renters, for homes with shaded roofs, and for anyone who cannot or does not want to install rooftop panels.</p>" +
        "<p><strong>Who can subscribe?</strong> " + N(7) + "Any residential member of the cooperative with an account in good standing may subscribe. " +
        N(8) + "Each household may hold between 1 and 20 blocks, but the blocks together may not produce more than the household's average yearly use. " +
        N(9) + "Small businesses may apply for up to 40 blocks after the residential sign-up period ends on March 31.</p>" +
        "<p><strong>What does it cost?</strong> " + N(10) + "Each block costs a one-time fee of $150, or members may choose a monthly plan of $4 per block with no up-front payment. " +
        N(11) + "On average, one block produces enough credit to save between $5 and $7 a month, depending on the season. " +
        N(12) + "Credits are largest in summer and smallest in December and January, when days are short.</p>" +
        "<p><strong>What if I move?</strong> " + N(13) + "If you move within the cooperative's service area, your subscription moves with you. " +
        N(14) + "If you move away, you may transfer your blocks to another member or return them to the cooperative for a partial refund of the one-time fee, prorated by the number of years remaining in the 20-year program.</p>" +
        "<p><strong>How do I sign up?</strong> " + N(15) + "Complete the subscription form online or at the cooperative office at 14 Depot Street. " +
        N(16) + "Have your account number and your last twelve months of usage ready; the usage figure appears in the box labeled Annual kWh on any recent bill. " +
        N(17) + "Blocks are assigned in the order forms are received. " +
        N(18) + "If the garden is fully subscribed, you will be placed on a waiting list and contacted when a block becomes available.</p>" +
        "<p><strong>Questions?</strong> " + N(19) + "Call Member Services at 555-0148, Monday through Friday, 8 a.m. to 5 p.m., or stop by the office during the same hours. " +
        N(20) + "Staff can help you estimate how many blocks fit your household's use before you commit.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes the community solar guide?",
          choices: [
            { letter: "A", text: "It argues that rooftop panels beat community solar." },
            { letter: "B", text: "It describes the history of the Mill Road gravel pit." },
            { letter: "C", text: "It explains how members join and earn bill credits." },
            { letter: "D", text: "It warns members that electricity prices will rise." }
          ],
          correct: "C"
        },
        {
          id: "renters",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the idea that community solar is meant for people who cannot use rooftop panels?",
          choices: [
            { letter: "A", text: "Sentence 4, which says shares are measured in blocks" },
            { letter: "B", text: "Sentence 6, which names renters and shaded homes" },
            { letter: "C", text: "Sentence 10, which lists the cost of each block" },
            { letter: "D", text: "Sentence 17, which explains the order of assignment" }
          ],
          correct: "B"
        },
        {
          id: "limit",
          sol: "10.RI.1.B",
          stem: "A household that uses very little electricity asks for 20 blocks. Which sentence explains why the request might be reduced?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The community solar guide is written mainly for —",
          choices: [
            { letter: "A", text: "members deciding whether to subscribe" },
            { letter: "B", text: "engineers building the solar garden" },
            { letter: "C", text: "business owners already enrolled" },
            { letter: "D", text: "officials approving the Mill Road site" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          stem: "The bold headings in the community solar guide help a reader mainly by —",
          choices: [
            { letter: "A", text: "showing which sections are required by law" },
            { letter: "B", text: "separating facts from the cooperative's opinions" },
            { letter: "C", text: "framing each section as a member's question" },
            { letter: "D", text: "ranking the program's costs from high to low" }
          ],
          correct: "C"
        },
        {
          id: "winter",
          sol: "10.RI.2.B",
          stem: "The guide mentions that credits are smallest in December and January (sentence 12) mainly to —",
          choices: [
            { letter: "A", text: "persuade members to sign up only in summer" },
            { letter: "B", text: "explain why the program lasts twenty years" },
            { letter: "C", text: "warn that the garden shuts down in winter" },
            { letter: "D", text: "set realistic hopes about monthly savings" }
          ],
          correct: "D"
        },
        {
          id: "together",
          sol: "10.RI.2.C",
          stem: "Which statement is best supported by sentences 10 and 11 of the guide together?",
          choices: [
            { letter: "A", text: "The one-time fee is paid back within one month." },
            { letter: "B", text: "A block on the monthly plan can save more than it costs." },
            { letter: "C", text: "Every member saves exactly $7 per block each month." },
            { letter: "D", text: "The monthly plan costs more in winter than in summer." }
          ],
          correct: "B"
        },
        {
          id: "prorated",
          sol: "10.RV.1.B",
          stem: "In sentence 14, the context suggests that a refund prorated by the years remaining is one that is —",
          choices: [
            { letter: "A", text: "reduced to match the time left in the program" },
            { letter: "B", text: "paid in full no matter when a member leaves" },
            { letter: "C", text: "paid only to members who join after March 31" },
            { letter: "D", text: "increased for each year the garden operates" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── LONG · Argument (level 2) · deep-sea exploration ───────────── */
    {
      id: "g10-ri-c80-map-the-seafloor",
      family: "G10",
      title: "Map the Seafloor First",
      kind: "Argument · 10.RI",
      blurb: "We have sharper maps of Mars than of our own ocean floor. One writer says that should change.",
      level: 2,
      passage:
        "<p>" + N(1) + "We have sharper maps of the surface of Mars than we do of most of our own ocean floor. " +
        N(2) + "That is not an exaggeration meant to grab attention; it is a plain description of where our knowledge stands. " +
        N(3) + "Orbiting spacecraft have photographed nearly every crater on Mars in fine detail, while only about a quarter of Earth's seafloor has been mapped at high resolution by ships using sonar. " +
        N(4) + "The rest is known mainly from satellite estimates that blur features smaller than a few kilometers across. " +
        N(5) + "Before we spend another decade admiring other planets, we should finish mapping the one we live on.</p>" +
        "<p>" + N(6) + "The practical reasons are strong. " +
        N(7) + "The shape of the seafloor steers ocean currents, which carry heat around the globe and shape weather on land. " +
        N(8) + "It also affects how tsunamis travel; a wave that crosses a hidden ridge or canyon can speed up, slow down, or bend toward a coast. " +
        N(9) + "Forecasters can only predict what they can model, and they can only model what has been measured. " +
        N(10) + "Undersea cables that carry most of the world's internet traffic must be routed around slopes and faults that, in many places, nobody has seen.</p>" +
        "<p>" + N(11) + "There is also the simple matter of discovery. " +
        N(12) + "Every survey ship that crosses unmapped water seems to find something: a seamount rising thousands of meters, a field of vents, a canyon longer than any on land. " +
        N(13) + "Each of these features is a habitat, and some shelter species found nowhere else. " +
        N(14) + "We cannot protect places we do not know exist.</p>" +
        "<p>" + N(15) + "Critics argue that ocean mapping is slow and expensive, and that the money would be better spent elsewhere. " +
        N(16) + "It is true that a single research ship can map only a narrow strip at a time. " +
        N(17) + "But the cost is small compared with that of many space missions, and new tools are cutting it further: uncrewed surface vessels can now run sonar for weeks without a crew, and cargo ships could someday be fitted with mapping equipment to collect data on routes they already travel. " +
        N(18) + "The obstacle is less technology than attention.</p>" +
        "<p>" + N(19) + "None of this means space exploration should stop. " +
        N(20) + "It means our priorities are oddly lopsided. " +
        N(21) + "A full map of the seafloor would serve sailors, scientists, emergency planners, and coastal towns for generations. " +
        N(22) + "It is a project within our reach, and it is long overdue. " +
        N(23) + "The largest unexplored territory we can actually visit is not millions of kilometers away; it lies a few kilometers beneath the waves.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the central claim of the seafloor argument?",
          choices: [
            { letter: "A", text: "Sentence 1, which compares maps of Mars and Earth" },
            { letter: "B", text: "Sentence 5, which says we should finish mapping Earth" },
            { letter: "C", text: "Sentence 16, which admits ships map narrow strips" },
            { letter: "D", text: "Sentence 19, which says space travel should go on" }
          ],
          correct: "B"
        },
        {
          id: "safety",
          sol: "10.RI.1.B",
          stem: "Which detail does the author use to show that seafloor maps matter for public safety?",
          choices: [
            { letter: "A", text: "Cargo ships already travel the same routes." },
            { letter: "B", text: "Spacecraft have photographed Martian craters." },
            { letter: "C", text: "Seamounts can rise thousands of meters." },
            { letter: "D", text: "Hidden ridges can change how tsunamis travel." }
          ],
          correct: "D"
        },
        {
          id: "critics",
          sol: "10.RI.1.C",
          stem: "In sentence 15, the author raises the critics' view mainly to —",
          choices: [
            { letter: "A", text: "answer a fair concern and show it is outweighed" },
            { letter: "B", text: "admit that the case for mapping is weak" },
            { letter: "C", text: "prove that critics oppose all science funding" },
            { letter: "D", text: "shift the topic from oceans to space missions" }
          ],
          correct: "A"
        },
        {
          id: "speculation",
          sol: "10.RI.1.C",
          stem: "Which statement from the argument is presented as a possibility rather than an established fact?",
          choices: [
            { letter: "A", text: "About a quarter of the seafloor is mapped at high resolution." },
            { letter: "B", text: "A single research ship maps only a narrow strip at a time." },
            { letter: "C", text: "Cargo ships could someday collect mapping data on their routes." },
            { letter: "D", text: "Spacecraft have photographed nearly every crater on Mars." }
          ],
          correct: "C"
        },
        {
          id: "para2",
          sol: "10.RI.2.A",
          stem: "How is paragraph 2 (sentences 6 through 10) organized?",
          choices: [
            { letter: "A", text: "as a series of practical reasons for the claim" },
            { letter: "B", text: "as a history of mapping in time order" },
            { letter: "C", text: "as a comparison of two opposing views" },
            { letter: "D", text: "as one problem followed by its solution" }
          ],
          correct: "A"
        },
        {
          id: "mars",
          sol: "10.RI.2.B",
          stem: "The author opens with the comparison to Mars in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "argue that missions to Mars should be canceled" },
            { letter: "B", text: "explain how sonar mapping actually works" },
            { letter: "C", text: "stress how little of the seafloor is mapped" },
            { letter: "D", text: "show that Mars is easier to study than Earth" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's tone in sentences 19 through 23 is best described as —",
          choices: [
            { letter: "A", text: "bitter and mocking" },
            { letter: "B", text: "uncertain and hesitant" },
            { letter: "C", text: "detached and neutral" },
            { letter: "D", text: "confident and urgent" }
          ],
          correct: "D"
        },
        {
          id: "lopsided",
          sol: "10.RV.1.D",
          stem: "In sentence 20, the author calls our priorities lopsided rather than different. Compared with different, lopsided suggests that the priorities are —",
          choices: [
            { letter: "A", text: "carefully weighed and fair" },
            { letter: "B", text: "unbalanced in a troubling way" },
            { letter: "C", text: "changing much too quickly" },
            { letter: "D", text: "kept secret from the public" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
