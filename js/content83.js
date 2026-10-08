/* SOL Labyrinth — v5.15 expansion: Grade 10 long passages (Virginia G10), file c83.
 * Twelve original LONG packs (385–520 words; paired 200–260 each; poem 22–28 lines) on
 * street murals, a hospital volunteer program, marine mammals and insects.
 * No VDOE / copyrighted text. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1 · Literary (level 1) · street mural ───────────── */
    {
      id: "g10-rl-c83-heron-wall",
      family: "G10",
      title: "The Heron on Fulton Street",
      kind: "Literary · 10.RL",
      blurb: "A faded laundromat mural, six volunteers, and one small yellow eye.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every morning on her way to school, Adaeze passed the heron on the side of the Suds & Spin laundromat. " +
        N(2) + "It had been painted before she was born, a gray-blue bird standing in green reeds, taller than the door beside it. " +
        N(3) + "By the spring of her sophomore year, the heron had nearly vanished. " +
        N(4) + "The sun had bleached its feathers to the color of dishwater, and someone had sprayed a looping black tag across its legs.</p>" +
        "<p>" + N(5) + "When Mrs. Okonkwo, who owned the laundromat, taped a sign in the window asking for volunteers to repaint the wall, Adaeze read it three times. " +
        N(6) + "She liked to draw, but only in the backs of her notebooks, where no one else looked. " +
        N(7) + "She almost walked away. " +
        N(8) + "Then she thought of the heron's eye, the one small yellow circle that still seemed to watch the street, and she went inside to write her name on the list.</p>" +
        "<p>" + N(9) + "Six people showed up on Saturday: two retired neighbors, a college student named Ruben, a father with his twin boys, and Adaeze. " +
        N(10) + "Ruben had brought a projector so they could trace the old outline onto the wall after dark, but on the first morning they only scrubbed. " +
        N(11) + "They scraped loose paint, washed the bricks, and filled the cracks with gray patching paste. " +
        N(12) + "By noon Adaeze's arms ached, and the wall looked worse than before, bare and blotchy like a scraped knee. " +
        N(13) + "\"This is the part nobody photographs,\" Ruben said, grinning.</p>" +
        "<p>" + N(14) + "On the second weekend, they began to paint. " +
        N(15) + "Mrs. Okonkwo asked Adaeze to handle the reeds because her lines were steady, and for a whole afternoon she painted nothing but thin green blades, one after another. " +
        N(16) + "Each blade alone looked like a mistake. " +
        N(17) + "Together, they started to sway.</p>" +
        "<p>" + N(18) + "The last thing left was the eye. " +
        N(19) + "Everyone agreed that Adaeze should paint it, and she stood on the ladder with the small brush shaking in her fingers. " +
        N(20) + "She mixed the yellow twice before it matched the old circle she had saved in a photo on her phone. " +
        N(21) + "When she climbed down, the twins were already pointing at the heron and arguing about whether it was about to fly or about to fish.</p>" +
        "<p>" + N(22) + "The following Monday, Adaeze walked past the laundromat on her way to school, the same way she always had. " +
        N(23) + "The heron stood bright in its reeds, and a woman waiting at the bus stop was taking a picture of it. " +
        N(24) + "Adaeze did not tell her who had painted the eye. " +
        N(25) + "She just slowed down a little, the way you do when you pass someone you know.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does the story of the laundromat heron best develop?",
          choices: [
            { letter: "A", text: "Old artwork should be left alone rather than changed by new painters." },
            { letter: "B", text: "Shared, patient work can restore something a community values." },
            { letter: "C", text: "Talented artists usually prefer to work alone rather than in groups." },
            { letter: "D", text: "Graffiti is the main reason city murals fade over the years." }
          ],
          correct: "B"
        },
        {
          id: "decide",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "Which sentence marks the moment Adaeze decides to join the mural project?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "C"
        },
        {
          id: "adaeze",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Sentences 6 and 7 characterize Adaeze at the start of the story as —",
          choices: [
            { letter: "A", text: "skilled at drawing but shy about letting others see it" },
            { letter: "B", text: "eager to become the leader of the volunteer crew" },
            { letter: "C", text: "annoyed that the laundromat owner waited so long" },
            { letter: "D", text: "uninterested in art until the project begins" }
          ],
          correct: "A"
        },
        {
          id: "knee",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 12, comparing the wall to a scraped knee mainly suggests that the wall —",
          choices: [
            { letter: "A", text: "was damaged by the twins during the cleanup" },
            { letter: "B", text: "will never look as good as the old painting" },
            { letter: "C", text: "needs a doctor's care more than an artist's" },
            { letter: "D", text: "looks raw and hurt while it is being prepared to heal" }
          ],
          correct: "D"
        },
        {
          id: "reeds",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "Sentences 16 and 17 about the thin green blades of the reeds mainly suggest that —",
          choices: [
            { letter: "A", text: "small efforts that seem useless alone can add up to something larger" },
            { letter: "B", text: "Adaeze is not as skilled a painter as Mrs. Okonkwo believes" },
            { letter: "C", text: "the reeds were the hardest part of the original mural to copy" },
            { letter: "D", text: "the wind outside the laundromat made painting difficult" }
          ],
          correct: "A"
        },
        {
          id: "frame",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The author begins and ends the story with Adaeze walking past the laundromat on her way to school mainly to —",
          choices: [
            { letter: "A", text: "show that her daily schedule never changes" },
            { letter: "B", text: "explain why the mural faded so quickly" },
            { letter: "C", text: "show how her bond with a familiar place has changed" },
            { letter: "D", text: "suggest that she regrets joining the project" }
          ],
          correct: "C"
        },
        {
          id: "bleached",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 4, the phrase to the color of dishwater helps show that bleached most nearly means —",
          choices: [
            { letter: "A", text: "scrubbed clean" },
            { letter: "B", text: "faded by light" },
            { letter: "C", text: "cracked by heat" },
            { letter: "D", text: "stained darker" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of the final paragraph, when Adaeze passes the finished heron, is best described as —",
          choices: [
            { letter: "A", text: "boastful and loud" },
            { letter: "B", text: "nervous and uncertain" },
            { letter: "C", text: "sad and regretful" },
            { letter: "D", text: "quietly proud" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 2 · Literary (level 3) · hospital volunteer ───────────── */
    {
      id: "g10-rl-c83-room-417",
      family: "G10",
      title: "Room 417",
      kind: "Literary · 10.RL",
      blurb: "A teen volunteer has the book cart down to a science until one patient asks for the weather.",
      level: 3,
      passage:
        "<p>" + N(1) + "Junho had the book cart down to a science. " +
        N(2) + "Fourth floor west, twenty-two rooms, a knock, a smile, a quick offer of paperbacks or puzzle books, and on to the next door; on a good Tuesday he finished in thirty-eight minutes and wrote the time in the small notebook he kept in his volunteer vest. " +
        N(3) + "He was not rushed, he told himself; he was efficient, and efficiency was a kind of kindness, since nobody who was sick wanted a teenager lingering in the doorway.</p>" +
        "<p>" + N(4) + "Room 417 broke his record. " +
        N(5) + "Mrs. Ferraz, a retired seamstress recovering from a hip operation, waved away the cart the first time he knocked. " +
        N(6) + "\"I have read everything on there twice,\" she said. " +
        N(7) + "\"Tell me what it's doing outside instead.\" " +
        N(8) + "Her bed faced the window, but the window faced the brick side of the parking garage, so close that the room was lit all day by the same flat gray. " +
        N(9) + "\"It's nice,\" Junho said. \"Sunny, I think.\" " +
        N(10) + "She looked at him the way his grandmother looked at a hem sewn crooked. " +
        N(11) + "\"Nice is not a weather,\" she said. \"Try again next week.\"</p>" +
        "<p>" + N(12) + "He meant to forget about it. " +
        N(13) + "Instead, the following Tuesday, he caught himself stopping on the walk from the bus to look up, actually look, at the sky over the river. " +
        N(14) + "It was low and lumpy, the color of oatmeal, and the wind was pushing the flags on the bank so hard that they snapped. " +
        N(15) + "He told her that, standing in her doorway, and felt foolish, and saw her close her eyes as if she were listening to music.</p>" +
        "<p>" + N(16) + "After that, the cart took longer. " +
        N(17) + "He noticed that the maples along the parking lot had gone orange from the top down, as though someone were pouring the color in slowly. " +
        N(18) + "He noticed that fog on the river did not rise all at once but peeled away in strips. " +
        N(19) + "Mrs. Ferraz corrected him when he was lazy (\"Gray how? Pigeon gray or pencil gray?\") and laughed when he was good. " +
        N(20) + "His supervisor, Ms. Delacroix, mentioned one afternoon that he was running about twenty minutes behind, and Junho said, without thinking, that he knew and it was fine. " +
        N(21) + "He did not write the time in his notebook anymore.</p>" +
        "<p>" + N(22) + "In November, Room 417 was empty, the bed stripped, the window still full of brick. " +
        N(23) + "At the nurses' station there was an envelope with his name on it. " +
        N(24) + "Inside was a page torn from a pad, covered in small, tidy handwriting: a list of dates, and beside each one, his own words, oatmeal sky, flags snapping, maples poured from the top, fog peeling in strips. " +
        N(25) + "At the bottom she had written, You delivered these. " +
        N(26) + "Junho stood holding the page beside a cart full of books nobody on the floor had asked for, and for the first time all fall he was in no hurry to move it.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is developed through Junho's visits to Room 417?",
          choices: [
            { letter: "A", text: "Hospital rules often keep volunteers from helping patients." },
            { letter: "B", text: "Older people tend to resist help from younger ones." },
            { letter: "C", text: "Close attention can be a greater gift than speed." },
            { letter: "D", text: "Reading is the best way to pass time while recovering." }
          ],
          correct: "C"
        },
        {
          id: "habit",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.2",
          stem: "Which sentence first shows Mrs. Ferraz's request beginning to change Junho's habits?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 22" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "B"
        },
        {
          id: "junho",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "In sentences 1–3, Junho is best described as —",
          choices: [
            { letter: "A", text: "proud of his speed and sure that it serves patients well" },
            { letter: "B", text: "bored by his rounds and eager to quit the program" },
            { letter: "C", text: "nervous around patients and unsure what to say" },
            { letter: "D", text: "competitive with other volunteers on the floor" }
          ],
          correct: "A"
        },
        {
          id: "hem",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 10, comparing Mrs. Ferraz's look to the way Junho's grandmother eyed a crooked hem suggests that Mrs. Ferraz —",
          choices: [
            { letter: "A", text: "is confused about what Junho has said" },
            { letter: "B", text: "wants Junho to help her with her sewing" },
            { letter: "C", text: "reminds Junho of his family back home" },
            { letter: "D", text: "judges his answer as careless and expects better" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.D",
          sub: "10.RL.2.D.2",
          stem: "What is ironic about the note Mrs. Ferraz leaves for Junho in sentences 24 and 25?",
          choices: [
            { letter: "A", text: "She praises his speed, though he was usually late." },
            { letter: "B", text: "He thought his job was books, but she valued his words." },
            { letter: "C", text: "She thanks him for books she said she would not read." },
            { letter: "D", text: "He never told her anything about the weather at all." }
          ],
          correct: "B"
        },
        {
          id: "brick",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.2",
          stem: "The author mentions the window still full of brick in sentence 22 mainly to —",
          choices: [
            { letter: "A", text: "recall how little Mrs. Ferraz could see without Junho" },
            { letter: "B", text: "suggest that the hospital needs better patient rooms" },
            { letter: "C", text: "explain why the room was given to a new patient" },
            { letter: "D", text: "show that Junho has stopped noticing his surroundings" }
          ],
          correct: "A"
        },
        {
          id: "efficient",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "In sentence 3, Junho insists he is efficient rather than rushed. Compared with rushed, the word efficient suggests that he sees his speed as —",
          choices: [
            { letter: "A", text: "careless and sloppy" },
            { letter: "B", text: "forced on him by others" },
            { letter: "C", text: "embarrassing to admit" },
            { letter: "D", text: "skilled and purposeful" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "The image in sentence 26 of Junho standing still beside a cart of unrequested books mainly creates a mood of —",
          choices: [
            { letter: "A", text: "frustrated impatience" },
            { letter: "B", text: "nervous suspense" },
            { letter: "C", text: "quiet reflection" },
            { letter: "D", text: "cheerful relief" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 3 · Informational (level 2) · harbor seals ───────────── */
    {
      id: "g10-ri-c83-seal-whiskers",
      family: "G10",
      title: "Reading the Water with Whiskers",
      kind: "Informational · 10.RI",
      blurb: "How a harbor seal finds a fish it cannot see or hear.",
      level: 2,
      passage:
        "<p>" + N(1) + "Picture a harbor seal hunting at the mouth of a river at night. " +
        N(2) + "The water is brown with silt, the moon is behind clouds, and a fish a few meters ahead makes no sound the seal can easily pick out. " +
        N(3) + "For an animal that depended on its eyes, this would be a nearly impossible place to find dinner. " +
        N(4) + "Yet harbor seals hunt in exactly these conditions, and they catch fish anyway. " +
        N(5) + "For a long time, researchers wondered how.</p>" +
        "<p>" + N(6) + "Part of the answer, scientists now believe, grows on the seal's face. " +
        N(7) + "A harbor seal has roughly forty to fifty stiff whiskers, called vibrissae, on each side of its muzzle. " +
        N(8) + "Each whisker is rooted in a follicle surrounded by more than a thousand nerve fibers, many times the number found at the base of a cat's whisker. " +
        N(9) + "The whiskers are not simply sensitive to touch; they are tuned to detect the faintest movements of the water itself.</p>" +
        "<p>" + N(10) + "Here is why that matters. " +
        N(11) + "A swimming fish does not just move through the water; it leaves a trail behind it, a wake of small swirls that can linger for several seconds after the fish has gone. " +
        N(12) + "In laboratory tests, trained seals wearing blindfolds and headphones were able to follow the hidden paths of small model submarines steered through a pool, tracking wakes that were up to thirty seconds old. " +
        N(13) + "When researchers covered the seals' whiskers with a soft stocking mask, the animals lost the trail.</p>" +
        "<p>" + N(14) + "The shape of the whiskers helps, too. " +
        N(15) + "Unlike the smooth, round whiskers of a sea lion, a harbor seal's whiskers are flattened and wavy, rising and falling along their length like a stretched ribbon. " +
        N(16) + "Engineers studying them in water tanks found that this wavy shape keeps the whisker from shaking wildly as the seal swims forward. " +
        N(17) + "The result is a quieter sensor: the seal's own movement creates less \"noise,\" so the tiny signals from a fish's wake stand out more clearly.</p>" +
        "<p>" + N(18) + "Some engineers think the design could be borrowed. " +
        N(19) + "Research groups have built underwater sensors modeled on seal whiskers, hoping they might one day help small robots track leaks or follow currents in murky harbors. " +
        N(20) + "These devices are still experimental, and it is not yet clear how well they will perform outside a laboratory.</p>" +
        "<p>" + N(21) + "For now, the seal remains the expert. " +
        N(22) + "Watching one glide through cloudy water, its head held steady and its whiskers spread forward, you are seeing an animal that is not lost in the dark at all. " +
        N(23) + "It is reading a message the fish wrote in the water seconds ago, one swirl at a time.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the article about harbor seals?",
          choices: [
            { letter: "A", text: "Harbor seals hunt mostly at night because fish are slower then." },
            { letter: "B", text: "Engineers have already replaced harbor seals in harbor research." },
            { letter: "C", text: "Sea lions and harbor seals use the same methods to catch fish." },
            { letter: "D", text: "Harbor seals use special whiskers to sense the trails of unseen fish." }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence gives the strongest evidence that the whiskers themselves, and not sight or hearing, let a seal follow a wake?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 19" }
          ],
          correct: "C"
        },
        {
          id: "uncertain",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which idea does the article present as uncertain rather than as an established result?",
          choices: [
            { letter: "A", text: "that whisker-style sensors may someday help robots in harbors" },
            { letter: "B", text: "that a seal's whisker follicle holds over a thousand nerve fibers" },
            { letter: "C", text: "that blindfolded seals tracked wakes up to thirty seconds old" },
            { letter: "D", text: "that covering the whiskers made the seals lose the trail" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How is the seal-whisker article organized as a whole?",
          choices: [
            { letter: "A", text: "It compares harbor seals with sea lions point by point throughout." },
            { letter: "B", text: "It poses a puzzle, explains the answer in stages, then notes a human use." },
            { letter: "C", text: "It tells the life story of one seal from birth to adulthood in order." },
            { letter: "D", text: "It lists several problems facing seals and offers a solution for each." }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author opens with the night-hunting scene in sentences 1–4 mainly to —",
          choices: [
            { letter: "A", text: "show how hard the problem is before explaining how seals solve it" },
            { letter: "B", text: "warn readers that river mouths are unsafe places to swim at night" },
            { letter: "C", text: "suggest that harbor seals rarely succeed when they hunt in the dark" },
            { letter: "D", text: "describe the kind of fish that harbor seals prefer to eat" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author's attitude toward the whisker-inspired sensors in sentences 18–20 is best described as —",
          choices: [
            { letter: "A", text: "openly dismissive" },
            { letter: "B", text: "wildly enthusiastic" },
            { letter: "C", text: "interested but cautious" },
            { letter: "D", text: "confused and doubtful" }
          ],
          correct: "C"
        },
        {
          id: "vibrissae",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word vibrissae in sentence 7 comes from a Latin root meaning to vibrate. Based on this root and the article, the name fits because the whiskers —",
          choices: [
            { letter: "A", text: "grow back quickly after they fall out" },
            { letter: "B", text: "help the seal keep its head held steady" },
            { letter: "C", text: "are shaped like a flat, stretched ribbon" },
            { letter: "D", text: "sense tiny shaking movements in the water" }
          ],
          correct: "D"
        },
        {
          id: "wavy",
          sol: "10.RI.2.B",
          sub: "10.RI.2.B.2",
          stem: "According to the article, how does the wavy shape of a harbor seal's whisker help it hunt?",
          choices: [
            { letter: "A", text: "It lets the whisker reach farther ahead of the seal's face." },
            { letter: "B", text: "It keeps the whisker steady so a fish's signals stand out." },
            { letter: "C", text: "It traps small fish between the folds of the whisker." },
            { letter: "D", text: "It makes the whisker harder for predators to notice." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 4 · Informational (level 1) · dung beetles ───────────── */
    {
      id: "g10-ri-c83-star-beetle",
      family: "G10",
      title: "The Beetle That Steers by the Stars",
      kind: "Informational · 10.RI",
      blurb: "A dung beetle can't see where it's going, yet it rolls a perfectly straight line.",
      level: 1,
      passage:
        "<p>" + N(1) + "Few animals have a job as plain as the dung beetle's. " +
        N(2) + "It finds a pile of animal droppings, shapes a piece into a ball, and rolls the ball away to eat it or to lay its eggs in it. " +
        N(3) + "The job sounds simple, but it comes with a problem. " +
        N(4) + "A dung pile is a crowded place, and other beetles are always ready to steal a finished ball. " +
        N(5) + "The safest plan is to roll away fast, in a straight line, so the beetle does not circle back into the crowd.</p>" +
        "<p>" + N(6) + "Rolling in a straight line is harder than it sounds. " +
        N(7) + "The beetle pushes the ball backward with its hind legs while standing on its front legs, so its head points toward the ground. " +
        N(8) + "It cannot see where it is going. " +
        N(9) + "Yet beetles in the field roll their balls along remarkably straight paths. " +
        N(10) + "Scientists wanted to know what kept them on course.</p>" +
        "<p>" + N(11) + "The first clue came in daylight. " +
        N(12) + "Before setting off, a beetle climbs on top of its ball and turns in a slow circle, a move researchers call a \"dance.\" " +
        N(13) + "Experiments showed that the beetle uses this moment to note the position of the sun. " +
        N(14) + "When scientists used a mirror to make the sun seem to appear on the other side of the sky, the beetles turned and rolled the opposite way.</p>" +
        "<p>" + N(15) + "The bigger surprise came at night. " +
        N(16) + "Some dung beetles in southern Africa work after dark, and they still roll straight lines, even on nights with no moon. " +
        N(17) + "To test what they were using, researchers placed beetles inside a small arena and fitted some of them with tiny caps that blocked their view of the sky. " +
        N(18) + "The capped beetles wandered in loops. " +
        N(19) + "The uncapped beetles rolled straight out. " +
        N(20) + "Next, the team moved the experiment into a planetarium, where they could control exactly which lights appeared overhead. " +
        N(21) + "When the dome showed only the bright band of the Milky Way, the beetles still kept a straight course. " +
        N(22) + "When it showed only a few bright stars, they lost their way.</p>" +
        "<p>" + N(23) + "The beetles cannot pick out single constellations the way a sailor might. " +
        N(24) + "Their eyes are too small for that. " +
        N(25) + "Instead, they seem to use the glowing stripe of the galaxy as a guide line. " +
        N(26) + "That makes the dung beetle the first insect known to steer by the Milky Way. " +
        N(27) + "It is a reminder that some of the most interesting discoveries in science begin with a very ordinary question, such as how a beetle rolls a ball.</p>",
      claims: [
        {
          id: "main",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "What is the main idea of the article about dung beetles?",
          choices: [
            { letter: "A", text: "Dung beetles use light in the sky, even the Milky Way, to roll straight." },
            { letter: "B", text: "Dung beetles steal balls from one another whenever they get the chance." },
            { letter: "C", text: "Planetariums are the best places to study how insects behave at night." },
            { letter: "D", text: "Dung beetles can recognize the same constellations that sailors use." }
          ],
          correct: "A"
        },
        {
          id: "why-straight",
          sol: "10.RI.2.B",
          sub: "10.RI.2.B.2",
          stem: "According to the article, why does a dung beetle try to roll its ball in a straight line?",
          choices: [
            { letter: "A", text: "to reach the spot where the sun is brightest" },
            { letter: "B", text: "to keep the ball from falling apart on the way" },
            { letter: "C", text: "to get away from beetles that might steal the ball" },
            { letter: "D", text: "to find its way back to the dung pile later" }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The author's main purpose in the dung beetle article is to —",
          choices: [
            { letter: "A", text: "persuade readers to protect beetles in southern Africa" },
            { letter: "B", text: "explain how scientists learned the way beetles find direction" },
            { letter: "C", text: "describe the life cycle of a dung beetle from egg to adult" },
            { letter: "D", text: "compare dung beetles with other insects that fly at night" }
          ],
          correct: "B"
        },
        {
          id: "experiments",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How are sentences 17–22 organized?",
          choices: [
            { letter: "A", text: "as a list of reasons beetles prefer to work at night" },
            { letter: "B", text: "as a comparison between beetles and other night insects" },
            { letter: "C", text: "as a problem followed by several possible solutions" },
            { letter: "D", text: "as a series of tests, each followed by what it showed" }
          ],
          correct: "D"
        },
        {
          id: "head-down",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author includes sentences 7 and 8 about the beetle's body position mainly to —",
          choices: [
            { letter: "A", text: "show that dung beetles are stronger than they look" },
            { letter: "B", text: "explain why steering straight is hard for the beetle" },
            { letter: "C", text: "describe how beetles shape their balls of dung" },
            { letter: "D", text: "suggest that beetles often roll in the wrong direction" }
          ],
          correct: "B"
        },
        {
          id: "closing-tone",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The tone of sentence 27, the article's closing remark about ordinary questions, is best described as —",
          choices: [
            { letter: "A", text: "appreciative" },
            { letter: "B", text: "disappointed" },
            { letter: "C", text: "sarcastic" },
            { letter: "D", text: "alarmed" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "Which sentence signals that the article is shifting from daytime research to nighttime research?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "C"
        },
        {
          id: "interpret",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which statement from the beetle article is an interpretation rather than a directly observed result?",
          choices: [
            { letter: "A", text: "The capped beetles wandered in loops." },
            { letter: "B", text: "The uncapped beetles rolled straight out." },
            { letter: "C", text: "With only a few bright stars, they lost their way." },
            { letter: "D", text: "They seem to use the galaxy's stripe as a guide line." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 5 · Vocabulary (level 1) · mural restoration ───────────── */
    {
      id: "g10-rv-c83-gym-mural",
      family: "G10",
      title: "The Girl with the Flying Braids",
      kind: "Vocabulary · 10.RV",
      blurb: "A summer intern learns that saving a mural means painting as little as possible.",
      level: 1,
      passage:
        "<p>" + N(1) + "Thao had imagined that restoring a mural would mean painting, so on her first day as a summer intern she was surprised to be handed a cotton swab. " +
        N(2) + "The mural on the gym wall of the Eastside Recreation Center showed a crowd of neighborhood kids jumping rope, and after fifty years it had badly <strong>deteriorated</strong>. " +
        N(3) + "Whole patches had flaked away, the reds had dulled to brick, and a long water stain ran down one corner like a dried tear.</p>" +
        "<p>" + N(4) + "Mr. Lindqvist, the conservator the city had hired, worked slowly. " +
        N(5) + "He spent the first week only testing, rolling a damp swab across a spot the size of a fingernail and checking it under a lamp to see whether any color came off. " +
        N(6) + "\"Before we add anything, we find out what is already here,\" he said. " +
        N(7) + "He showed Thao how to identify the original <strong>pigments</strong>, the powdered colors the first painter had mixed into her paint, by comparing tiny samples with a chart.</p>" +
        "<p>" + N(8) + "Thao found the work <strong>painstaking</strong>, and on the third day she said so. " +
        N(9) + "\"We could just repaint the whole wall in a week,\" she said. " +
        N(10) + "Mr. Lindqvist did not argue. " +
        N(11) + "Instead he pointed to the corner where the water stain was. " +
        N(12) + "In the 1990s, he explained, a well-meaning crew had painted over that section with thick house paint, and the original faces underneath were now trapped, impossible to recover without destroying them. " +
        N(13) + "\"Whatever we do,\" he said, \"must be <strong>reversible</strong>. " +
        N(14) + "Someone fifty years from now should be able to take our work off and find hers still there.\"</p>" +
        "<p>" + N(15) + "So they worked with <strong>restraint</strong>. " +
        N(16) + "They cleaned the grime away first, which alone brought back colors Thao had not known were there. " +
        N(17) + "Where paint was missing, they filled the gaps with thin, <strong>translucent</strong> layers, like a watercolor wash, so that from across the gym the picture looked whole but up close a careful eye could tell old from new. " +
        N(18) + "They did not add a single new figure, not even where a blank space seemed to beg for one.</p>" +
        "<p>" + N(19) + "By August, the jumping kids had their red sneakers back. " +
        N(20) + "On the last day, a woman in her sixties came in to watch, then pointed to a girl in the middle of the crowd with two braids flying. " +
        N(21) + "\"That's me,\" she said. " +
        N(22) + "\"I was nine. " +
        N(23) + "The painter made us hold still for an hour.\" " +
        N(24) + "Thao looked at the braids, which she had cleaned one strand at a time with a swab, and was suddenly very glad that no one had ever painted over them.</p>",
      claims: [
        {
          id: "deteriorated",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which words from sentence 3 best help the reader understand the meaning of deteriorated in sentence 2?",
          choices: [
            { letter: "A", text: "a crowd of neighborhood kids" },
            { letter: "B", text: "whole patches had flaked away" },
            { letter: "C", text: "ran down one corner" },
            { letter: "D", text: "jumping rope" }
          ],
          correct: "B"
        },
        {
          id: "pigments",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "As used in sentence 7, the word pigments most nearly means —",
          choices: [
            { letter: "A", text: "brushes used for fine lines" },
            { letter: "B", text: "chemicals used for cleaning" },
            { letter: "C", text: "charts used to compare colors" },
            { letter: "D", text: "powdered colors used in paint" }
          ],
          correct: "D"
        },
        {
          id: "reversible",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word reversible in sentence 13 combines re- (back), vers (turn), and -ible (able to be). Based on these parts and sentence 14, reversible work is work that —",
          choices: [
            { letter: "A", text: "can be undone later without harming the original" },
            { letter: "B", text: "must be finished before the end of the summer" },
            { letter: "C", text: "looks the same from both near and far away" },
            { letter: "D", text: "copies the old painting exactly, line for line" }
          ],
          correct: "A"
        },
        {
          id: "painstaking",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author chose painstaking rather than slow in sentence 8. Compared with slow, the word painstaking suggests work that —",
          choices: [
            { letter: "A", text: "causes the workers physical pain" },
            { letter: "B", text: "is pointless and will never end" },
            { letter: "C", text: "demands great care and effort" },
            { letter: "D", text: "is being done by beginners" }
          ],
          correct: "C"
        },
        {
          id: "restraint",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "In sentence 15, the word restraint carries a positive connotation in this passage because it suggests —",
          choices: [
            { letter: "A", text: "wise self-control that protects the original work" },
            { letter: "B", text: "a lack of confidence in their painting skills" },
            { letter: "C", text: "a rule the city forced on them against their will" },
            { letter: "D", text: "a tired crew that wanted to finish quickly" }
          ],
          correct: "A"
        },
        {
          id: "translucent",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 17, the phrase like a watercolor wash helps the reader understand that translucent layers are —",
          choices: [
            { letter: "A", text: "thick enough to hide every crack" },
            { letter: "B", text: "thin enough to let what is under them show" },
            { letter: "C", text: "bright enough to be seen across the gym" },
            { letter: "D", text: "strong enough to keep water off the wall" }
          ],
          correct: "B"
        },
        {
          id: "thao",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "How does Thao's attitude toward the restoration change between sentence 9 and sentence 24?",
          choices: [
            { letter: "A", text: "She grows bored and wishes she had chosen another internship." },
            { letter: "B", text: "She begins to trust her own ideas more than Mr. Lindqvist's." },
            { letter: "C", text: "She decides that the 1990s crew did the right thing after all." },
            { letter: "D", text: "She moves from wanting speed to valuing careful preservation." }
          ],
          correct: "D"
        },
        {
          id: "nineties",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "Mr. Lindqvist's account of the 1990s crew in sentence 12 mainly serves to —",
          choices: [
            { letter: "A", text: "show that he dislikes the city's earlier workers" },
            { letter: "B", text: "explain where the water stain in the corner came from" },
            { letter: "C", text: "answer Thao's complaint by showing what haste can ruin" },
            { letter: "D", text: "introduce the woman who appears on the last day" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 6 · Vocabulary (level 3) · night-flying moths ───────────── */
    {
      id: "g10-rv-c83-night-shift",
      family: "G10",
      title: "The Night Shift in the Meadow",
      kind: "Vocabulary · 10.RV",
      blurb: "When the bees go home, the moths go to work, if the porch lights let them.",
      level: 3,
      passage:
        "<p>" + N(1) + "When people picture a pollinator, they usually imagine a bee in sunlight, legs dusted yellow, moving from flower to flower in a bright garden. " +
        N(2) + "Bees deserve their reputation. " +
        N(3) + "But when the sun goes down and the bees return to their hives, a second shift takes over, and that shift has been badly overlooked. " +
        N(4) + "Moths, most of them <strong>nocturnal</strong>, spend their nights visiting the same meadows the bees worked all day.</p>" +
        "<p>" + N(5) + "Part of the reason moths are ignored is that most of them are <strong>inconspicuous</strong>. " +
        N(6) + "A typical moth is brown or gray, about the size of a thumbnail, and built to blend into bark and dry leaves so that birds will pass it by. " +
        N(7) + "Few gardeners ever notice one at work. " +
        N(8) + "Yet a moth feeding at a flower is doing much the same thing a bee does. " +
        N(9) + "It uncoils a long, hollow <strong>proboscis</strong>, a tube that works like a drinking straw, and reaches into the flower for nectar. " +
        N(10) + "As it feeds, pollen sticks to the fine scales on its body and travels with it to the next bloom.</p>" +
        "<p>" + N(11) + "Field researchers who have spent nights in meadows with headlamps and collection jars have found that moths visit a surprisingly wide range of plants, including some that bees seldom touch. " +
        N(12) + "In several studies, the pollen carried by moths came from dozens of plant species, among them wildflowers, clovers, and the blossoms of some fruit crops. " +
        N(13) + "Because moths can travel long distances in a single night, they may also carry pollen between patches of plants that are far apart, linking meadows that daytime insects never connect. " +
        N(14) + "For these reasons, many ecologists now describe moths as the <strong>unheralded</strong> partners of the bee: just as important in some places, but almost never praised.</p>" +
        "<p>" + N(15) + "That partnership faces a growing problem. " +
        N(16) + "Moths steer partly by the faint light of the night sky, and bright outdoor lamps <strong>disrupt</strong> that guidance. " +
        N(17) + "A moth that circles a parking-lot light for hours is a moth that is not visiting flowers. " +
        N(18) + "Experiments in which sections of meadow were lit by streetlights found that moth visits to flowers in those sections dropped sharply. " +
        N(19) + "If such losses continue, the number of seeds some plants produce may <strong>diminish</strong> over time, even in places where bees remain healthy.</p>" +
        "<p>" + N(20) + "The good news is that the fix can be simple. " +
        N(21) + "Shielded lights that point downward, warmer bulb colors, and motion sensors that switch lamps off when no one is near all reduce the glare that confuses moths. " +
        N(22) + "A homeowner who turns off a porch light at bedtime is, in a small way, giving the night shift its meadow back.</p>",
      claims: [
        {
          id: "nocturnal",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word nocturnal in sentence 4 contains the Latin root noct-, as in nocturne. Based on this root, nocturnal moths are moths that are —",
          choices: [
            { letter: "A", text: "attracted mainly to bright colors" },
            { letter: "B", text: "small enough to hide in bark" },
            { letter: "C", text: "active mainly during the night" },
            { letter: "D", text: "able to travel long distances" }
          ],
          correct: "C"
        },
        {
          id: "inconspicuous",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "As used in sentence 5, the word inconspicuous most nearly means —",
          choices: [
            { letter: "A", text: "not easily noticed" },
            { letter: "B", text: "not well understood" },
            { letter: "C", text: "not widely respected" },
            { letter: "D", text: "not often harmful" }
          ],
          correct: "A"
        },
        {
          id: "proboscis",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Which part of sentence 9 best helps the reader understand what a proboscis is?",
          choices: [
            { letter: "A", text: "It uncoils a long, hollow" },
            { letter: "B", text: "and reaches into the flower" },
            { letter: "C", text: "into the flower for nectar" },
            { letter: "D", text: "a tube that works like a drinking straw" }
          ],
          correct: "D"
        },
        {
          id: "unheralded",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "The author calls moths unheralded partners rather than unknown partners in sentence 14. Compared with unknown, unheralded suggests that moths —",
          choices: [
            { letter: "A", text: "have only recently been discovered by science" },
            { letter: "B", text: "deserve praise for work that has gone unrecognized" },
            { letter: "C", text: "compete with bees for the same flowers" },
            { letter: "D", text: "are less important than most people believe" }
          ],
          correct: "B"
        },
        {
          id: "disrupt",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "In disrupt (sentence 16), the prefix dis- means apart and the root rupt means break, as in rupture. Based on these parts, lamps that disrupt a moth's guidance —",
          choices: [
            { letter: "A", text: "break up or throw off its sense of direction" },
            { letter: "B", text: "make its sense of direction stronger" },
            { letter: "C", text: "replace its guidance with a better one" },
            { letter: "D", text: "repair its sense of direction over time" }
          ],
          correct: "A"
        },
        {
          id: "diminish",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "In sentence 19, the word diminish most nearly means —",
          choices: [
            { letter: "A", text: "spread out" },
            { letter: "B", text: "stay steady" },
            { letter: "C", text: "change color" },
            { letter: "D", text: "grow smaller" }
          ],
          correct: "D"
        },
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the article about night-flying moths?",
          choices: [
            { letter: "A", text: "Moths do more harm than good because they confuse birds and gardeners." },
            { letter: "B", text: "Moths are overlooked but vital pollinators, and artificial light threatens them." },
            { letter: "C", text: "Bees are no longer the most important pollinators in most meadows." },
            { letter: "D", text: "Scientists cannot study moths well because they work only after dark." }
          ],
          correct: "B"
        },
        {
          id: "porch",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The author ends with the porch-light example in sentence 22 mainly to —",
          choices: [
            { letter: "A", text: "warn readers that porch lights waste electricity" },
            { letter: "B", text: "suggest that only homeowners harm moth populations" },
            { letter: "C", text: "show that ordinary people can help solve the problem" },
            { letter: "D", text: "explain how motion sensors switch lamps on and off" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 7 · Paired texts (level 2) · hospital volunteer program ───────────── */
    {
      id: "g10-dsr-c83-hours-count",
      family: "G10",
      title: "What the Hours Count",
      kind: "Paired texts · 10.DSR",
      blurb: "A hospital newsletter tallies the teen volunteer program; one volunteer writes about what the tally leaves out.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Teen Volunteers Mark Five Years at Harborview</strong> (from the Harborview Regional Hospital staff newsletter)</p>" +
        "<p>" + N(1) + "This fall, Harborview Regional Hospital's Teen Volunteer Program begins its fifth year, and by every measure the program has grown. " +
        N(2) + "The first class, in its opening summer, had eleven students; this year's has sixty-three, drawn from nine public and private high schools across the county. " +
        N(3) + "Volunteers must be at least fifteen, complete a four-hour orientation, and commit to one three-hour shift per week for a full semester. " +
        N(4) + "They staff the information desk, deliver flowers and mail, restock supply carts, and escort visitors and worried families through a building that even longtime employees admit is confusing. " +
        N(5) + "Last year, teen volunteers logged more than 6,200 hours of service.</p>" +
        "<p>" + N(6) + "Program coordinator Diane Mwangi says the benefits run both ways. " +
        N(7) + "\"Nurses tell us the volunteers free them up for patient care,\" she said. " +
        N(8) + "\"And students tell us they leave with a clearer idea of whether a career in health care is right for them.\" " +
        N(9) + "Several former volunteers are now enrolled in nursing and pharmacy programs at nearby colleges, and two have returned to Harborview as paid staff. " +
        N(10) + "Mwangi hopes to expand the program to weekend shifts next year, a change that would require about fifteen additional adult supervisors. " +
        N(11) + "Staff members interested in supervising should contact the Volunteer Office on the ground floor.</p>" +
        "<p><strong>Text 2 — What the Hours Don't Count</strong> (from a volunteer's entry in a school essay contest)</p>" +
        "<p>" + N(12) + "My first week at Harborview, I delivered forty-one flower arrangements and got lost nine times. " +
        N(13) + "I know because I kept count; I was proud of the first number and embarrassed by the second. " +
        N(14) + "For a long time I measured the job that way, by deliveries and hours, the same numbers the hospital prints in its newsletter.</p>" +
        "<p>" + N(15) + "Then, in my second month, I was sent to walk an elderly man named Mr. Abernathy from the lobby to the imaging center on the third floor. " +
        N(16) + "It should have taken five minutes. " +
        N(17) + "It took twenty-five, because he walked slowly and because, halfway there, he stopped and told me that his wife had been a nurse on that same floor for thirty years. " +
        N(18) + "He wanted to see whether her old station was still there. " +
        N(19) + "It wasn't; the hall had been remodeled. " +
        N(20) + "We stood there anyway while he pointed at a blank wall and described a desk, a coffee pot, and a bulletin board covered in postcards.</p>" +
        "<p>" + N(21) + "I logged that shift as three hours, the same as any other. " +
        N(22) + "Nothing on the form asked what had happened in those twenty-five minutes, and I'm not sure what I would have written if it had. " +
        N(23) + "But it is the part of the job I think about most. " +
        N(24) + "The numbers say the program is growing. " +
        N(25) + "They are right. " +
        N(26) + "They just can't tell you what it is growing into.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "On which point do the hospital newsletter and the volunteer's essay agree?",
          choices: [
            { letter: "A", text: "The hospital should add weekend volunteer shifts." },
            { letter: "B", text: "Volunteers should stop keeping track of their hours." },
            { letter: "C", text: "The teen volunteer program has been growing." },
            { letter: "D", text: "Most volunteers plan to work in health care." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The two texts differ mainly in how they judge the value of the volunteer program. Which statement best describes that difference?",
          choices: [
            { letter: "A", text: "Text 1 criticizes the program, while Text 2 defends it against critics." },
            { letter: "B", text: "Text 1 relies on figures and results; Text 2 values moments figures miss." },
            { letter: "C", text: "Text 1 speaks for students, while Text 2 speaks for the nursing staff." },
            { letter: "D", text: "Text 1 focuses on one patient; Text 2 describes the entire program." }
          ],
          correct: "B"
        },
        {
          id: "respond",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Sentences 24–26 of the essay respond most directly to which sentence from the newsletter?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "A"
        },
        {
          id: "hours",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Using both texts, a reader can best conclude that the 6,200 hours reported in sentence 5 —",
          choices: [
            { letter: "A", text: "were mostly spent restocking supply carts" },
            { letter: "B", text: "were exaggerated to attract new volunteers" },
            { letter: "C", text: "came mainly from students who later became nurses" },
            { letter: "D", text: "include experiences the total itself cannot describe" }
          ],
          correct: "D"
        },
        {
          id: "two-sentences",
          sol: "10.DSR.C",
          sub: "10.DSR.C.1",
          stem: "Select TWO sentences, one from each text, that together best show the gap between how the program is officially measured and what the essay writer values.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "central-1",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the Harborview newsletter article?",
          choices: [
            { letter: "A", text: "The teen program has grown and benefits both hospital staff and students." },
            { letter: "B", text: "The hospital building is so confusing that visitors need teen escorts." },
            { letter: "C", text: "Most teen volunteers return to the hospital later as paid employees." },
            { letter: "D", text: "The program will end unless more adult supervisors volunteer soon." }
          ],
          correct: "A"
        },
        {
          id: "counts",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The essay writer opens with the counts in sentences 12 and 13 mainly to —",
          choices: [
            { letter: "A", text: "prove that new volunteers need a longer orientation" },
            { letter: "B", text: "complain that the hospital gave him too many deliveries" },
            { letter: "C", text: "show how he first judged the job before his view changed" },
            { letter: "D", text: "suggest that the flower deliveries were the hardest task" }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "Based on its details and its final sentence, the newsletter article is written mainly for —",
          choices: [
            { letter: "A", text: "students deciding whether to apply" },
            { letter: "B", text: "parents of current teen volunteers" },
            { letter: "C", text: "hospital employees, including possible supervisors" },
            { letter: "D", text: "patients waiting in the imaging center" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 8 · Paired texts (level 3) · whales and a slow zone ───────────── */
    {
      id: "g10-dsr-c83-slow-water",
      family: "G10",
      title: "Slow Water",
      kind: "Paired texts · 10.DSR",
      blurb: "A science magazine explains a whale slow zone; a tour boat captain says there is a better tool.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Slow Water: The Case Behind the Speed Zone</strong> (from a regional science magazine)</p>" +
        "<p>" + N(1) + "Each spring, a population of humpback whales passes through Caldera Bay on its way north, and each spring the bay fills with boats. " +
        N(2) + "For years, the result was predictable: several whales a season turned up with propeller scars, and every few years one was killed outright by a collision. " +
        N(3) + "Three years ago, the regional marine authority created a seasonal slow zone across the entire bay, requiring vessels longer than ten meters to travel no faster than ten knots from March through May.</p>" +
        "<p>" + N(4) + "The reasoning is simple physics and biology. " +
        N(5) + "A whale resting near the surface may not react to an approaching boat until it is very close, and at high speeds, neither the whale nor the captain has time to avoid the other. " +
        N(6) + "Studies from other coastlines suggest that when ships slow down, both the number and the severity of strikes fall sharply, because slower boats are easier to steer around and hit with less force.</p>" +
        "<p>" + N(7) + "The early record in Caldera Bay is encouraging. " +
        N(8) + "Since the zone took effect, observers have reported no fatal strikes, compared with two in the three years before. " +
        N(9) + "Still, researchers caution that three seasons is a short record, and that whale numbers in the bay vary from year to year. " +
        N(10) + "Compliance has been high among large ships but uneven among smaller tour and fishing boats, which are harder to track.</p>" +
        "<p><strong>Text 2 — A Captain's View</strong> (a letter to the editor of the Caldera Bay Courier)</p>" +
        "<p>" + N(11) + "I have run whale-watching trips out of Caldera Harbor for twenty-two years, and no one wants those animals safe more than I do; they are, quite literally, my living. " +
        N(12) + "So I was glad when the slow zone passed. " +
        N(13) + "But after three seasons, I think the rule is too blunt an instrument. " +
        N(14) + "It treats the whole bay the same, all day, for three months, when the whales do not. " +
        N(15) + "Anyone who has spent time on the water knows they cluster along the northern shelf in the mornings and drift toward the channel in the afternoon. " +
        N(16) + "Meanwhile, the slow zone has stretched our usual two-hour trips by forty minutes, and some families now book with companies in the next harbor, which lies outside the zone.</p>" +
        "<p>" + N(17) + "There is a better tool available. " +
        N(18) + "Several ports now use acoustic buoys that listen for whale calls and send alerts to captains' phones within minutes, so boats can slow down exactly where whales are rather than everywhere at once. " +
        N(19) + "Pair that with a smaller permanent zone along the shelf, and I believe we could protect the whales just as well. " +
        N(20) + "I would ask the marine authority to test such a system before it renews the current rule next spring.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Both the magazine writer and the tour boat captain would most likely agree that —",
          choices: [
            { letter: "A", text: "the slow zone should be made permanent all year long" },
            { letter: "B", text: "slower boats near whales reduce the danger to whales" },
            { letter: "C", text: "large ships are the main cause of whale collisions" },
            { letter: "D", text: "whale numbers in the bay have grown since the rule" }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "The texts about Caldera Bay differ mainly in that Text 2 —",
          choices: [
            { letter: "A", text: "offers scientific studies from other coastlines" },
            { letter: "B", text: "doubts that boats ever strike humpback whales" },
            { letter: "C", text: "reports the rule's results in exact numbers" },
            { letter: "D", text: "argues for a targeted approach over a bay-wide rule" }
          ],
          correct: "D"
        },
        {
          id: "small-boats",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "Using both texts, which conclusion about smaller tour boats in Caldera Bay is best supported?",
          choices: [
            { letter: "A", text: "The zone has been harder on them, and they have followed it less consistently." },
            { letter: "B", text: "They cause more whale strikes than large ships and should be banned." },
            { letter: "C", text: "They have moved their trips to the northern shelf to avoid the rule." },
            { letter: "D", text: "They were the first boats to install acoustic buoys in the bay." }
          ],
          correct: "A"
        },
        {
          id: "short-record",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "How does Text 2 treat the caution researchers raise in sentence 9 of Text 1?",
          choices: [
            { letter: "A", text: "It agrees that no decision should be made for many more years." },
            { letter: "B", text: "It points out that whale numbers in the bay have fallen sharply." },
            { letter: "C", text: "It treats three seasons as long enough to judge the rule and seek change." },
            { letter: "D", text: "It argues that the researchers counted the fatal strikes incorrectly." }
          ],
          correct: "C"
        },
        {
          id: "challenge",
          sol: "10.DSR.D",
          sub: "10.DSR.D.2",
          stem: "In sentence 14, the captain most directly challenges which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: "A"
        },
        {
          id: "goodwill",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentences 11 and 12, the captain mainly establishes a tone of —",
          choices: [
            { letter: "A", text: "anger at the marine authority" },
            { letter: "B", text: "doubt about the whales' value" },
            { letter: "C", text: "pride in his business success" },
            { letter: "D", text: "goodwill toward the rule's goals" }
          ],
          correct: "D"
        },
        {
          id: "letter-structure",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How is the captain's letter organized?",
          choices: [
            { letter: "A", text: "It tells the history of whale watching in time order." },
            { letter: "B", text: "It grants the rule's aim, names its flaws, then proposes a fix." },
            { letter: "C", text: "It lists statistics first and draws no conclusion from them." },
            { letter: "D", text: "It compares two harbors point by point without a request." }
          ],
          correct: "B"
        },
        {
          id: "acoustic",
          sol: "10.RV.1.C",
          sub: "10.RV.1.C.1",
          stem: "The word acoustic in sentence 18 comes from a Greek root meaning to hear, as in acoustics. Based on this root, acoustic buoys are buoys that —",
          choices: [
            { letter: "A", text: "mark the edges of the slow zone" },
            { letter: "B", text: "float along the northern shelf" },
            { letter: "C", text: "detect whales by listening for sound" },
            { letter: "D", text: "send pictures of whales to captains" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 9 · Poetry (level 2) · periodical cicadas ───────────── */
    {
      id: "g10-rl-c83-seventeen-summers",
      family: "G10",
      title: "Seventeen Summers",
      kind: "Poetry · 10.RL",
      blurb: "The cicadas come back after seventeen years, and a garden book is waiting.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The last time they came up, I was a baby<br>" +
        L(2) + "asleep in a stroller under the sycamore,<br>" +
        L(3) + "and my grandfather, who kept a list of everything,<br>" +
        L(4) + "wrote in his garden book: <em>cicadas, loud.</em><br>" +
        L(5) + "Now it is June again, seventeen years later,<br>" +
        L(6) + "and the ground in his backyard is full of holes<br>" +
        L(7) + "the width of a pencil, as if the lawn<br>" +
        L(8) + "had been sewn and the stitches pulled out overnight.<br>" +
        L(9) + "They climb the fence posts in their brown armor,<br>" +
        L(10) + "split down the back, and step out pale,<br>" +
        L(11) + "soft as wet paper, wings folded like maps<br>" +
        L(12) + "no one has opened yet.<br>" +
        L(13) + "By noon the shells cling everywhere, hollow,<br>" +
        L(14) + "each one a coat left on a hook by someone<br>" +
        L(15) + "who will not be coming back for it.<br>" +
        L(16) + "By evening the trees are one long engine,<br>" +
        L(17) + "a hum so steady I stop hearing it<br>" +
        L(18) + "until it stops, and then I hear the silence.<br>" +
        L(19) + "My grandfather is not here to write it down.<br>" +
        L(20) + "His garden book is in my room, the last page<br>" +
        L(21) + "half blank, the pencil still clipped to the spine.<br>" +
        L(22) + "I sit on his steps and let the noise pour over me,<br>" +
        L(23) + "and before I go inside I write the date,<br>" +
        L(24) + "and <em>cicadas, loud,</em> and under that, <em>still here.</em></p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme is best supported by the cicada poem as a whole?",
          choices: [
            { letter: "A", text: "Small rituals of memory can connect people across long spans of time." },
            { letter: "B", text: "Noisy insects make it hard to enjoy the peace of a summer evening." },
            { letter: "C", text: "Young people seldom understand the hobbies of older relatives." },
            { letter: "D", text: "Gardens fall apart quickly when no one is left to care for them." }
          ],
          correct: "A"
        },
        {
          id: "stitches",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.3",
          stem: "In lines 7–8, comparing the holes in the lawn to stitches pulled out overnight mainly suggests that the ground —",
          choices: [
            { letter: "A", text: "has been torn up by careless digging" },
            { letter: "B", text: "needs to be repaired before the fall" },
            { letter: "C", text: "has been opened in many small, even places" },
            { letter: "D", text: "was planted by the grandfather long ago" }
          ],
          correct: "C"
        },
        {
          id: "coat",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "Besides describing the empty shells, the image in lines 14–15 of a coat no one will come back for most likely hints at —",
          choices: [
            { letter: "A", text: "the speaker's plan to move out of the house" },
            { letter: "B", text: "the grandfather's absence from the house" },
            { letter: "C", text: "the cold weather that will soon arrive" },
            { letter: "D", text: "the cicadas' fear of birds and predators" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "The tone of lines 22–24, as the speaker sits on the steps and writes, is best described as —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "playful and teasing" },
            { letter: "C", text: "anxious and restless" },
            { letter: "D", text: "tender and accepting" }
          ],
          correct: "D"
        },
        {
          id: "echo",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "How does the ending of the poem (lines 23–24) connect to its beginning (lines 3–4)?",
          choices: [
            { letter: "A", text: "The speaker repeats the grandfather's note and carries on his record." },
            { letter: "B", text: "The speaker corrects a mistake the grandfather made in his book." },
            { letter: "C", text: "The speaker decides the garden book should finally be put away." },
            { letter: "D", text: "The speaker learns that the cicadas will never return again." }
          ],
          correct: "A"
        },
        {
          id: "grandfather",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Line 3, my grandfather, who kept a list of everything, characterizes the grandfather as —",
          choices: [
            { letter: "A", text: "forgetful and easily confused" },
            { letter: "B", text: "strict and hard to please" },
            { letter: "C", text: "shy and rarely spoken of" },
            { letter: "D", text: "careful and observant" }
          ],
          correct: "D"
        },
        {
          id: "armor",
          sol: "10.RV.1.F",
          sub: "10.RV.1.F.1",
          stem: "As used in line 9, the word armor most nearly refers to the cicadas' —",
          choices: [
            { letter: "A", text: "loud, steady calls" },
            { letter: "B", text: "hard outer shells" },
            { letter: "C", text: "folded, pale wings" },
            { letter: "D", text: "holes in the lawn" }
          ],
          correct: "B"
        },
        {
          id: "turn",
          sol: "10.RL.2.A",
          sub: "10.RL.2.A.1",
          stem: "Which line marks the turn from describing the cicadas to facing the speaker's loss?",
          choices: [
            { letter: "A", text: "Line 12" },
            { letter: "B", text: "Line 16" },
            { letter: "C", text: "Line 19" },
            { letter: "D", text: "Line 22" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 10 · Drama (level 3) · stranded dolphin ───────────── */
    {
      id: "g10-rl-c83-tide-pool",
      family: "G10",
      title: "Twenty Minutes Out",
      kind: "Drama · 10.RL",
      blurb: "A young dolphin in a tide pool, a teenager who wants to push, and an aunt who says wait.",
      level: 3,
      passage:
        "<p><em>Setting: a rocky beach just after sunrise. A young spinner dolphin lies on its side in a shallow tide pool, half out of the water. KEOLA, sixteen, kneels beside it, soaking wet. AUNTY MAHINA, a volunteer with the island's marine-mammal response network, hurries down the path with a bucket and a phone. Her nephew IKAIKA, eleven, follows with beach towels.</em></p>" +
        "<p>" + N(1) + "<strong>KEOLA</strong>: Aunty, finally. Help me turn her. If we both push, we can get her past the rocks before the tide drops any more. " +
        N(2) + "<strong>AUNTY MAHINA</strong> <em>(setting down the bucket, not touching the dolphin)</em>: Nobody pushes anything. The response team is twenty minutes out. " +
        N(3) + "<strong>KEOLA</strong>: Twenty minutes? Look at her. She's breathing like she ran a race. " +
        N(4) + "<strong>AUNTY MAHINA</strong>: I am looking. <em>(She crouches and studies the animal's eye, its skin, the way its blowhole opens and closes.)</em> And what I see is a dolphin that came in here for a reason. " +
        N(5) + "<strong>IKAIKA</strong> <em>(holding up the towels)</em>: What do I do with these? " +
        N(6) + "<strong>AUNTY MAHINA</strong>: Soak them. Lay them over her back, never over the blowhole. Keep her skin wet and out of the sun. That's your whole job, and it's an important one. " +
        N(7) + "<em>(IKAIKA wades into the pool and begins to soak towels. KEOLA stays where she is, both hands on the dolphin's side.)</em> " +
        N(8) + "<strong>KEOLA</strong>: When I found her she was still moving her tail. If we'd pushed her out then, she'd be gone already. Swimming. " +
        N(9) + "<strong>AUNTY MAHINA</strong>: Maybe. Or she'd be on the next beach by noon, weaker, where nobody would find her. A healthy dolphin doesn't usually wash up alone. Something's wrong: sickness, an injury we can't see, a pod that lost her. Pushing her back doesn't fix any of that. It just makes us feel better. " +
        N(10) + "<strong>KEOLA</strong> <em>(quietly)</em>: That's not fair. " +
        N(11) + "<strong>AUNTY MAHINA</strong>: It isn't meant to be unfair. It's meant to be true. <em>(Softer.)</em> You did the hardest part already. You saw her. You called. " +
        N(12) + "<em>(A long pause. The surf rolls in, closer than before, and a little water spills into the pool. The dolphin lifts its head slightly, then lowers it.)</em> " +
        N(13) + "<strong>IKAIKA</strong>: Aunty, she moved! Is that good? " +
        N(14) + "<strong>AUNTY MAHINA</strong>: It means she's still with us. Keep pouring. " +
        N(15) + "<strong>KEOLA</strong> <em>(taking a towel from IKAIKA without being asked and dipping it into the bucket)</em>: How will they know what's wrong with her? " +
        N(16) + "<strong>AUNTY MAHINA</strong>: They check her blood, her breathing, her weight. Sometimes they take her to the rehab pools for a few weeks. Sometimes they find her pod offshore and let her go near them. " +
        N(17) + "<strong>KEOLA</strong>: And sometimes? " +
        N(18) + "<strong>AUNTY MAHINA</strong>: Sometimes they can't help. But they always learn something that helps the next one. " +
        N(19) + "<em>(Far up the path, the sound of a truck door and voices. AUNTY MAHINA stands and waves both arms over her head. KEOLA does not look up. She is smoothing a wet towel over the dolphin's back, carefully, the way you would tuck in someone who is sleeping.)</em> " +
        N(20) + "<strong>KEOLA</strong> <em>(to the dolphin, almost a whisper)</em>: Okay. Okay. We waited.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          sub: "10.RL.1.A.1",
          stem: "Which theme does the scene at the tide pool most clearly develop?",
          choices: [
            { letter: "A", text: "Young people often know more about nature than adults do." },
            { letter: "B", text: "Helping well can mean resisting the urge to act quickly." },
            { letter: "C", text: "Wild animals should be left alone no matter what happens." },
            { letter: "D", text: "Family members rarely agree about what is right to do." }
          ],
          correct: "B"
        },
        {
          id: "conflict",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The central conflict between Keola and Aunty Mahina is a disagreement over whether to —",
          choices: [
            { letter: "A", text: "call the response team or handle the rescue alone" },
            { letter: "B", text: "let Ikaika help or send him back up the path" },
            { letter: "C", text: "take the dolphin to the rehab pools or the shore" },
            { letter: "D", text: "push the dolphin out now or wait for trained help" }
          ],
          correct: "D"
        },
        {
          id: "towel",
          sol: "10.RL.1.C",
          sub: "10.RL.1.C.1",
          stem: "Keola's action and question in sentence 15 show that she —",
          choices: [
            { letter: "A", text: "has begun to accept Aunty Mahina's way of helping" },
            { letter: "B", text: "wants to prove she can work faster than Ikaika" },
            { letter: "C", text: "still plans to push the dolphin back into the sea" },
            { letter: "D", text: "is tired and wants the response team to take over" }
          ],
          correct: "A"
        },
        {
          id: "surf",
          sol: "10.RL.1.D",
          sub: "10.RL.1.D.2",
          stem: "The stage direction in sentence 12, with the surf rolling closer and the dolphin lifting its head, mainly creates a mood of —",
          choices: [
            { letter: "A", text: "playful excitement" },
            { letter: "B", text: "angry frustration" },
            { letter: "C", text: "tense, fragile hope" },
            { letter: "D", text: "calm boredom" }
          ],
          correct: "C"
        },
        {
          id: "blunt",
          sol: "10.RL.2.C",
          sub: "10.RL.2.C.1",
          stem: "Aunty Mahina's remark at the end of sentence 9, that pushing the dolphin back just makes us feel better, has a tone that is best described as —",
          choices: [
            { letter: "A", text: "blunt but honest" },
            { letter: "B", text: "mocking and cruel" },
            { letter: "C", text: "cheerful and light" },
            { letter: "D", text: "nervous and unsure" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "10.RL.1.B",
          sub: "10.RL.1.B.1",
          stem: "The playwright ends the scene with Keola whispering We waited (sentence 20) mainly to —",
          choices: [
            { letter: "A", text: "suggest that the dolphin will certainly survive" },
            { letter: "B", text: "show that Keola is still angry at her aunt" },
            { letter: "C", text: "reveal that the response team arrived too late" },
            { letter: "D", text: "show that she now sees waiting as care she chose" }
          ],
          correct: "D"
        },
        {
          id: "tuck",
          sol: "10.RL.2.B",
          sub: "10.RL.2.B.2",
          stem: "In sentence 19, comparing the way Keola smooths the towel to tucking in someone who is sleeping suggests that she —",
          choices: [
            { letter: "A", text: "believes the dolphin is no longer alive" },
            { letter: "B", text: "now treats the dolphin with gentle, protective care" },
            { letter: "C", text: "is too tired to notice the team arriving" },
            { letter: "D", text: "wants the dolphin to stay in the pool for good" }
          ],
          correct: "B"
        },
        {
          id: "out",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Keola's reply in sentence 3 helps show that the phrase twenty minutes out in sentence 2 means the team is —",
          choices: [
            { letter: "A", text: "twenty minutes late for its shift" },
            { letter: "B", text: "out of the office for the morning" },
            { letter: "C", text: "still twenty minutes from arriving" },
            { letter: "D", text: "able to stay for only twenty minutes" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 11 · Functional text (level 1) · hospital volunteer guide ───────────── */
    {
      id: "g10-ri-c83-shift-guide",
      family: "G10",
      title: "Junior Volunteer Shift Guide",
      kind: "Functional text · 10.RI",
      blurb: "Badges, hand cleaning, yellow signs and sign-outs: the rules of a hospital volunteer shift.",
      level: 1,
      passage:
        "<p><strong>Riverbend Community Hospital — Junior Volunteer Shift Guide</strong></p>" +
        "<p>" + N(1) + "Welcome to the Junior Volunteer Program. " +
        N(2) + "This guide explains what to do before, during, and after every shift. " +
        N(3) + "Keep it in your volunteer folder and review it before your first day.</p>" +
        "<p><strong>Before Your Shift</strong><br>" + N(4) + "Arrive at the Volunteer Office, Room G-14 on the ground floor, ten minutes before your shift begins. " +
        N(5) + "Sign in on the tablet at the front desk and pick up your badge from the labeled drawer. " +
        N(6) + "Your badge must be worn above the waist, with your photo facing out, at all times. " +
        N(7) + "Wear your teal volunteer polo, long pants, and closed-toe shoes; sandals, ripped jeans, and strong perfume are not permitted. " +
        N(8) + "If you are ill, with a fever, cough, or upset stomach, do not come in. " +
        N(9) + "Instead, call the Volunteer Office at least two hours before your shift so that a replacement can be found.</p>" +
        "<p><strong>During Your Shift</strong><br>" + N(10) + "Clean your hands with soap or sanitizer every time you enter or leave a patient room, even if you touched nothing. " +
        N(11) + "Always knock and wait for an answer before entering. " +
        N(12) + "If a door has a yellow isolation sign, do not enter for any reason; leave deliveries with the nurse at the station. " +
        N(13) + "Volunteers may deliver mail, flowers, and reading materials, escort visitors, and restock linen carts. " +
        N(14) + "Volunteers may not give patients food or drink, help patients out of bed or into wheelchairs, or read or discuss any information on a patient's chart. " +
        N(15) + "If a patient asks for help with any of these things, find a nurse right away. " +
        N(16) + "What you see and hear on the units stays on the units; do not post photos or share details about patients, even without names.</p>" +
        "<p><strong>If Something Goes Wrong</strong><br>" + N(17) + "If you hear an overhead emergency announcement, stay where you are, keep hallways clear, and follow the directions of staff. " +
        N(18) + "If you are hurt, even slightly, report it to the Volunteer Office before you leave the building. " +
        N(19) + "Most problems are simple to fix when they are reported the same day.</p>" +
        "<p><strong>After Your Shift</strong><br>" + N(20) + "Return your badge to the drawer and sign out on the tablet. " +
        N(21) + "Your hours are counted only when you both sign in and sign out. " +
        N(22) + "Students who need hours verified for school should request a printed record at least one week before it is due. " +
        N(23) + "Thank you for giving your time; patients and staff notice the difference you make.</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "Which statement best summarizes the Riverbend shift guide?",
          choices: [
            { letter: "A", text: "It describes the history and goals of the hospital's volunteer program." },
            { letter: "B", text: "It explains the steps and limits volunteers follow across a whole shift." },
            { letter: "C", text: "It lists the medical tasks that junior volunteers are trained to perform." },
            { letter: "D", text: "It persuades students to earn school service hours at the hospital." }
          ],
          correct: "B"
        },
        {
          id: "water",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the guide, what should a volunteer do if a patient asks for a glass of water?",
          choices: [
            { letter: "A", text: "Bring the water after cleaning their hands." },
            { letter: "B", text: "Leave the water with the nurse at the station." },
            { letter: "C", text: "Explain the rule and continue the deliveries." },
            { letter: "D", text: "Find a nurse right away to help the patient." }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which sentence from the Riverbend guide is closest to an opinion rather than a rule or procedure?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 21" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "D"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The bold headings in the Riverbend guide help a reader mainly by —",
          choices: [
            { letter: "A", text: "grouping the rules by when in a shift they apply" },
            { letter: "B", text: "ranking the rules from most to least important" },
            { letter: "C", text: "separating rules for patients from rules for staff" },
            { letter: "D", text: "showing which rules are new this year" }
          ],
          correct: "A"
        },
        {
          id: "touched",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.2",
          stem: "The guide adds the phrase even if you touched nothing in sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "suggest that most volunteers forget to wash" },
            { letter: "B", text: "explain where the sanitizer is kept on each unit" },
            { letter: "C", text: "make clear that the rule has no exceptions" },
            { letter: "D", text: "warn volunteers not to touch patients' charts" }
          ],
          correct: "C"
        },
        {
          id: "welcome",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The tone of sentences 1 and 23, which open and close the shift guide, is best described as —",
          choices: [
            { letter: "A", text: "stern and warning" },
            { letter: "B", text: "warm and appreciative" },
            { letter: "C", text: "humorous and casual" },
            { letter: "D", text: "worried and urgent" }
          ],
          correct: "B"
        },
        {
          id: "hours",
          sol: "10.RI.1.A",
          sub: "10.RI.1.A.1",
          stem: "According to the guide, which TWO actions must a volunteer complete for the shift's hours to be counted? Select TWO.",
          choices: [
            { letter: "A", text: "signing in on the tablet at the start" },
            { letter: "B", text: "returning the badge to the drawer" },
            { letter: "C", text: "signing out on the tablet at the end" },
            { letter: "D", text: "requesting a printed record of hours" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "isolation",
          sol: "10.RV.1.B",
          sub: "10.RV.1.B.1",
          stem: "Based on sentence 12, a room with a yellow isolation sign is most likely one that —",
          choices: [
            { letter: "A", text: "is kept apart to stop illness from spreading" },
            { letter: "B", text: "is reserved for patients who want quiet" },
            { letter: "C", text: "is being cleaned between patients" },
            { letter: "D", text: "is used to store extra linen carts" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 12 · Argument (level 2) · a mural for the underpass ───────────── */
    {
      id: "g10-ri-c83-underpass",
      family: "G10",
      title: "Stop Painting It Gray",
      kind: "Argument · 10.RI",
      blurb: "A student editorial asks the town council to trade gray paint for a community mural.",
      level: 2,
      passage:
        "<p>" + N(1) + "Drive under the Route 4 underpass in Millbrook and you will see three hundred feet of concrete that the town repaints gray every spring. " +
        N(2) + "Within weeks, the gray is covered again with scribbled tags, and within a year the town pays to cover them once more. " +
        N(3) + "Last year, according to the public works budget, that cycle cost $11,400. " +
        N(4) + "I would like to propose a better use for both the wall and the money: the town should commission a community mural for the underpass and make it the first project of a permanent public art program.</p>" +
        "<p>" + N(5) + "The most practical argument for a mural is that it can reduce tagging. " +
        N(6) + "Painters and city workers in many towns report that walls with detailed murals are tagged far less often than blank walls, partly because taggers tend to respect finished artwork and partly because neighbors who helped paint a mural are quick to report damage. " +
        N(7) + "Carver Falls, forty miles east of us, painted murals on four of its most-tagged walls six years ago and says its cleanup calls at those sites fell by more than half within two years. " +
        N(8) + "A mural is not a guarantee, but a gray wall is practically an invitation.</p>" +
        "<p>" + N(9) + "A mural would also give Millbrook something it currently lacks: a shared picture of itself. " +
        N(10) + "If the design came from residents, through public meetings, sketches from students at Millbrook High, and stories from longtime families, the wall could show the river mills, the orchards, and the newer neighborhoods side by side. " +
        N(11) + "People drive under that bridge every day. " +
        N(12) + "It might as well tell them where they live.</p>" +
        "<p>" + N(13) + "Some council members have argued that art is not a proper use of tax money when roads need repair. " +
        N(14) + "That concern deserves a serious answer. " +
        N(15) + "But the town is already spending money on this wall every year; the question is whether that money buys gray paint or something residents value. " +
        N(16) + "A one-time mural, sealed with an anti-graffiti coating, would cost about $18,000, and grants from the state arts council could cover up to half. " +
        N(17) + "After two years of reduced cleanup, the mural would likely pay for itself.</p>" +
        "<p>" + N(18) + "Others worry that a committee of residents will never agree on a design. " +
        N(19) + "They may be right that not everyone will love the result. " +
        N(20) + "But disagreement is not a reason to choose blankness; it is a reason to hold good meetings. " +
        N(21) + "Every town that has painted its walls has had the same argument, and very few of them have painted the walls gray again.</p>" +
        "<p>" + N(22) + "I urge the council to vote yes on the mural proposal at its March meeting. " +
        N(23) + "Let's stop paying, every spring, to say nothing.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.1",
          stem: "Which sentence best states the writer's central claim about the Route 4 underpass?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 4" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "C"
        },
        {
          id: "outside",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which detail does the writer offer as evidence from a town other than Millbrook?",
          choices: [
            { letter: "A", text: "Cleanup calls at four walls fell by more than half." },
            { letter: "B", text: "The town spent $11,400 repainting the underpass." },
            { letter: "C", text: "A sealed mural would cost about $18,000 to paint." },
            { letter: "D", text: "Students at the high school could provide sketches." }
          ],
          correct: "A"
        },
        {
          id: "prediction",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "Which statement in the mural editorial is presented as a prediction rather than a reported fact?",
          choices: [
            { letter: "A", text: "The town repaints the underpass gray every spring." },
            { letter: "B", text: "Last year the repainting cycle cost $11,400." },
            { letter: "C", text: "Some council members object to spending on art." },
            { letter: "D", text: "The mural would likely pay for itself in two years." }
          ],
          correct: "D"
        },
        {
          id: "objections",
          sol: "10.RI.2.A",
          sub: "10.RI.2.A.1",
          stem: "How does the writer organize sentences 13–21 of the editorial?",
          choices: [
            { letter: "A", text: "by describing the mural's design from left to right" },
            { letter: "B", text: "by stating two objections and answering each in turn" },
            { letter: "C", text: "by comparing Millbrook's budget with Carver Falls'" },
            { letter: "D", text: "by listing events in the order they happened" }
          ],
          correct: "B"
        },
        {
          id: "cost",
          sol: "10.RI.1.C",
          sub: "10.RI.1.C.2",
          stem: "The writer includes the figure of $11,400 in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "show that the town already spends money on the wall" },
            { letter: "B", text: "prove that the mural will cost less than gray paint" },
            { letter: "C", text: "criticize the public works staff for wasting time" },
            { letter: "D", text: "explain why the state arts council offers grants" }
          ],
          correct: "A"
        },
        {
          id: "serious",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "In sentence 14, the writer says the council members' concern deserves a serious answer mainly to —",
          choices: [
            { letter: "A", text: "admit that the mural plan should be dropped" },
            { letter: "B", text: "suggest that the roads are in good condition" },
            { letter: "C", text: "appear fair-minded before rebutting the objection" },
            { letter: "D", text: "change the subject away from the cost of art" }
          ],
          correct: "C"
        },
        {
          id: "last-line",
          sol: "10.RI.2.C",
          sub: "10.RI.2.C.2",
          stem: "The editorial's closing line, Let's stop paying, every spring, to say nothing, is best described as —",
          choices: [
            { letter: "A", text: "a neutral summary of the council's options" },
            { letter: "B", text: "a joke that undercuts the writer's argument" },
            { letter: "C", text: "a new piece of evidence about the budget" },
            { letter: "D", text: "a pointed appeal that sums up the argument" }
          ],
          correct: "D"
        },
        {
          id: "blankness",
          sol: "10.RV.1.D",
          sub: "10.RV.1.D.2",
          stem: "In sentence 20, the writer chose blankness rather than simplicity. Compared with simplicity, blankness suggests that a gray wall is —",
          choices: [
            { letter: "A", text: "tasteful and calm" },
            { letter: "B", text: "empty and silent" },
            { letter: "C", text: "cheap and practical" },
            { letter: "D", text: "clean and modern" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
