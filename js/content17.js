/* SOL Labyrinth — New Jersey grade 5 (NJSLA-ELA) paired-text packs, strand DSR.
 * Eight pairs: two stories with a shared theme, story + poem, two articles with
 * different views, article + diary entry. Original text only. Loaded after
 * content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────── 1. Two stories, same theme (level 1) ───────────────── */
    {
      id: "nj5-dsr-try-again",
      family: "NJ5",
      title: "Try Again: Two Stories",
      kind: "Paired texts · RL/RI.5",
      blurb: "A crooked birdhouse and a serve into the net — two kids decide what to do next.",
      level: 1,
      passage:
        "<p><strong>Text 1 — The Crooked Birdhouse</strong></p>" +
        "<p>" + N(1) + "Nia wanted to build a birdhouse for the spring fair. " +
        N(2) + "She found a plan in a library book and cut six pieces of wood in her uncle's garage. " +
        N(3) + "When she nailed them together, the roof leaned to one side like a hat in the wind. " +
        N(4) + "Nia frowned and set the crooked house on the workbench. " +
        N(5) + "\"It looks like it is falling asleep,\" her little brother said. " +
        N(6) + "Nia wanted to quit, but she measured the pieces again. " +
        N(7) + "Two of the walls were a full inch too short. " +
        N(8) + "She cut new ones, sanded the edges, and nailed the roof on straight. " +
        N(9) + "The second birdhouse stood tall and square. " +
        N(10) + "On the day of the fair, a judge asked what she had learned. " +
        N(11) + "\"Measure twice,\" Nia said, \"and do not stop at the first crooked try.\" " +
        N(12) + "A week later, a wren moved in.</p>" +
        "<p><strong>Text 2 — Second Serve</strong></p>" +
        "<p>" + N(13) + "Jonah's serve hit the net again. " +
        N(14) + "He had been practicing on the park court all afternoon, and the ball had gone over exactly three times. " +
        N(15) + "He dropped his racket and sat down on the bench beside his grandmother. " +
        N(16) + "\"I am done,\" he said. " +
        N(17) + "\"The net is too tall.\" " +
        N(18) + "His grandmother laughed softly. " +
        N(19) + "\"When I was learning to ride a bike, I fell into the same hedge four days in a row,\" she said. " +
        N(20) + "\"On the fifth day, I finally looked at the road instead of the hedge.\" " +
        N(21) + "Jonah thought about that. " +
        N(22) + "He picked up his racket, tossed the ball a little higher, and looked over the net instead of at it. " +
        N(23) + "The serve sailed over and landed in the box. " +
        N(24) + "It was only one serve, but it felt like a door opening.</p>",
      claims: [
        {
          id: "theme1",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "Which statement best expresses a theme of \"The Crooked Birdhouse\"?",
          choices: [
            { letter: "A", text: "Little brothers should stay out of the garage." },
            { letter: "B", text: "A first mistake does not have to end a project." },
            { letter: "C", text: "Birds like houses that lean to one side." },
            { letter: "D", text: "Library books always have the best plans." }
          ],
          correct: "B",
          partB: "ev1"
        },
        {
          id: "ev1",
          sol: "RL.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which sentence from \"The Crooked Birdhouse\" best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "theme2",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "What lesson does Jonah learn in \"Second Serve\"?",
          choices: [
            { letter: "A", text: "Changing where you look can change what you do." },
            { letter: "B", text: "Tennis is easier to learn than riding a bike." },
            { letter: "C", text: "Practicing all afternoon is a waste of time." },
            { letter: "D", text: "Grandparents should not give advice about sports." }
          ],
          correct: "A"
        },
        {
          id: "compare",
          sol: "RL.CT.5.8",
          strand: "DSR",
          stem: "How are Nia and Jonah alike?",
          choices: [
            { letter: "A", text: "Both build something out of wood." },
            { letter: "B", text: "Both get help from a younger brother." },
            { letter: "C", text: "Both enter their work in a spring fair." },
            { letter: "D", text: "Both want to give up but decide to try again." }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "RL.CT.5.8",
          strand: "DSR",
          stem: "Select TWO ways \"The Crooked Birdhouse\" and \"Second Serve\" are different.",
          choices: [
            { letter: "A", text: "Only Text 1 shows a character fixing a measuring mistake." },
            { letter: "B", text: "Only Text 1 has a character who wants to quit." },
            { letter: "C", text: "Only Text 2 includes advice from a grandparent." },
            { letter: "D", text: "Only Text 2 ends with the character succeeding." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 23, the word sailed most nearly means —",
          choices: [
            { letter: "A", text: "floated on the water" },
            { letter: "B", text: "moved smoothly through the air" },
            { letter: "C", text: "dropped straight down" },
            { letter: "D", text: "spun around in a circle" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────── 2. Story + poem, same topic (level 1) ───────────────── */
    {
      id: "nj5-dsr-storm-night",
      family: "NJ5",
      title: "Storm Night: Story + Poem",
      kind: "Paired texts · RL/RI.5",
      blurb: "A family plays cards in the dark while a poem listens to the same thunder.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Cards by Flashlight</strong></p>" +
        "<p>" + N(1) + "The lights went out at 8:15, right in the middle of Malik's favorite show. " +
        N(2) + "Rain hammered the windows, and thunder rolled over the roof like a bowling ball. " +
        N(3) + "His dad found the flashlight in the kitchen drawer. " +
        N(4) + "His mom found the deck of cards. " +
        N(5) + "\"No screen tonight,\" she said. " +
        N(6) + "\"We are going old-school.\" " +
        N(7) + "They sat on the living room rug and played Crazy Eights by a circle of yellow light. " +
        N(8) + "Malik's little sister kept hiding her cards under her knees. " +
        N(9) + "Every time lightning flashed, the whole room turned white for one second, and everybody shouted \"Whoa!\" " +
        N(10) + "Malik lost three games in a row and did not mind at all. " +
        N(11) + "When the lights blinked back on at 9:30, nobody moved to turn the TV on. " +
        N(12) + "\"One more game,\" Malik said, and his dad clicked the flashlight off.</p>" +
        "<p><strong>Text 2 — Storm Song</strong></p>" +
        "<p class=\"poem\">" +
        L(13) + "The sky is a drum tonight, and someone keeps pounding,<br>" +
        L(14) + "boom on the rooftop, boom down the street.<br>" +
        L(15) + "Rain races the window in long silver stripes,<br>" +
        L(16) + "and the maple tree waves like it wants to come in.<br>" +
        L(17) + "I press my face to the cold glass and count:<br>" +
        L(18) + "one Mississippi, two Mississippi, three —<br>" +
        L(19) + "then the whole yard jumps white and disappears.<br>" +
        L(20) + "The dog has gone under my bed like a shadow.<br>" +
        L(21) + "Mom says a storm is just the clouds clearing their throats,<br>" +
        L(22) + "so I whisper, \"Nice to meet you,\" to the thunder.<br>" +
        L(23) + "By ten the drum grows tired and slow,<br>" +
        L(24) + "the rivers on the glass become a drip, a drop,<br>" +
        L(25) + "and the yard comes back, still there, still ours,<br>" +
        L(26) + "shining wet under one brave streetlight." +
        "</p>",
      claims: [
        {
          id: "theme1",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "Which statement best expresses a theme of \"Cards by Flashlight\"?",
          choices: [
            { letter: "A", text: "Storms are dangerous and should be feared." },
            { letter: "B", text: "Losing a game always ruins the evening." },
            { letter: "C", text: "Time together can matter more than a screen." },
            { letter: "D", text: "Flashlights belong in the kitchen drawer." }
          ],
          correct: "C",
          partB: "ev1"
        },
        {
          id: "ev1",
          sol: "RL.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which sentence from \"Cards by Flashlight\" best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "D"
        },
        {
          id: "theme2",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "What is the main idea of \"Storm Song\"?",
          choices: [
            { letter: "A", text: "A storm can be loud and scary, but it does not last forever." },
            { letter: "B", text: "Dogs are more afraid of storms than people are." },
            { letter: "C", text: "Counting after lightning tells how far away a storm is." },
            { letter: "D", text: "The speaker's mother does not understand storms." }
          ],
          correct: "A"
        },
        {
          id: "compare",
          sol: "RL.CT.5.8",
          strand: "DSR",
          stem: "Which idea is found in BOTH \"Cards by Flashlight\" and \"Storm Song\"?",
          choices: [
            { letter: "A", text: "A pet hides during the storm." },
            { letter: "B", text: "The storm ends, and things return to normal." },
            { letter: "C", text: "A family plays a game together." },
            { letter: "D", text: "Someone counts the seconds after lightning." }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "RL.CT.5.8",
          strand: "DSR",
          stem: "Select TWO ways the poem \"Storm Song\" is different from the story.",
          choices: [
            { letter: "A", text: "Only the poem is told by an \"I\" speaker." },
            { letter: "B", text: "Only the poem describes the storm from outside the house." },
            { letter: "C", text: "Only the poem is arranged in short lines instead of paragraphs." },
            { letter: "D", text: "Only the poem includes a parent who speaks." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 2, the word hammered most nearly means —",
          choices: [
            { letter: "A", text: "built with a tool" },
            { letter: "B", text: "hit hard again and again" },
            { letter: "C", text: "leaked slowly through" },
            { letter: "D", text: "tapped one time" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────── 3. Two articles, different views (level 2) ───────────────── */
    {
      id: "nj5-dsr-birch-lot",
      family: "NJ5",
      title: "Birch Street Lot: Two Views",
      kind: "Paired texts · RL/RI.5",
      blurb: "Skate park or community garden? Two student writers argue over one empty lot.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Give Us a Skate Park</strong></p>" +
        "<p>" + N(1) + "The empty lot on Birch Street has been a patch of weeds for three years. " +
        N(2) + "Our town should turn it into a skate park. " +
        N(3) + "Right now, kids who skate use the parking lot behind the grocery store, where cars back out without looking. " +
        N(4) + "A skate park would give them a safe, smooth place to practice. " +
        N(5) + "It would also be cheap to build. " +
        N(6) + "The town already owns the land, and a basic park with three ramps and a rail costs less than a single new stoplight. " +
        N(7) + "Some people say a skate park would be noisy. " +
        N(8) + "But the lot sits between a car wash and a train track. " +
        N(9) + "Noise is nothing new on Birch Street. " +
        N(10) + "Skaters have waited long enough. " +
        N(11) + "Let's build the park this summer.</p>" +
        "<p><strong>Text 2 — Plant a Garden Instead</strong></p>" +
        "<p>" + N(12) + "A skate park sounds fun, but the Birch Street lot should become a community garden. " +
        N(13) + "Skaters are a small group. " +
        N(14) + "A garden would serve everyone. " +
        N(15) + "Families could rent small plots to grow tomatoes, beans, and peppers. " +
        N(16) + "Seniors from the apartment building next door could sit on benches under shade trees. " +
        N(17) + "The school could use a corner for science lessons. " +
        N(18) + "Gardens also help the whole block. " +
        N(19) + "Plants soak up rainwater, so the street would flood less in spring storms. " +
        N(20) + "The garden would cost more at first because the soil needs testing and a fence. " +
        N(21) + "But a garden club has already offered to raise the money and pull the weeds. " +
        N(22) + "A skate park is used by a few kids for a few years. " +
        N(23) + "A garden can feed a neighborhood for decades.</p>",
      claims: [
        {
          id: "main1",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "What is the main idea of \"Give Us a Skate Park\"?",
          choices: [
            { letter: "A", text: "Kids should stop skating in the grocery store parking lot." },
            { letter: "B", text: "Birch Street is already the noisiest street in town." },
            { letter: "C", text: "The empty lot would make a safe and low-cost skate park." },
            { letter: "D", text: "The town should fix the stoplight before building anything." }
          ],
          correct: "C"
        },
        {
          id: "main2",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "What is the main idea of \"Plant a Garden Instead\"?",
          choices: [
            { letter: "A", text: "Skaters should be given their own corner of the garden." },
            { letter: "B", text: "The garden club has already raised all of the money." },
            { letter: "C", text: "Tomatoes, beans, and peppers grow well on Birch Street." },
            { letter: "D", text: "A garden would help more people for more years than a skate park." }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "RI.CT.5.8",
          strand: "DSR",
          stem: "Which statement best describes how the two writers differ?",
          choices: [
            { letter: "A", text: "Text 1 wants a cheap plan, while Text 2 says cost does not matter." },
            { letter: "B", text: "Text 1 focuses on skaters, while Text 2 focuses on the whole neighborhood." },
            { letter: "C", text: "Text 1 says the lot is unsafe, while Text 2 says it is safe." },
            { letter: "D", text: "Text 1 wants to wait a year, while Text 2 wants to build this summer." }
          ],
          correct: "B",
          partB: "ev"
        },
        {
          id: "ev",
          sol: "RI.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which sentence from \"Plant a Garden Instead\" best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 14" },
            { letter: "B", text: "Sentence 19" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "RI.CT.5.8",
          strand: "DSR",
          stem: "Select TWO ideas that BOTH writers include in their articles.",
          choices: [
            { letter: "A", text: "Both writers bring up the cost of their plan." },
            { letter: "B", text: "Both writers say the lot should stay empty for now." },
            { letter: "C", text: "Both writers answer an argument against their plan." },
            { letter: "D", text: "Both writers want the school to use the lot for lessons." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 15, the word plots most nearly means —",
          choices: [
            { letter: "A", text: "plans for a story" },
            { letter: "B", text: "small pieces of land" },
            { letter: "C", text: "secret schemes" },
            { letter: "D", text: "rows of benches" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────── 4. Article + diary entry (level 2) ───────────────── */
    {
      id: "nj5-dsr-monarchs",
      family: "NJ5",
      title: "Monarchs: Article + Diary",
      kind: "Paired texts · RL/RI.5",
      blurb: "An article on the monarch migration and a diary about one caterpillar named Pepper.",
      level: 2,
      passage:
        "<p><strong>Text 1 — A Butterfly's Long Trip</strong></p>" +
        "<p>" + N(1) + "Every fall, millions of monarch butterflies leave the northern United States and Canada. " +
        N(2) + "They fly south for up to 3,000 miles to spend the winter in the mountains of central Mexico. " +
        N(3) + "No single butterfly makes the trip twice. " +
        N(4) + "The monarchs that fly south in October are the great-grandchildren of the ones that flew north in the spring. " +
        N(5) + "Scientists are still not sure how the butterflies find a place they have never seen. " +
        N(6) + "They may use the sun as a compass. " +
        N(7) + "A monarch begins life as a tiny egg on a milkweed leaf. " +
        N(8) + "The caterpillar eats only milkweed, which makes it taste bad to birds. " +
        N(9) + "After about two weeks, it forms a green case called a chrysalis. " +
        N(10) + "Ten days later, a butterfly climbs out. " +
        N(11) + "People can help monarchs by planting milkweed in yards and school gardens.</p>" +
        "<p><strong>Text 2 — Caterpillar Diary</strong></p>" +
        "<p><strong>September 3.</strong> " + N(12) + "Aunt Rosa gave me a caterpillar in a jar today, with a stack of milkweed leaves for its lunch. " +
        N(13) + "It is striped yellow, black, and white, like a tiny referee. " +
        N(14) + "I named it Pepper. " +
        N(15) + "It ate two whole leaves before dinner.</p>" +
        "<p><strong>September 6.</strong> " + N(16) + "Pepper is twice as big. " +
        N(17) + "I have to pick fresh milkweed every morning from the ditch behind the school. " +
        N(18) + "Aunt Rosa says the leaves are the only food it will accept.</p>" +
        "<p><strong>September 10.</strong> " + N(19) + "Pepper hung upside down from the lid and turned into a green jewel with gold dots. " +
        N(20) + "I did not think a caterpillar could do that.</p>" +
        "<p><strong>September 21.</strong> " + N(21) + "This morning the case was clear, and by lunch a butterfly was drying its wings on the screen. " +
        N(22) + "We let it go in the yard. " +
        N(23) + "Aunt Rosa said it might fly all the way to Mexico. " +
        N(24) + "I hope Pepper's great-grandchildren come back in the spring.</p>",
      claims: [
        {
          id: "main1",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "What is the main idea of \"A Butterfly's Long Trip\"?",
          choices: [
            { letter: "A", text: "Monarchs make a long journey that takes more than one generation." },
            { letter: "B", text: "Birds stay away from monarchs because of the milkweed they eat." },
            { letter: "C", text: "Scientists have proven how monarchs find their way to Mexico." },
            { letter: "D", text: "Milkweed grows best in yards and school gardens." }
          ],
          correct: "A"
        },
        {
          id: "main2",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "Which statement best summarizes \"Caterpillar Diary\"?",
          choices: [
            { letter: "A", text: "The writer learns that caterpillars will eat almost any leaf." },
            { letter: "B", text: "The writer raises a caterpillar, watches it change, and sets it free." },
            { letter: "C", text: "The writer's aunt shows how to catch butterflies in a jar." },
            { letter: "D", text: "The writer finds a butterfly in the ditch behind the school." }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "RI.CT.5.8",
          strand: "DSR",
          stem: "Which fact from Text 1 does the writer of Text 2 see happen with Pepper?",
          choices: [
            { letter: "A", text: "Monarchs fly up to 3,000 miles to Mexico." },
            { letter: "B", text: "Monarchs use the sun as a compass." },
            { letter: "C", text: "Birds will not eat monarch caterpillars." },
            { letter: "D", text: "A caterpillar forms a green case before it becomes a butterfly." }
          ],
          correct: "D",
          partB: "ev"
        },
        {
          id: "ev",
          sol: "RL.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which sentence from \"Caterpillar Diary\" best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "RL.CT.5.8",
          strand: "DSR",
          stem: "Select TWO ways \"Caterpillar Diary\" is different from \"A Butterfly's Long Trip\".",
          choices: [
            { letter: "A", text: "Only Text 2 gives the number of miles monarchs travel." },
            { letter: "B", text: "Only Text 2 is written in first person with dates." },
            { letter: "C", text: "Only Text 2 explains why milkweed protects monarchs from birds." },
            { letter: "D", text: "Only Text 2 follows a single caterpillar over several weeks." }
          ],
          correct: ["B", "D"]
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 9, the word case most nearly means —",
          choices: [
            { letter: "A", text: "a covering or shell" },
            { letter: "B", text: "a problem for a detective" },
            { letter: "C", text: "an example of something" },
            { letter: "D", text: "a set of twelve" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────── 5. Two stories, same theme (level 2) ───────────────── */
    {
      id: "nj5-dsr-first-hellos",
      family: "NJ5",
      title: "First Hellos: Two Stories",
      kind: "Paired texts · RL/RI.5",
      blurb: "A milk carton and a tennis ball start two friendships.",
      level: 2,
      passage:
        "<p><strong>Text 1 — The Empty Seat</strong></p>" +
        "<p>" + N(1) + "Yusuf had been at Pine Hill School for three days, and he still ate lunch by the window alone. " +
        N(2) + "He did not mind the window. " +
        N(3) + "He minded the noise from the tables behind him, where everyone seemed to know everyone else. " +
        N(4) + "On Thursday, a girl with a purple cast on her arm set her tray down across from him. " +
        N(5) + "\"I can't open this,\" she said, holding out a milk carton. " +
        N(6) + "Yusuf opened it. " +
        N(7) + "\"I'm Dani,\" she said. " +
        N(8) + "\"I broke my wrist falling off a scooter, which is a boring story, so I tell people it was a shark.\" " +
        N(9) + "Yusuf laughed before he could stop himself. " +
        N(10) + "The next day Dani brought two friends, and the day after that the window table was full. " +
        N(11) + "Yusuf never did find out if the cast really needed help.</p>" +
        "<p><strong>Text 2 — Over the Fence</strong></p>" +
        "<p>" + N(12) + "The moving truck on Ash Lane was gone by noon, but the boy next door stayed inside. " +
        N(13) + "Teo watched from his porch. " +
        N(14) + "He was not good at first hellos. " +
        N(15) + "He practiced one in his head, and it came out wrong every time. " +
        N(16) + "Then a tennis ball bounced over the fence and rolled to his feet. " +
        N(17) + "A dog barked on the other side, and a voice said, \"Sorry! Biscuit thinks every fence is a game.\" " +
        N(18) + "Teo picked up the ball. " +
        N(19) + "He could toss it back over and go inside. " +
        N(20) + "Instead, he walked to the gate. " +
        N(21) + "\"Does Biscuit like being chased?\" he asked. " +
        N(22) + "The boy grinned and held the gate open. " +
        N(23) + "By dinner, Teo had grass stains on both knees and knew the boy's name, his dog's birthday, and where the loose board in the fence was.</p>",
      claims: [
        {
          id: "theme1",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "Which statement best expresses a theme of \"The Empty Seat\"?",
          choices: [
            { letter: "A", text: "A small kindness can open the door to friendship." },
            { letter: "B", text: "New students should sit by the window." },
            { letter: "C", text: "It is wrong to tell stories that are not true." },
            { letter: "D", text: "Lunch is the loudest part of the school day." }
          ],
          correct: "A"
        },
        {
          id: "theme2",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "Which statement best expresses a theme of \"Over the Fence\"?",
          choices: [
            { letter: "A", text: "Dogs make the best neighbors." },
            { letter: "B", text: "Taking a small chance can be better than playing it safe." },
            { letter: "C", text: "Moving to a new house is always hard." },
            { letter: "D", text: "Practicing a speech makes it come out right." }
          ],
          correct: "B",
          partB: "ev2"
        },
        {
          id: "ev2",
          sol: "RL.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which sentence from \"Over the Fence\" best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "C"
        },
        {
          id: "compare",
          sol: "RL.CT.5.8",
          strand: "DSR",
          stem: "How is Dani in Text 1 different from Teo in Text 2?",
          choices: [
            { letter: "A", text: "Dani is the new kid, while Teo has lived on his street for years." },
            { letter: "B", text: "Dani stays alone at lunch, while Teo plays with a dog." },
            { letter: "C", text: "Dani tells the truth about her cast, while Teo tells a joke." },
            { letter: "D", text: "Dani makes the first move easily, while Teo has to push himself." }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "RL.CT.5.8",
          strand: "DSR",
          stem: "Select TWO ways \"The Empty Seat\" and \"Over the Fence\" are alike.",
          choices: [
            { letter: "A", text: "Both stories end with a character having more friends than before." },
            { letter: "B", text: "Both stories take place at a school." },
            { letter: "C", text: "In both stories, a small object helps two characters start talking." },
            { letter: "D", text: "In both stories, a character gets hurt in an accident." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 3, the word minded most nearly means —",
          choices: [
            { letter: "A", text: "remembered" },
            { letter: "B", text: "was bothered by" },
            { letter: "C", text: "took care of" },
            { letter: "D", text: "obeyed" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────── 6. Story + poem, same topic (level 3) ───────────────── */
    {
      id: "nj5-dsr-tree-rings",
      family: "NJ5",
      title: "Tree Rings: Story + Poem",
      kind: "Paired texts · RL/RI.5",
      blurb: "A tree comes down, and two kids read the years written in its stump.",
      level: 3,
      passage:
        "<p><strong>Text 1 — What the Stump Knew</strong></p>" +
        "<p>" + N(1) + "The sycamore on the corner had been dying for two summers, though Priya had refused to see it. " +
        N(2) + "The crew arrived on a Saturday with a truck and an orange saw. " +
        N(3) + "By noon, the tree that had shaded her bus stop since kindergarten was a pile of logs and a stump as wide as a table. " +
        N(4) + "One of the workers noticed her standing there with her arms crossed. " +
        N(5) + "\"Want to see something?\" he asked, and he brushed the sawdust off the cut. " +
        N(6) + "Rings circled the wood, thin and thick, pale and dark. " +
        N(7) + "\"Each one is a year,\" he said. " +
        N(8) + "\"Thin rings are dry years, and thick rings had plenty of rain.\" " +
        N(9) + "Priya counted eighty-one. " +
        N(10) + "She found the ring for the year she was born, a wide one, and pressed her thumb against it. " +
        N(11) + "The tree was gone, but it had kept a record of every year, and now, in a way, so would she.</p>" +
        "<p><strong>Text 2 — Rings</strong></p>" +
        "<p class=\"poem\">" +
        L(12) + "They took the old oak down on Tuesday,<br>" +
        L(13) + "and now there is a stump where the shade used to be.<br>" +
        L(14) + "I sat on it after school, still warm from the saw,<br>" +
        L(15) + "and found a whole calendar written in circles.<br>" +
        L(16) + "Here is the year the creek flooded, a fat wet ring.<br>" +
        L(17) + "Here is the year Grandpa was born, halfway in.<br>" +
        L(18) + "Here, near the bark, is last year, the year of the drought,<br>" +
        L(19) + "so thin I almost missed it, the way the tree almost did.<br>" +
        L(20) + "Grandpa says a tree writes its life from the inside out<br>" +
        L(21) + "and never gets to read it.<br>" +
        L(22) + "So I read it for the oak, ring by ring, out loud,<br>" +
        L(23) + "the flood and Grandpa and the thin, tired edge,<br>" +
        L(24) + "until the streetlight came on and my mother called,<br>" +
        L(25) + "and I walked home with eighty years on my fingers." +
        "</p>",
      claims: [
        {
          id: "theme1",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "Which statement best expresses a theme of \"What the Stump Knew\"?",
          choices: [
            { letter: "A", text: "Trees should never be cut down, even when they are sick." },
            { letter: "B", text: "Losing something can still leave behind something worth keeping." },
            { letter: "C", text: "Workers who cut trees know more about nature than children do." },
            { letter: "D", text: "Dry years are harder on trees than wet years." }
          ],
          correct: "B",
          partB: "ev1"
        },
        {
          id: "ev1",
          sol: "RL.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which sentence from \"What the Stump Knew\" best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "D"
        },
        {
          id: "theme2",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "What is the main idea of \"Rings\"?",
          choices: [
            { letter: "A", text: "The speaker is angry at the people who cut down the oak." },
            { letter: "B", text: "The speaker's grandfather taught the speaker to read tree rings." },
            { letter: "C", text: "The speaker honors the oak by reading the record of its life." },
            { letter: "D", text: "The speaker learns that a drought killed the oak." }
          ],
          correct: "C"
        },
        {
          id: "compare",
          sol: "RL.CT.5.8",
          strand: "DSR",
          stem: "Which statement best describes a difference in how the two texts tell about the rings?",
          choices: [
            { letter: "A", text: "In Text 1 a worker shows Priya the rings, but in Text 2 the speaker finds them alone." },
            { letter: "B", text: "In Text 1 the rings are counted, but in Text 2 they are never mentioned." },
            { letter: "C", text: "In Text 1 the tree is an oak, but in Text 2 it is a sycamore." },
            { letter: "D", text: "In Text 1 the rings show wet and dry years, but in Text 2 they show only age." }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "RL.CT.5.8",
          strand: "DSR",
          stem: "Select TWO ideas that are found in BOTH \"What the Stump Knew\" and \"Rings\".",
          choices: [
            { letter: "A", text: "A thin ring stands for a year with little rain." },
            { letter: "B", text: "The tree was cut down because a storm knocked it over." },
            { letter: "C", text: "A person finds the ring for the year of their own birth." },
            { letter: "D", text: "The character carries the memory of the tree away at the end." }
          ],
          correct: ["A", "D"]
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 11, the word record most nearly means —",
          choices: [
            { letter: "A", text: "a music album" },
            { letter: "B", text: "the fastest time ever" },
            { letter: "C", text: "a saved account of events" },
            { letter: "D", text: "a circle in the wood" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────── 7. Two articles, different views (level 3) ───────────────── */
    {
      id: "nj5-dsr-library-fines",
      family: "NJ5",
      title: "Library Fines: Two Views",
      kind: "Paired texts · RL/RI.5",
      blurb: "Should the library drop late fees? Two writers disagree — and agree on the goal.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Let the Fines Go</strong></p>" +
        "<p>" + N(1) + "Last year the Maple Falls Library collected $4,200 in late fees. " +
        N(2) + "That sounds like a lot until you learn what those fees cost the library. " +
        N(3) + "A study of libraries in our state found that when fines were dropped, the number of children with active library cards rose by almost a third. " +
        N(4) + "Many families stop visiting after one overdue book because they are embarrassed by a bill. " +
        N(5) + "A fine of ten cents a day means little to some families and a great deal to others. " +
        N(6) + "The library's job is to get books into hands, not to collect quarters. " +
        N(7) + "Libraries that dropped fines report that most books still come back, just a few days later. " +
        N(8) + "A book sitting on a nightstand is not lost. " +
        N(9) + "A reader who stops coming is.</p>" +
        "<p><strong>Text 2 — Keep the Fines, Fix the Rules</strong></p>" +
        "<p>" + N(10) + "Nobody enjoys paying a late fee, but fines are not the villain some people make them out to be. " +
        N(11) + "A due date only means something if there is a reason to meet it. " +
        N(12) + "Without fines, popular books can sit in one home for months while twenty other readers wait. " +
        N(13) + "At my school, the class library dropped its overdue rule in September, and by December half the graphic novels were missing. " +
        N(14) + "The answer is not to erase fines but to make them fair. " +
        N(15) + "Cap them at two dollars. " +
        N(16) + "Let kids pay them off by reading in the library for an hour. " +
        N(17) + "Send a friendly reminder before the due date instead of a bill after it. " +
        N(18) + "Fines can be a small nudge instead of a wall. " +
        N(19) + "The goal is the same one the other side wants: more books in more hands, on time.</p>",
      claims: [
        {
          id: "main1",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "Which statement best expresses the main idea of \"Let the Fines Go\"?",
          choices: [
            { letter: "A", text: "The library should raise its fines to bring in more money." },
            { letter: "B", text: "Fines push readers away, and that costs more than the fees bring in." },
            { letter: "C", text: "Books left on a nightstand always come back within a few days." },
            { letter: "D", text: "Ten cents a day is too small an amount for anyone to notice." }
          ],
          correct: "B"
        },
        {
          id: "main2",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "Which statement best expresses the main idea of \"Keep the Fines, Fix the Rules\"?",
          choices: [
            { letter: "A", text: "Fines should stay, but they should be smaller and kinder." },
            { letter: "B", text: "Graphic novels should not be kept in class libraries." },
            { letter: "C", text: "The other writer is wrong to want more books in more hands." },
            { letter: "D", text: "Friendly reminders should replace due dates completely." }
          ],
          correct: "A"
        },
        {
          id: "compare",
          sol: "RI.CT.5.8",
          strand: "DSR",
          stem: "On which point do the two writers AGREE?",
          choices: [
            { letter: "A", text: "Fines make people embarrassed to visit the library." },
            { letter: "B", text: "Popular books should not sit in one home for months." },
            { letter: "C", text: "The library should help more people read more books." },
            { letter: "D", text: "Late fees should be replaced with reading time." }
          ],
          correct: "C",
          partB: "ev"
        },
        {
          id: "ev",
          sol: "RI.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which pair of sentences best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentences 1 and 10" },
            { letter: "B", text: "Sentences 4 and 13" },
            { letter: "C", text: "Sentences 6 and 19" },
            { letter: "D", text: "Sentences 8 and 16" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "RI.CT.5.8",
          strand: "DSR",
          stem: "Select TWO ways the writer of Text 2 responds to the argument in Text 1.",
          choices: [
            { letter: "A", text: "The writer offers changes that would make fines fairer." },
            { letter: "B", text: "The writer agrees that fines should be dropped completely." },
            { letter: "C", text: "The writer says the study in Text 1 was made up." },
            { letter: "D", text: "The writer gives an example of what happened when a rule was dropped." }
          ],
          correct: ["A", "D"]
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 15, the word cap most nearly means —",
          choices: [
            { letter: "A", text: "cover" },
            { letter: "B", text: "limit" },
            { letter: "C", text: "raise" },
            { letter: "D", text: "collect" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────── 8. Article + diary entry (level 1) ───────────────── */
    {
      id: "nj5-dsr-tide-pools",
      family: "NJ5",
      title: "Tide Pools: Article + Diary",
      kind: "Paired texts · RL/RI.5",
      blurb: "What lives in a tide pool, and what one class saw at Gull Point.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Life in a Tide Pool</strong></p>" +
        "<p>" + N(1) + "A tide pool is a small pocket of ocean water left behind in the rocks when the tide goes out. " +
        N(2) + "Twice a day, the sea rolls in and covers the rocks. " +
        N(3) + "Twice a day, it pulls back and leaves the pools shining in the sun. " +
        N(4) + "The animals that live there must be tough. " +
        N(5) + "They survive crashing waves, hot sun, and hungry gulls. " +
        N(6) + "Sea stars hold onto the rocks with hundreds of tiny tube feet. " +
        N(7) + "Hermit crabs carry empty snail shells on their backs and trade up when they grow. " +
        N(8) + "Sea anemones look like flowers, but they are animals that close up tight when they are touched. " +
        N(9) + "Visitors can help keep tide pools healthy. " +
        N(10) + "Walk only on bare rock, never on the animals. " +
        N(11) + "Look, but do not pull anything off the rocks. " +
        N(12) + "And always put back a creature exactly where you found it.</p>" +
        "<p><strong>Text 2 — Field Trip Diary</strong></p>" +
        "<p><strong>Friday, May 8.</strong> " + N(13) + "Today our class went to Gull Point to see the tide pools. " +
        N(14) + "The bus left at 7:30 because the tide was going to be lowest at nine. " +
        N(15) + "Ms. Ortiz made us walk in a line on the dry rocks, which were slippery and bumpy. " +
        N(16) + "I found a sea star the color of an orange. " +
        N(17) + "It was stuck so hard that I could not lift the edge of one arm. " +
        N(18) + "I did not try very long, because of the rules. " +
        N(19) + "Then Marcus shouted, and everyone ran to see a crab with a shell that was too big for it. " +
        N(20) + "It walked sideways like it was carrying a backpack from a bigger kid. " +
        N(21) + "I touched an anemone with one finger, and it closed up like a fist. " +
        N(22) + "On the bus home, my sneakers were wet and my hands smelled like the sea. " +
        N(23) + "Best trip all year.</p>",
      claims: [
        {
          id: "main1",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "What is the main idea of \"Life in a Tide Pool\"?",
          choices: [
            { letter: "A", text: "Sea stars use hundreds of tube feet to hold on." },
            { letter: "B", text: "Tough animals live in tide pools, and visitors should protect them." },
            { letter: "C", text: "The tide comes in and goes out twice every day." },
            { letter: "D", text: "Hermit crabs trade for bigger shells as they grow." }
          ],
          correct: "B"
        },
        {
          id: "main2",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "Which statement best summarizes \"Field Trip Diary\"?",
          choices: [
            { letter: "A", text: "The writer visits tide pools, sees several animals, and loves the trip." },
            { letter: "B", text: "The writer breaks a rule by pulling a sea star off a rock." },
            { letter: "C", text: "The writer's class gets lost on the slippery rocks." },
            { letter: "D", text: "The writer's sneakers get soaked on the bus ride home." }
          ],
          correct: "A",
          partB: "ev"
        },
        {
          id: "ev",
          sol: "RL.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which sentence from \"Field Trip Diary\" best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 14" },
            { letter: "B", text: "Sentence 18" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "RI.CT.5.8",
          strand: "DSR",
          stem: "Which detail from Text 2 shows the same fact given in sentence 8 of Text 1?",
          choices: [
            { letter: "A", text: "The sea star was the color of an orange." },
            { letter: "B", text: "The crab walked sideways with a big shell." },
            { letter: "C", text: "The anemone closed up like a fist when touched." },
            { letter: "D", text: "The writer's hands smelled like the sea." }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "RI.CT.5.8",
          strand: "DSR",
          stem: "Select TWO ways \"Life in a Tide Pool\" and \"Field Trip Diary\" are alike.",
          choices: [
            { letter: "A", text: "Both texts say the tide is lowest in the morning." },
            { letter: "B", text: "Both texts describe a sea star holding tightly to a rock." },
            { letter: "C", text: "Both texts show that people should be careful with tide pool animals." },
            { letter: "D", text: "Both texts describe the writer's class trip." }
          ],
          correct: ["B", "C"]
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 1, the word pocket most nearly means —",
          choices: [
            { letter: "A", text: "a part of a jacket" },
            { letter: "B", text: "a kind of fish" },
            { letter: "C", text: "a tall wave" },
            { letter: "D", text: "a small space that holds something" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
