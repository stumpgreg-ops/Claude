/* SOL Labyrinth — Grade 9 expansion, medium tier (v5.15): railroads and trains, early aviation,
 * recycling and waste, chess tournaments. Original text only; no VDOE / copyrighted material.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    {
      id: "g9-rl-c39-table-nine",
      family: "G9",
      title: "The Clock on Table Nine",
      kind: "Literary · 9.RL",
      blurb: "Ama plays her first tournament game against a ticking clock.",
      level: 1,
      passage:
        "<p>" + N(1) + "Ama Owusu had played chess on her grandfather's porch for six summers, but she had never played against a clock. " +
        N(2) + "At the Riverside Community Center, the tournament director pointed her to table nine, where a gray timer sat beside the board like a small, ticking judge. " +
        N(3) + "Her opponent, a tall boy named Felix, pressed his button the instant he moved, and the soft click made Ama's shoulders jump. " +
        N(4) + "For the first ten moves she played quickly, afraid of the numbers draining away on her side of the clock. " +
        N(5) + "Then she left her knight where his bishop could take it. " +
        N(6) + "Felix captured it with a small nod, and Ama felt her face grow hot. " +
        N(7) + "She remembered what her grandfather always said when a game turned against her: \"The board is not finished until the kings say so.\" " +
        N(8) + "Ama took a long breath and looked at the clock again. " +
        N(9) + "She had twenty-two minutes left; Felix had only nine. " +
        N(10) + "For the rest of the game she slowed down, checking each move twice before her hand left the piece. " +
        N(11) + "Felix began to hurry, and on move thirty-one he pushed a pawn that left his rook unguarded. " +
        N(12) + "Ama won the rook, then the game. " +
        N(13) + "When she shook his hand, she noticed that the clock no longer looked like a judge. " +
        N(14) + "It looked like a tool she had finally learned to hold." +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Ama by the end of the story?",
          choices: [
            { letter: "A", text: "She is still nervous and plans to avoid timed games." },
            { letter: "B", text: "She has learned to stay calm and use her time wisely." },
            { letter: "C", text: "She is proud that she played faster than her opponent." },
            { letter: "D", text: "She is upset that the director gave her a hard table." }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the story about Ama's first tournament game best develop?",
          choices: [
            { letter: "A", text: "Experienced players usually defeat newcomers." },
            { letter: "B", text: "Games are more fun without rules or timers." },
            { letter: "C", text: "Winning matters less than making new friends." },
            { letter: "D", text: "Patience can turn an early setback around." }
          ],
          correct: "D"
        },
        {
          id: "plot",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The details in sentence 9 about the time left on each side of the clock matter to the plot mainly because they —",
          choices: [
            { letter: "A", text: "show Ama that she has an advantage she can use" },
            { letter: "B", text: "prove that Felix has been cheating during the game" },
            { letter: "C", text: "explain why the director chose table nine for Ama" },
            { letter: "D", text: "reveal that the game is almost over for both players" }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 2, the comparison of the timer to a small, ticking judge suggests that Ama —",
          choices: [
            { letter: "A", text: "admires the tournament director's fairness" },
            { letter: "B", text: "thinks the clock is broken and unreliable" },
            { letter: "C", text: "feels the clock is watching and grading her" },
            { letter: "D", text: "expects the timer to help her choose moves" }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 11, the word unguarded most nearly means —",
          choices: [
            { letter: "A", text: "left without protection" },
            { letter: "B", text: "moved too far forward" },
            { letter: "C", text: "hidden from the other player" },
            { letter: "D", text: "worth more than a pawn" }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that Ama remembers her grandfather's saying in sentence 7 because she —",
          choices: [
            { letter: "A", text: "wants to explain the rules of chess to Felix" },
            { letter: "B", text: "misses playing on the porch more than winning" },
            { letter: "C", text: "hopes the director will let her take back a move" },
            { letter: "D", text: "is tempted to give up after losing her knight" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c39-last-run",
      family: "G9",
      title: "The Last Run at Kitamura",
      kind: "Literary · 9.RL",
      blurb: "A stationmaster sweeps the platform one final time before his branch line closes.",
      level: 2,
      passage:
        "<p>" + N(1) + "On the morning the Hollow Creek branch line closed for good, I walked to the station with my grandfather before the sun cleared the hills. " +
        N(2) + "He had been the stationmaster at Kitamura for thirty-one years, and he still wore his cap, even though no one had asked him to. " +
        N(3) + "The platform was crowded for the first time I could remember: retired conductors, schoolchildren with paper flags, a man selling rice balls from a cooler. " +
        N(4) + "Grandfather swept the platform anyway, the way he did every morning, moving the broom around people's shoes without a word. " +
        N(5) + "\"Nobody will notice a few leaves today,\" I told him. " +
        N(6) + "\"The train will,\" he said. " +
        N(7) + "At 7:14 the two-car diesel came around the bend, its horn stretching across the rice fields like a long, unwilling goodbye. " +
        N(8) + "People cheered and took pictures, but Grandfather only lifted his hand in the same small salute he had given every arriving train since before my mother was born. " +
        N(9) + "The driver, a young woman named Ms. Sato, leaned out and saluted back. " +
        N(10) + "After the train pulled away, the crowd drifted toward the parking lot, and the platform became quiet again. " +
        N(11) + "Grandfather leaned the broom against the ticket window and took off his cap. " +
        N(12) + "He studied it for a while, then handed it to me. " +
        N(13) + "\"Keep it somewhere dry,\" he said. " +
        N(14) + "I thought he would be sad all day, but at lunch he was already planning to plant tomatoes along the empty track bed. " +
        N(15) + "That evening, the cap hung on the hook by our door, where I could see it every time I left the house." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about the Hollow Creek line?",
          choices: [
            { letter: "A", text: "Crowds rarely understand what a place means to its workers." },
            { letter: "B", text: "Old machines should be preserved instead of replaced." },
            { letter: "C", text: "Honoring the past can go along with moving forward." },
            { letter: "D", text: "Young people care less about tradition than their elders." }
          ],
          correct: "C"
        },
        {
          id: "reply",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Grandfather's reply in sentence 6 suggests that he —",
          choices: [
            { letter: "A", text: "sees his duty as serving the train, not impressing people" },
            { letter: "B", text: "is annoyed that his grandchild wants to leave early" },
            { letter: "C", text: "believes the line will reopen if the station stays clean" },
            { letter: "D", text: "worries that the driver will report him for the leaves" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 7, the horn stretching across the rice fields like a long, unwilling goodbye mainly creates a mood that is —",
          choices: [
            { letter: "A", text: "cheerful and festive" },
            { letter: "B", text: "tense and threatening" },
            { letter: "C", text: "playful and mocking" },
            { letter: "D", text: "reluctant and sorrowful" }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the Kitamura story is told from the grandchild's first-person point of view, the reader —",
          choices: [
            { letter: "A", text: "knows exactly what Ms. Sato thinks as she salutes" },
            { letter: "B", text: "sees Grandfather's actions but must guess his feelings" },
            { letter: "C", text: "learns the full history of the Hollow Creek line" },
            { letter: "D", text: "hears the private thoughts of everyone on the platform" }
          ],
          correct: "B"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The details about the crowded platform in sentence 3 mainly emphasize that —",
          choices: [
            { letter: "A", text: "the station has always been a busy place" },
            { letter: "B", text: "the closing is a big event, unlike Grandfather's quiet routine" },
            { letter: "C", text: "Grandfather organized a party to celebrate his retirement" },
            { letter: "D", text: "the town is angry that the branch line is closing" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The author ends the story with the cap on the hook by the door most likely to —",
          choices: [
            { letter: "A", text: "suggest that the narrator will carry Grandfather's sense of duty" },
            { letter: "B", text: "show that the family has no space left for railroad items" },
            { letter: "C", text: "hint that Grandfather plans to return to work the next day" },
            { letter: "D", text: "reveal that the narrator does not like wearing hats" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c39-canvas-wire",
      family: "G9",
      title: "Canvas and Wire",
      kind: "Literary · 9.RL",
      blurb: "In 1911, a fishing village laughs at a homemade glider, and a girl takes notes.",
      level: 3,
      passage:
        "<p>" + N(1) + "In the spring of 1911, the whole village of Praia Velha decided that Tomás Carvalho had lost his mind. " +
        N(2) + "For months he had been stretching canvas over frames of bamboo and piano wire in the old sardine shed, and every week the shape on his workbench looked a little more like a seagull and a little less like anything a person should climb inside. " +
        N(3) + "His niece Inês, who was fourteen, was the only one allowed to help. " +
        N(4) + "She cut the cloth, varnished the seams, and wrote down every measurement in a notebook that smelled of fish and glue. " +
        N(5) + "On the morning of the first test, half the village gathered on the dunes to watch, some hoping to see history and others hoping to see a splash. " +
        N(6) + "Tomás ran down the slope with the glider over his shoulders, and for three breathless seconds his feet left the sand. " +
        N(7) + "Then a gust tipped the left wing, and the whole contraption folded into the dune like a tired umbrella. " +
        N(8) + "The crowd laughed, and a fisherman called out that the seagulls had nothing to worry about. " +
        N(9) + "Tomás climbed out with sand in his beard and said nothing at all. " +
        N(10) + "Inês knelt by the broken wing, opened her notebook, and, too softly for anyone else to hear, said, \"Three seconds is longer than zero.\" " +
        N(11) + "That night, while the village retold the story in the café, she redrew the left wing with a slightly longer curve. " +
        N(12) + "Her uncle studied the sketch by lamplight, tapped it twice, and went to find more bamboo. " +
        N(13) + "Nobody in Praia Velha called the glider a seagull yet, but after the second test, nobody called it a joke, either." +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Inês as a character?",
          choices: [
            { letter: "A", text: "She is embarrassed by her uncle and hides from the crowd." },
            { letter: "B", text: "She is bold and wants to be the first person to fly." },
            { letter: "C", text: "She is easily discouraged when others laugh at her." },
            { letter: "D", text: "She is observant and treats failure as useful information." }
          ],
          correct: "D"
        },
        {
          id: "village",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The details about the village's reaction in sentences 1, 5 and 8 mainly emphasize that —",
          choices: [
            { letter: "A", text: "the villagers are eager to invest in the glider" },
            { letter: "B", text: "the experiment takes place under public doubt" },
            { letter: "C", text: "fishing has become less important to the town" },
            { letter: "D", text: "Tomás has invited everyone to help build the wing" }
          ],
          correct: "B"
        },
        {
          id: "umbrella",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 7, the comparison of the glider to a tired umbrella mainly shows that the glider —",
          choices: [
            { letter: "A", text: "collapsed limply instead of crashing violently" },
            { letter: "B", text: "was designed to keep the rain off its pilot" },
            { letter: "C", text: "had been used for many years before the test" },
            { letter: "D", text: "rose slowly into the air like an opening canopy" }
          ],
          correct: "A"
        },
        {
          id: "private",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Inês speaks the line in sentence 10 too softly for others to hear mainly to show that she —",
          choices: [
            { letter: "A", text: "is afraid the fisherman will laugh at her next" },
            { letter: "B", text: "wants her uncle to know she is disappointed" },
            { letter: "C", text: "is privately encouraging herself, not arguing with the crowd" },
            { letter: "D", text: "has decided to keep the notebook a secret from Tomás" }
          ],
          correct: "C"
        },
        {
          id: "nuance",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written machine instead of contraption in sentence 7. Compared with machine, the word contraption adds a sense that the glider is —",
          choices: [
            { letter: "A", text: "powerful and modern" },
            { letter: "B", text: "odd and makeshift" },
            { letter: "C", text: "expensive and rare" },
            { letter: "D", text: "simple and reliable" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the final sentence of \"Canvas and Wire\" is best described as —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "nervous and uncertain" },
            { letter: "C", text: "mocking and sarcastic" },
            { letter: "D", text: "quietly triumphant" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c39-line-four",
      family: "G9",
      title: "Line Four",
      kind: "Literary · 9.RL",
      blurb: "Dmitri's summer job means pulling the wrong things off a fast recycling belt.",
      level: 2,
      passage:
        "<p>" + N(1) + "Dmitri Volkov's summer job at the Eastfield Recycling Center began with earplugs, thick gloves, and a warning from his supervisor, Ms. Adeyemi: \"The belt never waits for you.\" " +
        N(2) + "He stood at Line Four, where a river of crushed boxes, bottles, and cans rushed past at the height of his waist. " +
        N(3) + "His task sounded simple: pull out anything that did not belong. " +
        N(4) + "By the end of the first hour, he had pulled out a garden hose, a frying pan, a bowling shoe, and enough plastic bags to fill a laundry basket. " +
        N(5) + "The bags were the worst, because they wrapped around the sorting machines and stopped the whole line. " +
        N(6) + "Each time the belt halted, a red light flashed, and everyone turned to look at whoever had missed something. " +
        N(7) + "On Wednesday it was Dmitri. " +
        N(8) + "He felt the stares more than he heard the alarm. " +
        N(9) + "Ms. Adeyemi cut the tangled bag from the gears, then walked over to him. " +
        N(10) + "Dmitri expected a lecture, but instead she pointed to the bin where the items he had rescued were piled. " +
        N(11) + "\"That's two hundred pounds of other people's mistakes you caught this week,\" she said. " +
        N(12) + "\"The belt remembers the one you missed. I remember the rest.\" " +
        N(13) + "The next morning, Dmitri pulled his gloves a little tighter and watched the belt a little differently, not as an enemy racing past him but as a puzzle that kept changing. " +
        N(14) + "By August, he was the one teaching new workers how to spot a plastic bag folded inside a cereal box, a trick that made even the oldest sorters nod." +
        "</p>",
      claims: [
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer from sentence 8 that Dmitri —",
          choices: [
            { letter: "A", text: "cannot hear well because of his earplugs" },
            { letter: "B", text: "is more troubled by embarrassment than by noise" },
            { letter: "C", text: "thinks someone else caused the belt to stop" },
            { letter: "D", text: "is angry that the alarm is so loud" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which sentence best shows that Dmitri's attitude toward his work on the belt changes?",
          choices: [
            { letter: "A", text: "Sentence 3, which describes his simple task" },
            { letter: "B", text: "Sentence 5, which explains why the bags are a problem" },
            { letter: "C", text: "Sentence 10, which says he expected a lecture" },
            { letter: "D", text: "Sentence 13, which says he saw the belt as a puzzle" }
          ],
          correct: "D"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the noisy, fast-moving setting of Line Four affect Dmitri at first?",
          choices: [
            { letter: "A", text: "It makes him feel pressured and exposed when he slips." },
            { letter: "B", text: "It makes him bored because the work never changes." },
            { letter: "C", text: "It makes him want to transfer to a quieter line." },
            { letter: "D", text: "It makes him careless because no one can see him." }
          ],
          correct: "A"
        },
        {
          id: "river",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 2, describing the recycling as a river of crushed boxes, bottles, and cans mainly suggests that —",
          choices: [
            { letter: "A", text: "the center is built beside a stream" },
            { letter: "B", text: "most of the material on the belt is wet" },
            { letter: "C", text: "the flow of material is constant and heavy" },
            { letter: "D", text: "Dmitri finds the work peaceful and calming" }
          ],
          correct: "C"
        },
        {
          id: "halted",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As used in sentence 6, the word halted most nearly means —",
          choices: [
            { letter: "A", text: "came to a stop" },
            { letter: "B", text: "sped up suddenly" },
            { letter: "C", text: "changed direction" },
            { letter: "D", text: "broke into pieces" }
          ],
          correct: "A"
        },
        {
          id: "dialogue",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Ms. Adeyemi's words in sentence 12 mainly reveal that she —",
          choices: [
            { letter: "A", text: "plans to report Dmitri's mistake to the manager" },
            { letter: "B", text: "thinks the machines are smarter than the workers" },
            { letter: "C", text: "values the many items he caught more than one miss" },
            { letter: "D", text: "wants Dmitri to work faster than the other sorters" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c39-endgame",
      family: "G9",
      title: "Endgame",
      kind: "Literary · 9.RL",
      blurb: "In the final round, Priya faces the player who taught her the game.",
      level: 3,
      passage:
        "<p>" + N(1) + "In the final round of the Tidewater Scholastic Open, Priya Raman found herself across the board from the person who had taught her how the knight moves. " +
        N(2) + "Jonah Feld was a senior now, and this was his last tournament before college; a win would give him the trophy he had chased for four years. " +
        N(3) + "For two hours they traded pieces carefully, like two people passing a full glass of water across a crowded room. " +
        N(4) + "Then, on move forty, Priya saw it: a quiet bishop retreat that would trap his rook in three moves. " +
        N(5) + "She glanced up. " +
        N(6) + "Jonah was rubbing the back of his neck, the habit he always had when he was worried and pretending not to be. " +
        N(7) + "Priya thought about the Saturdays he had stayed late at the library to show her endgames, and about the way he never let her win, not even once, not even when she was eleven and cried over a lost queen. " +
        N(8) + "Her hand hovered over the bishop. " +
        N(9) + "Somewhere behind her, a younger player's clock beeped, and a parent whispered for quiet. " +
        N(10) + "Priya made the move. " +
        N(11) + "Jonah studied the board for almost five minutes, then laughed softly, tipped his king over, and held out his hand. " +
        N(12) + "\"Finally,\" he said. " +
        N(13) + "\"I was starting to think I taught you too politely.\" " +
        N(14) + "After the awards, he signed the back of her scoresheet the way older players sometimes did for a game worth keeping. " +
        N(15) + "Priya folded it into her chess bag, between the rulebook and the battered notebook where she had first copied his openings, and carried it home like a passport." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the ending of \"Endgame\" best support?",
          choices: [
            { letter: "A", text: "Honoring a teacher can mean using all you learned, even against them." },
            { letter: "B", text: "Friendships rarely survive serious competition between players." },
            { letter: "C", text: "Older players should step aside so younger ones can win." },
            { letter: "D", text: "Trophies matter more to seniors than to younger students." }
          ],
          correct: "A"
        },
        {
          id: "finally",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that Jonah says \"Finally\" in sentence 12 because he —",
          choices: [
            { letter: "A", text: "is relieved that the long game is over at last" },
            { letter: "B", text: "suspects Priya was holding back in earlier rounds" },
            { letter: "C", text: "is proud that Priya is now strong enough to beat him" },
            { letter: "D", text: "wants the other players to hear that he lost on purpose" }
          ],
          correct: "C"
        },
        {
          id: "memory",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The memory in sentence 7 mainly contributes to the story by —",
          choices: [
            { letter: "A", text: "explaining how Priya first learned the knight's move" },
            { letter: "B", text: "showing why Priya hesitates and why winning honors Jonah" },
            { letter: "C", text: "describing the library where the tournament takes place" },
            { letter: "D", text: "proving that Jonah was an unkind and impatient teacher" }
          ],
          correct: "B"
        },
        {
          id: "glass",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 3, the comparison to passing a full glass of water across a crowded room shows that the players —",
          choices: [
            { letter: "A", text: "are thirsty after playing for two long hours" },
            { letter: "B", text: "keep getting distracted by the noisy crowd" },
            { letter: "C", text: "are trading pieces quickly to save time" },
            { letter: "D", text: "move with great care to avoid a costly slip" }
          ],
          correct: "D"
        },
        {
          id: "passport",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 15, Priya carries the scoresheet home like a passport. This figurative comparison suggests that the scoresheet —",
          choices: [
            { letter: "A", text: "must be shown to officials at the next tournament" },
            { letter: "B", text: "marks her entry into a new stage as a player" },
            { letter: "C", text: "will let her travel to college with Jonah" },
            { letter: "D", text: "is too fragile to keep in a chess bag" }
          ],
          correct: "B"
        },
        {
          id: "torn",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows that Priya feels torn just before her winning move?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c39-block-signals",
      family: "G9",
      title: "Keeping Trains Apart",
      kind: "Informational · 9.RI",
      blurb: "How a weak current in the rails turns a signal red.",
      level: 1,
      passage:
        "<p>" + N(1) + "A train cannot swerve around trouble the way a car can, and a heavy freight train may need more than a mile to stop. " +
        N(2) + "For that reason, railroads keep trains apart with a system called block signaling. " +
        N(3) + "The track is divided into sections called blocks, and each block is long enough for a train to stop inside it. " +
        N(4) + "The basic rule is simple: only one train may be in a block at a time. " +
        N(5) + "To know whether a block is empty, many railroads send a weak electric current through the rails. " +
        N(6) + "When a train's metal wheels and axles roll into the block, they connect the two rails and complete a circuit, which tells the system that the block is occupied. " +
        N(7) + "Signals beside the track then change color. " +
        N(8) + "A green light means the next two blocks are clear, a yellow light warns the engineer to slow down because the block after next is occupied, and a red light means stop. " +
        N(9) + "The system is designed to fail safely. " +
        N(10) + "If a rail breaks or the power goes out, the current stops flowing, and the signals turn red as if a train were there. " +
        N(11) + "Engineers sometimes grumble about stopping for a \"ghost train\" that does not exist, but a false red light costs only a few minutes. " +
        N(12) + "A false green light could cost much more." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the main idea of the passage about block signaling?",
          choices: [
            { letter: "A", text: "Freight trains are too heavy to stop quickly in an emergency." },
            { letter: "B", text: "Engineers often ignore signals they believe are false." },
            { letter: "C", text: "Track circuits and signal lights keep trains safely apart." },
            { letter: "D", text: "Railroads should replace electric signals with newer tools." }
          ],
          correct: "C"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, what happens to the signals when a rail breaks?",
          choices: [
            { letter: "A", text: "They turn red as if a train were present." },
            { letter: "B", text: "They turn yellow to warn of slow traffic." },
            { letter: "C", text: "They go dark until a worker resets them." },
            { letter: "D", text: "They stay green until the next train passes." }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the passage about railroad signals mainly organized?",
          choices: [
            { letter: "A", text: "It tells a story about one engineer's dangerous trip." },
            { letter: "B", text: "It compares railroads in two different countries." },
            { letter: "C", text: "It lists signal colors in order of their invention." },
            { letter: "D", text: "It presents a problem and explains a system that solves it." }
          ],
          correct: "D"
        },
        {
          id: "opening",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author begins with sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "argue that cars are safer than trains" },
            { letter: "B", text: "establish why trains need a special system" },
            { letter: "C", text: "describe how engineers are trained to brake" },
            { letter: "D", text: "compare the speed of freight and passenger trains" }
          ],
          correct: "B"
        },
        {
          id: "occupied",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 6, the word occupied most nearly means —",
          choices: [
            { letter: "A", text: "busy with work" },
            { letter: "B", text: "filled or in use" },
            { letter: "C", text: "out of order" },
            { letter: "D", text: "under repair" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the claim in sentence 9 that the system is designed to fail safely?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c39-wind-tunnel",
      family: "G9",
      title: "Asking the Air",
      kind: "Informational · 9.RI",
      blurb: "Before powered flight, wooden boxes and fans taught builders what hillsides could not.",
      level: 2,
      passage:
        "<p>" + N(1) + "In the decades before the first powered airplanes, would-be aviators faced a dangerous problem: the only way to test a wing was to jump off a hill with it. " +
        N(2) + "Many early experimenters relied on tables of numbers published by others, which described how much lift a curved surface should produce. " +
        N(3) + "When their gliders failed to rise as the tables predicted, some builders blamed the wind, the weather, or their own nerves. " +
        N(4) + "A few began to suspect the tables themselves. " +
        N(5) + "To find out, inventors built wind tunnels, long wooden boxes with a fan at one end that pushed a steady stream of air past a small model wing. " +
        N(6) + "Inside, delicate balances made from bicycle spokes and hacksaw blades measured how hard the air pushed up and back on each shape. " +
        N(7) + "A single afternoon in a wind tunnel could test dozens of wing shapes, while a single afternoon on a hillside might test one, if the builder was lucky and the weather cooperated. " +
        N(8) + "The results were often surprising. " +
        N(9) + "Some of the accepted numbers turned out to be wrong, and thin, gently curved wings often performed better than the deep, heavily arched ones many builders had copied from birds. " +
        N(10) + "Historians still debate how much any single tunnel changed the race toward powered flight. " +
        N(11) + "What is clear is that the tunnels changed the method: instead of risking a pilot to learn each lesson, builders could ask the air questions on a tabletop and save the hillside for answers they already trusted." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the passage about early wind tunnels?",
          choices: [
            { letter: "A", text: "Early aviators copied bird wings too closely to succeed." },
            { letter: "B", text: "Wind tunnels let builders test wings safely and quickly." },
            { letter: "C", text: "Hillside tests were more accurate than tabletop models." },
            { letter: "D", text: "Published tables of lift were correct from the start." }
          ],
          correct: "B"
        },
        {
          id: "doubt",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, why did some early builders begin to doubt the published tables?",
          choices: [
            { letter: "A", text: "Historians proved the tables had been copied." },
            { letter: "B", text: "The tables did not include enough bird species." },
            { letter: "C", text: "Their wind tunnels kept breaking during tests." },
            { letter: "D", text: "Their gliders did not rise as the tables predicted." }
          ],
          correct: "D"
        },
        {
          id: "debate",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the wind tunnel passage presents an open question rather than a settled fact?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The author organizes sentences 1–5 mainly by —",
          choices: [
            { letter: "A", text: "listing the steps for building a glider" },
            { letter: "B", text: "comparing two famous inventors' methods" },
            { letter: "C", text: "presenting a problem and the tool built to solve it" },
            { letter: "D", text: "describing a single flight from start to finish" }
          ],
          correct: "C"
        },
        {
          id: "efficient",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that wind tunnels were more efficient than hillside tests?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "A"
        },
        {
          id: "spokes",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author mentions bicycle spokes and hacksaw blades in sentence 6 mainly to show that the early tunnels —",
          choices: [
            { letter: "A", text: "were too costly for most builders to afford" },
            { letter: "B", text: "were built from simple, everyday materials" },
            { letter: "C", text: "were often damaged by the strong fans" },
            { letter: "D", text: "were invented by bicycle racers" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c39-wishcycling",
      family: "G9",
      title: "The Trouble with Wishcycling",
      kind: "Informational · 9.RI",
      blurb: "Why a hopeful toss into the recycling bin can send good material to the landfill.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every week, millions of people drop items into recycling bins with a small, hopeful thought: maybe this can be recycled too. " +
        N(2) + "Waste managers have a name for this habit, \"wishcycling,\" and they say it causes more harm than most people realize. " +
        N(3) + "In single-stream systems, where all recyclables go into one bin, everything arrives at a sorting facility mixed together. " +
        N(4) + "Screens, magnets, air jets, and human sorters separate paper, metal, glass, and plastic, but each step works best when the stream contains only the materials it was designed for. " +
        N(5) + "A greasy pizza box can soak oil into an entire bale of clean cardboard. " +
        N(6) + "A garden hose or a string of holiday lights can wrap around spinning screens, forcing workers to shut down the line and cut it free by hand. " +
        N(7) + "Broken glass mixed into paper lowers the paper's value, because mills must remove it before pulping. " +
        N(8) + "Buyers of recycled material pay according to purity, and in recent years many have refused bales that contain more than a small percentage of contamination. " +
        N(9) + "When a bale is rejected, it often goes to a landfill anyway, along with the good material it spoiled. " +
        N(10) + "Some cities have responded by tagging bins with \"oops\" stickers that explain what went wrong, and early reports suggest that contamination drops after households receive a few of them. " +
        N(11) + "The lesson may feel backward to people raised on the slogan \"When in doubt, recycle.\" " +
        N(12) + "For most sorting facilities, the better rule is the reverse: when in doubt, leave it out, and then look it up before the next pickup." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best summarizes the passage about wishcycling?",
          choices: [
            { letter: "A", text: "Sorting machines are too old to handle modern recycling." },
            { letter: "B", text: "Single-stream recycling should be banned in most cities." },
            { letter: "C", text: "People should recycle anything they are unsure about." },
            { letter: "D", text: "Doubtful items can spoil good material, so careful sorting matters." }
          ],
          correct: "D"
        },
        {
          id: "tentative",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which statement in the wishcycling passage is presented as an early finding rather than an established fact?",
          choices: [
            { letter: "A", text: "Grease from a pizza box can soak into clean cardboard." },
            { letter: "B", text: "Contamination drops after households receive oops stickers." },
            { letter: "C", text: "Buyers pay for recycled material according to its purity." },
            { letter: "D", text: "Single-stream systems collect all recyclables in one bin." }
          ],
          correct: "B"
        },
        {
          id: "examples",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes the examples in sentences 5–7 mainly to —",
          choices: [
            { letter: "A", text: "show specific ways contamination damages recycling" },
            { letter: "B", text: "list the items that sorting facilities buy and sell" },
            { letter: "C", text: "explain how mills turn old paper into new paper" },
            { letter: "D", text: "suggest that holiday lights are the worst kind of waste" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the claim that wishcycling can send good material to the landfill?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "C"
        },
        {
          id: "hopeful",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "Sentence 1 describes the wishcycler's thought as hopeful. Compared with careless, the word hopeful suggests that wishcyclers are —",
          choices: [
            { letter: "A", text: "lazy and uninterested" },
            { letter: "B", text: "angry at the city" },
            { letter: "C", text: "proud and boastful" },
            { letter: "D", text: "well-meaning but wrong" }
          ],
          correct: "D"
        },
        {
          id: "bales",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, why do buyers sometimes refuse bales of recycled material?",
          choices: [
            { letter: "A", text: "The bales contain too much contamination." },
            { letter: "B", text: "The bales are too heavy to ship by truck." },
            { letter: "C", text: "The bales arrive without oops stickers." },
            { letter: "D", text: "The bales were sorted by machines only." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-ri-c39-chess-clock",
      family: "G9",
      title: "Racing the Clock",
      kind: "Informational · 9.RI",
      blurb: "Why tournament chess has a timer beside every board.",
      level: 1,
      passage:
        "<p>" + N(1) + "In a modern chess tournament, nearly every game is played with a clock. " +
        N(2) + "A chess clock has two faces and two buttons, one for each player. " +
        N(3) + "When you finish your move, you press your button, which stops your time and starts your opponent's. " +
        N(4) + "If your time runs out before the game ends, you usually lose, no matter how good your position is. " +
        N(5) + "Clocks were added to tournaments for a practical reason. " +
        N(6) + "Before they were common, some games dragged on for many hours because a player could think about a single move for as long as he or she wanted. " +
        N(7) + "Organizers could not plan schedules, and tired opponents sometimes gave up simply to go home. " +
        N(8) + "Early timing devices used sand glasses, which had to be flipped by hand. " +
        N(9) + "Later, mechanical clocks with small flags made timing fairer; the flag rises as the minute hand nears the hour and falls when time expires. " +
        N(10) + "Today, most tournaments use digital clocks that can add a few seconds after each move, a feature called an increment. " +
        N(11) + "An increment keeps a player with a strong position from losing just because the clock is nearly empty. " +
        N(12) + "Some players say the clock is the most stressful part of chess. " +
        N(13) + "Others say it is the part that turns chess into a sport." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the main idea of the passage about chess clocks?",
          choices: [
            { letter: "A", text: "Digital clocks are too complicated for young players." },
            { letter: "B", text: "Sand glasses were the fairest way to time a game." },
            { letter: "C", text: "Clocks keep games fair and manageable and have improved." },
            { letter: "D", text: "Most players believe chess should not be timed at all." }
          ],
          correct: "C"
        },
        {
          id: "sequence",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The author organizes sentences 8–10 mainly by —",
          choices: [
            { letter: "A", text: "tracing how timing devices changed over time" },
            { letter: "B", text: "comparing chess clocks with sports scoreboards" },
            { letter: "C", text: "listing rules a player must follow in a game" },
            { letter: "D", text: "describing a problem that has not been solved" }
          ],
          correct: "A"
        },
        {
          id: "why67",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes sentences 6 and 7 mainly to —",
          choices: [
            { letter: "A", text: "show that early players were impatient" },
            { letter: "B", text: "explain the problems that led to using clocks" },
            { letter: "C", text: "argue that long games are better for chess" },
            { letter: "D", text: "describe how organizers chose tournament sites" }
          ],
          correct: "B"
        },
        {
          id: "increment",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, what does an increment do?",
          choices: [
            { letter: "A", text: "It ends the game when a flag falls." },
            { letter: "B", text: "It doubles the time for the stronger player." },
            { letter: "C", text: "It stops both clocks during long thinking." },
            { letter: "D", text: "It adds a few seconds after each move." }
          ],
          correct: "D"
        },
        {
          id: "dragged",
          sol: "9.RV.1.E",
          sub: "9.RV.1.E.2",
          stem: "In sentence 6, the expression dragged on suggests that the games —",
          choices: [
            { letter: "A", text: "were played outdoors on rough ground" },
            { letter: "B", text: "ended suddenly without a winner" },
            { letter: "C", text: "were moved from one table to another" },
            { letter: "D", text: "continued for a tiresomely long time" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the chess clock passage states an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rv-c39-sleeper-car",
      family: "G9",
      title: "Night on the Sleeper Car",
      kind: "Vocabulary · 9.RV",
      blurb: "Lucía stays awake on her first overnight train while her brother sleeps.",
      level: 1,
      passage:
        "<p>" + N(1) + "Lucía Herrera had never slept on a train before, and at first the sleeper car seemed impossibly small. " +
        N(2) + "The <strong>compact</strong> cabin held two fold-down beds, a sink no bigger than a cereal bowl, and a ladder that her little brother, Mateo, climbed eleven times in the first hour. " +
        N(3) + "After dinner, the conductor dimmed the hall lights, and the car settled into the <strong>rhythmic</strong> clatter of wheels crossing rail joints, a steady pattern that repeated like a heartbeat. " +
        N(4) + "Mateo fell asleep at once. " +
        N(5) + "Lucía stayed awake, watching the window. " +
        N(6) + "Outside, the countryside was dark except for <strong>sporadic</strong> lights, a farmhouse here, a crossing signal there, then nothing for miles. " +
        N(7) + "She felt <strong>drowsy</strong> around midnight, her eyelids heavy, but every time she began to drift off, the train swayed around a curve and she was wide awake again. " +
        N(8) + "Near dawn, the train climbed out of a valley, and the land opened into a <strong>vast</strong> plain, so wide that the edge of the sky seemed to rest directly on the grass. " +
        N(9) + "Lucía pressed her forehead to the cool glass. " +
        N(10) + "Below her, Mateo mumbled in his sleep and kicked his blanket off. " +
        N(11) + "She climbed down, tucked it back around his feet, and listened again to the wheels. " +
        N(12) + "The sound no longer seemed strange. " +
        N(13) + "It seemed <strong>reassuring</strong>, like a voice telling her, again and again, that everything was still moving in the right direction." +
        "</p>",
      claims: [
        {
          id: "sporadic",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 6, the word sporadic most nearly means —",
          choices: [
            { letter: "A", text: "bright and blinding" },
            { letter: "B", text: "scattered and irregular" },
            { letter: "C", text: "colorful and flashing" },
            { letter: "D", text: "steady and constant" }
          ],
          correct: "B"
        },
        {
          id: "sky",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 8, the image of the sky seeming to rest directly on the grass mainly creates a mood of —",
          choices: [
            { letter: "A", text: "fear and danger" },
            { letter: "B", text: "boredom and fatigue" },
            { letter: "C", text: "openness and wonder" },
            { letter: "D", text: "anger and frustration" }
          ],
          correct: "C"
        },
        {
          id: "prefix",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word reassuring in sentence 13 contains the prefix re-, meaning again. Based on this and the sentence, reassuring means —",
          choices: [
            { letter: "A", text: "restoring a sense of comfort" },
            { letter: "B", text: "repeating the same question" },
            { letter: "C", text: "making something louder" },
            { letter: "D", text: "warning of a new danger" }
          ],
          correct: "A"
        },
        {
          id: "vast",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written large instead of vast in sentence 8. Compared with large, the word vast adds a sense of —",
          choices: [
            { letter: "A", text: "crowded, busy land" },
            { letter: "B", text: "dangerous, rocky ground" },
            { letter: "C", text: "a small, tidy field" },
            { letter: "D", text: "space that seems endless" }
          ],
          correct: "D"
        },
        {
          id: "heartbeat",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 3, comparing the train's clatter to a heartbeat suggests that the sound is —",
          choices: [
            { letter: "A", text: "steady and almost alive" },
            { letter: "B", text: "sudden and frightening" },
            { letter: "C", text: "faint and hard to hear" },
            { letter: "D", text: "sharp and painful" }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which statement best describes how Lucía changes during the night on the train?",
          choices: [
            { letter: "A", text: "She grows annoyed with Mateo for waking her up." },
            { letter: "B", text: "She becomes afraid of the dark countryside outside." },
            { letter: "C", text: "She decides she would rather travel by car next time." },
            { letter: "D", text: "She goes from uneasy to comforted by the train." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rv-c39-landfill",
      family: "G9",
      title: "Where the Garbage Goes",
      kind: "Vocabulary · 9.RV",
      blurb: "A modern landfill is an engineered structure, built in layers and watched for decades.",
      level: 2,
      passage:
        "<p>" + N(1) + "A modern landfill is not simply a hole where trucks dump trash. " +
        N(2) + "It is an engineered structure, built in layers and watched for decades after the last load arrives. " +
        N(3) + "The bottom is lined with thick plastic and packed clay, materials that are <strong>impermeable</strong>, so liquid cannot pass through them into the soil and groundwater below. " +
        N(4) + "That liquid matters. " +
        N(5) + "As rain trickles down through the waste, it picks up chemicals and becomes a dark, smelly fluid called <strong>leachate</strong>, which pipes collect and send to treatment plants. " +
        N(6) + "Each day, workers spread a layer of soil or a heavy tarp over the fresh trash to keep away birds, rats, and wind. " +
        N(7) + "Heavy machines called compactors roll over the pile again and again, making the waste so <strong>dense</strong> that a truckload takes up only a fraction of its original space. " +
        N(8) + "Even so, garbage does not <strong>decompose</strong> quickly in a landfill. " +
        N(9) + "Without much air or moisture, a newspaper buried decades ago can still be readable when scientists dig it up. " +
        N(10) + "The bacteria that do break waste down release methane, a gas that can be captured and burned to make electricity. " +
        N(11) + "Landfill space is <strong>finite</strong>; when a site is full, it must be capped and closed, and finding land for a new one can take years of debate. " +
        N(12) + "That is why many towns try to <strong>curtail</strong> the amount of waste they send there, through composting, recycling, and programs that charge households by the bag." +
        "</p>",
      claims: [
        {
          id: "impermeable",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word impermeable in sentence 3 combines the prefix im-, meaning not, with permeable. Based on this, impermeable materials are ones that —",
          choices: [
            { letter: "A", text: "break down quickly in rain" },
            { letter: "B", text: "trap gas inside the trash" },
            { letter: "C", text: "do not let liquid pass through" },
            { letter: "D", text: "cannot be dug up again" }
          ],
          correct: "C"
        },
        {
          id: "dense",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 7, the word dense most nearly means —",
          choices: [
            { letter: "A", text: "tightly packed" },
            { letter: "B", text: "badly smelling" },
            { letter: "C", text: "easily burned" },
            { letter: "D", text: "deeply buried" }
          ],
          correct: "A"
        },
        {
          id: "decompose",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which detail from sentence 9 best helps the reader understand the meaning of decompose in sentence 8?",
          choices: [
            { letter: "A", text: "without much air" },
            { letter: "B", text: "buried decades ago" },
            { letter: "C", text: "when scientists dig it up" },
            { letter: "D", text: "can still be readable" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The passage about landfills is organized mainly by —",
          choices: [
            { letter: "A", text: "comparing landfills in two different countries" },
            { letter: "B", text: "describing a landfill's parts and processes in turn" },
            { letter: "C", text: "telling the story of one town's garbage crisis" },
            { letter: "D", text: "listing arguments for and against recycling" }
          ],
          correct: "B"
        },
        {
          id: "curtail",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written reduce instead of curtail in sentence 12. Compared with reduce, curtail suggests —",
          choices: [
            { letter: "A", text: "a total and permanent ban" },
            { letter: "B", text: "an accidental drop" },
            { letter: "C", text: "a deliberate cutting back" },
            { letter: "D", text: "a slow, natural increase" }
          ],
          correct: "C"
        },
        {
          id: "short",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes the short sentence That liquid matters (sentence 4) mainly to —",
          choices: [
            { letter: "A", text: "warn readers not to drink groundwater" },
            { letter: "B", text: "signal that the next idea is important" },
            { letter: "C", text: "admit that the clay liner sometimes fails" },
            { letter: "D", text: "change the topic from landfills to rain" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rv-c39-barnstormers",
      family: "G9",
      title: "The Flying Circus Comes to Millbrook",
      kind: "Vocabulary · 9.RV",
      blurb: "A patched biplane lands in the hayfield, and Hazel spends her egg money on the sky.",
      level: 3,
      passage:
        "<p>" + N(1) + "The flying circus arrived in Millbrook on a Tuesday in August, when the oats were half cut and nobody had time for foolishness. " +
        N(2) + "Still, when the biplane circled the Lindqvist farm twice and landed in the hayfield, every hand on the place dropped what it was holding. " +
        N(3) + "The plane looked <strong>ramshackle</strong> up close: its wings were patched with mismatched canvas, and one strut was wrapped in wire like a splinted finger. " +
        N(4) + "The pilot, a woman in a leather cap who called herself Captain Dee, announced that she would perform an <strong>audacious</strong> stunt that afternoon, walking from one wingtip to the other while her partner flew over the church steeple. " +
        N(5) + "Hazel Lindqvist, who was fifteen, watched the stunt with <strong>trepidation</strong>, gripping the fence rail so hard that her knuckles went white. " +
        N(6) + "Captain Dee, meanwhile, waved from the wing as if she were standing on a front porch, completely <strong>nonchalant</strong>. " +
        N(7) + "Afterward, the pilots offered five-minute rides for a dollar, which was more than Hazel's <strong>meager</strong> egg money could cover. " +
        N(8) + "Her father, who had grumbled about wasted daylight all morning, quietly pressed a coin into her palm. " +
        N(9) + "When the plane lifted off, Millbrook shrank into a quilt of brown and gold squares, and the river became a silver thread stitched across it. " +
        N(10) + "Hazel came down <strong>exhilarated</strong>, talking so fast that her brothers could not understand a word. " +
        N(11) + "That night she wrote in her diary that the sky had a door in it, and she intended to find the key." +
        "</p>",
      claims: [
        {
          id: "ramshackle",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which detail from sentence 3 best helps the reader understand the meaning of ramshackle?",
          choices: [
            { letter: "A", text: "wings patched with mismatched canvas" },
            { letter: "B", text: "the plane looked up close" },
            { letter: "C", text: "circled the Lindqvist farm twice" },
            { letter: "D", text: "landed in the hayfield" }
          ],
          correct: "A"
        },
        {
          id: "trepidation",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As used in sentence 5, the word trepidation most nearly means —",
          choices: [
            { letter: "A", text: "jealousy" },
            { letter: "B", text: "boredom" },
            { letter: "C", text: "confusion" },
            { letter: "D", text: "nervous fear" }
          ],
          correct: "D"
        },
        {
          id: "nonchalant",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "Sentence 6 calls Captain Dee nonchalant. Compared with calm, the word nonchalant suggests that she appears —",
          choices: [
            { letter: "A", text: "tired and sleepy" },
            { letter: "B", text: "casually unconcerned" },
            { letter: "C", text: "quietly frightened" },
            { letter: "D", text: "rudely impatient" }
          ],
          correct: "B"
        },
        {
          id: "door",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 11, Hazel's diary entry that the sky had a door in it mainly suggests that she —",
          choices: [
            { letter: "A", text: "plans to build a barn with a skylight" },
            { letter: "B", text: "is afraid to fly in the biplane again" },
            { letter: "C", text: "sees flying as a future she wants to pursue" },
            { letter: "D", text: "thinks the pilots are hiding a secret" }
          ],
          correct: "C"
        },
        {
          id: "audacious",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 4, the word audacious most nearly means —",
          choices: [
            { letter: "A", text: "carefully practiced" },
            { letter: "B", text: "short and simple" },
            { letter: "C", text: "secret and hidden" },
            { letter: "D", text: "boldly daring" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "Which choice best describes the tone of Hazel's diary entry in sentence 11?",
          choices: [
            { letter: "A", text: "determined and hopeful" },
            { letter: "B", text: "gloomy and regretful" },
            { letter: "C", text: "sarcastic and mocking" },
            { letter: "D", text: "puzzled and doubtful" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-dsr-c39-chess-phones",
      family: "G9",
      title: "Phones in the Bin",
      kind: "Paired texts · 9.DSR",
      blurb: "A chess league bans devices from the hall; a parent asks about a girl who rides the bus alone.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Notice from the Bayview Chess League Tournament Director</strong></p>" +
        "<p>" + N(1) + "Beginning with the March Scholastic Open, players may not carry phones, smartwatches, or earbuds into the playing hall. " +
        N(2) + "All devices must be switched off and placed in labeled bins at the registration desk before the first round. " +
        N(3) + "Devices will be returned only after a player's final game of the day. " +
        N(4) + "This rule follows an incident at our February event, in which a player received move suggestions from a chess app during a game. " +
        N(5) + "Similar rules are now standard at most rated tournaments. " +
        N(6) + "A player found with a device in the hall will forfeit the current game. " +
        N(7) + "Parents with questions may contact the league office before March 1. " +
        N(8) + "We thank our players for protecting the fairness that makes every win meaningful.</p>" +
        "<p><strong>Text 2 — Email to the league office from Mrs. Hoa Nguyen</strong></p>" +
        "<p>" + N(9) + "I support the new device rule, and my daughter Linh does too; no one wants to win or lose because of a hidden app. " +
        N(10) + "But I am writing about a problem the notice does not address. " +
        N(11) + "Linh is twelve and takes the city bus to tournaments on her own. " +
        N(12) + "Her phone is how she tells me she has arrived, when the last round ends, and when she is on her way home. " +
        N(13) + "Under the new rule, her phone will sit in a bin across the building for up to six hours. " +
        N(14) + "Could the league let players check their bins for one minute between rounds, with a volunteer watching? " +
        N(15) + "Or could the desk keep a sign-in sheet so parents can call and confirm that their child is there? " +
        N(16) + "Fair play matters. " +
        N(17) + "So does knowing that my child is safe.</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea do both the director's notice and Mrs. Nguyen's email support?",
          choices: [
            { letter: "A", text: "Players should be allowed to keep phones on silent." },
            { letter: "B", text: "Preventing cheating with devices is important." },
            { letter: "C", text: "The February tournament should be replayed." },
            { letter: "D", text: "Parents should not attend scholastic events." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The texts about the device rule differ mainly in that Text 2 —",
          choices: [
            { letter: "A", text: "opposes any limits on phones during play" },
            { letter: "B", text: "describes the February incident in detail" },
            { letter: "C", text: "argues that chess apps help young players" },
            { letter: "D", text: "raises a safety need that Text 1 overlooks" }
          ],
          correct: "D"
        },
        {
          id: "respond",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "In sentence 13, Mrs. Nguyen is most directly responding to which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader combining both texts about the Bayview league could best conclude that —",
          choices: [
            { letter: "A", text: "the league will cancel the March Scholastic Open" },
            { letter: "B", text: "the rule could work while allowing a supervised check-in" },
            { letter: "C", text: "Linh will have to stop playing in tournaments" },
            { letter: "D", text: "most parents disagree with the device rule" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The main purpose of the director's notice (Text 1) is to —",
          choices: [
            { letter: "A", text: "entertain players with a story about cheating" },
            { letter: "B", text: "ask parents to vote on a proposed rule" },
            { letter: "C", text: "inform families of a new rule and its reason" },
            { letter: "D", text: "compare Bayview's rules with other leagues" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "9.DSR.C",
          sub: "9.DSR.C.1",
          stem: "Select TWO sentences that together best show the conflict between the new rule and Linh's situation.",
          choices: [
            { letter: "A", text: "Sentence 3 (Text 1)" },
            { letter: "B", text: "Sentence 5 (Text 1)" },
            { letter: "C", text: "Sentence 9 (Text 2)" },
            { letter: "D", text: "Sentence 12 (Text 2)" }
          ],
          correct: ["A", "D"]
        }
      ]
    },
    {
      id: "g9-dsr-c39-rail-crossing",
      family: "G9",
      title: "The Harlan Line",
      kind: "Paired texts · 9.DSR",
      blurb: "A rail authority plans to bring back passenger trains; an orchard owner counts her tractors.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the Valley Rail Authority project summary</strong></p>" +
        "<p>" + N(1) + "The Valley Rail Authority plans to restore passenger service on the 22-mile Harlan line, which has carried only occasional freight since 1987. " +
        N(2) + "Six round trips each weekday would link the towns of Harlan, Ashby, and Corliss with the regional hub at Dunmore. " +
        N(3) + "Planners estimate that the service could remove about 1,400 car trips from Route 9 each day, cutting commute times and reducing accidents on one of the county's most dangerous roads. " +
        N(4) + "Because passenger trains will travel at up to 60 miles per hour, safety standards require changes at the line's 31 road crossings. " +
        N(5) + "Busy crossings will receive gates and flashing lights. " +
        N(6) + "Seven private farm crossings, each used by fewer than ten vehicles a day, will be closed permanently. " +
        N(7) + "Construction is scheduled to begin next spring.</p>" +
        "<p><strong>Text 2 — Letter to the Ashby Courier from orchard owner Esperanza Ruiz</strong></p>" +
        "<p>" + N(8) + "My family has grown apples beside the Harlan line for three generations, and I would gladly ride a train to Dunmore instead of driving Route 9. " +
        N(9) + "But the plan's sixth sentence hides a hard fact behind a small number. " +
        N(10) + "The private crossing that will close is the only path between our packing shed and two-thirds of our trees. " +
        N(11) + "It may carry fewer than ten vehicles a day, but at harvest those few vehicles are tractors pulling the entire year's crop. " +
        N(12) + "Without the crossing, our tractors would travel four miles on Route 9, the very road the Authority calls dangerous, to reach our own orchard. " +
        N(13) + "I am not asking the Authority to stop the trains. " +
        N(14) + "I am asking it to count tractors as carefully as it counts cars.</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "On which point do the Valley Rail Authority summary and the orchard owner's letter agree?",
          choices: [
            { letter: "A", text: "Driving on Route 9 is a problem that trains could ease." },
            { letter: "B", text: "All seven farm crossings should be kept open." },
            { letter: "C", text: "Construction should be delayed until next fall." },
            { letter: "D", text: "Freight trains are more useful than passenger trains." }
          ],
          correct: "A"
        },
        {
          id: "challenge",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which sentence from Text 1 does Esperanza Ruiz most directly challenge?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "C"
        },
        {
          id: "goal",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Based on both texts, why would closing the Ruiz crossing work against one of the Authority's own goals?",
          choices: [
            { letter: "A", text: "It would slow construction of the new gates." },
            { letter: "B", text: "It would reduce the number of train riders." },
            { letter: "C", text: "It would raise the price of apples in Dunmore." },
            { letter: "D", text: "It would put slow tractors on dangerous Route 9." }
          ],
          correct: "D"
        },
        {
          id: "difference",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which statement best describes a key difference between the two texts about the Harlan line?",
          choices: [
            { letter: "A", text: "Text 1 opposes the trains, while Text 2 supports them." },
            { letter: "B", text: "Text 1 counts overall traffic; Text 2 shows one closure's effect." },
            { letter: "C", text: "Text 1 tells a family story; Text 2 lists project facts." },
            { letter: "D", text: "Text 1 is about freight; Text 2 is about passengers." }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence from Text 2 offers the strongest evidence that the low vehicle count understates the crossing's importance?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "B"
        },
        {
          id: "tractors",
          sol: "9.DSR.B",
          sub: "9.DSR.B.1",
          stem: "In sentence 14, Ruiz's request to count tractors as carefully as cars mainly conveys that planners should —",
          choices: [
            { letter: "A", text: "build a separate road just for farm vehicles" },
            { letter: "B", text: "cancel passenger service until harvest ends" },
            { letter: "C", text: "pay farmers for every tractor trip they make" },
            { letter: "D", text: "judge a crossing by its use, not just its count" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c39-freight-midnight",
      family: "G9",
      title: "Freight at Midnight",
      kind: "Poetry · 9.RL",
      blurb: "A poem about a train the speaker hears every night but never sees.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Each night at twelve the freight comes through our town,<br>" +
        L(2) + "a long low note that starts beyond the hill.<br>" +
        L(3) + "I count the cars the way some people count sheep:<br>" +
        L(4) + "a tanker, boxcar, boxcar, flatbed, still<br>" +
        L(5) + "more boxcars, rattling like a drawer of spoons,<br>" +
        L(6) + "then lumber stacked as neat as folded shirts.<br>" +
        L(7) + "I never see them. I just hear the sounds<br>" +
        L(8) + "of iron wheels that hum and click and hurt<br>" +
        L(9) + "the quiet just a little, then move on.<br>" +
        L(10) + "They're carrying the world to somewhere else:<br>" +
        L(11) + "the oranges, the paper, the steel beams,<br>" +
        L(12) + "while I lie here and only hear myself<br>" +
        L(13) + "think, someday I'll be the one who goes.<br>" +
        L(14) + "The whistle fades. The crossing light still glows." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem about the midnight freight?",
          choices: [
            { letter: "A", text: "Loud trains should not be allowed to run at night." },
            { letter: "B", text: "Counting objects is the best way to fall asleep." },
            { letter: "C", text: "Something passing by can stir a wish to see the world." },
            { letter: "D", text: "Small towns depend on trains for all of their food." }
          ],
          correct: "C"
        },
        {
          id: "spoons",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 5, the comparison of the boxcars to a drawer of spoons mainly helps the reader —",
          choices: [
            { letter: "A", text: "hear a loud, jangling metal noise" },
            { letter: "B", text: "picture what the train is carrying" },
            { letter: "C", text: "understand why the speaker is hungry" },
            { letter: "D", text: "see how small the boxcars really are" }
          ],
          correct: "A"
        },
        {
          id: "cargo",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The images in lines 10 and 11 (the oranges, the paper, the steel beams) mainly suggest that the train —",
          choices: [
            { letter: "A", text: "is carrying goods made in the speaker's town" },
            { letter: "B", text: "is heavier than most trains on the line" },
            { letter: "C", text: "often loses cargo on the curve by the hill" },
            { letter: "D", text: "links the speaker's town to distant places" }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The midnight freight poem is told from the point of view of —",
          choices: [
            { letter: "A", text: "an engineer driving the freight train" },
            { letter: "B", text: "a person lying awake who only hears the train" },
            { letter: "C", text: "a worker loading lumber onto a flatbed" },
            { letter: "D", text: "a guard standing at the railroad crossing" }
          ],
          correct: "B"
        },
        {
          id: "hurt",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In lines 8 and 9, saying the wheels hurt the quiet just a little means that the sound —",
          choices: [
            { letter: "A", text: "briefly disturbs the stillness" },
            { letter: "B", text: "injures people near the tracks" },
            { letter: "C", text: "frightens the speaker's family" },
            { letter: "D", text: "damages the town's buildings" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The poet ends with the whistle fading and the crossing light still glowing (line 14) most likely to —",
          choices: [
            { letter: "A", text: "warn readers to stay away from railroad tracks" },
            { letter: "B", text: "show that the speaker has finally fallen asleep" },
            { letter: "C", text: "suggest the speaker's longing remains after the train" },
            { letter: "D", text: "prove that the train has stopped for the night" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c39-propeller",
      family: "G9",
      title: "The Propeller on the Wall",
      kind: "Poetry · 9.RL",
      blurb: "A grandmother's wooden propeller, and the hangar where she was only allowed to sweep.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My grandmother kept a propeller on the wall<br>" +
        L(2) + "the way some people keep a wedding plate,<br>" +
        L(3) + "too fine to use, too heavy to forget.<br>" +
        L(4) + "Laminated ash, she'd say, and tap the grain:<br>" +
        L(5) + "nine thin boards glued true, so not one splinter<br>" +
        L(6) + "would fly apart at eighteen hundred turns.<br>" +
        L(7) + "She never flew. In 1919, girls<br>" +
        L(8) + "were let inside the hangar to sweep floors,<br>" +
        L(9) + "and so she swept, and watched, and learned the names<br>" +
        L(10) + "of every bolt the mechanics dropped, and then<br>" +
        L(11) + "one winter, when the crew was short a hand,<br>" +
        L(12) + "she held the wrench. And kept it twenty years.<br>" +
        L(13) + "I used to think the blade was just a fan<br>" +
        L(14) + "too big for any room. Now I can see<br>" +
        L(15) + "a wing that turned so others could go up,<br>" +
        L(16) + "and a woman who stayed down, and made it true." +
        "</p>",
      claims: [
        {
          id: "limits",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Lines 7 and 8 suggest that, as a young woman, the grandmother —",
          choices: [
            { letter: "A", text: "was afraid of airplanes and refused to fly" },
            { letter: "B", text: "preferred cleaning to working on engines" },
            { letter: "C", text: "owned the hangar where the planes were kept" },
            { letter: "D", text: "faced limits on what she was allowed to do" }
          ],
          correct: "D"
        },
        {
          id: "plate",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In line 3, the phrase too fine to use, too heavy to forget suggests that the propeller —",
          choices: [
            { letter: "A", text: "is broken and can no longer be repaired" },
            { letter: "B", text: "is both a treasured object and a lasting memory" },
            { letter: "C", text: "was bought as a gift for a family wedding" },
            { letter: "D", text: "is too heavy to hang safely on the wall" }
          ],
          correct: "B"
        },
        {
          id: "shift",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "How does the speaker's view of the propeller change from lines 13–14 to lines 15–16?",
          choices: [
            { letter: "A", text: "From an oversized fan to a sign of her grandmother's work" },
            { letter: "B", text: "From a family treasure to an object worth selling" },
            { letter: "C", text: "From a frightening machine to a harmless decoration" },
            { letter: "D", text: "From a sign of success to a reminder of failure" }
          ],
          correct: "A"
        },
        {
          id: "true",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In line 5, the phrase glued true most nearly means the boards were —",
          choices: [
            { letter: "A", text: "painted to look real" },
            { letter: "B", text: "signed by the builder" },
            { letter: "C", text: "joined precisely and evenly" },
            { letter: "D", text: "stuck on loosely for show" }
          ],
          correct: "C"
        },
        {
          id: "wing",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 15, calling the propeller a wing that turned so others could go up mainly suggests that —",
          choices: [
            { letter: "A", text: "the propeller was later used as a wing" },
            { letter: "B", text: "the grandmother secretly flew in 1919" },
            { letter: "C", text: "the speaker wants to become a pilot" },
            { letter: "D", text: "her ground work helped others to fly" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"The Propeller on the Wall\"?",
          choices: [
            { letter: "A", text: "Old machines are more beautiful than new ones." },
            { letter: "B", text: "Behind-the-scenes work matters as much as fame." },
            { letter: "C", text: "Family members rarely share their real stories." },
            { letter: "D", text: "People should keep only objects they can use." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c39-waste-audit",
      family: "G9",
      title: "Six Bags",
      kind: "Drama · 9.RL",
      blurb: "Two Green Team members weigh the cafeteria's trash, and one of them stops joking.",
      level: 2,
      passage:
        "<p><em>Setting: the loading dock behind Kestrel Ridge High School, right after lunch. Six bulging trash bags, a bathroom scale, a clipboard. YASMIN, in rubber gloves, ties back her hair. KEANU holds the clipboard at arm's length.</em></p>" +
        "<p>" + N(1) + "<strong>KEANU</strong>: When you said \"Green Team project,\" I pictured planting trees. " +
        N(2) + "Not this.</p>" +
        "<p>" + N(3) + "<strong>YASMIN</strong>: The principal won't add compost bins unless we prove how much food we throw away. " +
        N(4) + "Numbers, Keanu. " +
        N(5) + "She wants numbers.</p>" +
        "<p>" + N(6) + "<strong>KEANU</strong> <em>(to the audience)</em>: I joined because Yasmin asked me, and Yasmin never asks anyone for anything. " +
        N(7) + "I wasn't going to say no the one time she did.</p>" +
        "<p>" + N(8) + "<strong>YASMIN</strong> <em>(opening a bag, wincing)</em>: Okay. " +
        N(9) + "Half a sandwich, two apples, whole apples, not even bitten, and a carton of milk that's still full.</p>" +
        "<p>" + N(10) + "<strong>KEANU</strong> <em>(writing)</em>: Apples, two. " +
        N(11) + "Whole. " +
        N(12) + "Tragic.</p>" +
        "<p>" + N(13) + "<strong>YASMIN</strong>: It's not a joke. " +
        N(14) + "Multiply this by six bags, by five days, by thirty-six weeks.</p>" +
        "<p>" + N(15) + "<strong>KEANU</strong> <em>(lowering the clipboard; quieter)</em>: I know. " +
        N(16) + "My grandmother would have turned those apples into three different desserts.</p>" +
        "<p>" + N(17) + "<strong>YASMIN</strong> <em>(pausing, looking up)</em>: Then write that down too.</p>" +
        "<p>" + N(18) + "<strong>KEANU</strong>: My grandmother?</p>" +
        "<p>" + N(19) + "<strong>YASMIN</strong>: The principal has seen plenty of charts. " +
        N(20) + "She hasn't seen your grandmother's face when someone wastes fruit.</p>" +
        "<p><em>KEANU laughs, pulls on a second pair of gloves, and reaches into the next bag.</em></p>",
      claims: [
        {
          id: "aside",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The playwright uses Keanu's aside in sentences 6 and 7 mainly to —",
          choices: [
            { letter: "A", text: "show that Keanu is angry at the principal" },
            { letter: "B", text: "reveal a private reason Yasmin does not hear" },
            { letter: "C", text: "explain the rules of the Green Team project" },
            { letter: "D", text: "describe the loading dock to the audience" }
          ],
          correct: "B"
        },
        {
          id: "direction",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction lowering the clipboard; quieter in sentence 15 mainly signals that Keanu —",
          choices: [
            { letter: "A", text: "is too tired to keep taking notes" },
            { letter: "B", text: "wants Yasmin to finish the work alone" },
            { letter: "C", text: "is hiding the clipboard from the principal" },
            { letter: "D", text: "drops his joking tone and speaks sincerely" }
          ],
          correct: "D"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the loading-dock setting, with its six bulging bags, affect Keanu and Yasmin's conversation?",
          choices: [
            { letter: "A", text: "It makes the waste concrete, moving them toward seriousness." },
            { letter: "B", text: "It makes them hurry so they can return to class on time." },
            { letter: "C", text: "It makes them argue about who should carry the bags." },
            { letter: "D", text: "It makes them forget the purpose of their project." }
          ],
          correct: "A"
        },
        {
          id: "yasmin",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Yasmin in this scene?",
          choices: [
            { letter: "A", text: "She is bossy and refuses to hear Keanu's ideas." },
            { letter: "B", text: "She is shy and lets Keanu make the decisions." },
            { letter: "C", text: "She is determined but open to a new approach." },
            { letter: "D", text: "She is careless about collecting accurate data." }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that Yasmin wants Keanu to write down his grandmother because she believes —",
          choices: [
            { letter: "A", text: "a personal story may persuade where charts alone have not" },
            { letter: "B", text: "Keanu's grandmother should cook for the cafeteria" },
            { letter: "C", text: "the principal knows Keanu's family personally" },
            { letter: "D", text: "the numbers they collected are probably wrong" }
          ],
          correct: "A"
        },
        {
          id: "resolve",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "What does the final stage direction suggest about how the scene's conflict is resolved?",
          choices: [
            { letter: "A", text: "Keanu decides to quit the Green Team." },
            { letter: "B", text: "Yasmin takes over Keanu's job as well." },
            { letter: "C", text: "The principal arrives to stop the audit." },
            { letter: "D", text: "Keanu is now fully committed to the task." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c39-docent-guide",
      family: "G9",
      title: "Junior Docent Guide",
      kind: "Functional text · 9.RI",
      blurb: "What a new volunteer at a railroad museum needs to know before the first tour.",
      level: 1,
      passage:
        "<p><strong>Pine Hollow Railroad Museum — Junior Docent Guide</strong></p>" +
        "<p><strong>Who Can Volunteer</strong><br>" + N(1) + "Junior docents must be 14 to 18 years old and able to volunteer at least two Saturdays a month. " +
        N(2) + "A parent or guardian must sign the permission form before your first shift.</p>" +
        "<p><strong>Your First Day</strong><br>" + N(3) + "Arrive at the staff entrance on Depot Street by 9:15 a.m. " +
        N(4) + "Pick up your blue vest and name badge from the volunteer desk. " +
        N(5) + "You will shadow an experienced docent for your first two shifts before leading any tours yourself.</p>" +
        "<p><strong>Safety Rules</strong><br>" + N(6) + "Never climb onto a locomotive or into a cab unless a staff member is present. " +
        N(7) + "Keep visitors behind the yellow line on the platform at all times, because the restored switch engine moves under its own power during demonstrations. " +
        N(8) + "Report any injury, however small, to the volunteer desk immediately.</p>" +
        "<p><strong>Leading a Tour</strong><br>" + N(9) + "Tours last 30 minutes and begin every hour on the hour at the ticket window. " +
        N(10) + "Each docent covers three stops: the 1920s passenger coach, the signal tower, and the roundhouse turntable. " +
        N(11) + "If a visitor asks a question you cannot answer, write it on a question card and leave it at the desk; a staff historian will reply by email. " +
        N(12) + "Honestly, the turntable is everyone's favorite stop, so save it for last.</p>" +
        "<p><strong>Cancellations</strong><br>" + N(13) + "If you cannot attend a scheduled shift, call the volunteer coordinator at least 48 hours ahead.</p>",
      claims: [
        {
          id: "question",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the docent guide, what should a junior docent do when a visitor asks a question the docent cannot answer?",
          choices: [
            { letter: "A", text: "Write it on a card for a staff historian." },
            { letter: "B", text: "Look up the answer on a phone." },
            { letter: "C", text: "Call the volunteer coordinator." },
            { letter: "D", text: "Skip that stop on the tour." }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The bold headings in the docent guide help a reader mainly by —",
          choices: [
            { letter: "A", text: "listing the museum's trains in order of age" },
            { letter: "B", text: "telling the history of the Pine Hollow line" },
            { letter: "C", text: "grouping instructions by topic for quick use" },
            { letter: "D", text: "showing which rules matter least to staff" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the docent guide is closest to an opinion rather than an instruction?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "D"
        },
        {
          id: "support",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that new volunteers are not expected to lead tours right away?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "B"
        },
        {
          id: "shadow",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As used in sentence 5 of the guide, the word shadow most nearly means —",
          choices: [
            { letter: "A", text: "follow and observe" },
            { letter: "B", text: "hide from in the dark" },
            { letter: "C", text: "replace on short notice" },
            { letter: "D", text: "quietly report on" }
          ],
          correct: "A"
        },
        {
          id: "safety",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best summarizes the Safety Rules section of the guide?",
          choices: [
            { letter: "A", text: "Volunteers may climb on any engine they choose." },
            { letter: "B", text: "Visitors must sign a form before touring the trains." },
            { letter: "C", text: "Docents protect themselves and visitors around trains." },
            { letter: "D", text: "Injuries should be reported only if they are serious." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c39-bottle-return",
      family: "G9",
      title: "Bottles Have Value",
      kind: "Argument · 9.RI",
      blurb: "A student argues that a nickel a bottle could do what reminders have not.",
      level: 2,
      passage:
        "<p><strong>Bottles Have Value. Let's Prove It.</strong> <em>by Tanvi Desai, student council member</em></p>" +
        "<p>" + N(1) + "Walk past the vending machines at Oak Glen High after lunch, and you will find the same thing every day: plastic bottles in the trash can, two feet from the recycling bin. " +
        N(2) + "Telling students to recycle has not worked, so our school should try something that has: paying them. " +
        N(3) + "I propose that the student council start a bottle-return program, offering five cents for every empty bottle brought to a collection booth in the cafeteria. " +
        N(4) + "The idea is not new. " +
        N(5) + "Places with bottle deposit laws often report return rates far higher than places without them, because an empty bottle suddenly has value. " +
        N(6) + "When our Environmental Club tested a one-week version last spring, students returned 1,130 bottles, compared with about 300 that usually reach the recycling bin in a week. " +
        N(7) + "Some will say the school cannot afford to hand out nickels. " +
        N(8) + "But the recycling company that serves our district pays for clean, sorted plastic, and the club's test showed that those payments covered most of the cost. " +
        N(9) + "Others will argue that students should recycle because it is right, not because they are paid. " +
        N(10) + "I agree that would be better. " +
        N(11) + "But a habit has to start somewhere, and a nickel is a small price for a lesson that might last. " +
        N(12) + "Bottles in the trash are not a mystery; they are a choice. " +
        N(13) + "Let's give our classmates a reason to make a better one.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence best states Tanvi's central claim?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence provides the strongest evidence that a bottle-return program could work at Oak Glen?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "judgment",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence in Tanvi's editorial expresses a judgment rather than a fact that could be checked?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 1" }
          ],
          correct: "C"
        },
        {
          id: "counter",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The author responds to opposing views in sentences 7–10 mainly to —",
          choices: [
            { letter: "A", text: "show she has weighed objections and can answer them" },
            { letter: "B", text: "admit that her proposal is too expensive to try" },
            { letter: "C", text: "criticize students who disagree with the club" },
            { letter: "D", text: "change the topic from bottles to school funding" }
          ],
          correct: "A"
        },
        {
          id: "choice",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 12, Tanvi calls bottles in the trash a choice rather than a mystery. The word choice emphasizes that students —",
          choices: [
            { letter: "A", text: "cannot find the recycling bins" },
            { letter: "B", text: "do not understand recycling rules" },
            { letter: "C", text: "are tricked by vending machines" },
            { letter: "D", text: "are responsible and can act differently" }
          ],
          correct: "D"
        },
        {
          id: "cost",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to Tanvi, how would the bottle-return program pay for most of its cost?",
          choices: [
            { letter: "A", text: "With payments for clean, sorted plastic" },
            { letter: "B", text: "With higher prices at the vending machines" },
            { letter: "C", text: "With donations from the Environmental Club" },
            { letter: "D", text: "With fines for students who litter" }
          ],
          correct: "A"
        }
      ]
    },
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
