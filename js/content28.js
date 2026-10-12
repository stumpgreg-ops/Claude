/* SOL Labyrinth — The Odyssey: Circe (English 9 Unit 2, family ODY) */
/* Original retellings of Homer's Odyssey, Book 10 (the plot is public domain). No modern translation is quoted. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── tiny · level 1 ───────────── */
    {
      id: "ody-circe-winds",
      family: "ODY",
      episode: "circe",
      title: "The Bag of Winds",
      kind: "The Odyssey · 9.RL",
      blurb: "Home is in sight, until the crew opens a gift from the king of the winds.",
      level: 1,
      passage:
        "<p>" + N(1) + "Aeolus, king of the winds, gave Odysseus a leather bag tied shut with a silver cord. " +
        N(2) + "Inside it he had trapped every storm wind, leaving only the gentle West Wind to carry the ship home. " +
        N(3) + "For nine days they sailed, and on the tenth they could see the fires of Ithaca. " +
        N(4) + "Then Odysseus, worn out from steering, fell asleep. " +
        N(5) + "His men whispered that the bag must hold gold their captain would not share. " +
        N(6) + "They untied it, and the howling winds burst out and drove them far from home.</p>",
      claims: [
        {
          id: "why-open",
          sol: "9.RL.1.B",
          stem: "Based on sentence 5, why did the crew open the bag?",
          choices: [
            { letter: "A", text: "They thought Odysseus was hiding treasure from them." },
            { letter: "B", text: "They hoped to free more winds to speed the ship home." },
            { letter: "C", text: "Aeolus had told them to open it when they saw land." },
            { letter: "D", text: "They needed to find food after nine days at sea." }
          ],
          correct: "A"
        },
        {
          id: "crew",
          sol: "9.RL.1.C",
          stem: "Which words best describe the crew's behavior in sentences 5 and 6?",
          choices: [
            { letter: "A", text: "loyal and obedient" },
            { letter: "B", text: "patient and thoughtful" },
            { letter: "C", text: "suspicious and greedy" },
            { letter: "D", text: "brave and generous" }
          ],
          correct: "C"
        },
        {
          id: "worn",
          sol: "9.RV.1.C",
          stem: "In sentence 4, the phrase worn out most nearly means —",
          choices: [
            { letter: "A", text: "discouraged" },
            { letter: "B", text: "exhausted" },
            { letter: "C", text: "injured" },
            { letter: "D", text: "bored" }
          ],
          correct: "B"
        },
        {
          id: "s3",
          sol: "9.RL.3.A",
          stem: "The author includes sentence 3 mainly to show that —",
          choices: [
            { letter: "A", text: "the voyage had been slow and dangerous" },
            { letter: "B", text: "Ithaca was a crowded island full of busy people" },
            { letter: "C", text: "Odysseus had sailed in the wrong direction" },
            { letter: "D", text: "the men were close to home when disaster struck" }
          ],
          correct: "D"
        },
        {
          id: "lesson",
          sol: "9.RL.1.A",
          stem: "Which lesson about facing challenges does the story of the bag of winds best illustrate?",
          choices: [
            { letter: "A", text: "Greed and mistrust can ruin what was nearly won." },
            { letter: "B", text: "A long journey is easier when sailors take turns resting." },
            { letter: "C", text: "Gifts from a king should always be shared with everyone." },
            { letter: "D", text: "Sailors should never travel at night without a lookout." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── tiny · level 1 ───────────── */
    {
      id: "ody-circe-smoke",
      family: "ODY",
      episode: "circe",
      title: "Smoke Through the Oaks",
      kind: "The Odyssey · 9.RL",
      blurb: "One grieving ship reaches a strange island, and Odysseus goes looking.",
      level: 1,
      passage:
        "<p>" + N(1) + "After the giant Laestrygonians destroyed every ship in our fleet but mine, we rowed on, grieving for our lost friends. " +
        N(2) + "At last we reached Aeaea, the island of Circe, a goddess who was the daughter of Helios, the sun. " +
        N(3) + "I climbed a rocky lookout and saw smoke rising through the thick oak woods. " +
        N(4) + "On my way back, a great stag crossed my path, and I brought it down with my spear. " +
        N(5) + "That night my hungry men feasted, and for a little while they forgot their sorrow.</p>",
      claims: [
        {
          id: "smoke",
          sol: "9.RL.3.B",
          stem: "The smoke in sentence 3 most likely tells Odysseus that —",
          choices: [
            { letter: "A", text: "a storm is moving toward the island" },
            { letter: "B", text: "someone lives somewhere in the woods" },
            { letter: "C", text: "the Laestrygonians have followed the ship" },
            { letter: "D", text: "the oak forest has been destroyed by fire" }
          ],
          correct: "B"
        },
        {
          id: "stag",
          sol: "9.RL.1.C",
          stem: "Odysseus's actions in sentences 4 and 5 show that he is —",
          choices: [
            { letter: "A", text: "a careless hunter who wanders off alone" },
            { letter: "B", text: "a proud king who wants his men to praise him" },
            { letter: "C", text: "a resourceful leader who looks after his crew" },
            { letter: "D", text: "a frightened traveler who avoids the island" }
          ],
          correct: "C"
        },
        {
          id: "grieving",
          sol: "9.RV.1.C",
          stem: "In sentence 1, the word grieving most nearly means —",
          choices: [
            { letter: "A", text: "mourning" },
            { letter: "B", text: "racing" },
            { letter: "C", text: "arguing" },
            { letter: "D", text: "searching" }
          ],
          correct: "A"
        },
        {
          id: "helios",
          sol: "9.RV.1.F",
          stem: "Sentence 2 says that Circe is the daughter of Helios, the sun god. This detail mainly suggests that Circe —",
          choices: [
            { letter: "A", text: "lives on the sunniest island in the sea" },
            { letter: "B", text: "will help the men find their way home" },
            { letter: "C", text: "is afraid of strangers who arrive at night" },
            { letter: "D", text: "has power far greater than any mortal's" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "9.RL.2.C",
          stem: "How does the mood change from sentence 1 to sentence 5?",
          choices: [
            { letter: "A", text: "It moves from peaceful calm to sudden fear." },
            { letter: "B", text: "It moves from deep sorrow to brief comfort." },
            { letter: "C", text: "It moves from wild excitement to dull boredom." },
            { letter: "D", text: "It moves from anger to quiet suspicion." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── short · level 1 ───────────── */
    {
      id: "ody-circe-lots",
      family: "ODY",
      episode: "circe",
      title: "The Lot of Eurylochus",
      kind: "The Odyssey · 9.RL",
      blurb: "Half the crew walks into the woods and finds a stone house guarded by beasts that will not bite.",
      level: 1,
      passage:
        "<p>" + N(1) + "I divided my crew into two companies, one led by me and the other by Eurylochus. " +
        N(2) + "We shook marked lots in a bronze helmet, and the lot of Eurylochus jumped out first. " +
        N(3) + "So he set off with twenty-two men, and they wept as they went, and we wept behind them. " +
        N(4) + "In a clearing in the woods they found Circe's house, built of smooth, polished stone. " +
        N(5) + "Around it prowled wolves and mountain lions, yet the beasts did not attack. " +
        N(6) + "Circe had tamed them with her evil drugs, and as dogs crowd around their master when he comes home from a feast, wagging their tails for the treats he always brings, so these wild beasts fawned around the men. " +
        N(7) + "The men were terrified at the sight of those huge creatures. " +
        N(8) + "From inside the house came the voice of a woman singing as she wove at her great loom.</p>",
      claims: [
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "Sentence 6 contains an epic simile, a long comparison that uses like or as. What two things does it compare?",
          choices: [
            { letter: "A", text: "Circe's singing and the barking of a pack of hunting dogs" },
            { letter: "B", text: "the wild beasts and pet dogs greeting their master" },
            { letter: "C", text: "the men's fear and a dog's hunger for treats" },
            { letter: "D", text: "Eurylochus and a master returning from a feast" }
          ],
          correct: "B"
        },
        {
          id: "lots",
          sol: "9.RL.1.C",
          stem: "Odysseus's decision to draw lots in sentence 2 suggests that he —",
          choices: [
            { letter: "A", text: "lets chance decide fairly who must take the risk" },
            { letter: "B", text: "wants Eurylochus to face the danger in his place" },
            { letter: "C", text: "does not care which of his men are put in harm's way" },
            { letter: "D", text: "believes the gods have already chosen him to go" }
          ],
          correct: "A"
        },
        {
          id: "weep",
          sol: "9.RL.1.B",
          stem: "Why do the men weep in sentence 3?",
          choices: [
            { letter: "A", text: "They are angry that the lots were not fair." },
            { letter: "B", text: "They miss the sight of their homeland, Ithaca." },
            { letter: "C", text: "They fear they may never see one another again." },
            { letter: "D", text: "They are hungry and tired after the long, steep climb." }
          ],
          correct: "C"
        },
        {
          id: "fawned",
          sol: "9.RV.1.C",
          stem: "In sentence 6, the word fawned most nearly means —",
          choices: [
            { letter: "A", text: "attacked them with fury" },
            { letter: "B", text: "ran away quickly" },
            { letter: "C", text: "growled softly" },
            { letter: "D", text: "showed eager affection" }
          ],
          correct: "D"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          stem: "How does the setting described in sentences 4–6 create a sense of danger?",
          choices: [
            { letter: "A", text: "The house is so deep in the woods that the men become lost." },
            { letter: "B", text: "The stone house looks too small to hold twenty-two men." },
            { letter: "C", text: "Wild animals acting like tame pets hint at a strange power." },
            { letter: "D", text: "The wolves and lions block the path back to the ship." }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "The author most likely ends the passage with sentence 8 to —",
          choices: [
            { letter: "A", text: "make Circe seem calm and inviting despite the danger" },
            { letter: "B", text: "explain how Circe was able to tame the wolves and lions" },
            { letter: "C", text: "show that the men have arrived at the wrong house" },
            { letter: "D", text: "reveal that Eurylochus has already gone inside" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── short · level 2 · vocabulary ───────────── */
    {
      id: "ody-circe-feast-vocab",
      family: "ODY",
      episode: "circe",
      title: "The Goddess's Table",
      kind: "Vocabulary · 9.RV",
      blurb: "A rich meal, a drugged cup and a wand: words for Circe's trap.",
      level: 2,
      passage:
        "<p>" + N(1) + "Circe opened her shining doors and called the men inside, and all of them followed except Eurylochus, who suspected a trap. " +
        N(2) + "She seated them on fine chairs and served a <strong>lavish</strong> meal of cheese, barley meal, golden honey, and Pramnian wine. " +
        N(3) + "Into the wine she stirred a <strong>potent</strong> drug, strong enough to sink their minds into <strong>oblivion</strong>, so that they would forget their homeland entirely. " +
        N(4) + "When they had drunk, the <strong>malevolent</strong> goddess struck each man with her wand. " +
        N(5) + "At once they were <strong>transformed</strong>: they had the heads, voices, bristles, and bodies of pigs. " +
        N(6) + "Yet their minds stayed exactly as before, and they knew what had happened to them. " +
        N(7) + "She drove them, <strong>forlorn</strong> and grunting, into her sties and tossed them acorns and cornel berries to eat.</p>",
      claims: [
        {
          id: "lavish",
          sol: "9.RV.1.C",
          stem: "In sentence 2, the word lavish most nearly means —",
          choices: [
            { letter: "A", text: "plain and simple" },
            { letter: "B", text: "rich and plentiful" },
            { letter: "C", text: "cold and stale" },
            { letter: "D", text: "quick and careless" }
          ],
          correct: "B"
        },
        {
          id: "oblivion",
          sol: "9.RV.1.C",
          stem: "Based on the context of sentence 3, oblivion most nearly means —",
          choices: [
            { letter: "A", text: "a state of deep sleep" },
            { letter: "B", text: "a feeling of great joy" },
            { letter: "C", text: "a state of total forgetting" },
            { letter: "D", text: "a feeling of sudden fear" }
          ],
          correct: "C"
        },
        {
          id: "malevolent",
          sol: "9.RV.1.B",
          stem: "The prefix mal- means \"bad,\" and the Latin root vol means \"wish.\" Based on these word parts, a malevolent goddess (sentence 4) is one who —",
          choices: [
            { letter: "A", text: "wishes harm to others" },
            { letter: "B", text: "grants people's wishes" },
            { letter: "C", text: "cannot control her magic" },
            { letter: "D", text: "feels sorry for her guests" }
          ],
          correct: "A"
        },
        {
          id: "forlorn",
          sol: "9.RV.1.E",
          stem: "The author describes the men as forlorn (sentence 7) rather than simply sad. Forlorn suggests that the men felt —",
          choices: [
            { letter: "A", text: "slightly bored with their new home" },
            { letter: "B", text: "angry enough to fight back" },
            { letter: "C", text: "curious about what would happen next" },
            { letter: "D", text: "abandoned and without hope" }
          ],
          correct: "D"
        },
        {
          id: "minds",
          sol: "9.RL.1.B",
          stem: "Sentences 5 and 6 suggest that the men's punishment is especially cruel because —",
          choices: [
            { letter: "A", text: "the pigs are given nothing at all to eat" },
            { letter: "B", text: "they understand what they have become" },
            { letter: "C", text: "Eurylochus refuses to help them escape" },
            { letter: "D", text: "they have forgotten who they once were" }
          ],
          correct: "B"
        },
        {
          id: "eurylochus",
          sol: "9.RL.1.C",
          stem: "Eurylochus's choice in sentence 1 shows that he is —",
          choices: [
            { letter: "A", text: "greedy for the goddess's food" },
            { letter: "B", text: "jealous of his companions" },
            { letter: "C", text: "cautious and slow to trust" },
            { letter: "D", text: "too tired to walk any farther" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── medium · level 2 · verse ───────────── */
    {
      id: "ody-circe-eurylochus-verse",
      family: "ODY",
      episode: "circe",
      title: "Eurylochus Returns",
      kind: "Epic poetry · 9.RL",
      blurb: "One man runs back to the ship with a story he can barely tell.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Then back came Eurylochus, racing to the black ship,<br>" +
        L(2) + "but his tongue would not obey him when he tried to speak;<br>" +
        L(3) + "grief had struck him silent, and his eyes swam full of tears.<br>" +
        L(4) + "As a shepherd who has watched the wolves scatter all his flock<br>" +
        L(5) + "stumbles home at nightfall holding nothing but his staff,<br>" +
        L(6) + "so he stood among us, empty-handed, shaking.<br>" +
        L(7) + "At last, when we pressed him hard with questions, he spoke:<br>" +
        L(8) + "\"We found the stone house in the oak woods, great Odysseus,<br>" +
        L(9) + "and a voice singing within. She opened the bright doors,<br>" +
        L(10) + "and, trusting fools, they followed her. I alone stayed back,<br>" +
        L(11) + "for I smelled a trick. Not one came out, though I waited long.<br>" +
        L(12) + "Do not lead me there, my lord. Let us run while we still can<br>" +
        L(13) + "with all the men still left to us, and save ourselves at least.\"<br>" +
        L(14) + "But I hung my bronze sword at my side and took my bow and said,<br>" +
        L(15) + "\"Stay here by the ship, then. But I will go; I cannot leave them.\"" +
        "</p>",
      claims: [
        {
          id: "shepherd",
          sol: "9.RL.2.A",
          stem: "In lines 4–6, the epic simile compares Eurylochus to a shepherd in order to emphasize —",
          choices: [
            { letter: "A", text: "his skill at leading men through wild country" },
            { letter: "B", text: "his shock and helplessness after a terrible loss" },
            { letter: "C", text: "his fear of the wolves that guard Circe's house" },
            { letter: "D", text: "how quickly he had run all the way back to the ship" }
          ],
          correct: "B"
        },
        {
          id: "speech",
          sol: "9.RL.1.D",
          stem: "Eurylochus's speech in lines 8–13 reveals that he —",
          choices: [
            { letter: "A", text: "is fearful and wants to protect the men who remain" },
            { letter: "B", text: "is eager to go back and fight the goddess by himself" },
            { letter: "C", text: "blames Odysseus for losing the other ships" },
            { letter: "D", text: "believes Circe will welcome the rest of the crew" }
          ],
          correct: "A"
        },
        {
          id: "unknown",
          sol: "9.RL.1.B",
          stem: "Based on lines 10–11, readers can infer that Eurylochus —",
          choices: [
            { letter: "A", text: "saw Circe turn his companions into pigs" },
            { letter: "B", text: "went into the house and escaped through a window" },
            { letter: "C", text: "does not actually know what happened to the men" },
            { letter: "D", text: "was told by Circe to bring Odysseus back with him" }
          ],
          correct: "C"
        },
        {
          id: "fools",
          sol: "9.RV.1.E",
          stem: "In line 10, Eurylochus calls the men trusting fools. The connotation of this phrase is —",
          choices: [
            { letter: "A", text: "admiring, because trust is a sign of courage" },
            { letter: "B", text: "neutral, because it only reports what happened inside" },
            { letter: "C", text: "playful, because he is joking with his friends" },
            { letter: "D", text: "critical, because he believes they were careless" }
          ],
          correct: "D"
        },
        {
          id: "respond",
          sol: "9.RL.1.C",
          stem: "How does Odysseus respond to the challenge in lines 14–15?",
          choices: [
            { letter: "A", text: "He orders Eurylochus to lead him back to the house." },
            { letter: "B", text: "He takes the danger on himself rather than abandon his men." },
            { letter: "C", text: "He agrees to sail away at once because the risk is too great." },
            { letter: "D", text: "He punishes Eurylochus for leaving the others behind." }
          ],
          correct: "B"
        },
        {
          id: "eq",
          sol: "9.RL.1.A",
          stem: "How do lines 12–15 connect to the unit question, \"How do the challenges of life affect a person?\"",
          choices: [
            { letter: "A", text: "They show that a crisis can reveal who acts from fear and who acts from duty." },
            { letter: "B", text: "They show that wise people always avoid danger whenever they can." },
            { letter: "C", text: "They show that true leaders never feel afraid when facing a challenge." },
            { letter: "D", text: "They show that friends always agree with each other when in danger." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── medium · level 2 ───────────── */
    {
      id: "ody-circe-moly",
      family: "ODY",
      episode: "circe",
      title: "The Herb Called Moly",
      kind: "The Odyssey · 9.RL",
      blurb: "On the path to Circe's house, a god steps out of the woods with a gift and a plan.",
      level: 2,
      passage:
        "<p>" + N(1) + "On the path to Circe's house, Hermes of the golden wand met me in the shape of a young man. " +
        N(2) + "He grasped my hand and said, \"Where are you going alone, unlucky one? " +
        N(3) + "Your friends are penned in Circe's sties as swine; go to free them, and you will stay there with them. " +
        N(4) + "But carry this herb into her house, and it will guard your mind against her poisons.\" " +
        N(5) + "Then the messenger of the gods pulled the plant from the ground and showed me its nature. " +
        N(6) + "Its root was black, but its flower was as white as milk; the gods call it moly, and mortal men can hardly dig it up.</p>" +
        "<p>" + N(7) + "\"When Circe strikes you with her long wand,\" he told me, \"draw your sword and rush at her as if you mean to kill her. " +
        N(8) + "Then make her swear the great oath of the gods that she will plot no more harm against you.\" " +
        N(9) + "With that, Hermes went away toward high Olympus. " +
        N(10) + "I walked on to Circe's house, and my heart, as I went, was churning like a sea in a storm.</p>",
      claims: [
        {
          id: "hermes",
          sol: "9.RV.1.F",
          stem: "In Greek myth, Hermes is the messenger of the gods. His appearance in sentence 1 suggests that —",
          choices: [
            { letter: "A", text: "the gods want to punish Odysseus for his pride" },
            { letter: "B", text: "Odysseus will need help from the gods to succeed" },
            { letter: "C", text: "Circe has sent Hermes to lead Odysseus into a trap" },
            { letter: "D", text: "Odysseus has finally reached the home of the gods" }
          ],
          correct: "B"
        },
        {
          id: "moly",
          sol: "9.RL.2.B",
          stem: "The description of moly in sentence 6 mainly creates the impression that the herb is —",
          choices: [
            { letter: "A", text: "common and easy to find in the woods" },
            { letter: "B", text: "dangerous to anyone who touches it" },
            { letter: "C", text: "rare and filled with divine power" },
            { letter: "D", text: "useful only as food for Circe's pigs" }
          ],
          correct: "C"
        },
        {
          id: "instructions",
          sol: "9.RL.3.A",
          stem: "Hermes's instructions in sentences 7 and 8 mainly serve to —",
          choices: [
            { letter: "A", text: "foreshadow the confrontation that is coming" },
            { letter: "B", text: "explain why Hermes must leave for Olympus" },
            { letter: "C", text: "describe what Circe's house looks like inside" },
            { letter: "D", text: "show that Hermes does not trust Odysseus" }
          ],
          correct: "A"
        },
        {
          id: "courage",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows Odysseus's courage after he hears Hermes's warning?",
          choices: [
            { letter: "A", text: "Sentence 2, in which Hermes calls him unlucky" },
            { letter: "B", text: "Sentence 5, in which Hermes pulls up the plant" },
            { letter: "C", text: "Sentence 9, in which Hermes leaves for Olympus" },
            { letter: "D", text: "Sentence 10, in which he walks on to the house" }
          ],
          correct: "D"
        },
        {
          id: "churning",
          sol: "9.RV.1.C",
          stem: "In sentence 10, the word churning most nearly means —",
          choices: [
            { letter: "A", text: "stirring wildly" },
            { letter: "B", text: "resting quietly" },
            { letter: "C", text: "freezing slowly" },
            { letter: "D", text: "shining brightly" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is developed through Hermes's help in this passage?",
          choices: [
            { letter: "A", text: "Heroes should rely only on their own strength." },
            { letter: "B", text: "The gods punish anyone who enters their lands." },
            { letter: "C", text: "Courage works best when guided by wise advice." },
            { letter: "D", text: "Curiosity leads people into needless trouble." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── medium · level 2 ───────────── */
    {
      id: "ody-circe-oath",
      family: "ODY",
      episode: "circe",
      title: "The Oath of the Gods",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus drinks Circe's cup, draws his sword, and will not eat until his men are free.",
      level: 2,
      passage:
        "<p>" + N(1) + "Circe opened her shining doors, and I followed her in with dread. " +
        N(2) + "She stirred her drug into a golden cup, planning evil. " +
        N(3) + "I drank it, but the moly guarded my mind, and the drug had no power.</p>" +
        "<p>" + N(4) + "She struck me with her wand: \"Off to the sty!\" " +
        N(5) + "But I drew my sharp sword and rushed at her. " +
        N(6) + "As a dove that sees the hawk's shadow can only cower in the grass, so Circe screamed and clasped my knees. " +
        N(7) + "\"No man has ever drunk my potion and kept his mind,\" she cried. " +
        N(8) + "\"You must be Odysseus, whose coming Hermes foretold to me long ago.\"</p>" +
        "<p>" + N(9) + "I would not lower my sword until she swore the great oath of the gods to do me no harm, and she swore at once.</p>" +
        "<p>" + N(10) + "Her nymphs set out a feast, but I sat silent and would not eat. " +
        N(11) + "\"What decent man,\" I said, \"could feast before he saw his friends set free?\"</p>" +
        "<p>" + N(12) + "So Circe rubbed each pig with a salve, and they became men again, younger than before. " +
        N(13) + "They wept for joy, and even the goddess was moved to pity.</p>",
      claims: [
        {
          id: "dove",
          sol: "9.RL.2.A",
          stem: "The epic simile in sentence 6 compares Circe to a dove mainly to show that —",
          choices: [
            { letter: "A", text: "Circe is gentle and harmless by nature" },
            { letter: "B", text: "power has suddenly passed to Odysseus" },
            { letter: "C", text: "Circe is able to fly away from danger" },
            { letter: "D", text: "Odysseus is as cruel as a hunting hawk" }
          ],
          correct: "B"
        },
        {
          id: "cower",
          sol: "9.RV.1.C",
          stem: "In sentence 6, the word cower most nearly means —",
          choices: [
            { letter: "A", text: "shrink back in fear" },
            { letter: "B", text: "fight back fiercely" },
            { letter: "C", text: "fly away swiftly" },
            { letter: "D", text: "call out for help" }
          ],
          correct: "A"
        },
        {
          id: "oath",
          sol: "9.RV.1.F",
          stem: "In Greek myth, the great oath of the gods was a promise that even immortals could not break. Odysseus demands this oath in sentence 9 because he —",
          choices: [
            { letter: "A", text: "wants Circe to admit that he is stronger" },
            { letter: "B", text: "hopes to learn the way home to Ithaca" },
            { letter: "C", text: "needs a promise Circe cannot go back on" },
            { letter: "D", text: "knows Hermes will punish Circe himself" }
          ],
          correct: "C"
        },
        {
          id: "foretold",
          sol: "9.RL.1.B",
          stem: "Based on sentences 7 and 8, readers can infer that —",
          choices: [
            { letter: "A", text: "Circe has never met any traveler before Odysseus" },
            { letter: "B", text: "the gods knew long ago that Odysseus would come" },
            { letter: "C", text: "Hermes is secretly working against Odysseus" },
            { letter: "D", text: "Circe wanted Odysseus to come and free his men" }
          ],
          correct: "B"
        },
        {
          id: "refuse",
          sol: "9.RL.1.D",
          stem: "Odysseus's words in sentence 11 reveal that he —",
          choices: [
            { letter: "A", text: "is too frightened of Circe to eat her food" },
            { letter: "B", text: "dislikes the taste of the food on the island" },
            { letter: "C", text: "wants Circe to serve him a better feast" },
            { letter: "D", text: "puts his men's freedom above his own comfort" }
          ],
          correct: "D"
        },
        {
          id: "circe-change",
          sol: "9.RL.1.C",
          stem: "How does Circe change over the course of the passage?",
          choices: [
            { letter: "A", text: "She begins as a scheming enemy and becomes a host who keeps her oath." },
            { letter: "B", text: "She begins as a generous host and becomes a cruel, scheming enemy." },
            { letter: "C", text: "She begins afraid of Odysseus and stays afraid of him to the end." },
            { letter: "D", text: "She begins as a goddess and is turned into an ordinary mortal." }
          ],
          correct: "A"
        },
        {
          id: "s5",
          sol: "9.RL.3.A",
          stem: "The narrator includes sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "show that Circe's drink was not very strong" },
            { letter: "B", text: "suggest that Odysseus was not truly thirsty" },
            { letter: "C", text: "show that the gift from Hermes did its work" },
            { letter: "D", text: "explain why Circe's servants set the table" }
          ],
          correct: "C"
        },
        {
          id: "mood-shift",
          sol: "9.RL.2.C",
          stem: "How does the mood change from the first paragraph to the last?",
          choices: [
            { letter: "A", text: "from cheerful hope to gloom" },
            { letter: "B", text: "from curiosity to boredom" },
            { letter: "C", text: "from anger to calm quiet" },
            { letter: "D", text: "from dread to joyful relief" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── medium · level 2 ───────────── */
    {
      id: "ody-circe-year",
      family: "ODY",
      episode: "circe",
      title: "A Year on Aeaea",
      kind: "The Odyssey · 9.RL",
      blurb: "Feasts, a quarrel, a full year gone, and a journey no living man wants to make.",
      level: 2,
      passage:
        "<p>" + N(1) + "When I returned to the ship, my men crowded around me as children run to the door when a father they mourned as dead comes home. " +
        N(2) + "I told them to follow me to Circe's house.</p>" +
        "<p>" + N(3) + "Only Eurylochus stood in their way: \"Fools, remember the Cyclops! " +
        N(4) + "Our friends followed this reckless captain into that cave, and they died for it.\" " +
        N(5) + "Anger flooded me, and my hand went to my sword, but my comrades calmed me with gentle words. " +
        N(6) + "In the end Eurylochus followed us, for he feared my sharp rebuke.</p>" +
        "<p>" + N(7) + "So for a full year we sat feasting in Circe's house on endless meat and sweet wine. " +
        N(8) + "Then my crew called me aside: \"Captain, remember your own country.\"</p>" +
        "<p>" + N(9) + "That evening I begged the goddess to send us home. " +
        N(10) + "\"First you must journey to the House of Hades,\" she said, \"to consult the spirit of Tiresias, the blind prophet.\" " +
        N(11) + "My heart broke, and I sat down and wept.</p>" +
        "<p>" + N(12) + "At dawn we sailed, but Elpenor, the youngest, had slept on Circe's roof; he woke, forgot the ladder, and fell to his death.</p>",
      claims: [
        {
          id: "children",
          sol: "9.RL.2.A",
          stem: "The epic simile in sentence 1 compares the crew to children mainly to show —",
          choices: [
            { letter: "A", text: "how foolish and childish the crew has become" },
            { letter: "B", text: "that the men are much younger than Odysseus" },
            { letter: "C", text: "their joy and relief that their leader is alive" },
            { letter: "D", text: "that the men want to go home to their own families" }
          ],
          correct: "C"
        },
        {
          id: "eury-speech",
          sol: "9.RL.1.D",
          stem: "Eurylochus's speech in sentences 3 and 4 reveals that he —",
          choices: [
            { letter: "A", text: "trusts Circe more than he trusts Odysseus" },
            { letter: "B", text: "still blames Odysseus for the deaths of their friends" },
            { letter: "C", text: "wants to take Odysseus's place as captain of the ship" },
            { letter: "D", text: "is eager to see his transformed companions again" }
          ],
          correct: "B"
        },
        {
          id: "anger",
          sol: "9.RL.1.C",
          stem: "How does Odysseus respond to Eurylochus's challenge to his leadership in sentence 5?",
          choices: [
            { letter: "A", text: "He grows angry but lets his men calm him down." },
            { letter: "B", text: "He leaves Eurylochus behind to guard the ship." },
            { letter: "C", text: "He calmly admits that Eurylochus is right." },
            { letter: "D", text: "He orders the whole crew to stay down by the shore." }
          ],
          correct: "A"
        },
        {
          id: "nostos",
          sol: "9.RL.1.A",
          stem: "Nostos is the Greek word for homecoming. Which statement best expresses a theme about nostos developed in sentences 7 and 8?",
          choices: [
            { letter: "A", text: "A good host should never allow guests to leave." },
            { letter: "B", text: "It is wiser to stay where one is safe than to travel." },
            { letter: "C", text: "Comfort can make people lose sight of their goals." },
            { letter: "D", text: "The dead always know more than the living do." }
          ],
          correct: "C"
        },
        {
          id: "elpenor",
          sol: "9.RL.3.A",
          stem: "The narrator most likely includes the account of Elpenor in sentence 12 to —",
          choices: [
            { letter: "A", text: "show that the journey keeps costing lives" },
            { letter: "B", text: "explain why Circe's house had a ladder" },
            { letter: "C", text: "suggest Elpenor was the crew's bravest man" },
            { letter: "D", text: "prove that Circe had broken her oath" }
          ],
          correct: "A"
        },
        {
          id: "rebuke",
          sol: "9.RV.1.C",
          stem: "In sentence 6, the word rebuke most nearly means —",
          choices: [
            { letter: "A", text: "quiet praise" },
            { letter: "B", text: "sudden attack" },
            { letter: "C", text: "lasting silence" },
            { letter: "D", text: "sharp scolding" }
          ],
          correct: "D"
        },
        {
          id: "aeaea-setting",
          sol: "9.RL.3.B",
          stem: "How does the setting of Circe's house affect the crew in sentence 7?",
          choices: [
            { letter: "A", text: "Its hidden dangers keep the men always on guard." },
            { letter: "B", text: "Its food and comfort tempt them to stay too long." },
            { letter: "C", text: "Its darkness and gloom make them want to leave at once." },
            { letter: "D", text: "Its distance from the shore keeps them from the ship." }
          ],
          correct: "B"
        },
        {
          id: "weeps",
          sol: "9.RL.1.B",
          stem: "Based on sentences 10 and 11, readers can infer that Odysseus weeps because —",
          choices: [
            { letter: "A", text: "Circe refuses to let him and his men leave" },
            { letter: "B", text: "he does not want to say goodbye to Circe" },
            { letter: "C", text: "Tiresias has already told him he will die" },
            { letter: "D", text: "the road home now leads to the underworld" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
