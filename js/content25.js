/* SOL Labyrinth — New Jersey grade 5 LONG and EPIC packs (NJSLA-ELA, family NJ5).
 * Fourteen original texts for the late nights of the game: six stories, one long poem,
 * five informational articles and two paired-text sets, each with two
 * Evidence-Based Selected Response pairs and questions that reach across the whole text.
 * Original text only; no real people. Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1. Realistic fiction · LONG · level 2 ───────────── */
    {
      id: "nj5-l-announcements",
      family: "NJ5",
      title: "Good Morning, Cedar Hill",
      kind: "Literature · RL.5",
      blurb: "The new kid volunteers to read the morning announcements for a week.",
      level: 2,
      passage:
        "<p>" + N(1) + "Tomas had been at Cedar Hill Elementary for exactly nine days when the morning announcements went silent. " +
        N(2) + "Every day at 8:15, a voice came through the speaker above the whiteboard, read the lunch menu, and wished everyone a \"bright and useful day.\" " +
        N(3) + "The voice belonged to a sixth grader named Amara, and she had a cold so bad that she could barely whisper. " +
        N(4) + "\"We need a reader,\" Ms. Delgado told Tomas's class. " +
        N(5) + "\"Just for the week.\" " +
        N(6) + "Nobody raised a hand. " +
        N(7) + "Then, without quite meaning to, Tomas did.</p>" +
        "<p>" + N(8) + "He regretted it before his arm was all the way up. " +
        N(9) + "At his old school, Tomas had been the kid who talked fast and mumbled, the one teachers asked to \"say that again, please.\" " +
        N(10) + "But he also knew what it felt like to be new and invisible, and he had a feeling that a voice on the speaker was not invisible at all. " +
        N(11) + "Ms. Delgado handed him a blue folder. " +
        N(12) + "\"Office, 8:10 tomorrow,\" she said. " +
        N(13) + "\"Read slowly. " +
        N(14) + "The building is bigger than you think.\"</p>" +
        "<p>" + N(15) + "That night, Tomas practiced in the bathroom mirror. " +
        N(16) + "The lunch menu was easy: chicken tacos, green beans, a pear. " +
        N(17) + "The birthdays were harder because there were seven of them, and one last name had four syllables. " +
        N(18) + "He said it wrong, then wrong again, then finally right. " +
        N(19) + "His little sister banged on the door and asked if he was giving a speech to the toilet.</p>" +
        "<p>" + N(20) + "In the morning, the office smelled like coffee and copier paper. " +
        N(21) + "The secretary, Mr. Bell, pointed to a microphone on a metal stand and pushed a button that made a red light glow. " +
        N(22) + "Tomas leaned in too close, and the first word came out as a boom that made a first grader in the hallway jump. " +
        N(23) + "He backed up. " +
        N(24) + "He read the menu. " +
        N(25) + "He read the birthdays, all seven, and got the four-syllable name right on the first try. " +
        N(26) + "When he reached the end, he paused, and then he said, \"Have a bright and useful day,\" just the way Amara always did, because it seemed wrong to change it.</p>" +
        "<p>" + N(27) + "Walking back to class, Tomas expected nothing. " +
        N(28) + "Instead, a boy he had never met held up a hand for a high five. " +
        N(29) + "A teacher he did not know said, \"Nice work, announcement guy.\" " +
        N(30) + "In Room 14, his classmates clapped, and a girl named Priyanka said his voice sounded \"like a real radio person, but nicer.\"</p>" +
        "<p>" + N(31) + "Amara came back the next Monday, her cold gone. " +
        N(32) + "Tomas handed her the blue folder in the hallway. " +
        N(33) + "\"You kept the ending,\" she said. " +
        N(34) + "\"I heard you from the nurse's office.\" " +
        N(35) + "\"It's your ending,\" Tomas said. " +
        N(36) + "Amara thought for a moment. " +
        N(37) + "\"Fridays,\" she said. " +
        N(38) + "\"You take Fridays.\" " +
        N(39) + "Tomas was still the new kid at Cedar Hill, but he was no longer invisible, and he had a Friday.</p>",
      claims: [
        {
          id: "why",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "why-b",
          stem: "Why does Tomas raise his hand to read the announcements?",
          choices: [
            { letter: "A", text: "He wants to prove that he reads better than Amara." },
            { letter: "B", text: "He thinks the job will help him stop feeling invisible." },
            { letter: "C", text: "Ms. Delgado asks him directly because he is new." },
            { letter: "D", text: "His classmates dare him to do it for the week." }
          ],
          correct: "B"
        },
        {
          id: "why-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the answer to Part A about why Tomas volunteers?",
          choices: [
            { letter: "A", text: "Sentence 2: Every day at 8:15, a voice came through the speaker above the whiteboard, read the lunch menu, and wished everyone a \"bright and useful day.\"" },
            { letter: "B", text: "Sentence 9: At his old school, Tomas had been the kid who talked fast and mumbled, the one teachers asked to \"say that again, please.\"" },
            { letter: "C", text: "Sentence 10: But he also knew what it felt like to be new and invisible, and he had a feeling that a voice on the speaker was not invisible at all." },
            { letter: "D", text: "Sentence 30: In Room 14, his classmates clapped, and a girl named Priyanka said his voice sounded \"like a real radio person, but nicer.\"" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "theme-b",
          stem: "Which statement best expresses a theme of \"Good Morning, Cedar Hill\"?",
          choices: [
            { letter: "A", text: "Taking a small risk can change how others see you." },
            { letter: "B", text: "Reading aloud is a skill that anyone can master quickly." },
            { letter: "C", text: "New students should wait before joining school activities." },
            { letter: "D", text: "The best way to make friends is to make people laugh." }
          ],
          correct: "A"
        },
        {
          id: "theme-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence from the story best supports the theme in Part A?",
          choices: [
            { letter: "A", text: "Sentence 15: That night, Tomas practiced in the bathroom mirror." },
            { letter: "B", text: "Sentence 19: His little sister banged on the door and asked if he was giving a speech to the toilet." },
            { letter: "C", text: "Sentence 31: Amara came back the next Monday, her cold gone." },
            { letter: "D", text: "Sentence 39: Tomas was still the new kid at Cedar Hill, but he was no longer invisible, and he had a Friday." }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 8, the word regretted most nearly means —",
          choices: [
            { letter: "A", text: "forgot about" },
            { letter: "B", text: "felt sorry about" },
            { letter: "C", text: "bragged about" },
            { letter: "D", text: "argued about" }
          ],
          correct: "B"
        },
        {
          id: "practice",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "The author includes the third paragraph (sentences 15–19) mainly to —",
          choices: [
            { letter: "A", text: "show that Tomas prepares carefully for the job" },
            { letter: "B", text: "explain why Tomas's sister thinks he is strange" },
            { letter: "C", text: "describe what the school serves for lunch" },
            { letter: "D", text: "prove that the birthdays are impossible to read" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "RL.IT.5.3",
          strand: "RL",
          stem: "Why does Tomas end the announcements with Amara's usual words?",
          choices: [
            { letter: "A", text: "Ms. Delgado tells him he must read the folder exactly." },
            { letter: "B", text: "He cannot think of anything else to say into the microphone." },
            { letter: "C", text: "He feels the ending belongs to Amara and should not be changed." },
            { letter: "D", text: "He wants Amara to hear him from the nurse's office." }
          ],
          correct: "C"
        },
        {
          id: "frame",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "How does the last paragraph (sentences 31–39) connect to the first paragraph (sentences 1–7)?",
          choices: [
            { letter: "A", text: "It explains why Amara caught a cold in the first place." },
            { letter: "B", text: "It shows that being new no longer means being unnoticed." },
            { letter: "C", text: "It repeats the lunch menu from the first announcement." },
            { letter: "D", text: "It introduces a new problem for Tomas to solve on Friday." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 2. Folktale-style · LONG · level 2 ───────────── */
    {
      id: "nj5-l-baker-stars",
      family: "NJ5",
      title: "The Baker Who Counted Stars",
      kind: "Literature · RL.5",
      blurb: "A governor demands a loaf as big as a mill wheel; a baker has a smaller idea.",
      level: 2,
      passage:
        "<p>" + N(1) + "Long ago, in a mountain village called Perrin, there lived a baker named Odalys who counted stars. " +
        N(2) + "Every night after the ovens cooled, she climbed to her roof and counted stars until she fell asleep, and every morning she baked one roll for each star. " +
        N(3) + "Some mornings that was forty. " +
        N(4) + "Some mornings it was two hundred. " +
        N(5) + "Nobody knew how many there would be, but there was always enough, and Odalys gave the rolls to anyone who was hungry.</p>" +
        "<p>" + N(6) + "One autumn, a new governor came to Perrin. " +
        N(7) + "His name was Bram Vantor, and he loved large things. " +
        N(8) + "He had a large horse, a large hat, and a voice that rattled the shutters. " +
        N(9) + "\"A village this small needs something grand,\" he announced. " +
        N(10) + "\"For the harvest festival, I want a single loaf as big as the mill wheel. " +
        N(11) + "Whoever bakes it will be paid in gold. " +
        N(12) + "Whoever fails will bake for nothing all winter.\"</p>" +
        "<p>" + N(13) + "The other bakers groaned. " +
        N(14) + "A loaf that size would use every sack of flour in the village, and the mountain pass would close with the first snow. " +
        N(15) + "If the flour went into one loaf, there would be no bread until spring. " +
        N(16) + "Odalys said nothing. " +
        N(17) + "That night she climbed to her roof and counted and thought.</p>" +
        "<p>" + N(18) + "In the morning, she went to the governor. " +
        N(19) + "\"I will bake your loaf,\" she said, \"but I will need every oven in Perrin, and every pair of hands.\" " +
        N(20) + "Governor Vantor agreed at once, delighted. " +
        N(21) + "Odalys sent word: bring your flour and your bowls to the square at dawn on festival day.</p>" +
        "<p>" + N(22) + "On festival day, the square was crowded before sunrise. " +
        N(23) + "Odalys did not mix one enormous batch of dough. " +
        N(24) + "Instead, she showed each family how to shape a small round roll the size of a fist and press it against its neighbor on the wooden boards. " +
        N(25) + "Hundreds of rolls were baked, oven by oven, and carried to the square. " +
        N(26) + "There, Odalys fitted them together, edge to edge, into one circle as wide as the mill wheel. " +
        N(27) + "From the governor's balcony, it looked like a single golden loaf. " +
        N(28) + "Up close, it was a thousand small ones, each stamped with a family's name.</p>" +
        "<p>" + N(29) + "Governor Vantor came down to cut it. " +
        N(30) + "He raised his knife and stopped. " +
        N(31) + "\"This is not one loaf,\" he said. " +
        N(32) + "\"It is one loaf,\" said Odalys, \"made the way a village is made. " +
        N(33) + "Cut a piece, and you can carry it home. " +
        N(34) + "Try to carry the whole thing, and it will break. " +
        N(35) + "And when the snow closes the pass, every family will have flour left, because no one baked more than a fistful.\"</p>" +
        "<p>" + N(36) + "The governor looked at the rolls, the families, and the mountains, where clouds were gathering. " +
        N(37) + "He was a man who loved large things, but he was not a fool. " +
        N(38) + "He laughed until his hat fell off. " +
        N(39) + "Then he cut a piece the size of his fist and paid Odalys in gold, and the village ate all winter on bread and stories. " +
        N(40) + "It is said that in Perrin, no one ever again asked for a loaf bigger than a fist, and that Odalys counted stars until she was old.</p>",
      claims: [
        {
          id: "theme",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "theme-b",
          stem: "Which statement best expresses a theme of the tale?",
          choices: [
            { letter: "A", text: "A leader should never change his mind in public." },
            { letter: "B", text: "Many small things shared can do what one big thing cannot." },
            { letter: "C", text: "Counting stars is the best way to fall asleep." },
            { letter: "D", text: "Gold is the only fair payment for hard work." }
          ],
          correct: "B"
        },
        {
          id: "theme-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence from the tale best supports the theme in Part A?",
          choices: [
            { letter: "A", text: "Sentence 8: He had a large horse, a large hat, and a voice that rattled the shutters." },
            { letter: "B", text: "Sentence 14: A loaf that size would use every sack of flour in the village, and the mountain pass would close with the first snow." },
            { letter: "C", text: "Sentence 32: \"It is one loaf,\" said Odalys, \"made the way a village is made.\"" },
            { letter: "D", text: "Sentence 38: He laughed until his hat fell off." }
          ],
          correct: "C"
        },
        {
          id: "governor",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "governor-b",
          stem: "Which word best describes Governor Vantor at the end of the tale?",
          choices: [
            { letter: "A", text: "furious" },
            { letter: "B", text: "confused" },
            { letter: "C", text: "greedy" },
            { letter: "D", text: "reasonable" }
          ],
          correct: "D"
        },
        {
          id: "governor-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the answer to Part A about the governor?",
          choices: [
            { letter: "A", text: "Sentence 12: \"Whoever fails will bake for nothing all winter.\"" },
            { letter: "B", text: "Sentence 20: Governor Vantor agreed at once, delighted." },
            { letter: "C", text: "Sentence 30: He raised his knife and stopped." },
            { letter: "D", text: "Sentence 37: He was a man who loved large things, but he was not a fool." }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 20, the word delighted most nearly means —",
          choices: [
            { letter: "A", text: "very pleased" },
            { letter: "B", text: "slightly worried" },
            { letter: "C", text: "completely surprised" },
            { letter: "D", text: "a little suspicious" }
          ],
          correct: "A"
        },
        {
          id: "shutters",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 8, the phrase \"a voice that rattled the shutters\" suggests that the governor —",
          choices: [
            { letter: "A", text: "enjoyed breaking windows" },
            { letter: "B", text: "spoke very loudly" },
            { letter: "C", text: "lived in a house with shutters" },
            { letter: "D", text: "was afraid of storms" }
          ],
          correct: "B"
        },
        {
          id: "problem",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "In the tale, the author includes sentences 13–15 mainly to —",
          choices: [
            { letter: "A", text: "show why the governor's demand puts the village in danger" },
            { letter: "B", text: "explain how the other bakers make their bread" },
            { letter: "C", text: "describe the mountain pass in winter" },
            { letter: "D", text: "prove that Odalys is the best baker in Perrin" }
          ],
          correct: "A"
        },
        {
          id: "opening",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "How does the first paragraph (sentences 1–5) prepare the reader for the ending?",
          choices: [
            { letter: "A", text: "It explains why the governor is coming to Perrin." },
            { letter: "B", text: "It describes the mill wheel that the loaf must match." },
            { letter: "C", text: "It shows that Odalys already feeds the village with many small rolls." },
            { letter: "D", text: "It reveals that Odalys is secretly richer than the governor." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 3. Light mystery · EPIC · level 3 ───────────── */
    {
      id: "nj5-e-wednesday-arrows",
      family: "NJ5",
      title: "The Wednesday Arrows",
      kind: "Literature · RL.5",
      blurb: "Blue chalk arrows appear every Wednesday, and two friends follow them to a bed of dirt.",
      level: 3,
      passage:
        "<p>" + N(1) + "The first arrow appeared on a Wednesday, drawn in blue chalk on the sidewalk outside Wren Okafor's apartment building. " +
        N(2) + "It pointed left, toward Linden Street. " +
        N(3) + "Wren noticed it on the way to school, stepped over it, and thought nothing more until the next Wednesday, when there were two arrows, one outside her building and one at the corner. " +
        N(4) + "The second pointed toward the old train bridge. " +
        N(5) + "The Wednesday after that, there were four.</p>" +
        "<p>" + N(6) + "\"Somebody is leaving a trail,\" Wren told her friend Bashir at lunch. " +
        N(7) + "\"Or somebody has a lot of chalk and no plan,\" Bashir said, but he was interested; she could tell because he stopped eating his sandwich. " +
        N(8) + "They agreed to follow the arrows the next Wednesday, after school, and to bring a notebook.</p>" +
        "<p>" + N(9) + "That Wednesday, there were seven. " +
        N(10) + "The trail went left on Linden, under the train bridge, past the laundromat with the humming dryers, and along the fence of the community garden. " +
        N(11) + "At the garden gate the last arrow pointed straight at a bed of dirt with nothing growing in it. " +
        N(12) + "\"That's it?\" Bashir said. " +
        N(13) + "\"Seven arrows to a pile of dirt?\" " +
        N(14) + "Wren crouched down. " +
        N(15) + "The dirt was not quite empty. " +
        N(16) + "Something small and green had pushed through, a curled leaf no bigger than a fingernail. " +
        N(17) + "Beside it, a wooden stick held a scrap of paper wrapped in tape, and on the paper someone had written, in careful pencil letters, PLEASE DO NOT STEP.</p>" +
        "<p>" + N(18) + "Wren wrote three things in the notebook. " +
        N(19) + "The chalk was always blue. " +
        N(20) + "The arrows always appeared on Wednesdays. " +
        N(21) + "The letters on the sign were shaky, the way letters look when someone is still learning to make them small.</p>" +
        "<p>" + N(22) + "\"A little kid,\" Wren said. " +
        N(23) + "\"Third grade, maybe younger.\" " +
        N(24) + "\"Or an adult with bad handwriting,\" Bashir said. " +
        N(25) + "\"Why Wednesdays?\" " +
        N(26) + "Wren did not know, but she knew who might. " +
        N(27) + "The garden had a keeper, a retired mail carrier named Mr. Adeyemi, who unlocked the gate every morning and knew every plot by name. " +
        N(28) + "He was pulling weeds two beds over, and he grinned when they asked. " +
        N(29) + "\"Wednesdays are when the garden club from the elementary school comes,\" he said. " +
        N(30) + "\"Twelve kids. " +
        N(31) + "One of them planted sunflower seeds in that bed a month ago and has been worried sick that nobody will see them grow. " +
        N(32) + "I told her people would find their way.\" " +
        N(33) + "He did not say her name, and Wren did not ask. " +
        N(34) + "It seemed like the kind of secret that was better kept.</p>" +
        "<p>" + N(35) + "On the walk home, Bashir was quiet. " +
        N(36) + "\"So the mystery is that a kid wants people to look at her sunflowers,\" he finally said. " +
        N(37) + "\"That's not a mystery. " +
        N(38) + "That's an invitation.\" " +
        N(39) + "Wren thought he was right, and she also thought an invitation was worth answering.</p>" +
        "<p>" + N(40) + "The next Wednesday, she and Bashir got up early. " +
        N(41) + "They did not erase the arrows. " +
        N(42) + "Instead, beside each one, in yellow chalk, they drew a small sun. " +
        N(43) + "By the time the garden club arrived after school, the whole route from Linden Street to the garden gate glowed blue and gold, and there were more people at the fence than Mr. Adeyemi had seen all spring. " +
        N(44) + "In the bed of dirt, three sprouts had become five. " +
        N(45) + "Somewhere in the crowd of third graders, Wren guessed, one of them was trying very hard not to look proud. " +
        N(46) + "The arrows kept coming every Wednesday until July, when they stopped, because by then the sunflowers were taller than the fence, and anyone walking down Linden Street could see them without any help at all.</p>",
      claims: [
        {
          id: "wren",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "wren-b",
          stem: "Which word best describes Wren in the story?",
          choices: [
            { letter: "A", text: "impatient" },
            { letter: "B", text: "observant" },
            { letter: "C", text: "shy" },
            { letter: "D", text: "forgetful" }
          ],
          correct: "B"
        },
        {
          id: "wren-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the answer to Part A about Wren?",
          choices: [
            { letter: "A", text: "Sentence 3: Wren noticed it on the way to school, stepped over it, and thought nothing more until the next Wednesday, when there were two arrows, one outside her building and one at the corner." },
            { letter: "B", text: "Sentence 14: Wren crouched down." },
            { letter: "C", text: "Sentence 21: The letters on the sign were shaky, the way letters look when someone is still learning to make them small." },
            { letter: "D", text: "Sentence 40: The next Wednesday, she and Bashir got up early." }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "theme-b",
          stem: "Which statement best expresses a theme of \"The Wednesday Arrows\"?",
          choices: [
            { letter: "A", text: "Small efforts grow when other people join in." },
            { letter: "B", text: "Every mystery has a criminal behind it." },
            { letter: "C", text: "Gardens should be kept locked so plants stay safe." },
            { letter: "D", text: "Older kids should not spend time with younger ones." }
          ],
          correct: "A"
        },
        {
          id: "theme-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence from the story best supports the theme in Part A about the arrows?",
          choices: [
            { letter: "A", text: "Sentence 3: Wren noticed it on the way to school, stepped over it, and thought nothing more until the next Wednesday, when there were two arrows, one outside her building and one at the corner." },
            { letter: "B", text: "Sentence 10: The trail went left on Linden, under the train bridge, past the laundromat with the humming dryers, and along the fence of the community garden." },
            { letter: "C", text: "Sentence 17: Beside it, a wooden stick held a scrap of paper wrapped in tape, and on the paper someone had written, in careful pencil letters, PLEASE DO NOT STEP." },
            { letter: "D", text: "Sentence 43: By the time the garden club arrived after school, the whole route from Linden Street to the garden gate glowed blue and gold, and there were more people at the fence than Mr. Adeyemi had seen all spring." }
          ],
          correct: "D"
        },
        {
          id: "idiom",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 31, the phrase \"worried sick\" shows that the girl who planted the seeds —",
          choices: [
            { letter: "A", text: "has been too ill to come to the garden" },
            { letter: "B", text: "is extremely anxious that no one will notice her plants" },
            { letter: "C", text: "thinks the sunflowers have caught a disease" },
            { letter: "D", text: "is upset that the garden club meets on Wednesdays" }
          ],
          correct: "B"
        },
        {
          id: "clues",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "Why does the author list Wren's notes in sentences 18–21?",
          choices: [
            { letter: "A", text: "to show the clues Wren uses to guess who drew the arrows" },
            { letter: "B", text: "to explain why Bashir stops eating his sandwich" },
            { letter: "C", text: "to describe the route from Linden Street to the garden" },
            { letter: "D", text: "to prove that an adult drew the arrows" }
          ],
          correct: "A"
        },
        {
          id: "suns",
          sol: "RL.IT.5.3",
          strand: "RL",
          stem: "Why do Wren and Bashir draw yellow suns beside the arrows?",
          choices: [
            { letter: "A", text: "They want to confuse the girl who drew the arrows." },
            { letter: "B", text: "Mr. Adeyemi asks them to mark the route for the garden club." },
            { letter: "C", text: "They decide to answer the girl's invitation by helping more people find the trail." },
            { letter: "D", text: "They have run out of blue chalk and only have yellow left." }
          ],
          correct: "C"
        },
        {
          id: "summary",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "Which sentence best summarizes the story?",
          choices: [
            { letter: "A", text: "Two friends catch a third grader drawing on the sidewalk and report her to the garden keeper." },
            { letter: "B", text: "Two friends follow mysterious arrows to a garden, learn that a child wants her sunflowers seen, and help bring a crowd." },
            { letter: "C", text: "A retired mail carrier keeps a community garden and teaches a garden club how to plant sunflowers." },
            { letter: "D", text: "A girl draws chalk arrows every Wednesday until her sunflowers are taller than the garden fence." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 4. Animal story · LONG · level 2 ───────────── */
    {
      id: "nj5-l-pepper-ducks",
      family: "NJ5",
      title: "Pepper's New Job",
      kind: "Literature · RL.5",
      blurb: "A retired sheepdog is asked to herd twenty ducks, and the old way does not work.",
      level: 2,
      passage:
        "<p>" + N(1) + "Pepper was a border collie, and border collies are born knowing one thing: how to move sheep. " +
        N(2) + "For nine years she had worked the hills of the Tallis farm, running low and silent, tucking the flock into a tight woolly ball and steering it through gates with a look. " +
        N(3) + "Then her hips grew stiff, and Mr. Tallis sold the sheep, and Pepper spent her days on the porch, watching the empty field and sighing through her nose.</p>" +
        "<p>" + N(4) + "In May, a truck arrived with a crate that quacked. " +
        N(5) + "Twenty white ducks waddled down the ramp, blinking at the pond. " +
        N(6) + "\"Summer campers are coming to the farm,\" Mrs. Tallis told Pepper, scratching her ears. " +
        N(7) + "\"The kids will collect eggs and feed the ducks. " +
        N(8) + "Your job is to bring the ducks in at night before the fox does.\" " +
        N(9) + "Pepper stood up so fast that her hips forgot to hurt.</p>" +
        "<p>" + N(10) + "That evening she trotted to the pond, dropped into her working crouch, and gave the ducks her sharpest stare, the one that could stop a ram in its tracks. " +
        N(11) + "The ducks did not notice. " +
        N(12) + "One of them dabbled its beak in the mud. " +
        N(13) + "Pepper crept closer, moving the way she had moved a thousand times, sweeping wide to gather them. " +
        N(14) + "The ducks did not gather. " +
        N(15) + "They scattered, flapping and squawking, in twenty different directions. " +
        N(16) + "Three ended up in the pond, two under the tractor, and one somehow on the roof of the chicken coop. " +
        N(17) + "It took Mr. Tallis until dark to collect them, and he laughed the whole time, which did not help.</p>" +
        "<p>" + N(18) + "Pepper tried again the next night and the night after. " +
        N(19) + "Each time she pushed harder, and each time the ducks exploded like feathers from a torn pillow. " +
        N(20) + "On the fourth night she lay down at the edge of the pond and did not move at all. " +
        N(21) + "She was too tired and too discouraged to try.</p>" +
        "<p>" + N(22) + "That was when she noticed something. " +
        N(23) + "The ducks were drifting closer. " +
        N(24) + "Not because she was pushing them, but because she had stopped. " +
        N(25) + "Ducks, it turned out, were curious about a dog who was lying still and nervous about a dog who was creeping. " +
        N(26) + "Pepper stayed flat. " +
        N(27) + "When the ducks bunched together near the bank, she rose slowly, as slowly as the moon coming up, and took one step toward the barn. " +
        N(28) + "The ducks moved one step away from her, toward the barn, still in a bunch. " +
        N(29) + "She took another. " +
        N(30) + "They took another.</p>" +
        "<p>" + N(31) + "It was the slowest herding job of Pepper's life. " +
        N(32) + "It took twenty minutes to cross a field she once crossed in twenty seconds. " +
        N(33) + "But when the last duck waddled through the barn door and Mr. Tallis slid it shut, he looked at her with the same face he used to wear on the hills, the one that meant good dog. " +
        N(34) + "Pepper lay down in the straw. " +
        N(35) + "Her hips ached, but she did not sigh. " +
        N(36) + "She had learned that a job is not always done the old way, and that sometimes the fastest way to move something is to wait.</p>",
      claims: [
        {
          id: "scatter",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "scatter-b",
          stem: "Why do the ducks scatter when Pepper first tries to herd them?",
          choices: [
            { letter: "A", text: "They are frightened by the way she creeps toward them." },
            { letter: "B", text: "They see the fox coming across the field." },
            { letter: "C", text: "Mr. Tallis calls them from the barn at the same time." },
            { letter: "D", text: "They want to get into the pond before dark." }
          ],
          correct: "A"
        },
        {
          id: "scatter-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best explains the answer to Part A about the ducks?",
          choices: [
            { letter: "A", text: "Sentence 8: \"Your job is to bring the ducks in at night before the fox does.\"" },
            { letter: "B", text: "Sentence 12: One of them dabbled its beak in the mud." },
            { letter: "C", text: "Sentence 17: It took Mr. Tallis until dark to collect them, and he laughed the whole time, which did not help." },
            { letter: "D", text: "Sentence 25: Ducks, it turned out, were curious about a dog who was lying still and nervous about a dog who was creeping." }
          ],
          correct: "D"
        },
        {
          id: "lesson",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "lesson-b",
          stem: "What lesson does Pepper learn in the story?",
          choices: [
            { letter: "A", text: "Ducks are more dangerous than sheep." },
            { letter: "B", text: "An old dog cannot learn a new job." },
            { letter: "C", text: "Sometimes a new problem needs a new approach." },
            { letter: "D", text: "Working fast is always better than working slowly." }
          ],
          correct: "C"
        },
        {
          id: "lesson-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence from the story best states the lesson in Part A?",
          choices: [
            { letter: "A", text: "Sentence 2: For nine years she had worked the hills of the Tallis farm, running low and silent, tucking the flock into a tight woolly ball and steering it through gates with a look." },
            { letter: "B", text: "Sentence 17: It took Mr. Tallis until dark to collect them, and he laughed the whole time, which did not help." },
            { letter: "C", text: "Sentence 33: But when the last duck waddled through the barn door and Mr. Tallis slid it shut, he looked at her with the same face he used to wear on the hills, the one that meant good dog." },
            { letter: "D", text: "Sentence 36: She had learned that a job is not always done the old way, and that sometimes the fastest way to move something is to wait." }
          ],
          correct: "D"
        },
        {
          id: "simile",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 19, the ducks \"exploded like feathers from a torn pillow.\" This comparison shows that the ducks —",
          choices: [
            { letter: "A", text: "were soft and easy to catch" },
            { letter: "B", text: "burst apart suddenly in every direction" },
            { letter: "C", text: "lost their feathers when they flew" },
            { letter: "D", text: "settled down quietly to sleep" }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "How does the first paragraph (sentences 1–3) help the reader understand the rest of the story?",
          choices: [
            { letter: "A", text: "It explains why Mr. Tallis decided to buy ducks for the summer campers instead of sheep." },
            { letter: "B", text: "It describes the fox that threatens the ducks every night at the edge of the pond." },
            { letter: "C", text: "It shows that Pepper's old method worked with sheep, so the reader sees why she keeps using it." },
            { letter: "D", text: "It tells the reader ahead of time that Pepper will fail at herding the ducks." }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "RL.IT.5.3",
          strand: "RL",
          stem: "How is Pepper's feeling in sentence 35 different from her feeling in sentence 3?",
          choices: [
            { letter: "A", text: "In sentence 3 she is proud; in sentence 35 she is ashamed." },
            { letter: "B", text: "In sentence 3 she is restless and sad; in sentence 35 she is content." },
            { letter: "C", text: "In sentence 3 she is afraid; in sentence 35 she is angry." },
            { letter: "D", text: "In sentence 3 she is excited; in sentence 35 she is bored." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 5. Realistic fiction · EPIC · level 3 ───────────── */
    {
      id: "nj5-e-lantern-walk",
      family: "NJ5",
      title: "The Lantern Walk",
      kind: "Literature · RL.5",
      blurb: "With her brother away at college, Nadia has to keep a neighborhood tradition alive.",
      level: 3,
      passage:
        "<p>" + N(1) + "On the longest night of the year, the families on Harbor Lane walked to the river with paper lanterns. " +
        N(2) + "Nobody remembered who had started it. " +
        N(3) + "Nadia's brother Sami said the tradition was older than the streetlights, which was probably not true, but he was the one who kept it going. " +
        N(4) + "Every December he cut the lantern frames from wire hangers, wrapped them in tissue paper, and led the line down to the water, singing the one song everybody knew.</p>" +
        "<p>" + N(5) + "This year, Sami was six hundred miles away at college, and his last exam was on the twenty-second. " +
        N(6) + "\"I can't make it back until the twenty-third,\" he said on the phone, and Nadia could hear that he was as sorry as she was. " +
        N(7) + "\"Somebody else can lead it.\"</p>" +
        "<p>" + N(8) + "But nobody else did. " +
        N(9) + "The week went by. " +
        N(10) + "Mrs. Kwan on the corner asked Nadia's mother whether the walk was still happening, and her mother said she wasn't sure. " +
        N(11) + "The Ferreira twins asked Nadia at the bus stop, and she said she wasn't sure either. " +
        N(12) + "By the nineteenth, the lane felt like a stage with no actors on it.</p>" +
        "<p>" + N(13) + "On the twentieth, Nadia went to the garage and found the box. " +
        N(14) + "Inside were Sami's pliers, a tangle of hangers, and a stack of tissue paper in every color. " +
        N(15) + "There was also a sheet of instructions in his handwriting, which she had never noticed before, because he had never needed to write anything down for himself. " +
        N(16) + "She realized the instructions were for her.</p>" +
        "<p>" + N(17) + "The first lantern took an hour and looked like a crushed pumpkin. " +
        N(18) + "The second took forty minutes and leaned. " +
        N(19) + "The third was almost right. " +
        N(20) + "By the fourth, her fingers had stopped arguing with the wire, and she began to understand why Sami hummed while he worked. " +
        N(21) + "By ten o'clock she had made six, and she needed at least thirty.</p>" +
        "<p>" + N(22) + "That was the moment Nadia understood something her brother must have known for years. " +
        N(23) + "He had not made thirty lanterns alone. " +
        N(24) + "He could not have. " +
        N(25) + "She thought back and remembered the garage full of people on those December evenings: Mr. Ferreira bending wire, Mrs. Kwan cutting paper, little kids taping. " +
        N(26) + "Sami had not been the maker of the lantern walk. " +
        N(27) + "He had been the person who opened the garage door.</p>" +
        "<p>" + N(28) + "The next morning, Nadia knocked on every door on Harbor Lane. " +
        N(29) + "She did not ask anyone to lead. " +
        N(30) + "She said the garage would be open at four o'clock and there were hangers. " +
        N(31) + "By five, there were eleven people in the garage and a radio playing. " +
        N(32) + "By seven, there were thirty-four lanterns, and the twins had made one shaped like a fish, which was not in the instructions, and which Nadia decided was fine.</p>" +
        "<p>" + N(33) + "On the longest night, the line formed at the top of the lane. " +
        N(34) + "Nadia stood at the front holding the crushed-pumpkin lantern, because it was the first and she was fond of it. " +
        N(35) + "She started the song too high and had to start again. " +
        N(36) + "Nobody minded. " +
        N(37) + "The line moved down the hill, thirty-four glowing shapes swaying in the cold, and at the river they set the lanterns along the wall, the way they always had, and stood looking at the water until their toes went numb.</p>" +
        "<p>" + N(38) + "When she got home, Nadia called Sami. " +
        N(39) + "\"It happened,\" she said. " +
        N(40) + "\"The twins made a fish.\" " +
        N(41) + "There was a pause on the line, and then her brother laughed, the long laugh that meant he was relieved. " +
        N(42) + "\"Did you open the garage?\" he asked. " +
        N(43) + "\"I opened the garage,\" she said. " +
        N(44) + "\"Then you did it right,\" said Sami. " +
        N(45) + "\"That was always the only part that mattered.\"</p>",
      claims: [
        {
          id: "realize",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "realize-b",
          stem: "What does Nadia realize in sentences 22–27?",
          choices: [
            { letter: "A", text: "Sami never really enjoyed making the lanterns." },
            { letter: "B", text: "The lantern walk has always depended on the whole neighborhood." },
            { letter: "C", text: "She will need to buy tissue paper before the walk." },
            { letter: "D", text: "The instructions in the box are wrong." }
          ],
          correct: "B"
        },
        {
          id: "realize-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the answer to Part A about what Nadia realizes?",
          choices: [
            { letter: "A", text: "Sentence 2: Nobody remembered who had started it." },
            { letter: "B", text: "Sentence 16: She realized the instructions were for her." },
            { letter: "C", text: "Sentence 27: He had been the person who opened the garage door." },
            { letter: "D", text: "Sentence 35: She started the song too high and had to start again." }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "theme-b",
          stem: "Which statement best expresses a theme of \"The Lantern Walk\"?",
          choices: [
            { letter: "A", text: "A tradition belongs to everyone who helps keep it alive." },
            { letter: "B", text: "Older brothers should always come home for the holidays." },
            { letter: "C", text: "Following instructions exactly is the key to success." },
            { letter: "D", text: "The longest night of the year is the best time for a walk." }
          ],
          correct: "A"
        },
        {
          id: "theme-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence from the story best supports the theme in Part A about the tradition?",
          choices: [
            { letter: "A", text: "Sentence 4: Every December he cut the lantern frames from wire hangers, wrapped them in tissue paper, and led the line down to the water, singing the one song everybody knew." },
            { letter: "B", text: "Sentence 17: The first lantern took an hour and looked like a crushed pumpkin." },
            { letter: "C", text: "Sentence 21: By ten o'clock she had made six, and she needed at least thirty." },
            { letter: "D", text: "Sentence 45: \"That was always the only part that mattered.\"" }
          ],
          correct: "D"
        },
        {
          id: "stage",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 12, the lane \"felt like a stage with no actors on it.\" What does this comparison suggest?",
          choices: [
            { letter: "A", text: "The neighbors were planning to put on a play." },
            { letter: "B", text: "The street was empty and waiting for someone to step forward." },
            { letter: "C", text: "The streetlights were as bright as stage lights." },
            { letter: "D", text: "Nadia wished she could perform in front of a crowd." }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 41, the word relieved most nearly means —",
          choices: [
            { letter: "A", text: "no longer worried" },
            { letter: "B", text: "very tired" },
            { letter: "C", text: "slightly annoyed" },
            { letter: "D", text: "completely surprised" }
          ],
          correct: "A"
        },
        {
          id: "instructions",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "The author includes sentences 15–16 mainly to —",
          choices: [
            { letter: "A", text: "show that Sami expected Nadia to take over someday" },
            { letter: "B", text: "explain why Sami's handwriting is hard to read" },
            { letter: "C", text: "describe how the lantern frames are shaped" },
            { letter: "D", text: "prove that Nadia has never been in the garage before" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "RL.PP.5.5",
          strand: "RL",
          stem: "The story is told from a point of view that lets the reader —",
          choices: [
            { letter: "A", text: "hear Sami's private thoughts about college" },
            { letter: "B", text: "learn what Mrs. Kwan thinks of the new lanterns" },
            { letter: "C", text: "know Nadia's thoughts but only hear Sami's words" },
            { letter: "D", text: "see the walk through the eyes of the twins" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 6. Sports realistic fiction · LONG · level 2 ───────────── */
    {
      id: "nj5-l-left-field",
      family: "NJ5",
      title: "Left Field",
      kind: "Literature · RL.5",
      blurb: "Mika is moved from shortstop to left field and has to learn to take her first step back.",
      level: 2,
      passage:
        "<p>" + N(1) + "Mika had played shortstop since she was seven, and she was good at it. " +
        N(2) + "Shortstop was where the action was: ground balls, quick throws, the double play that made the parents on the bleachers shout. " +
        N(3) + "So when Coach Alvarez posted the new lineup for the Riverside Rockets and Mika found her name next to the words LEFT FIELD, she read it three times to be sure.</p>" +
        "<p>" + N(4) + "\"Left field is where you put the kid who can't catch,\" she told her dad in the car. " +
        N(5) + "\"Left field is where you put a kid who can run and throw,\" her dad said. " +
        N(6) + "\"Which do you think you are?\" " +
        N(7) + "Mika did not answer. " +
        N(8) + "She stared out the window and counted mailboxes.</p>" +
        "<p>" + N(9) + "The first game in left field was long and boring. " +
        N(10) + "Nothing came her way for four innings. " +
        N(11) + "She stood in the grass so far from home plate that the batters looked like toys, and she could hear her own breathing. " +
        N(12) + "At shortstop, the game had been loud. " +
        N(13) + "Out here it was mostly wind. " +
        N(14) + "In the fifth inning a fly ball finally came, and Mika ran in when she should have run back, and it dropped behind her for a double. " +
        N(15) + "Nobody yelled. " +
        N(16) + "That was almost worse.</p>" +
        "<p>" + N(17) + "After the game, Coach Alvarez found her by the fence. " +
        N(18) + "\"You broke in on that ball,\" he said. " +
        N(19) + "\"Most infielders do. " +
        N(20) + "You're used to the ball coming at you fast and low. " +
        N(21) + "Out there it comes slow and high, and your first step has to be back.\" " +
        N(22) + "He tossed her a tennis ball, softly, high. " +
        N(23) + "\"First step back,\" he said. " +
        N(24) + "\"Then adjust. " +
        N(25) + "Fifty times a day.\"</p>" +
        "<p>" + N(26) + "Mika did fifty a day in the backyard with her dad, then a hundred. " +
        N(27) + "He threw the tennis ball so high it disappeared against the clouds, and she learned to take one step back before she even found it, to trust that it would come down where the sky said it would. " +
        N(28) + "She stopped counting mailboxes.</p>" +
        "<p>" + N(29) + "Three weeks later, the Rockets played the Hawks with the league title on the line. " +
        N(30) + "In the last inning, with two outs and the tying run on second, the Hawks' biggest hitter sent a ball high and deep toward left. " +
        N(31) + "The bleachers went silent. " +
        N(32) + "Mika's first step was back. " +
        N(33) + "She did not think about it; her feet did it on their own. " +
        N(34) + "Then she turned, ran, and saw the ball drop out of the gray sky exactly where her feet had promised it would be. " +
        N(35) + "It landed in her glove with a sound like a door closing.</p>" +
        "<p>" + N(36) + "The bleachers were loud after all. " +
        N(37) + "Running in, Mika passed the shortstop, a sixth grader named Devon, who held up his glove for a tap. " +
        N(38) + "\"Nice catch, left field,\" he said. " +
        N(39) + "Mika grinned. " +
        N(40) + "She had thought left field was where you put the kid who couldn't catch. " +
        N(41) + "It turned out to be where you put the kid who could learn.</p>",
      claims: [
        {
          id: "feel",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "feel-b",
          stem: "How does Mika feel about the new lineup at the beginning of the story?",
          choices: [
            { letter: "A", text: "She is excited to try a position with more running." },
            { letter: "B", text: "She thinks the move means the coach believes she cannot catch." },
            { letter: "C", text: "She is relieved to leave the pressure of shortstop." },
            { letter: "D", text: "She is confused because she has never heard of left field." }
          ],
          correct: "B"
        },
        {
          id: "feel-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best shows how Mika feels in Part A about the lineup?",
          choices: [
            { letter: "A", text: "Sentence 1: Mika had played shortstop since she was seven, and she was good at it." },
            { letter: "B", text: "Sentence 3: So when Coach Alvarez posted the new lineup for the Riverside Rockets and Mika found her name next to the words LEFT FIELD, she read it three times to be sure." },
            { letter: "C", text: "Sentence 4: \"Left field is where you put the kid who can't catch,\" she told her dad in the car." },
            { letter: "D", text: "Sentence 11: She stood in the grass so far from home plate that the batters looked like toys, and she could hear her own breathing." }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "theme-b",
          stem: "Which statement best expresses a lesson of \"Left Field\"?",
          choices: [
            { letter: "A", text: "Being moved to a new role can be a chance to grow rather than a punishment." },
            { letter: "B", text: "Shortstop is the most important position on a baseball team." },
            { letter: "C", text: "Coaches should ask players before changing the lineup." },
            { letter: "D", text: "Winning a league title is worth any amount of practice." }
          ],
          correct: "A"
        },
        {
          id: "theme-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence from the story best supports the lesson in Part A about left field?",
          choices: [
            { letter: "A", text: "Sentence 2: Shortstop was where the action was: ground balls, quick throws, the double play that made the parents on the bleachers shout." },
            { letter: "B", text: "Sentence 13: Out here it was mostly wind." },
            { letter: "C", text: "Sentence 29: Three weeks later, the Rockets played the Hawks with the league title on the line." },
            { letter: "D", text: "Sentence 41: It turned out to be where you put the kid who could learn." }
          ],
          correct: "D"
        },
        {
          id: "door",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 35, the ball lands \"with a sound like a door closing.\" This comparison suggests that the catch was —",
          choices: [
            { letter: "A", text: "quiet and uncertain" },
            { letter: "B", text: "solid and final" },
            { letter: "C", text: "loud and painful" },
            { letter: "D", text: "slow and careful" }
          ],
          correct: "B"
        },
        {
          id: "mailboxes",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "Why does the author mention counting mailboxes in both sentence 8 and sentence 28?",
          choices: [
            { letter: "A", text: "to show that Mika's neighborhood has many houses" },
            { letter: "B", text: "to explain why Mika is tired after practice" },
            { letter: "C", text: "to show that Mika has stopped sulking and started working" },
            { letter: "D", text: "to describe the long drive to the ballpark" }
          ],
          correct: "C"
        },
        {
          id: "coach",
          sol: "RL.IT.5.3",
          strand: "RL",
          stem: "According to Coach Alvarez in sentences 18–21, why did Mika miss the fly ball?",
          choices: [
            { letter: "A", text: "She was standing too far from home plate." },
            { letter: "B", text: "She could not see the ball against the gray sky." },
            { letter: "C", text: "She was not trying hard enough in a boring game." },
            { letter: "D", text: "Her infield habits made her run the wrong way." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 7. Poem · LONG (24 lines) · level 2 ───────────── */
    {
      id: "nj5-l-poem-old-bike",
      family: "NJ5",
      title: "What the Old Bike Knows",
      kind: "Poetry · RL.5",
      blurb: "A hand-me-down bike with a coughing bell turns out to know the road by heart.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My cousin's bike came down to me<br>" +
        L(2) + "with paint the color of a bruise,<br>" +
        L(3) + "a bell that coughed instead of rang,<br>" +
        L(4) + "and tires worn thin from years of use.<br>" +
        L(5) + "I wanted new. I wanted red.<br>" +
        L(6) + "I wanted gears that clicked like song.<br>" +
        L(7) + "My mother said, \"It rides just fine,\"<br>" +
        L(8) + "and Mom is very rarely wrong.<br>" +
        L(9) + "So Saturday I wheeled it out<br>" +
        L(10) + "and pushed off wobbling down the lane.<br>" +
        L(11) + "The seat was set for someone tall;<br>" +
        L(12) + "I rode it standing, feeling plain.<br>" +
        L(13) + "But halfway down the hill, I felt<br>" +
        L(14) + "the old frame lean into the turn<br>" +
        L(15) + "as if it knew the road by heart,<br>" +
        L(16) + "a thing no new bike gets to learn.<br>" +
        L(17) + "It took the bump beside the oak<br>" +
        L(18) + "without a jolt, without a fuss,<br>" +
        L(19) + "the way my cousin must have done<br>" +
        L(20) + "a thousand mornings, chasing the bus.<br>" +
        L(21) + "I do not want the red one now.<br>" +
        L(22) + "I raised the seat. I fixed the bell.<br>" +
        L(23) + "A bike that knows the way back home<br>" +
        L(24) + "has better stories it can tell.</p>",
      claims: [
        {
          id: "change",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "change-b",
          stem: "How do the speaker's feelings about the bike change over the poem?",
          choices: [
            { letter: "A", text: "from proud to embarrassed" },
            { letter: "B", text: "from disappointed to attached" },
            { letter: "C", text: "from frightened to bored" },
            { letter: "D", text: "from grateful to angry" }
          ],
          correct: "B"
        },
        {
          id: "change-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which line best shows the change in the speaker's feelings described in Part A?",
          choices: [
            { letter: "A", text: "Line 5: I wanted new. I wanted red." },
            { letter: "B", text: "Line 11: The seat was set for someone tall;" },
            { letter: "C", text: "Line 17: It took the bump beside the oak" },
            { letter: "D", text: "Line 21: I do not want the red one now." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "theme-b",
          stem: "Which statement best expresses the message of \"What the Old Bike Knows\"?",
          choices: [
            { letter: "A", text: "Something old can have a value that new things lack." },
            { letter: "B", text: "Children should always listen to their mothers." },
            { letter: "C", text: "A bike is only as good as its bell and tires." },
            { letter: "D", text: "Riding downhill is more fun than riding uphill." }
          ],
          correct: "A"
        },
        {
          id: "theme-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which lines from the poem best support the message in Part A?",
          choices: [
            { letter: "A", text: "Lines 3–4: a bell that coughed instead of rang, / and tires worn thin from years of use." },
            { letter: "B", text: "Lines 7–8: My mother said, \"It rides just fine,\" / and Mom is very rarely wrong." },
            { letter: "C", text: "Lines 9–10: So Saturday I wheeled it out / and pushed off wobbling down the lane." },
            { letter: "D", text: "Lines 23–24: A bike that knows the way back home / has better stories it can tell." }
          ],
          correct: "D"
        },
        {
          id: "bell",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In line 3, the poet says the bell \"coughed instead of rang.\" This description shows that the bell —",
          choices: [
            { letter: "A", text: "made a weak, broken sound" },
            { letter: "B", text: "was too loud for the street" },
            { letter: "C", text: "had been painted over" },
            { letter: "D", text: "was missing from the bike" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In line 12, the word plain most nearly means —",
          choices: [
            { letter: "A", text: "flat and level" },
            { letter: "B", text: "easy to understand" },
            { letter: "C", text: "ordinary and unimpressive" },
            { letter: "D", text: "honest and direct" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "How is the poem organized?",
          choices: [
            { letter: "A", text: "It compares the old bike and a new red bike in every stanza." },
            { letter: "B", text: "It moves from receiving the bike, to riding it, to deciding to keep it." },
            { letter: "C", text: "It lists the bike's parts from the front wheel to the back wheel." },
            { letter: "D", text: "It tells the story of the cousin's rides before the speaker's ride." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 8. Informational (science) · LONG · level 2 ───────────── */
    {
      id: "nj5-l-popcorn",
      family: "NJ5",
      title: "Why Popcorn Pops",
      kind: "Informational · RI.5",
      blurb: "A hard hull, a drop of water, and a very small explosion.",
      level: 2,
      passage:
        "<p>" + N(1) + "Drop a handful of dry corn kernels into a hot pan, and for a minute nothing happens. " +
        N(2) + "Then, one by one, the kernels leap into the air with a sharp crack and land as fluffy white puffs many times their original size. " +
        N(3) + "Popcorn seems like magic, but it is really a small, well-timed explosion, and every part of the kernel plays a role.</p>" +
        "<p>" + N(4) + "A popcorn kernel has three main parts. " +
        N(5) + "The outside is a hard shell called the hull. " +
        N(6) + "Inside the hull is a starchy layer, which is mostly soft, packed food that a new corn plant would use to grow. " +
        N(7) + "And trapped inside that starch is a tiny amount of water, about fourteen parts in every hundred. " +
        N(8) + "That water is the secret.</p>" +
        "<p>" + N(9) + "When the kernel heats up, the water inside begins to turn into steam. " +
        N(10) + "In an open pot, steam would just float away. " +
        N(11) + "But the hull of a popcorn kernel is so tough and tightly sealed that the steam cannot escape. " +
        N(12) + "It builds up pressure, pushing outward on the shell from the inside, the way air pushes on the walls of a balloon. " +
        N(13) + "The starch, meanwhile, softens in the heat until it is more like thick dough than dry powder.</p>" +
        "<p>" + N(14) + "At about 180 degrees Celsius, the pressure becomes too much. " +
        N(15) + "The hull splits. " +
        N(16) + "In a fraction of a second, the steam rushes out, and the soft starch bursts outward with it, stretching into a foam of tiny bubbles. " +
        N(17) + "As soon as the starch meets cooler air, it hardens. " +
        N(18) + "The result is the white, crunchy shape you eat, which is really the inside of the kernel turned inside out. " +
        N(19) + "The \"pop\" you hear is the sound of the steam escaping, like a very small whistle.</p>" +
        "<p>" + N(20) + "Not every kernel pops. " +
        N(21) + "Farmers and scientists call the leftovers \"old maids,\" and they usually fail for one of two reasons. " +
        N(22) + "Some kernels have a cracked hull, so the steam leaks out slowly instead of building up. " +
        N(23) + "Others have dried out too much, so there is not enough water inside to make steam in the first place. " +
        N(24) + "That is why popcorn is sold in sealed jars and bags: keeping the moisture in keeps the kernels ready to pop.</p>" +
        "<p>" + N(25) + "It is also why ordinary corn from the dinner table does not pop. " +
        N(26) + "Sweet corn and field corn have thinner hulls that let steam leak away, and their starch does not puff. " +
        N(27) + "Only one kind of corn, with a hull hard enough to hold the pressure, does the trick.</p>" +
        "<p>" + N(28) + "People have known about this trick for a very long time. " +
        N(29) + "Archaeologists have found popped kernels in caves in the Americas that are thousands of years old, left behind by people who had discovered that a hard little seed, given enough heat, would turn itself inside out. " +
        N(30) + "They did not have a word for steam pressure. " +
        N(31) + "They just had good ears and a fire.</p>",
      claims: [
        {
          id: "main",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "main-b",
          stem: "Which statement best expresses the main idea of \"Why Popcorn Pops\"?",
          choices: [
            { letter: "A", text: "Popcorn has been eaten by people for thousands of years." },
            { letter: "B", text: "Popcorn pops because steam trapped by a hard hull builds pressure until the kernel bursts." },
            { letter: "C", text: "Popcorn should be stored in sealed jars so it does not dry out." },
            { letter: "D", text: "Popcorn is the only kind of corn that people can eat." }
          ],
          correct: "B"
        },
        {
          id: "main-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the article best supports the main idea in Part A?",
          choices: [
            { letter: "A", text: "Sentence 1: Drop a handful of dry corn kernels into a hot pan, and for a minute nothing happens." },
            { letter: "B", text: "Sentence 6: Inside the hull is a starchy layer, which is mostly soft, packed food that a new corn plant would use to grow." },
            { letter: "C", text: "Sentence 11: But the hull of a popcorn kernel is so tough and tightly sealed that the steam cannot escape." },
            { letter: "D", text: "Sentence 21: Farmers and scientists call the leftovers \"old maids,\" and they usually fail for one of two reasons." }
          ],
          correct: "C"
        },
        {
          id: "fail",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "fail-b",
          stem: "According to the article, why do some kernels fail to pop?",
          choices: [
            { letter: "A", text: "They are heated too quickly in the pan." },
            { letter: "B", text: "Their starch is too hard to soften." },
            { letter: "C", text: "They were picked before they were ripe." },
            { letter: "D", text: "Their hull is cracked or they have too little water inside." }
          ],
          correct: "D"
        },
        {
          id: "fail-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence gives evidence for the answer to Part A about kernels that do not pop?",
          choices: [
            { letter: "A", text: "Sentence 14: At about 180 degrees Celsius, the pressure becomes too much." },
            { letter: "B", text: "Sentence 22: Some kernels have a cracked hull, so the steam leaks out slowly instead of building up." },
            { letter: "C", text: "Sentence 25: It is also why ordinary corn from the dinner table does not pop." },
            { letter: "D", text: "Sentence 30: They did not have a word for steam pressure." }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 12, the word pressure most nearly means —",
          choices: [
            { letter: "A", text: "a force pushing against something" },
            { letter: "B", text: "a feeling of being rushed" },
            { letter: "C", text: "a rise in temperature" },
            { letter: "D", text: "a loud, sudden noise" }
          ],
          correct: "A"
        },
        {
          id: "parts",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "Why does the author describe the parts of a kernel (sentences 4–8) before explaining how it pops?",
          choices: [
            { letter: "A", text: "to show that popcorn is healthier than other snacks" },
            { letter: "B", text: "to give readers the information they need to follow the explanation" },
            { letter: "C", text: "to explain how a new corn plant grows from a seed" },
            { letter: "D", text: "to compare popcorn kernels with sweet corn kernels" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "RI.AA.5.7",
          strand: "RI",
          stem: "Which evidence does the author use to support the claim that people have known about popcorn for a very long time?",
          choices: [
            { letter: "A", text: "Popcorn is sold in sealed jars and bags." },
            { letter: "B", text: "Farmers call unpopped kernels \"old maids.\"" },
            { letter: "C", text: "Popped kernels thousands of years old have been found in caves." },
            { letter: "D", text: "Only one kind of corn has a hull hard enough to pop." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 9. Informational (nature) · EPIC · level 3 ───────────── */
    {
      id: "nj5-e-vernal-pools",
      family: "NJ5",
      title: "The Pond That Disappears",
      kind: "Informational · RI.5",
      blurb: "Spring ponds that vanish by summer are some of the busiest places in the forest.",
      level: 3,
      passage:
        "<p>" + N(1) + "In early spring, before the trees have leaves, a walk through certain woods in the northeastern United States leads to a surprise: a pond that was not there in August. " +
        N(2) + "It fills a low spot on the forest floor, brown with leaves, sometimes no larger than a classroom. " +
        N(3) + "By July it will be gone again, and the spot will look like ordinary dry ground. " +
        N(4) + "Scientists call these ponds vernal pools, from the Latin word for spring, and they are some of the most important small places in the forest.</p>" +
        "<p>" + N(5) + "A vernal pool forms where the ground is shaped like a shallow bowl and the soil beneath holds water instead of draining it. " +
        N(6) + "Melting snow and spring rain fill the bowl. " +
        N(7) + "Because no stream flows into it, and none flows out, the pool depends entirely on the weather. " +
        N(8) + "Warm summer days and thirsty tree roots slowly drink it dry.</p>" +
        "<p>" + N(9) + "The disappearing act is the whole point. " +
        N(10) + "A pond that vanishes every year cannot hold fish. " +
        N(11) + "That sounds like a weakness, but for certain animals it is the best news in the forest. " +
        N(12) + "Fish eat eggs and tadpoles, and a pool without fish is a nursery where young creatures can grow with far fewer enemies.</p>" +
        "<p>" + N(13) + "The first to arrive are usually wood frogs. " +
        N(14) + "On the first rainy night above freezing, sometimes while patches of snow still linger, hundreds of them crawl out of the leaf litter and march to the pool. " +
        N(15) + "Their call sounds less like a frog and more like a flock of quacking ducks. " +
        N(16) + "Within days, the females lay masses of eggs the size of softballs, and then the adults leave, going back to the woods where they will spend the rest of the year.</p>" +
        "<p>" + N(17) + "Spotted salamanders come on the same rainy nights, though they are much harder to see. " +
        N(18) + "They are black with bright yellow spots, as long as a pencil, and they live most of their lives underground. " +
        N(19) + "For one or two nights each spring they travel to the pool where they themselves hatched, sometimes crossing roads to reach it. " +
        N(20) + "In some towns, volunteers stand in the rain with flashlights to help them across.</p>" +
        "<p>" + N(21) + "Tiny fairy shrimp are stranger still. " +
        N(22) + "They swim upside down, and they cannot leave when the pool dries. " +
        N(23) + "Instead, their eggs survive in the dry mud all summer and winter, sometimes for years, waiting for the next flood. " +
        N(24) + "A vernal pool that looks like dead ground in September is actually full of eggs, holding on.</p>" +
        "<p>" + N(25) + "All of these creatures are in a race against the calendar. " +
        N(26) + "Wood frog tadpoles must grow legs and hop away before the water is gone, usually within two to three months. " +
        N(27) + "In a dry spring, the pool may vanish too soon, and a whole year of young is lost. " +
        N(28) + "In a wet year, it may last into August, and the pool is crowded with life.</p>" +
        "<p>" + N(29) + "Vernal pools are easy to lose. " +
        N(30) + "Because they are dry for much of the year, they are often not noticed until a building or a parking lot is planned on top of one. " +
        N(31) + "Some states now require that vernal pools be mapped and protected, and students in many schools have helped by searching the woods each spring and reporting what they find. " +
        N(32) + "The signs are simple: standing water in April, no fish, egg masses on sticks, and a chorus that sounds like ducks.</p>" +
        "<p>" + N(33) + "The next time a puddle in the woods seems too big to be a puddle, it may be worth a closer look. " +
        N(34) + "The pond that disappears is one of the busiest places in the forest, for the few weeks it is there.</p>",
      claims: [
        {
          id: "main",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "main-b",
          stem: "Which statement best expresses the main idea of \"The Pond That Disappears\"?",
          choices: [
            { letter: "A", text: "Wood frogs and spotted salamanders travel to the pools on rainy nights in early spring." },
            { letter: "B", text: "Vernal pools dry up every year, and that is exactly what makes them safe nurseries." },
            { letter: "C", text: "Students in many schools help scientists by mapping and reporting vernal pools." },
            { letter: "D", text: "Fairy shrimp eggs can survive in dry mud for years while waiting for the next flood." }
          ],
          correct: "B"
        },
        {
          id: "main-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the article best supports the main idea in Part A about vernal pools?",
          choices: [
            { letter: "A", text: "Sentence 2: It fills a low spot on the forest floor, brown with leaves, sometimes no larger than a classroom." },
            { letter: "B", text: "Sentence 12: Fish eat eggs and tadpoles, and a pool without fish is a nursery where young creatures can grow with far fewer enemies." },
            { letter: "C", text: "Sentence 18: They are black with bright yellow spots, as long as a pencil, and they live most of their lives underground." },
            { letter: "D", text: "Sentence 20: In some towns, volunteers stand in the rain with flashlights to help them across." }
          ],
          correct: "B"
        },
        {
          id: "race",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "race-b",
          stem: "What is the relationship between wood frog tadpoles and the drying of the pool?",
          choices: [
            { letter: "A", text: "The tadpoles must finish growing before the water is gone." },
            { letter: "B", text: "The tadpoles drink the water and cause the pool to dry." },
            { letter: "C", text: "The pool dries faster when there are more tadpoles in it." },
            { letter: "D", text: "The tadpoles wait in the mud until the pool fills again." }
          ],
          correct: "A"
        },
        {
          id: "race-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about tadpoles?",
          choices: [
            { letter: "A", text: "Sentence 8: Warm summer days and thirsty tree roots slowly drink it dry." },
            { letter: "B", text: "Sentence 16: Within days, the females lay masses of eggs the size of softballs, and then the adults leave, going back to the woods where they will spend the rest of the year." },
            { letter: "C", text: "Sentence 23: Instead, their eggs survive in the dry mud all summer and winter, sometimes for years, waiting for the next flood." },
            { letter: "D", text: "Sentence 26: Wood frog tadpoles must grow legs and hop away before the water is gone, usually within two to three months." }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "Based on sentence 4, the word vernal most nearly means —",
          choices: [
            { letter: "A", text: "found in a forest" },
            { letter: "B", text: "very small" },
            { letter: "C", text: "having to do with spring" },
            { letter: "D", text: "filled with animals" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "How are sentences 13–24 organized?",
          choices: [
            { letter: "A", text: "Each paragraph describes a different animal that depends on the pool." },
            { letter: "B", text: "Each paragraph explains a different reason pools are disappearing." },
            { letter: "C", text: "The paragraphs compare vernal pools with lakes and streams." },
            { letter: "D", text: "The paragraphs list the steps for finding a vernal pool." }
          ],
          correct: "A"
        },
        {
          id: "reason",
          sol: "RI.AA.5.7",
          strand: "RI",
          stem: "Which reason does the author give to support the claim in sentence 29 that vernal pools are easy to lose?",
          choices: [
            { letter: "A", text: "Fish eat the eggs and tadpoles that live in the pools." },
            { letter: "B", text: "The pools are dry for much of the year, so people do not notice them." },
            { letter: "C", text: "Salamanders are hard to see because they live underground." },
            { letter: "D", text: "A dry spring can make a pool vanish too soon." }
          ],
          correct: "B"
        },
        {
          id: "point",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "What does the author mean in sentence 9 by \"The disappearing act is the whole point\"?",
          choices: [
            { letter: "A", text: "Scientists study the pools mainly to learn why they dry up." },
            { letter: "B", text: "The pools are interesting only because they are hard to find." },
            { letter: "C", text: "Because the pools dry up, no fish can live in them, and that is what makes them useful." },
            { letter: "D", text: "The pools disappear so that animals will move to larger lakes." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 10. Informational (how things are made) · LONG · level 2 ───────────── */
    {
      id: "nj5-l-glass-jar",
      family: "NJ5",
      title: "From Sand to Jar",
      kind: "Informational · RI.5",
      blurb: "How a glass jar is melted, blown, and slowly cooled in a factory.",
      level: 2,
      passage:
        "<p>" + N(1) + "The glass jar on your kitchen shelf began as a pile of sand. " +
        N(2) + "That may sound like a fairy tale, but it is simply how glass is made, and factories around the world do it every day, turning out thousands of jars and bottles an hour.</p>" +
        "<p>" + N(3) + "The recipe has three main ingredients. " +
        N(4) + "The first is sand, but not just any sand from a beach. " +
        N(5) + "Glassmakers need a very pure kind, almost white, made mostly of a mineral called silica. " +
        N(6) + "The second ingredient is soda ash, a white powder that lowers the temperature at which sand will melt. " +
        N(7) + "Without it, the furnace would have to be hotter than most furnaces can safely go. " +
        N(8) + "The third is limestone, a crushed rock that makes the finished glass strong and keeps it from dissolving in water. " +
        N(9) + "Factories also add crushed pieces of old glass, called cullet, because it melts faster than raw sand and saves energy.</p>" +
        "<p>" + N(10) + "The ingredients are mixed and poured into a furnace that never turns off. " +
        N(11) + "Inside, the temperature reaches about 1,500 degrees Celsius, hot enough to make steel glow orange. " +
        N(12) + "Over many hours, the sand, soda ash, and limestone melt together into a thick, glowing liquid that flows like honey.</p>" +
        "<p>" + N(13) + "Now the shaping begins. " +
        N(14) + "At the end of the furnace, a stream of molten glass pours out and is snipped by steel blades into lumps called gobs. " +
        N(15) + "Each gob is the exact amount of glass needed for one jar. " +
        N(16) + "A gob drops into a metal mold, and a puff of air pushes it against the mold's walls, giving it a rough shape called a parison. " +
        N(17) + "The parison then flips into a second mold, where a stronger blast of air blows it up like a balloon until it fills every corner. " +
        N(18) + "When the mold opens, a finished jar stands there, still orange-hot and glowing. " +
        N(19) + "All of this takes about ten seconds.</p>" +
        "<p>" + N(20) + "A jar straight from the mold has a hidden problem. " +
        N(21) + "Its outside cools faster than its inside, and the uneven cooling leaves the glass full of stress, like a rubber band stretched tight. " +
        N(22) + "A jar like this could crack from a small tap. " +
        N(23) + "To fix it, the jars ride on a slow conveyor belt through a long oven called a lehr. " +
        N(24) + "The lehr reheats the jars and then cools them very slowly, over about an hour, so that the whole jar relaxes at the same rate. " +
        N(25) + "This step is called annealing, and without it almost every jar would break.</p>" +
        "<p>" + N(26) + "At the end of the line, machines and people inspect each jar. " +
        N(27) + "Cameras look for bubbles, cracks, and thin spots. " +
        N(28) + "A jar that fails is not thrown away; it is crushed into cullet and sent back to the furnace to become a new jar. " +
        N(29) + "That is one reason glass is easy to recycle: a jar can be melted and remade again and again without losing quality.</p>" +
        "<p>" + N(30) + "So the next time you unscrew a jar of jam, remember that it was once sand, then a glowing gob, then a balloon of light, and then a jar that had to learn to relax.</p>",
      claims: [
        {
          id: "main",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "main-b",
          stem: "Which statement best expresses the main idea of \"From Sand to Jar\"?",
          choices: [
            { letter: "A", text: "Glass factories use furnaces that are never turned off because reheating them wastes energy." },
            { letter: "B", text: "A glass jar is made by melting sand with other ingredients, shaping it with air, and cooling it slowly." },
            { letter: "C", text: "Cameras are better than people at finding bubbles, cracks, and thin spots in glass." },
            { letter: "D", text: "Sand from a beach is not pure enough to be used for making glass jars." }
          ],
          correct: "B"
        },
        {
          id: "main-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the article best sums up the main idea in Part A?",
          choices: [
            { letter: "A", text: "Sentence 9: Factories also add crushed pieces of old glass, called cullet, because it melts faster than raw sand and saves energy." },
            { letter: "B", text: "Sentence 11: Inside, the temperature reaches about 1,500 degrees Celsius, hot enough to make steel glow orange." },
            { letter: "C", text: "Sentence 24: The lehr reheats the jars and then cools them very slowly, over about an hour, so that the whole jar relaxes at the same rate." },
            { letter: "D", text: "Sentence 30: So the next time you unscrew a jar of jam, remember that it was once sand, then a glowing gob, then a balloon of light, and then a jar that had to learn to relax." }
          ],
          correct: "D"
        },
        {
          id: "anneal",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "anneal-b",
          stem: "Why is annealing necessary?",
          choices: [
            { letter: "A", text: "Uneven cooling leaves stress in the glass that could make it crack." },
            { letter: "B", text: "The jars are too hot for the cameras to inspect." },
            { letter: "C", text: "The second mold does not give the jar its final shape." },
            { letter: "D", text: "Cullet must be melted a second time to remove bubbles." }
          ],
          correct: "A"
        },
        {
          id: "anneal-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about annealing?",
          choices: [
            { letter: "A", text: "Sentence 12: Over many hours, the sand, soda ash, and limestone melt together into a thick, glowing liquid that flows like honey." },
            { letter: "B", text: "Sentence 17: The parison then flips into a second mold, where a stronger blast of air blows it up like a balloon until it fills every corner." },
            { letter: "C", text: "Sentence 21: Its outside cools faster than its inside, and the uneven cooling leaves the glass full of stress, like a rubber band stretched tight." },
            { letter: "D", text: "Sentence 28: A jar that fails is not thrown away; it is crushed into cullet and sent back to the furnace to become a new jar." }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 14, the word molten most nearly means —",
          choices: [
            { letter: "A", text: "shaped into a mold" },
            { letter: "B", text: "melted by heat" },
            { letter: "C", text: "cooled and hardened" },
            { letter: "D", text: "crushed into powder" }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "The article is organized mainly by —",
          choices: [
            { letter: "A", text: "comparing glass jars with plastic jars" },
            { letter: "B", text: "listing problems with glass and their solutions" },
            { letter: "C", text: "describing the steps of making a jar in order" },
            { letter: "D", text: "explaining the history of glass from ancient times" }
          ],
          correct: "C"
        },
        {
          id: "cullet",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "How do sentences 28–29 connect to sentence 9?",
          choices: [
            { letter: "A", text: "They explain why cullet is more expensive than sand." },
            { letter: "B", text: "They show where the cullet mentioned in sentence 9 comes from and why it matters." },
            { letter: "C", text: "They describe a different ingredient that replaces cullet." },
            { letter: "D", text: "They prove that the cameras in sentence 27 sometimes make mistakes." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 11. Informational (community history) · EPIC · level 3 ───────────── */
    {
      id: "nj5-e-town-bell",
      family: "NJ5",
      title: "The Bell on Wheeler Street",
      kind: "Informational · RI.5",
      blurb: "How a river town bought a fire bell in pieces, and how the bell shaped the town.",
      level: 3,
      passage:
        "<p>" + N(1) + "In the small town of Ashford Landing, a bronze bell hangs in a wooden tower beside the library. " +
        N(2) + "It has not rung for a fire in almost a hundred years. " +
        N(3) + "Most days, people walk past it without looking up. " +
        N(4) + "But the bell is the reason the town looks the way it does, and its story explains a lot about how a community learns to take care of itself.</p>" +
        "<p>" + N(5) + "Ashford Landing began in the 1830s as a cluster of houses beside a river ferry. " +
        N(6) + "The buildings were made of wood, heated by stoves, and lit by candles and oil lamps. " +
        N(7) + "Fire was the town's constant worry. " +
        N(8) + "When one broke out, the only warning was a neighbor shouting, and the only water was whatever could be carried from the river in buckets. " +
        N(9) + "Town records list four large fires in the first twenty years, one of which burned half of Wheeler Street.</p>" +
        "<p>" + N(10) + "After that fire, the town held a meeting in the schoolhouse. " +
        N(11) + "According to the minutes, which are still kept at the library, the residents voted to do three things. " +
        N(12) + "They would buy a bell, build a tower for it, and form a company of volunteers who would come running when it rang. " +
        N(13) + "The bell cost more than the town had, so families paid for it in pieces: a few coins here, a wagonload of firewood there, and one farmer's promise of a calf. " +
        N(14) + "The blacksmith made the iron hanger for free.</p>" +
        "<p>" + N(15) + "The bell arrived by river barge in the spring of 1856 and was raised into the new tower the same week. " +
        N(16) + "It weighed about six hundred pounds, and the town developed a code for it. " +
        N(17) + "Three strokes, repeated, meant fire. " +
        N(18) + "Two strokes meant a meeting. " +
        N(19) + "A single slow stroke, once an hour, marked the time on Sundays. " +
        N(20) + "Children learned the code before they learned to read.</p>" +
        "<p>" + N(21) + "The volunteer company changed the town in ways nobody had planned. " +
        N(22) + "To reach fires faster, the volunteers asked for wider streets, and Wheeler Street was rebuilt with the broad sidewalks it still has today. " +
        N(23) + "They asked that new buildings near the center be made of brick, and the row of brick storefronts on Main Street dates from those years. " +
        N(24) + "They dug a public well in the square, so that water was closer than the river. " +
        N(25) + "Each of these changes was made because of the bell, and each one is still visible.</p>" +
        "<p>" + N(26) + "The last time the bell rang for a fire was in 1929, when a warehouse near the ferry landing caught fire. " +
        N(27) + "By then the town had a telephone line, a motor fire truck, and a siren on the roof of the new firehouse. " +
        N(28) + "The siren could be heard farther than the bell, and it did not need a person to pull a rope. " +
        N(29) + "The bell tower was left standing, but the rope was tied off, and for decades the bell was silent.</p>" +
        "<p>" + N(30) + "In the 1980s, the tower had rotted so badly that the town council voted to take it down. " +
        N(31) + "A group of fifth graders at the elementary school heard about the vote and wrote letters. " +
        N(32) + "They had studied the town's history that year, and they argued that the bell was a record of how the town had once saved itself. " +
        N(33) + "The council changed its mind. " +
        N(34) + "Money was raised, much as it had been the first time, in small amounts from many families, and the tower was rebuilt with new timber.</p>" +
        "<p>" + N(35) + "Today the bell rings twice a year: once on the first day of school, and once on the anniversary of the great Wheeler Street fire. " +
        N(36) + "On that day, the fire chief pulls the rope three times, and pauses, and pulls it three times again. " +
        N(37) + "Then the whole town listens to the sound that once meant run, and now means remember.</p>",
      claims: [
        {
          id: "main",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "main-b",
          stem: "Which statement best expresses the main idea of \"The Bell on Wheeler Street\"?",
          choices: [
            { letter: "A", text: "A siren is a better fire warning than a bell because it can be heard farther away." },
            { letter: "B", text: "The story of the bell shows how a town learned to protect itself and how that shaped the town." },
            { letter: "C", text: "Fifth graders saved the bell tower by writing letters to the town council." },
            { letter: "D", text: "In the 1800s, most towns were built of wood and lit by candles." }
          ],
          correct: "B"
        },
        {
          id: "main-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the article best states the main idea in Part A about the bell?",
          choices: [
            { letter: "A", text: "Sentence 4: But the bell is the reason the town looks the way it does, and its story explains a lot about how a community learns to take care of itself." },
            { letter: "B", text: "Sentence 16: It weighed about six hundred pounds, and the town developed a code for it." },
            { letter: "C", text: "Sentence 28: The siren could be heard farther than the bell, and it did not need a person to pull a rope." },
            { letter: "D", text: "Sentence 35: Today the bell rings twice a year: once on the first day of school, and once on the anniversary of the great Wheeler Street fire." }
          ],
          correct: "A"
        },
        {
          id: "changes",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "changes-b",
          stem: "How did the volunteer fire company affect the way Ashford Landing looks?",
          choices: [
            { letter: "A", text: "It built the library and the schoolhouse." },
            { letter: "B", text: "It moved the town away from the river." },
            { letter: "C", text: "It led to wider streets, brick buildings, and a public well." },
            { letter: "D", text: "It replaced the wooden bell tower with a firehouse." }
          ],
          correct: "C"
        },
        {
          id: "changes-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about the volunteer company?",
          choices: [
            { letter: "A", text: "Sentence 12: They would buy a bell, build a tower for it, and form a company of volunteers who would come running when it rang." },
            { letter: "B", text: "Sentence 20: Children learned the code before they learned to read." },
            { letter: "C", text: "Sentence 25: Each of these changes was made because of the bell, and each one is still visible." },
            { letter: "D", text: "Sentence 29: The bell tower was left standing, but the rope was tied off, and for decades the bell was silent." }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 11, the word minutes most nearly means —",
          choices: [
            { letter: "A", text: "short periods of time" },
            { letter: "B", text: "written notes from a meeting" },
            { letter: "C", text: "very small pieces" },
            { letter: "D", text: "the hands of a clock" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "How is the article mostly organized?",
          choices: [
            { letter: "A", text: "in time order, from the town's beginning to the present day" },
            { letter: "B", text: "by comparing the bell with the siren" },
            { letter: "C", text: "by listing the problems fire caused and their causes" },
            { letter: "D", text: "from the least important fact about the bell to the most important" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "RI.AA.5.7",
          strand: "RI",
          stem: "Which evidence does the author give to support the statement in sentence 7 that fire was the town's constant worry?",
          choices: [
            { letter: "A", text: "The bell weighed about six hundred pounds." },
            { letter: "B", text: "The blacksmith made the iron hanger for free." },
            { letter: "C", text: "A warehouse near the ferry landing caught fire in 1929." },
            { letter: "D", text: "Town records list four large fires in the first twenty years." }
          ],
          correct: "D"
        },
        {
          id: "echo",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "How was the way money was raised in the 1980s (sentence 34) like the way it was raised in the 1850s?",
          choices: [
            { letter: "A", text: "Both times, the town council paid for everything." },
            { letter: "B", text: "Both times, a farmer promised a calf." },
            { letter: "C", text: "Both times, the fifth graders collected the money." },
            { letter: "D", text: "Both times, many families each gave a small amount." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 12. Informational (weather science) · LONG · level 3 ───────────── */
    {
      id: "nj5-l-hailstone",
      family: "NJ5",
      title: "Inside a Hailstone",
      kind: "Informational · RI.5",
      blurb: "Why a lump of ice can fall out of a hot July sky, and what its rings reveal.",
      level: 3,
      passage:
        "<p>" + N(1) + "A hailstone is a small piece of winter that falls in the middle of summer. " +
        N(2) + "Hail forms inside tall thunderstorm clouds, often on hot afternoons, and it can be as small as a pea or as large as a baseball. " +
        N(3) + "To understand how a lump of ice can drop out of a warm July sky, you have to look at what happens inside the cloud.</p>" +
        "<p>" + N(4) + "Thunderstorm clouds are built by rising air. " +
        N(5) + "On a hot day, the ground heats the air above it, and that warm air rises like a hot-air balloon. " +
        N(6) + "In a strong storm, this rising column, called an updraft, can move upward faster than a car on a highway. " +
        N(7) + "The higher the air goes, the colder it gets. " +
        N(8) + "Near the top of a big storm cloud, the temperature can be far below freezing, even when it is ninety degrees on the ground.</p>" +
        "<p>" + N(9) + "Inside the cloud, tiny droplets of water are carried upward by the updraft. " +
        N(10) + "Strangely, many of them stay liquid even when the air is colder than freezing. " +
        N(11) + "Scientists call this supercooled water. " +
        N(12) + "Supercooled droplets are waiting for something to freeze onto, and when they touch a speck of dust or a bit of ice, they freeze instantly. " +
        N(13) + "That speck becomes the seed of a hailstone.</p>" +
        "<p>" + N(14) + "Now the seed begins a wild ride. " +
        N(15) + "It is heavy enough to fall, but the updraft pushes it back up. " +
        N(16) + "On the way up, it passes through more supercooled droplets, which freeze onto it in a thin layer. " +
        N(17) + "It grows heavier, falls again, and is pushed up again. " +
        N(18) + "Each trip adds another layer of ice, like the coats of paint on an old fence. " +
        N(19) + "A hailstone may make this trip many times before it grows too heavy for the updraft to hold.</p>" +
        "<p>" + N(20) + "You can see these trips if you cut a large hailstone in half. " +
        N(21) + "Inside are rings, some clear and some cloudy white, one for each journey through the cloud. " +
        N(22) + "Clear layers form when the stone is in a warmer part of the cloud, where water spreads over it and freezes slowly. " +
        N(23) + "Cloudy layers form higher up, where droplets freeze so fast that they trap tiny bubbles of air. " +
        N(24) + "By counting and reading the rings, scientists can tell how many times a stone rose and fell, and roughly how strong the storm was.</p>" +
        "<p>" + N(25) + "Finally, the stone becomes too heavy. " +
        N(26) + "It drops out of the bottom of the cloud and falls toward the ground. " +
        N(27) + "On the way down, it passes through warm air and begins to melt. " +
        N(28) + "A stone that started the size of a golf ball may reach the ground the size of a marble. " +
        N(29) + "Small hail often melts completely and lands as very cold rain. " +
        N(30) + "Only the largest stones, from the strongest updrafts, survive the trip.</p>" +
        "<p>" + N(31) + "That is why big hail is a sign of a powerful storm. " +
        N(32) + "A baseball-sized hailstone did not just fall from the sky. " +
        N(33) + "It was thrown upward, over and over, by a column of air strong enough to hold ice in the air, until the storm could no longer hold on.</p>",
      claims: [
        {
          id: "main",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "main-b",
          stem: "Which statement best expresses the main idea of \"Inside a Hailstone\"?",
          choices: [
            { letter: "A", text: "Hail is more dangerous than rain because it is made of solid ice and falls faster." },
            { letter: "B", text: "Scientists cut large hailstones in half to count the clear and cloudy rings inside." },
            { letter: "C", text: "Hail grows as an updraft carries ice up and down through a cloud, adding a layer each trip." },
            { letter: "D", text: "Thunderstorms happen most often on hot afternoons when warm air rises from the ground." }
          ],
          correct: "C"
        },
        {
          id: "main-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the article best supports the main idea in Part A about hail?",
          choices: [
            { letter: "A", text: "Sentence 2: Hail forms inside tall thunderstorm clouds, often on hot afternoons, and it can be as small as a pea or as large as a baseball." },
            { letter: "B", text: "Sentence 11: Scientists call this supercooled water." },
            { letter: "C", text: "Sentence 19: A hailstone may make this trip many times before it grows too heavy for the updraft to hold." },
            { letter: "D", text: "Sentence 29: Small hail often melts completely and lands as very cold rain." }
          ],
          correct: "C"
        },
        {
          id: "sign",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "sign-b",
          stem: "According to the article, why is big hail a sign of a powerful storm?",
          choices: [
            { letter: "A", text: "Only a very strong updraft can hold heavy ice in the air long enough for it to grow large." },
            { letter: "B", text: "Powerful storms have colder air near the ground, so the hail does not melt." },
            { letter: "C", text: "Big storms contain more dust for droplets to freeze onto." },
            { letter: "D", text: "Large hailstones fall faster and reach the ground before the rain." }
          ],
          correct: "A"
        },
        {
          id: "sign-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about big hail?",
          choices: [
            { letter: "A", text: "Sentence 8: Near the top of a big storm cloud, the temperature can be far below freezing, even when it is ninety degrees on the ground." },
            { letter: "B", text: "Sentence 13: That speck becomes the seed of a hailstone." },
            { letter: "C", text: "Sentence 27: On the way down, it passes through warm air and begins to melt." },
            { letter: "D", text: "Sentence 30: Only the largest stones, from the strongest updrafts, survive the trip." }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 6, the word updraft most nearly means —",
          choices: [
            { letter: "A", text: "a column of rising air" },
            { letter: "B", text: "a sudden drop in temperature" },
            { letter: "C", text: "a cloud that produces rain" },
            { letter: "D", text: "a strong wind near the ground" }
          ],
          correct: "A"
        },
        {
          id: "rings",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "How does the fifth paragraph (sentences 20–24) connect to the fourth paragraph (sentences 14–19)?",
          choices: [
            { letter: "A", text: "It explains why the updraft finally becomes too weak to hold the hailstone up." },
            { letter: "B", text: "It gives evidence that the repeated trips in the fourth paragraph really happen." },
            { letter: "C", text: "It describes a different way that hailstones can form in a colder cloud." },
            { letter: "D", text: "It warns readers about the dangers of large hail to cars and rooftops." }
          ],
          correct: "B"
        },
        {
          id: "paint",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 18, the author compares the layers of ice to \"the coats of paint on an old fence\" to show that —",
          choices: [
            { letter: "A", text: "hailstones are usually white like a painted fence" },
            { letter: "B", text: "the layers build up one on top of another over time" },
            { letter: "C", text: "hail can damage fences and other property" },
            { letter: "D", text: "the ice peels off the stone as it falls" }
          ],
          correct: "B"
        },
        {
          id: "melt",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "What happens to most small hailstones after they leave the cloud?",
          choices: [
            { letter: "A", text: "They are pushed back up by the updraft." },
            { letter: "B", text: "They grow larger as they pass through warm air." },
            { letter: "C", text: "They break apart into cloudy and clear pieces." },
            { letter: "D", text: "They melt and reach the ground as cold rain." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 13. Paired texts (article + story) · LONG · level 2 ───────────── */
    {
      id: "nj5-l-paired-bats",
      family: "NJ5",
      title: "Bats: Article + Story",
      kind: "Paired texts · RL/RI.5",
      blurb: "An article explains echolocation; a boy watches a bat weave through his grandmother's yard.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Not Blind at All</strong></p>" +
        "<p>" + N(1) + "Many people believe that bats are blind. " +
        N(2) + "They are not. " +
        N(3) + "Most bats can see about as well as a person can at dusk, and some fruit bats see better than we do. " +
        N(4) + "The reason for the myth is simple: bats hunt at night, when eyes alone are not much use, so they rely on a different sense. " +
        N(5) + "It is called echolocation. " +
        N(6) + "A hunting bat sends out a stream of high, sharp clicks, far too high for human ears. " +
        N(7) + "The clicks travel outward, bounce off whatever is in front of the bat, and return as echoes. " +
        N(8) + "From the time an echo takes to come back, the bat knows how far away an object is. " +
        N(9) + "From the way the echo has changed, it can tell whether the object is a wall, a leaf, or a moth the size of a fingernail. " +
        N(10) + "A little brown bat can catch hundreds of insects an hour this way, in total darkness, without touching a single twig. " +
        N(11) + "Echolocation is so precise that scientists have used it as a model for the sonar on ships and for canes that help people who are blind find their way. " +
        N(12) + "So the next time a bat flutters past a porch light, remember: it is not lost, and it is not blind. " +
        N(13) + "It is listening to the shape of the world.</p>" +
        "<p><strong>Text 2 — The Attic Guest</strong></p>" +
        "<p>" + N(14) + "Something was scratching in the attic above Deshawn's room, and he was sure it was a bird. " +
        N(15) + "His grandmother, who had lived in the house for fifty years, said it was a bat. " +
        N(16) + "\"Bats are blind,\" Deshawn said. " +
        N(17) + "\"It will crash into the walls all night.\" " +
        N(18) + "\"Wait and see,\" said Gran. " +
        N(19) + "At dusk they sat on the back steps with two cups of lemonade and watched the small window under the roof. " +
        N(20) + "The sky turned purple. " +
        N(21) + "Then a dark shape slipped out of the window and dipped over the yard, flicking left, then right, then straight up after something Deshawn could not see. " +
        N(22) + "It never touched a branch, a wire, or the edge of the roof. " +
        N(23) + "\"It's dodging things it can't even see,\" he said. " +
        N(24) + "\"It hears them,\" Gran said. " +
        N(25) + "\"It calls out and listens for what comes back. " +
        N(26) + "It knows this yard better than you do.\" " +
        N(27) + "Deshawn watched the bat weave between the clothesline and the maple without slowing down, then loop back over the garden and vanish into the dark. " +
        N(28) + "He thought about how he bumped into the kitchen chair every night in the dark. " +
        N(29) + "\"Can we leave the window open?\" he asked. " +
        N(30) + "\"It eats mosquitoes by the hundred,\" Gran said. " +
        N(31) + "\"I was never going to close it.\"</p>",
      claims: [
        {
          id: "main1",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "main1-b",
          stem: "Which statement best expresses the main idea of \"Not Blind at All\"?",
          choices: [
            { letter: "A", text: "Fruit bats have the best eyesight of all animals." },
            { letter: "B", text: "Bats can see, but they hunt at night by listening to echoes." },
            { letter: "C", text: "Scientists have copied bats to design sonar for ships." },
            { letter: "D", text: "Bats are helpful because they eat hundreds of insects an hour." }
          ],
          correct: "B"
        },
        {
          id: "main1-b",
          sol: "RI.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which sentence from \"Not Blind at All\" best supports the main idea in Part A?",
          choices: [
            { letter: "A", text: "Sentence 4: The reason for the myth is simple: bats hunt at night, when eyes alone are not much use, so they rely on a different sense." },
            { letter: "B", text: "Sentence 6: A hunting bat sends out a stream of high, sharp clicks, far too high for human ears." },
            { letter: "C", text: "Sentence 10: A little brown bat can catch hundreds of insects an hour this way, in total darkness, without touching a single twig." },
            { letter: "D", text: "Sentence 11: Echolocation is so precise that scientists have used it as a model for the sonar on ships and for canes that help people who are blind find their way." }
          ],
          correct: "A"
        },
        {
          id: "deshawn",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "deshawn-b",
          stem: "How does Deshawn's view of the bat change in \"The Attic Guest\"?",
          choices: [
            { letter: "A", text: "He starts out afraid of it and ends up wanting it gone." },
            { letter: "B", text: "He starts out sure it is a bird and ends up sure it is a bat." },
            { letter: "C", text: "He expects it to crash around and ends up admiring how it moves." },
            { letter: "D", text: "He thinks it is harmless and ends up worried about mosquitoes." }
          ],
          correct: "C"
        },
        {
          id: "deshawn-b",
          sol: "RL.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which sentence from \"The Attic Guest\" best shows the change described in Part A?",
          choices: [
            { letter: "A", text: "Sentence 16: \"Bats are blind,\" Deshawn said." },
            { letter: "B", text: "Sentence 20: The sky turned purple." },
            { letter: "C", text: "Sentence 24: \"It hears them,\" Gran said." },
            { letter: "D", text: "Sentence 29: \"Can we leave the window open?\" he asked." }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 11, the word precise most nearly means —",
          choices: [
            { letter: "A", text: "loud and high" },
            { letter: "B", text: "exact and accurate" },
            { letter: "C", text: "old and well known" },
            { letter: "D", text: "quick and careless" }
          ],
          correct: "B"
        },
        {
          id: "link",
          sol: "RL.CT.5.8",
          strand: "DSR",
          stem: "Which sentence from \"The Attic Guest\" states an idea that \"Not Blind at All\" explains in more detail?",
          choices: [
            { letter: "A", text: "Sentence 15: His grandmother, who had lived in the house for fifty years, said it was a bat." },
            { letter: "B", text: "Sentence 19: At dusk they sat on the back steps with two cups of lemonade and watched the small window under the roof." },
            { letter: "C", text: "Sentence 25: \"It calls out and listens for what comes back.\"" },
            { letter: "D", text: "Sentence 28: He thought about how he bumped into the kitchen chair every night in the dark." }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "RL.CT.5.8",
          strand: "DSR",
          stem: "Select TWO statements that are true of BOTH texts.",
          choices: [
            { letter: "A", text: "Both texts correct the belief that bats are blind." },
            { letter: "B", text: "Both texts show a bat hunting insects without hitting anything." },
            { letter: "C", text: "Both texts explain how sonar on ships works." },
            { letter: "D", text: "Both texts take place in a grandmother's backyard." }
          ],
          correct: ["A", "B"]
        }
      ]
    },

    /* ───────────── 14. Paired texts (letter + reply) · LONG · level 3 ───────────── */
    {
      id: "nj5-l-paired-compost",
      family: "NJ5",
      title: "Lunch Scraps: Two Letters",
      kind: "Paired texts · RL/RI.5",
      blurb: "A Green Team asks for a cafeteria compost bin; the principal answers with two worries and a deal.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Letter to the Principal</strong></p>" +
        "<p>" + N(1) + "Dear Principal Ortega, " +
        N(2) + "Every day at lunch, our cafeteria throws away food that could become soil. " +
        N(3) + "Last Tuesday, the fifth-grade Green Team counted what went into the trash cans during one lunch period. " +
        N(4) + "We found 212 apple cores, banana peels, and orange rinds, along with dozens of half-eaten sandwiches. " +
        N(5) + "All of it went to the dumpster, and from there to a landfill, where it will sit in plastic bags for years. " +
        N(6) + "We are asking the school to put one compost bin in the cafeteria, next to the trash cans. " +
        N(7) + "Fruit scraps and paper napkins would go in the bin. " +
        N(8) + "The Green Team would empty it each afternoon into the compost tumbler behind the garden, and by spring we would have rich, dark soil for the raised beds. " +
        N(9) + "Some people may say students will put the wrong things in the bin. " +
        N(10) + "We have a plan for that. " +
        N(11) + "We would make a large picture chart, and two Green Team members would stand by the bin during the first two weeks to help. " +
        N(12) + "Other schools in our district already do this, and their custodians report less trash, not more mess. " +
        N(13) + "Composting turns a problem into a resource. " +
        N(14) + "We hope you will say yes. " +
        N(15) + "Sincerely, the Fifth-Grade Green Team</p>" +
        "<p><strong>Text 2 — The Principal's Reply</strong></p>" +
        "<p>" + N(16) + "Dear Green Team, " +
        N(17) + "Thank you for counting, and for writing. " +
        N(18) + "I agree that 212 pieces of fruit in one lunch period is a lot to throw away, and I like the idea of turning scraps into soil for the garden. " +
        N(19) + "Before I say yes, I want to explain two worries. " +
        N(20) + "The first is smell. " +
        N(21) + "Fruit scraps that sit in a warm cafeteria all day will begin to rot, and our cafeteria is warm. " +
        N(22) + "The second is time. " +
        N(23) + "Mr. Fiore, our custodian, already has more to do than hours to do it in, and I cannot promise that a full bin will always be emptied on schedule. " +
        N(24) + "Here is what I can offer. " +
        N(25) + "We will try the compost bin for one month, during the fifth-grade lunch period only. " +
        N(26) + "The bin must have a tight lid, and it must be emptied before 1:00 each day by a Green Team member, not by Mr. Fiore. " +
        N(27) + "At the end of the month, I would like a short report: how much was collected, how many mistakes went into the bin, and whether anyone complained about the smell. " +
        N(28) + "If the report is good, we will add the other lunch periods. " +
        N(29) + "You have already done the hardest part, which is paying attention. " +
        N(30) + "Let's see if the rest can work too. " +
        N(31) + "Sincerely, Principal Ortega</p>",
      claims: [
        {
          id: "request",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "request-b",
          stem: "What is the Green Team's main request in \"Letter to the Principal\"?",
          choices: [
            { letter: "A", text: "that the cafeteria stop serving fruit that students do not finish" },
            { letter: "B", text: "that students be allowed to eat lunch in the garden" },
            { letter: "C", text: "that the school place a compost bin in the cafeteria for scraps" },
            { letter: "D", text: "that the custodian empty the trash cans more often" }
          ],
          correct: "C"
        },
        {
          id: "request-b",
          sol: "RI.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which sentence from \"Letter to the Principal\" best states the request in Part A?",
          choices: [
            { letter: "A", text: "Sentence 2: Every day at lunch, our cafeteria throws away food that could become soil." },
            { letter: "B", text: "Sentence 6: We are asking the school to put one compost bin in the cafeteria, next to the trash cans." },
            { letter: "C", text: "Sentence 11: We would make a large picture chart, and two Green Team members would stand by the bin during the first two weeks to help." },
            { letter: "D", text: "Sentence 14: We hope you will say yes." }
          ],
          correct: "B"
        },
        {
          id: "decision",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "decision-b",
          stem: "What does the principal decide in \"The Principal's Reply\"?",
          choices: [
            { letter: "A", text: "to refuse the bin because the cafeteria is too warm" },
            { letter: "B", text: "to allow a one-month trial with rules attached" },
            { letter: "C", text: "to put compost bins in every lunch period right away" },
            { letter: "D", text: "to ask Mr. Fiore to empty the bin each afternoon" }
          ],
          correct: "B"
        },
        {
          id: "decision-b",
          sol: "RI.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which sentence from \"The Principal's Reply\" best supports the answer to Part A about the decision?",
          choices: [
            { letter: "A", text: "Sentence 18: I agree that 212 pieces of fruit in one lunch period is a lot to throw away, and I like the idea of turning scraps into soil for the garden." },
            { letter: "B", text: "Sentence 21: Fruit scraps that sit in a warm cafeteria all day will begin to rot, and our cafeteria is warm." },
            { letter: "C", text: "Sentence 25: We will try the compost bin for one month, during the fifth-grade lunch period only." },
            { letter: "D", text: "Sentence 29: You have already done the hardest part, which is paying attention." }
          ],
          correct: "C"
        },
        {
          id: "support",
          sol: "RI.AA.5.7",
          strand: "RI",
          stem: "How does the Green Team support its claim that a compost bin will not create a mess?",
          choices: [
            { letter: "A", text: "by counting the fruit scraps thrown away in one lunch period" },
            { letter: "B", text: "by describing how long trash sits in a landfill" },
            { letter: "C", text: "by promising rich soil for the raised beds by spring" },
            { letter: "D", text: "by pointing to other schools where custodians report less trash" }
          ],
          correct: "D"
        },
        {
          id: "respond",
          sol: "RI.CT.5.8",
          strand: "DSR",
          stem: "Which statement best describes how Text 2 responds to Text 1?",
          choices: [
            { letter: "A", text: "It accepts part of the plan and adds conditions to test whether it works." },
            { letter: "B", text: "It rejects the plan and suggests a completely different project." },
            { letter: "C", text: "It agrees with every part of the plan without any changes." },
            { letter: "D", text: "It ignores the plan and asks the Green Team to count again." }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "RI.CT.5.8",
          strand: "DSR",
          stem: "Select TWO statements that are supported by BOTH letters.",
          choices: [
            { letter: "A", text: "The scraps counted on Tuesday added up to more than two hundred pieces of fruit." },
            { letter: "B", text: "The custodian will empty the compost bin every afternoon." },
            { letter: "C", text: "Both writers believe the scraps could be useful to the garden." },
            { letter: "D", text: "Both writers want the bin used in every lunch period from the start." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 13, the word resource most nearly means —",
          choices: [
            { letter: "A", text: "something that is thrown away" },
            { letter: "B", text: "something useful" },
            { letter: "C", text: "a kind of garden tool" },
            { letter: "D", text: "a written report" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
