/* SOL Labyrinth — The Odyssey: Calypso (English 9 Unit 2, family ODY)
 * Eight original retellings of Odyssey Book 5: Odysseus held on Ogygia, Hermes's errand,
 * Calypso's reply, the dinner choice, the raft and the stars, and Poseidon's storm.
 * The plot is Homer's (public domain); every sentence here is original. Loaded after
 * content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1. Retelling · TINY · level 1 ───────────── */
    {
      id: "ody-calypso-shore",
      family: "ODY",
      episode: "calypso",
      title: "The Weeping Shore",
      kind: "The Odyssey · 9.RL",
      blurb: "Seven years on a lovely island, and Odysseus still weeps for home.",
      level: 1,
      passage:
        "<p>" + N(1) + "For seven long years, Odysseus had been trapped on Ogygia, a lonely island. " +
        N(2) + "The island belonged to Calypso, a goddess and the daughter of Atlas, and she wanted to keep him there forever. " +
        N(3) + "Her home was lovely, and she gave him everything he needed. " +
        N(4) + "Still, every day Odysseus went down to the shore, sat on the rocks, and wept. " +
        N(5) + "He stared across the empty sea toward the place where his home must be. " +
        N(6) + "He longed to see his wife, Penelope, and his son, Telemachus, again.</p>",
      claims: [
        {
          id: "trait",
          sol: "9.RL.1.C",
          stem: "Which word best describes Odysseus during his years on Ogygia?",
          choices: [
            { letter: "A", text: "proud, because he rules the island beside the goddess" },
            { letter: "B", text: "homesick, because he longs every day for his family" },
            { letter: "C", text: "fearful, because Calypso has threatened to harm him" },
            { letter: "D", text: "restless, because he wants to explore unknown lands" }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Based on sentences 3 and 4, readers can infer that Odysseus —",
          choices: [
            { letter: "A", text: "cares more about his family than about comfort" },
            { letter: "B", text: "has not noticed how lovely the island really is" },
            { letter: "C", text: "expects Calypso to send him home very soon" },
            { letter: "D", text: "goes to the shore each day to catch fish for dinner" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "9.RV.1.C",
          stem: "In sentence 6, the word *longed* most nearly means —",
          choices: [
            { letter: "A", text: "measured carefully" },
            { letter: "B", text: "forgot completely" },
            { letter: "C", text: "wished deeply" },
            { letter: "D", text: "traveled far" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which idea about home does this short passage suggest?",
          choices: [
            { letter: "A", text: "A goddess's island is the best reward a hero can win." },
            { letter: "B", text: "People forget their homes once they are comfortable." },
            { letter: "C", text: "Heroes should hide their sadness from other people." },
            { letter: "D", text: "Comfort cannot take the place of the people we love." }
          ],
          correct: "D"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          stem: "How does the setting create a challenge for Odysseus?",
          choices: [
            { letter: "A", text: "The island lies alone in the sea, far from his home." },
            { letter: "B", text: "The island is so dangerous that he must hide on the rocks." },
            { letter: "C", text: "The island's cold weather keeps him from sleeping at night." },
            { letter: "D", text: "The island is crowded with strangers who mock his tears." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 2. Epic poetry · TINY · level 1 ───────────── */
    {
      id: "ody-calypso-hermes-flight",
      family: "ODY",
      episode: "calypso",
      title: "Hermes Skims the Waves",
      kind: "Epic poetry · 9.RL",
      blurb: "Zeus sends his messenger racing over the sea to Calypso's island.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Then Zeus who gathers the clouds called Hermes, his son:<br>" +
        L(2) + "\"Go to the nymph with lovely hair and tell her plainly<br>" +
        L(3) + "that Odysseus, who has suffered long, must now go home.\"<br>" +
        L(4) + "The guide and giant-killer obeyed. He bound on his sandals,<br>" +
        L(5) + "golden and swift as wind over water and wide land,<br>" +
        L(6) + "took up his wand, and dropped from the high air to the sea.<br>" +
        L(7) + "As a tern skims low along the swells, hunting silver fish<br>" +
        L(8) + "and flicking spray from its wingtips, so Hermes rode the waves." +
        "</p>",
      claims: [
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "An epic simile is a long comparison that uses like or as. In lines 7–8, the epic simile compares —",
          choices: [
            { letter: "A", text: "Zeus's anger to a storm stirring up the swells" },
            { letter: "B", text: "Odysseus's tears to the spray flicked from a bird" },
            { letter: "C", text: "Hermes crossing the sea to a hunting seabird" },
            { letter: "D", text: "the golden sandals to the wind over wide land" }
          ],
          correct: "C"
        },
        {
          id: "allusion",
          sol: "9.RV.1.F",
          stem: "Based on the role Hermes plays in lines 1–4, which modern business would make the most fitting allusion by naming itself after him?",
          choices: [
            { letter: "A", text: "a courier service that delivers urgent letters" },
            { letter: "B", text: "a museum exhibit on the history of sea travel" },
            { letter: "C", text: "a gym that trains athletes to lift heavy weights" },
            { letter: "D", text: "a bank that stores gold in an underground vault" }
          ],
          correct: "A"
        },
        {
          id: "respond",
          sol: "9.RL.1.C",
          stem: "How does Hermes respond to Zeus's command in line 4?",
          choices: [
            { letter: "A", text: "He argues that the nymph will refuse to listen." },
            { letter: "B", text: "He obeys at once and prepares for the journey." },
            { letter: "C", text: "He delays until he can find Odysseus himself." },
            { letter: "D", text: "He asks Zeus to send another god in his place." }
          ],
          correct: "B"
        },
        {
          id: "imagery",
          sol: "9.RL.2.B",
          stem: "The description of the sandals in line 5 mainly creates an impression of —",
          choices: [
            { letter: "A", text: "the wealth that Hermes has gathered over time" },
            { letter: "B", text: "the heavy burden Hermes must carry to the island" },
            { letter: "C", text: "the danger that waits for Hermes over the water" },
            { letter: "D", text: "the speed and power of a god on an errand" }
          ],
          correct: "D"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Based on lines 2–3, readers can infer that Odysseus —",
          choices: [
            { letter: "A", text: "has angered Zeus and is about to be punished" },
            { letter: "B", text: "has asked Hermes to carry a message to his wife" },
            { letter: "C", text: "has been kept from home for a long time" },
            { letter: "D", text: "has already left the nymph's island on his own" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 3. Retelling · SHORT · level 1 ───────────── */
    {
      id: "ody-calypso-cave",
      family: "ODY",
      episode: "calypso",
      title: "The Cave of Calypso",
      kind: "The Odyssey · 9.RL",
      blurb: "Hermes finds an island so lovely that even a god stops to stare.",
      level: 1,
      passage:
        "<p>" + N(1) + "When Hermes reached the far island, he walked up from the violet sea to the great cave where Calypso lived. " +
        N(2) + "A fire blazed on her hearth, and the smoke of burning cedar and citron wood drifted sweetly over the whole island. " +
        N(3) + "Inside, the goddess sang in a lovely voice as she moved back and forth at her loom, weaving with a golden shuttle. " +
        N(4) + "Around the cave grew a thick wood of alder, poplar, and fragrant cypress, where owls, falcons, and chattering sea-crows nested. " +
        N(5) + "A vine heavy with grapes curled over the mouth of the cave, and four clear springs ran off in four directions through meadows of violets and parsley. " +
        N(6) + "Even a god would stop to gaze at such a place, and Hermes stood still and marveled. " +
        N(7) + "Yet the man Hermes had come for was not inside; as always, Odysseus sat alone on the shore, weeping for home.</p>",
      claims: [
        {
          id: "imagery",
          sol: "9.RL.2.B",
          stem: "The details in sentences 2–5 appeal to the senses mainly to show that the island is —",
          choices: [
            { letter: "A", text: "a rich and pleasant place full of life" },
            { letter: "B", text: "a dark and frightening place full of danger" },
            { letter: "C", text: "an empty place where nothing can grow" },
            { letter: "D", text: "a noisy place crowded with travelers" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.2.C",
          stem: "Which words best describe the mood created in sentences 1–6?",
          choices: [
            { letter: "A", text: "tense and uneasy" },
            { letter: "B", text: "gloomy and bitter" },
            { letter: "C", text: "calm and lovely" },
            { letter: "D", text: "hurried and noisy" }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "9.RV.1.C",
          stem: "In sentence 2, the word *blazed* most nearly means —",
          choices: [
            { letter: "A", text: "cooled slowly" },
            { letter: "B", text: "burned brightly" },
            { letter: "C", text: "smoked darkly" },
            { letter: "D", text: "went out quickly" }
          ],
          correct: "B"
        },
        {
          id: "respond",
          sol: "9.RL.1.C",
          stem: "Sentence 7 shows that Odysseus responds to life on this beautiful island by —",
          choices: [
            { letter: "A", text: "exploring its woods and meadows each day" },
            { letter: "B", text: "helping Calypso tend her fire and her loom" },
            { letter: "C", text: "grieving for his home instead of enjoying it" },
            { letter: "D", text: "hiding from Hermes among the rocks on the shore" }
          ],
          correct: "C"
        },
        {
          id: "craft",
          sol: "9.RL.3.A",
          stem: "Why does the author describe the island in detail before mentioning Odysseus in sentence 7?",
          choices: [
            { letter: "A", text: "to explain how Hermes found his way to the cave" },
            { letter: "B", text: "to show that Calypso is a cruel and selfish goddess" },
            { letter: "C", text: "to suggest that Odysseus will soon forget his home" },
            { letter: "D", text: "to set his sorrow against the island's beauty" }
          ],
          correct: "D"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Based on sentence 6, readers can infer that the island is —",
          choices: [
            { letter: "A", text: "so lovely that even gods admire it" },
            { letter: "B", text: "a place where gods are not allowed to visit" },
            { letter: "C", text: "less beautiful than Hermes had expected" },
            { letter: "D", text: "the home of Zeus and the other Olympians" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 4. Vocabulary · SHORT · level 2 ───────────── */
    {
      id: "ody-calypso-council-vocab",
      family: "ODY",
      episode: "calypso",
      title: "The Council of the Gods",
      kind: "Vocabulary · 9.RV",
      blurb: "Athena pleads for Odysseus while Poseidon is far away.",
      level: 2,
      passage:
        "<p>" + N(1) + "Poseidon, the earth-shaker, was far away, feasting among the Ethiopians at the edge of the world, when the other gods gathered in council on Olympus. " +
        N(2) + "Grey-eyed Athena spoke first, and she <strong>implored</strong> her father Zeus to help Odysseus. " +
        N(3) + "\"This man ruled his people as gently as a father,\" she said, \"yet now he is a <strong>captive</strong> on Calypso's island. " +
        N(4) + "He has no ship and no crew to carry him across the broad back of the sea. " +
        N(5) + "Every day he <strong>laments</strong> for his lost home, yet he remains <strong>steadfast</strong>, never forgetting his wife and son.\" " +
        N(6) + "Zeus, who gathers the clouds, listened and then announced his <strong>decree</strong>: the nymph must let Odysseus go. " +
        N(7) + "Hermes would carry the order to Ogygia, and no goddess, however <strong>reluctant</strong>, could refuse it.</p>",
      claims: [
        {
          id: "implored",
          sol: "9.RV.1.C",
          stem: "In sentence 2, the word *implored* most nearly means —",
          choices: [
            { letter: "A", text: "ordered sharply" },
            { letter: "B", text: "begged earnestly" },
            { letter: "C", text: "warned quietly" },
            { letter: "D", text: "thanked politely" }
          ],
          correct: "B"
        },
        {
          id: "captive",
          sol: "9.RV.1.B",
          stem: "The word *captive* comes from the Latin *capere*, meaning \"to take or seize.\" Based on this root, a captive is someone who —",
          choices: [
            { letter: "A", text: "has taken charge of a group of people" },
            { letter: "B", text: "is held somewhere against his or her will" },
            { letter: "C", text: "has chosen to live far from other people" },
            { letter: "D", text: "takes care of a house while its owner is away" }
          ],
          correct: "B"
        },
        {
          id: "steadfast",
          sol: "9.RV.1.E",
          stem: "Athena calls Odysseus *steadfast* rather than *stubborn* in sentence 5 because *steadfast* —",
          choices: [
            { letter: "A", text: "suggests that he is too weak to change his mind" },
            { letter: "B", text: "sounds more formal but means exactly the same thing" },
            { letter: "C", text: "praises his loyalty; stubborn would sound like a flaw" },
            { letter: "D", text: "describes his strength in battle rather than his loyalty" }
          ],
          correct: "C"
        },
        {
          id: "laments",
          sol: "9.RV.1.C",
          stem: "Which bolded word from the passage means \"expresses grief or sorrow\"?",
          choices: [
            { letter: "A", text: "captive" },
            { letter: "B", text: "steadfast" },
            { letter: "C", text: "decree" },
            { letter: "D", text: "laments" }
          ],
          correct: "D"
        },
        {
          id: "allusion",
          sol: "9.RV.1.F",
          stem: "Poseidon's absence from the council (sentence 1) matters because, elsewhere in the Odyssey, Poseidon —",
          choices: [
            { letter: "A", text: "is angry at Odysseus and keeps him from home" },
            { letter: "B", text: "is the messenger who carries Zeus's orders to the gods" },
            { letter: "C", text: "is Calypso's father and wishes to protect his daughter" },
            { letter: "D", text: "is the wise counselor who settles quarrels among gods" }
          ],
          correct: "A"
        },
        {
          id: "athena",
          sol: "9.RL.1.C",
          stem: "Athena's words to Zeus in sentences 3–5 show that she is —",
          choices: [
            { letter: "A", text: "jealous of Calypso's beautiful island home" },
            { letter: "B", text: "afraid that Poseidon will punish her for speaking" },
            { letter: "C", text: "a loyal defender who speaks up for Odysseus" },
            { letter: "D", text: "uncertain whether Odysseus deserves any help" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 5. Epic poetry · MEDIUM · level 2 ───────────── */
    {
      id: "ody-calypso-reply",
      family: "ODY",
      episode: "calypso",
      title: "Calypso's Reply",
      kind: "Epic poetry · 9.RL",
      blurb: "The goddess protests Zeus's order, then gives way.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "So spoke Hermes the messenger, and Calypso, shining among goddesses, shuddered;<br>" +
        L(2) + "then she answered him, and her words came quick and bitter:<br>" +
        L(3) + "\"How harsh you gods of Olympus are, how quick to envy!<br>" +
        L(4) + "You begrudge any goddess who keeps a mortal man<br>" +
        L(5) + "beside her, a companion to share her hearth through the long years.<br>" +
        L(6) + "Yet who was it that saved him? I did, when Zeus<br>" +
        L(7) + "hurled his blazing lightning and split the swift ship<br>" +
        L(8) + "to splinters on the wine-dark sea. His comrades perished;<br>" +
        L(9) + "he alone, clinging to the wreckage, drifted to my shore.<br>" +
        L(10) + "I welcomed him, I fed him, I cared for him, and I promised<br>" +
        L(11) + "to make him immortal, untouched by death or old age, for all time.<br>" +
        L(12) + "But no god can cross the will of Zeus the thunderer<br>" +
        L(13) + "or turn his purpose aside, not even a goddess. So let the man go,<br>" +
        L(14) + "if Zeus commands it, out over the restless sea.<br>" +
        L(15) + "I have no ship to give him and no crew to row,<br>" +
        L(16) + "but I will advise him freely and hold nothing back, so he reaches home unharmed.\"" +
        "</p>",
      claims: [
        {
          id: "speech",
          sol: "9.RL.1.D",
          stem: "Calypso's protest in lines 3–11 reveals that she —",
          choices: [
            { letter: "A", text: "fears that Odysseus will forget her once he leaves" },
            { letter: "B", text: "thinks saving his life gave her a claim to him" },
            { letter: "C", text: "wishes to punish Odysseus for the loss of his ship" },
            { letter: "D", text: "plans to trick Hermes into carrying a false message" }
          ],
          correct: "B"
        },
        {
          id: "respond",
          sol: "9.RL.1.C",
          stem: "How does Calypso respond to Zeus's command by the end of her speech (lines 12–16)?",
          choices: [
            { letter: "A", text: "She refuses and dares Zeus to punish her." },
            { letter: "B", text: "She agrees, but only after Hermes swears to return." },
            { letter: "C", text: "She accepts it unwillingly and offers to help Odysseus." },
            { letter: "D", text: "She pretends to obey while planning to keep him forever." }
          ],
          correct: "C"
        },
        {
          id: "allusion",
          sol: "9.RV.1.F",
          stem: "The reference to Zeus's lightning in lines 6–8 reminds readers that, in Greek myth, Zeus —",
          choices: [
            { letter: "A", text: "rules the sea and shakes the earth with his trident" },
            { letter: "B", text: "carries messages between the gods and mortals" },
            { letter: "C", text: "guides heroes with wisdom and clever plans" },
            { letter: "D", text: "is king of the gods and wields the thunderbolt" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "Which choice best describes how Calypso's tone shifts between lines 3–5 and lines 13–16?",
          choices: [
            { letter: "A", text: "from bitter protest to reluctant consent" },
            { letter: "B", text: "from cheerful welcome to sudden hot anger" },
            { letter: "C", text: "from fearful pleading to proud defiance" },
            { letter: "D", text: "from calm agreement to open rebellion" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "9.RV.1.C",
          stem: "In line 4, the word *begrudge* most nearly means —",
          choices: [
            { letter: "A", text: "honor" },
            { letter: "B", text: "resent" },
            { letter: "C", text: "forget" },
            { letter: "D", text: "imitate" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme about power does Calypso's speech develop?",
          choices: [
            { letter: "A", text: "Even a goddess must give way to a stronger will." },
            { letter: "B", text: "Mortals can defeat the gods through clever schemes." },
            { letter: "C", text: "Kindness to strangers is always rewarded by Zeus." },
            { letter: "D", text: "Those who lose their companions deserve to suffer." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 6. Retelling · MEDIUM · level 2 ───────────── */
    {
      id: "ody-calypso-dinner",
      family: "ODY",
      episode: "calypso",
      title: "The Goddess and the Mortal",
      kind: "The Odyssey · 9.RL",
      blurb: "Calypso offers Odysseus a life without death. He chooses home.",
      level: 2,
      passage:
        "<p>" + N(1) + "That evening Calypso and Odysseus sat down to dinner in her cave. " +
        N(2) + "She set before him the bread and wine that mortals eat, while her maids brought the goddess ambrosia and nectar, the food and drink of the immortals. " +
        N(3) + "When they had eaten, Calypso spoke. " +
        N(4) + "\"Son of Laertes, Odysseus of many schemes, do you truly want to go home to your own country now? " +
        N(5) + "Then go, and may good fortune go with you. " +
        N(6) + "But if you knew how much suffering waits for you before you reach your shore, you would stay here with me and be immortal, however much you long to see your wife. " +
        N(7) + "Surely I am not less beautiful than she is; how could a mortal woman compare with a goddess?\"</p>" +
        "<p>" + N(8) + "Odysseus, master of schemes, chose his words with care. " +
        N(9) + "\"Great goddess, do not be angry with me. " +
        N(10) + "I know that wise Penelope cannot match you in beauty, for she is mortal, and you will never grow old or die. " +
        N(11) + "Even so, every day I long to go home and see the day of my return. " +
        N(12) + "And if some god wrecks me again on the wine-dark sea, I will endure it, for I have a heart that can bear suffering. " +
        N(13) + "I have already suffered much, on the waves and in war; let this trouble be added to the rest.\"</p>",
      claims: [
        {
          id: "speech",
          sol: "9.RL.1.D",
          stem: "Odysseus's reply in sentences 9–13 reveals that he is —",
          choices: [
            { letter: "A", text: "careless, since he insults the goddess's beauty" },
            { letter: "B", text: "tactful, since he praises her before stating his wish" },
            { letter: "C", text: "fearful, since he agrees to stay to avoid more suffering" },
            { letter: "D", text: "boastful, since he claims no god could ever wreck him" }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Why does Odysseus begin his answer with the words *do not be angry with me* (sentence 9)?",
          choices: [
            { letter: "A", text: "He knows angering a goddess could put him in danger." },
            { letter: "B", text: "He has already decided to stay on the island with her." },
            { letter: "C", text: "He blames himself for the loss of his ship and crew." },
            { letter: "D", text: "He hopes Calypso will come with him to Ithaca." }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "The Greek word *nostos* means \"homecoming,\" one of the epic's great themes. How does this passage develop the idea of nostos?",
          choices: [
            { letter: "A", text: "It shows that Odysseus's homecoming will be quick and easy." },
            { letter: "B", text: "It shows that the gods care more about homecoming than mortals do." },
            { letter: "C", text: "It shows Odysseus choosing home over a deathless life." },
            { letter: "D", text: "It shows that Calypso, too, longs to return to her own home." }
          ],
          correct: "C"
        },
        {
          id: "respond",
          sol: "9.RL.1.C",
          stem: "How does Odysseus respond to Calypso's warning about the suffering ahead?",
          choices: [
            { letter: "A", text: "He asks her to promise that no god will harm him." },
            { letter: "B", text: "He decides to wait until the seas are calmer." },
            { letter: "C", text: "He begs her to use her magic to make the journey safe." },
            { letter: "D", text: "He says he will bear it, as he has borne much before." }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "9.RV.1.C",
          stem: "In sentence 12, the word *endure* most nearly means —",
          choices: [
            { letter: "A", text: "escape quickly" },
            { letter: "B", text: "bear patiently" },
            { letter: "C", text: "explain clearly" },
            { letter: "D", text: "forget completely" }
          ],
          correct: "B"
        },
        {
          id: "craft",
          sol: "9.RL.3.A",
          stem: "The author includes sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "show that Calypso will not share her food with a guest" },
            { letter: "B", text: "explain why Odysseus is too tired to argue with her" },
            { letter: "C", text: "describe the rich foods that grow on the island" },
            { letter: "D", text: "stress the gap between a mortal man and a goddess" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 7. Retelling · LONG · level 3 ───────────── */
    {
      id: "ody-calypso-raft",
      family: "ODY",
      episode: "calypso",
      title: "Twenty Trees and the Stars",
      kind: "The Odyssey · 9.RL",
      blurb: "An oath, an axe, four days of work, and seventeen nights under the stars.",
      level: 3,
      passage:
        "<p>" + N(1) + "Calypso, shining among goddesses, went down to the shore and found Odysseus where he always sat, his eyes never dry, wearing away his days in longing for home. " +
        N(2) + "\"Poor man, weep no more,\" she said. " +
        N(3) + "\"Do not waste your life in grief, for now I am willing to send you on your way. " +
        N(4) + "Cut tall timbers with the bronze axe and build a broad raft, and I will give you food, water, and a wind to carry you.\" " +
        N(5) + "But Odysseus, who had suffered much, shuddered at her words. " +
        N(6) + "\"Goddess, this is some trick,\" he said. \"Even swift ships with fair winds fear that wide sea, and you would send me over it on a raft? " +
        N(7) + "I will not set foot on it unless you swear a great oath that you are planning no new harm against me.\" " +
        N(8) + "Calypso smiled at his caution and called him clever, and she swore by the earth, by the wide sky above, and by the dark river Styx, the most dreadful oath the gods can take.</p>" +
        "<p>" + N(9) + "As soon as young Dawn appeared with her rose-red fingers, the goddess gave Odysseus a great bronze axe, sharp on both edges and fitted with a handle of olive wood, along with a polished adze. " +
        N(10) + "She led him to the far end of the island where tall trees grew, alder and poplar and fir, long dead and dry, that would float lightly on the sea. " +
        N(11) + "There he felled twenty trees, trimmed them with the bronze, and smoothed them straight and true. " +
        N(12) + "Then, with drills that Calypso brought him, he bored through the timbers and fitted them together with pegs, as a careful builder joins the beams of a farmhouse roof so that no storm can pull them apart. " +
        N(13) + "He raised a mast, added decking and a rudder to steer by, and wove wicker sides of willow to keep out the waves, while Calypso brought cloth for a sail. " +
        N(14) + "In four days, the work was done.</p>" +
        "<p>" + N(15) + "On the fifth day, Calypso saw that he was bathed and dressed in fragrant clothing, and she loaded the raft with a skin of dark wine, a larger one of water, and a sack of food. " +
        N(16) + "Then she sent a warm and gentle wind, and Odysseus, glad at heart, spread his sail. " +
        N(17) + "He sat at the rudder and steered with skill, and sleep never closed his eyes, for he kept them on the Pleiades, on the slow-setting Plowman, and on the Great Bear, which Calypso had told him to keep on his left as he crossed the sea. " +
        N(18) + "For seventeen days he sailed, and on the eighteenth the shadowy mountains of the Phaeacians' land rose before him, like a shield lying on the misty sea. " +
        N(19) + "He did not know that, far off on a mountaintop, the earth-shaker, coming home from the Ethiopians, had already caught sight of his little sail.</p>",
      claims: [
        {
          id: "oath",
          sol: "9.RL.1.B",
          stem: "Why does Odysseus demand an oath from Calypso (sentences 6–7)?",
          choices: [
            { letter: "A", text: "He suspects that a goddess's sudden kindness may hide a trap." },
            { letter: "B", text: "He wants Calypso to promise to come with him to Ithaca." },
            { letter: "C", text: "He believes the raft will be stronger if a goddess blesses it." },
            { letter: "D", text: "He hopes the oath will make Zeus send him a real ship." }
          ],
          correct: "A"
        },
        {
          id: "styx",
          sol: "9.RV.1.F",
          stem: "Calypso swears by the river Styx (sentence 8). In Greek myth, an oath by the Styx is one that even gods dare not break. This allusion shows that her promise —",
          choices: [
            { letter: "A", text: "is only a polite custom that she may ignore later" },
            { letter: "B", text: "comes from Zeus rather than from Calypso herself" },
            { letter: "C", text: "is fully binding, so Odysseus can trust her" },
            { letter: "D", text: "will protect Odysseus from every storm at sea" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is developed across the whole passage, from the oath to the voyage?",
          choices: [
            { letter: "A", text: "Caution and steady effort help a person meet a hard challenge." },
            { letter: "B", text: "Gods always keep their word, so mortals never need to doubt them." },
            { letter: "C", text: "A person who works alone will never need help from anyone else." },
            { letter: "D", text: "Beautiful places are more dangerous than the open sea." }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 18, the land of the Phaeacians is compared to a shield lying on the misty sea. This simile mainly helps readers —",
          choices: [
            { letter: "A", text: "understand that the Phaeacians are fierce warriors" },
            { letter: "B", text: "picture a dim, rounded land rising from the water" },
            { letter: "C", text: "see that the sea around the land is calm and shining" },
            { letter: "D", text: "realize that Odysseus has sailed in a circle" }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "9.RV.1.C",
          stem: "In sentence 12, the word *bored* most nearly means —",
          choices: [
            { letter: "A", text: "grew tired of" },
            { letter: "B", text: "carved designs into" },
            { letter: "C", text: "drilled holes through" },
            { letter: "D", text: "measured the length of" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "The author ends the passage with sentence 19 mainly to —",
          choices: [
            { letter: "A", text: "show that Odysseus has finally reached home safely" },
            { letter: "B", text: "explain why Calypso told him to watch the stars" },
            { letter: "C", text: "suggest that Poseidon is a friend to sailors" },
            { letter: "D", text: "hint that new danger lies ahead for Odysseus" }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "9.RL.1.C",
          stem: "Calypso must obey Zeus's command. Select TWO sentences that show her keeping her promise to help Odysseus leave.",
          choices: [
            { letter: "A", text: "Sentence 1, in which she finds him weeping on the shore" },
            { letter: "B", text: "Sentence 9, in which she gives him an axe and an adze" },
            { letter: "C", text: "Sentence 8, in which she smiles at his caution" },
            { letter: "D", text: "Sentence 16, in which she sends a warm and gentle wind" }
          ],
          correct: ["B", "D"]
        }
      ]
    },

    /* ───────────── 8. Retelling · EPIC · level 3 ───────────── */
    {
      id: "ody-calypso-storm",
      family: "ODY",
      episode: "calypso",
      title: "Poseidon's Storm",
      kind: "The Odyssey · 9.RL",
      blurb: "The earth-shaker smashes the raft, and a sea-goddess offers a veil.",
      level: 3,
      passage:
        "<p>" + N(1) + "But Poseidon, the earth-shaker, was coming home from the Ethiopians, and from a far mountaintop he caught sight of Odysseus sailing over the sea. " +
        N(2) + "His anger boiled up, and he shook his head and spoke to his own heart. " +
        N(3) + "\"So the gods changed their minds about Odysseus while I was away! " +
        N(4) + "Now he is close to the land of the Phaeacians, where he is fated to escape his long ordeal. " +
        N(5) + "Still, I can give him his fill of trouble before he gets there.\" " +
        N(6) + "He gathered the clouds, seized his trident, and stirred the sea, and he let loose every wind at once until night rushed down from the sky and hid both land and water.</p>" +
        "<p>" + N(7) + "Then Odysseus's knees went weak, and he cried out to his own great heart. " +
        N(8) + "\"Lucky, many times lucky, were the Greeks who died at Troy! " +
        N(9) + "I wish I had fallen there when the Trojans hurled their bronze spears at me, for then I would have had a hero's funeral, and the Greeks would have spread my glory far and wide. " +
        N(10) + "Now I am doomed to a miserable death, lost at sea and unremembered.\" " +
        N(11) + "As he spoke, a towering wave crashed down and spun the raft around; he was flung far from it, the rudder torn from his hands, and the mast snapped in the middle. " +
        N(12) + "The clothes Calypso had given him dragged him down, but at last he came up, spitting bitter salt water, and even then he did not forget his raft: he lunged after it, caught hold, and crouched in the middle of it. " +
        N(13) + "As the north wind at the end of summer drives dry thistledown across a field, and the tufts cling together as they tumble, so the winds drove the raft this way and that across the sea.</p>" +
        "<p>" + N(14) + "Then Ino, who had once been a mortal woman and was now Leucothea, a goddess of the sea, saw him and took pity on him. " +
        N(15) + "She rose from the water like a diving seabird, settled on the raft, and spoke. " +
        N(16) + "\"Poor man, why is the earth-shaker so furious with you? " +
        N(17) + "Take off these clothes, leave the raft to the winds, and swim for the land of the Phaeacians. " +
        N(18) + "Wrap this immortal veil around your chest, and you need not fear death; but when you reach land, throw it back into the sea.\" " +
        N(19) + "She gave him the veil and dived back into the waves. " +
        N(20) + "But Odysseus, who had endured so much, was wary. " +
        N(21) + "\"This may be another trick of the gods,\" he said to himself, \"so I will stay on the raft while its timbers hold, and only when the sea breaks it apart will I swim.\" " +
        N(22) + "Even as he thought this, Poseidon sent a wave so huge that it scattered the long timbers like a heap of dry straw in the wind. " +
        N(23) + "Odysseus climbed onto a single beam, stripped off his heavy clothes, wrapped the veil around his chest, and plunged headfirst into the sea.</p>" +
        "<p>" + N(24) + "For two days and two nights he was buffeted by the swells, and many times he expected to die. " +
        N(25) + "But when Dawn with her rose-red fingers brought the third day, the wind fell still, and he saw land close at hand. " +
        N(26) + "The coast was a wall of jagged rocks and pounding surf, so he swam along it until he found the mouth of a river, and he prayed to the river's god for mercy. " +
        N(27) + "The river calmed its current, and Odysseus crawled ashore on Scheria, his arms and legs trembling, too exhausted even to speak. " +
        N(28) + "When his breath returned, he gave the veil back to the water and climbed to a nearby wood. " +
        N(29) + "There he heaped up a bed of fallen leaves and buried himself in it, the way a farmer far from any neighbor buries a glowing ember in black ashes to keep a spark alive until morning, and he fell into a deep sleep.</p>",
      claims: [
        {
          id: "poseidon",
          sol: "9.RL.1.D",
          stem: "Poseidon's words in sentences 3–5 reveal that he —",
          choices: [
            { letter: "A", text: "has forgiven Odysseus and now wishes to guide him home" },
            { letter: "B", text: "accepts that Odysseus will escape but wants him to suffer" },
            { letter: "C", text: "fears that Zeus will punish him for raising the storm" },
            { letter: "D", text: "believes Odysseus has already drowned in the wide sea" }
          ],
          correct: "B"
        },
        {
          id: "kleos",
          sol: "9.RL.1.B",
          stem: "*Kleos* is the glory a hero earns that lives on after death. Based on sentences 8–10, why does Odysseus wish he had died at Troy?",
          choices: [
            { letter: "A", text: "A death in battle would have won him lasting honor." },
            { letter: "B", text: "He would never have had to meet the goddess Calypso." },
            { letter: "C", text: "He believes the Trojans would have treated him with mercy." },
            { letter: "D", text: "He misses the companions who fought beside him in battle." }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "What does the epic simile in sentence 13 mainly emphasize?",
          choices: [
            { letter: "A", text: "how gently the raft drifts toward the shore" },
            { letter: "B", text: "how quickly summer is turning into winter" },
            { letter: "C", text: "how helplessly the raft is tossed by the winds" },
            { letter: "D", text: "how firmly the timbers of the raft hold together" }
          ],
          correct: "C"
        },
        {
          id: "ino",
          sol: "9.RL.1.C",
          stem: "How does Odysseus respond to Ino's advice in sentences 20–21?",
          choices: [
            { letter: "A", text: "He obeys at once and dives into the stormy sea." },
            { letter: "B", text: "He throws away the veil, trusting only his own strength." },
            { letter: "C", text: "He doubts it and stays on the raft while it holds." },
            { letter: "D", text: "He begs Ino to calm the storm and save the raft." }
          ],
          correct: "C"
        },
        {
          id: "allusion",
          sol: "9.RV.1.F",
          stem: "Poseidon's anger is an allusion to an earlier adventure in the epic. Poseidon rages at Odysseus because Odysseus had —",
          choices: [
            { letter: "A", text: "stolen the cattle of the sun god Helios" },
            { letter: "B", text: "refused to stay with Calypso on Ogygia" },
            { letter: "C", text: "insulted Athena at the council of the gods" },
            { letter: "D", text: "blinded the Cyclops, Poseidon's son" }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "9.RV.1.C",
          stem: "In sentence 24, the word *buffeted* most nearly means —",
          choices: [
            { letter: "A", text: "carried gently" },
            { letter: "B", text: "fed and rested" },
            { letter: "C", text: "hidden from view" },
            { letter: "D", text: "struck again and again" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "The author ends the passage by comparing Odysseus to an ember buried in ashes (sentence 29) mainly to suggest that —",
          choices: [
            { letter: "A", text: "his life, nearly put out, is safely kept alive" },
            { letter: "B", text: "his anger at Poseidon still burns fiercely" },
            { letter: "C", text: "he has lit a real fire to warm his body" },
            { letter: "D", text: "he will soon forget the terrors of the sea" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "How does this passage answer the unit's essential question, \"How do the challenges of life affect a person?\"",
          choices: [
            { letter: "A", text: "Challenges prove that only the gods can survive great hardship." },
            { letter: "B", text: "Hardship tests a person and reveals a will to endure." },
            { letter: "C", text: "Challenges make a person give up hope of reaching home." },
            { letter: "D", text: "Hardship is easiest to bear when a person is not alone." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
