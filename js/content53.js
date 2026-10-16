/* SOL Labyrinth — Grade 9 long packs, expansion file 53 (VA 9.RL / 9.RI / 9.RV / 9.DSR): stories, an
 * article set, a poem, a scene, a functional text, an argument and paired texts about a tutoring program,
 * coastal tide pools, a school robotics club and community gardens (390–520 words). Original text only.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LITERARY · tutoring ───────────────────────── */
    {
      id: "g9-rl-c53-dragon-hoard",
      family: "G9",
      title: "The Dragon's Hoard",
      kind: "Literary · 9.RL",
      blurb: "Amara signs up to tutor fractions. Her student answers every question with two words: Don't care.",
      level: 2,
      passage:
        "<p>" + N(1) + "The Bridge Hour sign-up sheet had promised Amara Mensah \"a rewarding hour helping younger students,\" but nobody had warned her about Theo. " +
        N(2) + "He was eleven, kept his hood up, and on their first Tuesday in the middle-school library he answered every question about fractions with the same two words: \"Don't care.\" " +
        N(3) + "Amara had prepared colored worksheets, a stack of flash cards, and a short speech about how math was everywhere. " +
        N(4) + "By the end of the hour, the worksheets were still blank, and Theo had drawn a small, scowling dragon in the margin of each one.</p>" +
        "<p>" + N(5) + "On Thursday she tried a game with dice. " +
        N(6) + "Theo rolled them off the table twice, on purpose, and watched her face to see what she would do. " +
        N(7) + "She picked them up without a word, though her cheeks were hot. " +
        N(8) + "Mr. Delgado, the program coordinator, stopped by their table after Theo had gone. " +
        N(9) + "\"Rough week?\" he asked quietly. " +
        N(10) + "\"He hates me,\" Amara said. " +
        N(11) + "\"He hates fractions,\" Mr. Delgado said. " +
        N(12) + "\"You just happen to be standing next to them.\"</p>" +
        "<p>" + N(13) + "That weekend Amara sorted the worksheets into a folder and noticed the dragons again. " +
        N(14) + "They were not random scribbles. " +
        N(15) + "In each margin the dragon was a little different: on one page it breathed a thin line of fire, on another it was split down the middle by a dotted line, and on a third it guarded four eggs, one of them shaded. " +
        N(16) + "She looked at the third drawing for a long time. " +
        N(17) + "One egg out of four was shaded. " +
        N(18) + "Theo had drawn a fraction without meaning to.</p>" +
        "<p>" + N(19) + "The next Tuesday she did not bring worksheets. " +
        N(20) + "She brought a sketchbook with eight empty comic panels ruled across two pages. " +
        N(21) + "\"I need a dragon story,\" she said. " +
        N(22) + "\"The dragon has a hoard of twelve gold coins, and in every panel something takes part of it away.\" " +
        N(23) + "Theo pushed his hood back an inch. " +
        N(24) + "\"Like what?\" " +
        N(25) + "\"You decide. " +
        N(26) + "But under each panel you have to write how much is left.\"</p>" +
        "<p>" + N(27) + "For forty minutes he drew. " +
        N(28) + "A knight stole a third of the hoard; a crow carried off two coins; a careless sneeze scattered half of what remained. " +
        N(29) + "Under each panel, in cramped pencil, Theo wrote the fractions, crossed them out, and wrote them again. " +
        N(30) + "Twice he asked Amara to check his math, and twice he groaned when she pointed to a mistake, but he fixed both. " +
        N(31) + "When Mr. Delgado walked past, Theo covered the page with his arm. " +
        N(32) + "\"It's not done,\" he said.</p>" +
        "<p>" + N(33) + "At the end of the hour Theo zipped his backpack and stopped at the door. " +
        N(34) + "\"Thursday the dragon gets the coins back,\" he announced. " +
        N(35) + "\"With interest.\" " +
        N(36) + "Amara had no idea whether sixth graders learned about interest. " +
        N(37) + "She decided she would find out by Thursday.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the story of Amara and Theo best develop?",
          choices: [
            { letter: "A", text: "Strict rules are the surest way to reach a reluctant student." },
            { letter: "B", text: "Paying close attention to a learner can reveal a way to reach him." },
            { letter: "C", text: "Games are always more useful for learning than worksheets are." },
            { letter: "D", text: "Young tutors should let adults handle their hardest problems." }
          ],
          correct: "B"
        },
        {
          id: "delgado",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "In sentences 11 and 12, Mr. Delgado most likely means that —",
          choices: [
            { letter: "A", text: "Amara should ask for a different student to tutor" },
            { letter: "B", text: "Theo will like fractions once he is older" },
            { letter: "C", text: "Amara has been standing too close to Theo" },
            { letter: "D", text: "Theo's anger is aimed at the subject, not at Amara" }
          ],
          correct: "D"
        },
        {
          id: "restraint",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows that Amara keeps her frustration with Theo under control?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 36" }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How do the events of the third paragraph (sentences 13–18) change the direction of the story?",
          choices: [
            { letter: "A", text: "Amara decides to quit the Bridge Hour program." },
            { letter: "B", text: "Mr. Delgado assigns Amara a new set of worksheets." },
            { letter: "C", text: "Amara sees that Theo's doodles can connect to the math." },
            { letter: "D", text: "Theo admits that he already understands fractions." }
          ],
          correct: "C"
        },
        {
          id: "cramped",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 29, the word cramped most nearly means —",
          choices: [
            { letter: "A", text: "small and squeezed together" },
            { letter: "B", text: "sore from too much effort" },
            { letter: "C", text: "careless and hard to read" },
            { letter: "D", text: "faint and partly erased" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the story is told from Amara's point of view, the reader —",
          choices: [
            { letter: "A", text: "learns exactly why Theo dislikes fractions" },
            { letter: "B", text: "hears Mr. Delgado's private thoughts about Theo" },
            { letter: "C", text: "knows how the dragon story will end on Thursday" },
            { letter: "D", text: "must judge Theo's feelings from his actions and words" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the story's ending (sentences 33–37) is best described as —",
          choices: [
            { letter: "A", text: "anxious and doubtful" },
            { letter: "B", text: "stern and disappointed" },
            { letter: "C", text: "hopeful and lightly humorous" },
            { letter: "D", text: "sad and reflective" }
          ],
          correct: "C"
        },
        {
          id: "except",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "All of the following show Theo's growing interest in the lesson EXCEPT —",
          choices: [
            { letter: "A", text: "pushing his hood back an inch" },
            { letter: "B", text: "rolling the dice off the table" },
            { letter: "C", text: "asking Amara to check his math" },
            { letter: "D", text: "planning what happens on Thursday" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── LITERARY · tide pools ───────────────────────── */
    {
      id: "g9-rl-c53-transect-four",
      family: "G9",
      title: "Transect Four",
      kind: "Literary · 9.RL",
      blurb: "For two years Rafa only carried the bucket. This morning the tide-pool clipboard is hers.",
      level: 3,
      passage:
        "<p>" + N(1) + "The tide table said 5:42 a.m., minus one point one feet, and Rafa had set two alarms to be sure. " +
        N(2) + "By the time she reached the bottom of the cliff stairs at Kestrel Point, the sky over the water was the gray of an unwashed pan, and the rocks that spent most of the day underwater lay bare and shining. " +
        N(3) + "Mrs. Hayashi was already there with the clipboard, the measuring tape, and the thermos she never seemed to drink from. " +
        N(4) + "\"Transect four is yours,\" she said. " +
        N(5) + "\"Same as Mateo's.\"</p>" +
        "<p>" + N(6) + "Last year, and the year before, Rafa had only carried the bucket. " +
        N(7) + "Her brother had done the counting, crouched over each pool with his nose almost touching the water, calling out numbers while she wrote them down. " +
        N(8) + "Now Mateo was three hundred miles away studying engineering, and the clipboard was hers. " +
        N(9) + "She knew the procedure: walk the tape, check every pool within one meter of it, and record each sea star by color and size. " +
        N(10) + "What she did not know was how to keep her hands from shaking.</p>" +
        "<p>" + N(11) + "The first pools were crowded with life, just not the kind she was counting. " +
        N(12) + "Anemones closed into green fists when her shadow passed. " +
        N(13) + "Hermit crabs dragged borrowed shells across the gravel. " +
        N(14) + "A sculpin, the same mottled brown as the rock, held perfectly still until she nearly touched it, then vanished in a puff of sand. " +
        N(15) + "But where the purple and orange stars had once clung in clusters of ten and twenty, there were only pale, empty patches.</p>" +
        "<p>" + N(16) + "Rafa remembered the summer the stars had melted. " +
        N(17) + "That was the word Mateo had used, and it had been accurate: arms curling, bodies going soft, whole colonies turning to white paste on the rocks within a few weeks. " +
        N(18) + "Scientists had called it wasting disease. " +
        N(19) + "At ten years old, Rafa had called it the end of the world, and she had stopped coming to the beach for a while.</p>" +
        "<p>" + N(20) + "At pool eleven she wrote a zero, the fourth zero in a row, and pressed so hard that the pencil tip snapped. " +
        N(21) + "She was sharpening it with the small knife from the kit when something caught her eye under the lip of a ledge. " +
        N(22) + "It was orange, smaller than her thumbnail, five arms spread like a child's drawing of a star. " +
        N(23) + "Rafa lowered her face until her nose almost touched the water, and then she laughed, because she knew exactly whose posture she had borrowed.</p>" +
        "<p>" + N(24) + "\"Juvenile,\" Mrs. Hayashi said, kneeling beside her. " +
        N(25) + "\"Born after the die-off. " +
        N(26) + "That means adults nearby survived long enough to spawn.\" " +
        N(27) + "She did not cheer; she simply tapped the clipboard. " +
        N(28) + "\"Write it down. " +
        N(29) + "Size and color.\"</p>" +
        "<p>" + N(30) + "Rafa wrote it down: one ochre star, orange, twelve millimeters. " +
        N(31) + "It was a small number on a long page of zeros. " +
        N(32) + "That night she photographed the page and sent it to Mateo with no message at all, and an hour later he replied with a single word: \"Twelve!\" " +
        N(33) + "She understood that he had read the whole page, every zero, before he found it.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best developed across the whole story of Rafa's survey?",
          choices: [
            { letter: "A", text: "Scientific work matters only when it produces large numbers." },
            { letter: "B", text: "Older siblings should not leave home while they are needed." },
            { letter: "C", text: "A small sign of recovery can carry great meaning after a loss." },
            { letter: "D", text: "Nature recovers fastest when people stay away from it." }
          ],
          correct: "C"
        },
        {
          id: "tide",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the timing of the low tide described in sentences 1 and 2 affect Rafa's morning?",
          choices: [
            { letter: "A", text: "It forces her to arrive before dawn, while the rocks are uncovered." },
            { letter: "B", text: "It keeps her from reaching the pools until Mrs. Hayashi has left." },
            { letter: "C", text: "It floods the cliff stairs, so she must take a longer path." },
            { letter: "D", text: "It brings in the sea stars that she has been hoping to count." }
          ],
          correct: "A"
        },
        {
          id: "fists",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 12, the author describes the anemones as closing into green fists mainly to show that they —",
          choices: [
            { letter: "A", text: "are angry that the survey has disturbed them" },
            { letter: "B", text: "are the same color as the surrounding rock" },
            { letter: "C", text: "have been damaged by the same disease as the stars" },
            { letter: "D", text: "pull in tightly to protect themselves from a threat" }
          ],
          correct: "D"
        },
        {
          id: "nerves",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows that Rafa feels uneasy about her new responsibility?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 30" }
          ],
          correct: "B"
        },
        {
          id: "memory",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The author includes the memory in sentences 16–19 mainly to —",
          choices: [
            { letter: "A", text: "explain why the empty patches affect Rafa so deeply" },
            { letter: "B", text: "show that Mateo was a better counter than Rafa" },
            { letter: "C", text: "describe how scientists first discovered the disease" },
            { letter: "D", text: "suggest that the beach is no longer safe for visitors" }
          ],
          correct: "A"
        },
        {
          id: "posture",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "In sentence 23, readers can best infer that Rafa laughs because she —",
          choices: [
            { letter: "A", text: "thinks the tiny star looks like a cartoon" },
            { letter: "B", text: "is relieved that the survey is nearly over" },
            { letter: "C", text: "realizes she is crouching just as Mateo once did" },
            { letter: "D", text: "remembers a joke Mrs. Hayashi told earlier" }
          ],
          correct: "C"
        },
        {
          id: "zeros",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "Sentence 31 calls the find a small number on a long page of zeros. This figurative description mainly suggests that the star —",
          choices: [
            { letter: "A", text: "was recorded in the wrong place on the page" },
            { letter: "B", text: "is modest but stands out against everything missing" },
            { letter: "C", text: "will probably not survive until the next survey" },
            { letter: "D", text: "matters less to the project than the empty pools" }
          ],
          correct: "B"
        },
        {
          id: "hayashi",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of Mrs. Hayashi's words and actions in sentences 24–29 is best described as —",
          choices: [
            { letter: "A", text: "thrilled and noisy" },
            { letter: "B", text: "doubtful and cold" },
            { letter: "C", text: "impatient and sharp" },
            { letter: "D", text: "calm and matter-of-fact" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── LITERARY · robotics club ───────────────────────── */
    {
      id: "g9-rl-c53-biscuit-left",
      family: "G9",
      title: "Biscuit Won't Turn Left",
      kind: "Literary · 9.RL",
      blurb: "Three days before the qualifier, the robotics club's robot keeps driving into the wall.",
      level: 1,
      passage:
        "<p>" + N(1) + "The robot was named Biscuit, and on Wednesday afternoon Biscuit would not turn left. " +
        N(2) + "It turned right perfectly. " +
        N(3) + "It drove straight, lifted its arm, and dropped a foam ring onto a peg without a wobble. " +
        N(4) + "But every time the program told it to turn left, Biscuit spun in a slow, sad half circle and rolled into the wall of the practice field. " +
        N(5) + "The regional qualifier was on Saturday.</p>" +
        "<p>" + N(6) + "Jun Park was the club's main programmer, and he was sure the problem was in the code. " +
        N(7) + "He sat at the laptop with his headphones around his neck and changed numbers one at a time. " +
        N(8) + "He made the left turn faster. " +
        N(9) + "He made it slower. " +
        N(10) + "He rewrote the whole turning section from scratch while the rest of the team ate pretzels and watched. " +
        N(11) + "After each change he said, \"Okay, this time,\" and after each test Biscuit hit the wall again.</p>" +
        "<p>" + N(12) + "Esperanza Villanueva had built most of Biscuit's frame. " +
        N(13) + "She was a quiet sophomore who usually spoke only when someone asked her a direct question, and nobody had asked her anything all afternoon. " +
        N(14) + "While Jun typed, she lay on the floor beside the robot and watched its wheels. " +
        N(15) + "She spun the right wheel with one finger, and it turned freely. " +
        N(16) + "She spun the left wheel, and it stopped almost at once, as if someone had grabbed it.</p>" +
        "<p>" + N(17) + "\"Jun,\" she said. " +
        N(18) + "He did not hear her. " +
        N(19) + "\"Jun,\" she said again, louder, and the whole room turned. " +
        N(20) + "Her face went red, but she kept going. " +
        N(21) + "\"I don't think it's the code. " +
        N(22) + "The left wheel is rubbing on the frame. " +
        N(23) + "I think a screw came loose when we dropped it on Monday.\"</p>" +
        "<p>" + N(24) + "Jun looked at her, then at the laptop, then at the robot. " +
        N(25) + "For a moment he seemed ready to argue. " +
        N(26) + "Instead he knelt beside her and spun the left wheel himself. " +
        N(27) + "It stopped short, just as she had said. " +
        N(28) + "Esperanza found the loose screw in under a minute, tightened it with the small hex key she kept in her pocket, and slid Biscuit back onto the field.</p>" +
        "<p>" + N(29) + "Jun put back his original code, the version from that morning. " +
        N(30) + "He pressed run. " +
        N(31) + "Biscuit drove forward, lifted its arm, and turned left as smoothly as a dancer. " +
        N(32) + "The team cheered so loudly that the custodian looked in from the hallway. " +
        N(33) + "Jun turned to Esperanza and held out the laptop. " +
        N(34) + "\"Next time something's wrong,\" he said, \"you're the first person I ask.\" " +
        N(35) + "Esperanza took the hex key out of her pocket and spun it once around her finger. " +
        N(36) + "\"Then I'll start talking sooner,\" she said.</p>",
      claims: [
        {
          id: "cause",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on the story, what was really causing Biscuit to miss its left turns?",
          choices: [
            { letter: "A", text: "Jun had typed the wrong numbers into the turn." },
            { letter: "B", text: "The practice field was tilted toward one wall." },
            { letter: "C", text: "The robot's arm was too heavy on the left side." },
            { letter: "D", text: "A loose screw let the left wheel rub on the frame." }
          ],
          correct: "D"
        },
        {
          id: "espe",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Esperanza at the beginning of the story?",
          choices: [
            { letter: "A", text: "She is bored and wants to leave practice early." },
            { letter: "B", text: "She is quiet but pays close attention to details." },
            { letter: "C", text: "She is jealous that Jun leads the programming." },
            { letter: "D", text: "She is confident and eager to give orders." }
          ],
          correct: "B"
        },
        {
          id: "dancer",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 31, the author compares Biscuit to a dancer mainly to show that the robot —",
          choices: [
            { letter: "A", text: "now moves gracefully and without trouble" },
            { letter: "B", text: "is performing for the custodian in the hall" },
            { letter: "C", text: "has been decorated for the competition" },
            { letter: "D", text: "spins in circles more than it should" }
          ],
          correct: "A"
        },
        {
          id: "sad",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 4, the words slow, sad half circle mainly make Biscuit seem —",
          choices: [
            { letter: "A", text: "dangerous to the people nearby" },
            { letter: "B", text: "faster than the other robots" },
            { letter: "C", text: "almost defeated by its problem" },
            { letter: "D", text: "ready for the qualifier" }
          ],
          correct: "C"
        },
        {
          id: "saturday",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The author most likely includes sentence 5 about the qualifier to —",
          choices: [
            { letter: "A", text: "explain why the team is eating pretzels" },
            { letter: "B", text: "show that the club has won the event before" },
            { letter: "C", text: "add urgency because time to fix Biscuit is short" },
            { letter: "D", text: "introduce the robot that the team will face" }
          ],
          correct: "C"
        },
        {
          id: "lesson",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which lesson does the story about Biscuit best teach?",
          choices: [
            { letter: "A", text: "A team solves more when it listens to quieter members." },
            { letter: "B", text: "Rewriting code is the fastest way to fix any robot." },
            { letter: "C", text: "Competitions matter more than practice sessions do." },
            { letter: "D", text: "Builders and programmers should work in separate rooms." }
          ],
          correct: "A"
        },
        {
          id: "jun",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows that Jun is willing to test Esperanza's idea?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 26" }
          ],
          correct: "D"
        },
        {
          id: "grabbed",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 16, the phrase as if someone had grabbed it shows that the left wheel —",
          choices: [
            { letter: "A", text: "was spinning much faster than the right one" },
            { letter: "B", text: "stopped suddenly because something held it" },
            { letter: "C", text: "had been removed by another club member" },
            { letter: "D", text: "made a loud noise each time it turned" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL · community gardens ───────────────────────── */
    {
      id: "g9-ri-c53-lot-to-plot",
      family: "G9",
      title: "From Empty Lot to Garden Plot",
      kind: "Informational · 9.RI",
      blurb: "Permission, soil tests, water and rules: how neighbors turn a vacant lot into a garden.",
      level: 2,
      passage:
        "<p>" + N(1) + "In many cities, empty lots sit behind chain-link fences for years, collecting weeds, broken glass, and the occasional abandoned shopping cart. " +
        N(2) + "To most people passing by, they look like nothing at all. " +
        N(3) + "To a growing number of neighborhood groups, however, they look like the first page of a garden. " +
        N(4) + "Turning a vacant lot into a community garden is rarely quick, but the steps that groups follow are surprisingly similar from place to place.</p>" +
        "<p>" + N(5) + "The first step is usually permission. " +
        N(6) + "A lot may belong to the city, to a bank, or to an owner who lives far away, and planting on it without approval can end with the garden being bulldozed. " +
        N(7) + "Many cities now offer garden lease programs that let residents use public land for a small fee, often one dollar a year, as long as the group keeps the site clean and safe.</p>" +
        "<p>" + N(8) + "The second step happens underground. " +
        N(9) + "Soil in older urban neighborhoods can contain lead from old house paint and from gasoline that was sold decades ago. " +
        N(10) + "Because children are especially sensitive to lead, careful groups send soil samples to a laboratory before planting anything edible. " +
        N(11) + "If the results are high, gardeners do not necessarily give up. " +
        N(12) + "Instead, they build raised beds, wooden boxes filled with clean soil and set on top of a barrier, so that roots never reach the ground below.</p>" +
        "<p>" + N(13) + "Water is the third challenge. " +
        N(14) + "A tomato plant in midsummer can drink more than a gallon a day, and hauling buckets from a nearby kitchen quickly wears out even the most enthusiastic volunteers. " +
        N(15) + "Some gardens arrange to tap a fire hydrant through a special meter; others collect rain from the roofs of neighboring buildings in large barrels.</p>" +
        "<p>" + N(16) + "Finally, a garden needs rules. " +
        N(17) + "Who gets a plot, and for how long? " +
        N(18) + "What happens if someone stops weeding? " +
        N(19) + "Successful gardens usually write these answers down early, because disagreements are easier to settle with a shared document than with competing memories.</p>" +
        "<p>" + N(20) + "Why go to all this trouble? " +
        N(21) + "Gardeners usually mention fresh vegetables first, but people who study community gardens point to other benefits as well. " +
        N(22) + "Planted lots absorb rainwater that would otherwise rush into storm drains, and on hot afternoons they can be noticeably cooler than the pavement around them. " +
        N(23) + "Gardens also give neighbors a reason to meet. " +
        N(24) + "In one survey of gardeners in a midsize city, more than half said they had learned the names of neighbors they had never spoken to before joining. " +
        N(25) + "A vacant lot, it turns out, can grow more than food.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the article about vacant lots?",
          choices: [
            { letter: "A", text: "Turning a lot into a garden takes several steps but brings many benefits." },
            { letter: "B", text: "Cities should give every vacant lot to a neighborhood group for free." },
            { letter: "C", text: "Lead in city soil makes most vacant lots unsafe for any kind of use." },
            { letter: "D", text: "Community gardens are mainly a way for families to save on groceries." }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Sentences 5–19 of the article are organized mainly as —",
          choices: [
            { letter: "A", text: "a comparison of gardens in two different cities" },
            { letter: "B", text: "a story told from one gardener's point of view" },
            { letter: "C", text: "a sequence of steps that garden groups follow" },
            { letter: "D", text: "a list of arguments against using vacant lots" }
          ],
          correct: "C"
        },
        {
          id: "beds",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the article, why do some gardeners build raised beds?",
          choices: [
            { letter: "A", text: "To make the plots easier for children to reach" },
            { letter: "B", text: "To keep plant roots away from soil that may hold lead" },
            { letter: "C", text: "To collect rainwater from the roofs of nearby buildings" },
            { letter: "D", text: "To mark the borders between different gardeners' plots" }
          ],
          correct: "B"
        },
        {
          id: "questions",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes the questions in sentences 17 and 18 mainly to —",
          choices: [
            { letter: "A", text: "suggest that most gardens fail because of arguments" },
            { letter: "B", text: "ask readers to volunteer at a nearby garden" },
            { letter: "C", text: "show that the author is unsure how gardens work" },
            { letter: "D", text: "illustrate the kinds of issues a garden's rules must settle" }
          ],
          correct: "D"
        },
        {
          id: "neighbors",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence gives the strongest evidence that gardens help neighbors form connections?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 24" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: "C"
        },
        {
          id: "enthusiastic",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 14, the word enthusiastic most nearly means —",
          choices: [
            { letter: "A", text: "eager and excited" },
            { letter: "B", text: "tired and sore" },
            { letter: "C", text: "trained and skilled" },
            { letter: "D", text: "young and new" }
          ],
          correct: "A"
        },
        {
          id: "interpret",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the article states an interpretation rather than a plain fact?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: "D"
        },
        {
          id: "permission",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "warn readers that banks own most city land" },
            { letter: "B", text: "explain why getting permission comes first" },
            { letter: "C", text: "describe how a garden lease program works" },
            { letter: "D", text: "show that owners rarely visit their lots" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL · tide pools ───────────────────────── */
    {
      id: "g9-ri-c53-between-tides",
      family: "G9",
      title: "Life Between the Tides",
      kind: "Informational · 9.RI",
      blurb: "Waves, sun, salt and hungry neighbors: how tide-pool life survives the strip between land and sea.",
      level: 3,
      passage:
        "<p>" + N(1) + "Twice a day, along rocky coastlines around the world, the ocean pulls back and exposes a strip of shore that belongs fully to neither land nor sea. " +
        N(2) + "This band, called the intertidal zone, may be only a few dozen meters wide, yet it contains some of the most crowded and competitive habitats on the planet. " +
        N(3) + "The organisms that live there must survive conditions that would kill most marine animals within hours: pounding waves, baking sun, sudden rain, and long stretches with no water at all.</p>" +
        "<p>" + N(4) + "Scientists often describe the intertidal as a series of horizontal zones, each defined by how long it stays underwater. " +
        N(5) + "The highest zone, splashed only by spray and the largest waves, is home to tough survivors such as periwinkle snails and certain lichens. " +
        N(6) + "Below it, the middle zone is covered and uncovered every day; here barnacles and mussels pack the rock so tightly that newcomers must often settle on top of their neighbors. " +
        N(7) + "The lowest zone is exposed only during the most extreme low tides, and its residents, including many sea stars, urchins, and soft-bodied anemones, are the least able to tolerate air.</p>" +
        "<p>" + N(8) + "Each zone's inhabitants have developed specific strategies for coping with exposure. " +
        N(9) + "Barnacles seal themselves inside plates of shell, trapping a small pocket of seawater until the tide returns. " +
        N(10) + "Mussels clamp their shells shut and anchor themselves with tough threads strong enough to resist waves that could knock a person flat. " +
        N(11) + "Anemones pull in their tentacles and fold into compact blobs, reducing the surface through which water can evaporate. " +
        N(12) + "Tide pools, the hollows that hold water after the sea retreats, offer a partial refuge, but they bring hazards of their own. " +
        N(13) + "On a sunny afternoon a shallow pool can warm by several degrees, and as water evaporates, the salt that remains becomes increasingly concentrated.</p>" +
        "<p>" + N(14) + "For many years, researchers assumed that physical stress alone determined where each species lived. " +
        N(15) + "Later experiments complicated that picture. " +
        N(16) + "When scientists removed a predatory sea star from one section of shore and left it in place on another, mussels spread rapidly into the area without the predator, crowding out dozens of other species. " +
        N(17) + "The finding suggested that the lower edge of a species' range is often set by predators and competitors, while the upper edge is set by heat and drying.</p>" +
        "<p>" + N(18) + "Because tide pools are easy to reach, they are also easy to damage. " +
        N(19) + "A single visitor lifting a rock to look underneath may not seem harmful, but a rock left upside down exposes creatures that depend on its shade and leaves others baking on its newly sunlit underside. " +
        N(20) + "Many coastal parks now ask visitors to step only on bare rock, to touch animals with one wet finger if at all, and to return every stone exactly as they found it. " +
        N(21) + "These small habits matter because the intertidal zone, for all its toughness, recovers slowly from repeated disturbance.</p>",
      claims: [
        {
          id: "summary",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which choice best summarizes the article about the intertidal zone?",
          choices: [
            { letter: "A", text: "Tide pools are warmer than the open ocean, so most sea creatures prefer to live in them." },
            { letter: "B", text: "Shore life survives harsh conditions through adaptations, is limited by stress and predators, and needs careful visitors." },
            { letter: "C", text: "Scientists once studied tide pools closely but now believe predators matter more than any other factor." },
            { letter: "D", text: "Coastal parks have closed many tide pools because visitors keep turning rocks upside down." }
          ],
          correct: "B"
        },
        {
          id: "zones",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the author organize the second paragraph (sentences 4–7)?",
          choices: [
            { letter: "A", text: "By listing animals from the smallest to the largest" },
            { letter: "B", text: "By describing a problem and then its solution" },
            { letter: "C", text: "By comparing tide pools in two different oceans" },
            { letter: "D", text: "By moving down the shore from the highest zone to the lowest" }
          ],
          correct: "D"
        },
        {
          id: "anemone",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the article, how do anemones limit water loss when the tide is out?",
          choices: [
            { letter: "A", text: "They fold into compact shapes with their tentacles pulled in." },
            { letter: "B", text: "They seal themselves inside hard plates of shell." },
            { letter: "C", text: "They attach to rocks with strong, tough threads." },
            { letter: "D", text: "They move into the highest zone of the shore." }
          ],
          correct: "A"
        },
        {
          id: "experiment",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence offers experimental evidence that living things, not only physical conditions, shape where species live?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "C"
        },
        {
          id: "assumed",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes sentences 14 and 15 mainly to —",
          choices: [
            { letter: "A", text: "show that early researchers worked carelessly" },
            { letter: "B", text: "set up a contrast between an old belief and newer findings" },
            { letter: "C", text: "explain how the tide moves twice each day" },
            { letter: "D", text: "introduce the rules that coastal parks follow" }
          ],
          correct: "B"
        },
        {
          id: "inter",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word intertidal in sentence 2 joins the prefix inter- with the word tidal. Based on its parts and the passage, intertidal describes a place that is —",
          choices: [
            { letter: "A", text: "between the high and low tide lines" },
            { letter: "B", text: "beneath the deepest part of the ocean" },
            { letter: "C", text: "beyond the reach of any waves" },
            { letter: "D", text: "inside a pool that never drains" }
          ],
          correct: "A"
        },
        {
          id: "conclusion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which statement from the article is a conclusion scientists drew rather than an observation they recorded?",
          choices: [
            { letter: "A", text: "Mussels spread into the area without the predator." },
            { letter: "B", text: "A shallow pool can warm by several degrees." },
            { letter: "C", text: "Barnacles trap a small pocket of seawater." },
            { letter: "D", text: "The lower edge of a range is often set by predators." }
          ],
          correct: "D"
        },
        {
          id: "visitors",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author most likely ends with the paragraph about visitors (sentences 18–21) in order to —",
          choices: [
            { letter: "A", text: "argue that tide pools should be closed to the public" },
            { letter: "B", text: "describe the animals that live under rocks" },
            { letter: "C", text: "connect the science to how readers should behave" },
            { letter: "D", text: "explain why the high zone is drier than the low" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── VOCABULARY · robotics club ───────────────────────── */
    {
      id: "g9-rv-c53-qualifier-day",
      family: "G9",
      title: "Qualifier Day",
      kind: "Vocabulary · 9.RV",
      blurb: "A jammed arm, a crackling speaker and forty teams: one robotics club's long day in a crowded gym.",
      level: 1,
      passage:
        "<p>" + N(1) + "The robotics club at Harmon Valley High arrived at the qualifier gym at seven in the morning, carrying their robot in a plastic storage bin padded with beach towels. " +
        N(2) + "The robot, nicknamed Pilot, was still a <strong>prototype</strong>, an early test version the team had rebuilt three times since September. " +
        N(3) + "Team captain Nadia Haddad reminded everyone that early versions were supposed to have flaws; that was how a team learned what to fix.</p>" +
        "<p>" + N(4) + "Inside, the gym was <strong>chaotic</strong>. " +
        N(5) + "Forty teams crowded around folding tables, drills whined, someone's robot rolled loose across the floor, and an announcer read schedules over a speaker that crackled every few words. " +
        N(6) + "Wen Li, who usually loved noise, admitted that it was hard to think.</p>" +
        "<p>" + N(7) + "Before the first match, the team had to <strong>calibrate</strong> Pilot's sensors. " +
        N(8) + "Tobias Grant held a white card in front of the color sensor, then a black one, and adjusted the readings until the robot could tell the difference every time. " +
        N(9) + "It was slow work, but without it Pilot would mistake the dark tape on the field for an open path.</p>" +
        "<p>" + N(10) + "The first match went badly. " +
        N(11) + "Pilot's arm jammed halfway up, and the team scored only twelve points. " +
        N(12) + "Back at the table, Tobias wanted to give up on the arm and just drive for points. " +
        N(13) + "Ms. Okonkwo, the club's adviser, asked him a question instead: \"What changed between practice and now?\" " +
        N(14) + "That question helped the team <strong>persevere</strong>. " +
        N(15) + "Rather than abandoning the arm, they kept testing it until Wen noticed that a cable had slipped into the gears.</p>" +
        "<p>" + N(16) + "The repair required <strong>precise</strong> work. " +
        N(17) + "The cable had to be rerouted along the frame and held with two small zip ties, placed so that neither one touched a moving part. " +
        N(18) + "A fraction of an inch in either direction would bring the jam right back.</p>" +
        "<p>" + N(19) + "In the afternoon, teams were paired into alliances and had to <strong>collaborate</strong> with robots they had never seen before. " +
        N(20) + "Nadia spent ten minutes with a team from across the state, sketching a plan on the back of a schedule: their robot would play defense while Pilot scored. " +
        N(21) + "The plan worked, and the alliance won two of its three matches.</p>" +
        "<p>" + N(22) + "Harmon Valley did not finish first. " +
        N(23) + "They finished ninth out of forty, which was enough to earn a spot at the state championship. " +
        N(24) + "On the bus ride home, Wen fell asleep against the window, and Tobias wrote a list of eleven things to fix before state. " +
        N(25) + "At the top of the list, underlined twice, was \"Check the cable.\"</p>",
      claims: [
        {
          id: "prototype",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from sentence 2 best help the reader understand the meaning of prototype?",
          choices: [
            { letter: "A", text: "The robot, nicknamed Pilot" },
            { letter: "B", text: "the team had rebuilt" },
            { letter: "C", text: "an early test version" },
            { letter: "D", text: "three times since September" }
          ],
          correct: "C"
        },
        {
          id: "chaotic",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Based on sentence 5, the word chaotic in sentence 4 most nearly means —",
          choices: [
            { letter: "A", text: "noisy and disorderly" },
            { letter: "B", text: "empty and quiet" },
            { letter: "C", text: "cold and drafty" },
            { letter: "D", text: "bright and cheerful" }
          ],
          correct: "A"
        },
        {
          id: "calibrate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 7, to calibrate Pilot's sensors most nearly means to —",
          choices: [
            { letter: "A", text: "replace them with newer parts" },
            { letter: "B", text: "clean the dust from their lenses" },
            { letter: "C", text: "hide them from the other teams" },
            { letter: "D", text: "adjust them so their readings are accurate" }
          ],
          correct: "D"
        },
        {
          id: "persevere",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written continue instead of persevere in sentence 14. Compared with continue, the word persevere adds a sense of —",
          choices: [
            { letter: "A", text: "moving quickly without a plan" },
            { letter: "B", text: "keeping on in spite of difficulty" },
            { letter: "C", text: "obeying an adult's instructions" },
            { letter: "D", text: "starting over from the beginning" }
          ],
          correct: "B"
        },
        {
          id: "precise",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Sentences 17 and 18 show that precise work in sentence 16 is work that is —",
          choices: [
            { letter: "A", text: "fast and rough" },
            { letter: "B", text: "loud and messy" },
            { letter: "C", text: "exact and careful" },
            { letter: "D", text: "simple and quick" }
          ],
          correct: "C"
        },
        {
          id: "collaborate",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word collaborate in sentence 19 combines the prefix co-, meaning together, with a root meaning work. Based on its parts, collaborate means to —",
          choices: [
            { letter: "A", text: "work together toward a goal" },
            { letter: "B", text: "compete against a rival" },
            { letter: "C", text: "repair a broken machine" },
            { letter: "D", text: "travel to a new place" }
          ],
          correct: "A"
        },
        {
          id: "jam",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, what caused Pilot's arm to jam in the first match?",
          choices: [
            { letter: "A", text: "The color sensor read the dark tape wrong." },
            { letter: "B", text: "A cable had slipped into the gears." },
            { letter: "C", text: "A zip tie was touching a moving part." },
            { letter: "D", text: "The arm had been bent during the bus ride." }
          ],
          correct: "B"
        },
        {
          id: "list",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author ends the passage with sentence 25 mainly to —",
          choices: [
            { letter: "A", text: "suggest that the team will not fix the cable" },
            { letter: "B", text: "explain why Wen fell asleep on the bus" },
            { letter: "C", text: "show that Tobias did not enjoy the day" },
            { letter: "D", text: "show that the team learned from the day's trouble" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS · tutoring ───────────────────────── */
    {
      id: "g9-dsr-c53-study-partners",
      family: "G9",
      title: "Study Partners",
      kind: "Paired texts · 9.DSR",
      blurb: "A school newsletter explains a peer tutoring program; one tutor explains what the training left out.",
      level: 2,
      passage:
        "<p><strong>Text 1 — How Study Partners Works</strong></p>" +
        "<p>" + N(1) + "Linwood High's Study Partners program pairs ninth graders who want extra help with trained juniors and seniors. " +
        N(2) + "Sessions meet in the library on Mondays and Wednesdays from 3:00 to 4:00, and any student may sign up through the counseling office. " +
        N(3) + "Before tutors begin, they complete six hours of training led by a math teacher and an English teacher. " +
        N(4) + "The training covers how to ask guiding questions instead of giving answers, how to break a large assignment into smaller steps, and when to bring a problem to a teacher. " +
        N(5) + "Tutors also learn a simple routine for every session: review the last meeting, set one goal, work, and end by writing down what was learned. " +
        N(6) + "The program's results have been encouraging. " +
        N(7) + "Last year, ninth graders who attended at least twice a week for a full semester raised their average course grade by about half a letter. " +
        N(8) + "Students who came only occasionally showed smaller gains. " +
        N(9) + "Coordinators believe consistency matters more than any single session. " +
        N(10) + "\"Tutoring is like exercise,\" one coordinator explained. " +
        N(11) + "\"One visit doesn't change much, but steady visits add up.\" " +
        N(12) + "The program is now looking for more tutors, especially students who are strong in chemistry and Spanish. " +
        N(13) + "Volunteers earn service hours, and many say the experience helps them as much as it helps the students they serve.</p>" +
        "<p><strong>Text 2 — What the Script Didn't Cover</strong></p>" +
        "<p>" + N(14) + "When I signed up to be a Study Partner last fall, I thought the training had prepared me for everything. " +
        N(15) + "I had my guiding questions memorized, and I knew the four-step routine by heart. " +
        N(16) + "Then I met Dario, a ninth grader who sat down, opened his biology notebook, and announced that he was failing because he was \"just not a science person.\" " +
        N(17) + "None of my questions worked. " +
        N(18) + "Every time I asked, \"What do you think comes next?\" he shrugged. " +
        N(19) + "After two weeks, I stopped following the script so closely. " +
        N(20) + "Instead of starting with the review step, I asked Dario what he actually liked. " +
        N(21) + "He talked for ten minutes about helping his uncle fix motorcycles. " +
        N(22) + "That conversation changed our sessions. " +
        N(23) + "When we studied the cell, I compared mitochondria to an engine, and for the first time he asked me a question. " +
        N(24) + "The training was useful; I still use the routine most days. " +
        N(25) + "But the most important part of tutoring was something no checklist could include: finding out who the student is before deciding how to teach him. " +
        N(26) + "I also discovered something I had not expected. " +
        N(27) + "Explaining cells to Dario made me understand biology better than I had when I took the class myself. " +
        N(28) + "By spring, his grade had climbed from a D to a C-plus, and I had learned that teaching is really a kind of listening.</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea is supported by both Text 1 and Text 2?",
          choices: [
            { letter: "A", text: "Tutors should avoid following any set routine." },
            { letter: "B", text: "Only science students need the help of a tutor." },
            { letter: "C", text: "Tutoring can benefit the tutor as well as the student." },
            { letter: "D", text: "Most ninth graders sign up for tutoring every week." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "How does Text 2 mainly differ from Text 1 in the way it presents the program?",
          choices: [
            { letter: "A", text: "Text 2 tells one tutor's experience, while Text 1 gives an overview with results." },
            { letter: "B", text: "Text 2 lists the session times, while Text 1 describes a single student." },
            { letter: "C", text: "Text 2 argues the program should end, while Text 1 asks for more tutors." },
            { letter: "D", text: "Text 2 explains the training, while Text 1 explains why students fail." }
          ],
          correct: "A"
        },
        {
          id: "qualify",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which sentence from Text 1 does the writer of Text 2 most directly qualify with her own experience?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "guiding",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which sentence from Text 2 shows the writer using a technique that Text 1 says tutors are trained to use?",
          choices: [
            { letter: "A", text: "Sentence 16" },
            { letter: "B", text: "Sentence 18" },
            { letter: "C", text: "Sentence 21" },
            { letter: "D", text: "Sentence 28" }
          ],
          correct: "B"
        },
        {
          id: "gains",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to Text 1, which students showed the greatest improvement last year?",
          choices: [
            { letter: "A", text: "Students who came to a few sessions near exam time" },
            { letter: "B", text: "Students who attended at least twice a week all semester" },
            { letter: "C", text: "Students who were tutored in chemistry and Spanish" },
            { letter: "D", text: "Students who signed up through a teacher instead of a counselor" }
          ],
          correct: "B"
        },
        {
          id: "exercise",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The coordinator's comparison of tutoring to exercise in sentences 10 and 11 mainly helps readers understand that —",
          choices: [
            { letter: "A", text: "tutoring sessions include physical activity" },
            { letter: "B", text: "students should rest between tutoring visits" },
            { letter: "C", text: "a single long session works best" },
            { letter: "D", text: "regular attendance builds results over time" }
          ],
          correct: "D"
        },
        {
          id: "purpose2",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "The main purpose of Text 2 is to —",
          choices: [
            { letter: "A", text: "reflect on what tutoring requires beyond the formal training" },
            { letter: "B", text: "persuade the school to stop training its student tutors" },
            { letter: "C", text: "explain the parts of the cell to younger biology students" },
            { letter: "D", text: "report the grades of every student in the program" }
          ],
          correct: "A"
        },
        {
          id: "combine",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader using both texts could best conclude that a successful tutoring session depends on —",
          choices: [
            { letter: "A", text: "the tutor having taken the same class recently" },
            { letter: "B", text: "meeting in the library instead of a classroom" },
            { letter: "C", text: "a clear routine and attention to the individual student" },
            { letter: "D", text: "the student choosing which subject to study each day" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS · community gardens ───────────────────────── */
    {
      id: "g9-dsr-c53-marigold-plots",
      family: "G9",
      title: "One Field or Many Plots?",
      kind: "Paired texts · 9.DSR",
      blurb: "Two members of the Marigold Street Garden argue over whether to divide their shared field.",
      level: 3,
      passage:
        "<p><strong>Text 1 — A Letter to the Marigold Street Garden Board, by Halima Yusuf</strong></p>" +
        "<p>" + N(1) + "For three seasons, the Marigold Street Garden has been run as one shared field, with every member planting, weeding, and harvesting together. " +
        N(2) + "I appreciate the spirit behind this arrangement, but I believe it is time to divide the garden into individual plots. " +
        N(3) + "Under the current system, responsibility is spread so thin that it often disappears. " +
        N(4) + "Last July, the squash bed went unwatered for nine days because each volunteer assumed someone else had taken care of it. " +
        N(5) + "When everyone owns a crop, no one quite does. " +
        N(6) + "Individual plots would also let families grow what they actually cook. " +
        N(7) + "My neighbors from Nigeria want bitter leaf and garden eggs; my neighbor from Puerto Rico wants culantro and sweet ají peppers. " +
        N(8) + "In a shared field, the board's planting list favors vegetables that everyone already knows, and these other crops rarely make the cut. " +
        N(9) + "Finally, a gardener with her own plot can experiment and learn from her mistakes without worrying that a failed row will disappoint thirty other people. " +
        N(10) + "Some members worry that plots will make the garden less friendly. " +
        N(11) + "I disagree. " +
        N(12) + "Neighbors will still trade advice across the paths, share tools, and swap extra tomatoes. " +
        N(13) + "Ownership does not end community; it gives each person something to bring to it. " +
        N(14) + "I ask the board to vote on dividing the garden before the spring planting season.</p>" +
        "<p><strong>Text 2 — Why We Garden Together, by Ignacio Ferreira, a founding member</strong></p>" +
        "<p>" + N(15) + "When we founded the Marigold Street Garden, we chose a shared field on purpose. " +
        N(16) + "Many of our members are elderly, work long shifts, or travel to see family for weeks at a time. " +
        N(17) + "An individual plot punishes anyone whose life gets busy; a weedy plot is a weedy plot, and its owner carries the embarrassment alone. " +
        N(18) + "In a shared field, the work flows to whoever has time that week, and the harvest still reaches everyone. " +
        N(19) + "Shared growing also makes the garden more productive. " +
        N(20) + "One large bed of beans uses space far more efficiently than thirty small rows with paths between them, and a single watering schedule wastes less water than thirty separate ones. " +
        N(21) + "Last year the field produced more than two thousand pounds of food, much of which went to the food pantry on Cobb Avenue. " +
        N(22) + "I will admit that the system has weaknesses. " +
        N(23) + "The missed watering last summer was real, and it was a failure of organization. " +
        N(24) + "The solution, though, is a clearer schedule, not a fence around every square of soil. " +
        N(25) + "A sign-up board by the gate listing each week's tasks would fix the problem without breaking the garden apart. " +
        N(26) + "We should also invite members to propose crops each winter, so that the planting list reflects everyone's kitchen. " +
        N(27) + "A shared garden is not merely a place where vegetables grow; it is a promise that no one tends it alone.</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "On which point do Yusuf and Ferreira agree?",
          choices: [
            { letter: "A", text: "The garden should be divided before spring." },
            { letter: "B", text: "The missed watering last summer was a real problem." },
            { letter: "C", text: "Individual plots would produce more food overall." },
            { letter: "D", text: "The food pantry should receive less of the harvest." }
          ],
          correct: "B"
        },
        {
          id: "disagree",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The two writers disagree most directly about whether —",
          choices: [
            { letter: "A", text: "the garden should grow any vegetables at all" },
            { letter: "B", text: "elderly members should be allowed to join" },
            { letter: "C", text: "the garden board should meet in the winter" },
            { letter: "D", text: "individual plots would serve members better than one field" }
          ],
          correct: "D"
        },
        {
          id: "respond",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "How does Text 2 respond to the problem described in sentence 4 of Text 1?",
          choices: [
            { letter: "A", text: "It admits the failure but proposes a task schedule instead of plots." },
            { letter: "B", text: "It denies that the squash bed ever went without water." },
            { letter: "C", text: "It blames the members who were traveling that month." },
            { letter: "D", text: "It agrees that dividing the field is the only real fix." }
          ],
          correct: "A"
        },
        {
          id: "crops",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Ferreira's suggestion in sentence 26 most directly answers which concern raised in Text 1?",
          choices: [
            { letter: "A", text: "Gardeners cannot experiment without disappointing others." },
            { letter: "B", text: "Plots might make the garden feel less friendly." },
            { letter: "C", text: "The planting list leaves out crops some families cook." },
            { letter: "D", text: "Volunteers assume someone else has done the watering." }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence from Text 2 gives the strongest evidence that shared growing is productive?",
          choices: [
            { letter: "A", text: "Sentence 15" },
            { letter: "B", text: "Sentence 18" },
            { letter: "C", text: "Sentence 22" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "D"
        },
        {
          id: "generalize",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "In Text 1, the statement in sentence 5 is best described as —",
          choices: [
            { letter: "A", text: "a measurement taken by the garden board" },
            { letter: "B", text: "a general claim drawn from the example in sentence 4" },
            { letter: "C", text: "a rule printed on the garden's sign-up sheet" },
            { letter: "D", text: "a quotation from a member who disagrees with Yusuf" }
          ],
          correct: "B"
        },
        {
          id: "fence",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 24, the phrase a fence around every square of soil is a figurative way of describing —",
          choices: [
            { letter: "A", text: "dividing the garden into individual plots" },
            { letter: "B", text: "protecting the beans from animals" },
            { letter: "C", text: "closing the garden for the winter" },
            { letter: "D", text: "building a sign-up board by the gate" }
          ],
          correct: "A"
        },
        {
          id: "opposing",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which statement best describes how both writers handle opposing views?",
          choices: [
            { letter: "A", text: "Both ignore the other side and repeat their own claims." },
            { letter: "B", text: "Both attack the character of members who disagree." },
            { letter: "C", text: "Both acknowledge an objection and then answer it." },
            { letter: "D", text: "Both change their minds by the end of the text." }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── POETRY · tide pools ───────────────────────── */
    {
      id: "g9-rl-c53-low-tide-inventory",
      family: "G9",
      title: "Low Tide Inventory",
      kind: "Poetry · 9.RL",
      blurb: "A speaker kneels by a tide pool to count what lives there and learns how the pool keeps time.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The sea goes out the way my mother leaves a room,<br>" +
        L(2) + "not gone, just elsewhere, humming down the hall.<br>" +
        L(3) + "What stays behind is a bowl of borrowed water<br>" +
        L(4) + "cupped in the black hand of the rock.<br>" +
        L(5) + "I kneel. I am the weather here,<br>" +
        L(6) + "my shadow passing like a cloud<br>" +
        L(7) + "that makes the anemones shut their green doors.<br>" +
        L(8) + "A hermit crab tries on a stranger's house,<br>" +
        L(9) + "decides it fits, and drags it off.<br>" +
        L(10) + "The mussels keep their mouths closed tight,<br>" +
        L(11) + "holding a little ocean in, like a secret<br>" +
        L(12) + "they have promised to keep till noon.<br>" +
        L(13) + "Nothing here is in a hurry.<br>" +
        L(14) + "The limpet has been walking toward the same crack<br>" +
        L(15) + "since before I learned to read.<br>" +
        L(16) + "The sea star, orange as a warning sign,<br>" +
        L(17) + "grips the stone with a thousand tiny feet<br>" +
        L(18) + "and does not ask the tide when it will come back.<br>" +
        L(19) + "I came to count them, clipboard in my lap,<br>" +
        L(20) + "a pencil ready for my small arithmetic,<br>" +
        L(21) + "but the pool keeps its own kind of record:<br>" +
        L(22) + "one crab, one star, one minnow made of light,<br>" +
        L(23) + "and all of them, all morning, simply waiting.<br>" +
        L(24) + "Behind me I can hear the water turning.<br>" +
        L(25) + "It is coming back the way it always does,<br>" +
        L(26) + "to fill the bowl, to open every door.</p>",
      claims: [
        {
          id: "mother",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The comparison in lines 1 and 2 mainly suggests that the sea —",
          choices: [
            { letter: "A", text: "has only stepped away and will return" },
            { letter: "B", text: "is angry at the speaker for visiting" },
            { letter: "C", text: "has left the shore for the whole season" },
            { letter: "D", text: "makes a loud noise as it goes out" }
          ],
          correct: "A"
        },
        {
          id: "weather",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In lines 5–7, the speaker says I am the weather here mainly to show that —",
          choices: [
            { letter: "A", text: "a storm is beginning to form over the water" },
            { letter: "B", text: "the speaker feels cold kneeling on the rock" },
            { letter: "C", text: "the speaker's presence changes the pool like weather" },
            { letter: "D", text: "the anemones are hiding from the rain" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem Low Tide Inventory?",
          choices: [
            { letter: "A", text: "People should never disturb wild animals." },
            { letter: "B", text: "Counting things is the best way to understand them." },
            { letter: "C", text: "The ocean is too dangerous to visit alone." },
            { letter: "D", text: "Patient waiting can be a quiet kind of strength." }
          ],
          correct: "D"
        },
        {
          id: "speaker",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The poem Low Tide Inventory is told from the point of view of —",
          choices: [
            { letter: "A", text: "the sea star clinging to the stone" },
            { letter: "B", text: "a person kneeling beside a tide pool" },
            { letter: "C", text: "a mother humming in another room" },
            { letter: "D", text: "the hermit crab searching for a shell" }
          ],
          correct: "B"
        },
        {
          id: "limpet",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "Lines 14 and 15 suggest that the limpet —",
          choices: [
            { letter: "A", text: "has lost its way among the rocks" },
            { letter: "B", text: "is racing the tide to reach shelter" },
            { letter: "C", text: "learned to move by watching the speaker" },
            { letter: "D", text: "moves so slowly that its journey takes years" }
          ],
          correct: "D"
        },
        {
          id: "arithmetic",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In line 20, the speaker calls the counting my small arithmetic mainly to suggest that —",
          choices: [
            { letter: "A", text: "the speaker's record seems modest beside the pool's life" },
            { letter: "B", text: "the speaker is not very good at math" },
            { letter: "C", text: "there are too few animals to bother counting" },
            { letter: "D", text: "the clipboard is too small to hold the numbers" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "How does the ending of the poem (lines 24–26) differ from its beginning (lines 1–4)?",
          choices: [
            { letter: "A", text: "The beginning is set at night, and the ending at noon." },
            { letter: "B", text: "The beginning is hopeful, and the ending is fearful." },
            { letter: "C", text: "The beginning shows the sea leaving, and the ending its return." },
            { letter: "D", text: "The beginning names many animals, and the ending names none." }
          ],
          correct: "C"
        },
        {
          id: "waiting",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The poet could have written staying instead of waiting in line 23. Compared with staying, the word waiting suggests —",
          choices: [
            { letter: "A", text: "that the animals are bored and restless" },
            { letter: "B", text: "an expectation that something will arrive" },
            { letter: "C", text: "that the animals are hiding from danger" },
            { letter: "D", text: "a refusal to move ever again" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── DRAMA · community gardens ───────────────────────── */
    {
      id: "g9-rl-c53-compost-line",
      family: "G9",
      title: "The Compost Line",
      kind: "Drama · 9.RL",
      blurb: "Noor wants to build a compost bin by the fence. Her neighbor has opinions, and a history.",
      level: 3,
      passage:
        "<p><em>Setting: the Juniper Avenue Community Garden on a Saturday morning in April. A low chain-link fence separates the lot from a tidy back yard full of rosebushes. Three wooden pallets lean against the fence. NOOR, fifteen, is measuring the ground with a tape. MR. ABERNATHY, in his seventies, appears on the other side of the fence holding pruning shears.</em></p>" +
        "<p>" + N(1) + "<strong>ABERNATHY</strong>: You're measuring awfully close to my roses. " +
        N(2) + "<strong>NOOR</strong> <em>(standing, polite)</em>: Good morning, Mr. Abernathy. We're building a compost bin. The pallets go right here, against the fence. " +
        N(3) + "<strong>ABERNATHY</strong>: A compost bin. A pile of rotting garbage, six feet from my kitchen window. " +
        N(4) + "<strong>NOOR</strong> <em>(aside, to the audience)</em>: Ms. Ruiz warned me he would say garbage. She also said I should smile. I am smiling. It is not helping. " +
        N(5) + "<strong>NOOR</strong>: It won't smell if we keep it balanced, half green scraps and half dry leaves, and turn it every week. " +
        N(6) + "<strong>ABERNATHY</strong> <em>(snorting)</em>: If. Every bad idea I've heard in fifty years has had an if in the middle of it. " +
        N(7) + "<strong>NOOR</strong>: Then where would you put it? " +
        N(8) + "<strong>ABERNATHY</strong> <em>(pausing, then pointing the shears toward the far corner of the lot)</em>: Over by the maple. Gets afternoon shade, so it won't dry out. Drains downhill, away from the beds. And a truck can back right up to it when you need more leaves. " +
        N(9) + "<strong>NOOR</strong> <em>(slowly lowering the tape)</em>: That's actually better than here. How do you know where the water drains? " +
        N(10) + "<strong>ABERNATHY</strong> <em>(looking at the lot for a long moment)</em>: Because I dug the ditch. This lot was a garden before it was a parking lot, and it was a parking lot before you were born. " +
        N(11) + "<strong>NOOR</strong>: You gardened here? " +
        N(12) + "<strong>ABERNATHY</strong>: My wife and I and about a dozen families. Pole beans along this fence. Collards by the maple. <em>(He gestures with the shears, as if the rows are still there.)</em> Then the owner sold it, they poured the asphalt, and that was that. " +
        N(13) + "<strong>NOOR</strong> <em>(aside)</em>: Nobody on the committee knows this. Nobody even asked him. We sent him a letter about noise during construction hours. " +
        N(14) + "<strong>NOOR</strong>: Mr. Abernathy, we're having a planning meeting Thursday night. Honestly, we don't really know what we're doing. Most of us have never grown anything bigger than a basil plant. " +
        N(15) + "<strong>ABERNATHY</strong> <em>(gruffly, but he sets the shears down on a fence post)</em>: I don't go to meetings. " +
        N(16) + "<strong>NOOR</strong>: Then could the meeting come here? Ten minutes, by the fence. You could show us where the beans used to go. " +
        N(17) + "<strong>ABERNATHY</strong> <em>(after a pause)</em>: Pole beans need a trellis. Tell your committee to bring string. <em>(He turns toward the house, then stops.)</em> And put the compost by the maple. " +
        N(18) + "<strong>NOOR</strong> <em>(calling after him, grinning)</em>: Yes, sir.</p>" +
        "<p><em>She picks up the tape measure and walks toward the far corner of the lot.</em></p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Noor's aside in sentence 4 mainly reveals that she —",
          choices: [
            { letter: "A", text: "plans to give up on the compost bin" },
            { letter: "B", text: "is trying to stay polite despite her frustration" },
            { letter: "C", text: "agrees that compost is a kind of garbage" },
            { letter: "D", text: "wants the audience to dislike Ms. Ruiz" }
          ],
          correct: "B"
        },
        {
          id: "aside2",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Noor's aside in sentence 13 mainly helps the audience understand that —",
          choices: [
            { letter: "A", text: "the committee has already finished its planning" },
            { letter: "B", text: "Noor wrote the letter about construction noise" },
            { letter: "C", text: "Mr. Abernathy refuses to read his mail" },
            { letter: "D", text: "the committee overlooked a neighbor with useful knowledge" }
          ],
          correct: "D"
        },
        {
          id: "gesture",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction in sentence 12, in which Abernathy gestures as if the rows are still there, mainly reveals that he —",
          choices: [
            { letter: "A", text: "still pictures the old garden clearly" },
            { letter: "B", text: "wants Noor to leave his property" },
            { letter: "C", text: "is pointing out where his roses grow" },
            { letter: "D", text: "has trouble seeing across the lot" }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which statement best describes how Mr. Abernathy changes during the scene?",
          choices: [
            { letter: "A", text: "He moves from friendly interest to open anger." },
            { letter: "B", text: "He moves from silence to telling a long joke." },
            { letter: "C", text: "He moves from objecting to offering his advice." },
            { letter: "D", text: "He moves from helping to leaving the garden for good." }
          ],
          correct: "C"
        },
        {
          id: "shears",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "In sentence 15, the stage direction that Abernathy sets the shears down even as he refuses suggests that —",
          choices: [
            { letter: "A", text: "his resistance is softening despite his words" },
            { letter: "B", text: "he has finished pruning his roses for the day" },
            { letter: "C", text: "he is preparing to climb over the fence" },
            { letter: "D", text: "he is too tired to keep arguing with Noor" }
          ],
          correct: "A"
        },
        {
          id: "if",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "In sentence 6, Abernathy's remark about the word if mainly shows that he —",
          choices: [
            { letter: "A", text: "has never heard of composting before" },
            { letter: "B", text: "is confused by Noor's instructions" },
            { letter: "C", text: "believes Noor is not telling the truth" },
            { letter: "D", text: "distrusts plans that depend on perfect care" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the scene at the Juniper Avenue garden best develop?",
          choices: [
            { letter: "A", text: "Young people should follow their elders without question." },
            { letter: "B", text: "Listening to a difficult person can uncover useful knowledge." },
            { letter: "C", text: "Old neighborhoods should never be changed or rebuilt." },
            { letter: "D", text: "Committees usually make better decisions than individuals." }
          ],
          correct: "B"
        },
        {
          id: "gruffly",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In the stage direction in sentence 15, the word gruffly most nearly means —",
          choices: [
            { letter: "A", text: "in a cheerful, joking way" },
            { letter: "B", text: "in a soft, nervous whisper" },
            { letter: "C", text: "in a rough, unfriendly-sounding way" },
            { letter: "D", text: "in a slow, confused voice" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL TEXT · robotics club ───────────────────────── */
    {
      id: "g9-ri-c53-workshop-handbook",
      family: "G9",
      title: "Robotics Club Handbook",
      kind: "Functional text · 9.RI",
      blurb: "Workshop hours, safety rules, team roles and a competition checklist from one club's handbook.",
      level: 1,
      passage:
        "<p><strong>Eastfield High Robotics Club: Member Handbook, Page 3</strong></p>" +
        "<p><strong>Workshop Hours.</strong> " + N(1) + "The workshop in Room 114 is open Tuesdays and Thursdays from 3:15 to 5:30 p.m. and Saturdays from 9:00 a.m. to noon during build season, November through February. " +
        N(2) + "Members may use the room only when the faculty adviser, Mr. Castellanos, or another approved adult is present. " +
        N(3) + "Students who need extra time before a competition must request it by email at least two days in advance, and the request must name the adult who has agreed to supervise.</p>" +
        "<p><strong>Safety Rules.</strong> " + N(4) + "Everyone in the workshop must wear safety glasses whenever any tool is running, even if you are not the person using it. " +
        N(5) + "Long hair must be tied back, and loose sleeves, scarves, and dangling jewelry are not allowed near the drill press or band saw. " +
        N(6) + "Power tools may be operated only by members who have passed the club's tool certification, a twenty-minute hands-on test given by the adviser. " +
        N(7) + "Batteries must be charged on the metal shelf by the window, never on a wooden table, and a charging battery should never be left alone in the room. " +
        N(8) + "Any injury, no matter how small, must be reported to the adviser before the end of the meeting so that it can be recorded in the club's safety log.</p>" +
        "<p><strong>Team Roles.</strong> " + N(9) + "Each member chooses one primary role at the start of the season: builder, programmer, driver, scout, or outreach. " +
        N(10) + "Members may switch roles once, in December, after discussing the change with the team captains, who will update the team roster that same week. " +
        N(11) + "Drivers are chosen by tryout in January, and only members who have attended at least 75 percent of build meetings are eligible to try out.</p>" +
        "<p><strong>Competition Day Checklist.</strong> " + N(12) + "Before leaving for any event, the team must confirm the following: the robot passes a full systems check; at least three fully charged batteries are packed; the engineering notebook is up to date and signed by the adviser; and every traveling member has turned in a signed permission form. " +
        N(13) + "Members without a permission form on file cannot travel with the team, and no exceptions are made on the day of the event. " +
        N(14) + "Wear the club T-shirt and closed-toe shoes, because the pit area at most events does not allow sandals.</p>" +
        "<p><strong>Questions?</strong> " + N(15) + "Contact a team captain or email Mr. Castellanos, who answers messages within one school day. " +
        N(16) + "Remember that a safe team is a fast team, because a builder with an injured hand cannot build anything.</p>",
      claims: [
        {
          id: "tools",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the handbook, who may operate the club's power tools?",
          choices: [
            { letter: "A", text: "Any member who is wearing safety glasses" },
            { letter: "B", text: "Only the team captains and the adviser" },
            { letter: "C", text: "Members who passed the tool certification" },
            { letter: "D", text: "Members who chose the builder role" }
          ],
          correct: "C"
        },
        {
          id: "battery",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which rule in the handbook most directly guards against a fire starting from a charging battery?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "A"
        },
        {
          id: "sections",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the handbook page mainly organized?",
          choices: [
            { letter: "A", text: "As a story about one club meeting" },
            { letter: "B", text: "As a comparison of two different clubs" },
            { letter: "C", text: "As a list of events in time order" },
            { letter: "D", text: "As labeled sections grouped by topic" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "The main purpose of the Eastfield handbook page is to —",
          choices: [
            { letter: "A", text: "persuade students to join the robotics club" },
            { letter: "B", text: "explain the club's rules and expectations" },
            { letter: "C", text: "describe how a robot's sensors work" },
            { letter: "D", text: "report the results of a recent competition" }
          ],
          correct: "B"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the handbook is closest to an opinion rather than a rule or procedure?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "D"
        },
        {
          id: "eligible",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 11, the word eligible most nearly means —",
          choices: [
            { letter: "A", text: "allowed because a requirement is met" },
            { letter: "B", text: "required by the adviser to attend" },
            { letter: "C", text: "talented enough to win easily" },
            { letter: "D", text: "nervous about being chosen" }
          ],
          correct: "A"
        },
        {
          id: "apply",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "A member who has attended 60 percent of build meetings hopes to become a driver. Based on the handbook, what will most likely happen?",
          choices: [
            { letter: "A", text: "She may try out if a captain approves it." },
            { letter: "B", text: "She may switch roles to driver in December." },
            { letter: "C", text: "She will not be able to try out for driver." },
            { letter: "D", text: "She will be chosen as driver automatically." }
          ],
          correct: "C"
        },
        {
          id: "exceptions",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The handbook states in sentence 13 that no exceptions are made on the day of the event mainly to —",
          choices: [
            { letter: "A", text: "explain where permission forms can be found" },
            { letter: "B", text: "stress that the permission-form rule is strict" },
            { letter: "C", text: "show that the adviser dislikes competitions" },
            { letter: "D", text: "remind members to charge three batteries" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── ARGUMENT · tutoring ───────────────────────── */
    {
      id: "g9-ri-c53-lunch-tutoring",
      family: "G9",
      title: "Open the Center at Lunch",
      kind: "Argument · 9.RI",
      blurb: "A student columnist argues that the tutoring center should not close its doors to bus riders.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every afternoon at 2:45, the Tutoring Center at Brookhaven High opens its doors, and every afternoon most of the students who need it are already on the bus. " +
        N(2) + "The center is one of the best resources our school offers. " +
        N(3) + "Its tutors are well trained, its tables are quiet, and students who attend regularly say it helps. " +
        N(4) + "But because it is open only after school, it serves only the students who can stay after school. " +
        N(5) + "Brookhaven should open the Tutoring Center during lunch as well.</p>" +
        "<p>" + N(6) + "Consider who leaves at 2:45. " +
        N(7) + "About 60 percent of our students ride a bus, and the late bus runs only on Tuesdays. " +
        N(8) + "Many students work part-time jobs or care for younger brothers and sisters in the afternoon, and others have sports practices or appointments that cannot be moved. " +
        N(9) + "Last spring, the student council surveyed 300 students, and 41 percent said they had wanted help from the center but could not stay after school to get it. " +
        N(10) + "These are not students who don't care about their grades. " +
        N(11) + "They are students whose afternoons belong to someone else.</p>" +
        "<p>" + N(12) + "A lunch session would reach them. " +
        N(13) + "Every student already has a thirty-minute lunch period, and the library sits right next to the cafeteria, so students could finish eating and walk there in under a minute. " +
        N(14) + "Even fifteen minutes of focused help on a single math problem or essay paragraph can make the difference between giving up and finishing an assignment that night.</p>" +
        "<p>" + N(15) + "Some people argue that lunch is a time to rest, and that students should not have to give it up for schoolwork. " +
        N(16) + "They are right that rest matters. " +
        N(17) + "But a lunch session would be a choice, not a requirement. " +
        N(18) + "No one would be forced to attend; students who want a break would still have one. " +
        N(19) + "Others worry that there are not enough tutors. " +
        N(20) + "However, many of the current tutors are seniors with open lunch periods, and several have already said they would volunteer for a lunch shift once or twice a week.</p>" +
        "<p>" + N(21) + "Opening the center at lunch would not cost the school any money. " +
        N(22) + "It would use a room that already exists, tutors who are already trained, and time that students already have. " +
        N(23) + "What it would change is who gets help. " +
        N(24) + "Right now, the center helps the students whose schedules allow it. " +
        N(25) + "With a lunch session, it could help the students who need it. " +
        N(26) + "I urge the principal and the school board to try a lunch session for one semester and measure the results.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence best states the writer's central claim about the Tutoring Center?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "B"
        },
        {
          id: "survey",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence gives the strongest evidence that many students cannot use the center at its current hours?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "In sentences 15–20, the writer mainly —",
          choices: [
            { letter: "A", text: "responds to objections that others might raise" },
            { letter: "B", text: "describes how the center trains its tutors" },
            { letter: "C", text: "lists the results of the student council survey" },
            { letter: "D", text: "explains why the late bus runs only on Tuesdays" }
          ],
          correct: "A"
        },
        {
          id: "cost",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the writer, why would a lunch session cost the school nothing?",
          choices: [
            { letter: "A", text: "Parents would pay for the extra hours." },
            { letter: "B", text: "The student council would raise the money." },
            { letter: "C", text: "It would use a room, tutors and time that already exist." },
            { letter: "D", text: "The after-school session would be canceled." }
          ],
          correct: "C"
        },
        {
          id: "notcare",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The writer includes sentences 10 and 11 mainly to —",
          choices: [
            { letter: "A", text: "blame students for not using the center" },
            { letter: "B", text: "show that most students prefer to study alone" },
            { letter: "C", text: "challenge the idea that these students do not care" },
            { letter: "D", text: "explain how the survey questions were written" }
          ],
          correct: "C"
        },
        {
          id: "belong",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 11, saying that some students' afternoons belong to someone else means that these afternoons —",
          choices: [
            { letter: "A", text: "are filled with duties to jobs or family" },
            { letter: "B", text: "are spent at a friend's house instead" },
            { letter: "C", text: "were given to the school by the principal" },
            { letter: "D", text: "are wasted on activities that do not matter" }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which statement from the column is an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "The library sits right next to the cafeteria." },
            { letter: "B", text: "The late bus runs only on Tuesdays." },
            { letter: "C", text: "Every student has a thirty-minute lunch period." },
            { letter: "D", text: "The center is one of the best resources our school offers." }
          ],
          correct: "D"
        },
        {
          id: "regularly",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 3, the word regularly most nearly means —",
          choices: [
            { letter: "A", text: "only when a test is coming" },
            { letter: "B", text: "on a steady, repeated schedule" },
            { letter: "C", text: "in a normal, ordinary mood" },
            { letter: "D", text: "without permission from a teacher" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
