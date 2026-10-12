/* SOL Labyrinth — The Odyssey: the Sirens (English 9 Unit 2, family ODY)
 * Original retellings of Odyssey Book 12 (Circe's warning about the Sirens, the calm, the wax,
 * the mast, the Sirens' song, and the safe passage). The plot is public domain; the wording here
 * is new and does not follow any modern translation or textbook.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────── short · level 1 ───────────── */
    {
      id: "ody-sirens-warning",
      family: "ODY",
      episode: "sirens",
      title: "Circe's Warning",
      kind: "The Odyssey · 9.RL",
      blurb: "Before Odysseus sails, the goddess tells him how to survive the Sirens.",
      level: 1,
      passage:
        "<p>" + N(1) + "Before we left her island, Circe took me aside and told me what dangers lay along our course. " +
        N(2) + "\"First you will come to the Sirens, who enchant every sailor who hears their voices,\" she said. " +
        N(3) + "\"Whoever steers near them without knowing the danger never returns home to greet his wife and children. " +
        N(4) + "The Sirens sit in a green meadow, singing, and all around them lie heaps of bones, with dried skin still clinging to them. " +
        N(5) + "Row past quickly, and soften sweet beeswax to seal your crew's ears. " +
        N(6) + "If you yourself wish to listen, have your men bind you upright to the mast. " +
        N(7) + "And if you beg them to set you free, they must tie you even tighter.\"</p>",
      claims: [
        {
          id: "foreshadow",
          sol: "9.RL.3.B",
          stem: "Circe's description of the Sirens before Odysseus meets them mainly affects the plot by —",
          choices: [
            { letter: "A", text: "showing that Circe wants to keep Odysseus on her island" },
            { letter: "B", text: "explaining why the crew decides to sail a different route" },
            { letter: "C", text: "building suspense about a danger the hero has yet to face" },
            { letter: "D", text: "revealing that the Sirens were once friends of Circe" }
          ],
          correct: "C"
        },
        {
          id: "enchant",
          sol: "9.RV.1.B",
          stem: "In sentence 2, the word enchant most nearly means —",
          choices: [
            { letter: "A", text: "put under a spell" },
            { letter: "B", text: "frighten away" },
            { letter: "C", text: "teach a song to" },
            { letter: "D", text: "call out a warning to" }
          ],
          correct: "A"
        },
        {
          id: "nostos",
          sol: "9.RL.3.A",
          stem: "The ancient Greeks prized nostos, a hero's safe return home after war or travel. Sentence 3 shows that the Sirens are a threat to nostos because they —",
          choices: [
            { letter: "A", text: "steal the treasure that sailors are carrying home" },
            { letter: "B", text: "trick sailors into forgetting the names of their families" },
            { letter: "C", text: "follow ships all the way back to the sailors' homes" },
            { letter: "D", text: "keep sailors from ever reaching their wives and children" }
          ],
          correct: "D"
        },
        {
          id: "meadow",
          sol: "9.RL.2.B",
          stem: "In sentence 4, Circe places a green meadow and singing beside heaps of bones. This contrast suggests that —",
          choices: [
            { letter: "A", text: "the Sirens bury the sailors they meet with great respect" },
            { letter: "B", text: "a lovely surface hides a deadly danger underneath it" },
            { letter: "C", text: "the island was once a peaceful farm that was ruined" },
            { letter: "D", text: "sailors stop at the meadow mainly to rest and eat" }
          ],
          correct: "B"
        },
        {
          id: "listen",
          sol: "9.RL.1.C",
          stem: "Sentences 6 and 7 suggest that Circe expects Odysseus to —",
          choices: [
            { letter: "A", text: "want to hear the song for himself, even though it is dangerous" },
            { letter: "B", text: "refuse to take his crew past the island at all" },
            { letter: "C", text: "fight the Sirens with his sword when he reaches them" },
            { letter: "D", text: "forget her instructions as soon as he leaves her island" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme suggested by Circe's warning as a whole?",
          choices: [
            { letter: "A", text: "Gods reward mortals who never ask them for help." },
            { letter: "B", text: "The beauty of music is worth any price a person pays." },
            { letter: "C", text: "Sailors should always trust their own judgment at sea." },
            { letter: "D", text: "Knowing about a danger ahead of time lets a person prepare." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── short · level 1 ───────────── */
    {
      id: "ody-sirens-calm",
      family: "ODY",
      episode: "sirens",
      title: "The Wind Dies",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus tells his crew what lies ahead, and then the breeze disappears.",
      level: 1,
      passage:
        "<p>" + N(1) + "At dawn we pushed off from Circe's shore, and she sent a steady wind behind us to fill our sail. " +
        N(2) + "While the breeze did the work, I gathered my men beside the mast. " +
        N(3) + "\"Friends, it is not right for only one of us to know what the goddess foretold,\" I said. " +
        N(4) + "\"We must steer clear of the Sirens and their flowering meadow, and I alone may hear their song, lashed tight to the mast. " +
        N(5) + "I tell you all of this so that we face what comes with open eyes, whether we live or die.\" " +
        N(6) + "Even as I spoke, our ship was nearing the Sirens' island. " +
        N(7) + "Then the wind that had carried us so swiftly fell away into nothing. " +
        N(8) + "An eerie stillness settled over the water, as if some god had lulled the waves to sleep. " +
        N(9) + "My men rose, furled the sail, and stowed it in the hold. " +
        N(10) + "Then they took their seats at the oars, and the polished blades churned the flat sea white.</p>",
      claims: [
        {
          id: "share",
          sol: "9.RL.1.C",
          stem: "In sentences 3–5, Odysseus tells the crew everything Circe said. This choice shows that he is a leader who —",
          choices: [
            { letter: "A", text: "wants the crew to admire his friendship with a goddess" },
            { letter: "B", text: "believes his men deserve to know the danger they face" },
            { letter: "C", text: "plans to leave the crew behind on the Sirens' island" },
            { letter: "D", text: "is afraid to make any decision without a vote" }
          ],
          correct: "B"
        },
        {
          id: "lulled",
          sol: "9.RV.1.F",
          stem: "In sentence 8, the comparison \"as if some god had lulled the waves to sleep\" suggests that the calm is —",
          choices: [
            { letter: "A", text: "a normal change in weather that sailors expect" },
            { letter: "B", text: "a sign that the voyage home is almost over" },
            { letter: "C", text: "strange and possibly caused by a divine power" },
            { letter: "D", text: "a reward from Circe for following her advice" }
          ],
          correct: "C"
        },
        {
          id: "furled",
          sol: "9.RV.1.B",
          stem: "In sentence 9, the word furled most nearly means —",
          choices: [
            { letter: "A", text: "rolled up and tied" },
            { letter: "B", text: "torn into pieces" },
            { letter: "C", text: "raised higher" },
            { letter: "D", text: "painted and repaired" }
          ],
          correct: "A"
        },
        {
          id: "oars",
          sol: "9.RL.3.B",
          stem: "How does the change in setting described in sentences 7–10 shape what happens next?",
          choices: [
            { letter: "A", text: "The crew drifts away from the island and avoids the Sirens." },
            { letter: "B", text: "The men must row, so they will be hard at work as they pass the island." },
            { letter: "C", text: "The ship cannot move, so the crew must wait for Circe to return." },
            { letter: "D", text: "The still water lets the men swim ashore to explore the meadow." }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          stem: "This part of the epic is narrated by Odysseus himself, using \"I\" and \"we.\" How does this point of view affect the passage?",
          choices: [
            { letter: "A", text: "It lets readers know what every crew member secretly thinks." },
            { letter: "B", text: "It shows the events through the eyes of the goddess Circe." },
            { letter: "C", text: "It keeps readers from learning what Odysseus says to his men." },
            { letter: "D", text: "It lets readers hear the hero's own words and judgments directly." }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "Which statement best describes how the mood changes over the whole passage?",
          choices: [
            { letter: "A", text: "It shifts from easy sailing to an uneasy, watchful tension." },
            { letter: "B", text: "It shifts from fear of the Sirens to joy at escaping them." },
            { letter: "C", text: "It stays cheerful because the crew feels sure of success." },
            { letter: "D", text: "It shifts from anger at Circe to calm acceptance of her plan." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── medium · level 2 ───────────── */
    {
      id: "ody-sirens-wax",
      family: "ODY",
      episode: "sirens",
      title: "Wax and Rope",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus seals his crew's ears and has himself bound to the mast.",
      level: 2,
      passage:
        "<p>" + N(1) + "Our ship drew closer to the Sirens' island, and there was no time to waste. " +
        N(2) + "I took a large round cake of beeswax and cut it into small pieces with the edge of my bronze sword. " +
        N(3) + "Then I squeezed and kneaded the pieces in my strong hands. " +
        N(4) + "Soon the wax grew soft, warmed by my grip and by the blazing rays of Helios, lord of the sun. " +
        N(5) + "I went from bench to bench and pressed the wax firmly into the ears of every man, one after another, until none of them could hear a sound. " +
        N(6) + "Next the crew carried out the orders I had given them. " +
        N(7) + "They stood me upright against the mast, my back to the wooden pole, and bound me hand and foot. " +
        N(8) + "They wound the rope around and around me, then tied the ends fast to the mast itself so that I could not slip loose. " +
        N(9) + "When the knots were tight, they returned to their benches without a word. " +
        N(10) + "Bending low, they struck the gray sea with their oars, and the ship surged forward toward the singers. " +
        N(11) + "I alone still had open ears, and I stood waiting for whatever I would hear.</p>",
      claims: [
        {
          id: "order",
          sol: "9.RL.3.B",
          stem: "According to the passage, what does Odysseus do right after the wax grows soft?",
          choices: [
            { letter: "A", text: "He cuts the cake of wax with his bronze sword." },
            { letter: "B", text: "He orders the men to tie him to the mast." },
            { letter: "C", text: "He presses the wax into each crew member's ears." },
            { letter: "D", text: "He takes his own seat at an oar beside the crew." }
          ],
          correct: "C"
        },
        {
          id: "kneaded",
          sol: "9.RV.1.B",
          stem: "In sentence 3, the word kneaded most nearly means —",
          choices: [
            { letter: "A", text: "melted over a fire" },
            { letter: "B", text: "pressed and worked with the hands" },
            { letter: "C", text: "needed for a special purpose" },
            { letter: "D", text: "sliced into thin strips" }
          ],
          correct: "B"
        },
        {
          id: "helios",
          sol: "9.RV.1.F",
          stem: "In sentence 4, Odysseus calls the sun \"Helios, lord of the sun.\" This reference to the Greek god mainly shows that —",
          choices: [
            { letter: "A", text: "the crew stops to pray to Helios before passing the Sirens" },
            { letter: "B", text: "Helios is angry with Odysseus for using the wax" },
            { letter: "C", text: "the voyage takes place in the cool hours of the night" },
            { letter: "D", text: "in the Greek view, even the sun's heat comes from a god" }
          ],
          correct: "D"
        },
        {
          id: "himself",
          sol: "9.RL.1.C",
          stem: "In sentence 5, Odysseus seals every man's ears himself instead of handing out the wax. This detail suggests that he is —",
          choices: [
            { letter: "A", text: "careful to make sure the plan is done correctly" },
            { letter: "B", text: "unwilling to let his crew touch his belongings" },
            { letter: "C", text: "secretly hoping one of the men will hear the song" },
            { letter: "D", text: "too proud to ask anyone else for help" }
          ],
          correct: "A"
        },
        {
          id: "silence",
          sol: "9.RL.2.B",
          stem: "In sentence 9, the crew returns to the benches \"without a word.\" This phrase mainly emphasizes that —",
          choices: [
            { letter: "A", text: "the men are angry that Odysseus gets to hear the song" },
            { letter: "B", text: "the crew is too tired from rowing to speak" },
            { letter: "C", text: "with their ears sealed, the men work in a world of silence" },
            { letter: "D", text: "Odysseus has ordered the men never to speak again" }
          ],
          correct: "C"
        },
        {
          id: "central",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses the central idea of the passage as a whole?",
          choices: [
            { letter: "A", text: "Odysseus wants to punish his crew for disobeying him." },
            { letter: "B", text: "Odysseus balances his wish to hear the song with careful safeguards." },
            { letter: "C", text: "The crew refuses to row until Odysseus agrees to be tied." },
            { letter: "D", text: "The Sirens use the sun's heat to weaken passing sailors." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── medium · level 3 · verse ───────────── */
    {
      id: "ody-sirens-song",
      family: "ODY",
      episode: "sirens",
      title: "The Sirens' Song",
      kind: "Epic poetry · 9.RL",
      blurb: "The Sirens call to Odysseus and promise him all the knowledge in the world.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "But when we were no farther off than a man's shout can carry,<br>" +
        L(2) + "racing along, the Sirens spied our dark ship speeding near,<br>" +
        L(3) + "and they lifted their clear voices in a song that poured like honey:<br>" +
        L(4) + "\"Come closer, famous Odysseus, great glory of the Greeks!<br>" +
        L(5) + "Rest your oars, halt your ship, and listen to our voices.<br>" +
        L(6) + "No sailor has ever rowed his black ship past this island<br>" +
        L(7) + "until he has heard the sweetness flowing from our lips;<br>" +
        L(8) + "then he sails on, delighted, and he goes home a wiser man.<br>" +
        L(9) + "For we know all that the Greeks and the Trojans suffered<br>" +
        L(10) + "on the wide plain of Troy, by the will of the gods,<br>" +
        L(11) + "and we know whatever happens anywhere on the fruitful earth.\"<br>" +
        L(12) + "So they sang, sending their lovely voices over the water,<br>" +
        L(13) + "and the music wound across the bright and windless sea<br>" +
        L(14) + "and found its way, like a thief, into my listening heart." +
        "</p>",
      claims: [
        {
          id: "kleos",
          sol: "9.RL.3.A",
          stem: "The Greeks prized kleos, the glory and fame a hero earns by great deeds. In line 4, the Sirens call Odysseus \"great glory of the Greeks\" most likely to —",
          choices: [
            { letter: "A", text: "warn him that other heroes have already passed safely" },
            { letter: "B", text: "remind him that his crew cannot hear their words" },
            { letter: "C", text: "flatter him by appealing to his pride in his fame" },
            { letter: "D", text: "show that they are afraid of his skill as a warrior" }
          ],
          correct: "C"
        },
        {
          id: "honey",
          sol: "9.RL.2.A",
          stem: "In line 3, the Sirens' song \"poured like honey.\" This simile helps readers understand that the song is —",
          choices: [
            { letter: "A", text: "sweet and hard to resist" },
            { letter: "B", text: "slow and difficult to hear" },
            { letter: "C", text: "thick with sorrow and grief" },
            { letter: "D", text: "loud enough to shake the ship" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "9.RL.2.C",
          stem: "In lines 6–8, the Sirens claim that every sailor who hears them \"goes home a wiser man.\" Because readers remember Circe's warning about the heaps of bones, this claim is an example of —",
          choices: [
            { letter: "A", text: "understatement, since the Sirens admit their song is dull" },
            { letter: "B", text: "hyperbole, since the Sirens exaggerate how many ships pass" },
            { letter: "C", text: "sarcasm, since the Sirens openly mock Odysseus's crew" },
            { letter: "D", text: "dramatic irony, since readers know no listener ever gets home" }
          ],
          correct: "D"
        },
        {
          id: "knowledge",
          sol: "9.RL.1.C",
          stem: "In lines 9–11, the Sirens promise to tell everything that happened at Troy. Why is this promise an especially strong temptation for Odysseus?",
          choices: [
            { letter: "A", text: "He wants to learn the shortest sea route back to Troy." },
            { letter: "B", text: "He fought at Troy and is known for his hunger to know things." },
            { letter: "C", text: "He has forgotten the war and fears he will never remember it." },
            { letter: "D", text: "He hopes the Sirens will tell him how to defeat Poseidon." }
          ],
          correct: "B"
        },
        {
          id: "fruitful",
          sol: "9.RV.1.B",
          stem: "In line 11, the word fruitful most nearly means —",
          choices: [
            { letter: "A", text: "covered with orchards only" },
            { letter: "B", text: "sweet-smelling" },
            { letter: "C", text: "producing plenty" },
            { letter: "D", text: "far away" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "9.RL.1.B",
          stem: "Most of the poem (lines 4–11) is the Sirens' own song, set inside Odysseus's narration. How does this structure contribute to the poem's meaning?",
          choices: [
            { letter: "A", text: "It lets readers hear the temptation directly, much as Odysseus did." },
            { letter: "B", text: "It shows that Odysseus has forgotten the exact words of the song." },
            { letter: "C", text: "It proves that the crew heard the Sirens through the wax." },
            { letter: "D", text: "It replaces the story with a list of facts about the Trojan War." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── short · level 1 ───────────── */
    {
      id: "ody-sirens-tighter",
      family: "ODY",
      episode: "sirens",
      title: "Tighter Knots",
      kind: "The Odyssey · 9.RL",
      blurb: "Odysseus begs to be set free, and two of his men answer with more rope.",
      level: 1,
      passage:
        "<p>" + N(1) + "As the song went on, a fierce longing swept over me, and I wanted nothing more than to go to the Sirens. " +
        N(2) + "I strained against the ropes, frowning and jerking my head at my men to signal them to cut me loose. " +
        N(3) + "But they only bent forward and rowed harder. " +
        N(4) + "Then Perimedes and Eurylochus sprang up from their benches. " +
        N(5) + "Just as I had commanded before we neared the island, they wrapped more rope around me and pulled every knot tighter. " +
        N(6) + "The ship kept moving, stroke after stroke, while I fought against the very bonds that were saving my life.</p>",
      claims: [
        {
          id: "signal",
          sol: "9.RL.3.B",
          stem: "In sentence 2, Odysseus signals with frowns and head movements instead of shouting orders. The most likely reason is that —",
          choices: [
            { letter: "A", text: "he has lost his voice from listening to the song" },
            { letter: "B", text: "he wants to keep the Sirens from hearing his plan" },
            { letter: "C", text: "he is ashamed for the crew to know what he wants" },
            { letter: "D", text: "the wax in his men's ears keeps them from hearing him" }
          ],
          correct: "D"
        },
        {
          id: "strained",
          sol: "9.RV.1.B",
          stem: "In sentence 2, the word strained most nearly means —",
          choices: [
            { letter: "A", text: "pulled hard" },
            { letter: "B", text: "rested quietly" },
            { letter: "C", text: "listened closely" },
            { letter: "D", text: "filtered carefully" }
          ],
          correct: "A"
        },
        {
          id: "loyalty",
          sol: "9.RL.3.A",
          stem: "Loyalty to one's leader was an important Greek value. In sentence 5, Perimedes and Eurylochus show loyalty to Odysseus by —",
          choices: [
            { letter: "A", text: "freeing him because he is their captain and gives the orders" },
            { letter: "B", text: "following his earlier command instead of his present pleading" },
            { letter: "C", text: "taking his place at the mast so that he can row" },
            { letter: "D", text: "turning the ship toward the Sirens as he wishes" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "9.RL.2.C",
          stem: "Sentence 6 says Odysseus \"fought against the very bonds that were saving my life.\" What makes this statement ironic?",
          choices: [
            { letter: "A", text: "The ropes are too weak to hold a man as strong as Odysseus." },
            { letter: "B", text: "The crew does not know that Odysseus is tied to the mast." },
            { letter: "C", text: "He struggles against the very thing that is protecting him." },
            { letter: "D", text: "He enjoys being tied up more than he enjoys the song." }
          ],
          correct: "C"
        },
        {
          id: "hero",
          sol: "9.RL.1.C",
          stem: "What does this moment reveal about Odysseus as a character?",
          choices: [
            { letter: "A", text: "He never feels temptation the way ordinary sailors do." },
            { letter: "B", text: "He trusts no one on his crew to follow his orders." },
            { letter: "C", text: "Even a clever hero can be overpowered by desire and need others." },
            { letter: "D", text: "He cares more about the Sirens than about returning home." }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of the passage as a whole?",
          choices: [
            { letter: "A", text: "Leaders should change their plans whenever their feelings change." },
            { letter: "B", text: "Promises made with a clear mind can protect us when our judgment fails." },
            { letter: "C", text: "A crew should always do exactly what its captain asks in the moment." },
            { letter: "D", text: "Music is the most dangerous force a traveler can meet." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── medium · level 2 ───────────── */
    {
      id: "ody-sirens-past",
      family: "ODY",
      episode: "sirens",
      title: "Past the Meadow",
      kind: "The Odyssey · 9.RL",
      blurb: "The song fades, the ropes come off, and Odysseus thinks about what saved him.",
      level: 2,
      passage:
        "<p>" + N(1) + "Little by little the island fell behind us. " +
        N(2) + "The singing grew thinner and fainter until at last I could no longer make out a single word, and then even the music itself was gone. " +
        N(3) + "Only the creak of the oars and the slap of water against the hull remained. " +
        N(4) + "My trusty companions looked back at the empty sea, then at my face, and they knew that the danger had passed. " +
        N(5) + "One by one they dug the soft wax out of their ears. " +
        N(6) + "Then they untied the knots they had pulled so tight and unwound the long ropes from my arms and legs. " +
        N(7) + "My wrists were raw and red where I had fought against my bonds. " +
        N(8) + "I rubbed them and said nothing for a while. " +
        N(9) + "I had heard what no other living man had heard, and I had lived to tell of it. " +
        N(10) + "Yet I knew the truth: my own will had not saved me. " +
        N(11) + "The wax, the rope, and the faithful hands of my crew had done what my heart could not. " +
        N(12) + "Circe's advice, followed to the letter, had carried us safely past the first of the dangers she had named.</p>",
      claims: [
        {
          id: "sounds",
          sol: "9.RL.2.B",
          stem: "In sentence 3, the author describes \"the creak of the oars and the slap of water.\" These sound details mainly emphasize that —",
          choices: [
            { letter: "A", text: "the ship is old and beginning to leak" },
            { letter: "B", text: "the crew is rowing more slowly than before" },
            { letter: "C", text: "a storm is about to strike the ship" },
            { letter: "D", text: "the magical song has given way to ordinary sounds" }
          ],
          correct: "D"
        },
        {
          id: "face",
          sol: "9.RL.3.B",
          stem: "Sentence 4 suggests that the crew decides the danger has passed because —",
          choices: [
            { letter: "A", text: "Odysseus's face no longer shows the wild longing it had" },
            { letter: "B", text: "they can hear the song fading into the distance" },
            { letter: "C", text: "Odysseus shouts to them that they are safe" },
            { letter: "D", text: "Circe appears on the shore and waves them on" }
          ],
          correct: "A"
        },
        {
          id: "raw",
          sol: "9.RV.1.B",
          stem: "In sentence 7, the word raw most nearly means —",
          choices: [
            { letter: "A", text: "not yet cooked" },
            { letter: "B", text: "sore and scraped" },
            { letter: "C", text: "cold and damp" },
            { letter: "D", text: "lacking training" }
          ],
          correct: "B"
        },
        {
          id: "kleos",
          sol: "9.RL.3.A",
          stem: "The Greeks believed a hero's kleos, or glory, lived on in the stories people told about him. How does sentence 9 connect to kleos?",
          choices: [
            { letter: "A", text: "It shows that Odysseus wants to forget the Sirens forever." },
            { letter: "B", text: "It suggests the crew will get more glory than Odysseus." },
            { letter: "C", text: "His survival gives him a rare deed to be told and remembered." },
            { letter: "D", text: "It proves that the Sirens' song made Odysseus famous at Troy." }
          ],
          correct: "C"
        },
        {
          id: "realize",
          sol: "9.RL.1.C",
          stem: "In sentences 10 and 11, Odysseus realizes that —",
          choices: [
            { letter: "A", text: "he could have resisted the song without any help" },
            { letter: "B", text: "his crew disobeyed him and nearly ruined the plan" },
            { letter: "C", text: "his success came from planning and his crew, not willpower" },
            { letter: "D", text: "the Sirens let the ship pass because they admired him" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of the whole episode, as Odysseus looks back on it in this passage?",
          choices: [
            { letter: "A", text: "Even great heroes depend on wise advice and the help of others." },
            { letter: "B", text: "A person who survives danger should keep the story secret." },
            { letter: "C", text: "The strongest people never need to be protected from themselves." },
            { letter: "D", text: "Silence is always more valuable than music or speech." }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
