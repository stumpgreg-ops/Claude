/* SOL Labyrinth — New Jersey grade 5 (NJSLA-ELA) tiny and short packs for the early nights.
 * Twelve tiny packs (50–90 words, 4–5 questions) and eight short packs (100–150 words,
 * 5–6 questions): stories, poems, articles, two vocabulary packs and two paired-text packs,
 * each with an Evidence-Based Selected Response pair. Original text only; no real people.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── TINY (nights 1–8) ───────────────────────── */
    {
      id: "nj5-t-mitten",
      family: "NJ5",
      title: "The Red Mitten",
      kind: "Literature · RL.5",
      blurb: "Nora loses a mitten, and someone she never sees gives it back.",
      level: 1,
      passage:
        "<p>" + N(1) + "Nora lost her red mitten on the way to school. " +
        N(2) + "Her left hand was cold all morning. " +
        N(3) + "At lunch, she saw something red on the fence by the playground. " +
        N(4) + "Someone had found the mitten and hung it up high where she would see it. " +
        N(5) + "Nora never learned who had done it. " +
        N(6) + "She pulled the mitten on and smiled. " +
        N(7) + "The next day, she found a lost scarf and hung it on the same fence.</p>",
      claims: [
        {
          id: "lesson",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "lesson-b",
          stem: "What lesson does Nora learn in the story?",
          choices: [
            { letter: "A", text: "It is smart to wear two pairs of mittens." },
            { letter: "B", text: "A kind act can lead someone else to be kind." },
            { letter: "C", text: "Lost things are usually gone for good." },
            { letter: "D", text: "The playground is a good place to stay warm." }
          ],
          correct: "B"
        },
        {
          id: "lesson-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best shows the lesson from Part A?",
          choices: [
            { letter: "A", text: "Sentence 2: Her left hand was cold all morning." },
            { letter: "B", text: "Sentence 4: Someone had found the mitten and hung it up high where she would see it." },
            { letter: "C", text: "Sentence 5: Nora never learned who had done it." },
            { letter: "D", text: "Sentence 7: The next day, she found a lost scarf and hung it on the same fence." }
          ],
          correct: "D"
        },
        {
          id: "where",
          sol: "RL.IT.5.3",
          strand: "RL",
          stem: "Where does Nora find her mitten?",
          choices: [
            { letter: "A", text: "on the fence by the playground" },
            { letter: "B", text: "in her lunchbox" },
            { letter: "C", text: "on the sidewalk near school" },
            { letter: "D", text: "inside her desk" }
          ],
          correct: "A"
        },
        {
          id: "craft",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "The author includes sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "explain why Nora's hand was cold" },
            { letter: "B", text: "describe the color of the mitten" },
            { letter: "C", text: "show that the helper stayed a mystery" },
            { letter: "D", text: "tell what Nora ate at lunch" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "nj5-t-frost-poem",
      family: "NJ5",
      title: "First Frost",
      kind: "Poetry · RL.5",
      blurb: "A white morning that melts away by lunch.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "This morning the grass wore a coat of white,<br>" +
        L(2) + "each blade stiff and shining in the early light.<br>" +
        L(3) + "My breath made clouds that floated away,<br>" +
        L(4) + "and the puddle by the gate was glass today.<br>" +
        L(5) + "I stepped on the edge and heard it crack.<br>" +
        L(6) + "Then the sun climbed up, and the green came back.<br>" +
        L(7) + "By lunch the white coat had melted clean,<br>" +
        L(8) + "and the grass was only grass again, plain green.</p>",
      claims: [
        {
          id: "coat",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In line 1, the poet says the grass wore a coat of white to show that —",
          choices: [
            { letter: "A", text: "deep snow fell during the night" },
            { letter: "B", text: "frost covered the grass" },
            { letter: "C", text: "someone left a coat on the lawn" },
            { letter: "D", text: "the grass had turned pale and dry" }
          ],
          correct: "B"
        },
        {
          id: "about",
          sol: "RL.CI.5.2",
          strand: "RL",
          partB: "about-b",
          stem: "What is the poem mostly about?",
          choices: [
            { letter: "A", text: "a frost that comes and goes on a cold morning" },
            { letter: "B", text: "a child who breaks a window by the gate" },
            { letter: "C", text: "how snow makes winter fun" },
            { letter: "D", text: "why the sun rises late in winter" }
          ],
          correct: "A"
        },
        {
          id: "about-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which line best shows that the frost does not last?",
          choices: [
            { letter: "A", text: "Line 2" },
            { letter: "B", text: "Line 4" },
            { letter: "C", text: "Line 5" },
            { letter: "D", text: "Line 6" }
          ],
          correct: "D"
        },
        {
          id: "glass",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In line 4, the poet calls the puddle glass because it —",
          choices: [
            { letter: "A", text: "was broken into sharp pieces" },
            { letter: "B", text: "reflected the whole sky" },
            { letter: "C", text: "was frozen hard and clear" },
            { letter: "D", text: "was too deep to step in" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "nj5-t-hummingbird",
      family: "NJ5",
      title: "The Tiniest Flyer",
      kind: "Informational · RI.5",
      blurb: "A bird lighter than a penny that flies backward and eats all day.",
      level: 1,
      passage:
        "<p>" + N(1) + "A hummingbird is one of the smallest birds in the world. " +
        N(2) + "Some weigh less than a penny. " +
        N(3) + "Its wings beat so fast that they make a soft humming sound, which is how the bird got its name. " +
        N(4) + "A hummingbird can hover in one spot like a tiny helicopter. " +
        N(5) + "It can even fly backward. " +
        N(6) + "It uses its long, thin beak to drink sweet nectar from flowers. " +
        N(7) + "Because it burns so much energy, it must eat about every ten minutes all day long.</p>",
      claims: [
        {
          id: "why-eat",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "why-eat-b",
          stem: "According to the article, why does a hummingbird eat so often?",
          choices: [
            { letter: "A", text: "Its beak is long and thin." },
            { letter: "B", text: "It burns a lot of energy." },
            { letter: "C", text: "Flowers make new nectar every ten minutes." },
            { letter: "D", text: "It is one of the smallest birds." }
          ],
          correct: "B"
        },
        {
          id: "why-eat-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about eating?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "name",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "How did the hummingbird get its name?",
          choices: [
            { letter: "A", text: "from the sound its wings make" },
            { letter: "B", text: "from the way it hovers" },
            { letter: "C", text: "from the color of its feathers" },
            { letter: "D", text: "from the song it sings" }
          ],
          correct: "A"
        },
        {
          id: "hover",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 4, the word hover most nearly means —",
          choices: [
            { letter: "A", text: "dive toward the ground" },
            { letter: "B", text: "sleep upside down" },
            { letter: "C", text: "stay in the air in one place" },
            { letter: "D", text: "fly in a straight line" }
          ],
          correct: "C"
        },
        {
          id: "helicopter",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "The author compares the hummingbird to a helicopter in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "show how loud the bird is" },
            { letter: "B", text: "explain how the bird stays in one spot" },
            { letter: "C", text: "prove that the bird is dangerous" },
            { letter: "D", text: "describe the size of the bird" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "nj5-t-crosswalk",
      family: "NJ5",
      title: "White Stripes on the Road",
      kind: "Informational · RI.5",
      blurb: "Why crosswalks look the way they do.",
      level: 1,
      passage:
        "<p>" + N(1) + "Look down at a busy corner and you will see wide white stripes painted across the road. " +
        N(2) + "This is a crosswalk. " +
        N(3) + "The stripes are painted white because white shows up best against dark pavement. " +
        N(4) + "Drivers can spot the stripes from far away, even at night. " +
        N(5) + "The stripes tell drivers to slow down and watch for people. " +
        N(6) + "They also tell walkers exactly where to cross. " +
        N(7) + "Some crosswalks have a button that turns on a flashing light. " +
        N(8) + "When the light flashes, cars must stop and wait.</p>",
      claims: [
        {
          id: "white",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "white-b",
          stem: "According to the article, why are crosswalk stripes painted white?",
          choices: [
            { letter: "A", text: "White is easy to see against dark pavement." },
            { letter: "B", text: "White paint costs the least." },
            { letter: "C", text: "White matches the flashing lights." },
            { letter: "D", text: "White paint lasts longer in the rain." }
          ],
          correct: "A"
        },
        {
          id: "white-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about the color?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "B"
        },
        {
          id: "main",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "What is the main idea of the article?",
          choices: [
            { letter: "A", text: "Every busy corner should have a flashing light." },
            { letter: "B", text: "Drivers should never drive at night." },
            { letter: "C", text: "Crosswalks help keep walkers safe by showing where to cross." },
            { letter: "D", text: "Paint on roads wears out quickly." }
          ],
          correct: "C"
        },
        {
          id: "spot",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 4, the word spot most nearly means —",
          choices: [
            { letter: "A", text: "a small mark" },
            { letter: "B", text: "a place to park" },
            { letter: "C", text: "to paint" },
            { letter: "D", text: "to see" }
          ],
          correct: "D"
        },
        {
          id: "button",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "The author includes sentences 7 and 8 mainly to —",
          choices: [
            { letter: "A", text: "describe one extra safety feature" },
            { letter: "B", text: "explain why the stripes are white" },
            { letter: "C", text: "show that walkers ignore the stripes" },
            { letter: "D", text: "compare crossing by day and by night" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "nj5-t-lopsided-cake",
      family: "NJ5",
      title: "The Lopsided Cake",
      kind: "Literature · RL.5",
      blurb: "Diego's birthday cake comes out crooked, and he has to decide what to do.",
      level: 1,
      passage:
        "<p>" + N(1) + "Diego wanted to bake a cake for his mother's birthday all by himself. " +
        N(2) + "He measured the flour, cracked the eggs, and set the timer. " +
        N(3) + "When the cake came out, one side was much taller than the other. " +
        N(4) + "It leaned like a tired tower. " +
        N(5) + "Diego almost hid it in the trash. " +
        N(6) + "Instead, he covered the low side with extra frosting and wrote \"Happy Birthday\" across the top. " +
        N(7) + "His mother laughed and said it was the best cake she had ever seen. " +
        N(8) + "She ate two slices.</p>",
      claims: [
        {
          id: "solve",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "solve-b",
          stem: "How does Diego solve his problem with the cake?",
          choices: [
            { letter: "A", text: "He bakes a second cake." },
            { letter: "B", text: "He asks his mother for help." },
            { letter: "C", text: "He hides the cake in the trash." },
            { letter: "D", text: "He uses frosting to cover the low side." }
          ],
          correct: "D"
        },
        {
          id: "solve-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best shows how Diego solves the problem in Part A?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "C"
        },
        {
          id: "tower",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 4, the author says the cake leaned like a tired tower to show that the cake —",
          choices: [
            { letter: "A", text: "was very tall" },
            { letter: "B", text: "tipped to one side" },
            { letter: "C", text: "tasted stale" },
            { letter: "D", text: "had gone cold" }
          ],
          correct: "B"
        },
        {
          id: "lesson",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "What lesson can a reader learn from Diego's cake?",
          choices: [
            { letter: "A", text: "A mistake can still turn out well." },
            { letter: "B", text: "Baking should be left to grown-ups." },
            { letter: "C", text: "A cake should always be perfectly even." },
            { letter: "D", text: "Birthdays are better with two cakes." }
          ],
          correct: "A"
        },
        {
          id: "mother",
          sol: "RL.IT.5.3",
          strand: "RL",
          stem: "How does Diego's mother feel about the cake?",
          choices: [
            { letter: "A", text: "She is upset that it is lopsided." },
            { letter: "B", text: "She is worried that he used the oven alone." },
            { letter: "C", text: "She is pleased and enjoys eating it." },
            { letter: "D", text: "She wishes he had bought one instead." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "nj5-t-honey",
      family: "NJ5",
      title: "From Flower to Jar",
      kind: "Informational · RI.5",
      blurb: "The steps bees follow to turn nectar into honey.",
      level: 2,
      passage:
        "<p>" + N(1) + "Honey begins as nectar, a sweet liquid inside flowers. " +
        N(2) + "A worker bee sips the nectar and stores it in a special stomach that is only for carrying. " +
        N(3) + "Back at the hive, she passes the nectar to another bee, mouth to mouth. " +
        N(4) + "The bees repeat this until most of the water in the nectar is gone. " +
        N(5) + "Then they fan the thick liquid with their wings to dry it even more. " +
        N(6) + "At last, they seal it into wax cells. " +
        N(7) + "One small jar of honey takes thousands of flower visits.</p>",
      claims: [
        {
          id: "structure",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "How is the article organized?",
          choices: [
            { letter: "A", text: "It tells the steps of making honey in order." },
            { letter: "B", text: "It lists reasons that honey is healthy." },
            { letter: "C", text: "It compares bees with other insects." },
            { letter: "D", text: "It describes a problem and a solution." }
          ],
          correct: "A"
        },
        {
          id: "fan",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "fan-b",
          stem: "Why do the bees fan the nectar with their wings?",
          choices: [
            { letter: "A", text: "to keep the hive cool" },
            { letter: "B", text: "to move it into the wax cells" },
            { letter: "C", text: "to dry out more of the water" },
            { letter: "D", text: "to call other bees to the hive" }
          ],
          correct: "C"
        },
        {
          id: "fan-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about fanning?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "D"
        },
        {
          id: "seal",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 6, the word seal most nearly means —",
          choices: [
            { letter: "A", text: "a sea animal" },
            { letter: "B", text: "close up tightly" },
            { letter: "C", text: "stamp with a mark" },
            { letter: "D", text: "pour out slowly" }
          ],
          correct: "B"
        },
        {
          id: "mostly",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "Which statement best tells what the article is mostly about?",
          choices: [
            { letter: "A", text: "Bees are the only insects that visit flowers." },
            { letter: "B", text: "Honey is made through many steps by many bees." },
            { letter: "C", text: "Flowers make nectar to feed the bees." },
            { letter: "D", text: "Wax cells keep honey fresh for years." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "nj5-t-bus-seat",
      family: "NJ5",
      title: "The Empty Seat",
      kind: "Literature · RL.5",
      blurb: "Amara has been saving a bus seat for a friend who moved away.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every morning, Amara saved the seat beside her on the bus for her best friend, Tess. " +
        N(2) + "Then Tess moved away in March. " +
        N(3) + "For a week, Amara kept her backpack on the empty seat. " +
        N(4) + "On Monday, a new boy climbed on and stood in the aisle, looking for a place to sit. " +
        N(5) + "Amara looked at her backpack for a long moment. " +
        N(6) + "Then she moved it to the floor. " +
        N(7) + "\"I'm Amara,\" she said. " +
        N(8) + "\"This seat's free.\"</p>",
      claims: [
        {
          id: "change",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "change-b",
          stem: "How does Amara change during the story?",
          choices: [
            { letter: "A", text: "She stops riding the bus." },
            { letter: "B", text: "She goes from saving the seat to sharing it." },
            { letter: "C", text: "She decides to sit near the driver." },
            { letter: "D", text: "She forgets all about Tess." }
          ],
          correct: "B"
        },
        {
          id: "change-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the answer to Part A about how Amara changes?",
          choices: [
            { letter: "A", text: "Sentence 2: Then Tess moved away in March." },
            { letter: "B", text: "Sentence 3: For a week, Amara kept her backpack on the empty seat." },
            { letter: "C", text: "Sentence 5: Amara looked at her backpack for a long moment." },
            { letter: "D", text: "Sentence 6: Then she moved it to the floor." }
          ],
          correct: "D"
        },
        {
          id: "moment",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "The author includes sentence 5 mainly to show that Amara —",
          choices: [
            { letter: "A", text: "is deciding what to do" },
            { letter: "B", text: "is worried the bus is late" },
            { letter: "C", text: "does not like the new boy" },
            { letter: "D", text: "wants to keep her backpack dry" }
          ],
          correct: "A"
        },
        {
          id: "free",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 8, the word free most nearly means —",
          choices: [
            { letter: "A", text: "costing no money" },
            { letter: "B", text: "loose and untied" },
            { letter: "C", text: "open to anyone" },
            { letter: "D", text: "able to go away" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "Which statement best expresses a theme of the story?",
          choices: [
            { letter: "A", text: "Old friends are always better than new ones." },
            { letter: "B", text: "A bus is the best place to make friends." },
            { letter: "C", text: "Missing someone means you should sit alone." },
            { letter: "D", text: "Making room for others can help you move on." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "nj5-t-thunder-poem",
      family: "NJ5",
      title: "Counting Thunder",
      kind: "Poetry · RL.5",
      blurb: "A grandfather's trick for measuring a storm.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "A flash of light, and then I count:<br>" +
        L(2) + "one, two, three, four, five.<br>" +
        L(3) + "Then thunder rumbles, low and slow,<br>" +
        L(4) + "like a truck that just arrived.<br>" +
        L(5) + "Grandpa says that every five<br>" +
        L(6) + "means one more mile away.<br>" +
        L(7) + "Tonight I counted twenty-five,<br>" +
        L(8) + "so on the porch we stay.</p>",
      claims: [
        {
          id: "truck",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In line 4, the poet compares thunder to a truck to show that the sound is —",
          choices: [
            { letter: "A", text: "sharp and quick" },
            { letter: "B", text: "deep and rumbling" },
            { letter: "C", text: "too loud to bear" },
            { letter: "D", text: "high and squeaky" }
          ],
          correct: "B"
        },
        {
          id: "porch",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "porch-b",
          stem: "Why do the speaker and Grandpa stay on the porch?",
          choices: [
            { letter: "A", text: "The storm is far away." },
            { letter: "B", text: "The rain has stopped." },
            { letter: "C", text: "They want to see the lightning up close." },
            { letter: "D", text: "A truck is blocking the door." }
          ],
          correct: "A"
        },
        {
          id: "porch-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which lines best support the answer to Part A about staying on the porch?",
          choices: [
            { letter: "A", text: "lines 1 and 2" },
            { letter: "B", text: "lines 3 and 4" },
            { letter: "C", text: "lines 5 and 6" },
            { letter: "D", text: "lines 7 and 8" }
          ],
          correct: "D"
        },
        {
          id: "about",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "Which statement best tells what the poem is about?",
          choices: [
            { letter: "A", text: "a child who is afraid of storms" },
            { letter: "B", text: "a grandfather who drives a truck" },
            { letter: "C", text: "using counting to tell how far away a storm is" },
            { letter: "D", text: "a family that runs inside from the rain" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "nj5-t-compost",
      family: "NJ5",
      title: "The Green Bin",
      kind: "Informational · RI.5",
      blurb: "How one school turns lunch scraps into tomatoes.",
      level: 1,
      passage:
        "<p>" + N(1) + "At Pine Street School, lunch scraps do not go in the trash. " +
        N(2) + "Apple cores, banana peels, and bread crusts go into a big green compost bin behind the cafeteria. " +
        N(3) + "Inside the bin, tiny living things called microbes break the scraps down. " +
        N(4) + "Worms help too. " +
        N(5) + "After a few months, the scraps turn into dark, crumbly soil. " +
        N(6) + "The school garden club spreads this soil on the vegetable beds. " +
        N(7) + "Last spring, the beds grew the biggest tomatoes the school had ever seen.</p>",
      claims: [
        {
          id: "main",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "main-b",
          stem: "What is the article mostly about?",
          choices: [
            { letter: "A", text: "how worms live in the dirt under a garden" },
            { letter: "B", text: "how a school turns food scraps into garden soil" },
            { letter: "C", text: "why tomatoes grow best in the spring sunshine" },
            { letter: "D", text: "what students at Pine Street eat for lunch" }
          ],
          correct: "B"
        },
        {
          id: "main-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about what the article is mostly about?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "C"
        },
        {
          id: "breaks",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "According to the article, what breaks down the scraps in the bin?",
          choices: [
            { letter: "A", text: "rain and sun" },
            { letter: "B", text: "the garden club" },
            { letter: "C", text: "tomato plants" },
            { letter: "D", text: "microbes and worms" }
          ],
          correct: "D"
        },
        {
          id: "crumbly",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 5, the word crumbly most nearly means —",
          choices: [
            { letter: "A", text: "easily broken apart" },
            { letter: "B", text: "wet and very sticky" },
            { letter: "C", text: "as hard as a rock" },
            { letter: "D", text: "full of bad smells" }
          ],
          correct: "A"
        },
        {
          id: "tomatoes",
          sol: "RI.AA.5.7",
          strand: "RI",
          stem: "The author includes sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "show that the compost soil helps plants grow" },
            { letter: "B", text: "explain how microbes do their work" },
            { letter: "C", text: "list what goes into the bin" },
            { letter: "D", text: "tell when the garden club meets" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "nj5-t-lemonade-vocab",
      family: "NJ5",
      title: "Lemonade Day",
      kind: "Vocabulary · L.5",
      blurb: "A slow start, a better sign, and a jar of coins; three words to work out from context.",
      level: 1,
      passage:
        "<p>" + N(1) + "On the hottest day of July, Malik and his cousin set up a lemonade stand at the corner. " +
        N(2) + "At first, business was <strong>sluggish</strong>; in a whole hour, only two people stopped. " +
        N(3) + "Then Malik made a sign with huge letters and a drawing of a dripping ice cube. " +
        N(4) + "Cars began to pull over, and soon a line formed. " +
        N(5) + "Malik <strong>squeezed</strong> lemons until his hands ached. " +
        N(6) + "By evening the pitcher was empty, and the jar of coins was <strong>brimming</strong>, so full that a few quarters spilled onto the grass.</p>",
      claims: [
        {
          id: "sluggish",
          sol: "L.VL.5.2",
          strand: "RV",
          partB: "sluggish-b",
          stem: "In sentence 2, the word sluggish most nearly means —",
          choices: [
            { letter: "A", text: "very slow" },
            { letter: "B", text: "noisy" },
            { letter: "C", text: "exciting" },
            { letter: "D", text: "messy" }
          ],
          correct: "A"
        },
        {
          id: "sluggish-b",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "Part B: Which phrase from the passage best supports the answer to Part A about sluggish?",
          choices: [
            { letter: "A", text: "the hottest day of July" },
            { letter: "B", text: "only two people stopped" },
            { letter: "C", text: "a sign with huge letters" },
            { letter: "D", text: "soon a line formed" }
          ],
          correct: "B"
        },
        {
          id: "brimming",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 6, the word brimming most nearly means —",
          choices: [
            { letter: "A", text: "very shiny" },
            { letter: "B", text: "too heavy" },
            { letter: "C", text: "full to the top" },
            { letter: "D", text: "tightly locked" }
          ],
          correct: "C"
        },
        {
          id: "squeezed",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 5, the word squeezed most nearly means —",
          choices: [
            { letter: "A", text: "sliced thin" },
            { letter: "B", text: "washed off" },
            { letter: "C", text: "picked ripe" },
            { letter: "D", text: "pressed hard" }
          ],
          correct: "D"
        },
        {
          id: "quarters",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 6, the author describes quarters spilling onto the grass to show that the jar was —",
          choices: [
            { letter: "A", text: "knocked over" },
            { letter: "B", text: "extremely full" },
            { letter: "C", text: "made of glass" },
            { letter: "D", text: "too small to carry" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "nj5-t-snow-day-pair",
      family: "NJ5",
      title: "Snow Day: Notice + Story",
      kind: "Paired texts · RL/RI.5",
      blurb: "The school's snow rules, and one boy waiting for the six o'clock call.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Snow Day Rules</strong></p>" +
        "<p>" + N(1) + "When heavy snow is expected, the school district decides by 6:00 a.m. whether to close. " +
        N(2) + "Families get a text message and a phone call. " +
        N(3) + "If school closes, all clubs and practices are canceled too. " +
        N(4) + "Missed days are made up in June.</p>" +
        "<p><strong>Text 2 — The Six O'Clock Call</strong></p>" +
        "<p>" + N(5) + "Jonah woke at 5:45 and stared at his mother's phone. " +
        N(6) + "Outside, the snow was still falling. " +
        N(7) + "At 6:02 the phone buzzed. " +
        N(8) + "\"Closed!\" he shouted, and he ran to wake his sister. " +
        N(9) + "Then he remembered: no basketball practice today, either.</p>",
      claims: [
        {
          id: "text1",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "What is Text 1 mostly about?",
          choices: [
            { letter: "A", text: "what happens when snow closes the school" },
            { letter: "B", text: "how much snow fell last winter" },
            { letter: "C", text: "why June is a good month for make-up days" },
            { letter: "D", text: "how to sign up for text messages" }
          ],
          correct: "A"
        },
        {
          id: "jonah",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "jonah-b",
          stem: "How does Jonah feel at the end of Text 2?",
          choices: [
            { letter: "A", text: "He is happy and nothing else." },
            { letter: "B", text: "He is glad, but a little disappointed too." },
            { letter: "C", text: "He is worried about his sister." },
            { letter: "D", text: "He is angry about the snow." }
          ],
          correct: "B"
        },
        {
          id: "jonah-b",
          sol: "RL.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which sentence from Text 2 best supports the answer to Part A about Jonah?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "D"
        },
        {
          id: "rule",
          sol: "RL.CT.5.8",
          strand: "DSR",
          stem: "Which detail from Text 2 shows the rule stated in sentence 3 of Text 1?",
          choices: [
            { letter: "A", text: "Jonah wakes up at 5:45 in the morning." },
            { letter: "B", text: "The snow is still falling outside." },
            { letter: "C", text: "Jonah has no basketball practice." },
            { letter: "D", text: "The phone buzzes at 6:02." }
          ],
          correct: "C"
        },
        {
          id: "alike",
          sol: "RI.CT.5.8",
          strand: "DSR",
          stem: "Select TWO ways the two texts are alike.",
          choices: [
            { letter: "A", text: "Both tell how families find out that school is closed." },
            { letter: "B", text: "Both describe snow falling outside a window." },
            { letter: "C", text: "Both mention a time close to 6:00 in the morning." },
            { letter: "D", text: "Both explain how missed days are made up." }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "nj5-t-shadow",
      family: "NJ5",
      title: "Your Shadow Clock",
      kind: "Informational · RI.5",
      blurb: "Why your shadow is long in the morning and tiny at noon.",
      level: 1,
      passage:
        "<p>" + N(1) + "A shadow forms when something blocks light. " +
        N(2) + "Your body blocks sunlight, so a shadow appears on the ground behind you. " +
        N(3) + "The shadow changes size during the day. " +
        N(4) + "In the early morning, the sun is low in the sky, and your shadow stretches long and thin. " +
        N(5) + "At noon, the sun is high overhead, and your shadow shrinks to a small puddle at your feet. " +
        N(6) + "By evening, it grows long again. " +
        N(7) + "Long ago, people used shadows to tell time before clocks were invented.</p>",
      claims: [
        {
          id: "noon",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "noon-b",
          stem: "According to the article, why is a shadow short at noon?",
          choices: [
            { letter: "A", text: "The sun is high overhead." },
            { letter: "B", text: "The sun is hidden by clouds." },
            { letter: "C", text: "People stand still at noon." },
            { letter: "D", text: "The ground is warm at noon." }
          ],
          correct: "A"
        },
        {
          id: "noon-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about noon shadows?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "C"
        },
        {
          id: "main",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "Which statement best tells the main idea of the article?",
          choices: [
            { letter: "A", text: "Clocks are better than shadows for telling time." },
            { letter: "B", text: "Shadows change with the position of the sun." },
            { letter: "C", text: "Morning is the best time to see a shadow." },
            { letter: "D", text: "Everything that blocks light makes a shadow." }
          ],
          correct: "B"
        },
        {
          id: "puddle",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 5, the author calls the shadow a small puddle to show that it is —",
          choices: [
            { letter: "A", text: "wet like rainwater" },
            { letter: "B", text: "cold and dark" },
            { letter: "C", text: "round and blue" },
            { letter: "D", text: "small and near the feet" }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "How does the author organize sentences 4 through 6?",
          choices: [
            { letter: "A", text: "by listing problems and solutions" },
            { letter: "B", text: "by describing shadows at different times of day" },
            { letter: "C", text: "by comparing shadows and clocks" },
            { letter: "D", text: "by telling a story about one person" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── SHORT (nights 9–20) ───────────────────────── */
    {
      id: "nj5-s-volcano",
      family: "NJ5",
      title: "The Volcano That Would Not Erupt",
      kind: "Literature · RL.5",
      blurb: "Priya's science fair volcano fails, and a judge asks her one question.",
      level: 2,
      passage:
        "<p>" + N(1) + "Priya had built her science fair volcano out of clay, and it was beautiful. " +
        N(2) + "It had painted rivers of red down its sides and a crater on top. " +
        N(3) + "When the judges came to her table, she poured in the vinegar and stepped back. " +
        N(4) + "Nothing happened. " +
        N(5) + "She poured in more. " +
        N(6) + "Still nothing.</p>" +
        "<p>" + N(7) + "One judge, an older man with a gray beard, leaned closer. " +
        N(8) + "\"What do you think went wrong?\" he asked. " +
        N(9) + "Priya's cheeks burned. " +
        N(10) + "She wanted to say the vinegar was bad, but she looked at the crater and thought. " +
        N(11) + "\"I think I forgot the baking soda,\" she said. " +
        N(12) + "\"Without it, there's nothing for the vinegar to react with.\" " +
        N(13) + "The judge nodded and wrote something on his clipboard.</p>" +
        "<p>" + N(14) + "Priya did not win a ribbon that day. " +
        N(15) + "But when the scores came back, next to \"Understands the science\" the judge had written: \"Yes. Completely.\"</p>",
      claims: [
        {
          id: "fail",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "fail-b",
          stem: "Why does Priya's volcano fail to erupt?",
          choices: [
            { letter: "A", text: "The vinegar was too old." },
            { letter: "B", text: "She forgot to add the baking soda." },
            { letter: "C", text: "The clay blocked the crater." },
            { letter: "D", text: "The judge poured in too much." }
          ],
          correct: "B"
        },
        {
          id: "fail-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the answer to Part A about the volcano?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "D"
        },
        {
          id: "lesson",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "What lesson does the story teach?",
          choices: [
            { letter: "A", text: "Winning a ribbon is the point of a science fair." },
            { letter: "B", text: "Beautiful projects always score the highest." },
            { letter: "C", text: "Understanding a mistake matters more than hiding it." },
            { letter: "D", text: "Judges are usually unfair to young students." }
          ],
          correct: "C"
        },
        {
          id: "react",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 12, the word react most nearly means —",
          choices: [
            { letter: "A", text: "to change when mixed together" },
            { letter: "B", text: "to answer a question" },
            { letter: "C", text: "to move away quickly" },
            { letter: "D", text: "to melt in heat" }
          ],
          correct: "A"
        },
        {
          id: "cheeks",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 9, the phrase Priya's cheeks burned shows that she feels —",
          choices: [
            { letter: "A", text: "hot from the bright lights" },
            { letter: "B", text: "proud of her work" },
            { letter: "C", text: "angry at the judge" },
            { letter: "D", text: "embarrassed" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "The author includes sentences 14 and 15 mainly to —",
          choices: [
            { letter: "A", text: "show that Priya lost because of the judge" },
            { letter: "B", text: "show that Priya's honest answer was noticed" },
            { letter: "C", text: "explain how ribbons are awarded" },
            { letter: "D", text: "describe the other projects at the fair" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "nj5-s-kitchen-poem",
      family: "NJ5",
      title: "Sunday Kitchen",
      kind: "Poetry · RL.5",
      blurb: "Cinnamon, cracked eggs, and a grandmother who lets you try again.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Sunday mornings smell like cinnamon,<br>" +
        L(2) + "like butter melting in a pan.<br>" +
        L(3) + "Grandma hums a song with no words<br>" +
        L(4) + "and taps the beat with a wooden spoon.<br>" +
        L(5) + "She lets me crack the eggs myself,<br>" +
        L(6) + "even the ones that splash the floor.<br>" +
        L(7) + "\"That's how we learn,\" she says, and laughs,<br>" +
        L(8) + "and hands me another egg, and one more.<br>" +
        L(9) + "When the pancakes rise, golden and round,<br>" +
        L(10) + "the whole house wakes to the smell of us.</p>",
      claims: [
        {
          id: "grandma",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "grandma-b",
          stem: "Which word best describes Grandma in the poem?",
          choices: [
            { letter: "A", text: "strict" },
            { letter: "B", text: "patient" },
            { letter: "C", text: "sleepy" },
            { letter: "D", text: "hurried" }
          ],
          correct: "B"
        },
        {
          id: "grandma-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which lines best support the answer to Part A about Grandma?",
          choices: [
            { letter: "A", text: "lines 1 and 2" },
            { letter: "B", text: "lines 3 and 4" },
            { letter: "C", text: "lines 7 and 8" },
            { letter: "D", text: "lines 9 and 10" }
          ],
          correct: "C"
        },
        {
          id: "cinnamon",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In line 1, the poet says Sunday mornings smell like cinnamon to show that —",
          choices: [
            { letter: "A", text: "Grandma is cooking something sweet" },
            { letter: "B", text: "the house is being cleaned" },
            { letter: "C", text: "the speaker is still dreaming" },
            { letter: "D", text: "the kitchen window is open" }
          ],
          correct: "A"
        },
        {
          id: "about",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "Which statement best tells what the poem is mostly about?",
          choices: [
            { letter: "A", text: "a family that eats pancakes every day" },
            { letter: "B", text: "a grandmother who sings to a baby" },
            { letter: "C", text: "a kitchen that needs to be cleaned" },
            { letter: "D", text: "a child learning to cook with Grandma on Sundays" }
          ],
          correct: "D"
        },
        {
          id: "repeat",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "Why does the poet write and hands me another egg, and one more in line 8?",
          choices: [
            { letter: "A", text: "to show that Grandma has too many eggs" },
            { letter: "B", text: "to show that Grandma keeps giving the speaker chances" },
            { letter: "C", text: "to show that the speaker is tired of cooking" },
            { letter: "D", text: "to show that the pancakes need many eggs" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "nj5-s-napkin-map",
      family: "NJ5",
      title: "The Napkin Map",
      kind: "Literature · RL.5",
      blurb: "Wei keeps getting lost at his new school until someone fixes his map.",
      level: 1,
      passage:
        "<p>" + N(1) + "On Wei's first day at Elm Grove School, everything was in the wrong place. " +
        N(2) + "The library was where he expected the gym to be. " +
        N(3) + "The bathrooms were down a hallway he could not find twice. " +
        N(4) + "At lunch, he sat alone and drew a map on his napkin.</p>" +
        "<p>" + N(5) + "A girl named Sofia sat down across from him. " +
        N(6) + "\"You're drawing the school,\" she said. " +
        N(7) + "\"You got the art room wrong. It's over here.\" " +
        N(8) + "She took his pencil and fixed it. " +
        N(9) + "Then she added a star by the cafeteria. " +
        N(10) + "\"What's that?\" Wei asked. " +
        N(11) + "\"That's where you met me,\" Sofia said.</p>" +
        "<p>" + N(12) + "By Friday, Wei did not need the map anymore. " +
        N(13) + "But he kept the napkin in his desk anyway.</p>",
      claims: [
        {
          id: "why-map",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "why-map-b",
          stem: "Why does Wei draw a map at lunch?",
          choices: [
            { letter: "A", text: "He wants to become an artist." },
            { letter: "B", text: "He keeps getting lost in the new school." },
            { letter: "C", text: "Sofia asked him to draw one." },
            { letter: "D", text: "His teacher gave the class an assignment." }
          ],
          correct: "B"
        },
        {
          id: "why-map-b",
          sol: "RL.CR.5.1",
          strand: "RL",
          stem: "Part B: Which sentence best supports the answer to Part A about the map?",
          choices: [
            { letter: "A", text: "Sentence 3: The bathrooms were down a hallway he could not find twice." },
            { letter: "B", text: "Sentence 6: \"You're drawing the school,\" she said." },
            { letter: "C", text: "Sentence 9: Then she added a star by the cafeteria." },
            { letter: "D", text: "Sentence 13: But he kept the napkin in his desk anyway." }
          ],
          correct: "A"
        },
        {
          id: "keep",
          sol: "RL.IT.5.3",
          strand: "RL",
          stem: "Why does Wei keep the napkin in his desk?",
          choices: [
            { letter: "A", text: "He still gets lost sometimes." },
            { letter: "B", text: "His teacher told him to." },
            { letter: "C", text: "It reminds him of making a friend." },
            { letter: "D", text: "He plans to add more rooms to it." }
          ],
          correct: "C"
        },
        {
          id: "expected",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 2, the word expected most nearly means —",
          choices: [
            { letter: "A", text: "asked someone for" },
            { letter: "B", text: "remembered from before" },
            { letter: "C", text: "wanted very much" },
            { letter: "D", text: "thought would be there" }
          ],
          correct: "D"
        },
        {
          id: "friday",
          sol: "RL.TS.5.4",
          strand: "RL",
          stem: "The author includes sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "show that Wei has learned his way around" },
            { letter: "B", text: "explain why Sofia drew the star" },
            { letter: "C", text: "describe the school's long hallways" },
            { letter: "D", text: "tell why Wei sat alone at lunch" }
          ],
          correct: "A"
        },
        {
          id: "lesson",
          sol: "RL.CI.5.2",
          strand: "RL",
          stem: "Which statement best expresses a lesson of the story?",
          choices: [
            { letter: "A", text: "Maps are the best way to learn a new school." },
            { letter: "B", text: "A new place feels smaller once you make a friend." },
            { letter: "C", text: "Lunch is the most important part of the day." },
            { letter: "D", text: "It is best to explore a new school alone." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "nj5-s-sea-turtles",
      family: "NJ5",
      title: "A Turtle's Long Trip Home",
      kind: "Informational · RI.5",
      blurb: "How a sea turtle finds the beach where she was born.",
      level: 1,
      passage:
        "<p>" + N(1) + "A female sea turtle spends almost her whole life in the ocean. " +
        N(2) + "But when it is time to lay eggs, she swims back to the very beach where she was born. " +
        N(3) + "Scientists believe she finds it by sensing Earth's magnetic field, the same force that moves a compass needle. " +
        N(4) + "She crawls up the sand at night, digs a hole with her back flippers, and lays about one hundred eggs. " +
        N(5) + "Then she covers the nest and returns to the sea.</p>" +
        "<p>" + N(6) + "Two months later, the baby turtles hatch. " +
        N(7) + "They dig up through the sand together and race toward the water. " +
        N(8) + "Bright lights from houses and roads can confuse them, so many beach towns turn off lights near nests during hatching season. " +
        N(9) + "Only about one baby in a thousand grows up to be an adult. " +
        N(10) + "Those few remember the beach, and one day the mothers among them return.</p>",
      claims: [
        {
          id: "find",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "find-b",
          stem: "According to the article, how does a mother turtle find the beach where she was born?",
          choices: [
            { letter: "A", text: "She follows other turtles." },
            { letter: "B", text: "She follows bright lights on the shore." },
            { letter: "C", text: "She remembers the smell of the sand." },
            { letter: "D", text: "She senses Earth's magnetic field." }
          ],
          correct: "D"
        },
        {
          id: "find-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about how the turtle finds the beach?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "B"
        },
        {
          id: "lights",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "Why do some beach towns turn off lights during hatching season?",
          choices: [
            { letter: "A", text: "to save electricity" },
            { letter: "B", text: "to help scientists count the nests" },
            { letter: "C", text: "to keep the baby turtles from getting confused" },
            { letter: "D", text: "to keep people off the beach at night" }
          ],
          correct: "C"
        },
        {
          id: "confuse",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 8, the word confuse most nearly means —",
          choices: [
            { letter: "A", text: "mix up" },
            { letter: "B", text: "frighten" },
            { letter: "C", text: "burn" },
            { letter: "D", text: "slow down" }
          ],
          correct: "A"
        },
        {
          id: "main",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "What is the article mainly about?",
          choices: [
            { letter: "A", text: "why compasses point north" },
            { letter: "B", text: "how sea turtles return to their birth beach" },
            { letter: "C", text: "why baby turtles are in danger from lights" },
            { letter: "D", text: "how many eggs a sea turtle lays" }
          ],
          correct: "B"
        },
        {
          id: "thousand",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "The author includes sentence 9 mainly to —",
          choices: [
            { letter: "A", text: "show how few turtles survive to become adults" },
            { letter: "B", text: "explain why turtles lay their eggs at night" },
            { letter: "C", text: "describe how fast baby turtles can run" },
            { letter: "D", text: "prove that lights do not harm turtles" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "nj5-s-bike-lane",
      family: "NJ5",
      title: "A Bike Lane for Oak Street?",
      kind: "Informational · RI.5",
      blurb: "Neighbors give reasons for and against a bike lane, and the council decides.",
      level: 2,
      passage:
        "<p>" + N(1) + "Last month, the town council asked residents whether Oak Street should get a bike lane. " +
        N(2) + "Many neighbors said yes, and they gave three main reasons. " +
        N(3) + "First, Oak Street is the shortest route between the middle school and the library, and students ride it every day. " +
        N(4) + "Second, a lane painted on the road would give bikes their own space, so cars and bikes would not have to share. " +
        N(5) + "Third, a study of nearby towns found that streets with bike lanes had fewer crashes.</p>" +
        "<p>" + N(6) + "Some residents disagreed. " +
        N(7) + "They worried that a bike lane would take away parking spots in front of their homes.</p>" +
        "<p>" + N(8) + "The council listened to both sides. " +
        N(9) + "It decided to try the lane for one year and count how many people use it. " +
        N(10) + "If the numbers are low, the parking spots will come back.</p>",
      claims: [
        {
          id: "reason",
          sol: "RI.AA.5.7",
          strand: "RI",
          partB: "reason-b",
          stem: "Which reason do supporters give for a bike lane on Oak Street?",
          choices: [
            { letter: "A", text: "Oak Street has too many parking spots." },
            { letter: "B", text: "Streets with bike lanes have had fewer crashes." },
            { letter: "C", text: "The library asked for the lane." },
            { letter: "D", text: "Cars on Oak Street drive too fast." }
          ],
          correct: "B"
        },
        {
          id: "reason-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about the supporters' reason?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "worry",
          sol: "RI.AA.5.7",
          strand: "RI",
          stem: "What is the main worry of the residents who disagree?",
          choices: [
            { letter: "A", text: "losing parking spots" },
            { letter: "B", text: "students riding too fast" },
            { letter: "C", text: "the cost of the paint" },
            { letter: "D", text: "more crashes on the street" }
          ],
          correct: "A"
        },
        {
          id: "first",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "The author uses the words First, Second, and Third in sentences 3 through 5 mainly to —",
          choices: [
            { letter: "A", text: "show the order in which events happened" },
            { letter: "B", text: "compare three different streets" },
            { letter: "C", text: "explain the council's final decision" },
            { letter: "D", text: "list the reasons the neighbors gave" }
          ],
          correct: "D"
        },
        {
          id: "council",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "How does the council respond to the two sides?",
          choices: [
            { letter: "A", text: "It builds the lane for good." },
            { letter: "B", text: "It rejects the bike lane." },
            { letter: "C", text: "It tests the lane for a year before deciding." },
            { letter: "D", text: "It moves the lane to another street." }
          ],
          correct: "C"
        },
        {
          id: "residents",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 1, the word residents most nearly means —",
          choices: [
            { letter: "A", text: "people who live in a place" },
            { letter: "B", text: "members of the council" },
            { letter: "C", text: "students at the school" },
            { letter: "D", text: "people who ride bikes" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "nj5-s-bread-rises",
      family: "NJ5",
      title: "Why Bread Rises",
      kind: "Informational · RI.5",
      blurb: "Tiny living yeast, a little gas, and a lot of bubbles.",
      level: 1,
      passage:
        "<p>" + N(1) + "Have you ever watched bread dough grow in a bowl? " +
        N(2) + "The secret is yeast. " +
        N(3) + "Yeast is a living thing so small that you need a microscope to see it. " +
        N(4) + "When a baker mixes yeast with flour and warm water, the yeast wakes up and begins to eat the sugar in the flour. " +
        N(5) + "As it eats, it gives off a gas called carbon dioxide. " +
        N(6) + "The gas makes tiny bubbles inside the dough.</p>" +
        "<p>" + N(7) + "The dough is stretchy, so it traps the bubbles instead of letting them escape. " +
        N(8) + "Over an hour or two, thousands of bubbles push the dough up until it is twice its size. " +
        N(9) + "In the hot oven, the bubbles set in place. " +
        N(10) + "That is why a slice of bread is full of little holes. " +
        N(11) + "Bakers call this rising, and without it, bread would be as flat and hard as a cracker.</p>",
      claims: [
        {
          id: "bubbles",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "bubbles-b",
          stem: "According to the article, what makes the bubbles inside the dough?",
          choices: [
            { letter: "A", text: "heat from the oven" },
            { letter: "B", text: "water mixed with flour" },
            { letter: "C", text: "the baker stirring quickly" },
            { letter: "D", text: "gas given off by the yeast" }
          ],
          correct: "D"
        },
        {
          id: "bubbles-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about the bubbles?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "B"
        },
        {
          id: "trap",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "Why does the dough trap the bubbles instead of letting them out?",
          choices: [
            { letter: "A", text: "It is stretchy." },
            { letter: "B", text: "It is cold." },
            { letter: "C", text: "It is in a covered bowl." },
            { letter: "D", text: "It is salty." }
          ],
          correct: "A"
        },
        {
          id: "set",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 9, the word set most nearly means —",
          choices: [
            { letter: "A", text: "a group of things" },
            { letter: "B", text: "placed on a table" },
            { letter: "C", text: "became firm" },
            { letter: "D", text: "went down" }
          ],
          correct: "C"
        },
        {
          id: "question",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "Why does the author begin the article with a question?",
          choices: [
            { letter: "A", text: "to get the reader interested in the topic" },
            { letter: "B", text: "to prove that yeast is alive" },
            { letter: "C", text: "to compare bread and crackers" },
            { letter: "D", text: "to explain how ovens work" }
          ],
          correct: "A"
        },
        {
          id: "sum",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "Which statement best sums up the article?",
          choices: [
            { letter: "A", text: "Bakers need microscopes to see yeast." },
            { letter: "B", text: "Bread has holes because it is baked in a hot oven." },
            { letter: "C", text: "Crackers are flatter than bread." },
            { letter: "D", text: "Yeast makes gas that causes bread dough to rise." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "nj5-s-fun-run-vocab",
      family: "NJ5",
      title: "The Fun Run",
      kind: "Vocabulary · L.5",
      blurb: "Leo starts too fast, learns to pace himself, and finishes; three words to work out from context.",
      level: 2,
      passage:
        "<p>" + N(1) + "The Maple Hill Fun Run started at eight o'clock sharp, and Leo was at the front of the crowd. " +
        N(2) + "He had trained for a month, jogging around the park every evening until the loop felt <strong>effortless</strong>. " +
        N(3) + "When the horn blew, hundreds of feet pounded the pavement. " +
        N(4) + "Leo ran the first mile fast, too fast, and by the second mile his legs felt like wet sand.</p>" +
        "<p>" + N(5) + "An older runner in a green cap <strong>glided</strong> past him, moving so smoothly that her feet hardly seemed to touch the ground. " +
        N(6) + "\"Slow and steady,\" she called over her shoulder. " +
        N(7) + "Leo slowed down. " +
        N(8) + "He found a pace he could keep, and his breathing settled.</p>" +
        "<p>" + N(9) + "At the finish line, he was not first, or even close. " +
        N(10) + "But he crossed it still running, and his mother was there, <strong>beaming</strong> so widely that he could see her smile from a block away.</p>",
      claims: [
        {
          id: "effortless",
          sol: "L.VL.5.2",
          strand: "RV",
          partB: "effortless-b",
          stem: "In sentence 2, the word effortless most nearly means —",
          choices: [
            { letter: "A", text: "easy" },
            { letter: "B", text: "very tiring" },
            { letter: "C", text: "boring" },
            { letter: "D", text: "long" }
          ],
          correct: "A"
        },
        {
          id: "effortless-b",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "Part B: Which phrase from the passage best supports the answer to Part A about effortless?",
          choices: [
            { letter: "A", text: "at the front of the crowd" },
            { letter: "B", text: "trained for a month" },
            { letter: "C", text: "hundreds of feet pounded" },
            { letter: "D", text: "too fast" }
          ],
          correct: "B"
        },
        {
          id: "glided",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 5, the word glided most nearly means —",
          choices: [
            { letter: "A", text: "stumbled over" },
            { letter: "B", text: "shouted loudly" },
            { letter: "C", text: "moved smoothly" },
            { letter: "D", text: "stopped short" }
          ],
          correct: "C"
        },
        {
          id: "suffix",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 2, the suffix -less in effortless tells the reader that the loop took —",
          choices: [
            { letter: "A", text: "less time" },
            { letter: "B", text: "more effort" },
            { letter: "C", text: "a long time" },
            { letter: "D", text: "no effort" }
          ],
          correct: "D"
        },
        {
          id: "beaming",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 10, the word beaming most nearly means —",
          choices: [
            { letter: "A", text: "shining a flashlight" },
            { letter: "B", text: "smiling brightly" },
            { letter: "C", text: "waving both arms" },
            { letter: "D", text: "shouting loudly" }
          ],
          correct: "B"
        },
        {
          id: "sand",
          sol: "L.VI.5.3",
          strand: "RV",
          stem: "In sentence 4, the author says Leo's legs felt like wet sand to show that they were —",
          choices: [
            { letter: "A", text: "cold and damp" },
            { letter: "B", text: "heavy and tired" },
            { letter: "C", text: "covered in dirt" },
            { letter: "D", text: "light and quick" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "nj5-s-crows-pair",
      family: "NJ5",
      title: "Crows: Article + Story",
      kind: "Paired texts · RL/RI.5",
      blurb: "What scientists know about clever crows, and the gift one crow may have left.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Smart Birds</strong></p>" +
        "<p>" + N(1) + "Crows are among the smartest birds in the world. " +
        N(2) + "Scientists have watched crows bend wire into hooks to pull food out of tubes. " +
        N(3) + "Crows also remember faces. " +
        N(4) + "In one study, people wore a mask while catching crows. " +
        N(5) + "For years afterward, crows scolded anyone who wore that mask, even people who had never touched a bird. " +
        N(6) + "Crows warn each other about danger with loud calls. " +
        N(7) + "They may even bring small gifts, like buttons or shiny stones, to people who feed them.</p>" +
        "<p><strong>Text 2 — The Gift</strong></p>" +
        "<p>" + N(8) + "Every morning, Rosa scattered peanuts on the porch rail for the crow she called Inky. " +
        N(9) + "He came at seven, feathers shining like oil, and watched her with one bright eye. " +
        N(10) + "One May morning, Rosa found something on the rail beside the empty shells. " +
        N(11) + "It was a tiny silver key. " +
        N(12) + "\"Inky?\" she whispered. " +
        N(13) + "The crow tilted his head, then flew off. " +
        N(14) + "Rosa keeps the key in a jar by her bed, next to a blue marble and a bottle cap.</p>",
      claims: [
        {
          id: "main1",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "What is the main idea of Text 1?",
          choices: [
            { letter: "A", text: "Crows scold people who wear masks." },
            { letter: "B", text: "Crows are clever birds that can learn and remember." },
            { letter: "C", text: "Crows like peanuts more than other foods." },
            { letter: "D", text: "Scientists catch crows to study them." }
          ],
          correct: "B"
        },
        {
          id: "key",
          sol: "RL.IT.5.3",
          strand: "RL",
          partB: "key-b",
          stem: "In Text 2, why does Rosa think the key came from Inky?",
          choices: [
            { letter: "A", text: "The key was next to the peanut shells on the rail." },
            { letter: "B", text: "She saw him drop it from the sky." },
            { letter: "C", text: "The key had feathers stuck to it." },
            { letter: "D", text: "Her neighbor told her he had seen it." }
          ],
          correct: "A"
        },
        {
          id: "key-b",
          sol: "RL.CR.5.1",
          strand: "DSR",
          stem: "Part B: Which sentence from Text 2 best supports the answer to Part A about the key?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "B"
        },
        {
          id: "explain",
          sol: "RL.CT.5.8",
          strand: "DSR",
          stem: "Which sentence from Text 1 best explains what happens in Text 2?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "RI.CT.5.8",
          strand: "DSR",
          stem: "Select TWO ways the two texts are different.",
          choices: [
            { letter: "A", text: "Text 1 gives facts; Text 2 tells a story about one person." },
            { letter: "B", text: "Text 1 is about crows; Text 2 is about a different bird." },
            { letter: "C", text: "Text 2 describes what a crow looks like; Text 1 does not." },
            { letter: "D", text: "Text 2 says that crows are not smart." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "scolded",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 5, the word scolded most nearly means —",
          choices: [
            { letter: "A", text: "fed peanuts to" },
            { letter: "B", text: "followed quietly" },
            { letter: "C", text: "yelled at angrily" },
            { letter: "D", text: "hid away from" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
