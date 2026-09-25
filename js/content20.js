/* SOL Labyrinth — v20 content: Grade 10 stamina packs (Virginia G10).
 * Eighteen original packs for the early nights: ten TINY texts (50–90 words,
 * 4–5 questions) and eight SHORT texts (100–150 words, 5–6 questions), mixing
 * literary, poetry, informational, functional, vocabulary and paired texts.
 * No VDOE / copyrighted text. Loaded after content.js; pushes into the live
 * HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── TINY (nights 1–8) ───────────────────────── */
    {
      id: "g10-t-bus",
      family: "G10",
      title: "The Last Bus",
      kind: "Literary · 10.RL",
      blurb: "A mother off work early, a bus pulling away, and eleven blocks that go by fast.",
      level: 1,
      passage:
        "<p>" + N(1) + "The 6:40 bus was the last one that stopped near the hospital, and Dev had never once caught it without running. " +
        N(2) + "Tonight he walked. " +
        N(3) + "His mother's shift had ended early for once, and she walked beside him in her blue scrubs, carrying her shoes. " +
        N(4) + "\"We'll miss it,\" Dev said. " +
        N(5) + "\"Then we'll miss it,\" she said, and slowed down even more. " +
        N(6) + "The bus pulled away with its windows lit like a small moving house. " +
        N(7) + "They watched it go and kept walking, and the eleven blocks home had never felt so short." +
        "</p>",
      claims: [
        {
          id: "mother",
          sol: "10.RL.1.C",
          stem: "Sentence 5 shows that Dev's mother —",
          choices: [
            { letter: "A", text: "is too tired to hurry" },
            { letter: "B", text: "wants to spend the walk with her son" },
            { letter: "C", text: "is annoyed that Dev complained" },
            { letter: "D", text: "expects another bus to come soon" }
          ],
          correct: "B"
        },
        {
          id: "house",
          sol: "10.RL.2.A",
          stem: "The simile in sentence 6, windows lit like a small moving house, mainly makes the bus seem —",
          choices: [
            { letter: "A", text: "warm and inviting as it leaves" },
            { letter: "B", text: "dangerous and much too fast" },
            { letter: "C", text: "empty and abandoned" },
            { letter: "D", text: "crowded and noisy inside" }
          ],
          correct: "A"
        },
        {
          id: "walked",
          sol: "10.RL.3.A",
          stem: "The author includes the short sentence 2, Tonight he walked, mainly to —",
          choices: [
            { letter: "A", text: "explain why the bus was running late" },
            { letter: "B", text: "signal a break from Dev's usual routine" },
            { letter: "C", text: "show that Dev has hurt his leg" },
            { letter: "D", text: "describe the weather on the street" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses the theme of the story about the bus?",
          choices: [
            { letter: "A", text: "Missing a bus can ruin an evening." },
            { letter: "B", text: "Hospital work leaves no time for family." },
            { letter: "C", text: "Children should walk instead of ride." },
            { letter: "D", text: "Time together can matter more than convenience." }
          ],
          correct: "D"
        },
        {
          id: "short",
          sol: "10.RL.2.C",
          stem: "In sentence 7, the phrase had never felt so short mainly conveys that Dev —",
          choices: [
            { letter: "A", text: "wishes the walk had taken longer" },
            { letter: "B", text: "is measuring the distance carefully" },
            { letter: "C", text: "finds the walk pleasant and quick" },
            { letter: "D", text: "is walking faster than before" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-t-frost",
      family: "G10",
      title: "First Frost",
      kind: "Poetry · 10.RL",
      blurb: "Eight lines: a garden gone silver overnight, and a father who says next year.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The first frost came without a sound<br>" +
        L(2) + "and stitched white thread across the ground.<br>" +
        L(3) + "The garden, green a day before,<br>" +
        L(4) + "stood stiff and silver at the door.<br>" +
        L(5) + "My father touched a bean vine, black,<br>" +
        L(6) + "and said, \"Next year. They'll all come back.\"<br>" +
        L(7) + "I could not tell if that was true,<br>" +
        L(8) + "but he was smiling, so I smiled too." +
        "</p>",
      claims: [
        {
          id: "thread",
          sol: "10.RL.2.A",
          stem: "In line 2, the poet describes the frost as if it were —",
          choices: [
            { letter: "A", text: "a needle stitching thread" },
            { letter: "B", text: "a heavy silver door" },
            { letter: "C", text: "a soft blanket of snow" },
            { letter: "D", text: "a sudden violent storm" }
          ],
          correct: "A"
        },
        {
          id: "father",
          sol: "10.RL.1.C",
          stem: "Line 6 characterizes the father as —",
          choices: [
            { letter: "A", text: "angry about the ruined garden" },
            { letter: "B", text: "hopeful in spite of the damage" },
            { letter: "C", text: "unaware that the frost has come" },
            { letter: "D", text: "eager to plant beans that same day" }
          ],
          correct: "B"
        },
        {
          id: "stiff",
          sol: "10.RL.2.C",
          stem: "In line 4, the word stiff most nearly means —",
          choices: [
            { letter: "A", text: "tall" },
            { letter: "B", text: "bright" },
            { letter: "C", text: "quiet" },
            { letter: "D", text: "rigid" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "10.RL.1.A",
          stem: "The last two lines suggest that the speaker —",
          choices: [
            { letter: "A", text: "doubts the father's words but shares his mood" },
            { letter: "B", text: "is certain the garden will recover" },
            { letter: "C", text: "blames the father for the frost" },
            { letter: "D", text: "wants to leave the garden behind" }
          ],
          correct: "A"
        },
        {
          id: "contrast",
          sol: "10.RL.3.A",
          stem: "The poet places lines 3 and 4 side by side mainly to —",
          choices: [
            { letter: "A", text: "explain why the father planted beans" },
            { letter: "B", text: "describe the door of the house" },
            { letter: "C", text: "show how quickly the frost changed the garden" },
            { letter: "D", text: "suggest that the season is spring" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-t-sparekey",
      family: "G10",
      title: "The Spare Key",
      kind: "Literary · 10.RL",
      blurb: "A key given for emergencies, a door that stays shut, and a full minute on the porch.",
      level: 2,
      passage:
        "<p>" + N(1) + "Mrs. Halvorsen had given Rosa a spare key in September, \"for emergencies,\" and Rosa had carried it three months without using it. " +
        N(2) + "Then one Thursday the old woman did not answer her door, though her lights were on. " +
        N(3) + "Rosa stood on the porch a full minute, key in her fist, weighing an unlocked door against an unlocked friendship. " +
        N(4) + "She turned the key. " +
        N(5) + "Mrs. Halvorsen was asleep in her chair, radio on, perfectly fine, and woke up laughing. " +
        N(6) + "\"Now you know,\" she said, \"that emergency was never the point.\"" +
        "</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "Sentence 3 presents Rosa's conflict as a choice between —",
          choices: [
            { letter: "A", text: "calling for help and waiting outside" },
            { letter: "B", text: "respecting privacy and checking on a friend" },
            { letter: "C", text: "keeping the key and returning it" },
            { letter: "D", text: "staying for dinner and going home" }
          ],
          correct: "B"
        },
        {
          id: "unlocked",
          sol: "10.RL.2.A",
          stem: "The phrase an unlocked friendship in sentence 3 suggests that using the key would —",
          choices: [
            { letter: "A", text: "change how close the two of them are" },
            { letter: "B", text: "prove that Rosa is dishonest" },
            { letter: "C", text: "force Mrs. Halvorsen to move away" },
            { letter: "D", text: "cost Rosa the key for good" }
          ],
          correct: "A"
        },
        {
          id: "turned",
          sol: "10.RL.3.A",
          stem: "The author makes sentence 4 very short mainly to —",
          choices: [
            { letter: "A", text: "show that Rosa is in a hurry" },
            { letter: "B", text: "slow the story before the ending" },
            { letter: "C", text: "mark the moment Rosa decides" },
            { letter: "D", text: "suggest that the key does not fit" }
          ],
          correct: "C"
        },
        {
          id: "point",
          sol: "10.RL.2.B",
          stem: "Sentence 6 suggests that Mrs. Halvorsen gave Rosa the key mainly because she —",
          choices: [
            { letter: "A", text: "often forgets to answer the door" },
            { letter: "B", text: "expected an emergency soon" },
            { letter: "C", text: "planned to move out of the house" },
            { letter: "D", text: "wanted Rosa to feel free to come in" }
          ],
          correct: "D"
        },
        {
          id: "weighing",
          sol: "10.RL.2.C",
          stem: "In sentence 3, the word weighing most nearly means —",
          choices: [
            { letter: "A", text: "considering carefully" },
            { letter: "B", text: "lifting slowly" },
            { letter: "C", text: "measuring on a scale" },
            { letter: "D", text: "ignoring completely" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-t-bread",
      family: "G10",
      title: "Why Bread Rises",
      kind: "Informational · 10.RI",
      blurb: "A living ingredient, trapped gas, and the moment the rising stops.",
      level: 1,
      passage:
        "<p>" + N(1) + "A loaf of bread rises because of a living ingredient: yeast. " +
        N(2) + "Yeast is a tiny fungus that eats the sugars in flour and releases carbon dioxide gas as it feeds. " +
        N(3) + "The gas gets trapped in the stretchy dough and pushes it upward. " +
        N(4) + "Warmth speeds the process, which is why bakers set dough near a stove. " +
        N(5) + "Too much heat kills the yeast, so rising stops once the loaf enters a hot oven. " +
        N(6) + "The baked loaf keeps those bubbles in place, giving bread its light texture." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "The passage is mainly about —",
          choices: [
            { letter: "A", text: "how bakers choose their flour" },
            { letter: "B", text: "why bread dough rises" },
            { letter: "C", text: "the dangers of hot ovens" },
            { letter: "D", text: "the history of yeast" }
          ],
          correct: "B"
        },
        {
          id: "feeds",
          sol: "10.RI.1.B",
          stem: "According to sentence 2, yeast produces gas when it —",
          choices: [
            { letter: "A", text: "is cooled" },
            { letter: "B", text: "touches the oven" },
            { letter: "C", text: "feeds on sugars" },
            { letter: "D", text: "is mixed with water" }
          ],
          correct: "C"
        },
        {
          id: "stove",
          sol: "10.RI.2.A",
          stem: "The author includes sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "warn readers about stoves" },
            { letter: "B", text: "describe how ovens work" },
            { letter: "C", text: "list the ingredients in dough" },
            { letter: "D", text: "explain a common baking practice" }
          ],
          correct: "D"
        },
        {
          id: "trapped",
          sol: "10.RI.2.C",
          stem: "In sentence 3, the word trapped most nearly means —",
          choices: [
            { letter: "A", text: "held inside" },
            { letter: "B", text: "hunted down" },
            { letter: "C", text: "let loose" },
            { letter: "D", text: "warmed up" }
          ],
          correct: "A"
        },
        {
          id: "stops",
          sol: "10.RI.1.C",
          stem: "Which sentence explains why the rising stops during baking?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-t-pool",
      family: "G10",
      title: "Pool Fall Hours",
      kind: "Functional text · 10.RI",
      blurb: "A short notice about weekend hours, the last day, and what happens to late passes.",
      level: 1,
      passage:
        "<p><strong>Notice: Riverside Community Pool Fall Hours</strong></p>" +
        "<p>" + N(1) + "Beginning Monday, September 8, the Riverside Community Pool will open only on weekends, from 10 a.m. to 4 p.m. " +
        N(2) + "Lap swim for adults runs 10 to 11 a.m.; the pool is open to all ages after that. " +
        N(3) + "The last day of the season is Sunday, September 28. " +
        N(4) + "Passes bought after August 15 can be carried over to next summer if the holder shows the pass at the front desk before the final day. " +
        N(5) + "Lost passes cannot be replaced or carried over. " +
        N(6) + "Send questions to the parks office." +
        "</p>",
      claims: [
        {
          id: "family",
          sol: "10.RI.1.B",
          stem: "According to the notice, a family that wants to swim together should arrive —",
          choices: [
            { letter: "A", text: "before 10 a.m. on a weekday" },
            { letter: "B", text: "after 11 a.m. on a weekend" },
            { letter: "C", text: "on any weekday afternoon" },
            { letter: "D", text: "after September 28" }
          ],
          correct: "B"
        },
        {
          id: "carry",
          sol: "10.RI.1.C",
          stem: "A pass bought on August 20 can be used next summer only if the holder —",
          choices: [
            { letter: "A", text: "buys a second pass at full price" },
            { letter: "B", text: "swims at least once every weekend" },
            { letter: "C", text: "shows it at the desk before September 28" },
            { letter: "D", text: "returns it to the parks office by mail" }
          ],
          correct: "C"
        },
        {
          id: "lost",
          sol: "10.RI.2.B",
          stem: "The author includes sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "make clear a limit on the carry-over offer" },
            { letter: "B", text: "encourage more people to buy passes" },
            { letter: "C", text: "explain why the pool closes in the fall" },
            { letter: "D", text: "describe the hours of the front desk" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "10.RI.1.A",
          stem: "The main purpose of the notice is to —",
          choices: [
            { letter: "A", text: "persuade readers to swim more often" },
            { letter: "B", text: "announce a new pool being built" },
            { letter: "C", text: "complain about the short season" },
            { letter: "D", text: "inform pass holders of new hours and rules" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-t-lantern",
      family: "G10",
      title: "The Lantern Walk",
      kind: "Vocabulary · 10.RV",
      blurb: "A neighborhood walk in October, with four words in context.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every October, our neighborhood holds a lantern walk, and this year Amani was <strong>reluctant</strong> to go, dragging her feet and saying she was too old for it. " +
        N(2) + "Her little brother, though, was <strong>exuberant</strong>, bouncing down the sidewalk and swinging his paper lantern in wide circles. " +
        N(3) + "By the second block the candles made a <strong>luminous</strong> line glowing all the way to the park. " +
        N(4) + "Amani stopped complaining. " +
        N(5) + "When we reached the park, she was the one who <strong>lingered</strong>, staying by the fountain long after everyone else had started home." +
        "</p>",
      claims: [
        {
          id: "reluctant",
          sol: "10.RV.1.B",
          stem: "In sentence 1, reluctant most nearly means —",
          choices: [
            { letter: "A", text: "excited" },
            { letter: "B", text: "unwilling" },
            { letter: "C", text: "forgetful" },
            { letter: "D", text: "proud" }
          ],
          correct: "B"
        },
        {
          id: "exuberant",
          sol: "10.RV.1.C",
          stem: "Which phrase from sentence 2 best shows the meaning of exuberant?",
          choices: [
            { letter: "A", text: "bouncing down the sidewalk" },
            { letter: "B", text: "her little brother, though" },
            { letter: "C", text: "his paper lantern" },
            { letter: "D", text: "by the second block" }
          ],
          correct: "A"
        },
        {
          id: "luminous",
          sol: "10.RV.1.B",
          stem: "The word luminous in sentence 3 shares a root with illuminate. Together with the context, luminous most nearly means —",
          choices: [
            { letter: "A", text: "long and narrow" },
            { letter: "B", text: "very loud" },
            { letter: "C", text: "giving off light" },
            { letter: "D", text: "tightly crowded" }
          ],
          correct: "C"
        },
        {
          id: "lingered",
          sol: "10.RV.1.C",
          stem: "In sentence 5, lingered means \"stayed longer than needed.\" Which detail in the sentence best supports this meaning?",
          choices: [
            { letter: "A", text: "when we reached the park at last" },
            { letter: "B", text: "she was the one, not her brother" },
            { letter: "C", text: "standing by the fountain" },
            { letter: "D", text: "after everyone else had started home" }
          ],
          correct: "D"
        },
        {
          id: "connote",
          sol: "10.RV.1.D",
          stem: "The author chose exuberant rather than happy to describe the brother. Compared with happy, exuberant suggests a feeling that is —",
          choices: [
            { letter: "A", text: "quieter and calmer" },
            { letter: "B", text: "more energetic and overflowing" },
            { letter: "C", text: "shorter and less honest" },
            { letter: "D", text: "hidden from other people" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-t-bakesale",
      family: "G10",
      title: "Bake Sale Math",
      kind: "Paired texts · 10.DSR",
      blurb: "A student's bold plan after a $212 bake sale, and a teacher's careful reply.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Post on the class page, by Jamal</strong></p>" +
        "<p>" + N(1) + "Our bake sale made $212 in three hours. " +
        N(2) + "That is proof that people will pay for homemade cookies. " +
        N(3) + "Next time we should bake twice as much and charge two dollars. " +
        N(4) + "We ran out by noon and turned away at least thirty people.</p>" +
        "<p><strong>Text 2 — Reply from Ms. Ortiz, class advisor</strong></p>" +
        "<p>" + N(5) + "Congratulations on the total. " +
        N(6) + "Before doubling anything, remember the sale fell on the day of the home game, when the hallway was packed. " +
        N(7) + "A regular Tuesday might bring half the buyers. " +
        N(8) + "Try one larger batch at the same price and count what is left." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "Both writers agree that —",
          choices: [
            { letter: "A", text: "the sale was a success" },
            { letter: "B", text: "the price should go up" },
            { letter: "C", text: "the game hurt sales" },
            { letter: "D", text: "the class should stop baking" }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes how the two texts differ?",
          choices: [
            { letter: "A", text: "Jamal wants a smaller sale; Ms. Ortiz wants a larger one." },
            { letter: "B", text: "Jamal draws a bold conclusion; Ms. Ortiz urges a careful test." },
            { letter: "C", text: "Jamal praises the cookies; Ms. Ortiz criticizes them." },
            { letter: "D", text: "Jamal blames the game; Ms. Ortiz blames the price." }
          ],
          correct: "B"
        },
        {
          id: "game",
          sol: "10.DSR.E",
          stem: "Ms. Ortiz mentions the home game in sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "praise the school's team" },
            { letter: "B", text: "explain why the hallway was closed" },
            { letter: "C", text: "complain about the noise" },
            { letter: "D", text: "suggest the crowd was larger than usual" }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          stem: "Select TWO sentences that together best support the idea that the $212 total might not repeat.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "together",
          sol: "10.DSR.E",
          stem: "Taken together, the texts suggest that the best next step is to —",
          choices: [
            { letter: "A", text: "cancel the next sale altogether" },
            { letter: "B", text: "raise the price to two dollars right away" },
            { letter: "C", text: "test a bigger batch without changing the price" },
            { letter: "D", text: "hold every future sale on a game day" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-t-cranes",
      family: "G10",
      title: "The Trumpet Case",
      kind: "Literary · 10.RL",
      blurb: "Nobody asked why Wen carried the case to lunch. On the last day, he opened it.",
      level: 1,
      passage:
        "<p>" + N(1) + "Nobody in the band knew why Wen carried his trumpet case to lunch every day, and nobody asked. " +
        N(2) + "On the last day before winter break, he opened it at the table. " +
        N(3) + "Inside, in the velvet where the trumpet belonged, were forty paper cranes, one for every member of the band. " +
        N(4) + "\"I ran out of practice-room time,\" he said, \"so I used lunch.\" " +
        N(5) + "He handed them out without ceremony and went back to his sandwich. " +
        N(6) + "For a moment the loudest table in the cafeteria was completely silent." +
        "</p>",
      claims: [
        {
          id: "wen",
          sol: "10.RL.1.C",
          stem: "Sentences 4 and 5 characterize Wen as —",
          choices: [
            { letter: "A", text: "boastful about his gift" },
            { letter: "B", text: "modest and matter-of-fact" },
            { letter: "C", text: "nervous about the band's reaction" },
            { letter: "D", text: "careless with his trumpet" }
          ],
          correct: "B"
        },
        {
          id: "withhold",
          sol: "10.RL.3.A",
          stem: "The author waits until sentence 3 to reveal what is in the case mainly to —",
          choices: [
            { letter: "A", text: "build curiosity before the reveal" },
            { letter: "B", text: "suggest that Wen has lost his trumpet" },
            { letter: "C", text: "describe the cafeteria in detail" },
            { letter: "D", text: "show that the band dislikes Wen" }
          ],
          correct: "A"
        },
        {
          id: "silent",
          sol: "10.RL.2.B",
          stem: "The silence in sentence 6 most likely shows that the band members are —",
          choices: [
            { letter: "A", text: "angry at being interrupted" },
            { letter: "B", text: "bored by the paper cranes" },
            { letter: "C", text: "moved by an unexpected kindness" },
            { letter: "D", text: "confused about where the trumpet is" }
          ],
          correct: "C"
        },
        {
          id: "ceremony",
          sol: "10.RL.2.C",
          stem: "In sentence 5, the phrase without ceremony most nearly means —",
          choices: [
            { letter: "A", text: "with a long speech" },
            { letter: "B", text: "very slowly" },
            { letter: "C", text: "in an angry way" },
            { letter: "D", text: "simply, without fuss" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-t-fog",
      family: "G10",
      title: "Fog as a Resource",
      kind: "Informational · 10.RI",
      blurb: "The gray blanket that cancels flights also waters forests and fills nets.",
      level: 2,
      passage:
        "<p>" + N(1) + "Sea fog forms when warm, moist air drifts over cold ocean water. " +
        N(2) + "The cold water chills the air until its moisture condenses into droplets fine enough to float. " +
        N(3) + "Along some coasts, this fog is a resource, not a nuisance. " +
        N(4) + "Redwood forests get much of their summer water from fog dripping off needles onto the ground. " +
        N(5) + "In some dry regions, villages stretch mesh nets on hillsides to catch fog and collect hundreds of liters of water a day. " +
        N(6) + "The same gray blanket that cancels flights also fills reservoirs." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the main idea of the passage about fog?",
          choices: [
            { letter: "A", text: "Fog is a danger to airplanes." },
            { letter: "B", text: "Fog forms only over cold water." },
            { letter: "C", text: "Fog can be a valuable source of water." },
            { letter: "D", text: "Redwoods cannot survive without fog." }
          ],
          correct: "C"
        },
        {
          id: "transition",
          sol: "10.RI.2.A",
          stem: "Sentence 3 functions in the passage as a —",
          choices: [
            { letter: "A", text: "summary of the first two sentences" },
            { letter: "B", text: "transition to the benefits of fog" },
            { letter: "C", text: "warning about coastal weather" },
            { letter: "D", text: "definition of the word fog" }
          ],
          correct: "B"
        },
        {
          id: "nets",
          sol: "10.RI.1.B",
          stem: "Which sentence gives evidence that people deliberately collect fog?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "condenses",
          sol: "10.RI.2.C",
          stem: "In sentence 2, the word condenses most nearly means —",
          choices: [
            { letter: "A", text: "changes from vapor into liquid" },
            { letter: "B", text: "spreads out and disappears" },
            { letter: "C", text: "heats up very rapidly" },
            { letter: "D", text: "freezes into solid ice" }
          ],
          correct: "A"
        },
        {
          id: "last",
          sol: "10.RI.2.B",
          stem: "The author ends with sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "argue that flights should not be canceled" },
            { letter: "B", text: "describe what fog looks like" },
            { letter: "C", text: "list the places where fog is common" },
            { letter: "D", text: "stress that fog has both costs and benefits" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-t-substitute",
      family: "G10",
      title: "The Substitute",
      kind: "Vocabulary · 10.RV",
      blurb: "One question on the board, five silent minutes, and four words in context.",
      level: 1,
      passage:
        "<p>" + N(1) + "The substitute, Mr. Odom, walked in with no lesson plan and a <strong>serene</strong> smile, as calm as if the room were empty instead of full of thirty restless sophomores. " +
        N(2) + "He wrote one question on the board and asked us to <strong>ponder</strong> it, quietly, for five whole minutes before anyone spoke. " +
        N(3) + "The room grew <strong>restive</strong>; chairs squeaked and pencils tapped. " +
        N(4) + "Then, one at a time, hands went up. " +
        N(5) + "By the end of the period, the discussion was so <strong>animated</strong> that nobody heard the bell." +
        "</p>",
      claims: [
        {
          id: "serene",
          sol: "10.RV.1.C",
          stem: "Which phrase from sentence 1 best helps the reader understand serene?",
          choices: [
            { letter: "A", text: "with no lesson plan" },
            { letter: "B", text: "as calm as if the room were empty" },
            { letter: "C", text: "full of thirty restless sophomores" },
            { letter: "D", text: "walked in and smiled" }
          ],
          correct: "B"
        },
        {
          id: "ponder",
          sol: "10.RV.1.B",
          stem: "In sentence 2, ponder most nearly means —",
          choices: [
            { letter: "A", text: "think carefully about" },
            { letter: "B", text: "copy down neatly" },
            { letter: "C", text: "answer out loud" },
            { letter: "D", text: "erase from memory" }
          ],
          correct: "A"
        },
        {
          id: "restive",
          sol: "10.RV.1.B",
          stem: "In sentence 3, restive is closest in meaning to —",
          choices: [
            { letter: "A", text: "calm and peaceful" },
            { letter: "B", text: "sleepy and dull" },
            { letter: "C", text: "uneasy and fidgety" },
            { letter: "D", text: "quiet and finished" }
          ],
          correct: "C"
        },
        {
          id: "animated",
          sol: "10.RV.1.D",
          stem: "The author describes the discussion as animated rather than loud. Compared with loud, animated suggests the discussion was —",
          choices: [
            { letter: "A", text: "too hard to hear clearly" },
            { letter: "B", text: "completely out of control" },
            { letter: "C", text: "wandering off the topic" },
            { letter: "D", text: "lively and full of interest" }
          ],
          correct: "D"
        },
        {
          id: "contrast",
          sol: "10.RV.1.A",
          stem: "The word restive in sentence 3 contrasts most sharply with which word from sentence 1?",
          choices: [
            { letter: "A", text: "substitute" },
            { letter: "B", text: "sophomores" },
            { letter: "C", text: "serene" },
            { letter: "D", text: "lesson" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── SHORT (nights 9–20) ───────────────────────── */
    {
      id: "g10-s-scoreboard",
      family: "G10",
      title: "Kept by Hand",
      kind: "Literary · 10.RL",
      blurb: "A broken scoreboard, a grandfather with a spiral notebook, and an empty seat.",
      level: 1,
      passage:
        "<p>" + N(1) + "The scoreboard at Halsey Field had been stuck on 3–3 since August. " +
        N(2) + "So Priyanka's grandfather kept score by hand, in a spiral notebook, from the top row of the bleachers. " +
        N(3) + "He had scored every game since she was nine, and he was not a loud fan; he never shouted, never argued with an umpire, only wrote. " +
        N(4) + "In the last game of the season, she looked up between pitches and saw that his seat was empty. " +
        N(5) + "Her stomach dropped. " +
        N(6) + "Then she found him at the fence behind home plate, notebook open, explaining the count to a small boy who was watching her. " +
        N(7) + "Priyanka stepped back into the box. " +
        N(8) + "She understood, swinging, that the notebook had never been about numbers; it was his way of saying, every inning, <em>I am here</em>. " +
        N(9) + "The ball cleared the fence. " +
        N(10) + "Rounding third, she saw him write something down and underline it twice." +
        "</p>",
      claims: [
        {
          id: "grandfather",
          sol: "10.RL.1.C",
          stem: "Sentence 3 characterizes the grandfather as —",
          choices: [
            { letter: "A", text: "quiet but constant" },
            { letter: "B", text: "bored by softball" },
            { letter: "C", text: "critical of umpires" },
            { letter: "D", text: "easily distracted" }
          ],
          correct: "A"
        },
        {
          id: "tension",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the moment of greatest tension in the story?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "B"
        },
        {
          id: "boy",
          sol: "10.RL.2.B",
          stem: "The detail of the grandfather explaining the count to a boy in sentence 6 mainly suggests that he —",
          choices: [
            { letter: "A", text: "has lost interest in Priyanka's game" },
            { letter: "B", text: "is training the boy to keep score in his place" },
            { letter: "C", text: "shares his attention generously without abandoning her" },
            { letter: "D", text: "is unsure of the rules of the game" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the passage about the notebook?",
          choices: [
            { letter: "A", text: "Winning matters more than how a game is played." },
            { letter: "B", text: "Old scoreboards should be replaced quickly." },
            { letter: "C", text: "Athletes perform best when no one is watching." },
            { letter: "D", text: "Quiet, steady support can mean more than loud praise." }
          ],
          correct: "D"
        },
        {
          id: "italics",
          sol: "10.RL.2.C",
          stem: "The author sets the words I am here apart in sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "show that the grandfather says them aloud" },
            { letter: "B", text: "present the message his scorekeeping sends" },
            { letter: "C", text: "suggest that Priyanka is talking to herself" },
            { letter: "D", text: "mark the end of the game" }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "10.RL.3.A",
          stem: "The author opens with the broken scoreboard in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "explain why the grandfather keeps score by hand" },
            { letter: "B", text: "show that the field is unsafe" },
            { letter: "C", text: "suggest that the season was disappointing" },
            { letter: "D", text: "describe the weather in August" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-s-bakery",
      family: "G10",
      title: "Night Shift, Bakery",
      kind: "Poetry · 10.RL",
      blurb: "Ten lines: a mother shaping loaves at four in the morning, and a child doing homework in the glow.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At four, before the streetlights blink and fade,<br>" +
        L(2) + "my mother's hands are already white with flour,<br>" +
        L(3) + "shaping loaves that strangers will not see her make,<br>" +
        L(4) + "each one a small warm secret, hour by hour.<br>" +
        L(5) + "I do my homework on a stool beside the oven's glow;<br>" +
        L(6) + "she calls my grades the loaves she cannot bake,<br>" +
        L(7) + "the ones she shapes but has to let me carry.<br>" +
        L(8) + "At six the sun comes up like something ordered fresh,<br>" +
        L(9) + "and we walk out together, both dusted white,<br>" +
        L(10) + "into a street that smells of everything she made." +
        "</p>",
      claims: [
        {
          id: "loaves",
          sol: "10.RL.2.A",
          stem: "In lines 6–7, comparing the speaker's grades to loaves suggests that the mother —",
          choices: [
            { letter: "A", text: "thinks school is easier than baking" },
            { letter: "B", text: "sees her child's success as work she has helped shape" },
            { letter: "C", text: "wishes the speaker would work at the bakery" },
            { letter: "D", text: "is disappointed in the speaker's grades" }
          ],
          correct: "B"
        },
        {
          id: "secret",
          sol: "10.RL.2.C",
          stem: "In line 4, calling each loaf a small warm secret mainly conveys that the mother's work is —",
          choices: [
            { letter: "A", text: "dishonest and hidden" },
            { letter: "B", text: "quick and careless" },
            { letter: "C", text: "unnoticed but full of care" },
            { letter: "D", text: "dangerous and hot" }
          ],
          correct: "C"
        },
        {
          id: "sunrise",
          sol: "10.RL.2.B",
          stem: "The simile in line 8, like something ordered fresh, links the sunrise to —",
          choices: [
            { letter: "A", text: "the bakery's products" },
            { letter: "B", text: "the speaker's homework" },
            { letter: "C", text: "the fading streetlights" },
            { letter: "D", text: "the mother's hands" }
          ],
          correct: "A"
        },
        {
          id: "central",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses the central idea of the poem about the bakery?",
          choices: [
            { letter: "A", text: "Night work is lonely and unrewarding." },
            { letter: "B", text: "Children should follow their parents' trade." },
            { letter: "C", text: "Bread tastes best when it is baked at dawn." },
            { letter: "D", text: "A parent's hidden labor shapes a child's future." }
          ],
          correct: "D"
        },
        {
          id: "dusted",
          sol: "10.RL.3.A",
          stem: "The poet describes the speaker and the mother as both dusted white in line 9 mainly to —",
          choices: [
            { letter: "A", text: "show that the speaker has been baking too" },
            { letter: "B", text: "suggest that they share in the same work and life" },
            { letter: "C", text: "indicate that it has begun to snow" },
            { letter: "D", text: "explain why they leave the bakery at six" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-s-clock",
      family: "G10",
      title: "Twenty-Two Years at 2:15",
      kind: "Literary · 10.RL",
      blurb: "A clock the whole street learned to ignore, and the summer sweeper who climbed up anyway.",
      level: 2,
      passage:
        "<p>" + N(1) + "The clock above the hardware store had said 2:15 as long as Idris could remember, and the street had learned to ignore it. " +
        N(2) + "When he took the summer sweeping job, the owner, Mrs. Petrakis, said the clock was not his concern. " +
        N(3) + "He climbed up anyway one slow Wednesday and found only dry leaves jammed behind the minute hand. " +
        N(4) + "It took him ten minutes. " +
        N(5) + "By evening the clock read 6:40, and something strange happened on the block. " +
        N(6) + "People stopped and looked up. " +
        N(7) + "The bus driver, idling at the corner, tapped his wrist and gave a thumbs-up. " +
        N(8) + "Mrs. Petrakis came out, arms crossed, and studied it a long moment. " +
        N(9) + "\"Twenty-two years,\" she said. " +
        N(10) + "\"Every one of them, I meant to do that.\" " +
        N(11) + "She did not exactly thank him, but next morning a ladder stood by the door with a list of things broken so long they had turned invisible." +
        "</p>",
      claims: [
        {
          id: "idris",
          sol: "10.RL.1.C",
          stem: "Sentences 3 and 4 characterize Idris as —",
          choices: [
            { letter: "A", text: "disobedient and reckless" },
            { letter: "B", text: "quietly capable and curious" },
            { letter: "C", text: "eager for praise" },
            { letter: "D", text: "afraid of heights" }
          ],
          correct: "B"
        },
        {
          id: "invisible",
          sol: "10.RL.2.A",
          stem: "In sentence 11, broken so long they had turned invisible means the problems —",
          choices: [
            { letter: "A", text: "were hidden on purpose" },
            { letter: "B", text: "had been repaired secretly" },
            { letter: "C", text: "had stopped being noticed" },
            { letter: "D", text: "were too small to matter" }
          ],
          correct: "C"
        },
        {
          id: "petrakis",
          sol: "10.RL.2.B",
          stem: "Sentences 9 and 10 suggest that Mrs. Petrakis feels —",
          choices: [
            { letter: "A", text: "rueful that she never fixed the clock herself" },
            { letter: "B", text: "angry that Idris ignored her instructions" },
            { letter: "C", text: "certain that the clock will break again" },
            { letter: "D", text: "proud of the store's long history" }
          ],
          correct: "A"
        },
        {
          id: "block",
          sol: "10.RL.3.A",
          stem: "The author includes sentences 6 and 7 mainly to —",
          choices: [
            { letter: "A", text: "show that the street has become noisy" },
            { letter: "B", text: "explain how the clock mechanism works" },
            { letter: "C", text: "list the regular customers of the store" },
            { letter: "D", text: "show the small change the working clock creates" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does the story of the clock most clearly develop?",
          choices: [
            { letter: "A", text: "Employees should always follow instructions." },
            { letter: "B", text: "Old buildings are not worth repairing." },
            { letter: "C", text: "Time passes more quickly in summer." },
            { letter: "D", text: "Small acts of care can wake a whole community." }
          ],
          correct: "D"
        },
        {
          id: "turning",
          sol: "10.RL.1.B",
          stem: "The turning point in the story's action comes when —",
          choices: [
            { letter: "A", text: "Idris takes the summer job" },
            { letter: "B", text: "Idris climbs up to the clock" },
            { letter: "C", text: "the bus driver gives a thumbs-up" },
            { letter: "D", text: "Mrs. Petrakis crosses her arms" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-s-roadsalt",
      family: "G10",
      title: "Salt on the Roads",
      kind: "Informational · 10.RI",
      blurb: "Why a handful of salt keeps a highway from freezing, and what it costs.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every winter, road crews spread tons of salt on highways, and the reason is simple chemistry. " +
        N(2) + "Pure water freezes at 32 degrees Fahrenheit. " +
        N(3) + "Dissolved salt gets in the way of water molecules trying to lock into ice crystals, so the mixture must get colder before it freezes. " +
        N(4) + "On a road, salt melts into the thin film of moisture on the surface and creates a brine that stays liquid down to about 15 degrees. " +
        N(5) + "Below that, ordinary salt stops working, and crews switch to sand for traction or to other chemicals that work at lower temperatures. " +
        N(6) + "Salt is cheap and effective, but it is not free of costs. " +
        N(7) + "It rusts cars and bridges, and when it washes into streams it can harm fish and plants. " +
        N(8) + "Some cities now spray salt brine before a storm instead of spreading crystals after, using up to 30 percent less salt." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "The passage about road salt is mainly about —",
          choices: [
            { letter: "A", text: "how road salt works and what it costs" },
            { letter: "B", text: "why fish die in winter streams" },
            { letter: "C", text: "the safest way to drive on ice" },
            { letter: "D", text: "the history of highway road crews" }
          ],
          correct: "A"
        },
        {
          id: "fifteen",
          sol: "10.RI.1.B",
          stem: "According to the passage, ordinary salt stops being useful on roads below about —",
          choices: [
            { letter: "A", text: "32 degrees" },
            { letter: "B", text: "30 degrees" },
            { letter: "C", text: "15 degrees" },
            { letter: "D", text: "0 degrees" }
          ],
          correct: "C"
        },
        {
          id: "shift",
          sol: "10.RI.2.A",
          stem: "Sentences 6 and 7 mark a shift in the passage from —",
          choices: [
            { letter: "A", text: "cause to effect" },
            { letter: "B", text: "benefits to drawbacks" },
            { letter: "C", text: "past to present" },
            { letter: "D", text: "problem to solution" }
          ],
          correct: "B"
        },
        {
          id: "brine",
          sol: "10.RI.2.C",
          stem: "In sentence 4, the word brine most nearly means —",
          choices: [
            { letter: "A", text: "a layer of ice" },
            { letter: "B", text: "a kind of sand" },
            { letter: "C", text: "a highway surface" },
            { letter: "D", text: "salty water" }
          ],
          correct: "D"
        },
        {
          id: "reduce",
          sol: "10.RI.1.C",
          stem: "Which sentence best supports the idea that there are ways to use less salt?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "D"
        },
        {
          id: "baseline",
          sol: "10.RI.2.B",
          stem: "The author includes sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "give a baseline before explaining how salt changes it" },
            { letter: "B", text: "argue that water on roads is dangerous" },
            { letter: "C", text: "describe what ice crystals look like" },
            { letter: "D", text: "compare Fahrenheit with Celsius" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-s-cleanup",
      family: "G10",
      title: "Park Cleanup Sign-Up",
      kind: "Functional text · 10.RI",
      blurb: "Check-in times, the creek bank, the service-hours log, and what rain does not do.",
      level: 1,
      passage:
        "<p><strong>Maple Creek Park Cleanup — Saturday, April 12</strong></p>" +
        "<p>" + N(1) + "Volunteers should check in at the picnic shelter between 8:30 and 9:00 a.m.; groups arriving after 9:15 will not be assigned a zone. " +
        N(2) + "Wear closed-toe shoes and long pants, since several zones run along the creek bank. " +
        N(3) + "Gloves, trash bags, and grabbers will be provided, but bring your own water bottle. " +
        N(4) + "Students who need service hours must sign the log at check-in and again at check-out; hours are recorded only for volunteers who do both. " +
        N(5) + "The event ends at noon with a free lunch at the shelter. " +
        N(6) + "In case of lightning, the cleanup will be canceled by 7:30 a.m. by text to everyone who registered online. " +
        N(7) + "Rain alone does not cancel the event. " +
        N(8) + "Questions: contact the Parks Volunteer Office." +
        "</p>",
      claims: [
        {
          id: "log",
          sol: "10.RI.1.B",
          stem: "A student who signs the log only at check-in will —",
          choices: [
            { letter: "A", text: "be assigned to the creek zone" },
            { letter: "B", text: "not receive service hours" },
            { letter: "C", text: "receive half of the hours" },
            { letter: "D", text: "be sent home before lunch" }
          ],
          correct: "B"
        },
        {
          id: "late",
          sol: "10.RI.1.C",
          stem: "A group that arrives at 9:20 a.m. can expect to —",
          choices: [
            { letter: "A", text: "be given a zone right away" },
            { letter: "B", text: "eat lunch before working" },
            { letter: "C", text: "be left without a zone" },
            { letter: "D", text: "receive gloves but no bags" }
          ],
          correct: "C"
        },
        {
          id: "rain",
          sol: "10.RI.2.B",
          stem: "The author includes sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "prevent a likely misunderstanding about weather" },
            { letter: "B", text: "explain why lightning is dangerous" },
            { letter: "C", text: "encourage volunteers to bring umbrellas" },
            { letter: "D", text: "describe the typical spring climate" }
          ],
          correct: "A"
        },
        {
          id: "creek",
          sol: "10.RI.2.A",
          stem: "Why does sentence 2 mention the creek bank?",
          choices: [
            { letter: "A", text: "to warn that swimming is not allowed" },
            { letter: "B", text: "to describe where lunch is served" },
            { letter: "C", text: "to show how large the park is" },
            { letter: "D", text: "to explain the reason for the clothing rule" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "10.RI.1.A",
          stem: "The main purpose of the sign-up text is to —",
          choices: [
            { letter: "A", text: "persuade readers to volunteer" },
            { letter: "B", text: "give volunteers the details they need" },
            { letter: "C", text: "report on last year's cleanup" },
            { letter: "D", text: "describe the history of the park" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-s-redleaves",
      family: "G10",
      title: "Why Leaves Turn Red",
      kind: "Informational · 10.RI",
      blurb: "Yellow is easy to explain. Red costs the tree something, and scientists still debate why.",
      level: 2,
      passage:
        "<p>" + N(1) + "Yellow leaves are easy to explain: as trees stop making chlorophyll, the green fades and yellow pigments present all summer show through. " +
        N(2) + "Red is a different story. " +
        N(3) + "Red pigments, called anthocyanins, are not hiding under the green; the tree makes them fresh in autumn, spending sugar just as it prepares to drop the leaf. " +
        N(4) + "Why waste energy on a leaf that is about to die? " +
        N(5) + "One leading explanation is that the red acts as a sunscreen. " +
        N(6) + "As a leaf breaks down, the tree pulls nutrients back into the branch, and bright sunlight can disrupt that process; anthocyanins may shade the leaf long enough for the tree to finish. " +
        N(7) + "Another idea is that the color warns insects away from well-defended trees. " +
        N(8) + "Neither explanation is settled, and the two may both be true. " +
        N(9) + "What is clear is that a red maple in October is not fading; it is working." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the passage about leaves?",
          choices: [
            { letter: "A", text: "Yellow leaves are more common than red ones in most forests." },
            { letter: "B", text: "Trees make red pigment on purpose, for reasons still debated." },
            { letter: "C", text: "Bright sunlight in October damages leaves before they fall." },
            { letter: "D", text: "Insects avoid trees whose leaves have turned red." }
          ],
          correct: "B"
        },
        {
          id: "yellow",
          sol: "10.RI.2.A",
          stem: "The author begins with yellow leaves in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "set up a contrast with the puzzle of red" },
            { letter: "B", text: "argue that yellow is the more beautiful color" },
            { letter: "C", text: "explain how chlorophyll is produced" },
            { letter: "D", text: "describe a forest in summer" }
          ],
          correct: "A"
        },
        {
          id: "uncertain",
          sol: "10.RI.1.C",
          stem: "Which sentence presents an idea as uncertain rather than as established fact?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "sunscreen",
          sol: "10.RI.2.C",
          stem: "In sentence 5, the word sunscreen is used to suggest that anthocyanins —",
          choices: [
            { letter: "A", text: "make the leaf smell sweet" },
            { letter: "B", text: "attract more sunlight to the leaf" },
            { letter: "C", text: "lower the leaf's temperature" },
            { letter: "D", text: "protect the leaf from light damage" }
          ],
          correct: "D"
        },
        {
          id: "costly",
          sol: "10.RI.1.B",
          stem: "Which detail best supports the claim that making red pigment costs the tree something?",
          choices: [
            { letter: "A", text: "the green fades (sentence 1)" },
            { letter: "B", text: "spending sugar (sentence 3)" },
            { letter: "C", text: "warns insects away (sentence 7)" },
            { letter: "D", text: "the two may both be true (sentence 8)" }
          ],
          correct: "B"
        },
        {
          id: "question",
          sol: "10.RI.2.B",
          stem: "The question in sentence 4 mainly serves to —",
          choices: [
            { letter: "A", text: "show that the author does not know the answer" },
            { letter: "B", text: "criticize trees for wasting energy" },
            { letter: "C", text: "frame the puzzle the rest of the passage explores" },
            { letter: "D", text: "ask readers to do their own research" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-s-debate",
      family: "G10",
      title: "The Debate Partner",
      kind: "Vocabulary · 10.RV",
      blurb: "A planner and an improviser are paired for the district debate; four words in context.",
      level: 2,
      passage:
        "<p>" + N(1) + "When Coach Freeman paired me with Lucía for the district debate, I was <strong>apprehensive</strong>; she was said to be brilliant and impossible to work with. " +
        N(2) + "She was <strong>meticulous</strong>, color-coding every note card and rewriting our opening three times before lunch. " +
        N(3) + "I, on the other hand, liked to improvise, and I said so. " +
        N(4) + "\"Improvising is what people call it when they didn't prepare,\" she said, not unkindly. " +
        N(5) + "By the third week, though, something had shifted. " +
        N(6) + "Her preparation gave me a floor to stand on, and my flexibility gave her a way out when a judge asked something no card had predicted. " +
        N(7) + "In the final round, our opponents were sharp but <strong>rigid</strong>; when the topic took an unexpected turn, they kept reading their notes while we adjusted. " +
        N(8) + "We won, and afterward Lucía admitted, with a <strong>grudging</strong> smile, that improvising had not hurt." +
        "</p>",
      claims: [
        {
          id: "apprehensive",
          sol: "10.RV.1.B",
          stem: "In sentence 1, apprehensive most nearly means —",
          choices: [
            { letter: "A", text: "excited" },
            { letter: "B", text: "worried" },
            { letter: "C", text: "confident" },
            { letter: "D", text: "annoyed" }
          ],
          correct: "B"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.C",
          stem: "Which detail from sentence 2 best shows the meaning of meticulous?",
          choices: [
            { letter: "A", text: "rewriting our opening" },
            { letter: "B", text: "three times before lunch" },
            { letter: "C", text: "color-coding every note card" },
            { letter: "D", text: "our opening" }
          ],
          correct: "C"
        },
        {
          id: "rigid",
          sol: "10.RV.1.B",
          stem: "In sentence 7, rigid describes opponents who —",
          choices: [
            { letter: "A", text: "spoke too quietly" },
            { letter: "B", text: "lacked preparation" },
            { letter: "C", text: "argued angrily" },
            { letter: "D", text: "were unable to adapt" }
          ],
          correct: "D"
        },
        {
          id: "grudging",
          sol: "10.RV.1.D",
          stem: "The author describes Lucía's smile in sentence 8 as grudging rather than warm. Compared with warm, grudging suggests that she —",
          choices: [
            { letter: "A", text: "admits the point reluctantly" },
            { letter: "B", text: "is secretly angry about winning" },
            { letter: "C", text: "does not understand the joke" },
            { letter: "D", text: "is smiling at someone else" }
          ],
          correct: "A"
        },
        {
          id: "improvising",
          sol: "10.RV.1.A",
          stem: "Lucía's remark in sentence 4 gives the word improvising a connotation of —",
          choices: [
            { letter: "A", text: "creativity" },
            { letter: "B", text: "courage" },
            { letter: "C", text: "laziness" },
            { letter: "D", text: "teamwork" }
          ],
          correct: "C"
        },
        {
          id: "balance",
          sol: "10.RV.1.A",
          stem: "Sentence 6 helps the reader see the narrator's improvising as —",
          choices: [
            { letter: "A", text: "a weakness that Lucía corrected" },
            { letter: "B", text: "a strength that balanced Lucía's planning" },
            { letter: "C", text: "a habit the coach had forbidden" },
            { letter: "D", text: "the reason they nearly lost" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-s-latefees",
      family: "G10",
      title: "End the Fines?",
      kind: "Paired texts · 10.DSR",
      blurb: "A student columnist wants library fines gone; the librarian agrees on the goal but not the numbers.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Student column, by Noor Haddad</strong></p>" +
        "<p>" + N(1) + "Our library still charges ten cents a day for late books, and it is time to stop. " +
        N(2) + "Last year, fines totaled just $340, less than one set of textbooks costs. " +
        N(3) + "Meanwhile, twenty-six students lost borrowing privileges for owing more than five dollars. " +
        N(4) + "A fine does not teach responsibility; it teaches students that the library is a place of trouble. " +
        N(5) + "Three nearby public libraries have dropped fines, and return rates did not fall. " +
        N(6) + "Ours would not either.</p>" +
        "<p><strong>Text 2 — Reply from Mr. Beltran, librarian</strong></p>" +
        "<p>" + N(7) + "I agree that a student blocked from borrowing is a student we failed. " +
        N(8) + "But the numbers need a closer look. " +
        N(9) + "The libraries Noor cites replaced fines with a rule that a book a month overdue counts as lost and must be paid for: a bigger bill, not a smaller one. " +
        N(10) + "I would end fines for any returned book, however late, and charge only for books never returned. " +
        N(11) + "The goal is books on shelves, not coins in a jar." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "Both writers would most likely agree that —",
          choices: [
            { letter: "A", text: "fines raise too little money to be worth collecting" },
            { letter: "B", text: "students should never pay for lost books" },
            { letter: "C", text: "blocking students from borrowing is a bad outcome" },
            { letter: "D", text: "the public libraries made a serious mistake" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes a key difference between the two texts?",
          choices: [
            { letter: "A", text: "Noor uses numbers; Mr. Beltran uses none." },
            { letter: "B", text: "Noor supports the library; Mr. Beltran opposes it." },
            { letter: "C", text: "Noor writes about public libraries; Mr. Beltran writes about textbooks." },
            { letter: "D", text: "Noor would end all charges; Mr. Beltran would keep one for lost books." }
          ],
          correct: "D"
        },
        {
          id: "challenge",
          sol: "10.DSR.E",
          stem: "Mr. Beltran's point in sentence 9 mainly challenges Noor's use of —",
          choices: [
            { letter: "A", text: "the $340 total in sentence 2" },
            { letter: "B", text: "the twenty-six students in sentence 3" },
            { letter: "C", text: "the public libraries in sentence 5" },
            { letter: "D", text: "the claim about responsibility in sentence 4" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          stem: "Select TWO sentences that together best support Noor's claim that fines do more harm than good.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "endings",
          sol: "10.DSR.E",
          stem: "The final sentences of the two texts (6 and 11) are alike in that each —",
          choices: [
            { letter: "A", text: "states a conclusion in a short, firm sentence" },
            { letter: "B", text: "cites a statistic from the previous year" },
            { letter: "C", text: "quotes directly from the other writer's text" },
            { letter: "D", text: "asks the reader a direct question" }
          ],
          correct: "A"
        },
        {
          id: "compromise",
          sol: "10.DSR.E",
          stem: "Taken together, the texts suggest that the most likely compromise is to —",
          choices: [
            { letter: "A", text: "keep fines but lower them to five cents" },
            { letter: "B", text: "block more students from borrowing" },
            { letter: "C", text: "copy the public libraries exactly" },
            { letter: "D", text: "end daily fines but charge for books never returned" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
