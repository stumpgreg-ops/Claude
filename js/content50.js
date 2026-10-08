/* SOL Labyrinth — Grade 9 long packs (VA 9.RL / 9.RI / 9.RV / 9.DSR): stories, a poem, a scene, articles,
 * a rules sheet, an argument and paired texts about a wildfire lookout, a quilting circle, a skate park and a
 * cooking contest (390–520 words). Original text only. Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LONG · LITERARY ───────────────────────── */
    {
      id: "g9-rl-c50-kettle-ridge",
      family: "G9",
      title: "The North Window",
      kind: "Literary · 9.RL",
      blurb: "Mireya thinks the fire lookout is the most boring place on earth, until her aunt hands her a notebook.",
      level: 2,
      passage:
        "<p>" + N(1) + "The lookout tower on Kettle Ridge was a glass room set on four steel legs, and for the first three days Mireya thought it was the most boring place on earth. " +
        N(2) + "Her aunt Ines had staffed the tower every summer for eleven years, and she spent each morning doing exactly what she had done the morning before: sweeping the floor, checking the radio, and walking slowly around the windows with a pair of binoculars. " +
        N(3) + "\"You're not looking for fire,\" Aunt Ines said on the first day. " +
        N(4) + "\"You're learning what the mountains look like when nothing is wrong.\"</p>" +
        "<p>" + N(5) + "Mireya did not see the point. " +
        N(6) + "The view was the same in every direction: ridges stacked behind ridges, each one paler than the last, like pages fanned out from a book. " +
        N(7) + "She counted the hours by the shadow of the tower sliding across the rocks below, and she texted her friends whenever the single bar of signal returned. " +
        N(8) + "By the fourth afternoon, she had stopped walking the windows at all.</p>" +
        "<p>" + N(9) + "On the fifth morning, Aunt Ines handed her a notebook. " +
        N(10) + "\"Draw what you see from the north window,\" she said. " +
        N(11) + "\"Every gap, every dead tree, every patch of rock.\" " +
        N(12) + "Mireya sighed, but she drew. " +
        N(13) + "She drew the burned snag shaped like a tuning fork, the pale scar where a slope had slid years ago, and the place on Bell Creek where morning fog always gathered and then thinned by nine. " +
        N(14) + "It took her two hours, and when she finished, she realized she could close her eyes and still see the whole valley.</p>" +
        "<p>" + N(15) + "Three days later, at a quarter past four, she saw a thin gray thread rising beyond Bell Creek. " +
        N(16) + "Her first thought was fog, but fog did not rise at four in the afternoon, and fog did not lean with the wind. " +
        N(17) + "She checked her drawing. " +
        N(18) + "Nothing had ever been there before. " +
        N(19) + "\"Aunt Ines,\" she said, and her voice came out smaller than she meant it to.</p>" +
        "<p>" + N(20) + "Her aunt was beside her in two steps. " +
        N(21) + "She swung the sighting ring of the fire finder until its thin wire lined up with the smoke, read the bearing aloud, and handed Mireya the radio. " +
        N(22) + "\"You found it,\" she said. " +
        N(23) + "\"You call it in.\" " +
        N(24) + "Mireya's hands shook as she pressed the button, but she read the numbers clearly, and the dispatcher repeated them back in a calm, flat voice. " +
        N(25) + "Within forty minutes, a helicopter was circling the thread of smoke, and by dark the small fire was out.</p>" +
        "<p>" + N(26) + "That night, Mireya sat on the catwalk with her notebook open on her knees. " +
        N(27) + "The ridges were black now, and the stars had come out over them one by one. " +
        N(28) + "She turned to a fresh page and began drawing the east window.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does Mireya's summer at the Kettle Ridge tower best support?",
          choices: [
            { letter: "A", text: "Close attention to ordinary things prepares a person to notice change." },
            { letter: "B", text: "Teenagers rarely appreciate places that have no phone signal." },
            { letter: "C", text: "Dangerous work in the wilderness should be left to adults." },
            { letter: "D", text: "The beauty of nature is best enjoyed in quiet solitude." }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Aunt Ines's words in sentences 3 and 4 suggest that a lookout's job depends mostly on —",
          choices: [
            { letter: "A", text: "having the newest equipment in the tower" },
            { letter: "B", text: "knowing the normal view well enough to spot a change" },
            { letter: "C", text: "reporting every cloud that appears over the ridges" },
            { letter: "D", text: "staying in radio contact with the dispatcher all day" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which sentence best shows that Mireya has become committed to the lookout's work by the end of the story?",
          choices: [
            { letter: "A", text: "Sentence 7, in which she counts the hours by the tower's shadow" },
            { letter: "B", text: "Sentence 12, in which she sighs but begins to draw" },
            { letter: "C", text: "Sentence 19, in which her voice comes out small" },
            { letter: "D", text: "Sentence 28, in which she starts drawing the east window" }
          ],
          correct: "D"
        },
        {
          id: "simile",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 6, comparing the ridges to pages fanned out from a book mainly helps the reader picture —",
          choices: [
            { letter: "A", text: "a map that Mireya keeps tucked in her notebook" },
            { letter: "B", text: "the drawings Mireya will later make of the valley" },
            { letter: "C", text: "layers of hills that grow fainter with distance" },
            { letter: "D", text: "a storm moving slowly across the open valley" }
          ],
          correct: "C"
        },
        {
          id: "notebook",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the notebook assignment in sentences 9–14 shape the events that follow?",
          choices: [
            { letter: "A", text: "It gives Mireya a record that lets her recognize the smoke as new." },
            { letter: "B", text: "It distracts Mireya so that she nearly misses the smoke." },
            { letter: "C", text: "It convinces Aunt Ines that Mireya should go home early." },
            { letter: "D", text: "It teaches Mireya how to operate the tower's fire finder." }
          ],
          correct: "A"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the setting of the glass tower affect Mireya during her first days on Kettle Ridge?",
          choices: [
            { letter: "A", text: "Its height frightens her so much that she avoids the catwalk." },
            { letter: "B", text: "Its isolation makes her eager to radio for help." },
            { letter: "C", text: "Its wide windows make her want to become an artist." },
            { letter: "D", text: "Its unchanging view leaves her bored and restless." }
          ],
          correct: "D"
        },
        {
          id: "lean",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 16, the phrase fog did not lean with the wind uses lean to mean —",
          choices: [
            { letter: "A", text: "grow thinner" },
            { letter: "B", text: "tilt to one side" },
            { letter: "C", text: "vanish quickly" },
            { letter: "D", text: "sink downward" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the final paragraph (sentences 26–28) is best described as —",
          choices: [
            { letter: "A", text: "anxious and watchful" },
            { letter: "B", text: "proud and boastful" },
            { letter: "C", text: "calm and quietly devoted" },
            { letter: "D", text: "lonely and regretful" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c50-nine-patch",
      family: "G9",
      title: "Nine-Patch",
      kind: "Literary · 9.RL",
      blurb: "Hollis joins a Tuesday quilting circle for service hours and secretly re-sews every crooked seam.",
      level: 3,
      passage:
        "<p>" + N(1) + "The Tuesday quilting circle met in the back room of the Fenwick Street community center, and on my first night I was the only person there under sixty. " +
        N(2) + "My mother had signed me up because I needed twenty service hours by June, and because, she said, I had hands that never sat still anyway. " +
        N(3) + "I had imagined something like a craft class. " +
        N(4) + "Instead I found six women and one retired mail carrier named Mr. Halvorsen sitting around two folding tables pushed together, their needles moving in a rhythm so steady it sounded almost like rain.</p>" +
        "<p>" + N(5) + "They were making a quilt for the Ochoa family, whose house had burned in the Cedar Flats fire that spring. " +
        N(6) + "Mrs. Nwosu, who ran the circle, handed me a stack of blue and yellow squares and a paper pattern called a nine-patch. " +
        N(7) + "\"Nine squares, three rows, quarter-inch seams,\" she said. " +
        N(8) + "\"Simple.\" " +
        N(9) + "It was not simple. " +
        N(10) + "My seams wandered like a dog on a walk, and when I pressed my first block flat, the corners met about as well as strangers at a bus stop.</p>" +
        "<p>" + N(11) + "For the next three Tuesdays, I did something I did not tell anyone about. " +
        N(12) + "I took my blocks home, picked out every crooked seam with my mother's seam ripper, and sewed them again at the kitchen table until midnight. " +
        N(13) + "Each Tuesday I brought back fewer blocks than I had promised, and each Tuesday Mrs. Nwosu nodded and said nothing.</p>" +
        "<p>" + N(14) + "On the fourth Tuesday, she asked me to help her carry a box from the storage closet. " +
        N(15) + "Inside was an old quilt, faded to the color of weak tea. " +
        N(16) + "\"Our circle's first,\" she said, unfolding one corner. " +
        N(17) + "\"Thirty-eight years old.\" " +
        N(18) + "She pointed to a block near the edge. " +
        N(19) + "Its points did not meet, one strip was visibly wider than the others, and the thread had been knotted twice in the same place, as if someone had started over and then decided not to. " +
        N(20) + "\"Mr. Halvorsen made that one,\" she said. " +
        N(21) + "\"His first block.\" " +
        N(22) + "Across the room, Mr. Halvorsen looked up and raised his eyebrows at me, the way people do when they have been caught in a story they don't mind being part of.</p>" +
        "<p>" + N(23) + "\"A quilt with no mistakes in it,\" Mrs. Nwosu said, folding the corner back, \"only has one person in it.\"</p>" +
        "<p>" + N(24) + "That night I did not take my blocks home. " +
        N(25) + "The next Tuesday, I finished four more, and one of them had a corner that missed by almost an eighth of an inch. " +
        N(26) + "I looked at it for a long time. " +
        N(27) + "Then I set it on the pile with the others, and Mrs. Nwosu, without looking up, slid it into the row where it belonged.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the story of Hollis's nine-patch blocks most clearly develop?",
          choices: [
            { letter: "A", text: "Skill at a craft depends mostly on natural talent." },
            { letter: "B", text: "Service hours teach young people to respect their elders." },
            { letter: "C", text: "Shared work gains value from each member's imperfect part." },
            { letter: "D", text: "Mistakes should be fixed in private before anyone notices." }
          ],
          correct: "C"
        },
        {
          id: "motive",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that Mrs. Nwosu shows the narrator the circle's first quilt because she —",
          choices: [
            { letter: "A", text: "has guessed that he is redoing his blocks out of embarrassment" },
            { letter: "B", text: "wants him to repair Mr. Halvorsen's old block for the Ochoas" },
            { letter: "C", text: "needs his help deciding which quilt to give away this year" },
            { letter: "D", text: "hopes he will finish his service hours somewhere else" }
          ],
          correct: "A"
        },
        {
          id: "anxious",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows that the narrator worries about how others will judge his sewing?",
          choices: [
            { letter: "A", text: "Sentence 3, in which he expected a craft class" },
            { letter: "B", text: "Sentence 9, in which he admits the work was not simple" },
            { letter: "C", text: "Sentence 25, in which he finishes four more blocks" },
            { letter: "D", text: "Sentence 12, in which he secretly re-sews his blocks at home" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 4, comparing the rhythm of the needles to rain mainly creates a mood that is —",
          choices: [
            { letter: "A", text: "tense and urgent" },
            { letter: "B", text: "steady and peaceful" },
            { letter: "C", text: "gloomy and sorrowful" },
            { letter: "D", text: "noisy and chaotic" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The narrator's tone when he describes his first block in sentence 10 is best described as —",
          choices: [
            { letter: "A", text: "wry and self-mocking" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "proud and satisfied" },
            { letter: "D", text: "fearful and tearful" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "How does the final paragraph (sentences 24–27) connect to the third paragraph (sentences 11–13)?",
          choices: [
            { letter: "A", text: "It repeats the narrator's habit of reworking blocks late at night." },
            { letter: "B", text: "It reveals that the Ochoa family has received the finished quilt." },
            { letter: "C", text: "It reverses his secret habit, showing that he now accepts a flaw." },
            { letter: "D", text: "It explains why Mrs. Nwosu never mentioned the missing blocks." }
          ],
          correct: "C"
        },
        {
          id: "saying",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 23, Mrs. Nwosu says a quilt with no mistakes only has one person in it. She most nearly means that —",
          choices: [
            { letter: "A", text: "only one expert should sew the blocks of a final quilt" },
            { letter: "B", text: "a perfect quilt is usually too small to be useful" },
            { letter: "C", text: "each member of the circle should make a quilt alone" },
            { letter: "D", text: "uneven blocks are a sign that many hands worked on it" }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the story is told from Hollis's first-person point of view, the reader —",
          choices: [
            { letter: "A", text: "learns exactly what Mrs. Nwosu was thinking each Tuesday" },
            { letter: "B", text: "knows about his midnight re-sewing, which he hides from the circle" },
            { letter: "C", text: "sees the Ochoa family's reaction to the finished quilt" },
            { letter: "D", text: "hears Mr. Halvorsen describe how he made his first block" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c50-drop-in",
      family: "G9",
      title: "Drop In",
      kind: "Literary · 9.RL",
      blurb: "Kofi has stood at the edge of the deep bowl eleven times. A girl with a shark on her board changes the twelfth.",
      level: 1,
      passage:
        "<p>" + N(1) + "Kofi had stood at the edge of the deep bowl at Millbrook Skate Park on eleven different afternoons. " +
        N(2) + "Each time, he set the tail of his board on the metal lip, put his back foot on it, and looked down. " +
        N(3) + "Each time, the bowl looked deeper than it had the day before. " +
        N(4) + "And each time, he stepped back and skated the small ramps instead.</p>" +
        "<p>" + N(5) + "The bowl was six feet deep, smooth gray concrete curving down like the inside of a giant cereal bowl. " +
        N(6) + "Older skaters dropped into it without even pausing. " +
        N(7) + "They leaned forward, stomped the front of the board down, and rolled away as if the drop were a single step on a staircase. " +
        N(8) + "Kofi knew the steps. " +
        N(9) + "He had watched videos, and his cousin Ama had explained it to him twice. " +
        N(10) + "Lean forward, not back. " +
        N(11) + "Commit all the way. " +
        N(12) + "The problem was not knowing what to do. " +
        N(13) + "The problem was doing it.</p>" +
        "<p>" + N(14) + "On the twelfth afternoon, a small girl in a pink helmet rolled up beside him. " +
        N(15) + "She looked about eight, and her board had a cartoon shark on the bottom. " +
        N(16) + "\"Are you going to go?\" she asked. " +
        N(17) + "\"Maybe,\" Kofi said. " +
        N(18) + "\"Can you show me how?\" she asked. " +
        N(19) + "\"My brother says I'm too little for the bowl.\"</p>" +
        "<p>" + N(20) + "Kofi looked at her, then at the shallow quarter-pipe near the fence, which was only two feet tall. " +
        N(21) + "\"Not the bowl,\" he said. " +
        N(22) + "\"Start over there.\" " +
        N(23) + "He walked her to the quarter-pipe and showed her where to put her foot. " +
        N(24) + "\"The scary part is leaning forward,\" he told her. " +
        N(25) + "\"Your body wants to lean back, but if you lean back, the board shoots out and you fall. " +
        N(26) + "You have to trust it.\"</p>" +
        "<p>" + N(27) + "The girl, whose name was Lulu, set her tail on the little ramp's edge and stared down. " +
        N(28) + "Then she leaned forward and dropped in. " +
        N(29) + "She wobbled, waved her arms, and rolled all the way to the fence, shrieking with laughter. " +
        N(30) + "\"Again!\" she yelled, already running back up.</p>" +
        "<p>" + N(31) + "Kofi watched her do it four more times. " +
        N(32) + "Then he walked back to the deep bowl. " +
        N(33) + "He set his tail on the lip and put his back foot down. " +
        N(34) + "The bowl looked exactly as deep as always. " +
        N(35) + "He heard his own voice in his head: you have to trust it. " +
        N(36) + "He leaned forward, and the concrete rushed up to meet him, and then he was rolling, fast and low, across the bottom and up the other side.</p>" +
        "<p>" + N(37) + "From the quarter-pipe, Lulu cheered louder than anyone.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best supported by Kofi's twelfth afternoon at Millbrook Skate Park?",
          choices: [
            { letter: "A", text: "Older skaters should do more to help beginners." },
            { letter: "B", text: "Helping someone else face a fear can build courage." },
            { letter: "C", text: "Watching videos is the best way to learn a skill." },
            { letter: "D", text: "Young children do not belong at large skate parks." }
          ],
          correct: "B"
        },
        {
          id: "kofi",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Kofi at the beginning of the story?",
          choices: [
            { letter: "A", text: "He is careless and eager to show off for others." },
            { letter: "B", text: "He is bored with skating and ready to quit." },
            { letter: "C", text: "He is angry at the older skaters in the bowl." },
            { letter: "D", text: "He knows how to drop in but is afraid to try." }
          ],
          correct: "D"
        },
        {
          id: "stair",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 7, comparing the drop to a single step on a staircase mainly shows that the older skaters —",
          choices: [
            { letter: "A", text: "treat the drop as easy and ordinary" },
            { letter: "B", text: "worry about falling down the slope" },
            { letter: "C", text: "move slowly and carefully into the bowl" },
            { letter: "D", text: "practice on stairs before they skate" }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which event is the turning point that leads Kofi to drop into the bowl at last?",
          choices: [
            { letter: "A", text: "Ama explains the steps to him a second time." },
            { letter: "B", text: "An older skater invites him into the bowl." },
            { letter: "C", text: "He watches Lulu succeed by using his advice." },
            { letter: "D", text: "The bowl finally begins to look less deep." }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that Kofi sends Lulu to the quarter-pipe instead of the bowl because he —",
          choices: [
            { letter: "A", text: "wants to keep the deep bowl for himself" },
            { letter: "B", text: "does not believe she can skate at all" },
            { letter: "C", text: "thinks a smaller ramp is a safer start" },
            { letter: "D", text: "is afraid her brother will be angry" }
          ],
          correct: "C"
        },
        {
          id: "commit",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 11, the word commit most nearly means to —",
          choices: [
            { letter: "A", text: "go ahead fully, without holding back" },
            { letter: "B", text: "make a promise to a friend" },
            { letter: "C", text: "make an embarrassing error" },
            { letter: "D", text: "memorize a list of steps" }
          ],
          correct: "A"
        },
        {
          id: "rushed",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 36, the phrase the concrete rushed up to meet him mainly creates a feeling of —",
          choices: [
            { letter: "A", text: "sadness and regret" },
            { letter: "B", text: "confusion and doubt" },
            { letter: "C", text: "boredom and calm" },
            { letter: "D", text: "speed and excitement" }
          ],
          correct: "D"
        },
        {
          id: "edge",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the setting at the edge of the deep bowl affect Kofi in sentences 1–4?",
          choices: [
            { letter: "A", text: "It makes him want to leave the park for good." },
            { letter: "B", text: "Its depth makes him hesitate again and again." },
            { letter: "C", text: "Its crowd makes him embarrassed to practice." },
            { letter: "D", text: "Its smooth surface makes him overconfident." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── LONG · INFORMATIONAL ───────────────────────── */
    {
      id: "g9-ri-c50-lookouts",
      family: "G9",
      title: "Eyes on the Ridgeline",
      kind: "Informational · 9.RI",
      blurb: "Cameras and satellites watch for wildfire now. So why do some forests still post a person in a glass tower?",
      level: 2,
      passage:
        "<p>" + N(1) + "Before satellites and mountaintop cameras, the first warning of a wildfire often came from a person sitting in a small room at the top of a mountain. " +
        N(2) + "These fire lookouts lived in towers or cabins with windows on every side, and for weeks at a time their job was simply to watch. " +
        N(3) + "Although many towers have closed, some are still staffed every summer, and the reasons tell us something about how people and technology work together.</p>" +
        "<p>" + N(4) + "A lookout's main tool is a device called a fire finder: a round map of the surrounding land, mounted flat on a stand in the center of the room, with a sighting ring that turns around its edge. " +
        N(5) + "When the lookout spots smoke, he or she turns the ring until two sights line up with it, then reads the bearing, the direction measured in degrees from north. " +
        N(6) + "One bearing tells the dispatcher which direction the smoke lies in, but not how far away it is. " +
        N(7) + "For that, a second tower is needed. " +
        N(8) + "When two lookouts report bearings to the same smoke, the dispatcher draws both lines on a map, and the fire sits where the lines cross. " +
        N(9) + "This method, called cross-sighting, can place a fire within a fraction of a mile.</p>" +
        "<p>" + N(10) + "Much of the job is quieter than it sounds. " +
        N(11) + "Lookouts record the weather several times a day, measuring temperature, humidity, and wind. " +
        N(12) + "They scan the horizon in a set pattern, often every fifteen minutes. " +
        N(13) + "Many keep sketches or panoramic photographs of the view so that they can tell a new column of smoke from dust kicked up on a logging road or mist rising from a river. " +
        N(14) + "One longtime lookout described the work as \"memorizing a landscape until it can surprise you.\"</p>" +
        "<p>" + N(15) + "In the middle of the twentieth century, airplane patrols began to take over much of this work, and many towers were closed or torn down. " +
        N(16) + "Today, networks of cameras send images to screens in dispatch offices, and some systems use software that flags possible smoke automatically. " +
        N(17) + "Satellites can detect the heat of large fires from orbit.</p>" +
        "<p>" + N(18) + "Yet in many forests, human lookouts remain. " +
        N(19) + "Cameras can be fooled by haze and glare, and software sometimes flags clouds or dust as smoke, sending crews on false runs. " +
        N(20) + "A trained person can often tell the difference in seconds by watching how a column moves, what color it is, and whether it grows. " +
        N(21) + "Lookouts also serve as radio relays for crews working in deep canyons, where signals cannot reach a dispatch office directly. " +
        N(22) + "In some places, cameras and people now work side by side: the camera watches constantly, and the lookout decides what the camera has really seen.</p>" +
        "<p>" + N(23) + "The glass rooms on the ridgelines may look like relics of an older time. " +
        N(24) + "For now, though, the most reliable smoke detector in some forests is still a patient human being with a pair of binoculars and a very good memory.</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the article about fire lookouts?",
          choices: [
            { letter: "A", text: "Every lookout tower closed once airplanes began patrolling forests." },
            { letter: "B", text: "Despite new technology, trained lookouts still do useful work." },
            { letter: "C", text: "Cameras are now more reliable than people at spotting smoke." },
            { letter: "D", text: "Lookouts spend most of each day recording the weather." }
          ],
          correct: "B"
        },
        {
          id: "twotowers",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the article, why does a dispatcher need reports from two towers to locate a fire?",
          choices: [
            { letter: "A", text: "One tower cannot see in every direction at once." },
            { letter: "B", text: "The second tower checks the first tower's weather readings." },
            { letter: "C", text: "Two lookouts must agree before any crew is sent out." },
            { letter: "D", text: "A single bearing shows direction but not distance." }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the second paragraph of the lookout article (sentences 4–9) mainly organized?",
          choices: [
            { letter: "A", text: "as a step-by-step explanation of how a fire is located" },
            { letter: "B", text: "as a comparison of older towers and newer towers" },
            { letter: "C", text: "as a list of the problems with using a fire finder" },
            { letter: "D", text: "as a story about one lookout's long career" }
          ],
          correct: "A"
        },
        {
          id: "quote",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes the lookout's description of the work in sentence 14 mainly to —",
          choices: [
            { letter: "A", text: "show that most lookouts find the job dull" },
            { letter: "B", text: "prove that western forests have the most fires" },
            { letter: "C", text: "stress how well a lookout must know the normal view" },
            { letter: "D", text: "explain how panoramic photographs are taken" }
          ],
          correct: "C"
        },
        {
          id: "falserun",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the article, what can cause a camera system to send crews on a false run?",
          choices: [
            { letter: "A", text: "Radio signals that fail inside deep canyons" },
            { letter: "B", text: "Satellites that detect only the largest fires" },
            { letter: "C", text: "Lookouts who scan the horizon too slowly" },
            { letter: "D", text: "Software that mistakes clouds or dust for smoke" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the lookout article expresses a judgment rather than a plain fact?",
          choices: [
            { letter: "A", text: "Sentence 24, calling a patient person the most reliable smoke detector" },
            { letter: "B", text: "Sentence 11, about recording temperature, humidity, and wind" },
            { letter: "C", text: "Sentence 17, about satellites detecting the heat of large fires" },
            { letter: "D", text: "Sentence 8, about drawing two lines on a dispatcher's map" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the claim that a human lookout can do something a camera cannot?",
          choices: [
            { letter: "A", text: "Sentence 16, about networks of cameras in dispatch offices" },
            { letter: "B", text: "Sentence 15, about airplane patrols replacing many towers" },
            { letter: "C", text: "Sentence 20, about judging how a column moves and grows" },
            { letter: "D", text: "Sentence 12, about scanning the horizon every fifteen minutes" }
          ],
          correct: "C"
        },
        {
          id: "relics",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 23, the word relics most nearly means —",
          choices: [
            { letter: "A", text: "dangerous places" },
            { letter: "B", text: "leftovers from the past" },
            { letter: "C", text: "costly buildings" },
            { letter: "D", text: "secret hideouts" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c50-flow",
      family: "G9",
      title: "Designing for Flow",
      kind: "Informational · 9.RI",
      blurb: "Every curve in a skate park is a calculation, and one town found that its most useful design tool was a meeting.",
      level: 3,
      passage:
        "<p>" + N(1) + "To someone standing outside the fence, a skate park can look like a random collection of concrete hills and holes. " +
        N(2) + "To the people who design them, every curve is a calculation. " +
        N(3) + "Modern skate parks are planned around an idea designers call flow: the ability of a rider to move from one feature to the next without stopping, using the speed gained on one slope to climb the next.</p>" +
        "<p>" + N(4) + "The basic building block of flow is the transition, the curved surface that connects a flat floor to a steep or vertical wall. " +
        N(5) + "A tight transition, with a small radius, throws a rider upward quickly and demands fast reflexes. " +
        N(6) + "A wide, mellow transition gives a beginner more time to react. " +
        N(7) + "Most well-designed parks mix the two, placing gentler features near the entrance and steeper ones deeper inside, so that skaters of different abilities can share the space without constantly crossing paths.</p>" +
        "<p>" + N(8) + "Materials matter as much as shapes. " +
        N(9) + "Early parks were sometimes built from wood or from rough concrete that cracked within a few seasons. " +
        N(10) + "Today most designers prefer smooth concrete that is finished by hand with steel trowels while still wet, until it is nearly as slick as glass. " +
        N(11) + "The edges of bowls are often capped with metal pipe or stone blocks, called coping, which lets riders grind along the rim. " +
        N(12) + "A poorly finished surface does more than slow a skater down; a single seam left a quarter of an inch too high can catch a wheel and send a rider sprawling.</p>" +
        "<p>" + N(13) + "Perhaps the most surprising tool in a designer's kit is a public meeting. " +
        N(14) + "When the town of Ridley Falls planned its park, the design firm held three evening workshops at which local skaters, some as young as ten, sketched features on large paper maps. " +
        N(15) + "The skaters asked for a long, low ledge for practicing tricks, a shallow bowl for beginners, and, to the designers' surprise, more shade. " +
        N(16) + "Two shade trees and a covered bench were added to the final plan. " +
        N(17) + "A year after opening, the town's parks department reported that the park drew more than two hundred visitors on a typical summer weekend and that complaints about skateboarders on downtown sidewalks had dropped by about half.</p>" +
        "<p>" + N(18) + "Designers are careful not to claim that a park alone causes such changes. " +
        N(19) + "A town that builds a skate park may also be adding programs, lights, or patrols at the same time. " +
        N(20) + "Still, many planners argue that involving young people in the design gives them a sense of ownership that a fence and a sign cannot. " +
        N(21) + "A park that skaters helped to shape, the reasoning goes, is a park they are more likely to protect.</p>" +
        "<p>" + N(22) + "In the end, the best skate parks share something with the best playgrounds and the best city streets. " +
        N(23) + "They are built not just for movement but for the people doing the moving.</p>",
      claims: [
        {
          id: "summary",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best summarizes the article on skate park design?",
          choices: [
            { letter: "A", text: "Skate parks cut sidewalk complaints in every town that builds one." },
            { letter: "B", text: "Hand-finished concrete is the single most important part of a park." },
            { letter: "C", text: "Good parks combine careful shapes, smooth materials, and skaters' ideas." },
            { letter: "D", text: "Beginners and experts are safest when they skate at separate parks." }
          ],
          correct: "C"
        },
        {
          id: "contrast",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author contrasts tight and wide transitions in sentences 5 and 6 mainly to —",
          choices: [
            { letter: "A", text: "explain why designers place features for different skill levels" },
            { letter: "B", text: "argue that tight transitions are too dangerous to build" },
            { letter: "C", text: "show that beginners prefer coping made of stone" },
            { letter: "D", text: "describe how concrete is smoothed by hand" }
          ],
          correct: "A"
        },
        {
          id: "mellow",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 6, the word mellow most nearly means —",
          choices: [
            { letter: "A", text: "brightly colored" },
            { letter: "B", text: "recently built" },
            { letter: "C", text: "slippery when wet" },
            { letter: "D", text: "gradual and gentle" }
          ],
          correct: "D"
        },
        {
          id: "seam",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the article, why can a small flaw in a park's surface be dangerous?",
          choices: [
            { letter: "A", text: "It causes the concrete to crack within one season." },
            { letter: "B", text: "A raised seam can catch a wheel and throw a rider." },
            { letter: "C", text: "It makes the coping come loose from the rim." },
            { letter: "D", text: "It lets rainwater collect at the bottom of bowls." }
          ],
          correct: "B"
        },
        {
          id: "claim",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the skate park article presents a reasoned belief rather than a confirmed fact?",
          choices: [
            { letter: "A", text: "Sentence 16, about the shade trees and covered bench" },
            { letter: "B", text: "Sentence 21, about skaters protecting a park they helped shape" },
            { letter: "C", text: "Sentence 10, about concrete finished with steel trowels" },
            { letter: "D", text: "Sentence 11, about coping that caps the edges of bowls" }
          ],
          correct: "B"
        },
        {
          id: "ridley",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the author organize sentences 13–17 about Ridley Falls?",
          choices: [
            { letter: "A", text: "as a definition followed by examples of coping" },
            { letter: "B", text: "as a problem followed by several rejected solutions" },
            { letter: "C", text: "as a comparison between the parks of two towns" },
            { letter: "D", text: "as an example of how public input shaped one park" }
          ],
          correct: "D"
        },
        {
          id: "caution",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence best supports the author's caution that a park alone may not explain the drop in complaints?",
          choices: [
            { letter: "A", text: "Sentence 19, about towns adding programs, lights, or patrols" },
            { letter: "B", text: "Sentence 17, about two hundred visitors on a summer weekend" },
            { letter: "C", text: "Sentence 15, about skaters asking for more shade" },
            { letter: "D", text: "Sentence 7, about gentler features near the entrance" }
          ],
          correct: "A"
        },
        {
          id: "calc",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 2, the statement that every curve is a calculation means that —",
          choices: [
            { letter: "A", text: "designers do the math only after a park is built" },
            { letter: "B", text: "skaters must measure each ramp before riding it" },
            { letter: "C", text: "each curve is carefully planned rather than random" },
            { letter: "D", text: "curved shapes cost more to pour than flat ones" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · FUNCTIONAL TEXT ───────────────────────── */
    {
      id: "g9-ri-c50-cookoff-rules",
      family: "G9",
      title: "Cook-Off Entry Rules",
      kind: "Functional text · 9.RI",
      blurb: "One pot, ninety minutes, and a market ingredient: the official rules for the Riverside Youth Cook-Off.",
      level: 1,
      passage:
        "<p><strong>Riverside Youth Cook-Off: Official Entry Rules</strong></p>" +
        "<p>" + N(1) + "The Riverside Community Kitchen invites cooks ages 13 to 18 to enter its fourth annual Youth Cook-Off on Saturday, April 18, at the Riverside Recreation Center. " +
        N(2) + "Please read every section below before you submit an entry form.</p>" +
        "<p><strong>Who May Enter</strong> " + N(3) + "Contestants may enter alone or in teams of two. " +
        N(4) + "Every team member must be between 13 and 18 years old on the day of the contest. " +
        N(5) + "Each cook may appear on only one entry.</p>" +
        "<p><strong>The Theme</strong> " + N(6) + "This year's theme is \"One Pot, Many Hands.\" " +
        N(7) + "Every dish must be cooked in a single pot or pan and must include at least one ingredient bought at the Riverside Saturday Market, such as local greens, eggs, or beans. " +
        N(8) + "Contestants must bring a receipt or a market sticker as proof.</p>" +
        "<p><strong>Registration</strong> " + N(9) + "Entry forms are due by 5:00 p.m. on Friday, April 3. " +
        N(10) + "Forms may be dropped off at the front desk of the recreation center or emailed to the address printed on the form. " +
        N(11) + "Late forms will not be accepted for any reason. " +
        N(12) + "There is no entry fee, but each entry must include a written recipe listing every ingredient so that judges can check for common allergens.</p>" +
        "<p><strong>On Contest Day</strong> " + N(13) + "Check-in begins at 8:00 a.m., and cooking starts at 9:00 a.m. sharp. " +
        N(14) + "Each entry receives one burner, one cutting board, and a ninety-minute cooking period. " +
        N(15) + "Contestants must bring their own pot or pan, knives, and ingredients. " +
        N(16) + "Ingredients may be washed ahead of time, but no chopping, mixing, or cooking may be done before the clock starts. " +
        N(17) + "An adult volunteer will be stationed between every two cooking tables to watch for safety problems, but volunteers may not touch ingredients or give cooking advice.</p>" +
        "<p><strong>Judging</strong> " + N(18) + "Three judges will score each dish on taste (40 points), use of the theme (30 points), presentation (20 points), and kitchen safety and cleanliness (10 points). " +
        N(19) + "Ties will be broken by the taste score. " +
        N(20) + "Winners will be announced at 12:30 p.m. in the main gym.</p>" +
        "<p><strong>Prizes</strong> " + N(21) + "The first-place entry will receive a $150 gift card to the Saturday Market and the chance to have its recipe served at the Community Kitchen's spring dinner. " +
        N(22) + "Second and third place will receive cookbooks and kitchen tools donated by local businesses.</p>" +
        "<p><strong>Questions?</strong> " + N(23) + "Call the Community Kitchen office on any weekday afternoon, and a staff member will be glad to help. " +
        N(24) + "We look forward to tasting what you create.</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the main purpose of the Riverside Youth Cook-Off rules sheet?",
          choices: [
            { letter: "A", text: "to explain who may enter and how the contest will run" },
            { letter: "B", text: "to persuade local adults to volunteer as judges" },
            { letter: "C", text: "to advertise the foods sold at the Saturday Market" },
            { letter: "D", text: "to share winning recipes from earlier contests" }
          ],
          correct: "A"
        },
        {
          id: "before",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the rules, which task may a contestant do before the cooking clock starts?",
          choices: [
            { letter: "A", text: "Chop the vegetables" },
            { letter: "B", text: "Mix the sauce" },
            { letter: "C", text: "Wash the ingredients" },
            { letter: "D", text: "Heat the pot" }
          ],
          correct: "C"
        },
        {
          id: "rejected",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Based on the rules, which entry would NOT be accepted?",
          choices: [
            { letter: "A", text: "A team made up of a 14-year-old and a 17-year-old" },
            { letter: "B", text: "A form emailed at 6:00 p.m. on Friday, April 3" },
            { letter: "C", text: "A solo cook using eggs bought at the market" },
            { letter: "D", text: "An entry with a recipe that lists every ingredient" }
          ],
          correct: "B"
        },
        {
          id: "headings",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The bold headings on the cook-off rules sheet mainly help readers by —",
          choices: [
            { letter: "A", text: "ranking the rules from most to least important" },
            { letter: "B", text: "showing the order in which judges score dishes" },
            { letter: "C", text: "explaining how the contest first began" },
            { letter: "D", text: "grouping the rules by topic so they are easy to find" }
          ],
          correct: "D"
        },
        {
          id: "safety",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that the organizers are concerned about safety during the cooking period?",
          choices: [
            { letter: "A", text: "Sentence 19, about breaking ties with the taste score" },
            { letter: "B", text: "Sentence 21, about the gift card for first place" },
            { letter: "C", text: "Sentence 17, about adult volunteers at the tables" },
            { letter: "D", text: "Sentence 10, about dropping off forms at the desk" }
          ],
          correct: "C"
        },
        {
          id: "judging",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best summarizes the Judging section (sentences 18–20)?",
          choices: [
            { letter: "A", text: "Presentation counts for more points than any other category." },
            { letter: "B", text: "Judges score four categories, and taste counts most and breaks ties." },
            { letter: "C", text: "Every team that finishes on time receives a prize from the judges." },
            { letter: "D", text: "Winners are chosen by a vote of all the contestants at 12:30." }
          ],
          correct: "B"
        },
        {
          id: "sharp",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 13, the word sharp most nearly means —",
          choices: [
            { letter: "A", text: "with a strong flavor" },
            { letter: "B", text: "with a fine edge" },
            { letter: "C", text: "in a loud voice" },
            { letter: "D", text: "exactly on time" }
          ],
          correct: "D"
        },
        {
          id: "example",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The rules mention local greens, eggs, or beans in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "show contestants what counts as a market ingredient" },
            { letter: "B", text: "list the only foods that are allowed in the contest" },
            { letter: "C", text: "recommend the ingredients in last year's winning dish" },
            { letter: "D", text: "warn contestants about foods that cause allergies" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── LONG · ARGUMENT ───────────────────────── */
    {
      id: "g9-ri-c50-menu-contest",
      family: "G9",
      title: "Let Students Cook the Menu",
      kind: "Argument · 9.RI",
      blurb: "A student editorial argues that a yearly cooking contest could fix what ends up in the cafeteria trash.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every day at Eastbrook High, roughly a third of the food served at lunch ends up in the trash. " +
        N(2) + "I know because last spring our environmental club spent two weeks weighing the cafeteria's waste bins, and the numbers were hard to ignore. " +
        N(3) + "The problem is not that our cafeteria staff work carelessly; they work hard on a tight budget. " +
        N(4) + "The problem is that students have almost no say in what is served. " +
        N(5) + "Eastbrook should fix that by holding a yearly student cooking contest and adding the winning dish to the lunch menu.</p>" +
        "<p>" + N(6) + "A contest would give students a reason to care about school food. " +
        N(7) + "When people help create something, they are more likely to value it. " +
        N(8) + "A student who has watched a classmate's lentil soup win a vote is far more likely to try that soup than one more mystery casserole. " +
        N(9) + "At Fairview Middle School, across the county, a similar contest added a student-designed rice bowl to the menu two years ago, and the cafeteria manager reports that it is now one of the three most-ordered meals.</p>" +
        "<p>" + N(10) + "Some will argue that a contest would be too expensive or too complicated. " +
        N(11) + "That concern is fair, but it can be answered. " +
        N(12) + "The contest could follow the same rules the cafeteria already follows: every recipe would have to meet nutrition guidelines and use ingredients the district already buys. " +
        N(13) + "Our culinary arts class has a kitchen and a teacher who has offered to supervise. " +
        N(14) + "The only new cost would be a small prize, and local restaurants have donated prizes for our fundraisers before.</p>" +
        "<p>" + N(15) + "Others may worry that student cooks will create dishes that are unhealthy. " +
        N(16) + "But the judging panel could include the cafeteria manager and the school nurse along with students, and the rules could require each dish to include a vegetable or a whole grain. " +
        N(17) + "Limits like these would not ruin the contest; they would make it a real design challenge, the same kind professional chefs face every day.</p>" +
        "<p>" + N(18) + "Most important, a contest would teach something that a worksheet cannot. " +
        N(19) + "Students would learn to plan a budget, follow safety rules, and cook for a crowd, skills they will use for the rest of their lives. " +
        N(20) + "They would also learn that the systems around them can change when they speak up with a workable plan.</p>" +
        "<p>" + N(21) + "Our cafeteria staff feed more than a thousand people every day. " +
        N(22) + "They deserve a menu that students actually want to eat, and students deserve a seat at the table where that menu is decided. " +
        N(23) + "Let's give them both.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence best states the central claim of the editorial about the Eastbrook menu?",
          choices: [
            { letter: "A", text: "Sentence 1, about food that ends up in the trash" },
            { letter: "B", text: "Sentence 3, about the staff's tight budget" },
            { letter: "C", text: "Sentence 21, about feeding a thousand people" },
            { letter: "D", text: "Sentence 5, about a yearly contest for the menu" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "The writer's main purpose in the Eastbrook editorial is to —",
          choices: [
            { letter: "A", text: "persuade the school to let a student contest shape the menu" },
            { letter: "B", text: "inform readers about how cafeteria waste is weighed" },
            { letter: "C", text: "criticize cafeteria workers for wasting so much food" },
            { letter: "D", text: "entertain readers with stories from culinary arts class" }
          ],
          correct: "A"
        },
        {
          id: "outside",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence provides evidence from outside Eastbrook High to support the writer's argument?",
          choices: [
            { letter: "A", text: "Sentence 2, about the environmental club's waste study" },
            { letter: "B", text: "Sentence 13, about the culinary arts kitchen" },
            { letter: "C", text: "Sentence 9, about the rice bowl at Fairview Middle School" },
            { letter: "D", text: "Sentence 14, about restaurants donating prizes" }
          ],
          correct: "C"
        },
        {
          id: "counter",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "In sentences 10 and 11, the writer mentions the worry about cost mainly to —",
          choices: [
            { letter: "A", text: "admit that the contest plan cannot really work" },
            { letter: "B", text: "acknowledge an opposing view before answering it" },
            { letter: "C", text: "show that local restaurants dislike fundraisers" },
            { letter: "D", text: "explain why so much lunch food is thrown away" }
          ],
          correct: "B"
        },
        {
          id: "healthy",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the writer, how would the contest keep student dishes from being unhealthy?",
          choices: [
            { letter: "A", text: "Expert judges would help score, and each dish would need a vegetable or whole grain." },
            { letter: "B", text: "Only the culinary arts teacher would be allowed to cook the final dishes." },
            { letter: "C", text: "Students would vote online each week for the healthiest recipe." },
            { letter: "D", text: "Local restaurants would test every recipe before the judging began." }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the writer organize sentences 10–17 of the editorial?",
          choices: [
            { letter: "A", text: "by describing events in the order they happened" },
            { letter: "B", text: "by comparing the menus of two different schools" },
            { letter: "C", text: "by listing the causes of cafeteria food waste" },
            { letter: "D", text: "by presenting two objections and answering each" }
          ],
          correct: "D"
        },
        {
          id: "mystery",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 8, the writer refers to the usual lunch as one more mystery casserole. This phrase suggests that the current food is —",
          choices: [
            { letter: "A", text: "carefully and thoughtfully planned" },
            { letter: "B", text: "unfamiliar and unappealing" },
            { letter: "C", text: "far too expensive to serve" },
            { letter: "D", text: "cooked at home by parents" }
          ],
          correct: "B"
        },
        {
          id: "workable",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 20, the word workable most nearly means —",
          choices: [
            { letter: "A", text: "requiring hard labor" },
            { letter: "B", text: "written down neatly" },
            { letter: "C", text: "practical and possible" },
            { letter: "D", text: "popular with adults" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · VOCABULARY ───────────────────────── */
    {
      id: "g9-rv-c50-star-quilt",
      family: "G9",
      title: "The Part Worth Saving",
      kind: "Vocabulary · 9.RV",
      blurb: "Noor has never sewn anything bigger than a pillowcase, but she wants a quilt in the county fair.",
      level: 1,
      passage:
        "<p>" + N(1) + "Noor had never sewn anything bigger than a pillowcase when she decided to enter a quilt in the Harlan County Fair. " +
        N(2) + "Her great-aunt Samira, who had won ribbons at the fair for thirty years, laughed when she heard the plan, but it was a kind laugh. " +
        N(3) + "\"Every expert was once a <strong>novice</strong>,\" she said. " +
        N(4) + "\"Even me. " +
        N(5) + "Especially me.\"</p>" +
        "<p>" + N(6) + "They started in March with a box of old clothes that relatives had saved for years in the hall closet. " +
        N(7) + "Some of the shirts were too <strong>frayed</strong> to use, their edges worn into soft, loose threads that came apart in Noor's fingers. " +
        N(8) + "Others still had large clean sections, and Aunt Samira showed her how to <strong>salvage</strong> the good fabric by cutting around stains and holes. " +
        N(9) + "\"A shirt doesn't have to be perfect to be useful,\" she said. " +
        N(10) + "\"You just have to find the part worth saving.\"</p>" +
        "<p>" + N(11) + "Noor chose a star pattern from one of her aunt's books. " +
        N(12) + "It looked simple in the photograph, but up close it was <strong>intricate</strong>, with dozens of small triangles that all had to meet at sharp points in the center. " +
        N(13) + "Cutting them was <strong>painstaking</strong> work. " +
        N(14) + "Each triangle had to be measured twice and cut slowly, and a mistake of even a sixteenth of an inch would pull the whole star out of shape. " +
        N(15) + "Some nights Noor finished only two pieces before her eyes grew tired, and she fell asleep still seeing triangles whenever she closed them.</p>" +
        "<p>" + N(16) + "By June the stars were done, and she spread them across the living room floor. " +
        N(17) + "Against the dark blue background, the reds and yellows from her cousins' old soccer jerseys looked <strong>vibrant</strong>, almost glowing, as if the quilt had caught a piece of a summer afternoon. " +
        N(18) + "Aunt Samira walked around the edges with her hands behind her back, the way she walked around quilts at the fair. " +
        N(19) + "\"Hm,\" she said. " +
        N(20) + "Noor held her breath. " +
        N(21) + "\"That corner star is crooked,\" her aunt said, \"and I would not change it for anything.\"</p>" +
        "<p>" + N(22) + "The quilt did not win first prize. " +
        N(23) + "It won a white ribbon for third place in the youth division, and the judge wrote a short note on the scoring card: \"Bold color choices. Keep going.\" " +
        N(24) + "Noor taped the note inside the lid of her sewing box, right where she would see it every time she opened it. " +
        N(25) + "Then she opened the box of old clothes again and started looking for the part worth saving.</p>",
      claims: [
        {
          id: "novice",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 3, the word novice most nearly means —",
          choices: [
            { letter: "A", text: "judge" },
            { letter: "B", text: "beginner" },
            { letter: "C", text: "relative" },
            { letter: "D", text: "champion" }
          ],
          correct: "B"
        },
        {
          id: "frayed",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from sentence 7 best help the reader understand the meaning of frayed?",
          choices: [
            { letter: "A", text: "Some of the shirts" },
            { letter: "B", text: "in Noor's fingers" },
            { letter: "C", text: "too frayed to use" },
            { letter: "D", text: "soft, loose threads" }
          ],
          correct: "D"
        },
        {
          id: "salvage",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 8, the word salvage most nearly means to —",
          choices: [
            { letter: "A", text: "rescue the useful part" },
            { letter: "B", text: "throw away the whole thing" },
            { letter: "C", text: "wash with great care" },
            { letter: "D", text: "buy as a replacement" }
          ],
          correct: "A"
        },
        {
          id: "intricate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which phrase from sentence 12 best shows the meaning of intricate?",
          choices: [
            { letter: "A", text: "looked simple in the photograph" },
            { letter: "B", text: "a star pattern from a book" },
            { letter: "C", text: "dozens of small triangles" },
            { letter: "D", text: "but up close it was" }
          ],
          correct: "C"
        },
        {
          id: "painstaking",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Sentence 14 helps the reader understand that painstaking work is work that —",
          choices: [
            { letter: "A", text: "requires great care and effort" },
            { letter: "B", text: "causes real physical pain" },
            { letter: "C", text: "can be finished very quickly" },
            { letter: "D", text: "must be done by a whole team" }
          ],
          correct: "A"
        },
        {
          id: "vibrant",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author describes the colors in sentence 17 as vibrant rather than bright. Compared with bright, vibrant adds a sense that the colors are —",
          choices: [
            { letter: "A", text: "faded with age" },
            { letter: "B", text: "full of life and energy" },
            { letter: "C", text: "too loud and harsh" },
            { letter: "D", text: "carefully matched" }
          ],
          correct: "B"
        },
        {
          id: "afternoon",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 17, saying the quilt had caught a piece of a summer afternoon suggests that the quilt —",
          choices: [
            { letter: "A", text: "was sewn outdoors during the summer" },
            { letter: "B", text: "would be finished by the end of summer" },
            { letter: "C", text: "had been faded by too much sunlight" },
            { letter: "D", text: "gives off a warm, cheerful feeling" }
          ],
          correct: "D"
        },
        {
          id: "samira",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Aunt Samira's words in sentence 21 show that she —",
          choices: [
            { letter: "A", text: "thinks Noor should start the quilt over" },
            { letter: "B", text: "is disappointed in Noor's choice of colors" },
            { letter: "C", text: "values the quilt's character over perfection" },
            { letter: "D", text: "plans to enter the quilt in the fair herself" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rv-c50-sentinel-peak",
      family: "G9",
      title: "Eleven Strikes",
      kind: "Vocabulary · 9.RV",
      blurb: "A first-year fire lookout learns that the quiet on Sentinel Peak is louder than expected.",
      level: 3,
      passage:
        "<p>" + N(1) + "The first thing nobody tells you about working as a fire lookout is how loud the quiet becomes. " +
        N(2) + "During my first week on Sentinel Peak, I could hear my own heartbeat at night, and every creak of the tower's steel frame sounded like a door opening somewhere behind me. " +
        N(3) + "I had expected the <strong>solitude</strong> to be peaceful, and eventually it was, but at first being alone with seventy miles of forest felt less like a vacation and more like a test.</p>" +
        "<p>" + N(4) + "It took me about ten days to <strong>acclimate</strong>. " +
        N(5) + "My body adjusted to the thin air at eight thousand feet, my eyes adjusted to the glare off the granite, and my mind adjusted to days with no schedule except the one I made. " +
        N(6) + "I learned to scan the horizon in slow arcs, east to west, every fifteen minutes, whether or not anything seemed different. " +
        N(7) + "The supervisor who trained me called this habit <strong>vigilance</strong>, and she said it was the whole job. " +
        N(8) + "\"Anyone can see a big fire,\" she told me. " +
        N(9) + "\"You're here for the small one that's still deciding what it wants to be.\"</p>" +
        "<p>" + N(10) + "Most of what I saw was not smoke. " +
        N(11) + "Morning mist rose from the river valleys and began to <strong>dissipate</strong> by nine, thinning into nothing as the sun warmed the air. " +
        N(12) + "Dust trailed behind logging trucks. " +
        N(13) + "Once, a flock of birds lifting off a ridge looked so much like a gray plume that I had the radio in my hand before I understood. " +
        N(14) + "I learned that real smoke has a different personality: it leans with the wind, it holds its shape, and it does not apologize.</p>" +
        "<p>" + N(15) + "In the sixth week, a line of thunderstorms crossed the range in the late afternoon. " +
        N(16) + "The sky to the west turned an <strong>ominous</strong> bruise-purple, and lightning stitched the ridges together for nearly an hour. " +
        N(17) + "When the storm passed, I counted eleven strikes I was sure had touched ground. " +
        N(18) + "For the next two days I watched those eleven places the way you watch a pot you've been told not to stir.</p>" +
        "<p>" + N(19) + "On the third morning, a thin white wisp appeared above one of them, so faint it was almost invisible against the pale sky. " +
        N(20) + "By noon it had grown darker and more <strong>conspicuous</strong>, a column no one could miss. " +
        N(21) + "I took the bearing, called it in, and watched a crew hike in before the fire spread past a single acre.</p>" +
        "<p>" + N(22) + "People ask whether I got bored. " +
        N(23) + "Sometimes, yes. " +
        N(24) + "But I learned that boredom and attention are not opposites. " +
        N(25) + "The long, empty hours were what made the one important minute possible.</p>",
      claims: [
        {
          id: "acclimate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 4, the word acclimate most nearly means to —",
          choices: [
            { letter: "A", text: "leave a place in a hurry" },
            { letter: "B", text: "climb to a higher point" },
            { letter: "C", text: "get used to new conditions" },
            { letter: "D", text: "complain about discomfort" }
          ],
          correct: "C"
        },
        {
          id: "vigilance",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "The supervisor's words in sentences 8 and 9 help clarify that vigilance means —",
          choices: [
            { letter: "A", text: "steady, careful watchfulness" },
            { letter: "B", text: "a constant fear of danger" },
            { letter: "C", text: "skill at using a radio" },
            { letter: "D", text: "strength for long hikes" }
          ],
          correct: "A"
        },
        {
          id: "solitude",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written loneliness instead of solitude in sentence 3. Compared with loneliness, solitude has a connotation that is more —",
          choices: [
            { letter: "A", text: "frightening" },
            { letter: "B", text: "crowded" },
            { letter: "C", text: "sorrowful" },
            { letter: "D", text: "restful" }
          ],
          correct: "D"
        },
        {
          id: "dissipate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which phrase from sentence 11 best helps the reader understand the meaning of dissipate?",
          choices: [
            { letter: "A", text: "Morning mist rose" },
            { letter: "B", text: "thinning into nothing" },
            { letter: "C", text: "from the river valleys" },
            { letter: "D", text: "by nine" }
          ],
          correct: "B"
        },
        {
          id: "conspicuous",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 20, the word conspicuous most nearly means —",
          choices: [
            { letter: "A", text: "dangerous" },
            { letter: "B", text: "easy to notice" },
            { letter: "C", text: "slowly fading" },
            { letter: "D", text: "far away" }
          ],
          correct: "B"
        },
        {
          id: "ominous",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 16, the words ominous and bruise-purple suggest that the storm seemed —",
          choices: [
            { letter: "A", text: "beautiful and calm" },
            { letter: "B", text: "brief and harmless" },
            { letter: "C", text: "cold and distant" },
            { letter: "D", text: "threatening and harmful" }
          ],
          correct: "D"
        },
        {
          id: "apologize",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 14, the author says real smoke does not apologize. This personification mainly suggests that real smoke —",
          choices: [
            { letter: "A", text: "rises boldly and steadily instead of fading" },
            { letter: "B", text: "smells much stronger than morning mist" },
            { letter: "C", text: "appears only after a thunderstorm passes" },
            { letter: "D", text: "drifts against the direction of the wind" }
          ],
          correct: "A"
        },
        {
          id: "agree",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Based on the passage as a whole, the Sentinel Peak lookout would most likely agree that —",
          choices: [
            { letter: "A", text: "lookout towers should be replaced by cameras" },
            { letter: "B", text: "the first week on the peak was the easiest" },
            { letter: "C", text: "dull hours of watching make the key moment possible" },
            { letter: "D", text: "a trained lookout never mistakes birds for smoke" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LONG · PAIRED TEXTS ───────────────────────── */
    {
      id: "g9-dsr-c50-westgate-lights",
      family: "G9",
      title: "Lights at Westgate Park",
      kind: "Paired texts · 9.DSR",
      blurb: "A parks committee approves a weekend trial for skate park lights. A skater who works weeknights writes back.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Westgate Parks Committee: Meeting Summary, October 9</strong></p>" +
        "<p>" + N(1) + "The committee heard a proposal from the Westgate Skaters Association to add lights to the skate park so that it could stay open until 9:00 p.m. all year. " +
        N(2) + "The park currently closes at sunset, which falls before 5:30 p.m. in December. " +
        N(3) + "Parks staff estimated that installing six LED light poles would cost about $38,000, which could be covered by a state recreation grant the town has already received. " +
        N(4) + "Two residents of Alder Lane, which borders the park, spoke against the plan. " +
        N(5) + "They said that the noise of skateboards already carries into their homes in the early evening and that later hours would make the problem worse. " +
        N(6) + "A police representative reported that calls about the park had been rare over the past year, averaging fewer than two per month. " +
        N(7) + "Committee members also raised the question of who would lock the gates and check the park at closing. " +
        N(8) + "After discussion, the committee voted 4 to 1 to approve a three-month trial. " +
        N(9) + "Lights will be installed this winter, but the park will stay open late only on Fridays and Saturdays, and only until 8:30 p.m. " +
        N(10) + "Staff will track attendance, complaints, and any damage during the trial. " +
        N(11) + "The committee will review the results in April before deciding whether to expand the hours.</p>" +
        "<p><strong>Text 2 — A Letter to the Committee</strong></p>" +
        "<p>Dear Members of the Parks Committee:</p>" +
        "<p>" + N(12) + "My name is Tavita Moana, and I have skated at Westgate Park since I was eleven. " +
        N(13) + "Thank you for approving the lights; it is the first time many of us have felt that the town takes our sport seriously. " +
        N(14) + "I do want to explain, though, why a weekend-only trial leaves out the people who need the lights most. " +
        N(15) + "I work at my family's bakery after school until 6:00 p.m., Monday through Thursday. " +
        N(16) + "In winter, by the time I get to the park, it is already dark, and the gates are locked. " +
        N(17) + "Several of my friends have jobs or team practices on the same schedule. " +
        N(18) + "Because we have nowhere else to go, some of us skate in the grocery store parking lot, where cars come around corners without warning. " +
        N(19) + "A lit park would be far safer than that. " +
        N(20) + "I understand the concerns of the neighbors on Alder Lane, and our association has offered to post quiet-hours signs and run a monthly cleanup. " +
        N(21) + "I am asking the committee to add just one weeknight, perhaps Wednesday, to the trial. " +
        N(22) + "If the results are good, everyone wins. " +
        N(23) + "If they are not, you will have the numbers to prove it.</p>" +
        "<p>Sincerely,<br>Tavita Moana</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea is supported by both the meeting summary and Tavita's letter?",
          choices: [
            { letter: "A", text: "Lights at the park have been approved for at least a trial." },
            { letter: "B", text: "The park should continue to close at sunset all year." },
            { letter: "C", text: "The Alder Lane neighbors have withdrawn their complaints." },
            { letter: "D", text: "The state grant will not cover the cost of the lights." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The meeting summary and Tavita's letter differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "argues against weeknight hours, while Text 2 supports them" },
            { letter: "B", text: "was written by a skater, while Text 2 was written by staff" },
            { letter: "C", text: "reports a decision neutrally, while Text 2 argues for a change" },
            { letter: "D", text: "focuses on safety, while Text 2 focuses only on noise" }
          ],
          correct: "C"
        },
        {
          id: "respond",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "In sentence 20, Tavita responds most directly to which concern recorded in Text 1?",
          choices: [
            { letter: "A", text: "The cost of the light poles (sentence 3)" },
            { letter: "B", text: "The noise reported by Alder Lane residents (sentences 4–5)" },
            { letter: "C", text: "The police calls about the park (sentence 6)" },
            { letter: "D", text: "The committee's 4 to 1 vote (sentence 8)" }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Using both texts, a reader can best conclude that the weekend-only trial —",
          choices: [
            { letter: "A", text: "will almost certainly be canceled before April" },
            { letter: "B", text: "was the plan the skaters' association requested" },
            { letter: "C", text: "places no limit on how late the park stays open" },
            { letter: "D", text: "does little for skaters who are free only on weeknights" }
          ],
          correct: "D"
        },
        {
          id: "unanswered",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which question raised in Text 1 does Tavita's letter leave unanswered?",
          choices: [
            { letter: "A", text: "Whether neighbors are bothered by skateboard noise" },
            { letter: "B", text: "Whether people with after-school jobs use the park" },
            { letter: "C", text: "Who will lock the gates and check the park at closing" },
            { letter: "D", text: "Whether the town takes the sport of skating seriously" }
          ],
          correct: "C"
        },
        {
          id: "data",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "How would Tavita most likely use the trial records described in sentence 10 of Text 1?",
          choices: [
            { letter: "A", text: "As proof, if the results are good, that later hours can work" },
            { letter: "B", text: "As a reason for the committee to close the park earlier" },
            { letter: "C", text: "As evidence that her family's bakery should close sooner" },
            { letter: "D", text: "As support for moving skaters to the grocery store lot" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Tavita's main purpose in writing her letter is to —",
          choices: [
            { letter: "A", text: "complain about her schedule at the bakery" },
            { letter: "B", text: "thank the committee and close the matter" },
            { letter: "C", text: "warn the neighbors about skateboard noise" },
            { letter: "D", text: "persuade the committee to add a weeknight" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence from Text 1 best supports Tavita's view that a lit park would not cause trouble?",
          choices: [
            { letter: "A", text: "Sentence 2, about the park closing at sunset" },
            { letter: "B", text: "Sentence 6, about the small number of police calls" },
            { letter: "C", text: "Sentence 7, about who would lock the gates" },
            { letter: "D", text: "Sentence 9, about the 8:30 p.m. closing time" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-dsr-c50-friendship-quilt",
      family: "G9",
      title: "Signatures in Thread",
      kind: "Paired texts · 9.DSR",
      blurb: "An article explains the tradition of friendship quilts; a new quilter finds a name she never expected.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Signatures in Thread</strong></p>" +
        "<p>" + N(1) + "For more than a century, quilting circles in many small American towns have made a special kind of quilt known as a friendship quilt. " +
        N(2) + "Each member sews a single block and signs it, either in ink or in embroidered thread, and the blocks are then joined into one quilt that is given to someone leaving the community or marking an important moment. " +
        N(3) + "Historians value these quilts because the signatures act as a kind of record. " +
        N(4) + "A single friendship quilt can show who belonged to a circle, which families were connected, and sometimes even what fabrics were available in a given year. " +
        N(5) + "In the river town of Ashford, the local quilting circle has made a friendship quilt for every member who has moved away since the circle began. " +
        N(6) + "The circle's records list forty-one such quilts. " +
        N(7) + "Members say the tradition has lasted because it does two jobs at once. " +
        N(8) + "It sends a departing friend off with something warm and useful, and it gives those staying behind a reason to gather. " +
        N(9) + "In recent years, the Ashford circle has begun inviting younger members, including high school students, to contribute blocks. " +
        N(10) + "Some longtime members worried at first that younger quilters would rush the work. " +
        N(11) + "The circle's president says the opposite has happened: the students tend to ask the most questions about the names on older quilts.</p>" +
        "<p><strong>Text 2 — From Mai's Journal</strong></p>" +
        "<p>" + N(12) + "Tonight I signed my first block. " +
        N(13) + "The quilt is for Mrs. Delacroix, who is moving to Arizona to live near her son, and who taught me to thread a needle without licking the end. " +
        N(14) + "I practiced my signature on scrap paper eleven times before I stitched it, because thread is much harder to erase than pencil. " +
        N(15) + "Then I spent an hour on just three letters, and the a still leans a little, like it's tired. " +
        N(16) + "While I worked, Mrs. Brandvold showed me the quilt the circle made years ago for a woman named Lorna. " +
        N(17) + "I never met Lorna. " +
        N(18) + "But I found her friends' names on it, and one of them was my grandmother's, stitched in green. " +
        N(19) + "I didn't know my grandmother had ever quilted; she never once mentioned it, not even when she watched me sew. " +
        N(20) + "I ran my thumb over the letters, and it felt strange, like hearing someone's voice on an old recording. " +
        N(21) + "Mrs. Brandvold said every name on a friendship quilt is a promise: I was here, and I cared about you. " +
        N(22) + "Now my name is going to Arizona, on a block I almost gave up on. " +
        N(23) + "Someday, maybe, someone I've never met will find it and wonder who I was. " +
        N(24) + "I hope the leaning a tells them I tried.</p>",
      claims: [
        {
          id: "central",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea is central to both the article and Mai's journal?",
          choices: [
            { letter: "A", text: "Younger quilters work faster than older members do." },
            { letter: "B", text: "Signed blocks link people across time and distance." },
            { letter: "C", text: "Quilting circles are disappearing from small towns." },
            { letter: "D", text: "Old quilts matter mainly as records of past fabrics." }
          ],
          correct: "B"
        },
        {
          id: "illustrate",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Mai's discovery in sentences 16–19 best illustrates which statement from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 7, that the tradition does two jobs at once" },
            { letter: "B", text: "Sentence 10, that members feared students would rush" },
            { letter: "C", text: "Sentence 6, that the records list forty-one quilts" },
            { letter: "D", text: "Sentence 4, that a quilt can show which families were linked" }
          ],
          correct: "D"
        },
        {
          id: "worry",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "How does Mai's journal challenge the worry described in sentence 10 of Text 1?",
          choices: [
            { letter: "A", text: "Mai spends an hour on three letters, showing care rather than haste." },
            { letter: "B", text: "Mai admits that she nearly rushed her block to finish early." },
            { letter: "C", text: "Mai notes that older members sew more slowly than she does." },
            { letter: "D", text: "Mai decides to leave the circle once Mrs. Delacroix moves." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The article and the journal entry differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "tells one member's story, while Text 2 gives general history" },
            { letter: "B", text: "criticizes the tradition, while Text 2 defends it" },
            { letter: "C", text: "explains a tradition broadly, while Text 2 shows one person living it" },
            { letter: "D", text: "focuses on Arizona, while Text 2 focuses on Ashford" }
          ],
          correct: "C"
        },
        {
          id: "example",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Based on both texts, the quilt for Mrs. Delacroix is an example of —",
          choices: [
            { letter: "A", text: "a quilt made to raise money for the circle" },
            { letter: "B", text: "the circle's first try at a friendship quilt" },
            { letter: "C", text: "a quilt sewn only by high school students" },
            { letter: "D", text: "the custom of a quilt for a departing member" }
          ],
          correct: "D"
        },
        {
          id: "pairing",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The most likely purpose of pairing the article with Mai's journal is to —",
          choices: [
            { letter: "A", text: "prove that the article's numbers are wrong" },
            { letter: "B", text: "show how the tradition feels to one participant" },
            { letter: "C", text: "persuade readers to move to the town of Ashford" },
            { letter: "D", text: "compare two very different quilting circles" }
          ],
          correct: "B"
        },
        {
          id: "recording",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 20, comparing the stitched name to a voice on an old recording mainly creates a mood that is —",
          choices: [
            { letter: "A", text: "playful and silly" },
            { letter: "B", text: "angry and tense" },
            { letter: "C", text: "wistful and tender" },
            { letter: "D", text: "bored and distant" }
          ],
          correct: "C"
        },
        {
          id: "text1",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of Text 1, Signatures in Thread?",
          choices: [
            { letter: "A", text: "Friendship quilts serve as both farewell gifts and community records." },
            { letter: "B", text: "The Ashford circle has made exactly forty-one quilts so far." },
            { letter: "C", text: "Historians care mostly about the fabrics used in old quilts." },
            { letter: "D", text: "High school students now run the Ashford quilting circle." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── LONG · POETRY ───────────────────────── */
    {
      id: "g9-rl-c50-tower-seven",
      family: "G9",
      title: "Tower Seven, August",
      kind: "Poetry · 9.RL",
      blurb: "A lookout walks four glass walls all summer, not looking for anything, only looking.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "All morning the ridges lie down like sleeping dogs,<br>" +
        L(2) + "their backs gone blue with distance, one behind another,<br>" +
        L(3) + "and I walk the four glass walls of this small room<br>" +
        L(4) + "the way my grandmother walked her garden rows,<br>" +
        L(5) + "not looking for anything, only looking.<br>" +
        L(6) + "The binoculars are heavy as a held breath.<br>" +
        L(7) + "Below me, the river writes its long gray sentence<br>" +
        L(8) + "and never once goes back to cross its t's.<br>" +
        L(9) + "A hawk tilts. A truck drags its little flag of dust.<br>" +
        L(10) + "The radio clears its throat and says nothing.<br>" +
        L(11) + "By noon the heat has a sound, a high thin hum,<br>" +
        L(12) + "and the pines stand still as if they are listening too.<br>" +
        L(13) + "I know this valley the way I know a face:<br>" +
        L(14) + "the scar of the old rockslide, the lightning-split pine,<br>" +
        L(15) + "the meadow that turns gold an hour before the rest.<br>" +
        L(16) + "So when the smallest thread of white lifts up<br>" +
        L(17) + "where nothing has ever lifted up before,<br>" +
        L(18) + "I do not need to wonder. I just know.<br>" +
        L(19) + "My hands are steadier than I expected.<br>" +
        L(20) + "I turn the ring, I read the numbers out,<br>" +
        L(21) + "and someone far away writes them down.<br>" +
        L(22) + "Then it is only waiting, and the thread,<br>" +
        L(23) + "and the long afternoon leaning toward evening,<br>" +
        L(24) + "and me, still watching, which is the whole of it.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the poem Tower Seven, August best express?",
          choices: [
            { letter: "A", text: "Wild places are too dangerous to watch alone." },
            { letter: "B", text: "Modern tools have made watchful people unneeded." },
            { letter: "C", text: "Patient, familiar watching lets a person see change." },
            { letter: "D", text: "Summer heat makes it nearly impossible to stay alert." }
          ],
          correct: "C"
        },
        {
          id: "dogs",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 1, comparing the ridges to sleeping dogs mainly suggests that the landscape is —",
          choices: [
            { letter: "A", text: "calm and at rest" },
            { letter: "B", text: "fierce and threatening" },
            { letter: "C", text: "noisy and restless" },
            { letter: "D", text: "small and tame" }
          ],
          correct: "A"
        },
        {
          id: "river",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In lines 7 and 8, the river writes a long gray sentence and never goes back to cross its t's. This metaphor mainly emphasizes the river's —",
          choices: [
            { letter: "A", text: "loud and rushing sound" },
            { letter: "B", text: "muddy, polluted water" },
            { letter: "C", text: "sudden, dangerous floods" },
            { letter: "D", text: "long, unbroken path" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The details in lines 9–12 (the hawk, the dust, the silent radio, the humming heat) mainly create a mood of —",
          choices: [
            { letter: "A", text: "panic and alarm" },
            { letter: "B", text: "drowsy stillness" },
            { letter: "C", text: "joyful celebration" },
            { letter: "D", text: "bitter loneliness" }
          ],
          correct: "B"
        },
        {
          id: "know",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Line 18, I do not need to wonder. I just know, suggests that the speaker —",
          choices: [
            { letter: "A", text: "recognizes the smoke at once because the view is so familiar" },
            { letter: "B", text: "is only guessing and hopes that the guess is correct" },
            { letter: "C", text: "has already heard about the fire over the radio" },
            { letter: "D", text: "cannot see the thread of white very clearly" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "How does the poem change after line 15?",
          choices: [
            { letter: "A", text: "It shifts from the present to memories of childhood." },
            { letter: "B", text: "It moves from the valley to the speaker's home." },
            { letter: "C", text: "It shifts from routine watching to spotting smoke." },
            { letter: "D", text: "It changes from calm description to complaint." }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of line 24, and me, still watching, which is the whole of it, is best described as —",
          choices: [
            { letter: "A", text: "bitter" },
            { letter: "B", text: "content" },
            { letter: "C", text: "nervous" },
            { letter: "D", text: "boastful" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The poem Tower Seven, August is told from the point of view of —",
          choices: [
            { letter: "A", text: "a pilot flying over the valley" },
            { letter: "B", text: "a dispatcher taking the report" },
            { letter: "C", text: "a hiker passing below the tower" },
            { letter: "D", text: "a lookout on watch in the tower" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── LONG · DRAMA ───────────────────────── */
    {
      id: "g9-rl-c50-smoky-relish",
      family: "G9",
      title: "Eighteen Minutes",
      kind: "Drama · 9.RL",
      blurb: "Halfway through a timed cooking contest, Benny burns the onions that were the whole point of the dish.",
      level: 1,
      passage:
        "<p><em>" + N(1) + "A school gym set up as a contest kitchen for the Linden County Junior Chef Challenge, with long rows of folding tables and portable burners. " +
        N(2) + "Steam rises from a dozen tables, and the air smells of garlic, frying oil, and nerves. " +
        N(3) + "A large clock on the wall reads 10:42. " +
        N(4) + "MARISOL, sixteen, stirs a pot of rice, while her younger brother BENNY, thirteen, stands over a smoking pan, holding a lime in one hand.</em></p>" +
        "<p><strong>BENNY:</strong> " + N(5) + "Um. " + N(6) + "Marisol? " + N(7) + "The onions are very brown.</p>" +
        "<p><strong>MARISOL:</strong> <em>(grabbing the pan off the burner)</em> " + N(8) + "Brown? " +
        N(9) + "Benny, these are black! " +
        N(10) + "We have eighteen minutes left, and the onions were the whole point of the dish.</p>" +
        "<p><strong>BENNY:</strong> " + N(11) + "I turned around for one second to get the lime, and they were fine when I left them.</p>" +
        "<p><strong>MARISOL:</strong> <em>(to the audience, as BENNY stares at the pan)</em> " +
        N(12) + "It was more than a second, and I was the one who sent him for the lime. " +
        N(13) + "If we lose, it's on both of us.</p>" +
        "<p><em>" + N(14) + "A JUDGE with a clipboard walks slowly past their table, glances at the smoking pan, writes something, and moves on.</em></p>" +
        "<p><strong>BENNY:</strong> " + N(15) + "She wrote something. " + N(16) + "She definitely wrote something.</p>" +
        "<p><strong>MARISOL:</strong> " + N(17) + "Forget her. " + N(18) + "We need new onions, and we don't have any, and the market table closed an hour ago.</p>" +
        "<p><strong>BENNY:</strong> <em>(picking up a blackened piece and tasting it)</em> " + N(19) + "Wait. " +
        N(20) + "They're not all bad. " +
        N(21) + "The outside is bitter, but the inside is sweet and kind of smoky. " +
        N(22) + "Remember Lola's relish? " +
        N(23) + "She always charred the onions on purpose.</p>" +
        "<p><strong>MARISOL:</strong> " + N(24) + "Lola had a grill and a whole afternoon. " +
        N(25) + "We have a hot plate and eighteen minutes. " +
        N(26) + "Also, Lola never let anyone touch her pan.</p>" +
        "<p><strong>BENNY:</strong> " + N(27) + "She let me, once, when I was seven. " +
        N(28) + "And it's seventeen minutes now. " +
        N(29) + "If we scrape off the worst of it and chop the rest small with the lime and cilantro, it could work, maybe even better than the plan. " +
        N(30) + "We'd call it a smoky relish. " +
        N(31) + "Like we meant it.</p>" +
        "<p><em>" + N(32) + "MARISOL looks at the clock, then at her brother. " +
        N(33) + "She takes a long breath and hands him the knife.</em></p>" +
        "<p><strong>MARISOL:</strong> " + N(34) + "Fine. " + N(35) + "You chop, I'll scrape. " + N(36) + "And Benny?</p>" +
        "<p><strong>BENNY:</strong> " + N(37) + "What?</p>" +
        "<p><strong>MARISOL:</strong> " + N(38) + "If this works, I'm telling everyone it was my idea.</p>" +
        "<p><strong>BENNY:</strong> <em>(grinning as he starts to chop)</em> " + N(39) + "Lola would know the truth.</p>" +
        "<p><em>" + N(40) + "They work side by side, fast and silent, as the clock ticks toward 11:00 and the judge turns back toward their table. " +
        N(41) + "Lights fade.</em></p>",
      claims: [
        {
          id: "aside",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Marisol's aside to the audience in sentences 12 and 13 reveals that she —",
          choices: [
            { letter: "A", text: "blames Benny alone for the burnt onions" },
            { letter: "B", text: "privately admits she shares the blame" },
            { letter: "C", text: "secretly plans to quit the contest" },
            { letter: "D", text: "believes the judge is being unfair" }
          ],
          correct: "B"
        },
        {
          id: "judge",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction in sentence 14, in which the judge writes something and moves on, mainly serves to —",
          choices: [
            { letter: "A", text: "show that the judge has already chosen a winner" },
            { letter: "B", text: "explain the scoring rules of the contest" },
            { letter: "C", text: "introduce a character who will help the siblings" },
            { letter: "D", text: "increase the pressure the siblings feel" }
          ],
          correct: "D"
        },
        {
          id: "knife",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage directions in sentences 32 and 33 mainly show that Marisol —",
          choices: [
            { letter: "A", text: "decides to trust Benny's plan" },
            { letter: "B", text: "gives up on winning the contest" },
            { letter: "C", text: "is angry with the passing judge" },
            { letter: "D", text: "wants to finish cooking alone" }
          ],
          correct: "A"
        },
        {
          id: "benny",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Benny in the contest scene?",
          choices: [
            { letter: "A", text: "He is lazy and unwilling to help his sister." },
            { letter: "B", text: "He is too nervous to speak up with an idea." },
            { letter: "C", text: "He is resourceful and hopeful under pressure." },
            { letter: "D", text: "He is jealous of his older sister's skill." }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the scene between Marisol and Benny best support?",
          choices: [
            { letter: "A", text: "Winning a contest matters more than family." },
            { letter: "B", text: "A mistake can become something new if people stay open." },
            { letter: "C", text: "Contest judges rarely notice small problems." },
            { letter: "D", text: "Old family recipes should never be changed." }
          ],
          correct: "B"
        },
        {
          id: "clock",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the setting of the timed contest kitchen shape the conflict in the scene?",
          choices: [
            { letter: "A", text: "The ticking clock forces the siblings to decide quickly." },
            { letter: "B", text: "The crowded gym keeps them from hearing each other." },
            { letter: "C", text: "The weak hot plate makes the rice burn as well." },
            { letter: "D", text: "The fading lights force them to stop cooking early." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the siblings' final exchange (sentences 34–39) is best described as —",
          choices: [
            { letter: "A", text: "gloomy and defeated" },
            { letter: "B", text: "formal and polite" },
            { letter: "C", text: "teasing and affectionate" },
            { letter: "D", text: "tense and bitter" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "The details in sentence 2 about steam and the smell of garlic, frying oil, and nerves mainly create a mood that is —",
          choices: [
            { letter: "A", text: "sleepy and calm" },
            { letter: "B", text: "gloomy and sad" },
            { letter: "C", text: "silly and carefree" },
            { letter: "D", text: "busy and tense" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
