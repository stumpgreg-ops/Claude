/* SOL Labyrinth — New Jersey grade 5 (NJSLA-ELA) informational packs, strand RI.
 * Original articles, functional texts and short opinion pieces for ten-year-olds.
 * No published text, no real people. Loaded after content.js; pushes into the
 * live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── INFORMATIONAL ───────────────────────── */
    {
      id: "nj5-ri-moon",
      family: "NJ5",
      title: "Footprints on the Moon",
      kind: "Informational · RI.5",
      blurb: "Why a boot print on the Moon can last for millions of years.",
      level: 1,
      passage:
        "<p>" + N(1) + "On Earth, a footprint in the sand does not last long. " +
        N(2) + "Wind blows the sand around, and rain washes it away. " +
        N(3) + "On the Moon, a footprint can last for millions of years. " +
        N(4) + "Why is that? " +
        N(5) + "The Moon has almost no air. " +
        N(6) + "Without air, there is no wind to blow the dust. " +
        N(7) + "There is also no rain, because there are no clouds. " +
        N(8) + "The ground on the Moon is covered with a fine gray dust called regolith. " +
        N(9) + "It is made of tiny bits of rock that were crushed by space rocks hitting the surface. " +
        N(10) + "When something presses into this dust, the shape stays. " +
        N(11) + "Astronauts who walked on the Moon left boot prints that are still there today.</p>" +
        "<p>" + N(12) + "The Moon's lack of air causes other surprises, too. " +
        N(13) + "Sound needs air to travel, so the Moon is silent. " +
        N(14) + "The sky looks black even in the daytime, because there is no air to scatter the sunlight. " +
        N(15) + "Temperatures swing wildly. " +
        N(16) + "In sunlight, the ground can get hotter than boiling water. " +
        N(17) + "In shadow, it can drop far below freezing. " +
        N(18) + "Air on Earth acts like a blanket that keeps the planet from getting too hot or too cold. " +
        N(19) + "The Moon has no blanket.</p>" +
        "<p>" + N(20) + "Scientists study the Moon's dust to learn about the past. " +
        N(21) + "Because nothing blows the dust around, the surface is like a record that is never erased. " +
        N(22) + "A footprint made last week and one made fifty years ago look almost the same.</p>",
      claims: [
        {
          id: "mainidea",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "What is the main idea of the article?",
          choices: [
            { letter: "A", text: "The Moon's lack of air changes what happens on its surface." },
            { letter: "B", text: "Astronauts left boot prints on the Moon many years ago." },
            { letter: "C", text: "Earth's air works like a blanket that holds in heat." },
            { letter: "D", text: "Scientists want to send more people to walk on the Moon." }
          ],
          correct: "A",
          partB: "mainidea-b"
        },
        {
          id: "mainidea-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the article best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "C"
        },
        {
          id: "cause",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "According to the article, why does a footprint on the Moon last so long?",
          choices: [
            { letter: "A", text: "The dust on the Moon is stickier than sand on Earth." },
            { letter: "B", text: "There is no wind or rain to disturb the dust." },
            { letter: "C", text: "The astronauts' boots pressed down very hard." },
            { letter: "D", text: "The ground on the Moon is frozen solid all the time." }
          ],
          correct: "B",
          partB: "cause-b"
        },
        {
          id: "cause-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which pair of sentences gives the best evidence for the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentences 1 and 2" },
            { letter: "B", text: "Sentences 6 and 7" },
            { letter: "C", text: "Sentences 8 and 9" },
            { letter: "D", text: "Sentences 16 and 17" }
          ],
          correct: "B"
        },
        {
          id: "wordmean",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 14, the word scatter most nearly means —",
          choices: [
            { letter: "A", text: "block from reaching the ground" },
            { letter: "B", text: "make much brighter" },
            { letter: "C", text: "warm up very slowly" },
            { letter: "D", text: "spread out in many directions" }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "RI.AA.5.7",
          strand: "RI",
          stem: "The author includes sentence 18 mainly to —",
          choices: [
            { letter: "A", text: "explain why Earth does not get as hot or as cold as the Moon" },
            { letter: "B", text: "describe what astronauts wear to stay warm on the Moon" },
            { letter: "C", text: "show that the Moon is much smaller than Earth" },
            { letter: "D", text: "prove that the dust on the Moon is very old" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "nj5-ri-octopus",
      family: "NJ5",
      title: "Master of Disguise",
      kind: "Informational · RI.5",
      blurb: "How a soft, boneless octopus vanishes in plain sight.",
      level: 2,
      passage:
        "<p>" + N(1) + "An octopus has no bones, no shell, and no claws. " +
        N(2) + "So how does such a soft animal stay safe from hungry fish? " +
        N(3) + "Its answer is to disappear.</p>" +
        "<p>" + N(4) + "The skin of an octopus is packed with tiny sacs of color. " +
        N(5) + "Each sac can open wide or squeeze shut in a split second. " +
        N(6) + "When the sacs open, the skin looks dark. " +
        N(7) + "When they close, the skin looks pale. " +
        N(8) + "By opening some sacs and closing others, the octopus can copy the pattern of nearby sand, rock, or coral. " +
        N(9) + "Color is only part of the trick. " +
        N(10) + "An octopus can also change the texture of its skin. " +
        N(11) + "Small bumps rise so the skin looks rough like a rock, or flatten so it looks smooth like a shell. " +
        N(12) + "One moment the animal is a bumpy brown lump; the next, a smooth gray patch on the sea floor.</p>" +
        "<p>" + N(13) + "Scientists were puzzled by one detail. " +
        N(14) + "Tests show that an octopus is color-blind. " +
        N(15) + "How can it match colors it cannot see? " +
        N(16) + "One idea is that its skin can sense light on its own, without the eyes.</p>" +
        "<p>" + N(17) + "Camouflage is not the only escape plan. " +
        N(18) + "If a predator gets too close, the octopus shoots out a cloud of ink. " +
        N(19) + "The ink hides the octopus and confuses the attacker's sense of smell. " +
        N(20) + "Then it squeezes through a crack no wider than a coin and is gone. " +
        N(21) + "For an animal with no armor, hiding turns out to be the best armor of all.</p>",
      claims: [
        {
          id: "mainidea",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "Which sentence best states the main idea of the article?",
          choices: [
            { letter: "A", text: "An octopus hides from danger by changing its skin and using other tricks." },
            { letter: "B", text: "An octopus has no bones, shell, or claws to protect itself." },
            { letter: "C", text: "Scientists do not understand how an octopus can see color." },
            { letter: "D", text: "An octopus can squeeze through a very small crack to escape." }
          ],
          correct: "A",
          partB: "mainidea-b"
        },
        {
          id: "mainidea-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "D"
        },
        {
          id: "sacs",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "How do the sacs of color in the skin help an octopus hide?",
          choices: [
            { letter: "A", text: "They squirt ink that darkens the water." },
            { letter: "B", text: "They release a smell that predators cannot sense." },
            { letter: "C", text: "They open and close to copy the pattern of the sea floor." },
            { letter: "D", text: "They make the skin bumpy so it feels like a rock." }
          ],
          correct: "C",
          partB: "sacs-b"
        },
        {
          id: "sacs-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the article gives the best evidence for the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "B"
        },
        {
          id: "wordmean",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 10, the word texture most nearly means —",
          choices: [
            { letter: "A", text: "the color of a surface" },
            { letter: "B", text: "the way a surface feels" },
            { letter: "C", text: "the size of an animal" },
            { letter: "D", text: "the speed of a movement" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "How does the author organize sentences 13–16?",
          choices: [
            { letter: "A", text: "by comparing the octopus to other sea animals" },
            { letter: "B", text: "by listing the steps an octopus follows to change color" },
            { letter: "C", text: "by presenting a puzzle and then a possible explanation" },
            { letter: "D", text: "by describing events in the order they happened" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "nj5-ri-pencil-b",
      family: "NJ5",
      title: "Inside a Pencil",
      kind: "Informational · RI.5",
      blurb: "There is no lead in a pencil. So what is that gray stuff, and how does it get there?",
      level: 1,
      passage:
        "<p>" + N(1) + "Pick up a pencil and look at the dark point. " +
        N(2) + "Most people call it lead, but there is no lead in it at all. " +
        N(3) + "The center of a pencil is made of graphite. " +
        N(4) + "Graphite is a soft, gray mineral dug out of the ground. " +
        N(5) + "Hundreds of years ago, people found a large deposit of it and discovered that it left dark marks on paper. " +
        N(6) + "They cut the graphite into sticks and wrapped them in string. " +
        N(7) + "Later, someone thought of gluing the sticks inside a groove cut into a piece of wood.</p>" +
        "<p>" + N(8) + "Today, pencils are made in a factory in a few steps. " +
        N(9) + "First, powdered graphite is mixed with clay and water. " +
        N(10) + "The mixture is squeezed into thin rods and baked in an oven until hard. " +
        N(11) + "The amount of clay matters. " +
        N(12) + "More clay makes a harder pencil that leaves a light line. " +
        N(13) + "Less clay makes a softer pencil that leaves a dark, smudgy line. " +
        N(14) + "That is why a pencil marked H writes lighter than one marked B. " +
        N(15) + "Next, workers lay the rods into grooves in a flat slab of wood. " +
        N(16) + "A second slab is glued on top, like the lid of a box. " +
        N(17) + "A machine then cuts the slab into separate pencils. " +
        N(18) + "Finally, each pencil is painted, and a metal band holds on the eraser.</p>" +
        "<p>" + N(19) + "One pencil can draw a line about thirty-five miles long. " +
        N(20) + "That is a lot of writing from a little stick of clay and rock.</p>",
      claims: [
        {
          id: "mainidea",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "The article is mostly about —",
          choices: [
            { letter: "A", text: "why some pencils write darker than others" },
            { letter: "B", text: "how a pencil is made and what is inside it" },
            { letter: "C", text: "the discovery of graphite hundreds of years ago" },
            { letter: "D", text: "the many uses of clay in a factory" }
          ],
          correct: "B",
          partB: "mainidea-b"
        },
        {
          id: "mainidea-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence provides the best support for the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "C"
        },
        {
          id: "clay",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "According to the article, what happens when more clay is added to the graphite mixture?",
          choices: [
            { letter: "A", text: "The pencil writes a darker line." },
            { letter: "B", text: "The rods take longer to bake." },
            { letter: "C", text: "The pencil smudges more easily." },
            { letter: "D", text: "The pencil is harder and writes lighter." }
          ],
          correct: "D",
          partB: "clay-b"
        },
        {
          id: "clay-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which detail from the article best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "B"
        },
        {
          id: "wordmean",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 5, the word deposit most nearly means —",
          choices: [
            { letter: "A", text: "a layer of material in the ground" },
            { letter: "B", text: "a payment made to a bank" },
            { letter: "C", text: "a kind of dark paint for wood" },
            { letter: "D", text: "a tool used for digging holes" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "The author organizes sentences 8–18 mainly by —",
          choices: [
            { letter: "A", text: "comparing hard pencils with soft pencils" },
            { letter: "B", text: "explaining a problem and how it was solved" },
            { letter: "C", text: "describing the steps in the order they happen" },
            { letter: "D", text: "listing reasons pencils are better than pens" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "nj5-ri-bounce",
      family: "NJ5",
      title: "Why Does a Ball Bounce?",
      kind: "Informational · RI.5",
      blurb: "The science behind a basketball's bounce, from gym floors to cold days.",
      level: 2,
      passage:
        "<p>" + N(1) + "Drop a basketball on a gym floor, and it springs right back up. " +
        N(2) + "Drop it on thick carpet, and it barely rises. " +
        N(3) + "The ball is the same, so what changed? " +
        N(4) + "The answer is energy.</p>" +
        "<p>" + N(5) + "As a ball falls, it picks up speed. " +
        N(6) + "When it hits the ground, the bottom of the ball squashes flat for an instant. " +
        N(7) + "The air inside gets squeezed, like a spring pushed down. " +
        N(8) + "Then the ball pops back into shape and pushes off the floor. " +
        N(9) + "That push is the bounce. " +
        N(10) + "A hard floor does not bend, so almost all the energy goes back into the ball. " +
        N(11) + "Soft carpet bends and soaks up some of the energy, so less is left for the bounce.</p>" +
        "<p>" + N(12) + "Temperature matters, too. " +
        N(13) + "Warm air takes up more space than cold air. " +
        N(14) + "On a hot day, the air inside pushes harder against the sides, and the ball bounces higher. " +
        N(15) + "On a cold day, the same ball feels flat and dead. " +
        N(16) + "That is why some coaches keep game balls indoors before a winter match.</p>" +
        "<p>" + N(17) + "Sports leagues use bounce tests to make sure their balls are fair. " +
        N(18) + "A basketball dropped from six feet should bounce back to about four feet. " +
        N(19) + "If it bounces too high or too low, it is not used in a game. " +
        N(20) + "Players notice the difference, even if they cannot explain it. " +
        N(21) + "A ball that bounces the same way every time lets a player focus on the game, not the ball.</p>",
      claims: [
        {
          id: "carpet",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "According to the article, why does a ball bounce lower on carpet than on a gym floor?",
          choices: [
            { letter: "A", text: "The carpet makes the ball colder." },
            { letter: "B", text: "The carpet soaks up some of the ball's energy." },
            { letter: "C", text: "The ball squashes flatter on carpet." },
            { letter: "D", text: "The air inside the ball leaks out on carpet." }
          ],
          correct: "B",
          partB: "carpet-b"
        },
        {
          id: "carpet-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the article best supports your answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "C"
        },
        {
          id: "mainidea",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "Which statement best expresses a main idea of the article?",
          choices: [
            { letter: "A", text: "Basketballs should always be stored indoors." },
            { letter: "B", text: "Sports leagues test every ball before each game." },
            { letter: "C", text: "Warm air takes up more space than cold air." },
            { letter: "D", text: "A ball's bounce depends on the surface and the air inside it." }
          ],
          correct: "D",
          partB: "mainidea-b"
        },
        {
          id: "mainidea-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentences give the best evidence for the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentences 10 and 14" },
            { letter: "B", text: "Sentences 1 and 2" },
            { letter: "C", text: "Sentences 16 and 17" },
            { letter: "D", text: "Sentences 18 and 19" }
          ],
          correct: "A"
        },
        {
          id: "wordmean",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 15, the words flat and dead are used to show that the ball —",
          choices: [
            { letter: "A", text: "has a hole in it" },
            { letter: "B", text: "does not bounce well" },
            { letter: "C", text: "is too heavy to throw" },
            { letter: "D", text: "has lost its color" }
          ],
          correct: "B"
        },
        {
          id: "example",
          sol: "RI.AA.5.7",
          strand: "RI",
          stem: "The author includes sentences 18 and 19 mainly to —",
          choices: [
            { letter: "A", text: "argue that bounce tests are unfair to players" },
            { letter: "B", text: "explain how to measure six feet in a gym" },
            { letter: "C", text: "give an example of how a bounce test works" },
            { letter: "D", text: "show that basketballs bounce higher than other balls" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL TEXTS ───────────────────────── */
    {
      id: "nj5-ri-fieldtrip",
      family: "NJ5",
      title: "Field Trip Letter",
      kind: "Functional text · RI.5",
      blurb: "A letter home about a class trip to a nature center.",
      level: 1,
      passage:
        "<p><strong>Field Trip to Pine Hollow Nature Center</strong></p>" +
        "<p>Dear Families,</p>" +
        "<p>" + N(1) + "Our class will visit Pine Hollow Nature Center on Thursday, October 16. " +
        N(2) + "We will leave school at 9:00 a.m. and return by 2:30 p.m. " +
        N(3) + "Please read the details below and return the permission slip by Friday.</p>" +
        "<p>" + N(4) + "<strong>What we will do.</strong> A guide will lead us on a two-mile walk through the woods and along the pond. " +
        N(5) + "After lunch, students will use nets to catch small pond animals and study them with magnifiers. " +
        N(6) + "Everything we catch goes back into the water.</p>" +
        "<p>" + N(7) + "<strong>What to bring.</strong> Students should wear sneakers and long pants, because parts of the trail are muddy. " +
        N(8) + "Please pack a lunch and a water bottle in a bag your child can carry. " +
        N(9) + "Glass bottles are not allowed at the center. " +
        N(10) + "A light jacket is a good idea, since the pond is shaded and cool.</p>" +
        "<p>" + N(11) + "<strong>Cost.</strong> The trip costs $6 per student. " +
        N(12) + "The fee covers the bus and the guide. " +
        N(13) + "If the cost is a problem, please write a note on the slip, and the school will help.</p>" +
        "<p>" + N(14) + "<strong>Helpers.</strong> We need four adults to walk with small groups. " +
        N(15) + "If you can join us, check the box on the slip. " +
        N(16) + "Helpers must arrive at school by 8:45 a.m.</p>" +
        "<p>" + N(17) + "<strong>Rain.</strong> The trip will happen in light rain. " +
        N(18) + "If there is thunder, we will go on Friday instead. " +
        N(19) + "Thank you for helping make this trip a success!</p>" +
        "<p>Sincerely,<br>Ms. Whitfield, Room 12</p>",
      claims: [
        {
          id: "cost",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "What should a family do if the $6 fee is a problem?",
          choices: [
            { letter: "A", text: "Write a note on the permission slip." },
            { letter: "B", text: "Keep the student at school that day." },
            { letter: "C", text: "Bring the money on the day of the trip." },
            { letter: "D", text: "Ask one of the adult helpers to pay." }
          ],
          correct: "A",
          partB: "cost-b"
        },
        {
          id: "cost-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the letter best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "C"
        },
        {
          id: "pants",
          sol: "RI.AA.5.7",
          strand: "RI",
          stem: "Why does the teacher ask students to wear sneakers and long pants?",
          choices: [
            { letter: "A", text: "The bus does not allow sandals." },
            { letter: "B", text: "The pond water is cold." },
            { letter: "C", text: "The guide requires a uniform." },
            { letter: "D", text: "The trail is muddy in places." }
          ],
          correct: "D",
          partB: "pants-b"
        },
        {
          id: "pants-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which detail from the letter best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "B"
        },
        {
          id: "wordmean",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 12, the word covers most nearly means —",
          choices: [
            { letter: "A", text: "hides from view" },
            { letter: "B", text: "pays for" },
            { letter: "C", text: "protects from rain" },
            { letter: "D", text: "puts a lid on" }
          ],
          correct: "B"
        },
        {
          id: "headings",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "The bold headings in the letter help the reader by —",
          choices: [
            { letter: "A", text: "showing which rules are the most important" },
            { letter: "B", text: "listing the events of the trip in order" },
            { letter: "C", text: "making it easy to find each kind of information" },
            { letter: "D", text: "explaining why the trip is worth the cost" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "nj5-ri-museum",
      family: "NJ5",
      title: "Discovery Hall Map Guide",
      kind: "Functional text · RI.5",
      blurb: "A floor-by-floor visitor guide to a science museum.",
      level: 2,
      passage:
        "<p><strong>Discovery Hall — Visitor Map Guide</strong></p>" +
        "<p>" + N(1) + "This guide will help you find your way around. " +
        N(2) + "The building has three floors, and the map on the back shows each one.</p>" +
        "<p>" + N(3) + "<strong>Ground Floor.</strong> The lobby, coat room, and gift shop are near the main doors. " +
        N(4) + "The Ocean Tank is at the far end of the hall. " +
        N(5) + "Divers feed the fish at 11:00 a.m. and 2:00 p.m. " +
        N(6) + "Arrive ten minutes early, because the space in front of the tank fills up fast.</p>" +
        "<p>" + N(7) + "<strong>Second Floor.</strong> Take the wide stairs or the elevator by the coat room. " +
        N(8) + "The Body Lab lets you test your grip and measure your heartbeat. " +
        N(9) + "The Weather Room has a wind tunnel that blows at forty miles per hour. " +
        N(10) + "Loose hats and papers should be left outside the tunnel.</p>" +
        "<p>" + N(11) + "<strong>Third Floor.</strong> The Star Dome shows a sky program every hour. " +
        N(12) + "Doors close when the program begins, so latecomers must wait for the next show. " +
        N(13) + "The rooftop garden is open only in warm weather.</p>" +
        "<p>" + N(14) + "<strong>Eating.</strong> Food is allowed only in the Snack Corner on the ground floor. " +
        N(15) + "You may bring your own lunch or buy one there.</p>" +
        "<p>" + N(16) + "<strong>Tips for groups.</strong> Choose a meeting spot, such as the lobby clock, before you split up. " +
        N(17) + "Please keep voices low in the Star Dome and the Ocean Tank hall, where sound carries. " +
        N(18) + "If you lose something, ask at the front desk. " +
        N(19) + "Most visitors need about two hours to see everything. " +
        N(20) + "Enjoy your visit!</p>",
      claims: [
        {
          id: "early",
          sol: "RI.IT.5.3",
          strand: "RI",
          stem: "Why does the guide suggest arriving early for the fish feeding?",
          choices: [
            { letter: "A", text: "The divers start earlier than the listed time." },
            { letter: "B", text: "The area near the tank becomes crowded quickly." },
            { letter: "C", text: "The Ocean Tank closes right after the feeding." },
            { letter: "D", text: "Tickets for the feeding sell out each day." }
          ],
          correct: "B",
          partB: "early-b"
        },
        {
          id: "early-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the guide best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "dome",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Based on the guide, what is the best plan for seeing a Star Dome program?",
          choices: [
            { letter: "A", text: "Buy a ticket at the front desk first." },
            { letter: "B", text: "Wait until the rooftop garden closes." },
            { letter: "C", text: "Leave loose items outside the door." },
            { letter: "D", text: "Arrive before the hour, while the doors are still open." }
          ],
          correct: "D",
          partB: "dome-b"
        },
        {
          id: "dome-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which part of the guide gives the best evidence for the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "B"
        },
        {
          id: "wordmean",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 17, the phrase sound carries means that —",
          choices: [
            { letter: "A", text: "noise travels far and is easy to hear" },
            { letter: "B", text: "music is played during the shows" },
            { letter: "C", text: "visitors must carry their own bags" },
            { letter: "D", text: "the rooms are completely quiet" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "How is the information in sentences 3–13 organized?",
          choices: [
            { letter: "A", text: "from the most popular exhibit to the least popular" },
            { letter: "B", text: "in the order a visitor might eat, shop, and rest" },
            { letter: "C", text: "floor by floor, from the bottom of the building to the top" },
            { letter: "D", text: "by the time of day each exhibit opens" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── OPINION ───────────────────────── */
    {
      id: "nj5-ri-recess",
      family: "NJ5",
      title: "Fifteen More Minutes",
      kind: "Opinion · RI.5",
      blurb: "A student editorial arguing for a longer recess.",
      level: 3,
      passage:
        "<p><strong>Give Us Fifteen More Minutes</strong> — a student editorial</p>" +
        "<p>" + N(1) + "Every day at 12:20, a whistle blows, and three hundred kids trudge back inside after twenty minutes of recess. " +
        N(2) + "I believe our school should make recess thirty-five minutes long. " +
        N(3) + "A longer break would help us learn more, not less.</p>" +
        "<p>" + N(4) + "Some adults think recess is wasted time. " +
        N(5) + "I understand why they worry. " +
        N(6) + "There is a lot to cover before spring tests, and every minute counts. " +
        N(7) + "But the brain is not a bucket you can fill without stopping. " +
        N(8) + "After a long stretch of sitting, kids stop paying attention. " +
        N(9) + "They fidget, whisper, and stare out the window. " +
        N(10) + "A real break lets the brain rest so it is ready to work.</p>" +
        "<p>" + N(11) + "Last month, our class counted how many times our teacher reminded us to focus. " +
        N(12) + "On indoor recess days, she gave fourteen reminders in the afternoon. " +
        N(13) + "On full outdoor recess days, she gave six.</p>" +
        "<p>" + N(14) + "Recess also teaches things that a worksheet cannot. " +
        N(15) + "On the playground, kids make the rules, pick fair teams, and settle arguments without a grown-up. " +
        N(16) + "Twenty minutes is barely enough to start a game, let alone finish one. " +
        N(17) + "By the time teams are picked, the whistle is blowing.</p>" +
        "<p>" + N(18) + "Adding fifteen minutes would not cost the school a dollar, only a change to the schedule. " +
        N(19) + "I am not asking for a day off. " +
        N(20) + "I am asking for a better day. " +
        N(21) + "Give us fifteen more minutes, and watch what we do with them.</p>",
      claims: [
        {
          id: "claim",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "What is the author's main claim in the editorial?",
          choices: [
            { letter: "A", text: "Recess should be held indoors on cold days." },
            { letter: "B", text: "Teachers give too many reminders to students." },
            { letter: "C", text: "The school should make recess longer." },
            { letter: "D", text: "Students should be allowed to skip spring tests." }
          ],
          correct: "C",
          partB: "claim-b"
        },
        {
          id: "claim-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the editorial best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "A"
        },
        {
          id: "support",
          sol: "RI.AA.5.7",
          strand: "RI",
          stem: "How does the author support the idea that a break helps students focus?",
          choices: [
            { letter: "A", text: "by quoting a doctor who studies the brain" },
            { letter: "B", text: "by describing a count of teacher reminders on different days" },
            { letter: "C", text: "by comparing this school with one that has longer recess" },
            { letter: "D", text: "by listing the games that students play at recess" }
          ],
          correct: "B",
          partB: "support-b"
        },
        {
          id: "support-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence gives the best evidence for the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: "B"
        },
        {
          id: "wordmean",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 1, the word trudge most nearly means —",
          choices: [
            { letter: "A", text: "run quickly and eagerly" },
            { letter: "B", text: "skip happily along a path" },
            { letter: "C", text: "line up neatly in rows" },
            { letter: "D", text: "walk slowly and heavily" }
          ],
          correct: "D"
        },
        {
          id: "otherside",
          sol: "RI.PP.5.5",
          strand: "RI",
          stem: "The author includes sentences 4–6 mainly to —",
          choices: [
            { letter: "A", text: "show that the author understands the other side of the argument" },
            { letter: "B", text: "explain why the spring tests matter so much to teachers" },
            { letter: "C", text: "prove that adults do not care what students think" },
            { letter: "D", text: "describe what happens on days with indoor recess" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "nj5-ri-garden",
      family: "NJ5",
      title: "A Garden Behind the Gym",
      kind: "Opinion · RI.5",
      blurb: "A fifth grader's letter asking the principal for a school garden.",
      level: 3,
      passage:
        "<p>Dear Principal Ambrose,</p>" +
        "<p>" + N(1) + "I am writing to ask that the empty patch behind the gym become a school garden. " +
        N(2) + "Right now, that space is nothing but weeds and a broken fence. " +
        N(3) + "With a little work, it could become the most useful classroom we have.</p>" +
        "<p>" + N(4) + "First, a garden would help us learn science by doing it. " +
        N(5) + "In class, we read how plants use sunlight, water, and soil. " +
        N(6) + "In a garden, we would measure how fast a bean plant grows and find the sunniest spot. " +
        N(7) + "A fact you dig up yourself is a fact you do not forget.</p>" +
        "<p>" + N(8) + "Second, the garden could feed people. " +
        N(9) + "The food pantry on Elm Street serves more than sixty families a week. " +
        N(10) + "Even a small garden can grow hundreds of tomatoes and peppers in one summer. " +
        N(11) + "Our class could deliver the harvest and see who it helps.</p>" +
        "<p>" + N(12) + "Some people might say a garden costs too much. " +
        N(13) + "I checked. " +
        N(14) + "Seeds for the whole plot would cost about forty dollars, and the hardware store on Main Street has offered to donate soil. " +
        N(15) + "Others might say no one will care for the plants over summer break. " +
        N(16) + "The community center runs a summer camp on our field, and the director told me her campers would love a watering job.</p>" +
        "<p>" + N(17) + "A garden would turn a forgotten corner into a place where students grow food, grow knowledge, and grow pride in our school. " +
        N(18) + "I would be glad to help plan it.</p>" +
        "<p>Sincerely,<br>Priya, Grade 5</p>",
      claims: [
        {
          id: "request",
          sol: "RI.CI.5.2",
          strand: "RI",
          stem: "What does the writer want the principal to do?",
          choices: [
            { letter: "A", text: "Fix the broken fence behind the gym." },
            { letter: "B", text: "Turn the empty space behind the gym into a garden." },
            { letter: "C", text: "Send students to work at the food pantry." },
            { letter: "D", text: "Start a summer camp on the school field." }
          ],
          correct: "B",
          partB: "request-b"
        },
        {
          id: "request-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the letter gives the best evidence for the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "A"
        },
        {
          id: "cost",
          sol: "RI.PP.5.5",
          strand: "RI",
          stem: "How does the writer answer people who say a garden costs too much?",
          choices: [
            { letter: "A", text: "by admitting that the cost is a real problem" },
            { letter: "B", text: "by asking the principal to pay for the garden" },
            { letter: "C", text: "by showing that the cost is low and some supplies are free" },
            { letter: "D", text: "by explaining that the food pantry will buy the seeds" }
          ],
          correct: "C",
          partB: "cost-b"
        },
        {
          id: "cost-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which detail best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "B"
        },
        {
          id: "feed",
          sol: "RI.AA.5.7",
          strand: "RI",
          stem: "Which reason does the writer give to support the idea that the garden could feed people?",
          choices: [
            { letter: "A", text: "The hardware store will donate the soil." },
            { letter: "B", text: "Campers would enjoy watering the plants." },
            { letter: "C", text: "A small garden can grow hundreds of vegetables in a summer." },
            { letter: "D", text: "Students would measure how fast bean plants grow." }
          ],
          correct: "C"
        },
        {
          id: "wordmean",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 11, the word harvest most nearly means —",
          choices: [
            { letter: "A", text: "the tools used in a garden" },
            { letter: "B", text: "the money earned from a sale" },
            { letter: "C", text: "the seeds planted in spring" },
            { letter: "D", text: "the crops that are gathered" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
