/* SOL Labyrinth — Grade 9 mid-tier expansion packs (v5.15, nights 51-64): clock and watch repair, sea turtles,
 * a city bus route and a theme park job. 16 packs x 7 questions. Original text only.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 · LITERARY · watch repair */
    {
      id: "g9-rl-c46-tiny-screw",
      family: "G9",
      title: "The Smallest Screw",
      kind: "Literary · 9.RL",
      blurb: "Lucía wants to fix a customer's watch before closing time. Her uncle wants her to slow down.",
      level: 2,
      passage:
        "<p>" + N(1) + "Tío Rubén's repair shop sat between a laundromat and a shoe store, and it was the only quiet place on Calle Ocho. " +
        N(2) + "Forty clocks hung on the back wall, each ticking at a slightly different speed, so that the room sounded like light rain on a tin roof. " +
        N(3) + "Lucía had worked there every Saturday since September, mostly sweeping and writing tickets, but today her uncle had finally handed her a real job.</p>" +
        "<p>" + N(4) + "The watch belonged to Mrs. Okonkwo, who taught piano two blocks away. " +
        N(5) + "It had stopped on Tuesday at 4:12, and she needed it by Monday for a recital. " +
        N(6) + "\"Open the back, clean the movement, and tell me what you see,\" Tío Rubén said. " +
        N(7) + "\"Don't tell me what you think. Tell me what you see.\"</p>" +
        "<p>" + N(8) + "Lucía nodded, but she was already thinking about the clock above the door, which said 5:40. " +
        N(9) + "The shop closed at six, and she wanted to hand her uncle a working watch before then, the way a runner wants to lean across the finish line. " +
        N(10) + "She twisted the case back off too quickly. " +
        N(11) + "Something no bigger than a grain of pepper leaped from the tray, ticked once against the glass counter, and vanished.</p>" +
        "<p>" + N(12) + "For a moment she could not breathe. " +
        N(13) + "Her uncle did not scold her; he simply switched off the overhead light and handed her a flashlight. " +
        N(14) + "\"Hold it low,\" he said, \"so it throws a shadow.\" " +
        N(15) + "She lay on the floor with her cheek against the cool tile and swept the beam slowly across the cracks, inch by inch, while the forty clocks kept counting. " +
        N(16) + "At 6:25 a tiny shadow, longer than the thing that cast it, stretched across the grout near the radiator.</p>" +
        "<p>" + N(17) + "When she stood up, the screw was pressed into a square of tape on her fingertip. " +
        N(18) + "Her uncle switched the light back on and slid the watch toward her again. " +
        N(19) + "\"Now,\" he said, \"tell me what you see.\" " +
        N(20) + "Lucía looked through the loupe for a long time before she answered. " +
        N(21) + "A single hair-thin spring had slipped from its post. " +
        N(22) + "She did not glance at the clock above the door, and when she finally said the words out loud, her voice was steady.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"The Smallest Screw\"?",
          choices: [
            { letter: "A", text: "Careful attention matters more than finishing quickly." },
            { letter: "B", text: "Family businesses rarely trust young workers." },
            { letter: "C", text: "Mistakes at work should be hidden from others." },
            { letter: "D", text: "Old machines are not worth the effort to repair." }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Tío Rubén's instruction in sentence 7 suggests that he wants Lucía to —",
          choices: [
            { letter: "A", text: "guess quickly so the shop can close on time" },
            { letter: "B", text: "write down every part before she touches it" },
            { letter: "C", text: "base her judgment on careful observation" },
            { letter: "D", text: "ask Mrs. Okonkwo what is wrong with the watch" }
          ],
          correct: "C"
        },
        {
          id: "fig",
          sol: "9.RL.2.A",
          stem: "In sentence 9, the comparison of Lucía to a runner leaning across the finish line mainly shows that she —",
          choices: [
            { letter: "A", text: "is proud of how fast she can walk to the counter" },
            { letter: "B", text: "is treating the repair as a race against the clock" },
            { letter: "C", text: "plans to leave the shop the moment it closes" },
            { letter: "D", text: "has trained for the job for many months" }
          ],
          correct: "B"
        },
        {
          id: "setting",
          sol: "9.RL.3.A",
          stem: "The forty clocks described in sentences 2 and 15 mainly add to the story by —",
          choices: [
            { letter: "A", text: "showing that the shop is too crowded to work in" },
            { letter: "B", text: "explaining why Mrs. Okonkwo chose this shop" },
            { letter: "C", text: "proving that Tío Rubén is a careless shopkeeper" },
            { letter: "D", text: "reminding the reader that time keeps passing" }
          ],
          correct: "D"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which choice best describes how Tío Rubén responds when the screw is lost in sentence 13?",
          choices: [
            { letter: "A", text: "He calmly gives Lucía a way to solve the problem." },
            { letter: "B", text: "He takes the watch away and repairs it himself." },
            { letter: "C", text: "He laughs and tells her the screw does not matter." },
            { letter: "D", text: "He warns her that she may lose her Saturday job." }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 20, the context suggests that a loupe is —",
          choices: [
            { letter: "A", text: "a cloth used for polishing glass" },
            { letter: "B", text: "a small lens used for close viewing" },
            { letter: "C", text: "a drawer that holds spare parts" },
            { letter: "D", text: "a lamp that hangs above the counter" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "How does the mood of the final paragraph (sentences 17-22) differ from the mood of sentences 8-11?",
          choices: [
            { letter: "A", text: "It moves from cheerful to gloomy." },
            { letter: "B", text: "It moves from calm to frightened." },
            { letter: "C", text: "It moves from bored to excited." },
            { letter: "D", text: "It moves from rushed to composed." }
          ],
          correct: "D"
        }
      ]
    },
    /* 2 · LITERARY · city bus route */
    {
      id: "g9-rl-c46-route-nine",
      family: "G9",
      title: "The Number 9 at 6:10",
      kind: "Literary · 9.RL",
      blurb: "Every morning Kenji rides the same bus. One morning the driver is not the one he expects.",
      level: 1,
      passage:
        "<p>" + N(1) + "I have ridden the Number 9 bus to school every weekday since sixth grade, and for most of those years the driver was a woman named Mrs. Delacroix. " +
        N(2) + "She wore a green scarf in every kind of weather. " +
        N(3) + "She knew which stop belonged to which rider, and if you were running late, she would wait exactly ten seconds with the door open before she pulled away. " +
        N(4) + "I never knew her first name, but I knew her laugh, which was loud enough to wake the whole back row.</p>" +
        "<p>" + N(5) + "On the first cold Monday in November, a young man with a clipboard was sitting in her seat. " +
        N(6) + "He checked every pass twice. " +
        N(7) + "He did not wait for the boy who always sprinted from the corner of Fifth and Maple, and the boy stood in the bus's exhaust with his hands on his knees. " +
        N(8) + "Nobody laughed on the whole ride. " +
        N(9) + "The bus felt like a classroom on the day of a test.</p>" +
        "<p>" + N(10) + "By Thursday I had decided I did not like the new driver, whose name tag said Arturo. " +
        N(11) + "Then, at the stop by the hospital, an older man climbed on slowly with a cane and a bag of groceries. " +
        N(12) + "Arturo put the bus in park, stepped down, and carried the bag to the man's seat himself. " +
        N(13) + "\"Mrs. Delacroix told me about you,\" he said. " +
        N(14) + "\"Tuesdays and Thursdays, right?\" " +
        N(15) + "The old man smiled for the first time all week.</p>" +
        "<p>" + N(16) + "That afternoon I finally asked Arturo where Mrs. Delacroix had gone. " +
        N(17) + "She had retired, he said, and before she left she had ridden the whole route with him twice, stop by stop, telling him who needed what. " +
        N(18) + "\"She gave me a list,\" he said, tapping the clipboard. " +
        N(19) + "\"I'm still learning it.\" " +
        N(20) + "I looked at the clipboard differently after that. " +
        N(21) + "On Friday I told him about the boy at Fifth and Maple, and on Monday the door stayed open for ten seconds.</p>",
      claims: [
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because \"The Number 9 at 6:10\" is told by a rider rather than by Arturo, the reader —",
          choices: [
            { letter: "A", text: "learns about Arturo's kindness only when the narrator does" },
            { letter: "B", text: "knows from the start why Mrs. Delacroix left the route" },
            { letter: "C", text: "hears Arturo's private worries about the new job" },
            { letter: "D", text: "sees the route from the point of view of the old man" }
          ],
          correct: "A"
        },
        {
          id: "detail",
          sol: "9.RL.1.B",
          stem: "What does Arturo's clipboard turn out to hold?",
          choices: [
            { letter: "A", text: "A list of riders who had broken the bus rules" },
            { letter: "B", text: "A schedule showing when he could take breaks" },
            { letter: "C", text: "Notes from Mrs. Delacroix about the riders' needs" },
            { letter: "D", text: "A form for reporting late passengers to the city" }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "9.RL.2.B",
          stem: "In sentence 9, comparing the bus to a classroom on the day of a test mainly creates a mood that is —",
          choices: [
            { letter: "A", text: "playful and lively" },
            { letter: "B", text: "tense and quiet" },
            { letter: "C", text: "sad and hopeless" },
            { letter: "D", text: "angry and loud" }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows that Arturo is more caring than the narrator first believes?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "D"
        },
        {
          id: "fig",
          sol: "9.RV.1.F",
          stem: "In sentence 20, the narrator says, I looked at the clipboard differently after that. This statement suggests that the narrator now sees the clipboard as —",
          choices: [
            { letter: "A", text: "a tool for punishing riders who run late" },
            { letter: "B", text: "a sign that Arturo will soon quit the job" },
            { letter: "C", text: "a record of care passed from one driver to the next" },
            { letter: "D", text: "proof that the city does not trust its drivers" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does the ending of \"The Number 9 at 6:10\" best support?",
          choices: [
            { letter: "A", text: "People who follow rules strictly cannot be kind." },
            { letter: "B", text: "It is better to keep first impressions to yourself." },
            { letter: "C", text: "Change is easier when nobody talks about it." },
            { letter: "D", text: "First impressions can change as we learn more." }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 7, the boy stands in the bus's exhaust, which most nearly means he is standing in —",
          choices: [
            { letter: "A", text: "the fumes left behind by the bus" },
            { letter: "B", text: "a state of being very tired" },
            { letter: "C", text: "the shadow of the bus shelter" },
            { letter: "D", text: "a puddle near the curb" }
          ],
          correct: "A"
        }
      ]
    },
    /* 3 · LITERARY · sea turtles */
    {
      id: "g9-rl-c46-nest-fourteen",
      family: "G9",
      title: "Nest Fourteen",
      kind: "Literary · 9.RL",
      blurb: "Noa has waited six nights for a sea turtle nest to hatch. Her sister keeps telling her to wait some more.",
      level: 3,
      passage:
        "<p>" + N(1) + "By the sixth night, Noa had stopped believing that Nest Fourteen would ever hatch. " +
        N(2) + "The square of orange tape around it had faded to the color of weak tea, and the sand inside looked exactly like the sand outside. " +
        N(3) + "Her older sister, Keala, who had volunteered with the turtle patrol for three summers, sat beside the stakes with a red-lensed flashlight and a notebook, as patient as a heron.</p>" +
        "<p>" + N(4) + "\"Day fifty-eight,\" Keala said, writing it down. " +
        N(5) + "\"Fifty-five to sixty-five is normal.\" " +
        N(6) + "Noa trudged to the waterline and back for the twentieth time, kicking at the wet ribbons of seaweed. " +
        N(7) + "Keala made everything into a rule: no white lights, no talking above a whisper, no standing between the nest and the moon on the water. " +
        N(8) + "It felt less like protecting turtles than like being babysat on a beach.</p>" +
        "<p>" + N(9) + "A little after eleven, the sand in the center of the square sank, as if someone underneath had taken a breath. " +
        N(10) + "Noa forgot to be bored. " +
        N(11) + "A dark flipper appeared, then a head no bigger than a thumbnail, then dozens of small bodies boiling up together and tumbling down the slope. " +
        N(12) + "They turned, all at once, toward the pale shine of the ocean.</p>" +
        "<p>" + N(13) + "Then headlights swung across the dune from the parking lot. " +
        N(14) + "Half the hatchlings stopped and wheeled toward the glare, and three of them began crawling the wrong way, straight toward the road. " +
        N(15) + "Before Noa could think, Keala was on her feet, stretching her dark jacket between her arms like a wall, blocking the light. " +
        N(16) + "\"Stand next to me,\" she whispered, and Noa did, her own sweatshirt held wide, until the car turned and the dune went black again.</p>" +
        "<p>" + N(17) + "The three wanderers circled, found the moonlight, and followed their siblings into the foam. " +
        N(18) + "Keala knelt and counted the empty shells by the red flashlight, her pen moving steadily. " +
        N(19) + "\"Eighty-one,\" she said at last. " +
        N(20) + "Noa looked at the tape, at the stakes, at the line of tiny tracks running down to the water like stitches. " +
        N(21) + "\"Next time,\" she said, \"can I keep the notebook?\"</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best developed by the events of \"Nest Fourteen\"?",
          choices: [
            { letter: "A", text: "Rules that seem fussy can turn out to serve a real purpose." },
            { letter: "B", text: "Younger siblings usually understand nature better than older ones." },
            { letter: "C", text: "Wild animals are safest when people stay far away from beaches." },
            { letter: "D", text: "Waiting for something is never as exciting as people expect." }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          stem: "How does Noa's attitude toward the turtle patrol change from sentence 8 to sentence 21?",
          choices: [
            { letter: "A", text: "She goes from eager to frightened of the work." },
            { letter: "B", text: "She goes from resentful to wanting a bigger role." },
            { letter: "C", text: "She goes from curious to bored with the routine." },
            { letter: "D", text: "She goes from confident to unsure of her sister." }
          ],
          correct: "B"
        },
        {
          id: "plot",
          sol: "9.RL.3.A",
          stem: "The headlights in sentence 13 are important to the plot mainly because they —",
          choices: [
            { letter: "A", text: "announce that more volunteers have arrived" },
            { letter: "B", text: "help Keala count the hatchlings more easily" },
            { letter: "C", text: "create a crisis that shows why Keala's rules matter" },
            { letter: "D", text: "signal that the patrol must end for the night" }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In sentence 20, the tracks are compared to stitches mainly to suggest that they —",
          choices: [
            { letter: "A", text: "will be washed away before morning" },
            { letter: "B", text: "were made by an injured hatchling" },
            { letter: "C", text: "cross one another in a confusing tangle" },
            { letter: "D", text: "form a neat, careful line joining nest and sea" }
          ],
          correct: "D"
        },
        {
          id: "conno",
          sol: "9.RV.1.E",
          stem: "The author could have written walked instead of trudged in sentence 6. Compared with walked, trudged adds a sense that Noa is —",
          choices: [
            { letter: "A", text: "heavy and weary from waiting" },
            { letter: "B", text: "moving quickly with excitement" },
            { letter: "C", text: "careful not to wake the turtles" },
            { letter: "D", text: "lost and unsure of the way back" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "Which word best describes the tone of sentences 9-12, when the nest first hatches?",
          choices: [
            { letter: "A", text: "Mocking" },
            { letter: "B", text: "Gloomy" },
            { letter: "C", text: "Wondering" },
            { letter: "D", text: "Impatient" }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Based on sentences 14-17, readers can infer that the hatchlings normally find the ocean by —",
          choices: [
            { letter: "A", text: "following the sound of waves on the shore" },
            { letter: "B", text: "heading toward the brightest light they can see" },
            { letter: "C", text: "smelling the salt carried on the night wind" },
            { letter: "D", text: "following the tracks of the female that laid them" }
          ],
          correct: "B"
        }
      ]
    },
    /* 4 · LITERARY · theme park job */
    {
      id: "g9-rl-c46-mascot-heat",
      family: "G9",
      title: "Inside the Otter",
      kind: "Literary · 9.RL",
      blurb: "Rafael's summer job is to be a giant otter at a theme park. The hardest part is not the heat.",
      level: 1,
      passage:
        "<p>" + N(1) + "My summer job at Splashland Park came with a name tag, a locker, and a seven-foot otter costume called Ollie. " +
        N(2) + "Inside Ollie, the air smelled like old sneakers and sunscreen. " +
        N(3) + "I could see the world only through a strip of black mesh in Ollie's smiling mouth, so everything looked as if it were happening behind a screen door. " +
        N(4) + "The rules were simple: never speak, never take off the head in public, and come back to the break room every twenty minutes for water.</p>" +
        "<p>" + N(5) + "The first week, I hated it. " +
        N(6) + "By noon the costume was a portable oven, and my handler, a college student named Priya, had to steer me around strollers by tapping my elbow. " +
        N(7) + "Kids pulled Ollie's tail. " +
        N(8) + "Teenagers my own age shouted jokes I could not answer. " +
        N(9) + "I spent most of my breaks staring at the ceiling fan and counting the days until August.</p>" +
        "<p>" + N(10) + "Then, on a Thursday near the wave pool, a little girl in a yellow life jacket stood frozen in front of me, crying. " +
        N(11) + "Priya knelt beside her and learned that she had lost her family near the snack stand. " +
        N(12) + "Because I could not talk, I did the only thing Ollie could do. " +
        N(13) + "I sat down on the hot pavement, slowly, and held out one enormous paw. " +
        N(14) + "She stopped crying long enough to stare, then put her small hand on my fuzzy one. " +
        N(15) + "We sat like that, an otter and a girl in a life jacket, until Priya's radio crackled and her father came running across the plaza.</p>" +
        "<p>" + N(16) + "In the break room afterward, I pulled off the head and drank two bottles of water without stopping. " +
        N(17) + "Priya handed me a third. " +
        N(18) + "\"You know she'll remember that,\" she said. " +
        N(19) + "\"Not you. Ollie.\" " +
        N(20) + "I thought that would bother me, being invisible inside a costume. " +
        N(21) + "Instead, the next morning I zipped up the suit a little faster than usual.</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which statement best describes how Rafael changes in \"Inside the Otter\"?",
          choices: [
            { letter: "A", text: "He becomes more interested in the park's rides." },
            { letter: "B", text: "He begins to value the job and what Ollie can do." },
            { letter: "C", text: "He decides to look for a job in a different park." },
            { letter: "D", text: "He grows angry at the rules his handler enforces." }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "How does the first-person point of view in sentences 2 and 3 affect what the reader experiences?",
          choices: [
            { letter: "A", text: "It lets the reader feel how cramped and limited the costume is." },
            { letter: "B", text: "It shows how the costume looks to the children in the park." },
            { letter: "C", text: "It explains how Priya was trained to guide the mascots." },
            { letter: "D", text: "It reveals what the little girl was thinking at the pool." }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "In sentence 6, calling the costume a portable oven mainly helps create a feeling of —",
          choices: [
            { letter: "A", text: "comfort and safety" },
            { letter: "B", text: "hunger and impatience" },
            { letter: "C", text: "pride and excitement" },
            { letter: "D", text: "discomfort and misery" }
          ],
          correct: "D"
        },
        {
          id: "wordpart",
          sol: "9.RV.1.B",
          stem: "The word invisible in sentence 20 is built from in- (not) and the root vis (see). As used by Rafael, being invisible means —",
          choices: [
            { letter: "A", text: "being too small for children to notice" },
            { letter: "B", text: "being unable to see out of the costume" },
            { letter: "C", text: "not being seen as himself by the guests" },
            { letter: "D", text: "not being allowed to visit the wave pool" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which idea does Priya's remark in sentences 18 and 19 help the story develop?",
          choices: [
            { letter: "A", text: "Workers should be thanked by name for good service." },
            { letter: "B", text: "A good deed can matter even when no one gets credit." },
            { letter: "C", text: "Children quickly forget the people they meet at parks." },
            { letter: "D", text: "Costumed jobs are too difficult for teenage workers." }
          ],
          correct: "B"
        },
        {
          id: "setting",
          sol: "9.RL.3.A",
          stem: "The detail in sentence 13 that Rafael sat on the hot pavement mainly emphasizes that he —",
          choices: [
            { letter: "A", text: "puts the girl's comfort ahead of his own" },
            { letter: "B", text: "is too tired to keep standing in the sun" },
            { letter: "C", text: "wants Priya to call him back to the break room" },
            { letter: "D", text: "is breaking one of the park's rules" }
          ],
          correct: "A"
        },
        {
          id: "fig",
          sol: "9.RV.1.F",
          stem: "In sentence 21, Rafael says he zipped up the suit a little faster than usual. This detail figuratively suggests that he —",
          choices: [
            { letter: "A", text: "was late for his shift and worried about it" },
            { letter: "B", text: "wanted to finish the summer as soon as possible" },
            { letter: "C", text: "had learned a faster way to wear the costume" },
            { letter: "D", text: "was now eager to step back into the role" }
          ],
          correct: "D"
        }
      ]
    },
    /* 5 · INFORMATIONAL · sea turtles */
    {
      id: "g9-ri-c46-turtle-compass",
      family: "G9",
      title: "A Map Written in Magnetism",
      kind: "Informational · 9.RI",
      blurb: "How does a sea turtle find the beach where it hatched, decades and thousands of miles later?",
      level: 2,
      passage:
        "<p>" + N(1) + "A loggerhead sea turtle may leave the beach where it hatched as a creature smaller than a cookie and not return for twenty years. " +
        N(2) + "In that time it can travel thousands of miles across open ocean, through currents and storms, with no landmarks in sight. " +
        N(3) + "Yet many females come back to nest within a few dozen miles of their birthplace. " +
        N(4) + "For a long time, scientists could only wonder how they managed it.</p>" +
        "<p>" + N(5) + "The most widely supported answer involves Earth's magnetic field. " +
        N(6) + "The planet behaves somewhat like a giant, weak magnet, and the strength and angle of its field change gradually from place to place. " +
        N(7) + "Each stretch of coastline therefore has its own magnetic \"signature.\" " +
        N(8) + "In laboratory studies, young turtles placed in tanks surrounded by coils of wire were exposed to magnetic conditions matching different points in the Atlantic. " +
        N(9) + "The hatchlings changed their swimming direction to match the route they would need from each point, as if they were reading a map no human could see.</p>" +
        "<p>" + N(10) + "Researchers have also found clues in the nests themselves. " +
        N(11) + "Earth's field drifts slowly over the years, and when the magnetic signatures of two beaches drift closer together, turtles nesting on those beaches appear to become more similar genetically. " +
        N(12) + "This pattern suggests that returning females sometimes \"miss\" by choosing the beach whose signature matches the one they remember. " +
        N(13) + "No turtle has ever explained its method, of course, so scientists describe this evidence carefully, as strong support rather than proof.</p>" +
        "<p>" + N(14) + "Magnetism is probably not the whole story. " +
        N(15) + "Close to shore, turtles may also use smell, the direction of waves, or the glow of the sky over the sea. " +
        N(16) + "Some biologists suspect that the magnetic sense brings a turtle to the right region and the other senses guide it the last few miles. " +
        N(17) + "That possibility matters for conservation, because bright coastal lighting and steel seawalls could interfere with exactly the cues the animals rely on. " +
        N(18) + "Understanding the turtle's map, in other words, may help people avoid smudging it.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of \"A Map Written in Magnetism\"?",
          choices: [
            { letter: "A", text: "Loggerheads live longer than most other sea turtles." },
            { letter: "B", text: "Seawalls are the greatest danger facing sea turtles." },
            { letter: "C", text: "Turtles likely use Earth's magnetic field to find home." },
            { letter: "D", text: "Scientists have proven how hatchlings choose a beach." }
          ],
          correct: "C"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to sentences 8 and 9, what did the hatchlings in the laboratory tanks do?",
          choices: [
            { letter: "A", text: "They swam in directions that matched the magnetic location." },
            { letter: "B", text: "They stopped swimming whenever the coils were switched on." },
            { letter: "C", text: "They swam toward the brightest corner of each tank." },
            { letter: "D", text: "They followed the scent of sand placed in the water." }
          ],
          correct: "A"
        },
        {
          id: "fact",
          sol: "9.RI.1.C",
          stem: "Which sentence from the article presents a possibility rather than an established finding?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "How is the article about loggerhead navigation mainly organized?",
          choices: [
            { letter: "A", text: "A list of turtle species, ordered from smallest to largest" },
            { letter: "B", text: "A mystery, the evidence for an answer, then limits and stakes" },
            { letter: "C", text: "A comparison of two beaches, then a description of each" },
            { letter: "D", text: "A step-by-step guide to running a laboratory experiment" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "9.RI.2.B",
          stem: "The author includes sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "make fun of scientists who study animal behavior" },
            { letter: "B", text: "suggest that the nesting research was poorly designed" },
            { letter: "C", text: "show that the conclusion is well supported but not certain" },
            { letter: "D", text: "introduce a new theory based on the turtles' sense of smell" }
          ],
          correct: "C"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 7, the word signature most nearly means —",
          choices: [
            { letter: "A", text: "a handwritten name on a document" },
            { letter: "B", text: "a distinctive set of features" },
            { letter: "C", text: "a sound used to send a signal" },
            { letter: "D", text: "an agreement between scientists" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence gives the strongest evidence that nesting females rely on remembered magnetic signatures?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "D"
        }
      ]
    },
    /* 6 · INFORMATIONAL · watch repair */
    {
      id: "g9-ri-c46-escapement",
      family: "G9",
      title: "The Heartbeat in Your Wrist",
      kind: "Informational · 9.RI",
      blurb: "Inside a mechanical watch, a tiny wheel swings back and forth millions of times a week. Here is why.",
      level: 3,
      passage:
        "<p>" + N(1) + "A digital watch keeps time by counting the vibrations of a sliver of quartz crystal, powered by a battery. " +
        N(2) + "A mechanical watch has no battery at all. " +
        N(3) + "Its energy comes from a coiled ribbon of metal called the mainspring, which the owner tightens by winding the crown. " +
        N(4) + "The difficulty is that a tightened spring wants to unwind all at once, the way a stretched rubber band snaps back. " +
        N(5) + "If nothing held it back, a mainspring would release a full day of energy in a second or two, and the hands would simply spin.</p>" +
        "<p>" + N(6) + "The part that solves this problem is called the escapement, and it is arguably the cleverest idea in watchmaking. " +
        N(7) + "It works together with the balance wheel, a small hoop that rocks back and forth on a hair-thin spring. " +
        N(8) + "Each time the balance wheel swings, it unlocks a toothed wheel for a split second, letting the gears advance by exactly one tooth before locking them again. " +
        N(9) + "At the same moment, the escapement gives the balance wheel a tiny push to keep it swinging. " +
        N(10) + "The result is the familiar tick: energy escapes from the mainspring in small, equal portions instead of one wild rush.</p>" +
        "<p>" + N(11) + "Because the balance wheel is the heartbeat of the watch, its accuracy depends on how evenly that beat holds. " +
        N(12) + "Many modern watches oscillate about eight times per second, which adds up to roughly 691,000 beats a day. " +
        N(13) + "Heat, magnetism, and even the position of the wearer's wrist can change the rhythm slightly. " +
        N(14) + "A good mechanical watch might gain or lose a few seconds a day, while an inexpensive quartz watch is usually more accurate.</p>" +
        "<p>" + N(15) + "So why do repair shops still see a steady stream of mechanical watches? " +
        N(16) + "Part of the answer is that they can run for generations if they are cleaned and oiled every several years. " +
        N(17) + "A quartz watch often ends up in a drawer once its circuit fails. " +
        N(18) + "Many owners also simply enjoy the idea of a machine that runs on nothing but a wound spring and careful design. " +
        N(19) + "That enjoyment is a matter of taste, but the engineering behind it is not.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which sentence best states the main idea of the second paragraph of \"The Heartbeat in Your Wrist\"?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "D"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to the passage, what would happen to a mechanical watch without an escapement?",
          choices: [
            { letter: "A", text: "The crown could no longer be wound." },
            { letter: "B", text: "The mainspring would unwind almost at once." },
            { letter: "C", text: "The quartz crystal would stop vibrating." },
            { letter: "D", text: "The balance wheel would swing faster each day." }
          ],
          correct: "B"
        },
        {
          id: "analogy",
          sol: "9.RI.2.B",
          stem: "The comparison to a stretched rubber band in sentence 4 helps the reader understand that a mainspring —",
          choices: [
            { letter: "A", text: "is made of a soft and flexible material" },
            { letter: "B", text: "must be replaced often because it wears out" },
            { letter: "C", text: "releases its stored energy suddenly if not controlled" },
            { letter: "D", text: "gets stronger the longer the watch is worn" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "The passage about mechanical watches is organized mainly by —",
          choices: [
            { letter: "A", text: "presenting a problem and then explaining the device that solves it" },
            { letter: "B", text: "telling the life story of one watchmaker in time order" },
            { letter: "C", text: "listing the steps for winding and setting a watch" },
            { letter: "D", text: "arguing that quartz watches should be banned" }
          ],
          correct: "A"
        },
        {
          id: "fig",
          sol: "9.RV.1.F",
          stem: "In sentence 11, calling the balance wheel the heartbeat of the watch mainly suggests that it —",
          choices: [
            { letter: "A", text: "is the part most likely to break" },
            { letter: "B", text: "sets the steady rhythm the watch depends on" },
            { letter: "C", text: "is shaped like a human heart" },
            { letter: "D", text: "can be heard from across a room" }
          ],
          correct: "B"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "In sentence 19, the author separates —",
          choices: [
            { letter: "A", text: "the cost of a watch from its accuracy" },
            { letter: "B", text: "the history of watches from their future" },
            { letter: "C", text: "a quartz watch's parts from a mechanical one's" },
            { letter: "D", text: "a personal preference from a matter of fact" }
          ],
          correct: "D"
        },
        {
          id: "root",
          sol: "9.RV.1.B",
          stem: "The word oscillate in sentence 12 comes from a Latin word for something that swings. Based on this origin and the context, oscillate means to —",
          choices: [
            { letter: "A", text: "move back and forth in a regular rhythm" },
            { letter: "B", text: "slow down gradually until stopping" },
            { letter: "C", text: "glow brightly when charged with energy" },
            { letter: "D", text: "spin around in a single direction" }
          ],
          correct: "A"
        }
      ]
    },
    /* 7 · INFORMATIONAL · city bus route */
    {
      id: "g9-ri-c46-bus-bunching",
      family: "G9",
      title: "Why Buses Arrive in Pairs",
      kind: "Informational · 9.RI",
      blurb: "You wait twenty minutes, and then two buses show up at once. It is not bad luck.",
      level: 1,
      passage:
        "<p>" + N(1) + "Almost every city rider has seen it happen. " +
        N(2) + "The schedule promises a bus every ten minutes, but nothing comes for twenty, and then two buses on the same route roll up together, one right behind the other. " +
        N(3) + "Transit planners call this problem bus bunching, and it is not caused by lazy drivers or bad luck. " +
        N(4) + "It is caused by a cycle that feeds on itself.</p>" +
        "<p>" + N(5) + "The cycle usually starts with a small delay. " +
        N(6) + "Suppose the first bus gets stuck behind a delivery truck for two minutes. " +
        N(7) + "By the time it reaches the next stop, more riders have gathered than usual, so boarding takes longer. " +
        N(8) + "That makes the bus later still, which means even more people are waiting at the stop after that. " +
        N(9) + "Meanwhile, the bus behind it finds fewer riders at each stop, because the late bus has just picked them up. " +
        N(10) + "The second bus moves faster and faster until it catches up. " +
        N(11) + "Within a few miles, the gap between the two buses can shrink to almost nothing.</p>" +
        "<p>" + N(12) + "Bunching wastes money and frustrates riders. " +
        N(13) + "In one city's study of its busiest route, about a third of the afternoon buses arrived less than two minutes behind another bus on the same line. " +
        N(14) + "People at the stops experienced long waits, while the second bus in each pair often traveled half empty.</p>" +
        "<p>" + N(15) + "Cities have tried several fixes. " +
        N(16) + "Some ask drivers to pause at certain stops, called timepoints, if they are running early. " +
        N(17) + "Others let riders pay before boarding so that each stop takes less time. " +
        N(18) + "A few cities give buses their own painted lanes or traffic signals that stay green a few seconds longer when a bus approaches. " +
        N(19) + "Newer systems track every bus by GPS and tell drivers to speed up or hold back to keep even spacing. " +
        N(20) + "None of these tools works perfectly alone, but together they can break the cycle before it starts. " +
        N(21) + "In my opinion, the painted lanes are the most impressive solution, because riders can actually see them working.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "What is the main idea of \"Why Buses Arrive in Pairs\"?",
          choices: [
            { letter: "A", text: "Bus drivers often ignore the schedules set by planners." },
            { letter: "B", text: "Bunching comes from a delay cycle that cities try to break." },
            { letter: "C", text: "Painted lanes have ended bus bunching in most cities." },
            { letter: "D", text: "Riders should arrive at stops early to avoid long waits." }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to sentence 9, why does the second bus in a bunch move faster?",
          choices: [
            { letter: "A", text: "Its driver is told to speed up by the dispatcher." },
            { letter: "B", text: "It uses a special lane that the first bus cannot." },
            { letter: "C", text: "It finds fewer riders waiting at each stop." },
            { letter: "D", text: "It skips the stops that are called timepoints." }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "Sentences 5-11 are organized mainly as —",
          choices: [
            { letter: "A", text: "a chain of causes and effects" },
            { letter: "B", text: "a list of solutions ranked by cost" },
            { letter: "C", text: "a comparison of two different cities" },
            { letter: "D", text: "a personal story told in flashback" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence provides data that supports the claim in sentence 12 that bunching frustrates riders?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "Based on sentence 16, timepoints are stops where drivers —",
          choices: [
            { letter: "A", text: "switch buses with another driver" },
            { letter: "B", text: "may wait if they are ahead of schedule" },
            { letter: "C", text: "must collect fares from every rider" },
            { letter: "D", text: "end the route and turn the bus around" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "9.RI.2.B",
          stem: "The author begins with the scene described in sentences 1 and 2 mainly to —",
          choices: [
            { letter: "A", text: "prove that schedules are printed incorrectly" },
            { letter: "B", text: "describe the author's own trip to school" },
            { letter: "C", text: "connect the topic to an experience readers know" },
            { letter: "D", text: "argue that riders should complain to the city" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence in the bus bunching article states an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Sentence 21" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "A"
        }
      ]
    },
    /* 8 · VOCABULARY · clock tower */
    {
      id: "g9-rv-c46-clock-tower",
      family: "G9",
      title: "Restarting the Courthouse Clock",
      kind: "Vocabulary · 9.RV",
      blurb: "The town clock has been frozen at 3:47 for eleven years. A retired machinist decides to wake it up.",
      level: 2,
      passage:
        "<p>" + N(1) + "For eleven years the clock on the Harlan County courthouse read 3:47, morning and night. " +
        N(2) + "Visitors joked that it was the only clock in town that was right twice a day, and most residents had stopped looking up at it. " +
        N(3) + "Then Mr. Abernathy Tull, a retired machinist, asked the county for the key to the tower.</p>" +
        "<p>" + N(4) + "What he found inside was <strong>dilapidated</strong>. " +
        N(5) + "Pigeons had nested on the gear frame, rainwater had dripped through a broken louver for years, and a crust of orange rust covered every exposed surface. " +
        N(6) + "The heavy iron weights that once powered the clock lay at the bottom of their shaft, their cables snapped. " +
        N(7) + "Most people would have closed the door and gone home. " +
        N(8) + "Mr. Tull, however, was <strong>meticulous</strong>. " +
        N(9) + "He photographed each gear from three angles, labeled every part with a paper tag, and kept a notebook so detailed that it listed the size of each bolt.</p>" +
        "<p>" + N(10) + "The work was <strong>arduous</strong>. " +
        N(11) + "He carried parts down eighty-two narrow steps, soaked them in solvent in his garage, and carried them back up again, sometimes three times in a day. " +
        N(12) + "Several neighbors were <strong>skeptical</strong> at first; one asked whether he really thought a clock that old was worth the trouble. " +
        N(13) + "But as the weeks went on, people began stopping by the courthouse steps to ask about his progress, and a high school shop class volunteered to cut new brass bushings on their lathe.</p>" +
        "<p>" + N(14) + "The hardest decision involved the original hands, which were bent and pitted. " +
        N(15) + "Replacing them would have been easier, but Mr. Tull wanted to <strong>preserve</strong> as much of the old clock as he could. " +
        N(16) + "He spent a month straightening them by hand with a wooden mallet.</p>" +
        "<p>" + N(17) + "On the first Saturday in April, he wound the weights to the top of the shaft and released the pendulum. " +
        N(18) + "The clock hesitated, ticked, and then began to move. " +
        N(19) + "A small crowd on the lawn applauded when the minute hand finally left 3:47 behind. " +
        N(20) + "Mr. Tull called the moment a <strong>resurrection</strong>, though he admitted that the clock still ran two minutes fast.</p>",
      claims: [
        {
          id: "dilap",
          sol: "9.RV.1.C",
          stem: "Which details from sentence 5 best help the reader understand the meaning of dilapidated in sentence 4?",
          choices: [
            { letter: "A", text: "the key to the tower and the county's permission" },
            { letter: "B", text: "nests, years of dripping rain, and a crust of rust" },
            { letter: "C", text: "the visitors' jokes about the frozen clock face" },
            { letter: "D", text: "the photographs taken of each gear from three angles" }
          ],
          correct: "B"
        },
        {
          id: "metic",
          sol: "9.RV.1.C",
          stem: "In sentence 8, the word meticulous most nearly means —",
          choices: [
            { letter: "A", text: "extremely careful about details" },
            { letter: "B", text: "nervous about being in high places" },
            { letter: "C", text: "proud of earlier accomplishments" },
            { letter: "D", text: "quick to finish difficult tasks" }
          ],
          correct: "A"
        },
        {
          id: "arduous",
          sol: "9.RV.1.E",
          stem: "The author could have written hard instead of arduous in sentence 10. Compared with hard, arduous adds a sense that the work was —",
          choices: [
            { letter: "A", text: "confusing and full of puzzles" },
            { letter: "B", text: "dangerous and against the rules" },
            { letter: "C", text: "long, tiring, and physically demanding" },
            { letter: "D", text: "boring and not worth much effort" }
          ],
          correct: "C"
        },
        {
          id: "skept",
          sol: "9.RV.1.C",
          stem: "Based on the question one neighbor asks in sentence 12, the word skeptical most nearly means —",
          choices: [
            { letter: "A", text: "angry about the noise of the work" },
            { letter: "B", text: "eager to help with the repairs" },
            { letter: "C", text: "unaware that any work was underway" },
            { letter: "D", text: "doubtful that the effort was worthwhile" }
          ],
          correct: "D"
        },
        {
          id: "preserve",
          sol: "9.RV.1.B",
          stem: "The word preserve in sentence 15 contains the prefix pre- (before) and the root serv (keep). As used in the passage, preserve means to —",
          choices: [
            { letter: "A", text: "keep something in its original state" },
            { letter: "B", text: "prepare something before it is needed" },
            { letter: "C", text: "serve food to a group of people" },
            { letter: "D", text: "throw away parts that are damaged" }
          ],
          correct: "A"
        },
        {
          id: "resur",
          sol: "9.RV.1.F",
          stem: "In sentence 20, Mr. Tull calls the clock's restart a resurrection. This figurative word choice suggests that he sees the clock as —",
          choices: [
            { letter: "A", text: "a machine too old to ever run correctly" },
            { letter: "B", text: "something that was dead and has come back to life" },
            { letter: "C", text: "a burden that the county forced him to accept" },
            { letter: "D", text: "a puzzle that the shop class solved for him" }
          ],
          correct: "B"
        },
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "Which statement best summarizes the central idea of the courthouse clock passage?",
          choices: [
            { letter: "A", text: "A town learns that old clocks cannot keep good time." },
            { letter: "B", text: "Pigeons cause serious damage to historic buildings." },
            { letter: "C", text: "A shop class builds a new clock for the courthouse." },
            { letter: "D", text: "One man's patient work revives a neglected landmark." }
          ],
          correct: "D"
        }
      ]
    },
    /* 9 · VOCABULARY · theme park job */
    {
      id: "g9-rv-c46-ride-operator",
      family: "G9",
      title: "Training Day on the Cyclone Loop",
      kind: "Vocabulary · 9.RV",
      blurb: "Before Yusra can run a roller coaster, she has to learn that the most important button is the one marked STOP.",
      level: 3,
      passage:
        "<p>" + N(1) + "Yusra had expected her first day as a ride operator at Harbor Point Park to involve pushing a big green button and watching people scream happily. " +
        N(2) + "Instead, her trainer, a soft-spoken man named Mr. Adeyemi, spent the first two hours walking her around the Cyclone Loop with a clipboard. " +
        N(3) + "\"Before anyone rides,\" he said, \"we inspect.\"</p>" +
        "<p>" + N(4) + "The morning check was <strong>exhaustive</strong>. " +
        N(5) + "They tested every lap bar twice, walked the entire track on a catwalk, listened to the wheels on an empty test run, and signed a log for each step. " +
        N(6) + "Mr. Adeyemi pointed out that the routine never changed, no matter how sunny the day or how long the line. " +
        N(7) + "\"Nothing here is <strong>arbitrary</strong>,\" he said, tapping the clipboard. " +
        N(8) + "\"Every line on this sheet is here because something once went wrong somewhere.\"</p>" +
        "<p>" + N(9) + "In the afternoon he showed her the control panel. " +
        N(10) + "The green dispatch button sat on the right, but the red emergency stop sat in the center, larger than everything else. " +
        N(11) + "An operator, he explained, had to stay <strong>vigilant</strong> every second a train was moving, watching for a rider standing up, a loose hat, or a child who had slipped beneath a lap bar. " +
        N(12) + "If anything looked wrong, she was expected to hit the red button first and ask questions second.</p>" +
        "<p>" + N(13) + "Late in the day, a teenager in line began to <strong>harangue</strong> Yusra about the wait, complaining loudly for several minutes that the ride was slow, the staff was slow, and the whole park was a waste of money. " +
        N(14) + "Yusra felt her face grow hot. " +
        N(15) + "Mr. Adeyemi stepped beside her and answered the boy in a voice that was calm but <strong>resolute</strong>: the ride would run when the checks were done, and not a minute sooner.</p>" +
        "<p>" + N(16) + "Afterward, Yusra asked him how he stayed so patient. " +
        N(17) + "He shrugged. " +
        N(18) + "\"The line is a river,\" he said. " +
        N(19) + "\"It will flow at its own speed no matter how loudly anyone shouts at it.\" " +
        N(20) + "That evening, when she wrote her name in the log for the first time, she did it slowly, letter by letter.</p>",
      claims: [
        {
          id: "exhaust",
          sol: "9.RV.1.C",
          stem: "Based on sentence 5, the morning check described as exhaustive in sentence 4 is one that —",
          choices: [
            { letter: "A", text: "leaves the workers too tired to continue" },
            { letter: "B", text: "is done quickly before the gates open" },
            { letter: "C", text: "covers every part thoroughly and completely" },
            { letter: "D", text: "can be skipped on days with short lines" }
          ],
          correct: "C"
        },
        {
          id: "arbit",
          sol: "9.RV.1.C",
          stem: "Mr. Adeyemi's explanation in sentence 8 shows that arbitrary in sentence 7 means —",
          choices: [
            { letter: "A", text: "based on chance rather than a reason" },
            { letter: "B", text: "written down in an official record" },
            { letter: "C", text: "required by the government" },
            { letter: "D", text: "difficult for new workers to learn" }
          ],
          correct: "A"
        },
        {
          id: "vigil",
          sol: "9.RV.1.B",
          stem: "In sentence 11, vigilant is related to vigil, a time of staying awake to keep watch. An operator who is vigilant is —",
          choices: [
            { letter: "A", text: "tired from working the late shift" },
            { letter: "B", text: "watchful and alert for any danger" },
            { letter: "C", text: "proud of the ride's safety record" },
            { letter: "D", text: "strict about the rules for riders" }
          ],
          correct: "B"
        },
        {
          id: "harangue",
          sol: "9.RV.1.E",
          stem: "The author could have written talk to instead of harangue in sentence 13. Compared with talk to, harangue suggests that the teenager's speech was —",
          choices: [
            { letter: "A", text: "quiet, polite, and brief" },
            { letter: "B", text: "funny and meant as a joke" },
            { letter: "C", text: "confused and hard to hear" },
            { letter: "D", text: "long, loud, and aggressive" }
          ],
          correct: "D"
        },
        {
          id: "resolute",
          sol: "9.RV.1.E",
          stem: "In sentence 15, Mr. Adeyemi's voice is described as calm but resolute. The word resolute has a connotation of —",
          choices: [
            { letter: "A", text: "firm determination" },
            { letter: "B", text: "hidden anger" },
            { letter: "C", text: "nervous doubt" },
            { letter: "D", text: "playful teasing" }
          ],
          correct: "A"
        },
        {
          id: "river",
          sol: "9.RV.1.F",
          stem: "In sentences 18 and 19, Mr. Adeyemi compares the line to a river mainly to suggest that —",
          choices: [
            { letter: "A", text: "the ride is too close to the water to run safely" },
            { letter: "B", text: "riders get wet on the Cyclone Loop's final drop" },
            { letter: "C", text: "the line moves at a steady pace that anger cannot hurry" },
            { letter: "D", text: "operators should send riders through as fast as possible" }
          ],
          correct: "C"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to sentence 10, how is the emergency stop button set apart on the control panel?",
          choices: [
            { letter: "A", text: "It is hidden under a cover on the left side." },
            { letter: "B", text: "It is larger than everything else and centered." },
            { letter: "C", text: "It is green so that it matches the dispatch button." },
            { letter: "D", text: "It lights up whenever a lap bar is left open." }
          ],
          correct: "B"
        }
      ]
    },
    /* 10 · PAIRED · sea turtles */
    {
      id: "g9-dsr-c46-turtle-lights",
      family: "G9",
      title: "Lights Out for Turtles? Notice + Letter",
      kind: "Paired texts · 9.DSR",
      blurb: "A beach town asks residents to dim their lights during nesting season. One shop owner writes back.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Notice from the Town of Pelican Shoals</strong></p>" +
        "<p>" + N(1) + "From May 1 through October 31, all lights visible from the beach must be turned off, shielded, or replaced with approved amber bulbs between 9 p.m. and sunrise. " +
        N(2) + "Newly hatched sea turtles find the ocean by moving toward the brightest horizon, which on a natural beach is the moonlit water. " +
        N(3) + "Artificial lights on land can pull them in the wrong direction, toward roads and parking lots. " +
        N(4) + "Last season, volunteers documented eleven nests on our shoreline in which most of the hatchlings crawled inland instead of toward the sea. " +
        N(5) + "Property owners can find a list of approved fixtures at Town Hall, and the town will reimburse up to half the cost of new shields. " +
        N(6) + "Code officers will begin evening inspections on June 1. " +
        N(7) + "A first violation will result in a written warning; later violations may carry a fine of fifty dollars per night. " +
        N(8) + "Our beaches belong to these animals as much as to us, and a few dark hours each night is a small price for their survival.</p>" +
        "<p><strong>Text 2 — Letter to the Editor from a Shop Owner</strong></p>" +
        "<p>" + N(9) + "I have run the Driftwood Ice Cream stand on Beach Road for fourteen years, and I support protecting the turtles. " +
        N(10) + "My own grandchildren volunteer on the nest patrol. " +
        N(11) + "But the new lighting rule was written without asking a single business owner for advice. " +
        N(12) + "My stand stays open until ten on summer nights, and customers, many of them small children or grandparents, need to see the steps, the counter, and the uneven boards by the railing. " +
        N(13) + "Dark storefronts also worry some families, who may decide to take their evening walk somewhere brighter instead. " +
        N(14) + "Amber bulbs and shields are a reasonable idea, but the town's reimbursement covers only half, and most of us cannot afford new fixtures in the middle of our busiest season. " +
        N(15) + "I am asking the council to delay fines until next year and to meet with business owners this month. " +
        N(16) + "We want the hatchlings to reach the water too, but we need a plan that keeps our lights on safely while doing it.</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          stem: "Which idea do the town notice and the shop owner's letter both support?",
          choices: [
            { letter: "A", text: "Fines should begin on June 1." },
            { letter: "B", text: "Businesses should close by 9 p.m." },
            { letter: "C", text: "Protecting the hatchlings is important." },
            { letter: "D", text: "The town should pay the full cost of bulbs." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The notice and the letter differ mainly in their views about —",
          choices: [
            { letter: "A", text: "how and when the lighting rule should be enforced" },
            { letter: "B", text: "whether artificial light harms hatchlings at all" },
            { letter: "C", text: "whether volunteers should patrol the nests" },
            { letter: "D", text: "which months turtles usually nest on the beach" }
          ],
          correct: "A"
        },
        {
          id: "challenge",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does the shop owner most directly challenge in sentence 14?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "9.DSR.E",
          stem: "Which TWO details, taken together, best show why the shop owner thinks the rule's timing is unfair? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 10: his grandchildren volunteer on the nest patrol." },
            { letter: "B", text: "Sentence 12: his stand stays open until ten on summer nights." },
            { letter: "C", text: "Sentence 1: the rule runs from May 1 through October 31." },
            { letter: "D", text: "Sentence 3: lights pull hatchlings toward roads and lots." }
          ],
          correct: ["B", "C"]
        },
        {
          id: "fact",
          sol: "9.RI.1.C",
          stem: "Which sentence in Text 1 expresses a belief rather than stating a rule or reporting a fact?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 1" }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 5, the word reimburse most nearly means —",
          choices: [
            { letter: "A", text: "inspect" },
            { letter: "B", text: "approve" },
            { letter: "C", text: "fine again" },
            { letter: "D", text: "pay back" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence in Text 1 offers local evidence that the lighting problem is real?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "B"
        }
      ]
    },
    /* 11 · PAIRED · city bus route */
    {
      id: "g9-dsr-c46-route-change",
      family: "G9",
      title: "Route 14 Is Changing: Agency Update + Rider's Post",
      kind: "Paired texts · 9.DSR",
      blurb: "The transit agency wants a faster, straighter Route 14. A rider who lives on the old loop is not so sure.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Service Update from Rivergate Transit</strong></p>" +
        "<p>" + N(1) + "Beginning August 18, Route 14 will follow a straighter path along Delmar Avenue instead of winding through the Eastbrook neighborhood. " +
        N(2) + "For years, riders have told us that the trip from the Eastbrook end to downtown takes too long, and our data agree: the current loop adds nearly eleven minutes to every one-way trip. " +
        N(3) + "By removing the loop, we can run buses every twelve minutes instead of every twenty without adding a single driver. " +
        N(4) + "About ninety percent of current riders, including most who board downtown, will have a shorter trip. " +
        N(5) + "We recognize that some Eastbrook residents will now walk farther to reach a stop. " +
        N(6) + "The longest new walk will be about a quarter mile, and we are adding benches, lighting, and covered shelters at the three closest Delmar stops. " +
        N(7) + "Riders who use wheelchairs or cannot walk that distance may book our curb-to-curb van service at no extra cost. " +
        N(8) + "We believe this change will make Route 14 faster, more reliable, and more useful for everyone who depends on it.</p>" +
        "<p><strong>Text 2 — Post on a Neighborhood Message Board</strong></p>" +
        "<p>" + N(9) + "I have ridden Route 14 from Eastbrook for six years, and I understand why the agency wants a faster line, and I have nothing against the drivers, who are always kind. " +
        N(10) + "Twelve-minute service sounds wonderful, and I am sure most riders will enjoy it. " +
        N(11) + "But the agency's numbers leave out who lives on the loop. " +
        N(12) + "Eastbrook has two senior apartment buildings and the only health clinic on this side of the river. " +
        N(13) + "A quarter mile is a short walk for a high school student, but it is a long one for a man with a walker in February, when the sidewalks along Delmar are often icy and the wind off the river cuts through any coat. " +
        N(14) + "The van service is a kind offer, yet it must be booked a full day ahead, which does not work for someone who wakes up sick. " +
        N(15) + "I am not asking the agency to cancel the change. " +
        N(16) + "I am asking it to keep one bus an hour on the old loop, so the people who need Route 14 most are not the ones it leaves behind.</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          stem: "Which statement would the writers of both the service update and the message-board post most likely accept?",
          choices: [
            { letter: "A", text: "The van service fully solves the walking problem." },
            { letter: "B", text: "Route 14 should keep running through Eastbrook every hour." },
            { letter: "C", text: "Most Route 14 riders will benefit from faster service." },
            { letter: "D", text: "The agency should hire more drivers for Route 14." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "How does the rider's view of the quarter-mile walk differ from the agency's?",
          choices: [
            { letter: "A", text: "The agency treats it as minor; the rider says it burdens certain people." },
            { letter: "B", text: "The agency says it is unsafe; the rider says it is healthy exercise." },
            { letter: "C", text: "The agency plans to shorten it; the rider wants it to be longer." },
            { letter: "D", text: "The agency ignores it entirely; the rider is the first to mention it." }
          ],
          correct: "A"
        },
        {
          id: "challenge",
          sol: "9.DSR.E",
          stem: "Sentence 14 in Text 2 most directly responds to which sentence in Text 1?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "infer",
          sol: "9.DSR.E",
          stem: "A reader combining the Route 14 update with the rider's post could best conclude that —",
          choices: [
            { letter: "A", text: "the agency's plan was designed to punish Eastbrook" },
            { letter: "B", text: "a change that helps most riders can still hurt a few" },
            { letter: "C", text: "Eastbrook residents rarely ride the bus at all" },
            { letter: "D", text: "the rider has not read the agency's update" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "9.RI.2.B",
          stem: "The rider includes the details about the senior buildings and the clinic in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "show that the loop serves people who most need nearby stops" },
            { letter: "B", text: "prove that the agency's travel-time numbers are false" },
            { letter: "C", text: "suggest that the clinic should move closer to Delmar Avenue" },
            { letter: "D", text: "describe the neighborhood to readers from other cities" }
          ],
          correct: "A"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to Text 1, how will the agency run buses more often on Route 14?",
          choices: [
            { letter: "A", text: "By hiring new drivers for the busiest hours" },
            { letter: "B", text: "By adding a second route along Delmar Avenue" },
            { letter: "C", text: "By ending the van service for Eastbrook riders" },
            { letter: "D", text: "By removing the loop that lengthens each trip" }
          ],
          correct: "D"
        },
        {
          id: "conno",
          sol: "9.RV.1.E",
          stem: "In sentence 16, the rider says the change should not leave behind the people who need the route most. The phrase leave behind carries a connotation of —",
          choices: [
            { letter: "A", text: "careful planning" },
            { letter: "B", text: "being abandoned" },
            { letter: "C", text: "saving time" },
            { letter: "D", text: "moving forward" }
          ],
          correct: "B"
        }
      ]
    },
    /* 12 · POETRY · watch repair */
    {
      id: "g9-rl-c46-poem-pocketwatch",
      family: "G9",
      title: "My Grandfather's Pocket Watch",
      kind: "Poetry · 9.RL",
      blurb: "A speaker opens an old pocket watch and finds more than gears inside.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "It sat in a drawer for nine silent years,<br>" +
        L(2) + "a moon of brass with its face turned in,<br>" +
        L(3) + "its hands stopped at a quarter past four<br>" +
        L(4) + "like a sentence nobody finished.<br>" +
        L(5) + "The repairman on Willow Street<br>" +
        L(6) + "pried open the back with a thumbnail blade<br>" +
        L(7) + "and showed me the city inside:<br>" +
        L(8) + "wheels the size of freckles,<br>" +
        L(9) + "a spring curled tight as a fern,<br>" +
        L(10) + "jewels the color of pomegranate seeds.<br>" +
        L(11) + "He cleaned each part with a careful breath,<br>" +
        L(12) + "oiled each pivot with a single drop,<br>" +
        L(13) + "and wound the crown three slow turns.<br>" +
        L(14) + "Then, from my palm, a sound<br>" +
        L(15) + "I had not heard since I was six,<br>" +
        L(16) + "sitting on a porch beside my grandfather<br>" +
        L(17) + "while he checked the time for no reason<br>" +
        L(18) + "except to let me hear it tick.<br>" +
        L(19) + "Now it keeps his time and mine together,<br>" +
        L(20) + "one small heart beating in my pocket.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"My Grandfather's Pocket Watch\"?",
          choices: [
            { letter: "A", text: "Old objects are worth more money once they are repaired." },
            { letter: "B", text: "Children should learn to fix their own belongings." },
            { letter: "C", text: "An object can carry the memory of someone we love." },
            { letter: "D", text: "It is wiser to buy new things than to fix old ones." }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          stem: "In lines 3 and 4, the stopped hands are compared to a sentence nobody finished mainly to suggest that —",
          choices: [
            { letter: "A", text: "something was left incomplete when the watch stopped" },
            { letter: "B", text: "the speaker cannot read the numbers on the watch face" },
            { letter: "C", text: "the grandfather wrote letters that he never mailed" },
            { letter: "D", text: "the repairman is unable to explain the problem" }
          ],
          correct: "A"
        },
        {
          id: "imagery",
          sol: "9.RL.2.B",
          stem: "The images in lines 8-10 (freckles, a fern, pomegranate seeds) mainly help the reader see the inside of the watch as —",
          choices: [
            { letter: "A", text: "dull and broken beyond repair" },
            { letter: "B", text: "tiny, delicate, and almost alive" },
            { letter: "C", text: "dangerous and difficult to touch" },
            { letter: "D", text: "plain and identical to a new watch" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The tone of lines 14-20 is best described as —",
          choices: [
            { letter: "A", text: "bitter" },
            { letter: "B", text: "amused" },
            { letter: "C", text: "anxious" },
            { letter: "D", text: "tender" }
          ],
          correct: "D"
        },
        {
          id: "speaker",
          sol: "9.RL.3.B",
          stem: "The pocket-watch poem is told from the point of view of —",
          choices: [
            { letter: "A", text: "the repairman on Willow Street" },
            { letter: "B", text: "the grandfather, remembering his grandchild" },
            { letter: "C", text: "the watch itself, waiting in the drawer" },
            { letter: "D", text: "a grandchild who brings the watch to be fixed" }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In line 12, a pivot is most likely —",
          choices: [
            { letter: "A", text: "a point on which a small part turns" },
            { letter: "B", text: "a drawer where watches are stored" },
            { letter: "C", text: "a tool for opening the watch case" },
            { letter: "D", text: "a jewel set into the watch face" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "9.RL.3.A",
          stem: "How does the ending of the pocket-watch poem (lines 19-20) differ from its beginning (lines 1-4)?",
          choices: [
            { letter: "A", text: "The watch moves from the speaker's pocket to a drawer." },
            { letter: "B", text: "The watch moves from silence and stillness to life." },
            { letter: "C", text: "The speaker moves from joy to disappointment." },
            { letter: "D", text: "The speaker moves from the porch to a repair shop." }
          ],
          correct: "B"
        }
      ]
    },
    /* 13 · POETRY · city bus route */
    {
      id: "g9-rl-c46-poem-last-bus",
      family: "G9",
      title: "Last Bus, Route 22",
      kind: "Poetry · 9.RL",
      blurb: "A speaker rides the final bus of the night across a sleeping city.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At 11:52 the last bus kneels<br>" +
        L(2) + "and sighs its doors apart for me,<br>" +
        L(3) + "a lantern on wheels in an empty street,<br>" +
        L(4) + "half full of people going home.<br>" +
        L(5) + "A nurse in blue sleeps upright by the window,<br>" +
        L(6) + "her badge still clipped above her heart.<br>" +
        L(7) + "Two cooks share earbuds and one bag of oranges.<br>" +
        L(8) + "A janitor reads a paperback with a torn cover,<br>" +
        L(9) + "moving his lips around the hard words.<br>" +
        L(10) + "Nobody speaks. Nobody needs to.<br>" +
        L(11) + "The city outside has closed its eyes,<br>" +
        L(12) + "its storefronts dark as folded wings,<br>" +
        L(13) + "but in here the yellow light holds us<br>" +
        L(14) + "the way a palm holds water.<br>" +
        L(15) + "The driver knows each of our stops<br>" +
        L(16) + "without the bell. She slows<br>" +
        L(17) + "at the laundromat, the clinic, the corner<br>" +
        L(18) + "where my mother leaves the porch light on.<br>" +
        L(19) + "We are strangers who will not remember<br>" +
        L(20) + "each other's names by morning,<br>" +
        L(21) + "and still, for twenty minutes every night,<br>" +
        L(22) + "we are a small town moving through the dark.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which idea does \"Last Bus, Route 22\" most clearly develop?",
          choices: [
            { letter: "A", text: "City buses are too crowded late at night." },
            { letter: "B", text: "Strangers can form a brief, quiet community." },
            { letter: "C", text: "Night workers should be paid more for their labor." },
            { letter: "D", text: "People feel lonelier in cities than in small towns." }
          ],
          correct: "B"
        },
        {
          id: "personif",
          sol: "9.RL.2.A",
          stem: "In lines 1 and 2, the bus kneels and sighs its doors apart. These details are examples of —",
          choices: [
            { letter: "A", text: "personification" },
            { letter: "B", text: "alliteration" },
            { letter: "C", text: "hyperbole" },
            { letter: "D", text: "understatement" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "The comparison in lines 13 and 14, the yellow light holds us the way a palm holds water, mainly creates a feeling of —",
          choices: [
            { letter: "A", text: "danger and unease" },
            { letter: "B", text: "boredom and fatigue" },
            { letter: "C", text: "gentle protection" },
            { letter: "D", text: "excited celebration" }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Lines 15-18 suggest that the driver —",
          choices: [
            { letter: "A", text: "is new to the route and still learning it" },
            { letter: "B", text: "has come to know her regular riders well" },
            { letter: "C", text: "is related to the speaker's mother" },
            { letter: "D", text: "ignores the bell because it is broken" }
          ],
          correct: "B"
        },
        {
          id: "fig",
          sol: "9.RV.1.F",
          stem: "In line 22, the speaker calls the riders a small town moving through the dark. This metaphor suggests that the riders —",
          choices: [
            { letter: "A", text: "share a sense of belonging during the ride" },
            { letter: "B", text: "all grew up in the same small community" },
            { letter: "C", text: "are planning to move away from the city" },
            { letter: "D", text: "are afraid of the dark streets outside" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.C",
          stem: "The speaker's tone toward the other riders on Route 22 is best described as —",
          choices: [
            { letter: "A", text: "suspicious" },
            { letter: "B", text: "impatient" },
            { letter: "C", text: "indifferent" },
            { letter: "D", text: "affectionate" }
          ],
          correct: "D"
        },
        {
          id: "contrast",
          sol: "9.RL.3.A",
          stem: "The poet contrasts the city in lines 11 and 12 with the inside of the bus mainly to emphasize that —",
          choices: [
            { letter: "A", text: "the city is more beautiful at night than by day" },
            { letter: "B", text: "the stores should stay open later for workers" },
            { letter: "C", text: "the bus feels warm and awake in a sleeping city" },
            { letter: "D", text: "the riders would rather be walking home" }
          ],
          correct: "C"
        }
      ]
    },
    /* 14 · DRAMA · theme park job */
    {
      id: "g9-rl-c46-drama-mine-train",
      family: "G9",
      title: "Closing Time at the Mine Train",
      kind: "Drama · 9.RL",
      blurb: "Two ride attendants, one broken-down ride, and a long line of guests who do not want to hear the news.",
      level: 2,
      passage:
        "<p><em>The exit platform of the Runaway Mine Train at Copperhill Park, 8:40 p.m. A string of lanterns sways overhead, and the roar of a distant coaster fades in and out. DELPHINE, a second-year attendant, holds a radio. MARCUS, in his first week, straightens a stack of maps. A sign reads RIDE TEMPORARILY CLOSED.</em></p>" +
        "<p>" + N(1) + "<strong>MARCUS:</strong> Maintenance says the brake sensor is out for the night. " +
        N(2) + "Somebody has to tell the line.</p>" +
        "<p>" + N(3) + "<strong>DELPHINE:</strong> Somebody. <em>(She looks at him.)</em> " +
        N(4) + "That's a funny way to say you.</p>" +
        "<p>" + N(5) + "<strong>MARCUS:</strong> There are two hundred people out there, and some of them have waited an hour in the heat with tired kids. " +
        N(6) + "<em>(To the audience.)</em> " +
        N(7) + "I took this job because I thought I'd be running a roller coaster, not giving speeches.</p>" +
        "<p>" + N(8) + "<strong>DELPHINE:</strong> Then let me tell you a secret. " +
        N(9) + "They aren't really mad at you. " +
        N(10) + "They're mad at the hour they just lost. " +
        N(11) + "<em>(She hands him a stack of yellow tickets.)</em> " +
        N(12) + "Return passes, good for the front of the line tomorrow. " +
        N(13) + "Say sorry first, explain second, and give these out third.</p>" +
        "<p>" + N(14) + "<strong>MARCUS:</strong> And if someone yells?</p>" +
        "<p>" + N(15) + "<strong>DELPHINE:</strong> Let them finish. " +
        N(16) + "Then say sorry again, in the same voice. " +
        N(17) + "<em>(To the audience.)</em> " +
        N(18) + "My first week, I hid behind the control booth for ten minutes rather than make this announcement, and my supervisor had to do it for me.</p>" +
        "<p>" + N(19) + "<em>MARCUS walks to the edge of the platform, takes a breath, and raises his hand. The lantern light catches the yellow tickets.</em></p>" +
        "<p>" + N(20) + "<strong>MARCUS:</strong> Excuse me, everyone. <em>(His voice cracks; he starts again, louder.)</em> " +
        N(21) + "Excuse me! I'm so sorry, but the Mine Train is closed for the rest of tonight. " +
        N(22) + "We have passes that will put you first in line tomorrow.</p>" +
        "<p>" + N(23) + "<em>A pause. Then a small boy near the front cheers, and a few people laugh. The line begins to break apart, slowly, toward MARCUS's outstretched hand.</em></p>" +
        "<p>" + N(24) + "<strong>DELPHINE:</strong> <em>(Quietly, clicking off the radio.)</em> " +
        N(25) + "Not bad for somebody.</p>",
      claims: [
        {
          id: "aside",
          sol: "9.RL.1.D",
          stem: "The playwright uses Delphine's aside in sentence 18 mainly to reveal that she —",
          choices: [
            { letter: "A", text: "once felt the same fear Marcus feels now" },
            { letter: "B", text: "plans to report Marcus to their supervisor" },
            { letter: "C", text: "thinks the ride should never have closed" },
            { letter: "D", text: "wants Marcus to make the announcement for her" }
          ],
          correct: "A"
        },
        {
          id: "aside2",
          sol: "9.RL.1.D",
          stem: "Which sentence is an aside in which Marcus shares a private thought with the audience?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "C"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Delphine in \"Closing Time at the Mine Train\"?",
          choices: [
            { letter: "A", text: "She is impatient and wants Marcus to quit." },
            { letter: "B", text: "She is nervous and avoids talking to guests." },
            { letter: "C", text: "She is strict and refuses to give any advice." },
            { letter: "D", text: "She is experienced and quietly supportive." }
          ],
          correct: "D"
        },
        {
          id: "direction",
          sol: "9.RL.3.B",
          stem: "The stage direction in sentence 20, His voice cracks; he starts again, louder, mainly shows that Marcus —",
          choices: [
            { letter: "A", text: "is angry at the guests for waiting so long" },
            { letter: "B", text: "pushes past his nerves to finish the task" },
            { letter: "C", text: "cannot be heard over the noise of the ride" },
            { letter: "D", text: "is pretending to be upset to gain sympathy" }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Delphine's advice in sentences 9 and 10 suggests that she believes the guests —",
          choices: [
            { letter: "A", text: "will blame the attendants for the broken sensor" },
            { letter: "B", text: "are angry about losing time, not about Marcus" },
            { letter: "C", text: "do not want passes for the next day's rides" },
            { letter: "D", text: "will leave the park as soon as they hear the news" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "9.RL.2.C",
          stem: "Delphine's final line, Not bad for somebody, has a tone that is best described as —",
          choices: [
            { letter: "A", text: "cold and disappointed" },
            { letter: "B", text: "nervous and uncertain" },
            { letter: "C", text: "playful and approving" },
            { letter: "D", text: "angry and sarcastic" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best supported by the scene at the Mine Train?",
          choices: [
            { letter: "A", text: "Courage often means doing a hard task while still afraid." },
            { letter: "B", text: "Guests at theme parks should be more patient with workers." },
            { letter: "C", text: "New employees should not be trusted with important jobs." },
            { letter: "D", text: "Machines are less reliable than the people who run them." }
          ],
          correct: "A"
        }
      ]
    },
    /* 15 · FUNCTIONAL TEXT · sea turtles */
    {
      id: "g9-ri-c46-nest-patrol-guide",
      family: "G9",
      title: "Nest Patrol Volunteer Guide",
      kind: "Functional text · 9.RI",
      blurb: "A one-page guide for teen volunteers who walk the beach at dawn looking for sea turtle nests.",
      level: 1,
      passage:
        "<p><strong>Sandpiper Island Sea Turtle Project: Dawn Patrol Guide for New Volunteers</strong></p>" +
        "<p><strong>Your role.</strong> " + N(1) + "Dawn patrol volunteers walk an assigned mile of beach each morning from May through August, looking for the tracks a female turtle leaves when she crawls ashore to nest. " +
        N(2) + "You will record what you find and report it, but you will never dig into or move a nest yourself. " +
        N(3) + "Only staff members with a state permit may handle eggs.</p>" +
        "<p><strong>Before you go.</strong> " + N(4) + "Check in by text with the patrol leader by 6:00 a.m. " +
        N(5) + "Bring water, a charged phone, the project clipboard, and a roll of orange flagging tape. " +
        N(6) + "Wear closed-toe shoes; the high-tide line often hides broken shells and fishing hooks.</p>" +
        "<p><strong>On the beach.</strong> " + N(7) + "Walk just above the wet sand so you can see tracks before the tide or other walkers erase them. " +
        N(8) + "A nesting crawl looks like a wide tractor tread leading up from the water and back down again. " +
        N(9) + "If you find one, follow it to the top of the beach and look for a large patch of scattered sand called the body pit. " +
        N(10) + "Take two photos: one of the tracks and one of the body pit, with the clipboard in the frame for scale. " +
        N(11) + "Mark the spot with flagging tape tied to a nearby stake or plant, never to the sand itself.</p>" +
        "<p><strong>If something is wrong.</strong> " + N(12) + "If you find a stranded, injured, or dead turtle, stay at least ten feet away and call the project hotline immediately. " +
        N(13) + "Do not try to return a turtle to the water. " +
        N(14) + "Keep people and dogs back until a staff member arrives.</p>" +
        "<p><strong>After your walk.</strong> " + N(15) + "Upload your photos and fill out the online crawl form by 9:00 a.m., even on mornings when you find nothing. " +
        N(16) + "A report of zero is still useful data. " +
        N(17) + "Most new volunteers find their first nest within two weeks, and many say it is the best part of their summer.</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "What is the main purpose of the Dawn Patrol Guide?",
          choices: [
            { letter: "A", text: "To persuade beachgoers to stop walking their dogs" },
            { letter: "B", text: "To explain how sea turtles choose nesting beaches" },
            { letter: "C", text: "To describe the history of the turtle project" },
            { letter: "D", text: "To tell volunteers how to do their patrol safely and correctly" }
          ],
          correct: "D"
        },
        {
          id: "rule",
          sol: "9.RI.1.B",
          stem: "According to the guide, what should a volunteer do after finding a nesting crawl?",
          choices: [
            { letter: "A", text: "Dig carefully to count the eggs in the nest" },
            { letter: "B", text: "Photograph the site and mark it with flagging tape" },
            { letter: "C", text: "Call the hotline and wait ten feet away" },
            { letter: "D", text: "Move the eggs above the high-tide line" }
          ],
          correct: "B"
        },
        {
          id: "time",
          sol: "9.RI.1.B",
          stem: "By what time must a patrol volunteer submit the online crawl form?",
          choices: [
            { letter: "A", text: "6:00 a.m." },
            { letter: "B", text: "7:00 a.m." },
            { letter: "C", text: "9:00 a.m." },
            { letter: "D", text: "Noon" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "How do the bold headings help organize the nest patrol guide?",
          choices: [
            { letter: "A", text: "They group the instructions by stage of the volunteer's morning." },
            { letter: "B", text: "They list the volunteers in order of experience." },
            { letter: "C", text: "They compare different kinds of sea turtles." },
            { letter: "D", text: "They rank the rules from least to most important." }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence best explains why volunteers must file a report even when they find no tracks?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RV.1.C",
          stem: "In sentence 10, the phrase for scale means the clipboard is included so that —",
          choices: [
            { letter: "A", text: "the photo can be weighed later" },
            { letter: "B", text: "viewers can judge the size of the marks" },
            { letter: "C", text: "the volunteer's name is in the picture" },
            { letter: "D", text: "the tide's height can be measured" }
          ],
          correct: "B"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence in the volunteer guide reports what others feel rather than giving an instruction?",
          choices: [
            { letter: "A", text: "Sentence 17" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "A"
        }
      ]
    },
    /* 16 · ARGUMENT · watch repair */
    {
      id: "g9-ri-c46-fix-it-class",
      family: "G9",
      title: "Bring Back the Fix-It Class",
      kind: "Argument · 9.RI",
      blurb: "A student argues that her high school should offer a repair course, starting with something as small as a watch.",
      level: 2,
      passage:
        "<p>" + N(1) + "Last spring my wristwatch stopped, and my first thought was to throw it away. " +
        N(2) + "Instead, my neighbor, a retired watchmaker named Mr. Sorensen, showed me how to open the case, replace the battery gasket, and clean the contacts. " +
        N(3) + "It took twenty minutes and cost less than a dollar. " +
        N(4) + "That afternoon convinced me that Westfield High should offer an elective in basic repair.</p>" +
        "<p>" + N(5) + "The first reason is practical. " +
        N(6) + "Most of us will spend our lives surrounded by things that break: bikes, lamps, zippers, phones, watches. " +
        N(7) + "Knowing how to diagnose a simple problem saves money and time. " +
        N(8) + "A repair café in our county reported that volunteers fixed about two-thirds of the items people brought in last year, most in under an hour. " +
        N(9) + "Those owners would otherwise have paid for new products.</p>" +
        "<p>" + N(10) + "The second reason is environmental. " +
        N(11) + "Every object that gets fixed is one less object in a landfill, and one less new product that has to be manufactured and shipped. " +
        N(12) + "A single watch may seem trivial, but a school full of students who repair rather than replace could keep thousands of items out of the trash over a lifetime.</p>" +
        "<p>" + N(13) + "Some people argue that repair skills are outdated because modern devices are sealed and impossible to open. " +
        N(14) + "That is partly true. " +
        N(15) + "But a repair class would teach habits, not just techniques: observing carefully, testing one idea at a time, and keeping track of small parts. " +
        N(16) + "Those habits apply in a chemistry lab or a computer class as much as at a workbench.</p>" +
        "<p>" + N(17) + "Finally, repair is satisfying in a way few school subjects are. " +
        N(18) + "When I heard my watch start ticking again, I felt more capable than I had after any test. " +
        N(19) + "I believe every student deserves that feeling at least once. " +
        N(20) + "Mr. Sorensen has already offered to visit as a guest teacher, and the shop room sits empty every afternoon. " +
        N(21) + "Westfield should put the two together.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which sentence states the writer's main claim in \"Bring Back the Fix-It Class\"?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence provides the strongest outside evidence that repair skills save money?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "9.RI.2.B",
          stem: "The writer includes sentences 13 and 14 mainly to —",
          choices: [
            { letter: "A", text: "admit that the repair class is a bad idea" },
            { letter: "B", text: "explain how sealed devices are manufactured" },
            { letter: "C", text: "acknowledge an objection before answering it" },
            { letter: "D", text: "change the topic from watches to phones" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "The fix-it class argument is organized mainly by —",
          choices: [
            { letter: "A", text: "describing the history of repair in time order" },
            { letter: "B", text: "comparing two schools' elective programs" },
            { letter: "C", text: "listing the steps for repairing a wristwatch" },
            { letter: "D", text: "opening with a story, then giving several reasons" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence from the argument is an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 20" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 2" }
          ],
          correct: "C"
        },
        {
          id: "conno",
          sol: "9.RV.1.E",
          stem: "In sentence 12, the writer says a single watch may seem trivial. Compared with small, the word trivial suggests something that seems —",
          choices: [
            { letter: "A", text: "unimportant and not worth attention" },
            { letter: "B", text: "expensive and hard to replace" },
            { letter: "C", text: "fragile and easy to break" },
            { letter: "D", text: "old and out of fashion" }
          ],
          correct: "A"
        },
        {
          id: "root",
          sol: "9.RV.1.B",
          stem: "The word diagnose in sentence 7 comes from Greek parts meaning through and know. Based on these parts and the context, to diagnose a problem is to —",
          choices: [
            { letter: "A", text: "pay someone else to solve it" },
            { letter: "B", text: "figure out its cause by examining it" },
            { letter: "C", text: "ignore it until it goes away" },
            { letter: "D", text: "describe it in a written report" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
