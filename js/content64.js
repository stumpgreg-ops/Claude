/* SOL Labyrinth — Grade 10 medium-tier expansion packs (v5.15, nights 21-50): a county fair, lighthouses,
 * a food truck and volcanoes. 21 packs x 6 questions. Original text only.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 · LITERARY · county fair */
    {
      id: "g10-rl-c64-goat-ring",
      family: "G10",
      title: "Class Seven, Market Goats",
      kind: "Literary · 10.RL",
      blurb: "Marisol's goat behaved perfectly at home. At the county fair, he will not take a step.",
      level: 1,
      passage:
        "<p>" + N(1) + "The show barn at the Harlow County Fair smelled of cedar shavings and sunscreen, and the loudspeaker crackled every few minutes with a name that was not Marisol's. " +
        N(2) + "She stood in the warm-up pen with Biscuit, a brown-and-white goat who had spent the whole morning chewing on the hem of her show shirt. " +
        N(3) + "For six months Marisol had walked Biscuit up and down the gravel driveway at home, practicing the square stance the judges wanted to see. " +
        N(4) + "At home Biscuit had been perfect. " +
        N(5) + "Here, with the big fans roaring and a toddler waving a pinwheel by the rail, he planted his front hooves and refused to move.</p>" +
        "<p>" + N(6) + "\"Class Seven, market goats,\" the announcer called. " +
        N(7) + "Marisol's hands went cold. " +
        N(8) + "She tugged the collar, and Biscuit tugged back like a stubborn suitcase with a broken wheel. " +
        N(9) + "Then she remembered what her grandfather always said when the old tractor would not start: \"Stop pulling. Wait until it wants to go.\" " +
        N(10) + "She knelt, scratched the goat behind the ears, and breathed slowly until he leaned his weight against her knee.</p>" +
        "<p>" + N(11) + "They entered the ring last. " +
        N(12) + "Biscuit placed fourth out of nine, which meant a white ribbon instead of the blue one Marisol had pictured all summer. " +
        N(13) + "But as the judge walked down the line, she paused in front of them. " +
        N(14) + "\"You kept your animal calm when he was scared,\" the judge said. " +
        N(15) + "\"That is what I look for in a showman.\" " +
        N(16) + "Marisol pinned the white ribbon to Biscuit's pen, and for the first time all day, she laughed.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of Marisol's story at the Harlow County Fair?",
          choices: [
            { letter: "A", text: "Hard practice at home always guarantees a top prize." },
            { letter: "B", text: "Patience under pressure can matter more than first place." },
            { letter: "C", text: "Animals tend to behave the same way in every setting." },
            { letter: "D", text: "Advice from older relatives rarely helps in a public setting." }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "10.RL.1.C",
          stem: "Sentences 9 and 10 characterize Marisol as someone who —",
          choices: [
            { letter: "A", text: "blames others when her plans go wrong" },
            { letter: "B", text: "cares more about ribbons than about her goat" },
            { letter: "C", text: "can calm herself and change her approach" },
            { letter: "D", text: "refuses to take advice from her family" }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "10.RL.2.A",
          stem: "In sentence 8, comparing Biscuit to a stubborn suitcase with a broken wheel mainly suggests that the goat —",
          choices: [
            { letter: "A", text: "is heavy and resists being dragged forward" },
            { letter: "B", text: "is eager to rush straight into the show ring" },
            { letter: "C", text: "is too sick and weak to walk on his own" },
            { letter: "D", text: "is ready to run away from the barn" }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in Marisol's struggle with Biscuit?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "setting",
          sol: "10.RL.3.A",
          stem: "The author includes the roaring fans and the waving pinwheel in sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "show that the fair is crowded and poorly organized" },
            { letter: "B", text: "suggest that the toddler wants to pet Biscuit" },
            { letter: "C", text: "show that the barn is too hot for goats" },
            { letter: "D", text: "explain why Biscuit acts differently than at home" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          stem: "The tone of sentence 16, when Marisol pins the white ribbon to the pen, is best described as —",
          choices: [
            { letter: "A", text: "relieved and content" },
            { letter: "B", text: "bitter and disappointed" },
            { letter: "C", text: "anxious and uncertain" },
            { letter: "D", text: "proud and boastful" }
          ],
          correct: "A"
        }
      ]
    },

    /* 2 · INFORMATIONAL · lighthouses */
    {
      id: "g10-ri-c64-quiet-towers",
      family: "G10",
      title: "When the Keepers Left",
      kind: "Informational · 10.RI",
      blurb: "Lighthouses lost their keepers long ago. Why does anyone still keep the lights burning?",
      level: 2,
      passage:
        "<p>" + N(1) + "For most of their history, lighthouses needed people. " +
        N(2) + "A keeper climbed the tower each evening to trim the wick, polish the glass, and wind the clockwork that turned the great lens. " +
        N(3) + "On foggy nights the keeper might stay awake until dawn, sounding a horn by hand every half minute. " +
        N(4) + "The work was lonely, and many stations stood on rocky islands that supply boats could reach only in calm weather.</p>" +
        "<p>" + N(5) + "During the twentieth century, that job slowly disappeared. " +
        N(6) + "Electric lamps replaced oil, and automatic timers switched them on at dusk. " +
        N(7) + "Light sensors later made the timers unnecessary, since a lamp could now detect for itself when the sky grew dark. " +
        N(8) + "By the end of the century, nearly every keeper's house along the coast stood empty.</p>" +
        "<p>" + N(9) + "Today many towers use small LED lamps powered by solar panels and batteries. " +
        N(10) + "A single technician may care for dozens of lights, visiting each one only a few times a year. " +
        N(11) + "Ships also carry satellite navigation, which tells a captain the vessel's position within a few meters.</p>" +
        "<p>" + N(12) + "Why, then, keep the lights at all? " +
        N(13) + "Electronics can fail, and a dead battery or a lightning strike can leave a ship's screen blank in the middle of a storm. " +
        N(14) + "A flashing light on a dark shore needs no signal, no password, and no software update. " +
        N(15) + "For that reason, coastal agencies still treat lighthouses as a backup that sailors can trust when newer tools let them down.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of \"When the Keepers Left\"?",
          choices: [
            { letter: "A", text: "Keepers were replaced because the work was too dangerous." },
            { letter: "B", text: "Satellite navigation has made most lighthouses useless." },
            { letter: "C", text: "Lighthouses no longer need keepers but remain a trusted backup." },
            { letter: "D", text: "Solar-powered LED lamps shine brighter than old oil lamps." }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "How is the article about lighthouse keepers mainly organized?",
          choices: [
            { letter: "A", text: "as a history ending with a question and answer" },
            { letter: "B", text: "as a comparison of two famous lighthouses" },
            { letter: "C", text: "as a problem followed by several failed solutions" },
            { letter: "D", text: "as a list of steps for becoming a lighthouse keeper" }
          ],
          correct: "A"
        },
        {
          id: "sensor",
          sol: "10.RI.1.B",
          stem: "Which sentence explains why automatic timers were no longer needed in lighthouses?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "B"
        },
        {
          id: "question",
          sol: "10.RI.2.B",
          stem: "The author includes the question in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "suggest that old towers should be torn down" },
            { letter: "B", text: "show that the author is unsure of the facts" },
            { letter: "C", text: "shift the topic to satellite technology" },
            { letter: "D", text: "introduce the reason the lights are still kept" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "10.RI.2.C",
          stem: "In sentences 13 through 15, the author's attitude toward lighthouses is best described as —",
          choices: [
            { letter: "A", text: "nostalgic for the days of the keepers" },
            { letter: "B", text: "respectful of their lasting value" },
            { letter: "C", text: "doubtful about their usefulness at sea" },
            { letter: "D", text: "amused by their old-fashioned design" }
          ],
          correct: "B"
        },
        {
          id: "trim",
          sol: "10.RV.1.C",
          stem: "In sentence 2, the word trim most nearly means to —",
          choices: [
            { letter: "A", text: "decorate with strips of ribbon" },
            { letter: "B", text: "lower the cost of" },
            { letter: "C", text: "fold neatly and store" },
            { letter: "D", text: "cut back so it burns evenly" }
          ],
          correct: "D"
        }
      ]
    },

    /* 3 · POETRY · volcanoes */
    {
      id: "g10-rl-c64-lava-fern",
      family: "G10",
      title: "Lava Field, Ten Years After",
      kind: "Poetry · 10.RL",
      blurb: "A speaker walks with her father across the rock that buried his old road.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "We walked out where the mountain spilled its heat,<br>" +
        L(2) + "a black sea frozen in the middle of a wave.<br>" +
        L(3) + "My boots rang hollow on the crusted rope of stone,<br>" +
        L(4) + "and every crack held shadow like a held breath.<br>" +
        L(5) + "My father said the road once ran right here:<br>" +
        L(6) + "a bakery, a church bell, someone's porch swing,<br>" +
        L(7) + "now buried under rock that cooled in weeks<br>" +
        L(8) + "and will not soften in a thousand years.<br>" +
        L(9) + "I wanted to hate the mountain for its hunger.<br>" +
        L(10) + "Then I knelt and saw a fern no longer than my thumb,<br>" +
        L(11) + "green as a struck match, rooted in a seam,<br>" +
        L(12) + "unfolding as if no one had told it what this ground had done.<br>" +
        L(13) + "We stood a long time, saying nothing.<br>" +
        L(14) + "The mountain slept. The fern kept learning how to stand." +
        "</p>",
      claims: [
        {
          id: "wave",
          sol: "10.RL.2.A",
          stem: "In line 2, describing the lava field as a black sea frozen in the middle of a wave mainly suggests that the rock —",
          choices: [
            { letter: "A", text: "is still wet and dangerous to cross" },
            { letter: "B", text: "still shows the shape of the moving flow" },
            { letter: "C", text: "is slowly creeping toward the ocean" },
            { letter: "D", text: "is too smooth and slick to walk on" }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The images in line 6 (a bakery, a church bell, a porch swing) mainly create a sense of —",
          choices: [
            { letter: "A", text: "loss of ordinary community life" },
            { letter: "B", text: "excitement about rebuilding the town" },
            { letter: "C", text: "fear that the volcano will erupt again" },
            { letter: "D", text: "curiosity about the region's history" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "10.RL.3.A",
          stem: "Which line marks the shift in the speaker's feelings about the lava field?",
          choices: [
            { letter: "A", text: "Line 4" },
            { letter: "B", text: "Line 9" },
            { letter: "C", text: "Line 10" },
            { letter: "D", text: "Line 13" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of \"Lava Field, Ten Years After\"?",
          choices: [
            { letter: "A", text: "Nature should be feared rather than studied." },
            { letter: "B", text: "Memories of a lost place fade very quickly." },
            { letter: "C", text: "Families grow closer only during disasters." },
            { letter: "D", text: "Life can begin again in places marked by loss." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          stem: "In \"Lava Field, Ten Years After,\" the tone of the closing line about the sleeping mountain and the fern is best described as —",
          choices: [
            { letter: "A", text: "quietly hopeful" },
            { letter: "B", text: "bitterly resigned" },
            { letter: "C", text: "nervously alert" },
            { letter: "D", text: "playfully mocking" }
          ],
          correct: "A"
        },
        {
          id: "hunger",
          sol: "10.RV.1.C",
          stem: "In line 9, the word hunger refers to the mountain's —",
          choices: [
            { letter: "A", text: "need for rain and fresh soil" },
            { letter: "B", text: "long periods of quiet sleep" },
            { letter: "C", text: "power to swallow up the town" },
            { letter: "D", text: "appeal to visiting hikers" }
          ],
          correct: "C"
        }
      ]
    },

    /* 4 · VOCABULARY · food truck */
    {
      id: "g10-rv-c64-mango-special",
      family: "G10",
      title: "The Mango Special",
      kind: "Vocabulary · 10.RV",
      blurb: "The salsa runs out in the middle of the lunch rush, and Leilani has to think fast.",
      level: 1,
      passage:
        "<p>" + N(1) + "At 11:45 the line outside the Kona Street Kitchen truck stretched past the last lamppost in the office park, and inside, the narrow kitchen grew <strong>frantic</strong>. " +
        N(2) + "Leilani worked the grill while her cousin Davi, a <strong>novice</strong> who had started only on Monday, took orders through the window. " +
        N(3) + "He was polite but slow, and twice he wrote \"no onions\" on the wrong ticket. " +
        N(4) + "By noon the supply of pineapple salsa was <strong>meager</strong>, just a few spoonfuls scraping around the bottom of the tub. " +
        N(5) + "Leilani could not leave to buy more, so she decided to <strong>improvise</strong>. " +
        N(6) + "She chopped the mangoes she had planned to use tomorrow, added lime juice and a pinch of chili, and wrote \"Mango Special\" on the chalkboard. " +
        N(7) + "Customers liked it so much that several asked whether it would be on the menu next week.</p>" +
        "<p>" + N(8) + "After the rush, the cousins sat on overturned crates to <strong>replenish</strong> their energy with leftover rice and cold water. " +
        N(9) + "They argued for a while about whether the mango salsa should replace the pineapple for good. " +
        N(10) + "Davi liked the color; Leilani worried about the price of mangoes in winter. " +
        N(11) + "In the end they reached a <strong>consensus</strong>: they would offer both and let the customers decide. " +
        N(12) + "Davi grinned and said he had learned more in one lunch hour than in a whole week of training videos.</p>",
      claims: [
        {
          id: "frantic",
          sol: "10.RV.1.C",
          stem: "Which detail from sentence 1 best helps the reader understand the meaning of frantic?",
          choices: [
            { letter: "A", text: "the time, which was 11:45 in the morning" },
            { letter: "B", text: "the line past the last lamppost" },
            { letter: "C", text: "the truck's location in an office park" },
            { letter: "D", text: "the truck's name, Kona Street Kitchen" }
          ],
          correct: "B"
        },
        {
          id: "novice",
          sol: "10.RV.1.B",
          stem: "In sentence 2, the word novice most nearly means —",
          choices: [
            { letter: "A", text: "a relative who works for free" },
            { letter: "B", text: "a cashier who handles the money" },
            { letter: "C", text: "a worker who refuses to learn" },
            { letter: "D", text: "a beginner with little experience" }
          ],
          correct: "D"
        },
        {
          id: "meager",
          sol: "10.RV.1.B",
          stem: "As used in sentence 4 to describe the pineapple salsa, meager most nearly means —",
          choices: [
            { letter: "A", text: "barely enough" },
            { letter: "B", text: "slightly spoiled" },
            { letter: "C", text: "much too spicy" },
            { letter: "D", text: "frozen solid" }
          ],
          correct: "A"
        },
        {
          id: "improvise",
          sol: "10.RV.1.C",
          stem: "How do sentences 5 and 6 help the reader understand the word improvise?",
          choices: [
            { letter: "A", text: "They show Leilani following a written recipe exactly." },
            { letter: "B", text: "They show Leilani buying fresh supplies at a store." },
            { letter: "C", text: "They show Leilani making something new from what she has." },
            { letter: "D", text: "They show Leilani asking customers what they want." }
          ],
          correct: "C"
        },
        {
          id: "replenish",
          sol: "10.RV.1.A",
          stem: "The prefix re- means again, and the root plen- (as in plenty) means full. Based on these parts, to replenish their energy in sentence 8 means to —",
          choices: [
            { letter: "A", text: "use it up quickly" },
            { letter: "B", text: "fill it up again" },
            { letter: "C", text: "measure it carefully" },
            { letter: "D", text: "share it equally" }
          ],
          correct: "B"
        },
        {
          id: "consensus",
          sol: "10.RV.1.D",
          stem: "The author chose consensus rather than decision in sentence 11. Compared with decision, consensus suggests a choice that —",
          choices: [
            { letter: "A", text: "both cousins agreed on together" },
            { letter: "B", text: "one cousin forced on the other" },
            { letter: "C", text: "was made without any discussion" },
            { letter: "D", text: "will probably change tomorrow" }
          ],
          correct: "A"
        }
      ]
    },

    /* 5 · PAIRED · county fair */
    {
      id: "g10-dsr-c64-fair-dates",
      family: "G10",
      title: "August or September?",
      kind: "Paired texts · 10.DSR",
      blurb: "The fair board wants to escape the summer heat. A young rabbit exhibitor sees a different problem.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Notice from the Delmore County Fair Board</strong></p>" +
        "<p>" + N(1) + "Beginning next year, the Delmore County Fair will move from the second week of August to the last week of September. " +
        N(2) + "Over the past five summers, the fair has recorded eleven days above 95 degrees, and two livestock animals had to be treated for heat stress. " +
        N(3) + "Attendance on those hot afternoons dropped by nearly a third, and several food vendors packed up early. " +
        N(4) + "Cooler September evenings should be safer for animals and more comfortable for families. " +
        N(5) + "The board also expects lower electricity bills, since the barns will need fewer fans. " +
        N(6) + "We believe this change will help the fair remain strong for another hundred years, and we thank exhibitors for their patience as schedules adjust.</p>" +
        "<p><strong>Text 2 — Letter to the editor from Hana Okafor, age 16</strong></p>" +
        "<p>" + N(7) + "I have shown rabbits at the Delmore fair since I was nine, and I understand why the board worries about the heat. " +
        N(8) + "But late September is the middle of the school year. " +
        N(9) + "Students who show animals would have to miss class on judging days, which always fall on weekdays. " +
        N(10) + "Many of us also play fall sports or march in the band, and those schedules are already full. " +
        N(11) + "Last year, youth exhibitors made up almost half of all livestock entries. " +
        N(12) + "If the fair moves, I expect that number to fall sharply. " +
        N(13) + "Instead, the board could keep August but hold the animal shows in the early morning, when it is cooler. " +
        N(14) + "That would protect the animals without pushing young exhibitors out.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do the Delmore fair board and Hana Okafor agree?",
          choices: [
            { letter: "A", text: "The fair should be held in late September." },
            { letter: "B", text: "Youth entries have been falling for years." },
            { letter: "C", text: "Summer heat is a real danger to fair animals." },
            { letter: "D", text: "Vendors are the fair's most important concern." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes a key difference between the board's notice and Hana's letter?",
          choices: [
            { letter: "A", text: "The board focuses on heat; Hana focuses on students' schedules." },
            { letter: "B", text: "The board wants a shorter fair; Hana wants a longer one." },
            { letter: "C", text: "The board relies on opinion; Hana relies only on numbers." },
            { letter: "D", text: "The board praises the vendors; Hana criticizes them." }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          stem: "Select TWO sentences from Text 2 that best explain why a September fair would be hard for student exhibitors.",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "respond",
          sol: "10.DSR.E",
          stem: "How does Hana's suggestion in sentence 13 respond to the problem described in sentence 2?",
          choices: [
            { letter: "A", text: "It argues that the heat records are exaggerated." },
            { letter: "B", text: "It moves the animal shows to September evenings." },
            { letter: "C", text: "It asks the board to buy more fans for the barns." },
            { letter: "D", text: "It reduces the heat risk while keeping August dates." }
          ],
          correct: "D"
        },
        {
          id: "conclude",
          sol: "10.DSR.E",
          stem: "A reader who uses both texts about the Delmore County Fair could best conclude that —",
          choices: [
            { letter: "A", text: "the fair will probably be canceled within a few years" },
            { letter: "B", text: "the board's plan may solve one problem but create another" },
            { letter: "C", text: "students care very little about the animals' safety" },
            { letter: "D", text: "most families would rather attend the fair in August" }
          ],
          correct: "B"
        },
        {
          id: "voice",
          sol: "10.DSR.E",
          stem: "Compared with the fair board's notice, Hana's letter sounds more —",
          choices: [
            { letter: "A", text: "personal and persuasive" },
            { letter: "B", text: "official and impersonal" },
            { letter: "C", text: "angry and insulting" },
            { letter: "D", text: "playful and joking" }
          ],
          correct: "A"
        }
      ]
    },

    /* 6 · LITERARY · lighthouses */
    {
      id: "g10-rl-c64-gull-point",
      family: "G10",
      title: "Three Flashes",
      kind: "Literary · 10.RL",
      blurb: "Every night Amaya counts the flashes from the lighthouse she grew up beneath. Her granddaughter thinks it is pointless.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every night at nine, my grandmother Amaya pulled her chair to the window of her fourth-floor apartment and counted the flashes from Gull Point Light. " +
        N(2) + "One, two, three, then darkness for twelve seconds; one, two, three again. " +
        N(3) + "She had grown up in the keeper's house beneath that tower, back when her father climbed its iron stairs with a can of oil, and she still spoke of the light the way other people speak of a cousin. " +
        N(4) + "I thought the habit was sweet but pointless. " +
        N(5) + "\"Nobody needs to watch it anymore, Abuela,\" I told her the first week I stayed with her. " +
        N(6) + "\"A computer runs it now.\" " +
        N(7) + "She only nodded and kept counting, her lips moving without a sound.</p>" +
        "<p>" + N(8) + "On my last night there, a storm rolled in off the water and rattled the window in its frame. " +
        N(9) + "At 9:40 my grandmother stood up so quickly that her tea spilled. " +
        N(10) + "\"Two,\" she said. " +
        N(11) + "\"It's only giving two.\" " +
        N(12) + "I squinted into the rain and saw nothing unusual, just a light blinking somewhere in the dark. " +
        N(13) + "She was already dialing the harbor office, reading off the pattern in a voice as steady as a ruler. " +
        N(14) + "The next morning a technician called to thank her: a failing lamp had thrown off the signal, and the alarm meant to report it had failed too. " +
        N(15) + "I said nothing at breakfast. " +
        N(16) + "That night I pulled a second chair to the window.</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in the story about Gull Point Light is most ironic?",
          choices: [
            { letter: "A", text: "Amaya grew up in the keeper's house beneath the tower." },
            { letter: "B", text: "The automatic alarm fails, but Amaya's watching does not." },
            { letter: "C", text: "The narrator stays with Amaya for more than a week." },
            { letter: "D", text: "A technician calls Amaya the morning after the storm." }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "10.RL.1.C",
          stem: "Sentence 3 characterizes Amaya as someone who —",
          choices: [
            { letter: "A", text: "wishes she could forget her childhood" },
            { letter: "B", text: "distrusts every kind of modern machine" },
            { letter: "C", text: "regrets ever leaving the keeper's house" },
            { letter: "D", text: "feels a close personal bond with the light" }
          ],
          correct: "D"
        },
        {
          id: "ruler",
          sol: "10.RL.2.A",
          stem: "In sentence 13, describing Amaya's voice as steady as a ruler suggests that she is —",
          choices: [
            { letter: "A", text: "calm, exact, and in control" },
            { letter: "B", text: "strict and unkind to the harbor staff" },
            { letter: "C", text: "worn out from staying up so late" },
            { letter: "D", text: "unsure about what she has seen" }
          ],
          correct: "A"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The disagreement between the narrator and Amaya in sentences 4 through 7 is mainly about —",
          choices: [
            { letter: "A", text: "whether the narrator should stay longer" },
            { letter: "B", text: "whether the apartment is too far from the water" },
            { letter: "C", text: "whether Amaya's nightly watch still has a purpose" },
            { letter: "D", text: "whether computers should run lighthouses at all" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The author ends the story with sentence 16, in which the narrator pulls a second chair to the window, mainly to —",
          choices: [
            { letter: "A", text: "hint that the storm will return the next night" },
            { letter: "B", text: "reveal that the narrator plans to become a keeper" },
            { letter: "C", text: "show that the narrator is still not convinced" },
            { letter: "D", text: "show without explaining it that her view has changed" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of \"Three Flashes\"?",
          choices: [
            { letter: "A", text: "Young people should never question their elders." },
            { letter: "B", text: "Modern technology is usually less reliable than people." },
            { letter: "C", text: "Patient attention can catch what machines miss." },
            { letter: "D", text: "Storms make old family habits feel more important." }
          ],
          correct: "C"
        }
      ]
    },

    /* 7 · INFORMATIONAL · volcanoes */
    {
      id: "g10-ri-c64-restless-mountain",
      family: "G10",
      title: "Listening to a Restless Mountain",
      kind: "Informational · 10.RI",
      blurb: "Shaking, swelling and gas: the three clues scientists watch before a volcano erupts.",
      level: 1,
      passage:
        "<p>" + N(1) + "A volcano rarely erupts without warning. " +
        N(2) + "Before magma reaches the surface, it pushes upward through cracks in the rock, and that movement leaves clues. " +
        N(3) + "Scientists who study volcanoes, called volcanologists, watch for three main kinds of signals.</p>" +
        "<p>" + N(4) + "The first signal is shaking. " +
        N(5) + "As magma forces its way up, it breaks rock and causes many small earthquakes, most too weak for people to feel. " +
        N(6) + "Instruments called seismometers, buried in the ground around the volcano, record each tremor. " +
        N(7) + "A sudden jump from a few quakes a day to hundreds can mean that magma is on the move.</p>" +
        "<p>" + N(8) + "The second signal is swelling. " +
        N(9) + "Rising magma can make the ground bulge like a balloon slowly filling with air. " +
        N(10) + "Tiltmeters and satellite measurements can detect changes of just a few centimeters across the side of a mountain.</p>" +
        "<p>" + N(11) + "The third signal is gas. " +
        N(12) + "Magma releases gases such as sulfur dioxide, and an increase in these gases near the vents often means fresh magma is close to the surface. " +
        N(13) + "Scientists measure the gases with sensors on the ground and sometimes with instruments carried by drones.</p>" +
        "<p>" + N(14) + "No single signal proves that an eruption is coming. " +
        N(15) + "When all three rise together, however, officials can warn nearby towns days or even weeks ahead, giving families time to leave safely.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "What is the main idea of \"Listening to a Restless Mountain\"?",
          choices: [
            { letter: "A", text: "Scientists watch several clues to tell when a volcano may erupt." },
            { letter: "B", text: "Small earthquakes are the most dangerous part of an eruption." },
            { letter: "C", text: "Drones have replaced every other tool for studying volcanoes." },
            { letter: "D", text: "Volcanoes usually erupt without giving any warning at all." }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "Sentences 4 through 13 of the volcano article are organized mainly by —",
          choices: [
            { letter: "A", text: "comparing two famous eruptions in history" },
            { letter: "B", text: "listing events in the order they happened" },
            { letter: "C", text: "describing three signals one at a time" },
            { letter: "D", text: "explaining a problem and then its solution" }
          ],
          correct: "C"
        },
        {
          id: "quakes",
          sol: "10.RI.1.B",
          stem: "According to the article, what can a sudden jump in the number of small earthquakes near a volcano mean?",
          choices: [
            { letter: "A", text: "The seismometers need to be repaired." },
            { letter: "B", text: "The volcano has finished erupting." },
            { letter: "C", text: "Gas levels are falling near the vents." },
            { letter: "D", text: "Magma may be moving toward the surface." }
          ],
          correct: "D"
        },
        {
          id: "balloon",
          sol: "10.RI.2.B",
          stem: "The comparison in sentence 9 to a balloon slowly filling with air helps the reader understand that the ground —",
          choices: [
            { letter: "A", text: "may pop and collapse at any moment" },
            { letter: "B", text: "rises gradually as pressure builds below" },
            { letter: "C", text: "is hollow and lighter than it looks" },
            { letter: "D", text: "drifts slowly across the ocean floor" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "10.RI.1.C",
          stem: "The author wrote \"Listening to a Restless Mountain\" mainly to —",
          choices: [
            { letter: "A", text: "explain how scientists look for signs of an eruption" },
            { letter: "B", text: "persuade families to move away from volcanoes" },
            { letter: "C", text: "tell the story of one scientist's long career" },
            { letter: "D", text: "compare volcanoes found on different continents" }
          ],
          correct: "A"
        },
        {
          id: "together",
          sol: "10.RI.1.B",
          stem: "Based on sentences 14 and 15, which statement would the author of the volcano article most likely agree with?",
          choices: [
            { letter: "A", text: "One strong earthquake is enough to order an evacuation." },
            { letter: "B", text: "Gas sensors are more accurate than seismometers." },
            { letter: "C", text: "Warnings are most reliable when several signals change." },
            { letter: "D", text: "Eruptions can now be predicted to the exact hour." }
          ],
          correct: "C"
        }
      ]
    },

    /* 8 · DRAMA · food truck */
    {
      id: "g10-rl-c64-green-notebook",
      family: "G10",
      title: "The Green Notebook",
      kind: "Drama · 10.RL",
      blurb: "A city inspector arrives at the food truck ten minutes before opening, and Uncle Femi cannot find a thing.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "The kitchen of a food truck parked beside a college library. A wall clock reads 10:50. UNCLE FEMI stirs a pot of rice while his niece ADAEZE, sixteen, wipes the counter.</em></p>" +
        "<p><strong>FEMI:</strong> " + N(2) + "Ten minutes until we open, and the city sends an inspector today. " + N(3) + "Today! " + N(4) + "Where is the permit folder?</p>" +
        "<p><strong>ADAEZE:</strong> " + N(5) + "Behind the napkins, where it has been all year.</p>" +
        "<p><strong>FEMI:</strong> <em>(searching and knocking over a stack of cups)</em> " + N(6) + "I keep everything important in my head. " + N(7) + "My head is a better filing cabinet than any folder.</p>" +
        "<p><strong>ADAEZE:</strong> <em>(aside)</em> " + N(8) + "A filing cabinet with a broken drawer.</p>" +
        "<p><em>" + N(9) + "A knock. MS. HALVORSEN, a city health inspector, steps up to the window with a clipboard.</em></p>" +
        "<p><strong>HALVORSEN:</strong> " + N(10) + "Good morning. " + N(11) + "I'll need your refrigerator temperatures for the past two weeks.</p>" +
        "<p><strong>FEMI:</strong> <em>(laughing too loudly)</em> " + N(12) + "Temperatures! " + N(13) + "Cold, madam. " + N(14) + "Always very cold.</p>" +
        "<p><strong>HALVORSEN:</strong> " + N(15) + "I need numbers, sir, not adjectives.</p>" +
        "<p><em>" + N(16) + "FEMI turns to ADAEZE, eyes wide. She opens a drawer and hands the inspector a small green notebook.</em></p>" +
        "<p><strong>ADAEZE:</strong> " + N(17) + "Twice a day since the first of the month. " + N(18) + "I started after the cooler began making that rattling noise.</p>" +
        "<p><strong>HALVORSEN:</strong> <em>(flipping pages)</em> " + N(19) + "Thirty-six, thirty-eight, thirty-seven. " + N(20) + "This is exactly what I like to see.</p>" +
        "<p><strong>FEMI:</strong> <em>(quietly, to ADAEZE)</em> " + N(21) + "You never told me about this notebook.</p>" +
        "<p><strong>ADAEZE:</strong> " + N(22) + "You never asked. " + N(23) + "<em>(She reaches behind the napkins and hands him the permit folder too.)</em></p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Femi's claim in sentence 7 that his head is a better filing cabinet than any folder is ironic because —",
          choices: [
            { letter: "A", text: "Adaeze agrees with him in her aside" },
            { letter: "B", text: "the inspector asks only to see the folder" },
            { letter: "C", text: "he cannot find what he needs when it matters" },
            { letter: "D", text: "he has memorized every temperature reading" }
          ],
          correct: "C"
        },
        {
          id: "aside",
          sol: "10.RL.3.A",
          stem: "The playwright gives Adaeze the aside in sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "reveal her private, joking doubt about Femi's system" },
            { letter: "B", text: "warn the inspector before she reaches the truck" },
            { letter: "C", text: "show that she is angry enough to quit her job" },
            { letter: "D", text: "explain to the audience how the folder was lost" }
          ],
          correct: "A"
        },
        {
          id: "char",
          sol: "10.RL.1.C",
          stem: "Taken together, sentences 17 and 18 characterize Adaeze as —",
          choices: [
            { letter: "A", text: "careless about kitchen safety" },
            { letter: "B", text: "eager to embarrass her uncle" },
            { letter: "C", text: "nervous around city officials" },
            { letter: "D", text: "responsible and quietly prepared" }
          ],
          correct: "D"
        },
        {
          id: "tension",
          sol: "10.RL.1.B",
          stem: "The tension between Femi and Ms. Halvorsen comes mainly from —",
          choices: [
            { letter: "A", text: "the inspector's dislike of the truck's food" },
            { letter: "B", text: "Femi's lack of the records she asks for" },
            { letter: "C", text: "Adaeze's refusal to help her uncle" },
            { letter: "D", text: "the crowd of students waiting outside" }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The stage directions in which Femi knocks over cups and laughs too loudly mainly create a mood of —",
          choices: [
            { letter: "A", text: "quiet sorrow" },
            { letter: "B", text: "comic panic" },
            { letter: "C", text: "calm confidence" },
            { letter: "D", text: "deep suspicion" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best supported by the inspection scene in \"The Green Notebook\"?",
          choices: [
            { letter: "A", text: "Family members should never keep secrets." },
            { letter: "B", text: "Inspectors are usually unfair to small businesses." },
            { letter: "C", text: "Cooking skill matters more than paperwork." },
            { letter: "D", text: "Careful records can matter more than confidence." }
          ],
          correct: "D"
        }
      ]
    },

    /* 9 · FUNCTIONAL TEXT · county fair */
    {
      id: "g10-ri-c64-baking-rules",
      family: "G10",
      title: "Junior Baking Division Rules",
      kind: "Functional text · 10.RI",
      blurb: "The entry rules for young bakers at the Rook Valley Fair: who may enter, when to drop off, and how judging works.",
      level: 1,
      passage:
        "<p><strong>Rook Valley Fair — Junior Baking Division</strong></p>" +
        "<p><strong>Who May Enter.</strong> " + N(1) + "Exhibitors must be between 9 and 18 years old on July 1 of the fair year. " +
        N(2) + "Each exhibitor may enter up to three items, but only one item in each class.</p>" +
        "<p><strong>Classes.</strong> " + N(3) + "Class 1 is yeast bread, Class 2 is quick bread or muffins, Class 3 is cookies, and Class 4 is decorated cake. " +
        N(4) + "Cookie entries must include six cookies on a paper plate.</p>" +
        "<p><strong>Drop-Off.</strong> " + N(5) + "Bring entries to the Home Arts Building on Tuesday between 7:00 and 10:00 a.m. " +
        N(6) + "Late entries will not be accepted for any reason. " +
        N(7) + "Each item must be covered with clear plastic wrap and labeled with the entry tag provided by the fair office.</p>" +
        "<p><strong>Judging.</strong> " + N(8) + "Judges score entries on appearance, texture, and flavor. " +
        N(9) + "Because judges taste every item, entries with cream cheese frosting or any filling that needs refrigeration will not be accepted. " +
        N(10) + "Decorated cakes are judged on appearance only and may be built on a foam form.</p>" +
        "<p><strong>Ribbons and Pickup.</strong> " + N(11) + "Ribbons are placed on Wednesday morning, and the building opens to visitors at noon. " +
        N(12) + "Exhibitors must pick up their entries on Sunday between 5:00 and 7:00 p.m. " +
        N(13) + "Items that are not collected will be donated or thrown away.</p>",
      claims: [
        {
          id: "headings",
          sol: "10.RI.2.A",
          stem: "The bold headings in the Rook Valley baking rules help a reader mainly by —",
          choices: [
            { letter: "A", text: "showing which rules matter most to judges" },
            { letter: "B", text: "making each step of entering easy to find" },
            { letter: "C", text: "listing the classes in order of difficulty" },
            { letter: "D", text: "explaining the history of the contest" }
          ],
          correct: "B"
        },
        {
          id: "frosting",
          sol: "10.RI.1.B",
          stem: "According to the Rook Valley rules, why are entries with cream cheese frosting not accepted?",
          choices: [
            { letter: "A", text: "They are allowed only on decorated cakes." },
            { letter: "B", text: "They are too difficult for young bakers." },
            { letter: "C", text: "The Home Arts Building has no room for them." },
            { letter: "D", text: "Judges taste them, and they need refrigeration." }
          ],
          correct: "D"
        },
        {
          id: "late",
          sol: "10.RI.1.B",
          stem: "Based on the rules, a young baker who arrives with a plate of cookies at 10:30 on Tuesday will most likely —",
          choices: [
            { letter: "A", text: "be turned away because drop-off has ended" },
            { letter: "B", text: "be asked to enter the cookies in Class 4" },
            { letter: "C", text: "be told to come back on Wednesday morning" },
            { letter: "D", text: "be allowed to enter if the plate is wrapped" }
          ],
          correct: "A"
        },
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The Rook Valley baking rules are written mainly for —",
          choices: [
            { letter: "A", text: "young bakers who plan to enter" },
            { letter: "B", text: "the judges who score each entry" },
            { letter: "C", text: "adults who sell baked goods at the fair" },
            { letter: "D", text: "visitors looking for food to buy" }
          ],
          correct: "A"
        },
        {
          id: "foam",
          sol: "10.RI.2.B",
          stem: "The rule in sentence 10 allowing decorated cakes to be built on a foam form makes sense because those cakes —",
          choices: [
            { letter: "A", text: "must be kept cold until judging" },
            { letter: "B", text: "are usually baked by older exhibitors" },
            { letter: "C", text: "are judged only on how they look" },
            { letter: "D", text: "are donated to visitors after the fair" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of sentence 6 in the drop-off rules is best described as —",
          choices: [
            { letter: "A", text: "apologetic and warm" },
            { letter: "B", text: "playful and joking" },
            { letter: "C", text: "uncertain and hesitant" },
            { letter: "D", text: "firm and direct" }
          ],
          correct: "D"
        }
      ]
    },

    /* 10 · ARGUMENT · lighthouses */
    {
      id: "g10-ri-c64-cape-wren",
      family: "G10",
      title: "Don't Sell Cape Wren",
      kind: "Argument · 10.RI",
      blurb: "A Port Ellery resident argues that the town should not sell its lighthouse to a private buyer.",
      level: 3,
      passage:
        "<p>" + N(1) + "The town of Port Ellery is about to sell the most photographed building it owns, and almost nobody is paying attention. " +
        N(2) + "Next month the council will vote on whether to sell the Cape Wren Lighthouse to a private buyer who plans to turn the keeper's cottage into a vacation rental. " +
        N(3) + "The sale would bring in $410,000, and the buyer has promised to keep the light working. " +
        N(4) + "Those are real benefits, and the council is right to worry about the $38,000 the town spends each year on repairs. " +
        N(5) + "Salt air eats paint, mortar, and iron faster than any small-town budget can keep up.</p>" +
        "<p>" + N(6) + "Still, a lighthouse is not just another surplus building like an old garage or an empty office. " +
        N(7) + "For more than a century, schoolchildren have climbed its stairs on field trips, and families have gathered on its path the way people in other towns gather on a courthouse square. " +
        N(8) + "Once the gate is locked and the cottage is rented by the week, that shared ownership ends, and no future council will be able to buy it back at this price.</p>" +
        "<p>" + N(9) + "There is a better option. " +
        N(10) + "Several towns along this coast have handed their lighthouses to nonprofit groups that raise money through tours, a small gift shop, and volunteer work days. " +
        N(11) + "One such group, two hours north of us, cut its town's repair costs to zero within four years. " +
        N(12) + "Port Ellery should give a friends group the same chance before it signs away something it can never replace.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the author's central claim about the Cape Wren Lighthouse?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "10.RI.2.B",
          stem: "In sentence 4, the author admits that the repair costs are a real concern mainly to —",
          choices: [
            { letter: "A", text: "treat the other side fairly before arguing against it" },
            { letter: "B", text: "prove that selling is the only sensible choice" },
            { letter: "C", text: "criticize the council for wasting the town's money" },
            { letter: "D", text: "suggest that the old tower should be torn down" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which detail most directly supports the author's claim that a nonprofit group could handle the lighthouse's costs?",
          choices: [
            { letter: "A", text: "the private buyer's offer of $410,000" },
            { letter: "B", text: "the field trips taken by schoolchildren" },
            { letter: "C", text: "the group that cut repair costs to zero" },
            { letter: "D", text: "the salt air that damages paint and iron" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "10.RI.1.C",
          stem: "Which statement from the Cape Wren argument is an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "The sale would bring the town $410,000." },
            { letter: "B", text: "A lighthouse is not just another surplus building." },
            { letter: "C", text: "The town spends $38,000 a year on lighthouse repairs." },
            { letter: "D", text: "The council will vote on the sale next month." }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's tone toward the proposed sale of Cape Wren is best described as —",
          choices: [
            { letter: "A", text: "concerned but reasonable" },
            { letter: "B", text: "furious and insulting" },
            { letter: "C", text: "cheerful and approving" },
            { letter: "D", text: "neutral and uninterested" }
          ],
          correct: "A"
        },
        {
          id: "surplus",
          sol: "10.RV.1.C",
          stem: "Based on the examples of an old garage and an empty office in sentence 6, the word surplus most nearly means —",
          choices: [
            { letter: "A", text: "very expensive" },
            { letter: "B", text: "badly damaged by storms" },
            { letter: "C", text: "no longer needed" },
            { letter: "D", text: "widely admired" }
          ],
          correct: "C"
        }
      ]
    },

    /* 11 · LITERARY · food truck */
    {
      id: "g10-rl-c64-dancing-sandwiches",
      family: "G10",
      title: "The Usual",
      kind: "Literary · 10.RL",
      blurb: "With their father recovering from surgery, Linh and Bao run his sandwich truck alone, and they do not agree on how.",
      level: 2,
      passage:
        "<p>" + N(1) + "Their father's knee surgery was on Thursday, so on Saturday morning Linh and her younger brother Bao drove the truck to the Riverside Market by themselves. " +
        N(2) + "Linh had taped their father's handwritten rules to the window above the grill: Bread toasted, not burned. Pickles drained. Smile even when it rains. " +
        N(3) + "Bao read the list, rolled his eyes, and began chalking a new menu board covered with drawings of dancing sandwiches.</p>" +
        "<p>" + N(4) + "\"Dad never draws on the board,\" Linh said. " +
        N(5) + "\"Dad isn't here,\" Bao answered, and kept drawing.</p>" +
        "<p>" + N(6) + "By ten the line was longer than either of them had expected. " +
        N(7) + "Young families stopped to laugh at the dancing sandwiches, and Bao took their orders with a showman's patter that made even the toddlers giggle. " +
        N(8) + "But the older regulars kept leaning toward the window to ask for \"the usual,\" and only Linh knew what that meant for each of them: extra cilantro for Mr. Ostrowski, no chili for the woman with the blue umbrella, two sandwiches wrapped separately for the man who always ate one on the bus.</p>" +
        "<p>" + N(9) + "At noon Bao slid a fresh sandwich across the counter to his sister. " +
        N(10) + "\"You remember everybody,\" he said, a little amazed. " +
        N(11) + "\"You make everybody stop,\" she replied. " +
        N(12) + "For the rest of the afternoon he called out the orders and she built them, and the line moved like a song they both finally knew the words to. " +
        N(13) + "That night they sent their father a photo of the chalkboard, where Bao had added one small line beneath the dancing sandwiches: Bread toasted, not burned.</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The conflict between Linh and Bao in sentences 2 through 5 is best described as a clash between —",
          choices: [
            { letter: "A", text: "keeping their father's ways and trying new ones" },
            { letter: "B", text: "wanting to work hard and wanting to rest instead" },
            { letter: "C", text: "pleasing customers and saving money" },
            { letter: "D", text: "staying at the market and going home early" }
          ],
          correct: "A"
        },
        {
          id: "strengths",
          sol: "10.RL.1.C",
          stem: "Sentences 7 and 8 together show that Linh and Bao —",
          choices: [
            { letter: "A", text: "dislike working with customers of any age" },
            { letter: "B", text: "each want to run the truck alone" },
            { letter: "C", text: "have different strengths the truck needs" },
            { letter: "D", text: "know the regulars' orders equally well" }
          ],
          correct: "C"
        },
        {
          id: "song",
          sol: "10.RL.2.A",
          stem: "In sentence 12, comparing the moving line to a song they both finally knew the words to suggests that the siblings —",
          choices: [
            { letter: "A", text: "are singing to entertain their customers" },
            { letter: "B", text: "are now working together smoothly" },
            { letter: "C", text: "are bored by repeating the same task" },
            { letter: "D", text: "still disagree about the menu board" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The author ends the story with the line Bao adds to the chalkboard in sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "suggest that Linh secretly wrote the line herself" },
            { letter: "B", text: "reveal that some bread was burned that day" },
            { letter: "C", text: "show that Bao will stop drawing on the board" },
            { letter: "D", text: "show that Bao now respects his father's rules" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of \"The Usual\"?",
          choices: [
            { letter: "A", text: "Younger siblings should always follow older ones." },
            { letter: "B", text: "Tradition and fresh ideas work best when combined." },
            { letter: "C", text: "Regular customers dislike any kind of change." },
            { letter: "D", text: "Hard work matters more than natural talent." }
          ],
          correct: "B"
        },
        {
          id: "patter",
          sol: "10.RV.1.B",
          stem: "In sentence 7, the phrase a showman's patter most nearly refers to —",
          choices: [
            { letter: "A", text: "quick, entertaining talk" },
            { letter: "B", text: "a loud, sharp warning" },
            { letter: "C", text: "a written list of prices" },
            { letter: "D", text: "slow, careful directions" }
          ],
          correct: "A"
        }
      ]
    },

    /* 12 · INFORMATIONAL · food truck */
    {
      id: "g10-ri-c64-home-port",
      family: "G10",
      title: "Where Food Trucks Sleep",
      kind: "Informational · 10.RI",
      blurb: "When the lunch crowd leaves, a food truck's day is not over. It still has to go home to the commissary.",
      level: 2,
      passage:
        "<p>" + N(1) + "When the lunch crowd disappears and a food truck pulls away from the curb, its workday is not over. " +
        N(2) + "In many cities, the truck must spend the night at a commissary, a licensed shared kitchen where mobile vendors store food, wash equipment, and refill water tanks. " +
        N(3) + "Health codes require this base because a truck's kitchen is too small to do everything safely on its own.</p>" +
        "<p>" + N(4) + "A typical commissary looks like a cross between a restaurant kitchen and a parking garage. " +
        N(5) + "Trucks back into numbered spaces, plug into outlets to keep their refrigerators running, and empty their gray water, the used water from their sinks, into special drains. " +
        N(6) + "Inside, cooks chop vegetables and prepare sauces at steel tables they rent by the hour. " +
        N(7) + "Owners pay a monthly fee that may range from a few hundred dollars to more than a thousand, depending on the city.</p>" +
        "<p>" + N(8) + "For new owners, that fee can feel like one more bill in a business that already runs on thin profits. " +
        N(9) + "Yet many find the commissary worth the cost. " +
        N(10) + "It gives them access to large freezers and dishwashers they could never fit on a truck. " +
        N(11) + "It also creates a community: veteran cooks trade advice about permits, and a taco vendor might lend a pastry maker an extra cooler on a busy weekend. " +
        N(12) + "In that sense, the commissary is less a garage than a home port, the place where a fleet of tiny kitchens returns each night to get ready for tomorrow.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which of these best summarizes \"Where Food Trucks Sleep\"?",
          choices: [
            { letter: "A", text: "Food trucks are much less safe than restaurants." },
            { letter: "B", text: "Commissaries cost money but give trucks space and support." },
            { letter: "C", text: "Most food truck owners lose money in their first year." },
            { letter: "D", text: "Commissaries are mainly parking garages for trucks." }
          ],
          correct: "B"
        },
        {
          id: "gray",
          sol: "10.RV.1.C",
          stem: "Which words in sentence 5 help the reader understand the meaning of gray water?",
          choices: [
            { letter: "A", text: "back into numbered spaces" },
            { letter: "B", text: "keep their refrigerators running" },
            { letter: "C", text: "the used water from their sinks" },
            { letter: "D", text: "into special drains" }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "How does the author organize the three paragraphs about commissaries?",
          choices: [
            { letter: "A", text: "what a commissary is, how it works, and why it matters" },
            { letter: "B", text: "a problem, a failed solution, and a brand-new city law" },
            { letter: "C", text: "one owner's day told in order from morning to night" },
            { letter: "D", text: "a comparison of commissaries in two different cities" }
          ],
          correct: "A"
        },
        {
          id: "port",
          sol: "10.RI.2.B",
          stem: "In sentence 12, calling the commissary a home port rather than a garage mainly emphasizes that it is —",
          choices: [
            { letter: "A", text: "located close to the ocean and docks" },
            { letter: "B", text: "far too expensive for most new owners" },
            { letter: "C", text: "where broken trucks go to be repaired" },
            { letter: "D", text: "a place of belonging, not just storage" }
          ],
          correct: "D"
        },
        {
          id: "community",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the idea that commissaries create a community among food truck owners?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "Which reader would find the article about commissaries most useful?",
          choices: [
            { letter: "A", text: "a diner choosing where to eat lunch" },
            { letter: "B", text: "someone planning to start a food truck" },
            { letter: "C", text: "a city planner designing a parking garage" },
            { letter: "D", text: "a chef writing a dessert cookbook" }
          ],
          correct: "B"
        }
      ]
    },

    /* 13 · VOCABULARY · volcanoes */
    {
      id: "g10-rv-c64-mount-teyra",
      family: "G10",
      title: "The Old Dog on the Porch",
      kind: "Vocabulary · 10.RV",
      blurb: "After two quiet centuries, Mount Teyra begins to stir, and an island has to decide how worried to be.",
      level: 3,
      passage:
        "<p>" + N(1) + "For two hundred years Mount Teyra had been <strong>dormant</strong>, and the farmers on its lower slopes grew coffee in soil made rich by ancient ash. " +
        N(2) + "Most residents thought of the mountain the way they thought of an old dog asleep on a porch: large, familiar, and harmless. " +
        N(3) + "That changed one March, when the island's observatory recorded a swarm of small earthquakes deep beneath the summit. " +
        N(4) + "At first, the cause was pure <strong>conjecture</strong>; some scientists suspected shifting groundwater, others suspected rising magma, and no one had enough data to settle the question. " +
        N(5) + "Within weeks, however, instruments detected <strong>subterranean</strong> movement nearly six kilometers below the crater, far deeper than any groundwater could reach.</p>" +
        "<p>" + N(6) + "The observatory director, Dr. Ilse Maranga, explained that an eruption was not <strong>imminent</strong>; it might be months or even years away. " +
        N(7) + "But she urged the island to remain <strong>vigilant</strong>, checking the alert map daily and keeping emergency bags packed by the door. " +
        N(8) + "Some farmers grumbled that the scientists were <strong>alarmist</strong>, frightening people over a mountain that had never hurt anyone they knew. " +
        N(9) + "Dr. Maranga answered them at a crowded town meeting. " +
        N(10) + "\"I am not telling you to be afraid,\" she said. " +
        N(11) + "\"I am telling you to pay attention.\" " +
        N(12) + "Six months later, when steam began rising from the summit, the evacuation took less than a day, and not a single household was caught unprepared.</p>",
      claims: [
        {
          id: "conjecture",
          sol: "10.RV.1.C",
          stem: "Which phrase from sentence 4 best helps the reader understand the meaning of conjecture?",
          choices: [
            { letter: "A", text: "At first, the cause was" },
            { letter: "B", text: "shifting groundwater" },
            { letter: "C", text: "rising magma" },
            { letter: "D", text: "no one had enough data" }
          ],
          correct: "D"
        },
        {
          id: "subterranean",
          sol: "10.RV.1.A",
          stem: "Subterranean joins the prefix sub-, meaning under, with the root terra, meaning earth. In sentence 5, subterranean movement is movement that —",
          choices: [
            { letter: "A", text: "happens beneath the ground" },
            { letter: "B", text: "travels across the ocean" },
            { letter: "C", text: "rises high into the sky" },
            { letter: "D", text: "spreads along the surface" }
          ],
          correct: "A"
        },
        {
          id: "imminent",
          sol: "10.RV.1.B",
          stem: "In sentence 6, Dr. Maranga's statement that an eruption was not imminent means that the eruption —",
          choices: [
            { letter: "A", text: "would not be dangerous" },
            { letter: "B", text: "could never happen at all" },
            { letter: "C", text: "was not coming very soon" },
            { letter: "D", text: "had already come and gone" }
          ],
          correct: "C"
        },
        {
          id: "alarmist",
          sol: "10.RV.1.D",
          stem: "The farmers call the scientists alarmist in sentence 8 rather than careful. Compared with careful, alarmist suggests that the scientists are —",
          choices: [
            { letter: "A", text: "thoughtfully planning ahead" },
            { letter: "B", text: "needlessly stirring up fear" },
            { letter: "C", text: "quietly hiding the truth" },
            { letter: "D", text: "politely asking for help" }
          ],
          correct: "B"
        },
        {
          id: "vigilant",
          sol: "10.RV.1.C",
          stem: "How do Dr. Maranga's words in sentences 10 and 11 clarify what she meant by vigilant?",
          choices: [
            { letter: "A", text: "Being vigilant means staying watchful without living in fear." },
            { letter: "B", text: "Being vigilant means leaving the island right away." },
            { letter: "C", text: "Being vigilant means trusting that the mountain is harmless." },
            { letter: "D", text: "Being vigilant means ignoring the daily alert map." }
          ],
          correct: "A"
        },
        {
          id: "dormant",
          sol: "10.RV.1.B",
          stem: "The comparison of Mount Teyra to an old dog asleep on a porch in sentence 2 reinforces the meaning of dormant by suggesting the volcano was —",
          choices: [
            { letter: "A", text: "wild and ready to attack" },
            { letter: "B", text: "small and easy to overlook" },
            { letter: "C", text: "inactive but able to wake" },
            { letter: "D", text: "extinct and unable to erupt" }
          ],
          correct: "C"
        }
      ]
    },

    /* 14 · PAIRED · volcanoes */
    {
      id: "g10-dsr-c64-port-amis",
      family: "G10",
      title: "The Eight-Kilometer Line",
      kind: "Paired texts · 10.DSR",
      blurb: "An emergency bulletin widens the evacuation zone around Mount Halu. A café owner follows the order but has questions.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Bulletin from the Kelloway Island Emergency Office</strong></p>" +
        "<p>" + N(1) + "Effective at 6:00 p.m. today, the evacuation zone around Mount Halu is expanded from five to eight kilometers. " +
        N(2) + "Over the past 72 hours, gas emissions at the summit have tripled, and the ground on the volcano's eastern side has risen by four centimeters. " +
        N(3) + "These changes do not mean an eruption is certain. " +
        N(4) + "However, they match patterns observed before past eruptions at volcanoes of the same type. " +
        N(5) + "Residents of the newly added area, including the village of Port Amis, must relocate to public shelters or to family members outside the zone. " +
        N(6) + "Buses will leave every hour from the Port Amis school until midnight. " +
        N(7) + "The zone will be reviewed every seven days.</p>" +
        "<p><strong>Text 2 — Blog post by Céline Barros, owner of a café in Port Amis</strong></p>" +
        "<p>" + N(8) + "I locked my café at five this afternoon and joined the line for the bus with my neighbors. " +
        N(9) + "I am not arguing with the order; I have read enough about the gas readings to know the scientists are not guessing. " +
        N(10) + "What frustrates me is the silence around everything else. " +
        N(11) + "No one has told us whether we can return for medicine or pets, or who will watch our homes while we are gone. " +
        N(12) + "\"Reviewed every seven days\" could mean one week or six months. " +
        N(13) + "Fear grows fastest in empty spaces, and this bulletin left us plenty of them. " +
        N(14) + "If the office wants us to keep trusting it, it should answer our questions as clearly as it reports its measurements.</p>",
      claims: [
        {
          id: "both",
          sol: "10.DSR.D",
          stem: "Which idea is supported by both the Kelloway bulletin and Céline's blog post?",
          choices: [
            { letter: "A", text: "An eruption of Mount Halu is now certain." },
            { letter: "B", text: "The scientific readings justify the order." },
            { letter: "C", text: "Residents may return home within a week." },
            { letter: "D", text: "The bus service from Port Amis is unreliable." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "The two texts about the Mount Halu evacuation differ mainly in that the bulletin —",
          choices: [
            { letter: "A", text: "doubts the scientists, while the blog defends them" },
            { letter: "B", text: "describes Port Amis, while the blog ignores it" },
            { letter: "C", text: "predicts an eruption, while the blog denies one" },
            { letter: "D", text: "gives data and rules, while the blog raises questions" }
          ],
          correct: "D"
        },
        {
          id: "empty",
          sol: "10.DSR.E",
          stem: "Céline's statement in sentence 13 that fear grows fastest in empty spaces mainly suggests that —",
          choices: [
            { letter: "A", text: "missing information makes residents more anxious" },
            { letter: "B", text: "abandoned villages are more dangerous at night" },
            { letter: "C", text: "the public shelters are too large and crowded" },
            { letter: "D", text: "people should not stay home alone during alerts" }
          ],
          correct: "A"
        },
        {
          id: "challenge",
          sol: "10.DSR.E",
          stem: "Which sentence from the bulletin does Céline most directly question in sentence 12?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          stem: "Select TWO sentences from Text 2 that name information Port Amis residents still need.",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "next",
          sol: "10.DSR.E",
          stem: "Using both texts, what is the most reasonable next step for the Kelloway Island Emergency Office?",
          choices: [
            { letter: "A", text: "shrink the zone back to five kilometers" },
            { letter: "B", text: "stop reporting gas measurements publicly" },
            { letter: "C", text: "answer questions about pets and timing" },
            { letter: "D", text: "close the shelters until an eruption begins" }
          ],
          correct: "C"
        }
      ]
    },

    /* 15 · LITERARY · volcanoes */
    {
      id: "g10-rl-c64-turn-back",
      family: "G10",
      title: "When to Turn Back",
      kind: "Literary · 10.RL",
      blurb: "Mateo has dreamed of sunrise over a live crater. Near the top, his sister Teodora smells trouble.",
      level: 3,
      passage:
        "<p>" + N(1) + "Mateo had planned the hike to the rim of Cerro Ardiente for a month, and he talked about it the entire six-hour drive. " +
        N(2) + "\"Sunrise over a live crater,\" he kept saying, tapping the map on his phone. " +
        N(3) + "\"Nobody at school is going to believe it.\" " +
        N(4) + "Teodora, who was fifteen and two years younger, spent the drive reading the visitor guide, including a gray box titled When to Turn Back.</p>" +
        "<p>" + N(5) + "The trail began in pine forest and climbed into a world of cinders, black and loose, that slid backward under every step. " +
        N(6) + "Near the last switchback, the air changed. " +
        N(7) + "It smelled faintly of rotten eggs at first, and then not faintly at all. " +
        N(8) + "Teodora's throat tightened, and she saw that Mateo was blinking hard and wiping his eyes on his sleeve.</p>" +
        "<p>" + N(9) + "\"That's sulfur dioxide,\" she said. " +
        N(10) + "\"The guide says if your eyes sting, you go down.\"</p>" +
        "<p>" + N(11) + "\"We're two hundred meters from the top,\" Mateo said. " +
        N(12) + "\"You always read the signs, Teo. " +
        N(13) + "Just once, look at the view.\"</p>" +
        "<p>" + N(14) + "She didn't argue; she simply turned and started walking downhill, and after a long moment she heard his boots crunching behind her. " +
        N(15) + "At the trailhead, a ranger was stretching yellow tape across the path. " +
        N(16) + "A shift in the wind, she explained, had pushed the gas plume over the rim and down the upper trail. " +
        N(17) + "Mateo stared at the tape, then at his sister, and for once he had nothing to say. " +
        N(18) + "Later, in the car, he asked to borrow the visitor guide, and he read it all the way home.</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Mateo's complaint in sentence 12 that Teodora always reads the signs becomes ironic because —",
          choices: [
            { letter: "A", text: "reading the signs is what keeps them safe" },
            { letter: "B", text: "Teodora never actually opened the guide" },
            { letter: "C", text: "the ranger asks Mateo to read the guide aloud" },
            { letter: "D", text: "the view from the rim turns out to be cloudy" }
          ],
          correct: "A"
        },
        {
          id: "climax",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in the disagreement between Teodora and Mateo on the trail?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in sentences 5 through 7 (the black, sliding cinders and the growing smell) mainly create a mood of —",
          choices: [
            { letter: "A", text: "peaceful wonder" },
            { letter: "B", text: "playful excitement" },
            { letter: "C", text: "bored routine" },
            { letter: "D", text: "rising unease" }
          ],
          correct: "D"
        },
        {
          id: "char",
          sol: "10.RL.1.C",
          stem: "Sentence 14 characterizes Teodora as someone who —",
          choices: [
            { letter: "A", text: "gives in whenever her brother objects" },
            { letter: "B", text: "acts on her judgment instead of arguing" },
            { letter: "C", text: "wants to embarrass her brother in public" },
            { letter: "D", text: "is too tired and sore to finish the climb" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The author ends the story with Mateo reading the visitor guide all the way home mainly to —",
          choices: [
            { letter: "A", text: "show a quiet change in his attitude" },
            { letter: "B", text: "suggest he will try the hike again next week" },
            { letter: "C", text: "reveal that he blames his sister for the closure" },
            { letter: "D", text: "show that the long drive home was boring" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of \"When to Turn Back\"?",
          choices: [
            { letter: "A", text: "Older siblings are usually wiser than younger ones." },
            { letter: "B", text: "Nature is most beautiful when it is dangerous." },
            { letter: "C", text: "Careful planning guarantees a successful trip." },
            { letter: "D", text: "Heeding a warning may matter more than any goal." }
          ],
          correct: "D"
        }
      ]
    },

    /* 16 · POETRY · county fair */
    {
      id: "g10-rl-c64-top-of-wheel",
      family: "G10",
      title: "Top of the Wheel",
      kind: "Poetry · 10.RL",
      blurb: "All week the fair has been too loud. Then the speaker's little sister drags her onto the Ferris wheel.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "All week the fair was only noise to me:<br>" +
        L(2) + "the barker's shout, the bumper cars, the bells,<br>" +
        L(3) + "the pig race with its squealing, dusty crowd.<br>" +
        L(4) + "Then my little sister tugged me toward the wheel.<br>" +
        L(5) + "We climbed into the swaying bucket seat,<br>" +
        L(6) + "and up we rose, slow as a held-in breath,<br>" +
        L(7) + "until the music thinned to a far-off hum<br>" +
        L(8) + "and the midway shrank into a box of spilled beads.<br>" +
        L(9) + "Up here the barns were tiny wooden toys,<br>" +
        L(10) + "the parking field a quilt of shining roofs.<br>" +
        L(11) + "My sister pointed home: a speck of porch light.<br>" +
        L(12) + "For one long minute, the whole loud world was small enough to hold." +
        "</p>",
      claims: [
        {
          id: "noise",
          sol: "10.RL.2.B",
          stem: "The images in lines 1 through 3 of \"Top of the Wheel\" mainly show that at first the speaker finds the fair —",
          choices: [
            { letter: "A", text: "peaceful and quiet" },
            { letter: "B", text: "noisy and overwhelming" },
            { letter: "C", text: "dull and nearly empty" },
            { letter: "D", text: "dark and mysterious" }
          ],
          correct: "B"
        },
        {
          id: "beads",
          sol: "10.RL.2.A",
          stem: "In line 8, comparing the midway to a box of spilled beads mainly suggests that from above it looks —",
          choices: [
            { letter: "A", text: "broken and long abandoned" },
            { letter: "B", text: "dark, dull, and crowded" },
            { letter: "C", text: "small, bright, and scattered" },
            { letter: "D", text: "sharp, jagged, and dangerous" }
          ],
          correct: "C"
        },
        {
          id: "line4",
          sol: "10.RL.3.A",
          stem: "How does line 4 function in \"Top of the Wheel\"?",
          choices: [
            { letter: "A", text: "It marks the moment the speaker's day begins to change." },
            { letter: "B", text: "It introduces a bitter conflict between the two sisters." },
            { letter: "C", text: "It describes the most frightening ride at the fair." },
            { letter: "D", text: "It repeats an image from the poem's first line." }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of \"Top of the Wheel\"?",
          choices: [
            { letter: "A", text: "Younger siblings often push us into danger." },
            { letter: "B", text: "Fairs are most fun when the crowds are large." },
            { letter: "C", text: "Home is always better than any trip away." },
            { letter: "D", text: "A new view can make a loud world feel manageable." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          stem: "Compared with lines 1 through 3, the tone of line 12 is more —",
          choices: [
            { letter: "A", text: "angry and bitter" },
            { letter: "B", text: "calm and peaceful" },
            { letter: "C", text: "nervous and fearful" },
            { letter: "D", text: "silly and joking" }
          ],
          correct: "B"
        },
        {
          id: "sister",
          sol: "10.RL.1.C",
          stem: "Line 11, in which the sister points out their home, suggests that the sister —",
          choices: [
            { letter: "A", text: "wants to leave the fair right away" },
            { letter: "B", text: "is frightened by the height of the wheel" },
            { letter: "C", text: "is delighted to spot something familiar" },
            { letter: "D", text: "has never seen her own house before" }
          ],
          correct: "C"
        }
      ]
    },

    /* 17 · INFORMATIONAL · county fair */
    {
      id: "g10-ri-c64-blue-ribbons",
      family: "G10",
      title: "What a Ribbon Teaches",
      kind: "Informational · 10.RI",
      blurb: "Fair judging began as a way to spread good farming methods. That purpose still shapes how ribbons are awarded.",
      level: 3,
      passage:
        "<p>" + N(1) + "To a visitor wandering through the exhibit hall, the rows of ribbon-draped pumpkins and jars of peaches may look like nothing more than a friendly contest. " +
        N(2) + "Yet agricultural fairs began with a serious purpose. " +
        N(3) + "In the nineteenth century, farming societies organized local fairs so that growers could compare livestock, seed, and tools side by side, and the best methods could spread from farm to farm faster than any pamphlet could carry them. " +
        N(4) + "A prize for the heaviest wheat was, in effect, a public lesson in how to grow heavy wheat.</p>" +
        "<p>" + N(5) + "That educational purpose still shapes the way fairs are judged. " +
        N(6) + "In many youth divisions, judges use what is called the Danish system: rather than ranking entries against one another, they measure each entry against a written standard, so several exhibitors can earn blue ribbons in the same class. " +
        N(7) + "Supporters argue that this approach rewards mastery rather than luck, since a young baker is not punished simply for entering the same class as an unusually skilled rival. " +
        N(8) + "Critics reply that when blue ribbons become common, they lose some of their meaning.</p>" +
        "<p>" + N(9) + "Many judges now add a brief interview, asking exhibitors to explain how they raised an animal or why they chose a particular recipe. " +
        N(10) + "An exhibitor who can describe a mistake and how she corrected it may impress a judge more than one with a flawless entry and no explanation. " +
        N(11) + "In this way, the modern fair continues its oldest job: turning private effort into shared knowledge.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of \"What a Ribbon Teaches\"?",
          choices: [
            { letter: "A", text: "Ribbons today are given out too freely to mean much." },
            { letter: "B", text: "Early farmers learned their methods mainly from pamphlets." },
            { letter: "C", text: "Fairs have always aimed to teach, and judging still shows it." },
            { letter: "D", text: "Young exhibitors usually do better than adult exhibitors." }
          ],
          correct: "C"
        },
        {
          id: "wheat",
          sol: "10.RI.2.B",
          stem: "Sentence 4, about a prize for the heaviest wheat, develops the author's point by —",
          choices: [
            { letter: "A", text: "showing how a prize could teach a farming method" },
            { letter: "B", text: "proving that wheat was the most valuable crop" },
            { letter: "C", text: "suggesting that early fairs were unfair to small farms" },
            { letter: "D", text: "explaining exactly how the judges weighed the wheat" }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "Sentences 6 through 8 of \"What a Ribbon Teaches\" are organized mainly as —",
          choices: [
            { letter: "A", text: "a timeline of how fair rules have changed" },
            { letter: "B", text: "a method followed by views for and against it" },
            { letter: "C", text: "a story about one young exhibitor's experience" },
            { letter: "D", text: "a list of steps for entering a contest" }
          ],
          correct: "B"
        },
        {
          id: "counter",
          sol: "10.RI.1.B",
          stem: "Which sentence presents an objection to the Danish system of judging?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "10.RI.2.C",
          stem: "The author's attitude toward the modern county fair is best described as —",
          choices: [
            { letter: "A", text: "critical of its outdated contests" },
            { letter: "B", text: "indifferent to its long history" },
            { letter: "C", text: "amused by its small prizes" },
            { letter: "D", text: "appreciative of its teaching role" }
          ],
          correct: "D"
        },
        {
          id: "mastery",
          sol: "10.RV.1.C",
          stem: "As contrasted with luck in sentence 7, the word mastery most nearly means —",
          choices: [
            { letter: "A", text: "control over other people" },
            { letter: "B", text: "a lucky and sudden win" },
            { letter: "C", text: "ownership of property" },
            { letter: "D", text: "full command of a skill" }
          ],
          correct: "D"
        }
      ]
    },

    /* 18 · VOCABULARY · lighthouses */
    {
      id: "g10-rv-c64-skerry-logs",
      family: "G10",
      title: "The Skerry Rock Logbooks",
      kind: "Vocabulary · 10.RV",
      blurb: "A trunk of old logbooks reveals twenty-two years in the life of a lighthouse keeper.",
      level: 2,
      passage:
        "<p>" + N(1) + "When volunteers at the Harbor Point Museum opened a water-stained trunk last spring, they found the logbooks of Johanna Byrne, who kept the Skerry Rock Light for twenty-two years. " +
        N(2) + "The rock sat a mile offshore in a channel so <strong>treacherous</strong> that supply boats often waited days for the currents and hidden ledges to calm. " +
        N(3) + "Byrne's life there was <strong>solitary</strong>; for weeks at a time her only company was a gray cat and the gulls. " +
        N(4) + "Yet her logs show no sign of carelessness. " +
        N(5) + "In <strong>meticulous</strong> handwriting she recorded the weather four times a day, the gallons of oil burned, and the name of every ship that passed.</p>" +
        "<p>" + N(6) + "Her duty was to <strong>illuminate</strong> the channel from sunset to sunrise, and in twenty-two years the logs note only one night when the lamp went dark, after a winter wave shattered the lantern glass. " +
        N(7) + "Even then she hung a hand lantern in the tower window and kept it burning until dawn. " +
        N(8) + "Museum staff call the logbooks a <strong>chronicle</strong> of a vanished way of life, and they plan to display one volume each season. " +
        N(9) + "Visitors who read the pages, one volunteer said, come away picturing a keeper who was <strong>steadfast</strong> rather than stubborn: loyal to her light through every storm.</p>",
      claims: [
        {
          id: "treacherous",
          sol: "10.RV.1.C",
          stem: "Which phrase from sentence 2 best helps the reader understand the meaning of treacherous?",
          choices: [
            { letter: "A", text: "a mile offshore" },
            { letter: "B", text: "supply boats" },
            { letter: "C", text: "hidden ledges" },
            { letter: "D", text: "The rock sat" }
          ],
          correct: "C"
        },
        {
          id: "solitary",
          sol: "10.RV.1.B",
          stem: "In sentence 3, the word solitary describes Byrne's life as —",
          choices: [
            { letter: "A", text: "spent mostly alone" },
            { letter: "B", text: "full of danger" },
            { letter: "C", text: "carefully planned" },
            { letter: "D", text: "badly paid for the work" }
          ],
          correct: "A"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.C",
          stem: "Which detail best shows the meaning of meticulous in sentence 5?",
          choices: [
            { letter: "A", text: "the old, water-stained wooden trunk" },
            { letter: "B", text: "weather recorded four times a day" },
            { letter: "C", text: "her company of a gray cat and gulls" },
            { letter: "D", text: "the shattered lantern glass" }
          ],
          correct: "B"
        },
        {
          id: "illuminate",
          sol: "10.RV.1.A",
          stem: "Illuminate contains the Latin root lumin, meaning light. Based on this root, to illuminate the channel in sentence 6 means to —",
          choices: [
            { letter: "A", text: "measure its depth" },
            { letter: "B", text: "guard it from pirates" },
            { letter: "C", text: "clear it of rocks" },
            { letter: "D", text: "fill it with light" }
          ],
          correct: "D"
        },
        {
          id: "chronicle",
          sol: "10.RV.1.A",
          stem: "The root chron- in chronicle also appears in chronological and chronometer. Based on this root, the chronicle in sentence 8 is a record that —",
          choices: [
            { letter: "A", text: "follows events through time" },
            { letter: "B", text: "describes a single place" },
            { letter: "C", text: "lists the costs of a job" },
            { letter: "D", text: "judges a person's character" }
          ],
          correct: "A"
        },
        {
          id: "steadfast",
          sol: "10.RV.1.D",
          stem: "The volunteer calls Byrne steadfast rather than stubborn in sentence 9. Compared with stubborn, steadfast suggests a quality that is —",
          choices: [
            { letter: "A", text: "foolish and inflexible" },
            { letter: "B", text: "admirable and faithful" },
            { letter: "C", text: "timid and nervous" },
            { letter: "D", text: "cold and unfriendly" }
          ],
          correct: "B"
        }
      ]
    },

    /* 19 · PAIRED · food truck */
    {
      id: "g10-dsr-c64-linden-ave",
      family: "G10",
      title: "Trucks on Linden Avenue",
      kind: "Paired texts · 10.DSR",
      blurb: "The principal bans food trucks outside the school. The student newspaper proposes another way.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Announcement from Principal Varga, Westbrook High School</strong></p>" +
        "<p>" + N(1) + "Starting Monday, food trucks may no longer park on Linden Avenue in front of Westbrook High during lunch. " +
        N(2) + "Last month, more than eighty students left campus to buy food from the trucks, and several crossed the busy street in the middle of the block. " +
        N(3) + "On two separate days, cars had to stop suddenly to avoid students. " +
        N(4) + "Students must stay on school grounds during lunch for their own safety. " +
        N(5) + "The cafeteria offers hot meals every day, and the salad bar has been expanded to include more choices. " +
        N(6) + "City police have agreed to watch the block for the first two weeks of the new rule. " +
        N(7) + "Thank you for helping keep our campus safe.</p>" +
        "<p><strong>Text 2 — Editorial from the Westbrook Herald, the student newspaper</strong></p>" +
        "<p>" + N(8) + "No one wants a classmate hit by a car, and the principal is right that crossing Linden Avenue was dangerous. " +
        N(9) + "But banning the trucks treats the symptom, not the problem. " +
        N(10) + "Students crossed the street because the trucks were across it. " +
        N(11) + "Instead, the school could invite one truck each Friday to park inside the staff lot, where students would never touch the road. " +
        N(12) + "The truck could donate ten percent of its sales to student clubs, as trucks already do at a middle school across town. " +
        N(13) + "A Friday truck would keep students safe, give them a reason to stay on campus, and raise money for activities they care about. " +
        N(14) + "We urge the administration to try it for one month.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do Principal Varga and the Westbrook Herald editors agree?",
          choices: [
            { letter: "A", text: "Crossing Linden Avenue for food was unsafe." },
            { letter: "B", text: "Food trucks should be banned from the area." },
            { letter: "C", text: "The cafeteria salad bar needs improvement." },
            { letter: "D", text: "Students should be allowed to leave campus." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "The two texts about food trucks at Westbrook High differ mainly in that the editorial —",
          choices: [
            { letter: "A", text: "denies that students crossed the street" },
            { letter: "B", text: "asks police to watch Linden Avenue" },
            { letter: "C", text: "offers a way to keep a truck safely" },
            { letter: "D", text: "argues that lunch should be longer" }
          ],
          correct: "C"
        },
        {
          id: "respond",
          sol: "10.DSR.E",
          stem: "How does the editorial's proposal in sentence 11 respond to the problem described in sentence 2?",
          choices: [
            { letter: "A", text: "It requires students to cross only at the corner." },
            { letter: "B", text: "It closes the cafeteria every Friday." },
            { letter: "C", text: "It limits how many students may buy food." },
            { letter: "D", text: "It keeps students from crossing the street." }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          stem: "Select TWO sentences from Text 2 that describe benefits of the Friday truck plan.",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "focus",
          sol: "10.DSR.E",
          stem: "Compared with Principal Varga's announcement, the Herald editorial is more focused on —",
          choices: [
            { letter: "A", text: "punishing students who break rules" },
            { letter: "B", text: "finding a workable compromise" },
            { letter: "C", text: "explaining the city's traffic laws" },
            { letter: "D", text: "describing the cafeteria's menu" }
          ],
          correct: "B"
        },
        {
          id: "willing",
          sol: "10.DSR.E",
          stem: "Based on both texts, why might Principal Varga be willing to try the editors' Friday plan?",
          choices: [
            { letter: "A", text: "It meets her concern by keeping students off the road." },
            { letter: "B", text: "It removes the need for a school cafeteria at all." },
            { letter: "C", text: "It lets students leave campus on every school day." },
            { letter: "D", text: "It moves all the trucks back onto Linden Avenue." }
          ],
          correct: "A"
        }
      ]
    },

    /* 20 · LITERARY · county fair */
    {
      id: "g10-rl-c64-ring-toss",
      family: "G10",
      title: "Float It",
      kind: "Literary · 10.RL",
      blurb: "Tomasz runs the ring-toss booth at the county fair. His boss has one rule: never give away a prize.",
      level: 1,
      passage:
        "<p>" + N(1) + "By the fourth night of the Granger County Fair, Tomasz could toss a ring onto a bottle neck with his eyes closed, but the customers almost never could. " +
        N(2) + "That was the point, his boss, Mrs. Delacroix, had explained on his first day. " +
        N(3) + "\"The game is fair,\" she said, \"but it is not easy. " +
        N(4) + "Never give away a prize. " +
        N(5) + "Teach, if you like, but never give.\"</p>" +
        "<p>" + N(6) + "Just before closing, a boy of about seven stepped up to the counter with three tickets clutched in his fist. " +
        N(7) + "He threw his first ring as hard as he could, and it bounced off the bottles and skittered under the booth. " +
        N(8) + "The second one did the same. " +
        N(9) + "His lower lip began to tremble, and he looked at his last ring the way a person looks at a last match on a cold night.</p>" +
        "<p>" + N(10) + "Tomasz leaned over the counter. " +
        N(11) + "\"Don't throw it,\" he said quietly. " +
        N(12) + "\"Float it. " +
        N(13) + "Pretend you're handing it to someone across a table.\"</p>" +
        "<p>" + N(14) + "The boy frowned, took a breath, and tossed the ring in a soft, lazy arc. " +
        N(15) + "It wobbled, spun, and settled around the neck of a green bottle with a small clink. " +
        N(16) + "The boy's shriek of delight carried all the way to the Ferris wheel. " +
        N(17) + "Tomasz handed him the smallest prize, a rubber frog, and the boy held it up as if it were a trophy. " +
        N(18) + "Across the booth, Mrs. Delacroix caught Tomasz's eye and gave a single nod.</p>",
      claims: [
        {
          id: "char",
          sol: "10.RL.1.C",
          stem: "Sentences 11 through 13 characterize Tomasz as —",
          choices: [
            { letter: "A", text: "careless about his boss's instructions" },
            { letter: "B", text: "kind and helpful within the rules" },
            { letter: "C", text: "eager to finish his shift early" },
            { letter: "D", text: "annoyed by very young customers" }
          ],
          correct: "B"
        },
        {
          id: "match",
          sol: "10.RL.2.A",
          stem: "In sentence 9, comparing the boy's last ring to a last match on a cold night mainly shows that —",
          choices: [
            { letter: "A", text: "the fairgrounds are growing colder" },
            { letter: "B", text: "the boy wants to start a small fire" },
            { letter: "C", text: "the metal ring is too hot to hold" },
            { letter: "D", text: "the boy sees this as his final chance" }
          ],
          correct: "D"
        },
        {
          id: "bounce",
          sol: "10.RL.1.B",
          stem: "Based on the story, why does the boy miss with his first two rings?",
          choices: [
            { letter: "A", text: "He throws them far too hard." },
            { letter: "B", text: "The booth is rigged against him." },
            { letter: "C", text: "Tomasz bumps the counter by mistake." },
            { letter: "D", text: "The bottles are out of a child's reach." }
          ],
          correct: "A"
        },
        {
          id: "rule",
          sol: "10.RL.3.A",
          stem: "Mrs. Delacroix's words in sentences 3 through 5 matter to the plot mainly because they —",
          choices: [
            { letter: "A", text: "explain why the young boy is so upset" },
            { letter: "B", text: "show that she dislikes children" },
            { letter: "C", text: "set the rule Tomasz must work within" },
            { letter: "D", text: "reveal that the game cannot be won" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in sentences 15 and 16 (the small clink and the shriek of delight) mainly create a mood of —",
          choices: [
            { letter: "A", text: "joyful triumph" },
            { letter: "B", text: "tense suspense" },
            { letter: "C", text: "quiet sadness" },
            { letter: "D", text: "mild confusion" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best supported by the ring-toss story \"Float It\"?",
          choices: [
            { letter: "A", text: "Fair games are designed so no one can win." },
            { letter: "B", text: "Bosses rarely notice when workers do well." },
            { letter: "C", text: "Children should avoid games of chance." },
            { letter: "D", text: "Teaching someone can be better than giving." }
          ],
          correct: "D"
        }
      ]
    },

    /* 21 · INFORMATIONAL · lighthouses */
    {
      id: "g10-ri-c64-fog-signals",
      family: "G10",
      title: "Sound in the Fog",
      kind: "Informational · 10.RI",
      blurb: "When fog swallows a lighthouse beam, coastal stations turn to sound, which turns out to be a slippery guide.",
      level: 3,
      passage:
        "<p>" + N(1) + "A lighthouse beam is of little use in thick fog, which can swallow even a powerful light within a few hundred meters. " +
        N(2) + "For that reason, coastal stations have long relied on a second kind of warning: sound. " +
        N(3) + "Early stations hung large bells that keepers rang by hand or by clockwork. " +
        N(4) + "Later came steam whistles, compressed-air horns, and sirens loud enough to rattle windows in nearby towns.</p>" +
        "<p>" + N(5) + "Sound, however, proved a slippery guide. " +
        N(6) + "Sailors reported \"silent zones,\" patches of water close to a station where a horn could not be heard at all, though it was plainly audible farther out. " +
        N(7) + "Scientists eventually traced the problem to the air itself: layers of warm and cold air, common in fog, can bend sound waves upward or sideways, carrying them over a ship instead of to it. " +
        N(8) + "A captain who heard nothing might assume he was far from shore when in fact he was dangerously close.</p>" +
        "<p>" + N(9) + "Modern fog signals address the problem in two ways. " +
        N(10) + "Electronic detectors now switch horns on automatically when visibility drops, so no signal is ever late. " +
        N(11) + "More important, ships today rarely rely on sound alone; radar and satellite positioning tell them where the coast is no matter what the air is doing. " +
        N(12) + "The horns still sound, but they have become a final layer of protection rather than the first. " +
        N(13) + "Their deep notes remain a familiar part of life in many harbor towns, where residents sometimes say they can tell the weather without looking outside.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best states the central idea of \"Sound in the Fog\"?",
          choices: [
            { letter: "A", text: "Hand-rung bells worked better than modern horns." },
            { letter: "B", text: "Harbor towns have long disliked the noise of horns." },
            { letter: "C", text: "Radar has made fog signals useless everywhere." },
            { letter: "D", text: "Unreliable fog signals now back up newer tools." }
          ],
          correct: "D"
        },
        {
          id: "cause",
          sol: "10.RI.1.B",
          stem: "According to \"Sound in the Fog,\" what causes the silent zones described in sentence 6?",
          choices: [
            { letter: "A", text: "Keepers switch the horns off at night." },
            { letter: "B", text: "Layers of warm and cold air bend the sound." },
            { letter: "C", text: "Ships' engines drown out the signal." },
            { letter: "D", text: "Fog absorbs every sound close to shore." }
          ],
          correct: "B"
        },
        {
          id: "danger",
          sol: "10.RI.2.B",
          stem: "The author includes sentence 8, about a captain who heard nothing, mainly to —",
          choices: [
            { letter: "A", text: "show why silent zones were so dangerous" },
            { letter: "B", text: "criticize captains for careless sailing" },
            { letter: "C", text: "introduce the invention of radar" },
            { letter: "D", text: "explain how sound travels in clear air" }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "How is the second paragraph of \"Sound in the Fog\" (sentences 5 through 8) organized?",
          choices: [
            { letter: "A", text: "as steps for building a fog horn" },
            { letter: "B", text: "as a comparison of bells and sirens" },
            { letter: "C", text: "as a problem, its cause, and its danger" },
            { letter: "D", text: "as a history of one coastal station" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of sentence 13, about the deep notes heard in harbor towns, is best described as —",
          choices: [
            { letter: "A", text: "warm and affectionate" },
            { letter: "B", text: "harsh and critical" },
            { letter: "C", text: "anxious and urgent" },
            { letter: "D", text: "dry and technical" }
          ],
          correct: "A"
        },
        {
          id: "claim",
          sol: "10.RI.1.C",
          stem: "Which statement from \"Sound in the Fog\" is reported as something people say rather than as a confirmed fact?",
          choices: [
            { letter: "A", text: "Detectors switch horns on when visibility drops." },
            { letter: "B", text: "Warm and cold air layers can bend sound waves." },
            { letter: "C", text: "Residents can tell the weather by the horns." },
            { letter: "D", text: "Early stations hung bells rung by hand." }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
