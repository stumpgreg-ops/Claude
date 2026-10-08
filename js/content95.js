/* SOL Labyrinth — Grade 11 medium expansion packs (v5.15): a farmers market, a coral reef, a tutoring program,
 * coastal tide pools. Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── LITERARY ───────────────────────── */
    {
      id: "g11-rl-c95-lasttomatoes",
      family: "G11",
      title: "The Last Three Crates",
      kind: "Literary · 11.RL",
      blurb: "Closing time at a market stall, three crates of soft tomatoes, and a grandfather who says wait.",
      level: 1,
      passage:
        "<p>" + N(1) + "By one o'clock the Saturday market on Fulton Square had thinned to a few strollers and a man sweeping cabbage leaves into a pile. " +
        N(2) + "Lucia had been at her grandfather's stall since six, and her feet ached in a way she thought only adults were allowed to complain about. " +
        N(3) + "Three crates of tomatoes remained, split and soft at the shoulders, too ripe to survive the drive home. " +
        N(4) + "\"We could sell them half price,\" she said, already reaching for the marker to change the sign. " +
        N(5) + "Abuelo Ramon shook his head and kept wrapping the scale in its towel. " +
        N(6) + "\"Wait,\" he said. " +
        N(7) + "At a quarter past one, a woman in a paint-spattered apron arrived pushing an empty stroller, and behind her came two teenagers carrying a cooler between them. " +
        N(8) + "They ran the soup kitchen on Hale Street, Lucia learned, and every week they took whatever Ramon could not sell. " +
        N(9) + "The woman did not haggle or thank him with a speech; she simply tipped the crates into the stroller and asked how his knee was. " +
        N(10) + "\"Better than the tomatoes,\" he answered, and she laughed. " +
        N(11) + "On the drive home, Lucia counted the cash box twice and frowned at how little was in it. " +
        N(12) + "Her grandfather watched the road. " +
        N(13) + "\"Some things you weigh on the scale,\" he said, \"and some things you don't.\" " +
        N(14) + "Lucia looked down at the empty crates sliding in the truck bed and, for once, did not argue." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story about the unsold tomatoes most clearly develop?",
          choices: [
            { letter: "A", text: "Hard work at a young age is usually rewarded with profit." },
            { letter: "B", text: "The value of generosity cannot always be counted in money." },
            { letter: "C", text: "Older vendors tend to resist new ideas from younger ones." },
            { letter: "D", text: "Customers who arrive late should expect lower prices." }
          ],
          correct: "B"
        },
        {
          id: "wait",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Abuelo Ramon's one-word reply in sentence 6 reveals that he —",
          choices: [
            { letter: "A", text: "already has a plan for the leftover tomatoes" },
            { letter: "B", text: "is too tired to discuss prices with Lucia" },
            { letter: "C", text: "dislikes selling produce to strangers" },
            { letter: "D", text: "expects a late customer to pay full price" }
          ],
          correct: "A"
        },
        {
          id: "scale",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 13, Ramon uses the scale as a figure for —",
          choices: [
            { letter: "A", text: "the heavy physical work of running a stall" },
            { letter: "B", text: "the fairness of the market's rules for vendors" },
            { letter: "C", text: "the habit of measuring worth only by sales" },
            { letter: "D", text: "the cost of replacing old market equipment" }
          ],
          correct: "C"
        },
        {
          id: "knee",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "Ramon's answer in sentence 10, Better than the tomatoes, gives the exchange a tone that is —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "formal and polite" },
            { letter: "C", text: "anxious and unsure" },
            { letter: "D", text: "lightly joking" }
          ],
          correct: "D"
        },
        {
          id: "haggle",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 9, the word haggle most nearly means —",
          choices: [
            { letter: "A", text: "bargain over a price" },
            { letter: "B", text: "complain about quality" },
            { letter: "C", text: "wait in a long line" },
            { letter: "D", text: "count out the change" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The final sentence resolves the story by showing that Lucia —",
          choices: [
            { letter: "A", text: "plans to raise the prices at the stall next week" },
            { letter: "B", text: "is too worn out from the day to keep talking" },
            { letter: "C", text: "has begun to accept her grandfather's view" },
            { letter: "D", text: "regrets agreeing to work at the stall at all" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c95-oranges",
      family: "G11",
      title: "Thirds of Twelve",
      kind: "Literary · 11.RL",
      blurb: "A high school tutor, a fourth grader who only shrugs, and a paper bag of orange slices.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every Tuesday after school, Desmond tutored a fourth grader named Rosa at the public library, at the round table under the window that never fully closed. " +
        N(2) + "For three weeks they had worked on fractions, and for three weeks Rosa had answered every question with the same shrug. " +
        N(3) + "Desmond had tried flash cards, a worksheet with cartoon pizzas, and an app that rewarded correct answers with a dancing robot. " +
        N(4) + "None of it worked. " +
        N(5) + "This Tuesday, Rosa arrived with a paper bag of orange slices from her mother's fruit cart and set it on the table without a word. " +
        N(6) + "Desmond looked at the bag, then at the worksheet, then back at the bag. " +
        N(7) + "\"How many slices are in there?\" he asked. " +
        N(8) + "Rosa counted. " +
        N(9) + "\"Twelve.\" " +
        N(10) + "\"If you give me a third of them, how many do I get?\" " +
        N(11) + "She frowned, pushed the slices into three small piles, and slid one pile across the table. " +
        N(12) + "\"Four,\" she said, and for the first time she looked up at him instead of at the floor. " +
        N(13) + "They spent the rest of the hour dividing oranges into halves, fourths, and sixths, and Desmond did not open the worksheet once. " +
        N(14) + "When her mother came to pick her up, Rosa held up the empty bag. " +
        N(15) + "\"We ate the math,\" she announced. " +
        N(16) + "That evening Desmond wrote one line in his tutoring log: Start with what she brings." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is best supported by the tutoring session with Rosa?",
          choices: [
            { letter: "A", text: "Students learn best when they are left to work alone." },
            { letter: "B", text: "Technology is the most reliable way to teach math." },
            { letter: "C", text: "Learning often begins with what a student already knows." },
            { letter: "D", text: "Young children care more about snacks than about school." }
          ],
          correct: "C"
        },
        {
          id: "short",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "The very short sentence 4 mainly emphasizes —",
          choices: [
            { letter: "A", text: "how completely Desmond's earlier methods had failed" },
            { letter: "B", text: "that Desmond is about to quit the tutoring program" },
            { letter: "C", text: "how little time the library gives each tutor" },
            { letter: "D", text: "that Rosa refuses to speak to Desmond at all" }
          ],
          correct: "A"
        },
        {
          id: "looks",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Desmond's glances in sentence 6 suggest that he —",
          choices: [
            { letter: "A", text: "is annoyed that Rosa brought food to the library" },
            { letter: "B", text: "wants to finish the worksheet before they eat" },
            { letter: "C", text: "is unsure whether Rosa's mother will approve" },
            { letter: "D", text: "sees that the oranges may teach more than the page" }
          ],
          correct: "D"
        },
        {
          id: "atemath",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "Rosa's announcement in sentence 15, We ate the math, creates a tone that is —",
          choices: [
            { letter: "A", text: "confused and apologetic" },
            { letter: "B", text: "playful and proud" },
            { letter: "C", text: "bored and dismissive" },
            { letter: "D", text: "serious and formal" }
          ],
          correct: "B"
        },
        {
          id: "shrug",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "In sentence 2, the repeated shrug most nearly conveys Rosa's —",
          choices: [
            { letter: "A", text: "lack of engagement with the lessons" },
            { letter: "B", text: "anger at being sent to tutoring" },
            { letter: "C", text: "pride in already knowing the answers" },
            { letter: "D", text: "fear of making Desmond upset" }
          ],
          correct: "A"
        },
        {
          id: "log",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The log entry in sentence 16 resolves the story by showing that Desmond —",
          choices: [
            { letter: "A", text: "plans to ask Rosa's mother for more oranges" },
            { letter: "B", text: "is relieved that the tutoring hour is finally over" },
            { letter: "C", text: "thinks the worksheet was too difficult for Rosa" },
            { letter: "D", text: "has drawn a lesson he intends to keep using" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c95-poolc",
      family: "G11",
      title: "Pool C",
      kind: "Literary · 11.RL",
      blurb: "Two siblings, a mother's half-finished field notebook, and a count of sea stars at low tide.",
      level: 3,
      passage:
        "<p>" + N(1) + "My brother Kenji believes the ocean owes him something, so he walks the rocks at low tide the way a landlord walks a hallway, checking each pool as if it were an apartment behind on rent. " +
        N(2) + "I follow with the field notebook our mother left us, the one with her careful sketches of sea stars and a coffee ring on the cover. " +
        N(3) + "She surveyed these same pools every spring for eleven years, and after she took the research job inland, the notebook stayed with us, half finished. " +
        N(4) + "Kenji is nine and does not read her notes; he reads the water. " +
        N(5) + "\"The purple ones are fewer,\" he announces, crouching over a pool the size of a bathtub. " +
        N(6) + "I find her page for this pool, the one she labeled Pool C in block capitals, and count her tally marks: fourteen ochre stars, May of the year I turned ten. " +
        N(7) + "Today there are six. " +
        N(8) + "I write the number below hers, and my handwriting looks small and unsteady beside it, like a guest's signature in a stranger's book. " +
        N(9) + "Kenji asks whether the stars moved away or something worse, and I tell him the truth, which is that I do not know, and that not knowing is the reason for the notebook. " +
        N(10) + "He considers this, then takes the pencil from me and draws a sea star in the margin, crooked, with one arm shorter than the rest. " +
        N(11) + "\"So she knows we counted,\" he says. " +
        N(12) + "The tide is already turning, pressing white lace into the low channels, and we climb back toward the parking lot with wet knees and a page that is no longer only hers." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the siblings' visit to Pool C most clearly develop?",
          choices: [
            { letter: "A", text: "Children should not be trusted with scientific records." },
            { letter: "B", text: "Carrying on someone's work can keep a bond with them alive." },
            { letter: "C", text: "Nature recovers quickly when people stay away from it." },
            { letter: "D", text: "Younger siblings rarely take serious tasks seriously." }
          ],
          correct: "B"
        },
        {
          id: "landlord",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 1, comparing Kenji to a landlord mainly suggests that he —",
          choices: [
            { letter: "A", text: "plans to collect animals from the pools to sell" },
            { letter: "B", text: "is careless about where he steps on the rocks" },
            { letter: "C", text: "would rather be indoors than at the shore" },
            { letter: "D", text: "inspects the pools with a sense of ownership" }
          ],
          correct: "D"
        },
        {
          id: "guest",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 8, comparing the narrator's handwriting to a guest's signature emphasizes that she —",
          choices: [
            { letter: "A", text: "feels like an outsider in work that was her mother's" },
            { letter: "B", text: "is embarrassed by how messy her writing has become" },
            { letter: "C", text: "wants a stranger to take over the survey for her" },
            { letter: "D", text: "believes her mother's count was probably wrong" }
          ],
          correct: "A"
        },
        {
          id: "unfinished",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The detail in sentence 3 that the notebook stayed with us, half finished, mainly serves to —",
          choices: [
            { letter: "A", text: "explain why the sea stars have become fewer" },
            { letter: "B", text: "show that the mother lost interest in the pools" },
            { letter: "C", text: "suggest that the survey is waiting to be continued" },
            { letter: "D", text: "reveal that the notebook was damaged by water" }
          ],
          correct: "C"
        },
        {
          id: "drawing",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Kenji's crooked drawing in sentences 10 and 11 is best interpreted as —",
          choices: [
            { letter: "A", text: "his own way of joining the record his mother began" },
            { letter: "B", text: "a sign that he is bored and wants to go home" },
            { letter: "C", text: "a careful scientific sketch of the missing stars" },
            { letter: "D", text: "an attempt to make his sister's count look wrong" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "The story is told from the older sister's first-person point of view. This choice mainly allows the reader to —",
          choices: [
            { letter: "A", text: "learn exactly why the sea stars disappeared" },
            { letter: "B", text: "understand Kenji's private thoughts about the shore" },
            { letter: "C", text: "see the mother's research from a scientist's view" },
            { letter: "D", text: "share her uncertainty about taking up the survey" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c95-meter12",
      family: "G11",
      title: "Meter Twelve",
      kind: "Literary · 11.RL",
      blurb: "A first reef survey, a slate of grim letters, and one small colony that changes the count.",
      level: 2,
      passage:
        "<p>" + N(1) + "Talia had pictured the reef from the brochure: a crowded city of color, fish flickering like confetti thrown at a parade. " +
        N(2) + "What she saw from the surface, floating face down with a slate clipped to her wrist, looked more like a city after the power had gone out. " +
        N(3) + "Whole branches of staghorn coral were the pale white of chalk, and the fish that did move among them seemed to be passing through rather than living there. " +
        N(4) + "Her survey partner, a retired ferry captain named Mr. Ansah, tapped her shoulder and pointed at the slate. " +
        N(5) + "Their job was simple and, to Talia, almost insulting: swim the thirty-meter line, and every two meters, mark whether the coral below was healthy, pale, bleached, or dead. " +
        N(6) + "No photographs, no names of fish, just letters in grease pencil. " +
        N(7) + "For the first ten meters she marked B after B and felt that she was writing the reef's obituary. " +
        N(8) + "At meter twelve, a small brown colony caught her eye, its tips edged in faint green, a lone fist of color in the white. " +
        N(9) + "She wrote H and pressed so hard that the pencil snapped. " +
        N(10) + "Back on the boat, Mr. Ansah read her slate without comment and copied the letters into a waterproof logbook already thick with years of entries. " +
        N(11) + "\"That H at meter twelve,\" he finally said, \"was a B last August.\" " +
        N(12) + "Talia looked at the gray water and understood, slowly, that she had not been counting the dead at all. " +
        N(13) + "She had been counting what came back." +
        "</p>",
      claims: [
        {
          id: "cities",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentences 1 and 2, the contrast between a city of color and a city after the power had gone out mainly conveys —",
          choices: [
            { letter: "A", text: "how crowded the reef is with divers and boats" },
            { letter: "B", text: "Talia's fear of swimming in open water" },
            { letter: "C", text: "the gap between Talia's hopes and the reef she finds" },
            { letter: "D", text: "the way sunlight fades as the day goes on" }
          ],
          correct: "C"
        },
        {
          id: "insulting",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Talia's attitude toward the survey method in sentences 5 and 6 is best described as —",
          choices: [
            { letter: "A", text: "dismissive, because the task seems too plain" },
            { letter: "B", text: "nervous, because the rules seem too complex" },
            { letter: "C", text: "grateful, because the work is easy to finish" },
            { letter: "D", text: "curious, because she wants to learn fish names" }
          ],
          correct: "A"
        },
        {
          id: "obituary",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 7, the word obituary suggests that Talia believes she is —",
          choices: [
            { letter: "A", text: "making a map for future snorkelers" },
            { letter: "B", text: "copying an older survey's results" },
            { letter: "C", text: "practicing her handwriting underwater" },
            { letter: "D", text: "recording the death of the reef" }
          ],
          correct: "D"
        },
        {
          id: "august",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Mr. Ansah's remark in sentence 11 implies that —",
          choices: [
            { letter: "A", text: "Talia marked the colony with the wrong letter" },
            { letter: "B", text: "the colony at meter twelve has recovered since last year" },
            { letter: "C", text: "the survey line was moved after last August" },
            { letter: "D", text: "Mr. Ansah doubts that the logbook is accurate" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The narrative is built primarily around —",
          choices: [
            { letter: "A", text: "a dispute between Talia and Mr. Ansah over methods" },
            { letter: "B", text: "a series of dangers Talia faces in deep water" },
            { letter: "C", text: "a shift in how Talia understands her task" },
            { letter: "D", text: "a comparison of two reefs in different oceans" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of Meter Twelve?",
          choices: [
            { letter: "A", text: "Patient records can reveal hope that a glance would miss." },
            { letter: "B", text: "Volunteers should not be trusted with scientific work." },
            { letter: "C", text: "Brochures usually tell the truth about natural places." },
            { letter: "D", text: "Older people are often too quiet to be good teachers." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rl-c95-buckwheat",
      family: "G11",
      title: "Real Local Honey",
      kind: "Literary · 11.RL",
      blurb: "A rival honey stall, a son who wants to cut prices, and a mother who pulls out a stool.",
      level: 3,
      passage:
        "<p>" + N(1) + "The new stall went up across the aisle from the Mehtas' honey table in the first week of June, and by the second week it had a hand-lettered banner that read REAL LOCAL HONEY, as if someone had accused the Mehtas of selling the fake kind. " +
        N(2) + "Arjun watched customers drift toward the banner the way rainwater finds the low side of a parking lot. " +
        N(3) + "The jars over there were bigger, the prices were lower, and the woman running the stall, who could not have been much older than his cousin, smiled at everyone as though she had been waiting all morning for them in particular. " +
        N(4) + "\"We should drop to eight dollars,\" Arjun told his mother. " +
        N(5) + "She was labeling jars of the dark buckwheat honey that only their oldest hives produced, and she did not look up. " +
        N(6) + "\"Then what do we tell the bees?\" she said. " +
        N(7) + "It was the kind of answer that sounded wise and solved nothing, and Arjun spent the afternoon resenting it. " +
        N(8) + "Near closing, the woman from the new stall crossed the aisle with an empty jar in her hand. " +
        N(9) + "Her hives had swarmed in May, she admitted, and half her stock was honey she had bought from a wholesaler two counties over. " +
        N(10) + "She wanted to know how the Mehtas kept a hive from swarming, and whether they would sell her a frame of brood to rebuild. " +
        N(11) + "Arjun's mother capped the buckwheat jar, set it in the woman's hands, and pulled a stool from under the table. " +
        N(12) + "\"Sit,\" she said. " +
        N(13) + "\"It takes longer than eight dollars to explain.\"" +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is most clearly developed by the rivalry between the honey stalls?",
          choices: [
            { letter: "A", text: "Small businesses survive only by cutting their prices." },
            { letter: "B", text: "Customers can always tell real products from fake ones." },
            { letter: "C", text: "Young sellers should not compete with experienced ones." },
            { letter: "D", text: "Rivals may gain more by sharing knowledge than by competing." }
          ],
          correct: "D"
        },
        {
          id: "water",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 2, comparing the customers to rainwater finding the low side of a parking lot suggests that they move —",
          choices: [
            { letter: "A", text: "slowly, because the market is crowded" },
            { letter: "B", text: "naturally toward whatever seems easiest" },
            { letter: "C", text: "angrily away from the Mehtas' table" },
            { letter: "D", text: "carefully, comparing every jar's label" }
          ],
          correct: "B"
        },
        {
          id: "fake",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The narrator's remark in sentence 1, as if someone had accused the Mehtas of selling the fake kind, creates a tone that is —",
          choices: [
            { letter: "A", text: "wry and slightly defensive" },
            { letter: "B", text: "cheerful and welcoming" },
            { letter: "C", text: "fearful and urgent" },
            { letter: "D", text: "neutral and factual" }
          ],
          correct: "A"
        },
        {
          id: "resent",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentence 7 reveals that Arjun —",
          choices: [
            { letter: "A", text: "agrees with his mother but is too proud to say so" },
            { letter: "B", text: "plans to lower the prices without asking her" },
            { letter: "C", text: "finds his mother's reply frustrating, not helpful" },
            { letter: "D", text: "worries that the bees will stop making honey" }
          ],
          correct: "C"
        },
        {
          id: "shift",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How do sentences 8–13 change the conflict introduced in sentences 1–4?",
          choices: [
            { letter: "A", text: "They show the Mehtas winning the contest over prices." },
            { letter: "B", text: "They turn a contest over prices into cooperation." },
            { letter: "C", text: "They reveal that the new stall is closing for good." },
            { letter: "D", text: "They prove that Arjun's plan to cut prices was right." }
          ],
          correct: "B"
        },
        {
          id: "explain",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 13, the phrase longer than eight dollars to explain most nearly means that —",
          choices: [
            { letter: "A", text: "the mother plans to charge the woman for lessons" },
            { letter: "B", text: "the new stall's honey is priced far too high" },
            { letter: "C", text: "the mother is annoyed at being asked for help" },
            { letter: "D", text: "her knowledge is worth more than any discount" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── POETRY AND DRAMA ───────────────────────── */
    {
      id: "g11-rl-c95-ebb",
      family: "G11",
      title: "Pool at Ebb",
      kind: "Poetry · 11.RL",
      blurb: "A poem about a tide pool that the sea leaves twice a day, and the creatures that hold on.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Twice a day the sea forgets this hollow<br>" +
        L(2) + "and leaves it like a sentence half begun:<br>" +
        L(3) + "a bowl of stone, a pocket of the ocean,<br>" +
        L(4) + "a window someone polished for the sun.<br>" +
        L(5) + "The anemone folds its green fingers in,<br>" +
        L(6) + "a fist that does not mean to fight, but keep;<br>" +
        L(7) + "the hermit crab drags its borrowed house<br>" +
        L(8) + "across a floor that is an inch from sleep.<br>" +
        L(9) + "Here everything is waiting, nothing idle:<br>" +
        L(10) + "the snail that grips, the barnacle that seals,<br>" +
        L(11) + "the limpet holding fast against the hours<br>" +
        L(12) + "as if the rock might listen to appeals.<br>" +
        L(13) + "And when the tide comes thundering back to claim it,<br>" +
        L(14) + "the pool does not drown. It opens. It is full." +
        "</p>",
      claims: [
        {
          id: "sentence",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 2, comparing the pool to a sentence half begun suggests that the pool is —",
          choices: [
            { letter: "A", text: "too shallow for any creature to live in" },
            { letter: "B", text: "incomplete until the sea returns to it" },
            { letter: "C", text: "a place where people come to write" },
            { letter: "D", text: "louder at low tide than at high tide" }
          ],
          correct: "B"
        },
        {
          id: "fist",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "The image in lines 5 and 6 of a fist that does not mean to fight, but keep emphasizes that the anemone —",
          choices: [
            { letter: "A", text: "attacks anything that enters the pool" },
            { letter: "B", text: "is dying now that the water is gone" },
            { letter: "C", text: "reaches out to catch the passing crab" },
            { letter: "D", text: "closes up to hold on to what it needs" }
          ],
          correct: "D"
        },
        {
          id: "borrowed",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 7, the word borrowed suggests that the hermit crab's shell —",
          choices: [
            { letter: "A", text: "first belonged to another creature" },
            { letter: "B", text: "must be returned when the tide comes" },
            { letter: "C", text: "is too heavy for the crab to move" },
            { letter: "D", text: "was given to it by the anemone" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the poem about the hollow at low tide develop?",
          choices: [
            { letter: "A", text: "The ocean is too violent for small creatures to survive." },
            { letter: "B", text: "People should leave tide pools alone during low tide." },
            { letter: "C", text: "Times of waiting can be full of quiet effort and endurance." },
            { letter: "D", text: "Every living thing eventually loses the place it calls home." }
          ],
          correct: "C"
        },
        {
          id: "idle",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "Line 9, Here everything is waiting, nothing idle, implies that the pool's creatures —",
          choices: [
            { letter: "A", text: "are working to survive even while they seem still" },
            { letter: "B", text: "have given up hope that the sea will come back" },
            { letter: "C", text: "are asleep until the water covers them again" },
            { letter: "D", text: "compete with one another for the remaining water" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "How do the three short sentences in line 14 shape the ending of the poem?",
          choices: [
            { letter: "A", text: "They speed up the poem to show the tide's danger." },
            { letter: "B", text: "They shift the poem to a new speaker and setting." },
            { letter: "C", text: "They slow the pace to show the tide brings fullness." },
            { letter: "D", text: "They repeat the opening lines to show nothing changed." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c95-marketlot",
      family: "G11",
      title: "Five A.M., Market Lot",
      kind: "Poetry · 11.RL",
      blurb: "A parking lot that turns into a farmers market for one morning, and what it holds afterward.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Before the vendors, there is only asphalt,<br>" +
        L(2) + "its painted lines like rulings on a page<br>" +
        L(3) + "that no one has decided how to fill.<br>" +
        L(4) + "Then trucks back in with the patience of old horses,<br>" +
        L(5) + "and tailgates drop open like a yawn,<br>" +
        L(6) + "and the lot begins to speak in crates.<br>" +
        L(7) + "Beets, still wearing the field on their shoulders.<br>" +
        L(8) + "Peaches that blush the way my aunt does when praised.<br>" +
        L(9) + "A table of jars that holds a summer<br>" +
        L(10) + "the way a letter holds a voice.<br>" +
        L(11) + "By eight the strangers come, with folded bills<br>" +
        L(12) + "and questions about soil and frost and rain,<br>" +
        L(13) + "and someone's child is handed a free plum<br>" +
        L(14) + "as if it were a secret.<br>" +
        L(15) + "By two the lines are only lines again.<br>" +
        L(16) + "I've stopped believing that the page is empty." +
        "</p>",
      claims: [
        {
          id: "rulings",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In lines 2 and 3, comparing the parking lines to rulings on a page presents the empty lot as —",
          choices: [
            { letter: "A", text: "a blank space waiting to be filled with meaning" },
            { letter: "B", text: "a set of strict rules the vendors must obey" },
            { letter: "C", text: "a school assignment the speaker dislikes" },
            { letter: "D", text: "a map showing where each truck should park" }
          ],
          correct: "A"
        },
        {
          id: "beets",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "Line 7, Beets, still wearing the field on their shoulders, uses an image that emphasizes —",
          choices: [
            { letter: "A", text: "how heavy the crates of beets are to lift" },
            { letter: "B", text: "that the beets are too dirty to be sold" },
            { letter: "C", text: "how recently the beets came out of the soil" },
            { letter: "D", text: "that the farmer is proud of his own strength" }
          ],
          correct: "C"
        },
        {
          id: "letter",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In lines 9 and 10, comparing the jars to a letter that holds a voice suggests that the preserved food —",
          choices: [
            { letter: "A", text: "is meant to be mailed to distant relatives" },
            { letter: "B", text: "has labels with long written descriptions" },
            { letter: "C", text: "will spoil if it is kept until winter" },
            { letter: "D", text: "carries something of the season it came from" }
          ],
          correct: "D"
        },
        {
          id: "plum",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Lines 13 and 14 imply that the vendor's gift of a plum is —",
          choices: [
            { letter: "A", text: "a trick to make the parents buy more fruit" },
            { letter: "B", text: "a small kindness offered without any fuss" },
            { letter: "C", text: "against the market's rules about free samples" },
            { letter: "D", text: "a reward for the child's good questions" }
          ],
          correct: "B"
        },
        {
          id: "lastline",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does line 16 change the meaning of line 15?",
          choices: [
            { letter: "A", text: "It shows the speaker is sad the market has to end." },
            { letter: "B", text: "It reveals the speaker plans to paint new lines." },
            { letter: "C", text: "It argues that the market should run every day." },
            { letter: "D", text: "It suggests the bare lot now holds what happened there." }
          ],
          correct: "D"
        },
        {
          id: "crates",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 6, the phrase the lot begins to speak in crates most nearly means that —",
          choices: [
            { letter: "A", text: "the vendors shout prices across the lot" },
            { letter: "B", text: "the crates are stamped with farm names" },
            { letter: "C", text: "arriving produce fills the space with life" },
            { letter: "D", text: "the trucks are loud as they unload" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c95-indexcards",
      family: "G11",
      title: "The Second Card",
      kind: "Drama · 11.RL",
      blurb: "A ninth grader who says he read the chapter, and a peer tutor with a stack of index cards.",
      level: 1,
      passage:
        "<p><em>The school library, late afternoon. MARISOL, a senior in the peer tutoring program, sits with a stack of index cards. OMARI, a ninth grader, drops into the chair across from her and does not take off his backpack.</em></p>" +
        "<p><strong>OMARI:</strong> " + N(1) + "I already read the chapter, so we can probably just stop early.</p>" +
        "<p><strong>MARISOL:</strong> " + N(2) + "Great. " + N(3) + "Then tell me what the fisherman does with the net at the end.</p>" +
        "<p><strong>OMARI:</strong> <em>(after a pause)</em> " + N(4) + "He fixes it.</p>" +
        "<p><strong>MARISOL:</strong> " + N(5) + "Does he?</p>" +
        "<p><strong>OMARI:</strong> " + N(6) + "Or he sells it. " + N(7) + "It's one of those.</p>" +
        "<p><strong>MARISOL:</strong> <em>(sliding a card across the table)</em> " + N(8) + "Here's the deal: I don't report anything to Mr. Kessler except whether you showed up. " + N(9) + "You showed up. " + N(10) + "So the next forty minutes are just for you.</p>" +
        "<p><strong>OMARI:</strong> " + N(11) + "What's on the card?</p>" +
        "<p><strong>MARISOL:</strong> " + N(12) + "The first page, in my handwriting. " + N(13) + "I copied it last night because the book's print is tiny, and I figured you'd hate it as much as I did freshman year.</p>" +
        "<p><strong>OMARI:</strong> <em>(reading, then looking up)</em> " + N(14) + "Wait, the net isn't even his.</p>" +
        "<p><strong>MARISOL:</strong> " + N(15) + "Nope. " + N(16) + "That's the whole story, actually.</p>" +
        "<p><strong>OMARI:</strong> <em>(finally sliding the backpack off his shoulders)</em> " + N(17) + "Okay. " + N(18) + "Give me the second card.</p>",
      claims: [
        {
          id: "guess",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Omari's answers in sentences 4–7 reveal that he —",
          choices: [
            { letter: "A", text: "remembers the chapter but wants to test Marisol" },
            { letter: "B", text: "disagrees with how the chapter ends" },
            { letter: "C", text: "has not actually read the chapter" },
            { letter: "D", text: "read a different book by mistake" }
          ],
          correct: "C"
        },
        {
          id: "doeshe",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Marisol's question in sentence 5, Does he?, is most likely meant to —",
          choices: [
            { letter: "A", text: "signal gently that she doubts his answer" },
            { letter: "B", text: "praise him for remembering the ending" },
            { letter: "C", text: "admit that she has forgotten the chapter" },
            { letter: "D", text: "warn him that she will tell his teacher" }
          ],
          correct: "A"
        },
        {
          id: "backpack",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Omari's backpack, mentioned in the opening stage direction and again before sentence 17, most clearly symbolizes —",
          choices: [
            { letter: "A", text: "the heavy load of homework he carries" },
            { letter: "B", text: "the gift he plans to give his tutor" },
            { letter: "C", text: "his worry about missing the late bus" },
            { letter: "D", text: "whether he is ready to leave or to stay" }
          ],
          correct: "D"
        },
        {
          id: "idea",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which idea does the tutoring scene most clearly develop?",
          choices: [
            { letter: "A", text: "Students should be graded on every tutoring session." },
            { letter: "B", text: "Removing pressure can make a student willing to try." },
            { letter: "C", text: "Older students rarely understand younger students." },
            { letter: "D", text: "Short books are easier to discuss than long ones." }
          ],
          correct: "B"
        },
        {
          id: "nope",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "Marisol's reply in sentences 15 and 16 creates a tone that is —",
          choices: [
            { letter: "A", text: "knowing and quietly pleased" },
            { letter: "B", text: "impatient and cold" },
            { letter: "C", text: "nervous and unsure" },
            { letter: "D", text: "sad and regretful" }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "How does the end of the scene differ from its beginning?",
          choices: [
            { letter: "A", text: "Marisol stops helping and lets Omari read alone." },
            { letter: "B", text: "Omari admits that he copied someone's notes." },
            { letter: "C", text: "Marisol decides to report Omari to Mr. Kessler." },
            { letter: "D", text: "Omari goes from wanting to leave to asking for more." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── INFORMATIONAL ───────────────────────── */
    {
      id: "g11-ri-c95-bleaching",
      family: "G11",
      title: "Why Coral Turns White",
      kind: "Informational · 11.RI",
      blurb: "A partnership inside coral tissue, the heat that breaks it, and how scientists watch for bleaching.",
      level: 2,
      passage:
        "<p>" + N(1) + "A coral reef looks like rock, but each branch or boulder is built by colonies of tiny animals called polyps, and most of their color comes from someone else. " +
        N(2) + "Inside the tissues of reef-building corals live single-celled algae, which use sunlight to make sugars and pass most of that food to their hosts. " +
        N(3) + "In return, the coral offers shelter and a steady supply of the nutrients the algae need. " +
        N(4) + "This partnership is the reason reefs can thrive in clear tropical water that is otherwise poor in food. " +
        N(5) + "It is also the reason reefs are so sensitive to heat. " +
        N(6) + "When seawater stays even one or two degrees Celsius above its usual summer peak for several weeks, the algae begin producing compounds that damage the coral's cells. " +
        N(7) + "The coral responds by expelling its partners, and without their pigments its tissue turns nearly transparent, revealing the white skeleton beneath. " +
        N(8) + "This is bleaching. " +
        N(9) + "A bleached coral is not dead; it is starving. " +
        N(10) + "If temperatures drop soon enough, algae can return and the colony may recover over months. " +
        N(11) + "If the heat lasts, the coral weakens, becomes vulnerable to disease, and may die, after which seaweed often covers the skeleton. " +
        N(12) + "Researchers now track bleaching by combining satellite measurements of sea surface temperature with surveys by divers, who record the condition of individual colonies along fixed lines. " +
        N(13) + "The satellites warn where heat is building; the divers confirm what the reef is actually experiencing." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the central idea of the passage about coral color?",
          choices: [
            { letter: "A", text: "Satellites have replaced divers in the study of coral reefs." },
            { letter: "B", text: "Heat can break coral's partnership with algae, causing bleaching." },
            { letter: "C", text: "Seaweed is the main threat to the health of tropical reefs." },
            { letter: "D", text: "Coral polyps are plants that make their own food from light." }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, what directly causes a coral to bleach?",
          choices: [
            { letter: "A", text: "Seaweed grows over the coral and blocks the light." },
            { letter: "B", text: "Divers damage the colony while recording its condition." },
            { letter: "C", text: "The water becomes too poor in food for the polyps." },
            { letter: "D", text: "It expels its algae after weeks of unusually warm water." }
          ],
          correct: "D"
        },
        {
          id: "short",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentences 8 and 9 are kept short mainly to —",
          choices: [
            { letter: "A", text: "name the process and correct a likely misunderstanding" },
            { letter: "B", text: "signal that the passage is about to change topics" },
            { letter: "C", text: "suggest that scientists still disagree about bleaching" },
            { letter: "D", text: "list the steps that divers follow during a survey" }
          ],
          correct: "A"
        },
        {
          id: "sequence",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author organizes sentences 6–11 mainly by —",
          choices: [
            { letter: "A", text: "comparing two kinds of coral that live on the same reef" },
            { letter: "B", text: "listing reasons people should protect reefs from harm" },
            { letter: "C", text: "tracing causes and effects that lead to two outcomes" },
            { letter: "D", text: "describing the history of bleaching research by decade" }
          ],
          correct: "C"
        },
        {
          id: "partnership",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "argue that tropical water should be kept clearer" },
            { letter: "B", text: "show that algae harm coral in most conditions" },
            { letter: "C", text: "introduce the satellite methods described later" },
            { letter: "D", text: "explain why the partnership matters to reef survival" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward pairing satellites with divers in sentences 12 and 13 is best described as —",
          choices: [
            { letter: "A", text: "approving, because each method covers the other's gap" },
            { letter: "B", text: "doubtful, because satellites often give false warnings" },
            { letter: "C", text: "impatient, because the research moves too slowly" },
            { letter: "D", text: "neutral, because the author gives no view of the methods" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-c95-intertidal",
      family: "G11",
      title: "Between the Tides",
      kind: "Informational · 11.RI",
      blurb: "The bands of a rocky shore, the creatures that live in each, and why tide pools are not easy homes.",
      level: 1,
      passage:
        "<p>" + N(1) + "The rocky shore between the high-tide line and the low-tide line is called the intertidal zone, and it may be one of the hardest places on Earth to make a living. " +
        N(2) + "Twice a day, most of it is covered by seawater and then exposed to air. " +
        N(3) + "Creatures that live there must survive pounding waves, drying wind, hot sun, and sudden changes in temperature and saltiness. " +
        N(4) + "Scientists usually divide the zone into bands. " +
        N(5) + "The highest band, splashed only by spray and the biggest tides, is home to a few tough species such as periwinkle snails and acorn barnacles. " +
        N(6) + "Barnacles survive dry hours by closing four small plates over their bodies, sealing in a drop of seawater. " +
        N(7) + "Lower down, in the middle band, mussels crowd together in dense beds, and their closeness keeps each one from drying out. " +
        N(8) + "The lowest band is uncovered only during the lowest tides, so it holds the greatest variety of life, including sea stars, anemones, and urchins. " +
        N(9) + "Tide pools, the hollows that stay full of water when the sea pulls back, offer shelter in every band. " +
        N(10) + "Even they are not easy homes, though. " +
        N(11) + "On a sunny afternoon, a small pool can warm by several degrees, and a hard rain can make its water less salty within an hour. " +
        N(12) + "For visitors, the lesson is simple: every creature in a tide pool is already working hard to survive, so look closely, touch gently if at all, and leave every rock where you found it." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main idea of the passage about the intertidal zone?",
          choices: [
            { letter: "A", text: "Shore creatures have ways to survive harsh, shifting conditions." },
            { letter: "B", text: "The lowest band of the shore is the only one with any life." },
            { letter: "C", text: "Tide pools are the safest places for sea creatures to live." },
            { letter: "D", text: "Visitors cause most of the harm done to rocky shores." }
          ],
          correct: "A"
        },
        {
          id: "barnacles",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, how do barnacles survive when the tide is out?",
          choices: [
            { letter: "A", text: "They crowd into dense beds with mussels." },
            { letter: "B", text: "They move down to the lowest band of rock." },
            { letter: "C", text: "They close plates that seal in seawater." },
            { letter: "D", text: "They hide in tide pools until it returns." }
          ],
          correct: "C"
        },
        {
          id: "bands",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author organizes sentences 4–8 mainly by —",
          choices: [
            { letter: "A", text: "comparing two shores in different parts of the world" },
            { letter: "B", text: "moving from the highest band of the shore to the lowest" },
            { letter: "C", text: "listing the dangers of the shore in order of severity" },
            { letter: "D", text: "telling how scientists first discovered the bands" }
          ],
          correct: "B"
        },
        {
          id: "though",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 10 serves mainly to —",
          choices: [
            { letter: "A", text: "summarize the creatures found in each band" },
            { letter: "B", text: "introduce a rule that visitors must follow" },
            { letter: "C", text: "suggest that tide pools are disappearing" },
            { letter: "D", text: "turn from the pools' shelter to their dangers" }
          ],
          correct: "D"
        },
        {
          id: "quickly",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence gives the clearest evidence that conditions in a tide pool can change quickly?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The final sentence of the passage is addressed mainly to —",
          choices: [
            { letter: "A", text: "scientists who study barnacles" },
            { letter: "B", text: "people exploring the shore" },
            { letter: "C", text: "fishers who work near the rocks" },
            { letter: "D", text: "officials who manage the coast" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-ri-c95-tokens",
      family: "G11",
      title: "Wooden Dollars",
      kind: "Informational · 11.RI",
      blurb: "How a small-town farmers market used wooden tokens to reach the neighbors it was built for.",
      level: 2,
      passage:
        "<p>" + N(1) + "When the Riverside Farmers Market in the town of Ashby opened, it had nine vendors, a borrowed tent, and a problem nobody had planned for. " +
        N(2) + "Many residents who lived within walking distance could not use the market at all, because the vendors accepted only cash and many nearby shoppers paid for groceries with electronic benefit cards. " +
        N(3) + "The market's volunteer board found a simple fix. " +
        N(4) + "At an information table, shoppers swiped their cards once and received wooden tokens, each worth one dollar, which they could spend at any stall. " +
        N(5) + "Vendors turned in their tokens at the end of the day and were paid by check within a week. " +
        N(6) + "Two years later, a local credit union offered to match the first ten dollars of every token purchase, so a shopper who spent ten dollars could take home twenty dollars of produce. " +
        N(7) + "The effect was immediate. " +
        N(8) + "Token sales tripled during the first summer of the match, and the share of shoppers from the neighborhoods closest to the market rose from about one in ten to nearly one in three. " +
        N(9) + "Vendors noticed too: several farmers reported that token shoppers bought more fresh vegetables than the market's average customer. " +
        N(10) + "The program is not free to run. " +
        N(11) + "Volunteers spend hours each week counting tokens, and the credit union must renew its support every year. " +
        N(12) + "Still, the board's annual report argues that the tokens solved the problem the market was founded to fix, by bringing fresh food to the people who live closest to it." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about the Riverside market?",
          choices: [
            { letter: "A", text: "Credit unions are the main supporters of farmers markets." },
            { letter: "B", text: "Most farmers prefer cash to any other form of payment." },
            { letter: "C", text: "Tokens let nearby residents without cash use the market." },
            { letter: "D", text: "Volunteer boards rarely solve problems in small towns." }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "Which sentence provides the strongest evidence that the matching offer increased participation?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches the structure of the passage about the tokens?",
          choices: [
            { letter: "A", text: "a list of vendors and the crops each one sells" },
            { letter: "B", text: "two opposing views followed by the author's verdict" },
            { letter: "C", text: "a timeline of the market's growth decade by decade" },
            { letter: "D", text: "a problem, its solution, the results, and the costs" }
          ],
          correct: "D"
        },
        {
          id: "immediate",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 7 functions mainly to —",
          choices: [
            { letter: "A", text: "introduce the results of the matching offer" },
            { letter: "B", text: "explain how tokens were exchanged for checks" },
            { letter: "C", text: "warn that the program may soon lose funding" },
            { letter: "D", text: "describe the market's very first season" }
          ],
          correct: "A"
        },
        {
          id: "costs",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes sentences 10 and 11 mainly to —",
          choices: [
            { letter: "A", text: "argue that the token program should be ended" },
            { letter: "B", text: "show that vendors dislike the token system" },
            { letter: "C", text: "suggest that the board exaggerated its results" },
            { letter: "D", text: "note the work and support the program needs" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward the token program is best described as —",
          choices: [
            { letter: "A", text: "critical, because it costs volunteers time" },
            { letter: "B", text: "uncertain, because the data are incomplete" },
            { letter: "C", text: "favorable, while noting its real limits" },
            { letter: "D", text: "indifferent, because it is only a local story" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c95-twolessons",
      family: "G11",
      title: "Two Lessons at One Table",
      kind: "Informational · 11.RI",
      blurb: "Why tutoring programs may teach the tutors as much as the students they help.",
      level: 3,
      passage:
        "<p>" + N(1) + "Programs that pair older students with younger ones are usually judged by a single question: did the younger students improve? " +
        N(2) + "That question is reasonable, but it may hide half of what such programs accomplish. " +
        N(3) + "Education researchers have long described a pattern sometimes called the protege effect, in which people who prepare to teach material learn it more deeply than people who prepare only to be tested on it. " +
        N(4) + "In one typical laboratory study, two groups of students read the same passage; one group was told it would take a quiz, and the other was told it would explain the passage to a classmate. " +
        N(5) + "The second group, which never actually taught anyone, still recalled more and organized the information better. " +
        N(6) + "The likely reason is that explaining forces a learner to find the structure of an idea instead of memorizing its surface. " +
        N(7) + "A tutor cannot simply repeat a definition when a younger student looks confused; the tutor has to find another route to the same point. " +
        N(8) + "Coordinators of one high school's after-school program noticed a version of this effect without designing an experiment: several tutors who had struggled in algebra the year before reported that explaining equations to sixth graders had made the subject finally make sense. " +
        N(9) + "Reports like these cannot prove a cause, since students who volunteer to tutor may already be unusually motivated. " +
        N(10) + "Still, they suggest that schools measuring only the younger students' scores are reporting an incomplete result. " +
        N(11) + "A tutoring program, in other words, may be two lessons running at the same table." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the central idea of the passage about tutoring programs?",
          choices: [
            { letter: "A", text: "Tutoring may help tutors as well, which usual measures miss." },
            { letter: "B", text: "Younger students learn best from tutors who once struggled." },
            { letter: "C", text: "Laboratory studies are more reliable than school programs." },
            { letter: "D", text: "Schools should stop measuring the scores of younger students." }
          ],
          correct: "A"
        },
        {
          id: "study",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to sentences 4 and 5, what was notable about the second group in the study?",
          choices: [
            { letter: "A", text: "They taught their classmates better than expected." },
            { letter: "B", text: "They scored lower on the quiz than the first group." },
            { letter: "C", text: "They learned more even though they never taught." },
            { letter: "D", text: "They read a harder passage than the first group." }
          ],
          correct: "C"
        },
        {
          id: "reports",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "How does the author treat the tutors' reports in sentences 8–10?",
          choices: [
            { letter: "A", text: "as proof that tutoring raises algebra grades" },
            { letter: "B", text: "as suggestive, though not proof of a cause" },
            { letter: "C", text: "as unreliable stories that should be ignored" },
            { letter: "D", text: "as the strongest evidence in the passage" }
          ],
          correct: "B"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author develops the passage mainly by —",
          choices: [
            { letter: "A", text: "telling one tutor's story from start to finish" },
            { letter: "B", text: "comparing tutoring programs at several schools" },
            { letter: "C", text: "listing the rules of a typical tutoring program" },
            { letter: "D", text: "questioning a usual measure, then widening it" }
          ],
          correct: "D"
        },
        {
          id: "table",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In sentence 11, the phrase two lessons running at the same table mainly emphasizes that —",
          choices: [
            { letter: "A", text: "tutors often teach two students at once" },
            { letter: "B", text: "sessions should be twice as long as usual" },
            { letter: "C", text: "tutor and student both learn in a session" },
            { letter: "D", text: "schools lack enough tables for tutoring" }
          ],
          correct: "C"
        },
        {
          id: "route",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "warn that younger students are easily confused" },
            { letter: "B", text: "show that definitions are useless in tutoring" },
            { letter: "C", text: "describe the training tutors receive each year" },
            { letter: "D", text: "illustrate how explaining deepens understanding" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-ri-c95-spawning",
      family: "G11",
      title: "Snow Falling Upward",
      kind: "Informational · 11.RI",
      blurb: "The few nights a year when corals spawn together, and how scientists use them to rebuild reefs.",
      level: 2,
      passage:
        "<p>" + N(1) + "On a few nights each year, often several days after a full moon in late spring or summer, many corals on a reef release their eggs and sperm into the water within the same hour. " +
        N(2) + "Divers who have seen it describe the water filling with pink and white beads rising slowly toward the surface, like snow falling in reverse. " +
        N(3) + "The timing is not luck. " +
        N(4) + "Corals cannot move to find one another, so a colony's chance of reproducing depends on releasing its bundles at the same moment as its neighbors. " +
        N(5) + "Researchers believe corals combine several signals to set this schedule: the warming of the water over the season, the length of the day, the brightness of the moon, and the darkness that follows sunset. " +
        N(6) + "When the bundles reach the surface, they break apart, and eggs from one colony can be fertilized by sperm from another. " +
        N(7) + "The resulting larvae drift for days or weeks before settling on hard surfaces, where each one may start a new colony. " +
        N(8) + "Only a tiny fraction survive. " +
        N(9) + "Mass spawning has also become a tool for restoration. " +
        N(10) + "Some reef scientists now collect bundles on spawning nights, raise the larvae in tanks where they are safe from predators, and release young corals onto damaged reefs. " +
        N(11) + "The work depends on predicting the right night, so teams watch water temperatures and the lunar calendar for months ahead. " +
        N(12) + "If they guess wrong, they may wait a full year for the next chance." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage on coral spawning?",
          choices: [
            { letter: "A", text: "Most coral larvae drift too far to survive on any reef." },
            { letter: "B", text: "Divers often mistake coral spawning for falling snow." },
            { letter: "C", text: "The moon is the only signal that corals use to spawn." },
            { letter: "D", text: "Corals spawn on timed nights that also aid restoration." }
          ],
          correct: "D"
        },
        {
          id: "snow",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In sentence 2, comparing the spawning to snow falling in reverse helps the reader understand that —",
          choices: [
            { letter: "A", text: "spawning happens only in cold water" },
            { letter: "B", text: "countless small bundles rise upward" },
            { letter: "C", text: "the bundles sink to the reef floor" },
            { letter: "D", text: "divers find the event hard to see" }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, corals release their bundles at the same time because —",
          choices: [
            { letter: "A", text: "they cannot move to find one another" },
            { letter: "B", text: "the water is warmest at that hour" },
            { letter: "C", text: "predators are asleep during full moons" },
            { letter: "D", text: "scientists collect the bundles that night" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 9–12?",
          choices: [
            { letter: "A", text: "by comparing spawning on two different reefs" },
            { letter: "B", text: "by listing the signals that set the spawning date" },
            { letter: "C", text: "by presenting a use of spawning and its main difficulty" },
            { letter: "D", text: "by describing a diver's first night on the reef" }
          ],
          correct: "C"
        },
        {
          id: "fraction",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 8 is included mainly to —",
          choices: [
            { letter: "A", text: "suggest that restoration work is not worth trying" },
            { letter: "B", text: "explain why spawning happens only after a full moon" },
            { letter: "C", text: "show why raising larvae safely in tanks is useful" },
            { letter: "D", text: "describe how larvae choose where to settle" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward coral spawning is best described as —",
          choices: [
            { letter: "A", text: "fascinated and informative" },
            { letter: "B", text: "alarmed and urgent" },
            { letter: "C", text: "skeptical and dismissive" },
            { letter: "D", text: "bored and detached" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-c95-gullpoint",
      family: "G11",
      title: "Tide Pool Visitor Guide",
      kind: "Functional text · 11.RI",
      blurb: "A marine reserve's rules for when to visit, where to step, how to touch and what to leave.",
      level: 1,
      passage:
        "<p><strong>Gull Point Marine Reserve: Tide Pool Visitor Guide</strong></p>" +
        "<p><strong>When to Visit.</strong> " + N(1) + "The best viewing is during the two hours before and after low tide. " +
        N(2) + "Tide tables are posted at the trailhead kiosk and updated every Monday. " +
        N(3) + "Never visit during a storm warning, when waves can reach the outer rocks without notice.</p>" +
        "<p><strong>Where to Walk.</strong> " + N(4) + "Step on bare rock or sand whenever you can. " +
        N(5) + "Mussel beds, seaweed, and barnacles may look sturdy, but a single footstep can crush dozens of animals. " +
        N(6) + "Stay out of the roped area near the north point from March through July, when black oystercatchers are nesting.</p>" +
        "<p><strong>How to Touch.</strong> " + N(7) + "If you touch an animal, use one wet finger and touch it gently, as if you were testing a ripe peach. " +
        N(8) + "Do not pull animals off rocks; sea stars and limpets can be fatally injured when they are pried loose. " +
        N(9) + "If you turn over a rock to look underneath, return it to the same position right away.</p>" +
        "<p><strong>What to Leave.</strong> " + N(10) + "Collecting any living thing, shell, or rock is prohibited in the reserve and can result in a fine of up to $500. " +
        N(11) + "Empty shells may become homes for hermit crabs, so they stay too.</p>" +
        "<p><strong>Questions?</strong> " + N(12) + "Volunteer naturalists in green vests are on the shore during every weekend low tide. " +
        N(13) + "They can help you identify animals and answer questions about the reserve.</p>",
      claims: [
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "How do the bold headings organize the Gull Point guide?",
          choices: [
            { letter: "A", text: "They rank the rules from least to most important." },
            { letter: "B", text: "They group rules about timing, walking, touching, and taking." },
            { letter: "C", text: "They separate rules for adults from rules for children." },
            { letter: "D", text: "They list the animals a visitor will see in each area." }
          ],
          correct: "B"
        },
        {
          id: "mussels",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guide, visitors should avoid stepping on mussel beds because —",
          choices: [
            { letter: "A", text: "a single step can crush many animals" },
            { letter: "B", text: "the beds are slippery and cause falls" },
            { letter: "C", text: "birds nest there from March to July" },
            { letter: "D", text: "naturalists use them for counting" }
          ],
          correct: "A"
        },
        {
          id: "peach",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In sentence 7, comparing a touch to testing a ripe peach helps visitors understand that they should —",
          choices: [
            { letter: "A", text: "touch only animals that are soft" },
            { letter: "B", text: "bring food to feed the animals" },
            { letter: "C", text: "wash their hands after touching" },
            { letter: "D", text: "press lightly so they cause no harm" }
          ],
          correct: "D"
        },
        {
          id: "fine",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence makes clear that the reserve's rule against collecting will be enforced?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "readers",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The Gull Point guide is written mainly for —",
          choices: [
            { letter: "A", text: "scientists running a survey" },
            { letter: "B", text: "volunteer naturalists in training" },
            { letter: "C", text: "fishers using the north point" },
            { letter: "D", text: "members of the public visiting" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The primary purpose of the visitor guide is to —",
          choices: [
            { letter: "A", text: "help visitors enjoy the pools without harming them" },
            { letter: "B", text: "explain how tides are measured at the reserve" },
            { letter: "C", text: "recruit volunteers to wear green vests" },
            { letter: "D", text: "describe the nesting habits of oystercatchers" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-c95-servicehours",
      family: "G11",
      title: "Count the Tutoring Hours",
      kind: "Argument · 11.RI",
      blurb: "A senior argues that peer tutoring should count toward the school's service requirement.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every senior at our school must complete forty hours of community service before graduation, and the list of approved activities is long: park cleanups, food drives, animal shelter shifts, hospital gift shop volunteering. " +
        N(2) + "Missing from that list is the one service many of us already perform every week, inside this building, without credit. " +
        N(3) + "Peer tutors in the after-school program spend two afternoons a week helping middle schoolers with reading and math. " +
        N(4) + "Last year, the program's sign-in sheets show, thirty-one tutors logged more than nine hundred hours. " +
        N(5) + "The administration's position, as explained in the student handbook, is that service must take place \"beyond the school community.\" " +
        N(6) + "That rule makes sense for activities like student council, which mainly benefit the people doing them. " +
        N(7) + "Tutoring is different. " +
        N(8) + "The middle schoolers we work with are not our classmates; they come by bus from two other schools because their families asked for extra help. " +
        N(9) + "Some critics worry that counting tutoring would let students fill their hours without ever leaving campus. " +
        N(10) + "That concern is fair, but it could be solved with a cap, such as allowing tutoring to cover no more than half of the forty hours. " +
        N(11) + "The goal of the service requirement is to teach students that their time can meet a real need. " +
        N(12) + "A sixth grader who finally finishes a chapter book on his own is a real need met, whether or not it happened on the far side of the parking lot." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement best expresses the writer's central claim about tutoring?",
          choices: [
            { letter: "A", text: "Seniors should not be required to do any service." },
            { letter: "B", text: "Tutoring should count toward service, with a limit." },
            { letter: "C", text: "Student council should be removed from the list." },
            { letter: "D", text: "Middle schoolers should tutor one another instead." }
          ],
          correct: "B"
        },
        {
          id: "beyond",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence provides the strongest evidence that tutoring serves people beyond the school community?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "critics",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The writer's attitude toward the critics mentioned in sentence 9 is best described as —",
          choices: [
            { letter: "A", text: "respectful but unconvinced" },
            { letter: "B", text: "angry and dismissive" },
            { letter: "C", text: "fully persuaded by them" },
            { letter: "D", text: "confused about their point" }
          ],
          correct: "A"
        },
        {
          id: "objection",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the writer organize sentences 9 and 10?",
          choices: [
            { letter: "A", text: "by listing activities that already count as service" },
            { letter: "B", text: "by telling a story about one tutor's afternoon" },
            { letter: "C", text: "by quoting the handbook and then praising it" },
            { letter: "D", text: "by stating an objection and offering a remedy" }
          ],
          correct: "D"
        },
        {
          id: "council",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The writer mentions student council in sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "show that the rule fits some activities but not tutoring" },
            { letter: "B", text: "argue that student council should earn service hours" },
            { letter: "C", text: "suggest that tutors also serve on student council" },
            { letter: "D", text: "criticize student council for wasting school time" }
          ],
          correct: "A"
        },
        {
          id: "parkinglot",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 12, the phrase the far side of the parking lot mainly functions to —",
          choices: [
            { letter: "A", text: "complain that the bus stop is too far away" },
            { letter: "B", text: "point out where the tutoring room is located" },
            { letter: "C", text: "admit that tutoring rarely happens off campus" },
            { letter: "D", text: "suggest that location matters less than impact" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── VOCABULARY ───────────────────────── */
    {
      id: "g11-rv-c95-nursery",
      family: "G11",
      title: "The Coral Nursery",
      kind: "Vocabulary · 11.RV",
      blurb: "Volunteers grow coral on underwater frames and replant it on a damaged reef.",
      level: 1,
      passage:
        "<p>" + N(1) + "Off the coast of a small island, a team of volunteers tends an underwater nursery that looks, at first glance, like a forest of plastic trees. " +
        N(2) + "Each tree is a frame of white pipe anchored to the sand, and from its branches hang dozens of small pieces of living coral. " +
        N(3) + "Every piece began as a <strong>fragment</strong>, a finger-length bit snapped from a healthy colony nearby, and each is fastened to its branch with a thin fishing line, or <strong>tether</strong>, that keeps it from washing away in a storm. " +
        N(4) + "Hanging in open water, the fragments grow faster than they would on the crowded seafloor, where they would compete with seaweed for light. " +
        N(5) + "The work is <strong>meticulous</strong>; divers scrub algae from every branch with toothbrushes, measure each piece, and record its length on a waterproof chart, a process that can take an entire morning for one tree. " +
        N(6) + "After about a year, the largest pieces are cut free and planted on a damaged section of reef, where the team hopes they will <strong>replenish</strong> what storms and heat have taken. " +
        N(7) + "Not every transplant survives. " +
        N(8) + "Some are eaten by fish, and some bleach during a hot summer. " +
        N(9) + "But the species chosen for the nursery are known to be <strong>resilient</strong>, able to recover from injury and regrow broken branches within months. " +
        N(10) + "One diver compares the project to refilling a bathtub with a teaspoon. " +
        N(11) + "It is slow, she admits, but a teaspoon that never stops is not nothing." +
        "</p>",
      claims: [
        {
          id: "fragment",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the phrase that follows the comma shows that a fragment is —",
          choices: [
            { letter: "A", text: "a small piece broken from something larger" },
            { letter: "B", text: "a young coral grown from a single egg" },
            { letter: "C", text: "a tool divers use to clean the frames" },
            { letter: "D", text: "a section of reef damaged by storms" }
          ],
          correct: "A"
        },
        {
          id: "tether",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which phrase from sentence 3 best helps the reader understand the meaning of tether?",
          choices: [
            { letter: "A", text: "every piece began as a fragment" },
            { letter: "B", text: "snapped from a healthy colony nearby" },
            { letter: "C", text: "keeps it from washing away in a storm" },
            { letter: "D", text: "a finger-length bit snapped" }
          ],
          correct: "C"
        },
        {
          id: "meticulous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "As used in sentence 5, the word meticulous most nearly means —",
          choices: [
            { letter: "A", text: "quick and casual" },
            { letter: "B", text: "careful and precise" },
            { letter: "C", text: "noisy and messy" },
            { letter: "D", text: "risky and dangerous" }
          ],
          correct: "B"
        },
        {
          id: "replenish",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word replenish in sentence 6 begins with the prefix re-, as do rebuild and refill. In all three words, re- signals —",
          choices: [
            { letter: "A", text: "doing something for the first time" },
            { letter: "B", text: "doing something halfway" },
            { letter: "C", text: "undoing something already done" },
            { letter: "D", text: "restoring or doing something again" }
          ],
          correct: "D"
        },
        {
          id: "resilient",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word resilient in sentence 9 comes from a Latin root meaning to leap back. This root fits the passage because resilient corals —",
          choices: [
            { letter: "A", text: "jump from one frame to another" },
            { letter: "B", text: "bounce back after being damaged" },
            { letter: "C", text: "return to the island every year" },
            { letter: "D", text: "spring up only in open water" }
          ],
          correct: "B"
        },
        {
          id: "teaspoon",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 11, the diver's remark that a teaspoon that never stops is not nothing suggests she sees the project as —",
          choices: [
            { letter: "A", text: "too slow to be worth the effort" },
            { letter: "B", text: "nearly finished after one year" },
            { letter: "C", text: "a waste of the volunteers' time" },
            { letter: "D", text: "slow but meaningful if it continues" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rv-c95-readingpartners",
      family: "G11",
      title: "What Mrs. Achebe Teaches",
      kind: "Vocabulary · 11.RV",
      blurb: "A tutoring coordinator's lessons for new volunteers, from rapport to autonomy.",
      level: 2,
      passage:
        "<p>" + N(1) + "New tutors in the Westbrook Reading Partners program spend their first session not with a student but with the coordinator, Mrs. Achebe, who has trained volunteers for nine years. " +
        N(2) + "Her first lesson is that a tutor's knowledge matters less than the <strong>rapport</strong> between tutor and student, the easy trust that lets a nervous reader admit what she does not understand. " +
        N(3) + "Her second is to <strong>scaffold</strong> each task: offer enough support for a student to succeed, then remove it piece by piece, the way builders take down the frame around a finished wall. " +
        N(4) + "She warns tutors against sounding <strong>condescending</strong>; a student who hears \"This one's easy\" and then struggles feels not encouraged but small. " +
        N(5) + "Progress, she tells them, is usually <strong>incremental</strong>. " +
        N(6) + "A student might read one more word per minute this week than last, a gain that looks tiny on a single chart but large across a semester. " +
        N(7) + "The tutors who succeed are rarely the most brilliant ones. " +
        N(8) + "They are the <strong>diligent</strong> ones, who show up every Thursday, remember which book the student liked, and prepare for each session as if it mattered, because it does. " +
        N(9) + "The goal, in the end, is the student's <strong>autonomy</strong>. " +
        N(10) + "\"If I've done my job,\" Mrs. Achebe says, \"by June my readers will not need me, and they will hardly remember that they ever did.\"" +
        "</p>",
      claims: [
        {
          id: "rapport",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the phrase after the comma shows that rapport means —",
          choices: [
            { letter: "A", text: "a report on a student's progress" },
            { letter: "B", text: "a test given at the first session" },
            { letter: "C", text: "a rule that tutors must follow" },
            { letter: "D", text: "a relationship of trust and ease" }
          ],
          correct: "D"
        },
        {
          id: "scaffold",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The comparison to builders in sentence 3 helps show that to scaffold a task is to —",
          choices: [
            { letter: "A", text: "make the task harder each week" },
            { letter: "B", text: "give support that is slowly removed" },
            { letter: "C", text: "build a new lesson from scratch" },
            { letter: "D", text: "let the student work with no help" }
          ],
          correct: "B"
        },
        {
          id: "condescending",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Based on sentence 4, a tutor who sounds condescending is one who —",
          choices: [
            { letter: "A", text: "talks down to the student" },
            { letter: "B", text: "speaks too quietly to hear" },
            { letter: "C", text: "praises every right answer" },
            { letter: "D", text: "explains too many details" }
          ],
          correct: "A"
        },
        {
          id: "incremental",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word incremental in sentence 5 belongs to the same word family as increment and increase. Together with sentence 6, this suggests that incremental progress —",
          choices: [
            { letter: "A", text: "happens all at once near the end" },
            { letter: "B", text: "is measured only by the coordinator" },
            { letter: "C", text: "comes in small, steady additions" },
            { letter: "D", text: "disappears over a long semester" }
          ],
          correct: "C"
        },
        {
          id: "diligent",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "In sentence 8, the word diligent carries a connotation that is —",
          choices: [
            { letter: "A", text: "admiring of steady, careful effort" },
            { letter: "B", text: "critical of tutors who work too hard" },
            { letter: "C", text: "neutral, simply describing a schedule" },
            { letter: "D", text: "doubtful about tutors' real ability" }
          ],
          correct: "A"
        },
        {
          id: "autonomy",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word autonomy in sentence 9 combines Greek parts meaning self and law. Mrs. Achebe's words in sentence 10 confirm that autonomy refers to —",
          choices: [
            { letter: "A", text: "a reader's memory of a tutor" },
            { letter: "B", text: "the rules of a tutoring program" },
            { letter: "C", text: "a tutor's years of experience" },
            { letter: "D", text: "the ability to manage on one's own" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rv-c95-callemayor",
      family: "G11",
      title: "The Thursday Town",
      kind: "Vocabulary · 11.RV",
      blurb: "An evening street market that appears and vanishes each week, and the shoppers who judge it.",
      level: 3,
      passage:
        "<p>" + N(1) + "The Thursday market on Calle Mayor is an <strong>ephemeral</strong> town: it appears at three in the afternoon, when the first canopies snap open over the closed-off street, and by nine it has vanished so completely that only a few crushed cherries on the pavement prove it existed. " +
        N(2) + "In between, it is <strong>convivial</strong> in a way the supermarket across the plaza never manages; vendors call to regulars by name, strangers trade recipes in the line for peaches, and a fiddler near the fountain plays requests for anyone who drops a coin. " +
        N(3) + "The shoppers are <strong>discerning</strong>. " +
        N(4) + "They press avocados with a practiced thumb, ask which field the beans came from, and walk right past a stall whose tomatoes look perfect but smell of nothing. " +
        N(5) + "Newer vendors receive only a <strong>provisional</strong> permit for their first season, and the market committee decides in October whether to make it permanent. " +
        N(6) + "The committee's standards can seem strict, but regulars defend them. " +
        N(7) + "To them, a bright banner or a free sample is <strong>superfluous</strong> if the fruit itself is ordinary, because the produce is supposed to make the argument. " +
        N(8) + "Some vendors have been here so long that they seem <strong>perennial</strong>, returning every season like the lavender along the plaza wall. " +
        N(9) + "One grower, Senora Ibarra, has sold strawberries from the same corner for twenty-two years. " +
        N(10) + "When asked her secret, she shrugs. " +
        N(11) + "\"Grow what tastes good,\" she says, \"and come back every Thursday.\"" +
        "</p>",
      claims: [
        {
          id: "ephemeral",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, the details after the colon show that ephemeral means —",
          choices: [
            { letter: "A", text: "crowded with visitors" },
            { letter: "B", text: "found only in old towns" },
            { letter: "C", text: "lasting a short time" },
            { letter: "D", text: "noisy and confusing" }
          ],
          correct: "C"
        },
        {
          id: "convivial",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word convivial suggests that the market's mood is —",
          choices: [
            { letter: "A", text: "friendly and lively" },
            { letter: "B", text: "tense and competitive" },
            { letter: "C", text: "quiet and orderly" },
            { letter: "D", text: "formal and polite" }
          ],
          correct: "A"
        },
        {
          id: "discerning",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which detail from sentence 4 best clarifies the meaning of discerning?",
          choices: [
            { letter: "A", text: "the stall where the beans are sold" },
            { letter: "B", text: "the line of shoppers for peaches" },
            { letter: "C", text: "the price of the perfect tomatoes" },
            { letter: "D", text: "passing tomatoes that smell of nothing" }
          ],
          correct: "D"
        },
        {
          id: "superfluous",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word superfluous in sentence 7 begins with super-, meaning over or beyond, as in superhuman. In sentence 7, superfluous most nearly means —",
          choices: [
            { letter: "A", text: "illegal at the market" },
            { letter: "B", text: "more than is needed" },
            { letter: "C", text: "brighter than usual" },
            { letter: "D", text: "costly to produce" }
          ],
          correct: "B"
        },
        {
          id: "perennial",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word perennial in sentence 8 contains a Latin root meaning year, also found in annual and centennial. Perennial vendors are ones who —",
          choices: [
            { letter: "A", text: "sell only one crop each season" },
            { letter: "B", text: "return year after year" },
            { letter: "C", text: "arrive at the market early" },
            { letter: "D", text: "have just received permits" }
          ],
          correct: "B"
        },
        {
          id: "provisional",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "As used in sentence 5, the word provisional most nearly means —",
          choices: [
            { letter: "A", text: "free of any charge" },
            { letter: "B", text: "shared with others" },
            { letter: "C", text: "granted for life" },
            { letter: "D", text: "temporary, pending review" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── PAIRED TEXTS ───────────────────────── */
    {
      id: "g11-dsr-c95-pelicanrocks",
      family: "G11",
      title: "The Stair Pools",
      kind: "Paired texts · 11.DSR",
      blurb: "A student's field journal and a park notice look at the same crowded tide pools.",
      level: 1,
      passage:
        "<p><strong>Text 1 — From a student's field journal, June 12</strong></p>" +
        "<p>" + N(1) + "Low tide was at 7:40 this morning, and I reached Pelican Rocks by 7:15 with my notebook and a borrowed hand lens. " +
        N(2) + "The biggest pool near the stairs was crowded; I counted eleven people around it, and two kids were lifting sea stars to show their parents. " +
        N(3) + "I moved to the far end of the rocks, where the walk is slippery and nobody else had gone. " +
        N(4) + "There I found three pools I had never noticed, each packed with green anemones, purple urchins, and a sculpin that froze every time my shadow crossed the water. " +
        N(5) + "I sat for forty minutes and sketched without touching anything. " +
        N(6) + "On the walk back, the stair pool looked emptier than it did last summer, though I can't be sure, since I never counted it then.</p>" +
        "<p><strong>Text 2 — Notice posted at the Pelican Rocks stairway</strong></p>" +
        "<p>" + N(7) + "Visitors to Pelican Rocks have tripled since the new stairway opened two years ago. " +
        N(8) + "Most visitors explore only the pools within fifty meters of the stairs. " +
        N(9) + "Monitoring by park staff shows that these near pools now hold about half as many sea stars and anemones as pools at the far end of the shore. " +
        N(10) + "Animals that are handled, lifted, or stepped on often do not survive. " +
        N(11) + "Beginning July 1, the pools nearest the stairway will be roped off for one year to allow recovery. " +
        N(12) + "Visitors may still explore the rest of the shore, and staff will lead free tide walks each Saturday. " +
        N(13) + "Please look without touching, and return any rock you move to its place. " +
        N(14) + "Your patience will help the near pools fill again.</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea about Pelican Rocks is supported by both texts?",
          choices: [
            { letter: "A", text: "The far pools are too dangerous for visitors to reach." },
            { letter: "B", text: "Park staff should lead more tide walks each week." },
            { letter: "C", text: "The pools near the stairs show signs of heavy use." },
            { letter: "D", text: "Sea stars have vanished from the whole shoreline." }
          ],
          correct: "C"
        },
        {
          id: "purposes",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How do the purposes of Text 1 and Text 2 differ?",
          choices: [
            { letter: "A", text: "Text 1 records a visit; Text 2 explains a new rule." },
            { letter: "B", text: "Text 1 argues for a rule; Text 2 argues against it." },
            { letter: "C", text: "Text 1 reports data; Text 2 tells a personal story." },
            { letter: "D", text: "Text 1 warns visitors; Text 2 invites them to explore." }
          ],
          correct: "A"
        },
        {
          id: "resolve",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which sentence from Text 2 offers data that could resolve the uncertainty the writer of Text 1 expresses in sentence 6?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "C"
        },
        {
          id: "consistent",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences from Text 1 that are consistent with the findings reported in sentence 9.",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "july",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to Text 2, what will happen beginning July 1?",
          choices: [
            { letter: "A", text: "The new stairway will be closed to visitors." },
            { letter: "B", text: "The pools by the stairs will be roped off for a year." },
            { letter: "C", text: "Visitors will need a permit to explore the shore." },
            { letter: "D", text: "Staff will start counting animals in the far pools." }
          ],
          correct: "B"
        },
        {
          id: "respond",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Based on both texts, the writer of Text 1 would most likely respond to the new rule by —",
          choices: [
            { letter: "A", text: "objecting, because she prefers the stair pool" },
            { letter: "B", text: "ignoring it, because it does not affect students" },
            { letter: "C", text: "worrying that the far pools will close next" },
            { letter: "D", text: "supporting it, since she already looks elsewhere" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-dsr-c95-wednesday",
      family: "G11",
      title: "Saturday or Wednesday",
      kind: "Paired texts · 11.DSR",
      blurb: "A vendor's letter and a market committee's minutes disagree about moving a farmers market.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Letter to the Dunmore Weekly from a market vendor</strong></p>" +
        "<p>" + N(1) + "I have sold eggs and greens at the Dunmore Saturday Market for fourteen years, and I am writing to ask the market committee to reconsider its plan to move us to Wednesday evenings at the high school lot. " +
        N(2) + "Saturday mornings on Main Street are when families walk downtown, stop at the hardware store and the library, and then fill their bags with our produce. " +
        N(3) + "A weeknight market in a parking lot on the edge of town will lose that foot traffic. " +
        N(4) + "Many of us farm alone, and an evening market means harvesting in the heat of the afternoon instead of the cool of the morning, when greens hold up best. " +
        N(5) + "The committee says the change will attract new shoppers, but it may cost us the loyal ones we already have.</p>" +
        "<p><strong>Text 2 — From the minutes of the Dunmore Market Committee</strong></p>" +
        "<p>" + N(6) + "The committee reviewed three years of shopper counts. " +
        N(7) + "Saturday attendance has fallen by about a fifth since the county began a road project that closes two blocks of Main Street through next spring. " +
        N(8) + "Shoppers surveyed at the library said the detours and lack of parking keep them away. " +
        N(9) + "The high school lot offers two hundred parking spaces and lighting for evening hours. " +
        N(10) + "Several working families told the committee they cannot shop on Saturday mornings because of jobs and youth sports. " +
        N(11) + "The committee voted 4 to 1 to hold a trial Wednesday evening market from June through August and to compare attendance and vendor sales with last summer's figures before making any permanent decision.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which concern is central to both texts?",
          choices: [
            { letter: "A", text: "how the market's day and place affect who shops" },
            { letter: "B", text: "whether vendors should pay higher stall fees" },
            { letter: "C", text: "how long the road project on Main Street will last" },
            { letter: "D", text: "which crops sell best at evening markets" }
          ],
          correct: "A"
        },
        {
          id: "leftout",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which fact from Text 2 does the vendor in Text 1 leave out, though a reader would need it to judge the plan fairly?",
          choices: [
            { letter: "A", text: "The high school lot has lighting for evening hours." },
            { letter: "B", text: "The committee reviewed three years of shopper counts." },
            { letter: "C", text: "The vote on the plan was four to one in favor." },
            { letter: "D", text: "Saturday attendance has dropped during road work." }
          ],
          correct: "D"
        },
        {
          id: "trial",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Text 1 treats the move as a settled change. Text 2 presents it instead as —",
          choices: [
            { letter: "A", text: "a punishment for vendors who arrive late" },
            { letter: "B", text: "a permanent move approved by every member" },
            { letter: "C", text: "a summer trial to be judged by the numbers" },
            { letter: "D", text: "a plan that depends on the vendor's support" }
          ],
          correct: "C"
        },
        {
          id: "challenge",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that challenge the picture of busy Saturday mornings in sentence 2.",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "minutes",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Text 2 is organized mainly by —",
          choices: [
            { letter: "A", text: "answering each point in the vendor's letter in order" },
            { letter: "B", text: "telling the history of the market since it opened" },
            { letter: "C", text: "comparing Dunmore's market with those of other towns" },
            { letter: "D", text: "presenting the evidence reviewed, then the decision" }
          ],
          correct: "D"
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A reader of both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the trial may test whether the vendor's fears are right" },
            { letter: "B", text: "the vendor will stop selling at the market after this year" },
            { letter: "C", text: "the committee ignored every concern raised by vendors" },
            { letter: "D", text: "Main Street will be closed to all traffic permanently" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-dsr-c95-ownwords",
      family: "G11",
      title: "In Your Own Words",
      kind: "Paired texts · 11.DSR",
      blurb: "A senior remembers a patient tutor, and a year-end report counts what the program achieved.",
      level: 3,
      passage:
        "<p><strong>Text 1 — What I Remember (a senior's reflection)</strong></p>" +
        "<p>" + N(1) + "In seventh grade, I was the student who read every word problem three times and still could not tell you what it was asking. " +
        N(2) + "My tutor, a junior named Farah, never once explained the math to me in the first few weeks. " +
        N(3) + "Instead, she made me read each problem out loud and tell her, in my own words, what the people in it wanted. " +
        N(4) + "It felt like a waste of time, and I said so. " +
        N(5) + "She just slid the next problem across the table. " +
        N(6) + "Somewhere around November, I noticed I was translating the problems in my head before she asked. " +
        N(7) + "I do not remember a single equation we solved together. " +
        N(8) + "I remember that she waited, and that her waiting made me believe the answer was somewhere I could reach.</p>" +
        "<p><strong>Text 2 — From the tutoring program's year-end report</strong></p>" +
        "<p>" + N(9) + "This year, 48 tutors met with 61 middle school students for a combined 2,300 hours. " +
        N(10) + "On the spring benchmark, students who attended at least twenty sessions improved their math scores by an average of 14 points, compared with 5 points for students who attended fewer than ten. " +
        N(11) + "Tutors and students both rated \"explaining problems in your own words\" as the most useful strategy. " +
        N(12) + "Attendance remains the program's largest challenge: nearly a third of students stopped coming before winter break, usually citing transportation. " +
        N(13) + "Next year, the program will add a late bus on tutoring days and will train new tutors to spend early sessions on reading the problem before solving it.</p>",
      claims: [
        {
          id: "strategy",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which tutoring strategy do both texts present as valuable?",
          choices: [
            { letter: "A", text: "solving as many equations as possible" },
            { letter: "B", text: "restating problems in one's own words" },
            { letter: "C", text: "riding a late bus home after sessions" },
            { letter: "D", text: "taking a benchmark test every month" }
          ],
          correct: "B"
        },
        {
          id: "plan",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "The plan for new tutors in sentence 13 most closely reflects which part of Text 1?",
          choices: [
            { letter: "A", text: "the narrator rereading problems three times" },
            { letter: "B", text: "the narrator forgetting every equation" },
            { letter: "C", text: "Farah asking him to retell each problem first" },
            { letter: "D", text: "Farah sliding the next problem across" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How do the two texts differ in the kind of evidence they offer?",
          choices: [
            { letter: "A", text: "Text 1 uses memory; Text 2 uses numbers and ratings." },
            { letter: "B", text: "Text 1 uses test scores; Text 2 uses one story." },
            { letter: "C", text: "Both rely mainly on quotations from teachers." },
            { letter: "D", text: "Both rely mainly on surveys of families." }
          ],
          correct: "A"
        },
        {
          id: "waiting",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentences 7 and 8 suggest that the narrator values Farah mainly for her —",
          choices: [
            { letter: "A", text: "skill at solving equations quickly" },
            { letter: "B", text: "strict rules about reading aloud" },
            { letter: "C", text: "habit of praising every answer" },
            { letter: "D", text: "patience, which built his confidence" }
          ],
          correct: "D"
        },
        {
          id: "explain",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that help explain why the narrator of Text 1 benefited from staying in the program past November.",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with Text 2, the tone of Text 1 is more —",
          choices: [
            { letter: "A", text: "reflective and grateful" },
            { letter: "B", text: "objective and technical" },
            { letter: "C", text: "critical and impatient" },
            { letter: "D", text: "urgent and alarmed" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
