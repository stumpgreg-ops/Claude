/* SOL Labyrinth — The Odyssey: the contest of the bow (English 9 Unit 2, family ODY)
 * Original retellings of Odyssey Books 21–22 (up to the start of the fight). The plot is
 * public domain; the wording here is new and does not follow any modern translation or textbook.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────── short · level 2 ───────────── */
    {
      id: "ody-bow-storeroom",
      family: "ODY",
      episode: "bow",
      title: "The Bow from the Storeroom",
      kind: "The Odyssey · 9.RL",
      blurb: "Penelope brings out her husband's great bow and sets the suitors a contest.",
      level: 2,
      passage:
        "<p>" + N(1) + "At last Athena put a plan into the mind of wise Penelope. " +
        N(2) + "She climbed the high stairs to the farthest storeroom, where her husband's treasures lay: bronze, gold, and hard gray iron. " +
        N(3) + "There hung the great curved bow that a friend had given Odysseus long ago, beside a quiver crowded with arrows. " +
        N(4) + "Penelope lifted the bow from its peg, sat down with it across her knees, and wept aloud. " +
        N(5) + "When she had cried her fill, she carried it down to the hall, and her maids followed with a chest holding twelve iron axe heads. " +
        N(6) + "Standing beside a pillar, a veil drawn across her face, she spoke to the suitors. " +
        N(7) + "\"For years you have feasted in this house, claiming that you wish to marry me. " +
        N(8) + "Here, then, is your contest. " +
        N(9) + "Whoever strings this bow most easily and sends an arrow through all twelve axes, I will follow him and leave this house, the home of my youth. " +
        N(10) + "Even so, I think I will remember it in my dreams.\"</p>",
      claims: [
        {
          id: "weeps",
          sol: "9.RL.1.C",
          stem: "In sentence 4, Penelope weeps over the bow. This detail suggests that she —",
          choices: [
            { letter: "A", text: "is afraid that the bow will break when it is used" },
            { letter: "B", text: "still loves and grieves for her missing husband" },
            { letter: "C", text: "is angry that Athena gave her such a hard task" },
            { letter: "D", text: "wishes she could keep the treasures for herself" }
          ],
          correct: "B"
        },
        {
          id: "quiver",
          sol: "9.RV.1.B",
          stem: "In sentence 3, the word quiver most nearly means —",
          choices: [
            { letter: "A", text: "a shaking movement caused by fear" },
            { letter: "B", text: "a wooden rack for drying animal hides" },
            { letter: "C", text: "a stand used to hold a warrior's shield" },
            { letter: "D", text: "a case that holds and carries arrows" }
          ],
          correct: "D"
        },
        {
          id: "xenia",
          sol: "9.RL.3.A",
          stem: "The Greeks called the custom of guest-friendship xenia: hosts fed travelers, and guests were expected not to take advantage. How does sentence 7 show that the suitors have broken this custom?",
          choices: [
            { letter: "A", text: "They have eaten the household's food for years without being asked to stay." },
            { letter: "B", text: "They have refused to bring any gifts to the storeroom of Odysseus." },
            { letter: "C", text: "They have asked Penelope to cover her face whenever she speaks." },
            { letter: "D", text: "They have tried to take the bow down from its peg without permission." }
          ],
          correct: "A"
        },
        {
          id: "contest",
          sol: "9.RL.3.B",
          stem: "Based on sentence 9, which conclusion about the contest is most reasonable?",
          choices: [
            { letter: "A", text: "Penelope expects the youngest suitor to win easily." },
            { letter: "B", text: "The contest is meant to be a friendly game with no prize." },
            { letter: "C", text: "Only a man with the strength and skill of Odysseus could win." },
            { letter: "D", text: "The suitors will be allowed to share the axes as prizes." }
          ],
          correct: "C"
        },
        {
          id: "dreams",
          sol: "9.RL.2.B",
          stem: "Penelope's final words in sentence 10 mainly show that she —",
          choices: [
            { letter: "A", text: "has forgotten what her life in the house was like" },
            { letter: "B", text: "is eager to leave and begin a happier life" },
            { letter: "C", text: "hopes the suitors will change the rules of the contest" },
            { letter: "D", text: "agrees to the contest but will mourn the life she loses" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme developed in this passage?",
          choices: [
            { letter: "A", text: "Faithfulness can endure even when hope seems nearly gone." },
            { letter: "B", text: "Treasure matters more to people than their memories." },
            { letter: "C", text: "Contests are the fairest way to settle every problem." },
            { letter: "D", text: "People should always obey the wishes of their guests." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── short · level 1 ───────────── */
    {
      id: "ody-bow-telemachus",
      family: "ODY",
      episode: "bow",
      title: "Telemachus Tries",
      kind: "The Odyssey · 9.RL",
      blurb: "The prince sets up the axes and very nearly strings the bow himself.",
      level: 1,
      passage:
        "<p>" + N(1) + "Telemachus dug a long trench across the floor of the hall and set the twelve axe heads upright in a straight line, stamping the earth firm around each one. " +
        N(2) + "Everyone marveled at how neatly he did it, though he had never seen the contest before. " +
        N(3) + "Then he stood on the threshold and took up the bow himself. " +
        N(4) + "Three times he strained to bend it, and three times it sprang back. " +
        N(5) + "On the fourth try he had nearly slipped the string over the tip when he caught a small shake of the head from the ragged beggar by the door. " +
        N(6) + "Telemachus laid the bow aside. " +
        N(7) + "\"It seems I am still too young and weak,\" he said, \"so let stronger men try.\"</p>",
      claims: [
        {
          id: "stops",
          sol: "9.RL.1.C",
          stem: "Based on sentences 5 and 6, why does Telemachus stop trying to string the bow?",
          choices: [
            { letter: "A", text: "His arms are too tired after digging the trench." },
            { letter: "B", text: "The suitors shout at him to give the others a turn." },
            { letter: "C", text: "He follows a silent signal from the disguised beggar." },
            { letter: "D", text: "He realizes the bow is about to snap in two." }
          ],
          correct: "C"
        },
        {
          id: "threshold",
          sol: "9.RV.1.B",
          stem: "In sentence 3, the word threshold most nearly means —",
          choices: [
            { letter: "A", text: "the strip of floor at the doorway of a room" },
            { letter: "B", text: "the highest seat at the head of the table" },
            { letter: "C", text: "the point at which a person loses patience" },
            { letter: "D", text: "the storeroom where weapons are kept" }
          ],
          correct: "A"
        },
        {
          id: "neatly",
          sol: "9.RL.3.B",
          stem: "The author includes sentence 2 mainly to show that Telemachus —",
          choices: [
            { letter: "A", text: "has watched his father hold this contest many times" },
            { letter: "B", text: "is more skilled and capable than people expected" },
            { letter: "C", text: "wants the suitors to praise him for his work" },
            { letter: "D", text: "hopes to delay the contest for as long as he can" }
          ],
          correct: "B"
        },
        {
          id: "three-times",
          sol: "9.RL.2.B",
          stem: "The repetition of \"three times\" in sentence 4 mainly helps to —",
          choices: [
            { letter: "A", text: "show that Telemachus is careless with the bow" },
            { letter: "B", text: "suggest that the suitors are cheering him on" },
            { letter: "C", text: "explain why the axes must stand in a straight line" },
            { letter: "D", text: "stress how hard the bow is for anyone to string" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "9.RL.2.C",
          stem: "Sentence 7 is an example of irony because readers know that Telemachus —",
          choices: [
            { letter: "A", text: "was strong enough to string the bow and chose not to" },
            { letter: "B", text: "is older than every suitor in the hall" },
            { letter: "C", text: "secretly plans to leave Ithaca that night" },
            { letter: "D", text: "never wanted to touch the bow in the first place" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme suggested by the whole passage?",
          choices: [
            { letter: "A", text: "Young people should never try difficult tasks." },
            { letter: "B", text: "Winning a contest is the best way to earn respect." },
            { letter: "C", text: "Self-control can matter more than showing off one's strength." },
            { letter: "D", text: "A family's treasures should stay locked away." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── medium · level 3 ───────────── */
    {
      id: "ody-bow-suitors",
      family: "ODY",
      episode: "bow",
      title: "Soft Hands and Excuses",
      kind: "The Odyssey · 9.RL",
      blurb: "One by one the suitors fail, and their leaders look for a way out.",
      level: 3,
      passage:
        "<p>" + N(1) + "The first suitor to rise was Leodes, the only one among them who had ever been troubled by the others' greed. " +
        N(2) + "His soft hands, which had never done hard work, ached long before the bow bent even slightly. " +
        N(3) + "\"Friends, I cannot string it,\" he groaned, \"and I predict that this bow will break the spirit of many men here today.\" " +
        N(4) + "Antinous scolded him for his gloomy words and ordered the goatherd to build up the fire and bring a cake of fat. " +
        N(5) + "The young men warmed the bow and rubbed it with grease, hoping to make the stiff wood give. " +
        N(6) + "Still, one after another, they failed. " +
        N(7) + "Then Eurymachus, a leader of the suitors, turned the bow over and over before the flames, yet he could not bend it either. " +
        N(8) + "\"It is not losing the queen that hurts me,\" he said bitterly. " +
        N(9) + "\"It is the shame, for people not yet born will hear that we were weaklings compared to Odysseus.\" " +
        N(10) + "Antinous quickly found an excuse. " +
        N(11) + "\"Today is a holy feast of Apollo, the archer god,\" he declared. " +
        N(12) + "\"No one should be bending bows. " +
        N(13) + "Let us drink now, and tomorrow we will honor Apollo with sacrifices and finish the contest.\"</p>",
      claims: [
        {
          id: "foreshadow",
          sol: "9.RL.3.B",
          stem: "Leodes's prediction in sentence 3 most likely foreshadows that —",
          choices: [
            { letter: "A", text: "Leodes will become the next king of Ithaca" },
            { letter: "B", text: "the bow will crack when it is warmed by the fire" },
            { letter: "C", text: "the contest will bring disaster to the suitors" },
            { letter: "D", text: "Penelope will cancel the contest the next day" }
          ],
          correct: "C"
        },
        {
          id: "give",
          sol: "9.RV.1.B",
          stem: "In sentence 5, the word give most nearly means —",
          choices: [
            { letter: "A", text: "offer as a present" },
            { letter: "B", text: "bend under pressure" },
            { letter: "C", text: "make a loud sound" },
            { letter: "D", text: "break into pieces" }
          ],
          correct: "B"
        },
        {
          id: "soft-hands",
          sol: "9.RL.2.B",
          stem: "The description of Leodes's \"soft hands, which had never done hard work\" in sentence 2 suggests that the suitors —",
          choices: [
            { letter: "A", text: "have lived lives of ease that left them unfit for the task" },
            { letter: "B", text: "were injured while setting up the axes for the contest" },
            { letter: "C", text: "are skilled craftsmen who have never needed weapons" },
            { letter: "D", text: "spend their days training for battle in the courtyard" }
          ],
          correct: "A"
        },
        {
          id: "kleos",
          sol: "9.RL.3.A",
          stem: "Greek heroes valued kleos, the glory and good name that live on after a person dies. In sentence 9, Eurymachus is most upset because —",
          choices: [
            { letter: "A", text: "he has lost the chance to rule Odysseus's lands" },
            { letter: "B", text: "Penelope refused to speak to him after the contest" },
            { letter: "C", text: "Antinous made fun of him in front of the others" },
            { letter: "D", text: "future generations will remember the suitors as weak" }
          ],
          correct: "D"
        },
        {
          id: "excuse",
          sol: "9.RL.1.C",
          stem: "What do sentences 10–13 suggest about Antinous?",
          choices: [
            { letter: "A", text: "He is a deeply religious man who never breaks a holy law." },
            { letter: "B", text: "He believes Apollo will help him string the bow tomorrow." },
            { letter: "C", text: "He wants to save face by delaying his own turn at the bow." },
            { letter: "D", text: "He is ready to admit that Odysseus was the better man." }
          ],
          correct: "C"
        },
        {
          id: "central",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses the central idea of the passage?",
          choices: [
            { letter: "A", text: "The suitors work together to solve a difficult problem." },
            { letter: "B", text: "The men who have taken over Odysseus's home cannot match him." },
            { letter: "C", text: "Leodes proves that he is the wisest suitor in the hall." },
            { letter: "D", text: "The feast of Apollo is more important than any contest." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── short · level 2 ───────────── */
    {
      id: "ody-bow-scar",
      family: "ODY",
      episode: "bow",
      title: "The Scar",
      kind: "The Odyssey · 9.RL",
      blurb: "Outside in the courtyard, the beggar tests two herdsmen and then tells them who he is.",
      level: 2,
      passage:
        "<p>" + N(1) + "While the suitors struggled, the swineherd Eumaeus and the cowherd Philoetius slipped out of the hall, and the beggar followed them into the courtyard. " +
        N(2) + "\"Tell me,\" he said quietly, \"if Odysseus came home today, would you fight for him or for the suitors?\" " +
        N(3) + "Philoetius answered first. " +
        N(4) + "\"If only some god would bring him back, you would see how my hands would serve him!\" " +
        N(5) + "Eumaeus prayed the same prayer. " +
        N(6) + "Then the beggar knew their hearts were true. " +
        N(7) + "\"I am that man,\" he said, \"home after twenty years of suffering.\" " +
        N(8) + "He pulled aside his rags and showed them the long scar on his leg, where a wild boar had gashed him when he was a boy. " +
        N(9) + "The two men threw their arms around their master and wept, kissing his head and shoulders. " +
        N(10) + "Odysseus stopped them gently. " +
        N(11) + "\"Enough, or someone will see. " +
        N(12) + "Eumaeus, put the bow in my hands when the time comes, and tell the women to lock their doors. " +
        N(13) + "Philoetius, bar the courtyard gate.\"</p>",
      claims: [
        {
          id: "irony",
          sol: "9.RL.2.C",
          stem: "In sentence 2, the beggar speaks of Odysseus as if he were someone else. This creates dramatic irony because —",
          choices: [
            { letter: "A", text: "the herdsmen have already guessed who the beggar is" },
            { letter: "B", text: "the suitors can hear every word from inside the hall" },
            { letter: "C", text: "Odysseus does not know whether he will ever get home" },
            { letter: "D", text: "readers know the beggar is Odysseus, but the herdsmen do not" }
          ],
          correct: "D"
        },
        {
          id: "loyalty",
          sol: "9.RL.3.A",
          stem: "The Greeks expected servants to stay loyal to their household, even when its master was gone. Which sentence best shows Philoetius's loyalty?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "B"
        },
        {
          id: "scar",
          sol: "9.RL.3.B",
          stem: "Odysseus shows the scar in sentence 8 mainly because —",
          choices: [
            { letter: "A", text: "it is proof of who he is that the herdsmen will recognize" },
            { letter: "B", text: "he wants the herdsmen to pity him for his old wounds" },
            { letter: "C", text: "he plans to hunt a wild boar after the contest" },
            { letter: "D", text: "the herdsmen asked him to prove he was a soldier" }
          ],
          correct: "A"
        },
        {
          id: "bar",
          sol: "9.RV.1.B",
          stem: "In sentence 13, the word bar most nearly means —",
          choices: [
            { letter: "A", text: "paint with stripes" },
            { letter: "B", text: "open wide" },
            { letter: "C", text: "fasten shut" },
            { letter: "D", text: "stand guard beside" }
          ],
          correct: "C"
        },
        {
          id: "control",
          sol: "9.RL.1.C",
          stem: "Sentences 10–13 show that, even in an emotional moment, Odysseus —",
          choices: [
            { letter: "A", text: "forgets about the suitors and wants to celebrate" },
            { letter: "B", text: "stays cautious and focused on his plan" },
            { letter: "C", text: "doubts that the herdsmen will really help him" },
            { letter: "D", text: "would rather leave quietly than face the suitors" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of the passage?",
          choices: [
            { letter: "A", text: "Strangers should never be trusted with a secret." },
            { letter: "B", text: "Old injuries are best kept hidden from others." },
            { letter: "C", text: "Servants should obey whoever holds power in a house." },
            { letter: "D", text: "Loyalty that is tested and proven deserves to be trusted." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── medium · level 3 ───────────── */
    {
      id: "ody-bow-request",
      family: "ODY",
      episode: "bow",
      title: "The Beggar's Request",
      kind: "The Odyssey · 9.RL",
      blurb: "The ragged stranger asks for a turn with the bow, and the suitors explode.",
      level: 3,
      passage:
        "<p>" + N(1) + "Back in the hall, the beggar spoke up humbly. " +
        N(2) + "\"Noble suitors, let me hold the polished bow, to test whether my hands still have the strength they once had.\" " +
        N(3) + "The suitors were furious, secretly afraid that he might succeed. " +
        N(4) + "\"Wretched stranger,\" snapped Antinous, \"is it not enough that you eat at our table? " +
        N(5) + "The wine has addled your wits. " +
        N(6) + "Touch that bow, and we will ship you off to a cruel king who shows no mercy.\" " +
        N(7) + "Then Penelope spoke. " +
        N(8) + "\"Antinous, it is wrong to insult a guest whom Telemachus has welcomed. " +
        N(9) + "Do you truly fear that this poor man will carry me off as his bride? " +
        N(10) + "If he strings the bow, I will give him a fine cloak, a sword, and sandals, and send him wherever he wishes.\" " +
        N(11) + "But Telemachus told his mother to go up to her room, since he was master of the house and would decide who held the bow. " +
        N(12) + "She went, wondering at her son's new authority. " +
        N(13) + "Eumaeus picked up the bow, and the suitors jeered so loudly that he nearly set it down. " +
        N(14) + "Telemachus shouted at him to keep going, and the swineherd carried it over and placed it in his master's hands.</p>",
      claims: [
        {
          id: "addled",
          sol: "9.RV.1.B",
          stem: "In sentence 5, the word addled most nearly means —",
          choices: [
            { letter: "A", text: "sharpened" },
            { letter: "B", text: "warmed" },
            { letter: "C", text: "muddled" },
            { letter: "D", text: "emptied" }
          ],
          correct: "C"
        },
        {
          id: "our-table",
          sol: "9.RL.2.C",
          stem: "Antinous's question in sentence 4 is ironic mainly because —",
          choices: [
            { letter: "A", text: "the beggar has not eaten anything since he arrived" },
            { letter: "B", text: "the table and food actually belong to the beggar himself" },
            { letter: "C", text: "Antinous is the only suitor who has shared his food" },
            { letter: "D", text: "Penelope has ordered the servants to stop serving food" }
          ],
          correct: "B"
        },
        {
          id: "xenia",
          sol: "9.RL.3.A",
          stem: "Xenia, the Greek custom of guest-friendship, required hosts to protect and honor strangers. In sentence 8, Penelope uses this custom to —",
          choices: [
            { letter: "A", text: "remind Antinous that insulting a welcomed guest is shameful" },
            { letter: "B", text: "ask the beggar to leave the palace before the contest ends" },
            { letter: "C", text: "warn Telemachus that he has welcomed too many guests" },
            { letter: "D", text: "explain why the suitors may not eat in the great hall" }
          ],
          correct: "A"
        },
        {
          id: "authority",
          sol: "9.RL.1.C",
          stem: "Sentences 11 and 12 mainly show that Telemachus —",
          choices: [
            { letter: "A", text: "is angry with his mother for defending the beggar" },
            { letter: "B", text: "wants to string the bow again while she is away" },
            { letter: "C", text: "is afraid the suitors will harm him if she stays" },
            { letter: "D", text: "has grown into a young man who takes charge" }
          ],
          correct: "D"
        },
        {
          id: "suspense",
          sol: "9.RL.3.B",
          stem: "How do sentences 13 and 14 add to the tension of the scene?",
          choices: [
            { letter: "A", text: "They show the suitors agreeing to let the beggar try." },
            { letter: "B", text: "They reveal that Eumaeus has turned against his master." },
            { letter: "C", text: "They delay the bow's arrival as the suitors try to stop it." },
            { letter: "D", text: "They explain how the axes were set up for the contest." }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme developed across the whole passage?",
          choices: [
            { letter: "A", text: "The way people treat the powerless reveals their true character." },
            { letter: "B", text: "A person's appearance always shows who he really is." },
            { letter: "C", text: "Arguing in public is the best way to settle a quarrel." },
            { letter: "D", text: "Those who are poor should not ask for anything." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── short · level 2 · verse ───────────── */
    {
      id: "ody-bow-string",
      family: "ODY",
      episode: "bow",
      title: "The Song of the String",
      kind: "Epic poetry · 9.RL",
      blurb: "The beggar strings the bow as easily as a singer strings a lyre.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "But Odysseus, the man of many schemes, turned the great bow in his hands.<br>" +
        L(2) + "As a skilled singer, tuning his lyre for a feast,<br>" +
        L(3) + "stretches a new string and fastens it with ease,<br>" +
        L(4) + "so, without effort, Odysseus strung the mighty bow.<br>" +
        L(5) + "He plucked the string, and it sang out sweetly,<br>" +
        L(6) + "clear as a swallow's cry. The suitors' faces went pale,<br>" +
        L(7) + "and Zeus sent thunder rolling across the sky.<br>" +
        L(8) + "Glad at the sign, Odysseus fitted an arrow and let it fly.<br>" +
        L(9) + "The bronze-tipped shaft passed clean through every axe,<br>" +
        L(10) + "from the first to the last.<br>" +
        L(11) + "Then he threw off his rags, sprang to the threshold,<br>" +
        L(12) + "and turned the bow toward Antinous." +
        "</p>",
      claims: [
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "Lines 2–4 contain an epic simile, a long comparison using \"as\" and \"so.\" The simile mainly helps readers understand that Odysseus —",
          choices: [
            { letter: "A", text: "once earned his living as a traveling singer" },
            { letter: "B", text: "is planning to play music at the suitors' feast" },
            { letter: "C", text: "strings the bow with the ease of a skilled artist" },
            { letter: "D", text: "has trouble fitting the string onto the bow" }
          ],
          correct: "C"
        },
        {
          id: "epithet",
          sol: "9.RV.1.F",
          stem: "In line 1, Odysseus is called \"the man of many schemes.\" This epithet, a descriptive phrase repeated for a character, reminds readers that —",
          choices: [
            { letter: "A", text: "his disguise is part of a clever plan now unfolding" },
            { letter: "B", text: "he has forgotten how to use the bow" },
            { letter: "C", text: "he cares more about riches than his family" },
            { letter: "D", text: "the suitors have tricked him into the contest" }
          ],
          correct: "A"
        },
        {
          id: "pale",
          sol: "9.RL.1.C",
          stem: "Lines 5–6 suggest that the suitors' faces go pale because they —",
          choices: [
            { letter: "A", text: "are ashamed that a beggar is singing in the hall" },
            { letter: "B", text: "are frightened by the sudden storm outside" },
            { letter: "C", text: "have been drinking too much wine at the feast" },
            { letter: "D", text: "suddenly sense that the beggar is dangerous" }
          ],
          correct: "D"
        },
        {
          id: "thunder",
          sol: "9.RL.3.A",
          stem: "The ancient Greeks believed the gods sent signs to show their will. In lines 7–8, Zeus's thunder mainly signals that —",
          choices: [
            { letter: "A", text: "the gods are angry that the contest has begun" },
            { letter: "B", text: "the king of the gods approves of what Odysseus is doing" },
            { letter: "C", text: "a storm will soon force the suitors to stay indoors" },
            { letter: "D", text: "Odysseus should wait until the next day to shoot" }
          ],
          correct: "B"
        },
        {
          id: "shaft",
          sol: "9.RV.1.B",
          stem: "In line 9, the word shaft most nearly means —",
          choices: [
            { letter: "A", text: "a beam of sunlight" },
            { letter: "B", text: "an arrow" },
            { letter: "C", text: "a deep tunnel" },
            { letter: "D", text: "a handle of an axe" }
          ],
          correct: "B"
        },
        {
          id: "rags",
          sol: "9.RL.1.A",
          stem: "In lines 11–12, Odysseus throws off his rags and turns the bow toward Antinous. What idea does this ending most strongly suggest?",
          choices: [
            { letter: "A", text: "The contest is over, and Odysseus will leave the palace." },
            { letter: "B", text: "Odysseus has decided to give the bow to Antinous." },
            { letter: "C", text: "The suitors have earned a second chance to win." },
            { letter: "D", text: "The disguise is over, and Odysseus is reclaiming his home." }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
