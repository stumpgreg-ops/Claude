/* SOL Labyrinth — Grade 11 literary packs (short stories, poems, drama scenes).
 * Original Virginia EOC Reading-style RL content for the G11 family. No VDOE /
 * copyrighted text. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── SHORT STORIES ───────────────────────── */
    {
      id: "g11-rl-wrongturn",
      family: "G11",
      title: "Left at the Tower",
      kind: "Literary · 11.RL",
      blurb: "A first solo drive, a phone left on the counter, and a voice in the passenger seat.",
      level: 1,
      passage:
        "<p>" + N(1) + "Priya had driven the route to her brother's school a dozen times, but always with her father in the passenger seat, narrating every turn like a sports announcer. " +
        N(2) + "Today the seat was empty, the phone mount was empty, and the phone itself was at home on the kitchen counter where she had set it down to grab her keys. " +
        N(3) + "She noticed this at the second stoplight and felt her stomach drop the way it did on the first hill of a roller coaster. " +
        N(4) + "There was no turning back for the phone; Sam's dismissal bell rang at 3:15, and he hated waiting in the pickup line more than he hated anything. " +
        N(5) + "So she drove. " +
        N(6) + "At the fork by the water tower she hesitated, then heard her father's voice in her head: \"Left at the tower, right at the church with the blue door, straight until you see the bakery.\" " +
        N(7) + "She had never really listened to him, or so she had believed. " +
        N(8) + "The church appeared, blue door and all, and Priya laughed out loud in the empty car. " +
        N(9) + "The bakery came next, exactly where it was supposed to be, and then the school. " +
        N(10) + "Sam was standing at the curb with his backpack on both shoulders, checking a watch he did not own, which is to say, staring at his bare wrist and frowning. " +
        N(11) + "\"You're four minutes late,\" he said, climbing in. " +
        N(12) + "\"I know,\" Priya said, \"but I found the way on my own,\" and she did not explain, because he was eleven, and some victories are too small to hand to anyone else." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the passage most clearly develop?",
          choices: [
            { letter: "A", text: "Lessons absorbed without noticing can surface when they are needed." },
            { letter: "B", text: "Younger siblings should be taught to be patient with older ones." },
            { letter: "C", text: "Technology makes drivers less careful than they used to be." },
            { letter: "D", text: "Parents should let teenagers make their own mistakes on the road." }
          ],
          correct: "A"
        },
        {
          id: "shortsent",
          sol: "11.RL.1.B",
          stem: "Sentence 5 is set apart as its own short sentence mainly to —",
          choices: [
            { letter: "A", text: "show that Priya has stopped worrying about her brother" },
            { letter: "B", text: "mark the moment Priya commits to continuing without help" },
            { letter: "C", text: "suggest that the drive to the school is very short" },
            { letter: "D", text: "signal that the story is about to shift to Sam's point of view" }
          ],
          correct: "B"
        },
        {
          id: "listened",
          sol: "11.RL.1.C",
          stem: "Sentence 7 reveals that Priya —",
          choices: [
            { letter: "A", text: "resents her father for talking too much during their drives" },
            { letter: "B", text: "wishes she had paid closer attention to the route" },
            { letter: "C", text: "had learned more from her father than she realized" },
            { letter: "D", text: "is confident because she has memorized every landmark" }
          ],
          correct: "C"
        },
        {
          id: "coaster",
          sol: "11.RL.2.A",
          stem: "In sentence 3, the comparison to the first hill of a roller coaster conveys Priya's —",
          choices: [
            { letter: "A", text: "excitement about driving alone for the first time" },
            { letter: "B", text: "sudden fear combined with the sense that she cannot stop now" },
            { letter: "C", text: "annoyance at the number of stoplights on the route" },
            { letter: "D", text: "memory of a trip to an amusement park with her brother" }
          ],
          correct: "B"
        },
        {
          id: "narrating",
          sol: "11.RL.2.C",
          stem: "In sentence 1, the word narrating most nearly means —",
          choices: [
            { letter: "A", text: "timing" },
            { letter: "B", text: "criticizing" },
            { letter: "C", text: "arguing about" },
            { letter: "D", text: "describing aloud" }
          ],
          correct: "D"
        },
        {
          id: "victory",
          sol: "11.RL.3.A",
          stem: "The narrator's comment in sentence 12 that some victories are too small to hand to anyone else suggests that Priya —",
          choices: [
            { letter: "A", text: "is embarrassed that she left her phone at home" },
            { letter: "B", text: "thinks Sam is too young to understand directions" },
            { letter: "C", text: "values the accomplishment privately rather than for praise" },
            { letter: "D", text: "plans to tell her father about the drive instead" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-scoreboard",
      family: "G11",
      title: "Fifty-Eight, Not Sixty",
      kind: "Literary · 11.RL",
      blurb: "The scoreboard operator, a slip of the thumb, and a gym that reads the board instead of the game.",
      level: 2,
      passage:
        "<p>" + N(1) + "From the scorer's table, Theo could see the whole gym the way a pilot sees a runway: lit, rectangular, and entirely his responsibility. " +
        N(2) + "He had run the scoreboard for two seasons, long enough to press the buttons without looking and to know that nobody in the building ever thanked him for it. " +
        N(3) + "With ninety seconds left and the home team down by one, a foul was called, and Theo's thumb, moving faster than his attention, gave the home team two points it had not earned. " +
        N(4) + "The crowd, reading the board and not the play, roared. " +
        N(5) + "The referee glanced at the numbers, nodded as if they agreed with him, and jogged back down the court. " +
        N(6) + "Theo waited for someone to catch it. " +
        N(7) + "No one did. " +
        N(8) + "He thought about the visiting bench, eleven kids in green who had ridden two hours on a bus to lose by a number that was wrong. " +
        N(9) + "He thought about the banner that would hang in this gym for the next ten years. " +
        N(10) + "It would be so easy, he realized, to simply be a boy who had made a mistake and let the adults sort it out. " +
        N(11) + "At the next dead ball he stood, walked the six longest steps of his life to the referee, and said, \"That's my error; it should read fifty-eight, not sixty.\" " +
        N(12) + "The gym did not applaud; a few people booed, and someone's father muttered that the kid should learn to count. " +
        N(13) + "The home team lost by three. " +
        N(14) + "Walking to the parking lot, Theo felt oddly light, as if he had set down something he had not known he was carrying." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which idea is most clearly supported by the story as a whole?",
          choices: [
            { letter: "A", text: "Honesty can cost approval and still be worth choosing." },
            { letter: "B", text: "Referees should keep their own record of the score." },
            { letter: "C", text: "Home crowds care more about winning than about fairness." },
            { letter: "D", text: "Small jobs deserve more thanks than they usually get." }
          ],
          correct: "A"
        },
        {
          id: "easy",
          sol: "11.RL.1.C",
          stem: "Sentence 10 is important to the development of Theo's character because it shows that he —",
          choices: [
            { letter: "A", text: "blames the referee for not catching the error" },
            { letter: "B", text: "recognizes the easy excuse before rejecting it" },
            { letter: "C", text: "hopes an adult will correct the score for him" },
            { letter: "D", text: "decides that the mistake is not really his fault" }
          ],
          correct: "B"
        },
        {
          id: "runway",
          sol: "11.RL.2.A",
          stem: "The simile in sentence 1 comparing the gym to a runway mainly emphasizes —",
          choices: [
            { letter: "A", text: "how dangerous the game has become for the players" },
            { letter: "B", text: "how much Theo dislikes sitting at the scorer's table" },
            { letter: "C", text: "the weight of responsibility Theo feels for the game" },
            { letter: "D", text: "the bright lights that make it hard to see the board" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Sentence 4 is ironic because the crowd —",
          choices: [
            { letter: "A", text: "cheers for a score that only the scoreboard says is real" },
            { letter: "B", text: "is watching the wrong end of the court" },
            { letter: "C", text: "boos Theo before he has done anything wrong" },
            { letter: "D", text: "has already left the gym before the game ends" }
          ],
          correct: "A"
        },
        {
          id: "thumb",
          sol: "11.RL.2.C",
          stem: "In sentence 3, describing Theo's thumb as moving faster than his attention most nearly means that he —",
          choices: [
            { letter: "A", text: "pressed the button deliberately to help his team" },
            { letter: "B", text: "was distracted by the roar of the crowd" },
            { letter: "C", text: "was trying to keep up with a very fast game" },
            { letter: "D", text: "acted by habit before he had fully registered the play" }
          ],
          correct: "D"
        },
        {
          id: "light",
          sol: "11.RL.3.A",
          stem: "Which statement best explains how the final sentence resolves the story?",
          choices: [
            { letter: "A", text: "Theo is relieved that the home team lost so the crowd will leave him alone." },
            { letter: "B", text: "Theo's relief shows that keeping the false score had been a burden." },
            { letter: "C", text: "Theo realizes he no longer wants to run the scoreboard next season." },
            { letter: "D", text: "Theo feels lighter because he has finally been thanked for his work." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rl-inventory",
      family: "G11",
      title: "Count It Anyway",
      kind: "Literary · 11.RL",
      blurb: "The last night of a family hardware store, a clipboard, and one key that was never claimed.",
      level: 2,
      passage:
        "<p>" + N(1) + "On the last night of Ortega Hardware, my father handed me a clipboard and said we were going to count everything, which struck me as a strange use of a final evening. " +
        N(2) + "\"Who's going to buy it?\" I asked. " +
        N(3) + "\"Nobody,\" he said. \"That's not why you count.\" " +
        N(4) + "So we counted: four hundred and twelve boxes of screws sorted by a system only he understood, nineteen snow shovels in a town that had not seen real snow in six years, one brass key blank for a lock nobody made anymore. " +
        N(5) + "He called out numbers and I wrote them down, and somewhere around the paint aisle I realized he was not counting objects at all. " +
        N(6) + "He was reciting forty years of Saturday mornings, of neighbors who came in for one hinge and stayed for an hour, of every kid he had taught to hold a hammer at the end of the handle instead of choking up on it like a bat. " +
        N(7) + "At the register was a hook where, for as long as I could remember, a single key had hung on a paper tag that said simply \"Mrs. Aldana's.\" " +
        N(8) + "I did not know who Mrs. Aldana was; I had never seen anyone claim the key. " +
        N(9) + "\"Count it,\" my father said. " +
        N(10) + "\"It's one key,\" I said. " +
        N(11) + "\"Count it anyway.\" " +
        N(12) + "I wrote 1 key, held, and he nodded as though I had finally understood the assignment. " +
        N(13) + "When we finished, the total ran to eleven pages, and he folded them once and put them in his shirt pocket, over his heart, where they would be worth exactly nothing to anyone but him." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a central idea of the passage?",
          choices: [
            { letter: "A", text: "Small businesses cannot compete with larger stores." },
            { letter: "B", text: "The worth of a place lies in the relationships it held, not its goods." },
            { letter: "C", text: "Fathers and children rarely understand each other's work." },
            { letter: "D", text: "Counting carefully is the most important skill in retail." }
          ],
          correct: "B"
        },
        {
          id: "key",
          sol: "11.RL.2.A",
          stem: "The key on the hook (sentences 7–12) most clearly symbolizes —",
          choices: [
            { letter: "A", text: "the store's failure to keep track of its inventory" },
            { letter: "B", text: "a debt the father still hopes to collect" },
            { letter: "C", text: "a promise kept to someone even after they are gone" },
            { letter: "D", text: "the narrator's wish to keep the store open" }
          ],
          correct: "C"
        },
        {
          id: "father",
          sol: "11.RL.1.C",
          stem: "The father's answer in sentence 3, that counting is not about selling, reveals that he —",
          choices: [
            { letter: "A", text: "has already sold the inventory to another store" },
            { letter: "B", text: "is too proud to admit the store has failed" },
            { letter: "C", text: "wants the narrator to learn bookkeeping before leaving home" },
            { letter: "D", text: "sees the count as a way of honoring the store's history" }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "11.RL.3.A",
          stem: "The passage is told from the narrator's first-person point of view. This choice mainly allows the reader to —",
          choices: [
            { letter: "A", text: "follow the narrator's gradual understanding of the father's purpose" },
            { letter: "B", text: "learn what the father privately thinks about closing the store" },
            { letter: "C", text: "hear from several customers who remember the store" },
            { letter: "D", text: "know exactly who Mrs. Aldana was and why she left the key" }
          ],
          correct: "A"
        },
        {
          id: "reciting",
          sol: "11.RL.2.C",
          stem: "In sentence 6, the word reciting suggests that the father's list is —",
          choices: [
            { letter: "A", text: "a set of complaints he has repeated for years" },
            { letter: "B", text: "something memorized and spoken with the feeling of a ritual" },
            { letter: "C", text: "a speech he prepared for the store's final customers" },
            { letter: "D", text: "an inventory he is reading from a printed sheet" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "11.RL.2.B",
          stem: "The phrase worth exactly nothing to anyone but him in sentence 13 creates a tone that is —",
          choices: [
            { letter: "A", text: "bitter, because the father has lost everything" },
            { letter: "B", text: "mocking, because the count was a waste of time" },
            { letter: "C", text: "tender, because the pages' value is personal rather than financial" },
            { letter: "D", text: "hopeful, because the store may reopen one day" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-interpreter",
      family: "G11",
      title: "Both Sides of the Table",
      kind: "Literary · 11.RL",
      blurb: "A parent-teacher conference, a daughter translating, and a mother who hears more than she says.",
      level: 3,
      passage:
        "<p>" + N(1) + "Mrs. Okafor kept a bowl of mints on her desk for conferences, and Lin's mother, who had never in her life taken a mint from a stranger's bowl, took two. " +
        N(2) + "That was the first sign that her mother was nervous; the second was that she had asked Lin to interpret, though Lin suspected she understood more of the conversation than she ever admitted. " +
        N(3) + "\"Your daughter,\" Mrs. Okafor began, \"is one of the sharpest readers I have taught in twenty years.\" " +
        N(4) + "Lin translated this exactly, and her mother's face did something small and proud. " +
        N(5) + "\"She has also failed to turn in the last four essays.\" " +
        N(6) + "Lin paused. " +
        N(7) + "In the pause, whole futures rearranged themselves. " +
        N(8) + "\"She says I should read more challenging books,\" Lin told her mother in Cantonese, and she heard how smooth the lie was, how it slid out already polished, as if she had been rehearsing it on the drive over. " +
        N(9) + "Her mother nodded slowly, then said something Lin did not need to translate because it was meant for the teacher and not for her: \"Thank you. She will do the essays.\" " +
        N(10) + "The English was careful and unmistakable. " +
        N(11) + "Mrs. Okafor smiled, wrote something in her folder, and offered the bowl again. " +
        N(12) + "In the parking lot, her mother said nothing about the four essays, or the lie, or the sixteen years in which Lin had assumed she was the only person in the family who could hear both sides of a conversation. " +
        N(13) + "She unlocked the car and asked, in Cantonese, whether Lin was hungry, in the voice she used for things that were already settled." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is most fully developed by the events of the passage?",
          choices: [
            { letter: "A", text: "Parents often understand more than their children give them credit for." },
            { letter: "B", text: "Teachers should learn the languages their students speak at home." },
            { letter: "C", text: "A single lie can destroy the trust between a mother and daughter." },
            { letter: "D", text: "Students who read well do not need to practice writing essays." }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "The reader recognizes the irony of sentence 8 most fully after reading —",
          choices: [
            { letter: "A", text: "sentence 3, which praises Lin's reading" },
            { letter: "B", text: "sentence 9, which reveals that the mother understood the English" },
            { letter: "C", text: "sentence 11, which shows the teacher writing in her folder" },
            { letter: "D", text: "sentence 1, which describes the bowl of mints" }
          ],
          correct: "B"
        },
        {
          id: "polished",
          sol: "11.RL.2.A",
          stem: "In sentence 8, the description of the lie as already polished suggests that Lin —",
          choices: [
            { letter: "A", text: "is proud of how well she speaks both languages" },
            { letter: "B", text: "has been preparing to hide the truth for some time" },
            { letter: "C", text: "wants her mother to notice that she is lying" },
            { letter: "D", text: "is repeating something the teacher told her earlier" }
          ],
          correct: "B"
        },
        {
          id: "mother",
          sol: "11.RL.1.C",
          stem: "The mother's behavior with the mints in sentence 1 and her speech in sentence 9 together show that she —",
          choices: [
            { letter: "A", text: "is more comfortable with the teacher than with her daughter" },
            { letter: "B", text: "dislikes Mrs. Okafor's way of running a conference" },
            { letter: "C", text: "is anxious yet capable of acting firmly when it matters" },
            { letter: "D", text: "does not understand the purpose of the conference" }
          ],
          correct: "C"
        },
        {
          id: "pause",
          sol: "11.RL.1.B",
          stem: "Sentences 6 and 7 slow the pace of the passage in order to —",
          choices: [
            { letter: "A", text: "suggest that the conference is nearly over" },
            { letter: "B", text: "show that Lin has forgotten the word she needs" },
            { letter: "C", text: "give the teacher time to check her notes" },
            { letter: "D", text: "emphasize the weight of the choice Lin is about to make" }
          ],
          correct: "D"
        },
        {
          id: "hungry",
          sol: "11.RL.2.B",
          stem: "The final sentence's question about hunger is best understood as —",
          choices: [
            { letter: "A", text: "a sign that the mother is avoiding the subject out of embarrassment" },
            { letter: "B", text: "proof that the mother did not hear what Lin said in the conference" },
            { letter: "C", text: "a reminder that the family has not eaten since the morning" },
            { letter: "D", text: "an indirect offer of forgiveness that fits the mother's quiet manner" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── POEMS ───────────────────────── */
    {
      id: "g11-rl-poem-chain",
      family: "G11",
      title: "The Small Gear First",
      kind: "Poetry · 11.RL",
      blurb: "A poem about a slipped bike chain and a pair of hands the speaker had not thought about in years.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The chain came off a mile from home,<br>" +
        L(2) + "and I knelt in the gravel the way my mother taught me,<br>" +
        L(3) + "sleeves pushed up, the bike laid down on its side like something sleeping.<br>" +
        L(4) + "She never used the word patience. She used her hands,<br>" +
        L(5) + "which moved slower than mine wanted to move,<br>" +
        L(6) + "and said, Feed it back on the small gear first, always the small gear.<br>" +
        L(7) + "I had not thought about her hands in years.<br>" +
        L(8) + "They arrived anyway, in the grease on my knuckles,<br>" +
        L(9) + "in the click the chain makes when it finally agrees to go where it belongs.<br><br>" +
        L(10) + "I rode the last mile standing on the pedals,<br>" +
        L(11) + "not because I had to, but because the road tilted up<br>" +
        L(12) + "and I wanted to feel the whole hill pull against a thing I had fixed.<br>" +
        L(13) + "At home I washed the black from my fingers and left a little,<br>" +
        L(14) + "the way she always did, a small dark proof that the day had asked something of me<br>" +
        L(15) + "and I had answered." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses the poem's central idea?",
          choices: [
            { letter: "A", text: "Skills passed down from a parent stay with us long after we learn them." },
            { letter: "B", text: "Bicycles are unreliable and should be checked before every ride." },
            { letter: "C", text: "Riding uphill is far more difficult than fixing a broken chain." },
            { letter: "D", text: "Children rarely appreciate the lessons their parents try to teach." }
          ],
          correct: "A"
        },
        {
          id: "sleeping",
          sol: "11.RL.2.A",
          stem: "In line 3, comparing the bike to something sleeping mainly suggests —",
          choices: [
            { letter: "A", text: "that the speaker is too tired to keep riding" },
            { letter: "B", text: "that the bike is old and no longer works well" },
            { letter: "C", text: "a calm, unhurried attitude toward the repair" },
            { letter: "D", text: "a fear that the bike has been permanently damaged" }
          ],
          correct: "C"
        },
        {
          id: "hands",
          sol: "11.RL.2.B",
          stem: "Lines 4–6 characterize the mother as someone who —",
          choices: [
            { letter: "A", text: "taught through demonstration rather than lecture" },
            { letter: "B", text: "was impatient with her child's slow progress" },
            { letter: "C", text: "preferred to fix things herself instead of teaching" },
            { letter: "D", text: "rarely spoke while working on anything mechanical" }
          ],
          correct: "A"
        },
        {
          id: "agrees",
          sol: "11.RL.2.C",
          stem: "In line 9, the word agrees is used to suggest that the chain —",
          choices: [
            { letter: "A", text: "was damaged beyond what the speaker could repair" },
            { letter: "B", text: "resisted at first and then slipped into place" },
            { letter: "C", text: "made a loud noise that startled the speaker" },
            { letter: "D", text: "belonged to a different bicycle altogether" }
          ],
          correct: "B"
        },
        {
          id: "standing",
          sol: "11.RL.1.C",
          stem: "Lines 10–12 suggest that the speaker rides standing up in order to —",
          choices: [
            { letter: "A", text: "get home before it grows dark" },
            { letter: "B", text: "avoid putting weight on the repaired chain" },
            { letter: "C", text: "show off for the neighbors along the road" },
            { letter: "D", text: "test and enjoy the result of the repair" }
          ],
          correct: "D"
        },
        {
          id: "grease",
          sol: "11.RL.3.A",
          stem: "The speaker leaves some grease on their fingers (lines 13–15) because it —",
          choices: [
            { letter: "A", text: "is impossible to wash off completely" },
            { letter: "B", text: "reminds them to check the chain again tomorrow" },
            { letter: "C", text: "serves as a mark of effort that connects them to the mother" },
            { letter: "D", text: "shows that the speaker dislikes cleaning up after repairs" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-poem-maps",
      family: "G11",
      title: "Unsurveyed",
      kind: "Poetry · 11.RL",
      blurb: "A poem about a mapmaker's daughter, a road left off the sheet, and a note in the margin.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My mother drew maps for a living, which meant<br>" +
        L(2) + "our kitchen table was always a country<br>" +
        L(3) + "I was not allowed to put my elbows on.<br>" +
        L(4) + "She could tell you the elevation of any place you named<br>" +
        L(5) + "and never once, in my memory, got lost.<br>" +
        L(6) + "I got lost on purpose. I took the road that wasn't on her sheets,<br>" +
        L(7) + "the one with the leaning barn, and I found<br>" +
        L(8) + "that the world kept going where her ink stopped.<br><br>" +
        L(9) + "When she died, the maps came to me in a long flat box,<br>" +
        L(10) + "every road she had ever measured, every river she had tamed to a blue line.<br>" +
        L(11) + "I spread one on the table where my elbows were now allowed,<br>" +
        L(12) + "and there, in the margin, in pencil, in her smallest hand:<br>" +
        L(13) + "barn leans east, road continues, unsurveyed.<br>" +
        L(14) + "She had known. She had left it off on purpose,<br>" +
        L(15) + "the way you leave a door unlocked for someone<br>" +
        L(16) + "you want to come home late and find their own way in." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "The poem as a whole most strongly supports which theme?",
          choices: [
            { letter: "A", text: "Careful planning eliminates the need for exploration." },
            { letter: "B", text: "Children must reject their parents' work to find themselves." },
            { letter: "C", text: "Love can take the form of leaving room for another person's discovery." },
            { letter: "D", text: "Maps are less reliable than the memories of the people who make them." }
          ],
          correct: "C"
        },
        {
          id: "country",
          sol: "11.RL.2.A",
          stem: "In lines 2–3, describing the table as a country the speaker could not put elbows on suggests that —",
          choices: [
            { letter: "A", text: "the mother's work took up space in the home and demanded respect" },
            { letter: "B", text: "the family ate their meals in a different room" },
            { letter: "C", text: "the speaker was punished often as a child" },
            { letter: "D", text: "the mother drew maps of only one country" }
          ],
          correct: "A"
        },
        {
          id: "lost",
          sol: "10.RL.2.C",
          stem: "Line 6, I got lost on purpose, is best described as —",
          choices: [
            { letter: "A", text: "a metaphor comparing the road to the mother's ink" },
            { letter: "B", text: "a paradox showing the speaker's deliberate search for what maps leave out" },
            { letter: "C", text: "an admission that the speaker could not read maps" },
            { letter: "D", text: "an example of alliteration that speeds up the line" }
          ],
          correct: "B"
        },
        {
          id: "tamed",
          sol: "11.RL.2.B",
          stem: "In line 10, the word tamed characterizes the mother's mapmaking as —",
          choices: [
            { letter: "A", text: "careless, hurried work done from memory" },
            { letter: "B", text: "control that reduces wild things to symbols" },
            { letter: "C", text: "an art that made rivers look more beautiful" },
            { letter: "D", text: "a scientific measurement free of any bias" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "11.RL.3.A",
          stem: "The pencil note in line 13 functions as the poem's turning point because it —",
          choices: [
            { letter: "A", text: "proves that the mother's maps contained many errors" },
            { letter: "B", text: "explains why the speaker inherited the maps" },
            { letter: "C", text: "reveals the omission was deliberate, changing what the speaker understands" },
            { letter: "D", text: "shows that the barn has fallen down since the speaker's childhood" }
          ],
          correct: "C"
        },
        {
          id: "door",
          sol: "11.RL.1.C",
          stem: "The comparison in lines 15–16 to an unlocked door conveys the mother's —",
          choices: [
            { letter: "A", text: "fear that the speaker would never return home" },
            { letter: "B", text: "disappointment that the speaker ignored her maps" },
            { letter: "C", text: "wish to keep the barn road a secret from everyone" },
            { letter: "D", text: "quiet trust that the speaker would find the way alone" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── DRAMA ───────────────────────── */
    {
      id: "g11-rl-drama-ballot",
      family: "G11",
      title: "One Cross-Out",
      kind: "Drama · 11.RL",
      blurb: "Two students, a tied election, and a single ballot that could be read either way.",
      level: 2,
      passage:
        "<p><em>Setting: a classroom after school. Two stacks of paper ballots on a desk. JUNE, student council secretary, holds a tally sheet. DEV, a junior, sits across from her with an unfolded ballot.</em></p>" +
        "<p>" + N(1) + "<strong>JUNE</strong>: Read it again. " +
        N(2) + "<strong>DEV</strong>: Ninety-one for Amara, ninety-one for Tomas. " +
        N(3) + "And this. " +
        N(4) + "<em>(He holds up a ballot with both names circled and one crossed out.)</em> " +
        N(5) + "<strong>JUNE</strong>: That's a spoiled ballot. We throw it out and it's a tie, and Mr. Ruiz breaks ties. " +
        N(6) + "<strong>DEV</strong>: Or someone changed their mind. " +
        N(7) + "They circled Amara, crossed it out, circled Tomas. " +
        N(8) + "It's a vote for Tomas. " +
        N(9) + "<strong>JUNE</strong> <em>(not looking at the ballot)</em>: Or they circled Tomas, crossed out Amara, and were just messy. " +
        N(10) + "<strong>DEV</strong>: Which is the same thing. " +
        N(11) + "<strong>JUNE</strong>: Which is us deciding what a stranger meant. " +
        N(12) + "<em>(A pause. DEV sets the ballot down flat between them, as if it might go off.)</em> " +
        N(13) + "<strong>DEV</strong>: You voted for Amara. " +
        N(14) + "<strong>JUNE</strong>: That's not what this is about. " +
        N(15) + "<strong>DEV</strong>: I'm not saying it is. I'm saying it's hard to be sure what a rule is for when it happens to help you. " +
        N(16) + "<strong>JUNE</strong> <em>(quietly)</em>: And it's hard to read a smudge as a vote when it happens to help you. " +
        N(17) + "<em>(She picks up the ballot, looks at it for a long moment, and slides it into a separate envelope.)</em> " +
        N(18) + "<strong>DEV</strong>: What are you doing? " +
        N(19) + "<strong>JUNE</strong>: Writing down exactly what it looks like. Both names. One cross-out. Then Mr. Ruiz decides, and we sign that we didn't. " +
        N(20) + "<strong>DEV</strong>: That's not a win for anybody. " +
        N(21) + "<strong>JUNE</strong>: That's the point." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which idea does the scene most clearly develop?",
          choices: [
            { letter: "A", text: "Fairness sometimes means giving up the right to decide." },
            { letter: "B", text: "Student elections should be counted by teachers, not students." },
            { letter: "C", text: "Friends should never disagree about an election in public." },
            { letter: "D", text: "A single vote rarely changes the result of an election." }
          ],
          correct: "A"
        },
        {
          id: "gooff",
          sol: "11.RL.2.A",
          stem: "The stage direction in sentence 12 compares the ballot to something that might go off in order to —",
          choices: [
            { letter: "A", text: "suggest that Dev is angry enough to tear it up" },
            { letter: "B", text: "show that both students sense how much depends on one piece of paper" },
            { letter: "C", text: "hint that the ballot has been tampered with" },
            { letter: "D", text: "indicate that the students are running out of time" }
          ],
          correct: "B"
        },
        {
          id: "mirror",
          sol: "11.RL.1.C",
          stem: "Sentences 15 and 16 reveal that June and Dev —",
          choices: [
            { letter: "A", text: "each privately suspect the other of planning to cheat" },
            { letter: "B", text: "both see that their own preferences may be shaping how they read the rule" },
            { letter: "C", text: "agree that the disputed ballot should count as a vote for Tomas" },
            { letter: "D", text: "plan to keep the disputed ballot a secret from Mr. Ruiz" }
          ],
          correct: "B"
        },
        {
          id: "spoiled",
          sol: "11.RL.2.C",
          stem: "In sentence 5, the word spoiled most nearly means —",
          choices: [
            { letter: "A", text: "rotten from being left too long" },
            { letter: "B", text: "treated with too much kindness" },
            { letter: "C", text: "invalid because it is unclear" },
            { letter: "D", text: "stolen from the ballot box" }
          ],
          correct: "C"
        },
        {
          id: "envelope",
          sol: "11.RL.1.B",
          stem: "June's action in sentence 17 resolves the argument by —",
          choices: [
            { letter: "A", text: "counting the ballot as a vote for Amara" },
            { letter: "B", text: "destroying the ballot so that no one can see it" },
            { letter: "C", text: "sending the ballot back to the voter who marked it" },
            { letter: "D", text: "removing the decision from both of them" }
          ],
          correct: "D"
        },
        {
          id: "point",
          sol: "11.RL.2.B",
          stem: "June's final line, That's the point, most nearly means that —",
          choices: [
            { letter: "A", text: "she is frustrated that Dev did not understand her plan sooner" },
            { letter: "B", text: "she believes Tomas deserved to win the election" },
            { letter: "C", text: "a count nobody can call a personal victory is the fairest outcome" },
            { letter: "D", text: "she expects Mr. Ruiz to choose Amara as the winner" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-drama-lastscoop",
      family: "G11",
      title: "Some Saturday",
      kind: "Drama · 11.RL",
      blurb: "Closing time at a walk-up ice-cream window on the last night of summer.",
      level: 1,
      passage:
        "<p><em>Setting: a walk-up ice-cream window at closing time, late August. String lights. ROSA wipes the counter. KWAME flips the sign to CLOSED and leans on the freezer.</em></p>" +
        "<p>" + N(1) + "<strong>KWAME</strong>: That's it. Last customer of the summer. " +
        N(2) + "<strong>ROSA</strong>: He ordered the same thing every night since June. Two scoops mint, no cone, extra napkins. " +
        N(3) + "<strong>KWAME</strong>: You're going to miss the napkin guy. " +
        N(4) + "<strong>ROSA</strong> <em>(wiping the same spot twice)</em>: I'm going to miss knowing what people are going to order. " +
        N(5) + "<strong>KWAME</strong>: They have ice cream in Charlotte. " +
        N(6) + "<strong>ROSA</strong>: They have ice cream. They don't have a window that sticks in the humidity, or a freezer that hums in E flat. " +
        N(7) + "<strong>KWAME</strong>: You made that up. " +
        N(8) + "<strong>ROSA</strong>: Ask the band kids. They tuned to it once. " +
        N(9) + "<em>(KWAME laughs, then stops. He pulls a folded paper from his apron pocket and sets it on the counter.)</em> " +
        N(10) + "<strong>KWAME</strong>: The schedule for September. Your name's still on it. " +
        N(11) + "<strong>ROSA</strong>: I told Mr. Bell three weeks ago. " +
        N(12) + "<strong>KWAME</strong>: I know. I wrote it anyway. Saturdays, four to close. " +
        N(13) + "<strong>ROSA</strong>: Kwame. " +
        N(14) + "<strong>KWAME</strong>: It's a schedule, not a promise. Paper's cheap. " +
        N(15) + "<em>(ROSA picks up the paper, folds it smaller, and puts it in her own pocket.)</em> " +
        N(16) + "<strong>ROSA</strong>: Charlotte is three hours. " +
        N(17) + "<strong>KWAME</strong>: Three and a half if you drive like your dad. " +
        N(18) + "<strong>ROSA</strong>: Some Saturday, then. " +
        N(19) + "<strong>KWAME</strong>: Some Saturday. Bring napkins. " +
        N(20) + "<em>(She flips off the string lights. The freezer hums.)</em>" +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best supported by the scene?",
          choices: [
            { letter: "A", text: "Small, familiar routines are what people miss most when they leave a place." },
            { letter: "B", text: "Summer jobs teach teenagers to manage their money responsibly." },
            { letter: "C", text: "People who move away rarely keep in touch with old friends." },
            { letter: "D", text: "Managers should update their work schedules more carefully." }
          ],
          correct: "A"
        },
        {
          id: "predict",
          sol: "11.RL.1.C",
          stem: "Rosa's answer in sentence 4 shows that she values —",
          choices: [
            { letter: "A", text: "the tips she earns from regular customers" },
            { letter: "B", text: "the predictability of her life at the stand" },
            { letter: "C", text: "the chance to try new flavors each week" },
            { letter: "D", text: "being the only one who remembers orders" }
          ],
          correct: "B"
        },
        {
          id: "schedule",
          sol: "11.RL.2.A",
          stem: "The September schedule with Rosa's name on it (sentences 10–15) most clearly represents —",
          choices: [
            { letter: "A", text: "Kwame's mistake in forgetting that Rosa is moving" },
            { letter: "B", text: "Mr. Bell's refusal to hire a replacement worker" },
            { letter: "C", text: "Kwame's hope that the friendship will continue" },
            { letter: "D", text: "Rosa's plan to keep working at the stand after all" }
          ],
          correct: "C"
        },
        {
          id: "wiping",
          sol: "9.RL.3.B",
          stem: "The stage direction wiping the same spot twice in sentence 4 mainly reveals that Rosa is —",
          choices: [
            { letter: "A", text: "distracted by feelings she is not saying aloud" },
            { letter: "B", text: "careless about cleaning the counter properly" },
            { letter: "C", text: "trying to finish quickly so she can leave" },
            { letter: "D", text: "annoyed that Kwame is not helping her close" }
          ],
          correct: "A"
        },
        {
          id: "cheap",
          sol: "11.RL.2.C",
          stem: "In sentence 14, Kwame says paper's cheap to suggest that the schedule —",
          choices: [
            { letter: "A", text: "was printed on low-quality paper" },
            { letter: "B", text: "costs Rosa nothing to accept without obligation" },
            { letter: "C", text: "is not worth keeping because it is wrong" },
            { letter: "D", text: "should be thrown away with the day's receipts" }
          ],
          correct: "B"
        },
        {
          id: "hum",
          sol: "11.RL.3.A",
          stem: "The playwright ends the scene with the freezer humming (sentence 20) mainly to —",
          choices: [
            { letter: "A", text: "show that the freezer is broken and needs repair" },
            { letter: "B", text: "suggest that Kwame will stay after Rosa leaves" },
            { letter: "C", text: "indicate that the stand will reopen in the morning" },
            { letter: "D", text: "echo the sound Rosa said she would miss, ending on a fond note" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
