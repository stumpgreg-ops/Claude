/* SOL Labyrinth — The Odyssey: the Cyclops (English 9 Unit 2, family ODY)
 * Original retellings of Odyssey Book 9 (Polyphemus). The plot is public domain; the
 * wording here is new and does not follow any modern translation or textbook.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────── tiny · level 1 ───────────── */
    {
      id: "ody-cyclops-lawless",
      family: "ODY",
      episode: "cyclops",
      title: "A Land Without Laws",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus reaches the country of the one-eyed giants.",
      level: 1,
      passage:
        "<p>" + N(1) + "After many days on the sea, Odysseus and his crews came to the land of the Cyclopes. " +
        N(2) + "These one-eyed giants held no assemblies and made no laws. " +
        N(3) + "They never plowed a field or planted a seed. " +
        N(4) + "Each Cyclops lived in a mountain cave and ruled his own family, caring nothing for his neighbors. " +
        N(5) + "Odysseus left most of his ships at a small island full of wild goats nearby. " +
        N(6) + "Then, curious to learn what kind of people lived on the mainland, he sailed there with his own ship and crew.</p>",
      claims: [
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          why: "The giants hold no assemblies, make no laws, and care nothing for neighbors (sentences 2–4), so a visitor has no rules or community to protect him. Nothing mentions water, distance, or farming; they never plant (sentence 3).",
          stem: "Sentences 2–4 describe the land of the Cyclopes. How might this setting create a challenge for Odysseus?",
          choices: [
            { letter: "A", text: "Visitors there cannot count on any rules to protect them." },
            { letter: "B", text: "The land is too rocky for his crew to find fresh water." },
            { letter: "C", text: "The mainland is too far away for his ship to reach safely." },
            { letter: "D", text: "The giants are so busy farming that they will ignore guests." }
          ],
          correct: "A"
        },
        {
          id: "assemblies",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          why: "Assemblies is paired with made no laws (sentence 2), so it means gatherings where a people decide things together, the way laws get made.",
          stem: "In sentence 2, the word assemblies most nearly means —",
          choices: [
            { letter: "A", text: "large stone buildings where farm tools are kept" },
            { letter: "B", text: "meetings where a people gather to decide things" },
            { letter: "C", text: "herds of animals that travel and graze together" },
            { letter: "D", text: "old stories that elders tell beside the fire" }
          ],
          correct: "B"
        },
        {
          id: "curious",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "Sentence 6 says he was curious to learn what kind of people lived there and sailed off into unknown land to find out, which is a risk taken for knowledge. Nothing shows fear, fatigue, or anger.",
          stem: "Sentence 6 suggests that, on reaching the land of the Cyclopes, Odysseus is —",
          choices: [
            { letter: "A", text: "afraid of the giants and eager to hide from them" },
            { letter: "B", text: "tired of sailing and hoping to settle on the mainland" },
            { letter: "C", text: "curious and willing to take a risk to learn more" },
            { letter: "D", text: "angry at his crews and determined to travel alone" }
          ],
          correct: "C"
        },
        {
          id: "goat-island",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          why: "Sentence 5 says he left most of his ships at the goat island, and sentence 6 says he sailed on with only his own ship, so just part of the fleet faces the unknown.",
          stem: "The author includes sentence 5, about the island of wild goats, mainly to show that —",
          choices: [
            { letter: "A", text: "the Cyclopes raise goats on the island for their meals" },
            { letter: "B", text: "Odysseus's crews refuse to go any farther with him" },
            { letter: "C", text: "the wild goats are more dangerous than the giants" },
            { letter: "D", text: "Odysseus takes only part of his fleet into the unknown" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── tiny · level 1 ───────────── */
    {
      id: "ody-cyclops-cheese",
      family: "ODY",
      episode: "cyclops",
      title: "Cheese and Lambs",
      kind: "The Odyssey · 9.RL",
      blurb: "The men want to grab what they can and run. Odysseus wants to stay.",
      level: 1,
      passage:
        "<p>" + N(1) + "Odysseus chose twelve men and took a goatskin of strong dark wine, a gift from Maron, a priest of Apollo. " +
        N(2) + "They climbed to a huge cave, but its owner was away with his flocks. " +
        N(3) + "Inside they found racks loaded with cheeses, pens crowded with lambs and young goats, and pails brimming with whey. " +
        N(4) + "The men begged Odysseus to grab some cheese and lambs and sail away at once. " +
        N(5) + "He refused. " +
        N(6) + "He wanted to see the giant, and he hoped the giant would give him guest-gifts.</p>",
      claims: [
        {
          id: "refuse",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "Sentence 5 says he refused, and sentence 6 gives his reasons: he wanted to see the giant and hoped for guest-gifts.",
          stem: "How does Odysseus respond when his men beg him to leave the cave?",
          choices: [
            { letter: "A", text: "He agrees and orders them to load the lambs on the ship." },
            { letter: "B", text: "He refuses, wanting to meet the giant and get gifts." },
            { letter: "C", text: "He sends them home and waits in the cave by himself." },
            { letter: "D", text: "He decides to trade his wine for the giant's cheese." }
          ],
          correct: "B"
        },
        {
          id: "men",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "The men beg to grab food and sail away at once (sentence 4), showing they sense danger and want to be gone before the owner returns. Begging to leave rules out resting or expecting a feast.",
          stem: "Based on sentence 4, readers can infer that Odysseus's men —",
          choices: [
            { letter: "A", text: "sense danger and want to leave before the owner returns" },
            { letter: "B", text: "are too tired to carry anything heavy back down to the ship" },
            { letter: "C", text: "think the giant will welcome them with a great feast" },
            { letter: "D", text: "want to rest in the cave until the next morning" }
          ],
          correct: "A"
        },
        {
          id: "pens",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          why: "Pens are crowded with lambs and young goats (sentence 3), so here the word means enclosures for animals, not writing tools.",
          stem: "In sentence 3, the word pens most nearly means —",
          choices: [
            { letter: "A", text: "tools used for writing with ink" },
            { letter: "B", text: "baskets used to carry milk and cheese" },
            { letter: "C", text: "closed spaces where animals are kept" },
            { letter: "D", text: "small rooms where people sleep at night" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          why: "His men beg him to leave (sentence 4), but he refuses because he wants to see the giant (sentences 5–6), so curiosity leads him to ignore good advice.",
          stem: "Which statement best expresses a theme that begins to develop in this scene in the giant's cave?",
          choices: [
            { letter: "A", text: "Hard work always brings people a fair reward." },
            { letter: "B", text: "People should never share their food with strangers." },
            { letter: "C", text: "A leader should always do what his crew wants." },
            { letter: "D", text: "Curiosity can lead a person to ignore good advice." }
          ],
          correct: "D"
        },
        {
          id: "xenia",
          sol: "9.RL.3.A",
          sub: "9.RL.3.A.1",
          why: "Hoping the giant would give him guest-gifts (sentence 6) shows he expects the host's duty of xenia. The wine from Maron is a gift he already has, not one he expects from this host.",
          stem: "The Greeks called the custom of welcoming travelers xenia, or guest-friendship. Which detail shows that Odysseus expects xenia from the owner of the cave?",
          choices: [
            { letter: "A", text: "he hoped the giant would give him guest-gifts" },
            { letter: "B", text: "its owner was away from the cave with his flocks" },
            { letter: "C", text: "pails brimming with whey" },
            { letter: "D", text: "a gift from Maron, a priest of Apollo" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── short · level 1 ───────────── */
    {
      id: "ody-cyclops-wine",
      family: "ODY",
      episode: "cyclops",
      title: "The Wine of Maron",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus offers the giant a bowl of wine and a strange name.",
      level: 1,
      passage:
        "<p>" + N(1) + "That evening the giant came home, drove his flocks inside, and set the great stone back in the doorway. " +
        N(2) + "Once again he seized two of my men and devoured them. " +
        N(3) + "Then I stepped up to him holding a wooden bowl of Maron's dark wine. " +
        N(4) + "\"Cyclops, drink this after your meal,\" I said. " +
        N(5) + "\"I brought it as a gift, hoping you would pity us and send us home.\" " +
        N(6) + "He drank it down and demanded more, and in the end he drained three bowls. " +
        N(7) + "\"Tell me your name, stranger, so that I can give you a guest-gift,\" he said. " +
        N(8) + "\"My name is Nobody,\" I answered. " +
        N(9) + "\"My mother and father and all my friends call me Nobody.\" " +
        N(10) + "The giant laughed. " +
        N(11) + "\"Then here is my gift to you: I will eat Nobody last of all.\" " +
        N(12) + "Then he toppled backward, heavy with wine, and sank into sleep.</p>",
      claims: [
        {
          id: "trait",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "He plies the giant with wine and gives the false name Nobody, backing it up with a story about his family (sentences 3–9). That is cunning, not truthful or reckless.",
          stem: "Which word best describes Odysseus as he deals with the giant in sentences 3–9?",
          choices: [
            { letter: "A", text: "reckless" },
            { letter: "B", text: "cunning" },
            { letter: "C", text: "cowardly" },
            { letter: "D", text: "truthful" }
          ],
          correct: "B"
        },
        {
          id: "why-wine",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "He keeps the bowls coming until the giant has drained three and topples over, heavy with wine, into sleep (sentences 6 and 12), so his real aim is to make him drunk. The pity he asks for (sentence 5) is cover.",
          stem: "Based on the passage, Odysseus most likely offers the giant wine because he —",
          choices: [
            { letter: "A", text: "wants to make the giant drunk and sleepy" },
            { letter: "B", text: "hopes the giant will share his cheese in return" },
            { letter: "C", text: "is too frightened to keep the wine for himself" },
            { letter: "D", text: "knows the giant has never tasted wine before" }
          ],
          correct: "A"
        },
        {
          id: "speech",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.2",
          why: "The giant promised a guest-gift (sentence 7), and the gift turns out to be eating Nobody last (sentence 11). He means it as a cruel joke that mocks the guest-gift custom, not as a kindness.",
          stem: "What does the giant's speech in sentence 11 reveal about him?",
          choices: [
            { letter: "A", text: "He respects Odysseus and plans to set him free." },
            { letter: "B", text: "He is too drunk by now to understand his own words." },
            { letter: "C", text: "He mocks the custom of guest-gifts with a cruel joke." },
            { letter: "D", text: "He is afraid that Nobody will try to run away at night." }
          ],
          correct: "C"
        },
        {
          id: "drained",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          why: "He drank it down and demanded more (sentence 6), so drained three bowls means he emptied them by drinking. Nothing is spilled or poured out.",
          stem: "In sentence 6, the word drained most nearly means —",
          choices: [
            { letter: "A", text: "spilled onto the floor" },
            { letter: "B", text: "poured out for others" },
            { letter: "C", text: "politely refused" },
            { letter: "D", text: "emptied by drinking" }
          ],
          correct: "D"
        },
        {
          id: "sentence9",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "Adding that his parents and friends all call him Nobody (sentence 9) makes the fake name sound like a real one, so the giant believes it. The name is a trick, not a real childhood name.",
          stem: "The author includes sentence 9, in which Odysseus says his whole family calls him Nobody, mainly to —",
          choices: [
            { letter: "A", text: "reveal that Odysseus misses his family back home" },
            { letter: "B", text: "show how Odysseus makes his false name believable" },
            { letter: "C", text: "explain how Odysseus was given his name as a child" },
            { letter: "D", text: "show that the giant already knows Odysseus's friends" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          why: "Odysseus cannot overpower the giant, but the wine and the false name put him to sleep and set up the trick (sentences 3–12), so a quick mind becomes a weapon against strength. His lie rules out the honesty choice.",
          stem: "Which theme is developed through Odysseus's actions with the wine and the false name?",
          choices: [
            { letter: "A", text: "Strong people should always be feared and obeyed by others." },
            { letter: "B", text: "Generous hosts are always repaid with kindness." },
            { letter: "C", text: "A quick mind can be a weapon against great strength." },
            { letter: "D", text: "Honesty is the safest choice in any danger." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── short · level 2 · vocabulary ───────────── */
    {
      id: "ody-cyclops-nobody",
      family: "ODY",
      episode: "cyclops",
      title: "Nobody Is Killing Me",
      kind: "Vocabulary · 9.RV",
      blurb: "The blinded giant calls for help, and the trick of the name pays off.",
      level: 2,
      passage:
        "<p>" + N(1) + "The blinded giant let out an <strong>anguished</strong> roar that echoed off the cliffs. " +
        N(2) + "From their caves on the windy heights, the other Cyclopes came and gathered outside his door. " +
        N(3) + "\"Polyphemus, what is wrong?\" they shouted. " +
        N(4) + "\"Why do you cry out in the night and rob us of our sleep? " +
        N(5) + "Is someone stealing your flocks or trying to kill you?\" " +
        N(6) + "From inside the cave he bellowed, \"Nobody is killing me! " +
        N(7) + "Nobody!\" " +
        N(8) + "His neighbors were <strong>bewildered</strong> by the noise, yet his answer seemed to settle the matter. " +
        N(9) + "\"If nobody is harming you, then your sickness comes from Zeus, and we cannot cure it,\" they replied. " +
        N(10) + "\"<strong>Invoke</strong> your father, Lord Poseidon, and ask him for help.\" " +
        N(11) + "Then they <strong>dispersed</strong>, each one returning to his own cave. " +
        N(12) + "I laughed silently to myself, for my <strong>ruse</strong> of the false name had fooled them all. " +
        N(13) + "Where strength would have failed, <strong>guile</strong> had saved us.</p>",
      claims: [
        {
          id: "anguished",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          why: "The giant has just been blinded and his roar brings the neighbors running (sentences 1–2), so anguished means filled with severe pain.",
          stem: "In sentence 1, the word anguished most nearly means —",
          choices: [
            { letter: "A", text: "filled with severe pain" },
            { letter: "B", text: "filled with proud, noisy joy" },
            { letter: "C", text: "softly muffled" },
            { letter: "D", text: "carefully planned" }
          ],
          correct: "A"
        },
        {
          id: "invoke",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          why: "The root voc means call, and the neighbors are telling Polyphemus to turn to his father Poseidon and ask him for help (sentence 10), so invoke means to call on someone for help.",
          stem: "The word invoke (sentence 10) contains the Latin root voc, meaning \"call,\" as in vocal. Based on the root and the context, invoke means —",
          choices: [
            { letter: "A", text: "to blame someone for a loss" },
            { letter: "B", text: "to hide away from someone" },
            { letter: "C", text: "to call on someone for help" },
            { letter: "D", text: "to take someone's place" }
          ],
          correct: "C"
        },
        {
          id: "dispersed",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          why: "They dispersed, each one returning to his own cave (sentence 11), so the word means they went off in different directions. They had gathered as one group before this (sentence 2).",
          stem: "In sentence 11, the word dispersed most nearly means —",
          choices: [
            { letter: "A", text: "argued loudly with one another" },
            { letter: "B", text: "went off in different directions" },
            { letter: "C", text: "waited patiently by the door" },
            { letter: "D", text: "joined together in one large group" }
          ],
          correct: "B"
        },
        {
          id: "guile",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          why: "Guile refers to the ruse of the false name that fooled everyone (sentences 12–13), so it suggests sly cleverness used to deceive. Intelligence alone does not suggest trickery.",
          stem: "The narrator could have used the word intelligence instead of guile in sentence 13. The word guile suggests —",
          choices: [
            { letter: "A", text: "slow, careful study of a problem" },
            { letter: "B", text: "kindness shown to an enemy" },
            { letter: "C", text: "the strength of a trained warrior" },
            { letter: "D", text: "sly cleverness used to deceive" }
          ],
          correct: "D"
        },
        {
          id: "poseidon",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.2",
          why: "Poseidon rules the sea Odysseus must cross to get home, so the advice to call on him (sentence 10) hints that the sea god may turn against Odysseus and make his voyage harder.",
          stem: "The neighbors tell Polyphemus to pray to his father, Poseidon, the god of the sea (sentence 10). For Odysseus, a sailor, this reference most likely hints that —",
          choices: [
            { letter: "A", text: "his voyage home across the sea will grow more dangerous" },
            { letter: "B", text: "the Cyclopes actually live in caves beneath the ocean" },
            { letter: "C", text: "Poseidon will arrive at once and heal the giant's eye" },
            { letter: "D", text: "Zeus and Poseidon are two names for the same god" }
          ],
          correct: "A"
        },
        {
          id: "proud",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "He laughs to himself because his ruse fooled them all, and he credits guile with saving them (sentences 12–13), which shows pride in his own cleverness. He feels no guilt or worry.",
          stem: "Sentences 12 and 13 reveal that Odysseus feels —",
          choices: [
            { letter: "A", text: "guilty for tricking the giant's neighbors" },
            { letter: "B", text: "worried that his trick is about to fail" },
            { letter: "C", text: "proud that his cleverness has worked" },
            { letter: "D", text: "angry that the Cyclopes left so quickly" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── medium · level 2 · verse ───────────── */
    {
      id: "ody-cyclops-stake",
      family: "ODY",
      episode: "cyclops",
      title: "The Olive Stake",
      kind: "Epic poetry · 9.RL",
      blurb: "Odysseus and four of his men strike while the giant sleeps.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Now the son of Poseidon lay sprawled across the floor, conquered by the wine,<br>" +
        L(2) + "and I thrust our olive stake deep into the bed of glowing embers<br>" +
        L(3) + "until its sharpened point, green as it was, was close to bursting into flame.<br>" +
        L(4) + "I spoke bold words to my men, so that none would lose heart and shrink away,<br>" +
        L(5) + "and some god breathed great courage into us. They lifted the burning stake<br>" +
        L(6) + "and drove its point into the giant's single eye, while I, pressing from above,<br>" +
        L(7) + "leaned my weight upon it and spun it, the way a shipwright bores a beam,<br>" +
        L(8) + "his helpers below whirling the drill with a leather strap so it runs on and on.<br>" +
        L(9) + "As when a blacksmith plunges a great axe, glowing red, into cold water<br>" +
        L(10) + "to temper the metal and make it hard, and the water hisses and shrieks,<br>" +
        L(11) + "so the eye hissed around the olive stake. The Cyclops gave a terrible cry,<br>" +
        L(12) + "and the rock walls rang with it. We scattered back in terror to the corners.<br>" +
        L(13) + "He wrenched the stake free and hurled it from him, raging and blind,<br>" +
        L(14) + "and bellowed for the Cyclopes who lived in caves among the windy peaks.<br>" +
        L(15) + "They heard his cry and came from every side and gathered at his door,<br>" +
        L(16) + "and asked what trouble made him shout through the deathless night." +
        "</p>",
      claims: [
        {
          id: "simile",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          why: "The simile compares the eye to a red-hot axe that hisses and shrieks in cold water (lines 9–11), so readers hear the violence of the blow through a familiar sound. It is not a lesson on blacksmithing.",
          stem: "Lines 9–11 contain an epic simile, a long, detailed comparison. This simile mainly helps readers —",
          choices: [
            { letter: "A", text: "understand how blacksmiths in ancient Greece made tools" },
            { letter: "B", text: "sense the violence of the blow through a familiar sound" },
            { letter: "C", text: "learn that Odysseus once worked as a village blacksmith" },
            { letter: "D", text: "see why the Cyclops keeps an iron axe in his cave" }
          ],
          correct: "B"
        },
        {
          id: "leader",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "Line 4 says he spoke bold words to his men so that none would lose heart and shrink away, which is encouragement. In lines 6–7 he works the stake himself.",
          stem: "Line 4 shows that Odysseus responds to this dangerous moment by —",
          choices: [
            { letter: "A", text: "encouraging his men so that they do not lose courage" },
            { letter: "B", text: "ordering his men to hide in the far corners of the cave" },
            { letter: "C", text: "praying for the gods to do the hard work for them" },
            { letter: "D", text: "leaving the most dangerous task to his men alone" }
          ],
          correct: "A"
        },
        {
          id: "temper",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          why: "The smith plunges a glowing axe into cold water to make the metal hard (lines 9–10), so temper means to strengthen by heating and cooling, not to show anger.",
          stem: "In line 10, the word temper most nearly means —",
          choices: [
            { letter: "A", text: "to show sudden anger toward" },
            { letter: "B", text: "to soften by soaking in water" },
            { letter: "C", text: "to strengthen by heating and cooling" },
            { letter: "D", text: "to measure exactly how hot a metal is" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          why: "A terrible cry, walls ringing, men scattering in terror, and the giant raging and hurling the stake (lines 11–14) create a violent, terrifying mood.",
          stem: "Which words best describe the mood of lines 11–14, just after the giant is blinded?",
          choices: [
            { letter: "A", text: "calm, gentle, and peaceful" },
            { letter: "B", text: "playful and light" },
            { letter: "C", text: "sorrowful and quiet" },
            { letter: "D", text: "violent and terrifying" }
          ],
          correct: "D"
        },
        {
          id: "god",
          sol: "9.RL.3.A",
          sub: "9.RL.3.A.1",
          why: "Saying some god breathed courage into them (line 5) credits the men's bravery to divine help, as Greeks believed the gods shaped human action. Line 4 shows they had needed encouragement, so they were not fearless from the start.",
          stem: "The poet includes the words some god breathed great courage into us (line 5) most likely to —",
          choices: [
            { letter: "A", text: "suggest that the men's bravery came with help from the gods" },
            { letter: "B", text: "show that the men had been fearless from the very start" },
            { letter: "C", text: "explain why the giant cannot be harmed by mortal weapons" },
            { letter: "D", text: "reveal that a god appears in the cave in human form" }
          ],
          correct: "A"
        },
        {
          id: "hearing",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.1",
          why: "The rock walls rang with it (line 12) describes a sound echoing through the cave. Glowing embers and lay sprawled are images you see, not hear.",
          stem: "Which phrase from the poem about the olive stake appeals most strongly to the sense of hearing?",
          choices: [
            { letter: "A", text: "the bed of glowing embers" },
            { letter: "B", text: "lay sprawled across the floor" },
            { letter: "C", text: "the rock walls rang with it" },
            { letter: "D", text: "green as it was" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── medium · level 2 ───────────── */
    {
      id: "ody-cyclops-ram",
      family: "ODY",
      episode: "cyclops",
      title: "The Lead Ram",
      kind: "The Odyssey · 9.RL",
      blurb: "The blind giant guards the door, and Odysseus clings beneath a ram.",
      level: 2,
      passage:
        "<p>" + N(1) + "Groaning in pain, the Cyclops groped his way to the doorway, rolled aside the great stone, and sat there with his arms spread wide, ready to catch any man who tried to slip out among the sheep. " +
        N(2) + "He hoped, I suppose, that I would be foolish enough to try it. " +
        N(3) + "I weighed every plan, as a man does when his life hangs in the balance, and this one seemed best. " +
        N(4) + "In the flock were fine, thick-fleeced rams, and I bound them together silently in threes with willow branches from the giant's bed. " +
        N(5) + "The middle ram of each three carried one of my men beneath it, while the two on either side shielded him. " +
        N(6) + "For myself I chose the lead ram, the largest of the flock, and I clung beneath his belly, my fists twisted deep in his wool.</p>" +
        "<p>" + N(7) + "When Dawn with her rose-red fingers appeared, the rams hurried out toward the pastures. " +
        N(8) + "Their master ran his hands along their backs as they passed, but he never thought to feel beneath them. " +
        N(9) + "Last of all came the great ram, slow for once, weighed down by his own wool and by me. " +
        N(10) + "Polyphemus stroked him and spoke to him sadly. " +
        N(11) + "\"Dear ram, why are you the last to leave today? " +
        N(12) + "You always lead the flock to the fresh grass and the running streams. " +
        N(13) + "Are you grieving for your master's eye, which that wretch Nobody put out? " +
        N(14) + "If only you could speak and tell me where he hides!\" " +
        N(15) + "Then he let the ram go past, and we were out under the open sky.</p>",
      claims: [
        {
          id: "plan",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "He weighed every plan and chose the best (sentence 3), then tied the rams in threes so his men could hang beneath them (sentences 4–6), a careful escape rather than a fight or a plea.",
          stem: "How does Odysseus respond to the challenge of the giant guarding the doorway?",
          choices: [
            { letter: "A", text: "He waits until the giant falls asleep again and sneaks past him." },
            { letter: "B", text: "He thinks through his options and invents a careful escape." },
            { letter: "C", text: "He fights the giant at the doorway with his sharp sword." },
            { letter: "D", text: "He begs the giant to let his men go free in the morning." }
          ],
          correct: "B"
        },
        {
          id: "speech",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "He strokes the ram, speaks to it sadly, and calls it dear ram (sentences 10–11), which shows tenderness. He still wants to find Nobody (sentence 14) and has not guessed where he is.",
          stem: "What does Polyphemus's speech to the ram (sentences 11–14) reveal about him?",
          choices: [
            { letter: "A", text: "He can show tenderness toward the animals he cares for." },
            { letter: "B", text: "He has already guessed that Odysseus is under the ram." },
            { letter: "C", text: "He plans to leave the cave and move to a new pasture." },
            { letter: "D", text: "He no longer cares at all about finding the man called Nobody." }
          ],
          correct: "A"
        },
        {
          id: "suspense",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          why: "The giant strokes the ram and talks while Odysseus hangs beneath it (sentences 9–14), so he could be discovered at any moment. That builds suspense until the ram is let go (sentence 15).",
          stem: "The author places the giant's speech while Odysseus is still clinging beneath the ram mainly to —",
          choices: [
            { letter: "A", text: "explain exactly how the rams were tied together" },
            { letter: "B", text: "show that the giant has forgiven his enemy at last" },
            { letter: "C", text: "build suspense, since Odysseus could be found at any moment" },
            { letter: "D", text: "describe the green pastures where the flock will graze" }
          ],
          correct: "C"
        },
        {
          id: "shielded",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          why: "The middle ram carried a man and the two rams on either side shielded him (sentence 5), so they hid and protected him from the giant's hands.",
          stem: "In sentence 5, the word shielded most nearly means —",
          choices: [
            { letter: "A", text: "pushed forward roughly" },
            { letter: "B", text: "kept from moving" },
            { letter: "C", text: "carried away" },
            { letter: "D", text: "hid and protected" }
          ],
          correct: "D"
        },
        {
          id: "backs",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "He feels the rams' backs but never beneath them (sentence 8), so he expects the men to ride on top. Sentence 1 says he wanted to catch men slipping out, so he is not just counting sheep.",
          stem: "Based on sentence 8, readers can infer that the blind giant —",
          choices: [
            { letter: "A", text: "expects the men to try riding out on top of the sheep" },
            { letter: "B", text: "knows exactly where each of the men is hiding" },
            { letter: "C", text: "is only counting the sheep to be certain none are lost" },
            { letter: "D", text: "has begun to regain some of his lost sight" }
          ],
          correct: "A"
        },
        {
          id: "epithet",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.1",
          why: "Dawn with her rose-red fingers (sentence 7) is a set epic epithet that marks the start of a new day in a grand, poetic way. It does not warn of danger or bring in a rescuer.",
          stem: "Dawn with her rose-red fingers (sentence 7) is an epithet, a descriptive phrase Homer repeats for a person or thing. Its main effect here is to —",
          choices: [
            { letter: "A", text: "explain why the giant cannot see the men in the dark" },
            { letter: "B", text: "mark the start of a new day in a grand, poetic way" },
            { letter: "C", text: "suggest that the red morning sky is a sign of danger" },
            { letter: "D", text: "introduce a goddess who will rescue Odysseus's men" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── long · level 3 ───────────── */
    {
      id: "ody-cyclops-name",
      family: "ODY",
      episode: "cyclops",
      title: "The Name Over the Water",
      kind: "The Odyssey · 9.RL",
      blurb: "Safe on the sea, Odysseus cannot resist one last shout at the Cyclops.",
      level: 3,
      passage:
        "<p>" + N(1) + "We drove the giant's fat sheep down to our ship, glancing back at every step, and our friends on board greeted us with joy. " +
        N(2) + "Yet their joy soon turned to weeping when they saw that six of our companions would never come home. " +
        N(3) + "I frowned at them to stop their tears and ordered them to load the flock and row at once. " +
        N(4) + "Swiftly they sat to the oars and struck the wine-dark sea with their blades.</p>" +
        "<p>" + N(5) + "But when we were as far from shore as a man's shout can carry, I could not hold my tongue. " +
        N(6) + "\"Cyclops!\" I called. " +
        N(7) + "\"You ate the men of a guest in your own cave, and now Zeus and the other gods have paid you back!\" " +
        N(8) + "At that the giant's rage boiled higher still. " +
        N(9) + "He tore the top off a hill and hurled it, and it plunged into the sea just ahead of our dark prow. " +
        N(10) + "The water rose in a great wave, and its backwash swept us toward the shore again, until I pushed us off with a long pole and signaled the crew to row for their lives.</p>" +
        "<p>" + N(11) + "When we had covered twice the distance, I began to call out again, though my men pleaded with me from every bench. " +
        N(12) + "\"Stubborn man, why provoke that savage?\" they said. " +
        N(13) + "\"Just now his rock drove us back to land, and we thought we were finished. " +
        N(14) + "If he hears one more word, he will crush us and our ship with a single jagged boulder.\" " +
        N(15) + "But they could not persuade my proud heart. " +
        N(16) + "\"Cyclops,\" I shouted, \"if anyone ever asks who blinded your eye, tell him it was Odysseus, raider of cities, son of Laertes, whose home is on Ithaca!\"</p>" +
        "<p>" + N(17) + "Then the giant stretched his hands toward the starry sky and prayed to his father. " +
        N(18) + "\"Hear me, Poseidon, shaker of the earth, if I am truly your son,\" he cried. " +
        N(19) + "\"Grant that Odysseus, raider of cities, never reaches his home. " +
        N(20) + "Or if he is fated to see his own country again, let him come late and broken, having lost all his companions, carried in a stranger's ship, and let him find trouble waiting in his house.\" " +
        N(21) + "The dark-haired god heard his son's prayer. " +
        N(22) + "Then the Cyclops lifted a rock far larger than the first, swung it round, and let it fly. " +
        N(23) + "It struck the sea just behind our stern, and the surge it raised drove us forward to the goat island, where the rest of our ships lay waiting. " +
        N(24) + "I had won glory by speaking my name, but I had also handed the god of the sea the very name he needed for his curse.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          why: "Odysseus taunts the giant against his crew's pleas (sentences 11–16), and the boulders nearly sink them while his name gives Poseidon a curse (sentences 22–24). Pride puts his men in danger.",
          stem: "Which statement best expresses a theme developed in this account of Odysseus's escape from the Cyclops?",
          choices: [
            { letter: "A", text: "Pride can lead a hero to put the people he leads in danger." },
            { letter: "B", text: "The gods always reward those who boldly taunt their enemies." },
            { letter: "C", text: "Sailors who take livestock from strangers are soon punished." },
            { letter: "D", text: "A wise leader should hide his feelings from his crew at sea." }
          ],
          correct: "A"
        },
        {
          id: "crew",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "The men say one more word will make the giant crush them and the ship (sentences 13–14), so they fear another taunt could get them killed. They plead with him, not admire him (sentence 11).",
          stem: "The crew's words in sentences 12–14 reveal that the men —",
          choices: [
            { letter: "A", text: "want Odysseus to go back and fight the giant on land" },
            { letter: "B", text: "admire Odysseus for answering the giant so boldly" },
            { letter: "C", text: "fear that one more taunt could get them all killed" },
            { letter: "D", text: "believe the blind giant can no longer do them harm" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "In sentence 3 he firmly orders the crew to load and row. By sentence 15 his proud heart will not listen to them, so pride now rules him.",
          stem: "Which choice best describes how Odysseus's behavior shifts between sentence 3 and sentence 15?",
          choices: [
            { letter: "A", text: "He goes from calmly commanding his crew to letting pride rule him." },
            { letter: "B", text: "He goes from fearing the giant to feeling sorry for the giant." },
            { letter: "C", text: "He goes from ignoring his men to following their advice closely." },
            { letter: "D", text: "He goes from boasting about his name to hiding it in shame." }
          ],
          correct: "A"
        },
        {
          id: "prayer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          why: "The giant asks that Odysseus come home late, alone, on a stranger's ship, and find trouble at home (sentences 19–20), and the god hears him (sentence 21). This foreshadows the hardships ahead.",
          stem: "Polyphemus's prayer in sentences 19–20 mainly serves to —",
          choices: [
            { letter: "A", text: "explain how the Cyclopes first came to live on their island" },
            { letter: "B", text: "foreshadow the hardships Odysseus will face on his way home" },
            { letter: "C", text: "show that the giant has forgiven Odysseus for the trick" },
            { letter: "D", text: "reveal that Poseidon has already sunk all of Odysseus's ships" }
          ],
          correct: "B"
        },
        {
          id: "provoke",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          why: "The crew fears another word will bring a boulder down on them (sentences 13–14), so provoke means to deliberately stir the giant to anger.",
          stem: "In sentence 12, the word provoke most nearly means —",
          choices: [
            { letter: "A", text: "praise in front of other people" },
            { letter: "B", text: "slip quietly away from" },
            { letter: "C", text: "deliberately stir to anger" },
            { letter: "D", text: "pretend not to notice" }
          ],
          correct: "C"
        },
        {
          id: "zeus",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          why: "Odysseus links the punishment to the giant eating a guest's men (sentence 7), and in Greek myth Zeus guards guests. Ruling the sea and shaking the earth belong to Poseidon.",
          stem: "In sentence 7, Odysseus claims that Zeus has punished the giant. This allusion fits the situation because, in Greek myth, Zeus —",
          choices: [
            { letter: "A", text: "rules the sea and causes the earth to shake" },
            { letter: "B", text: "carries messages from Mount Olympus to mortals" },
            { letter: "C", text: "watches over shepherds and their flocks of sheep" },
            { letter: "D", text: "guards guests and punishes those who harm them" }
          ],
          correct: "D"
        },
        {
          id: "kleos",
          sol: "9.RL.3.A",
          sub: "9.RL.3.A.1",
          why: "He calls out again although his men plead with him (sentence 11), putting his name ahead of their safety, and he boasts his full name and titles (sentence 16) to win glory, or kleos.",
          stem: "Select TWO quotations that best show that Odysseus cares more about kleos, or glory and fame, than about his crew's safety.",
          choices: [
            { letter: "A", text: "I frowned at them to stop their tears and ordered them to load the flock" },
            { letter: "B", text: "I began to call out again, though my men pleaded with me from every bench" },
            { letter: "C", text: "The dark-haired god heard his son's prayer." },
            { letter: "D", text: "tell him it was Odysseus, raider of cities, son of Laertes" }
          ],
          correct: ["B", "D"]
        }
      ]
    },

    /* ───────────── epic · level 3 ───────────── */
    {
      id: "ody-cyclops-cave",
      family: "ODY",
      episode: "cyclops",
      title: "The Cave of Polyphemus",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus tells the Phaeacians how a wish for guest-gifts trapped him in a giant's cave.",
      level: 3,
      passage:
        "<p>" + N(1) + "Hear now, lords of the Phaeacians, how I came to the cave of the Cyclops, for no part of my wandering cost me more. " +
        N(2) + "Near the shore we saw a high cave shaded with laurel, where flocks of sheep and goats were penned at night behind a great wall of stones. " +
        N(3) + "I left the rest of my crew to guard the ship and chose twelve of my best men, and I carried a goatskin of dark, sweet wine that Maron, priest of Apollo, had given me. " +
        N(4) + "Something in my heart warned me that we would meet a creature of enormous strength, a savage who knew nothing of justice or law.</p>" +
        "<p>" + N(5) + "The giant was out at pasture, so we walked into his cave and stared. " +
        N(6) + "Racks sagged under cheeses, pens were crowded with lambs and kids, each kind in its own place, and pails and bowls stood brimming with whey. " +
        N(7) + "My men begged me to take the cheeses, drive the lambs down to the ship, and sail away over the wine-dark sea. " +
        N(8) + "I would not listen, though it would have been far better if I had. " +
        N(9) + "I wanted to see the giant himself and learn whether he would give me guest-gifts.</p>" +
        "<p>" + N(10) + "So we lit a fire, made an offering, ate some of the cheese, and waited. " +
        N(11) + "At evening he came, carrying a huge load of dry wood for his supper fire, and threw it down with a crash that sent us scurrying into the corners. " +
        N(12) + "He drove his flocks inside and then lifted into the doorway a stone so massive that twenty-two strong wagons could not have budged it. " +
        N(13) + "He sat and milked his ewes and bleating goats in order, and only when he had kindled his fire did he notice us.</p>" +
        "<p>" + N(14) + "\"Strangers, who are you?\" he asked. " +
        N(15) + "\"Are you traders, or pirates who roam the sea robbing others?\" " +
        N(16) + "Our hearts shook at his deep voice and monstrous size, but I answered him. " +
        N(17) + "\"We are Greeks, driven off course on our way home from Troy. " +
        N(18) + "We come to your knees as suppliants, hoping for the welcome owed to strangers. " +
        N(19) + "Respect the gods, mighty one, for Zeus himself protects guests and avenges any wrong done to them.\" " +
        N(20) + "He answered from a pitiless heart: \"You are a fool, stranger, or you come from very far away, to tell me to fear the gods. " +
        N(21) + "We Cyclopes care nothing for Zeus or any of the blessed gods, for we are far stronger than they are. " +
        N(22) + "But tell me, where did you tie up your ship?\" " +
        N(23) + "I saw through his question and answered with a lie. " +
        N(24) + "\"Poseidon, shaker of the earth, smashed my ship against the rocks at the edge of your land.\"</p>" +
        "<p>" + N(25) + "He made no reply. " +
        N(26) + "Instead he sprang up, seized two of my men, and devoured them, and we wept and raised our hands to Zeus, helpless. " +
        N(27) + "Then, full, he stretched out among his flocks and slept. " +
        N(28) + "I thought of drawing my sharp sword and driving it into his chest, but a second thought held me back. " +
        N(29) + "If he died, we would die too, for we could never move that enormous stone from the door. " +
        N(30) + "So we waited, groaning, for Dawn with her rose-red fingers. " +
        N(31) + "In the morning he devoured two more men, drove out his flocks, and set the stone back in place as easily as a man fits a lid on a quiver. " +
        N(32) + "But in the cave lay the giant's great club of green olive wood, and from it a plan began to take shape in my mind.</p>",
      claims: [
        {
          id: "narrator",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.1",
          why: "Odysseus addresses the Phaeacians and tells how I came to the cave (sentence 1), so he narrates past events to a later audience, a story within a story. The Phaeacians were not in the cave.",
          stem: "In sentence 1, Odysseus speaks to the Phaeacians. This way of opening the story tells readers that —",
          choices: [
            { letter: "A", text: "Odysseus is recalling these events later, as a flashback" },
            { letter: "B", text: "the Phaeacians were trapped in the cave beside Odysseus" },
            { letter: "C", text: "the events happen before Odysseus sails to fight at Troy" },
            { letter: "D", text: "an outside narrator will judge each of Odysseus's choices" }
          ],
          correct: "A"
        },
        {
          id: "regret",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "Looking back, he admits it would have been better to listen (sentence 8) after the giant devours his men (sentences 26 and 31). He sees that his wish to meet the giant (sentence 9) led them into disaster.",
          stem: "In sentence 8, Odysseus says it would have been far better if he had listened to his men. This comment suggests that Odysseus —",
          choices: [
            { letter: "A", text: "still believes his men were cowards for wanting to leave" },
            { letter: "B", text: "regrets that he did not take more cheese from the cave" },
            { letter: "C", text: "now sees that his curiosity led his men into disaster" },
            { letter: "D", text: "thinks the giant would have given gifts on another day" }
          ],
          correct: "C"
        },
        {
          id: "stone",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          why: "He thinks of stabbing the sleeping giant, but if the giant died they could never move the stone and would die too (sentences 28–29). The doorway stone shapes his choice.",
          stem: "How does the stone in the doorway (sentence 12) shape what happens later in the passage?",
          choices: [
            { letter: "A", text: "It keeps the other Cyclopes from hearing the men's cries." },
            { letter: "B", text: "It stops Odysseus from killing the giant while he sleeps." },
            { letter: "C", text: "It gives the men a hiding place inside the dark cave." },
            { letter: "D", text: "It shows that the giant plans to free his guests at dawn." }
          ],
          correct: "B"
        },
        {
          id: "scorn",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "He calls Odysseus a fool for telling him to fear the gods and says the Cyclopes care nothing for Zeus (sentences 20–21), right after Odysseus asks for the welcome owed to guests (sentences 18–19).",
          stem: "What do Polyphemus's words in sentences 20–22 reveal about him?",
          choices: [
            { letter: "A", text: "He is frightened that Zeus will punish him for his rudeness." },
            { letter: "B", text: "He is curious about the war at Troy and the Greeks' journey." },
            { letter: "C", text: "He is a generous host who misunderstands the strangers." },
            { letter: "D", text: "He scorns the gods and the custom of protecting guests." }
          ],
          correct: "D"
        },
        {
          id: "suppliants",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          why: "They come to the giant's knees hoping for the welcome owed to strangers (sentence 18), so suppliants are people who humbly beg for help or mercy, not soldiers or merchants.",
          stem: "In sentence 18, the word suppliants most nearly means —",
          choices: [
            { letter: "A", text: "soldiers who demand payment from a ruler" },
            { letter: "B", text: "people who humbly beg for help or mercy" },
            { letter: "C", text: "merchants who bring goods to sell to others" },
            { letter: "D", text: "travelers who are lost and need directions" }
          ],
          correct: "B"
        },
        {
          id: "lie",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          why: "He saw through the giant's question (sentence 23) and claims his ship was smashed (sentence 24), since the rest of his crew is guarding it (sentence 3). He wants to keep them hidden from the giant.",
          stem: "Based on sentences 22–24, readers can infer that Odysseus lies about his ship because he —",
          choices: [
            { letter: "A", text: "suspects the giant would use it to harm the rest of his crew" },
            { letter: "B", text: "is ashamed to admit that a storm at sea wrecked his ship" },
            { letter: "C", text: "hopes the giant will feel sorry for him and lend him a ship" },
            { letter: "D", text: "has forgotten where the crew tied up the ship that morning" }
          ],
          correct: "A"
        },
        {
          id: "quiver",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          why: "Twenty-two wagons could not budge the stone (sentence 12), yet the giant sets it in place like fitting a lid on a quiver (sentence 31). The simile shows how easy it is for him.",
          stem: "Sentence 31 compares the giant setting the stone in place to a man fitting a lid on a quiver. This simile emphasizes —",
          choices: [
            { letter: "A", text: "how carefully the giant guards the arrows he keeps in the cave" },
            { letter: "B", text: "how quietly the giant moves so that the men stay asleep" },
            { letter: "C", text: "how slowly the giant works because the stone is so heavy" },
            { letter: "D", text: "how easily the giant lifts a stone the men could never move" }
          ],
          correct: "D"
        },
        {
          id: "judgment",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.2",
          why: "First his curiosity wins over his men's advice to leave (sentences 7–9). Later, when he wants to stab the sleeping giant, a second thought holds him back (sentences 28–29), showing judgment being tested.",
          stem: "Which statement best describes how the passage develops the idea that challenges test a person's judgment?",
          choices: [
            { letter: "A", text: "Odysseus learns that the gods always rescue those who pray to them." },
            { letter: "B", text: "Odysseus proves that strength matters more than careful thought." },
            { letter: "C", text: "Odysseus lets curiosity beat caution, then thinks before he strikes." },
            { letter: "D", text: "Odysseus discovers that his men cannot be trusted to give advice." }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
