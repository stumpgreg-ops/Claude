/* SOL Labyrinth — Grade 10 mid-tier expansion packs (v5.15, nights 51-64): a weather balloon launch, a toy maker,
 * a newspaper archive and a farmers market. 17 packs x 7 questions. Original text only.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 · LITERARY · toy maker */
    {
      id: "g10-rl-c73-pilar-giraffe",
      family: "G10",
      title: "Nothing Else",
      kind: "Literary · 10.RL",
      blurb: "Rafael is told to fix only the broken leg of a child's wooden giraffe. He decides to do a little more.",
      level: 2,
      passage:
        "<p>" + N(1) + "The workshop of Adaeze Nwosu smelled of cedar shavings and linseed oil, and every shelf held something half-finished: a giraffe without its spots, a train missing two wheels, a row of wooden ducks waiting for their beaks. " +
        N(2) + "Rafael had swept there after school for three months before Ms. Nwosu let him hold a carving knife. " +
        N(3) + "He wanted to prove he was ready for more.</p>" +
        "<p>" + N(4) + "On Wednesday a girl named Pilar came in carrying a pull-along giraffe wrapped in a dish towel. " +
        N(5) + "One leg had snapped at the joint, and the paint on its neck was chipped in a ragged ring. " +
        N(6) + "\"Can you make it work again?\" she asked, and she set it on the counter as gently as if it were asleep.</p>" +
        "<p>" + N(7) + "Ms. Nwosu turned the toy over twice and handed it to Rafael. " +
        N(8) + "\"Fix the leg,\" she said. " +
        N(9) + "\"Nothing else.\"</p>" +
        "<p>" + N(10) + "Rafael glued and pinned the joint in under an hour, but the chipped neck bothered him. " +
        N(11) + "It looked shabby beside the clean leg, like a scuffed shoe under a new suit. " +
        N(12) + "While Ms. Nwosu was in the back room, he sanded the ring smooth and brushed on a fresh coat of yellow. " +
        N(13) + "The giraffe gleamed. " +
        N(14) + "He set it in the window to dry, sure that Pilar would be thrilled.</p>" +
        "<p>" + N(15) + "She was not. " +
        N(16) + "When she saw the neck, her face folded up, and she ran a finger along the new paint as though searching for something she had dropped. " +
        N(17) + "\"That's where my brother used to chew it when he was a baby,\" she said quietly. " +
        N(18) + "\"Those were his marks.\"</p>" +
        "<p>" + N(19) + "Rafael opened his mouth and found he had nothing to put in it. " +
        N(20) + "Ms. Nwosu came out, looked at the giraffe, and then looked at him for a long moment without speaking. " +
        N(21) + "Later, after Pilar had gone home with her toy, Ms. Nwosu set a jar of tiny brushes on his bench. " +
        N(22) + "\"Tomorrow you'll learn how to match old paint,\" she said. " +
        N(23) + "\"Tonight, think about why I said nothing else.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Pilar's wooden giraffe?",
          choices: [
            { letter: "A", text: "Hard work is always rewarded by grateful customers." },
            { letter: "B", text: "An object's worth can lie in the marks of its history." },
            { letter: "C", text: "Young workers should not be trusted with sharp tools." },
            { letter: "D", text: "Bright new paint makes an old toy more valuable." }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the moment Rafael learns why the chipped paint mattered to Pilar?",
          choices: [
            { letter: "A", text: "Sentence 10, when he finishes the leg in under an hour" },
            { letter: "B", text: "Sentence 13, when the repainted giraffe gleams" },
            { letter: "C", text: "Sentence 17, when Pilar explains her brother's marks" },
            { letter: "D", text: "Sentence 21, when Ms. Nwosu sets out tiny brushes" }
          ],
          correct: "C"
        },
        {
          id: "char",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Rafael's decision in sentence 12 shows that he —",
          choices: [
            { letter: "A", text: "trusts his own taste more than his teacher's instruction" },
            { letter: "B", text: "wants to hide a mistake he made while fixing the leg" },
            { letter: "C", text: "hopes Ms. Nwosu will pay him extra for the painting" },
            { letter: "D", text: "knows that Pilar asked to have the neck repainted" }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 11, comparing the chipped neck to a scuffed shoe under a new suit suggests that Rafael sees the chips as —",
          choices: [
            { letter: "A", text: "proof that the giraffe was once very expensive" },
            { letter: "B", text: "a sign that Pilar treats her toys carelessly" },
            { letter: "C", text: "a pattern meant to match the giraffe's spots" },
            { letter: "D", text: "a flaw that spoils the look of the finished repair" }
          ],
          correct: "D"
        },
        {
          id: "craft",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "Ms. Nwosu's two short sentences of instruction (sentences 8 and 9) mainly serve to —",
          choices: [
            { letter: "A", text: "set up the limit that Rafael later oversteps" },
            { letter: "B", text: "show that she is too busy to explain the job" },
            { letter: "C", text: "reveal that she doubts he can repair the leg" },
            { letter: "D", text: "explain why the shelves hold unfinished toys" }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 5, the word ragged most nearly means —",
          choices: [
            { letter: "A", text: "faded and pale" },
            { letter: "B", text: "narrow and neat" },
            { letter: "C", text: "fresh and bright" },
            { letter: "D", text: "rough and uneven" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of Ms. Nwosu's final words to Rafael in sentences 22 and 23 is best described as —",
          choices: [
            { letter: "A", text: "angry and dismissive" },
            { letter: "B", text: "amused and careless" },
            { letter: "C", text: "firm but instructive" },
            { letter: "D", text: "nervous and apologetic" }
          ],
          correct: "C"
        }
      ]
    },
    /* 2 · LITERARY · weather balloon launch */
    {
      id: "g10-rl-c73-bayview-launch",
      family: "G10",
      title: "Five Minutes of Wind",
      kind: "Literary · 10.RL",
      blurb: "The Bayview High weather club has one chance to launch its balloon before the wind picks up.",
      level: 1,
      passage:
        "<p>" + N(1) + "At 6:45 on a Saturday morning, the Bayview High weather club stood on the empty football field with a balloon the size of a minivan swaying above them. " +
        N(2) + "Under it hung a foam box holding a camera, a GPS tracker, and a temperature sensor that the club had spent all winter wiring together. " +
        N(3) + "Ms. Haddad, their adviser, checked her phone and frowned. " +
        N(4) + "The wind was rising faster than the forecast had promised.</p>" +
        "<p>" + N(5) + "\"We launch in five minutes or we don't launch at all,\" she said.</p>" +
        "<p>" + N(6) + "Tomasz, the club president, began shouting directions. " +
        N(7) + "Two students held the balloon's neck while two others steadied the box, and everyone talked at once. " +
        N(8) + "Amara, who rarely spoke at meetings, stood a little apart and watched the cord that connected the balloon to the parachute and the box. " +
        N(9) + "Something about it looked wrong.</p>" +
        "<p>" + N(10) + "\"Wait,\" she said, but nobody heard her. " +
        N(11) + "She said it again, louder this time, and the field went still. " +
        N(12) + "She pointed. " +
        N(13) + "The cord had looped around itself in a tight knot just below the parachute. " +
        N(14) + "If the balloon burst high in the sky, the parachute would never open, and the box would fall like a stone.</p>" +
        "<p>" + N(15) + "Tomasz stared at the knot, then at Amara. " +
        N(16) + "\"Can you fix it?\" " +
        N(17) + "Her fingers were cold, but she worked the loop free in less than a minute while the balloon tugged at the students' hands like an impatient dog on a leash.</p>" +
        "<p>" + N(18) + "At 6:52 they let go. " +
        N(19) + "The balloon shot upward, shrinking from a minivan to a beach ball to a white dot, and then it was gone. " +
        N(20) + "Three hours later, the tracker led them to a soybean field forty miles east, where the foam box lay undamaged beneath its orange parachute.</p>" +
        "<p>" + N(21) + "That night the club watched the camera footage together. " +
        N(22) + "When the screen showed the curve of the Earth against a black sky, Tomasz paused the video and turned around. " +
        N(23) + "\"Next year,\" he said, \"Amara runs the checklist.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Five Minutes of Wind\"?",
          choices: [
            { letter: "A", text: "Weather forecasts are usually wrong about the wind." },
            { letter: "B", text: "Science projects succeed only with costly equipment." },
            { letter: "C", text: "A quiet person's careful attention can save the day." },
            { letter: "D", text: "A club president should make every decision alone." }
          ],
          correct: "C"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The main problem the weather club faces in sentences 3 through 14 is that —",
          choices: [
            { letter: "A", text: "the rising wind rushes them while a knot goes unnoticed" },
            { letter: "B", text: "the camera and tracker were never wired correctly" },
            { letter: "C", text: "Ms. Haddad refuses to let the students launch at all" },
            { letter: "D", text: "the balloon is too small to lift the heavy foam box" }
          ],
          correct: "A"
        },
        {
          id: "char",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 8 and 9 characterize Amara as someone who —",
          choices: [
            { letter: "A", text: "dislikes the other members of the club" },
            { letter: "B", text: "wants to take over as club president" },
            { letter: "C", text: "is frightened by the huge balloon" },
            { letter: "D", text: "notices details that others overlook" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The details in sentences 6 and 7, with Tomasz shouting and everyone talking at once, mainly create a mood of —",
          choices: [
            { letter: "A", text: "calm confidence" },
            { letter: "B", text: "hurried confusion" },
            { letter: "C", text: "quiet sadness" },
            { letter: "D", text: "playful humor" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.2",
          stem: "Tomasz's statement in sentence 23 mainly serves to —",
          choices: [
            { letter: "A", text: "show that the club now values Amara's careful eye" },
            { letter: "B", text: "reveal that Tomasz plans to quit the weather club" },
            { letter: "C", text: "explain why the footage showed the Earth's curve" },
            { letter: "D", text: "suggest that the launch should never be repeated" }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 1, the word swaying most nearly means —",
          choices: [
            { letter: "A", text: "shrinking slowly in size" },
            { letter: "B", text: "glowing in the sunlight" },
            { letter: "C", text: "making a loud whistle" },
            { letter: "D", text: "moving from side to side" }
          ],
          correct: "D"
        },
        {
          id: "simile",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 17, comparing the balloon to an impatient dog on a leash suggests that the balloon —",
          choices: [
            { letter: "A", text: "is about to pop from the cold air" },
            { letter: "B", text: "is too heavy for the students to hold" },
            { letter: "C", text: "pulls hard, as if eager to rise" },
            { letter: "D", text: "drifts slowly and makes noise" }
          ],
          correct: "C"
        }
      ]
    },
    /* 3 · LITERARY · newspaper archive */
    {
      id: "g10-rl-c73-courier-letter",
      family: "G10",
      title: "Letters to the Courier",
      kind: "Literary · 10.RL",
      blurb: "Desmond goes looking for a serious primary source in an old newspaper archive and finds his grandfather instead.",
      level: 3,
      passage:
        "<p>" + N(1) + "The archive of the Harlow Courier lived in the basement of the old bank building, where the air tasted faintly of dust and pennies. " +
        N(2) + "Desmond had come for one reason: his history teacher wanted a primary source, and his grandfather had told him, with great confidence, that newspapers from \"back then\" were full of serious people writing serious things. " +
        N(3) + "\"Not like your phone,\" Grandpa Walt had added, tapping the screen as if it owed him money.</p>" +
        "<p>" + N(4) + "The archivist, Mrs. Pell, was meticulous, not fussy, about the cotton gloves she handed him; she simply explained that skin oil eats paper the way rust eats a bicycle. " +
        N(5) + "She led him to a shelf of bound volumes and left him alone with fifty years of the town's opinions.</p>" +
        "<p>" + N(6) + "Desmond expected boredom. " +
        N(7) + "Instead he found arguments. " +
        N(8) + "In 1971 readers had fought for six weeks over whether the new traffic light on Main Street was an insult to common sense. " +
        N(9) + "A man named Oscar Brill wrote nine letters about a neighbor's rooster. " +
        N(10) + "And in the spring of 1974, a retired banker complained that the town's teenagers were lazy, rude, and \"glued to their transistor radios like flies to a strip.\"</p>" +
        "<p>" + N(11) + "Two weeks later, someone answered him. " +
        N(12) + "The reply was polite and furious at once. " +
        N(13) + "It argued that the teenagers of Harlow had filled sandbags during the March flood while certain retired bankers watched from their porches. " +
        N(14) + "It ended, \"Before you judge us by our radios, ask what we were listening for.\" " +
        N(15) + "It was signed Walter Ames, age 16.</p>" +
        "<p>" + N(16) + "Desmond read the letter three times. " +
        N(17) + "Then he photographed it with his phone, checked that the image was sharp, and laughed so loudly that Mrs. Pell looked up from her desk.</p>" +
        "<p>" + N(18) + "At dinner he slid the phone across the table without a word. " +
        N(19) + "Grandpa Walt put on his reading glasses, read for a long time, and set the phone down very carefully, the way a person might set down something that could still go off. " +
        N(20) + "\"Well,\" he said at last. " +
        N(21) + "\"The flood was a long time ago.\" " +
        N(22) + "Desmond waited. " +
        N(23) + "His grandfather picked the phone up again and asked how to make the words bigger.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best developed through Desmond's discovery in the Courier archive?",
          choices: [
            { letter: "A", text: "Newspapers of the past were more serious than modern media." },
            { letter: "B", text: "Family secrets are best left buried in old public records." },
            { letter: "C", text: "Archives are the only reliable sources of a town's history." },
            { letter: "D", text: "People often judge the young in ways they once resented." }
          ],
          correct: "D"
        },
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence reveals the discovery that changes how Desmond sees Grandpa Walt?",
          choices: [
            { letter: "A", text: "Sentence 8, about the six-week traffic light quarrel" },
            { letter: "B", text: "Sentence 15, naming the writer of the angry reply" },
            { letter: "C", text: "Sentence 10, quoting the retired banker's complaint" },
            { letter: "D", text: "Sentence 4, about the cotton gloves and the paper" }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Grandpa Walt's actions in sentences 19 through 23 suggest that he —",
          choices: [
            { letter: "A", text: "is humbled but willing to rethink his view" },
            { letter: "B", text: "is angry that Desmond searched the archive" },
            { letter: "C", text: "does not remember writing the old letter" },
            { letter: "D", text: "wants Desmond to give up his phone for good" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the story about Desmond and Grandpa Walt is most ironic?",
          choices: [
            { letter: "A", text: "Mrs. Pell guards the old paper by handing Desmond cotton gloves." },
            { letter: "B", text: "Oscar Brill writes nine separate letters about a noisy rooster." },
            { letter: "C", text: "The man who mocks teens' phones once defended teens in print." },
            { letter: "D", text: "Desmond expects boredom but spends hours reading the volumes." }
          ],
          correct: "C"
        },
        {
          id: "craft",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author includes the traffic light and rooster letters in sentences 8 and 9 mainly to —",
          choices: [
            { letter: "A", text: "prove that Harlow had more crime in the past" },
            { letter: "B", text: "undercut Grandpa Walt's claim that old papers were serious" },
            { letter: "C", text: "explain why Mrs. Pell insists on cotton gloves" },
            { letter: "D", text: "show that Desmond lost interest in his assignment" }
          ],
          correct: "B"
        },
        {
          id: "conno",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The narrator calls Mrs. Pell meticulous rather than fussy in sentence 4. Compared with fussy, meticulous suggests that her care is —",
          choices: [
            { letter: "A", text: "silly and hard to explain" },
            { letter: "B", text: "nervous and easily upset" },
            { letter: "C", text: "lazy and rarely enforced" },
            { letter: "D", text: "precise and worth respecting" }
          ],
          correct: "D"
        },
        {
          id: "image",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "The image in sentence 19, setting the phone down like something that could still go off, suggests that Grandpa Walt —",
          choices: [
            { letter: "A", text: "treats his own old words as something risky to handle" },
            { letter: "B", text: "believes the phone is broken and might catch fire" },
            { letter: "C", text: "is too tired after dinner to hold the phone steadily" },
            { letter: "D", text: "wants Desmond to delete the photograph right away" }
          ],
          correct: "A"
        }
      ]
    },
    /* 4 · LITERARY · farmers market */
    {
      id: "g10-rl-c73-eastgate-bread",
      family: "G10",
      title: "A Potluck, Not a Race",
      kind: "Literary · 10.RL",
      blurb: "On a rainy market morning, Ibrahim is sure the dumpling stall across the aisle is stealing his customers.",
      level: 2,
      passage:
        "<p>" + N(1) + "Ibrahim had been told to sell forty loaves of his mother's sesame bread before noon, and by nine o'clock on Saturday he had sold six. " +
        N(2) + "Rain drummed on the canvas roof of the Eastgate Farmers Market, and the few shoppers who came hurried past with their hoods up and their eyes on the ground. " +
        N(3) + "Worse, the stall directly across the aisle belonged to Mrs. Kowalczyk, who sold potato dumplings from a steaming pot, and every customer who did stop seemed to stop there.</p>" +
        "<p>" + N(4) + "Ibrahim watched the line at her stall the way a goalkeeper watches a striker. " +
        N(5) + "He rearranged his loaves three times. " +
        N(6) + "He wrote a new sign in larger letters. " +
        N(7) + "He even considered lowering his price, though his mother had told him not to, because she said cheap bread tells people it is ordinary bread.</p>" +
        "<p>" + N(8) + "At ten-thirty Mrs. Kowalczyk crossed the aisle carrying two paper cups of tea. " +
        N(9) + "She handed him one without asking whether he wanted it. " +
        N(10) + "\"You look like a man waiting for a verdict,\" she said.</p>" +
        "<p>" + N(11) + "He admitted that he was losing. " +
        N(12) + "She laughed so hard she had to set her tea down. " +
        N(13) + "\"Losing to whom?\" she asked. " +
        N(14) + "\"To me? A market is a potluck, not a race. " +
        N(15) + "My dumplings need something to sit beside on a plate.\"</p>" +
        "<p>" + N(16) + "Before he could answer, she went back to her stall and began telling every customer in her line that the bread across the way was the best thing to eat with her dumplings. " +
        N(17) + "Ibrahim was too surprised to do anything but wrap loaves. " +
        N(18) + "By noon he had sold thirty-eight. " +
        N(19) + "The last two he carried across the aisle himself.</p>" +
        "<p>" + N(20) + "That evening he told his mother about the whole morning: the rain, the sign, the tea, the line that had somehow become his line too. " +
        N(21) + "She listened, nodding, and then asked only one question. " +
        N(22) + "\"Next week,\" she said, \"what will you bring her?\"</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story set at the Eastgate Farmers Market?",
          choices: [
            { letter: "A", text: "Selling at a lower price is the surest way to succeed." },
            { letter: "B", text: "Cooperation can serve people better than rivalry." },
            { letter: "C", text: "Bad weather ruins even the best-planned business day." },
            { letter: "D", text: "Young people should ignore advice from their parents." }
          ],
          correct: "B"
        },
        {
          id: "resolve",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "Which event most directly resolves Ibrahim's problem at the market?",
          choices: [
            { letter: "A", text: "He writes a new sign for his stall in larger letters." },
            { letter: "B", text: "The rain stops and more shoppers arrive at the market." },
            { letter: "C", text: "He lowers the price of his mother's sesame bread." },
            { letter: "D", text: "Mrs. Kowalczyk recommends his bread to her customers." }
          ],
          correct: "D"
        },
        {
          id: "char",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 4 through 7 characterize Ibrahim as —",
          choices: [
            { letter: "A", text: "anxious and fixed on competing" },
            { letter: "B", text: "lazy and uninterested in selling" },
            { letter: "C", text: "cheerful and relaxed about sales" },
            { letter: "D", text: "rude and unfriendly to shoppers" }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 4, comparing Ibrahim to a goalkeeper watching a striker suggests that he —",
          choices: [
            { letter: "A", text: "would rather be playing soccer than selling bread" },
            { letter: "B", text: "is studying how Mrs. Kowalczyk cooks her dumplings" },
            { letter: "C", text: "sees Mrs. Kowalczyk as an opponent to defend against" },
            { letter: "D", text: "is waiting for the rain to stop before he moves" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "What is ironic about Ibrahim's worry in sentences 3 through 7?",
          choices: [
            { letter: "A", text: "The rival he fears turns out to be the one who helps him." },
            { letter: "B", text: "His mother wanted him to sell more than forty loaves." },
            { letter: "C", text: "The market roof keeps out the rain but not the cold." },
            { letter: "D", text: "His new sign attracts customers to the dumpling stall." }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.2",
          stem: "The mother's question in sentence 22 mainly serves to —",
          choices: [
            { letter: "A", text: "warn Ibrahim not to trust Mrs. Kowalczyk again" },
            { letter: "B", text: "show that she is disappointed by the day's sales" },
            { letter: "C", text: "explain why she told him not to lower his price" },
            { letter: "D", text: "suggest that he should return the neighbor's kindness" }
          ],
          correct: "D"
        },
        {
          id: "phrase",
          sol: "10.RV.1.F",
          sub: "10.RV.1.F.1",
          stem: "When Mrs. Kowalczyk calls the market a potluck, not a race in sentence 14, she most nearly means that vendors —",
          choices: [
            { letter: "A", text: "should bring free food to hand out to shoppers" },
            { letter: "B", text: "must take turns using the market's best spots" },
            { letter: "C", text: "each add to a shared meal instead of competing" },
            { letter: "D", text: "need to sell everything quickly before noon" }
          ],
          correct: "C"
        }
      ]
    },
    /* 5 · INFORMATIONAL · weather balloons */
    {
      id: "g10-ri-c73-radiosonde",
      family: "G10",
      title: "Twice a Day, Up and Away",
      kind: "Informational · 10.RI",
      blurb: "Why weather stations around the world still let go of balloons every morning and evening.",
      level: 1,
      passage:
        "<p>" + N(1) + "Twice every day, at the same two moments, people at hundreds of weather stations around the world step outside and let go of a balloon. " +
        N(2) + "The timing is coordinated so that all the balloons rise together, giving forecasters a snapshot of the whole atmosphere at once. " +
        N(3) + "Satellites and radar provide enormous amounts of data, but they mostly observe the sky from above or from the ground. " +
        N(4) + "A balloon is still one of the few tools that travels straight up through the air and measures it directly.</p>" +
        "<p>" + N(5) + "The balloon itself is made of thin latex and filled with helium or hydrogen. " +
        N(6) + "Hanging beneath it on a long string is a radiosonde, a box about the size of a milk carton. " +
        N(7) + "As it climbs, the radiosonde measures temperature, humidity, and air pressure, and a GPS receiver tracks how far the wind pushes it sideways. " +
        N(8) + "Every second or two, it radios these readings to the station below.</p>" +
        "<p>" + N(9) + "The journey is short but dramatic. " +
        N(10) + "The balloon rises roughly a thousand feet per minute, and in about two hours it can climb above 100,000 feet, more than three times as high as passenger jets fly. " +
        N(11) + "Because the air grows thinner as the balloon climbs, the gas inside expands. " +
        N(12) + "A balloon that leaves the ground about six feet wide may swell to the width of a small house before its skin stretches too far and bursts. " +
        N(13) + "A small parachute then carries the radiosonde back to Earth.</p>" +
        "<p>" + N(14) + "Most radiosondes are never seen again. " +
        N(15) + "They land in oceans, forests, and fields, sometimes hundreds of miles away. " +
        N(16) + "Each one carries a label asking anyone who finds it to mail it back, and a small number are returned, repaired, and flown again.</p>" +
        "<p>" + N(17) + "To forecasters, the readings are worth far more than the equipment. " +
        N(18) + "Computer models that predict storms need to know what the atmosphere is doing at every level, not just at the surface. " +
        N(19) + "\"A forecast is only as good as its starting point,\" explains Lena Ortiz, a meteorologist who has launched balloons for twenty years. " +
        N(20) + "\"The balloon tells us where we're starting.\"</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Twice a Day, Up and Away\"?",
          choices: [
            { letter: "A", text: "Satellites have replaced most older weather tools." },
            { letter: "B", text: "Lost radiosondes are a growing problem for farmers." },
            { letter: "C", text: "Weather balloons gather direct data that forecasts need." },
            { letter: "D", text: "Balloon launches are timed to entertain the public." }
          ],
          correct: "C"
        },
        {
          id: "burst",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the passage, why does a weather balloon eventually burst?",
          choices: [
            { letter: "A", text: "The gas inside expands as the air around it thins." },
            { letter: "B", text: "The radiosonde becomes too heavy for it to carry." },
            { letter: "C", text: "Passenger jets fly too close to it at high altitude." },
            { letter: "D", text: "The station sends a signal that pops its latex skin." }
          ],
          correct: "A"
        },
        {
          id: "quote",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes Lena Ortiz's words in sentences 19 and 20 mainly to —",
          choices: [
            { letter: "A", text: "prove that balloon launches are dangerous work" },
            { letter: "B", text: "describe how a radiosonde is built and tested" },
            { letter: "C", text: "suggest that forecasters should stop using satellites" },
            { letter: "D", text: "show why accurate starting data matters to forecasts" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How is the third paragraph of \"Twice a Day, Up and Away\" (sentences 9 through 13) organized?",
          choices: [
            { letter: "A", text: "as a list of reasons balloons are better than radar" },
            { letter: "B", text: "in time order, following the balloon up and back down" },
            { letter: "C", text: "as a problem followed by several possible solutions" },
            { letter: "D", text: "as a comparison of latex balloons and paper balloons" }
          ],
          correct: "B"
        },
        {
          id: "jets",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author mentions passenger jets in sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "help readers picture how high the balloon travels" },
            { letter: "B", text: "warn that balloons are a danger to air travel" },
            { letter: "C", text: "explain how airplanes also measure the weather" },
            { letter: "D", text: "show that balloons move faster than airplanes" }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on sentences 6 through 8, a radiosonde is —",
          choices: [
            { letter: "A", text: "a parachute that slows a falling balloon" },
            { letter: "B", text: "an instrument box that measures and sends data" },
            { letter: "C", text: "a station where balloons are filled with gas" },
            { letter: "D", text: "a label that asks finders to return equipment" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which sentence provides the strongest evidence that balloons offer something satellites and radar do not?",
          choices: [
            { letter: "A", text: "Sentence 1, about launches at hundreds of stations" },
            { letter: "B", text: "Sentence 14, about radiosondes that are never found" },
            { letter: "C", text: "Sentence 13, about the parachute's trip back to Earth" },
            { letter: "D", text: "Sentence 4, about traveling straight up through the air" }
          ],
          correct: "D"
        }
      ]
    },
    /* 6 · INFORMATIONAL · newspaper archive */
    {
      id: "g10-ri-c73-sentinel-online",
      family: "G10",
      title: "The Sentinel Goes Online",
      kind: "Informational · 10.RI",
      blurb: "A small-town library is moving more than a century of its local newspaper onto the internet, one page at a time.",
      level: 2,
      passage:
        "<p>" + N(1) + "For more than a century, the Millbrook Sentinel recorded the life of its small river town: births and weddings, floods and fires, school board fights and bake sale results. " +
        N(2) + "When the paper closed in 1994, its bound volumes went to the public library, where they filled forty feet of shelving in a locked room. " +
        N(3) + "Anyone who wanted to read them had to make an appointment, put on gloves, and turn pages that cracked at the edges.</p>" +
        "<p>" + N(4) + "Three years ago the library began moving the Sentinel online. " +
        N(5) + "The process has three stages. " +
        N(6) + "First, staff photograph each page with a camera mounted above a glass plate that holds the paper flat. " +
        N(7) + "Next, software scans the images and tries to recognize every letter, turning pictures of words into text a computer can search. " +
        N(8) + "Finally, volunteers read the computer's version beside the original image and fix its mistakes.</p>" +
        "<p>" + N(9) + "That last stage turns out to matter most. " +
        N(10) + "Old newsprint fades unevenly, and the software often guesses wrong; in one early test, it read \"harvest dance\" as \"harvest dunce\" and turned a mayor named Hollis into \"Hollow.\" " +
        N(11) + "Without human correction, a researcher searching for a name might never find it. " +
        N(12) + "So far, more than two hundred volunteers have transcribed or checked over sixty thousand pages, and many of them are retired residents who recognize the family names they are reading.</p>" +
        "<p>" + N(13) + "The results are already being used. " +
        N(14) + "Local students have traced the history of their own streets, and families as far away as Australia have found records of ancestors who once lived in Millbrook. " +
        N(15) + "Last spring, a city engineer used flood reports from the 1930s to plan new storm drains.</p>" +
        "<p>" + N(16) + "The project still faces limits. " +
        N(17) + "Issues printed after 1960 raise copyright questions and remain offline for now, and the grant that pays for the camera ends next year. " +
        N(18) + "Library director Ana Ferreira says the town should see the work as an investment rather than an expense. " +
        N(19) + "\"These pages were written for neighbors,\" she said. " +
        N(20) + "\"Putting them online just makes the neighborhood bigger.\"</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which of these best summarizes the article about the Millbrook Sentinel?",
          choices: [
            { letter: "A", text: "The Sentinel closed because readers lost interest in local news." },
            { letter: "B", text: "Putting the Sentinel online relies on volunteers and is already useful." },
            { letter: "C", text: "Software can now read old newspapers with no human help at all." },
            { letter: "D", text: "Copyright rules keep nearly every Sentinel page from the public." }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which detail best supports the claim in sentence 9 that the volunteers' stage matters most?",
          choices: [
            { letter: "A", text: "The bound volumes filled forty feet of shelving." },
            { letter: "B", text: "Staff photograph pages above a flat glass plate." },
            { letter: "C", text: "Families as far away as Australia use the pages." },
            { letter: "D", text: "The software turned the mayor Hollis into \"Hollow.\"" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 5 through 8 of the Sentinel article are organized mainly as —",
          choices: [
            { letter: "A", text: "a sequence of steps in a process" },
            { letter: "B", text: "a comparison of two libraries" },
            { letter: "C", text: "a list of causes for a problem" },
            { letter: "D", text: "an argument and its rebuttal" }
          ],
          correct: "A"
        },
        {
          id: "remark",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 20, Ferreira's remark that going online makes the neighborhood bigger mainly suggests that —",
          choices: [
            { letter: "A", text: "Millbrook's population has grown since the paper closed" },
            { letter: "B", text: "the library plans to build a larger reading room" },
            { letter: "C", text: "the old pages now reach readers far beyond the town" },
            { letter: "D", text: "neighbors should write new articles for the website" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which sentence provides the strongest evidence that the online Sentinel is useful for more than family history?",
          choices: [
            { letter: "A", text: "Sentence 15, about the engineer planning storm drains" },
            { letter: "B", text: "Sentence 12, about the retired residents who volunteer" },
            { letter: "C", text: "Sentence 2, about the volumes moving to the library" },
            { letter: "D", text: "Sentence 17, about the grant that ends next year" }
          ],
          correct: "A"
        },
        {
          id: "root",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word transcribed in sentence 12 contains the root scrib-, as in scribble and manuscript. Based on this, to transcribe a page most nearly means to —",
          choices: [
            { letter: "A", text: "store it safely in a locked room" },
            { letter: "B", text: "read it aloud to a group of listeners" },
            { letter: "C", text: "write out its words in another form" },
            { letter: "D", text: "photograph it with a mounted camera" }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes the information in sentences 16 and 17 mainly to —",
          choices: [
            { letter: "A", text: "argue that the project should be stopped" },
            { letter: "B", text: "acknowledge problems not yet solved" },
            { letter: "C", text: "explain how the camera was first paid for" },
            { letter: "D", text: "praise the volunteers for their hard work" }
          ],
          correct: "B"
        }
      ]
    },
    /* 7 · INFORMATIONAL · toy testing */
    {
      id: "g10-ri-c73-toy-testing",
      family: "G10",
      title: "Built to Be Broken",
      kind: "Informational · 10.RI",
      blurb: "Before a toy for young children reaches a store, someone spends the day trying to destroy it.",
      level: 3,
      passage:
        "<p>" + N(1) + "A toy designer's sketch may show a smiling wooden duck, but the person who decides whether that duck reaches a store shelf is often a tester who spends the day trying to destroy it. " +
        N(2) + "Before a toy for young children can be sold in many countries, samples are dropped, twisted, pulled, soaked, and chewed by machines, all to answer a single question: what will happen when a real child gets hold of it?</p>" +
        "<p>" + N(3) + "The tests are built on an unsentimental view of childhood. " +
        N(4) + "Toddlers put nearly everything into their mouths, so one of the simplest tools in a testing lab is a hollow plastic cylinder about the width of a small child's throat. " +
        N(5) + "Any piece that fits inside it, including a piece that breaks off during testing, counts as a choking hazard for children under three. " +
        N(6) + "Testers also drop toys repeatedly from about the height of a high chair, then pull on eyes, wheels, and buttons to see whether anything comes loose.</p>" +
        "<p>" + N(7) + "These rules can frustrate designers. " +
        N(8) + "A tiny, beautifully carved wheel may be exactly what makes a toy charming, and it may also be exactly what fails the cylinder test. " +
        N(9) + "Some designers respond by making parts larger; others attach them with hidden pins or choose a sturdier wood. " +
        N(10) + "One small workshop reported redesigning a pull-along duck four times before its beak survived the pulling test, which added two months to its schedule.</p>" +
        "<p>" + N(11) + "Critics sometimes argue that the standards have gone too far, producing toys that are safe but dull. " +
        N(12) + "The evidence does not clearly support that complaint. " +
        N(13) + "Many of the most popular toys of recent decades, such as blocks, balls, and stacking rings, pass the tests easily because they have few small parts. " +
        N(14) + "Safety limits may actually push designers toward the bold shapes and solid construction that small children find easiest to handle.</p>" +
        "<p>" + N(15) + "None of this means that a tested toy is indestructible. " +
        N(16) + "Labs test what they can predict, and children are famously unpredictable. " +
        N(17) + "But each standard records a lesson someone once learned the hard way. " +
        N(18) + "In that sense, the tester trying to break the duck is not the designer's enemy; she is a stand-in for every child who will someday try harder.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "What is the central idea of \"Built to Be Broken\"?",
          choices: [
            { letter: "A", text: "Wooden toys are safer than toys made of plastic." },
            { letter: "B", text: "Most toy designers ignore the results of safety tests." },
            { letter: "C", text: "Safety standards have made modern toys dull and plain." },
            { letter: "D", text: "Tough testing protects children and shapes toy design." }
          ],
          correct: "D"
        },
        {
          id: "detail",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to \"Built to Be Broken,\" what makes a toy part count as a choking hazard?",
          choices: [
            { letter: "A", text: "It fits inside a cylinder about as wide as a child's throat." },
            { letter: "B", text: "It falls off when dropped from the height of a high chair." },
            { letter: "C", text: "It is carved from a soft wood rather than a sturdy one." },
            { letter: "D", text: "It is attached to the toy with pins that cannot be seen." }
          ],
          correct: "A"
        },
        {
          id: "example",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes the workshop's pull-along duck in sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "prove that ducks are the most popular wooden toy" },
            { letter: "B", text: "show that small workshops cannot meet the rules" },
            { letter: "C", text: "show the real cost of meeting a safety standard" },
            { letter: "D", text: "suggest that the pulling test should be removed" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Sentences 11 through 14 of \"Built to Be Broken\" are organized mainly as —",
          choices: [
            { letter: "A", text: "a series of steps in a laboratory test" },
            { letter: "B", text: "a criticism followed by a rebuttal with evidence" },
            { letter: "C", text: "a description of a toy from several angles" },
            { letter: "D", text: "a cause followed by a list of its effects" }
          ],
          correct: "B"
        },
        {
          id: "phrase",
          sol: "10.RI.2.B",
          sub: "10.RI.2.B.2",
          stem: "In sentence 3, the phrase an unsentimental view of childhood mainly suggests that the tests —",
          choices: [
            { letter: "A", text: "assume children will treat toys roughly, not gently" },
            { letter: "B", text: "are designed by people who dislike young children" },
            { letter: "C", text: "ignore how much children love their favorite toys" },
            { letter: "D", text: "focus on how toys look rather than how they work" }
          ],
          correct: "A"
        },
        {
          id: "support",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "Which statement is best supported by sentences 13 and 14 of \"Built to Be Broken\" together?",
          choices: [
            { letter: "A", text: "Blocks and balls fail safety tests more often than dolls." },
            { letter: "B", text: "Designers should stop making toys with any small parts." },
            { letter: "C", text: "Children prefer toys with many tiny, detailed pieces." },
            { letter: "D", text: "Simple, sturdy toys can be both safe and well loved." }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 15, the word indestructible most nearly means —",
          choices: [
            { letter: "A", text: "easy to repair" },
            { letter: "B", text: "impossible to break" },
            { letter: "C", text: "safe for any age" },
            { letter: "D", text: "simple to design" }
          ],
          correct: "B"
        }
      ]
    },
    /* 8 · INFORMATIONAL · farmers market */
    {
      id: "g10-ri-c73-first-customer",
      family: "G10",
      title: "Before the First Customer",
      kind: "Informational · 10.RI",
      blurb: "What happens before a farmers market opens, and why small farms think the early mornings are worth it.",
      level: 2,
      passage:
        "<p>" + N(1) + "By the time the first shopper arrives at the Riverside Farmers Market at 8 a.m., most of the vendors have been awake for five hours. " +
        N(2) + "A typical market day for a small vegetable grower begins in darkness, with headlamps, harvest crates, and a cooler full of ice. " +
        N(3) + "Greens are cut last, often just before loading, because lettuce and spinach begin to wilt within hours of leaving the soil.</p>" +
        "<p>" + N(4) + "Why go to so much trouble for a few hours of selling? " +
        N(5) + "For many small farms, the answer is money. " +
        N(6) + "When produce passes through a wholesaler, a distributor, and a grocery store, each one takes a share of the price, and the grower may keep only a small fraction of each dollar the shopper spends. " +
        N(7) + "At a market stall, the farmer keeps nearly all of it. " +
        N(8) + "That difference can decide whether a farm of twenty acres survives a bad season.</p>" +
        "<p>" + N(9) + "Many markets protect this arrangement with a \"producer-only\" rule. " +
        N(10) + "Under such a rule, vendors may sell only what they grow, raise, or make themselves; reselling crates of supermarket tomatoes is forbidden. " +
        N(11) + "Market managers enforce the rule through farm visits, sometimes arriving unannounced to walk the rows and compare what is planted with what appears on the table.</p>" +
        "<p>" + N(12) + "The rule also explains something that puzzles new shoppers: the market's selection changes from week to week. " +
        N(13) + "In May the tables are crowded with radishes, peas, and strawberries; by August they hold corn and tomatoes; in October, squash and apples. " +
        N(14) + "A shopper who wants watermelon in April will leave disappointed, because no local farm has any to sell.</p>" +
        "<p>" + N(15) + "Shoppers, too, gain something besides fresh food. " +
        N(16) + "At a stall, they can ask how a crop was grown, which variety tastes sweetest, or what to do with an unfamiliar vegetable like kohlrabi. " +
        N(17) + "Dolores Okafor, who has sold beans and peppers at Riverside for eleven years, says these conversations are the part of the job she would miss most. " +
        N(18) + "\"At the grocery store, the food is a stranger,\" she said. " +
        N(19) + "\"Here, it comes with an introduction.\"</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "What is the main idea of \"Before the First Customer\"?",
          choices: [
            { letter: "A", text: "Selling at markets benefits small growers and their shoppers." },
            { letter: "B", text: "Grocery stores sell fresher produce than most farm stands." },
            { letter: "C", text: "Market managers spend most of their time visiting farms." },
            { letter: "D", text: "Shoppers should buy watermelon only during the summer." }
          ],
          correct: "A"
        },
        {
          id: "greens",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the passage, why are greens often cut last on a market morning?",
          choices: [
            { letter: "A", text: "They take up the least space in the cooler." },
            { letter: "B", text: "Market rules require them to be cut at dawn." },
            { letter: "C", text: "They begin to wilt within hours of harvest." },
            { letter: "D", text: "They are hard to find in the dark fields." }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author's main purpose in sentences 4 through 8 is to —",
          choices: [
            { letter: "A", text: "complain that grocery stores charge shoppers too much" },
            { letter: "B", text: "explain why selling directly matters to a small farm" },
            { letter: "C", text: "describe how a farmer loads a truck before sunrise" },
            { letter: "D", text: "persuade readers to start farms of their own" }
          ],
          correct: "B"
        },
        {
          id: "connect",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "How does sentence 12 connect the paragraph about the producer-only rule to the paragraph that follows it?",
          choices: [
            { letter: "A", text: "It introduces a new speaker who disagrees with the rule." },
            { letter: "B", text: "It summarizes the cost of produce at grocery stores." },
            { letter: "C", text: "It gives the date when the rule first went into effect." },
            { letter: "D", text: "It links the rule to the seasonal changes described next." }
          ],
          correct: "D"
        },
        {
          id: "stranger",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "Okafor's comment in sentence 18 that grocery store food is a stranger mainly emphasizes that —",
          choices: [
            { letter: "A", text: "grocery stores sell food from foreign countries" },
            { letter: "B", text: "market shoppers can learn where their food comes from" },
            { letter: "C", text: "shoppers feel unsafe in large grocery stores" },
            { letter: "D", text: "farmers are shy about talking with customers" }
          ],
          correct: "B"
        },
        {
          id: "word",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 11, the word unannounced most nearly means —",
          choices: [
            { letter: "A", text: "in large groups" },
            { letter: "B", text: "late in the day" },
            { letter: "C", text: "with a written report" },
            { letter: "D", text: "without warning" }
          ],
          correct: "D"
        },
        {
          id: "prefix",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word unfamiliar in sentence 16 is built from the prefix un- and the word familiar. Based on these parts, an unfamiliar vegetable is one that —",
          choices: [
            { letter: "A", text: "grows only in cold places" },
            { letter: "B", text: "costs more than others" },
            { letter: "C", text: "a shopper does not know" },
            { letter: "D", text: "the family dislikes eating" }
          ],
          correct: "C"
        }
      ]
    },
    /* 9 · VOCABULARY · weather balloon */
    {
      id: "g10-rv-c73-cielo-alto",
      family: "G10",
      title: "Thirty Miles Northeast",
      kind: "Vocabulary · 10.RV",
      blurb: "A science club launches a balloon from a desert ranch and chases it across gravel roads. Words in bold.",
      level: 1,
      passage:
        "<p>" + N(1) + "The Cielo Alto Science Club had planned its launch for months, and by Friday night the whole team was buzzing with <strong>anticipation</strong>. " +
        N(2) + "Rosa Delgado, the team captain, could hardly sleep; she kept picturing the balloon rising over the ranch where her uncle had offered them a launch site. " +
        N(3) + "Her cousin Diego, more practical, spent the evening writing a <strong>contingency</strong> plan: what to do if the wind shifted, if the tracker failed, or if the helium tank ran short.</p>" +
        "<p>" + N(4) + "Saturday dawned clear and still. " +
        N(5) + "The team filled the balloon until it was <strong>buoyant</strong> enough to lift the payload, a foam box holding a camera and a tracker, and then checked everything once more against Diego's list. " +
        N(6) + "At exactly seven o'clock, Rosa counted down from ten and released the line.</p>" +
        "<p>" + N(7) + "The <strong>ascent</strong> was smoother than anyone had expected. " +
        N(8) + "On the laptop screen, a red dot climbed steadily while the numbers for altitude and temperature changed every few seconds. " +
        N(9) + "The temperature fell below zero, then far below, and the team cheered every new record. " +
        N(10) + "Diego, who had worked out the balloon's likely path from the wind forecasts, predicted that it would come down about thirty miles northeast, near a dry lake bed.</p>" +
        "<p>" + N(11) + "He was off by only four miles. " +
        N(12) + "After a long, dusty drive on gravel roads, the team found the payload resting against a fence post, its foam box scuffed but <strong>intact</strong>. " +
        N(13) + "The camera inside had recorded the entire flight. " +
        N(14) + "When Rosa pressed play and saw the dark sky above a thin blue line of atmosphere, she let out a shout so loud that a hawk lifted off a nearby pole.</p>" +
        "<p>" + N(15) + "The drive home was <strong>jubilant</strong>. " +
        N(16) + "The team sang badly, ate every snack left in the cooler, and argued happily about what they should send up next year. " +
        N(17) + "Diego, of course, had already started a new list, and Rosa, for once, asked if she could help him write it.</p>",
      claims: [
        {
          id: "anticipation",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which detail from sentence 2 best helps the reader understand the meaning of anticipation in sentence 1?",
          choices: [
            { letter: "A", text: "Rosa Delgado was the team captain" },
            { letter: "B", text: "she kept picturing the balloon rising" },
            { letter: "C", text: "her uncle had offered a launch site" },
            { letter: "D", text: "the launch would happen at a ranch" }
          ],
          correct: "B"
        },
        {
          id: "contingency",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "The list that follows the colon in sentence 3 shows that a contingency plan is one that —",
          choices: [
            { letter: "A", text: "explains the science behind a balloon launch" },
            { letter: "B", text: "assigns each club member a different job" },
            { letter: "C", text: "lists the supplies needed for the trip" },
            { letter: "D", text: "prepares for problems that might happen" }
          ],
          correct: "D"
        },
        {
          id: "buoyant",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 5, the word buoyant most nearly means —",
          choices: [
            { letter: "A", text: "able to float upward" },
            { letter: "B", text: "brightly colored" },
            { letter: "C", text: "tightly tied down" },
            { letter: "D", text: "safe to touch" }
          ],
          correct: "A"
        },
        {
          id: "intact",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 12, the word intact most nearly means —",
          choices: [
            { letter: "A", text: "lost and hard to find" },
            { letter: "B", text: "wet from the lake bed" },
            { letter: "C", text: "whole and undamaged" },
            { letter: "D", text: "heavy and awkward" }
          ],
          correct: "C"
        },
        {
          id: "ascent",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word ascent in sentence 7 shares a root with ascend and descend. Based on these words, the root scend- most nearly means —",
          choices: [
            { letter: "A", text: "climb" },
            { letter: "B", text: "shine" },
            { letter: "C", text: "break" },
            { letter: "D", text: "turn" }
          ],
          correct: "A"
        },
        {
          id: "predict",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word predicted in sentence 10 combines pre- (before) and dict- (say). Based on these parts, to predict means to —",
          choices: [
            { letter: "A", text: "repeat what someone else has said" },
            { letter: "B", text: "speak loudly so others can hear" },
            { letter: "C", text: "argue against a weather forecast" },
            { letter: "D", text: "say what will happen ahead of time" }
          ],
          correct: "D"
        },
        {
          id: "jubilant",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 15, the author calls the drive home jubilant instead of simply happy. The word jubilant adds a sense of —",
          choices: [
            { letter: "A", text: "quiet relief after a long worry" },
            { letter: "B", text: "tired calm at the end of a day" },
            { letter: "C", text: "loud and triumphant celebration" },
            { letter: "D", text: "polite pride in a job done well" }
          ],
          correct: "C"
        }
      ]
    },
    /* 10 · VOCABULARY · toy maker */
    {
      id: "g10-rv-c73-lisowska-fox",
      family: "G10",
      title: "The Fox Who Tips His Hat",
      kind: "Vocabulary · 10.RV",
      blurb: "A profile of a toy maker who has spent forty years building wind-up figures by hand. Words in bold.",
      level: 3,
      passage:
        "<p>" + N(1) + "Some people consider mechanical toys <strong>frivolous</strong>, a waste of skill on objects whose only job is to make a child laugh. " +
        N(2) + "Teodora Lisowska has spent forty years proving them wrong. " +
        N(3) + "In her narrow workshop above a bicycle shop, she builds small wind-up figures: a fox that tips its hat, a heron that dips its beak into a painted pond, a tiny baker who slides a loaf in and out of an oven.</p>" +
        "<p>" + N(4) + "Her process is <strong>painstaking</strong>. " +
        N(5) + "A single figure may contain sixty brass parts, each cut, filed, and fitted by hand, and a fox's bow can take a month to get right. " +
        N(6) + "Her first toys, she admits, were <strong>rudimentary</strong>: a wooden bird whose wings flapped when you turned a crank, while nothing else moved. " +
        N(7) + "Over the decades her designs grew more intricate, until a single turn of the key could set a whole small scene in motion.</p>" +
        "<p>" + N(8) + "Lisowska's tools are as old-fashioned as her toys. " +
        N(9) + "She owns no computer, and her workbench holds files, tweezers, and a foot-powered lathe that most manufacturers would call <strong>obsolete</strong>. " +
        N(10) + "Yet visitors who expect the shop to feel dusty and sad are often surprised. " +
        N(11) + "The shelves are crowded with moving color, and the air is full of ticking.</p>" +
        "<p>" + N(12) + "What impresses the engineers who visit is her <strong>ingenuity</strong>. " +
        N(13) + "Without software or motors, she solves problems by thinking through gears and levers the way a chess player thinks through moves. " +
        N(14) + "When a heron's neck kept jamming, she replaced a gear with a bent strip of clock spring, an answer no textbook would have suggested.</p>" +
        "<p>" + N(15) + "Her customers tend to be <strong>discerning</strong> collectors who can tell her work from factory copies at a glance, but Lisowska insists that her favorite audience is still children. " +
        N(16) + "\"Adults admire the gears,\" she says. " +
        N(17) + "\"Children ask where the fox is going.\"</p>" +
        "<p>" + N(18) + "She has no plans to retire. " +
        N(19) + "The baker, she says, still needs a cat.</p>",
      claims: [
        {
          id: "frivolous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 1, the word frivolous most nearly means —",
          choices: [
            { letter: "A", text: "costly to produce" },
            { letter: "B", text: "harmful to children" },
            { letter: "C", text: "lacking serious purpose" },
            { letter: "D", text: "difficult to build" }
          ],
          correct: "C"
        },
        {
          id: "painstaking",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which detail from sentence 5 best helps the reader understand the meaning of painstaking in sentence 4?",
          choices: [
            { letter: "A", text: "each cut, filed, and fitted by hand" },
            { letter: "B", text: "a single figure may contain brass" },
            { letter: "C", text: "a fox wears a bow on its costume" },
            { letter: "D", text: "the parts are made of a metal" }
          ],
          correct: "A"
        },
        {
          id: "rudimentary",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "How does sentence 7 help clarify the meaning of rudimentary in sentence 6?",
          choices: [
            { letter: "A", text: "It explains where she bought her first tools." },
            { letter: "B", text: "It shows that her early toys sold very well." },
            { letter: "C", text: "It describes the fox's hat in careful detail." },
            { letter: "D", text: "It contrasts her early toys with intricate later ones." }
          ],
          correct: "D"
        },
        {
          id: "manu",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word manufacturers in sentence 9 contains the root manu-, as in manual and manuscript. This root most nearly means —",
          choices: [
            { letter: "A", text: "many" },
            { letter: "B", text: "hand" },
            { letter: "C", text: "machine" },
            { letter: "D", text: "money" }
          ],
          correct: "B"
        },
        {
          id: "discerning",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "As used in sentence 15, discerning collectors are best described as people who —",
          choices: [
            { letter: "A", text: "buy toys mainly to resell them" },
            { letter: "B", text: "prefer factory toys to handmade ones" },
            { letter: "C", text: "visit the workshop every week" },
            { letter: "D", text: "can judge quality with a sharp eye" }
          ],
          correct: "D"
        },
        {
          id: "ingenuity",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author chose ingenuity rather than cleverness in sentence 12. Compared with cleverness, ingenuity suggests —",
          choices: [
            { letter: "A", text: "a sly habit of tricking other people" },
            { letter: "B", text: "inventive skill at solving real problems" },
            { letter: "C", text: "book learning gained in a classroom" },
            { letter: "D", text: "a lucky accident that cannot be repeated" }
          ],
          correct: "B"
        },
        {
          id: "obsolete",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "Manufacturers would call Lisowska's lathe obsolete rather than merely old (sentence 9). The word obsolete carries a connotation of being —",
          choices: [
            { letter: "A", text: "valuable because of its age" },
            { letter: "B", text: "beautiful and carefully made" },
            { letter: "C", text: "outdated and no longer useful" },
            { letter: "D", text: "broken beyond any repair" }
          ],
          correct: "C"
        }
      ]
    },
    /* 11 · PAIRED · farmers market move */
    {
      id: "g10-dsr-c73-linden-market",
      family: "G10",
      title: "Moving the Market",
      kind: "Paired texts · 10.DSR",
      blurb: "A market board announces a move to the fairgrounds. A longtime shopper explains who the move leaves out.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Announcement from the Linden Grove Market Board</strong></p>" +
        "<p>" + N(1) + "Beginning in May, the Linden Grove Saturday Market will move from Courthouse Square to the paved lot beside the county fairgrounds on Route 9. " +
        N(2) + "The decision follows two years of growth. " +
        N(3) + "We now have fifty-two vendors and a waiting list of nineteen more, but the square holds only forty-four stalls, and several vendors set up on the sidewalk last season. " +
        N(4) + "The fairgrounds lot offers room for eighty stalls, three hundred parking spaces, permanent restrooms, and a covered pavilion for rainy days. " +
        N(5) + "Shoppers have told us for years that parking downtown is their biggest frustration, and in our fall survey, sixty-one percent of respondents named it as the main reason they sometimes skip the market. " +
        N(6) + "We understand that the square has a special atmosphere, and we did not make this choice lightly. " +
        N(7) + "To keep the market's character, we will add live music each week and a children's tent with free activities. " +
        N(8) + "The market will keep its hours, 8 a.m. to 1 p.m., and every current vendor is guaranteed a space. " +
        N(9) + "We believe the move will let the market grow without losing what makes it ours.</p>" +
        "<p><strong>Text 2 — Post on the Linden Grove Community Forum by Jun Watanabe</strong></p>" +
        "<p>" + N(10) + "I have walked to the Saturday market with my grandmother every week since I was eight, and I want to explain what the board's announcement leaves out. " +
        N(11) + "The fairgrounds lot is two and a half miles from downtown, and the Saturday bus runs there only once every ninety minutes. " +
        N(12) + "My grandmother does not drive, and neither do many of the older residents in the apartments around the square. " +
        N(13) + "The board's survey asked shoppers about parking, but it was handed out at the market itself, to people who had already found a way to get there. " +
        N(14) + "Nobody asked the neighbors who walk. " +
        N(15) + "I also worry about small sellers, like the woman who sells honey from a single folding table; on the square she is next to the bakery, but in a huge lot she may be easy to miss. " +
        N(16) + "I do not doubt that the market needs more room. " +
        N(17) + "But before moving, the board could try closing one more block of Elm Street on Saturdays, or ask the county to add a market shuttle. " +
        N(18) + "Growth should not mean leaving behind the people who were there first.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do the Linden Grove market board and Jun Watanabe agree?",
          choices: [
            { letter: "A", text: "The survey fairly represents all shoppers." },
            { letter: "B", text: "The bus schedule should stay the same." },
            { letter: "C", text: "Live music will keep the market's character." },
            { letter: "D", text: "The market has outgrown its current space." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which statement best describes a key difference between the board's announcement and Jun's post?",
          choices: [
            { letter: "A", text: "The board centers drivers and vendors; Jun centers people who walk or ride." },
            { letter: "B", text: "The board wants the market to shrink; Jun wants it to keep growing quickly." },
            { letter: "C", text: "The board relies on personal stories; Jun relies on survey percentages." },
            { letter: "D", text: "The board plans to change the hours; Jun wants the hours left alone." }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that most directly question the survey evidence the board gives in sentence 5.",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "group",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Based on both texts, which group would most likely find the fairgrounds location harder to reach?",
          choices: [
            { letter: "A", text: "older downtown residents who do not drive" },
            { letter: "B", text: "vendors on the board's waiting list" },
            { letter: "C", text: "shoppers who answered the fall survey" },
            { letter: "D", text: "families who come for the children's tent" }
          ],
          correct: "A"
        },
        {
          id: "solution",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Using both texts, which step would best address the main concerns of both the board and Jun?",
          choices: [
            { letter: "A", text: "cutting the number of vendors back to forty-four" },
            { letter: "B", text: "moving the market hours later into the afternoon" },
            { letter: "C", text: "adding even more parking at the fairgrounds lot" },
            { letter: "D", text: "running a market shuttle from downtown to the lot" }
          ],
          correct: "D"
        },
        {
          id: "character",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 respond to the board's promise in sentence 7 to keep the market's character?",
          choices: [
            { letter: "A", text: "It praises the plan for live music each week." },
            { letter: "B", text: "It warns that small sellers may be lost in a big lot." },
            { letter: "C", text: "It argues that the children's tent costs too much." },
            { letter: "D", text: "It agrees that atmosphere matters less than parking." }
          ],
          correct: "B"
        },
        {
          id: "sidewalk",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to Text 1, why did several vendors set up on the sidewalk last season?",
          choices: [
            { letter: "A", text: "The pavilion was closed for repairs." },
            { letter: "B", text: "Shoppers preferred the sidewalk stalls." },
            { letter: "C", text: "The square had fewer stalls than vendors." },
            { letter: "D", text: "The board moved them to make room for music." }
          ],
          correct: "C"
        }
      ]
    },
    /* 12 · PAIRED · newspaper reading room */
    {
      id: "g10-dsr-c73-reading-room",
      family: "G10",
      title: "The Reading Room",
      kind: "Paired texts · 10.DSR",
      blurb: "A city budget proposal would cut a newspaper reading room's hours. A history teacher explains what the scans miss.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the Dunmore City Budget Proposal, Section 4: Library Services</strong></p>" +
        "<p>" + N(1) + "The Newspaper Reading Room on the library's lower level currently operates six days a week with one full-time archivist. " +
        N(2) + "Since the Dunmore Herald's back issues were scanned and posted online four years ago, in-person visits have fallen from roughly 2,400 per year to about 600. " +
        N(3) + "Most researchers now consult the digital collection from home, at no cost to the city. " +
        N(4) + "We therefore propose limiting the Reading Room to appointments on Tuesdays and Thursdays and reducing the archivist position to part-time. " +
        N(5) + "The change would save approximately $38,000 per year, which would be redirected to extended evening hours at the main library's study center, a service students have repeatedly requested. " +
        N(6) + "The bound volumes would remain in climate-controlled storage, and staff would continue to answer requests for copies by email. " +
        N(7) + "We recognize that some longtime visitors prefer the original pages. " +
        N(8) + "However, the city must direct limited funds to the services residents actually use, and the numbers indicate that the digital collection has largely replaced the room.</p>" +
        "<p><strong>Text 2 — What the Scanner Missed, a Letter from a History Teacher</strong></p>" +
        "<p>" + N(9) + "Each fall I bring my juniors to the Newspaper Reading Room, and each fall someone discovers something the website cannot show. " +
        N(10) + "The scans capture articles, but the scanner was set to skip many full-page advertisements and every loose insert, so a student studying what families bought in 1952 will find almost nothing online. " +
        N(11) + "The search tool also depends on software that misreads faded print; last year a student searched for her great-grandfather's hardware store and found no results, yet Mr. Lindqvist, the archivist, walked her to the right volume in four minutes. " +
        N(12) + "The budget proposal counts visits, but a single visit can launch a semester-long project. " +
        N(13) + "Six hundred visitors a year is not a sign that the room is a relic; it is a sign that people still need what only the room provides. " +
        N(14) + "I would gladly support evening hours for students. " +
        N(15) + "But trading a librarian's memory for a study hall is a poor exchange. " +
        N(16) + "If the city must cut costs, it could keep the archivist full-time and open the room three days a week instead of six.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Both the Dunmore budget proposal and the teacher's letter acknowledge that —",
          choices: [
            { letter: "A", text: "the archivist should become a part-time worker" },
            { letter: "B", text: "fewer people visit the room than in the past" },
            { letter: "C", text: "the scans include every advertisement and insert" },
            { letter: "D", text: "evening study hours are not worth paying for" }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The budget proposal and the teacher's letter differ mainly in how they judge —",
          choices: [
            { letter: "A", text: "whether students want longer study hours" },
            { letter: "B", text: "how the bound volumes should be stored" },
            { letter: "C", text: "when the Herald was first printed in Dunmore" },
            { letter: "D", text: "what the falling visit numbers really mean" }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Select the TWO details from Text 2 that most directly challenge the claim in sentence 8 that the digital collection has largely replaced the room.",
          choices: [
            { letter: "A", text: "The scanner skipped ads and loose inserts (sentence 10)." },
            { letter: "B", text: "The teacher brings her juniors every fall (sentence 9)." },
            { letter: "C", text: "The archivist found a store the search missed (sentence 11)." },
            { letter: "D", text: "The teacher supports evening study hours (sentence 14)." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "together",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which idea about the Dunmore Reading Room becomes clear only when both texts are read together?",
          choices: [
            { letter: "A", text: "The Herald's back issues were posted online four years ago." },
            { letter: "B", text: "Students have asked the library for longer evening hours." },
            { letter: "C", text: "Saving money on the room could cut off material not online." },
            { letter: "D", text: "The bound volumes are kept in climate-controlled storage." }
          ],
          correct: "C"
        },
        {
          id: "respond",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 respond to the visit numbers reported in sentence 2 of Text 1?",
          choices: [
            { letter: "A", text: "It claims the city counted the visits incorrectly." },
            { letter: "B", text: "It argues that counting visits misses what one visit can yield." },
            { letter: "C", text: "It agrees that the low numbers prove the room is unneeded." },
            { letter: "D", text: "It blames the website for driving visitors away on purpose." }
          ],
          correct: "B"
        },
        {
          id: "student",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Based on both texts, why would a student researching household ads from 1952 most likely need the Reading Room itself?",
          choices: [
            { letter: "A", text: "The website charges a fee for pages printed before 1960." },
            { letter: "B", text: "Copies of articles cannot be requested by email." },
            { letter: "C", text: "The archivist is the only person who knows the password." },
            { letter: "D", text: "Many full-page ads were skipped but remain in the volumes." }
          ],
          correct: "D"
        },
        {
          id: "relic",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 13, the teacher denies that the room is a relic. In this context, a relic is —",
          choices: [
            { letter: "A", text: "a leftover from the past that is no longer needed" },
            { letter: "B", text: "a valuable object kept locked away for safety" },
            { letter: "C", text: "a crowded place that needs more staff to run" },
            { letter: "D", text: "a new service that few people know about yet" }
          ],
          correct: "A"
        }
      ]
    },
    /* 13 · POETRY · balloon launch */
    {
      id: "g10-rl-c73-launch-morning",
      family: "G10",
      title: "Launch Morning",
      kind: "Poetry · 10.RL",
      blurb: "A rhyming poem about letting a weather balloon go and waiting all day to hear where it landed.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At dawn the field was frosted, flat, and wide,<br>" +
        L(2) + "and twelve of us stood shivering inside<br>" +
        L(3) + "our borrowed coats, our fingers stiff and red,<br>" +
        L(4) + "the white balloon above us like a head<br>" +
        L(5) + "that turned to watch the wind. We held its string<br>" +
        L(6) + "the way you hold a bird you mean to bring<br>" +
        L(7) + "back to the sky. Ms. Ruiz said, \"Now,\"<br>" +
        L(8) + "and none of us remembered, after, how<br>" +
        L(9) + "our hands came open. It just rose, and rose,<br>" +
        L(10) + "a pearl, a moon, a dot, and then it chose<br>" +
        L(11) + "a door in all that blue and slipped right through.<br>" +
        L(12) + "We stood with our necks bent, nothing to do<br>" +
        L(13) + "but stare at empty sky as if it owed<br>" +
        L(14) + "us something back. Then someone found the road,<br>" +
        L(15) + "the van, the laptop where a red dot crept<br>" +
        L(16) + "across the map, and all that day we kept<br>" +
        L(17) + "our eyes on it the way you'd watch a friend<br>" +
        L(18) + "walk off alone toward some far town's end,<br>" +
        L(19) + "not sure they'd write. At dusk, a farmer's call:<br>" +
        L(20) + "\"Your box is in my beans.\" And that was all.<br>" +
        L(21) + "We drove there laughing, though I can't say why<br>" +
        L(22) + "the beans felt like a present from the sky.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Launch Morning\"?",
          choices: [
            { letter: "A", text: "Letting something go can bring both worry and joy." },
            { letter: "B", text: "Science experiments rarely turn out as planned." },
            { letter: "C", text: "Farmers should be paid for damage to their crops." },
            { letter: "D", text: "Cold mornings are the best time to work outdoors." }
          ],
          correct: "A"
        },
        {
          id: "bird",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In lines 5 through 7, comparing the string to holding a bird you mean to bring back to the sky suggests that the students —",
          choices: [
            { letter: "A", text: "are afraid the balloon will fly away too soon" },
            { letter: "B", text: "plan to catch the balloon when it comes down" },
            { letter: "C", text: "see the launch as setting something free" },
            { letter: "D", text: "think the balloon is too fragile to fly" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "Lines 1 through 3 of \"Launch Morning\" mainly establish a mood of —",
          choices: [
            { letter: "A", text: "lazy, sunny comfort" },
            { letter: "B", text: "chilly, nervous waiting" },
            { letter: "C", text: "angry, bitter frustration" },
            { letter: "D", text: "sleepy, dull boredom" }
          ],
          correct: "B"
        },
        {
          id: "sequence",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "The series a pearl, a moon, a dot in line 10 mainly serves to —",
          choices: [
            { letter: "A", text: "compare the balloon to objects in the night sky" },
            { letter: "B", text: "suggest that the balloon changed color as it rose" },
            { letter: "C", text: "show that the speaker cannot see very well" },
            { letter: "D", text: "show the balloon shrinking as it climbs higher" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of the last two lines of \"Launch Morning\" (lines 21-22) is best described as —",
          choices: [
            { letter: "A", text: "bitter and disappointed" },
            { letter: "B", text: "formal and serious" },
            { letter: "C", text: "joyful and a little puzzled" },
            { letter: "D", text: "fearful and uneasy" }
          ],
          correct: "C"
        },
        {
          id: "crept",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In line 15, the word crept most nearly means —",
          choices: [
            { letter: "A", text: "moved slowly" },
            { letter: "B", text: "flashed brightly" },
            { letter: "C", text: "jumped suddenly" },
            { letter: "D", text: "disappeared" }
          ],
          correct: "A"
        },
        {
          id: "feeling",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Lines 17 through 19 suggest that, while tracking the balloon, the speaker feels —",
          choices: [
            { letter: "A", text: "bored by the long day of waiting" },
            { letter: "B", text: "certain the balloon will be found" },
            { letter: "C", text: "jealous of the friends who left" },
            { letter: "D", text: "anxious, as if a friend had left" }
          ],
          correct: "D"
        }
      ]
    },
    /* 14 · POETRY · newspaper microfilm */
    {
      id: "g10-rl-c73-reel-41",
      family: "G10",
      title: "Microfilm, Reel 41",
      kind: "Poetry · 10.RL",
      blurb: "Scrolling through an old town newspaper, the speaker finds a familiar face on page six.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The machine hums like a refrigerator<br>" +
        L(2) + "that has been awake for fifty years.<br>" +
        L(3) + "I turn the crank and the town goes by sideways:<br>" +
        L(4) + "a fire at the feed store, a price on eggs,<br>" +
        L(5) + "a mayor cutting a ribbon so wide<br>" +
        L(6) + "it seems to be holding the whole street together.<br>" +
        L(7) + "Everyone in these pages is in a hurry<br>" +
        L(8) + "to be finished with the week.<br>" +
        L(9) + "Nobody knows I am watching.<br>" +
        L(10) + "Then, page six, the county spelling bee,<br>" +
        L(11) + "and a girl with my grandmother's chin<br>" +
        L(12) + "holding a ribbon of her own,<br>" +
        L(13) + "squinting as if the flashbulb were a question<br>" +
        L(14) + "she had not studied for.<br>" +
        L(15) + "The caption spells her name wrong.<br>" +
        L(16) + "I laugh out loud in the quiet room,<br>" +
        L(17) + "and the librarian looks up, then down.<br>" +
        L(18) + "How strange, to find her winning<br>" +
        L(19) + "a contest about getting letters right<br>" +
        L(20) + "in a paper that could not get hers.<br>" +
        L(21) + "I print the page. It comes out warm,<br>" +
        L(22) + "the way a hand is, when someone has been holding it.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best developed in \"Microfilm, Reel 41\"?",
          choices: [
            { letter: "A", text: "Newspapers should be more careful about spelling names." },
            { letter: "B", text: "Old records can bring loved ones close, flaws and all." },
            { letter: "C", text: "Machines from the past are louder than modern ones." },
            { letter: "D", text: "Winning a contest matters less than studying hard." }
          ],
          correct: "B"
        },
        {
          id: "fridge",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In lines 1 and 2, comparing the microfilm machine to a refrigerator awake for fifty years suggests that the machine is —",
          choices: [
            { letter: "A", text: "broken and in need of repair" },
            { letter: "B", text: "cold to the touch and unpleasant" },
            { letter: "C", text: "new and surprisingly quiet" },
            { letter: "D", text: "old, steady, and always humming" }
          ],
          correct: "D"
        },
        {
          id: "flash",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In lines 13 and 14, describing the flashbulb as a question she had not studied for suggests that the girl —",
          choices: [
            { letter: "A", text: "was caught off guard by the camera" },
            { letter: "B", text: "did not know how to spell her name" },
            { letter: "C", text: "was angry that she had to pose" },
            { letter: "D", text: "had lost the spelling bee that day" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "How does line 10 function in \"Microfilm, Reel 41\"?",
          choices: [
            { letter: "A", text: "It repeats the list of news items from line 4." },
            { letter: "B", text: "It explains why the machine hums so loudly." },
            { letter: "C", text: "It turns the poem from the town to a personal find." },
            { letter: "D", text: "It introduces the librarian as a new character." }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Lines 18 through 20 of \"Microfilm, Reel 41\" are ironic because —",
          choices: [
            { letter: "A", text: "the speaker laughs in a room meant for quiet" },
            { letter: "B", text: "the grandmother never entered a spelling bee" },
            { letter: "C", text: "the librarian does not notice the speaker" },
            { letter: "D", text: "a paper misspells a spelling champion's name" }
          ],
          correct: "D"
        },
        {
          id: "squint",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The poet writes that the girl is squinting rather than simply looking (line 13). Compared with looking, squinting suggests that she is —",
          choices: [
            { letter: "A", text: "staring proudly at the crowd" },
            { letter: "B", text: "straining against a bright light" },
            { letter: "C", text: "reading words from a page" },
            { letter: "D", text: "turning away from the camera" }
          ],
          correct: "B"
        },
        {
          id: "event",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "Which discovery leads directly to the speaker's laughter in line 16?",
          choices: [
            { letter: "A", text: "The caption spells the grandmother's name wrong." },
            { letter: "B", text: "The mayor's ribbon seems to hold the street together." },
            { letter: "C", text: "The feed store fire appears on the same reel." },
            { letter: "D", text: "The printed page comes out of the machine warm." }
          ],
          correct: "A"
        }
      ]
    },
    /* 15 · DRAMA · toy shop */
    {
      id: "g10-rl-c73-forty-three",
      family: "G10",
      title: "Forty-Three Horses",
      kind: "Drama · 10.RL",
      blurb: "Noor has quietly put her grandfather's handmade toys online. Now she has to tell him how many people want them.",
      level: 2,
      passage:
        "<p><em>A cramped toy shop at closing time. Wooden trains and puppets crowd the shelves. KWAME ASANTE, seventy-one, sands a rocking horse. His granddaughter NOOR, sixteen, hurries in holding a laptop.</em></p>" +
        "<p><strong>NOOR:</strong> " + N(1) + "Grandpa, sit down. " + N(2) + "No, really, put the sandpaper down and sit.</p>" +
        "<p><strong>KWAME:</strong> " + N(3) + "The horse does not sand itself, Noor.</p>" +
        "<p><strong>NOOR:</strong> <em>(turning the laptop toward him)</em> " + N(4) + "Forty-three orders. " + N(5) + "Since Sunday.</p>" +
        "<p><strong>KWAME:</strong> " + N(6) + "Orders for what?</p>" +
        "<p><strong>NOOR:</strong> " + N(7) + "For the rocking horses, the trains, the little acrobats on sticks. " + N(8) + "I took pictures of everything and made a shop page online. " + N(9) + "I was going to tell you when it got ten orders. " + N(10) + "Then it got forty-three.</p>" +
        "<p><strong>KWAME:</strong> <em>(slowly setting down the sandpaper)</em> " + N(11) + "Forty-three. " + N(12) + "Do you know how long one horse takes me?</p>" +
        "<p><strong>NOOR:</strong> " + N(13) + "Two weeks.</p>" +
        "<p><strong>KWAME:</strong> " + N(14) + "Two weeks if my hands are kind to me. " + N(15) + "Forty-three horses is a year and a half of work, and these people will want them by next month. " + N(16) + "You have made a promise in my name that my hands cannot keep.</p>" +
        "<p><strong>NOOR:</strong> " + N(17) + "I thought you'd be happy. " + N(18) + "You always say nobody wants wooden toys anymore.</p>" +
        "<p><strong>KWAME:</strong> " + N(19) + "I say a great many things at closing time. <em>(He walks to the window, where the last light falls across the shelves.)</em> " + N(20) + "When I was your age, my father carved and I painted. " + N(21) + "He used to say that a toy made in a hurry is only furniture for a shelf.</p>" +
        "<p><strong>NOOR:</strong> <em>(quietly)</em> " + N(22) + "So I'll write to them. " + N(23) + "I'll tell them it takes time. " + N(24) + "Some will cancel.</p>" +
        "<p><strong>KWAME:</strong> " + N(25) + "Some will. <em>(A pause. He picks up a second piece of sandpaper and holds it out to her.)</em> " + N(26) + "And some will wait, if we tell them the truth. " + N(27) + "Sit down, Noor. " + N(28) + "Not on the counter, here, beside me. " + N(29) + "If you are going to sell my horses, you had better learn how they are made.</p>" +
        "<p><em>NOOR takes the sandpaper. The lights fade on the two of them working side by side.</em></p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by the scene between Kwame and Noor?",
          choices: [
            { letter: "A", text: "Online stores will soon replace small family shops." },
            { letter: "B", text: "Grandparents rarely understand modern technology." },
            { letter: "C", text: "Careful craft takes time, even when demand grows." },
            { letter: "D", text: "It is wiser to keep good news to yourself." }
          ],
          correct: "C"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The conflict between Kwame and Noor arises mainly because —",
          choices: [
            { letter: "A", text: "her shop page has promised more toys than he can make" },
            { letter: "B", text: "he wants to close the shop and sell the rocking horses" },
            { letter: "C", text: "she broke a rocking horse while taking photographs" },
            { letter: "D", text: "the customers have complained about the toys' prices" }
          ],
          correct: "A"
        },
        {
          id: "char",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Kwame's words in sentences 14 through 16 show that he —",
          choices: [
            { letter: "A", text: "is excited to earn more money than ever before" },
            { letter: "B", text: "blames the customers for ordering too much" },
            { letter: "C", text: "plans to buy machines to speed up his work" },
            { letter: "D", text: "feels bound by promises made to customers" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "The stage direction in which Kwame walks to the window as the last light falls across the shelves mainly creates a mood of —",
          choices: [
            { letter: "A", text: "loud celebration" },
            { letter: "B", text: "quiet reflection" },
            { letter: "C", text: "sudden danger" },
            { letter: "D", text: "playful mischief" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the toy shop scene is most ironic?",
          choices: [
            { letter: "A", text: "Kwame says no one wants wooden toys, yet orders pour in." },
            { letter: "B", text: "Noor hurries in at closing time carrying a laptop." },
            { letter: "C", text: "Kwame's father carved toys while Kwame painted them." },
            { letter: "D", text: "Noor expects that some customers will cancel." }
          ],
          correct: "A"
        },
        {
          id: "saying",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "The saying of Kwame's father in sentence 21 mainly serves to —",
          choices: [
            { letter: "A", text: "show that Kwame never liked his father's toys" },
            { letter: "B", text: "suggest that the shop should sell furniture instead" },
            { letter: "C", text: "explain why Kwame refuses to rush his work" },
            { letter: "D", text: "reveal that Noor already knows how to carve" }
          ],
          correct: "C"
        },
        {
          id: "hands",
          sol: "10.RV.1.F",
          sub: "10.RV.1.F.1",
          stem: "When Kwame says it takes two weeks if my hands are kind to me (sentence 14), he most nearly means that —",
          choices: [
            { letter: "A", text: "he works faster when customers are polite" },
            { letter: "B", text: "Noor should help him with the painting" },
            { letter: "C", text: "his tools are old and need replacing" },
            { letter: "D", text: "his aging hands may ache or slow him down" }
          ],
          correct: "D"
        }
      ]
    },
    /* 16 · FUNCTIONAL TEXT · farmers market youth vendors */
    {
      id: "g10-ri-c73-youth-vendor",
      family: "G10",
      title: "Youth Vendor Program",
      kind: "Functional text · 10.RI",
      blurb: "The rules and application steps for students who want to run their own farmers market booth.",
      level: 1,
      passage:
        "<p><strong>Harbor Street Farmers Market: Youth Vendor Program</strong></p>" +
        "<p><strong>About the Program.</strong> " + N(1) + "The Youth Vendor Program gives students ages 14 to 18 a chance to run their own booth at the Harbor Street Farmers Market for one Saturday each month, June through September. " +
        N(2) + "Booth fees are waived for youth vendors, and each participant is paired with an experienced adult vendor who serves as a mentor. " +
        N(3) + "The program accepts up to twelve students each season.</p>" +
        "<p><strong>What You May Sell.</strong> " + N(4) + "All products must be grown, raised, or made by the applicant. " +
        N(5) + "Approved categories include fresh produce, potted plants, baked goods, and handmade crafts. " +
        N(6) + "Baked goods must be prepared in a kitchen that has passed county inspection; the community center on Dock Street offers its licensed kitchen free of charge to youth vendors on Friday evenings. " +
        N(7) + "Items bought from stores and resold are not permitted.</p>" +
        "<p><strong>How to Apply.</strong> " + N(8) + "Submit the online form by April 15. " +
        N(9) + "Include a short description of your product, a photo or sample, and a simple plan for pricing. " +
        N(10) + "Applicants under 16 must also submit a permission form signed by a parent or guardian. " +
        N(11) + "Finalists will be invited to a ten-minute interview with the market committee in early May.</p>" +
        "<p><strong>Requirements for Selected Vendors.</strong> " + N(12) + "Youth vendors must attend a two-hour training session on food safety, handling money, and customer service before their first market day. " +
        N(13) + "Vendors must arrive by 7:00 a.m. to set up and may not pack up before the market closes at 1:00 p.m. " +
        N(14) + "Each vendor must bring a table, a cash box with at least $20 in small bills, and a sign that shows prices clearly. " +
        N(15) + "A vendor who misses a scheduled market day without notifying the manager at least 48 hours in advance may lose the remaining dates.</p>" +
        "<p><strong>Questions?</strong> " + N(16) + "Find the market manager, Ms. Ines Calderon, at the information tent any Saturday morning, or leave a message at the market office, and someone will return your call within two business days.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the Harbor Street Youth Vendor guide?",
          choices: [
            { letter: "A", text: "It tells shoppers which booths sell the freshest produce." },
            { letter: "B", text: "It explains the program's rules, products, and application." },
            { letter: "C", text: "It describes the history of the Harbor Street market." },
            { letter: "D", text: "It lists the adult vendors who will serve as mentors." }
          ],
          correct: "B"
        },
        {
          id: "permission",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the guide, what must a 15-year-old applicant submit that a 17-year-old applicant does not?",
          choices: [
            { letter: "A", text: "a photo or a sample of the product" },
            { letter: "B", text: "a simple plan for setting prices" },
            { letter: "C", text: "a form signed by a parent or guardian" },
            { letter: "D", text: "a short description of the product" }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The Youth Vendor Program guide is written mainly for —",
          choices: [
            { letter: "A", text: "students who want to sell at the market" },
            { letter: "B", text: "county officials who inspect kitchens" },
            { letter: "C", text: "shoppers looking for handmade crafts" },
            { letter: "D", text: "adult vendors applying for booth space" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The bold headings in the Youth Vendor guide help a reader mainly by —",
          choices: [
            { letter: "A", text: "showing which rules matter least" },
            { letter: "B", text: "listing the market's vendors in order" },
            { letter: "C", text: "explaining why the program was started" },
            { letter: "D", text: "grouping related rules so they are easy to find" }
          ],
          correct: "D"
        },
        {
          id: "kitchen",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The guide mentions the community center kitchen on Dock Street in sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "show students a way to meet the inspection rule" },
            { letter: "B", text: "tell vendors where the market interviews are held" },
            { letter: "C", text: "warn that home baking is forbidden in the county" },
            { letter: "D", text: "advertise cooking classes for young vendors" }
          ],
          correct: "A"
        },
        {
          id: "waived",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 2, the word waived most nearly means —",
          choices: [
            { letter: "A", text: "paid in advance" },
            { letter: "B", text: "not charged" },
            { letter: "C", text: "doubled" },
            { letter: "D", text: "shared with a mentor" }
          ],
          correct: "B"
        },
        {
          id: "spect",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word inspection in sentence 6 contains the root spect-, as in spectator and respect. This root most nearly means —",
          choices: [
            { letter: "A", text: "clean" },
            { letter: "B", text: "build" },
            { letter: "C", text: "look" },
            { letter: "D", text: "pay" }
          ],
          correct: "C"
        }
      ]
    },
    /* 17 · ARGUMENT · funding balloon launches */
    {
      id: "g10-ri-c73-send-it-up",
      family: "G10",
      title: "Send It Up",
      kind: "Argument · 10.RI",
      blurb: "A senior argues that every high school in her district should launch a weather balloon each year.",
      level: 3,
      passage:
        "<p><strong>Send It Up: Why Our District Should Fund Balloon Launches</strong>, by Daniela Ferro, senior</p>" +
        "<p>" + N(1) + "Every spring, our district spends thousands of dollars on science textbooks that students skim, forget, and resell. " +
        N(2) + "I would like to propose a better use of a small part of that money: one high-altitude weather balloon launch per high school, each year. " +
        N(3) + "A launch costs roughly $900 for the balloon, the helium, a used camera, and a tracking device, which is less than the price of a single classroom set of lab manuals.</p>" +
        "<p>" + N(4) + "The first reason is engagement. " +
        N(5) + "Last year, Westbrook High's physics club ran a launch as a pilot project, and its membership grew from nine students to thirty-one within two months. " +
        N(6) + "Teachers there reported that students who had rarely spoken in class argued passionately over parachute sizes and wind data. " +
        N(7) + "No textbook chapter has ever produced that kind of argument.</p>" +
        "<p>" + N(8) + "The second reason is that a launch teaches skills that are hard to practice any other way. " +
        N(9) + "Students must predict a flight path, budget for supplies, write a safety plan, notify aviation officials, and work as a team under a real deadline. " +
        N(10) + "These are the same skills that employers say new graduates often lack.</p>" +
        "<p>" + N(11) + "Some board members worry about safety and liability. " +
        N(12) + "That concern is reasonable, but it is manageable. " +
        N(13) + "Small weather balloons are launched by the hundreds every day around the world, and the rules for flying them safely are clear and published. " +
        N(14) + "The district could require each launch to be supervised by a trained teacher and to follow a written checklist.</p>" +
        "<p>" + N(15) + "Others argue that the money should go to basics. " +
        N(16) + "But a launch is not a luxury; it is the basics, including math, physics, and writing, made visible. " +
        N(17) + "If even one student decides to become an engineer because she watched her own camera capture the curve of the Earth, the program will repay its cost many times over.</p>" +
        "<p>" + N(18) + "I am asking the board to fund a one-year trial at all four of our high schools. " +
        N(19) + "The sky is not the limit here. " +
        N(20) + "It is the classroom.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which sentence best states Daniela Ferro's central claim?",
          choices: [
            { letter: "A", text: "Sentence 2, proposing a yearly launch at each high school" },
            { letter: "B", text: "Sentence 13, noting that balloons fly by the hundreds daily" },
            { letter: "C", text: "Sentence 10, about skills that employers say graduates lack" },
            { letter: "D", text: "Sentence 7, comparing a launch to a textbook chapter" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which detail best supports Ferro's claim that balloon launches increase student engagement?",
          choices: [
            { letter: "A", text: "A launch costs roughly nine hundred dollars." },
            { letter: "B", text: "Balloon safety rules are clear and published." },
            { letter: "C", text: "A physics club grew from nine to thirty-one members." },
            { letter: "D", text: "The district buys textbooks every single spring." }
          ],
          correct: "C"
        },
        {
          id: "speculation",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which statement from Ferro's editorial is speculation rather than a reported fact?",
          choices: [
            { letter: "A", text: "Westbrook High's physics club ran a launch as a pilot project." },
            { letter: "B", text: "Small weather balloons are launched by the hundreds every day." },
            { letter: "C", text: "Teachers reported that quiet students argued over wind data." },
            { letter: "D", text: "One future engineer would repay the program many times over." }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "In Ferro's editorial, sentences 11 through 14 are organized mainly to —",
          choices: [
            { letter: "A", text: "list the steps of a launch in time order" },
            { letter: "B", text: "present an objection and then answer it" },
            { letter: "C", text: "compare two schools that tried launches" },
            { letter: "D", text: "explain the causes of rising textbook costs" }
          ],
          correct: "B"
        },
        {
          id: "cost",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "Ferro compares the cost of a launch to a classroom set of lab manuals in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "make the expense seem small and reasonable" },
            { letter: "B", text: "argue that lab manuals should be banned" },
            { letter: "C", text: "show that she has never used a lab manual" },
            { letter: "D", text: "suggest that cameras are too expensive" }
          ],
          correct: "A"
        },
        {
          id: "evaluate",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which statement best evaluates the evidence Ferro offers in sentence 5?",
          choices: [
            { letter: "A", text: "It is irrelevant, since it describes a different subject." },
            { letter: "B", text: "It proves that every school would see the same growth." },
            { letter: "C", text: "It is an opinion with no numbers to back it up." },
            { letter: "D", text: "It is relevant but comes from one pilot at one school." }
          ],
          correct: "D"
        },
        {
          id: "luxury",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 16, Ferro insists that a launch is not a luxury. Compared with a word like extra, luxury suggests something that is —",
          choices: [
            { letter: "A", text: "required by state law" },
            { letter: "B", text: "pleasant but costly and unneeded" },
            { letter: "C", text: "free for every student" },
            { letter: "D", text: "dangerous and poorly planned" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
