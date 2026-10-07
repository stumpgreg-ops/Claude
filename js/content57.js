/* SOL Labyrinth — Grade 9 long packs (expansion file 57): beekeeping, river cleanups, a family restaurant and
 * mountain hiking. Stories, articles, vocabulary, paired texts, a poem, a scene, a functional text and an
 * argument (390-520 words). Original text only. Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 · Literary · beekeeping */
    {
      id: "g9-rl-c57-slow-hands",
      family: "G9",
      title: "Slow Hands",
      kind: "Literary · 9.RL",
      blurb: "Gogo sprains her wrist, the second hive is crowded, and Thandiwe has always watched bees through a window.",
      level: 2,
      passage:
        "<p>" + N(1) + "Thandiwe had watched her grandmother open the hives every Saturday for three summers, always from the porch steps, always with the screen door within reach. " +
        N(2) + "Gogo moved among the white boxes at the bottom of the yard as if she were visiting neighbors, lifting the lids slowly and humming a tune with no words. " +
        N(3) + "Thandiwe preferred to listen from a safe distance. " +
        N(4) + "Bees, in her opinion, were best appreciated through a window.</p>" +
        "<p>" + N(5) + "Then, on the first Saturday in June, Gogo slipped on the wet garden path and sprained her wrist. " +
        N(6) + "The doctor wrapped it in a stiff blue brace and told her to rest it for two weeks. " +
        N(7) + "\"Two weeks is too long,\" Gogo said on the drive home. " +
        N(8) + "\"The second hive is crowded. " +
        N(9) + "If nobody adds a box, they will swarm, and half of them will fly off to live in somebody's chimney.\" " +
        N(10) + "Thandiwe looked out the car window and said nothing, which Gogo understood perfectly.</p>" +
        "<p>" + N(11) + "The next morning, the borrowed veil smelled like smoke and old cotton. " +
        N(12) + "Gogo sat in a lawn chair near the hives, her braced arm resting in her lap, and talked Thandiwe through each step. " +
        N(13) + "\"Light the smoker first. " +
        N(14) + "Puff it at the entrance, gently, like you are blowing out a birthday candle you want to keep.\" " +
        N(15) + "Thandiwe's hands shook so badly that the hive tool rattled against the lid. " +
        N(16) + "When she pried it up, a sound rose out of the box, a deep, even hum that she felt in her teeth.</p>" +
        "<p>" + N(17) + "\"Listen to that,\" Gogo said. " +
        N(18) + "\"That is a calm hive. " +
        N(19) + "An angry hive sounds like a kettle.\" " +
        N(20) + "Thandiwe listened. " +
        N(21) + "The hum did not change as she lifted out the first frame, heavy with capped honey and crawling with bees that seemed far more interested in their work than in her. " +
        N(22) + "One landed on the back of her glove, walked across her knuckles, and left without a fuss.</p>" +
        "<p>" + N(23) + "\"Slow hands,\" Gogo said. " +
        N(24) + "\"They don't mind you. " +
        N(25) + "They mind hurry.\" " +
        N(26) + "So Thandiwe slowed down. " +
        N(27) + "She set the new box on top, checked that the frames lined up, and lowered the lid as carefully as she would close a door on a sleeping baby. " +
        N(28) + "It took her forty minutes to do what Gogo usually did in ten.</p>" +
        "<p>" + N(29) + "Afterward, they sat on the porch steps together, and Thandiwe noticed that her hands had stopped shaking somewhere around the third frame. " +
        N(30) + "\"Next Saturday,\" Gogo said, \"you can do it without me talking.\" " +
        N(31) + "\"Next Saturday,\" Thandiwe said, \"you can still talk.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Thandiwe and Gogo?",
          choices: [
            { letter: "A", text: "Patient, careful action can help a person work through fear." },
            { letter: "B", text: "Young people should take over the chores of their elders." },
            { letter: "C", text: "Dangerous hobbies are best enjoyed from a safe distance." },
            { letter: "D", text: "An injury can change a family's plans for an entire summer." }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best supports the idea that Thandiwe's fear fades while she works?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 28" },
            { letter: "D", text: "Sentence 29" }
          ],
          correct: "D"
        },
        {
          id: "gogo",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sentence 10 suggests that Gogo —",
          choices: [
            { letter: "A", text: "is annoyed that Thandiwe will not answer her" },
            { letter: "B", text: "understands Thandiwe's reluctance without being told" },
            { letter: "C", text: "has decided to wait until her wrist heals" },
            { letter: "D", text: "expects a neighbor to handle the crowded hive" }
          ],
          correct: "B"
        },
        {
          id: "candle",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 14, Gogo compares using the smoker to blowing out a birthday candle you want to keep mainly to show that the puff should be —",
          choices: [
            { letter: "A", text: "quick and forceful" },
            { letter: "B", text: "aimed high above the hive" },
            { letter: "C", text: "soft and controlled" },
            { letter: "D", text: "repeated several times" }
          ],
          correct: "C"
        },
        {
          id: "wrist",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does Gogo's sprained wrist (sentences 5 and 6) shape the plot of the story?",
          choices: [
            { letter: "A", text: "It forces Thandiwe to open the hive herself for the first time." },
            { letter: "B", text: "It causes the bees in the second hive to swarm and leave." },
            { letter: "C", text: "It convinces Gogo to give up beekeeping for the season." },
            { letter: "D", text: "It leads the family to hire someone to tend the hives." }
          ],
          correct: "A"
        },
        {
          id: "swarm",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Based on the context of sentence 9, what happens when bees swarm?",
          choices: [
            { letter: "A", text: "They sting anyone who comes near the hive." },
            { letter: "B", text: "They stop making honey for the season." },
            { letter: "C", text: "They crowd together to keep warm." },
            { letter: "D", text: "A large group leaves to find a new home." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the final exchange between Gogo and Thandiwe (sentences 30 and 31) is best described as —",
          choices: [
            { letter: "A", text: "tense and uncertain" },
            { letter: "B", text: "warm and playful" },
            { letter: "C", text: "formal and distant" },
            { letter: "D", text: "sad and regretful" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the narrator describes Thandiwe's physical reactions, such as her rattling hive tool and the hum she feels in her teeth, the reader mainly —",
          choices: [
            { letter: "A", text: "learns how Gogo first became a beekeeper" },
            { letter: "B", text: "sees the hive from the bees' point of view" },
            { letter: "C", text: "experiences Thandiwe's nervousness up close" },
            { letter: "D", text: "doubts whether the hive is truly calm" }
          ],
          correct: "C"
        }
      ]
    },

    /* 2 · Literary · a family restaurant */
    {
      id: "g9-rl-c57-green-notebook",
      family: "G9",
      title: "The Green Notebook",
      kind: "Literary · 9.RL",
      blurb: "Minh would rather wash bowls, but tonight the register is his and the card machine just went dark.",
      level: 1,
      passage:
        "<p>" + N(1) + "On Friday nights, Pho Linh was so busy that the front window fogged over by six o'clock and the line for takeout stretched past the barbershop next door. " +
        N(2) + "Minh, who was fifteen, usually stayed in the back, rinsing bowls and listening to the cooks call out orders in a mix of Vietnamese and English. " +
        N(3) + "He liked the back. " +
        N(4) + "Nobody there expected him to smile.</p>" +
        "<p>" + N(5) + "This Friday, however, his cousin Lan, who ran the register, had a fever, and his mother handed Minh the order pad with a look that did not invite argument. " +
        N(6) + "\"You know the menu better than anyone,\" she said. " +
        N(7) + "\"You've been reading it upside down from the dish pit for six years.\"</p>" +
        "<p>" + N(8) + "The first hour went smoothly enough. " +
        N(9) + "Minh wrote quickly, repeated each order back, and carried bowls of steaming broth to the tables without spilling a drop, even when a toddler at table four knocked a spoon onto the floor. " +
        N(10) + "Then, at a quarter past seven, the card machine beeped twice and went dark. " +
        N(11) + "A line of customers stood at the counter, wallets out, and every one of them seemed to be staring directly at him.</p>" +
        "<p>" + N(12) + "Minh felt his face heat up like the burners behind him. " +
        N(13) + "He wanted to run back to the sink. " +
        N(14) + "Instead, he remembered the green notebook his grandmother kept under the register, the one she had used before the restaurant ever had a card machine, its pages soft and its cover spotted with old stains. " +
        N(15) + "He pulled it out, flipped to a clean page, and cleared his throat.</p>" +
        "<p>" + N(16) + "\"The machine is down,\" he announced. " +
        N(17) + "\"If you can pay cash, wonderful. " +
        N(18) + "If not, write your name and phone number here, and we'll call you tomorrow to settle up.\" " +
        N(19) + "A woman in a soccer coach's jacket laughed. " +
        N(20) + "\"You trust us?\" she asked. " +
        N(21) + "\"You come here every Thursday and order extra basil,\" Minh said. " +
        N(22) + "\"I trust you.\"</p>" +
        "<p>" + N(23) + "By closing time, the notebook held eleven names, written in eleven different styles of handwriting. " +
        N(24) + "His mother, still wearing her apron, read through the list slowly, her finger moving down the page. " +
        N(25) + "Minh waited for her to say he had made a mistake. " +
        N(26) + "Instead, she tapped the last name and smiled. " +
        N(27) + "\"Your grandmother did exactly this in 1998,\" she said, \"when the power went out during the ice storm. " +
        N(28) + "Every single person paid.\" " +
        N(29) + "She handed the notebook back to him. " +
        N(30) + "\"Keep it at the register,\" she said. " +
        N(31) + "\"It seems to belong to you now.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the story about Minh and the notebook best develop?",
          choices: [
            { letter: "A", text: "Modern tools are less reliable than old-fashioned ones." },
            { letter: "B", text: "Family businesses should never extend credit to strangers." },
            { letter: "C", text: "Paying attention to people can prepare someone for a sudden challenge." },
            { letter: "D", text: "Shy people are happiest when they stay out of the spotlight." }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows that Minh's knowledge of the regular customers helps him handle the problem?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 21" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: "C"
        },
        {
          id: "minh",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Minh at the beginning of the story?",
          choices: [
            { letter: "A", text: "He prefers quiet work where no one watches him." },
            { letter: "B", text: "He resents his family for making him work weekends." },
            { letter: "C", text: "He hopes to replace his cousin at the register." },
            { letter: "D", text: "He is unfamiliar with the dishes the restaurant serves." }
          ],
          correct: "A"
        },
        {
          id: "burners",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 12, the comparison of Minh's face to the burners mainly shows that he —",
          choices: [
            { letter: "A", text: "has been working too close to the stove" },
            { letter: "B", text: "is flushed with embarrassment and stress" },
            { letter: "C", text: "is angry at the customers in line" },
            { letter: "D", text: "has caught his cousin's fever" }
          ],
          correct: "B"
        },
        {
          id: "staring",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "The detail in sentence 11 that every customer seemed to be staring directly at Minh mainly suggests that he —",
          choices: [
            { letter: "A", text: "knows each customer by name" },
            { letter: "B", text: "has made an error on an order" },
            { letter: "C", text: "is proud to be noticed at last" },
            { letter: "D", text: "feels exposed and under pressure" }
          ],
          correct: "D"
        },
        {
          id: "machine",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the broken card machine in sentence 10 affect the plot?",
          choices: [
            { letter: "A", text: "It lets Minh return to washing dishes in the back." },
            { letter: "B", text: "It creates the crisis that leads Minh to use the notebook." },
            { letter: "C", text: "It causes several customers to leave without eating." },
            { letter: "D", text: "It reminds his mother of a mistake made years earlier." }
          ],
          correct: "B"
        },
        {
          id: "upside",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 7, Minh's mother says he has been reading the menu upside down from the dish pit. She means that Minh —",
          choices: [
            { letter: "A", text: "has trouble reading the small print on the menu" },
            { letter: "B", text: "should have asked to work the register sooner" },
            { letter: "C", text: "has never actually looked at the menu closely" },
            { letter: "D", text: "has learned the menu by watching from the back" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the mother's words in sentences 30 and 31 is best described as —",
          choices: [
            { letter: "A", text: "approving and warm" },
            { letter: "B", text: "doubtful and stern" },
            { letter: "C", text: "hurried and distracted" },
            { letter: "D", text: "teasing and sarcastic" }
          ],
          correct: "A"
        }
      ]
    },

    /* 3 · Literary · mountain hiking */
    {
      id: "g9-rl-c57-cloud-line",
      family: "G9",
      title: "The Cloud Line",
      kind: "Literary · 9.RL",
      blurb: "Diya carries their grandfather's summit photo; her brother carries the water. Then the fog comes in.",
      level: 3,
      passage:
        "<p>" + N(1) + "The sign at the trailhead said CORRIGAN KNOB 4.2 MI, and my sister Diya read it aloud as if it were a promise someone had made to her personally. " +
        N(2) + "She had a photograph in her jacket pocket, folded soft at the corners: our grandfather at nineteen, standing on the bare summit rock with his arms spread wide and the whole valley tilted out behind him. " +
        N(3) + "She was nineteen now. " +
        N(4) + "I was fourteen, and I was mostly there because she needed someone to carry the second water bottle.</p>" +
        "<p>" + N(5) + "For the first two miles, the morning was so clear that every leaf seemed outlined in ink. " +
        N(6) + "We passed a family with a dog in a red bandanna, then an older man who tipped his hat to us, then nobody at all. " +
        N(7) + "Diya walked fast and talked about how the view would look, which rocks Dada had probably sat on, whether the old fire tower foundation would still be there. " +
        N(8) + "I mostly listened to my own breathing.</p>" +
        "<p>" + N(9) + "At the third mile, the air changed. " +
        N(10) + "It cooled all at once, the way a room does when someone opens a refrigerator, and the trees ahead of us began to soften at the edges. " +
        N(11) + "Within ten minutes the cloud had swallowed the trail completely. " +
        N(12) + "We could see perhaps twenty feet in any direction, and beyond that the world simply stopped, as if someone had erased it. " +
        N(13) + "The painted blazes on the tree trunks appeared one at a time out of the white, each one a small, pale surprise.</p>" +
        "<p>" + N(14) + "Diya kept going. " +
        N(15) + "I followed, but I started counting blazes, and somewhere around the fourteenth I realized I had not seen the next one for a long time. " +
        N(16) + "\"Diya,\" I said. " +
        N(17) + "She turned around, and I watched her look past me at the trail we had come up, and then at the fog where the trail should have continued, and I saw her understand. " +
        N(18) + "We had drifted onto a deer path.</p>" +
        "<p>" + N(19) + "It took us twenty minutes to find the last blaze again, twenty minutes of walking back slowly along our own footprints in the damp leaves. " +
        N(20) + "When we reached it, Diya leaned against the tree and pulled the photograph out of her pocket. " +
        N(21) + "She looked at it for a while. " +
        N(22) + "\"He went up on a clear day,\" she said finally. " +
        N(23) + "\"He would have told us to turn around.\" " +
        N(24) + "I didn't say anything, because she was right and because I knew how much it cost her to say it.</p>" +
        "<p>" + N(25) + "We ate our sandwiches on a wet log just below the cloud line, where the valley was beginning to show itself again in pieces. " +
        N(26) + "A hawk circled below us, which seemed backwards and wonderful. " +
        N(27) + "Diya took a picture of me holding the second water bottle over my head like a trophy. " +
        N(28) + "\"Next month,\" she said. " +
        N(29) + "\"Next month,\" I agreed, and this time it sounded like a promise we had made to each other.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best supported by the story of Diya's hike to Corrigan Knob?",
          choices: [
            { letter: "A", text: "Family traditions lose their meaning when they are changed." },
            { letter: "B", text: "Giving up a goal for safety can be a wise and respectful choice." },
            { letter: "C", text: "Older siblings should always make decisions for younger ones." },
            { letter: "D", text: "A difficult hike is only worthwhile if it reaches the top." }
          ],
          correct: "B"
        },
        {
          id: "cost",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows that deciding to turn back is hard for Diya?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 24" },
            { letter: "D", text: "Sentence 27" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which statement best describes how Diya changes over the course of the story?",
          choices: [
            { letter: "A", text: "She moves from eager determination to a thoughtful acceptance." },
            { letter: "B", text: "She moves from fear of the mountain to reckless confidence." },
            { letter: "C", text: "She moves from caring about her brother to ignoring him." },
            { letter: "D", text: "She moves from respecting her grandfather to doubting him." }
          ],
          correct: "A"
        },
        {
          id: "fridge",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 10, the narrator compares the cooling air to a room when someone opens a refrigerator mainly to show that the change is —",
          choices: [
            { letter: "A", text: "pleasant after the long climb" },
            { letter: "B", text: "caused by something nearby" },
            { letter: "C", text: "too small to notice" },
            { letter: "D", text: "sudden and noticeable" }
          ],
          correct: "D"
        },
        {
          id: "erased",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 12, the description of a world that simply stopped, as if someone had erased it, mainly creates a mood that is —",
          choices: [
            { letter: "A", text: "cheerful and lively" },
            { letter: "B", text: "eerie and disorienting" },
            { letter: "C", text: "calm and familiar" },
            { letter: "D", text: "angry and tense" }
          ],
          correct: "B"
        },
        {
          id: "fog",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the setting described in sentences 9 through 13 shape the plot?",
          choices: [
            { letter: "A", text: "The cold air makes the hikers stop to eat lunch early." },
            { letter: "B", text: "The clear view convinces Diya the summit is close." },
            { letter: "C", text: "The fog hides the trail and leads to the decision to turn back." },
            { letter: "D", text: "The quiet woods remind Diya of her grandfather's stories." }
          ],
          correct: "C"
        },
        {
          id: "narrator",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the story is told by Diya's fourteen-year-old brother, the reader —",
          choices: [
            { letter: "A", text: "hears the grandfather's own account of his climb" },
            { letter: "B", text: "learns exactly what Diya is thinking at every moment" },
            { letter: "C", text: "sees events from the hawk's view above the valley" },
            { letter: "D", text: "understands Diya's feelings through what he observes" }
          ],
          correct: "D"
        },
        {
          id: "soft",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 2, the photograph is folded soft at the corners. Compared with damaged, the word soft suggests the photo has been —",
          choices: [
            { letter: "A", text: "handled often and with care" },
            { letter: "B", text: "left out in the rain" },
            { letter: "C", text: "torn by accident" },
            { letter: "D", text: "printed on cheap paper" }
          ],
          correct: "A"
        }
      ]
    },

    /* 4 · Informational · beekeeping */
    {
      id: "g9-ri-c57-winter-cluster",
      family: "G9",
      title: "The Winter Cluster",
      kind: "Informational · 9.RI",
      blurb: "A silent hive in January is not an empty one: how honeybees shiver their way to spring.",
      level: 2,
      passage:
        "<p>" + N(1) + "On a cold January morning, a beehive can look completely abandoned. " +
        N(2) + "No bees dart in and out of the entrance, no humming drifts from the boxes, and frost may glitter across the lid. " +
        N(3) + "Yet inside, tens of thousands of honeybees are very much alive, gathered in a tight ball and working together to survive until spring.</p>" +
        "<p>" + N(4) + "Unlike many insects, honeybees do not hibernate. " +
        N(5) + "Instead, when the temperature inside the hive drops below about 57 degrees Fahrenheit, the bees form what beekeepers call a winter cluster. " +
        N(6) + "The queen sits near the center, surrounded by workers packed shoulder to shoulder. " +
        N(7) + "The bees on the outer layer face inward, their heads tucked toward the middle and their bodies forming an insulating shell. " +
        N(8) + "Beneath that shell, the bees in the core produce heat by shivering, rapidly flexing their flight muscles without moving their wings. " +
        N(9) + "Through this shivering, the center of the cluster can stay near 90 degrees even when the air outside the hive is well below freezing.</p>" +
        "<p>" + N(10) + "The arrangement is not fixed. " +
        N(11) + "Bees on the chilly outer layer slowly work their way toward the warm center, while bees from the center move outward to take their turn. " +
        N(12) + "Researchers who have placed tiny temperature sensors inside hives have recorded this rotation, which spreads the burden of the cold across the whole colony. " +
        N(13) + "No single bee has to endure the outside edge for long.</p>" +
        "<p>" + N(14) + "All of this shivering requires fuel. " +
        N(15) + "Each cluster eats its way slowly through the honey stored in the comb, moving upward as it goes, since warm air rises and the bees follow it. " +
        N(16) + "A healthy colony in a cold climate may consume sixty pounds of honey or more between November and March. " +
        N(17) + "For this reason, experienced beekeepers leave plenty of honey in the hive each fall rather than harvesting all of it. " +
        N(18) + "A colony that runs out of food in February can starve only a few inches away from honey it was too cold to reach.</p>" +
        "<p>" + N(19) + "Beekeepers do what they can to help. " +
        N(20) + "Some wrap their hives in dark insulated covers that absorb sunlight. " +
        N(21) + "Others tilt the boxes slightly forward so melting snow drains away from the entrance instead of pooling inside. " +
        N(22) + "Most important, they resist the urge to open the hive on cold days, because breaking the cluster apart can chill the bees faster than they can rewarm themselves. " +
        N(23) + "Some keepers simply press an ear against the side of the box; a soft, steady hum means the colony is still there.</p>" +
        "<p>" + N(24) + "Scientists are still learning how the cluster decides when to tighten and when to loosen, since no single bee is in charge of the temperature. " +
        N(25) + "Some researchers suspect that each bee follows a few simple rules based on what it feels around it. " +
        N(26) + "If they are right, the winter cluster is a striking example of how a group can solve a problem that no individual member fully understands.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the article about the winter cluster?",
          choices: [
            { letter: "A", text: "Beekeepers must open their hives often in winter to check on the bees." },
            { letter: "B", text: "Honeybees hibernate through the winter much as many other insects do." },
            { letter: "C", text: "Scientists have fully explained how a colony controls its temperature." },
            { letter: "D", text: "Honeybees survive winter by cooperating in a heated cluster fueled by honey." }
          ],
          correct: "D"
        },
        {
          id: "shiver",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the article, how do the bees in the core of the cluster produce heat?",
          choices: [
            { letter: "A", text: "By flexing their flight muscles without moving their wings" },
            { letter: "B", text: "By eating honey that has been warmed by the sun" },
            { letter: "C", text: "By fanning their wings to move warm air upward" },
            { letter: "D", text: "By pressing their bodies against the hive walls" }
          ],
          correct: "A"
        },
        {
          id: "speculation",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the article presents a possibility that has not yet been confirmed?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the article about the winter cluster mainly organized?",
          choices: [
            { letter: "A", text: "It compares honeybees with several other insects, one species at a time." },
            { letter: "B", text: "It opens with a puzzling scene, explains it, then turns to needs and open questions." },
            { letter: "C", text: "It tells the story of one beekeeper's hive from spring through fall." },
            { letter: "D", text: "It lists arguments for and against harvesting honey in the autumn." }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The author begins with sentences 1 and 2 mainly to —",
          choices: [
            { letter: "A", text: "warn readers that many hives do not survive the winter" },
            { letter: "B", text: "describe the equipment beekeepers use in cold weather" },
            { letter: "C", text: "set up a contrast with the busy life hidden inside the hive" },
            { letter: "D", text: "show that bees leave the hive to find food in January" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence provides research evidence for the claim in sentence 10 that the cluster's arrangement is not fixed?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "C"
        },
        {
          id: "endure",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 13, the word endure most nearly means to —",
          choices: [
            { letter: "A", text: "put up with something hard" },
            { letter: "B", text: "escape from a danger" },
            { letter: "C", text: "warm up after a chill" },
            { letter: "D", text: "guard a place from others" }
          ],
          correct: "A"
        },
        {
          id: "insulating",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Based on its use in sentence 7, an insulating shell is one that —",
          choices: [
            { letter: "A", text: "lets cold air flow freely to the center" },
            { letter: "B", text: "keeps heat from escaping to the outside" },
            { letter: "C", text: "protects the hive from hungry animals" },
            { letter: "D", text: "stores honey for the coldest months" }
          ],
          correct: "B"
        }
      ]
    },

    /* 5 · Informational · river cleanups */
    {
      id: "g9-ri-c57-sable-river",
      family: "G9",
      title: "The River That Changed Color",
      kind: "Informational · 9.RI",
      blurb: "Dye mills, four hundred tires and a census of insects under the rocks: how one town measured a river's comeback.",
      level: 3,
      passage:
        "<p>" + N(1) + "For most of the twentieth century, residents of Tollerton joked that the Sable River was the only river in the state that changed color by the week. " +
        N(2) + "Upstream mills dumped dye directly into the water, and on a given Tuesday the current might run rust red, then a muddy violet by Friday. " +
        N(3) + "Children were told not to wade in it. " +
        N(4) + "Fishermen drove two counties over.</p>" +
        "<p>" + N(5) + "The turnaround did not come from a single dramatic decision. " +
        N(6) + "It came slowly, through stricter discharge permits in the 1970s, the closing of the last dye mill in 1991, and, perhaps most visibly, from people who simply showed up with trash bags. " +
        N(7) + "The first organized cleanup, in April 1994, drew nineteen volunteers who hauled out shopping carts, a rusted bicycle, and more than four hundred tires. " +
        N(8) + "By 2019, the annual event attracted more than six hundred people, and the bigger problem had become finding enough trash to fill their bags.</p>" +
        "<p>" + N(9) + "How do scientists know the river is actually healthier, rather than just tidier? " +
        N(10) + "One answer lies under the rocks. " +
        N(11) + "Every autumn, a team from the county water lab and local high school students lift stones from set locations along the riverbed and count the insect larvae clinging underneath. " +
        N(12) + "Some of these creatures, such as mayfly and stonefly larvae, cannot survive in polluted water; others, like certain worms, tolerate almost anything. " +
        N(13) + "The balance between these groups works like a report card. " +
        N(14) + "In 1995, the teams found almost no mayfly larvae at any site. " +
        N(15) + "In the most recent survey, they found them at eleven of fourteen sites.</p>" +
        "<p>" + N(16) + "Not everyone agrees the work is finished. " +
        N(17) + "A 2022 lab report noted that fertilizer runoff from upstream farms still feeds algae blooms in late summer, which can lower oxygen levels and stress fish. " +
        N(18) + "Some longtime volunteers argue that pulling trash from the banks, while satisfying, now matters less than planting trees along the river to slow runoff. " +
        N(19) + "Others believe the yearly cleanup remains valuable because it keeps the community connected to the river, even when the bags come back half empty.</p>" +
        "<p>" + N(20) + "What seems clear is that the Sable no longer changes color by the week. " +
        N(21) + "Last June, a ten-year-old caught a smallmouth bass near the Main Street bridge, photographed it, and let it go. " +
        N(22) + "The photograph now hangs in the county water lab, beside a framed 1962 newspaper headline that reads \"SABLE RUNS PURPLE AGAIN.\" " +
        N(23) + "Side by side, the two images tell the river's story more quickly than any chart could.</p>",
      claims: [
        {
          id: "summary",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best summarizes the article about the Sable River?",
          choices: [
            { letter: "A", text: "A single cleanup in 1994 removed most of the river's pollution." },
            { letter: "B", text: "The river recovered gradually through rules and community work, though problems remain." },
            { letter: "C", text: "Volunteers now disagree so strongly that the yearly cleanup may end." },
            { letter: "D", text: "The river is fully healthy because no trash remains along its banks." }
          ],
          correct: "B"
        },
        {
          id: "mayfly",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the article, why do the survey teams pay special attention to mayfly and stonefly larvae?",
          choices: [
            { letter: "A", text: "They are the most common insects in the river." },
            { letter: "B", text: "They feed the smallmouth bass that anglers catch." },
            { letter: "C", text: "They cannot survive in polluted water." },
            { letter: "D", text: "They help break down trash on the riverbed." }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the article reports a view held by some people rather than a measured result?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the author organize paragraphs 1 through 3 of the Sable River article?",
          choices: [
            { letter: "A", text: "A past problem, the slow changes that addressed it, then a way to measure results" },
            { letter: "B", text: "A list of mills, the products they made, then the jobs they provided" },
            { letter: "C", text: "A volunteer's memories, a scientist's response, then a final argument" },
            { letter: "D", text: "A description of the river's source, its route, then its mouth" }
          ],
          correct: "A"
        },
        {
          id: "question",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes the question in sentence 9 mainly to —",
          choices: [
            { letter: "A", text: "suggest that scientists doubt the river has improved" },
            { letter: "B", text: "introduce the disagreement described in paragraph 4" },
            { letter: "C", text: "criticize volunteers for focusing only on trash" },
            { letter: "D", text: "shift from cleanup efforts to how river health is measured" }
          ],
          correct: "D"
        },
        {
          id: "strongest",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence gives the strongest evidence that the river's water quality, not just its appearance, has improved?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "B"
        },
        {
          id: "satisfying",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 18, pulling trash is called satisfying. Compared with useful, the word satisfying suggests that the work —",
          choices: [
            { letter: "A", text: "is required by the county" },
            { letter: "B", text: "costs very little money" },
            { letter: "C", text: "brings volunteers a sense of reward" },
            { letter: "D", text: "takes a great deal of time" }
          ],
          correct: "C"
        },
        {
          id: "reportcard",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 13, the author says the balance between insect groups works like a report card. This comparison suggests that the balance —",
          choices: [
            { letter: "A", text: "gives a measurable grade of the river's health" },
            { letter: "B", text: "is checked by teachers at the high school" },
            { letter: "C", text: "changes too often to be trusted" },
            { letter: "D", text: "rewards volunteers who collect the most trash" }
          ],
          correct: "A"
        }
      ]
    },

    /* 6 · Vocabulary · mountain hiking (trail crew) */
    {
      id: "g9-rv-c57-water-bars",
      family: "G9",
      title: "Water Bars",
      kind: "Vocabulary · 9.RV",
      blurb: "A weekend trail crew, a crew leader of very few words, and nine log barriers tested by the rain.",
      level: 1,
      passage:
        "<p>" + N(1) + "Marisol had signed up for the weekend trail crew expecting a pleasant walk in the woods, but by ten o'clock on Saturday morning she understood that the work ahead was <strong>arduous</strong>. " +
        N(2) + "The crew's job was to build water bars, the low barriers of stone and timber that turn rainwater off a trail before it can carve the path into a ditch. " +
        N(3) + "Each bar meant digging a trench across the trail, prying a heavy log into place, and packing dirt around it until it would not budge.</p>" +
        "<p>" + N(4) + "The crew leader, a wiry man named Desmond Okafor, spoke in a <strong>brusque</strong> way that made Marisol nervous at first. " +
        N(5) + "\"Deeper,\" he said, glancing at her trench. " +
        N(6) + "\"Again,\" he said when her log rocked. " +
        N(7) + "He did not say please, and he did not explain. " +
        N(8) + "By lunch she had decided he did not like her.</p>" +
        "<p>" + N(9) + "The afternoon brought a short <strong>reprieve</strong> when a passing shower sent everyone under a rock ledge. " +
        N(10) + "Marisol sat beside Desmond and watched the rain sheet down the trail they had been working on all day. " +
        N(11) + "At the first water bar, the stream of water hit the log, turned neatly, and spilled off the edge into the ferns. " +
        N(12) + "At the second bar, the one she had dug, it did exactly the same thing. " +
        N(13) + "\"There,\" Desmond said quietly. " +
        N(14) + "\"That's how you <strong>gauge</strong> a water bar. " +
        N(15) + "Not by how it looks. " +
        N(16) + "By what the rain does to it.\"</p>" +
        "<p>" + N(17) + "Watching him, she realized his short words were not unkindness but habit. " +
        N(18) + "He had spent twenty summers on trails where crews worked far from help, and he saved his breath the way other people saved money. " +
        N(19) + "Praise from him was <strong>sparse</strong>, which made it worth more. " +
        N(20) + "When the rain stopped, he handed her the heaviest pry bar without a word, and she understood it as a compliment.</p>" +
        "<p>" + N(21) + "By Sunday evening, the crew had built nine water bars, and Marisol's shoulders ached in places she had not known had muscles. " +
        N(22) + "Desmond walked the trail one last time, kneeling at each bar to check it, as <strong>diligent</strong> about the ninth as he had been about the first. " +
        N(23) + "At the trailhead, he wrote her name on the sign-up sheet for the following month before she could even ask. " +
        N(24) + "\"You dig like you mean it,\" he said. " +
        N(25) + "It was the longest sentence he had spoken to her all weekend, and she decided it was the best one.</p>",
      claims: [
        {
          id: "arduous",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 1, the word arduous most nearly means —",
          choices: [
            { letter: "A", text: "relaxing" },
            { letter: "B", text: "confusing" },
            { letter: "C", text: "dangerous" },
            { letter: "D", text: "exhausting" }
          ],
          correct: "D"
        },
        {
          id: "brusque",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from the passage best help the reader understand the meaning of brusque in sentence 4?",
          choices: [
            { letter: "A", text: "a wiry man named Desmond Okafor" },
            { letter: "B", text: "He did not say please, and he did not explain." },
            { letter: "C", text: "watched the rain sheet down the trail" },
            { letter: "D", text: "kneeling at each bar to check it" }
          ],
          correct: "B"
        },
        {
          id: "reprieve",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As used in sentence 9, the word reprieve most nearly means —",
          choices: [
            { letter: "A", text: "a brief break from hard work" },
            { letter: "B", text: "a warning about the weather" },
            { letter: "C", text: "a reward for finishing early" },
            { letter: "D", text: "a change in the crew's plans" }
          ],
          correct: "A"
        },
        {
          id: "gauge",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 14, Desmond uses the word gauge to mean —",
          choices: [
            { letter: "A", text: "build" },
            { letter: "B", text: "repair" },
            { letter: "C", text: "judge" },
            { letter: "D", text: "decorate" }
          ],
          correct: "C"
        },
        {
          id: "diligent",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written careful instead of diligent in sentence 22. Compared with careful, the word diligent adds a sense of —",
          choices: [
            { letter: "A", text: "nervous, fearful worry" },
            { letter: "B", text: "steady, ongoing effort" },
            { letter: "C", text: "quiet, lonely sadness" },
            { letter: "D", text: "impatient, careless speed" }
          ],
          correct: "B"
        },
        {
          id: "sparse",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 19, the word sparse suggests that Desmond's praise was —",
          choices: [
            { letter: "A", text: "rare, which made it valuable" },
            { letter: "B", text: "loud, which embarrassed people" },
            { letter: "C", text: "false, which made it useless" },
            { letter: "D", text: "constant, which made it boring" }
          ],
          correct: "A"
        },
        {
          id: "breath",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 18, the statement that Desmond saved his breath the way other people saved money suggests that he —",
          choices: [
            { letter: "A", text: "is worried about the cost of the trail project" },
            { letter: "B", text: "has trouble breathing at high elevations" },
            { letter: "C", text: "learned to use words sparingly from years of hard work" },
            { letter: "D", text: "expects to be paid for teaching the crew" }
          ],
          correct: "C"
        },
        {
          id: "marisol",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which statement best describes how Marisol's view of Desmond changes?",
          choices: [
            { letter: "A", text: "She first admires him and later finds him unfair." },
            { letter: "B", text: "She first trusts him and later questions his skill." },
            { letter: "C", text: "She first ignores him and later competes with him." },
            { letter: "D", text: "She first thinks he dislikes her and later sees his respect." }
          ],
          correct: "D"
        }
      ]
    },

    /* 7 · Vocabulary · a family restaurant (informational) */
    {
      id: "g9-rv-c57-quiet-hour",
      family: "G9",
      title: "The Quiet Hour",
      kind: "Vocabulary · 9.RV",
      blurb: "Before the Saturday rush at Casa Ibarra, the kitchen is almost silent, and that silence does the real work.",
      level: 2,
      passage:
        "<p>" + N(1) + "At four-thirty on a Saturday afternoon, the kitchen at Casa Ibarra is almost silent. " +
        N(2) + "Two cooks stand at a steel counter, slicing onions into identical half-moons and sliding them into labeled containers. " +
        N(3) + "A third counts tortillas into stacks of twenty. " +
        N(4) + "Ninety minutes later, the same kitchen will be <strong>frenetic</strong>, with tickets printing every few seconds, pans hissing, and servers calling for plates. " +
        N(5) + "What happens in the quiet hour decides whether the loud one goes well.</p>" +
        "<p>" + N(6) + "Professional cooks call this preparation <em>mise en place</em>, a French phrase meaning \"everything in its place.\" " +
        N(7) + "The idea is simple: before service begins, every ingredient a cook will need is washed, cut, measured, and set within arm's reach. " +
        N(8) + "A line cook who must stop to chop cilantro in the middle of a rush loses a minute, and in a busy kitchen a lost minute spreads like a crack in a windshield, delaying the next plate and the one after that.</p>" +
        "<p>" + N(9) + "Marta Ibarra, who opened the restaurant with her parents nineteen years ago, says the family's first system was <strong>rudimentary</strong>. " +
        N(10) + "\"We had one list taped to the refrigerator and a lot of shouting,\" she says. " +
        N(11) + "Over time, they learned to <strong>anticipate</strong> each night's needs by studying their own order history. " +
        N(12) + "Saturdays, for instance, bring twice as many orders of carnitas as Tuesdays, so the Saturday prep list doubles the pork. " +
        N(13) + "Rainy evenings mean more soup.</p>" +
        "<p>" + N(14) + "The system also depends on knowing when to <strong>replenish</strong> a station. " +
        N(15) + "At Casa Ibarra, a cook who empties a container of diced tomatoes calls \"tomatoes down,\" and whoever is free brings a fresh one from the walk-in cooler before it is needed again. " +
        N(16) + "The call is short on purpose. " +
        N(17) + "In a loud kitchen, a long explanation is a luxury nobody can afford.</p>" +
        "<p>" + N(18) + "Perhaps the greatest benefit is less obvious. " +
        N(19) + "When every station is organized the same way, any cook can step into any role, and the staff becomes a <strong>cohesive</strong> team rather than a set of individuals guarding their own corners. " +
        N(20) + "Marta's teenage nephew, who started washing dishes last summer, now covers the salad station on busy nights. " +
        N(21) + "\"He didn't have to learn my way of doing it,\" she says. " +
        N(22) + "\"He just had to learn the kitchen's way.\"</p>" +
        "<p>" + N(23) + "By six o'clock, the first tickets begin to print. " +
        N(24) + "The cooks move quickly but without hurry, reaching for containers without looking, because each one is exactly where it was an hour ago. " +
        N(25) + "The quiet hour has done its work.</p>",
      claims: [
        {
          id: "frenetic",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As used in sentence 4, the word frenetic most nearly means —",
          choices: [
            { letter: "A", text: "empty and dim" },
            { letter: "B", text: "clean and orderly" },
            { letter: "C", text: "wildly busy" },
            { letter: "D", text: "warm and cozy" }
          ],
          correct: "C"
        },
        {
          id: "rudimentary",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Based on sentences 9 and 10, a rudimentary system is one that is —",
          choices: [
            { letter: "A", text: "basic and undeveloped" },
            { letter: "B", text: "expensive and modern" },
            { letter: "C", text: "secret and private" },
            { letter: "D", text: "strict and unfair" }
          ],
          correct: "A"
        },
        {
          id: "anticipate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which detail from the passage best helps the reader understand the meaning of anticipate in sentence 11?",
          choices: [
            { letter: "A", text: "the cooks slice onions into identical half-moons" },
            { letter: "B", text: "Saturday's prep list doubles the pork because of past orders" },
            { letter: "C", text: "a cook calls tomatoes down when a container is empty" },
            { letter: "D", text: "the nephew started out washing dishes last summer" }
          ],
          correct: "B"
        },
        {
          id: "replenish",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word replenish in sentence 14 begins with the prefix re-. Based on the prefix and the context, replenish means to —",
          choices: [
            { letter: "A", text: "fill again" },
            { letter: "B", text: "clean out" },
            { letter: "C", text: "close down" },
            { letter: "D", text: "move away" }
          ],
          correct: "A"
        },
        {
          id: "cohesive",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 19, the author calls the staff cohesive. Compared with friendly, the word cohesive emphasizes that the staff —",
          choices: [
            { letter: "A", text: "enjoys spending free time together" },
            { letter: "B", text: "prefers to work at separate stations" },
            { letter: "C", text: "is larger than most restaurant teams" },
            { letter: "D", text: "works together as one unified group" }
          ],
          correct: "D"
        },
        {
          id: "windshield",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 8, the comparison of a lost minute to a crack in a windshield suggests that a small delay —",
          choices: [
            { letter: "A", text: "is easy to see but harmless" },
            { letter: "B", text: "can be fixed quickly by a manager" },
            { letter: "C", text: "spreads and causes more delays" },
            { letter: "D", text: "only matters on rainy evenings" }
          ],
          correct: "C"
        },
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the central idea of the passage about Casa Ibarra's kitchen?",
          choices: [
            { letter: "A", text: "Family restaurants are busier on Saturdays than on weekdays." },
            { letter: "B", text: "French cooking terms are used in kitchens around the world." },
            { letter: "C", text: "Young workers should start by washing dishes before cooking." },
            { letter: "D", text: "Careful preparation before service lets a busy kitchen run well." }
          ],
          correct: "D"
        },
        {
          id: "frame",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author begins and ends the passage with the quiet hour before service mainly to —",
          choices: [
            { letter: "A", text: "show how long the cooks must wait before customers arrive" },
            { letter: "B", text: "emphasize that the preparation shapes how the rush goes" },
            { letter: "C", text: "suggest that the restaurant has too few customers" },
            { letter: "D", text: "compare Casa Ibarra with other restaurants in town" }
          ],
          correct: "B"
        }
      ]
    },

    /* 8 · Paired texts · river cleanups */
    {
      id: "g9-dsr-c57-harlan-creek",
      family: "G9",
      title: "Harlan Creek Cleanup",
      kind: "Paired texts · 9.DSR",
      blurb: "A ninth grader's account of a muddy morning and the parks department's numbers from the same day.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Notes from the Muddy Bank</strong> (a student's blog post)</p>" +
        "<p>" + N(1) + "I expected the Harlan Creek cleanup to be boring. " +
        N(2) + "My mom signed us both up, and I pictured three long hours of picking up candy wrappers. " +
        N(3) + "Instead, my group spent most of the morning trying to free a shopping cart that had been buried in the mud so long that a small tree was growing through it. " +
        N(4) + "It took six of us, two ropes, and a lot of terrible jokes. " +
        N(5) + "When it finally came loose, everyone cheered like we had won a championship. " +
        N(6) + "After that, I started noticing everything. " +
        N(7) + "A bottle cap, a fishing lure, a single flip-flop wedged between rocks. " +
        N(8) + "Each one felt like a clue about someone who had stood exactly where I was standing. " +
        N(9) + "By noon my gloves were soaked and my sneakers were ruined, but I didn't want to stop. " +
        N(10) + "The best moment came near the end, when a kid from another group shouted and pointed at the water. " +
        N(11) + "A great blue heron was standing in the shallows maybe thirty feet away, completely still, watching us work. " +
        N(12) + "Nobody moved. " +
        N(13) + "Then it lifted off, slow and huge, and flew downstream until the trees hid it. " +
        N(14) + "I don't know if the heron cared that the creek was cleaner. " +
        N(15) + "But I did, and I think that matters too. " +
        N(16) + "I've already signed up for next year, and this time I'm bringing my own rope.</p>" +
        "<p><strong>Text 2 — Harlan Creek Cleanup: Results Summary</strong> (Department of Parks and Recreation)</p>" +
        "<p>" + N(17) + "The fourteenth annual Harlan Creek Cleanup took place on Saturday, April 12, from 8:00 a.m. to 12:00 p.m. " +
        N(18) + "A total of 212 volunteers, including 74 students from three local high schools, covered 2.3 miles of creek bank. " +
        N(19) + "Crews removed approximately 1,850 pounds of debris, an increase of about 15 percent over last year. " +
        N(20) + "Notable items included 31 tires, 4 shopping carts, and a large quantity of plastic bottles and food packaging. " +
        N(21) + "The department estimates that roughly 60 percent of collected debris by weight originated from storm drains, which carry litter from city streets into the creek after heavy rain. " +
        N(22) + "This finding suggests that future efforts should focus not only on the creek itself but also on reducing litter upstream. " +
        N(23) + "In response, the department will install mesh filters on six storm drain outlets this summer as a pilot program. " +
        N(24) + "Results will be reviewed in the fall, and the filters may be added citywide if they prove effective. " +
        N(25) + "Volunteers reported no serious injuries. " +
        N(26) + "Several minor cuts were treated at the first-aid station, a reminder that gloves and closed-toe shoes are required for all participants. " +
        N(27) + "The department thanks every volunteer and the local businesses that donated water, gloves, and trash bags. " +
        N(28) + "Registration for next year's event will open in February on the department's website.</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea do both texts about the Harlan Creek cleanup support?",
          choices: [
            { letter: "A", text: "The cleanup removed large, heavy objects as well as small litter." },
            { letter: "B", text: "Most of the trash in the creek came from storm drains." },
            { letter: "C", text: "Wildlife has returned to the creek because of the cleanup." },
            { letter: "D", text: "Volunteers were injured because they lacked proper gear." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The two texts about Harlan Creek differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "gives exact totals, while Text 2 relies on guesses" },
            { letter: "B", text: "argues against the cleanup, while Text 2 supports it" },
            { letter: "C", text: "shares a personal experience, while Text 2 reports measurable results" },
            { letter: "D", text: "describes last year's event, while Text 2 describes this year's" }
          ],
          correct: "C"
        },
        {
          id: "cart",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader combining both texts could best conclude that the cart freed by the writer's group —",
          choices: [
            { letter: "A", text: "was the heaviest item removed that day" },
            { letter: "B", text: "was one of the four carts the department counted" },
            { letter: "C", text: "had washed out of a storm drain during a heavy rain" },
            { letter: "D", text: "was left in the creek after the group gave up" }
          ],
          correct: "B"
        },
        {
          id: "demanding",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Select TWO sentences, one from each text, that together best show the cleanup can be physically demanding.",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 26" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "drains",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to Text 2, where did most of the debris by weight come from?",
          choices: [
            { letter: "A", text: "Visitors who fished along the creek" },
            { letter: "B", text: "Businesses located near the water" },
            { letter: "C", text: "Earlier cleanups that left trash behind" },
            { letter: "D", text: "Storm drains carrying litter from streets" }
          ],
          correct: "D"
        },
        {
          id: "interpret",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from Text 2 offers an interpretation of the data rather than a report of what happened?",
          choices: [
            { letter: "A", text: "Sentence 19" },
            { letter: "B", text: "Sentence 20" },
            { letter: "C", text: "Sentence 22" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: "C"
        },
        {
          id: "support",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence from Text 2 best explains why the department decided on the plan in sentence 23?",
          choices: [
            { letter: "A", text: "Sentence 18" },
            { letter: "B", text: "Sentence 21" },
            { letter: "C", text: "Sentence 26" },
            { letter: "D", text: "Sentence 27" }
          ],
          correct: "B"
        },
        {
          id: "pilot",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As used in sentence 23, the phrase pilot program most nearly means —",
          choices: [
            { letter: "A", text: "a small trial to test an idea" },
            { letter: "B", text: "a project run by airline workers" },
            { letter: "C", text: "a permanent change to city law" },
            { letter: "D", text: "a contest between volunteer groups" }
          ],
          correct: "A"
        }
      ]
    },

    /* 9 · Paired texts · beekeeping */
    {
      id: "g9-dsr-c57-rooftop-hives",
      family: "G9",
      title: "Bees on the Roof",
      kind: "Paired texts · 9.DSR",
      blurb: "A community garden wants simpler hive permits; an entomologist asks which bees really need the help.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Let the City Buzz</strong> (a letter from the Eastside Community Garden)</p>" +
        "<p>" + N(1) + "Three years ago, the Eastside Community Garden installed two beehives on the roof of the old library annex. " +
        N(2) + "Our members were nervous at first, and a few of them said so loudly. " +
        N(3) + "Would the bees sting children? " +
        N(4) + "Would neighbors complain? " +
        N(5) + "Neither fear came true. " +
        N(6) + "What happened instead was remarkable: our tomato and squash harvests grew by nearly a third, and the hives produced more than eighty pounds of honey, which we sold to pay for new garden beds. " +
        N(7) + "Urban beekeeping is more than a hobby. " +
        N(8) + "Honeybees pollinate the fruits and vegetables that city gardeners grow, and every hive on a rooftop is a small engine of food production. " +
        N(9) + "Hives also teach. " +
        N(10) + "Each spring, fourth graders from Linwood Elementary climb the annex stairs in borrowed veils to watch the bees at work, and many of them leave asking how they can plant flowers at home. " +
        N(11) + "The city's current rules require a special permit, a fee of $150, and an inspection for every hive, even on private property. " +
        N(12) + "These rules discourage ordinary residents from trying. " +
        N(13) + "The council should simplify the process so that more neighborhoods can share what our garden has gained. " +
        N(14) + "A city full of bees is a city full of gardens, and a city full of gardens feeds its people.</p>" +
        "<p><strong>Text 2 — Not All Bees Are Equal</strong> (an essay by an entomologist)</p>" +
        "<p>" + N(15) + "Honeybees are charming, productive, and easy to admire, but they are not the only bees in our cities, and they may not be the ones most in need of help. " +
        N(16) + "North America is home to roughly four thousand species of native bees, from tiny sweat bees to fuzzy bumblebees. " +
        N(17) + "Many of them pollinate certain crops, such as tomatoes and blueberries, more effectively than honeybees do. " +
        N(18) + "The trouble is that flowers are a limited resource. " +
        N(19) + "A single honeybee colony may contain tens of thousands of foragers, and when many hives crowd into a small area, they can collect much of the available pollen and nectar. " +
        N(20) + "Several field studies have found that native bee visits to flowers dropped in neighborhoods where hive numbers rose sharply. " +
        N(21) + "This does not mean cities should ban beekeeping. " +
        N(22) + "It means that adding hives is not the same as helping pollinators. " +
        N(23) + "A permit system gives officials a way to track how many colonies share a neighborhood and to keep their numbers from outgrowing the flowers that support them. " +
        N(24) + "Residents who want to help bees can start by planting native wildflowers, leaving patches of bare soil where ground-nesting bees can dig, and skipping pesticides. " +
        N(25) + "Those steps help every bee, including the ones that never make honey.</p>",
      claims: [
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The two texts about city beekeeping differ mainly in how they view —",
          choices: [
            { letter: "A", text: "whether children should be allowed near hives" },
            { letter: "B", text: "how much honey a rooftop hive can produce" },
            { letter: "C", text: "whether pesticides should be banned in parks" },
            { letter: "D", text: "whether adding honeybee hives helps city pollinators" }
          ],
          correct: "D"
        },
        {
          id: "agree",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea would the writers of both texts most likely accept?",
          choices: [
            { letter: "A", text: "Bees play an important role in pollinating plants." },
            { letter: "B", text: "Native bees produce more honey than honeybees." },
            { letter: "C", text: "The city's hive permit fee should be removed." },
            { letter: "D", text: "Rooftop hives are the best way to help bees." }
          ],
          correct: "A"
        },
        {
          id: "respond",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Sentence 23 in Text 2 most directly responds to which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "C"
        },
        {
          id: "tomatoes",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Based on both texts, which inference about the Eastside garden's larger tomato harvest is most reasonable?",
          choices: [
            { letter: "A", text: "The writer of Text 2 would credit the honey sales for it." },
            { letter: "B", text: "The writer of Text 2 might say native bees could deserve some credit." },
            { letter: "C", text: "The writer of Text 1 admits the hives had nothing to do with it." },
            { letter: "D", text: "Both writers agree it proves the city needs more hives." }
          ],
          correct: "B"
        },
        {
          id: "central2",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of Text 2?",
          choices: [
            { letter: "A", text: "Cities should ban honeybee hives to protect native species." },
            { letter: "B", text: "Honeybees are better pollinators than any native bee." },
            { letter: "C", text: "Crowding in hives can harm native bees, so helping pollinators takes more." },
            { letter: "D", text: "Bumblebees and sweat bees are the most common bees in North America." }
          ],
          correct: "C"
        },
        {
          id: "research",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from Text 2 provides research evidence rather than the writer's own recommendation?",
          choices: [
            { letter: "A", text: "Sentence 20" },
            { letter: "B", text: "Sentence 22" },
            { letter: "C", text: "Sentence 24" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: "A"
        },
        {
          id: "questions",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The writer of Text 1 includes the questions in sentences 3 and 4 mainly to —",
          choices: [
            { letter: "A", text: "ask readers to report problems with the hives" },
            { letter: "B", text: "voice early doubts before showing they were unfounded" },
            { letter: "C", text: "suggest that the hives should be moved elsewhere" },
            { letter: "D", text: "prove that children were stung by the bees" }
          ],
          correct: "B"
        },
        {
          id: "engine",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 8, the writer of Text 1 calls each rooftop hive a small engine of food production. This metaphor suggests that a hive —",
          choices: [
            { letter: "A", text: "makes too much noise for a neighborhood" },
            { letter: "B", text: "needs fuel and repairs to keep running" },
            { letter: "C", text: "costs as much as a piece of machinery" },
            { letter: "D", text: "steadily powers the growth of food" }
          ],
          correct: "D"
        }
      ]
    },

    /* 10 · Poetry · mountain hiking */
    {
      id: "g9-rl-c57-switchbacks",
      family: "G9",
      title: "Switchbacks",
      kind: "Poetry · 9.RL",
      blurb: "A climb before dawn, a father who says little, and a trail that will not go straight.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "We start before the birds have argued out the dawn,<br>" +
        L(2) + "my father's headlamp bobbing like a lost moon<br>" +
        L(3) + "up the dark spine of the trail.<br>" +
        L(4) + "The mountain does not climb straight.<br>" +
        L(5) + "It folds the path back on itself,<br>" +
        L(6) + "left, then right, then left again,<br>" +
        L(7) + "a sentence that keeps saying almost.<br>" +
        L(8) + "My legs complain in a language<br>" +
        L(9) + "I did not know they spoke.<br>" +
        L(10) + "I count my steps, then stop counting,<br>" +
        L(11) + "then count the stones instead,<br>" +
        L(12) + "gray and patient, each one older<br>" +
        L(13) + "than every name I know.<br>" +
        L(14) + "Halfway, my father stops and points:<br>" +
        L(15) + "below us, the valley is a bowl of milk,<br>" +
        L(16) + "the fog still sleeping in it,<br>" +
        L(17) + "and the town we left an hour ago<br>" +
        L(18) + "is only a few roofs floating.<br>" +
        L(19) + "I want the top. I want it now.<br>" +
        L(20) + "He hands me water and says nothing,<br>" +
        L(21) + "which is how he says be patient.<br>" +
        L(22) + "Left, then right, then left again,<br>" +
        L(23) + "and then there is no more again,<br>" +
        L(24) + "only wind, and sky in every direction,<br>" +
        L(25) + "and the whole slow road beneath us<br>" +
        L(26) + "shining like it was the point.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem \"Switchbacks\"?",
          choices: [
            { letter: "A", text: "Climbing mountains is too difficult for young hikers." },
            { letter: "B", text: "The slow journey can matter as much as reaching the goal." },
            { letter: "C", text: "Parents should explain their lessons in plain words." },
            { letter: "D", text: "Getting an early start is the key to any success." }
          ],
          correct: "B"
        },
        {
          id: "moon",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 2, the father's headlamp is compared to a lost moon mainly to show that the light —",
          choices: [
            { letter: "A", text: "is small and wandering in the darkness" },
            { letter: "B", text: "is brighter than the rising sun" },
            { letter: "C", text: "has been left behind at the trailhead" },
            { letter: "D", text: "frightens the birds in the trees" }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The images in lines 15 through 18 (the valley as a bowl of milk, the floating roofs) mainly create a mood that is —",
          choices: [
            { letter: "A", text: "tense and threatening" },
            { letter: "B", text: "lonely and bitter" },
            { letter: "C", text: "noisy and crowded" },
            { letter: "D", text: "peaceful and dreamlike" }
          ],
          correct: "D"
        },
        {
          id: "repeat",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The poet repeats left, then right, then left again in lines 6 and 22 most likely to —",
          choices: [
            { letter: "A", text: "show that the hikers are lost on the mountain" },
            { letter: "B", text: "give directions for readers who want to climb" },
            { letter: "C", text: "echo the zigzag rhythm of the trail" },
            { letter: "D", text: "show the father's impatience with his child" }
          ],
          correct: "C"
        },
        {
          id: "shift",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "How does the ending of the poem (lines 23 through 26) differ from lines 19 through 21?",
          choices: [
            { letter: "A", text: "The speaker moves from impatience to appreciation of the climb." },
            { letter: "B", text: "The speaker moves from joy to disappointment at the summit." },
            { letter: "C", text: "The father moves from silence to a long speech." },
            { letter: "D", text: "The weather moves from clear skies to heavy fog." }
          ],
          correct: "A"
        },
        {
          id: "speaker",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The poem \"Switchbacks\" is told from the point of view of —",
          choices: [
            { letter: "A", text: "a father remembering a climb from his youth" },
            { letter: "B", text: "a young hiker climbing alongside a parent" },
            { letter: "C", text: "a narrator watching hikers from the town" },
            { letter: "D", text: "the mountain speaking to the people on it" }
          ],
          correct: "B"
        },
        {
          id: "patient",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In line 12, the stones are called patient. Compared with still, the word patient suggests that the stones —",
          choices: [
            { letter: "A", text: "are heavy and hard to move" },
            { letter: "B", text: "are smooth from the rain" },
            { letter: "C", text: "are waiting to trip the hikers" },
            { letter: "D", text: "have calmly lasted a very long time" }
          ],
          correct: "D"
        },
        {
          id: "silent",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which line best supports the idea that the father teaches the speaker without speaking?",
          choices: [
            { letter: "A", text: "Line 3" },
            { letter: "B", text: "Line 14" },
            { letter: "C", text: "Line 21" },
            { letter: "D", text: "Line 25" }
          ],
          correct: "C"
        }
      ]
    },

    /* 11 · Drama · a family restaurant */
    {
      id: "g9-rl-c57-good-kimchi",
      family: "G9",
      title: "The Good Kimchi",
      kind: "Drama · 9.RL",
      blurb: "A famous reviewer walks into Park's Kitchen. Ji-woo panics; Halmoni keeps folding dumplings.",
      level: 3,
      passage:
        "<p><em>" + N(1) + "The dining room of Park's Kitchen, a small Korean restaurant, at two in the afternoon, after the lunch crowd has gone. " +
        N(2) + "JI-WOO, fifteen, wipes tables. " +
        N(3) + "HALMONI, her grandmother, folds dumplings at the counter. " +
        N(4) + "MR. PARK, Ji-woo's father, struggles with a steamer basket whose lid will not close no matter how he turns it.</em></p>" +
        "<p><strong>MR. PARK:</strong> " + N(5) + "Twenty years this steamer has worked, and today it decides to retire.</p>" +
        "<p><strong>HALMONI:</strong> " + N(6) + "It is not retiring. " + N(7) + "It is tired. " + N(8) + "Be gentle with it.</p>" +
        "<p><em>" + N(9) + "The bell over the door rings. " +
        N(10) + "A WOMAN in a gray raincoat enters, shaking water from her umbrella, carrying a small notebook, and sits at the table by the window.</em></p>" +
        "<p><strong>JI-WOO:</strong> <em>(aside, freezing with the cloth in her hand)</em> " + N(11) + "That's Celia Marsh. " +
        N(12) + "She reviews one restaurant a week on her channel, and half the town watches. " +
        N(13) + "Last month she called a pizza place forgettable, and it closed its doors by June.</p>" +
        "<p><strong>MR. PARK:</strong> <em>(not looking up)</em> " + N(14) + "Ji-woo, take her order, please. " +
        N(15) + "I am at war with this lid.</p>" +
        "<p><strong>JI-WOO:</strong> <em>(crossing quickly to the counter, whispering)</em> " + N(16) + "Halmoni, that woman is a reviewer. " +
        N(17) + "A famous one. " + N(18) + "Can we give her the good kimchi? " + N(19) + "The one from the back?</p>" +
        "<p><strong>HALMONI:</strong> <em>(still folding)</em> " + N(20) + "Everyone gets the good kimchi. " +
        N(21) + "That is why it is called the good kimchi.</p>" +
        "<p><strong>JI-WOO:</strong> " + N(22) + "But this is different.</p>" +
        "<p><strong>HALMONI:</strong> " + N(23) + "A customer is a customer. " + N(24) + "If she is hungry, we feed her. " +
        N(25) + "If she is important, we still feed her. " + N(26) + "The dumplings do not know who is eating them.</p>" +
        "<p><em>" + N(27) + "Ji-woo takes the order, her pencil trembling so much that she has to write it twice. " +
        N(28) + "Mr. Park finally slams the lid shut, and it stays. " +
        N(29) + "He raises both fists in triumph, then notices the woman watching and coughs.</em></p>" +
        "<p><strong>MR. PARK:</strong> " + N(30) + "Sorry. " + N(31) + "Small victory.</p>" +
        "<p><strong>CELIA MARSH:</strong> <em>(smiling for the first time)</em> " + N(32) + "I understand completely. " +
        N(33) + "My oven at home has the same personality.</p>" +
        "<p><em>" + N(34) + "Later. " + N(35) + "The woman's plate is empty. " +
        N(36) + "She leaves cash on the table, buttons her raincoat, and pauses at the counter.</em></p>" +
        "<p><strong>CELIA MARSH:</strong> " + N(37) + "Who made the dumplings?</p>" +
        "<p><strong>HALMONI:</strong> " + N(38) + "I did. " + N(39) + "Same as yesterday. " + N(40) + "Same as tomorrow.</p>" +
        "<p><em>" + N(41) + "Celia writes something in her notebook, nods once, and leaves. " +
        N(42) + "Ji-woo watches the door swing shut behind her.</em></p>" +
        "<p><strong>JI-WOO:</strong> <em>(aside)</em> " + N(43) + "She didn't say forgettable. " +
        N(44) + "She didn't say anything at all, which might be worse, or might be better. " +
        N(45) + "<em>(She looks at Halmoni, who has already started folding the next batch.)</em> " +
        N(46) + "Halmoni doesn't seem worried either way.</p>",
      claims: [
        {
          id: "irony",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Ji-woo's aside in sentences 11 through 13 creates dramatic irony because —",
          choices: [
            { letter: "A", text: "Celia Marsh already knows that Ji-woo recognizes her" },
            { letter: "B", text: "the audience learns who the customer is while Mr. Park does not" },
            { letter: "C", text: "Halmoni has secretly invited the reviewer to the restaurant" },
            { letter: "D", text: "the pizza place Ji-woo mentions is actually still open" }
          ],
          correct: "B"
        },
        {
          id: "fists",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction in sentence 29, in which Mr. Park raises his fists and then coughs, mainly serves to —",
          choices: [
            { letter: "A", text: "add humor and show his embarrassment at being seen" },
            { letter: "B", text: "show that he is angry the reviewer has arrived" },
            { letter: "C", text: "signal that the steamer has broken for good" },
            { letter: "D", text: "reveal that he is feeling ill and should rest" }
          ],
          correct: "A"
        },
        {
          id: "folding",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction still folding in sentence 20 mainly reveals that Halmoni —",
          choices: [
            { letter: "A", text: "did not hear what Ji-woo whispered to her" },
            { letter: "B", text: "is too busy to help with the reviewer's order" },
            { letter: "C", text: "is not shaken by the news about the reviewer" },
            { letter: "D", text: "wants Ji-woo to take over making dumplings" }
          ],
          correct: "C"
        },
        {
          id: "final",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The playwright uses Ji-woo's final aside (sentences 43 through 46) mainly to —",
          choices: [
            { letter: "A", text: "announce that the restaurant received a perfect review" },
            { letter: "B", text: "show that Ji-woo plans to contact Celia Marsh" },
            { letter: "C", text: "explain why Mr. Park fixed the steamer lid" },
            { letter: "D", text: "contrast Ji-woo's uncertainty with Halmoni's calm" }
          ],
          correct: "D"
        },
        {
          id: "halmoni",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Halmoni in the scene at Park's Kitchen?",
          choices: [
            { letter: "A", text: "She is nervous and eager to please famous guests." },
            { letter: "B", text: "She is steady and treats every customer the same." },
            { letter: "C", text: "She is impatient with her son's struggles in the kitchen." },
            { letter: "D", text: "She is secretive about how she makes her recipes." }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "In sentence 26, Halmoni says that the dumplings do not know who is eating them. The tone of this line is best described as —",
          choices: [
            { letter: "A", text: "frightened and pleading" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "excited and boastful" },
            { letter: "D", text: "wry and matter-of-fact" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the scene in Park's Kitchen best develop?",
          choices: [
            { letter: "A", text: "Consistent good work matters more than impressing important people." },
            { letter: "B", text: "Online reviews decide whether small businesses succeed." },
            { letter: "C", text: "Old equipment should be replaced before it breaks." },
            { letter: "D", text: "Young people understand customers better than elders do." }
          ],
          correct: "A"
        },
        {
          id: "same",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentences best support the idea that Halmoni's standards never change?",
          choices: [
            { letter: "A", text: "Sentences 6 and 7" },
            { letter: "B", text: "Sentences 30 and 31" },
            { letter: "C", text: "Sentences 39 and 40" },
            { letter: "D", text: "Sentences 43 and 44" }
          ],
          correct: "C"
        }
      ]
    },

    /* 12 · Functional text · mountain hiking */
    {
      id: "g9-ri-c57-tallow-peak",
      family: "G9",
      title: "Tallow Peak Day Hike",
      kind: "Functional text · 9.RI",
      blurb: "A ranger station's information sheet: the trail log, the turnaround rule, and why the town forecast lies.",
      level: 1,
      passage:
        "<p><strong>Tallow Peak Trail: Day-Hiker Information Sheet</strong><br>" +
        N(1) + "Welcome to Tallow Peak, the highest point in Bramwell County State Park. " +
        N(2) + "The round trip to the summit is 7.8 miles with about 2,400 feet of elevation gain, and most hikers need five to seven hours. " +
        N(3) + "Please read this sheet before you start, because conditions on the upper mountain can change quickly.</p>" +
        "<p><strong>Before You Go</strong><br>" +
        N(4) + "Register at the kiosk beside the parking lot by writing your group's name, size, and expected return time in the trail log. " +
        N(5) + "Rangers check the log each evening at 7:00 p.m. and begin a search for any group that has not signed out. " +
        N(6) + "Check the summit forecast posted on the kiosk board, not the forecast for the town of Bramwell, which sits 2,000 feet lower and is often 10 to 15 degrees warmer. " +
        N(7) + "Plan to start no later than 10:00 a.m. so you can reach the summit and descend before dark.</p>" +
        "<p><strong>What to Carry</strong><br>" +
        N(8) + "Every hiker should carry at least two liters of water; there is no reliable water source above the Mill Creek crossing at mile 1.5. " +
        N(9) + "Bring a warm layer and a rain jacket, even in summer. " +
        N(10) + "Pack a map, a flashlight or headlamp, a basic first-aid kit, and food high in energy. " +
        N(11) + "Cell phone service is unavailable on most of the trail, so do not depend on a phone for navigation or emergency calls.</p>" +
        "<p><strong>On the Trail</strong><br>" +
        N(12) + "Follow the blue paint blazes. " +
        N(13) + "At the junction at mile 2.6, the Tallow Peak Trail turns left; the wider path to the right leads to an old logging road and does not reach the summit. " +
        N(14) + "Stay on marked trails to protect fragile alpine plants above the tree line, some of which grow only a fraction of an inch each year. " +
        N(15) + "Dogs are welcome but must stay on a leash no longer than six feet.</p>" +
        "<p><strong>The Turnaround Rule</strong><br>" +
        N(16) + "Set a turnaround time before you start and keep it, even if the summit looks close. " +
        N(17) + "Most rescues on Tallow Peak involve hikers who kept climbing past a safe hour and were caught by darkness or storms on the way down. " +
        N(18) + "Summer thunderstorms often build in the early afternoon. " +
        N(19) + "If you hear thunder or see lightning, leave the exposed summit ridge immediately and descend below the tree line. " +
        N(20) + "In our experience, the view from the summit is spectacular, but it is never worth a night stranded on the mountain.</p>" +
        "<p><strong>When You Return</strong><br>" +
        N(21) + "Sign out in the trail log, even if you turned back early. " +
        N(22) + "A group that forgets to sign out may set off an unnecessary search that puts rescuers at risk. " +
        N(23) + "Report trail damage, fallen trees, or unusual wildlife sightings to the ranger station by the main gate. " +
        N(24) + "Thank you for helping keep Tallow Peak safe and beautiful for every visitor.</p>",
      claims: [
        {
          id: "forecast",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the information sheet, why should hikers check the summit forecast instead of the forecast for Bramwell?",
          choices: [
            { letter: "A", text: "The town forecast is updated only once a week." },
            { letter: "B", text: "The summit forecast includes trail closures." },
            { letter: "C", text: "The town is much lower and usually warmer." },
            { letter: "D", text: "Phones cannot receive the town forecast on the trail." }
          ],
          correct: "C"
        },
        {
          id: "log",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the sheet, what happens if a group has not signed out of the trail log by 7:00 p.m.?",
          choices: [
            { letter: "A", text: "Rangers begin a search for the group." },
            { letter: "B", text: "The group must pay a late fee." },
            { letter: "C", text: "The parking lot gate is locked." },
            { letter: "D", text: "The group's name is posted at the kiosk." }
          ],
          correct: "A"
        },
        {
          id: "order",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the Tallow Peak information sheet mainly organized?",
          choices: [
            { letter: "A", text: "By comparing Tallow Peak with other nearby trails" },
            { letter: "B", text: "In sections that follow a hike from planning to return" },
            { letter: "C", text: "As a story of one group's climb told in time order" },
            { letter: "D", text: "From the most common rescues to the least common" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the main purpose of the Tallow Peak information sheet?",
          choices: [
            { letter: "A", text: "To convince hikers that the summit view is worth any risk" },
            { letter: "B", text: "To describe the history of Bramwell County State Park" },
            { letter: "C", text: "To recruit volunteers for the park's rescue team" },
            { letter: "D", text: "To help hikers plan and finish a safe day hike" }
          ],
          correct: "D"
        },
        {
          id: "turnaround",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the reason for the turnaround rule given in sentence 16?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the information sheet includes an opinion rather than only a rule or a fact?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "D"
        },
        {
          id: "fragile",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As used in sentence 14, the word fragile most nearly means —",
          choices: [
            { letter: "A", text: "easily damaged" },
            { letter: "B", text: "rare and costly" },
            { letter: "C", text: "brightly colored" },
            { letter: "D", text: "poisonous to touch" }
          ],
          correct: "A"
        },
        {
          id: "junction",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The writer includes sentence 13 about the junction at mile 2.6 mainly to —",
          choices: [
            { letter: "A", text: "describe the history of logging in the park" },
            { letter: "B", text: "keep hikers from taking a path that misses the summit" },
            { letter: "C", text: "suggest a shorter route for tired hikers" },
            { letter: "D", text: "explain where to find water on the trail" }
          ],
          correct: "B"
        }
      ]
    },

    /* 13 · Argument · river cleanups */
    {
      id: "g9-ri-c57-kettle-river",
      family: "G9",
      title: "Give Us a Day for the River",
      kind: "Argument · 9.RI",
      blurb: "A Westbrook junior argues that the yearly river cleanup should become an official school service day.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every April, about forty Westbrook High students give up a Saturday morning to pull trash out of the Kettle River. " +
        N(2) + "We haul out tires, bottles, and the occasional lawn chair, and we go home muddy and proud. " +
        N(3) + "But forty students out of nearly fourteen hundred is not enough. " +
        N(4) + "Westbrook should make the river cleanup an official school service day, held on a Friday, with transportation provided and service hours awarded to every student who takes part.</p>" +
        "<p>" + N(5) + "The first reason is simple: more hands mean a cleaner river. " +
        N(6) + "Last year's volunteers collected about 900 pounds of trash along one mile of riverbank. " +
        N(7) + "The Kettle runs for six miles through our town. " +
        N(8) + "If even a quarter of our student body joined the effort, we could reach stretches of the river that no group has cleaned in years.</p>" +
        "<p>" + N(9) + "Second, a school day would open the event to students who cannot attend on weekends. " +
        N(10) + "Many Westbrook students work Saturday shifts, care for younger siblings, or have no ride to the river. " +
        N(11) + "Right now, the cleanup mostly includes students who already have free time and a car in the driveway. " +
        N(12) + "A Friday event with school buses would remove those barriers and make the cleanup truly belong to everyone.</p>" +
        "<p>" + N(13) + "Third, the river is a classroom waiting to be used. " +
        N(14) + "Biology students could test water samples, history classes could study the old mill sites along the banks, and art students could photograph the changes from year to year. " +
        N(15) + "Ms. Delgado's environmental science class already does a short version of this every spring, and for three years her students have scored higher on the ecology unit test than students in other sections.</p>" +
        "<p>" + N(16) + "Some people will argue that a day out of class is a day of lost learning. " +
        N(17) + "I understand the concern, since our schedule is already crowded. " +
        N(18) + "However, Westbrook already gives students days away from class for field trips, pep rallies, and test practice. " +
        N(19) + "A day spent measuring, observing, and working together outdoors is at least as valuable as a morning spent cheering in the gym.</p>" +
        "<p>" + N(20) + "The Kettle River powered our town's first mill, and it still holds the best summer swimming hole in the county. " +
        N(21) + "It is time our school gave something back. " +
        N(22) + "I urge the principal and the school board to approve a Kettle River Service Day for next spring. " +
        N(23) + "Bring your gloves. " +
        N(24) + "The river is waiting.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the writer's main claim in the editorial about the Kettle River?",
          choices: [
            { letter: "A", text: "Students who skip the cleanup should lose service hours." },
            { letter: "B", text: "The Kettle River is too polluted for students to visit." },
            { letter: "C", text: "Westbrook should make the cleanup an official school day." },
            { letter: "D", text: "Pep rallies should be replaced by environmental classes." }
          ],
          correct: "C"
        },
        {
          id: "miss",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the writer, why do many Westbrook students currently miss the cleanup?",
          choices: [
            { letter: "A", text: "They have jobs, family duties, or no ride." },
            { letter: "B", text: "They do not know that the event exists." },
            { letter: "C", text: "They think the river is unsafe to enter." },
            { letter: "D", text: "They are busy with weekend sports games." }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the Kettle River editorial states an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "D"
        },
        {
          id: "classroom",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence gives the strongest evidence for the writer's claim that the river can serve as a classroom?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 18" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "B"
        },
        {
          id: "counter",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The writer includes sentences 16 and 17 mainly to —",
          choices: [
            { letter: "A", text: "admit that the proposal is probably a bad idea" },
            { letter: "B", text: "complain that the school schedule is too crowded" },
            { letter: "C", text: "suggest moving the cleanup back to Saturday" },
            { letter: "D", text: "acknowledge an opposing view before answering it" }
          ],
          correct: "D"
        },
        {
          id: "reasons",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the writer mainly organize paragraphs 2 through 4 of the editorial?",
          choices: [
            { letter: "A", text: "As a numbered series of reasons that support the claim" },
            { letter: "B", text: "As a timeline of the river's history from past to present" },
            { letter: "C", text: "As a comparison of two different rivers in the county" },
            { letter: "D", text: "As a problem followed by several rejected solutions" }
          ],
          correct: "A"
        },
        {
          id: "barriers",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 12, the word barriers most nearly means —",
          choices: [
            { letter: "A", text: "fences along the river" },
            { letter: "B", text: "rules set by the board" },
            { letter: "C", text: "obstacles that block people" },
            { letter: "D", text: "costs of school buses" }
          ],
          correct: "C"
        },
        {
          id: "waiting",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 13, the writer calls the river a classroom waiting to be used. This metaphor suggests that the river —",
          choices: [
            { letter: "A", text: "should have desks and a teacher on its banks" },
            { letter: "B", text: "offers learning chances the school has not yet used" },
            { letter: "C", text: "is closed to students during the school year" },
            { letter: "D", text: "has already been studied by every class" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
