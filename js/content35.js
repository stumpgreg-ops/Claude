/* SOL Labyrinth — Grade 9 short packs (VA 9.RL / 9.RI / 9.RV / 9.DSR), expansion file 35:
 * 27 short texts (100–150 words; poems 8–10 lines; paired texts 60–80 words each) about public libraries,
 * a school play backstage, bridges and engineering, and beekeeping. Original text only.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    {
      id: "g9-rl-c35-overdue",
      family: "G9",
      title: "Three Years Late",
      kind: "Literary · 9.RL",
      blurb: "Tomasz finally returns a library book he borrowed at eleven.",
      level: 1,
      passage:
        "<p>" + N(1) + "The book had been under Tomasz's bed for three years, wedged behind a broken skateboard and a box of winter socks. " +
        N(2) + "It was a guide to building birdhouses, and he had borrowed it the summer he was eleven. " +
        N(3) + "Now he stood at the front desk of the Millbrook Public Library, holding it out like a ticket he expected to be refused. " +
        N(4) + "\"I can pay whatever the fine is,\" he said quickly. " +
        N(5) + "Ms. Okafor turned the book over and smiled at the faded due-date stamp. " +
        N(6) + "\"The library stopped charging late fines last spring,\" she said. " +
        N(7) + "\"We would rather have readers back than collect quarters.\" " +
        N(8) + "Tomasz let out a breath he had not known he was holding. " +
        N(9) + "Before he left, he checked out a new book on woodworking, and this time he wrote the due date on his hand." +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Tomasz in sentences 3 and 4?",
          choices: [
            { letter: "A", text: "He is nervous that he will be punished for his mistake." },
            { letter: "B", text: "He is proud of having finally finished the book." },
            { letter: "C", text: "He is annoyed that the library wants the book back." },
            { letter: "D", text: "He is unsure where the library's front desk is." }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 3, Tomasz holds the book out like a ticket he expected to be refused. This comparison mainly shows that he —",
          choices: [
            { letter: "A", text: "is eager to see a show at the library" },
            { letter: "B", text: "expects to be turned away or scolded" },
            { letter: "C", text: "has lost the receipt for the old book" },
            { letter: "D", text: "thinks the book is worth a lot of money" }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentence 7, readers can infer that the library ended late fines mainly because —",
          choices: [
            { letter: "A", text: "the quarters took the staff too long to count" },
            { letter: "B", text: "Ms. Okafor had stopped stamping due dates" },
            { letter: "C", text: "fines kept some readers from coming back" },
            { letter: "D", text: "most books were returned on time anyway" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best supported by Tomasz's visit to the library?",
          choices: [
            { letter: "A", text: "Old books are more valuable than new ones." },
            { letter: "B", text: "Rules should never change once they are made." },
            { letter: "C", text: "Woodworking is a more useful hobby than reading." },
            { letter: "D", text: "Owning up to a mistake can lead to a fresh start." }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The detail in sentence 9 about writing the due date on his hand mainly shows that Tomasz —",
          choices: [
            { letter: "A", text: "dislikes keeping notes on paper" },
            { letter: "B", text: "plans to keep the new book for good" },
            { letter: "C", text: "wants to avoid repeating his mistake" },
            { letter: "D", text: "is trying hard to impress Ms. Okafor" }
          ],
          correct: "C"
        },
        {
          id: "word",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 1, the word wedged most nearly means —",
          choices: [
            { letter: "A", text: "painted over" },
            { letter: "B", text: "squeezed tightly" },
            { letter: "C", text: "hidden on purpose" },
            { letter: "D", text: "thrown away" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c35-waggle",
      family: "G9",
      title: "The Waggle Dance",
      kind: "Informational · 9.RI",
      blurb: "How one honeybee tells her hive where the flowers are.",
      level: 1,
      passage:
        "<p>" + N(1) + "A honeybee that finds a good patch of flowers does not keep the news to herself. " +
        N(2) + "She returns to the hive and performs what scientists call the waggle dance. " +
        N(3) + "Moving in a figure-eight pattern, she shakes her body during the straight middle part of each loop. " +
        N(4) + "The direction of that straight run tells the other bees which way to fly, measured against the position of the sun. " +
        N(5) + "The length of the waggle tells them how far away the flowers are; a longer waggle means a longer trip. " +
        N(6) + "Bees watching in the dark hive follow the dancer closely, feeling her movements with their antennae. " +
        N(7) + "Within minutes, dozens of workers may leave for the same flowers. " +
        N(8) + "In this way, one bee's discovery quickly becomes food for the whole colony." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the central idea of the article about the waggle dance?",
          choices: [
            { letter: "A", text: "Honeybees see best inside a dark hive." },
            { letter: "B", text: "Bees fly farther than most other insects." },
            { letter: "C", text: "Honeybees share where food is through a dance." },
            { letter: "D", text: "The sun is the most important part of a hive." }
          ],
          correct: "C"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, how do the watching bees learn how far away the flowers are?",
          choices: [
            { letter: "A", text: "from the color of the dancer's body" },
            { letter: "B", text: "from the length of the waggle" },
            { letter: "C", text: "from the pollen left on the dancer" },
            { letter: "D", text: "from the number of loops she makes" }
          ],
          correct: "B"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The article on the waggle dance is mainly organized by —",
          choices: [
            { letter: "A", text: "explaining how a process works from start to finish" },
            { letter: "B", text: "comparing honeybees with several other insects" },
            { letter: "C", text: "presenting a problem in the hive and its solution" },
            { letter: "D", text: "arguing for one side of a scientific debate" }
          ],
          correct: "A"
        },
        {
          id: "purpose8",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes sentence 8 about the waggle dance mainly to —",
          choices: [
            { letter: "A", text: "introduce a different kind of bee" },
            { letter: "B", text: "show that the dance is hard to learn" },
            { letter: "C", text: "warn readers to stay away from hives" },
            { letter: "D", text: "explain why the dance matters to the colony" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that the dance gets results quickly?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 6" },
            { letter: "D", text: "sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "phrase",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 4, the phrase measured against the position of the sun means that the direction of flight is —",
          choices: [
            { letter: "A", text: "judged in relation to where the sun is" },
            { letter: "B", text: "decided by how warm the sunlight feels" },
            { letter: "C", text: "possible to show only on cloudy days" },
            { letter: "D", text: "marked on the walls of the hive in wax" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c35-stagehand",
      family: "G9",
      title: "Stagehand",
      kind: "Poetry · 9.RL",
      blurb: "Nine lines from the crew member nobody sees.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "While the actors bow beneath the burning lights,<br>" +
        L(2) + "I wait in the wings, dressed head to toe in black,<br>" +
        L(3) + "a shadow with a flashlight and a roll of tape.<br>" +
        L(4) + "I moved the moon tonight, and no one clapped;<br>" +
        L(5) + "I swung the castle wall without a sound.<br>" +
        L(6) + "The audience will never learn my name,<br>" +
        L(7) + "but every scene they loved rolled in on my wheels.<br>" +
        L(8) + "When the curtain drops, I sweep the paper snow<br>" +
        L(9) + "and grin, because the show could not go on without me." +
        "</p>",
      claims: [
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The poem \"Stagehand\" is spoken from the point of view of —",
          choices: [
            { letter: "A", text: "an actor taking a bow at the end of a show" },
            { letter: "B", text: "a crew member who works out of sight" },
            { letter: "C", text: "an audience member seated in the front row" },
            { letter: "D", text: "a director giving notes after rehearsal" }
          ],
          correct: "B"
        },
        {
          id: "shadow",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 3, the speaker is called a shadow mainly to suggest that the speaker —",
          choices: [
            { letter: "A", text: "is afraid of the actors onstage" },
            { letter: "B", text: "follows the lead actor everywhere" },
            { letter: "C", text: "works unseen in the dark" },
            { letter: "D", text: "feels gloomy and left out" }
          ],
          correct: "C"
        },
        {
          id: "moon",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "The phrase I moved the moon tonight in line 4 most likely refers to —",
          choices: [
            { letter: "A", text: "a dream the speaker had during the show" },
            { letter: "B", text: "watching the night sky after the play" },
            { letter: "C", text: "changing the order of the lighting cues" },
            { letter: "D", text: "shifting a piece of scenery shaped like the moon" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Stagehand\"?",
          choices: [
            { letter: "A", text: "Unseen work can be essential to a shared success." },
            { letter: "B", text: "Applause is the only true reward for hard work." },
            { letter: "C", text: "Actors rarely notice the scenery around them." },
            { letter: "D", text: "Theater is far less exciting behind the curtain." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of lines 8 and 9 of \"Stagehand\" is best described as —",
          choices: [
            { letter: "A", text: "bitter and jealous" },
            { letter: "B", text: "quietly proud" },
            { letter: "C", text: "nervous and rushed" },
            { letter: "D", text: "silly and careless" }
          ],
          correct: "B"
        },
        {
          id: "contrast",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "How do lines 6 and 7 develop the main contrast in the poem?",
          choices: [
            { letter: "A", text: "They explain how the wheels on the set were built." },
            { letter: "B", text: "They reveal that the audience disliked the play." },
            { letter: "C", text: "They describe the speaker's plan to become an actor." },
            { letter: "D", text: "They show the crew is unknown yet behind every scene." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rv-c35-cables",
      family: "G9",
      title: "The Cable Spinners",
      kind: "Vocabulary · 9.RV",
      blurb: "Thousands of thin wires become the cables of a suspension bridge.",
      level: 2,
      passage:
        "<p>" + N(1) + "Building the main cables of a suspension bridge is slow and <strong>meticulous</strong> work. " +
        N(2) + "Each cable is not one solid rope but thousands of thin steel wires bundled together. " +
        N(3) + "Workers spin the wires back and forth across the river, one pass at a time, until the bundle is thick enough to carry the deck. " +
        N(4) + "Every wire must be <strong>taut</strong>; a loose strand would sag and leave its neighbors to bear extra weight. " +
        N(5) + "Once the bundle is complete, machines squeeze it into a tight circle and wrap it in a protective coat to <strong>inhibit</strong> rust. " +
        N(6) + "The finished cables look <strong>immutable</strong>, but they actually stretch and shrink slightly as temperatures change. " +
        N(7) + "Engineers inspect them often, because even one small break can be a <strong>harbinger</strong> of larger trouble. " +
        N(8) + "The work is <strong>tedious</strong>, yet it is what lets a road hang safely in the air." +
        "</p>",
      claims: [
        {
          id: "meticulous",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "Compared with the word careful, the word meticulous in sentence 1 suggests work that is —",
          choices: [
            { letter: "A", text: "done mostly by large machines" },
            { letter: "B", text: "done quickly to save money" },
            { letter: "C", text: "done with attention to every small detail" },
            { letter: "D", text: "done in secret by a few experts" }
          ],
          correct: "C"
        },
        {
          id: "taut",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 4, the word taut most nearly means —",
          choices: [
            { letter: "A", text: "pulled tight" },
            { letter: "B", text: "freshly painted" },
            { letter: "C", text: "twisted together" },
            { letter: "D", text: "brand new" }
          ],
          correct: "A"
        },
        {
          id: "immutable",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The prefix im- means not, and mutable means able to change. So the word immutable in sentence 6 means —",
          choices: [
            { letter: "A", text: "easy to change" },
            { letter: "B", text: "changed by heat" },
            { letter: "C", text: "changing slowly" },
            { letter: "D", text: "unable to change" }
          ],
          correct: "D"
        },
        {
          id: "harbinger",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 7, calling a small break a harbinger of larger trouble means the break is —",
          choices: [
            { letter: "A", text: "the cause of every other problem" },
            { letter: "B", text: "an early sign of something worse" },
            { letter: "C", text: "a part that can never be repaired" },
            { letter: "D", text: "a problem that fixes itself in time" }
          ],
          correct: "B"
        },
        {
          id: "tedious",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 8, the word tedious suggests that the cable work is —",
          choices: [
            { letter: "A", text: "dull and repetitive but necessary" },
            { letter: "B", text: "dangerous and frightening to watch" },
            { letter: "C", text: "quick and exciting for the crew" },
            { letter: "D", text: "careless and rushed near the end" }
          ],
          correct: "A"
        },
        {
          id: "hang",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "Sentence 8 says the cables let a road hang safely in the air. This figurative description mainly emphasizes that the deck —",
          choices: [
            { letter: "A", text: "moves freely whenever the wind blows" },
            { letter: "B", text: "weighs less than the steel cables" },
            { letter: "C", text: "is held up from above, not from below" },
            { letter: "D", text: "was built before the towers were raised" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-dsr-c35-late-hours",
      family: "G9",
      title: "Closing at Six",
      kind: "Paired texts · 9.DSR",
      blurb: "A library notice about new hours and a student's reply.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Notice from the Riverside Branch Library</strong></p>" +
        "<p>" + N(1) + "Starting March 1, the Riverside Branch will close at 6:00 p.m. on weeknights instead of 9:00 p.m. " +
        N(2) + "Evening visits have dropped over the past two years, and the change will let us add Saturday morning story times and a weekend homework room. " +
        N(3) + "Online books, research databases, and the 24-hour return slot will remain available at all hours. " +
        N(4) + "We thank patrons for their understanding as we adjust our schedule to serve the most people.</p>" +
        "<p><strong>Text 2 — A Letter from Dalia, Grade 9</strong></p>" +
        "<p>" + N(5) + "I understand that fewer people come in at night, but the ones who do often have nowhere else to go. " +
        N(6) + "My mother works until five, and the library is the only quiet place near our apartment where I can study after dinner. " +
        N(7) + "Online books are helpful, yet they cannot replace a warm table, a printer, and a librarian who answers questions. " +
        N(8) + "Could the branch stay open late even two nights a week?</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "On which point do the library notice and Dalia's letter agree?",
          choices: [
            { letter: "A", text: "Online books can fully replace a visit." },
            { letter: "B", text: "Saturday story times are not needed." },
            { letter: "C", text: "The branch should close at six every night." },
            { letter: "D", text: "Fewer people visit the library in the evening." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which statement best describes the main difference between the notice and the letter?",
          choices: [
            { letter: "A", text: "The notice weighs what serves the most people; the letter speaks for evening users." },
            { letter: "B", text: "The notice praises online books; the letter says the library has none to offer." },
            { letter: "C", text: "The notice is written for young children; the letter is written to other students." },
            { letter: "D", text: "The notice asks patrons for donations; the letter offers to volunteer on weekends." }
          ],
          correct: "A"
        },
        {
          id: "challenge",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which sentence from Text 1 does Dalia most directly answer in sentence 7?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 2" },
            { letter: "C", text: "sentence 3" },
            { letter: "D", text: "sentence 4" }
          ],
          correct: "C"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the notice, what will the earlier closing time allow the library to add?",
          choices: [
            { letter: "A", text: "a second 24-hour return slot" },
            { letter: "B", text: "weekend programs such as story times" },
            { letter: "C", text: "new research databases for students" },
            { letter: "D", text: "an extra printer for evening visitors" }
          ],
          correct: "B"
        },
        {
          id: "support",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which TWO sentences from the letter best support Dalia's claim that some evening visitors have nowhere else to go? Select TWO.",
          choices: [
            { letter: "A", text: "sentence 6" },
            { letter: "B", text: "sentence 8" },
            { letter: "C", text: "sentence 7" },
            { letter: "D", text: "sentence 4" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "conclude",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader who considers both the notice and the letter could best conclude that —",
          choices: [
            { letter: "A", text: "the library plans to close for good next year" },
            { letter: "B", text: "the change helps many patrons but leaves a few with less" },
            { letter: "C", text: "Dalia has never tried the library's online books" },
            { letter: "D", text: "the library ignores every patron who writes to it" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c35-apiary-rules",
      family: "G9",
      title: "Teaching Apiary Rules",
      kind: "Functional text · 9.RI",
      blurb: "The rules every visitor reads before walking out to the hives.",
      level: 1,
      passage:
        "<p><strong>Hillcrest Farm Teaching Apiary — Visitor Rules</strong> " +
        N(1) + "All visitors must check in at the barn and sign the day's log before walking to the hives. " +
        N(2) + "Wear light-colored clothing, closed-toe shoes, and the veil provided at the gate; bees are more likely to investigate dark colors. " +
        N(3) + "Do not wear perfume or scented lotion. " +
        N(4) + "Stay at least ten feet behind the yellow rope unless a beekeeper invites you closer. " +
        N(5) + "If a bee lands on you, stay calm and walk slowly away; swatting only alarms the hive. " +
        N(6) + "Anyone allergic to bee stings must tell staff before the tour and carry their own medicine. " +
        N(7) + "Tours are canceled during rain or high wind, when bees are most defensive. " +
        N(8) + "Children under twelve must stay with an adult at all times." +
        "</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The main purpose of the Hillcrest visitor rules is to —",
          choices: [
            { letter: "A", text: "persuade readers to start their own hives" },
            { letter: "B", text: "explain how bees turn nectar into honey" },
            { letter: "C", text: "keep both visitors and bees safe on a tour" },
            { letter: "D", text: "advertise the honey the farm has for sale" }
          ],
          correct: "C"
        },
        {
          id: "clothing",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the rules, why should visitors wear light-colored clothing?",
          choices: [
            { letter: "A", text: "Light colors stay cooler in the sun." },
            { letter: "B", text: "Bees are less likely to investigate them." },
            { letter: "C", text: "The farm's veils come only in light colors." },
            { letter: "D", text: "Staff can count visitors more easily." }
          ],
          correct: "B"
        },
        {
          id: "allergy",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which rule most directly responds to the risk that a visitor could have a serious reaction to a sting?",
          choices: [
            { letter: "A", text: "sentence 3" },
            { letter: "B", text: "sentence 4" },
            { letter: "C", text: "sentence 6" },
            { letter: "D", text: "sentence 8" }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the information in the apiary rules mainly organized?",
          choices: [
            { letter: "A", text: "as a list of separate instructions" },
            { letter: "B", text: "as a story about one family's visit" },
            { letter: "C", text: "as a comparison of two different farms" },
            { letter: "D", text: "as a history of causes and effects" }
          ],
          correct: "A"
        },
        {
          id: "defensive",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 7, the word defensive most nearly means —",
          choices: [
            { letter: "A", text: "slow and sleepy" },
            { letter: "B", text: "hungry for nectar" },
            { letter: "C", text: "likely to leave home" },
            { letter: "D", text: "ready to protect themselves" }
          ],
          correct: "D"
        },
        {
          id: "closer",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Based on the rules, a visitor who wants a closer look at a hive should —",
          choices: [
            { letter: "A", text: "step quietly over the yellow rope" },
            { letter: "B", text: "wait until a beekeeper invites her in" },
            { letter: "C", text: "borrow a darker veil from the gate" },
            { letter: "D", text: "come back on a calm, rainy morning" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c35-blackout-cue",
      family: "G9",
      title: "The Blackout Cue",
      kind: "Drama · 9.RL",
      blurb: "A new crew member waits in the dark to pull the curtain.",
      level: 2,
      passage:
        "<p><em>(Backstage left, dim blue light. INES wears a headset. KOFI holds a coil of rope.)</em></p>" +
        "<p>" + N(1) + "<strong>INES:</strong> Stand by on the curtain, Kofi. " +
        N(2) + "<strong>KOFI:</strong> <em>(whispering)</em> Which rope is it again? " +
        N(3) + "<strong>INES:</strong> The red one, the one you practiced with all week. " +
        N(4) + "<strong>KOFI:</strong> They all look gray in this light. " +
        N(5) + "<em>(A burst of laughter rises from the audience. INES glances at her script.)</em> " +
        N(6) + "<strong>INES:</strong> Ten seconds. " +
        N(7) + "Breathe, and keep your hands where I showed you. " +
        N(8) + "<strong>KOFI:</strong> What if I pull too early? " +
        N(9) + "<strong>INES:</strong> Then we fix it, the way we fixed the falling lamp on Tuesday. " +
        N(10) + "<em>(The lights onstage snap off.)</em> " +
        N(11) + "<strong>INES:</strong> Go. " +
        N(12) + "<em>(KOFI pulls. The curtain sweeps closed. Applause rolls through the dark.)</em> " +
        N(13) + "<strong>KOFI:</strong> <em>(staring at his hands)</em> I did that. " +
        N(14) + "<strong>INES:</strong> <em>(smiling, already turning a page)</em> You did. Now get ready for Act Two.</p>",
      claims: [
        {
          id: "direction5",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction in sentence 5 of \"The Blackout Cue\" mainly serves to —",
          choices: [
            { letter: "A", text: "reveal that Ines has lost her place in the script" },
            { letter: "B", text: "show that the play goes on while the crew waits" },
            { letter: "C", text: "explain why Kofi cannot tell the ropes apart" },
            { letter: "D", text: "signal that the curtain has already closed" }
          ],
          correct: "B"
        },
        {
          id: "ines",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Ines in the backstage scene?",
          choices: [
            { letter: "A", text: "She is impatient and harsh with new crew." },
            { letter: "B", text: "She is unsure about the order of the cues." },
            { letter: "C", text: "She cares more about the audience than the crew." },
            { letter: "D", text: "She is calm and encouraging under pressure." }
          ],
          correct: "D"
        },
        {
          id: "lamp",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Ines mentions the falling lamp in sentence 9 most likely to —",
          choices: [
            { letter: "A", text: "remind Kofi that mistakes can be fixed" },
            { letter: "B", text: "blame Kofi for Tuesday's accident" },
            { letter: "C", text: "warn that the lamp might fall again" },
            { letter: "D", text: "change the subject away from the cue" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction Applause rolls through the dark in sentence 12 mainly creates a mood of —",
          choices: [
            { letter: "A", text: "fear and confusion" },
            { letter: "B", text: "boredom and routine" },
            { letter: "C", text: "sudden relief and triumph" },
            { letter: "D", text: "sadness and loss" }
          ],
          correct: "C"
        },
        {
          id: "hands",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction in sentence 13, staring at his hands, mainly reveals that Kofi —",
          choices: [
            { letter: "A", text: "is amazed by what he has just done" },
            { letter: "B", text: "has hurt his palms on the rough rope" },
            { letter: "C", text: "is ashamed of pulling the rope late" },
            { letter: "D", text: "is waiting for Ines to call a new cue" }
          ],
          correct: "A"
        },
        {
          id: "idea",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which idea does the scene between Ines and Kofi most clearly develop?",
          choices: [
            { letter: "A", text: "Backstage work is best left to experts." },
            { letter: "B", text: "Steady support can help someone find confidence." },
            { letter: "C", text: "Audiences notice the crew more than the actors." },
            { letter: "D", text: "Practice is useless when the lights are dim." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c35-craft-sticks",
      family: "G9",
      title: "Trust the Triangles",
      kind: "Literary · 9.RL",
      blurb: "Amara's craft-stick bridge faces the bucket of sand.",
      level: 2,
      passage:
        "<p>" + N(1) + "Amara's bridge was made of two hundred craft sticks and more glue than her teacher thought was reasonable. " +
        N(2) + "Lukas's design had been prettier, with a graceful arch, but Amara had insisted on triangles. " +
        N(3) + "\"Triangles don't bend,\" she kept saying, as if repeating it would make the bridge listen. " +
        N(4) + "On test day, Mr. Reyes hung a bucket from the center and began adding sand, one scoop at a time. " +
        N(5) + "At four kilograms, the class held its breath. " +
        N(6) + "At six, someone started a drumroll on a desk. " +
        N(7) + "At nine kilograms there was a crack like a knuckle popping, and the bucket dropped. " +
        N(8) + "Amara stared at the broken piece; it was not part of a triangle at all, but the single flat strip she had added at midnight. " +
        N(9) + "Lukas picked it up and laughed. " +
        N(10) + "\"Next time,\" he said, \"we trust the triangles all the way.\"" +
        "</p>",
      claims: [
        {
          id: "amara",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Amara in sentences 2 and 3?",
          choices: [
            { letter: "A", text: "She is shy about sharing her opinions." },
            { letter: "B", text: "She is confident in her idea, even stubborn." },
            { letter: "C", text: "She is careless about following directions." },
            { letter: "D", text: "She cares more about looks than strength." }
          ],
          correct: "B"
        },
        {
          id: "knuckle",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 7, comparing the crack to a knuckle popping mainly helps the reader —",
          choices: [
            { letter: "A", text: "hear how sudden and sharp the sound was" },
            { letter: "B", text: "understand that Mr. Reyes was hurt" },
            { letter: "C", text: "picture the shape of the sand bucket" },
            { letter: "D", text: "sense that the bridge bent very slowly" }
          ],
          correct: "A"
        },
        {
          id: "suspense",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "The author builds suspense in sentences 5 through 7 mainly by —",
          choices: [
            { letter: "A", text: "describing the colors of the bridge" },
            { letter: "B", text: "flashing back to the night before" },
            { letter: "C", text: "switching to Lukas's point of view" },
            { letter: "D", text: "counting up the weight in short steps" }
          ],
          correct: "D"
        },
        {
          id: "infer8",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "What can readers infer about the bridge from sentence 8?",
          choices: [
            { letter: "A", text: "Mr. Reyes poured the sand in far too quickly." },
            { letter: "B", text: "Lukas had secretly changed the design at night." },
            { letter: "C", text: "It broke at the one spot that ignored Amara's rule." },
            { letter: "D", text: "Its triangles proved weaker than an arch would be." }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of Lukas's words in sentences 9 and 10 is best described as —",
          choices: [
            { letter: "A", text: "good-humored and supportive" },
            { letter: "B", text: "bitter and blaming" },
            { letter: "C", text: "anxious and unsure" },
            { letter: "D", text: "formal and distant" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best supported by the story of the craft-stick bridge?",
          choices: [
            { letter: "A", text: "Pretty designs are the ones that win contests." },
            { letter: "B", text: "Working alone beats working with a partner." },
            { letter: "C", text: "Teachers should not test student projects." },
            { letter: "D", text: "A plan is only as strong as its weakest part." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c35-seed-library",
      family: "G9",
      title: "Borrowing Seeds",
      kind: "Informational · 9.RI",
      blurb: "Some libraries now lend tomato and bean seeds.",
      level: 1,
      passage:
        "<p>" + N(1) + "Some public libraries now lend something you cannot read: seeds. " +
        N(2) + "At a seed library, a patron chooses a few packets of tomato, bean, or sunflower seeds, often from the drawers of an old card catalog cabinet. " +
        N(3) + "The seeds are free to take home and plant. " +
        N(4) + "At the end of the season, gardeners are asked to let a few of their best plants go to seed and return some of those seeds to the library. " +
        N(5) + "In this way, the collection can refill itself year after year. " +
        N(6) + "Over time, the seeds that come back are often from plants that grew well in the local soil and weather. " +
        N(7) + "Librarians say seed libraries also bring in visitors who might not otherwise stop by. " +
        N(8) + "Many gardeners who come in for beans leave with a cookbook, too." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the article about seed libraries?",
          choices: [
            { letter: "A", text: "Libraries lend seeds that gardeners help replace each season." },
            { letter: "B", text: "Most libraries are throwing away their card catalog cabinets." },
            { letter: "C", text: "Tomatoes grow better than beans in most kinds of local soil." },
            { letter: "D", text: "Librarians would rather garden than help people find books." }
          ],
          correct: "A"
        },
        {
          id: "return",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, what are seed library gardeners asked to do at the end of the season?",
          choices: [
            { letter: "A", text: "pay a small fee for each packet" },
            { letter: "B", text: "donate part of their harvest" },
            { letter: "C", text: "return seeds from their best plants" },
            { letter: "D", text: "write a review of the seeds they used" }
          ],
          correct: "C"
        },
        {
          id: "report",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the seed library article reports what people say rather than stating a plain fact about how the program works?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 5" },
            { letter: "D", text: "sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author ends the seed library article with sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "suggest that most gardeners dislike reading" },
            { letter: "B", text: "show that seeds can lead patrons to other services" },
            { letter: "C", text: "explain how the library shelves its cookbooks" },
            { letter: "D", text: "argue that libraries should stop lending seeds" }
          ],
          correct: "B"
        },
        {
          id: "local",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that returned seeds may be well suited to the area?",
          choices: [
            { letter: "A", text: "sentence 3" },
            { letter: "B", text: "sentence 4" },
            { letter: "C", text: "sentence 6" },
            { letter: "D", text: "sentence 7" }
          ],
          correct: "C"
        },
        {
          id: "phrase",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 4, letting plants go to seed means allowing them to —",
          choices: [
            { letter: "A", text: "finish growing until they make seeds" },
            { letter: "B", text: "be pulled up before they can flower" },
            { letter: "C", text: "be sold at a nearby farmers market" },
            { letter: "D", text: "be moved into the library's garden" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-ri-c35-iron-bridge",
      family: "G9",
      title: "Keep the Iron Bridge",
      kind: "Argument · 9.RI",
      blurb: "A letter to the editor argues for restoring an old truss bridge.",
      level: 3,
      passage:
        "<p>" + N(1) + "The county plans to tear down the Sawmill Creek truss bridge and replace it with a plain concrete span, but restoring the old bridge is the wiser choice. " +
        N(2) + "The iron trusses have stood for more than a century, and the county's own inspection found that the main beams remain sound; only the deck and railings need replacing. " +
        N(3) + "The engineers' estimate places restoration at about two-thirds the cost of a new bridge. " +
        N(4) + "Critics argue that a restored bridge still could not carry heavy trucks, and that is true. " +
        N(5) + "However, trucks already use the highway bypass two miles south, so the bridge mainly serves cars, cyclists, and walkers. " +
        N(6) + "Surely no one wants to lose the one landmark that appears on every postcard of our town. " +
        N(7) + "Restoring the bridge saves money and keeps our history standing." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence states the writer's central claim about the Sawmill Creek bridge?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 5" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence gives the strongest factual evidence that restoring the bridge is affordable?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 6" },
            { letter: "D", text: "sentence 7" }
          ],
          correct: "B"
        },
        {
          id: "counter",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The writer includes sentences 4 and 5 mainly to —",
          choices: [
            { letter: "A", text: "admit a weakness and then respond to it" },
            { letter: "B", text: "prove that trucks have damaged the bridge" },
            { letter: "C", text: "change the subject to the highway bypass" },
            { letter: "D", text: "suggest that the bypass should be closed" }
          ],
          correct: "A"
        },
        {
          id: "emotion",
          sol: "9.RI.2.C",
          sub: "9.RI.2.C.1",
          stem: "Which sentence about the bridge relies most on an emotional appeal rather than on evidence?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 5" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "sound",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 2, the word sound most nearly means —",
          choices: [
            { letter: "A", text: "loud and noisy" },
            { letter: "B", text: "strong and undamaged" },
            { letter: "C", text: "freshly painted" },
            { letter: "D", text: "easy to hear clearly" }
          ],
          correct: "B"
        },
        {
          id: "agree",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Based on the letter, the writer would most likely agree that a bridge strong enough for heavy trucks is —",
          choices: [
            { letter: "A", text: "the only safe choice for the town" },
            { letter: "B", text: "likely to draw more tourists" },
            { letter: "C", text: "unnecessary, since trucks use the bypass" },
            { letter: "D", text: "cheaper than repairing the old deck" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c35-telling-bees",
      family: "G9",
      title: "Telling the Bees",
      kind: "Literary · 9.RL",
      blurb: "Ayesha brings the hives some news, the way her grandmother taught her.",
      level: 3,
      passage:
        "<p>" + N(1) + "The morning after Nani moved into Aunt Ruksana's apartment in the city, Ayesha walked out to the three white hives at the edge of the garden. " +
        N(2) + "Nani had always said the bees should hear important news first, before the neighbors and before the mail carrier. " +
        N(3) + "Ayesha had rolled her eyes at that, the way she rolled her eyes at most of Nani's sayings. " +
        N(4) + "Now she knelt in the wet grass and felt foolish. " +
        N(5) + "\"She's not gone,\" she told the nearest hive. " +
        N(6) + "\"She's just farther away, and I'm in charge now.\" " +
        N(7) + "The hum inside did not change, steady as a refrigerator in a sleeping house. " +
        N(8) + "Ayesha sat a while longer, then reached for the smoker and the hive tool, the way Nani's hands had always known to do." +
        "</p>",
      claims: [
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "How does Ayesha's attitude toward Nani's sayings change over the course of the story?",
          choices: [
            { letter: "A", text: "It moves from curious to bored." },
            { letter: "B", text: "It moves from respectful to mocking." },
            { letter: "C", text: "It moves from dismissive to accepting." },
            { letter: "D", text: "It moves from fearful to angry." }
          ],
          correct: "C"
        },
        {
          id: "hum",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 7, comparing the hum to a refrigerator in a sleeping house mainly suggests that the hive is —",
          choices: [
            { letter: "A", text: "broken and in need of repair" },
            { letter: "B", text: "calm and ordinary despite the change" },
            { letter: "C", text: "loud enough to wake the neighbors" },
            { letter: "D", text: "cold and unwelcoming to visitors" }
          ],
          correct: "B"
        },
        {
          id: "infer6",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that Ayesha speaks the words in sentence 6 mainly because she —",
          choices: [
            { letter: "A", text: "is reassuring herself as much as the bees" },
            { letter: "B", text: "believes the bees understand every word" },
            { letter: "C", text: "wants the neighbors to overhear the news" },
            { letter: "D", text: "plans to move to the city with Nani soon" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the narrator stays close to Ayesha's thoughts, the reader —",
          choices: [
            { letter: "A", text: "knows exactly what Nani is thinking in the city" },
            { letter: "B", text: "hears the events from the bees' point of view" },
            { letter: "C", text: "cannot tell how Ayesha feels about the hives" },
            { letter: "D", text: "learns private feelings, such as her embarrassment" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The last sentence of \"Telling the Bees\" mainly suggests that Ayesha —",
          choices: [
            { letter: "A", text: "plans to sell the hives to a neighbor" },
            { letter: "B", text: "is starting to carry on Nani's work" },
            { letter: "C", text: "has forgotten how to use the tools" },
            { letter: "D", text: "is too nervous to open the hives" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The overall tone of the story about Ayesha and the hives is best described as —",
          choices: [
            { letter: "A", text: "humorous and lighthearted" },
            { letter: "B", text: "tense and frightening" },
            { letter: "C", text: "tender and quietly hopeful" },
            { letter: "D", text: "angry and resentful" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rv-c35-load-in",
      family: "G9",
      title: "Load-In Day",
      kind: "Vocabulary · 9.RV",
      blurb: "The crew at Lakeview High races to set the stage before opening night.",
      level: 1,
      passage:
        "<p>" + N(1) + "The day before opening night, the backstage area at Lakeview High was more <strong>cluttered</strong> than a garage sale. " +
        N(2) + "Paint cans, folding chairs, and half a cardboard castle filled every corner. " +
        N(3) + "Stage manager Priya Raman stood in the middle with a clipboard and a calm voice. " +
        N(4) + "Her first job was to <strong>hoist</strong> the painted sky into place, so four crew members pulled the ropes until the blue canvas rose above the stage. " +
        N(5) + "Next came the props table, which was <strong>crucial</strong>; if a teacup or a letter went missing, an actor would be stuck onstage with nothing in hand. " +
        N(6) + "By evening the crew was <strong>frantic</strong>, racing to finish before the custodian locked the doors. " +
        N(7) + "When a door on the set jammed, Priya told the actors to <strong>improvise</strong> an exit through the window. " +
        N(8) + "The window exit got the biggest laugh of the night, and it stayed in the show." +
        "</p>",
      claims: [
        {
          id: "antonym",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which word is the best antonym for cluttered as it is used in sentence 1?",
          choices: [
            { letter: "A", text: "tidy" },
            { letter: "B", text: "crowded" },
            { letter: "C", text: "noisy" },
            { letter: "D", text: "dim" }
          ],
          correct: "A"
        },
        {
          id: "hoist",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from sentence 4 best help the reader understand the meaning of hoist?",
          choices: [
            { letter: "A", text: "four crew members" },
            { letter: "B", text: "the painted sky" },
            { letter: "C", text: "her first job" },
            { letter: "D", text: "the blue canvas rose" }
          ],
          correct: "D"
        },
        {
          id: "crucial",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As used in sentence 5, the word crucial most nearly means —",
          choices: [
            { letter: "A", text: "expensive" },
            { letter: "B", text: "very important" },
            { letter: "C", text: "easily broken" },
            { letter: "D", text: "optional" }
          ],
          correct: "B"
        },
        {
          id: "frantic",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written busy in sentence 6. Compared with busy, the word frantic suggests the crew was —",
          choices: [
            { letter: "A", text: "organized and relaxed" },
            { letter: "B", text: "tired and bored" },
            { letter: "C", text: "rushed and close to panic" },
            { letter: "D", text: "proud and confident" }
          ],
          correct: "C"
        },
        {
          id: "improvise",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "Improvise comes from Latin parts meaning not and foreseen. Based on this, to improvise an exit in sentence 7 is to —",
          choices: [
            { letter: "A", text: "make it up on the spot without a plan" },
            { letter: "B", text: "rehearse it many times before a show" },
            { letter: "C", text: "skip it and stay onstage until the end" },
            { letter: "D", text: "copy it word for word from the script" }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 1, comparing the backstage area to a garage sale is best described as —",
          choices: [
            { letter: "A", text: "a metaphor about selling old props" },
            { letter: "B", text: "a simile that stresses the mess" },
            { letter: "C", text: "personification of the castle" },
            { letter: "D", text: "an allusion to a famous play" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-dsr-c35-hive-losses",
      family: "G9",
      title: "Weak Hives",
      kind: "Paired texts · 9.DSR",
      blurb: "A science article and a beekeeper's journal look at struggling colonies.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Why Bee Colonies Struggle</strong></p>" +
        "<p>" + N(1) + "Beekeepers in many regions report losing more colonies over winter than they did a few decades ago. " +
        N(2) + "Researchers point to several causes working together rather than a single culprit. " +
        N(3) + "Tiny parasitic mites weaken bees and spread viruses, while some pesticides can confuse foragers. " +
        N(4) + "Fewer wildflowers also means a poorer diet, leaving colonies less able to fight disease. " +
        N(5) + "Because the causes overlap, scientists say the solutions must overlap too.</p>" +
        "<p><strong>Text 2 — From a Beekeeper's Journal</strong></p>" +
        "<p>" + N(6) + "October 12. " +
        N(7) + "Checked all six hives today; the two by the road are weak again. " +
        N(8) + "Those two sit beside the sprayed hayfield, while the four near the meadow are heavy with honey. " +
        N(9) + "I counted mites on a sample board and found more than I liked. " +
        N(10) + "My neighbor Mr. Batista and I agreed to plant clover along the fence line next spring. " +
        N(11) + "I cannot fix everything, but I can fix the corner I stand in.</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea is supported by both the article and the journal?",
          choices: [
            { letter: "A", text: "Hives that sit near roads are always the weakest ones." },
            { letter: "B", text: "A colony's health depends on several factors at once." },
            { letter: "C", text: "Planting clover is the only cure for colony losses." },
            { letter: "D", text: "Pesticides have little effect on how foragers behave." }
          ],
          correct: "B"
        },
        {
          id: "clover",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The plan in sentence 10 of the journal responds most directly to which problem described in the article?",
          choices: [
            { letter: "A", text: "mites spreading viruses through a hive" },
            { letter: "B", text: "pesticides confusing forager bees" },
            { letter: "C", text: "fewer wildflowers and a poorer diet" },
            { letter: "D", text: "rising colony losses over the winter" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "How does the journal mainly differ from the article?",
          choices: [
            { letter: "A", text: "It argues that mites do no real harm to bees." },
            { letter: "B", text: "It covers far more regions than the article." },
            { letter: "C", text: "It denies that winter losses have increased." },
            { letter: "D", text: "It records one person's hives and choices." }
          ],
          correct: "D"
        },
        {
          id: "culprit",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 2, the word culprit most nearly means —",
          choices: [
            { letter: "A", text: "a cause to blame" },
            { letter: "B", text: "a type of insect" },
            { letter: "C", text: "a possible cure" },
            { letter: "D", text: "a lead researcher" }
          ],
          correct: "A"
        },
        {
          id: "corner",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 11, the beekeeper's words about fixing the corner I stand in mainly suggest that she —",
          choices: [
            { letter: "A", text: "will do what she can in her own area" },
            { letter: "B", text: "plans to move her hives into a corner" },
            { letter: "C", text: "has given up hope for her weak hives" },
            { letter: "D", text: "believes the article's research is wrong" }
          ],
          correct: "A"
        },
        {
          id: "causes",
          sol: "9.DSR.C",
          sub: "9.DSR.C.1",
          stem: "Which TWO sentences from the journal describe conditions that match causes named in the article? Select TWO.",
          choices: [
            { letter: "A", text: "sentence 6" },
            { letter: "B", text: "sentence 8" },
            { letter: "C", text: "sentence 11" },
            { letter: "D", text: "sentence 9" }
          ],
          correct: ["B", "D"]
        }
      ]
    },
    {
      id: "g9-ri-c35-stone-arch",
      family: "G9",
      title: "How an Arch Stands",
      kind: "Informational · 9.RI",
      blurb: "Why a curve of stone can carry a road across a river.",
      level: 3,
      passage:
        "<p>" + N(1) + "A stone arch seems to defy gravity, yet it actually depends on gravity to stand. " +
        N(2) + "Each wedge-shaped stone, called a voussoir, presses against its neighbors, so the weight of the bridge pushes the stones together rather than pulling them apart. " +
        N(3) + "This squeezing force, known as compression, is something stone handles extremely well. " +
        N(4) + "Stone is far weaker when it is stretched, which is why a flat stone beam across a wide gap would crack in the middle. " +
        N(5) + "The arch solves this problem by turning downward weight into sideways thrust. " +
        N(6) + "That thrust travels down through the curve to the ground at each end, where heavy supports called abutments push back. " +
        N(7) + "Remove an abutment, and the stones would spread and fall. " +
        N(8) + "Until the final keystone is set at the top, builders must hold the stones in place with a temporary wooden frame." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best summarizes how a stone arch stays standing?",
          choices: [
            { letter: "A", text: "Strong mortar glues each of its stones in place." },
            { letter: "B", text: "Its curve turns weight into forces the ends resist." },
            { letter: "C", text: "Its keystone carries all of the weight by itself." },
            { letter: "D", text: "A wooden frame stays under it to hold it up." }
          ],
          correct: "B"
        },
        {
          id: "contrast",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Sentences 3 and 4 of the arch passage are organized mainly as —",
          choices: [
            { letter: "A", text: "a contrast between squeezing and stretching stone" },
            { letter: "B", text: "a list of steps for building an arch bridge" },
            { letter: "C", text: "a story about one well-known stone bridge" },
            { letter: "D", text: "a definition followed by the author's opinion" }
          ],
          correct: "A"
        },
        {
          id: "opening",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author opens the arch passage with sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "argue that gravity is harmful to bridges" },
            { letter: "B", text: "describe how a stone bridge looks from afar" },
            { letter: "C", text: "present a surprising idea the text will explain" },
            { letter: "D", text: "compare the strength of stone with steel" }
          ],
          correct: "C"
        },
        {
          id: "abutment",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, what is the job of an abutment?",
          choices: [
            { letter: "A", text: "to hold up the wooden building frame" },
            { letter: "B", text: "to lock the keystone in at the top" },
            { letter: "C", text: "to keep river water off the stones" },
            { letter: "D", text: "to push back against sideways thrust" }
          ],
          correct: "D"
        },
        {
          id: "depend",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that an arch fails if one of its parts is missing?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 4" },
            { letter: "D", text: "sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "temporary",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word temporary in sentence 8 shares a root with tempo, which relates to time. A temporary frame is one that —",
          choices: [
            { letter: "A", text: "is built very quickly" },
            { letter: "B", text: "holds the most weight" },
            { letter: "C", text: "stays only for a while" },
            { letter: "D", text: "is made only of wood" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c35-lost-crown",
      family: "G9",
      title: "Check the King First",
      kind: "Literary · 9.RL",
      blurb: "Ten minutes before Act Two, a crown goes missing.",
      level: 1,
      passage:
        "<p>" + N(1) + "Ten minutes before Act Two, the king's crown was missing from the props table. " +
        N(2) + "Mateo checked under the table, inside the costume rack, and even in the trash can by the stage door. " +
        N(3) + "His hands were shaking, and the tape marks on the table seemed to stare at him, each one labeled with an object that was still there except one. " +
        N(4) + "Then Hana, who played the king, walked past humming, the gold crown sitting crookedly on her head. " +
        N(5) + "\"Were you looking for this?\" she asked. " +
        N(6) + "\"I wore it to the water fountain so I wouldn't forget it.\" " +
        N(7) + "Mateo laughed so hard he had to sit down on a paint bucket. " +
        N(8) + "After the show, he made a new label for the table: CROWN — CHECK THE KING FIRST." +
        "</p>",
      claims: [
        {
          id: "why",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Why is the crown missing from the props table?",
          choices: [
            { letter: "A", text: "Someone threw it in the trash by mistake." },
            { letter: "B", text: "Mateo left it in the costume rack." },
            { letter: "C", text: "Hana had taken it and was wearing it." },
            { letter: "D", text: "The crown broke during the first act." }
          ],
          correct: "C"
        },
        {
          id: "stare",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 3, the tape marks seem to stare at Mateo. This image mainly shows that he —",
          choices: [
            { letter: "A", text: "feels nervous, as if the table is judging him" },
            { letter: "B", text: "cannot read the labels in the dim backstage" },
            { letter: "C", text: "thinks another crew member is hiding nearby" },
            { letter: "D", text: "is bored with checking the same props again" }
          ],
          correct: "A"
        },
        {
          id: "search",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sentence 2 mainly shows that Mateo is —",
          choices: [
            { letter: "A", text: "lazy about doing his backstage job" },
            { letter: "B", text: "eager to blame the other crew members" },
            { letter: "C", text: "more worried about trash than props" },
            { letter: "D", text: "thorough and determined in his search" }
          ],
          correct: "D"
        },
        {
          id: "hana",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Hana's words in sentences 5 and 6 mainly reveal that she —",
          choices: [
            { letter: "A", text: "was playing a prank on Mateo on purpose" },
            { letter: "B", text: "had no idea she had caused a panic" },
            { letter: "C", text: "wanted to quit the play before Act Two" },
            { letter: "D", text: "was upset about how the props were set" }
          ],
          correct: "B"
        },
        {
          id: "label",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the new label in sentence 8 connect to the problem in sentence 1?",
          choices: [
            { letter: "A", text: "Mateo turns the scare into a joke that also prevents a repeat." },
            { letter: "B", text: "Mateo decides that he will never work on props again." },
            { letter: "C", text: "The crown goes missing a second time after the show." },
            { letter: "D", text: "Hana is told she must stay away from the props table." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the ending of \"Check the King First\" is best described as —",
          choices: [
            { letter: "A", text: "tense and gloomy" },
            { letter: "B", text: "angry and bitter" },
            { letter: "C", text: "relieved and playful" },
            { letter: "D", text: "formal and serious" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c35-closing-time",
      family: "G9",
      title: "Closing Time",
      kind: "Poetry · 9.RL",
      blurb: "Ten lines about the last minutes in a branch library.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At ten to nine the lights blink once, a warning,<br>" +
        L(2) + "and the last readers rise like birds from a wire.<br>" +
        L(3) + "The librarian walks the aisles, pushing in chairs,<br>" +
        L(4) + "straightening spines that lean like tired soldiers.<br>" +
        L(5) + "Near the window a boy still bends above a map,<br>" +
        L(6) + "his finger resting on a river he has never seen.<br>" +
        L(7) + "She does not rush him. She has been that boy,<br>" +
        L(8) + "has crossed whole oceans at a table by the glass.<br>" +
        L(9) + "When the doors lock, the books keep breathing in the dark,<br>" +
        L(10) + "holding every journey until morning opens them again." +
        "</p>",
      claims: [
        {
          id: "birds",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 2, comparing the readers to birds rising from a wire mainly suggests that they —",
          choices: [
            { letter: "A", text: "are noisy and disturb the librarian" },
            { letter: "B", text: "leave together, quickly and all at once" },
            { letter: "C", text: "are afraid of being locked inside" },
            { letter: "D", text: "plan to travel to faraway places" }
          ],
          correct: "B"
        },
        {
          id: "soldiers",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "Line 4 describes book spines that lean like tired soldiers. This image mainly creates a sense that the books are —",
          choices: [
            { letter: "A", text: "ready for some kind of battle" },
            { letter: "B", text: "dangerous to pull off the shelf" },
            { letter: "C", text: "neatly lined up in perfect rows" },
            { letter: "D", text: "worn out after a long day of use" }
          ],
          correct: "D"
        },
        {
          id: "thatboy",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Line 7, She has been that boy, suggests that the librarian —",
          choices: [
            { letter: "A", text: "once lost herself in books just as he does" },
            { letter: "B", text: "used to attend the boy's school years ago" },
            { letter: "C", text: "knows the boy's family from the neighborhood" },
            { letter: "D", text: "once traveled across an ocean by ship" }
          ],
          correct: "A"
        },
        {
          id: "librarian",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes the librarian in \"Closing Time\"?",
          choices: [
            { letter: "A", text: "She is strict about closing exactly on time." },
            { letter: "B", text: "She is tired of her job and eager to leave." },
            { letter: "C", text: "She is patient and understanding with readers." },
            { letter: "D", text: "She cares little about the books themselves." }
          ],
          correct: "C"
        },
        {
          id: "shift",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "How does the ending of the poem (lines 9 and 10) differ from its beginning (lines 1 and 2)?",
          choices: [
            { letter: "A", text: "It shifts from readers leaving to books that seem alive." },
            { letter: "B", text: "It shifts from nighttime to the following afternoon." },
            { letter: "C", text: "It shifts from the librarian to the boy's family." },
            { letter: "D", text: "It shifts from a hopeful mood to an angry one." }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which idea does the poem \"Closing Time\" most clearly develop?",
          choices: [
            { letter: "A", text: "Libraries should stay open through the night." },
            { letter: "B", text: "Rules about closing matter more than readers." },
            { letter: "C", text: "Children should not study maps on their own." },
            { letter: "D", text: "Books let readers travel far beyond their seats." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c35-printer",
      family: "G9",
      title: "Reserving the 3D Printer",
      kind: "Functional text · 9.RI",
      blurb: "The rules for using the library makerspace printer.",
      level: 2,
      passage:
        "<p><strong>Oakdale Library Makerspace — 3D Printer Reservations</strong> " +
        N(1) + "Patrons ages 13 and up may reserve the 3D printer for up to three hours per week. " +
        N(2) + "Reservations open each Monday at 9:00 a.m. on the library website or at the information desk. " +
        N(3) + "Before your first reservation, you must complete the free 30-minute safety class, offered every Saturday at 10:00 a.m. " +
        N(4) + "Bring your design on a USB drive as an STL file; staff cannot download files from email. " +
        N(5) + "Printing costs ten cents per gram of material, paid at the desk when you pick up your item. " +
        N(6) + "Prints not collected within seven days will be recycled. " +
        N(7) + "If you cannot attend your reserved time, please cancel at least 24 hours ahead so another patron can use the slot. " +
        N(8) + "Two missed reservations without notice will pause your printing privileges for one month." +
        "</p>",
      claims: [
        {
          id: "email",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence explains why a design sent to staff by email would not be printed?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 4" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "C"
        },
        {
          id: "order",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the makerspace notice mainly organized?",
          choices: [
            { letter: "A", text: "as rules that follow a patron from reserving to pickup" },
            { letter: "B", text: "as a comparison between two kinds of printers" },
            { letter: "C", text: "as the story of one patron's first printing project" },
            { letter: "D", text: "as a history of how the makerspace was founded" }
          ],
          correct: "A"
        },
        {
          id: "jamal",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Jamal reserved the printer for Thursday at 4:00 p.m. but now has a game that day. Based on the notice, what should he do?",
          choices: [
            { letter: "A", text: "email his design to the staff instead" },
            { letter: "B", text: "cancel by Wednesday at 4:00 p.m." },
            { letter: "C", text: "arrive an hour late on Thursday" },
            { letter: "D", text: "let a friend use his printer time" }
          ],
          correct: "B"
        },
        {
          id: "reason",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The phrase so another patron can use the slot in sentence 7 mainly serves to —",
          choices: [
            { letter: "A", text: "warn that missed times will cost extra" },
            { letter: "B", text: "show that the printer is often broken" },
            { letter: "C", text: "list the hours when the desk is open" },
            { letter: "D", text: "give a reason for the rule, not just a rule" }
          ],
          correct: "D"
        },
        {
          id: "privileges",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 8, calling printer use a privilege suggests that using the printer is —",
          choices: [
            { letter: "A", text: "required of every library member" },
            { letter: "B", text: "more costly than other services" },
            { letter: "C", text: "offered only to library staff" },
            { letter: "D", text: "a benefit that can be taken away" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "What is the main purpose of the Oakdale makerspace notice?",
          choices: [
            { letter: "A", text: "to persuade patrons to buy home printers" },
            { letter: "B", text: "to explain how to use the printer fairly" },
            { letter: "C", text: "to describe how a 3D printer works" },
            { letter: "D", text: "to announce new library opening hours" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rv-c35-swarm",
      family: "G9",
      title: "The Pear Tree Swarm",
      kind: "Vocabulary · 9.RV",
      blurb: "A beekeeper answers a call about a bee cloud in a neighbor's tree.",
      level: 3,
      passage:
        "<p>" + N(1) + "When a neighbor called Mr. Oyelaran about a \"bee cloud\" in her pear tree, he expected panic, but the swarm was surprisingly <strong>docile</strong>. " +
        N(2) + "Thousands of bees hung from a branch in a single brown <strong>cluster</strong> the size of a football. " +
        N(3) + "A swarm forms when an old queen leaves a crowded hive with about half the workers to find a new home. " +
        N(4) + "With no hive to defend, swarming bees are rarely aggressive, so the danger is mostly <strong>benign</strong>. " +
        N(5) + "Still, Mr. Oyelaran stayed <strong>vigilant</strong>, listening for any change in the hum as he set a box beneath the branch. " +
        N(6) + "One sharp shake dropped most of the bees inside; the stragglers flew in <strong>erratic</strong> loops before following the queen's scent. " +
        N(7) + "By dusk the last bees had gone in, and the crowd of neighbors <strong>dispersed</strong>, a little disappointed that nothing dramatic had happened." +
        "</p>",
      claims: [
        {
          id: "docile",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from the passage best help the reader understand that docile means calm and gentle?",
          choices: [
            { letter: "A", text: "a single brown cluster" },
            { letter: "B", text: "rarely aggressive" },
            { letter: "C", text: "a crowded hive" },
            { letter: "D", text: "the queen's scent" }
          ],
          correct: "B"
        },
        {
          id: "benign",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The root bene- means good or well. Based on this root, benign in sentence 4 most nearly means —",
          choices: [
            { letter: "A", text: "harmless" },
            { letter: "B", text: "frightening" },
            { letter: "C", text: "sudden" },
            { letter: "D", text: "unusual" }
          ],
          correct: "A"
        },
        {
          id: "vigilant",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "Compared with the word careful, the word vigilant in sentence 5 suggests that Mr. Oyelaran was —",
          choices: [
            { letter: "A", text: "nervous and ready to run off" },
            { letter: "B", text: "bored with a routine task" },
            { letter: "C", text: "proud of his beekeeping skill" },
            { letter: "D", text: "alert for any sign of trouble" }
          ],
          correct: "D"
        },
        {
          id: "erratic",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 6, the stragglers fly in erratic loops. The word erratic most nearly means —",
          choices: [
            { letter: "A", text: "slow and very graceful" },
            { letter: "B", text: "perfectly round and even" },
            { letter: "C", text: "irregular and unpredictable" },
            { letter: "D", text: "silent and hard to see" }
          ],
          correct: "C"
        },
        {
          id: "cloud",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 1, the neighbor's phrase bee cloud is a figurative description that mainly shows —",
          choices: [
            { letter: "A", text: "that rain was about to start falling" },
            { letter: "B", text: "that the bees were flying very high" },
            { letter: "C", text: "how large and dark the swarm looked" },
            { letter: "D", text: "that she knew a great deal about bees" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The words a little disappointed that nothing dramatic had happened in sentence 7 give the ending a tone that is —",
          choices: [
            { letter: "A", text: "deeply sad" },
            { letter: "B", text: "gently humorous" },
            { letter: "C", text: "angry and tense" },
            { letter: "D", text: "strictly scientific" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-dsr-c35-tech-week",
      family: "G9",
      title: "Tech Week",
      kind: "Paired texts · 9.DSR",
      blurb: "A stage manager's callboard note and an actor's journal entry.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Callboard Note from the Stage Manager</strong></p>" +
        "<p>" + N(1) + "Crew call for tech week is 3:15 p.m. sharp, Monday through Thursday. " +
        N(2) + "Wear black, closed-toe shoes, and bring a water bottle. " +
        N(3) + "Tech rehearsals run long because we stop each time a light or sound cue needs fixing. " +
        N(4) + "Please be patient; the actors will repeat scenes many times while we adjust. " +
        N(5) + "Thank you for making the show look easy. — Sun-hee, Stage Manager</p>" +
        "<p><strong>Text 2 — From an Actor's Journal</strong></p>" +
        "<p>" + N(6) + "Tuesday, tech rehearsal. " +
        N(7) + "I said my first line in Act One eleven times tonight while the crew moved a spotlight two inches to the left. " +
        N(8) + "At first I was annoyed, but by the sixth try I noticed how quiet and focused they were in the dark. " +
        N(9) + "When the light finally landed on my face, someone backstage whispered, \"Got it.\" " +
        N(10) + "I had never thought about who was making the show look easy.</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea appears in both the callboard note and the actor's journal?",
          choices: [
            { letter: "A", text: "Scenes are repeated while cues are adjusted." },
            { letter: "B", text: "Actors must wear black during rehearsals." },
            { letter: "C", text: "The crew finished early on most nights." },
            { letter: "D", text: "The spotlight was broken beyond repair." }
          ],
          correct: "A"
        },
        {
          id: "echo",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which phrase from Text 1 does the actor echo in sentence 10?",
          choices: [
            { letter: "A", text: "crew call for tech week" },
            { letter: "B", text: "bring a water bottle" },
            { letter: "C", text: "making the show look easy" },
            { letter: "D", text: "rehearsals run long" }
          ],
          correct: "C"
        },
        {
          id: "example",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which sentence from the journal best shows the situation described in sentence 3 of the note?",
          choices: [
            { letter: "A", text: "sentence 6" },
            { letter: "B", text: "sentence 7" },
            { letter: "C", text: "sentence 9" },
            { letter: "D", text: "sentence 10" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "How does the actor's attitude change in sentence 8?",
          choices: [
            { letter: "A", text: "It moves from excitement to boredom." },
            { letter: "B", text: "It moves from confidence to fear." },
            { letter: "C", text: "It moves from interest to anger." },
            { letter: "D", text: "It moves from annoyance to respect." }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The main purpose of the stage manager's note is to —",
          choices: [
            { letter: "A", text: "review how well the actors performed" },
            { letter: "B", text: "prepare the crew for long rehearsals" },
            { letter: "C", text: "advertise the show to local families" },
            { letter: "D", text: "explain how stage lights are designed" }
          ],
          correct: "B"
        },
        {
          id: "gotit",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The whispered words Got it in sentence 9 mainly suggest that the crew —",
          choices: [
            { letter: "A", text: "had forgotten a line from the script" },
            { letter: "B", text: "was trying to annoy the actor" },
            { letter: "C", text: "worked quietly until the cue was right" },
            { letter: "D", text: "wanted the audience to hear them" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c35-covered-bridges",
      family: "G9",
      title: "Why Bridges Wore Roofs",
      kind: "Informational · 9.RI",
      blurb: "The real reason old wooden bridges were built like barns.",
      level: 1,
      passage:
        "<p>" + N(1) + "In the 1800s, many wooden bridges in the eastern United States were built with walls and a roof, like long, narrow barns. " +
        N(2) + "People sometimes joke that the roofs kept horses calm or gave travelers a place to wait out storms, and both may have been true. " +
        N(3) + "The main reason, however, was protection. " +
        N(4) + "Wooden trusses left open to rain and snow could rot within ten or fifteen years. " +
        N(5) + "A roof kept the structure dry, and a covered bridge could last eighty years or more. " +
        N(6) + "Replacing a roof was far cheaper than rebuilding a bridge. " +
        N(7) + "Today, a few hundred covered bridges still stand, and some towns hold festivals to celebrate them." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the main idea of the passage about covered bridges?",
          choices: [
            { letter: "A", text: "Covered bridges were built mainly to keep horses calm." },
            { letter: "B", text: "Roofs were added mainly to protect the wood from rot." },
            { letter: "C", text: "Most covered bridges from the 1800s have been torn down." },
            { letter: "D", text: "Town festivals are the best way to save old bridges." }
          ],
          correct: "B"
        },
        {
          id: "years",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, about how long could an uncovered wooden truss last?",
          choices: [
            { letter: "A", text: "ten to fifteen years" },
            { letter: "B", text: "eighty years or more" },
            { letter: "C", text: "a few hundred years" },
            { letter: "D", text: "a single hard winter" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Sentences 3 through 5 of the covered bridge passage are organized mainly to show —",
          choices: [
            { letter: "A", text: "a sequence of dates in bridge history" },
            { letter: "B", text: "a comparison between two different towns" },
            { letter: "C", text: "a list of festivals that honor bridges" },
            { letter: "D", text: "a problem and how a roof solved it" }
          ],
          correct: "D"
        },
        {
          id: "jokes",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes the jokes in sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "prove that horses were afraid of rivers" },
            { letter: "B", text: "show the author's dislike of old bridges" },
            { letter: "C", text: "set up popular ideas before the real reason" },
            { letter: "D", text: "describe how storms damaged many bridges" }
          ],
          correct: "C"
        },
        {
          id: "uncertain",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which idea does the author present as possible rather than as an established fact?",
          choices: [
            { letter: "A", text: "that the roofs helped keep horses calm" },
            { letter: "B", text: "that a roof kept the bridge structure dry" },
            { letter: "C", text: "that a new roof cost less than a new bridge" },
            { letter: "D", text: "that a few hundred covered bridges remain" }
          ],
          correct: "A"
        },
        {
          id: "money",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that covering a bridge saved money over time?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 4" },
            { letter: "C", text: "sentence 6" },
            { letter: "D", text: "sentence 7" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c35-bookmobile",
      family: "G9",
      title: "Every Other Thursday",
      kind: "Literary · 9.RL",
      blurb: "Wren waits at the end of a gravel road for the bookmobile.",
      level: 2,
      passage:
        "<p>" + N(1) + "The bookmobile came to Cutter's Gap every other Thursday, and Wren was always waiting at the end of the gravel road before it rounded the bend. " +
        N(2) + "This week she had a list folded into her pocket: three mysteries, a book about horses, and anything at all about the ocean. " +
        N(3) + "Mr. Abernathy swung open the back door, and the smell of paper and old carpet rolled out like warm air from an oven. " +
        N(4) + "\"No ocean books left,\" he said, frowning at his clipboard. " +
        N(5) + "Wren's shoulders dropped. " +
        N(6) + "Then he reached under the driver's seat and handed her a heavy blue book with a seashell on the cover. " +
        N(7) + "\"Except the one I've been saving for someone who asks every time,\" he said. " +
        N(8) + "Wren held it against her chest the whole bumpy walk home." +
        "</p>",
      claims: [
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the setting described in sentence 1 shape the story?",
          choices: [
            { letter: "A", text: "The gravel road causes the bookmobile to break down." },
            { letter: "B", text: "The Thursday schedule makes Wren miss her classes." },
            { letter: "C", text: "The rare visits to a remote place make each one matter." },
            { letter: "D", text: "The sharp bend forces Wren to wait far from home." }
          ],
          correct: "C"
        },
        {
          id: "oven",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 3, the smell rolls out like warm air from an oven. This image mainly creates a feeling of —",
          choices: [
            { letter: "A", text: "comfort and welcome" },
            { letter: "B", text: "danger and heat" },
            { letter: "C", text: "sadness and loss" },
            { letter: "D", text: "noise and confusion" }
          ],
          correct: "A"
        },
        {
          id: "tease",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Read together with sentence 7, Mr. Abernathy's words and frown in sentence 4 are most likely meant to —",
          choices: [
            { letter: "A", text: "warn Wren that the bookmobile is closing" },
            { letter: "B", text: "scold Wren for asking for too many books" },
            { letter: "C", text: "explain why the ocean books were lost" },
            { letter: "D", text: "tease Wren briefly before his surprise" }
          ],
          correct: "D"
        },
        {
          id: "infer7",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "What can readers infer about Mr. Abernathy from sentence 7?",
          choices: [
            { letter: "A", text: "He forgot the book was under his seat." },
            { letter: "B", text: "He noticed Wren's interest and saved a book." },
            { letter: "C", text: "He owns the book and lends it to friends." },
            { letter: "D", text: "He promised the book to another reader." }
          ],
          correct: "B"
        },
        {
          id: "eager",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows how eager Wren is for the bookmobile's visits?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 4" },
            { letter: "C", text: "sentence 5" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the bookmobile story best support?",
          choices: [
            { letter: "A", text: "Life in the country is lonelier than city life." },
            { letter: "B", text: "Mysteries are more exciting than animal books." },
            { letter: "C", text: "People should not ask for the same thing twice." },
            { letter: "D", text: "A small, thoughtful gesture can mean a great deal." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c35-beeswax",
      family: "G9",
      title: "The Cost of Wax",
      kind: "Informational · 9.RI",
      blurb: "Why every six-sided cell in a honeycomb is expensive for bees.",
      level: 2,
      passage:
        "<p>" + N(1) + "Honeybees build their combs from wax that they make themselves. " +
        N(2) + "Young worker bees, usually about two weeks old, have special glands on the underside of the abdomen that produce thin, clear flakes of wax. " +
        N(3) + "To make wax, the bees must first eat honey; scientists estimate that a colony uses several pounds of honey to produce a single pound of wax. " +
        N(4) + "The workers chew the flakes until they soften, then press them into six-sided cells. " +
        N(5) + "The hexagon shape is efficient, because the cells fit together with no wasted space and use the least wax for the most storage. " +
        N(6) + "Because wax is so costly for the colony, many beekeepers return empty combs to the hive after harvesting the honey. " +
        N(7) + "This saves the bees work and lets them refill the combs faster." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the beeswax article?",
          choices: [
            { letter: "A", text: "Only the oldest bees in a hive can make wax." },
            { letter: "B", text: "Wax costs bees so much that it is used with care." },
            { letter: "C", text: "The hexagon is the strongest shape in nature." },
            { letter: "D", text: "Beekeepers earn more from wax than from honey." }
          ],
          correct: "B"
        },
        {
          id: "first",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, what must bees do before they can make wax?",
          choices: [
            { letter: "A", text: "eat honey" },
            { letter: "B", text: "gather pollen" },
            { letter: "C", text: "shape a hexagon" },
            { letter: "D", text: "wait for winter" }
          ],
          correct: "A"
        },
        {
          id: "relation",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Sentences 6 and 7 of the beeswax article are connected mainly by —",
          choices: [
            { letter: "A", text: "a time order that moves through a year" },
            { letter: "B", text: "a comparison of two kinds of bees" },
            { letter: "C", text: "a problem that is left unsolved" },
            { letter: "D", text: "a cause and the results that follow" }
          ],
          correct: "D"
        },
        {
          id: "estimate",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes the estimate in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "argue that bees waste much of their honey" },
            { letter: "B", text: "compare honeybees with other insects" },
            { letter: "C", text: "show how much honey wax costs a colony" },
            { letter: "D", text: "explain how beekeepers harvest honey" }
          ],
          correct: "C"
        },
        {
          id: "shape",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that the shape of the cells saves material?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 4" },
            { letter: "C", text: "sentence 5" },
            { letter: "D", text: "sentence 7" }
          ],
          correct: "C"
        },
        {
          id: "signal",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which words from the passage signal that a number is an approximation rather than an exact measurement?",
          choices: [
            { letter: "A", text: "scientists estimate" },
            { letter: "B", text: "six-sided cells" },
            { letter: "C", text: "young worker bees" },
            { letter: "D", text: "after harvesting" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c35-drawbridge",
      family: "G9",
      title: "The Late Shift",
      kind: "Literary · 9.RL",
      blurb: "Nikhil watches his aunt raise a drawbridge at midnight.",
      level: 3,
      passage:
        "<p>" + N(1) + "From the tender's booth, the river looked like a strip of black glass with the town's lights scattered across it. " +
        N(2) + "Aunt Leela had let Nikhil stay for the late shift on the condition that he touch nothing, a rule he had already broken twice in his mind. " +
        N(3) + "At 11:40 the radio crackled: a sailboat heading upriver, its mast too tall to clear. " +
        N(4) + "Aunt Leela flipped the switch for the warning bells and watched the road until the last car had stopped behind the gate. " +
        N(5) + "\"Never trust the gate alone,\" she said, without looking away. " +
        N(6) + "Then she pushed the lever, and the whole road tipped slowly upward, as if the town were raising its hand. " +
        N(7) + "The sailboat slid through, its single light bobbing. " +
        N(8) + "Nikhil realized he had been holding his breath, though nothing had happened at all, which, he understood now, was the entire job." +
        "</p>",
      claims: [
        {
          id: "device",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.1",
          stem: "In sentence 6, describing the road as if the town were raising its hand is an example of —",
          choices: [
            { letter: "A", text: "alliteration" },
            { letter: "B", text: "flashback" },
            { letter: "C", text: "personification" },
            { letter: "D", text: "allusion" }
          ],
          correct: "C"
        },
        {
          id: "mind",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "The phrase a rule he had already broken twice in his mind in sentence 2 suggests that Nikhil —",
          choices: [
            { letter: "A", text: "is tempted to touch the controls" },
            { letter: "B", text: "has already damaged the lever" },
            { letter: "C", text: "dislikes spending time with his aunt" },
            { letter: "D", text: "has no idea how the bridge works" }
          ],
          correct: "A"
        },
        {
          id: "leela",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Aunt Leela's words in sentence 5 mainly reveal that she —",
          choices: [
            { letter: "A", text: "does not trust Nikhil to watch the road" },
            { letter: "B", text: "takes every safety step seriously" },
            { letter: "C", text: "thinks the gate is about to break" },
            { letter: "D", text: "wants Nikhil to work the lever" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because \"The Late Shift\" is told through Nikhil's perspective, the reader —",
          choices: [
            { letter: "A", text: "knows exactly what the sailor is thinking" },
            { letter: "B", text: "learns the full history of the drawbridge" },
            { letter: "C", text: "sees the town from the deck of the boat" },
            { letter: "D", text: "shares his growing sense of what the job means" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the drawbridge story?",
          choices: [
            { letter: "A", text: "Rules are made to be broken by the young." },
            { letter: "B", text: "Doing a job well can mean nothing goes wrong." },
            { letter: "C", text: "Rivers matter more to a town than its roads." },
            { letter: "D", text: "Night work is dull and rarely important." }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "Describing the river as a strip of black glass in sentence 1 mainly creates a mood that is —",
          choices: [
            { letter: "A", text: "still and quiet" },
            { letter: "B", text: "wild and stormy" },
            { letter: "C", text: "cheerful and busy" },
            { letter: "D", text: "loud and tense" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rv-c35-history-room",
      family: "G9",
      title: "The Local History Room",
      kind: "Vocabulary · 9.RV",
      blurb: "Gloves, acid-free boxes and a careful list on the library's third floor.",
      level: 2,
      passage:
        "<p>" + N(1) + "On the library's third floor, behind a glass door, is the Local History Room, where the town's past is <strong>preserved</strong>. " +
        N(2) + "Old maps, school yearbooks, and handwritten diaries are stored in acid-free boxes so the paper will not turn yellow and <strong>brittle</strong>. " +
        N(3) + "Visitors must wear cotton gloves, because oils from bare skin can slowly <strong>deteriorate</strong> old photographs. " +
        N(4) + "The archivist, Mrs. Delgado, keeps a careful <strong>inventory</strong> of every item, listing where it came from and which shelf it sits on. " +
        N(5) + "Some documents are too <strong>fragile</strong> to handle at all, so volunteers scan them and share digital copies online. " +
        N(6) + "Students researching family history are often amazed by the <strong>abundance</strong> of records waiting in such a small room." +
        "</p>",
      claims: [
        {
          id: "preserved",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 1, the word preserved most nearly means —",
          choices: [
            { letter: "A", text: "kept safe and in good condition" },
            { letter: "B", text: "sold to private collectors" },
            { letter: "C", text: "hidden away from the public" },
            { letter: "D", text: "rewritten for modern readers" }
          ],
          correct: "A"
        },
        {
          id: "fragile",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from sentence 5 best help the reader understand the meaning of fragile?",
          choices: [
            { letter: "A", text: "share digital copies" },
            { letter: "B", text: "volunteers scan them" },
            { letter: "C", text: "to handle at all" },
            { letter: "D", text: "some documents" }
          ],
          correct: "C"
        },
        {
          id: "inventory",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "Inventory comes from a Latin word meaning to find or come upon. Based on this origin, an inventory in sentence 4 is —",
          choices: [
            { letter: "A", text: "a new invention for storing paper" },
            { letter: "B", text: "a full list of items and their locations" },
            { letter: "C", text: "a locked room for valuable objects" },
            { letter: "D", text: "a yearly sale of unwanted records" }
          ],
          correct: "B"
        },
        {
          id: "deteriorate",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "Compared with the word damage, the word deteriorate in sentence 3 suggests harm that is —",
          choices: [
            { letter: "A", text: "sudden and violent" },
            { letter: "B", text: "done on purpose" },
            { letter: "C", text: "easy to repair" },
            { letter: "D", text: "gradual, over time" }
          ],
          correct: "D"
        },
        {
          id: "abundance",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 6, students are amazed by the abundance of records. The word abundance most nearly means —",
          choices: [
            { letter: "A", text: "disorder" },
            { letter: "B", text: "large amount" },
            { letter: "C", text: "great age" },
            { letter: "D", text: "small size" }
          ],
          correct: "B"
        },
        {
          id: "synonym",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which bolded word from the passage is closest in meaning to brittle?",
          choices: [
            { letter: "A", text: "preserved" },
            { letter: "B", text: "inventory" },
            { letter: "C", text: "fragile" },
            { letter: "D", text: "abundance" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-dsr-c35-joints",
      family: "G9",
      title: "The Double Clunk",
      kind: "Paired texts · 9.DSR",
      blurb: "A city newsletter and a neighbor's post about new bridge joints.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From a City Engineering Newsletter</strong></p>" +
        "<p>" + N(1) + "Drivers on the Harbor Street Bridge may notice metal teeth crossing the road at each end. " +
        N(2) + "These are expansion joints, and they let the steel deck grow longer on hot days and shorter on cold ones. " +
        N(3) + "Without them, the deck would push against the abutments in summer and crack. " +
        N(4) + "Our crews replaced the worn joints this spring, and the new ones should last twenty-five years.</p>" +
        "<p><strong>Text 2 — A Neighbor's Post on a Community Forum</strong></p>" +
        "<p>" + N(5) + "Since the Harbor Street Bridge reopened, every car crossing the new joints makes a loud double clunk. " +
        N(6) + "I live two houses from the east end, and the noise starts at five in the morning. " +
        N(7) + "I understand the joints keep the bridge safe, and I am glad the work is done. " +
        N(8) + "But did anyone check whether a quieter design was available? " +
        N(9) + "Some cities use rubber-covered joints that hum instead of bang.</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Both the newsletter and the forum post agree that —",
          choices: [
            { letter: "A", text: "the bridge should be closed at night" },
            { letter: "B", text: "the joints serve a real safety purpose" },
            { letter: "C", text: "the old joints were much quieter" },
            { letter: "D", text: "rubber joints are always cheaper" }
          ],
          correct: "B"
        },
        {
          id: "respond",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "How does the writer of Text 2 respond to the idea in sentence 3 of Text 1?",
          choices: [
            { letter: "A", text: "by accepting the safety reason but raising another concern" },
            { letter: "B", text: "by claiming the deck will crack whether or not joints are used" },
            { letter: "C", text: "by insisting that the city remove all of the new joints" },
            { letter: "D", text: "by questioning whether steel changes size in the heat" }
          ],
          correct: "A"
        },
        {
          id: "personal",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the two texts reports a personal experience rather than a general fact or a question?",
          choices: [
            { letter: "A", text: "sentence 3" },
            { letter: "B", text: "sentence 8" },
            { letter: "C", text: "sentence 6" },
            { letter: "D", text: "sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "without",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The newsletter writer includes sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "describe how the crews did their work" },
            { letter: "B", text: "apologize to neighbors for the noise" },
            { letter: "C", text: "explain what would happen without joints" },
            { letter: "D", text: "compare steel bridges with stone ones" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The main difference between the two texts is that Text 1 —",
          choices: [
            { letter: "A", text: "explains why joints are needed, while Text 2 tells how they affect neighbors" },
            { letter: "B", text: "praises the old joints, while Text 2 criticizes every bridge in the city" },
            { letter: "C", text: "is written by a driver, while Text 2 is written by a bridge engineer" },
            { letter: "D", text: "gives no dates at all, while Text 2 lists the exact repair costs" }
          ],
          correct: "A"
        },
        {
          id: "quieter",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence from Text 2 offers evidence that a quieter option may exist?",
          choices: [
            { letter: "A", text: "sentence 5" },
            { letter: "B", text: "sentence 7" },
            { letter: "C", text: "sentence 8" },
            { letter: "D", text: "sentence 9" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c35-weeding",
      family: "G9",
      title: "Weeding the Shelves",
      kind: "Informational · 9.RI",
      blurb: "Why librarians remove books on purpose.",
      level: 3,
      passage:
        "<p>" + N(1) + "Many library users are surprised to learn that librarians regularly remove books from the shelves, a practice known as weeding. " +
        N(2) + "The term comes from gardening, and the idea is similar: clearing out what is no longer healthy so the rest can thrive. " +
        N(3) + "A travel guide from fifteen years ago may list hotels that have since closed, and an old science book can describe a \"fact\" that researchers have disproved. " +
        N(4) + "Shelves crowded with outdated or damaged books also make it harder for readers to find the good ones. " +
        N(5) + "Librarians usually weigh several factors before removing a title, including its condition, its accuracy, and how often it has been checked out. " +
        N(6) + "Weeded books are not always thrown away; many are sold at library fundraisers or donated. " +
        N(7) + "Although some patrons find the practice wasteful, most librarians see it as a form of care for the collection." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the article about weeding?",
          choices: [
            { letter: "A", text: "Libraries should stop buying travel guides." },
            { letter: "B", text: "Most weeded books end up in the trash." },
            { letter: "C", text: "Gardens and libraries share a long history." },
            { letter: "D", text: "Removing some books keeps a collection useful." }
          ],
          correct: "D"
        },
        {
          id: "garden",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes the gardening comparison in sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "suggest that librarians also tend gardens" },
            { letter: "B", text: "help readers grasp the purpose of weeding" },
            { letter: "C", text: "argue that old books should become compost" },
            { letter: "D", text: "introduce a story about a garden club" }
          ],
          correct: "B"
        },
        {
          id: "examples",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence gives specific examples of books that may have become outdated?",
          choices: [
            { letter: "A", text: "sentence 3" },
            { letter: "B", text: "sentence 4" },
            { letter: "C", text: "sentence 5" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "A"
        },
        {
          id: "last",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does sentence 7 relate to the rest of the weeding article?",
          choices: [
            { letter: "A", text: "It brings in a brand-new topic." },
            { letter: "B", text: "It lists the steps for removing a book." },
            { letter: "C", text: "It notes an objection, then restates the main point." },
            { letter: "D", text: "It tells a story about a single patron." }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which phrase from the article expresses a viewpoint rather than a fact about how weeding is done?",
          choices: [
            { letter: "A", text: "a form of care for the collection" },
            { letter: "B", text: "sold at library fundraisers" },
            { letter: "C", text: "its condition, its accuracy" },
            { letter: "D", text: "the term comes from gardening" }
          ],
          correct: "A"
        },
        {
          id: "weeded",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the article, what happens to many weeded books?",
          choices: [
            { letter: "A", text: "They are moved to a storage room." },
            { letter: "B", text: "They are sold or given away." },
            { letter: "C", text: "They are sent back to publishers." },
            { letter: "D", text: "They are rebound and reshelved." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c35-rooftop-hives",
      family: "G9",
      title: "Six Floors Up",
      kind: "Literary · 9.RL",
      blurb: "Kenji visits the hives on a city rooftop.",
      level: 1,
      passage:
        "<p>" + N(1) + "The hives on top of the Eastside Community Center were Kenji's favorite secret in the whole city. " +
        N(2) + "Six floors below, buses hissed and sirens wailed, but up here the only sound was a low, busy hum. " +
        N(3) + "Ms. Ferreira handed him a veil and showed him how to lift a frame slowly, without jerking. " +
        N(4) + "\"Bees don't mind company,\" she said. " +
        N(5) + "\"They mind surprises.\" " +
        N(6) + "Kenji held the frame up to the light, and the honey glowed amber like a stained-glass window. " +
        N(7) + "He had always thought the city was nothing but concrete and noise. " +
        N(8) + "Now he looked out at the window boxes, the park trees, and the flowering weeds in the empty lots, and he saw a map the bees could read." +
        "</p>",
      claims: [
        {
          id: "contrast",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The contrast in sentence 2 between the street and the rooftop mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the rooftop feels calm and apart from the city" },
            { letter: "B", text: "the hives are in danger from passing traffic" },
            { letter: "C", text: "Kenji is afraid of being up so high" },
            { letter: "D", text: "the community center is too noisy for bees" }
          ],
          correct: "A"
        },
        {
          id: "advice",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Ms. Ferreira's words in sentences 4 and 5 mainly teach Kenji that he should —",
          choices: [
            { letter: "A", text: "bring friends along to visit the hives" },
            { letter: "B", text: "stay away from the hives when alone" },
            { letter: "C", text: "move slowly and calmly near the bees" },
            { letter: "D", text: "wear thicker clothing on the roof" }
          ],
          correct: "C"
        },
        {
          id: "glass",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 6, comparing the honey to a stained-glass window mainly suggests that it is —",
          choices: [
            { letter: "A", text: "sticky and hard to handle" },
            { letter: "B", text: "bright and beautiful in the light" },
            { letter: "C", text: "old, cracked and fragile" },
            { letter: "D", text: "dark and cloudy" }
          ],
          correct: "B"
        },
        {
          id: "view",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "How does Kenji's view of the city change by the end of the story?",
          choices: [
            { letter: "A", text: "He decides the city is too loud to live in." },
            { letter: "B", text: "He wants to move the hives to the park." },
            { letter: "C", text: "He grows tired of visiting the rooftop." },
            { letter: "D", text: "He starts to see green spaces bees rely on." }
          ],
          correct: "D"
        },
        {
          id: "map",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 8, the image of a map the bees could read suggests that the city's plants —",
          choices: [
            { letter: "A", text: "are labeled with small signs" },
            { letter: "B", text: "grow in straight, even rows" },
            { letter: "C", text: "form a network of food for bees" },
            { letter: "D", text: "are slowly disappearing" }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the narrator closely follows Kenji, the reader mainly learns —",
          choices: [
            { letter: "A", text: "what Ms. Ferreira privately thinks" },
            { letter: "B", text: "what Kenji notices and how his thinking shifts" },
            { letter: "C", text: "how the bees feel about having visitors" },
            { letter: "D", text: "the history of the community center" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
