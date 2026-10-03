/* SOL Labyrinth — v8 content expansion: Grade 10 vocabulary-in-context and paired-text
 * packs (10.RV / 10.DSR). Original text only; no VDOE or copyrighted material.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────── GRADE 10 · VOCABULARY ───────────────────── */
    {
      id: "g10-rv-bikeshop",
      family: "G10",
      title: "The Bike Shop Apprentice",
      kind: "Vocabulary · 10.RV",
      blurb: "A summer job at a repair shop, with six words in context.",
      level: 1,
      passage:
        "<p>" + N(1) + "When I started at Ruiz Cycle Repair in June, I was a complete <strong>novice</strong>; I had never even patched a tire. " +
        N(2) + "Mr. Ruiz did not seem to mind. " +
        N(3) + "\"Everyone starts new,\" he said, and handed me a rag and a can of chain oil. " +
        N(4) + "My first job was sorting used parts into two bins. " +
        N(5) + "Steel frames and thick rubber tires were <strong>durable</strong>, built to take years of bumps and rain, so they went into the bin marked KEEP. " +
        N(6) + "Old plastic reflectors and sun-baked grips were <strong>brittle</strong>; they cracked and crumbled the moment I bent them, so they went into the bin marked SCRAP. " +
        N(7) + "By July I was allowed to work on real customer bikes. " +
        N(8) + "Mr. Ruiz is <strong>diligent</strong> about every repair, checking each bolt twice and never rushing, even when the shop is crowded. " +
        N(9) + "He expected the same from me. " +
        N(10) + "My favorite job that summer was helping him <strong>revive</strong> a rusted road bike that a customer had found in her grandfather's barn. " +
        N(11) + "The bike had not moved in twenty years, but after new cables, fresh grease, and a week of patient work, it rolled out the door as if it had never stopped. " +
        N(12) + "Mr. Ruiz is <strong>frugal</strong>, too. " +
        N(13) + "He saves every usable bolt and reuses cardboard boxes for shipping, not because the shop is poor, but because he hates waste. " +
        N(14) + "I earned a paycheck that summer, but I also learned that the hardest part of any repair is refusing to hurry." +
        "</p>",
      claims: [
        {
          id: "novice",
          sol: "10.RV.1.B",
          stem: "In sentence 1, novice most nearly means —",
          choices: [
            { letter: "A", text: "beginner" },
            { letter: "B", text: "customer" },
            { letter: "C", text: "expert" },
            { letter: "D", text: "volunteer" }
          ],
          correct: "A"
        },
        {
          id: "brittle",
          sol: "10.RV.1.B",
          stem: "Which phrase from the passage best shows the meaning of brittle in sentence 6?",
          choices: [
            { letter: "A", text: "old plastic reflectors and sun-baked grips" },
            { letter: "B", text: "went into the bin marked SCRAP" },
            { letter: "C", text: "built to take years of bumps and rain" },
            { letter: "D", text: "cracked and crumbled the moment I bent them" }
          ],
          correct: "D"
        },
        {
          id: "durable",
          sol: "10.RV.1.A",
          stem: "The word durable in sentence 5 shares a root with endure and duration. The root dur- most nearly means —",
          choices: [
            { letter: "A", text: "to break" },
            { letter: "B", text: "to last" },
            { letter: "C", text: "to move" },
            { letter: "D", text: "to shine" }
          ],
          correct: "B"
        },
        {
          id: "diligent",
          sol: "10.RV.1.C",
          stem: "In sentence 8, the description of Mr. Ruiz as diligent is supported by the detail that he —",
          choices: [
            { letter: "A", text: "hands out rags and chain oil" },
            { letter: "B", text: "keeps the shop crowded with customers" },
            { letter: "C", text: "checks each bolt twice and never rushes" },
            { letter: "D", text: "saves cardboard boxes for shipping" }
          ],
          correct: "C"
        },
        {
          id: "revive",
          sol: "10.RV.1.A",
          stem: "The prefix re- and the root viv- (as in survive and vivid) suggest that to revive the bike in sentence 10 means to —",
          choices: [
            { letter: "A", text: "bring it back to life" },
            { letter: "B", text: "sell it to a new owner" },
            { letter: "C", text: "take it apart for scrap" },
            { letter: "D", text: "paint it a new color" }
          ],
          correct: "A"
        },
        {
          id: "frugal",
          sol: "10.RV.1.D",
          stem: "The author chose frugal rather than cheap to describe Mr. Ruiz in sentence 12. Compared with cheap, frugal suggests that he —",
          choices: [
            { letter: "A", text: "refuses to pay his workers fairly" },
            { letter: "B", text: "buys only the lowest-priced parts" },
            { letter: "C", text: "worries the shop is losing money" },
            { letter: "D", text: "avoids waste in a thoughtful way" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-rv-lifeguard",
      family: "G10",
      title: "Lifeguard Training Log",
      kind: "Vocabulary · 10.RV",
      blurb: "Two days of pool training, with six words in context.",
      level: 1,
      passage:
        "<p>" + N(1) + "Day one of lifeguard training at the Fairview Community Pool, and my arms already ache. " +
        N(2) + "Our instructor, Ms. Okafor, told us that a guard's most important skill is being <strong>vigilant</strong>: watching the water every second, scanning from the shallow end to the deep end and back, never letting attention drift to a phone or a friend. " +
        N(3) + "To prove the point, she dropped a small black brick into the pool while we were talking. " +
        N(4) + "It took us almost a minute to notice it had <strong>submerged</strong> and settled on the bottom near the drain. " +
        N(5) + "\"In a real emergency, a minute is too long,\" she said. " +
        N(6) + "The afternoon was spent on laps. " +
        N(7) + "Swimming back and forth for forty minutes is <strong>monotonous</strong>; every length looks exactly like the last one, and the black line on the pool floor never changes. " +
        N(8) + "Still, the laps build <strong>stamina</strong>, and a guard who tires after one rescue cannot make a second. " +
        N(9) + "Day two was harder. " +
        N(10) + "We practiced clearing the pool during a thunderstorm drill, and Ms. Okafor said our voices were too soft. " +
        N(11) + "\"Be <strong>assertive</strong>,\" she said. " +
        N(12) + "\"Say it once, say it clearly, and expect people to listen.\" " +
        N(13) + "When my turn came, I blew the whistle, and its <strong>abrupt</strong> blast made even the instructors flinch. " +
        N(14) + "Nobody stayed in the water. " +
        N(15) + "Ms. Okafor grinned and wrote something on her clipboard. " +
        N(16) + "I hope it was a good something." +
        "</p>",
      claims: [
        {
          id: "vigilant",
          sol: "10.RV.1.B",
          stem: "Which part of sentence 2 best explains the meaning of vigilant?",
          choices: [
            { letter: "A", text: "a guard's most important skill" },
            { letter: "B", text: "watching the water every second" },
            { letter: "C", text: "letting attention drift" },
            { letter: "D", text: "a phone or a friend" }
          ],
          correct: "B"
        },
        {
          id: "submerged",
          sol: "10.RV.1.A",
          stem: "The word submerged in sentence 4 begins with the prefix sub-, as in submarine and subway. Based on this, submerged most nearly means —",
          choices: [
            { letter: "A", text: "floated on the surface" },
            { letter: "B", text: "drifted toward the side" },
            { letter: "C", text: "bounced off the wall" },
            { letter: "D", text: "sank beneath the water" }
          ],
          correct: "D"
        },
        {
          id: "monotonous",
          sol: "10.RV.1.B",
          stem: "In sentence 7, the phrase every length looks exactly like the last one helps show that monotonous means —",
          choices: [
            { letter: "A", text: "painful and tiring" },
            { letter: "B", text: "risky and dangerous" },
            { letter: "C", text: "repetitive and dull" },
            { letter: "D", text: "quick and exciting" }
          ],
          correct: "C"
        },
        {
          id: "stamina",
          sol: "10.RV.1.C",
          stem: "In sentence 8, stamina most nearly means the ability to —",
          choices: [
            { letter: "A", text: "keep going without tiring" },
            { letter: "B", text: "swim faster than others" },
            { letter: "C", text: "stay calm in an emergency" },
            { letter: "D", text: "follow the instructor's rules" }
          ],
          correct: "A"
        },
        {
          id: "assertive",
          sol: "10.RV.1.D",
          stem: "Ms. Okafor tells the trainees to be assertive rather than bossy. Compared with bossy, the word assertive suggests a manner that is —",
          choices: [
            { letter: "A", text: "loud and angry toward swimmers" },
            { letter: "B", text: "quiet and easy to ignore" },
            { letter: "C", text: "polite but too hesitant to act" },
            { letter: "D", text: "confident and clear without being rude" }
          ],
          correct: "D"
        },
        {
          id: "abrupt",
          sol: "10.RV.1.C",
          stem: "In sentence 13, the word abrupt describes a sound that is —",
          choices: [
            { letter: "A", text: "soft and musical" },
            { letter: "B", text: "long and fading" },
            { letter: "C", text: "sudden and sharp" },
            { letter: "D", text: "low and distant" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rv-nightmarket",
      family: "G10",
      title: "Night Market Shift",
      kind: "Vocabulary · 10.RV",
      blurb: "Friday nights at a family dumpling stall, with six words in context.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every Friday from May to October, my aunt Mei runs a dumpling stall at the Riverside Night Market, and this summer I became her second pair of hands. " +
        N(2) + "The first thing that hits you is the <strong>cacophony</strong>: sizzling pans, three speakers playing three different songs, a man shouting the price of mangoes, and somewhere a toddler wailing for a balloon. " +
        N(3) + "By eight o'clock I stopped hearing it, the way you stop hearing a fan. " +
        N(4) + "Aunt Mei never writes anything down, so when the pork ran out at nine, she had to <strong>improvise</strong>: she scooped the leftover cabbage filling into the wrappers, called them \"garden dumplings,\" and sold every one. " +
        N(5) + "Some weeks she buys too much, and we end the night with a <strong>surplus</strong> of forty or fifty dumplings, which she sends home with the musicians. " +
        N(6) + "Customers <strong>haggle</strong> constantly, offering five dollars for a six-dollar plate, and Aunt Mei always answers with the same tired smile and the same price. " +
        N(7) + "What I admire most is how <strong>resourceful</strong> she is: a broken tent pole becomes a hook for the lantern, a milk crate becomes a stool, and an upside-down pot becomes a drum for the toddler with the balloon problem. " +
        N(8) + "Her only weakness is the customer who asks too many questions. " +
        N(9) + "\"Pork or cabbage,\" she says, <strong>brusque</strong> as a slammed drawer, when someone wants to know the recipe. " +
        N(10) + "She is not being unkind; she has forty people in line. " +
        N(11) + "I am learning that in a night market, patience is a thing you spend carefully." +
        "</p>",
      claims: [
        {
          id: "cacophony",
          sol: "10.RV.1.A",
          stem: "The word cacophony in sentence 2 contains the root phon-, as in telephone and symphony. This root suggests that a cacophony is a kind of —",
          choices: [
            { letter: "A", text: "crowd" },
            { letter: "B", text: "smell" },
            { letter: "C", text: "light" },
            { letter: "D", text: "sound" }
          ],
          correct: "D"
        },
        {
          id: "improvise",
          sol: "10.RV.1.B",
          stem: "Which detail from sentence 4 best clarifies the meaning of improvise?",
          choices: [
            { letter: "A", text: "Aunt Mei never writes anything down" },
            { letter: "B", text: "the pork ran out at nine o'clock" },
            { letter: "C", text: "she scooped leftover cabbage into the wrappers" },
            { letter: "D", text: "she sold every one of the dumplings" }
          ],
          correct: "C"
        },
        {
          id: "surplus",
          sol: "10.RV.1.A",
          stem: "The prefix sur- in surplus (sentence 5) means over or above, as in surpass. A surplus is therefore an amount that is —",
          choices: [
            { letter: "A", text: "more than what was needed" },
            { letter: "B", text: "below what was expected" },
            { letter: "C", text: "exactly what was needed" },
            { letter: "D", text: "sold before the night ends" }
          ],
          correct: "A"
        },
        {
          id: "haggle",
          sol: "10.RV.1.C",
          stem: "In sentence 6, customers who haggle are trying to —",
          choices: [
            { letter: "A", text: "move ahead of others in line" },
            { letter: "B", text: "pay less than the posted price" },
            { letter: "C", text: "get the recipe for the filling" },
            { letter: "D", text: "order a larger plate of food" }
          ],
          correct: "B"
        },
        {
          id: "resourceful",
          sol: "10.RV.1.C",
          stem: "The examples in sentence 7 show that a resourceful person is one who —",
          choices: [
            { letter: "A", text: "buys new equipment whenever something breaks" },
            { letter: "B", text: "keeps careful written records of supplies" },
            { letter: "C", text: "avoids customers who ask questions" },
            { letter: "D", text: "finds clever uses for whatever is on hand" }
          ],
          correct: "D"
        },
        {
          id: "brusque",
          sol: "10.RV.1.D",
          stem: "The author compares Aunt Mei's reply to a slammed drawer in sentence 9. Used this way, brusque carries a connotation of —",
          choices: [
            { letter: "A", text: "shortness caused by hurry" },
            { letter: "B", text: "cruelty meant to hurt" },
            { letter: "C", text: "confusion about the question" },
            { letter: "D", text: "fear of losing customers" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rv-archive",
      family: "G10",
      title: "The Yearbook Archive",
      kind: "Vocabulary · 10.RV",
      blurb: "Seventy years of yearbooks in a library basement, with six words in context.",
      level: 3,
      passage:
        "<p>" + N(1) + "The library basement smelled of damp cardboard and old glue, and there, under one humming light, I spent my service hours turning seventy years of yearbooks into digital files. " +
        N(2) + "Ms. Halvorsen wanted the collection in <strong>chronological</strong> order before I scanned a page, so my first week went to sorting: 1954 before 1955, 1955 before 1956, all the way to last spring's glossy volume. " +
        N(3) + "The oldest books were the hardest to read. " +
        N(4) + "Decades of moisture had bled the ink until whole captions were <strong>illegible</strong>; I could tell a name had once been printed beneath a photograph, but the letters had melted into a gray smear. " +
        N(5) + "The scanner was nearly <strong>obsolete</strong>, a beige machine so outdated that the library's newer computers refused to recognize it. " +
        N(6) + "Ms. Halvorsen taught me to <strong>scrutinize</strong> each page before saving it, checking the corners for cut-off text and the center for the shadow of the binding, because a careless scan would have to be redone years from now by someone who would not know why it mattered. " +
        N(7) + "Some afternoons a teacher would wander down, find their own senior portrait, and go quiet in a way I can only call <strong>nostalgic</strong>: not sad, exactly, but pulled toward a version of the building that no longer existed. " +
        N(8) + "By May I had <strong>salvaged</strong> nearly every page, rescuing even the water-stained ones by adjusting the contrast until faded names surfaced like something rising through fog. " +
        N(9) + "The files now live on a server that will outlast the basement, the scanner, and probably the building, and I like knowing that a smear I could not read might someday be read by someone with better tools." +
        "</p>",
      claims: [
        {
          id: "chronological",
          sol: "10.RV.1.A",
          stem: "The word chronological in sentence 2 shares the root chron- with chronic and chronicle. The root carries the idea of —",
          choices: [
            { letter: "A", text: "measurement" },
            { letter: "B", text: "location" },
            { letter: "C", text: "time" },
            { letter: "D", text: "importance" }
          ],
          correct: "C"
        },
        {
          id: "illegible",
          sol: "10.RV.1.B",
          stem: "In sentence 4, illegible is built from the prefix il- (not) and the root leg- (read). Which detail from the sentence confirms this meaning?",
          choices: [
            { letter: "A", text: "Decades of moisture had bled the ink" },
            { letter: "B", text: "a name had once been printed" },
            { letter: "C", text: "beneath a photograph" },
            { letter: "D", text: "the letters had melted into a gray smear" }
          ],
          correct: "D"
        },
        {
          id: "obsolete",
          sol: "10.RV.1.C",
          stem: "In sentence 5, obsolete most nearly means —",
          choices: [
            { letter: "A", text: "out of date and no longer used" },
            { letter: "B", text: "damaged beyond any repair" },
            { letter: "C", text: "too costly for the library" },
            { letter: "D", text: "too heavy to move upstairs" }
          ],
          correct: "A"
        },
        {
          id: "scrutinize",
          sol: "10.RV.1.B",
          stem: "The phrase checking the corners for cut-off text and the center for the shadow of the binding in sentence 6 shows that to scrutinize something is to —",
          choices: [
            { letter: "A", text: "examine it closely" },
            { letter: "B", text: "copy it quickly" },
            { letter: "C", text: "repair it carefully" },
            { letter: "D", text: "describe it in detail" }
          ],
          correct: "A"
        },
        {
          id: "nostalgic",
          sol: "10.RV.1.D",
          stem: "In sentence 7, the narrator says the teachers are nostalgic rather than sad. The word nostalgic adds a connotation of —",
          choices: [
            { letter: "A", text: "anger at how the school has changed" },
            { letter: "B", text: "fondness for a past that cannot return" },
            { letter: "C", text: "relief at having left the school" },
            { letter: "D", text: "confusion about where they are" }
          ],
          correct: "B"
        },
        {
          id: "salvaged",
          sol: "10.RV.1.C",
          stem: "Based on sentence 8, salvaged most nearly means —",
          choices: [
            { letter: "A", text: "sorted into order" },
            { letter: "B", text: "replaced with copies" },
            { letter: "C", text: "scanned at high speed" },
            { letter: "D", text: "saved from being lost" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────── GRADE 10 · PAIRED TEXTS ───────────────────── */
    {
      id: "g10-dsr-mural",
      family: "G10",
      title: "Gym Wall Mural: Proposal + Facilities Reply",
      kind: "Paired texts · 10.DSR",
      blurb: "The Art Club wants to paint the gym wall; the facilities supervisor has conditions.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Art Club Proposal (posted to the student council page)</strong></p>" +
        "<p>" + N(1) + "The Art Club asks permission to paint a mural on the outside wall of the gym, the one that faces the bus loop. " +
        N(2) + "Right now the wall is bare gray concrete with a few old stains, and it is the first thing visitors see when they arrive. " +
        N(3) + "Our design shows the mountain skyline behind the school, with the year the school opened painted along the bottom. " +
        N(4) + "Twelve members have signed up to paint on three Saturdays in April, and two of them have painted murals before. " +
        N(5) + "We will buy exterior paint with money from the fall art sale, so the project will cost the school nothing. " +
        N(6) + "All we ask for is the wall, a hose, and a ladder.</p>" +
        "<p><strong>Text 2 — Reply from Mr. Adebayo, Facilities Supervisor</strong></p>" +
        "<p>" + N(7) + "Thank you for the proposal; the wall does need attention, and a mural would look far better than what is there now. " +
        N(8) + "Before anyone paints, however, that concrete must be power-washed and sealed, or the paint will begin peeling within a year. " +
        N(9) + "Sealing is a job for my crew, not for students, and it takes two full weekends to dry properly. " +
        N(10) + "I also cannot allow students on ladders taller than six feet unless a staff member is present the whole time. " +
        N(11) + "If the club moves its painting days to May and asks Ms. Reyes, your advisor, to attend, I can have the wall ready by the first weekend. " +
        N(12) + "I will even lend you the good ladder." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "Both writers would most likely agree that —",
          choices: [
            { letter: "A", text: "students should not paint in April" },
            { letter: "B", text: "the school should pay for the paint" },
            { letter: "C", text: "sealing the wall is unnecessary" },
            { letter: "D", text: "the gym wall looks bad as it is" }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "Which statement best describes a key difference between the texts?",
          choices: [
            { letter: "A", text: "Text 1 focuses on the design, while Text 2 focuses on preparing the wall safely." },
            { letter: "B", text: "Text 1 asks for money, while Text 2 refuses to spend any." },
            { letter: "C", text: "Text 1 wants the wall sealed, while Text 2 does not." },
            { letter: "D", text: "Text 1 is written to parents, while Text 2 is written to students." }
          ],
          correct: "A"
        },
        {
          id: "why-may",
          sol: "10.DSR.E",
          stem: "Based on both texts, why does Mr. Adebayo ask the club to move its painting days to May?",
          choices: [
            { letter: "A", text: "The paint will not arrive until May." },
            { letter: "B", text: "Ms. Reyes is not available in April." },
            { letter: "C", text: "The crew needs time to wash and seal the wall first." },
            { letter: "D", text: "The bus loop is closed during April." }
          ],
          correct: "C"
        },
        {
          id: "ladder",
          sol: "10.RI.2.B",
          stem: "Sentence 12 mainly shows that Mr. Adebayo —",
          choices: [
            { letter: "A", text: "doubts the club can finish" },
            { letter: "B", text: "supports the mural project" },
            { letter: "C", text: "wants to paint the wall himself" },
            { letter: "D", text: "is worried about the cost" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "10.DSR.E",
          stem: "Select TWO sentences from Text 2 that explain why the club cannot paint in April.",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "cost",
          sol: "9.DSR.D",
          stem: "Which sentence from Text 1 best supports the claim that the club has planned for the cost of the project?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-dsr-birdcount",
      family: "G10",
      title: "Campus Bird Count: Announcement + Field Notes",
      kind: "Paired texts · 10.DSR",
      blurb: "A teacher's announcement and a student's notebook from a cold Saturday count.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Morning Announcement from Mr. Lindqvist, Environmental Science</strong></p>" +
        "<p>" + N(1) + "This Saturday from 7 to 9 a.m., our school joins the county's annual winter bird count, and every student is welcome. " +
        N(2) + "Teams of three will walk one of four routes around campus and record every bird they see or hear. " +
        N(3) + "Last year our campus logged 23 species, the highest total of any school in the county, and the count was used by the county park office to decide where to plant new trees. " +
        N(4) + "The rules are simple: stay on your route, count each bird only once, and write down the time you see it. " +
        N(5) + "Binoculars will be provided, and hot chocolate will be waiting in Room 114 afterward. " +
        N(6) + "Bring a pencil; pens freeze.</p>" +
        "<p><strong>Text 2 — Field Notes, Route C (from the notebook of Dani Petrova, tenth grade)</strong></p>" +
        "<p>" + N(7) + "7:05 a.m., 19 degrees, wind from the north. " +
        N(8) + "Route C runs behind the athletic fields, along the drainage creek, and past the greenhouse. " +
        N(9) + "In the first hour we counted only four species: crows, juncos, a cardinal, and a hawk that circled the practice field twice. " +
        N(10) + "The creek should have been busy, but the water was frozen, so nothing was drinking there. " +
        N(11) + "Around 8:20 the sun reached the greenhouse wall and the count changed: sparrows, two kinds of woodpecker, a wren, and a flock of small birds that left before we could identify them. " +
        N(12) + "Our team's total was 11 species, far below Route A, which runs through the neighborhood with all the bird feeders. " +
        N(13) + "I do not think Route C has fewer birds; I think it has fewer birds at 7 a.m. in a hard freeze. " +
        N(14) + "Next year we should start this route later, or count it again on a warmer day and compare." +
        "</p>",
      claims: [
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "The texts differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "describes the count as a competition, while Text 2 treats it as a science project" },
            { letter: "B", text: "focuses on the creek, while Text 2 focuses on the neighborhood" },
            { letter: "C", text: "explains why Route C has fewer birds, while Text 2 does not" },
            { letter: "D", text: "presents the count's method as settled, while Text 2 questions how well it works" }
          ],
          correct: "D"
        },
        {
          id: "hawk",
          sol: "10.DSR.D",
          stem: "The detail that the hawk circled the practice field twice (sentence 9) most directly connects to which rule from Text 1?",
          choices: [
            { letter: "A", text: "stay on your route" },
            { letter: "B", text: "count each bird only once" },
            { letter: "C", text: "write down the time you see it" },
            { letter: "D", text: "bring a pencil, not a pen" }
          ],
          correct: "B"
        },
        {
          id: "route-a",
          sol: "10.DSR.E",
          stem: "Based on the texts, the most likely reason Route A recorded more species than Route C is that —",
          choices: [
            { letter: "A", text: "its team started earlier than Dani's team" },
            { letter: "B", text: "it is longer and has more walkers" },
            { letter: "C", text: "it passes bird feeders, where birds gather even in a freeze" },
            { letter: "D", text: "its team counted some birds more than once" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "10.DSR.E",
          stem: "Select TWO details from Text 2 that together best support Dani's claim in sentence 13.",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "purpose",
          sol: "10.RI.2.B",
          stem: "Mr. Lindqvist includes sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "show that the count has real value beyond the school" },
            { letter: "B", text: "warn students that the count is difficult" },
            { letter: "C", text: "explain the rules for recording birds" },
            { letter: "D", text: "describe the four campus routes" }
          ],
          correct: "A"
        },
        {
          id: "suggestion",
          sol: "10.DSR.E",
          stem: "Which detail from Text 1 would make Dani's second suggestion in sentence 14 hard to carry out?",
          choices: [
            { letter: "A", text: "Binoculars are provided by the school." },
            { letter: "B", text: "Teams must have three members." },
            { letter: "C", text: "Students must write down the time." },
            { letter: "D", text: "The count takes place on one set date each year." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-dsr-trailcleanup",
      family: "G10",
      title: "Ridge Trail Closure: Park Bulletin + Captain's Message",
      kind: "Paired texts · 10.DSR",
      blurb: "A washed-out trail, a county park bulletin, and a cross-country captain with a plan.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Bulletin from Cedar Ridge County Park</strong></p>" +
        "<p>" + N(1) + "Effective Monday, the upper section of Ridge Trail is closed between the stone bridge and the overlook. " +
        N(2) + "Heavy rain in September washed out roughly two hundred feet of the path, leaving loose rock and a drop of several feet on the creek side. " +
        N(3) + "Park staff will rebuild the section with timber steps and drainage channels, a job expected to take six to eight weeks depending on weather. " +
        N(4) + "Hikers may use the lower loop, which remains open. " +
        N(5) + "Volunteer groups of ten or more may apply to assist with carrying materials on scheduled workdays; volunteers must be at least sixteen and must attend a thirty-minute safety briefing. " +
        N(6) + "Please respect the closure signs; the washed-out section is unstable, and every unauthorized visit slows the repair.</p>" +
        "<p><strong>Text 2 — Message from Amara, cross-country captain, to the team group chat</strong></p>" +
        "<p>" + N(7) + "Bad news first: Ridge Trail is closed, and our conference meet on November 2 is supposed to run right through the overlook section. " +
        N(8) + "Coach called the park this morning. " +
        N(9) + "The good news is that the park takes volunteer groups, and we have twenty-two runners, all sixteen or older except the three freshmen. " +
        N(10) + "If we sign up for the two Saturday workdays in October, Coach thinks the park could finish the upper section a week early, before the meet. " +
        N(11) + "I know Saturdays are our long-run days, but hauling timber up a hill is not exactly rest. " +
        N(12) + "One more thing: nobody runs the closed section to \"check on it.\" " +
        N(13) + "The park said clearly that every visit sets them back, and I would rather lose a course than lose the park's trust. " +
        N(14) + "Reply with a thumbs-up if you can make October 12 and 19." +
        "</p>",
      claims: [
        {
          id: "possible",
          sol: "10.DSR.D",
          stem: "Which detail from Text 1 makes Amara's plan in sentence 10 possible?",
          choices: [
            { letter: "A", text: "the lower loop remains open" },
            { letter: "B", text: "the repair uses timber steps" },
            { letter: "C", text: "rain washed out two hundred feet of path" },
            { letter: "D", text: "volunteer groups of ten or more may apply to help" }
          ],
          correct: "D"
        },
        {
          id: "freshmen",
          sol: "10.DSR.D",
          stem: "Which requirement from Text 1 affects the three freshmen mentioned in sentence 9?",
          choices: [
            { letter: "A", text: "the safety briefing" },
            { letter: "B", text: "the minimum age for volunteers" },
            { letter: "C", text: "the group size of ten or more" },
            { letter: "D", text: "the closure of the upper section" }
          ],
          correct: "B"
        },
        {
          id: "shared",
          sol: "10.DSR.E",
          stem: "Both texts support the idea that —",
          choices: [
            { letter: "A", text: "the park has enough staff to finish quickly" },
            { letter: "B", text: "the meet should be moved to the lower loop" },
            { letter: "C", text: "unauthorized visits to the closed section delay the repair" },
            { letter: "D", text: "volunteers will rebuild the trail on their own" }
          ],
          correct: "C"
        },
        {
          id: "trust",
          sol: "10.RI.2.B",
          stem: "In sentence 13, Amara's statement that she would rather lose a course than lose the park's trust mainly reveals that she —",
          choices: [
            { letter: "A", text: "expects the meet to be canceled" },
            { letter: "B", text: "puts the park's trust ahead of one race" },
            { letter: "C", text: "doubts the park will finish on time" },
            { letter: "D", text: "thinks the course was too hard anyway" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "10.DSR.E",
          stem: "Select TWO sentences that together show the gap between the park's timeline and the team's need.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "objection",
          sol: "9.DSR.E",
          stem: "Amara's sentence 11 answers an objection that teammates would most likely raise about —",
          choices: [
            { letter: "A", text: "missing their regular long runs" },
            { letter: "B", text: "the cost of the timber" },
            { letter: "C", text: "the age limit for volunteers" },
            { letter: "D", text: "the location of the overlook" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-dsr-balloon",
      family: "G10",
      title: "The Balloon That Went North: Launch Log + Finder's Letter",
      kind: "Paired texts · 10.DSR",
      blurb: "A physics club's launch log and a letter from the farmer who found the payload.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Launch Log, Westbrook High Physics Club (entry by Tomas, recorder)</strong></p>" +
        "<p>" + N(1) + "Launch at 9:14 a.m. from the practice field; sky clear, surface wind light from the west. " +
        N(2) + "Payload: camera, temperature sensor, GPS tracker, and a laminated card with the club's contact information. " +
        N(3) + "Our prediction software, using the morning forecast, projected a burst altitude near 28,000 meters and a landing about 30 kilometers east, near the Route 9 reservoir. " +
        N(4) + "The tracker sent a position every two minutes until 10:31 a.m., when it reported 24,600 meters and then went silent. " +
        N(5) + "We drove to the reservoir and searched the shoreline until dark. " +
        N(6) + "Nothing. " +
        N(7) + "Working theory: the tracker's battery failed in the cold, and the payload is somewhere in the woods east of the reservoir. " +
        N(8) + "We will return Saturday with the club's second radio.</p>" +
        "<p><strong>Text 2 — Letter received by the club eleven days after the launch</strong></p>" +
        "<p>" + N(9) + "To the Westbrook Physics Club: your box is on my kitchen table, and your camera, if it still works, has a fine picture of my barn roof. " +
        N(10) + "I farm about 60 kilometers north of your school, and I found the box on the ridge above my back pasture. " +
        N(11) + "The orange parachute was tangled in a hawthorn tree, its cords twisted into a single knot, which is probably why it took me a week to spot it. " +
        N(12) + "The card says you launched at 9:14; the little clock on your sensor stopped at 11:52, so whatever happened took a while. " +
        N(13) + "One more thing, kindly meant: the box is cracked along one corner, so I suspect it came down faster than you planned. " +
        N(14) + "Call the number below and my daughter will meet you at the feed store on Route 22. " +
        N(15) + "She would like to know what a hawthorn tree looks like from 28,000 meters." +
        "</p>",
      claims: [
        {
          id: "contradict",
          sol: "10.DSR.D",
          stem: "Which part of the club's working theory in sentence 7 does Text 2 contradict?",
          choices: [
            { letter: "A", text: "that the payload landed east of the reservoir" },
            { letter: "B", text: "that the tracker stopped working" },
            { letter: "C", text: "that the battery was affected by cold" },
            { letter: "D", text: "that the payload was in a wooded area" }
          ],
          correct: "A"
        },
        {
          id: "clocks",
          sol: "10.DSR.E",
          stem: "Taken together, the tracker's last report in sentence 4 and the sensor clock in sentence 12 suggest that —",
          choices: [
            { letter: "A", text: "the balloon burst at exactly 10:31" },
            { letter: "B", text: "the sensor failed before the tracker did" },
            { letter: "C", text: "the club recorded the launch time incorrectly" },
            { letter: "D", text: "the flight continued long after the tracker went silent" }
          ],
          correct: "D"
        },
        {
          id: "crack",
          sol: "10.DSR.E",
          stem: "Which detail from Text 2 best explains the cracked corner mentioned in sentence 13?",
          choices: [
            { letter: "A", text: "the box sat on the ridge for a week" },
            { letter: "B", text: "the camera photographed the barn roof" },
            { letter: "C", text: "the parachute cords were twisted into a single knot" },
            { letter: "D", text: "the farm is 60 kilometers from the school" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "10.RI.2.B",
          stem: "Compared with the tone of Text 1, the tone of Text 2 is more —",
          choices: [
            { letter: "A", text: "technical" },
            { letter: "B", text: "playful" },
            { letter: "C", text: "anxious" },
            { letter: "D", text: "formal" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "10.DSR.E",
          stem: "Select TWO details that together show that the wind at high altitude differed from the club's forecast.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "daughter",
          sol: "9.DSR.E",
          stem: "Sentence 15 suggests that the farmer's daughter —",
          choices: [
            { letter: "A", text: "is curious to see what the camera recorded" },
            { letter: "B", text: "plans to join the physics club" },
            { letter: "C", text: "doubts the balloon reached 28,000 meters" },
            { letter: "D", text: "thinks the club should have searched north" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
