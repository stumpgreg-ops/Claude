/* SOL Labyrinth — v5.15 expansion: Grade 11 medium passages (Virginia G11), file 93.
 * Twenty-one original medium packs (170–290 words; poems 12–16 lines; paired texts 110–150 each)
 * on a skate park, a cooking contest, a planetarium, and tree climbing arborists.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────── 1 · Literary (level 1) · skate park ───────── */
    {
      id: "g11-rl-c93-lip-of-the-bowl",
      family: "G11",
      title: "The Lip of the Bowl",
      kind: "Literary · 11.RL",
      blurb: "Teo has backed away from the deep bowl three Saturdays in a row.",
      level: 1,
      passage:
        "<p>" + N(1) + "For three Saturdays in a row, Teo Bautista had stood at the lip of the deep bowl at Riverside Skate Park and stepped back. " +
        N(2) + "The bowl was eight feet deep, smooth gray concrete curving down like the inside of a cereal bowl. " +
        N(3) + "Younger kids dropped in without even pausing, their wheels humming as they swooped up the far wall. " +
        N(4) + "Teo would set his tail on the coping, lean forward an inch, and then pretend he needed to tighten his shoelace.</p>" +
        "<p>" + N(5) + "This Saturday, a woman with gray braids and a scuffed helmet sat down beside him on the deck. " +
        N(6) + "\"First time on this one?\" she asked. " +
        N(7) + "Teo nodded, embarrassed that it showed. " +
        N(8) + "\"Everybody thinks the hard part is going down,\" she said. \"It isn't. The hard part is deciding your weight belongs to the board instead of to the ground behind you.\" " +
        N(9) + "She told him to look at the far wall, not at the bottom, and to push his front foot down as if he were stepping onto a moving bus. " +
        N(10) + "Then she dropped in herself, slow and loose, and rolled back up to the deck as if it were nothing.</p>" +
        "<p>" + N(11) + "Teo set his tail on the coping again. " +
        N(12) + "His heart thumped, but this time he kept his eyes on the far wall. " +
        N(13) + "He leaned, pushed his front foot down, and the ground behind him was suddenly gone. " +
        N(14) + "The bottom of the bowl came up fast and then flattened out beneath his wheels. " +
        N(15) + "He did not make it up the far wall; he bailed halfway and slid down on his knee pads. " +
        N(16) + "But when he climbed back to the deck, the woman was already holding his board out to him, and he took it.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Teo and the deep bowl?",
          choices: [
            { letter: "A", text: "Younger people learn physical skills faster than older people do." },
            { letter: "B", text: "Courage begins with committing to a choice, not with a perfect result." },
            { letter: "C", text: "Strangers rarely understand the fears of someone they have just met." },
            { letter: "D", text: "A skill is worth practicing only once a person can do it without falling." }
          ],
          correct: "B"
        },
        {
          id: "teo-start",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "In sentences 1 through 4, Teo is best described as —",
          choices: [
            { letter: "A", text: "bored by a skate park he has outgrown" },
            { letter: "B", text: "annoyed by the younger skaters in his way" },
            { letter: "C", text: "careless about the safety gear he needs" },
            { letter: "D", text: "hesitant and trying to hide his fear" }
          ],
          correct: "D"
        },
        {
          id: "bus",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 9, the advice to step down as if onto a moving bus mainly suggests that Teo must —",
          choices: [
            { letter: "A", text: "move his weight forward firmly, without holding back" },
            { letter: "B", text: "wait for the right moment while other skaters pass" },
            { letter: "C", text: "keep both feet off the board until it starts rolling" },
            { letter: "D", text: "go to the park at a quieter time of day" }
          ],
          correct: "A"
        },
        {
          id: "belongs",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 8, the woman says Teo's weight must belong to the board. She most nearly means that he must —",
          choices: [
            { letter: "A", text: "buy a heavier board that will hold him steady" },
            { letter: "B", text: "lose weight so that the board rolls faster" },
            { letter: "C", text: "trust the board instead of leaning back toward safety" },
            { letter: "D", text: "stand still on the deck until his balance improves" }
          ],
          correct: "C"
        },
        {
          id: "shoelace",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The detail in sentence 4 about Teo tightening his shoelace suggests that he —",
          choices: [
            { letter: "A", text: "is inventing an excuse so he will not have to drop in" },
            { letter: "B", text: "has learned that loose laces cause most skating falls" },
            { letter: "C", text: "wants the younger kids to notice his careful habits" },
            { letter: "D", text: "is waiting for the woman with gray braids to arrive" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The final sentence resolves the story of Teo's first drop by showing that he —",
          choices: [
            { letter: "A", text: "decides the deep bowl is too dangerous for now" },
            { letter: "B", text: "expects the woman to skate the bowl for him" },
            { letter: "C", text: "is ready to try again even though he fell" },
            { letter: "D", text: "feels ashamed that he bailed in front of others" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 2 · Literary (level 2) · cooking contest ───────── */
    {
      id: "g11-rl-c93-broken-sauce",
      family: "G11",
      title: "Eleven Minutes",
      kind: "Literary · 11.RL",
      blurb: "Mei-Lin's butter sauce breaks with eleven minutes left in a junior chef contest.",
      level: 2,
      passage:
        "<p>" + N(1) + "With eleven minutes left on the clock, Mei-Lin Huang's butter sauce broke. " +
        N(2) + "One moment it was glossy and pale as custard; the next, a slick of yellow grease was sliding away from a curdled clump at the bottom of the pan. " +
        N(3) + "Across the gym, which the Tri-County Junior Chef Challenge had filled with folding tables and borrowed burners, the other contestants kept chopping and stirring as though nothing had happened. " +
        N(4) + "Mei-Lin stared at the pan. " +
        N(5) + "Her fish was already resting, golden at the edges, and the whole plate had been built around that sauce.</p>" +
        "<p>" + N(6) + "She could hear her grandmother's voice from the cramped kitchen above the laundromat: \"A cook who panics cooks the same mistake twice.\" " +
        N(7) + "Her grandmother had said it while rescuing a pot of rice that Mei-Lin, age nine, had nearly scorched. " +
        N(8) + "So Mei-Lin did not dump the pan. " +
        N(9) + "She set it off the heat, dropped in a spoonful of cold water, and whisked in slow, steady circles, the way a person might calm a spooked animal rather than chase it. " +
        N(10) + "For a long moment nothing changed. " +
        N(11) + "Then the grease began to fold back in, thread by thread, until the sauce held together again, a little thinner than before but smooth. " +
        N(12) + "She plated with forty seconds to spare.</p>" +
        "<p>" + N(13) + "When the head judge, a man with reading glasses pushed up onto his forehead, asked about the sauce, Mei-Lin hesitated. " +
        N(14) + "\"It broke,\" she said. \"I fixed it, so it's thinner than I planned.\" " +
        N(15) + "The judge wrote something down, tasted again, and nodded once. " +
        N(16) + "She never learned what he wrote, but on the bus home she found she did not need to.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story of Mei-Lin's broken sauce most clearly develop?",
          choices: [
            { letter: "A", text: "Contests reward speed more than they reward skill." },
            { letter: "B", text: "Family advice is usually too old to help in modern situations." },
            { letter: "C", text: "Facing a setback calmly and honestly can matter more than approval." },
            { letter: "D", text: "A cook should never change a plan once a dish has begun." }
          ],
          correct: "C"
        },
        {
          id: "honest",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Mei-Lin's answer to the judge in sentence 14 reveals that she —",
          choices: [
            { letter: "A", text: "values being truthful about her work over impressing him" },
            { letter: "B", text: "expects the judge to give her extra time to start over" },
            { letter: "C", text: "blames the borrowed burners for ruining her sauce" },
            { letter: "D", text: "is too nervous to explain how the dish was made" }
          ],
          correct: "A"
        },
        {
          id: "animal",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 9, comparing Mei-Lin's whisking to calming a spooked animal mainly emphasizes her —",
          choices: [
            { letter: "A", text: "fear that the judges are watching her closely" },
            { letter: "B", text: "speed as she tries to beat the clock" },
            { letter: "C", text: "memory of the animals near her grandmother's home" },
            { letter: "D", text: "patience and gentleness rather than force" }
          ],
          correct: "D"
        },
        {
          id: "contrast",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 2, the shift from glossy and pale as custard to a slick of yellow grease mainly creates a sense of —",
          choices: [
            { letter: "A", text: "gradual, expected change" },
            { letter: "B", text: "sudden, alarming failure" },
            { letter: "C", text: "playful, lighthearted confusion" },
            { letter: "D", text: "quiet, peaceful routine" }
          ],
          correct: "B"
        },
        {
          id: "memory",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The author includes the memory of the grandmother in sentences 6 and 7 mainly to —",
          choices: [
            { letter: "A", text: "show that Mei-Lin has always disliked cooking rice" },
            { letter: "B", text: "suggest that Mei-Lin's family owns a laundromat" },
            { letter: "C", text: "introduce a second contest that Mei-Lin entered" },
            { letter: "D", text: "explain where Mei-Lin finds the steadiness to act" }
          ],
          correct: "D"
        },
        {
          id: "bus-home",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Which statement best explains how the final sentence resolves Mei-Lin's story?",
          choices: [
            { letter: "A", text: "She is content with how she handled the problem, whatever the score." },
            { letter: "B", text: "She plans to ask the judge for his notes at the next contest." },
            { letter: "C", text: "She worries that her thin sauce cost her a prize." },
            { letter: "D", text: "She decides she no longer wants to compete in contests." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────── 3 · Literary (level 3) · planetarium ───────── */
    {
      id: "g11-rl-c93-four-minutes",
      family: "G11",
      title: "Four Minutes of Sky",
      kind: "Literary · 11.RL",
      blurb: "When the planetarium projector goes dark, a new intern has to give sixty fourth-graders the sky.",
      level: 3,
      passage:
        "<p>" + N(1) + "The star projector at the Hollins Planetarium is older than my mother, a dark iron dumbbell bristling with lenses, and in the middle of the Thursday school show it gave a soft click and went blind. " +
        N(2) + "Sixty fourth-graders and I sat under a dome that had been full of stars a second before and was now just a gray bowl lit by the red exit signs. " +
        N(3) + "Somebody whispered, \"Is it broken?\" in the tone kids use when they hope the answer is yes.</p>" +
        "<p>" + N(4) + "Mr. Ferreira, who has run the projector for twenty-six years, was already crouched beside it with a penlight in his teeth. " +
        N(5) + "\"Talk,\" he told me around the penlight. \"Give them the sky. Four minutes.\" " +
        N(6) + "I had been an intern for three weeks. " +
        N(7) + "I had memorized the script, but the script assumed the stars would do most of the work.</p>" +
        "<p>" + N(8) + "So I stood up in the dark and told them to look straight overhead and imagine seven bright stars in the shape of a ladle. " +
        N(9) + "I told them which two stars pointed toward the North Star, and how sailors once trusted that one faint light more than any map. " +
        N(10) + "I told them that the light from some of those stars had left before their grandparents were born, so tonight they would be reading old messages. " +
        N(11) + "The room went quiet in a different way, not bored quiet but listening quiet.</p>" +
        "<p>" + N(12) + "When the projector hummed back on, the ladle appeared exactly where I had pointed, and a girl in the front row said, almost disappointed, \"Oh. It's real.\" " +
        N(13) + "After the buses left, Mr. Ferreira wiped the lenses and said only, \"Next time, start like that.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the passage set in the Hollins Planetarium?",
          choices: [
            { letter: "A", text: "Old machines should be replaced before they fail in public." },
            { letter: "B", text: "Good storytelling can help listeners see what is not yet in front of them." },
            { letter: "C", text: "Children prefer real equipment to anything an adult can describe." },
            { letter: "D", text: "New employees should follow a script exactly in an emergency." }
          ],
          correct: "B"
        },
        {
          id: "ferreira",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Based on sentences 4, 5 and 13, Mr. Ferreira is best described as —",
          choices: [
            { letter: "A", text: "flustered and unsure how to repair the projector" },
            { letter: "B", text: "critical of the intern for not knowing the stars" },
            { letter: "C", text: "eager to take over the show from the intern himself" },
            { letter: "D", text: "calm and brief, trusting the intern to handle the room" }
          ],
          correct: "D"
        },
        {
          id: "messages",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 10, describing starlight as old messages mainly suggests that —",
          choices: [
            { letter: "A", text: "the light reaching viewers carries the distant past" },
            { letter: "B", text: "sailors once sent signals to one another with lamps" },
            { letter: "C", text: "the students' grandparents studied the same stars" },
            { letter: "D", text: "the planetarium's script was written long ago" }
          ],
          correct: "A"
        },
        {
          id: "dumbbell",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 1, calling the projector a dark iron dumbbell bristling with lenses gives the impression that the machine is —",
          choices: [
            { letter: "A", text: "sleek, modern and easy to operate" },
            { letter: "B", text: "small, delicate and nearly invisible" },
            { letter: "C", text: "heavy, old-fashioned and a little strange" },
            { letter: "D", text: "bright, cheerful and welcoming to visitors" }
          ],
          correct: "C"
        },
        {
          id: "listening",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 11, the phrase listening quiet most nearly describes a silence that is —",
          choices: [
            { letter: "A", text: "nervous and uneasy" },
            { letter: "B", text: "sleepy and restless" },
            { letter: "C", text: "polite but impatient" },
            { letter: "D", text: "attentive and engaged" }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "The story is told from the intern's first-person point of view. This choice mainly allows the reader to —",
          choices: [
            { letter: "A", text: "share the intern's uncertainty while watching the room respond" },
            { letter: "B", text: "learn exactly how Mr. Ferreira repaired the projector" },
            { letter: "C", text: "hear what each fourth-grader was thinking during the show" },
            { letter: "D", text: "follow the history of the planetarium across many years" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────── 4 · Literary (level 2) · tree climbing arborists ───────── */
    {
      id: "g11-rl-c93-monkeypod",
      family: "G11",
      title: "From the Inside",
      kind: "Literary · 11.RL",
      blurb: "After six months on the ground crew, Kalani makes his first climb into a wide schoolyard tree.",
      level: 2,
      passage:
        "<p>" + N(1) + "The monkeypod tree behind Kaimana Elementary spread so wide that its shade covered half the playground, and one long limb had cracked during the winter storms. " +
        N(2) + "For six months Kalani Akana had worked on the ground for Kealoha Tree Care, hauling branches to the chipper and coiling ropes while the climbers did the work overhead. " +
        N(3) + "Today Pua Kealoha, who owned the company, handed him a harness. " +
        N(4) + "\"You're going up,\" she said. \"Ground crew learns the tree from the bottom. Now learn it from the inside.\"</p>" +
        "<p>" + N(5) + "Kalani clipped in, checked his knots twice, and began to climb, the rope creaking softly through his friction hitch. " +
        N(6) + "At twenty feet his hands started to sweat inside his gloves. " +
        N(7) + "At thirty feet he made the mistake of looking down at the hard blacktop and the small upturned faces of the crew. " +
        N(8) + "He froze, hugging the trunk the way a small child hugs a parent's leg. " +
        N(9) + "\"Don't hold the tree,\" Pua called up, her voice calm and even. \"Hold your rope. The tree's not going anywhere, and neither are you.\"</p>" +
        "<p>" + N(10) + "He loosened his arms one at a time. " +
        N(11) + "The rope held, just as it was built to do, and he leaned back into the harness until he could see the canopy around him: the branches splitting and splitting again, the cracked limb pale where the bark had peeled. " +
        N(12) + "From the ground, the tree had been one big shape; up here it was a hundred separate decisions about where to grow. " +
        N(13) + "He tied in above the crack and called down that he was ready to make the cut. " +
        N(14) + "His voice, he noticed, sounded almost like Pua's.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is best supported by Kalani's climb into the monkeypod tree?",
          choices: [
            { letter: "A", text: "Trusting careful preparation can carry a person past fear." },
            { letter: "B", text: "Fear is a sign that a person has chosen the wrong career." },
            { letter: "C", text: "Workers learn more from machines than from other people." },
            { letter: "D", text: "Old trees should be removed before storms can damage them." }
          ],
          correct: "A"
        },
        {
          id: "inside",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Pua's words in sentence 4 suggest that she believes —",
          choices: [
            { letter: "A", text: "Kalani has not worked hard enough on the ground crew" },
            { letter: "B", text: "climbing is less important than hauling branches" },
            { letter: "C", text: "Kalani's ground work has prepared him for a new view" },
            { letter: "D", text: "the cracked limb can be removed without climbing" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Which sentence best shows that Kalani has taken on some of Pua's steadiness?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "B"
        },
        {
          id: "child",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 8, comparing Kalani to a small child hugging a parent's leg mainly emphasizes —",
          choices: [
            { letter: "A", text: "his affection for the old tree" },
            { letter: "B", text: "his wish to return to ground work" },
            { letter: "C", text: "his respect for Pua as a leader" },
            { letter: "D", text: "his fear and need to cling to something" }
          ],
          correct: "D"
        },
        {
          id: "decisions",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Sentence 12 calls the tree a hundred separate decisions about where to grow. This figurative description suggests that Kalani —",
          choices: [
            { letter: "A", text: "doubts that the tree can be saved" },
            { letter: "B", text: "now sees the tree's complexity up close" },
            { letter: "C", text: "is unsure which branch he should cut" },
            { letter: "D", text: "believes the tree was planted carelessly" }
          ],
          correct: "B"
        },
        {
          id: "even",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 9, Pua's voice is described as calm and even. As used here, even most nearly means —",
          choices: [
            { letter: "A", text: "equal in number" },
            { letter: "B", text: "flat and level" },
            { letter: "C", text: "steady and controlled" },
            { letter: "D", text: "fair to all sides" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 5 · Literary (level 3) · skate park ───────── */
    {
      id: "g11-rl-c93-two-names",
      family: "G11",
      title: "Two Names",
      kind: "Literary · 11.RL",
      blurb: "The night before he leaves home, Yusuf rebuilds his battered old skateboard in the garage.",
      level: 3,
      passage:
        "<p>" + N(1) + "The night before Yusuf left for his apprenticeship in the city, he sat on the garage floor with his old skateboard upside down across his knees. " +
        N(2) + "Emre, who was twelve, watched from the doorway and said nothing, which for Emre was a kind of shouting. " +
        N(3) + "The board was a wreck by any fair measure. " +
        N(4) + "Its nose was chewed pale from years of curbs, the grip tape had worn smooth in two foot-shaped patches, and someone, probably Yusuf at thirteen, had written KAYA down the bottom in marker that had faded to gray.</p>" +
        "<p>" + N(5) + "Yusuf spun one wheel and listened to it grind. " +
        N(6) + "He pried out the bearings, soaked them in a jar of cleaner, and dried each one on the hem of his T-shirt. " +
        N(7) + "\"You could just give me your new one,\" Emre said finally. " +
        N(8) + "\"The new one doesn't know the park yet,\" Yusuf answered, pressing a bearing back into place with his thumb. " +
        N(9) + "\"This one knows where the crack by the stairs is. It knows the ledge that's a little too high.\"</p>" +
        "<p>" + N(10) + "Emre rolled his eyes, but he came in and sat down. " +
        N(11) + "Yusuf showed him how to tighten the trucks so the board would turn easily without wobbling, and then he handed Emre the skate tool and let him finish the last wheel himself. " +
        N(12) + "When it was done, Emre spun the wheel. " +
        N(13) + "It ran quiet and long, the way the wheel of something cared for runs.</p>" +
        "<p>" + N(14) + "In the morning, Yusuf's car was gone before Emre woke up. " +
        N(15) + "The board was leaning against his bedroom door, and on the bottom, under the faded KAYA, there was a second name in fresh black marker: EMRE.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which idea is most clearly supported by the story of Yusuf, Emre and the old board as a whole?",
          choices: [
            { letter: "A", text: "New equipment is always better than equipment that has been used." },
            { letter: "B", text: "Younger siblings should be grateful for whatever they receive." },
            { letter: "C", text: "Leaving home means leaving behind the people one grew up with." },
            { letter: "D", text: "Passing something on can be a way of staying connected." }
          ],
          correct: "D"
        },
        {
          id: "shouting",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentence 2 says Emre's silence was a kind of shouting. The reader can infer that Emre —",
          choices: [
            { letter: "A", text: "has lost his voice from cheering at the park" },
            { letter: "B", text: "is upset about his brother leaving but not saying so" },
            { letter: "C", text: "wants Yusuf to work more quietly in the garage" },
            { letter: "D", text: "is usually the quietest member of the family" }
          ],
          correct: "B"
        },
        {
          id: "knows",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Yusuf's answer in sentences 8 and 9 reveals that he —",
          choices: [
            { letter: "A", text: "values the history and experience the old board holds" },
            { letter: "B", text: "does not want Emre to skate on the dangerous ledge" },
            { letter: "C", text: "plans to bring his new board back to the park soon" },
            { letter: "D", text: "thinks Emre is too young to ride a new board" }
          ],
          correct: "A"
        },
        {
          id: "wheel",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "In sentence 13, the image of a wheel that runs quiet and long creates a tone that is —",
          choices: [
            { letter: "A", text: "tense and suspicious" },
            { letter: "B", text: "mocking and playful" },
            { letter: "C", text: "warm and quietly satisfied" },
            { letter: "D", text: "gloomy and resentful" }
          ],
          correct: "C"
        },
        {
          id: "fair-measure",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 3, the phrase by any fair measure most nearly means —",
          choices: [
            { letter: "A", text: "according to the rules of skating contests" },
            { letter: "B", text: "judged honestly by anyone who looked" },
            { letter: "C", text: "compared only with the boards at the fair" },
            { letter: "D", text: "measured carefully with a tape or ruler" }
          ],
          correct: "B"
        },
        {
          id: "second-name",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The second name written under KAYA in sentence 15 resolves the story by showing that —",
          choices: [
            { letter: "A", text: "Emre has decided to sell the board to a friend" },
            { letter: "B", text: "Yusuf forgot to take the board with him to the city" },
            { letter: "C", text: "Emre still wishes he had received the new board" },
            { letter: "D", text: "the board is now Emre's but still carries Yusuf's history" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 6 · Informational (level 1) · planetarium ───────── */
    {
      id: "g11-ri-c93-dome-sky",
      family: "G11",
      title: "How a Dome Becomes a Sky",
      kind: "Informational · 11.RI",
      blurb: "Perforated domes, pinhole plates and blended video: how planetariums build a night sky indoors.",
      level: 1,
      passage:
        "<p>" + N(1) + "A planetarium dome looks like a solid ceiling, but most domes are actually made of thin aluminum panels punched with thousands of tiny holes. " +
        N(2) + "The holes let sound from speakers hidden behind the dome pass through, and they let air circulate so the room does not grow stuffy. " +
        N(3) + "From the seats below, the holes are too small to see, and the surface looks like one smooth, pale curve.</p>" +
        "<p>" + N(4) + "For most of the twentieth century, planetariums used a large mechanical projector placed in the center of the room. " +
        N(5) + "Inside it, a bright lamp shone through metal plates drilled with pinholes, one for each star, and lenses focused each point of light onto the dome. " +
        N(6) + "Gears turned the whole machine to show how the sky moves over a night or a year.</p>" +
        "<p>" + N(7) + "Many planetariums now use digital systems instead. " +
        N(8) + "Several video projectors around the edge of the dome each cover one section of the curve, and software blends their images so that the seams disappear. " +
        N(9) + "Because the picture is made by computer, a digital dome can show more than stars: it can fly the audience past the rings of Saturn or zoom out until our galaxy is a smudge of light.</p>" +
        "<p>" + N(10) + "Some theaters combine both systems. " +
        N(11) + "Mechanical projectors still make the sharpest, tiniest stars, while digital projectors add motion and detail. " +
        N(12) + "Either way, the goal is the same: to make a room disappear, so that visitors forget the ceiling and remember the sky.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main idea of the passage about planetarium domes?",
          choices: [
            { letter: "A", text: "Digital projectors have completely replaced older machines." },
            { letter: "B", text: "Planetarium domes are too fragile to last many years." },
            { letter: "C", text: "Planetariums use carefully designed domes and projectors to create a convincing sky." },
            { letter: "D", text: "Visitors learn more from real stars than from planetarium shows." }
          ],
          correct: "C"
        },
        {
          id: "holes",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, why are planetarium domes punched with tiny holes?",
          choices: [
            { letter: "A", text: "to let sound and air pass through" },
            { letter: "B", text: "to show visitors where the stars belong" },
            { letter: "C", text: "to make the panels lighter to carry" },
            { letter: "D", text: "to hold the video projectors in place" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward planetarium technology is best described as —",
          choices: [
            { letter: "A", text: "doubtful and critical" },
            { letter: "B", text: "nervous and uncertain" },
            { letter: "C", text: "bored and dismissive" },
            { letter: "D", text: "appreciative and informative" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 4 through 9 of the planetarium passage?",
          choices: [
            { letter: "A", text: "by listing problems and then their solutions" },
            { letter: "B", text: "by contrasting an older method with a newer one" },
            { letter: "C", text: "by telling the story of one planetarium's opening" },
            { letter: "D", text: "by ranking projectors from cheapest to costliest" }
          ],
          correct: "B"
        },
        {
          id: "final",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 12 of the planetarium passage serves mainly to —",
          choices: [
            { letter: "A", text: "state the shared purpose behind both kinds of projectors" },
            { letter: "B", text: "argue that domes should be painted a darker color" },
            { letter: "C", text: "introduce a new topic about outdoor stargazing" },
            { letter: "D", text: "warn visitors not to touch the ceiling panels" }
          ],
          correct: "A"
        },
        {
          id: "saturn",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail about flying past the rings of Saturn in sentence 9 mainly to —",
          choices: [
            { letter: "A", text: "prove that mechanical projectors were once more popular" },
            { letter: "B", text: "explain how gears turn the old star projectors" },
            { letter: "C", text: "suggest that visitors prefer planets to stars" },
            { letter: "D", text: "give an example of what digital domes can show beyond stars" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 7 · Informational (level 2) · tree climbing arborists ───────── */
    {
      id: "g11-ri-c93-into-the-crown",
      family: "G11",
      title: "Up Into the Crown",
      kind: "Informational · 11.RI",
      blurb: "Throw bags, anchor points and friction knots: how climbing arborists work safely high in a tree.",
      level: 2,
      passage:
        "<p>" + N(1) + "When a large tree needs pruning, the safest way to reach its upper branches is often not a bucket truck but a rope. " +
        N(2) + "Professional tree climbers, called climbing arborists, can reach parts of a crown that no truck could touch, such as limbs hanging over a house or a tree in a backyard surrounded by fences. " +
        N(3) + "Climbing also spares the lawn, the roots and the soil from the weight of heavy machinery.</p>" +
        "<p>" + N(4) + "The work begins on the ground. " +
        N(5) + "Before anyone climbs, the arborist studies the tree from every side, looking for dead wood, cracks, fungus at the base and other signs that a branch might fail under a person's weight. " +
        N(6) + "Then the climber uses a weighted throw bag on a thin line to send a rope over a strong, high branch, called the anchor point. " +
        N(7) + "Choosing that anchor is the most important decision of the day, because everything that follows depends on it. " +
        N(8) + "Once the rope is set, the climber ascends using mechanical devices or special knots that grip the rope under load but slide freely when moved by hand. " +
        N(9) + "In the crown, the climber stays attached at all times, often to two separate points, so that a single mistake will not become a fall. " +
        N(10) + "Cut branches are tied off and lowered on separate ropes rather than dropped, protecting whatever lies below.</p>" +
        "<p>" + N(11) + "An experienced arborist once described the job this way: \"You are not conquering the tree. You are borrowing it for an afternoon.\" " +
        N(12) + "The phrase captures the careful spirit of the field, in which climbers aim to leave a tree healthier than they found it.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of \"Up Into the Crown\"?",
          choices: [
            { letter: "A", text: "Bucket trucks are the safest tools for pruning tall trees." },
            { letter: "B", text: "Climbing arborists rely on planning and safety systems to work high in trees." },
            { letter: "C", text: "Most trees in backyards are too unhealthy to be climbed." },
            { letter: "D", text: "Arborists climb mainly because it is faster than other methods." }
          ],
          correct: "B"
        },
        {
          id: "falls",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Select TWO sentences that describe steps arborists take to keep a climber from falling.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 2" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward climbing arborists is best described as —",
          choices: [
            { letter: "A", text: "respectful of their skill and caution" },
            { letter: "B", text: "worried that their work is reckless" },
            { letter: "C", text: "amused by their unusual equipment" },
            { letter: "D", text: "neutral and uninterested in their methods" }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author organizes sentences 4 through 10 of \"Up Into the Crown\" mainly by —",
          choices: [
            { letter: "A", text: "comparing two companies that prune trees" },
            { letter: "B", text: "listing causes of tree damage by season" },
            { letter: "C", text: "describing a single accident and its effects" },
            { letter: "D", text: "following the steps of a climb in order" }
          ],
          correct: "D"
        },
        {
          id: "anchor",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In the passage about climbing arborists, sentence 7 serves mainly to —",
          choices: [
            { letter: "A", text: "define the term throw bag for the reader" },
            { letter: "B", text: "explain why trucks cannot reach backyard trees" },
            { letter: "C", text: "stress how much the climb depends on one early choice" },
            { letter: "D", text: "describe how branches are lowered to the ground" }
          ],
          correct: "C"
        },
        {
          id: "borrowing",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the quotation in sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "highlight the respect for trees that guides the work" },
            { letter: "B", text: "show that arborists usually rent their equipment" },
            { letter: "C", text: "suggest that pruning should take only an afternoon" },
            { letter: "D", text: "argue that trees should never be climbed at all" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────── 8 · Informational (level 3) · skate park ───────── */
    {
      id: "g11-ri-c93-poured-to-order",
      family: "G11",
      title: "Poured to Order",
      kind: "Informational · 11.RI",
      blurb: "Why the most natural-looking concrete skate parks are the most carefully planned.",
      level: 3,
      passage:
        "<p>" + N(1) + "A good concrete skate park can look almost accidental, as if someone had simply scooped a few bowls out of the ground and walked away. " +
        N(2) + "The appearance is misleading. " +
        N(3) + "Every curve in a modern park is drawn and redrawn before a single truck of concrete arrives, because concrete, unlike a wooden ramp, cannot be adjusted once it hardens. " +
        N(4) + "A transition, the curved wall that carries a skater from flat ground toward vertical, that is too tight by a few inches can pitch riders forward; one that is too loose can leave them without enough speed to reach the top.</p>" +
        "<p>" + N(5) + "For that reason, many cities now begin a skate park project not with an engineer's sketch but with a meeting. " +
        N(6) + "Designers invite local skaters, including children, parents and older riders, to describe the obstacles they actually use and the ones they avoid. " +
        N(7) + "In some towns, participants shape clay models or chalk outlines on an empty lot to test how lines of travel would connect.</p>" +
        "<p>" + N(8) + "Critics sometimes describe these sessions as slow and unpredictable, and in a narrow sense they are right: a park designed with public input can take months longer to plan. " +
        N(9) + "Yet the extra time tends to be repaid. " +
        N(10) + "Parks shaped by their users are more likely to serve beginners as well as experts, to avoid collisions where two popular lines cross, and to stay busy for years rather than emptying out once the novelty fades.</p>" +
        "<p>" + N(11) + "At the end, the concrete crew, often skaters themselves, hand-finishes each surface with steel trowels while it is still wet. " +
        N(12) + "The result, when it works, is a place that feels discovered rather than built, which is exactly the effect all that planning was meant to hide.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which of the following best summarizes the central idea of \"Poured to Order\"?",
          choices: [
            { letter: "A", text: "Wooden ramps are safer and cheaper than concrete bowls." },
            { letter: "B", text: "Skaters should build their own parks without city help." },
            { letter: "C", text: "Public meetings make skate parks take too long to finish." },
            { letter: "D", text: "Planning with skaters' input lets a park feel natural and serve many riders." }
          ],
          correct: "D"
        },
        {
          id: "repaid",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which detail best supports the claim in sentence 9 that the extra planning time tends to be repaid?",
          choices: [
            { letter: "A", text: "Concrete cannot be adjusted once it hardens." },
            { letter: "B", text: "Parks shaped by users stay busy for years." },
            { letter: "C", text: "Crews finish surfaces with steel trowels." },
            { letter: "D", text: "Some towns mark chalk outlines on a lot." }
          ],
          correct: "B"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward public design meetings for skate parks is best described as —",
          choices: [
            { letter: "A", text: "mocking of the whole process" },
            { letter: "B", text: "neutral about the outcome" },
            { letter: "C", text: "supportive but frank about drawbacks" },
            { letter: "D", text: "opposed to any public input" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches the structure of \"Poured to Order\"?",
          choices: [
            { letter: "A", text: "A first impression is challenged and then explained by the process behind it." },
            { letter: "B", text: "Two cities are compared point by point across several years." },
            { letter: "C", text: "A problem is described, but no solution is offered." },
            { letter: "D", text: "Events in one skater's life are told in time order." }
          ],
          correct: "A"
        },
        {
          id: "misleading",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In the skate park passage, the short sentence 2 serves mainly to —",
          choices: [
            { letter: "A", text: "describe the shape of a concrete bowl" },
            { letter: "B", text: "signal that the opening impression is about to be overturned" },
            { letter: "C", text: "introduce the critics who oppose new parks" },
            { letter: "D", text: "explain why concrete is hard to adjust" }
          ],
          correct: "B"
        },
        {
          id: "concede",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "In sentence 8, the author admits that critics are right in a narrow sense mainly to —",
          choices: [
            { letter: "A", text: "show that the author has changed sides on the issue" },
            { letter: "B", text: "suggest that cities should cancel public meetings" },
            { letter: "C", text: "prove that clay models are a waste of time" },
            { letter: "D", text: "acknowledge a real cost before arguing it is worth it" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 9 · Informational (level 2) · cooking contest ───────── */
    {
      id: "g11-ri-c93-judges-cracker",
      family: "G11",
      title: "The Judge's Cracker",
      kind: "Informational · 11.RI",
      blurb: "Why cooking contest judges keep plain crackers, green apples and water at the table.",
      level: 2,
      passage:
        "<p>" + N(1) + "At a cooking competition, the judges' table often holds something surprising: a plate of plain crackers, a few slices of green apple, and several pitchers of room-temperature water. " +
        N(2) + "These items are not snacks. " +
        N(3) + "They are tools for fighting a problem that food scientists call palate fatigue.</p>" +
        "<p>" + N(4) + "Taste buds and the sense of smell adapt quickly to strong flavors. " +
        N(5) + "After a few bites of something very salty, spicy or sweet, the same flavor begins to register less strongly, much as a person stops noticing the hum of a refrigerator after a few minutes in the kitchen. " +
        N(6) + "For a judge tasting twelve or fifteen dishes in a row, this adaptation can be unfair: the last plate may seem bland simply because it was last.</p>" +
        "<p>" + N(7) + "Rinsing with water and eating something plain between dishes helps reset the senses. " +
        N(8) + "Many contests also change the order in which judges taste, so that no single entry always arrives after the spiciest dish. " +
        N(9) + "Some organizers go further and serve each plate on an identical white dish with a number instead of a name, so that a judge cannot favor a contestant he or she recognizes.</p>" +
        "<p>" + N(10) + "None of these measures makes judging perfectly objective. " +
        N(11) + "Taste is personal, and a judge who dislikes cilantro will never be fully neutral about a cilantro sauce. " +
        N(12) + "But the crackers and the numbered plates reflect a sensible goal: to make sure each dish is judged on what is on the plate, not on when or by whom it was served.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The author's primary purpose in \"The Judge's Cracker\" is to —",
          choices: [
            { letter: "A", text: "explain how contests try to keep tasting fair despite palate fatigue" },
            { letter: "B", text: "persuade readers to enter a local cooking competition" },
            { letter: "C", text: "compare the cooking skills of several famous judges" },
            { letter: "D", text: "describe how to bake crackers at home for parties" }
          ],
          correct: "A"
        },
        {
          id: "bland",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, why might the last dish a judge tastes seem bland?",
          choices: [
            { letter: "A", text: "The cooks who finish last usually use less salt." },
            { letter: "B", text: "Dishes served last have often cooled the most." },
            { letter: "C", text: "The judge's senses have adapted to strong flavors." },
            { letter: "D", text: "Judges are usually full by the end of the contest." }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which statement from the passage about contest judging is closest to an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Taste buds and the sense of smell adapt quickly to strong flavors." },
            { letter: "B", text: "Many contests also change the order in which judges taste." },
            { letter: "C", text: "Some organizers serve each plate on an identical white dish." },
            { letter: "D", text: "The crackers and the numbered plates reflect a sensible goal." }
          ],
          correct: "D"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author develop the discussion in \"The Judge's Cracker\"?",
          choices: [
            { letter: "A", text: "by telling the story of one contest from start to finish" },
            { letter: "B", text: "by naming a problem, explaining its cause, then describing responses" },
            { letter: "C", text: "by listing recipes in order from easiest to hardest" },
            { letter: "D", text: "by comparing two judges who disagree about a dish" }
          ],
          correct: "B"
        },
        {
          id: "hum",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In sentence 5, comparing taste adaptation to the hum of a refrigerator helps the reader understand that —",
          choices: [
            { letter: "A", text: "kitchens are too noisy for careful tasting" },
            { letter: "B", text: "the senses stop responding strongly to something constant" },
            { letter: "C", text: "judges should taste food only in quiet rooms" },
            { letter: "D", text: "cold food loses its flavor faster than hot food" }
          ],
          correct: "B"
        },
        {
          id: "cilantro",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail about cilantro in sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "warn cooks never to use cilantro in a contest" },
            { letter: "B", text: "show that judges are usually unfair to contestants" },
            { letter: "C", text: "show a limit on how neutral any judge can be" },
            { letter: "D", text: "explain why judges rinse with water between bites" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 10 · Informational (level 1) · planetarium / dark skies ───────── */
    {
      id: "g11-ri-c93-river-of-stars",
      family: "G11",
      title: "The Missing River of Stars",
      kind: "Informational · 11.RI",
      blurb: "Skyglow hides the Milky Way from city dwellers, and planetariums are one way to bring it back.",
      level: 1,
      passage:
        "<p>" + N(1) + "On a clear, moonless night far from any town, a pale band of light stretches across the sky. " +
        N(2) + "This band is the Milky Way, the glow of billions of distant stars in our own galaxy. " +
        N(3) + "Yet a large share of people living in cities and suburbs have never seen it with their own eyes.</p>" +
        "<p>" + N(4) + "The reason is not clouds or haze, but light. " +
        N(5) + "Streetlights, parking lots, signs and windows send light upward, where it scatters off tiny particles in the air and creates a dull glow over populated areas. " +
        N(6) + "This glow, called skyglow, washes out faint stars the way a bright room makes a flashlight beam hard to see. " +
        N(7) + "In a big city, a person may be able to count only a few dozen stars on a clear night.</p>" +
        "<p>" + N(8) + "Planetariums offer one way to bring back what skyglow has hidden. " +
        N(9) + "Inside a dark dome, visitors can see thousands of stars and the Milky Way itself, as they would appear from a remote mountain. " +
        N(10) + "Many planetarium shows also teach visitors simple ways to reduce skyglow at home, such as using shielded outdoor lights that point downward. " +
        N(11) + "Some towns have adopted rules requiring such fixtures. " +
        N(12) + "The hope is that more people will one day look up from their own backyards and find the river of stars that has been there all along.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the main idea of the passage about skyglow?",
          choices: [
            { letter: "A", text: "The Milky Way can be seen only from remote mountains." },
            { letter: "B", text: "Artificial light hides many stars, but there are ways to recover the view." },
            { letter: "C", text: "Planetariums were built mainly to replace the night sky." },
            { letter: "D", text: "Cities should turn off all streetlights at night." }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, what causes skyglow?",
          choices: [
            { letter: "A", text: "thick clouds that settle over large cities" },
            { letter: "B", text: "the bright light of a full moon" },
            { letter: "C", text: "smoke rising from factories at night" },
            { letter: "D", text: "upward light that scatters off particles in the air" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The intended audience for \"The Missing River of Stars\" is most likely —",
          choices: [
            { letter: "A", text: "general readers who may live where stars are hard to see" },
            { letter: "B", text: "engineers who design planetarium projectors" },
            { letter: "C", text: "astronomers who already study distant galaxies" },
            { letter: "D", text: "town officials writing new lighting rules" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author of the skyglow passage organizes it mainly by —",
          choices: [
            { letter: "A", text: "ranking cities from darkest to brightest" },
            { letter: "B", text: "describing a single night in time order" },
            { letter: "C", text: "presenting a problem and then possible responses" },
            { letter: "D", text: "comparing two planetariums feature by feature" }
          ],
          correct: "C"
        },
        {
          id: "flashlight",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In sentence 6, comparing skyglow to a bright room that makes a flashlight beam hard to see helps the reader understand that —",
          choices: [
            { letter: "A", text: "faint light is hidden when stronger light surrounds it" },
            { letter: "B", text: "flashlights are useless for looking at stars" },
            { letter: "C", text: "stars give off less light than a flashlight does" },
            { letter: "D", text: "people should stargaze from inside their homes" }
          ],
          correct: "A"
        },
        {
          id: "dozen",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 7 of the skyglow passage is included mainly to —",
          choices: [
            { letter: "A", text: "prove that cities have fewer clear nights" },
            { letter: "B", text: "explain how planetariums count their stars" },
            { letter: "C", text: "suggest that city residents dislike stargazing" },
            { letter: "D", text: "give a concrete sense of how many stars are lost" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 11 · Vocabulary (level 1) · cooking contest ───────── */
    {
      id: "g11-rv-c93-green-mango",
      family: "G11",
      title: "The Green Mango",
      kind: "Vocabulary · 11.RV",
      blurb: "Kojo and his cousin Abena open a mystery basket at a community center cooking contest.",
      level: 1,
      passage:
        "<p>" + N(1) + "The rules for the Eastside Community Center's cooking contest were printed on a single sheet: one hour, one burner, and a mystery basket revealed only when the timer started. " +
        N(2) + "Kojo Mensah lifted the lid and found tomatoes, a bag of rice, a knob of ginger, two onions and, oddly, a single green mango. " +
        N(3) + "His cousin Abena, who had entered the contest with him, was more <strong>adept</strong> in the kitchen than he was; she could dice an onion in seconds without looking at the knife. " +
        N(4) + "Kojo's skill was planning. " +
        N(5) + "He knew that <strong>unseasoned</strong> rice would taste flat, so he set aside the ginger and onions for a base before they did anything else.</p>" +
        "<p>" + N(6) + "The mango puzzled them both. " +
        N(7) + "Neither of them had a recipe that called for it, so they had to <strong>improvise</strong>, inventing a sharp, sour relish on the spot. " +
        N(8) + "By the forty-minute mark, the room had grown <strong>frantic</strong>: pots clanged, timers beeped, and one team dropped an entire tray of fried plantains on the floor, leaving it <strong>inedible</strong>. " +
        N(9) + "Abena kept her voice low and steady, calling out times like a coach.</p>" +
        "<p>" + N(10) + "With two minutes left, Kojo spooned the relish into a small, neat mound beside the rice and added a <strong>sparse</strong> garnish of three thin mango slices, no more. " +
        N(11) + "\"Less is braver,\" Abena whispered. " +
        N(12) + "The judges seemed to agree; one of them wrote on her card that the plate showed restraint.</p>",
      claims: [
        {
          id: "un",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word unseasoned in sentence 5 begins with the prefix un-, as do unlocked and unfamiliar. In all three words, the prefix un- signals —",
          choices: [
            { letter: "A", text: "again or once more" },
            { letter: "B", text: "before in time" },
            { letter: "C", text: "not, or the opposite of" },
            { letter: "D", text: "too much of something" }
          ],
          correct: "C"
        },
        {
          id: "inedible",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word inedible in sentence 8 contains the prefix in- and the suffix -ible. Based on these parts and the context, inedible means —",
          choices: [
            { letter: "A", text: "not able to be eaten" },
            { letter: "B", text: "able to be cooked again" },
            { letter: "C", text: "eaten too quickly" },
            { letter: "D", text: "hard to carry safely" }
          ],
          correct: "A"
        },
        {
          id: "adept",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which words from sentence 3 best help the reader understand the meaning of adept?",
          choices: [
            { letter: "A", text: "His cousin Abena, who had entered" },
            { letter: "B", text: "who had entered the contest with him" },
            { letter: "C", text: "more adept in the kitchen than he was" },
            { letter: "D", text: "dice an onion in seconds without looking" }
          ],
          correct: "D"
        },
        {
          id: "improvise",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the words that follow the comma show that improvise means to —",
          choices: [
            { letter: "A", text: "copy a dish exactly from a cookbook" },
            { letter: "B", text: "create something on the spot without a plan" },
            { letter: "C", text: "remove an ingredient that tastes too sour" },
            { letter: "D", text: "ask the judges for help with a recipe" }
          ],
          correct: "B"
        },
        {
          id: "frantic",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 8, the word frantic most nearly means —",
          choices: [
            { letter: "A", text: "wildly hurried and disordered" },
            { letter: "B", text: "cheerful and relaxed" },
            { letter: "C", text: "silent and focused" },
            { letter: "D", text: "nearly empty of people" }
          ],
          correct: "A"
        },
        {
          id: "sparse",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "The author could have written small instead of sparse in sentence 10. Compared with small, the word sparse suggests that the garnish was —",
          choices: [
            { letter: "A", text: "carelessly thrown together" },
            { letter: "B", text: "too large for the plate" },
            { letter: "C", text: "hidden under the rice" },
            { letter: "D", text: "thin and deliberately limited" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 12 · Vocabulary (level 2) · tree climbing arborists ───────── */
    {
      id: "g11-rv-c93-festival-oak",
      family: "G11",
      title: "One of Everything",
      kind: "Vocabulary · 11.RV",
      blurb: "Before the Lantern Festival, arborist Dorota Wojcik climbs the old oak in Millbrook's town square.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every spring, before the Lantern Festival fills Millbrook's town square, arborist Dorota Wojcik climbs the two-hundred-year-old oak at its center. " +
        N(2) + "She does not climb for the view. " +
        N(3) + "Her task is to find any branch that might break loose and fall on the crowd below.</p>" +
        "<p>" + N(4) + "From the ground, she first checks the trunk for signs of <strong>decay</strong>, such as soft, crumbling wood or mushrooms sprouting near the roots, which can show that the tree is rotting from the inside. " +
        N(5) + "Then she sets her rope and begins to <strong>ascend</strong>, rising slowly into the branches. " +
        N(6) + "High in the <strong>canopy</strong>, the leafy roof that shades the square in summer, she looks for dead limbs. " +
        N(7) + "In early spring the tree is still <strong>dormant</strong> (its buds are closed and its sap has barely begun to move), so dead wood is harder to tell apart from living branches. " +
        N(8) + "She scratches the bark with a thumbnail; green underneath means alive, brown means dead.</p>" +
        "<p>" + N(9) + "Some limbs hang in a <strong>precarious</strong> position, resting on another branch so loosely that a strong wind could send them crashing down. " +
        N(10) + "These she cuts and lowers by rope, careful not to <strong>dislodge</strong> loose bark or twigs onto the crew below. " +
        N(11) + "Her safety system is deliberately <strong>redundant</strong>: she ties in to two separate anchor points, so that if one fails, the other still holds her. " +
        N(12) + "\"In a tree,\" she likes to say, \"one of everything is the same as none.\"</p>",
      claims: [
        {
          id: "ascend",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word ascend in sentence 5 comes from a Latin root meaning to climb. Which word shares this root but names the opposite motion?",
          choices: [
            { letter: "A", text: "accent" },
            { letter: "B", text: "descend" },
            { letter: "C", text: "assemble" },
            { letter: "D", text: "extend" }
          ],
          correct: "B"
        },
        {
          id: "dislodge",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word dislodge in sentence 10 begins with the prefix dis-, as in disconnect and dismount. In these words, the prefix dis- signals —",
          choices: [
            { letter: "A", text: "doing something twice" },
            { letter: "B", text: "doing something early" },
            { letter: "C", text: "doing something carefully" },
            { letter: "D", text: "removing or separating" }
          ],
          correct: "D"
        },
        {
          id: "dormant",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the explanation in parentheses shows that dormant means —",
          choices: [
            { letter: "A", text: "resting and not yet active" },
            { letter: "B", text: "dying from the roots up" },
            { letter: "C", text: "growing faster than usual" },
            { letter: "D", text: "covered in thick new leaves" }
          ],
          correct: "A"
        },
        {
          id: "precarious",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which detail from the passage best clarifies the meaning of precarious in sentence 9?",
          choices: [
            { letter: "A", text: "soft, crumbling wood near the roots" },
            { letter: "B", text: "rising slowly into the branches" },
            { letter: "C", text: "resting on another branch so loosely" },
            { letter: "D", text: "These she cuts and lowers by rope" }
          ],
          correct: "C"
        },
        {
          id: "redundant",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "As Dorota uses it in sentence 11, the word redundant most nearly means —",
          choices: [
            { letter: "A", text: "needless and wasteful" },
            { letter: "B", text: "old and worn out" },
            { letter: "C", text: "built with a backup" },
            { letter: "D", text: "simple and light" }
          ],
          correct: "C"
        },
        {
          id: "canopy",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 6, the word canopy refers to —",
          choices: [
            { letter: "A", text: "a tent set up for the festival crowd" },
            { letter: "B", text: "the upper layer of leaves and branches" },
            { letter: "C", text: "the roots that spread beneath the square" },
            { letter: "D", text: "the rope system that holds a climber" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────── 13 · Vocabulary (level 3) · planetarium ───────── */
    {
      id: "g11-rv-c93-circumpolar",
      family: "G11",
      title: "The Stars That Never Set",
      kind: "Vocabulary · 11.RV",
      blurb: "A planetarium educator opens her evening show in silence and ends it in the parking lot.",
      level: 3,
      passage:
        "<p>" + N(1) + "Most visitors to the Kestrel Valley Planetarium arrive expecting a lecture, but Dr. Ines Albarran, who has written the evening program for eleven years, prefers to begin in silence. " +
        N(2) + "She dims the house lights by degrees until the dome is fully dark and lets the audience sit with nothing to look at for nearly a minute. " +
        N(3) + "Then the stars appear in order of brightness, so that the most <strong>luminous</strong> points surface first and the faintest arrive last, like guests who slip into a party after the music has started.</p>" +
        "<p>" + N(4) + "Her first subject is always the <strong>circumpolar</strong> stars, the ones near the North Star that wheel around the pole and never sink below the horizon from this latitude. " +
        N(5) + "To an ancient farmer or sailor, she explains, these stars seemed <strong>perpetual</strong>: season after season they were always there, while other constellations came and went with the year. " +
        N(6) + "She then speeds up the projector until a whole night passes in thirty seconds, and the circumpolar stars spin around the pole while the rest of the sky pours over the western horizon. " +
        N(7) + "The effect is meant to be <strong>immersive</strong>; every season a few visitors grip their armrests, convinced for a moment that the room itself is turning.</p>" +
        "<p>" + N(8) + "Dr. Albarran is careful, though, not to let spectacle <strong>obscure</strong> the science. " +
        N(9) + "Before the lights come up, she asks the audience to find the North Star on their own, without her pointer, using only two stars of the Big Dipper as a guide. " +
        N(10) + "Most succeed. " +
        N(11) + "\"The dome is a rehearsal,\" she tells them. \"The real <strong>celestial</strong> sphere is waiting in the parking lot.\"</p>",
      claims: [
        {
          id: "circum",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word circumpolar in sentence 4 begins with the prefix circum-, as in circumference and circumnavigate. Based on this prefix, circumpolar stars are stars that —",
          choices: [
            { letter: "A", text: "shine only during the coldest months" },
            { letter: "B", text: "sit directly on top of the pole" },
            { letter: "C", text: "appear only from the southern half of Earth" },
            { letter: "D", text: "travel in a circle around the pole" }
          ],
          correct: "D"
        },
        {
          id: "lumen",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word luminous in sentence 3 shares a Latin root with illuminate and luminary. This root most likely carries the idea of —",
          choices: [
            { letter: "A", text: "distance" },
            { letter: "B", text: "light" },
            { letter: "C", text: "motion" },
            { letter: "D", text: "silence" }
          ],
          correct: "B"
        },
        {
          id: "perpetual",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the explanation after the colon shows that perpetual means —",
          choices: [
            { letter: "A", text: "lasting without end" },
            { letter: "B", text: "bright enough to steer by" },
            { letter: "C", text: "visible only at harvest" },
            { letter: "D", text: "hard to tell apart" }
          ],
          correct: "A"
        },
        {
          id: "obscure",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The word obscure can mean unknown or to hide. Which meaning fits sentence 8, and why?",
          choices: [
            { letter: "A", text: "unknown, because few visitors have heard of the show" },
            { letter: "B", text: "unknown, because the science is too hard to explain" },
            { letter: "C", text: "to hide, because spectacle could cover up the science" },
            { letter: "D", text: "to hide, because the dome is kept completely dark" }
          ],
          correct: "C"
        },
        {
          id: "immersive",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Sentence 7 describes visitors gripping their armrests. This detail shows that an immersive experience is one that —",
          choices: [
            { letter: "A", text: "frightens people into leaving early" },
            { letter: "B", text: "moves too fast for people to follow" },
            { letter: "C", text: "requires special seats to enjoy safely" },
            { letter: "D", text: "surrounds people so fully it feels real" }
          ],
          correct: "D"
        },
        {
          id: "celestial",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 11, Dr. Albarran's phrase the real celestial sphere most nearly refers to —",
          choices: [
            { letter: "A", text: "a model globe sold in the gift shop" },
            { letter: "B", text: "the actual night sky above the building" },
            { letter: "C", text: "the curved ceiling of the planetarium" },
            { letter: "D", text: "the lights in the parking lot" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────── 14 · Paired texts (level 2) · skate park ───────── */
    {
      id: "g11-dsr-c93-linden-field",
      family: "G11",
      title: "The Courts at Linden Field",
      kind: "Paired texts · 11.DSR",
      blurb: "Committee minutes and a teen skater's letter take up a proposed skate park.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Minutes, Harlow Parks Committee, March 4</strong></p>" +
        "<p>" + N(1) + "The committee reviewed a proposal to build a concrete skate park on the unused tennis courts at Linden Field. " +
        N(2) + "Parks Director Alma Castillo reported that the estimated cost is $410,000, of which a state recreation grant would cover about half. " +
        N(3) + "Three residents of Birch Street, which borders the courts, spoke against the plan. " +
        N(4) + "They cited noise from wheels on concrete, a lack of parking, and concern that the park would draw crowds late at night. " +
        N(5) + "Ms. Castillo noted that the courts have not been resurfaced in nine years and are now used fewer than five hours a week. " +
        N(6) + "Committee members agreed that more information is needed. " +
        N(7) + "The committee voted 4 to 1 to hold a public design meeting in April and to request a sound study before any funds are committed.</p>" +
        "<p><strong>Text 2 — Letter to the Harlow Herald, by Dmitri Volkov, age 16</strong></p>" +
        "<p>" + N(8) + "I was one of about twenty skaters at last week's parks meeting, though none of us spoke; we did not know we were allowed to. " +
        N(9) + "So I will say it here. " +
        N(10) + "Right now we skate in the library parking lot and the bank's drive-through after hours, and we get chased out of both. " +
        N(11) + "A park at Linden Field would give us a place where we are actually welcome. " +
        N(12) + "I understand the worry about noise, and I would rather know the facts than guess, so I am glad the committee asked for a sound study. " +
        N(13) + "But the courts are cracked and empty most of the week. " +
        N(14) + "A skate park would not take anything away from Birch Street; it would put something useful on a space nobody is using. " +
        N(15) + "And we would gladly follow posted closing hours, since most of us have curfews anyway.</p>",
      claims: [
        {
          id: "both-fact",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which fact about Linden Field appears in both texts?",
          choices: [
            { letter: "A", text: "The park would cost about $410,000 to build." },
            { letter: "B", text: "The tennis courts there are rarely used." },
            { letter: "C", text: "Skaters spoke at the March parks meeting." },
            { letter: "D", text: "The design meeting will be held in April." }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the minutes and the letter differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 argues against the park, while Text 2 stays neutral." },
            { letter: "B", text: "Text 1 tells a personal story, while Text 2 lists costs." },
            { letter: "C", text: "Both texts mainly ask readers to attend a meeting." },
            { letter: "D", text: "Text 1 records decisions, while Text 2 argues for the park." }
          ],
          correct: "D"
        },
        {
          id: "respond",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that respond directly to concerns recorded in sentence 4 of Text 1.",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A committee member who read both the minutes and Dmitri's letter could best conclude that —",
          choices: [
            { letter: "A", text: "the sound study could settle a worry both sides take seriously" },
            { letter: "B", text: "the skaters and the Birch Street residents agree on every point" },
            { letter: "C", text: "the grant will cover the entire cost of the new park" },
            { letter: "D", text: "the committee has already approved the final design" }
          ],
          correct: "A"
        },
        {
          id: "left-out",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail from Text 1 does the letter leave out that a reader would need to judge the cost of the proposal fairly?",
          choices: [
            { letter: "A", text: "A state grant would pay about half of the $410,000 cost." },
            { letter: "B", text: "Residents said the area has a lack of parking." },
            { letter: "C", text: "The committee voted 4 to 1 at the March meeting." },
            { letter: "D", text: "The courts have not been resurfaced in nine years." }
          ],
          correct: "A"
        },
        {
          id: "committed",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the phrase before any funds are committed most nearly means before any money is —",
          choices: [
            { letter: "A", text: "returned to the state" },
            { letter: "B", text: "counted by auditors" },
            { letter: "C", text: "officially set aside" },
            { letter: "D", text: "raised from residents" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 15 · Paired texts (level 3) · cooking contest ───────── */
    {
      id: "g11-dsr-c93-from-scratch",
      family: "G11",
      title: "Ninety Minutes, From Scratch",
      kind: "Paired texts · 11.DSR",
      blurb: "Contest organizers announce a from-scratch rule, and a contestant weighs what it costs her family dish.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the Organizers: A Rule Change for the Lakeshore Youth Culinary Classic</strong></p>" +
        "<p>" + N(1) + "Beginning this year, every component of every dish must be prepared on site during the ninety-minute cooking period. " +
        N(2) + "In past years, teams were permitted to bring stocks, sauces and doughs made at home. " +
        N(3) + "Judges reported that it had become difficult to tell which work the students had done themselves and which had been done by relatives or private coaches. " +
        N(4) + "The new rule is meant to level the playing field, so that every team competes with the same time, the same equipment and the same pantry. " +
        N(5) + "To make the change workable, the contest will provide a shared pantry of basic stocks and doughs, and judges will score creativity in how teams use them. " +
        N(6) + "We recognize that some favorite dishes will no longer fit the time limit. " +
        N(7) + "We believe fairness is worth that cost.</p>" +
        "<p><strong>Text 2 — From the blog of contestant Sofia Benitez</strong></p>" +
        "<p>" + N(8) + "When I read the new rule, my first reaction was frustration. " +
        N(9) + "My mole sauce takes four hours, and it is the dish my abuela taught me, the one I have entered twice. " +
        N(10) + "It cannot be made in ninety minutes, period. " +
        N(11) + "But I also remember last year's winner, whose sauce everyone whispered had come from a restaurant kitchen. " +
        N(12) + "Nobody could prove it, and that was the problem. " +
        N(13) + "So here is where I land: the rule is fair, but it is not neutral. " +
        N(14) + "It favors fast dishes over slow ones, and many slow dishes are the ones families pass down. " +
        N(15) + "I will still compete. " +
        N(16) + "I am going to learn what my abuela's sauce tastes like when it has to hurry, and I will tell the judges exactly why it tastes different.</p>",
      claims: [
        {
          id: "central",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is central to both the organizers' notice and Sofia's blog post?",
          choices: [
            { letter: "A", text: "Shared pantries make cooking contests less creative." },
            { letter: "B", text: "Family recipes should be banned from youth contests." },
            { letter: "C", text: "Some past entries may not have been the students' own work." },
            { letter: "D", text: "Ninety minutes is too long for a cooking contest." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the two texts about the contest rule differ?",
          choices: [
            { letter: "A", text: "Text 1 explains the rule, while Text 2 weighs its cost to one tradition." },
            { letter: "B", text: "Text 1 criticizes past winners, while Text 2 defends them." },
            { letter: "C", text: "Text 1 is personal, while Text 2 is official and formal." },
            { letter: "D", text: "Text 1 opposes the rule, while Text 2 fully supports it." }
          ],
          correct: "A"
        },
        {
          id: "admit",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which sentence from Text 1 comes closest to admitting the problem Sofia describes in sentence 14?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "neutral",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "In sentence 13, Sofia says the rule is fair, but it is not neutral. Based on both texts, she most likely means that the rule —",
          choices: [
            { letter: "A", text: "was written without asking any judges for advice" },
            { letter: "B", text: "treats teams equally yet still disadvantages some dishes" },
            { letter: "C", text: "will be dropped once families complain about it" },
            { letter: "D", text: "gives an advantage to teams that hire coaches" }
          ],
          correct: "B"
        },
        {
          id: "together",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A reader who used both texts about the Lakeshore contest could best conclude that —",
          choices: [
            { letter: "A", text: "Sofia plans to withdraw from the contest this year" },
            { letter: "B", text: "Sofia and the organizers share a goal but see its cost differently" },
            { letter: "C", text: "the organizers will make an exception for mole sauce" },
            { letter: "D", text: "last year's winner has been asked to return the prize" }
          ],
          correct: "B"
        },
        {
          id: "level",
          sol: "11.RV.1.E",
          sub: "11.RV.1.E.1",
          stem: "In sentence 4, the words after the comma show that to level the playing field means to —",
          choices: [
            { letter: "A", text: "make the kitchen floor safe" },
            { letter: "B", text: "shorten the cooking period" },
            { letter: "C", text: "give all teams the same conditions" },
            { letter: "D", text: "let judges taste more dishes" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 16 · Paired texts (level 1) · tree climbing arborists ───────── */
    {
      id: "g11-dsr-c93-grove-sycamore",
      family: "G11",
      title: "The Grove Street Sycamore",
      kind: "Paired texts · 11.DSR",
      blurb: "A town notice and an arborist's report disagree about the fate of a storm-damaged tree.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Notice from the Town of Bellmont Public Works</strong></p>" +
        "<p>" + N(1) + "The large sycamore in front of 214 Grove Street is scheduled for removal on Monday, June 9. " +
        N(2) + "During a recent storm, a major limb broke off the tree and landed on the sidewalk. " +
        N(3) + "No one was injured, but the town has received several calls from neighbors who are worried about the rest of the tree. " +
        N(4) + "Public Works has decided that removing the sycamore is the safest choice. " +
        N(5) + "Grove Street will be closed between Pine and Ash from 7 a.m. to 3 p.m. that day. " +
        N(6) + "A new tree will be planted in the same spot this fall. " +
        N(7) + "Residents should move any cars parked on that block by 6:30 a.m., and questions may be directed to the Public Works office.</p>" +
        "<p><strong>Text 2 — Report from consulting arborist Kwame Asante</strong></p>" +
        "<p>" + N(8) + "At the request of residents, I inspected the Grove Street sycamore on May 28. " +
        N(9) + "The broken limb had a hidden pocket of rot where an old pruning cut never healed. " +
        N(10) + "I found no similar decay in the trunk or in the other main limbs, and the soil around the roots is firm. " +
        N(11) + "In my judgment, the tree is not in danger of failing as a whole. " +
        N(12) + "I recommend removing two smaller limbs that hang over the street and installing a steel cable between the two largest limbs to support them. " +
        N(13) + "This work would cost less than removal and would keep a tree that shades the entire block. " +
        N(14) + "A new tree planted this fall would take about forty years to give the same shade.</p>",
      claims: [
        {
          id: "both-fact",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which fact about the sycamore appears in both texts?",
          choices: [
            { letter: "A", text: "One of its limbs broke off." },
            { letter: "B", text: "Its roots have begun to rot." },
            { letter: "C", text: "It will be cabled on June 9." },
            { letter: "D", text: "It fell onto a parked car." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "The notice and the report differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "blames residents for the damage, while Text 2 blames the storm" },
            { letter: "B", text: "describes the rot, while Text 2 describes the road closure" },
            { letter: "C", text: "announces removal, while Text 2 recommends keeping the tree" },
            { letter: "D", text: "asks for opinions, while Text 2 gives final orders" }
          ],
          correct: "C"
        },
        {
          id: "worry",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which sentence from Text 2 most directly responds to the neighbors' worry described in sentence 3 of Text 1?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "B"
        },
        {
          id: "forty-years",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Sentence 14 of the arborist's report most directly challenges which part of the town's notice?",
          choices: [
            { letter: "A", text: "the closing of Grove Street for the day" },
            { letter: "B", text: "the request that residents move their cars" },
            { letter: "C", text: "the report that no one was injured" },
            { letter: "D", text: "the promise to plant a new tree this fall" }
          ],
          correct: "D"
        },
        {
          id: "next-step",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Based on both texts, what would a Grove Street resident most likely want to do before June 9?",
          choices: [
            { letter: "A", text: "ask Public Works to review the arborist's report" },
            { letter: "B", text: "plant a second sycamore beside the old one" },
            { letter: "C", text: "move the sidewalk away from the tree" },
            { letter: "D", text: "cut the two smaller limbs down themselves" }
          ],
          correct: "A"
        },
        {
          id: "inspected",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word inspected in sentence 8 contains the prefix in- (into) and the root spect (to look), as in spectator. Inspected most nearly means —",
          choices: [
            { letter: "A", text: "paid money for" },
            { letter: "B", text: "trimmed back" },
            { letter: "C", text: "examined closely" },
            { letter: "D", text: "took photos of" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 17 · Poetry (level 1) · skate park ───────── */
    {
      id: "g11-rl-c93-six-am",
      family: "G11",
      title: "Skate Park, Six A.M.",
      kind: "Poetry · 11.RL",
      blurb: "A skater has the park to herself for one early hour, with only a crow watching.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Six a.m., and the park is only mine,<br>" +
        L(2) + "the concrete still cool and gray with dew,<br>" +
        L(3) + "the bowl a quiet mouth that holds its breath.<br>" +
        L(4) + "No music yet, no crowd along the rail,<br>" +
        L(5) + "just one crow pacing the deck like a judge.<br>" +
        L(6) + "I push off, and the wheels begin to talk,<br>" +
        L(7) + "a low, steady hum that fills the empty space.<br>" +
        L(8) + "I fall twice on the same small ledge<br>" +
        L(9) + "and get up twice, and no one laughs or claps.<br>" +
        L(10) + "By seven, other skaters drift in, yawning,<br>" +
        L(11) + "and the park belongs to all of us again.<br>" +
        L(12) + "I do not mind. I had the first hour,<br>" +
        L(13) + "the one where every fall was only practice<br>" +
        L(14) + "and the only judge was a crow.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Skate Park, Six A.M.\"?",
          choices: [
            { letter: "A", text: "Skaters work best when a crowd is cheering for them." },
            { letter: "B", text: "Public parks should be reserved for early risers." },
            { letter: "C", text: "Practicing alone can free a person from the fear of being watched." },
            { letter: "D", text: "Sharing a space with others always ruins the experience." }
          ],
          correct: "C"
        },
        {
          id: "fall-twice",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Lines 8 and 9 of the skate park poem suggest that the speaker —",
          choices: [
            { letter: "A", text: "feels free to fail because no one is watching" },
            { letter: "B", text: "is embarrassed that no one helps her get up" },
            { letter: "C", text: "has decided to give up on the small ledge" },
            { letter: "D", text: "wishes the other skaters would arrive sooner" }
          ],
          correct: "A"
        },
        {
          id: "mouth",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "In line 3, describing the bowl as a quiet mouth that holds its breath is an example of —",
          choices: [
            { letter: "A", text: "internal rhyme" },
            { letter: "B", text: "hyperbole" },
            { letter: "C", text: "onomatopoeia" },
            { letter: "D", text: "personification" }
          ],
          correct: "D"
        },
        {
          id: "crow",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The image of a crow pacing the deck like a judge (line 5) creates a tone that is —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "gently humorous" },
            { letter: "C", text: "fearful and tense" },
            { letter: "D", text: "formal and serious" }
          ],
          correct: "B"
        },
        {
          id: "talk",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 6, the phrase the wheels begin to talk most nearly means that the wheels —",
          choices: [
            { letter: "A", text: "start making a steady sound" },
            { letter: "B", text: "need to be oiled and repaired" },
            { letter: "C", text: "wake up the other skaters" },
            { letter: "D", text: "slow down on the wet concrete" }
          ],
          correct: "A"
        },
        {
          id: "return",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The poem ends in lines 12 through 14 by returning to the crow from line 5. This return mainly serves to —",
          choices: [
            { letter: "A", text: "show that the speaker is afraid of birds" },
            { letter: "B", text: "introduce a new problem the speaker must solve" },
            { letter: "C", text: "suggest the crow will drive the other skaters away" },
            { letter: "D", text: "stress the value of the speaker's private hour" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 18 · Poetry (level 3) · planetarium ───────── */
    {
      id: "g11-rl-c93-night-shift-dome",
      family: "G11",
      title: "Night Shift at the Dome",
      kind: "Poetry · 11.RL",
      blurb: "A planetarium operator knows exactly how the trick works and chooses to keep it secret.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Each evening I make a sky from a box of iron,<br>" +
        L(2) + "one switch for the moon, one dial for the year,<br>" +
        L(3) + "and children lean back in their tilted chairs<br>" +
        L(4) + "as if the ceiling owed them something wonderful.<br>" +
        L(5) + "I know the trick of it: the pinholes, the lamp,<br>" +
        L(6) + "the gears that grind a season into seconds.<br>" +
        L(7) + "I could tell them every star is just a hole.</p>" +
        "<p class=\"poem\">" +
        L(8) + "But once, walking home past the shuttered bakery,<br>" +
        L(9) + "I looked up through the orange haze of streetlights<br>" +
        L(10) + "and found only three faint stars, tired and far,<br>" +
        L(11) + "and felt the old ache those children feel,<br>" +
        L(12) + "the wanting to be smaller under something larger.<br>" +
        L(13) + "So I keep my secrets in the booth.<br>" +
        L(14) + "Let the box of iron be the sky tonight.</p>",
      claims: [
        {
          id: "stanza-two",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses the central idea of the second stanza of \"Night Shift at the Dome\"?",
          choices: [
            { letter: "A", text: "The speaker wishes the city would turn off its streetlights." },
            { letter: "B", text: "The speaker shares the children's longing, so the illusion matters." },
            { letter: "C", text: "The speaker plans to quit the planetarium for a new job." },
            { letter: "D", text: "The speaker believes real stars are less beautiful than fake ones." }
          ],
          correct: "B"
        },
        {
          id: "hole",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Line 7 of the planetarium poem implies that the speaker —",
          choices: [
            { letter: "A", text: "has already explained the projector to the children" },
            { letter: "B", text: "thinks the children are too young to enjoy the show" },
            { letter: "C", text: "is unsure how the projector actually works" },
            { letter: "D", text: "could spoil the wonder by explaining it, but does not" }
          ],
          correct: "D"
        },
        {
          id: "gears",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 6, the phrase the gears that grind a season into seconds mainly suggests that —",
          choices: [
            { letter: "A", text: "the machine squeezes long spans of time into a short show" },
            { letter: "B", text: "the projector is too loud for the audience to enjoy" },
            { letter: "C", text: "the speaker works long seasons without a break" },
            { letter: "D", text: "the gears are wearing out and need to be replaced" }
          ],
          correct: "A"
        },
        {
          id: "owed",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "Line 4, as if the ceiling owed them something wonderful, mainly conveys the children's —",
          choices: [
            { letter: "A", text: "boredom with the show" },
            { letter: "B", text: "fear of the dark room" },
            { letter: "C", text: "eager, confident expectation" },
            { letter: "D", text: "anger at a broken promise" }
          ],
          correct: "C"
        },
        {
          id: "secrets",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 13, the phrase keep my secrets in the booth most nearly means that the speaker —",
          choices: [
            { letter: "A", text: "locks the projector away after each show" },
            { letter: "B", text: "hides personal problems from coworkers" },
            { letter: "C", text: "refuses to let children into the building" },
            { letter: "D", text: "does not reveal how the illusion works" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the two-stanza structure of \"Night Shift at the Dome\" shape its meaning?",
          choices: [
            { letter: "A", text: "Both stanzas describe the same show from different seats." },
            { letter: "B", text: "The first stanza praises the city; the second criticizes it." },
            { letter: "C", text: "The first stanza reveals the trick; the second shows why it is kept." },
            { letter: "D", text: "The first stanza is a memory; the second takes place years earlier." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── 19 · Drama (level 2) · cooking contest ───────── */
    {
      id: "g11-rl-c93-loud-sauce",
      family: "G11",
      title: "Ten Minutes to Two",
      kind: "Drama · 11.RL",
      blurb: "Minutes before a teen chef final, Ezra wants to switch dishes, and Hana wants to know why.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A cramped prep room behind the stage at the Ridgeview Teen Chef Finals. A wall clock reads ten minutes to two. HANA SATO, seventeen, ties on an apron. EZRA KOWALSKI, her teammate, bursts in holding his phone.</em></p>" +
        "<p><strong>EZRA:</strong> " + N(2) + "The other team is doing seared scallops. Scallops, Hana.</p>" +
        "<p><strong>HANA:</strong> <em>(calmly)</em> " + N(3) + "Good for them.</p>" +
        "<p><strong>EZRA:</strong> " + N(4) + "Our dumplings are going to look like lunch next to that. We should switch. We could do the citrus salmon we tried in March.</p>" +
        "<p><strong>HANA:</strong> " + N(5) + "The salmon we tried once? The one that stuck to the pan?</p>" +
        "<p><strong>EZRA:</strong> <em>(pacing)</em> " + N(6) + "It stuck because the pan was cold. I know that now.</p>" +
        "<p><strong>HANA:</strong> " + N(7) + "We have folded those dumplings forty times. <em>(She holds up her hands.)</em> These hands do not know salmon.</p>" +
        "<p><strong>EZRA:</strong> <em>(stopping)</em> " + N(8) + "Then what do my hands do? You fold, you steam, and I stand there holding a timer.</p>" +
        "<p><strong>HANA:</strong> <em>(after a pause, more quietly)</em> " + N(9) + "Is that what this is about?</p>" +
        "<p><strong>EZRA:</strong> <em>(shrugging, embarrassed)</em> " + N(10) + "Maybe a little.</p>" +
        "<p><strong>HANA:</strong> <em>(pulling a notebook from her bag)</em> " + N(11) + "Fine. The dumplings stay. But the dipping sauce is yours. Make the citrus one from the salmon, and make it loud.</p>" +
        "<p><em>" + N(12) + "EZRA looks at her, and a slow grin spreads across his face.</em></p>" +
        "<p><strong>HANA:</strong> " + N(13) + "Loud enough that the scallop team hears it from across the room. <em>(She hands him an apron.)</em></p>" +
        "<p><strong>EZRA:</strong> <em>(tying it on)</em> " + N(14) + "Then let's go cook lunch.</p>",
      claims: [
        {
          id: "motive",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Ezra's answer in sentence 10 reveals that his push to switch dishes is partly driven by —",
          choices: [
            { letter: "A", text: "a dislike of dumplings" },
            { letter: "B", text: "feeling left out of the cooking" },
            { letter: "C", text: "a promise he made to the judges" },
            { letter: "D", text: "fear that the clock is wrong" }
          ],
          correct: "B"
        },
        {
          id: "hana",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes Hana in this scene?",
          choices: [
            { letter: "A", text: "jealous of the team making scallops" },
            { letter: "B", text: "unwilling to change any part of the plan" },
            { letter: "C", text: "too nervous to make any decision" },
            { letter: "D", text: "steady, and willing to listen to Ezra" }
          ],
          correct: "D"
        },
        {
          id: "grin",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Which sentence best shows a change in Ezra's mood during the scene?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "C"
        },
        {
          id: "hands",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Hana's line in sentence 7, These hands do not know salmon, emphasizes that —",
          choices: [
            { letter: "A", text: "her skill comes from practicing one dish many times" },
            { letter: "B", text: "she is allergic to fish and cannot touch it" },
            { letter: "C", text: "Ezra has never cooked salmon before" },
            { letter: "D", text: "the contest does not allow fish dishes" }
          ],
          correct: "A"
        },
        {
          id: "loud",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 11, when Hana tells Ezra to make the sauce loud, she most nearly means that it should —",
          choices: [
            { letter: "A", text: "have a bold, strong flavor" },
            { letter: "B", text: "be cooked over high heat" },
            { letter: "C", text: "be served in a large bowl" },
            { letter: "D", text: "be announced to the judges" }
          ],
          correct: "A"
        },
        {
          id: "lunch",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Ezra's final line in sentence 14 echoes his worry in sentence 4 mainly to show that he —",
          choices: [
            { letter: "A", text: "still wants to switch to the salmon" },
            { letter: "B", text: "thinks the contest will end before dinner" },
            { letter: "C", text: "is making fun of Hana's cooking" },
            { letter: "D", text: "now embraces the simple dish he once doubted" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 20 · Functional text (level 1) · tree climbing ───────── */
    {
      id: "g11-ri-c93-climb-day",
      family: "G11",
      title: "Youth Tree Climbing Day",
      kind: "Functional text · 11.RI",
      blurb: "A nature center's notice about registering, dressing and staying safe for a youth climbing day.",
      level: 1,
      passage:
        "<p><strong>Oakhurst Nature Center: Youth Tree Climbing Day</strong><br>" +
        N(1) + "Saturday, May 17, 9:00 a.m. to 3:00 p.m., at the Great Beech Grove behind the visitor center. " +
        N(2) + "Trained tree-climbing instructors will guide participants ages 12 to 17 up into the crowns of three mature beech trees using ropes and harnesses. " +
        N(3) + "No climbing experience is needed.</p>" +
        "<p><strong>How to Register</strong><br>" +
        N(4) + "Sign up online or at the front desk by Friday, May 9. " +
        N(5) + "Each session lasts ninety minutes and is limited to eight climbers, so early registration is strongly recommended. " +
        N(6) + "The fee is $15, which covers all equipment. " +
        N(7) + "A parent or guardian must sign a permission form before a participant may climb; forms will not be accepted on the day of the event.</p>" +
        "<p><strong>What to Wear</strong><br>" +
        N(8) + "Wear long pants, closed-toe athletic shoes and a shirt with sleeves. " +
        N(9) + "Remove rings, necklaces and dangling earrings, which can catch on bark or rope. " +
        N(10) + "Helmets will be provided and must be worn at all times in the climbing area, even by people standing on the ground.</p>" +
        "<p><strong>Weather</strong><br>" +
        N(11) + "Climbing will be canceled in the event of rain, lightning or winds above 20 miles per hour, because wet bark and swaying limbs are unsafe. " +
        N(12) + "If a session is canceled, registered climbers will receive a full refund or a place on the June make-up date.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The main purpose of the Oakhurst notice is to —",
          choices: [
            { letter: "A", text: "explain how beech trees grow in the grove" },
            { letter: "B", text: "help families sign up and prepare to climb safely" },
            { letter: "C", text: "recruit adults to train as climbing instructors" },
            { letter: "D", text: "announce that the nature center is closing" }
          ],
          correct: "B"
        },
        {
          id: "jewelry",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the notice, why must climbers remove rings and necklaces?",
          choices: [
            { letter: "A", text: "They could be lost in the leaves." },
            { letter: "B", text: "They are not allowed in the visitor center." },
            { letter: "C", text: "They make the harness too tight." },
            { letter: "D", text: "They can catch on bark or rope." }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The intended audience for the climbing day notice is —",
          choices: [
            { letter: "A", text: "young people ages 12 to 17 and their parents" },
            { letter: "B", text: "professional arborists seeking work" },
            { letter: "C", text: "scientists who study beech trees" },
            { letter: "D", text: "staff members who sell equipment" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold headings in the climbing day notice help the reader by —",
          choices: [
            { letter: "A", text: "listing the instructors in alphabetical order" },
            { letter: "B", text: "showing which trees are the tallest" },
            { letter: "C", text: "grouping details so readers can find what they need" },
            { letter: "D", text: "telling the history of the nature center" }
          ],
          correct: "C"
        },
        {
          id: "eight",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Sentence 5 mentions the limit of eight climbers per session mainly to —",
          choices: [
            { letter: "A", text: "explain why people should register early" },
            { letter: "B", text: "show that the event is unpopular" },
            { letter: "C", text: "warn that some trees are unsafe" },
            { letter: "D", text: "justify the $15 equipment fee" }
          ],
          correct: "A"
        },
        {
          id: "strict",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence makes clear that the permission-form deadline will be enforced strictly?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── 21 · Argument (level 3) · skate park ───────── */
    {
      id: "g11-ri-c93-light-the-park",
      family: "G11",
      title: "Turn On the Lights",
      kind: "Argument · 11.RI",
      blurb: "A student editorial argues that the city should light Halsey Skate Park for winter evenings.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every evening from November through February, Halsey Skate Park goes dark at five o'clock, and so does one of the only free places in town where teenagers can be active after school. " +
        N(2) + "The park has no lights; the city has long argued that lighting it would invite trouble and cost too much. " +
        N(3) + "Both claims deserve a closer look.</p>" +
        "<p>" + N(4) + "Start with cost. " +
        N(5) + "The city's own parks report estimates that installing six LED poles would cost about $48,000, and that running them on a timer until nine would add roughly $900 a year to the electric bill. " +
        N(6) + "That is less than the city spent last year repainting the tennis courts that sit unused beside the skate park.</p>" +
        "<p>" + N(7) + "Then consider trouble. " +
        N(8) + "Critics picture a lit park as a magnet for vandalism, but darkness, not light, is what hides vandals. " +
        N(9) + "In Westbrook, a neighboring town that lit its skate park three years ago, police reports from the park fell by a third in the first year, according to that town's council minutes. " +
        N(10) + "One example does not prove that lights prevent problems everywhere, and the city should track results here. " +
        N(11) + "But the evidence that exists points in one direction.</p>" +
        "<p>" + N(12) + "Finally, consider who loses when the park goes dark. " +
        N(13) + "Students with jobs or after-school duties cannot skate before five in winter; for them, the park simply closes for four months. " +
        N(14) + "A city that tells young people to put down their phones and go outside should make sure there is a lit place to go. " +
        N(15) + "Turn on the lights.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement best expresses the central claim of the editorial about Halsey Skate Park?",
          choices: [
            { letter: "A", text: "The skate park should close earlier in winter to save money." },
            { letter: "B", text: "Westbrook has a better skate park than Halsey does." },
            { letter: "C", text: "The city should light the park, since its costs and risks are overstated." },
            { letter: "D", text: "Teenagers should spend less time on their phones." }
          ],
          correct: "C"
        },
        {
          id: "challenge",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which evidence most directly challenges the city's claim that lighting the park would invite trouble?",
          choices: [
            { letter: "A", text: "Westbrook's police reports from its lit park fell by a third." },
            { letter: "B", text: "Six LED poles would cost about $48,000 to install." },
            { letter: "C", text: "The tennis courts beside the park sit unused." },
            { letter: "D", text: "Students with jobs cannot skate before five in winter." }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which statement from the editorial is closest to an opinion framed as settled fact?",
          choices: [
            { letter: "A", text: "Running the lights would add roughly $900 a year." },
            { letter: "B", text: "Westbrook lit its skate park three years ago." },
            { letter: "C", text: "The park goes dark at five o'clock in winter." },
            { letter: "D", text: "Darkness, not light, is what hides vandals." }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 4 through 13 of the editorial?",
          choices: [
            { letter: "A", text: "by telling the history of the park from its opening" },
            { letter: "B", text: "by answering the city's objections in turn, then adding a reason" },
            { letter: "C", text: "by comparing three towns' parks feature by feature" },
            { letter: "D", text: "by listing steps for installing new light poles" }
          ],
          correct: "B"
        },
        {
          id: "tennis",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "In sentence 6, the author mentions the unused tennis courts mainly to —",
          choices: [
            { letter: "A", text: "propose turning the courts into a parking lot" },
            { letter: "B", text: "suggest the city already spends similar sums on less-used spaces" },
            { letter: "C", text: "praise the city for keeping its courts in good repair" },
            { letter: "D", text: "argue that tennis players cause most of the vandalism" }
          ],
          correct: "B"
        },
        {
          id: "concede",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "In sentence 10, the author admits that one example does not prove the case mainly to —",
          choices: [
            { letter: "A", text: "abandon the claim about vandalism" },
            { letter: "B", text: "criticize the Westbrook council minutes" },
            { letter: "C", text: "appear fair while keeping the argument's direction" },
            { letter: "D", text: "suggest that lights would raise crime in Halsey" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
