/* SOL Labyrinth — v5.15 expansion: Grade 10 tiny-tier packs (Virginia G10).
 * Twenty-five original TINY texts (50–90 words; poems 6–8 lines; paired texts
 * 35–45 words each), 5 questions each, built around chess tournaments,
 * learning a new language, a family farm and street murals.
 * No VDOE / copyrighted text. Loaded after content.js; pushes into the live
 * HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── chess tournaments ───────────────────────── */
    {
      id: "g10-rl-c61-endgame",
      family: "G10",
      title: "Ninety Seconds",
      kind: "Literary · 10.RL",
      blurb: "A losing chess position, a ticking clock, and one quiet pawn move.",
      level: 1,
      passage:
        "<p>" + N(1) + "Tomás Reyes had spent forty minutes defending a position his coach would have called hopeless. " +
        N(2) + "Now only the kings and three pawns remained, and his clock read ninety seconds. " +
        N(3) + "His opponent, a tall senior from Fairview, tapped a pen like a metronome. " +
        N(4) + "Tomás kept his hands folded in his lap until he was sure. " +
        N(5) + "Then he pushed his last pawn one square, as if setting down a full glass. " +
        N(6) + "The senior stopped tapping. " +
        N(7) + "After a long minute, he offered his hand for a draw." +
        "</p>",
      claims: [
        {
          id: "folded",
          sol: "10.RL.1.C",
          stem: "Sentence 4 characterizes Tomás as someone who —",
          choices: [
            { letter: "A", text: "acts quickly on his first instinct" },
            { letter: "B", text: "waits until he is certain before acting" },
            { letter: "C", text: "has already given up on the game" },
            { letter: "D", text: "is trying to distract his opponent" }
          ],
          correct: "B"
        },
        {
          id: "glass",
          sol: "10.RL.2.A",
          stem: "The simile in sentence 5, as if setting down a full glass, suggests that Tomás moves the pawn —",
          choices: [
            { letter: "A", text: "carefully and steadily" },
            { letter: "B", text: "angrily and loudly" },
            { letter: "C", text: "carelessly and fast" },
            { letter: "D", text: "reluctantly and late" }
          ],
          correct: "A"
        },
        {
          id: "tapping",
          sol: "10.RL.3.A",
          stem: "The author includes the short sentence 6, The senior stopped tapping, mainly to —",
          choices: [
            { letter: "A", text: "describe the noise level in the room" },
            { letter: "B", text: "show that the senior has run out of time" },
            { letter: "C", text: "explain why the chess clock stopped" },
            { letter: "D", text: "signal that the move has unsettled him" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the story about Tomás and the senior from Fairview?",
          choices: [
            { letter: "A", text: "Experience will always defeat youth." },
            { letter: "B", text: "Winning is the only result that counts." },
            { letter: "C", text: "Patience under pressure can save a bad situation." },
            { letter: "D", text: "Coaches usually misjudge their own players." }
          ],
          correct: "C"
        },
        {
          id: "draw",
          sol: "10.RV.1.C",
          stem: "In sentence 7, the word draw most nearly means —",
          choices: [
            { letter: "A", text: "a quick pencil sketch" },
            { letter: "B", text: "a game that ends in a tie" },
            { letter: "C", text: "a pull toward something" },
            { letter: "D", text: "a random selection of names" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-ri-c61-chessclock",
      family: "G10",
      title: "Two Clocks in One",
      kind: "Informational · 10.RI",
      blurb: "How a double clock keeps tournament chess moving.",
      level: 1,
      passage:
        "<p>" + N(1) + "A chess clock is really two clocks joined in one case. " +
        N(2) + "When a player finishes a move, she presses a button on her side, which stops her own clock and starts her opponent's. " +
        N(3) + "Before these clocks were common, a single game could stretch across many hours. " +
        N(4) + "Tournament directors adopted the clocks to keep events on schedule. " +
        N(5) + "Today most clocks are digital and can add a few seconds after each move. " +
        N(6) + "That small bonus lets a player in trouble keep playing well instead of losing on time." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the passage about chess clocks?",
          choices: [
            { letter: "A", text: "Digital clocks are more accurate than older wooden ones." },
            { letter: "B", text: "Chess clocks limit thinking time and keep games moving." },
            { letter: "C", text: "Most chess players dislike being timed during a game." },
            { letter: "D", text: "Tournament directors invented chess to fill schedules." }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "10.RI.1.B",
          stem: "Which sentence best explains why tournament directors began using chess clocks?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "In the chess clock passage, sentences 3 and 4 are organized mainly as —",
          choices: [
            { letter: "A", text: "a problem followed by a solution" },
            { letter: "B", text: "a list of steps in time order" },
            { letter: "C", text: "a comparison of two players" },
            { letter: "D", text: "a claim followed by a counterclaim" }
          ],
          correct: "A"
        },
        {
          id: "bonus",
          sol: "10.RI.2.B",
          stem: "The author mentions the bonus seconds in sentences 5 and 6 mainly to —",
          choices: [
            { letter: "A", text: "argue that modern games last far too long" },
            { letter: "B", text: "show how new clocks help players under pressure" },
            { letter: "C", text: "explain step by step how to set a digital clock" },
            { letter: "D", text: "suggest that older clocks were often broken" }
          ],
          correct: "B"
        },
        {
          id: "stretch",
          sol: "10.RV.1.C",
          stem: "In sentence 3, the word stretch most nearly means —",
          choices: [
            { letter: "A", text: "to pull a tight muscle" },
            { letter: "B", text: "to reach out an arm" },
            { letter: "C", text: "to grow wider in size" },
            { letter: "D", text: "to last a long time" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-rv-c61-gambit",
      family: "G10",
      title: "The Audacious Opening",
      kind: "Vocabulary · 10.RV",
      blurb: "A risky first move at the county championship, and an opponent who takes his time.",
      level: 2,
      passage:
        "<p>" + N(1) + "At the county championship, Leila Haddad opened with a risky <strong>gambit</strong>, giving away a pawn in the first five moves. " +
        N(2) + "Her coach called it <strong>audacious</strong>, but he was smiling when he said it. " +
        N(3) + "Her opponent, a <strong>meticulous</strong> player who recorded every move in neat block letters, took twenty minutes to respond. " +
        N(4) + "Through a tense middle game, Leila stayed <strong>tenacious</strong>, refusing every chance to trade pieces and simplify. " +
        N(5) + "In the end it was her opponent who chose to <strong>concede</strong>, tipping his king over with a polite nod." +
        "</p>",
      claims: [
        {
          id: "gambit",
          sol: "10.RV.1.C",
          stem: "In sentence 1, the context shows that a gambit is —",
          choices: [
            { letter: "A", text: "an early sacrifice made to gain an edge" },
            { letter: "B", text: "a rule that ends a game ahead of time" },
            { letter: "C", text: "a careless mistake made by a beginner" },
            { letter: "D", text: "a method for writing down each move" }
          ],
          correct: "A"
        },
        {
          id: "audacious",
          sol: "10.RV.1.D",
          stem: "Leila's coach could have called the opening bold. Compared with bold, the word audacious in sentence 2 suggests a choice that is —",
          choices: [
            { letter: "A", text: "timid and carefully hidden" },
            { letter: "B", text: "dull and easy to predict" },
            { letter: "C", text: "daring enough to surprise others" },
            { letter: "D", text: "rude toward the opponent" }
          ],
          correct: "C"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.B",
          stem: "As it is used in sentence 3 to describe Leila's opponent, meticulous most nearly means —",
          choices: [
            { letter: "A", text: "quick and impatient" },
            { letter: "B", text: "friendly and talkative" },
            { letter: "C", text: "nervous and unsure" },
            { letter: "D", text: "careful about every detail" }
          ],
          correct: "D"
        },
        {
          id: "tenacious",
          sol: "10.RV.1.A",
          stem: "The word tenacious in sentence 4 comes from a Latin root meaning to hold. Based on this root, tenacious most nearly means —",
          choices: [
            { letter: "A", text: "letting go of a plan easily" },
            { letter: "B", text: "holding on with determination" },
            { letter: "C", text: "holding back from speaking" },
            { letter: "D", text: "holding the pieces gently" }
          ],
          correct: "B"
        },
        {
          id: "concede",
          sol: "10.RV.1.B",
          stem: "Based on the details in sentence 5, to concede a chess game is to —",
          choices: [
            { letter: "A", text: "demand a rematch" },
            { letter: "B", text: "admit defeat and stop" },
            { letter: "C", text: "pause both clocks" },
            { letter: "D", text: "accuse a rival of cheating" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rl-c61-pawn",
      family: "G10",
      title: "The Pawn",
      kind: "Poetry · 10.RL",
      blurb: "Eight lines about the smallest piece on the board and where it can end up.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The pawn goes forward, never back,<br>" +
        L(2) + "one careful square along its track.<br>" +
        L(3) + "It cannot leap the way knights do,<br>" +
        L(4) + "or slide like bishops, swift and true.<br>" +
        L(5) + "But walk it patient, file by file,<br>" +
        L(6) + "and at the far edge, after a while,<br>" +
        L(7) + "the smallest soldier, once ignored,<br>" +
        L(8) + "can wear a crown upon the board." +
        "</p>",
      claims: [
        {
          id: "contrast",
          sol: "10.RL.3.A",
          stem: "Lines 3–4 compare the pawn with knights and bishops mainly to emphasize that the pawn —",
          choices: [
            { letter: "A", text: "moves in a slow and limited way" },
            { letter: "B", text: "is stronger than the other pieces" },
            { letter: "C", text: "is usually the first piece captured" },
            { letter: "D", text: "can travel in any direction it likes" }
          ],
          correct: "A"
        },
        {
          id: "crown",
          sol: "10.RL.2.A",
          stem: "In line 8, the image of the pawn that can wear a crown most nearly suggests —",
          choices: [
            { letter: "A", text: "being captured by a stronger piece" },
            { letter: "B", text: "returning to its starting square" },
            { letter: "C", text: "being forgotten by the player" },
            { letter: "D", text: "gaining unexpected power and rank" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best supported by the poem about the pawn?",
          choices: [
            { letter: "A", text: "Speed matters more than patience." },
            { letter: "B", text: "Steady effort can raise the overlooked." },
            { letter: "C", text: "The strongest players always win." },
            { letter: "D", text: "Only strict rules make games fair." }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RL.2.B",
          stem: "The speaker's tone toward the pawn is best described as —",
          choices: [
            { letter: "A", text: "harsh and bitter" },
            { letter: "B", text: "openly mocking" },
            { letter: "C", text: "quietly admiring" },
            { letter: "D", text: "tense and anxious" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Lines 7–8 of the pawn poem are ironic because —",
          choices: [
            { letter: "A", text: "the piece that seemed least important can become powerful" },
            { letter: "B", text: "the pawn suddenly begins to move backward on the board" },
            { letter: "C", text: "the knights and bishops are captured before the pawn moves" },
            { letter: "D", text: "the speaker admits to never having played a game of chess" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-dsr-c61-blitz",
      family: "G10",
      title: "Fast Games, Slow Games",
      kind: "Paired texts · 10.DSR",
      blurb: "A student who loves three-minute online chess and a coach who wants more.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From a Student's Blog</strong></p>" +
        "<p>" + N(1) + "Online, I can play twenty blitz games before dinner, each one over in three minutes. " +
        N(2) + "I see more openings in a week than my grandfather saw in a year. " +
        N(3) + "Speed teaches pattern; you start recognizing traps before you can explain them.</p>" +
        "<p><strong>Text 2 — From a Coach's Handout</strong></p>" +
        "<p>" + N(4) + "Fast online games build instinct, but they rarely build judgment. " +
        N(5) + "Across a real board, a player sits with one position for twenty minutes. " +
        N(6) + "That slow discomfort is where deep calculation grows. " +
        N(7) + "Play quickly to learn patterns; play slowly to learn why they work.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do the student blogger and the coach agree?",
          choices: [
            { letter: "A", text: "Fast games help players recognize patterns." },
            { letter: "B", text: "Slow games are mostly a waste of time." },
            { letter: "C", text: "Online chess should replace tournaments." },
            { letter: "D", text: "Older players learned more openings." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "The blitz texts differ mainly in that Text 2 —",
          choices: [
            { letter: "A", text: "argues that speed alone builds deep thinking" },
            { letter: "B", text: "claims slow play builds judgment fast play misses" },
            { letter: "C", text: "describes only games played on a computer" },
            { letter: "D", text: "rejects every kind of online practice" }
          ],
          correct: "B"
        },
        {
          id: "variety",
          sol: "10.RI.1.B",
          stem: "Which sentence from Text 1 best supports the idea that online play exposes the blogger to a wide variety of positions?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 2" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "C"
        },
        {
          id: "plan",
          sol: "10.DSR.E",
          stem: "Using both texts, which practice plan would the coach most likely approve for the blogger?",
          choices: [
            { letter: "A", text: "Quit online chess entirely" },
            { letter: "B", text: "Mix quick games with long, slow ones" },
            { letter: "C", text: "Play only three-minute games" },
            { letter: "D", text: "Study only his grandfather's games" }
          ],
          correct: "B"
        },
        {
          id: "both",
          sol: "10.DSR.E",
          stem: "Which idea about chess practice becomes clear only when both texts are read together?",
          choices: [
            { letter: "A", text: "Chess has become popular online." },
            { letter: "B", text: "Blitz games last about three minutes." },
            { letter: "C", text: "Grandparents learned fewer openings." },
            { letter: "D", text: "Fast and slow play build different skills." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-ri-c61-openrules",
      family: "G10",
      title: "Spring Open Player Rules",
      kind: "Functional text · 10.RI",
      blurb: "The rules sheet handed to every player at a weekend chess tournament.",
      level: 1,
      passage:
        "<p><strong>Maplewood Spring Open — Player Rules</strong></p>" +
        "<p>" + N(1) + "<strong>Check-in:</strong> Report to the front table by 8:30 a.m.; late players forfeit round one. " +
        N(2) + "<strong>Devices:</strong> Phones must be switched off and kept in your bag, not your pocket. " +
        N(3) + "<strong>Touch-move:</strong> If you touch one of your pieces, you must move it. " +
        N(4) + "<strong>Disputes:</strong> Stop both clocks and raise your hand; a director will come to your board. " +
        N(5) + "<strong>Results:</strong> The winner reports the score at the front table; after a draw, both players report together.</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The Maplewood rules sheet is written mainly for —",
          choices: [
            { letter: "A", text: "parents waiting in the hallway" },
            { letter: "B", text: "players entering the tournament" },
            { letter: "C", text: "directors settling disagreements" },
            { letter: "D", text: "students who have never played chess" }
          ],
          correct: "B"
        },
        {
          id: "labels",
          sol: "10.RI.2.A",
          stem: "The bold labels that begin each Maplewood rule help a reader mainly by —",
          choices: [
            { letter: "A", text: "letting a player find a rule by topic" },
            { letter: "B", text: "showing which rules are only optional" },
            { letter: "C", text: "ranking the rules by importance" },
            { letter: "D", text: "naming the director for each rule" }
          ],
          correct: "A"
        },
        {
          id: "dispute",
          sol: "10.RI.1.B",
          stem: "According to the Maplewood rules, what should a player do first if a disagreement comes up during a game?",
          choices: [
            { letter: "A", text: "Report the score at the front table" },
            { letter: "B", text: "Move the piece that was touched" },
            { letter: "C", text: "Put both phones away in a bag" },
            { letter: "D", text: "Stop both clocks and raise a hand" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of the Maplewood rules sheet is best described as —",
          choices: [
            { letter: "A", text: "playful and joking" },
            { letter: "B", text: "angry and threatening" },
            { letter: "C", text: "direct and businesslike" },
            { letter: "D", text: "uncertain and apologetic" }
          ],
          correct: "C"
        },
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which of these best summarizes what the Maplewood rules sheet does?",
          choices: [
            { letter: "A", text: "It teaches new players strategies for winning." },
            { letter: "B", text: "It sets expectations for arrival, conduct and results." },
            { letter: "C", text: "It describes the prizes awarded to top players." },
            { letter: "D", text: "It tells the history of the Maplewood tournament." }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── learning a new language ───────────────────────── */
    {
      id: "g10-rl-c61-pineapple",
      family: "G10",
      title: "The Pineapple Teacher",
      kind: "Literary · 10.RL",
      blurb: "Months of Portuguese flashcards meet a real video call with a stepgrandmother in Lisbon.",
      level: 2,
      passage:
        "<p>" + N(1) + "For three months Amara had rehearsed her Portuguese with flashcards, but on the video call her sentences came out stiff as cardboard. " +
        N(2) + "Her stepgrandmother, Lúcia, listened with her chin in her hand. " +
        N(3) + "Amara tried to describe her school and accidentally said her teacher was a pineapple. " +
        N(4) + "Lúcia laughed so hard her glasses slid down her nose. " +
        N(5) + "Then Amara laughed too, and for the first time the words stopped feeling like a test. " +
        N(6) + "They talked until the battery warning blinked." +
        "</p>",
      claims: [
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which sentence marks the turning point in Amara's video call with Lúcia?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "C"
        },
        {
          id: "lucia",
          sol: "10.RL.1.C",
          stem: "Sentence 2 suggests that Lúcia is —",
          choices: [
            { letter: "A", text: "bored by the conversation" },
            { letter: "B", text: "patient and attentive" },
            { letter: "C", text: "confused by the call" },
            { letter: "D", text: "eager to hang up soon" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which detail in the story about Amara's Portuguese is most ironic?",
          choices: [
            { letter: "A", text: "A silly mistake is what puts Amara at ease." },
            { letter: "B", text: "Lúcia's glasses slide down her nose." },
            { letter: "C", text: "The battery warning blinks at the end." },
            { letter: "D", text: "Amara studied with flashcards for months." }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The laughter in sentences 4 and 5 shifts the mood of the call from —",
          choices: [
            { letter: "A", text: "cheerful to gloomy" },
            { letter: "B", text: "calm to frustrated" },
            { letter: "C", text: "hopeful to bored" },
            { letter: "D", text: "nervous to relaxed" }
          ],
          correct: "D"
        },
        {
          id: "rehearsed",
          sol: "10.RV.1.B",
          stem: "In sentence 1, the word rehearsed most nearly means —",
          choices: [
            { letter: "A", text: "practiced" },
            { letter: "B", text: "forgotten" },
            { letter: "C", text: "translated" },
            { letter: "D", text: "recorded" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c61-spacing",
      family: "G10",
      title: "Why Cramming Fades",
      kind: "Informational · 10.RI",
      blurb: "What happens when new vocabulary is reviewed a little later each time.",
      level: 2,
      passage:
        "<p>" + N(1) + "Language teachers have long noticed that cramming vocabulary the night before a quiz works for about a day. " +
        N(2) + "Spaced review, in which a learner revisits a word after one day, then three days, then a week, tends to produce memories that last far longer. " +
        N(3) + "Each return comes just as the word starts to fade, so the brain must work slightly harder to retrieve it. " +
        N(4) + "That small struggle seems to be the point. " +
        N(5) + "Effort, not repetition alone, tells the memory to stay." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the passage on reviewing vocabulary?",
          choices: [
            { letter: "A", text: "Cramming is the most efficient way to learn words." },
            { letter: "B", text: "Reviewing words at growing intervals builds memory." },
            { letter: "C", text: "Teachers should give fewer vocabulary quizzes." },
            { letter: "D", text: "Most memories fade after exactly one week." }
          ],
          correct: "B"
        },
        {
          id: "struggle",
          sol: "10.RI.2.B",
          stem: "The author includes sentence 4, That small struggle seems to be the point, mainly to —",
          choices: [
            { letter: "A", text: "admit that spaced review is unpleasant" },
            { letter: "B", text: "warn students to avoid difficult words" },
            { letter: "C", text: "stress that effortful recall is useful" },
            { letter: "D", text: "introduce a brand-new research study" }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "10.RI.1.C",
          stem: "The author's main purpose in the passage about spaced review is to —",
          choices: [
            { letter: "A", text: "explain why spaced review outlasts cramming" },
            { letter: "B", text: "persuade teachers to cancel weekly quizzes" },
            { letter: "C", text: "tell the story of one struggling student" },
            { letter: "D", text: "compare how two languages are learned" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's attitude toward cramming, as shown in sentence 1, is best described as —",
          choices: [
            { letter: "A", text: "deeply angry" },
            { letter: "B", text: "openly admiring" },
            { letter: "C", text: "anxious and fearful" },
            { letter: "D", text: "mildly skeptical" }
          ],
          correct: "D"
        },
        {
          id: "retrieve",
          sol: "10.RV.1.A",
          stem: "The word retrieve in sentence 3 begins with the prefix re-, as in return and replay. Based on this, retrieve most nearly means —",
          choices: [
            { letter: "A", text: "to bring back" },
            { letter: "B", text: "to throw away" },
            { letter: "C", text: "to try once" },
            { letter: "D", text: "to change" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rv-c61-montreal",
      family: "G10",
      title: "Lunch in Montreal",
      kind: "Vocabulary · 10.RV",
      blurb: "A student who already speaks two languages starts a third.",
      level: 1,
      passage:
        "<p>" + N(1) + "Kofi Mensah is <strong>bilingual</strong>, speaking both English and Twi at home in Columbus. " +
        N(2) + "This year he started French and felt <strong>hesitant</strong> at first, pausing before every word. " +
        N(3) + "His teacher told the class to <strong>mimic</strong> the audio recordings, copying each speaker's rhythm exactly. " +
        N(4) + "She also taught <strong>colloquial</strong> phrases, the casual expressions friends use with each other. " +
        N(5) + "By spring Kofi was not yet <strong>fluent</strong>, but on the class trip to Montreal he could order lunch and joke with the cashier." +
        "</p>",
      claims: [
        {
          id: "bilingual",
          sol: "10.RV.1.A",
          stem: "The word bilingual in sentence 1 joins the prefix bi-, as in bicycle, with a root meaning tongue or language. Bilingual most nearly means —",
          choices: [
            { letter: "A", text: "speaking two languages" },
            { letter: "B", text: "speaking very quickly" },
            { letter: "C", text: "speaking with an accent" },
            { letter: "D", text: "speaking only at home" }
          ],
          correct: "A"
        },
        {
          id: "hesitant",
          sol: "10.RV.1.B",
          stem: "Which phrase from the passage best helps the reader understand the word hesitant?",
          choices: [
            { letter: "A", text: "speaking both English and Twi" },
            { letter: "B", text: "This year he started French" },
            { letter: "C", text: "copying each speaker's rhythm" },
            { letter: "D", text: "pausing before every word" }
          ],
          correct: "D"
        },
        {
          id: "mimic",
          sol: "10.RV.1.C",
          stem: "In sentence 3, the teacher's instruction to mimic the recordings means to —",
          choices: [
            { letter: "A", text: "ignore them" },
            { letter: "B", text: "imitate them" },
            { letter: "C", text: "record them" },
            { letter: "D", text: "criticize them" }
          ],
          correct: "B"
        },
        {
          id: "colloquial",
          sol: "10.RV.1.D",
          stem: "The author calls the phrases Kofi learned colloquial rather than slang. Compared with slang, colloquial suggests language that is —",
          choices: [
            { letter: "A", text: "rude and unfit for any setting" },
            { letter: "B", text: "formal and used in speeches" },
            { letter: "C", text: "casual but fine for daily talk" },
            { letter: "D", text: "outdated and rarely heard" }
          ],
          correct: "C"
        },
        {
          id: "fluent",
          sol: "10.RV.1.D",
          stem: "The author says Kofi was not yet fluent rather than bad at French. Compared with bad at French, not yet fluent suggests that he —",
          choices: [
            { letter: "A", text: "is still working toward ease" },
            { letter: "B", text: "has given up on French" },
            { letter: "C", text: "speaks French perfectly" },
            { letter: "D", text: "dislikes talking in class" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c61-greenonions",
      family: "G10",
      title: "Green Onions",
      kind: "Drama · 10.RL",
      blurb: "A teenager insists on practicing Mandarin at the corner grocery.",
      level: 2,
      passage:
        "<p><em>A small grocery. NIKHIL, sixteen, holds a shopping list written in Mandarin.</em></p>" +
        "<p><strong>NIKHIL:</strong> " + N(1) + "<em>(slowly)</em> I would like... two... green onions?</p>" +
        "<p><strong>MR. CHEN:</strong> " + N(2) + "<em>(in English)</em> Green onions, yes? Two?</p>" +
        "<p><strong>NIKHIL:</strong> " + N(3) + "Please, in Mandarin. " + N(4) + "I am practicing.</p>" +
        "<p><strong>MR. CHEN:</strong> " + N(5) + "<em>(pausing, then smiling)</em> Then I will speak slowly too. " +
        N(6) + "<em>(He answers in Mandarin, pointing to each item.)</em></p>" +
        "<p><strong>NIKHIL:</strong> " + N(7) + "I understood almost all of that!</p>" +
        "<p><strong>MR. CHEN:</strong> " + N(8) + "Almost is how everyone begins.</p>",
      claims: [
        {
          id: "nikhil",
          sol: "10.RL.1.C",
          stem: "Nikhil's request in sentences 3 and 4 shows that he —",
          choices: [
            { letter: "A", text: "wants real practice even if it is slow" },
            { letter: "B", text: "cannot understand spoken English" },
            { letter: "C", text: "hopes to get a discount on onions" },
            { letter: "D", text: "is annoyed with Mr. Chen's answer" }
          ],
          correct: "A"
        },
        {
          id: "decides",
          sol: "10.RL.1.B",
          stem: "Mr. Chen's line in sentence 5 functions in the scene as —",
          choices: [
            { letter: "A", text: "a refusal that ends the talk" },
            { letter: "B", text: "the moment he chooses to help" },
            { letter: "C", text: "a joke at Nikhil's expense" },
            { letter: "D", text: "a complaint about the list" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The playwright ends the grocery scene with Mr. Chen's line in sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "show that Mr. Chen is disappointed" },
            { letter: "B", text: "reveal what was on the shopping list" },
            { letter: "C", text: "present partial understanding as a start" },
            { letter: "D", text: "hint that Nikhil will quit Mandarin" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          stem: "The tone of Mr. Chen's final line to Nikhil is best described as —",
          choices: [
            { letter: "A", text: "sarcastic" },
            { letter: "B", text: "impatient" },
            { letter: "C", text: "sorrowful" },
            { letter: "D", text: "encouraging" }
          ],
          correct: "D"
        },
        {
          id: "slowly",
          sol: "10.RL.2.B",
          stem: "In sentence 1, the stage direction slowly and the pauses in Nikhil's speech mainly create a sense of —",
          choices: [
            { letter: "A", text: "careful uncertainty" },
            { letter: "B", text: "angry impatience" },
            { letter: "C", text: "cheerful confidence" },
            { letter: "D", text: "bored indifference" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-dsr-c61-lingora",
      family: "G10",
      title: "App or Partner?",
      kind: "Paired texts · 10.DSR",
      blurb: "A language app review and a language club newsletter disagree about what practice means.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From an App Review</strong></p>" +
        "<p>" + N(1) + "The Lingora app turned my long bus rides into daily Japanese lessons. " +
        N(2) + "It tracks my streak, rewards me with points, and never runs out of patience. " +
        N(3) + "After ninety days, I can read basic menus and train signs without help.</p>" +
        "<p><strong>Text 2 — From a Language Club Newsletter</strong></p>" +
        "<p>" + N(4) + "Apps are excellent for reading and memorizing, but real conversation is unpredictable. " +
        N(5) + "A partner interrupts, laughs, or asks a question you never studied. " +
        N(6) + "Our club meets every Thursday so members can practice answering in the moment.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "The app reviewer and the club newsletter writer would most likely agree that —",
          choices: [
            { letter: "A", text: "apps help with reading and memorizing" },
            { letter: "B", text: "apps should replace language classes" },
            { letter: "C", text: "conversation is easy for most learners" },
            { letter: "D", text: "Japanese is the hardest language to learn" }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes a key difference between the Lingora review and the newsletter?",
          choices: [
            { letter: "A", text: "Text 1 criticizes apps, while Text 2 praises them." },
            { letter: "B", text: "Text 1 describes a club, while Text 2 reviews an app." },
            { letter: "C", text: "Text 1 values solo study, while Text 2 stresses live talk." },
            { letter: "D", text: "Text 1 is about French, while Text 2 is about Japanese." }
          ],
          correct: "C"
        },
        {
          id: "partner",
          sol: "10.RI.2.B",
          stem: "In Text 2, the details in sentence 5 mainly emphasize that conversation —",
          choices: [
            { letter: "A", text: "is far too difficult for beginners" },
            { letter: "B", text: "demands quick answers to surprises" },
            { letter: "C", text: "should always follow a written script" },
            { letter: "D", text: "is less useful than reading signs" }
          ],
          correct: "B"
        },
        {
          id: "next",
          sol: "10.DSR.E",
          stem: "Using both texts, what would most likely help the Text 1 writer move beyond menus and train signs?",
          choices: [
            { letter: "A", text: "deleting the app from the phone" },
            { letter: "B", text: "reading more signs on the bus" },
            { letter: "C", text: "earning more points every day" },
            { letter: "D", text: "joining a group for live conversation" }
          ],
          correct: "D"
        },
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which statement best summarizes the claim made in the language club newsletter?",
          choices: [
            { letter: "A", text: "Apps build some skills, but speaking needs real partners." },
            { letter: "B", text: "Apps are a waste of time for any serious learner." },
            { letter: "C", text: "Members should study alone before they join the club." },
            { letter: "D", text: "Reading menus is the hardest part of a new language." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c61-thirdgrade",
      family: "G10",
      title: "Start in Third Grade",
      kind: "Argument · 10.RI",
      blurb: "A letter arguing that world-language classes should begin years earlier.",
      level: 3,
      passage:
        "<p>" + N(1) + "Our district should begin world-language classes in third grade instead of ninth. " +
        N(2) + "Young children imitate new sounds easily, while many teenagers feel too embarrassed to try. " +
        N(3) + "Some parents worry that language lessons will crowd out reading and math. " +
        N(4) + "Yet in the neighboring Ridgeview district, which added Spanish to its elementary schools six years ago, reading scores have held steady. " +
        N(5) + "Waiting until high school does not protect students; it simply makes the climb steeper." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the central claim of the argument about world-language classes?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 4" }
          ],
          correct: "A"
        },
        {
          id: "respond",
          sol: "10.RI.1.B",
          stem: "Which detail does the author use to answer the parents' concern in sentence 3?",
          choices: [
            { letter: "A", text: "Young children imitate sounds easily." },
            { letter: "B", text: "Many teenagers feel too embarrassed." },
            { letter: "C", text: "Ridgeview's reading scores held steady." },
            { letter: "D", text: "High school makes the climb steeper." }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "In the argument for earlier language classes, sentences 3 and 4 are organized as —",
          choices: [
            { letter: "A", text: "a cause followed by its effects" },
            { letter: "B", text: "an objection followed by a response" },
            { letter: "C", text: "a list of events in time order" },
            { letter: "D", text: "a definition followed by examples" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's tone in sentence 5 of the language argument is best described as —",
          choices: [
            { letter: "A", text: "uncertain and hesitant" },
            { letter: "B", text: "playful and teasing" },
            { letter: "C", text: "bitter and resentful" },
            { letter: "D", text: "firm and confident" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "This argument for earlier language classes is most likely aimed at —",
          choices: [
            { letter: "A", text: "district leaders and parents" },
            { letter: "B", text: "third-grade students" },
            { letter: "C", text: "Spanish teachers in Ridgeview" },
            { letter: "D", text: "college language professors" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── a family farm ───────────────────────── */
    {
      id: "g10-rl-c61-thunder",
      family: "G10",
      title: "A Calf Named Thunder",
      kind: "Literary · 10.RL",
      blurb: "A four a.m. birth in the barn, and a father who hands over an important job.",
      level: 1,
      passage:
        "<p>" + N(1) + "The calf arrived at four in the morning, wet and wobbling, while rain drummed on the barn roof like impatient fingers. " +
        N(2) + "Marisol Vega had wanted to stay in bed. " +
        N(3) + "Instead she knelt in the straw beside her father, rubbing the calf dry with an old towel. " +
        N(4) + "When it finally stood, legs splayed like a folding chair, her father nodded at her. " +
        N(5) + "\"You name this one,\" he said. " +
        N(6) + "Marisol, suddenly wide awake, chose Thunder." +
        "</p>",
      claims: [
        {
          id: "rain",
          sol: "10.RL.2.A",
          stem: "The simile in sentence 1, like impatient fingers, makes the rain on the barn roof sound —",
          choices: [
            { letter: "A", text: "gentle and soothing" },
            { letter: "B", text: "constant and insistent" },
            { letter: "C", text: "faint and far away" },
            { letter: "D", text: "cheerful and musical" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "10.RL.1.C",
          stem: "Taken together, sentences 2 and 6 show that Marisol —",
          choices: [
            { letter: "A", text: "stays tired and unhappy throughout" },
            { letter: "B", text: "prefers to work alone in the barn" },
            { letter: "C", text: "is afraid of the newborn calf" },
            { letter: "D", text: "shifts from reluctance to excitement" }
          ],
          correct: "D"
        },
        {
          id: "cause",
          sol: "10.RL.1.B",
          stem: "Which event leads directly to Marisol feeling suddenly wide awake?",
          choices: [
            { letter: "A", text: "Rain begins to drum on the roof." },
            { letter: "B", text: "She kneels down in the straw." },
            { letter: "C", text: "Her father asks her to name the calf." },
            { letter: "D", text: "She finds an old towel to use." }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RL.2.B",
          stem: "The overall tone of the story about Marisol and the calf is best described as —",
          choices: [
            { letter: "A", text: "warm and quietly proud" },
            { letter: "B", text: "anxious and grim" },
            { letter: "C", text: "bitter and resentful" },
            { letter: "D", text: "silly and mocking" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the story about the newborn calf?",
          choices: [
            { letter: "A", text: "Farm work is too dangerous for children." },
            { letter: "B", text: "Shared work can turn a chore into a gift." },
            { letter: "C", text: "Fathers rarely trust their children." },
            { letter: "D", text: "Storms always frighten farm animals." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-ri-c61-rotation",
      family: "G10",
      title: "Corn, Then Soybeans",
      kind: "Informational · 10.RI",
      blurb: "Why one Iowa family never plants the same crop in a field two years running.",
      level: 1,
      passage:
        "<p>" + N(1) + "On the Delgado family farm in Iowa, no field grows the same crop two years in a row. " +
        N(2) + "One year a field holds corn, which uses a great deal of nitrogen from the soil. " +
        N(3) + "The next year the same field grows soybeans. " +
        N(4) + "Soybean roots host tiny bacteria that pull nitrogen from the air and return it to the ground. " +
        N(5) + "Because of this rotation, the Delgados spend less on fertilizer. " +
        N(6) + "The switch also confuses pests that expect to find corn in the same place each spring." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          stem: "What is the main idea of the passage about the Delgado farm?",
          choices: [
            { letter: "A", text: "Corn is the most valuable crop grown in Iowa." },
            { letter: "B", text: "Rotating corn and soybeans helps soil and farm." },
            { letter: "C", text: "Bacteria in the soil are harmful to most crops." },
            { letter: "D", text: "Crop pests are impossible for farmers to control." }
          ],
          correct: "B"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "Sentences 2 through 4 of the crop passage are organized mainly to —",
          choices: [
            { letter: "A", text: "show how each crop affects the soil in turn" },
            { letter: "B", text: "compare farms in Iowa with farms elsewhere" },
            { letter: "C", text: "list several problems that have no solution" },
            { letter: "D", text: "tell the history of the Delgado family" }
          ],
          correct: "A"
        },
        {
          id: "money",
          sol: "10.RI.1.B",
          stem: "Which sentence best supports the claim that rotation saves the Delgados money?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "C"
        },
        {
          id: "pests",
          sol: "10.RI.2.B",
          stem: "The author includes sentence 6, about confused pests, mainly to —",
          choices: [
            { letter: "A", text: "warn that soybeans attract more insects" },
            { letter: "B", text: "explain why corn needs so much nitrogen" },
            { letter: "C", text: "argue that farmers should stop growing corn" },
            { letter: "D", text: "give a second benefit of rotating crops" }
          ],
          correct: "D"
        },
        {
          id: "host",
          sol: "10.RV.1.C",
          stem: "In sentence 4, the word host most nearly means —",
          choices: [
            { letter: "A", text: "to throw a party for" },
            { letter: "B", text: "to provide a home for" },
            { letter: "C", text: "to announce a show for" },
            { letter: "D", text: "to form a crowd around" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rl-c61-hens",
      family: "G10",
      title: "Dawn Chores",
      kind: "Poetry · 10.RL",
      blurb: "A grandfather speaks Tagalog to his hens while his grandchild scatters the corn.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My grandfather speaks to the hens in Tagalog,<br>" +
        L(2) + "a language I only half carry,<br>" +
        L(3) + "and they answer him, clucking, as if they agree<br>" +
        L(4) + "with every word about the weather.<br>" +
        L(5) + "I scatter the corn the way he taught me,<br>" +
        L(6) + "wide, like a net thrown over water.<br>" +
        L(7) + "He says the hens don't care which words I use.<br>" +
        L(8) + "I think he means that he doesn't either." +
        "</p>",
      claims: [
        {
          id: "net",
          sol: "10.RL.2.A",
          stem: "In line 6, the simile like a net thrown over water suggests that the speaker scatters the corn —",
          choices: [
            { letter: "A", text: "in a wide, sweeping arc" },
            { letter: "B", text: "in one small, tidy pile" },
            { letter: "C", text: "angrily and in a rush" },
            { letter: "D", text: "slowly, one grain at a time" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          stem: "The tone of lines 7–8 in the poem about the hens is best described as —",
          choices: [
            { letter: "A", text: "bitter" },
            { letter: "B", text: "tender" },
            { letter: "C", text: "confused" },
            { letter: "D", text: "boastful" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the poem Dawn Chores?",
          choices: [
            { letter: "A", text: "Farm animals understand human speech." },
            { letter: "B", text: "Tagalog is too hard for most to learn." },
            { letter: "C", text: "Love can be felt without perfect words." },
            { letter: "D", text: "Chores should always be shared equally." }
          ],
          correct: "C"
        },
        {
          id: "line8",
          sol: "10.RL.3.A",
          stem: "How does line 8 function in the poem about the grandfather and the hens?",
          choices: [
            { letter: "A", text: "It introduces a new character to the farm." },
            { letter: "B", text: "It describes the morning weather in detail." },
            { letter: "C", text: "It repeats the idea of line 1 word for word." },
            { letter: "D", text: "It turns a remark about hens into one about family." }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "In lines 3–4, the hens answering as if they agree mainly creates a mood that is —",
          choices: [
            { letter: "A", text: "playful and gentle" },
            { letter: "B", text: "tense and uneasy" },
            { letter: "C", text: "mournful and dark" },
            { letter: "D", text: "eerie and strange" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rv-c61-drysummer",
      family: "G10",
      title: "The Dry Summer",
      kind: "Vocabulary · 10.RV",
      blurb: "A drought on the Nakamura farm, and two different words for the same careful budget.",
      level: 3,
      passage:
        "<p>" + N(1) + "The summer was so <strong>arid</strong> that the creek behind the Nakamura farm shrank to a string of puddles. " +
        N(2) + "Mr. Nakamura could <strong>irrigate</strong> only the tomato rows, hauling water from the well in buckets. " +
        N(3) + "The corn yielded a <strong>meager</strong> harvest, barely enough to fill the back of one truck. " +
        N(4) + "Still, his daughter Aiko noticed that the old apple trees, with roots reaching deep, stayed <strong>resilient</strong>. " +
        N(5) + "Her father called his careful spending that winter <strong>prudent</strong>, though Aiko privately called it stingy." +
        "</p>",
      claims: [
        {
          id: "arid",
          sol: "10.RV.1.C",
          stem: "Based on the creek detail in sentence 1, arid most nearly means —",
          choices: [
            { letter: "A", text: "very dry" },
            { letter: "B", text: "very windy" },
            { letter: "C", text: "quite chilly" },
            { letter: "D", text: "overcrowded" }
          ],
          correct: "A"
        },
        {
          id: "irrigate",
          sol: "10.RV.1.A",
          stem: "The word irrigate in sentence 2 comes from Latin parts meaning into and to water. Based on this, irrigate most nearly means —",
          choices: [
            { letter: "A", text: "to drain extra water from land" },
            { letter: "B", text: "to supply land with water" },
            { letter: "C", text: "to plow the fields in rows" },
            { letter: "D", text: "to measure how much rain falls" }
          ],
          correct: "B"
        },
        {
          id: "meager",
          sol: "10.RV.1.B",
          stem: "Which phrase from the passage best helps the reader understand the word meager?",
          choices: [
            { letter: "A", text: "the creek shrank to a string of puddles" },
            { letter: "B", text: "hauling water from the well in buckets" },
            { letter: "C", text: "barely enough to fill the back of one truck" },
            { letter: "D", text: "the old apple trees, with roots reaching deep" }
          ],
          correct: "C"
        },
        {
          id: "prudent",
          sol: "10.RV.1.D",
          stem: "Mr. Nakamura calls his spending prudent, while Aiko calls it stingy. Compared with stingy, prudent carries a connotation that is —",
          choices: [
            { letter: "A", text: "more critical, suggesting greed" },
            { letter: "B", text: "more humorous, suggesting a joke" },
            { letter: "C", text: "more fearful, suggesting panic" },
            { letter: "D", text: "more approving, suggesting good sense" }
          ],
          correct: "D"
        },
        {
          id: "resilient",
          sol: "10.RV.1.D",
          stem: "The author describes the apple trees as resilient rather than simply alive. The word resilient adds the idea that the trees —",
          choices: [
            { letter: "A", text: "endure hardship and recover" },
            { letter: "B", text: "are the tallest on the farm" },
            { letter: "C", text: "produce the most fruit each year" },
            { letter: "D", text: "need extra water to survive" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-dsr-c61-roadside",
      family: "G10",
      title: "The Roadside Table",
      kind: "Paired texts · 10.DSR",
      blurb: "A 1968 farm diary and a granddaughter's post about the same family stand.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From Ada Lindqvist's Farm Diary, 1968</strong></p>" +
        "<p>" + N(1) + "Sold eggs and sweet corn at the roadside table today. " +
        N(2) + "Most cars passed without slowing, but three families stopped, and one boy asked how a chicken knows when to lay. " +
        N(3) + "Made four dollars, nearly all of it in dimes.</p>" +
        "<p><strong>Text 2 — From Ellie Lindqvist's Farm Stand Post, Today</strong></p>" +
        "<p>" + N(4) + "Our stand now takes card payments and posts the day's harvest online by six each morning. " +
        N(5) + "Yesterday a girl asked how strawberries grow, so I walked her out to the field. " +
        N(6) + "Grandma Ada would have done the same.</p>",
      claims: [
        {
          id: "shared",
          sol: "10.DSR.D",
          stem: "Which detail appears in both Ada's diary and Ellie's post?",
          choices: [
            { letter: "A", text: "The stand takes card payments." },
            { letter: "B", text: "Most cars drive past the stand." },
            { letter: "C", text: "A curious child asks a farm question." },
            { letter: "D", text: "The harvest is posted online." }
          ],
          correct: "C"
        },
        {
          id: "changed",
          sol: "10.DSR.E",
          stem: "Based on both texts, what has changed most at the Lindqvist stand since 1968?",
          choices: [
            { letter: "A", text: "how customers pay and learn what is for sale" },
            { letter: "B", text: "whether children ever visit the stand" },
            { letter: "C", text: "the family name painted on the table" },
            { letter: "D", text: "whether the family welcomes questions" }
          ],
          correct: "A"
        },
        {
          id: "ellie",
          sol: "10.RL.1.C",
          stem: "Sentence 6 suggests that Ellie views her grandmother as —",
          choices: [
            { letter: "A", text: "old-fashioned and out of touch" },
            { letter: "B", text: "an example of how to treat visitors" },
            { letter: "C", text: "a strict and unfriendly businesswoman" },
            { letter: "D", text: "someone she never had the chance to meet" }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "10.DSR.E",
          stem: "Reading the diary and the post together, a reader can best conclude that the Lindqvist family —",
          choices: [
            { letter: "A", text: "has stopped selling eggs and corn" },
            { letter: "B", text: "earns far more money than it needs" },
            { letter: "C", text: "no longer pays attention to customers" },
            { letter: "D", text: "keeps an old welcome with new tools" }
          ],
          correct: "D"
        },
        {
          id: "passed",
          sol: "10.RV.1.C",
          stem: "In sentence 2, the phrase passed without slowing means that most drivers —",
          choices: [
            { letter: "A", text: "did not stop at the stand" },
            { letter: "B", text: "drove carefully past the farm" },
            { letter: "C", text: "slowed down to wave at Ada" },
            { letter: "D", text: "bought corn without talking" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c61-orchard",
      family: "G10",
      title: "Help Wanted at the Orchard",
      kind: "Functional text · 10.RI",
      blurb: "A posting for a summer job picking peaches on a family orchard.",
      level: 2,
      passage:
        "<p><strong>Help Wanted: Summer Farmhand, Okafor Orchard</strong></p>" +
        "<p>" + N(1) + "<strong>Duties:</strong> Pick peaches, sort fruit by size, and help customers at the farm market on weekends. " +
        N(2) + "<strong>Hours:</strong> 7 a.m. to noon, Monday through Saturday; afternoons are too hot for picking. " +
        N(3) + "<strong>Requirements:</strong> Must be 15 or older and able to lift 30-pound crates. " +
        N(4) + "<strong>Pay:</strong> $13 per hour, plus a basket of fruit each Friday. " +
        N(5) + "<strong>To apply:</strong> Stop by the market stand with a parent or guardian before May 15.</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The Okafor Orchard posting is aimed mainly at —",
          choices: [
            { letter: "A", text: "teenagers looking for summer work" },
            { letter: "B", text: "customers shopping for peaches" },
            { letter: "C", text: "farmers selling their crates" },
            { letter: "D", text: "parents planning a weekend trip" }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "How is the Okafor Orchard posting organized?",
          choices: [
            { letter: "A", text: "as a story told in time order" },
            { letter: "B", text: "by labeled categories of job details" },
            { letter: "C", text: "as a problem followed by a solution" },
            { letter: "D", text: "as a comparison of two jobs" }
          ],
          correct: "B"
        },
        {
          id: "noon",
          sol: "10.RI.1.B",
          stem: "Which detail explains why the orchard workday ends at noon?",
          choices: [
            { letter: "A", text: "Workers sort the fruit by size." },
            { letter: "B", text: "Applicants must be 15 or older." },
            { letter: "C", text: "Afternoons are too hot for picking." },
            { letter: "D", text: "Applications are due by May 15." }
          ],
          correct: "C"
        },
        {
          id: "basket",
          sol: "10.RI.2.B",
          stem: "The posting mentions the Friday basket of fruit in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "explain how peaches are packed" },
            { letter: "B", text: "warn that pay may be late" },
            { letter: "C", text: "list the fruits grown there" },
            { letter: "D", text: "make the job more appealing" }
          ],
          correct: "D"
        },
        {
          id: "sort",
          sol: "10.RV.1.B",
          stem: "In sentence 1 of the posting, the word sort most nearly means —",
          choices: [
            { letter: "A", text: "separate into groups" },
            { letter: "B", text: "a kind or type" },
            { letter: "C", text: "pack into crates" },
            { letter: "D", text: "wash and polish" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c61-tractor",
      family: "G10",
      title: "The Outline on the Floor",
      kind: "Literary · 10.RL",
      blurb: "A father sells the old tractor he spent every summer fixing.",
      level: 3,
      passage:
        "<p>" + N(1) + "The buyer from Lancaster circled the rusted tractor twice, kicked a tire, and offered half of what Papá had hoped. " +
        N(2) + "Teodora expected her father to argue. " +
        N(3) + "He had spent every summer of her childhood under that engine, emerging with grease to his elbows. " +
        N(4) + "Instead he shook the man's hand and said, \"It deserves to run again somewhere.\" " +
        N(5) + "That evening, Teodora found him in the empty shed, slowly sweeping the oil outline the tractor had left, as though erasing a signature." +
        "</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in the story about Teodora's father is most ironic?",
          choices: [
            { letter: "A", text: "The buyer has traveled from Lancaster." },
            { letter: "B", text: "Papá, who loved it most, lets it go easily." },
            { letter: "C", text: "The shed is empty by the evening." },
            { letter: "D", text: "The old tractor has a rusted body." }
          ],
          correct: "B"
        },
        {
          id: "tension",
          sol: "10.RL.1.B",
          stem: "The tension in the tractor story comes mainly from —",
          choices: [
            { letter: "A", text: "Papá's calm sale and his hidden attachment" },
            { letter: "B", text: "an argument between Teodora and the buyer" },
            { letter: "C", text: "an engine that refuses to start for the sale" },
            { letter: "D", text: "a storm that threatens the old shed" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "The author ends the story with Papá sweeping in the empty shed mainly to —",
          choices: [
            { letter: "A", text: "show that the shed needs cleaning" },
            { letter: "B", text: "suggest he plans to buy a new tractor" },
            { letter: "C", text: "reveal the grief his handshake hid" },
            { letter: "D", text: "explain why the buyer paid so little" }
          ],
          correct: "C"
        },
        {
          id: "signature",
          sol: "10.RL.2.A",
          stem: "In sentence 5, the comparison as though erasing a signature suggests that Papá is —",
          choices: [
            { letter: "A", text: "angry at the buyer for the price" },
            { letter: "B", text: "practicing his own handwriting" },
            { letter: "C", text: "hoping to sell the shed as well" },
            { letter: "D", text: "removing the last mark of his own" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best supported by the story about the old tractor?",
          choices: [
            { letter: "A", text: "Letting go of a loved thing can be generous and painful." },
            { letter: "B", text: "Old machines are worthless once they begin to rust." },
            { letter: "C", text: "Buyers usually try to cheat the families they visit." },
            { letter: "D", text: "Children always understand what their parents feel." }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── street murals ───────────────────────── */
    {
      id: "g10-rl-c61-bluewall",
      family: "G10",
      title: "The Blue Wall",
      kind: "Literary · 10.RL",
      blurb: "An artist gets one laundromat wall and two weeks, and starts by painting only sky.",
      level: 2,
      passage:
        "<p>" + N(1) + "The city gave Nadia Rahman one wall of the laundromat on Fifth Street and two weeks to fill it. " +
        N(2) + "On the first day, she painted the bricks sky blue and nothing else. " +
        N(3) + "Neighbors stopped to ask when the real picture would start. " +
        N(4) + "Nadia handed each of them a brush and asked what they wanted to see. " +
        N(5) + "By the second Saturday, the wall held a grandmother's garden, a bus that ran on time, and a dozen small handprints in yellow. " +
        N(6) + "Nadia signed the corner with every name she had collected." +
        "</p>",
      claims: [
        {
          id: "blue",
          sol: "10.RL.1.C",
          stem: "Nadia's choice in sentence 2 to paint only sky blue suggests that she is —",
          choices: [
            { letter: "A", text: "working from a plan others cannot see yet" },
            { letter: "B", text: "too tired to finish the job on time" },
            { letter: "C", text: "unsure how to paint anything else" },
            { letter: "D", text: "trying to annoy the city officials" }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          stem: "Which event most changes the direction of Nadia's mural project?",
          choices: [
            { letter: "A", text: "The city offers her the laundromat wall." },
            { letter: "B", text: "She hands neighbors brushes and asks for ideas." },
            { letter: "C", text: "She paints the bricks a bright sky blue." },
            { letter: "D", text: "She signs the corner of the finished wall." }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "The neighbors' question in sentence 3, about when the real picture would start, is ironic because —",
          choices: [
            { letter: "A", text: "they never return to see the wall" },
            { letter: "B", text: "the city had already cancelled the mural" },
            { letter: "C", text: "they end up making the picture themselves" },
            { letter: "D", text: "Nadia had finished the mural the day before" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RL.2.B",
          stem: "The images in sentence 5 of the laundromat story mainly create a tone that is —",
          choices: [
            { letter: "A", text: "gloomy and tired" },
            { letter: "B", text: "tense and worried" },
            { letter: "C", text: "cold and formal" },
            { letter: "D", text: "warm and hopeful" }
          ],
          correct: "D"
        },
        {
          id: "names",
          sol: "10.RL.3.A",
          stem: "The author ends with Nadia signing every name she had collected mainly to —",
          choices: [
            { letter: "A", text: "show that she shares credit with the neighborhood" },
            { letter: "B", text: "suggest that she forgot to sign her own name" },
            { letter: "C", text: "reveal that the city required a list of painters" },
            { letter: "D", text: "explain why the project took two whole weeks" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c61-varnish",
      family: "G10",
      title: "The Slow Enemy",
      kind: "Informational · 10.RI",
      blurb: "Why outdoor murals fade, and how conservators fight back.",
      level: 3,
      passage:
        "<p>" + N(1) + "Outdoor murals face a slow enemy: sunlight. " +
        N(2) + "Ultraviolet rays break down the pigments in paint, which is why a bold red may fade to a tired pink within a decade. " +
        N(3) + "Conservators now coat many murals with a clear varnish that absorbs much of that radiation. " +
        N(4) + "The coating is not permanent; it must be stripped and reapplied every few years. " +
        N(5) + "Still, conservators argue that a wall maintained this way can stay vivid for generations, while an unprotected one becomes a ghost of itself." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which of these best summarizes the passage about protecting outdoor murals?",
          choices: [
            { letter: "A", text: "Renewed coatings can shield murals from the sun." },
            { letter: "B", text: "All murals should be moved indoors to last." },
            { letter: "C", text: "Red is the only paint color that ever fades." },
            { letter: "D", text: "Varnish keeps a mural safe forever at once." }
          ],
          correct: "A"
        },
        {
          id: "cause",
          sol: "10.RI.1.B",
          stem: "Which detail best explains why outdoor murals fade over time?",
          choices: [
            { letter: "A", text: "a slow enemy: sunlight" },
            { letter: "B", text: "Ultraviolet rays break down the pigments" },
            { letter: "C", text: "it must be stripped and reapplied" },
            { letter: "D", text: "can stay vivid for generations" }
          ],
          correct: "B"
        },
        {
          id: "limit",
          sol: "10.RI.2.A",
          stem: "Sentence 4 functions in the mural passage mainly to —",
          choices: [
            { letter: "A", text: "introduce a problem unrelated to sunlight" },
            { letter: "B", text: "restate the claim made in sentence 1" },
            { letter: "C", text: "admit a drawback of the solution" },
            { letter: "D", text: "give the history of mural painting" }
          ],
          correct: "C"
        },
        {
          id: "ghost",
          sol: "10.RI.2.C",
          stem: "In sentence 5, describing an unprotected mural as a ghost of itself mainly emphasizes that it —",
          choices: [
            { letter: "A", text: "frightens people who walk past it" },
            { letter: "B", text: "is painted over by other artists" },
            { letter: "C", text: "is visible only late at night" },
            { letter: "D", text: "becomes faint and lifeless" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "10.RI.1.C",
          stem: "The author's main purpose in the passage about faded murals is to —",
          choices: [
            { letter: "A", text: "explain a threat to murals and a way to slow it" },
            { letter: "B", text: "persuade artists to stop painting outdoors" },
            { letter: "C", text: "tell the life story of one conservator" },
            { letter: "D", text: "compare the costs of several varnishes" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rv-c61-bakerywall",
      family: "G10",
      title: "The Bakery Wall",
      kind: "Vocabulary · 10.RV",
      blurb: "A market mural that remembers the neighborhood's first bakery.",
      level: 2,
      passage:
        "<p>" + N(1) + "The mural on the Ortega Market <strong>commemorates</strong> the neighborhood's first bakery, which opened there in 1952. " +
        N(2) + "Artist Kalani Brooks chose <strong>vibrant</strong> oranges and greens that can be seen from three blocks away. " +
        N(3) + "She likes to <strong>juxtapose</strong> old and new, so a horse-drawn delivery cart rolls beside an electric van. " +
        N(4) + "Over the bread loaves she brushed a <strong>translucent</strong> glaze, thin enough to let the bricks show through. " +
        N(5) + "When a corner was <strong>defaced</strong> with spray paint last spring, neighbors repainted it within a week." +
        "</p>",
      claims: [
        {
          id: "commemorates",
          sol: "10.RV.1.A",
          stem: "The word commemorates in sentence 1 contains the root mem-, as in memory and memorial. Based on this, commemorates most nearly means —",
          choices: [
            { letter: "A", text: "honors the memory of" },
            { letter: "B", text: "tears down the site of" },
            { letter: "C", text: "advertises the sale of" },
            { letter: "D", text: "takes the place of" }
          ],
          correct: "A"
        },
        {
          id: "translucent",
          sol: "10.RV.1.B",
          stem: "Which phrase from the passage best helps the reader understand the word translucent?",
          choices: [
            { letter: "A", text: "can be seen from three blocks away" },
            { letter: "B", text: "rolls beside an electric van" },
            { letter: "C", text: "thin enough to let the bricks show through" },
            { letter: "D", text: "neighbors repainted it within a week" }
          ],
          correct: "C"
        },
        {
          id: "juxtapose",
          sol: "10.RV.1.C",
          stem: "In sentence 3, Kalani's habit to juxtapose old and new most nearly means she likes to —",
          choices: [
            { letter: "A", text: "erase older images" },
            { letter: "B", text: "place them side by side" },
            { letter: "C", text: "paint over modern scenes" },
            { letter: "D", text: "sell them separately" }
          ],
          correct: "B"
        },
        {
          id: "vibrant",
          sol: "10.RV.1.D",
          stem: "The author could have called Kalani's colors bright. Compared with bright, vibrant suggests colors that are —",
          choices: [
            { letter: "A", text: "harsh and unpleasant" },
            { letter: "B", text: "dull and muddy" },
            { letter: "C", text: "pale and faded" },
            { letter: "D", text: "lively and full of energy" }
          ],
          correct: "D"
        },
        {
          id: "defaced",
          sol: "10.RV.1.A",
          stem: "The prefix de- often means to remove or undo, as in decay and destroy. Based on this, defaced in sentence 5 most nearly means —",
          choices: [
            { letter: "A", text: "cleaned carefully" },
            { letter: "B", text: "framed with tape" },
            { letter: "C", text: "spoiled the surface of" },
            { letter: "D", text: "signed by the artist" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-dsr-c61-underpass",
      family: "G10",
      title: "Lanterns Under Hollis",
      kind: "Paired texts · 10.DSR",
      blurb: "A city notice and an artist's statement about the same underpass mural.",
      level: 1,
      passage:
        "<p><strong>Text 1 — From a City Council Notice</strong></p>" +
        "<p>" + N(1) + "The Hollis Avenue underpass will receive a new mural this fall. " +
        N(2) + "The council chose the design because bright public art has reduced graffiti in other parts of the city. " +
        N(3) + "Painting begins September 3 and should take three weeks.</p>" +
        "<p><strong>Text 2 — From the Artist's Statement</strong></p>" +
        "<p>" + N(4) + "I designed the Hollis mural after interviewing twenty people who walk through the underpass every day. " +
        N(5) + "Many said it felt dark and lonely. " +
        N(6) + "I painted a river of lanterns so the walk would feel like company.</p>",
      claims: [
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes how the council's and the artist's reasons for the mural differ?",
          choices: [
            { letter: "A", text: "Text 1 focuses on graffiti, while Text 2 focuses on how walkers feel." },
            { letter: "B", text: "Text 1 focuses on cost, while Text 2 focuses on the painting schedule." },
            { letter: "C", text: "Text 1 focuses on walkers, while Text 2 focuses on the city council." },
            { letter: "D", text: "Text 1 focuses on lanterns, while Text 2 focuses on bright colors." }
          ],
          correct: "A"
        },
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "The city council and the artist would most likely agree that —",
          choices: [
            { letter: "A", text: "graffiti is the underpass's only problem" },
            { letter: "B", text: "the underpass will benefit from new art" },
            { letter: "C", text: "lanterns are the best subject for murals" },
            { letter: "D", text: "the painting should wait until spring" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "In Text 2, the artist's attitude toward the people she interviewed is best described as —",
          choices: [
            { letter: "A", text: "dismissive" },
            { letter: "B", text: "amused" },
            { letter: "C", text: "caring" },
            { letter: "D", text: "impatient" }
          ],
          correct: "C"
        },
        {
          id: "twoways",
          sol: "10.DSR.E",
          stem: "Based on both texts, why might the Hollis mural succeed in more than one way?",
          choices: [
            { letter: "A", text: "It will be finished in a single day." },
            { letter: "B", text: "It will replace the underpass lights." },
            { letter: "C", text: "It was chosen by twenty walkers." },
            { letter: "D", text: "It may deter graffiti and comfort walkers." }
          ],
          correct: "D"
        },
        {
          id: "question",
          sol: "10.DSR.E",
          stem: "Which question about the Hollis mural can be answered only by reading both texts?",
          choices: [
            { letter: "A", text: "When will painting on the mural begin?" },
            { letter: "B", text: "How many walkers did the artist interview?" },
            { letter: "C", text: "What will be painted, and starting when?" },
            { letter: "D", text: "Why did the council want public art?" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c61-grid",
      family: "G10",
      title: "One Square at a Time",
      kind: "Informational · 10.RI",
      blurb: "How a muralist turns a sketch on paper into a picture the size of a building.",
      level: 1,
      passage:
        "<p>" + N(1) + "Before a large mural reaches a wall, it usually begins as a sketch small enough to fit on a single sheet of paper. " +
        N(2) + "First, the artist draws a grid of squares over the sketch. " +
        N(3) + "Next, a matching but much larger grid is chalked onto the wall. " +
        N(4) + "The artist then copies the drawing one square at a time, so each part lands in the right place. " +
        N(5) + "This grid method lets a painter on a ladder, inches from the bricks, keep the whole picture in proportion." +
        "</p>",
      claims: [
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The tone of the passage about the mural grid is best described as —",
          choices: [
            { letter: "A", text: "clear and instructive" },
            { letter: "B", text: "sad and nostalgic" },
            { letter: "C", text: "urgent and alarmed" },
            { letter: "D", text: "silly and joking" }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "10.RI.2.A",
          stem: "How are sentences 2 through 4 of the mural-grid passage organized?",
          choices: [
            { letter: "A", text: "as a cause and its effects" },
            { letter: "B", text: "as steps in a process" },
            { letter: "C", text: "as a comparison of artists" },
            { letter: "D", text: "as a problem and solution" }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "10.RI.1.B",
          stem: "According to the passage, why does the artist copy the sketch one square at a time?",
          choices: [
            { letter: "A", text: "to use less paint on the wall" },
            { letter: "B", text: "to finish faster than planned" },
            { letter: "C", text: "so each part lands in the right place" },
            { letter: "D", text: "because the bricks are curved" }
          ],
          correct: "C"
        },
        {
          id: "ladder",
          sol: "10.RI.2.B",
          stem: "The author mentions a painter inches from the bricks in sentence 5 mainly to emphasize —",
          choices: [
            { letter: "A", text: "how dangerous tall ladders can be" },
            { letter: "B", text: "why bricks are hard to paint on" },
            { letter: "C", text: "how small the first sketch is" },
            { letter: "D", text: "how hard it is to see the whole up close" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "10.RI.1.C",
          stem: "The author's purpose in the passage about the grid method is mainly to —",
          choices: [
            { letter: "A", text: "explain a technique muralists use" },
            { letter: "B", text: "persuade readers to paint murals" },
            { letter: "C", text: "tell the story of one famous artist" },
            { letter: "D", text: "compare different kinds of paint" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c61-sunflowers",
      family: "G10",
      title: "The Three-Winged Bee",
      kind: "Literary · 10.RL",
      blurb: "A daughter restores the sunflower mural her mother painted twenty years ago.",
      level: 3,
      passage:
        "<p>" + N(1) + "Twenty years after her mother painted the sunflowers on the community center, Priyanka was asked to restore them. " +
        N(2) + "Up close, the faded petals were full of mistakes: a drip here, a crooked stem there, a bee with three wings. " +
        N(3) + "The director suggested she paint over the flaws. " +
        N(4) + "Priyanka matched the old yellows exactly and left every drip where it was. " +
        N(5) + "When her mother came to see it, she laughed at the three-winged bee as if greeting an old friend." +
        "</p>",
      claims: [
        {
          id: "priyanka",
          sol: "10.RL.1.C",
          stem: "Sentence 4 characterizes Priyanka as someone who —",
          choices: [
            { letter: "A", text: "honors her mother's work, flaws included" },
            { letter: "B", text: "wants to improve on her mother's design" },
            { letter: "C", text: "is careless about matching paint colors" },
            { letter: "D", text: "always follows the director's advice" }
          ],
          correct: "A"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict in the sunflower story is best described as a choice between —",
          choices: [
            { letter: "A", text: "painting sunflowers and painting bees" },
            { letter: "B", text: "perfecting the mural and keeping it as it was" },
            { letter: "C", text: "working alone and working with her mother" },
            { letter: "D", text: "finishing quickly and finishing late" }
          ],
          correct: "B"
        },
        {
          id: "friend",
          sol: "10.RL.2.A",
          stem: "In sentence 5, the simile as if greeting an old friend suggests that Priyanka's mother —",
          choices: [
            { letter: "A", text: "is embarrassed by her old mistake" },
            { letter: "B", text: "does not recognize her own work" },
            { letter: "C", text: "feels fond recognition of the bee" },
            { letter: "D", text: "is upset that the flaws remain" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which detail in the story about the community center mural is most ironic?",
          choices: [
            { letter: "A", text: "The sunflowers have faded over twenty years." },
            { letter: "B", text: "The director wants the mural restored." },
            { letter: "C", text: "Priyanka matches the yellows exactly." },
            { letter: "D", text: "The flaws a restorer would erase are treasured." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the story about the three-winged bee?",
          choices: [
            { letter: "A", text: "Imperfections can hold memories worth keeping." },
            { letter: "B", text: "A restoration should always correct every error." },
            { letter: "C", text: "Children should never change a parent's work." },
            { letter: "D", text: "Community centers deserve brand-new murals." }
          ],
          correct: "A"
        }
      ]
    },
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
