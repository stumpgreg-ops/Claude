/* SOL Labyrinth — The Odyssey: Scylla and Charybdis (English 9 Unit 2, family ODY)
 * Original retellings of Odyssey Book 12 (Circe's warning, the Wandering Rocks, Scylla and
 * Charybdis), stopping before the landing on Thrinacia. The plot is public domain; the
 * wording here is new and does not follow any modern translation or textbook.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────── short · level 2 ───────────── */
    {
      id: "ody-scylla-two-routes",
      family: "ODY",
      episode: "scylla",
      title: "Two Ways Past",
      kind: "The Odyssey · 9.RL",
      blurb: "Circe warns Odysseus that the road home splits into two dangerous routes.",
      level: 2,
      passage:
        "<p>" + N(1) + "Before Odysseus sailed from her island, Circe took him aside and told him the dangers of the road ahead. " +
        N(2) + "\"Once you have passed the Sirens, two routes lie before you, and you must choose between them yourself,\" she said. " +
        N(3) + "\"On one side stand the Wandering Rocks, where the dark sea booms and breaks in foam, and planks from lost ships drift among the flames. " +
        N(4) + "Not even the doves that carry food to Zeus fly through them safely; each time, the bare stone snatches one away. " +
        N(5) + "Only one ship has ever made it through: the Argo, famous in every song, sailing home from the far east. " +
        N(6) + "Even she would have been dashed on the rocks if Hera had not guided her past, out of love for her captain, Jason. " +
        N(7) + "On the other route rise two cliffs facing each other across a narrow strait.\"</p>",
      claims: [
        {
          id: "choice",
          sol: "9.RL.3.B",
          stem: "In sentence 2, Circe tells Odysseus that he must choose between the routes himself. This detail suggests that Odysseus will face —",
          choices: [
            { letter: "A", text: "a crew that refuses to follow his orders" },
            { letter: "B", text: "a hard decision in which no path is fully safe" },
            { letter: "C", text: "a goddess who plans to lead him into a trap" },
            { letter: "D", text: "a quick and easy voyage the rest of the way home" }
          ],
          correct: "B"
        },
        {
          id: "doves",
          sol: "9.RL.2.B",
          stem: "Circe mentions the doves that carry food to Zeus in sentence 4 mainly to show that —",
          choices: [
            { letter: "A", text: "Zeus will send birds to guide Odysseus's ship" },
            { letter: "B", text: "the rocks are a good place to hunt for food" },
            { letter: "C", text: "Odysseus has angered Zeus by trespassing" },
            { letter: "D", text: "even creatures that serve the gods cannot pass unharmed" }
          ],
          correct: "D"
        },
        {
          id: "argo",
          sol: "9.RV.1.F",
          stem: "Sentences 5 and 6 contain an allusion to the Argo, the ship of the hero Jason in an older Greek legend. This allusion mainly helps show that —",
          choices: [
            { letter: "A", text: "only a famous crew with a goddess's help has ever survived the rocks" },
            { letter: "B", text: "Jason once warned Odysseus never to sail near the rocks" },
            { letter: "C", text: "the Argo is waiting on the far side to rescue Odysseus" },
            { letter: "D", text: "Hera has promised to protect Odysseus the same way" }
          ],
          correct: "A"
        },
        {
          id: "strait",
          sol: "9.RV.1.C",
          stem: "In sentence 7, the word strait most nearly means —",
          choices: [
            { letter: "A", text: "a straight, level road" },
            { letter: "B", text: "a high and rocky island" },
            { letter: "C", text: "a narrow channel of water" },
            { letter: "D", text: "a deep cave in a cliff" }
          ],
          correct: "C"
        },
        {
          id: "voice",
          sol: "9.RL.2.C",
          stem: "From sentence 2 to the end, most of the passage is told through —",
          choices: [
            { letter: "A", text: "Circe's own words as she warns Odysseus" },
            { letter: "B", text: "the thoughts of the frightened crew" },
            { letter: "C", text: "a song that Odysseus learned from Jason" },
            { letter: "D", text: "Odysseus's memories of an earlier voyage" }
          ],
          correct: "A"
        },
        {
          id: "central",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses the central idea of the passage?",
          choices: [
            { letter: "A", text: "Circe hopes to keep Odysseus on her island by frightening him." },
            { letter: "B", text: "The Sirens are the greatest danger Odysseus will meet at sea." },
            { letter: "C", text: "Odysseus has already decided which route he will take." },
            { letter: "D", text: "Odysseus must choose between dangers that few have survived." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── medium · level 2 ───────────── */
    {
      id: "ody-scylla-cliff-and-whirlpool",
      family: "ODY",
      episode: "scylla",
      title: "The Cliff and the Whirlpool",
      kind: "The Odyssey · 9.RL",
      blurb: "Circe describes the six-headed Scylla, the whirlpool Charybdis, and a terrible bargain.",
      level: 2,
      passage:
        "<p>" + N(1) + "\"The first cliff stabs up into the sky, its peak wrapped in a cloud that never clears,\" Circe went on. " +
        N(2) + "\"No man could climb it, for its face is as smooth as polished stone. " +
        N(3) + "Halfway up is a cave, too high for any arrow to reach. " +
        N(4) + "There lives Scylla, whose yelp is no louder than a newborn puppy's, but she is a dreadful monster. " +
        N(5) + "She has twelve dangling feet and six long necks, and on each neck sits a hideous head with three rows of teeth. " +
        N(6) + "No crew has ever sailed past her without loss, for each head carries off a man. " +
        N(7) + "The second cliff is lower, and a great fig tree grows on it. " +
        N(8) + "Beneath that tree, Charybdis sucks down the black water three times a day and three times spews it up again. " +
        N(9) + "Do not be there when she swallows; not even the Earthshaker could save you. " +
        N(10) + "Steer close to Scylla's cliff instead. " +
        N(11) + "It is far better to mourn six men than to lose them all.\"</p>",
      claims: [
        {
          id: "smooth",
          sol: "9.RV.1.F",
          stem: "In sentence 2, the comparison as smooth as polished stone mainly emphasizes that the cliff —",
          choices: [
            { letter: "A", text: "shines brightly in the summer sun" },
            { letter: "B", text: "was carved and polished by the gods" },
            { letter: "C", text: "offers no handholds for a climber" },
            { letter: "D", text: "is made of a rare and valuable rock" }
          ],
          correct: "C"
        },
        {
          id: "puppy",
          sol: "9.RL.2.B",
          stem: "In sentence 4, Circe says Scylla's yelp is no louder than a newborn puppy's but calls her a monster. This contrast makes Scylla seem —",
          choices: [
            { letter: "A", text: "more unsettling, because a harmless-sounding voice hides great danger" },
            { letter: "B", text: "less frightening, because she is really a small and gentle creature" },
            { letter: "C", text: "lonely, because she calls out for company from her high cave" },
            { letter: "D", text: "foolish, because she warns ships before she attacks them" }
          ],
          correct: "A"
        },
        {
          id: "hideous",
          sol: "9.RV.1.C",
          stem: "In sentence 5, the word hideous most nearly means —",
          choices: [
            { letter: "A", text: "hidden from view" },
            { letter: "B", text: "horribly ugly" },
            { letter: "C", text: "very old" },
            { letter: "D", text: "oddly small" }
          ],
          correct: "B"
        },
        {
          id: "earthshaker",
          sol: "9.RL.2.A",
          stem: "In sentence 9, the Earthshaker is an epithet, a descriptive name, for Poseidon, god of the sea. Using this epithet here suggests that —",
          choices: [
            { letter: "A", text: "Poseidon lives in the whirlpool alongside Charybdis" },
            { letter: "B", text: "an earthquake will soon destroy the second cliff" },
            { letter: "C", text: "Poseidon has already forgiven Odysseus for the Cyclops" },
            { letter: "D", text: "Charybdis is stronger than even a mighty god's help" }
          ],
          correct: "D"
        },
        {
          id: "bargain",
          sol: "9.RL.3.B",
          stem: "Based on sentences 6 and 8–11, why does Circe tell Odysseus to steer close to Scylla's cliff?",
          choices: [
            { letter: "A", text: "Scylla will take only some of the men, but Charybdis could sink the whole ship." },
            { letter: "B", text: "Scylla sleeps during the day, so the ship can slip past her cave unseen." },
            { letter: "C", text: "The fig tree on Scylla's cliff will give the crew food for the voyage." },
            { letter: "D", text: "Charybdis swallows only dolphins and seals, not passing ships." }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does Circe's warning most clearly develop?",
          choices: [
            { letter: "A", text: "Monsters are rarely as dangerous as the stories about them." },
            { letter: "B", text: "A clever plan can always bring a whole crew home safely." },
            { letter: "C", text: "A leader may have to accept a painful loss to save the many." },
            { letter: "D", text: "The gods reward travelers who choose the shortest route." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── short · level 1 ───────────── */
    {
      id: "ody-scylla-stubborn",
      family: "ODY",
      episode: "scylla",
      title: "Will You Not Yield?",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus asks whether he can fight Scylla, and Circe scolds him for it.",
      level: 1,
      passage:
        "<p>" + N(1) + "Then I asked her a question that burned in me. " +
        N(2) + "\"Goddess, if I slip past the whirlpool, can I not fight off Scylla when she strikes at my men?\" " +
        N(3) + "Circe shook her head at me. " +
        N(4) + "\"Stubborn man, is your heart still set on battle? " +
        N(5) + "Will you not give way even to the deathless gods? " +
        N(6) + "Scylla is no mortal; she is an undying evil. " +
        N(7) + "Against her there is no defense, and the bravest course is to run. " +
        N(8) + "If you linger by her cliff to arm yourself, she will dart out again and take six more men. " +
        N(9) + "Row past her with all your strength, and call on her mother, Crataeis. " +
        N(10) + "She will hold her daughter back from striking twice.\"</p>",
      claims: [
        {
          id: "fighter",
          sol: "9.RL.1.C",
          stem: "Odysseus's question in sentence 2 shows that he —",
          choices: [
            { letter: "A", text: "has decided to take the route through the Wandering Rocks" },
            { letter: "B", text: "doubts that Scylla is real and wants Circe to prove it" },
            { letter: "C", text: "would rather fight for his men than simply accept losing them" },
            { letter: "D", text: "wants Circe to sail with him and battle the monster" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          stem: "In sentence 4, Circe calls Odysseus Stubborn man. Her tone in this sentence is best described as —",
          choices: [
            { letter: "A", text: "scolding" },
            { letter: "B", text: "admiring" },
            { letter: "C", text: "frightened" },
            { letter: "D", text: "playful" }
          ],
          correct: "A"
        },
        {
          id: "hubris",
          sol: "9.RL.3.A",
          stem: "The ancient Greeks warned against hubris, the excessive pride that leads a mortal to act as if he were equal to the gods. Circe's question in sentence 5 suggests that Odysseus's plan —",
          choices: [
            { letter: "A", text: "shows proper respect for the gods who rule the sea" },
            { letter: "B", text: "risks hubris, because a mortal cannot overpower an immortal" },
            { letter: "C", text: "will earn him the favor of Scylla's mother, Crataeis" },
            { letter: "D", text: "is wise, because armor can protect his men from harm" }
          ],
          correct: "B"
        },
        {
          id: "linger",
          sol: "9.RV.1.C",
          stem: "In sentence 8, the word linger most nearly means —",
          choices: [
            { letter: "A", text: "to call out loudly" },
            { letter: "B", text: "to row in a circle" },
            { letter: "C", text: "to hide in fear" },
            { letter: "D", text: "to stay longer than is safe" }
          ],
          correct: "D"
        },
        {
          id: "run",
          sol: "9.RL.2.C",
          stem: "In sentence 7, Circe says that the bravest course is to run. She most likely means that —",
          choices: [
            { letter: "A", text: "Odysseus's crew is too cowardly to be trusted in a fight" },
            { letter: "B", text: "running past Scylla will earn Odysseus lasting fame" },
            { letter: "C", text: "the men should leave the ship and escape on foot" },
            { letter: "D", text: "in this case, retreat takes more wisdom than fighting does" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of the passage?",
          choices: [
            { letter: "A", text: "True courage includes knowing the limits of one's strength." },
            { letter: "B", text: "A hero should never ask others for advice before acting." },
            { letter: "C", text: "The gods always protect those who are brave in battle." },
            { letter: "D", text: "Strong armor matters more than speed in times of danger." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── short · level 1 ───────────── */
    {
      id: "ody-scylla-silence",
      family: "ODY",
      episode: "scylla",
      title: "What the Crew Was Not Told",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus steadies his terrified crew but keeps one danger to himself.",
      level: 1,
      passage:
        "<p>" + N(1) + "With the Sirens' island behind us, I saw smoke and a towering wave ahead and heard a heavy booming. " +
        N(2) + "My men were so frightened that the oars flew from their hands, and the ship stopped dead. " +
        N(3) + "I went from man to man and spoke gently. " +
        N(4) + "\"Friends, we have faced worse than this; remember how my plan got us out of the Cyclops's cave. " +
        N(5) + "Grip your oars and row, and you, helmsman, keep us clear of that smoke and surf and hug the cliff.\" " +
        N(6) + "But I said nothing about Scylla, for fear they would drop their oars and hide below. " +
        N(7) + "Then, forgetting Circe's hard advice, I put on my armor, took two long spears, and stood at the prow.</p>",
      claims: [
        {
          id: "senses",
          sol: "9.RL.2.A",
          stem: "Sentence 1 uses imagery that appeals mainly to the senses of —",
          choices: [
            { letter: "A", text: "taste and smell" },
            { letter: "B", text: "touch and taste" },
            { letter: "C", text: "smell and touch" },
            { letter: "D", text: "sight and hearing" }
          ],
          correct: "D"
        },
        {
          id: "cyclops",
          sol: "9.RL.1.C",
          stem: "In sentence 4, Odysseus reminds his men of the Cyclops's cave most likely to —",
          choices: [
            { letter: "A", text: "warn them that another giant lives on the cliff" },
            { letter: "B", text: "give them confidence by recalling a past escape" },
            { letter: "C", text: "blame them for the mistakes they made in the cave" },
            { letter: "D", text: "explain why Poseidon has sent the towering wave" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          stem: "Because Odysseus tells this story in the first person, sentence 6 lets readers know something the crew does not. What is it?",
          choices: [
            { letter: "A", text: "A monster waits on the cliff they are steering toward." },
            { letter: "B", text: "The smoke comes from a ship that has caught fire." },
            { letter: "C", text: "Odysseus plans to turn back toward Circe's island." },
            { letter: "D", text: "The Sirens are still following close behind the ship." }
          ],
          correct: "A"
        },
        {
          id: "prow",
          sol: "9.RV.1.C",
          stem: "In sentence 7, the word prow most nearly means —",
          choices: [
            { letter: "A", text: "the mast that holds the sail" },
            { letter: "B", text: "the bench where rowers sit" },
            { letter: "C", text: "the front part of the ship" },
            { letter: "D", text: "the storage room below deck" }
          ],
          correct: "C"
        },
        {
          id: "armor",
          sol: "9.RL.3.B",
          stem: "Sentence 7 creates tension mainly because Odysseus —",
          choices: [
            { letter: "A", text: "orders the helmsman to sail straight into the smoke" },
            { letter: "B", text: "prepares to fight even though Circe said fighting was useless" },
            { letter: "C", text: "gives his only spears to the youngest men in the crew" },
            { letter: "D", text: "leaves the ship to climb the cliff toward Scylla's cave" }
          ],
          correct: "B"
        },
        {
          id: "central",
          sol: "9.RL.1.A",
          stem: "Which idea about leadership does the passage most strongly suggest?",
          choices: [
            { letter: "A", text: "A good leader shares every danger openly with his followers." },
            { letter: "B", text: "Leaders should let the crew vote on which route to take." },
            { letter: "C", text: "A leader may carry a painful truth alone to keep others going." },
            { letter: "D", text: "Fear disappears once a leader gives a single clear order." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── medium · level 2 · verse ───────────── */
    {
      id: "ody-scylla-whirlpool",
      family: "ODY",
      episode: "scylla",
      title: "The Mouth of Charybdis",
      kind: "Epic poetry · 9.RL",
      blurb: "The ship enters the strait, and every eye is fixed on the roaring whirlpool.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Then we sailed into the strait, groaning as we pulled the oars,<br>" +
        L(2) + "with Scylla's cliff on one side, and on the other, dread Charybdis<br>" +
        L(3) + "swallowing the salt sea down with a dreadful sucking roar.<br>" +
        L(4) + "Each time she spewed it back, the water heaved and seethed,<br>" +
        L(5) + "as a bronze cauldron set on a blazing fire boils and spits,<br>" +
        L(6) + "its foam climbing to the brim and spilling over in white bubbles,<br>" +
        L(7) + "and high overhead the spray rained down upon both cliff tops.<br>" +
        L(8) + "But each time she gulped the briny sea down once again,<br>" +
        L(9) + "we could see into her churning depths, and the rock walls<br>" +
        L(10) + "bellowed around her with a fearful, echoing voice,<br>" +
        L(11) + "and far down at the bottom the dark sand of the sea floor<br>" +
        L(12) + "lay bare in the open pit. Terror drained the color from my men's faces.<br>" +
        L(13) + "Every eye on board was fixed upon that gaping throat;<br>" +
        L(14) + "every man stared at the place where he thought death waited,<br>" +
        L(15) + "and as we stared, not one of us looked up at the other cliff,<br>" +
        L(16) + "where, high above our heads, something stirred in a dark cave." +
        "</p>",
      claims: [
        {
          id: "cauldron",
          sol: "9.RV.1.F",
          stem: "Lines 5–6 contain an epic simile, a long, detailed comparison. Comparing the sea to a boiling cauldron mainly helps readers —",
          choices: [
            { letter: "A", text: "learn how the crew cooked their meals on board the ship" },
            { letter: "B", text: "understand that the water near Charybdis is warm and calm" },
            { letter: "C", text: "see that Charybdis was once a cook in a god's kitchen" },
            { letter: "D", text: "picture the violent, frothing motion of the water" }
          ],
          correct: "D"
        },
        {
          id: "briny",
          sol: "9.RV.1.C",
          stem: "In line 8, the word briny most nearly means —",
          choices: [
            { letter: "A", text: "salty" },
            { letter: "B", text: "frozen" },
            { letter: "C", text: "shallow" },
            { letter: "D", text: "muddy" }
          ],
          correct: "A"
        },
        {
          id: "hearing",
          sol: "9.RL.2.A",
          stem: "Which phrase from the poem appeals most strongly to the sense of hearing?",
          choices: [
            { letter: "A", text: "the dark sand of the sea floor lay bare" },
            { letter: "B", text: "bellowed around her with a fearful, echoing voice" },
            { letter: "C", text: "its foam climbing to the brim and spilling over" },
            { letter: "D", text: "the spray rained down upon both cliff tops" }
          ],
          correct: "B"
        },
        {
          id: "repeat",
          sol: "9.RL.2.B",
          stem: "Lines 13–14 begin with the repeated words Every eye and every man. This repetition mainly emphasizes that —",
          choices: [
            { letter: "A", text: "Odysseus is counting his crew to see who is missing" },
            { letter: "B", text: "the men are watching Odysseus for their next orders" },
            { letter: "C", text: "the whole crew is held by the same fear of the whirlpool" },
            { letter: "D", text: "only a few of the men have noticed Charybdis so far" }
          ],
          correct: "C"
        },
        {
          id: "foreshadow",
          sol: "9.RL.3.B",
          stem: "Lines 15–16 most likely foreshadow that —",
          choices: [
            { letter: "A", text: "Scylla is about to strike while the men look the other way" },
            { letter: "B", text: "the crew will find shelter in a cave on the cliff" },
            { letter: "C", text: "Charybdis will pull the ship down into her pit" },
            { letter: "D", text: "a god is watching over the ship to keep it safe" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "Which words best describe the mood of the poem as a whole?",
          choices: [
            { letter: "A", text: "hopeful and triumphant" },
            { letter: "B", text: "calm and dreamlike" },
            { letter: "C", text: "angry and bitter" },
            { letter: "D", text: "tense and full of dread" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── medium · level 3 ───────────── */
    {
      id: "ody-scylla-six-men",
      family: "ODY",
      episode: "scylla",
      title: "The Most Pitiful Sight",
      kind: "The Odyssey · 9.RL",
      blurb: "Scylla strikes from her cave, and Odysseus can only watch.",
      level: 3,
      passage:
        "<p>" + N(1) + "While we stared into the whirlpool, Scylla struck from above and seized six men from my ship, the strongest and bravest of the crew. " +
        N(2) + "I turned and saw only their hands and feet, already high above me as she lifted them into the air. " +
        N(3) + "They screamed and called me by name, for the last time, in their agony. " +
        N(4) + "As a fisherman on a jutting rock casts his bait with a long rod, then jerks a struggling fish out of the water and flings it gasping onto the shore, so Scylla swung my men up the cliff, writhing. " +
        N(5) + "There, at the mouth of her cave, she devoured them while they shrieked and stretched their hands toward me. " +
        N(6) + "Of all the things I suffered while I searched out the paths of the sea, that was the most pitiful sight my eyes ever saw. " +
        N(7) + "Yet I could do nothing; my two spears hung useless in my hands. " +
        N(8) + "We fled past the Rocks, past dread Charybdis and Scylla, the rest of us weeping at the oars. " +
        N(9) + "Before long, far ahead across the water, the low green shape of the sun god's island rose from the sea.</p>",
      claims: [
        {
          id: "sudden",
          sol: "9.RL.3.B",
          stem: "In sentence 2, Odysseus sees only his men's hands and feet already high above him. This detail mainly shows —",
          choices: [
            { letter: "A", text: "how slowly Scylla moved as she climbed down the cliff" },
            { letter: "B", text: "that the men climbed the mast to escape the whirlpool" },
            { letter: "C", text: "how suddenly the attack happened, before he could react" },
            { letter: "D", text: "that Odysseus had been watching Scylla's cave all along" }
          ],
          correct: "C"
        },
        {
          id: "fisherman",
          sol: "9.RV.1.F",
          stem: "The epic simile in sentence 4 compares Scylla to a fisherman and the men to fish mainly to show that the men —",
          choices: [
            { letter: "A", text: "had often gone fishing from the rocks near home" },
            { letter: "B", text: "are as helpless as caught prey in Scylla's grip" },
            { letter: "C", text: "were trying to swim to safety along the shore" },
            { letter: "D", text: "had been fishing in the strait when Scylla appeared" }
          ],
          correct: "B"
        },
        {
          id: "loyalty",
          sol: "9.RL.3.A",
          stem: "In Homer's world, a leader and his men owed each other loyalty: the men obeyed, and the leader was expected to protect them. In sentence 3, the men's calling Odysseus by name makes the scene more painful because —",
          choices: [
            { letter: "A", text: "they are blaming him for choosing the wrong route" },
            { letter: "B", text: "they want him to tell their families what happened" },
            { letter: "C", text: "they are warning him that Scylla will strike again" },
            { letter: "D", text: "they look to him for rescue, and he cannot give it" }
          ],
          correct: "D"
        },
        {
          id: "devoured",
          sol: "9.RV.1.C",
          stem: "In sentence 5, the word devoured most nearly means —",
          choices: [
            { letter: "A", text: "ate greedily" },
            { letter: "B", text: "carried away" },
            { letter: "C", text: "held tightly" },
            { letter: "D", text: "let go of" }
          ],
          correct: "A"
        },
        {
          id: "lookback",
          sol: "9.RL.2.C",
          stem: "Sentence 6 shows that Odysseus is telling this story —",
          choices: [
            { letter: "A", text: "while the attack is still happening around him" },
            { letter: "B", text: "looking back after enduring many other hardships" },
            { letter: "C", text: "as a warning that Circe asked him to deliver" },
            { letter: "D", text: "from the point of view of one of the six men" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is developed most clearly in the passage about the six men?",
          choices: [
            { letter: "A", text: "Even a brave, well-armed leader cannot prevent every loss." },
            { letter: "B", text: "Monsters can be defeated by anyone who is ready to fight." },
            { letter: "C", text: "Grief makes sailors too weak to finish their journey." },
            { letter: "D", text: "The gods punish those who forget a prophet's warning." }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
