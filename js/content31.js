/* SOL Labyrinth — The Odyssey: across the voyage — paired texts, Greek culture and facing challenges (English 9 Unit 2, family ODY)
 * Eight original packs that reach across episodes and connect The Odyssey to the unit's other texts:
 * epithets and the epic hero, Greek values (xenia, hubris, kleos, nostos), paired temptations,
 * Odysseus vs Eurylochus, coping with setbacks, the flashback at Alcinous' court, and a modern
 * ninth grader beside the Sirens episode. Original retellings of Homer only; no real people.
 * Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1. tiny · Informational · epithet and epic hero ───────────── */
    {
      id: "ody-voyage-epithet-hero",
      family: "ODY",
      episode: "voyage",
      title: "Epithets and Epic Heroes",
      kind: "Informational · 9.RI",
      blurb: "Two tools of the epic: the hero at its center and the name-tags that follow him.",
      level: 1,
      passage:
        "<p>" + N(1) + "An epic is a long poem about a hero whose deeds matter to a whole people. " +
        N(2) + "This epic hero is braver, stronger, or cleverer than ordinary humans, yet he still has flaws, such as pride. " +
        N(3) + "Epic poets also use epithets, short descriptive phrases attached to a name, like \"Odysseus, master of schemes\" or \"grey-eyed Athena.\" " +
        N(4) + "Singers once performed these poems aloud from memory, so repeated epithets helped them fill out a line. " +
        N(5) + "The tags also reminded listeners of each character's most important trait.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of the passage?",
          choices: [
            { letter: "A", text: "Epic poems were too long for ancient singers to memorize." },
            { letter: "B", text: "Odysseus is the most important hero in all Greek poetry." },
            { letter: "C", text: "Epics center on a great but flawed hero and name characters by their traits." },
            { letter: "D", text: "Athena and Odysseus share the same epithet throughout the epic." }
          ],
          correct: "C"
        },
        {
          id: "epithet-word",
          sol: "9.RV.1.C",
          stem: "As it is used in sentence 3, an epithet is —",
          choices: [
            { letter: "A", text: "a descriptive phrase attached to a character's name" },
            { letter: "B", text: "a song performed for a crowd at a feast" },
            { letter: "C", text: "a flaw that leads to a hero's downfall" },
            { letter: "D", text: "a long poem that celebrates a nation's hero" }
          ],
          correct: "A"
        },
        {
          id: "singers",
          sol: "9.RI.1.B",
          stem: "According to the passage, how did epithets help the singers who performed epics?",
          choices: [
            { letter: "A", text: "They let singers skip parts of the story listeners already knew." },
            { letter: "B", text: "They replaced names so that no names had to be remembered." },
            { letter: "C", text: "They warned the audience which characters would die later." },
            { letter: "D", text: "They gave ready phrases for filling out lines sung from memory." }
          ],
          correct: "D"
        },
        {
          id: "flaws",
          sol: "9.RI.2.B",
          stem: "The author includes the words yet he still has flaws, such as pride in sentence 2 mainly to —",
          choices: [
            { letter: "A", text: "argue that Odysseus does not deserve to be called a hero" },
            { letter: "B", text: "show that an epic hero is extraordinary but still human" },
            { letter: "C", text: "explain why epic poems were first performed aloud" },
            { letter: "D", text: "prove that pride is the only flaw an epic hero can have" }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "9.RI.2.A",
          stem: "How is the passage mainly organized?",
          choices: [
            { letter: "A", text: "It tells the events of the epic in the order they happen." },
            { letter: "B", text: "It compares Greek epics with modern novels and films." },
            { letter: "C", text: "It defines two features of epics and explains each one." },
            { letter: "D", text: "It argues for one view of epics and then answers critics." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 2. tiny · verse · Odysseus names himself ───────────── */
    {
      id: "ody-voyage-i-am-odysseus",
      family: "ODY",
      episode: "voyage",
      title: "I Am Odysseus",
      kind: "Epic poetry · 9.RL",
      blurb: "At the Phaeacian court, the stranger finally tells the king who he is.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Lord Alcinous, you ask my name, and I will hide it no longer.<br>" +
        L(2) + "I am Odysseus, son of Laertes, master of schemes;<br>" +
        L(3) + "men speak of my cunning, and my fame climbs as high as heaven.<br>" +
        L(4) + "My home is sunlit Ithaca, where Mount Neriton waves its forests,<br>" +
        L(5) + "a rocky island, rough, but good at raising sturdy sons.<br>" +
        L(6) + "Two goddesses have tried to keep me in their shining halls,<br>" +
        L(7) + "yet no hall of gold in a stranger's country, however rich,<br>" +
        L(8) + "is dearer to me than my own rough shore and my father's face." +
        "</p>",
      claims: [
        {
          id: "proud",
          sol: "9.RL.1.C",
          stem: "Lines 2–3 show that Odysseus is —",
          choices: [
            { letter: "A", text: "modest and unwilling to talk about his deeds" },
            { letter: "B", text: "proud of his reputation for cleverness" },
            { letter: "C", text: "unsure of who he really is after his travels" },
            { letter: "D", text: "ashamed to admit who his father is" }
          ],
          correct: "B"
        },
        {
          id: "cunning",
          sol: "9.RV.1.C",
          stem: "In line 3, the word cunning most nearly means —",
          choices: [
            { letter: "A", text: "cruelty toward enemies" },
            { letter: "B", text: "great wealth and land" },
            { letter: "C", text: "strength in battle" },
            { letter: "D", text: "skill at clever plans" }
          ],
          correct: "D"
        },
        {
          id: "home",
          sol: "9.RL.1.A",
          stem: "Which idea do lines 6–8 express most clearly?",
          choices: [
            { letter: "A", text: "Home is worth more than any comfort a foreign land offers." },
            { letter: "B", text: "Goddesses are more powerful than any mortal king." },
            { letter: "C", text: "A hero should accept every gift he is offered." },
            { letter: "D", text: "Ithaca is the richest kingdom in all of Greece." }
          ],
          correct: "A"
        },
        {
          id: "kept",
          sol: "9.RL.1.B",
          stem: "Based on line 6, readers can infer that Odysseus —",
          choices: [
            { letter: "A", text: "has never left Ithaca before this voyage" },
            { letter: "B", text: "plans to stay with the Phaeacians forever" },
            { letter: "C", text: "has been held back by powerful beings who wanted him to stay" },
            { letter: "D", text: "built shining halls for the gods on his island" }
          ],
          correct: "C"
        },
        {
          id: "ithaca",
          sol: "9.RL.2.B",
          stem: "The description of Ithaca in lines 4–5 creates an image of a place that is —",
          choices: [
            { letter: "A", text: "wealthy and filled with golden halls" },
            { letter: "B", text: "flat, quiet, and covered with farms" },
            { letter: "C", text: "rough and rocky but proud of its people" },
            { letter: "D", text: "dangerous and best avoided by passing sailors" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 3. short · Informational · Greek values ───────────── */
    {
      id: "ody-voyage-greek-values",
      family: "ODY",
      episode: "voyage",
      title: "What the Myths Taught",
      kind: "Informational · 9.RI",
      blurb: "Xenia, hubris, kleos and nostos: the values packed inside Greek stories.",
      level: 2,
      passage:
        "<p>" + N(1) + "For the ancient Greeks, myths were more than entertainment; they were a way of passing values from one generation to the next. " +
        N(2) + "One of the most important values was xenia, or guest-friendship. " +
        N(3) + "A host was expected to give a stranger food, shelter, and safe passage, and a guest was expected to respect the host's home. " +
        N(4) + "Zeus himself was called the protector of guests, so breaking xenia was an offense against the gods. " +
        N(5) + "Myths also warned against hubris, the excessive pride that leads a person to challenge the gods or ignore human limits. " +
        N(6) + "At the same time, heroes longed for kleos, glory that would outlive them in song, and for nostos, a safe homecoming. " +
        N(7) + "When listeners heard about a monster who ate his guests or a boastful hero who suffered for his words, they learned what their community honored and what it would not forgive.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of the article?",
          choices: [
            { letter: "A", text: "Greek heroes cared far more about winning glory than about getting home." },
            { letter: "B", text: "Greek myths taught listeners the values their society expected." },
            { letter: "C", text: "Zeus punished every Greek who failed to welcome a stranger." },
            { letter: "D", text: "Ancient Greeks told myths mainly to pass the long evenings." }
          ],
          correct: "B"
        },
        {
          id: "excessive",
          sol: "9.RV.1.C",
          stem: "In sentence 5, the word excessive most nearly means —",
          choices: [
            { letter: "A", text: "hidden from other people" },
            { letter: "B", text: "earned slowly through hard work and patience" },
            { letter: "C", text: "shared by a whole group" },
            { letter: "D", text: "going beyond a reasonable limit" }
          ],
          correct: "D"
        },
        {
          id: "zeus",
          sol: "9.RI.1.B",
          stem: "According to the passage, why was breaking xenia considered so serious?",
          choices: [
            { letter: "A", text: "Zeus was believed to protect guests, so it offended the gods." },
            { letter: "B", text: "Hosts who broke it could no longer travel safely by sea." },
            { letter: "C", text: "It meant a hero would never be remembered in songs." },
            { letter: "D", text: "Guests could take the host's house as their own." }
          ],
          correct: "A"
        },
        {
          id: "examples",
          sol: "9.RI.2.B",
          stem: "The author includes the examples in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "prove that monsters were the most popular characters in myths" },
            { letter: "B", text: "suggest that Greek audiences were frightened of strangers" },
            { letter: "C", text: "show how stories taught values by showing their consequences" },
            { letter: "D", text: "argue that boasting is the worst of all human faults" }
          ],
          correct: "C"
        },
        {
          id: "allusion",
          sol: "9.RV.1.F",
          stem: "A modern story describes a host who treats a traveler \"as if Zeus were watching.\" Based on the passage, this allusion suggests that the host —",
          choices: [
            { letter: "A", text: "is afraid the traveler is secretly a thief" },
            { letter: "B", text: "welcomes the traveler generously and with respect" },
            { letter: "C", text: "wants the traveler to leave as soon as possible" },
            { letter: "D", text: "hopes to become famous someday for telling good stories" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "How does the author organize sentences 2–6?",
          choices: [
            { letter: "A", text: "by telling one myth from beginning to end" },
            { letter: "B", text: "by comparing Greek values with modern ones" },
            { letter: "C", text: "by listing reasons the myths are no longer told" },
            { letter: "D", text: "by naming and defining several values in turn" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 4. short · Paired · Lotus-Eaters vs Calypso ───────────── */
    {
      id: "ody-voyage-two-temptations",
      family: "ODY",
      episode: "voyage",
      title: "Two Temptations to Forget",
      kind: "Paired texts · 9.DSR",
      blurb: "A sweet fruit and a goddess's offer: two ways the voyage almost ends far from home.",
      level: 1,
      passage:
        "<p><strong>Text 1 — The Lotus-Eaters</strong></p>" +
        "<p>" + N(1) + "After nine days of storms, Odysseus's ships reached the land of the Lotus-Eaters. " +
        N(2) + "He sent three men inland to learn who lived there. " +
        N(3) + "The people meant no harm; they simply shared the honey-sweet lotus fruit. " +
        N(4) + "Whoever tasted it forgot home and wanted only to stay and eat more. " +
        N(5) + "Odysseus dragged the weeping men back to the ships and tied them beneath the benches. " +
        N(6) + "Then he ordered the crews to row hard before anyone else could taste it.</p>" +
        "<p><strong>Text 2 — Calypso's Offer</strong></p>" +
        "<p>" + N(7) + "For seven years the goddess Calypso kept Odysseus on her island of Ogygia. " +
        N(8) + "She gave him every comfort and even offered to make him immortal, free from old age and death forever. " +
        N(9) + "Yet each day he sat on the shore, staring across the sea and weeping for home. " +
        N(10) + "When the gods commanded her to release him, she warned that more suffering waited on the sea. " +
        N(11) + "He answered that he would endure it, for he longed to see his home.</p>",
      claims: [
        {
          id: "gifts",
          sol: "9.DSR.D",
          stem: "Select TWO sentences, one from each text, that describe the gift that tempts a traveler to stay.",
          choices: [
            { letter: "A", text: "Sentence 2: He sent three men inland to learn who lived there." },
            { letter: "B", text: "Sentence 3: The people meant no harm; they simply shared the honey-sweet lotus fruit." },
            { letter: "C", text: "Sentence 10: She warned that more suffering waited on the sea." },
            { letter: "D", text: "Sentence 8: She gave him every comfort and even offered to make him immortal." }
          ],
          correct: ["B", "D"]
        },
        {
          id: "who-resists",
          sol: "9.DSR.E",
          stem: "How do the two texts differ in the way the temptation is resisted?",
          choices: [
            { letter: "A", text: "In Text 1 Odysseus forces his men to leave; in Text 2 he resists by choice." },
            { letter: "B", text: "In Text 1 the men refuse the fruit; in Text 2 Odysseus accepts Calypso's gift." },
            { letter: "C", text: "In Text 1 the gods rescue the men; in Text 2 Odysseus escapes without them." },
            { letter: "D", text: "In both texts Odysseus tricks the one who offers the temptation." }
          ],
          correct: "A"
        },
        {
          id: "leader",
          sol: "9.RL.1.C",
          stem: "In Text 1, Odysseus's actions in sentences 5–6 show that he is —",
          choices: [
            { letter: "A", text: "cruel to men who disobey his orders" },
            { letter: "B", text: "curious about the land and its people" },
            { letter: "C", text: "decisive about protecting the voyage home" },
            { letter: "D", text: "afraid of the Lotus-Eaters and their weapons" }
          ],
          correct: "C"
        },
        {
          id: "shore",
          sol: "9.RL.1.B",
          stem: "Based on sentence 9, readers can infer that Odysseus —",
          choices: [
            { letter: "A", text: "is waiting for a ship that Calypso has promised him" },
            { letter: "B", text: "enjoys watching the waves around Ogygia" },
            { letter: "C", text: "has already built a raft and plans to leave" },
            { letter: "D", text: "is miserable on Ogygia because he misses home" }
          ],
          correct: "D"
        },
        {
          id: "immortal",
          sol: "9.RV.1.B",
          stem: "The prefix im- in immortal (sentence 8) shows that Calypso offers Odysseus a life that is —",
          choices: [
            { letter: "A", text: "lived inside a palace" },
            { letter: "B", text: "full of new adventures" },
            { letter: "C", text: "not subject to death" },
            { letter: "D", text: "shared with the gods" }
          ],
          correct: "C"
        },
        {
          id: "shared-theme",
          sol: "9.RL.1.A",
          stem: "Which theme do both texts develop?",
          choices: [
            { letter: "A", text: "Comfort can be dangerous when it makes people forget what they love." },
            { letter: "B", text: "Strangers who offer gifts are always planning to cause harm." },
            { letter: "C", text: "A leader should let his followers make their own choices." },
            { letter: "D", text: "The gods reward those who stay in one place for many years." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 5. medium · Paired · Odysseus vs Eurylochus ───────────── */
    {
      id: "ody-voyage-eurylochus",
      family: "ODY",
      episode: "voyage",
      title: "Odysseus and Eurylochus",
      kind: "Paired texts · 9.DSR",
      blurb: "The same shipmate speaks up twice, once at Circe's island and once on the island of the Sun.",
      level: 2,
      passage:
        "<p><strong>Text 1 — At Circe's House</strong></p>" +
        "<p>" + N(1) + "Eurylochus came running back to the ship alone, so shaken that at first he could not speak a word. " +
        N(2) + "At last he told us he had led half our crew to a stone house where tame wolves and lions prowled. " +
        N(3) + "A goddess invited the men inside, but Eurylochus hung back, sensing a trap, and not one man came out again. " +
        N(4) + "I slung my bronze sword over my shoulder, took up my bow, and told him to lead me back by the same path. " +
        N(5) + "He clutched my knees and begged. " +
        N(6) + "\"Do not force me there, son of Laertes, for you will never return, nor bring back a single friend. " +
        N(7) + "Let us sail away now with the men who are left, while we can still escape this day of ruin.\" " +
        N(8) + "\"Stay here by the ship, then, eating and drinking,\" I told him. " +
        N(9) + "\"I will go alone, for hard necessity drives me.\"</p>" +
        "<p><strong>Text 2 — On the Island of the Sun</strong></p>" +
        "<p>" + N(10) + "A month later, pinned on Thrinacia by contrary winds, we had eaten the last of our grain. " +
        N(11) + "I went inland to pray, and sleep closed my eyes, and while I slept, Eurylochus spoke to the hungry crew. " +
        N(12) + "\"Friends, every death is hateful to us mortals, but to starve is the most miserable of all. " +
        N(13) + "Come, let us drive off the best of Helios' cattle and sacrifice them to the gods. " +
        N(14) + "If we ever reach Ithaca, we will build the Sun a rich temple. " +
        N(15) + "And if he sinks our ship in anger, I would rather swallow the sea in one gulp than waste away slowly on a lonely island.\" " +
        N(16) + "The men cheered him. " +
        N(17) + "They had all sworn an oath to me to spare the herds, but hunger shouted louder than their promise. " +
        N(18) + "When I woke and smelled roasting meat, I groaned aloud to Zeus.</p>",
      claims: [
        {
          id: "plea",
          sol: "9.RL.1.D",
          stem: "Eurylochus's words in sentences 6–7 reveal that he is mainly —",
          choices: [
            { letter: "A", text: "angry that Odysseus did not lead the first group himself" },
            { letter: "B", text: "eager to rescue his friends without any help" },
            { letter: "C", text: "terrified and sure that fleeing is the only safe choice" },
            { letter: "D", text: "confident that the goddess can be defeated in battle" }
          ],
          correct: "C"
        },
        {
          id: "odysseus-goes",
          sol: "9.RL.1.C",
          stem: "How does Odysseus respond to the challenge in Text 1?",
          choices: [
            { letter: "A", text: "He faces the danger himself rather than abandon the missing men." },
            { letter: "B", text: "He orders Eurylochus to rescue the men as punishment." },
            { letter: "C", text: "He agrees to sail away once the ship is fully loaded." },
            { letter: "D", text: "He waits by the ship until the goddess sends the missing men back." }
          ],
          correct: "A"
        },
        {
          id: "hunger",
          sol: "9.RL.2.A",
          stem: "In sentence 17, the personification hunger shouted louder than their promise suggests that —",
          choices: [
            { letter: "A", text: "the men argued loudly about whether to keep their oath" },
            { letter: "B", text: "Odysseus heard the men shouting from where he slept" },
            { letter: "C", text: "the men forgot that they had ever made a promise" },
            { letter: "D", text: "the men's need for food overpowered their sworn word" }
          ],
          correct: "D"
        },
        {
          id: "necessity",
          sol: "9.RV.1.C",
          stem: "In sentence 9, the word necessity most nearly means —",
          choices: [
            { letter: "A", text: "a duty that cannot be avoided" },
            { letter: "B", text: "a wish for fame and glory" },
            { letter: "C", text: "a fear of the unknown" },
            { letter: "D", text: "a promise made to a god" }
          ],
          correct: "A"
        },
        {
          id: "proposals",
          sol: "9.DSR.D",
          stem: "Select TWO sentences in which Eurylochus proposes a specific action to escape hardship.",
          choices: [
            { letter: "A", text: "Sentence 4: I slung my bronze sword over my shoulder, took up my bow..." },
            { letter: "B", text: "Sentence 7: Let us sail away now with the men who are left..." },
            { letter: "C", text: "Sentence 12: Friends, every death is hateful to us mortals..." },
            { letter: "D", text: "Sentence 13: Come, let us drive off the best of Helios' cattle..." }
          ],
          correct: ["B", "D"]
        },
        {
          id: "contrast",
          sol: "9.DSR.E",
          stem: "Which statement best contrasts how Odysseus and Eurylochus face hardship across both texts?",
          choices: [
            { letter: "A", text: "Odysseus avoids risk, while Eurylochus rushes toward every danger." },
            { letter: "B", text: "Odysseus trusts the gods to save him, while Eurylochus trusts only himself." },
            { letter: "C", text: "Odysseus endures hardship, while Eurylochus looks for the fastest way out of it." },
            { letter: "D", text: "Odysseus gives in to hunger, while Eurylochus keeps the oath to spare the herds." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 6. medium · Paired · coping strategies + the raft ───────────── */
    {
      id: "ody-voyage-setbacks-raft",
      family: "ODY",
      episode: "voyage",
      title: "Bouncing Back",
      kind: "Paired texts · 9.DSR",
      blurb: "Four habits for recovering from setbacks, set beside Odysseus in Poseidon's storm.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Four Habits for Hard Times</strong></p>" +
        "<p>" + N(1) + "Everyone faces setbacks, from a failed test to a lost game, but people who recover well tend to use a few habits that anyone can learn. " +
        N(2) + "The first is reframing: instead of thinking \"I always fail,\" a resilient person asks, \"What can I try differently next time?\" " +
        N(3) + "The second is asking for help, which is a sign of good judgment, not weakness, because another person may see a way out that you cannot. " +
        N(4) + "The third is breaking a large problem into small steps, since a single step feels possible even when the whole climb does not. " +
        N(5) + "The fourth is persistence, the willingness to keep going after the first, second, or third try falls short. " +
        N(6) + "Recovering from setbacks, then, is not a gift people are simply born with; it is a set of skills that grows stronger each time it is used.</p>" +
        "<p><strong>Text 2 — The Raft</strong></p>" +
        "<p>" + N(7) + "On the eighteenth day after leaving Calypso's island, Odysseus saw the shadowy mountains of the Phaeacians rise from the sea. " +
        N(8) + "But Poseidon, the Earth-Shaker, saw him and gathered all the winds into one storm. " +
        N(9) + "As a late-summer wind tosses dry thistles across a field, so the gale tossed the little raft across the sea. " +
        N(10) + "Then the sea-goddess Ino rose beside him like a diving gull and offered him her veil, telling him to leave the raft and swim. " +
        N(11) + "Odysseus, master of schemes, feared another trick of the gods. " +
        N(12) + "\"I will stay aboard while the timbers hold,\" he said, \"and swim only when the sea gives me no choice.\" " +
        N(13) + "When a great wave scattered the planks, he straddled one beam like a rider on horseback, tied the veil beneath his chest, and dove into the swells. " +
        N(14) + "For two nights and two days he swam, until at last he saw land.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of Text 1?",
          choices: [
            { letter: "A", text: "Recovering from setbacks depends on habits people can learn." },
            { letter: "B", text: "People who ask for help usually fail more often than other people." },
            { letter: "C", text: "Most setbacks happen because people do not plan carefully." },
            { letter: "D", text: "Only a few people are born able to bounce back from failure." }
          ],
          correct: "A"
        },
        {
          id: "resilient",
          sol: "9.RV.1.C",
          stem: "In sentence 2, the word resilient most nearly means —",
          choices: [
            { letter: "A", text: "worried about making any mistakes" },
            { letter: "B", text: "unwilling to change a plan" },
            { letter: "C", text: "able to recover from difficulty" },
            { letter: "D", text: "quick to blame other people" }
          ],
          correct: "C"
        },
        {
          id: "thistles",
          sol: "9.RL.2.A",
          stem: "The epic simile in sentence 9 mainly emphasizes —",
          choices: [
            { letter: "A", text: "how close the raft has come to the Phaeacian shore" },
            { letter: "B", text: "the season in which Odysseus sets out" },
            { letter: "C", text: "how carefully Odysseus built his raft" },
            { letter: "D", text: "how helpless the raft is against the storm" }
          ],
          correct: "D"
        },
        {
          id: "timbers",
          sol: "9.RL.1.C",
          stem: "Odysseus's words in sentence 12 show that he responds to Ino's offer by —",
          choices: [
            { letter: "A", text: "weighing the risks before trusting help he is unsure of" },
            { letter: "B", text: "refusing all help because he wants the glory for himself" },
            { letter: "C", text: "obeying the goddess at once without asking any questions" },
            { letter: "D", text: "giving up hope and waiting for the sea to sink him" }
          ],
          correct: "A"
        },
        {
          id: "strategies",
          sol: "9.DSR.D",
          stem: "Select TWO sentences from Text 2 that show Odysseus using a strategy described in Text 1.",
          choices: [
            { letter: "A", text: "Sentence 7: Odysseus saw the shadowy mountains of the Phaeacians rise from the sea." },
            { letter: "B", text: "Sentence 13: He straddled one beam... tied the veil beneath his chest, and dove into the swells." },
            { letter: "C", text: "Sentence 8: Poseidon, the Earth-Shaker, saw him and gathered all the winds into one storm." },
            { letter: "D", text: "Sentence 14: For two nights and two days he swam, until at last he saw land." }
          ],
          correct: ["B", "D"]
        },
        {
          id: "complicates",
          sol: "9.DSR.E",
          stem: "How does Text 2 add to the advice about asking for help in Text 1?",
          choices: [
            { letter: "A", text: "It proves that help from others always makes a problem worse." },
            { letter: "B", text: "It suggests that help matters only when the danger is small." },
            { letter: "C", text: "It shows that accepting help can mean deciding whom to trust." },
            { letter: "D", text: "It argues that a hero should solve every problem by himself." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 7. long · The Odyssey · the tale begins at court ───────────── */
    {
      id: "ody-voyage-court-tale",
      family: "ODY",
      episode: "voyage",
      title: "The Tale Begins at Alcinous' Court",
      kind: "The Odyssey · 9.RL",
      blurb: "A weeping stranger names himself and looks back on every wreck of his voyage.",
      level: 3,
      passage:
        "<p>" + N(1) + "In the high-roofed hall of Alcinous, king of the Phaeacians, the blind singer Demodocus struck his lyre and sang of the wooden horse and the fall of Troy. " +
        N(2) + "The stranger seated at the king's side drew his purple cloak over his face and wept in silence. " +
        N(3) + "Only Alcinous noticed, and when the song ended he asked his guest at last to tell his name, his country, and his wanderings. " +
        N(4) + "Then Odysseus, master of schemes, wiped his eyes and began.</p>" +
        "<p>" + N(5) + "\"I am Odysseus, son of Laertes, and I will tell you of the grief Zeus loaded onto my homeward road. " +
        N(6) + "When we sailed from Troy, the wind carried us to Ismarus, city of the Cicones, and we sacked it. " +
        N(7) + "I told my men to run for the ships, but the fools stayed to feast on the beach, and at dawn the Cicones came against us as thick as leaves in spring. " +
        N(8) + "Six men from every ship died there, and that was only the first time my crew ignored my warning.</p>" +
        "<p>" + N(9) + "\"A storm drove us nine days across the sea to the land of the Lotus-Eaters. " +
        N(10) + "The men I sent ahead ate the honey-sweet lotus, and they forgot home so completely that I had to drag them weeping to the ships. " +
        N(11) + "Next we reached the island of the Cyclopes, lawless giants who plant nothing and fear no god. " +
        N(12) + "I wanted to see whether the cave-dweller there would honor us as guests, and that curiosity cost me six men, seized and devoured by Polyphemus. " +
        N(13) + "I escaped by giving him wine, calling myself Nobody, and blinding him with a sharpened stake while he slept. " +
        N(14) + "But as we rowed away, I could not resist shouting my true name across the water, and the giant prayed to his father Poseidon that I would come home late, alone, and on a stranger's ship.</p>" +
        "<p>" + N(15) + "\"After that, the goddess Circe turned half my crew into swine, and only Hermes' gift of a magic herb let me free them. " +
        N(16) + "Circe sent me down to the land of the dead, where the prophet Tiresias warned me: whatever happens, do not harm the cattle of the Sun. " +
        N(17) + "Remember that warning, my friends, for you will hear it again before my tale is finished.</p>" +
        "<p>" + N(18) + "\"I will tell it all in order: the singing Sirens, six-headed Scylla, and the island where my starving men slaughtered the forbidden cattle while I slept. " +
        N(19) + "Zeus struck our ship with a thunderbolt, and the sea took every one of my companions. " +
        N(20) + "I alone clung to the wreckage and drifted to Calypso's island, and from there, after seven long years, to your shore. " +
        N(21) + "That is why I weep, King Alcinous, when your singer sings of Troy: every man who sailed home with me is gone, and only I am left to remember them.\"</p>",
      claims: [
        {
          id: "flashback",
          sol: "9.RL.3.A",
          stem: "Sentences 1–4 are told by an outside narrator, and sentences 5–21 are told by Odysseus. This structure mainly allows the passage to —",
          choices: [
            { letter: "A", text: "show the Phaeacians' history before Odysseus arrives" },
            { letter: "B", text: "present earlier adventures as a flashback within the court scene" },
            { letter: "C", text: "let Demodocus finish his song about the fall of Troy" },
            { letter: "D", text: "retell the events of the voyage from the point of view of the crew" }
          ],
          correct: "B"
        },
        {
          id: "leaves",
          sol: "9.RL.2.A",
          stem: "In sentence 7, the simile as thick as leaves in spring mainly emphasizes —",
          choices: [
            { letter: "A", text: "the time of year when the Greeks left Troy" },
            { letter: "B", text: "the beauty of the land around Ismarus" },
            { letter: "C", text: "the huge number of warriors who attacked" },
            { letter: "D", text: "the quiet way the Cicones crept toward the ships" }
          ],
          correct: "C"
        },
        {
          id: "lawless",
          sol: "9.RV.1.C",
          stem: "In sentence 11, the word lawless most nearly means —",
          choices: [
            { letter: "A", text: "living without rules or justice" },
            { letter: "B", text: "unable to speak any language" },
            { letter: "C", text: "too large to live in houses" },
            { letter: "D", text: "skilled at farming the land around them" }
          ],
          correct: "A"
        },
        {
          id: "pride",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows that Odysseus's own pride creates a new challenge for him?",
          choices: [
            { letter: "A", text: "Sentence 7, where he tells his men to run for the ships" },
            { letter: "B", text: "Sentence 13, where he calls himself Nobody" },
            { letter: "C", text: "Sentence 16, where Tiresias gives him a warning" },
            { letter: "D", text: "Sentence 14, where he shouts his true name" }
          ],
          correct: "D"
        },
        {
          id: "poseidon",
          sol: "9.RV.1.F",
          stem: "In sentence 14, the giant prays to his father Poseidon. Because Poseidon is the god of the sea, readers can predict that —",
          choices: [
            { letter: "A", text: "Odysseus's sea voyage will become far more dangerous" },
            { letter: "B", text: "the giant will follow Odysseus's ship across the water" },
            { letter: "C", text: "Poseidon will forgive Odysseus once he reaches Ithaca" },
            { letter: "D", text: "the crew will return to the island to make peace" }
          ],
          correct: "A"
        },
        {
          id: "remember",
          sol: "9.RL.3.A",
          stem: "Odysseus says Remember that warning in sentence 17 mainly to —",
          choices: [
            { letter: "A", text: "prove that the prophet Tiresias was mistaken" },
            { letter: "B", text: "build suspense by hinting the warning will matter later" },
            { letter: "C", text: "explain why the Phaeacians keep their own herds" },
            { letter: "D", text: "change the subject from the Cyclops to the singing Sirens" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is developed across Odysseus's whole tale?",
          choices: [
            { letter: "A", text: "Curiosity about new lands is always rewarded." },
            { letter: "B", text: "A good leader never has to depend on his crew." },
            { letter: "C", text: "A lack of self-control brings painful consequences." },
            { letter: "D", text: "The gods care little about what mortals choose." }
          ],
          correct: "C"
        },
        {
          id: "weeps",
          sol: "9.RL.1.B",
          stem: "Based on sentences 2 and 21 together, readers can infer that Odysseus weeps at the song of Troy because —",
          choices: [
            { letter: "A", text: "he is ashamed that the Greeks lost the war" },
            { letter: "B", text: "Demodocus has told the story incorrectly" },
            { letter: "C", text: "he wants Alcinous to give him a ship" },
            { letter: "D", text: "it reminds him of the companions he lost" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 8. epic · Paired · modern ninth grader + the Sirens ───────────── */
    {
      id: "ody-voyage-tie-me-tighter",
      family: "ODY",
      episode: "voyage",
      title: "Tie Me Tighter",
      kind: "Paired texts · 9.DSR",
      blurb: "A new student facing a long audition and Odysseus passing the Sirens both plan for their own weak moment.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Eight Weeks</strong></p>" +
        "<p>" + N(1) + "When her family moved three states away in January, Ji-woo Park lost two things at once: her friends and her seat in the band. " +
        N(2) + "At her new high school, the jazz band had been rehearsing for months, and auditions for the spring concert were only eight weeks off. " +
        N(3) + "The first time she played for the director, her high notes squeaked like a rusty hinge, and a drummer laughed before he could stop himself.</p>" +
        "<p>" + N(4) + "That night she lay awake texting old friends until after one o'clock, scrolling through photos of a cafeteria table where someone else now sat in her chair. " +
        N(5) + "In the morning she was too tired to practice, and she knew exactly how the next eight weeks would go if nothing changed.</p>" +
        "<p>" + N(6) + "So she made a plan, and she made it while she still felt strong. " +
        N(7) + "Every night at nine, she handed her phone to her older brother, Min-jun. " +
        N(8) + "\"Even if I beg,\" she told him, \"don't give it back.\" " +
        N(9) + "She asked the section leader, a senior named Tavia, to show her the breathing exercises that had once fixed Tavia's own squeaks. " +
        N(10) + "She divided the hardest solo into eight short phrases and learned one each week.</p>" +
        "<p>" + N(11) + "In week five, after a terrible rehearsal, she knocked on Min-jun's door at ten-thirty and demanded her phone. " +
        N(12) + "\"You told me you'd say this,\" he answered through the door, and he did not open it. " +
        N(13) + "She was furious for twenty minutes; then she took out her mouthpiece and buzzed scales quietly into a pillow.</p>" +
        "<p>" + N(14) + "On audition day her third note cracked, and for one long second she wanted to set the trumpet down and walk out. " +
        N(15) + "Instead she breathed the way Tavia had taught her and played the rest of the solo straight through. " +
        N(16) + "She earned the last seat in the trumpet section. " +
        N(17) + "Walking home, she realized she had not looked at the old cafeteria photos in weeks, and that surprised her more than the seat did.</p>" +
        "<p><strong>Text 2 — The Sirens</strong></p>" +
        "<p>" + N(18) + "Before we left her island, Circe warned me of the Sirens, whose song makes sailors forget home and children and steer onto the rocks. " +
        N(19) + "She told me that if I wished to hear that song and live, I must be bound to the mast while my men rowed past with their ears sealed. " +
        N(20) + "As our ship drew near the Sirens' island, the wind died, a breathless calm lay over the water, and my men took down the sail and bent to their oars. " +
        N(21) + "I told them all that Circe had said, for I would not let them face that danger blind. " +
        N(22) + "Then I cut a wheel of beeswax with my bronze sword, kneaded it soft in the hot sun, and sealed each man's ears. " +
        N(23) + "They bound me hand and foot to the mast, upright, with the ropes made fast. " +
        N(24) + "\"If I beg you to release me,\" I told them, \"tie me tighter still.\" " +
        N(25) + "Soon the Sirens' voices drifted across the water, sweet as honey dripping from the comb. " +
        N(26) + "\"Come closer, famous Odysseus, pride of the Greeks,\" they sang. \"We know every sorrow the Greeks and Trojans suffered at Troy, and no sailor who hears us ever leaves without new wisdom.\" " +
        N(27) + "My heart ached to hear more; I strained against the ropes and frowned and nodded at my men to set me free. " +
        N(28) + "But they leaned harder into their oars, and Perimedes and Eurylochus rose and bound me with still more rope. " +
        N(29) + "Not until the song had faded behind us did my faithful crew take the wax from their ears and untie me. " +
        N(30) + "Yet I could not rejoice for long, for already I saw spray and smoke ahead, where Scylla and Charybdis waited.</p>",
      claims: [
        {
          id: "jiwoo-change",
          sol: "9.RL.1.C",
          stem: "Which choice best describes how Ji-woo changes over the course of Text 1?",
          choices: [
            { letter: "A", text: "She moves from homesick and discouraged to determined and more settled." },
            { letter: "B", text: "She moves from confident and proud to embarrassed and ready to quit." },
            { letter: "C", text: "She stays focused on her old friends and never adjusts to the new school." },
            { letter: "D", text: "She begins as a strong player and ends as the band's best trumpeter." }
          ],
          correct: "A"
        },
        {
          id: "door",
          sol: "9.RL.3.A",
          stem: "The author includes the scene in sentences 11–12 mainly to —",
          choices: [
            { letter: "A", text: "show that Min-jun does not care about his sister's feelings" },
            { letter: "B", text: "suggest that Ji-woo's whole plan has completely fallen apart by week five" },
            { letter: "C", text: "show that a plan made in a strong moment protects her in a weak one" },
            { letter: "D", text: "explain why Ji-woo earns the last seat instead of the first" }
          ],
          correct: "C"
        },
        {
          id: "honey",
          sol: "9.RL.2.A",
          stem: "In sentence 25, the simile sweet as honey dripping from the comb mainly helps the reader understand —",
          choices: [
            { letter: "A", text: "that the Sirens' island is covered with beehives" },
            { letter: "B", text: "why the crew is hungry as they row past the island" },
            { letter: "C", text: "that the Sirens sing quietly and are hard to hear" },
            { letter: "D", text: "why the song is so hard for a listener to resist" }
          ],
          correct: "D"
        },
        {
          id: "fast",
          sol: "9.RV.1.C",
          stem: "In sentence 23, the word fast in the phrase the ropes made fast most nearly means —",
          choices: [
            { letter: "A", text: "moving with great speed" },
            { letter: "B", text: "firmly fixed in place" },
            { letter: "C", text: "going without any food" },
            { letter: "D", text: "loose enough to slip" }
          ],
          correct: "B"
        },
        {
          id: "siren-speech",
          sol: "9.RL.1.D",
          stem: "The Sirens' words in sentence 26 are designed to tempt Odysseus by —",
          choices: [
            { letter: "A", text: "appealing to his love of fame and his hunger for knowledge" },
            { letter: "B", text: "threatening to sink his ship if he refuses to stop" },
            { letter: "C", text: "promising that they will guide his ship safely home to Ithaca" },
            { letter: "D", text: "reminding him of his wife and son waiting at home" }
          ],
          correct: "A"
        },
        {
          id: "in-advance",
          sol: "9.DSR.D",
          stem: "Select TWO sentences, one from each text, in which a character arranges in advance for others to refuse a later request.",
          choices: [
            { letter: "A", text: "Sentence 9: She asked the section leader, a senior named Tavia, to show her the breathing exercises..." },
            { letter: "B", text: "Sentence 8: \"Even if I beg,\" she told him, \"don't give it back.\"" },
            { letter: "C", text: "Sentence 28: Perimedes and Eurylochus rose and bound me with still more rope." },
            { letter: "D", text: "Sentence 24: \"If I beg you to release me,\" I told them, \"tie me tighter still.\"" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "alike",
          sol: "9.DSR.E",
          stem: "How are Ji-woo and Odysseus most alike in the way they respond to their challenges?",
          choices: [
            { letter: "A", text: "Both refuse to tell anyone else about the danger they face." },
            { letter: "B", text: "Both are rescued by good luck rather than by their own careful choices." },
            { letter: "C", text: "Both expect a weak moment and rely on others to hold them to a plan." },
            { letter: "D", text: "Both decide the challenge is not worth facing and turn back." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.E",
          stem: "Which statement best explains a key difference between the two characters' journeys?",
          choices: [
            { letter: "A", text: "Ji-woo faces her challenge alone, while Odysseus has help." },
            { letter: "B", text: "Ji-woo's challenge lasts one afternoon, while his lasts years." },
            { letter: "C", text: "Ji-woo fails her audition, while Odysseus passes the Sirens." },
            { letter: "D", text: "Odysseus fights to reach his old home, while Ji-woo accepts a new one." }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
