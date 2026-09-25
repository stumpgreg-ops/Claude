/* SOL Labyrinth — Grade 9 informational (RI) expansion.
 * Eight original Virginia Grade 9 EOC-style informational packs: four articles,
 * two functional texts and two argument pieces. No VDOE / copyrighted text.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line (unused here)

  var PACKS = [
    /* ───────────────────────── ARTICLES ───────────────────────── */
    {
      id: "g9-ri-homing-pigeons",
      family: "G9",
      title: "How a Pigeon Finds Home",
      kind: "Informational · 9.RI",
      blurb: "An article on the tools a homing pigeon uses to find its way back to the loft.",
      level: 1,
      passage:
        "<p>" + N(1) + "A homing pigeon released two hundred miles from its loft will usually be back before dark. " +
        N(2) + "It does not follow roads, and it has never seen the release point before. " +
        N(3) + "So how does it know which way to fly? " +
        N(4) + "Scientists who study pigeons think the birds use several tools at once rather than a single secret sense. " +
        N(5) + "The first tool is the sun. " +
        N(6) + "A pigeon keeps time with its own body clock, and it compares that clock to the sun's position to work out which direction is south. " +
        N(7) + "The second tool is harder to see. " +
        N(8) + "Tiny amounts of iron in a pigeon's beak and inner ear may respond to Earth's magnetic field, giving the bird a rough sense of north even under heavy cloud. " +
        N(9) + "The third tool is smell. " +
        N(10) + "In one well-known series of experiments, pigeons whose sense of smell was temporarily blocked flew in circles, while pigeons with a normal sense of smell headed straight home. " +
        N(11) + "Researchers believe young birds learn the odors that arrive on the wind from each direction and build a kind of scent map of their region. " +
        N(12) + "Close to home, the last tool takes over: memory. " +
        N(13) + "Pigeons recognize the shapes of hills, rivers, and even highways they have flown along before. " +
        N(14) + "No single tool is perfect. " +
        N(15) + "On a cloudy day the sun is useless, and a strong storm can scramble the magnetic sense. " +
        N(16) + "That is exactly why having four tools matters. " +
        N(17) + "When one fails, the others keep the bird pointed home." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which sentence best expresses the article's central idea?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to the passage, what happened to pigeons whose sense of smell was blocked?",
          choices: [
            { letter: "A", text: "They flew in circles rather than heading toward the loft." },
            { letter: "B", text: "They followed roads until they reached familiar hills." },
            { letter: "C", text: "They waited for the sun to come out before flying." },
            { letter: "D", text: "They returned home faster than the other pigeons." }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "The author organizes sentences 5–13 mainly by —",
          choices: [
            { letter: "A", text: "comparing young pigeons with older, experienced pigeons" },
            { letter: "B", text: "ranking the tools from least useful to most useful" },
            { letter: "C", text: "explaining a problem and then offering one solution" },
            { letter: "D", text: "describing the pigeon's navigation tools one at a time" }
          ],
          correct: "D"
        },
        {
          id: "wordmean",
          sol: "9.RV.1.C",
          stem: "In sentence 15, the word scramble most nearly means to —",
          choices: [
            { letter: "A", text: "climb quickly over" },
            { letter: "B", text: "cook thoroughly" },
            { letter: "C", text: "confuse or mix up" },
            { letter: "D", text: "strengthen greatly" }
          ],
          correct: "C"
        },
        {
          id: "question",
          sol: "9.RI.2.B",
          stem: "The author includes the question in sentence 3 mainly to —",
          choices: [
            { letter: "A", text: "set up the explanation that the rest of the article provides" },
            { letter: "B", text: "suggest that scientists have given up looking for an answer" },
            { letter: "C", text: "show that pigeons are more intelligent than other birds" },
            { letter: "D", text: "prove that the release point was two hundred miles away" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence offers the strongest evidence that smell helps pigeons navigate?",
          choices: [
            { letter: "A", text: "Sentence 8" },
            { letter: "B", text: "Sentence 10" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-field-stripes",
      family: "G9",
      title: "Why the Field Has Stripes",
      kind: "Informational · 9.RI",
      blurb: "How groundskeepers put light and dark stripes on a game field without paint.",
      level: 1,
      passage:
        "<p>" + N(1) + "On game night the football field looks like it was painted in two shades of green. " +
        N(2) + "It was not. " +
        N(3) + "Every blade of grass is the same color. " +
        N(4) + "The stripes come from the direction the grass is leaning. " +
        N(5) + "A groundskeeper mows one strip toward the far end zone and the next one back toward the home stands. " +
        N(6) + "Behind the mower, a heavy roller bends the grass flat in whichever direction the mower is traveling. " +
        N(7) + "Grass leaning away from you reflects light off the wide, smooth side of each blade, so it looks bright. " +
        N(8) + "Grass leaning toward you shows its shaded tips, so it looks dark. " +
        N(9) + "Walk to the other end of the field and the stripes trade places: bright turns dark and dark turns bright. " +
        N(10) + "The pattern is only an effect of where you stand. " +
        N(11) + "Groundskeepers did not invent stripes for beauty alone. " +
        N(12) + "On a striped field, a referee on the sideline can judge how far a ball traveled by counting the bands it crossed. " +
        N(13) + "Players use the bands the same way when they line up. " +
        N(14) + "Keeping the stripes sharp takes work. " +
        N(15) + "The crew mows in the same pattern two or three times a week, because grass slowly stands back up. " +
        N(16) + "Before a big game they sometimes mow twice in one day, once each way, so the bands are as crisp as possible. " +
        N(17) + "The stadium lights finish the job. " +
        N(18) + "Under bright lights, even a slight lean shows up from the top row. " +
        N(19) + "So the next time the field looks painted, remember you are only seeing the last direction the mower went." +
        "</p>",
      claims: [
        {
          id: "mainidea",
          sol: "9.RI.1.A",
          stem: "The passage is mainly about —",
          choices: [
            { letter: "A", text: "how mowing direction creates the light and dark stripes on a field" },
            { letter: "B", text: "why football fields are painted in two shades of green" },
            { letter: "C", text: "how referees measure the distance a ball travels on a play" },
            { letter: "D", text: "why grass stands back up a few days after it is mowed" }
          ],
          correct: "A"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to the passage, what happens to the stripes when a viewer walks to the opposite end of the field?",
          choices: [
            { letter: "A", text: "They disappear until the field is mowed again." },
            { letter: "B", text: "The bright bands and the dark bands switch places." },
            { letter: "C", text: "They become narrower and harder to count." },
            { letter: "D", text: "They look painted instead of mowed." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "Sentences 5–8 are organized mainly as —",
          choices: [
            { letter: "A", text: "a comparison between two different kinds of grass" },
            { letter: "B", text: "a list of reasons stadiums prefer striped fields" },
            { letter: "C", text: "a set of steps that explain how the stripes are created" },
            { letter: "D", text: "a problem faced by groundskeepers and its solution" }
          ],
          correct: "C"
        },
        {
          id: "wordmean",
          sol: "9.RV.1.C",
          stem: "In sentence 16, the word crisp most nearly means —",
          choices: [
            { letter: "A", text: "cool and dry" },
            { letter: "B", text: "thin and brittle" },
            { letter: "C", text: "fresh and green" },
            { letter: "D", text: "sharp and clear" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.C",
          stem: "The author includes sentences 12 and 13 mainly to —",
          choices: [
            { letter: "A", text: "explain why referees prefer to stand on the sideline" },
            { letter: "B", text: "argue that players should count the bands more carefully" },
            { letter: "C", text: "show that the stripes have a practical use beyond appearance" },
            { letter: "D", text: "describe how the ball is measured after each play" }
          ],
          correct: "C"
        },
        {
          id: "opening",
          sol: "9.RI.2.B",
          stem: "The author begins with sentences 1–3 mainly to —",
          choices: [
            { letter: "A", text: "describe the colors used to paint the field" },
            { letter: "B", text: "praise the groundskeepers for their hard work" },
            { letter: "C", text: "warn readers not to trust what they see at night" },
            { letter: "D", text: "correct a mistaken idea before explaining the truth" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-snow-day",
      family: "G9",
      title: "Who Calls a Snow Day",
      kind: "Informational · 9.RI",
      blurb: "An article explaining how a district decides to close school for weather.",
      level: 2,
      passage:
        "<p>" + N(1) + "The text message that cancels school arrives at 5:30 a.m., but the decision began long before sunrise. " +
        N(2) + "The process starts the night before, when the transportation director reviews the forecast and plans a route check. " +
        N(3) + "Around 3:00 a.m., a small team drives the bus routes, watching hills, bridges, and rural stops where a bus must pull onto a gravel shoulder. " +
        N(4) + "They are not asking whether a car could make the trip. " +
        N(5) + "They are asking whether a forty-foot bus carrying fifty students could stop safely at every corner. " +
        N(6) + "By 4:30 the director calls the superintendent with a recommendation. " +
        N(7) + "The superintendent weighs it against other information: whether road crews have salted the main routes, whether sidewalks near schools are passable for walkers, and whether the temperature will rise or fall. " +
        N(8) + "Wind chill matters as much as snowfall, because students at bus stops may wait outside for twenty minutes. " +
        N(9) + "A cold, dry morning with dangerous wind chill can close school when not a single flake has fallen. " +
        N(10) + "The final call belongs to the superintendent alone. " +
        N(11) + "It is rarely a simple one. " +
        N(12) + "Closing means parents scramble for child care and students who depend on school meals go without. " +
        N(13) + "Staying open means gambling that the roads are as clear at 7:00 as they were at 3:00. " +
        N(14) + "A delayed start is a middle option: it gives crews two more hours and lets the sun do some of the work. " +
        N(15) + "Whatever the choice, the announcement goes out through the alert system, and the phones start buzzing. " +
        N(16) + "By then the people who made the call have been awake for hours." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of the passage?",
          choices: [
            { letter: "A", text: "A snow-day decision is a careful, step-by-step process that balances safety against real costs." },
            { letter: "B", text: "Superintendents should give transportation directors the final say on closing school." },
            { letter: "C", text: "Wind chill is far more dangerous to students than heavy snowfall on the roads." },
            { letter: "D", text: "A delayed start is the best answer to nearly every kind of winter weather." }
          ],
          correct: "A"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "Which factor does the passage say can close school even when no snow has fallen?",
          choices: [
            { letter: "A", text: "a forecast that the temperature will rise" },
            { letter: "B", text: "a delay in the district's alert system" },
            { letter: "C", text: "a dangerous wind chill on a dry morning" },
            { letter: "D", text: "a shortage of gravel on rural shoulders" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "Sentences 1–15 are arranged mainly in —",
          choices: [
            { letter: "A", text: "order of importance, from the least serious risk to the most" },
            { letter: "B", text: "the order in which events happen during the night and morning" },
            { letter: "C", text: "a comparison of rural bus routes with city bus routes" },
            { letter: "D", text: "a list of problems followed by a single solution" }
          ],
          correct: "B"
        },
        {
          id: "wordmean",
          sol: "9.RV.1.C",
          stem: "In sentence 7, the word passable most nearly means —",
          choices: [
            { letter: "A", text: "covered with salt" },
            { letter: "B", text: "close to a school" },
            { letter: "C", text: "good enough to grade" },
            { letter: "D", text: "able to be traveled" }
          ],
          correct: "D"
        },
        {
          id: "contrast",
          sol: "9.RI.2.B",
          stem: "The author pairs sentences 4 and 5 mainly to —",
          choices: [
            { letter: "A", text: "emphasize that the road check uses a stricter standard than ordinary driving" },
            { letter: "B", text: "suggest that the team should drive a bus instead of a car" },
            { letter: "C", text: "show that fifty students ride on every route in the district" },
            { letter: "D", text: "explain why the team must begin its work so early in the morning" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that staying open also carries a risk?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-tree-rings",
      family: "G9",
      title: "What a Tree Ring Remembers",
      kind: "Informational · 9.RI",
      blurb: "A denser article on reading centuries of weather in the rings of a tree.",
      level: 3,
      passage:
        "<p>" + N(1) + "Cut a tree across and the stump tells a story in circles. " +
        N(2) + "Each ring marks one year, but the rings are not merely a calendar. " +
        N(3) + "They are a weather record kept by an organism that could not escape the weather. " +
        N(4) + "In a wet spring a tree adds pale wood quickly; by late summer growth slows and the wood turns dense and dark. " +
        N(5) + "That pair, pale then dark, is one ring. " +
        N(6) + "A wide ring means a generous year; a narrow one means drought, frost, or insects. " +
        N(7) + "Scientists who read these patterns practice dendrochronology, and their work reaches far beyond any single stump. " +
        N(8) + "Because trees of one species in one region feel the same weather, their ring patterns line up like bar codes. " +
        N(9) + "A researcher can match the outer rings of a living tree to the inner rings of a dead one, then that tree to a barn beam, stepping backward in time. " +
        N(10) + "In the American Southwest, such chains stretch back more than two thousand years. " +
        N(11) + "The method has limits that its practitioners are the first to admit. " +
        N(12) + "A tree beside a spring may stay wide-ringed through a drought its neighbors recorded, so one sample proves little. " +
        N(13) + "Some tropical trees, growing year-round, form no clear rings at all. " +
        N(14) + "And a ring records how the tree experienced a year, not the year itself; it cannot tell drought from hungry caterpillars. " +
        N(15) + "Still, when hundreds of trees across a region tell the same story, it is hard to dismiss. " +
        N(16) + "The rings do not speak. " +
        N(17) + "They simply keep the receipts, and it is our job to read them." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "Which statement best captures the passage's central idea?",
          choices: [
            { letter: "A", text: "Tree rings, read carefully and in large numbers, preserve a long record of regional weather." },
            { letter: "B", text: "Dendrochronology has proven that the American Southwest was once far wetter than today." },
            { letter: "C", text: "A single tree can reveal the exact weather of any year during its lifetime." },
            { letter: "D", text: "Tropical trees are less valuable to science than trees that grow in cold regions." }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "How does the author organize sentences 11–15?",
          choices: [
            { letter: "A", text: "by listing the steps a researcher follows to date a wooden beam" },
            { letter: "B", text: "by admitting the method's weaknesses and then reaffirming its overall value" },
            { letter: "C", text: "by comparing trees that grow near springs with trees in the tropics" },
            { letter: "D", text: "by describing the causes of narrow rings in order of how often they occur" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence gives the strongest support for the claim in sentence 7 that the work reaches beyond a single stump?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "B"
        },
        {
          id: "wordmean",
          sol: "9.RV.1.C",
          stem: "In sentence 11, the word practitioners refers to —",
          choices: [
            { letter: "A", text: "the trees that record the weather" },
            { letter: "B", text: "critics who doubt the research" },
            { letter: "C", text: "the limits of the technique" },
            { letter: "D", text: "the people who carry out the method" }
          ],
          correct: "D"
        },
        {
          id: "barcode",
          sol: "9.RI.2.B",
          stem: "The comparison to bar codes in sentence 8 helps the reader understand that ring patterns —",
          choices: [
            { letter: "A", text: "can be matched from one tree to another like identical labels" },
            { letter: "B", text: "are printed by machines rather than grown by the tree" },
            { letter: "C", text: "are difficult for anyone but a trained clerk to read" },
            { letter: "D", text: "vary so much that no two trees in a region ever match" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "9.RI.1.C",
          stem: "The author ends with sentences 16 and 17 mainly to —",
          choices: [
            { letter: "A", text: "argue that trees are unreliable witnesses because they cannot speak" },
            { letter: "B", text: "claim that researchers' records are more accurate than the rings" },
            { letter: "C", text: "suggest that the evidence exists, but making sense of it takes careful human work" },
            { letter: "D", text: "urge scientists to stop trying to interpret patterns in old wood" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── FUNCTIONAL TEXTS ───────────────────────── */
    {
      id: "g9-ri-aquarium-form",
      family: "G9",
      title: "Aquarium Trip Permission Form",
      kind: "Functional text · 9.RI",
      blurb: "A permission form for the biology field trip, with a note from the teacher.",
      level: 1,
      passage:
        "<p><strong>HARBOR AQUARIUM TRIP — PERMISSION FORM</strong></p>" +
        "<p>" + N(1) + "<strong>When and where.</strong> Buses leave the front loop at 8:15 a.m. Thursday, October 22, and return by 2:30 for regular dismissal. " +
        N(2) + "Students report to Room 204, not to their first-period class, by 8:00 for a head count. " +
        N(3) + "<strong>Cost.</strong> The trip costs $12 per student, covering the group ticket and the bus. " +
        N(4) + "Pay by cash, check to Westbrook High School, or online through the school store; no student is left behind over cost, so see Ms. Okafor privately if paying is a problem. " +
        N(5) + "<strong>What to bring.</strong> A packed lunch or $10 for the cafe, a pencil, and Monday's lab worksheet. " +
        N(6) + "Backpacks stay on the bus; a small drawstring bag is fine. " +
        N(7) + "<strong>Rules.</strong> Students stay with their group leader at all times and may not enter the gift shop until the leader takes them there after lunch. " +
        N(8) + "Phones may be used for photos only at the touch tank. " +
        N(9) + "<strong>Medical.</strong> Students who carry an inhaler or epinephrine pen must bring it and list it below; the nurse will not be traveling with us. " +
        N(10) + "<strong>Deadline.</strong> Signed forms and payment are due to Ms. Okafor by Friday, October 16. " +
        N(11) + "Forms turned in later cannot be accepted, because the aquarium requires our final count one week in advance. " +
        N(12) + "<strong>Note from Ms. Okafor:</strong> The worksheet is not busywork. " +
        N(13) + "It is the lab grade for this unit, and students who do not attend will complete a longer written version in class." +
        "</p>" +
        "<p>" + N(14) + "I give permission for my student, ____________________, to attend the aquarium trip on October 22. " +
        N(15) + "Parent/guardian signature: ____________________ Date: ________ " +
        N(16) + "Emergency phone: ____________________ Medications carried: ____________________" +
        "</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.C",
          stem: "This form was written mainly to —",
          choices: [
            { letter: "A", text: "persuade students to visit the aquarium on their own" },
            { letter: "B", text: "inform families about the trip and collect their permission" },
            { letter: "C", text: "explain how the touch tank at the aquarium works" },
            { letter: "D", text: "describe the lab worksheet for the biology unit" }
          ],
          correct: "B"
        },
        {
          id: "report",
          sol: "9.RI.1.B",
          stem: "According to the form, where should students report on the morning of the trip?",
          choices: [
            { letter: "A", text: "the front loop" },
            { letter: "B", text: "their first-period class" },
            { letter: "C", text: "Room 204" },
            { letter: "D", text: "the school store" }
          ],
          correct: "C"
        },
        {
          id: "deadline",
          sol: "9.RI.1.B",
          stem: "Why can forms not be accepted after October 16?",
          choices: [
            { letter: "A", text: "The aquarium needs the final count a week before the trip." },
            { letter: "B", text: "The bus company charges extra for late additions." },
            { letter: "C", text: "Ms. Okafor will be out of the building the following week." },
            { letter: "D", text: "The school store closes its payment page on that date." }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "9.RI.2.B",
          stem: "The bold headings on the form mainly help the reader —",
          choices: [
            { letter: "A", text: "understand why the trip is important" },
            { letter: "B", text: "know which rules are the most serious" },
            { letter: "C", text: "see which parts were written by the teacher" },
            { letter: "D", text: "find specific information quickly" }
          ],
          correct: "D"
        },
        {
          id: "wordmean",
          sol: "9.RV.1.C",
          stem: "In sentence 12, the word busywork most nearly means —",
          choices: [
            { letter: "A", text: "a task that keeps students occupied but has little real value" },
            { letter: "B", text: "a task that must be finished during a crowded schedule" },
            { letter: "C", text: "work that is done by a group rather than by one student" },
            { letter: "D", text: "work that counts for a large part of the final grade" }
          ],
          correct: "A"
        },
        {
          id: "inference",
          sol: "9.RI.1.A",
          stem: "Which statement is best supported by sentences 12 and 13?",
          choices: [
            { letter: "A", text: "Students who attend the trip will not receive a grade for the unit." },
            { letter: "B", text: "The written version will be shorter than the worksheet." },
            { letter: "C", text: "Skipping the trip does not excuse a student from the lab grade." },
            { letter: "D", text: "The worksheet must be turned in before the buses leave." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-concession-stand",
      family: "G9",
      title: "Concession Stand Shift Sheet",
      kind: "Functional text · 9.RI",
      blurb: "Instructions for student volunteers running the stand at home games, with a note from the boosters.",
      level: 2,
      passage:
        "<p><strong>CONCESSION STAND — VOLUNTEER SHIFT SHEET</strong></p>" +
        "<p>" + N(1) + "<strong>Shifts.</strong> First shift runs 5:30 to 7:00 p.m. and second shift from 7:00 to the final whistle plus cleanup; take one or both, but no one leaves until the next shift arrives. " +
        N(2) + "<strong>Opening (first shift).</strong> Turn on the warmer at 5:30 so pretzels are ready by 6:00, then count the starting cash with a partner before the window opens and both initial the count sheet. " +
        N(3) + "The popcorn machine takes twelve minutes to heat, so start it right after the warmer, not when someone asks. " +
        N(4) + "<strong>Selling.</strong> Posted prices are not negotiable, even for teammates or friends. " +
        N(5) + "Write every sale on the tally sheet by item, not just by dollar amount, because the boosters reorder stock from the tally. " +
        N(6) + "Handle food only with gloves, and change them after touching money. " +
        N(7) + "<strong>Halftime.</strong> The halftime line is the reason there are four people on second shift. " +
        N(8) + "One takes orders, one handles cash, and two fill orders; do not rotate jobs until the line is gone. " +
        N(9) + "<strong>Closing (second shift).</strong> Unsold hot food is thrown out, not taken home, however much is left. " +
        N(10) + "Unopened drinks and packaged candy go back in the locked cabinet. " +
        N(11) + "Count the ending cash with a partner, initial the count sheet, and lock the cash box in the athletic office safe; never leave it in the stand. " +
        N(12) + "<strong>Note from the booster club:</strong> Last season the stand lost money on two of the biggest home games. " +
        N(13) + "Those nights' tally sheets were blank, so nobody knows whether the cause was theft, miscounting, or free pretzels. " +
        N(14) + "The rules on this sheet exist so we never have to guess again." +
        "</p>",
      claims: [
        {
          id: "note",
          sol: "9.RI.1.C",
          stem: "The booster club's note in sentences 12–14 is included mainly to —",
          choices: [
            { letter: "A", text: "accuse last season's volunteers of stealing from the stand" },
            { letter: "B", text: "announce that the stand will close for the biggest games" },
            { letter: "C", text: "explain why the record-keeping rules on the sheet matter" },
            { letter: "D", text: "encourage volunteers to give leftover pretzels to friends" }
          ],
          correct: "C"
        },
        {
          id: "tally",
          sol: "9.RI.1.B",
          stem: "According to the sheet, why must sales be recorded by item rather than only by dollar amount?",
          choices: [
            { letter: "A", text: "The boosters use the item counts to reorder supplies." },
            { letter: "B", text: "The athletic office requires an item list for the safe." },
            { letter: "C", text: "The prices on the board change during halftime." },
            { letter: "D", text: "The tally sheet has no space for dollar totals." }
          ],
          correct: "A"
        },
        {
          id: "grouping",
          sol: "9.RI.2.A",
          stem: "The instructions in sentences 2–11 are grouped mainly according to —",
          choices: [
            { letter: "A", text: "how difficult each task is for a new volunteer" },
            { letter: "B", text: "the stage of the game night when each task happens" },
            { letter: "C", text: "which volunteer is responsible for each task" },
            { letter: "D", text: "how much money each task protects" }
          ],
          correct: "B"
        },
        {
          id: "wordmean",
          sol: "9.RV.1.C",
          stem: "In sentence 4, the word negotiable most nearly means —",
          choices: [
            { letter: "A", text: "printed in large letters" },
            { letter: "B", text: "paid in cash rather than by card" },
            { letter: "C", text: "the same at every home game" },
            { letter: "D", text: "open to being changed by discussion" }
          ],
          correct: "D"
        },
        {
          id: "response",
          sol: "9.RI.3.A",
          stem: "Which TWO rules on the sheet most directly respond to the problem described in sentence 13? Select TWO.",
          choices: [
            { letter: "A", text: "Every sale is written on the tally sheet by item (sentence 5)." },
            { letter: "B", text: "Change gloves after handling money (sentence 6)." },
            { letter: "C", text: "Count the cash with a partner and initial the count sheet (sentence 11)." },
            { letter: "D", text: "Start the popcorn machine right after the warmer (sentence 3)." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "whistle",
          sol: "9.RI.2.B",
          stem: "The phrase the final whistle plus cleanup in sentence 1 tells second-shift volunteers that —",
          choices: [
            { letter: "A", text: "they may leave as soon as the game ends" },
            { letter: "B", text: "their shift has no fixed ending time" },
            { letter: "C", text: "cleanup is optional after a close game" },
            { letter: "D", text: "the whistle signals the start of their shift" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── ARGUMENT ───────────────────────── */
    {
      id: "g9-ri-ten-minutes",
      family: "G9",
      title: "Ten Minutes Outside",
      kind: "Argument · 9.RI",
      blurb: "A student columnist argues for a short outdoor break in the school day.",
      level: 2,
      passage:
        "<p>" + N(1) + "Between the first bell and lunch, a student here sits through four class periods, almost three hours, with twelve minutes of hallway walking between them. " +
        N(2) + "Elementary students in this district get recess. " +
        N(3) + "Ninth graders get a locker. " +
        N(4) + "I am proposing something modest: a ten-minute outdoor break after second period, every day, weather permitting. " +
        N(5) + "The strongest reason is not that students would enjoy it, although they would. " +
        N(6) + "It is that short breaks make the time in class worth more. " +
        N(7) + "Teachers already know this. " +
        N(8) + "Ask any of them about the last fifteen minutes of a ninety-minute block, and they will describe a room of people who are present but no longer arriving. " +
        N(9) + "A study of middle schools that added a daily outdoor break found fewer discipline referrals in the next period and a small, steady rise in on-task behavior. " +
        N(10) + "The critics have two objections, and one of them is fair. " +
        N(11) + "The first is that ten minutes is instructional time we cannot spare. " +
        N(12) + "But a break costs less than the ten distracted minutes it replaces; the trade is tired time for alert time. " +
        N(13) + "The second objection is supervision, and this one deserves a real answer. " +
        N(14) + "Putting six hundred students outside at once requires staff, a clear boundary, and a plan for rain. " +
        N(15) + "Those are logistics, not reasons to say no. " +
        N(16) + "The courtyard already has a fence, and teachers on hall duty could simply move outdoors. " +
        N(17) + "Try it for one semester. " +
        N(18) + "If tardies to third period rise, cancel it. " +
        N(19) + "If they fall, we will have learned something about how ninth graders actually work." +
        "</p>",
      claims: [
        {
          id: "proposal",
          sol: "9.RI.1.A",
          stem: "Which sentence states the writer's proposal most directly?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "B"
        },
        {
          id: "research",
          sol: "9.RI.3.A",
          stem: "Which sentence supplies research evidence rather than personal observation?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 16" }
          ],
          correct: "C"
        },
        {
          id: "objections",
          sol: "9.RI.2.A",
          stem: "In sentences 10–16, the writer handles the objections to the plan by —",
          choices: [
            { letter: "A", text: "answering the first briefly and treating the second as a problem to solve" },
            { letter: "B", text: "admitting that both objections are strong enough to delay the plan" },
            { letter: "C", text: "arguing that the critics do not understand how ninth graders learn" },
            { letter: "D", text: "listing the objections without responding to either of them" }
          ],
          correct: "A"
        },
        {
          id: "wordmean",
          sol: "9.RV.1.C",
          stem: "In sentence 15, the word logistics most nearly means —",
          choices: [
            { letter: "A", text: "the reasons a plan should be rejected" },
            { letter: "B", text: "the rules that govern student behavior" },
            { letter: "C", text: "the costs of a plan measured in dollars" },
            { letter: "D", text: "the practical details of carrying out a plan" }
          ],
          correct: "D"
        },
        {
          id: "arriving",
          sol: "9.RI.2.B",
          stem: "The phrase present but no longer arriving in sentence 8 describes students who are —",
          choices: [
            { letter: "A", text: "in the room but no longer mentally engaged" },
            { letter: "B", text: "late to class after the outdoor break" },
            { letter: "C", text: "leaving the room before the block ends" },
            { letter: "D", text: "waiting in the hallway for the next bell" }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "9.RI.1.C",
          stem: "The writer ends with sentences 17–19 mainly to —",
          choices: [
            { letter: "A", text: "admit that the plan will probably fail" },
            { letter: "B", text: "warn that tardies will rise if the break is added" },
            { letter: "C", text: "demand that the plan be adopted permanently" },
            { letter: "D", text: "propose a limited test with a clear way to judge the result" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-group-grades",
      family: "G9",
      title: "One Grade for Five People",
      kind: "Argument · 9.RI",
      blurb: "An opinion piece questioning the single shared grade on group projects.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every group project I have been assigned ends the same way: one person building slides at midnight, two who did their part on Tuesday and vanished, one who did nothing, and one grade for all five. " +
        N(2) + "I am not arguing against group work. " +
        N(3) + "Learning to divide a task, argue about it, and finish it together is a skill adults are paid for. " +
        N(4) + "I am arguing against the single shared grade, which teaches a different lesson: that effort and outcome are only loosely connected. " +
        N(5) + "Defenders of the shared grade say it mirrors the workplace, where a team succeeds or fails together. " +
        N(6) + "That sounds right until you look closely. " +
        N(7) + "In a workplace, the person who vanishes is spoken to, reassigned, or let go; the result is shared, but the consequences are not. " +
        N(8) + "A classroom that copies the shared result without the accountability copies half the model. " +
        N(9) + "Others argue that separate grades would make students compete instead of cooperate. " +
        N(10) + "Yet the current system already breeds a quiet resentment no rubric measures, and resentment is a poor foundation for cooperation. " +
        N(11) + "There is a workable middle path, and some teachers here already use it. " +
        N(12) + "The product earns a group score; a short individual piece, a reflection, a content quiz, or a signed log of contributions, earns a separate score. " +
        N(13) + "In one class that tried this, students said vanishing dropped sharply, not because anyone was punished but because the log made it visible. " +
        N(14) + "I cannot claim that fixes everything. " +
        N(15) + "But a grade should tell the truth about what a student did, and one number for five people rarely can." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which sentence best expresses the writer's central claim?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which choice best describes the evidence offered in sentence 13?",
          choices: [
            { letter: "A", text: "a district-wide study that settles the question" },
            { letter: "B", text: "a personal opinion with no connection to the claim" },
            { letter: "C", text: "one class's self-reported results, which is limited support" },
            { letter: "D", text: "a statistic drawn from research on workplaces" }
          ],
          correct: "C"
        },
        {
          id: "workplace",
          sol: "9.RI.2.A",
          stem: "How does the writer respond to the argument presented in sentence 5?",
          choices: [
            { letter: "A", text: "by showing that the workplace comparison leaves out individual consequences" },
            { letter: "B", text: "by denying that real workplaces ever organize employees into teams" },
            { letter: "C", text: "by agreeing that classrooms should copy the workplace exactly" },
            { letter: "D", text: "by pointing out that most students will never work on a team" }
          ],
          correct: "A"
        },
        {
          id: "wordmean",
          sol: "9.RV.1.C",
          stem: "In sentence 10, the word breeds most nearly means —",
          choices: [
            { letter: "A", text: "trains or teaches" },
            { letter: "B", text: "measures or records" },
            { letter: "C", text: "hides or conceals" },
            { letter: "D", text: "produces or gives rise to" }
          ],
          correct: "D"
        },
        {
          id: "vanish",
          sol: "9.RI.2.B",
          stem: "The writer's repeated use of forms of the word vanish in sentences 1, 7, and 13 mainly emphasizes —",
          choices: [
            { letter: "A", text: "how quickly most group projects are finished" },
            { letter: "B", text: "how a non-contributing member disappears from the work but not from the grade" },
            { letter: "C", text: "the writer's wish to leave group work behind entirely" },
            { letter: "D", text: "that teachers rarely notice when students are absent" }
          ],
          correct: "B"
        },
        {
          id: "narrowing",
          sol: "9.RI.1.C",
          stem: "The writer includes sentences 2 and 3 mainly to —",
          choices: [
            { letter: "A", text: "prove that adults are paid more when they work in groups" },
            { letter: "B", text: "suggest that group projects should be assigned more often" },
            { letter: "C", text: "narrow the argument so readers do not mistake it for an attack on group work" },
            { letter: "D", text: "introduce the middle path that is described later in the passage" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
