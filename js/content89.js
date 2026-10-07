/* SOL Labyrinth — v5.15 expansion: Grade 11 short passages (Virginia G11), file c89.
 * Twenty-nine original SHORT packs (100–150 words; paired 60–80 each; poems 8–10 lines) on
 * a city bus route, a theme park job, pottery and a snowstorm.
 * No VDOE / copyrighted text. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1 · Literary (level 1) · bus route ───────────── */
    {
      id: "g11-rl-c89-crosstown",
      family: "G11",
      title: "The 6:10 Crosstown",
      kind: "Literary · 11.RL",
      blurb: "A bus driver, a regular passenger, and one empty stop on a Tuesday morning.",
      level: 1,
      passage:
        "<p>" + N(1) + "For three years, Teodora had driven the 6:10 Crosstown, and for three years Mr. Pereira had boarded at Alder Street with a folded newspaper and the same remark about the weather. " +
        N(2) + "He always took the front seat on the right, where he could watch the road over her shoulder. " +
        N(3) + "On Tuesday, the Alder Street stop was empty. " +
        N(4) + "Teodora waited a full minute longer than the schedule allowed, ignoring the loud sigh of a commuter behind her. " +
        N(5) + "All day she found herself glancing at the empty front seat. " +
        N(6) + "On Wednesday, he was there again, leaning on a new cane while his grandson held his elbow. " +
        N(7) + "\"A small fall,\" he said, settling in. " +
        N(8) + "\"Nothing worth the news.\" " +
        N(9) + "Teodora pulled away from the curb more gently than usual, and she did not mention how long she had waited at Alder Street the day before.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme of \"The 6:10 Crosstown\"?",
          choices: [
            { letter: "A", text: "People who ride buses must learn to accept frequent delays." },
            { letter: "B", text: "Simple daily routines can build real bonds between people." },
            { letter: "C", text: "Older people should accept help from their families after a fall." },
            { letter: "D", text: "A job done the same way for years eventually loses its meaning." }
          ],
          correct: "B"
        },
        {
          id: "wait",
          sol: "11.RL.1.C",
          stem: "Teodora's action in sentence 4 shows that she —",
          choices: [
            { letter: "A", text: "cares more about Mr. Pereira than about exact timing" },
            { letter: "B", text: "has not noticed how long the bus has been stopped" },
            { letter: "C", text: "wants to annoy the commuter who is sitting behind her" },
            { letter: "D", text: "believes the bus is running ahead of its schedule" }
          ],
          correct: "A"
        },
        {
          id: "glance",
          sol: "11.RL.1.B",
          stem: "The detail in sentence 5 about the empty front seat mainly suggests that Teodora —",
          choices: [
            { letter: "A", text: "wishes another passenger would sit closer to her" },
            { letter: "B", text: "is checking whether the seat needs to be cleaned" },
            { letter: "C", text: "has forgotten which stop Mr. Pereira usually uses" },
            { letter: "D", text: "keeps worrying about what happened to Mr. Pereira" }
          ],
          correct: "D"
        },
        {
          id: "news",
          sol: "11.RL.2.B",
          stem: "Mr. Pereira's comment in sentence 8, \"Nothing worth the news,\" is best described as —",
          choices: [
            { letter: "A", text: "a flashback to an earlier event" },
            { letter: "B", text: "an exaggeration meant to gain sympathy" },
            { letter: "C", text: "an understatement that plays down his injury" },
            { letter: "D", text: "a metaphor comparing his life to a newspaper" }
          ],
          correct: "C"
        },
        {
          id: "end",
          sol: "11.RL.3.A",
          stem: "The final sentence of the story resolves it by showing that Teodora —",
          choices: [
            { letter: "A", text: "shows her concern through actions rather than words" },
            { letter: "B", text: "regrets having delayed the bus for a single passenger" },
            { letter: "C", text: "plans to report the late stop to her supervisor" },
            { letter: "D", text: "feels embarrassed that Mr. Pereira needed help" }
          ],
          correct: "A"
        },
        {
          id: "gently",
          sol: "11.RL.2.C",
          stem: "In sentence 9, the word gently suggests that Teodora is —",
          choices: [
            { letter: "A", text: "too tired to drive at her usual speed" },
            { letter: "B", text: "taking extra care because of his injury" },
            { letter: "C", text: "trying to make up for lost time on the route" },
            { letter: "D", text: "nervous about driving on an icy street" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 2 · Literary (level 2) · theme park job ───────────── */
    {
      id: "g11-rl-c89-teacups",
      family: "G11",
      title: "Keep the Line Moving",
      kind: "Literary · 11.RL",
      blurb: "A ride operator, a strict rule, and a six-year-old frozen at the gate.",
      level: 2,
      passage:
        "<p>" + N(1) + "The rule at Lantern Bay was posted above the Teacups control panel in red letters: KEEP THE LINE MOVING. " +
        N(2) + "Kwame had memorized the numbers by his second week: ninety seconds a ride, forty riders a cycle, no exceptions. " +
        N(3) + "Then a girl of about six reached the gate and stopped as if the ground had turned to glue. " +
        N(4) + "Her father apologized twice, and the people behind them shifted and checked their phones. " +
        N(5) + "Kwame waved the next group through, started the cycle, and crouched beside her while the cups whirled. " +
        N(6) + "\"See the bolts?\" he said, pointing. " +
        N(7) + "\"Those cups have spun a million times and never once flown off.\" " +
        N(8) + "She studied the bolts with the seriousness of an engineer. " +
        N(9) + "On the next cycle she rode, both hands gripping the wheel, and shrieked with joy at every turn. " +
        N(10) + "At closing, Kwame found two words in his supervisor's handwriting on the schedule board: Good call.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does \"Keep the Line Moving\" most clearly develop?",
          choices: [
            { letter: "A", text: "Workplace rules matter less than the feelings of customers." },
            { letter: "B", text: "Children should not be pushed to try rides that frighten them." },
            { letter: "C", text: "Kindness and efficiency can work together with a little thought." },
            { letter: "D", text: "New employees learn most of their skills from supervisors." }
          ],
          correct: "C"
        },
        {
          id: "glue",
          sol: "11.RL.2.A",
          stem: "In sentence 3, comparing the ground to glue mainly conveys —",
          choices: [
            { letter: "A", text: "how fear has suddenly kept the girl from moving" },
            { letter: "B", text: "how sticky the ride platform is after a long day" },
            { letter: "C", text: "how stubborn the girl is about getting her own way" },
            { letter: "D", text: "how slowly the line has been moving all afternoon" }
          ],
          correct: "A"
        },
        {
          id: "kwame",
          sol: "11.RL.1.C",
          stem: "Based on his actions in sentences 5–7, Kwame is best described as —",
          choices: [
            { letter: "A", text: "careless about the park's safety procedures" },
            { letter: "B", text: "eager to impress the girl's father" },
            { letter: "C", text: "nervous about breaking the posted rule" },
            { letter: "D", text: "patient and resourceful under pressure" }
          ],
          correct: "D"
        },
        {
          id: "engineer",
          sol: "11.RL.2.B",
          stem: "The phrase \"with the seriousness of an engineer\" in sentence 8 creates a tone that is —",
          choices: [
            { letter: "A", text: "tense and fearful" },
            { letter: "B", text: "gently humorous" },
            { letter: "C", text: "coldly technical" },
            { letter: "D", text: "sharply critical" }
          ],
          correct: "B"
        },
        {
          id: "phones",
          sol: "11.RL.1.B",
          stem: "Sentence 4 contributes to the story mainly by —",
          choices: [
            { letter: "A", text: "showing the pressure on Kwame to keep the line going" },
            { letter: "B", text: "suggesting that the girl's father is impatient with her" },
            { letter: "C", text: "explaining why the ride had to be shut down early" },
            { letter: "D", text: "revealing that most guests dislike the Teacups ride" }
          ],
          correct: "A"
        },
        {
          id: "goodcall",
          sol: "11.RL.3.A",
          stem: "The note on the schedule board in sentence 10 resolves the story by revealing that —",
          choices: [
            { letter: "A", text: "Kwame will be moved to a faster ride the next day" },
            { letter: "B", text: "the supervisor plans to change the posted rule" },
            { letter: "C", text: "the girl's father complained about the wait" },
            { letter: "D", text: "the supervisor approved of how Kwame handled it" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 3 · Literary (level 2) · pottery ───────────── */
    {
      id: "g11-rl-c89-backshelf",
      family: "G11",
      title: "The Back Shelf",
      kind: "Literary · 11.RL",
      blurb: "Four collapsed bowls, one stained apron, and a shelf of old mistakes.",
      level: 2,
      passage:
        "<p>" + N(1) + "Amara's fourth bowl of the evening sagged sideways on the wheel and folded into itself like a tired hat. " +
        N(2) + "She slapped the clay into a lump and reached for the cutting wire. " +
        N(3) + "\"Wait,\" said Ms. Lindqvist, wiping her hands on an apron so stained it looked like a map. " +
        N(4) + "She led Amara to a back shelf crowded with lopsided cups, cracked plates, and one vase that leaned as if it were listening for something. " +
        N(5) + "\"My first year,\" she said. " +
        N(6) + "\"I keep them so I remember that the clay was teaching me even when I thought it was beating me.\" " +
        N(7) + "Amara looked at the leaning vase for a long moment. " +
        N(8) + "Back at the wheel, she loosened her shoulders, wet her hands, and let the clay rise slower than she wanted it to. " +
        N(9) + "The bowl that came up was small and plain. " +
        N(10) + "It did not fall.</p>",
      claims: [
        {
          id: "shelf",
          sol: "11.RL.2.A",
          stem: "The shelf of lopsided pottery in sentence 4 most clearly symbolizes —",
          choices: [
            { letter: "A", text: "the teacher's wish to sell her early work" },
            { letter: "B", text: "the lasting value of mistakes in learning a craft" },
            { letter: "C", text: "the studio's lack of space for new projects" },
            { letter: "D", text: "the fragile nature of all pottery once fired" }
          ],
          correct: "B"
        },
        {
          id: "slap",
          sol: "11.RL.1.C",
          stem: "Amara's action in sentence 2 reveals that she is —",
          choices: [
            { letter: "A", text: "pleased that the clay is soft enough to reshape" },
            { letter: "B", text: "preparing to show her teacher what went wrong" },
            { letter: "C", text: "frustrated and ready to give up on the piece" },
            { letter: "D", text: "careful to save the clay for another student" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme of \"The Back Shelf\"?",
          choices: [
            { letter: "A", text: "Failure can be a necessary part of gaining a skill." },
            { letter: "B", text: "Teachers should keep their students' early work." },
            { letter: "C", text: "Plain objects are more useful than fancy ones." },
            { letter: "D", text: "Talent matters more than practice in the arts." }
          ],
          correct: "A"
        },
        {
          id: "slower",
          sol: "11.RL.2.C",
          stem: "In sentence 8, the phrase \"slower than she wanted it to\" suggests that Amara —",
          choices: [
            { letter: "A", text: "is running out of time before the studio closes" },
            { letter: "B", text: "cannot get the wheel to spin at the right speed" },
            { letter: "C", text: "is copying the exact motions of her teacher" },
            { letter: "D", text: "is choosing patience over her own impatience" }
          ],
          correct: "D"
        },
        {
          id: "short",
          sol: "11.RL.3.A",
          stem: "The very short final sentence of the story mainly serves to —",
          choices: [
            { letter: "A", text: "hint that the bowl will crack later in the kiln" },
            { letter: "B", text: "show that Amara is disappointed with a plain bowl" },
            { letter: "C", text: "emphasize a quiet success after repeated failure" },
            { letter: "D", text: "suggest that the lesson has come to a sudden end" }
          ],
          correct: "C"
        },
        {
          id: "apron",
          sol: "11.RL.1.B",
          stem: "The description of Ms. Lindqvist's apron in sentence 3 mainly suggests that she —",
          choices: [
            { letter: "A", text: "has many years of experience working with clay" },
            { letter: "B", text: "is careless about keeping the studio clean" },
            { letter: "C", text: "enjoys traveling and collecting old maps" },
            { letter: "D", text: "rarely works at the wheel herself anymore" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 4 · Literary (level 3) · snowstorm ───────────── */
    {
      id: "g11-rl-c89-woodstove",
      family: "G11",
      title: "The Second Night",
      kind: "Literary · 11.RL",
      blurb: "A storm cuts the power, a grandmother deals the cards, and nobody checks the time.",
      level: 3,
      passage:
        "<p>" + N(1) + "By the second night of the storm, the house had shrunk to the size of the woodstove's glow. " +
        N(2) + "Min-jun had spent the first night refreshing a phone that no longer found a signal, as though persistence could restart the towers. " +
        N(3) + "His sister Seo-yeon had spent it pretending to be bored, which was harder work than actually being bored. " +
        N(4) + "Their grandmother, who had lived through winters with no phones to lose, set out a deck of cards with one softened corner and waited. " +
        N(5) + "She did not explain the game; she played it slowly, narrating her own mistakes, until both of them were leaning in to correct her. " +
        N(6) + "Outside, the drifts climbed the windows and erased the street. " +
        N(7) + "Inside, Min-jun noticed that no one had checked the time in hours. " +
        N(8) + "When the lights blinked on the next morning, the three of them looked up at the ceiling with something close to disappointment.</p>",
      claims: [
        {
          id: "shrunk",
          sol: "11.RL.2.A",
          stem: "In sentence 1, the statement that the house \"had shrunk to the size of the woodstove's glow\" suggests that —",
          choices: [
            { letter: "A", text: "the family has moved its belongings into a single room" },
            { letter: "B", text: "the storm has damaged part of the house's walls" },
            { letter: "C", text: "the family's world has narrowed to one warm, lit space" },
            { letter: "D", text: "the woodstove is too small to heat the whole house" }
          ],
          correct: "C"
        },
        {
          id: "bored",
          sol: "11.RL.2.B",
          stem: "The remark in sentence 3 that pretending to be bored was \"harder work than actually being bored\" creates a tone that is —",
          choices: [
            { letter: "A", text: "wry and observant" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "anxious and urgent" },
            { letter: "D", text: "formal and distant" }
          ],
          correct: "A"
        },
        {
          id: "grandma",
          sol: "11.RL.1.C",
          stem: "The grandmother's approach in sentence 5 reveals that she —",
          choices: [
            { letter: "A", text: "has forgotten the rules of a game she once knew" },
            { letter: "B", text: "draws the children in without forcing them to join" },
            { letter: "C", text: "wants the children to admit they miss their phones" },
            { letter: "D", text: "prefers to play cards alone while others watch" }
          ],
          correct: "B"
        },
        {
          id: "time",
          sol: "11.RL.1.B",
          stem: "Sentence 7 most nearly implies that the family —",
          choices: [
            { letter: "A", text: "has lost track of the hour because every clock has stopped" },
            { letter: "B", text: "is worried about how long the storm will last" },
            { letter: "C", text: "plans to go to sleep as soon as the game ends" },
            { letter: "D", text: "has become so absorbed that time no longer matters" }
          ],
          correct: "D"
        },
        {
          id: "lights",
          sol: "11.RL.3.A",
          stem: "Which statement best explains how the final sentence resolves \"The Second Night\"?",
          choices: [
            { letter: "A", text: "It shows the family relieved that the storm is finally over." },
            { letter: "B", text: "It suggests the return of power ends a closeness they valued." },
            { letter: "C", text: "It reveals that the grandmother has won the card game." },
            { letter: "D", text: "It hints that another storm will arrive the following night." }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best supported by the story of the storm and the card game?",
          choices: [
            { letter: "A", text: "Technology always fails people at the worst possible moment." },
            { letter: "B", text: "Older relatives understand games better than young people do." },
            { letter: "C", text: "Severe weather should be treated as a serious danger." },
            { letter: "D", text: "Losing everyday distractions can bring people closer together." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 5 · Literary (level 3) · bus route ───────────── */
    {
      id: "g11-rl-c89-route22",
      family: "G11",
      title: "The Room on the 22",
      kind: "Literary · 11.RL",
      blurb: "A rider with headphones, a woman who counts the stops, and a detour nobody planned.",
      level: 3,
      passage:
        "<p>" + N(1) + "I ride the 22 with my headphones in, which on most mornings is the whole point. " +
        N(2) + "The music builds a small room around me, and nobody else is invited. " +
        N(3) + "The woman in the green coat counts the stops on her fingers (Maple, Grant, Fifth, the hospital), her lips moving like a person praying in a language she half remembers. " +
        N(4) + "This morning a water main had broken on Grant, and the bus swung left onto streets she had never counted. " +
        N(5) + "Her fingers stopped. " +
        N(6) + "She looked out the window, then at the faces around her, and every face looked down. " +
        N(7) + "I pulled one earbud out, then the other. " +
        N(8) + "\"It comes back to Fifth,\" I told her. " +
        N(9) + "\"Two more stops, and I'll tell you.\" " +
        N(10) + "For the rest of the ride the room I had built was gone, and I did not miss it as much as I expected.</p>",
      claims: [
        {
          id: "pov",
          sol: "11.RL.3.A",
          stem: "The story is told from the narrator's first-person point of view. This choice mainly allows the reader to —",
          choices: [
            { letter: "A", text: "learn the green-coated woman's private thoughts" },
            { letter: "B", text: "understand why the water main broke on Grant" },
            { letter: "C", text: "follow how the narrator's private attitude shifts" },
            { letter: "D", text: "see the detour from the bus driver's position" }
          ],
          correct: "C"
        },
        {
          id: "room",
          sol: "11.RL.2.A",
          stem: "The \"small room\" mentioned in sentences 2 and 10 most clearly symbolizes —",
          choices: [
            { letter: "A", text: "the narrator's chosen distance from other people" },
            { letter: "B", text: "the crowded, noisy space inside the morning bus" },
            { letter: "C", text: "the narrator's bedroom, where she plays music" },
            { letter: "D", text: "the hospital where the woman in green is headed" }
          ],
          correct: "A"
        },
        {
          id: "praying",
          sol: "11.RL.2.B",
          stem: "The simile in sentence 3 comparing the woman to \"a person praying\" emphasizes that —",
          choices: [
            { letter: "A", text: "she is asking the other riders for help" },
            { letter: "B", text: "she speaks a language the narrator cannot follow" },
            { letter: "C", text: "she is late for a religious service downtown" },
            { letter: "D", text: "counting the stops is a careful ritual for her" }
          ],
          correct: "D"
        },
        {
          id: "fingers",
          sol: "11.RL.1.B",
          stem: "Sentence 5 is set apart as its own very short sentence mainly to —",
          choices: [
            { letter: "A", text: "show that the woman has fallen asleep" },
            { letter: "B", text: "mark the moment the woman becomes lost" },
            { letter: "C", text: "suggest the woman has reached her stop" },
            { letter: "D", text: "reveal that the woman is angry at the driver" }
          ],
          correct: "B"
        },
        {
          id: "earbud",
          sol: "11.RL.1.C",
          stem: "The narrator's action in sentence 7 shows that she —",
          choices: [
            { letter: "A", text: "chooses to step out of her usual isolation" },
            { letter: "B", text: "is annoyed that the detour interrupted her music" },
            { letter: "C", text: "wants the other riders to notice her helping" },
            { letter: "D", text: "has finished listening to her morning playlist" }
          ],
          correct: "A"
        },
        {
          id: "looked",
          sol: "11.RL.2.C",
          stem: "In sentence 6, the phrase \"every face looked down\" suggests that the other passengers —",
          choices: [
            { letter: "A", text: "are reading the detour map on their phones" },
            { letter: "B", text: "do not understand what the woman is asking" },
            { letter: "C", text: "are embarrassed by the driver's wrong turn" },
            { letter: "D", text: "avoid getting involved in her confusion" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 6 · Literary (level 1) · theme park job ───────────── */
    {
      id: "g11-rl-c89-raccoon",
      family: "G11",
      title: "Never Speak",
      kind: "Literary · 11.RL",
      blurb: "A costumed character in July heat and a drawing she cannot say thank you for.",
      level: 1,
      passage:
        "<p>" + N(1) + "The rules for park characters were simple: never speak, never remove the head, and never let the guests see you sweat. " +
        N(2) + "Lucía had broken none of these rules in six weeks, though the third one was mostly luck. " +
        N(3) + "Inside the raccoon costume, the July afternoon felt like the inside of a lunch box left in a parked car. " +
        N(4) + "She waved, posed, and danced through her twenty-minute set while counting down the seconds in her head. " +
        N(5) + "Near the end, a small boy slipped to the front of the line and held up a crayon drawing of a raccoon wearing a crown. " +
        N(6) + "Lucía could not say thank you. " +
        N(7) + "Instead, she pressed the paper to her costume's chest and bowed so low that the boy laughed out loud. " +
        N(8) + "Later, in the break room, she pinned the drawing above her locker, where she would see it before every set.</p>",
      claims: [
        {
          id: "lucia",
          sol: "11.RL.1.C",
          stem: "Based on the passage, Lucía is best described as —",
          choices: [
            { letter: "A", text: "bored with her job" },
            { letter: "B", text: "dedicated and playful" },
            { letter: "C", text: "shy and unfriendly" },
            { letter: "D", text: "careless with rules" }
          ],
          correct: "B"
        },
        {
          id: "lunchbox",
          sol: "11.RL.2.A",
          stem: "The comparison to a lunch box in sentence 3 mainly emphasizes —",
          choices: [
            { letter: "A", text: "how hungry Lucía is during her long shift" },
            { letter: "B", text: "how small the costume feels on her body" },
            { letter: "C", text: "how hot and stuffy it is inside the costume" },
            { letter: "D", text: "how far the break room is from the park" }
          ],
          correct: "C"
        },
        {
          id: "luck",
          sol: "11.RL.2.C",
          stem: "In sentence 2, the phrase \"mostly luck\" suggests that —",
          choices: [
            { letter: "A", text: "the heat makes the third rule hard to keep" },
            { letter: "B", text: "Lucía won her job in a contest" },
            { letter: "C", text: "the other characters break the rules often" },
            { letter: "D", text: "Lucía does not take the rules seriously" }
          ],
          correct: "A"
        },
        {
          id: "cannot",
          sol: "11.RL.1.B",
          stem: "Sentence 6 is important to the story mainly because it —",
          choices: [
            { letter: "A", text: "shows that Lucía did not like the drawing" },
            { letter: "B", text: "reveals that the boy is too young to talk" },
            { letter: "C", text: "explains why the set ended early that day" },
            { letter: "D", text: "sets up a limit Lucía must find a way around" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme of \"Never Speak\"?",
          choices: [
            { letter: "A", text: "Summer jobs are more difficult than they appear." },
            { letter: "B", text: "Children often notice details that adults miss." },
            { letter: "C", text: "Rules at work should be changed when it is hot." },
            { letter: "D", text: "People can connect deeply even without words." }
          ],
          correct: "D"
        },
        {
          id: "locker",
          sol: "11.RL.3.A",
          stem: "The final sentence of \"Never Speak\" shows that the drawing —",
          choices: [
            { letter: "A", text: "will be returned to the boy the next day" },
            { letter: "B", text: "will keep encouraging Lucía in her work" },
            { letter: "C", text: "must be hidden from her supervisor" },
            { letter: "D", text: "was damaged during her performance" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 7 · Literary (level 3) · pottery ───────────── */
    {
      id: "g11-rl-c89-kilnlid",
      family: "G11",
      title: "What the Fire Finished",
      kind: "Literary · 11.RL",
      blurb: "An apprentice opens the kiln to find his careful glaze has run.",
      level: 3,
      passage:
        "<p>" + N(1) + "The kiln took two days to cool, and Thanh spent both of them pretending he did not care what was inside. " +
        N(2) + "His aunt lifted the lid on the third morning, and heat rose from it like a breath held too long. " +
        N(3) + "His tall jar stood in the back, but the blue glaze he had brushed on carefully had run in the fire and pooled at its foot in a glassy puddle. " +
        N(4) + "\"It's ruined,\" he said. " +
        N(5) + "His aunt turned the jar in the light, and the pooled glaze flashed from blue to almost green. " +
        N(6) + "\"Customers pay extra for this,\" she said. " +
        N(7) + "\"The fire finished what you started.\" " +
        N(8) + "Thanh wanted to argue that he had not chosen it, that an accident could not count as skill. " +
        N(9) + "Instead he wrote the kiln temperature and the thickness of the glaze in his notebook, in case he ever wanted to make the same mistake again.</p>",
      claims: [
        {
          id: "pretend",
          sol: "11.RL.1.C",
          stem: "Sentence 1 reveals that Thanh —",
          choices: [
            { letter: "A", text: "has lost interest in the work he put in the kiln" },
            { letter: "B", text: "is anxious about the result but hides his feelings" },
            { letter: "C", text: "expects his aunt to criticize his glaze in public" },
            { letter: "D", text: "is too busy with other chores to think about it" }
          ],
          correct: "B"
        },
        {
          id: "breath",
          sol: "11.RL.2.A",
          stem: "In sentence 2, the simile comparing the heat to \"a breath held too long\" conveys —",
          choices: [
            { letter: "A", text: "the release of tension after a long wait" },
            { letter: "B", text: "the danger of opening a kiln too early" },
            { letter: "C", text: "the aunt's frustration with her nephew" },
            { letter: "D", text: "the cold air of the early morning studio" }
          ],
          correct: "A"
        },
        {
          id: "finished",
          sol: "11.RL.1.B",
          stem: "The aunt's statement in sentence 7 suggests that she believes —",
          choices: [
            { letter: "A", text: "Thanh should have fired the jar a second time" },
            { letter: "B", text: "the jar must be sold before anyone notices the flaw" },
            { letter: "C", text: "the result came from both Thanh's work and the firing" },
            { letter: "D", text: "the kiln is too hot to use for delicate glazes" }
          ],
          correct: "C"
        },
        {
          id: "mistake",
          sol: "11.RL.2.B",
          stem: "The phrase \"make the same mistake again\" in sentence 9 is best described as —",
          choices: [
            { letter: "A", text: "a paradox showing Thanh now values the accident" },
            { letter: "B", text: "an exaggeration showing Thanh's anger at himself" },
            { letter: "C", text: "a flashback to an earlier failure in the studio" },
            { letter: "D", text: "a metaphor comparing glaze to a written record" }
          ],
          correct: "A"
        },
        {
          id: "resolve",
          sol: "11.RL.3.A",
          stem: "How does the final sentence resolve the conflict in \"What the Fire Finished\"?",
          choices: [
            { letter: "A", text: "Thanh decides to give up glazing tall jars entirely." },
            { letter: "B", text: "Thanh wins the argument with his aunt about skill." },
            { letter: "C", text: "Thanh admits aloud that his aunt was right all along." },
            { letter: "D", text: "Thanh quietly treats the accident as worth repeating." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does the story of Thanh's jar most clearly develop?",
          choices: [
            { letter: "A", text: "Careful planning always produces the best results." },
            { letter: "B", text: "Family members rarely agree about creative work." },
            { letter: "C", text: "Unplanned results can become a source of learning." },
            { letter: "D", text: "Customers care more about price than about quality." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 8 · Informational (level 2) · bus route ───────────── */
    {
      id: "g11-ri-c89-bunching",
      family: "G11",
      title: "Why Buses Arrive in Bunches",
      kind: "Informational · 11.RI",
      blurb: "One small delay, two buses side by side, and a long empty gap behind them.",
      level: 2,
      passage:
        "<p>" + N(1) + "Anyone who has waited twenty minutes for a bus, only to see three arrive together, has witnessed a problem transit planners call bus bunching. " +
        N(2) + "It begins with a small delay. " +
        N(3) + "If one bus falls a minute behind, more riders gather at each stop ahead of it, and boarding them takes longer. " +
        N(4) + "Meanwhile, the bus behind it finds fewer riders waiting, so it moves faster and gradually catches up. " +
        N(5) + "Within a few miles, the two buses travel together, and riders down the line face a long gap. " +
        N(6) + "Some cities fight bunching by having drivers hold briefly at certain stops to restore even spacing. " +
        N(7) + "Others let riders pay before boarding, which shortens the time spent at each stop. " +
        N(8) + "Neither fix is perfect, but both rest on the same idea: a bus route behaves less like a timetable than like a line of dominoes, where one small push travels all the way down.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the central idea of \"Why Buses Arrive in Bunches\"?",
          choices: [
            { letter: "A", text: "Riders should pay before boarding to keep buses on time." },
            { letter: "B", text: "Most bus delays are caused by drivers who stop too long." },
            { letter: "C", text: "Cities need more buses on busy routes to prevent long gaps." },
            { letter: "D", text: "Small delays grow into bunching, which cities try to counter." }
          ],
          correct: "D"
        },
        {
          id: "chain",
          sol: "11.RI.2.A",
          stem: "How does the author organize sentences 2–5?",
          choices: [
            { letter: "A", text: "by tracing a chain of causes and effects step by step" },
            { letter: "B", text: "by comparing two cities that solved the same problem" },
            { letter: "C", text: "by listing reasons riders dislike waiting at stops" },
            { letter: "D", text: "by describing a problem and then dismissing it" }
          ],
          correct: "A"
        },
        {
          id: "faster",
          sol: "11.RI.1.B",
          stem: "According to the passage, why does the second bus gradually catch up to the first?",
          choices: [
            { letter: "A", text: "Its driver is told to speed up to close the gap." },
            { letter: "B", text: "It finds fewer riders waiting at each stop." },
            { letter: "C", text: "It skips the stops where no one is waiting." },
            { letter: "D", text: "It follows a shorter path through downtown." }
          ],
          correct: "B"
        },
        {
          id: "dominoes",
          sol: "11.RI.2.B",
          stem: "In sentence 8, comparing a bus route to a line of dominoes helps the reader understand that —",
          choices: [
            { letter: "A", text: "buses are often lined up in rows at the depot" },
            { letter: "B", text: "a schedule can be knocked over and rebuilt quickly" },
            { letter: "C", text: "one small delay can spread along the whole route" },
            { letter: "D", text: "riders tend to fall into line when buses arrive" }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward the solutions described in sentences 6–7 is best described as —",
          choices: [
            { letter: "A", text: "openly dismissive" },
            { letter: "B", text: "wildly enthusiastic" },
            { letter: "C", text: "realistic and measured" },
            { letter: "D", text: "confused and uncertain" }
          ],
          correct: "C"
        },
        {
          id: "opening",
          sol: "11.RI.2.C",
          stem: "The author begins the passage with the experience in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "complain about the city's slow bus service" },
            { letter: "B", text: "connect the topic to something readers know" },
            { letter: "C", text: "prove that three buses always travel together" },
            { letter: "D", text: "introduce a transit planner who studies delays" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 9 · Informational (level 2) · pottery ───────────── */
    {
      id: "g11-ri-c89-mudtostone",
      family: "G11",
      title: "From Mud to Stone",
      kind: "Informational · 11.RI",
      blurb: "What actually happens to a clay pot inside a kiln.",
      level: 2,
      passage:
        "<p>" + N(1) + "A freshly made clay pot is surprisingly fragile; drop it in a bucket of water and it will slump back into mud. " +
        N(2) + "The change that makes a pot permanent happens inside a kiln. " +
        N(3) + "As the temperature climbs past about 1,000 degrees Fahrenheit, the water chemically bonded within the clay is driven off, and the material can no longer dissolve. " +
        N(4) + "Potters call this first firing a bisque. " +
        N(5) + "At higher temperatures, often above 2,000 degrees, some minerals in the clay begin to melt and fuse the remaining particles together, a process known as vitrification. " +
        N(6) + "A vitrified pot is dense, hard, and nearly waterproof. " +
        N(7) + "Glaze, a thin coat of glassy material, is usually applied after the bisque and melted in a second firing. " +
        N(8) + "Because each step depends on the one before it, rushing the heat can crack a pot that took hours to shape.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "Which of the following best summarizes the central idea of \"From Mud to Stone\"?",
          choices: [
            { letter: "A", text: "Glaze is the most important part of making a pot waterproof." },
            { letter: "B", text: "Firing changes clay in stages into a hard, lasting material." },
            { letter: "C", text: "Clay pots are too fragile to be used for holding water." },
            { letter: "D", text: "Potters must shape their work quickly before the clay dries." }
          ],
          correct: "B"
        },
        {
          id: "fuse",
          sol: "11.RI.1.B",
          stem: "According to the passage, what happens to the clay during vitrification?",
          choices: [
            { letter: "A", text: "Its surface is coated with a thin layer of glaze." },
            { letter: "B", text: "It soaks up water and slumps back into mud." },
            { letter: "C", text: "Some of its minerals melt and bind the particles." },
            { letter: "D", text: "It cools slowly over two days inside the kiln." }
          ],
          correct: "C"
        },
        {
          id: "define",
          sol: "11.RV.1.B",
          stem: "Based on sentences 5 and 6, the word vitrification can best be defined as —",
          choices: [
            { letter: "A", text: "the drying of clay on a shelf before firing" },
            { letter: "B", text: "the shaping of a pot on a spinning wheel" },
            { letter: "C", text: "the cracking of clay when heat rises too fast" },
            { letter: "D", text: "the fusing of clay into a dense, glassy solid" }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "11.RI.2.A",
          stem: "The author organizes \"From Mud to Stone\" mainly by —",
          choices: [
            { letter: "A", text: "explaining a process in the order it happens" },
            { letter: "B", text: "comparing two different kinds of kilns" },
            { letter: "C", text: "presenting an argument and then a rebuttal" },
            { letter: "D", text: "listing common mistakes made by beginners" }
          ],
          correct: "A"
        },
        {
          id: "bucket",
          sol: "11.RI.2.C",
          stem: "The author includes the detail about a bucket of water in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "warn readers never to wash unfired pottery" },
            { letter: "B", text: "show how clay is mixed before it is shaped" },
            { letter: "C", text: "make clear how weak clay is before firing" },
            { letter: "D", text: "explain why potters keep their clay damp" }
          ],
          correct: "C"
        },
        {
          id: "rush",
          sol: "11.RI.2.B",
          stem: "Sentence 8 serves mainly to —",
          choices: [
            { letter: "A", text: "stress why the stages of firing cannot be hurried" },
            { letter: "B", text: "introduce a new topic about shaping pots by hand" },
            { letter: "C", text: "suggest that most pots crack during their first firing" },
            { letter: "D", text: "argue that kilns should be run at lower temperatures" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 10 · Informational (level 3) · snowstorm ───────────── */
    {
      id: "g11-ri-c89-lakeeffect",
      family: "G11",
      title: "Snow from the Lake",
      kind: "Informational · 11.RI",
      blurb: "How a warm lake and a cold wind can bury one town and spare the next.",
      level: 3,
      passage:
        "<p>" + N(1) + "Some of the heaviest snowfalls on Earth come not from enormous storm systems but from a narrow, local process known as lake-effect snow. " +
        N(2) + "It begins in late autumn and early winter, when frigid air sweeps across a large lake whose water is still comparatively warm. " +
        N(3) + "The lake heats and moistens the lowest layer of air, which rises, cools, and condenses into clouds. " +
        N(4) + "Because the air keeps gathering moisture as it crosses the water, the longer its path over the lake, the more snow it can carry. " +
        N(5) + "Once the clouds reach the shore, friction with the land slows the wind and forces the air upward again, wringing out the moisture. " +
        N(6) + "The result can be startlingly uneven: one town may receive three feet of snow while another, twenty miles away, sees only flurries. " +
        N(7) + "Forecasters watch wind direction as closely as temperature. " +
        N(8) + "By midwinter, when many lakes freeze over, the effect usually fades.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          stem: "Which statement best summarizes \"Snow from the Lake\"?",
          choices: [
            { letter: "A", text: "Cold air over warm lake water can produce heavy, uneven snow." },
            { letter: "B", text: "Large storm systems cause most of the snow that falls on Earth." },
            { letter: "C", text: "Lakes freeze over early in winter, which ends most snowstorms." },
            { letter: "D", text: "Towns near lakes receive the same amount of snow every year." }
          ],
          correct: "A"
        },
        {
          id: "fades",
          sol: "11.RI.1.B",
          stem: "Based on the passage, why does lake-effect snow usually fade by midwinter?",
          choices: [
            { letter: "A", text: "The wind stops blowing across the lake by then." },
            { letter: "B", text: "Forecasters begin warning towns earlier in the season." },
            { letter: "C", text: "The air over the land becomes too cold to form clouds." },
            { letter: "D", text: "Ice cuts the cold air off from the lake's warm water." }
          ],
          correct: "D"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          stem: "How does the author develop the explanation in sentences 2–5?",
          choices: [
            { letter: "A", text: "by comparing lake-effect snow with ordinary rain" },
            { letter: "B", text: "by following the air as it changes step by step" },
            { letter: "C", text: "by listing the towns that receive the most snow" },
            { letter: "D", text: "by describing a storm from one family's point of view" }
          ],
          correct: "B"
        },
        {
          id: "wringing",
          sol: "11.RI.2.C",
          stem: "The author's use of the word wringing in sentence 5 helps the reader picture moisture being —",
          choices: [
            { letter: "A", text: "frozen solid into thick sheets of lake ice" },
            { letter: "B", text: "carried far inland by strong winter winds" },
            { letter: "C", text: "squeezed out of the air like water from a cloth" },
            { letter: "D", text: "spread evenly over every town along the shore" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "11.RI.1.B",
          stem: "Select TWO sentences that describe conditions that help produce heavy lake-effect snow.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "tone",
          sol: "11.RI.1.C",
          stem: "The word startlingly in sentence 6 shows that the author's attitude toward lake-effect snow is one of —",
          choices: [
            { letter: "A", text: "fear about its danger to drivers" },
            { letter: "B", text: "doubt about the forecasters' skill" },
            { letter: "C", text: "boredom with a familiar weather event" },
            { letter: "D", text: "interest in how surprising it can be" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 11 · Informational (level 1) · theme park job ───────────── */
    {
      id: "g11-ri-c89-queues",
      family: "G11",
      title: "The Art of the Wait",
      kind: "Informational · 11.RI",
      blurb: "Theme parks can't always shorten lines, so they change how lines feel.",
      level: 1,
      passage:
        "<p>" + N(1) + "Theme parks cannot always make lines shorter, so many of them work to make lines feel shorter. " +
        N(2) + "Designers know that time spent waiting with nothing to do seems longer than time spent occupied. " +
        N(3) + "For that reason, many queues wind back and forth instead of stretching in one straight row, so guests cannot see how far they still have to go. " +
        N(4) + "Walls along the path are often covered with posters, puzzles, or small exhibits that set up the story of the ride. " +
        N(5) + "Some lines include shade, fans, or misting stations to keep guests comfortable in summer heat. " +
        N(6) + "Posted wait times are sometimes set slightly longer than the real wait, so guests feel pleased when they reach the front early. " +
        N(7) + "None of these tricks moves a line faster, but each one changes how the wait is experienced.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "What is the main idea of \"The Art of the Wait\"?",
          choices: [
            { letter: "A", text: "Parks use design to make waiting feel shorter." },
            { letter: "B", text: "Most theme park lines are longer than posted." },
            { letter: "C", text: "Guests should avoid parks during summer heat." },
            { letter: "D", text: "Rides with stories attract the longest lines." }
          ],
          correct: "A"
        },
        {
          id: "wind",
          sol: "11.RI.1.B",
          stem: "According to the passage, why do many queues wind back and forth?",
          choices: [
            { letter: "A", text: "to fit more rides into a small park" },
            { letter: "B", text: "to keep guests from cutting in line" },
            { letter: "C", text: "to hide how much of the line is left" },
            { letter: "D", text: "to give guests more shade in the heat" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          stem: "The author develops \"The Art of the Wait\" mainly by —",
          choices: [
            { letter: "A", text: "telling the story of one guest's long day" },
            { letter: "B", text: "stating a goal and giving examples of it" },
            { letter: "C", text: "comparing two parks with different rules" },
            { letter: "D", text: "arguing that parks should build fewer rides" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "11.RI.1.C",
          stem: "The author wrote \"The Art of the Wait\" mainly to —",
          choices: [
            { letter: "A", text: "persuade parks to post honest wait times" },
            { letter: "B", text: "warn guests about tricks parks play on them" },
            { letter: "C", text: "advertise a new ride at a popular park" },
            { letter: "D", text: "explain how parks shape the waiting experience" }
          ],
          correct: "D"
        },
        {
          id: "pleased",
          sol: "11.RI.2.C",
          stem: "Which sentence explains why guests might feel pleased when they reach the front of a line?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "experienced",
          sol: "11.RV.1.C",
          stem: "In sentence 7, the word experienced most nearly means —",
          choices: [
            { letter: "A", text: "felt by the guests" },
            { letter: "B", text: "skilled from practice" },
            { letter: "C", text: "measured by the staff" },
            { letter: "D", text: "planned in advance" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 12 · Informational (level 3) · snowstorm ───────────── */
    {
      id: "g11-ri-c89-rollers",
      family: "G11",
      title: "Rolling the Roads",
      kind: "Informational · 11.RI",
      blurb: "Why towns once packed their snow down instead of plowing it away.",
      level: 3,
      passage:
        "<p>" + N(1) + "Before motorized plows, many towns did not try to remove snow from their roads at all. " +
        N(2) + "In the era of horse-drawn sleighs, packed snow was useful: crews used heavy wooden rollers, pulled by teams of horses, to flatten it into a smooth, hard surface. " +
        N(3) + "Clearing a street down to bare dirt would actually have stranded the sleighs. " +
        N(4) + "The arrival of automobiles reversed that logic. " +
        N(5) + "Cars needed traction on pavement, not a glossy sheet of packed snow, so cities began attaching blades to trucks and pushing snow aside. " +
        N(6) + "Salt and sand followed, spread to melt ice or give tires something to grip. " +
        N(7) + "The change was not only mechanical but also a shift in expectation: residents who once accepted a snowbound week came to see a clear road the next morning as a basic city service. " +
        N(8) + "Today's plows are the product of that shift as much as of any engine.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which sentence best states the central idea of \"Rolling the Roads\"?",
          choices: [
            { letter: "A", text: "Horses were stronger than early trucks for clearing snow." },
            { letter: "B", text: "Salt is the most effective way to keep winter roads safe." },
            { letter: "C", text: "Snow care changed with vehicles and with public expectations." },
            { letter: "D", text: "Residents have always demanded clear roads after storms." }
          ],
          correct: "C"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "The author organizes \"Rolling the Roads\" mainly by —",
          choices: [
            { letter: "A", text: "contrasting an earlier approach with a later one" },
            { letter: "B", text: "ranking snow-removal tools from best to worst" },
            { letter: "C", text: "describing one storm from beginning to end" },
            { letter: "D", text: "answering a series of questions from readers" }
          ],
          correct: "A"
        },
        {
          id: "stranded",
          sol: "11.RI.2.B",
          stem: "Sentence 3 serves mainly to —",
          choices: [
            { letter: "A", text: "show that early towns could not afford to clear roads" },
            { letter: "B", text: "explain why packing snow made sense at the time" },
            { letter: "C", text: "suggest that sleighs were unsafe on winter roads" },
            { letter: "D", text: "describe how crews repaired roads in the spring" }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "11.RI.1.B",
          stem: "Based on sentences 2–5, the reader can conclude that —",
          choices: [
            { letter: "A", text: "automobiles were first used to pull wooden rollers" },
            { letter: "B", text: "towns removed snow for sleighs and packed it for cars" },
            { letter: "C", text: "sleighs could travel easily on bare dirt roads" },
            { letter: "D", text: "the best way to treat snow depended on the vehicles" }
          ],
          correct: "D"
        },
        {
          id: "logic",
          sol: "11.RI.2.C",
          stem: "In sentence 4, the phrase \"reversed that logic\" refers to the change from —",
          choices: [
            { letter: "A", text: "keeping snow on the road to clearing it away" },
            { letter: "B", text: "using salt on roads to using sand instead" },
            { letter: "C", text: "driving cars in winter to riding in sleighs" },
            { letter: "D", text: "clearing roads by hand to using horses" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "11.RI.1.C",
          stem: "The final sentence suggests that the author views modern plowing as —",
          choices: [
            { letter: "A", text: "a waste of money that cities could avoid" },
            { letter: "B", text: "a purely mechanical advance in engine design" },
            { letter: "C", text: "a product of new attitudes, not only machines" },
            { letter: "D", text: "a service that most residents take for granted" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 13 · Informational (level 1) · pottery ───────────── */
    {
      id: "g11-ri-c89-centering",
      family: "G11",
      title: "Finding the Center",
      kind: "Informational · 11.RI",
      blurb: "The first and hardest step of throwing a pot on the wheel.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every pot thrown on a potter's wheel begins with a step called centering. " +
        N(2) + "The potter places a lump of clay in the middle of the spinning wheel head and presses it with wet hands until it turns without any wobble. " +
        N(3) + "This step can take beginners many tries. " +
        N(4) + "If the clay is even slightly off-center, the walls of the pot will rise unevenly, thin on one side and thick on the other. " +
        N(5) + "Uneven walls can then warp as the pot dries or crack in the heat of the kiln. " +
        N(6) + "Experienced potters often brace their elbows against their legs to keep their hands steady while the clay spins. " +
        N(7) + "Many teachers say that centering is less about strength than about patience. " +
        N(8) + "Once the clay runs smoothly under the hands, the rest of the pot has a solid foundation.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the main idea of \"Finding the Center\"?",
          choices: [
            { letter: "A", text: "Beginners should practice on small pots before large ones." },
            { letter: "B", text: "Most pots crack in the kiln because of poor glazing." },
            { letter: "C", text: "Centering is a first step that decides if a pot is even." },
            { letter: "D", text: "A strong grip is the key to success at the potter's wheel." }
          ],
          correct: "C"
        },
        {
          id: "offcenter",
          sol: "11.RI.1.B",
          stem: "According to the passage, what can happen if the clay is off-center?",
          choices: [
            { letter: "A", text: "The wheel may stop spinning partway through." },
            { letter: "B", text: "The walls may rise unevenly and later warp." },
            { letter: "C", text: "The clay may dry out before it can be shaped." },
            { letter: "D", text: "The glaze may slide off the pot in the kiln." }
          ],
          correct: "B"
        },
        {
          id: "elbows",
          sol: "11.RI.2.C",
          stem: "The author includes the detail about elbows in sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "show one way skilled potters keep their hands steady" },
            { letter: "B", text: "warn readers about injuries common among potters" },
            { letter: "C", text: "explain why beginners need many tries to center" },
            { letter: "D", text: "describe the correct height for a potter's wheel" }
          ],
          correct: "A"
        },
        {
          id: "patience",
          sol: "11.RI.2.B",
          stem: "In sentence 7, the contrast between strength and patience mainly emphasizes that centering —",
          choices: [
            { letter: "A", text: "is too difficult for most people to learn" },
            { letter: "B", text: "requires powerful arms and a heavy wheel" },
            { letter: "C", text: "is only taught by very experienced teachers" },
            { letter: "D", text: "depends on steady control more than force" }
          ],
          correct: "D"
        },
        {
          id: "causes",
          sol: "11.RI.2.A",
          stem: "How are sentences 4 and 5 organized?",
          choices: [
            { letter: "A", text: "as a list of tools needed for centering" },
            { letter: "B", text: "as a comparison of two kinds of clay" },
            { letter: "C", text: "as a series of causes and effects" },
            { letter: "D", text: "as a question followed by an answer" }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "11.RI.1.C",
          stem: "The intended audience for \"Finding the Center\" is most likely —",
          choices: [
            { letter: "A", text: "experts who repair broken potter's wheels" },
            { letter: "B", text: "readers new to pottery or curious about it" },
            { letter: "C", text: "store owners who sell finished ceramics" },
            { letter: "D", text: "scientists who study minerals in clay" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 14 · Vocabulary (level 2) · snowstorm ───────────── */
    {
      id: "g11-rv-c89-plowroom",
      family: "G11",
      title: "The Plow Room",
      kind: "Vocabulary · 11.RV",
      blurb: "Forty plows, six hundred miles of road, and one long night in the operations center.",
      level: 2,
      passage:
        "<p>" + N(1) + "At 3 a.m., the city's snow operations room hummed like a beehive. " +
        N(2) + "The lead <strong>dispatcher</strong>, Odalys Ferrer, sent plows to each district by radio, tracking every truck on a wall-sized map. " +
        N(3) + "The storm was <strong>relentless</strong>; it had dropped snow steadily for nine hours without a single pause. " +
        N(4) + "With only forty plows for six hundred miles of road, the crew had to <strong>prioritize</strong>, clearing hospital routes and steep hills first and quiet side streets last. " +
        N(5) + "By dawn, two neighborhoods were <strong>impassable</strong>, with drifts too deep for even an ambulance to get through. " +
        N(6) + "Trucks returned to the salt dome every few hours to <strong>replenish</strong> their loads. " +
        N(7) + "Ferrer kept <strong>meticulous</strong> notes, recording the time, place, and depth of every report so that the next storm would go a little better.</p>",
      claims: [
        {
          id: "relentless",
          sol: "11.RV.1.B",
          stem: "In sentence 3, the explanation after the semicolon shows that relentless means —",
          choices: [
            { letter: "A", text: "growing colder by the hour" },
            { letter: "B", text: "continuing without a break" },
            { letter: "C", text: "arriving without any warning" },
            { letter: "D", text: "falling in large, wet flakes" }
          ],
          correct: "B"
        },
        {
          id: "impassable",
          sol: "11.RV.1.A",
          stem: "The word impassable in sentence 5 combines the prefix im- with the suffix -able. Together, these word parts show that impassable means —",
          choices: [
            { letter: "A", text: "able to be passed with ease" },
            { letter: "B", text: "passed through many times before" },
            { letter: "C", text: "not able to be traveled through" },
            { letter: "D", text: "soon to be cleared by the plows" }
          ],
          correct: "C"
        },
        {
          id: "prioritize",
          sol: "11.RV.1.B",
          stem: "Which detail from sentence 4 best clarifies the meaning of prioritize?",
          choices: [
            { letter: "A", text: "hospital routes and steep hills first" },
            { letter: "B", text: "With only forty plows for six hundred" },
            { letter: "C", text: "six hundred miles of road, the crew" },
            { letter: "D", text: "the crew had to prioritize, clearing" }
          ],
          correct: "A"
        },
        {
          id: "replenish",
          sol: "11.RV.1.A",
          stem: "The word replenish in sentence 6 begins with the prefix re-, as do refill and rebuild. In all three words, the prefix re- signals —",
          choices: [
            { letter: "A", text: "before" },
            { letter: "B", text: "against" },
            { letter: "C", text: "not" },
            { letter: "D", text: "again" }
          ],
          correct: "D"
        },
        {
          id: "meticulous",
          sol: "11.RV.1.C",
          stem: "The word meticulous in sentence 7 suggests that Ferrer's notes are —",
          choices: [
            { letter: "A", text: "careful and exact" },
            { letter: "B", text: "messy and rushed" },
            { letter: "C", text: "brief and private" },
            { letter: "D", text: "old and forgotten" }
          ],
          correct: "A"
        },
        {
          id: "dispatcher",
          sol: "11.RV.1.C",
          stem: "As used in sentence 2, a dispatcher is a person who —",
          choices: [
            { letter: "A", text: "repairs damaged plows in the city garage" },
            { letter: "B", text: "reports the weather on the local news" },
            { letter: "C", text: "drives the largest truck in the fleet" },
            { letter: "D", text: "sends out vehicles and directs their work" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 15 · Vocabulary (level 3) · theme park job ───────────── */
    {
      id: "g11-rv-c89-cyclone",
      family: "G11",
      title: "Before the Gates Open",
      kind: "Vocabulary · 11.RV",
      blurb: "A coaster maintenance crew and the words that keep riders safe.",
      level: 3,
      passage:
        "<p>" + N(1) + "Long before the gates open at Harbor Point Park, a maintenance crew walks every inch of the Cyclone coaster. " +
        N(2) + "Their inspections are <strong>rigorous</strong>: each bolt, wheel, and sensor is checked against a written list, and nothing is signed off from memory. " +
        N(3) + "The coaster's braking system is deliberately <strong>redundant</strong>, with backup brakes that can stop a train even if the main set fails. " +
        N(4) + "Technicians listen for any <strong>anomaly</strong>, such as a click or squeal that was not there the day before, because unusual sounds often signal wear. " +
        N(5) + "To <strong>mitigate</strong> the effects of summer heat on the steel, crews adjust the track in the cool early morning. " +
        N(6) + "Most guests never notice this work, since the crew's trucks park behind <strong>inconspicuous</strong> gray fences. " +
        N(7) + "Still, crew chief Yusuf Demir tells every new hire the same thing: safety checks are not optional; they are <strong>imperative</strong>.</p>",
      claims: [
        {
          id: "redundant",
          sol: "11.RV.1.B",
          stem: "Redundant often means unnecessary. In sentence 3, however, the word describes a system that —",
          choices: [
            { letter: "A", text: "wastes money on parts it never uses" },
            { letter: "B", text: "includes backups in case one part fails" },
            { letter: "C", text: "repeats the same ride several times" },
            { letter: "D", text: "must be replaced every summer season" }
          ],
          correct: "B"
        },
        {
          id: "anomaly",
          sol: "11.RV.1.B",
          stem: "Which phrase from sentence 4 gives an example that best clarifies the meaning of anomaly?",
          choices: [
            { letter: "A", text: "Technicians listen for any" },
            { letter: "B", text: "because unusual sounds often signal wear" },
            { letter: "C", text: "a click or squeal that was not there" },
            { letter: "D", text: "sounds often signal wear" }
          ],
          correct: "C"
        },
        {
          id: "mitigate",
          sol: "11.RV.1.C",
          stem: "In sentence 5, the word mitigate most nearly means —",
          choices: [
            { letter: "A", text: "lessen" },
            { letter: "B", text: "measure" },
            { letter: "C", text: "ignore" },
            { letter: "D", text: "increase" }
          ],
          correct: "A"
        },
        {
          id: "inconspicuous",
          sol: "11.RV.1.A",
          stem: "The word inconspicuous in sentence 6 begins with the prefix in-, as do incomplete and invisible. The prefix in- in these words means —",
          choices: [
            { letter: "A", text: "into" },
            { letter: "B", text: "very" },
            { letter: "C", text: "before" },
            { letter: "D", text: "not" }
          ],
          correct: "D"
        },
        {
          id: "imperative",
          sol: "11.RV.1.C",
          stem: "In sentence 7, Demir contrasts imperative with optional to show that imperative means —",
          choices: [
            { letter: "A", text: "difficult to explain" },
            { letter: "B", text: "absolutely necessary" },
            { letter: "C", text: "recently required" },
            { letter: "D", text: "rarely performed" }
          ],
          correct: "B"
        },
        {
          id: "rigorous",
          sol: "11.RV.1.C",
          stem: "The word rigorous in sentence 2 suggests that the inspections are —",
          choices: [
            { letter: "A", text: "quick and casual" },
            { letter: "B", text: "costly and slow" },
            { letter: "C", text: "strict and exact" },
            { letter: "D", text: "new and untested" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 16 · Vocabulary (level 1) · bus route ───────────── */
    {
      id: "g11-rv-c89-number9",
      family: "G11",
      title: "The Number 9",
      kind: "Vocabulary · 11.RV",
      blurb: "A college student's daily ride, one bolded word at a time.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every weekday, Benedikt Sorensen makes a forty-minute <strong>commute</strong> from his apartment to the community college on the Number 9 bus. " +
        N(2) + "He chose the route because it is <strong>frequent</strong>, with a bus arriving every ten minutes during the morning rush. " +
        N(3) + "At Central Station, he makes a quick <strong>transfer</strong> to the Number 31, which climbs the hill to campus. " +
        N(4) + "The drivers on his route are usually <strong>punctual</strong>, so he can count on reaching his first class on time. " +
        N(5) + "On rainy days, however, the downtown streets become <strong>congested</strong>, and traffic barely creeps along. " +
        N(6) + "Benedikt pays his <strong>fare</strong> with a student card that costs half the regular price. " +
        N(7) + "He uses the slow minutes in traffic to review his biology notes, which he jokes is the only reason he passed the midterm.</p>",
      claims: [
        {
          id: "commute",
          sol: "11.RV.1.B",
          stem: "In sentence 1, the word commute most nearly means —",
          choices: [
            { letter: "A", text: "a long trip taken on vacation" },
            { letter: "B", text: "a ride shared with a friend" },
            { letter: "C", text: "a regular trip to work or school" },
            { letter: "D", text: "a walk across a college campus" }
          ],
          correct: "C"
        },
        {
          id: "frequent",
          sol: "11.RV.1.B",
          stem: "In sentence 2, the details after the comma show that frequent means —",
          choices: [
            { letter: "A", text: "happening often" },
            { letter: "B", text: "packed with riders" },
            { letter: "C", text: "low in price" },
            { letter: "D", text: "recently built" }
          ],
          correct: "A"
        },
        {
          id: "transfer",
          sol: "11.RV.1.A",
          stem: "The word transfer in sentence 3 begins with the prefix trans-, as in transport and transplant. The prefix trans- means —",
          choices: [
            { letter: "A", text: "under" },
            { letter: "B", text: "across" },
            { letter: "C", text: "again" },
            { letter: "D", text: "before" }
          ],
          correct: "B"
        },
        {
          id: "punctual",
          sol: "11.RV.1.A",
          stem: "Punctual comes from a Latin root meaning point, the same root found in punctuation. This connection suggests that a punctual driver arrives —",
          choices: [
            { letter: "A", text: "at the exact time expected" },
            { letter: "B", text: "at the farthest point on the route" },
            { letter: "C", text: "with a sharp, pointed manner" },
            { letter: "D", text: "after stopping at every point" }
          ],
          correct: "A"
        },
        {
          id: "congested",
          sol: "11.RV.1.C",
          stem: "Based on sentence 5, congested streets are —",
          choices: [
            { letter: "A", text: "wet and slippery" },
            { letter: "B", text: "closed for repairs" },
            { letter: "C", text: "quiet and empty" },
            { letter: "D", text: "crowded and slow" }
          ],
          correct: "D"
        },
        {
          id: "fare",
          sol: "11.RV.1.C",
          stem: "In sentence 6, the word fare refers to —",
          choices: [
            { letter: "A", text: "the food served on campus" },
            { letter: "B", text: "the student's class schedule" },
            { letter: "C", text: "the price of riding the bus" },
            { letter: "D", text: "the distance of the trip" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 17 · Vocabulary (level 2) · pottery ───────────── */
    {
      id: "g11-rv-c89-clayterms",
      family: "G11",
      title: "Clay Changes Its Mind",
      kind: "Vocabulary · 11.RV",
      blurb: "From soft lump to glowing porcelain, the words a potter needs.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every <strong>artisan</strong> at the Riverbend Clay Collective learns early that clay changes its personality at each stage. " +
        N(2) + "Fresh from the bag, it is <strong>malleable</strong>, bending and stretching under the lightest pressure of a thumb. " +
        N(3) + "Left to dry on a shelf, the same clay becomes <strong>brittle</strong>, so fragile that a careless bump can snap a handle clean off. " +
        N(4) + "After its first firing, the pot is hard but still <strong>porous</strong>, full of tiny holes that soak up water like a sponge. " +
        N(5) + "A coat of glaze, melted in a second firing, seals those holes and makes the surface <strong>impermeable</strong>. " +
        N(6) + "Some fine porcelain pieces are fired so thin that they become <strong>translucent</strong>, letting a soft glow of lamplight pass through their walls. " +
        N(7) + "Instructor Pilar Ortega likes to say that knowing these words is half of knowing clay.</p>",
      claims: [
        {
          id: "malleable",
          sol: "11.RV.1.B",
          stem: "In sentence 2, the word malleable most nearly means —",
          choices: [
            { letter: "A", text: "heavy and dense" },
            { letter: "B", text: "sticky and wet" },
            { letter: "C", text: "easily shaped" },
            { letter: "D", text: "freshly mixed" }
          ],
          correct: "C"
        },
        {
          id: "porous",
          sol: "11.RV.1.B",
          stem: "Which detail from sentence 4 best clarifies the meaning of porous?",
          choices: [
            { letter: "A", text: "After its first firing, the pot" },
            { letter: "B", text: "full of tiny holes that soak up water" },
            { letter: "C", text: "the pot is hard but still" },
            { letter: "D", text: "After its first firing, the pot is hard" }
          ],
          correct: "B"
        },
        {
          id: "impermeable",
          sol: "11.RV.1.A",
          stem: "Impermeable (sentence 5) is formed by adding the prefix im- to permeable, which means able to be passed through by liquid. Impermeable therefore means —",
          choices: [
            { letter: "A", text: "able to be passed through again" },
            { letter: "B", text: "partly filled with liquid" },
            { letter: "C", text: "able to absorb more water" },
            { letter: "D", text: "not letting liquid pass through" }
          ],
          correct: "D"
        },
        {
          id: "pair",
          sol: "11.RV.1.C",
          stem: "How are the words malleable (sentence 2) and brittle (sentence 3) related?",
          choices: [
            { letter: "A", text: "They describe opposite reactions to pressure." },
            { letter: "B", text: "They both describe clay after a second firing." },
            { letter: "C", text: "They both name tools used to shape a pot." },
            { letter: "D", text: "They describe the same quality in two clays." }
          ],
          correct: "A"
        },
        {
          id: "translucent",
          sol: "11.RV.1.C",
          stem: "Based on sentence 6, a translucent piece of porcelain —",
          choices: [
            { letter: "A", text: "glows because it has been painted" },
            { letter: "B", text: "allows some light to shine through it" },
            { letter: "C", text: "breaks if it is placed near a lamp" },
            { letter: "D", text: "blocks all light from passing through" }
          ],
          correct: "B"
        },
        {
          id: "artisan",
          sol: "11.RV.1.A",
          stem: "Artisan (sentence 1) shares a root with art and artist. Based on this root and the passage, an artisan is —",
          choices: [
            { letter: "A", text: "a skilled worker who makes things by hand" },
            { letter: "B", text: "a person who sells paintings in a gallery" },
            { letter: "C", text: "a student who has never touched clay" },
            { letter: "D", text: "a scientist who studies ancient pottery" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 18 · Paired texts (level 2) · bus route ───────────── */
    {
      id: "g11-dsr-c89-lindenstop",
      family: "G11",
      title: "The Linden Avenue Stop",
      kind: "Paired texts · 11.DSR",
      blurb: "A transit notice proposes cutting a stop; a longtime rider answers.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Route 5 Stop Consolidation Notice</strong></p>" +
        "<p>" + N(1) + "To improve travel times on Route 5, the Transit Authority proposes removing the Linden Avenue stop beginning March 1. " +
        N(2) + "Linden sits only 600 feet from the Birch Street stop, and each stop adds about thirty seconds to a trip. " +
        N(3) + "Combined with two other changes, the removal is expected to save riders nearly four minutes per round trip. " +
        N(4) + "Riders may comment on the proposal at a public meeting on February 10 at the downtown library.</p>" +
        "<p><strong>Text 2 — Letter from a Route 5 Rider</strong></p>" +
        "<p>" + N(5) + "I have boarded at Linden Avenue for eleven years. " +
        N(6) + "The Authority's notice says Birch Street is \"only 600 feet\" away, but those 600 feet climb a steep hill with no sidewalk on one side. " +
        N(7) + "For my neighbors who use walkers, that hill is the difference between taking the bus and staying home. " +
        N(8) + "Saving four minutes for some riders should not cost other riders the entire trip. " +
        N(9) + "I will be at the February meeting. (Halima Yusuf)</p>",
      claims: [
        {
          id: "fact",
          sol: "11.DSR.D",
          stem: "Which fact about the Linden Avenue stop appears in both texts?",
          choices: [
            { letter: "A", text: "It has been used by one rider for eleven years." },
            { letter: "B", text: "It sits at the very top of a steep hill." },
            { letter: "C", text: "It is 600 feet from the Birch Street stop." },
            { letter: "D", text: "It will close for good on February 10." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "Which statement best describes how the two texts about Route 5 differ?",
          choices: [
            { letter: "A", text: "Text 1 stresses saved time; Text 2 stresses riders' access." },
            { letter: "B", text: "Text 1 opposes the change; Text 2 supports the change." },
            { letter: "C", text: "Text 1 uses personal stories; Text 2 uses only statistics." },
            { letter: "D", text: "Text 1 addresses drivers; Text 2 addresses city planners." }
          ],
          correct: "A"
        },
        {
          id: "challenge",
          sol: "11.DSR.E",
          stem: "Which sentence from Text 1 does the writer of Text 2 most directly challenge?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "11.DSR.E",
          stem: "Select TWO sentences that together best support Halima Yusuf's claim that the change would hurt some riders.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "audience",
          sol: "11.RI.1.C",
          stem: "The intended audience for Text 1 is most likely —",
          choices: [
            { letter: "A", text: "bus drivers learning a new route" },
            { letter: "B", text: "people who ride Route 5" },
            { letter: "C", text: "city workers who repair sidewalks" },
            { letter: "D", text: "tourists visiting the library" }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "11.DSR.E",
          stem: "A transit official who read both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the Linden stop is rarely used by anyone" },
            { letter: "B", text: "the hill makes the four-minute estimate wrong" },
            { letter: "C", text: "riders do not care about faster travel times" },
            { letter: "D", text: "time saved must be weighed against lost access" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 19 · Paired texts (level 1) · theme park job ───────────── */
    {
      id: "g11-dsr-c89-sunfield",
      family: "G11",
      title: "Ride Operator Wanted",
      kind: "Paired texts · 11.DSR",
      blurb: "A job posting promises a fun summer; a first-week journal tells the rest.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Job Posting: Seasonal Ride Operator</strong></p>" +
        "<p>" + N(1) + "Sunfield Park is hiring ride operators for the summer season. " +
        N(2) + "Operators load guests, check safety restraints, and run rides according to posted procedures. " +
        N(3) + "Applicants must be sixteen or older, able to stand for long shifts, and comfortable working outdoors in all weather. " +
        N(4) + "Benefits include free park admission, flexible scheduling, and a fun, fast-paced team environment. " +
        N(5) + "Apply online by May 1.</p>" +
        "<p><strong>Text 2 — From Diego's Journal</strong></p>" +
        "<p>" + N(6) + "Week one is done, and my feet have filed a formal complaint. " +
        N(7) + "The posting said \"all weather,\" and on Thursday that meant three hours of rain in a plastic poncho. " +
        N(8) + "Checking restraints is serious work; I tug every lap bar twice, even when the line groans. " +
        N(9) + "Still, when a kid stepped off the Comet and yelled \"Again!\" I understood why people come back every summer.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          stem: "Which idea about the ride operator job is supported by both texts?",
          choices: [
            { letter: "A", text: "The job pays more than most summer work." },
            { letter: "B", text: "The job can mean working in bad weather." },
            { letter: "C", text: "The job is mostly done indoors." },
            { letter: "D", text: "The job is open to anyone of any age." }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "11.DSR.E",
          stem: "Compared with the job posting, Diego's journal sounds more —",
          choices: [
            { letter: "A", text: "personal and playful" },
            { letter: "B", text: "formal and official" },
            { letter: "C", text: "angry and bitter" },
            { letter: "D", text: "fearful and nervous" }
          ],
          correct: "A"
        },
        {
          id: "weather",
          sol: "11.DSR.E",
          stem: "Which sentence from Text 2 shows what \"comfortable working outdoors in all weather\" (sentence 3) means in practice?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "feet",
          sol: "11.RL.2.B",
          stem: "In sentence 6, the statement that Diego's feet \"have filed a formal complaint\" is an example of —",
          choices: [
            { letter: "A", text: "understatement" },
            { letter: "B", text: "an allusion" },
            { letter: "C", text: "personification" },
            { letter: "D", text: "dramatic irony" }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          stem: "How do the two texts about Sunfield Park mainly differ?",
          choices: [
            { letter: "A", text: "Text 1 lists duties; Text 2 shows what doing them is like." },
            { letter: "B", text: "Text 1 warns workers; Text 2 tries to recruit them." },
            { letter: "C", text: "Text 1 describes one ride; Text 2 describes the whole park." },
            { letter: "D", text: "Text 1 is written by a guest; Text 2 is written by a manager." }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "11.RI.1.C",
          stem: "The main purpose of Text 1 is to —",
          choices: [
            { letter: "A", text: "explain how the park's rides work" },
            { letter: "B", text: "warn guests about weather delays" },
            { letter: "C", text: "describe a worker's first week" },
            { letter: "D", text: "attract and inform job applicants" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 20 · Paired texts (level 3) · pottery ───────────── */
    {
      id: "g11-dsr-c89-wheelone",
      family: "G11",
      title: "Wheel Throwing I",
      kind: "Paired texts · 11.DSR",
      blurb: "A course listing promises four bowls; a student's review counts two.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Course Listing, Kestrel Street Studio</strong></p>" +
        "<p>" + N(1) + "Wheel Throwing I welcomes complete beginners. " +
        N(2) + "Over six Thursday evenings, students learn to wedge, center, throw, trim, and glaze. " +
        N(3) + "No experience is needed, and every student will leave with a finished set of four bowls. " +
        N(4) + "Clay, glazes, and firing fees are included in the price. " +
        N(5) + "Class size is limited to eight so that each student receives individual attention from the instructor.</p>" +
        "<p><strong>Text 2 — A Student's Review</strong></p>" +
        "<p>" + N(6) + "I signed up for Wheel Throwing I expecting the promised set of four bowls; I went home with two, and one of them leans. " +
        N(7) + "That gap, though, is my only complaint. " +
        N(8) + "The instructor watched each of us closely, which the small class made possible, and she never let anyone leave frustrated. " +
        N(9) + "The listing sells a product, but what the class actually delivers is a skill that will outlast any bowl.</p>",
      claims: [
        {
          id: "confirm",
          sol: "11.DSR.D",
          stem: "Which claim from Text 1 does the review in Text 2 confirm?",
          choices: [
            { letter: "A", text: "Every student leaves with four finished bowls." },
            { letter: "B", text: "Students learn to glaze in the first evening." },
            { letter: "C", text: "The small class allows individual attention." },
            { letter: "D", text: "Firing fees are included in the price." }
          ],
          correct: "C"
        },
        {
          id: "challenge",
          sol: "11.DSR.E",
          stem: "Which sentence from the course listing does the reviewer most directly challenge?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 1" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "A"
        },
        {
          id: "value",
          sol: "11.DSR.D",
          stem: "The two texts differ mainly in what each one treats as the value of the class. Which statement best describes this difference?",
          choices: [
            { letter: "A", text: "Text 1 values low cost; Text 2 values a short schedule." },
            { letter: "B", text: "Text 1 values objects made; Text 2 values skill gained." },
            { letter: "C", text: "Text 1 values the teacher; Text 2 values the studio space." },
            { letter: "D", text: "Text 1 values speed; Text 2 values perfect results." }
          ],
          correct: "B"
        },
        {
          id: "product",
          sol: "11.RI.2.B",
          stem: "In sentence 9, the contrast between \"a product\" and \"a skill\" mainly serves to —",
          choices: [
            { letter: "A", text: "demand that the studio refund part of the price" },
            { letter: "B", text: "suggest the class should be longer than six weeks" },
            { letter: "C", text: "criticize the instructor for poor planning" },
            { letter: "D", text: "reframe what makes the class worth taking" }
          ],
          correct: "D"
        },
        {
          id: "gap",
          sol: "11.DSR.E",
          stem: "Select TWO sentences that together show the gap between what the listing promised and what the reviewer received.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "overall",
          sol: "11.DSR.E",
          stem: "A reader deciding whether to take the class could best conclude from both texts that —",
          choices: [
            { letter: "A", text: "the class teaches well even if it makes fewer bowls" },
            { letter: "B", text: "the class is too difficult for true beginners" },
            { letter: "C", text: "the listing gives no useful information at all" },
            { letter: "D", text: "the reviewer plans to ask for her money back" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 21 · Paired texts (level 3) · snowstorm ───────────── */
    {
      id: "g11-dsr-c89-snowdays",
      family: "G11",
      title: "What a Snow Day Is For",
      kind: "Paired texts · 11.DSR",
      blurb: "A district replaces snow days with remote lessons; a student editor pushes back.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Announcement from Pinecrest County Schools</strong></p>" +
        "<p>" + N(1) + "Beginning this winter, Pinecrest County Schools will replace traditional snow days with remote learning days. " +
        N(2) + "When roads are unsafe, students will log in from home for a shortened schedule of live lessons. " +
        N(3) + "This change allows the district to avoid adding make-up days in June, when attendance is typically low. " +
        N(4) + "Families without home internet access may borrow a wireless hotspot from their school library.</p>" +
        "<p><strong>Text 2 — Student Editorial, The Pinecrest Ledger</strong></p>" +
        "<p>" + N(5) + "The district calls remote snow days efficient, and on paper they are. " +
        N(6) + "But a snow day was never only a missing day of school; it was a rare pause that a whole community took at once. " +
        N(7) + "Siblings sledded together, neighbors shoveled each other's walks, and nobody checked a screen. " +
        N(8) + "June make-up days may be inconvenient, yet some losses are not measured on a calendar.</p>",
      claims: [
        {
          id: "central",
          sol: "11.DSR.D",
          stem: "Which idea is central to both texts about Pinecrest County Schools?",
          choices: [
            { letter: "A", text: "how to keep students safe on icy roads" },
            { letter: "B", text: "what should happen on days with dangerous snow" },
            { letter: "C", text: "why attendance drops in the month of June" },
            { letter: "D", text: "how families can get internet access at home" }
          ],
          correct: "B"
        },
        {
          id: "paper",
          sol: "11.DSR.E",
          stem: "In Text 2, the phrase \"and on paper they are\" (sentence 5) is best read as —",
          choices: [
            { letter: "A", text: "a complaint about how much paper schools waste" },
            { letter: "B", text: "a sign that the writer fully agrees with the district" },
            { letter: "C", text: "a concession made before the writer disagrees" },
            { letter: "D", text: "a joke about the district's written announcement" }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          stem: "Which statement best describes how the two texts differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 announces a policy; Text 2 questions its value." },
            { letter: "B", text: "Text 1 argues for snow days; Text 2 argues against them." },
            { letter: "C", text: "Text 1 tells a story; Text 2 explains a procedure." },
            { letter: "D", text: "Text 1 asks for opinions; Text 2 reports test scores." }
          ],
          correct: "A"
        },
        {
          id: "respond",
          sol: "11.DSR.E",
          stem: "Sentence 8 of the editorial responds most directly to which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 3" }
          ],
          correct: "D"
        },
        {
          id: "hotspot",
          sol: "11.RI.2.C",
          stem: "The district most likely includes sentence 4 in its announcement in order to —",
          choices: [
            { letter: "A", text: "address a concern about fair access" },
            { letter: "B", text: "encourage students to visit the library" },
            { letter: "C", text: "explain why June attendance is low" },
            { letter: "D", text: "show that snow days will continue" }
          ],
          correct: "A"
        },
        {
          id: "pause",
          sol: "11.RI.2.B",
          stem: "In sentence 6, the writer describes a snow day as \"a rare pause that a whole community took at once\" mainly to —",
          choices: [
            { letter: "A", text: "prove that remote lessons are too short" },
            { letter: "B", text: "stress a shared value beyond school itself" },
            { letter: "C", text: "suggest that storms are becoming less common" },
            { letter: "D", text: "argue that neighbors should shovel more often" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 22 · Poetry (level 2) · snowstorm ───────────── */
    {
      id: "g11-rl-c89-kettleroad",
      family: "G11",
      title: "First Snow on Kettle Road",
      kind: "Poetry · 11.RL",
      blurb: "A night of snow, a buried mailbox, and a small brother at the window.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "All night the snow kept its quiet promise,<br>" +
        L(2) + "filling the ruts of Kettle Road<br>" +
        L(3) + "the way a teacher wipes a crowded board.<br>" +
        L(4) + "By morning the fences wore white collars,<br>" +
        L(5) + "and the mailbox stood buried to its chin.<br>" +
        L(6) + "No school bus groaned up the hill;<br>" +
        L(7) + "no one owed the world anything yet.<br>" +
        L(8) + "My little brother pressed his face to the glass<br>" +
        L(9) + "and whispered, as if the snow could hear,<br>" +
        L(10) + "\"Don't stop. Don't stop.\"</p>",
      claims: [
        {
          id: "board",
          sol: "11.RL.2.A",
          stem: "In line 3, comparing the snow to a teacher wiping a crowded board suggests that the snow —",
          choices: [
            { letter: "A", text: "makes the road look clean, blank, and new" },
            { letter: "B", text: "teaches the family a lesson about winter" },
            { letter: "C", text: "falls in neat rows across the road" },
            { letter: "D", text: "will melt as quickly as it arrived" }
          ],
          correct: "A"
        },
        {
          id: "collars",
          sol: "11.RL.2.B",
          stem: "Lines 4 and 5, in which fences wear collars and a mailbox has a chin, are examples of —",
          choices: [
            { letter: "A", text: "onomatopoeia" },
            { letter: "B", text: "dramatic irony" },
            { letter: "C", text: "alliteration" },
            { letter: "D", text: "personification" }
          ],
          correct: "D"
        },
        {
          id: "promise",
          sol: "11.RL.2.C",
          stem: "In line 1, the phrase \"kept its quiet promise\" suggests that the snow —",
          choices: [
            { letter: "A", text: "stopped before anyone woke up" },
            { letter: "B", text: "fell steadily, as people had hoped" },
            { letter: "C", text: "made a loud sound against the roof" },
            { letter: "D", text: "surprised everyone by arriving early" }
          ],
          correct: "B"
        },
        {
          id: "owed",
          sol: "11.RL.1.B",
          stem: "Line 7 implies that on this morning the family —",
          choices: [
            { letter: "A", text: "has forgotten to pay an important bill" },
            { letter: "B", text: "must hurry to finish its outdoor chores" },
            { letter: "C", text: "is free, for now, from usual obligations" },
            { letter: "D", text: "feels guilty about missing a day of work" }
          ],
          correct: "C"
        },
        {
          id: "brother",
          sol: "11.RL.1.C",
          stem: "The brother's whisper in lines 9–10 reveals that he —",
          choices: [
            { letter: "A", text: "is frightened by the size of the drifts" },
            { letter: "B", text: "wants the snow day to go on and on" },
            { letter: "C", text: "is trying to keep the speaker asleep" },
            { letter: "D", text: "believes the snow is about to stop" }
          ],
          correct: "B"
        },
        {
          id: "central",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses the central idea of \"First Snow on Kettle Road\"?",
          choices: [
            { letter: "A", text: "Snowstorms make rural roads dangerous to travel." },
            { letter: "B", text: "Children often fear storms more than adults do." },
            { letter: "C", text: "A long winter can make a family feel trapped." },
            { letter: "D", text: "A snowfall can bring a welcome pause from routine." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 23 · Poetry (level 3) · pottery ───────────── */
    {
      id: "g11-rl-c89-mendedbowl",
      family: "G11",
      title: "The Mended Bowl",
      kind: "Poetry · 11.RL",
      blurb: "A grandmother repairs a broken bowl with glue and gold paint.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My grandmother's bowl came home in pieces<br>" +
        L(2) + "from a move that took more than furniture.<br>" +
        L(3) + "She did not throw it out. She sat at the table<br>" +
        L(4) + "with glue and a little jar of gold paint<br>" +
        L(5) + "and traced each crack as if reading a map<br>" +
        L(6) + "of everywhere the bowl had been.<br>" +
        L(7) + "Now it holds nothing but light on the windowsill,<br>" +
        L(8) + "its scars the brightest part of it,<br>" +
        L(9) + "and I have stopped wishing it whole.</p>",
      claims: [
        {
          id: "move",
          sol: "11.RL.1.B",
          stem: "Line 2 most nearly suggests that the move —",
          choices: [
            { letter: "A", text: "cost the family more than just objects" },
            { letter: "B", text: "required a larger truck than expected" },
            { letter: "C", text: "was the first move the family had made" },
            { letter: "D", text: "gave the grandmother a chance to shop" }
          ],
          correct: "A"
        },
        {
          id: "map",
          sol: "11.RL.2.B",
          stem: "The simile in line 5 comparing the cracks to a map mainly emphasizes that the cracks —",
          choices: [
            { letter: "A", text: "make the bowl too weak to use again" },
            { letter: "B", text: "show the grandmother where to buy paint" },
            { letter: "C", text: "record the history the bowl has lived" },
            { letter: "D", text: "form a pattern that is hard to follow" }
          ],
          correct: "C"
        },
        {
          id: "symbol",
          sol: "11.RL.2.A",
          stem: "The mended bowl most clearly symbolizes —",
          choices: [
            { letter: "A", text: "the high cost of moving to a new home" },
            { letter: "B", text: "something damaged that gains meaning through care" },
            { letter: "C", text: "the grandmother's wish to sell her belongings" },
            { letter: "D", text: "the speaker's dislike of old-fashioned objects" }
          ],
          correct: "B"
        },
        {
          id: "scars",
          sol: "11.RL.2.C",
          stem: "In line 8, the word scars suggests that the repaired cracks are —",
          choices: [
            { letter: "A", text: "painful reminders best kept hidden" },
            { letter: "B", text: "fresh damage that is still spreading" },
            { letter: "C", text: "small flaws that no one can see" },
            { letter: "D", text: "marks of past harm now worth showing" }
          ],
          correct: "D"
        },
        {
          id: "lastline",
          sol: "11.RL.3.A",
          stem: "How does the final line shape the meaning of \"The Mended Bowl\"?",
          choices: [
            { letter: "A", text: "It shows the speaker hoping to replace the bowl." },
            { letter: "B", text: "It reveals that the bowl has broken a second time." },
            { letter: "C", text: "It marks the speaker's shift toward acceptance." },
            { letter: "D", text: "It suggests the grandmother regrets the repair." }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme does \"The Mended Bowl\" most clearly develop?",
          choices: [
            { letter: "A", text: "Damage that is honored can become a kind of beauty." },
            { letter: "B", text: "Fragile objects should be packed with extra care." },
            { letter: "C", text: "Grandparents value objects more than people do." },
            { letter: "D", text: "Moving to a new home is always a happy change." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 24 · Poetry (level 1) · bus route ───────────── */
    {
      id: "g11-rl-c89-lastbus",
      family: "G11",
      title: "Last Bus Home",
      kind: "Poetry · 11.RL",
      blurb: "A nurse, a boy counting coins, and a driver humming on the late-night route.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The last bus home is mostly empty,<br>" +
        L(2) + "a lit room rolling through the dark.<br>" +
        L(3) + "The driver hums a song with no words.<br>" +
        L(4) + "A nurse in blue scrubs falls asleep<br>" +
        L(5) + "with her bag held tight against her chest.<br>" +
        L(6) + "A boy counts coins for tomorrow's fare.<br>" +
        L(7) + "Outside, the closed shops slide past like pages.<br>" +
        L(8) + "Inside, we are strangers sharing one small light,<br>" +
        L(9) + "each of us carried home by someone<br>" +
        L(10) + "whose name we will never know.</p>",
      claims: [
        {
          id: "litroom",
          sol: "11.RL.2.A",
          stem: "In line 2, the metaphor \"a lit room rolling through the dark\" presents the bus as —",
          choices: [
            { letter: "A", text: "a crowded and noisy place" },
            { letter: "B", text: "a bright, moving shelter" },
            { letter: "C", text: "a dangerous way to travel" },
            { letter: "D", text: "an old and broken vehicle" }
          ],
          correct: "B"
        },
        {
          id: "pages",
          sol: "11.RL.2.B",
          stem: "The simile in line 7 comparing the shops to pages mainly emphasizes —",
          choices: [
            { letter: "A", text: "how the scene outside flips steadily by" },
            { letter: "B", text: "how many books the shops have for sale" },
            { letter: "C", text: "how bright the shop windows are at night" },
            { letter: "D", text: "how the boy is reading during the ride" }
          ],
          correct: "A"
        },
        {
          id: "riders",
          sol: "11.RL.1.B",
          stem: "The details about the nurse and the boy in lines 4–6 mainly show that the riders are —",
          choices: [
            { letter: "A", text: "friends on their way to the same party" },
            { letter: "B", text: "tourists unsure of where to get off" },
            { letter: "C", text: "ordinary people at the end of long days" },
            { letter: "D", text: "students heading home from a late class" }
          ],
          correct: "C"
        },
        {
          id: "central",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses the central idea of \"Last Bus Home\"?",
          choices: [
            { letter: "A", text: "Late-night buses should run more often." },
            { letter: "B", text: "Bus drivers deserve higher pay and praise." },
            { letter: "C", text: "Riding alone at night can feel frightening." },
            { letter: "D", text: "Strangers share quiet care in small moments." }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "11.RL.3.A",
          stem: "How do lines 8–10 differ from lines 1–7 of \"Last Bus Home\"?",
          choices: [
            { letter: "A", text: "They move from describing riders to reflecting on them." },
            { letter: "B", text: "They switch from the present to a memory of childhood." },
            { letter: "C", text: "They change from the speaker's voice to the driver's." },
            { letter: "D", text: "They shift from a calm mood to a frightened one." }
          ],
          correct: "A"
        },
        {
          id: "carried",
          sol: "11.RL.2.C",
          stem: "In line 9, the word carried suggests that the riders are —",
          choices: [
            { letter: "A", text: "too tired to walk off the bus" },
            { letter: "B", text: "looked after by the driver" },
            { letter: "C", text: "holding heavy bags on their laps" },
            { letter: "D", text: "lost on an unfamiliar route" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 25 · Drama (level 2) · theme park job ───────────── */
    {
      id: "g11-rl-c89-breakroom",
      family: "G11",
      title: "Break Room, Two O'Clock",
      kind: "Drama · 11.RL",
      blurb: "A shift lead talks a new ride operator through his first angry guest.",
      level: 2,
      passage:
        "<p><em>A theme park break room. TOMÁS, seventeen, drops into a plastic chair. PRIYANKA, his shift lead, is eating an orange.</em></p>" +
        "<p>" + N(1) + "<strong>TOMÁS</strong>: A man yelled at me for ten minutes because the Comet closed for wind. " +
        N(2) + "<strong>PRIYANKA</strong>: Did you close it? " +
        N(3) + "<strong>TOMÁS</strong>: The wind sensor closed it. I just said the words. " +
        N(4) + "<strong>PRIYANKA</strong>: Then he was yelling at the weather. You were just standing closest. " +
        N(5) + "<strong>TOMÁS</strong>: It didn't feel like he was yelling at the weather. " +
        N(6) + "<strong>PRIYANKA</strong> <em>(handing him half the orange)</em>: It never does. My first summer, I cried in the costume closet twice. " +
        N(7) + "<strong>TOMÁS</strong>: When does it stop feeling personal? " +
        N(8) + "<strong>PRIYANKA</strong>: It doesn't, entirely. You just get faster at handing it back. <em>(She taps the clock.)</em> Break's over in four minutes. The Comet reopens at two. " +
        N(9) + "<em>(TOMÁS stands, straightens his name tag, and heads for the door.)</em></p>",
      claims: [
        {
          id: "priyanka",
          sol: "11.RL.1.C",
          stem: "Based on the scene, Priyanka is best described as —",
          choices: [
            { letter: "A", text: "impatient and dismissive" },
            { letter: "B", text: "supportive and practical" },
            { letter: "C", text: "nervous and uncertain" },
            { letter: "D", text: "strict and unfriendly" }
          ],
          correct: "B"
        },
        {
          id: "weather",
          sol: "11.RL.2.B",
          stem: "Priyanka's line in sentence 4 about the man \"yelling at the weather\" creates a tone that is —",
          choices: [
            { letter: "A", text: "dryly humorous" },
            { letter: "B", text: "deeply bitter" },
            { letter: "C", text: "coldly formal" },
            { letter: "D", text: "openly angry" }
          ],
          correct: "A"
        },
        {
          id: "nametag",
          sol: "11.RL.1.B",
          stem: "The stage direction in sentence 9 suggests that Tomás —",
          choices: [
            { letter: "A", text: "plans to quit at the end of the day" },
            { letter: "B", text: "is still too upset to talk to anyone" },
            { letter: "C", text: "is ready to return to work" },
            { letter: "D", text: "wants to find the angry guest" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which theme is best supported by the conversation between Tomás and Priyanka?",
          choices: [
            { letter: "A", text: "Customers are usually right when they complain." },
            { letter: "B", text: "Safety rules make theme park work dull." },
            { letter: "C", text: "New workers should hide their feelings from bosses." },
            { letter: "D", text: "Others' anger need not define how we see ourselves." }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "11.RL.3.A",
          stem: "The scene is structured primarily around —",
          choices: [
            { letter: "A", text: "a talk that moves Tomás from upset to ready" },
            { letter: "B", text: "an argument that ends with Tomás being fired" },
            { letter: "C", text: "a flashback to the guest's complaint at the ride" },
            { letter: "D", text: "a contest between two workers for a promotion" }
          ],
          correct: "A"
        },
        {
          id: "handing",
          sol: "11.RL.2.C",
          stem: "In sentence 8, the phrase \"handing it back\" most nearly means —",
          choices: [
            { letter: "A", text: "returning lost items to guests" },
            { letter: "B", text: "giving the orange back to Priyanka" },
            { letter: "C", text: "letting go of anger that isn't yours" },
            { letter: "D", text: "reporting problems to a manager" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 26 · Drama (level 3) · bus route ───────────── */
    {
      id: "g11-rl-c89-depot",
      family: "G11",
      title: "Shift Change at the Depot",
      kind: "Drama · 11.RL",
      blurb: "A retiring driver hands her route, and a folded paper, to the driver taking over.",
      level: 3,
      passage:
        "<p><em>The Eastside bus depot, 5:40 a.m. MARGUERITE, a driver on her last day before retirement, hands a folded paper to ADE, who takes over her route tomorrow.</em></p>" +
        "<p>" + N(1) + "<strong>MARGUERITE</strong>: That's the route. " +
        N(2) + "<strong>ADE</strong>: I have the route. It's on the tablet, every stop, every minute. " +
        N(3) + "<strong>MARGUERITE</strong>: The tablet has the stops. That paper has the people. " +
        N(4) + "<strong>ADE</strong> <em>(unfolding it and reading)</em>: \"Mrs. Ilunga, Cedar and Third, needs the ramp, never asks.\" \"Twins at Market Street, always late, wait thirty seconds.\" " +
        N(5) + "<strong>MARGUERITE</strong>: Forty, if it's raining. " +
        N(6) + "<strong>ADE</strong>: Dispatch says I'm not supposed to wait. " +
        N(7) + "<strong>MARGUERITE</strong>: Dispatch has never seen those twins run. " +
        N(8) + "<em>(ADE folds the paper carefully and slides it into his shirt pocket instead of his bag.)</em> " +
        N(9) + "<strong>ADE</strong>: I'll learn them. " +
        N(10) + "<strong>MARGUERITE</strong>: You will. And someday you'll write one of your own.</p>",
      claims: [
        {
          id: "paper",
          sol: "11.RL.2.A",
          stem: "The folded paper Marguerite gives Ade most clearly symbolizes —",
          choices: [
            { letter: "A", text: "the official rules set by dispatch" },
            { letter: "B", text: "knowledge of riders earned through care" },
            { letter: "C", text: "Marguerite's wish to keep driving" },
            { letter: "D", text: "the schedule printed for new drivers" }
          ],
          correct: "B"
        },
        {
          id: "tablet",
          sol: "11.RL.1.C",
          stem: "Ade's line in sentence 2 reveals that at first he —",
          choices: [
            { letter: "A", text: "believes the official data covers everything" },
            { letter: "B", text: "is nervous about driving the route alone" },
            { letter: "C", text: "wants Marguerite to delay her retirement" },
            { letter: "D", text: "has already met the riders on the paper" }
          ],
          correct: "A"
        },
        {
          id: "pocket",
          sol: "11.RL.1.B",
          stem: "Ade's choice in sentence 8 to put the paper in his shirt pocket rather than his bag suggests that he —",
          choices: [
            { letter: "A", text: "plans to throw the paper away later" },
            { letter: "B", text: "is hiding the paper from dispatch" },
            { letter: "C", text: "has run out of room in his bag" },
            { letter: "D", text: "now treats the paper as valuable" }
          ],
          correct: "D"
        },
        {
          id: "twins",
          sol: "11.RL.2.B",
          stem: "Marguerite's reply in sentence 7, \"Dispatch has never seen those twins run,\" creates a tone that is —",
          choices: [
            { letter: "A", text: "sharp and resentful" },
            { letter: "B", text: "anxious and doubtful" },
            { letter: "C", text: "wry and affectionate" },
            { letter: "D", text: "formal and distant" }
          ],
          correct: "C"
        },
        {
          id: "final",
          sol: "11.RL.3.A",
          stem: "Marguerite's final line resolves the scene by suggesting that —",
          choices: [
            { letter: "A", text: "Ade will soon be promoted to dispatch" },
            { letter: "B", text: "Marguerite plans to return to driving" },
            { letter: "C", text: "Ade will carry on her habit of care" },
            { letter: "D", text: "the tablet will replace written notes" }
          ],
          correct: "C"
        },
        {
          id: "never",
          sol: "11.RL.2.C",
          stem: "In sentence 4, the note that Mrs. Ilunga \"never asks\" for the ramp suggests that the driver must —",
          choices: [
            { letter: "A", text: "notice a rider's needs without being told" },
            { letter: "B", text: "remind riders to request help in advance" },
            { letter: "C", text: "skip the stop when no one is waiting" },
            { letter: "D", text: "report the broken ramp to the depot" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 27 · Functional text (level 1) · bus route ───────────── */
    {
      id: "g11-ri-c89-detour",
      family: "G11",
      title: "Route 12 Detour Notice",
      kind: "Functional text · 11.RI",
      blurb: "A bridge repair moves two stops for three weeks.",
      level: 1,
      passage:
        "<p><strong>Route 12 Detour Notice</strong></p>" +
        "<p>" + N(1) + "<strong>What is changing:</strong> From Monday, June 3, through Friday, June 21, Route 12 buses will detour around the Hollis Street bridge repair. " +
        N(2) + "Buses will travel on Garnet Avenue between Fourth and Ninth Streets instead of Hollis Street. " +
        N(3) + "<strong>Stops affected:</strong> The Hollis and Fifth and the Hollis and Seventh stops will be closed during the detour. " +
        N(4) + "Temporary stops, marked with orange signs, will be placed on Garnet Avenue at Fifth and at Seventh Streets. " +
        N(5) + "<strong>Schedule:</strong> Riders should allow up to ten extra minutes for trips that pass through downtown. " +
        N(6) + "Weekend service is not affected because bridge crews will not work on Saturdays or Sundays. " +
        N(7) + "<strong>Questions:</strong> Call the Rider Help Line at 555-0142 or check the Route 12 page of the transit website for live arrival times.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          stem: "The primary purpose of the Route 12 notice is to —",
          choices: [
            { letter: "A", text: "explain why the Hollis Street bridge needs repair" },
            { letter: "B", text: "inform riders about a temporary change in service" },
            { letter: "C", text: "announce that Route 12 will stop running on weekends" },
            { letter: "D", text: "ask riders to vote on a new route through downtown" }
          ],
          correct: "B"
        },
        {
          id: "temporary",
          sol: "11.RI.1.B",
          stem: "According to the notice, where will the temporary stops be placed?",
          choices: [
            { letter: "A", text: "on Garnet Avenue at Fifth and Seventh Streets" },
            { letter: "B", text: "on Hollis Street at Fourth and Ninth Streets" },
            { letter: "C", text: "at each end of the Hollis Street bridge" },
            { letter: "D", text: "next to the Rider Help Line office downtown" }
          ],
          correct: "A"
        },
        {
          id: "weekend",
          sol: "11.RI.2.C",
          stem: "Which sentence explains why weekend riders on Route 12 will not be affected?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          stem: "The bold headings in the Route 12 notice mainly help riders by —",
          choices: [
            { letter: "A", text: "showing which stops are the most popular" },
            { letter: "B", text: "listing the steps of the bridge repair" },
            { letter: "C", text: "making specific information easy to find" },
            { letter: "D", text: "explaining the history of Route 12" }
          ],
          correct: "C"
        },
        {
          id: "apply",
          sol: "11.RI.1.B",
          stem: "A rider who usually boards at Hollis and Seventh wants to catch the bus on Tuesday, June 11. Based on the notice, the rider should —",
          choices: [
            { letter: "A", text: "board at Hollis and Seventh as usual" },
            { letter: "B", text: "wait until the weekend to ride the bus" },
            { letter: "C", text: "walk to the Hollis and Fifth stop instead" },
            { letter: "D", text: "go to the orange-signed stop on Garnet" }
          ],
          correct: "D"
        },
        {
          id: "extra",
          sol: "11.RI.2.B",
          stem: "Sentence 5 serves mainly to —",
          choices: [
            { letter: "A", text: "help riders plan for slower trips" },
            { letter: "B", text: "warn riders that buses may skip stops" },
            { letter: "C", text: "explain how the bridge will be repaired" },
            { letter: "D", text: "show that the detour will end early" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 28 · Functional text (level 1) · pottery ───────────── */
    {
      id: "g11-ri-c89-openstudio",
      family: "G11",
      title: "Open Studio Guidelines",
      kind: "Functional text · 11.RI",
      blurb: "The rules every member follows at the Clayhouse Community Studio.",
      level: 1,
      passage:
        "<p><strong>Clayhouse Community Studio: Open Studio Guidelines</strong></p>" +
        "<p>" + N(1) + "<strong>Hours:</strong> Open studio runs Tuesday and Thursday evenings from 6:00 to 9:00 and is available only to members who have completed Wheel Basics. " +
        N(2) + "<strong>Before you begin:</strong> Sign in at the front desk and claim a wheel on the whiteboard. " +
        N(3) + "<strong>Clay:</strong> Use only clay bought from the studio, since outside clay may melt at our kiln temperatures and damage the shelves. " +
        N(4) + "<strong>Cleanup:</strong> Wipe your wheel, sponge your area, and empty your water bucket into the settling tank, never the sink, because clay sludge clogs drains. " +
        N(5) + "<strong>Kiln shelf:</strong> Place finished pieces, with your initials on the bottom, on the green shelf for firing. " +
        N(6) + "Pieces left unclaimed for more than four weeks after firing will be recycled. " +
        N(7) + "Members who skip cleanup twice may lose open studio privileges for one month.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          stem: "What is the main purpose of the Clayhouse guidelines?",
          choices: [
            { letter: "A", text: "to advertise Wheel Basics to new students" },
            { letter: "B", text: "to describe how the studio's kiln works" },
            { letter: "C", text: "to tell members the rules for open studio" },
            { letter: "D", text: "to explain why clay sludge clogs drains" }
          ],
          correct: "C"
        },
        {
          id: "outside",
          sol: "11.RI.1.B",
          stem: "According to the guidelines, why must members use only studio clay?",
          choices: [
            { letter: "A", text: "Outside clay may melt and damage kiln shelves." },
            { letter: "B", text: "Outside clay is harder to center on the wheel." },
            { letter: "C", text: "Studio clay is cheaper than clay from stores." },
            { letter: "D", text: "Studio clay is the only kind that holds glaze." }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "The Clayhouse guidelines are organized mainly by —",
          choices: [
            { letter: "A", text: "ranking the rules from most to least important" },
            { letter: "B", text: "comparing the studio with other local studios" },
            { letter: "C", text: "telling the story of one member's first visit" },
            { letter: "D", text: "grouping rules under headings in visit order" }
          ],
          correct: "D"
        },
        {
          id: "consequence",
          sol: "11.RI.2.B",
          stem: "The final sentence of the Clayhouse guidelines serves mainly to —",
          choices: [
            { letter: "A", text: "thank members for keeping the studio clean" },
            { letter: "B", text: "show that the cleanup rule will be enforced" },
            { letter: "C", text: "explain how members can earn extra hours" },
            { letter: "D", text: "describe the steps for cleaning a wheel" }
          ],
          correct: "B"
        },
        {
          id: "procedure",
          sol: "11.RI.1.C",
          stem: "Which part of sentence 4 gives a reason rather than an instruction?",
          choices: [
            { letter: "A", text: "Wipe your wheel" },
            { letter: "B", text: "sponge your area" },
            { letter: "C", text: "because clay sludge clogs drains" },
            { letter: "D", text: "empty your water bucket into the settling tank" }
          ],
          correct: "C"
        },
        {
          id: "unclaimed",
          sol: "11.RV.1.A",
          stem: "The word unclaimed in sentence 6 begins with the prefix un-, as do unknown and unused. The prefix un- in these words means —",
          choices: [
            { letter: "A", text: "again" },
            { letter: "B", text: "not" },
            { letter: "C", text: "before" },
            { letter: "D", text: "fully" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 29 · Argument (level 2) · bus route ───────────── */
    {
      id: "g11-ri-c89-freefares",
      family: "G11",
      title: "Let Students Ride Free",
      kind: "Argument · 11.RI",
      blurb: "A student argues that free bus passes would fill classrooms and buses alike.",
      level: 2,
      passage:
        "<p>" + N(1) + "The city should let high school students ride its buses for free, and the cost of not doing so is already visible in our attendance records. " +
        N(2) + "At Eastfield High, more than one in five students lives over two miles from school, beyond the yellow-bus zone, and a monthly pass costs forty dollars. " +
        N(3) + "For a family with two teenagers, that is nearly a thousand dollars a year just to get to class. " +
        N(4) + "Critics argue that the city cannot afford the lost fares. " +
        N(5) + "But students make up a small share of riders, and nearby cities that dropped student fares found that many of those young riders kept using the bus as adults. " +
        N(6) + "In other words, a free pass is not a giveaway; it is an investment in tomorrow's paying customers. " +
        N(7) + "A city that wants full classrooms and full buses should stop charging teenagers for the trip that connects the two.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the author's central claim in \"Let Students Ride Free\"?",
          choices: [
            { letter: "A", text: "Yellow school buses should serve every student." },
            { letter: "B", text: "Monthly bus passes should cost less for adults." },
            { letter: "C", text: "The city should let high schoolers ride for free." },
            { letter: "D", text: "Eastfield High should move closer to downtown." }
          ],
          correct: "C"
        },
        {
          id: "numbers",
          sol: "11.RI.2.C",
          stem: "Which sentence gives numerical evidence of the burden bus fares place on families?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "A"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          stem: "How does the author develop the argument in sentences 4–6?",
          choices: [
            { letter: "A", text: "by listing the costs of running a bus system" },
            { letter: "B", text: "by telling a story about one student's commute" },
            { letter: "C", text: "by comparing yellow buses with city buses" },
            { letter: "D", text: "by stating an objection and then answering it" }
          ],
          correct: "D"
        },
        {
          id: "investment",
          sol: "11.RI.2.B",
          stem: "In sentence 6, the contrast between \"a giveaway\" and \"an investment\" mainly serves to —",
          choices: [
            { letter: "A", text: "admit that free passes would waste city money" },
            { letter: "B", text: "present free fares as having a future payoff" },
            { letter: "C", text: "suggest that students should repay the city" },
            { letter: "D", text: "explain how monthly passes are currently sold" }
          ],
          correct: "B"
        },
        {
          id: "strengthen",
          sol: "11.RI.1.B",
          stem: "In sentence 1, the author says the cost shows in attendance records. Which additional evidence would most strengthen this claim?",
          choices: [
            { letter: "A", text: "the price of a monthly pass in a nearby city" },
            { letter: "B", text: "the number of buses that serve Eastfield High" },
            { letter: "C", text: "data showing more absences among far-off students" },
            { letter: "D", text: "a quotation from a bus driver about teen riders" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "11.RI.1.C",
          stem: "The author's tone in the final sentence of \"Let Students Ride Free\" is best described as —",
          choices: [
            { letter: "A", text: "firm and confident" },
            { letter: "B", text: "doubtful and hesitant" },
            { letter: "C", text: "playful and silly" },
            { letter: "D", text: "neutral and detached" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
