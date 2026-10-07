/* SOL Labyrinth — Grade 11 long packs (stamina tier, nights 65–94), file 103.
 * Twelve LONG packs (390–520 words; paired texts 200–260 each; poem 24 lines), eight questions each.
 * Topics: early aviation; recycling and waste; chess tournaments; learning a new language.
 * Original Virginia EOC Reading-style content for the G11 family; no published text, no real people.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── LITERARY · early aviation ───────────────────────── */
    {
      id: "g11-rl-c103-wingshed",
      family: "G11",
      title: "The Wing Shed",
      kind: "Literary · 11.RL",
      blurb: "A bicycle repairman's homemade glider crashes in front of the town, and his niece has been watching the gulls.",
      level: 2,
      passage:
        "<p>" + N(1) + "The summer Hedda Lindqvist turned fifteen, her uncle Arvid stopped repairing bicycles and started building a bird. " +
        N(2) + "That was how the neighbors put it, leaning on the fence of the shop in the evenings, and they did not mean it kindly. " +
        N(3) + "The frame lay across two sawhorses in the back shed: spruce ribs, piano wire, and yards of muslin that Hedda's mother had hemmed at the kitchen table while pretending not to know what it was for.</p>" +
        "<p>" + N(4) + "Arvid had read every newspaper item about flying machines that reached their county, and he kept the clippings in a cigar box that smelled faintly of cedar and oil. " +
        N(5) + "He talked about lift and drag the way the minister talked about grace, as things you could not see but had better believe in. " +
        N(6) + "Hedda did not care about believing. " +
        N(7) + "She cared about the ribs, which she sanded until they were smooth as the inside of a shell, and about the gulls that followed the plow on her grandfather's land, which she watched for hours with her chin on her knees.</p>" +
        "<p>" + N(8) + "The first trial took place in late August on the long slope behind the church. " +
        N(9) + "Six boys from town came to watch, and one of them had brought a bag of plums, apparently expecting a show. " +
        N(10) + "Arvid ran down the hill with the glider over his shoulders, the muslin snapping, and for three strides the frame lifted him onto his toes. " +
        N(11) + "Then the left wing dipped, caught the grass, and the whole machine folded into the haystack at the bottom like a dropped umbrella. " +
        N(12) + "The boys laughed so hard that the plums rolled away down the hill.</p>" +
        "<p>" + N(13) + "Arvid sat in the hay for a long time. " +
        N(14) + "\"Maybe they are right,\" he said at last. " +
        N(15) + "\"Maybe a bicycle man should keep to bicycles.\"</p>" +
        "<p>" + N(16) + "Hedda was looking at the broken wing, not at him. " +
        N(17) + "\"The gulls don't hold their wings stiff,\" she said. " +
        N(18) + "\"When one side drops, they twist the tip, just a little, and it comes back up. " +
        N(19) + "I've watched them do it a thousand times.\" " +
        N(20) + "She showed him with her hands, turning one palm slightly, as if she were wringing out a cloth.</p>" +
        "<p>" + N(21) + "They spent September rebuilding. " +
        N(22) + "Hedda rigged cords from the wingtips to a wooden bar so that the pilot could bend the ends, and Arvid, who had been the teacher all summer, found himself asking her questions. " +
        N(23) + "On the second trial no one came to watch except Hedda's mother, who brought a blanket and a thermos of coffee. " +
        N(24) + "The glider rose, wobbled, and when the left wing sank, Arvid pulled the bar and felt it lift. " +
        N(25) + "He flew perhaps forty yards, no higher than a barn door, and landed on his feet.</p>" +
        "<p>" + N(26) + "That night he opened the logbook he had kept since spring. " +
        N(27) + "Under the date he wrote two names, and he wrote hers first.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story of Hedda and Arvid's glider most clearly develop?",
          choices: [
            { letter: "A", text: "Mockery from neighbors pushes inventors to work harder than praise would." },
            { letter: "B", text: "Patient observation can solve a problem that confident theory alone cannot." },
            { letter: "C", text: "Family members should support one another's dreams without question." },
            { letter: "D", text: "Success in invention depends mainly on having the right materials." }
          ],
          correct: "B"
        },
        {
          id: "bicycleman",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Arvid's words in sentences 14 and 15 most nearly suggest that he —",
          choices: [
            { letter: "A", text: "blames Hedda for the weakness of the left wing" },
            { letter: "B", text: "plans to sell the broken glider to the boys from town" },
            { letter: "C", text: "is tempted to accept the town's low opinion of him" },
            { letter: "D", text: "never truly believed that the glider would fly" }
          ],
          correct: "C"
        },
        {
          id: "questions",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "The detail in sentence 22 that Arvid found himself asking her questions reveals that —",
          choices: [
            { letter: "A", text: "he has begun to treat Hedda as an expert partner rather than a helper" },
            { letter: "B", text: "he no longer remembers the articles he collected in his cigar box" },
            { letter: "C", text: "he hopes Hedda will take the blame if the second trial goes badly" },
            { letter: "D", text: "he doubts that Hedda really watched the gulls as often as she says" }
          ],
          correct: "A"
        },
        {
          id: "umbrella",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 11, the comparison of the glider to a dropped umbrella mainly emphasizes —",
          choices: [
            { letter: "A", text: "how carefully the muslin had been stitched to the frame" },
            { letter: "B", text: "how the glider was meant to be folded and carried" },
            { letter: "C", text: "how much the crash embarrassed Hedda's mother" },
            { letter: "D", text: "how suddenly and limply the machine collapsed" }
          ],
          correct: "D"
        },
        {
          id: "grace",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Placed beside sentence 6, the comparison in sentence 5 between lift and the minister's idea of grace suggests that —",
          choices: [
            { letter: "A", text: "Arvid holds his ideas about flight as faith, while Hedda trusts what she can see" },
            { letter: "B", text: "Arvid and Hedda both treat the glider as a serious religious duty" },
            { letter: "C", text: "Hedda is more patient than Arvid about learning the science of flight" },
            { letter: "D", text: "the minister has warned the town against the dangers of flying machines" }
          ],
          correct: "A"
        },
        {
          id: "trial",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 8, the word trial most nearly means —",
          choices: [
            { letter: "A", text: "a hearing held before a judge" },
            { letter: "B", text: "a test of how something performs" },
            { letter: "C", text: "a period of hardship or suffering" },
            { letter: "D", text: "a contest between two rivals" }
          ],
          correct: "B"
        },
        {
          id: "kindly",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.2",
          stem: "The words they did not mean it kindly in sentence 2 show that the phrase building a bird is —",
          choices: [
            { letter: "A", text: "an admiring description of Arvid's talent" },
            { letter: "B", text: "a precise account of what Arvid is making" },
            { letter: "C", text: "a warning about the danger of the project" },
            { letter: "D", text: "a joke meant to make Arvid look foolish" }
          ],
          correct: "D"
        },
        {
          id: "logbook",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The final sentence resolves the story of the glider mainly by showing that Arvid —",
          choices: [
            { letter: "A", text: "plans to send his logbook to a newspaper so the town will believe him" },
            { letter: "B", text: "wants Hedda to keep the logbook now that he is giving up flying" },
            { letter: "C", text: "recognizes Hedda's idea as the key to the flight's success" },
            { letter: "D", text: "has forgotten the boys who laughed at the first failed trial" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LITERARY · chess tournaments ───────────────────────── */
    {
      id: "g11-rl-c103-sixtyfifth",
      family: "G11",
      title: "The Sixty-Fifth Square",
      kind: "Literary · 11.RL",
      blurb: "At the state championship, a winning player notices that his young opponent has forgotten to press her clock.",
      level: 3,
      passage:
        "<p>" + N(1) + "By the fifth round of the state scholastic championship, the ballroom of the Harbor Inn had stopped sounding like a hotel and started sounding like a clock shop. " +
        N(2) + "Two hundred digital timers clicked under two hundred hands, and the carpet swallowed everything else. " +
        N(3) + "Kofi Asante had a rook more than his opponent and eleven minutes less.</p>" +
        "<p>" + N(4) + "His coach, Mr. Brannigan, liked to say that the clock was the sixty-fifth square of the board, and Kofi had always nodded at this the way you nod at a weather report. " +
        N(5) + "Now he understood it. " +
        N(6) + "His position was winning in the way a mountain is climbable: true, but not quickly. " +
        N(7) + "Across the table, Mei-Lin Zhao, who was eleven and wore a sweatshirt that reached her knuckles, had played the last twenty moves almost instantly, setting small traps and then sitting back to study the ceiling while he worked his way out of them.</p>" +
        "<p>" + N(8) + "On move forty-one she pushed a pawn, wrote the move on her scoresheet, and forgot to press her clock.</p>" +
        "<p>" + N(9) + "Kofi saw it immediately. " +
        N(10) + "Her time, not his, was now draining: four minutes, then three fifty-nine, then three fifty-eight. " +
        N(11) + "The rules were clear; he had read them on the bus. " +
        N(12) + "A player is responsible for her own clock. " +
        N(13) + "He could simply think, as slowly as he liked, and the eleven-year-old would lose on time while studying the ceiling. " +
        N(14) + "No arbiter, the official who enforced those rules, would say a word. " +
        N(15) + "Mr. Brannigan, watching from the rope line, would probably call it good clock management.</p>" +
        "<p>" + N(16) + "He looked at the board and did not see the board. " +
        N(17) + "He saw himself at eleven, at a church basement tournament, crying in a stairwell because a teenager had beaten him without, it seemed, ever looking up from his phone. " +
        N(18) + "He remembered deciding, on that stairwell, that he would be a different kind of player, and he remembered how easy that promise had been to make when it cost nothing.</p>" +
        "<p>" + N(19) + "He tapped the table beside her clock, once. " +
        N(20) + "Mei-Lin looked down, went pink, and pressed it. " +
        N(21) + "\"Thanks,\" she whispered, the first word either of them had spoken in two hours.</p>" +
        "<p>" + N(22) + "The game went on for another eighteen minutes. " +
        N(23) + "With his own time low, Kofi pushed for a quick win, missed a quiet bishop move, and watched her steer the position into a stalemate so neat that a few spectators murmured. " +
        N(24) + "A draw. " +
        N(25) + "Half a point that would cost him a trophy.</p>" +
        "<p>" + N(26) + "Afterward Mr. Brannigan asked what had happened on move forty-one, and Kofi told him. " +
        N(27) + "The coach was quiet for a moment. " +
        N(28) + "\"Sixty-five squares,\" he said finally, \"and you found a sixty-sixth.\" " +
        N(29) + "Kofi did not know exactly what that meant, but walking out past the rows of ticking clocks, he found that he did not need to.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme developed through Kofi's choice on move forty-one?",
          choices: [
            { letter: "A", text: "Young players often defeat older ones by setting clever traps." },
            { letter: "B", text: "Strict tournament rules keep competition fair for everyone." },
            { letter: "C", text: "A promise to oneself matters most when keeping it has a cost." },
            { letter: "D", text: "Coaches understand the game better than the players they train." }
          ],
          correct: "C"
        },
        {
          id: "motive",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Which sentence best explains why Kofi decides to point out Mei-Lin's clock?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 18" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "B"
        },
        {
          id: "meilin",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 7 characterizes Mei-Lin as —",
          choices: [
            { letter: "A", text: "a quick, confident player who is more dangerous than she looks" },
            { letter: "B", text: "a nervous beginner who is unsure how to use a chess clock" },
            { letter: "C", text: "a bored player who is no longer paying attention to the game" },
            { letter: "D", text: "a careful player who takes a long time to plan each move" }
          ],
          correct: "A"
        },
        {
          id: "mountain",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 6, comparing Kofi's position to a climbable mountain conveys that —",
          choices: [
            { letter: "A", text: "Kofi is afraid that his position is about to collapse" },
            { letter: "B", text: "Kofi has already won and is waiting for Mei-Lin to resign" },
            { letter: "C", text: "the game has become too difficult for either player to finish" },
            { letter: "D", text: "the win is certain in principle but will take long, slow effort" }
          ],
          correct: "D"
        },
        {
          id: "clockshop",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The description in sentences 1 and 2 of the ballroom sounding like a clock shop mainly creates a mood of —",
          choices: [
            { letter: "A", text: "cheerful excitement among old friends" },
            { letter: "B", text: "tense, time-pressured concentration" },
            { letter: "C", text: "lonely boredom in an empty hotel" },
            { letter: "D", text: "noisy confusion during a long break" }
          ],
          correct: "B"
        },
        {
          id: "sixtysixth",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 28, Mr. Brannigan's words you found a sixty-sixth most nearly mean that Kofi —",
          choices: [
            { letter: "A", text: "found a clever rule that allowed him to claim the win anyway" },
            { letter: "B", text: "should have used the clock as a weapon, as he was taught" },
            { letter: "C", text: "made a counting error that cost him the bishop and the game" },
            { letter: "D", text: "discovered something that matters beyond the board and the clock" }
          ],
          correct: "D"
        },
        {
          id: "memory",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The author places Kofi's memory of the church basement (sentences 17 and 18) between Mei-Lin's mistake and his response mainly to —",
          choices: [
            { letter: "A", text: "pause the moment of decision and reveal what drives his choice" },
            { letter: "B", text: "explain how Kofi first learned the rules about chess clocks" },
            { letter: "C", text: "suggest that Kofi has been beaten by Mei-Lin once before" },
            { letter: "D", text: "show that Kofi is too distracted by the past to play well" }
          ],
          correct: "A"
        },
        {
          id: "arbiter",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 14, the words set off by commas show that an arbiter is —",
          choices: [
            { letter: "A", text: "a player waiting for the next round to begin" },
            { letter: "B", text: "a spectator who records moves from the rope line" },
            { letter: "C", text: "a tournament official who enforces the rules" },
            { letter: "D", text: "a coach who gives advice between games" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── POETRY · learning a new language ───────────────────────── */
    {
      id: "g11-rl-c103-subjunctive",
      family: "G11",
      title: "Subjunctive",
      kind: "Poetry · 11.RL",
      blurb: "A speaker learning her grandmother's language counts out her first words like coins, until one day she stops counting.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At first the words came single file,<br>" +
        L(2) + "each one stopped at the border of my mouth,<br>" +
        L(3) + "asked for its papers, and turned away.<br>" +
        L(4) + "Bread. Window. Thank you. Where is the station?<br>" +
        L(5) + "I carried them like coins in a foreign pocket,<br>" +
        L(6) + "counting them twice before I spent them.<br>" +
        L(7) + "My grandmother laughed at my verbs,<br>" +
        L(8) + "not unkindly, the way you laugh<br>" +
        L(9) + "at a puppy that runs into a door,<br>" +
        L(10) + "and fixed them while she cut the onions.<br>" +
        L(11) + "She had a tense for things that might still happen,<br>" +
        L(12) + "a mood for wishing, soft as the inside of bread,<br>" +
        L(13) + "and I could not find it in my grammar book<br>" +
        L(14) + "though I searched the index every night.<br>" +
        L(15) + "By winter the words had stopped lining up.<br>" +
        L(16) + "They came in crowds, elbowing,<br>" +
        L(17) + "some of them wrong, all of them mine,<br>" +
        L(18) + "and once, in the middle of an argument about soup,<br>" +
        L(19) + "I forgot that I was translating.<br>" +
        L(20) + "She noticed before I did.<br>" +
        L(21) + "She set down the knife and looked at me<br>" +
        L(22) + "the way you look at a door that has always been locked<br>" +
        L(23) + "and is suddenly, quietly, open.<br>" +
        L(24) + "Now when I dream, she speaks, and I answer." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem \"Subjunctive\"?",
          choices: [
            { letter: "A", text: "Learning a language deeply opens a closer bond with the people who speak it." },
            { letter: "B", text: "Grammar books are the most reliable way to master a difficult language." },
            { letter: "C", text: "Older relatives often find it hard to be patient with young learners." },
            { letter: "D", text: "Arguments within a family are easier to settle in a shared language." }
          ],
          correct: "A"
        },
        {
          id: "border",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In lines 1–3, describing the words as stopped at a border and asked for papers suggests that the speaker's early words were —",
          choices: [
            { letter: "A", text: "borrowed from a language she had studied as a child" },
            { letter: "B", text: "spoken loudly so that strangers could hear them" },
            { letter: "C", text: "slow and hesitant, each one checked before it was spoken" },
            { letter: "D", text: "mostly about travel because she was far from home" }
          ],
          correct: "C"
        },
        {
          id: "coins",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "The simile in lines 5 and 6 comparing words to coins in a foreign pocket mainly suggests that the speaker —",
          choices: [
            { letter: "A", text: "earned money by translating for her grandmother" },
            { letter: "B", text: "had only a few words and used them very carefully" },
            { letter: "C", text: "valued the new language more than her first one" },
            { letter: "D", text: "kept her vocabulary lists in her coat for safety" }
          ],
          correct: "B"
        },
        {
          id: "index",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.2",
          stem: "Lines 11–14 imply that the grandmother's mood for wishing —",
          choices: [
            { letter: "A", text: "was a mistake that the speaker learned to avoid" },
            { letter: "B", text: "was a private language the grandmother had invented" },
            { letter: "C", text: "appeared in the index under a name the speaker missed" },
            { letter: "D", text: "could be learned by living beside her, not from a book" }
          ],
          correct: "D"
        },
        {
          id: "grandmother",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Lines 7–10 characterize the grandmother as —",
          choices: [
            { letter: "A", text: "strict and impatient with the speaker's errors" },
            { letter: "B", text: "affectionate, correcting without making it a lesson" },
            { letter: "C", text: "too busy with cooking to notice the speaker's verbs" },
            { letter: "D", text: "embarrassed that the speaker cannot speak fluently" }
          ],
          correct: "B"
        },
        {
          id: "crowds",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the description of the words in lines 15–17 contrast with the description in lines 1–6?",
          choices: [
            { letter: "A", text: "The words are now spoken only in dreams instead of at the table." },
            { letter: "B", text: "The words now come from the grammar book instead of the grandmother." },
            { letter: "C", text: "The speaker now counts her words more carefully than before." },
            { letter: "D", text: "Orderly, guarded words have given way to a crowded, confident flow." }
          ],
          correct: "D"
        },
        {
          id: "elbowing",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 16, the word elbowing suggests that the words —",
          choices: [
            { letter: "A", text: "pushed forward eagerly without waiting their turn" },
            { letter: "B", text: "hurt the people who heard the speaker use them" },
            { letter: "C", text: "were spoken with angry gestures during the argument" },
            { letter: "D", text: "had to be forced out one at a time with great effort" }
          ],
          correct: "A"
        },
        {
          id: "tense",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In line 11, the word tense most nearly refers to —",
          choices: [
            { letter: "A", text: "a feeling of nervous strain" },
            { letter: "B", text: "a tightly stretched muscle" },
            { letter: "C", text: "a verb form that shows time" },
            { letter: "D", text: "a quiet moment of suspense" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── DRAMA · recycling and waste ───────────────────────── */
    {
      id: "g11-rl-c103-sortingtable",
      family: "G11",
      title: "The Sorting Table",
      kind: "Drama · 11.RL",
      blurb: "Two green-team members pulling lunch out of the recycling carts are ready to quit until the head custodian explains Thursday's truck.",
      level: 1,
      passage:
        "<p><em>" + N(1) + "A school loading dock after lunch. Three blue recycling carts stand open. JAVIER, sixteen, holds a clipboard. AISHA, fifteen, wears rubber gloves and is pulling a half-eaten burrito out of a cart.</em></p>" +
        "<p><strong>AISHA:</strong> " + N(2) + "This is the fourth burrito. " +
        N(3) + "Four. " +
        N(4) + "Who looks at a bin that says PAPER AND CANS and thinks, yes, this is where my lunch belongs?</p>" +
        "<p><strong>JAVIER:</strong> " + N(5) + "Put it on the list. " +
        N(6) + "<em>He writes.</em> " +
        N(7) + "Burritos, four. " +
        N(8) + "Milk cartons with milk still in them, nine. " +
        N(9) + "One sock.</p>" +
        "<p><strong>AISHA:</strong> " + N(10) + "A sock?</p>" +
        "<p><strong>JAVIER:</strong> " + N(11) + "Don't ask me. " +
        N(12) + "I just count.</p>" +
        "<p><em>" + N(13) + "MR. PETRAKIS, the head custodian, enters pushing an empty cart. He stops, leans on the handle, and peers into the bins.</em></p>" +
        "<p><strong>MR. PETRAKIS:</strong> " + N(14) + "Ah. " +
        N(15) + "The green team's daily treasure hunt.</p>" +
        "<p><strong>AISHA:</strong> " + N(16) + "Mr. Petrakis, can't you just tell the cafeteria monitors to yell at people? " +
        N(17) + "If everybody got yelled at once, they'd learn.</p>" +
        "<p><strong>MR. PETRAKIS:</strong> " + N(18) + "I've heard a lot of yelling in thirty years. " +
        N(19) + "I can't say I've ever seen it teach anybody where a milk carton goes.</p>" +
        "<p><strong>JAVIER:</strong> " + N(20) + "<em>Setting down the clipboard.</em> " +
        N(21) + "Honestly, maybe we should stop. " +
        N(22) + "We've been doing this since September, every single day after lunch, and the bins look exactly the same. " +
        N(23) + "It's like bailing out a boat with a fork.</p>" +
        "<p><strong>MR. PETRAKIS:</strong> " + N(24) + "Let me tell you something about these carts. " +
        N(25) + "When the truck comes on Thursday, the driver looks inside. " +
        N(26) + "If he sees too much food, he doesn't pick out the burritos. " +
        N(27) + "He hauls the whole load to the landfill. " +
        N(28) + "Everything. " +
        N(29) + "Your clean cans, too.</p>" +
        "<p><strong>AISHA:</strong> " + N(30) + "<em>Stunned.</em> So one burrito ruins all of it?</p>" +
        "<p><strong>MR. PETRAKIS:</strong> " + N(31) + "Not one. " +
        N(32) + "But enough of them, yes. " +
        N(33) + "That's why I don't think you should stop. " +
        N(34) + "I think you should move.</p>" +
        "<p><strong>JAVIER:</strong> " + N(35) + "Move where?</p>" +
        "<p><strong>MR. PETRAKIS:</strong> " + N(36) + "<em>Pointing back toward the cafeteria doors.</em> " +
        N(37) + "In there. " +
        N(38) + "Stand by the bins at lunch for a week. " +
        N(39) + "Don't yell. " +
        N(40) + "Just say, \"Cans here, food there,\" and smile like you mean it. " +
        N(41) + "People throw things in the wrong place because they're in a hurry, not because they're villains.</p>" +
        "<p><strong>AISHA:</strong> " + N(42) + "<em>Pulling off her gloves slowly.</em> " +
        N(43) + "So instead of cleaning up the mistake, we stand where the mistake happens.</p>" +
        "<p><strong>MR. PETRAKIS:</strong> " + N(44) + "Now you sound like a custodian.</p>" +
        "<p><strong>JAVIER:</strong> " + N(45) + "<em>Picking up the clipboard again and turning to a fresh page.</em> " +
        N(46) + "Okay. " +
        N(47) + "Day one. " +
        N(48) + "Burritos, zero. " +
        N(49) + "That's the goal.</p>" +
        "<p><em>" + N(50) + "AISHA laughs and tosses her gloves onto the lid of the nearest cart, as if she is finished with them. MR. PETRAKIS pushes his cart off, whistling. The lights fade on the open blue bins.</em></p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which idea does the scene at the loading dock most clearly develop?",
          choices: [
            { letter: "A", text: "Adults usually have easier answers than students expect." },
            { letter: "B", text: "Recycling programs rarely succeed in large public schools." },
            { letter: "C", text: "Firm punishment is the quickest way to change a bad habit." },
            { letter: "D", text: "Preventing a problem at its source works better than cleanup." }
          ],
          correct: "D"
        },
        {
          id: "truck",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Mr. Petrakis's explanation in sentences 25–29 affects the conflict mainly by —",
          choices: [
            { letter: "A", text: "showing that the food in the carts puts all of the team's work at risk" },
            { letter: "B", text: "proving that the truck driver has been careless with the school's carts" },
            { letter: "C", text: "convincing Javier that the green team should stop sorting at once" },
            { letter: "D", text: "revealing that the cafeteria monitors have ignored the problem" }
          ],
          correct: "A"
        },
        {
          id: "freshpage",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Javier's words and actions in sentences 45–49 show that he —",
          choices: [
            { letter: "A", text: "still believes the green team's effort is pointless" },
            { letter: "B", text: "wants to prove that Aisha's idea of yelling was right" },
            { letter: "C", text: "has regained his motivation and redefined success" },
            { letter: "D", text: "is joking because he plans to quit the team anyway" }
          ],
          correct: "C"
        },
        {
          id: "fork",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 23, Javier's comparison to bailing out a boat with a fork conveys that —",
          choices: [
            { letter: "A", text: "the carts are leaking because they are badly made" },
            { letter: "B", text: "the team's effort feels hopelessly small for the problem" },
            { letter: "C", text: "Javier would rather be outdoors than at the loading dock" },
            { letter: "D", text: "the cafeteria has run out of proper utensils for lunch" }
          ],
          correct: "B"
        },
        {
          id: "treasure",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.1",
          stem: "Mr. Petrakis's phrase the green team's daily treasure hunt (sentence 15) is best described as —",
          choices: [
            { letter: "A", text: "harsh criticism of the team's lack of progress" },
            { letter: "B", text: "sincere praise for the valuable items they find" },
            { letter: "C", text: "gentle irony, since what they dig up is trash" },
            { letter: "D", text: "a hint that he has lost something in the carts" }
          ],
          correct: "C"
        },
        {
          id: "custodian",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 44, Mr. Petrakis tells Aisha that she sounds like a custodian. He most nearly means that she —",
          choices: [
            { letter: "A", text: "now thinks practically about stopping messes before they start" },
            { letter: "B", text: "has decided to apply for a job on the school's cleaning staff" },
            { letter: "C", text: "is complaining about other people's habits the way he does" },
            { letter: "D", text: "has learned to sort the recycling faster than anyone else" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The ending of the scene (sentences 45–50) connects to its opening mainly by —",
          choices: [
            { letter: "A", text: "returning to the burrito Aisha pulled from the cart at the start" },
            { letter: "B", text: "showing that the carts are just as full as they were before" },
            { letter: "C", text: "repeating Mr. Petrakis's complaint about the yelling monitors" },
            { letter: "D", text: "turning Javier's tally of failures into a count with a goal" }
          ],
          correct: "D"
        },
        {
          id: "load",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 27, the word load most nearly refers to —",
          choices: [
            { letter: "A", text: "a heavy burden of worry" },
            { letter: "B", text: "all the material gathered for pickup" },
            { letter: "C", text: "the amount of work assigned to a person" },
            { letter: "D", text: "a single trip made by the custodian's cart" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── INFORMATIONAL · early aviation ───────────────────────── */
    {
      id: "g11-ri-c103-neverjustlift",
      family: "G11",
      title: "The Problem Was Never Just Lift",
      kind: "Informational · 11.RI",
      blurb: "Why the hardest part of early flight was not the engine but the wing, and how small boxes of moving air changed everything.",
      level: 2,
      passage:
        "<p>" + N(1) + "When people picture the first flying machines, they usually imagine the engine: a sputtering motor, a spinning propeller, a roar across an empty field. " +
        N(2) + "Yet for many of the experimenters who chased powered flight at the end of the 1800s, the engine was not the hardest part. " +
        N(3) + "Lightweight gasoline motors were already being built for automobiles and boats. " +
        N(4) + "The harder questions were about the wing itself: how much it could lift, and, even more difficult, how a pilot could keep it steady once it was in the air.</p>" +
        "<p>" + N(5) + "The first question looked as though it had already been answered. " +
        N(6) + "Earlier researchers had published tables predicting the lift of curved wings at different angles, and many builders trusted those numbers. " +
        N(7) + "But glider after glider failed to rise as the tables promised. " +
        N(8) + "Some experimenters concluded that their own craftsmanship was at fault. " +
        N(9) + "Others began to suspect the tables.</p>" +
        "<p>" + N(10) + "To find out, a few builders made their own measuring tools. " +
        N(11) + "The simplest was a wind tunnel: a long wooden box with a fan at one end, through which air could be pushed at a steady speed past a small model wing. " +
        N(12) + "Delicate balances, sometimes assembled from bicycle spokes and hacksaw blades, recorded how hard the air pushed up and back on each model. " +
        N(13) + "Testing hundreds of small shapes this way cost almost nothing compared with crashing full-size gliders, and it produced a surprising result: several of the old figures were simply wrong.</p>" +
        "<p>" + N(14) + "Lift, however, only got a machine off the ground. " +
        N(15) + "Staying aloft was a matter of control, and here the most useful teachers were birds. " +
        N(16) + "Observers noticed that a soaring bird does not hold its wings rigid; when a gust tips it, the bird adjusts the angle of its wingtips to roll itself level. " +
        N(17) + "Builders copied the idea by twisting, or \"warping,\" the ends of flexible wings with cables, and later by adding small hinged flaps that did the same job on stiffer wings. " +
        N(18) + "A pilot could now bank into a turn and recover from a gust instead of simply hoping the air stayed calm.</p>" +
        "<p>" + N(19) + "Each of these advances came from the same habit of mind. " +
        N(20) + "The successful experimenters treated every failure as data. " +
        N(21) + "A broken rib, a stall, a gentle slide into a sand dune: each one was written down, measured, and compared. " +
        N(22) + "The science of aerodynamics, which now shapes everything from jetliners to racing bicycles, grew partly out of notebooks like theirs.</p>" +
        "<p>" + N(23) + "It is tempting to remember early aviation as a story of daring. " +
        N(24) + "Daring mattered, but patience mattered more. " +
        N(25) + "The first powered flights lasted only seconds, and behind each of those seconds stood months of careful, unglamorous measuring.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of \"The Problem Was Never Just Lift\"?",
          choices: [
            { letter: "A", text: "Early aviators succeeded mainly because they were braver than other inventors." },
            { letter: "B", text: "Early flight depended on patient measurement that solved both lift and control." },
            { letter: "C", text: "The invention of light gasoline engines made powered flight possible at last." },
            { letter: "D", text: "Birds fly more efficiently than any machine that people have ever built." }
          ],
          correct: "B"
        },
        {
          id: "tunnel",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, why did some builders construct wind tunnels?",
          choices: [
            { letter: "A", text: "to train pilots safely before their first real flights" },
            { letter: "B", text: "to test the power of new gasoline motors indoors" },
            { letter: "C", text: "to copy the way birds roll level after a gust" },
            { letter: "D", text: "to check whether the published lift tables were right" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "The author's attitude toward the early experimenters is best described as —",
          choices: [
            { letter: "A", text: "admiring of their methodical patience more than their bravery" },
            { letter: "B", text: "doubtful that their work led to any lasting scientific progress" },
            { letter: "C", text: "amused by the homemade tools they used in their workshops" },
            { letter: "D", text: "critical of the risks they took with full-size gliders" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 5–18?",
          choices: [
            { letter: "A", text: "by listing the inventors of each flying machine in order of fame" },
            { letter: "B", text: "by comparing the costs of gliders with the costs of engines" },
            { letter: "C", text: "by presenting two problems, lift and then control, and how each was solved" },
            { letter: "D", text: "by describing one experimenter's life from childhood to success" }
          ],
          correct: "C"
        },
        {
          id: "motors",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "explain why early airplanes were often mistaken for boats" },
            { letter: "B", text: "show that automobile makers were the first to try flying" },
            { letter: "C", text: "suggest that engines were the most dangerous part of a plane" },
            { letter: "D", text: "support the claim that the engine was not the hardest problem" }
          ],
          correct: "D"
        },
        {
          id: "spokes",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author mentions bicycle spokes and hacksaw blades in sentence 12 mainly to emphasize that the measuring tools were —",
          choices: [
            { letter: "A", text: "borrowed from the factories that built racing bicycles" },
            { letter: "B", text: "simple and cheap, yet good enough to overturn old figures" },
            { letter: "C", text: "too fragile to give the builders any reliable results" },
            { letter: "D", text: "dangerous to use without special safety training" }
          ],
          correct: "B"
        },
        {
          id: "aero",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word aerodynamics in sentence 22 begins with aero-, as do aerospace and aerial. In all three words, aero- refers to —",
          choices: [
            { letter: "A", text: "air" },
            { letter: "B", text: "speed" },
            { letter: "C", text: "height" },
            { letter: "D", text: "power" }
          ],
          correct: "A"
        },
        {
          id: "rigid",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 16, the word rigid most nearly means —",
          choices: [
            { letter: "A", text: "folded close to the body" },
            { letter: "B", text: "spread as wide as possible" },
            { letter: "C", text: "stiff and unmoving" },
            { letter: "D", text: "strong and heavy" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── INFORMATIONAL · recycling and waste ───────────────────────── */
    {
      id: "g11-ri-c103-wishcycling",
      family: "G11",
      title: "The Cost of Hopeful Recycling",
      kind: "Informational · 11.RI",
      blurb: "A greasy pizza box in the blue bin seems harmless. Inside a sorting facility, it is anything but.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every week, millions of people drop items into recycling bins on the strength of a hunch. " +
        N(2) + "A greasy pizza box, a garden hose, a plastic shopping bag, a coffee cup lined with wax: surely, the thinking goes, it is better to give these things a chance than to throw them away. " +
        N(3) + "Workers in the recycling industry have a name for this habit. " +
        N(4) + "They call it wishcycling, and many of them consider it one of the most expensive problems they face.</p>" +
        "<p>" + N(5) + "To understand why, it helps to follow a bin after the truck empties it. " +
        N(6) + "Most curbside recycling goes to a materials recovery facility, a warehouse full of conveyor belts, spinning screens, magnets, and air jets that separate a jumbled stream into clean piles of paper, cardboard, metal, and certain plastics. " +
        N(7) + "The machines are designed for the items they expect. " +
        N(8) + "Anything else creates trouble.</p>" +
        "<p>" + N(9) + "Plastic bags and hoses are among the worst offenders. " +
        N(10) + "At one mid-sized facility, the operations manager describes how film plastic wraps around the rotating shafts of the paper screens until the machines jam. " +
        N(11) + "Twice a day, the line is shut down so that workers wearing harnesses can climb onto the screens and cut the tangles free with knives. " +
        N(12) + "\"It's not dramatic,\" she says, \"but it's an hour of lost sorting, every day, because someone hoped.\" " +
        N(13) + "Food and liquids cause a quieter kind of damage: they soak into paper and cardboard, lowering the quality of everything they touch.</p>" +
        "<p>" + N(14) + "Quality matters because recycling is a business. " +
        N(15) + "Sorted materials are pressed into bales, large blocks squeezed tight and bound with wire, and sold to mills and manufacturers, and those buyers inspect what they receive. " +
        N(16) + "A bale of cardboard with too much food or plastic mixed in may sell for far less, or it may be rejected entirely and sent to a landfill after all. " +
        N(17) + "In other words, the hopeful pizza box does not merely fail to be recycled; it can drag down the value of the clean materials around it.</p>" +
        "<p>" + N(18) + "None of this means that recycling is pointless. " +
        N(19) + "Clean aluminum cans, for example, can be melted and remade with a fraction of the energy needed to produce new metal, and the market for them remains strong. " +
        N(20) + "The lesson is narrower and more practical. " +
        N(21) + "A recycling system works best when the items going into it match what it was built to handle.</p>" +
        "<p>" + N(22) + "Many communities now print shorter, clearer lists on their bins and encourage a simple rule: when in doubt, throw it out. " +
        N(23) + "The rule sounds backward to people who were taught that recycling is always the responsible choice. " +
        N(24) + "Yet in a system built on sorting, the most helpful thing a household can offer is not more material, but better material.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The central idea of \"The Cost of Hopeful Recycling\" is that —",
          choices: [
            { letter: "A", text: "well-meant but wrong recycling harms a system that depends on clean, sorted material" },
            { letter: "B", text: "recycling costs more than it saves and should be replaced by landfills" },
            { letter: "C", text: "sorting machines are too old to handle the products people buy today" },
            { letter: "D", text: "aluminum is the only material that is still worth putting in a bin" }
          ],
          correct: "A"
        },
        {
          id: "film",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the article, what happens when film plastic reaches the paper screens?",
          choices: [
            { letter: "A", text: "Air jets blow it into a separate pile for plastic buyers." },
            { letter: "B", text: "Magnets pull it off the belt before it can do any damage." },
            { letter: "C", text: "It wraps around the shafts until the line must shut down." },
            { letter: "D", text: "It soaks into the paper and lowers the price of each bale." }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The author wrote this article mainly to —",
          choices: [
            { letter: "A", text: "praise the workers who climb onto jammed sorting machines" },
            { letter: "B", text: "explain why wishcycling hurts recycling and urge better sorting" },
            { letter: "C", text: "argue that curbside recycling programs should be shut down" },
            { letter: "D", text: "describe how aluminum cans are melted down and remade" }
          ],
          correct: "B"
        },
        {
          id: "follow",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author organizes sentences 5–17 mainly by —",
          choices: [
            { letter: "A", text: "comparing recycling rules in several different communities" },
            { letter: "B", text: "listing the materials that can and cannot be recycled" },
            { letter: "C", text: "telling the life story of one facility's operations manager" },
            { letter: "D", text: "following recyclables through sorting and sale to show the harm" }
          ],
          correct: "D"
        },
        {
          id: "notpointless",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes sentences 18 and 19 mainly to —",
          choices: [
            { letter: "A", text: "show that aluminum causes more jams than plastic bags" },
            { letter: "B", text: "suggest that cans should be thrown out when in doubt" },
            { letter: "C", text: "keep readers from concluding that recycling is worthless" },
            { letter: "D", text: "explain why the facility shuts down twice every day" }
          ],
          correct: "C"
        },
        {
          id: "hoped",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "In sentence 12, the manager's closing words because someone hoped create a tone that is —",
          choices: [
            { letter: "A", text: "wry and weary" },
            { letter: "B", text: "angry and threatening" },
            { letter: "C", text: "cheerful and proud" },
            { letter: "D", text: "puzzled and unsure" }
          ],
          correct: "A"
        },
        {
          id: "wishcycling",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Sentences 1–3 show that the word wishcycling in sentence 4 means —",
          choices: [
            { letter: "A", text: "recycling only the items that are listed on the bin" },
            { letter: "B", text: "buying products made from recycled materials" },
            { letter: "C", text: "sorting recycling by hand at a large facility" },
            { letter: "D", text: "tossing doubtful items in the bin on a hopeful guess" }
          ],
          correct: "D"
        },
        {
          id: "bales",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "As used in sentence 15, the word bales most nearly means —",
          choices: [
            { letter: "A", text: "loose heaps of trash" },
            { letter: "B", text: "tightly pressed bundles" },
            { letter: "C", text: "shipping containers" },
            { letter: "D", text: "rolls of film plastic" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── ARGUMENT · learning a new language ───────────────────────── */
    {
      id: "g11-ri-c103-talkfirst",
      family: "G11",
      title: "Talk First",
      kind: "Argument · 11.RI",
      blurb: "A junior who can conjugate a verb in six tenses but froze at a bus stop argues for giving class time back to conversation.",
      level: 3,
      passage:
        "<p><strong>Talk First</strong> — an opinion column by Leilani Kahale, junior, for the Fairmont High <em>Ledger</em></p>" +
        "<p>" + N(1) + "In my third year of Spanish, I can conjugate the verb tener in six tenses, two moods, and, if pressed, a seventh tense that our textbook admits almost nobody uses. " +
        N(2) + "Last summer, when a woman at a bus stop in our own town asked me in Spanish which bus went downtown, I stood there with my mouth open and pointed. " +
        N(3) + "That moment is the best argument I know for changing how our school teaches world languages.</p>" +
        "<p>" + N(4) + "Right now, most of our class time goes to charts, vocabulary lists, and quizzes that ask us to fill in blanks. " +
        N(5) + "We spend, by my count from last semester's planner, about fifteen minutes a week actually speaking with one another, usually reading aloud from a script. " +
        N(6) + "I propose a simple shift: at least half of every class period should be spent in unrehearsed conversation, with grammar taught as it is needed rather than as the main event.</p>" +
        "<p>" + N(7) + "Supporters of the current system will say that conversation without grammar produces sloppy speakers who repeat their mistakes until the mistakes become permanent. " +
        N(8) + "That concern is fair. " +
        N(9) + "Nobody wants to spend the rest of their life saying the Spanish equivalent of \"I have hungry\" instead of \"I am hungry.\" " +
        N(10) + "But the choice is not between grammar and talk. " +
        N(11) + "Grammar sticks better when it is attached to something we actually wanted to say. " +
        N(12) + "I learned the past tense of ir in about four seconds on the day I needed to tell a classmate where I went over the weekend; I had failed a quiz on the same verb two weeks before.</p>" +
        "<p>" + N(13) + "Our own students agree. " +
        N(14) + "When the language club surveyed ninety-two students across all levels this fall, seventy-one said they felt \"not confident\" speaking outside of class, and most said they wanted more speaking practice. " +
        N(15) + "Only nine wanted more written quizzes. " +
        N(16) + "The teachers I spoke with were sympathetic, too; one told me that the curriculum leaves her \"no room to let a conversation wander, even when the wandering is where the learning is.\"</p>" +
        "<p>" + N(17) + "Some worry that conversation is hard to grade. " +
        N(18) + "It is harder than grading a fill-in-the-blank, but it is not impossible. " +
        N(19) + "A short monthly speaking check, scored on whether a student was understood and could keep a conversation going, would measure what we actually want students to be able to do.</p>" +
        "<p>" + N(20) + "Languages exist so that people can understand each other. " +
        N(21) + "A student who can recite a verb chart but cannot help a stranger find the right bus has learned a great deal about Spanish and very little Spanish. " +
        N(22) + "Let's give class time back to the part of language that happens out loud.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "What is Leilani's central claim in \"Talk First\"?",
          choices: [
            { letter: "A", text: "Grammar quizzes should be removed from language classes entirely." },
            { letter: "B", text: "Students should study a language abroad before taking it in school." },
            { letter: "C", text: "Classes should give far more time to real talk, with grammar in support." },
            { letter: "D", text: "Teachers should be allowed to choose which language each student takes." }
          ],
          correct: "C"
        },
        {
          id: "survey",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which sentence provides the most direct evidence that students want more speaking practice?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence from \"Talk First\" states an opinion rather than a fact that could be checked?",
          choices: [
            { letter: "A", text: "Grammar sticks better when it is attached to something we actually wanted to say." },
            { letter: "B", text: "Only nine wanted more written quizzes." },
            { letter: "C", text: "Some worry that conversation is hard to grade." },
            { letter: "D", text: "Right now, most of our class time goes to charts, vocabulary lists, and quizzes." }
          ],
          correct: "A"
        },
        {
          id: "rebuttal",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does Leilani develop the argument in sentences 7–12?",
          choices: [
            { letter: "A", text: "She lists statistics from other schools that use her plan." },
            { letter: "B", text: "She grants part of an opposing concern, then answers it." },
            { letter: "C", text: "She retells the bus stop story from a different angle." },
            { letter: "D", text: "She explains step by step how to conjugate a verb." }
          ],
          correct: "B"
        },
        {
          id: "busstop",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Leilani opens with the bus stop story in sentences 1–3 mainly to —",
          choices: [
            { letter: "A", text: "show that her town needs clearer signs at its bus stops" },
            { letter: "B", text: "prove that she has studied Spanish longer than her classmates" },
            { letter: "C", text: "admit that she is too shy to speak Spanish with strangers" },
            { letter: "D", text: "dramatize the gap between knowing grammar and speaking" }
          ],
          correct: "D"
        },
        {
          id: "aboutspanish",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "In sentence 21, the contrast between learning about Spanish and learning Spanish mainly emphasizes that —",
          choices: [
            { letter: "A", text: "knowing the rules of a language is not the same as using it" },
            { letter: "B", text: "history lessons about Spanish-speaking countries are missing" },
            { letter: "C", text: "students learn more Spanish outside school than inside it" },
            { letter: "D", text: "verb charts are too difficult for most beginning students" }
          ],
          correct: "A"
        },
        {
          id: "unrehearsed",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word unrehearsed in sentence 6 is built from the prefix un- and the word rehearsed. The word describes conversation that is —",
          choices: [
            { letter: "A", text: "repeated several times until it is perfect" },
            { letter: "B", text: "not practiced or scripted ahead of time" },
            { letter: "C", text: "spoken in a loud and confident voice" },
            { letter: "D", text: "graded by a teacher at the end of class" }
          ],
          correct: "B"
        },
        {
          id: "wander",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 16, the teacher's words even when the wandering is where the learning is show that wander here means to —",
          choices: [
            { letter: "A", text: "walk around the classroom during a lesson" },
            { letter: "B", text: "lose interest and stop paying attention" },
            { letter: "C", text: "leave school grounds without permission" },
            { letter: "D", text: "drift naturally away from a planned topic" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── FUNCTIONAL TEXT · chess tournaments ───────────────────────── */
    {
      id: "g11-ri-c103-riverbendopen",
      family: "G11",
      title: "Riverbend Scholastic Open",
      kind: "Functional text · 11.RI",
      blurb: "Check-in times, touch-move, phones and the rope line: the player and family guide for a one-day school chess tournament.",
      level: 1,
      passage:
        "<p><strong>Riverbend Scholastic Chess Open — Player and Family Guide</strong></p>" +
        "<p>" + N(1) + "Welcome to the twelfth annual Riverbend Scholastic Open, held Saturday, March 14, in the gymnasium of Riverbend Middle School. " +
        N(2) + "This guide explains how the day will run, what players need to bring, and the rules that apply in every section. " +
        N(3) + "Please read it with your player before the tournament.</p>" +
        "<p><strong>Schedule</strong> " + N(4) + "Check-in opens at 7:30 a.m. in the front lobby and closes at 8:15 a.m. sharp. " +
        N(5) + "Players who have not checked in by 8:15 will not be paired for round one, though they may join in round two with a half-point bye. " +
        N(6) + "Round one begins at 8:45 a.m., and later rounds start as soon as all games in the previous round have finished. " +
        N(7) + "The awards ceremony is expected to begin at about 4:00 p.m.</p>" +
        "<p><strong>Sections</strong> " + N(8) + "Players compete in one of three sections based on grade: Primary (kindergarten through grade 3), Elementary (grades 4 through 6), and Open (grades 7 through 12). " +
        N(9) + "All sections play five rounds. " +
        N(10) + "Each player receives 30 minutes for the whole game, plus a five-second delay on every move.</p>" +
        "<p><strong>What to Bring</strong> " + N(11) + "The tournament provides boards, pieces, and scoresheets. " +
        N(12) + "Players should bring two pencils and, if they own one, a digital chess clock. " +
        N(13) + "Bring a water bottle and a snack; the concession stand will be open, but lines between rounds can be long.</p>" +
        "<p><strong>Rules of Play</strong> " + N(14) + "The touch-move rule is in effect in all sections: a player who deliberately touches a piece must move that piece, if it has a legal move. " +
        N(15) + "Players in the Elementary and Open sections must record every move on their scoresheets; Primary players are encouraged but not required to do so. " +
        N(16) + "Electronic devices, including phones and smartwatches, must be switched off and kept in a bag away from the playing area. " +
        N(17) + "A player whose phone makes a sound during a game may be penalized, and a second offense results in the loss of the game.</p>" +
        "<p><strong>Questions and Disputes</strong> " + N(18) + "If a problem arises during a game, players should stop the clock and raise a hand to call a tournament director. " +
        N(19) + "Players should never try to settle a disagreement on their own, and parents and coaches may not step in during a game in progress. " +
        N(20) + "The tournament director's decision on all disputes is final.</p>" +
        "<p><strong>Parents and Spectators</strong> " + N(21) + "To keep the playing room quiet, spectators may watch from behind the rope line only during the first ten minutes of each round. " +
        N(22) + "After that, the gym is reserved for players and staff. " +
        N(23) + "The cafeteria, just down the hall, will serve as a waiting area with tables, outlets, and a posted pairing sheet. " +
        N(24) + "Results will be posted there after each round.</p>" +
        "<p><strong>Awards</strong> " + N(25) + "Trophies will be presented to the top ten finishers in each section and to the top three school teams. " +
        N(26) + "Every player will also receive a commemorative medal, a keepsake to remember the day.</p>",
      claims: [
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The Riverbend guide is written mainly for —",
          choices: [
            { letter: "A", text: "tournament directors who will settle disputes" },
            { letter: "B", text: "players in the tournament and their families" },
            { letter: "C", text: "school staff who will set up the gymnasium" },
            { letter: "D", text: "reporters who will cover the awards ceremony" }
          ],
          correct: "B"
        },
        {
          id: "late",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guide, what happens to a player who arrives to check in at 8:25 a.m.?",
          choices: [
            { letter: "A", text: "The player must sit out the entire tournament." },
            { letter: "B", text: "The player starts round one with less time on the clock." },
            { letter: "C", text: "The player is moved down into the Primary section." },
            { letter: "D", text: "The player misses round one but may join in round two." }
          ],
          correct: "D"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold headings in the Riverbend guide mainly help a reader —",
          choices: [
            { letter: "A", text: "find the information on one topic quickly" },
            { letter: "B", text: "understand the history of the tournament" },
            { letter: "C", text: "learn which rules matter most to the director" },
            { letter: "D", text: "follow the steps of a chess game in order" }
          ],
          correct: "A"
        },
        {
          id: "snack",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The guide mentions long concession lines in sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "warn families that the food will be expensive" },
            { letter: "B", text: "explain why the rounds may start late in the day" },
            { letter: "C", text: "give a reason for players to bring their own snack" },
            { letter: "D", text: "encourage parents to volunteer at the concession stand" }
          ],
          correct: "C"
        },
        {
          id: "final",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence makes clear that a tournament director's ruling cannot be appealed?",
          choices: [
            { letter: "A", text: "Sentence 17" },
            { letter: "B", text: "Sentence 18" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "C"
        },
        {
          id: "touchmove",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The explanation after the colon in sentence 14 shows that the touch-move rule means —",
          choices: [
            { letter: "A", text: "pieces may be touched only by the tournament director" },
            { letter: "B", text: "a player must touch the clock after every single move" },
            { letter: "C", text: "a player may adjust pieces freely before making a move" },
            { letter: "D", text: "a piece touched on purpose must be moved if it can be" }
          ],
          correct: "D"
        },
        {
          id: "spectators",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which choice best summarizes what the guide expects of parents and spectators?",
          choices: [
            { letter: "A", text: "Watch briefly from the rope line, never step into a game, then wait in the cafeteria." },
            { letter: "B", text: "Stay in the gym for every round so players feel supported by their families." },
            { letter: "C", text: "Help the directors record moves and settle disputes between young players." },
            { letter: "D", text: "Check players in at the lobby and post the results after each round ends." }
          ],
          correct: "A"
        },
        {
          id: "commemorative",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 26, the word commemorative most nearly means —",
          choices: [
            { letter: "A", text: "given only to winners" },
            { letter: "B", text: "serving as a reminder of an event" },
            { letter: "C", text: "made of valuable metal" },
            { letter: "D", text: "awarded by a team's coach" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── VOCABULARY · recycling and waste ───────────────────────── */
    {
      id: "g11-rv-c103-repaircafe",
      family: "G11",
      title: "The Repair Café",
      kind: "Vocabulary · 11.RV",
      blurb: "Once a month, a library room fills with broken toasters, lamps and bikes, and volunteers who refuse to call them trash.",
      level: 1,
      passage:
        "<p>" + N(1) + "On the first Saturday of every month, the community room of the Eastgate Branch Library fills with broken things. " +
        N(2) + "A toaster that sparks, a lamp with a frayed cord, a jacket with a stuck zipper, a child's robot that no longer rolls: people carry them in, sign a clipboard, and wait their turn at long folding tables. " +
        N(3) + "This is the Eastgate Repair Café, and its volunteers share one goal, to <strong>salvage</strong> objects that would otherwise end up in a landfill.</p>" +
        "<p>" + N(4) + "The café began four years ago when Farida Haidari, a retired electrician, noticed how many working appliances her neighbors set out on the curb with only a small problem. " +
        N(5) + "\"A toaster with a loose wire isn't trash,\" she says. " +
        N(6) + "\"It's a ten-minute job.\" " +
        N(7) + "She recruited a handful of friends who could sew, solder, or sharpen, and they set up in the library with their own tools.</p>" +
        "<p>" + N(8) + "Today about twenty volunteers take part. " +
        N(9) + "Some focus on electronics; others <strong>refurbish</strong> furniture, sanding scratched tabletops and regluing loose chair legs until the pieces look nearly new. " +
        N(10) + "A high school junior named Mateo Ruiz runs the bicycle table, where he has fixed more than two hundred flat tires and slipping chains.</p>" +
        "<p>" + N(11) + "The volunteers do more than repair. " +
        N(12) + "They teach. " +
        N(13) + "Visitors are expected to sit beside the fixer and watch, and often they are handed the screwdriver. " +
        N(14) + "Haidari believes this is the most important part. " +
        N(15) + "\"Once you've opened something up and seen how it works, you stop thinking of it as a mystery,\" she explains. " +
        N(16) + "\"You start thinking of it as something you can take care of.\"</p>" +
        "<p>" + N(17) + "Not everything can be saved. " +
        N(18) + "Some devices are glued shut so tightly that opening them destroys the case, and some depend on parts that manufacturers no longer make. " +
        N(19) + "A phone charger from fifteen years ago may be perfectly sound yet <strong>obsolete</strong>, because nothing sold today will plug into it. " +
        N(20) + "Volunteers sometimes have to tell a disappointed owner that a beloved gadget has reached the end of its life.</p>" +
        "<p>" + N(21) + "Still, the café's records show that about two out of every three items brought in leave working. " +
        N(22) + "Volunteers have noticed a pattern: older products, built with screws instead of glue and metal instead of thin plastic, tend to be more <strong>durable</strong> and easier to fix. " +
        N(23) + "Many newer items are essentially <strong>disposable</strong>, designed to be used for a while and replaced rather than repaired.</p>" +
        "<p>" + N(24) + "What keeps people coming back, Mateo says, is the moment when a dead machine comes to life. " +
        N(25) + "\"Somebody's grandmother's radio crackles on, and the whole room claps.\" " +
        N(26) + "It is a small celebration of human <strong>ingenuity</strong>, the cleverness that lets ordinary people solve problems with a few tools and a little patience.</p>",
      claims: [
        {
          id: "salvage",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word salvage most nearly means to —",
          choices: [
            { letter: "A", text: "save from being lost or destroyed" },
            { letter: "B", text: "sell at a lower price than before" },
            { letter: "C", text: "take apart for scrap metal" },
            { letter: "D", text: "clean thoroughly before use" }
          ],
          correct: "A"
        },
        {
          id: "refurbish",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word refurbish in sentence 9 begins with the prefix re-, as do restore and rebuild. In these words, re- signals that something is —",
          choices: [
            { letter: "A", text: "sold to a new owner" },
            { letter: "B", text: "made fresh or new again" },
            { letter: "C", text: "moved to another place" },
            { letter: "D", text: "checked before it is used" }
          ],
          correct: "B"
        },
        {
          id: "obsolete",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The explanation that follows because in sentence 19 shows that obsolete means —",
          choices: [
            { letter: "A", text: "broken beyond any hope of repair" },
            { letter: "B", text: "dangerous to plug into an outlet" },
            { letter: "C", text: "too expensive for most people to own" },
            { letter: "D", text: "out of date and no longer usable" }
          ],
          correct: "D"
        },
        {
          id: "able",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The words durable (sentence 22) and disposable (sentence 23) both end with the suffix -able. In both words, -able means —",
          choices: [
            { letter: "A", text: "without or lacking" },
            { letter: "B", text: "full of or covered in" },
            { letter: "C", text: "capable of or fit for" },
            { letter: "D", text: "the act or process of" }
          ],
          correct: "C"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The passage about the Eastgate Repair Café is organized mainly by —",
          choices: [
            { letter: "A", text: "comparing the café with repair shops in other towns" },
            { letter: "B", text: "moving from its start to its work, its limits, and its meaning" },
            { letter: "C", text: "listing the steps needed to repair a broken toaster" },
            { letter: "D", text: "telling Mateo's story from his first day to his two-hundredth tire" }
          ],
          correct: "B"
        },
        {
          id: "ingenuity",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which words from the passage best help the reader understand the meaning of ingenuity in sentence 26?",
          choices: [
            { letter: "A", text: "the cleverness that lets ordinary people solve problems" },
            { letter: "B", text: "the moment when a dead machine comes to life" },
            { letter: "C", text: "Somebody's grandmother's radio crackles on" },
            { letter: "D", text: "designed to be used for a while and replaced" }
          ],
          correct: "A"
        },
        {
          id: "mainidea",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the main idea of the passage about the Eastgate Repair Café?",
          choices: [
            { letter: "A", text: "Older appliances are always better made than the ones sold today." },
            { letter: "B", text: "A retired electrician earns money by fixing her neighbors' things." },
            { letter: "C", text: "Volunteers keep items out of landfills and teach owners to care for them." },
            { letter: "D", text: "Libraries are the best place for a town to hold community events." }
          ],
          correct: "C"
        },
        {
          id: "limits",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes sentences 17–20 mainly to —",
          choices: [
            { letter: "A", text: "argue that manufacturers should be fined for gluing devices" },
            { letter: "B", text: "suggest that the volunteers lack the skill to fix electronics" },
            { letter: "C", text: "explain why visitors must sit beside the volunteer and watch" },
            { letter: "D", text: "acknowledge that some items cannot be repaired at all" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── VOCABULARY · learning a new language ───────────────────────── */
    {
      id: "g11-rv-c103-listens",
      family: "G11",
      title: "Like Someone Who Listens",
      kind: "Vocabulary · 11.RV",
      blurb: "An exchange student in Seoul goes silent for three weeks, then makes a plan, and earns a compliment from his host brother's grandmother.",
      level: 2,
      passage:
        "<p>" + N(1) + "For the first three weeks of his exchange semester in Seoul, Darius Farahani said almost nothing that was not \"thank you\" or \"sorry.\" " +
        N(2) + "He had studied Korean for a year at home, mostly from an app that rewarded him with cartoon fireworks, and he had arrived feeling prepared. " +
        N(3) + "Then his host mother, Mrs. Yoon, greeted him at the airport with a stream of quick, warm sentences, and he understood exactly one word: his own name.</p>" +
        "<p>" + N(4) + "The task ahead seemed <strong>daunting</strong>. " +
        N(5) + "Everything moved faster than the app had: the subway announcements, the jokes at dinner, the way his host brother, Min-jun, and his friends shortened words into syllables Darius had never seen in any lesson. " +
        N(6) + "At school he sat in the back and became, for the first time in his life, <strong>reticent</strong>, a boy who kept his answers to himself because he could not trust them to come out right.</p>" +
        "<p>" + N(7) + "His program director had warned the students about this. " +
        N(8) + "\"<strong>Immersion</strong> works,\" she had said on the first day, \"but only if you let yourself get wet.\" " +
        N(9) + "Being surrounded by a language, she explained, does not teach you by itself; you have to jump in and use it, even badly.</p>" +
        "<p>" + N(10) + "So Darius made a plan. " +
        N(11) + "Each evening he chose one phrase he had heard during the day and practiced it until he could say it without thinking. " +
        N(12) + "He learned to <strong>mimic</strong> Mrs. Yoon's rising tone when she asked a question, copying her exactly, the way a child copies a parent before understanding the words. " +
        N(13) + "He asked Min-jun to correct him every time, and Min-jun, delighted to have permission, did so with great enthusiasm and very little mercy.</p>" +
        "<p>" + N(14) + "Slowly he began to hear differences he had missed. " +
        N(15) + "There were several ways to say \"I'm sorry,\" each carrying a different <strong>nuance</strong>: one for bumping a stranger on the train, one for disappointing a teacher, one for a friend whose dog had died. " +
        N(16) + "The words were close in meaning, but the small shades between them mattered enormously, and using the wrong one could make a sincere apology sound careless.</p>" +
        "<p>" + N(17) + "In November, Min-jun's grandmother came to visit from Busan. " +
        N(18) + "She spoke a regional dialect that even Min-jun sometimes teased her about, and she asked Darius, slowly, where he was from and whether he liked the food. " +
        N(19) + "He answered in full sentences. " +
        N(20) + "He told her about his own grandmother's kitchen in Virginia, where the rice was cooked with saffron, and he managed to explain that both kitchens smelled like home.</p>" +
        "<p>" + N(21) + "He was not perfectly <strong>articulate</strong>; he paused, backtracked, and once borrowed a word from English. " +
        N(22) + "But the old woman nodded and patted his hand, and Mrs. Yoon, standing at the stove, turned around with a look of quiet surprise. " +
        N(23) + "Later, Min-jun told him that his grandmother had said he spoke \"like someone who listens.\" " +
        N(24) + "Darius decided it was the best compliment he had ever received in any language.</p>",
      claims: [
        {
          id: "getwet",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 8, the director's warning that immersion works only if you let yourself get wet suggests that students must —",
          choices: [
            { letter: "A", text: "spend their free time at the beach with Korean friends" },
            { letter: "B", text: "avoid the language until they feel completely ready" },
            { letter: "C", text: "take risks by actively using the language they hear" },
            { letter: "D", text: "expect to feel uncomfortable during the rainy season" }
          ],
          correct: "C"
        },
        {
          id: "reticent",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The words that follow reticent in sentence 6 show that the word means —",
          choices: [
            { letter: "A", text: "eager to show off what one knows" },
            { letter: "B", text: "inclined to keep one's thoughts private" },
            { letter: "C", text: "annoyed by the behavior of others" },
            { letter: "D", text: "unable to hear what others are saying" }
          ],
          correct: "B"
        },
        {
          id: "immersion",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The director's explanation in sentence 9 shows that immersion, as used in sentence 8, means —",
          choices: [
            { letter: "A", text: "being surrounded by a language every day" },
            { letter: "B", text: "studying grammar rules before speaking" },
            { letter: "C", text: "learning a language through a phone app" },
            { letter: "D", text: "translating each word into one's own language" }
          ],
          correct: "A"
        },
        {
          id: "mimic",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word mimic in sentence 12 is related to mime and mimicry. All three words share the idea of —",
          choices: [
            { letter: "A", text: "mocking someone unkindly" },
            { letter: "B", text: "speaking very quietly" },
            { letter: "C", text: "learning by memorizing" },
            { letter: "D", text: "imitating or copying" }
          ],
          correct: "D"
        },
        {
          id: "nuance",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "As used in sentence 15, the word nuance most nearly means —",
          choices: [
            { letter: "A", text: "a subtle shade of meaning" },
            { letter: "B", text: "a polite form of address" },
            { letter: "C", text: "a regional way of speaking" },
            { letter: "D", text: "a common spelling mistake" }
          ],
          correct: "A"
        },
        {
          id: "articulate",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word articulate in sentence 21 comes from a Latin root meaning joint, the place where parts are joined. This origin best fits the idea that an articulate speaker —",
          choices: [
            { letter: "A", text: "speaks loudly enough for a crowd" },
            { letter: "B", text: "knows several languages at once" },
            { letter: "C", text: "repeats other people's words exactly" },
            { letter: "D", text: "joins words into clear, connected speech" }
          ],
          correct: "D"
        },
        {
          id: "plan",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentences 10–13 show that Darius responds to difficulty by —",
          choices: [
            { letter: "A", text: "asking his program director to move him to a new family" },
            { letter: "B", text: "returning to the app that had prepared him at home" },
            { letter: "C", text: "working steadily and inviting correction from others" },
            { letter: "D", text: "waiting quietly until the language starts to make sense" }
          ],
          correct: "C"
        },
        {
          id: "listens",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 23, the grandmother's description of Darius as speaking like someone who listens most nearly suggests that —",
          choices: [
            { letter: "A", text: "he speaks too little to be understood clearly" },
            { letter: "B", text: "his careful attention to others shapes his speech" },
            { letter: "C", text: "he has copied Min-jun's accent from Busan" },
            { letter: "D", text: "he still needs Min-jun to translate for him" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── PAIRED TEXTS · chess tournaments ───────────────────────── */
    {
      id: "g11-dsr-c103-clocksfriday",
      family: "G11",
      title: "Clocks on Fridays",
      kind: "Paired texts · 11.DSR",
      blurb: "A chess club advisor announces timed games for the Friday ladder; a newer member writes back with a request.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Club Notice from Ms. Solberg, \"Clocks Come to Fridays\"</strong></p>" +
        "<p>" + N(1) + "Starting next month, every game in the Lakeview High Chess Club's Friday ladder will be played with a clock. " +
        N(2) + "Each player will receive fifteen minutes for the whole game, with no added time per move. " +
        N(3) + "This change has been discussed at the last three club meetings, and I want to explain the reasons for it.</p>" +
        "<p>" + N(4) + "First, our Friday sessions run from 3:00 to 4:30, and the custodial staff needs the library cleared by 4:40. " +
        N(5) + "This fall, more than a dozen games were left unfinished when the session ended, and several were adjudicated, or decided by me, based on the position on the board. " +
        N(6) + "Nobody enjoys having a game decided by a teacher instead of by the players.</p>" +
        "<p>" + N(7) + "Second, nearly every scholastic tournament in our region uses clocks. " +
        N(8) + "Students who play only untimed games at club often panic the first time they see a clock running at a tournament. " +
        N(9) + "Weekly practice will make that pressure feel ordinary.</p>" +
        "<p>" + N(10) + "Finally, the club now owns twelve digital clocks, thanks to a donation from the Parent Boosters, so cost is no longer an obstacle.</p>" +
        "<p>" + N(11) + "I understand that some members, especially newer ones, enjoy the relaxed pace of untimed games. " +
        N(12) + "Untimed casual boards will remain available during the first half hour of each session, before ladder games begin. " +
        N(13) + "Please come talk to me if you have concerns.</p>" +
        "<p><strong>Text 2 — Letter from Rafael Quispe, Grade 9, \"A Request from a Newer Member\"</strong></p>" +
        "<p>" + N(14) + "Dear Ms. Solberg, I joined chess club in September knowing only how the pieces move. " +
        N(15) + "Thank you for explaining the reasons behind the clock change; the point about unfinished games is fair, and I was one of the players whose game you had to decide in October. " +
        N(16) + "Still, I want to ask you to reconsider part of the plan.</p>" +
        "<p>" + N(17) + "Fifteen minutes is plenty for experienced players, but for beginners, time pressure changes what we practice. " +
        N(18) + "When I play untimed, I can stop and actually think about why a move is good. " +
        N(19) + "When I tried a fifteen-minute game last week, I just moved fast and copied patterns I didn't understand. " +
        N(20) + "I lost in nine minutes and learned nothing.</p>" +
        "<p>" + N(21) + "I also don't plan to play in outside tournaments this year, and at least five other newer members told me the same thing. " +
        N(22) + "For us, the tournament reason does not really apply.</p>" +
        "<p>" + N(23) + "Could the ladder have two divisions? " +
        N(24) + "Experienced players could keep fifteen-minute clocks, while newer players could have twenty-five minutes each, which would still finish before the session ends. " +
        N(25) + "The club already owns enough clocks for both. " +
        N(26) + "I think this would keep beginners in the club long enough to become the experienced players who need the faster games.</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is supported by both Ms. Solberg's notice and Rafael's letter?",
          choices: [
            { letter: "A", text: "Fifteen minutes is too little time for any player in the club." },
            { letter: "B", text: "Games left unfinished at the end of a session are a real problem." },
            { letter: "C", text: "Most club members plan to play in outside tournaments this year." },
            { letter: "D", text: "The club should buy more clocks before the change takes effect." }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How does the purpose of Text 2 differ from the purpose of Text 1?",
          choices: [
            { letter: "A", text: "Text 2 reports on a tournament, while Text 1 gives club rules." },
            { letter: "B", text: "Text 2 thanks the Boosters, while Text 1 asks for a donation." },
            { letter: "C", text: "Text 2 rejects clocks entirely, while Text 1 makes them optional." },
            { letter: "D", text: "Text 2 asks to adjust a decision that Text 1 announces and explains." }
          ],
          correct: "D"
        },
        {
          id: "challenge",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which sentence from Text 1 does Rafael most directly challenge in sentences 21 and 22?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "limits",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences from Text 2 that show Rafael has considered the practical limits described in Text 1.",
          choices: [
            { letter: "A", text: "Sentence 18" },
            { letter: "B", text: "Sentence 20" },
            { letter: "C", text: "Sentence 24" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "agree",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Ms. Solberg and Rafael would most likely agree that —",
          choices: [
            { letter: "A", text: "the needs of newer members deserve a place in club rules" },
            { letter: "B", text: "untimed games should be removed from the club entirely" },
            { letter: "C", text: "the custodial staff should keep the library open later" },
            { letter: "D", text: "only experienced players should be allowed on the ladder" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the tone of Ms. Solberg's notice, the tone of Rafael's letter is more —",
          choices: [
            { letter: "A", text: "personal, while still respectful" },
            { letter: "B", text: "angry and accusing" },
            { letter: "C", text: "formal and impersonal" },
            { letter: "D", text: "uncertain and apologetic" }
          ],
          correct: "A"
        },
        {
          id: "cost",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to Text 1, why is cost no longer an obstacle to using clocks?",
          choices: [
            { letter: "A", text: "The library lends clocks to student clubs." },
            { letter: "B", text: "Each member agreed to bring a clock from home." },
            { letter: "C", text: "A parent group donated twelve digital clocks." },
            { letter: "D", text: "The school bought clocks for the tournament team." }
          ],
          correct: "C"
        },
        {
          id: "ninemin",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "In sentence 20, Rafael's statement that he lost in nine minutes and learned nothing mainly serves to —",
          choices: [
            { letter: "A", text: "admit that he is not good enough to stay in the club" },
            { letter: "B", text: "complain that his opponent played unfairly fast" },
            { letter: "C", text: "suggest that games should be limited to nine minutes" },
            { letter: "D", text: "give personal evidence that fast games do not teach beginners" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── PAIRED TEXTS · early aviation ───────────────────────── */
    {
      id: "g11-dsr-c103-airmeet",
      family: "G11",
      title: "The Air Meet",
      kind: "Paired texts · 11.DSR",
      blurb: "A 1910 newspaper celebrates the aviator who thrilled the county fair; a fourteen-year-old's diary watches someone else.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the <em>Millbrook Courier</em>, September 1910, \"Aeroplane Conquers the Fairgrounds\"</strong></p>" +
        "<p>" + N(1) + "Some four thousand citizens crowded the county fairgrounds yesterday afternoon to witness what most of them had seen only in illustrated papers: a man flying. " +
        N(2) + "The aviator, a Mr. Lucien Marchetti of the touring Continental Aero Exhibition, made three ascents in his biplane before the grandstand, the highest reaching an estimated three hundred feet.</p>" +
        "<p>" + N(3) + "The machine, a frail-looking contraption of wood, wire, and varnished cloth, was wheeled onto the racetrack shortly after two o'clock. " +
        N(4) + "When its motor started, a number of horses tethered near the stables broke loose, and several ladies in the front rows were seen to cover their ears. " +
        N(5) + "Mr. Marchetti, wearing a leather cap and goggles, waved to the crowd, and the machine bounded along the track and rose into the air amid a roar of applause.</p>" +
        "<p>" + N(6) + "The second flight was the most thrilling. " +
        N(7) + "The aviator circled the half-mile track twice, banking so steeply over the far turn that a cry of alarm went up from the grandstand, before descending gracefully to the infield. " +
        N(8) + "Spectators rushed the rope line, and officers were required to hold them back.</p>" +
        "<p>" + N(9) + "The third ascent was cut short by a gusty wind, but the crowd seemed fully satisfied. " +
        N(10) + "Mr. Marchetti declared afterward that Millbrook's audience was \"the most enthusiastic in the state.\" " +
        N(11) + "Few who were present will soon forget the sight, and it is the opinion of this newspaper that the age of the flying man has truly arrived.</p>" +
        "<p><strong>Text 2 — From the diary of Ruth Abernathy, age fourteen</strong></p>" +
        "<p>" + N(12) + "September 18. " +
        N(13) + "Papa took us to see the aeroplane, and I have been thinking about it all evening, though not about the parts the newspaper will print. " +
        N(14) + "Everyone watched Mr. Marchetti. " +
        N(15) + "I watched the man who came before him.</p>" +
        "<p>" + N(16) + "He was short and quiet and had grease to his elbows, and nobody told us his name. " +
        N(17) + "For an hour before the first flight he crawled over that machine, tightening wires and testing each one with his thumb as if he were tuning a fiddle. " +
        N(18) + "When the wind came up before the third flight, it was he, not Mr. Marchetti, who walked out and stood a long while with a wet finger in the air. " +
        N(19) + "Then he shook his head, and the flight was cut short. " +
        N(20) + "Mr. Marchetti looked annoyed. " +
        N(21) + "The crowd booed a little.</p>" +
        "<p>" + N(22) + "On the way home, Papa said the mechanic had probably saved the aviator's neck. " +
        N(23) + "I asked why the papers never mention such men, and Papa said that people buy tickets to see somebody fly, not somebody fix. " +
        N(24) + "I think that is a pity. " +
        N(25) + "The flying lasted perhaps ten minutes altogether. " +
        N(26) + "The fixing took all afternoon, and I would wager all the night before as well.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which event is reported in both the Courier article and Ruth's diary?",
          choices: [
            { letter: "A", text: "The third flight was cut short because of the wind." },
            { letter: "B", text: "Horses near the stables broke loose at the noise." },
            { letter: "C", text: "Officers held spectators back from the rope line." },
            { letter: "D", text: "The mechanic tested every wire with his thumb." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How do the two texts differ in what they treat as important about the exhibition?",
          choices: [
            { letter: "A", text: "Text 1 stresses the danger, while Text 2 stresses the crowd's size." },
            { letter: "B", text: "Text 1 doubts the flights, while Text 2 is certain they happened." },
            { letter: "C", text: "Text 1 centers on the aviator's show; Text 2 on the mechanic's work." },
            { letter: "D", text: "Text 1 praises the mechanic, while Text 2 praises the aviator." }
          ],
          correct: "C"
        },
        {
          id: "complicate",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How does Text 2 complicate the account of the third flight given in sentence 9 of Text 1?",
          choices: [
            { letter: "A", text: "It shows that the third flight was actually the highest of the day." },
            { letter: "B", text: "It shows that the crowd left before the third flight began." },
            { letter: "C", text: "It shows that Mr. Marchetti chose to land early to please the crowd." },
            { letter: "D", text: "It shows the flight ended by the mechanic's judgment, not wind alone." }
          ],
          correct: "D"
        },
        {
          id: "tickets",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Papa's remark in sentence 23 best helps explain which feature of Text 1?",
          choices: [
            { letter: "A", text: "its estimate of how high the biplane climbed" },
            { letter: "B", text: "its silence about the man who prepared the machine" },
            { letter: "C", text: "its description of the horses breaking loose" },
            { letter: "D", text: "its report that the crowd seemed fully satisfied" }
          ],
          correct: "B"
        },
        {
          id: "unmentioned",
          sol: "11.DSR.C",
          sub: "11.DSR.C.1",
          stem: "Select TWO sentences from Text 2 that describe careful work that Text 1 never mentions.",
          choices: [
            { letter: "A", text: "Sentence 17" },
            { letter: "B", text: "Sentence 18" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "onlytext1",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A reader who had only Text 1 would most likely conclude that —",
          choices: [
            { letter: "A", text: "the exhibition was poorly attended because of the weather" },
            { letter: "B", text: "the biplane was too frail to fly safely in front of a crowd" },
            { letter: "C", text: "the aviator alone was responsible for the day's success" },
            { letter: "D", text: "the newspaper was disappointed by the third ascent" }
          ],
          correct: "C"
        },
        {
          id: "annoyed",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Ruth's observation in sentence 20 that Mr. Marchetti looked annoyed implies that —",
          choices: [
            { letter: "A", text: "the aviator was angry that the crowd had booed him" },
            { letter: "B", text: "the aviator thought the mechanic had loosened a wire" },
            { letter: "C", text: "the aviator was tired after flying twice that afternoon" },
            { letter: "D", text: "the aviator would rather have flown despite the warning" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Sentence 11 differs from most of the Courier article because it —",
          choices: [
            { letter: "A", text: "quotes the aviator's own words about the audience" },
            { letter: "B", text: "states the newspaper's opinion instead of reporting events" },
            { letter: "C", text: "gives the exact number of people who attended the fair" },
            { letter: "D", text: "describes the machine's materials in technical detail" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
