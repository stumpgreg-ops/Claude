/* SOL Labyrinth — Grade 9 tiny and short packs (VA 9.RL / 9.RI / 9.RV / 9.DSR)
 * for the early nights: 10 tiny texts (50–90 words) and 8 short texts (100–150 words).
 * Original text only; no VDOE / copyrighted material.
 * Loaded after content17.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── TINY (nights 1–8) ───────────────────────── */
    {
      id: "g9-t-bus-window",
      family: "G9",
      title: "The Bus Window",
      kind: "Literary · 9.RL",
      blurb: "Priya saves a seat for someone who never sits with her.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every morning Priya put her backpack on the seat beside her and every morning she moved it when the bus reached Fenwick Road. " +
        N(2) + "That was where Luis got on. " +
        N(3) + "He never sat with her; he always walked past to the back. " +
        N(4) + "Still, she cleared the seat, because on the first day of school he had cleared one for her when nobody else would. " +
        N(5) + "On Thursday the back was full. " +
        N(6) + "Luis stopped at her row, looked at the empty seat, and grinned as if he had known about it all along." +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Sentence 4 mainly shows that Priya —",
          choices: [
            { letter: "A", text: "hopes Luis will finally notice her backpack" },
            { letter: "B", text: "remembers a kindness and wants to return it" },
            { letter: "C", text: "is annoyed that Luis always walks past her" },
            { letter: "D", text: "wants the seat to stay empty for the whole ride" }
          ],
          correct: "B"
        },
        {
          id: "plot",
          sol: "9.RL.1.B",
          stem: "Why does Luis stop at Priya's row in sentence 6?",
          choices: [
            { letter: "A", text: "The seats at the back of the bus are all taken." },
            { letter: "B", text: "The bus driver has told him where to sit." },
            { letter: "C", text: "He wants to ask her about the first day of school." },
            { letter: "D", text: "He has forgotten which stop is Fenwick Road." }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RL.2.C",
          stem: "In sentence 4, the word cleared most nearly means —",
          choices: [
            { letter: "A", text: "cleaned" },
            { letter: "B", text: "approved" },
            { letter: "C", text: "emptied" },
            { letter: "D", text: "jumped over" }
          ],
          correct: "C"
        },
        {
          id: "craft",
          sol: "9.RL.3.A",
          stem: "The author repeats the phrase every morning in sentence 1 mainly to show that Priya's action is —",
          choices: [
            { letter: "A", text: "a habit she keeps up whether or not it is noticed" },
            { letter: "B", text: "a chore her parents have asked her to do" },
            { letter: "C", text: "a new idea she tries for the first time on Thursday" },
            { letter: "D", text: "a rule the bus driver enforces for every student" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of this story about the bus?",
          choices: [
            { letter: "A", text: "Friendships are formed only on the first day of school." },
            { letter: "B", text: "The back of the bus is the best place to sit." },
            { letter: "C", text: "People rarely notice the kindness of others." },
            { letter: "D", text: "Small acts of kindness can quietly connect people." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-t-porch-light",
      family: "G9",
      title: "Porch Light",
      kind: "Poetry · 9.RL",
      blurb: "Seven lines about a light that stays on.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My mother leaves the porch light on<br>" +
        L(2) + "long after I have said I'm grown.<br>" +
        L(3) + "It hums, a small and stubborn sun,<br>" +
        L(4) + "and waits for footsteps on the stone.<br>" +
        L(5) + "I tell her that I know the way.<br>" +
        L(6) + "She nods, and does not switch it off.<br>" +
        L(7) + "Some things are said without a word." +
        "</p>",
      claims: [
        {
          id: "meta",
          sol: "9.RL.2.A",
          stem: "In line 3, the porch light is called a small and stubborn sun. This metaphor suggests that the light is —",
          choices: [
            { letter: "A", text: "too bright for the neighbors" },
            { letter: "B", text: "warm and refuses to go out" },
            { letter: "C", text: "powered by solar panels" },
            { letter: "D", text: "only used in the summer" }
          ],
          correct: "B"
        },
        {
          id: "speaker",
          sol: "9.RL.1.C",
          stem: "Line 5 mainly shows that the speaker —",
          choices: [
            { letter: "A", text: "has lost the key to the house" },
            { letter: "B", text: "is afraid to walk home in the dark" },
            { letter: "C", text: "wants to be treated as independent" },
            { letter: "D", text: "is angry that the light wastes power" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which idea does line 7 best express?",
          choices: [
            { letter: "A", text: "Care can be shown through actions instead of speech." },
            { letter: "B", text: "Parents should always explain their rules." },
            { letter: "C", text: "Silence between family members causes problems." },
            { letter: "D", text: "Growing up means leaving home for good." }
          ],
          correct: "A"
        },
        {
          id: "line6",
          sol: "9.RL.1.B",
          stem: "In line 6, the mother nods but leaves the light on. This action shows that she —",
          choices: [
            { letter: "A", text: "did not hear what the speaker said about the way" },
            { letter: "B", text: "plans to turn the light off once the speaker is inside" },
            { letter: "C", text: "thinks the speaker has lost the way home in the dark" },
            { letter: "D", text: "understands but still wants to watch over the speaker" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-t-compost-notice",
      family: "G9",
      title: "Cafeteria Compost",
      kind: "Functional text · 9.RI",
      blurb: "A notice taped above the new green bins.",
      level: 1,
      passage:
        "<p><strong>NEW: COMPOST BINS IN THE CAFETERIA</strong></p>" +
        "<p>" + N(1) + "Starting Monday, the green bins by the tray return are for food scraps only. " +
        N(2) + "Fruit peels, bread, and napkins go in; plastic forks, milk cartons, and foil do not. " +
        N(3) + "If you are not sure, use the gray trash bin, because one wrong item can spoil a whole bag of compost. " +
        N(4) + "Environmental Club members will stand by the bins for the first two weeks to answer questions. " +
        N(5) + "The finished compost will feed the garden beds behind the science wing this spring." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "The main purpose of this notice is to —",
          choices: [
            { letter: "A", text: "recruit new members for the Environmental Club" },
            { letter: "B", text: "explain how to use the new compost bins correctly" },
            { letter: "C", text: "announce the opening of the school garden" },
            { letter: "D", text: "ask students to bring lunch from home" }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to the notice, which item belongs in a green bin?",
          choices: [
            { letter: "A", text: "a plastic fork" },
            { letter: "B", text: "a milk carton" },
            { letter: "C", text: "a napkin" },
            { letter: "D", text: "a piece of foil" }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "9.RI.2.B",
          stem: "The author includes the reason in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "explain why a doubtful item should go in the trash" },
            { letter: "B", text: "warn that the gray bins fill up quickly" },
            { letter: "C", text: "describe how compost is made from scraps" },
            { letter: "D", text: "show that the bags are too small for the bins" }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RI.2.A",
          stem: "In sentence 3, the word spoil most nearly means —",
          choices: [
            { letter: "A", text: "ruin" },
            { letter: "B", text: "fill" },
            { letter: "C", text: "hide" },
            { letter: "D", text: "carry" }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RI.1.C",
          stem: "Sentence 5 suggests that the compost program will —",
          choices: [
            { letter: "A", text: "end after the first two weeks" },
            { letter: "B", text: "be run entirely by the science teachers" },
            { letter: "C", text: "reduce the cost of school lunches" },
            { letter: "D", text: "benefit another part of the school" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-t-lighthouse-lens",
      family: "G9",
      title: "The Ringed Lens",
      kind: "Informational · 9.RI",
      blurb: "How a lighthouse lens made a small flame reach the horizon.",
      level: 1,
      passage:
        "<p>" + N(1) + "Early lighthouses burned oil lamps behind plain glass, and much of the light spilled uselessly into sky and sea. " +
        N(2) + "In the 1820s, engineers began building lenses from rings of glass, each ring angled a little differently. " +
        N(3) + "Together the rings caught light from every direction and bent it into one flat beam parallel to the water. " +
        N(4) + "A lamp that once reached a few miles could now be seen from twenty. " +
        N(5) + "The ringed design also weighed far less than one thick lens, so lenses could be built taller than a person." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best states the main idea of the passage about lenses?",
          choices: [
            { letter: "A", text: "Oil lamps were dangerous to use in lighthouses." },
            { letter: "B", text: "A lens made of angled rings made lighthouse beams far stronger." },
            { letter: "C", text: "Lighthouses in the 1820s were taller than earlier ones." },
            { letter: "D", text: "Thick glass lenses are too heavy to be useful." }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to sentence 3, the rings of glass work by —",
          choices: [
            { letter: "A", text: "making the flame burn hotter" },
            { letter: "B", text: "reflecting light back into the lamp" },
            { letter: "C", text: "bending scattered light into one flat beam" },
            { letter: "D", text: "spreading the light across the sky" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "9.RI.2.B",
          stem: "The author includes sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "describe the problem the new lens solved" },
            { letter: "B", text: "explain how oil lamps were lit" },
            { letter: "C", text: "praise the engineers of the 1820s" },
            { letter: "D", text: "compare the sea with the sky" }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RI.2.A",
          stem: "In sentence 3, a beam parallel to the water is one that —",
          choices: [
            { letter: "A", text: "dips down into the waves" },
            { letter: "B", text: "points straight up" },
            { letter: "C", text: "changes color over the sea" },
            { letter: "D", text: "stays level with the surface" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that the new lens improved how far a light could be seen?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-t-first-whistle",
      family: "G9",
      title: "First Whistle",
      kind: "Literary · 9.RL",
      blurb: "A new referee makes her first call in a youth game.",
      level: 2,
      passage:
        "<p>" + N(1) + "The whistle felt like a stone in Dana's mouth, and for ten minutes she did not blow it once. " +
        N(2) + "A boy in yellow scooped up the ball and ran three steps toward the goal. " +
        N(3) + "Two parents laughed; his coach shrugged and opened his hands as if to say, well? " +
        N(4) + "Dana blew the whistle, pointed, and said, \"Hands, number six, free kick.\" " +
        N(5) + "Her voice came out steadier than she expected. " +
        N(6) + "Number six put the ball down and play went on as if nothing had happened, which, Dana realized, was the point." +
        "</p>",
      claims: [
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 1, comparing the whistle to a stone mainly suggests that Dana —",
          choices: [
            { letter: "A", text: "has been given the wrong kind of whistle" },
            { letter: "B", text: "finds it heavy and hard to use because she is nervous" },
            { letter: "C", text: "is worried the whistle will hurt her teeth" },
            { letter: "D", text: "wants to throw the whistle away" }
          ],
          correct: "B"
        },
        {
          id: "coach",
          sol: "9.RL.1.B",
          stem: "In sentence 3, the coach opens his hands mainly to —",
          choices: [
            { letter: "A", text: "ask Dana whether she is going to make the call" },
            { letter: "B", text: "signal that he wants a substitution" },
            { letter: "C", text: "show that he is angry with number six" },
            { letter: "D", text: "tell the parents to stop laughing" }
          ],
          correct: "A"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows Dana gaining confidence?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "point",
          sol: "9.RL.1.A",
          stem: "What does Dana realize is the point in sentence 6?",
          choices: [
            { letter: "A", text: "A referee should not care about the score." },
            { letter: "B", text: "A good call lets the game continue smoothly." },
            { letter: "C", text: "Young players do not notice free kicks." },
            { letter: "D", text: "Parents should be quiet during games." }
          ],
          correct: "B"
        },
        {
          id: "word",
          sol: "9.RL.2.C",
          stem: "In sentence 5, the word steadier most nearly means —",
          choices: [
            { letter: "A", text: "louder" },
            { letter: "B", text: "slower" },
            { letter: "C", text: "firmer" },
            { letter: "D", text: "kinder" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-t-museum-map",
      family: "G9",
      title: "Map of the Museum",
      kind: "Vocabulary · 9.RV",
      blurb: "Three words from a museum's welcome sheet.",
      level: 1,
      passage:
        "<p>" + N(1) + "Welcome to the Harbor Museum. " +
        N(2) + "The ground floor is <strong>devoted</strong> to fishing boats: every room on this level holds nets, hulls, or engines. " +
        N(3) + "Upstairs, the model ships are <strong>fragile</strong>, so please keep hands and backpacks away from the glass cases. " +
        N(4) + "Our guides will <strong>gladly</strong> answer questions; they enjoy them more than silence. " +
        N(5) + "The tour takes about forty minutes, and the gift shop closes at five." +
        "</p>",
      claims: [
        {
          id: "devoted",
          sol: "9.RV.1.B",
          stem: "In sentence 2, the word devoted most nearly means —",
          choices: [
            { letter: "A", text: "closed off" },
            { letter: "B", text: "set aside for" },
            { letter: "C", text: "loyal" },
            { letter: "D", text: "decorated by" }
          ],
          correct: "B"
        },
        {
          id: "fragile",
          sol: "9.RV.1.C",
          stem: "Which detail in sentence 3 best helps a reader understand fragile?",
          choices: [
            { letter: "A", text: "the model ships are upstairs" },
            { letter: "B", text: "the ships are kept in glass cases" },
            { letter: "C", text: "visitors must keep hands and backpacks away" },
            { letter: "D", text: "the museum is about the harbor" }
          ],
          correct: "C"
        },
        {
          id: "gladly",
          sol: "9.RV.1.B",
          stem: "In sentence 4, the word gladly tells the reader that the guides answer questions —",
          choices: [
            { letter: "A", text: "quickly" },
            { letter: "B", text: "for a fee" },
            { letter: "C", text: "only on tours" },
            { letter: "D", text: "willingly" }
          ],
          correct: "D"
        },
        {
          id: "parts",
          sol: "9.RV.1.E",
          stem: "The suffix -ly in gladly changes the word glad into —",
          choices: [
            { letter: "A", text: "an adverb that describes how something is done" },
            { letter: "B", text: "a noun that names a feeling" },
            { letter: "C", text: "a verb that means to make happy" },
            { letter: "D", text: "an adjective that means the opposite of glad" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-t-two-gardens",
      family: "G9",
      title: "Two Gardens",
      kind: "Paired texts · 9.DSR",
      blurb: "A rooftop planter and a backyard plot, side by side.",
      level: 2,
      passage:
        "<p><strong>Text 1 — The Rooftop</strong></p>" +
        "<p>" + N(1) + "Mateo's garden is six plastic tubs on an apartment roof. " +
        N(2) + "He carries water up in a jug every evening because there is no tap. " +
        N(3) + "The tomatoes get more sun than any plant on the ground, and the pigeons have learned to leave them alone.</p>" +
        "<p><strong>Text 2 — The Plot</strong></p>" +
        "<p>" + N(4) + "Grandma Ruth's garden runs along her backyard fence, with a hose coiled at one end. " +
        N(5) + "Her tomatoes ripen a week later than Mateo's because an oak shades them after two o'clock. " +
        N(6) + "Rabbits, not pigeons, are her problem; a low wire fence is her answer.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          stem: "Which idea do both texts share?",
          choices: [
            { letter: "A", text: "A garden can be grown in very different spaces." },
            { letter: "B", text: "Tomatoes need shade to grow well." },
            { letter: "C", text: "Gardening on a roof is easier than in a yard." },
            { letter: "D", text: "Animals always ruin a home garden." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "9.DSR.E",
          stem: "Which statement best describes how the two gardens differ?",
          choices: [
            { letter: "A", text: "Mateo grows tomatoes, while Grandma Ruth grows something else." },
            { letter: "B", text: "Mateo must carry his water, while Grandma Ruth has a hose." },
            { letter: "C", text: "Mateo has a fence, while Grandma Ruth does not." },
            { letter: "D", text: "Mateo's garden is shaded, while Grandma Ruth's is in full sun." }
          ],
          correct: "B"
        },
        {
          id: "ev1",
          sol: "9.DSR.D",
          stem: "Which sentence from Text 1 shows an advantage of the rooftop?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "C"
        },
        {
          id: "ev2",
          sol: "9.DSR.E",
          stem: "According to Text 2, why do Grandma Ruth's tomatoes ripen later?",
          choices: [
            { letter: "A", text: "Rabbits eat the early ones." },
            { letter: "B", text: "She waters them less often." },
            { letter: "C", text: "Her garden is far from the fence." },
            { letter: "D", text: "A tree blocks the afternoon sun." }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          stem: "Select TWO details that appear in both texts.",
          choices: [
            { letter: "A", text: "Each gardener has an animal to deal with." },
            { letter: "B", text: "Each garden is watered from a hose." },
            { letter: "C", text: "Each gardener grows tomatoes." },
            { letter: "D", text: "Each garden is on a rooftop." }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "g9-t-bat-count",
      family: "G9",
      title: "Counting Bats",
      kind: "Informational · 9.RI",
      blurb: "Why volunteers sit under a bridge at dusk with clickers.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every June, volunteers gather under the Route 9 bridge at sunset with hand clickers. " +
        N(2) + "They count the bats that pour from cracks in the concrete to hunt insects over the river. " +
        N(3) + "The count is not exact, since thousands leave in minutes, but the same method is used every year. " +
        N(4) + "That consistency is what matters: a drop from 8,000 to 5,000 signals trouble to scientists even if neither number is perfect. " +
        N(5) + "One bat eats hundreds of insects a night, so a shrinking colony is bad news for nearby farms." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "This passage about the bridge is mainly about —",
          choices: [
            { letter: "A", text: "how bats find insects over water" },
            { letter: "B", text: "why a yearly bat count is useful even though it is rough" },
            { letter: "C", text: "what volunteers should bring to the bridge" },
            { letter: "D", text: "how the Route 9 bridge was built" }
          ],
          correct: "B"
        },
        {
          id: "word",
          sol: "9.RI.2.A",
          stem: "In sentence 4, the word consistency most nearly means —",
          choices: [
            { letter: "A", text: "doing something the same way each time" },
            { letter: "B", text: "counting as fast as possible" },
            { letter: "C", text: "using the newest equipment" },
            { letter: "D", text: "getting an exact total" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence best explains why farmers should care about the count?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "infer",
          sol: "9.RI.1.C",
          stem: "Based on sentence 4, a count that dropped by a few hundred bats would most likely —",
          choices: [
            { letter: "A", text: "prove that the colony is dying" },
            { letter: "B", text: "cause the count to be cancelled" },
            { letter: "C", text: "not alarm scientists by itself" },
            { letter: "D", text: "mean the volunteers made an error" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-t-final-word",
      family: "G9",
      title: "The Final Word",
      kind: "Literary · 9.RL",
      blurb: "Amara faces the last word of the spelling bee.",
      level: 1,
      passage:
        "<p>" + N(1) + "\"Reservoir,\" the judge said, and Amara felt the gym go quiet in a way she could hear. " +
        N(2) + "She knew it; she had learned it the night the water tower on Hill Street was repainted. " +
        N(3) + "The trouble was the middle, where the letters seemed to slide around like ice in a glass. " +
        N(4) + "She asked for the definition, not because she needed it, but because it gave her ten seconds to picture the name painted on the tower. " +
        N(5) + "Then she spelled it the way the sign read. " +
        N(6) + "The bell did not ring." +
        "</p>",
      claims: [
        {
          id: "plot",
          sol: "9.RL.1.B",
          stem: "Why does Amara ask for the definition in sentence 4?",
          choices: [
            { letter: "A", text: "She has never heard the word before." },
            { letter: "B", text: "She wants time to remember how the word looked." },
            { letter: "C", text: "She thinks the judge said the word incorrectly." },
            { letter: "D", text: "She hopes the judge will give her an easier word." }
          ],
          correct: "B"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 3, the letters slide around like ice in a glass. This simile suggests that the middle of the word is —",
          choices: [
            { letter: "A", text: "cold and unpleasant" },
            { letter: "B", text: "easy to see through" },
            { letter: "C", text: "hard to hold in her mind" },
            { letter: "D", text: "spelled with silent letters" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "What does sentence 6 tell the reader?",
          choices: [
            { letter: "A", text: "Amara spelled the word correctly." },
            { letter: "B", text: "The bee was stopped early." },
            { letter: "C", text: "The judge forgot to ring the bell." },
            { letter: "D", text: "Amara ran out of time." }
          ],
          correct: "A"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          stem: "The detail in sentence 1 that the gym went quiet in a way she could hear mainly creates a feeling of —",
          choices: [
            { letter: "A", text: "boredom" },
            { letter: "B", text: "tension" },
            { letter: "C", text: "confusion" },
            { letter: "D", text: "relief" }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Sentences 4 and 5 together show that Amara is —",
          choices: [
            { letter: "A", text: "careless under pressure" },
            { letter: "B", text: "eager to impress the judge" },
            { letter: "C", text: "unsure whether she knows the word" },
            { letter: "D", text: "calm and strategic" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-t-rain-barrel",
      family: "G9",
      title: "Rain Barrel",
      kind: "Poetry · 9.RL",
      blurb: "Eight lines about waiting for a storm to fill a barrel.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The barrel by the shed is dry,<br>" +
        L(2) + "its mouth turned upward, asking why<br>" +
        L(3) + "the clouds that pass all afternoon<br>" +
        L(4) + "keep every drop and leave too soon.<br>" +
        L(5) + "I do not knock or tip or plead;<br>" +
        L(6) + "the garden knows what it will need.<br>" +
        L(7) + "At dusk the first slow drum begins,<br>" +
        L(8) + "and something in the barrel grins." +
        "</p>",
      claims: [
        {
          id: "person",
          sol: "9.RL.2.A",
          stem: "In lines 2 and 8, the barrel asks why and grins. The poet uses these details to —",
          choices: [
            { letter: "A", text: "show that the barrel is broken" },
            { letter: "B", text: "give the barrel human feelings" },
            { letter: "C", text: "compare the barrel to a drum" },
            { letter: "D", text: "explain how rain barrels work" }
          ],
          correct: "B"
        },
        {
          id: "speaker",
          sol: "9.RL.1.C",
          stem: "Lines 5 and 6 mainly show that the speaker is —",
          choices: [
            { letter: "A", text: "angry at the clouds" },
            { letter: "B", text: "too tired to care about the garden" },
            { letter: "C", text: "willing to wait patiently" },
            { letter: "D", text: "afraid of the coming storm" }
          ],
          correct: "C"
        },
        {
          id: "drum",
          sol: "9.RL.2.C",
          stem: "In line 7, the first slow drum most likely refers to —",
          choices: [
            { letter: "A", text: "thunder far away" },
            { letter: "B", text: "someone knocking on the shed" },
            { letter: "C", text: "music from a nearby house" },
            { letter: "D", text: "raindrops hitting the barrel" }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "9.RL.3.A",
          stem: "How does the mood of the poem change from line 1 to line 8?",
          choices: [
            { letter: "A", text: "from longing to satisfaction" },
            { letter: "B", text: "from joy to disappointment" },
            { letter: "C", text: "from fear to anger" },
            { letter: "D", text: "from calm to confusion" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── SHORT (nights 9–20) ───────────────────────── */
    {
      id: "g9-s-radio-repair",
      family: "G9",
      title: "The Kitchen Radio",
      kind: "Literary · 9.RL",
      blurb: "Theo tries to fix his grandfather's radio before he notices it is broken.",
      level: 1,
      passage:
        "<p>" + N(1) + "The kitchen radio had played the same station since before Theo was born, and on Saturday morning it played nothing at all. " +
        N(2) + "His grandfather was still asleep. " +
        N(3) + "Theo unplugged it, turned it over, and removed four screws the color of old tea. " +
        N(4) + "Inside, a wire had come loose from a metal tab, its end frayed like a paintbrush. " +
        N(5) + "He had no soldering iron, so he twisted the strands tight, wrapped them around the tab, and pinned them with electrical tape. " +
        N(6) + "It was not a proper repair, and he knew it. " +
        N(7) + "He screwed the back on, plugged it in, and turned the dial. " +
        N(8) + "A weather report crackled into the room, a little fuzzy but there. " +
        N(9) + "When his grandfather came down, he filled the kettle, listened for a moment, and said, \"Sounds like rain.\" " +
        N(10) + "Theo decided the real repair could wait until his grandfather went out for the paper." +
        "</p>",
      claims: [
        {
          id: "plot",
          sol: "9.RL.1.B",
          stem: "What problem does Theo discover in sentence 4?",
          choices: [
            { letter: "A", text: "The screws on the radio have rusted shut." },
            { letter: "B", text: "A wire inside the radio has come loose." },
            { letter: "C", text: "The station has gone off the air." },
            { letter: "D", text: "The radio is missing its dial." }
          ],
          correct: "B"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 4, the wire's end is compared to a paintbrush to show that it is —",
          choices: [
            { letter: "A", text: "covered in paint" },
            { letter: "B", text: "long and thin" },
            { letter: "C", text: "spread into loose strands" },
            { letter: "D", text: "still attached to the tab" }
          ],
          correct: "C"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Sentences 5 and 6 together show that Theo is —",
          choices: [
            { letter: "A", text: "resourceful but honest about the limits of his fix" },
            { letter: "B", text: "careless and in a hurry to finish" },
            { letter: "C", text: "afraid his grandfather will be angry" },
            { letter: "D", text: "certain that the radio is beyond repair" }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RL.2.C",
          stem: "In sentence 8, the word crackled most nearly means —",
          choices: [
            { letter: "A", text: "was shouted from across the room" },
            { letter: "B", text: "broke apart into small pieces" },
            { letter: "C", text: "played so quietly it was hard to hear" },
            { letter: "D", text: "came through with a rough, popping sound" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "9.RL.3.A",
          stem: "The grandfather's comment in sentence 9 mainly shows that he —",
          choices: [
            { letter: "A", text: "is upset that the radio is fuzzy" },
            { letter: "B", text: "knows exactly what Theo did" },
            { letter: "C", text: "has not noticed anything was wrong" },
            { letter: "D", text: "wants Theo to fix the radio properly" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "The story as a whole mainly suggests that —",
          choices: [
            { letter: "A", text: "old machines should be replaced rather than repaired" },
            { letter: "B", text: "a quiet act of care can protect someone's ordinary morning" },
            { letter: "C", text: "grandparents rarely notice what their grandchildren do" },
            { letter: "D", text: "every repair must be done with the right tools" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-s-ferry-rules",
      family: "G9",
      title: "Ferry Deck Rules",
      kind: "Functional text · 9.RI",
      blurb: "The passenger card posted at the top of the ferry stairs.",
      level: 1,
      passage:
        "<p><strong>ISLAND FERRY — PASSENGER CARD</strong></p>" +
        "<p>" + N(1) + "<strong>Boarding.</strong> Have your ticket ready before the ramp opens; crew scan tickets at the ramp, not on board. " +
        N(2) + "Bicycles go in the rack on the lower deck and are locked by the rider; the crew is not responsible for unlocked bikes. " +
        N(3) + "<strong>Underway.</strong> The upper deck is open in all weather, but the crew may close it when waves top four feet. " +
        N(4) + "Keep one hand on a rail between decks; the stairs are steep and often wet. " +
        N(5) + "Dogs are welcome below if leashed and above if carried. " +
        N(6) + "<strong>Arriving.</strong> Stay seated until the ferry has tied up at both ends, which takes about a minute after the engines change pitch. " +
        N(7) + "Passengers with bikes exit last so that walkers are not caught between wheels on the ramp. " +
        N(8) + "<strong>Missed the boat?</strong> The next crossing is posted by the ticket window, and a ticket is good for any sailing that day." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "The main purpose of the passenger card is to —",
          choices: [
            { letter: "A", text: "advertise the island to new visitors" },
            { letter: "B", text: "explain what riders must do at each stage of the trip" },
            { letter: "C", text: "describe the ferry's history and route" },
            { letter: "D", text: "warn riders that the ferry is often late" }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to the card, when may the crew close the upper deck?",
          choices: [
            { letter: "A", text: "when there are dogs on board" },
            { letter: "B", text: "when the stairs are wet" },
            { letter: "C", text: "when the waves are higher than four feet" },
            { letter: "D", text: "when the ferry is tying up" }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "9.RI.2.B",
          stem: "The author includes the reason at the end of sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "explain why bike riders exit after walkers" },
            { letter: "B", text: "warn that the ramp is narrow" },
            { letter: "C", text: "show that bikes are not allowed on the ramp" },
            { letter: "D", text: "encourage riders to walk instead of bike" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "How is the card organized?",
          choices: [
            { letter: "A", text: "from the most to the least important rule" },
            { letter: "B", text: "by the order of events during a crossing" },
            { letter: "C", text: "by comparing the upper and lower decks" },
            { letter: "D", text: "from problems to their solutions" }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.RI.1.C",
          stem: "Based on sentence 6, a passenger would know the ferry is about to dock when —",
          choices: [
            { letter: "A", text: "the crew opens the upper deck" },
            { letter: "B", text: "the ramp is lowered" },
            { letter: "C", text: "the ticket board changes" },
            { letter: "D", text: "the sound of the engines changes" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-s-glass-frogs",
      family: "G9",
      title: "See-Through Frogs",
      kind: "Informational · 9.RI",
      blurb: "How a tiny frog hides its own blood while it sleeps.",
      level: 2,
      passage:
        "<p>" + N(1) + "Glass frogs are small tree frogs whose bellies are so clear that their organs can be seen through the skin. " +
        N(2) + "That transparency helps them hide on the undersides of leaves, where light shines through them and their outline nearly disappears. " +
        N(3) + "There is one problem: blood is red, and a leaf-colored frog full of red blood is easy to spot. " +
        N(4) + "Researchers found that when a glass frog sleeps, it moves most of its red blood cells into its liver, which is wrapped in a mirror-like coating that hides them. " +
        N(5) + "With the blood tucked away, the frog becomes up to twice as transparent as when it is awake. " +
        N(6) + "In most animals, packing blood cells that tightly would cause dangerous clots. " +
        N(7) + "Somehow the frogs avoid this, and scientists hope that learning how may one day help doctors prevent clots in people. " +
        N(8) + "For now, the frog keeps its secret, sleeping in plain sight." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best summarizes the passage?",
          choices: [
            { letter: "A", text: "Glass frogs live on the undersides of leaves." },
            { letter: "B", text: "Glass frogs hide their blood while sleeping, which makes them harder to see." },
            { letter: "C", text: "Scientists have found a cure for blood clots in frogs." },
            { letter: "D", text: "Red blood makes most animals easy for predators to find." }
          ],
          correct: "B"
        },
        {
          id: "problem",
          sol: "9.RI.2.B",
          stem: "The author includes sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "describe the color of the frog's skin" },
            { letter: "B", text: "explain why the frogs sleep during the day" },
            { letter: "C", text: "set up the problem that the frog's trick solves" },
            { letter: "D", text: "show that glass frogs are often eaten" }
          ],
          correct: "C"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to sentence 4, where does a sleeping glass frog store its red blood cells?",
          choices: [
            { letter: "A", text: "in its liver" },
            { letter: "B", text: "under its skin" },
            { letter: "C", text: "in its legs" },
            { letter: "D", text: "in a leaf" }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RI.2.A",
          stem: "In sentence 2, the word transparency most nearly means —",
          choices: [
            { letter: "A", text: "the ability to hold very still" },
            { letter: "B", text: "a bright green coloring" },
            { letter: "C", text: "the ability to move quickly" },
            { letter: "D", text: "the quality of letting light pass through" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that the frog's ability could matter to humans?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RI.1.C",
          stem: "Which statement from the passage is a hope rather than a confirmed finding?",
          choices: [
            { letter: "A", text: "The frog's organs can be seen through its belly." },
            { letter: "B", text: "Learning the frog's trick may help prevent clots in people." },
            { letter: "C", text: "A sleeping frog becomes up to twice as transparent." },
            { letter: "D", text: "The liver has a mirror-like coating." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-s-night-bakery-words",
      family: "G9",
      title: "Night Shift Words",
      kind: "Vocabulary · 9.RV",
      blurb: "Four words from a first night at the bread ovens.",
      level: 2,
      passage:
        "<p>" + N(1) + "On her first night at the bakery, Noor learned that the ovens were <strong>temperamental</strong>: the old one ran hot on the left side and cool on the right, and no two loaves baked the same. " +
        N(2) + "Her supervisor, Mr. Okafor, showed her how to <strong>rotate</strong> the trays halfway through, turning each one so the pale side faced the heat. " +
        N(3) + "\"Do not be <strong>complacent</strong> because the first batch looks fine,\" he warned. \"The oven changes its mind around three in the morning.\" " +
        N(4) + "By four, Noor's arms ached and flour had settled into every crease of her sleeves. " +
        N(5) + "Still, when the last trays came out even and golden, she felt a small, private <strong>satisfaction</strong> that had nothing to do with her paycheck. " +
        N(6) + "Mr. Okafor nodded once at the loaves, which, she was learning, was the closest he came to applause." +
        "</p>",
      claims: [
        {
          id: "temperamental",
          sol: "9.RV.1.B",
          stem: "In sentence 1, the word temperamental most nearly means —",
          choices: [
            { letter: "A", text: "extremely old and rusty" },
            { letter: "B", text: "unpredictable and hard to control" },
            { letter: "C", text: "hot enough to burn skin" },
            { letter: "D", text: "simple for anyone to operate" }
          ],
          correct: "B"
        },
        {
          id: "rotate",
          sol: "9.RV.1.C",
          stem: "Which words in sentence 2 best help a reader understand rotate?",
          choices: [
            { letter: "A", text: "halfway through" },
            { letter: "B", text: "showed her how" },
            { letter: "C", text: "turning each one" },
            { letter: "D", text: "faced the heat" }
          ],
          correct: "C"
        },
        {
          id: "complacent",
          sol: "9.RV.1.B",
          stem: "In sentence 3, Mr. Okafor warns Noor not to be complacent. He most nearly means she should not —",
          choices: [
            { letter: "A", text: "work too slowly" },
            { letter: "B", text: "argue with the supervisor" },
            { letter: "C", text: "leave the bakery before three" },
            { letter: "D", text: "relax and stop paying attention" }
          ],
          correct: "D"
        },
        {
          id: "satisfaction",
          sol: "9.RV.1.C",
          stem: "The phrase that had nothing to do with her paycheck in sentence 5 helps show that satisfaction refers to —",
          choices: [
            { letter: "A", text: "a feeling of pride in work done well" },
            { letter: "B", text: "relief that the shift is over" },
            { letter: "C", text: "pleasure at earning extra money" },
            { letter: "D", text: "gratitude toward Mr. Okafor" }
          ],
          correct: "A"
        },
        {
          id: "figurative",
          sol: "9.RV.1.E",
          stem: "In sentence 3, the oven changes its mind is an example of —",
          choices: [
            { letter: "A", text: "a simile" },
            { letter: "B", text: "personification" },
            { letter: "C", text: "an exaggeration" },
            { letter: "D", text: "an allusion" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-s-crossing-guard",
      family: "G9",
      title: "Crossing Guard",
      kind: "Poetry · 9.RL",
      blurb: "Nine lines about the man at the corner of Elm and Third.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "He wears the morning like a coat,<br>" +
        L(2) + "orange and stiff against the cold,<br>" +
        L(3) + "and holds the traffic with one palm<br>" +
        L(4) + "as if the cars were his to hold.<br>" +
        L(5) + "We cross. We do not look at him.<br>" +
        L(6) + "The buses hiss. The bell will ring.<br>" +
        L(7) + "But once, when snow had shut the school,<br>" +
        L(8) + "I saw him standing there at eight,<br>" +
        L(9) + "guarding a street that no one crossed." +
        "</p>",
      claims: [
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In line 1, the crossing guard wears the morning like a coat. This comparison suggests that —",
          choices: [
            { letter: "A", text: "his coat is too thin for the weather" },
            { letter: "B", text: "the early morning is a familiar part of who he is" },
            { letter: "C", text: "he has forgotten his uniform" },
            { letter: "D", text: "the morning is warmer than usual" }
          ],
          correct: "B"
        },
        {
          id: "line4",
          sol: "9.RL.2.B",
          stem: "Line 4 mainly suggests that the guard —",
          choices: [
            { letter: "A", text: "owns several of the cars" },
            { letter: "B", text: "is afraid of the traffic" },
            { letter: "C", text: "acts with calm authority" },
            { letter: "D", text: "wishes he could drive" }
          ],
          correct: "C"
        },
        {
          id: "line5",
          sol: "9.RL.1.C",
          stem: "Line 5 shows that the students —",
          choices: [
            { letter: "A", text: "dislike the crossing guard" },
            { letter: "B", text: "are late for class" },
            { letter: "C", text: "cross only when he signals" },
            { letter: "D", text: "take the guard for granted" }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "9.RL.3.A",
          stem: "The word But at the start of line 7 signals that the poem is about to —",
          choices: [
            { letter: "A", text: "describe a memory that changed the speaker's view" },
            { letter: "B", text: "explain why the school was closed by the snow" },
            { letter: "C", text: "list the other duties the guard performs each day" },
            { letter: "D", text: "return to the sounds of the buses and the bell" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses the central idea of \"Crossing Guard\"?",
          choices: [
            { letter: "A", text: "Snow days are the best part of winter." },
            { letter: "B", text: "Some people do their duty even when no one is watching." },
            { letter: "C", text: "Traffic near schools is dangerous." },
            { letter: "D", text: "Students should thank adults more often." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-s-two-inventors",
      family: "G9",
      title: "Two Workbenches",
      kind: "Paired texts · 9.DSR",
      blurb: "A journal entry and a science-fair judge's note about the same project.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From Wren's Project Journal</strong></p>" +
        "<p>" + N(1) + "Day 12: The solar phone charger works, but only at noon. " +
        N(2) + "By three the panel faces the wrong way and the current drops to almost nothing. " +
        N(3) + "Propping it on a book helped for an hour. " +
        N(4) + "I need a stand that follows the sun without a motor, because a motor would use more power than the panel makes. " +
        N(5) + "Idea: a weight on a string that slowly tips the panel as a bottle of water drains. " +
        N(6) + "Testing tomorrow, if no rain.</p>" +
        "<p><strong>Text 2 — Judge's Comment Card, Regional Science Fair</strong></p>" +
        "<p>" + N(7) + "Project 41 (Wren): The charger itself is a standard design and would not score highly alone. " +
        N(8) + "The sun-tracking stand, however, is genuinely clever. " +
        N(9) + "Using a draining water bottle as a timer that tilts the panel costs nothing and needs no electricity. " +
        N(10) + "The student's journal shows the idea came from a failure on Day 12 rather than from a kit. " +
        N(11) + "Recommend for the innovation award. " +
        N(12) + "Suggest the student measure how much extra charge the stand adds over a full afternoon.</p>",
      claims: [
        {
          id: "problem",
          sol: "9.DSR.D",
          stem: "According to Text 1, what problem does Wren face on Day 12?",
          choices: [
            { letter: "A", text: "The charger does not work at all." },
            { letter: "B", text: "The panel stops facing the sun in the afternoon." },
            { letter: "C", text: "The motor uses too much power." },
            { letter: "D", text: "Rain has delayed the testing." }
          ],
          correct: "B"
        },
        {
          id: "judge",
          sol: "9.DSR.E",
          stem: "Which part of the project does the judge in Text 2 value most?",
          choices: [
            { letter: "A", text: "the standard design of the charger itself" },
            { letter: "B", text: "the neat handwriting in the project journal" },
            { letter: "C", text: "the stand that tilts the panel without electricity" },
            { letter: "D", text: "the measurement of extra charge each afternoon" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.E",
          stem: "Which statement best describes how the journal and the comment card differ?",
          choices: [
            { letter: "A", text: "Text 1 records a problem as it happens, while Text 2 evaluates the finished result." },
            { letter: "B", text: "Text 1 praises the project, while Text 2 criticizes it." },
            { letter: "C", text: "Text 1 is written by a judge, while Text 2 is written by a student." },
            { letter: "D", text: "Text 1 describes the fair, while Text 2 describes the charger." }
          ],
          correct: "A"
        },
        {
          id: "ev1",
          sol: "9.DSR.D",
          stem: "Which sentence from Text 1 best explains why Wren avoids using a motor?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "C"
        },
        {
          id: "ev2",
          sol: "9.DSR.E",
          stem: "Sentence 10 shows that the judge read Text 1 because it —",
          choices: [
            { letter: "A", text: "mentions the water bottle" },
            { letter: "B", text: "names the exact day the idea began" },
            { letter: "C", text: "recommends an award" },
            { letter: "D", text: "asks for more measurements" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          stem: "Select TWO ideas that both texts support.",
          choices: [
            { letter: "A", text: "The stand works by slowly draining water." },
            { letter: "B", text: "The charger was built from a kit." },
            { letter: "C", text: "The project won the innovation award." },
            { letter: "D", text: "The stand was designed to work without using power." }
          ],
          correct: ["A", "D"]
        }
      ]
    },
    {
      id: "g9-s-cool-roofs",
      family: "G9",
      title: "White Roofs",
      kind: "Informational · 9.RI",
      blurb: "Why some cities are painting their rooftops white.",
      level: 1,
      passage:
        "<p>" + N(1) + "On a summer afternoon, a black tar roof can reach 170 degrees Fahrenheit, hot enough to fry an egg. " +
        N(2) + "That heat seeps into the rooms below and forces air conditioners to run harder. " +
        N(3) + "Some cities have found a cheap fix: paint the roof white. " +
        N(4) + "A white surface reflects most sunlight instead of absorbing it, so a painted roof can stay 50 degrees cooler. " +
        N(5) + "Owners report lower electric bills within a month, and the paint costs a fraction of a new roof. " +
        N(6) + "The benefit reaches beyond a single building. " +
        N(7) + "When thousands of roofs are painted, the air above the streets cools slightly, easing the heat that builds up in cities. " +
        N(8) + "There are limits: in cold climates a white roof reflects away winter sun that would have warmed the building. " +
        N(9) + "For hot cities, though, a bucket of paint is one of the simplest tools against rising heat." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "What is the central idea of the passage?",
          choices: [
            { letter: "A", text: "Black roofs are the most common kind in cities." },
            { letter: "B", text: "Painting roofs white is a cheap way to keep buildings and cities cooler." },
            { letter: "C", text: "Air conditioners use too much electricity in the summer." },
            { letter: "D", text: "White paint does not work in cold climates." }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to sentence 4, a white roof stays cooler because it —",
          choices: [
            { letter: "A", text: "reflects most of the sunlight" },
            { letter: "B", text: "is thicker than a tar roof" },
            { letter: "C", text: "absorbs heat during the day" },
            { letter: "D", text: "is cooled by the air conditioner" }
          ],
          correct: "A"
        },
        {
          id: "hook",
          sol: "9.RI.2.B",
          stem: "The author includes the detail about frying an egg in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "suggest a use for hot rooftops" },
            { letter: "B", text: "compare roofs with kitchen stoves" },
            { letter: "C", text: "help the reader picture how hot a dark roof gets" },
            { letter: "D", text: "show that eggs cook at 170 degrees" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "Sentence 8 is included mainly to —",
          choices: [
            { letter: "A", text: "argue that white roofs should not be used" },
            { letter: "B", text: "describe how snow affects a roof" },
            { letter: "C", text: "repeat the main benefit of white paint" },
            { letter: "D", text: "point out a drawback of the solution" }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RI.2.A",
          stem: "In sentence 2, the word seeps most nearly means —",
          choices: [
            { letter: "A", text: "spreads slowly" },
            { letter: "B", text: "bounces back" },
            { letter: "C", text: "shuts off" },
            { letter: "D", text: "rises quickly" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-s-market-words",
      family: "G9",
      title: "Market Morning Words",
      kind: "Vocabulary · 9.RV",
      blurb: "Four words from a Saturday at the farmers' market stall.",
      level: 1,
      passage:
        "<p>" + N(1) + "By seven the farmers' market was already <strong>bustling</strong>, with carts rattling over the pavement and vendors calling prices across the aisles. " +
        N(2) + "Jamal's uncle ran the honey stall, and Jamal's job was to keep the jars <strong>arranged</strong> in neat rows by size, smallest in front, so shoppers could see every label. " +
        N(3) + "A woman asked whether the dark honey tasted different from the light, and Jamal <strong>hesitated</strong>, unsure, before his uncle stepped in with a sample spoon. " +
        N(4) + "\"Try it; the dark comes from late-summer flowers,\" his uncle said. " +
        N(5) + "She bought two jars. " +
        N(6) + "By noon Jamal could answer that question himself, and he had learned that a <strong>confident</strong> answer sold more honey than a careful one." +
        "</p>",
      claims: [
        {
          id: "bustling",
          sol: "9.RV.1.B",
          stem: "In sentence 1, the word bustling most nearly means —",
          choices: [
            { letter: "A", text: "quiet and nearly empty" },
            { letter: "B", text: "busy and full of movement" },
            { letter: "C", text: "closed for the rest of the day" },
            { letter: "D", text: "cold, wet, and slippery" }
          ],
          correct: "B"
        },
        {
          id: "arranged",
          sol: "9.RV.1.C",
          stem: "Which phrase in sentence 2 best helps a reader understand arranged?",
          choices: [
            { letter: "A", text: "ran the honey stall" },
            { letter: "B", text: "Jamal's job" },
            { letter: "C", text: "see every label" },
            { letter: "D", text: "in neat rows by size" }
          ],
          correct: "D"
        },
        {
          id: "hesitated",
          sol: "9.RV.1.B",
          stem: "In sentence 3, the word hesitated most nearly means —",
          choices: [
            { letter: "A", text: "paused" },
            { letter: "B", text: "shouted" },
            { letter: "C", text: "agreed" },
            { letter: "D", text: "laughed" }
          ],
          correct: "A"
        },
        {
          id: "confident",
          sol: "9.RV.1.C",
          stem: "In sentence 6, the author contrasts a confident answer with a careful one to show that confident means —",
          choices: [
            { letter: "A", text: "completely correct" },
            { letter: "B", text: "friendly and polite" },
            { letter: "C", text: "sure and unhesitating" },
            { letter: "D", text: "long and detailed" }
          ],
          correct: "C"
        },
        {
          id: "parts",
          sol: "9.RV.1.E",
          stem: "The word vendors in sentence 1 shares a root with the word vending. Based on this, vendors most nearly means —",
          choices: [
            { letter: "A", text: "shoppers" },
            { letter: "B", text: "sellers" },
            { letter: "C", text: "farmers" },
            { letter: "D", text: "carts" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
