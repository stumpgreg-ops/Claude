/* SOL Labyrinth — The Odyssey: the Lotus-Eaters (English 9 Unit 2, family ODY)
 * Eight original retellings of Odyssey Book 9 (the storm after the Cicones raid, the land of
 * the Lotus-Eaters, the approach to the Cyclopes' land), from tiny to epic length.
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
      blurb: "Six words for a kind people, a tempting fruit and a leader who will not bend.",
      level: 2,
      passage:
        "<p>" +
        N(1) + "The Lotus-Eaters were a <strong>benevolent</strong> people who greeted strangers with open hands rather than spears. " +
        N(2) + "They offered Odysseus's three scouts the lotus, a <strong>beguiling</strong> fruit whose honey-sweet taste hid its power. " +
        N(3) + "After one bite the men grew <strong>languid</strong>; they stretched out in the warm grass and gave no thought to the ships waiting on the shore. " +
        N(4) + "Home, family and the long road to Ithaca sank into <strong>oblivion</strong>, as if the men had drunk from Lethe, the mythical river of forgetting. " +
        N(5) + "When Odysseus found them, they begged to stay. " +
        N(6) + "Yet he was <strong>resolute</strong>. " +
        N(7) + "Although the men wept, he <strong>compelled</strong> them back to the ships, tied them under the rowing benches and ordered the rest of the crew aboard before anyone else could taste the fruit." +
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
          stem: "Sentences 6 and 7 show that Odysseus responds to his men's pleading by —",
          choices: [
            { letter: "A", text: "acting firmly to save them against their wishes" },
            { letter: "B", text: "tasting the fruit to learn why they want to stay" },
            { letter: "C", text: "leaving them behind so the others can sail on" },
            { letter: "D", text: "asking the Lotus-Eaters to persuade the men" }
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
      blurb: "Odysseus tells, in verse, how a gentle land nearly took his men.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Nine days the north wind hounded us across the fish-filled sea;<br>" +
        L(2) + "the tenth dawn showed a quiet shore where the Lotus-Eaters dwell.<br>" +
        L(3) + "We drew fresh water from their springs and ate beside the ships,<br>" +
        L(4) + "then I chose two good men to learn who lived upon that land<br>" +
        L(5) + "and sent a third to go with them, a herald, to speak for all.<br>" +
        L(6) + "No spear was raised against them there, no ambush lay in wait;<br>" +
        L(7) + "the Lotus-Eaters smiled and gave them lotus fruit to taste.<br>" +
        L(8) + "As a tired swimmer far from shore stops fighting the warm current<br>" +
        L(9) + "and lets it carry him where it will, forgetting the beach he swam for,<br>" +
        L(10) + "so my men, once they had tasted that honey-sweet fruit, let go of home.<br>" +
        L(11) + "They wished no more to bring me word or turn their faces homeward,<br>" +
        L(12) + "but only to remain there, eating lotus, all their days.<br>" +
        L(13) + "They wept, but I dragged them to the ships and tied them under the benches,<br>" +
        L(14) + "and shouted to my loyal crew, \"Aboard, and fast, before another tastes it<br>" +
        L(15) + "and forgets his home!\" They sprang to the benches, row on row,<br>" +
        L(16) + "and struck the grey sea with their oars, and we sailed on, sick at heart." +
        "</p>",
      claims: [
        {
          id: "epicsimile",
          sol: "9.RL.2.A",
          stem: "An epic simile is a long, detailed comparison using like or as. The epic simile in lines 8–10 compares the men to a tired swimmer to show that they —",
          choices: [
            { letter: "A", text: "were far too weak from the storm to row any farther" },
            { letter: "B", text: "stopped resisting and drifted where pleasure led" },
            { letter: "C", text: "tried to swim back to the ships after eating" },
            { letter: "D", text: "had nearly drowned on the way to this land" }
          ],
          correct: "B"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          stem: "How does the setting described in lines 2 and 6–7 make the challenge on this shore especially dangerous?",
          choices: [
            { letter: "A", text: "The land is so crowded that the scouts get lost." },
            { letter: "B", text: "The weather turns stormy while the men are still ashore." },
            { letter: "C", text: "Its peace gives the men no reason to stay on guard." },
            { letter: "D", text: "The springs run dry, so the men must eat the fruit." }
          ],
          correct: "C"
        },
        {
          id: "response",
          sol: "9.RL.1.C",
          stem: "Lines 13–15 show that Odysseus responds to the crisis by —",
          choices: [
            { letter: "A", text: "putting the crew's homecoming ahead of the scouts' wishes" },
            { letter: "B", text: "punishing the scouts for wasting the whole crew's time" },
            { letter: "C", text: "asking the Lotus-Eaters to share the fruit with everyone" },
            { letter: "D", text: "waiting patiently on the beach until the scouts chose to return" }
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
          stem: "Because Odysseus narrates the poem himself (\"I chose,\" \"my men\"), the reader —",
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
      blurb: "A scene on the Lotus shore, paired with an article on nostos, the Greek idea of homecoming.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Leaving the Lotus Shore</strong></p>" +
        "<p>" +
        N(1) + "The crew waited by the black ships all afternoon, but the three scouts did not return. " +
        N(2) + "At last Odysseus went inland himself, and when he came back, he was dragging the scouts by force. " +
        N(3) + "They were not wounded, and no one had threatened them. " +
        N(4) + "Yet they wept and pulled against his grip, begging to go back to the Lotus-Eaters. " +
        N(5) + "One young sailor stared at the sweet fruit crushed in a scout's hand and took a slow step toward the meadow. " +
        N(6) + "\"Aboard, all of you!\" Odysseus shouted, \"for whoever tastes the lotus forgets his home!\" " +
        N(7) + "The sailor stopped, shook himself as though waking from a dream, and ran for his oar. " +
        N(8) + "Within moments the scouts were tied beneath the rowing benches, and the ships slid out onto the grey sea." +
        "</p>" +
        "<p><strong>Text 2 — Nostos: The Road Home</strong></p>" +
        "<p>" +
        N(9) + "Ancient Greek storytellers had a word for a hero's return home: nostos. " +
        N(10) + "The Odyssey is built around nostos, and many of its episodes test whether Odysseus and his men will keep home in mind. " +
        N(11) + "Monsters such as the Cyclops threaten the men's lives. " +
        N(12) + "The Lotus-Eaters, by contrast, threaten something harder to see: the men's desire to return. " +
        N(13) + "Nothing in their land is violent; the danger is that comfort can make people stop striving. " +
        N(14) + "Though the episode is brief, it begins a pattern that returns later in the epic, when a year of feasting in Circe's hall and Calypso's offer of immortality also test whether the journey home will be delayed or given up. " +
        N(15) + "Even today, English speakers call a person who drifts through life in lazy contentment, forgetting duties and goals, a \"lotus-eater.\"" +
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
            { letter: "A", text: "Sentence 1: The crew waited by the black ships all afternoon, but the three scouts did not return." },
            { letter: "B", text: "Sentence 3: They were not wounded, and no one had threatened them." },
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
            { letter: "A", text: "He refuses to look at the fruit and warns the scouts." },
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
            { letter: "A", text: "had made the sailor fall asleep on the sand" },
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
            { letter: "D", text: "Circe and Calypso help Odysseus reach Ithaca more quickly." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── LONG (level 3) ───────────── */
    {
      id: "ody-lotus-choice",
      family: "ODY",
      episode: "lotus",
      title: "The Choice on the Shore",
      kind: "The Odyssey · 9.RL",
      blurb: "The scouts' sweet afternoon, and the hard choice it forces on their captain.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "When the twelve ships had been beached and the men had eaten their meal beside the hulls, Odysseus, master of schemes, chose two of his companions to walk inland and learn what sort of people lived there. " +
        N(2) + "With them he sent a third man as herald, so that a voice of peace would speak before any spear was raised. " +
        N(3) + "The three climbed from the pebbled beach into a meadow where tall flowers nodded in a soft wind, and the air smelled of honey and warm earth." +
        "</p>" +
        "<p>" +
        N(4) + "The Lotus-Eaters came out to meet them, smiling, with empty hands. " +
        N(5) + "They made no threats; instead they held out the fruit of the lotus, the food they themselves lived on. " +
        N(6) + "The herald remembered his duty and began to explain who the strangers were and where their ships lay. " +
        N(7) + "But the fruit was offered again, and it seemed rude to refuse a gift so gently given. " +
        N(8) + "The three men ate. " +
        N(9) + "The taste was sweeter than any honey, and with it came a stillness, as when the sea lies flat at noon and no breeze stirs the sails. " +
        N(10) + "The ships, the beach, the far-off island of Ithaca — all of it slipped away like a dream at waking. " +
        N(11) + "They no longer wished to carry word back to their captain or to see home again. " +
        N(12) + "They wanted only to stay in that meadow, eating lotus, for the rest of their days." +
        "</p>" +
        "<p>" +
        N(13) + "On the shore the hours passed, and Odysseus watched the meadow with a frown. " +
        N(14) + "Some of the crew grumbled that the scouts had found a feast and kept it to themselves; others whispered about an ambush. " +
        N(15) + "Odysseus went himself to find out. " +
        N(16) + "He found the three lying in the grass with the sweet fruit in their hands, and when he called them, they only smiled up at him. " +
        N(17) + "\"Sit with us,\" one of them said. \"Taste it, and you will understand. There is no need to go anywhere ever again.\"" +
        "</p>" +
        "<p>" +
        N(18) + "Here was a challenge that no sword could answer. " +
        N(19) + "These men were not enemies; they were his own companions, and they were happy. " +
        N(20) + "Odysseus could have left them to their contentment, or he could have lingered to argue and perhaps tasted the fruit himself. " +
        N(21) + "He did neither. " +
        N(22) + "He seized them and hauled them, weeping, back to the ships, and there he bound them fast beneath the rowing benches. " +
        N(23) + "Then he turned to the rest of his crew. " +
        N(24) + "\"Board the ships, all of you, and quickly!\" he ordered. \"Let no one else taste the lotus and forget the way home.\" " +
        N(25) + "The men obeyed at once, for they had seen their friends' faces. " +
        N(26) + "They took their places on the benches and struck the grey sea with their oars, and the land of the Lotus-Eaters, peaceful and sweet, fell away behind them." +
        "</p>",
      claims: [
        {
          id: "setting",
          sol: "9.RL.3.B",
          stem: "How does the setting described in sentences 3 and 9 contribute to the scouts' downfall?",
          choices: [
            { letter: "A", text: "Its sweetness and calm lower their guard and make staying feel natural." },
            { letter: "B", text: "Its steep cliffs and thick forests make the way back to the ships hard to find." },
            { letter: "C", text: "Its harsh heat leaves them too weak and thirsty to walk to the ships." },
            { letter: "D", text: "Its crowded villages hide soldiers waiting to capture the strangers." }
          ],
          correct: "A"
        },
        {
          id: "stillness",
          sol: "9.RL.2.A",
          stem: "In sentence 9, the stillness brought by the lotus is compared to a sea at noon with no breeze. This comparison suggests that the lotus —",
          choices: [
            { letter: "A", text: "makes the men seasick and unable to stand" },
            { letter: "B", text: "stops the men's purpose the way calm air stops a ship" },
            { letter: "C", text: "gives the men enough strength to row for days without rest" },
            { letter: "D", text: "reminds the men of the storm they had survived" }
          ],
          correct: "B"
        },
        {
          id: "herald",
          sol: "9.RL.1.B",
          stem: "Sentence 7 suggests that the herald ate the lotus partly because —",
          choices: [
            { letter: "A", text: "Odysseus had ordered him to taste the local food" },
            { letter: "B", text: "he was starving after the long walk from the ships" },
            { letter: "C", text: "refusing a gift offered so kindly seemed impolite" },
            { letter: "D", text: "the Lotus-Eaters threatened him when he hesitated" }
          ],
          correct: "C"
        },
        {
          id: "speech",
          sol: "9.RL.1.D",
          stem: "What does the scout's speech in sentence 17 reveal about how the lotus has changed him?",
          choices: [
            { letter: "A", text: "He is secretly planning to escape from the Lotus-Eaters." },
            { letter: "B", text: "He blames Odysseus for leaving the scouts alone so long." },
            { letter: "C", text: "He sees staying as so plainly good that his captain should join." },
            { letter: "D", text: "He is reporting what he learned about the land, just as he was ordered." }
          ],
          correct: "C"
        },
        {
          id: "choice",
          sol: "9.RL.1.C",
          stem: "Sentences 18–22 show that Odysseus meets this challenge by —",
          choices: [
            { letter: "A", text: "lingering to argue until the scouts agree to leave" },
            { letter: "B", text: "tasting the fruit so that he can understand his men" },
            { letter: "C", text: "leaving the scouts behind because they seem happy" },
            { letter: "D", text: "putting his men's homecoming above their wishes" }
          ],
          correct: "D"
        },
        {
          id: "lingered",
          sol: "9.RV.1.C",
          stem: "In sentence 20, the word *lingered* most nearly means —",
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
          stem: "The author most likely includes the crew's guesses in sentence 14 to show that —",
          choices: [
            { letter: "A", text: "the scouts had been gone for several days" },
            { letter: "B", text: "the crew expects a feast or a fight, not the real danger" },
            { letter: "C", text: "the men no longer trust their captain's judgment about danger" },
            { letter: "D", text: "the Lotus-Eaters had already visited the beach" }
          ],
          correct: "B"
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

    /* ───────────── EPIC (level 3) ───────────── */
    {
      id: "ody-lotus-epic-telling",
      family: "ODY",
      episode: "lotus",
      title: "From Ismarus to the Lotus Shore",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus tells the Phaeacians of the Cicones, the storm, the lotus and the shore beyond.",
      level: 3,
      passage:
        "<p>" +
        N(1) + "Hear me now, Alcinous, and you lords of Phaeacia, for you have asked me to tell the story of my sorrows, and I will begin where the wind first took us from Troy. " +
        N(2) + "From Ilium the wind carried us to Ismarus, the city of the Cicones. " +
        N(3) + "We sacked the town and divided the plunder fairly, so that no man went without his share. " +
        N(4) + "Then I urged my men to leave at once, on swift feet, but the fools would not listen. " +
        N(5) + "They stayed on the beach, drinking wine and feasting on sheep and cattle beside the sea, while the Cicones who had escaped ran inland to call their neighbors. " +
        N(6) + "Those neighbors came at dawn, as thick as the leaves that crowd the branches in spring, and they fought us beside our ships until the sun turned toward evening. " +
        N(7) + "Six men from every ship died there, and the rest of us escaped by hard rowing, glad to be alive but grieving for our friends." +
        "</p>" +
        "<p>" +
        N(8) + "Then Zeus, who gathers the clouds, sent the north wind howling against us. " +
        N(9) + "Storm clouds hid the land and the sea alike, and night came rushing down from the sky. " +
        N(10) + "The ships were driven headlong, and the wind's force ripped our sails to rags. " +
        N(11) + "We lowered them and rowed hard for land, and there we lay for two days and two nights, worn out by toil and grief. " +
        N(12) + "When Dawn with her rose-red fingers brought the third day, we raised the masts and set the white sails again. " +
        N(13) + "I might have reached my own country unharmed, but as I rounded Cape Malea, the current and the north wind drove me off course, past the island of Cythera. " +
        N(14) + "For nine days the deadly winds carried us over the fish-filled sea, and on the tenth day we landed on the shore of the Lotus-Eaters, who feed on a flowering fruit." +
        "</p>" +
        "<p>" +
        N(15) + "We went ashore and drew fresh water, and my companions took their meal beside the swift ships. " +
        N(16) + "When we had eaten and drunk our fill, I chose two of my men and sent a third as herald, to discover what kind of people lived in that land. " +
        N(17) + "They set off at once and soon met the Lotus-Eaters. " +
        N(18) + "Those people planned no harm for my companions; they only gave them the lotus to taste. " +
        N(19) + "But whoever ate that honey-sweet fruit no longer wished to bring back word or to come home. " +
        N(20) + "They wanted only to remain there among the Lotus-Eaters, feeding on lotus, with their homecoming forgotten." +
        "</p>" +
        "<p>" +
        N(21) + "I brought them back to the ships by force, and they wept as I dragged them. " +
        N(22) + "I tied them beneath the benches in the hollow ships, and then I commanded the rest of my loyal companions to board quickly, so that no one else might taste the lotus and lose all thought of home. " +
        N(23) + "At once they climbed aboard and sat in rows, and, pulling together, they struck the grey sea white with their oars." +
        "</p>" +
        "<p>" +
        N(24) + "From there we sailed on, sick at heart. " +
        N(25) + "Like a man who has pulled his children from a burning house and counts their faces in the dark, I counted my ships and my crew, knowing that I had saved them this time but that the sea was wide and home was far. " +
        N(26) + "And yet a darker shore was waiting, for next we came to the land of the Cyclopes, a proud and lawless people who neither plant nor plow but leave everything to the gods. " +
        N(27) + "What happened there, my friends, I have never forgotten, though I have often wished I could." +
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
          stem: "How does the crew's response to Odysseus's command in sentence 23 differ from their response in sentences 4–5?",
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
          stem: "In sentence 6, Odysseus compares the Cicones' neighbors to the leaves of spring mainly to emphasize —",
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
          stem: "In sentence 8, the storm is sent by \"Zeus, who gathers the clouds.\" This reference to the king of the gods suggests that —",
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
          stem: "In sentence 10, the word *headlong* most nearly means —",
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
          stem: "How does the mood change across sentences 24–27?",
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
          stem: "The final sentence (sentence 27) is effective mainly because Odysseus —",
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
