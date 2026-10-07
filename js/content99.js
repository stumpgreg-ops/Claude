/* SOL Labyrinth — Grade 11 expansion pack file 99 (mid tier, levels 51-64): a school play backstage, bridges and
 * engineering, beekeeping, river cleanups. Original text only; no real people or published works.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── LITERARY ───────────────────────── */
    {
      id: "g11-rl-c99-cuelight",
      family: "G11",
      title: "The Cue Light",
      kind: "Literary · 11.RL",
      blurb: "Closing night, a dead headset, and a backup signal nobody thought they would need.",
      level: 1,
      passage:
        "<p>" + N(1) + "Ines Varga had called every cue of <em>The Lantern Keeper</em> for three nights from a stool in the stage-left wing, a binder open on her knees and a headset clamped over her braids. " +
        N(2) + "On closing night, halfway through the second act, the headset hissed, crackled, and went silent. " +
        N(3) + "She tapped the earpiece, then the belt pack, then the earpiece again, the way people shake a pen that has already run dry. " +
        N(4) + "Nothing. " +
        N(5) + "Somewhere above the stage, Desmond Ruiz was waiting on the fly rail for her voice to tell him when to lower the painted moon. " +
        N(6) + "Across the dark, the lighting booth was waiting too, and the actors onstage, who knew nothing about headsets, were walking steadily toward the line that needed the moon. " +
        N(7) + "Ines remembered the first week of tech rehearsals, when Desmond had insisted that they agree on a backup signal, and she had rolled her eyes and agreed mostly to end the conversation. " +
        N(8) + "Two short flashes meant stand by; one long beam meant go. " +
        N(9) + "She found the small flashlight in the binder pocket, aimed it up toward the rail, and pressed the button twice. " +
        N(10) + "A gloved hand rose out of the shadows and waved once. " +
        N(11) + "Onstage, Marisol reached the line, \"Then let the old light rise,\" and Ines held the beam steady on the rail. " +
        N(12) + "The moon descended, smooth and silver, exactly on the word \"rise,\" and the audience made the small sound audiences make when something beautiful happens on time. " +
        N(13) + "The booth, seeing the moon move, brought up the blue wash a half second late, but no one in the seats could have noticed. " +
        N(14) + "After the curtain call, the director gathered the cast at center stage and thanked them one by one while the crew coiled cables in the wings. " +
        N(15) + "Desmond climbed down the ladder, pulled off his gloves, and found Ines winding the dead headset's cord around her hand. " +
        N(16) + "\"Told you we'd need it,\" he said. " +
        N(17) + "\"You did,\" she said, and she handed him the flashlight, still warm from her grip, as if it were a trophy only the two of them could see." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does \"The Cue Light\" most clearly develop?",
          choices: [
            { letter: "A", text: "Performers deserve more praise than the crews who support them." },
            { letter: "B", text: "Planning that seems pointless can quietly rescue an important moment." },
            { letter: "C", text: "Theater technology is too unreliable to be trusted during a show." },
            { letter: "D", text: "Working alone is usually safer than depending on a partner." }
          ],
          correct: "B"
        },
        {
          id: "rolled",
          sol: "11.RL.1.B",
          stem: "The detail in sentence 7 that Ines rolled her eyes at the backup plan mainly serves to —",
          choices: [
            { letter: "A", text: "show that she once undervalued the plan that saves the scene" },
            { letter: "B", text: "suggest that she and Desmond dislike working with each other" },
            { letter: "C", text: "explain why the lighting booth misses its cue in sentence 13" },
            { letter: "D", text: "reveal that she had forgotten the signal until Desmond waved" }
          ],
          correct: "A"
        },
        {
          id: "ines",
          sol: "11.RL.1.C",
          stem: "Which statement best describes Ines during the headset failure?",
          choices: [
            { letter: "A", text: "She panics at first and must be rescued by Desmond's quick thinking." },
            { letter: "B", text: "She blames the equipment and waits for the director to step in." },
            { letter: "C", text: "She hides the problem from the crew to protect her reputation." },
            { letter: "D", text: "She stays composed and quickly turns to the plan she once dismissed." }
          ],
          correct: "D"
        },
        {
          id: "pen",
          sol: "11.RL.2.A",
          stem: "In sentence 3, comparing Ines's tapping to shaking a pen that has run dry suggests that she —",
          choices: [
            { letter: "A", text: "is angry enough to break the headset on purpose" },
            { letter: "B", text: "has seen the same headset fail in earlier shows" },
            { letter: "C", text: "is trying a fix she already suspects will not work" },
            { letter: "D", text: "wants to take notes in her binder during the scene" }
          ],
          correct: "C"
        },
        {
          id: "trophy",
          sol: "11.RL.2.B",
          stem: "Describing the flashlight as a trophy only the two of them could see (sentence 17) creates a tone that is —",
          choices: [
            { letter: "A", text: "bitter about being ignored" },
            { letter: "B", text: "quietly and privately proud" },
            { letter: "C", text: "nervous about the next show" },
            { letter: "D", text: "playful and openly boastful" }
          ],
          correct: "B"
        },
        {
          id: "descended",
          sol: "11.RL.2.C",
          stem: "In sentence 12, the word descended most nearly means —",
          choices: [
            { letter: "A", text: "glowed" },
            { letter: "B", text: "wobbled" },
            { letter: "C", text: "vanished" },
            { letter: "D", text: "came down" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "11.RL.3.A",
          stem: "\"The Cue Light\" is structured mainly around —",
          choices: [
            { letter: "A", text: "a sudden problem during a show and the half-forgotten plan that solves it" },
            { letter: "B", text: "a series of rehearsals that show the crew slowly learning the play" },
            { letter: "C", text: "a conflict between the director and crew over who deserves the credit" },
            { letter: "D", text: "a flashback to tech week that explains why Ines joined the crew" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rl-c99-hivesummer",
      family: "G11",
      title: "Move Like Syrup",
      kind: "Literary · 11.RL",
      blurb: "A great-aunt's trembling hands, six white hives, and a summer Hana stops watching from the porch.",
      level: 2,
      passage:
        "<p>" + N(1) + "Great-Aunt Fumiko kept six hives at the edge of her orchard, white boxes stacked like a small, humming town. " +
        N(2) + "Hana had visited every summer since she was seven, and every summer she had watched them from the porch, a glass of barley tea sweating in her hand, as far from the bees as politeness allowed. " +
        N(3) + "This year her aunt handed her a veil before breakfast. " +
        N(4) + "\"My hands have started to argue with me,\" Fumiko said, holding them up, and Hana saw that they trembled slightly, like leaves in a breeze no one else could feel. " +
        N(5) + "\"The frames are heavy in July. I need a second pair.\" " +
        N(6) + "The walk to the hives felt longer than the orchard actually was. " +
        N(7) + "Fumiko lit the smoker and puffed cool gray smoke at the entrance of the first box, explaining in a low voice that the smoke made the bees think of fire and turn to their honey instead of their visitors. " +
        N(8) + "\"Move like syrup,\" she said. \"Bees forgive slowness. They do not forgive surprise.\" " +
        N(9) + "Hana lifted the lid with both hands, and the hum rose around her like water filling a bath. " +
        N(10) + "A bee landed on her glove, then another, and she felt her shoulders climb toward her ears. " +
        N(11) + "She thought about dropping the lid and running, and she also thought about her aunt's trembling hands. " +
        N(12) + "She breathed out slowly and let her shoulders fall. " +
        N(13) + "Gripping the wooden ends, she drew out a frame so heavy with capped honey that it bent her wrists, and she held it up to the sun. " +
        N(14) + "The comb glowed amber, every cell sealed with a lid of wax as neat as stitching. " +
        N(15) + "\"Good,\" Fumiko said, which from her was a long speech. " +
        N(16) + "They worked through all six hives before the heat arrived, and by the last one Hana was humming without noticing, low and steady, almost in the same key as the bees. " +
        N(17) + "That evening on the porch, Fumiko poured the tea, and for the first time Hana did not choose the chair farthest from the orchard." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best supported by Hana's morning at the hives?",
          choices: [
            { letter: "A", text: "Old traditions should be preserved exactly as they were first taught." },
            { letter: "B", text: "Fear of animals is usually based on stories rather than experience." },
            { letter: "C", text: "Caring about someone can give a person the courage to face a fear." },
            { letter: "D", text: "Hard work is most rewarding when it is praised in front of others." }
          ],
          correct: "C"
        },
        {
          id: "porch",
          sol: "11.RL.1.B",
          stem: "The detail in sentence 2 that Hana stayed as far from the bees as politeness allowed mainly serves to —",
          choices: [
            { letter: "A", text: "establish her earlier fear so that her change later is clear" },
            { letter: "B", text: "suggest that Fumiko had forbidden her from going near the hives" },
            { letter: "C", text: "show that Hana found her yearly visits dull and too long" },
            { letter: "D", text: "explain why the orchard seems larger than it actually is" }
          ],
          correct: "A"
        },
        {
          id: "good",
          sol: "11.RL.1.C",
          stem: "The narrator's remark that \"Good\" was a long speech for Fumiko (sentence 15) reveals that Fumiko —",
          choices: [
            { letter: "A", text: "is disappointed that Hana worked so slowly" },
            { letter: "B", text: "prefers to give instructions rather than praise" },
            { letter: "C", text: "cannot speak much because of her failing health" },
            { letter: "D", text: "rarely praises anyone, so the word carries weight" }
          ],
          correct: "D"
        },
        {
          id: "town",
          sol: "11.RL.2.A",
          stem: "In sentence 1, describing the hives as a small, humming town suggests that the colonies are —",
          choices: [
            { letter: "A", text: "noisy and dangerous to anyone nearby" },
            { letter: "B", text: "busy communities with order of their own" },
            { letter: "C", text: "crowded together because the orchard is small" },
            { letter: "D", text: "old and in need of careful repair" }
          ],
          correct: "B"
        },
        {
          id: "syrup",
          sol: "11.RL.2.B",
          stem: "Fumiko's advice to \"Move like syrup\" in sentence 8 mainly emphasizes the need to —",
          choices: [
            { letter: "A", text: "keep the honey from spilling while lifting it" },
            { letter: "B", text: "finish the work before the day becomes hot" },
            { letter: "C", text: "move slowly and smoothly so the bees stay calm" },
            { letter: "D", text: "stay close behind Fumiko at every step" }
          ],
          correct: "C"
        },
        {
          id: "capped",
          sol: "11.RL.2.C",
          stem: "In sentence 13, the word capped most nearly means —",
          choices: [
            { letter: "A", text: "sealed over" },
            { letter: "B", text: "darkened" },
            { letter: "C", text: "limited" },
            { letter: "D", text: "spilled out" }
          ],
          correct: "A"
        },
        {
          id: "chair",
          sol: "11.RL.3.A",
          stem: "How does the final sentence of \"Move Like Syrup\" resolve the story?",
          choices: [
            { letter: "A", text: "It shows that Fumiko will soon stop keeping bees altogether." },
            { letter: "B", text: "It reveals that Hana plans to start hives of her own at home." },
            { letter: "C", text: "It suggests that Hana is too tired to sit anywhere else." },
            { letter: "D", text: "Her choice of seat shows that her fear has given way to ease." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c99-rivets",
      family: "G11",
      title: "Rivets",
      kind: "Literary · 11.RL",
      blurb: "A bridge inspector, a tiny hammer, and a son who would rather design glass towers.",
      level: 3,
      passage:
        "<p>" + N(1) + "My mother listens to bridges the way some people listen to music, with her head tilted and her eyes half closed. " +
        N(2) + "On the Saturday I finally agreed to ride along, she parked her truck at the east end of the Harlan Street Bridge before the sun had cleared the warehouses, clipped a safety line to the railing, and handed me a hammer no bigger than a soup spoon. " +
        N(3) + "\"Every rivet tells you something,\" she said. " +
        N(4) + "\"Your job is to let it.\" " +
        N(5) + "I had other plans for my future, mostly involving glass towers and suspension cables strung across famous harbors, and I said so. " +
        N(6) + "Old truss bridges, I told her, were the attic furniture of engineering: sturdy, ugly, and waiting to be replaced. " +
        N(7) + "She did not argue. " +
        N(8) + "She simply struck the nearest rivet, and it answered with a bright, clean ring, like a spoon against a glass. " +
        N(9) + "Then she moved down the beam, tapping, tapping, for what felt like an hour, while the traffic above us rattled the deck and pigeons complained from the girders. " +
        N(10) + "Somewhere around the third panel, she tapped a rivet that did not ring at all. " +
        N(11) + "It made a flat, wooden sound, the sound of a knock on a door nobody planned to open. " +
        N(12) + "She marked it with yellow paint and wrote three lines in her notebook, her handwriting suddenly smaller and more careful. " +
        N(13) + "\"That one's loose,\" she said. " +
        N(14) + "\"Not dangerous yet. Yet is the word I get paid for.\" " +
        N(15) + "She handed me the hammer and pointed to the next rivet. " +
        N(16) + "I tapped it, felt foolish, and tapped it again, and on the fourth try I heard it: the ring underneath the noise, steady as a held note. " +
        N(17) + "We worked until noon. " +
        N(18) + "I still want to build towers someday, but now when I cross Harlan Street I listen for the bridge under the wheels, and I think about all the small answers holding up the large ones." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme developed in \"Rivets\"?",
          choices: [
            { letter: "A", text: "Children should follow the careers their parents have chosen." },
            { letter: "B", text: "Modern designs are always safer than older ones." },
            { letter: "C", text: "Being right matters more than being patient with others." },
            { letter: "D", text: "Great strength often rests on attention to small, plain details." }
          ],
          correct: "D"
        },
        {
          id: "yet",
          sol: "11.RL.1.B",
          stem: "The mother's remark in sentence 14 that \"Yet is the word I get paid for\" implies that her job is mainly to —",
          choices: [
            { letter: "A", text: "repair loose rivets herself before anyone notices them" },
            { letter: "B", text: "find problems early, before they become dangerous" },
            { letter: "C", text: "decide which old bridges should be torn down" },
            { letter: "D", text: "reassure drivers that the bridge is perfectly safe" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          stem: "Which statement best describes how the narrator of \"Rivets\" changes?",
          choices: [
            { letter: "A", text: "He moves from dismissing old bridges to respecting their upkeep." },
            { letter: "B", text: "He gives up his dream of designing towers in order to become an inspector." },
            { letter: "C", text: "He begins the day eager to help and ends it bored by the repetition." },
            { letter: "D", text: "He learns to argue more politely with his mother about his future." }
          ],
          correct: "A"
        },
        {
          id: "attic",
          sol: "11.RL.2.A",
          stem: "In sentence 6, the narrator calls old truss bridges the attic furniture of engineering mainly to suggest that he sees them as —",
          choices: [
            { letter: "A", text: "valuable heirlooms worth protecting" },
            { letter: "B", text: "dangerous structures likely to collapse" },
            { letter: "C", text: "outdated leftovers kept until replaced" },
            { letter: "D", text: "comfortable places full of memories" }
          ],
          correct: "C"
        },
        {
          id: "door",
          sol: "11.RL.2.B",
          stem: "In sentence 11, the comparison to a knock on a door nobody planned to open creates a mood that is —",
          choices: [
            { letter: "A", text: "cheerful" },
            { letter: "B", text: "sleepy" },
            { letter: "C", text: "triumphant" },
            { letter: "D", text: "uneasy" }
          ],
          correct: "D"
        },
        {
          id: "complained",
          sol: "11.RL.2.C",
          stem: "In sentence 9, the word complained, used to describe the pigeons, suggests that the birds —",
          choices: [
            { letter: "A", text: "flew away from the inspectors in fear" },
            { letter: "B", text: "made harsh, grumbling sounds" },
            { letter: "C", text: "nested in the loose parts of the bridge" },
            { letter: "D", text: "fell silent when the traffic passed" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "11.RL.3.A",
          stem: "\"Rivets\" is told from the son's first-person point of view. This choice mainly allows the reader to —",
          choices: [
            { letter: "A", text: "follow his shifting attitude from the inside as it happens" },
            { letter: "B", text: "learn the technical history of the Harlan Street Bridge" },
            { letter: "C", text: "understand exactly what the mother writes in her notebook" },
            { letter: "D", text: "see the inspection through the eyes of the passing drivers" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rl-c99-cart",
      family: "G11",
      title: "Four Hours at Millbrook Creek",
      kind: "Literary · 11.RL",
      blurb: "Rafael came for service hours; the creek, a shopping cart, and a woman in duck boots had other plans.",
      level: 2,
      passage:
        "<p>" + N(1) + "Rafael signed in at the Millbrook Creek cleanup for one reason, and it was printed on the form folded in his pocket: ten service hours required for graduation, four still missing. " +
        N(2) + "He took a grabber, a pair of gloves, and a trash bag, and he planned to fill the bag slowly enough to make the morning last exactly four hours. " +
        N(3) + "The creek had other ideas. " +
        N(4) + "Twenty yards below the footbridge, a shopping cart lay on its side in the current, and around it the water had built a small, ugly dam of plastic bottles, a deflated soccer ball, and a sheet of foam the color of old teeth. " +
        N(5) + "\"Leave that one,\" said the volunteer coordinator, a cheerful man with a clipboard. \"Too heavy. The county will send a truck someday.\" " +
        N(6) + "Rafael heard the word \"someday\" the way he read the word \"optional\" on a syllabus. " +
        N(7) + "Mrs. Adeyemi, who was at least seventy and wore rubber boots patterned with yellow ducks, had already waded in. " +
        N(8) + "She did not ask him to help. " +
        N(9) + "She just grabbed one side of the cart and looked at the other side, and then at him. " +
        N(10) + "The water was colder than anything in April had a right to be. " +
        N(11) + "They rocked the cart back and forth, loosening the mud's grip, while bottles slipped free and spun away downstream for the volunteers below to catch. " +
        N(12) + "On the fifth heave, the cart came loose with a sucking sound, and the creek rushed through the gap as if it had been holding its breath all winter. " +
        N(13) + "They dragged the cart up the bank, dripping and dented, and Mrs. Adeyemi patted it like a horse that had finally behaved. " +
        N(14) + "By the time Rafael looked at his phone, it was past noon; he had worked five hours, not four, and had not noticed the extra one. " +
        N(15) + "At the sign-out table, the coordinator asked how many hours to record. " +
        N(16) + "Rafael wrote \"4,\" because that was what he needed, and then, on the clipboard underneath, he added his phone number to the list for the May cleanup." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the story of the Millbrook Creek cleanup best support?",
          choices: [
            { letter: "A", text: "Rules about required service hours are unfair to busy students." },
            { letter: "B", text: "Work begun out of duty can matter once its effects are seen." },
            { letter: "C", text: "Older volunteers are usually more skilled than younger volunteers." },
            { letter: "D", text: "Large problems are best left to officials with proper equipment." }
          ],
          correct: "B"
        },
        {
          id: "someday",
          sol: "11.RL.1.B",
          stem: "Sentence 6 suggests that Rafael believes the coordinator's \"someday\" most likely means —",
          choices: [
            { letter: "A", text: "that the cart will probably never be removed" },
            { letter: "B", text: "that the truck will arrive before the cleanup ends" },
            { letter: "C", text: "that volunteers are allowed to choose their own tasks" },
            { letter: "D", text: "that the county has already scheduled the removal" }
          ],
          correct: "A"
        },
        {
          id: "adeyemi",
          sol: "11.RL.1.C",
          stem: "Mrs. Adeyemi's actions in sentences 7–9 show that she is —",
          choices: [
            { letter: "A", text: "impatient with young volunteers who arrive late" },
            { letter: "B", text: "unaware of how cold and deep the water is" },
            { letter: "C", text: "eager for the coordinator to notice her effort" },
            { letter: "D", text: "quietly determined and leads by example" }
          ],
          correct: "D"
        },
        {
          id: "breath",
          sol: "11.RL.2.A",
          stem: "In sentence 12, saying the creek rushed through as if it had been holding its breath all winter mainly suggests that —",
          choices: [
            { letter: "A", text: "the creek had frozen solid during the winter months" },
            { letter: "B", text: "the volunteers were exhausted after the fifth heave" },
            { letter: "C", text: "the water's flow had been blocked and was now released" },
            { letter: "D", text: "the cart had been placed there on purpose last spring" }
          ],
          correct: "C"
        },
        {
          id: "teeth",
          sol: "11.RL.2.B",
          stem: "In sentence 4, describing the foam as the color of old teeth creates an image that is —",
          choices: [
            { letter: "A", text: "unpleasant" },
            { letter: "B", text: "mysterious" },
            { letter: "C", text: "comforting" },
            { letter: "D", text: "humorous" }
          ],
          correct: "A"
        },
        {
          id: "ideas",
          sol: "11.RL.2.C",
          stem: "In sentence 3, the statement \"The creek had other ideas\" most nearly means that —",
          choices: [
            { letter: "A", text: "the creek was too high for anyone to clean that day" },
            { letter: "B", text: "Rafael had misread the instructions on his form" },
            { letter: "C", text: "the coordinator changed the plan for the cleanup" },
            { letter: "D", text: "what Rafael found at the creek would upset his plan" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "11.RL.3.A",
          stem: "How does sentence 16 resolve the conflict introduced in sentence 1?",
          choices: [
            { letter: "A", text: "Rafael admits he still needs more hours and must return in May." },
            { letter: "B", text: "Rafael asks the coordinator to record the extra hour he worked." },
            { letter: "C", text: "Rafael logs only what he needs but signs up again by choice." },
            { letter: "D", text: "Rafael decides that the service requirement was a waste of time." }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── POETRY ───────────────────────── */
    {
      id: "g11-rl-c99-forager",
      family: "G11",
      title: "What the Bees Know",
      kind: "Poetry · 11.RL",
      blurb: "A speaker watches foragers all summer and learns what a twelfth of a teaspoon is worth.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Before the porch light fades, they are already gone,<br>" +
        L(2) + "a thousand small engines warming in the box,<br>" +
        L(3) + "each one leaving with nothing but a map<br>" +
        L(4) + "that some sister danced for her in the dark.<br>" +
        L(5) + "Turn left at the sun. Fly the length of the song.<br>" +
        L(6) + "Find the clover by the fence where the mower missed.<br>" +
        L(7) + "I have watched them all summer from the garden wall,<br>" +
        L(8) + "trying to learn what they seem to know by heart:<br>" +
        L(9) + "that no one bee will taste the honey she makes,<br>" +
        L(10) + "that a single forager in her whole short life<br>" +
        L(11) + "brings home a twelfth of one teaspoon, no more,<br>" +
        L(12) + "and still goes out again, and out again,<br>" +
        L(13) + "as if the hive were a promise she had made<br>" +
        L(14) + "to someone she would never get to meet.<br>" +
        L(15) + "Tonight the boxes hum like a kettle<br>" +
        L(16) + "just before it sings.<br>" +
        L(17) + "I put my ear against the painted wood<br>" +
        L(18) + "and hear the whole hive working at one thing,<br>" +
        L(19) + "and I think of my own small spoonfuls,<br>" +
        L(20) + "and I go back inside to carry mine." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme of \"What the Bees Know\"?",
          choices: [
            { letter: "A", text: "Small efforts matter as part of a larger shared purpose." },
            { letter: "B", text: "Nature is best enjoyed from a safe and respectful distance." },
            { letter: "C", text: "People should rest more often instead of working so very hard." },
            { letter: "D", text: "Each creature must look out for itself in order to survive." }
          ],
          correct: "A"
        },
        {
          id: "admire",
          sol: "11.RL.1.B",
          stem: "Lines 9–12 suggest that the speaker admires the bees because each one —",
          choices: [
            { letter: "A", text: "collects far more honey than the speaker expected" },
            { letter: "B", text: "returns to the hive before the porch light fades" },
            { letter: "C", text: "keeps working though she gains little for herself" },
            { letter: "D", text: "remembers every flower she has ever visited" }
          ],
          correct: "C"
        },
        {
          id: "speaker",
          sol: "11.RL.1.C",
          stem: "Which statement best describes the speaker in lines 17–20?",
          choices: [
            { letter: "A", text: "worried that the hive is too loud and restless" },
            { letter: "B", text: "inspired to keep doing her own modest share" },
            { letter: "C", text: "sad that summer is ending so quickly" },
            { letter: "D", text: "frustrated that the bees ignore her presence" }
          ],
          correct: "B"
        },
        {
          id: "map",
          sol: "11.RL.2.A",
          stem: "In lines 3–4, the map that some sister danced for her in the dark refers to —",
          choices: [
            { letter: "A", text: "a path the speaker once drew across the garden" },
            { letter: "B", text: "the habit bees have of following the sun home" },
            { letter: "C", text: "a memory the bee carries from an earlier summer" },
            { letter: "D", text: "directions to food shared through another bee's dance" }
          ],
          correct: "D"
        },
        {
          id: "kettle",
          sol: "11.RL.2.B",
          stem: "The simile in lines 15–16 comparing the hive to a kettle just before it sings creates a feeling of —",
          choices: [
            { letter: "A", text: "energy building toward a release" },
            { letter: "B", text: "danger that the speaker must flee" },
            { letter: "C", text: "silence settling over the garden" },
            { letter: "D", text: "boredom with a familiar routine" }
          ],
          correct: "A"
        },
        {
          id: "foragerword",
          sol: "11.RL.2.C",
          stem: "In line 10, the word forager most nearly means a bee that —",
          choices: [
            { letter: "A", text: "guards the hive entrance" },
            { letter: "B", text: "stays inside to build comb" },
            { letter: "C", text: "lays eggs for the colony" },
            { letter: "D", text: "searches out and gathers food" }
          ],
          correct: "D"
        },
        {
          id: "shape",
          sol: "11.RL.3.A",
          stem: "How does the movement of \"What the Bees Know\" from the bees to the speaker shape its meaning?",
          choices: [
            { letter: "A", text: "It shows that the speaker prefers bees to other people." },
            { letter: "B", text: "It turns watching the bees into a lesson for her life." },
            { letter: "C", text: "It reveals that the bees were only part of a dream." },
            { letter: "D", text: "It contrasts a busy summer with a long, idle winter." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rl-c99-keystone",
      family: "G11",
      title: "Keystone",
      kind: "Poetry · 11.RL",
      blurb: "Crossing an old stone arch with a suitcase, a speaker counts the stones that hold her up.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The masons who set these stones are two hundred years gone,<br>" +
        L(2) + "and no name is carved on the arch to say who they were.<br>" +
        L(3) + "Each stone leans on its neighbor like a tired traveler,<br>" +
        L(4) + "and none of them could stand here alone.<br>" +
        L(5) + "The river has argued with them every spring,<br>" +
        L(6) + "shouldering ice, flinging whole trees at the piers,<br>" +
        L(7) + "and every spring the arch has answered<br>" +
        L(8) + "with the same patient sentence: not today.<br>" +
        L(9) + "At the very top sits the keystone, smallest of all,<br>" +
        L(10) + "the last one placed, the one that locks the rest.<br><br>" +
        L(11) + "This morning I am crossing with a suitcase,<br>" +
        L(12) + "bound for a city I have only seen in photographs,<br>" +
        L(13) + "and I keep thinking about how an arch<br>" +
        L(14) + "is only a pile of falling stone<br>" +
        L(15) + "until the final piece is set,<br>" +
        L(16) + "and how my mother's hands, my coach's voice,<br>" +
        L(17) + "the neighbor who fixed my bike without being asked<br>" +
        L(18) + "have been leaning on each other in me for years.<br>" +
        L(19) + "I do not know yet which of them is the keystone.<br>" +
        L(20) + "I only know the river is loud, and I am still standing." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a central idea of \"Keystone\"?",
          choices: [
            { letter: "A", text: "Old structures should be replaced before they become unsafe." },
            { letter: "B", text: "Leaving home means leaving behind the people who once shaped us." },
            { letter: "C", text: "A person's strength comes from many influences working together." },
            { letter: "D", text: "Nature always wins its long struggle against human work." }
          ],
          correct: "C"
        },
        {
          id: "masons",
          sol: "11.RL.1.B",
          stem: "Line 2 implies that the masons who built the arch —",
          choices: [
            { letter: "A", text: "did lasting work without receiving recognition" },
            { letter: "B", text: "were careless about the quality of the stone" },
            { letter: "C", text: "left the bridge unfinished when they departed" },
            { letter: "D", text: "carved their names somewhere beneath the river" }
          ],
          correct: "A"
        },
        {
          id: "speaker",
          sol: "11.RL.1.C",
          stem: "In lines 11–20, the speaker is best described as —",
          choices: [
            { letter: "A", text: "eager to forget the town she is leaving" },
            { letter: "B", text: "afraid that the old bridge will give way" },
            { letter: "C", text: "certain about which person shaped her most" },
            { letter: "D", text: "unsure of the future but steadied by others" }
          ],
          correct: "D"
        },
        {
          id: "keystone",
          sol: "11.RL.2.A",
          stem: "As the poem develops, the keystone in lines 9–10 comes to symbolize —",
          choices: [
            { letter: "A", text: "the city the speaker is traveling toward" },
            { letter: "B", text: "one influence that locks the others into a whole" },
            { letter: "C", text: "the river's constant pressure on the bridge" },
            { letter: "D", text: "the speaker's wish to be noticed by others" }
          ],
          correct: "B"
        },
        {
          id: "nottoday",
          sol: "11.RL.2.B",
          stem: "In lines 7–8, the arch answering the river with the patient sentence not today is an example of —",
          choices: [
            { letter: "A", text: "hyperbole that exaggerates the size of the river" },
            { letter: "B", text: "rhyme that links the first stanza to the second" },
            { letter: "C", text: "personification that stresses the arch's calm endurance" },
            { letter: "D", text: "irony suggesting the arch will fall the next spring" }
          ],
          correct: "C"
        },
        {
          id: "shouldering",
          sol: "11.RL.2.C",
          stem: "In line 6, the word shouldering most nearly means —",
          choices: [
            { letter: "A", text: "pushing hard against" },
            { letter: "B", text: "carrying gently away" },
            { letter: "C", text: "melting slowly into" },
            { letter: "D", text: "turning aside from" }
          ],
          correct: "A"
        },
        {
          id: "stanzas",
          sol: "11.RL.3.A",
          stem: "How does the shift from the first stanza of \"Keystone\" to the second develop the poem's meaning?",
          choices: [
            { letter: "A", text: "It replaces a hopeful mood with a mood of loss and regret." },
            { letter: "B", text: "It turns the arch into a lens for viewing the speaker's life." },
            { letter: "C", text: "It moves from the speaker's past to a long history of the masons." },
            { letter: "D", text: "It shifts from the river's point of view to the bridge's." }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── DRAMA ───────────────────────── */
    {
      id: "g11-rl-c99-places",
      family: "G11",
      title: "Five Minutes to Places",
      kind: "Drama · 11.RL",
      blurb: "The pocket watch that starts the play is missing, and the curtain will not wait.",
      level: 2,
      passage:
        "<p>" + N(1) + "<em>Backstage at a high school auditorium, five minutes before the spring play begins. JUN, the props master, is digging through a bin on a long table lit by a single clip lamp. AALIYAH, the assistant stage manager, stands nearby wearing a headset.</em></p>" +
        "<p><strong>JUN:</strong> " + N(2) + "It was here. I taped its outline on the table myself, right between the teacup and the letter.</p>" +
        "<p><strong>AALIYAH:</strong> " + N(3) + "Then the outline is very nicely taped and very empty.</p>" +
        "<p><strong>JUN:</strong> " + N(4) + "The pocket watch is the whole first scene, Aaliyah. Teo opens it, says \"We're out of time,\" and the story starts.</p>" +
        "<p><strong>AALIYAH:</strong> " + N(5) + "<em>(into headset)</em> Booth, hold the house lights two minutes. <em>(to Jun)</em> What else on this table opens and closes?</p>" +
        "<p><strong>JUN:</strong> " + N(6) + "<em>(scanning)</em> A compass from the ship scene. A locket. A sardine tin, which I refuse to discuss.</p>" +
        "<p>" + N(7) + "<em>TEO enters in costume, a long coat and a top hat, pale and breathing too fast.</em></p>" +
        "<p><strong>TEO:</strong> " + N(8) + "Someone said the watch is gone. Is the watch gone? I rehearsed with that watch for six weeks.</p>" +
        "<p><strong>AALIYAH:</strong> " + N(9) + "You rehearsed with your hands for six weeks. The watch just happened to be in them.</p>" +
        "<p>" + N(10) + "<em>She takes the compass from Jun, places it in Teo's palm, and folds his fingers over it.</em></p>" +
        "<p><strong>AALIYAH:</strong> " + N(11) + "Open it.</p>" +
        "<p>" + N(12) + "<em>Teo opens the compass. The needle swings wildly, then settles.</em></p>" +
        "<p><strong>TEO:</strong> " + N(13) + "It doesn't tell time.</p>" +
        "<p><strong>JUN:</strong> " + N(14) + "The audience is forty feet away. From the back row, it tells whatever you say it tells.</p>" +
        "<p><strong>TEO:</strong> " + N(15) + "<em>(slowly, testing the weight)</em> And if someone in the front row notices?</p>" +
        "<p><strong>AALIYAH:</strong> " + N(16) + "Then they'll see a man so worried about time that he grabbed the wrong instrument. That's not a mistake. That's acting.</p>" +
        "<p>" + N(17) + "<em>A pause. Teo almost smiles. He snaps the compass shut, then open again, finding the rhythm.</em></p>" +
        "<p><strong>TEO:</strong> " + N(18) + "\"We're out of time.\"</p>" +
        "<p><strong>JUN:</strong> " + N(19) + "<em>(quietly, to Aaliyah)</em> I'm still going to find that watch.</p>" +
        "<p><strong>AALIYAH:</strong> " + N(20) + "Find it at intermission. <em>(into headset)</em> Booth, house to half. Places, everyone.</p>" +
        "<p>" + N(21) + "<em>The clip lamp clicks off. In the dark, the compass needle glows faintly as Teo walks toward the stage, steady now.</em></p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the scene \"Five Minutes to Places\" most clearly develop?",
          choices: [
            { letter: "A", text: "A good performance depends on having exactly the right props ready." },
            { letter: "B", text: "Careless crew members can ruin the work of an entire cast." },
            { letter: "C", text: "Audiences notice small mistakes far more than performers expect." },
            { letter: "D", text: "Confidence comes from practice and flexibility, not perfect plans." }
          ],
          correct: "D"
        },
        {
          id: "hands",
          sol: "11.RL.1.B",
          stem: "Aaliyah's line in sentence 9 is meant to convince Teo that —",
          choices: [
            { letter: "A", text: "he should have checked the props table earlier" },
            { letter: "B", text: "his performance rests on his own practiced skill" },
            { letter: "C", text: "the watch will be found before the curtain rises" },
            { letter: "D", text: "the first scene can be cut from the show tonight" }
          ],
          correct: "B"
        },
        {
          id: "aaliyah",
          sol: "11.RL.1.C",
          stem: "Which statement best describes Aaliyah in this scene?",
          choices: [
            { letter: "A", text: "She is calm and quick-thinking, and she steadies others." },
            { letter: "B", text: "She is irritated with Jun and blames him for the problem." },
            { letter: "C", text: "She is unsure of herself and waits for the director's orders." },
            { letter: "D", text: "She is amused by Teo's fear and makes jokes at his expense." }
          ],
          correct: "A"
        },
        {
          id: "needle",
          sol: "11.RL.2.A",
          stem: "The compass needle that swings wildly, then settles (sentence 12) most clearly mirrors —",
          choices: [
            { letter: "A", text: "Jun's frustration at losing the watch" },
            { letter: "B", text: "the audience's growing impatience" },
            { letter: "C", text: "Teo's nerves beginning to calm" },
            { letter: "D", text: "the ship scene later in the play" }
          ],
          correct: "C"
        },
        {
          id: "sardine",
          sol: "11.RL.2.B",
          stem: "Jun's comment about the sardine tin in sentence 6 adds a tone that is —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "lightly humorous" },
            { letter: "C", text: "openly fearful" },
            { letter: "D", text: "formal and stiff" }
          ],
          correct: "B"
        },
        {
          id: "weight",
          sol: "11.RL.2.C",
          stem: "In sentence 15, the stage direction testing the weight most nearly means that Teo is —",
          choices: [
            { letter: "A", text: "checking whether the compass is broken" },
            { letter: "B", text: "deciding to refuse the substitute prop" },
            { letter: "C", text: "measuring the compass for the props list" },
            { letter: "D", text: "getting used to how the new prop feels" }
          ],
          correct: "D"
        },
        {
          id: "lamp",
          sol: "11.RL.3.A",
          stem: "The final stage direction (sentence 21) brings the scene to a close mainly by —",
          choices: [
            { letter: "A", text: "showing Teo ready to go on, with the substitute prop now his" },
            { letter: "B", text: "revealing that the missing watch was hidden in the dark" },
            { letter: "C", text: "suggesting that the play will be delayed for another hour" },
            { letter: "D", text: "shifting the focus from Teo to the lighting booth's crew" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL ───────────────────────── */
    {
      id: "g11-ri-c99-cables",
      family: "G11",
      title: "How a Suspension Bridge Holds Up",
      kind: "Informational · 11.RI",
      blurb: "Follow a truck's weight from the road deck to the cables, towers, and anchorages.",
      level: 1,
      passage:
        "<p>" + N(1) + "A suspension bridge looks as if it is floating, but every part of it is pulling or pushing on something else. " +
        N(2) + "The road deck, the flat surface that cars and people travel across, hangs from hundreds of vertical steel rods called suspenders. " +
        N(3) + "Those suspenders hang from two enormous main cables that swoop between tall towers in a shallow curve. " +
        N(4) + "When a truck rolls onto the deck, its weight travels up the suspenders, into the main cables, and along the cables toward the towers.</p>" +
        "<p>" + N(5) + "The cables are in tension, which means they are being stretched, and steel wire is remarkably good at resisting a stretch. " +
        N(6) + "A single main cable is not one solid bar but thousands of thin wires bundled together, so that if one wire weakens, the others share its load. " +
        N(7) + "The towers, by contrast, are in compression: the cables press down on their tops, squeezing them toward the ground. " +
        N(8) + "Engineers build towers from concrete or steel because both materials hold up well when squeezed. " +
        N(9) + "The tower foundations must reach solid rock or deeply packed soil, or the steady squeeze would slowly drive them downward.</p>" +
        "<p>" + N(10) + "At each end of the bridge, the main cables disappear into huge blocks of concrete called anchorages. " +
        N(11) + "An anchorage works something like a person holding one end of a tug-of-war rope by sitting down hard on the ground. " +
        N(12) + "Its sheer weight keeps the cables from pulling the towers inward.</p>" +
        "<p>" + N(13) + "Wind is the force that designers worry about most. " +
        N(14) + "A long, light deck can twist and sway when gusts strike it, and some early suspension bridges shook badly in storms. " +
        N(15) + "Modern decks are shaped and stiffened, often with open grates or slanted edges, so that air flows past instead of lifting the deck like a wing. " +
        N(16) + "Engineers test small models in wind tunnels before the real bridge is ever built. " +
        N(17) + "The result is a structure that can stretch across more than a mile of open water. " +
        N(18) + "What looks like a graceful drawing in the sky is really a careful agreement among tension, compression, and weight.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the central idea of \"How a Suspension Bridge Holds Up\"?",
          choices: [
            { letter: "A", text: "Suspension bridges are the most beautiful type of bridge ever designed." },
            { letter: "B", text: "A suspension bridge stands because its parts balance pulling and pushing." },
            { letter: "C", text: "Wind is the only force that can seriously damage a suspension bridge." },
            { letter: "D", text: "Steel has replaced concrete as the main material in modern bridges." }
          ],
          correct: "B"
        },
        {
          id: "wires",
          sol: "11.RI.1.B",
          stem: "According to the passage, why is a main cable made of thousands of thin wires?",
          choices: [
            { letter: "A", text: "Thin wires are cheaper to buy than one large steel bar." },
            { letter: "B", text: "Thin wires let wind pass through the cable more easily." },
            { letter: "C", text: "If one wire weakens, the other wires share its load." },
            { letter: "D", text: "Thin wires can be bent to form the curve of the cable." }
          ],
          correct: "C"
        },
        {
          id: "foundations",
          sol: "11.RI.1.B",
          stem: "According to the passage, why must tower foundations reach solid rock or deeply packed soil?",
          choices: [
            { letter: "A", text: "so the squeeze does not push the towers downward" },
            { letter: "B", text: "so the towers can bend safely in strong winds" },
            { letter: "C", text: "so the cables can be tied directly into the ground" },
            { letter: "D", text: "so river water cannot reach the steel suspenders" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward suspension bridges is best described as —",
          choices: [
            { letter: "A", text: "doubtful that they are truly safe in storms" },
            { letter: "B", text: "critical of the high cost of building them" },
            { letter: "C", text: "neutral and uninterested in their design" },
            { letter: "D", text: "admiring of how carefully they balance forces" }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "11.RI.2.A",
          stem: "The author organizes sentences 2–12 mainly by —",
          choices: [
            { letter: "A", text: "tracing how a load moves through each part of the bridge" },
            { letter: "B", text: "listing famous bridges in order from oldest to newest" },
            { letter: "C", text: "comparing suspension bridges with arch and beam bridges" },
            { letter: "D", text: "describing a problem with early bridges and its solution" }
          ],
          correct: "A"
        },
        {
          id: "tugofwar",
          sol: "11.RI.2.B",
          stem: "In sentence 11, the comparison to a person in a tug-of-war helps the reader understand that an anchorage —",
          choices: [
            { letter: "A", text: "can be moved whenever the cables need adjusting" },
            { letter: "B", text: "pulls the towers outward with powerful motors" },
            { letter: "C", text: "competes with the towers to carry the deck" },
            { letter: "D", text: "holds the cables in place mainly by its weight" }
          ],
          correct: "D"
        },
        {
          id: "agreement",
          sol: "11.RI.2.C",
          stem: "In sentence 18, calling the bridge a careful agreement among tension, compression, and weight mainly functions to —",
          choices: [
            { letter: "A", text: "suggest that engineers often disagree about bridge design" },
            { letter: "B", text: "introduce a new topic that the author will explain next" },
            { letter: "C", text: "sum up the forces as working together in balance" },
            { letter: "D", text: "warn that one force will eventually overpower the others" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c99-cluster",
      family: "G11",
      title: "The Winter Cluster",
      kind: "Informational · 11.RI",
      blurb: "How a honeybee colony keeps a small summer burning through a frozen January.",
      level: 2,
      passage:
        "<p>" + N(1) + "When the first hard frost arrives, a honeybee colony does not migrate, hibernate, or die off, as many insects do. " +
        N(2) + "Instead, it gathers into a tight, living ball called a winter cluster and spends the cold months generating its own heat. " +
        N(3) + "The cluster forms around the queen, usually on combs that still hold stored honey. " +
        N(4) + "Bees on the outer layer pack together closely, heads pointed inward, forming an insulating shell several bees thick. " +
        N(5) + "Inside that shell, worker bees produce warmth by shivering their flight muscles without moving their wings, much as a car engine can idle without the car going anywhere. " +
        N(6) + "Beekeepers who have measured cluster temperatures report that the core can stay above 90 degrees Fahrenheit even when the air outside the hive is well below freezing.</p>" +
        "<p>" + N(7) + "The arrangement is not fixed. " +
        N(8) + "Bees on the chilly surface gradually work their way toward the center, while warmed bees move outward to take their places, so no single insect stays on the cold edge for long. " +
        N(9) + "The cluster also tightens as temperatures fall and loosens on milder days, changing its size the way a person might pull a blanket closer or kick it off.</p>" +
        "<p>" + N(10) + "All of this shivering burns fuel. " +
        N(11) + "A colony may consume many pounds of honey between late autumn and early spring, and the cluster slowly travels across the combs, eating its way through its stores. " +
        N(12) + "This is the most dangerous part of winter. " +
        N(13) + "During a long cold snap, a cluster can become stranded, unable to break formation to reach honey only a few inches away, and the colony can starve beside a full pantry. " +
        N(14) + "For this reason, many beekeepers check hive weight in late winter by tipping the box slightly from behind; a hive that lifts too easily may need emergency feeding. " +
        N(15) + "Others place sheets of sugar directly above the cluster, where the bees can reach food without leaving their warm formation.</p>" +
        "<p>" + N(16) + "The winter cluster shows that a colony is less a crowd of separate insects than a single organism with thousands of moving parts. " +
        N(17) + "No bee could survive a January night alone, yet together they keep a small summer burning inside a wooden box.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "What is the main idea of \"The Winter Cluster\"?",
          choices: [
            { letter: "A", text: "Beekeepers must feed every hive by hand throughout the winter." },
            { letter: "B", text: "Honeybees are the only insects that remain active in cold weather." },
            { letter: "C", text: "A queen bee keeps her colony warm by staying in its center." },
            { letter: "D", text: "Honeybees survive winter by working together to make and share heat." }
          ],
          correct: "D"
        },
        {
          id: "shiver",
          sol: "11.RI.1.B",
          stem: "According to the passage, how do worker bees produce heat inside the cluster?",
          choices: [
            { letter: "A", text: "by shivering flight muscles while keeping their wings still" },
            { letter: "B", text: "by flying in small, tight circles around the queen at the center" },
            { letter: "C", text: "by sealing the hive's entrance with a thick layer of wax" },
            { letter: "D", text: "by moving the colony's honey closer to the warm outer shell" }
          ],
          correct: "A"
        },
        {
          id: "interpret",
          sol: "11.RI.1.C",
          stem: "Which sentence from \"The Winter Cluster\" offers an interpretation rather than a directly observed fact?",
          choices: [
            { letter: "A", text: "sentence 3, about where the cluster forms" },
            { letter: "B", text: "sentence 6, about measured temperatures" },
            { letter: "C", text: "sentence 16, about the colony as one organism" },
            { letter: "D", text: "sentence 14, about checking hive weight" }
          ],
          correct: "C"
        },
        {
          id: "s10to15",
          sol: "11.RI.2.A",
          stem: "How does the author organize sentences 10–15 of \"The Winter Cluster\"?",
          choices: [
            { letter: "A", text: "by comparing honeybees with insects that hibernate" },
            { letter: "B", text: "by presenting a danger and then the ways beekeepers respond" },
            { letter: "C", text: "by listing the months of winter in chronological order" },
            { letter: "D", text: "by describing one beekeeper's experience with a failing hive" }
          ],
          correct: "B"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          stem: "The author develops the passage about the winter cluster mainly by —",
          choices: [
            { letter: "A", text: "arguing that beekeeping should be taught in more schools" },
            { letter: "B", text: "telling the story of a single colony from spring to fall" },
            { letter: "C", text: "answering common questions that beginning beekeepers ask" },
            { letter: "D", text: "explaining how the cluster forms, works, and faces risk" }
          ],
          correct: "D"
        },
        {
          id: "blanket",
          sol: "11.RI.2.B",
          stem: "In sentence 9, comparing the cluster to a person with a blanket helps the reader understand that the cluster —",
          choices: [
            { letter: "A", text: "needs beekeepers to cover the hive on cold nights" },
            { letter: "B", text: "sleeps through most of the winter months" },
            { letter: "C", text: "adjusts how tightly it packs as temperatures change" },
            { letter: "D", text: "is warmest on the outside and coldest in the center" }
          ],
          correct: "C"
        },
        {
          id: "pantry",
          sol: "11.RI.2.C",
          stem: "In sentence 13, the phrase starve beside a full pantry mainly emphasizes —",
          choices: [
            { letter: "A", text: "the irony that the food is close yet out of reach" },
            { letter: "B", text: "the large amount of honey that a colony wastes" },
            { letter: "C", text: "the need for beekeepers to build bigger hive boxes" },
            { letter: "D", text: "the way bees store honey in a separate room" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-c99-tally",
      family: "G11",
      title: "What the Trash Tally Revealed",
      kind: "Informational · 11.RI",
      blurb: "Ashford River volunteers stopped weighing their trash and started counting it.",
      level: 3,
      passage:
        "<p>" + N(1) + "For six years, volunteers along the Ashford River treated each spring cleanup as a contest against the river itself: haul out as many bags as possible, weigh them, and post the total. " +
        N(2) + "The totals were impressive, but they were also strangely silent. " +
        N(3) + "A record of 1,200 pounds said nothing about where the trash came from or how it might be stopped.</p>" +
        "<p>" + N(4) + "In the seventh year, a group of students from Ashford High proposed a different approach. " +
        N(5) + "Instead of weighing bags, volunteers would sort every item into categories on a printed tally sheet: bottles, food wrappers, foam containers, fishing line, tires, and \"other.\" " +
        N(6) + "The method was slower, and some longtime volunteers grumbled that counting bottle caps was a poor use of a Saturday.</p>" +
        "<p>" + N(7) + "The data, however, changed the conversation. " +
        N(8) + "Of roughly 9,400 items recorded across four sites, nearly 70 percent were single-use food and drink packaging. " +
        N(9) + "More striking was the location: the site just downstream of Riverside Park accounted for almost half of all bottles, even though it covered less than a fifth of the shoreline surveyed. " +
        N(10) + "The pattern suggested that much of the river's trash was not drifting in from distant towns, as many residents had assumed, but blowing out of a single park's overflowing bins.</p>" +
        "<p>" + N(11) + "The students presented their tally at a parks board meeting in June. " +
        N(12) + "They did not claim to have proven a cause; they noted that wind direction and holiday crowds might also play a role. " +
        N(13) + "Still, the board agreed to a modest trial: lidded bins, a water-bottle refill station, and an extra trash pickup on weekends. " +
        N(14) + "The following spring, the downstream site yielded about 40 percent fewer bottles, though one year of data, the students cautioned, is a hint rather than a conclusion.</p>" +
        "<p>" + N(15) + "Even the grumblers came around. " +
        N(16) + "One retired volunteer admitted that a heavy bag had always felt like victory, but a tally sheet felt like a map. " +
        N(17) + "The Ashford cleanup still weighs its bags for the local newspaper, but the number that matters most is now written in columns, not pounds.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          stem: "Which statement best summarizes the central idea of the passage about the Ashford River cleanup?",
          choices: [
            { letter: "A", text: "Weighing trash is the most reliable way to measure a cleanup's success." },
            { letter: "B", text: "Longtime volunteers resisted change and nearly ended the cleanup." },
            { letter: "C", text: "Counting kinds of trash helped volunteers find a source and test a fix." },
            { letter: "D", text: "Most river trash in Ashford drifts in from towns farther upstream." }
          ],
          correct: "C"
        },
        {
          id: "park",
          sol: "11.RI.1.B",
          stem: "Which detail most directly supports the idea that Riverside Park was a major source of bottles?",
          choices: [
            { letter: "A", text: "A small downstream site held almost half of all bottles found." },
            { letter: "B", text: "Volunteers recorded roughly 9,400 items across four sites." },
            { letter: "C", text: "The cleanup once collected a record of 1,200 pounds." },
            { letter: "D", text: "Some volunteers thought counting caps wasted a Saturday." }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward the students' tally method is best described as —",
          choices: [
            { letter: "A", text: "skeptical, because one year of data proves nothing" },
            { letter: "B", text: "amused by how much the older volunteers complained" },
            { letter: "C", text: "indifferent to whether the cleanup uses it or not" },
            { letter: "D", text: "approving, while careful to note its limits" }
          ],
          correct: "D"
        },
        {
          id: "caution",
          sol: "11.RI.1.C",
          stem: "Which sentence shows the students themselves admitting that other factors might explain the bottle pattern?",
          choices: [
            { letter: "A", text: "sentence 9" },
            { letter: "B", text: "sentence 12" },
            { letter: "C", text: "sentence 13" },
            { letter: "D", text: "sentence 16" }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "The author organizes the passage about the Ashford tally mainly by —",
          choices: [
            { letter: "A", text: "moving from an old method to a new one, its findings, and their results" },
            { letter: "B", text: "comparing the Ashford cleanup with cleanups in several other towns" },
            { letter: "C", text: "presenting arguments for and against the parks board's final decision" },
            { letter: "D", text: "describing each of the four cleanup sites in order from north to south" }
          ],
          correct: "A"
        },
        {
          id: "silent",
          sol: "11.RI.2.B",
          stem: "In sentence 2, the author describes the earlier totals as strangely silent mainly to —",
          choices: [
            { letter: "A", text: "suggest that the newspaper stopped reporting them" },
            { letter: "B", text: "show that volunteers worked without talking" },
            { letter: "C", text: "hint that the totals had been recorded incorrectly" },
            { letter: "D", text: "stress that they gave no clues to solving the problem" }
          ],
          correct: "D"
        },
        {
          id: "map",
          sol: "11.RI.2.C",
          stem: "In sentence 16, the contrast between a heavy bag feeling like victory and a tally sheet feeling like a map mainly emphasizes —",
          choices: [
            { letter: "A", text: "the volunteer's regret about years of wasted effort" },
            { letter: "B", text: "a shift from celebrating effort to finding direction" },
            { letter: "C", text: "the difficulty of reading data printed in columns" },
            { letter: "D", text: "a disagreement between students and retirees" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-ri-c99-flyloft",
      family: "G11",
      title: "Above the Stage",
      kind: "Informational · 11.RI",
      blurb: "Ropes, pulleys, and iron bricks: how a school stage crew flies scenery.",
      level: 1,
      passage:
        "<p>" + N(1) + "When a painted backdrop drops from the darkness above a stage, it can seem like magic, but the movement is usually controlled by a system of ropes, pulleys, and weights called a fly system. " +
        N(2) + "The space above the stage, where scenery hangs out of the audience's view, is called the fly loft, and in many theaters it is nearly as tall as the stage opening itself.</p>" +
        "<p>" + N(3) + "Each piece of scenery is attached to a long metal pipe called a batten. " +
        N(4) + "Ropes run from the batten up to pulleys at the top of the loft, across to the side wall, and down to a frame called an arbor. " +
        N(5) + "The arbor holds stacked iron bricks that balance the weight of the scenery on the other end. " +
        N(6) + "Because the two sides weigh about the same, a single crew member can raise or lower a heavy wall of scenery with a steady pull on a rope, much as a child on a seesaw can lift a friend of equal weight with little effort.</p>" +
        "<p>" + N(7) + "Balancing is careful work. " +
        N(8) + "Before scenery is hung, crew members calculate its weight and load the matching bricks, and they never remove bricks while scenery is still attached. " +
        N(9) + "An arbor that is too heavy can race upward, while one that is too light can let scenery fall, so crews follow strict loading orders and call out each step.</p>" +
        "<p>" + N(10) + "The operators stand at the fly rail, a row of rope locks along the side wall of the stage. " +
        N(11) + "Each rope is labeled with the name of the piece it controls, and colored tape marks show exactly where to stop. " +
        N(12) + "During a performance, the stage manager calls each move over a headset, and the operator waits for the word \"go\" before pulling. " +
        N(13) + "Many newer theaters use motorized systems controlled by computers, but the counterweight method remains common in schools because it is simple, quiet, and reliable.</p>" +
        "<p>" + N(14) + "Students who learn the fly rail gain more than a theater skill. " +
        N(15) + "They learn to measure carefully, to communicate clearly, and to trust a partner they cannot always see on the other end of the rope.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "What is the main idea of \"Above the Stage\"?",
          choices: [
            { letter: "A", text: "Fly systems use balanced weights so crews can move scenery safely." },
            { letter: "B", text: "Computer-controlled motors have replaced ropes in nearly all theaters." },
            { letter: "C", text: "Stage managers are the most important members of a theater crew." },
            { letter: "D", text: "A fly loft must be twice as tall as the stage opening below it." }
          ],
          correct: "A"
        },
        {
          id: "onepull",
          sol: "11.RI.1.B",
          stem: "According to the passage, why can one crew member move a heavy wall of scenery with a steady pull?",
          choices: [
            { letter: "A", text: "The scenery is built from lightweight foam and cloth." },
            { letter: "B", text: "A motor hidden in the fly loft does most of the work." },
            { letter: "C", text: "Several operators pull the same rope at the same time." },
            { letter: "D", text: "The bricks in the arbor roughly match the scenery's weight." }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.1.C",
          stem: "The intended audience for \"Above the Stage\" is most likely —",
          choices: [
            { letter: "A", text: "engineers who design motorized lifting systems" },
            { letter: "B", text: "students curious about how scenery is moved" },
            { letter: "C", text: "actors preparing to audition for a school play" },
            { letter: "D", text: "theater owners comparing the prices of equipment" }
          ],
          correct: "B"
        },
        {
          id: "path",
          sol: "11.RI.2.A",
          stem: "How does the author mostly organize sentences 3–6 of \"Above the Stage\"?",
          choices: [
            { letter: "A", text: "by comparing old theaters with modern ones" },
            { letter: "B", text: "by listing safety rules in order of importance" },
            { letter: "C", text: "by following the rope from scenery to counterweight" },
            { letter: "D", text: "by describing a mistake and how it was corrected" }
          ],
          correct: "C"
        },
        {
          id: "seesaw",
          sol: "11.RI.2.B",
          stem: "In sentence 6, the seesaw comparison helps the reader understand that —",
          choices: [
            { letter: "A", text: "equal weight on both sides makes lifting easy" },
            { letter: "B", text: "children should not be allowed near the fly rail" },
            { letter: "C", text: "scenery moves up and down very quickly" },
            { letter: "D", text: "the arbor must always be heavier than the scenery" }
          ],
          correct: "A"
        },
        {
          id: "lessons",
          sol: "11.RI.2.B",
          stem: "The author includes sentences 14 and 15 mainly to —",
          choices: [
            { letter: "A", text: "warn students that fly work is too dangerous to try" },
            { letter: "B", text: "explain why schools prefer motorized systems" },
            { letter: "C", text: "describe the training required to join a crew" },
            { letter: "D", text: "point out lessons the work teaches beyond theater" }
          ],
          correct: "D"
        },
        {
          id: "magic",
          sol: "11.RI.2.C",
          stem: "In sentence 1, the phrase it can seem like magic functions mainly to —",
          choices: [
            { letter: "A", text: "suggest that fly systems are impossible to explain" },
            { letter: "B", text: "compare stage crews to performers in a magic show" },
            { letter: "C", text: "set up a contrast with the practical explanation" },
            { letter: "D", text: "show that audiences dislike seeing scenery move" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL TEXT ───────────────────────── */
    {
      id: "g11-ri-c99-greenway",
      family: "G11",
      title: "Cleanup Day Volunteer Guide",
      kind: "Functional text · 11.RI",
      blurb: "Everything a volunteer needs to know before the Greenway River cleanup.",
      level: 1,
      passage:
        "<p><strong>GREENWAY RIVER CLEANUP — VOLUNTEER GUIDE</strong></p>" +
        "<p>" + N(1) + "<strong>When and where.</strong> The cleanup runs Saturday, April 18, from 8:30 a.m. to 12:30 p.m. " +
        N(2) + "Check in at the pavilion beside the Elm Street boat ramp, where you will receive gloves, a grabber, and two bags: blue for recyclables and black for trash. " +
        N(3) + "Volunteers under 16 must arrive with a parent or guardian, who must also sign in and remain with them for the entire event.</p>" +
        "<p>" + N(4) + "<strong>What to bring.</strong> Wear closed-toe shoes that can get wet; sandals and flip-flops are not permitted on the shoreline. " +
        N(5) + "Bring a refillable water bottle, since no bottled water will be provided; a filling station is available at the pavilion. " +
        N(6) + "Sunscreen and a hat are strongly recommended.</p>" +
        "<p>" + N(7) + "<strong>Safety rules.</strong> Stay on the bank; no volunteer may enter water above knee depth for any reason. " +
        N(8) + "Do not pick up needles, broken glass, or containers of unknown liquid. " +
        N(9) + "Instead, mark the spot with an orange flag from your kit and report it to a team leader in a yellow vest. " +
        N(10) + "If you hear three short whistle blasts, stop working and return to the pavilion immediately.</p>" +
        "<p>" + N(11) + "<strong>Sorting and data.</strong> Each team carries a tally card. " +
        N(12) + "Before bagging an item, call out its category so that your team's recorder can mark it. " +
        N(13) + "Large items such as tires or furniture should be left at the water's edge and reported, not dragged, because crews with equipment will remove them on Monday.</p>" +
        "<p>" + N(14) + "<strong>Service hours.</strong> Students who need service hours must sign both in and out at the pavilion. " +
        N(15) + "Hours are recorded only for the time between those two signatures, and certificates will be emailed within two weeks.</p>" +
        "<p>" + N(16) + "<strong>Weather.</strong> If heavy rain or lightning is forecast, the event moves to Sunday, April 19, at the same times. " +
        N(17) + "Check the Greenway Alliance website by 7:00 a.m. Saturday for any change, and remember that a postponed cleanup still needs every pair of hands that signed up.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          stem: "The primary purpose of the Greenway volunteer guide is to —",
          choices: [
            { letter: "A", text: "persuade residents to stop littering near the river" },
            { letter: "B", text: "prepare volunteers to take part safely and effectively" },
            { letter: "C", text: "report how much trash was collected at the last cleanup" },
            { letter: "D", text: "explain the history of the Greenway Alliance" }
          ],
          correct: "B"
        },
        {
          id: "glass",
          sol: "11.RI.1.B",
          stem: "According to the guide, what should a volunteer do after finding broken glass on the shoreline?",
          choices: [
            { letter: "A", text: "Pick it up with the grabber and put it in a black bag." },
            { letter: "B", text: "Blow three short whistle blasts to warn other volunteers." },
            { letter: "C", text: "Leave it at the water's edge for Monday's equipment crew." },
            { letter: "D", text: "Flag the spot and tell a team leader in a yellow vest." }
          ],
          correct: "D"
        },
        {
          id: "recommend",
          sol: "11.RI.1.C",
          stem: "Which sentence in the guide gives a recommendation rather than a requirement?",
          choices: [
            { letter: "A", text: "sentence 6" },
            { letter: "B", text: "sentence 4" },
            { letter: "C", text: "sentence 7" },
            { letter: "D", text: "sentence 14" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          stem: "The bold headings in the Greenway guide help the reader mainly by —",
          choices: [
            { letter: "A", text: "showing the order in which the cleanup tasks happen" },
            { letter: "B", text: "marking which rules are more important than others" },
            { letter: "C", text: "grouping instructions so specific details are easy to find" },
            { letter: "D", text: "separating the rules for adults from the rules for students" }
          ],
          correct: "C"
        },
        {
          id: "large",
          sol: "11.RI.2.B",
          stem: "Sentence 13 of the Greenway guide serves mainly to —",
          choices: [
            { letter: "A", text: "list the most common items found during past cleanups" },
            { letter: "B", text: "explain how to handle items too big for volunteers" },
            { letter: "C", text: "warn volunteers that the cleanup may continue on Monday" },
            { letter: "D", text: "describe how the tally card should be filled out" }
          ],
          correct: "B"
        },
        {
          id: "signout",
          sol: "11.RI.2.C",
          stem: "Which sentence makes clear that a student who forgets to sign out may not receive full credit?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 12" },
            { letter: "D", text: "sentence 15" }
          ],
          correct: "D"
        },
        {
          id: "anyreason",
          sol: "11.RI.2.C",
          stem: "In sentence 7, the phrase for any reason mainly functions to —",
          choices: [
            { letter: "A", text: "allow team leaders to make exceptions when needed" },
            { letter: "B", text: "explain why the water is dangerous in April" },
            { letter: "C", text: "stress that the rule has no exceptions at all" },
            { letter: "D", text: "suggest that some volunteers may need to swim" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── ARGUMENT ───────────────────────── */
    {
      id: "g11-ri-c99-truss",
      family: "G11",
      title: "Keep the Old Truss",
      kind: "Argument · 11.RI",
      blurb: "A resident argues that the Calloway Mill Bridge should become a trail crossing, not scrap.",
      level: 3,
      passage:
        "<p>" + N(1) + "The county's plan for the Calloway Mill Bridge is efficient, affordable, and, I believe, a mistake. " +
        N(2) + "Next spring, crews intend to demolish the narrow steel truss that has crossed Calloway Creek since 1912 and replace it with a wider concrete span built for two lanes of traffic. " +
        N(3) + "The new bridge is necessary; the old one has carried cars for the last time, and no one should argue otherwise. " +
        N(4) + "But demolition is not the only alternative. " +
        N(5) + "The county could build the new span a short distance upstream, an option its own engineering report lists, and convert the old truss into a crossing for walkers and cyclists.</p>" +
        "<p>" + N(6) + "Supporters of demolition point to cost, and their concern is fair. " +
        N(7) + "According to the report, rehabilitating the truss for foot traffic would add about $640,000 to the project. " +
        N(8) + "Yet the same report notes that roughly half of that sum could be covered by state grants for historic structures, grants that disappear the moment the bridge does. " +
        N(9) + "A pedestrian crossing would also link the two halves of the Mill Creek Trail, which now dead-ends on either bank and forces walkers onto the road's narrow shoulder.</p>" +
        "<p>" + N(10) + "There is a less measurable argument, too. " +
        N(11) + "Old bridges are not simply roads; they are records. " +
        N(12) + "The rivets on the Calloway truss were driven by hand, and the plaque on its east portal names the ironworks that built it, one of the town's largest employers a century ago. " +
        N(13) + "Every resident who has crossed that bridge has passed through a piece of the town's working history, often without noticing. " +
        N(14) + "A concrete span will carry traffic more smoothly, but it will tell no one anything.</p>" +
        "<p>" + N(15) + "Some will say nostalgia is a poor reason to spend public money, and on its own, it is. " +
        N(16) + "My case does not rest on nostalgia alone; it rests on a safer trail, an available grant, and a structure that still has sound bones beneath its peeling paint. " +
        N(17) + "The county board will vote on the final design on March 3. " +
        N(18) + "Residents who want both a modern road and a preserved past should attend and say so, because once a truss is cut into scrap, no budget can bring it back.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.A",
          stem: "What is the author's central claim about the Calloway Mill Bridge?",
          choices: [
            { letter: "A", text: "The old truss should be kept as a trail crossing beside a new road bridge." },
            { letter: "B", text: "The county should cancel its plans to build any new bridge at all." },
            { letter: "C", text: "The old truss can safely carry two lanes of traffic for many more years." },
            { letter: "D", text: "The concrete span should be built from steel to match the old one." }
          ],
          correct: "A"
        },
        {
          id: "final",
          sol: "11.RI.1.A",
          stem: "The author's primary purpose in sentence 18 is to —",
          choices: [
            { letter: "A", text: "explain how a steel truss is taken apart for scrap" },
            { letter: "B", text: "admit that the county's budget cannot cover the plan" },
            { letter: "C", text: "praise the county board for its careful decisions" },
            { letter: "D", text: "urge readers to attend the vote and voice support" }
          ],
          correct: "D"
        },
        {
          id: "cost",
          sol: "11.RI.1.B",
          stem: "Which detail most directly answers the cost objection raised in sentence 6?",
          choices: [
            { letter: "A", text: "The truss has crossed Calloway Creek since 1912." },
            { letter: "B", text: "The rivets on the truss were driven by hand." },
            { letter: "C", text: "State grants could cover roughly half the added cost." },
            { letter: "D", text: "The county board will vote on the design March 3." }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          stem: "Which statement from the Calloway Mill Bridge editorial is an opinion rather than a verifiable fact?",
          choices: [
            { letter: "A", text: "The truss has crossed the creek since 1912." },
            { letter: "B", text: "Old bridges are not simply roads; they are records." },
            { letter: "C", text: "Rehabilitation would add about $640,000." },
            { letter: "D", text: "The board will vote on the final design on March 3." }
          ],
          correct: "B"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          stem: "How does the author develop the argument in sentences 6–16?",
          choices: [
            { letter: "A", text: "by telling the story of the ironworks from its founding" },
            { letter: "B", text: "by comparing the truss with bridges in nearby counties" },
            { letter: "C", text: "by listing the steps the county must take to build the span" },
            { letter: "D", text: "by answering an objection, giving benefits, then adding history" }
          ],
          correct: "D"
        },
        {
          id: "nostalgia",
          sol: "11.RI.2.B",
          stem: "The author includes sentence 15 mainly to —",
          choices: [
            { letter: "A", text: "concede an objection before showing the case does not rest on it" },
            { letter: "B", text: "admit that the argument for saving the bridge is mostly emotional" },
            { letter: "C", text: "criticize residents who care more about money than about history" },
            { letter: "D", text: "introduce a new reason why the county should spend public money" }
          ],
          correct: "A"
        },
        {
          id: "tellnoone",
          sol: "11.RI.2.C",
          stem: "In sentence 14, the author says a concrete span will tell no one anything mainly to —",
          choices: [
            { letter: "A", text: "suggest that the new bridge will lack proper signs" },
            { letter: "B", text: "argue that concrete is weaker than hand-driven steel" },
            { letter: "C", text: "stress that the new bridge lacks the old one's history" },
            { letter: "D", text: "predict that drivers will dislike the wider new span" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── VOCABULARY ───────────────────────── */
    {
      id: "g11-rv-c99-swarm",
      family: "G11",
      title: "The Swarm on the Mailbox",
      kind: "Vocabulary · 11.RV",
      blurb: "A humming beard on the Nguyens' mailbox, a beekeeper with a cardboard box, and six words in context.",
      level: 2,
      passage:
        "<p>" + N(1) + "The swarm arrived on a Tuesday afternoon and settled on the Nguyens' mailbox, a dark, humming beard about the size of a football. " +
        N(2) + "Neighbors gathered at a careful distance, and several parents pulled their children back onto the porch, plainly <strong>apprehensive</strong> about the thousands of insects only a few yards away. " +
        N(3) + "Linh Nguyen, who was sixteen and had read exactly one book about bees, called the number on the county's swarm-removal list. " +
        N(4) + "Beatriz Solano arrived twenty minutes later carrying a cardboard box, a bedsheet, and no protective veil at all. " +
        N(5) + "\"A swarm is usually <strong>docile</strong>,\" she told the crowd, \"gentle and slow to sting, because the bees have no home to defend and their stomachs are full of honey.\" " +
        N(6) + "She explained that the colony had split in two: the old queen had left the original hive with about half the workers, and the cluster on the mailbox was resting while scouts searched for a new home. " +
        N(7) + "Her goal was to <strong>relocate</strong> the swarm, moving it into a hive box at her own apiary before the scouts chose a hollow wall in someone's house. " +
        N(8) + "She spread the sheet below the mailbox, held the box underneath the cluster, and gave the post one sharp tap. " +
        N(9) + "Most of the bees dropped into the box in a single, <strong>cohesive</strong> mass, clinging to one another so tightly that they fell like a dropped glove rather than a scattered handful. " +
        N(10) + "The queen, Beatriz said, was almost certainly inside, and that detail was <strong>indispensable</strong>: if she was in the box, the stragglers would follow her scent, and if not, they would all return to the mailbox. " +
        N(11) + "Within half an hour, a steady stream of bees was marching across the sheet and into the opening. " +
        N(12) + "Linh noticed that the entrance had become <strong>conspicuous</strong>, easy to spot from across the yard because of the crowd of bees fanning their wings at its edge to signal the way. " +
        N(13) + "By sunset, the mailbox was bare except for a faint smell of wax. " +
        N(14) + "The neighbors who had hovered on porches now crowded close to ask questions, and Linh asked the most of all, beginning with whether Beatriz ever needed an assistant." +
        "</p>",
      claims: [
        {
          id: "relocate",
          sol: "11.RV.1.A",
          stem: "The word relocate in sentence 7 begins with the prefix re-, as do rebuild and reopen. In all three words, the prefix re- signals —",
          choices: [
            { letter: "A", text: "doing something halfway" },
            { letter: "B", text: "doing something again or anew" },
            { letter: "C", text: "doing something in advance" },
            { letter: "D", text: "refusing to do something" }
          ],
          correct: "B"
        },
        {
          id: "indispensable",
          sol: "11.RV.1.A",
          stem: "The word indispensable in sentence 10 is built from the prefix in- (not), the root dispense (to do without), and the suffix -able. Based on these parts, indispensable means —",
          choices: [
            { letter: "A", text: "easy to give away freely" },
            { letter: "B", text: "able to be measured exactly" },
            { letter: "C", text: "too vital to do without" },
            { letter: "D", text: "not yet discovered" }
          ],
          correct: "C"
        },
        {
          id: "docile",
          sol: "11.RV.1.B",
          stem: "In sentence 5, Beatriz's own explanation shows that docile means —",
          choices: [
            { letter: "A", text: "gentle and unlikely to attack" },
            { letter: "B", text: "hungry and searching for food" },
            { letter: "C", text: "lost and unable to find home" },
            { letter: "D", text: "loud and constantly moving" }
          ],
          correct: "A"
        },
        {
          id: "cohesive",
          sol: "11.RV.1.B",
          stem: "Which detail from sentence 9 best clarifies the meaning of cohesive?",
          choices: [
            { letter: "A", text: "Most of the bees dropped into the box" },
            { letter: "B", text: "in a single" },
            { letter: "C", text: "rather than a scattered handful" },
            { letter: "D", text: "clinging to one another so tightly" }
          ],
          correct: "D"
        },
        {
          id: "conspicuous",
          sol: "11.RV.1.B",
          stem: "In sentence 12, the words that follow conspicuous show that the word means —",
          choices: [
            { letter: "A", text: "crowded and noisy" },
            { letter: "B", text: "partly hidden" },
            { letter: "C", text: "easily noticed" },
            { letter: "D", text: "newly built" }
          ],
          correct: "C"
        },
        {
          id: "apprehensive",
          sol: "11.RV.1.C",
          stem: "In sentence 2, the word apprehensive suggests that the parents feel —",
          choices: [
            { letter: "A", text: "uneasy about possible harm" },
            { letter: "B", text: "curious about the insects" },
            { letter: "C", text: "angry at the Nguyens" },
            { letter: "D", text: "bored by the long wait" }
          ],
          correct: "A"
        },
        {
          id: "beard",
          sol: "11.RV.1.C",
          stem: "In sentence 1, describing the swarm as a humming beard most nearly conveys that it —",
          choices: [
            { letter: "A", text: "was about to fly away" },
            { letter: "B", text: "had built a comb inside the box" },
            { letter: "C", text: "frightened the neighborhood's pets" },
            { letter: "D", text: "hung in a thick, fuzzy clump" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rv-c99-wobble",
      family: "G11",
      title: "The Wobble over Port Selwyn",
      kind: "Vocabulary · 11.RV",
      blurb: "A new footbridge sways under its first crowd, and engineers learn to design for people, not just loads.",
      level: 3,
      passage:
        "<p>" + N(1) + "On the morning the Halvorsen Footbridge opened in the harbor city of Port Selwyn, thousands of people crowded onto its slender steel deck to cross the water for the first time. " +
        N(2) + "Within minutes, the bridge began to sway gently from side to side, and the <strong>oscillation</strong>, a steady back-and-forth swing like that of a slow pendulum, grew more noticeable with every crowd that stepped aboard. " +
        N(3) + "Engineers soon identified the cause, and it was not wind. " +
        N(4) + "When a deck sways even slightly, walkers instinctively adjust their steps to keep their balance, and those adjustments tend to <strong>synchronize</strong>, so that hundreds of strangers begin stepping in time without meaning to. " +
        N(5) + "Their matched footfalls then <strong>amplify</strong> the motion: each shared step pushes the deck a little farther, which causes more walkers to fall into rhythm, which pushes the deck farther still. " +
        N(6) + "Such a loop between a structure and its users was not entirely unknown, but the size of the sway on the Halvorsen was <strong>unprecedented</strong> for a footbridge of its design. " +
        N(7) + "The bridge was closed after two days, to considerable public embarrassment. " +
        N(8) + "Rather than tear it down, the city chose to <strong>retrofit</strong> it, adding new equipment to the existing structure instead of building a new one. " +
        N(9) + "Workers installed dozens of dampers beneath the deck, devices that work like the shock absorbers on a car, soaking up motion before it can build. " +
        N(10) + "The dampers did not stop people from walking in step, but they did <strong>mitigate</strong> the effect, reducing the sway to a level that walkers could barely feel. " +
        N(11) + "When the bridge reopened more than a year later, engineers ran a test with a crowd of volunteers marching deliberately in rhythm. " +
        N(12) + "The deck held nearly still. " +
        N(13) + "Today the Halvorsen carries commuters and tourists without incident, and its brief, wobbly debut is taught in engineering classes as a reminder that a design must account not only for loads and weather but also for the behavior of the people who use it. " +
        N(14) + "Residents, however, still call it the Wobble, a nickname that has outlasted the problem it describes." +
        "</p>",
      claims: [
        {
          id: "synchronize",
          sol: "11.RV.1.A",
          stem: "The word synchronize in sentence 4 contains the Greek prefix syn- (together) and the root chron (time). Based on these parts, synchronize means to —",
          choices: [
            { letter: "A", text: "slow down gradually" },
            { letter: "B", text: "move in opposite directions" },
            { letter: "C", text: "happen at the same time" },
            { letter: "D", text: "stop for a short period" }
          ],
          correct: "C"
        },
        {
          id: "retrofit",
          sol: "11.RV.1.A",
          stem: "The word retrofit in sentence 8 begins with the prefix retro-, meaning backward, as in retrospect. The prefix helps show that a retrofit is —",
          choices: [
            { letter: "A", text: "added later to an existing structure" },
            { letter: "B", text: "designed before any construction begins" },
            { letter: "C", text: "removed because it no longer works" },
            { letter: "D", text: "copied from a much older bridge design" }
          ],
          correct: "A"
        },
        {
          id: "unprecedented",
          sol: "11.RV.1.A",
          stem: "The word unprecedented in sentence 6 joins the prefix un- with precedent, meaning an earlier example. Unprecedented therefore describes something —",
          choices: [
            { letter: "A", text: "that happens every year" },
            { letter: "B", text: "that was planned in advance" },
            { letter: "C", text: "that cannot be measured" },
            { letter: "D", text: "with no earlier example" }
          ],
          correct: "D"
        },
        {
          id: "oscillation",
          sol: "11.RV.1.B",
          stem: "In sentence 2, the phrase set off by commas shows that oscillation means —",
          choices: [
            { letter: "A", text: "a sudden, complete collapse" },
            { letter: "B", text: "a repeated swinging motion" },
            { letter: "C", text: "a loud, ringing sound" },
            { letter: "D", text: "a slow climb upward" }
          ],
          correct: "B"
        },
        {
          id: "amplify",
          sol: "11.RV.1.B",
          stem: "In sentence 5, the explanation after the colon shows that amplify means —",
          choices: [
            { letter: "A", text: "make larger or stronger" },
            { letter: "B", text: "bring to a complete stop" },
            { letter: "C", text: "turn in a new direction" },
            { letter: "D", text: "hide from view" }
          ],
          correct: "A"
        },
        {
          id: "mitigate",
          sol: "11.RV.1.C",
          stem: "In sentence 10, the word mitigate most nearly means —",
          choices: [
            { letter: "A", text: "explain" },
            { letter: "B", text: "reverse" },
            { letter: "C", text: "measure" },
            { letter: "D", text: "lessen" }
          ],
          correct: "D"
        },
        {
          id: "nickname",
          sol: "11.RV.1.C",
          stem: "The residents' nickname for the bridge in sentence 14 most likely carries a connotation that is —",
          choices: [
            { letter: "A", text: "fearful and full of warning" },
            { letter: "B", text: "good-humored and teasing" },
            { letter: "C", text: "formal and highly technical" },
            { letter: "D", text: "bitter and resentful" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rv-c99-blacks",
      family: "G11",
      title: "Think in the Dark",
      kind: "Vocabulary · 11.RV",
      blurb: "A first-year stage crew member, a cumbersome bench, and a broken leg fifteen seconds before the lights.",
      level: 1,
      passage:
        "<p>" + N(1) + "On her first day with the stage crew, Adaeze Okoro learned that the most important rule backstage was to be <strong>inconspicuous</strong>: dressed in black, quiet as a shadow, and never noticed by the audience. " +
        N(2) + "Her crew chief, a senior named Marcus Bell, warned her that a crew member who drew attention had made a mistake, even if the mistake looked heroic. " +
        N(3) + "As a <strong>novice</strong>, Adaeze was given a simple job: moving a park bench on and off the stage during scene changes. " +
        N(4) + "The bench was <strong>cumbersome</strong>, so heavy and awkward that she had to tip it onto two legs and walk it across the floor like a clumsy dance partner. " +
        N(5) + "Each scene change was called a <strong>transition</strong>, the brief, dark stretch between the end of one scene and the start of the next, and the director wanted every one finished in under fifteen seconds. " +
        N(6) + "Marcus was <strong>meticulous</strong> about those seconds. " +
        N(7) + "He timed each change with a stopwatch, marked the exact spot for every set piece with glow tape, and reviewed his notes after every rehearsal, checking even the details that had gone well. " +
        N(8) + "During the final dress rehearsal, the bench caught on a cable and one of its legs snapped loose. " +
        N(9) + "There was no time to fix it and no spare bench anywhere in the building. " +
        N(10) + "Adaeze had to <strong>improvise</strong>. " +
        N(11) + "She grabbed two wooden crates from the props shelf, stacked them where the bench belonged, and draped a gray blanket over them, inventing a solution on the spot with whatever was within reach. " +
        N(12) + "The actors sat down on the crates without missing a line. " +
        N(13) + "Afterward, the director decided that she liked the crates better than the bench, and they stayed in the show for all four performances. " +
        N(14) + "Marcus wrote one line in his notebook that night, which Adaeze did not see until the cast party a week later: \"New kid can think in the dark.\"" +
        "</p>",
      claims: [
        {
          id: "inconspicuous",
          sol: "11.RV.1.A",
          stem: "The word inconspicuous in sentence 1 begins with the prefix in-, as do incomplete and invisible. In all three words, the prefix in- means —",
          choices: [
            { letter: "A", text: "inside" },
            { letter: "B", text: "not" },
            { letter: "C", text: "very" },
            { letter: "D", text: "again" }
          ],
          correct: "B"
        },
        {
          id: "transition",
          sol: "11.RV.1.A",
          stem: "The word transition in sentence 5 begins with the Latin prefix trans-, meaning across. This prefix helps explain why a transition is —",
          choices: [
            { letter: "A", text: "a long pause that ends a performance" },
            { letter: "B", text: "a set piece that stays onstage" },
            { letter: "C", text: "a rule every crew member must memorize" },
            { letter: "D", text: "a passage from one scene to the next" }
          ],
          correct: "D"
        },
        {
          id: "cumbersome",
          sol: "11.RV.1.B",
          stem: "In sentence 4, the words that follow cumbersome show that it means —",
          choices: [
            { letter: "A", text: "heavy and hard to handle" },
            { letter: "B", text: "old and falling apart" },
            { letter: "C", text: "brightly painted and new" },
            { letter: "D", text: "borrowed from a city park" }
          ],
          correct: "A"
        },
        {
          id: "improvise",
          sol: "11.RV.1.B",
          stem: "In sentence 11, the phrase inventing a solution on the spot helps the reader understand that improvise means to —",
          choices: [
            { letter: "A", text: "follow a plan written well in advance" },
            { letter: "B", text: "ask a more experienced person for help" },
            { letter: "C", text: "make something quickly from what is at hand" },
            { letter: "D", text: "delay a task until there is more time" }
          ],
          correct: "C"
        },
        {
          id: "novice",
          sol: "11.RV.1.C",
          stem: "In sentence 3, the word novice most nearly means —",
          choices: [
            { letter: "A", text: "a beginner" },
            { letter: "B", text: "a leader" },
            { letter: "C", text: "a performer" },
            { letter: "D", text: "a visitor" }
          ],
          correct: "A"
        },
        {
          id: "meticulous",
          sol: "11.RV.1.C",
          stem: "In sentence 6, the word meticulous most nearly means —",
          choices: [
            { letter: "A", text: "nervous and easily upset" },
            { letter: "B", text: "relaxed and easygoing about rules" },
            { letter: "C", text: "proud and boastful" },
            { letter: "D", text: "very careful about details" }
          ],
          correct: "D"
        },
        {
          id: "darkphrase",
          sol: "11.RV.1.C",
          stem: "In sentence 14, the phrase think in the dark has a double meaning. It refers both to working backstage and to —",
          choices: [
            { letter: "A", text: "being afraid of the darkened theater" },
            { letter: "B", text: "keeping secrets from the director" },
            { letter: "C", text: "solving problems calmly without warning" },
            { letter: "D", text: "studying her lines late into the night" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS ───────────────────────── */
    {
      id: "g11-dsr-c99-kessler",
      family: "G11",
      title: "Two Views of Kessler Creek",
      kind: "Paired texts · 11.DSR",
      blurb: "A news brief counts the pounds; a volunteer's journal remembers a heron on a refrigerator.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Volunteers Clear Two Tons from Kessler Creek</strong></p>" +
        "<p>" + N(1) + "More than 140 volunteers removed about 4,100 pounds of trash from Kessler Creek on Saturday during the watershed council's annual spring cleanup. " +
        N(2) + "Crews worked along three miles of shoreline between the Route 9 overpass and Lanford Park, collecting bottles, cans, tires, and a rusted lawn mower. " +
        N(3) + "Council director Elena Vasquez said the turnout was the largest in the event's eleven-year history. " +
        N(4) + "\"Every pound out of this creek is a pound that does not reach the bay,\" Vasquez said. " +
        N(5) + "She added that the amount of trash collected has dropped slightly each year for the past four years, which she credited partly to new storm-drain screens installed by the city. " +
        N(6) + "Not every problem was solved. " +
        N(7) + "Volunteers reported several large items, including a refrigerator lodged against the old mill dam, that could not be removed by hand. " +
        N(8) + "The council has asked the city's public works department to send equipment before summer, when low water will make the dam easier to reach. " +
        N(9) + "Volunteers who wish to join the fall cleanup can register on the council's website beginning in August.</p>" +
        "<p><strong>Text 2 — From the Journal of Tomás Reyes, Age 17</strong></p>" +
        "<p>" + N(10) + "I signed up because my sister said I needed something besides video games on my college applications, and I was ready to hate it. " +
        N(11) + "For the first hour, I did. " +
        N(12) + "My boots filled with mud, and every bottle I picked up seemed to reveal two more hiding behind it. " +
        N(13) + "Then, near the old mill dam, I saw the refrigerator. " +
        N(14) + "It was lying on its back in the current like something that had given up, and a heron was standing on top of it, completely unbothered. " +
        N(15) + "Four of us tried to move it and could not budge it an inch. " +
        N(16) + "The newspaper will probably print some big number tomorrow, and the number will be true. " +
        N(17) + "But what I will remember is that heron, standing on a piece of our junk as if the creek had decided to make the best of it. " +
        N(18) + "I don't want the creek to have to make the best of anything. " +
        N(19) + "I signed up for the fall cleanup before I even took my boots off.</p>",
      claims: [
        {
          id: "central",
          sol: "11.DSR.D",
          stem: "Which idea is central to both texts about the Kessler Creek cleanup?",
          choices: [
            { letter: "A", text: "The cleanup made real progress, but some problems still need more help." },
            { letter: "B", text: "The city's storm-drain screens have solved the creek's trash problem." },
            { letter: "C", text: "Most volunteers join cleanups only to improve their applications." },
            { letter: "D", text: "Wildlife along the creek has fully recovered from years of pollution." }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          stem: "Which statement best describes how the two Kessler Creek texts differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 argues for a new policy; Text 2 explains how cleanups work." },
            { letter: "B", text: "Text 1 tells a personal story; Text 2 summarizes data for officials." },
            { letter: "C", text: "Text 1 reports the event's facts; Text 2 reflects on one person's day." },
            { letter: "D", text: "Text 1 recruits volunteers; Text 2 complains about the newspaper." }
          ],
          correct: "C"
        },
        {
          id: "bothdetail",
          sol: "11.DSR.D",
          stem: "Which detail appears in both the news brief and the journal entry?",
          choices: [
            { letter: "A", text: "the rusted lawn mower pulled from the creek" },
            { letter: "B", text: "the heron that stood in the current" },
            { letter: "C", text: "the new storm-drain screens" },
            { letter: "D", text: "the refrigerator by the old mill dam" }
          ],
          correct: "D"
        },
        {
          id: "selecttwo",
          sol: "11.DSR.D",
          stem: "Select TWO sentences, one from each text, that together show that some trash could not be removed by volunteers.",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "tone",
          sol: "11.DSR.E",
          stem: "Compared with the news brief, the journal entry's tone is more —",
          choices: [
            { letter: "A", text: "formal and objective" },
            { letter: "B", text: "personal and reflective" },
            { letter: "C", text: "angry and accusing" },
            { letter: "D", text: "playful and careless" }
          ],
          correct: "B"
        },
        {
          id: "bignumber",
          sol: "11.DSR.E",
          stem: "In sentence 16, Tomás predicts that the newspaper will print some big number. Which detail from Text 1 does his comment most directly anticipate?",
          choices: [
            { letter: "A", text: "the 4,100 pounds of trash removed" },
            { letter: "B", text: "the three miles of shoreline cleaned" },
            { letter: "C", text: "the event's eleven-year history" },
            { letter: "D", text: "the fall registration opening in August" }
          ],
          correct: "A"
        },
        {
          id: "conclude",
          sol: "11.DSR.E",
          stem: "A reader who considers both Kessler Creek texts could best conclude that —",
          choices: [
            { letter: "A", text: "the cleanup failed because the refrigerator was left behind" },
            { letter: "B", text: "Tomás doubts that the newspaper's numbers are accurate" },
            { letter: "C", text: "the council plans to stop holding cleanups in the spring" },
            { letter: "D", text: "the creek is cleaner, yet steady effort is still needed" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-dsr-c99-backyardhives",
      family: "G11",
      title: "Bees Next Door?",
      kind: "Paired texts · 11.DSR",
      blurb: "A grandmother worries about stings; a beekeeping club answers with rules.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Letter to the Westbrook Village Board</strong></p>" +
        "<p>" + N(1) + "I am writing to ask the board to reject the proposal that would allow honeybee hives in residential backyards. " +
        N(2) + "My grandson is severely allergic to bee stings and carries an emergency injector wherever he goes. " +
        N(3) + "He visits my home most weekends, and our yard is small; the lot beside mine is only forty feet away. " +
        N(4) + "Supporters say bees are gentle, and I do not doubt that most of the time they are. " +
        N(5) + "But \"most of the time\" is little comfort when a single sting could send a child to the hospital. " +
        N(6) + "I also worry about who will enforce any rules. " +
        N(7) + "Our village has one code officer for more than three thousand homes, and complaints about barking dogs already take weeks to resolve. " +
        N(8) + "If a hive is placed too close to a fence or left neglected, I have little confidence that anyone will act quickly. " +
        N(9) + "I understand that pollinators are important, and I plant flowers for them in my own garden. " +
        N(10) + "I simply ask that the board protect families like mine before it protects a hobby. — Ruth Abernathy</p>" +
        "<p><strong>Text 2 — Response from the Westbrook High Beekeeping Club</strong></p>" +
        "<p>" + N(11) + "We share Ms. Abernathy's concern for her grandson's safety, and we believe the proposal can be written to address it. " +
        N(12) + "Several nearby towns require hives to sit at least twenty-five feet from property lines, with a six-foot fence or hedge that forces bees to fly upward, well above head height. " +
        N(13) + "Those towns also limit the number of hives per lot and require beekeepers to provide water so that bees do not visit neighbors' pools and birdbaths. " +
        N(14) + "On enforcement, we propose that every hive be registered for a small yearly fee. " +
        N(15) + "That money could pay an inspector trained in beekeeping, so complaints would not wait in line behind barking dogs. " +
        N(16) + "Registration would also let the village notify neighbors before a hive is installed, giving families with allergies a chance to speak up early. " +
        N(17) + "Bees are not merely a hobby; they pollinate the gardens and fruit trees that many residents already enjoy. " +
        N(18) + "We ask the board not to choose between safety and pollinators, but to write a rule that serves both.</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          stem: "Which concern is addressed in both the letter and the club's response?",
          choices: [
            { letter: "A", text: "the price of honey sold in the village" },
            { letter: "B", text: "the decline of pollinators in nearby towns" },
            { letter: "C", text: "how rules about hives would be enforced" },
            { letter: "D", text: "whether students may keep hives at school" }
          ],
          correct: "C"
        },
        {
          id: "goals",
          sol: "11.DSR.D",
          stem: "Which statement best describes how the letter and the club's response differ in their goals?",
          choices: [
            { letter: "A", text: "The letter seeks rejection; the response seeks approval with safeguards." },
            { letter: "B", text: "The letter seeks a fee for hives; the response seeks a ban on hives." },
            { letter: "C", text: "The letter seeks more code officers; the response seeks fewer rules." },
            { letter: "D", text: "The letter seeks a delay; the response seeks an immediate vote." }
          ],
          correct: "A"
        },
        {
          id: "selecttwo",
          sol: "11.DSR.D",
          stem: "Select TWO sentences from Text 2 that most directly respond to Ms. Abernathy's worry about enforcement in sentences 6–8.",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "treats",
          sol: "11.DSR.E",
          stem: "Which statement best describes how the club's response treats Ms. Abernathy's concerns?",
          choices: [
            { letter: "A", text: "It dismisses them as exaggerated and unlikely." },
            { letter: "B", text: "It agrees with them and withdraws its support." },
            { letter: "C", text: "It ignores them and focuses only on honey." },
            { letter: "D", text: "It accepts them as valid and offers specific fixes." }
          ],
          correct: "D"
        },
        {
          id: "hobby",
          sol: "11.DSR.E",
          stem: "In sentence 17, the club responds to Ms. Abernathy's use of the word hobby in sentence 10 by —",
          choices: [
            { letter: "A", text: "admitting that beekeeping is mainly a pastime" },
            { letter: "B", text: "arguing that bees benefit the wider community" },
            { letter: "C", text: "suggesting that she take up beekeeping herself" },
            { letter: "D", text: "pointing out that she also keeps a garden" }
          ],
          correct: "B"
        },
        {
          id: "answers",
          sol: "11.DSR.E",
          stem: "Which sentence from Text 1 does the club's proposal in sentence 12 most directly answer?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "A"
        },
        {
          id: "boardmember",
          sol: "11.DSR.E",
          stem: "A village board member who read both texts could best conclude that —",
          choices: [
            { letter: "A", text: "backyard hives pose no real danger to anyone in the village" },
            { letter: "B", text: "the club has already proven that its rules work in Westbrook" },
            { letter: "C", text: "Ms. Abernathy would support hives if a fee were charged" },
            { letter: "D", text: "careful rules might reduce, though not remove, the risks" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
