/* SOL Labyrinth — New Jersey grade 5 informational packs (NJSLA-ELA, RI strand).
 * Eight original articles on science, nature, the history of everyday things,
 * community and how things work, each with two Evidence-Based Selected Response
 * pairs and one vocabulary-in-context item. Original text only; no real people.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LEVEL 1 ───────────────────────── */
    {
      id: "nj5-ri-lighthouse",
      family: "NJ5",
      title: "The Light on Gull Point",
      kind: "Informational · RI.5",
      blurb: "How a lighthouse warns ships, from the bulb to the beam.",
      level: 1,
      passage:
        "<p>" + N(1) + "A lighthouse is a tall tower with a bright light at the top. " +
        N(2) + "Its job is to warn ships about rocks, sandbars, and the edge of the shore. " +
        N(3) + "Long ago, the light came from a wood fire or from oil lamps. " +
        N(4) + "Today, most lighthouses use electric bulbs. " +
        N(5) + "The bulb itself is not very large. " +
        N(6) + "The secret is the lens that surrounds it. " +
        N(7) + "The lens is made of many glass rings that bend the light into one strong beam. " +
        N(8) + "A beam like this can be seen more than twenty miles out at sea.</p>" +
        "<p>" + N(9) + "Every lighthouse flashes in its own pattern. " +
        N(10) + "One might flash twice, pause, and flash again. " +
        N(11) + "Another might glow steadily for five seconds and then go dark. " +
        N(12) + "Sailors keep a book that lists each pattern. " +
        N(13) + "When they see a flash, they check the book and know exactly where they are. " +
        N(14) + "This pattern is called the light's \"character,\" and no two lighthouses on the same coast share one.</p>" +
        "<p>" + N(15) + "The tower is tall for a good reason. " +
        N(16) + "The earth curves, so a low light disappears behind the horizon sooner than a high one. " +
        N(17) + "Lifting the lamp higher lets ships spot it from farther away. " +
        N(18) + "In the past, a keeper lived at the lighthouse, trimmed the wicks, and wound the machine that turned the lens. " +
        N(19) + "Now most lights turn on by themselves at sunset and are checked by workers who visit a few times a year. " +
        N(20) + "The keepers are gone, but the beam still sweeps the water every night.</p>",
      claims: [
        {
          id: "mainidea",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "mainidea-b",
          stem: "Which statement best tells what the article is mostly about?",
          choices: [
            { letter: "A", text: "Lighthouse keepers had hard and lonely jobs." },
            { letter: "B", text: "A lighthouse uses its light, lens, and height to keep ships safe." },
            { letter: "C", text: "Electric bulbs replaced oil lamps in most lighthouses." },
            { letter: "D", text: "Sailors must memorize the flash pattern of every lighthouse." }
          ],
          correct: "B"
        },
        {
          id: "mainidea-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the article best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Long ago, the light came from a wood fire or from oil lamps." },
            { letter: "B", text: "Sailors keep a book that lists each pattern." },
            { letter: "C", text: "Its job is to warn ships about rocks, sandbars, and the edge of the shore." },
            { letter: "D", text: "In the past, a keeper lived at the lighthouse, trimmed the wicks, and wound the machine that turned the lens." }
          ],
          correct: "C"
        },
        {
          id: "tall",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "tall-b",
          stem: "According to the article, why are lighthouses built so tall?",
          choices: [
            { letter: "A", text: "so the keeper can see ships coming from far away" },
            { letter: "B", text: "so the lens has room for all of its glass rings" },
            { letter: "C", text: "so storms and waves cannot reach the lamp" },
            { letter: "D", text: "so the light can be seen from farther out at sea" }
          ],
          correct: "D"
        },
        {
          id: "tall-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about the tower's height?",
          choices: [
            { letter: "A", text: "The earth curves, so a low light disappears behind the horizon sooner than a high one." },
            { letter: "B", text: "A lighthouse is a tall tower with a bright light at the top." },
            { letter: "C", text: "The lens is made of many glass rings that bend the light into one strong beam." },
            { letter: "D", text: "Now most lights turn on by themselves at sunset and are checked by workers who visit a few times a year." }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 14, the word character most nearly means —",
          choices: [
            { letter: "A", text: "a person in a story" },
            { letter: "B", text: "a kind of glass lens" },
            { letter: "C", text: "a page in a sailor's book" },
            { letter: "D", text: "a light's own flash pattern" }
          ],
          correct: "D"
        },
        {
          id: "examples",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "The author includes sentences 10 and 11 mainly to —",
          choices: [
            { letter: "A", text: "give examples of different flash patterns" },
            { letter: "B", text: "explain why the lens bends light into a beam" },
            { letter: "C", text: "describe how a keeper wound the machine" },
            { letter: "D", text: "compare old lighthouses with new ones" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "nj5-ri-autumn-leaves",
      family: "NJ5",
      title: "Why Leaves Change Color",
      kind: "Informational · RI.5",
      blurb: "The science behind gold, orange, and red leaves in the fall.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every fall, the trees along many streets turn from green to gold, orange, and red. " +
        N(2) + "The change looks like magic, but it is really the tree getting ready for winter. " +
        N(3) + "A leaf is green because it is full of a substance called chlorophyll. " +
        N(4) + "Chlorophyll is the tool a leaf uses to catch sunlight and turn it into food for the tree. " +
        N(5) + "All summer, the tree makes fresh chlorophyll every day. " +
        N(6) + "As the days grow shorter, the tree gets less light and stops making it. " +
        N(7) + "The old chlorophyll breaks down, and the green fades away.</p>" +
        "<p>" + N(8) + "Here is the surprise: the yellow and orange were in the leaf all along. " +
        N(9) + "Those colors come from other substances that were hidden under the strong green. " +
        N(10) + "When the green disappears, they finally show. " +
        N(11) + "Red is different. " +
        N(12) + "Some trees make red color in the fall from sugar trapped in the leaf. " +
        N(13) + "Bright sunny days and cool nights make the most red, which is why some autumns are more brilliant than others.</p>" +
        "<p>" + N(14) + "At the same time, the tree grows a thin wall of cells where the leaf stem meets the branch. " +
        N(15) + "This wall slowly seals the leaf off. " +
        N(16) + "One day a breeze comes, and the leaf lets go. " +
        N(17) + "The tree is not dying. " +
        N(18) + "It is saving energy. " +
        N(19) + "Leaves would freeze in winter and lose water the tree cannot replace. " +
        N(20) + "Dropping them is like closing the shutters before a storm. " +
        N(21) + "In spring, when the light returns, the tree unrolls new green leaves and begins again.</p>",
      claims: [
        {
          id: "cause",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "cause-b",
          stem: "According to the article, what causes a leaf's green color to fade in the fall?",
          choices: [
            { letter: "A", text: "Cool nights freeze the water inside the leaf." },
            { letter: "B", text: "The tree stops making chlorophyll as days get shorter." },
            { letter: "C", text: "Sugar gets trapped in the leaf and turns it red." },
            { letter: "D", text: "Wind blows the leaf off the branch before winter." }
          ],
          correct: "B"
        },
        {
          id: "cause-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about why the green fades?",
          choices: [
            { letter: "A", text: "Every fall, the trees along many streets turn from green to gold, orange, and red." },
            { letter: "B", text: "Some trees make red color in the fall from sugar trapped in the leaf." },
            { letter: "C", text: "As the days grow shorter, the tree gets less light and stops making it." },
            { letter: "D", text: "One day a breeze comes, and the leaf lets go." }
          ],
          correct: "C"
        },
        {
          id: "mainidea",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "mainidea-b",
          stem: "Which sentence best states the main idea of the article?",
          choices: [
            { letter: "A", text: "Trees drop their leaves because wind knocks them off." },
            { letter: "B", text: "Red leaves are the most beautiful part of autumn." },
            { letter: "C", text: "Yellow and orange colors are hidden in leaves all summer." },
            { letter: "D", text: "Leaves change and fall because the tree is getting ready for winter." }
          ],
          correct: "D"
        },
        {
          id: "mainidea-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which detail from the article best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "The change looks like magic, but it is really the tree getting ready for winter." },
            { letter: "B", text: "Chlorophyll is the tool a leaf uses to catch sunlight and turn it into food for the tree." },
            { letter: "C", text: "Bright sunny days and cool nights make the most red, which is why some autumns are more brilliant than others." },
            { letter: "D", text: "Those colors come from other substances that were hidden under the strong green." }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 13, the word brilliant most nearly means —",
          choices: [
            { letter: "A", text: "very clever" },
            { letter: "B", text: "very early" },
            { letter: "C", text: "very colorful" },
            { letter: "D", text: "very rainy" }
          ],
          correct: "C"
        },
        {
          id: "support",
          sol: "RI.AA.5.7",
          strand: "RI",
          stem: "Which detail does the author use to support the idea in sentence 17 that the tree is not dying?",
          choices: [
            { letter: "A", text: "Leaves would freeze in winter and lose water the tree cannot replace." },
            { letter: "B", text: "The yellow and orange were in the leaf all along." },
            { letter: "C", text: "Some autumns are more brilliant than others." },
            { letter: "D", text: "The trees on many streets turn gold, orange, and red." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "nj5-ri-pencil",
      family: "NJ5",
      title: "The Long Story of the Pencil",
      kind: "Informational · RI.5",
      blurb: "How a stick of graphite wrapped in string became the pencil in your desk.",
      level: 1,
      passage:
        "<p>" + N(1) + "A pencil seems like a simple thing, but it took hundreds of years to get it right. " +
        N(2) + "The dark line a pencil makes is not made of lead at all. " +
        N(3) + "It is made of graphite, a soft, slippery form of carbon. " +
        N(4) + "More than four hundred years ago, farmers in a hilly part of England found a large deposit of pure graphite under the ground. " +
        N(5) + "At first they used chunks of it to mark their sheep. " +
        N(6) + "Soon people noticed that graphite wrote better than the metal sticks used at the time. " +
        N(7) + "Because it left a gray mark like lead, they called it \"black lead,\" and the name stuck.</p>" +
        "<p>" + N(8) + "Pure graphite breaks easily and leaves dust on the fingers. " +
        N(9) + "So people wrapped thin sticks of it in string, and later in wood. " +
        N(10) + "That was the first real pencil. " +
        N(11) + "The mine in England was the only one of its kind, and the graphite was so valuable that guards watched it. " +
        N(12) + "Other countries wanted pencils too. " +
        N(13) + "In the 1790s, an inventor in France solved the problem. " +
        N(14) + "He mixed graphite powder with clay, shaped it into thin rods, and baked them in a hot oven. " +
        N(15) + "More clay made a harder, lighter line. " +
        N(16) + "Less clay made a softer, darker one. " +
        N(17) + "That is why pencils today carry numbers like 2 or 3.</p>" +
        "<p>" + N(18) + "The wooden case is usually cedar, which is soft enough to sharpen and does not splinter. " +
        N(19) + "The eraser on the end came much later, in the 1850s. " +
        N(20) + "Today a single factory can make millions of pencils a day. " +
        N(21) + "Each one still works the same way as that first stick of graphite wrapped in string.</p>",
      claims: [
        {
          id: "clay",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "clay-b",
          stem: "According to the article, what happens when more clay is mixed into a pencil's graphite?",
          choices: [
            { letter: "A", text: "The pencil writes a darker, softer line." },
            { letter: "B", text: "The pencil breaks and leaves dust on the fingers." },
            { letter: "C", text: "The pencil becomes easier to sharpen." },
            { letter: "D", text: "The pencil writes a harder, lighter line." }
          ],
          correct: "D"
        },
        {
          id: "clay-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the passage best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Pure graphite breaks easily and leaves dust on the fingers." },
            { letter: "B", text: "He mixed graphite powder with clay, shaped it into thin rods, and baked them in a hot oven." },
            { letter: "C", text: "More clay made a harder, lighter line." },
            { letter: "D", text: "The wooden case is usually cedar, which is soft enough to sharpen and does not splinter." }
          ],
          correct: "C"
        },
        {
          id: "mainidea",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "mainidea-b",
          stem: "Which statement best expresses the main idea of the article?",
          choices: [
            { letter: "A", text: "Pencils are called \"lead\" pencils because they contain metal." },
            { letter: "B", text: "The pencil was improved step by step over hundreds of years." },
            { letter: "C", text: "England once had the only graphite mine in the world." },
            { letter: "D", text: "Factories today make millions of pencils every day." }
          ],
          correct: "B"
        },
        {
          id: "mainidea-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence gives the best evidence for the answer to Part A?",
          choices: [
            { letter: "A", text: "A pencil seems like a simple thing, but it took hundreds of years to get it right." },
            { letter: "B", text: "At first they used chunks of it to mark their sheep." },
            { letter: "C", text: "The mine in England was the only one of its kind, and the graphite was so valuable that guards watched it." },
            { letter: "D", text: "Today a single factory can make millions of pencils a day." }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 4, the word deposit most nearly means —",
          choices: [
            { letter: "A", text: "money placed in a bank" },
            { letter: "B", text: "material buried in the ground" },
            { letter: "C", text: "a tool used for digging" },
            { letter: "D", text: "a mark left on paper" }
          ],
          correct: "B"
        },
        {
          id: "why-lead",
          sol: "RI.PP.5.5",
          strand: "RI",
          stem: "The author includes sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "explain why people still say \"lead\" when a pencil has none" },
            { letter: "B", text: "show that graphite is heavier than metal" },
            { letter: "C", text: "describe how farmers marked their sheep" },
            { letter: "D", text: "prove that English pencils were the best in the world" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── LEVEL 2 ───────────────────────── */
    {
      id: "nj5-ri-first-library",
      family: "NJ5",
      title: "The Library That Started in a Barn",
      kind: "Informational · RI.5",
      blurb: "How one town went from no library to a brick building on Main Street.",
      level: 2,
      passage:
        "<p>" + N(1) + "In 1902, the town of Alder Falls had a train station, two churches, a mill, and not one public library. " +
        N(2) + "Anyone who wanted a book had to own it or borrow it from a neighbor. " +
        N(3) + "That year, a group of women from the sewing circle decided to change this. " +
        N(4) + "They asked every family in town to donate one book. " +
        N(5) + "Within a month they had collected 212 books, and a retired farmer offered the loft of his barn to hold them.</p>" +
        "<p>" + N(6) + "The \"library\" was open on Saturday afternoons. " +
        N(7) + "Readers climbed a ladder, chose a book, and wrote their name in a ledger, which is a record book. " +
        N(8) + "Each book could be kept for two weeks. " +
        N(9) + "The fine for a late book was two cents, and the money went toward buying more books. " +
        N(10) + "Word spread. " +
        N(11) + "By 1905, the collection had grown to more than a thousand books, and the loft was too small. " +
        N(12) + "The town council voted to rent a room above the hardware store. " +
        N(13) + "The first paid librarian earned six dollars a month and worked three days a week.</p>" +
        "<p>" + N(14) + "In 1911, a wealthy factory owner offered to pay for a brick building if the town promised to support it with tax money every year. " +
        N(15) + "The town agreed. " +
        N(16) + "Many towns across the country received their libraries in exactly this way. " +
        N(17) + "The brick building still stands on Main Street. " +
        N(18) + "The ledger from the barn is kept in a glass case near the front desk. " +
        N(19) + "Its first page shows a child's name, a book about ships, and a date in October 1902. " +
        N(20) + "The library today lends more than a hundred thousand items a year, but the idea is the same one the sewing circle had. " +
        N(21) + "A town shares what it reads.</p>",
      claims: [
        {
          id: "structure",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "How is the article mainly organized?",
          choices: [
            { letter: "A", text: "It compares libraries in several different towns." },
            { letter: "B", text: "It lists reasons a town should build a library." },
            { letter: "C", text: "It describes the brick building room by room." },
            { letter: "D", text: "It tells events in the order they happened." }
          ],
          correct: "D"
        },
        {
          id: "move",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "move-b",
          stem: "Based on the article, why did the town council rent a room above the hardware store?",
          choices: [
            { letter: "A", text: "The farmer wanted his barn back." },
            { letter: "B", text: "The sewing circle stopped collecting books." },
            { letter: "C", text: "The loft could no longer hold all the books." },
            { letter: "D", text: "The factory owner asked them to move." }
          ],
          correct: "C"
        },
        {
          id: "move-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about the move?",
          choices: [
            { letter: "A", text: "Within a month they had collected 212 books, and a retired farmer offered the loft of his barn to hold them." },
            { letter: "B", text: "By 1905, the collection had grown to more than a thousand books, and the loft was too small." },
            { letter: "C", text: "The first paid librarian earned six dollars a month and worked three days a week." },
            { letter: "D", text: "The brick building still stands on Main Street." }
          ],
          correct: "B"
        },
        {
          id: "idea",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "idea-b",
          stem: "Which idea does the author most want readers to understand?",
          choices: [
            { letter: "A", text: "Libraries are expensive, so towns need rich donors." },
            { letter: "B", text: "A library grows when a whole town takes part in it." },
            { letter: "C", text: "Barns and lofts make poor places to keep books." },
            { letter: "D", text: "Late fines are the best way to pay for new books." }
          ],
          correct: "B"
        },
        {
          id: "idea-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence gives the best support for the answer to Part A?",
          choices: [
            { letter: "A", text: "They asked every family in town to donate one book." },
            { letter: "B", text: "Readers climbed a ladder, chose a book, and wrote their name in a ledger, which is a record book." },
            { letter: "C", text: "The fine for a late book was two cents, and the money went toward buying more books." },
            { letter: "D", text: "Its first page shows a child's name, a book about ships, and a date in October 1902." }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 7, which words best help the reader understand the meaning of ledger?",
          choices: [
            { letter: "A", text: "climbed a ladder" },
            { letter: "B", text: "chose a book" },
            { letter: "C", text: "wrote their name" },
            { letter: "D", text: "a record book" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "nj5-ri-bee-dance",
      family: "NJ5",
      title: "The Dance of the Honeybee",
      kind: "Informational · RI.5",
      blurb: "How a worker bee tells the hive where the flowers are.",
      level: 2,
      passage:
        "<p>" + N(1) + "Honeybees cannot speak, but they can tell each other where to find food. " +
        N(2) + "They do it by dancing. " +
        N(3) + "When a worker bee finds a patch of flowers full of nectar, she flies back to the hive. " +
        N(4) + "Inside, on the flat surface of the honeycomb, she begins to move in a special pattern while other bees crowd around her.</p>" +
        "<p>" + N(5) + "If the flowers are close, less than about fifty meters away, she does the \"round dance.\" " +
        N(6) + "She runs in a small circle, turns, and runs the circle the other way. " +
        N(7) + "This dance says, \"Food is near. Go outside and smell for it.\" " +
        N(8) + "If the flowers are farther away, she does the \"waggle dance.\" " +
        N(9) + "She runs in a straight line while shaking her body from side to side, then loops back to the start and repeats. " +
        N(10) + "The waggle dance is a kind of map. " +
        N(11) + "The direction of the straight run tells the other bees which way to fly compared with the position of the sun. " +
        N(12) + "Straight up on the comb means \"fly toward the sun.\" " +
        N(13) + "The length of the run tells how far to go. " +
        N(14) + "A longer waggle means a longer trip.</p>" +
        "<p>" + N(15) + "The bees watching cannot see well in the dark hive. " +
        N(16) + "Instead they follow the dancer closely, feeling her movements with their antennae. " +
        N(17) + "They also smell the flowers on her body. " +
        N(18) + "Scientists learned all this by marking bees with tiny dots of paint and watching them for many years. " +
        N(19) + "The more nectar a patch has, the longer and more excited the dance. " +
        N(20) + "In this way, a hive with thousands of bees can send most of its workers to the best flowers in the area. " +
        N(21) + "A dance that lasts a minute can save a whole colony hours of searching.</p>",
      claims: [
        {
          id: "distance",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "distance-b",
          stem: "According to the article, how does a bee show the other bees how far away the flowers are?",
          choices: [
            { letter: "A", text: "by running in a small circle and turning around" },
            { letter: "B", text: "by the length of her straight waggle run" },
            { letter: "C", text: "by the smell of the flowers on her body" },
            { letter: "D", text: "by touching the other bees with her antennae" }
          ],
          correct: "B"
        },
        {
          id: "distance-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about distance?",
          choices: [
            { letter: "A", text: "She runs in a small circle, turns, and runs the circle the other way." },
            { letter: "B", text: "The direction of the straight run tells the other bees which way to fly compared with the position of the sun." },
            { letter: "C", text: "A longer waggle means a longer trip." },
            { letter: "D", text: "They also smell the flowers on her body." }
          ],
          correct: "C"
        },
        {
          id: "summary",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "summary-b",
          stem: "Which statement best summarizes the article?",
          choices: [
            { letter: "A", text: "Honeybees use dances to tell hive mates where food is and how far away it is." },
            { letter: "B", text: "Honeybees do a round dance when flowers are less than fifty meters away." },
            { letter: "C", text: "Scientists marked bees with paint dots so they could watch them for years." },
            { letter: "D", text: "Honeybees cannot see in the dark hive, so they use their antennae instead." }
          ],
          correct: "A"
        },
        {
          id: "summary-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the text best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "Honeybees cannot speak, but they can tell each other where to find food." },
            { letter: "B", text: "Inside, on the flat surface of the honeycomb, she begins to move in a special pattern while other bees crowd around her." },
            { letter: "C", text: "The bees watching cannot see well in the dark hive." },
            { letter: "D", text: "Scientists learned all this by marking bees with tiny dots of paint and watching them for many years." }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 21, the word colony most nearly means —",
          choices: [
            { letter: "A", text: "a single worker bee" },
            { letter: "B", text: "a patch of flowers" },
            { letter: "C", text: "a straight line on the comb" },
            { letter: "D", text: "the group of bees in one hive" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "RI.PP.5.5",
          strand: "RI",
          stem: "The author most likely wrote this article to —",
          choices: [
            { letter: "A", text: "persuade readers to keep bees at home" },
            { letter: "B", text: "explain how bees share information about food" },
            { letter: "C", text: "describe the inside of a honeycomb" },
            { letter: "D", text: "warn readers that bees can be dangerous" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "nj5-ri-recycling-plant",
      family: "NJ5",
      title: "A Day at the Recycling Plant",
      kind: "Informational · RI.5",
      blurb: "Follow a truckload of bottles and cans from the floor to the bale.",
      level: 2,
      passage:
        "<p>" + N(1) + "At six in the morning, the first truck backs up to the door of the county recycling plant and tips its load onto the floor. " +
        N(2) + "Bottles, cans, cardboard, and paper spill out in a tangled heap. " +
        N(3) + "By evening, that heap will be sorted into neat bales, ready to be sold and made into something new.</p>" +
        "<p>" + N(4) + "The plant is really a long line of machines and people. " +
        N(5) + "A loader pushes the pile onto a moving belt. " +
        N(6) + "The first stop is a row of workers who pull out things that should not be there: plastic bags, garden hoses, and once, a bowling ball. " +
        N(7) + "Bags are the biggest problem because they wrap around the spinning parts and stop the whole line. " +
        N(8) + "Next, the belt climbs to a set of spinning disks. " +
        N(9) + "Flat cardboard rides over the top, while cans and bottles tumble through the gaps below. " +
        N(10) + "A strong magnet then lifts out steel cans. " +
        N(11) + "Aluminum cans are not magnetic, so a different machine gives them a small electric push that makes them jump off the belt into a bin. " +
        N(12) + "Plastic bottles pass under a scanner that reads the type of plastic and fires a puff of air to blow each one into the right chute. " +
        N(13) + "At the end of the line, a press squeezes each material into a bale the size of a small car.</p>" +
        "<p>" + N(14) + "The plant sorts about three hundred tons in a single day. " +
        N(15) + "A manager explained that the cleanest loads bring the best price. " +
        N(16) + "A bale of paper with food waste in it may be worth nothing at all. " +
        N(17) + "That is why the plant asks people to rinse containers and keep food out of the bin. " +
        N(18) + "A rinsed can takes only a few seconds at the sink, but it saves work for everyone down the line.</p>",
      claims: [
        {
          id: "structure",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "The author organizes most of the article by —",
          choices: [
            { letter: "A", text: "describing each step in the order it happens" },
            { letter: "B", text: "comparing steel cans with aluminum cans" },
            { letter: "C", text: "listing problems the plant cannot solve" },
            { letter: "D", text: "explaining why recycling started in the county" }
          ],
          correct: "A"
        },
        {
          id: "bags",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "bags-b",
          stem: "Why are plastic bags a problem at the plant?",
          choices: [
            { letter: "A", text: "They are worth less money than paper bales." },
            { letter: "B", text: "They cannot be lifted out by the magnet." },
            { letter: "C", text: "They get caught in the machines and stop the line." },
            { letter: "D", text: "They blow away when the air puffs fire." }
          ],
          correct: "C"
        },
        {
          id: "bags-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence from the article best supports the answer to Part A about the bags?",
          choices: [
            { letter: "A", text: "Bottles, cans, cardboard, and paper spill out in a tangled heap." },
            { letter: "B", text: "Bags are the biggest problem because they wrap around the spinning parts and stop the whole line." },
            { letter: "C", text: "Plastic bottles pass under a scanner that reads the type of plastic and fires a puff of air to blow each one into the right chute." },
            { letter: "D", text: "A bale of paper with food waste in it may be worth nothing at all." }
          ],
          correct: "B"
        },
        {
          id: "rinse",
          sol: "RI.AA.5.7",
          strand: "RI",
          partB: "rinse-b",
          stem: "Which reason does the author give for asking people to rinse their containers?",
          choices: [
            { letter: "A", text: "Rinsed containers are lighter for the trucks to carry." },
            { letter: "B", text: "Clean loads sell for a better price than dirty ones." },
            { letter: "C", text: "Food waste attracts animals to the plant." },
            { letter: "D", text: "The scanner cannot read a dirty bottle." }
          ],
          correct: "B"
        },
        {
          id: "rinse-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "The plant sorts about three hundred tons in a single day." },
            { letter: "B", text: "At the end of the line, a press squeezes each material into a bale the size of a small car." },
            { letter: "C", text: "A manager explained that the cleanest loads bring the best price." },
            { letter: "D", text: "A rinsed can takes only a few seconds at the sink, but it saves work for everyone down the line." }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 12, the word chute most nearly means —",
          choices: [
            { letter: "A", text: "a bin that holds paper" },
            { letter: "B", text: "a machine that reads labels" },
            { letter: "C", text: "a truck that carries loads" },
            { letter: "D", text: "a slide that objects drop down" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────────────────── LEVEL 3 ───────────────────────── */
    {
      id: "nj5-ri-bridge",
      family: "NJ5",
      title: "What Holds a Bridge Up",
      kind: "Informational · RI.5",
      blurb: "Pushes, pulls, and why a bridge's shape is never just decoration.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every bridge, from a plank across a creek to a highway span over a river, has to answer one question: where does the weight go? " +
        N(2) + "When a truck rolls onto a bridge, its weight pushes down. " +
        N(3) + "That force has to travel through the bridge and into the ground, or the bridge will fail. " +
        N(4) + "Engineers, the people who design bridges, use two kinds of force to move the weight. " +
        N(5) + "One is compression, which is a squeezing push. " +
        N(6) + "The other is tension, which is a stretching pull. " +
        N(7) + "Press your hands together and you feel compression. " +
        N(8) + "Pull a rubber band and you feel tension.</p>" +
        "<p>" + N(9) + "A beam bridge is the simplest kind. " +
        N(10) + "It is a flat deck resting on two supports, like a board laid across two chairs. " +
        N(11) + "When weight sits in the middle, the top of the beam is squeezed and the bottom is stretched. " +
        N(12) + "Make the beam too long, and it sags. " +
        N(13) + "That is why a beam bridge usually needs extra supports, called piers, every so often along its length. " +
        N(14) + "An arch bridge handles weight differently. " +
        N(15) + "Its curved shape pushes the load outward and down into heavy supports at each end. " +
        N(16) + "Almost everything in an arch is in compression. " +
        N(17) + "That is why stone, which is strong when squeezed but weak when pulled, has been used for arches for thousands of years. " +
        N(18) + "A suspension bridge does the opposite. " +
        N(19) + "Its deck hangs from steel cables that are stretched over tall towers. " +
        N(20) + "The cables are in tension, and they carry the weight up to the towers, which press down into the ground. " +
        N(21) + "Because steel cable is so strong when pulled, suspension bridges can cross the widest rivers and bays.</p>" +
        "<p>" + N(22) + "The next time you cross a bridge, look at its shape. " +
        N(23) + "The shape is not decoration. " +
        N(24) + "It is the bridge's answer to the question of where the weight goes.</p>",
      claims: [
        {
          id: "stone",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "stone-b",
          stem: "Based on the article, why has stone been used for arch bridges for so long?",
          choices: [
            { letter: "A", text: "Stone is easy to shape into a curve." },
            { letter: "B", text: "Stone is strong when squeezed, and an arch squeezes its parts." },
            { letter: "C", text: "Stone is heavier than steel, so it does not sway in the wind." },
            { letter: "D", text: "Stone can stretch a little without breaking." }
          ],
          correct: "B"
        },
        {
          id: "stone-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about stone arches?",
          choices: [
            { letter: "A", text: "Press your hands together and you feel compression." },
            { letter: "B", text: "Its curved shape pushes the load outward and down into heavy supports at each end." },
            { letter: "C", text: "The cables are in tension, and they carry the weight up to the towers, which press down into the ground." },
            { letter: "D", text: "That is why stone, which is strong when squeezed but weak when pulled, has been used for arches for thousands of years." }
          ],
          correct: "D"
        },
        {
          id: "central",
          sol: "RI.CI.5.2",
          strand: "RI",
          partB: "central-b",
          stem: "Which sentence best expresses the central idea of the article?",
          choices: [
            { letter: "A", text: "Suspension bridges are the strongest kind of bridge." },
            { letter: "B", text: "Engineers should use steel instead of stone for new bridges." },
            { letter: "C", text: "A bridge's shape shows how it carries weight into the ground." },
            { letter: "D", text: "Beam bridges sag unless they have piers along their length." }
          ],
          correct: "C"
        },
        {
          id: "central-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best shows the idea chosen in Part A?",
          choices: [
            { letter: "A", text: "It is the bridge's answer to the question of where the weight goes." },
            { letter: "B", text: "Engineers, the people who design bridges, use two kinds of force to move the weight." },
            { letter: "C", text: "Make the beam too long, and it sags." },
            { letter: "D", text: "Because steel cable is so strong when pulled, suspension bridges can cross the widest rivers and bays." }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 1, the word span most nearly means —",
          choices: [
            { letter: "A", text: "a road that goes uphill" },
            { letter: "B", text: "a bridge that crosses a gap" },
            { letter: "C", text: "a sign that shows the way" },
            { letter: "D", text: "a tunnel under a river" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "How does the author organize sentences 9 through 21?",
          choices: [
            { letter: "A", text: "by describing three kinds of bridges and how each carries weight" },
            { letter: "B", text: "by listing bridges from the oldest to the newest" },
            { letter: "C", text: "by comparing a bridge to a board across two chairs" },
            { letter: "D", text: "by explaining the steps engineers follow to build a bridge" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "nj5-ri-tides",
      family: "NJ5",
      title: "Why the Ocean Breathes",
      kind: "Informational · RI.5",
      blurb: "The moon, the sun, and the twice-a-day rise and fall of the sea.",
      level: 3,
      passage:
        "<p>" + N(1) + "Twice a day, the ocean at the shore rises slowly up the beach, and twice a day it slides back out. " +
        N(2) + "Fishermen, sailors, and clam diggers have watched this rhythm for as long as people have lived by the sea. " +
        N(3) + "For most of that time, no one knew what caused it. " +
        N(4) + "The answer turned out to be hanging in the night sky.</p>" +
        "<p>" + N(5) + "The moon pulls on the earth with a force called gravity, the same force that makes a dropped ball fall to the floor. " +
        N(6) + "The moon's pull is far weaker than the earth's, but it is strong enough to tug on the oceans. " +
        N(7) + "On the side of the earth facing the moon, the water is pulled into a gentle bulge. " +
        N(8) + "Strangely, a second bulge forms on the far side of the earth at the same time. " +
        N(9) + "There, the earth itself is pulled toward the moon slightly more than the water is, so the water is left behind in a bulge of its own. " +
        N(10) + "As the earth spins, each place on the coast passes through both bulges once a day. " +
        N(11) + "That gives two high tides, with a low tide between them. " +
        N(12) + "Because the moon also moves along its path around the earth, the tides arrive about fifty minutes later each day.</p>" +
        "<p>" + N(13) + "The sun pulls on the oceans too, though its pull on the tides is less than half as strong as the moon's. " +
        N(14) + "When the sun and moon line up, at the new moon and the full moon, their pulls add together. " +
        N(15) + "These are called spring tides, and they have nothing to do with the season. " +
        N(16) + "The high tides are higher and the low tides are lower. " +
        N(17) + "When the sun and moon pull from different directions, the tides are milder. " +
        N(18) + "The shape of the coast matters as well. " +
        N(19) + "In a wide, shallow bay, the water can pile up and rise more than ten meters, while an island in the open ocean may see the tide change by less than one. " +
        N(20) + "Knowing all this, a clam digger today can check a tide chart and know, to the minute, when the flats will be uncovered.</p>",
      claims: [
        {
          id: "two-tides",
          sol: "RI.IT.5.3",
          strand: "RI",
          partB: "two-tides-b",
          stem: "According to the article, why does most of the coast have two high tides each day?",
          choices: [
            { letter: "A", text: "The sun and the moon each cause one high tide." },
            { letter: "B", text: "The moon moves around the earth twice each day." },
            { letter: "C", text: "Water piles up in bays and then rushes back out." },
            { letter: "D", text: "The earth turns through two bulges of water every day." }
          ],
          correct: "D"
        },
        {
          id: "two-tides-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which sentence best supports the answer to Part A about two high tides?",
          choices: [
            { letter: "A", text: "As the earth spins, each place on the coast passes through both bulges once a day." },
            { letter: "B", text: "The moon's pull is far weaker than the earth's, but it is strong enough to tug on the oceans." },
            { letter: "C", text: "Because the moon also moves along its path around the earth, the tides arrive about fifty minutes later each day." },
            { letter: "D", text: "The sun pulls on the oceans too, though its pull on the tides is less than half as strong as the moon's." }
          ],
          correct: "A"
        },
        {
          id: "spring",
          sol: "RI.AA.5.7",
          strand: "RI",
          partB: "spring-b",
          stem: "Which statement about spring tides is supported by the article?",
          choices: [
            { letter: "A", text: "They happen only in the spring season." },
            { letter: "B", text: "They occur when the sun and moon pull from different directions." },
            { letter: "C", text: "They occur when the pulls of the sun and moon add together." },
            { letter: "D", text: "They are milder than the tides at other times of the month." }
          ],
          correct: "C"
        },
        {
          id: "spring-b",
          sol: "RI.CR.5.1",
          strand: "RI",
          stem: "Part B: Which detail from the passage best supports the answer to Part A?",
          choices: [
            { letter: "A", text: "On the side of the earth facing the moon, the water is pulled into a gentle bulge." },
            { letter: "B", text: "When the sun and moon line up, at the new moon and the full moon, their pulls add together." },
            { letter: "C", text: "When the sun and moon pull from different directions, the tides are milder." },
            { letter: "D", text: "The shape of the coast matters as well." }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "L.VL.5.2",
          strand: "RV",
          stem: "In sentence 2, the word rhythm most nearly means —",
          choices: [
            { letter: "A", text: "a pattern that repeats regularly" },
            { letter: "B", text: "a kind of music played at sea" },
            { letter: "C", text: "a tool used by clam diggers" },
            { letter: "D", text: "a storm that brings high water" }
          ],
          correct: "A"
        },
        {
          id: "opening",
          sol: "RI.TS.5.4",
          strand: "RI",
          stem: "The author begins the article with sentences 1 through 4 mainly to —",
          choices: [
            { letter: "A", text: "explain how gravity makes a ball fall" },
            { letter: "B", text: "warn readers about the dangers of high tides" },
            { letter: "C", text: "present a puzzle that the rest of the article answers" },
            { letter: "D", text: "describe the daily work of a clam digger" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
