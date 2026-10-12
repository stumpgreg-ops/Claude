/* SOL Labyrinth — The Odyssey: the Lotus-Eaters (English 9 Unit 2, family ODY)
 * Eight original retellings of Odyssey Book 9 (the storm after the Cicones raid, the land of
 * the Lotus-Eaters, the approach to the Cyclopes' land), in story order, each at most 200 words.
 * Original text only; the plot is public domain. Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── TINY (level 1) ───────────── */
    {
      id: "ody-lotus-nine-days",
      family: "ODY",
      episode: "lotus",
      title: "Nine Days of Wind",
      kind: "The Odyssey · 9.RL",
      blurb: "A storm drives Odysseus's ships far from the road home.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "After the raid on the Cicones, Odysseus and his twelve ships set out for home. " +
        N(2) + "Many of his men had died in that raid because they ignored his order to leave quickly. " +
        N(3) + "Now Zeus sent a north wind that rose into a howling storm. " +
        N(4) + "Near Cape Malea, the wind and waves pushed the ships away from Ithaca. " +
        N(5) + "For nine days the relentless storm drove them across the sea. " +
        N(6) + "On the tenth day they reached an unknown shore: the land of the Lotus-Eaters, who eat the fruit of a flower." +
        "</p>",
      claims: [
        {
          id: "setting",
          sol: "9.RL.3.B",
          stem: "How does the storm in sentences 3–5 shape what happens to Odysseus and his crew?",
          choices: [
            { letter: "A", text: "It forces them off course to a land they do not know." },
            { letter: "B", text: "It sinks most of the ships before they reach Cape Malea." },
            { letter: "C", text: "It traps them in the city of the Cicones for nine more days." },
            { letter: "D", text: "It carries them straight back to Ithaca far ahead of time." }
          ],
          correct: "A"
        },
        {
          id: "crew",
          sol: "9.RL.1.C",
          stem: "Based on sentence 2, which word best describes Odysseus's men during the raid on the Cicones?",
          choices: [
            { letter: "A", text: "cowardly" },
            { letter: "B", text: "disobedient" },
            { letter: "C", text: "peace-loving" },
            { letter: "D", text: "homesick" }
          ],
          correct: "B"
        },
        {
          id: "relentless",
          sol: "9.RV.1.C",
          stem: "In sentence 5, the word *relentless* most nearly means —",
          choices: [
            { letter: "A", text: "gentle and brief" },
            { letter: "B", text: "sudden and quiet" },
            { letter: "C", text: "never easing" },
            { letter: "D", text: "warm and pleasant" }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Based on the passage, readers can infer that the land of the Lotus-Eaters is —",
          choices: [
            { letter: "A", text: "the island where Odysseus was born" },
            { letter: "B", text: "the city the crew had just raided" },
            { letter: "C", text: "a harbor the crew had visited often" },
            { letter: "D", text: "a place Odysseus never meant to go" }
          ],
          correct: "D"
        },
        {
          id: "zeus",
          sol: "9.RV.1.F",
          stem: "Sentence 3 says that Zeus, king of the gods, sent the north wind. This mythological reference suggests that —",
          choices: [
            { letter: "A", text: "the gods have power over Odysseus's journey" },
            { letter: "B", text: "Zeus wants the men to rest in the Cicones' city" },
            { letter: "C", text: "the crew prays to Zeus every day for fair weather" },
            { letter: "D", text: "Odysseus is a son of Zeus and can command the wind" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "ody-lotus-gift",
      family: "ODY",
      episode: "lotus",
      title: "The Gift of the Lotus",
      kind: "The Odyssey · 9.RL",
      blurb: "Three scouts meet a friendly people and taste a honey-sweet fruit.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "Odysseus's men drew fresh water and ate a meal beside their ships. " +
        N(2) + "Then Odysseus chose two men to explore the land, and he sent a third man with them as a herald to speak for the group. " +
        N(3) + "The Lotus-Eaters meant the strangers no harm. " +
        N(4) + "They simply offered them a taste of the lotus. " +
        N(5) + "The fruit was as sweet as honey. " +
        N(6) + "But whoever ate it lost all wish to report back or to sail home. " +
        N(7) + "Those men wanted only to stay among the Lotus-Eaters, eating lotus and forgetting the journey home." +
        "</p>",
      claims: [
        {
          id: "danger",
          sol: "9.RL.1.A",
          stem: "What is the main danger the scouts face in the land of the Lotus-Eaters?",
          choices: [
            { letter: "A", text: "The Lotus-Eaters attack them with spears." },
            { letter: "B", text: "They run out of fresh water on the shore." },
            { letter: "C", text: "A pleasant food makes them forget their goal." },
            { letter: "D", text: "Their ships are damaged while they eat a meal." }
          ],
          correct: "C"
        },
        {
          id: "herald",
          sol: "9.RV.1.C",
          stem: "In sentence 2, a *herald* is someone who —",
          choices: [
            { letter: "A", text: "guards the ships while others explore" },
            { letter: "B", text: "carries messages and speaks for a group" },
            { letter: "C", text: "cooks meals for the crew on long trips" },
            { letter: "D", text: "steers the ship safely through stormy water" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          stem: "How do the scouts change after they eat the lotus?",
          choices: [
            { letter: "A", text: "They grow afraid of the Lotus-Eaters and hide." },
            { letter: "B", text: "They grow eager to reach home before the others." },
            { letter: "C", text: "They grow angry at Odysseus for sending them." },
            { letter: "D", text: "They forget their task and want only to stay." }
          ],
          correct: "D"
        },
        {
          id: "honey",
          sol: "9.RL.2.B",
          stem: "The description of the lotus as \"sweet as honey\" in sentence 5 mainly helps the reader understand —",
          choices: [
            { letter: "A", text: "why the fruit is so hard for the men to resist" },
            { letter: "B", text: "how the Lotus-Eaters grow their crops each year" },
            { letter: "C", text: "why the crew had run out of food on the ships" },
            { letter: "D", text: "what the men usually ate at home on Ithaca" }
          ],
          correct: "A"
        },
        {
          id: "noharm",
          sol: "9.RL.3.A",
          stem: "The author most likely includes sentence 3 to show that —",
          choices: [
            { letter: "A", text: "the scouts were in danger of being captured" },
            { letter: "B", text: "the threat came from the fruit, not from enemies" },
            { letter: "C", text: "the Lotus-Eaters hoped to trade goods with Odysseus" },
            { letter: "D", text: "the strangers frightened the people of the land" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── SHORT ───────────── */
    {
      id: "ody-lotus-vocab-forgetting",
      family: "ODY",
      episode: "lotus",
      title: "Sweet Forgetting",
      kind: "Vocabulary · 9.RV",
      blurb: "Six words for a kind people, a tempting fruit and a leader who makes up his mind.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "The Lotus-Eaters were a <strong>benevolent</strong> people who greeted strangers with open hands rather than spears. " +
        N(2) + "They offered Odysseus's three scouts the lotus, a <strong>beguiling</strong> fruit whose honey-sweet taste hid its power. " +
        N(3) + "After one bite the men grew <strong>languid</strong>; they stretched out in the warm grass and gave no thought to the ships waiting on the shore. " +
        N(4) + "Home, family and the long road to Ithaca sank into <strong>oblivion</strong>, as if the men had drunk from Lethe, the mythical river of forgetting. " +
        N(5) + "Their captain waited by the ships, but the scouts did not return. " +
        N(6) + "Yet when Odysseus guessed what had happened, he was <strong>resolute</strong>. " +
        N(7) + "He would not lose a single man to that sweet meadow; if the scouts would not come willingly, he would <strong>compel</strong> them, by force if he had to." +
        "</p>",
      claims: [
        {
          id: "benevolent",
          sol: "9.RV.1.B",
          stem: "The prefix *bene-* means \"good\" or \"well.\" Based on this prefix and sentence 1, a *benevolent* people are —",
          choices: [
            { letter: "A", text: "suspicious of anyone who arrives by sea" },
            { letter: "B", text: "kindly and wishing good things for others" },
            { letter: "C", text: "wealthy and proud of their large harvests" },
            { letter: "D", text: "skilled at fighting with spears and shields" }
          ],
          correct: "B"
        },
        {
          id: "beguiling",
          sol: "9.RV.1.C",
          stem: "In sentence 2, the word *beguiling* most nearly means —",
          choices: [
            { letter: "A", text: "bitter and very unpleasant to taste" },
            { letter: "B", text: "rare and very difficult to find" },
            { letter: "C", text: "charming in a way that misleads" },
            { letter: "D", text: "plainly poisonous to anyone" }
          ],
          correct: "C"
        },
        {
          id: "languid",
          sol: "9.RV.1.E",
          stem: "Which word, if it replaced *languid* in sentence 3, would give the men's condition the most positive connotation?",
          choices: [
            { letter: "A", text: "relaxed" },
            { letter: "B", text: "sluggish" },
            { letter: "C", text: "listless" },
            { letter: "D", text: "lazy" }
          ],
          correct: "A"
        },
        {
          id: "oblivion",
          sol: "9.RV.1.C",
          stem: "In sentence 4, the phrase \"sank into *oblivion*\" shows that home and family were —",
          choices: [
            { letter: "A", text: "remembered with deep sadness" },
            { letter: "B", text: "described in long, proud stories" },
            { letter: "C", text: "hidden somewhere for safekeeping" },
            { letter: "D", text: "completely forgotten by the men" }
          ],
          correct: "D"
        },
        {
          id: "lethe",
          sol: "9.RV.1.F",
          stem: "In sentence 4, the reference to Lethe, the river of forgetting in Greek myth, mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the Lotus-Eaters lived beside a famous river" },
            { letter: "B", text: "the lotus wiped out memory like a magic water" },
            { letter: "C", text: "the scouts were thirsty after their long walk" },
            { letter: "D", text: "Odysseus planned to sail next to the underworld" }
          ],
          correct: "B"
        },
        {
          id: "resolute",
          sol: "9.RL.1.C",
          stem: "Sentences 6 and 7 show that Odysseus responds to his scouts' absence by —",
          choices: [
            { letter: "A", text: "resolving to bring them back even if they resist" },
            { letter: "B", text: "planning to taste the fruit to learn why they stay" },
            { letter: "C", text: "deciding to leave them so the others can sail on" },
            { letter: "D", text: "asking the Lotus-Eaters to send the men back" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "ody-lotus-benches",
      family: "ODY",
      episode: "lotus",
      title: "Under the Rowing Benches",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus tells how he brought his weeping scouts back by force.",
      level: 1,
      passage:
        "<p>" +
        N(1) + "My scouts did not come back, so I went to find them. " +
        N(2) + "They lay in the soft grass among the Lotus-Eaters, their hands sticky with the honey-sweet fruit, and they had no wish to return. " +
        N(3) + "\"Leave us here,\" they said. \"Why should we row the wine-dark sea again?\" " +
        N(4) + "I did not stop to argue. " +
        N(5) + "I dragged them to the ships by force, though they wept like children, and I bound them beneath the rowing benches. " +
        N(6) + "Then I shouted to the rest of my loyal crew, \"Aboard, quickly! Let no one else taste the lotus and forget his home!\" " +
        N(7) + "The men leapt to their benches, and together we struck the grey sea with our oars." +
        "</p>",
      claims: [
        {
          id: "speech",
          sol: "9.RL.1.D",
          stem: "What does the scouts' speech in sentence 3 reveal about them?",
          choices: [
            { letter: "A", text: "They fear the Lotus-Eaters will punish them for leaving." },
            { letter: "B", text: "The lotus has made the voyage home seem pointless to them." },
            { letter: "C", text: "They believe Odysseus has chosen the wrong route to Ithaca." },
            { letter: "D", text: "They want Odysseus to bring the whole crew to the meadow." }
          ],
          correct: "B"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "The simile in sentence 5, \"wept like children,\" suggests that the scouts —",
          choices: [
            { letter: "A", text: "were younger than the rest of the crew" },
            { letter: "B", text: "had been badly hurt when they were dragged" },
            { letter: "C", text: "had lost their strength and good judgment" },
            { letter: "D", text: "were overjoyed to see their captain again" }
          ],
          correct: "C"
        },
        {
          id: "trait",
          sol: "9.RL.1.C",
          stem: "Which word best describes Odysseus in sentences 4–6?",
          choices: [
            { letter: "A", text: "decisive" },
            { letter: "B", text: "hesitant" },
            { letter: "C", text: "forgetful" },
            { letter: "D", text: "boastful" }
          ],
          correct: "A"
        },
        {
          id: "bound",
          sol: "9.RV.1.C",
          stem: "In sentence 5, the word *bound* most nearly means —",
          choices: [
            { letter: "A", text: "jumped" },
            { letter: "B", text: "promised" },
            { letter: "C", text: "headed toward" },
            { letter: "D", text: "tied" }
          ],
          correct: "D"
        },
        {
          id: "quickly",
          sol: "9.RL.1.B",
          stem: "Why does Odysseus order the rest of the crew aboard so quickly in sentence 6?",
          choices: [
            { letter: "A", text: "He wants to escape before the Lotus-Eaters attack the ships." },
            { letter: "B", text: "He fears that more men will taste the fruit and forget home." },
            { letter: "C", text: "He hopes to reach Ithaca before the stormy season begins." },
            { letter: "D", text: "He plans to come back later and trade goods with the Lotus-Eaters." }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme about leadership does this passage best develop?",
          choices: [
            { letter: "A", text: "A leader may have to overrule people to protect them." },
            { letter: "B", text: "Travelers should always accept gifts from friendly strangers." },
            { letter: "C", text: "Rest matters more than finishing a long, difficult journey." },
            { letter: "D", text: "A crew obeys orders only when it is afraid of its captain." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── MEDIUM (level 2) ───────────── */
    {
      id: "ody-lotus-poem-shore",
      family: "ODY",
      episode: "lotus",
      title: "The Honey-Sweet Shore",
      kind: "Epic poetry · 9.RL",
      blurb: "Odysseus tells, in verse, of the night at sea after the lotus and the morning his men woke.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "So we rowed on, and grief hounded us across the fish-filled sea;<br>" +
        L(2) + "behind us sank the quiet shore where the Lotus-Eaters dwell.<br>" +
        L(3) + "No storm had struck us there, no spear, no ambush in the grass;<br>" +
        L(4) + "a smiling people and a honey-sweet fruit had nearly cost me three.<br>" +
        L(5) + "All night the bound men murmured underneath the rowing benches<br>" +
        L(6) + "and begged the dark to take them back to the meadow and the lotus.<br>" +
        L(7) + "But when rose-fingered Dawn came up, the spell began to loosen.<br>" +
        L(8) + "As a tired swimmer far from shore, who stopped fighting the warm current<br>" +
        L(9) + "and let it carry him where it would, forgetting the beach he swam for,<br>" +
        L(10) + "wakes at last and sees the land far off, and strikes out for it, gasping,<br>" +
        L(11) + "so my men woke from the lotus and remembered home again.<br>" +
        L(12) + "I cut their ropes with my own knife and gave each man his oar;<br>" +
        L(13) + "they bent their backs beside their friends and did not look behind.<br>" +
        L(14) + "We sailed on, sick at heart, yet glad to count each face,<br>" +
        L(15) + "and turned our prows toward Ithaca and the long road home." +
        "</p>",
      claims: [
        {
          id: "epicsimile",
          sol: "9.RL.2.A",
          stem: "An epic simile is a long, detailed comparison using like or as. The epic simile in lines 8–11 compares the men to a tired swimmer to show that they —",
          choices: [
            { letter: "A", text: "were far too weak from the storm to row any farther" },
            { letter: "B", text: "had drifted from their goal and now turn back to it" },
            { letter: "C", text: "tried to swim back to the Lotus shore in the night" },
            { letter: "D", text: "had nearly drowned when they fell from the ships" }
          ],
          correct: "B"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          stem: "How does the description of the shore in lines 2–4 explain why its danger was so easy to miss?",
          choices: [
            { letter: "A", text: "The land was so crowded that the scouts got lost." },
            { letter: "B", text: "A storm struck while the men were still ashore." },
            { letter: "C", text: "Its peace gave the men no reason to stay on guard." },
            { letter: "D", text: "Its people hid spears in the grass to trap visitors." }
          ],
          correct: "C"
        },
        {
          id: "response",
          sol: "9.RL.1.C",
          stem: "Lines 12–13 show that, once the spell lifts, Odysseus responds by —",
          choices: [
            { letter: "A", text: "trusting the scouts and returning them to their places" },
            { letter: "B", text: "punishing the scouts for wasting the whole crew's time" },
            { letter: "C", text: "keeping the scouts tied up until the ships reach Ithaca" },
            { letter: "D", text: "sending the scouts back to the meadow to fetch more fruit" }
          ],
          correct: "A"
        },
        {
          id: "hounded",
          sol: "9.RV.1.C",
          stem: "In line 1, the word *hounded* most nearly means —",
          choices: [
            { letter: "A", text: "guided gently onward" },
            { letter: "B", text: "chased without rest" },
            { letter: "C", text: "kept sheltered" },
            { letter: "D", text: "slowed down" }
          ],
          correct: "B"
        },
        {
          id: "narrator",
          sol: "9.RL.3.A",
          stem: "Because Odysseus narrates the poem himself (\"I cut,\" \"my men\"), the reader —",
          choices: [
            { letter: "A", text: "learns what the Lotus-Eaters secretly planned for the crew" },
            { letter: "B", text: "hears each scout's private thoughts as he eats the lotus" },
            { letter: "C", text: "finds out how the gods on Mount Olympus judged the crew" },
            { letter: "D", text: "sees events through the eyes of the leader of the men" }
          ],
          correct: "D"
        },
        {
          id: "nostos",
          sol: "9.RL.1.A",
          stem: "Nostos is the Greek word for a hero's homecoming. Which statement best expresses how the poem develops the idea of nostos?",
          choices: [
            { letter: "A", text: "A hero earns his homecoming by defeating every enemy." },
            { letter: "B", text: "Homecoming matters less than finding a peaceful place to live." },
            { letter: "C", text: "The wish to go home can be lost to comfort, not just danger." },
            { letter: "D", text: "A leader should let each sailor decide whether to go home." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "ody-lotus-paired-nostos",
      family: "ODY",
      episode: "lotus",
      title: "The Road Home",
      kind: "Paired texts · 9.DSR",
      blurb: "A tense moment at sea just after the Lotus shore, paired with an article on nostos, the Greek idea of homecoming.",
      level: 2,
      passage:
        "<p><strong>Text 1 — At Sea</strong></p>" +
        "<p>" +
        N(1) + "The ships were well out from the Lotus shore, and the crew rowed in silence. " +
        N(2) + "Beneath the benches lay the three scouts, bound fast. " +
        N(3) + "They were not wounded, and no one on that shore had threatened them. " +
        N(4) + "Yet they wept and pulled against the ropes, begging to go back. " +
        N(5) + "One scout held out a crushed lotus fruit to a young sailor, whose hand slowly opened to take it. " +
        N(6) + "\"Row!\" Odysseus shouted from the stern, \"for whoever tastes the lotus forgets his home!\" " +
        N(7) + "The sailor stopped, shook himself as though waking from a dream, and threw the fruit into the sea. " +
        N(8) + "Then he bent to his oar." +
        "</p>" +
        "<p><strong>Text 2 — Nostos</strong></p>" +
        "<p>" +
        N(9) + "Ancient Greek storytellers had a word for a hero's return home: nostos. " +
        N(10) + "The Odyssey is built around nostos, and many episodes test whether Odysseus and his men will keep home in mind. " +
        N(11) + "Monsters such as the Cyclops threaten the men's lives. " +
        N(12) + "The Lotus-Eaters threaten something harder to see: the men's desire to return. " +
        N(13) + "Nothing in their land is violent; the danger is that comfort can make people stop striving. " +
        N(14) + "Even today, a person who drifts lazily through life, forgetting duties, is called a \"lotus-eater.\"" +
        "</p>",
      claims: [
        {
          id: "compare",
          sol: "9.DSR.E",
          stem: "Which statement best describes how the two texts present the Lotus-Eaters episode differently?",
          choices: [
            { letter: "A", text: "Text 1 dramatizes one tense moment, while Text 2 explains the episode's meaning." },
            { letter: "B", text: "Text 1 defines the word nostos, while Text 2 describes what the scouts did in the meadow." },
            { letter: "C", text: "Text 1 blames the Lotus-Eaters for the danger, while Text 2 blames Odysseus for it." },
            { letter: "D", text: "Text 1 focuses on the Cyclops, while Text 2 focuses on the meal the scouts were served." }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          stem: "Select TWO details, one from each text, that best support the idea that the danger of the lotus was not physical violence.",
          choices: [
            { letter: "A", text: "Sentence 1: The ships were well out from the Lotus shore, and the crew rowed in silence." },
            { letter: "B", text: "Sentence 3: They were not wounded, and no one on that shore had threatened them." },
            { letter: "C", text: "Sentence 11: Monsters such as the Cyclops threaten the men's lives." },
            { letter: "D", text: "Sentence 13: Nothing in their land is violent; the danger is that comfort can make people stop striving." }
          ],
          correct: ["B", "D"]
        },
        {
          id: "sailor",
          sol: "9.RL.1.C",
          stem: "How does the young sailor respond to temptation in sentences 5–7 of Text 1?",
          choices: [
            { letter: "A", text: "He refuses to look at the fruit and warns the others." },
            { letter: "B", text: "He secretly eats the fruit and hides it from Odysseus." },
            { letter: "C", text: "He is drawn toward it but returns to duty when ordered." },
            { letter: "D", text: "He argues that the scouts should be allowed to stay behind." }
          ],
          correct: "C"
        },
        {
          id: "dream",
          sol: "9.RL.2.A",
          stem: "In sentence 7, the comparison \"as though waking from a dream\" suggests that even the sight of the lotus —",
          choices: [
            { letter: "A", text: "had made the sailor fall asleep at his oar" },
            { letter: "B", text: "was frightening enough to give him nightmares later" },
            { letter: "C", text: "reminded him of happy dreams about Ithaca" },
            { letter: "D", text: "had pulled the sailor's mind away from his duty" }
          ],
          correct: "D"
        },
        {
          id: "striving",
          sol: "9.RV.1.C",
          stem: "In sentence 13, the word *striving* most nearly means —",
          choices: [
            { letter: "A", text: "resting quietly after a long day" },
            { letter: "B", text: "arguing with one another" },
            { letter: "C", text: "working hard toward a goal" },
            { letter: "D", text: "traveling by sea at night" }
          ],
          correct: "C"
        },
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of Text 2?",
          choices: [
            { letter: "A", text: "The Cyclops is the most dangerous enemy Odysseus faces." },
            { letter: "B", text: "The lotus episode shows that comfort can threaten nostos." },
            { letter: "C", text: "The word nostos was invented by modern English speakers." },
            { letter: "D", text: "The Lotus-Eaters attack anyone who lands on their shore." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── MEDIUM, continued ───────────── */
    {
      id: "ody-lotus-choice",
      family: "ODY",
      episode: "lotus",
      title: "The Captain's Choice",
      kind: "The Odyssey · 9.RL",
      blurb: "At sea, a freed scout asks Odysseus why he dragged his happy men away.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "By noon the Lotus shore had sunk from sight, and the freed scouts rowed beside their friends. " +
        N(2) + "Still, the herald came to the stern, where Odysseus, master of schemes, held the steering oar. " +
        N(3) + "\"Why did you not leave us there?\" he asked. \"We were happy.\" " +
        N(4) + "\"The fruit was offered so gently that refusing it seemed rude, and once we ate, a stillness came over us, as when the sea lies flat at noon and no breeze stirs the sails.\"" +
        "</p>" +
        "<p>" +
        N(5) + "Odysseus kept his eyes on the horizon. " +
        N(6) + "\"That was a challenge no sword could answer,\" he said. " +
        N(7) + "\"You were not my enemies; you were my companions, and you smiled at me. " +
        N(8) + "I could have left you to your contentment, or I could have lingered to argue and tasted the fruit myself. " +
        N(9) + "Either way, none of us would have seen Ithaca again.\"" +
        "</p>" +
        "<p>" +
        N(10) + "The herald was silent for a long time. " +
        N(11) + "Then he looked at the rowers, at the grey sea, at the faint line of a new coast ahead, and he said, \"Then I am glad you did not ask what we wanted.\" " +
        N(12) + "He went back to his bench and pulled his oar with the others." +
        "</p>",
      claims: [
        {
          id: "speech",
          sol: "9.RL.1.D",
          stem: "In sentence 3, the herald's words \"We were happy\" suggest that he —",
          choices: [
            { letter: "A", text: "is secretly planning to row back to the Lotus-Eaters" },
            { letter: "B", text: "blames Odysseus for leaving the scouts alone so long" },
            { letter: "C", text: "still half believes that staying was the better choice" },
            { letter: "D", text: "is reporting what he learned about the land, as ordered" }
          ],
          correct: "C"
        },
        {
          id: "herald",
          sol: "9.RL.1.B",
          stem: "Sentence 4 suggests that the herald ate the lotus partly because —",
          choices: [
            { letter: "A", text: "Odysseus had ordered him to taste the local food" },
            { letter: "B", text: "he was starving after the long walk from the ships" },
            { letter: "C", text: "refusing a gift offered so kindly seemed impolite" },
            { letter: "D", text: "the Lotus-Eaters threatened him when he hesitated" }
          ],
          correct: "C"
        },
        {
          id: "stillness",
          sol: "9.RL.2.A",
          stem: "In sentence 4, the stillness brought by the lotus is compared to a sea at noon with no breeze. This comparison suggests that the lotus —",
          choices: [
            { letter: "A", text: "makes the men seasick and unable to stand" },
            { letter: "B", text: "stops the men's purpose the way calm air stops a ship" },
            { letter: "C", text: "gives the men enough strength to row for days without rest" },
            { letter: "D", text: "reminds the men of the storm they had survived" }
          ],
          correct: "B"
        },
        {
          id: "choice",
          sol: "9.RL.1.C",
          stem: "Sentences 6–9 show that Odysseus met this challenge by —",
          choices: [
            { letter: "A", text: "lingering to argue until the scouts agreed to leave" },
            { letter: "B", text: "tasting the fruit so that he could understand his men" },
            { letter: "C", text: "leaving the scouts behind because they seemed happy" },
            { letter: "D", text: "putting his men's homecoming above their wishes" }
          ],
          correct: "D"
        },
        {
          id: "lingered",
          sol: "9.RV.1.C",
          stem: "In sentence 8, the word *lingered* most nearly means —",
          choices: [
            { letter: "A", text: "stayed on too long" },
            { letter: "B", text: "spoken angrily" },
            { letter: "C", text: "searched very closely" },
            { letter: "D", text: "given up quickly" }
          ],
          correct: "A"
        },
        {
          id: "guesses",
          sol: "9.RL.3.A",
          stem: "The author most likely includes sentence 10, \"The herald was silent for a long time,\" to show that the herald —",
          choices: [
            { letter: "A", text: "is too tired from rowing to answer his captain" },
            { letter: "B", text: "is weighing his captain's words seriously" },
            { letter: "C", text: "has fallen back under the spell of the lotus" },
            { letter: "D", text: "is angry and refuses to speak to Odysseus again" }
          ],
          correct: "B"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          stem: "In sentence 11, the herald looks at the rowers, the grey sea and a new coast ahead. How does this setting help him reach his conclusion?",
          choices: [
            { letter: "A", text: "It reminds him that he belongs to a voyage still going on." },
            { letter: "B", text: "It makes him long to swim back to the meadow and the fruit." },
            { letter: "C", text: "It frightens him into obeying a captain he does not trust." },
            { letter: "D", text: "It shows him that the ships have already reached Ithaca." }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme about life's challenges does the passage best develop?",
          choices: [
            { letter: "A", text: "Strangers who offer gifts usually have hidden motives." },
            { letter: "B", text: "Explorers should never leave their ships to visit new lands." },
            { letter: "C", text: "A leader's main duty is to keep his crew content and comfortable at all times." },
            { letter: "D", text: "Pleasant comforts can threaten a goal as much as an enemy can." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── WHOLE-EPISODE SUMMARY (last in story order) ───────────── */
    {
      id: "ody-lotus-epic-telling",
      family: "ODY",
      episode: "lotus",
      title: "From Ismarus to the Lotus Shore",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus sums up for the Phaeacians the Cicones, the storm and the lotus, and hints at the shore beyond.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "Hear me, Alcinous, for you have asked the story of my sorrows. " +
        N(2) + "At Ismarus we sacked the city of the Cicones. " +
        N(3) + "I urged my men to leave at once, but the fools stayed on the beach, feasting and drinking wine. " +
        N(4) + "At dawn the Cicones' neighbors came, as thick as leaves in spring, and six men from every ship died." +
        "</p>" +
        "<p>" +
        N(5) + "Then Zeus, who gathers the clouds, sent the north wind howling against us. " +
        N(6) + "Our ships were driven headlong, our sails ripped to rags. " +
        N(7) + "Off Cape Malea the current caught us, and for nine days deadly winds carried us to the land of the Lotus-Eaters. " +
        N(8) + "Three of my men tasted their honey-sweet fruit and forgot their homecoming. " +
        N(9) + "I dragged them weeping to the ships and bound them beneath the benches. " +
        N(10) + "When I ordered the rest aboard, they obeyed at once and struck the grey sea with their oars." +
        "</p>" +
        "<p>" +
        N(11) + "We sailed on, sick at heart, like a man who has pulled his children from a burning house and counts their faces in the dark. " +
        N(12) + "Next we came to the land of the Cyclopes, a proud and lawless people. " +
        N(13) + "What happened there I have never forgotten, though I have often wished I could." +
        "</p>",
      claims: [
        {
          id: "flashback",
          sol: "9.RL.3.A",
          stem: "Sentence 1 shows that this part of the Odyssey is told as —",
          choices: [
            { letter: "A", text: "a flashback, with Odysseus telling listeners about past events" },
            { letter: "B", text: "a prophecy, with a god predicting what Odysseus will face on his voyage" },
            { letter: "C", text: "a letter that Odysseus sends home to his family on Ithaca" },
            { letter: "D", text: "a debate in which the Phaeacians judge Odysseus's choices" }
          ],
          correct: "A"
        },
        {
          id: "crew",
          sol: "9.RL.1.C",
          stem: "How does the crew's response to Odysseus's order in sentence 3 differ from their response in sentence 10?",
          choices: [
            { letter: "A", text: "At Ismarus they obeyed at once; on the Lotus shore they refuse to leave." },
            { letter: "B", text: "At Ismarus they ignored his order to leave; on the Lotus shore they obey at once." },
            { letter: "C", text: "In both places they argue with Odysseus for a long time before obeying." },
            { letter: "D", text: "In both places they leave quickly, but a storm sent by the gods undoes all their efforts." }
          ],
          correct: "B"
        },
        {
          id: "leaves",
          sol: "9.RL.2.A",
          stem: "In sentence 4, Odysseus compares the Cicones' neighbors to the leaves of spring mainly to emphasize —",
          choices: [
            { letter: "A", text: "how quickly the battle ended" },
            { letter: "B", text: "how green and rich the land was" },
            { letter: "C", text: "how huge the enemy force was" },
            { letter: "D", text: "how calm the dawn was before battle" }
          ],
          correct: "C"
        },
        {
          id: "zeus",
          sol: "9.RV.1.F",
          stem: "In sentence 5, the storm is sent by \"Zeus, who gathers the clouds.\" This reference to the king of the gods suggests that —",
          choices: [
            { letter: "A", text: "the crew has earned a reward of fair winds" },
            { letter: "B", text: "Odysseus can calm the storm with a single prayer" },
            { letter: "C", text: "Zeus wants the crew to return to Ismarus" },
            { letter: "D", text: "divine power shapes the course of the voyage" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Taken together, the Cicones raid and the Lotus-Eaters episode develop which idea about the challenges Odysseus and his men face?",
          choices: [
            { letter: "A", text: "The gods punish only those travelers who refuse to offer them prayers." },
            { letter: "B", text: "Lingering where life feels pleasant can cost travelers dearly." },
            { letter: "C", text: "Treasure won in battle guarantees a safe voyage home." },
            { letter: "D", text: "Every people the travelers meet is hostile to strangers." }
          ],
          correct: "B"
        },
        {
          id: "headlong",
          sol: "9.RV.1.C",
          stem: "In sentence 6, the word *headlong* most nearly means —",
          choices: [
            { letter: "A", text: "rushing forward out of control" },
            { letter: "B", text: "slowly and with great care" },
            { letter: "C", text: "in a wide and gentle circle" },
            { letter: "D", text: "safely toward a sheltered harbor" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.2.C",
          stem: "How does the mood change across sentences 11–13?",
          choices: [
            { letter: "A", text: "from cheerful triumph to bored indifference" },
            { letter: "B", text: "from terror to complete and calm confidence" },
            { letter: "C", text: "from weary relief to a growing sense of dread" },
            { letter: "D", text: "from anger at the crew to warm forgiveness" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "The final sentence (sentence 13) is effective mainly because Odysseus —",
          choices: [
            { letter: "A", text: "admits that he has forgotten most of what happened in the land of the Cyclopes" },
            { letter: "B", text: "thanks the Phaeacians for the gifts and hospitality they have shown him" },
            { letter: "C", text: "promises his listeners that the next part of his story will be a cheerful one" },
            { letter: "D", text: "cannot forget, after a tale about forgetting, and hints at worse to come" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
