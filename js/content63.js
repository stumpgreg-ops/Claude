/* SOL Labyrinth — v5.15 expansion: Grade 10 SHORT packs (Virginia G10, nights 9–20).
 * Twenty-seven original packs (100–150 word prose, 8–10 line poems, 60–80 word paired texts),
 * drawn from rocks and caves, an imagined ancient city, sports science and dance competitions.
 * Original text only. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    {
      id: "g10-rl-c63-lightsout",
      family: "G10",
      title: "Lights Out",
      kind: "Literary · 10.RL",
      blurb: "Forty feet underground, a guide asks everyone to switch off their headlamps.",
      level: 1,
      passage:
        "<p>" + N(1) + "Forty feet below the visitor center, the guide asked everyone to switch off their headlamps. " +
        N(2) + "Amaya Quispe hesitated, her thumb resting on the button. " +
        N(3) + "She had spent the whole tour counting the exits, even though there was only one. " +
        N(4) + "\"Trust me,\" said the guide, a gray-haired woman named Mrs. Delacroix. " +
        N(5) + "One by one, the lights clicked off, until the darkness was so complete that Amaya could not see her own hand. " +
        N(6) + "Then someone near the back began to hum, and the low note rolled along the stone walls and came back doubled. " +
        N(7) + "Amaya laughed before she could stop herself. " +
        N(8) + "The cave, she realized, was not empty at all; it was listening. " +
        N(9) + "When the lamps came back on, she was the last to reach for her switch." +
        "</p>",
      claims: [
        {
          id: "uneasy",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 3 characterizes Amaya at the start of the cave tour as someone who —",
          choices: [
            { letter: "A", text: "knows the cave better than the guide does" },
            { letter: "B", text: "is bored by the slow pace of the group" },
            { letter: "C", text: "feels uneasy in the closed space" },
            { letter: "D", text: "wants to lead the others to the exit" }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point in Amaya's feelings about the dark cave?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "listening",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 8, describing the cave as listening is an example of —",
          choices: [
            { letter: "A", text: "personification that gives the cave a human quality" },
            { letter: "B", text: "hyperbole that exaggerates how large and deep the cave is" },
            { letter: "C", text: "a simile that compares the cave to a concert hall" },
            { letter: "D", text: "irony that shows the guide was wrong about the cave" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does the story of Amaya in the cave best support?",
          choices: [
            { letter: "A", text: "Guides should never ask visitors to take risks." },
            { letter: "B", text: "Letting go of a fear can reveal unexpected wonder." },
            { letter: "C", text: "Caves are more dangerous than most people believe." },
            { letter: "D", text: "Large groups are always safer than people who explore alone." }
          ],
          correct: "B"
        },
        {
          id: "last",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author ends with Amaya being the last to reach for her switch (sentence 9) mainly to —",
          choices: [
            { letter: "A", text: "show that she no longer wants to escape the dark" },
            { letter: "B", text: "suggest that her headlamp has stopped working" },
            { letter: "C", text: "reveal that she ignored the guide's instructions" },
            { letter: "D", text: "hint that the tour is about to end earlier than planned" }
          ],
          correct: "A"
        },
        {
          id: "doubled",
          sol: "10.RV.1.F",
          sub: "10.RV.1.F.1",
          stem: "In sentence 6, the phrase came back doubled most nearly describes —",
          choices: [
            { letter: "A", text: "a second visitor humming along" },
            { letter: "B", text: "the guide repeating her instruction" },
            { letter: "C", text: "an echo off the cave walls" },
            { letter: "D", text: "the hum fading to silence" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c63-dripstone",
      family: "G10",
      title: "One Drop at a Time",
      kind: "Informational · 10.RI",
      blurb: "How a stone icicle grows from rain, limestone and a great deal of patience.",
      level: 1,
      passage:
        "<p>" + N(1) + "A stalactite, the icicle-shaped stone that hangs from a cave ceiling, begins with a single drop of water. " +
        N(2) + "As rain soaks through soil, it picks up carbon dioxide and becomes slightly acidic. " +
        N(3) + "This weak acid slowly dissolves limestone as the water trickles downward through cracks in the rock. " +
        N(4) + "When a drop finally reaches the open air of a cave, it releases some of its carbon dioxide. " +
        N(5) + "That change causes a tiny ring of the mineral calcite to settle out of the water and cling to the ceiling. " +
        N(6) + "Drop after drop, ring after ring, a thin hollow tube called a soda straw forms. " +
        N(7) + "Over centuries, the straw may clog and thicken into a solid cone. " +
        N(8) + "Most stalactites grow only a few millimeters a year, so guides ask visitors not to touch them; oils from one hand can halt growth that took centuries." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the passage about stalactites?",
          choices: [
            { letter: "A", text: "Caves form whenever rain dissolves the soil above them." },
            { letter: "B", text: "Stalactites grow slowly as dripping water leaves calcite behind." },
            { letter: "C", text: "Visitors damage more caves every single year than rainwater ever does." },
            { letter: "D", text: "Soda straws are the most common formation in caves." }
          ],
          correct: "B"
        },
        {
          id: "order",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "The stalactite passage is organized mainly as —",
          choices: [
            { letter: "A", text: "a comparison of two different kinds of caves" },
            { letter: "B", text: "a problem followed by several possible solutions" },
            { letter: "C", text: "a sequence of stages in a natural process" },
            { letter: "D", text: "a list of reasons that caves should be closed" }
          ],
          correct: "C"
        },
        {
          id: "calcite",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the passage, what causes calcite to settle out of a drop of water?",
          choices: [
            { letter: "A", text: "The drop loses carbon dioxide in the open cave air." },
            { letter: "B", text: "The drop freezes solid against the cold stone of the ceiling." },
            { letter: "C", text: "Oils from visitors' hands mix into the drop." },
            { letter: "D", text: "The weight of older rings squeezes the drop." }
          ],
          correct: "A"
        },
        {
          id: "dissolve",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word dissolves in sentence 3 begins with the prefix dis-, which can mean apart. Based on this, dissolves most nearly means —",
          choices: [
            { letter: "A", text: "breaks apart into a liquid" },
            { letter: "B", text: "hardens into a thin crust" },
            { letter: "C", text: "hides from plain view" },
            { letter: "D", text: "piles up in even, flat layers" }
          ],
          correct: "A"
        },
        {
          id: "straw",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author mentions the soda straw in sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "warn that hollow formations break very easily" },
            { letter: "B", text: "compare cave formations to everyday drinks" },
            { letter: "C", text: "argue that some formations should be removed" },
            { letter: "D", text: "name an early stage in a stalactite's growth" }
          ],
          correct: "D"
        },
        {
          id: "final",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes the final sentence of the stalactite passage mainly to —",
          choices: [
            { letter: "A", text: "describe how cave guides are trained and hired" },
            { letter: "B", text: "connect the slow growth rate to a reason for care" },
            { letter: "C", text: "prove that stalactites stop growing after a lifetime" },
            { letter: "D", text: "suggest that most caves are closed to visitors" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rv-c63-sinkhole",
      family: "G10",
      title: "The Field Behind the Feed Store",
      kind: "Vocabulary · 10.RV",
      blurb: "A puddle that never dried turns into a hole wide enough to swallow a truck.",
      level: 2,
      passage:
        "<p>" + N(1) + "For years, the low spot behind Garza's Feed Store was just a puddle that never dried. " +
        N(2) + "Then, one wet April morning, it collapsed into a hole wide enough to swallow a pickup truck. " +
        N(3) + "A state geologist named Dr. Ruth Ambler explained that the town sat on limestone, a rock so <strong>soluble</strong> that groundwater had been carving hollows beneath it for thousands of years. " +
        N(4) + "The soil above had stayed in place only because it was <strong>cohesive</strong>, its damp clay particles clinging together like a crust over a pie. " +
        N(5) + "Heavy rain made that crust too heavy, and it gave way. " +
        N(6) + "Some neighbors called the event a disaster, but Dr. Ambler preferred the more <strong>measured</strong> word adjustment. " +
        N(7) + "She urged the town to <strong>monitor</strong> other low spots and to <strong>divert</strong> runoff away from them. " +
        N(8) + "Mr. Garza, who had been <strong>skeptical</strong> at first, now checks the field every Monday with a tape measure." +
        "</p>",
      claims: [
        {
          id: "soluble",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 3, the word soluble most nearly means —",
          choices: [
            { letter: "A", text: "heavy and very dense" },
            { letter: "B", text: "full of tiny fossils" },
            { letter: "C", text: "able to be dissolved" },
            { letter: "D", text: "quick to crack in cold" }
          ],
          correct: "C"
        },
        {
          id: "cohesive",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which words from sentence 4 best help the reader understand the meaning of cohesive?",
          choices: [
            { letter: "A", text: "\"The soil above\"" },
            { letter: "B", text: "\"over a pie\"" },
            { letter: "C", text: "\"had stayed in place only because it was\"" },
            { letter: "D", text: "\"particles clinging together\"" }
          ],
          correct: "D"
        },
        {
          id: "adjust",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "Dr. Ambler chose the word adjustment instead of disaster. Compared with disaster, adjustment suggests that the collapse was —",
          choices: [
            { letter: "A", text: "a natural change rather than a catastrophe" },
            { letter: "B", text: "a crime that someone should be blamed for" },
            { letter: "C", text: "a rumor that the neighbors had invented" },
            { letter: "D", text: "a sudden and serious threat to every home in town" }
          ],
          correct: "A"
        },
        {
          id: "measured",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "As used in sentence 6, the word measured most nearly means —",
          choices: [
            { letter: "A", text: "counted with a ruler" },
            { letter: "B", text: "calm and carefully chosen" },
            { letter: "C", text: "slow and rather boring" },
            { letter: "D", text: "loud, dramatic, and emotional" }
          ],
          correct: "B"
        },
        {
          id: "divert",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word divert in sentence 7 shares the root vert, meaning turn, with reverse and vertical. Based on this, to divert runoff is to —",
          choices: [
            { letter: "A", text: "soak it into the soil" },
            { letter: "B", text: "measure how much falls" },
            { letter: "C", text: "store it underground" },
            { letter: "D", text: "turn it another way" }
          ],
          correct: "D"
        },
        {
          id: "skeptical",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Sentence 8 contrasts Mr. Garza's weekly checks with his earlier attitude. Based on this contrast, skeptical most nearly means —",
          choices: [
            { letter: "A", text: "frightened" },
            { letter: "B", text: "angry" },
            { letter: "C", text: "doubtful" },
            { letter: "D", text: "generous" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rl-c63-claytablet",
      family: "G10",
      title: "Seven Measures",
      kind: "Literary · 10.RL",
      blurb: "In the river city of Kessara, an apprentice scribe finds a mistake that clay will not forgive.",
      level: 2,
      passage:
        "<p>" + N(1) + "In the river city of Kessara, apprentices learned to write on wax before they were trusted with clay. " +
        N(2) + "Tavi had pressed the grain record into a wet clay tablet before dawn, proud to be finished first. " +
        N(3) + "Only when the sun reached the courtyard did he notice that he had carved seven measures of barley instead of nine. " +
        N(4) + "Clay, once baked, could not lie and could not be corrected. " +
        N(5) + "He thought of smearing the tablet flat and pretending he had never begun. " +
        N(6) + "Instead, he carried it to Master Oren, his hands colder than the stone floor. " +
        N(7) + "The old scribe studied the mark for a long time. " +
        N(8) + "\"A careless hand hides its errors,\" he said at last, rolling the clay into a ball. " +
        N(9) + "\"A trustworthy one brings them to me before the kiln is lit.\" " +
        N(10) + "Then he handed Tavi a fresh slab and sat beside him while he began again." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by the story of Tavi and the clay tablet?",
          choices: [
            { letter: "A", text: "Speed is the most valuable skill an apprentice can have." },
            { letter: "B", text: "Admitting a mistake early is what builds real trust." },
            { letter: "C", text: "Old traditions should give way to newer tools." },
            { letter: "D", text: "Teachers rarely forgive a student's careless work." }
          ],
          correct: "B"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The central conflict of the Kessara story is best described as Tavi's struggle between —",
          choices: [
            { letter: "A", text: "hiding his error and confessing it" },
            { letter: "B", text: "loyalty to Oren and loyalty to family" },
            { letter: "C", text: "writing on wax and writing on clay" },
            { letter: "D", text: "finishing first and helping others" }
          ],
          correct: "A"
        },
        {
          id: "cold",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 6, the comparison his hands colder than the stone floor mainly conveys Tavi's —",
          choices: [
            { letter: "A", text: "exhaustion after working since dawn" },
            { letter: "B", text: "anger at his demanding teacher" },
            { letter: "C", text: "dread as he goes to confess" },
            { letter: "D", text: "excitement about lighting the kiln" }
          ],
          correct: "C"
        },
        {
          id: "baked",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author includes sentence 4, Clay, once baked, could not lie and could not be corrected, mainly to —",
          choices: [
            { letter: "A", text: "describe how the kilns of Kessara worked" },
            { letter: "B", text: "show that Master Oren is unusually strict" },
            { letter: "C", text: "suggest that wax is a better writing surface" },
            { letter: "D", text: "explain why the mistake feels so permanent" }
          ],
          correct: "D"
        },
        {
          id: "oren",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 8–10 characterize Master Oren as —",
          choices: [
            { letter: "A", text: "firm but kind" },
            { letter: "B", text: "careless and distracted" },
            { letter: "C", text: "impatient and harsh" },
            { letter: "D", text: "amused and teasing" }
          ],
          correct: "A"
        },
        {
          id: "measures",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 3, the word measures most nearly means —",
          choices: [
            { letter: "A", text: "actions taken to solve a problem" },
            { letter: "B", text: "short sections of a song" },
            { letter: "C", text: "set amounts of grain" },
            { letter: "D", text: "rulers used by scribes" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c63-startgun",
      family: "G10",
      title: "The Race Begins in the Ear",
      kind: "Informational · 10.RI",
      blurb: "Sports scientists time the gap between a starting gun and a sprinter's first push.",
      level: 2,
      passage:
        "<p>" + N(1) + "Many sprinters believe a race is won in the blocks, but sports scientists say the real contest begins in the ear. " +
        N(2) + "When the starting gun fires, the sound must travel to the runner, signal the brain, and trigger the leg muscles. " +
        N(3) + "For trained athletes, this chain takes about 0.15 seconds. " +
        N(4) + "The number matters so much that official timing systems flag any start faster than 0.1 seconds as a false start, because researchers have concluded that no human can truly react that quickly. " +
        N(5) + "Coaches once assumed that reaction time was fixed at birth. " +
        N(6) + "Newer studies suggest otherwise. " +
        N(7) + "In one trial, high school runners who practiced starts to unpredictable signals improved their reaction times by nearly ten percent in six weeks. " +
        N(8) + "The gains were small, but in a race decided by hundredths of a second, small is enough." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the passage about sprint starts?",
          choices: [
            { letter: "A", text: "Reaction time at the start can be measured and improved." },
            { letter: "B", text: "False starts are the main reason that most sprinters lose their races." },
            { letter: "C", text: "Starting guns are too loud for most young runners." },
            { letter: "D", text: "Leg strength matters far more than reaction speed." }
          ],
          correct: "A"
        },
        {
          id: "fixed",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence best supports the idea that a runner's reaction time is not fixed?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 5 through 7 of the sprint passage organized?",
          choices: [
            { letter: "A", text: "as a list of steps that happen in a race" },
            { letter: "B", text: "as an old belief followed by research that challenges it" },
            { letter: "C", text: "as a single cause followed by several effects" },
            { letter: "D", text: "as a comparison of two kinds of athletes and their training plans" }
          ],
          correct: "B"
        },
        {
          id: "otherwise",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The very short sentence 6, Newer studies suggest otherwise, mainly serves to —",
          choices: [
            { letter: "A", text: "summarize the results of the trial" },
            { letter: "B", text: "express doubt about whether the new research is reliable" },
            { letter: "C", text: "signal a turn from an old idea to new findings" },
            { letter: "D", text: "introduce a sport other than sprinting" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The tone of the final sentence of the sprint passage is best described as —",
          choices: [
            { letter: "A", text: "alarmed" },
            { letter: "B", text: "dismissive" },
            { letter: "C", text: "mocking" },
            { letter: "D", text: "confident" }
          ],
          correct: "D"
        },
        {
          id: "flag",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 4, the word flag most nearly means —",
          choices: [
            { letter: "A", text: "wave in celebration" },
            { letter: "B", text: "mark as a problem" },
            { letter: "C", text: "slow down on purpose" },
            { letter: "D", text: "hang from a tall pole" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-dsr-c63-scoresheet",
      family: "G10",
      title: "Counting the Heart",
      kind: "Paired texts · 10.DSR",
      blurb: "A judges' handbook and a dancer's post disagree about what a score should reward.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the Judges' Handbook, Tri-County Dance Showcase</strong></p>" +
        "<p>" + N(1) + "Each routine is scored out of 100 points. " +
        N(2) + "Technique, including timing, balance, and clean footwork, accounts for 60 points. " +
        N(3) + "Choreography accounts for 25, and performance quality, meaning expression and connection with the audience, accounts for 15. " +
        N(4) + "This weighting rewards skills that judges can observe consistently from any seat. " +
        N(5) + "Expression matters, but it is harder to measure fairly, so it carries less weight. " +
        N(6) + "Judges must score independently and may not discuss routines until results are posted.</p>" +
        "<p><strong>Text 2 — A Post by Lucia Ferreyra, Team Captain</strong></p>" +
        "<p>" + N(7) + "Last weekend our team landed every turn and still finished fourth. " +
        N(8) + "The winners slipped once, but their routine about a family leaving home made half the audience cry. " +
        N(9) + "I understand why judges trust what they can count. " +
        N(10) + "Still, a rubric that gives feeling only fifteen points tells dancers that hearts are extra credit. " +
        N(11) + "If performance is the reason people come to watch, it should not be the smallest number on the sheet.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do the judges' handbook and Lucia's post agree?",
          choices: [
            { letter: "A", text: "Technique should count for most of a routine's score." },
            { letter: "B", text: "Judges should talk about routines before they score them." },
            { letter: "C", text: "Technique is easier to measure than expression." },
            { letter: "D", text: "Performance quality deserves the most points." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The two texts about dance scoring differ mainly in that Text 2 —",
          choices: [
            { letter: "A", text: "questions how much weight the rubric gives expression" },
            { letter: "B", text: "explains how the showcase judges are chosen and trained" },
            { letter: "C", text: "argues that technique should be removed from scoring" },
            { letter: "D", text: "describes the rules for how results are finally posted" }
          ],
          correct: "A"
        },
        {
          id: "weakens",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "Read together with Text 1, which detail from Text 2 most weakens Lucia's claim that the rubric shuts out feeling?",
          choices: [
            { letter: "A", text: "Her own team landed every single turn in sentence 7." },
            { letter: "B", text: "The moving routine won despite a slip in sentence 8." },
            { letter: "C", text: "She understands why judges count in sentence 9." },
            { letter: "D", text: "People come mainly to watch performances, in sentence 11." }
          ],
          correct: "B"
        },
        {
          id: "credit",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 10, the phrase hearts are extra credit mainly suggests that the rubric —",
          choices: [
            { letter: "A", text: "rewards the dancers who practice the most hours" },
            { letter: "B", text: "gives bonus points to routines with sad themes" },
            { letter: "C", text: "lets each judge score in whatever way they like" },
            { letter: "D", text: "treats emotion as optional instead of central" }
          ],
          correct: "D"
        },
        {
          id: "justify",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Sentences 4 and 5 of the handbook mainly serve to —",
          choices: [
            { letter: "A", text: "justify the way the points are divided" },
            { letter: "B", text: "warn judges about favoring their friends" },
            { letter: "C", text: "describe the audience at the showcase" },
            { letter: "D", text: "list the three categories on the sheet" }
          ],
          correct: "A"
        },
        {
          id: "defend",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "Select TWO sentences a judge could use to defend the low weight given to performance quality.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: ["B", "C"]
        }
      ]
    },
    {
      id: "g10-rl-c63-geode",
      family: "G10",
      title: "Geode",
      kind: "Poetry · 10.RL",
      blurb: "A three-dollar lump of gray stone, a chisel, and what was waiting inside.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At the rock shop it looked like nothing,<br>" +
        L(2) + "a gray fist of stone in a bin marked three dollars,<br>" +
        L(3) + "lumpy as a potato left too long in the dark.<br>" +
        L(4) + "My brother wanted the shark tooth instead.<br>" +
        L(5) + "At home, Dad tapped it with a chisel, once, twice,<br>" +
        L(6) + "and it opened the way a mouth opens to laugh:<br>" +
        L(7) + "purple teeth of crystal, a whole cathedral<br>" +
        L(8) + "the size of my palm, lit by the kitchen lamp.<br>" +
        L(9) + "All that time it had been keeping its secret,<br>" +
        L(10) + "just waiting for someone patient enough to knock." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem Geode?",
          choices: [
            { letter: "A", text: "Collectors should always spend their money wisely." },
            { letter: "B", text: "Brothers and sisters rarely agree about gifts." },
            { letter: "C", text: "Tools can easily damage delicate natural objects." },
            { letter: "D", text: "A plain surface can hide something remarkable." }
          ],
          correct: "D"
        },
        {
          id: "potato",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In line 3, comparing the geode to a potato mainly emphasizes that at first the stone looked —",
          choices: [
            { letter: "A", text: "rare and valuable" },
            { letter: "B", text: "dull and ordinary" },
            { letter: "C", text: "soft and fragile" },
            { letter: "D", text: "sharp and dangerous" }
          ],
          correct: "B"
        },
        {
          id: "cathedral",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "The images in lines 7 and 8 (purple teeth of crystal, a whole cathedral) mainly create a feeling of —",
          choices: [
            { letter: "A", text: "wonder" },
            { letter: "B", text: "fear" },
            { letter: "C", text: "boredom" },
            { letter: "D", text: "regret" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "How does the speaker's view of the stone in lines 9–10 differ from the view in lines 1–3?",
          choices: [
            { letter: "A", text: "It moves from excited to disappointed." },
            { letter: "B", text: "It moves from curious to bored." },
            { letter: "C", text: "It moves from dismissive to admiring." },
            { letter: "D", text: "It moves from fearful to calm." }
          ],
          correct: "C"
        },
        {
          id: "knock",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "Lines 9 and 10 present the geode as if it were —",
          choices: [
            { letter: "A", text: "a broken tool that needs to be repaired" },
            { letter: "B", text: "a person guarding something for the right visitor" },
            { letter: "C", text: "a frightened animal hiding from a hungry hunter in the woods" },
            { letter: "D", text: "a locked door that refuses to open for anyone" }
          ],
          correct: "B"
        },
        {
          id: "brother",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Line 4, about the brother wanting the shark tooth, suggests that the speaker is someone who —",
          choices: [
            { letter: "A", text: "notices what others pass over" },
            { letter: "B", text: "copies whatever the brother does" },
            { letter: "C", text: "dislikes visiting the rock shop" },
            { letter: "D", text: "cannot decide what to buy" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c63-thelift",
      family: "G10",
      title: "The Lift",
      kind: "Drama · 10.RL",
      blurb: "Nine days before regionals, a dance partner refuses to let a missed lift belong to one person.",
      level: 2,
      passage:
        "<p>" + N(1) + "<em>A dance studio, late evening. MIREILLE stretches alone. KEONI enters carrying two water bottles.</em> " +
        N(2) + "<strong>KEONI:</strong> You left before the run-through ended. " +
        N(3) + "<strong>MIREILLE:</strong> <em>(without looking up)</em> I missed the lift again. Three times. " +
        N(4) + "<strong>KEONI:</strong> Twice. The third time you landed it, but you were already frowning. " +
        N(5) + "<strong>MIREILLE:</strong> Coach Adeyemi says regionals are in nine days. " +
        N(6) + "<strong>KEONI:</strong> <em>(setting a bottle beside her)</em> Coach also says we're a pair. If the lift fails, we both fail it. " +
        N(7) + "<strong>MIREILLE:</strong> That's supposed to make me feel better? " +
        N(8) + "<strong>KEONI:</strong> It's supposed to make you stop carrying it by yourself. " +
        N(9) + "<em>(MIREILLE finally looks at him. She stands and holds out her hands.)</em> " +
        N(10) + "<strong>MIREILLE:</strong> From the top, then. Slowly." +
        "</p>",
      claims: [
        {
          id: "mireille",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 3, including the stage direction without looking up, characterizes Mireille as —",
          choices: [
            { letter: "A", text: "frustrated with herself" },
            { letter: "B", text: "furious with Keoni" },
            { letter: "C", text: "bored with rehearsal" },
            { letter: "D", text: "sure of a win at regionals" }
          ],
          correct: "A"
        },
        {
          id: "tension",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The tension in the studio scene comes mainly from —",
          choices: [
            { letter: "A", text: "Keoni's secret plan to quit the team before regionals" },
            { letter: "B", text: "Mireille's belief that the missed lift is hers alone to fix" },
            { letter: "C", text: "a heated disagreement between the two dancers and their coach" },
            { letter: "D", text: "a partner who fails to show up for the late rehearsal" }
          ],
          correct: "B"
        },
        {
          id: "hands",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "The stage direction in sentence 9 mainly serves to —",
          choices: [
            { letter: "A", text: "reveal that Mireille has injured her wrist" },
            { letter: "B", text: "show that the rehearsal is finally over" },
            { letter: "C", text: "suggest that Keoni has left the studio" },
            { letter: "D", text: "show Mireille accepting the partnership" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does the rehearsal scene between Keoni and Mireille best support?",
          choices: [
            { letter: "A", text: "Natural talent matters more than hours of practice." },
            { letter: "B", text: "Close deadlines always bring out a person's best." },
            { letter: "C", text: "A burden feels lighter once it is shared." },
            { letter: "D", text: "Coaches should let dancers choose their partners." }
          ],
          correct: "C"
        },
        {
          id: "top",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of Mireille's final line, From the top, then. Slowly., is best described as —",
          choices: [
            { letter: "A", text: "bitter and resigned" },
            { letter: "B", text: "sarcastic and unkind" },
            { letter: "C", text: "calm and determined" },
            { letter: "D", text: "panicked and rushed" }
          ],
          correct: "C"
        },
        {
          id: "carry",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 8, Keoni's phrase carrying it by yourself compares the missed lift to —",
          choices: [
            { letter: "A", text: "a heavy load held by one person" },
            { letter: "B", text: "a costume that no longer fits well" },
            { letter: "C", text: "the water bottle he sets beside her" },
            { letter: "D", text: "a secret kept from the whole team" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c63-cavepermit",
      family: "G10",
      title: "Wild Cave Permit",
      kind: "Functional text · 10.RI",
      blurb: "Rules for groups who want to explore Bramble Hollow Cave beyond the lit trail.",
      level: 1,
      passage:
        "<p><strong>Wild Cave Permit: Bramble Hollow State Park</strong></p>" +
        "<p>" + N(1) + "Bramble Hollow Cave is open to permitted groups from April 15 to October 1. " +
        N(2) + "The cave closes for the rest of the year to protect hibernating bats. " +
        N(3) + "<strong>Who may apply:</strong> Groups of three to eight people may apply; at least one member must be 18 or older. " +
        N(4) + "<strong>Required gear:</strong> Each person needs a helmet, three separate light sources, and gloves. " +
        N(5) + "<strong>Before you enter:</strong> Sign in at the ranger station and write down the time you expect to exit. " +
        N(6) + "If your group has not signed out two hours after that time, rangers will begin a search. " +
        N(7) + "<strong>Protect the cave:</strong> Do not touch formations, and pack out everything you carry in, including food wrappers. " +
        N(8) + "Clothing and boots worn in other caves must be washed first to stop the spread of a fungus that harms bats." +
        "</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "The Bramble Hollow permit notice is written mainly for —",
          choices: [
            { letter: "A", text: "rangers training to lead guided tours" },
            { letter: "B", text: "groups planning to explore the cave" },
            { letter: "C", text: "scientists who study hibernating bats" },
            { letter: "D", text: "students writing reports about caves" }
          ],
          correct: "B"
        },
        {
          id: "fungus",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The notice mentions the fungus in sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "discourage visitors who have explored other caves" },
            { letter: "B", text: "show that the park rangers are also scientists" },
            { letter: "C", text: "list the diseases that are found in local caves" },
            { letter: "D", text: "explain the reason behind the washing rule" }
          ],
          correct: "D"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "The bold headings in the cave permit help a reader mainly by —",
          choices: [
            { letter: "A", text: "grouping the rules by the topic they cover" },
            { letter: "B", text: "ranking the rules from least to most important" },
            { letter: "C", text: "separating the park's facts from its opinions" },
            { letter: "D", text: "telling the history of the park in order" }
          ],
          correct: "A"
        },
        {
          id: "teens",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.2",
          stem: "Four 16-year-old friends want to explore the cave together. Based on the notice, what must they do before they can apply?",
          choices: [
            { letter: "A", text: "bring one extra light source for each person" },
            { letter: "B", text: "wait until the bats leave the cave in October" },
            { letter: "C", text: "promise to sign out within two hours of entering" },
            { letter: "D", text: "add a group member who is at least 18" }
          ],
          correct: "D"
        },
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the cave permit as a whole?",
          choices: [
            { letter: "A", text: "Only park rangers may enter Bramble Hollow Cave." },
            { letter: "B", text: "The cave is open all year to anyone with a helmet." },
            { letter: "C", text: "Groups must meet safety and conservation rules to enter." },
            { letter: "D", text: "Visitors should bring enough food and water for a long search." }
          ],
          correct: "C"
        },
        {
          id: "packout",
          sol: "10.RV.1.E",
          sub: "10.RV.1.E.2",
          stem: "In sentence 7, the phrase pack out most nearly means —",
          choices: [
            { letter: "A", text: "carry back out of the cave" },
            { letter: "B", text: "fill your bag before you enter" },
            { letter: "C", text: "leave behind in a safe place" },
            { letter: "D", text: "hide from the view of rangers" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c63-sleepsets",
      family: "G10",
      title: "Sleep Is Part of Practice",
      kind: "Argument · 10.RI",
      blurb: "A student editor argues that a 5:45 a.m. swim practice costs more than it builds.",
      level: 3,
      passage:
        "<p><strong>Editorial by Tomasz Wierzbicki, Sports Editor</strong></p>" +
        "<p>" + N(1) + "Our school's swim team practices at 5:45 a.m., and the coaches call it building toughness. " +
        N(2) + "The research calls it something else: lost training. " +
        N(3) + "During deep sleep, the body releases growth hormone, which repairs the small muscle tears that workouts create. " +
        N(4) + "A swimmer who sleeps six hours instead of nine misses much of that repair, so the hardest morning sets may build less strength than they cost. " +
        N(5) + "Studies of college athletes have found that extending sleep improved sprint times and reduced injuries. " +
        N(6) + "Coaches worry that a later practice would collide with after-school jobs and pool rentals, and that concern is real. " +
        N(7) + "Yet a schedule that exhausts athletes is not discipline; it is waste. " +
        N(8) + "Moving practice to 7:00 a.m. would cost the team little and give back what early mornings quietly steal." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which sentence best states the central claim of the swim practice editorial?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "D"
        },
        {
          id: "outside",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence provides evidence from athletes outside the writer's own school?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 1" }
          ],
          correct: "B"
        },
        {
          id: "concede",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "In sentence 6, the writer mentions the coaches' worries mainly to —",
          choices: [
            { letter: "A", text: "grant a fair concern before answering it" },
            { letter: "B", text: "admit that the new plan cannot work" },
            { letter: "C", text: "blame the coaches for the team's injuries" },
            { letter: "D", text: "shift the topic to part-time jobs" }
          ],
          correct: "A"
        },
        {
          id: "steal",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 8, the phrase what early mornings quietly steal suggests that the cost of early practice —",
          choices: [
            { letter: "A", text: "falls mostly on the coaches and their families" },
            { letter: "B", text: "is paid mainly in money for pool rentals" },
            { letter: "C", text: "is real but easy to overlook" },
            { letter: "D", text: "disappears after the first season" }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The writer's attitude toward the 5:45 a.m. practices is best described as —",
          choices: [
            { letter: "A", text: "amused" },
            { letter: "B", text: "critical" },
            { letter: "C", text: "indifferent" },
            { letter: "D", text: "admiring" }
          ],
          correct: "B"
        },
        {
          id: "contrast",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The writer places sentence 2 directly after sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "contrast the coaches' view with what research shows" },
            { letter: "B", text: "list the steps of a typical morning swim practice" },
            { letter: "C", text: "describe how growth hormone is released during sleep" },
            { letter: "D", text: "explain why the pool is rented in the afternoon" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c63-countit",
      family: "G10",
      title: "Count It for Me",
      kind: "Literary · 10.RL",
      blurb: "Twenty minutes before a dance semifinal, Sunil learns where his routine really lives.",
      level: 3,
      passage:
        "<p>" + N(1) + "For six weeks Sunil had told anyone who would listen that Dalia was holding him back. " +
        N(2) + "She counted out loud, she rushed the turns, and she laughed when she slipped, which he considered unprofessional. " +
        N(3) + "Then, twenty minutes before the semifinal, she rolled her ankle on a loose strip of tape in the warm-up hall. " +
        N(4) + "The trainer wrapped it and shook her head. " +
        N(5) + "Sunil walked alone to the edge of the curtain to run the routine in his head and found that the music had gone strangely blank. " +
        N(6) + "Every step he reached for arrived in Dalia's voice, five, six, seven, eight, or did not arrive at all. " +
        N(7) + "The hall beyond the curtain hummed like a beehive. " +
        N(8) + "He went back to the bench where she sat with her foot on a folded jacket. " +
        N(9) + "\"Count it for me,\" he said, kneeling. \"Just once more.\"" +
        "</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the semifinal story is most ironic?",
          choices: [
            { letter: "A", text: "Dalia is hurt in a warm-up hall rather than out on the stage itself." },
            { letter: "B", text: "The partner Sunil blamed is the one holding his routine together." },
            { letter: "C", text: "The trainer is unable to repair Dalia's ankle before the event." },
            { letter: "D", text: "The audience is loud while Sunil stands quietly at the curtain." }
          ],
          correct: "B"
        },
        {
          id: "before",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 2 characterizes Sunil, before the injury, as —",
          choices: [
            { letter: "A", text: "critical and hard to please" },
            { letter: "B", text: "shy and easily embarrassed" },
            { letter: "C", text: "careless about his practice" },
            { letter: "D", text: "protective of his partner" }
          ],
          correct: "A"
        },
        {
          id: "beehive",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "The simile in sentence 7, the hall hummed like a beehive, mainly emphasizes —",
          choices: [
            { letter: "A", text: "that insects have found their way into the hall" },
            { letter: "B", text: "that the music for the semifinal has started" },
            { letter: "C", text: "that the audience is restless and starting to leave" },
            { letter: "D", text: "the crowd's busy noise against Sunil's blank mind" }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Which sentence best shows a change in how Sunil treats Dalia?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "C"
        },
        {
          id: "blank",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "In sentence 5, the phrase the music had gone strangely blank suggests that Sunil —",
          choices: [
            { letter: "A", text: "notices that the sound system has failed" },
            { letter: "B", text: "cannot recall the routine without Dalia" },
            { letter: "C", text: "has decided to perform a brand-new routine" },
            { letter: "D", text: "feels much calmer than he expected to feel" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best developed in the story of Sunil and Dalia?",
          choices: [
            { letter: "A", text: "Injuries are the greatest danger in competitive dance." },
            { letter: "B", text: "Winning matters much less than having fun on stage." },
            { letter: "C", text: "We may depend on others in ways we fail to notice." },
            { letter: "D", text: "Strict practice habits always pay off in the end." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c63-modelcity",
      family: "G10",
      title: "The City That Never Was",
      kind: "Informational · 10.RI",
      blurb: "A history class builds an imagined ancient city with one rule: every feature must solve a problem.",
      level: 3,
      passage:
        "<p>" + N(1) + "The river city of Ashtamar never existed, but the sophomores who built a model of it spent a semester making sure it could have. " +
        N(2) + "Their teacher, Ms. Nakagawa, set one rule: every feature of the imagined city had to solve a problem that real ancient cities faced. " +
        N(3) + "So the model's walls curve along a ridge, because high ground was easier to defend. " +
        N(4) + "Its streets slope toward the river, letting rainwater and waste drain downhill. " +
        N(5) + "Granaries sit on raised stone platforms, a design that kept grain dry and discouraged rats. " +
        N(6) + "Even the market, placed beside the main gate, reflects a choice: traders could sell their goods without wandering through neighborhoods. " +
        N(7) + "Students said the hardest part was resisting features that were merely beautiful. " +
        N(8) + "A proposed golden tower was voted down when no one could explain what problem it solved." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "What is the central idea of the passage about the Ashtamar model?",
          choices: [
            { letter: "A", text: "Each feature of the imagined city answers a real problem." },
            { letter: "B", text: "Ancient cities were usually built on ridges near rivers." },
            { letter: "C", text: "Ms. Nakagawa's students preferred beauty to usefulness." },
            { letter: "D", text: "Granaries were the most important buildings of the past." }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 3 through 6 of the Ashtamar passage are organized mainly as —",
          choices: [
            { letter: "A", text: "a timeline of how the model was built week by week" },
            { letter: "B", text: "a comparison between two ancient cities and their rulers" },
            { letter: "C", text: "a series of features, each tied to a problem it solves" },
            { letter: "D", text: "a single problem followed by one long solution" }
          ],
          correct: "C"
        },
        {
          id: "market",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the passage, why did the students place the market beside the main gate?",
          choices: [
            { letter: "A", text: "The gate was the most beautiful spot in the model city." },
            { letter: "B", text: "Rainwater drained away fastest near the city gate." },
            { letter: "C", text: "The granaries needed to be close to the traders." },
            { letter: "D", text: "Traders could sell without walking through homes." }
          ],
          correct: "D"
        },
        {
          id: "tower",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author ends with the story of the golden tower mainly to —",
          choices: [
            { letter: "A", text: "suggest that the students ran out of building money" },
            { letter: "B", text: "show how strictly the class applied its one rule" },
            { letter: "C", text: "prove that ancient cities never contained towers" },
            { letter: "D", text: "criticize the students for rejecting a good idea" }
          ],
          correct: "B"
        },
        {
          id: "merely",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "In sentence 7, the word merely suggests that the students saw beauty by itself as —",
          choices: [
            { letter: "A", text: "not enough reason to add a feature" },
            { letter: "B", text: "something forbidden by their teacher" },
            { letter: "C", text: "the most important goal of the project" },
            { letter: "D", text: "too expensive to build in a model" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Based on the passage, Ms. Nakagawa's project was most likely meant to help students —",
          choices: [
            { letter: "A", text: "learn to build scale models from clay and stone" },
            { letter: "B", text: "see how real needs shaped ancient city design" },
            { letter: "C", text: "plan the layout of a new town near their school" },
            { letter: "D", text: "compare the costs of walls and towers in history" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rv-c63-fibers",
      family: "G10",
      title: "Fast Fibers, Slow Fibers",
      kind: "Vocabulary · 10.RV",
      blurb: "Why a shot-putter and a distance runner at Ridgeline High rarely share a workout.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every skeletal muscle contains two main kinds of fibers. " +
        N(2) + "Slow-twitch fibers contract with modest force but are remarkably <strong>resilient</strong>; they can keep working for hours without tiring. " +
        N(3) + "Fast-twitch fibers produce <strong>explosive</strong> bursts of power but tire quickly. " +
        N(4) + "A marathon runner's legs tend to hold more slow-twitch fibers, while a sprinter's hold more fast-twitch ones. " +
        N(5) + "Genetics sets much of this mix, yet training can <strong>modify</strong> how each type of fiber behaves. " +
        N(6) + "Endurance work increases the number of tiny blood vessels that <strong>supply</strong> oxygen to the muscle. " +
        N(7) + "Heavy lifting, by contrast, makes the fibers thicker. " +
        N(8) + "Coaches at Ridgeline High use this research to <strong>tailor</strong> workouts, so a shot-putter and a distance runner rarely follow the same plan. " +
        N(9) + "As one coach put it, the goal is not a stronger athlete in general but a stronger athlete for one <strong>specific</strong> event." +
        "</p>",
      claims: [
        {
          id: "resilient",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "As used in sentence 2 to describe slow-twitch fibers, resilient most nearly means —",
          choices: [
            { letter: "A", text: "weak and easily injured by hard work" },
            { letter: "B", text: "tough and slow to wear out" },
            { letter: "C", text: "small and very hard to see clearly" },
            { letter: "D", text: "quick to change shape under pressure" }
          ],
          correct: "B"
        },
        {
          id: "explosive",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author describes fast-twitch power as explosive rather than strong. Compared with strong, explosive suggests power that is —",
          choices: [
            { letter: "A", text: "sudden and intense" },
            { letter: "B", text: "harmful to others" },
            { letter: "C", text: "steady and lasting" },
            { letter: "D", text: "weak but reliable" }
          ],
          correct: "A"
        },
        {
          id: "modify",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word modify comes from a Latin root meaning measure or manner, also found in mode and model. In sentence 5, modify most nearly means —",
          choices: [
            { letter: "A", text: "reverse completely" },
            { letter: "B", text: "measure precisely" },
            { letter: "C", text: "change in some way" },
            { letter: "D", text: "hide from view" }
          ],
          correct: "C"
        },
        {
          id: "supply",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 6, the word supply most nearly means —",
          choices: [
            { letter: "A", text: "a stock kept in a closet" },
            { letter: "B", text: "to sell for a profit" },
            { letter: "C", text: "to pack for a trip" },
            { letter: "D", text: "to provide or deliver" }
          ],
          correct: "D"
        },
        {
          id: "tailor",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which phrase from sentence 8 best helps the reader understand the meaning of tailor?",
          choices: [
            { letter: "A", text: "\"Coaches at Ridgeline High\"" },
            { letter: "B", text: "\"use this research\"" },
            { letter: "C", text: "\"rarely follow the same plan\"" },
            { letter: "D", text: "\"a shot-putter and a distance runner\"" }
          ],
          correct: "C"
        },
        {
          id: "specific",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 9, the contrast with in general shows that specific means —",
          choices: [
            { letter: "A", text: "particular" },
            { letter: "B", text: "well-known" },
            { letter: "C", text: "ordinary" },
            { letter: "D", text: "challenging" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-dsr-c63-cavelights",
      family: "G10",
      title: "Lights in Lantern Creek",
      kind: "Paired texts · 10.DSR",
      blurb: "A county opens a cavern for tours, and a cave biologist warns about the lights.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From the Ridgefork County Parks Newsletter</strong></p>" +
        "<p>" + N(1) + "This summer, Lantern Creek Cavern will open for guided tours for the first time. " +
        N(2) + "A new path with low railings will keep visitors away from fragile formations. " +
        N(3) + "Ticket sales will pay for a full-time cave ranger, a position the county has never been able to fund. " +
        N(4) + "\"People protect what they have seen,\" said parks director Wendell Marsh. " +
        N(5) + "Tours will run three times a day, with no more than fifteen guests in each group.</p>" +
        "<p><strong>Text 2 — A Letter from Dr. Imani Coleby, Cave Biologist</strong></p>" +
        "<p>" + N(6) + "I share the county's hope that visitors will come to love Lantern Creek. " +
        N(7) + "But electric lights bring a hidden cost. " +
        N(8) + "Wherever bulbs shine for hours, green algae and moss begin to grow on stone that has been dark for thousands of years. " +
        N(9) + "This growth, called lampenflora, stains formations and is difficult to remove. " +
        N(10) + "I urge the county to install lights that switch on only when a tour group is present.</p>",
      claims: [
        {
          id: "share",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which idea do the parks newsletter and Dr. Coleby's letter share?",
          choices: [
            { letter: "A", text: "Visitors may come to care about the cavern." },
            { letter: "B", text: "The tours should be canceled before they begin." },
            { letter: "C", text: "Electric lights cause no lasting harm to stone." },
            { letter: "D", text: "The county does not need a full-time ranger." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The texts about Lantern Creek differ mainly in that Text 2 —",
          choices: [
            { letter: "A", text: "opposes allowing any visitors into the cavern" },
            { letter: "B", text: "explains how ticket prices for tours were set" },
            { letter: "C", text: "raises a risk that the newsletter leaves out" },
            { letter: "D", text: "questions whether the ranger is well trained" }
          ],
          correct: "C"
        },
        {
          id: "lampenflora",
          sol: "10.RI.2.B",
          sub: "10.RI.2.B.1",
          stem: "According to Text 2, what is lampenflora?",
          choices: [
            { letter: "A", text: "a special bulb designed for use in caves" },
            { letter: "B", text: "algae and moss that grow where lights shine" },
            { letter: "C", text: "a rare formation found only in dark caves" },
            { letter: "D", text: "a method for cleaning stained cave walls" }
          ],
          correct: "B"
        },
        {
          id: "respond",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 respond to the plan described in Text 1?",
          choices: [
            { letter: "A", text: "It rejects the plan and asks to close the cave." },
            { letter: "B", text: "It praises the railings as the most important step." },
            { letter: "C", text: "It corrects the number of guests allowed per tour." },
            { letter: "D", text: "It backs the tours but proposes a way to limit harm." }
          ],
          correct: "D"
        },
        {
          id: "steps",
          sol: "10.DSR.C",
          sub: "10.DSR.C.3",
          stem: "Select TWO sentences that describe specific steps the county is taking to protect the cavern.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The tone of Dr. Coleby's letter is best described as —",
          choices: [
            { letter: "A", text: "angry and openly accusing" },
            { letter: "B", text: "respectful but concerned" },
            { letter: "C", text: "playful and lightly amused" },
            { letter: "D", text: "bored and indifferent" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rl-c63-mosaic",
      family: "G10",
      title: "The Serpent's Eye",
      kind: "Literary · 10.RL",
      blurb: "In a tile workshop by the harbor gate, a girl searches the rubbish bucket for one small piece.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every morning Neva sorted tiles in her father's workshop near the harbor gate of Ilunmar. " +
        N(2) + "Blue went in one basket, gold in another, and the cracked pieces went into a bucket for the rubbish heap. " +
        N(3) + "Her father, Sabir, was laying a sea serpent on the floor of the new bathhouse, and he worked in silence from sunrise to the evening bell. " +
        N(4) + "One afternoon, Neva noticed that the serpent's eye was missing. " +
        N(5) + "Every gold tile was too large. " +
        N(6) + "She dug through the rubbish bucket and found a cracked gold sliver no wider than her fingernail. " +
        N(7) + "Sabir turned it over in his rough palm, then pressed it into the wet plaster. " +
        N(8) + "The serpent seemed to wake up. " +
        N(9) + "That night, he moved the rubbish bucket beside her baskets and labeled it Maybe." +
        "</p>",
      claims: [
        {
          id: "problem",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "What problem does Neva solve in the story of the sea serpent mosaic?",
          choices: [
            { letter: "A", text: "Her father is too ill to finish the bathhouse floor." },
            { letter: "B", text: "Water from the harbor is flooding the workshop." },
            { letter: "C", text: "Someone has stolen the blue tiles from the baskets." },
            { letter: "D", text: "No gold tile is small enough to form the eye." }
          ],
          correct: "D"
        },
        {
          id: "wake",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 8, the statement The serpent seemed to wake up suggests that the new tile —",
          choices: [
            { letter: "A", text: "made the mosaic look alive" },
            { letter: "B", text: "fell out of the wet plaster" },
            { letter: "C", text: "was brighter than Sabir liked" },
            { letter: "D", text: "frightened the bathhouse owner" }
          ],
          correct: "A"
        },
        {
          id: "sabir",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Which statement best describes Sabir in the mosaic story?",
          choices: [
            { letter: "A", text: "He is talkative and impatient." },
            { letter: "B", text: "He is quiet and hardworking." },
            { letter: "C", text: "He is careless with his tools." },
            { letter: "D", text: "He is unkind to his daughter." }
          ],
          correct: "B"
        },
        {
          id: "maybe",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author ends with the bucket labeled Maybe mainly to show that Sabir —",
          choices: [
            { letter: "A", text: "plans to sell the cracked tiles at the market" },
            { letter: "B", text: "wants Neva to stop sorting tiles each morning" },
            { letter: "C", text: "now sees value in pieces he once threw away" },
            { letter: "D", text: "is running out of room in the small workshop" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by the story of Neva and the gold sliver?",
          choices: [
            { letter: "A", text: "Hard work is always rewarded with money." },
            { letter: "B", text: "Children should leave adult tools alone." },
            { letter: "C", text: "Large pieces are better than small ones." },
            { letter: "D", text: "Discarded things can still prove valuable." }
          ],
          correct: "D"
        },
        {
          id: "sliver",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 6, the word sliver most nearly means —",
          choices: [
            { letter: "A", text: "a thin, small piece" },
            { letter: "B", text: "a polished gold coin" },
            { letter: "C", text: "a bright shade of color" },
            { letter: "D", text: "a sharp metal chisel" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c63-spinphysics",
      family: "G10",
      title: "Why Dancers Pull In",
      kind: "Informational · 10.RI",
      blurb: "The physics behind a dancer's fastest turns, and the trick that keeps her from getting dizzy.",
      level: 3,
      passage:
        "<p>" + N(1) + "A dancer who begins a spin with her arms open and then draws them close to her chest will suddenly whirl faster, even though no one has pushed her. " +
        N(2) + "Physicists explain this with a principle called conservation of angular momentum. " +
        N(3) + "A spinning body's momentum depends on two factors: how fast it turns and how far its mass sits from the center of the spin. " +
        N(4) + "When the arms come in, the mass moves closer to the center, so the speed must rise to keep the momentum the same. " +
        N(5) + "Figure skaters use the identical principle, which is why their final spins can blur. " +
        N(6) + "Dancers also rely on a trick called spotting, fixing their eyes on one point and whipping the head around last to reduce dizziness. " +
        N(7) + "Physics, it turns out, does not limit artistry; it quietly choreographs it." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the passage about dance spins?",
          choices: [
            { letter: "A", text: "Figure skaters can spin faster than any dancer." },
            { letter: "B", text: "Dancers' spins follow physical laws they put to use." },
            { letter: "C", text: "Spotting is the most important skill a dancer learns." },
            { letter: "D", text: "The laws of physics limit what dancers can perform." }
          ],
          correct: "B"
        },
        {
          id: "faster",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the passage, why does a dancer spin faster when she pulls her arms in?",
          choices: [
            { letter: "A", text: "She pushes harder against the floor with her feet." },
            { letter: "B", text: "She whips her head around before her body turns." },
            { letter: "C", text: "The floor becomes smoother as the spin goes on." },
            { letter: "D", text: "Her mass moves inward, so her speed must rise." }
          ],
          correct: "D"
        },
        {
          id: "cause",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Sentences 2 through 4 of the spin passage are organized mainly to —",
          choices: [
            { letter: "A", text: "explain the cause of the effect in sentence 1" },
            { letter: "B", text: "compare dancers with figure skaters in detail" },
            { letter: "C", text: "list the steps a dancer follows to learn a spin" },
            { letter: "D", text: "describe the history of a physics principle" }
          ],
          correct: "A"
        },
        {
          id: "skaters",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes sentence 5 about figure skaters mainly to —",
          choices: [
            { letter: "A", text: "argue that skating is harder than dancing" },
            { letter: "B", text: "explain why skaters rarely become dizzy" },
            { letter: "C", text: "show that the principle reaches beyond dance" },
            { letter: "D", text: "suggest that dancers should train on ice" }
          ],
          correct: "C"
        },
        {
          id: "view",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The author's view of the relationship between physics and dance, as expressed in sentence 7, is best described as —",
          choices: [
            { letter: "A", text: "physics matters far more than artistry does" },
            { letter: "B", text: "dancers must study physics before they dance" },
            { letter: "C", text: "science and art have almost nothing in common" },
            { letter: "D", text: "physics works with artistry, not against it" }
          ],
          correct: "D"
        },
        {
          id: "conserve",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word conservation shares a root with conserve and preserve, meaning to keep. In sentence 2, conservation of angular momentum means that the momentum is —",
          choices: [
            { letter: "A", text: "lost over time" },
            { letter: "B", text: "kept the same" },
            { letter: "C", text: "doubled in size" },
            { letter: "D", text: "wasted away" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rl-c63-echo",
      family: "G10",
      title: "Echo",
      kind: "Poetry · 10.RL",
      blurb: "A girl calls her name into a cavern where her grandmother once stood.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "I called my name into the cavern's throat<br>" +
        L(2) + "and waited while the stone considered it.<br>" +
        L(3) + "What came back was older than my voice,<br>" +
        L(4) + "rubbed smooth, as if it had been passed<br>" +
        L(5) + "from hand to hand through every dark it crossed.<br>" +
        L(6) + "My grandmother, they say, once stood here too,<br>" +
        L(7) + "a girl with the same name, the same question.<br>" +
        L(8) + "Maybe the cave is still sending hers back,<br>" +
        L(9) + "and what I heard was both of us at once,<br>" +
        L(10) + "one name the mountain has decided to keep." +
        "</p>",
      claims: [
        {
          id: "throat",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In line 1, calling the cave's opening the cavern's throat suggests that the cave is —",
          choices: [
            { letter: "A", text: "dangerous and likely to collapse" },
            { letter: "B", text: "narrow and too tight to enter" },
            { letter: "C", text: "like a living thing that can speak" },
            { letter: "D", text: "empty and silent for centuries" }
          ],
          correct: "C"
        },
        {
          id: "smooth",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "The description of the echo in lines 4 and 5, rubbed smooth and passed from hand to hand, mainly suggests that the sound —",
          choices: [
            { letter: "A", text: "has been worn by time and many people" },
            { letter: "B", text: "is sharper and louder than her voice" },
            { letter: "C", text: "was copied from a recording she heard" },
            { letter: "D", text: "never truly left the speaker's mouth" }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "How does line 6 shift the focus of the poem Echo?",
          choices: [
            { letter: "A", text: "from a happy memory to a sad one" },
            { letter: "B", text: "from the mountain to the city below" },
            { letter: "C", text: "from a question to a firm answer" },
            { letter: "D", text: "from one moment to a family's past" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which idea does the poem Echo most clearly develop?",
          choices: [
            { letter: "A", text: "Caves are too dangerous for young explorers." },
            { letter: "B", text: "A place can link a person to family before her." },
            { letter: "C", text: "Names lose their meaning as years go by." },
            { letter: "D", text: "Grandparents rarely share their own stories." }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of lines 8–10 of Echo is best described as —",
          choices: [
            { letter: "A", text: "wondering and tender" },
            { letter: "B", text: "angry and impatient" },
            { letter: "C", text: "fearful and tense" },
            { letter: "D", text: "mocking and cold" }
          ],
          correct: "A"
        },
        {
          id: "considered",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Line 2, waited while the stone considered it, suggests that the speaker —",
          choices: [
            { letter: "A", text: "is impatient to hear her own echo" },
            { letter: "B", text: "doubts that any echo will come back" },
            { letter: "C", text: "is afraid of being left alone there" },
            { letter: "D", text: "treats the cave with patient respect" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-ri-c63-competitorinfo",
      family: "G10",
      title: "Competitor Information",
      kind: "Functional text · 10.RI",
      blurb: "Check-in, music, dressing rooms and medals at a regional dance championship.",
      level: 2,
      passage:
        "<p><strong>Coastal Regional Dance Championship: Competitor Information</strong></p>" +
        "<p>" + N(1) + "Check-in opens at 7:30 a.m. in the east lobby of Harbor View High School, and each studio director must sign in for the whole team. " +
        N(2) + "<strong>Music:</strong> Upload your track by Wednesday at noon, and bring a backup on a labeled flash drive. " +
        N(3) + "Routines longer than three minutes will lose two points for every fifteen seconds over the limit. " +
        N(4) + "<strong>Dressing rooms:</strong> Rooms are assigned by age division, not by studio, so dancers may share space with competitors. " +
        N(5) + "<strong>Awards:</strong> Results for each division are announced at the end of that division's block, not at the end of the day. " +
        N(6) + "Dancers who leave before their block's awards will not have medals mailed to them. " +
        N(7) + "<strong>Note to families:</strong> Flash photography is not permitted during routines because a sudden flash can cause a dancer to lose balance." +
        "</p>",
      claims: [
        {
          id: "purpose",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "The competitor information sheet is written mainly to —",
          choices: [
            { letter: "A", text: "persuade new dancers to sign up for the championship" },
            { letter: "B", text: "report the final results of each age division" },
            { letter: "C", text: "prepare studios and families for the event's rules" },
            { letter: "D", text: "advertise Harbor View High School to visitors" }
          ],
          correct: "C"
        },
        {
          id: "points",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.2",
          stem: "A studio's routine runs three minutes and thirty seconds. According to the sheet, how many points will it lose?",
          choices: [
            { letter: "A", text: "two points" },
            { letter: "B", text: "four points" },
            { letter: "C", text: "six points" },
            { letter: "D", text: "no points at all" }
          ],
          correct: "B"
        },
        {
          id: "flash",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The sheet gives the reason for the flash photography rule mainly to —",
          choices: [
            { letter: "A", text: "warn families that cameras will be taken away" },
            { letter: "B", text: "suggest that videos of routines will be sold later" },
            { letter: "C", text: "show that the judges dislike being photographed" },
            { letter: "D", text: "help families see that the rule protects dancers" }
          ],
          correct: "D"
        },
        {
          id: "layout",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "The competitor information sheet is organized mainly by —",
          choices: [
            { letter: "A", text: "topic, with a bold label for each group of rules" },
            { letter: "B", text: "time, listing every routine from first to last" },
            { letter: "C", text: "importance, from the strictest rule to the loosest" },
            { letter: "D", text: "comparison, setting this year beside last year" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "The tone of the competitor information sheet is best described as —",
          choices: [
            { letter: "A", text: "direct and informative" },
            { letter: "B", text: "excited and boastful" },
            { letter: "C", text: "apologetic and uncertain" },
            { letter: "D", text: "suspicious and stern" }
          ],
          correct: "A"
        },
        {
          id: "block",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 5, the word block most nearly means —",
          choices: [
            { letter: "A", text: "a solid piece of wood" },
            { letter: "B", text: "to stand in the way of" },
            { letter: "C", text: "a set period of time" },
            { letter: "D", text: "one length of a city street" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rl-c63-overhang",
      family: "G10",
      title: "Forty-One Entries",
      kind: "Literary · 10.RL",
      blurb: "A careful climber keeps a record of every fall, until a nine-year-old asks one question.",
      level: 2,
      passage:
        "<p>" + N(1) + "The yellow route at Granite Loft was called Overhang Owl, and Bao Tran had fallen off its last hold forty-one times. " +
        N(2) + "He kept count in a notebook, because counting made the failures feel like data instead of defeat. " +
        N(3) + "On Saturday, a nine-year-old in a borrowed harness watched him peel off again and land on the mat with a thud. " +
        N(4) + "\"Why do you keep reaching?\" she asked. " +
        N(5) + "\"That's the hold,\" Bao said, chalk drifting from his hands like flour. " +
        N(6) + "The girl shrugged, climbed the first few moves, and then did something Bao had never tried: she let her feet swing free and caught the last hold with both hands. " +
        N(7) + "Bao stared at the notebook in his lap. " +
        N(8) + "Forty-one entries, and not one had asked whether he was solving the right problem." +
        "</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the climbing gym story is most ironic?",
          choices: [
            { letter: "A", text: "The route is named after an owl that never visits the gym." },
            { letter: "B", text: "Bao lands on a soft mat instead of on the hard floor." },
            { letter: "C", text: "A careful record-keeper is outdone by a child's new idea." },
            { letter: "D", text: "The young girl climbs in a harness that someone lent her." }
          ],
          correct: "C"
        },
        {
          id: "data",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 2 suggests that Bao is someone who —",
          choices: [
            { letter: "A", text: "tries to treat his failures calmly" },
            { letter: "B", text: "wants other climbers to notice him" },
            { letter: "C", text: "is ready to give up on the route" },
            { letter: "D", text: "cares more about notes than climbing" }
          ],
          correct: "A"
        },
        {
          id: "peel",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "In sentence 3, the phrase peel off again suggests that Bao's falls have become —",
          choices: [
            { letter: "A", text: "dangerous to the people below" },
            { letter: "B", text: "rare and surprising to watch" },
            { letter: "C", text: "funny to the other climbers" },
            { letter: "D", text: "routine and almost expected" }
          ],
          correct: "D"
        },
        {
          id: "turning",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point of the story about Overhang Owl?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 1" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The final sentence of the climbing story mainly serves to —",
          choices: [
            { letter: "A", text: "show that Bao plans to throw the notebook away" },
            { letter: "B", text: "reveal Bao's sense that his method was the flaw" },
            { letter: "C", text: "suggest that the girl has broken a gym rule" },
            { letter: "D", text: "explain how many times Bao will need to retry" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does Bao's story at Granite Loft best support?",
          choices: [
            { letter: "A", text: "Children usually learn sports faster than adults." },
            { letter: "B", text: "Keeping careful records of every attempt guarantees improvement." },
            { letter: "C", text: "Effort works best alongside a willingness to rethink." },
            { letter: "D", text: "Climbing is more about strength than about skill." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c63-roadcut",
      family: "G10",
      title: "Reading a Road Cut",
      kind: "Informational · 10.RI",
      blurb: "The striped rock walls beside a highway hold the history of an ancient sea.",
      level: 2,
      passage:
        "<p>" + N(1) + "Along many highways, road builders blast through hills and leave behind a road cut, a wall of bare rock that geologists treat like an open book. " +
        N(2) + "In limestone regions, the stripes in the wall are layers of sediment that once settled on the floor of a shallow sea. " +
        N(3) + "Each layer formed over thousands of years as shells, skeletons, and mud piled up and hardened. " +
        N(4) + "Because younger layers settle on top of older ones, a geologist reading the wall from bottom to top is reading forward in time. " +
        N(5) + "Fossils make the story vivid. " +
        N(6) + "A layer crowded with whole clam shells suggests warm, calm water; a layer of broken shell fragments may record a powerful storm. " +
        N(7) + "Still, road cuts are not museums. " +
        N(8) + "Collecting from them is often illegal, and loose rock can fall without warning, so most geologists observe from a safe distance." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the road cut passage?",
          choices: [
            { letter: "A", text: "Highway builders often damage valuable fossil beds." },
            { letter: "B", text: "Road cut layers record a long history that can be read." },
            { letter: "C", text: "Limestone forms only in the warm, calm water of shallow seas." },
            { letter: "D", text: "Geologists prefer road cuts to museums for their research." }
          ],
          correct: "B"
        },
        {
          id: "book",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author compares a road cut to an open book in sentence 1 mainly to suggest that the rock —",
          choices: [
            { letter: "A", text: "has been written on by earlier visitors" },
            { letter: "B", text: "is as thin and fragile as a page of paper" },
            { letter: "C", text: "should be kept safely inside a library" },
            { letter: "D", text: "holds information about the past" }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Sentences 7 and 8 shift the road cut passage from —",
          choices: [
            { letter: "A", text: "what road cuts reveal to their limits and dangers" },
            { letter: "B", text: "a description of fossils to a story about a storm" },
            { letter: "C", text: "the history of highways to the history of the sea" },
            { letter: "D", text: "a scientist's opinion to a list of measurements" }
          ],
          correct: "A"
        },
        {
          id: "storm",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Based on sentence 6, a rock layer full of broken shell fragments most likely shows that —",
          choices: [
            { letter: "A", text: "the water at that time was warm and calm" },
            { letter: "B", text: "road builders cracked the shells with blasting" },
            { letter: "C", text: "a strong storm once churned the sea floor" },
            { letter: "D", text: "the layer is younger than the one above it" }
          ],
          correct: "C"
        },
        {
          id: "caution",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "explain how fossils are removed from a road cut" },
            { letter: "B", text: "argue that highways should avoid limestone hills" },
            { letter: "C", text: "describe the tools that most geologists carry" },
            { letter: "D", text: "caution readers against collecting from road cuts" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The author's attitude toward road cuts is best described as —",
          choices: [
            { letter: "A", text: "admiring but careful" },
            { letter: "B", text: "bored and dismissive" },
            { letter: "C", text: "angry and disapproving" },
            { letter: "D", text: "nervous and confused" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rv-c63-ballroom",
      family: "G10",
      title: "The Final Callback",
      kind: "Vocabulary · 10.RV",
      blurb: "The least experienced couple at a ballroom classic dances an unflashy final waltz.",
      level: 3,
      passage:
        "<p>" + N(1) + "By the final callback of the Lakeshore Ballroom Classic, only six couples remained, and Ji-woo and Mateo were the least experienced of them. " +
        N(2) + "Their footwork was not <strong>impeccable</strong>; a judge had noted a late heel lead in the semifinal. " +
        N(3) + "What they had was a <strong>tenacious</strong> refusal to quit, built over a summer of six o'clock practices in a church basement. " +
        N(4) + "The couple beside them moved with <strong>lithe</strong>, effortless grace, and Mateo found it <strong>disconcerting</strong> to watch them warm up. " +
        N(5) + "Ji-woo turned him gently away from the mirror. " +
        N(6) + "\"We only need to <strong>synchronize</strong> with each other,\" she said, \"not with them.\" " +
        N(7) + "Their final waltz was <strong>understated</strong>, with no dramatic tricks, and when the music ended the room was quiet for a breath before it applauded. " +
        N(8) + "They placed fourth, and Mateo framed the scoresheet anyway." +
        "</p>",
      claims: [
        {
          id: "impeccable",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word impeccable combines the prefix im-, meaning not, with a Latin root meaning to make a mistake. Based on this, impeccable most nearly means —",
          choices: [
            { letter: "A", text: "very fast" },
            { letter: "B", text: "badly planned" },
            { letter: "C", text: "without flaw" },
            { letter: "D", text: "hard to see" }
          ],
          correct: "C"
        },
        {
          id: "synchronize",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word synchronize combines syn-, meaning together, with chron, meaning time. In sentence 6, to synchronize is to —",
          choices: [
            { letter: "A", text: "move in time together" },
            { letter: "B", text: "compete against a rival" },
            { letter: "C", text: "copy another's costume" },
            { letter: "D", text: "practice for a long time" }
          ],
          correct: "A"
        },
        {
          id: "tenacious",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author calls the couple's refusal to quit tenacious rather than stubborn. Compared with stubborn, tenacious has a connotation that is more —",
          choices: [
            { letter: "A", text: "admiring" },
            { letter: "B", text: "critical" },
            { letter: "C", text: "humorous" },
            { letter: "D", text: "fearful" }
          ],
          correct: "A"
        },
        {
          id: "understated",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author describes the waltz as understated rather than plain. Compared with plain, understated suggests that the waltz was —",
          choices: [
            { letter: "A", text: "dull and easy to forget" },
            { letter: "B", text: "tastefully restrained" },
            { letter: "C", text: "poorly rehearsed and stiff" },
            { letter: "D", text: "overly dramatic and loud" }
          ],
          correct: "B"
        },
        {
          id: "disconcerting",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which sentence best helps the reader understand that disconcerting in sentence 4 means unsettling?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "lithe",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 4, the word lithe most nearly means —",
          choices: [
            { letter: "A", text: "heavy, slow, and clumsy" },
            { letter: "B", text: "nervous and shaky" },
            { letter: "C", text: "loud and showy" },
            { letter: "D", text: "supple and graceful" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-dsr-c63-warmup",
      family: "G10",
      title: "A New Warm-Up",
      kind: "Paired texts · 10.DSR",
      blurb: "A coach changes the team's warm-up, and a science article explains why.",
      level: 1,
      passage:
        "<p><strong>Text 1 — A Note from Coach Ilse Brandt to the JV Soccer Team</strong></p>" +
        "<p>" + N(1) + "Starting Monday, we are replacing our old warm-up. " +
        N(2) + "Instead of holding long toe-touch stretches, we will jog, do high knees, and swing our legs through the motions we use in games. " +
        N(3) + "This is called a dynamic warm-up. " +
        N(4) + "Please arrive five minutes early, because it takes longer than our old routine. " +
        N(5) + "If you feel any pain, stop and tell me right away.</p>" +
        "<p><strong>Text 2 — From a Sports Science Article</strong></p>" +
        "<p>" + N(6) + "For years, athletes began practice by holding stretches for thirty seconds or more. " +
        N(7) + "Researchers now recommend saving those static stretches for after exercise. " +
        N(8) + "Studies show that holding a long stretch right before a sprint can briefly reduce a muscle's power. " +
        N(9) + "A dynamic warm-up, made of moving stretches and light jogging, raises body temperature and prepares muscles for the motions of a sport.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do Coach Brandt's note and the sports science article agree?",
          choices: [
            { letter: "A", text: "Players should hold each stretch for thirty seconds." },
            { letter: "B", text: "A moving warm-up is a good way to begin practice." },
            { letter: "C", text: "Soccer players need more stretching than sprinters." },
            { letter: "D", text: "Practices should start five minutes later than before." }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Based on both texts, Coach Brandt most likely changed the warm-up because —",
          choices: [
            { letter: "A", text: "the players complained that stretching was boring" },
            { letter: "B", text: "the old routine took far too long before every game" },
            { letter: "C", text: "several players had been hurt during practice" },
            { letter: "D", text: "long stretches before play can briefly reduce power" }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How do the two texts about warming up differ in purpose?",
          choices: [
            { letter: "A", text: "Text 1 gives a team directions; Text 2 explains research." },
            { letter: "B", text: "Text 1 reports research; Text 2 gives a team directions." },
            { letter: "C", text: "Text 1 argues against stretching; Text 2 defends it." },
            { letter: "D", text: "Text 1 tells a story; Text 2 gives a list of rules." }
          ],
          correct: "A"
        },
        {
          id: "static",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to Text 2, when do researchers recommend doing static stretches?",
          choices: [
            { letter: "A", text: "right before a sprint" },
            { letter: "B", text: "during the first half" },
            { letter: "C", text: "after exercise is over" },
            { letter: "D", text: "only on rest days" }
          ],
          correct: "C"
        },
        {
          id: "support",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "Select TWO sentences from Text 2 that best explain the decision Coach Brandt announces in sentence 1.",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Text 2 is organized mainly by —",
          choices: [
            { letter: "A", text: "describing an old habit, then what research now advises" },
            { letter: "B", text: "listing the steps of a warm-up in the order they occur" },
            { letter: "C", text: "comparing soccer players with runners and swimmers" },
            { letter: "D", text: "telling the story of one athlete's serious injury" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c63-westgate",
      family: "G10",
      title: "The Third Horn",
      kind: "Literary · 10.RL",
      blurb: "On the last night of the Lamp Festival, the strictest gatekeeper in Teshqal hears poorly.",
      level: 3,
      passage:
        "<p>" + N(1) + "For forty years, Idris had closed the western gate of Teshqal at the third horn, and the city joked that the horn waited for him rather than the other way around. " +
        N(2) + "On the last night of the Lamp Festival, the second horn sounded while the road below still held one cart: a potter, his wife, and a mule too tired to hurry. " +
        N(3) + "Young Peshet reached for the heavy bar. " +
        N(4) + "\"Wait,\" said Idris, cupping a hand to his ear. " +
        N(5) + "\"Was that the second horn or the first? " +
        N(6) + "My hearing is not what it was.\" " +
        N(7) + "The third horn rolled over the rooftops just as the mule's hooves struck the paving stones inside the wall. " +
        N(8) + "Idris dropped the bar into place, brushing dust from his sleeve, and Peshet noticed that the old man's hearing now seemed perfectly fine." +
        "</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Why is Idris's complaint about his hearing in sentence 6 ironic?",
          choices: [
            { letter: "A", text: "Peshet is the one who actually has trouble hearing." },
            { letter: "B", text: "The festival is too loud for anyone to hear the horns." },
            { letter: "C", text: "The potter's mule is the reason the cart is late." },
            { letter: "D", text: "A gatekeeper famed for timing pretends to lose count." }
          ],
          correct: "D"
        },
        {
          id: "idris",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Idris's words and actions in sentences 4–6 reveal that he —",
          choices: [
            { letter: "A", text: "is growing too old to keep his post" },
            { letter: "B", text: "quietly puts kindness ahead of a rule" },
            { letter: "C", text: "wants Peshet to take the blame for him" },
            { letter: "D", text: "distrusts travelers who arrive at night" }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The details in sentence 2 (the second horn, one cart still on the road, a mule too tired to hurry) mainly create a mood of —",
          choices: [
            { letter: "A", text: "suspense" },
            { letter: "B", text: "celebration" },
            { letter: "C", text: "boredom" },
            { letter: "D", text: "anger" }
          ],
          correct: "A"
        },
        {
          id: "joke",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author opens with the city's joke about the horn waiting for Idris (sentence 1) mainly to —",
          choices: [
            { letter: "A", text: "show that the people of Teshqal dislike Idris" },
            { letter: "B", text: "explain how the horns of the city are made" },
            { letter: "C", text: "build his reputation so his choice surprises" },
            { letter: "D", text: "suggest that the horn players are often late" }
          ],
          correct: "C"
        },
        {
          id: "climax",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the climax of the story at the western gate?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "fine",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of the final sentence about Idris's hearing is best described as —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "gently humorous" },
            { letter: "C", text: "grim and fearful" },
            { letter: "D", text: "openly mocking" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-ri-c63-heartzones",
      family: "G10",
      title: "Honest Teammates",
      kind: "Informational · 10.RI",
      blurb: "A cross-country team straps on heart-rate monitors and learns what easy really means.",
      level: 1,
      passage:
        "<p>" + N(1) + "This fall, the cross-country team at Pinecrest High began wearing chest-strap heart-rate monitors during every practice. " +
        N(2) + "Coach Farida Haddad wanted to solve a common problem: runners often train too hard on easy days and too easily on hard days. " +
        N(3) + "Each runner's monitor sends data to a tablet, which divides effort into five zones. " +
        N(4) + "Easy runs are meant to stay in zones 1 and 2, where the body builds endurance without heavy strain. " +
        N(5) + "Interval workouts push into zones 4 and 5 for short bursts. " +
        N(6) + "In the first month, the tablet showed that most runners were spending their easy days in zone 3, a middle level that tires the body without the full benefits of either. " +
        N(7) + "After slowing down, several runners reported fresher legs on race days. " +
        N(8) + "Coach Haddad now calls the monitors her honest teammates." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the passage about the Pinecrest monitors?",
          choices: [
            { letter: "A", text: "Most runners dislike wearing chest straps at practice." },
            { letter: "B", text: "Tablets have replaced coaches on many running teams." },
            { letter: "C", text: "Monitors helped runners match effort to each day's goal." },
            { letter: "D", text: "Interval workouts are the key to winning every race." }
          ],
          correct: "C"
        },
        {
          id: "month",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.2",
          stem: "According to the passage, what did the tablet reveal during the first month?",
          choices: [
            { letter: "A", text: "Most runners spent their easy days in zone 3." },
            { letter: "B", text: "Most runners never reached zones 4 and 5." },
            { letter: "C", text: "Several monitors sent the wrong data to the tablet." },
            { letter: "D", text: "The team ran faster on easy days than on race days." }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "The passage about the heart-rate monitors is organized mainly by —",
          choices: [
            { letter: "A", text: "comparing two teams that train in different ways" },
            { letter: "B", text: "listing the five zones from hardest to easiest" },
            { letter: "C", text: "describing one race from start to finish" },
            { letter: "D", text: "presenting a problem, a tool, and the results" }
          ],
          correct: "D"
        },
        {
          id: "zones",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author explains the five zones in sentences 3–5 mainly to —",
          choices: [
            { letter: "A", text: "argue that every team should buy the same tablet" },
            { letter: "B", text: "give background needed to understand sentence 6" },
            { letter: "C", text: "show that Coach Haddad once worked as a doctor" },
            { letter: "D", text: "warn readers about the dangers of hard intervals" }
          ],
          correct: "B"
        },
        {
          id: "honest",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "Coach Haddad calls the monitors honest teammates in sentence 8 mainly to suggest that they —",
          choices: [
            { letter: "A", text: "encourage the runners to cheer for one another" },
            { letter: "B", text: "could someday replace the slower team members" },
            { letter: "C", text: "report effort truthfully when runners misjudge it" },
            { letter: "D", text: "are too costly for most schools to purchase" }
          ],
          correct: "C"
        },
        {
          id: "fresher",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 7, the word fresher most nearly means —",
          choices: [
            { letter: "A", text: "less tired" },
            { letter: "B", text: "more recently made" },
            { letter: "C", text: "lower in temperature" },
            { letter: "D", text: "less dirty" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rv-c63-canyon",
      family: "G10",
      title: "Cutbank Canyon",
      kind: "Vocabulary · 10.RV",
      blurb: "On a class trip, a striped cliff gives two students two different words for the same view.",
      level: 1,
      passage:
        "<p>" + N(1) + "On the class trip to Cutbank Canyon, Ms. Abernathy stopped the group beside a cliff striped in red, tan, and gray. " +
        N(2) + "\"Those bands are <strong>strata</strong>,\" she said, \"layers of rock laid down one after another.\" " +
        N(3) + "Kofi pointed to a gray layer that looked <strong>brittle</strong>, crumbling into flakes when he brushed it with his boot. " +
        N(4) + "Above it sat a red layer so <strong>durable</strong> that it jutted out like a shelf, unbroken by centuries of wind. " +
        N(5) + "Ms. Abernathy explained that the canyon was carved by <strong>erosion</strong>, the slow wearing away of rock by water and wind. " +
        N(6) + "Lena called the view <strong>stark</strong>, but Kofi thought <strong>spare</strong> was the better word; nothing grew there, yet nothing looked missing. " +
        N(7) + "On the bus home, he sketched the cliff from memory, layer by layer." +
        "</p>",
      claims: [
        {
          id: "strata",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on sentence 2, the word strata means —",
          choices: [
            { letter: "A", text: "kinds of tools" },
            { letter: "B", text: "streaks of paint" },
            { letter: "C", text: "layers of rock" },
            { letter: "D", text: "beams of light" }
          ],
          correct: "C"
        },
        {
          id: "brittle",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which words from sentence 3 best help the reader understand that brittle means easily broken?",
          choices: [
            { letter: "A", text: "\"a gray layer that looked\"" },
            { letter: "B", text: "\"crumbling into flakes\"" },
            { letter: "C", text: "\"Kofi pointed to\"" },
            { letter: "D", text: "\"when he brushed it with his boot\"" }
          ],
          correct: "B"
        },
        {
          id: "durable",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word durable shares the root dur, meaning last, with duration and endure. In sentence 4, a durable layer is one that —",
          choices: [
            { letter: "A", text: "lasts without breaking" },
            { letter: "B", text: "changes color often" },
            { letter: "C", text: "formed very quickly" },
            { letter: "D", text: "sits deep underground" }
          ],
          correct: "A"
        },
        {
          id: "erosion",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The suffix -ion turns a verb into a noun, as in protect and protection. Based on this, erosion in sentence 5 names —",
          choices: [
            { letter: "A", text: "a person who studies canyons" },
            { letter: "B", text: "a place where rocks are found" },
            { letter: "C", text: "a tool for cutting stone" },
            { letter: "D", text: "the process of wearing away" }
          ],
          correct: "D"
        },
        {
          id: "stark",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "Lena calls the canyon view stark. Compared with spare, the word stark has a connotation that is more —",
          choices: [
            { letter: "A", text: "harsh and bleak" },
            { letter: "B", text: "warm and cheerful" },
            { letter: "C", text: "busy and crowded" },
            { letter: "D", text: "bright and colorful" }
          ],
          correct: "A"
        },
        {
          id: "spare",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "Kofi prefers the word spare because he sees the empty canyon as —",
          choices: [
            { letter: "A", text: "dangerous and unwelcoming" },
            { letter: "B", text: "ugly and lifeless" },
            { letter: "C", text: "simple but complete" },
            { letter: "D", text: "unfinished and broken" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-dsr-c63-nightofreeds",
      family: "G10",
      title: "The Night of Reeds",
      kind: "Paired texts · 10.DSR",
      blurb: "A traveler and a canal clerk describe the same festival in an imagined river city.",
      level: 3,
      passage:
        "<p><strong>Text 1 — A Traveler's Letter from Saranth</strong></p>" +
        "<p>" + N(1) + "I have never seen a city glow the way Saranth did on the Night of Reeds. " +
        N(2) + "Every family set a reed boat with a candle on the canal, until the water looked like a second sky. " +
        N(3) + "Strangers pressed honey cakes into my hands and refused my coins. " +
        N(4) + "Musicians played on every bridge, and no one seemed to sleep. " +
        N(5) + "If there were rules that night, I saw no one follow them, and I was happy to be lost.</p>" +
        "<p><strong>Text 2 — From the Record of the Canal Clerk of Saranth</strong></p>" +
        "<p>" + N(6) + "Night of Reeds: 2,140 boats launched, 300 more than last year. " +
        N(7) + "Canal workers cleared the sunken reeds by noon the next day, using eleven barges. " +
        N(8) + "Two small fires on the Weavers' Bridge were put out by the bucket line within minutes. " +
        N(9) + "The council's free honey cakes, which cost the treasury sixty silver pieces, ran out before midnight. " +
        N(10) + "Recommendation: post more bucket lines on the bridges next year.</p>",
      claims: [
        {
          id: "purpose",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The two accounts of the Night of Reeds differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "lists costs, while Text 2 describes how the night felt" },
            { letter: "B", text: "criticizes the festival, while Text 2 defends it" },
            { letter: "C", text: "shares an impression, while Text 2 records results" },
            { letter: "D", text: "gives rules, while Text 2 tells a personal story" }
          ],
          correct: "C"
        },
        {
          id: "cakes",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which detail from Text 1 takes on a new meaning once Text 2 is read?",
          choices: [
            { letter: "A", text: "the musicians playing on every bridge" },
            { letter: "B", text: "the water looking like a second sky" },
            { letter: "C", text: "the traveler's joy at being lost" },
            { letter: "D", text: "the strangers who refused her coins" }
          ],
          correct: "D"
        },
        {
          id: "rules",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "The traveler says she saw no one follow any rules (sentence 5). Which sentence from Text 2 most directly complicates this view?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "B"
        },
        {
          id: "both",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Select TWO details that appear in both accounts of the festival.",
          choices: [
            { letter: "A", text: "boats set on the canal" },
            { letter: "B", text: "honey cakes for the crowd" },
            { letter: "C", text: "fires on a bridge" },
            { letter: "D", text: "music on the bridges" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "tone",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "Compared with the traveler's letter, the tone of the clerk's record is more —",
          choices: [
            { letter: "A", text: "joyful and amazed" },
            { letter: "B", text: "angry and blaming" },
            { letter: "C", text: "sad and regretful" },
            { letter: "D", text: "detached and factual" }
          ],
          correct: "D"
        },
        {
          id: "recommend",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The clerk includes sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "blame the weavers for the fires on their bridge" },
            { letter: "B", text: "ask the council to cancel next year's festival" },
            { letter: "C", text: "suggest a safety change based on the night" },
            { letter: "D", text: "praise the canal workers for clearing the reeds" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rl-c63-anklebells",
      family: "G10",
      title: "Every Mistake Will Ring",
      kind: "Literary · 10.RL",
      blurb: "Priya almost leaves her grandmother's ankle bells in the bag on festival night.",
      level: 1,
      passage:
        "<p>" + N(1) + "Priya had practiced her solo for the Midvale Dance Festival a hundred times, but never with her grandmother's ankle bells. " +
        N(2) + "The bells were old and heavy, and their sound filled the small practice room like rain on a tin roof. " +
        N(3) + "\"They are too loud,\" Priya told her mother. " +
        N(4) + "\"Every mistake will ring.\" " +
        N(5) + "On the night of the festival, she almost left them in the bag. " +
        N(6) + "Then she remembered her grandmother tapping out rhythms on the kitchen table, laughing whenever she lost the beat and starting again. " +
        N(7) + "Priya fastened the bells and walked onstage. " +
        N(8) + "She did miss one step, and the bells rang it out for everyone to hear. " +
        N(9) + "But she kept dancing, and the next ring came right on time." +
        "</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "What is Priya's main conflict in the story about her solo?",
          choices: [
            { letter: "A", text: "Her mother will not let her dance in the festival." },
            { letter: "B", text: "She fears the bells will make her mistakes obvious." },
            { letter: "C", text: "She has not practiced her solo often enough." },
            { letter: "D", text: "Her grandmother wants the old bells returned." }
          ],
          correct: "B"
        },
        {
          id: "rain",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "The simile in sentence 2, like rain on a tin roof, mainly emphasizes that the bells sound —",
          choices: [
            { letter: "A", text: "soft and soothing" },
            { letter: "B", text: "sad and lonely" },
            { letter: "C", text: "far away and faint" },
            { letter: "D", text: "loud and constant" }
          ],
          correct: "D"
        },
        {
          id: "memory",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The memory of the grandmother in sentence 6 mainly serves to —",
          choices: [
            { letter: "A", text: "show what gives Priya courage to wear the bells" },
            { letter: "B", text: "explain where the grandmother learned to dance" },
            { letter: "C", text: "reveal that Priya's family dislikes loud music" },
            { letter: "D", text: "describe the kitchen where Priya practices" }
          ],
          correct: "A"
        },
        {
          id: "kept",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Priya's actions in sentences 8 and 9 show that she —",
          choices: [
            { letter: "A", text: "blames the bells for her mistake" },
            { letter: "B", text: "is embarrassed and leaves the stage" },
            { letter: "C", text: "keeps going after a mistake" },
            { letter: "D", text: "never makes a single error" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of the final sentence of Priya's story is best described as —",
          choices: [
            { letter: "A", text: "quietly triumphant" },
            { letter: "B", text: "nervous and doubtful" },
            { letter: "C", text: "bitter and let down" },
            { letter: "D", text: "silly and joking" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does the story of Priya's solo best support?",
          choices: [
            { letter: "A", text: "Old objects should be kept safely at home." },
            { letter: "B", text: "Perfect practice always leads to a perfect show." },
            { letter: "C", text: "Mothers usually give the best advice." },
            { letter: "D", text: "Courage means continuing despite mistakes." }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
