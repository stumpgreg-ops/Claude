/* SOL Labyrinth — Grade 11 tiny packs (nights 1–8): ice skating, a mountain rescue team, glassblowing and a
 * woodworking shop. Literary, poetry, drama, informational, functional, argument, vocabulary and paired texts.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── ICE SKATING ───────────────────────── */
    {
      id: "g11-rl-c87-firstedge",
      family: "G11",
      title: "First Edge",
      kind: "Literary · 11.RL",
      blurb: "Hana's first time on the pond ice, with a grandfather who skates as if the ice remembers him.",
      level: 1,
      passage:
        "<p>" + N(1) + "Hana stepped onto the pond ice with both hands locked around her grandfather's sleeve. " +
        N(2) + "He had skated here as a boy, and he moved as if the ice remembered him. " +
        N(3) + "\"Stop watching your feet,\" he said. \"They already know where they are.\" " +
        N(4) + "She lifted her chin, wobbled, and glided three whole feet before sitting down hard. " +
        N(5) + "Her grandfather did not help her up right away; he waited, smiling, until she stood on her own." +
        "</p>",
      claims: [
        {
          id: "waits",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 5 reveals that Hana's grandfather —",
          choices: [
            { letter: "A", text: "is too tired from skating to lift her up" },
            { letter: "B", text: "wants Hana to find she can rise without help" },
            { letter: "C", text: "is embarrassed that Hana fell in front of others" },
            { letter: "D", text: "thinks Hana should stop skating for the day" }
          ],
          correct: "B"
        },
        {
          id: "remembered",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 2, saying the grandfather moved \"as if the ice remembered him\" suggests that he —",
          choices: [
            { letter: "A", text: "worries the pond has changed since his youth" },
            { letter: "B", text: "skates more carefully than Hana does" },
            { letter: "C", text: "still wears the skates he wore as a boy" },
            { letter: "D", text: "is completely at home on this familiar pond" }
          ],
          correct: "D"
        },
        {
          id: "locked",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 1, the word locked suggests that Hana's hold on her grandfather's sleeve is —",
          choices: [
            { letter: "A", text: "tight and nervous" },
            { letter: "B", text: "loose and playful" },
            { letter: "C", text: "brief and careless" },
            { letter: "D", text: "gentle and polite" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme do Hana's fall and her grandfather's patience in sentences 4 and 5 best support?",
          choices: [
            { letter: "A", text: "Experienced skaters rarely recall their own first lessons." },
            { letter: "B", text: "Family traditions matter more than individual success." },
            { letter: "C", text: "Learning a skill includes falling and getting up alone." },
            { letter: "D", text: "Winter sports are safest when practiced on frozen ponds." }
          ],
          correct: "C"
        },
        {
          id: "feet",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The grandfather's advice about Hana's feet in sentence 3 mainly serves to —",
          choices: [
            { letter: "A", text: "warn Hana that the ice is thin near the edges" },
            { letter: "B", text: "explain why her skates are laced too loosely" },
            { letter: "C", text: "tease Hana for being slower than he once was" },
            { letter: "D", text: "urge Hana to trust her body instead of looking down" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-ri-c87-resurfacer",
      family: "G11",
      title: "Between Sessions",
      kind: "Informational · 11.RI",
      blurb: "What the slow machine circling the rink is actually doing to the ice.",
      level: 2,
      passage:
        "<p>" + N(1) + "Between public skating sessions, a squat machine circles the rink in slow, overlapping loops. " +
        N(2) + "A blade underneath shaves off a thin layer of rutted ice, and an auger carries the shavings into a tank. " +
        N(3) + "Behind the blade, the machine washes the surface and then lays down a film of hot water. " +
        N(4) + "Hot water melts the top of the old ice slightly, so the new layer bonds tightly instead of sitting on top. " +
        N(5) + "Within minutes, the film freezes into a glassy sheet ready for the next skaters." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about the resurfacing machine?",
          choices: [
            { letter: "A", text: "Rinks close between sessions mainly to let skaters rest." },
            { letter: "B", text: "The machine shaves, washes, and refloods the ice to restore it." },
            { letter: "C", text: "Hot water freezes faster than cold water on an indoor rink." },
            { letter: "D", text: "Skaters cause most of the damage to the ice during sessions." }
          ],
          correct: "B"
        },
        {
          id: "hotwater",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to sentence 4, why does the resurfacing machine lay down hot water rather than cold?",
          choices: [
            { letter: "A", text: "Hot water melts the old surface slightly so the layers bond." },
            { letter: "B", text: "Hot water is cheaper for the rink to heat and to store." },
            { letter: "C", text: "Cold water would freeze inside the machine's storage tank." },
            { letter: "D", text: "Hot water hides the scratches that the blade leaves behind." }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 2 through 5 of 'Between Sessions'?",
          choices: [
            { letter: "A", text: "by comparing two different kinds of resurfacing machines" },
            { letter: "B", text: "by listing problems skaters face along with their solutions" },
            { letter: "C", text: "by moving from an opinion to the evidence that supports it" },
            { letter: "D", text: "by following the steps of the process in the order they occur" }
          ],
          correct: "D"
        },
        {
          id: "rutted",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word rutted most nearly describes ice that is —",
          choices: [
            { letter: "A", text: "freshly frozen" },
            { letter: "B", text: "scored with grooves" },
            { letter: "C", text: "melted into slush" },
            { letter: "D", text: "painted with lines" }
          ],
          correct: "B"
        },
        {
          id: "glassy",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The detail in sentence 5 that the hot-water film becomes a \"glassy sheet\" mainly emphasizes —",
          choices: [
            { letter: "A", text: "how dangerous the rink is right after resurfacing" },
            { letter: "B", text: "that the machine leaves a few rough patches behind" },
            { letter: "C", text: "how smooth the ice is once the process is complete" },
            { letter: "D", text: "that the rink's lights reflect brightly off the water" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rv-c87-judgestable",
      family: "G11",
      title: "The Judges' Table",
      kind: "Vocabulary · 11.RV",
      blurb: "A nearly perfect program, one doubtful landing, and a judge who will not be rushed.",
      level: 2,
      passage:
        "<p>" + N(1) + "At the regional figure skating competition, Teodora Lungu sat at the judges' table and kept a <strong>meticulous</strong> record on her scoring sheet, marking every jump, spin, and edge. " +
        N(2) + "The final skater's program was nearly <strong>impeccable</strong>, but one landing looked slightly short of a full rotation. " +
        N(3) + "Teodora asked for a video <strong>replay</strong> before she would commit to a score. " +
        N(4) + "Some spectators grumbled at the delay, yet she refused to be <strong>hasty</strong>; a skater's months of training deserved a careful judgment." +
        "</p>",
      claims: [
        {
          id: "impeccable",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the contrast after the word but shows that impeccable means —",
          choices: [
            { letter: "A", text: "risky and bold" },
            { letter: "B", text: "slow and graceful" },
            { letter: "C", text: "without any fault" },
            { letter: "D", text: "newly invented" }
          ],
          correct: "C"
        },
        {
          id: "hasty",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which phrase from sentence 4 best helps a reader understand the word hasty?",
          choices: [
            { letter: "A", text: "\"some spectators grumbled\"" },
            { letter: "B", text: "\"at the delay\"" },
            { letter: "C", text: "\"months of training\"" },
            { letter: "D", text: "\"a careful judgment\"" }
          ],
          correct: "D"
        },
        {
          id: "replay",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word replay in sentence 3 begins with the prefix re-, as do rewind and reheat. In all three words, the prefix re- signals —",
          choices: [
            { letter: "A", text: "doing something again" },
            { letter: "B", text: "doing something badly" },
            { letter: "C", text: "stopping an action" },
            { letter: "D", text: "acting ahead of time" }
          ],
          correct: "A"
        },
        {
          id: "meticulous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Teodora's marking of \"every jump, spin, and edge\" in sentence 1 shows that meticulous means —",
          choices: [
            { letter: "A", text: "kept hidden from the other judges" },
            { letter: "B", text: "showing great care with details" },
            { letter: "C", text: "written quickly and without thought" },
            { letter: "D", text: "shared with other judges" }
          ],
          correct: "B"
        },
        {
          id: "deserved",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The comment that a skater's months of training \"deserved a careful judgment\" in sentence 4 creates a tone that is —",
          choices: [
            { letter: "A", text: "respectful and serious" },
            { letter: "B", text: "bored and distant" },
            { letter: "C", text: "playful and teasing" },
            { letter: "D", text: "bitter and resentful" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rl-c87-lastskate",
      family: "G11",
      title: "Last Skate",
      kind: "Poetry · 11.RL",
      blurb: "After closing, a skater traces one more figure eight on ice that will be wiped clean by morning.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "After closing, the rink keeps every mark we made,<br>" +
        L(2) + "a thousand looping signatures cut white on gray.<br>" +
        L(3) + "The lights hum down. The boards forget our shouting.<br>" +
        L(4) + "Tomorrow the machine will smooth it all away,<br>" +
        L(5) + "and still I trace my small figure eight once more,<br>" +
        L(6) + "as if the ice could hold one line I meant to stay.<br>" +
        L(7) + "Not all that matters is the part that lasts;<br>" +
        L(8) + "some things are true because they slip away." +
        "</p>",
      claims: [
        {
          id: "signatures",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 2, describing the skate marks as \"looping signatures\" suggests that the marks —",
          choices: [
            { letter: "A", text: "are traces that record who was there" },
            { letter: "B", text: "were made by skaters who signed up early" },
            { letter: "C", text: "make the ice dangerous for later skaters" },
            { letter: "D", text: "spell out words in a kind of secret code" }
          ],
          correct: "A"
        },
        {
          id: "forget",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.1",
          stem: "In line 3, the statement that the boards \"forget our shouting\" is an example of —",
          choices: [
            { letter: "A", text: "hyperbole" },
            { letter: "B", text: "alliteration" },
            { letter: "C", text: "personification" },
            { letter: "D", text: "a simile" }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How do lines 7 and 8 change the direction of the poem 'Last Skate'?",
          choices: [
            { letter: "A", text: "They describe how the rink looks the next morning." },
            { letter: "B", text: "They shift from a scene to a reflection on its meaning." },
            { letter: "C", text: "They introduce a second speaker who disagrees." },
            { letter: "D", text: "They return to the shouting described in line 3." }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is best supported by the speaker's final figure eight in lines 5 through 8?",
          choices: [
            { letter: "A", text: "Practice is the only way to master a hard skill." },
            { letter: "B", text: "Rinks should stay open later for serious skaters." },
            { letter: "C", text: "Friends are easy to forget once a season ends." },
            { letter: "D", text: "A moment can matter even though it will not last." }
          ],
          correct: "D"
        },
        {
          id: "hum",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 3, the word hum suggests that the rink's lights are —",
          choices: [
            { letter: "A", text: "flashing in bright colors" },
            { letter: "B", text: "quietly buzzing as they dim" },
            { letter: "C", text: "growing louder and brighter" },
            { letter: "D", text: "playing music for the skaters" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-dsr-c87-rinkhours",
      family: "G11",
      title: "Shorter Rink Hours",
      kind: "Paired texts · 11.DSR",
      blurb: "A city notice cuts the late skating session; a skater who works until 7:30 writes back.",
      level: 2,
      passage:
        "<p><strong>Text 1 — City Parks Notice</strong></p>" +
        "<p>" + N(1) + "Starting in January, the Linden Park ice rink will close at 8 p.m. on weeknights instead of 10 p.m. " +
        N(2) + "Evening attendance has fallen by half. " +
        N(3) + "The shorter hours will save about $14,000, which the city will use to repair the cracked boards.</p>" +
        "<p><strong>Text 2 — Letter from a Skater</strong></p>" +
        "<p>" + N(4) + "My grocery shift ends at 7:30, so the late session is my only time to skate. " +
        N(5) + "The rink is emptier at night, but the skaters there have no other choice. " +
        N(6) + "Could the city close on Monday nights instead and keep the other evenings?" +
        "</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which fact about the Linden Park rink appears in both texts?",
          choices: [
            { letter: "A", text: "The rink's boards need repair." },
            { letter: "B", text: "Fewer people skate there at night." },
            { letter: "C", text: "The city will save $14,000." },
            { letter: "D", text: "The rink will close on Mondays." }
          ],
          correct: "B"
        },
        {
          id: "respond",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "The skater's letter responds to the attendance figure in sentence 2 mainly by —",
          choices: [
            { letter: "A", text: "arguing that the figure was calculated incorrectly" },
            { letter: "B", text: "agreeing that the rink should close earlier every night" },
            { letter: "C", text: "claiming that more people skate at night than by day" },
            { letter: "D", text: "pointing out who is left out despite the small crowds" }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the two texts about the Linden Park rink differ in focus?",
          choices: [
            { letter: "A", text: "Text 1 focuses on costs; Text 2 focuses on who is affected." },
            { letter: "B", text: "Text 1 focuses on safety; Text 2 focuses on the price of skates." },
            { letter: "C", text: "Text 1 focuses on new programs; Text 2 focuses on old rules." },
            { letter: "D", text: "Text 1 focuses on weekends; Text 2 focuses on the holidays." }
          ],
          correct: "A"
        },
        {
          id: "compromise",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A city official who read both the notice and the skater's letter could best conclude that —",
          choices: [
            { letter: "A", text: "the skater does not care about the cracked boards" },
            { letter: "B", text: "the rink should be closed for the entire season" },
            { letter: "C", text: "the skater would accept fewer late nights if some remained" },
            { letter: "D", text: "the notice already offers the Monday plan the skater wants" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The tone of the skater's question about Monday nights in sentence 6 is best described as —",
          choices: [
            { letter: "A", text: "sarcastic and dismissive" },
            { letter: "B", text: "constructive and hopeful" },
            { letter: "C", text: "fearful and urgent" },
            { letter: "D", text: "indifferent and flat" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-ri-c87-rinkrules",
      family: "G11",
      title: "Posted at the Rink Door",
      kind: "Functional text · 11.RI",
      blurb: "Direction, helmets, center ice and the resurfacing horn: the rules at Westbrook Ice Arena.",
      level: 1,
      passage:
        "<p><strong>Westbrook Ice Arena — Public Skate Rules</strong></p>" +
        "<p>" + N(1) + "<strong>Direction:</strong> All skaters move counterclockwise; the direction changes at the halfway whistle. " +
        N(2) + "<strong>Helmets:</strong> Skaters under twelve must wear a helmet, and loaner helmets are free at the rental desk. " +
        N(3) + "<strong>Center ice:</strong> The painted circle is reserved for skaters practicing spins. " +
        N(4) + "<strong>Resurfacing:</strong> When the horn sounds, everyone must exit through the nearest gate. " +
        N(5) + "Questions? Ask any guard in a red jacket." +
        "</p>",
      claims: [
        {
          id: "helmet",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the Westbrook rules, what must a nine-year-old skater do before stepping onto the ice?",
          choices: [
            { letter: "A", text: "Pay a fee to rent skates and a helmet" },
            { letter: "B", text: "Practice spins only inside the center circle" },
            { letter: "C", text: "Wear a helmet, which can be borrowed at no cost" },
            { letter: "D", text: "Skate clockwise until the halfway whistle" }
          ],
          correct: "C"
        },
        {
          id: "labels",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold labels such as Direction and Helmets help a reader of the rink rules by —",
          choices: [
            { letter: "A", text: "showing which rules are most often broken" },
            { letter: "B", text: "letting a skater quickly find the rule on a topic" },
            { letter: "C", text: "explaining the history behind each rule" },
            { letter: "D", text: "listing the rules in order of importance" }
          ],
          correct: "B"
        },
        {
          id: "horn",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence from the rink rules tells skaters what to do when the ice is about to be resurfaced?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The intended audience for the Westbrook Ice Arena rules is —",
          choices: [
            { letter: "A", text: "public skaters arriving at the rink" },
            { letter: "B", text: "coaches planning competitions" },
            { letter: "C", text: "workers who drive the resurfacer" },
            { letter: "D", text: "city officials setting the budget" }
          ],
          correct: "A"
        },
        {
          id: "reserved",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3 of the rink rules, the word reserved most nearly means —",
          choices: [
            { letter: "A", text: "quiet and shy" },
            { letter: "B", text: "set aside for one use" },
            { letter: "C", text: "closed for repair" },
            { letter: "D", text: "painted a bright color" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── A MOUNTAIN RESCUE TEAM ───────────────────────── */
    {
      id: "g11-rl-c87-baseradio",
      family: "G11",
      title: "Base Radio",
      kind: "Literary · 11.RL",
      blurb: "At the rescue base, Ama waits by the radio while Team Two searches above the tree line.",
      level: 2,
      passage:
        "<p>" + N(1) + "At the rescue base, Ama Mensah kept one hand on the radio and the other around a mug of tea she had forgotten. " +
        N(2) + "Somewhere above the tree line, Team Two was searching for a hiker who had missed his check-in. " +
        N(3) + "The radio crackled, then went quiet. " +
        N(4) + "Ama counted the silence the way her mentor had taught her: not as bad news, only as no news yet. " +
        N(5) + "When the voice finally came—\"Subject located, cold but talking\"—she let out a breath and noticed the tea had gone stone cold." +
        "</p>",
      claims: [
        {
          id: "counted",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 4, about how Ama counted the silence, reveals that she —",
          choices: [
            { letter: "A", text: "has learned to manage fear with a steady habit of mind" },
            { letter: "B", text: "believes Team Two has made a serious mistake" },
            { letter: "C", text: "is unsure how to operate the base radio" },
            { letter: "D", text: "disagrees with the advice her mentor gave her" }
          ],
          correct: "A"
        },
        {
          id: "tea",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The detail about the forgotten tea in sentences 1 and 5 mainly serves to —",
          choices: [
            { letter: "A", text: "show that the rescue base lacks basic supplies" },
            { letter: "B", text: "suggest that Ama is careless about her own health" },
            { letter: "C", text: "show how fully the wait has absorbed Ama's attention" },
            { letter: "D", text: "explain why Ama is cold while the hiker is warm" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the final sentence of 'Base Radio' resolve the tension built in sentences 3 and 4?",
          choices: [
            { letter: "A", text: "It reveals that Ama's mentor was wrong about silence." },
            { letter: "B", text: "It delivers the news and lets Ama notice the world again." },
            { letter: "C", text: "It shows Team Two returning to the base in the dark." },
            { letter: "D", text: "It explains why the hiker missed his check-in time." }
          ],
          correct: "B"
        },
        {
          id: "noyet",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "Ama's view of the silence as \"only as no news yet\" in sentence 4 creates a tone of —",
          choices: [
            { letter: "A", text: "careless cheer" },
            { letter: "B", text: "bitter frustration" },
            { letter: "C", text: "panicked dread" },
            { letter: "D", text: "controlled hope" }
          ],
          correct: "D"
        },
        {
          id: "crackled",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word crackled most nearly describes a radio sound that is —",
          choices: [
            { letter: "A", text: "smooth and musical" },
            { letter: "B", text: "deep and rumbling" },
            { letter: "C", text: "soft and whispering" },
            { letter: "D", text: "sharp and full of static" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-ri-c87-avalanchedogs",
      family: "G11",
      title: "Noses in the Snow",
      kind: "Informational · 11.RI",
      blurb: "Why a single trained dog can outpace twenty searchers on an avalanche field.",
      level: 1,
      passage:
        "<p>" + N(1) + "Avalanche rescue dogs can search a snowfield far faster than a line of people with probes. " +
        N(2) + "A trained dog can sweep an area the size of a football field in about thirty minutes, a task that might take twenty searchers four hours. " +
        N(3) + "The dogs work by scent, which rises through gaps in the packed snow. " +
        N(4) + "Because a buried person's chances fall sharply after the first fifteen minutes, that speed can save lives." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of 'Noses in the Snow'?",
          choices: [
            { letter: "A", text: "Rescue dogs are trained mainly to follow commands." },
            { letter: "B", text: "Avalanches happen most often on wide, open fields." },
            { letter: "C", text: "Searchers with probes are more careful than dogs." },
            { letter: "D", text: "Dogs' speed at finding buried people makes them vital." }
          ],
          correct: "D"
        },
        {
          id: "scent",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to sentence 3, how are avalanche dogs able to find a buried person?",
          choices: [
            { letter: "A", text: "They hear the person calling from under the snow." },
            { letter: "B", text: "They smell scent that rises through gaps in the snow." },
            { letter: "C", text: "They follow tracks the person left before the slide." },
            { letter: "D", text: "They dig wherever a searcher's probe hits something." }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 2, the author compares one dog with twenty searchers mainly to —",
          choices: [
            { letter: "A", text: "show how much time a dog saves in a search" },
            { letter: "B", text: "argue that human searchers should stay home" },
            { letter: "C", text: "explain how searchers train their dogs" },
            { letter: "D", text: "describe the size of a typical football field" }
          ],
          correct: "A"
        },
        {
          id: "fifteen",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The detail about the first fifteen minutes in sentence 4 is included mainly to —",
          choices: [
            { letter: "A", text: "warn hikers to avoid snowfields entirely" },
            { letter: "B", text: "tell how long a dog can work before resting" },
            { letter: "C", text: "explain why the dogs' speed matters so much" },
            { letter: "D", text: "show that probes are useless after a short time" }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author's attitude toward avalanche rescue dogs is best described as —",
          choices: [
            { letter: "A", text: "doubtful" },
            { letter: "B", text: "amused" },
            { letter: "C", text: "admiring" },
            { letter: "D", text: "worried" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c87-ridgecall",
      family: "G11",
      title: "The Ridge Call",
      kind: "Drama · 11.RL",
      blurb: "Two rescuers in a hut at dusk disagree about climbing into the wind.",
      level: 3,
      passage:
        "<p><em>A rescue hut at dusk. Wind rattles the window. MARCO studies a map; JUN laces his boots.</em></p>" +
        "<p><strong>JUN:</strong> " + N(1) + "The climbers are two hours above the ridge. " +
        N(2) + "If we leave now, we reach them by dark.</p>" +
        "<p><strong>MARCO:</strong> " + N(3) + "If we leave now, we climb into that wind with tired legs and no visibility.</p>" +
        "<p><strong>JUN:</strong> " + N(4) + "So we sit here and listen to it?</p>" +
        "<p><strong>MARCO:</strong> <em>(folding the map slowly)</em> " + N(5) + "We sit here for one hour, until the front passes. " +
        N(6) + "A rescuer who falls becomes the second rescue.</p>" +
        "<p><em>JUN stops lacing, then sits.</em></p>",
      claims: [
        {
          id: "marco",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "In 'The Ridge Call,' Marco is best described as —",
          choices: [
            { letter: "A", text: "cautious because he weighs the risk to his own team" },
            { letter: "B", text: "unwilling to help climbers he does not know" },
            { letter: "C", text: "unsure how to read the map in front of him" },
            { letter: "D", text: "jealous that Jun wants to lead the rescue" }
          ],
          correct: "A"
        },
        {
          id: "echo",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Marco repeats Jun's words \"If we leave now\" in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "mock Jun in front of the other rescuers" },
            { letter: "B", text: "show that he could not hear Jun over the wind" },
            { letter: "C", text: "agree with Jun's plan before adding a change" },
            { letter: "D", text: "turn Jun's plan around to reveal its danger" }
          ],
          correct: "D"
        },
        {
          id: "listen",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "In sentence 4, Jun's question about sitting and listening to the wind suggests that he feels —",
          choices: [
            { letter: "A", text: "relieved" },
            { letter: "B", text: "impatient" },
            { letter: "C", text: "confused" },
            { letter: "D", text: "frightened" }
          ],
          correct: "B"
        },
        {
          id: "sits",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "The final stage direction, in which Jun stops lacing and sits, resolves the scene by showing that —",
          choices: [
            { letter: "A", text: "Jun is too tired to argue any longer" },
            { letter: "B", text: "the climbers have reached safety alone" },
            { letter: "C", text: "Jun has accepted Marco's reasoning" },
            { letter: "D", text: "Marco has changed his mind about waiting" }
          ],
          correct: "C"
        },
        {
          id: "secondrescue",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Marco's statement in sentence 6 that a fallen rescuer \"becomes the second rescue\" emphasizes that —",
          choices: [
            { letter: "A", text: "rescuers are trained to fall safely on ridges" },
            { letter: "B", text: "an injured rescuer would only add to the emergency" },
            { letter: "C", text: "the team usually needs two trips to finish a rescue" },
            { letter: "D", text: "Jun has already made one mistake that day" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-ri-c87-equipvolunteers",
      family: "G11",
      title: "Equip the Volunteers",
      kind: "Argument · 11.RI",
      blurb: "A letter argues that the county, not bake sales, should pay for its rescue team's gear.",
      level: 3,
      passage:
        "<p>" + N(1) + "Our county's mountain rescue team answered sixty-one calls last year, and every member was an unpaid volunteer. " +
        N(2) + "Yet the team still buys its own radios, ropes, and avalanche beacons through bake sales and raffles. " +
        N(3) + "Some commissioners argue that hikers who get lost should bear the cost. " +
        N(4) + "But a rescue budget cannot wait for a lecture on responsibility; injured hikers need help first. " +
        N(5) + "A county that markets its trails to tourists should equip the people who bring those tourists home." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement best expresses the writer's central claim in 'Equip the Volunteers'?",
          choices: [
            { letter: "A", text: "Lost hikers should pay for their own rescues." },
            { letter: "B", text: "The county should pay for the team's equipment." },
            { letter: "C", text: "Bake sales are the best way to raise rescue funds." },
            { letter: "D", text: "Tourists should stop hiking on the county's trails." }
          ],
          correct: "B"
        },
        {
          id: "counter",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The writer includes the commissioners' view in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "show that the commissioners have already agreed" },
            { letter: "B", text: "prove that most hikers who get lost are careless" },
            { letter: "C", text: "raise an opposing argument in order to reject it" },
            { letter: "D", text: "explain how the cost of a rescue is calculated" }
          ],
          correct: "C"
        },
        {
          id: "tourists",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Sentence 5, about marketing trails to tourists, suggests that the writer believes the county —",
          choices: [
            { letter: "A", text: "should stop advertising its trails to visitors" },
            { letter: "B", text: "earns nothing from the tourists who hike there" },
            { letter: "C", text: "already spends too much on rescue equipment" },
            { letter: "D", text: "owes the team support because it profits from hikers" }
          ],
          correct: "D"
        },
        {
          id: "bakesales",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "The detail about bake sales and raffles in sentence 2 mainly serves to —",
          choices: [
            { letter: "A", text: "highlight how poorly the team's serious work is funded" },
            { letter: "B", text: "show that the community enjoys supporting the team" },
            { letter: "C", text: "suggest that the team should hold more events" },
            { letter: "D", text: "explain where the team stores its equipment" }
          ],
          correct: "A"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the writer of 'Equip the Volunteers' develop the argument across sentences 1 through 5?",
          choices: [
            { letter: "A", text: "by telling one rescue story from start to finish" },
            { letter: "B", text: "by comparing the team with teams in other states" },
            { letter: "C", text: "by listing the team's gear from cheapest to costliest" },
            { letter: "D", text: "by giving facts, answering an objection, then appealing" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-dsr-c87-sorrelpeak",
      family: "G11",
      title: "Lost Near Sorrel Peak",
      kind: "Paired texts · 11.DSR",
      blurb: "A hiker's blog post and the rescue team's incident summary describe the same afternoon.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Hiker's Blog Post</strong></p>" +
        "<p>" + N(1) + "I thought my phone's map app was all the planning I needed. " +
        N(2) + "When the battery died near Sorrel Peak, the trail vanished into fog. " +
        N(3) + "The rescue team found me in three hours, and nobody made me feel foolish. " +
        N(4) + "My new rule: paper map, always.</p>" +
        "<p><strong>Text 2 — Rescue Team Incident Summary</strong></p>" +
        "<p>" + N(5) + "Subject, age 24, reported overdue at 4:10 p.m. near Sorrel Peak. " +
        N(6) + "Phone battery failed; subject carried no map, compass, or headlamp. " +
        N(7) + "Located at 7:05 p.m., mildly chilled and uninjured. " +
        N(8) + "This is the team's ninth call this year involving a dead phone." +
        "</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail about the Sorrel Peak rescue appears in both texts?",
          choices: [
            { letter: "A", text: "The hiker had no headlamp." },
            { letter: "B", text: "The hiker felt foolish afterward." },
            { letter: "C", text: "The hiker's phone battery failed." },
            { letter: "D", text: "The team had eight earlier calls like it." }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the hiker's blog post, the tone of the Sorrel Peak incident summary is more —",
          choices: [
            { letter: "A", text: "grateful and personal" },
            { letter: "B", text: "impersonal and factual" },
            { letter: "C", text: "angry and accusing" },
            { letter: "D", text: "humorous and relaxed" }
          ],
          correct: "B"
        },
        {
          id: "ninth",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Sentence 8 of the incident summary suggests that the hiker's new rule in sentence 4 is —",
          choices: [
            { letter: "A", text: "a lesson many other hikers also need to learn" },
            { letter: "B", text: "a rule the rescue team plans to make into law" },
            { letter: "C", text: "unneeded because phones rarely fail on trails" },
            { letter: "D", text: "a joke that the hiker does not really mean" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the two Sorrel Peak texts differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 warns about fog; Text 2 praises the hiker's planning." },
            { letter: "B", text: "Text 1 asks for donations; Text 2 explains team training." },
            { letter: "C", text: "Text 1 describes the team; Text 2 describes the trail." },
            { letter: "D", text: "Text 1 reflects on a lesson; Text 2 records the facts." }
          ],
          correct: "D"
        },
        {
          id: "phrases",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The incident summary uses clipped phrases such as \"Located at 7:05 p.m.\" in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "hide details the team would rather not share" },
            { letter: "B", text: "report information quickly and without opinion" },
            { letter: "C", text: "make the rescue sound more dramatic than it was" },
            { letter: "D", text: "imitate the casual voice of the blog post" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rv-c87-beforesearch",
      family: "G11",
      title: "Before the Search",
      kind: "Vocabulary · 11.RV",
      blurb: "The Granite Valley rescue team's routine before anyone heads up the mountain.",
      level: 1,
      passage:
        "<p>" + N(1) + "Before every search, the Granite Valley rescue team holds a short <strong>briefing</strong> to review the map and the weather. " +
        N(2) + "Each member checks that the ropes are <strong>intact</strong>, with no frayed spots that could fail under weight. " +
        N(3) + "The team leader assigns a <strong>route</strong> to each pair of searchers. " +
        N(4) + "Nobody leaves until every radio has been tested, because one silent radio can leave a team <strong>stranded</strong> without help. " +
        N(5) + "The routine is <strong>repetitive</strong>, but it works." +
        "</p>",
      claims: [
        {
          id: "intact",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word intact in sentence 2 begins with the prefix in-, meaning not, and comes from a Latin root meaning touched. Intact most nearly means —",
          choices: [
            { letter: "A", text: "tied in a tight knot" },
            { letter: "B", text: "whole and undamaged" },
            { letter: "C", text: "newly purchased" },
            { letter: "D", text: "stored indoors" }
          ],
          correct: "B"
        },
        {
          id: "intactclue",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which phrase from sentence 2 best helps a reader understand the word intact?",
          choices: [
            { letter: "A", text: "\"each member checks\"" },
            { letter: "B", text: "\"the ropes are\"" },
            { letter: "C", text: "\"with no frayed spots\"" },
            { letter: "D", text: "\"under weight\"" }
          ],
          correct: "C"
        },
        {
          id: "stranded",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, the phrase \"without help\" shows that stranded means —",
          choices: [
            { letter: "A", text: "moving faster than planned" },
            { letter: "B", text: "lost in a large crowd" },
            { letter: "C", text: "angry at a team leader" },
            { letter: "D", text: "stuck with no way to get aid" }
          ],
          correct: "D"
        },
        {
          id: "repetitive",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word repetitive in sentence 5 shares a root with repeat. Based on this relationship, the Granite Valley team's routine is one that —",
          choices: [
            { letter: "A", text: "is done the same way each time" },
            { letter: "B", text: "changes for every new search" },
            { letter: "C", text: "takes only a few seconds" },
            { letter: "D", text: "was invented quite recently" }
          ],
          correct: "A"
        },
        {
          id: "briefing",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, the word briefing most nearly refers to —",
          choices: [
            { letter: "A", text: "a short meeting to share needed information" },
            { letter: "B", text: "a written report filed after a rescue" },
            { letter: "C", text: "a pack of gear carried by the leader" },
            { letter: "D", text: "a test of each radio's battery" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── GLASSBLOWING ───────────────────────── */
    {
      id: "g11-rl-c87-firstgather",
      family: "G11",
      title: "The First Gather",
      kind: "Literary · 11.RL",
      blurb: "Mateo pulls his first gather of molten glass from the furnace and learns to keep turning.",
      level: 1,
      passage:
        "<p>" + N(1) + "Mateo dipped the long steel pipe into the furnace and turned it slowly, the way Ms. Okonkwo had shown him. " +
        N(2) + "A glowing blob of glass wrapped around the tip like honey on a spoon. " +
        N(3) + "\"Keep turning,\" she said, \"or gravity will make the shape for you.\" " +
        N(4) + "His arms ached, but he kept the pipe rolling across the steel rails of the bench. " +
        N(5) + "When the glass cooled to a dull orange, it was lopsided, and it was his." +
        "</p>",
      claims: [
        {
          id: "honey",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 2, comparing the glass to \"honey on a spoon\" mainly emphasizes that the hot glass is —",
          choices: [
            { letter: "A", text: "sweet-smelling" },
            { letter: "B", text: "thick and slow-moving" },
            { letter: "C", text: "dangerously sharp" },
            { letter: "D", text: "nearly transparent" }
          ],
          correct: "B"
        },
        {
          id: "gravity",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Ms. Okonkwo's warning in sentence 3 that gravity \"will make the shape for you\" means that if Mateo stops turning, the glass will —",
          choices: [
            { letter: "A", text: "cool too quickly to shape" },
            { letter: "B", text: "break off the end of the pipe" },
            { letter: "C", text: "turn a much darker color" },
            { letter: "D", text: "droop into a shape he did not choose" }
          ],
          correct: "D"
        },
        {
          id: "his",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The final sentence of 'The First Gather' resolves the story by showing that Mateo —",
          choices: [
            { letter: "A", text: "takes pride in a piece even though it is flawed" },
            { letter: "B", text: "plans to throw the lopsided glass away" },
            { letter: "C", text: "blames Ms. Okonkwo for the uneven shape" },
            { letter: "D", text: "has decided glassblowing is too difficult" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does Mateo's experience at the glass furnace best support?",
          choices: [
            { letter: "A", text: "Talent matters far more than practice." },
            { letter: "B", text: "Teachers should let students learn alone." },
            { letter: "C", text: "A first effort can be meaningful despite flaws." },
            { letter: "D", text: "Craftwork has value only when it is perfect." }
          ],
          correct: "C"
        },
        {
          id: "lopsided",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word lopsided, set beside the pride in \"it was his,\" most nearly means —",
          choices: [
            { letter: "A", text: "uneven in shape" },
            { letter: "B", text: "brightly colored" },
            { letter: "C", text: "too heavy to lift" },
            { letter: "D", text: "broken in half" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-c87-annealing",
      family: "G11",
      title: "Slow Cooling",
      kind: "Informational · 11.RI",
      blurb: "Why a finished glass vase spends the night in a special oven instead of on a shelf.",
      level: 2,
      passage:
        "<p>" + N(1) + "A glass vase taken straight from a glassblower's bench and set on a cool shelf might crack overnight. " +
        N(2) + "The outside of the glass cools and shrinks faster than the inside, and the strain between the layers builds until the piece splits. " +
        N(3) + "To prevent this, glassblowers place finished work in an annealer, an oven that lowers the temperature over many hours. " +
        N(4) + "This gradual cooling lets the whole piece settle evenly, so the vase survives." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main idea of 'Slow Cooling'?",
          choices: [
            { letter: "A", text: "Glass vases are too fragile to sell." },
            { letter: "B", text: "Annealers prevent cracks by cooling glass slowly." },
            { letter: "C", text: "Glassblowers work faster than other artists." },
            { letter: "D", text: "The inside of glass is stronger than the outside." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches the structure of 'Slow Cooling'?",
          choices: [
            { letter: "A", text: "a list of tools in order of size" },
            { letter: "B", text: "a comparison of two glass artists" },
            { letter: "C", text: "a problem followed by its solution" },
            { letter: "D", text: "a story told from start to finish" }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to sentence 2, why might a vase crack if it cools too fast?",
          choices: [
            { letter: "A", text: "Dust on the shelf scratches the glass." },
            { letter: "B", text: "The furnace left bubbles inside the glass." },
            { letter: "C", text: "The vase was blown with too little glass." },
            { letter: "D", text: "Its outer and inner layers shrink unevenly." }
          ],
          correct: "D"
        },
        {
          id: "opening",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author begins with the image of a vase cracking overnight in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "present the danger before explaining how to avoid it" },
            { letter: "B", text: "suggest that most glassblowers are careless" },
            { letter: "C", text: "describe a famous vase that was once lost" },
            { letter: "D", text: "argue that blown glass should not be sold" }
          ],
          correct: "A"
        },
        {
          id: "annealer",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which words in sentence 3 help define the word annealer?",
          choices: [
            { letter: "A", text: "\"to prevent this, glassblowers\"" },
            { letter: "B", text: "\"finished work in\"" },
            { letter: "C", text: "\"an oven that lowers the temperature\"" },
            { letter: "D", text: "\"glassblowers place finished work\"" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c87-breath",
      family: "G11",
      title: "Breath",
      kind: "Poetry · 11.RL",
      blurb: "A speaker watches an uncle shape glass with patience the speaker has not yet learned.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My uncle shapes the glass with only breath,<br>" +
        L(2) + "a single, patient push into the pipe,<br>" +
        L(3) + "and the orange bead swells like a small sun rising.<br>" +
        L(4) + "He says the glass will tell him when it's ready.<br>" +
        L(5) + "I hear nothing but the furnace's low roar,<br>" +
        L(6) + "but he listens with his hands, and the sun grows round<br>" +
        L(7) + "and cools into a thing his breath once held." +
        "</p>",
      claims: [
        {
          id: "sun",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 3, the simile comparing the bead of glass to \"a small sun rising\" mainly emphasizes its —",
          choices: [
            { letter: "A", text: "glow and steady growth" },
            { letter: "B", text: "danger to the uncle's hands" },
            { letter: "C", text: "cold and distant color" },
            { letter: "D", text: "sudden, violent explosion" }
          ],
          correct: "A"
        },
        {
          id: "hands",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 6, the phrase \"he listens with his hands\" suggests that the uncle —",
          choices: [
            { letter: "A", text: "cannot hear well over the furnace" },
            { letter: "B", text: "senses the glass through touch and experience" },
            { letter: "C", text: "is ignoring advice from the speaker" },
            { letter: "D", text: "covers his ears while he works" }
          ],
          correct: "B"
        },
        {
          id: "ready",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Line 4, in which the uncle says the glass \"will tell him when it's ready,\" implies that he —",
          choices: [
            { letter: "A", text: "expects the speaker to warn him" },
            { letter: "B", text: "is unsure how glassblowing works" },
            { letter: "C", text: "talks to the glass to calm himself" },
            { letter: "D", text: "watches the glass rather than rushing it" }
          ],
          correct: "D"
        },
        {
          id: "speaker",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The contrast between the speaker in line 5 and the uncle in line 6 shows that the speaker —",
          choices: [
            { letter: "A", text: "is louder than the furnace" },
            { letter: "B", text: "dislikes the noise of the studio" },
            { letter: "C", text: "cannot yet sense what the uncle senses" },
            { letter: "D", text: "wants to leave the workshop early" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which idea is most clearly supported by the poem 'Breath' as a whole?",
          choices: [
            { letter: "A", text: "Glass is the hardest material to shape." },
            { letter: "B", text: "Mastering a craft takes patience and attention." },
            { letter: "C", text: "Uncles make the best teachers for young artists." },
            { letter: "D", text: "Noise makes it hard to do any careful work." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-dsr-c87-emberglass",
      family: "G11",
      title: "Demo Day at Ember Glass",
      kind: "Paired texts · 11.DSR",
      blurb: "A studio flyer announces a free demonstration; a visitor's journal describes what it felt like.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Ember Glass Studio Flyer</strong></p>" +
        "<p>" + N(1) + "Join us Saturday for a free glassblowing demonstration at Ember Glass Studio. " +
        N(2) + "Watch our artists turn molten glass into bowls and ornaments from 10 a.m. to noon. " +
        N(3) + "For safety, visitors must stay behind the yellow line, at least six feet from the furnace.</p>" +
        "<p><strong>Text 2 — A Visitor's Journal</strong></p>" +
        "<p>" + N(4) + "The heat reached me even behind the yellow line, like standing near an open oven. " +
        N(5) + "An artist named Priyanka shaped a blue bowl in under ten minutes. " +
        N(6) + "I had expected a show, but it felt more like watching someone think out loud with her hands." +
        "</p>",
      claims: [
        {
          id: "line",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail from the Ember Glass Studio flyer is confirmed by the visitor's journal?",
          choices: [
            { letter: "A", text: "The demonstration is free of charge." },
            { letter: "B", text: "Visitors stay behind a yellow line." },
            { letter: "C", text: "The artists make ornaments." },
            { letter: "D", text: "The event ends at noon." }
          ],
          correct: "B"
        },
        {
          id: "expected",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How does sentence 6 of the journal add to the flyer's description of the demonstration?",
          choices: [
            { letter: "A", text: "It corrects the flyer's starting time." },
            { letter: "B", text: "It complains that the event was too short." },
            { letter: "C", text: "It argues that the yellow line is unsafe." },
            { letter: "D", text: "It suggests the event felt thoughtful, not showy." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the two texts about Ember Glass Studio differ?",
          choices: [
            { letter: "A", text: "The flyer gives facts; the journal gives an impression." },
            { letter: "B", text: "The flyer praises Priyanka; the journal criticizes her." },
            { letter: "C", text: "The flyer describes heat; the journal describes prices." },
            { letter: "D", text: "The flyer is about bowls; the journal is about ornaments." }
          ],
          correct: "A"
        },
        {
          id: "flyerpurpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The primary purpose of the Ember Glass Studio flyer is to —",
          choices: [
            { letter: "A", text: "explain how glass is made from sand" },
            { letter: "B", text: "review a past demonstration" },
            { letter: "C", text: "invite people to a free event" },
            { letter: "D", text: "warn visitors away from the studio" }
          ],
          correct: "C"
        },
        {
          id: "oven",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In sentence 4, comparing the furnace's heat to standing near an open oven helps the reader understand —",
          choices: [
            { letter: "A", text: "that the studio also bakes food" },
            { letter: "B", text: "how intense the heat felt from a distance" },
            { letter: "C", text: "why the event lasted only two hours" },
            { letter: "D", text: "that the visitor stood much too close" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rv-c87-nightfurnace",
      family: "G11",
      title: "Night Shift at the Furnace",
      kind: "Vocabulary · 11.RV",
      blurb: "Ines works through the night to blow a bowl that will hold lamplight.",
      level: 3,
      passage:
        "<p>" + N(1) + "By midnight, the glass in the furnace's <strong>crucible</strong>, the heavy clay pot that holds the molten batch, glowed a fierce white. " +
        N(2) + "Ines gathered a ball and returned it to the heat whenever it grew too stiff, keeping it <strong>malleable</strong> enough to stretch. " +
        N(3) + "Her design called for a <strong>translucent</strong> bowl, one that would let lamplight through while hiding the table beneath it. " +
        N(4) + "It was <strong>arduous</strong> work, and by dawn her shoulders burned, but the bowl held the light exactly as she had imagined." +
        "</p>",
      claims: [
        {
          id: "translucent",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word translucent in sentence 3 begins with the prefix trans-, meaning through, as in transmit. Together with the root luc, meaning light, translucent describes something that —",
          choices: [
            { letter: "A", text: "blocks all light completely" },
            { letter: "B", text: "glows with its own heat" },
            { letter: "C", text: "lets some light pass through" },
            { letter: "D", text: "reflects light like a mirror" }
          ],
          correct: "C"
        },
        {
          id: "crucible",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, the phrase set off by commas after crucible shows that a crucible is —",
          choices: [
            { letter: "A", text: "a heavy pot that holds melted glass" },
            { letter: "B", text: "a sharp tool for cutting glass" },
            { letter: "C", text: "the hottest color of a flame" },
            { letter: "D", text: "a mold for shaping glass bowls" }
          ],
          correct: "A"
        },
        {
          id: "arduous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 4, the word arduous most nearly means —",
          choices: [
            { letter: "A", text: "artistic" },
            { letter: "B", text: "relaxing" },
            { letter: "C", text: "dangerous" },
            { letter: "D", text: "exhausting" }
          ],
          correct: "D"
        },
        {
          id: "malleable",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word malleable in sentence 2 ends with the suffix -able, as do bendable and washable. The suffix shows that malleable glass is glass that —",
          choices: [
            { letter: "A", text: "has already hardened" },
            { letter: "B", text: "can be shaped" },
            { letter: "C", text: "must be thrown away" },
            { letter: "D", text: "is too hot to touch" }
          ],
          correct: "B"
        },
        {
          id: "heldlight",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The final clause of sentence 4, \"the bowl held the light exactly as she had imagined,\" creates a tone of —",
          choices: [
            { letter: "A", text: "quiet satisfaction" },
            { letter: "B", text: "nervous doubt" },
            { letter: "C", text: "bitter regret" },
            { letter: "D", text: "careless humor" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rl-c87-thecrack",
      family: "G11",
      title: "The Crack",
      kind: "Literary · 11.RL",
      blurb: "Three weeks of work, one hairline crack, and Farida's surprising decision about the vase.",
      level: 3,
      passage:
        "<p>" + N(1) + "The vase came out of the annealer with a hairline crack running from lip to shoulder, thin as a thread of spider silk. " +
        N(2) + "Farida had spent three weeks on the pattern of gold swirls, and for a long moment she said nothing. " +
        N(3) + "Her apprentice reached for the scrap bin. " +
        N(4) + "\"Wait,\" Farida said, turning the vase toward the window so the crack caught the morning light. " +
        N(5) + "\"It's honest about how it was made.\" " +
        N(6) + "She set it on the shelf where customers would see it first." +
        "</p>",
      claims: [
        {
          id: "silence",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Farida's long silence in sentence 2 is best interpreted as —",
          choices: [
            { letter: "A", text: "anger at her apprentice's mistake" },
            { letter: "B", text: "boredom with a familiar problem" },
            { letter: "C", text: "relief that the work is finally over" },
            { letter: "D", text: "disappointment as she absorbs the damage" }
          ],
          correct: "D"
        },
        {
          id: "honest",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 5, Farida's use of the word honest suggests that she sees the crack as —",
          choices: [
            { letter: "A", text: "a truthful record of the vase's making" },
            { letter: "B", text: "a lie that should be hidden away" },
            { letter: "C", text: "proof that the apprentice made an error" },
            { letter: "D", text: "a flaw that only experts would notice" }
          ],
          correct: "A"
        },
        {
          id: "silk",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Comparing the crack to \"a thread of spider silk\" in sentence 1 emphasizes that the crack is —",
          choices: [
            { letter: "A", text: "spreading quickly" },
            { letter: "B", text: "shaped like a web" },
            { letter: "C", text: "extremely fine" },
            { letter: "D", text: "sticky to the touch" }
          ],
          correct: "C"
        },
        {
          id: "shelf",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the final sentence of 'The Crack' resolve the story?",
          choices: [
            { letter: "A", text: "It shows Farida hiding the flawed vase from customers." },
            { letter: "B", text: "It shows Farida displaying the vase, not discarding it." },
            { letter: "C", text: "It shows the apprentice repairing the crack with gold." },
            { letter: "D", text: "It shows Farida selling the vase at a lower price." }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does Farida's decision about the cracked vase most clearly develop?",
          choices: [
            { letter: "A", text: "Imperfections can give an object meaning." },
            { letter: "B", text: "Apprentices should never touch finished work." },
            { letter: "C", text: "Three weeks is too long to spend on one piece." },
            { letter: "D", text: "Customers prefer simple designs to fancy ones." }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── A WOODWORKING SHOP ───────────────────────── */
    {
      id: "g11-rl-c87-tightjoints",
      family: "G11",
      title: "Tight Joints",
      kind: "Literary · 11.RL",
      blurb: "Nadia's first dovetail joint has a gap, and Mr. Haddad has a box of second chances.",
      level: 2,
      passage:
        "<p>" + N(1) + "In the back of Mr. Haddad's woodshop, Nadia sawed her first dovetail joint, following the pencil lines as carefully as she could. " +
        N(2) + "When she tapped the two boards together, a gap opened wide enough to slip a coin through. " +
        N(3) + "She waited for a lecture. " +
        N(4) + "Instead, Mr. Haddad handed her a thin shaving of walnut and said, \"Every woodworker owns a box of these. " +
        N(5) + "We call them second chances.\" " +
        N(6) + "Nadia glued the sliver into the gap and sanded until she could barely find it." +
        "</p>",
      claims: [
        {
          id: "lecture",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Sentence 3, in which Nadia waits for a lecture, mainly serves to —",
          choices: [
            { letter: "A", text: "show that Nadia dislikes her teacher" },
            { letter: "B", text: "set up an expectation that the story then reverses" },
            { letter: "C", text: "explain why the joint has a gap in it" },
            { letter: "D", text: "suggest that Nadia is ready to quit the class" }
          ],
          correct: "B"
        },
        {
          id: "haddad",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Mr. Haddad's response in sentences 4 and 5 reveals that he —",
          choices: [
            { letter: "A", text: "wants Nadia to buy her own supplies" },
            { letter: "B", text: "is disappointed but hides his feelings" },
            { letter: "C", text: "expects Nadia to start over with new boards" },
            { letter: "D", text: "treats mistakes as a normal part of the craft" }
          ],
          correct: "D"
        },
        {
          id: "secondchances",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Calling the walnut shavings \"second chances\" in sentence 5 suggests that they —",
          choices: [
            { letter: "A", text: "let a woodworker fix an error instead of starting over" },
            { letter: "B", text: "are scraps left over from Mr. Haddad's own projects" },
            { letter: "C", text: "are handed out only to students who try twice" },
            { letter: "D", text: "cost twice as much as ordinary pieces of wood" }
          ],
          correct: "A"
        },
        {
          id: "end",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The final sentence of 'Tight Joints' resolves the story by showing that Nadia —",
          choices: [
            { letter: "A", text: "gives up on the dovetail and picks a simpler joint" },
            { letter: "B", text: "hides the mistake so Mr. Haddad will not see it" },
            { letter: "C", text: "uses Mr. Haddad's gift to correct her mistake" },
            { letter: "D", text: "decides to start her own box of shavings" }
          ],
          correct: "C"
        },
        {
          id: "dovetail",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The compound word dovetail in sentence 1 joins dove and tail. This word origin suggests that the joint is named for —",
          choices: [
            { letter: "A", text: "the fan shape of a bird's tail" },
            { letter: "B", text: "the soft color of a dove's feathers" },
            { letter: "C", text: "the way doves fly in pairs" },
            { letter: "D", text: "the speed of a bird in flight" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-c87-woodbreathes",
      family: "G11",
      title: "Wood That Breathes",
      kind: "Informational · 11.RI",
      blurb: "Why a well-built tabletop is fastened so that it can move.",
      level: 3,
      passage:
        "<p>" + N(1) + "A tabletop may look finished, but the wood in it never stops moving. " +
        N(2) + "Boards absorb moisture from humid summer air and swell across their width, then shrink as winter heating dries the room. " +
        N(3) + "A wide panel can change by a quarter inch over a year. " +
        N(4) + "Experienced woodworkers do not fight this movement; they design for it, fastening tops with slotted clips that let the boards slide. " +
        N(5) + "A table glued rigidly at every edge may split itself apart." +
        "</p>",
      claims: [
        {
          id: "title",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The title 'Wood That Breathes' mainly helps the reader understand that wood —",
          choices: [
            { letter: "A", text: "needs fresh air to stay healthy" },
            { letter: "B", text: "keeps changing as if it were alive" },
            { letter: "C", text: "makes a sound when it dries out" },
            { letter: "D", text: "should always be stored outdoors" }
          ],
          correct: "B"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author of 'Wood That Breathes' develop the discussion?",
          choices: [
            { letter: "A", text: "by comparing two kinds of wood used in tables" },
            { letter: "B", text: "by telling the story of one table's construction" },
            { letter: "C", text: "by listing tools from simplest to most complex" },
            { letter: "D", text: "by explaining a process, then how builders respond" }
          ],
          correct: "D"
        },
        {
          id: "clips",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to sentence 4, why do woodworkers fasten tabletops with slotted clips?",
          choices: [
            { letter: "A", text: "The clips allow the boards to move without cracking." },
            { letter: "B", text: "The clips are cheaper than glue and screws." },
            { letter: "C", text: "The clips keep moisture out of the wood." },
            { letter: "D", text: "The clips make the table easier to carry." }
          ],
          correct: "A"
        },
        {
          id: "believes",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Based on sentences 4 and 5 of 'Wood That Breathes,' the reader can conclude that the author believes —",
          choices: [
            { letter: "A", text: "glue should never be used in woodworking" },
            { letter: "B", text: "summer is the best season for building tables" },
            { letter: "C", text: "good design works with a material's nature" },
            { letter: "D", text: "most tables split within their first year" }
          ],
          correct: "C"
        },
        {
          id: "rigidly",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word rigidly in sentence 5 is formed by adding the suffix -ly to rigid. The suffix shows that rigidly describes —",
          choices: [
            { letter: "A", text: "what the table is made of" },
            { letter: "B", text: "where the table is placed" },
            { letter: "C", text: "how the table is glued" },
            { letter: "D", text: "when the table splits" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c87-openshop",
      family: "G11",
      title: "Open Shop Nights",
      kind: "Functional text · 11.RI",
      blurb: "The rules for using the Maple Street Community Woodshop on Tuesday and Thursday nights.",
      level: 2,
      passage:
        "<p><strong>Maple Street Community Woodshop — Open Shop Nights</strong></p>" +
        "<p>" + N(1) + "Open shop runs Tuesdays and Thursdays, 6–9 p.m. " +
        N(2) + "<strong>Before your first visit:</strong> complete the one-hour safety class, offered the first Saturday of each month. " +
        N(3) + "<strong>Bring:</strong> safety glasses and closed-toe shoes; aprons are provided. " +
        N(4) + "<strong>Table saw:</strong> may be used only when a shop monitor is present. " +
        N(5) + "Members who skip cleanup lose their next reserved bench time." +
        "</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The main purpose of the Maple Street woodshop notice is to —",
          choices: [
            { letter: "A", text: "persuade people to buy woodworking tools" },
            { letter: "B", text: "explain the requirements for using open shop" },
            { letter: "C", text: "describe the history of the community woodshop" },
            { letter: "D", text: "advertise a furniture sale on Saturdays" }
          ],
          correct: "B"
        },
        {
          id: "firstvisit",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to sentence 2, what must a new member do before attending an open shop night?",
          choices: [
            { letter: "A", text: "Buy an apron at the front desk" },
            { letter: "B", text: "Reserve a bench time online" },
            { letter: "C", text: "Find a monitor to run the table saw" },
            { letter: "D", text: "Take the one-hour safety class" }
          ],
          correct: "D"
        },
        {
          id: "cleanup",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence from the woodshop notice makes clear that the cleanup rule carries a penalty?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 1" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "A"
        },
        {
          id: "tablesaw",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The table saw rule in sentence 4 is most likely included because the table saw —",
          choices: [
            { letter: "A", text: "is the newest tool in the shop" },
            { letter: "B", text: "belongs to one of the monitors" },
            { letter: "C", text: "carries more risk than other tools" },
            { letter: "D", text: "is too loud to run without permission" }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The Maple Street notice is written mainly for —",
          choices: [
            { letter: "A", text: "furniture stores that sell lumber" },
            { letter: "B", text: "people who want to work in the shop" },
            { letter: "C", text: "safety inspectors from the city" },
            { letter: "D", text: "students in a high school class" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-dsr-c87-schoolshop",
      family: "G11",
      title: "The Future of Room 114",
      kind: "Paired texts · 11.DSR",
      blurb: "A student defends the school woodshop; the school board explains what keeping it would cost.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Student Op-Ed</strong></p>" +
        "<p>" + N(1) + "Our school's woodshop should stay open. " +
        N(2) + "Last spring, students built twelve benches for the town park, and many of us learned to measure, plan, and fix mistakes there. " +
        N(3) + "Those skills matter in any career, not just carpentry.</p>" +
        "<p><strong>Text 2 — School Board Note</strong></p>" +
        "<p>" + N(4) + "The board values the woodshop program, but its equipment is over thirty years old. " +
        N(5) + "Replacing the saws and dust system would cost about $60,000. " +
        N(6) + "The board will decide in May whether to repair the shop or turn the room into a computer lab." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea about the woodshop in Room 114 is supported by both texts?",
          choices: [
            { letter: "A", text: "The program has value for the school." },
            { letter: "B", text: "The equipment must be replaced soon." },
            { letter: "C", text: "The room should become a computer lab." },
            { letter: "D", text: "Students built benches last spring." }
          ],
          correct: "A"
        },
        {
          id: "needed",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail from the school board note would a reader need in order to judge the student op-ed fairly?",
          choices: [
            { letter: "A", text: "the number of benches students built" },
            { letter: "B", text: "the career skills students learned" },
            { letter: "C", text: "the age and cost of the shop's equipment" },
            { letter: "D", text: "the name of the town park" }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A student who read both texts about Room 114 could best conclude that —",
          choices: [
            { letter: "A", text: "the board has already decided to close the shop" },
            { letter: "B", text: "the op-ed writer would rather have a computer lab" },
            { letter: "C", text: "the woodshop will reopen next spring with new saws" },
            { letter: "D", text: "the shop's future depends on cost as well as value" }
          ],
          correct: "D"
        },
        {
          id: "emphasis",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How do the op-ed and the school board note differ in what they emphasize?",
          choices: [
            { letter: "A", text: "Text 1 stresses costs; Text 2 stresses careers." },
            { letter: "B", text: "Text 1 stresses benefits; Text 2 stresses costs." },
            { letter: "C", text: "Text 1 stresses safety; Text 2 stresses benches." },
            { letter: "D", text: "Text 1 stresses history; Text 2 stresses the town." }
          ],
          correct: "B"
        },
        {
          id: "benches",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "The detail about twelve benches for the town park in sentence 2 is included mainly to —",
          choices: [
            { letter: "A", text: "give evidence of what students have achieved" },
            { letter: "B", text: "show that the park needs more seating" },
            { letter: "C", text: "explain how a bench is measured and cut" },
            { letter: "D", text: "suggest that the shop should sell furniture" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rl-c87-workbench",
      family: "G11",
      title: "The Workbench",
      kind: "Literary · 11.RL",
      blurb: "Rafael inherits Aunt Celia's scarred workbench and reaches for a plane.",
      level: 3,
      passage:
        "<p>" + N(1) + "The workbench had belonged to Aunt Celia, and its top was a map of forty years: burn marks, dents, a ring where a coffee can of nails once sat. " +
        N(2) + "Rafael had planned to plane the surface smooth before he moved it into his garage. " +
        N(3) + "He stopped after the first stroke. " +
        N(4) + "A clean bench, he realized, would be a stranger's bench. " +
        N(5) + "He oiled the old wood instead and left every scar where she had put it." +
        "</p>",
      claims: [
        {
          id: "map",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Describing the bench top as \"a map of forty years\" in sentence 1 suggests that its marks —",
          choices: [
            { letter: "A", text: "show the roads near Aunt Celia's house" },
            { letter: "B", text: "were carved on purpose as decoration" },
            { letter: "C", text: "record the long history of Celia's work" },
            { letter: "D", text: "make the bench too damaged to use" }
          ],
          correct: "C"
        },
        {
          id: "stopped",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The short sentence 3, in which Rafael stops after the first stroke, mainly serves to —",
          choices: [
            { letter: "A", text: "mark the moment Rafael changes his mind" },
            { letter: "B", text: "show that the plane is too dull to cut" },
            { letter: "C", text: "suggest that Rafael is tired from moving" },
            { letter: "D", text: "explain why the garage is too small" }
          ],
          correct: "A"
        },
        {
          id: "stranger",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 4, calling a clean bench \"a stranger's bench\" means that planing it smooth would —",
          choices: [
            { letter: "A", text: "make it more valuable to sell" },
            { letter: "B", text: "erase the signs that connect it to Celia" },
            { letter: "C", text: "help it fit better in Rafael's garage" },
            { letter: "D", text: "please his aunt's old neighbors" }
          ],
          correct: "B"
        },
        {
          id: "resolve",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Which statement best explains how the final sentence of 'The Workbench' resolves the story?",
          choices: [
            { letter: "A", text: "Rafael sells the bench to a stranger." },
            { letter: "B", text: "Rafael decides to buy a new bench." },
            { letter: "C", text: "Rafael finishes planing the top smooth." },
            { letter: "D", text: "Rafael preserves the wood and its marks." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is best supported by Rafael's choice about Aunt Celia's workbench?",
          choices: [
            { letter: "A", text: "Signs of use can hold memories worth keeping." },
            { letter: "B", text: "Old tools are always better than new ones." },
            { letter: "C", text: "Family members should share their tools." },
            { letter: "D", text: "Careful work requires a smooth surface." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-c87-barnwood",
      family: "G11",
      title: "Second Life for Old Barns",
      kind: "Informational · 11.RI",
      blurb: "Why woodworking shops are turning century-old barn boards into tables and floors.",
      level: 1,
      passage:
        "<p>" + N(1) + "When an old barn comes down, its boards do not have to end up in a landfill. " +
        N(2) + "Many woodworking shops now buy reclaimed barn wood and turn it into tables, shelves, and floors. " +
        N(3) + "The wood is often harder and more stable than new lumber because it has dried for a century. " +
        N(4) + "Its nail holes and weathered gray color also give furniture a look that new boards cannot copy. " +
        N(5) + "Reusing the wood saves trees and keeps waste out of the ground." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the central idea of 'Second Life for Old Barns'?",
          choices: [
            { letter: "A", text: "Old barns should be torn down quickly." },
            { letter: "B", text: "Reusing old barn wood has several benefits." },
            { letter: "C", text: "New lumber is weaker than any other wood." },
            { letter: "D", text: "Landfills are running out of space." }
          ],
          correct: "B"
        },
        {
          id: "century",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The detail in sentence 3 that barn wood \"has dried for a century\" is included mainly to —",
          choices: [
            { letter: "A", text: "show how long barns usually stand" },
            { letter: "B", text: "suggest that the wood is too old to use" },
            { letter: "C", text: "explain why old barns are often gray" },
            { letter: "D", text: "explain why the old wood is hard and stable" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author's attitude toward reclaimed barn wood is best described as —",
          choices: [
            { letter: "A", text: "approving" },
            { letter: "B", text: "suspicious" },
            { letter: "C", text: "indifferent" },
            { letter: "D", text: "amused" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 3 through 5 of 'Second Life for Old Barns'?",
          choices: [
            { letter: "A", text: "by telling events in time order" },
            { letter: "B", text: "by comparing barns in different regions" },
            { letter: "C", text: "by listing advantages of reusing the wood" },
            { letter: "D", text: "by rejecting a solution to a problem" }
          ],
          correct: "C"
        },
        {
          id: "reclaimed",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the word reclaimed most nearly means —",
          choices: [
            { letter: "A", text: "painted again" },
            { letter: "B", text: "rescued for reuse" },
            { letter: "C", text: "sold at a discount" },
            { letter: "D", text: "cut into strips" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
