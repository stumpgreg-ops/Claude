/* SOL Labyrinth — Grade 9 medium packs (v5.15 expansion, file 41): marine mammals, insects,
 * migrating birds, rocks and caves. Original text only; no VDOE / copyrighted material.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 — Literary, level 1 */
    {
      id: "g9-rl-c41-whale-count",
      family: "G9",
      title: "The Empty Grid",
      kind: "Literary · 9.RL",
      blurb: "Imani waits all morning on a research boat for her first humpback whale.",
      level: 1,
      passage:
        "<p>" + N(1) + "Imani had been on the deck of the <em>Petrel</em> for three hours, and the only thing she had counted was gulls. " +
        N(2) + "Her clipboard held a grid with one box for each humpback whale the team spotted, and every box was still empty. " +
        N(3) + "\"Whales don't keep our schedule,\" said Ms. Tavares, the captain, as she poured tea from a dented thermos. " +
        N(4) + "Imani nodded, but she was thinking about last week's volunteers, who had filled two whole pages. " +
        N(5) + "She wondered whether she was simply unlucky or whether she was missing something everyone else could see. " +
        N(6) + "Then, far to the north, a column of mist rose from the water like a puff of breath on a cold window. " +
        N(7) + "Imani raised her binoculars and waited. " +
        N(8) + "A dark back curved up, and then a tail lifted, its underside spotted white and black like a fingerprint. " +
        N(9) + "\"Photograph the tail,\" Ms. Tavares called. \"No two are alike.\" " +
        N(10) + "Imani's fingers were stiff with cold, but she held the camera steady and took four pictures before the whale slipped under. " +
        N(11) + "In the first box she wrote the time, the direction, and the word <em>fluke</em>, the name for a whale's tail. " +
        N(12) + "It was only one whale. " +
        N(13) + "Yet when she looked at the grid, it no longer seemed empty to her; it seemed ready. " +
        N(14) + "By the time the <em>Petrel</em> turned toward the harbor, she had filled three more boxes, and she had stopped counting the gulls." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best developed in \"The Empty Grid\"?",
          choices: [
            { letter: "A", text: "Volunteers should compare their work with the work of others." },
            { letter: "B", text: "Patience can turn a discouraging task into a hopeful one." },
            { letter: "C", text: "Science is mostly about following a captain's orders." },
            { letter: "D", text: "Cold weather makes careful work nearly impossible." }
          ],
          correct: "B"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 6, the author compares the whale's spout to a puff of breath on a cold window mainly to show that it is —",
          choices: [
            { letter: "A", text: "loud enough to frighten the gulls" },
            { letter: "B", text: "close enough to touch from the deck" },
            { letter: "C", text: "colored differently from the ocean" },
            { letter: "D", text: "a thin, misty cloud that is quickly gone" }
          ],
          correct: "D"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Sentences 4 and 5 mainly show that Imani is —",
          choices: [
            { letter: "A", text: "worried that she does not measure up to others" },
            { letter: "B", text: "angry that the captain is not helping her" },
            { letter: "C", text: "eager to return to the harbor early" },
            { letter: "D", text: "confident that she knows more than last week's team" }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Based on sentences 8 and 9, readers can best infer that the team photographs whale tails because —",
          choices: [
            { letter: "A", text: "the tails are the only part of a whale above water" },
            { letter: "B", text: "Ms. Tavares collects pictures for her own scrapbook" },
            { letter: "C", text: "the markings on each tail identify a single whale" },
            { letter: "D", text: "tail photographs are easier to take in cold weather" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "How does the detail about gulls in sentence 14 connect to the beginning of the story?",
          choices: [
            { letter: "A", text: "It shows that the gulls have followed the boat all day." },
            { letter: "B", text: "It shows that Imani's attention has shifted from boredom to the whales." },
            { letter: "C", text: "It shows that Imani has decided to study birds instead of whales." },
            { letter: "D", text: "It shows that the captain was wrong about the whales' schedule." }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of sentence 13 is best described as —",
          choices: [
            { letter: "A", text: "bitter" },
            { letter: "B", text: "puzzled" },
            { letter: "C", text: "mocking" },
            { letter: "D", text: "hopeful" }
          ],
          correct: "D"
        }
      ]
    },

    /* 2 — Informational, level 1 */
    {
      id: "g9-ri-c41-firefly-code",
      family: "G9",
      title: "The Firefly Flash Code",
      kind: "Informational · 9.RI",
      blurb: "How fireflies make light, why they blink in patterns, and why they need dark yards.",
      level: 1,
      passage:
        "<p>" + N(1) + "On a summer evening, the blinking lights of fireflies can look random, but each flash is part of a conversation. " +
        N(2) + "Fireflies are not flies at all; they are beetles, and many kinds produce light in special organs near the tip of the abdomen. " +
        N(3) + "Inside these organs, a chemical reaction combines oxygen with a substance called luciferin. " +
        N(4) + "The reaction gives off light but almost no heat, which is why scientists call it \"cold light.\" " +
        N(5) + "Each species of firefly has its own flash pattern. " +
        N(6) + "In one common kind, a male flies low over a field and flashes every few seconds, tracing a short streak shaped like the letter J. " +
        N(7) + "A female waiting in the grass answers with a single flash after a precise delay. " +
        N(8) + "If the timing is right, the male knows he has found a female of his own species and flies toward her. " +
        N(9) + "Researchers have learned to imitate these signals with small penlights, and males will often turn toward a flash that copies the female's delay. " +
        N(10) + "Unfortunately, firefly numbers appear to be falling in many places. " +
        N(11) + "Bright outdoor lighting can drown out the signals, and the loss of meadows removes the damp grass where young fireflies, called larvae, live for up to two years. " +
        N(12) + "Homeowners can help by turning off porch lights on summer nights and leaving a patch of lawn unmowed. " +
        N(13) + "A darker, wilder yard gives the conversation a chance to continue." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which sentence best states the central idea of \"The Firefly Flash Code\"?",
          choices: [
            { letter: "A", text: "Fireflies use timed flashes to communicate, and those signals need darkness and habitat." },
            { letter: "B", text: "Fireflies are beetles rather than flies, even though most people call them flies." },
            { letter: "C", text: "Researchers use penlights to study insects in fields at night." },
            { letter: "D", text: "Homeowners should stop mowing their lawns during the summer." }
          ],
          correct: "A"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to the passage, how does a male firefly know he has found a female of his own species?",
          choices: [
            { letter: "A", text: "She glows more brightly than other fireflies." },
            { letter: "B", text: "She flies beside him in a J-shaped path." },
            { letter: "C", text: "She answers his flash after the right delay." },
            { letter: "D", text: "She gives off heat that he can sense." }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How is the passage mainly organized?",
          choices: [
            { letter: "A", text: "It tells the life story of one firefly from larva to adult." },
            { letter: "B", text: "It explains how fireflies signal, then describes a threat and ways to help." },
            { letter: "C", text: "It compares fireflies with other beetles that make light." },
            { letter: "D", text: "It lists the steps researchers follow to count fireflies." }
          ],
          correct: "B"
        },
        {
          id: "craft",
          sol: "9.RI.2.B",
          stem: "The author calls the flashes \"a conversation\" in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "suggest that fireflies can understand human speech" },
            { letter: "B", text: "show that the flashes have no real purpose" },
            { letter: "C", text: "compare fireflies to people talking on porches" },
            { letter: "D", text: "introduce the idea that the flashes are signals" }
          ],
          correct: "D"
        },
        {
          id: "evid",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the claim that outdoor lights can harm fireflies?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "D"
        },
        {
          id: "type",
          sol: "9.RI.1.C",
          stem: "Which sentence from the passage gives a recommendation rather than a scientific explanation?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "A"
        }
      ]
    },

    /* 3 — Vocabulary, level 1 */
    {
      id: "g9-rv-c41-hollow-hill",
      family: "G9",
      title: "Hollow Hill Cavern",
      kind: "Vocabulary · 9.RV",
      blurb: "A cave tour reveals stone columns that are still growing, one drip at a time.",
      level: 1,
      passage:
        "<p>" + N(1) + "Our tour group gathered at the mouth of Hollow Hill Cavern, where a cool breath of air drifted up from the dark. " +
        N(2) + "Our guide, a retired science teacher named Mr. Osei, explained that we were about to enter a <strong>subterranean</strong> world, one that lay entirely beneath the farm fields above our heads. " +
        N(3) + "We began to <strong>descend</strong> a long stairway, and with every step down, the daylight behind us faded. " +
        N(4) + "The air grew <strong>humid</strong>, so damp that my glasses fogged and the railing felt wet under my hand. " +
        N(5) + "At the bottom, Mr. Osei flipped a switch, and soft lamps <strong>illuminated</strong> a room full of stone columns. " +
        N(6) + "Some of the columns were taller than a house, yet he told us they had formed through a <strong>gradual</strong> process, growing about the thickness of a coin every hundred years. " +
        N(7) + "\"That means the drip you hear right now is still building them,\" he said. " +
        N(8) + "He then asked us not to touch anything. " +
        N(9) + "The formations may look as solid as a sidewalk, he explained, but they are <strong>fragile</strong>; even the oil from one fingertip can stop a column from growing in that spot. " +
        N(10) + "A girl near me pulled her hand back from the wall as if it were a hot stove. " +
        N(11) + "As we climbed out an hour later, the summer heat felt strange, as though we had returned from another planet. " +
        N(12) + "I realized that the cave had been growing quietly all along, long before anyone came to look at it." +
        "</p>",
      claims: [
        {
          id: "sub",
          sol: "9.RV.1.B",
          stem: "The prefix <em>sub-</em> in <strong>subterranean</strong> (sentence 2) helps the reader understand that the cave is —",
          choices: [
            { letter: "A", text: "older than the farm" },
            { letter: "B", text: "beneath the ground" },
            { letter: "C", text: "colder than the air" },
            { letter: "D", text: "larger than expected" }
          ],
          correct: "B"
        },
        {
          id: "humid",
          sol: "9.RV.1.C",
          stem: "Which words from sentence 4 best help the reader understand the meaning of <strong>humid</strong>?",
          choices: [
            { letter: "A", text: "\"The air grew\"" },
            { letter: "B", text: "\"under my hand\"" },
            { letter: "C", text: "\"glasses fogged\"" },
            { letter: "D", text: "\"the railing\"" }
          ],
          correct: "C"
        },
        {
          id: "lum",
          sol: "9.RV.1.B",
          stem: "<strong>Illuminated</strong> (sentence 5) shares a root with <em>luminous</em> and <em>luminary</em>. That root carries the idea of —",
          choices: [
            { letter: "A", text: "light" },
            { letter: "B", text: "stone" },
            { letter: "C", text: "sound" },
            { letter: "D", text: "height" }
          ],
          correct: "A"
        },
        {
          id: "gradual",
          sol: "9.RV.1.C",
          stem: "In sentence 6, the word <strong>gradual</strong> most nearly means —",
          choices: [
            { letter: "A", text: "sudden and violent" },
            { letter: "B", text: "hidden and secret" },
            { letter: "C", text: "careless and uneven" },
            { letter: "D", text: "slow and step by step" }
          ],
          correct: "D"
        },
        {
          id: "fragile",
          sol: "9.RV.1.E",
          stem: "The author could have written <em>weak</em> instead of <strong>fragile</strong> in sentence 9. Compared with <em>weak</em>, <strong>fragile</strong> adds a sense that the formations —",
          choices: [
            { letter: "A", text: "are too small for visitors to notice" },
            { letter: "B", text: "cannot hold up the roof of the cave" },
            { letter: "C", text: "are delicate and easily harmed by a touch" },
            { letter: "D", text: "have stopped growing for good" }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "9.RV.1.F",
          stem: "In sentence 10, the girl pulls her hand back \"as if it were a hot stove.\" This comparison mainly suggests that she —",
          choices: [
            { letter: "A", text: "feels the cave wall is surprisingly warm" },
            { letter: "B", text: "reacts quickly, alarmed that she might cause harm" },
            { letter: "C", text: "wants the guide to notice her" },
            { letter: "D", text: "is tired of the long tour" }
          ],
          correct: "B"
        }
      ]
    },

    /* 4 — Poetry, level 2 */
    {
      id: "g9-rl-c41-geese-over",
      family: "G9",
      title: "The Geese Go Over",
      kind: "Poetry · 9.RL",
      blurb: "A speaker raking leaves watches geese fly south and rethinks what leaving means.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "A sound like rusty hinges wakes the yard;<br>" +
        L(2) + "I drop my rake and tilt my face to look.<br>" +
        L(3) + "The geese are writing south in one long line,<br>" +
        L(4) + "a pencil stroke across a clouded book.<br>" +
        L(5) + "They do not carry maps or ask the way;<br>" +
        L(6) + "the river and the stars are all they need.<br>" +
        L(7) + "The leader drops behind when it grows tired,<br>" +
        L(8) + "and someone fresh flies forward into lead.<br>" +
        L(9) + "I used to think that leaving meant you lost<br>" +
        L(10) + "whatever made the place you left your own.<br>" +
        L(11) + "But geese go every year and still come back,<br>" +
        L(12) + "and every spring they find the field they've known.<br>" +
        L(13) + "I pick the rake back up. The sky is wide.<br>" +
        L(14) + "The yard feels like a page I'll write inside." +
        "</p>",
      claims: [
        {
          id: "hinges",
          sol: "9.RL.2.A",
          stem: "In line 1, the poet compares the geese's calls to rusty hinges mainly to suggest that the calls are —",
          choices: [
            { letter: "A", text: "soft and soothing" },
            { letter: "B", text: "far too quiet to hear" },
            { letter: "C", text: "harsh and creaking" },
            { letter: "D", text: "musical and sweet" }
          ],
          correct: "C"
        },
        {
          id: "image",
          sol: "9.RL.2.B",
          stem: "The image in lines 3 and 4 of geese \"writing\" a \"pencil stroke across a clouded book\" mainly helps the reader picture —",
          choices: [
            { letter: "A", text: "a thin dark line of birds moving across a gray sky" },
            { letter: "B", text: "the speaker taking notes about the geese" },
            { letter: "C", text: "a storm about to break over the yard" },
            { letter: "D", text: "geese landing in a field to rest" }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Lines 7 and 8 suggest that the geese —",
          choices: [
            { letter: "A", text: "follow one leader for the whole journey" },
            { letter: "B", text: "fly in no particular order" },
            { letter: "C", text: "rest whenever one bird becomes tired" },
            { letter: "D", text: "share the hard work of leading" }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "9.RL.3.A",
          stem: "Lines 9 and 10 mark a shift in the poem from —",
          choices: [
            { letter: "A", text: "the speaker's chores to a description of the weather" },
            { letter: "B", text: "describing the geese to the speaker's own beliefs" },
            { letter: "C", text: "happy memories to a feeling of loss" },
            { letter: "D", text: "spring to autumn" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"The Geese Go Over\"?",
          choices: [
            { letter: "A", text: "Birds are wiser than people in every way." },
            { letter: "B", text: "Hard work in the yard brings its own reward." },
            { letter: "C", text: "Leaving a place does not have to mean losing it." },
            { letter: "D", text: "It is safer never to travel far from home." }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of lines 13 and 14 is best described as —",
          choices: [
            { letter: "A", text: "calm and hopeful" },
            { letter: "B", text: "anxious and rushed" },
            { letter: "C", text: "angry and stubborn" },
            { letter: "D", text: "bored and distant" }
          ],
          correct: "A"
        }
      ]
    },

    /* 5 — Paired texts, level 2 */
    {
      id: "g9-dsr-c41-otter-kelp",
      family: "G9",
      title: "Otters and the Kelp Forest",
      kind: "Paired texts · 9.DSR",
      blurb: "A science article and a kayak guide's notebook describe what happens when sea otters return.",
      level: 2,
      passage:
        "<p><strong>Text 1 — The Otter Effect</strong></p>" +
        "<p>" + N(1) + "Sea otters spend nearly their whole lives in the ocean, and they eat a great deal: an adult may consume about a quarter of its body weight in food each day. " +
        N(2) + "One of their favorite foods is the sea urchin, a spiny animal that grazes on kelp. " +
        N(3) + "Kelp is a giant seaweed that forms underwater forests, which shelter fish, crabs, and snails. " +
        N(4) + "Where otters are missing, urchin numbers can explode, and the urchins may chew through the kelp until only bare rock remains. " +
        N(5) + "Scientists call these empty areas \"urchin barrens.\" " +
        N(6) + "When otters return to a coast, they eat the urchins, and over several years the kelp can grow back. " +
        N(7) + "For this reason, many biologists describe the sea otter as a keystone species, an animal whose effect on its habitat is far larger than its numbers would suggest." +
        "</p>" +
        "<p><strong>Text 2 — From a Kayak Guide's Notebook</strong></p>" +
        "<p>" + N(8) + "Ten years ago, when I started leading kayak tours in this cove, I paddled over purple urchins packed so tightly they looked like a carpet. " +
        N(9) + "The water was clear, but there was little to see. " +
        N(10) + "Then a small group of otters moved in from the north. " +
        N(11) + "At first, some local fishers complained, because otters also eat the crabs they hoped to catch. " +
        N(12) + "I understood their worry. " +
        N(13) + "Still, I watched the cove change, season by season. " +
        N(14) + "This summer, my tour groups had to steer around thick kelp, and a harbor seal popped up beside us in the tangle. " +
        N(15) + "A child in the front kayak asked whether the forest had always been here. " +
        N(16) + "I told her no, and that it had come back because of a few hungry animals floating on their backs." +
        "</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          stem: "Which idea is supported by both Text 1 and Text 2?",
          choices: [
            { letter: "A", text: "Fishers and otters compete for the same urchins." },
            { letter: "B", text: "Kelp forests disappear whenever seals arrive." },
            { letter: "C", text: "When otters return, kelp that urchins destroyed can grow back." },
            { letter: "D", text: "Urchin barrens are the best places to watch wildlife." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "How do the two texts mainly differ in the way they present information about otters?",
          choices: [
            { letter: "A", text: "Text 1 explains the process in general terms; Text 2 describes changes seen firsthand in one place." },
            { letter: "B", text: "Text 1 argues against protecting otters; Text 2 argues in favor of protecting them." },
            { letter: "C", text: "Text 1 tells a personal story; Text 2 reports the results of an experiment." },
            { letter: "D", text: "Text 1 focuses on crabs and snails; Text 2 focuses only on seals." }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "9.DSR.E",
          stem: "Which TWO sentences from Text 2 best show the change described in sentence 6 of Text 1? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to Text 1, urchin barrens form mainly because —",
          choices: [
            { letter: "A", text: "otters eat too much of the kelp" },
            { letter: "B", text: "fish and crabs leave the forest" },
            { letter: "C", text: "too many urchins graze on the kelp" },
            { letter: "D", text: "the water becomes too clear for kelp" }
          ],
          correct: "C"
        },
        {
          id: "persp",
          sol: "9.DSR.E",
          stem: "Sentence 11 in Text 2 adds which idea that Text 1 does not address?",
          choices: [
            { letter: "A", text: "The return of otters can create costs for some people." },
            { letter: "B", text: "Otters eat about a quarter of their body weight daily." },
            { letter: "C", text: "Kelp forests provide shelter for many sea animals." },
            { letter: "D", text: "Otters usually arrive from the south rather than the north." }
          ],
          correct: "A"
        },
        {
          id: "keystone",
          sol: "9.RV.1.C",
          stem: "Based on the context of sentence 7, a <em>keystone species</em> is an animal that —",
          choices: [
            { letter: "A", text: "lives only near rocky shores" },
            { letter: "B", text: "shapes its habitat far more than its numbers suggest" },
            { letter: "C", text: "is the largest animal in its food web" },
            { letter: "D", text: "must be protected by special laws" }
          ],
          correct: "B"
        }
      ]
    },

    /* 6 — Drama, level 2 */
    {
      id: "g9-rl-c41-survey-line",
      family: "G9",
      title: "Survey Line",
      kind: "Drama · 9.RL",
      blurb: "Deep in a limestone cave, a new club member learns why mapmakers take their time.",
      level: 2,
      passage:
        "<p>" + N(1) + "<em>A narrow passage in Ledbetter Cave. Helmet lamps throw small circles of light on wet limestone. RAFAEL, seventeen, holds one end of a measuring tape; MEI, fourteen, kneels in the mud with a waterproof notebook.</em></p>" +
        "<p>" + N(2) + "<strong>RAFAEL:</strong> Station twelve to station thirteen. Read me the distance.</p>" +
        "<p>" + N(3) + "<strong>MEI:</strong> <em>(squinting at the tape)</em> Four point two meters. No, four point seven. Sorry.</p>" +
        "<p>" + N(4) + "<strong>RAFAEL:</strong> Which one?</p>" +
        "<p>" + N(5) + "<strong>MEI:</strong> Four point seven. <em>(Aside.)</em> If I mess up one more number, he'll send me back to the entrance to guard the snacks.</p>" +
        "<p>" + N(6) + "<strong>RAFAEL:</strong> Write it down, then the compass reading. Every number we take turns into a line on the map.</p>" +
        "<p>" + N(7) + "<strong>MR. DUNMORE:</strong> <em>(calling from somewhere behind them)</em> How's the new surveyor holding up?</p>" +
        "<p>" + N(8) + "<strong>RAFAEL:</strong> Slowly.</p>" +
        "<p>" + N(9) + "<em>MEI's pencil stops. She stares down at the page.</em></p>" +
        "<p>" + N(10) + "<strong>RAFAEL:</strong> <em>(after a pause, more gently)</em> Slow is right. The first map of this cave was made in a hurry, and half the passages are drawn in the wrong place.</p>" +
        "<p>" + N(11) + "<strong>MEI:</strong> So the people who made it were fast?</p>" +
        "<p>" + N(12) + "<strong>RAFAEL:</strong> Fast and wrong. We spent last spring crawling toward a room that turned out to be forty meters to the left.</p>" +
        "<p>" + N(13) + "<strong>MEI:</strong> <em>(laughing, then reading the compass carefully)</em> Two hundred ten degrees. I checked it twice.</p>" +
        "<p>" + N(14) + "<strong>RAFAEL:</strong> Good. <em>(He hands her the tape.)</em> You take the far end this time.</p>" +
        "<p>" + N(15) + "<strong>MEI:</strong> <em>(Aside, as she crawls forward.)</em> Guard the snacks? Not today.</p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          stem: "The aside in sentence 5 mainly reveals that Mei —",
          choices: [
            { letter: "A", text: "is hungry and wants to leave the cave" },
            { letter: "B", text: "fears being sent away if she makes mistakes" },
            { letter: "C", text: "thinks Rafael is reading the tape wrong" },
            { letter: "D", text: "plans to quit the caving club" }
          ],
          correct: "B"
        },
        {
          id: "direction",
          sol: "9.RL.3.B",
          stem: "The stage direction in sentence 9 mainly shows that Mei —",
          choices: [
            { letter: "A", text: "has lost her place in the notebook" },
            { letter: "B", text: "cannot see well in the dim light" },
            { letter: "C", text: "is waiting for Mr. Dunmore to arrive" },
            { letter: "D", text: "is stung by Rafael's one-word answer" }
          ],
          correct: "D"
        },
        {
          id: "rafael",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Rafael as a character?",
          choices: [
            { letter: "A", text: "He is strict about accuracy but willing to encourage." },
            { letter: "B", text: "He is impatient and wants to finish quickly." },
            { letter: "C", text: "He is unsure of his own skill as a surveyor." },
            { letter: "D", text: "He is more interested in jokes than in mapping." }
          ],
          correct: "A"
        },
        {
          id: "setting",
          sol: "9.RL.3.A",
          stem: "The setting described in sentence 1 contributes to the scene mainly by —",
          choices: [
            { letter: "A", text: "suggesting that the characters are lost" },
            { letter: "B", text: "explaining why the club meets only in spring" },
            { letter: "C", text: "showing the cramped, dim conditions that make careful work hard" },
            { letter: "D", text: "hinting that the cave is about to flood" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best developed in \"Survey Line\"?",
          choices: [
            { letter: "A", text: "Leaders should never admit that a task is difficult." },
            { letter: "B", text: "Beginners should stay at the entrance until they are ready." },
            { letter: "C", text: "Old maps are always more trustworthy than new ones." },
            { letter: "D", text: "Careful, patient work matters more than speed." }
          ],
          correct: "D"
        },
        {
          id: "asides",
          sol: "9.RL.1.D",
          stem: "How does Mei's aside in sentence 15 differ from her aside in sentence 5?",
          choices: [
            { letter: "A", text: "In sentence 15 she is complaining about the cold." },
            { letter: "B", text: "In sentence 15 she has gained confidence in her role." },
            { letter: "C", text: "In sentence 15 she is speaking directly to Rafael." },
            { letter: "D", text: "In sentence 15 she has decided to guard the snacks." }
          ],
          correct: "B"
        }
      ]
    },

    /* 7 — Functional text, level 1 */
    {
      id: "g9-ri-c41-banding-guide",
      family: "G9",
      title: "Banding Station Guide",
      kind: "Functional text · 9.RI",
      blurb: "A volunteer guide for a marsh station that bands migrating songbirds.",
      level: 1,
      passage:
        "<p><strong>Willow Marsh Bird Banding Station: Fall Volunteer Guide</strong><br>" +
        N(1) + "Each fall, thousands of songbirds pass through Willow Marsh on their way south, and our station places tiny numbered bands on their legs so that scientists can track their journeys. " +
        N(2) + "Volunteers age 14 and older are welcome; volunteers under 16 must be accompanied by an adult.</p>" +
        "<p><strong>When to Arrive</strong><br>" +
        N(3) + "Nets open thirty minutes before sunrise, so please arrive by 6:00 a.m. " +
        N(4) + "Sessions end at 11:00 a.m., or earlier if the temperature rises above 80 degrees, since heat can stress the birds.</p>" +
        "<p><strong>What to Bring</strong><br>" +
        N(5) + "Wear muted colors, closed-toe shoes, and clothing you don't mind getting muddy. " +
        N(6) + "Bring water and a snack, but leave insect spray at home, because its chemicals can damage birds' feathers and skin.</p>" +
        "<p><strong>Your First Day</strong><br>" +
        N(7) + "New volunteers do not handle birds right away. " +
        N(8) + "You will start as a recorder, writing down each bird's band number, species, age, and wing length as a trained bander calls them out. " +
        N(9) + "After at least six sessions as a recorder, you may ask to begin bander training.</p>" +
        "<p><strong>Safety Rules</strong><br>" +
        N(10) + "Never remove a bird from a net yourself, even if it seems badly tangled; call a bander immediately. " +
        N(11) + "If you find an injured bird, place it in a cloth bag in a quiet, shaded spot until a bander arrives. " +
        N(12) + "Sessions are canceled during rain or high wind, so check the station's message line by 5:00 a.m.</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "The main purpose of the banding station guide is to —",
          choices: [
            { letter: "A", text: "persuade readers to study birds in college" },
            { letter: "B", text: "describe the history of Willow Marsh" },
            { letter: "C", text: "compare different kinds of songbirds" },
            { letter: "D", text: "prepare new volunteers to work safely and helpfully" }
          ],
          correct: "D"
        },
        {
          id: "spray",
          sol: "9.RI.1.B",
          stem: "According to the guide, volunteers should not bring insect spray because —",
          choices: [
            { letter: "A", text: "its chemicals can harm birds' feathers and skin" },
            { letter: "B", text: "its smell scares birds away from the nets" },
            { letter: "C", text: "there are few insects in the marsh in fall" },
            { letter: "D", text: "the station provides its own spray" }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How is the volunteer guide organized?",
          choices: [
            { letter: "A", text: "As a story about one volunteer's first season" },
            { letter: "B", text: "In order from the most to the least common birds" },
            { letter: "C", text: "In headed sections that each cover a practical topic" },
            { letter: "D", text: "As a list of problems followed by their causes" }
          ],
          correct: "C"
        },
        {
          id: "evid",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that volunteers must earn the chance to handle birds?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "intro",
          sol: "9.RI.1.C",
          stem: "Sentence 1 differs from most of the other sentences in the guide because it —",
          choices: [
            { letter: "A", text: "warns volunteers about a danger" },
            { letter: "B", text: "gives an exact time to arrive" },
            { letter: "C", text: "states an opinion about songbirds" },
            { letter: "D", text: "gives background rather than an instruction" }
          ],
          correct: "D"
        },
        {
          id: "heading",
          sol: "9.RI.2.B",
          stem: "The section headed \"Your First Day\" mainly serves to —",
          choices: [
            { letter: "A", text: "explain that new volunteers begin with a limited role" },
            { letter: "B", text: "list the birds that volunteers will see first" },
            { letter: "C", text: "describe what to do with an injured bird" },
            { letter: "D", text: "tell volunteers which clothes to wear" }
          ],
          correct: "A"
        }
      ]
    },

    /* 8 — Argument, level 3 */
    {
      id: "g9-ri-c41-lights-out",
      family: "G9",
      title: "Let the Birds Pass",
      kind: "Argument · 9.RI",
      blurb: "A student asks the town council to dim its buildings during spring and fall migration.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every spring and fall, millions of songbirds pass over our town at night, and many of them never make it past Main Street. " +
        N(2) + "Most of these birds migrate in darkness, steering partly by the stars, and bright artificial light confuses them. " +
        N(3) + "Drawn toward glowing windows and floodlit walls, they circle until they are exhausted or strike the glass. " +
        N(4) + "Last October, members of our school's ecology club walked the downtown sidewalks at dawn for three weeks and found 142 dead or stunned birds, most of them beneath the two tallest office buildings. " +
        N(5) + "That number surely understates the problem, since cleaning crews and hungry cats reach many birds before we do. " +
        N(6) + "I am asking the town council to adopt a \"Lights Out\" policy from mid-April through May and from September through October. " +
        N(7) + "During those weeks, town buildings would turn off decorative and upper-floor lights between 11:00 p.m. and 6:00 a.m., and private businesses would be encouraged to do the same. " +
        N(8) + "Some people worry that dark buildings will make downtown less safe. " +
        N(9) + "But the policy would not touch streetlights or sidewalk lighting; it concerns empty offices and glowing rooftops that no one looks at after midnight. " +
        N(10) + "Others argue that one small town cannot make a difference to birds that travel thousands of miles. " +
        N(11) + "Yet a migrating warbler does not need every city on its route to be dark; it needs enough safe places to rest along the way. " +
        N(12) + "A darker night costs us nothing, and it may even lower the town's electric bill. " +
        N(13) + "For a few weeks a year, we can simply let the birds pass." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the writer's central claim?",
          choices: [
            { letter: "A", text: "Cats are the greatest danger to birds downtown." },
            { letter: "B", text: "The town should dim unneeded lights during migration seasons." },
            { letter: "C", text: "Tall office buildings should not be built in small towns." },
            { letter: "D", text: "The ecology club should count birds every month of the year." }
          ],
          correct: "B"
        },
        {
          id: "evid",
          sol: "9.RI.3.A",
          stem: "Which sentence provides the strongest local evidence that lights are harming birds in the writer's town?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "D"
        },
        {
          id: "judg",
          sol: "9.RI.1.C",
          stem: "Which sentence presents the writer's judgment rather than a reported finding?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 2" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "A"
        },
        {
          id: "struct",
          sol: "9.RI.2.A",
          stem: "Sentences 8 through 11 are organized mainly as —",
          choices: [
            { letter: "A", text: "a list of steps the council must follow in order" },
            { letter: "B", text: "a comparison between two different towns" },
            { letter: "C", text: "two objections, each followed by the writer's response" },
            { letter: "D", text: "a description of how birds navigate by the stars" }
          ],
          correct: "C"
        },
        {
          id: "craft",
          sol: "9.RI.2.B",
          stem: "The writer includes sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "answer the claim that a small town's effort cannot matter" },
            { letter: "B", text: "show that warblers are the most common migrating bird" },
            { letter: "C", text: "admit that the policy will not help most birds" },
            { letter: "D", text: "suggest that other cities have already gone dark" }
          ],
          correct: "A"
        },
        {
          id: "under",
          sol: "9.RV.1.C",
          stem: "In sentence 5, the word <em>understates</em> most nearly means —",
          choices: [
            { letter: "A", text: "explains clearly" },
            { letter: "B", text: "proves wrong" },
            { letter: "C", text: "repeats often" },
            { letter: "D", text: "makes seem smaller" }
          ],
          correct: "D"
        }
      ]
    },

    /* 9 — Literary, level 1 */
    {
      id: "g9-rl-c41-ant-jar",
      family: "G9",
      title: "Diego's Road",
      kind: "Literary · 9.RL",
      blurb: "Diego helps his little brother with an ant jar only because he has to, until the ants surprise him.",
      level: 1,
      passage:
        "<p>" + N(1) + "Diego had agreed to help his little brother with the ant project only because their mother had asked twice. " +
        N(2) + "Nico, who was eight, had collected forty black ants from a sidewalk crack and poured them into a glass jar packed with sand. " +
        N(3) + "For two days, Diego barely glanced at it. " +
        N(4) + "On the third morning, Nico ran into the kitchen with his face crumpled like a paper bag. " +
        N(5) + "The cat had knocked the jar off the windowsill, and although the glass had not broken, the sand had shifted and every tunnel was gone. " +
        N(6) + "\"They worked so hard,\" Nico whispered. " +
        N(7) + "Diego was ready to say that ants did not care about anything, but he knelt beside the jar instead. " +
        N(8) + "Already, a few ants were carrying single grains of sand in their jaws, each grain nearly as big as their heads. " +
        N(9) + "By lunch, a new tunnel curved along the glass. " +
        N(10) + "By dinner, there were three. " +
        N(11) + "Diego found himself checking the jar between homework problems, pressing his forehead to the cool glass to see which ant had gotten farthest. " +
        N(12) + "That night, Nico drew the tunnels in his notebook and labeled one \"Diego's Road\" because it was the one his brother had watched the longest. " +
        N(13) + "Diego pretended to roll his eyes. " +
        N(14) + "But when the cat wandered past the windowsill the next morning, he moved the jar to the middle of the table, where nothing could reach it." +
        "</p>",
      claims: [
        {
          id: "start",
          sol: "9.RL.1.C",
          stem: "In sentences 1 through 3, Diego is best described as —",
          choices: [
            { letter: "A", text: "curious about how ants build tunnels" },
            { letter: "B", text: "jealous of the attention Nico receives" },
            { letter: "C", text: "reluctant and uninterested in the project" },
            { letter: "D", text: "worried that the cat will break the jar" }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 4, Nico's face is compared to a crumpled paper bag mainly to show that he is —",
          choices: [
            { letter: "A", text: "upset and close to tears" },
            { letter: "B", text: "sleepy from waking early" },
            { letter: "C", text: "hiding something from Diego" },
            { letter: "D", text: "confused by the cat's behavior" }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "What can readers infer from Diego's choice in sentence 7?",
          choices: [
            { letter: "A", text: "He believes the ants will never rebuild." },
            { letter: "B", text: "He wants to blame the cat for the damage." },
            { letter: "C", text: "He has secretly been studying the ants all along." },
            { letter: "D", text: "He decides to comfort Nico instead of dismissing him." }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because the story is told mostly through Diego's thoughts and actions, the reader mainly learns —",
          choices: [
            { letter: "A", text: "how the ants organize their colony" },
            { letter: "B", text: "how Diego's attitude toward the ants changes" },
            { letter: "C", text: "why their mother asked Diego to help" },
            { letter: "D", text: "what Nico plans to write in his report" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "The author ends the story with sentence 14 mainly to show that Diego —",
          choices: [
            { letter: "A", text: "now cares about the ants, even if he won't say so" },
            { letter: "B", text: "is annoyed that the cat keeps causing trouble" },
            { letter: "C", text: "wants to take the project over from Nico" },
            { letter: "D", text: "plans to return the ants to the sidewalk" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"Diego's Road\"?",
          choices: [
            { letter: "A", text: "Younger siblings should solve their own problems." },
            { letter: "B", text: "Pets and science projects do not belong together." },
            { letter: "C", text: "Watching others persist after a setback can change how we feel." },
            { letter: "D", text: "Homework is more important than any hobby." }
          ],
          correct: "C"
        }
      ]
    },

    /* 10 — Informational, level 2 */
    {
      id: "g9-ri-c41-stone-drips",
      family: "G9",
      title: "Stone That Drips",
      kind: "Informational · 9.RI",
      blurb: "How a single drop of water builds stalactites, stalagmites and columns over thousands of years.",
      level: 2,
      passage:
        "<p>" + N(1) + "A limestone cave can seem like a still, silent place, but many caves are slowly building themselves. " +
        N(2) + "The process begins above ground, when rainwater soaks through soil. " +
        N(3) + "Along the way, the water picks up carbon dioxide from decaying plants and becomes a weak acid. " +
        N(4) + "As this water seeps through cracks in limestone, it dissolves a small amount of the rock and carries it downward. " +
        N(5) + "When a drop reaches the open air of a cave ceiling, some of its carbon dioxide escapes, much as bubbles escape from a newly opened bottle of soda. " +
        N(6) + "The water can no longer hold all of its dissolved rock, so it leaves behind a tiny ring of a mineral called calcite. " +
        N(7) + "Drop after drop, the rings stack into a thin, hollow tube known as a soda straw. " +
        N(8) + "If the tube clogs, water flows down the outside instead, and the straw thickens into a cone-shaped stalactite. " +
        N(9) + "Meanwhile, water that drips to the floor deposits its own calcite there and builds a stalagmite upward. " +
        N(10) + "Over thousands of years, a stalactite and a stalagmite may meet to form a column. " +
        N(11) + "Growth rates vary widely: a formation in a wet cave might grow a few centimeters in a century, while one in a dry cave might barely change at all. " +
        N(12) + "Because each layer records the conditions when it formed, scientists can study formations the way others study tree rings, reading clues about past rainfall and temperature. " +
        N(13) + "In a sense, every cave formation is a slowly written diary of the land above it." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Stone That Drips\"?",
          choices: [
            { letter: "A", text: "Caves are dangerous because their ceilings drip acid." },
            { letter: "B", text: "Soda straws are the most common formation in caves." },
            { letter: "C", text: "Scientists prefer studying caves to studying tree rings." },
            { letter: "D", text: "Cave formations grow slowly from minerals left by dripping water." }
          ],
          correct: "D"
        },
        {
          id: "seq",
          sol: "9.RI.2.A",
          stem: "The author organizes sentences 2 through 10 mainly by —",
          choices: [
            { letter: "A", text: "describing the steps of a process in order" },
            { letter: "B", text: "comparing wet caves with dry caves" },
            { letter: "C", text: "presenting a problem and several solutions" },
            { letter: "D", text: "telling the story of a cave explorer" }
          ],
          correct: "A"
        },
        {
          id: "soda",
          sol: "9.RI.2.B",
          stem: "The comparison to a newly opened bottle of soda in sentence 5 helps the reader understand that —",
          choices: [
            { letter: "A", text: "cave water tastes sweet and fizzy" },
            { letter: "B", text: "gas escapes from the water when it reaches open air" },
            { letter: "C", text: "soda straws are shaped like drinking straws" },
            { letter: "D", text: "cave ceilings can burst under pressure" }
          ],
          correct: "B"
        },
        {
          id: "clog",
          sol: "9.RI.1.B",
          stem: "According to the passage, a soda straw becomes a stalactite when —",
          choices: [
            { letter: "A", text: "it meets a stalagmite rising from the floor" },
            { letter: "B", text: "the cave becomes too dry for water to drip" },
            { letter: "C", text: "its tube clogs and water runs down the outside" },
            { letter: "D", text: "carbon dioxide stops escaping from the drops" }
          ],
          correct: "C"
        },
        {
          id: "evid",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that cave formations are useful to scientists?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 1" }
          ],
          correct: "A"
        },
        {
          id: "deposit",
          sol: "9.RV.1.C",
          stem: "As used in sentence 9, the word <em>deposits</em> most nearly means —",
          choices: [
            { letter: "A", text: "washes away" },
            { letter: "B", text: "pays for" },
            { letter: "C", text: "leaves behind" },
            { letter: "D", text: "breaks apart" }
          ],
          correct: "C"
        }
      ]
    },

    /* 11 — Vocabulary, level 2 */
    {
      id: "g9-rv-c41-seal-pup",
      family: "G9",
      title: "Pebble Goes Home",
      kind: "Vocabulary · 9.RV",
      blurb: "A weekend volunteer watches a starving seal pup recover at a marine rescue center.",
      level: 2,
      passage:
        "<p>" + N(1) + "The harbor seal pup arrived at the Gray Point Marine Rescue Center wrapped in a wet towel, so thin that her ribs showed beneath her spotted coat. " +
        N(2) + "She was <strong>lethargic</strong>, barely lifting her head when the volunteers spoke, and she did not even flinch at the noise of the pumps. " +
        N(3) + "Kenji, a high school junior who volunteered on weekends, had been told that the center's goal was to <strong>rehabilitate</strong> each animal, restoring its health so that it could return to the sea. " +
        N(4) + "Looking at the pup, whom the staff named Pebble, he wondered whether that was possible. " +
        N(5) + "For the first week, Pebble could not swallow whole fish, so the staff fed her a blended fish mixture through a soft tube. " +
        N(6) + "This <strong>sustenance</strong> was not glamorous, but it kept her alive. " +
        N(7) + "Kenji's job was to watch her pool and record every movement in a log, and the lead vet reminded him to stay <strong>vigilant</strong>, because a seal that stops moving can be in trouble within minutes. " +
        N(8) + "In the second week, Pebble made a <strong>tentative</strong> lunge at a herring, nudging it with her nose before finally swallowing it. " +
        N(9) + "Kenji wrote the time down twice, just to be sure. " +
        N(10) + "By the end of the month, she was chasing fish across the pool, her body round and <strong>robust</strong>. " +
        N(11) + "On release day, Kenji stood on the beach as the carrier door opened. " +
        N(12) + "Pebble paused at the edge of the surf, looked back once, and then vanished into a wave as if she had never been away." +
        "</p>",
      claims: [
        {
          id: "leth",
          sol: "9.RV.1.C",
          stem: "In sentence 2, the word <strong>lethargic</strong> most nearly means —",
          choices: [
            { letter: "A", text: "frightened" },
            { letter: "B", text: "lacking energy" },
            { letter: "C", text: "hungry" },
            { letter: "D", text: "badly injured" }
          ],
          correct: "B"
        },
        {
          id: "re",
          sol: "9.RV.1.B",
          stem: "The prefix <em>re-</em> in <strong>rehabilitate</strong> (sentence 3) signals that the center tries to —",
          choices: [
            { letter: "A", text: "move animals to a new home" },
            { letter: "B", text: "train animals to perform" },
            { letter: "C", text: "study animals before releasing them" },
            { letter: "D", text: "bring animals back to a healthy state" }
          ],
          correct: "D"
        },
        {
          id: "vig",
          sol: "9.RV.1.C",
          stem: "Which phrase from sentence 7 best helps the reader understand the meaning of <strong>vigilant</strong>?",
          choices: [
            { letter: "A", text: "\"record every movement\"" },
            { letter: "B", text: "\"the lead vet reminded him\"" },
            { letter: "C", text: "\"Kenji's job was to\"" },
            { letter: "D", text: "\"in a log, and the\"" }
          ],
          correct: "A"
        },
        {
          id: "tent",
          sol: "9.RV.1.E",
          stem: "If the author had described Pebble's lunge as <em>quick</em> instead of <strong>tentative</strong>, the sentence would lose the sense that Pebble was —",
          choices: [
            { letter: "A", text: "angry at the herring" },
            { letter: "B", text: "showing off for Kenji" },
            { letter: "C", text: "hesitant and unsure" },
            { letter: "D", text: "already fully healthy" }
          ],
          correct: "C"
        },
        {
          id: "wave",
          sol: "9.RV.1.F",
          stem: "In sentence 12, Pebble vanishes \"as if she had never been away.\" This comparison suggests that —",
          choices: [
            { letter: "A", text: "Kenji is unsure whether she was really released" },
            { letter: "B", text: "she is fully at home in the ocean again" },
            { letter: "C", text: "the rescue center was a frightening place" },
            { letter: "D", text: "she will soon return to the beach" }
          ],
          correct: "B"
        },
        {
          id: "robust",
          sol: "9.RV.1.B",
          stem: "Which word from sentence 1 is most nearly the opposite of <strong>robust</strong>?",
          choices: [
            { letter: "A", text: "spotted" },
            { letter: "B", text: "wet" },
            { letter: "C", text: "harbor" },
            { letter: "D", text: "thin" }
          ],
          correct: "D"
        }
      ]
    },

    /* 12 — Paired texts, level 3 */
    {
      id: "g9-dsr-c41-cicada-year",
      family: "G9",
      title: "The Seventeen-Year Visitors",
      kind: "Paired texts · 9.DSR",
      blurb: "A news report and a neighbor's column take different views of a cicada emergence.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Cicadas Return to Millbrook County</strong></p>" +
        "<p>" + N(1) + "After seventeen years underground, periodical cicadas began emerging across Millbrook County last week, climbing out of the soil by the thousands each night. " +
        N(2) + "The insects spent their long youth as nymphs, feeding on sap from tree roots. " +
        N(3) + "Now adults, they will live only about four to six weeks above ground. " +
        N(4) + "Males produce a loud, buzzing call by vibrating drum-like organs on their bodies, and in some neighborhoods the chorus has measured close to the volume of a lawn mower. " +
        N(5) + "According to the county extension office, the insects do not bite or sting. " +
        N(6) + "However, females cut small slits in thin branches to lay eggs, which can damage very young trees. " +
        N(7) + "The office recommends covering saplings with fine netting until the emergence ends in late June." +
        "</p>" +
        "<p><strong>Text 2 — Put Down the Spray Can</strong></p>" +
        "<p>" + N(8) + "My neighbors have declared war on the cicadas, and I wish they would call a truce. " +
        N(9) + "This week I watched one man fog his entire yard with insecticide while the cicadas kept singing from the oaks across the street. " +
        N(10) + "Spraying does little good against an insect that arrives by the million, and it kills the bees and ladybugs our gardens actually need. " +
        N(11) + "Yes, the noise is remarkable; I have had to close my windows during phone calls. " +
        N(12) + "But the cicadas will be gone in a month, their tunnels will have loosened the soil, and their bodies will feed robins, squirrels, and even the trees as they decay. " +
        N(13) + "If you have a young tree, wrap it in netting. " +
        N(14) + "Otherwise, enjoy a show that your yard will not see again for another seventeen years." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          stem: "On which point do the two texts agree?",
          choices: [
            { letter: "A", text: "Cicadas are too loud for people to tolerate." },
            { letter: "B", text: "Young trees can be protected from cicadas with netting." },
            { letter: "C", text: "Insecticide is the best defense against cicadas." },
            { letter: "D", text: "Cicadas harm bees and ladybugs in gardens." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "Which statement best describes how the two texts differ?",
          choices: [
            { letter: "A", text: "Text 1 argues for spraying; Text 2 argues against it." },
            { letter: "B", text: "Text 1 tells a personal story; Text 2 reports scientific data." },
            { letter: "C", text: "Text 1 informs without taking a side; Text 2 urges readers to tolerate the insects." },
            { letter: "D", text: "Text 1 focuses on the noise; Text 2 focuses on the life cycle." }
          ],
          correct: "C"
        },
        {
          id: "combine",
          sol: "9.DSR.E",
          stem: "A reader combining both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the problems cicadas cause are brief and can be managed without spraying" },
            { letter: "B", text: "cicadas will return to Millbrook County every summer from now on" },
            { letter: "C", text: "most residents of Millbrook County enjoy the cicadas' chorus" },
            { letter: "D", text: "cicadas cause more damage to old oaks than to saplings" }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence expresses an opinion rather than a fact that could be checked?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "D"
        },
        {
          id: "war",
          sol: "9.RV.1.F",
          stem: "In sentence 8, the writer's figurative use of <em>war</em> and <em>truce</em> suggests that her neighbors are —",
          choices: [
            { letter: "A", text: "reacting to the insects with needless hostility" },
            { letter: "B", text: "arguing with one another about the noise" },
            { letter: "C", text: "joining the county's official program" },
            { letter: "D", text: "losing interest in their gardens" }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "9.DSR.E",
          stem: "Which TWO sentences from Text 1 would the writer of Text 2 most likely use to support her argument? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: ["B", "C"]
        }
      ]
    },

    /* 13 — Literary, level 3 */
    {
      id: "g9-rl-c41-road-cut",
      family: "G9",
      title: "The Road Cut",
      kind: "Literary · 9.RL",
      blurb: "Lucía tags along on her grandfather's rock hunt and finds an ocean in a hillside.",
      level: 3,
      passage:
        "<p>" + N(1) + "The road cut outside Harlan's Gap looked, to most drivers, like nothing more than a wall of gray stone that a highway crew had blasted through decades ago. " +
        N(2) + "To Grandpa Ezra, who had driven a truck for the quarry for thirty years, it was a library whose books had been shelved sideways. " +
        N(3) + "\"Every stripe is a different age of the world,\" he told Lucía, tapping the layers with the handle of his rock hammer. " +
        N(4) + "Lucía, who had come along mainly because her phone had no signal at his house anyway, nodded without looking up. " +
        N(5) + "She had heard about the stripes before, usually at dinner, usually twice. " +
        N(6) + "Grandpa worked slowly down the wall, his knees cracking each time he crouched, and Lucía trailed behind him, kicking at loose chips. " +
        N(7) + "Then one chip flipped over, and she stopped. " +
        N(8) + "Pressed into the stone was a shell no longer than her thumbnail, its ridges fanned out as neatly as the pleats of a skirt. " +
        N(9) + "\"That was the bottom of a sea,\" Grandpa said quietly, as if the sea might still be listening. " +
        N(10) + "Lucía looked up at the hills, at the cows grazing on them, at the highway sign announcing an elevation of 1,900 feet. " +
        N(11) + "She tried to picture water over all of it, and for a moment the ground beneath her sneakers felt less solid than it had. " +
        N(12) + "On the drive home she held the chip in her lap the whole way. " +
        N(13) + "At dinner, when Grandpa began to explain about the stripes, she asked him to start with the oldest one." +
        "</p>",
      claims: [
        {
          id: "library",
          sol: "9.RL.2.A",
          stem: "In sentence 2, the author compares the road cut to a library mainly to suggest that Grandpa sees the rock as —",
          choices: [
            { letter: "A", text: "a quiet place to escape from his family" },
            { letter: "B", text: "a record that holds stories to be read" },
            { letter: "C", text: "a dull wall that should be torn down" },
            { letter: "D", text: "a collection that belongs to the quarry" }
          ],
          correct: "B"
        },
        {
          id: "lucia",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Lucía in sentences 4 through 6?",
          choices: [
            { letter: "A", text: "She is nervous about getting hurt near the wall." },
            { letter: "B", text: "She is eager to find a fossil before Grandpa does." },
            { letter: "C", text: "She is politely indifferent to Grandpa's interest." },
            { letter: "D", text: "She is angry that she was forced to come along." }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "In sentence 9, Grandpa speaks \"as if the sea might still be listening.\" This phrase mainly creates a mood of —",
          choices: [
            { letter: "A", text: "hushed wonder" },
            { letter: "B", text: "playful teasing" },
            { letter: "C", text: "sudden danger" },
            { letter: "D", text: "tired impatience" }
          ],
          correct: "A"
        },
        {
          id: "solid",
          sol: "9.RL.1.B",
          stem: "Sentence 11 suggests that Lucía —",
          choices: [
            { letter: "A", text: "is dizzy from standing in the sun too long" },
            { letter: "B", text: "worries that the road cut might collapse" },
            { letter: "C", text: "wishes she had stayed at Grandpa's house" },
            { letter: "D", text: "is unsettled by how much the land has changed over time" }
          ],
          correct: "D"
        },
        {
          id: "frame",
          sol: "9.RL.3.A",
          stem: "How does sentence 13 connect to sentence 5?",
          choices: [
            { letter: "A", text: "It shows that Grandpa has stopped repeating his stories." },
            { letter: "B", text: "It shows that Lucía still finds the stripes boring." },
            { letter: "C", text: "It shows that dinner is the only time they talk." },
            { letter: "D", text: "It shows that Lucía now welcomes the story she once tuned out." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best supported by \"The Road Cut\"?",
          choices: [
            { letter: "A", text: "A discovery made firsthand can awaken interest in what once seemed dull." },
            { letter: "B", text: "Teenagers should spend less time on their phones." },
            { letter: "C", text: "Old jobs like quarry work are disappearing." },
            { letter: "D", text: "Fossils are valuable only to trained scientists." }
          ],
          correct: "A"
        }
      ]
    },

    /* 14 — Informational, level 3 */
    {
      id: "g9-ri-c41-night-flyers",
      family: "G9",
      title: "Navigating in the Dark",
      kind: "Informational · 9.RI",
      blurb: "Why many songbirds migrate at night, and the overlapping senses that keep them on course.",
      level: 3,
      passage:
        "<p>" + N(1) + "Each autumn, a thrush no heavier than a slice of bread may fly from Canada to South America, and it will make most of that journey at night. " +
        N(2) + "Why would a small bird choose darkness for such a dangerous trip? " +
        N(3) + "Researchers have proposed several advantages. " +
        N(4) + "Night air tends to be cooler and calmer, so birds lose less water and burn less energy fighting gusts. " +
        N(5) + "Darkness also hides migrants from hawks and falcons, most of which hunt by day. " +
        N(6) + "Finally, flying at night frees the daylight hours for feeding, which a bird must do constantly to refuel. " +
        N(7) + "Steering is the harder puzzle. " +
        N(8) + "Experiments in which young birds were raised under artificial planetarium skies suggest that they learn to find the point around which the stars appear to rotate, and that they use it as a compass pointing north. " +
        N(9) + "Many species also seem to sense Earth's magnetic field, though scientists still debate exactly how that sense works. " +
        N(10) + "Some studies point to special proteins in birds' eyes, while others focus on tiny mineral particles in the beak. " +
        N(11) + "Landmarks matter too: coastlines, rivers, and mountain ranges appear to guide birds once they near familiar ground. " +
        N(12) + "What emerges is not a single navigation tool but a backup system, in which each sense can correct the others when clouds hide the stars or storms push a flock off course. " +
        N(13) + "That redundancy may explain how some birds return, year after year, to the same small patch of forest." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "9.RI.1.A",
          stem: "Which statement best summarizes \"Navigating in the Dark\"?",
          choices: [
            { letter: "A", text: "Thrushes are the only songbirds that travel at night." },
            { letter: "B", text: "Planetarium experiments proved that birds see better at night." },
            { letter: "C", text: "Night flight offers birds several advantages, and they steer with overlapping senses." },
            { letter: "D", text: "Storms are the main reason that migrating birds get lost." }
          ],
          correct: "C"
        },
        {
          id: "question",
          sol: "9.RI.2.B",
          stem: "The author includes the question in sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "introduce the first topic the passage will explain" },
            { letter: "B", text: "suggest that night migration is a foolish choice" },
            { letter: "C", text: "show that scientists have no answer yet" },
            { letter: "D", text: "ask readers to report birds they see at night" }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "How does the author mostly organize \"Navigating in the Dark\"?",
          choices: [
            { letter: "A", text: "By tracing one thrush's trip from start to finish" },
            { letter: "B", text: "By giving reasons for night flight, then explaining how birds navigate" },
            { letter: "C", text: "By comparing birds that migrate with birds that stay home" },
            { letter: "D", text: "By listing dangers in order from least to most serious" }
          ],
          correct: "B"
        },
        {
          id: "debate",
          sol: "9.RI.1.C",
          stem: "Which sentence presents an idea that scientists have not yet settled?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 1" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "D"
        },
        {
          id: "energy",
          sol: "9.RI.3.A",
          stem: "Which detail best supports the idea that night flight helps birds save energy?",
          choices: [
            { letter: "A", text: "Hawks and falcons mostly hunt during the day." },
            { letter: "B", text: "Calmer night air means less effort spent fighting gusts." },
            { letter: "C", text: "Young birds can learn the rotation of the stars." },
            { letter: "D", text: "Coastlines guide birds near familiar ground." }
          ],
          correct: "B"
        },
        {
          id: "backup",
          sol: "9.RI.1.B",
          stem: "According to sentence 12, what happens when clouds hide the stars?",
          choices: [
            { letter: "A", text: "Birds land and wait for the sky to clear." },
            { letter: "B", text: "Birds follow the flock leader instead." },
            { letter: "C", text: "Birds fly toward the brightest light below." },
            { letter: "D", text: "Birds can rely on their other senses instead." }
          ],
          correct: "D"
        }
      ]
    },

    /* 15 — Poetry, level 3 */
    {
      id: "g9-rl-c41-cave-keeps",
      family: "G9",
      title: "What the Cave Keeps",
      kind: "Poetry · 9.RL",
      blurb: "A limestone cave speaks to the visitors who pass through it.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "I am the dark the hillside swallowed whole,<br>" +
        L(2) + "a mouth of stone that never learned to speak.<br>" +
        L(3) + "For centuries I've counted drops of rain<br>" +
        L(4) + "that thread their way down through the limestone's cracks<br>" +
        L(5) + "and hang a moment, trembling, from my roof<br>" +
        L(6) + "before they let their tiny cargo go.<br>" +
        L(7) + "I do not hurry. Hurry is for wind.<br>" +
        L(8) + "My columns rise a fingernail an age;<br>" +
        L(9) + "my patience is the only tool I own.<br>" +
        L(10) + "Sometimes your lanterns visit, bright and brief,<br>" +
        L(11) + "and voices bounce like pebbles off my walls.<br>" +
        L(12) + "You touch, you scratch your names, you leave your light.<br>" +
        L(13) + "Then you are gone. The drip resumes its count.<br>" +
        L(14) + "I hold no anger; I have time to heal.<br>" +
        L(15) + "But know the marks you make will stay with me<br>" +
        L(16) + "far longer than your names will stay with you." +
        "</p>",
      claims: [
        {
          id: "speaker",
          sol: "9.RL.3.B",
          stem: "\"What the Cave Keeps\" is told from the point of view of —",
          choices: [
            { letter: "A", text: "a tour guide leading visitors" },
            { letter: "B", text: "a visitor carrying a lantern" },
            { letter: "C", text: "the cave itself" },
            { letter: "D", text: "a drop of rainwater" }
          ],
          correct: "C"
        },
        {
          id: "pebbles",
          sol: "9.RL.2.A",
          stem: "In line 11, voices are compared to pebbles mainly to suggest that the echoes are —",
          choices: [
            { letter: "A", text: "sharp and scattered" },
            { letter: "B", text: "soft and soothing" },
            { letter: "C", text: "too faint to hear" },
            { letter: "D", text: "heavy and slow" }
          ],
          correct: "A"
        },
        {
          id: "cargo",
          sol: "9.RL.2.B",
          stem: "In line 6, the \"tiny cargo\" that each drop lets go most likely refers to —",
          choices: [
            { letter: "A", text: "the names that visitors scratch" },
            { letter: "B", text: "the light from the lanterns" },
            { letter: "C", text: "a pebble knocked loose from the roof" },
            { letter: "D", text: "the bit of mineral the water carries" }
          ],
          correct: "D"
        },
        {
          id: "contrast",
          sol: "9.RL.3.A",
          stem: "How do lines 10 through 13 contrast with lines 7 through 9?",
          choices: [
            { letter: "A", text: "They shift from the cave's slow patience to the quick, brief visits of people." },
            { letter: "B", text: "They shift from describing rain to describing wind." },
            { letter: "C", text: "They shift from the cave's anger to its forgiveness." },
            { letter: "D", text: "They shift from the present to a memory of the cave's birth." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of lines 14 through 16 is best described as —",
          choices: [
            { letter: "A", text: "joking and lighthearted" },
            { letter: "B", text: "calm but warning" },
            { letter: "C", text: "furious and bitter" },
            { letter: "D", text: "confused and uncertain" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"What the Cave Keeps\"?",
          choices: [
            { letter: "A", text: "Caves are too dangerous for people to explore." },
            { letter: "B", text: "Names carved in stone keep people's memories alive." },
            { letter: "C", text: "Human actions can leave lasting marks on slow-changing places." },
            { letter: "D", text: "Patience is a quality only found in nature." }
          ],
          correct: "C"
        }
      ]
    },

    /* 16 — Vocabulary, level 3 */
    {
      id: "g9-rv-c41-leaf-litter",
      family: "G9",
      title: "Under the Leaves",
      kind: "Vocabulary · 9.RV",
      blurb: "A ninth grader sifting the forest floor discovers a hidden world of beetles.",
      level: 3,
      passage:
        "<p>" + N(1) + "Most visitors to Ashgrove Woods look up at the oaks and never think about the brown carpet crunching under their boots. " +
        N(2) + "Yet the leaf litter, the layer of fallen leaves and twigs on the forest floor, holds a <strong>myriad</strong> of small animals: thousands of creatures in a patch no bigger than a doormat. " +
        N(3) + "Many of them are beetles, and most are <strong>inconspicuous</strong>, dull brown, smaller than a grain of rice, and quick to hide when the leaves are disturbed. " +
        N(4) + "Ninth grader Halima Yusuf spent her summer sifting litter through a wire screen for a county survey, shaking the leaves until the beetles tumbled onto a white sheet. " +
        N(5) + "Under a hand lens, the dull specks turned out to have <strong>intricate</strong> patterns of ridges, pits, and fine hairs, as detailed as the carving on an old wooden door. " +
        N(6) + "Some species were <strong>reclusive</strong>, appearing only in the deepest, dampest layers and never in the open. " +
        N(7) + "Halima learned that these beetles help leaves <strong>decompose</strong>, breaking them into crumbs that fungi and bacteria can turn back into soil. " +
        N(8) + "Without that work, the forest floor would pile higher every autumn, and the trees would be starved of the nutrients locked inside their own fallen leaves. " +
        N(9) + "\"They're the cleanup crew nobody thanks,\" the survey leader told her. " +
        N(10) + "By August, Halima had recorded thirty-one species, two of which had never been reported in the county. " +
        N(11) + "She now thinks of the beetles as <strong>indispensable</strong>, a word she once would have saved for doctors or firefighters. " +
        N(12) + "The next time you walk through the woods, she suggests, look down." +
        "</p>",
      claims: [
        {
          id: "myriad",
          sol: "9.RV.1.C",
          stem: "In sentence 2, the word <strong>myriad</strong> most nearly means —",
          choices: [
            { letter: "A", text: "small variety" },
            { letter: "B", text: "hidden group" },
            { letter: "C", text: "very large number" },
            { letter: "D", text: "single type" }
          ],
          correct: "C"
        },
        {
          id: "incon",
          sol: "9.RV.1.B",
          stem: "<em>Conspicuous</em> means \"easy to see.\" Knowing this and the prefix <em>in-</em>, the reader can tell that <strong>inconspicuous</strong> beetles are —",
          choices: [
            { letter: "A", text: "brightly colored" },
            { letter: "B", text: "not easily noticed" },
            { letter: "C", text: "found indoors" },
            { letter: "D", text: "harmful to trees" }
          ],
          correct: "B"
        },
        {
          id: "carving",
          sol: "9.RV.1.F",
          stem: "In sentence 5, the beetles' patterns are compared to the carving on an old wooden door. This comparison mainly emphasizes that the patterns are —",
          choices: [
            { letter: "A", text: "worn down and faded" },
            { letter: "B", text: "too large to fit under a lens" },
            { letter: "C", text: "made of wood fibers" },
            { letter: "D", text: "finely and skillfully detailed" }
          ],
          correct: "D"
        },
        {
          id: "reclusive",
          sol: "9.RV.1.E",
          stem: "Compared with <em>rare</em>, the word <strong>reclusive</strong> in sentence 6 suggests that these beetles —",
          choices: [
            { letter: "A", text: "keep themselves hidden away from open places" },
            { letter: "B", text: "are close to disappearing from the county" },
            { letter: "C", text: "attack other beetles that come near" },
            { letter: "D", text: "live alone for their entire lives" }
          ],
          correct: "A"
        },
        {
          id: "crew",
          sol: "9.RV.1.F",
          stem: "The survey leader's description of the beetles as \"the cleanup crew nobody thanks\" (sentence 9) suggests that they —",
          choices: [
            { letter: "A", text: "are paid by the county to work" },
            { letter: "B", text: "do necessary work that goes unnoticed" },
            { letter: "C", text: "make the woods look messy" },
            { letter: "D", text: "avoid helping other animals" }
          ],
          correct: "B"
        },
        {
          id: "indisp",
          sol: "9.RV.1.E",
          stem: "In sentence 11, connecting <strong>indispensable</strong> to doctors and firefighters shows that Halima now views the beetles with —",
          choices: [
            { letter: "A", text: "mild amusement" },
            { letter: "B", text: "growing fear" },
            { letter: "C", text: "real respect" },
            { letter: "D", text: "quiet pity" }
          ],
          correct: "C"
        }
      ]
    },

    /* 17 — Paired texts, level 1 */
    {
      id: "g9-dsr-c41-dolphin-echo",
      family: "G9",
      title: "Seeing with Sound",
      kind: "Paired texts · 9.DSR",
      blurb: "An explanation of dolphin echolocation and a marine center demonstration that puts it to the test.",
      level: 1,
      passage:
        "<p><strong>Text 1 — How Echolocation Works</strong></p>" +
        "<p>" + N(1) + "Dolphins often hunt in murky water where eyes are not much help, so they rely on a skill called echolocation. " +
        N(2) + "A dolphin makes rapid clicking sounds in its nasal passages, and a fatty organ in its forehead, called the melon, focuses the clicks into a beam. " +
        N(3) + "When the clicks hit a fish, they bounce back as echoes. " +
        N(4) + "The dolphin picks up the echoes through its lower jaw, which passes the vibrations to its inner ear. " +
        N(5) + "By judging how long the echoes take to return, the dolphin can tell how far away the fish is. " +
        N(6) + "The echoes can also reveal an object's size and shape, and sometimes even what it is made of." +
        "</p>" +
        "<p><strong>Text 2 — The Blindfold Test</strong></p>" +
        "<p>" + N(7) + "At the Bayside Marine Center, trainer Carla Mendes likes to show visitors what echolocation can do. " +
        N(8) + "She slips soft rubber cups over the eyes of a dolphin named Sunny, then drops two rings of the same size into the pool, one metal and one plastic. " +
        N(9) + "Sunny swims in a slow circle, clicking so fast that the sound becomes a buzz on the underwater speaker. " +
        N(10) + "Then she dives and returns with the metal ring, the one Mendes asked for. " +
        N(11) + "\"People think she must be peeking,\" Mendes says. " +
        N(12) + "\"But she's listening to the rings.\" " +
        N(13) + "Visitors usually gasp, and a few try clicking their tongues to see if they can do the same." +
        "</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          stem: "Which idea is supported by both texts about dolphins?",
          choices: [
            { letter: "A", text: "Dolphins see best in murky water." },
            { letter: "B", text: "Dolphins learn echolocation from trainers." },
            { letter: "C", text: "People can learn to echolocate by clicking." },
            { letter: "D", text: "Dolphins can identify objects using sound." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "How does Text 2 mainly differ from Text 1?",
          choices: [
            { letter: "A", text: "Text 2 shows echolocation in action instead of explaining its parts." },
            { letter: "B", text: "Text 2 argues that dolphins should not be kept in pools." },
            { letter: "C", text: "Text 2 describes how the melon focuses sound." },
            { letter: "D", text: "Text 2 questions whether echolocation is real." }
          ],
          correct: "A"
        },
        {
          id: "explain",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 best explains how Sunny is able to choose the metal ring in Text 2?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "B"
        },
        {
          id: "jaw",
          sol: "9.RI.1.B",
          stem: "According to Text 1, a dolphin receives returning echoes through its —",
          choices: [
            { letter: "A", text: "forehead" },
            { letter: "B", text: "nasal passages" },
            { letter: "C", text: "lower jaw" },
            { letter: "D", text: "eyes" }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "Text 1 is organized mainly as —",
          choices: [
            { letter: "A", text: "a comparison of dolphins and bats" },
            { letter: "B", text: "a problem followed by a solution" },
            { letter: "C", text: "a series of steps in a process" },
            { letter: "D", text: "a story told from a dolphin's view" }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "Mendes covers Sunny's eyes mainly to —",
          choices: [
            { letter: "A", text: "protect Sunny from the metal ring" },
            { letter: "B", text: "prove that Sunny relies on sound, not sight" },
            { letter: "C", text: "make the trick harder for visitors to follow" },
            { letter: "D", text: "keep Sunny calm in front of the crowd" }
          ],
          correct: "B"
        }
      ]
    },

    /* 18 — Literary, level 2 */
    {
      id: "g9-rl-c41-swift-chimney",
      family: "G9",
      title: "The Chimney at Dusk",
      kind: "Literary · 9.RL",
      blurb: "A teenager who once watched migrating swifts with her grandmother learns their roost is in danger.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every September evening, my grandmother and I carried two lawn chairs to the parking lot of the old Linwood Elementary School and waited for the swifts. " +
        N(2) + "I was twelve the first time, and I complained the whole way, because I could not imagine anything worth watching at a closed school. " +
        N(3) + "Then, just after sunset, the birds came: hundreds of small, dark shapes flickering like sparks above a campfire. " +
        N(4) + "They circled the brick chimney in a wide, chattering funnel, tighter and tighter, until all at once they began pouring down into it like water draining from a sink. " +
        N(5) + "\"They're resting on their way to South America,\" Grandma Odette said. \"This chimney is their motel.\" " +
        N(6) + "This year I am sixteen, and Grandma's knees no longer let her sit in a lawn chair, so I went alone with my phone to record the funnel for her. " +
        N(7) + "Taped to the school door was a notice: the building would be torn down in the spring. " +
        N(8) + "I stood there long after the last swift had dropped inside, reading the notice three times as if the words might change. " +
        N(9) + "At home, Grandma watched my video twice without speaking. " +
        N(10) + "Then she asked me to find out whom in the town office we should write to. " +
        N(11) + "\"Not me,\" she said, when I handed her a pen. \"You. You're the one who'll be standing in that parking lot next September.\" " +
        N(12) + "I wrote until midnight." +
        "</p>",
      claims: [
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because the story is told by the narrator looking back from age sixteen, the reader is able to —",
          choices: [
            { letter: "A", text: "see how the narrator's feelings about the swifts have grown" },
            { letter: "B", text: "learn exactly why the town wants to tear down the school" },
            { letter: "C", text: "understand what Grandma Odette thinks before she speaks" },
            { letter: "D", text: "follow the swifts on their journey to South America" }
          ],
          correct: "A"
        },
        {
          id: "sparks",
          sol: "9.RL.2.B",
          stem: "The image of birds \"flickering like sparks above a campfire\" in sentence 3 mainly creates a feeling of —",
          choices: [
            { letter: "A", text: "sudden danger and alarm" },
            { letter: "B", text: "lively beauty" },
            { letter: "C", text: "gloomy, empty loneliness" },
            { letter: "D", text: "tired, restless boredom" }
          ],
          correct: "B"
        },
        {
          id: "motel",
          sol: "9.RL.2.A",
          stem: "When Grandma Odette calls the chimney the swifts' \"motel\" in sentence 5, she means that it is —",
          choices: [
            { letter: "A", text: "a place the town rents out to visitors" },
            { letter: "B", text: "too crowded for all the birds to fit" },
            { letter: "C", text: "a stop where travelers rest for a night" },
            { letter: "D", text: "the birds' permanent year-round home" }
          ],
          correct: "C"
        },
        {
          id: "notice",
          sol: "9.RL.1.B",
          stem: "What does sentence 8 suggest about the narrator?",
          choices: [
            { letter: "A", text: "She has trouble reading in the dark." },
            { letter: "B", text: "She is relieved the school will be gone." },
            { letter: "C", text: "She is waiting for her grandmother to arrive." },
            { letter: "D", text: "She is stunned and wishes the news were not true." }
          ],
          correct: "D"
        },
        {
          id: "dialogue",
          sol: "9.RL.1.D",
          stem: "Grandma Odette's words in sentence 11 mainly reveal that she —",
          choices: [
            { letter: "A", text: "is too tired to care about the chimney" },
            { letter: "B", text: "wants the narrator to take responsibility for the cause" },
            { letter: "C", text: "thinks the letter will not make any difference" },
            { letter: "D", text: "is angry that the narrator went without her" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The short final sentence, \"I wrote until midnight,\" gives the ending a tone that is —",
          choices: [
            { letter: "A", text: "uncertain and fearful" },
            { letter: "B", text: "dreamy and distant" },
            { letter: "C", text: "bitter and resentful" },
            { letter: "D", text: "quietly determined" }
          ],
          correct: "D"
        }
      ]
    },

    /* 19 — Informational, level 2 */
    {
      id: "g9-ri-c41-manatee-springs",
      family: "G9",
      title: "Warm Water Refuges",
      kind: "Informational · 9.RI",
      blurb: "Why huge manatees can't handle cold water, and how people are helping them find warmth.",
      level: 2,
      passage:
        "<p>" + N(1) + "The West Indian manatee is a gentle, slow-moving mammal that can weigh more than a small car, yet it is surprisingly sensitive to cold. " +
        N(2) + "Despite its size, a manatee has little body fat and a slow metabolism, so it cannot produce much heat. " +
        N(3) + "When water temperatures drop below about 68 degrees Fahrenheit, manatees can suffer from a condition called cold stress, which weakens their immune systems and can be fatal. " +
        N(4) + "To survive winter, manatees gather in warm-water refuges. " +
        N(5) + "Some refuges are natural springs, where groundwater flows out of the earth at a steady 72 degrees all year. " +
        N(6) + "Others are man-made: the warm water released by power plants after it has cooled their equipment. " +
        N(7) + "On a cold morning, hundreds of manatees may crowd into a single spring or canal, their broad gray backs breaking the surface like a field of stones. " +
        N(8) + "The power-plant refuges have saved many animals, but they also create a problem. " +
        N(9) + "If an aging plant shuts down, the manatees that depend on its outflow may have nowhere else to go. " +
        N(10) + "For this reason, wildlife managers are working to restore natural springs that were once blocked by dams or choked by weeds. " +
        N(11) + "Restored springs could provide safe havens that do not depend on any machine. " +
        N(12) + "Meanwhile, boaters in these areas are asked to slow down in winter, when the crowded, sluggish animals are most at risk from propellers." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "What is the central idea of \"Warm Water Refuges\"?",
          choices: [
            { letter: "A", text: "Manatees depend on warm-water refuges, and people are working to keep them available." },
            { letter: "B", text: "Power plants are the best way to protect manatees and other wildlife in cold winters." },
            { letter: "C", text: "Boaters cause most of the harm that manatees face in springs and canals each year." },
            { letter: "D", text: "Manatees are much larger and heavier than most people who see them realize." }
          ],
          correct: "A"
        },
        {
          id: "cold",
          sol: "9.RI.1.B",
          stem: "According to the passage, manatees are sensitive to cold mainly because they —",
          choices: [
            { letter: "A", text: "spend too much time near the surface" },
            { letter: "B", text: "have weak immune systems from birth" },
            { letter: "C", text: "move too slowly to reach warm water" },
            { letter: "D", text: "have little body fat and make little heat" }
          ],
          correct: "D"
        },
        {
          id: "struct",
          sol: "9.RI.2.A",
          stem: "Sentences 8 through 11 are organized mainly by —",
          choices: [
            { letter: "A", text: "comparing natural springs with ocean water" },
            { letter: "B", text: "describing a problem and a planned solution" },
            { letter: "C", text: "listing events in the order they happened" },
            { letter: "D", text: "defining several scientific terms" }
          ],
          correct: "B"
        },
        {
          id: "stones",
          sol: "9.RI.2.B",
          stem: "The comparison to \"a field of stones\" in sentence 7 helps the reader picture —",
          choices: [
            { letter: "A", text: "the rocky bottom of a natural spring" },
            { letter: "B", text: "the walls of a power-plant canal" },
            { letter: "C", text: "many still manatees packed close together" },
            { letter: "D", text: "the heavy weight of a single manatee" }
          ],
          correct: "C"
        },
        {
          id: "risk",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the claim that depending on power-plant refuges is risky?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "possible",
          sol: "9.RI.1.C",
          stem: "Which sentence describes a possible future benefit rather than a present fact?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 3" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
