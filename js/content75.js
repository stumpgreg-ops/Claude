/* SOL Labyrinth — v75 content: Grade 10 long passages (Virginia G10, 390-520 words, 8 questions each).
 * Thirteen original packs on community gardens, a small-town bakery, storm chasing and weather,
 * and a high school orchestra. Original text only. Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 · Literary · community garden · level 2 */
    {
      id: "g10-rl-c75-taking-bed",
      family: "G10",
      title: "The Taking Bed",
      kind: "Literary · 10.RL",
      blurb: "Someone is stealing vegetables from a corner garden, and the gardener refuses to lock the gate.",
      level: 2,
      passage:
        "<p>" + N(1) + "Ifeoma Nwosu had expected her twenty hours of community service to be spent in an office, stuffing envelopes in air conditioning. " +
        N(2) + "Instead, the counselor's list sent her to a chain-link gate on Linden Street, where a hand-painted sign read CORNER LOT GARDEN: COME IN. " +
        N(3) + "Behind it, in a space no wider than two houses, someone had fit eighteen raised beds, a rain barrel, and a bench made from an old church pew.</p>" +
        "<p>" + N(4) + "The someone turned out to be Mrs. Dao, a small woman in a straw hat who said very little and moved very fast. " +
        N(5) + "She handed Ifeoma a pair of gloves stiff with old mud and pointed at a bed of tomatoes. " +
        N(6) + "\"Tie them up before they fall over,\" she said, and went back to her weeding. " +
        N(7) + "Ifeoma tied for an hour, sweating, certain that the plants were laughing at her as they slumped away from every knot.</p>" +
        "<p>" + N(8) + "By the third Saturday she had learned the knots, and she had learned something else: people took things. " +
        N(9) + "The ripest tomatoes from the bed near the gate vanished overnight, and on Tuesday a whole row of lettuce was gone, cut neatly at the base. " +
        N(10) + "\"We need a padlock,\" Ifeoma announced, holding up the broken stems like evidence at a trial. " +
        N(11) + "\"And maybe a camera.\" " +
        N(12) + "Mrs. Dao looked at the stems, then at the open gate, and shook her head. " +
        N(13) + "\"The gate stays open,\" she said. " +
        N(14) + "That was all.</p>" +
        "<p>" + N(15) + "Ifeoma stewed about it all week, replaying the conversation and growing more irritated each time. " +
        N(16) + "It seemed to her that the garden was a bucket with a hole in it, and that Mrs. Dao was too stubborn to notice the water running out. " +
        N(17) + "So on Thursday evening she walked over after dinner, meaning to sit on the pew and catch the thief herself.</p>" +
        "<p>" + N(18) + "She did not have to wait long. " +
        N(19) + "A man in a delivery uniform came through the gate with a plastic bag and knelt beside the bed near the entrance. " +
        N(20) + "Before Ifeoma could stand up, Mrs. Dao stepped out from behind the rain barrel, where she had been sitting all along. " +
        N(21) + "The man froze. " +
        N(22) + "Mrs. Dao only pointed past him, to a long bed against the fence that Ifeoma had never seen anyone harvest. " +
        N(23) + "\"Those are ready,\" she said. \"Take the beans too. My knees are bad for beans.\" " +
        N(24) + "The man filled his bag, thanked her twice, and left the gate open behind him.</p>" +
        "<p>" + N(25) + "Ifeoma stared. " +
        N(26) + "\"You're just giving it away?\" " +
        N(27) + "\"That bed is for taking,\" Mrs. Dao said, as though it were the most ordinary thing in the world. " +
        N(28) + "\"I plant it for whoever comes. Tomorrow I will put up a sign so they leave the children's tomatoes alone.\" " +
        N(29) + "She lowered herself onto the pew with a small grunt. " +
        N(30) + "\"A lock keeps out one hungry man. A sign tells him where to eat.\"</p>" +
        "<p>" + N(31) + "On her last Saturday, Ifeoma finished her twentieth hour before noon. " +
        N(32) + "She signed the form, then picked up a trowel and knelt by the fence, pressing bean seeds into the dark soil of the taking bed the way Mrs. Dao had shown her.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of \"The Taking Bed\"?",
          choices: [
            { letter: "A", text: "Hard work matters only when other people notice it." },
            { letter: "B", text: "Openly sharing can solve a problem better than guarding against it." },
            { letter: "C", text: "Young people should follow adult instructions without question." },
            { letter: "D", text: "A city garden cannot succeed without strict rules and locks." }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in Ifeoma's conflict over the missing vegetables?",
          choices: [
            { letter: "A", text: "Sentence 10, when Ifeoma calls for a padlock" },
            { letter: "B", text: "Sentence 17, when Ifeoma plans to catch the thief" },
            { letter: "C", text: "Sentence 21, when the man in the uniform freezes" },
            { letter: "D", text: "Sentence 27, when Mrs. Dao explains the bed's purpose" }
          ],
          correct: "D"
        },
        {
          id: "dao",
          sol: "10.RL.1.C",
          stem: "Sentences 4–6 characterize Mrs. Dao as someone who —",
          choices: [
            { letter: "A", text: "speaks little and expects the work to begin at once" },
            { letter: "B", text: "distrusts the students the school sends her" },
            { letter: "C", text: "enjoys explaining the history of the garden" },
            { letter: "D", text: "would rather work alone than accept any help" }
          ],
          correct: "A"
        },
        {
          id: "bucket",
          sol: "10.RL.2.A",
          stem: "In sentence 16, comparing the garden to a bucket with a hole in it suggests that Ifeoma believes —",
          choices: [
            { letter: "A", text: "the beds need a better watering system" },
            { letter: "B", text: "Mrs. Dao is wasting rain from the barrel" },
            { letter: "C", text: "the garden is steadily losing what it grows" },
            { letter: "D", text: "the raised beds were built too carelessly" }
          ],
          correct: "C"
        },
        {
          id: "trial",
          sol: "10.RL.2.B",
          stem: "In sentence 10, Ifeoma holds up the broken stems like evidence at a trial. This image mainly conveys her —",
          choices: [
            { letter: "A", text: "fear that Mrs. Dao will blame her for the loss" },
            { letter: "B", text: "amusement at how neatly the lettuce was cut" },
            { letter: "C", text: "confusion about how to care for the lettuce" },
            { letter: "D", text: "sense that a wrong was done and must be punished" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in Ifeoma's story is most ironic?",
          choices: [
            { letter: "A", text: "She came to catch a thief but ends up planting food for others to take." },
            { letter: "B", text: "She expected office work but was sent outdoors to a garden instead." },
            { letter: "C", text: "She learned to tie the tomato plants after weeks of practice." },
            { letter: "D", text: "She finished her required hours before noon on her last day." }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The author ends the story with Ifeoma planting beans after her hours are finished mainly to —",
          choices: [
            { letter: "A", text: "suggest that she plans to apply for a paid job" },
            { letter: "B", text: "show that she has come to share Mrs. Dao's view" },
            { letter: "C", text: "explain how beans should be planted in summer" },
            { letter: "D", text: "reveal that she still hopes to catch the thief" }
          ],
          correct: "B"
        },
        {
          id: "stewed",
          sol: "10.RV.1.C",
          stem: "In sentence 15, the word stewed most nearly means —",
          choices: [
            { letter: "A", text: "cooked something slowly over low heat" },
            { letter: "B", text: "rested calmly and forgot the problem" },
            { letter: "C", text: "stayed silently upset and kept brooding" },
            { letter: "D", text: "argued loudly with everyone nearby" }
          ],
          correct: "C"
        }
      ]
    },

    /* 2 · Literary · small-town bakery · level 1 */
    {
      id: "g10-rl-c75-four-kitchens",
      family: "G10",
      title: "Four Kitchens",
      kind: "Literary · 10.RL",
      blurb: "The bakery oven dies the night before the town fair, and four hundred pies still need baking.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every year on the second Saturday of October, the town of Larkfield held its Harvest Fair, and every year Rahimi's Bakery sold four hundred apple hand pies from a folding table beside the bandstand. " +
        N(2) + "Hamid Rahimi had worked at his uncle's bakery since he was twelve. " +
        N(3) + "Now sixteen, he was finally trusted with the pie crust, a job his uncle Farid had done himself for twenty years.</p>" +
        "<p>" + N(4) + "On Friday afternoon, the day before the fair, the big deck oven made a sound like a cough and went cold. " +
        N(5) + "Uncle Farid opened the panel, looked inside, and called the repair company in the city. " +
        N(6) + "Hamid watched his face while he listened. " +
        N(7) + "\"Tuesday,\" Uncle Farid said when he hung up. \"The part comes Tuesday.\"</p>" +
        "<p>" + N(8) + "Hamid looked at the trays of shaped pies waiting on the racks. " +
        N(9) + "There were already two hundred of them, glossy with egg wash, and two hundred more sat in the walk-in cooler. " +
        N(10) + "\"We could cancel,\" he said. " +
        N(11) + "\"People would understand.\" " +
        N(12) + "Uncle Farid did not answer. " +
        N(13) + "He wiped his hands on his apron, slowly, the way he did when he was thinking, and then he picked up the phone again.</p>" +
        "<p>" + N(14) + "An hour later, they were loading the pies into the back of the delivery van. " +
        N(15) + "Uncle Farid had called Mrs. Brennan, who ran the diner across the street, and the diner's oven took forty pies at a time. " +
        N(16) + "He had called the fire chief, whose station kitchen had two ovens that were used mostly for chili night. " +
        N(17) + "He had even called the high school, where the culinary teacher, Mr. Osei, said his students would love to watch professionals at work.</p>" +
        "<p>" + N(18) + "That night Hamid rode between three kitchens with trays balanced on his knees. " +
        N(19) + "At the diner, Mrs. Brennan's oven ran hot, so he learned to pull the pies out two minutes early. " +
        N(20) + "At the firehouse, a volunteer named Gus timed every batch on his wristwatch and announced the minutes like a sports referee. " +
        N(21) + "At the high school, six culinary students crowded around Uncle Farid as he showed them how to crimp an edge, pinching the dough into tight little folds with one thumb. " +
        N(22) + "Nobody slept much. " +
        N(23) + "By three in the morning, every pie was baked.</p>" +
        "<p>" + N(24) + "The next afternoon, the line at the folding table stretched past the bandstand and around the popcorn cart. " +
        N(25) + "Hamid noticed familiar faces in it: Mrs. Brennan, Gus in his fire department cap, and four of the culinary students, who told everyone in line that they had baked these pies themselves. " +
        N(26) + "They had, Hamid realized, at least partly.</p>" +
        "<p>" + N(27) + "When the last pie was sold, Uncle Farid counted the money box and then did something Hamid had never seen him do. " +
        N(28) + "He took out a marker and added a line to the hand-lettered sign on the table: Baked in four kitchens by the whole town of Larkfield. " +
        N(29) + "\"Next year,\" he said, \"we will need a bigger sign.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does \"Four Kitchens\" best develop?",
          choices: [
            { letter: "A", text: "A business should never depend on old equipment." },
            { letter: "B", text: "Young workers often know more than their elders do." },
            { letter: "C", text: "A community's help can turn a setback into a success." },
            { letter: "D", text: "Town fairs matter more to visitors than to locals." }
          ],
          correct: "C"
        },
        {
          id: "problem",
          sol: "10.RL.1.B",
          stem: "What problem drives the plot of \"Four Kitchens\"?",
          choices: [
            { letter: "A", text: "The bakery's oven breaks the day before the fair." },
            { letter: "B", text: "Hamid is not yet allowed to make the pie crust." },
            { letter: "C", text: "The repair company refuses to send any help." },
            { letter: "D", text: "The fair moves the bakery's table away from the bandstand." }
          ],
          correct: "A"
        },
        {
          id: "farid",
          sol: "10.RL.1.C",
          stem: "Sentence 13 characterizes Uncle Farid as someone who —",
          choices: [
            { letter: "A", text: "gives up quickly once a plan fails" },
            { letter: "B", text: "thinks calmly before he takes action" },
            { letter: "C", text: "feels angry that Hamid suggested canceling" },
            { letter: "D", text: "prefers to let others make decisions" }
          ],
          correct: "B"
        },
        {
          id: "referee",
          sol: "10.RL.2.A",
          stem: "In sentence 20, Gus announces the minutes like a sports referee. This comparison suggests that Gus —",
          choices: [
            { letter: "A", text: "is annoyed that the bakers are using his kitchen" },
            { letter: "B", text: "usually works as a referee on weekends" },
            { letter: "C", text: "does not understand how long pies should bake" },
            { letter: "D", text: "treats the timing with energy and seriousness" }
          ],
          correct: "D"
        },
        {
          id: "diner",
          sol: "10.RL.3.A",
          stem: "Sentence 19, about Mrs. Brennan's hot oven, shows that baking in borrowed kitchens forced Hamid to —",
          choices: [
            { letter: "A", text: "adjust his work to unfamiliar equipment" },
            { letter: "B", text: "throw away the pies that had burned" },
            { letter: "C", text: "ask the culinary students to take over" },
            { letter: "D", text: "wait until the repair part arrived" }
          ],
          correct: "A"
        },
        {
          id: "crimp",
          sol: "10.RV.1.B",
          stem: "In sentence 21, the word crimp most nearly means to —",
          choices: [
            { letter: "A", text: "brush with melted butter" },
            { letter: "B", text: "cut into even slices" },
            { letter: "C", text: "press into small folds" },
            { letter: "D", text: "sprinkle with sugar" }
          ],
          correct: "C"
        },
        {
          id: "crowded",
          sol: "10.RV.1.D",
          stem: "In sentence 21, the students crowded around Uncle Farid. Compared with stood near, the word crowded suggests that the students were —",
          choices: [
            { letter: "A", text: "bored and waiting to leave" },
            { letter: "B", text: "nervous about making mistakes" },
            { letter: "C", text: "polite but uninterested" },
            { letter: "D", text: "eager and pressed close together" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          stem: "The tone of Uncle Farid's remark in sentence 29 is best described as —",
          choices: [
            { letter: "A", text: "worried and doubtful" },
            { letter: "B", text: "proud and good-humored" },
            { letter: "C", text: "stern and disappointed" },
            { letter: "D", text: "tired and indifferent" }
          ],
          correct: "B"
        }
      ]
    },

    /* 3 · Literary · high school orchestra · level 3 */
    {
      id: "g10-rl-c75-second-chair",
      family: "G10",
      title: "Second Chair",
      kind: "Literary · 10.RL",
      blurb: "A cellist loses her seat to a newcomer, and then the lights go out during dress rehearsal.",
      level: 3,
      passage:
        "<p>" + N(1) + "The seating list went up on a Monday, and by Monday afternoon Nadia Ferreira had decided not to care about it. " +
        N(2) + "Ezra Lindqvist, a sophomore who had moved from Minnesota in August, would be principal cello for the spring concert; Nadia, who had sat in that first chair for two years, would sit beside him and turn his pages. " +
        N(3) + "She told her friends it was fine. " +
        N(4) + "She told herself it was fine so many times that the word wore thin, like a carpet in a doorway.</p>" +
        "<p>" + N(5) + "Ezra was a better cellist than she was, and she knew it. " +
        N(6) + "His tone was large and warm, and he could play the hard run in the third movement at full tempo without his face changing at all. " +
        N(7) + "What he could not do, she noticed, was lead. " +
        N(8) + "He played as if he were alone in a practice room, eyes on his own music, and the six cellists behind him drifted a hair behind or ahead of him, never quite synchronized. " +
        N(9) + "Ms. Iwasaki stopped the orchestra again and again at the same measure and said, \"Cellos, listen,\" and Ezra nodded every time, and nothing changed.</p>" +
        "<p>" + N(10) + "On Thursday, the night of the dress rehearsal, a thunderstorm rolled over the school, and halfway through the slow movement the lights in the auditorium went out. " +
        N(11) + "The emergency lamps over the exits glowed red, but the stands were dark, and the music on them was only gray shapes. " +
        N(12) + "Somewhere a violin squeaked to a stop. " +
        N(13) + "Ms. Iwasaki's voice came out of the dark, calm as ever: \"Keep going if you know it.\" " +
        N(14) + "Most of the orchestra didn't. " +
        N(15) + "The cellos did, because they had played that movement so many times that it lived in their arms.</p>" +
        "<p>" + N(16) + "But without the music in front of him, Ezra faltered. " +
        N(17) + "Nadia heard him hesitate, half a beat, the way a person pauses at the top of a staircase in the dark. " +
        N(18) + "Without thinking, she lifted her bow high enough that the section could see its pale outline against the red light, breathed in loudly, and came down on the downbeat. " +
        N(19) + "Behind her, six cellos breathed and came down with her. " +
        N(20) + "Ezra found them a measure later, and then they were together, all eight, more together than they had been all month, playing to a room with no light and no audience and nobody to impress.</p>" +
        "<p>" + N(21) + "The lights flickered back on twenty bars later. " +
        N(22) + "Ms. Iwasaki didn't stop them. " +
        N(23) + "She let the movement finish, and when it did, she looked at the cello section for a long moment and said only, \"That. Tomorrow, do that.\"</p>" +
        "<p>" + N(24) + "Afterward, packing up, Ezra asked Nadia how she had known when to come in. " +
        N(25) + "\"I didn't know,\" she said. \"I just breathed where everyone could hear me.\" " +
        N(26) + "He frowned, as if she had told him a secret in a language he was still learning. " +
        N(27) + "\"Can you do that tomorrow?\" he asked. \"From where you sit?\"</p>" +
        "<p>" + N(28) + "On the walk home, the streets were full of torn leaves and the air smelled washed. " +
        N(29) + "Nadia found that she had stopped telling herself the seating list was fine. " +
        N(30) + "It no longer needed saying.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is developed most fully across \"Second Chair\"?",
          choices: [
            { letter: "A", text: "Talent will always earn the respect it deserves." },
            { letter: "B", text: "Losing a competition makes people stronger in the end." },
            { letter: "C", text: "Leading a group depends more on connection than on rank." },
            { letter: "D", text: "Musicians perform best when no audience is watching." }
          ],
          correct: "C"
        },
        {
          id: "climax",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the climax of the cello section's struggle to play together?",
          choices: [
            { letter: "A", text: "Sentence 9, when Ms. Iwasaki says \"Cellos, listen\"" },
            { letter: "B", text: "Sentence 13, when Ms. Iwasaki tells them to keep going" },
            { letter: "C", text: "Sentence 21, when the lights flicker back on" },
            { letter: "D", text: "Sentence 18, when Nadia lifts her bow and breathes" }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "10.RL.1.C",
          stem: "Which statement best describes how Nadia changes between sentence 4 and sentence 30?",
          choices: [
            { letter: "A", text: "She moves from forced acceptance to real peace about her seat." },
            { letter: "B", text: "She moves from jealousy of Ezra to a wish to outplay him." },
            { letter: "C", text: "She moves from confidence in her skill to doubt about it." },
            { letter: "D", text: "She moves from caring about music to caring about friends." }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in sentences 10–12 (the storm, the red exit lamps, the squeaking violin) mainly create a mood of —",
          choices: [
            { letter: "A", text: "quiet boredom" },
            { letter: "B", text: "sudden uncertainty" },
            { letter: "C", text: "cheerful excitement" },
            { letter: "D", text: "bitter regret" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in \"Second Chair\" is most ironic?",
          choices: [
            { letter: "A", text: "The storm arrives on the night of the dress rehearsal." },
            { letter: "B", text: "Ezra moved to the school only a few months earlier." },
            { letter: "C", text: "The cellos know the slow movement better than the violins." },
            { letter: "D", text: "The player who lost first chair is the one who leads the section." }
          ],
          correct: "D"
        },
        {
          id: "setup",
          sol: "10.RL.3.A",
          stem: "The author includes sentences 7–9, about the section drifting in rehearsal, mainly to —",
          choices: [
            { letter: "A", text: "set up the weakness that the blackout exposes and Nadia fixes" },
            { letter: "B", text: "show that Ms. Iwasaki is losing patience with the orchestra" },
            { letter: "C", text: "prove that Ezra is a weaker cellist than Nadia believes" },
            { letter: "D", text: "explain why the spring concert will be canceled" }
          ],
          correct: "A"
        },
        {
          id: "synchronized",
          sol: "10.RV.1.A",
          stem: "The word synchronized in sentence 8 combines syn- (together) with chron (time). Based on these parts, synchronized means —",
          choices: [
            { letter: "A", text: "played loudly and with force" },
            { letter: "B", text: "practiced alone for a long time" },
            { letter: "C", text: "happening at the same moment" },
            { letter: "D", text: "arranged in order of age" }
          ],
          correct: "C"
        },
        {
          id: "faltered",
          sol: "10.RV.1.C",
          stem: "Which detail from the passage best helps the reader understand the meaning of faltered in sentence 16?",
          choices: [
            { letter: "A", text: "\"his tone was large and warm\"" },
            { letter: "B", text: "\"Nadia heard him hesitate, half a beat\"" },
            { letter: "C", text: "\"Ezra nodded every time\"" },
            { letter: "D", text: "\"he could play the hard run\"" }
          ],
          correct: "B"
        }
      ]
    },

    /* 4 · Informational · storm chasing · level 2 */
    {
      id: "g10-ri-c75-chasing-data",
      family: "G10",
      title: "Chasing for Data",
      kind: "Informational · 10.RI",
      blurb: "Why research teams drive toward severe storms, and what their instruments reveal.",
      level: 2,
      passage:
        "<p>" + N(1) + "To most people, the phrase storm chaser calls up an image of a pickup truck racing toward a tornado while someone films through the windshield. " +
        N(2) + "That image is not wrong, but it leaves out the part of storm chasing that matters most to scientists: the data. " +
        N(3) + "Over the past several decades, research teams have learned that one of the best ways to understand a severe storm is to measure it from the ground while it is still forming.</p>" +
        "<p>" + N(4) + "Weather radar can see a great deal from far away. " +
        N(5) + "It can detect rain, hail, and the rotation of winds inside a thunderstorm. " +
        N(6) + "However, a radar beam travels in a straight line while the earth curves away beneath it, so the farther a storm is from the radar, the higher above the ground the beam passes. " +
        N(7) + "At a great enough distance, the beam may pass more than a mile overhead, missing what happens near the surface, which is exactly where a tornado does its damage.</p>" +
        "<p>" + N(8) + "To fill this gap, research teams use vehicles called mobile mesonets. " +
        N(9) + "A mesonet car carries instruments on a rack above its roof, where they measure temperature, humidity, wind, and air pressure every second. " +
        N(10) + "Several cars drive in a loose line across the path of a storm, collecting readings from different parts of it at the same time. " +
        N(11) + "Other teams deploy small, heavy instrument pods directly in a tornado's expected path and then retreat to a safe distance. " +
        N(12) + "\"Radar tells us what the storm looks like from the outside,\" explained Dr. Leona Marsh, a meteorologist who leads field teams. " +
        N(13) + "\"The cars and pods tell us what it feels like from the inside.\"</p>" +
        "<p>" + N(14) + "The readings have already shaped forecasting. " +
        N(15) + "Ground measurements helped researchers notice that tornadoes often form where a storm's cool outflow of air meets warm, moist air flowing in near the ground. " +
        N(16) + "Findings like this one have helped forecasters judge which storms are most dangerous. " +
        N(17) + "Warning times have grown longer in many regions, though scientists caution that the improvement comes from many sources, including better radar and computer models.</p>" +
        "<p>" + N(18) + "Field research is also demanding and dangerous. " +
        N(19) + "Teams may drive more than a thousand miles in a week and see only one storm worth measuring. " +
        N(20) + "Hail can shatter windshields, roads can flood within minutes, and a storm can change direction faster than a car can turn around. " +
        N(21) + "For this reason, research teams follow strict rules: a team leader watches radar continuously, every vehicle keeps an escape route open, and no one approaches a tornado for a photograph. " +
        N(22) + "Marsh puts it bluntly: \"A dramatic video is not data. The data only matters if everyone comes home.\"</p>" +
        "<p>" + N(23) + "Not all chasers are scientists, of course. " +
        N(24) + "Many hobbyists chase for the thrill or the pictures, and some crowd roads in ways that can block emergency vehicles. " +
        N(25) + "Still, trained volunteers called storm spotters play a valuable role by reporting what they see to local weather offices, giving forecasters ground-level confirmation that radar cannot provide. " +
        N(26) + "Whether in a research car or on a spotter's porch, the goal is the same: to turn a frightening event into information that keeps people safe.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Chasing for Data\"?",
          choices: [
            { letter: "A", text: "Hobby chasers create more danger than the storms themselves." },
            { letter: "B", text: "Radar has become the only tool forecasters truly need." },
            { letter: "C", text: "Storm research is too risky to justify what it costs." },
            { letter: "D", text: "Ground teams gather storm data that radar misses and that aids forecasts." }
          ],
          correct: "D"
        },
        {
          id: "radar",
          sol: "10.RI.1.B",
          stem: "Which sentence best explains why radar alone cannot measure conditions near the ground under a distant storm?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "B"
        },
        {
          id: "quote",
          sol: "10.RI.1.C",
          stem: "The author includes Dr. Marsh's words in sentences 12 and 13 mainly to —",
          choices: [
            { letter: "A", text: "sum up how radar and ground tools differ in what they reveal" },
            { letter: "B", text: "show that Marsh disagrees with most other meteorologists" },
            { letter: "C", text: "suggest that radar will soon be replaced by mesonet cars" },
            { letter: "D", text: "describe what it feels like to stand inside a tornado" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "How do sentences 4–7 function in relation to the paragraph that follows them?",
          choices: [
            { letter: "A", text: "They tell a story that the next paragraph finishes." },
            { letter: "B", text: "They list dangers that the next paragraph denies." },
            { letter: "C", text: "They describe a limitation that the next paragraph addresses." },
            { letter: "D", text: "They define terms that the next paragraph never uses." }
          ],
          correct: "C"
        },
        {
          id: "video",
          sol: "10.RI.2.B",
          stem: "Marsh's statement that \"A dramatic video is not data\" in sentence 22 mainly emphasizes that research teams —",
          choices: [
            { letter: "A", text: "are forbidden to carry any cameras while chasing" },
            { letter: "B", text: "value safe measurement over exciting footage" },
            { letter: "C", text: "earn money by selling their storm recordings" },
            { letter: "D", text: "believe hobby chasers should stop posting videos" }
          ],
          correct: "B"
        },
        {
          id: "hobbyists",
          sol: "10.RI.2.C",
          stem: "In sentences 23–25, the author's attitude toward people who chase storms without being scientists is best described as —",
          choices: [
            { letter: "A", text: "openly scornful" },
            { letter: "B", text: "deeply envious" },
            { letter: "C", text: "completely uninterested" },
            { letter: "D", text: "balanced and fair" }
          ],
          correct: "D"
        },
        {
          id: "deploy",
          sol: "10.RV.1.C",
          stem: "In sentence 11, the word deploy most nearly means —",
          choices: [
            { letter: "A", text: "repair quickly" },
            { letter: "B", text: "set out for use" },
            { letter: "C", text: "hide from view" },
            { letter: "D", text: "test for errors" }
          ],
          correct: "B"
        },
        {
          id: "ologist",
          sol: "10.RV.1.A",
          stem: "The word meteorologist in sentence 12 ends with -ologist, as in biologist and geologist. This word part shows that a meteorologist is a person who —",
          choices: [
            { letter: "A", text: "studies a particular subject" },
            { letter: "B", text: "builds scientific tools" },
            { letter: "C", text: "travels to distant places" },
            { letter: "D", text: "reports the daily news" }
          ],
          correct: "A"
        }
      ]
    },

    /* 5 · Informational · community gardens · level 1 */
    {
      id: "g10-ri-c75-whats-in-dirt",
      family: "G10",
      title: "What's in the Dirt?",
      kind: "Informational · 10.RI",
      blurb: "Before a city lot can grow vegetables, gardeners have to find out what is hiding in the soil.",
      level: 1,
      passage:
        "<p>" + N(1) + "When a neighborhood group turns an empty city lot into a community garden, the first job is not planting seeds. " +
        N(2) + "It is finding out what is already in the ground. " +
        N(3) + "City soil can hold surprises left behind by the buildings, roads, and businesses that came before the garden.</p>" +
        "<p>" + N(4) + "One of the most common concerns is lead. " +
        N(5) + "For many years, lead was added to gasoline and house paint. " +
        N(6) + "When old paint flaked off buildings or car exhaust settled near busy streets, tiny particles of lead mixed into the soil, where they can remain for a very long time. " +
        N(7) + "Lead is harmful to people, especially young children, who may swallow soil from dirty hands or breathe in dust. " +
        N(8) + "Other contaminants, such as oil from old gas stations or chemicals from factories, can also make soil unsafe for growing food.</p>" +
        "<p>" + N(9) + "Testing soil is usually simple and inexpensive. " +
        N(10) + "Gardeners collect small scoops of soil from several spots across the lot, mix them in a clean bucket, and mail a sample to a laboratory, often one run by a state university. " +
        N(11) + "Within a few weeks, the lab sends back a report showing the levels of lead and other substances, along with nutrients such as nitrogen that plants need.</p>" +
        "<p>" + N(12) + "If the results show a problem, the garden does not have to be abandoned. " +
        N(13) + "The most common solution is to build raised beds. " +
        N(14) + "Gardeners lay down a barrier of thick landscape fabric, build wooden frames on top of it, and fill the frames with clean soil and compost brought in from elsewhere. " +
        N(15) + "The plants' roots grow in the new soil and never reach the old ground below. " +
        N(16) + "Many gardens also cover walking paths with wood chips or gravel so that bare, untested soil does not blow around as dust.</p>" +
        "<p>" + N(17) + "Gardeners can take a few everyday steps as well. " +
        N(18) + "They can wear gloves, wash their hands after working, and rinse vegetables thoroughly before eating them. " +
        N(19) + "Root vegetables like carrots should be peeled, since they grow in direct contact with the soil. " +
        N(20) + "Leafy greens should be washed carefully, because soil can splash onto their leaves during rain.</p>" +
        "<p>" + N(21) + "At the Hillcrest Avenue Garden, a project started by neighbors on the site of a former auto repair shop, a soil test in the first spring showed lead levels too high for growing food in the ground. " +
        N(22) + "Instead of giving up, the group held a weekend frame-building party, and forty volunteers built twenty-two raised beds in two days. " +
        N(23) + "Three years later, the garden grows tomatoes, peppers, collard greens, and herbs for more than sixty families. " +
        N(24) + "\"The test felt like bad news at first,\" said Rosa Castellanos, one of the founders. " +
        N(25) + "\"Now I think of it as the reason we can trust everything we pick.\"</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "What is the main idea of \"What's in the Dirt?\"",
          choices: [
            { letter: "A", text: "Lead was once a common ingredient in paint and gasoline." },
            { letter: "B", text: "Testing soil and building safely let city gardens grow safe food." },
            { letter: "C", text: "Community gardens should be built only in the countryside." },
            { letter: "D", text: "Raised beds are more attractive than gardens planted in the ground." }
          ],
          correct: "B"
        },
        {
          id: "lead",
          sol: "10.RI.1.B",
          stem: "According to the passage, how did lead get into city soil?",
          choices: [
            { letter: "A", text: "It came from flaking paint and car exhaust." },
            { letter: "B", text: "It washed in from rivers during floods." },
            { letter: "C", text: "It was added to compost by mistake." },
            { letter: "D", text: "It formed naturally from rotting wood." }
          ],
          correct: "A"
        },
        {
          id: "hillcrest",
          sol: "10.RI.1.C",
          stem: "The author includes the example of the Hillcrest Avenue Garden mainly to —",
          choices: [
            { letter: "A", text: "warn readers never to garden on old business sites" },
            { letter: "B", text: "list the vegetables that grow best in raised beds" },
            { letter: "C", text: "explain how laboratories measure lead in soil" },
            { letter: "D", text: "show that a garden with polluted soil can still thrive" }
          ],
          correct: "D"
        },
        {
          id: "organized",
          sol: "10.RI.2.A",
          stem: "How are sentences 12–16 mainly organized?",
          choices: [
            { letter: "A", text: "as a problem followed by a solution" },
            { letter: "B", text: "as a list of events in time order" },
            { letter: "C", text: "as a comparison of two gardens" },
            { letter: "D", text: "as an opinion followed by a counterclaim" }
          ],
          correct: "A"
        },
        {
          id: "opening",
          sol: "10.RI.2.B",
          stem: "The author begins \"What's in the Dirt?\" with sentences 1–3 mainly to —",
          choices: [
            { letter: "A", text: "describe the history of one particular city lot" },
            { letter: "B", text: "argue that empty lots should be left alone" },
            { letter: "C", text: "establish that a garden's first task is checking the soil" },
            { letter: "D", text: "explain which seeds grow best in city soil" }
          ],
          correct: "C"
        },
        {
          id: "contaminants",
          sol: "10.RV.1.B",
          stem: "Based on the examples in sentence 8, the word contaminants most nearly means —",
          choices: [
            { letter: "A", text: "nutrients that help plants grow" },
            { letter: "B", text: "tools used to test the ground" },
            { letter: "C", text: "substances that make something unsafe" },
            { letter: "D", text: "workers who clean up old lots" }
          ],
          correct: "C"
        },
        {
          id: "party",
          sol: "10.RV.1.D",
          stem: "In sentence 22, the volunteers' work weekend is called a frame-building party. Compared with work session, the word party suggests that the effort was —",
          choices: [
            { letter: "A", text: "required and strictly supervised" },
            { letter: "B", text: "cheerful and social" },
            { letter: "C", text: "rushed and careless" },
            { letter: "D", text: "expensive and formal" }
          ],
          correct: "B"
        },
        {
          id: "beds",
          sol: "10.RI.2.C",
          stem: "Which sentence provides the strongest evidence that raised beds keep plants away from polluted ground?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 18" },
            { letter: "C", text: "Sentence 23" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "D"
        }
      ]
    },

    /* 6 · Argument · storm spotters · level 3 */
    {
      id: "g10-ri-c75-weather-desk",
      family: "G10",
      title: "Teach Us the Sky",
      kind: "Argument · 10.RI",
      blurb: "A student argues that her school, in the middle of storm country, should offer storm-spotter training.",
      level: 3,
      passage:
        "<p>" + N(1) + "Last May, a tornado touched down four miles west of Cedar Bluff High School during sixth period. " +
        N(2) + "The sirens sounded, students filed into the interior hallways, and the storm passed north of town without injuring anyone. " +
        N(3) + "Afterward, I asked twenty classmates a simple question: what is the difference between a tornado watch and a tornado warning? " +
        N(4) + "Only six could answer correctly. " +
        N(5) + "We live in one of the most storm-prone counties in the state, and most of us do not understand the alerts that are meant to protect us. " +
        N(6) + "That is why Cedar Bluff should offer a one-semester elective in severe weather science, ending with official storm-spotter training.</p>" +
        "<p>" + N(7) + "The course would not be difficult to build. " +
        N(8) + "The regional weather office already offers free spotter classes to community groups, and a forecaster from that office has told our principal she would gladly teach part of the course. " +
        N(9) + "Our earth science teacher, Mr. Abernathy, studied atmospheric science in college and has volunteered to lead it. " +
        N(10) + "The main cost would be a small rooftop weather station, which a local hardware store has offered to help pay for.</p>" +
        "<p>" + N(11) + "The benefits would reach well beyond the classroom. " +
        N(12) + "Students who understand the difference between a watch and a warning can explain it to younger siblings and to grandparents who may not check their phones. " +
        N(13) + "Trained spotters can report hail, wind damage, and rotating clouds to forecasters, who rely on ground reports to confirm what radar suggests. " +
        N(14) + "In a rural county with few spotters, a handful of trained teenagers could genuinely improve the information forecasters receive.</p>" +
        "<p>" + N(15) + "Some parents worry that a course like this would encourage students to chase storms. " +
        N(16) + "That concern deserves a serious answer, and the answer is in the training itself. " +
        N(17) + "Spotter classes teach people to observe from a safe, fixed location and to take shelter the moment danger approaches; the first lesson is about when not to go outside. " +
        N(18) + "Students who learn how quickly hail can form or a road can flood are less likely, not more likely, to take foolish risks. " +
        N(19) + "Ignorance, not knowledge, is what sends people out to film a funnel cloud from an open field.</p>" +
        "<p>" + N(20) + "Others argue that the schedule is already full. " +
        N(21) + "It is true that adding an elective means some students will give up another one. " +
        N(22) + "But electives exist so that students can explore subjects connected to their lives, and few subjects are more connected to life in Cedar Bluff than the sky. " +
        N(23) + "Every spring, we watch the same dark clouds build in the west. " +
        N(24) + "We should understand them.</p>" +
        "<p>" + N(25) + "The school board will review next year's course list on March 12. " +
        N(26) + "I urge students, parents, and teachers to attend and to support a class that could make our whole community safer. " +
        N(27) + "Sirens can tell us when to take cover, but only knowledge can tell us why.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the central claim of \"Teach Us the Sky\"?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "C"
        },
        {
          id: "build",
          sol: "10.RI.1.B",
          stem: "Which detail most directly supports the claim in sentence 7 that the course would not be difficult to build?",
          choices: [
            { letter: "A", text: "Only six of twenty classmates knew the alerts." },
            { letter: "B", text: "Spotters can report hail and wind damage." },
            { letter: "C", text: "Some students would give up another elective." },
            { letter: "D", text: "A science teacher has volunteered to lead it." }
          ],
          correct: "D"
        },
        {
          id: "survey",
          sol: "10.RI.1.C",
          stem: "The author's informal survey in sentences 3 and 4 strengthens the argument mainly by —",
          choices: [
            { letter: "A", text: "offering firsthand evidence that students misread weather alerts" },
            { letter: "B", text: "proving that every student in the state misunderstands alerts" },
            { letter: "C", text: "showing that the tornado caused serious damage to the school" },
            { letter: "D", text: "suggesting that teachers should have explained the sirens" }
          ],
          correct: "A"
        },
        {
          id: "rebuttal",
          sol: "10.RI.2.A",
          stem: "How are sentences 15–19 organized?",
          choices: [
            { letter: "A", text: "A story is told and then its moral is explained." },
            { letter: "B", text: "A worry is stated, taken seriously, and then answered." },
            { letter: "C", text: "Two programs are compared and one is chosen." },
            { letter: "D", text: "Events are listed in the order they happened." }
          ],
          correct: "B"
        },
        {
          id: "ignorance",
          sol: "10.RI.2.B",
          stem: "In sentence 19, the author contrasts ignorance with knowledge mainly to —",
          choices: [
            { letter: "A", text: "admit that the parents' worry is fully correct" },
            { letter: "B", text: "criticize classmates who film storms for fun" },
            { letter: "C", text: "turn the parents' worry around by blaming the lack of training" },
            { letter: "D", text: "suggest that open fields are safe during storms" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of the closing paragraph of \"Teach Us the Sky\" (sentences 25–27) is best described as —",
          choices: [
            { letter: "A", text: "earnest and persuasive" },
            { letter: "B", text: "bitter and accusing" },
            { letter: "C", text: "playful and joking" },
            { letter: "D", text: "doubtful and hesitant" }
          ],
          correct: "A"
        },
        {
          id: "foolish",
          sol: "10.RV.1.D",
          stem: "In sentence 18, the author calls certain risks foolish rather than daring. Compared with daring, the word foolish presents those risks as —",
          choices: [
            { letter: "A", text: "admirable but rare" },
            { letter: "B", text: "exciting and bold" },
            { letter: "C", text: "required by spotters" },
            { letter: "D", text: "unwise and avoidable" }
          ],
          correct: "D"
        },
        {
          id: "prone",
          sol: "10.RV.1.C",
          stem: "In sentence 5, the phrase storm-prone counties most nearly means counties that —",
          choices: [
            { letter: "A", text: "often experience storms" },
            { letter: "B", text: "rarely see bad weather" },
            { letter: "C", text: "forecast storms poorly" },
            { letter: "D", text: "have strict storm laws" }
          ],
          correct: "A"
        }
      ]
    },

    /* 7 · Functional text · high school orchestra · level 1 */
    {
      id: "g10-ri-c75-festival-trip",
      family: "G10",
      title: "Festival Trip Sheet",
      kind: "Functional text · 10.RI",
      blurb: "Everything an orchestra student and family need to know before the regional festival.",
      level: 1,
      passage:
        "<p><strong>Westbrook High School Orchestra: Regional Festival Trip</strong><br>" + N(1) + "The Westbrook High School Orchestra will perform at the Tri-County Orchestra Festival at Harmon State University on Saturday, April 18. " +
        N(2) + "Please read this sheet carefully with a parent or guardian, sign the form on the back, and return it to Mr. Delgado-Price by Friday, April 3.</p>" +
        "<p><strong>Schedule.</strong> " + N(3) + "Students must arrive in the band room by 6:15 a.m. dressed in concert black. " +
        N(4) + "Buses leave the school at 6:45 a.m. sharp; a bus will not wait for late students, because our warm-up room at the university is reserved for only thirty minutes. " +
        N(5) + "Our performance begins at 10:40 a.m. in Pruitt Concert Hall. " +
        N(6) + "After lunch, students will attend two other schools' performances and the awards ceremony. " +
        N(7) + "Buses return to Westbrook at approximately 5:30 p.m.; students will text their families when the buses leave the university.</p>" +
        "<p><strong>What to Bring.</strong> " + N(8) + "Every student must bring an instrument, a music folder, and a pencil. " +
        N(9) + "Cellists and bassists should label their cases with a name tag, since large cases travel in the luggage compartment under the bus. " +
        N(10) + "Bring a bag lunch or up to $15 for the student union food court. " +
        N(11) + "Do not bring valuables you cannot keep with you at all times; the orchestra is not responsible for lost items.</p>" +
        "<p><strong>Concert Dress.</strong> " + N(12) + "Concert black means a long-sleeved black shirt or blouse, black pants or a black skirt that reaches below the knee, black socks or tights, and closed black shoes. " +
        N(13) + "Students who need help obtaining any part of the outfit should speak privately with Mr. Delgado-Price; the orchestra boosters keep a closet of loaner clothing in every size.</p>" +
        "<p><strong>Conduct.</strong> " + N(14) + "Students represent Westbrook throughout the day, not only on stage. " +
        N(15) + "During other schools' performances, remain seated and silent, and enter or leave the hall only between pieces. " +
        N(16) + "Phones must be silenced and put away in all performance spaces. " +
        N(17) + "Students must stay with an assigned buddy whenever they are outside the hall.</p>" +
        "<p><strong>Ratings.</strong> " + N(18) + "At the festival, three judges score each orchestra on tone, intonation, rhythm, balance, and musicianship. " +
        N(19) + "Orchestras receive a rating from I (Superior) to V (Poor) rather than a ranking against other schools, so every group can earn a Superior. " +
        N(20) + "Judges also record spoken comments, which we will listen to together in class the following week.</p>" +
        "<p><strong>Weather.</strong> " + N(21) + "Spring storms are common in April. " +
        N(22) + "If a severe weather warning is issued for the bus route on the morning of the trip, departure will be delayed rather than canceled, and families will receive a text message by 5:45 a.m. " +
        N(23) + "If the festival itself is canceled, our performance will be rescheduled for the following Saturday.</p>" +
        "<p>" + N(24) + "Questions? Email Mr. Delgado-Price at the orchestra office or call during his planning period, 1:10 to 2:00 p.m.</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The festival trip sheet is written mainly for —",
          choices: [
            { letter: "A", text: "judges who will score the orchestra" },
            { letter: "B", text: "students and families preparing for the trip" },
            { letter: "C", text: "bus drivers planning the route to the university" },
            { letter: "D", text: "other schools performing at the festival" }
          ],
          correct: "B"
        },
        {
          id: "late",
          sol: "10.RI.1.B",
          stem: "According to the sheet, why will the buses not wait for students who arrive late?",
          choices: [
            { letter: "A", text: "The orchestra has the warm-up room for only thirty minutes." },
            { letter: "B", text: "The judges begin scoring as soon as the buses arrive." },
            { letter: "C", text: "The drivers must return to the school by noon." },
            { letter: "D", text: "The awards ceremony starts early in the morning." }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          stem: "The bold headings on the festival trip sheet help a reader mainly by —",
          choices: [
            { letter: "A", text: "showing which rules matter most to the judges" },
            { letter: "B", text: "listing the events in the order they will happen" },
            { letter: "C", text: "making it easy to find information on one topic" },
            { letter: "D", text: "separating rules for students from rules for parents" }
          ],
          correct: "C"
        },
        {
          id: "ratings",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes the Ratings section of the trip sheet?",
          choices: [
            { letter: "A", text: "Only one orchestra can win the top prize each year." },
            { letter: "B", text: "Students will be graded individually by three judges." },
            { letter: "C", text: "The judges' comments are kept secret from the school." },
            { letter: "D", text: "Each orchestra is judged on its own, so all can earn a top rating." }
          ],
          correct: "D"
        },
        {
          id: "loaner",
          sol: "10.RI.2.B",
          stem: "Sentence 13 is included in the trip sheet mainly to —",
          choices: [
            { letter: "A", text: "assure students that clothing costs will not keep them home" },
            { letter: "B", text: "warn students that the dress code will be strictly enforced" },
            { letter: "C", text: "ask families to donate old clothing to the boosters" },
            { letter: "D", text: "explain why concert black is required for festivals" }
          ],
          correct: "A"
        },
        {
          id: "storm",
          sol: "10.RI.2.C",
          stem: "Which statement is best supported by sentences 22 and 23 of the trip sheet together?",
          choices: [
            { letter: "A", text: "Students should stay home if it rains on April 18." },
            { letter: "B", text: "Bad weather may change the timing but is unlikely to erase the performance." },
            { letter: "C", text: "The festival has been canceled because of storms before." },
            { letter: "D", text: "Families will be called at home if the buses leave late." }
          ],
          correct: "B"
        },
        {
          id: "obtaining",
          sol: "10.RV.1.B",
          stem: "In sentence 13, the word obtaining most nearly means —",
          choices: [
            { letter: "A", text: "returning" },
            { letter: "B", text: "describing" },
            { letter: "C", text: "repairing" },
            { letter: "D", text: "getting" }
          ],
          correct: "D"
        },
        {
          id: "approximately",
          sol: "10.RV.1.A",
          stem: "The word approximately in sentence 7 contains the root prox, meaning near, as in proximity. Based on this, approximately most nearly means —",
          choices: [
            { letter: "A", text: "exactly on schedule" },
            { letter: "B", text: "much later than planned" },
            { letter: "C", text: "close to but not exactly" },
            { letter: "D", text: "only in good weather" }
          ],
          correct: "C"
        }
      ]
    },

    /* 8 · Vocabulary · small-town bakery · level 2 */
    {
      id: "g10-rv-c75-the-starter",
      family: "G10",
      title: "The Starter in the Crock",
      kind: "Vocabulary · 10.RV",
      blurb: "A family bakery's sourdough starter has outlived ice storms, a flood, and three generations of bakers.",
      level: 2,
      passage:
        "<p>" + N(1) + "In the walk-in cooler of Kowalczyk's Bakery in the river town of Millbrook, behind the butter and the crates of eggs, sits a stoneware crock that is older than anyone who works there. " +
        N(2) + "Inside is a gray, bubbling paste of flour and water called a starter, and every loaf of rye bread the bakery has sold since 1962 has begun with a spoonful of it.</p>" +
        "<p>" + N(3) + "A sourdough starter is alive. " +
        N(4) + "It contains wild yeast and bacteria that feed on flour, release gas, and make bread rise without any yeast from a packet. " +
        N(5) + "Like any living thing, it must be fed. " +
        N(6) + "Each morning, Agnieszka Kowalczyk, who runs the bakery with her son Tomek, removes half the starter and stirs in fresh flour and water. " +
        N(7) + "She is <strong>meticulous</strong> about it, weighing every gram on a scale, writing the time in a spiral notebook, and checking the temperature of the water twice before she pours.</p>" +
        "<p>" + N(8) + "A healthy starter has a <strong>pungent</strong> smell, sharp and sour enough to make a visitor step back from the crock. " +
        N(9) + "Tomek calls it \"the smell of work being done.\" " +
        N(10) + "When the starter is ready, it doubles in size and its surface is covered with bubbles, like a pond in the rain.</p>" +
        "<p>" + N(11) + "The starter has survived a great deal. " +
        N(12) + "In 1978, a power outage during a February ice storm left the cooler warm for three days, and the family feared the starter had spoiled. " +
        N(13) + "In 1999, the bakery closed for six months while the building was repaired after a flood, and the crock sat in the back of a relative's refrigerator, unfed. " +
        N(14) + "During those months the starter was <strong>dormant</strong>, not dead but resting, its yeast inactive in the cold, waiting. " +
        N(15) + "When the bakery reopened, Agnieszka's mother fed it for a week, and slowly, bubble by bubble, she was able to <strong>revive</strong> it. " +
        N(16) + "\"It is more <strong>resilient</strong> than any of us,\" Agnieszka says. \"It bounces back from things that would finish a person.\"</p>" +
        "<p>" + N(17) + "The original equipment was <strong>rudimentary</strong>: a wood-fired oven, two wooden mixing bowls, and a hand-cranked flour sifter. " +
        N(18) + "Today the bakery has a modern deck oven and an electric mixer, but the starter has not changed. " +
        N(19) + "Neither has the bakery's front room, which on Saturday mornings is crowded and <strong>convivial</strong>, full of neighbors who linger over coffee, trade news about the high school's football team, and argue cheerfully about whether the seeded or unseeded rye is better.</p>" +
        "<p>" + N(20) + "Tomek, who is twenty-four, has begun keeping his own notebook. " +
        N(21) + "He says he plans to run the bakery someday, but first he wants to learn to read the starter the way his mother does, by its smell and the pattern of its bubbles. " +
        N(22) + "\"Flour, water, salt, time,\" he says. \"That is all bread is. The time is the hard part.\"</p>",
      claims: [
        {
          id: "meticulous",
          sol: "10.RV.1.C",
          stem: "Which details from sentence 7 best help the reader understand the meaning of meticulous?",
          choices: [
            { letter: "A", text: "\"weighing every gram\" and \"checking the temperature … twice\"" },
            { letter: "B", text: "\"runs the bakery\" and \"with her son Tomek\"" },
            { letter: "C", text: "\"removes half the starter\" and \"fresh flour\"" },
            { letter: "D", text: "\"a spiral notebook\" and \"before she pours\"" }
          ],
          correct: "A"
        },
        {
          id: "pungent",
          sol: "10.RV.1.B",
          stem: "In sentence 8, the word pungent most nearly means —",
          choices: [
            { letter: "A", text: "faint and sweet" },
            { letter: "B", text: "fresh and clean" },
            { letter: "C", text: "strong and sharp" },
            { letter: "D", text: "stale and dusty" }
          ],
          correct: "C"
        },
        {
          id: "dormant",
          sol: "10.RV.1.C",
          stem: "The phrase not dead but resting in sentence 14 helps the reader understand that dormant means —",
          choices: [
            { letter: "A", text: "spoiled beyond repair" },
            { letter: "B", text: "growing very rapidly" },
            { letter: "C", text: "hidden on purpose" },
            { letter: "D", text: "inactive for a time" }
          ],
          correct: "D"
        },
        {
          id: "resilient",
          sol: "10.RV.1.A",
          stem: "The prefix re- in resilient means back. Together with the clue in sentence 16, this word part suggests that resilient means —",
          choices: [
            { letter: "A", text: "able to recover after hardship" },
            { letter: "B", text: "likely to spoil without care" },
            { letter: "C", text: "older than other starters" },
            { letter: "D", text: "difficult to measure exactly" }
          ],
          correct: "A"
        },
        {
          id: "rudimentary",
          sol: "10.RV.1.A",
          stem: "The word rudimentary in sentence 17 is related to rudiments, the first basic steps of a skill. Based on this relationship, rudimentary equipment is —",
          choices: [
            { letter: "A", text: "costly and rare" },
            { letter: "B", text: "simple and basic" },
            { letter: "C", text: "broken and unsafe" },
            { letter: "D", text: "modern and fast" }
          ],
          correct: "B"
        },
        {
          id: "convivial",
          sol: "10.RV.1.D",
          stem: "The author describes the front room of Kowalczyk's Bakery as convivial rather than noisy. Compared with noisy, convivial suggests that the room is —",
          choices: [
            { letter: "A", text: "tense and crowded" },
            { letter: "B", text: "silent and formal" },
            { letter: "C", text: "empty and dull" },
            { letter: "D", text: "friendly and lively" }
          ],
          correct: "D"
        },
        {
          id: "smell",
          sol: "10.RV.1.D",
          stem: "Tomek calls the starter's sour odor \"the smell of work being done\" in sentence 9. His phrase gives the smell a connotation that is more —",
          choices: [
            { letter: "A", text: "frightening" },
            { letter: "B", text: "approving" },
            { letter: "C", text: "embarrassing" },
            { letter: "D", text: "mysterious" }
          ],
          correct: "B"
        },
        {
          id: "revive",
          sol: "10.RV.1.B",
          stem: "As used in sentence 15, the word revive most nearly means to —",
          choices: [
            { letter: "A", text: "throw away and replace" },
            { letter: "B", text: "freeze for later use" },
            { letter: "C", text: "bring back to an active state" },
            { letter: "D", text: "sell to another bakery" }
          ],
          correct: "C"
        }
      ]
    },

    /* 9 · Vocabulary · storm chasing and weather · level 3 */
    {
      id: "g10-rv-c75-forty-percent",
      family: "G10",
      title: "The Forty Percent Problem",
      kind: "Vocabulary · 10.RV",
      blurb: "What a chance of rain really measures, and why a forecast is not wrong just because it rained.",
      level: 3,
      passage:
        "<p>" + N(1) + "Few parts of a weather forecast cause as much confusion as a single number: the chance of rain. " +
        N(2) + "When a forecaster in the town of Osage Falls announces a forty percent chance of thunderstorms, some listeners hear \"probably not,\" others hear \"probably,\" and a surprising number believe it means that forty percent of the town will get wet. " +
        N(3) + "The real meaning is more precise, and understanding it can change how people plan their days.</p>" +
        "<p>" + N(4) + "A forecast percentage combines two judgments. " +
        N(5) + "The first is how confident the forecaster is that rain will form somewhere in the forecast area. " +
        N(6) + "The second is how much of the area is likely to receive it. " +
        N(7) + "Multiplied together, these produce the number on the screen. " +
        N(8) + "A forecaster who is certain that storms will develop but expects them to cover only forty percent of the county would issue the same forty percent as one who thinks there is a forty percent chance of rain everywhere. " +
        N(9) + "The number is honest, but it is also <strong>ambiguous</strong>, open to more than one reasonable reading, which is why many forecasters now add a sentence explaining what they mean.</p>" +
        "<p>" + N(10) + "Summer storms make the problem especially hard. " +
        N(11) + "On a hot afternoon, the atmosphere can be <strong>volatile</strong>, ready to change explosively with little warning. " +
        N(12) + "Rising columns of warm air may <strong>converge</strong> over one hill and build a towering storm, while a town ten miles away stays dry under a clear sky. " +
        N(13) + "Forecasters <strong>scrutinize</strong> radar, satellite images, and weather balloon readings, studying each detail for hints of where the air will rise first, but even the best computer models cannot pin down the exact neighborhood.</p>" +
        "<p>" + N(14) + "Some storms also behave unexpectedly after they form. " +
        N(15) + "A line of storms that looks <strong>ominous</strong> at noon, dark and threatening on the radar, may <strong>dissipate</strong> within an hour, breaking apart and fading as it moves over cooler ground. " +
        N(16) + "Meanwhile, a smaller cell that no one was watching may strengthen instead. " +
        N(17) + "The forecast cannot promise which will happen; it can only describe the odds.</p>" +
        "<p>" + N(18) + "Carmen Ibarra-Wolfe, who forecasts for a regional television station, says the most common complaint she hears is that the forecast was \"wrong.\" " +
        N(19) + "\"If I say thirty percent and it rains on your picnic, I wasn't wrong,\" she says. \"Thirty percent happens all the time. It happens three times out of ten.\" " +
        N(20) + "She compares a forecast to the odds a coach gives before a game: an underdog sometimes wins, and that does not mean the coach misjudged the teams.</p>" +
        "<p>" + N(21) + "Understanding percentages can help people make better choices. " +
        N(22) + "A forty percent chance might not cancel a baseball game, but it is a good reason to pack a rain jacket and to know where the nearest shelter is. " +
        N(23) + "For outdoor events where lightning is a danger, even a twenty percent chance deserves a backup plan. " +
        N(24) + "The number is not a promise about the future but a careful measurement of uncertainty, and people who learn to read it are rarely caught unprepared.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of \"The Forty Percent Problem\"?",
          choices: [
            { letter: "A", text: "Television forecasters are usually blamed for bad luck." },
            { letter: "B", text: "Summer storms are impossible for anyone to forecast." },
            { letter: "C", text: "A rain percentage measures uncertainty, and reading it well helps people plan." },
            { letter: "D", text: "Computer models will soon predict rain for each neighborhood." }
          ],
          correct: "C"
        },
        {
          id: "coach",
          sol: "10.RI.2.B",
          stem: "The forecaster's comparison to a coach's odds in sentence 20 mainly helps readers understand that —",
          choices: [
            { letter: "A", text: "an unlikely outcome can happen without the forecast being wrong" },
            { letter: "B", text: "forecasters often bet on sports when the weather is calm" },
            { letter: "C", text: "a forecast is only useful for planning outdoor games" },
            { letter: "D", text: "weather is decided by chance and cannot be studied" }
          ],
          correct: "A"
        },
        {
          id: "ambiguous",
          sol: "10.RV.1.C",
          stem: "Which phrase from sentence 9 best helps the reader understand the meaning of ambiguous?",
          choices: [
            { letter: "A", text: "\"The number is honest\"" },
            { letter: "B", text: "\"open to more than one reasonable reading\"" },
            { letter: "C", text: "\"many forecasters now add a sentence\"" },
            { letter: "D", text: "\"explaining what they mean\"" }
          ],
          correct: "B"
        },
        {
          id: "volatile",
          sol: "10.RV.1.B",
          stem: "In sentence 11, the word volatile most nearly means —",
          choices: [
            { letter: "A", text: "likely to change suddenly" },
            { letter: "B", text: "heavy and slow-moving" },
            { letter: "C", text: "cool and comfortable" },
            { letter: "D", text: "easy to measure exactly" }
          ],
          correct: "A"
        },
        {
          id: "converge",
          sol: "10.RV.1.A",
          stem: "The word converge in sentence 12 begins with con-, meaning together, as in connect and convene. Based on this, converge most nearly means to —",
          choices: [
            { letter: "A", text: "fall to the ground" },
            { letter: "B", text: "spread far apart" },
            { letter: "C", text: "cool down quickly" },
            { letter: "D", text: "come together at a point" }
          ],
          correct: "D"
        },
        {
          id: "dissipate",
          sol: "10.RV.1.B",
          stem: "As used in sentence 15, the word dissipate most nearly means to —",
          choices: [
            { letter: "A", text: "grow stronger" },
            { letter: "B", text: "turn around" },
            { letter: "C", text: "break up and fade" },
            { letter: "D", text: "move more quickly" }
          ],
          correct: "C"
        },
        {
          id: "scrutinize",
          sol: "10.RV.1.D",
          stem: "The author could have written look at instead of scrutinize in sentence 13. Compared with look at, scrutinize suggests examining something —",
          choices: [
            { letter: "A", text: "quickly and carelessly" },
            { letter: "B", text: "closely and critically" },
            { letter: "C", text: "angrily and impatiently" },
            { letter: "D", text: "rarely and reluctantly" }
          ],
          correct: "B"
        },
        {
          id: "judgments",
          sol: "10.RI.1.B",
          stem: "According to sentences 4–7, which two judgments combine to produce a forecast's chance of rain?",
          choices: [
            { letter: "A", text: "how hot the day will be and how strong the wind will blow" },
            { letter: "B", text: "how many viewers watch and how often forecasts are wrong" },
            { letter: "C", text: "how dark the clouds look and how fast they are moving" },
            { letter: "D", text: "how sure rain will form and how much of the area it will cover" }
          ],
          correct: "D"
        }
      ]
    },

    /* 10 · Paired texts · community gardens · level 2 */
    {
      id: "g10-dsr-c75-court-garden",
      family: "G10",
      title: "The Court and the Garden",
      kind: "Paired texts · 10.DSR",
      blurb: "A garden committee wants an old tennis court for new plots; a teenager says the court is not as empty as it looks.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From Court to Garden: A Proposal (Maple Hollow Neighborhood Newsletter)</strong></p>" +
        "<p>" + N(1) + "For three years, the Maple Hollow Community Garden has had a waiting list. " +
        N(2) + "This spring, forty-one households asked for a plot, and we had room for only eighteen. " +
        N(3) + "Meanwhile, the old tennis court at the north end of Ridley Park sits cracked and fenced, its nets long gone. " +
        N(4) + "The garden committee proposes turning that court into twenty-four new raised-bed plots. " +
        N(5) + "Because the court is already paved, we would not need to test or dig up the soil; the beds would sit on top of the asphalt, filled with clean soil brought in by truck. " +
        N(6) + "The existing fence would keep out deer, and the water line that once fed a drinking fountain could supply a garden spigot. " +
        N(7) + "A local lumber yard has offered materials at cost, and the parks department has agreed to consider the plan if neighbors support it. " +
        N(8) + "We know that some residents have fond memories of the court. " +
        N(9) + "However, the city stopped maintaining it years ago, and on most days it stands empty. " +
        N(10) + "A garden would bring people back to that corner of the park every day of the growing season, and it would put fresh vegetables on the tables of families who have waited patiently for their turn. " +
        N(11) + "The parks department will hold a public comment meeting on May 6 at the library. " +
        N(12) + "Please come and tell them that Maple Hollow wants more room to grow.</p>" +
        "<p><strong>Text 2 — The Court Isn't Empty (a blog post by Kofi Mensah-Hart, age 16)</strong></p>" +
        "<p>" + N(13) + "I read the garden committee's proposal, and I want to say first that I like gardens. " +
        N(14) + "My grandmother has a plot at Maple Hollow, and I have hauled plenty of compost for her. " +
        N(15) + "But the newsletter says the old tennis court stands empty, and that isn't true. " +
        N(16) + "It's just not empty at the hours when the committee is looking. " +
        N(17) + "After school and on summer evenings, the court is where my friends and I play pickup basketball on a hoop we bolted to the fence ourselves. " +
        N(18) + "Kids skateboard there because the surface is still smooth enough in the middle. " +
        N(19) + "Little kids ride bikes in circles while their parents watch from the bench. " +
        N(20) + "Nobody has to sign up or pay, and nobody waits on a list. " +
        N(21) + "I understand that forty-one families wanted plots, and that matters. " +
        N(22) + "But teenagers in this neighborhood have exactly one paved place to play that isn't a parking lot, and the plan would take it away without anyone asking us. " +
        N(23) + "Maybe the garden could use half the court. " +
        N(24) + "Maybe the city could clear the weedy lot behind the library instead. " +
        N(25) + "I'll be at the May 6 meeting, and I hope other kids come too, because if we don't speak up, everyone will keep believing that the court is empty.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do the garden committee and Kofi agree?",
          choices: [
            { letter: "A", text: "The tennis court should be repaired for tennis." },
            { letter: "B", text: "The community garden is valuable and in demand." },
            { letter: "C", text: "The parks department has ignored the neighborhood." },
            { letter: "D", text: "The lot behind the library is the best garden site." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes the key difference between the newsletter proposal and Kofi's blog post?",
          choices: [
            { letter: "A", text: "Text 1 treats the court as unused, while Text 2 shows it is used informally." },
            { letter: "B", text: "Text 1 opposes new plots, while Text 2 asks for more plots." },
            { letter: "C", text: "Text 1 is written by a teen, while Text 2 is written by a committee." },
            { letter: "D", text: "Text 1 describes the past, while Text 2 predicts the distant future." }
          ],
          correct: "A"
        },
        {
          id: "challenge",
          sol: "10.DSR.E",
          stem: "Which sentence from Text 1 does Kofi most directly challenge in his blog post?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "D"
        },
        {
          id: "hours",
          sol: "10.DSR.E",
          stem: "Kofi's statement in sentence 16 suggests that the committee's view of the court most likely comes from —",
          choices: [
            { letter: "A", text: "city records showing how often the court is reserved" },
            { letter: "B", text: "complaints from neighbors about noise at night" },
            { letter: "C", text: "seeing the court at times when it is not in use" },
            { letter: "D", text: "the lumber yard's report on the court's condition" }
          ],
          correct: "C"
        },
        {
          id: "paved",
          sol: "10.DSR.D",
          stem: "Select TWO sentences, one from each text, that together show both groups value the court's paved surface.",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "records",
          sol: "10.DSR.E",
          stem: "Based on both texts, why might the parks department have trouble judging how much the Ridley Park court is used?",
          choices: [
            { letter: "A", text: "Its users play informally, without sign-ups or records." },
            { letter: "B", text: "The court is locked except during tennis season." },
            { letter: "C", text: "The garden committee refuses to visit the park." },
            { letter: "D", text: "The court is too far from the library to observe." }
          ],
          correct: "A"
        },
        {
          id: "halfcourt",
          sol: "10.DSR.E",
          stem: "How do Kofi's suggestions in sentences 23 and 24 respond to the problem described in sentence 2 of Text 1?",
          choices: [
            { letter: "A", text: "They argue that no new plots are needed at all." },
            { letter: "B", text: "They propose that families share their existing plots." },
            { letter: "C", text: "They offer ways to add garden space without taking the whole court." },
            { letter: "D", text: "They suggest the waiting list be handled by the city." }
          ],
          correct: "C"
        },
        {
          id: "meeting",
          sol: "10.DSR.D",
          stem: "Both the committee and Kofi would most likely agree that —",
          choices: [
            { letter: "A", text: "teenagers should be in charge of the park" },
            { letter: "B", text: "the court should become a parking lot" },
            { letter: "C", text: "the garden's waiting list is exaggerated" },
            { letter: "D", text: "residents should speak at the May 6 meeting" }
          ],
          correct: "D"
        }
      ]
    },

    /* 11 · Paired texts · high school orchestra · level 3 */
    {
      id: "g10-dsr-c75-rotating-chairs",
      family: "G10",
      title: "Rotating Chairs",
      kind: "Paired texts · 10.DSR",
      blurb: "A director explains why every player will rotate seats; a violist looks back on what rotation cost and taught her.",
      level: 3,
      passage:
        "<p><strong>Text 1 — A Letter to the Orchestra (Dr. Salma Haddad, Director, Ridgeline High School Orchestra)</strong></p>" +
        "<p>" + N(1) + "Dear musicians, beginning this fall, our orchestra will no longer hold seating auditions that decide chairs for the whole year. " +
        N(2) + "Instead, players in each section will rotate chairs every concert cycle, so that every violinist, violist, cellist, and bassist will spend time in the front, the middle, and the back of the section. " +
        N(3) + "I want to explain why. " +
        N(4) + "In a fixed system, the strongest auditioners sit in front all year, while the players in back learn to follow and rarely learn to lead. " +
        N(5) + "Yet in a fine orchestra, every player must be able to hear the whole section, adjust to it, and take responsibility for its sound. " +
        N(6) + "Players who sit only in the back often stop listening carefully, because they assume someone ahead of them is in charge. " +
        N(7) + "Rotation also eases a kind of pressure I have watched hurt students for years: a single audition in September deciding how a musician is seen for the next nine months. " +
        N(8) + "I know this change will feel strange, especially to those who earned front chairs last year. " +
        N(9) + "Principal players will still be named for solos, and I will still give private feedback on every audition recording. " +
        N(10) + "But I am asking all of you to trust that a section where everyone can lead is stronger than one where only a few do. " +
        N(11) + "Let's find out together.</p>" +
        "<p><strong>Text 2 — Back Row, Front Row (a reflection by Jae-won Seo, viola, in the spring literary magazine)</strong></p>" +
        "<p>" + N(12) + "When Dr. Haddad announced rotation, I was furious. " +
        N(13) + "I had practiced all summer to win the principal viola chair, and I won it, and then it was gone after one concert. " +
        N(14) + "For the winter concert I sat in the last stand, behind a freshman who still counted rests on her fingers. " +
        N(15) + "At first, I treated the back row like a waiting room. " +
        N(16) + "But something unexpected happened there. " +
        N(17) + "In the front, I had always listened mainly to myself and to the conductor. " +
        N(18) + "In the back, I could hear the whole section in front of me, every late entrance and every slightly flat note, and I realized how much the front chair depends on the players nobody watches. " +
        N(19) + "I started giving the freshman visible breathing cues, and by February she had stopped counting on her fingers. " +
        N(20) + "I still don't love everything about rotation. " +
        N(21) + "Our sound was less polished at the fall concert than it had been the year before, and a judge at the regional festival wrote that our violas \"lacked a clear leader.\" " +
        N(22) + "Still, when I finally rotated back to the front this spring, I played differently. " +
        N(23) + "I knew what the back of the section was hearing, and I played for them.</p>",
      claims: [
        {
          id: "central",
          sol: "10.DSR.D",
          stem: "Which idea is central to both Dr. Haddad's letter and Jae-won's reflection?",
          choices: [
            { letter: "A", text: "Audition results are the fairest way to seat players." },
            { letter: "B", text: "Festival judges care most about a section's leader." },
            { letter: "C", text: "Players anywhere in a section shape its sound and can lead." },
            { letter: "D", text: "Freshmen should always sit in the back of a section." }
          ],
          correct: "C"
        },
        {
          id: "confirm",
          sol: "10.DSR.E",
          stem: "Jae-won's account in sentences 18 and 19 most directly supports which claim from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 5: every player must hear the whole section and take responsibility for it." },
            { letter: "B", text: "Sentence 1: auditions will no longer decide chairs for the whole year." },
            { letter: "C", text: "Sentence 7: one September audition can shape how a player is seen all year." },
            { letter: "D", text: "Sentence 9: principal players will still be named for solos." }
          ],
          correct: "A"
        },
        {
          id: "cost",
          sol: "10.DSR.E",
          stem: "Which sentence from Text 2 presents a cost of rotation that Dr. Haddad's letter does not address?",
          choices: [
            { letter: "A", text: "Sentence 14" },
            { letter: "B", text: "Sentence 21" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "B"
        },
        {
          id: "lead",
          sol: "10.DSR.D",
          stem: "Select TWO sentences, one from each text, that together best show that rotation is meant to help players lead from any chair.",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 19" },
            { letter: "C", text: "Sentence 21" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "tone",
          sol: "10.DSR.E",
          stem: "Compared with Dr. Haddad's letter, Jae-won's reflection is more —",
          choices: [
            { letter: "A", text: "formal and instructional" },
            { letter: "B", text: "cheerful and certain" },
            { letter: "C", text: "angry and dismissive" },
            { letter: "D", text: "personal and mixed in judgment" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "10.DSR.D",
          stem: "The two texts about rotating chairs differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "predicts benefits, while Text 2 reports how rotation actually worked" },
            { letter: "B", text: "criticizes auditions, while Text 2 praises them without reservation" },
            { letter: "C", text: "addresses parents, while Text 2 addresses festival judges" },
            { letter: "D", text: "describes the violas, while Text 2 describes the whole orchestra" }
          ],
          correct: "A"
        },
        {
          id: "anticipate",
          sol: "10.DSR.E",
          stem: "Which sentence from Text 1 best anticipates Jae-won's reaction in sentences 12 and 13?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "D"
        },
        {
          id: "accept",
          sol: "10.DSR.D",
          stem: "Which statement would Dr. Haddad and Jae-won both most likely accept?",
          choices: [
            { letter: "A", text: "Rotation guarantees a more polished sound right away." },
            { letter: "B", text: "Fixed seating is better for students who practice hard." },
            { letter: "C", text: "Rotation asks players to listen beyond their own part." },
            { letter: "D", text: "Judges should not comment on a section's leadership." }
          ],
          correct: "C"
        }
      ]
    },

    /* 12 · Poetry · storm chasing · level 1 */
    {
      id: "g10-rl-c75-supercell",
      family: "G10",
      title: "Supercell, Late June",
      kind: "Poetry · 10.RL",
      blurb: "A teenager rides along with an aunt who chases storms and learns what chasing really means.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My aunt pulls the truck onto the gravel shoulder<br>" +
        L(2) + "and kills the engine, and the wheat goes quiet.<br>" +
        L(3) + "West of us, the sky is building something:<br>" +
        L(4) + "a tower of cloud, white on top, bruised below,<br>" +
        L(5) + "turning slowly, like a spoon stirring honey.<br>" +
        L(6) + "She hands me the clipboard. \"Write the time.\"<br>" +
        L(7) + "I write 5:14, and the wind writes back,<br>" +
        L(8) + "pushing the wheat flat in long silver waves<br>" +
        L(9) + "that run toward us like a crowd at a gate.<br>" +
        L(10) + "The air smells of pennies and wet dust.<br>" +
        L(11) + "A cow in the next field lies down.<br>" +
        L(12) + "My aunt is not afraid, or does not show it.<br>" +
        L(13) + "She reads the radar on her phone the way<br>" +
        L(14) + "my grandmother reads a recipe, nodding,<br>" +
        L(15) + "knowing which steps can be skipped and which cannot.<br>" +
        L(16) + "\"It's moving northeast,\" she says. \"We stay here.\"<br>" +
        L(17) + "So we stay, and watch the storm walk past us<br>" +
        L(18) + "three miles off, dragging a gray curtain of rain,<br>" +
        L(19) + "its lightning stitching the cloud to the ground.<br>" +
        L(20) + "I had thought chasing meant running toward.<br>" +
        L(21) + "It means waiting, mostly. It means knowing where<br>" +
        L(22) + "the storm will be and choosing not to be there.<br>" +
        L(23) + "At 5:52 the sun breaks out behind the tower,<br>" +
        L(24) + "and the whole wet field lights up like a window.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of \"Supercell, Late June\"?",
          choices: [
            { letter: "A", text: "Respecting danger means knowing when to keep a safe distance." },
            { letter: "B", text: "Young people should never take part in risky hobbies." },
            { letter: "C", text: "Storms are beautiful only when they cause no damage." },
            { letter: "D", text: "Family members rarely share the same interests." }
          ],
          correct: "A"
        },
        {
          id: "honey",
          sol: "10.RL.2.A",
          stem: "In line 5, the cloud turning like a spoon stirring honey suggests that its rotation is —",
          choices: [
            { letter: "A", text: "quick and jerky" },
            { letter: "B", text: "sweet and harmless" },
            { letter: "C", text: "slow and heavy" },
            { letter: "D", text: "loud and sudden" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in lines 10 and 11 (the smell of pennies, the cow lying down) mainly create a mood of —",
          choices: [
            { letter: "A", text: "playful silliness" },
            { letter: "B", text: "uneasy expectation" },
            { letter: "C", text: "lonely sadness" },
            { letter: "D", text: "angry frustration" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.2.C",
          stem: "The tone of the last two lines of the storm poem (lines 23–24) is best described as —",
          choices: [
            { letter: "A", text: "tense and fearful" },
            { letter: "B", text: "bored and restless" },
            { letter: "C", text: "bitter and regretful" },
            { letter: "D", text: "calm and full of wonder" }
          ],
          correct: "D"
        },
        {
          id: "lesson",
          sol: "10.RL.3.A",
          stem: "How do lines 20–22 function in \"Supercell, Late June\"?",
          choices: [
            { letter: "A", text: "They describe the storm's path across the field." },
            { letter: "B", text: "They state what the speaker has learned about chasing." },
            { letter: "C", text: "They introduce a new character into the poem." },
            { letter: "D", text: "They explain why the aunt is secretly afraid." }
          ],
          correct: "B"
        },
        {
          id: "aunt",
          sol: "10.RL.1.C",
          stem: "Lines 12–16 characterize the speaker's aunt as —",
          choices: [
            { letter: "A", text: "careless and eager for danger" },
            { letter: "B", text: "nervous and unsure of herself" },
            { letter: "C", text: "bored by the storm in front of her" },
            { letter: "D", text: "experienced and steady" }
          ],
          correct: "D"
        },
        {
          id: "kills",
          sol: "10.RV.1.C",
          stem: "In line 2, the phrase kills the engine most nearly means —",
          choices: [
            { letter: "A", text: "turns the engine off" },
            { letter: "B", text: "damages the engine" },
            { letter: "C", text: "races the engine loudly" },
            { letter: "D", text: "repairs the engine" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "10.RL.1.B",
          stem: "Which line marks the moment when the speaker's idea of storm chasing changes?",
          choices: [
            { letter: "A", text: "Line 6" },
            { letter: "B", text: "Line 12" },
            { letter: "C", text: "Line 20" },
            { letter: "D", text: "Line 23" }
          ],
          correct: "C"
        }
      ]
    },

    /* 13 · Drama · small-town bakery · level 2 */
    {
      id: "g10-rl-c75-four-am",
      family: "G10",
      title: "Four A.M.",
      kind: "Drama · 10.RL",
      blurb: "Before the morning rush, a grandmother reveals an offer to buy the family bakery.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "Four in the morning. The back kitchen of the Ferraro Family Bakery in Pine Hollow. Flour dusts every surface, and a radio murmurs the farm report. NONNA BEA, seventy-four, shapes rolls at a long steel table. DANI, seventeen, feeds dough through a rolling machine. MARCO, fourteen, yawns enormously by the ovens.</em></p>" +
        "<p><strong>MARCO:</strong> " + N(2) + "Remind me why we can't make bread at a normal hour, like noon.</p>" +
        "<p><strong>DANI:</strong> " + N(3) + "Because people want it at seven, genius. " + N(4) + "<em>(She tosses him an apron.)</em> Same reason as yesterday.</p>" +
        "<p><strong>NONNA BEA:</strong> <em>(not looking up)</em> " + N(5) + "Same reason as fifty years ago.</p>" +
        "<p><em>" + N(6) + "A pause. NONNA BEA sets down a roll, wipes her hands, and takes a folded envelope from her apron pocket.</em></p>" +
        "<p><strong>NONNA BEA:</strong> " + N(7) + "I was going to wait until after the rush. " + N(8) + "But I am bad at waiting. " +
        N(9) + "A company from the city wants to buy the building. " + N(10) + "They sell coffee and muffins wrapped in plastic. " + N(11) + "They have made a good offer.</p>" +
        "<p><strong>DANI:</strong> <em>(stopping the machine)</em> " + N(12) + "You said no.</p>" +
        "<p><strong>NONNA BEA:</strong> " + N(13) + "I said I would think.</p>" +
        "<p><strong>DANI:</strong> " + N(14) + "Nonna, the whole town comes here. " + N(15) + "Mr. Pruitt has eaten the same cinnamon twist every morning since before I was born. " +
        N(16) + "You can't sell that to people who microwave muffins.</p>" +
        "<p><strong>MARCO:</strong> <em>(quietly)</em> " + N(17) + "Her hands hurt, Dani.</p>" +
        "<p><em>" + N(18) + "DANI turns. NONNA BEA has tucked her right hand into her apron.</em></p>" +
        "<p><strong>MARCO:</strong> " + N(19) + "She soaks them in hot water every night. " + N(20) + "I hear the kettle at ten o'clock. " + N(21) + "Every night.</p>" +
        "<p><strong>NONNA BEA:</strong> " + N(22) + "Marco. " + N(23) + "That is my business.</p>" +
        "<p><strong>MARCO:</strong> " + N(24) + "It's the family's business. " + N(25) + "That's literally what the sign says.</p>" +
        "<p><em>" + N(26) + "A beat. Despite herself, NONNA BEA laughs, a short, surprised sound.</em></p>" +
        "<p><strong>DANI:</strong> <em>(slowly)</em> " + N(27) + "Then let me do more. " + N(28) + "I can shape. " +
        N(29) + "You taught me the twists last summer, and Mr. Pruitt didn't even notice. " +
        N(30) + "Marco can run the ovens if somebody sets an alarm loud enough.</p>" +
        "<p><strong>MARCO:</strong> " + N(31) + "Hey. " + N(32) + "<em>(Then, considering.)</em> Okay, that's fair.</p>" +
        "<p><strong>NONNA BEA:</strong> " + N(33) + "You have school. " + N(34) + "You have college in a year.</p>" +
        "<p><strong>DANI:</strong> " + N(35) + "And you have fifty years in these walls. " + N(36) + "I'm not asking you to say no today. " +
        N(37) + "I'm asking you not to say yes before we try.</p>" +
        "<p><em>" + N(38) + "NONNA BEA looks at the envelope for a long moment. Then she slides it under the flour bin, out of sight, and pushes the tray of unshaped dough toward DANI.</em></p>" +
        "<p><strong>NONNA BEA:</strong> " + N(39) + "Twelve twists. " + N(40) + "Tight ends, or Mr. Pruitt will notice this time.</p>" +
        "<p><em>" + N(41) + "DANI begins to shape. MARCO opens the oven door, and light and heat pour into the dark kitchen. On the radio, the forecast calls for clear skies by sunrise.</em></p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best supported by the scene in \"Four A.M.\"?",
          choices: [
            { letter: "A", text: "Selling a business is always a betrayal of the past." },
            { letter: "B", text: "Older people should retire as soon as work gets hard." },
            { letter: "C", text: "Keeping a family tradition alive means sharing its burdens." },
            { letter: "D", text: "Teenagers care more about money than about tradition." }
          ],
          correct: "C"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict of \"Four A.M.\" is best described as a struggle between —",
          choices: [
            { letter: "A", text: "keeping the bakery and protecting Nonna Bea's health" },
            { letter: "B", text: "Dani's plans for college and Marco's plans for school" },
            { letter: "C", text: "Mr. Pruitt's habits and the bakery's new recipes" },
            { letter: "D", text: "the radio forecast and the morning delivery schedule" }
          ],
          correct: "A"
        },
        {
          id: "marco",
          sol: "10.RL.1.C",
          stem: "Marco's lines in sentences 17–21 reveal that he —",
          choices: [
            { letter: "A", text: "wants the bakery sold so he can sleep later" },
            { letter: "B", text: "has quietly noticed Nonna Bea's pain and worries" },
            { letter: "C", text: "is trying to embarrass his sister in front of Nonna" },
            { letter: "D", text: "does not understand why the offer matters" }
          ],
          correct: "B"
        },
        {
          id: "walls",
          sol: "10.RL.2.A",
          stem: "In sentence 35, Dani says Nonna Bea has fifty years in these walls. This figurative statement suggests that —",
          choices: [
            { letter: "A", text: "the building is too old and needs repair" },
            { letter: "B", text: "Nonna Bea has saved money inside the bakery" },
            { letter: "C", text: "the walls were built by Nonna Bea herself" },
            { letter: "D", text: "Nonna Bea's life and memories are part of the bakery" }
          ],
          correct: "D"
        },
        {
          id: "light",
          sol: "10.RL.2.B",
          stem: "The stage directions in sentence 41 (the oven light filling the kitchen, the forecast of clear skies) mainly create a mood of —",
          choices: [
            { letter: "A", text: "hope" },
            { letter: "B", text: "dread" },
            { letter: "C", text: "boredom" },
            { letter: "D", text: "anger" }
          ],
          correct: "A"
        },
        {
          id: "business",
          sol: "10.RL.2.C",
          stem: "Marco's reply in sentences 24 and 25 is humorous mainly because it —",
          choices: [
            { letter: "A", text: "mocks the way Nonna Bea speaks English" },
            { letter: "B", text: "reveals that the sign outside is misspelled" },
            { letter: "C", text: "plays on two meanings of the word business" },
            { letter: "D", text: "exaggerates how early the family wakes up" }
          ],
          correct: "C"
        },
        {
          id: "envelope",
          sol: "10.RL.3.A",
          stem: "The stage direction in sentence 38, in which Nonna Bea slides the envelope under the flour bin, mainly shows that she —",
          choices: [
            { letter: "A", text: "has secretly accepted the company's offer" },
            { letter: "B", text: "sets the offer aside for now without rejecting it" },
            { letter: "C", text: "wants to hide the offer from Mr. Pruitt" },
            { letter: "D", text: "is angry that her grandchildren interfered" }
          ],
          correct: "B"
        },
        {
          id: "plastic",
          sol: "10.RV.1.D",
          stem: "In sentence 10, Nonna Bea describes the company's muffins as wrapped in plastic. In this context, the phrase carries a connotation of something —",
          choices: [
            { letter: "A", text: "cheap and impersonal" },
            { letter: "B", text: "fresh and healthy" },
            { letter: "C", text: "rare and expensive" },
            { letter: "D", text: "homemade and careful" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
