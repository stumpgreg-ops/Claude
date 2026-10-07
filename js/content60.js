/* SOL Labyrinth — v5.15 expansion: Grade 10 TINY packs (nights 1–8), 25 packs of 5 questions.
 * Topics: student filmmaking, railroads and trains, early aviation, recycling and waste.
 * Original text only; no real people. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    {
      id: "g10-rl-c60-takeseven",
      family: "G10",
      title: "Take Seven",
      kind: "Literary · 10.RL",
      blurb: "A student director, a locker scene, and one small suggestion on the eighth take.",
      level: 1,
      passage:
        "<p>" + N(1) + "By the seventh take, Ilse could recite her friend Tomas's lines better than he could. " +
        N(2) + "The scene was simple: he opens a locker, finds a note, and looks up. " +
        N(3) + "Every time, he looked up too fast, like a man hearing a fire alarm. " +
        N(4) + "\"Slower,\" Ilse said, lowering the phone she was filming on. " +
        N(5) + "\"Pretend the note is from someone you miss.\" " +
        N(6) + "Tomas went quiet, then nodded. " +
        N(7) + "On take eight he read the note, held still, and let his eyes fill before he raised them. " +
        N(8) + "Ilse forgot to say cut.</p>",
      claims: [
        {
          id: "director",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "In sentences 4 and 5, Ilse is best described as a director who —",
          choices: [
            { letter: "A", text: "gives up on Tomas after too many takes" },
            { letter: "B", text: "guides her actor with a specific suggestion" },
            { letter: "C", text: "cares more about the phone than the scene" },
            { letter: "D", text: "secretly wants to play the role herself" }
          ],
          correct: "B"
        },
        {
          id: "alarm",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "The simile in sentence 3, like a man hearing a fire alarm, suggests that Tomas's reaction is —",
          choices: [
            { letter: "A", text: "too sudden and startled for the moment" },
            { letter: "B", text: "carefully timed to match the script" },
            { letter: "C", text: "funny in a way Ilse had planned" },
            { letter: "D", text: "slow and sleepy after hours of filming" }
          ],
          correct: "A"
        },
        {
          id: "cut",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author ends with sentence 8, Ilse forgot to say cut, mainly to —",
          choices: [
            { letter: "A", text: "show that the phone's battery died" },
            { letter: "B", text: "suggest that Tomas made another mistake" },
            { letter: "C", text: "reveal that the performance moved Ilse" },
            { letter: "D", text: "explain why the film ran too long" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Ilse and Tomas's locker scene?",
          choices: [
            { letter: "A", text: "Practice is useless without better equipment." },
            { letter: "B", text: "Friends should never work together on projects." },
            { letter: "C", text: "A director must always follow the script exactly." },
            { letter: "D", text: "Real feeling can make a simple scene powerful." }
          ],
          correct: "D"
        },
        {
          id: "recite",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 1, the word recite most nearly means —",
          choices: [
            { letter: "A", text: "say aloud from memory" },
            { letter: "B", text: "write down in a notebook" },
            { letter: "C", text: "change to sound better" },
            { letter: "D", text: "read silently once" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c60-platform",
      family: "G10",
      title: "Platform Four",
      kind: "Literary · 10.RL",
      blurb: "A retired railroad man, a granddaughter, and the 3:15 express that never stops.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every Sunday, Grandpa Haruto walks to the station to watch the 3:15 express pass without stopping. " +
        N(2) + "He worked forty years on these tracks, first as a brakeman and then as a signal operator. " +
        N(3) + "Today Mina came with him, expecting to be bored. " +
        N(4) + "When the express roared through, the platform shook, and Grandpa closed his eyes and counted under his breath. " +
        N(5) + "\"Eleven cars,\" he said. " +
        N(6) + "\"Right on time.\" " +
        N(7) + "Mina realized he was not watching a train at all; he was checking on an old friend.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by Grandpa Haruto's Sunday visits to the station?",
          choices: [
            { letter: "A", text: "Retirement is a time to forget old habits." },
            { letter: "B", text: "Young people rarely care about family history." },
            { letter: "C", text: "Work a person loves can stay part of who he is." },
            { letter: "D", text: "Trains are more reliable than other machines." }
          ],
          correct: "C"
        },
        {
          id: "counts",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 4 characterizes Grandpa Haruto as someone who —",
          choices: [
            { letter: "A", text: "still knows the train by its sound and rhythm" },
            { letter: "B", text: "is frightened by the noise of the express" },
            { letter: "C", text: "wishes Mina had stayed at home that day" },
            { letter: "D", text: "has trouble seeing the cars as they pass" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The details in sentence 4 — the roar, the shaking platform, Grandpa's closed eyes — mainly create a mood of —",
          choices: [
            { letter: "A", text: "sudden panic and confusion" },
            { letter: "B", text: "restless boredom and impatience" },
            { letter: "C", text: "lighthearted, playful silliness" },
            { letter: "D", text: "focused, almost reverent attention" }
          ],
          correct: "D"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point in Mina's understanding of the Sunday trips?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 2" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "A"
        },
        {
          id: "roared",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author chose roared rather than passed in sentence 4. Compared with passed, roared suggests the express moved —",
          choices: [
            { letter: "A", text: "slowly and quietly" },
            { letter: "B", text: "with great noise and force" },
            { letter: "C", text: "on a different track than usual" },
            { letter: "D", text: "later than its schedule" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rl-c60-tillbrook",
      family: "G10",
      title: "The Machine in the Hayfield",
      kind: "Literary · 10.RL",
      blurb: "1911: an uninvited flying machine, a feed-store argument, and a girl who carries the fuel.",
      level: 3,
      passage:
        "<p>" + N(1) + "In the summer of 1911, a flying machine landed in Tillbrook's hayfield, and nobody had invited it. " +
        N(2) + "The pilot, a woman in a leather cap, climbed down and asked for gasoline as calmly as asking for directions. " +
        N(3) + "The men at the feed store argued over whether the thing could really fly. " +
        N(4) + "Nell, age twelve, did not argue; she had watched it come down. " +
        N(5) + "While the adults debated, she hauled two cans of fuel across the field. " +
        N(6) + "The pilot let her steady the propeller and said, \"Someday you'll need gasoline too.\"</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The central conflict in the Tillbrook story is best described as a contrast between —",
          choices: [
            { letter: "A", text: "adults who talk and a girl who acts" },
            { letter: "B", text: "the pilot and the owner of the hayfield" },
            { letter: "C", text: "Nell and the weather that summer" },
            { letter: "D", text: "two pilots competing for fuel" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the Tillbrook story is most ironic?",
          choices: [
            { letter: "A", text: "A twelve-year-old carries heavy cans." },
            { letter: "B", text: "The pilot wears a leather cap in summer." },
            { letter: "C", text: "The men doubt it can fly after it has landed." },
            { letter: "D", text: "The pilot needs gasoline to keep going." }
          ],
          correct: "C"
        },
        {
          id: "promise",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The author includes the pilot's words in sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "show that the pilot is out of money" },
            { letter: "B", text: "explain how the propeller works" },
            { letter: "C", text: "prove that the men were right" },
            { letter: "D", text: "hint that Nell may one day fly herself" }
          ],
          correct: "D"
        },
        {
          id: "nell",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 4 and 5 characterize Nell as —",
          choices: [
            { letter: "A", text: "shy and afraid of strangers" },
            { letter: "B", text: "observant and quick to help" },
            { letter: "C", text: "stubborn and rude to adults" },
            { letter: "D", text: "bored by the whole event" }
          ],
          correct: "B"
        },
        {
          id: "debated",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Sentence 3 helps a reader understand that debated in sentence 5 most nearly means —",
          choices: [
            { letter: "A", text: "argued about" },
            { letter: "B", text: "laughed at" },
            { letter: "C", text: "paid for" },
            { letter: "D", text: "ran from" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c60-sortingday",
      family: "G10",
      title: "Sorting Day",
      kind: "Literary · 10.RL",
      blurb: "An environmental club dumps the cafeteria's recycling bin onto a tarp and finds a surprise.",
      level: 2,
      passage:
        "<p>" + N(1) + "Ms. Adeyemi dumped the cafeteria's recycling bin onto a tarp, and the environmental club groaned. " +
        N(2) + "Yogurt cups still held yogurt. " +
        N(3) + "A pizza box was soaked in grease, and someone had tossed in a whole sandwich, still wrapped. " +
        N(4) + "\"We call this the recycling bin,\" Javi said, \"but it's really a second trash can with a nicer label.\" " +
        N(5) + "The club spent lunch sorting with gloved hands. " +
        N(6) + "By the end, only half the pile could be saved, and Javi was already sketching bigger, clearer signs.</p>",
      claims: [
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of sentence 6, in which Javi is already sketching new signs, is best described as —",
          choices: [
            { letter: "A", text: "defeated and gloomy" },
            { letter: "B", text: "determined and hopeful" },
            { letter: "C", text: "angry and blaming" },
            { letter: "D", text: "careless and amused" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of Sorting Day?",
          choices: [
            { letter: "A", text: "Cafeteria food is often wasted." },
            { letter: "B", text: "Clubs should not give up their lunch hour." },
            { letter: "C", text: "Teachers know more than their students do." },
            { letter: "D", text: "Good intentions need clear guidance to work." }
          ],
          correct: "D"
        },
        {
          id: "cause",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "What leads most directly to Javi sketching signs in sentence 6?",
          choices: [
            { letter: "A", text: "seeing how much of the pile could not be recycled" },
            { letter: "B", text: "being told to by Ms. Adeyemi" },
            { letter: "C", text: "wanting to skip the sorting work" },
            { letter: "D", text: "finding a sandwich that was still wrapped" }
          ],
          correct: "A"
        },
        {
          id: "label",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 4, calling the bin a second trash can with a nicer label suggests that it —",
          choices: [
            { letter: "A", text: "needs to be painted a brighter color" },
            { letter: "B", text: "is too small for the cafeteria" },
            { letter: "C", text: "gets used no differently than the trash" },
            { letter: "D", text: "was bought by the club last year" }
          ],
          correct: "C"
        },
        {
          id: "saved",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 6, the word saved most nearly means —",
          choices: [
            { letter: "A", text: "kept to be recycled" },
            { letter: "B", text: "rescued from danger" },
            { letter: "C", text: "stored as money" },
            { letter: "D", text: "spared from blame" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c60-boom",
      family: "G10",
      title: "The Boom Operator",
      kind: "Literary · 10.RL",
      blurb: "Rafi volunteers for the easy job on a student film set. It is not the easy job.",
      level: 3,
      passage:
        "<p>" + N(1) + "On a film set, the boom operator holds the microphone above the actors, just out of frame, for as long as the scene takes. " +
        N(2) + "Rafi had volunteered for the job because it sounded easy. " +
        N(3) + "By the fourth hour of the school's short film, his arms trembled like overcooked noodles. " +
        N(4) + "Nobody would ever see him in the movie. " +
        N(5) + "Then, during playback, the director leaned toward the speaker and whispered, \"Listen. You can hear her breathe before she speaks.\" " +
        N(6) + "Rafi lowered his aching arms and grinned at his invisible work.</p>",
      claims: [
        {
          id: "short",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author places the short sentence 4 just before the playback scene mainly to —",
          choices: [
            { letter: "A", text: "explain how a microphone records sound" },
            { letter: "B", text: "show that Rafi wanted to act instead" },
            { letter: "C", text: "stress that his work is unseen before it is praised" },
            { letter: "D", text: "suggest that the movie will not be shown" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which detail is most ironic, given Rafi's reason for volunteering in sentence 2?",
          choices: [
            { letter: "A", text: "His arms tremble after hours of holding the boom." },
            { letter: "B", text: "The director listens to the playback." },
            { letter: "C", text: "The film is made at Rafi's school." },
            { letter: "D", text: "The microphone stays just out of frame." }
          ],
          correct: "A"
        },
        {
          id: "grin",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Rafi's grin in sentence 6 shows that he —",
          choices: [
            { letter: "A", text: "is relieved the filming is canceled" },
            { letter: "B", text: "plans to quit the crew next time" },
            { letter: "C", text: "thinks the director is joking" },
            { letter: "D", text: "takes pride in work no one will see" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The director's whispered words in sentence 5 create a mood of —",
          choices: [
            { letter: "A", text: "nervous suspense" },
            { letter: "B", text: "hushed appreciation" },
            { letter: "C", text: "sharp disappointment" },
            { letter: "D", text: "noisy celebration" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point in Rafi's feelings about holding the boom?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-rl-c60-caboose",
      family: "G10",
      title: "The Caboose Café",
      kind: "Literary · 10.RL",
      blurb: "A red caboose behind a diner, and a grandmother who never tells the same story twice.",
      level: 1,
      passage:
        "<p>" + N(1) + "The old red caboose behind Lupe's grandmother's diner had not moved in thirty years. " +
        N(2) + "Its wheels were rusted to the rails like roots in the ground. " +
        N(3) + "Customers ate pie inside it and wondered aloud about its old routes. " +
        N(4) + "Abuela always gave a different answer: Denver, Memphis, the Pacific coast. " +
        N(5) + "One night Lupe finally asked which answer was true. " +
        N(6) + "\"All of them,\" Abuela said, pouring coffee. " +
        N(7) + "\"It carried every place to my table.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of The Caboose Café?",
          choices: [
            { letter: "A", text: "Old machines should be sold for scrap." },
            { letter: "B", text: "Stories can carry people far even when things stand still." },
            { letter: "C", text: "Customers care most about the food they order." },
            { letter: "D", text: "Grandparents should always tell the plain truth." }
          ],
          correct: "B"
        },
        {
          id: "roots",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "The simile in sentence 2, rusted to the rails like roots in the ground, suggests that the caboose —",
          choices: [
            { letter: "A", text: "has become a fixed part of its spot" },
            { letter: "B", text: "is about to be moved to a new town" },
            { letter: "C", text: "is covered in plants and flowers" },
            { letter: "D", text: "was built from wood instead of steel" }
          ],
          correct: "A"
        },
        {
          id: "prompt",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "What prompts Lupe's question in sentence 5?",
          choices: [
            { letter: "A", text: "A customer complains about the pie." },
            { letter: "B", text: "The caboose finally starts to move." },
            { letter: "C", text: "Abuela's answers keep changing." },
            { letter: "D", text: "Lupe finds an old ticket inside." }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of Abuela's reply in sentences 6 and 7 is best described as —",
          choices: [
            { letter: "A", text: "impatient and sharp" },
            { letter: "B", text: "nervous and unsure" },
            { letter: "C", text: "sad and regretful" },
            { letter: "D", text: "warm and playful" }
          ],
          correct: "D"
        },
        {
          id: "routes",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Sentence 4 helps a reader understand that routes in sentence 3 refers to —",
          choices: [
            { letter: "A", text: "places the train used to travel" },
            { letter: "B", text: "recipes served in the diner" },
            { letter: "C", text: "repairs made to the wheels" },
            { letter: "D", text: "roads near the grandmother's house" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c60-canvaswings",
      family: "G10",
      title: "Canvas Wings",
      kind: "Poetry · 10.RL",
      blurb: "Eight lines: a homemade flying machine, a grumbling engine, and a field of watching farmers.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "They built the wings from cloth and pine<br>" +
        L(2) + "and stretched them taut on wire and twine.<br>" +
        L(3) + "The engine coughed like a grumbling cat;<br>" +
        L(4) + "the frame complained, then rattled flat,<br>" +
        L(5) + "then lifted — barely — past the wheat,<br>" +
        L(6) + "ten feet, then twenty, off its feet.<br>" +
        L(7) + "Below, the farmers dropped their rakes;<br>" +
        L(8) + "the sky, it seemed, made room for mistakes.</p>",
      claims: [
        {
          id: "cat",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "In line 3 of Canvas Wings, comparing the engine to a grumbling cat suggests that the engine —",
          choices: [
            { letter: "A", text: "runs smoothly and almost silently" },
            { letter: "B", text: "frightens the animals in the field" },
            { letter: "C", text: "is small enough to carry by hand" },
            { letter: "D", text: "starts with a rough, unwilling noise" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "The words coughed, complained, and rattled in lines 3–4 mainly create a mood of —",
          choices: [
            { letter: "A", text: "calm confidence" },
            { letter: "B", text: "shaky uncertainty" },
            { letter: "C", text: "bitter anger" },
            { letter: "D", text: "quiet sorrow" }
          ],
          correct: "B"
        },
        {
          id: "mistakes",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "The final line of Canvas Wings, the sky, it seemed, made room for mistakes, best supports the idea that —",
          choices: [
            { letter: "A", text: "progress can begin with imperfect attempts" },
            { letter: "B", text: "flying machines should never be built at home" },
            { letter: "C", text: "farmers disapproved of the builders' plans" },
            { letter: "D", text: "bad weather ruined the first flight" }
          ],
          correct: "A"
        },
        {
          id: "dashes",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The dashes around barely in line 5 mainly serve to —",
          choices: [
            { letter: "A", text: "show that the poem has changed speakers" },
            { letter: "B", text: "mark the end of the poem's first stanza" },
            { letter: "C", text: "slow the reader to stress how close it came to failing" },
            { letter: "D", text: "list the materials the builders used" }
          ],
          correct: "C"
        },
        {
          id: "taut",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The poet chose taut rather than tight in line 2. Compared with tight, taut suggests the cloth was —",
          choices: [
            { letter: "A", text: "pulled firmly, under tension" },
            { letter: "B", text: "wrinkled and loosely tied" },
            { letter: "C", text: "brightly painted" },
            { letter: "D", text: "too small for the frame" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c60-midnightfreight",
      family: "G10",
      title: "Freight at Midnight",
      kind: "Poetry · 10.RL",
      blurb: "Eight lines: a hundred-car freight train, a sleeping brother, and a speaker who stays awake.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At midnight the freight train counts the town,<br>" +
        L(2) + "one hundred cars of rust and brown.<br>" +
        L(3) + "It does not stop. It never asks.<br>" +
        L(4) + "It hauls the grain, the steel, the tanks,<br>" +
        L(5) + "then leaves a silence twice as wide<br>" +
        L(6) + "as any sound it brought inside.<br>" +
        L(7) + "My brother sleeps right through the din;<br>" +
        L(8) + "I lie awake to let it in.</p>",
      claims: [
        {
          id: "mood",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "The short statements in line 3, It does not stop. It never asks., create a sense of the train's —",
          choices: [
            { letter: "A", text: "gentle kindness" },
            { letter: "B", text: "nervous hurry" },
            { letter: "C", text: "steady, indifferent power" },
            { letter: "D", text: "broken, failing engine" }
          ],
          correct: "C"
        },
        {
          id: "silence",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "Lines 5–6 of Freight at Midnight are surprising mainly because they suggest that —",
          choices: [
            { letter: "A", text: "the quiet after the train feels bigger than its noise" },
            { letter: "B", text: "the train is quieter than the speaker expected" },
            { letter: "C", text: "the town's houses are unusually large" },
            { letter: "D", text: "the train stops inside the speaker's home" }
          ],
          correct: "A"
        },
        {
          id: "brother",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "How does the contrast between the brother and the speaker in lines 7–8 function in the poem?",
          choices: [
            { letter: "A", text: "It shows that the brother is ill." },
            { letter: "B", text: "It explains where the train is going." },
            { letter: "C", text: "It proves the train is not very loud." },
            { letter: "D", text: "It shows the speaker welcomes the train's passing." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which idea about the midnight freight is best supported by the poem as a whole?",
          choices: [
            { letter: "A", text: "Trains should not be allowed to run at night." },
            { letter: "B", text: "Ordinary sounds can hold meaning for a listener." },
            { letter: "C", text: "Brothers rarely share the same interests." },
            { letter: "D", text: "Small towns depend only on shipping grain." }
          ],
          correct: "B"
        },
        {
          id: "counts",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In line 1, saying the freight train counts the town mainly suggests that the train —",
          choices: [
            { letter: "A", text: "is checking how many people live there" },
            { letter: "B", text: "is lost and searching for a station" },
            { letter: "C", text: "moves through in a steady, measured rhythm" },
            { letter: "D", text: "carries numbers painted on each car" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rl-c60-roughcut",
      family: "G10",
      title: "The Rough Cut",
      kind: "Drama · 10.RL",
      blurb: "A student director and her editor, one laptop, and a sunset scene that runs one minute too long.",
      level: 2,
      passage:
        "<p><em>The media lab after school. AMARA watches DESHAWN edit.</em></p>" +
        "<p>" + N(1) + "<strong>DESHAWN</strong> <em>(pointing at the screen)</em>: This rough cut, our first full draft, runs eleven minutes. " +
        N(2) + "<strong>DESHAWN</strong>: The limit is ten, so the sunset scene goes. " +
        N(3) + "<strong>AMARA</strong>: That scene took us three evenings to shoot. " +
        N(4) + "<strong>DESHAWN</strong>: I know. That's why I saved it for last. " +
        N(5) + "<strong>AMARA</strong> <em>(staring)</em>: Is it good, or do we just remember how hard it was? " +
        N(6) + "<strong>DESHAWN</strong> <em>(quietly)</em>: Watch it like a stranger. " +
        N(7) + "<strong>AMARA</strong> <em>(after a long pause)</em>: Cut it.</p>",
      claims: [
        {
          id: "question",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Amara's question in sentence 5 shows that she —",
          choices: [
            { letter: "A", text: "has never seen the sunset scene before" },
            { letter: "B", text: "can question her own attachment to the scene" },
            { letter: "C", text: "blames Deshawn for the film's length" },
            { letter: "D", text: "wants to enter a different festival" }
          ],
          correct: "B"
        },
        {
          id: "stranger",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of Deshawn's line in sentence 6, Watch it like a stranger, is best described as —",
          choices: [
            { letter: "A", text: "gentle but honest" },
            { letter: "B", text: "mocking and cruel" },
            { letter: "C", text: "confused and unsure" },
            { letter: "D", text: "loud and excited" }
          ],
          correct: "A"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The central conflict in the media-lab scene is best described as a struggle between —",
          choices: [
            { letter: "A", text: "Deshawn and the festival judges" },
            { letter: "B", text: "two directors who want control" },
            { letter: "C", text: "a broken laptop and a deadline" },
            { letter: "D", text: "Amara's attachment to her work and a time limit" }
          ],
          correct: "D"
        },
        {
          id: "pause",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "The stage direction after a long pause before Amara's final line mainly serves to —",
          choices: [
            { letter: "A", text: "show that she did not hear Deshawn" },
            { letter: "B", text: "signal that the laptop has frozen" },
            { letter: "C", text: "show that the decision is hard for her" },
            { letter: "D", text: "suggest that she is falling asleep" }
          ],
          correct: "C"
        },
        {
          id: "roughcut",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 1, Deshawn's words help define a rough cut as —",
          choices: [
            { letter: "A", text: "a scene that has been deleted" },
            { letter: "B", text: "a first full version of an edited film" },
            { letter: "C", text: "a film with poor sound quality" },
            { letter: "D", text: "a trailer made to advertise a movie" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-ri-c60-railroadtime",
      family: "G10",
      title: "Railroad Time",
      kind: "Informational · 10.RI",
      blurb: "How confusing local clocks pushed railroads to divide a continent into time zones.",
      level: 2,
      passage:
        "<p>" + N(1) + "Before the 1880s, most towns in North America set their clocks by the sun, so noon in one city might come minutes before noon in the next. " +
        N(2) + "For travelers on foot, the difference hardly mattered. " +
        N(3) + "For railroads, it was a daily headache. " +
        N(4) + "Stations posted different times, and schedules became confusing and even dangerous. " +
        N(5) + "In 1883, railroad companies agreed to divide the continent into standard time zones. " +
        N(6) + "Clocks within each zone were synchronized, and the idea soon spread far beyond the tracks.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the passage about railroad time?",
          choices: [
            { letter: "A", text: "Walking was more reliable than train travel in the 1880s." },
            { letter: "B", text: "Railroads created time zones to solve the problem of local times." },
            { letter: "C", text: "Every town in North America once had its own railroad." },
            { letter: "D", text: "Sundials were more accurate than clocks." }
          ],
          correct: "B"
        },
        {
          id: "contrast",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 2 and 3 of Railroad Time are organized mainly to —",
          choices: [
            { letter: "A", text: "list events in the order they happened" },
            { letter: "B", text: "define the term standard time" },
            { letter: "C", text: "describe how a clock works" },
            { letter: "D", text: "contrast how walkers and railroads were affected" }
          ],
          correct: "D"
        },
        {
          id: "danger",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence best supports the idea that local time could be a safety concern for railroads?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 1" },
            { letter: "C", text: "Sentence 2" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "A"
        },
        {
          id: "headache",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author calls the time differences a daily headache in sentence 3 to emphasize that they —",
          choices: [
            { letter: "A", text: "made railroad workers physically ill" },
            { letter: "B", text: "happened only once in a while" },
            { letter: "C", text: "were a constant, frustrating problem" },
            { letter: "D", text: "were easy for stations to ignore" }
          ],
          correct: "C"
        },
        {
          id: "sync",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word synchronized in sentence 6 contains syn- (together) and chron (time). Based on these parts, synchronized clocks are clocks that —",
          choices: [
            { letter: "A", text: "show the same time together" },
            { letter: "B", text: "run faster than usual" },
            { letter: "C", text: "must be wound every day" },
            { letter: "D", text: "were made in the same factory" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c60-clothwings",
      family: "G10",
      title: "Cloth Wings",
      kind: "Informational · 10.RI",
      blurb: "Why so many early airplanes flew on wings of painted fabric.",
      level: 1,
      passage:
        "<p>" + N(1) + "Many of the earliest airplanes had wings made of cloth rather than metal. " +
        N(2) + "Builders stretched cotton or linen over a frame of light wooden ribs. " +
        N(3) + "Then they painted the fabric with a liquid called dope, which shrank and stiffened it as it dried. " +
        N(4) + "The result was a wing tight enough to hold its shape in the wind. " +
        N(5) + "Cloth wings were light and cheap to repair, but they could tear and had to be replaced often.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "What is the main idea of the passage about cloth wings?",
          choices: [
            { letter: "A", text: "Metal wings were invented before cloth wings." },
            { letter: "B", text: "Linen is stronger than cotton for building." },
            { letter: "C", text: "Early wings were often treated fabric on wooden frames." },
            { letter: "D", text: "Airplane builders disliked repairing their wings." }
          ],
          correct: "C"
        },
        {
          id: "stiff",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which sentence best explains how builders made the wing fabric stiff?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 1" },
            { letter: "C", text: "Sentence 2" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "The passage about cloth wings is organized mainly by —",
          choices: [
            { letter: "A", text: "comparing two pilots' opinions" },
            { letter: "B", text: "telling a story about one flight" },
            { letter: "C", text: "listing problems with no solutions" },
            { letter: "D", text: "describing building steps, then pros and cons" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "The author's main purpose in the passage about cloth wings is to —",
          choices: [
            { letter: "A", text: "persuade readers to build their own airplanes" },
            { letter: "B", text: "explain how and why early wings used cloth" },
            { letter: "C", text: "warn readers about the dangers of flying" },
            { letter: "D", text: "praise one famous early airplane builder" }
          ],
          correct: "B"
        },
        {
          id: "dope",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 3, the word dope refers to —",
          choices: [
            { letter: "A", text: "a liquid coating that tightens fabric" },
            { letter: "B", text: "a kind of wooden rib" },
            { letter: "C", text: "a tool for cutting linen" },
            { letter: "D", text: "a careless airplane builder" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c60-landfill",
      family: "G10",
      title: "Inside a Landfill",
      kind: "Informational · 10.RI",
      blurb: "Clay, liners, pipes and daily soil: what really happens where the garbage truck goes.",
      level: 2,
      passage:
        "<p>" + N(1) + "A modern landfill is not simply a hole full of garbage. " +
        N(2) + "Before any trash arrives, workers line the bottom with thick clay and a plastic liner to keep liquids out of the groundwater. " +
        N(3) + "Pipes collect that liquid, called leachate, so it can be treated. " +
        N(4) + "Each day, crews cover the new trash with soil to reduce odors and keep birds away. " +
        N(5) + "Even so, a landfill only delays the problem, because most of what it holds will stay there for centuries.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes Inside a Landfill?",
          choices: [
            { letter: "A", text: "Birds are the biggest problem at landfills." },
            { letter: "B", text: "Landfills are cheaper than recycling programs." },
            { letter: "C", text: "Groundwater is always polluted near landfills." },
            { letter: "D", text: "Landfills are carefully built but cannot erase waste." }
          ],
          correct: "D"
        },
        {
          id: "steps",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 2 through 4 of Inside a Landfill organized?",
          choices: [
            { letter: "A", text: "as a debate between two experts" },
            { letter: "B", text: "as measures that protect the land and water" },
            { letter: "C", text: "as a list of items people throw away" },
            { letter: "D", text: "as a history of garbage collection" }
          ],
          correct: "B"
        },
        {
          id: "water",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence best supports the claim that landfills are designed to protect groundwater?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 1" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "A"
        },
        {
          id: "opening",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author opens with sentence 1, A modern landfill is not simply a hole full of garbage, mainly to —",
          choices: [
            { letter: "A", text: "suggest that landfills are beautiful places" },
            { letter: "B", text: "explain where the clay comes from" },
            { letter: "C", text: "correct a common assumption before explaining" },
            { letter: "D", text: "argue that landfills should be closed" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The tone of sentence 5, about waste that stays for centuries, is best described as —",
          choices: [
            { letter: "A", text: "joking and lighthearted" },
            { letter: "B", text: "angry and accusing" },
            { letter: "C", text: "realistic and cautionary" },
            { letter: "D", text: "excited and cheerful" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c60-storyboard",
      family: "G10",
      title: "Drawing the Movie First",
      kind: "Informational · 10.RI",
      blurb: "Stick figures, camera notes and comic-strip panels: why student crews storyboard.",
      level: 1,
      passage:
        "<p>" + N(1) + "Before a student crew films a single scene, many directors make a storyboard. " +
        N(2) + "A storyboard is a series of simple sketches, one for each shot, arranged like a comic strip. " +
        N(3) + "Under each drawing, the director notes the camera angle, any movement, and the lines spoken. " +
        N(4) + "Stick figures are fine; the point is planning, not art. " +
        N(5) + "A good storyboard helps a crew see the whole film before shooting, and it saves time on busy filming days.</p>",
      claims: [
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The author's tone in sentence 4, Stick figures are fine, is best described as —",
          choices: [
            { letter: "A", text: "strict and demanding" },
            { letter: "B", text: "reassuring and practical" },
            { letter: "C", text: "doubtful and worried" },
            { letter: "D", text: "sarcastic and mocking" }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "The passage about storyboards is written mainly for —",
          choices: [
            { letter: "A", text: "professional comic-strip artists" },
            { letter: "B", text: "people who review finished movies" },
            { letter: "C", text: "teachers grading art projects" },
            { letter: "D", text: "students planning their own films" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How is the passage Drawing the Movie First organized?",
          choices: [
            { letter: "A", text: "It defines a tool, describes its parts, then gives its benefits." },
            { letter: "B", text: "It tells the story of one film from start to finish." },
            { letter: "C", text: "It compares two directors' methods side by side." },
            { letter: "D", text: "It lists problems that storyboards cause." }
          ],
          correct: "A"
        },
        {
          id: "notes",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail best shows that a storyboard includes more than pictures?",
          choices: [
            { letter: "A", text: "The sketches are arranged like a comic strip." },
            { letter: "B", text: "Stick figures are acceptable." },
            { letter: "C", text: "Directors make one before filming." },
            { letter: "D", text: "Each drawing has notes on angle, movement and lines." }
          ],
          correct: "D"
        },
        {
          id: "comic",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The comparison to a comic strip in sentence 2 mainly helps readers —",
          choices: [
            { letter: "A", text: "see that storyboards are meant to be funny" },
            { letter: "B", text: "learn which artists draw storyboards" },
            { letter: "C", text: "picture how the sketches are laid out in order" },
            { letter: "D", text: "understand why films cost so much" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c60-nightmail",
      family: "G10",
      title: "Bonfires for the Night Mail",
      kind: "Informational · 10.RI",
      blurb: "How chains of fire, and later spinning beacons, guided the first night airmail pilots.",
      level: 3,
      passage:
        "<p>" + N(1) + "In the early 1920s, airmail pilots flew open-cockpit biplanes with few instruments and no radio guidance. " +
        N(2) + "Daytime routes were risky enough, but night flying seemed nearly impossible. " +
        N(3) + "The solution was strikingly low-tech: farmers and postal workers lit bonfires along the route so pilots could follow the chain of flames. " +
        N(4) + "Later, rotating electric beacons on towers replaced the fires. " +
        N(5) + "These lighted airways let mail cross the country in about a day and a half, a fraction of the time trains needed.</p>",
      claims: [
        {
          id: "lowtech",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 3, the author calls the bonfire solution strikingly low-tech mainly to —",
          choices: [
            { letter: "A", text: "criticize the postal workers for being careless" },
            { letter: "B", text: "suggest that the fires did not actually work" },
            { letter: "C", text: "highlight the contrast between simple fires and flight" },
            { letter: "D", text: "explain how a radio guidance system works" }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The author's attitude toward the bonfire system for night airmail is best described as —",
          choices: [
            { letter: "A", text: "admiring of its resourcefulness" },
            { letter: "B", text: "embarrassed by its simplicity" },
            { letter: "C", text: "angry about its dangers" },
            { letter: "D", text: "uninterested in its results" }
          ],
          correct: "A"
        },
        {
          id: "faster",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail best supports the idea that the lighted airways made mail delivery faster?",
          choices: [
            { letter: "A", text: "Pilots flew open-cockpit biplanes." },
            { letter: "B", text: "Electric beacons replaced the fires." },
            { letter: "C", text: "Farmers helped light the bonfires." },
            { letter: "D", text: "Mail crossed the country in about a day and a half." }
          ],
          correct: "D"
        },
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the passage about night airmail?",
          choices: [
            { letter: "A", text: "Trains were the safest way to send mail in the 1920s." },
            { letter: "B", text: "Simple light signals made night airmail possible and fast." },
            { letter: "C", text: "Farmers earned extra money by working for the post office." },
            { letter: "D", text: "Radio was the most important invention for early pilots." }
          ],
          correct: "B"
        },
        {
          id: "problem",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 1 through 3 of Bonfires for the Night Mail are organized mainly as —",
          choices: [
            { letter: "A", text: "a list of airplane parts" },
            { letter: "B", text: "a comparison of two pilots" },
            { letter: "C", text: "a problem followed by its solution" },
            { letter: "D", text: "a series of unrelated facts" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c60-wishcycling",
      family: "G10",
      title: "Wishcycling",
      kind: "Informational · 10.RI",
      blurb: "Why tossing a maybe into the blue bin can do more harm than good.",
      level: 3,
      passage:
        "<p>" + N(1) + "Some people toss anything that might be recyclable into the blue bin, hoping someone else will sort it out. " +
        N(2) + "Workers call this habit \"wishcycling,\" and it causes real damage. " +
        N(3) + "Plastic bags tangle around sorting machines, forcing shutdowns several times a day. " +
        N(4) + "Greasy containers can spoil an entire bale of paper, sending the whole load to a landfill. " +
        N(5) + "The kindest choice, it turns out, is often the trash can: when in doubt, throw it out.</p>",
      claims: [
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The author's tone toward people who wishcycle is best described as —",
          choices: [
            { letter: "A", text: "furious and insulting" },
            { letter: "B", text: "amused and unconcerned" },
            { letter: "C", text: "admiring and grateful" },
            { letter: "D", text: "critical but understanding" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The author's main purpose in the passage about wishcycling is to —",
          choices: [
            { letter: "A", text: "persuade readers not to recycle items they are unsure of" },
            { letter: "B", text: "explain how sorting machines are built" },
            { letter: "C", text: "describe the history of the blue bin" },
            { letter: "D", text: "convince readers to stop recycling entirely" }
          ],
          correct: "A"
        },
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the passage about wishcycling?",
          choices: [
            { letter: "A", text: "Plastic bags are the only item that harms recycling." },
            { letter: "B", text: "Recycling uncertain items can hurt more than it helps." },
            { letter: "C", text: "Landfills accept paper that recycling centers reject." },
            { letter: "D", text: "Sorting workers wish people recycled less often." }
          ],
          correct: "B"
        },
        {
          id: "kindest",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 5, calling the trash can the kindest choice is meant to —",
          choices: [
            { letter: "A", text: "joke that trash cans have feelings" },
            { letter: "B", text: "praise people who never recycle" },
            { letter: "C", text: "upset the belief that recycling is always better" },
            { letter: "D", text: "explain where the trash can should be placed" }
          ],
          correct: "C"
        },
        {
          id: "tangle",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author says plastic bags tangle around sorting machines rather than touch them. Compared with touch, tangle suggests that the bags —",
          choices: [
            { letter: "A", text: "twist around parts and are hard to remove" },
            { letter: "B", text: "brush against the machines lightly" },
            { letter: "C", text: "melt when the machines get hot" },
            { letter: "D", text: "slide easily off the belts" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c60-filmfest",
      family: "G10",
      title: "Short Film Festival Rules",
      kind: "Functional text · 10.RI",
      blurb: "Deadline, length, music and crew: the rules for the Hollis High short film festival.",
      level: 1,
      passage:
        "<p><strong>Hollis High Short Film Festival: Submission Rules</strong></p>" +
        "<p><strong>Deadline:</strong> " + N(1) + "Films must be uploaded by 11:59 p.m. on March 3. " +
        "<strong>Length:</strong> " + N(2) + "Entries may run no longer than seven minutes, including credits. " +
        "<strong>Music:</strong> " + N(3) + "Use only music you composed or music marked free to use. " +
        N(4) + "Films with copyrighted songs will be disqualified. " +
        "<strong>Crew:</strong> " + N(5) + "At least half of each crew must be current students. " +
        "<strong>Awards:</strong> " + N(6) + "Winning films will be screened at the spring arts night on April 12.</p>",
      claims: [
        {
          id: "disqualified",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.2",
          stem: "According to the Hollis High festival rules, which film would be disqualified?",
          choices: [
            { letter: "A", text: "a six-minute film uploaded on March 1" },
            { letter: "B", text: "a film with music its director wrote" },
            { letter: "C", text: "a film that uses a popular radio song" },
            { letter: "D", text: "a film made by an all-student crew" }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "The Hollis High festival rules are written mainly for —",
          choices: [
            { letter: "A", text: "students who plan to enter a short film" },
            { letter: "B", text: "parents buying tickets to arts night" },
            { letter: "C", text: "judges choosing the winning films" },
            { letter: "D", text: "musicians who sell songs online" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "The bold headings in the festival rules, such as Deadline and Music, help a reader mainly by —",
          choices: [
            { letter: "A", text: "ranking the rules from easiest to hardest" },
            { letter: "B", text: "making it easy to find one requirement" },
            { letter: "C", text: "showing which rules are optional" },
            { letter: "D", text: "telling the story of last year's festival" }
          ],
          correct: "B"
        },
        {
          id: "credits",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Sentence 2 includes the words including credits mainly to —",
          choices: [
            { letter: "A", text: "remind crews to thank their actors" },
            { letter: "B", text: "suggest that credits should be long" },
            { letter: "C", text: "explain how to make credits" },
            { letter: "D", text: "make clear that credits count toward the limit" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The tone of the Hollis High festival rules is best described as —",
          choices: [
            { letter: "A", text: "clear and businesslike" },
            { letter: "B", text: "angry and threatening" },
            { letter: "C", text: "silly and joking" },
            { letter: "D", text: "vague and confusing" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c60-dropoff",
      family: "G10",
      title: "Eastside Drop-Off",
      kind: "Functional text · 10.RI",
      blurb: "Hours, accepted items and an electronics rule at a neighborhood recycling site.",
      level: 2,
      passage:
        "<p><strong>Eastside Recycling Drop-Off: What to Bring</strong></p>" +
        "<p><strong>Hours:</strong> " + N(1) + "Saturdays, 8 a.m. to noon, behind the community center. " +
        "<strong>Accepted:</strong> " + N(2) + "Rinsed cans, glass jars, flattened cardboard, and plastics marked 1 or 2. " +
        "<strong>Not accepted:</strong> " + N(3) + "Plastic bags, foam cups, and batteries. " +
        "<strong>Electronics:</strong> " + N(4) + "Old phones and laptops are collected only on the first Saturday of each month. " +
        N(5) + "Please erase personal data first. " +
        "<strong>Tip:</strong> " + N(6) + "Sort items at home to keep the line moving.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the Eastside drop-off notice?",
          choices: [
            { letter: "A", text: "It argues that everyone should recycle more." },
            { letter: "B", text: "It explains when the site is open and what it takes." },
            { letter: "C", text: "It describes how cardboard is turned into paper." },
            { letter: "D", text: "It lists the workers at the community center." }
          ],
          correct: "B"
        },
        {
          id: "laptop",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.2",
          stem: "A resident wants to drop off an old laptop at Eastside. According to the notice, the resident should —",
          choices: [
            { letter: "A", text: "bring it any Saturday morning" },
            { letter: "B", text: "put it in a plastic bag first" },
            { letter: "C", text: "leave it behind the center at night" },
            { letter: "D", text: "come on the first Saturday after erasing data" }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The notice places Not accepted right after Accepted mainly to —",
          choices: [
            { letter: "A", text: "help readers compare allowed and banned items" },
            { letter: "B", text: "show which items are most valuable" },
            { letter: "C", text: "explain why batteries are dangerous" },
            { letter: "D", text: "list items in alphabetical order" }
          ],
          correct: "A"
        },
        {
          id: "tip",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The tip in sentence 6 of the Eastside notice is mainly meant to —",
          choices: [
            { letter: "A", text: "warn residents about fines" },
            { letter: "B", text: "explain how plastics are numbered" },
            { letter: "C", text: "make the drop-off quicker for everyone" },
            { letter: "D", text: "advertise the community center" }
          ],
          correct: "C"
        },
        {
          id: "recycling",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word recycling begins with re-, as in reuse and return, and contains cycle. Based on these parts, recycling most nearly means —",
          choices: [
            { letter: "A", text: "throwing materials away for good" },
            { letter: "B", text: "sending materials through use again" },
            { letter: "C", text: "riding a bicycle to the drop-off" },
            { letter: "D", text: "counting items before sorting them" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-ri-c60-morningtrain",
      family: "G10",
      title: "Bring Back the Morning Train",
      kind: "Argument · 10.RI",
      blurb: "A letter to the editor makes the case for one passenger train at the old Carver Falls depot.",
      level: 3,
      passage:
        "<p>" + N(1) + "Carver Falls still has its brick depot, but no passenger train has stopped there since 1979. " +
        N(2) + "The county should restore one morning train to the city; it would cost less than widening Route 9, by the transit board's own estimate. " +
        N(3) + "Commuters could read or rest instead of sitting in traffic. " +
        N(4) + "Some neighbors argue that too few people would ride. " +
        N(5) + "Yet the last new bus line to the city filled within a month. " +
        N(6) + "A town that kept its depot was never truly finished with trains.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which sentence best states the central claim of the letter about the Carver Falls depot?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 2" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "C"
        },
        {
          id: "rebut",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail does the writer use to answer the neighbors' worry that too few people would ride?",
          choices: [
            { letter: "A", text: "A new bus line to the city filled within a month." },
            { letter: "B", text: "The depot is built of brick." },
            { letter: "C", text: "No train has stopped since 1979." },
            { letter: "D", text: "Commuters could rest on the train." }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "The writer includes the neighbors' view in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "show that the writer has changed sides" },
            { letter: "B", text: "prove that the depot should be torn down" },
            { letter: "C", text: "introduce a new topic about buses" },
            { letter: "D", text: "address a likely objection before rebutting it" }
          ],
          correct: "D"
        },
        {
          id: "final",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The final sentence, A town that kept its depot was never truly finished with trains, is meant to —",
          choices: [
            { letter: "A", text: "give exact costs for the project" },
            { letter: "B", text: "appeal to the town's pride in its history" },
            { letter: "C", text: "admit that the plan may fail" },
            { letter: "D", text: "describe the depot's architecture" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The tone of the Carver Falls letter is best described as —",
          choices: [
            { letter: "A", text: "bitter and hopeless" },
            { letter: "B", text: "uncertain and apologetic" },
            { letter: "C", text: "confident and hopeful" },
            { letter: "D", text: "neutral and detached" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rv-c60-montage",
      family: "G10",
      title: "The Year in Two Minutes",
      kind: "Vocabulary · 10.RV",
      blurb: "Priya edits a whole school year of club footage into one two-minute montage.",
      level: 1,
      passage:
        "<p>" + N(1) + "For the club's end-of-year video, Priya wanted a <strong>montage</strong>, a fast series of short clips that showed the whole year in two minutes. " +
        N(2) + "First she had to sort through hours of <strong>raw</strong> footage that no one had edited. " +
        N(3) + "The work was <strong>tedious</strong>; she watched the same dull hallway shots again and again. " +
        N(4) + "Still, she was <strong>meticulous</strong>, checking every frame so that no classmate was left out. " +
        N(5) + "At the premiere, the audience laughed, cheered, and <strong>replayed</strong> it twice.</p>",
      claims: [
        {
          id: "montage",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Sentence 1 restates montage as —",
          choices: [
            { letter: "A", text: "a long interview with one student" },
            { letter: "B", text: "a poster for the club's video" },
            { letter: "C", text: "a speech given at the premiere" },
            { letter: "D", text: "a quick string of short clips" }
          ],
          correct: "D"
        },
        {
          id: "raw",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 2, the word raw most nearly means —",
          choices: [
            { letter: "A", text: "not yet edited" },
            { letter: "B", text: "not fully cooked" },
            { letter: "C", text: "painful to touch" },
            { letter: "D", text: "cold and windy" }
          ],
          correct: "A"
        },
        {
          id: "tedious",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which part of sentence 3 best shows the meaning of tedious as it describes Priya's editing?",
          choices: [
            { letter: "A", text: "For the club's end-of-year video" },
            { letter: "B", text: "the same dull hallway shots again and again" },
            { letter: "C", text: "so that no classmate was left out" },
            { letter: "D", text: "laughed, cheered, and replayed it" }
          ],
          correct: "B"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author chose meticulous rather than slow to describe Priya in sentence 4. Compared with slow, meticulous suggests she was —",
          choices: [
            { letter: "A", text: "lazy and unwilling to finish" },
            { letter: "B", text: "nervous about the premiere" },
            { letter: "C", text: "careful about every detail" },
            { letter: "D", text: "confused by the software" }
          ],
          correct: "C"
        },
        {
          id: "replayed",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word replayed in sentence 5 begins with re-, as in redo and rewrite. Based on this, replayed most nearly means —",
          choices: [
            { letter: "A", text: "played again" },
            { letter: "B", text: "played badly" },
            { letter: "C", text: "played first" },
            { letter: "D", text: "played quietly" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rv-c60-barnstormers",
      family: "G10",
      title: "The Barnstormers",
      kind: "Vocabulary · 10.RV",
      blurb: "Traveling stunt fliers who turned the airplane from a frightening machine into a ride.",
      level: 2,
      passage:
        "<p>" + N(1) + "In the years after the First World War, many pilots became <strong>barnstormers</strong>, traveling fliers who landed in farm fields and sold rides for a few dollars. " +
        N(2) + "Crowds were <strong>skeptical</strong> at first, doubting that the rickety planes would leave the ground. " +
        N(3) + "The pilots' stunts were <strong>audacious</strong>: walking on wings, hanging from ladders, looping low over barns. " +
        N(4) + "Such stunts were <strong>perilous</strong>, and accidents were common. " +
        N(5) + "Yet the shows were <strong>pivotal</strong>, turning a frightening machine into something ordinary people wanted to try.</p>",
      claims: [
        {
          id: "skeptical",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 2, the phrase that follows skeptical helps define it as —",
          choices: [
            { letter: "A", text: "thrilled" },
            { letter: "B", text: "doubtful" },
            { letter: "C", text: "frightened" },
            { letter: "D", text: "bored" }
          ],
          correct: "B"
        },
        {
          id: "barnstormer",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word barnstormers combines barn and storm. Based on these parts and sentence 1, a barnstormer is most nearly someone who —",
          choices: [
            { letter: "A", text: "builds barns that can survive storms" },
            { letter: "B", text: "studies weather over farmland" },
            { letter: "C", text: "sweeps into farm country to perform" },
            { letter: "D", text: "repairs airplanes inside barns" }
          ],
          correct: "C"
        },
        {
          id: "audacious",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author chose audacious rather than foolish to describe the stunts in sentence 3. Compared with foolish, audacious suggests the stunts were —",
          choices: [
            { letter: "A", text: "boldly daring, not simply unwise" },
            { letter: "B", text: "dull and easy to perform" },
            { letter: "C", text: "secret and hidden from crowds" },
            { letter: "D", text: "planned by someone else" }
          ],
          correct: "A"
        },
        {
          id: "pivotal",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 5, the word pivotal most nearly means —",
          choices: [
            { letter: "A", text: "spinning in circles" },
            { letter: "B", text: "costly to attend" },
            { letter: "C", text: "brief and forgettable" },
            { letter: "D", text: "key in bringing about change" }
          ],
          correct: "D"
        },
        {
          id: "perilous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which phrase in sentence 4 best helps a reader understand the word perilous as it describes the barnstormers' stunts?",
          choices: [
            { letter: "A", text: "Such stunts" },
            { letter: "B", text: "accidents were common" },
            { letter: "C", text: "walking on wings" },
            { letter: "D", text: "sold rides for a few dollars" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rv-c60-compost",
      family: "G10",
      title: "Compost Lessons",
      kind: "Vocabulary · 10.RV",
      blurb: "A dull-looking compost heap, a thermometer, and a teacher's lesson about what counts as waste.",
      level: 3,
      passage:
        "<p>" + N(1) + "The school garden's compost pile looked <strong>inert</strong>, a heap of brown leaves and peels that seemed to do nothing at all. " +
        N(2) + "But Mr. Okonkwo pushed a thermometer into its center, and it read 140 degrees. " +
        N(3) + "Billions of <strong>microbes</strong> were busy <strong>decomposing</strong> the scraps, breaking them down into dark, crumbly soil. " +
        N(4) + "\"Waste is <strong>relative</strong>,\" he said. " +
        N(5) + "\"A banana peel is garbage in a landfill and <strong>nourishment</strong> here.\"</p>",
      claims: [
        {
          id: "inert",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 1, the word inert most nearly means —",
          choices: [
            { letter: "A", text: "smelling strongly" },
            { letter: "B", text: "growing quickly" },
            { letter: "C", text: "showing no activity" },
            { letter: "D", text: "falling apart" }
          ],
          correct: "C"
        },
        {
          id: "decompose",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word decomposing contains de- (undo) and compose (put together). Based on these parts, decomposing in sentence 3 most nearly means —",
          choices: [
            { letter: "A", text: "breaking down into simpler parts" },
            { letter: "B", text: "writing music about nature" },
            { letter: "C", text: "building something new" },
            { letter: "D", text: "heating something slowly" }
          ],
          correct: "A"
        },
        {
          id: "relative",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Sentence 5 helps explain that relative in Mr. Okonkwo's remark in sentence 4 means —",
          choices: [
            { letter: "A", text: "belonging to the same family" },
            { letter: "B", text: "always harmful" },
            { letter: "C", text: "measured in degrees" },
            { letter: "D", text: "depending on the situation" }
          ],
          correct: "D"
        },
        {
          id: "nourishment",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "Mr. Okonkwo calls the banana peel nourishment rather than food. Compared with food, nourishment suggests something that —",
          choices: [
            { letter: "A", text: "tastes sweet and ripe" },
            { letter: "B", text: "helps living things grow" },
            { letter: "C", text: "must be cooked before use" },
            { letter: "D", text: "is sold at a store" }
          ],
          correct: "B"
        },
        {
          id: "microbes",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word microbes in sentence 3 begins with micro-, as in microscope. Based on this, microbes are —",
          choices: [
            { letter: "A", text: "large worms in the soil" },
            { letter: "B", text: "tools for measuring heat" },
            { letter: "C", text: "living things too small to see" },
            { letter: "D", text: "seeds planted in the garden" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-dsr-c60-phonecamera",
      family: "G10",
      title: "Phone or Camera?",
      kind: "Paired texts · 10.DSR",
      blurb: "A film club handout and a senior's blog post disagree about the gear a new filmmaker needs.",
      level: 1,
      passage:
        "<p><strong>Text 1 — From a film club handout</strong></p>" +
        "<p>" + N(1) + "You do not need an expensive camera to make a good movie. " +
        N(2) + "Today's phones shoot sharp video, and you always have one in your pocket. " +
        N(3) + "Learn to frame a shot and hold the phone steady first. " +
        N(4) + "Great stories matter more than great gear.</p>" +
        "<p><strong>Text 2 — A senior's post on the club blog</strong></p>" +
        "<p>" + N(5) + "Phones are perfect for practice, but they struggle in dim light, and their tiny microphones catch every gust of wind. " +
        N(6) + "When our club borrowed a real camera and a separate mic, our festival film finally sounded professional. " +
        N(7) + "Start cheap, then upgrade what matters most.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do the film club handout and the senior's blog post agree?",
          choices: [
            { letter: "A", text: "Phones are useful for beginning filmmakers." },
            { letter: "B", text: "Microphones matter more than stories." },
            { letter: "C", text: "Every club should buy a real camera." },
            { letter: "D", text: "Festival films must be shot at night." }
          ],
          correct: "A"
        },
        {
          id: "plan",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Using both texts, what is the most sensible plan for a new film club member?",
          choices: [
            { letter: "A", text: "Wait to film until the club buys gear." },
            { letter: "B", text: "Shoot only in dim light to practice." },
            { letter: "C", text: "Practice on a phone, then upgrade sound later." },
            { letter: "D", text: "Ignore framing and focus on the camera." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which statement best describes a key difference between the handout and the blog post?",
          choices: [
            { letter: "A", text: "Text 1 says phones cannot shoot video." },
            { letter: "B", text: "Text 2 says stories do not matter." },
            { letter: "C", text: "Text 1 is written by a festival judge." },
            { letter: "D", text: "Text 2 names phone limits that Text 1 omits." }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "Select TWO sentences that together show why a film club might eventually want more than a phone.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "pocket",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence from the film club handout best supports the claim that phones are convenient?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 1" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-dsr-c60-olddepot",
      family: "G10",
      title: "The Millbrook Depot",
      kind: "Paired texts · 10.DSR",
      blurb: "A museum or a café? Two neighbors who love the same old train depot want different futures for it.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From a historical society proposal</strong></p>" +
        "<p>" + N(1) + "The Millbrook depot welcomed travelers for ninety years. " +
        N(2) + "We propose turning it into a railroad museum, with the original ticket window, benches, and telegraph desk restored. " +
        N(3) + "Children should be able to stand where their great-grandparents once waited for trains.</p>" +
        "<p><strong>Text 2 — A local business owner's comment</strong></p>" +
        "<p>" + N(4) + "I love the depot too, but a museum open two afternoons a week will not keep the roof repaired. " +
        N(5) + "A café inside could pay the bills and still display the ticket window and old photographs. " +
        N(6) + "People protect places they actually visit.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Both writers about the Millbrook depot would most likely agree that —",
          choices: [
            { letter: "A", text: "the depot should be torn down" },
            { letter: "B", text: "the depot's history is worth keeping" },
            { letter: "C", text: "a café would earn no money" },
            { letter: "D", text: "the roof is in perfect shape" }
          ],
          correct: "B"
        },
        {
          id: "together",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which idea becomes clear only when both texts about the Millbrook depot are read together?",
          choices: [
            { letter: "A", text: "The depot once had a telegraph desk." },
            { letter: "B", text: "Children enjoy visiting museums." },
            { letter: "C", text: "Cafés are more popular than trains." },
            { letter: "D", text: "The depot could honor its past and earn money." }
          ],
          correct: "D"
        },
        {
          id: "respond",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 respond to the museum plan in sentence 2 of Text 1?",
          choices: [
            { letter: "A", text: "It questions whether a museum could pay for upkeep." },
            { letter: "B", text: "It agrees that the depot should close." },
            { letter: "C", text: "It offers to donate the old photographs." },
            { letter: "D", text: "It argues that trains should return." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The two texts about the Millbrook depot differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "wants to sell the building to a developer" },
            { letter: "B", text: "gives exact costs for repairing the roof" },
            { letter: "C", text: "stresses history, while Text 2 stresses cost" },
            { letter: "D", text: "is written by a local business owner" }
          ],
          correct: "C"
        },
        {
          id: "visit",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The business owner includes sentence 6, People protect places they actually visit, mainly to —",
          choices: [
            { letter: "A", text: "argue that regular use keeps a building cared for" },
            { letter: "B", text: "complain that nobody visits Millbrook" },
            { letter: "C", text: "describe the café's menu" },
            { letter: "D", text: "praise the historical society's members" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-dsr-c60-bottledeposit",
      family: "G10",
      title: "A Dime a Bottle",
      kind: "Paired texts · 10.DSR",
      blurb: "A student editorial backs a bottle deposit; a grocery manager agrees, with a catch.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From a student council editorial</strong></p>" +
        "<p>" + N(1) + "Our state should add a ten-cent deposit to every bottle and can. " +
        N(2) + "Shoppers get the dime back when they return the container. " +
        N(3) + "States with deposits recover more bottles than states without them, and roadside litter drops. " +
        N(4) + "A dime is a small price for cleaner parks.</p>" +
        "<p><strong>Text 2 — From a grocery manager's letter</strong></p>" +
        "<p>" + N(5) + "Deposits do work, but stores must store, count, and ship mountains of sticky empties. " +
        N(6) + "My store has no room for return machines. " +
        N(7) + "If the state adopts the plan, it should fund central return centers instead of loading the cost onto small shops.</p>",
      claims: [
        {
          id: "views",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which statement best describes how the student council and the grocery manager view a bottle deposit?",
          choices: [
            { letter: "A", text: "Both oppose it as too costly for shoppers." },
            { letter: "B", text: "Text 1 doubts it works; Text 2 is sure it does." },
            { letter: "C", text: "Both see benefits, but Text 2 worries about the burden." },
            { letter: "D", text: "Neither writer mentions litter or cost." }
          ],
          correct: "C"
        },
        {
          id: "satisfy",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Based on both texts, which version of the deposit plan would most likely satisfy both writers?",
          choices: [
            { letter: "A", text: "a deposit law with state-funded return centers" },
            { letter: "B", text: "a deposit paid only by small shops" },
            { letter: "C", text: "a ban on all bottles and cans" },
            { letter: "D", text: "no deposit, but more litter crews" }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Select TWO sentences that together show both writers believe bottle deposits are effective.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "conclude",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "A reader who uses both texts about the ten-cent deposit could best conclude that —",
          choices: [
            { letter: "A", text: "students should run the return centers" },
            { letter: "B", text: "litter is not a real problem in parks" },
            { letter: "C", text: "grocery stores earn money from empties" },
            { letter: "D", text: "a sound idea can still be hard to carry out" }
          ],
          correct: "D"
        },
        {
          id: "mountains",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The grocery manager's phrase mountains of sticky empties in sentence 5 conveys a tone that is best described as —",
          choices: [
            { letter: "A", text: "cheerful" },
            { letter: "B", text: "exasperated" },
            { letter: "C", text: "fearful" },
            { letter: "D", text: "indifferent" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-dsr-c60-ardenflight",
      family: "G10",
      title: "Four Minutes Over Arden",
      kind: "Paired texts · 10.DSR",
      blurb: "A pilot's private diary and a town newspaper describe the same short flight in 1910.",
      level: 1,
      passage:
        "<p><strong>Text 1 — From a pilot's diary, 1910</strong></p>" +
        "<p>" + N(1) + "At last the wind dropped. " +
        N(2) + "I rose over the Arden fairgrounds, and the crowd shrank to a field of tiny hats. " +
        N(3) + "My hands shook the whole time, though no one below could tell. " +
        N(4) + "Four minutes in the air felt like an hour.</p>" +
        "<p><strong>Text 2 — From the Arden Gazette</strong></p>" +
        "<p>" + N(5) + "Yesterday a flying machine circled the fairgrounds for four minutes before a crowd of two thousand. " +
        N(6) + "The aviator, Miss Clara Vos, landed smoothly and waved. " +
        N(7) + "Witnesses called her fearless. " +
        N(8) + "Several horses bolted at the noise.</p>",
      claims: [
        {
          id: "both",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which detail appears in both the diary and the Arden Gazette report?",
          choices: [
            { letter: "A", text: "Horses ran from the noise." },
            { letter: "B", text: "The flight lasted four minutes." },
            { letter: "C", text: "The wind dropped before takeoff." },
            { letter: "D", text: "Two thousand people watched." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The diary differs from the Arden Gazette report mainly in that the diary —",
          choices: [
            { letter: "A", text: "gives the size of the crowd" },
            { letter: "B", text: "names the pilot in full" },
            { letter: "C", text: "describes the landing" },
            { letter: "D", text: "reveals the pilot's private fear" }
          ],
          correct: "D"
        },
        {
          id: "together",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which idea about Clara Vos is clearest only when the diary and the Gazette report are read together?",
          choices: [
            { letter: "A", text: "She seemed fearless to others but felt nervous." },
            { letter: "B", text: "She had flown many times before 1910." },
            { letter: "C", text: "She was angry about the frightened horses." },
            { letter: "D", text: "She planned to stop flying after Arden." }
          ],
          correct: "A"
        },
        {
          id: "hands",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 3 of the diary characterizes the pilot as someone who —",
          choices: [
            { letter: "A", text: "wants the crowd to see her fear" },
            { letter: "B", text: "is careless about safety" },
            { letter: "C", text: "hides her nerves while doing a hard task" },
            { letter: "D", text: "regrets agreeing to fly" }
          ],
          correct: "C"
        },
        {
          id: "hats",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 2, describing the crowd as a field of tiny hats mainly suggests —",
          choices: [
            { letter: "A", text: "how high above the crowd the pilot is" },
            { letter: "B", text: "that the crowd is dressed for rain" },
            { letter: "C", text: "that the fair is selling hats" },
            { letter: "D", text: "how angry the crowd has become" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
