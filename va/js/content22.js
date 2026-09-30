/* SOL Labyrinth — Grade 11 tiny and short packs (nights 1–20): literary, poetry,
 * informational, functional, vocabulary and paired texts for the G11 family.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── TINY (50–90 words) ───────────────────────── */
    {
      id: "g11-t-lit-umbrella",
      family: "G11",
      title: "The Umbrella",
      kind: "Literary · 11.RL",
      blurb: "A month of blue skies, a grandmother's rule, and the one day Marisol leaves the umbrella home.",
      level: 1,
      passage:
        "<p>" + N(1) + "Marisol carried the umbrella to school every day in April because her grandmother insisted, and every day the sky stayed a flat, cheerful blue. " +
        N(2) + "Her friends began to call it her lucky charm, since the rain seemed afraid of it. " +
        N(3) + "On the last day of the month she left it at home to prove a point. " +
        N(4) + "The storm arrived at 2:40, ten minutes before dismissal. " +
        N(5) + "She walked home soaked and grinning, already composing the story for her grandmother, who would not need to say a word." +
        "</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "The ending of the story is ironic because —",
          choices: [
            { letter: "A", text: "the rain comes on the one day Marisol leaves the umbrella home" },
            { letter: "B", text: "Marisol's friends stop believing in the lucky charm" },
            { letter: "C", text: "the grandmother forgets to remind Marisol about the umbrella" },
            { letter: "D", text: "the storm ends before Marisol reaches her front door" }
          ],
          correct: "A"
        },
        {
          id: "point",
          sol: "11.RL.1.C",
          stem: "Sentence 3 shows that Marisol wants to —",
          choices: [
            { letter: "A", text: "show that the umbrella has no power over the weather" },
            { letter: "B", text: "avoid carrying the heavy umbrella on a warm day" },
            { letter: "C", text: "keep her friends from teasing her about it" },
            { letter: "D", text: "please her grandmother by following the rule" }
          ],
          correct: "A"
        },
        {
          id: "afraid",
          sol: "11.RL.2.A",
          stem: "In sentence 2, the phrase \"the rain seemed afraid of it\" is an example of —",
          choices: [
            { letter: "A", text: "a simile" },
            { letter: "B", text: "understatement" },
            { letter: "C", text: "an allusion" },
            { letter: "D", text: "personification" }
          ],
          correct: "D"
        },
        {
          id: "noword",
          sol: "11.RL.3.A",
          stem: "Why would the grandmother \"not need to say a word\" in sentence 5?",
          choices: [
            { letter: "A", text: "She has already heard about the storm on the news." },
            { letter: "B", text: "Marisol's soaked clothes will prove the grandmother right." },
            { letter: "C", text: "The grandmother rarely speaks to Marisol at all." },
            { letter: "D", text: "Marisol plans to apologize before she can speak." }
          ],
          correct: "B"
        },
        {
          id: "grinning",
          sol: "11.RL.1.B",
          stem: "The detail that Marisol is \"grinning\" in sentence 5 suggests that she —",
          choices: [
            { letter: "A", text: "is angry at herself for forgetting the umbrella" },
            { letter: "B", text: "enjoys storms more than she enjoys sunshine" },
            { letter: "C", text: "accepts being proved wrong with good humor" },
            { letter: "D", text: "plans to blame her friends for the idea" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-t-poem-streetlamp",
      family: "G11",
      title: "The Streetlamp",
      kind: "Poetry · 11.RL",
      blurb: "A flickering lamp and a sleepless winter keep each other company until the city sends a truck.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The streetlamp on our corner learned to flicker<br>" +
        L(2) + "the winter I learned how to stay up late;<br>" +
        L(3) + "we kept each other company, uncertain,<br>" +
        L(4) + "both switching on and off without a reason.<br>" +
        L(5) + "In spring the city sent a truck to fix it.<br>" +
        L(6) + "Now it burns steady, dull, and on schedule,<br>" +
        L(7) + "and I go to bed at ten like something mended,<br>" +
        L(8) + "missing the small companion of my doubt." +
        "</p>",
      claims: [
        {
          id: "connect",
          sol: "11.RL.2.A",
          stem: "The speaker connects the streetlamp to the speaker's own life mainly by —",
          choices: [
            { letter: "A", text: "treating the lamp as a companion whose flickering matches the speaker's restlessness" },
            { letter: "B", text: "blaming the city for keeping the speaker awake through the winter" },
            { letter: "C", text: "contrasting the lamp's brightness with the darkness of the speaker's room" },
            { letter: "D", text: "showing that the lamp depended on the speaker to keep it burning" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "11.RL.1.B",
          stem: "Lines 5 and 6 mark a shift in the poem from —",
          choices: [
            { letter: "A", text: "summer to winter" },
            { letter: "B", text: "uncertainty to steadiness" },
            { letter: "C", text: "the city to the country" },
            { letter: "D", text: "hope to disappointment" }
          ],
          correct: "B"
        },
        {
          id: "mended",
          sol: "11.RL.2.C",
          stem: "In line 7, the phrase \"like something mended\" suggests the speaker —",
          choices: [
            { letter: "A", text: "has recovered from a physical injury" },
            { letter: "B", text: "is proud of a new and healthier sleep schedule" },
            { letter: "C", text: "wishes to repair the lamp a second time" },
            { letter: "D", text: "feels fixed but also somehow diminished" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.RL.3.A",
          stem: "The tone of the final line is best described as —",
          choices: [
            { letter: "A", text: "relieved" },
            { letter: "B", text: "mocking" },
            { letter: "C", text: "wistful" },
            { letter: "D", text: "bitter" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-t-lit-mapmaker",
      family: "G11",
      title: "The Map on the Napkin",
      kind: "Literary · 11.RL",
      blurb: "A father who cannot give directions without drawing, and a son who finally reads the map correctly.",
      level: 2,
      passage:
        "<p>" + N(1) + "Dev's father could not give directions without drawing a map, and he drew them on whatever was nearest: napkins, receipts, once the back of Dev's math homework. " +
        N(2) + "The maps were never to scale. " +
        N(3) + "The important places were huge and the boring stretches were shrunk to a line. " +
        N(4) + "Dev used to find this embarrassing. " +
        N(5) + "Now, standing in the airport with a napkin that showed his father's house as a square the size of a fist, he understood that the map had never been about distance." +
        "</p>",
      claims: [
        {
          id: "matters",
          sol: "11.RL.3.A",
          stem: "The last sentence suggests that the maps actually express the father's —",
          choices: [
            { letter: "A", text: "poor sense of direction" },
            { letter: "B", text: "sense of what matters" },
            { letter: "C", text: "love of drawing" },
            { letter: "D", text: "wish to save paper" }
          ],
          correct: "B"
        },
        {
          id: "changed",
          sol: "11.RL.1.C",
          stem: "Sentences 4 and 5 together show that Dev —",
          choices: [
            { letter: "A", text: "has changed how he views his father's habit" },
            { letter: "B", text: "is lost somewhere inside the airport" },
            { letter: "C", text: "still finds the napkin maps embarrassing" },
            { letter: "D", text: "has learned to draw maps of his own" }
          ],
          correct: "A"
        },
        {
          id: "shrunk",
          sol: "11.RL.2.C",
          stem: "In sentence 3, \"shrunk to a line\" most nearly means the boring stretches were —",
          choices: [
            { letter: "A", text: "erased from the map completely" },
            { letter: "B", text: "drawn in a different color" },
            { letter: "C", text: "reduced to almost nothing" },
            { letter: "D", text: "described in words instead" }
          ],
          correct: "C"
        },
        {
          id: "list",
          sol: "11.RL.1.B",
          stem: "The author includes the list at the end of sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "show how messy the father's house was" },
            { letter: "B", text: "suggest that the father worked at a restaurant" },
            { letter: "C", text: "explain why Dev did poorly on his homework" },
            { letter: "D", text: "show how strong the father's habit was" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-t-poem-lastbus",
      family: "G11",
      title: "Last Bus",
      kind: "Poetry · 11.RL",
      blurb: "A night driver runs the whole route for a single passenger, as if the empty seats were owed the trip.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The last bus leaves at eleven-fifteen.<br>" +
        L(2) + "The driver knows my stop without my asking.<br>" +
        L(3) + "We do not talk; he nods, I nod, the doors sigh shut,<br>" +
        L(4) + "and the town slides past in windows full of sleep.<br>" +
        L(5) + "Some nights I am the only passenger.<br>" +
        L(6) + "He drives the whole route anyway, every corner,<br>" +
        L(7) + "as if the empty seats were owed the trip." +
        "</p>",
      claims: [
        {
          id: "idea",
          sol: "11.RL.1.A",
          stem: "Which idea does the poem most clearly express?",
          choices: [
            { letter: "A", text: "Public transportation is unreliable late at night." },
            { letter: "B", text: "Small acts of duty can feel like quiet kindness." },
            { letter: "C", text: "The speaker wishes the driver would talk more." },
            { letter: "D", text: "Towns are lonelier than cities after dark." }
          ],
          correct: "B"
        },
        {
          id: "sigh",
          sol: "11.RL.2.A",
          stem: "In line 3, the words \"the doors sigh shut\" give the bus a quality that is —",
          choices: [
            { letter: "A", text: "angry and impatient" },
            { letter: "B", text: "broken and unsafe" },
            { letter: "C", text: "weary but gentle" },
            { letter: "D", text: "loud and rushed" }
          ],
          correct: "C"
        },
        {
          id: "driver",
          sol: "11.RL.1.C",
          stem: "Line 2 suggests that the driver —",
          choices: [
            { letter: "A", text: "has forgotten where the speaker gets off" },
            { letter: "B", text: "is annoyed by passengers who ride late" },
            { letter: "C", text: "is new to driving this particular route" },
            { letter: "D", text: "has seen the speaker many times before" }
          ],
          correct: "D"
        },
        {
          id: "owed",
          sol: "11.RL.3.A",
          stem: "Lines 6 and 7 mainly emphasize the driver's —",
          choices: [
            { letter: "A", text: "faithfulness to the route even when no one needs it" },
            { letter: "B", text: "worry about missing a waiting passenger" },
            { letter: "C", text: "wish to finish the night's work early" },
            { letter: "D", text: "confusion about which corners to take" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-t-info-crickets",
      family: "G11",
      title: "Counting Crickets",
      kind: "Informational · 11.RI",
      blurb: "An old rule for reading the temperature from a cricket's chirp, and how far to trust it.",
      level: 1,
      passage:
        "<p>" + N(1) + "A cricket's chirp can serve as a rough thermometer. " +
        N(2) + "Crickets are cold-blooded, so their bodies speed up as the air warms, and their chirping speeds up with them. " +
        N(3) + "One old rule says to count the chirps in fourteen seconds and add forty to get the temperature in degrees Fahrenheit. " +
        N(4) + "The rule works best between about 55 and 100 degrees; below that range, crickets mostly fall silent. " +
        N(5) + "It is not exact, and different species chirp at different rates. " +
        N(6) + "Still, a patient listener can come surprisingly close." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "Which statement best captures the passage's main idea?",
          choices: [
            { letter: "A", text: "Crickets fall silent whenever the weather turns cold." },
            { letter: "B", text: "Cricket chirps can give a rough estimate of the temperature." },
            { letter: "C", text: "Phones are far more reliable than crickets for weather." },
            { letter: "D", text: "Different cricket species chirp at different speeds." }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "11.RI.2.B",
          stem: "According to sentence 2, crickets chirp faster in warm air because —",
          choices: [
            { letter: "A", text: "their cold-blooded bodies speed up along with the air" },
            { letter: "B", text: "they are trying to attract more mates in summer" },
            { letter: "C", text: "warm nights have fewer predators to hide from" },
            { letter: "D", text: "the old rule requires a faster count in summer" }
          ],
          correct: "A"
        },
        {
          id: "rough",
          sol: "11.RI.2.C",
          stem: "In sentence 1, the word rough most nearly means —",
          choices: [
            { letter: "A", text: "harsh" },
            { letter: "B", text: "unfinished" },
            { letter: "C", text: "thunderous" },
            { letter: "D", text: "approximate" }
          ],
          correct: "D"
        },
        {
          id: "limit",
          sol: "11.RI.1.C",
          stem: "Which sentence most directly admits that the rule is imperfect?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 5" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "C"
        },
        {
          id: "still",
          sol: "11.RI.1.B",
          stem: "The passage closes with sentence 6 in order to —",
          choices: [
            { letter: "A", text: "warn readers never to trust the rule" },
            { letter: "B", text: "suggest the rule is still useful despite its flaws" },
            { letter: "C", text: "explain the reason crickets chirp at all" },
            { letter: "D", text: "describe the best time of night to listen" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-t-func-lostfound",
      family: "G11",
      title: "Lost and Found Notice",
      kind: "Functional text · 11.RI",
      blurb: "A main-office notice on how long lost items are kept and how to claim them.",
      level: 1,
      passage:
        "<p><strong>Lost and Found — Main Office</strong></p>" +
        "<p>" + N(1) + "Items turned in to the office are held for thirty days. " +
        N(2) + "To claim an item, describe it to the office staff before it is shown to you; a photo on your phone counts. " +
        N(3) + "Water bottles and clothing that are unclaimed after thirty days are donated. " +
        N(4) + "Electronics, keys, and wallets are held for the full school year and then turned over to the district. " +
        N(5) + "The office does not hold food, and it does not search bags. " +
        N(6) + "Questions go to Ms. Okafor at the front desk." +
        "</p>",
      claims: [
        {
          id: "keys",
          sol: "11.RI.1.C",
          stem: "According to the notice, a student who lost a set of keys in September could still claim them —",
          choices: [
            { letter: "A", text: "only within thirty days of losing them" },
            { letter: "B", text: "until the end of the school year" },
            { letter: "C", text: "only by showing a photo of the keys" },
            { letter: "D", text: "after they have been donated" }
          ],
          correct: "B"
        },
        {
          id: "describe",
          sol: "11.RI.2.B",
          stem: "The office asks students to describe an item before seeing it most likely to —",
          choices: [
            { letter: "A", text: "save the office staff some time" },
            { letter: "B", text: "keep a written record of lost items" },
            { letter: "C", text: "make sure the item belongs to the claimant" },
            { letter: "D", text: "encourage students to photograph their belongings" }
          ],
          correct: "C"
        },
        {
          id: "organized",
          sol: "11.RI.1.B",
          stem: "Sentences 3 and 4 are organized to show —",
          choices: [
            { letter: "A", text: "how long different kinds of items are kept" },
            { letter: "B", text: "the steps for claiming an item in order" },
            { letter: "C", text: "the main causes of items being lost" },
            { letter: "D", text: "a comparison of two school offices" }
          ],
          correct: "A"
        },
        {
          id: "unclaimed",
          sol: "11.RI.2.C",
          stem: "In sentence 3, the word unclaimed means —",
          choices: [
            { letter: "A", text: "broken beyond repair" },
            { letter: "B", text: "labeled with a name" },
            { letter: "C", text: "given away to charity" },
            { letter: "D", text: "not picked up by an owner" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-t-info-fullmoon",
      family: "G11",
      title: "The Full-Moon Fishing Claim",
      kind: "Informational · 11.RI",
      blurb: "Anglers swear the fish bite on the full moon; a three-year survey finds something else rising.",
      level: 2,
      passage:
        "<p>" + N(1) + "Ask a dock full of anglers when the fish bite, and someone will swear by the full moon. " +
        N(2) + "The belief is old and stubborn. " +
        N(3) + "A three-year survey of one bay's fishing reports, however, found no rise in catches on full-moon nights. " +
        N(4) + "What it found instead was a rise in the number of people fishing. " +
        N(5) + "More boats on the water means more stories of big fish, and the stories, not the fish, follow the moon. " +
        N(6) + "The lesson reaches past fishing: more reports do not always mean more events." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the author's central claim?",
          choices: [
            { letter: "A", text: "Full moons cause fish to bite more often than usual." },
            { letter: "B", text: "Anglers tend to exaggerate the size of their catches." },
            { letter: "C", text: "More reports may reflect more observers, not more events." },
            { letter: "D", text: "Surveys of fishing reports are rarely worth trusting." }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "11.RI.1.C",
          stem: "Which sentence provides the evidence that challenges the full-moon belief?",
          choices: [
            { letter: "A", text: "sentence 3" },
            { letter: "B", text: "sentence 1" },
            { letter: "C", text: "sentence 2" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "A"
        },
        {
          id: "stubborn",
          sol: "11.RI.2.C",
          stem: "In sentence 2, the word stubborn suggests that the belief —",
          choices: [
            { letter: "A", text: "is easy to prove with a survey" },
            { letter: "B", text: "persists despite evidence against it" },
            { letter: "C", text: "is held only by older anglers" },
            { letter: "D", text: "changes with the fishing season" }
          ],
          correct: "B"
        },
        {
          id: "reverse",
          sol: "11.RI.2.A",
          stem: "In sentence 5, the phrase \"the stories, not the fish, follow the moon\" is effective because it —",
          choices: [
            { letter: "A", text: "explains how to catch more fish on a bright night" },
            { letter: "B", text: "describes the moon's effect on the tides" },
            { letter: "C", text: "lists the steps the survey followed" },
            { letter: "D", text: "neatly reverses the belief it is correcting" }
          ],
          correct: "D"
        },
        {
          id: "opening",
          sol: "11.RI.1.B",
          stem: "The author begins with sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "present the popular belief the passage will test" },
            { letter: "B", text: "prove that anglers are experts on fish behavior" },
            { letter: "C", text: "describe the setting where the survey took place" },
            { letter: "D", text: "explain what a dock is for readers who fish" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-t-vocab-diner",
      family: "G11",
      title: "Closing Time",
      kind: "Vocabulary · 11.RV",
      blurb: "A diner at nine o'clock, a lingering customer, and three target words in context.",
      level: 1,
      passage:
        "<p>" + N(1) + "At nine the diner was nearly empty, and Rosa began the <strong>tedious</strong> work of wiping down every sugar shaker, one after another, until the row gleamed. " +
        N(2) + "A man at the counter lingered over cold coffee, his hands <strong>fidgeting</strong> with a folded napkin, unfolding it and folding it again. " +
        N(3) + "Rosa did not hurry him. " +
        N(4) + "Her manager called it wasted time, but she thought of it as <strong>hospitality</strong>: the simple act of letting a guest feel welcome for as long as he needed." +
        "</p>",
      claims: [
        {
          id: "tedious",
          sol: "11.RV.1.B",
          stem: "In sentence 1, the word tedious most nearly means —",
          choices: [
            { letter: "A", text: "dangerous" },
            { letter: "B", text: "dull and repetitive" },
            { letter: "C", text: "quick and easy" },
            { letter: "D", text: "carefully planned" }
          ],
          correct: "B"
        },
        {
          id: "tedious-clue",
          sol: "11.RV.1.C",
          stem: "Which phrase in sentence 1 best helps a reader understand tedious?",
          choices: [
            { letter: "A", text: "\"at nine\"" },
            { letter: "B", text: "\"nearly empty\"" },
            { letter: "C", text: "\"one after another\"" },
            { letter: "D", text: "\"the row gleamed\"" }
          ],
          correct: "C"
        },
        {
          id: "fidgeting",
          sol: "11.RV.1.B",
          stem: "Sentence 2 shows that fidgeting describes hands that are —",
          choices: [
            { letter: "A", text: "moving restlessly" },
            { letter: "B", text: "resting quietly" },
            { letter: "C", text: "badly injured" },
            { letter: "D", text: "clapping loudly" }
          ],
          correct: "A"
        },
        {
          id: "hospitality",
          sol: "11.RV.1.C",
          stem: "In sentence 4, the words after the colon help define hospitality as —",
          choices: [
            { letter: "A", text: "serving food as quickly as possible" },
            { letter: "B", text: "cleaning a workplace thoroughly" },
            { letter: "C", text: "following a manager's rules exactly" },
            { letter: "D", text: "making a guest feel welcome" }
          ],
          correct: "D"
        },
        {
          id: "connotation",
          sol: "10.RV.1.A",
          stem: "Compared with \"wasted time,\" the word hospitality in sentence 4 has a connotation that is —",
          choices: [
            { letter: "A", text: "more negative" },
            { letter: "B", text: "more positive" },
            { letter: "C", text: "more scientific" },
            { letter: "D", text: "more humorous" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-t-vocab-coat",
      family: "G11",
      title: "The Thrift Store Coat",
      kind: "Vocabulary · 11.RV",
      blurb: "A coat too perfect for its price, a careful tailor, and three target words in context.",
      level: 1,
      passage:
        "<p>" + N(1) + "The coat at the thrift store was <strong>immaculate</strong>: not a loose thread, not a scuff, as if no one had ever worn it. " +
        N(2) + "Jonah checked the tag twice, sure the price was a mistake. " +
        N(3) + "It was a <strong>bargain</strong>, half of what a new coat would cost and far better made. " +
        N(4) + "At the register the cashier told him that the coat had been donated by a tailor who <strong>meticulously</strong> repaired every item before giving it away, checking each seam and button. " +
        N(5) + "Jonah wore it all winter." +
        "</p>",
      claims: [
        {
          id: "immaculate",
          sol: "11.RV.1.B",
          stem: "In sentence 1, the word immaculate most nearly means —",
          choices: [
            { letter: "A", text: "surprisingly expensive" },
            { letter: "B", text: "slightly old-fashioned" },
            { letter: "C", text: "unusually warm" },
            { letter: "D", text: "perfectly clean and undamaged" }
          ],
          correct: "D"
        },
        {
          id: "bargain",
          sol: "11.RV.1.C",
          stem: "In sentence 3, the phrase after the comma helps show that a bargain is —",
          choices: [
            { letter: "A", text: "something sold well below its usual price" },
            { letter: "B", text: "something made with unusual care" },
            { letter: "C", text: "something discovered purely by luck" },
            { letter: "D", text: "something too damaged to sell as new" }
          ],
          correct: "A"
        },
        {
          id: "suffix",
          sol: "11.RV.1.A",
          stem: "The suffix -ly in meticulously (sentence 4) shows that the word describes —",
          choices: [
            { letter: "A", text: "how the tailor repaired the items" },
            { letter: "B", text: "what the tailor repaired" },
            { letter: "C", text: "who repaired the items" },
            { letter: "D", text: "when the items were repaired" }
          ],
          correct: "A"
        },
        {
          id: "meticulously-clue",
          sol: "11.RV.1.C",
          stem: "Which detail in sentence 4 best clarifies the meaning of meticulously?",
          choices: [
            { letter: "A", text: "\"at the register the cashier told him\"" },
            { letter: "B", text: "\"had been donated by a tailor\"" },
            { letter: "C", text: "\"checking each seam and button\"" },
            { letter: "D", text: "\"before giving it away\"" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-t-dsr-headphones",
      family: "G11",
      title: "Headphones in the Hall",
      kind: "Paired texts · 11.DSR",
      blurb: "A student letter objects to a headphone ban; the assistant principal explains what it is really for.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Student Letter to the Editor</strong></p>" +
        "<p>" + N(1) + "Banning headphones in the hallways will not make students talk to each other. " +
        N(2) + "It will make them stare at their phones instead. " +
        N(3) + "Most of us use music to calm down between classes. " +
        N(4) + "If the school wants conversation, give us longer passing periods, not another rule.</p>" +
        "<p><strong>Text 2 — Assistant Principal's Announcement</strong></p>" +
        "<p>" + N(5) + "Beginning Monday, headphones must be removed in hallways. " +
        N(6) + "The change is about safety, not conversation: in the last month, three students wearing headphones did not hear staff warnings near the loading dock. " +
        N(7) + "Headphones remain welcome in the cafeteria and in classrooms where teachers allow them." +
        "</p>",
      claims: [
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "Which statement best captures how Text 1 and Text 2 disagree about the rule?",
          choices: [
            { letter: "A", text: "Text 1 treats the rule as being about conversation; Text 2 says it is about safety." },
            { letter: "B", text: "Text 1 supports the new rule in full; Text 2 argues that it should be dropped." },
            { letter: "C", text: "Text 1 focuses on the cafeteria; Text 2 focuses on the classrooms." },
            { letter: "D", text: "Text 1 was written by a staff member; Text 2 was written by a student." }
          ],
          correct: "A"
        },
        {
          id: "answers",
          sol: "11.DSR.E",
          stem: "Which detail from Text 2 most directly answers the concern in sentence 3 of Text 1?",
          choices: [
            { letter: "A", text: "the new rule takes effect on Monday" },
            { letter: "B", text: "three students did not hear staff warnings" },
            { letter: "C", text: "headphones stay allowed in the cafeteria and some classrooms" },
            { letter: "D", text: "the loading dock is a dangerous place" }
          ],
          correct: "C"
        },
        {
          id: "agree",
          sol: "11.DSR.D",
          stem: "The writers of both texts would most likely agree that —",
          choices: [
            { letter: "A", text: "hallways should be completely silent" },
            { letter: "B", text: "passing periods are far too short" },
            { letter: "C", text: "the rule should also apply in classrooms" },
            { letter: "D", text: "students use headphones between classes" }
          ],
          correct: "D"
        },
        {
          id: "predict",
          sol: "10.DSR.E",
          stem: "Which sentence in Text 1 predicts a result of the ban?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 2" },
            { letter: "C", text: "sentence 3" },
            { letter: "D", text: "sentence 4" }
          ],
          correct: "B"
        },
        {
          id: "reason",
          sol: "11.DSR.E",
          stem: "Which sentence in Text 2 gives evidence for the reason behind the rule?",
          choices: [
            { letter: "A", text: "sentence 5" },
            { letter: "B", text: "sentence 6" },
            { letter: "C", text: "sentence 7" },
            { letter: "D", text: "sentence 4" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── SHORT (100–150 words) ───────────────────────── */
    {
      id: "g11-s-lit-clock",
      family: "G11",
      title: "The Clock That Ran Fast",
      kind: "Literary · 11.RL",
      blurb: "A hallway clock eleven minutes ahead, and the winter a grandson finally sets his watch to match.",
      level: 2,
      passage:
        "<p>" + N(1) + "The clock in the hallway of Mrs. Pham's house ran eleven minutes fast, and everyone who lived there knew it. " +
        N(2) + "Guests did not. " +
        N(3) + "They arrived early to dinner and apologized; they left early and were baffled at the empty train platform. " +
        N(4) + "When her grandson Linh finally offered to fix it, Mrs. Pham waved him away. " +
        N(5) + "\"It is not broken,\" she said. " +
        N(6) + "\"It is honest about how I like to live.\" " +
        N(7) + "Linh did not understand until the winter she was ill and the house filled with relatives, each one checking a phone, each one exactly on time. " +
        N(8) + "The hallway clock ticked ahead of all of them, insisting on its eleven-minute lead. " +
        N(9) + "Linh stood beneath it and, for the first time, set his own watch to match. " +
        N(10) + "Being early, he decided, was a way of saying you had been looking forward to something." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the story most clearly develop?",
          choices: [
            { letter: "A", text: "Old objects should be repaired rather than replaced." },
            { letter: "B", text: "Arriving early can express eagerness and care." },
            { letter: "C", text: "Families should visit their elders more often." },
            { letter: "D", text: "Guests should always check the time before leaving." }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "11.RL.1.C",
          stem: "Mrs. Pham's response in sentences 5 and 6 reveals that she —",
          choices: [
            { letter: "A", text: "does not realize the clock runs fast" },
            { letter: "B", text: "cannot afford to have the clock fixed" },
            { letter: "C", text: "keeps the clock fast on purpose" },
            { letter: "D", text: "wants Linh to leave her house" }
          ],
          correct: "C"
        },
        {
          id: "insisting",
          sol: "11.RL.2.A",
          stem: "In sentence 8, describing the clock as \"insisting\" on its lead is an example of —",
          choices: [
            { letter: "A", text: "a simile" },
            { letter: "B", text: "hyperbole" },
            { letter: "C", text: "alliteration" },
            { letter: "D", text: "personification" }
          ],
          correct: "D"
        },
        {
          id: "baffled",
          sol: "11.RL.2.C",
          stem: "In sentence 3, the word baffled most nearly means —",
          choices: [
            { letter: "A", text: "confused" },
            { letter: "B", text: "relieved" },
            { letter: "C", text: "angry" },
            { letter: "D", text: "amused" }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "11.RL.3.A",
          stem: "What causes Linh to change his view of the clock?",
          choices: [
            { letter: "A", text: "He finally learns how to repair it himself." },
            { letter: "B", text: "His relatives all ask him to set it right." },
            { letter: "C", text: "He sees the punctual relatives and grasps what the clock means." },
            { letter: "D", text: "Mrs. Pham explains the clock's history to him." }
          ],
          correct: "C"
        },
        {
          id: "short",
          sol: "11.RL.1.B",
          stem: "Sentence 2 is set apart as a very short sentence mainly to —",
          choices: [
            { letter: "A", text: "show that guests rarely visit the house" },
            { letter: "B", text: "emphasize the gap between the household and outsiders" },
            { letter: "C", text: "suggest that the clock has finally stopped" },
            { letter: "D", text: "slow the pace of the story's opening" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-s-lit-secondhalf",
      family: "G11",
      title: "The Second Half",
      kind: "Literary · 11.RL",
      blurb: "Down 3–0 at halftime, a coach draws one arrow on the whiteboard and asks her team to pass into trouble.",
      level: 1,
      passage:
        "<p>" + N(1) + "At halftime the scoreboard read 3–0, and the Eastfield bench was silent in the way that is louder than shouting. " +
        N(2) + "Coach Reyes did not raise her voice. " +
        N(3) + "She drew one arrow on the whiteboard and said, \"You keep passing away from Amara because she is covered. " +
        N(4) + "She is covered because she is the one they fear. " +
        N(5) + "Pass to her anyway.\" " +
        N(6) + "In the second half, the first pass to Amara was stolen. " +
        N(7) + "So was the second. " +
        N(8) + "The third one she caught with her back to the goal, turned, and scored. " +
        N(9) + "The stadium did not erupt; it was a Tuesday, with forty people in the stands. " +
        N(10) + "But the bench stood up, and for the rest of the game the ball went where the arrow pointed. " +
        N(11) + "Eastfield lost 3–2. " +
        N(12) + "Walking off, Amara said it was the best loss she had ever played in, and nobody on the bench disagreed." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme developed in the story?",
          choices: [
            { letter: "A", text: "Winning is the only true measure of a good game." },
            { letter: "B", text: "Playing with courage can matter more than the score." },
            { letter: "C", text: "Small crowds make players nervous and careless." },
            { letter: "D", text: "Coaches must shout in order to be heard." }
          ],
          correct: "B"
        },
        {
          id: "coach",
          sol: "11.RL.1.C",
          stem: "The coach's advice in sentences 3 through 5 shows that she —",
          choices: [
            { letter: "A", text: "wants the team to keep the ball away from Amara" },
            { letter: "B", text: "holds Amara responsible for the first-half score" },
            { letter: "C", text: "wants the team to trust its best player despite the risk" },
            { letter: "D", text: "believes the other team is too afraid to play hard" }
          ],
          correct: "C"
        },
        {
          id: "silent",
          sol: "11.RL.2.A",
          stem: "In sentence 1, the phrase \"silent in the way that is louder than shouting\" suggests the bench feels —",
          choices: [
            { letter: "A", text: "calm and focused" },
            { letter: "B", text: "discouraged and tense" },
            { letter: "C", text: "bored by the game" },
            { letter: "D", text: "relieved by the break" }
          ],
          correct: "B"
        },
        {
          id: "stolen",
          sol: "11.RL.1.B",
          stem: "Sentences 6 and 7 are important to the plot because they —",
          choices: [
            { letter: "A", text: "show that the coach's plan does not work right away" },
            { letter: "B", text: "explain the reason Eastfield loses the game" },
            { letter: "C", text: "describe Amara's finest moment of the season" },
            { letter: "D", text: "introduce a new player to the story" }
          ],
          correct: "A"
        },
        {
          id: "erupt",
          sol: "11.RL.2.C",
          stem: "In sentence 9, the word erupt most nearly means —",
          choices: [
            { letter: "A", text: "burst into noise" },
            { letter: "B", text: "empty out quickly" },
            { letter: "C", text: "fall completely quiet" },
            { letter: "D", text: "begin to cheer softly" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "11.RL.3.A",
          stem: "The final sentence suggests that the team —",
          choices: [
            { letter: "A", text: "expects to win its next game easily" },
            { letter: "B", text: "is angry with Amara about the loss" },
            { letter: "C", text: "no longer respects the coach's decisions" },
            { letter: "D", text: "values how it played over the result" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-s-poem-windfall",
      family: "G11",
      title: "Windfall",
      kind: "Poetry · 11.RL",
      blurb: "An October orchard, the apples a tree drops on its own, and a speaker who changes her mind about waste.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The orchard does not keep what it lets go.<br>" +
        L(2) + "By October the grass is full of apples,<br>" +
        L(3) + "bruised on one side, bright on the other,<br>" +
        L(4) + "and the deer come at dusk to take their share.<br>" +
        L(5) + "My uncle calls them windfalls: what the tree<br>" +
        L(6) + "drops without being asked, before the picking.<br>" +
        L(7) + "He gathers them for cider, sweet as anything<br>" +
        L(8) + "sold in the bins at twice the price.<br>" +
        L(9) + "I used to think a fallen thing was wasted.<br>" +
        L(10) + "Now I hold one, half-bruised, and taste the wind." +
        "</p>",
      claims: [
        {
          id: "idea",
          sol: "11.RL.1.A",
          stem: "Which idea does the poem most clearly develop?",
          choices: [
            { letter: "A", text: "Deer damage orchards every autumn." },
            { letter: "B", text: "Store-bought cider costs far too much." },
            { letter: "C", text: "Trees should be picked before October." },
            { letter: "D", text: "What seems lost or damaged can still hold value." }
          ],
          correct: "D"
        },
        {
          id: "windfalls",
          sol: "11.RL.2.C",
          stem: "In lines 5 and 6, the uncle's explanation shows that windfalls are apples that —",
          choices: [
            { letter: "A", text: "are sold at a discount in the bins" },
            { letter: "B", text: "the deer have already eaten from" },
            { letter: "C", text: "fall on their own before the harvest" },
            { letter: "D", text: "grow only on the highest branches" }
          ],
          correct: "C"
        },
        {
          id: "shift",
          sol: "11.RL.1.B",
          stem: "Lines 9 and 10 mark a shift in the speaker from —",
          choices: [
            { letter: "A", text: "quiet sadness to open anger" },
            { letter: "B", text: "a past belief to a new understanding" },
            { letter: "C", text: "the orchard to the cider press" },
            { letter: "D", text: "early autumn to deep winter" }
          ],
          correct: "B"
        },
        {
          id: "wind",
          sol: "11.RL.2.A",
          stem: "The phrase \"taste the wind\" in line 10 is effective mainly because it —",
          choices: [
            { letter: "A", text: "suggests the apple carries the very force that freed it" },
            { letter: "B", text: "describes the cold weather in the orchard" },
            { letter: "C", text: "shows the speaker dislikes the apple's flavor" },
            { letter: "D", text: "compares the apple directly to cider" }
          ],
          correct: "A"
        },
        {
          id: "bins",
          sol: "11.RL.2.B",
          stem: "The poet includes the detail about the bins in lines 7 and 8 mainly to —",
          choices: [
            { letter: "A", text: "complain about the cost of store cider" },
            { letter: "B", text: "show the windfalls equal what people pay for" },
            { letter: "C", text: "explain the steps of making cider" },
            { letter: "D", text: "describe the uncle's job at the market" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-s-info-libraryfines",
      family: "G11",
      title: "The Case Against Library Fines",
      kind: "Informational · 11.RI",
      blurb: "Three reasons libraries are dropping late fines, and an answer to the critics who want them kept.",
      level: 2,
      passage:
        "<p>" + N(1) + "For decades, public libraries fined readers a few cents a day for late books, and the practice seemed as natural as the due-date stamp. " +
        N(2) + "Yet a growing number of libraries have dropped fines entirely, and their reasons are worth examining. " +
        N(3) + "First, fines rarely bring books back faster; studies of several systems found return times barely changed after fines ended. " +
        N(4) + "Second, fines fall hardest on the readers libraries most want to reach. " +
        N(5) + "A family that owes twelve dollars may simply stop coming, and a card that is blocked over a small debt is a door closed to a child. " +
        N(6) + "Third, collecting fines costs money: staff time, software, and awkward conversations at the desk. " +
        N(7) + "Critics answer that fines teach responsibility. " +
        N(8) + "Perhaps, but a library's job is to lend books, not lessons, and a shelf of returned books is a better measure of success than a drawer of collected coins." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.A",
          stem: "The author's central claim is that libraries —",
          choices: [
            { letter: "A", text: "should raise fines to cover their costs" },
            { letter: "B", text: "are right to eliminate late fines" },
            { letter: "C", text: "lend too few books to children" },
            { letter: "D", text: "should teach responsibility to readers" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.1.B",
          stem: "Sentences 3, 4, and 6 are organized as —",
          choices: [
            { letter: "A", text: "a sequence of events in time order" },
            { letter: "B", text: "a comparison of two library systems" },
            { letter: "C", text: "a numbered list of reasons" },
            { letter: "D", text: "a problem followed by a solution" }
          ],
          correct: "C"
        },
        {
          id: "research",
          sol: "11.RI.1.C",
          stem: "Which sentence uses research findings to support the claim?",
          choices: [
            { letter: "A", text: "sentence 3" },
            { letter: "B", text: "sentence 1" },
            { letter: "C", text: "sentence 5" },
            { letter: "D", text: "sentence 7" }
          ],
          correct: "A"
        },
        {
          id: "critics",
          sol: "11.RI.2.A",
          stem: "The author addresses the opposing view in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "admit that fines should probably stay" },
            { letter: "B", text: "show that the critics are dishonest" },
            { letter: "C", text: "respond to it before restating the claim" },
            { letter: "D", text: "change the subject to teaching" }
          ],
          correct: "C"
        },
        {
          id: "door",
          sol: "11.RI.2.C",
          stem: "In sentence 5, describing a blocked card as \"a door closed to a child\" emphasizes —",
          choices: [
            { letter: "A", text: "how libraries lock their doors after closing" },
            { letter: "B", text: "how a small debt can shut a child out entirely" },
            { letter: "C", text: "how easily children lose their library cards" },
            { letter: "D", text: "how families switch to a different branch" }
          ],
          correct: "B"
        },
        {
          id: "measure",
          sol: "11.RI.2.B",
          stem: "Based on sentence 8, the author would most likely agree that —",
          choices: [
            { letter: "A", text: "a library succeeds when its books circulate and return" },
            { letter: "B", text: "collected fines are the best sign of a library's success" },
            { letter: "C", text: "libraries should stop lending to families with debts" },
            { letter: "D", text: "lessons in responsibility belong at the library desk" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-s-func-pantry",
      family: "G11",
      title: "Volunteer Shift Sign-Up",
      kind: "Functional text · 11.RI",
      blurb: "A food pantry's rules for student volunteers: shifts, sign-ups, shoes, and how hours get counted.",
      level: 1,
      passage:
        "<p><strong>Riverbend Food Pantry — Student Volunteer Shifts</strong></p>" +
        "<p>" + N(1) + "Shifts run Tuesday and Thursday from 4:00 to 6:00 p.m. and Saturday from 9:00 a.m. to noon. " +
        N(2) + "Students under 16 must volunteer with an adult or a school club sponsor. " +
        N(3) + "Sign up online by the Sunday before the week you want to work; walk-ins are accepted on Saturdays only if fewer than ten volunteers are scheduled. " +
        N(4) + "Wear closed-toe shoes; sandals are not allowed in the stockroom. " +
        N(5) + "Bring a water bottle. " +
        N(6) + "Service hours are recorded by the shift lead at the end of each shift, not by the student, and forms turned in without a shift lead's signature will not be counted. " +
        N(7) + "Volunteers who miss two scheduled shifts without notice will be removed from the sign-up list for the rest of the semester. " +
        N(8) + "To cancel, email pantry@riverbend.example at least 24 hours ahead. " +
        N(9) + "Questions: ask for Devon at the front desk." +
        "</p>",
      claims: [
        {
          id: "under16",
          sol: "11.RI.1.C",
          stem: "According to the notice, a 15-year-old student may volunteer —",
          choices: [
            { letter: "A", text: "only on Saturday mornings" },
            { letter: "B", text: "only with an adult or club sponsor" },
            { letter: "C", text: "only after signing up twice" },
            { letter: "D", text: "only outside the stockroom" }
          ],
          correct: "B"
        },
        {
          id: "walkin",
          sol: "11.RI.1.C",
          stem: "A student who wants to walk in without signing up should come —",
          choices: [
            { letter: "A", text: "on a Tuesday afternoon before 4:00" },
            { letter: "B", text: "on a Thursday evening after 6:00" },
            { letter: "C", text: "on a Saturday with fewer than ten volunteers scheduled" },
            { letter: "D", text: "on any day, as long as they wear closed-toe shoes" }
          ],
          correct: "C"
        },
        {
          id: "hours",
          sol: "11.RI.2.B",
          stem: "The rule in sentence 6 is most likely intended to —",
          choices: [
            { letter: "A", text: "make sure reported hours are accurate" },
            { letter: "B", text: "reward students who stay past the end of a shift" },
            { letter: "C", text: "give the shift lead something extra to do" },
            { letter: "D", text: "encourage students to keep their own records" }
          ],
          correct: "A"
        },
        {
          id: "notice",
          sol: "11.RI.2.C",
          stem: "In sentence 7, \"without notice\" means that a volunteer —",
          choices: [
            { letter: "A", text: "arrived late to the shift" },
            { letter: "B", text: "did not tell the pantry in advance" },
            { letter: "C", text: "was not seen by the shift lead" },
            { letter: "D", text: "did not sign the hours form" }
          ],
          correct: "B"
        },
        {
          id: "organized",
          sol: "11.RI.1.B",
          stem: "The notice is organized mainly by —",
          choices: [
            { letter: "A", text: "ranking the rules from most to least important" },
            { letter: "B", text: "narrating the events of a typical volunteer shift" },
            { letter: "C", text: "moving from schedule and eligibility to rules and consequences" },
            { letter: "D", text: "comparing the weekday shifts with the weekend shifts" }
          ],
          correct: "C"
        },
        {
          id: "removed",
          sol: "11.RI.1.C",
          stem: "Which action would cause a student to be removed from the sign-up list?",
          choices: [
            { letter: "A", text: "forgetting a water bottle twice" },
            { letter: "B", text: "wearing sandals into the stockroom" },
            { letter: "C", text: "emailing to cancel a shift early" },
            { letter: "D", text: "missing two shifts without warning" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-s-info-sourdough",
      family: "G11",
      title: "What Makes Sourdough Rise",
      kind: "Informational · 11.RI",
      blurb: "No packet of yeast, just a jar of flour and water and the living colony that moves in.",
      level: 1,
      passage:
        "<p>" + N(1) + "A loaf of sourdough bread rises without a single packet of yeast from the store. " +
        N(2) + "Instead, the baker keeps a \"starter,\" a jar of flour and water left open to the air. " +
        N(3) + "Wild yeast and bacteria, which drift in from the kitchen and the flour itself, settle in the jar and begin to feed. " +
        N(4) + "The yeast produce carbon dioxide, which forms the bubbles that lift the dough. " +
        N(5) + "The bacteria produce acids, which give the bread its tangy taste and, as a bonus, keep unwanted molds away. " +
        N(6) + "A starter must be fed fresh flour every day or two, or the hungry colony weakens. " +
        N(7) + "Some bakers keep starters that are decades old, passed from one kitchen to the next like a family recipe. " +
        N(8) + "The bread they make is slower than the supermarket kind, but every loaf carries a small, living history." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "Which statement best summarizes the central idea of the passage?",
          choices: [
            { letter: "A", text: "Sourdough bread tastes better than any store-bought loaf." },
            { letter: "B", text: "Sourdough rises thanks to wild yeast and bacteria kept in a starter." },
            { letter: "C", text: "Bakers must feed their starters at least once every day." },
            { letter: "D", text: "Bread grows mold quickly unless it contains acids." }
          ],
          correct: "B"
        },
        {
          id: "bubbles",
          sol: "11.RI.1.C",
          stem: "According to the passage, what makes the bubbles that lift the dough?",
          choices: [
            { letter: "A", text: "acids from the bacteria" },
            { letter: "B", text: "fresh flour added daily" },
            { letter: "C", text: "carbon dioxide from the yeast" },
            { letter: "D", text: "air left in the open jar" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "11.RI.1.B",
          stem: "Sentences 4 and 5 are structured to —",
          choices: [
            { letter: "A", text: "show what each of two organisms contributes" },
            { letter: "B", text: "list the steps for baking a single loaf" },
            { letter: "C", text: "argue that sourdough needs a longer rise" },
            { letter: "D", text: "trace the history of sourdough baking" }
          ],
          correct: "A"
        },
        {
          id: "colony",
          sol: "11.RI.2.C",
          stem: "In sentence 6, the word colony refers to —",
          choices: [
            { letter: "A", text: "the baker's kitchen and its tools" },
            { letter: "B", text: "the yeast and bacteria living in the jar" },
            { letter: "C", text: "the fresh flour added to the mixture" },
            { letter: "D", text: "a group of bakers who share recipes" }
          ],
          correct: "B"
        },
        {
          id: "recipe",
          sol: "11.RI.2.A",
          stem: "The comparison to \"a family recipe\" in sentence 7 emphasizes that starters —",
          choices: [
            { letter: "A", text: "are written down in cookbooks" },
            { letter: "B", text: "taste the same in every kitchen" },
            { letter: "C", text: "are handed down and valued over time" },
            { letter: "D", text: "are difficult for beginners to make" }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "11.RI.2.B",
          stem: "Based on sentence 8, the author's attitude toward sourdough's slowness is —",
          choices: [
            { letter: "A", text: "impatient, since faster bread is better" },
            { letter: "B", text: "dismissive, since the taste is the same" },
            { letter: "C", text: "worried, since starters weaken so quickly" },
            { letter: "D", text: "accepting, since it comes with something worthwhile" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-s-vocab-museum",
      family: "G11",
      title: "The Museum Desk",
      kind: "Vocabulary · 11.RV",
      blurb: "A summer job stamping tickets, a skeleton built from three animals, and four target words in context.",
      level: 1,
      passage:
        "<p>" + N(1) + "Nadia's summer job at the natural history museum was mostly <strong>mundane</strong>: stamping tickets, pointing out restrooms, answering the same six questions a hundred times a day. " +
        N(2) + "On slow afternoons she wandered the fossil hall, where a plaque explained that the giant skeleton at the center was a <strong>composite</strong>, assembled from the bones of three different animals of the same species. " +
        N(3) + "Visitors rarely read the plaque. " +
        N(4) + "One boy stood in front of the skeleton for twenty minutes, <strong>scrutinizing</strong> every rib and joint as if he expected to find a mistake. " +
        N(5) + "When he finally asked whether all the bones came from one creature, Nadia felt a small thrill at being able to say no, and to explain why. " +
        N(6) + "She realized the job's <strong>monotony</strong> had a hidden benefit: she had learned every plaque in the building, and once in a while somebody wanted to know." +
        "</p>",
      claims: [
        {
          id: "mundane",
          sol: "11.RV.1.B",
          stem: "In sentence 1, the word mundane most nearly means —",
          choices: [
            { letter: "A", text: "unusually dangerous" },
            { letter: "B", text: "ordinary and dull" },
            { letter: "C", text: "surprisingly well paid" },
            { letter: "D", text: "highly scientific" }
          ],
          correct: "B"
        },
        {
          id: "mundane-clue",
          sol: "11.RV.1.C",
          stem: "The list after the colon in sentence 1 helps a reader understand mundane by —",
          choices: [
            { letter: "A", text: "giving examples of repetitive tasks" },
            { letter: "B", text: "naming the museum's main exhibits" },
            { letter: "C", text: "explaining how tickets are stamped" },
            { letter: "D", text: "describing the museum's visitors" }
          ],
          correct: "A"
        },
        {
          id: "composite",
          sol: "11.RV.1.B",
          stem: "Sentence 2 shows that a composite is something —",
          choices: [
            { letter: "A", text: "found buried all in a single piece" },
            { letter: "B", text: "put together from several separate sources" },
            { letter: "C", text: "displayed at the exact center of a hall" },
            { letter: "D", text: "discovered by a team of three scientists" }
          ],
          correct: "B"
        },
        {
          id: "scrutinizing",
          sol: "11.RV.1.C",
          stem: "In sentence 4, the phrase \"as if he expected to find a mistake\" helps show that scrutinizing means —",
          choices: [
            { letter: "A", text: "glancing at quickly" },
            { letter: "B", text: "taking photographs of" },
            { letter: "C", text: "examining very closely" },
            { letter: "D", text: "ignoring on purpose" }
          ],
          correct: "C"
        },
        {
          id: "related",
          sol: "11.RV.1.A",
          stem: "The words mundane (sentence 1) and monotony (sentence 6) are related in meaning because both describe —",
          choices: [
            { letter: "A", text: "a lack of variety" },
            { letter: "B", text: "a branch of science" },
            { letter: "C", text: "a museum building" },
            { letter: "D", text: "a feeling of pride" }
          ],
          correct: "A"
        },
        {
          id: "thrill",
          sol: "10.RV.1.A",
          stem: "In sentence 5, the word thrill has a connotation that is —",
          choices: [
            { letter: "A", text: "clearly fearful" },
            { letter: "B", text: "mildly negative" },
            { letter: "C", text: "purely neutral" },
            { letter: "D", text: "strongly positive" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-s-dsr-rooftop",
      family: "G11",
      title: "The Rooftop Garden, Two Ways",
      kind: "Paired texts · 11.DSR",
      blurb: "A student blog celebrates the rooftop garden; a facilities report checks the roof, the barrel, and the weight.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Excerpt from a Student's Blog</strong></p>" +
        "<p>" + N(1) + "When our science teacher proposed a garden on the roof of the annex, half the class laughed. " +
        N(2) + "A roof is hot, windy, and four floors from a hose. " +
        N(3) + "But by May we had six raised beds, a rain barrel fed by the gutter, and more lettuce than the cafeteria could use. " +
        N(4) + "The best part was not the lettuce. " +
        N(5) + "It was watching people who had never touched soil argue about tomatoes. " +
        N(6) + "The roof gave us a reason to talk.</p>" +
        "<p><strong>Text 2 — Facilities Report, End of Year</strong></p>" +
        "<p>" + N(7) + "The annex rooftop garden was inspected in June. " +
        N(8) + "The six beds are sound, but the added weight of wet soil is near the limit the roof was designed to carry, and no further beds should be installed. " +
        N(9) + "The rain barrel overflowed twice during storms, sending water down the stairwell. " +
        N(10) + "Facilities recommends a lid and an overflow hose before fall. " +
        N(11) + "Student use of the roof was orderly; no safety incidents were reported." +
        "</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.DSR.D",
          stem: "How do the purposes of the two texts differ?",
          choices: [
            { letter: "A", text: "Text 1 celebrates what the garden meant to students; Text 2 assesses its condition." },
            { letter: "B", text: "Text 1 argues against keeping the garden; Text 2 argues for expanding it." },
            { letter: "C", text: "Text 1 explains the roof's weight limit; Text 2 explains the lettuce harvest." },
            { letter: "D", text: "Text 1 was written for the facilities staff; Text 2 was written for students." }
          ],
          correct: "A"
        },
        {
          id: "complicate",
          sol: "11.DSR.E",
          stem: "Which detail from Text 2 would most complicate a plan to expand the garden?",
          choices: [
            { letter: "A", text: "the inspection took place in June" },
            { letter: "B", text: "no safety incidents were reported" },
            { letter: "C", text: "the roof is near its weight limit" },
            { letter: "D", text: "student use of the roof was orderly" }
          ],
          correct: "C"
        },
        {
          id: "shared",
          sol: "11.DSR.D",
          stem: "Both texts provide support for the idea that —",
          choices: [
            { letter: "A", text: "the garden produced far too much lettuce for the school" },
            { letter: "B", text: "the rain barrel turned out to be the garden's best feature" },
            { letter: "C", text: "the class remained divided about the garden all year" },
            { letter: "D", text: "the garden was built and used successfully during the year" }
          ],
          correct: "D"
        },
        {
          id: "mainpoint",
          sol: "11.DSR.E",
          stem: "Which sentence in Text 1 most directly states the writer's main point?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 6" },
            { letter: "D", text: "sentence 4" }
          ],
          correct: "C"
        },
        {
          id: "only2",
          sol: "10.DSR.E",
          stem: "Select TWO details that appear in Text 2 but not in Text 1.",
          choices: [
            { letter: "A", text: "The garden has six raised beds." },
            { letter: "B", text: "The rain barrel overflowed during storms." },
            { letter: "C", text: "The barrel is fed by the gutter." },
            { letter: "D", text: "Facilities recommends a lid and an overflow hose." }
          ],
          correct: ["B", "D"]
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          stem: "Compared with Text 1, the tone of Text 2 is more —",
          choices: [
            { letter: "A", text: "playful" },
            { letter: "B", text: "objective" },
            { letter: "C", text: "anxious" },
            { letter: "D", text: "sarcastic" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
