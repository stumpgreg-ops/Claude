/* SOL Labyrinth — v5.15 expansion: Grade 10 long passages (Virginia G10), file 84.
 * Thirteen original long packs (390–520 words; poems 22–28 lines; paired texts 200–260 each)
 * on migrating birds, rocks and caves, a fictional ancient city, and sports science.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────── 1 · Literary (level 2) · migrating birds ───────── */
    {
      id: "g10-rl-c84-banding-station",
      family: "G10",
      title: "The Twentieth Bird",
      kind: "Literary · 10.RL",
      blurb: "A bored volunteer at a lakeshore banding station meets a very ordinary sparrow.",
      level: 2,
      passage:
        "<p>" + N(1) + "The mist nets at Kestrel Point went up at 5:40, before sunrise, and by six Noor Haddad had decided that volunteering at a bird banding station was a mistake. " +
        N(2) + "The nets were fine black mesh strung between poles along the shoreline brush, and her job was to walk the line every twenty minutes and call out what had flown in. " +
        N(3) + "So far, the answer had been sparrows. " +
        N(4) + "Brown sparrows, streaked sparrows, sparrows that looked exactly like the sparrows at the feeder outside her kitchen window.</p>" +
        "<p>" + N(5) + "\"I thought we might get something good,\" she told Mr. Lindqvist, the station leader, as he worked a small bird free of the netting. " +
        N(6) + "He had run the station for thirty autumns, and he did not seem to hear the complaint. " +
        N(7) + "\"Hold out your hand,\" he said, and set the sparrow on her palm, belly up, where it lay perfectly still, its heart ticking against her skin like a tiny watch. " +
        N(8) + "\"White-throated sparrow. See the yellow spot above the eye? Now blow on the feathers of its chest.\" " +
        N(9) + "She did, and the feathers parted to show a thin layer of pale yellow fat underneath. " +
        N(10) + "\"Fuel,\" he said. \"That's tonight's flight.\"</p>" +
        "<p>" + N(11) + "Back at the folding table, he taught her the routine. " +
        N(12) + "Each bird went headfirst into a small plastic tube on a digital scale, and she read the weight to the tenth of a gram. " +
        N(13) + "She measured the wing against a steel ruler, scored the fat from zero to five, and wrote everything in the log in pencil, because, Mr. Lindqvist said, ink runs when the fog rolls in. " +
        N(14) + "Then he closed a tiny aluminum band around the bird's leg, read the nine-digit number twice, and let her open her hand. " +
        N(15) + "The sparrow sat for a second, as if deciding, then shot into the alders.</p>" +
        "<p>" + N(16) + "By ten o'clock Noor had processed nineteen birds, weighing, measuring, recording, and releasing each one, and the work had a rhythm she had not expected to like. " +
        N(17) + "On the twentieth, Mr. Lindqvist stopped. " +
        N(18) + "The bird in his hand already wore a band. " +
        N(19) + "He read the number aloud, slowly, and she typed it into the laptop that held the station's records. " +
        N(20) + "The screen took a moment, then filled: banded at Kestrel Point, October, three years ago, as a young bird in its first autumn.</p>" +
        "<p>" + N(21) + "\"Same net lane, maybe,\" Mr. Lindqvist said quietly. " +
        N(22) + "Noor did the math in her head. " +
        N(23) + "A sparrow that weighed less than a slice of bread had flown to the northern forests and back three times, crossing this lake in the dark at least six times, and had come down into the same scrubby patch of shoreline that she had walked past all morning thinking nothing was there. " +
        N(24) + "She looked at the brown bird with its plain streaks and its yellow spot, and it looked back at her with one black eye.</p>" +
        "<p>" + N(25) + "\"Write it down,\" Mr. Lindqvist said. " +
        N(26) + "Noor picked up the pencil and wrote the number in her neatest handwriting, checking each digit against the band, as if the bird might be reading over her shoulder.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme that develops as Noor works at Kestrel Point?",
          choices: [
            { letter: "A", text: "Volunteers should be given more exciting tasks to stay interested." },
            { letter: "B", text: "Young people learn best when adults leave them to work alone." },
            { letter: "C", text: "Things that seem ordinary can hold remarkable stories up close." },
            { letter: "D", text: "Scientific work matters only when it produces rare discoveries." }
          ],
          correct: "C"
        },
        {
          id: "noor-start",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "In sentences 1 through 5, Noor is best described as —",
          choices: [
            { letter: "A", text: "impatient and hoping for something unusual" },
            { letter: "B", text: "nervous about handling wild birds" },
            { letter: "C", text: "curious about the purpose of the nets" },
            { letter: "D", text: "proud of her knowledge of sparrows" }
          ],
          correct: "A"
        },
        {
          id: "watch",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "The simile in sentence 7, its heart ticking against her skin like a tiny watch, mainly suggests that the sparrow is —",
          choices: [
            { letter: "A", text: "too frightened to survive being handled" },
            { letter: "B", text: "running out of the time it needs to migrate" },
            { letter: "C", text: "more mechanical than alive to Mr. Lindqvist" },
            { letter: "D", text: "small and fragile yet steadily, precisely alive" }
          ],
          correct: "D"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point of Noor's morning at the station?",
          choices: [
            { letter: "A", text: "Sentence 11, when Mr. Lindqvist teaches her the routine" },
            { letter: "B", text: "Sentence 18, when the bird already wears a band" },
            { letter: "C", text: "Sentence 15, when the first sparrow flies away" },
            { letter: "D", text: "Sentence 25, when she is told to write it down" }
          ],
          correct: "B"
        },
        {
          id: "repeat",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The author repeats the word sparrows several times in sentences 3 and 4 mainly to —",
          choices: [
            { letter: "A", text: "show how many species visit Kestrel Point" },
            { letter: "B", text: "echo Noor's growing boredom with plain birds" },
            { letter: "C", text: "explain why the nets are hard to see" },
            { letter: "D", text: "suggest that Mr. Lindqvist prefers sparrows" }
          ],
          correct: "B"
        },
        {
          id: "processed",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 16, the word processed most nearly means —",
          choices: [
            { letter: "A", text: "frightened away from the nets" },
            { letter: "B", text: "counted from a distance" },
            { letter: "C", text: "changed into something new" },
            { letter: "D", text: "handled through a set of steps" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the banding-station story is most ironic?",
          choices: [
            { letter: "A", text: "The patch Noor thought empty held the morning's most remarkable bird." },
            { letter: "B", text: "Mr. Lindqvist writes in pencil because fog can make ink run." },
            { letter: "C", text: "The sparrow pauses on Noor's palm before flying into the alders." },
            { letter: "D", text: "Noor types the band number into the station's laptop records." }
          ],
          correct: "A"
        },
        {
          id: "shoulder",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "The phrase in sentence 26, as if the bird might be reading over her shoulder, suggests that Noor now —",
          choices: [
            { letter: "A", text: "fears she has made an error in the log" },
            { letter: "B", text: "wants Mr. Lindqvist to praise her handwriting" },
            { letter: "C", text: "treats the bird and its record with respect" },
            { letter: "D", text: "believes the bird understands what she writes" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 2 · Literary (level 3) · rocks and caves ───────── */
    {
      id: "g10-rl-c84-letterbox",
      family: "G10",
      title: "The Letterbox",
      kind: "Literary · 10.RL",
      blurb: "A young cave sketcher freezes in a tight squeeze until his cousin asks an odd question.",
      level: 3,
      passage:
        "<p>" + N(1) + "The survey team had been underground for three hours when they reached the Letterbox, and Mateo Ruiz had spent most of those hours feeling pleased with himself. " +
        N(2) + "He was the sketcher, the one who knelt at each survey station with a waterproof notebook and turned his cousin Lucía's numbers, distance, compass bearing, slope, into lines that would one day become a map of Pardo Cave. " +
        N(3) + "The older members of the club had looked over his pages at lunch and nodded, and Lucía, who had been caving since she was twelve, had said, \"Clean work,\" which from her was a parade.</p>" +
        "<p>" + N(4) + "The Letterbox was a slot in the floor, a horizontal crack about the height of a shoebox, through which the cave continued into darkness. " +
        N(5) + "Lucía went first, feet forward, arms over her head, and slid out of sight with a scrape of helmet against stone. " +
        N(6) + "\"It opens up after two body lengths,\" her voice said, oddly flattened by the rock. " +
        N(7) + "\"Push your pack ahead of you.\"</p>" +
        "<p>" + N(8) + "Mateo lay down at the opening and put his arms through. " +
        N(9) + "Then his chest was in, and the ceiling pressed against his back, and the cold of the limestone came through his coveralls all at once. " +
        N(10) + "He could not lift his head. " +
        N(11) + "Something in him that had nothing to do with thinking said, very clearly, Go back. " +
        N(12) + "He had heard that voice before, two summers ago, at the bottom of the deep end during a swim-team drill, and he had listened to it then; he had climbed out of the pool and never returned, and told everyone he was simply bored with swimming. " +
        N(13) + "He stopped moving.</p>" +
        "<p>" + N(14) + "\"Mateo.\" " +
        N(15) + "Lucía's light flickered somewhere past his hands. " +
        N(16) + "\"Tell me what the rock looks like.\" " +
        N(17) + "It seemed like a ridiculous request. " +
        N(18) + "\"Gray,\" he said. " +
        N(19) + "\"Not good enough. You're the sketcher.\" " +
        N(20) + "He looked. " +
        N(21) + "Inches from his face, the ceiling was not gray but banded, cream and rust and a darker brown, layered like the pages of a closed book, and in one band there were tiny shells, pressed flat, older than anything he could imagine. " +
        N(22) + "He began describing them aloud, and as he described them he moved, a few inches at a time, pushing the pack, until the ceiling lifted and Lucía's glove caught his wrist.</p>" +
        "<p>" + N(23) + "The room beyond was small, no bigger than a kitchen, and its ceiling bristled with soda straws, thin hollow tubes of stone, each with a single drop of water trembling at its tip. " +
        N(24) + "Nobody spoke for a while. " +
        N(25) + "Then Lucía read off the next station's numbers, and Mateo opened his notebook. " +
        N(26) + "His hands were still shaking, so the first lines came out crooked, and he left them that way. " +
        N(27) + "When the map was finished that winter, the little room appeared in the corner of the sheet with a name in his handwriting: The Library.</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The central conflict of \"The Letterbox\" is best described as a struggle between —",
          choices: [
            { letter: "A", text: "Mateo and Lucía over who will lead the survey" },
            { letter: "B", text: "the caving club and the rules of Pardo Cave" },
            { letter: "C", text: "Mateo and the older members who judge his sketches" },
            { letter: "D", text: "Mateo and his own urge to retreat from fear" }
          ],
          correct: "D"
        },
        {
          id: "swim",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author includes the swim-team memory in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "reveal a pattern of retreat that raises the stakes of this moment" },
            { letter: "B", text: "explain how Mateo learned to hold his breath underground" },
            { letter: "C", text: "show that Mateo has always preferred caving to swimming" },
            { letter: "D", text: "suggest that Lucía was also on the swim team with him" }
          ],
          correct: "A"
        },
        {
          id: "lucia",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Lucía's request in sentence 16 characterizes her as someone who —",
          choices: [
            { letter: "A", text: "has lost patience with her younger cousin" },
            { letter: "B", text: "cares more about the map than about Mateo" },
            { letter: "C", text: "knows how to turn Mateo's attention outward" },
            { letter: "D", text: "does not realize that Mateo is frightened" }
          ],
          correct: "C"
        },
        {
          id: "parade",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "In sentence 3, the narrator's comment that Lucía's \"Clean work\" was a parade mainly suggests that —",
          choices: [
            { letter: "A", text: "the club celebrated Mateo's map with a party" },
            { letter: "B", text: "Lucía rarely praises anyone, so brief praise means a lot" },
            { letter: "C", text: "Lucía spoke loudly enough for the whole club to hear" },
            { letter: "D", text: "Mateo thought his cousin was mocking his sketches" }
          ],
          correct: "B"
        },
        {
          id: "library",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "The name Mateo gives the small room in sentence 27 most likely reflects —",
          choices: [
            { letter: "A", text: "the book-like rock layers that carried him through the squeeze" },
            { letter: "B", text: "the quiet that the team kept after entering the room" },
            { letter: "C", text: "his plan to study geology in a university library" },
            { letter: "D", text: "the number of notebooks the club had filled that day" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does Mateo's experience in the Letterbox best support?",
          choices: [
            { letter: "A", text: "Experienced guides should always go last through tight spaces." },
            { letter: "B", text: "People who feel proud are usually about to be embarrassed." },
            { letter: "C", text: "Old fears disappear for good once a person faces them once." },
            { letter: "D", text: "Close attention to what is in front of us can shrink a fear." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of sentences 23 and 24, describing the room beyond the Letterbox, is best described as —",
          choices: [
            { letter: "A", text: "tense and threatening" },
            { letter: "B", text: "hushed and awed" },
            { letter: "C", text: "playful and teasing" },
            { letter: "D", text: "weary and resigned" }
          ],
          correct: "B"
        },
        {
          id: "bristled",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 23, the word bristled most nearly means —",
          choices: [
            { letter: "A", text: "glowed with reflected light" },
            { letter: "B", text: "showed signs of anger" },
            { letter: "C", text: "was thickly covered with thin points" },
            { letter: "D", text: "dripped steadily onto the floor" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 3 · Literary (level 1) · sports science ───────── */
    {
      id: "g10-rl-c84-sweat-test",
      family: "G10",
      title: "The Sweat Test",
      kind: "Literary · 10.RL",
      blurb: "A soccer player who never drinks at practice steps onto a scale and gets a surprise.",
      level: 1,
      passage:
        "<p>" + N(1) + "Lina Mansour had a rule about water during soccer practice: she did not drink it. " +
        N(2) + "Water, she believed, sloshed in her stomach and slowed her down, and she had played three seasons at Brookfield High without a single sip during drills. " +
        N(3) + "So when Ms. Adeyemi, who taught the school's sports science elective, announced a sweat test for the varsity team, Lina expected to prove her point.</p>" +
        "<p>" + N(4) + "The test was simple. " +
        N(5) + "Before practice, each player stepped onto a digital scale in the trainer's room, and Ms. Adeyemi recorded the weight to the nearest tenth of a kilogram. " +
        N(6) + "During practice, players could drink whatever they liked, but they had to drink from labeled bottles so the amount could be measured. " +
        N(7) + "Afterward, they toweled off and stepped on the scale again. " +
        N(8) + "\"Weight you lose in ninety minutes isn't fat,\" Ms. Adeyemi explained. \"It's water. Your body pushes it out as sweat to cool you down, and if you don't put it back, your heart has to work harder to keep you going.\"</p>" +
        "<p>" + N(9) + "It was a humid September afternoon, and the practice was a long one, ending with sprints from one penalty box to the other. " +
        N(10) + "Lina ran every sprint hard and finished near the front, though she noticed that the last three felt heavier than they should have, and that her legs had begun to feel like they belonged to someone else. " +
        N(11) + "She told herself it was just the heat.</p>" +
        "<p>" + N(12) + "In the trainer's room, the numbers went up on a whiteboard. " +
        N(13) + "Most players had lost between half a kilogram and one kilogram. " +
        N(14) + "Lina's teammate Grace, who had drained two full bottles during practice, had lost only three tenths. " +
        N(15) + "Lina stepped on the scale, and Ms. Adeyemi wrote 1.6 next to her name. " +
        N(16) + "\"That's a little over two percent of your body weight,\" she said. " +
        N(17) + "\"Research on athletes shows that around two percent is where performance often starts to drop, especially in the heat. Those last sprints you felt? That was probably this.\"</p>" +
        "<p>" + N(18) + "Lina stared at the number for a long time. " +
        N(19) + "She had always thought of not drinking as a kind of toughness, something that set her apart from teammates who stopped at every break. " +
        N(20) + "Now it looked more like a mistake she had been making in plain sight for three years. " +
        N(21) + "At the next practice she brought a bottle with her name on it in black marker and drank from it at every water break, small sips at first. " +
        N(22) + "Her stomach did not slosh. " +
        N(23) + "Two weeks later, at the retest, the number next to her name was 0.7, and when the coach called for sprints at the end of practice, Lina finished the last one first.</p>",
      claims: [
        {
          id: "lina-start",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "In sentences 1 through 3, Lina is best described as —",
          choices: [
            { letter: "A", text: "unsure whether she belongs on varsity" },
            { letter: "B", text: "confident in a belief she has never tested" },
            { letter: "C", text: "eager to learn about sports science" },
            { letter: "D", text: "worried about her performance in sprints" }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "Which event leads Lina to change her habit at practice?",
          choices: [
            { letter: "A", text: "Grace teases her for skipping water breaks." },
            { letter: "B", text: "The coach adds extra sprints to every practice." },
            { letter: "C", text: "Her stomach begins to hurt during a long drill." },
            { letter: "D", text: "She sees her 1.6 result and hears what it means." }
          ],
          correct: "D"
        },
        {
          id: "drained",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 14, the word drained most nearly means —",
          choices: [
            { letter: "A", text: "drank all of" },
            { letter: "B", text: "tired out" },
            { letter: "C", text: "poured away" },
            { letter: "D", text: "filled again" }
          ],
          correct: "A"
        },
        {
          id: "legs",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 10, the description of Lina's legs feeling like they belonged to someone else suggests that her legs were —",
          choices: [
            { letter: "A", text: "stronger than she had realized" },
            { letter: "B", text: "injured from an earlier game" },
            { letter: "C", text: "tired and hard to control" },
            { letter: "D", text: "cold from the humid air" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"The Sweat Test\"?",
          choices: [
            { letter: "A", text: "Teammates should always follow one another's habits." },
            { letter: "B", text: "Testing a belief against evidence can lead to growth." },
            { letter: "C", text: "Hard work matters more than any measurement can." },
            { letter: "D", text: "Teachers understand athletes better than coaches do." }
          ],
          correct: "B"
        },
        {
          id: "grace",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The author includes Grace's result in sentence 14 mainly to —",
          choices: [
            { letter: "A", text: "offer a contrast that shows drinking limits the loss" },
            { letter: "B", text: "show that Grace is a better player than Lina" },
            { letter: "C", text: "explain why the test took ninety minutes" },
            { letter: "D", text: "suggest that Ms. Adeyemi made a measuring error" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "What is most ironic about Lina's rule as the story reveals it?",
          choices: [
            { letter: "A", text: "She wins the final sprint during the first practice." },
            { letter: "B", text: "Her teacher, not her coach, runs the sweat test." },
            { letter: "C", text: "She writes her name on the bottle in black marker." },
            { letter: "D", text: "The habit she trusted for speed was slowing her down." }
          ],
          correct: "D"
        },
        {
          id: "toughness",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "In sentence 19, Lina thinks of not drinking as toughness rather than stubbornness. Compared with stubbornness, toughness suggests a quality that is —",
          choices: [
            { letter: "A", text: "foolish and easy to mock" },
            { letter: "B", text: "secret and hidden from others" },
            { letter: "C", text: "admirable and a source of pride" },
            { letter: "D", text: "temporary and quickly forgotten" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 4 · Informational (level 2) · migrating birds ───────── */
    {
      id: "g10-ri-c84-bird-compass",
      family: "G10",
      title: "Maps Without Paper",
      kind: "Informational · 10.RI",
      blurb: "Sun, stars, magnetism, and smell: how migrating birds find their way.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every autumn, a songbird that weighs less than a few coins may leave a forest in Canada and, weeks later, arrive in the same patch of Central American woodland where it spent the previous winter. " +
        N(2) + "Many of these birds travel at night, alone, and young birds on their first trip have no parent to follow. " +
        N(3) + "For a long time, how they found their way was one of the great puzzles of biology. " +
        N(4) + "Scientists now know that the answer is not a single sense but a toolkit, and that birds switch between tools depending on the conditions.</p>" +
        "<p><strong>The sun and the stars.</strong> " + N(5) + "Birds that migrate by day can use the sun as a compass, correcting for its movement across the sky with an internal clock. " +
        N(6) + "Night migrants use the stars instead. " +
        N(7) + "In one well-known kind of experiment, young songbirds were raised in a planetarium where the projected sky turned around a different star than the real North Star. " +
        N(8) + "When migration season came, the birds tried to fly away from the false center of rotation, just as wild birds fly away from the real one. " +
        N(9) + "The result suggested that young birds are not born knowing particular constellations; instead, they learn which part of the sky stays still.</p>" +
        "<p><strong>The magnetic field.</strong> " + N(10) + "On cloudy nights, when the stars are hidden, many birds still orient correctly and set off in the right direction. " +
        N(11) + "Researchers have shown that birds can sense Earth's magnetic field, and that placing caged birds inside wire coils that shift the field causes them to change direction. " +
        N(12) + "Exactly how they detect magnetism is still debated. " +
        N(13) + "One leading idea involves light-sensitive molecules in the eye, which may allow a bird to \"see\" the field as a faint pattern laid over its vision, though this has not been confirmed.</p>" +
        "<p><strong>Landmarks and smell.</strong> " + N(14) + "Near the end of a journey, birds rely more on what they can see: coastlines, mountain ranges, and rivers that point the right way. " +
        N(15) + "Some seabirds appear to use smell as well, following the scent of plankton-rich waters across open ocean. " +
        N(16) + "In studies where seabirds' sense of smell was temporarily blocked, many still made it home, but they took longer and wandered more along the way.</p>" +
        "<p><strong>Why it matters.</strong> " + N(17) + "Understanding navigation is not only a scientific curiosity. " +
        N(18) + "Bright city lights can pull night migrants off course, and huge numbers of birds die each year in collisions with lit buildings. " +
        N(19) + "Because scientists now know how strongly many birds depend on the night sky, a number of cities have begun \"lights out\" programs that dim tall buildings during the peak weeks of migration. " +
        N(20) + "The more we learn about a bird's toolkit, the better we can avoid breaking it.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Maps Without Paper\"?",
          choices: [
            { letter: "A", text: "Birds navigate with several senses and shift among them as needed." },
            { letter: "B", text: "Young birds cannot migrate without following an experienced parent." },
            { letter: "C", text: "The magnetic sense is the only reliable guide birds have at night." },
            { letter: "D", text: "City lights are the greatest danger that migrating birds now face." }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 5 through 16 of \"Maps Without Paper\" mainly organized?",
          choices: [
            { letter: "A", text: "as a timeline of one bird's trip from north to south" },
            { letter: "B", text: "as a debate between two groups of scientists" },
            { letter: "C", text: "as a series of sections, each on one navigation tool" },
            { letter: "D", text: "as a problem followed by a single proposed solution" }
          ],
          correct: "C"
        },
        {
          id: "learn",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail best supports the idea that young birds learn the night sky rather than being born knowing it?",
          choices: [
            { letter: "A", text: "Day migrants correct for the sun's motion with an internal clock." },
            { letter: "B", text: "Planetarium birds flew away from a false center of rotation." },
            { letter: "C", text: "Caged birds turned when wire coils shifted the magnetic field." },
            { letter: "D", text: "Seabirds with blocked smell still found their way home." }
          ],
          correct: "B"
        },
        {
          id: "speculate",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which statement from the bird-navigation article is presented as an idea still unconfirmed rather than an established finding?",
          choices: [
            { letter: "A", text: "Night migrants use the stars instead of the sun." },
            { letter: "B", text: "Bright city lights can pull night migrants off course." },
            { letter: "C", text: "Birds can sense Earth's magnetic field." },
            { letter: "D", text: "Birds may \"see\" the field as a faint pattern." }
          ],
          correct: "D"
        },
        {
          id: "toolkit",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author describes a bird's navigation methods as a toolkit in sentences 4 and 20 mainly to emphasize that —",
          choices: [
            { letter: "A", text: "birds carry several methods and use whichever fits" },
            { letter: "B", text: "scientists built special tools to study migration" },
            { letter: "C", text: "birds must be trained by people before they migrate" },
            { letter: "D", text: "navigation is a skill only a few species possess" }
          ],
          correct: "A"
        },
        {
          id: "orient",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 10, the word orient most nearly means —",
          choices: [
            { letter: "A", text: "travel toward the east" },
            { letter: "B", text: "work out which way to go" },
            { letter: "C", text: "settle down for the night" },
            { letter: "D", text: "gather together in flocks" }
          ],
          correct: "B"
        },
        {
          id: "attitude",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author's attitude toward the \"lights out\" programs in sentences 19 and 20 is best described as —",
          choices: [
            { letter: "A", text: "doubtful" },
            { letter: "B", text: "indifferent" },
            { letter: "C", text: "alarmed" },
            { letter: "D", text: "approving" }
          ],
          correct: "D"
        },
        {
          id: "seabirds",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the article, what happened to seabirds whose sense of smell was temporarily blocked?",
          choices: [
            { letter: "A", text: "Almost none of them returned home." },
            { letter: "B", text: "They switched to following coastlines." },
            { letter: "C", text: "Many returned, but more slowly." },
            { letter: "D", text: "They flew only during daylight." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 5 · Informational (level 3) · rocks and caves ───────── */
    {
      id: "g10-ri-c84-slow-caves",
      family: "G10",
      title: "The Slow Architecture of Caves",
      kind: "Informational · 10.RI",
      blurb: "How weak acid hollows out limestone, how drips build formations, and why both are fragile.",
      level: 3,
      passage:
        "<p>" + N(1) + "Most caves are not carved by force. " +
        N(2) + "They are dissolved, a little at a time, by water so weakly acidic that you could safely drink it. " +
        N(3) + "The process is so slow that a person standing in a large cavern is looking at the work of hundreds of thousands of years, and the story begins not underground but at the bottom of ancient seas.</p>" +
        "<p>" + N(4) + "Limestone, the rock in which most of the world's large caves form, is made largely of calcium carbonate, much of it from the shells and skeletons of marine creatures that settled on old seafloors and were pressed into stone. " +
        N(5) + "When rain falls, it picks up a small amount of carbon dioxide from the air and, more importantly, from the soil it trickles through, forming a mild acid. " +
        N(6) + "That acid seeps into cracks in the limestone and dissolves the rock along them. " +
        N(7) + "Over long periods, the cracks widen into channels, the channels into tunnels, and, where the groundwater level later drops, the water-filled tunnels drain and become the air-filled passages that explorers walk through today.</p>" +
        "<p>" + N(8) + "Then the process partly reverses. " +
        N(9) + "When a drop of mineral-rich water emerges from a cave ceiling, it meets cave air that holds less carbon dioxide than the soil above did. " +
        N(10) + "The drop releases some of its gas, and in doing so it can no longer hold all of its dissolved mineral, so a microscopic ring of calcite is left behind. " +
        N(11) + "Drop after drop, ring upon ring, those deposits become formations: hollow soda straws, icicle-shaped stalactites, and, where drips land on the floor, stalagmites rising to meet them. " +
        N(12) + "Growth rates vary widely, but many formations add only a fraction of a millimeter a year, which means a stalactite as long as a forearm may be older than any human civilization.</p>" +
        "<p>" + N(13) + "That slowness makes caves unusually easy to damage. " +
        N(14) + "Oils from a single touch can coat a formation and block the thin film of water that feeds it, and a broken stalactite will not regrow in any span of time that matters to people. " +
        N(15) + "Cave managers describe a common pattern: a passage left open to unguided visitors for a few decades loses nearly every formation within arm's reach, snapped off as souvenirs or smudged dark by hands. " +
        N(16) + "Lint and skin flakes carried in on clothing also feed fungi and bacteria that do not belong in the cave.</p>" +
        "<p>" + N(17) + "For these reasons, many show caves now keep visitors on paved paths with railings, limit group sizes, and ask people to brush off their clothing before entering. " +
        N(18) + "Some visitors find the rules fussy. " +
        N(19) + "But a cave is a record as well as a place: scientists read the growth layers in stalagmites the way others read tree rings, recovering clues about rainfall and temperature from thousands of years ago. " +
        N(20) + "To break a formation is to tear pages out of that record before anyone has read them.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which of these best summarizes \"The Slow Architecture of Caves\"?",
          choices: [
            { letter: "A", text: "Caves are dangerous places that visitors should avoid entirely." },
            { letter: "B", text: "Limestone forms mostly from shells pressed together on seafloors." },
            { letter: "C", text: "Caves form and decorate so slowly that they are fragile and worth guarding." },
            { letter: "D", text: "Scientists prefer stalagmites to tree rings for studying old climates." }
          ],
          correct: "C"
        },
        {
          id: "sequence",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 4 through 7 of the cave article are organized mainly as —",
          choices: [
            { letter: "A", text: "a chain of causes and effects over time" },
            { letter: "B", text: "a comparison of two kinds of rock" },
            { letter: "C", text: "a claim followed by a counterclaim" },
            { letter: "D", text: "a list of rules for cave visitors" }
          ],
          correct: "A"
        },
        {
          id: "pages",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The comparison in sentence 20, tearing pages out of a record, mainly emphasizes that breaking a formation —",
          choices: [
            { letter: "A", text: "makes the cave easier for scientists to study" },
            { letter: "B", text: "is less harmful than touching a formation" },
            { letter: "C", text: "is common among careless visitors" },
            { letter: "D", text: "destroys information that cannot be recovered" }
          ],
          correct: "D"
        },
        {
          id: "calcite",
          sol: "10.RI.2.B",
          sub: "10.RI.2.B.2",
          stem: "According to the cave article, why does a drop of water leave calcite behind when it reaches the cave air?",
          choices: [
            { letter: "A", text: "The cave air is colder than the soil above." },
            { letter: "B", text: "It loses gas and can no longer hold all its mineral." },
            { letter: "C", text: "It mixes with oils left by visitors' hands." },
            { letter: "D", text: "It falls too quickly to carry the mineral down." }
          ],
          correct: "B"
        },
        {
          id: "fussy",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes sentence 18, about visitors who find the rules fussy, mainly to —",
          choices: [
            { letter: "A", text: "suggest that the rules should be relaxed" },
            { letter: "B", text: "explain why group sizes are limited" },
            { letter: "C", text: "acknowledge an objection before answering it" },
            { letter: "D", text: "show that most visitors break the rules" }
          ],
          correct: "C"
        },
        {
          id: "micro",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word microscopic in sentence 10 combines micro- (small) with a root meaning to look, as in telescope. Based on these parts, microscopic means —",
          choices: [
            { letter: "A", text: "too small to see without magnification" },
            { letter: "B", text: "visible only from a great distance" },
            { letter: "C", text: "shaped like a narrow ring or tube" },
            { letter: "D", text: "formed very slowly over many years" }
          ],
          correct: "A"
        },
        {
          id: "together",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which statement is best supported by sentences 12 and 14 of the cave article together?",
          choices: [
            { letter: "A", text: "Stalactites grow faster when visitors stay away." },
            { letter: "B", text: "A moment of damage can erase what took ages to grow." },
            { letter: "C", text: "Most formations are younger than human civilization." },
            { letter: "D", text: "Formations that are touched soon grow back larger." }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author opens the cave article with sentences 1 and 2 rather than with a definition of limestone mainly to —",
          choices: [
            { letter: "A", text: "warn readers that caves can collapse without notice" },
            { letter: "B", text: "prove that cave water is safe for visitors to drink" },
            { letter: "C", text: "list the steps that scientists use to date caves" },
            { letter: "D", text: "challenge a likely assumption and spark curiosity" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 6 · Vocabulary (level 1) · a fictional ancient city ───────── */
    {
      id: "g10-rv-c84-channel-keeper",
      family: "G10",
      title: "The Keeper of the Channels",
      kind: "Vocabulary · 10.RV",
      blurb: "In the hill city of Ombrel, an apprentice learns why the old water keeper measures every day.",
      level: 1,
      passage:
        "<p>" + N(1) + "In the hill city of Ombrel, water was a public matter, and the person who managed it was the Keeper of the Channels. " +
        N(2) + "Every street had a narrow stone gutter cut into its center, and every gutter was fed by the great cistern at the top of the city, where rain from the winter storms was stored. " +
        N(3) + "Twelve-year-old Tavi had been apprenticed to the Keeper, an old woman named Sarnai, for less than a month, and already her shoulders ached.</p>" +
        "<p>" + N(4) + "The work was <strong>arduous</strong>. " +
        N(5) + "Each morning Tavi climbed the three hundred steps to the cistern carrying a bronze rod, a broom of stiff reeds, and a clay tablet for notes, and each evening she climbed down again with her legs shaking. " +
        N(6) + "Sarnai, who was nearly seventy, climbed the same steps without seeming to notice them. " +
        N(7) + "She was also <strong>meticulous</strong>: she checked every sluice gate twice, measured the water's height with a notched pole, and recorded the number on the tablet before she allowed herself breakfast.</p>" +
        "<p>" + N(8) + "\"Why measure every day?\" Tavi asked once. \"The water is the same as yesterday.\" " +
        N(9) + "Sarnai pointed down at the city's tiled roofs. \"The water is never the same. If it falls slowly, a gutter is leaking somewhere. If it falls quickly, someone has <strong>diverted</strong> a channel into a private garden. The pole tells me before the people do.\"</p>" +
        "<p>" + N(10) + "In midsummer the pole began to tell a story. " +
        N(11) + "The level dropped a finger's width more each day than it should have. " +
        N(12) + "Sarnai and Tavi walked the gutters street by street, <strong>vigilant</strong> for the dark stain of a leak, until they came to the merchant quarter. " +
        N(13) + "There, behind a wall carved with <strong>ornate</strong> vines and birds, they heard the sound of running water where no channel was supposed to run. " +
        N(14) + "A merchant had cut a secret pipe from the public gutter to fill a decorative pool in his courtyard.</p>" +
        "<p>" + N(15) + "Sarnai did not shout. " +
        N(16) + "She simply read the numbers from her tablet aloud at the city council the next morning, day after day of them, until the council ordered the pipe sealed. " +
        N(17) + "Within a week the cistern level held steady, and by autumn, when the first storms arrived to <strong>replenish</strong> it, the lower wells that served the poorest streets had not once run dry. " +
        N(18) + "That evening on the steps, as the sun went down behind the cistern, Tavi realized her legs no longer shook. " +
        N(19) + "She carried the tablet now, and she checked the gates twice.</p>",
      claims: [
        {
          id: "arduous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 4, the word arduous most nearly means —",
          choices: [
            { letter: "A", text: "dull and repetitive" },
            { letter: "B", text: "requiring great effort" },
            { letter: "C", text: "secret and dangerous" },
            { letter: "D", text: "well paid and respected" }
          ],
          correct: "B"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which part of sentence 7 best shows the meaning of meticulous?",
          choices: [
            { letter: "A", text: "measured the water's height" },
            { letter: "B", text: "with a notched pole" },
            { letter: "C", text: "before she allowed herself breakfast" },
            { letter: "D", text: "she checked every sluice gate twice" }
          ],
          correct: "D"
        },
        {
          id: "diverted",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word diverted in sentence 9 contains the prefix di- (aside) and the root vert (to turn), as in reverse and convert. Diverted most nearly means —",
          choices: [
            { letter: "A", text: "turned aside from its usual course" },
            { letter: "B", text: "split into two equal parts" },
            { letter: "C", text: "returned to its starting point" },
            { letter: "D", text: "made deeper and wider" }
          ],
          correct: "A"
        },
        {
          id: "ornate",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author describes the merchant's wall as ornate rather than decorated in sentence 13. Compared with decorated, ornate suggests carving that is —",
          choices: [
            { letter: "A", text: "old and crumbling" },
            { letter: "B", text: "plain and practical" },
            { letter: "C", text: "lavish and showy" },
            { letter: "D", text: "rough and unfinished" }
          ],
          correct: "C"
        },
        {
          id: "vigilant",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 12, Sarnai and Tavi walk the gutters vigilant for a leak. Vigilant most nearly means —",
          choices: [
            { letter: "A", text: "hurried and careless" },
            { letter: "B", text: "angry and suspicious" },
            { letter: "C", text: "watchful and alert" },
            { letter: "D", text: "tired and discouraged" }
          ],
          correct: "C"
        },
        {
          id: "replenish",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word replenish in sentence 17 joins re- (again) with a root related to plenty and plentiful. To replenish the cistern is to —",
          choices: [
            { letter: "A", text: "empty it for cleaning" },
            { letter: "B", text: "fill it up again" },
            { letter: "C", text: "measure it twice" },
            { letter: "D", text: "seal it shut" }
          ],
          correct: "B"
        },
        {
          id: "sarnai",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 15 and 16 characterize Sarnai as someone who —",
          choices: [
            { letter: "A", text: "wins arguments with calm, steady evidence" },
            { letter: "B", text: "fears the merchants of the city" },
            { letter: "C", text: "prefers to let the council act alone" },
            { letter: "D", text: "enjoys embarrassing powerful people" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by the story of Tavi and Sarnai in Ombrel?",
          choices: [
            { letter: "A", text: "Young apprentices usually know more than their teachers." },
            { letter: "B", text: "Wealthy citizens deserve a larger share of public goods." },
            { letter: "C", text: "Hard work is worthwhile only when others can see it." },
            { letter: "D", text: "Patient, careful attention can protect a whole community." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 7 · Vocabulary (level 2) · sports science ───────── */
    {
      id: "g10-rv-c84-sleep-training",
      family: "G10",
      title: "The Training That Happens in Bed",
      kind: "Vocabulary · 10.RV",
      blurb: "Why sports scientists now count a good night's sleep as part of practice.",
      level: 2,
      passage:
        "<p>" + N(1) + "Ask a high school athlete how to get faster, and you will hear about drills, weights, and miles. " +
        N(2) + "Few will mention the eight or nine hours they spend unconscious each night, between the last text message and the alarm. " +
        N(3) + "Yet sports scientists increasingly describe sleep as part of training rather than a break from it.</p>" +
        "<p>" + N(4) + "During deep sleep, the body releases a surge of growth hormone, which helps repair the tiny tears in muscle fibers that hard exercise creates. " +
        N(5) + "This <strong>restorative</strong> work is one reason athletes who sleep poorly often feel sore for longer. " +
        N(6) + "Sleep also helps the brain <strong>consolidate</strong> new skills; a swimmer who practices a flip turn in the afternoon may perform it more smoothly the next day, because during the night the brain strengthens and organizes the pathways that the practice laid down.</p>" +
        "<p>" + N(7) + "The costs of a sleep <strong>deficit</strong> add up quickly. " +
        N(8) + "Studies of athletes who were limited to about five hours of sleep a night for several nights found that reaction times slowed, accuracy fell, and the same pace felt harder. " +
        N(9) + "Even short-term losses can <strong>impair</strong> judgment, the kind of split-second choices a point guard or goalkeeper must make dozens of times a game. " +
        N(10) + "In some studies, injury rates were also higher among teenage athletes who reported sleeping fewer than eight hours, though researchers caution that other factors may also play a role.</p>" +
        "<p>" + N(11) + "The good news is that the fix is cheap. " +
        N(12) + "Coach Lucas Ferreira, who runs the swim program at a large suburban high school, began asking his swimmers to log their sleep along with their practice yardage. " +
        N(13) + "At first, many treated the sleep log as a joke and filled it in carelessly. " +
        N(14) + "Then he added a simple <strong>regimen</strong>: phones off thirty minutes before bed, the same wake-up time on weekends, and a short nap rather than a late-night study session on the evening before a meet. " +
        N(15) + "By the end of the season, he said, the swimmers who followed the plan most closely had the largest time drops on the team, though he admits that the most dedicated sleepers may also have been the most dedicated trainers.</p>" +
        "<p>" + N(16) + "Not every claim about sleep holds up. " +
        N(17) + "Expensive mattresses and gadgets marketed to athletes have shown <strong>negligible</strong> effects in most independent tests, and no amount of extra sleep will replace actual practice. " +
        N(18) + "Still, the basic message from the research is consistent, and it fits on a locker-room whiteboard: muscles are built in the gym and finished in bed.</p>",
      claims: [
        {
          id: "restorative",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 5, the word restorative most nearly means —",
          choices: [
            { letter: "A", text: "slowing down growth" },
            { letter: "B", text: "causing new soreness" },
            { letter: "C", text: "storing extra energy" },
            { letter: "D", text: "repairing and renewing" }
          ],
          correct: "D"
        },
        {
          id: "consolidate",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which phrase from sentence 6 best helps a reader understand the meaning of consolidate?",
          choices: [
            { letter: "A", text: "practices a flip turn in the afternoon" },
            { letter: "B", text: "strengthens and organizes the pathways" },
            { letter: "C", text: "perform it more smoothly the next day" },
            { letter: "D", text: "during the night" }
          ],
          correct: "B"
        },
        {
          id: "deficit",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word deficit in sentence 7 shares a root with deficient, which describes something lacking. A sleep deficit is —",
          choices: [
            { letter: "A", text: "a habit of sleeping too late" },
            { letter: "B", text: "a dream about competing" },
            { letter: "C", text: "a shortage of needed sleep" },
            { letter: "D", text: "a schedule for nap times" }
          ],
          correct: "C"
        },
        {
          id: "impair",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author chose impair rather than ruin in sentence 9. Compared with ruin, impair suggests that lost sleep —",
          choices: [
            { letter: "A", text: "weakens judgment without destroying it" },
            { letter: "B", text: "improves judgment in certain sports" },
            { letter: "C", text: "destroys judgment completely and forever" },
            { letter: "D", text: "has no real effect on judgment at all" }
          ],
          correct: "A"
        },
        {
          id: "regimen",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "As used in sentence 14 about Coach Ferreira's swimmers, the word regimen most nearly means —",
          choices: [
            { letter: "A", text: "a set plan of routines" },
            { letter: "B", text: "a group of teammates" },
            { letter: "C", text: "a form of punishment" },
            { letter: "D", text: "a written apology" }
          ],
          correct: "A"
        },
        {
          id: "negligible",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word negligible in sentence 17 is related to neglect and ends in -ible (able to be). Negligible effects are effects that are —",
          choices: [
            { letter: "A", text: "harmful to athletes" },
            { letter: "B", text: "proven by experts" },
            { letter: "C", text: "hard to measure" },
            { letter: "D", text: "small enough to ignore" }
          ],
          correct: "D"
        },
        {
          id: "admits",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "The admission at the end of sentence 15 about the most dedicated sleepers mainly serves to —",
          choices: [
            { letter: "A", text: "prove that sleep alone caused the time drops" },
            { letter: "B", text: "suggest that the swimmers lied in their logs" },
            { letter: "C", text: "note another possible reason for the results" },
            { letter: "D", text: "criticize swimmers who did not train hard" }
          ],
          correct: "C"
        },
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which sentence best states the central claim of \"The Training That Happens in Bed\"?",
          choices: [
            { letter: "A", text: "Sentence 13, about swimmers treating the log as a joke" },
            { letter: "B", text: "Sentence 3, about sleep being part of training" },
            { letter: "C", text: "Sentence 16, about claims that do not hold up" },
            { letter: "D", text: "Sentence 12, about logging practice yardage" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────── 8 · Paired texts (level 2) · migrating birds ───────── */
    {
      id: "g10-dsr-c84-saltmeadow",
      family: "G10",
      title: "Saltmeadow Flats",
      kind: "Paired texts · 10.DSR",
      blurb: "A student's essay about a shorebird stopover and a harbor notice about the same mud.",
      level: 2,
      passage:
        "<p><strong>Text 1 — \"Twelve Days on the Mud,\" an essay by Ines Varga for her school's science magazine</strong></p>" +
        "<p>" + N(1) + "Most people drive past Saltmeadow Flats without slowing down, and I understand why: at low tide it is a gray mile of mud that smells like old pennies. " +
        N(2) + "But for about two weeks every May, it is one of the busiest restaurants in the hemisphere. " +
        N(3) + "The diners are shorebirds, sandpipers and plovers on their way from South America to nesting grounds in the Arctic, and the menu is mostly tiny clams, worms, and the eggs of horseshoe crabs. " +
        N(4) + "Our biology class counted birds there last spring with the county naturalist, Mr. Obi. " +
        N(5) + "On our first visit we saw a few hundred. " +
        N(6) + "Twelve days later, the count was over eleven thousand, so many that when a hawk passed over, the whole flock lifted at once and the sky seemed to flicker. " +
        N(7) + "Mr. Obi explained that many of these birds arrive thin, having flown thousands of miles without stopping, and must nearly double their weight in under two weeks before the final leg north. " +
        N(8) + "\"If the food isn't here when they are,\" he said, \"there is no other table to go to.\" " +
        N(9) + "A bird that leaves underweight may reach the Arctic too weak to nest. " +
        N(10) + "I think about that whenever I hear someone call the flats empty. " +
        N(11) + "They are not empty. " +
        N(12) + "They are a fuel stop that the birds have depended on for longer than our town has existed, and the timing is everything.</p>" +
        "<p><strong>Text 2 — Notice of Channel Maintenance, Port of Wexley Harbor District</strong></p>" +
        "<p>" + N(13) + "The Harbor District will dredge the north shipping channel to restore its required depth of thirty feet for commercial traffic. " +
        N(14) + "Sand and sediment that have built up over the past four years make the channel unsafe for loaded cargo ships at low tide, and two vessels ran aground there last winter. " +
        N(15) + "Dredging will take place from May 3 through May 28. " +
        N(16) + "The District chose these dates because calm spring weather reduces delays and because the contractor's equipment is available then. " +
        N(17) + "Material removed from the channel will be pumped onto the eastern section of Saltmeadow Flats, a low-lying area that the District's engineers have identified as suitable for deposit because it has no buildings or roads. " +
        N(18) + "Once deposited, the material will be graded smooth and left to settle, and the District expects the area to look much as it does now within two years. " +
        N(19) + "Work crews will operate around the clock to finish before the summer shipping season, when channel traffic doubles. " +
        N(20) + "Residents along Shore Road may notice pump noise and bright work lights at night throughout the project. " +
        N(21) + "The District regrets any inconvenience and thanks the community for its patience during this necessary work. " +
        N(22) + "Public comments on the schedule will be accepted at the Harbor District office until April 15.</p>",
      claims: [
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which statement best describes a key difference in how the two texts view Saltmeadow Flats?",
          choices: [
            { letter: "A", text: "Text 1 calls the flats dangerous; Text 2 calls them safe." },
            { letter: "B", text: "Text 1 sees vital habitat; Text 2 sees open, unused space." },
            { letter: "C", text: "Text 1 focuses on winter; Text 2 focuses on summer." },
            { letter: "D", text: "Text 1 wants new roads; Text 2 wants to protect the mud." }
          ],
          correct: "B"
        },
        {
          id: "only-both",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which problem at Saltmeadow Flats becomes clear only when both texts are read together?",
          choices: [
            { letter: "A", text: "Cargo ships have run aground in the north channel." },
            { letter: "B", text: "Shorebirds must nearly double their weight in May." },
            { letter: "C", text: "Pump noise may disturb residents during the night." },
            { letter: "D", text: "The deposit work falls during the birds' feeding stop." }
          ],
          correct: "D"
        },
        {
          id: "effect",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Using both texts, the most likely effect of the Harbor District's plan on the shorebirds would be that —",
          choices: [
            { letter: "A", text: "feeding areas are buried just when birds most need food" },
            { letter: "B", text: "the birds move to the flats' western section and thrive" },
            { letter: "C", text: "the birds stay longer because the channel is deeper" },
            { letter: "D", text: "the hawks that hunt the flock are driven away for good" }
          ],
          correct: "A"
        },
        {
          id: "select-two",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "Select TWO sentences that together best show the timing conflict between the essay and the notice.",
          choices: [
            { letter: "A", text: "Sentence 2: for about two weeks every May, it is one of the busiest restaurants" },
            { letter: "B", text: "Sentence 4: our class counted birds with the county naturalist" },
            { letter: "C", text: "Sentence 15: dredging will take place from May 3 through May 28" },
            { letter: "D", text: "Sentence 20: residents may notice pump noise and lights" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "notice-tone",
          sol: "10.RI.3.A",
          sub: "10.RI.3.A.1",
          stem: "Compared with Ines's essay, the tone of the harbor notice is best described as —",
          choices: [
            { letter: "A", text: "angry and accusing" },
            { letter: "B", text: "playful and personal" },
            { letter: "C", text: "formal and impersonal" },
            { letter: "D", text: "worried and uncertain" }
          ],
          correct: "C"
        },
        {
          id: "weight",
          sol: "10.RI.2.B",
          sub: "10.RI.2.B.2",
          stem: "According to Text 1, why must the shorebirds gain weight so quickly at the flats?",
          choices: [
            { letter: "A", text: "They need to escape the hawks that hunt them." },
            { letter: "B", text: "They arrive thin and face a long flight to nest." },
            { letter: "C", text: "The clams disappear once summer shipping begins." },
            { letter: "D", text: "Heavier birds are counted more easily by students." }
          ],
          correct: "B"
        },
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point would Ines Varga and the Harbor District most likely agree?",
          choices: [
            { letter: "A", text: "The flats should be graded smooth every year." },
            { letter: "B", text: "Shipping matters more than local wildlife." },
            { letter: "C", text: "The dredging schedule cannot be changed." },
            { letter: "D", text: "To many people, the flats look empty." }
          ],
          correct: "D"
        },
        {
          id: "next-step",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Using both texts, what would be the most useful step for Ines's biology class to take before April 15?",
          choices: [
            { letter: "A", text: "Submit a comment asking to move the deposit dates." },
            { letter: "B", text: "Plan a bird count for the night of May 3." },
            { letter: "C", text: "Ask the District to dredge a deeper channel." },
            { letter: "D", text: "Write to cargo companies about running aground." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────── 9 · Paired texts (level 3) · a fictional ancient city ───────── */
    {
      id: "g10-dsr-c84-qaravel",
      family: "G10",
      title: "The Spring of Qaravel",
      kind: "Paired texts · 10.DSR",
      blurb: "A founding legend of an imagined desert city, and what the excavators found beneath it.",
      level: 3,
      passage:
        "<p><strong>Text 1 — \"How Qaravel Was Founded,\" a legend as the river-valley storytellers tell it</strong></p>" +
        "<p>" + N(1) + "In the days before the walls, the people of the valley wandered from pasture to pasture, and every summer the river shrank and their herds grew thin. " +
        N(2) + "Then a young herder named Ashtiya saw a white heron standing in a dry field where no heron had any reason to be. " +
        N(3) + "She followed it for three days, sleeping on stones and drinking the dew from leaves, and on the third evening it led her to a hollow in the rocks where cold water rose from the ground and did not stop. " +
        N(4) + "Ashtiya called the people together and told them that the heron had given them a home. " +
        N(5) + "In a single year, the storytellers say, they raised the great walls of Qaravel, each family carrying stones from the hills, and Ashtiya became the first queen. " +
        N(6) + "Her first law was that no one could own the spring; its water belonged to everyone inside the walls, and to any traveler who asked. " +
        N(7) + "That is why, the storytellers say, a heron is carved above every gate of the city, and why a stranger who comes thirsty to Qaravel is never turned away. " +
        N(8) + "And that is why the city has never fallen, for a place that shares its water has no enemies desperate enough to destroy it. " +
        N(9) + "When children ask whether the heron was real, the storytellers only smile and point to the gates.</p>" +
        "<p><strong>Text 2 — From a field report on the excavations at Qaravel</strong></p>" +
        "<p>" + N(10) + "Excavations at the base of Qaravel's central mound tell a slower story than the founding legend. " +
        N(11) + "The lowest layers, near the spring, contain the remains of about a dozen small mud-brick houses, cooking hearths, and animal bones, consistent with a farming village of perhaps eighty people. " +
        N(12) + "Radiocarbon dates from charcoal in these layers place the village roughly three hundred years earlier than the oldest section of the stone walls. " +
        N(13) + "The walls themselves were built in at least four phases, with different stone-cutting methods and mortar in each, which points to construction over several generations rather than a single year. " +
        N(14) + "No evidence of a single ruler has been found in the earliest layers; the houses are similar in size, and there is no palace or large tomb. " +
        N(15) + "However, one finding does echo the legend. " +
        N(16) + "Fragments of pottery from the very first village layer are painted with a long-legged wading bird, and a stone basin built around the spring at an early date has an open channel leading outside the settlement, as though its water was meant to be reached by people beyond it. " +
        N(17) + "The team cannot say what the bird meant to the villagers. " +
        N(18) + "It does appear that the spring, and the image of the bird, mattered from the beginning.</p>",
      claims: [
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The legend and the field report about Qaravel differ mainly in how they describe —",
          choices: [
            { letter: "A", text: "where the city's spring was located" },
            { letter: "B", text: "which animals the first people herded" },
            { letter: "C", text: "how long the city took to take shape" },
            { letter: "D", text: "what the carvings above the gates show" }
          ],
          correct: "C"
        },
        {
          id: "shared",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which idea about Qaravel is supported by both texts?",
          choices: [
            { letter: "A", text: "A single ruler organized the building of the walls." },
            { letter: "B", text: "The spring and a bird image were central from the start." },
            { letter: "C", text: "The first settlers were wandering herders, not farmers." },
            { letter: "D", text: "The city has never been attacked by its neighbors." }
          ],
          correct: "B"
        },
        {
          id: "select-two",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "Select TWO sentences from Text 2 that most directly challenge the claim in sentence 5 that the walls rose in a single year.",
          choices: [
            { letter: "A", text: "Sentence 12, which dates the village long before the oldest walls" },
            { letter: "B", text: "Sentence 13, which describes walls built in at least four phases" },
            { letter: "C", text: "Sentence 16, which describes painted pottery and a stone basin" },
            { letter: "D", text: "Sentence 18, which says the spring mattered from the beginning" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "channel",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does the open channel described in sentence 16 relate to Text 1?",
          choices: [
            { letter: "A", text: "It proves that Ashtiya personally designed the basin." },
            { letter: "B", text: "It contradicts the legend's claim that the city never fell." },
            { letter: "C", text: "It shows that the heron carvings came later than the walls." },
            { letter: "D", text: "It fits Ashtiya's law that travelers could share the water." }
          ],
          correct: "D"
        },
        {
          id: "value",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "The legend in Text 1 mainly expresses the value that —",
          choices: [
            { letter: "A", text: "sharing a precious resource brings safety" },
            { letter: "B", text: "strong walls matter more than strong laws" },
            { letter: "C", text: "leaders should come from powerful families" },
            { letter: "D", text: "wandering is better than settling in one place" }
          ],
          correct: "A"
        },
        {
          id: "interpret",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which phrase from the Qaravel field report is an interpretation rather than a measured finding?",
          choices: [
            { letter: "A", text: "about a dozen small mud-brick houses" },
            { letter: "B", text: "roughly three hundred years earlier" },
            { letter: "C", text: "different stone-cutting methods and mortar" },
            { letter: "D", text: "as though its water was meant to be reached" }
          ],
          correct: "D"
        },
        {
          id: "storytellers-say",
          sol: "10.RL.3.A",
          sub: "10.RL.3.A.1",
          stem: "The repeated phrase the storytellers say in sentences 5 and 7 mainly serves to —",
          choices: [
            { letter: "A", text: "show that the storytellers disagree with one another" },
            { letter: "B", text: "suggest that the legend was recently invented" },
            { letter: "C", text: "mark the account as a tradition passed down by voice" },
            { letter: "D", text: "prove that the walls were truly built in one year" }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "A reader who uses both the legend and the report could best conclude that the legend —",
          choices: [
            { letter: "A", text: "is entirely invented and should be ignored" },
            { letter: "B", text: "compresses a long history but keeps a real early value" },
            { letter: "C", text: "is more accurate than the radiocarbon dates" },
            { letter: "D", text: "was written down by the first village's rulers" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────── 10 · Poetry (level 1) · migrating birds ───────── */
    {
      id: "g10-rl-c84-cranes-poem",
      family: "G10",
      title: "Cranes Over the Rail Yard",
      kind: "Poetry · 10.RL",
      blurb: "A crowd on a train platform looks up as the cranes pass south.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "They come in late October, after school,<br>" +
        L(2) + "when the light goes copper on the rail yard fence,<br>" +
        L(3) + "and you hear them before you see them: a rattle,<br>" +
        L(4) + "a creaking, like a door in an old house<br>" +
        L(5) + "opening and opening and never closing.<br>" +
        L(6) + "Then the sky fills, a long uneven V,<br>" +
        L(7) + "then another, and another, loose as stitches,<br>" +
        L(8) + "hundreds of gray birds rowing south.<br>" +
        L(9) + "On the platform, everyone forgets their phones.<br>" +
        L(10) + "The man selling roasted corn stops turning the ears.<br>" +
        L(11) + "A boy in a too-big jacket counts aloud<br>" +
        L(12) + "and loses track at forty and starts over.<br>" +
        L(13) + "My grandmother, who came here from a country<br>" +
        L(14) + "with different birds, puts down her shopping bags<br>" +
        L(15) + "and tips her face up like a cup.<br>" +
        L(16) + "She says that where she grew up, the cranes<br>" +
        L(17) + "meant the harvest was in and the roads were dry,<br>" +
        L(18) + "that people would leave their work to watch.<br>" +
        L(19) + "\"Same birds,\" she says, \"or their cousins.<br>" +
        L(20) + "They don't need a passport. They just remember.\"<br>" +
        L(21) + "The train comes in, and the doors slide open,<br>" +
        L(22) + "and we get on, because we have somewhere to be.<br>" +
        L(23) + "But for a minute we were a crowd that looked up,<br>" +
        L(24) + "and the sky was a road, and we knew where it went.</p>",
      claims: [
        {
          id: "door",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "In lines 4 and 5, comparing the cranes' call to a door opening and opening and never closing suggests that the sound is —",
          choices: [
            { letter: "A", text: "long, rough, and continuous" },
            { letter: "B", text: "sharp, sudden, and brief" },
            { letter: "C", text: "soft and easy to miss" },
            { letter: "D", text: "musical and cheerful" }
          ],
          correct: "A"
        },
        {
          id: "cup",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "In line 15, the image of the grandmother tipping her face up like a cup suggests that she is —",
          choices: [
            { letter: "A", text: "thirsty after carrying her shopping" },
            { letter: "B", text: "trying to hide her face from the crowd" },
            { letter: "C", text: "eagerly taking in the moment" },
            { letter: "D", text: "checking the sky for rain" }
          ],
          correct: "C"
        },
        {
          id: "grandmother",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Lines 13 through 20 characterize the speaker's grandmother as someone who —",
          choices: [
            { letter: "A", text: "dislikes her new home and its birds" },
            { letter: "B", text: "links the cranes to memories of her homeland" },
            { letter: "C", text: "knows the scientific names of many birds" },
            { letter: "D", text: "worries that she will miss the train" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by \"Cranes Over the Rail Yard\"?",
          choices: [
            { letter: "A", text: "City life leaves no time to notice nature." },
            { letter: "B", text: "Travelers should always be on time for trains." },
            { letter: "C", text: "Only older people appreciate wild animals." },
            { letter: "D", text: "A shared wonder can briefly connect strangers." }
          ],
          correct: "D"
        },
        {
          id: "line22",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "The poet places line 22, because we have somewhere to be, just before the final two lines mainly to —",
          choices: [
            { letter: "A", text: "show that the speaker is late for school" },
            { letter: "B", text: "contrast daily routine with the moment of wonder" },
            { letter: "C", text: "suggest that the cranes have frightened the crowd" },
            { letter: "D", text: "explain why the grandmother left her country" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of lines 23 and 24 of the crane poem is best described as —",
          choices: [
            { letter: "A", text: "quietly grateful" },
            { letter: "B", text: "bitterly regretful" },
            { letter: "C", text: "nervously excited" },
            { letter: "D", text: "coldly distant" }
          ],
          correct: "A"
        },
        {
          id: "platform",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "What change takes place on the platform in lines 9 through 12?",
          choices: [
            { letter: "A", text: "The crowd hurries to board an early train." },
            { letter: "B", text: "A vendor starts selling corn to the crowd." },
            { letter: "C", text: "People begin taking photos of the cranes." },
            { letter: "D", text: "Ordinary activity pauses as people watch." }
          ],
          correct: "D"
        },
        {
          id: "rattle",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The poet describes the cranes' call with the words rattle and creaking rather than song. Compared with song, these words suggest a sound that is —",
          choices: [
            { letter: "A", text: "sweet and carefully practiced" },
            { letter: "B", text: "faint and nearly silent" },
            { letter: "C", text: "harsh and unpolished" },
            { letter: "D", text: "sad and mournful" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 11 · Drama (level 2) · a fictional ancient city ───────── */
    {
      id: "g10-rl-c84-hathra-arch",
      family: "G10",
      title: "The Inside of the Arch",
      kind: "Drama · 10.RL",
      blurb: "In the stoneyard of an imagined city, an apprentice carver learns where the real names go.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "The stoneyard of the city of Hathra, late afternoon. Dust hangs in the slanting light, and half-finished blocks stand in rows like patient animals. KESI, fifteen, kneels beside a block of white limestone, chisel in hand. MASTER DURU, gray-bearded and slow, studies the letters she has carved.</em></p>" +
        "<p><strong>DURU:</strong> " + N(2) + "The third line leans. " + N(3) + "Your hand was tired when you cut it.</p>" +
        "<p><strong>KESI:</strong> " + N(4) + "My hand has been tired since sunrise. " + N(5) + "This is the forty-first stone of the aqueduct, and every one has needed a mark.</p>" +
        "<p><strong>DURU:</strong> " + N(6) + "And every one has received it. " + N(7) + "That is the job.</p>" +
        "<p><em>" + N(8) + "PELL, the governor's steward, enters with a wax tablet, stepping around the stone chips as if they might bite.</em></p>" +
        "<p><strong>PELL:</strong> " + N(9) + "Master Duru. " + N(10) + "The governor has approved the dedication for the great arch. " + N(11) + "It will read: \"Built by Governor Asander, in the ninth year of his rule, for the people of Hathra.\" " + N(12) + "Nothing more.</p>" +
        "<p><strong>KESI:</strong> " + N(13) + "Nothing more? " + N(14) + "Two hundred workers built that arch. " + N(15) + "Three of them were badly hurt when the scaffold fell in the spring rains, and they came back to work before their arms had healed.</p>" +
        "<p><strong>PELL:</strong> " + N(16) + "The governor paid for the arch, girl. " + N(17) + "Stones do not remember who lifted them.</p>" +
        "<p><strong>DURU:</strong> <em>(quietly)</em> " + N(18) + "The inscription will be cut as the governor wishes. " + N(19) + "You may tell him so.</p>" +
        "<p><em>" + N(20) + "PELL nods, satisfied, and leaves. KESI throws down her chisel.</em></p>" +
        "<p><strong>KESI:</strong> " + N(21) + "You agreed! " + N(22) + "You, who know every one of those workers by name!</p>" +
        "<p><strong>DURU:</strong> " + N(23) + "Pick up your chisel. " + N(24) + "Come here. <em>(He kneels and tips a finished block to show its underside.)</em> " + N(25) + "What do you see?</p>" +
        "<p><strong>KESI:</strong> <em>(slowly)</em> " + N(26) + "A sign. " + N(27) + "A fish, and a broken line. " + N(28) + "That is Tamar's mark. " + N(29) + "He was one of the three who fell.</p>" +
        "<p><strong>DURU:</strong> " + N(30) + "Every stone in that arch has a mark on the side that faces inward. " + N(31) + "The mason's mark, the quarryman's, the hauler's, sometimes a child's who carried water to the crew. " + N(32) + "The governor will have his name on the outside, where the rain will wear it smooth in a few hundred years. " + N(33) + "The names on the inside will hold the arch up.</p>" +
        "<p><strong>KESI:</strong> " + N(34) + "No one will ever see them.</p>" +
        "<p><strong>DURU:</strong> " + N(35) + "The arch will see them. " + N(36) + "<em>(He hands her the chisel.)</em> Now. " + N(37) + "Fix your third line, and then put your own mark where it belongs.</p>" +
        "<p><em>" + N(38) + "KESI looks at the stone for a long moment, then grips the chisel, wipes the dust from its edge, and bends to work. " + N(39) + "The lights fade on the steady sound of the chisel.</em></p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The central conflict in \"The Inside of the Arch\" is best described as a struggle over —",
          choices: [
            { letter: "A", text: "whether Kesi is skilled enough to carve letters" },
            { letter: "B", text: "how much the governor will pay the stoneyard" },
            { letter: "C", text: "who will be blamed for the fallen scaffold" },
            { letter: "D", text: "whether the arch's builders will be honored" }
          ],
          correct: "D"
        },
        {
          id: "pell",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "The stage direction in sentence 8, stepping around the stone chips as if they might bite, characterizes Pell as —",
          choices: [
            { letter: "A", text: "fussy and uneasy around physical labor" },
            { letter: "B", text: "clumsy and likely to fall" },
            { letter: "C", text: "playful and fond of jokes" },
            { letter: "D", text: "curious about how stone is cut" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which statement best explains the irony in Duru's lines in sentences 32 and 33?",
          choices: [
            { letter: "A", text: "The governor refuses to pay for the arch he ordered." },
            { letter: "B", text: "Kesi carves better letters than her master does." },
            { letter: "C", text: "The famous name will fade while hidden ones endure." },
            { letter: "D", text: "Pell cannot read the dedication he delivers." }
          ],
          correct: "C"
        },
        {
          id: "outburst",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "Kesi's outburst in sentences 21 and 22 mainly serves to —",
          choices: [
            { letter: "A", text: "show that she plans to leave the stoneyard" },
            { letter: "B", text: "reveal her misreading of Duru and set up his reveal" },
            { letter: "C", text: "prove that Duru fears the governor's steward" },
            { letter: "D", text: "explain why the third line of her carving leans" }
          ],
          correct: "B"
        },
        {
          id: "arch-sees",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "Duru's reply in sentence 35, The arch will see them, suggests that the workers' marks —",
          choices: [
            { letter: "A", text: "will someday be shown to the governor" },
            { letter: "B", text: "are meant as a warning to future builders" },
            { letter: "C", text: "will be removed before the arch is finished" },
            { letter: "D", text: "matter to the work even if no person sees them" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does the scene between Kesi and Duru best develop?",
          choices: [
            { letter: "A", text: "Real contribution does not depend on public credit." },
            { letter: "B", text: "Young workers should never question their elders." },
            { letter: "C", text: "Powerful people always pay fairly for good work." },
            { letter: "D", text: "Arguments are best settled by those with power." }
          ],
          correct: "A"
        },
        {
          id: "stones",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Pell's remark in sentence 17, Stones do not remember who lifted them, suggests that he believes —",
          choices: [
            { letter: "A", text: "the arch was built too quickly to last" },
            { letter: "B", text: "the workers' effort leaves no trace worth honoring" },
            { letter: "C", text: "the stones were cut from a forgotten quarry" },
            { letter: "D", text: "Kesi should carve more carefully next time" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "In sentence 37, Duru tells Kesi to fix her third line and then add her own mark. This instruction suggests that he sees her as —",
          choices: [
            { letter: "A", text: "too careless to work on the great arch" },
            { letter: "B", text: "a servant who must obey the governor" },
            { letter: "C", text: "one of the builders whose work holds things up" },
            { letter: "D", text: "an apprentice who should begin training again" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 12 · Functional text (level 1) · rocks and caves ───────── */
    {
      id: "g10-ri-c84-lantern-tour",
      family: "G10",
      title: "Lantern Tour Visitor Guide",
      kind: "Functional text · 10.RI",
      blurb: "Rules, times, and tickets for a lantern-lit walk through an imagined limestone cave.",
      level: 1,
      passage:
        "<p><strong>Echo Ridge Caverns: Lantern Tour Visitor Guide</strong></p>" +
        "<p><strong>About the Tour.</strong> " + N(1) + "The Lantern Tour is a ninety-minute guided walk through the Upper Gallery of Echo Ridge Caverns, a limestone cave system that has been open to the public for more than seventy years. " +
        N(2) + "Unlike the daytime Electric Tour, the Lantern Tour uses no overhead lighting; each visitor carries a battery-powered lantern, and guides use them to show the cave as early explorers would have seen it. " +
        N(3) + "The route covers about three-quarters of a mile and includes 212 steps, some of them steep and wet.</p>" +
        "<p><strong>Before You Arrive.</strong> " + N(4) + "Tours leave from the Visitor Center at 10:00 a.m., 1:00 p.m., and 4:00 p.m. " +
        N(5) + "Please check in at least twenty minutes before your tour time to receive your lantern and safety briefing. " +
        N(6) + "Guests who arrive after the group has entered the cave cannot join late, because the entrance gate is locked behind each tour to protect the bat colony; late guests may transfer to a later tour if space is available.</p>" +
        "<p><strong>What to Wear.</strong> " + N(7) + "The cave stays about 54 degrees Fahrenheit all year, whatever the weather outside, so bring a light jacket even in summer. " +
        N(8) + "Wear closed-toe shoes with good grip; sandals and heels are not permitted on the tour. " +
        N(9) + "Large bags, strollers, food, and drinks other than water must be left in the free lockers at the Visitor Center.</p>" +
        "<p><strong>Protecting the Cave.</strong> " + N(10) + "Please do not touch any cave formation, even ones that look dry. " +
        N(11) + "Oils from skin can stop a formation from growing, and damage cannot be repaired. " +
        N(12) + "Stay on the marked path at all times. " +
        N(13) + "If you have visited any other cave in the past year, tell staff at check-in: shoes and clothing worn in other caves can carry a fungus that is deadly to bats, and staff will provide boot covers.</p>" +
        "<p><strong>Accessibility and Safety.</strong> " + N(14) + "Because of the steps and uneven floor, the Lantern Tour is not wheelchair accessible. " +
        N(15) + "Visitors who need a step-free route may choose the Electric Tour's Lower Room, which is reached by elevator. " +
        N(16) + "Children under six are not permitted on the Lantern Tour; children six through twelve must hold an adult's hand on all stairways. " +
        N(17) + "If you feel unwell during the tour, tell your guide immediately; every guide carries a radio and a first-aid kit.</p>" +
        "<p><strong>Tickets.</strong> " + N(18) + "Adults are $24, children six through twelve are $15, and groups of ten or more receive a 10 percent discount if booked online at least one week ahead. " +
        N(19) + "Tours are limited to sixteen people. " +
        N(20) + "Tickets are nonrefundable, but they may be exchanged for another date up to 24 hours before the tour.</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The Echo Ridge visitor guide is written mainly for —",
          choices: [
            { letter: "A", text: "scientists who study bat colonies" },
            { letter: "B", text: "people planning to take the Lantern Tour" },
            { letter: "C", text: "guides who are training to lead tours" },
            { letter: "D", text: "students writing reports about limestone" }
          ],
          correct: "B"
        },
        {
          id: "late",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the guide, why can't late guests join a Lantern Tour after it has entered the cave?",
          choices: [
            { letter: "A", text: "The lanterns have all been handed out." },
            { letter: "B", text: "The guides cannot use radios underground." },
            { letter: "C", text: "The steps are too steep to climb alone." },
            { letter: "D", text: "The gate is locked to protect the bats." }
          ],
          correct: "D"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The bold headings in the Echo Ridge guide help a reader mainly by —",
          choices: [
            { letter: "A", text: "grouping information so it is easy to find" },
            { letter: "B", text: "listing the rooms in the order they are visited" },
            { letter: "C", text: "showing which rules matter least" },
            { letter: "D", text: "explaining how the cave was formed" }
          ],
          correct: "A"
        },
        {
          id: "family",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "A family of two adults, a ten-year-old, and a four-year-old wants to take the Lantern Tour. Based on sentences 16 and 18 together, what problem will they face?",
          choices: [
            { letter: "A", text: "They must book online at least a week ahead." },
            { letter: "B", text: "Their tickets will cost more than $100 in all." },
            { letter: "C", text: "The four-year-old is too young for this tour." },
            { letter: "D", text: "The ten-year-old must wait in the Visitor Center." }
          ],
          correct: "C"
        },
        {
          id: "reason",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The guide explains in sentence 11 why visitors should not touch formations mainly to —",
          choices: [
            { letter: "A", text: "show that the formations are still wet" },
            { letter: "B", text: "warn that visitors may be fined" },
            { letter: "C", text: "give a reason that makes the rule convincing" },
            { letter: "D", text: "suggest that some formations may be touched" }
          ],
          correct: "C"
        },
        {
          id: "nonrefundable",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word nonrefundable in sentence 20 is built from non- (not), refund (give money back), and -able (can be). A nonrefundable ticket is one that —",
          choices: [
            { letter: "A", text: "can be used by any number of people" },
            { letter: "B", text: "cannot be returned for your money" },
            { letter: "C", text: "must be bought at the Visitor Center" },
            { letter: "D", text: "costs less when bought in a group" }
          ],
          correct: "B"
        },
        {
          id: "protect",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the rules under \"Protecting the Cave\"?",
          choices: [
            { letter: "A", text: "Visitors may explore freely if they wear boot covers." },
            { letter: "B", text: "Only guides may carry lanterns near the formations." },
            { letter: "C", text: "Visitors who have seen other caves cannot take the tour." },
            { letter: "D", text: "Visitors must avoid contact and contamination." }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The guide mentions the Electric Tour in sentences 2 and 15 mainly to —",
          choices: [
            { letter: "A", text: "help visitors choose the tour that fits their needs" },
            { letter: "B", text: "persuade visitors that the Electric Tour is better" },
            { letter: "C", text: "explain how electricity first came to the cave" },
            { letter: "D", text: "list the hours when the Electric Tour runs" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────── 13 · Argument (level 3) · sports science ───────── */
    {
      id: "g10-ri-c84-sensor-vests",
      family: "G10",
      title: "Before We Strap Sensors on Every Athlete",
      kind: "Argument · 10.RI",
      blurb: "A student runner argues for a careful trial of wearable trackers before a full purchase.",
      level: 3,
      passage:
        "<p>" + N(1) + "Next month, the Harmon Ridge school board will vote on whether to spend $38,000 on wearable sensors for every varsity athlete: vests with GPS units and heart-rate monitors that track how far, how fast, and how hard each player works in every practice. " +
        N(2) + "Supporters say the data will prevent injuries and make our teams more competitive. " +
        N(3) + "As a cross-country runner who has trained with a heart-rate monitor for two years, I believe the technology can help, but the board should approve a one-season pilot, not a full purchase.</p>" +
        "<p>" + N(4) + "The case for the sensors is real. " +
        N(5) + "Sports scientists have found that sudden spikes in training load, such as a week in which an athlete runs far more than usual, are linked to higher injury risk. " +
        N(6) + "A sensor can flag those spikes before a coach notices a limp. " +
        N(7) + "On my own team, my monitor showed that my \"easy\" runs were not easy at all; my heart rate was nearly as high as on race days, and when I slowed down on those runs, my race times actually improved.</p>" +
        "<p>" + N(8) + "But data is only as good as the people reading it. " +
        N(9) + "A heart-rate graph does not explain itself, and our coaches, most of whom are teachers coaching after a full school day, have not been offered any training in how to interpret one. " +
        N(10) + "A number without context can mislead: a high reading might mean an athlete is overworking, or that she slept badly, or simply that it is ninety degrees outside. " +
        N(11) + "Without training, coaches may either ignore the data, wasting the money, or trust it too much, benching athletes on the basis of a figure they do not fully understand.</p>" +
        "<p>" + N(12) + "There is also the question of who owns the information. " +
        N(13) + "The proposal does not say who can see an athlete's data, how long it will be stored, or whether it could be shared with college recruiters or the company that makes the vests. " +
        N(14) + "Heart-rate and sleep patterns are health information, and students and families deserve clear answers before they are asked to wear the devices every day.</p>" +
        "<p>" + N(15) + "Some board members argue that a pilot would delay the benefits and that rival schools already use sensors. " +
        N(16) + "That is true, but a rushed rollout that coaches cannot use and families do not trust would leave us worse off than a slower one that works. " +
        N(17) + "A one-season pilot with two teams would cost about a quarter of the full price, give coaches time to train, and let the district write a data policy with input from students. " +
        N(18) + "If the pilot shows clear results, the board can expand it next year with evidence instead of hope. " +
        N(19) + "Our athletes deserve the best tools, and they also deserve to have those tools used well.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which statement best expresses the central claim of the student's argument about sensor vests?",
          choices: [
            { letter: "A", text: "Wearable sensors are useless for high school athletes." },
            { letter: "B", text: "Coaches should be replaced by trained sports scientists." },
            { letter: "C", text: "The board should test the sensors before buying them all." },
            { letter: "D", text: "Rival schools have unfair advantages in technology." }
          ],
          correct: "C"
        },
        {
          id: "experience",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence gives evidence from the author's own training that monitoring can improve performance?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 15 and 16 of the sensor-vest argument are organized as —",
          choices: [
            { letter: "A", text: "a list of costs followed by a total" },
            { letter: "B", text: "a personal story followed by a lesson" },
            { letter: "C", text: "a question followed by several answers" },
            { letter: "D", text: "an opposing view followed by a response" }
          ],
          correct: "D"
        },
        {
          id: "context",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "The author lists several possible causes of a high reading in sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "prove that heart-rate monitors are often broken" },
            { letter: "B", text: "show that one number can have many explanations" },
            { letter: "C", text: "suggest that athletes should practice indoors" },
            { letter: "D", text: "blame coaches for overworking their players" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author's tone toward the sensor technology itself is best described as —",
          choices: [
            { letter: "A", text: "cautiously supportive" },
            { letter: "B", text: "openly hostile" },
            { letter: "C", text: "completely neutral" },
            { letter: "D", text: "wildly enthusiastic" }
          ],
          correct: "A"
        },
        {
          id: "hope",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The phrase with evidence instead of hope in sentence 18 mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the board has been too pessimistic about sports" },
            { letter: "B", text: "athletes should rely on hope to win more games" },
            { letter: "C", text: "the pilot will certainly fail to show any results" },
            { letter: "D", text: "spending decisions should rest on tested results" }
          ],
          correct: "D"
        },
        {
          id: "rushed",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author writes rushed rollout rather than quick rollout in sentence 16. Compared with quick, rushed suggests a process that is —",
          choices: [
            { letter: "A", text: "efficient and well planned" },
            { letter: "B", text: "hurried and careless" },
            { letter: "C", text: "slow and expensive" },
            { letter: "D", text: "popular with families" }
          ],
          correct: "B"
        },
        {
          id: "except",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "All of the following are concerns the author raises about the sensor proposal EXCEPT —",
          choices: [
            { letter: "A", text: "coaches have no training in reading the data" },
            { letter: "B", text: "it is unclear who may see athletes' information" },
            { letter: "C", text: "the vests may be too heavy to run in comfortably" },
            { letter: "D", text: "a full purchase costs far more than a small trial" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
