/* SOL Labyrinth — NJ5 (NJSLA-ELA grade 5) literature and poetry packs, strand RL.
 * Six short stories and two poems with Evidence-Based Selected Response pairs.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── LEVEL 1 ───────────────────────── */
    {
      id: "nj5-rl-rain-garden",
      family: "NJ5",
      title: "The Rain Garden",
      kind: "Literature · RL.5",
      blurb: "A flooded driveway, a grandfather, and a garden that drinks the rain.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every time it rained hard, the water rushed down Maple Street and pooled at the bottom of Priya's driveway. " +
        N(2) + "It left a muddy lake that took two days to dry. " +
        N(3) + "\"The street is a river again,\" Priya said, staring out the window. " +
        N(4) + "Her grandfather, Raj, put down his tea. " +
        N(5) + "\"Then let's give the water somewhere better to go,\" he said.</p>" +
        "<p>" + N(6) + "On Saturday they drove to the garden store. " +
        N(7) + "Grandpa Raj bought plants with long roots and a bag of small stones. " +
        N(8) + "He explained that they would build a rain garden, a shallow dip in the yard that catches water and lets it soak slowly into the ground. " +
        N(9) + "Priya was not sure a few plants could stop a whole street of water.</p>" +
        "<p>" + N(10) + "They dug for most of the afternoon. " +
        N(11) + "Priya's arms ached, and her sneakers were caked with mud. " +
        N(12) + "Grandpa Raj showed her how to place the stones so the water would spread out instead of racing through. " +
        N(13) + "By dinner, the yard had a wide, gentle bowl filled with green shoots.</p>" +
        "<p>" + N(14) + "The next storm came on Tuesday. " +
        N(15) + "Priya pressed her nose to the glass and waited. " +
        N(16) + "Water ran down Maple Street, turned into the yard, and settled into the garden. " +
        N(17) + "The plants bent but did not wash away. " +
        N(18) + "By morning, the driveway was dry. " +
        N(19) + "\"It worked,\" Priya whispered. " +
        N(20) + "Grandpa Raj smiled. " +
        N(21) + "\"Water is not the problem,\" he said. " +
        N(22) + "\"It just needs a place to rest.\"</p>",
      claims: [
        {
          id: "lesson",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "lesson-b",
          stem: "Which statement best tells a lesson of the story?",
          choices: [
            { letter: "A", text: "Storms cause more trouble than they are worth." },
            { letter: "B", text: "A problem can be solved by working with it instead of against it." },
            { letter: "C", text: "Grandparents always know more than children about gardens." },
            { letter: "D", text: "It is better to wait for a problem to fix itself." }
          ],
          correct: "B"
        },
        {
          id: "lesson-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence from the story best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 2: It left a muddy lake that took two days to dry." },
            { letter: "B", text: "Sentence 9: Priya was not sure a few plants could stop a whole street of water." },
            { letter: "C", text: "Sentence 14: The next storm came on Tuesday." },
            { letter: "D", text: "Sentence 22: \"It just needs a place to rest.\"" }
          ],
          correct: "D"
        },
        {
          id: "feeling",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "feeling-b",
          stem: "How does Priya feel about the rain garden at the start of the project?",
          choices: [
            { letter: "A", text: "She doubts that it will make a difference." },
            { letter: "B", text: "She is certain it will keep the driveway dry." },
            { letter: "C", text: "She is angry that she has to dig all afternoon." },
            { letter: "D", text: "She is excited to choose the plants herself." }
          ],
          correct: "A"
        },
        {
          id: "feeling-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best shows how Priya feels in Part A?",
          choices: [
            { letter: "A", text: "Sentence 3: \"The street is a river again,\" Priya said, staring out the window." },
            { letter: "B", text: "Sentence 9: Priya was not sure a few plants could stop a whole street of water." },
            { letter: "C", text: "Sentence 11: Priya's arms ached, and her sneakers were caked with mud." },
            { letter: "D", text: "Sentence 15: Priya pressed her nose to the glass and waited." }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 11, the word caked most nearly means —",
          choices: [
            { letter: "A", text: "washed clean" },
            { letter: "B", text: "sprinkled lightly" },
            { letter: "C", text: "covered thickly" },
            { letter: "D", text: "torn apart" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "How does the last paragraph (sentences 14–22) fit with the first paragraph (sentences 1–5)?",
          choices: [
            { letter: "A", text: "It describes a new problem that Priya's family must solve next." },
            { letter: "B", text: "It explains why Grandpa Raj knows so much about plants." },
            { letter: "C", text: "It repeats the same events in the same order as the first paragraph." },
            { letter: "D", text: "It shows the same kind of storm with a different result." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "nj5-rl-missing-owl",
      family: "NJ5",
      title: "The Case of the Missing Owl",
      kind: "Literature · RL.5",
      blurb: "Room 12's stuffed owl vanishes, and Mateo follows the clues.",
      level: 1,
      passage:
        "<p>" + N(1) + "Room 12 had a class mascot, a stuffed owl named Professor Hoot. " +
        N(2) + "He sat on the bookshelf and wore a tiny paper hat that the class made for him. " +
        N(3) + "On Monday morning, the bookshelf was empty. " +
        N(4) + "\"Professor Hoot is gone!\" Lena cried. " +
        N(5) + "Everyone started talking at once.</p>" +
        "<p>" + N(6) + "Mateo liked mysteries, so he took out his notebook. " +
        N(7) + "\"Let's look for clues,\" he said. " +
        N(8) + "First, he checked the floor under the shelf. " +
        N(9) + "He found a bit of purple yarn. " +
        N(10) + "Professor Hoot was brown and white, so the yarn did not come from him. " +
        N(11) + "Next, Mateo asked the custodian, Mr. Okoro, if he had moved the owl. " +
        N(12) + "Mr. Okoro shook his head. " +
        N(13) + "\"But the kindergarten class borrowed some books from your shelf on Friday,\" he said.</p>" +
        "<p>" + N(14) + "That was a lead, a clue that pointed somewhere new. " +
        N(15) + "At lunch, Mateo and Lena walked to the kindergarten room. " +
        N(16) + "There, on a tiny chair, sat Professor Hoot. " +
        N(17) + "He was wearing a purple yarn scarf. " +
        N(18) + "A small boy named Eli was reading to him.</p>" +
        "<p>" + N(19) + "\"He looked lonely with the books gone,\" Eli explained. " +
        N(20) + "\"So I made him a scarf.\"</p>" +
        "<p>" + N(21) + "Mateo laughed. " +
        N(22) + "He did not have the heart to take the owl back right away. " +
        N(23) + "Instead, the two classes made a plan. " +
        N(24) + "Professor Hoot would spend one week in each room. " +
        N(25) + "The mystery was solved, and the owl had two homes.</p>",
      claims: [
        {
          id: "trait",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "trait-b",
          stem: "Which word best describes Mateo in the story?",
          choices: [
            { letter: "A", text: "curious" },
            { letter: "B", text: "careless" },
            { letter: "C", text: "nervous" },
            { letter: "D", text: "bossy" }
          ],
          correct: "A"
        },
        {
          id: "trait-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the answer to Part A about Mateo?",
          choices: [
            { letter: "A", text: "Sentence 4: \"Professor Hoot is gone!\" Lena cried." },
            { letter: "B", text: "Sentence 6: Mateo liked mysteries, so he took out his notebook." },
            { letter: "C", text: "Sentence 13: \"But the kindergarten class borrowed some books from your shelf on Friday,\" he said." },
            { letter: "D", text: "Sentence 22: He did not have the heart to take the owl back right away." }
          ],
          correct: "B"
        },
        {
          id: "mostly",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "mostly-b",
          stem: "Which statement best tells what the story is mostly about?",
          choices: [
            { letter: "A", text: "A kindergarten boy makes a scarf for a lonely owl." },
            { letter: "B", text: "A custodian helps two classes trade their books." },
            { letter: "C", text: "A class finds its lost mascot and learns to share it." },
            { letter: "D", text: "A boy decides he wants to be a detective someday." }
          ],
          correct: "C"
        },
        {
          id: "mostly-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports what the story is mostly about?",
          choices: [
            { letter: "A", text: "Sentence 2: He sat on the bookshelf and wore a tiny paper hat that the class made for him." },
            { letter: "B", text: "Sentence 9: He found a bit of purple yarn." },
            { letter: "C", text: "Sentence 18: A small boy named Eli was reading to him." },
            { letter: "D", text: "Sentence 24: Professor Hoot would spend one week in each room." }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 14, the word lead most nearly means —",
          choices: [
            { letter: "A", text: "a heavy gray metal" },
            { letter: "B", text: "a piece of helpful information" },
            { letter: "C", text: "the person in charge of a group" },
            { letter: "D", text: "a leash for walking a dog" }
          ],
          correct: "B"
        },
        {
          id: "craft",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "The author includes sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "explain why the owl was brown and white" },
            { letter: "B", text: "show that Mateo is careless with clues" },
            { letter: "C", text: "hint that the yarn came from somewhere else" },
            { letter: "D", text: "describe the paper hat the class made" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "nj5-rl-snow-money",
      family: "NJ5",
      title: "Snow Money",
      kind: "Literature · RL.5",
      blurb: "Kenji's first shoveling job teaches him what finished really means.",
      level: 1,
      passage:
        "<p>" + N(1) + "The first big snow of the year fell on a Friday night. " +
        N(2) + "Kenji woke up to a white yard and a plan. " +
        N(3) + "He wanted a new skateboard, and shoveling driveways could pay for it. " +
        N(4) + "He pulled on his boots, grabbed the shovel, and knocked on his neighbor's door.</p>" +
        "<p>" + N(5) + "Mrs. Abara answered in her slippers. " +
        N(6) + "\"Ten dollars for the driveway and the walk,\" Kenji said. " +
        N(7) + "\"Deal,\" she said, \"but do the steps too. I have a bad knee.\"</p>" +
        "<p>" + N(8) + "The snow was heavy and wet. " +
        N(9) + "After twenty minutes, Kenji's back hurt and his gloves were soaked. " +
        N(10) + "He cleared a narrow path to the car and stopped. " +
        N(11) + "It was good enough, he decided. " +
        N(12) + "He rang the bell to collect his money.</p>" +
        "<p>" + N(13) + "Mrs. Abara looked at the driveway for a long moment. " +
        N(14) + "Then she pointed at the steps, still buried under snow. " +
        N(15) + "\"How will I get to that path?\" she asked. " +
        N(16) + "Kenji felt his face grow hot. " +
        N(17) + "He had forgotten the steps, and the path was too thin for anyone to use.</p>" +
        "<p>" + N(18) + "He did not argue. " +
        N(19) + "He went back to work. " +
        N(20) + "This time he cleared every step and widened the path so two people could walk side by side. " +
        N(21) + "When he finished, Mrs. Abara handed him fifteen dollars instead of ten. " +
        N(22) + "\"The extra is for coming back,\" she said. " +
        N(23) + "Kenji walked home tired but proud. " +
        N(24) + "The skateboard was still far away, but he had learned something worth more than five dollars.</p>",
      claims: [
        {
          id: "lesson",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "lesson-b",
          stem: "Which statement best tells a lesson Kenji learns?",
          choices: [
            { letter: "A", text: "A job is not finished until it is done well." },
            { letter: "B", text: "Neighbors should pay more when the snow is heavy." },
            { letter: "C", text: "Saving for a skateboard takes a very long time." },
            { letter: "D", text: "It is smart to stop working when you feel tired." }
          ],
          correct: "A"
        },
        {
          id: "lesson-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the lesson Kenji learns in Part A?",
          choices: [
            { letter: "A", text: "Sentence 3: He wanted a new skateboard, and shoveling driveways could pay for it." },
            { letter: "B", text: "Sentence 9: After twenty minutes, Kenji's back hurt and his gloves were soaked." },
            { letter: "C", text: "Sentence 20: This time he cleared every step and widened the path so two people could walk side by side." },
            { letter: "D", text: "Sentence 21: When he finished, Mrs. Abara handed him fifteen dollars instead of ten." }
          ],
          correct: "C"
        },
        {
          id: "hot",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "hot-b",
          stem: "Why does Kenji's face grow hot in sentence 16?",
          choices: [
            { letter: "A", text: "He is angry that Mrs. Abara will not pay him." },
            { letter: "B", text: "He is warm from shoveling the heavy, wet snow." },
            { letter: "C", text: "He is worried that his gloves are soaked through." },
            { letter: "D", text: "He is embarrassed that he did a poor job." }
          ],
          correct: "D"
        },
        {
          id: "hot-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best shows why Kenji feels this way?",
          choices: [
            { letter: "A", text: "Sentence 7: \"Deal,\" she said, \"but do the steps too. I have a bad knee.\"" },
            { letter: "B", text: "Sentence 17: He had forgotten the steps, and the path was too thin for anyone to use." },
            { letter: "C", text: "Sentence 13: Mrs. Abara looked at the driveway for a long moment." },
            { letter: "D", text: "Sentence 22: \"The extra is for coming back,\" she said." }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 10, the word narrow most nearly means —",
          choices: [
            { letter: "A", text: "very thin" },
            { letter: "B", text: "very long" },
            { letter: "C", text: "very icy" },
            { letter: "D", text: "very crooked" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "RL.PP.5.5",
          strand: "RL",
          stem: "The story is told from the point of view of —",
          choices: [
            { letter: "A", text: "Kenji, who tells about his own day" },
            { letter: "B", text: "Mrs. Abara, who watches from her window" },
            { letter: "C", text: "a friend of Kenji who wants a skateboard" },
            { letter: "D", text: "a narrator who is not part of the story" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── LEVEL 2 ───────────────────────── */
    {
      id: "nj5-rl-bridge-broke",
      family: "NJ5",
      title: "The Bridge That Broke",
      kind: "Literature · RL.5",
      blurb: "Amara's science fair bridge collapses in front of the judges.",
      level: 2,
      passage:
        "<p>" + N(1) + "Amara had spent three weeks on her science fair project. " +
        N(2) + "It was a bridge made of craft sticks and glue, and it was supposed to hold twenty pounds of books. " +
        N(3) + "She had tested it twice in her kitchen. " +
        N(4) + "Both times, it held. " +
        N(5) + "Her poster was neat, her notes were ready, and her bridge sat on the table like a small wooden champion.</p>" +
        "<p>" + N(6) + "The judges arrived at her table at ten o'clock. " +
        N(7) + "Amara stacked the books one at a time. " +
        N(8) + "At fifteen pounds, the bridge gave a sharp crack. " +
        N(9) + "At sixteen, it folded in the middle and the books slid onto the floor.</p>" +
        "<p>" + N(10) + "For a moment, the gym seemed silent. " +
        N(11) + "Amara wanted to crawl under the table. " +
        N(12) + "Instead, she picked up a broken piece and looked at it closely. " +
        N(13) + "The glue on the middle joint was thin and shiny, not thick and cloudy like the others. " +
        N(14) + "She had rushed that joint the night before the fair.</p>" +
        "<p>" + N(15) + "\"Tell us what happened,\" said one judge. " +
        N(16) + "Amara took a breath. " +
        N(17) + "She explained that the middle joint was the weak point, and she showed the judges the difference in the glue. " +
        N(18) + "She described how she would build the next bridge with stronger joints and more drying time.</p>" +
        "<p>" + N(19) + "The judges wrote for a long time. " +
        N(20) + "When the ribbons were handed out, Amara did not win first place. " +
        N(21) + "But her card had a note from Mr. Delgado, the head judge. " +
        N(22) + "\"Anyone can show a bridge that works,\" it said. " +
        N(23) + "\"Only a real scientist can explain one that doesn't.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "theme-b",
          stem: "Which statement best expresses a theme of Amara's story?",
          choices: [
            { letter: "A", text: "Winning first place is the only way to prove you are a scientist." },
            { letter: "B", text: "Understanding a failure can be as valuable as a success." },
            { letter: "C", text: "Projects should be tested many times before a science fair." },
            { letter: "D", text: "Judges care more about posters than about experiments." }
          ],
          correct: "B"
        },
        {
          id: "theme-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the theme chosen in Part A?",
          choices: [
            { letter: "A", text: "Sentence 3: She had tested it twice in her kitchen." },
            { letter: "B", text: "Sentence 11: Amara wanted to crawl under the table." },
            { letter: "C", text: "Sentence 20: When the ribbons were handed out, Amara did not win first place." },
            { letter: "D", text: "Sentence 23: \"Only a real scientist can explain one that doesn't.\"" }
          ],
          correct: "D"
        },
        {
          id: "respond",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "respond-b",
          stem: "How does Amara respond when the bridge breaks?",
          choices: [
            { letter: "A", text: "She blames the judges for stacking the books too fast." },
            { letter: "B", text: "She hides under the table until the judges leave." },
            { letter: "C", text: "She studies the broken piece to find out what went wrong." },
            { letter: "D", text: "She asks Mr. Delgado to let her test the bridge again." }
          ],
          correct: "C"
        },
        {
          id: "respond-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the answer to Part A about Amara?",
          choices: [
            { letter: "A", text: "Sentence 5: Her poster was neat, her notes were ready, and her bridge sat on the table like a small wooden champion." },
            { letter: "B", text: "Sentence 12: Instead, she picked up a broken piece and looked at it closely." },
            { letter: "C", text: "Sentence 16: Amara took a breath." },
            { letter: "D", text: "Sentence 19: The judges wrote for a long time." }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 13, the word joint most nearly means —",
          choices: [
            { letter: "A", text: "a place where two parts are connected" },
            { letter: "B", text: "a thick layer of shiny paint" },
            { letter: "C", text: "the strongest stick in a bridge" },
            { letter: "D", text: "the sound of wood breaking" }
          ],
          correct: "A"
        },
        {
          id: "figurative",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 5, the author compares the bridge to a small wooden champion to show that —",
          choices: [
            { letter: "A", text: "the bridge was built to look like a trophy" },
            { letter: "B", text: "the bridge was the biggest one at the fair" },
            { letter: "C", text: "Amara had won the science fair before" },
            { letter: "D", text: "Amara felt sure that her bridge would succeed" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "nj5-rl-goalie",
      family: "NJ5",
      title: "Nobody Wants the Net",
      kind: "Literature · RL.5",
      blurb: "Rosa never wanted to be goalie, until a teammate shows her a trick.",
      level: 2,
      passage:
        "<p>" + N(1) + "Nobody on the Tigers wanted to be goalie. " +
        N(2) + "Everyone wanted to score. " +
        N(3) + "So when Coach Ferris asked for a volunteer, I looked at my cleats and hoped she would pick someone else. " +
        N(4) + "She picked me.</p>" +
        "<p>" + N(5) + "\"Rosa, you have quick hands,\" she said. " +
        N(6) + "I did not feel quick. " +
        N(7) + "I felt like a target.</p>" +
        "<p>" + N(8) + "The first game was a disaster. " +
        N(9) + "I let in four goals, and two of them rolled right between my legs. " +
        N(10) + "On the bus home, my teammate Jun sat next to me. " +
        N(11) + "\"You know what I noticed?\" he said. " +
        N(12) + "\"You keep looking at the ball. Try looking at the kicker's hips. The hips tell you where the ball is going before the foot does.\"</p>" +
        "<p>" + N(13) + "I thought that sounded ridiculous. " +
        N(14) + "But at practice, I tried it. " +
        N(15) + "Jun kicked twenty shots at me, I watched his hips, and I stopped eleven of them. " +
        N(16) + "The week before, I had stopped three.</p>" +
        "<p>" + N(17) + "At the next game, I still let in one goal. " +
        N(18) + "But I also dove left before the ball left the kicker's foot and knocked it away. " +
        N(19) + "My teammates yelled my name. " +
        N(20) + "It was the loudest sound I had ever heard.</p>" +
        "<p>" + N(21) + "I still do not love being goalie. " +
        N(22) + "I would rather score. " +
        N(23) + "But I have learned that the net is not a punishment. " +
        N(24) + "It is a puzzle, and I am getting better at solving it.</p>",
      claims: [
        {
          id: "pov",
          sol: "RL.PP.5.5",
          strand: "RL",
          stem: "How does telling the story from Rosa's point of view help the reader?",
          choices: [
            { letter: "A", text: "It lets the reader know Rosa's private feelings about being goalie." },
            { letter: "B", text: "It explains what Coach Ferris thinks about every player on the team." },
            { letter: "C", text: "It shows what Jun was doing during the whole first game." },
            { letter: "D", text: "It describes the entire season from the first game to the last." }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "change-b",
          stem: "How does Rosa change from the beginning of the story to the end?",
          choices: [
            { letter: "A", text: "She goes from loving goalie to wanting to score instead." },
            { letter: "B", text: "She goes from feeling like a target to seeing the net as a puzzle." },
            { letter: "C", text: "She goes from being the best scorer to being the best goalie." },
            { letter: "D", text: "She goes from ignoring Jun's advice to giving him advice." }
          ],
          correct: "B"
        },
        {
          id: "change-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which pair of sentences best shows the change described in Part A?",
          choices: [
            { letter: "A", text: "Sentences 1 and 2: Nobody on the Tigers wanted to be goalie. Everyone wanted to score." },
            { letter: "B", text: "Sentences 9 and 15: I let in four goals, and two of them rolled right between my legs. Jun kicked twenty shots at me, I watched his hips, and I stopped eleven of them." },
            { letter: "C", text: "Sentences 21 and 22: I still do not love being goalie. I would rather score." },
            { letter: "D", text: "Sentences 7 and 24: I felt like a target. It is a puzzle, and I am getting better at solving it." }
          ],
          correct: "D"
        },
        {
          id: "lesson",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "lesson-b",
          stem: "Which statement best tells a lesson of Rosa's story?",
          choices: [
            { letter: "A", text: "The best players always play the position they love most." },
            { letter: "B", text: "Good advice can turn a hard job into one you can handle." },
            { letter: "C", text: "Quick hands are the most important skill for a goalie." },
            { letter: "D", text: "Teammates should sit alone on the bus after a loss." }
          ],
          correct: "B"
        },
        {
          id: "lesson-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the lesson chosen in Part A?",
          choices: [
            { letter: "A", text: "Sentence 3: So when Coach Ferris asked for a volunteer, I looked at my cleats and hoped she would pick someone else." },
            { letter: "B", text: "Sentence 13: I thought that sounded ridiculous." },
            { letter: "C", text: "Sentence 15: Jun kicked twenty shots at me, I watched his hips, and I stopped eleven of them." },
            { letter: "D", text: "Sentence 21: I still do not love being goalie." }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 8, the word disaster most nearly means —",
          choices: [
            { letter: "A", text: "a big success" },
            { letter: "B", text: "a close game" },
            { letter: "C", text: "a terrible failure" },
            { letter: "D", text: "a long trip" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "nj5-rl-poem-bus-window",
      family: "NJ5",
      title: "Bus Window",
      kind: "Poetry · RL.5",
      blurb: "A poem about frost, a thumbprint, and a window on a winter bus.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The bus is cold on winter mornings,<br>" +
        L(2) + "and the window wears a coat of frost.<br>" +
        L(3) + "I press my thumb against the glass<br>" +
        L(4) + "and melt a little door to the world.<br>" +
        L(5) + "Through it, the houses slide by slowly,<br>" +
        L(6) + "still yawning, with their porch lights on.<br>" +
        L(7) + "A dog in a red sweater trots past.<br>" +
        L(8) + "A crossing guard waves her orange flag.<br>" +
        L(9) + "By the time we reach the school,<br>" +
        L(10) + "my little door has grown wide open,<br>" +
        L(11) + "and the whole street is looking in<br>" +
        L(12) + "at forty kids in puffy coats.<br>" +
        L(13) + "I leave my thumbprint on the window,<br>" +
        L(14) + "a key for whoever sits here next." +
        "</p>",
      claims: [
        {
          id: "frost",
          sol: "L.VI.5.3",
          strand: "RV",
          partB: "frost-b",
          stem: "In line 2, the poet says the window wears a coat of frost mainly to show that —",
          choices: [
            { letter: "A", text: "the frost covers the whole window like clothing" },
            { letter: "B", text: "the bus heater keeps the window warm" },
            { letter: "C", text: "the speaker is wearing a heavy winter coat" },
            { letter: "D", text: "the window is cracked and lets in the cold" }
          ],
          correct: "A"
        },
        {
          id: "frost-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which line best shows what the coat of frost does to the window?",
          choices: [
            { letter: "A", text: "Line 4: and melt a little door to the world." },
            { letter: "B", text: "Line 6: still yawning, with their porch lights on." },
            { letter: "C", text: "Line 8: A crossing guard waves her orange flag." },
            { letter: "D", text: "Line 12: at forty kids in puffy coats." }
          ],
          correct: "A"
        },
        {
          id: "door",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "door-b",
          stem: "The speaker calls the melted spot a door (lines 4, 10, and 14) mainly because it —",
          choices: [
            { letter: "A", text: "lets cold air into the bus" },
            { letter: "B", text: "gives the speaker a way to see the world outside" },
            { letter: "C", text: "is shaped like the front door of a house" },
            { letter: "D", text: "is where the driver lets students off" }
          ],
          correct: "B"
        },
        {
          id: "door-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which line best supports the answer to Part A about the door?",
          choices: [
            { letter: "A", text: "Line 1: The bus is cold on winter mornings," },
            { letter: "B", text: "Line 5: Through it, the houses slide by slowly," },
            { letter: "C", text: "Line 8: A crossing guard waves her orange flag." },
            { letter: "D", text: "Line 13: I leave my thumbprint on the window," }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "How do lines 9–12 change what is happening in the poem?",
          choices: [
            { letter: "A", text: "The bus arrives late, and the speaker misses the start of school." },
            { letter: "B", text: "The speaker stops looking outside and starts drawing on the glass." },
            { letter: "C", text: "The view opens up, and now the street looks in at the kids." },
            { letter: "D", text: "The frost returns and covers the whole window again." }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "RL.PP.5.5",
          strand: "RL",
          stem: "Which statement best describes the speaker's attitude toward the bus ride?",
          choices: [
            { letter: "A", text: "bored, because the same houses go by every day" },
            { letter: "B", text: "worried about arriving late to school" },
            { letter: "C", text: "annoyed by the cold and the crowded seats" },
            { letter: "D", text: "curious and playful about the world outside" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── LEVEL 3 ───────────────────────── */
    {
      id: "nj5-rl-map-wall",
      family: "NJ5",
      title: "The Map on the Wall",
      kind: "Literature · RL.5",
      blurb: "A new kid, a hand-drawn map, and a block with room for one more name.",
      level: 3,
      passage:
        "<p>" + N(1) + "The moving truck left on a gray Sunday, and Dmitri stood on the porch of a house that did not feel like his. " +
        N(2) + "The street was quiet. " +
        N(3) + "Every window on the block seemed to be looking at him.</p>" +
        "<p>" + N(4) + "Across the street, an old woman was sweeping her steps. " +
        N(5) + "She waved with the broom. " +
        N(6) + "Dmitri waved back, mostly because his mother was watching.</p>" +
        "<p>" + N(7) + "Her name was Mrs. Okafor, and by Wednesday she had invited him over for lemonade. " +
        N(8) + "On her kitchen wall hung a large sheet of paper covered in pencil lines. " +
        N(9) + "It was a map of the block, drawn by hand. " +
        N(10) + "Each house had a name written on it in careful letters. " +
        N(11) + "Some names were crossed out, and new names were written above them.</p>" +
        "<p>" + N(12) + "\"I have lived here forty years,\" Mrs. Okafor said. " +
        N(13) + "\"People come and go. I like to remember them.\"</p>" +
        "<p>" + N(14) + "Dmitri found his own house on the map. " +
        N(15) + "The name on it, Ramirez, was crossed out. " +
        N(16) + "Nothing was written above it.</p>" +
        "<p>" + N(17) + "\"I have not met the new family yet,\" Mrs. Okafor said, and she held out a pencil.</p>" +
        "<p>" + N(18) + "Dmitri hesitated, then wrote his last name in small letters. " +
        N(19) + "Next to it, without quite knowing why, he drew a tiny bicycle.</p>" +
        "<p>" + N(20) + "Mrs. Okafor studied the map. " +
        N(21) + "\"Now the block is complete again,\" she said.</p>" +
        "<p>" + N(22) + "That evening, Dmitri sat on the porch. " +
        N(23) + "The street was still quiet, and the windows still faced him. " +
        N(24) + "But now he could imagine the names inside each house. " +
        N(25) + "The block did not feel like his yet. " +
        N(26) + "It felt like a place that had room for him.</p>",
      claims: [
        {
          id: "theme",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "theme-b",
          stem: "Which statement best expresses a theme of Dmitri's story?",
          choices: [
            { letter: "A", text: "Moving to a new town is always harder for children than for adults." },
            { letter: "B", text: "A place begins to feel like home when someone makes room for you in it." },
            { letter: "C", text: "Old maps are more useful than new maps for finding a house." },
            { letter: "D", text: "Neighbors should always keep a record of who lives on their block." }
          ],
          correct: "B"
        },
        {
          id: "theme-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the theme in Part A?",
          choices: [
            { letter: "A", text: "Sentence 3: Every window on the block seemed to be looking at him." },
            { letter: "B", text: "Sentence 11: Some names were crossed out, and new names were written above them." },
            { letter: "C", text: "Sentence 12: \"I have lived here forty years,\" Mrs. Okafor said." },
            { letter: "D", text: "Sentence 26: It felt like a place that had room for him." }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "How does the ending of the story (sentences 22–26) relate to its beginning (sentences 1–3)?",
          choices: [
            { letter: "A", text: "It repeats the same details to show that Dmitri's feelings have changed." },
            { letter: "B", text: "It introduces a new problem that Dmitri must solve on his own." },
            { letter: "C", text: "It describes a different street where Dmitri feels more at home." },
            { letter: "D", text: "It explains why the moving truck left on a gray Sunday." }
          ],
          correct: "A"
        },
        {
          id: "bicycle",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "bicycle-b",
          stem: "Why does Dmitri most likely draw a tiny bicycle next to his name in sentence 19?",
          choices: [
            { letter: "A", text: "He wants Mrs. Okafor to know he can ride to the store for her." },
            { letter: "B", text: "He is adding a piece of himself to the block, not just a name." },
            { letter: "C", text: "He thinks the map needs pictures to make it easier to read." },
            { letter: "D", text: "He wants to cover up the crossed-out name of the Ramirez family." }
          ],
          correct: "B"
        },
        {
          id: "bicycle-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the answer to Part A about the bicycle?",
          choices: [
            { letter: "A", text: "Sentence 6: Dmitri waved back, mostly because his mother was watching." },
            { letter: "B", text: "Sentence 10: Each house had a name written on it in careful letters." },
            { letter: "C", text: "Sentence 21: \"Now the block is complete again,\" she said." },
            { letter: "D", text: "Sentence 25: The block did not feel like his yet." }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 18, the word hesitated most nearly means —",
          choices: [
            { letter: "A", text: "laughed out loud" },
            { letter: "B", text: "asked for help" },
            { letter: "C", text: "refused completely" },
            { letter: "D", text: "paused before acting" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "nj5-rl-poem-kite",
      family: "NJ5",
      title: "What the Kite Knows",
      kind: "Poetry · RL.5",
      blurb: "A poem about learning to fly a kite by loosening your grip.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My cousin Nadia says a kite is not a toy.<br>" +
        L(2) + "It is a conversation with the wind.<br>" +
        L(3) + "You do not pull. You listen with the string.<br>" +
        L(4) + "When the wind says go, you give it more.<br>" +
        L(5) + "When the wind goes quiet, you reel it in<br>" +
        L(6) + "the way you'd pull a friend back from the road.<br>" +
        L(7) + "The first time, I held on with both fists.<br>" +
        L(8) + "The kite dove twice and hit the field<br>" +
        L(9) + "like a bird that had forgotten how to fly.<br>" +
        L(10) + "Nadia laughed, not at me, but near me,<br>" +
        L(11) + "and put her hands on top of mine.<br>" +
        L(12) + "\"Loosen,\" she said. \"Let the string breathe.\"<br>" +
        L(13) + "I did, and the kite climbed the air,<br>" +
        L(14) + "a red diamond with a long white tail,<br>" +
        L(15) + "and for one long minute the sky held us both,<br>" +
        L(16) + "and I learned that holding tight is not holding on." +
        "</p>",
      claims: [
        {
          id: "message",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "message-b",
          stem: "Which statement best expresses the message of the poem?",
          choices: [
            { letter: "A", text: "Kites are more difficult to fly than most people think." },
            { letter: "B", text: "Sometimes the best way to keep something is to loosen your grip." },
            { letter: "C", text: "A good teacher laughs at students who make mistakes." },
            { letter: "D", text: "The wind is too strong for young people to control." }
          ],
          correct: "B"
        },
        {
          id: "message-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which line best supports the message chosen in Part A?",
          choices: [
            { letter: "A", text: "Line 1: My cousin Nadia says a kite is not a toy." },
            { letter: "B", text: "Line 7: The first time, I held on with both fists." },
            { letter: "C", text: "Line 14: a red diamond with a long white tail," },
            { letter: "D", text: "Line 16: and I learned that holding tight is not holding on." }
          ],
          correct: "D"
        },
        {
          id: "conversation",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In lines 2–3, the poet calls flying a kite a conversation with the wind to suggest that —",
          choices: [
            { letter: "A", text: "the speaker talks out loud to the kite while it flies" },
            { letter: "B", text: "the wind makes a sound like people talking" },
            { letter: "C", text: "the flyer must pay attention and respond to the wind" },
            { letter: "D", text: "Nadia and the speaker argue about the string" }
          ],
          correct: "C"
        },
        {
          id: "nadia",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "nadia-b",
          stem: "What does line 10, Nadia laughed, not at me, but near me, show about Nadia?",
          choices: [
            { letter: "A", text: "She thinks the speaker is not trying hard enough." },
            { letter: "B", text: "She finds the speaker's mistake funny but stays kind." },
            { letter: "C", text: "She is standing too far away to help the speaker." },
            { letter: "D", text: "She is laughing at a joke someone else told." }
          ],
          correct: "B"
        },
        {
          id: "nadia-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which line best supports the answer to Part A about Nadia?",
          choices: [
            { letter: "A", text: "Line 3: You do not pull. You listen with the string." },
            { letter: "B", text: "Line 8: The kite dove twice and hit the field" },
            { letter: "C", text: "Line 11: and put her hands on top of mine." },
            { letter: "D", text: "Line 15: and for one long minute the sky held us both," }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "How does the poem's structure help show the speaker's change?",
          choices: [
            { letter: "A", text: "The first half gives Nadia's advice, and the second half shows the speaker learning to follow it." },
            { letter: "B", text: "Each line repeats the same idea about the wind so the reader will remember it." },
            { letter: "C", text: "The poem starts with the kite in the sky and ends with it on the ground." },
            { letter: "D", text: "The poem lists the parts of a kite in the order they are put together." }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
