/* SOL Labyrinth — Grade 9 medium packs, expansion file 36 (VA 9.RL / 9.RI / 9.RV / 9.DSR).
 * 19 medium texts (170–290 words; poems 12–16 lines; paired texts 110–150 words each), 6 questions each.
 * Topics: river cleanups, a family restaurant, mountain hiking, app design and coding.
 * Original text only; no VDOE / copyrighted material.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LITERARY ───────────────────────── */
    {
      id: "g9-rl-c36-gravel-bar",
      family: "G9",
      title: "The Gravel Bar",
      kind: "Literary · 9.RL",
      blurb: "Lindiwe joins a river cleanup for the service hours and finds a reason to come back.",
      level: 1,
      passage:
        "<p>" + N(1) + "The water in the Calder River was low that Saturday, low enough that the gravel bar below the footbridge had surfaced like the back of a sleeping animal. " +
        N(2) + "Lindiwe pulled on a pair of borrowed waders and followed her grandfather down the bank, a mesh bag in each hand. " +
        N(3) + "She had signed up for the cleanup because it counted for service hours, and she had planned to spend the morning counting the minutes. " +
        N(4) + "Her grandfather, who had fished this river for forty years, worked without speaking. " +
        N(5) + "He lifted a bicycle wheel from the shallows, rinsed it, and set it on the bank as carefully as if it were a borrowed dish. " +
        N(6) + "By ten o'clock Lindiwe had filled both bags with cans, a sandal, and a tangle of fishing line that had wrapped itself around a root. " +
        N(7) + "\"Why are you so careful with junk?\" she finally asked. " +
        N(8) + "Her grandfather pointed to a heron standing at the far edge of the bar. " +
        N(9) + "\"Last spring, one like her got caught in line like that,\" he said. " +
        N(10) + "\"The river cannot pick up after us, so we pick up after ourselves.\" " +
        N(11) + "Lindiwe looked at the knot of line in her bag and then at the heron, which had not moved. " +
        N(12) + "When the volunteers gathered at noon to weigh the haul, she was surprised to realize she had stopped checking her phone hours ago. " +
        N(13) + "She asked the coordinator for the date of the next cleanup before her grandfather could." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of the story about the Calder River cleanup?",
          choices: [
            { letter: "A", text: "Older people always understand nature better than young people." },
            { letter: "B", text: "Caring for a place can grow from seeing what is at stake there." },
            { letter: "C", text: "Earning service hours is a poor reason to volunteer." },
            { letter: "D", text: "Rivers are too polluted for volunteers to make a difference." }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Sentence 3 reveals that, at first, Lindiwe views the cleanup as —",
          choices: [
            { letter: "A", text: "an obligation to get through" },
            { letter: "B", text: "a chance to impress her grandfather" },
            { letter: "C", text: "a contest to collect the most trash" },
            { letter: "D", text: "a way to learn how to fish" }
          ],
          correct: "A"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          stem: "How does the low water described in sentence 1 shape the events of the story?",
          choices: [
            { letter: "A", text: "It keeps the volunteers from crossing the footbridge." },
            { letter: "B", text: "It forces the cleanup to end early at noon." },
            { letter: "C", text: "It exposes the gravel bar where the trash and heron are." },
            { letter: "D", text: "It makes the fishing line easier to untangle." }
          ],
          correct: "C"
        },
        {
          id: "haul",
          sol: "9.RV.1.C",
          stem: "In sentence 12, the word haul most nearly means —",
          choices: [
            { letter: "A", text: "a long and tiring trip" },
            { letter: "B", text: "a hard pull on a rope" },
            { letter: "C", text: "a prize given for work" },
            { letter: "D", text: "the total amount gathered" }
          ],
          correct: "D"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Readers can best infer that Lindiwe asks about the next cleanup in sentence 13 because she —",
          choices: [
            { letter: "A", text: "wants to finish her required service hours sooner" },
            { letter: "B", text: "has begun to care about the river for its own sake" },
            { letter: "C", text: "hopes the coordinator will let her keep the waders" },
            { letter: "D", text: "worries that her grandfather will forget to sign up" }
          ],
          correct: "B"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 5, the grandfather sets the wheel down as carefully as if it were a borrowed dish. This simile suggests that he —",
          choices: [
            { letter: "A", text: "treats even the river's trash with patience and respect" },
            { letter: "B", text: "plans to return the wheel to the person who lost it" },
            { letter: "C", text: "thinks the wheel is valuable enough to sell" },
            { letter: "D", text: "is too tired to lift heavy objects quickly" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c36-wok-station",
      family: "G9",
      title: "The Wok Station",
      kind: "Literary · 9.RL",
      blurb: "On the busiest night of the week, Min-jun steps into his family's kitchen.",
      level: 2,
      passage:
        "<p>" + N(1) + "On Friday nights the kitchen at Han's Table sounded like a train station, all clatter and calling, and Min-jun usually stayed out front folding napkins where the noise could not reach him. " +
        N(2) + "Then his uncle burned his hand on the fryer at six-thirty, and his mother looked across the pass at Min-jun with an expression he had never seen on her face before: she needed him. " +
        N(3) + "He tied on an apron that still smelled of sesame oil. " +
        N(4) + "The tickets came faster than he could read them. " +
        N(5) + "Two orders of japchae, one bibimbap without egg, a table of eight that wanted everything at once. " +
        N(6) + "His mother called out each dish without turning around, and he answered \"Yes, Umma\" so many times the words wore smooth. " +
        N(7) + "Once he plated the wrong noodles, and she slid the dish back to him without a word, which somehow hurt more than if she had shouted. " +
        N(8) + "By nine the rush had thinned to a trickle. " +
        N(9) + "Min-jun's forearms ached, and there was a small burn on his wrist he did not remember getting. " +
        N(10) + "His mother set a bowl of rice and leftover bulgogi in front of him on an overturned crate. " +
        N(11) + "\"Your grandfather fed me on a crate like this,\" she said, \"the first night I worked his kitchen.\" " +
        N(12) + "She did not say he had done well. " +
        N(13) + "She did not need to. " +
        N(14) + "Min-jun ate slowly, listening to the dishwasher hum, and for the first time the noise of the kitchen sounded like something he belonged to." +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Min-jun at the start of the story?",
          choices: [
            { letter: "A", text: "He is eager to take over the kitchen from his uncle." },
            { letter: "B", text: "He keeps his distance from the busy kitchen." },
            { letter: "C", text: "He is angry that his mother never asks for help." },
            { letter: "D", text: "He wants to cook his grandfather's old recipes." }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "The comparison of the kitchen to a train station in sentence 1 mainly creates a sense of —",
          choices: [
            { letter: "A", text: "loud, constant motion" },
            { letter: "B", text: "lonely, patient waiting" },
            { letter: "C", text: "travel and adventure" },
            { letter: "D", text: "quiet, orderly routine" }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Readers can best infer from sentence 7 that Min-jun —",
          choices: [
            { letter: "A", text: "thinks the wrong noodles were his uncle's fault" },
            { letter: "B", text: "believes his mother is too busy to notice mistakes" },
            { letter: "C", text: "cares deeply about earning his mother's approval" },
            { letter: "D", text: "plans to stop working before the rush is over" }
          ],
          correct: "C"
        },
        {
          id: "craft",
          sol: "9.RL.3.A",
          stem: "The author places the very short sentences 12 and 13 near the end of the story mainly to —",
          choices: [
            { letter: "A", text: "show that the mother is still upset about the mistake" },
            { letter: "B", text: "suggest that the meal on the crate says what praise would" },
            { letter: "C", text: "reveal that Min-jun has stopped listening to his mother" },
            { letter: "D", text: "signal that the restaurant is about to close for good" }
          ],
          correct: "B"
        },
        {
          id: "smooth",
          sol: "9.RV.1.F",
          stem: "In sentence 6, saying the words Yes, Umma wore smooth suggests that Min-jun —",
          choices: [
            { letter: "A", text: "said them louder each time so she could hear" },
            { letter: "B", text: "grew angrier each time he had to repeat them" },
            { letter: "C", text: "was no longer sure what the words meant" },
            { letter: "D", text: "repeated them so often they became automatic" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does the meal on the overturned crate best support?",
          choices: [
            { letter: "A", text: "Hard work always earns loud praise from family." },
            { letter: "B", text: "Children must follow their parents' careers." },
            { letter: "C", text: "Belonging can be passed down through shared work." },
            { letter: "D", text: "Mistakes in a busy kitchen are never forgiven." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c36-false-summit",
      family: "G9",
      title: "False Summit",
      kind: "Literary · 9.RL",
      blurb: "Amara follows her brother up Mount Ansel and learns the peak was never the point.",
      level: 3,
      passage:
        "<p>" + N(1) + "From the trailhead, the peak of Mount Ansel looked close enough to touch, which was the first lie the mountain told us. " +
        N(2) + "My brother Kofi had talked about this hike for a year, ever since he came home from college with new boots and a map folded so often the creases had turned white. " +
        N(3) + "I came because Mom said I should, and because I wanted to prove I could keep up. " +
        N(4) + "By the third hour the trees had shrunk to knee-high shrubs, and the wind had begun pushing at us like an impatient crowd. " +
        N(5) + "Kofi kept saying, \"Almost there,\" in the bright voice he used for little cousins. " +
        N(6) + "When we finally scrambled onto the rocky crest I had been staring at all morning, I turned around, ready to cheer, and saw another ridge rising behind it, higher and grayer and farther away. " +
        N(7) + "\"False summit,\" Kofi said quietly. " +
        N(8) + "I sat down on a boulder and did not trust myself to speak. " +
        N(9) + "He sat beside me and unfolded the map, and for the first time I noticed that his hands were shaking, too. " +
        N(10) + "\"I thought you'd done this before,\" I said. " +
        N(11) + "\"Only on paper,\" he admitted. " +
        N(12) + "We split a squashed granola bar and watched a cloud drag its shadow across the valley below. " +
        N(13) + "Then Kofi stood and held out a hand, not to pull me up, but to ask. " +
        N(14) + "We never reached the top that day; a line of dark clouds turned us back an hour later. " +
        N(15) + "But on the way down, I realized I had not been trying to keep up with my brother for a long time; we had simply been walking together." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of the story about Mount Ansel?",
          choices: [
            { letter: "A", text: "Sharing a hard effort can matter more than reaching the goal." },
            { letter: "B", text: "Older siblings should always be trusted to lead." },
            { letter: "C", text: "Maps are more reliable than personal experience." },
            { letter: "D", text: "Mountains are too dangerous for beginning hikers." }
          ],
          correct: "A"
        },
        {
          id: "figure",
          sol: "9.RL.2.A",
          stem: "In sentence 1, calling the peak's closeness the first lie the mountain told us is an example of —",
          choices: [
            { letter: "A", text: "hyperbole showing that the narrator dislikes hiking" },
            { letter: "B", text: "a simile comparing the mountain to a dishonest friend" },
            { letter: "C", text: "personification hinting the hike will be harder than it looks" },
            { letter: "D", text: "understatement showing that Kofi misread the trail" }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because the story is told from the younger sibling's first-person point of view, the reader —",
          choices: [
            { letter: "A", text: "knows from the start that Kofi has never climbed the peak" },
            { letter: "B", text: "sees the hike through the eyes of the siblings' mother" },
            { letter: "C", text: "hears the private thoughts of both hikers equally" },
            { letter: "D", text: "learns of Kofi's fears only when the narrator notices them" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of the final sentence of the story about Mount Ansel is best described as —",
          choices: [
            { letter: "A", text: "bitter and disappointed" },
            { letter: "B", text: "quietly content" },
            { letter: "C", text: "nervous and uncertain" },
            { letter: "D", text: "boastful and proud" }
          ],
          correct: "B"
        },
        {
          id: "paper",
          sol: "9.RL.1.B",
          stem: "Kofi's admission in sentence 11, Only on paper, reveals that he —",
          choices: [
            { letter: "A", text: "had drawn the trail map himself for a college class" },
            { letter: "B", text: "had studied the route closely but never hiked it" },
            { letter: "C", text: "had climbed a different mountain with his friends" },
            { letter: "D", text: "would rather read about hiking than actually hike" }
          ],
          correct: "B"
        },
        {
          id: "hands",
          sol: "9.RL.3.A",
          stem: "The author includes the detail in sentence 9 that Kofi's hands were shaking mainly to —",
          choices: [
            { letter: "A", text: "reveal that Kofi has been hiding his own doubts" },
            { letter: "B", text: "show that the cold wind had made the climb unsafe" },
            { letter: "C", text: "suggest that Kofi is angry his sister sat down" },
            { letter: "D", text: "explain why Kofi could no longer read the map" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c36-demo-day",
      family: "G9",
      title: "Demo Day",
      kind: "Literary · 9.RL",
      blurb: "Rafael's bus-tracking app crashes in front of the whole class and a visiting engineer.",
      level: 2,
      passage:
        "<p>" + N(1) + "Rafael had tested the bus-tracking app forty times on his laptop, and forty times the little yellow icon had crawled obediently along Route 9. " +
        N(2) + "On the forty-first test, in front of the whole computer science class and a visiting engineer, the screen froze, flickered, and went white. " +
        N(3) + "The silence in the room was so complete he could hear the projector fan. " +
        N(4) + "Ines, his partner, leaned over and whispered, \"Read the error.\" " +
        N(5) + "Rafael wanted to close the laptop and apologize, but her calm voice gave him something to hold on to. " +
        N(6) + "He scrolled through the red text until one line jumped out at him: the app was asking for the bus's location before the map had finished loading. " +
        N(7) + "\"We're calling the data too early,\" he said, louder than he meant to. " +
        N(8) + "The visiting engineer, a woman with reading glasses pushed up into her gray hair, nodded slowly. " +
        N(9) + "\"Can you fix it now?\" she asked. " +
        N(10) + "Ines typed while Rafael explained each change to the class, his voice steadier with every line. " +
        N(11) + "It took six minutes, which felt like an hour. " +
        N(12) + "When the yellow icon finally appeared and began its slow crawl along Route 9, a few classmates clapped, and the engineer wrote something in her notebook. " +
        N(13) + "Afterward she stopped by their table. " +
        N(14) + "\"Every app I've ever built crashed in front of someone,\" she said. " +
        N(15) + "\"The ones worth building are the ones whose makers knew how to read the error.\"" +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Ines during the crash?",
          choices: [
            { letter: "A", text: "She is embarrassed and blames Rafael for the error." },
            { letter: "B", text: "She stays composed and steers Rafael toward a fix." },
            { letter: "C", text: "She hopes the engineer will repair the app for them." },
            { letter: "D", text: "She is confused by the red text on the screen." }
          ],
          correct: "B"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "The detail in sentence 3 that Rafael could hear the projector fan mainly creates a mood of —",
          choices: [
            { letter: "A", text: "tense, awkward stillness" },
            { letter: "B", text: "relaxed curiosity" },
            { letter: "C", text: "cheerful excitement" },
            { letter: "D", text: "angry confusion" }
          ],
          correct: "A"
        },
        {
          id: "obedient",
          sol: "9.RV.1.E",
          stem: "In sentence 1, the icon crawled obediently along Route 9. Compared with simply moved, the word obediently suggests that the icon —",
          choices: [
            { letter: "A", text: "moved faster than the real bus did" },
            { letter: "B", text: "was hard for the class to see" },
            { letter: "C", text: "traveled in a confusing direction" },
            { letter: "D", text: "behaved exactly as Rafael expected" }
          ],
          correct: "D"
        },
        {
          id: "turn",
          sol: "9.RL.1.B",
          stem: "Which sentence marks the turning point in Rafael's struggle with the crash?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The engineer's tone in sentences 14 and 15 is best described as —",
          choices: [
            { letter: "A", text: "reassuring and knowing" },
            { letter: "B", text: "stern and disapproving" },
            { letter: "C", text: "amused and mocking" },
            { letter: "D", text: "distracted and bored" }
          ],
          correct: "A"
        },
        {
          id: "repeat",
          sol: "9.RL.3.A",
          stem: "The author repeats the phrase read the error in sentences 4 and 15 mainly to —",
          choices: [
            { letter: "A", text: "show that Ines and the engineer are old friends" },
            { letter: "B", text: "link a practical instruction to a larger lesson about failure" },
            { letter: "C", text: "suggest that Rafael never learned how to read code" },
            { letter: "D", text: "emphasize that the error message was very long" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c36-menu-board",
      family: "G9",
      title: "The Menu Board",
      kind: "Literary · 9.RL",
      blurb: "Ayesha's father hands her the chalk for the café's weekly specials.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every Sunday night, Ayesha's father erased the chalkboard menu at Cedar Street Café and wrote the new week's specials in his neat, slanting hand. " +
        N(2) + "This Sunday he handed Ayesha the chalk. " +
        N(3) + "\"My eyes are tired,\" he said, but she saw him smile as he turned away. " +
        N(4) + "Ayesha had drawn in sketchbooks for years, but the board was different. " +
        N(5) + "It hung above the counter where every customer would see it, and it seemed as wide as a movie screen. " +
        N(6) + "She wrote \"Lentil Soup\" first, and the letters leaned like tired fence posts. " +
        N(7) + "She erased them and tried again, slower this time. " +
        N(8) + "Then she added a small drawing of a steaming bowl, and beside the za'atar flatbread she sketched a sprig of thyme. " +
        N(9) + "By the time she finished, her fingers were white with chalk dust and the café had gone quiet around her. " +
        N(10) + "On Monday morning, Mrs. Okafor, who had eaten breakfast at the café for twelve years, stopped in the doorway and stared at the board. " +
        N(11) + "\"Who drew the soup?\" she asked. " +
        N(12) + "Ayesha's father pointed at his daughter with the coffee pot. " +
        N(13) + "\"The new artist,\" he said. " +
        N(14) + "That week the café sold more lentil soup than it had all winter, and Ayesha's father did not take the chalk back." +
        "</p>",
      claims: [
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Readers can best infer that Ayesha's father hands her the chalk in sentence 2 because he —",
          choices: [
            { letter: "A", text: "truly cannot see the board anymore" },
            { letter: "B", text: "wants to give her a chance to use her talent" },
            { letter: "C", text: "is too busy cooking the week's specials" },
            { letter: "D", text: "hopes she will clean the board for him" }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Sentence 7 shows that Ayesha is —",
          choices: [
            { letter: "A", text: "ready to give up on the board" },
            { letter: "B", text: "annoyed by her father's request" },
            { letter: "C", text: "eager to finish as fast as she can" },
            { letter: "D", text: "careful and determined to get it right" }
          ],
          correct: "D"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 6, the letters leaned like tired fence posts. This simile suggests that Ayesha's first letters were —",
          choices: [
            { letter: "A", text: "crooked and uneven" },
            { letter: "B", text: "tall and bold" },
            { letter: "C", text: "faint and hard to read" },
            { letter: "D", text: "too small to see" }
          ],
          correct: "A"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          stem: "How does the board's place above the counter, described in sentence 5, affect Ayesha?",
          choices: [
            { letter: "A", text: "It lets her copy the menu from her father's notes." },
            { letter: "B", text: "It keeps customers from seeing her mistakes." },
            { letter: "C", text: "It makes the task feel bigger and more public than a sketchbook." },
            { letter: "D", text: "It makes the chalk dust fall into the food." }
          ],
          correct: "C"
        },
        {
          id: "specials",
          sol: "9.RV.1.B",
          stem: "As used in sentence 1, the word specials most nearly means —",
          choices: [
            { letter: "A", text: "customers who visit very often" },
            { letter: "B", text: "dishes offered for a short time" },
            { letter: "C", text: "prices lower than the usual ones" },
            { letter: "D", text: "recipes the family keeps secret" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of the story set at Cedar Street Café?",
          choices: [
            { letter: "A", text: "Customers care more about price than about food." },
            { letter: "B", text: "Small businesses must change their menus often." },
            { letter: "C", text: "Trusting someone with responsibility can help that person grow." },
            { letter: "D", text: "Artists should hide their work until it is perfect." }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── POETRY AND DRAMA ───────────────────────── */
    {
      id: "g9-rl-c36-switchbacks",
      family: "G9",
      title: "Switchbacks",
      kind: "Poetry · 9.RL",
      blurb: "Fourteen lines about a trail that refuses to go straight up.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The trail will not go straight up Hollins Ridge;<br>" +
        L(2) + "it folds itself like ribbon, back and forth,<br>" +
        L(3) + "a patient sentence written on the slope.<br>" +
        L(4) + "My father walks ahead and does not rush.<br>" +
        L(5) + "I want to cut across, to climb the line<br>" +
        L(6) + "the way a crow would, quick and black and sure,<br>" +
        L(7) + "but loose stones slide like marbles from my boots<br>" +
        L(8) + "each time I leave the path to save a step.<br>" +
        L(9) + "He waits. He doesn't tell me I was wrong.<br>" +
        L(10) + "He says the mountain teaches in its own voice.<br>" +
        L(11) + "By noon the valley's farms are postage stamps,<br>" +
        L(12) + "the river just a thread somebody dropped.<br>" +
        L(13) + "I look back down the zigzags we have made<br>" +
        L(14) + "and see how far the slow way carried us." +
        "</p>",
      claims: [
        {
          id: "ribbon",
          sol: "9.RL.2.A",
          stem: "In lines 2 and 3, the trail is compared to a ribbon and a patient sentence mainly to show that it —",
          choices: [
            { letter: "A", text: "is too narrow for two hikers to share" },
            { letter: "B", text: "was marked with ribbons by park rangers" },
            { letter: "C", text: "winds slowly and steadily up the slope" },
            { letter: "D", text: "is described in the father's guidebook" }
          ],
          correct: "C"
        },
        {
          id: "images",
          sol: "9.RL.2.B",
          stem: "The images in lines 11 and 12 (postage stamps, a dropped thread) mainly create a sense of —",
          choices: [
            { letter: "A", text: "height and distance gained" },
            { letter: "B", text: "fear of falling" },
            { letter: "C", text: "sadness about leaving home" },
            { letter: "D", text: "boredom with the view" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of the poem about Hollins Ridge?",
          choices: [
            { letter: "A", text: "Shortcuts are the smartest way to reach a goal." },
            { letter: "B", text: "Fathers should always walk ahead of their children." },
            { letter: "C", text: "Mountains are more dangerous than they appear." },
            { letter: "D", text: "Steady progress can carry a person farther than haste." }
          ],
          correct: "D"
        },
        {
          id: "speaker",
          sol: "9.RL.3.B",
          stem: "Lines 5–8 are told from the point of view of a speaker who —",
          choices: [
            { letter: "A", text: "is guiding a group of younger hikers" },
            { letter: "B", text: "is impatient to reach the top faster" },
            { letter: "C", text: "is afraid of the crows on the ridge" },
            { letter: "D", text: "regrets agreeing to come on the hike" }
          ],
          correct: "B"
        },
        {
          id: "shift",
          sol: "9.RL.2.C",
          stem: "How does the speaker's tone change from lines 5–8 to lines 13–14?",
          choices: [
            { letter: "A", text: "from impatient to appreciative" },
            { letter: "B", text: "from cheerful to fearful" },
            { letter: "C", text: "from calm to angry" },
            { letter: "D", text: "from proud to embarrassed" }
          ],
          correct: "A"
        },
        {
          id: "waits",
          sol: "9.RL.3.A",
          stem: "The poet includes line 9, He waits. He doesn't tell me I was wrong., mainly to —",
          choices: [
            { letter: "A", text: "show that the father is too tired to argue" },
            { letter: "B", text: "suggest that the speaker made no mistake at all" },
            { letter: "C", text: "show that the father lets the trail teach the lesson" },
            { letter: "D", text: "reveal that the father never saw the shortcut" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c36-river-ledger",
      family: "G9",
      title: "River Ledger",
      kind: "Poetry · 9.RL",
      blurb: "Volunteers count what the river gives back, and find the numbers leave something out.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "We keep a ledger of what the river gives back:<br>" +
        L(2) + "one doll's arm, pale as a stripped twig,<br>" +
        L(3) + "eleven bottles, a shopping cart rusted orange,<br>" +
        L(4) + "a sneaker still laced, as if someone walked out of it.<br>" +
        L(5) + "The clipboard asks for numbers, so we count.<br>" +
        L(6) + "But numbers do not say how the cart lay<br>" +
        L(7) + "on its side in the shallows, half a cage,<br>" +
        L(8) + "the current combing moss through its wire ribs.<br>" +
        L(9) + "They do not say the minnows had moved in.<br>" +
        L(10) + "By evening we have filled the dumpster twice,<br>" +
        L(11) + "and the river runs a little lighter, maybe,<br>" +
        L(12) + "or maybe only we do, walking home<br>" +
        L(13) + "with mud to the knee and the strange feeling<br>" +
        L(14) + "that we have been forgiven for something small." +
        "</p>",
      claims: [
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "The image in line 8, the current combing moss through its wire ribs, mainly creates a mood that is —",
          choices: [
            { letter: "A", text: "frantic and noisy" },
            { letter: "B", text: "quiet and strangely gentle" },
            { letter: "C", text: "cheerful and silly" },
            { letter: "D", text: "angry and bitter" }
          ],
          correct: "B"
        },
        {
          id: "idea",
          sol: "9.RL.1.A",
          stem: "Which idea about the cleanup do lines 5–9 best develop?",
          choices: [
            { letter: "A", text: "Counting trash is the most important part of a cleanup." },
            { letter: "B", text: "The river has no living creatures left in it." },
            { letter: "C", text: "Volunteers should not touch objects found in water." },
            { letter: "D", text: "A count of trash cannot capture all the volunteers notice." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of lines 11–14 of River Ledger is best described as —",
          choices: [
            { letter: "A", text: "tentative and hopeful" },
            { letter: "B", text: "triumphant and certain" },
            { letter: "C", text: "bitter and weary" },
            { letter: "D", text: "detached and scientific" }
          ],
          correct: "A"
        },
        {
          id: "ledger",
          sol: "9.RV.1.F",
          stem: "In line 1, the speaker calls the cleanup record a ledger of what the river gives back. This figurative phrase suggests that —",
          choices: [
            { letter: "A", text: "the volunteers are paid for each item they find" },
            { letter: "B", text: "the river is selling the objects to collectors" },
            { letter: "C", text: "the river is returning what people once put into it" },
            { letter: "D", text: "the clipboard records the river's depth each day" }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "9.RL.3.A",
          stem: "How does line 12 shift the poem's focus?",
          choices: [
            { letter: "A", text: "from the bottles back to the shopping cart" },
            { letter: "B", text: "from the river to the volunteers themselves" },
            { letter: "C", text: "from hopeful feelings to angry ones" },
            { letter: "D", text: "from that evening to the following morning" }
          ],
          correct: "B"
        },
        {
          id: "minnows",
          sol: "9.RL.1.B",
          stem: "Line 9, They do not say the minnows had moved in, suggests that the speaker —",
          choices: [
            { letter: "A", text: "noticed that even the trash had become part of river life" },
            { letter: "B", text: "wants to remove the minnows from the river" },
            { letter: "C", text: "thinks the clipboard should list fish species" },
            { letter: "D", text: "was disappointed by how few fish lived there" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c36-soft-launch",
      family: "G9",
      title: "Soft Launch",
      kind: "Drama · 9.RL",
      blurb: "Three days before launch, a student app team argues about a login screen.",
      level: 3,
      passage:
        "<p><em>Setting: the school media lab, after hours. HANA, OSKAR, and MALIA sit around one laptop. A whiteboard behind them reads STUDY BUDDY: LAUNCH FRIDAY.</em></p>" +
        "<p>" + N(1) + "<strong>OSKAR</strong>: The login screen is perfect. Nobody touches the login screen. " +
        N(2) + "<strong>MALIA</strong>: Nobody can find the login button. My cousin tried the app last night and gave up after two minutes. " +
        N(3) + "<strong>OSKAR</strong>: Your cousin is in fifth grade. " +
        N(4) + "<strong>MALIA</strong>: And our users are freshmen. That's four years of difference, not forty. " +
        N(5) + "<strong>HANA</strong> <em>(aside, to the audience)</em>: I designed that screen. I picked the pale gray buttons because they looked calm. I never asked whether calm was the same as invisible. " +
        N(6) + "<strong>OSKAR</strong>: We launch in three days. If we change the design now, we'll break something else. " +
        N(7) + "<strong>MALIA</strong> <em>(sliding the laptop toward HANA)</em>: Hana, you made it. What do you think? " +
        N(8) + "<strong>HANA</strong> <em>(pausing, then standing to face the whiteboard)</em>: I think I liked it because it was mine. " +
        N(9) + "<em>(She picks up a marker and crosses out the word FRIDAY.)</em> " +
        N(10) + "<strong>OSKAR</strong>: You're joking. " +
        N(11) + "<strong>HANA</strong>: We let ten freshmen try it tomorrow. We watch where their fingers go. Then we decide. " +
        N(12) + "<strong>MALIA</strong> <em>(grinning)</em>: That's called user testing, Oskar. It's in chapter four. " +
        N(13) + "<strong>OSKAR</strong> <em>(sighing, but pulling his chair closer)</em>: Fine. But I'm keeping the font." +
        "</p>",
      claims: [
        {
          id: "aside",
          sol: "9.RL.1.D",
          stem: "The playwright uses Hana's aside in sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "share a private doubt Hana has not told her team" },
            { letter: "B", text: "show that Oskar designed the login screen" },
            { letter: "C", text: "explain why the launch must happen Friday" },
            { letter: "D", text: "let Malia overhear what Hana really thinks" }
          ],
          correct: "A"
        },
        {
          id: "marker",
          sol: "9.RL.1.D",
          stem: "The stage direction in sentence 9, in which Hana crosses out FRIDAY, mainly shows that she —",
          choices: [
            { letter: "A", text: "is angry with Malia's young cousin" },
            { letter: "B", text: "wants to erase the entire project" },
            { letter: "C", text: "has decided to delay the launch" },
            { letter: "D", text: "noticed an error in the date" }
          ],
          correct: "C"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Sentence 8 characterizes Hana as someone who —",
          choices: [
            { letter: "A", text: "refuses to accept any criticism of her work" },
            { letter: "B", text: "can admit that pride shaped her choices" },
            { letter: "C", text: "cares more about fonts than about users" },
            { letter: "D", text: "wants Oskar to make the final decision" }
          ],
          correct: "B"
        },
        {
          id: "board",
          sol: "9.RL.3.B",
          stem: "The whiteboard in the opening stage direction adds to the scene's conflict mainly by —",
          choices: [
            { letter: "A", text: "showing that the team has not yet named the app" },
            { letter: "B", text: "revealing that Oskar wrote the team's schedule" },
            { letter: "C", text: "suggesting that the media lab closes on Friday" },
            { letter: "D", text: "keeping the deadline in view as the team argues" }
          ],
          correct: "D"
        },
        {
          id: "chair",
          sol: "9.RL.1.D",
          stem: "The stage direction in sentence 13, sighing, but pulling his chair closer, reveals that Oskar —",
          choices: [
            { letter: "A", text: "plans to leave the media lab early" },
            { letter: "B", text: "gives in reluctantly but still wants to help" },
            { letter: "C", text: "is hurt by Malia's joke about chapter four" },
            { letter: "D", text: "wants to take control of the laptop" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of Malia's line in sentence 12 is best described as —",
          choices: [
            { letter: "A", text: "playfully teasing" },
            { letter: "B", text: "harshly critical" },
            { letter: "C", text: "nervous and unsure" },
            { letter: "D", text: "formal and distant" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL, FUNCTIONAL, ARGUMENT ───────────────────────── */
    {
      id: "g9-ri-c36-tally-cards",
      family: "G9",
      title: "Counting the Catch",
      kind: "Informational · 9.RI",
      blurb: "Why river cleanup volunteers keep a tally of every bottle and wrapper.",
      level: 1,
      passage:
        "<p>" + N(1) + "When volunteers wade into a river to pull out trash, many of them carry something besides gloves and bags: a data card. " +
        N(2) + "The card lists common items, such as plastic bottles, food wrappers, cigarette filters, and tires, with a blank beside each one. " +
        N(3) + "Every time a volunteer picks up an item, a partner makes a tally mark. " +
        N(4) + "At first, the counting can feel like a chore that slows the work down. " +
        N(5) + "However, the numbers serve an important purpose. " +
        N(6) + "Cleanup groups send their totals to a regional database, where they are combined with counts from hundreds of other sites. " +
        N(7) + "Over several years, the combined data can reveal patterns that no single cleanup could show. " +
        N(8) + "For example, a watershed group in Bramley County found that food wrappers made up nearly a third of the items collected along a stretch of road lined with fast-food restaurants. " +
        N(9) + "The group shared its numbers with the county, and the county added covered trash cans and more frequent pickups along that road. " +
        N(10) + "Two years later, the share of wrappers in the same area had fallen to about one in ten. " +
        N(11) + "Data cards also help volunteers see their own impact. " +
        N(12) + "A bag of trash may look small, but a total of 4,200 items in one morning is hard to ignore. " +
        N(13) + "In this way, a simple tally sheet turns a few hours of hard work into evidence that can change how a community treats its river." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of the passage about data cards?",
          choices: [
            { letter: "A", text: "Volunteers should wear gloves when removing trash from rivers." },
            { letter: "B", text: "Counting the trash collected turns cleanups into useful evidence." },
            { letter: "C", text: "Fast-food restaurants are the main cause of river pollution." },
            { letter: "D", text: "Cleanup groups often run out of time to finish their work." }
          ],
          correct: "B"
        },
        {
          id: "county",
          sol: "9.RI.1.B",
          stem: "According to the passage, what did Bramley County do after seeing the watershed group's numbers?",
          choices: [
            { letter: "A", text: "It closed several fast-food restaurants." },
            { letter: "B", text: "It hired more volunteers for cleanups." },
            { letter: "C", text: "It added covered trash cans and more pickups." },
            { letter: "D", text: "It banned plastic bottles near the river." }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "Sentences 8–10 of the passage about data cards are organized mainly as —",
          choices: [
            { letter: "A", text: "a problem, a response, and a result" },
            { letter: "B", text: "a list of items printed on the card" },
            { letter: "C", text: "a comparison of two different rivers" },
            { letter: "D", text: "a series of steps for filling out a card" }
          ],
          correct: "A"
        },
        {
          id: "reveal",
          sol: "9.RV.1.C",
          stem: "In sentence 7, the word reveal most nearly means —",
          choices: [
            { letter: "A", text: "conceal" },
            { letter: "B", text: "reduce" },
            { letter: "C", text: "repeat" },
            { letter: "D", text: "make known" }
          ],
          correct: "D"
        },
        {
          id: "chore",
          sol: "9.RI.1.C",
          stem: "The author includes sentence 4, about counting feeling like a chore, mainly to —",
          choices: [
            { letter: "A", text: "argue that volunteers should stop keeping counts" },
            { letter: "B", text: "admit a drawback before showing the value of counting" },
            { letter: "C", text: "show that most volunteers dislike river cleanups" },
            { letter: "D", text: "describe how a partner makes a tally mark" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that combined cleanup data can lead a community to act?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c36-thin-margins",
      family: "G9",
      title: "Pennies on the Plate",
      kind: "Informational · 9.RI",
      blurb: "Where the money goes when you pay for dinner at a family restaurant.",
      level: 2,
      passage:
        "<p>" + N(1) + "A plate of pad thai that costs fourteen dollars at a family restaurant may look like a healthy profit, but the owners usually keep only a small slice of that price. " +
        N(2) + "Industry surveys suggest that independent restaurants often earn between three and six cents of profit on every dollar a customer spends. " +
        N(3) + "To understand why, it helps to follow the money. " +
        N(4) + "Roughly thirty cents of each dollar goes to ingredients, from rice noodles to the lime wedge on the side. " +
        N(5) + "Another thirty cents or so pays the cooks, servers, and dishwashers. " +
        N(6) + "Rent, electricity, gas for the stoves, insurance, and repairs take most of what remains. " +
        N(7) + "A broken freezer in July can erase a month of profit in a single afternoon. " +
        N(8) + "Family-owned restaurants survive these thin margins in several ways. " +
        N(9) + "Many rely on relatives who work long hours, sometimes without regular pay. " +
        N(10) + "Others design menus around a few ingredients that appear in many dishes, so that less food spoils. " +
        N(11) + "Some build such loyal followings that customers return every week, which makes sales easier to predict. " +
        N(12) + "The Suriyawong family, who have run a small Thai restaurant in the same strip mall for nineteen years, buy produce from a nearby farm in bulk and freeze their own curry pastes. " +
        N(13) + "\"We are not rich,\" says the youngest daughter, who now manages the books, \"but we are steady, and steady is how we stay open.\" " +
        N(14) + "Next time a menu price seems high, it may be worth remembering how little of it stays in the register." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "What is the main idea of the passage about restaurant prices?",
          choices: [
            { letter: "A", text: "Family restaurants charge too much for their food." },
            { letter: "B", text: "Family restaurants keep little of each dollar and must work to survive." },
            { letter: "C", text: "Thai restaurants earn more profit than other restaurants do." },
            { letter: "D", text: "Most restaurant owners refuse to pay their relatives." }
          ],
          correct: "B"
        },
        {
          id: "freezer",
          sol: "9.RI.2.B",
          stem: "The author includes the example of the broken freezer in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "show how one expense can wipe out a small profit" },
            { letter: "B", text: "explain why many restaurants close in the summer" },
            { letter: "C", text: "suggest that the Suriyawongs need new equipment" },
            { letter: "D", text: "describe how the family stores its curry pastes" }
          ],
          correct: "A"
        },
        {
          id: "menu",
          sol: "9.RI.1.B",
          stem: "According to the passage, why do some restaurants build menus around a few ingredients?",
          choices: [
            { letter: "A", text: "to make cooking faster for new staff" },
            { letter: "B", text: "to keep the menu short enough to memorize" },
            { letter: "C", text: "to reduce the amount of food that spoils" },
            { letter: "D", text: "to buy all their produce from local farms" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which statement from the passage about restaurant prices is closest to an opinion rather than a reported fact?",
          choices: [
            { letter: "A", text: "Roughly thirty cents of each dollar goes to ingredients." },
            { letter: "B", text: "Another thirty cents or so pays the cooks, servers, and dishwashers." },
            { letter: "C", text: "Rent, electricity, gas for the stoves, insurance, and repairs take most of what remains." },
            { letter: "D", text: "It may be worth remembering how little of it stays in the register." }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "Sentences 3–6 of the passage about restaurant prices are organized mainly by —",
          choices: [
            { letter: "A", text: "comparing Thai food with other kinds of food" },
            { letter: "B", text: "telling the history of one family's restaurant" },
            { letter: "C", text: "tracing how a dollar is split among costs" },
            { letter: "D", text: "listing the steps for opening a business" }
          ],
          correct: "C"
        },
        {
          id: "margins",
          sol: "9.RV.1.B",
          stem: "As used in sentence 8, the word margins most nearly refers to —",
          choices: [
            { letter: "A", text: "the blank edges around a page" },
            { letter: "B", text: "the amount left over as profit" },
            { letter: "C", text: "the borders of a property" },
            { letter: "D", text: "the limits of a family's patience" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c36-thin-air",
      family: "G9",
      title: "Thin Air",
      kind: "Informational · 9.RI",
      blurb: "What happens to a hiker's body high on a mountain, and how to stay safe.",
      level: 3,
      passage:
        "<p>" + N(1) + "Hikers who climb above about eight thousand feet often notice that their breathing changes long before their legs grow tired. " +
        N(2) + "The air at that height contains the same share of oxygen as air at sea level, roughly twenty-one percent, but the air pressure is lower, so each breath delivers fewer oxygen molecules to the lungs. " +
        N(3) + "The body responds almost immediately. " +
        N(4) + "Breathing speeds up and the heart beats faster, pushing more blood past the lungs to collect what oxygen is available. " +
        N(5) + "Over days and weeks, the body makes slower adjustments, including producing additional red blood cells, a process called acclimatization. " +
        N(6) + "When climbers ascend faster than their bodies can adapt, they may develop acute mountain sickness, whose symptoms include headache, nausea, and poor sleep. " +
        N(7) + "Researchers studying trekkers in high mountain regions have found that the illness is far more common among people who gain a great deal of altitude in a single day. " +
        N(8) + "For this reason, many guides recommend that hikers above ten thousand feet raise their sleeping elevation by no more than about fifteen hundred feet per night. " +
        N(9) + "A familiar saying among mountaineers sums up the strategy: climb high, sleep low. " +
        N(10) + "Some hikers believe that being physically fit protects them from altitude sickness, but studies have not found a strong link; marathon runners can suffer as much as casual walkers. " +
        N(11) + "Perhaps the most dependable treatment is also the simplest. " +
        N(12) + "A hiker whose symptoms worsen should descend, because even a drop of a thousand feet often brings relief within hours. " +
        N(13) + "The mountain will still be there next season." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "9.RI.1.A",
          stem: "Which statement best summarizes the passage about altitude?",
          choices: [
            { letter: "A", text: "Only hikers who are out of shape become ill at high elevations." },
            { letter: "B", text: "Air at high elevations holds less than twenty-one percent oxygen." },
            { letter: "C", text: "Thin air strains the body, so slow climbs and quick descents keep hikers safe." },
            { letter: "D", text: "Mountaineers should never sleep above ten thousand feet." }
          ],
          correct: "C"
        },
        {
          id: "belief",
          sol: "9.RI.1.C",
          stem: "Which statement does the author present as a common belief that the evidence does not support?",
          choices: [
            { letter: "A", text: "Physical fitness protects hikers from altitude sickness." },
            { letter: "B", text: "Breathing speeds up at high elevations." },
            { letter: "C", text: "Descending often relieves the symptoms." },
            { letter: "D", text: "Fast ascents raise the risk of illness." }
          ],
          correct: "A"
        },
        {
          id: "saying",
          sol: "9.RI.2.B",
          stem: "The author includes the saying climb high, sleep low in sentence 9 mainly to —",
          choices: [
            { letter: "A", text: "prove that mountaineers ignore scientific research" },
            { letter: "B", text: "introduce a new kind of mountain sickness" },
            { letter: "C", text: "describe how the heights of peaks are measured" },
            { letter: "D", text: "restate the guides' advice in a memorable phrase" }
          ],
          correct: "D"
        },
        {
          id: "research",
          sol: "9.RI.3.A",
          stem: "Which sentence provides research evidence that fast ascents increase the risk of mountain sickness?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "ascend",
          sol: "9.RV.1.C",
          stem: "In sentence 6, the word ascend most nearly means —",
          choices: [
            { letter: "A", text: "climb upward" },
            { letter: "B", text: "rest often" },
            { letter: "C", text: "turn back" },
            { letter: "D", text: "breathe deeply" }
          ],
          correct: "A"
        },
        {
          id: "pressure",
          sol: "9.RI.1.B",
          stem: "According to the passage, why does each breath deliver less oxygen at high elevations?",
          choices: [
            { letter: "A", text: "The air there contains a smaller share of oxygen." },
            { letter: "B", text: "Lower air pressure means fewer oxygen molecules per breath." },
            { letter: "C", text: "Cold air keeps the lungs from expanding fully." },
            { letter: "D", text: "Red blood cells stop working above eight thousand feet." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c36-paper-prototype",
      family: "G9",
      title: "Sketch Before You Code",
      kind: "Informational · 9.RI",
      blurb: "Why app designers test their ideas on index cards before writing a line of code.",
      level: 1,
      passage:
        "<p>" + N(1) + "Many people imagine that building an app begins with typing code, but experienced designers often start with something much simpler: paper and a pencil. " +
        N(2) + "This method, called paper prototyping, involves sketching each screen of an app on a separate index card. " +
        N(3) + "A home card might show a search bar and three large buttons, while a results card shows a list. " +
        N(4) + "To test the design, one team member plays the computer. " +
        N(5) + "A volunteer taps a drawn button with a finger, and the \"computer\" swaps in the card that would appear next. " +
        N(6) + "Watching this simple game can uncover problems quickly. " +
        N(7) + "If the volunteer hesitates, taps the wrong spot, or asks, \"Where do I go now?\", the designers know a screen is confusing. " +
        N(8) + "Paper prototypes have several advantages over early code. " +
        N(9) + "First, they are fast: a new screen takes five minutes to draw instead of hours to program. " +
        N(10) + "Second, they are cheap to throw away, so designers are less attached to bad ideas. " +
        N(11) + "Third, they invite honest feedback, because testers feel more comfortable criticizing a rough sketch than a polished product. " +
        N(12) + "A student team at Ridgeview High learned this when designing an app to help classmates find study partners. " +
        N(13) + "Their first paper version hid the message button inside a menu, and four of their five testers could not find it. " +
        N(14) + "Moving the button took thirty seconds with an eraser. " +
        N(15) + "Fixing the same mistake after weeks of coding would have taken far longer." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "What is the central idea of the passage about paper prototyping?",
          choices: [
            { letter: "A", text: "Apps should be designed only by student teams." },
            { letter: "B", text: "Index cards store information better than computers." },
            { letter: "C", text: "Most testers are too polite to give honest feedback." },
            { letter: "D", text: "Sketching screens on paper helps designers find problems early." }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "Sentences 8–11 of the passage about paper prototyping are organized mainly as —",
          choices: [
            { letter: "A", text: "a cause followed by several effects" },
            { letter: "B", text: "a claim supported by a list of reasons" },
            { letter: "C", text: "a story told in time order" },
            { letter: "D", text: "a comparison of two student teams" }
          ],
          correct: "B"
        },
        {
          id: "testers",
          sol: "9.RI.1.B",
          stem: "According to the passage, what did most of the Ridgeview team's testers have trouble doing?",
          choices: [
            { letter: "A", text: "finding the message button" },
            { letter: "B", text: "reading the search results" },
            { letter: "C", text: "drawing new index cards" },
            { letter: "D", text: "signing in to the app" }
          ],
          correct: "A"
        },
        {
          id: "question",
          sol: "9.RI.2.B",
          stem: "The author includes the question Where do I go now? in sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "suggest that testers often get lost at school" },
            { letter: "B", text: "give an example of a well-designed button" },
            { letter: "C", text: "show a sign that a screen is confusing" },
            { letter: "D", text: "explain why designers ask for directions" }
          ],
          correct: "C"
        },
        {
          id: "polished",
          sol: "9.RV.1.E",
          stem: "In sentence 11, the author contrasts a rough sketch with a polished product. The word polished suggests something that is —",
          choices: [
            { letter: "A", text: "shiny and made of metal" },
            { letter: "B", text: "old and heavily used" },
            { letter: "C", text: "cheap and quickly made" },
            { letter: "D", text: "finished and carefully refined" }
          ],
          correct: "D"
        },
        {
          id: "time",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the claim that paper prototypes save designers time?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c36-trail-permit",
      family: "G9",
      title: "Summit Trail Permit",
      kind: "Functional text · 9.RI",
      blurb: "A state park notice explains who needs a permit and how to hike safely.",
      level: 1,
      passage:
        "<p><strong>Granite Hollow State Park: Summit Trail Day-Hike Permit</strong></p>" +
        "<p><strong>Who needs a permit:</strong> " + N(1) + "Every hiker on the Summit Trail beyond the Lookout Junction sign must carry a free day-hike permit between May 1 and October 31. " +
        N(2) + "Permits are limited to 150 per day to protect the alpine meadow near the top. " +
        N(3) + "Children under 12 do not need their own permit but must be listed on an adult's permit.</p>" +
        "<p><strong>How to get one:</strong> " + N(4) + "Reserve online up to 14 days in advance, or pick up any remaining permits at the visitor center starting at 7:00 a.m. " +
        N(5) + "Same-day permits are often gone by 9:00 a.m. on weekends.</p>" +
        "<p><strong>On the trail:</strong> " + N(6) + "Stay on marked paths; the meadow plants can take decades to recover from a single footprint. " +
        N(7) + "Pack out all trash, including fruit peels. " +
        N(8) + "Dogs must be leashed and are not allowed past Lookout Junction. " +
        N(9) + "Turn back by 2:00 p.m. if you have not reached the summit, since afternoon thunderstorms are common in summer.</p>" +
        "<p><strong>Emergencies:</strong> " + N(10) + "Cell service is unreliable above the tree line. " +
        N(11) + "Before you leave, tell someone your route and expected return time. " +
        N(12) + "In an emergency, call the ranger station from the emergency phone at Lookout Junction.</p>",
      claims: [
        {
          id: "when",
          sol: "9.RI.1.B",
          stem: "According to the Granite Hollow notice, when do hikers need a day-hike permit?",
          choices: [
            { letter: "A", text: "any time they visit the state park" },
            { letter: "B", text: "past Lookout Junction from May 1 to October 31" },
            { letter: "C", text: "only on weekends during the summer" },
            { letter: "D", text: "only when hiking with children under 12" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "9.RI.1.C",
          stem: "The main purpose of the Granite Hollow notice is to —",
          choices: [
            { letter: "A", text: "inform hikers of the rules and steps for the Summit Trail" },
            { letter: "B", text: "persuade families to visit the park in the off-season" },
            { letter: "C", text: "describe the history of the alpine meadow" },
            { letter: "D", text: "compare the Summit Trail with other park trails" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "9.RI.2.A",
          stem: "How do the bold headings in the Granite Hollow notice help a hiker?",
          choices: [
            { letter: "A", text: "They list the rules from least to most important." },
            { letter: "B", text: "They show the order in which to hike the trail." },
            { letter: "C", text: "They group information by topic so it is easy to find." },
            { letter: "D", text: "They mark which rules apply only to children." }
          ],
          correct: "C"
        },
        {
          id: "meadow",
          sol: "9.RI.3.A",
          stem: "Which TWO rules on the notice most directly protect the alpine meadow? Select TWO.",
          choices: [
            { letter: "A", text: "Permits are limited to 150 per day." },
            { letter: "B", text: "Turn back by 2:00 p.m. if you have not reached the summit." },
            { letter: "C", text: "Stay on marked paths." },
            { letter: "D", text: "Call the ranger station from the emergency phone." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "unreliable",
          sol: "9.RV.1.C",
          stem: "In sentence 10, the word unreliable most nearly means —",
          choices: [
            { letter: "A", text: "costly to use" },
            { letter: "B", text: "entirely absent" },
            { letter: "C", text: "overly loud" },
            { letter: "D", text: "not dependable" }
          ],
          correct: "D"
        },
        {
          id: "sameday",
          sol: "9.RI.2.B",
          stem: "The notice includes sentence 5, about same-day permits, mainly to —",
          choices: [
            { letter: "A", text: "explain why the visitor center opens at 7:00 a.m." },
            { letter: "B", text: "warn hikers to reserve early or arrive early" },
            { letter: "C", text: "suggest that weekends are the best time to hike" },
            { letter: "D", text: "show that permits cost more on weekends" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c36-coding-requirement",
      family: "G9",
      title: "Every Student Should Write Code",
      kind: "Argument · 9.RI",
      blurb: "A student editorial argues for a required semester of computer programming.",
      level: 3,
      passage:
        "<p>" + N(1) + "Our school requires every student to take a semester of health and a semester of personal finance, and for good reason: both teach skills we will use for the rest of our lives. " +
        N(2) + "It is time to add a semester of computer programming to that list. " +
        N(3) + "Code now runs nearly everything we touch, from the traffic lights on Route 50 to the app that tells us when the cafeteria line is short. " +
        N(4) + "Students who never look under the hood of these tools will use them without understanding them. " +
        N(5) + "Some argue that not every student will become a programmer, so a required course wastes time. " +
        N(6) + "But not every student becomes a doctor, and we still require health class. " +
        N(7) + "The point is not to train professionals; it is to give everyone enough knowledge to ask good questions. " +
        N(8) + "Programming also teaches a way of thinking. " +
        N(9) + "When my code fails, I have to break the problem into smaller pieces, test each one, and fix my mistakes one at a time. " +
        N(10) + "Last year, our district surveyed students who took the elective Intro to Programming, and 68 percent said the course improved how they approached problems in other subjects, including math and science. " +
        N(11) + "Of course, a requirement would cost money. " +
        N(12) + "The district would need trained teachers and working computers in every school. " +
        N(13) + "Yet the elective already has a waiting list of more than ninety students, which suggests the demand is already here. " +
        N(14) + "A required course would simply open the door that so many students are already knocking on." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which sentence states the main claim of the editorial about programming?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "B"
        },
        {
          id: "counter",
          sol: "9.RI.1.C",
          stem: "The writer addresses the opposing view in sentences 5 and 6 mainly to —",
          choices: [
            { letter: "A", text: "admit that a programming course would waste time" },
            { letter: "B", text: "show that most students want to become doctors" },
            { letter: "C", text: "argue that health class should no longer be required" },
            { letter: "D", text: "answer the objection by comparing coding to health class" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence provides the strongest evidence that learning to program helps students in other subjects?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "C"
        },
        {
          id: "cost",
          sol: "9.RI.2.B",
          stem: "Sentences 11 and 12 contribute to the editorial's argument by —",
          choices: [
            { letter: "A", text: "admitting a real cost before arguing that demand justifies it" },
            { letter: "B", text: "showing that the district cannot afford the course" },
            { letter: "C", text: "listing the subjects that programming helps with" },
            { letter: "D", text: "explaining how students should test their code" }
          ],
          correct: "A"
        },
        {
          id: "door",
          sol: "9.RV.1.F",
          stem: "In sentence 14, the phrase the door that so many students are already knocking on suggests that —",
          choices: [
            { letter: "A", text: "the computer lab is often locked during lunch" },
            { letter: "B", text: "many students already want to learn programming" },
            { letter: "C", text: "students are growing impatient with their teachers" },
            { letter: "D", text: "the course will be held in a brand-new building" }
          ],
          correct: "B"
        },
        {
          id: "need",
          sol: "9.RI.1.B",
          stem: "According to the editorial, what would the district need in order to require a programming course?",
          choices: [
            { letter: "A", text: "a waiting list of ninety students" },
            { letter: "B", text: "a survey of every parent in the district" },
            { letter: "C", text: "a new semester of personal finance" },
            { letter: "D", text: "trained teachers and working computers" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── VOCABULARY ───────────────────────── */
    {
      id: "g9-rv-c36-addis-corner",
      family: "G9",
      title: "The Festival Rush",
      kind: "Vocabulary · 9.RV",
      blurb: "When the injera runs out, Selam's grandmother shows her how to keep the kitchen going.",
      level: 2,
      passage:
        "<p>" + N(1) + "Selam's grandmother had opened Addis Corner with two tables, one stove, and a recipe box that had traveled with her across an ocean. " +
        N(2) + "She was famously <strong>frugal</strong>: she saved onion skins for broth, reused takeout bags as shelf liners, and never threw away a heel of bread. " +
        N(3) + "On the Saturday of the neighborhood festival, the restaurant was busier than it had ever been. " +
        N(4) + "By two o'clock the supply of injera had <strong>dwindled</strong> from four tall stacks to a single sad round, and the delivery truck was stuck in traffic. " +
        N(5) + "Selam panicked, but her grandmother simply tied her headscarf tighter. " +
        N(6) + "\"When you run out of what you planned,\" she said, \"you <strong>improvise</strong>.\" " +
        N(7) + "She pulled flour from the back shelf and mixed a quick batter, and soon thin pancakes were bubbling on the griddle. " +
        N(8) + "They were not true injera, which takes days to ferment, but they were warm and soft, and they held the spicy lentil stew just as well. " +
        N(9) + "The <strong>aromatic</strong> steam of berbere and garlic drifted out the open door and pulled in even more customers. " +
        N(10) + "Selam took orders, carried plates, and refilled water glasses until her feet throbbed. " +
        N(11) + "At closing time her grandmother handed her the recipe box. " +
        N(12) + "\"Today you were <strong>indispensable</strong>,\" she said. " +
        N(13) + "\"I could not have done it without you.\" " +
        N(14) + "Selam walked home <strong>jubilant</strong>, the box tucked under her arm like a trophy, though she knew it was really a promise." +
        "</p>",
      claims: [
        {
          id: "frugal",
          sol: "9.RV.1.C",
          stem: "Which details from sentence 2 best help the reader understand the meaning of frugal?",
          choices: [
            { letter: "A", text: "two tables and one stove" },
            { letter: "B", text: "a recipe box that crossed an ocean" },
            { letter: "C", text: "saving onion skins and reusing bags" },
            { letter: "D", text: "a busy neighborhood festival" }
          ],
          correct: "C"
        },
        {
          id: "dwindled",
          sol: "9.RV.1.C",
          stem: "In sentence 4, the word dwindled most nearly means —",
          choices: [
            { letter: "A", text: "grew smaller" },
            { letter: "B", text: "burned" },
            { letter: "C", text: "sold cheaply" },
            { letter: "D", text: "went stale" }
          ],
          correct: "A"
        },
        {
          id: "indispensable",
          sol: "9.RV.1.B",
          stem: "The word indispensable is built from in- (not) and dispense (to do without). Based on these parts, indispensable in sentence 12 means —",
          choices: [
            { letter: "A", text: "easily replaced" },
            { letter: "B", text: "slow to finish" },
            { letter: "C", text: "careful with money" },
            { letter: "D", text: "absolutely necessary" }
          ],
          correct: "D"
        },
        {
          id: "aromatic",
          sol: "9.RV.1.E",
          stem: "The author could have written smelly instead of aromatic in sentence 9. Compared with smelly, aromatic suggests a scent that is —",
          choices: [
            { letter: "A", text: "sharp and unpleasant" },
            { letter: "B", text: "pleasant and inviting" },
            { letter: "C", text: "faint and hard to notice" },
            { letter: "D", text: "artificial and strong" }
          ],
          correct: "B"
        },
        {
          id: "trophy",
          sol: "9.RV.1.F",
          stem: "In sentence 14, Selam carries the box like a trophy, though she knew it was really a promise. This comparison suggests that the recipe box —",
          choices: [
            { letter: "A", text: "was won by Selam in a festival cooking contest" },
            { letter: "B", text: "is too heavy for Selam to carry all the way home" },
            { letter: "C", text: "is a reward that also means a duty to carry on the cooking" },
            { letter: "D", text: "holds recipes Selam has promised to keep secret" }
          ],
          correct: "C"
        },
        {
          id: "improvise",
          sol: "9.RV.1.B",
          stem: "The word improvise comes from a Latin word meaning not foreseen. Based on this origin and sentences 6–8, to improvise is to —",
          choices: [
            { letter: "A", text: "make something on the spot without a plan" },
            { letter: "B", text: "follow a family recipe exactly as written" },
            { letter: "C", text: "order more supplies well in advance" },
            { letter: "D", text: "cook food slowly over a low heat" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rv-c36-blackhorn-ridge",
      family: "G9",
      title: "The Ledge on Blackhorn Ridge",
      kind: "Vocabulary · 9.RV",
      blurb: "Tomasz and Yuki cross a narrow ledge as a storm builds.",
      level: 3,
      passage:
        "<p>" + N(1) + "The guidebook warned that the last mile of Blackhorn Ridge was <strong>precipitous</strong>, and Tomasz understood the word the moment he reached it: the trail clung to a ledge, and on the left side the slope dropped away so sharply that he could see the tops of the pine trees below. " +
        N(2) + "He and Yuki would have to <strong>traverse</strong> the ledge, crossing it from one end to the other, before they could descend to the lake. " +
        N(3) + "Up here, the vegetation was <strong>sparse</strong>; only a few stubborn shrubs and patches of lichen grew between the rocks. " +
        N(4) + "Yuki pointed at a twisted pine that had rooted itself in a crack. " +
        N(5) + "\"Look at that thing,\" she said. " +
        N(6) + "\"Wind, ice, no soil, and it's still here.\" " +
        N(7) + "Tomasz thought the tree looked <strong>resilient</strong>, bent by a hundred storms but never broken. " +
        N(8) + "Halfway across, a bank of dark clouds rolled over the western peaks, and the sky took on an <strong>ominous</strong> greenish tint. " +
        N(9) + "Neither of them spoke; they simply walked faster, each footstep placed with care. " +
        N(10) + "When they finally stepped off the ledge onto the wide, grassy saddle, Tomasz let out a laugh that surprised him. " +
        N(11) + "His legs were shaking, and his heart was pounding like a drum in a parade, yet he felt more awake than he had in months. " +
        N(12) + "The crossing had been frightening, but it had also been <strong>exhilarating</strong>. " +
        N(13) + "Behind them, the first drops of rain began to darken the rocks." +
        "</p>",
      claims: [
        {
          id: "precipitous",
          sol: "9.RV.1.C",
          stem: "Which words from sentence 1 best help the reader understand the meaning of precipitous?",
          choices: [
            { letter: "A", text: "the guidebook warned" },
            { letter: "B", text: "the slope dropped away so sharply" },
            { letter: "C", text: "the moment he reached it" },
            { letter: "D", text: "the tops of the pine trees" }
          ],
          correct: "B"
        },
        {
          id: "traverse",
          sol: "9.RV.1.B",
          stem: "The word traverse comes from Latin parts meaning across and turn. Which phrase in sentence 2 restates this meaning?",
          choices: [
            { letter: "A", text: "He and Yuki would have to" },
            { letter: "B", text: "before they could descend to the lake" },
            { letter: "C", text: "would have to traverse the ledge" },
            { letter: "D", text: "crossing it from one end to the other" }
          ],
          correct: "D"
        },
        {
          id: "ominous",
          sol: "9.RV.1.E",
          stem: "In sentence 8, the sky takes on an ominous tint. Compared with dark, the word ominous adds a sense that the sky —",
          choices: [
            { letter: "A", text: "warns that something bad may happen" },
            { letter: "B", text: "is beautiful and calming to look at" },
            { letter: "C", text: "is changing color very slowly" },
            { letter: "D", text: "is too hazy to see through clearly" }
          ],
          correct: "A"
        },
        {
          id: "drum",
          sol: "9.RV.1.F",
          stem: "In sentence 11, Tomasz's heart is pounding like a drum in a parade. This simile suggests that his heartbeat is —",
          choices: [
            { letter: "A", text: "slow, steady, and relaxed" },
            { letter: "B", text: "weak and painfully uneven" },
            { letter: "C", text: "loud and full of excitement" },
            { letter: "D", text: "quiet and barely noticeable" }
          ],
          correct: "C"
        },
        {
          id: "resilient",
          sol: "9.RV.1.E",
          stem: "Sentence 7 calls the pine resilient, while sentence 3 calls the shrubs stubborn. Compared with stubborn, resilient has a connotation that is more —",
          choices: [
            { letter: "A", text: "critical, suggesting a refusal to change" },
            { letter: "B", text: "admiring, suggesting strength to recover" },
            { letter: "C", text: "neutral, describing only the tree's size" },
            { letter: "D", text: "fearful, suggesting danger to hikers" }
          ],
          correct: "B"
        },
        {
          id: "exhilarating",
          sol: "9.RV.1.B",
          stem: "As used in sentence 12, the word exhilarating most nearly means —",
          choices: [
            { letter: "A", text: "exhausting and dull" },
            { letter: "B", text: "dangerous and foolish" },
            { letter: "C", text: "confusing and strange" },
            { letter: "D", text: "thrilling and energizing" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS ───────────────────────── */
    {
      id: "g9-dsr-c36-millbrook-creek",
      family: "G9",
      title: "Cleanup Day: Flyer + Journal",
      kind: "Paired texts · 9.DSR",
      blurb: "A creek alliance's flyer and a volunteer's journal describe the same cleanup.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Flyer from the Millbrook Creek Alliance</strong></p>" +
        "<p>" + N(1) + "Join us Saturday, April 18, from 8:00 a.m. to noon for the Spring Millbrook Creek Cleanup! " +
        N(2) + "Last year, 140 volunteers removed more than 2,000 pounds of trash from the creek and its banks, including 31 tires and a rusted washing machine. " +
        N(3) + "This year our goal is to clear the two-mile stretch between Oak Street Park and the old mill dam. " +
        N(4) + "We provide gloves, grabbers, bags, and water; you provide sturdy shoes and clothes that can get muddy. " +
        N(5) + "Volunteers under 16 must come with an adult. " +
        N(6) + "Every helper receives a free T-shirt, and students can earn up to four hours of community service. " +
        N(7) + "Meet at the Oak Street Park pavilion to sign in. " +
        N(8) + "Many hands make a clean creek!</p>" +
        "<p><strong>Text 2 — From Joaquín's Journal</strong></p>" +
        "<p>" + N(9) + "I signed up for the creek cleanup for the service hours and the T-shirt, I'll admit it. " +
        N(10) + "The flyer made it sound like a party, with its exclamation points and its many hands. " +
        N(11) + "Nobody mentioned that the mud at the old mill dam comes up to your shins and tries to keep your boots. " +
        N(12) + "For the first hour I mostly complained. " +
        N(13) + "Then my group found a shopping cart wedged under a fallen log, and it took six of us, pulling and laughing and slipping, to drag it out. " +
        N(14) + "A woman who has lived beside the creek for fifty years brought us lemonade and told us she used to catch crayfish there as a girl, before the trash piled up. " +
        N(15) + "She said she hadn't seen the water this clear since then. " +
        N(16) + "I still have the T-shirt, but that's not what I remember." +
        "</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          stem: "Which idea do both the Millbrook flyer and Joaquín's journal support?",
          choices: [
            { letter: "A", text: "The cleanup is mainly a chance to earn a free T-shirt." },
            { letter: "B", text: "Working together makes a big cleanup job possible." },
            { letter: "C", text: "The creek has always been too polluted for wildlife." },
            { letter: "D", text: "Volunteers under 16 should not join cleanups." }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "9.DSR.E",
          stem: "Compared with the flyer, Joaquín's journal presents the cleanup as —",
          choices: [
            { letter: "A", text: "shorter and better organized" },
            { letter: "B", text: "less useful to the community" },
            { letter: "C", text: "mostly about earning service hours" },
            { letter: "D", text: "messier and harder, but more meaningful" }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          stem: "Select TWO sentences, one from each text, that together best show how much trash had built up in Millbrook Creek. Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "conclude",
          sol: "9.DSR.E",
          stem: "Using both texts, a reader can best conclude that the Millbrook Creek cleanup —",
          choices: [
            { letter: "A", text: "is mainly a way for students to earn T-shirts" },
            { letter: "B", text: "was poorly planned by the creek alliance" },
            { letter: "C", text: "restored something the neighbors had lost" },
            { letter: "D", text: "should be moved to a different creek" }
          ],
          correct: "C"
        },
        {
          id: "under16",
          sol: "9.RI.1.B",
          stem: "According to the flyer, what must volunteers under 16 do?",
          choices: [
            { letter: "A", text: "bring their own gloves" },
            { letter: "B", text: "come with an adult" },
            { letter: "C", text: "sign in at the mill dam" },
            { letter: "D", text: "earn four service hours" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "9.RI.1.C",
          stem: "The Millbrook Creek Alliance wrote the flyer mainly to —",
          choices: [
            { letter: "A", text: "describe the history of the old mill dam" },
            { letter: "B", text: "warn residents not to swim in the creek" },
            { letter: "C", text: "thank last year's volunteers by name" },
            { letter: "D", text: "recruit volunteers and give them key details" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-dsr-c36-plannery-update",
      family: "G9",
      title: "Plannery 2.0: Release Notes + Review",
      kind: "Paired texts · 9.DSR",
      blurb: "A student coding club announces an update, and a longtime user responds.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Release Notes: Plannery 2.0</strong></p>" +
        "<p>" + N(1) + "Thank you for using Plannery, the homework planner built by students in the Eastfield High coding club. " +
        N(2) + "Version 2.0 is our biggest update yet. " +
        N(3) + "The calendar has a fresh new look, with smaller text and softer colors so you can see your whole month at a glance. " +
        N(4) + "Assignments now sync automatically with your teachers' class pages, so you'll never have to type a due date again. " +
        N(5) + "We also added a dark mode for late-night studying. " +
        N(6) + "Because so many of you asked, reminders can now be set for any time, not just 7:00 p.m. " +
        N(7) + "We tested this version with twenty club members over three weeks. " +
        N(8) + "As always, tell us what you think using the Feedback button. " +
        N(9) + "We read every message.</p>" +
        "<p><strong>Text 2 — Review posted by a Plannery user</strong></p>" +
        "<p>" + N(10) + "I've used Plannery every day since eighth grade, and the new automatic sync is honestly amazing. " +
        N(11) + "I added my chemistry assignments in about four seconds. " +
        N(12) + "But I have a vision impairment, and the \"fresh new look\" has made the calendar nearly impossible for me to read. " +
        N(13) + "The smaller text and pale gray numbers blend into the background, even when I zoom in. " +
        N(14) + "The old version had big, dark numbers that I never had to squint at. " +
        N(15) + "I sent a message through the Feedback button last week. " +
        N(16) + "I'm hoping \"we read every message\" is true, because I'd hate to switch apps. " +
        N(17) + "Please consider adding a large-text option. " +
        N(18) + "Not every user looks at a screen the same way, and twenty club members can't stand in for all of us." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          stem: "On which point do the Plannery release notes and the review agree?",
          choices: [
            { letter: "A", text: "The smaller text is easier to read." },
            { letter: "B", text: "Dark mode is the most important change." },
            { letter: "C", text: "The automatic sync saves users time." },
            { letter: "D", text: "The app was tested with enough users." }
          ],
          correct: "C"
        },
        {
          id: "challenge",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does the reviewer most directly challenge in sentence 18?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "A"
        },
        {
          id: "quotes",
          sol: "9.DSR.E",
          stem: "Based on both texts, why does the reviewer put fresh new look in quotation marks in sentence 12?",
          choices: [
            { letter: "A", text: "to praise the designers' choice of softer colors" },
            { letter: "B", text: "to question whether the change helps every user" },
            { letter: "C", text: "to show that the phrase was copied by mistake" },
            { letter: "D", text: "to suggest that the calendar has not changed" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          stem: "Select TWO sentences, one from each text, that together show why the Plannery update created a problem for some users. Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "praise",
          sol: "9.RI.2.B",
          stem: "The reviewer begins with praise in sentences 10 and 11 mainly to —",
          choices: [
            { letter: "A", text: "prove an understanding of how the sync was coded" },
            { letter: "B", text: "convince new readers to download the app" },
            { letter: "C", text: "explain how to add chemistry assignments" },
            { letter: "D", text: "show a loyal user is making a fair complaint" }
          ],
          correct: "D"
        },
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of the Plannery review?",
          choices: [
            { letter: "A", text: "The update is useful but needs a large-text option." },
            { letter: "B", text: "Plannery should return to its eighth-grade version." },
            { letter: "C", text: "Automatic sync is the only feature that matters." },
            { letter: "D", text: "Dark mode makes the calendar easier for everyone." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-dsr-c36-copper-notch",
      family: "G9",
      title: "Copper Notch: Guide + Blog",
      kind: "Paired texts · 9.DSR",
      blurb: "A trail guide's warnings and a weekend hiker's account of the same climb.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From a Regional Trail Guide</strong></p>" +
        "<p>" + N(1) + "Copper Notch Trail climbs 2,300 feet in 4.2 miles from the Ferris Creek parking area to an open granite summit. " +
        N(2) + "The route is rated strenuous. " +
        N(3) + "The first two miles follow an old logging road through hardwood forest and are gently graded. " +
        N(4) + "Above the second stream crossing, the trail steepens sharply and becomes rocky; hikers should expect to use their hands on several short ledges. " +
        N(5) + "Water is unreliable above the stream crossing after mid-July. " +
        N(6) + "Allow six to seven hours for the round trip. " +
        N(7) + "The summit offers views of three counties, but exposure to wind and lightning is significant. " +
        N(8) + "The trail is not recommended in wet or icy conditions, as the ledges become slick.</p>" +
        "<p><strong>Text 2 — From the Blog Ridge Notes, by a Weekend Hiker</strong></p>" +
        "<p>" + N(9) + "Everyone told me Copper Notch was strenuous, and I nodded the way you nod at a weather forecast you plan to ignore. " +
        N(10) + "The first two miles were a pleasant stroll, and I started to think the guidebooks were written for people who never leave the couch. " +
        N(11) + "Then came the stream crossing. " +
        N(12) + "Within ten minutes I was on all fours, hauling myself up ledges I had not imagined, and my water bottle, which I had planned to refill, stayed stubbornly empty because the stream above was bone dry in the August heat. " +
        N(13) + "I reached the summit at three o'clock, sunburned and dizzy, and the view of three counties was every bit as huge as promised. " +
        N(14) + "I just wish I had read the guidebook as a set of instructions instead of a dare." +
        "</p>",
      claims: [
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "How does the blog's treatment of Copper Notch Trail differ from the guide's?",
          choices: [
            { letter: "A", text: "The guide praises the summit view; the blog calls it disappointing." },
            { letter: "B", text: "The guide gives objective facts; the blog tells one hiker's experience of them." },
            { letter: "C", text: "The guide calls the trail easy; the blog calls it strenuous." },
            { letter: "D", text: "The guide describes a different trail from the one in the blog." }
          ],
          correct: "B"
        },
        {
          id: "confirm",
          sol: "9.DSR.E",
          stem: "Which detail in the blog confirms a specific warning from the guide?",
          choices: [
            { letter: "A", text: "the view of three counties from the top" },
            { letter: "B", text: "the pleasant stroll of the first two miles" },
            { letter: "C", text: "the arrival at the summit at three o'clock" },
            { letter: "D", text: "the empty water bottle above the stream" }
          ],
          correct: "D"
        },
        {
          id: "section",
          sol: "9.DSR.D",
          stem: "Both texts support which idea about the section of trail above the stream crossing?",
          choices: [
            { letter: "A", text: "It is the easiest part of the whole hike." },
            { letter: "B", text: "It follows an old logging road." },
            { letter: "C", text: "It is steep enough that hikers use their hands." },
            { letter: "D", text: "It has reliable water all summer long." }
          ],
          correct: "C"
        },
        {
          id: "dare",
          sol: "9.DSR.E",
          stem: "In sentence 14, the blogger's wish to have read the guidebook as instructions instead of a dare suggests that the blogger —",
          choices: [
            { letter: "A", text: "had treated the guide's warnings as a challenge, not advice" },
            { letter: "B", text: "thinks the guide exaggerated the trail's difficulty" },
            { letter: "C", text: "plans to write a new guidebook for the trail" },
            { letter: "D", text: "never actually heard the trail's rating before" }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "Text 2, the blog about Copper Notch, is organized mainly as —",
          choices: [
            { letter: "A", text: "a list of rules for future hikers" },
            { letter: "B", text: "a comparison of two different trails" },
            { letter: "C", text: "a narrative moving from overconfidence to regret" },
            { letter: "D", text: "a problem followed by several solutions" }
          ],
          correct: "C"
        },
        {
          id: "fact",
          sol: "9.RI.1.C",
          stem: "Which sentence from the trail guide states a measurable fact rather than a judgment or a recommendation?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
