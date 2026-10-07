/* SOL Labyrinth — Grade 10 mid-tier packs (v5.15 expansion, content74): a coral reef, a tutoring program,
 * coastal tide pools and a school robotics club. Original text only; no VDOE / copyrighted material.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1. Literary · tide pools (level 1) ───────────── */
    {
      id: "g10-rl-c74-low-tide-census",
      family: "G10",
      title: "The Census at Low Tide",
      kind: "Literary · 10.RL",
      blurb: "Tomi only agreed to carry her grandmother's clipboard, not to enjoy the tide pool count.",
      level: 1,
      passage:
        "<p>" + N(1) + "The tide chart said low water would come at 6:42 a.m., so Tomi Faleolo was standing on the wet black rocks of Kalama Point before the sun had cleared the hills. " +
        N(2) + "Her grandmother, Losa, had counted the creatures in the same six tide pools every spring for nineteen years, and this year she had asked Tomi to carry the clipboard. " +
        N(3) + "Tomi had agreed mostly because her grandmother's knees no longer liked the slippery rocks. " +
        N(4) + "She had not agreed to enjoy it.</p>" +
        "<p>" + N(5) + "The first pool was the size of a bathtub and crowded with green anemones, which closed like fists when Tomi's shadow crossed them. " +
        N(6) + "\"Twelve,\" Tomi announced after a quick glance. " +
        N(7) + "Losa did not look at the clipboard. " +
        N(8) + "She lowered herself onto a flat rock and stared at the water as if it were a television show she had waited all week to watch. " +
        N(9) + "\"Count again,\" she said. " +
        N(10) + "Tomi sighed loudly enough for the gulls to hear, but she crouched and counted again, and this time she found fifteen, three of them tucked under a ledge.</p>" +
        "<p>" + N(11) + "By the fourth pool, the sun was warm on Tomi's neck, and the tide was already creeping back over the outer rocks. " +
        N(12) + "She was hurrying, skipping the cracks, when something orange caught the corner of her eye. " +
        N(13) + "Wedged in a crevice no wider than a pencil was a sea star smaller than a bottle cap. " +
        N(14) + "Four of its arms were full and fat, but the fifth was a tiny bud, like the first leaf of a seedling. " +
        N(15) + "\"It's growing one back,\" Tomi whispered, and she was surprised to hear that she was whispering.</p>" +
        "<p>" + N(16) + "Losa leaned over her shoulder and smiled. " +
        N(17) + "\"Six years ago, the sea stars in these pools nearly disappeared,\" she said. " +
        N(18) + "\"Every spring since then, I have been looking for a small one.\" " +
        N(19) + "She took the pencil from Tomi's hand and, in the margin of the clipboard, drew a careful star with one short arm.</p>" +
        "<p>" + N(20) + "They finished the last two pools with the water lapping at their boots. " +
        N(21) + "On the walk back to the car, Tomi carried the clipboard against her chest instead of under her arm. " +
        N(22) + "She was already wondering what the fourth pool would hold next spring." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does Tomi's morning at Kalama Point best develop?",
          choices: [
            { letter: "A", text: "Slowing down can reveal what hurrying overlooks." },
            { letter: "B", text: "Older people always understand nature better." },
            { letter: "C", text: "Scientific work matters most when done quickly." },
            { letter: "D", text: "Family traditions feel like chores until they end." }
          ],
          correct: "A"
        },
        {
          id: "char",
          sol: "10.RL.1.C",
          stem: "In sentences 3 and 4, Tomi is best described as —",
          choices: [
            { letter: "A", text: "eager to learn about the creatures in the pools" },
            { letter: "B", text: "willing to help but unwilling to enjoy the task" },
            { letter: "C", text: "worried that her grandmother will fall on the rocks" },
            { letter: "D", text: "annoyed that she had to wake up before sunrise" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in Tomi's attitude toward the tide pool count?",
          choices: [
            { letter: "A", text: "Sentence 10, when she counts the anemones a second time" },
            { letter: "B", text: "Sentence 12, when she hurries past the cracks in the rock" },
            { letter: "C", text: "Sentence 15, when she notices that she is whispering" },
            { letter: "D", text: "Sentence 20, when the tide reaches the tops of their boots" }
          ],
          correct: "C"
        },
        {
          id: "crevice",
          sol: "10.RV.1.C",
          stem: "In sentence 13, the word crevice most nearly means —",
          choices: [
            { letter: "A", text: "a pool of trapped seawater" },
            { letter: "B", text: "a narrow opening in rock" },
            { letter: "C", text: "a smooth, flat stone ledge" },
            { letter: "D", text: "a patch of loose wet sand" }
          ],
          correct: "B"
        },
        {
          id: "seedling",
          sol: "10.RL.2.A",
          stem: "In sentence 14, comparing the sea star's fifth arm to the first leaf of a seedling suggests that the arm is —",
          choices: [
            { letter: "A", text: "fragile and likely to break off soon" },
            { letter: "B", text: "brightly colored like a spring plant" },
            { letter: "C", text: "small but a sign of new growth" },
            { letter: "D", text: "oddly shaped compared with the rest" }
          ],
          correct: "C"
        },
        {
          id: "drawing",
          sol: "10.RL.3.A",
          stem: "The author includes Losa's drawing in the margin of the clipboard (sentence 19) mainly to —",
          choices: [
            { letter: "A", text: "show that Losa does not trust Tomi's handwriting" },
            { letter: "B", text: "explain how counters record animals they cannot see" },
            { letter: "C", text: "reveal that Losa has grown tired of the census" },
            { letter: "D", text: "suggest that the small sea star means a great deal to her" }
          ],
          correct: "D"
        },
        {
          id: "creeping",
          sol: "10.RV.1.D",
          stem: "The author writes that the tide was creeping back in sentence 11. Compared with coming, the word creeping suggests that the water was moving —",
          choices: [
            { letter: "A", text: "slowly and almost without being noticed" },
            { letter: "B", text: "violently and with real danger to them" },
            { letter: "C", text: "noisily, in waves that crashed on rocks" },
            { letter: "D", text: "unpredictably, in swirling circles" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 2. Literary · robotics club (level 2) ───────────── */
    {
      id: "g10-rl-c74-the-gripper",
      family: "G10",
      title: "The Gripper",
      kind: "Literary · 10.RL",
      blurb: "Darek's three-fingered gripper is his masterpiece, until it starts reaching for the referees.",
      level: 2,
      passage:
        "<p>" + N(1) + "For eleven weeks, Darek Nowak had built the gripper the way some people build ships in bottles: slowly, privately, and with tweezers. " +
        N(2) + "It had three fingers, six tiny motors, and a sensor that could tell a foam cube from a rubber ball. " +
        N(3) + "When Yesenia Ortiz, a freshman, had suggested in October that a bent aluminum hook might grab the game pieces just as well, Darek had laughed before he could stop himself. " +
        N(4) + "Yesenia had not suggested anything since.</p>" +
        "<p>" + N(5) + "At the Tri-County Robotics Qualifier, the gym smelled like popcorn and hot solder. " +
        N(6) + "In the first match, the gripper performed beautifully, closing around each cube with a soft click that made Darek grin. " +
        N(7) + "In the second match, one finger locked halfway open. " +
        N(8) + "In the third, the sensor mistook a referee's orange shirt for a game piece, and the robot spent forty seconds reaching politely toward the sideline while the crowd laughed.</p>" +
        "<p>" + N(9) + "Back in the pit, Imani Brooks, the team captain, checked the schedule. " +
        N(10) + "\"We have one more match in thirty-five minutes,\" she said. " +
        N(11) + "\"If we lose it, we go home.\" " +
        N(12) + "Darek opened his laptop and began scrolling through code, hunting for the error he was sure he could fix. " +
        N(13) + "Mr. Halvorsen, their mentor, said nothing, which was what he always said when he wanted the students to decide.</p>" +
        "<p>" + N(14) + "Darek looked up and saw Yesenia at the end of the table, turning something over in her hands. " +
        N(15) + "It was a strip of aluminum, bent into a curve like a shepherd's crook, with two holes drilled neatly in one end. " +
        N(16) + "She had made it anyway, he realized, and carried it in her backpack for weeks.</p>" +
        "<p>" + N(17) + "The silence at the table stretched until it felt like a held breath. " +
        N(18) + "Then Darek closed his laptop. " +
        N(19) + "\"Can you mount it in twenty minutes?\" he asked. " +
        N(20) + "Yesenia nodded, already reaching for a screwdriver.</p>" +
        "<p>" + N(21) + "The hook was not elegant. " +
        N(22) + "It scraped, it wobbled, and once it flung a cube into the bleachers. " +
        N(23) + "But it never locked, and it never mistook anyone's shirt for anything, and the team won the final match by six points. " +
        N(24) + "That night, Darek wrote a new line at the top of the team's design notebook: Ask the quiet people first." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is developed through Darek's choice between his gripper and Yesenia's hook?",
          choices: [
            { letter: "A", text: "Pride can keep a person from hearing good ideas." },
            { letter: "B", text: "Competition tends to divide even close teammates." },
            { letter: "C", text: "Experienced members should make the hard choices." },
            { letter: "D", text: "Machines fail most often when people are watching." }
          ],
          correct: "A"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict of the qualifier story is best described as a struggle between —",
          choices: [
            { letter: "A", text: "Imani and Mr. Halvorsen over who should lead the team" },
            { letter: "B", text: "Darek's attachment to his design and the team's need to win" },
            { letter: "C", text: "the robotics team and a rival team from another county" },
            { letter: "D", text: "Yesenia's shyness and her wish to drive in a match" }
          ],
          correct: "B"
        },
        {
          id: "since",
          sol: "10.RL.1.C",
          stem: "Sentence 4, Yesenia had not suggested anything since, reveals that Darek's laugh —",
          choices: [
            { letter: "A", text: "pushed Yesenia to build a robot of her own" },
            { letter: "B", text: "made the rest of the team laugh at her too" },
            { letter: "C", text: "discouraged Yesenia from sharing her ideas" },
            { letter: "D", text: "convinced Yesenia that her hook would fail" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation at the Tri-County Robotics Qualifier is most ironic?",
          choices: [
            { letter: "A", text: "The gym smells like popcorn and hot solder all day." },
            { letter: "B", text: "Imani checks the match schedule during the break." },
            { letter: "C", text: "Mr. Halvorsen stays silent while the students decide." },
            { letter: "D", text: "The hook Darek once laughed at saves the team." }
          ],
          correct: "D"
        },
        {
          id: "breath",
          sol: "10.RL.2.B",
          stem: "In sentence 17, describing the silence at the pit table as a held breath mainly creates a mood of —",
          choices: [
            { letter: "A", text: "quiet relief" },
            { letter: "B", text: "tense suspense" },
            { letter: "C", text: "gloomy defeat" },
            { letter: "D", text: "playful mischief" }
          ],
          correct: "B"
        },
        {
          id: "bottles",
          sol: "10.RL.3.A",
          stem: "The author opens with the comparison to building ships in bottles mainly to —",
          choices: [
            { letter: "A", text: "foreshadow that the robot will be broken at the qualifier" },
            { letter: "B", text: "explain that Darek has a hobby outside of robotics" },
            { letter: "C", text: "suggest that the gripper was too small to be useful" },
            { letter: "D", text: "show how carefully and privately Darek guarded his work" }
          ],
          correct: "D"
        },
        {
          id: "elegant",
          sol: "10.RV.1.B",
          stem: "Sentences 21 and 22 help the reader understand that elegant most nearly means —",
          choices: [
            { letter: "A", text: "strong and heavy" },
            { letter: "B", text: "cheap to replace" },
            { letter: "C", text: "graceful and refined" },
            { letter: "D", text: "quick to assemble" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 3. Literary · tutoring program (level 3) ───────────── */
    {
      id: "g10-rl-c74-bridge-hour",
      family: "G10",
      title: "Bridge Hour",
      kind: "Literary · 10.RL",
      blurb: "Keziah expects tutoring chemistry to be easy; her student has other plans.",
      level: 3,
      passage:
        "<p>" + N(1) + "Keziah Mensah had signed up for the Bridge Hour tutoring program for the same reason she had joined four other clubs: it would look good in a paragraph someday. " +
        N(2) + "She was a senior with a near-perfect chemistry grade, and she assumed that explaining chemistry would be like reciting a poem she already knew by heart. " +
        N(3) + "Her first student, a sophomore named Rafael Quintero, arrived each Tuesday with his notebook closed and his hood up, as if the library were a bus stop he was waiting to leave.</p>" +
        "<p>" + N(4) + "For three weeks Keziah explained limiting reactants exactly the way Ms. Farrow had explained them to her: the equation, the ratio, the arrow, the answer. " +
        N(5) + "Rafael copied every step. " +
        N(6) + "Then he got every quiz problem wrong in a brand-new way, which Keziah found almost impressive.</p>" +
        "<p>" + N(7) + "In the fourth week, she lost patience. " +
        N(8) + "\"It's simple,\" she said, tapping the equation harder than she meant to. " +
        N(9) + "\"Which one runs out first?\" " +
        N(10) + "Rafael pushed back his hood. " +
        N(11) + "\"Runs out of what, though?\" he asked. " +
        N(12) + "\"At my aunt's restaurant, if we have forty pounds of masa and ten pounds of cheese, it doesn't matter how much masa we have. " +
        N(13) + "We stop making pupusas when the cheese is gone.\"</p>" +
        "<p>" + N(14) + "Keziah opened her mouth to correct him and found there was nothing to correct. " +
        N(15) + "He had described the idea more clearly than she ever had. " +
        N(16) + "Worse, he had described it more clearly than she had ever understood it; she had been carrying the method around like a key to a door she had never walked through.</p>" +
        "<p>" + N(17) + "They spent the rest of the hour rewriting quiz problems as restaurant orders: so many tortillas, so many fillings, so many customers in line. " +
        N(18) + "Rafael laughed when Keziah ran out of imaginary cheese in her own example. " +
        N(19) + "On the next quiz, he earned an eighty-four.</p>" +
        "<p>" + N(20) + "When the coordinator asked tutors for a short reflection at the end of the semester, Keziah sat in front of the blank form for a long time. " +
        N(21) + "Finally she wrote one sentence: \"I was assigned to teach Rafael, and I am still not sure which of us was the tutor.\"" +
        "</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in Keziah's Tuesday sessions is most ironic?",
          choices: [
            { letter: "A", text: "Rafael copies every step yet still misses the quiz problems." },
            { letter: "B", text: "The student she was sent to teach helps her truly understand." },
            { letter: "C", text: "Keziah joins the program mainly to improve her applications." },
            { letter: "D", text: "The coordinator asks the tutors to write a short reflection." }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "10.RL.1.C",
          stem: "In sentences 1 and 2, Keziah is best described as —",
          choices: [
            { letter: "A", text: "confident and focused on how her work will look to others" },
            { letter: "B", text: "nervous about working with a student she does not know" },
            { letter: "C", text: "generous with time she would rather give to her clubs" },
            { letter: "D", text: "doubtful that chemistry can ever be explained simply" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does Keziah's experience with Rafael best support?",
          choices: [
            { letter: "A", text: "Good grades are the best proof of what a student knows." },
            { letter: "B", text: "Patience matters more than skill when helping others." },
            { letter: "C", text: "Ideas from home rarely fit the lessons taught at school." },
            { letter: "D", text: "Truly understanding an idea differs from repeating it." }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The author ends the story with Keziah's one-sentence reflection mainly to —",
          choices: [
            { letter: "A", text: "emphasize how fully her view of her own role has changed" },
            { letter: "B", text: "show that she did not take the coordinator's form seriously" },
            { letter: "C", text: "suggest that Rafael will become a tutor himself next year" },
            { letter: "D", text: "explain why the program asks tutors to write reflections" }
          ],
          correct: "A"
        },
        {
          id: "key",
          sol: "10.RL.2.B",
          stem: "In sentence 16, the image of carrying a key to a door she had never walked through suggests that Keziah —",
          choices: [
            { letter: "A", text: "had been too proud to ask Ms. Farrow for extra help" },
            { letter: "B", text: "had planned all along to quit the tutoring program" },
            { letter: "C", text: "had memorized a procedure without grasping its meaning" },
            { letter: "D", text: "had kept her best study methods secret from classmates" }
          ],
          correct: "C"
        },
        {
          id: "impressive",
          sol: "10.RV.1.D",
          stem: "In sentence 6, the narrator says Keziah found Rafael's wrong answers almost impressive rather than frustrating. The word impressive gives the sentence a tone that is —",
          choices: [
            { letter: "A", text: "openly angry" },
            { letter: "B", text: "wry and amused" },
            { letter: "C", text: "deeply admiring" },
            { letter: "D", text: "anxious and fearful" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in Keziah's understanding of limiting reactants?",
          choices: [
            { letter: "A", text: "Sentence 5, when Rafael copies each step of the method" },
            { letter: "B", text: "Sentence 8, when Keziah taps the equation in frustration" },
            { letter: "C", text: "Sentence 14, when Keziah finds nothing in his answer to fix" },
            { letter: "D", text: "Sentence 19, when Rafael earns an eighty-four on a quiz" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 4. Literary · coral reef (level 2) ───────────── */
    {
      id: "g10-rl-c74-maya-bituin",
      family: "G10",
      title: "Between the Glove and the Coral",
      kind: "Literary · 10.RL",
      blurb: "Kin finally gets to give the safety talk on his uncle's dive boat, and a guest tests it.",
      level: 2,
      passage:
        "<p>" + N(1) + "Joaquin Dela Cruz had worked on his uncle's dive boat, the Maya Bituin, for three summers, but this was the first summer Tito Ramon had let him give the safety talk. " +
        N(2) + "Kin had practiced it until he could say it without notes: check your air, stay with your buddy, and never touch the coral. " +
        N(3) + "The last rule mattered most to his uncle, because the reef off Marikit Island had taken forty years to recover from the dynamite fishing of his grandfather's time.</p>" +
        "<p>" + N(4) + "On Thursday, the boat carried a family from Hamburg, the Brandts. " +
        N(5) + "Mr. Brandt listened to the talk with his arms crossed and his sunglasses on. " +
        N(6) + "\"Coral is rock,\" he said when Kin finished. \"I have touched rock before.\" " +
        N(7) + "His daughter, Elke, who looked about Kin's age, studied the deck.</p>" +
        "<p>" + N(8) + "Underwater, the reef opened beneath them like a city seen from an airplane: towers of staghorn, rounded domes of brain coral, streets of sand where parrotfish grazed. " +
        N(9) + "Kin kept one eye on the fish and the other on Mr. Brandt. " +
        N(10) + "Near a ridge, he saw the man reach a gloved hand toward a branching coral the color of lilacs.</p>" +
        "<p>" + N(11) + "Kin's heart thudded against his wetsuit. " +
        N(12) + "He was sixteen, and Mr. Brandt was a paying guest who had already made clear what he thought of rules. " +
        N(13) + "Then Kin swam forward, placed himself between the glove and the coral, and slowly shook his head. " +
        N(14) + "For a long moment, the two of them hung in the blue, staring at each other through their masks. " +
        N(15) + "Mr. Brandt lowered his hand.</p>" +
        "<p>" + N(16) + "Back on deck, Kin waited to be scolded, by the guest or by his uncle. " +
        N(17) + "Instead, Elke held up her camera. " +
        N(18) + "She had photographed a patch of coral farther down the ridge that was pale as chalk. " +
        N(19) + "\"Why is that one white?\" she asked. " +
        N(20) + "Tito Ramon explained that warm water had stressed it, and that a single touch could push a weakened coral over the edge. " +
        N(21) + "Mr. Brandt took off his sunglasses and looked at the photo for a long time. " +
        N(22) + "Before the family left, he asked Kin to write down the name of the reef monitoring group." +
        "</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The tension during the dive near the ridge comes mainly from —",
          choices: [
            { letter: "A", text: "Kin's need to protect the coral without offending a guest" },
            { letter: "B", text: "the danger of running low on air far from the boat" },
            { letter: "C", text: "Elke's wish to take photographs instead of swimming" },
            { letter: "D", text: "Tito Ramon's doubts about Kin's skill as a guide" }
          ],
          correct: "A"
        },
        {
          id: "city",
          sol: "10.RL.2.A",
          stem: "In sentence 8, comparing the reef to a city seen from an airplane mainly suggests that the reef is —",
          choices: [
            { letter: "A", text: "crowded with too many divers and boats" },
            { letter: "B", text: "vast, varied, and full of busy life" },
            { letter: "C", text: "difficult and dangerous to swim through" },
            { letter: "D", text: "gray and lifeless compared with land" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does Kin's encounter with Mr. Brandt best convey?",
          choices: [
            { letter: "A", text: "Young people should not correct adults in public." },
            { letter: "B", text: "Visitors rarely respect places that are not theirs." },
            { letter: "C", text: "Quiet courage can change another person's mind." },
            { letter: "D", text: "Rules matter less than keeping customers happy." }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "In sentence 14, the image of Kin and Mr. Brandt hanging in the blue and staring through their masks mainly creates a mood of —",
          choices: [
            { letter: "A", text: "playful teasing" },
            { letter: "B", text: "calm relief" },
            { letter: "C", text: "sorrowful loss" },
            { letter: "D", text: "tense standoff" }
          ],
          correct: "D"
        },
        {
          id: "brandt",
          sol: "10.RL.1.C",
          stem: "Mr. Brandt's actions in sentences 21 and 22 show that he —",
          choices: [
            { letter: "A", text: "plans to complain to Tito Ramon about Kin" },
            { letter: "B", text: "wants Elke to stop photographing the reef" },
            { letter: "C", text: "still believes that coral is only rock" },
            { letter: "D", text: "has begun to take the reef's fragility seriously" }
          ],
          correct: "D"
        },
        {
          id: "edge",
          sol: "10.RV.1.C",
          stem: "In sentence 20, the phrase push a weakened coral over the edge most nearly means —",
          choices: [
            { letter: "A", text: "cause an already struggling coral to die" },
            { letter: "B", text: "move a coral to a deeper part of the reef" },
            { letter: "C", text: "break a branch off the top of a coral" },
            { letter: "D", text: "turn a healthy coral a different color" }
          ],
          correct: "A"
        },
        {
          id: "history",
          sol: "10.RL.3.A",
          stem: "The author includes the history of dynamite fishing in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "show that Kin's family once harmed the reef" },
            { letter: "B", text: "describe how fishing methods changed over time" },
            { letter: "C", text: "explain why the no-touch rule matters so much" },
            { letter: "D", text: "suggest that the reef can no longer recover" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 5. Informational · coral reef (level 1) ───────────── */
    {
      id: "g10-ri-c74-coral-nursery",
      family: "G10",
      title: "Gardens Under the Sea",
      kind: "Informational · 10.RI",
      blurb: "Divers in Bahía Clara grow coral on underwater frames to help a bleached reef recover.",
      level: 1,
      passage:
        "<p>" + N(1) + "A coral reef looks like stone, but it is built by animals. " +
        N(2) + "Each coral colony is made of thousands of tiny creatures called polyps, and each polyp is smaller than a grain of rice. " +
        N(3) + "Over centuries, polyps lay down limestone skeletons, layer upon layer, until they form ridges large enough to shelter a quarter of all ocean fish species. " +
        N(4) + "That slow work can be undone quickly. " +
        N(5) + "When ocean water stays too warm for too long, corals expel the colorful algae that live inside them and supply most of their food. " +
        N(6) + "Without the algae, the corals turn white, a condition called bleaching, and many of them starve.</p>" +
        "<p>" + N(7) + "In the shallow bay of Bahía Clara, a team of divers is trying to speed up the reef's recovery. " +
        N(8) + "Their method borrows an idea from farming. " +
        N(9) + "First, divers clip small fragments from healthy corals that survived the last heat wave. " +
        N(10) + "Next, they hang the fragments on underwater frames shaped like tree branches, where the pieces grow without being buried by sand or nibbled by fish. " +
        N(11) + "After about a year, each fragment has grown large enough to be cemented onto a damaged part of the reef.</p>" +
        "<p>" + N(12) + "The nursery has advantages over simply waiting for nature. " +
        N(13) + "Coral fragments on the frames grow faster than wild ones because they are clean, evenly lit, and protected. " +
        N(14) + "Choosing survivors of past heat waves may also produce reefs better able to handle warm water in the future. " +
        N(15) + "\"We are not building a reef,\" says Lucía Arambarri, who manages the project. " +
        N(16) + "\"We are giving the reef a head start.\"</p>" +
        "<p>" + N(17) + "Arambarri is careful not to promise too much, however. " +
        N(18) + "A single nursery can replant only a few thousand fragments a year, while a warm summer can bleach millions of corals in weeks. " +
        N(19) + "Restoration, she explains, works only alongside efforts to keep ocean water cool and clean. " +
        N(20) + "Still, the divers report one encouraging sign: on the oldest replanted sections, parrotfish and damselfish have returned, grazing among corals where there was once only bare white rubble." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about the Bahía Clara divers?",
          choices: [
            { letter: "A", text: "Warm water is the only reason that coral reefs are in danger." },
            { letter: "B", text: "Coral nurseries can help reefs recover but cannot do it alone." },
            { letter: "C", text: "Farming methods work better underwater than they do on land." },
            { letter: "D", text: "Parrotfish and damselfish are the best signs of a healthy reef." }
          ],
          correct: "B"
        },
        {
          id: "steps",
          sol: "10.RI.2.A",
          stem: "Sentences 9 through 11 of the coral article are organized mainly as —",
          choices: [
            { letter: "A", text: "a sequence of steps in a process" },
            { letter: "B", text: "a comparison of two different reefs" },
            { letter: "C", text: "a problem followed by its causes" },
            { letter: "D", text: "a list of opinions from several experts" }
          ],
          correct: "A"
        },
        {
          id: "advantage",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the idea that nursery-grown corals have an advantage over wild ones?",
          choices: [
            { letter: "A", text: "Sentence 3, about polyps building ridges over centuries" },
            { letter: "B", text: "Sentence 6, about corals turning white and starving" },
            { letter: "C", text: "Sentence 13, about fragments that are clean and protected" },
            { letter: "D", text: "Sentence 18, about how many fragments a nursery replants" }
          ],
          correct: "C"
        },
        {
          id: "limits",
          sol: "10.RI.1.C",
          stem: "The author includes the comparison of thousands of fragments with millions of corals in sentence 18 mainly to —",
          choices: [
            { letter: "A", text: "show the limits of what one nursery can achieve" },
            { letter: "B", text: "argue that reef restoration should be abandoned" },
            { letter: "C", text: "explain how ocean heat waves begin each summer" },
            { letter: "D", text: "praise Arambarri for her careful record keeping" }
          ],
          correct: "A"
        },
        {
          id: "headstart",
          sol: "10.RI.2.B",
          stem: "Arambarri's statement that the project is giving the reef a head start (sentence 16) mainly suggests that the divers —",
          choices: [
            { letter: "A", text: "expect to rebuild the whole reef within one year" },
            { letter: "B", text: "are racing other teams to finish their work first" },
            { letter: "C", text: "believe the reef can never recover on its own" },
            { letter: "D", text: "help recovery begin, but the reef must do the rest" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's tone in the final paragraph of the coral nursery article is best described as —",
          choices: [
            { letter: "A", text: "bitterly discouraged" },
            { letter: "B", text: "carelessly cheerful" },
            { letter: "C", text: "cautiously hopeful" },
            { letter: "D", text: "coldly uninterested" }
          ],
          correct: "C"
        },
        {
          id: "restore",
          sol: "10.RV.1.A",
          stem: "The word restoration in sentence 19 begins with the prefix re-, as in rebuild and replant. Based on this, restoration most nearly means —",
          choices: [
            { letter: "A", text: "keeping something safe for later use" },
            { letter: "B", text: "bringing something back to a former state" },
            { letter: "C", text: "studying something closely over time" },
            { letter: "D", text: "moving something to a brand-new place" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 6. Informational · tide pools (level 2) ───────────── */
    {
      id: "g10-ri-c74-shore-stripes",
      family: "G10",
      title: "Stripes on the Shore",
      kind: "Informational · 10.RI",
      blurb: "Why do tide pool animals line up in bands along a rocky shore? The answer surprised scientists.",
      level: 2,
      passage:
        "<p>" + N(1) + "Twice a day, the ocean pulls back from the rocky shore and then returns, and the creatures living between the high-tide line and the low-tide line must survive both worlds. " +
        N(2) + "For several hours they are underwater, rocked by waves; for several more, they sit exposed to sun, wind, and hungry birds. " +
        N(3) + "Few habitats on Earth change so completely, so often. " +
        N(4) + "Biologists who study these shores have noticed that the animals do not spread out randomly. " +
        N(5) + "Instead, they sort themselves into bands, called zones, that run along the shore like stripes on a flag.</p>" +
        "<p>" + N(6) + "The highest band, the splash zone, is wet only when waves throw spray onto it. " +
        N(7) + "Here live periwinkle snails and acorn barnacles, which can seal themselves shut and wait out hours of dry air. " +
        N(8) + "Lower down, in the middle zone, mussels crowd together in dense beds, and their closeness helps each one hold moisture. " +
        N(9) + "Lowest of all is the zone that is uncovered only during the lowest tides of the month. " +
        N(10) + "Its residents, such as sea urchins and leafy algae, could not survive long in open air, so they are rarely seen except by early risers with tide charts.</p>" +
        "<p>" + N(11) + "What keeps each species in its stripe? " +
        N(12) + "For many years, scientists assumed the answer was simply tolerance: each animal lived as high as its body could bear the drying air. " +
        N(13) + "Experiments told a more complicated story. " +
        N(14) + "When researchers removed sea stars from one stretch of shore, the mussels above them spread downward within months, crowding out other species. " +
        N(15) + "The mussels could have lived lower all along; it was a predator, not the air, that had been holding them back.</p>" +
        "<p>" + N(16) + "This discovery changed how ecologists think about many habitats, not only tide pools. " +
        N(17) + "A zone's upper edge is often set by the physical environment, while its lower edge is often set by other living things. " +
        N(18) + "The neat stripes on a rocky shore, it turns out, are not simply a map of what each creature can endure. " +
        N(19) + "They are a record of an ongoing contest." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which of these best summarizes the article about stripes on the rocky shore?",
          choices: [
            { letter: "A", text: "Tide pool animals are rarely seen because they hide in deep water." },
            { letter: "B", text: "Mussels are the strongest species living along rocky shores." },
            { letter: "C", text: "Shore animals form zones shaped by both conditions and rivals." },
            { letter: "D", text: "Scientists have proven that air alone decides where animals live." }
          ],
          correct: "C"
        },
        {
          id: "para3",
          sol: "10.RI.2.A",
          stem: "How does the third paragraph (sentences 11 through 15) build on the first two paragraphs?",
          choices: [
            { letter: "A", text: "It moves from describing the zones to explaining their cause." },
            { letter: "B", text: "It repeats the zone descriptions in a different order." },
            { letter: "C", text: "It introduces a new habitat to compare with tide pools." },
            { letter: "D", text: "It lists steps for visiting a tide pool safely at dawn." }
          ],
          correct: "A"
        },
        {
          id: "predator",
          sol: "10.RI.1.B",
          stem: "Which detail best supports the claim that other living things help set the lower edge of a zone?",
          choices: [
            { letter: "A", text: "Periwinkles can seal themselves shut in dry air." },
            { letter: "B", text: "Mussels crowd together to hold in their moisture." },
            { letter: "C", text: "Sea urchins are seen mostly by early risers." },
            { letter: "D", text: "Mussels spread downward once sea stars were gone." }
          ],
          correct: "D"
        },
        {
          id: "question",
          sol: "10.RI.1.C",
          stem: "The author asks the question in sentence 11, What keeps each species in its stripe?, mainly to —",
          choices: [
            { letter: "A", text: "show that scientists still have no answer at all" },
            { letter: "B", text: "signal a turn to the central puzzle of the article" },
            { letter: "C", text: "invite readers to visit a tide pool for themselves" },
            { letter: "D", text: "express doubt about the experiments that followed" }
          ],
          correct: "B"
        },
        {
          id: "contest",
          sol: "10.RI.2.B",
          stem: "In sentence 19, calling the stripes a record of an ongoing contest suggests that the zones —",
          choices: [
            { letter: "A", text: "result from continuing struggles among living things" },
            { letter: "B", text: "were drawn by scientists to rank the species by size" },
            { letter: "C", text: "will disappear entirely once the competition ends" },
            { letter: "D", text: "change only when people disturb the rocky shore" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "10.RI.2.C",
          stem: "The author's attitude toward the older tolerance explanation described in sentence 12 is best described as —",
          choices: [
            { letter: "A", text: "mocking, since it was obviously foolish" },
            { letter: "B", text: "fully accepting, since it is still correct" },
            { letter: "C", text: "respectful, though later evidence revised it" },
            { letter: "D", text: "confused, since no one has tested it yet" }
          ],
          correct: "C"
        },
        {
          id: "tolerance",
          sol: "10.RV.1.A",
          stem: "The word tolerance in sentence 12 is related to the verb tolerate. Both words carry the idea of —",
          choices: [
            { letter: "A", text: "moving often from place to place" },
            { letter: "B", text: "preferring to live in large groups" },
            { letter: "C", text: "hiding from danger in small spaces" },
            { letter: "D", text: "being able to endure hard conditions" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 7. Informational · tutoring program (level 3) ───────────── */
    {
      id: "g10-ri-c74-protege-effect",
      family: "G10",
      title: "The Other Side of the Table",
      kind: "Informational · 10.RI",
      blurb: "A tutoring study in Halloway County suggests the tutors may be learning the most.",
      level: 3,
      passage:
        "<p>" + N(1) + "Ask most people who benefits from a tutoring program, and they will point to the student who is being tutored. " +
        N(2) + "That answer is correct, but it may be incomplete. " +
        N(3) + "A growing body of research suggests that tutors themselves often gain as much as the students they help, a pattern some educators call the protégé effect.</p>" +
        "<p>" + N(4) + "The explanation begins with a simple observation about preparation. " +
        N(5) + "Students who study material in order to take a test tend to memorize it; students who study the same material in order to teach it tend to organize it. " +
        N(6) + "They look for the main ideas, anticipate questions, and search for examples a confused listener might grasp. " +
        N(7) + "In other words, the expectation of explaining changes the way the knowledge is stored.</p>" +
        "<p>" + N(8) + "The act of teaching adds a second advantage. " +
        N(9) + "When a tutor's explanation fails, the gap is impossible to ignore, because a puzzled face is sitting across the table. " +
        N(10) + "The tutor must return to the idea and rebuild it, often discovering that his or her own understanding was shakier than it seemed.</p>" +
        "<p>" + N(11) + "A three-year study in Halloway County offers one local example. " +
        N(12) + "The district paired eleventh graders with ninth graders for weekly algebra sessions. " +
        N(13) + "By the end of the year, the ninth graders' scores had risen modestly, about six points on the county exam. " +
        N(14) + "The tutors' scores on an advanced math assessment, however, rose by nearly eleven points, more than those of classmates who spent the same hour in a supervised study hall.</p>" +
        "<p>" + N(15) + "These results should be interpreted with care. " +
        N(16) + "The tutors volunteered for the program, and students who volunteer may already be more motivated than their peers. " +
        N(17) + "Researchers tried to address this by comparing tutors with volunteers who were placed on a waiting list, but the groups were small. " +
        N(18) + "Still, the findings match a pattern seen elsewhere, and they suggest a practical lesson. " +
        N(19) + "Schools that design tutoring programs only as a service for struggling students may be overlooking half of the learning taking place at the table." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the author's central claim about who benefits from tutoring?",
          choices: [
            { letter: "A", text: "Sentence 1, which names the student being tutored" },
            { letter: "B", text: "Sentence 3, which says tutors often gain as much" },
            { letter: "C", text: "Sentence 12, which describes the algebra pairings" },
            { letter: "D", text: "Sentence 16, which notes that tutors volunteered" }
          ],
          correct: "B"
        },
        {
          id: "weaken",
          sol: "10.RI.1.B",
          stem: "Which detail most weakens the claim that tutoring alone caused the Halloway tutors' higher scores?",
          choices: [
            { letter: "A", text: "The tutors chose to join and may have been more motivated." },
            { letter: "B", text: "The ninth graders' scores rose by about six points." },
            { letter: "C", text: "Other classmates spent the same hour in a study hall." },
            { letter: "D", text: "The district paired eleventh graders with ninth graders." }
          ],
          correct: "A"
        },
        {
          id: "para5",
          sol: "10.RI.2.A",
          stem: "The final paragraph of the tutoring article (sentences 15 through 19) functions mainly to —",
          choices: [
            { letter: "A", text: "introduce a second study that contradicts the first" },
            { letter: "B", text: "describe the weekly algebra sessions in more detail" },
            { letter: "C", text: "summarize how the ninth graders felt about tutoring" },
            { letter: "D", text: "qualify the findings before drawing a careful lesson" }
          ],
          correct: "D"
        },
        {
          id: "studyhall",
          sol: "10.RI.1.C",
          stem: "The author mentions classmates who spent the same hour in a supervised study hall (sentence 14) mainly to —",
          choices: [
            { letter: "A", text: "criticize the district for wasting students' free time" },
            { letter: "B", text: "suggest that study halls should be replaced by clubs" },
            { letter: "C", text: "show the tutors gained more than peers given equal time" },
            { letter: "D", text: "prove that every tutor improved by the same amount" }
          ],
          correct: "C"
        },
        {
          id: "puzzled",
          sol: "10.RI.2.B",
          stem: "In sentence 9, the phrase a puzzled face is sitting across the table mainly emphasizes that —",
          choices: [
            { letter: "A", text: "ninth graders are often impatient with their tutors" },
            { letter: "B", text: "a failed explanation becomes obvious right away" },
            { letter: "C", text: "tutoring sessions are held in crowded classrooms" },
            { letter: "D", text: "tutors should watch their students for boredom" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's tone in sentences 15 through 17 is best described as —",
          choices: [
            { letter: "A", text: "defensive and irritated" },
            { letter: "B", text: "enthusiastic and certain" },
            { letter: "C", text: "skeptical and dismissive" },
            { letter: "D", text: "measured and cautious" }
          ],
          correct: "D"
        },
        {
          id: "modestly",
          sol: "10.RV.1.B",
          stem: "In sentence 13, the word modestly most nearly means —",
          choices: [
            { letter: "A", text: "by a small but real amount" },
            { letter: "B", text: "quietly and without bragging" },
            { letter: "C", text: "suddenly and unexpectedly" },
            { letter: "D", text: "by an amount nobody measured" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 8. Vocabulary · robotics club (level 1) ───────────── */
    {
      id: "g10-rv-c74-cardboard-prototype",
      family: "G10",
      title: "From Cardboard to Showcase",
      kind: "Vocabulary · 10.RV",
      blurb: "The Eastbrook robotics club starts in a closet with a cardboard box on wheels.",
      level: 1,
      passage:
        "<p>" + N(1) + "When the Eastbrook High robotics club started in September, its entire workshop fit inside a single storage closet beside the band room. " +
        N(2) + "The first <strong>prototype</strong> the six members built was a cardboard box on wheels with a phone taped to the front, a rough early model meant only to test whether their idea could work at all. " +
        N(3) + "It rolled forward, bumped into a chair, and tipped over. " +
        N(4) + "Nobody was discouraged; tipping over, their advisor Ms. Achterberg reminded them, was useful information.</p>" +
        "<p>" + N(5) + "Over the next month, the club learned that building a robot is mostly a matter of patience. " +
        N(6) + "Before every test run, Bao Tran had to <strong>calibrate</strong> the distance sensor, adjusting its settings until it measured the hallway's ten-meter tape exactly. " +
        N(7) + "Even a small error would send the robot crashing into the trophy case. " +
        N(8) + "Priyanka Rao, the club's programmer, was so <strong>meticulous</strong> that she reread every line of code twice and labeled every wire with a tiny paper flag. " +
        N(9) + "Some members teased her about the flags until the day a loose connection took only thirty seconds to find.</p>" +
        "<p>" + N(10) + "Their early designs were <strong>rudimentary</strong>, built from scraps and spare parts, with motors salvaged from a broken printer. " +
        N(11) + "Still, each version taught them something. " +
        N(12) + "The club kept a notebook where they wrote what had failed and why, so they would not repeat the same mistakes. " +
        N(13) + "After a while, the notebook grew so long that some entries were <strong>redundant</strong>, saying the same thing three different ways, and Bao suggested they trim it.</p>" +
        "<p>" + N(14) + "The robot that finally entered the spring showcase was not the fastest or the prettiest machine in the gym, and one of its wheels still wobbled. " +
        N(15) + "But it finished every course, and the judges praised the team as <strong>tenacious</strong>, a word Ms. Achterberg wrote on the whiteboard the next morning. " +
        N(16) + "Underneath it, someone added a drawing of a cardboard box lying on its side." +
        "</p>",
      claims: [
        {
          id: "prototype",
          sol: "10.RV.1.B",
          stem: "Sentence 2 restates the word prototype as —",
          choices: [
            { letter: "A", text: "a finished robot ready for a competition" },
            { letter: "B", text: "a box used to store the club's spare parts" },
            { letter: "C", text: "a rough early model used to test an idea" },
            { letter: "D", text: "a set of written steps for building a robot" }
          ],
          correct: "C"
        },
        {
          id: "calibrate",
          sol: "10.RV.1.B",
          stem: "In sentence 6, the word calibrate most nearly means —",
          choices: [
            { letter: "A", text: "adjust so that it measures accurately" },
            { letter: "B", text: "repair after it has been badly broken" },
            { letter: "C", text: "replace with a newer and faster model" },
            { letter: "D", text: "remove from the front of the robot" }
          ],
          correct: "A"
        },
        {
          id: "case",
          sol: "10.RV.1.C",
          stem: "In sentence 7, the word case most nearly means —",
          choices: [
            { letter: "A", text: "a legal matter decided in a court" },
            { letter: "B", text: "a glass cabinet for displaying objects" },
            { letter: "C", text: "an example of a particular situation" },
            { letter: "D", text: "a small cover for carrying a phone" }
          ],
          correct: "B"
        },
        {
          id: "rudimentary",
          sol: "10.RV.1.A",
          stem: "The word rudimentary in sentence 10 shares a root with rudiment, which means a basic first step. Based on this, rudimentary designs are —",
          choices: [
            { letter: "A", text: "complex and advanced" },
            { letter: "B", text: "borrowed from other teams" },
            { letter: "C", text: "carefully decorated" },
            { letter: "D", text: "simple and basic" }
          ],
          correct: "D"
        },
        {
          id: "tenacious",
          sol: "10.RV.1.A",
          stem: "The word tenacious in sentence 15 shares the root ten-, meaning to hold, with tenant and retain. Based on this, a tenacious team is one that —",
          choices: [
            { letter: "A", text: "holds on and keeps trying when things go wrong" },
            { letter: "B", text: "has exactly ten members on its official roster" },
            { letter: "C", text: "builds the most expensive machines in the gym" },
            { letter: "D", text: "wins its matches easily without much practice" }
          ],
          correct: "A"
        },
        {
          id: "redundant",
          sol: "10.RV.1.C",
          stem: "In sentence 13, the phrase saying the same thing three different ways helps the reader understand that redundant means —",
          choices: [
            { letter: "A", text: "too difficult for new members to read" },
            { letter: "B", text: "written in the wrong order by mistake" },
            { letter: "C", text: "repeating what has already been said" },
            { letter: "D", text: "missing several important details" }
          ],
          correct: "C"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.D",
          stem: "The author calls Priyanka meticulous rather than picky. Compared with picky, the word meticulous suggests that her carefulness is —",
          choices: [
            { letter: "A", text: "annoying and fussy" },
            { letter: "B", text: "valuable and thorough" },
            { letter: "C", text: "lazy and careless" },
            { letter: "D", text: "nervous and fearful" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 9. Vocabulary · coral reef (level 3) ───────────── */
    {
      id: "g10-rv-c74-borrowed-color",
      family: "G10",
      title: "A Partnership Under Strain",
      kind: "Vocabulary · 10.RV",
      blurb: "Much of a reef's color is borrowed, and warm water can take it back.",
      level: 3,
      passage:
        "<p>" + N(1) + "To a snorkeler, a healthy reef seems almost impossibly colorful, but much of that color is borrowed. " +
        N(2) + "Inside the tissues of reef-building corals live microscopic algae, and the relationship between the two is <strong>symbiotic</strong>: each partner depends on the other, and each gains something it could not easily get alone. " +
        N(3) + "The algae receive shelter and nutrients from the coral's waste; in return, they use sunlight to make sugars, sharing as much as ninety percent of that food with their host.</p>" +
        "<p>" + N(4) + "The arrangement is efficient, but it is also <strong>precarious</strong>, balanced so finely that a small change can upset it. " +
        N(5) + "When the water warms only one or two degrees above the usual summer maximum and stays there for weeks, the algae begin producing chemicals that harm the coral. " +
        N(6) + "The coral responds by expelling them. " +
        N(7) + "What remains is the coral's own <strong>translucent</strong> tissue, so clear that the white limestone skeleton shows through, which is why the event is called bleaching.</p>" +
        "<p>" + N(8) + "A bleached coral is not yet dead. " +
        N(9) + "If temperatures fall quickly, the algae can return, and the colony may recover within months. " +
        N(10) + "Some corals are remarkably <strong>resilient</strong>, bouncing back from bleaching again and again, while others die after a single long heat wave. " +
        N(11) + "Scientists studying the reefs of Teva Nui atoll found that colonies in naturally warmer lagoons survived bleaching more often than those in cooler channels, as if earlier hardship had prepared them.</p>" +
        "<p>" + N(12) + "No single action can stop ocean warming, but people can <strong>mitigate</strong> the other stresses reefs face. " +
        N(13) + "Reducing runoff from farms keeps water clear; limiting fishing protects the grazing fish that keep seaweed from smothering young corals. " +
        N(14) + "Each of these steps eases the burden on a reef, giving it a better chance when the next heat wave arrives. " +
        N(15) + "Researchers warn that bleaching events, once rare, are becoming <strong>commonplace</strong>, occurring every few years instead of every few decades. " +
        N(16) + "A partnership that has lasted for millions of years now depends partly on choices made in a single human lifetime." +
        "</p>",
      claims: [
        {
          id: "symbiotic",
          sol: "10.RV.1.B",
          stem: "In sentence 2, the words after the colon define symbiotic as describing a relationship in which —",
          choices: [
            { letter: "A", text: "one partner slowly harms the other over time" },
            { letter: "B", text: "both partners compete for the same sunlight" },
            { letter: "C", text: "each partner depends on and gains from the other" },
            { letter: "D", text: "neither partner notices that the other is there" }
          ],
          correct: "C"
        },
        {
          id: "precarious",
          sol: "10.RV.1.C",
          stem: "Which phrase from the article best helps the reader understand the meaning of precarious in sentence 4?",
          choices: [
            { letter: "A", text: "\"receive shelter and nutrients from the coral's waste\"" },
            { letter: "B", text: "\"balanced so finely that a small change can upset it\"" },
            { letter: "C", text: "\"begin producing chemicals that harm the coral\"" },
            { letter: "D", text: "\"so clear that the white limestone skeleton shows through\"" }
          ],
          correct: "B"
        },
        {
          id: "translucent",
          sol: "10.RV.1.A",
          stem: "The word translucent in sentence 7 joins the prefix trans-, meaning through, with a root meaning light. Translucent tissue is tissue that —",
          choices: [
            { letter: "A", text: "lets some light pass through it" },
            { letter: "B", text: "gives off a glow of its own" },
            { letter: "C", text: "blocks every bit of sunlight" },
            { letter: "D", text: "changes color in bright light" }
          ],
          correct: "A"
        },
        {
          id: "resilient",
          sol: "10.RV.1.D",
          stem: "The author calls some corals resilient rather than tough. Compared with tough, the word resilient puts more emphasis on the ability to —",
          choices: [
            { letter: "A", text: "resist every kind of damage" },
            { letter: "B", text: "crowd out nearby species" },
            { letter: "C", text: "grow larger than the others" },
            { letter: "D", text: "recover after being harmed" }
          ],
          correct: "D"
        },
        {
          id: "mitigate",
          sol: "10.RV.1.B",
          stem: "Based on sentences 12 through 14, the word mitigate most nearly means —",
          choices: [
            { letter: "A", text: "lessen or ease" },
            { letter: "B", text: "study closely" },
            { letter: "C", text: "ignore entirely" },
            { letter: "D", text: "cause directly" }
          ],
          correct: "A"
        },
        {
          id: "commonplace",
          sol: "10.RV.1.A",
          stem: "The word commonplace in sentence 15 is built from common and place. Using its parts and the context, commonplace most nearly means —",
          choices: [
            { letter: "A", text: "found only in one small place" },
            { letter: "B", text: "shared fairly among many groups" },
            { letter: "C", text: "ordinary and happening often" },
            { letter: "D", text: "rare and difficult to predict" }
          ],
          correct: "C"
        },
        {
          id: "borrowed",
          sol: "10.RV.1.D",
          stem: "In sentence 1, the author says much of the reef's color is borrowed rather than simply saying it comes from algae. The word borrowed suggests that the color —",
          choices: [
            { letter: "A", text: "was stolen by the coral from nearby fish" },
            { letter: "B", text: "is fake and only fools careless snorkelers" },
            { letter: "C", text: "will stay with the coral for its whole life" },
            { letter: "D", text: "belongs to a partner and can be taken back" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 10. Paired texts · tutoring program (level 2) ───────────── */
    {
      id: "g10-dsr-c74-lunch-tutoring",
      family: "G10",
      title: "Thirty Minutes at Lunch",
      kind: "Paired texts · 10.DSR",
      blurb: "A coordinator moves tutoring to lunch; a tutor writes about what happens next.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Memo: Linkup Tutoring Moves to Lunch</strong></p>" +
        "<p>" + N(1) + "Beginning March 4, all Linkup peer tutoring sessions at Ridgeline High will move from after school to the second half of each lunch period. " +
        N(2) + "The change responds to a problem our numbers made impossible to ignore. " +
        N(3) + "Last fall, 140 students signed up for after-school tutoring, but only 52 attended regularly. " +
        N(4) + "When we surveyed the others, the most common reason was not a lack of interest; it was transportation. " +
        N(5) + "Students who ride the late bus wait until 4:45, and many who work or care for siblings cannot stay at all. " +
        N(6) + "Lunch sessions remove that barrier for everyone. " +
        N(7) + "We recognize that a thirty-minute session is shorter than the old hour. " +
        N(8) + "To make the most of it, tutors will receive a short planning sheet, and students are asked to bring one specific question to each session. " +
        N(9) + "Tutors who wish to keep meeting a student after school may still do so with my approval. " +
        N(10) + "We will review attendance at the end of April and share the results with all tutors. " +
        N(11) + "Thank you for your flexibility as we try to reach students we have been missing. — Mr. Teodor Vasile, Learning Center Coordinator</p>" +
        "<p><strong>Text 2 — From a Tutor's Journal</strong></p>" +
        "<p>" + N(12) + "March 6. I was ready to hate lunch tutoring. " +
        N(13) + "Thirty minutes is barely enough time to open a binder, and the cafeteria noise follows us into the library like a crowd that refuses to stay outside. " +
        N(14) + "On Monday I spent the first ten minutes of the session just finding out what my student did not understand. " +
        N(15) + "Today was different. " +
        N(16) + "A junior named Osei sat down across from me with one question written on a sticky note, exactly as Mr. Vasile's sheet suggested. " +
        N(17) + "We solved it in twelve minutes and spent the rest of the time on two more he had been too embarrassed to ask in class. " +
        N(18) + "Before he left, he told me he had signed up for tutoring in the fall but never came once, because he picks up his little sister from the elementary school at 3:30. " +
        N(19) + "I had always assumed the kids who skipped tutoring just didn't care. " +
        N(20) + "Osei cares more than I do; he just has somewhere to be. " +
        N(21) + "The sessions are still too short. " +
        N(22) + "But I would rather have thirty minutes with Osei than an hour with an empty chair. — Lina Haddad</p>",
      claims: [
        {
          id: "memo",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of Mr. Vasile's memo in Text 1?",
          choices: [
            { letter: "A", text: "Tutors must now get approval before meeting any student." },
            { letter: "B", text: "Tutoring is moving to lunch so more students can attend." },
            { letter: "C", text: "The late bus will leave earlier starting on March 4." },
            { letter: "D", text: "Students who skip tutoring are not interested in help." }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which sentence from Text 1 provides the strongest evidence that the after-school time kept students away?",
          choices: [
            { letter: "A", text: "Sentence 1, which gives the date of the change" },
            { letter: "B", text: "Sentence 4, which reports what the survey found" },
            { letter: "C", text: "Sentence 7, which admits the sessions are shorter" },
            { letter: "D", text: "Sentence 10, which promises an April review" }
          ],
          correct: "B"
        },
        {
          id: "crowd",
          sol: "10.RL.2.A",
          stem: "In sentence 13, comparing the cafeteria noise to a crowd that refuses to stay outside suggests that Lina finds the noise —",
          choices: [
            { letter: "A", text: "intrusive and hard to escape" },
            { letter: "B", text: "cheerful and welcoming" },
            { letter: "C", text: "frightening and dangerous" },
            { letter: "D", text: "faint and easy to ignore" }
          ],
          correct: "A"
        },
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do Mr. Vasile and Lina agree?",
          choices: [
            { letter: "A", text: "Lunch tutoring should end after the April review." },
            { letter: "B", text: "Students who skip tutoring usually do not care." },
            { letter: "C", text: "A thirty-minute session is shorter than ideal." },
            { letter: "D", text: "Tutors should return to meeting after school." }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          stem: "Select TWO details, one from each text, that together best show that the old schedule missed students who wanted help.",
          choices: [
            { letter: "A", text: "\"the most common reason was not a lack of interest; it was transportation\"" },
            { letter: "B", text: "\"tutors will receive a short planning sheet\"" },
            { letter: "C", text: "\"he picks up his little sister from the elementary school at 3:30\"" },
            { letter: "D", text: "\"The sessions are still too short.\"" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "survey",
          sol: "10.DSR.E",
          stem: "How does Osei's story in Text 2 illustrate the survey finding reported in sentence 4 of Text 1?",
          choices: [
            { letter: "A", text: "He shows that most students prefer the cafeteria to the library." },
            { letter: "B", text: "He shows that the planning sheets are not really needed." },
            { letter: "C", text: "He reveals that the survey numbers were reported incorrectly." },
            { letter: "D", text: "He missed fall tutoring because of family duties, not disinterest." }
          ],
          correct: "D"
        },
        {
          id: "sticky",
          sol: "10.DSR.E",
          stem: "Based on both texts, why is the session with Osei on March 6 so productive?",
          choices: [
            { letter: "A", text: "Lina has finally received Mr. Vasile's approval to meet after school." },
            { letter: "B", text: "The library is quieter at lunch than it is in the afternoon." },
            { letter: "C", text: "Osei has already solved most of the problems before he arrives." },
            { letter: "D", text: "Osei follows the memo's request to bring one specific question." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 11. Paired texts · robotics club (level 3) ───────────── */
    {
      id: "g10-dsr-c74-hands-off",
      family: "G10",
      title: "Whose Hands on the Robot?",
      kind: "Paired texts · 10.DSR",
      blurb: "A student asks the league to keep adults' hands off the robots; a mentor answers.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Let Us Break It</strong></p>" +
        "<p>" + N(1) + "At last month's regional competition, our team finished eleventh, and I am prouder of that robot than of anything I have built. " +
        N(2) + "Every bolt on it was turned by a student. " +
        N(3) + "Across the gym, some teams brought machines so polished that it was hard not to wonder whose hands had really built them. " +
        N(4) + "One team's adult mentor spent the whole pit session rewiring a control board while the students watched from folding chairs. " +
        N(5) + "That team placed second. " +
        N(6) + "I do not doubt that their mentors meant well, but a trophy earned that way mainly teaches students how to watch. " +
        N(7) + "Our robot lost its left wheel in the semifinal because I had tightened it wrong, and I will never tighten a wheel wrong again. " +
        N(8) + "That lesson cost us a match; never learning it would have cost us much more. " +
        N(9) + "Robotics clubs exist to produce engineers, not trophies. " +
        N(10) + "I am asking the league to adopt a simple rule: adults may advise, but only students may touch the robot during competitions. " +
        N(11) + "Let us struggle. " +
        N(12) + "Let us break things. " +
        N(13) + "It is the only way we will ever learn how to fix them. — Anjali Desai, junior, Team 4417</p>" +
        "<p><strong>Text 2 — Hands Off, Mostly</strong></p>" +
        "<p>" + N(14) + "I have mentored student robotics teams for nine years, and I agree with the students who say the robot should be theirs. " +
        N(15) + "Most of the time, the best thing I can do is keep my hands in my pockets and ask one more question. " +
        N(16) + "But \"most of the time\" is not \"always.\" " +
        N(17) + "Two seasons ago, a student on my team connected a battery backward an hour before a match. " +
        N(18) + "He was certain he had checked it; the wire was already warm when I reached over and pulled it free. " +
        N(19) + "Under a strict no-touch rule, the lesson would have been a melted control board and possibly a burned hand. " +
        N(20) + "Mentoring is less like coaching from the sidelines and more like belaying a climber: the student does the climbing, and the adult holds the rope only when a fall would cause real harm. " +
        N(21) + "A league rule banning adults from touching robots might stop the mentors who take over. " +
        N(22) + "It would also stop the ones standing ready to catch a dangerous mistake. " +
        N(23) + "A better rule would ban adults from building, but not from keeping students safe. — Graciela Montoya, volunteer mentor</p>",
      claims: [
        {
          id: "wheel",
          sol: "10.RI.1.C",
          stem: "Anjali includes the story of the loose left wheel in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "blame a teammate for the team's loss in the semifinal" },
            { letter: "B", text: "show that a failure can teach a lasting lesson" },
            { letter: "C", text: "explain why her team placed eleventh overall" },
            { letter: "D", text: "prove that the league's current rules are unfair" }
          ],
          correct: "B"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "Montoya's post in Text 2 is organized mainly as —",
          choices: [
            { letter: "A", text: "a concession, a story supporting an exception, then a proposal" },
            { letter: "B", text: "a list of steps for wiring a robot battery safely" },
            { letter: "C", text: "a history of her nine seasons told in time order" },
            { letter: "D", text: "a comparison of two competitions she has judged" }
          ],
          correct: "A"
        },
        {
          id: "concede",
          sol: "10.RI.2.C",
          stem: "In sentences 14 and 15, Montoya agrees with students who want the robot to be theirs mainly to —",
          choices: [
            { letter: "A", text: "admit that her own position has been mistaken" },
            { letter: "B", text: "mock the idea that students can build robots" },
            { letter: "C", text: "establish common ground before arguing for an exception" },
            { letter: "D", text: "shift attention away from the league to her career" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "The rule Anjali proposes and the rule Montoya proposes differ mainly in that Montoya's rule —",
          choices: [
            { letter: "A", text: "would ban adults from attending competitions" },
            { letter: "B", text: "would let adults rebuild robots before matches" },
            { letter: "C", text: "would require students to work with no advice" },
            { letter: "D", text: "would let adults step in to prevent real harm" }
          ],
          correct: "D"
        },
        {
          id: "shared",
          sol: "10.DSR.D",
          stem: "Which belief do Anjali and Montoya both express?",
          choices: [
            { letter: "A", text: "Students learn most when the robot is truly their own work." },
            { letter: "B", text: "Trophies are the clearest measure of what a team learned." },
            { letter: "C", text: "Adults should never touch robots during a competition." },
            { letter: "D", text: "Wiring errors are the most common danger in robotics." }
          ],
          correct: "A"
        },
        {
          id: "rewire",
          sol: "10.DSR.E",
          stem: "How would Montoya most likely respond to the mentor described in sentence 4 of Text 1?",
          choices: [
            { letter: "A", text: "She would praise him for helping his students win second place." },
            { letter: "B", text: "She would say the students should have left the pit entirely." },
            { letter: "C", text: "She would object, because he was building, not keeping anyone safe." },
            { letter: "D", text: "She would argue that rewiring a board counts as a safety step." }
          ],
          correct: "C"
        },
        {
          id: "together",
          sol: "10.DSR.E",
          stem: "Read together, the two texts suggest that a fair league rule about adults and robots would need to —",
          choices: [
            { letter: "A", text: "reward the teams whose robots look the most polished" },
            { letter: "B", text: "stop adults from taking over but still allow safety help" },
            { letter: "C", text: "let mentors decide alone when they should touch a robot" },
            { letter: "D", text: "keep every adult out of the pit area during matches" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 12. Paired texts · tide pools (level 1) ───────────── */
    {
      id: "g10-dsr-c74-halcyon-cove",
      family: "G10",
      title: "Under the Rock at Halcyon Cove",
      kind: "Paired texts · 10.DSR",
      blurb: "A park guide explains tide pool manners; a boy named Ruben puts them to the test.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Visiting the Tide Pools at Halcyon Cove</strong></p>" +
        "<p>" + N(1) + "The tide pools at Halcyon Cove are home to more than two hundred kinds of animals, and every one of them lives on a schedule set by the sea. " +
        N(2) + "Visitors are welcome to explore at low tide, but a few simple practices help protect both the animals and you. " +
        N(3) + "First, walk only on bare rock or sand whenever you can. " +
        N(4) + "Mussels, barnacles, and seaweed may look sturdy, but each step can crush dozens of animals hidden beneath them. " +
        N(5) + "Second, if you lift a loose rock to look underneath, set it back exactly as you found it, right side up. " +
        N(6) + "The animals on its underside need shade and moisture, and a rock left flipped can become a death trap in the afternoon sun. " +
        N(7) + "Third, touch gently with one wet finger, and never pull an animal off a surface. " +
        N(8) + "A sea star that is pried loose may lose the tiny tube feet it uses to hold on and to eat. " +
        N(9) + "Finally, check the tide chart before you go, and keep an eye on the water. " +
        N(10) + "The ocean returns faster than most people expect.</p>" +
        "<p><strong>Text 2 — Underneath</strong></p>" +
        "<p>" + N(11) + "Ruben Castellanos was nine, and he had decided that the best animals at Halcyon Cove were the ones nobody else could see. " +
        N(12) + "While his older sister, Inés, photographed the anemones, he crouched beside a flat gray rock the size of a dinner plate. " +
        N(13) + "He worked his fingers under one edge and tipped it up. " +
        N(14) + "The underside was alive: a purple crab the size of a coin, three brittle stars waving their thin arms, and a pale worm that coiled away from the light. " +
        N(15) + "Ruben was so delighted that he almost dropped the rock on his own foot. " +
        N(16) + "For a whole minute, he simply looked. " +
        N(17) + "Then he remembered the sign at the trailhead, the part his mother had read aloud twice in the car. " +
        N(18) + "Slowly, with both hands, he lowered the rock until it sat in its hollow again, the crab and the brittle stars safely back in the dark. " +
        N(19) + "Inés lowered her camera. " +
        N(20) + "\"You didn't even take a picture,\" she said. " +
        N(21) + "Ruben shrugged and wiped his muddy hands on his shorts. " +
        N(22) + "\"They didn't want their picture taken,\" he said, already looking for the next rock.</p>",
      claims: [
        {
          id: "deathtrap",
          sol: "10.RI.2.B",
          stem: "In sentence 6, the phrase a death trap mainly emphasizes that a rock left flipped over —",
          choices: [
            { letter: "A", text: "can trip visitors who walk on the wet rocks" },
            { letter: "B", text: "can be carried away when the tide returns" },
            { letter: "C", text: "can kill the animals living on its underside" },
            { letter: "D", text: "can crack apart in the heat of the afternoon" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          stem: "The tone of Ruben's final remark, They didn't want their picture taken (sentence 22), is best described as —",
          choices: [
            { letter: "A", text: "gently playful" },
            { letter: "B", text: "bitterly angry" },
            { letter: "C", text: "deeply sorrowful" },
            { letter: "D", text: "nervous and afraid" }
          ],
          correct: "A"
        },
        {
          id: "follows",
          sol: "10.DSR.D",
          stem: "Which practice from the Halcyon Cove guide does Ruben follow in Text 2?",
          choices: [
            { letter: "A", text: "Walking only on bare rock or sand" },
            { letter: "B", text: "Touching animals with one wet finger" },
            { letter: "C", text: "Checking the tide chart before going" },
            { letter: "D", text: "Setting a lifted rock back as it was" }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          stem: "Select TWO sentences, one from each text, that together best explain why Ruben puts the rock back so carefully.",
          choices: [
            { letter: "A", text: "Sentence 3, about walking on bare rock or sand" },
            { letter: "B", text: "Sentence 6, about animals that need shade and moisture" },
            { letter: "C", text: "Sentence 15, about almost dropping the rock on his foot" },
            { letter: "D", text: "Sentence 17, about remembering the trailhead sign" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "ifleft",
          sol: "10.DSR.E",
          stem: "Based on both texts, what would most likely have happened if Ruben had left the rock tipped up?",
          choices: [
            { letter: "A", text: "The crab and brittle stars could have dried out in the sun." },
            { letter: "B", text: "Inés would have photographed the animals under the rock." },
            { letter: "C", text: "The tide would have returned faster than Ruben expected." },
            { letter: "D", text: "The worm would have coiled back toward the bright light." }
          ],
          correct: "A"
        },
        {
          id: "adds",
          sol: "10.DSR.E",
          stem: "How does Text 2 add to the information given in Text 1?",
          choices: [
            { letter: "A", text: "It lists new rules that the park guide leaves out." },
            { letter: "B", text: "It argues that the park's rules are too strict for children." },
            { letter: "C", text: "It shows one young visitor following a rule from the guide." },
            { letter: "D", text: "It explains why the ocean returns faster than expected." }
          ],
          correct: "C"
        },
        {
          id: "sign",
          sol: "10.DSR.E",
          stem: "Using both texts, a reader can best conclude that the trailhead sign Ruben's mother read aloud —",
          choices: [
            { letter: "A", text: "made Ruben too nervous to look under any rocks" },
            { letter: "B", text: "helped turn Ruben's curiosity into careful action" },
            { letter: "C", text: "was ignored by most of the visitors at the cove" },
            { letter: "D", text: "convinced Inés to stop taking photographs" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 13. Poetry · tide pools (level 2) ───────────── */
    {
      id: "g10-rl-c74-rooms-of-water",
      family: "G10",
      title: "Rooms of Water",
      kind: "Poetry · 10.RL",
      blurb: "At low tide, a speaker kneels at the edge of the pools like a guest in someone's kitchen.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The sea goes out the way my father leaves for work,<br>" +
        L(2) + "not all at once, but backing toward the door,<br>" +
        L(3) + "still talking, promising to be home soon.<br>" +
        L(4) + "What it leaves behind are rooms of water<br>" +
        L(5) + "on the black rock, each one furnished:<br>" +
        L(6) + "a green anemone folded like a fist,<br>" +
        L(7) + "a hermit crab dragging a borrowed house,<br>" +
        L(8) + "a sculpin pretending to be gravel.<br>" +
        L(9) + "I kneel the way you kneel in someone's kitchen<br>" +
        L(10) + "when you are not sure you were invited.<br>" +
        L(11) + "The barnacles have shut their tiny doors.<br>" +
        L(12) + "The mussels hold their breath in blue-black rows.<br>" +
        L(13) + "Everything here is waiting, and waiting well,<br>" +
        L(14) + "the way my grandmother waits at bus stops,<br>" +
        L(15) + "not checking the clock, just knowing.<br>" +
        L(16) + "Far out, the first wave turns its shoulder toward us.<br>" +
        L(17) + "I stand, my knees printed with the shapes of rock,<br>" +
        L(18) + "and leave the rooms the way I found them,<br>" +
        L(19) + "lights off, doors closed, the tenants home,<br>" +
        L(20) + "the sea already knocking at the front." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme do the waiting creatures in Rooms of Water best support?",
          choices: [
            { letter: "A", text: "Small creatures are helpless when the ocean leaves them." },
            { letter: "B", text: "Enduring change often means calmly trusting what returns." },
            { letter: "C", text: "People should visit the shore only when the tide is high." },
            { letter: "D", text: "Families grow apart when parents spend long hours at work." }
          ],
          correct: "B"
        },
        {
          id: "father",
          sol: "10.RL.2.A",
          stem: "In lines 1–3, comparing the outgoing tide to the speaker's father leaving for work suggests that the tide —",
          choices: [
            { letter: "A", text: "pulls back gradually and will surely come back" },
            { letter: "B", text: "leaves suddenly and in a bad temper" },
            { letter: "C", text: "disappears for good and is soon forgotten" },
            { letter: "D", text: "moves loudly enough to wake the household" }
          ],
          correct: "A"
        },
        {
          id: "kneel",
          sol: "10.RL.1.C",
          stem: "Lines 9–10, in which the speaker kneels as if in someone's kitchen, characterize the speaker as —",
          choices: [
            { letter: "A", text: "bored and eager to leave the shore" },
            { letter: "B", text: "afraid of the creatures in the pools" },
            { letter: "C", text: "a respectful guest unsure of welcome" },
            { letter: "D", text: "proud of being first to explore" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in lines 11–12, the barnacles' shut doors and the mussels holding their breath, mainly create a mood of —",
          choices: [
            { letter: "A", text: "hushed waiting" },
            { letter: "B", text: "loud celebration" },
            { letter: "C", text: "angry conflict" },
            { letter: "D", text: "careless play" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          stem: "The tone of the poem's last three lines (18–20) is best described as —",
          choices: [
            { letter: "A", text: "impatient and annoyed" },
            { letter: "B", text: "fearful and urgent" },
            { letter: "C", text: "proud and boastful" },
            { letter: "D", text: "tender and respectful" }
          ],
          correct: "D"
        },
        {
          id: "rooms",
          sol: "10.RL.3.A",
          stem: "How does the comparison of the tide pools to furnished rooms (lines 4–5 and 18–19) function in the poem?",
          choices: [
            { letter: "A", text: "It explains how scientists measure the size of tide pools." },
            { letter: "B", text: "It presents the pools as homes that deserve a guest's care." },
            { letter: "C", text: "It suggests the speaker wishes to live beside the ocean." },
            { letter: "D", text: "It shows that the pools are crowded and uncomfortable." }
          ],
          correct: "B"
        },
        {
          id: "tenants",
          sol: "10.RV.1.C",
          stem: "In line 19, the word tenants most nearly means —",
          choices: [
            { letter: "A", text: "visitors only passing through" },
            { letter: "B", text: "owners who are selling a house" },
            { letter: "C", text: "those who live in a place" },
            { letter: "D", text: "workers who repair rooms" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 14. Poetry · coral reef (level 3) ───────────── */
    {
      id: "g10-rl-c74-white-ridge",
      family: "G10",
      title: "Night Dive, Bleaching Season",
      kind: "Poetry · 10.RL",
      blurb: "Divers were warned the bleached ridge would be beautiful. It was.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "They warned us it would be beautiful,<br>" +
        L(2) + "and it was: the whole ridge lit up white<br>" +
        L(3) + "beneath our lamps, as if a snow had fallen<br>" +
        L(4) + "in a country that has never known a winter.<br>" +
        L(5) + "Branch after branch of staghorn, bright as chalk,<br>" +
        L(6) + "the brain coral pale as an unwritten page.<br>" +
        L(7) + "A tourist would have called it a wonder.<br>" +
        L(8) + "I wrote the numbers on my slate instead:<br>" +
        L(9) + "forty percent, then fifty, then I stopped<br>" +
        L(10) + "writing and just looked, the way you look<br>" +
        L(11) + "at a friend's face in a hospital, searching<br>" +
        L(12) + "for the color that you know belongs there.<br>" +
        L(13) + "A parrotfish moved through, still wearing all of his,<br>" +
        L(14) + "green and violet, careless as a parade.<br>" +
        L(15) + "He did not know he was the only flag left flying.<br>" +
        L(16) + "Above us, the water held its summer heat<br>" +
        L(17) + "the way a grudge keeps its warmth for years.<br>" +
        L(18) + "We surfaced into stars. Nobody spoke.<br>" +
        L(19) + "On deck, someone unrolled the chart from last year's dive,<br>" +
        L(20) + "the ridge marked healthy in a careful hand,<br>" +
        L(21) + "and set our slate down next to it, like evidence." +
        "</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Lines 1–2, They warned us it would be beautiful, / and it was, are ironic because —",
          choices: [
            { letter: "A", text: "the beauty the divers see is a sign the coral is dying" },
            { letter: "B", text: "the divers had expected the reef to look ugly at night" },
            { letter: "C", text: "the warning about the reef came from careless tourists" },
            { letter: "D", text: "the lamps made the reef look darker than it really was" }
          ],
          correct: "A"
        },
        {
          id: "hospital",
          sol: "10.RL.2.A",
          stem: "In lines 10–12, comparing the speaker's gaze to looking at a friend's face in a hospital suggests that the speaker —",
          choices: [
            { letter: "A", text: "is afraid of becoming ill on the dive" },
            { letter: "B", text: "is studying the reef for a medical project" },
            { letter: "C", text: "searches anxiously for health in something loved" },
            { letter: "D", text: "wants to leave the water as soon as possible" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is developed through the speaker's night dive along the white ridge?",
          choices: [
            { letter: "A", text: "Tourists notice more about the ocean than scientists do." },
            { letter: "B", text: "Careful records matter more than what a person feels." },
            { letter: "C", text: "The ocean is most beautiful when it is seen at night." },
            { letter: "D", text: "Understanding what you see can turn wonder into grief." }
          ],
          correct: "D"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which lines mark the moment when the speaker stops working as a counter and responds as a person?",
          choices: [
            { letter: "A", text: "Lines 3–4, describing the snow in a country without winter" },
            { letter: "B", text: "Line 8, when the speaker writes numbers on the slate" },
            { letter: "C", text: "Lines 9–10, when the speaker stops writing and just looks" },
            { letter: "D", text: "Line 18, when the divers surface into the starlight" }
          ],
          correct: "C"
        },
        {
          id: "flag",
          sol: "10.RL.2.B",
          stem: "In line 15, calling the parrotfish the only flag left flying mainly suggests that —",
          choices: [
            { letter: "A", text: "the fish is leading the divers back toward the boat" },
            { letter: "B", text: "the fish is the last bright color on a faded reef" },
            { letter: "C", text: "the reef has been claimed by a group of scientists" },
            { letter: "D", text: "the fish is warning other fish to leave the ridge" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "10.RL.3.A",
          stem: "The poem ends with the slate set beside last year's chart like evidence (line 21) mainly to —",
          choices: [
            { letter: "A", text: "stress that the comparison proves how much the reef has declined" },
            { letter: "B", text: "suggest that the divers made errors in counting the bleached coral" },
            { letter: "C", text: "show that the crew wants to win an argument with the tourists" },
            { letter: "D", text: "reveal that the chart from last year's dive was carelessly made" }
          ],
          correct: "A"
        },
        {
          id: "careless",
          sol: "10.RV.1.D",
          stem: "In line 14, the poet calls the parrotfish careless rather than calm. Compared with calm, the word careless suggests that the fish is —",
          choices: [
            { letter: "A", text: "peaceful and wise" },
            { letter: "B", text: "unaware of the danger" },
            { letter: "C", text: "lazy and slow-moving" },
            { letter: "D", text: "angry and restless" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 15. Drama · robotics club (level 1) ───────────── */
    {
      id: "g10-rl-c74-turns-right",
      family: "G10",
      title: "Bartholomew Only Turns Right",
      kind: "Drama · 10.RL",
      blurb: "The night before the state qualifier, the team's robot will only spin one way.",
      level: 1,
      passage:
        "<p><em>The robotics lab at Fairhaven High, 8:40 p.m., the night before the state qualifier. Parts and tools cover every table. A small robot named Bartholomew sits on a square of blue tape on the floor. MIREILLE, the team captain, paces. KOFI sits at a laptop. SUNG-MIN, a sophomore, eats crackers on an upturned bucket.</em></p>" +
        "<p>" + N(1) + "MIREILLE: Run it again, Kofi. One more time. " +
        N(2) + "KOFI: <em>[pressing a key without looking up]</em> Running. " +
        "<em>[The robot rolls forward, pauses, and spins slowly to the right in a full circle.]</em> " +
        N(3) + "SUNG-MIN: It's dancing. " +
        N(4) + "Honestly, if the judges score style, we win. " +
        N(5) + "MIREILLE: It is supposed to turn left at the cone. " +
        N(6) + "It turned left at the cone all week. " +
        N(7) + "What changed? " +
        N(8) + "KOFI: <em>[too quickly]</em> Nothing. " +
        N(9) + "Maybe the battery's low. " +
        N(10) + "SUNG-MIN: I charged the battery an hour ago. " +
        N(11) + "It's fuller than I am, and I've had nine crackers. " +
        N(12) + "MIREILLE: <em>[kneeling beside the robot]</em> Bartholomew, buddy, you are killing me. " +
        "<em>[KOFI stares at his screen. He scrolls up, stops, and closes his eyes.]</em> " +
        N(13) + "KOFI: Okay. " +
        N(14) + "I changed something. " +
        N(15) + "MIREILLE: <em>[standing slowly]</em> You changed something. " +
        N(16) + "Tonight. " +
        N(17) + "Without telling anyone. " +
        N(18) + "KOFI: The turning code was clunky. " +
        N(19) + "I thought I could make it smoother in ten minutes and surprise you. " +
        N(20) + "I must have flipped a sign somewhere, so now left is right. " +
        N(21) + "SUNG-MIN: <em>[aside, to the audience]</em> In robotics, this is what we call a learning experience. " +
        N(22) + "Outside of robotics, we call it a disaster. " +
        N(23) + "MIREILLE: <em>[taking a long breath]</em> Do you still have the old version saved? " +
        N(24) + "KOFI: In the backup folder. " +
        N(25) + "Yeah. " +
        N(26) + "MIREILLE: Then here's the new rule, and I'm writing it on the whiteboard so nobody forgets. " +
        "<em>[She uncaps a marker and writes in large letters.]</em> " +
        N(27) + "NOBODY CHANGES CODE ALONE. " +
        N(28) + "KOFI: That's fair. " +
        N(29) + "That's more than fair. " +
        N(30) + "MIREILLE: Load the backup. " +
        N(31) + "Sung-min, check his work line by line. " +
        N(32) + "Then we run it ten times, not once. " +
        N(33) + "SUNG-MIN: <em>[brushing crumbs off his hands]</em> Ten times. " +
        N(34) + "Bartholomew is going to be so dizzy. " +
        "<em>[KOFI presses a key. The robot rolls forward and turns neatly left at the cone. All three let out a breath at once.]</em> " +
        N(35) + "KOFI: <em>[quietly]</em> Smoother isn't better if it's broken. " +
        N(36) + "MIREILLE: <em>[smiling for the first time]</em> Write that on the whiteboard too." +
        "</p>",
      claims: [
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which moment marks the turning point of the scene in the Fairhaven lab?",
          choices: [
            { letter: "A", text: "Sentence 3, when Sung-min says the robot is dancing" },
            { letter: "B", text: "Sentences 13–14, when Kofi admits he changed something" },
            { letter: "C", text: "Sentence 27, when Mireille writes the rule on the board" },
            { letter: "D", text: "Sentence 36, when Mireille smiles for the first time" }
          ],
          correct: "B"
        },
        {
          id: "kofi",
          sol: "10.RL.1.C",
          stem: "Kofi's quick answer in sentences 8 and 9 suggests that he —",
          choices: [
            { letter: "A", text: "is trying to hide what he did to the code" },
            { letter: "B", text: "truly believes that the battery is low" },
            { letter: "C", text: "did not hear Mireille's question at all" },
            { letter: "D", text: "wants Sung-min to take the blame instead" }
          ],
          correct: "A"
        },
        {
          id: "aside",
          sol: "10.RL.2.C",
          stem: "Sung-min's aside to the audience in sentences 21 and 22 gives the scene a tone that is —",
          choices: [
            { letter: "A", text: "bitter and openly accusing" },
            { letter: "B", text: "solemn and deeply grieving" },
            { letter: "C", text: "fearful and growing anxious" },
            { letter: "D", text: "humorous despite the tension" }
          ],
          correct: "D"
        },
        {
          id: "fuller",
          sol: "10.RL.2.A",
          stem: "Sung-min's comparison in sentence 11, It's fuller than I am, mainly suggests that —",
          choices: [
            { letter: "A", text: "Sung-min is too hungry to keep working" },
            { letter: "B", text: "the battery has been damaged by overcharging" },
            { letter: "C", text: "the battery cannot be the cause of the problem" },
            { letter: "D", text: "the crackers have caused a mess on the robot" }
          ],
          correct: "C"
        },
        {
          id: "breath",
          sol: "10.RL.2.B",
          stem: "The stage direction in which all three characters let out a breath at once mainly creates a mood of —",
          choices: [
            { letter: "A", text: "shared relief" },
            { letter: "B", text: "growing anger" },
            { letter: "C", text: "silly confusion" },
            { letter: "D", text: "quiet sadness" }
          ],
          correct: "A"
        },
        {
          id: "whiteboard",
          sol: "10.RL.3.A",
          stem: "The playwright has Mireille write the new rule on the whiteboard (sentences 26 and 27) mainly to —",
          choices: [
            { letter: "A", text: "embarrass Kofi in front of the younger Sung-min" },
            { letter: "B", text: "show her turning the mistake into a lasting lesson" },
            { letter: "C", text: "suggest that Mireille forgets rules very easily" },
            { letter: "D", text: "reveal that the team will be disqualified tomorrow" }
          ],
          correct: "B"
        },
        {
          id: "clunky",
          sol: "10.RV.1.B",
          stem: "In sentence 18, Kofi calls the turning code clunky. Based on his wish to make it smoother in sentence 19, clunky most nearly means —",
          choices: [
            { letter: "A", text: "broken beyond repair" },
            { letter: "B", text: "kept secret from others" },
            { letter: "C", text: "much too short to run" },
            { letter: "D", text: "awkward and not smooth" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 16. Functional text · tutoring program (level 1) ───────────── */
    {
      id: "g10-ri-c74-tutor-handbook",
      family: "G10",
      title: "Handbook for New Tutors",
      kind: "Functional text · 10.RI",
      blurb: "The Harbor View Peer Tutoring Center explains what it expects from new tutors.",
      level: 1,
      passage:
        "<p><strong>Harbor View High School Peer Tutoring Center: Handbook for New Tutors</strong></p>" +
        "<p><strong>Who Can Tutor</strong><br>" + N(1) + "Tutors must be in grades 10 through 12 and have earned at least a B in the subject they wish to tutor. " +
        N(2) + "Each tutor needs one written recommendation from a teacher in that subject. " +
        N(3) + "Applications are due in Room 114 by September 20, and new tutors will be notified of their assignments within two weeks.</p>" +
        "<p><strong>Training</strong><br>" + N(4) + "All new tutors attend two training sessions before meeting any students. " +
        N(5) + "The first session covers listening skills and how to ask guiding questions; the second covers record keeping and privacy. " +
        N(6) + "Tutors who miss a training session must complete a make-up lesson online before their first assignment.</p>" +
        "<p><strong>Session Expectations</strong><br>" + N(7) + "Sessions last forty-five minutes and take place in the library on Mondays, Wednesdays, and Thursdays. " +
        N(8) + "Tutors should arrive five minutes early to review the student's sign-in card, which lists the class, the teacher, and the topic the student wants help with. " +
        N(9) + "Remember that your role is to guide, not to do the work: students should hold the pencil, and tutors should ask questions rather than give answers. " +
        N(10) + "At the end of each session, complete a short log describing what was covered and what the student should practice next.</p>" +
        "<p><strong>Privacy</strong><br>" + N(11) + "Information about a student's grades or struggles must stay between the tutor, the student, and the center coordinator. " +
        N(12) + "Do not discuss your students with friends, and never post about sessions online.</p>" +
        "<p><strong>Absences</strong><br>" + N(13) + "If you cannot attend a scheduled session, notify the coordinator, Ms. Adaeze Nwosu, by 3:00 p.m. the day before. " +
        N(14) + "Tutors with three unreported absences in a semester will be removed from the schedule for the rest of the semester.</p>" +
        "<p><strong>Service Hours</strong><br>" + N(15) + "Each completed session counts as one hour toward the school's community service requirement of forty hours. " +
        N(16) + "Hours are recorded from your session logs, so a missing log means a missing hour. " +
        N(17) + "Questions about the program can be directed to Ms. Nwosu in Room 114.</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The Harbor View handbook is written mainly for —",
          choices: [
            { letter: "A", text: "students who tutor or plan to tutor at the center" },
            { letter: "B", text: "parents who want to hire a private tutor at home" },
            { letter: "C", text: "teachers who grade the logs that tutors complete" },
            { letter: "D", text: "students who need help with their homework" }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "How is the Harbor View tutoring handbook organized?",
          choices: [
            { letter: "A", text: "In time order, following one tutor through a year" },
            { letter: "B", text: "As a problem followed by several possible solutions" },
            { letter: "C", text: "By topic, with a heading over each group of rules" },
            { letter: "D", text: "As a comparison of tutoring with other service work" }
          ],
          correct: "C"
        },
        {
          id: "logs",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the idea that session logs matter to the tutors themselves?",
          choices: [
            { letter: "A", text: "Sentence 8, about reviewing the sign-in card" },
            { letter: "B", text: "Sentence 12, about not posting sessions online" },
            { letter: "C", text: "Sentence 16, about how hours are recorded" },
            { letter: "D", text: "Sentence 17, about where to direct questions" }
          ],
          correct: "C"
        },
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes the Session Expectations section of the handbook?",
          choices: [
            { letter: "A", text: "Tutors must earn a B and get a teacher's recommendation." },
            { letter: "B", text: "Tutors come early, guide instead of doing work, and log it." },
            { letter: "C", text: "Tutors must keep students' grades private at all times." },
            { letter: "D", text: "Tutors report absences to Ms. Nwosu the day before." }
          ],
          correct: "B"
        },
        {
          id: "pencil",
          sol: "10.RI.2.B",
          stem: "In sentence 9, the direction that students should hold the pencil mainly means that —",
          choices: [
            { letter: "A", text: "students should do the actual work themselves" },
            { letter: "B", text: "students must bring their own school supplies" },
            { letter: "C", text: "tutors are not allowed to write in session logs" },
            { letter: "D", text: "pencils are the only tools allowed in the library" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of the Absences section (sentences 13 and 14) is best described as —",
          choices: [
            { letter: "A", text: "apologetic and unsure" },
            { letter: "B", text: "playful and joking" },
            { letter: "C", text: "warm and sentimental" },
            { letter: "D", text: "firm and direct" }
          ],
          correct: "D"
        },
        {
          id: "covers",
          sol: "10.RV.1.C",
          stem: "In sentence 5, the word covers most nearly means —",
          choices: [
            { letter: "A", text: "hides from view" },
            { letter: "B", text: "deals with" },
            { letter: "C", text: "pays the cost of" },
            { letter: "D", text: "protects from harm" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 17. Argument · tide pools (level 2) ───────────── */
    {
      id: "g10-ri-c74-morro-blanco-permits",
      family: "G10",
      title: "Making Room at Morro Blanco",
      kind: "Argument · 10.RI",
      blurb: "A longtime tide pool explorer argues for free weekend permits at a crowded shore.",
      level: 2,
      passage:
        "<p>" + N(1) + "On a sunny Saturday last July, volunteers at Morro Blanco Point counted 1,140 visitors on the tide pool shelf during a single two-hour low tide. " +
        N(2) + "That is roughly one person for every square yard of exposed rock. " +
        N(3) + "I have explored these pools since I was five, and I love that so many people want to see them. " +
        N(4) + "But love, in numbers like that, has started to look a lot like harm. " +
        N(5) + "The county should require free, timed-entry permits for the tide pools on summer weekends.</p>" +
        "<p>" + N(6) + "The evidence of damage is not hard to find. " +
        N(7) + "Volunteer surveys show that mussel beds along the main path have shrunk by nearly a third since 2015, while beds the same distance from shore but away from the path have held steady. " +
        N(8) + "Owl limpets, which visitors often pry off rocks as souvenirs, have nearly vanished from the most popular pools. " +
        N(9) + "These changes are not caused by storms or warm water, which would affect the whole shelf; they follow the footsteps.</p>" +
        "<p>" + N(10) + "Some residents argue that permits would keep out families who cannot plan ahead. " +
        N(11) + "That concern is fair, which is why the permits should be free, available online and at the visitor center, and required only on the twelve busiest summer weekends. " +
        N(12) + "Weekday and off-season visitors would notice no change at all. " +
        N(13) + "Others say that better signs would solve the problem without limits. " +
        N(14) + "Signs help, but the county added new signs in 2019, and the mussel beds kept shrinking anyway.</p>" +
        "<p>" + N(15) + "A permit system is not a punishment; it is a way of sharing something fragile. " +
        N(16) + "Popular hiking trails and campgrounds already use reservations, and visitors accept them because they understand that some places cannot hold everyone at once. " +
        N(17) + "Morro Blanco's tide pools deserve the same care. " +
        N(18) + "If we want our children to kneel beside the same anemones we did, we have to give the pools room to recover between visits." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence states the author's main claim about the Morro Blanco tide pools?",
          choices: [
            { letter: "A", text: "Sentence 1, which reports the visitor count" },
            { letter: "B", text: "Sentence 3, about exploring since age five" },
            { letter: "C", text: "Sentence 5, which calls for weekend permits" },
            { letter: "D", text: "Sentence 16, about trails and campgrounds" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which evidence best supports the author's claim that visitors, rather than nature, are harming the pools?",
          choices: [
            { letter: "A", text: "Mussel beds shrank along the path but not away from it." },
            { letter: "B", text: "Volunteers counted 1,140 visitors in two hours." },
            { letter: "C", text: "Hiking trails and campgrounds use reservations." },
            { letter: "D", text: "The author has explored the pools since age five." }
          ],
          correct: "A"
        },
        {
          id: "families",
          sol: "10.RI.2.C",
          stem: "In sentences 10 through 12, the author responds to the worry about families who cannot plan ahead mainly by —",
          choices: [
            { letter: "A", text: "dismissing the worry as unimportant" },
            { letter: "B", text: "describing permit features that ease it" },
            { letter: "C", text: "agreeing that permits should be dropped" },
            { letter: "D", text: "criticizing the residents who raised it" }
          ],
          correct: "B"
        },
        {
          id: "para3",
          sol: "10.RI.2.A",
          stem: "How is the third paragraph of the permit argument (sentences 10 through 14) organized?",
          choices: [
            { letter: "A", text: "As two objections, each followed by a reply" },
            { letter: "B", text: "As a history of the cove told in time order" },
            { letter: "C", text: "As a chain of causes leading to one effect" },
            { letter: "D", text: "As a list of survey numbers from 2015 on" }
          ],
          correct: "A"
        },
        {
          id: "campgrounds",
          sol: "10.RI.1.C",
          stem: "The author mentions hiking trails and campgrounds in sentence 16 mainly to —",
          choices: [
            { letter: "A", text: "suggest that visitors go to other places instead" },
            { letter: "B", text: "complain about crowds at popular parks in summer" },
            { letter: "C", text: "prove that trails suffer the same kind of damage" },
            { letter: "D", text: "show that reservations are already accepted elsewhere" }
          ],
          correct: "D"
        },
        {
          id: "love",
          sol: "10.RI.2.B",
          stem: "In sentence 4, the statement that love has started to look a lot like harm mainly suggests that —",
          choices: [
            { letter: "A", text: "the author no longer enjoys visiting the pools" },
            { letter: "B", text: "visitors' enthusiasm, in great numbers, does damage" },
            { letter: "C", text: "most visitors secretly dislike the crowded shore" },
            { letter: "D", text: "the harm to the pools is mostly caused by storms" }
          ],
          correct: "B"
        },
        {
          id: "fragile",
          sol: "10.RV.1.A",
          stem: "The word fragile in sentence 15 shares the root frag-, meaning to break, with fragment and fraction. Based on this, a fragile place is one that is —",
          choices: [
            { letter: "A", text: "very old" },
            { letter: "B", text: "hard to reach" },
            { letter: "C", text: "widely known" },
            { letter: "D", text: "easily damaged" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
