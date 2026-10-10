/* SOL Labyrinth — The Odyssey: the Cattle of Helios (English 9 Unit 2, family ODY)
 * Original retellings of Odyssey Book 12 (Thrinacia). No modern translation or textbook text.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────── tiny · level 1 ───────── */
    {
      id: "ody-helios-two-warnings",
      family: "ODY",
      episode: "helios",
      title: "Two Warnings",
      kind: "The Odyssey · 9.RL",
      blurb: "Before he ever sees Thrinacia, Odysseus is told what will happen there.",
      level: 1,
      passage:
        "<p>" + N(1) + "Before Odysseus ever saw the island of Thrinacia, he had been warned about it twice. " +
        N(2) + "In the Underworld, the blind prophet Tiresias told him that the sun god Helios kept his cattle there. " +
        N(3) + "Later, the goddess Circe gave him the same warning. " +
        N(4) + "If the men left the cattle unharmed, they might still reach Ithaca after much hardship. " +
        N(5) + "If they hurt even one animal, the ship and crew would be destroyed, and Odysseus would come home late, alone, and miserable.</p>",
      claims: [
        {
          id: "open",
          sol: "9.RL.3.A",
          stem: "The author begins with sentence 1, which says Odysseus was warned twice, mainly to —",
          choices: [
            { letter: "A", text: "explain why Odysseus chose to sail straight toward Thrinacia" },
            { letter: "B", text: "show that Tiresias and Circe disagreed about the island" },
            { letter: "C", text: "describe what the island of Thrinacia looked like from the sea" },
            { letter: "D", text: "signal that the island holds a danger too serious to ignore" }
          ],
          correct: "D"
        },
        {
          id: "quality",
          sol: "9.RL.1.C",
          stem: "According to the warnings, what quality will Odysseus and his crew most need on Thrinacia?",
          choices: [
            { letter: "A", text: "courage to fight the monsters that guard the island" },
            { letter: "B", text: "self-control to leave the sun god's cattle alone" },
            { letter: "C", text: "speed to row past the island before nightfall" },
            { letter: "D", text: "cleverness to trick the sun god into helping them" }
          ],
          correct: "B"
        },
        {
          id: "hardship",
          sol: "9.RV.1.C",
          stem: "In sentence 4 of \"Two Warnings,\" the word hardship most nearly means —",
          choices: [
            { letter: "A", text: "difficulty and suffering" },
            { letter: "B", text: "a ship built of hard wood" },
            { letter: "C", text: "a gift from the gods" },
            { letter: "D", text: "a long period of calm" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which idea about choices is expressed by the two warnings in sentences 4 and 5?",
          choices: [
            { letter: "A", text: "The gods never forgive anyone who makes even one small mistake." },
            { letter: "B", text: "Hard work always earns a traveler a safe trip home." },
            { letter: "C", text: "One careless act can cause suffering that lasts for years." },
            { letter: "D", text: "A leader should always do whatever the crew wants." }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Based on sentence 5, readers can infer that Odysseus's safe return home —",
          choices: [
            { letter: "A", text: "depends only on his own strength as a warrior" },
            { letter: "B", text: "was already settled before he left the Underworld" },
            { letter: "C", text: "depends partly on choices his crew will make" },
            { letter: "D", text: "will happen sooner if he ignores the warnings" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── tiny · level 1 ───────── */
    {
      id: "ody-helios-sweet-sleep",
      family: "ODY",
      episode: "helios",
      title: "Sweet Sleep",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus goes off alone to pray, and the gods send him to sleep at the worst moment.",
      level: 1,
      passage:
        "<p>" + N(1) + "After a month of contrary winds, the crew was weak with hunger. " +
        N(2) + "Odysseus walked inland alone to find a quiet place to pray. " +
        N(3) + "He washed his hands, found shelter from the wind, and begged the gods of Olympus to show him a way home. " +
        N(4) + "Instead of an answer, the gods poured sweet sleep over his eyes. " +
        N(5) + "Back on the beach, Eurylochus saw his chance and called the hungry men together.</p>",
      claims: [
        {
          id: "respond",
          sol: "9.RL.1.C",
          stem: "Sentence 3 shows that Odysseus responds to the crisis on Thrinacia by —",
          choices: [
            { letter: "A", text: "asking the gods for guidance" },
            { letter: "B", text: "blaming his crew for the winds" },
            { letter: "C", text: "secretly hunting the sun god's cattle" },
            { letter: "D", text: "deciding to give up on going home" }
          ],
          correct: "A"
        },
        {
          id: "contrary",
          sol: "9.RV.1.C",
          stem: "In sentence 1 of \"Sweet Sleep,\" the word contrary most nearly means —",
          choices: [
            { letter: "A", text: "gentle and warming" },
            { letter: "B", text: "helpful and steady for sailing" },
            { letter: "C", text: "opposing their course" },
            { letter: "D", text: "quick and brief" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "Why does the author end the passage with Eurylochus calling the men together in sentence 5?",
          choices: [
            { letter: "A", text: "to reveal that the crew has already caught enough fish to eat" },
            { letter: "B", text: "to explain that Eurylochus also went inland to pray to the gods" },
            { letter: "C", text: "to describe the beach where the crew had pulled up the ship" },
            { letter: "D", text: "to build suspense about what happens while Odysseus sleeps" }
          ],
          correct: "D"
        },
        {
          id: "timing",
          sol: "9.RL.1.B",
          stem: "Based on the passage, readers can infer that the sleep described in sentence 4 —",
          choices: [
            { letter: "A", text: "cures the crew of their terrible hunger" },
            { letter: "B", text: "comes at the worst possible time for Odysseus" },
            { letter: "C", text: "is a reward from the gods for Odysseus's courage at sea" },
            { letter: "D", text: "lasts for the rest of the whole month" }
          ],
          correct: "B"
        },
        {
          id: "sweet",
          sol: "9.RL.2.B",
          stem: "The word sweet in sentence 4 creates a sharp contrast with —",
          choices: [
            { letter: "A", text: "the bitter trouble that the sleep will soon bring" },
            { letter: "B", text: "the salty taste of the fish that the hungry men had caught" },
            { letter: "C", text: "the bright sunlight that falls on the island" },
            { letter: "D", text: "the loud prayers Odysseus shouted on the hill" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────── short · level 1 ───────── */
    {
      id: "ody-helios-wrong-winds",
      family: "ODY",
      episode: "helios",
      title: "The Month of Wrong Winds",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus tells how the winds trapped his crew on Thrinacia until the food ran out.",
      level: 1,
      passage:
        "<p>" + N(1) + "That first night on Thrinacia, Zeus the cloud-gatherer stirred up a howling storm and hid both land and sea in darkness. " +
        N(2) + "When Dawn appeared with her rose-red fingers, we dragged our ship into a hollow cave, safe from the waves. " +
        N(3) + "There I reminded my men of their oath: \"We have food and wine in the ship, so keep your hands off these cattle, for they belong to Helios, who sees and hears everything.\" " +
        N(4) + "Then for a whole month the south wind blew without stopping, and the east wind joined it, and no other wind ever came. " +
        N(5) + "As long as Circe's bread and wine lasted, the men obeyed. " +
        N(6) + "But when the stores ran out, they roamed the shore with bent hooks, catching whatever fish and birds they could, and hunger gnawed at their bellies.</p>",
      claims: [
        {
          id: "weather",
          sol: "9.RL.3.B",
          stem: "How does the weather described in sentence 4 create the main problem in the passage?",
          choices: [
            { letter: "A", text: "It blows the ship far out to sea, away from the island's shore." },
            { letter: "B", text: "It carries the smell of the cattle into the crew's cave." },
            { letter: "C", text: "It traps the crew on the island until their food runs out." },
            { letter: "D", text: "It floods the meadows so that the cattle are hard to find." }
          ],
          correct: "C"
        },
        {
          id: "obey",
          sol: "9.RL.1.C",
          stem: "Sentence 5 suggests that the crew members —",
          choices: [
            { letter: "A", text: "never planned to keep their oath to Odysseus" },
            { letter: "B", text: "keep their promise only while they are fed" },
            { letter: "C", text: "trust Circe more than they trust Odysseus" },
            { letter: "D", text: "prefer bread and wine to any kind of meat" }
          ],
          correct: "B"
        },
        {
          id: "allusion",
          sol: "9.RV.1.F",
          stem: "Odysseus warns that Helios \"sees and hears everything\" (sentence 3). This description fits the sun god because —",
          choices: [
            { letter: "A", text: "the sun god has lost his sight and must depend on his hearing" },
            { letter: "B", text: "the cattle will call out to warn Helios of any danger" },
            { letter: "C", text: "Zeus has ordered Helios to spy on Odysseus's crew" },
            { letter: "D", text: "the sun shines on the whole earth, so nothing escapes it" }
          ],
          correct: "D"
        },
        {
          id: "gnawed",
          sol: "9.RL.2.B",
          stem: "The phrase hunger gnawed at their bellies in sentence 6 helps the reader —",
          choices: [
            { letter: "A", text: "feel how painful and constant the men's hunger was" },
            { letter: "B", text: "understand that wild animals attacked the sailors" },
            { letter: "C", text: "see that the birds were too small to be worth eating" },
            { letter: "D", text: "picture the men eating the fish without cooking it" }
          ],
          correct: "A"
        },
        {
          id: "stores",
          sol: "9.RV.1.C",
          stem: "In sentence 6 of \"The Month of Wrong Winds,\" the word stores most nearly means —",
          choices: [
            { letter: "A", text: "shops in a busy town" },
            { letter: "B", text: "supplies of food" },
            { letter: "C", text: "stories told at night" },
            { letter: "D", text: "storms out at sea" }
          ],
          correct: "B"
        },
        {
          id: "next",
          sol: "9.RL.1.B",
          stem: "Based on sentences 5 and 6, readers can infer that —",
          choices: [
            { letter: "A", text: "Odysseus will soon sail away with a ship full of food" },
            { letter: "B", text: "the fish and birds will easily feed the men for months" },
            { letter: "C", text: "the men's hunger may soon tempt them to break their oath" },
            { letter: "D", text: "Helios will send extra cattle to reward the crew's patience" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── short · level 2 · vocabulary ───────── */
    {
      id: "ody-helios-forbidden-herds",
      family: "ODY",
      episode: "helios",
      title: "The Forbidden Herds",
      kind: "Vocabulary · 9.RV",
      blurb: "Six words about the sun god's cattle and the hunger that tempted the crew.",
      level: 2,
      passage:
        "<p>" + N(1) + "On the island of Thrinacia grazed seven herds of cattle and seven flocks of sheep, fifty animals in each. " +
        N(2) + "These creatures were <strong>immortal</strong>: they were never born, and they never died. " +
        N(3) + "Two nymphs, Phaethusa and Lampetia, daughters of the sun god Helios, <strong>tended</strong> them, guiding them across the meadows. " +
        N(4) + "Odysseus's crew swore not to touch the herds while their <strong>provisions</strong> from Circe lasted. " +
        N(5) + "But a month of storms kept them on the island, and soon the men were <strong>famished</strong>. " +
        N(6) + "To kill the sun god's cattle would be <strong>sacrilege</strong>, an insult to a god, yet hunger made the meat seem worth the risk. " +
        N(7) + "Helios, who sees all things, would soon learn of it and demand <strong>retribution</strong>.</p>",
      claims: [
        {
          id: "mort",
          sol: "9.RV.1.B",
          stem: "The word immortal (sentence 2) is built from the prefix im-, meaning \"not,\" and the Latin root mort, meaning \"death.\" Which word contains the same root?",
          choices: [
            { letter: "A", text: "motor" },
            { letter: "B", text: "mortality" },
            { letter: "C", text: "immovable" },
            { letter: "D", text: "memorandum" }
          ],
          correct: "B"
        },
        {
          id: "tended",
          sol: "9.RV.1.C",
          stem: "In sentence 3 of \"The Forbidden Herds,\" the word tended most nearly means —",
          choices: [
            { letter: "A", text: "watched over and cared for" },
            { letter: "B", text: "leaned or bent in one direction" },
            { letter: "C", text: "counted one at a time" },
            { letter: "D", text: "frightened and scattered" }
          ],
          correct: "A"
        },
        {
          id: "famished",
          sol: "9.RV.1.E",
          stem: "The author chooses famished in sentence 5 instead of hungry mainly to suggest that the men were —",
          choices: [
            { letter: "A", text: "only slightly hungry after a short wait for food" },
            { letter: "B", text: "eager to become famous for their deeds" },
            { letter: "C", text: "so hungry that they were close to starving" },
            { letter: "D", text: "being punished by Circe for their greed" }
          ],
          correct: "C"
        },
        {
          id: "sacrilege",
          sol: "9.RV.1.C",
          stem: "Which phrase from sentence 6 best helps the reader understand the meaning of sacrilege?",
          choices: [
            { letter: "A", text: "To kill" },
            { letter: "B", text: "the sun god's cattle" },
            { letter: "C", text: "worth the risk" },
            { letter: "D", text: "an insult to a god" }
          ],
          correct: "D"
        },
        {
          id: "retribution",
          sol: "9.RV.1.C",
          stem: "In sentence 7 of \"The Forbidden Herds,\" the word retribution most nearly means —",
          choices: [
            { letter: "A", text: "punishment given in return for a wrong" },
            { letter: "B", text: "a reward given for loyal service" },
            { letter: "C", text: "a second chance to make things right again" },
            { letter: "D", text: "a long journey back to one's home" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "9.RL.1.C",
          stem: "Based on sentences 4–6, how does the crew's attitude toward their oath change?",
          choices: [
            { letter: "A", text: "They grow more respectful of it as the storms continue." },
            { letter: "B", text: "They forget about it on the very first night." },
            { letter: "C", text: "They decide that it applies only to the sheep." },
            { letter: "D", text: "They keep it while fed, but hunger makes them waver." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────── medium · level 2 · verse ───────── */
    {
      id: "ody-helios-eurylochus-speech",
      family: "ODY",
      episode: "helios",
      title: "Eurylochus Speaks",
      kind: "Epic poetry · 9.RL",
      blurb: "While Odysseus sleeps, Eurylochus persuades the starving crew to break their oath.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "But while I slept, Eurylochus stood up among the crew<br>" +
        L(2) + "and made a speech that led them all to ruin:<br>" +
        L(3) + "\"Hear me, my friends, who have suffered so much here at my side.<br>" +
        L(4) + "Every kind of death is hateful to us poor mortals,<br>" +
        L(5) + "but to starve, to waste away by inches, is the worst of all.<br>" +
        L(6) + "Come, let us drive off the best of the sun god's cattle<br>" +
        L(7) + "and offer them to the deathless gods who hold the wide heaven.<br>" +
        L(8) + "And if we ever reach Ithaca, the land of our fathers,<br>" +
        L(9) + "we will raise a rich temple to Helios and fill<br>" +
        L(10) + "its halls with splendid gifts to soothe his anger.<br>" +
        L(11) + "But if he rages over his straight-horned cattle<br>" +
        L(12) + "and the other gods agree to wreck our ship,<br>" +
        L(13) + "then I would sooner gulp the salt sea once and die<br>" +
        L(14) + "than shrink to bones, little by little, on this empty island.\"<br>" +
        L(15) + "So he spoke, and all the others roared their approval,<br>" +
        L(16) + "like starving wolves that howl around the leader of the pack." +
        "</p>",
      claims: [
        {
          id: "speech",
          sol: "9.RL.1.D",
          stem: "Eurylochus's speech in lines 3–14 shows that he is someone who —",
          choices: [
            { letter: "A", text: "obeys every single order his captain gives without question" },
            { letter: "B", text: "builds a persuasive case for doing what was forbidden" },
            { letter: "C", text: "has no fear at all of the gods or their punishments" },
            { letter: "D", text: "hopes to take Odysseus's place as king of Ithaca" }
          ],
          correct: "B"
        },
        {
          id: "wolves",
          sol: "9.RL.2.A",
          stem: "The epic simile in line 16 compares the shouting crew to wolves mainly to suggest that the men —",
          choices: [
            { letter: "A", text: "are desperate with hunger and eager to follow Eurylochus" },
            { letter: "B", text: "plan to hunt the wolves that roam the island for their meat" },
            { letter: "C", text: "are terrified of the dark and of the coming storm" },
            { letter: "D", text: "intend to attack Odysseus while he lies asleep" }
          ],
          correct: "A"
        },
        {
          id: "ruin",
          sol: "9.RL.3.A",
          stem: "In line 2, the narrator says the speech \"led them all to ruin\" before Eurylochus even begins. This detail is an example of —",
          choices: [
            { letter: "A", text: "flashback, because it interrupts the story to show an earlier time" },
            { letter: "B", text: "an epithet, because it gives Eurylochus a descriptive title" },
            { letter: "C", text: "foreshadowing, because the narrator hints at the outcome" },
            { letter: "D", text: "a simile, because it compares the speech to a dangerous road" }
          ],
          correct: "C"
        },
        {
          id: "soothe",
          sol: "9.RV.1.C",
          stem: "In line 10 of \"Eurylochus Speaks,\" the word soothe most nearly means —",
          choices: [
            { letter: "A", text: "increase" },
            { letter: "B", text: "explain" },
            { letter: "C", text: "reward" },
            { letter: "D", text: "calm" }
          ],
          correct: "D"
        },
        {
          id: "risk",
          sol: "9.RL.1.C",
          stem: "How does Eurylochus plan to handle the danger of angering Helios (lines 8–14)?",
          choices: [
            { letter: "A", text: "He claims that Helios will never notice a few missing cattle." },
            { letter: "B", text: "He promises a temple and would rather drown than starve if it fails." },
            { letter: "C", text: "He insists that the crew ask Odysseus for permission first." },
            { letter: "D", text: "He suggests that the men kill only the sheep and leave the cattle alone." }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which answer to the unit question, How do the challenges of life affect a person?, does Eurylochus's speech best develop?",
          choices: [
            { letter: "A", text: "Hard times always bring out a person's best qualities." },
            { letter: "B", text: "People who travel far from home for many years soon forget their gods." },
            { letter: "C", text: "Extreme suffering can lead people to justify breaking a promise." },
            { letter: "D", text: "A good speech can solve almost any practical problem." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────── medium · level 2 ───────── */
    {
      id: "ody-helios-sun-complaint",
      family: "ODY",
      episode: "helios",
      title: "The Sun God's Complaint",
      kind: "The Odyssey · 9.RL",
      blurb: "Helios learns of the slaughter and demands that Zeus punish Odysseus's crew.",
      level: 2,
      passage:
        "<p>" + N(1) + "Swift as a gull skimming the wave tops, Lampetia of the long robes ran to her father, Helios, and told him that my men had slaughtered his cattle. " +
        N(2) + "The sun god's anger blazed up at once, and he cried out among the immortals: " +
        N(3) + "\"Father Zeus, and all you blessed gods who live forever, punish the companions of Odysseus, son of Laertes! " +
        N(4) + "In their pride they have killed my cattle, the cattle I loved to look upon each morning as I climbed the starry sky and each evening as I turned back toward earth. " +
        N(5) + "If they do not pay me a fitting price, I will go down into the house of Hades and shine among the dead.\"</p>" +
        "<p>" + N(6) + "Zeus, who gathers the clouds, answered him: " +
        N(7) + "\"Helios, keep shining for the gods and for mortal men upon the grain-giving earth. " +
        N(8) + "As for those sailors, I will soon strike their swift ship with a white-hot thunderbolt and shatter it to pieces on the wine-dark sea.\"</p>" +
        "<p>" + N(9) + "I learned all this later from Calypso, who said she had heard it from Hermes, the messenger of the gods. " +
        N(10) + "But on that beach I knew nothing of their talk; I knew only the smell of roasting meat and the dread in my heart.</p>",
      claims: [
        {
          id: "helios",
          sol: "9.RL.1.D",
          stem: "Helios's speech in sentences 3–5 reveals that he —",
          choices: [
            { letter: "A", text: "feels personally wronged and expects the gods to act" },
            { letter: "B", text: "is willing to forgive the men if they apologize" },
            { letter: "C", text: "blames Odysseus alone for what the crew has done" },
            { letter: "D", text: "wants Zeus to give him new cattle to replace the ones that died" }
          ],
          correct: "A"
        },
        {
          id: "hades",
          sol: "9.RV.1.F",
          stem: "In Greek myth, Hades is the dark world of the dead. Based on Zeus's reply in sentence 7, why is Helios's threat in sentence 5 so serious?",
          choices: [
            { letter: "A", text: "Hades has forbidden Helios ever to enter the Underworld." },
            { letter: "B", text: "The ghosts of the dead would escape by following the light." },
            { letter: "C", text: "Gods and humans on earth would be left without sunlight." },
            { letter: "D", text: "Zeus plans to send Odysseus back to the Underworld." }
          ],
          correct: "C"
        },
        {
          id: "source",
          sol: "9.RL.3.A",
          stem: "Why does Odysseus, the narrator, include sentence 9 in his account?",
          choices: [
            { letter: "A", text: "to show that Calypso was the one who harmed the cattle" },
            { letter: "B", text: "to prove that Hermes had warned the crew before they ever landed" },
            { letter: "C", text: "to suggest that the gods were holding a feast on Olympus" },
            { letter: "D", text: "to explain how he knows what the gods said in his absence" }
          ],
          correct: "D"
        },
        {
          id: "hubris",
          sol: "9.RL.1.A",
          stem: "In sentence 4, Helios says the men acted \"in their pride.\" The Greeks called this kind of reckless pride hubris. Which theme of the episode does this idea support?",
          choices: [
            { letter: "A", text: "Pride is a useful quality for sailors far from home." },
            { letter: "B", text: "Placing one's own wants above a god's command leads to ruin." },
            { letter: "C", text: "Only kings and heroes are capable of real pride." },
            { letter: "D", text: "The gods secretly admire mortals who are bold enough to defy them." }
          ],
          correct: "B"
        },
        {
          id: "dread",
          sol: "9.RL.1.C",
          stem: "Sentence 10 shows that, at this moment, Odysseus feels —",
          choices: [
            { letter: "A", text: "proud that his men found a way to survive" },
            { letter: "B", text: "angry that Calypso kept the gods' plans secret" },
            { letter: "C", text: "afraid of what the slaughter will bring" },
            { letter: "D", text: "curious about how the meat had been cooked" }
          ],
          correct: "C"
        },
        {
          id: "gull",
          sol: "9.RL.2.A",
          stem: "The simile in sentence 1, Swift as a gull skimming the wave tops, mainly emphasizes —",
          choices: [
            { letter: "A", text: "how quickly news of the crime reaches Helios" },
            { letter: "B", text: "that Lampetia can change herself into a bird" },
            { letter: "C", text: "how calm the sea was on the day of the feast" },
            { letter: "D", text: "that Lampetia had been fishing along the shore" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────── long · level 3 ───────── */
    {
      id: "ody-helios-one-against-many",
      family: "ODY",
      episode: "helios",
      title: "One Against Many",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus tells the Phaeacians how his exhausted crew outvoted him at Thrinacia.",
      level: 3,
      passage:
        "<p>" + N(1) + "Lords of Phaeacia, when we had slipped past the whirlpool Charybdis and the cliff of Scylla, who snatched six of my best men from the deck and devoured them, we rowed on with heavy hearts. " +
        N(2) + "Soon a fair island rose before us out of the wine-dark sea. " +
        N(3) + "Even before we could see the shore, we heard the lowing of cattle in their pens and the bleating of sheep, and the sound struck my heart like a cold wave. " +
        N(4) + "For I remembered the words of blind Tiresias in the halls of the dead, and the words of Circe after him: both had told me to shun the island of Helios, the sun who brings joy to mortals, because our deadliest danger waited there.</p>" +
        "<p>" + N(5) + "So I stood up among my weary men and spoke: " +
        N(6) + "\"Friends, hear what the prophets told me. " +
        N(7) + "Here lies the worst evil we will ever meet. " +
        N(8) + "Bend your backs to the oars and drive our black ship past this island.\" " +
        N(9) + "At my words their spirits broke, and Eurylochus answered me with a bitter speech: " +
        N(10) + "\"You are a hard man, Odysseus. " +
        N(11) + "Your strength never fails and your limbs never tire; you must be made of iron through and through. " +
        N(12) + "Your comrades are worn out with rowing and lack of sleep, yet you will not let us set foot on land, where we could cook a decent supper. " +
        N(13) + "Instead you want us to wander blindly through the swift night. " +
        N(14) + "It is at night that fierce winds rise up and wreck ships, and who could escape sudden death if a gale struck us in the dark? " +
        N(15) + "Let us give in to the night, cook our meal beside the ship, and sail on at dawn.\" " +
        N(16) + "So he spoke, and all the rest of the crew shouted in agreement.</p>" +
        "<p>" + N(17) + "Then I knew that some god was planning trouble for us. " +
        N(18) + "\"Eurylochus,\" I said, \"you force my hand, for I am one against many. " +
        N(19) + "But all of you, swear me a solemn oath: if we come upon a herd of cattle or a great flock of sheep, no man will kill a single animal in reckless folly. " +
        N(20) + "Eat in peace the food that immortal Circe gave us.\" " +
        N(21) + "They swore the oath as I commanded, and when they had finished, we brought the ship into a sheltered harbor near a spring of fresh water. " +
        N(22) + "My men stepped ashore and prepared their supper. " +
        N(23) + "When they had eaten and drunk their fill, they remembered the friends Scylla had taken and wept for them, until sleep came over them in the middle of their tears. " +
        N(24) + "Yet even as they slept, Zeus the cloud-gatherer was gathering a storm above the island.</p>",
      claims: [
        {
          id: "eurylochus",
          sol: "9.RL.1.D",
          stem: "Eurylochus's speech in sentences 10–15 reveals that he —",
          choices: [
            { letter: "A", text: "resents his captain's endurance and speaks for the worn-out crew" },
            { letter: "B", text: "secretly plans to steal the cattle as soon as the ship lands" },
            { letter: "C", text: "believes the prophets' warnings and wants to obey them exactly as given" },
            { letter: "D", text: "fears Scylla and wants to turn the ship back to fight her" }
          ],
          correct: "A"
        },
        {
          id: "iron",
          sol: "9.RL.2.A",
          stem: "In sentence 11, Eurylochus claims Odysseus \"must be made of iron.\" This metaphor suggests that Odysseus —",
          choices: [
            { letter: "A", text: "wears heavy armor even while he rows" },
            { letter: "B", text: "was forged by the god of metalworking" },
            { letter: "C", text: "has a toughness his weary men cannot match" },
            { letter: "D", text: "moves more slowly than the rest of the crew" }
          ],
          correct: "C"
        },
        {
          id: "yields",
          sol: "9.RL.1.C",
          stem: "How does Odysseus respond when the whole crew sides with Eurylochus (sentences 17–20)?",
          choices: [
            { letter: "A", text: "He punishes Eurylochus at once and forces the crew to keep rowing." },
            { letter: "B", text: "He agrees happily, since he is just as tired as they are." },
            { letter: "C", text: "He refuses to land and steers the ship past the island himself." },
            { letter: "D", text: "He gives in but tries to limit the danger by demanding an oath." }
          ],
          correct: "D"
        },
        {
          id: "para1",
          sol: "9.RL.3.A",
          stem: "How does paragraph 1 prepare the reader for the argument that follows?",
          choices: [
            { letter: "A", text: "It describes the island's beauty so that the crew's wish to land seems natural." },
            { letter: "B", text: "It recalls the prophets' warnings, so readers know why landing is risky." },
            { letter: "C", text: "It introduces Eurylochus as the bravest and most trusted of the men." },
            { letter: "D", text: "It explains that Scylla lives on the island and guards the cattle." }
          ],
          correct: "B"
        },
        {
          id: "night",
          sol: "9.RL.3.B",
          stem: "How does the setting described in sentence 14 shape the events of the passage?",
          choices: [
            { letter: "A", text: "The dangers of sailing at night give Eurylochus a strong argument for landing." },
            { letter: "B", text: "The calm night sea lets the crew row safely past the island without any trouble." },
            { letter: "C", text: "The darkness hides the island so that the crew cannot find a harbor." },
            { letter: "D", text: "The gale blows the ship straight onto the rocks of the island's shore." }
          ],
          correct: "A"
        },
        {
          id: "folly",
          sol: "9.RV.1.C",
          stem: "In sentence 19 of \"One Against Many,\" the word folly most nearly means —",
          choices: [
            { letter: "A", text: "hunger" },
            { letter: "B", text: "secrecy" },
            { letter: "C", text: "foolishness" },
            { letter: "D", text: "celebrations" }
          ],
          correct: "C"
        },
        {
          id: "themes",
          sol: "9.RL.1.A",
          stem: "Select TWO statements that express themes developed in \"One Against Many.\"",
          choices: [
            { letter: "A", text: "Monsters are the most serious danger any sailor can face." },
            { letter: "B", text: "A leader's authority has limits when a whole group stands against him." },
            { letter: "C", text: "Prophets give confusing advice that wise leaders should ignore." },
            { letter: "D", text: "Exhaustion can weaken people's willingness to follow wise advice." }
          ],
          correct: ["B", "D"]
        }
      ]
    },

    /* ───────── epic · level 3 ───────── */
    {
      id: "ody-helios-wrath-of-sun",
      family: "ODY",
      episode: "helios",
      title: "The Wrath of the Sun",
      kind: "The Odyssey · 9.RL",
      blurb: "The crew feasts on the forbidden cattle, and Zeus keeps his promise to the sun god.",
      level: 3,
      passage:
        "<p>" + N(1) + "While I lay asleep inland, my men drove off the finest of the broad-browed cattle, for the herd was grazing not far from our dark-prowed ship. " +
        N(2) + "They had no barley left to scatter on the offering, as custom demanded, so they stripped tender leaves from a tall oak and used those instead. " +
        N(3) + "They had no wine to pour, so they poured water over the burning offering. " +
        N(4) + "Then they prayed, slaughtered the cattle, and set the meat roasting on the spits.</p>" +
        "<p>" + N(5) + "At that moment sleep fled from my eyes, and I hurried back toward the shore. " +
        N(6) + "As I came near the ship, the smell of roasting meat drifted around me, and I groaned aloud and cried out to the deathless gods: " +
        N(7) + "\"Father Zeus, and you other gods who live forever, you lulled me into a cruel sleep to ruin me, while my companions here dared this monstrous deed!\" " +
        N(8) + "When I reached the ship I scolded each man in turn, but we could find no remedy, for the cattle were already dead. " +
        N(9) + "Then the gods began to show us signs. " +
        N(10) + "The hides crept along the ground, and the meat on the spits, both roasted and raw, lowed like living cattle.</p>" +
        "<p>" + N(11) + "For six days my companions feasted on the best of the cattle of Helios. " +
        N(12) + "But when Zeus brought the seventh day, the storm winds finally dropped, and we quickly raised the mast, spread the white sail, and put out to the open sea. " +
        N(13) + "When the island had sunk behind us and nothing was in sight but sky and water, Zeus set a black cloud above our hollow ship, and the sea grew dark beneath it. " +
        N(14) + "The ship had not run far when a screaming west wind leapt upon us. " +
        N(15) + "The gust snapped the ropes that held the mast, and the mast toppled backward onto the stern, where it struck the helmsman, who fell from the deck like a diver and did not rise. " +
        N(16) + "At the same moment Zeus thundered and hurled his lightning at the ship, which spun around and filled with the reek of sulfur. " +
        N(17) + "My men were flung overboard, and like sea-crows they bobbed on the waves around the black ship, until a god took away their homecoming forever.</p>" +
        "<p>" + N(18) + "I alone held on, pacing the deck until the waves tore the keel from the ship's sides. " +
        N(19) + "Grabbing a leather strap still tied to the mast, I lashed the keel and mast together, and sitting on them I was carried along by the deadly winds. " +
        N(20) + "Then a south wind came, bringing fresh grief, for it swept me all night back toward Charybdis. " +
        N(21) + "At sunrise I reached the whirlpool just as she sucked the salt water down. " +
        N(22) + "I sprang upward and caught the tall fig tree that grows above her, clinging to it like a bat, with no place to rest my feet. " +
        N(23) + "I hung there and waited, for I knew she would spit my timbers out again. " +
        N(24) + "At last, late in the day, at the hour when a judge who has settled many quarrels leaves the market place, tired and hungry for his supper, my timbers rose from the whirlpool, and I dropped onto them and paddled away with my hands.</p>" +
        "<p>" + N(25) + "For nine days I drifted, and on the tenth night the gods brought me to Ogygia, the island of the goddess Calypso, who wished to keep me there forever. " +
        N(26) + "But that, my Phaeacian friends, is a tale I told you yesterday, and I have no wish to tell it twice.</p>",
      claims: [
        {
          id: "ritual",
          sol: "9.RL.1.B",
          stem: "Based on sentences 2 and 3, readers can infer that the men —",
          choices: [
            { letter: "A", text: "had secretly saved some barley and wine from Circe's island" },
            { letter: "B", text: "kept up the forms of worship even while breaking their oath" },
            { letter: "C", text: "wanted to trick Odysseus into thinking they had only prayed" },
            { letter: "D", text: "knew a special recipe for roasting meat over oak leaves and water" }
          ],
          correct: "B"
        },
        {
          id: "cry",
          sol: "9.RL.1.D",
          stem: "Odysseus's cry to Zeus in sentence 7 reveals that he —",
          choices: [
            { letter: "A", text: "secretly approves of the feast now that the men are fed" },
            { letter: "B", text: "blames only himself and not the gods for what happened" },
            { letter: "C", text: "believes Helios will forgive the crew if they pray to him" },
            { letter: "D", text: "feels tricked by the gods and horrified by his men's act" }
          ],
          correct: "D"
        },
        {
          id: "omens",
          sol: "9.RL.2.C",
          stem: "The details of the crawling hides and lowing meat in sentence 10 create a mood of —",
          choices: [
            { letter: "A", text: "eerie dread" },
            { letter: "B", text: "quiet relief" },
            { letter: "C", text: "joyful celebration" },
            { letter: "D", text: "calm curiosity" }
          ],
          correct: "A"
        },
        {
          id: "bat",
          sol: "9.RL.2.A",
          stem: "In sentence 22, Odysseus compares himself to a bat mainly to emphasize —",
          choices: [
            { letter: "A", text: "that he can see clearly in the dark mist above the whirlpool" },
            { letter: "B", text: "how quickly he can fly away from the danger below" },
            { letter: "C", text: "how desperately he clings, with nothing beneath his feet" },
            { letter: "D", text: "that the gods have changed him into an animal" }
          ],
          correct: "C"
        },
        {
          id: "remedy",
          sol: "9.RV.1.C",
          stem: "In sentence 8 of \"The Wrath of the Sun,\" the word remedy most nearly means —",
          choices: [
            { letter: "A", text: "a way to set things right" },
            { letter: "B", text: "a reason to celebrate" },
            { letter: "C", text: "a place to hide" },
            { letter: "D", text: "a source of fresh water to drink" }
          ],
          correct: "A"
        },
        {
          id: "endure",
          sol: "9.RL.1.C",
          stem: "Which trait does Odysseus show most clearly in sentences 18–24?",
          choices: [
            { letter: "A", text: "curiosity about the strange new creatures of the sea" },
            { letter: "B", text: "generosity toward the gods who have punished him" },
            { letter: "C", text: "pride in his own skill as a sailor and leader" },
            { letter: "D", text: "stubborn endurance in the face of terrible danger" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme that the wreck of Odysseus's ship develops?",
          choices: [
            { letter: "A", text: "Hunger gives people the right to take whatever they need to stay alive." },
            { letter: "B", text: "Breaking a sacred oath brings consequences that cannot be undone." },
            { letter: "C", text: "A ship is always safest when it stays within sight of land." },
            { letter: "D", text: "Quick thinking can always undo the harm of an earlier mistake." }
          ],
          correct: "B"
        },
        {
          id: "frame",
          sol: "9.RL.3.A",
          stem: "Sentence 26, addressed to \"my Phaeacian friends,\" reminds the reader that —",
          choices: [
            { letter: "A", text: "Calypso is the one who has been telling the whole tale" },
            { letter: "B", text: "the shipwreck took place only one day before the story" },
            { letter: "C", text: "Odysseus is narrating these past events to the Phaeacians" },
            { letter: "D", text: "the tale of Calypso matters much less than the shipwreck does" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
