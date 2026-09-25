/* SOL Labyrinth — New Jersey grade 5 (NJSLA-ELA) vocabulary-in-context packs.
 * Eight original passages, each with 5–6 bold target words, asking meaning from
 * context, word parts (prefixes, suffixes, Greek and Latin roots), figurative
 * language and shades of meaning. Every pack has one Evidence-Based Selected
 * Response pair (Part A / Part B). Original text only. Loaded after content.js;
 * pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── LEVEL 1 ───────────────────────── */
    {
      id: "nj5-rv-lighthouse-stairs",
      family: "NJ5",
      title: "Two Hundred Steps",
      kind: "Vocabulary · L.5",
      blurb: "Nadia climbs an old lighthouse with her grandfather, with six words to work out from context.",
      level: 1,
      passage:
        "<p>" + N(1) + "Nadia had been <strong>reluctant</strong> to climb the lighthouse, and she dragged her feet all the way from the parking lot to the door. " +
        N(2) + "\"Two hundred steps is a lot of steps,\" she said. " +
        N(3) + "Grandpa Amos only smiled and handed her a water bottle. " +
        N(4) + "The lighthouse was <strong>ancient</strong>, older than the town itself, and its white paint had faded to the gray of driftwood. " +
        N(5) + "Inside, the iron stairs curled upward like the inside of a snail's shell. " +
        N(6) + "Nadia tested the first step with her foot. " +
        N(7) + "It felt <strong>sturdy</strong>, not even a wobble, so she started up. " +
        N(8) + "At the fortieth step she began to <strong>hesitate</strong>, pausing with one hand on the cold rail. " +
        N(9) + "\"Take your time,\" Grandpa said. \"The ocean isn't going anywhere.\" " +
        N(10) + "Near the top, a small window gave her a <strong>glimpse</strong> of blue, just a quick flash of water between the bricks. " +
        N(11) + "That was enough to pull her up the last twenty steps. " +
        N(12) + "When she stepped out onto the round balcony, the wind grabbed her hair. " +
        N(13) + "Below her, the ocean was <strong>vast</strong>, stretching to the edge of the sky with no end she could see. " +
        N(14) + "Far out, a boat's light blinked, disappeared behind a wave, and reappeared. " +
        N(15) + "Nadia gazed at it for a long time. " +
        N(16) + "\"Two hundred steps,\" she said at last, \"is not so many.\"" +
        "</p>",
      claims: [
        {
          id: "reluctant-a",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 1, the word reluctant most nearly means —",
          choices: [
            { letter: "A", text: "excited" },
            { letter: "B", text: "unwilling" },
            { letter: "C", text: "careful" },
            { letter: "D", text: "unable" }
          ],
          correct: "B",
          partB: "reluctant-b"
        },
        {
          id: "reluctant-b",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "Part B: Which phrase from the passage best helps the reader understand the meaning of reluctant?",
          choices: [
            { letter: "A", text: "handed her a water bottle" },
            { letter: "B", text: "climb the lighthouse" },
            { letter: "C", text: "older than the town itself" },
            { letter: "D", text: "dragged her feet all the way" }
          ],
          correct: "D"
        },
        {
          id: "sturdy",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 7, the word sturdy most nearly means —",
          choices: [
            { letter: "A", text: "strong and steady" },
            { letter: "B", text: "cold and smooth" },
            { letter: "C", text: "narrow and steep" },
            { letter: "D", text: "old and rusty" }
          ],
          correct: "A"
        },
        {
          id: "prefix-re",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 14, the prefix re- in the word reappeared tells the reader that the boat's light —",
          choices: [
            { letter: "A", text: "shone more brightly" },
            { letter: "B", text: "moved farther away" },
            { letter: "C", text: "came into view again" },
            { letter: "D", text: "went out for good" }
          ],
          correct: "C"
        },
        {
          id: "simile-snail",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 5, the author compares the stairs to the inside of a snail's shell to show that they —",
          choices: [
            { letter: "A", text: "are slippery and wet" },
            { letter: "B", text: "curve around and around" },
            { letter: "C", text: "are very small" },
            { letter: "D", text: "are hard to find" }
          ],
          correct: "B"
        },
        {
          id: "vast-synonym",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "Which word is the best synonym for vast as it is used in sentence 13?",
          choices: [
            { letter: "A", text: "shallow" },
            { letter: "B", text: "peaceful" },
            { letter: "C", text: "sparkling" },
            { letter: "D", text: "enormous" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "nj5-rv-seed-library",
      family: "NJ5",
      title: "The Seed Library",
      kind: "Vocabulary · L.5",
      blurb: "A school library that lends seeds instead of books, with five words to work out from context.",
      level: 1,
      passage:
        "<p>" + N(1) + "Last spring, the fifth graders at Maple Hollow School opened something new in the library: a seed library. " +
        N(2) + "Instead of books, its small wooden drawers hold paper envelopes of seeds. " +
        N(3) + "Students \"borrow\" a packet, plant the seeds, and return new seeds in the fall. " +
        N(4) + "The idea came from Ms. Ferreira, the science teacher, who noticed a shelf of empty jars in the storage room. " +
        N(5) + "\"The jars were reusable, and I had a drawer of old seeds at home,\" she said. " +
        N(6) + "Some of the seeds were <strong>dormant</strong>, resting quietly in their envelopes for years, but many still sprouted when the students planted them. " +
        N(7) + "Not every seed is easy to handle. " +
        N(8) + "Lettuce seeds are <strong>fragile</strong>, so light and thin that a strong breath can scatter them across the table. " +
        N(9) + "Bean seeds are tougher and can be dropped without harm. " +
        N(10) + "The students were <strong>eager</strong> to get started; they arrived early on planting day and lined up before the doors opened. " +
        N(11) + "By June, the tomato plants had begun to <strong>thrive</strong>, growing thick green leaves and climbing past the tops of their cages. " +
        N(12) + "Ms. Ferreira admits that not everyone has a green thumb at first. " +
        N(13) + "\"But everyone can learn,\" she said. " +
        N(14) + "Families have been <strong>generous</strong>, too, dropping off extra sunflower and pepper seeds without being asked. " +
        N(15) + "This fall, the drawers are fuller than they were in the spring." +
        "</p>",
      claims: [
        {
          id: "fragile-a",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 8, the word fragile most nearly means —",
          choices: [
            { letter: "A", text: "easily broken or scattered" },
            { letter: "B", text: "very hard to find" },
            { letter: "C", text: "extremely small" },
            { letter: "D", text: "difficult to grow" }
          ],
          correct: "A",
          partB: "fragile-b"
        },
        {
          id: "fragile-b",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "Part B: Which phrase from the passage best helps the reader understand the meaning of fragile?",
          choices: [
            { letter: "A", text: "Not every seed is easy to handle" },
            { letter: "B", text: "a strong breath can scatter them" },
            { letter: "C", text: "Bean seeds are tougher" },
            { letter: "D", text: "return new seeds in the fall" }
          ],
          correct: "B"
        },
        {
          id: "dormant",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 6, the word dormant most nearly means —",
          choices: [
            { letter: "A", text: "broken into pieces" },
            { letter: "B", text: "wet and moldy" },
            { letter: "C", text: "brightly colored" },
            { letter: "D", text: "resting and not growing" }
          ],
          correct: "D"
        },
        {
          id: "reusable-parts",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 5, the word reusable is built from the prefix re-, the root use, and the suffix -able. The word reusable means —",
          choices: [
            { letter: "A", text: "used up completely" },
            { letter: "B", text: "able to be used again" },
            { letter: "C", text: "never used before" },
            { letter: "D", text: "used by many people" }
          ],
          correct: "B"
        },
        {
          id: "green-thumb",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 12, the phrase has a green thumb means that a person —",
          choices: [
            { letter: "A", text: "has dirt on their hands" },
            { letter: "B", text: "paints with green colors" },
            { letter: "C", text: "is good at growing plants" },
            { letter: "D", text: "owns a garden tool" }
          ],
          correct: "C"
        },
        {
          id: "eager-synonym",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "Which word is the best synonym for eager as it is used in sentence 10?",
          choices: [
            { letter: "A", text: "worried" },
            { letter: "B", text: "sleepy" },
            { letter: "C", text: "excited" },
            { letter: "D", text: "careful" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "nj5-rv-pocket-park",
      family: "NJ5",
      title: "Pocket Park",
      kind: "Vocabulary · L.5",
      blurb: "Neighbors turn an empty corner lot into a park, with five words to work out from context.",
      level: 1,
      passage:
        "<p>" + N(1) + "For years, the lot on the corner of Fifth and Grove was <strong>vacant</strong>. " +
        N(2) + "No building stood there, no one used it, and weeds grew as tall as the fence. " +
        N(3) + "Most people on the block thought the lot was useless. " +
        N(4) + "Last April, the Grove Street neighbors decided to change that. " +
        N(5) + "On the first Saturday, thirty people showed up with rakes, gloves, and trash bags. " +
        N(6) + "By noon, the lot was <strong>tidy</strong>: the weeds were gone, the trash was bagged, and the ground was raked smooth. " +
        N(7) + "A <strong>gigantic</strong> maple tree in the back corner, so wide that three kids together could not reach around its trunk, was the only thing they kept. " +
        N(8) + "\"You don't get shade like that overnight,\" said Mrs. Chen, who lives across the street. " +
        N(9) + "Over the summer, the neighbors added a picnic table, a small stage made of wooden pallets, and a garden bed shaped like a half-moon. " +
        N(10) + "Kids painted the fence in bright colors and hung a sign that says Pocket Park. " +
        N(11) + "People now stop on their way home to <strong>admire</strong> the flowers and to tell the gardeners how nice everything looks. " +
        N(12) + "On Friday evenings, the park is busier than a beehive. " +
        N(13) + "Someone plays guitar on the pallet stage, families share food at the table, and a group of preschoolers <strong>scurries</strong> between the flower beds. " +
        N(14) + "Mrs. Chen says the best part is not the flowers or the music. " +
        N(15) + "\"It's that the corner isn't empty anymore,\" she said. " +
        N(16) + "\"It's full of neighbors.\"" +
        "</p>",
      claims: [
        {
          id: "vacant-a",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 1, the word vacant most nearly means —",
          choices: [
            { letter: "A", text: "empty" },
            { letter: "B", text: "beautiful" },
            { letter: "C", text: "expensive" },
            { letter: "D", text: "crowded" }
          ],
          correct: "A",
          partB: "vacant-b"
        },
        {
          id: "vacant-b",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "Part B: Which phrase from the passage best helps the reader understand the meaning of vacant?",
          choices: [
            { letter: "A", text: "on the corner of Fifth and Grove" },
            { letter: "B", text: "no building stood there" },
            { letter: "C", text: "decided to change that" },
            { letter: "D", text: "with rakes, gloves, and trash bags" }
          ],
          correct: "B"
        },
        {
          id: "tidy",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 6, the word tidy most nearly means —",
          choices: [
            { letter: "A", text: "wet and muddy" },
            { letter: "B", text: "large and open" },
            { letter: "C", text: "neat and clean" },
            { letter: "D", text: "ready to sell" }
          ],
          correct: "C"
        },
        {
          id: "suffix-less",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 3, the suffix -less in the word useless tells the reader that people thought the lot —",
          choices: [
            { letter: "A", text: "was used every day" },
            { letter: "B", text: "needed less work" },
            { letter: "C", text: "was full of useful things" },
            { letter: "D", text: "had no use at all" }
          ],
          correct: "D"
        },
        {
          id: "beehive",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 12, the author says the park is busier than a beehive to show that it is —",
          choices: [
            { letter: "A", text: "home to many bees" },
            { letter: "B", text: "full of activity" },
            { letter: "C", text: "noisy and dangerous" },
            { letter: "D", text: "too crowded to enter" }
          ],
          correct: "B"
        },
        {
          id: "gigantic-synonym",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "Which word is the best synonym for gigantic as it is used in sentence 7?",
          choices: [
            { letter: "A", text: "old" },
            { letter: "B", text: "leafy" },
            { letter: "C", text: "huge" },
            { letter: "D", text: "shady" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── LEVEL 2 ───────────────────────── */
    {
      id: "nj5-rv-night-market",
      family: "NJ5",
      title: "The Night Market",
      kind: "Vocabulary · L.5",
      blurb: "Tomás helps at his aunt's dumpling stall, with six words to work out from context.",
      level: 2,
      passage:
        "<p>" + N(1) + "The night market opened at dusk, when the sky over the river turned the color of a ripe plum. " +
        N(2) + "Tomás had promised to help at his aunt's dumpling stall, though he would rather have been home with his comic books. " +
        N(3) + "At first the crowd was small, and the voices were only a <strong>murmur</strong>, a low hum that rose and fell like wind through leaves. " +
        N(4) + "Then the lanterns came on, hanging above the walkway like a row of small orange moons. " +
        N(5) + "People began to <strong>drift</strong> toward the stalls, wandering slowly from the fruit tables to the noodle carts with no plan at all. " +
        N(6) + "Tía Rosa worked at a <strong>brisk</strong> pace, folding a dumpling every few seconds and never once looking down at her hands. " +
        N(7) + "\"Keep an eye on the steamer,\" she told Tomás. \"When the lid rattles, they're ready.\" " +
        N(8) + "A <strong>cluster</strong> of kids his age gathered near the stall, five or six of them bunched together, sharing a paper cone of roasted corn. " +
        N(9) + "One girl waved to <strong>beckon</strong> him over, but Tomás shook his head; the lid was rattling. " +
        N(10) + "By ten o'clock his feet hurt and his shirt smelled like ginger. " +
        N(11) + "He was <strong>weary</strong>, but it was a good kind of tired. " +
        N(12) + "The tireless cooks at the next stall were still laughing, and the last customers were still lining up. " +
        N(13) + "\"Same time next Saturday?\" Tía Rosa asked. " +
        N(14) + "Tomás surprised himself by saying yes." +
        "</p>",
      claims: [
        {
          id: "drift-a",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 5, the word drift most nearly means —",
          choices: [
            { letter: "A", text: "run quickly" },
            { letter: "B", text: "push through" },
            { letter: "C", text: "stand still" },
            { letter: "D", text: "wander slowly" }
          ],
          correct: "D",
          partB: "drift-b"
        },
        {
          id: "drift-b",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "Part B: Which phrase from the passage best helps the reader understand the meaning of drift?",
          choices: [
            { letter: "A", text: "hanging above the walkway" },
            { letter: "B", text: "wandering slowly from the fruit tables" },
            { letter: "C", text: "folding a dumpling every few seconds" },
            { letter: "D", text: "gathered near the stall" }
          ],
          correct: "B"
        },
        {
          id: "murmur-shade",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "The author uses the word murmur in sentence 3 instead of roar to show that the voices were —",
          choices: [
            { letter: "A", text: "angry and sharp" },
            { letter: "B", text: "loud and wild" },
            { letter: "C", text: "soft and low" },
            { letter: "D", text: "high and squeaky" }
          ],
          correct: "C"
        },
        {
          id: "tireless-parts",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 12, the suffix -less in the word tireless tells the reader that the cooks —",
          choices: [
            { letter: "A", text: "were very tired" },
            { letter: "B", text: "did not seem to get tired" },
            { letter: "C", text: "had taken a rest" },
            { letter: "D", text: "were tired of laughing" }
          ],
          correct: "B"
        },
        {
          id: "simile-lanterns",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 4, the author compares the lanterns to small orange moons mainly to help the reader picture —",
          choices: [
            { letter: "A", text: "how round and glowing the lanterns were" },
            { letter: "B", text: "how far away the lanterns were" },
            { letter: "C", text: "how the lanterns swayed in the wind" },
            { letter: "D", text: "how late at night it was" }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "RL.IT.5.3",
          strand: "RL",
          stem: "Which sentence best shows that Tomás's feelings about the market have changed by the end of the story?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 9" },
            { letter: "C", text: "sentence 10" },
            { letter: "D", text: "sentence 14" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "nj5-rv-rooftop-weather",
      family: "NJ5",
      title: "The Rooftop Weather Station",
      kind: "Vocabulary · L.5",
      blurb: "Fifth graders run a weather station on the school roof, with five words to work out from context.",
      level: 2,
      passage:
        "<p>" + N(1) + "On the roof of Cedar Street Elementary, a small white box stands on four metal legs. " +
        N(2) + "It is not a birdhouse. " +
        N(3) + "It is the school's weather station, and a team of fifth graders runs it. " +
        N(4) + "Every morning at 8:15, two students climb the stairs to <strong>observe</strong> the instruments, looking closely at each dial and writing down what they see. " +
        N(5) + "The measurements must be <strong>precise</strong>; a temperature of 61 degrees is recorded as 61, not \"about 60.\" " +
        N(6) + "A wind gauge on top spins like a pinwheel, faster on stormy days and barely at all on calm ones. " +
        N(7) + "The team also tracks the <strong>gradual</strong> changes of the seasons, such as the slow drop in morning temperatures from September to November. " +
        N(8) + "Their teacher, Mr. Okafor, says the station's data has become <strong>reliable</strong>. " +
        N(9) + "\"Three years of numbers, and they have never missed a day,\" he said. " +
        N(10) + "\"Even when a student is under the weather, someone else fills in.\" " +
        N(11) + "The students use their charts to predict the next day's weather, and last winter they called a snow day two days before the news did. " +
        N(12) + "The roof is not without <strong>hazard</strong>, of course. " +
        N(13) + "The team wears helmets, stays behind the railing, and never goes up during lightning. " +
        N(14) + "\"The sky is our laboratory,\" said Priya, a team captain. " +
        N(15) + "\"You just have to be careful with the ceiling.\"" +
        "</p>",
      claims: [
        {
          id: "gradual-a",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 7, the word gradual most nearly means —",
          choices: [
            { letter: "A", text: "happening all at once" },
            { letter: "B", text: "happening slowly over time" },
            { letter: "C", text: "surprising to everyone" },
            { letter: "D", text: "difficult to measure" }
          ],
          correct: "B",
          partB: "gradual-b"
        },
        {
          id: "gradual-b",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "Part B: Which phrase from sentence 7 best helps the reader understand the meaning of gradual?",
          choices: [
            { letter: "A", text: "The team also tracks" },
            { letter: "B", text: "changes of the seasons" },
            { letter: "C", text: "the slow drop in temperatures" },
            { letter: "D", text: "from September to November" }
          ],
          correct: "C"
        },
        {
          id: "precise",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 5, the word precise most nearly means —",
          choices: [
            { letter: "A", text: "exact and correct" },
            { letter: "B", text: "large and round" },
            { letter: "C", text: "rough and quick" },
            { letter: "D", text: "warm and dry" }
          ],
          correct: "A"
        },
        {
          id: "predict-roots",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "The word predict in sentence 11 is made from the prefix pre-, meaning \"before,\" and the Latin root dict, meaning \"say.\" Based on its parts, predict means to —",
          choices: [
            { letter: "A", text: "say what will happen before it does" },
            { letter: "B", text: "write down what already happened" },
            { letter: "C", text: "measure something a second time" },
            { letter: "D", text: "explain why something went wrong" }
          ],
          correct: "A"
        },
        {
          id: "under-the-weather",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 10, the phrase under the weather means that a student is —",
          choices: [
            { letter: "A", text: "standing outside in the rain" },
            { letter: "B", text: "feeling sick" },
            { letter: "C", text: "late for the morning check" },
            { letter: "D", text: "afraid of storms" }
          ],
          correct: "B"
        },
        {
          id: "reliable-synonym",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "Which word is the closest synonym for reliable as it is used in sentence 8?",
          choices: [
            { letter: "A", text: "expensive" },
            { letter: "B", text: "delicate" },
            { letter: "C", text: "surprising" },
            { letter: "D", text: "dependable" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "nj5-rv-kite-doctor",
      family: "NJ5",
      title: "The Kite Doctor",
      kind: "Vocabulary · L.5",
      blurb: "A shy boy and a patient neighbor repair a broken kite, with six words to work out from context.",
      level: 2,
      passage:
        "<p>" + N(1) + "Everyone on Birch Lane called Mr. Delgado the kite doctor. " +
        N(2) + "Leo had never spoken to him; Leo was <strong>timid</strong> around grown-ups he didn't know, and he usually let his older sister do the talking. " +
        N(3) + "But now his kite lay on the sidewalk, <strong>tattered</strong>, its red paper ripped in three places and one stick snapped clean through. " +
        N(4) + "He had misjudged the wind and steered straight into the oak tree. " +
        N(5) + "Mr. Delgado looked up from his porch. " +
        N(6) + "\"Bring it here,\" he said. \"Nothing is broken that can't be fixed.\" " +
        N(7) + "It took most of the afternoon to <strong>mend</strong> the kite. " +
        N(8) + "Mr. Delgado glued the stick, patched the tears with thin white tissue, and showed Leo how to tie a knot that would hold. " +
        N(9) + "He was <strong>patient</strong> with every mistake, never sighing when Leo's knots slipped for the third time. " +
        N(10) + "\"Tying a good knot is like learning to ride a bike,\" he said. \"Your hands remember before your head does.\" " +
        N(11) + "When they were finished, the kite looked stitched together like a quilt, but it was whole. " +
        N(12) + "Leo wanted to <strong>persist</strong>, even though the sky was getting dark, so they walked to the field for one last try. " +
        N(13) + "A gust came across the grass. " +
        N(14) + "The kite jerked, dipped, and then began to <strong>soar</strong>, climbing higher than the oak tree, higher than the water tower. " +
        N(15) + "\"Kite doctor,\" Leo said quietly, and Mr. Delgado laughed. " +
        N(16) + "\"Next time, you'll be the one holding the glue.\"" +
        "</p>",
      claims: [
        {
          id: "tattered-a",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 3, the word tattered most nearly means —",
          choices: [
            { letter: "A", text: "torn and damaged" },
            { letter: "B", text: "bright and new" },
            { letter: "C", text: "wet and heavy" },
            { letter: "D", text: "small and light" }
          ],
          correct: "A",
          partB: "tattered-b"
        },
        {
          id: "tattered-b",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "Part B: Which phrase from the passage best helps the reader understand the meaning of tattered?",
          choices: [
            { letter: "A", text: "lay on the sidewalk" },
            { letter: "B", text: "its red paper ripped in three places" },
            { letter: "C", text: "looked up from his porch" },
            { letter: "D", text: "steered straight into the oak tree" }
          ],
          correct: "B"
        },
        {
          id: "persist",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 12, the word persist most nearly means —",
          choices: [
            { letter: "A", text: "give up" },
            { letter: "B", text: "go home" },
            { letter: "C", text: "keep trying" },
            { letter: "D", text: "wait quietly" }
          ],
          correct: "C"
        },
        {
          id: "prefix-mis",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 4, the prefix mis- in the word misjudged tells the reader that Leo judged the wind —",
          choices: [
            { letter: "A", text: "very carefully" },
            { letter: "B", text: "a second time" },
            { letter: "C", text: "before anyone else" },
            { letter: "D", text: "in the wrong way" }
          ],
          correct: "D"
        },
        {
          id: "simile-bike",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 10, Mr. Delgado compares tying a knot to riding a bike to explain that —",
          choices: [
            { letter: "A", text: "knots are only useful outdoors" },
            { letter: "B", text: "Leo should ride his bike to the field" },
            { letter: "C", text: "both skills get easier with practice" },
            { letter: "D", text: "kites are faster than bikes" }
          ],
          correct: "C"
        },
        {
          id: "patient-synonym",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "Which word could best replace patient in sentence 9 without changing the meaning?",
          choices: [
            { letter: "A", text: "calm" },
            { letter: "B", text: "quick" },
            { letter: "C", text: "quiet" },
            { letter: "D", text: "clever" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── LEVEL 3 ───────────────────────── */
    {
      id: "nj5-rv-river-otters",
      family: "NJ5",
      title: "Return of the Otters",
      kind: "Vocabulary · L.5",
      blurb: "How a polluted river came back to life, with five words to work out from context.",
      level: 3,
      passage:
        "<p>" + N(1) + "Forty years ago, river otters were <strong>scarce</strong> along the Millstone River. " +
        N(2) + "A few were spotted each winter, but most fishermen went whole seasons without seeing a single one. " +
        N(3) + "The reason was not a mystery. " +
        N(4) + "Factories upstream had dumped waste into the water for decades, and the fish the otters depended on had nearly <strong>vanished</strong>. " +
        N(5) + "Cleaning a river is slow work. " +
        N(6) + "Volunteers planted aquatic plants along the banks, whose roots trap mud and filter the water. " +
        N(7) + "Towns built new treatment plants, and the state passed rules about what could go into the river. " +
        N(8) + "At first the changes seemed like a drop in the bucket. " +
        N(9) + "But by the tenth year, sunfish and shiners had returned, and by the twentieth, biologists counted otters on nearly every mile of the river. " +
        N(10) + "Today the otters <strong>flourish</strong> there, raising pups in dens beneath the roots and sliding down the muddy banks like kids on a playground slide. " +
        N(11) + "Scientists remain <strong>cautious</strong>, however. " +
        N(12) + "A single chemical spill could undo much of the progress, so water samples are still tested every month. " +
        N(13) + "The goal now is to <strong>restore</strong> the river's other missing residents, including freshwater mussels that once carpeted its bottom. " +
        N(14) + "\"The otters are a sign, not a finish line,\" one biologist said. " +
        N(15) + "\"They tell us the river is healthier, but they don't tell us we're done.\"" +
        "</p>",
      claims: [
        {
          id: "scarce-a",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 1, the word scarce most nearly means —",
          choices: [
            { letter: "A", text: "hard to find" },
            { letter: "B", text: "easy to catch" },
            { letter: "C", text: "large and heavy" },
            { letter: "D", text: "afraid of people" }
          ],
          correct: "A",
          partB: "scarce-b"
        },
        {
          id: "scarce-b",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "Part B: Which phrase from the passage best helps the reader understand the meaning of scarce?",
          choices: [
            { letter: "A", text: "Forty years ago" },
            { letter: "B", text: "without seeing a single one" },
            { letter: "C", text: "The reason was not a mystery" },
            { letter: "D", text: "dumped waste into the water" }
          ],
          correct: "B"
        },
        {
          id: "cautious",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 11, the word cautious most nearly means —",
          choices: [
            { letter: "A", text: "excited" },
            { letter: "B", text: "confused" },
            { letter: "C", text: "careful" },
            { letter: "D", text: "proud" }
          ],
          correct: "C"
        },
        {
          id: "aqua-root",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "The word aquatic in sentence 6 contains the Latin root aqua, meaning \"water.\" Aquatic plants are plants that —",
          choices: [
            { letter: "A", text: "need very little water" },
            { letter: "B", text: "bloom only in winter" },
            { letter: "C", text: "are planted by volunteers" },
            { letter: "D", text: "grow in or near water" }
          ],
          correct: "D"
        },
        {
          id: "drop-in-bucket",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 8, the phrase a drop in the bucket suggests that the early changes seemed —",
          choices: [
            { letter: "A", text: "too small to matter" },
            { letter: "B", text: "wet and messy" },
            { letter: "C", text: "quick and easy" },
            { letter: "D", text: "expensive to make" }
          ],
          correct: "A"
        },
        {
          id: "flourish-shade",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "The author uses the word flourish in sentence 10 rather than survive to show that the otters are —",
          choices: [
            { letter: "A", text: "barely staying alive" },
            { letter: "B", text: "doing very well" },
            { letter: "C", text: "hiding from people" },
            { letter: "D", text: "moving to new rivers" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "nj5-rv-understudy",
      family: "NJ5",
      title: "The Understudy",
      kind: "Vocabulary · L.5",
      blurb: "Amara learned every line of the play and never expected to say them, with five words to work out from context.",
      level: 3,
      passage:
        "<p>" + N(1) + "For six weeks, Amara had been the understudy, which meant she learned every line of the play and expected to say none of them. " +
        N(2) + "She sat in the back row of the auditorium each afternoon and tried to <strong>mimic</strong> Jasmine, copying the way the lead actor tilted her head and let each sentence hang in the air. " +
        N(3) + "It was easy to feel invisible back there. " +
        N(4) + "Then, on the morning of the show, Jasmine woke up with a fever. " +
        N(5) + "Ms. Whitfield delivered the news in the hallway, and Amara felt a cold <strong>dread</strong> settle in her stomach, the same heavy feeling she got before a dentist appointment. " +
        N(6) + "The next hour was <strong>frantic</strong>. " +
        N(7) + "The costume had to be pinned, the props relabeled, and the program reprinted with a new name, all before the first bell. " +
        N(8) + "A first grader in the front row looked <strong>bewildered</strong> when the curtain rose, blinking at the stage as if he had wandered into the wrong room. " +
        N(9) + "Amara understood exactly how he felt. " +
        N(10) + "She had butterflies in her stomach, and her first line came out as a whisper. " +
        N(11) + "But the second line was louder, and by the third scene her voice was as steady as a drumbeat. " +
        N(12) + "When the curtain fell, she was <strong>exhausted</strong>, too tired even to lift her arms for the final bow. " +
        N(13) + "Jasmine's mother found her afterward. " +
        N(14) + "\"Jasmine watched the whole thing on my phone,\" she said. " +
        N(15) + "\"She told me to tell you she's not sure she wants her part back.\"" +
        "</p>",
      claims: [
        {
          id: "bewildered-a",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 8, the word bewildered most nearly means —",
          choices: [
            { letter: "A", text: "bored" },
            { letter: "B", text: "confused" },
            { letter: "C", text: "delighted" },
            { letter: "D", text: "sleepy" }
          ],
          correct: "B",
          partB: "bewildered-b"
        },
        {
          id: "bewildered-b",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "Part B: Which phrase from the passage best helps the reader understand the meaning of bewildered?",
          choices: [
            { letter: "A", text: "A first grader in the front row" },
            { letter: "B", text: "when the curtain rose" },
            { letter: "C", text: "wandered into the wrong room" },
            { letter: "D", text: "Amara understood exactly" }
          ],
          correct: "C"
        },
        {
          id: "dread",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 5, the word dread most nearly means —",
          choices: [
            { letter: "A", text: "fear of what is coming" },
            { letter: "B", text: "relief that it is over" },
            { letter: "C", text: "a burst of energy" },
            { letter: "D", text: "a wish to be elsewhere" }
          ],
          correct: "A"
        },
        {
          id: "vis-root",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "The word invisible in sentence 3 is made from the prefix in-, meaning \"not,\" the Latin root vis, meaning \"see,\" and the suffix -ible. When Amara felt invisible, she felt —",
          choices: [
            { letter: "A", text: "like she could see everything" },
            { letter: "B", text: "unable to see the stage" },
            { letter: "C", text: "like she was seen too much" },
            { letter: "D", text: "like no one could see her" }
          ],
          correct: "D"
        },
        {
          id: "butterflies",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 10, the phrase had butterflies in her stomach means that Amara —",
          choices: [
            { letter: "A", text: "was hungry before the show" },
            { letter: "B", text: "felt nervous and fluttery" },
            { letter: "C", text: "had eaten something bad" },
            { letter: "D", text: "was laughing quietly" }
          ],
          correct: "B"
        },
        {
          id: "frantic-shade",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "The author uses the word frantic in sentence 6 rather than busy to show that the hour was —",
          choices: [
            { letter: "A", text: "calm and organized" },
            { letter: "B", text: "long and boring" },
            { letter: "C", text: "rushed and full of worry" },
            { letter: "D", text: "quiet and careful" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
