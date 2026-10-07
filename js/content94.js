/* SOL Labyrinth — Grade 11 expansion, medium tier (content94): ferry crossings, weather balloon launches,
 * toy makers and newspaper archives. Original text only.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    {
      id: "g11-rl-c94-lastferry",
      family: "G11",
      title: "The 6:40 Crossing",
      kind: "Literary · 11.RL",
      blurb: "A student who has stopped looking at the water meets a man on his last ride.",
      level: 1,
      passage:
        "<p>" + N(1) + "The 6:40 ferry to Brannock Island left the dock with a long, tired horn, and Ayla Demir took her usual seat by the window. " +
        N(2) + "She had made this crossing every school morning for two years, and she no longer looked at the water at all. " +
        N(3) + "Instead, she opened her chemistry notes and frowned at a page of formulas. " +
        N(4) + "Across the aisle, an old man in a wool cap was pressing his face nearly to the glass like a child at a bakery window. " +
        N(5) + "\"First time?\" Ayla asked, a little surprised. " +
        N(6) + "\"Last time,\" he said. " +
        N(7) + "\"I worked on this boat for forty-one years, and tomorrow I move to my daughter's house inland.\" " +
        N(8) + "He pointed out things Ayla had passed hundreds of times without seeing: the cormorants drying their wings on the channel marker, the rusted bell buoy that rang only when the tide turned, the line of darker water where the river met the sea. " +
        N(9) + "\"Every crossing is different,\" he said, \"if you bother to look.\" " +
        N(10) + "Ayla glanced down at her notes, then closed them. " +
        N(11) + "For the last ten minutes of the trip, she watched the island grow from a gray smudge into rooftops, docks, and a white lighthouse. " +
        N(12) + "When the ramp clanged down, the old man tipped his cap to her and walked off without looking back. " +
        N(13) + "The next morning, Ayla took the window seat again, and this time she kept her notebook in her bag." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does Ayla's ferry ride most clearly develop?",
          choices: [
            { letter: "A", text: "Hard work should always come before rest." },
            { letter: "B", text: "Familiar places hold new things for those who pay attention." },
            { letter: "C", text: "Moving away from a home is always painful." },
            { letter: "D", text: "Strangers rarely have anything useful to teach." }
          ],
          correct: "B"
        },
        {
          id: "character",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes Ayla at the start of the story?",
          choices: [
            { letter: "A", text: "She is nervous about making her first crossing." },
            { letter: "B", text: "She is curious about the island's long history." },
            { letter: "C", text: "She is so used to the crossing that she ignores it." },
            { letter: "D", text: "She is annoyed by the other noisy passengers." }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 4, comparing the old man to a child at a bakery window mainly shows that he —",
          choices: [
            { letter: "A", text: "is eager to take in every sight" },
            { letter: "B", text: "is hungry after a long morning" },
            { letter: "C", text: "feels too old to travel alone" },
            { letter: "D", text: "wants Ayla to notice him" }
          ],
          correct: "A"
        },
        {
          id: "clanged",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 12, the word clanged suggests that the ramp —",
          choices: [
            { letter: "A", text: "slid down without a sound" },
            { letter: "B", text: "broke apart as it landed" },
            { letter: "C", text: "lowered slowly and gently" },
            { letter: "D", text: "landed with a loud metal ring" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Sentence 13 brings the story to a close by showing that Ayla —",
          choices: [
            { letter: "A", text: "has decided to move inland like the old man" },
            { letter: "B", text: "has finished studying for her chemistry test" },
            { letter: "C", text: "has taken the old man's advice to heart" },
            { letter: "D", text: "plans to work on the ferry herself someday" }
          ],
          correct: "C"
        },
        {
          id: "smudge",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 11, the word smudge most nearly means —",
          choices: [
            { letter: "A", text: "a blurry mark" },
            { letter: "B", text: "a bright flash" },
            { letter: "C", text: "a steep cliff" },
            { letter: "D", text: "a low sound" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-c94-balloonlaunch",
      family: "G11",
      title: "Twice a Day, Up and Away",
      kind: "Informational · 11.RI",
      blurb: "Why forecasters still let go of balloons every morning and evening.",
      level: 1,
      passage:
        "<p>" + N(1) + "Twice a day, at weather offices around the world, someone walks outside holding a balloon taller than a person and lets it go. " +
        N(2) + "These launches happen at nearly the same moments everywhere, so forecasters can compare a snapshot of the whole atmosphere taken at once. " +
        N(3) + "Each balloon is made of latex and filled with helium or hydrogen. " +
        N(4) + "Hanging beneath it on a long string is a radiosonde, a box about the size of a juice carton that holds sensors and a small radio. " +
        N(5) + "As the balloon rises at roughly five meters per second, the radiosonde measures temperature, humidity, and air pressure and sends the readings to the ground every second or two. " +
        N(6) + "By tracking the box's position, forecasters can also calculate wind speed and direction at each level. " +
        N(7) + "The flight lasts about two hours. " +
        N(8) + "As the balloon climbs, the air around it thins, and the balloon swells until it is several times its launch width. " +
        N(9) + "Somewhere above thirty kilometers, it finally bursts, and the radiosonde drifts back to Earth under a small parachute. " +
        N(10) + "Most are never recovered, though some carry a printed note asking the finder to mail them back. " +
        N(11) + "Satellites now gather enormous amounts of weather data, but balloons remain valuable because they take direct measurements inside the air itself rather than estimating conditions from far above. " +
        N(12) + "The next time a forecast calls for afternoon storms, part of that prediction may have begun with a single balloon rising before dawn." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best captures the central idea of the article about weather balloons?",
          choices: [
            { letter: "A", text: "Satellites have replaced balloons as the main source of weather data." },
            { letter: "B", text: "Balloons carry instruments that take direct measurements used in forecasts." },
            { letter: "C", text: "Most radiosondes are lost for good after they fall back to Earth." },
            { letter: "D", text: "Helium is the safest and cheapest gas for filling weather balloons." }
          ],
          correct: "B"
        },
        {
          id: "sametime",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, why are balloons launched at nearly the same moments around the world?",
          choices: [
            { letter: "A", text: "So forecasters can compare conditions everywhere at one time" },
            { letter: "B", text: "So the balloons do not drift into one another in the air" },
            { letter: "C", text: "Because helium is easiest to buy at those hours of the day" },
            { letter: "D", text: "Because the winds are calmest just before the sun comes up" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author organizes sentences 3–9 mainly by —",
          choices: [
            { letter: "A", text: "comparing balloons with weather satellites" },
            { letter: "B", text: "describing a problem and several solutions" },
            { letter: "C", text: "following a balloon from launch to its fall" },
            { letter: "D", text: "listing reasons that forecasts can go wrong" }
          ],
          correct: "C"
        },
        {
          id: "note",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail in sentence 10 about a printed note mainly to —",
          choices: [
            { letter: "A", text: "prove that most radiosondes are found again" },
            { letter: "B", text: "warn readers not to touch fallen equipment" },
            { letter: "C", text: "explain how the small parachute is opened" },
            { letter: "D", text: "suggest that a lost radiosonde can come back" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward weather balloons is best described as —",
          choices: [
            { letter: "A", text: "doubtful about their accuracy" },
            { letter: "B", text: "amused by their old-fashioned look" },
            { letter: "C", text: "appreciative of their lasting value" },
            { letter: "D", text: "alarmed by the litter they create" }
          ],
          correct: "C"
        },
        {
          id: "swells",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 8, the phrase until it is several times its launch width helps show that swells means —",
          choices: [
            { letter: "A", text: "grows larger" },
            { letter: "B", text: "changes color" },
            { letter: "C", text: "slows down" },
            { letter: "D", text: "leaks air" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-rv-c94-tinrabbit",
      family: "G11",
      title: "Made and Mended",
      kind: "Vocabulary · 11.RV",
      blurb: "A toy repairer takes on a wind-up rabbit its owner thinks is beyond saving.",
      level: 2,
      passage:
        "<p>" + N(1) + "The sign over Wanjiru Kamau's shop said Toys Made and Mended, but most of her customers came for the second half. " +
        N(2) + "On Saturdays I swept her floor and watched her work at a bench crowded with tiny screwdrivers, spools of thread, and jars of buttons sorted by color. " +
        N(3) + "One morning a man set a wind-up tin rabbit on the counter and said, \"My father gave me this. I know it's probably <strong>irreparable</strong>.\" " +
        N(4) + "Its spring was snapped, and one ear hung by a single rivet. " +
        N(5) + "Mrs. Kamau turned it over in her hands with obvious <strong>nostalgia</strong>, as if the toy carried her back to her own childhood. " +
        N(6) + "\"Nothing with a story is beyond repair,\" she said. " +
        N(7) + "The mechanism inside was <strong>intricate</strong>, a nest of gears no bigger than my fingernail, each one meshing with three others. " +
        N(8) + "She did not order a new spring; she was too <strong>frugal</strong> for that. " +
        N(9) + "Instead she cut one from the coil of an old clock she kept in a drawer of spare parts. " +
        N(10) + "The work was <strong>painstaking</strong>. " +
        N(11) + "For two hours she bent over the rabbit under a magnifying lamp, adjusting each gear a hair at a time, testing it, then adjusting again. " +
        N(12) + "When the man returned the next week, she wound the key and set the rabbit on the counter. " +
        N(13) + "It hopped three times, paused, and twitched its mended ear. " +
        N(14) + "The man laughed out loud, and for a moment he looked about ten years old. " +
        N(15) + "\"You didn't just fix it,\" he said. " +
        N(16) + "\"You found a way to <strong>rejuvenate</strong> it, and me along with it.\"" +
        "</p>",
      claims: [
        {
          id: "irreparable",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word irreparable in sentence 3 contains the prefix ir- and the suffix -able. Together these parts show that the word means —",
          choices: [
            { letter: "A", text: "not able to be fixed" },
            { letter: "B", text: "able to be fixed again" },
            { letter: "C", text: "fixed many times before" },
            { letter: "D", text: "not worth any money" }
          ],
          correct: "A"
        },
        {
          id: "rejuvenate",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word rejuvenate in sentence 16 begins with re-, as in renew, and contains a Latin root meaning young. Rejuvenate most nearly means to —",
          choices: [
            { letter: "A", text: "remember clearly" },
            { letter: "B", text: "repair quickly" },
            { letter: "C", text: "make fresh again" },
            { letter: "D", text: "repeat often" }
          ],
          correct: "C"
        },
        {
          id: "intricate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which phrase from the passage best helps the reader understand the meaning of intricate?",
          choices: [
            { letter: "A", text: "Its spring was snapped" },
            { letter: "B", text: "each one meshing with three others" },
            { letter: "C", text: "turned it over in her hands" },
            { letter: "D", text: "under a magnifying lamp" }
          ],
          correct: "B"
        },
        {
          id: "frugal",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Sentence 9 helps the reader understand that frugal means —",
          choices: [
            { letter: "A", text: "careful not to waste money or materials" },
            { letter: "B", text: "unwilling to help a worried customer" },
            { letter: "C", text: "skilled with small tools and gears" },
            { letter: "D", text: "proud of owning old and rare things" }
          ],
          correct: "A"
        },
        {
          id: "painstaking",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The word painstaking in sentence 10 suggests that Mrs. Kamau's work is —",
          choices: [
            { letter: "A", text: "quick and careless" },
            { letter: "B", text: "slow and very careful" },
            { letter: "C", text: "painful to her hands" },
            { letter: "D", text: "dull to watch" }
          ],
          correct: "B"
        },
        {
          id: "kamau",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes Mrs. Kamau?",
          choices: [
            { letter: "A", text: "She prefers making new toys to fixing old ones." },
            { letter: "B", text: "She rushes jobs so she can serve more customers." },
            { letter: "C", text: "She doubts that worn-out toys are worth saving." },
            { letter: "D", text: "She values the memories toys hold and works patiently." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-dsr-c94-courier",
      family: "G11",
      title: "Pages of the Courier",
      kind: "Paired texts · 11.DSR",
      blurb: "A library plans to scan its old newspapers; a student wonders what browsing will lose.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Notice from the Millbrook Public Library</strong></p>" +
        "<p>" + N(1) + "Beginning March 3, the Millbrook Public Library will close its newspaper reading room for six months while staff scan every issue of the Millbrook Courier from 1889 to 1984. " +
        N(2) + "The bound volumes are cracking with age, and several years from the 1920s are already too fragile to open. " +
        N(3) + "Once scanning is complete, every page will be searchable online from any computer, free of charge. " +
        N(4) + "Readers will be able to type a family name, a street, or an event and see every article that mentions it in seconds. " +
        N(5) + "During the closure, staff will answer research requests by email within five business days. " +
        N(6) + "After the project, the original volumes will move to climate-controlled storage, and access will be limited to researchers who make an appointment. " +
        N(7) + "We thank patrons for their patience as we protect the town's history for the next century.</p>" +
        "<p><strong>Text 2 — From a student's research journal</strong></p>" +
        "<p>" + N(8) + "I spent last Saturday in the reading room, probably one of the last people to use it before it closes. " +
        N(9) + "I was looking for one article about the 1937 flood for my history project, and it took me nearly three hours to find it. " +
        N(10) + "On the way, I kept getting distracted: an ad for a dance hall that charged a dime, a lost-dog notice, a letter from a girl my age complaining about her school's new dress code. " +
        N(11) + "None of it was what I came for, and all of it made the flood feel real, because I could see the town people lived in that week. " +
        N(12) + "A search box will find my article in seconds, and I am glad the pages will be saved. " +
        N(13) + "I just wonder whether anyone will ever stumble onto the dime dance hall again.</p>",
      claims: [
        {
          id: "shared",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea about the old Courier pages do both texts support?",
          choices: [
            { letter: "A", text: "The pages are worth preserving." },
            { letter: "B", text: "The reading room should stay open." },
            { letter: "C", text: "Online search is slower than browsing." },
            { letter: "D", text: "Most patrons prefer the bound volumes." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How does the student's view of the search tool differ from the library's?",
          choices: [
            { letter: "A", text: "The student calls it useless, while the library calls it risky." },
            { letter: "B", text: "The library stresses speed, while the student notices what browsing finds by chance." },
            { letter: "C", text: "The library worries about its cost, while the student worries about privacy." },
            { letter: "D", text: "The student wants the volumes thrown out, while the library wants them kept." }
          ],
          correct: "B"
        },
        {
          id: "twosent",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences that together show a benefit of the scanning project and a loss the student fears.",
          choices: [
            { letter: "A", text: "Sentence 4 (Readers will be able to type a family name...)" },
            { letter: "B", text: "Sentence 5 (During the closure, staff will answer research requests...)" },
            { letter: "C", text: "Sentence 9 (I was looking for one article about the 1937 flood...)" },
            { letter: "D", text: "Sentence 13 (I just wonder whether anyone will ever stumble onto...)" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A reader combining both texts could best conclude that the digital archive will —",
          choices: [
            { letter: "A", text: "make the town library unnecessary" },
            { letter: "B", text: "end all access to the original volumes" },
            { letter: "C", text: "make known articles easier to find but chance finds rarer" },
            { letter: "D", text: "hold fewer articles than the bound volumes did" }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to Text 1, why does the library need to scan the volumes now?",
          choices: [
            { letter: "A", text: "Researchers have demanded online access." },
            { letter: "B", text: "The volumes are cracking, and some are too fragile to open." },
            { letter: "C", text: "The reading room is being turned into offices." },
            { letter: "D", text: "The town plans to sell the original newspapers." }
          ],
          correct: "B"
        },
        {
          id: "journal",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Text 2 is organized mainly by —",
          choices: [
            { letter: "A", text: "listing the steps for researching a history topic" },
            { letter: "B", text: "comparing two libraries the student has visited" },
            { letter: "C", text: "moving from a personal experience to a reflection" },
            { letter: "D", text: "answering the library's notice point by point" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c94-nightferry",
      family: "G11",
      title: "Night Ferry",
      kind: "Poetry · 11.RL",
      blurb: "A speaker crosses dark water toward a new home.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The night ferry shoulders out past the breakwater,<br>" +
        L(2) + "its engine a low hum I feel in my teeth.<br>" +
        L(3) + "Behind us, the town folds its lights into a pocket,<br>" +
        L(4) + "one window, then a street, then only the pier.<br>" +
        L(5) + "Ahead there is nothing but the dark and the promise<br>" +
        L(6) + "of a far shore I have only seen on maps.<br>" +
        L(7) + "My mother holds two tickets and one suitcase;<br>" +
        L(8) + "everything else we owned is in a box with a neighbor.<br>" +
        L(9) + "The water does not care which side we came from.<br>" +
        L(10) + "It lifts the boat the way it lifts the gulls,<br>" +
        L(11) + "the same for every passenger aboard.<br>" +
        L(12) + "Somewhere in the middle, halfway between,<br>" +
        L(13) + "I stop looking back and start looking forward,<br>" +
        L(14) + "and the first lights of the other harbor<br>" +
        L(15) + "rise out of the black like small, kind questions." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a central idea of \"Night Ferry\"?",
          choices: [
            { letter: "A", text: "Leaving home can open the way to a hopeful new start." },
            { letter: "B", text: "The sea is far too dangerous for travel at night." },
            { letter: "C", text: "Families should never move far from their neighbors." },
            { letter: "D", text: "A ferry is the quickest way to cross a wide harbor." }
          ],
          correct: "A"
        },
        {
          id: "pocket",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 3, the image of the town folding its lights into a pocket mainly conveys that —",
          choices: [
            { letter: "A", text: "the people of the town are going to sleep early" },
            { letter: "B", text: "the town's lights vanish from view as the ferry moves away" },
            { letter: "C", text: "the speaker is hiding a secret from her mother" },
            { letter: "D", text: "the town is losing electric power during a storm" }
          ],
          correct: "B"
        },
        {
          id: "water",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "Lines 9–11 suggest that the water —",
          choices: [
            { letter: "A", text: "is angry at the passengers for leaving" },
            { letter: "B", text: "carries the gulls far away from the ship" },
            { letter: "C", text: "treats every traveler the same way" },
            { letter: "D", text: "grows calm only for the speaker's family" }
          ],
          correct: "C"
        },
        {
          id: "turn",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does line 13 mark a turning point in the poem?",
          choices: [
            { letter: "A", text: "The speaker decides to return to the town on the next ferry." },
            { letter: "B", text: "The speaker begins describing the ferry's crew and engine." },
            { letter: "C", text: "The speaker's mother takes over the telling of the poem." },
            { letter: "D", text: "The speaker's attention shifts from what is left to what is ahead." }
          ],
          correct: "D"
        },
        {
          id: "box",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Line 8 implies that the speaker's family —",
          choices: [
            { letter: "A", text: "has left most of its belongings behind" },
            { letter: "B", text: "is going away on a short vacation" },
            { letter: "C", text: "has had an argument with a neighbor" },
            { letter: "D", text: "is bringing a great deal of furniture" }
          ],
          correct: "A"
        },
        {
          id: "shoulders",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 1, the word shoulders suggests that the ferry —",
          choices: [
            { letter: "A", text: "drifts without a direction" },
            { letter: "B", text: "turns back toward the town" },
            { letter: "C", text: "pushes forward with effort" },
            { letter: "D", text: "sinks lower in the water" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c94-locomotive",
      family: "G11",
      title: "Again",
      kind: "Literary · 11.RL",
      blurb: "A toy maker's apprentice learns what one word of feedback can mean.",
      level: 2,
      passage:
        "<p>" + N(1) + "For three weeks Oskar had been carving the locomotive, and for three weeks Mr. Tesfaye had said only one word about it: \"Again.\" " +
        N(2) + "The first time, Oskar had thought the old toy maker was joking. " +
        N(3) + "The wheels were round, the smokestack was straight, and the little cab even had a window. " +
        N(4) + "But Mr. Tesfaye ran his thumb along the side, found a ridge Oskar could barely feel, and handed the engine back. " +
        N(5) + "By the second week, Oskar's palms were stained the color of walnut, and he had begun to dream about sandpaper. " +
        N(6) + "He sanded the boiler until it was smooth as a river stone and then saw, in the lamplight, that the wheels wobbled a hair on their axles. " +
        N(7) + "He drilled them out and fitted them again. " +
        N(8) + "\"A child will put this in her mouth, drop it down the stairs, and give it to her own child someday,\" Mr. Tesfaye said, watching him. " +
        N(9) + "\"It has to survive all three.\" " +
        N(10) + "On the last Friday of the month, Oskar set the locomotive on the bench without a word. " +
        N(11) + "Mr. Tesfaye picked it up, rolled it slowly down the length of the table, and listened to the wheels the way a doctor listens to a heartbeat. " +
        N(12) + "Then he set it on the shelf beside his own work, in the window where customers could see it. " +
        N(13) + "He did not say \"good.\" " +
        N(14) + "He did not need to. " +
        N(15) + "Oskar walked home that evening with his hands in his pockets, feeling the rough places on his fingers as if they were medals." +
        "</p>",
      claims: [
        {
          id: "change",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Which statement best describes how Oskar changes over the course of the story?",
          choices: [
            { letter: "A", text: "He moves from doubting the demands to taking pride in careful work." },
            { letter: "B", text: "He grows frustrated with his teacher and decides to quit the shop." },
            { letter: "C", text: "He loses interest in carving and turns to other kinds of toys." },
            { letter: "D", text: "He learns to finish his projects faster than his teacher can." }
          ],
          correct: "A"
        },
        {
          id: "shelf",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Readers can infer from sentences 12–14 that Mr. Tesfaye —",
          choices: [
            { letter: "A", text: "plans to sell the toy the next morning" },
            { letter: "B", text: "approves of the finished locomotive" },
            { letter: "C", text: "forgot to look closely at the wheels" },
            { letter: "D", text: "is too busy with customers to speak" }
          ],
          correct: "B"
        },
        {
          id: "medals",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 15, comparing the rough places on Oskar's fingers to medals emphasizes that he —",
          choices: [
            { letter: "A", text: "is embarrassed by how his hands look" },
            { letter: "B", text: "wants his teacher to praise him aloud" },
            { letter: "C", text: "is proud of the effort the work took" },
            { letter: "D", text: "has hurt himself badly with the tools" }
          ],
          correct: "C"
        },
        {
          id: "survive",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Mr. Tesfaye's words in sentences 8 and 9 contribute to the story mainly by —",
          choices: [
            { letter: "A", text: "revealing that he once sold toys to Oskar's family" },
            { letter: "B", text: "showing that he does not trust children with toys" },
            { letter: "C", text: "starting a new argument between him and Oskar" },
            { letter: "D", text: "explaining why he keeps telling Oskar to try again" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story of the carved locomotive best support?",
          choices: [
            { letter: "A", text: "True quality comes from patient, repeated effort." },
            { letter: "B", text: "Good teachers praise their students every day." },
            { letter: "C", text: "Toys are worth the most when they are brand new." },
            { letter: "D", text: "Natural talent matters more than steady practice." }
          ],
          correct: "A"
        },
        {
          id: "hair",
          sol: "11.RV.1.E",
          sub: "11.RV.1.E.1",
          stem: "In sentence 6, the phrase wobbled a hair on their axles suggests that the wobble is —",
          choices: [
            { letter: "A", text: "dangerous" },
            { letter: "B", text: "noisy" },
            { letter: "C", text: "permanent" },
            { letter: "D", text: "very slight" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-ri-c94-microfilm",
      family: "G11",
      title: "A Century on a Spool",
      kind: "Informational · 11.RI",
      blurb: "How rolls of film saved old newspapers, and what they cost.",
      level: 2,
      passage:
        "<p>" + N(1) + "Before anyone could search old newspapers on a screen, libraries saved them on microfilm, rolls of thin plastic film holding tiny photographs of every page. " +
        N(2) + "The method spread in the 1930s and 1940s, when librarians realized that newsprint, made from cheap wood pulp, was slowly destroying itself. " +
        N(3) + "Acids in the paper turned pages yellow, then brown, then brittle enough to crumble at a touch. " +
        N(4) + "Photographing each page shrank a year of a daily paper onto a few spools that fit in a shoebox. " +
        N(5) + "A reader threaded the film through a machine that projected the page, enlarged, onto a glass screen. " +
        N(6) + "Generations of students remember the experience the same way: the hum of the machine, the dizzy blur of pages whipping past, the hunt for the right date. " +
        N(7) + "Microfilm had real advantages. " +
        N(8) + "Stored in cool, dry rooms, it can last for centuries, far longer than the newsprint it copied and possibly longer than many digital files, which depend on software and equipment that change every few years. " +
        N(9) + "It also saved enormous amounts of shelf space. " +
        N(10) + "But the shift had a cost. " +
        N(11) + "To save room, many libraries threw away the original papers after filming them, losing color photographs, advertising inserts, and any page the camera had missed. " +
        N(12) + "Today, many digital newspaper collections are made by scanning microfilm rather than paper, because the original pages are gone. " +
        N(13) + "In a sense, the humble spool became the bridge between the printed past and the searchable present." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the central idea of the passage about microfilm?",
          choices: [
            { letter: "A", text: "Microfilm machines were noisy and hard for students to use." },
            { letter: "B", text: "Newsprint was cheap because it was made from wood pulp." },
            { letter: "C", text: "Microfilm saved old papers at a cost and now links print to digital." },
            { letter: "D", text: "Digital files will always outlast every other kind of record." }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, why did libraries begin filming their newspapers?",
          choices: [
            { letter: "A", text: "Acids in the newsprint were making the pages fall apart." },
            { letter: "B", text: "Readers wanted to search the papers on a computer screen." },
            { letter: "C", text: "Newspapers stopped printing color photographs in the 1930s." },
            { letter: "D", text: "Film was cheaper to buy than new shelves for the library." }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 10 serves mainly to —",
          choices: [
            { letter: "A", text: "introduce a newer invention that replaced film" },
            { letter: "B", text: "sum up every point the passage has made" },
            { letter: "C", text: "give a number that shows how much space was saved" },
            { letter: "D", text: "shift from the benefits of microfilm to its drawbacks" }
          ],
          correct: "D"
        },
        {
          id: "hum",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the details in sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "argue that microfilm machines should be retired" },
            { letter: "B", text: "help readers picture what using microfilm was like" },
            { letter: "C", text: "explain how the plastic film was manufactured" },
            { letter: "D", text: "prove that students prefer digital newspapers" }
          ],
          correct: "B"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best fits how the author develops sentences 7–11?",
          choices: [
            { letter: "A", text: "By telling the history of several inventions in order" },
            { letter: "B", text: "By weighing the advantages of a method against its costs" },
            { letter: "C", text: "By presenting one problem followed by three solutions" },
            { letter: "D", text: "By comparing the collections of two different libraries" }
          ],
          correct: "B"
        },
        {
          id: "view",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's view of microfilm is best described as —",
          choices: [
            { letter: "A", text: "entirely critical of its effects" },
            { letter: "B", text: "amused by its clumsy old machines" },
            { letter: "C", text: "uninterested in its long history" },
            { letter: "D", text: "balanced between its value and cost" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c94-weatherhold",
      family: "G11",
      title: "Weather Hold",
      kind: "Drama · 11.RL",
      blurb: "On launch morning, a balloon team argues with the wind.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A soccer field at dawn. A half-filled white balloon tugs at a tarp weighed down with sandbags. FARAH holds a clipboard; KENJI studies a handheld wind meter.</em></p>" +
        "<p><strong>FARAH:</strong> " + N(2) + "Twelve minutes to launch. " + N(3) + "The camera is recording, the tracker is on, and the parachute is packed. " + N(4) + "We're ready.</p>" +
        "<p><strong>KENJI:</strong> " + N(5) + "The wind isn't. " + N(6) + "Gusts are hitting twenty-two kilometers an hour. " + N(7) + "Our limit is fifteen.</p>" +
        "<p><strong>FARAH:</strong> " + N(8) + "It was calm ten minutes ago. " + N(9) + "It'll settle.</p>" +
        "<p><strong>KENJI:</strong> " + N(10) + "Or it'll slam the payload into the goalpost before it clears the fence.</p>" +
        "<p><em>" + N(11) + "A gust rattles the tarp. The balloon leans sideways like a sail.</em></p>" +
        "<p><strong>FARAH:</strong> " + N(12) + "We have spent four months on this, Kenji. " + N(13) + "The newspaper photographer is here. " + N(14) + "The whole club is watching.</p>" +
        "<p><strong>KENJI:</strong> <em>(quietly)</em> " + N(15) + "That's why I don't want them watching it crash.</p>" +
        "<p><strong>MS. DELGADO:</strong> <em>(walking over, coffee in hand)</em> " + N(16) + "What does your checklist say?</p>" +
        "<p><strong>FARAH:</strong> <em>(a long pause, then reading aloud)</em> " + N(17) + "\"Do not launch if sustained winds or gusts exceed fifteen kilometers per hour.\"</p>" +
        "<p><strong>MS. DELGADO:</strong> " + N(18) + "Then that's your answer, not mine.</p>" +
        "<p><strong>FARAH:</strong> <em>(lowering the clipboard)</em> " + N(19) + "Tell the photographer we're on a weather hold.</p>" +
        "<p><em>" + N(20) + "She kneels to tighten a sandbag, then looks up at the sky the way someone looks at a clock.</em></p>",
      claims: [
        {
          id: "farah",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes Farah at the beginning of the scene?",
          choices: [
            { letter: "A", text: "She is afraid the balloon will be lost." },
            { letter: "B", text: "She is eager to launch despite the wind." },
            { letter: "C", text: "She is bored by the long preparations." },
            { letter: "D", text: "She is unsure how the tracker works." }
          ],
          correct: "B"
        },
        {
          id: "quietly",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Kenji's quiet line in sentence 15 suggests that he —",
          choices: [
            { letter: "A", text: "wants to spare the team a public failure" },
            { letter: "B", text: "does not care what the photographer sees" },
            { letter: "C", text: "thinks the club members are being rude" },
            { letter: "D", text: "hopes Farah will leave the project" }
          ],
          correct: "A"
        },
        {
          id: "gust",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "The stage direction in sentence 11 contributes to the scene mainly by —",
          choices: [
            { letter: "A", text: "ending the disagreement between the two students" },
            { letter: "B", text: "introducing the teacher to the audience" },
            { letter: "C", text: "showing that the balloon is ready to fly" },
            { letter: "D", text: "backing up Kenji's warning about the wind" }
          ],
          correct: "D"
        },
        {
          id: "clock",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 20, Farah looking at the sky the way someone looks at a clock suggests that she —",
          choices: [
            { letter: "A", text: "has given up on the launch for good" },
            { letter: "B", text: "is worried about arriving late to class" },
            { letter: "C", text: "is waiting for conditions to change" },
            { letter: "D", text: "cannot tell what time of day it is" }
          ],
          correct: "C"
        },
        {
          id: "hold",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 19, the phrase weather hold most nearly means —",
          choices: [
            { letter: "A", text: "a final cancellation" },
            { letter: "B", text: "a pause for better conditions" },
            { letter: "C", text: "a storm warning" },
            { letter: "D", text: "a grip on the balloon" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the launch-morning scene most clearly develop?",
          choices: [
            { letter: "A", text: "An audience's hopes should decide when work is ready." },
            { letter: "B", text: "Friends should never disagree in front of others." },
            { letter: "C", text: "Following agreed safety rules can matter more than pride." },
            { letter: "D", text: "Science projects almost never work on the first try." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c94-winterferry",
      family: "G11",
      title: "Winter Service Notice",
      kind: "Functional text · 11.RI",
      blurb: "What island riders need to know when the ferry cuts back for winter.",
      level: 1,
      passage:
        "<p>" + N(1) + "<strong>Port Hallam to Gull Island Ferry: Winter Service</strong> " +
        N(2) + "From November 15 through March 15, the ferry will run on a reduced winter schedule.</p>" +
        "<p><strong>Departures</strong> " + N(3) + "Boats leave Port Hallam at 6:30 a.m., 9:00 a.m., 1:00 p.m., and 5:30 p.m. " +
        N(4) + "Return trips leave Gull Island one hour after each Port Hallam departure. " +
        N(5) + "There is no 8:00 p.m. boat in winter.</p>" +
        "<p><strong>Tickets</strong> " + N(6) + "Adult round-trip fares are $9; students with a valid school ID ride for $4. " +
        N(7) + "Vehicles must be booked online at least 24 hours ahead, because the winter boat carries only twelve cars.</p>" +
        "<p><strong>Weather</strong> " + N(8) + "Crossings may be canceled when winds exceed 40 knots or visibility drops below a quarter mile. " +
        N(9) + "Cancellations are posted on the ferry website and sent by text message at least one hour before departure. " +
        N(10) + "Sign up for text alerts at the ticket window.</p>" +
        "<p><strong>On Board</strong> " + N(11) + "Passengers must stay inside the cabin while the boat is docking. " +
        N(12) + "Pets must be leashed or carried in a closed crate. " +
        N(13) + "The snack counter is closed in winter, so bring your own food and water. " +
        N(14) + "Thank you for your patience during the winter months, when a smaller crew keeps the island connected.</p>",
      claims: [
        {
          id: "car",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the notice, a rider who wants to bring a car to Gull Island in winter must —",
          choices: [
            { letter: "A", text: "show a valid school ID at the ticket window" },
            { letter: "B", text: "take the 6:30 a.m. boat from Port Hallam" },
            { letter: "C", text: "book a space online at least a day ahead" },
            { letter: "D", text: "pay the full adult fare for each passenger" }
          ],
          correct: "C"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "How do the bold headings in the winter notice help a reader?",
          choices: [
            { letter: "A", text: "They group related rules so a rider can find them quickly." },
            { letter: "B", text: "They list the boats in the order they leave the dock." },
            { letter: "C", text: "They separate the facts in the notice from the opinions." },
            { letter: "D", text: "They show which rules matter most to the ferry crew." }
          ],
          correct: "A"
        },
        {
          id: "cancel",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence makes clear how riders will find out that a crossing has been canceled?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "B"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The winter notice is written mainly for —",
          choices: [
            { letter: "A", text: "crew members learning their duties" },
            { letter: "B", text: "tourists planning a summer vacation" },
            { letter: "C", text: "town officials voting on a budget" },
            { letter: "D", text: "riders planning trips in winter" }
          ],
          correct: "D"
        },
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the winter notice as a whole?",
          choices: [
            { letter: "A", text: "The ferry will stop running to Gull Island until March." },
            { letter: "B", text: "Student fares are rising because the crew is smaller." },
            { letter: "C", text: "Pets are no longer allowed on board the winter boat." },
            { letter: "D", text: "Winter service is reduced, so riders should plan ahead." }
          ],
          correct: "D"
        },
        {
          id: "snack",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 13 serves mainly to —",
          choices: [
            { letter: "A", text: "warn riders that food is not allowed in the cabin" },
            { letter: "B", text: "explain why the winter boat holds only twelve cars" },
            { letter: "C", text: "note a change and tell riders how to prepare for it" },
            { letter: "D", text: "persuade riders to buy snacks at the ticket window" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-c94-papertrail",
      family: "G11",
      title: "Don't Pulp the Paper Trail",
      kind: "Argument · 11.RI",
      blurb: "A writer argues that scanned newspapers should not replace the originals.",
      level: 3,
      passage:
        "<p>" + N(1) + "The Ridgeway Historical Society plans to recycle its bound volumes of the Ridgeway Ledger once its scanning project finishes next spring, and on paper, the logic is tidy. " +
        N(2) + "The scans will be free, searchable, and safe from the leaky basement where the volumes now sit. " +
        N(3) + "Storage costs money, and the society's budget is thin. " +
        N(4) + "Still, recycling the originals would be a mistake the town cannot undo. " +
        N(5) + "A scan is a copy, and copies leave things out. " +
        N(6) + "Last year, volunteers testing the scanner found that pages with faded ink came out nearly blank, and that handwritten notes in the margins, such as a reporter's corrections or a reader's angry reply, often disappeared entirely. " +
        N(7) + "No one can rescan a page that has been pulped. " +
        N(8) + "Digital files also carry their own fragility. " +
        N(9) + "The society's first digitization effort, in 2003, stored images on discs that its current computers can no longer read. " +
        N(10) + "That project now exists only as a box of shiny, useless plastic. " +
        N(11) + "Keeping the volumes need not be expensive. " +
        N(12) + "The county library has offered shelf space in its dry upper storeroom at no charge, and a weekend of student volunteers could move the entire collection. " +
        N(13) + "Scanning should go forward, but as a second copy, not a replacement. " +
        N(14) + "A town that throws away its only originals is betting that every future machine will understand today's files, and history suggests that bet is a poor one." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence states the writer's central claim most directly?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "digital",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which evidence does the writer offer to show that digital records can also be lost?",
          choices: [
            { letter: "A", text: "Pages with faded ink came out nearly blank." },
            { letter: "B", text: "The library has offered free shelf space." },
            { letter: "C", text: "The 2003 discs can no longer be read." },
            { letter: "D", text: "The society's basement has a leak." }
          ],
          correct: "C"
        },
        {
          id: "opposing",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "In sentences 1–3, the writer's handling of the opposing view is best described as —",
          choices: [
            { letter: "A", text: "mocking, treating the society's reasons as foolish" },
            { letter: "B", text: "persuaded, agreeing that the volumes should go" },
            { letter: "C", text: "confused, unsure what the society has planned" },
            { letter: "D", text: "fair, granting its reasons before disagreeing" }
          ],
          correct: "D"
        },
        {
          id: "pulped",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 7 functions mainly to —",
          choices: [
            { letter: "A", text: "stress that losing an original is permanent" },
            { letter: "B", text: "introduce the society's main counterargument" },
            { letter: "C", text: "estimate what new storage would cost the town" },
            { letter: "D", text: "describe how the scanner handles faded pages" }
          ],
          correct: "A"
        },
        {
          id: "plastic",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "The writer describes the 2003 project as a box of shiny, useless plastic in sentence 10 mainly to —",
          choices: [
            { letter: "A", text: "complain that discs are hard to recycle" },
            { letter: "B", text: "show how completely that record failed" },
            { letter: "C", text: "suggest that the discs could be sold" },
            { letter: "D", text: "praise the design of the early discs" }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the writer organize the argument as a whole?",
          choices: [
            { letter: "A", text: "By telling the society's history from its founding onward" },
            { letter: "B", text: "By listing the steps volunteers follow to scan a page" },
            { letter: "C", text: "By granting the other side, answering it, and offering a fix" },
            { letter: "D", text: "By comparing the Ledger with other newspapers of its time" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rv-c94-oakridgelaunch",
      family: "G11",
      title: "Twenty-Nine Kilometers",
      kind: "Vocabulary · 11.RV",
      blurb: "A school weather club sends up its first balloon and goes looking for it.",
      level: 1,
      passage:
        "<p>" + N(1) + "At 7:15 on a cold Saturday, the Oakridge High weather club released its first balloon from the school track. " +
        N(2) + "The latex balloon was so <strong>buoyant</strong> that two students had to hold the launch line with both hands to keep it from pulling free. " +
        N(3) + "When club president Yusuf Rahimi gave the signal, they let go, and the balloon shot upward faster than anyone expected. " +
        N(4) + "Its <strong>ascent</strong> took almost two hours, carrying a small camera and a radio box higher than passenger jets fly. " +
        N(5) + "Every few seconds, the box would <strong>transmit</strong> its location and the air temperature to a laptop on the bleachers, where students crowded around the screen. " +
        N(6) + "At about twenty-nine kilometers, the altitude readings stopped climbing and began to fall: the balloon had burst. " +
        N(7) + "The parachute opened, and the <strong>descent</strong> began, slow and swaying, over farm fields to the east. " +
        N(8) + "The team piled into two cars to <strong>retrieve</strong> the camera and radio box before dark. " +
        N(9) + "They found both in a soybean field, the parachute tangled in a fence, eleven miles from school. " +
        N(10) + "The camera was scratched but working. " +
        N(11) + "Back in the classroom, the club gathered to watch the footage: the track shrinking to a gray oval, the clouds flattening into a white floor, the sky darkening from blue to nearly black. " +
        N(12) + "Nobody said much at first. " +
        N(13) + "Then Yusuf broke the silence. " +
        N(14) + "\"I have never been so <strong>exhilarated</strong> by a video I helped make,\" he said, and the whole room laughed and cheered." +
        "</p>",
      claims: [
        {
          id: "transmit",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word transmit in sentence 5 begins with the prefix trans-, as in transport and transfer. The prefix trans- means —",
          choices: [
            { letter: "A", text: "across" },
            { letter: "B", text: "before" },
            { letter: "C", text: "against" },
            { letter: "D", text: "beneath" }
          ],
          correct: "A"
        },
        {
          id: "descent",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "Ascent (sentence 4) and descent (sentence 7) share a root meaning to climb. The prefix de- shows that descent means —",
          choices: [
            { letter: "A", text: "climbing upward" },
            { letter: "B", text: "moving downward" },
            { letter: "C", text: "staying level" },
            { letter: "D", text: "speeding up" }
          ],
          correct: "B"
        },
        {
          id: "buoyant",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which detail best helps the reader understand the meaning of buoyant in sentence 2?",
          choices: [
            { letter: "A", text: "The balloon was made of latex." },
            { letter: "B", text: "The club launched it on a cold Saturday." },
            { letter: "C", text: "Two students held it to keep it from pulling free." },
            { letter: "D", text: "The balloon carried a small camera." }
          ],
          correct: "C"
        },
        {
          id: "retrieve",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Sentences 8 and 9 help show that retrieve most nearly means —",
          choices: [
            { letter: "A", text: "photograph" },
            { letter: "B", text: "repair" },
            { letter: "C", text: "follow" },
            { letter: "D", text: "bring back" }
          ],
          correct: "D"
        },
        {
          id: "exhilarated",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The word exhilarated in sentence 14 suggests that Yusuf felt —",
          choices: [
            { letter: "A", text: "thrilled and full of energy" },
            { letter: "B", text: "tired but finally relieved" },
            { letter: "C", text: "nervous and a little unsure" },
            { letter: "D", text: "calm and quietly satisfied" }
          ],
          correct: "A"
        },
        {
          id: "swaying",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "In sentence 7, the words slow and swaying give the balloon's fall a feeling that is —",
          choices: [
            { letter: "A", text: "sudden and violent" },
            { letter: "B", text: "loud and crowded" },
            { letter: "C", text: "gentle and drifting" },
            { letter: "D", text: "tense and frightening" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-dsr-c94-narrows",
      family: "G11",
      title: "Bridge or Boat",
      kind: "Paired texts · 11.DSR",
      blurb: "A county board studies a bridge; an island commuter asks it to slow down.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the minutes of the Kessler County Transportation Board</strong></p>" +
        "<p>" + N(1) + "Engineer Rosa Velasquez presented the feasibility study for a bridge across the Kessler Narrows. " +
        N(2) + "The bridge would cost an estimated $180 million and take six years to build. " +
        N(3) + "Once open, it would cut the average crossing from forty minutes, including waiting time, to six. " +
        N(4) + "The study projects that traffic to Marten Island would roughly triple within a decade. " +
        N(5) + "Board member Dale Okafor noted that the current ferry loses about $1.2 million a year and will need a new vessel by 2030. " +
        N(6) + "Several residents spoke in favor, citing missed medical appointments when winter storms canceled ferry runs. " +
        N(7) + "The board voted 4–1 to seek state funding for a design phase. " +
        N(8) + "Member Joan Pike voted no, saying the island's roads and water system were not built for triple the traffic.</p>" +
        "<p><strong>Text 2 — Letter to the editor, Marten Island Gazette</strong></p>" +
        "<p>" + N(9) + "I have ridden the Narrows ferry to work for nineteen years, and I will not pretend it is always pleasant. " +
        N(10) + "But before the county spends $180 million, I hope the board asks what a faster crossing will cost the island itself. " +
        N(11) + "The study promises triple the traffic as if that were good news. " +
        N(12) + "Our two-lane roads already clog every summer weekend, and our wells ran low in August. " +
        N(13) + "The ferry is slow, yes, but that slowness is a kind of gate; it keeps the island a place people visit rather than a place people rush through. " +
        N(14) + "Fix the storm problem with a sturdier boat and an emergency medical launch. " +
        N(15) + "Then let us talk about bridges.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail is mentioned in both the board minutes and the letter?",
          choices: [
            { letter: "A", text: "The ferry loses about $1.2 million a year." },
            { letter: "B", text: "The bridge would cost about $180 million." },
            { letter: "C", text: "The board voted 4–1 to seek state funds." },
            { letter: "D", text: "The crossing takes forty minutes on average." }
          ],
          correct: "B"
        },
        {
          id: "traffic",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "The study in Text 1 presents the tripling of traffic as a projection. The letter writer treats it as —",
          choices: [
            { letter: "A", text: "a threat to the island's roads and water" },
            { letter: "B", text: "proof that the bridge would pay for itself" },
            { letter: "C", text: "a sign that the ferry is popular with riders" },
            { letter: "D", text: "an error in the engineer's arithmetic" }
          ],
          correct: "A"
        },
        {
          id: "twosent",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences from Text 1 that lend support to the concerns raised in Text 2.",
          choices: [
            { letter: "A", text: "Sentence 3 (Once open, it would cut the average crossing...)" },
            { letter: "B", text: "Sentence 4 (The study projects that traffic to Marten Island would roughly triple...)" },
            { letter: "C", text: "Sentence 7 (The board voted 4–1 to seek state funding...)" },
            { letter: "D", text: "Sentence 8 (Member Joan Pike voted no, saying the island's roads...)" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How do the purposes of the two texts differ?",
          choices: [
            { letter: "A", text: "Text 1 argues for the bridge, while Text 2 reports on the meeting." },
            { letter: "B", text: "Both texts try to persuade the board to buy a new ferry right away." },
            { letter: "C", text: "Text 1 records a meeting, while Text 2 urges readers to slow the plan." },
            { letter: "D", text: "Text 1 explains engineering, while Text 2 tells the island's history." }
          ],
          correct: "C"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The letter writer's attitude toward the bridge plan is best described as —",
          choices: [
            { letter: "A", text: "enthusiastic" },
            { letter: "B", text: "indifferent" },
            { letter: "C", text: "bitterly hostile" },
            { letter: "D", text: "cautious" }
          ],
          correct: "D"
        },
        {
          id: "gate",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "In sentence 13, calling the ferry's slowness a kind of gate helps the writer suggest that —",
          choices: [
            { letter: "A", text: "the ferry dock should have a locked entrance" },
            { letter: "B", text: "the island should charge every visitor a fee" },
            { letter: "C", text: "the slow crossing shields the island from heavy traffic" },
            { letter: "D", text: "commuters should arrive early to avoid long lines" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rl-c94-sentinel",
      family: "G11",
      title: "Gray Rectangles",
      kind: "Literary · 11.RL",
      blurb: "A teen scanning old newspapers finds a stranger who turns out to be family.",
      level: 3,
      passage:
        "<p>" + N(1) + "The archive of the Halvorsen Daily Sentinel lives in a basement that smells of dust and old glue, and for six Saturdays I had been the only person under sixty in it. " +
        N(2) + "My job was simple: unfold each brittle page, lay it flat under the scanner's glass, press the button, and move on. " +
        N(3) + "I had stopped reading the pages around the second week; they were just interchangeable gray rectangles to feed the machine. " +
        N(4) + "Then, in a June 1962 issue, a name stopped my hand: Lan Zhou, my grandmother. " +
        N(5) + "The headline said SENTINEL SCIENCE PRIZE GOES TO FARM GIRL'S RAIN GAUGE, and beneath it was a photograph of a serious girl my age holding a contraption of funnels and glass tubes. " +
        N(6) + "I knew my grandmother as a woman who folded dumplings and watched game shows, not as anyone who had ever won anything. " +
        N(7) + "That evening I showed her the printout. " +
        N(8) + "She held it at arm's length, then close, then at arm's length again, as if the girl in the picture might come into focus as someone else. " +
        N(9) + "\"They spelled the town wrong,\" she said at last. " +
        N(10) + "\"Why didn't you ever tell us?\" " +
        N(11) + "She shrugged. " +
        N(12) + "\"You never asked what I did before I was your grandmother.\" " +
        N(13) + "The next Saturday, I went back to the basement and slowed down. " +
        N(14) + "I read the wedding notices and the hardware-store ads and the letters about potholes, and every gray rectangle looked to me like a door someone had left unlocked." +
        "</p>",
      claims: [
        {
          id: "idea",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which idea is most clearly developed by the narrator's discovery in the archive?",
          choices: [
            { letter: "A", text: "Old newspapers are usually full of careless errors." },
            { letter: "B", text: "People we know well may have histories worth asking about." },
            { letter: "C", text: "Volunteer work is rarely as rewarding as people claim." },
            { letter: "D", text: "Winning a prize matters less as a person grows older." }
          ],
          correct: "B"
        },
        {
          id: "spelled",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The grandmother's remark in sentence 9 that the paper spelled the town wrong most likely suggests that she —",
          choices: [
            { letter: "A", text: "is steering attention away from her own feelings" },
            { letter: "B", text: "is still angry at the newspaper after many years" },
            { letter: "C", text: "does not recognize the girl in the photograph" },
            { letter: "D", text: "wants the narrator to correct the archive's records" }
          ],
          correct: "A"
        },
        {
          id: "door",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 14, comparing each page to a door someone had left unlocked suggests that the narrator now sees the pages as —",
          choices: [
            { letter: "A", text: "hazards that must be guarded" },
            { letter: "B", text: "obstacles that slow her work" },
            { letter: "C", text: "escapes from a dull job" },
            { letter: "D", text: "ways into other people's lives" }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Which statement best describes how the passage is structured?",
          choices: [
            { letter: "A", text: "Two characters trade memories in alternating scenes." },
            { letter: "B", text: "The story jumps back and forth between 1962 and today." },
            { letter: "C", text: "A routine task is interrupted by a discovery that changes it." },
            { letter: "D", text: "A problem is introduced and then left unresolved at the end." }
          ],
          correct: "C"
        },
        {
          id: "armslength",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentence 8 reveals that the grandmother —",
          choices: [
            { letter: "A", text: "struggles to connect her present self with the girl pictured" },
            { letter: "B", text: "cannot read the printout without her glasses" },
            { letter: "C", text: "is annoyed that the narrator went through old papers" },
            { letter: "D", text: "is proud and eager to tell the whole story at once" }
          ],
          correct: "A"
        },
        {
          id: "interchangeable",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word interchangeable in sentence 3 is built from inter- (between), change, and -able. It shows that the narrator saw the pages as —",
          choices: [
            { letter: "A", text: "too fragile to handle safely" },
            { letter: "B", text: "changed by the scanner's light" },
            { letter: "C", text: "arranged in the wrong order" },
            { letter: "D", text: "able to be swapped for one another" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-ri-c94-toytesting",
      family: "G11",
      title: "Built to Be Broken",
      kind: "Informational · 11.RI",
      blurb: "The drop, pull and choke tests a toy faces before it reaches a shelf.",
      level: 3,
      passage:
        "<p>" + N(1) + "Before a toy reaches a store shelf, someone has usually spent days trying to destroy it. " +
        N(2) + "Toy makers in many countries must show that their products survive the kind of treatment young children give everything they own. " +
        N(3) + "The testing begins with drops. " +
        N(4) + "Technicians release a toy again and again from about the height of a kitchen table onto a hard floor, then examine it for cracks or loose pieces. " +
        N(5) + "Next come pulls and twists: a clamp grips a teddy bear's eye or a doll's arm and tugs with steadily increasing force, imitating a determined toddler. " +
        N(6) + "Any piece that breaks free goes to the most important test of all. " +
        N(7) + "For toys meant for children under three, each loose part is dropped into a small plastic cylinder roughly the width of a young child's throat. " +
        N(8) + "If the part fits completely inside, it counts as a choking hazard, and the toy fails. " +
        N(9) + "These tests explain several features parents may never notice. " +
        N(10) + "Stuffed animals often have embroidered eyes instead of buttons. " +
        N(11) + "Wheels on baby toys are molded in one piece with their axles. " +
        N(12) + "Battery covers are held shut with tiny screws rather than simple latches. " +
        N(13) + "Some designers find the rules frustrating, since a clever idea can fail because one knob is a few millimeters too small. " +
        N(14) + "Yet most see the testing as part of the craft rather than an obstacle to it. " +
        N(15) + "As one longtime designer puts it, a good toy is not one that is unbreakable but one that breaks safely." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of \"Built to Be Broken\"?",
          choices: [
            { letter: "A", text: "Most toys break within a few weeks of being bought." },
            { letter: "B", text: "Designers would rather work without any safety rules." },
            { letter: "C", text: "Demanding safety tests protect children and shape toy design." },
            { letter: "D", text: "Stuffed animals are the safest toys for young children." }
          ],
          correct: "C"
        },
        {
          id: "sequence",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author organizes sentences 3–8 mainly by —",
          choices: [
            { letter: "A", text: "walking through a series of tests in order" },
            { letter: "B", text: "comparing toy rules in several countries" },
            { letter: "C", text: "telling the story of one famous toy recall" },
            { letter: "D", text: "listing complaints that parents have made" }
          ],
          correct: "A"
        },
        {
          id: "examples",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentences 10–12 serve mainly to —",
          choices: [
            { letter: "A", text: "argue that buttons should be banned from toys" },
            { letter: "B", text: "give everyday examples of features the tests produce" },
            { letter: "C", text: "explain how batteries power most modern toys" },
            { letter: "D", text: "show that designers ignore what parents want" }
          ],
          correct: "B"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward toy safety testing is best described as —",
          choices: [
            { letter: "A", text: "mocking" },
            { letter: "B", text: "fearful" },
            { letter: "C", text: "impatient" },
            { letter: "D", text: "respectful" }
          ],
          correct: "D"
        },
        {
          id: "cylinder",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, what happens when a loose part fits completely inside the test cylinder?",
          choices: [
            { letter: "A", text: "It is glued back onto the toy more firmly." },
            { letter: "B", text: "It counts as a choking hazard, and the toy fails." },
            { letter: "C", text: "It is dropped again from the height of a table." },
            { letter: "D", text: "It is approved for children older than three." }
          ],
          correct: "B"
        },
        {
          id: "unbreakable",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "In sentence 15, the word unbreakable combines un-, break, and -able. The word describes something that —",
          choices: [
            { letter: "A", text: "breaks very easily" },
            { letter: "B", text: "was broken before" },
            { letter: "C", text: "has been repaired" },
            { letter: "D", text: "cannot be broken" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-rl-c94-radiosonde",
      family: "G11",
      title: "Radiosonde",
      kind: "Poetry · 11.RL",
      blurb: "A weather instrument describes its one long flight.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "They tie me to a lantern made of breath<br>" +
        L(2) + "and let the morning have me. Up I go,<br>" +
        L(3) + "reporting every second what I feel:<br>" +
        L(4) + "the cold, the wet, the weight of all that air<br>" +
        L(5) + "pressing less and less upon my shoulders.<br>" +
        L(6) + "Below, the field becomes a postage stamp,<br>" +
        L(7) + "the town a scatter of salt across a table.</p>" +
        "<p class=\"poem\">" +
        L(8) + "I never asked to see so far. My job<br>" +
        L(9) + "is only numbers, honest ones, sent down<br>" +
        L(10) + "to people who will never learn my name.<br>" +
        L(11) + "When the bright skin above me finally splits,<br>" +
        L(12) + "I fall the way a seed falls, slow and spinning,<br>" +
        L(13) + "and somewhere in a kitchen far below,<br>" +
        L(14) + "a forecast tells a child to bring an umbrella." +
        "</p>",
      claims: [
        {
          id: "lantern",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 1, the phrase a lantern made of breath refers to —",
          choices: [
            { letter: "A", text: "the gas-filled balloon" },
            { letter: "B", text: "a lamp on the instrument" },
            { letter: "C", text: "the rising morning sun" },
            { letter: "D", text: "the speaker's own voice" }
          ],
          correct: "A"
        },
        {
          id: "stamp",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "Lines 6–7, comparing the field to a postage stamp and the town to salt on a table, mainly emphasize —",
          choices: [
            { letter: "A", text: "how crowded the town has become" },
            { letter: "B", text: "the speaker's fear of falling" },
            { letter: "C", text: "how small the ground looks from high up" },
            { letter: "D", text: "the speaker's wish to return home" }
          ],
          correct: "C"
        },
        {
          id: "name",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Lines 8–10 suggest that the speaker —",
          choices: [
            { letter: "A", text: "resents the people who launched it" },
            { letter: "B", text: "takes quiet pride in unnoticed work" },
            { letter: "C", text: "hopes to become famous someday" },
            { letter: "D", text: "regrets leaving the field behind" }
          ],
          correct: "B"
        },
        {
          id: "stanzas",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the shift from the first stanza to the second shape the poem's meaning?",
          choices: [
            { letter: "A", text: "The first stanza is cheerful, and the second turns angry and bitter." },
            { letter: "B", text: "The first stanza is set at night, and the second takes place at noon." },
            { letter: "C", text: "The first stanza gives the forecast, and the second gives the launch." },
            { letter: "D", text: "The first stanza shows the climb; the second reflects on its purpose." }
          ],
          correct: "D"
        },
        {
          id: "honest",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 9, the word honest suggests that the numbers the speaker sends are —",
          choices: [
            { letter: "A", text: "cheerful and hopeful" },
            { letter: "B", text: "few and simple" },
            { letter: "C", text: "accurate and reliable" },
            { letter: "D", text: "secret and private" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does \"Radiosonde\" best express?",
          choices: [
            { letter: "A", text: "Travel is the best way to understand the world." },
            { letter: "B", text: "Humble, unseen work can matter to many people." },
            { letter: "C", text: "Machines will one day replace human forecasters." },
            { letter: "D", text: "Everything that rises must eventually be lost." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rl-c94-deckhand",
      family: "G11",
      title: "Just the Loop",
      kind: "Literary · 11.RL",
      blurb: "A new deckhand's first throw lands in the harbor.",
      level: 1,
      passage:
        "<p>" + N(1) + "On his first morning as a summer deckhand, Kofi Mensah arrived at the dock forty minutes early and still felt late. " +
        N(2) + "The ferry Margaret Ann was already rumbling, her engines shaking the planks beneath his new boots. " +
        N(3) + "Rosa Ferreira, who had worked the boat for twelve years, handed him a pair of gloves and a coil of rope as thick as his wrist. " +
        N(4) + "\"When we come into Clay Harbor, you throw this to the man on the dock,\" she said. " +
        N(5) + "\"Just the loop. Not the whole thing. And not into the water.\" " +
        N(6) + "Kofi practiced the throw in his head the whole way across, while cars ticked and settled on the deck and gulls hung in the wind beside the rail. " +
        N(7) + "When the dock slid close, he swung his arm and let go. " +
        N(8) + "The loop fell short and slapped the water like a dropped dinner plate. " +
        N(9) + "A few passengers at the rail laughed. " +
        N(10) + "Kofi's face burned. " +
        N(11) + "Rosa did not laugh. " +
        N(12) + "She hauled the wet rope back hand over hand, coiled it at his feet, and said, \"Again. Use your legs, not just your arm.\" " +
        N(13) + "The second throw landed on the dock, and the man there dropped the loop over a post without even looking up. " +
        N(14) + "Over the next eight crossings, Kofi threw the line eight more times. " +
        N(15) + "By evening his shoulders ached, his gloves were soaked, and the rope felt almost light in his hands." +
        "</p>",
      claims: [
        {
          id: "kofi",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes Kofi at the beginning of the story?",
          choices: [
            { letter: "A", text: "He is anxious to do well at his new job." },
            { letter: "B", text: "He is bored by the slow ferry routine." },
            { letter: "C", text: "He is sure he already knows the work." },
            { letter: "D", text: "He is angry that he must work all summer." }
          ],
          correct: "A"
        },
        {
          id: "plate",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 8, comparing the loop to a dropped dinner plate mainly emphasizes —",
          choices: [
            { letter: "A", text: "how heavy the rope was to lift" },
            { letter: "B", text: "how hungry Kofi felt by then" },
            { letter: "C", text: "how loud and clumsy the miss was" },
            { letter: "D", text: "how cold the harbor water was" }
          ],
          correct: "C"
        },
        {
          id: "burned",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 10, the statement that Kofi's face burned means that he —",
          choices: [
            { letter: "A", text: "had a bad sunburn" },
            { letter: "B", text: "felt embarrassed" },
            { letter: "C", text: "was running a fever" },
            { letter: "D", text: "was angry at Rosa" }
          ],
          correct: "B"
        },
        {
          id: "rosa",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Readers can infer from sentences 11 and 12 that Rosa —",
          choices: [
            { letter: "A", text: "regrets hiring a deckhand so young" },
            { letter: "B", text: "plans to do the throwing herself" },
            { letter: "C", text: "agrees with the laughing passengers" },
            { letter: "D", text: "sees mistakes as part of learning" }
          ],
          correct: "D"
        },
        {
          id: "light",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The detail in sentence 15 that the rope felt almost light suggests that Kofi —",
          choices: [
            { letter: "A", text: "has switched to a thinner rope" },
            { letter: "B", text: "has grown more skilled and confident" },
            { letter: "C", text: "is too tired to feel his hands" },
            { letter: "D", text: "no longer cares about the job" }
          ],
          correct: "B"
        },
        {
          id: "hauled",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 12, the word hauled most nearly means —",
          choices: [
            { letter: "A", text: "tossed lightly" },
            { letter: "B", text: "cut loose" },
            { letter: "C", text: "pulled with effort" },
            { letter: "D", text: "tied tightly" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-rv-c94-heraldlegend",
      family: "G11",
      title: "Oars and All",
      kind: "Vocabulary · 11.RV",
      blurb: "A student brings a family legend to a newspaper archive to see if it holds up.",
      level: 3,
      passage:
        "<p>" + N(1) + "Diego Castillo came to the Port Fallon Herald archive with a family legend: his great-great-grandfather, the story went, had rowed alone across the bay during the storm of 1911 to bring a doctor to the island. " +
        N(2) + "The archivist, Amara Nwosu, listened without smiling or frowning. " +
        N(3) + "\"A legend is a <strong>conjecture</strong> until a source confirms it,\" she said. " +
        N(4) + "\"Let's see whether the Herald can <strong>corroborate</strong> it.\" " +
        N(5) + "The paper had published a daily <strong>chronicle</strong> of harbor news for more than a century, and she knew its quirks the way a gardener knows soil. " +
        N(6) + "Together they paged through the storm week on a reading screen. " +
        N(7) + "Many columns were <strong>illegible</strong>, the ink smeared by a flood in the archive during the 1950s. " +
        N(8) + "But on the fourth day after the storm, they found a short notice: R. CASTILLO, FISHERMAN, BRINGS DOCTOR TO ISLAND IN OPEN BOAT. " +
        N(9) + "Diego grinned, but Ms. Nwosu tapped a detail in the same column. " +
        N(10) + "The article praised Castillo's \"motor launch,\" which contradicted the family's story of oars. " +
        N(11) + "\"Is that a mistake?\" Diego asked. " +
        N(12) + "\"Possibly,\" she said. " +
        N(13) + "\"Or perhaps the oars are the <strong>anachronism</strong>, a detail from an earlier time that slipped into your story over the years.\" " +
        N(14) + "Diego left with a photocopy and more questions than he had brought. " +
        N(15) + "Still, he told his mother that night that the archive had been <strong>indispensable</strong>: without it, the legend would have stayed a legend, oars and all." +
        "</p>",
      claims: [
        {
          id: "illegible",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word illegible in sentence 7 begins with the prefix il-, as in illogical and illegal. Based on this prefix and the context, illegible means —",
          choices: [
            { letter: "A", text: "printed in faded color" },
            { letter: "B", text: "impossible to read" },
            { letter: "C", text: "written in a hurry" },
            { letter: "D", text: "read many times" }
          ],
          correct: "B"
        },
        {
          id: "chron",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "Chronicle (sentence 5) and anachronism (sentence 13) share the Greek root chron. Based on this root, both words relate to —",
          choices: [
            { letter: "A", text: "water" },
            { letter: "B", text: "money" },
            { letter: "C", text: "writing" },
            { letter: "D", text: "time" }
          ],
          correct: "D"
        },
        {
          id: "corroborate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which phrase from the passage best helps the reader understand the meaning of corroborate in sentence 4?",
          choices: [
            { letter: "A", text: "until a source confirms it" },
            { letter: "B", text: "without smiling or frowning" },
            { letter: "C", text: "paged through the storm week" },
            { letter: "D", text: "left with a photocopy" }
          ],
          correct: "A"
        },
        {
          id: "conjecture",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word conjecture most nearly means —",
          choices: [
            { letter: "A", text: "a proven fact" },
            { letter: "B", text: "a funny story" },
            { letter: "C", text: "an unproven guess" },
            { letter: "D", text: "a written record" }
          ],
          correct: "C"
        },
        {
          id: "indispensable",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The word indispensable in sentence 15 suggests that Diego found the archive —",
          choices: [
            { letter: "A", text: "absolutely necessary" },
            { letter: "B", text: "mildly interesting" },
            { letter: "C", text: "hard to use" },
            { letter: "D", text: "rather confusing" }
          ],
          correct: "A"
        },
        {
          id: "gardener",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "In sentence 5, saying Ms. Nwosu knows the paper's quirks the way a gardener knows soil suggests that her knowledge is —",
          choices: [
            { letter: "A", text: "recent and shaky" },
            { letter: "B", text: "drawn from books alone" },
            { letter: "C", text: "limited to plants" },
            { letter: "D", text: "deep and built over time" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g11-dsr-c94-repaircafe",
      family: "G11",
      title: "The Toy Repair Cafe",
      kind: "Paired texts · 11.DSR",
      blurb: "A flyer and a volunteer's blog explain why people fix broken toys.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Flyer from the Linden Street Community Center</strong></p>" +
        "<p>" + N(1) + "Is a favorite toy broken? " +
        N(2) + "Bring it to the Toy Repair Cafe on the first Saturday of every month, 10 a.m. to 2 p.m., in the community center's art room. " +
        N(3) + "Volunteer fixers will mend wind-up toys, stuffed animals, wooden trains, and battery toys for free. " +
        N(4) + "Children are welcome to sit beside the fixer and help with the repair. " +
        N(5) + "Every year, huge numbers of toys end up in landfills, many with problems as small as a loose seam or a dead switch. " +
        N(6) + "Repairing them saves families money and keeps plastic out of the trash. " +
        N(7) + "Please bring only one toy per child so that everyone gets a turn. " +
        N(8) + "We cannot fix toys with cracked batteries or sharp broken edges.</p>" +
        "<p><strong>Text 2 — From a volunteer's blog</strong></p>" +
        "<p>" + N(9) + "Last Saturday a girl named Ximena brought in a stuffed fox with a split seam and most of its stuffing gone. " +
        N(10) + "Her mother apologized for taking up my time, saying they could easily buy a new one. " +
        N(11) + "Ximena only held the fox tighter. " +
        N(12) + "I showed her how to thread the needle, and she made the last three stitches herself, crooked and careful. " +
        N(13) + "When we finished, she named the scar along the fox's belly \"the Saturday line.\" " +
        N(14) + "People often ask me whether the Repair Cafe is really about saving money or saving the planet. " +
        N(15) + "Both of those matter. " +
        N(16) + "But mostly, I think, we are saving the stories kids have already started with their toys.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea do the flyer and the blog post both support?",
          choices: [
            { letter: "A", text: "Broken toys should be replaced right away." },
            { letter: "B", text: "The cafe charges a small fee for repairs." },
            { letter: "C", text: "Children can help repair their own toys." },
            { letter: "D", text: "Only wooden toys can be fixed at the cafe." }
          ],
          correct: "C"
        },
        {
          id: "reason",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How does the blogger's main reason for repairing toys differ from the flyer's?",
          choices: [
            { letter: "A", text: "The flyer stresses money and waste; the blog stresses kids' stories." },
            { letter: "B", text: "The flyer stresses kids' stories; the blog stresses saving money." },
            { letter: "C", text: "The flyer stresses safety; the blog stresses keeping plastic out of trash." },
            { letter: "D", text: "The flyer stresses learning skills; the blog stresses a quick fix." }
          ],
          correct: "A"
        },
        {
          id: "twosent",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences, one from each text, that show children taking part in repairs.",
          choices: [
            { letter: "A", text: "Sentence 3 (Volunteer fixers will mend wind-up toys...)" },
            { letter: "B", text: "Sentence 4 (Children are welcome to sit beside the fixer...)" },
            { letter: "C", text: "Sentence 10 (Her mother apologized for taking up my time...)" },
            { letter: "D", text: "Sentence 12 (I showed her how to thread the needle...)" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "fox",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Based on both texts, why was the cafe able to accept Ximena's fox?",
          choices: [
            { letter: "A", text: "It was the only toy she owned." },
            { letter: "B", text: "Her mother paid for the repair." },
            { letter: "C", text: "It was a wooden toy, not plastic." },
            { letter: "D", text: "It had a split seam, not a sharp break." }
          ],
          correct: "D"
        },
        {
          id: "cannot",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the flyer, which toys can the cafe NOT repair?",
          choices: [
            { letter: "A", text: "Stuffed animals with split seams" },
            { letter: "B", text: "Wind-up toys with broken springs" },
            { letter: "C", text: "Toys with cracked batteries or sharp edges" },
            { letter: "D", text: "Battery toys with a dead switch" }
          ],
          correct: "C"
        },
        {
          id: "saturdayline",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The blogger includes Ximena's name for the scar, the Saturday line, mainly to —",
          choices: [
            { letter: "A", text: "explain how a seam is properly sewn" },
            { letter: "B", text: "show the repair is now part of the fox's story" },
            { letter: "C", text: "suggest that the cafe also opens on weekdays" },
            { letter: "D", text: "complain that the stitches were crooked" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-ri-c94-crabbing",
      family: "G11",
      title: "Crossing Sideways",
      kind: "Informational · 11.RI",
      blurb: "Why a ferry in a tidal channel points one way and travels another.",
      level: 2,
      passage:
        "<p>" + N(1) + "From the deck of a ferry crossing a strong tidal channel, passengers sometimes notice something odd: the boat seems to be pointing in the wrong direction. " +
        N(2) + "Its bow aims well upstream of the dock it is heading for, yet the ferry arrives exactly where it should. " +
        N(3) + "Captains call this technique crabbing, after the sideways walk of a crab. " +
        N(4) + "In channels where the tide pours in and out twice a day, the water itself is moving, sometimes faster than a person can run. " +
        N(5) + "A boat that points straight at its destination will be carried downstream and miss the dock. " +
        N(6) + "By angling into the current, the captain lets the boat's forward push and the water's sideways push balance out, so the ferry's actual path runs straight across. " +
        N(7) + "The right angle changes constantly. " +
        N(8) + "Currents are strongest midway between high and low tide and nearly stop at slack water, the brief pause when the tide turns. " +
        N(9) + "Experienced captains adjust the angle minute by minute, reading ripples, floating debris, and the lean of channel buoys to judge how fast the water is moving. " +
        N(10) + "Docking requires a related trick. " +
        N(11) + "Whenever possible, a captain approaches the pier heading into the current rather than with it, because moving against the flow lets the boat slow down while still steering. " +
        N(12) + "Coming in with the current is like trying to park a bicycle while rolling downhill. " +
        N(13) + "To passengers, a smooth crossing looks effortless, but it is really a steady conversation between the captain and the moving water." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the central idea of \"Crossing Sideways\"?",
          choices: [
            { letter: "A", text: "Tidal channels are too dangerous for most ferries to cross." },
            { letter: "B", text: "Passengers often misjudge which way a ferry is facing." },
            { letter: "C", text: "The shape of a crab inspired the design of ferry hulls." },
            { letter: "D", text: "Captains work with moving water to cross and dock safely." }
          ],
          correct: "D"
        },
        {
          id: "slack",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, when are tidal currents at their weakest?",
          choices: [
            { letter: "A", text: "Midway between high and low tide" },
            { letter: "B", text: "At slack water, when the tide turns" },
            { letter: "C", text: "Whenever a ferry approaches a pier" },
            { letter: "D", text: "In the afternoon on summer days" }
          ],
          correct: "B"
        },
        {
          id: "bicycle",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "Sentence 12 helps the reader understand docking by —",
          choices: [
            { letter: "A", text: "comparing a poor approach to an everyday experience" },
            { letter: "B", text: "giving the exact speed at which ferries should dock" },
            { letter: "C", text: "describing how captains are trained on bicycles" },
            { letter: "D", text: "explaining why piers are built at the tops of hills" }
          ],
          correct: "A"
        },
        {
          id: "organized",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which choice best describes how the article is organized?",
          choices: [
            { letter: "A", text: "A list of ferry routes from the oldest to the newest" },
            { letter: "B", text: "A debate between two captains about ferry safety" },
            { letter: "C", text: "An odd sight explained, then a related docking skill" },
            { letter: "D", text: "A set of steps for building a ferry for tidal water" }
          ],
          correct: "C"
        },
        {
          id: "ripples",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the details in sentence 9 about ripples, debris, and buoys mainly to —",
          choices: [
            { letter: "A", text: "show how captains judge the current's speed" },
            { letter: "B", text: "warn that channels are full of floating trash" },
            { letter: "C", text: "explain why buoys are painted bright colors" },
            { letter: "D", text: "suggest that passengers help steer the boat" }
          ],
          correct: "A"
        },
        {
          id: "final",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author's main purpose in the final sentence is to —",
          choices: [
            { letter: "A", text: "warn passengers about rough crossings" },
            { letter: "B", text: "point out the skill behind an easy-looking trip" },
            { letter: "C", text: "argue that bridges should replace ferries" },
            { letter: "D", text: "describe how captains are trained" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rl-c94-appletree",
      family: "G11",
      title: "Postage Paid",
      kind: "Literary · 11.RL",
      blurb: "A weather instrument lands in an orchard, and its finder has to decide what to do.",
      level: 1,
      passage:
        "<p>" + N(1) + "The orange parachute was the first thing Nora Takahashi saw, snagged in the top of an apple tree at the edge of her family's orchard. " +
        N(2) + "Beneath it, swinging on a string, hung a white foam box about the size of a milk carton. " +
        N(3) + "She climbed up, freed it, and turned it over in her hands. " +
        N(4) + "A label read: HARMLESS WEATHER INSTRUMENT. IF FOUND, PLEASE MAIL BACK IN THE ENCLOSED BAG. POSTAGE PAID. " +
        N(5) + "Nora's first thought was that she would keep it. " +
        N(6) + "It was the most interesting thing that had ever fallen out of the sky onto their farm, and the plastic mailing bag looked flimsy, as if no one really expected it to be used. " +
        N(7) + "She set the box on her bedroom shelf between her soccer trophy and a jar of sea glass. " +
        N(8) + "For three days it sat there, and for three days she kept glancing at it, as if it were waiting for an answer. " +
        N(9) + "On the fourth morning, she slid the box into the mailing bag and added a note: Found in our apple tree, Hollis Road. It looks like it had a long trip. " +
        N(10) + "Five weeks later, an envelope arrived from a regional weather office two states away. " +
        N(11) + "Inside was a thank-you card and a printed graph showing the box's flight: up through the clouds, past thirty kilometers, and down again to a tiny dot labeled Hollis Road. " +
        N(12) + "Nora pinned the graph to her wall above the shelf where the box had been. " +
        N(13) + "It took up less room, she decided, and it told a better story." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does Nora's choice about the weather box best support?",
          choices: [
            { letter: "A", text: "Curiosity usually leads people into trouble." },
            { letter: "B", text: "Doing the right thing can bring an unexpected reward." },
            { letter: "C", text: "Life on a farm is quieter than life in a city." },
            { letter: "D", text: "Most mail never reaches the place it was sent." }
          ],
          correct: "B"
        },
        {
          id: "torn",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Which statement best describes Nora in sentences 5–8?",
          choices: [
            { letter: "A", text: "She is afraid the box may be dangerous." },
            { letter: "B", text: "She has already forgotten about the box." },
            { letter: "C", text: "She is annoyed that it damaged her tree." },
            { letter: "D", text: "She feels torn between keeping and returning it." }
          ],
          correct: "D"
        },
        {
          id: "turning",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Sentence 9 is a turning point in the story because it —",
          choices: [
            { letter: "A", text: "shows Nora making up her mind to return the box" },
            { letter: "B", text: "reveals who launched the balloon in the first place" },
            { letter: "C", text: "explains how the box ended up in the apple tree" },
            { letter: "D", text: "introduces a new problem with the mailing bag" }
          ],
          correct: "A"
        },
        {
          id: "waiting",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 8, the phrase as if it were waiting for an answer suggests that —",
          choices: [
            { letter: "A", text: "the box is making a beeping sound" },
            { letter: "B", text: "Nora expects a letter in the mail soon" },
            { letter: "C", text: "the box seems to tug at Nora's conscience" },
            { letter: "D", text: "Nora has forgotten what the label said" }
          ],
          correct: "C"
        },
        {
          id: "flimsy",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 6, the word flimsy most nearly means —",
          choices: [
            { letter: "A", text: "brightly colored" },
            { letter: "B", text: "heavy and stiff" },
            { letter: "C", text: "costly to make" },
            { letter: "D", text: "thin and weak" }
          ],
          correct: "D"
        },
        {
          id: "graph",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The graph on Nora's wall in sentences 12 and 13 mainly symbolizes —",
          choices: [
            { letter: "A", text: "the journey she joined by returning the box" },
            { letter: "B", text: "her plan to become a weather forecaster" },
            { letter: "C", text: "her regret over giving the box away" },
            { letter: "D", text: "the size of her family's apple orchard" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
