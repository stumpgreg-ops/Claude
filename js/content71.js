/* SOL Labyrinth — v71 content: Grade 10 mid-tier passages (Virginia G10, levels 51-64).
 * Seventeen original packs (310-370 words; poems 18-22 lines; paired texts 170-200 words each)
 * built around a zoo keeper, a wildfire lookout, a quilting circle and a skate park.
 * Original text only; no real people. Loaded after content.js; pushes into HEIST_PACKS. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── Literary · zoo keeper (level 1) ───────────── */
    {
      id: "g10-rl-c71-otter-target",
      family: "G10",
      title: "The Blue Target",
      kind: "Literary · 10.RL",
      blurb: "A new assistant keeper, a stubborn young otter, and the hardest job of the week: doing nothing.",
      level: 1,
      passage:
        "<p>" + N(1) + "On his fourth morning at the Millbrook Zoo, Malik Haddad still smelled like fish by nine o'clock. " +
        N(2) + "He had been hired as an assistant keeper for the river otters, and so far his job seemed to be scrubbing rocks, chopping smelt, and watching Odile Fournier do everything he wanted to do. " +
        N(3) + "Odile had worked with otters for twenty-two years, and she moved around the exhibit as calmly as if she were walking through her own kitchen.</p>" +
        "<p>" + N(4) + "\"Today you try target training,\" she said, handing him a short pole with a blue ball on the end. " +
        N(5) + "The idea was simple: an otter that learned to touch its nose to the ball could be guided onto a scale or up to the fence for a health check without anyone grabbing it. " +
        N(6) + "Three of the otters already knew the trick. " +
        N(7) + "The fourth, a young male named Pebble, did not.</p>" +
        "<p>" + N(8) + "Malik crouched at the fence and held out the target. " +
        N(9) + "Pebble looked at it, sneezed, and slid into the pool. " +
        N(10) + "Malik waved the pole closer to the water. " +
        N(11) + "Pebble swam to the far side and floated on his back, eyes closed, as if Malik had already gone home. " +
        N(12) + "After ten minutes, Malik's knees ached and his face felt hot.</p>" +
        "<p>" + N(13) + "\"He's ignoring me,\" he said.</p>" +
        "<p>" + N(14) + "\"He's studying you,\" Odile said. " +
        N(15) + "\"You keep chasing him with that ball. " +
        N(16) + "To an otter, something that chases you is not a game.\" " +
        N(17) + "She told him to hold the target still, low and to one side, and to say nothing at all.</p>" +
        "<p>" + N(18) + "It was the hardest thing Malik had done all week. " +
        N(19) + "He held the pole until his arm trembled. " +
        N(20) + "A family stopped at the glass, watched him do nothing, and moved on. " +
        N(21) + "Then, slowly, Pebble climbed out onto the rocks, shook himself, and wandered closer, pretending to be interested in a leaf. " +
        N(22) + "He sniffed the air near the blue ball. " +
        N(23) + "At last he bumped it with his nose, quick as a sneeze.</p>" +
        "<p>" + N(24) + "Malik pressed the clicker and tossed a piece of smelt, and Pebble caught it in midair.</p>" +
        "<p>" + N(25) + "\"One touch,\" Odile said, smiling. " +
        N(26) + "\"Tomorrow, we try for two.\"</p>" +
        "<p>" + N(27) + "Malik realized he was grinning, and that he no longer noticed the smell of fish at all.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Malik and Pebble?",
          choices: [
            { letter: "A", text: "Patience and calm earn trust better than pressure does." },
            { letter: "B", text: "Experienced workers rarely share what they really know." },
            { letter: "C", text: "Animals in zoos learn faster when visitors are watching." },
            { letter: "D", text: "New jobs are mostly made up of dull and messy chores." }
          ],
          correct: "A"
        },
        {
          id: "malik",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Taken together, sentences 2 and 12 characterize Malik at the start as —",
          choices: [
            { letter: "A", text: "lazy and unwilling to do his share of the cleaning" },
            { letter: "B", text: "confident that he already knows more than Odile" },
            { letter: "C", text: "eager to do real work but quick to get frustrated" },
            { letter: "D", text: "nervous about being near animals that might bite" }
          ],
          correct: "C"
        },
        {
          id: "advice",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "Odile's advice in sentences 15 through 17 functions in the plot mainly to —",
          choices: [
            { letter: "A", text: "end the training session before Pebble is harmed" },
            { letter: "B", text: "change Malik's approach and set up his success" },
            { letter: "C", text: "show that Odile doubts Malik should be a keeper" },
            { letter: "D", text: "explain why the other otters learned the trick" }
          ],
          correct: "B"
        },
        {
          id: "kitchen",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "The comparison in sentence 3, as if she were walking through her own kitchen, suggests that Odile —",
          choices: [
            { letter: "A", text: "would rather be cooking at home than at work" },
            { letter: "B", text: "prepares the otters' meals with great care" },
            { letter: "C", text: "treats the otters as if they were her pets" },
            { letter: "D", text: "feels completely at ease inside the exhibit" }
          ],
          correct: "D"
        },
        {
          id: "trembled",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 19, the word trembled most nearly means —",
          choices: [
            { letter: "A", text: "stretched" },
            { letter: "B", text: "shook" },
            { letter: "C", text: "dropped" },
            { letter: "D", text: "stiffened" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author ends with sentence 27, which returns to the smell of fish from sentence 1, mainly to —",
          choices: [
            { letter: "A", text: "remind readers how unpleasant the job can be" },
            { letter: "B", text: "suggest that Malik will soon quit his job at the zoo" },
            { letter: "C", text: "show that Odile's methods have worn him out" },
            { letter: "D", text: "show how his attitude toward the job has changed" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Sentence 18 is somewhat ironic because —",
          choices: [
            { letter: "A", text: "Malik had expected the otters to be easy to train" },
            { letter: "B", text: "the family at the glass did not see the otter at all" },
            { letter: "C", text: "the hardest task of the week was holding perfectly still" },
            { letter: "D", text: "Odile praised Malik even though Pebble touched the ball only once" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── Literary · wildfire lookout (level 2) ───────────── */
    {
      id: "g10-rl-c71-cinder-peak",
      family: "G10",
      title: "First Sighting",
      kind: "Literary · 10.RL",
      blurb: "A summer in a fire lookout tower, a thin gray thread on the ridge, and a call nobody wants to get wrong.",
      level: 2,
      passage:
        "<p>" + N(1) + "The tower on Cinder Peak was fourteen feet square, glass on every side, and by July Joaquin Reyes knew every inch of it. " +
        N(2) + "He knew the creak of the third stair, the stool with glass insulators on its feet for lightning storms, and the round map table in the center called the firefinder, where his aunt Paz could sight a smoke through a brass ring and read its direction to the degree. " +
        N(3) + "What he did not know, after five weeks, was how to be useful.</p>" +
        "<p>" + N(4) + "Paz had been the lookout here for nine summers. " +
        N(5) + "She scanned the ridges every fifteen minutes, wrote the weather in a green logbook, and talked on the radio in a voice so even it made emergencies sound like grocery lists. " +
        N(6) + "Joaquin mostly read paperbacks and watched hawks.</p>" +
        "<p>" + N(7) + "On the afternoon after a dry thunderstorm, Paz went down to the cistern for water, and Joaquin, bored, lifted the binoculars. " +
        N(8) + "Southwest, past the second ridge, a thin gray thread rose out of the timber. " +
        N(9) + "His heart jumped, then sank. " +
        N(10) + "It could be dust from a logging road. " +
        N(11) + "It could be mist steaming off the rocks. " +
        N(12) + "If he called it in and he was wrong, every lookout on the forest radio net would hear a fifteen-year-old cry wolf.</p>" +
        "<p>" + N(13) + "He made himself wait and watch, the way he had seen Paz do. " +
        N(14) + "Dust, she had told him once, drifts sideways and thins out. " +
        N(15) + "Smoke stands up, holds its color, and comes back. " +
        N(16) + "The thread wavered and faded, and then it thickened, bluish now, leaning but not breaking.</p>" +
        "<p>" + N(17) + "Paz's boots sounded on the stairs. " +
        N(18) + "\"Southwest,\" Joaquin said before she reached the top. " +
        N(19) + "\"I think it's real.\"</p>" +
        "<p>" + N(20) + "She looked once, swung the sight on the firefinder, and picked up the radio. " +
        N(21) + "\"Cinder Peak, reporting a smoke,\" she said, and then she handed the microphone to him. " +
        N(22) + "\"Read them the bearing. You found it.\"</p>" +
        "<p>" + N(23) + "His voice cracked on the numbers, but he got them right. " +
        N(24) + "By evening a ground crew had circled the lightning strike at a quarter acre. " +
        N(25) + "That night, under the day's weather, Paz wrote in the green logbook: <em>Smoke reported 3:42 p.m., first sighting J. Reyes.</em> " +
        N(26) + "Joaquin read the line three times before he went to sleep.</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The conflict Joaquin faces in sentences 9 through 12 is best described as a struggle between —",
          choices: [
            { letter: "A", text: "his love of reading and his aunt's strict rules" },
            { letter: "B", text: "his fear of embarrassment and his duty to report" },
            { letter: "C", text: "his wish to go home and his promise to stay" },
            { letter: "D", text: "his trust in the radio and his doubts about the map" }
          ],
          correct: "B"
        },
        {
          id: "grocery",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In sentence 5, saying that Paz's voice made emergencies sound like grocery lists suggests that she —",
          choices: [
            { letter: "A", text: "handles serious situations with steady calm" },
            { letter: "B", text: "does not take her lookout duties seriously" },
            { letter: "C", text: "is distracted by everyday chores in the tower" },
            { letter: "D", text: "speaks too quickly for others to follow her" }
          ],
          correct: "A"
        },
        {
          id: "joaquin",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 3 and 6 characterize Joaquin, early in the summer, as someone who —",
          choices: [
            { letter: "A", text: "resents being sent to the mountains for the summer" },
            { letter: "B", text: "secretly knows more about fire than his aunt does" },
            { letter: "C", text: "spends most of his time studying the forest maps" },
            { letter: "D", text: "feels more like an idle guest than a real helper" }
          ],
          correct: "D"
        },
        {
          id: "dustsmoke",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author includes Paz's earlier advice about dust and smoke in sentences 14 and 15 mainly to —",
          choices: [
            { letter: "A", text: "explain why the dry thunderstorm produced no rain at all" },
            { letter: "B", text: "suggest that Paz has often been wrong about smokes before" },
            { letter: "C", text: "show Joaquin using what he learned to judge carefully" },
            { letter: "D", text: "delay the moment when Paz returns from the cistern" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by Joaquin's afternoon in the Cinder Peak tower?",
          choices: [
            { letter: "A", text: "Careful attention can turn a bystander into a contributor." },
            { letter: "B", text: "Young people should not be trusted with serious tasks." },
            { letter: "C", text: "Nature is too unpredictable for anyone to understand." },
            { letter: "D", text: "Being alone in the wilderness makes people braver than before." }
          ],
          correct: "A"
        },
        {
          id: "crywolf",
          sol: "10.RV.1.E",
          sub: "10.RV.1.E.2",
          stem: "In sentence 12, the phrase cry wolf most nearly means to —",
          choices: [
            { letter: "A", text: "ask for help in a frightened voice" },
            { letter: "B", text: "report an animal near the fire tower" },
            { letter: "C", text: "complain loudly about a hard job" },
            { letter: "D", text: "raise an alarm that turns out false" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of the final two sentences (25 and 26) is best described as —",
          choices: [
            { letter: "A", text: "anxious and doubtful" },
            { letter: "B", text: "quietly proud" },
            { letter: "C", text: "bitterly amused" },
            { letter: "D", text: "openly boastful" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── Literary · quilting circle (level 3) ───────────── */
    {
      id: "g10-rl-c71-pinwheel",
      family: "G10",
      title: "A Seam of Light",
      kind: "Literary · 10.RL",
      blurb: "Jiwoo comes to a quilting circle to help her grandmother fit in. The plan does not go the way she expects.",
      level: 3,
      passage:
        "<p>" + N(1) + "Jiwoo had agreed to the Thursday quilting circle for one reason: her grandmother, who had moved from Daegu in March, had barely left the apartment since, and the flyer at the library promised \"conversation, coffee, and cloth.\" " +
        N(2) + "Jiwoo planned to sit beside her, translate when needed, and leave the actual sewing to people who cared about it.</p>" +
        "<p>" + N(3) + "The circle met in the back room of the Linwood Community Center, seven women and one retired mail carrier around two folding tables pushed together. " +
        N(4) + "Their current project was a raffle quilt for the food pantry, a pattern of red and gold pinwheels, and within ten minutes Jiwoo had been handed a rotary cutter, a stack of fabric, and a cheerful instruction from a woman named Delphine to \"just cut along the line, honey, the ruler does the thinking.\" " +
        N(5) + "Her grandmother, meanwhile, said nothing, folded her hands, and watched.</p>" +
        "<p>" + N(6) + "The ruler, it turned out, did not do the thinking. " +
        N(7) + "By the time Jiwoo had pieced her first block, two of the pinwheel's blades spun clockwise and two spun the other way, so that the whole square looked less like a pinwheel than a small, confused argument. " +
        N(8) + "Her face burned. " +
        N(9) + "She reached for the seam ripper.</p>" +
        "<p>" + N(10) + "Before she could use it, her grandmother put out a hand. " +
        N(11) + "She took the block, turned it over twice, and said something in Korean that Jiwoo did not translate, because it was about her. " +
        N(12) + "Then she threaded a needle, her fingers quick in a way Jiwoo had not seen in months, and began to stitch a thin gold line along the place where the blades collided, so that the mistake looked like a seam of light.</p>" +
        "<p>" + N(13) + "The table went quiet. " +
        N(14) + "Delphine leaned in. " +
        N(15) + "The retired mail carrier put on his reading glasses. " +
        N(16) + "\"Where did you learn that?\" Delphine asked, and Jiwoo, for once, translated every word, back and forth, for the next hour.</p>" +
        "<p>" + N(17) + "On the drive home, her grandmother hummed. " +
        N(18) + "Jiwoo held the odd block in her lap and understood that she had come to bring her grandmother into the room, and that her grandmother had ended up bringing her.</p>",
      claims: [
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Which situation in the story about the Linwood circle is most ironic?",
          choices: [
            { letter: "A", text: "Delphine gives cheerful advice that sounds simple." },
            { letter: "B", text: "The raffle quilt is being made to raise money for the food pantry." },
            { letter: "C", text: "Jiwoo came to draw her grandmother in but is drawn in instead." },
            { letter: "D", text: "The grandmother hums quietly on the drive back to the apartment." }
          ],
          correct: "C"
        },
        {
          id: "argument",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 7, describing the block as a small, confused argument mainly emphasizes —",
          choices: [
            { letter: "A", text: "the way the blades point in clashing directions" },
            { letter: "B", text: "the disagreement Jiwoo is having with Delphine" },
            { letter: "C", text: "the noise of the busy room at the community center" },
            { letter: "D", text: "the poor quality of the donated red and gold fabric" }
          ],
          correct: "A"
        },
        {
          id: "jiwoo",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 1 and 2 characterize Jiwoo, at the start, as —",
          choices: [
            { letter: "A", text: "anxious to prove that she is a talented quilter" },
            { letter: "B", text: "unwilling to spend any time with her grandmother" },
            { letter: "C", text: "eager to make friends with the circle's members" },
            { letter: "D", text: "devoted to her grandmother but not to sewing" }
          ],
          correct: "D"
        },
        {
          id: "quiet",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The author places the very short sentences 13 through 15 right after the grandmother's stitching mainly to —",
          choices: [
            { letter: "A", text: "show that the members disapprove of the repair" },
            { letter: "B", text: "slow the moment as everyone turns toward her" },
            { letter: "C", text: "suggest that Jiwoo is too embarrassed to look up" },
            { letter: "D", text: "signal that the meeting is about to come to an end" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by the events at the Linwood Community Center?",
          choices: [
            { letter: "A", text: "Sharing a hidden skill can restore a sense of belonging." },
            { letter: "B", text: "Mistakes in a project should always be removed right away." },
            { letter: "C", text: "Language barriers make friendship nearly impossible." },
            { letter: "D", text: "Young people learn crafts faster than older people do." }
          ],
          correct: "A"
        },
        {
          id: "ripper",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The grandmother's gesture in sentence 10, stopping Jiwoo from using the seam ripper, functions in the plot as —",
          choices: [
            { letter: "A", text: "a sign that she is angry about the ruined fabric" },
            { letter: "B", text: "a flashback to the grandmother's own first quilting lesson" },
            { letter: "C", text: "a minor detail that does not affect later events" },
            { letter: "D", text: "the turning point that moves attention to her skill" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The detail in sentence 17, that the grandmother hummed on the drive home, mainly creates a mood of —",
          choices: [
            { letter: "A", text: "lingering worry" },
            { letter: "B", text: "restless impatience" },
            { letter: "C", text: "quiet contentment" },
            { letter: "D", text: "playful mischief" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── Literary · skate park (level 2) ───────────── */
    {
      id: "g10-rl-c71-harmon-bowl",
      family: "G10",
      title: "The Lip of the Bowl",
      kind: "Literary · 10.RL",
      blurb: "Kofi can ollie the stairs and grind the ledge, but the deep bowl has stopped him for three weeks.",
      level: 2,
      passage:
        "<p>" + N(1) + "For three weeks Kofi Mensah had stood at the lip of the big bowl at Harmon Street Skate Park, board tail-down on the coping, and not dropped in. " +
        N(2) + "He could ollie the stairs by the parking lot. " +
        N(3) + "He could grind the low ledge until the wax smoked. " +
        N(4) + "But the bowl was eight feet deep, and every time he leaned forward, his back foot refused to follow the rest of him.</p>" +
        "<p>" + N(5) + "His friend Teo said the trick was not to think. " +
        N(6) + "His older sister said the trick was to think harder. " +
        N(7) + "The man who ran the board shop across the street said the trick was \"commitment,\" which sounded wise until Kofi realized it was the same word printed on the shop's T-shirts.</p>" +
        "<p>" + N(8) + "On Saturday the park was crowded, and Kofi took his place at the lip again. " +
        N(9) + "Beside him a girl who could not have been older than eight, in a helmet covered with dinosaur stickers, set her small board on the coping. " +
        N(10) + "She looked down, said \"Okay\" to no one, and leaned. " +
        N(11) + "She dropped, wobbled, landed on her hip at the bottom, and slid a few feet on her pads. " +
        N(12) + "Then she stood up, collected her board, and trudged back up the stairs to try again.</p>" +
        "<p>" + N(13) + "Kofi watched her do it four more times. " +
        N(14) + "She fell on three of them. " +
        N(15) + "Each time she climbed back to the lip looking not embarrassed but busy, like someone with a job to finish.</p>" +
        "<p>" + N(16) + "Something shifted in him. " +
        N(17) + "He had been treating the drop as a test he had to pass on the first try, in front of everyone. " +
        N(18) + "The girl was treating it as a thing you did badly until you did it well.</p>" +
        "<p>" + N(19) + "He stepped on, looked at the far wall instead of the bottom, and leaned. " +
        N(20) + "For one long second the world tipped toward him. " +
        N(21) + "Then his wheels caught the curve, his knees bent on their own, and he was rolling up the other side, only to slip off the top and land hard on his elbow pads.</p>" +
        "<p>" + N(22) + "The girl, waiting her turn, gave him a thumbs-up. " +
        N(23) + "Kofi laughed, rubbed his elbow, and climbed the stairs to go again.</p>",
      claims: [
        {
          id: "turn",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Which sentence marks the turning point in Kofi's struggle with the bowl?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Sentence 7 is mildly ironic because —",
          choices: [
            { letter: "A", text: "advice that sounds wise turns out to be a T-shirt slogan" },
            { letter: "B", text: "the shop owner has never once skated in the big bowl himself" },
            { letter: "C", text: "Kofi's sister gives him the opposite advice from Teo's" },
            { letter: "D", text: "Kofi buys a shirt even though he does not like the word" }
          ],
          correct: "A"
        },
        {
          id: "girl",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentence 15 characterizes the young skater as —",
          choices: [
            { letter: "A", text: "ashamed of falling in front of the older skaters" },
            { letter: "B", text: "focused on her task rather than on how she looks" },
            { letter: "C", text: "eager to show Kofi that she is the better skater" },
            { letter: "D", text: "tired of the bowl and ready to try something else" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story set at Harmon Street Skate Park?",
          choices: [
            { letter: "A", text: "Good advice from friends can solve almost any problem." },
            { letter: "B", text: "Younger children are usually braver than teenagers." },
            { letter: "C", text: "Skill on easy tricks guarantees skill on hard ones." },
            { letter: "D", text: "Accepting failure is part of learning something hard." }
          ],
          correct: "D"
        },
        {
          id: "advice",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author places the three pieces of advice in sentences 5 through 7 before the Saturday scene mainly to —",
          choices: [
            { letter: "A", text: "show that Kofi has many people who care about him" },
            { letter: "B", text: "show that words alone have not solved Kofi's problem" },
            { letter: "C", text: "introduce the characters who will help him at the end" },
            { letter: "D", text: "explain how Kofi first learned to ride a skateboard" }
          ],
          correct: "B"
        },
        {
          id: "trudged",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 12, the word trudged most nearly means —",
          choices: [
            { letter: "A", text: "walked with slow, heavy steps" },
            { letter: "B", text: "ran ahead with quick, light steps" },
            { letter: "C", text: "crawled on hands and knees" },
            { letter: "D", text: "rolled down on a skateboard" }
          ],
          correct: "A"
        },
        {
          id: "tipped",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 20, the image of the world tipping toward Kofi mainly conveys —",
          choices: [
            { letter: "A", text: "the crowd moving closer to watch him skate" },
            { letter: "B", text: "his anger at the girl for skating beside him" },
            { letter: "C", text: "the slope of the parking lot near the stairs" },
            { letter: "D", text: "the dizzy instant of committing to the drop" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── Informational · wildfire lookout (level 2) ───────────── */
    {
      id: "g10-ri-c71-ridge-eyes",
      family: "G10",
      title: "Eyes on the Ridge",
      kind: "Informational · 10.RI",
      blurb: "How fire lookouts find a smoke, pin down where it is, and why some towers are still staffed.",
      level: 2,
      passage:
        "<p>" + N(1) + "On a clear summer afternoon, a person standing in the glass cab at the top of a mountain tower can see a hundred miles or more. " +
        N(2) + "For more than a century, that view has been one of the oldest tools in wildfire protection. " +
        N(3) + "Lookouts, the people who staff these towers, scan the horizon for the first wisp of smoke and report it before a small fire can become a large one.</p>" +
        "<p>" + N(4) + "The work depends on a simple piece of equipment. " +
        N(5) + "At the center of most towers sits a firefinder, a flat map of the surrounding land mounted on a turntable, with a sighting ring that rotates around its edge. " +
        N(6) + "When a lookout spots smoke, she lines up the sight with the plume and reads the bearing, the direction from the tower measured in degrees. " +
        N(7) + "A single bearing tells a dispatcher which direction to look but not how far away the fire is. " +
        N(8) + "If a second tower also sees the smoke, though, the two bearings can be drawn as lines on a map, and the fire lies where they cross. " +
        N(9) + "This method, called triangulation, can place a smoke within a few hundred yards.</p>" +
        "<p>" + N(10) + "Lookouts do more than spot fires. " +
        N(11) + "Many record the weather several times a day, relay radio messages for crews working in canyons where signals cannot reach, and watch storms move across the ridges, noting where lightning strikes. " +
        N(12) + "Because lightning can smolder in a dead tree for days before it shows any smoke, a careful list of strike locations tells crews where to check.</p>" +
        "<p>" + N(13) + "In recent decades, many towers have closed, replaced by aircraft patrols, satellite images and mountaintop cameras that send pictures to a central office. " +
        N(14) + "These tools cover huge areas and never get tired. " +
        N(15) + "Yet in some regions, agencies have kept a number of towers staffed. " +
        N(16) + "Supervisors there point out that a trained human eye can tell drifting dust from rising smoke in seconds, and that a lookout who knows a landscape can notice when something simply looks wrong. " +
        N(17) + "In places where a single missed fire can threaten whole towns, many managers have decided that cameras and people work best together.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Eyes on the Ridge\"?",
          choices: [
            { letter: "A", text: "Cameras have fully replaced human lookouts in most regions." },
            { letter: "B", text: "Lookouts spend most of their working hours recording weather." },
            { letter: "C", text: "Trained lookouts still add value alongside newer technology." },
            { letter: "D", text: "Triangulation is the only accurate way to locate a wildfire." }
          ],
          correct: "C"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 7 through 9 of \"Eyes on the Ridge\" organized?",
          choices: [
            { letter: "A", text: "as a list of events in the order they happened" },
            { letter: "B", text: "as a limitation followed by a method that solves it" },
            { letter: "C", text: "as a comparison of two kinds of fire towers" },
            { letter: "D", text: "as a claim followed by an opposing view from experts" }
          ],
          correct: "B"
        },
        {
          id: "tri",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word triangulation in sentence 9 begins with tri-, as in tripod and triangle. Based on this, triangulation most likely involves —",
          choices: [
            { letter: "A", text: "using three points to fix a location" },
            { letter: "B", text: "measuring the height of a fire tower" },
            { letter: "C", text: "repeating one sighting many times" },
            { letter: "D", text: "dividing a map into two equal halves" }
          ],
          correct: "A"
        },
        {
          id: "lightning",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence best supports the idea that lookouts help crews find fires that have not yet produced smoke?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "D"
        },
        {
          id: "tired",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 14, the phrase never get tired mainly emphasizes —",
          choices: [
            { letter: "A", text: "a real strength of the newer detection tools" },
            { letter: "B", text: "a complaint that lookouts work too many hours" },
            { letter: "C", text: "a reason that cameras often miss small fires" },
            { letter: "D", text: "a problem with the way towers are scheduled" }
          ],
          correct: "A"
        },
        {
          id: "supervisors",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes the supervisors' observations in sentence 16 mainly to —",
          choices: [
            { letter: "A", text: "argue that every closed tower should reopen at once" },
            { letter: "B", text: "describe how lookouts are trained for the job" },
            { letter: "C", text: "explain why some agencies still staff towers" },
            { letter: "D", text: "show that cameras cannot see as far as people" }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The author's attitude toward fire lookouts is best described as —",
          choices: [
            { letter: "A", text: "dismissive and impatient" },
            { letter: "B", text: "respectful and balanced" },
            { letter: "C", text: "mournful and bitter" },
            { letter: "D", text: "amused and teasing" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── Informational · zoo keeper (level 1) ───────────── */
    {
      id: "g10-ri-c71-enrichment",
      family: "G10",
      title: "Keeping Zoo Animals Busy",
      kind: "Informational · 10.RI",
      blurb: "Frozen fruit, hidden insects and puzzle feeders: why keepers plan a zoo animal's day so carefully.",
      level: 1,
      passage:
        "<p>" + N(1) + "In the wild, animals spend most of their day working. " +
        N(2) + "A bear may walk miles looking for berries, a chimpanzee may crack nuts with a stone, and a lion may stalk prey for hours. " +
        N(3) + "In a zoo, food arrives on a regular schedule, and there are no predators to escape or rivals to avoid. " +
        N(4) + "That sounds like an easy life, but keepers have learned that an animal with nothing to do can become bored, stressed, or even ill.</p>" +
        "<p>" + N(5) + "To prevent this, zoos use enrichment, which means changes to an animal's surroundings or routine that encourage natural behavior. " +
        N(6) + "Enrichment comes in several forms. " +
        N(7) + "Food enrichment makes eating more of a challenge: keepers freeze fruit inside blocks of ice for monkeys, hide insects inside logs for meerkats, or hang meat high on a pole so that a tiger has to climb. " +
        N(8) + "Sensory enrichment uses smells and sounds, such as spices sprinkled on rocks or recordings of bird calls. " +
        N(9) + "Object enrichment includes puzzle feeders, balls, boxes and piles of leaves. " +
        N(10) + "Some animals also take part in training sessions, which give their minds work to do and make health checks easier.</p>" +
        "<p>" + N(11) + "Keepers do not simply toss in a new toy and walk away. " +
        N(12) + "They write down what the animal does before and after the change. " +
        N(13) + "Does the snow leopard pace less? " +
        N(14) + "Does the gorilla spend more time searching and less time sitting? " +
        N(15) + "If an item is ignored, keepers change it or try something else. " +
        N(16) + "Variety matters, because even a clever puzzle can become dull once an animal has solved it fifty times.</p>" +
        "<p>" + N(17) + "Visitors often enjoy enrichment too. " +
        N(18) + "Watching an elephant pull hay from a hanging net or a sea lion chase a floating ring is more interesting than watching an animal sleep. " +
        N(19) + "But the main goal is not entertainment for people. " +
        N(20) + "It is giving animals in human care a daily life that is as active, varied and healthy as possible.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which sentence best states the central idea of the passage about zoo enrichment?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How is the second paragraph (sentences 5 through 10) of the enrichment passage mainly organized?",
          choices: [
            { letter: "A", text: "a definition followed by types and examples" },
            { letter: "B", text: "a problem followed by several failed solutions" },
            { letter: "C", text: "a timeline of how zoos changed over the years" },
            { letter: "D", text: "an argument followed by a list of objections" }
          ],
          correct: "A"
        },
        {
          id: "stalk",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 2, the word stalk most nearly means —",
          choices: [
            { letter: "A", text: "frighten off" },
            { letter: "B", text: "follow quietly" },
            { letter: "C", text: "share with others" },
            { letter: "D", text: "carry away" }
          ],
          correct: "B"
        },
        {
          id: "results",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail best supports the idea that keepers judge enrichment by its results?",
          choices: [
            { letter: "A", text: "Keepers freeze fruit inside blocks of ice." },
            { letter: "B", text: "Visitors enjoy watching a sea lion play." },
            { letter: "C", text: "Keepers record behavior before and after." },
            { letter: "D", text: "Training sessions make health checks easier." }
          ],
          correct: "C"
        },
        {
          id: "questions",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The questions about the snow leopard and the gorilla in sentences 13 and 14 mainly show —",
          choices: [
            { letter: "A", text: "the kinds of changes keepers watch for" },
            { letter: "B", text: "that keepers are unsure enrichment works" },
            { letter: "C", text: "which animals are the hardest to train" },
            { letter: "D", text: "why some animals ignore new objects" }
          ],
          correct: "A"
        },
        {
          id: "visitors",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes sentences 17 and 18 about visitors mainly to —",
          choices: [
            { letter: "A", text: "persuade readers to visit a zoo more often each year" },
            { letter: "B", text: "show that enrichment was invented for crowds" },
            { letter: "C", text: "suggest that sleeping animals are unhealthy" },
            { letter: "D", text: "note a side benefit, then restate the real goal" }
          ],
          correct: "D"
        },
        {
          id: "together",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement is best supported by sentences 4 and 16 together?",
          choices: [
            { letter: "A", text: "Zoo animals are healthier than wild animals." },
            { letter: "B", text: "Animals need ongoing challenge, not just comfort." },
            { letter: "C", text: "Most zoo animals refuse to use their puzzle feeders." },
            { letter: "D", text: "Keepers should give animals fewer meals a day." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── Informational · quilting circle (level 3) ───────────── */
    {
      id: "g10-ri-c71-circle-frame",
      family: "G10",
      title: "What Holds a Circle Together",
      kind: "Informational · 10.RI",
      blurb: "Quilting circles began with a practical need for many hands. Why have they lasted after the need went away?",
      level: 3,
      passage:
        "<p>" + N(1) + "A quilt is, at its simplest, three layers held together by stitches: a decorative top, a soft middle called batting, and a plain backing. " +
        N(2) + "Yet the quilting circle, the group of people who gather regularly to make quilts together, has always been about more than fabric. " +
        N(3) + "Historians of everyday life describe these circles as informal institutions, places where neighbors exchanged news, taught skills across generations and organized help for families in need.</p>" +
        "<p>" + N(4) + "The structure of the work helped make this possible. " +
        N(5) + "Piecing a quilt top can be done alone, a few blocks at a time, but the final step of quilting, stitching through all three layers across the entire surface, once required a large wooden frame and many hands. " +
        N(6) + "A single person might need months to finish a bed-sized quilt; a circle of eight could finish one in a few long afternoons. " +
        N(7) + "Because the frame held the quilt flat and everyone sat facing one another around its edges, the arrangement practically demanded conversation.</p>" +
        "<p>" + N(8) + "Circles also served as informal schools. " +
        N(9) + "Younger members learned to make small, even stitches by sitting beside experienced ones, and patterns traveled from one community to another as people moved, married or visited. " +
        N(10) + "A design might arrive with one name and leave with another, slightly altered to suit local taste or the cloth on hand. " +
        N(11) + "In this way, a quilt could carry the history of a place in its colors and shapes.</p>" +
        "<p>" + N(12) + "Today, sewing machines and long-arm quilting equipment have made the large frame unnecessary for many quilters, and one person can finish a quilt alone in days. " +
        N(13) + "One might expect circles to have faded as a result. " +
        N(14) + "Instead, many communities report that circles remain active, often meeting in libraries, places of worship and community centers. " +
        N(15) + "Members frequently make quilts for hospitals, shelters and fundraising raffles. " +
        N(16) + "The persistence of these groups suggests that the frame was never the only thing holding them together. " +
        N(17) + "What people seem to have wanted, then and now, is a reason to sit in the same room and make something that lasts.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes \"What Holds a Circle Together\"?",
          choices: [
            { letter: "A", text: "Machines have made quilting circles unnecessary and rare." },
            { letter: "B", text: "Quilting circles last because they meet social needs." },
            { letter: "C", text: "Quilt patterns always keep their original names over time." },
            { letter: "D", text: "Making a quilt alone is faster than making one in a group." }
          ],
          correct: "B"
        },
        {
          id: "expect",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "How does sentence 13 function in the structure of the final paragraph about quilting circles?",
          choices: [
            { letter: "A", text: "It introduces a new term that the paragraph defines." },
            { letter: "B", text: "It summarizes the evidence from the paragraphs above." },
            { letter: "C", text: "It gives an example of a circle that stopped meeting." },
            { letter: "D", text: "It raises an expectation that sentence 14 overturns." }
          ],
          correct: "D"
        },
        {
          id: "practical",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence provides the strongest evidence that quilting circles once had a practical reason to exist?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "A"
        },
        {
          id: "holding",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 16, the phrase the frame was never the only thing holding them together mainly suggests that —",
          choices: [
            { letter: "A", text: "wooden frames often broke under the weight of large quilts" },
            { letter: "B", text: "most circles today still insist on using the old frames" },
            { letter: "C", text: "shared social ties, not just tools, kept circles going" },
            { letter: "D", text: "members disagreed about whether to buy new machines" }
          ],
          correct: "C"
        },
        {
          id: "institutions",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 3, the phrase informal institutions most nearly describes groups that —",
          choices: [
            { letter: "A", text: "served community needs without official status" },
            { letter: "B", text: "were run by the local government and its officials" },
            { letter: "C", text: "met only once and then were quickly forgotten" },
            { letter: "D", text: "charged members a fee to learn quilting skills" }
          ],
          correct: "A"
        },
        {
          id: "names",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes the detail in sentence 10 about a design changing its name mainly to —",
          choices: [
            { letter: "A", text: "warn readers that quilt history is often unreliable" },
            { letter: "B", text: "show how patterns took on local history over time" },
            { letter: "C", text: "explain why some quilters refuse to share patterns" },
            { letter: "D", text: "suggest that quilt names matter more than designs" }
          ],
          correct: "B"
        },
        {
          id: "together",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which idea is best supported by sentences 7 and 17 together?",
          choices: [
            { letter: "A", text: "Conversation used to slow down the quilting process." },
            { letter: "B", text: "Quilts made in groups last longer than other quilts." },
            { letter: "C", text: "Large frames are still needed to make quality quilts." },
            { letter: "D", text: "Sitting together is central to a circle's value." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── Informational · skate park (level 2) ───────────── */
    {
      id: "g10-ri-c71-larkspur-park",
      family: "G10",
      title: "A Park Drawn by Its Riders",
      kind: "Informational · 10.RI",
      blurb: "Larkspur's first skate park sat empty. The second one was designed by the people who would use it.",
      level: 2,
      passage:
        "<p>" + N(1) + "When the city of Larkspur opened its first skate park in a corner of Delancey Field, officials expected it to be crowded. " +
        N(2) + "Within a year, it was mostly empty, even on warm weekend afternoons. " +
        N(3) + "The prefabricated metal ramps were loud, rusted badly in the rain, and grew dangerously hot under the summer sun. " +
        N(4) + "Worse, the park had been designed without asking a single skater what they wanted.</p>" +
        "<p>" + N(5) + "When the city set aside money for a replacement, the parks department tried a different approach. " +
        N(6) + "It held four public design workshops at the recreation center, inviting skaters, parents and neighbors to sketch ideas on large sheets of paper. " +
        N(7) + "More than a hundred people came, including several skaters too young to drive and one grandmother who had skated as a teenager forty years earlier. " +
        N(8) + "A professional designer turned the sketches into three possible layouts, and residents voted on them online.</p>" +
        "<p>" + N(9) + "The finished park reflects that input in several ways. " +
        N(10) + "It is built of poured concrete, which is quieter than metal and lasts for decades. " +
        N(11) + "It includes a street section with stairs, rails and ledges, a smaller beginner area with gentle slopes, and a deep bowl for experienced riders. " +
        N(12) + "Skaters asked for good flow, meaning a rider can link one feature to the next without stopping, so the designer arranged the obstacles in loops rather than rows. " +
        N(13) + "Parents asked to be able to see their children from the benches, so the park has open sight lines and no blind corners.</p>" +
        "<p>" + N(14) + "The results have been striking. " +
        N(15) + "According to the parks department, daily visits in the first summer averaged about 140, compared with fewer than 20 at the old park. " +
        N(16) + "Neighbors who had worried about noise reported few complaints, partly because concrete muffles the sound of wheels far better than the old metal ramps did. " +
        N(17) + "\"People treat it like it belongs to them,\" one recreation supervisor said, \"because in a way it does.\"</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "What is the main idea of the article about the Larkspur skate park?",
          choices: [
            { letter: "A", text: "Involving users in design produced a park people use." },
            { letter: "B", text: "Concrete parks cost less to build than metal ones." },
            { letter: "C", text: "Skaters and parents rarely agree about park design." },
            { letter: "D", text: "Beginner areas are the most popular part of every skate park." }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How is \"A Park Drawn by Its Riders\" organized overall?",
          choices: [
            { letter: "A", text: "as a comparison of two different cities' park budgets" },
            { letter: "B", text: "as an argument followed by several opposing counterclaims" },
            { letter: "C", text: "as a problem, the process that fixed it, and results" },
            { letter: "D", text: "as a step-by-step guide to building concrete ramps" }
          ],
          correct: "C"
        },
        {
          id: "pair",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which pair of sentences best shows that the new Larkspur park succeeded where the old one failed?",
          choices: [
            { letter: "A", text: "Sentences 3 and 10" },
            { letter: "B", text: "Sentences 2 and 15" },
            { letter: "C", text: "Sentences 7 and 8" },
            { letter: "D", text: "Sentences 12 and 13" }
          ],
          correct: "B"
        },
        {
          id: "flow",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "As used in sentence 12, the word flow refers to —",
          choices: [
            { letter: "A", text: "the way rainwater drains off the concrete" },
            { letter: "B", text: "the number of skaters who visit each day" },
            { letter: "C", text: "the speed limit posted at the park entrance" },
            { letter: "D", text: "moving between features without stopping" }
          ],
          correct: "D"
        },
        {
          id: "grandmother",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author mentions the grandmother who had skated as a teenager in sentence 7 mainly to emphasize —",
          choices: [
            { letter: "A", text: "how wide a range of people took part" },
            { letter: "B", text: "that older residents opposed the park" },
            { letter: "C", text: "how long the city had wanted a new park" },
            { letter: "D", text: "that skating was safer in the past" }
          ],
          correct: "A"
        },
        {
          id: "quote",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes the supervisor's quotation in sentence 17 mainly to —",
          choices: [
            { letter: "A", text: "show that the supervisor designed the park" },
            { letter: "B", text: "suggest that the park will soon need repairs" },
            { letter: "C", text: "explain why neighbors complained about noise" },
            { letter: "D", text: "link community input to a sense of ownership" }
          ],
          correct: "D"
        },
        {
          id: "striking",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author calls the results striking rather than good in sentence 14. Compared with good, striking suggests the results were —",
          choices: [
            { letter: "A", text: "slightly better than expected" },
            { letter: "B", text: "dramatic and hard to overlook" },
            { letter: "C", text: "surprising in a negative way" },
            { letter: "D", text: "difficult for the city to measure" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── Vocabulary · zoo keeper (level 1) ───────────── */
    {
      id: "g10-rv-c71-elephant-barn",
      family: "G10",
      title: "Six O'Clock at the Elephant Barn",
      kind: "Vocabulary · 10.RV",
      blurb: "A keeper's careful morning with four elephants: one tired, one shy, and a log that misses nothing.",
      level: 1,
      passage:
        "<p>" + N(1) + "Tomasz Nowak arrives at the elephant barn at six every morning, before the zoo's gates open and before most of the city is awake. " +
        N(2) + "His first job is to be <strong>vigilant</strong>: he walks the length of the barn slowly, watching each of the four elephants for anything unusual, from a limp to an untouched pile of hay. " +
        N(3) + "An elephant that hides a sore foot today may be seriously ill next week, so small details matter.</p>" +
        "<p>" + N(4) + "The oldest elephant, Kamala, is usually <strong>docile</strong>, standing calmly while Tomasz checks her feet and rinses her skin with a hose. " +
        N(5) + "This morning, though, she seems <strong>lethargic</strong>. " +
        N(6) + "She stands in one corner with her trunk resting on the floor, barely reaching for the breakfast that she normally devours. " +
        N(7) + "Tomasz writes this down in the daily log and calls the veterinarian, who promises to stop by within the hour.</p>" +
        "<p>" + N(8) + "Caring for elephants requires a <strong>meticulous</strong> approach. " +
        N(9) + "Every meal is weighed, every bath is recorded, and every change in mood is noted with the date and time. " +
        N(10) + "Tomasz sometimes jokes that he writes more each day than he did in high school. " +
        N(11) + "Still, he knows that the careful notes are what let the vet compare today with last month.</p>" +
        "<p>" + N(12) + "While he waits, Tomasz turns to Juno, the youngest elephant, who has been <strong>reluctant</strong> to join the training sessions since she arrived in the spring. " +
        N(13) + "He does not force her. " +
        N(14) + "Instead, he spends a few minutes each day simply standing near her stall, talking quietly and offering slices of melon. " +
        N(15) + "Over the past weeks, a <strong>rapport</strong> has grown between them; Juno now walks over as soon as she hears his voice.</p>" +
        "<p>" + N(16) + "By the time the vet arrives, Kamala has begun to eat a little. " +
        N(17) + "The vet finds a small crack in one toenail, a problem that is easily treated. " +
        N(18) + "Tomasz adds the finding to the log, coils the hose, and goes on with the morning.</p>",
      claims: [
        {
          id: "vigilant",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 2, the word vigilant most nearly means —",
          choices: [
            { letter: "A", text: "gentle and kind" },
            { letter: "B", text: "watchful and alert" },
            { letter: "C", text: "quick and efficient" },
            { letter: "D", text: "quiet and patient" }
          ],
          correct: "B"
        },
        {
          id: "lethargic",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which detail best helps the reader understand that lethargic in sentence 5 means lacking energy?",
          choices: [
            { letter: "A", text: "Kamala barely reaches for her breakfast." },
            { letter: "B", text: "The vet promises to stop by within the hour." },
            { letter: "C", text: "Tomasz checks Kamala's feet every morning." },
            { letter: "D", text: "Kamala is the oldest of the four elephants." }
          ],
          correct: "A"
        },
        {
          id: "meticulous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Sentence 9 helps the reader understand that a meticulous approach in sentence 8 is one that is —",
          choices: [
            { letter: "A", text: "quick and casual" },
            { letter: "B", text: "strict and unkind" },
            { letter: "C", text: "costly and slow" },
            { letter: "D", text: "careful and exact" }
          ],
          correct: "D"
        },
        {
          id: "docile",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word docile in sentence 4 comes from a Latin word meaning to teach, as does docent, a museum guide. Based on this, a docile animal is one that is —",
          choices: [
            { letter: "A", text: "old and slow-moving" },
            { letter: "B", text: "large and powerful" },
            { letter: "C", text: "easily handled" },
            { letter: "D", text: "nervous around people" }
          ],
          correct: "C"
        },
        {
          id: "reluctant",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The author describes Juno as reluctant rather than stubborn in sentence 12. Compared with stubborn, reluctant suggests that Juno is —",
          choices: [
            { letter: "A", text: "hesitant rather than defiant" },
            { letter: "B", text: "angry rather than afraid" },
            { letter: "C", text: "lazy rather than truly curious" },
            { letter: "D", text: "playful rather than serious" }
          ],
          correct: "A"
        },
        {
          id: "rapport",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on sentences 14 and 15, the word rapport most nearly means —",
          choices: [
            { letter: "A", text: "a written report" },
            { letter: "B", text: "a training rule" },
            { letter: "C", text: "a loud greeting" },
            { letter: "D", text: "a bond of trust" }
          ],
          correct: "D"
        },
        {
          id: "log",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence best supports the idea that Tomasz's careful record-keeping helps protect the elephants' health?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── Vocabulary · wildfire lookout (level 3) ───────────── */
    {
      id: "g10-rv-c71-granite-butte",
      family: "G10",
      title: "Notes from Granite Butte",
      kind: "Vocabulary · 10.RV",
      blurb: "A lookout reflects on four months alone in a fire tower, and on the difference between lonely and alone.",
      level: 3,
      passage:
        "<p>" + N(1) + "People who learn that I spend four months a year alone in a fire tower on Granite Butte usually ask the same question: don't you get lonely? " +
        N(2) + "The honest answer is that loneliness and <strong>solitude</strong> are not the same thing. " +
        N(3) + "Loneliness is the ache of wanting company you cannot have; solitude is the quiet you choose, and in a good season it feels less like an absence than like room to think.</p>" +
        "<p>" + N(4) + "That is not to say the job is restful. " +
        N(5) + "A lookout must <strong>scrutinize</strong> the same forty ridgelines dozens of times a day, studying each one as closely as a proofreader studies a page, because a fire begins as something small enough to dismiss. " +
        N(6) + "Morning fog lifting from a creek can look like smoke for a minute; so can a column of dust behind a ranch truck. " +
        N(7) + "Most of these sights are <strong>ephemeral</strong>, gone before I can lift the binoculars, and part of the skill is learning which vanishing things to ignore.</p>" +
        "<p>" + N(8) + "Storms change everything. " +
        N(9) + "In late July the afternoons build towers of cloud over the western peaks, and by three o'clock the light turns a bruised yellow that I have come to find <strong>ominous</strong>. " +
        N(10) + "Lightning in these storms is often <strong>sporadic</strong>, a strike here, a long pause, then three more in quick succession miles apart, so I mark each one on the map with a time and a bearing. " +
        N(11) + "A strike that lands in a rotten snag may smolder unseen for days, and the record I keep is often the only clue to where it fell.</p>" +
        "<p>" + N(12) + "The fires that follow are <strong>tenacious</strong>. " +
        N(13) + "A crew can knock one down in the evening, only to find it creeping back through the roots and needles by morning, as if it had simply been waiting for the wind. " +
        N(14) + "Watching that persistence from the tower, I have learned a little of it myself. " +
        N(15) + "When a season is long and the radio is quiet and the ridges look exactly as they did yesterday, the work is to keep looking anyway.</p>",
      claims: [
        {
          id: "solitude",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "In sentence 3, the writer distinguishes solitude from loneliness mainly by explaining that solitude is —",
          choices: [
            { letter: "A", text: "a feeling that grows worse as a season goes on" },
            { letter: "B", text: "a problem that only lookouts have to face" },
            { letter: "C", text: "a chosen quiet rather than unwanted isolation" },
            { letter: "D", text: "a habit of avoiding any talk on the radio" }
          ],
          correct: "C"
        },
        {
          id: "scrutinize",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which phrase from sentence 5 best helps the reader understand the meaning of scrutinize?",
          choices: [
            { letter: "A", text: "as closely as a proofreader studies a page" },
            { letter: "B", text: "the same forty ridgelines" },
            { letter: "C", text: "dozens of times a day" },
            { letter: "D", text: "because a fire begins as something small enough to dismiss" }
          ],
          correct: "A"
        },
        {
          id: "ephemeral",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word ephemeral comes from a Greek word meaning lasting only a day. Based on this origin and its use in sentence 7, ephemeral most nearly means —",
          choices: [
            { letter: "A", text: "frightening" },
            { letter: "B", text: "distant" },
            { letter: "C", text: "colorful" },
            { letter: "D", text: "short-lived" }
          ],
          correct: "D"
        },
        {
          id: "ominous",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "The writer calls the yellow light ominous rather than strange in sentence 9. Compared with strange, ominous suggests that the light —",
          choices: [
            { letter: "A", text: "is pleasant to look at" },
            { letter: "B", text: "seems to warn of danger" },
            { letter: "C", text: "is hard to see clearly" },
            { letter: "D", text: "appears only in the winter" }
          ],
          correct: "B"
        },
        {
          id: "sporadic",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on the description that follows it in sentence 10, the word sporadic most nearly means —",
          choices: [
            { letter: "A", text: "happening at irregular times" },
            { letter: "B", text: "striking with very great force" },
            { letter: "C", text: "lasting for many hours" },
            { letter: "D", text: "landing in the same place" }
          ],
          correct: "A"
        },
        {
          id: "waiting",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 13, describing the fire as if it had simply been waiting for the wind mainly emphasizes —",
          choices: [
            { letter: "A", text: "that crews often leave fires too early" },
            { letter: "B", text: "that wind is the main cause of lightning" },
            { letter: "C", text: "that the writer enjoys watching fires" },
            { letter: "D", text: "how hard such fires are to put out fully" }
          ],
          correct: "D"
        },
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"Notes from Granite Butte\"?",
          choices: [
            { letter: "A", text: "Fire towers are too lonely for most people to staff." },
            { letter: "B", text: "Summer storms are the most beautiful sight in the West." },
            { letter: "C", text: "The job demands patient attention that the writer values." },
            { letter: "D", text: "Fog and dust are the main reasons that lookouts make mistakes." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── Paired texts · skate park (level 2) ───────────── */
    {
      id: "g10-dsr-c71-ridgeway-lights",
      family: "G10",
      title: "Lights at Ridgeway",
      kind: "Paired texts · 10.DSR",
      blurb: "A teenager asks the town to light the skate park. A neighbor across the street has a few conditions.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Letter to the Westbrook Courier, by Mei-Lin Zhou, age 16</strong></p>" +
        "<p>" + N(1) + "Every weekday from October to March, the Ridgeway Skate Park becomes useless at about 5:15 p.m., when the sun sets behind the water tower. " +
        N(2) + "For students who finish practice or after-school jobs at five, that means the only public place in Westbrook built for skating is closed to us before we can even get there. " +
        N(3) + "Some of us skate in the grocery store parking lot instead, which is less safe and frustrates the store managers. " +
        N(4) + "Installing lights at the park would fix this problem. " +
        N(5) + "The town of Hollis Crossing, twenty miles north, added lights to its park three years ago, and its recreation director told our student council that injuries and complaints both went down because skaters stopped using streets and lots after dark. " +
        N(6) + "I am not asking for the park to be open all night. " +
        N(7) + "I am asking the council to give working and practicing teenagers the same chance to use a public park that everyone else already has. " +
        N(8) + "Lights until 9 p.m. on weeknights would be enough.</p>" +
        "<p><strong>Text 2 — From the Minutes of the Westbrook Town Council</strong></p>" +
        "<p>" + N(9) + "Dolores Pruitt, who has lived on Ridgeway Lane across from the skate park for twenty-six years, spoke during public comment. " +
        N(10) + "She said she supports the park and has watched her own grandchildren learn to skate there. " +
        N(11) + "However, she raised two concerns about the proposal to add lights. " +
        N(12) + "First, she said, the sound of boards hitting concrete carries clearly into the houses on her street, and in the evening it would make it hard for families to settle small children for bed. " +
        N(13) + "Second, she worried that tall floodlights would shine into bedroom windows. " +
        N(14) + "Ms. Pruitt asked the council to consider shielded fixtures that point downward and a firm closing time no later than 8:30 on school nights. " +
        N(15) + "She also suggested that the parks department post a phone number for neighbors to call if problems arise. " +
        N(16) + "\"I'm not against the kids,\" she said. " +
        N(17) + "\"I just want the plan to work for everyone who lives here, including the people who were here before the ramps.\" " +
        N(18) + "Council members thanked her and voted to request a cost estimate that includes her suggestions.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do Mei-Lin Zhou and Dolores Pruitt agree?",
          choices: [
            { letter: "A", text: "The skate park is valuable to young people in town." },
            { letter: "B", text: "The park should stay open until late on weekend nights." },
            { letter: "C", text: "The grocery store lot is a good place to skate." },
            { letter: "D", text: "Floodlights would cause no problems for neighbors." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which statement best describes a key difference between the letter and the council minutes about Ridgeway?",
          choices: [
            { letter: "A", text: "Text 1 opposes lights, while Text 2 supports them fully." },
            { letter: "B", text: "Text 1 relies on statistics, while Text 2 uses none." },
            { letter: "C", text: "Text 1 stresses teen access; Text 2 stresses neighbors." },
            { letter: "D", text: "Text 1 is written by an adult; Text 2 by a student." }
          ],
          correct: "C"
        },
        {
          id: "outside",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence in Text 1 provides evidence from outside Westbrook to support the writer's request?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "plan",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Based on both texts, which plan would most likely satisfy both Mei-Lin and Ms. Pruitt?",
          choices: [
            { letter: "A", text: "bright floodlights that stay on until midnight" },
            { letter: "B", text: "downward lights that shut off around 8:30" },
            { letter: "C", text: "no lights, but a new park outside of town" },
            { letter: "D", text: "lights used only on summer weekends" }
          ],
          correct: "B"
        },
        {
          id: "compromise",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "Select TWO sentences that best show that each speaker is willing to compromise.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "vote",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Using both texts, the council's vote in sentence 18 matters to Mei-Lin's request mainly because it —",
          choices: [
            { letter: "A", text: "moves her idea forward while addressing neighbors" },
            { letter: "B", text: "rejects her idea in favor of a new phone line" },
            { letter: "C", text: "approves lights that stay on until 9 p.m. nightly" },
            { letter: "D", text: "delays any decision until Hollis Crossing reports" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "The tone of Ms. Pruitt's remarks in sentences 16 and 17 is best described as —",
          choices: [
            { letter: "A", text: "bitter and quietly accusing" },
            { letter: "B", text: "cheerful and playfully joking" },
            { letter: "C", text: "reasonable and conciliatory" },
            { letter: "D", text: "nervous and deeply uncertain" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── Paired texts · quilting circle (level 3) ───────────── */
    {
      id: "g10-dsr-c71-memory-quilt",
      family: "G10",
      title: "A Quilt Made of Shirts",
      kind: "Paired texts · 10.DSR",
      blurb: "A graduate unwraps a quilt sewn from her own old shirts; an article explains why memory quilts hold so much.",
      level: 3,
      passage:
        "<p><strong>Text 1 — The Graduation Quilt</strong></p>" +
        "<p>" + N(1) + "The box was too light to be a laptop, which was what I had hinted for. " +
        N(2) + "Inside, folded into a square, was a quilt made of my life. " +
        N(3) + "There was the purple shirt from my first soccer team, the one with a cartoon tiger that I had refused to wear after third grade. " +
        N(4) + "There was the faded blue of a science camp shirt, the gray of my middle-school orchestra, and, in the center, a plaid block I did not recognize until my mother said, quietly, \"Your father's work shirt.\" " +
        N(5) + "He had worn it every Saturday at the hardware store for as long as I could remember. " +
        N(6) + "My mother's quilting circle, eight women who meet on Wednesdays above the laundromat, had spent four months on it while I pretended not to notice that my old drawers kept getting emptier. " +
        N(7) + "I unfolded it across my bed. " +
        N(8) + "It was not elegant; the squares were slightly different sizes, and the tiger was upside down. " +
        N(9) + "But when I lay under it that night, I felt, for the first time since the acceptance letter, that leaving home did not mean leaving everything behind.</p>" +
        "<p><strong>Text 2 — Stitching Memory</strong></p>" +
        "<p>" + N(10) + "A memory quilt is made from fabric with personal history, such as old clothing, uniforms, baby blankets or souvenir T-shirts. " +
        N(11) + "Quilt makers report that these projects have grown more common, especially for milestones like graduations, retirements and family reunions. " +
        N(12) + "Part of their appeal is practical: clothing that would otherwise sit forgotten in a closet or a donation bag becomes something useful and warm. " +
        N(13) + "But makers say the deeper appeal is sensory. " +
        N(14) + "A familiar texture or pattern can call up memories more quickly than a photograph, because people remember fabrics not only by sight but by touch. " +
        N(15) + "Textile conservators, who care for old fabrics in museums, offer a few cautions. " +
        N(16) + "Older and heavily washed fabrics may be thinner than new cloth, so they should be backed with a lightweight stabilizer before cutting. " +
        N(17) + "Stretchy T-shirt knit can pull blocks out of shape, which is one reason memory quilts often turn out a little uneven. " +
        N(18) + "Many owners, conservators note, come to value those irregularities, since a perfectly matched quilt would look less like the life it records.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The writers of \"The Graduation Quilt\" and \"Stitching Memory\" would most likely agree that —",
          choices: [
            { letter: "A", text: "new fabric always makes a better quilt than old clothes" },
            { letter: "B", text: "old clothing with personal meaning can hold memories" },
            { letter: "C", text: "quilting circles should charge for their memory quilts" },
            { letter: "D", text: "photographs bring back memories faster than fabric does" }
          ],
          correct: "B"
        },
        {
          id: "uneven",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Which detail in Text 1 is best explained by information in Text 2?",
          choices: [
            { letter: "A", text: "the box was too light to hold a laptop" },
            { letter: "B", text: "the circle meets above the laundromat" },
            { letter: "C", text: "the father wore the plaid shirt on Saturdays" },
            { letter: "D", text: "the squares were slightly different sizes" }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The two texts about memory quilts differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "shows one person's response; Text 2 explains a general trend" },
            { letter: "B", text: "gives practical sewing advice, while Text 2 tells a family story" },
            { letter: "C", text: "criticizes memory quilts, while Text 2 praises them warmly" },
            { letter: "D", text: "focuses on retirements, while Text 2 focuses on graduations" }
          ],
          correct: "A"
        },
        {
          id: "flaws",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does sentence 18 of Text 2 help explain the narrator's reaction in sentences 8 and 9 of Text 1?",
          choices: [
            { letter: "A", text: "It shows that the quilt was made far too quickly to last." },
            { letter: "B", text: "It suggests she will ask the circle to fix the tiger." },
            { letter: "C", text: "It suggests flaws can make a quilt feel truer to life." },
            { letter: "D", text: "It proves that her mother chose the wrong fabrics." }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "Select TWO sentences, one from each text, that best support the idea that familiar fabrics bring back memories.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "tiger",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "In Text 1, the details in sentence 8, the uneven squares and the upside-down tiger, help create a tone that is —",
          choices: [
            { letter: "A", text: "harsh and highly critical" },
            { letter: "B", text: "formal and distant" },
            { letter: "C", text: "anxious and fearful" },
            { letter: "D", text: "affectionate and wry" }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Based on both texts, the circle most likely used the narrator's old shirts rather than new fabric in order to —",
          choices: [
            { letter: "A", text: "save money on the high cost of new cloth" },
            { letter: "B", text: "turn her history into something lasting" },
            { letter: "C", text: "practice using stretchy T-shirt knit" },
            { letter: "D", text: "clear space in the family's closets" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── Poetry · wildfire lookout (level 1) ───────────── */
    {
      id: "g10-rl-c71-tower-august",
      family: "G10",
      title: "Tower, Late August",
      kind: "Poetry · 10.RL",
      blurb: "A lookout's day in a room made of windows, where most reports say the same thing.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Each morning I climb sixty stairs to the sky<br>" +
        L(2) + "and unlock a room made entirely of windows.<br>" +
        L(3) + "The mountains wait outside in their green coats,<br>" +
        L(4) + "row after row, like students who know the answer<br>" +
        L(5) + "but will not raise their hands.<br>" +
        L(6) + "I make coffee. I write the wind in the log.<br>" +
        L(7) + "I turn in a slow circle, east to north,<br>" +
        L(8) + "the way my grandfather wound his old watch,<br>" +
        L(9) + "one careful turn at a time.<br>" +
        L(10) + "Hawks ride the warm air past my glass.<br>" +
        L(11) + "A truck crawls along a dirt road like a beetle.<br>" +
        L(12) + "Nothing burns. Nothing burns. Nothing burns.<br>" +
        L(13) + "Some days that is the whole report,<br>" +
        L(14) + "and I am glad to write it.<br>" +
        L(15) + "But I have learned the quiet is not empty.<br>" +
        L(16) + "It is full of everything I have not yet seen,<br>" +
        L(17) + "so I keep turning, keep looking,<br>" +
        L(18) + "a lighthouse with no light,<br>" +
        L(19) + "only eyes,<br>" +
        L(20) + "holding the whole forest in my watching.</p>",
      claims: [
        {
          id: "students",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In lines 3 through 5, comparing the mountains to students who know the answer but will not raise their hands suggests that the mountains —",
          choices: [
            { letter: "A", text: "are too far away for the speaker to see" },
            { letter: "B", text: "may hide something the speaker must find" },
            { letter: "C", text: "remind the speaker of her years as a teacher" },
            { letter: "D", text: "are being slowly worn down by the weather" }
          ],
          correct: "B"
        },
        {
          id: "repeat",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "The repetition of Nothing burns in line 12 mainly emphasizes —",
          choices: [
            { letter: "A", text: "the calm, uneventful routine of most days" },
            { letter: "B", text: "the speaker's fear that a fire is starting" },
            { letter: "C", text: "the sound of the radio in the empty tower" },
            { letter: "D", text: "the speaker's boredom with the dull job" }
          ],
          correct: "A"
        },
        {
          id: "glad",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Lines 13 and 14 are somewhat surprising because the speaker —",
          choices: [
            { letter: "A", text: "refuses to write anything in the logbook" },
            { letter: "B", text: "admits she has missed several small fires" },
            { letter: "C", text: "wishes she could leave the tower early" },
            { letter: "D", text: "is happy to have no fire to report at all" }
          ],
          correct: "D"
        },
        {
          id: "lighthouse",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In lines 18 through 20, the speaker describes herself as a lighthouse with no light, only eyes, to show that she —",
          choices: [
            { letter: "A", text: "wishes the tower had better lamps at night" },
            { letter: "B", text: "feels lost and unable to find her way home" },
            { letter: "C", text: "keeps watch over the forest with her eyes" },
            { letter: "D", text: "would rather be working beside the ocean" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The overall tone of \"Tower, Late August\" is best described as —",
          choices: [
            { letter: "A", text: "calm and watchful" },
            { letter: "B", text: "tense and fearful" },
            { letter: "C", text: "bored and restless" },
            { letter: "D", text: "angry and lonely" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Tower, Late August\"?",
          choices: [
            { letter: "A", text: "Busy, exciting jobs are the only meaningful ones." },
            { letter: "B", text: "People who work alone soon forget their families." },
            { letter: "C", text: "Quiet watching matters even when nothing happens." },
            { letter: "D", text: "Nature is peaceful and never truly dangerous to people." }
          ],
          correct: "C"
        },
        {
          id: "crawls",
          sol: "10.RV.1.F",
          sub: "10.RV.1.F.1",
          stem: "In line 11, saying that the truck crawls along a dirt road like a beetle mainly suggests that the truck —",
          choices: [
            { letter: "A", text: "has broken down on the side of the road" },
            { letter: "B", text: "is driving dangerously close to a fire" },
            { letter: "C", text: "is carrying insects to another forest" },
            { letter: "D", text: "looks small and slow from high above" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── Poetry · quilting circle (level 3) ───────────── */
    {
      id: "g10-rl-c71-sampler",
      family: "G10",
      title: "Star Quilt, Nine Hands",
      kind: "Poetry · 10.RL",
      blurb: "A speaker studies a quilt made by nine people and finds every one of them in the stitches.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Nine hands made this, and you can tell:<br>" +
        L(2) + "here the stitches march like a drill team,<br>" +
        L(3) + "small and exact, ten to the inch, that's Ines;<br>" +
        L(4) + "here they wander, wide as a gate left open,<br>" +
        L(5) + "that's Ruth, who talked the whole afternoon<br>" +
        L(6) + "and never once looked down.<br>" +
        L(7) + "Someone ran out of gold thread in the corner<br>" +
        L(8) + "and finished with yellow, hoping no one would notice.<br>" +
        L(9) + "Everyone noticed. No one said a word.<br>" +
        L(10) + "The quilt is supposed to be about stars,<br>" +
        L(11) + "eight points to every block, the pattern says,<br>" +
        L(12) + "but half of them have seven, or nine,<br>" +
        L(13) + "depending on who was cutting and who was laughing.<br>" +
        L(14) + "I used to think a quilt was a picture<br>" +
        L(15) + "of what the pattern promised.<br>" +
        L(16) + "Now I think it is a record<br>" +
        L(17) + "of who sat at the table, and for how long,<br>" +
        L(18) + "and what they forgave each other<br>" +
        L(19) + "as the needles went in and out,<br>" +
        L(20) + "in and out, like breath.</p>",
      claims: [
        {
          id: "stitches",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.1",
          stem: "In lines 2 through 4, the contrast between stitches that march like a drill team and stitches wide as a gate left open mainly suggests that —",
          choices: [
            { letter: "A", text: "Ruth is a more skilled quilter than Ines" },
            { letter: "B", text: "the quilt will have to be taken apart" },
            { letter: "C", text: "each quilter's personality shows in her work" },
            { letter: "D", text: "the circle argued about how to sew the quilt" }
          ],
          correct: "C"
        },
        {
          id: "stars",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "Lines 10 through 13 of \"Star Quilt, Nine Hands\" are ironic because —",
          choices: [
            { letter: "A", text: "the pattern's perfect stars came out uneven" },
            { letter: "B", text: "the quilters forgot to buy enough gold fabric" },
            { letter: "C", text: "the stars were sewn by a single quilter" },
            { letter: "D", text: "the pattern called for moons, not stars" }
          ],
          correct: "A"
        },
        {
          id: "noticed",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Line 9 characterizes the members of the circle as —",
          choices: [
            { letter: "A", text: "too busy talking to look at the quilt" },
            { letter: "B", text: "critical of anyone who makes an error" },
            { letter: "C", text: "unaware of the change in thread color" },
            { letter: "D", text: "tactful about one another's flaws" }
          ],
          correct: "D"
        },
        {
          id: "shift",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "How do lines 14 through 16 function in \"Star Quilt, Nine Hands\"?",
          choices: [
            { letter: "A", text: "They describe the pattern the circle followed." },
            { letter: "B", text: "They mark a shift in what the speaker values." },
            { letter: "C", text: "They introduce a new quilter to the circle." },
            { letter: "D", text: "They explain why the gold thread ran out." }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by \"Star Quilt, Nine Hands\"?",
          choices: [
            { letter: "A", text: "Following a pattern exactly is the mark of skill." },
            { letter: "B", text: "Shared projects work best when one person leads." },
            { letter: "C", text: "Mistakes in handmade work should always be hidden." },
            { letter: "D", text: "Shared work matters for its people, not polish." }
          ],
          correct: "D"
        },
        {
          id: "breath",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "The final image, in and out, like breath (line 20), mainly creates a feeling of —",
          choices: [
            { letter: "A", text: "steady, living closeness" },
            { letter: "B", text: "tired, heavy sadness" },
            { letter: "C", text: "sudden, nervous worry" },
            { letter: "D", text: "loud, joyful celebration" }
          ],
          correct: "A"
        },
        {
          id: "forgave",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In line 18, the phrase what they forgave each other most nearly refers to —",
          choices: [
            { letter: "A", text: "debts the quilters owed for fabric" },
            { letter: "B", text: "arguments that ended the circle" },
            { letter: "C", text: "small flaws they accepted in one another" },
            { letter: "D", text: "rules the pattern required them to follow" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── Drama · zoo keeper (level 2) ───────────── */
    {
      id: "g10-rl-c71-head-count",
      family: "G10",
      title: "Head Count",
      kind: "Drama · 10.RL",
      blurb: "Closing time in the tortoise yard: three tortoises are supposed to be there, and only two are.",
      level: 2,
      passage:
        "<p><em>Closing time at the Westvale Zoo tortoise yard. Long shadows stretch across the dirt, and the last visitors have gone. ROSA DELGADO, a senior keeper, holds a clipboard. BENJI ADEYEMI, a summer intern, stands by the gate, out of breath.</em></p>" +
        "<p><strong>ROSA:</strong> " + N(1) + "Head count. " + N(2) + "Read them off for me.</p>" +
        "<p><strong>BENJI:</strong> " + N(3) + "Clementine, in the shelter. " + N(4) + "Rocco, by the water dish. " + N(5) + "Ferdinand... <em>(He stops and scans the yard.)</em> " + N(6) + "Ferdinand isn't here.</p>" +
        "<p><strong>ROSA:</strong> " + N(7) + "Look again. " + N(8) + "He's seventy pounds and the color of dirt. " + N(9) + "He's very good at being a rock.</p>" +
        "<p><strong>BENJI:</strong> <em>(walking the fence line)</em> " + N(10) + "I checked every rock. " + N(11) + "Rosa, I have to tell you something. " + N(12) + "This afternoon, when I brought in the lettuce, I'm not sure I latched the inner gate. " + N(13) + "When I came back it was latched, but I don't remember doing it.</p>" +
        "<p><strong>ROSA:</strong> <em>(evenly)</em> " + N(14) + "Okay. " + N(15) + "Thank you for telling me now instead of later. " + N(16) + "Now that I know, we can check the service path too. " + N(17) + "But first, tell me what Ferdinand loves most in the world.</p>" +
        "<p><strong>BENJI:</strong> " + N(18) + "Hibiscus flowers?</p>" +
        "<p><strong>ROSA:</strong> " + N(19) + "And second?</p>" +
        "<p><strong>BENJI:</strong> <em>(slowly)</em> " + N(20) + "The cool spot under the big log. " + N(21) + "But I looked there.</p>" +
        "<p><strong>ROSA:</strong> " + N(22) + "You looked at it. <em>(She kneels by the log and shines a flashlight underneath.)</em> " + N(23) + "Did you look under it?</p>" +
        "<p><em>A long pause. A scraping sound. A wrinkled head pushes out of a fresh hole in the dirt, blinking.</em></p>" +
        "<p><strong>BENJI:</strong> " + N(24) + "He dug a tunnel. " + N(25) + "He dug a whole tunnel.</p>" +
        "<p><strong>ROSA:</strong> " + N(26) + "Every August, when the ground gets hot. " + N(27) + "He did the same thing to me my first summer, and I called the head keeper at home in a panic. <em>(She writes on the clipboard.)</em> " + N(28) + "Three present. " + N(29) + "One excavating.</p>" +
        "<p><strong>BENJI:</strong> " + N(30) + "And the gate?</p>" +
        "<p><strong>ROSA:</strong> " + N(31) + "We'll still walk the service path, because you were honest and it's the right thing to check. " + N(32) + "Tomorrow you'll latch it and say \"latched\" out loud, so you remember. <em>(She hands him the flashlight.)</em> " + N(33) + "Lead the way.</p>",
      claims: [
        {
          id: "tension",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "The tension in the tortoise-yard scene comes mainly from —",
          choices: [
            { letter: "A", text: "Rosa's anger that the lettuce was brought in late" },
            { letter: "B", text: "a storm that forces the keepers to hurry" },
            { letter: "C", text: "Benji's fear that the gate let Ferdinand out" },
            { letter: "D", text: "a visitor who has wandered into the yard" }
          ],
          correct: "C"
        },
        {
          id: "rosa",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Rosa's response in sentences 14 through 16 characterizes her as —",
          choices: [
            { letter: "A", text: "calm and grateful for honesty" },
            { letter: "B", text: "annoyed and quick to blame" },
            { letter: "C", text: "confused and unsure what to do" },
            { letter: "D", text: "amused and not taking it seriously" }
          ],
          correct: "A"
        },
        {
          id: "excavating",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of Rosa's clipboard entry, Three present. One excavating (sentences 28 and 29), is best described as —",
          choices: [
            { letter: "A", text: "stern and disappointed" },
            { letter: "B", text: "dryly humorous" },
            { letter: "C", text: "anxious and hurried" },
            { letter: "D", text: "sad and regretful" }
          ],
          correct: "B"
        },
        {
          id: "loves",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Rosa asks Benji what Ferdinand loves most (sentences 17 through 19) mainly to —",
          choices: [
            { letter: "A", text: "change the subject away from the gate" },
            { letter: "B", text: "test whether Benji has read the care manual" },
            { letter: "C", text: "remind him to bring hibiscus tomorrow" },
            { letter: "D", text: "lead him to think like the tortoise" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by the scene in the Westvale tortoise yard?",
          choices: [
            { letter: "A", text: "Animals are always smarter than the people who care for them." },
            { letter: "B", text: "Admitting a possible mistake early builds trust and helps." },
            { letter: "C", text: "Interns should not be given serious jobs at a zoo." },
            { letter: "D", text: "Rules about gates matter less than rules about food." }
          ],
          correct: "B"
        },
        {
          id: "dig",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on the events before it, the word excavating in sentence 29 most nearly means —",
          choices: [
            { letter: "A", text: "digging" },
            { letter: "B", text: "sleeping" },
            { letter: "C", text: "escaping" },
            { letter: "D", text: "eating" }
          ],
          correct: "A"
        },
        {
          id: "pause",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "The stage directions just before sentence 24 (a long pause, a scraping sound) mainly create a mood of —",
          choices: [
            { letter: "A", text: "gloom" },
            { letter: "B", text: "irritation" },
            { letter: "C", text: "boredom" },
            { letter: "D", text: "suspense" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── Functional text · skate park (level 1) ───────────── */
    {
      id: "g10-ri-c71-cedar-hollow",
      family: "G10",
      title: "Skate Park Rules and Clinics",
      kind: "Functional text · 10.RI",
      blurb: "Hours, safety rules and free summer lessons at the Cedar Hollow skate park.",
      level: 1,
      passage:
        "<p><strong>Cedar Hollow Skate Park: Rules and Summer Clinics</strong></p>" +
        "<p><strong>Park Hours.</strong> " + N(1) + "The park is open daily from 7 a.m. to 9 p.m., April through October. " +
        N(2) + "The park is unsupervised; skaters use it at their own risk. " +
        N(3) + "During heavy rain the concrete surface becomes slick and dangerous, and staff may close the park without notice.</p>" +
        "<p><strong>Safety Rules.</strong> " + N(4) + "Helmets are required for all skaters under 18 and strongly recommended for everyone else. " +
        N(5) + "Knee and elbow pads are recommended, especially for skaters riding in the bowl. " +
        N(6) + "Skateboards, scooters and bicycles are all welcome, but motorized vehicles of any kind are not allowed. " +
        N(7) + "Glass containers, food and pets are not permitted inside the fenced area. " +
        N(8) + "Skaters should wait their turn at the top of each feature and look before dropping in, since most collisions happen when two riders enter the same line at once.</p>" +
        "<p><strong>Free Summer Clinics.</strong> " + N(9) + "The Parks Department offers free beginner clinics on Tuesday and Thursday mornings from 9 to 10:30, June 16 through August 6. " +
        N(10) + "Clinics are open to ages 8 to 15, and no experience is necessary. " +
        N(11) + "Instructors are certified coaches who teach balance, pushing, stopping and how to fall safely. " +
        N(12) + "Loaner boards and helmets are available for participants who do not have their own. " +
        N(13) + "Each session is limited to 12 skaters so that every participant gets individual attention.</p>" +
        "<p><strong>How to Sign Up.</strong> " + N(14) + "Register online at the Cedar Hollow Parks Department website or in person at the Recreation Center front desk. " +
        N(15) + "A parent or guardian must sign a participation form before a skater's first session. " +
        N(16) + "Because spaces fill quickly, families are encouraged to register at least one week ahead. " +
        N(17) + "Skaters who cannot attend a session they signed up for should cancel by the night before so that someone on the waitlist can take the spot.</p>" +
        "<p><strong>Questions?</strong> " + N(18) + "Call the Recreation Center at 555-0142, Monday through Friday, 8 a.m. to 5 p.m., or stop by the front desk in person.</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.1",
          stem: "The Cedar Hollow notice is written mainly for —",
          choices: [
            { letter: "A", text: "city workers who repair the concrete" },
            { letter: "B", text: "skaters and families who use the park" },
            { letter: "C", text: "coaches applying to teach the clinics" },
            { letter: "D", text: "neighbors who complain about noise" }
          ],
          correct: "B"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "The bold headings in the Cedar Hollow notice help a reader mainly by —",
          choices: [
            { letter: "A", text: "listing the rules in order of importance" },
            { letter: "B", text: "showing which rules are new this year" },
            { letter: "C", text: "explaining why each rule was created" },
            { letter: "D", text: "making specific information easy to find" }
          ],
          correct: "D"
        },
        {
          id: "clinics",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the section titled Free Summer Clinics?",
          choices: [
            { letter: "A", text: "Free small lessons with loaner gear serve ages 8 to 15." },
            { letter: "B", text: "Experienced skaters can train for competitions all summer." },
            { letter: "C", text: "Parents must stay with their children during every clinic." },
            { letter: "D", text: "Clinics meet every weekday morning from April to October." }
          ],
          correct: "A"
        },
        {
          id: "unsupervised",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "Unsupervised in sentence 2 joins the prefix un- to supervise, which comes from roots meaning over and see. Based on this, an unsupervised park is one where —",
          choices: [
            { letter: "A", text: "skaters must pay a fee before they enter" },
            { letter: "B", text: "the gates are locked at all hours" },
            { letter: "C", text: "no staff member is assigned to watch" },
            { letter: "D", text: "only beginners are allowed to skate" }
          ],
          correct: "C"
        },
        {
          id: "recommended",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.1",
          stem: "For adults, the notice says helmets are strongly recommended rather than required (sentence 4). Compared with required, strongly recommended suggests that helmets for adults are —",
          choices: [
            { letter: "A", text: "advised but not mandatory" },
            { letter: "B", text: "banned inside the bowl" },
            { letter: "C", text: "provided free by the city" },
            { letter: "D", text: "needed only during clinics" }
          ],
          correct: "A"
        },
        {
          id: "spaces",
          sol: "10.RI.1.B",
          sub: "10.RI.1.B.2",
          stem: "Which statement is best supported by sentences 13 and 16 together?",
          choices: [
            { letter: "A", text: "Coaches prefer to teach very large groups." },
            { letter: "B", text: "Most families sign up on the day of a clinic." },
            { letter: "C", text: "The clinics are too difficult for beginners." },
            { letter: "D", text: "Families who wait to register may miss out." }
          ],
          correct: "D"
        },
        {
          id: "beginners",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence best supports the idea that the Cedar Hollow clinics are designed for true beginners?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── Argument · wildfire lookout (level 3) ───────────── */
    {
      id: "g10-ri-c71-bald-knob",
      family: "G10",
      title: "Keep Someone in the Tower",
      kind: "Argument · 10.RI",
      blurb: "A former lookout argues that the county's new fire cameras still need a person on Bald Knob.",
      level: 3,
      passage:
        "<p><strong>Keep Someone in the Tower</strong><br><em>by Arnav Kulkarni, former seasonal lookout</em></p>" +
        "<p>" + N(1) + "Next month, the Alder County board will vote on whether to close the Bald Knob fire lookout and rely entirely on the camera network installed on three nearby peaks last year. " +
        N(2) + "The cameras are impressive, and I understand the temptation. " +
        N(3) + "But closing the last staffed tower in the county would be a mistake, and the reasons are more practical than sentimental.</p>" +
        "<p>" + N(4) + "Supporters of the change point out, correctly, that the cameras never sleep and can scan the whole county every few minutes. " +
        N(5) + "They also note that staffing Bald Knob costs about $38,000 a season. " +
        N(6) + "Those are fair points. " +
        N(7) + "What they leave out is that cameras still need people: every image the system flags as possible smoke must be reviewed by a dispatcher, and last summer the dispatch office reported hundreds of false alerts caused by dust, fog and even the glare of sunlight on a farm pond. " +
        N(8) + "The lookout on Bald Knob confirmed or dismissed many of those alerts within minutes, sparing crews needless trips.</p>" +
        "<p>" + N(9) + "A tower also does what a camera cannot. " +
        N(10) + "During the July lightning storms, the Bald Knob lookout logged the location of every strike she could see, a record that crews used to find two smoldering trees before they produced visible smoke. " +
        N(11) + "When a storm knocked out power to one camera site for six hours, the tower was the only set of eyes on the eastern ridges.</p>" +
        "<p>" + N(12) + "None of this means the cameras should go. " +
        N(13) + "The best system is redundant, with cameras and a lookout checking each other, because any single tool will eventually fail. " +
        N(14) + "Compared with the cost of one large fire, which can run into the millions, $38,000 a season is a modest insurance policy.</p>" +
        "<p>" + N(15) + "The board should vote to keep Bald Knob staffed. " +
        N(16) + "Our forests, and the towns beside them, deserve more than one way of watching.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which sentence best states the central claim of \"Keep Someone in the Tower\"?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "A"
        },
        {
          id: "paragraph",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How is the second paragraph (sentences 4 through 8) of the Bald Knob argument organized?",
          choices: [
            { letter: "A", text: "as a timeline of how the cameras were installed" },
            { letter: "B", text: "as a list of the lookout's daily duties" },
            { letter: "C", text: "as opposing points followed by overlooked facts" },
            { letter: "D", text: "as a question followed by several possible answers" }
          ],
          correct: "C"
        },
        {
          id: "outage",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "The author includes the example in sentence 11 about the power outage mainly to —",
          choices: [
            { letter: "A", text: "blame the county for slow and poor camera repairs" },
            { letter: "B", text: "explain how lightning damages equipment" },
            { letter: "C", text: "show that storms are worse than before" },
            { letter: "D", text: "show the tower as a backup when tech fails" }
          ],
          correct: "D"
        },
        {
          id: "sentimental",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "Sentimental in sentence 3 shares a root with sense and sensation, a root meaning to feel. By calling his reasons practical rather than sentimental, the author signals that they are not based on —",
          choices: [
            { letter: "A", text: "careful measurement" },
            { letter: "B", text: "emotional attachment" },
            { letter: "C", text: "official county records" },
            { letter: "D", text: "the views of other lookouts" }
          ],
          correct: "B"
        },
        {
          id: "insurance",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "In sentence 14, the author calls $38,000 a modest insurance policy rather than simply a cost. The phrase insurance policy suggests that the money —",
          choices: [
            { letter: "A", text: "will be returned to the county later" },
            { letter: "B", text: "is wasted on a tower few people visit" },
            { letter: "C", text: "should be paid by private companies" },
            { letter: "D", text: "guards against a much larger loss" }
          ],
          correct: "D"
        },
        {
          id: "fair",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "In sentences 4 through 6, the author grants that the opposing side makes fair points mainly to —",
          choices: [
            { letter: "A", text: "seem fair-minded before he answers them" },
            { letter: "B", text: "admit that his own argument is weak" },
            { letter: "C", text: "suggest that the board has already decided" },
            { letter: "D", text: "change the subject from cost to safety" }
          ],
          correct: "A"
        },
        {
          id: "glare",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The detail about the glare of sunlight on a farm pond in sentence 7 mainly emphasizes —",
          choices: [
            { letter: "A", text: "how beautiful the county's farmland is" },
            { letter: "B", text: "why dispatchers dislike working summers" },
            { letter: "C", text: "how easily ordinary sights fool cameras" },
            { letter: "D", text: "that ponds are a common cause of fires" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
