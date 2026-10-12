/* SOL Labyrinth — Grade 11 medium-tier expansion packs (v5.15, nights 21-50): a school robotics club, community
 * gardens, a small-town bakery, and storm chasing and weather. 21 packs x 6 questions. Original text only.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 · LITERARY · robotics club */
    {
      id: "g11-rl-c96-the-claw",
      family: "G11",
      title: "The Claw",
      kind: "Literary · 11.RL",
      blurb: "Three days before the qualifier, the robot keeps dropping cubes, and its designer will not let anyone help.",
      level: 1,
      passage:
        "<p>" + N(1) + "Three days before the regional qualifier, the claw on the Hornets' robot still dropped every third foam cube it lifted. " +
        N(2) + "Mariam Haddad, who had designed the claw herself, stayed in the shop room after the others left, tightening screws that were already tight. " +
        N(3) + "Her coach, Mr. Oduya, found her there at six o'clock, surrounded by cubes scattered across the floor like spilled dice. " +
        N(4) + "\"You've been fixing the same bolt for an hour,\" he said. " +
        N(5) + "Mariam admitted that she did not want anyone else to touch the claw, because if it failed, she wanted the failure to be hers alone. " +
        N(6) + "Mr. Oduya picked up a cube and turned it over in his hand. " +
        N(7) + "\"Then it will be yours alone,\" he said, \"and so will all the hours you could have saved.\"</p>" +
        "<p>" + N(8) + "The next morning, Mariam showed the claw to Ezra Lindqvist, a freshman who rarely spoke at meetings. " +
        N(9) + "Ezra watched it drop a cube, then pointed at the rubber pads on the fingers. " +
        N(10) + "They were smooth, he said, worn down from weeks of testing. " +
        N(11) + "Within twenty minutes, the two of them had glued strips of bicycle inner tube onto the pads. " +
        N(12) + "The claw lifted fifty cubes in a row without a single drop.</p>" +
        "<p>" + N(13) + "At the qualifier, the Hornets finished fourth, good enough to advance. " +
        N(14) + "When a judge asked who had built the claw, Mariam opened her mouth to answer, then stopped. " +
        N(15) + "\"Ezra and I did,\" she said, and stepped aside so he could stand beside her.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Mariam and the Hornets' claw?",
          choices: [
            { letter: "A", text: "Careful designers should never let beginners handle their work." },
            { letter: "B", text: "Accepting help can solve problems that pride keeps unsolved." },
            { letter: "C", text: "Winning a qualifier matters less than having a famous coach." },
            { letter: "D", text: "Old materials are usually more reliable than newer ones." }
          ],
          correct: "B"
        },
        {
          id: "coach",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Mr. Oduya's reply in sentence 7 moves the plot forward mainly by —",
          choices: [
            { letter: "A", text: "convincing Mariam to drop out of the regional qualifier" },
            { letter: "B", text: "revealing that he plans to redesign the claw himself" },
            { letter: "C", text: "prompting Mariam to show the claw to someone else" },
            { letter: "D", text: "explaining why the foam cubes keep slipping free" }
          ],
          correct: "C"
        },
        {
          id: "alone",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Mariam's admission in sentence 5 reveals that she —",
          choices: [
            { letter: "A", text: "wants to own the claw's results completely, even its failure" },
            { letter: "B", text: "believes Mr. Oduya has given her an unfair assignment" },
            { letter: "C", text: "thinks the other club members have stopped caring" },
            { letter: "D", text: "expects the claw to work perfectly at the qualifier" }
          ],
          correct: "A"
        },
        {
          id: "dice",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 3, comparing the scattered cubes to spilled dice mainly suggests —",
          choices: [
            { letter: "A", text: "that Mariam has been playing a game instead of working" },
            { letter: "B", text: "that the club has bought far too many foam cubes" },
            { letter: "C", text: "that Mr. Oduya is angry about the messy shop room" },
            { letter: "D", text: "the disorder and bad luck of her repeated failed tests" }
          ],
          correct: "D"
        },
        {
          id: "screws",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The phrase \"tightening screws that were already tight\" in sentence 2 suggests that Mariam is —",
          choices: [
            { letter: "A", text: "carefully finishing the last step of a nearly perfect design" },
            { letter: "B", text: "busy with restless effort that is not solving the problem" },
            { letter: "C", text: "teaching herself to use a new set of shop tools" },
            { letter: "D", text: "waiting for her teammates to come back and help her" }
          ],
          correct: "B"
        },
        {
          id: "judge",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Sentence 15, in which Mariam steps aside for Ezra, resolves the story by showing that she —",
          choices: [
            { letter: "A", text: "is embarrassed that a freshman found the problem" },
            { letter: "B", text: "wants the judge to blame Ezra if the claw fails later" },
            { letter: "C", text: "has decided to quit designing parts for the robot" },
            { letter: "D", text: "has learned to share credit along with the work" }
          ],
          correct: "D"
        }
      ]
    },

    /* 2 · INFORMATIONAL · storm chasing */
    {
      id: "g11-ri-c96-chasing-purpose",
      family: "G11",
      title: "Chasing With a Purpose",
      kind: "Informational · 11.RI",
      blurb: "Research storm chasers plan like scientists, drive rolling instruments, and treat safety as the first rule.",
      level: 2,
      passage:
        "<p>" + N(1) + "To many people, storm chasing looks like a thrill sport: a car racing down a country road toward a dark wall of cloud. " +
        N(2) + "For atmospheric scientists, however, a chase is closer to a carefully planned field experiment. " +
        N(3) + "Research teams spend the morning studying weather balloon data and computer forecasts, looking for places where warm, moist air near the ground meets cooler, drier air above. " +
        N(4) + "That clash of air masses can produce the rotating thunderstorms known as supercells. " +
        N(5) + "Once a target region is chosen, the team drives there hours before any storm forms.</p>" +
        "<p>" + N(6) + "The vehicles themselves are rolling instruments. " +
        N(7) + "Many research cars carry roof racks fitted with sensors that record temperature, humidity, wind speed and air pressure every second. " +
        N(8) + "Because several cars can surround a storm at once, scientists can build a three-dimensional picture of how air flows into it. " +
        N(9) + "Some teams also place small weather probes in the expected path of a storm, then retreat to a safe distance.</p>" +
        "<p>" + N(10) + "Safety shapes every decision. " +
        N(11) + "Teams plan escape routes before they arrive, avoid driving through heavy rain where visibility vanishes, and abandon a storm the moment the roads become uncertain. " +
        N(12) + "A forecaster on one university team sums up the rule this way: no measurement is worth a life.</p>" +
        "<p>" + N(13) + "The payoff is knowledge that reaches far beyond the chasers. " +
        N(14) + "Data gathered in the field help forecasters understand why some supercells produce tornadoes while most do not, and that understanding can lengthen the warning time families receive before a tornado strikes.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about research storm chasing?",
          choices: [
            { letter: "A", text: "Storm chasing is mostly a dangerous hobby for thrill seekers." },
            { letter: "B", text: "Supercells form wherever warm and cool air happen to meet." },
            { letter: "C", text: "Research chasing is careful science that can improve warnings." },
            { letter: "D", text: "Roof sensors are the most important tool a forecaster owns." }
          ],
          correct: "C"
        },
        {
          id: "threed",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, what allows scientists to build a three-dimensional picture of a storm's airflow?",
          choices: [
            { letter: "A", text: "Several sensor-equipped cars surround the storm at once." },
            { letter: "B", text: "Weather balloons are launched into the storm's core." },
            { letter: "C", text: "Teams study computer forecasts the morning before." },
            { letter: "D", text: "Chasers photograph the storm from many escape routes." }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The author's attitude toward research storm chasers is best described as —",
          choices: [
            { letter: "A", text: "amused by their love of danger" },
            { letter: "B", text: "doubtful about the value of their data" },
            { letter: "C", text: "worried that they take foolish risks" },
            { letter: "D", text: "respectful of their planning and purpose" }
          ],
          correct: "D"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize the passage after the opening contrast in sentences 1 and 2?",
          choices: [
            { letter: "A", text: "by telling the story of one chase from start to finish" },
            { letter: "B", text: "by moving through planning, equipment, safety and payoff" },
            { letter: "C", text: "by comparing research chasers with television reporters" },
            { letter: "D", text: "by listing famous tornadoes in order of their strength" }
          ],
          correct: "B"
        },
        {
          id: "rolling",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In sentence 6, calling the research vehicles \"rolling instruments\" helps the reader understand that the cars —",
          choices: [
            { letter: "A", text: "are themselves tools for taking measurements" },
            { letter: "B", text: "are built to roll over safely in high winds" },
            { letter: "C", text: "carry musical equipment for long drives" },
            { letter: "D", text: "move too slowly to escape a fast storm" }
          ],
          correct: "A"
        },
        {
          id: "rule",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the forecaster's rule in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "show that university teams rarely collect useful data" },
            { letter: "B", text: "suggest that chasing should be left to the military" },
            { letter: "C", text: "stress that safety outranks any scientific goal" },
            { letter: "D", text: "explain how forecasters choose a target region" }
          ],
          correct: "C"
        }
      ]
    },

    /* 3 · POETRY · community gardens */
    {
      id: "g11-rl-c96-calder-street",
      family: "G11",
      title: "The Lot on Calder Street",
      kind: "Poetry · 11.RL",
      blurb: "A grandmother, a coffee can of soil, and a fence the beans refuse to respect.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The lot on Calder Street was glass and weeds<br>" +
        L(2) + "the summer that my grandmother arrived<br>" +
        L(3) + "with a coffee can of soil, a fist of seeds<br>" +
        L(4) + "from a village that, she liked to say, survived<br>" +
        L(5) + "in her more surely than on any map.<br>" +
        L(6) + "She did not ask permission of the fence.<br>" +
        L(7) + "She knelt, and by July the beans had wrapped<br>" +
        L(8) + "its wire as if they'd found a better sense<br>" +
        L(9) + "of where a border ends. The neighbors came,<br>" +
        L(10) + "first one man with a hose, then two with spades,<br>" +
        L(11) + "and someone painted every plot a name<br>" +
        L(12) + "in letters that the rain has made to fade.<br>" +
        L(13) + "Now I kneel where she knelt, and I can't say<br>" +
        L(14) + "which roots are hers. I think that is the way.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem about the lot on Calder Street?",
          choices: [
            { letter: "A", text: "Neighbors should get permission before they use empty land." },
            { letter: "B", text: "Old traditions are lost once a family moves to a new place." },
            { letter: "C", text: "One person's quiet effort can grow into a shared community." },
            { letter: "D", text: "Gardens are hard to keep alive in crowded city streets." }
          ],
          correct: "C"
        },
        {
          id: "neighbors",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Lines 9-11, in which the neighbors arrive with a hose and spades, develop the poem mainly by —",
          choices: [
            { letter: "A", text: "showing the garden spreading from one person to many" },
            { letter: "B", text: "suggesting the neighbors wanted to stop the grandmother" },
            { letter: "C", text: "explaining why the painted names have begun to fade" },
            { letter: "D", text: "describing the speaker's first day working in the lot" }
          ],
          correct: "A"
        },
        {
          id: "border",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In lines 7-9, saying the beans seemed to find \"a better sense / of where a border ends\" suggests that the garden —",
          choices: [
            { letter: "A", text: "needs a taller fence to keep its plants in place" },
            { letter: "B", text: "grows across the lines that separate people" },
            { letter: "C", text: "has been planted on land that belongs to the city" },
            { letter: "D", text: "produces fewer beans each year it is planted" }
          ],
          correct: "B"
        },
        {
          id: "glass",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The phrase \"glass and weeds\" in line 1 creates a tone that is —",
          choices: [
            { letter: "A", text: "cheerful and welcoming" },
            { letter: "B", text: "angry and accusing" },
            { letter: "C", text: "playful and teasing" },
            { letter: "D", text: "bleak and neglected" }
          ],
          correct: "D"
        },
        {
          id: "permission",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 6, the statement that the grandmother \"did not ask permission of the fence\" most nearly suggests that she —",
          choices: [
            { letter: "A", text: "broke the fence down so the neighbors could enter" },
            { letter: "B", text: "was unaware that the lot belonged to anyone else" },
            { letter: "C", text: "began planting boldly without waiting to be allowed" },
            { letter: "D", text: "asked the neighbors to help her build a new fence" }
          ],
          correct: "C"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How do the final two lines of the poem shape its meaning?",
          choices: [
            { letter: "A", text: "They shift to the present to show the speaker carrying on a blended legacy." },
            { letter: "B", text: "They reveal that the speaker has decided to sell the garden plot." },
            { letter: "C", text: "They return to the opening image of glass and weeds in the lot." },
            { letter: "D", text: "They explain where the grandmother's village was located." }
          ],
          correct: "A"
        }
      ]
    },

    /* 4 · VOCABULARY · small-town bakery */
    {
      id: "g11-rv-c96-maple-row",
      family: "G11",
      title: "Four O'Clock at Maple Row",
      kind: "Vocabulary · 11.RV",
      blurb: "A baker in a one-bakery town measures like a pharmacist and refuses to let the shelves go bare.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every morning at four o'clock, Rosalind Achebe unlocks the back door of the Maple Row Bakery, the only bakery in the town of Harlan Falls. " +
        N(2) + "Her first task is to <strong>preheat</strong> the two big ovens, warming them for nearly an hour before a single loaf goes in. " +
        N(3) + "While they heat, she weighs flour, salt and water with <strong>meticulous</strong> care, checking each number twice because a few grams can change how a loaf rises. " +
        N(4) + "Her assistant, Paolo, jokes that she measures more carefully than a pharmacist.</p>" +
        "<p>" + N(5) + "By six, the kitchen is <strong>aromatic</strong>: the smell of cinnamon and toasted sesame drifts out the vents and down the empty main street. " +
        N(6) + "The first customers are usually farmers and nurses coming off the night shift at the clinic. " +
        N(7) + "They want coffee and rolls, and they want them fast.</p>" +
        "<p>" + N(8) + "Around ten, the supply of rolls on the shelves begins <strong>dwindling</strong>, shrinking tray by tray until only a few remain in the corner. " +
        N(9) + "Rosalind never lets the shelves go bare; she bakes a second batch to <strong>replenish</strong> them before the lunch crowd arrives. " +
        N(10) + "Paolo once asked why she bothered when the morning had already been profitable. " +
        N(11) + "She said that the person who walks in at noon deserves the same full shelf as the person who walks in at six.</p>" +
        "<p>" + N(12) + "Her standards are <strong>impeccable</strong>, and not one burnt crust or underbaked center is allowed to leave the kitchen. " +
        N(13) + "In a town this small, she says, every loaf is a kind of reputation.</p>",
      claims: [
        {
          id: "preheat",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word preheat in sentence 2 begins with the prefix pre-, as do prepay and preview. In all three words, pre- signals that an action happens —",
          choices: [
            { letter: "A", text: "again and again" },
            { letter: "B", text: "very slowly" },
            { letter: "C", text: "in the wrong way" },
            { letter: "D", text: "beforehand" }
          ],
          correct: "D"
        },
        {
          id: "replenish",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word replenish in sentence 9 begins with the prefix re-, meaning again. Based on this prefix and the context, replenish most nearly means —",
          choices: [
            { letter: "A", text: "fill up again" },
            { letter: "B", text: "clean off again" },
            { letter: "C", text: "move to another place" },
            { letter: "D", text: "count more carefully" }
          ],
          correct: "A"
        },
        {
          id: "meticulous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the detail about Rosalind checking each number twice shows that meticulous means —",
          choices: [
            { letter: "A", text: "hurried and rough" },
            { letter: "B", text: "extremely careful and precise" },
            { letter: "C", text: "cheerful and relaxed" },
            { letter: "D", text: "tired and forgetful" }
          ],
          correct: "B"
        },
        {
          id: "dwindling",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 8, the phrase \"shrinking tray by tray\" shows that dwindling means —",
          choices: [
            { letter: "A", text: "suddenly vanishing" },
            { letter: "B", text: "quickly multiplying" },
            { letter: "C", text: "gradually growing smaller" },
            { letter: "D", text: "staying exactly the same" }
          ],
          correct: "C"
        },
        {
          id: "aromatic",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the word aromatic most nearly means —",
          choices: [
            { letter: "A", text: "crowded with early customers" },
            { letter: "B", text: "full of a pleasant smell" },
            { letter: "C", text: "noisy with kitchen machines" },
            { letter: "D", text: "too hot to work in comfortably" }
          ],
          correct: "B"
        },
        {
          id: "impeccable",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 12, the word impeccable, used to describe Rosalind's standards, most nearly means —",
          choices: [
            { letter: "A", text: "unusual" },
            { letter: "B", text: "changeable" },
            { letter: "C", text: "flawless" },
            { letter: "D", text: "secret" }
          ],
          correct: "C"
        }
      ]
    },

    /* 5 · PAIRED TEXTS · robotics club */
    {
      id: "g11-dsr-c96-greenvale-trip",
      family: "G11",
      title: "Trophies or Doors",
      kind: "Paired texts · 11.DSR",
      blurb: "A robotics club's season report lists the numbers; a member's post argues they point somewhere new.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the Ridgeline High Robotics Club's end-of-season report</strong></p>" +
        "<p>" + N(1) + "This season, the Ridgeline Robotics Club built two competition robots and entered four tournaments, including the state championship in Greenvale. " +
        N(2) + "The club's total spending was $4,200. " +
        N(3) + "Parts and tools accounted for $1,700, registration fees for $900, and travel and lodging for $1,600, most of it for the Greenvale weekend. " +
        N(4) + "Membership grew from fourteen students to twenty-two, and six of the new members were freshmen. " +
        N(5) + "At the state championship, the team placed eleventh of forty teams and received the judges' award for its engineering notebook. " +
        N(6) + "Members logged more than nine hundred hours in the shop, most of them on weekday evenings. " +
        N(7) + "Next year, registration fees are expected to rise by about ten percent, so the advisor recommends that fundraising begin earlier in the fall.</p>" +
        "<p><strong>Text 2 — From a club member's post on the school news site</strong></p>" +
        "<p>" + N(8) + "I loved every minute of the Greenvale trip, but I think next year we should skip it. " +
        N(9) + "That one weekend used up most of our travel money. " +
        N(10) + "For the same price, we could run a free Saturday robotics camp for students at Hollis Middle School, which has no club of its own. " +
        N(11) + "Our report brags that we grew to twenty-two members, but nearly all of us came from the same two middle schools. " +
        N(12) + "If we want a team that looks like our whole town, we have to start building it earlier. " +
        N(13) + "A trophy sits on a shelf; a seventh grader who learns to wire a motor might stay in engineering for life. " +
        N(14) + "I am not saying competitions don't matter. " +
        N(15) + "I am saying our money should go where it opens the most doors.</p>",
      claims: [
        {
          id: "bothfact",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which fact about the Ridgeline Robotics Club appears in both texts?",
          choices: [
            { letter: "A", text: "The club placed eleventh at the state championship." },
            { letter: "B", text: "The club's membership reached twenty-two students." },
            { letter: "C", text: "Hollis Middle School has started its own club." },
            { letter: "D", text: "Registration fees will rise by ten percent." }
          ],
          correct: "B"
        },
        {
          id: "leftout",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which detail from the report does the post leave out that a reader would need in order to weigh the value of the Greenvale trip fairly?",
          choices: [
            { letter: "A", text: "the team's judges' award for its engineering notebook" },
            { letter: "B", text: "the six freshmen who joined the club this season" },
            { letter: "C", text: "the total of $4,200 the club spent this season" },
            { letter: "D", text: "the nine hundred hours members spent in the shop" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the Ridgeline report and the member's post differ in purpose?",
          choices: [
            { letter: "A", text: "The report asks for donations; the post thanks the donors." },
            { letter: "B", text: "The report criticizes the advisor; the post defends him." },
            { letter: "C", text: "The report records the season; the post argues for a change." },
            { letter: "D", text: "The report plans a camp; the post explains a tournament." }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the tone of the season report, the tone of the member's post is more —",
          choices: [
            { letter: "A", text: "neutral and technical" },
            { letter: "B", text: "bitter and hopeless" },
            { letter: "C", text: "formal and cautious" },
            { letter: "D", text: "personal and persuasive" }
          ],
          correct: "D"
        },
        {
          id: "selecttwo",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that respond directly to the membership figures reported in sentence 4 of Text 1.",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "brags",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "In sentence 11, the word brags suggests that the writer views the report's membership figure as —",
          choices: [
            { letter: "A", text: "a boast that hides a weakness" },
            { letter: "B", text: "a mistake in simple arithmetic" },
            { letter: "C", text: "a secret kept from the advisor" },
            { letter: "D", text: "a fair and complete summary" }
          ],
          correct: "A"
        }
      ]
    },

    /* 6 · LITERARY · small-town bakery */
    {
      id: "g11-rl-c96-the-starter",
      family: "G11",
      title: "The Starter",
      kind: "Literary · 11.RL",
      blurb: "Nour has a folded list of improvements for her grandfather's bakery. He has one jar he will not let her change.",
      level: 2,
      passage:
        "<p>" + N(1) + "The jar of sourdough starter on the top shelf of Sarkis Bakery was forty-one years old, and Nour thought it looked like wet cement. " +
        N(2) + "Her grandfather fed it every night with flour and water, murmuring to it in Arabic the way other people talk to a dog. " +
        N(3) + "Nour, who had spent the summer reading about bakeries in big cities, had a list of improvements folded in her apron pocket: a website, oat-milk lattes, a sleek new sign. " +
        N(4) + "She waited until the afternoon lull to show him.</p>" +
        "<p>" + N(5) + "Her grandfather read the list slowly, nodding at each line. " +
        N(6) + "\"Good,\" he said. \"Good. Yes.\" " +
        N(7) + "Then he took down the jar, unscrewed the lid, and held it under her nose. " +
        N(8) + "The smell was sour and alive, like apples left too long in the sun. " +
        N(9) + "\"This came from my mother's kitchen in Zahle,\" he said. \"It crossed an ocean in a coat pocket. Change anything you like. Not this.\"</p>" +
        "<p>" + N(10) + "That fall, the bakery got its website and its new sign, and the lattes sold better than either of them expected. " +
        N(11) + "But on the first cold night of November, when her grandfather's knees kept him home, Nour climbed the stepladder alone. " +
        N(12) + "She fed the starter, screwed the lid back on, and, feeling a little foolish, whispered a few words to it in the Arabic she had almost forgotten. " +
        N(13) + "The jar sat on its shelf as it always had, bubbling quietly, keeping its own slow time.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the story about Nour and the sourdough starter most clearly develop?",
          choices: [
            { letter: "A", text: "Young people rarely understand why old recipes matter." },
            { letter: "B", text: "A business must give up its past in order to succeed." },
            { letter: "C", text: "Family arguments are best settled by the oldest member." },
            { letter: "D", text: "Change and tradition can coexist when people know what to keep." }
          ],
          correct: "D"
        },
        {
          id: "good",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The grandfather's response to Nour's list in sentences 5 and 6 reveals that he —",
          choices: [
            { letter: "A", text: "is open to her ideas for the bakery" },
            { letter: "B", text: "has not actually read what she wrote" },
            { letter: "C", text: "wants her to stop talking so he can work" },
            { letter: "D", text: "is secretly angry about the oat-milk lattes" }
          ],
          correct: "A"
        },
        {
          id: "apples",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 8, comparing the starter's smell to apples left too long in the sun mainly emphasizes that the starter —",
          choices: [
            { letter: "A", text: "has spoiled and should be thrown away" },
            { letter: "B", text: "is a living thing that ripens over time" },
            { letter: "C", text: "was made from fruit instead of flour" },
            { letter: "D", text: "smells sweeter than the bakery's bread" }
          ],
          correct: "B"
        },
        {
          id: "cement",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "In sentence 1, Nour's view that the starter \"looked like wet cement\" creates a tone that is —",
          choices: [
            { letter: "A", text: "frightened" },
            { letter: "B", text: "reverent" },
            { letter: "C", text: "unimpressed" },
            { letter: "D", text: "grief-stricken" }
          ],
          correct: "C"
        },
        {
          id: "slowtime",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 13, the phrase \"keeping its own slow time\" most nearly suggests that the starter —",
          choices: [
            { letter: "A", text: "goes on at its own pace, untouched by the bakery's changes" },
            { letter: "B", text: "has stopped growing because the weather turned cold" },
            { letter: "C", text: "is being used to time the bread in the new ovens" },
            { letter: "D", text: "will soon need to be replaced with a fresh batch" }
          ],
          correct: "A"
        },
        {
          id: "november",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The November scene in sentences 11-13 resolves the story by showing that Nour —",
          choices: [
            { letter: "A", text: "regrets the changes she made to the bakery that fall" },
            { letter: "B", text: "plans to take over the bakery and close it down" },
            { letter: "C", text: "still believes the starter is useless and ugly" },
            { letter: "D", text: "has taken up her grandfather's ritual as her own" }
          ],
          correct: "D"
        }
      ]
    },

    /* 7 · INFORMATIONAL · community gardens */
    {
      id: "g11-ri-c96-shared-ground",
      family: "G11",
      title: "Shared Ground",
      kind: "Informational · 11.RI",
      blurb: "What a community garden is, what it gives a neighborhood, and the hardest part of keeping one alive.",
      level: 1,
      passage:
        "<p>" + N(1) + "A community garden is a piece of land that a group of neighbors farms together. " +
        N(2) + "Some gardens divide the land into small plots, each tended by one household, while others are planted and harvested by everyone as a group. " +
        N(3) + "Most are built on empty lots, school grounds or church property that would otherwise sit unused.</p>" +
        "<p>" + N(4) + "Gardens like these offer more than vegetables. " +
        N(5) + "In neighborhoods where the nearest grocery store is miles away, a garden can provide fresh tomatoes, greens and beans that families might otherwise go without. " +
        N(6) + "Studies of city neighborhoods have also found that blocks with well-kept gardens often report stronger ties between neighbors, because people who share a water tap and a tool shed tend to start talking. " +
        N(7) + "Gardens also soak up rainwater that would otherwise rush into storm drains.</p>" +
        "<p>" + N(8) + "Starting a garden takes planning. " +
        N(9) + "Organizers usually need permission from the landowner, a soil test to check for lead or other harmful materials, and a reliable source of water. " +
        N(10) + "Many gardens build raised beds a foot or two above the ground and fill them with clean soil, which avoids the problem of polluted earth and makes gardening easier for older members.</p>" +
        "<p>" + N(11) + "The hardest part, organizers say, is not the digging. " +
        N(12) + "It is keeping people involved after the first excited spring, when the weeds return and the summer heat sets in. " +
        N(13) + "Gardens that last tend to have regular workdays, shared meals and clear rules about who waters what.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the main idea of the passage about community gardens?",
          choices: [
            { letter: "A", text: "Community gardens grow more food than grocery stores sell." },
            { letter: "B", text: "Gardens benefit neighborhoods but need planning and steady commitment." },
            { letter: "C", text: "Raised beds are the only safe way to garden in a city." },
            { letter: "D", text: "Most community gardens fail after their first spring." }
          ],
          correct: "B"
        },
        {
          id: "raised",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to sentence 10, why do many community gardens use raised beds filled with clean soil?",
          choices: [
            { letter: "A", text: "Raised beds hold more rainwater than flat ground." },
            { letter: "B", text: "Landowners will not allow digging on their property." },
            { letter: "C", text: "They avoid polluted earth and are easier for older members." },
            { letter: "D", text: "They keep neighbors from arguing over plot borders." }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author wrote the passage about community gardens mainly to —",
          choices: [
            { letter: "A", text: "inform readers about how gardens work and what they require" },
            { letter: "B", text: "persuade the city to buy every empty lot for gardens" },
            { letter: "C", text: "tell the story of one family's first garden plot" },
            { letter: "D", text: "warn readers about the dangers of testing soil" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author organizes the passage about community gardens mainly by —",
          choices: [
            { letter: "A", text: "comparing gardens in three different cities" },
            { letter: "B", text: "listing vegetables in the order they are planted" },
            { letter: "C", text: "telling events in one garden from spring to fall" },
            { letter: "D", text: "moving from definition to benefits, setup and challenges" }
          ],
          correct: "D"
        },
        {
          id: "digging",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Sentence 11, which says the hardest part \"is not the digging,\" serves mainly to —",
          choices: [
            { letter: "A", text: "suggest that gardeners should hire workers to dig" },
            { letter: "B", text: "set up a challenge readers might not expect" },
            { letter: "C", text: "repeat the steps listed in sentence 9" },
            { letter: "D", text: "argue that gardens are not worth the effort" }
          ],
          correct: "B"
        },
        {
          id: "tap",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail about sharing \"a water tap and a tool shed\" in sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "show that gardens often run short of supplies" },
            { letter: "B", text: "explain how a garden saves money on water bills" },
            { letter: "C", text: "explain why gardens can strengthen ties between neighbors" },
            { letter: "D", text: "describe the equipment a new garden must buy first" }
          ],
          correct: "C"
        }
      ]
    },

    /* 8 · ARGUMENT · storms and weather */
    {
      id: "g11-ri-c96-sirens",
      family: "G11",
      title: "Sirens Are Not Enough",
      kind: "Argument · 11.RI",
      blurb: "An editorial argues that a town's tornado sirens were never built to reach the people inside its houses.",
      level: 3,
      passage:
        "<p>" + N(1) + "When the tornado sirens in Millbrook sounded last May, most residents did exactly what the sirens were never designed to make them do: they stepped outside to look. " +
        N(2) + "That instinct is understandable, but it reveals a problem the town council can no longer ignore. " +
        N(3) + "Outdoor sirens were built to warn people who are outdoors; they were never meant to wake a family asleep behind closed windows or reach a worker beside a loud machine. " +
        N(4) + "Millbrook's own emergency office estimates that the sirens can be heard indoors in fewer than half of the town's homes.</p>" +
        "<p>" + N(5) + "The council has argued that a text-message alert system, which would cost about $18,000 a year, is a luxury for a town of nine thousand people. " +
        N(6) + "Yet the town spent nearly that amount last year repainting the water tower. " +
        N(7) + "A paint job protects a structure; an alert system protects the people under it.</p>" +
        "<p>" + N(8) + "Critics also worry that residents will start ignoring frequent alerts. " +
        N(9) + "That concern is fair, but it is an argument for designing the system carefully, not for refusing to build it. " +
        N(10) + "Alerts can be limited to warnings for a specific area rather than broad watches for the whole county, so a phone buzzes only when danger is close.</p>" +
        "<p>" + N(11) + "No warning system is perfect. " +
        N(12) + "Sirens will still matter for people at the park or the ball field. " +
        N(13) + "But a town that relies on sirens alone is asking its residents to hear something they were never meant to hear. " +
        N(14) + "The council should fund the alert system before the next storm season begins.</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which sentence best states the central claim of the Millbrook editorial?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which evidence does the writer offer to show that Millbrook's sirens fail to reach many residents at home?",
          choices: [
            { letter: "A", text: "the emergency office's estimate about homes" },
            { letter: "B", text: "the cost of repainting the water tower" },
            { letter: "C", text: "the plan to limit alerts to nearby areas" },
            { letter: "D", text: "the people who gather at the ball field" }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "The writer's attitude toward the council's claim that the alert system is a luxury (sentence 5) is best described as —",
          choices: [
            { letter: "A", text: "grateful" },
            { letter: "B", text: "unconvinced" },
            { letter: "C", text: "indifferent" },
            { letter: "D", text: "confused" }
          ],
          correct: "B"
        },
        {
          id: "develop",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the writer develop the argument in sentences 5-10?",
          choices: [
            { letter: "A", text: "by telling the history of tornadoes in Millbrook" },
            { letter: "B", text: "by quoting council members who support the plan" },
            { letter: "C", text: "by raising two objections and answering each one" },
            { letter: "D", text: "by comparing Millbrook with several larger cities" }
          ],
          correct: "C"
        },
        {
          id: "paint",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.2",
          stem: "In sentence 7, the contrast between protecting a structure and protecting people mainly serves to —",
          choices: [
            { letter: "A", text: "praise the council for keeping the water tower safe" },
            { letter: "B", text: "suggest that the council's spending priorities are backward" },
            { letter: "C", text: "explain how an alert system sends a text message" },
            { letter: "D", text: "argue that the town should never paint the tower again" }
          ],
          correct: "B"
        },
        {
          id: "concede",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "The writer includes sentences 11 and 12, which admit that sirens still matter, mainly to —",
          choices: [
            { letter: "A", text: "abandon the editorial's call for a new system" },
            { letter: "B", text: "prove that sirens are the best warning tool" },
            { letter: "C", text: "change the topic to the town's parks" },
            { letter: "D", text: "concede a limit while keeping the main claim" }
          ],
          correct: "D"
        }
      ]
    },

    /* 9 · DRAMA · storms and weather */
    {
      id: "g11-rl-c96-screen-door",
      family: "G11",
      title: "The Screen Door",
      kind: "Drama · 11.RL",
      blurb: "The sky over the farmhouse turns green, and an eleven-year-old wants one picture before the cellar.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A farmhouse kitchen in late afternoon. Green-gray light fills the window, and a weather radio crackles on the counter. AMARA, sixteen, studies a radar app on her phone. Her brother KOFI, eleven, stands with one hand on the screen door.</em></p>" +
        "<p><strong>KOFI:</strong> " + N(2) + "The clouds are turning, Amara. " +
        N(3) + "Come look, they're spinning like water going down a drain!</p>" +
        "<p><strong>AMARA:</strong> " + N(4) + "Get away from the door. " +
        N(5) + "We're going to the cellar.</p>" +
        "<p><strong>KOFI:</strong> " + N(6) + "You said you wanted to be a storm chaser. " +
        N(7) + "Chasers look.</p>" +
        "<p><strong>AMARA:</strong> " + N(8) + "Chasers look from a car with an escape route and a forecaster on the phone. " +
        N(9) + "We have a screen door.</p>" +
        "<p><em>" + N(10) + "The radio sounds a long, harsh tone. A calm voice reads a tornado warning for their county.</em></p>" +
        "<p><strong>KOFI:</strong> <em>" + N(11) + "(not moving)</em> Just one picture.</p>" +
        "<p><strong>AMARA:</strong> <em>" + N(12) + "(crossing to him and kneeling to his height)</em> Kofi. " +
        N(13) + "Mom and Dad left me in charge. " +
        N(14) + "If something happens to you, I don't get to take it back.</p>" +
        "<p><em>" + N(15) + "KOFI looks at the sky, then at her face. He lets go of the door handle.</em></p>" +
        "<p><strong>KOFI:</strong> " + N(16) + "Can we bring the radio?</p>" +
        "<p><strong>AMARA:</strong> " + N(17) + "We'll bring the radio. " +
        N(18) + "And tomorrow, when it's over, I'll teach you to read the radar, so next time you'll know before the clouds tell you.</p>" +
        "<p><em>" + N(19) + "They hurry down the cellar stairs. The screen door bangs once in the wind, then is still.</em></p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the scene between Amara and Kofi most clearly develop?",
          choices: [
            { letter: "A", text: "Younger children are usually braver than older ones." },
            { letter: "B", text: "Weather radios are more reliable than phone apps." },
            { letter: "C", text: "Truly understanding a danger includes respecting it." },
            { letter: "D", text: "Parents should never leave teenagers in charge." }
          ],
          correct: "C"
        },
        {
          id: "kneel",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "Amara's action in stage direction 12, kneeling to Kofi's height, changes the conflict mainly by —",
          choices: [
            { letter: "A", text: "turning her order into a personal appeal he accepts" },
            { letter: "B", text: "giving Kofi time to take the picture he wanted" },
            { letter: "C", text: "showing that she has given up trying to convince him" },
            { letter: "D", text: "letting her check the radar app without him seeing" }
          ],
          correct: "A"
        },
        {
          id: "chasers",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Amara's reply in sentences 8 and 9 reveals that she —",
          choices: [
            { letter: "A", text: "has given up her dream of chasing storms" },
            { letter: "B", text: "thinks Kofi is too young to understand weather" },
            { letter: "C", text: "is more frightened than her brother realizes" },
            { letter: "D", text: "knows real chasing depends on planning, not just looking" }
          ],
          correct: "D"
        },
        {
          id: "drain",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 3, Kofi's comparison of the clouds to water going down a drain mainly conveys —",
          choices: [
            { letter: "A", text: "his fear that the kitchen will flood" },
            { letter: "B", text: "the storm's rotation and his excitement" },
            { letter: "C", text: "how slowly the storm is moving away" },
            { letter: "D", text: "his boredom with waiting inside the house" }
          ],
          correct: "B"
        },
        {
          id: "bang",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "The stage direction in sentence 19, in which the screen door bangs once and then is still, creates a mood that is —",
          choices: [
            { letter: "A", text: "joyful and celebratory" },
            { letter: "B", text: "silly and lighthearted" },
            { letter: "C", text: "tense but quietly relieved" },
            { letter: "D", text: "bitter and resentful" }
          ],
          correct: "C"
        },
        {
          id: "promise",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does Amara's promise in sentence 18 help resolve the scene?",
          choices: [
            { letter: "A", text: "It ends the argument by forbidding Kofi to watch storms." },
            { letter: "B", text: "It reveals that the warning on the radio was a mistake." },
            { letter: "C", text: "It shows Amara plans to leave Kofi alone tomorrow." },
            { letter: "D", text: "It turns Kofi's curiosity toward safe, useful learning." }
          ],
          correct: "D"
        }
      ]
    },

    /* 10 · LITERARY · storm chasing */
    {
      id: "g11-rl-c96-forty-seconds",
      family: "G11",
      title: "Forty Seconds",
      kind: "Literary · 11.RL",
      blurb: "After three seasons without a tornado, an intern watches one form through the rear window of a retreating truck.",
      level: 3,
      passage:
        "<p>" + N(1) + "For three seasons I had chased storms across the plains without seeing a tornado, and by my fourth I had started to take it personally. " +
        N(2) + "The other interns had photographs pinned above their desks; I had a folder of radar images and a sunburn that never quite faded. " +
        N(3) + "So when the supercell west of Ardmore Flats began to tighten its rotation, and a funnel dipped from the cloud like a question nobody wanted answered, I felt my heart outrun the truck.</p>" +
        "<p>" + N(4) + "Dr. Linnea Brask, who led our team, was watching something else entirely: the road. " +
        N(5) + "Ahead, the pavement turned to red clay, slick from an earlier shower, and the storm's core was drifting south toward it. " +
        N(6) + "\"We're done,\" she said, and turned the truck east.</p>" +
        "<p>" + N(7) + "I said nothing, which for me was a kind of shouting. " +
        N(8) + "Through the rear window I watched the funnel lower, touch a bare field for perhaps forty seconds, and lift away.</p>" +
        "<p>" + N(9) + "That night in the motel, Linnea spread the day's data across the bedspread. " +
        N(10) + "The probes we had dropped an hour before the funnel formed had recorded the exact moment the air near the ground began to spin. " +
        N(11) + "\"Forty seconds of tornado is a picture,\" she said. \"This is an answer.\" " +
        N(12) + "I looked at the jagged lines for a long time. " +
        N(13) + "They were not beautiful, exactly, but they were the first thing I had ever chased that I had actually caught.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about the intern's fourth season of chasing?",
          choices: [
            { letter: "A", text: "The real reward of a pursuit may differ from the one we expected." },
            { letter: "B", text: "Team leaders should always let interns make the final call." },
            { letter: "C", text: "Photographs are the most reliable record of a storm." },
            { letter: "D", text: "Bad luck eventually ends for anyone who keeps trying." }
          ],
          correct: "A"
        },
        {
          id: "turn",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Dr. Brask's decision in sentence 6 to turn the truck east contributes to the plot mainly by —",
          choices: [
            { letter: "A", text: "allowing the team to photograph the tornado up close" },
            { letter: "B", text: "creating the disappointment that the ending reframes" },
            { letter: "C", text: "causing the probes to be lost in the red clay" },
            { letter: "D", text: "showing that the storm has already ended" }
          ],
          correct: "B"
        },
        {
          id: "shouting",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The narrator's remark in sentence 7 that saying nothing was \"a kind of shouting\" reveals that the narrator —",
          choices: [
            { letter: "A", text: "agrees completely with Dr. Brask's choice" },
            { letter: "B", text: "is too frightened by the storm to speak" },
            { letter: "C", text: "is deeply frustrated but holds it back" },
            { letter: "D", text: "has not noticed that the truck turned" }
          ],
          correct: "C"
        },
        {
          id: "question",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.1",
          stem: "The description in sentence 3 of a funnel dipping \"like a question nobody wanted answered\" creates a tone that is —",
          choices: [
            { letter: "A", text: "playful and teasing" },
            { letter: "B", text: "calm and scholarly" },
            { letter: "C", text: "proud and boastful" },
            { letter: "D", text: "ominous and uncertain" }
          ],
          correct: "D"
        },
        {
          id: "personally",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "In sentence 1, the phrase \"take it personally\" suggests that the narrator —",
          choices: [
            { letter: "A", text: "had begun to feel the missing tornado as a personal failure" },
            { letter: "B", text: "blamed the other interns for scaring the storms away" },
            { letter: "C", text: "preferred to chase storms alone rather than with a team" },
            { letter: "D", text: "was planning to quit the research program that year" }
          ],
          correct: "A"
        },
        {
          id: "caught",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Sentence 13, about the jagged lines of data, resolves the story mainly by showing that the narrator —",
          choices: [
            { letter: "A", text: "still wishes the team had chased the funnel" },
            { letter: "B", text: "plans to pin the data above the desk as a trophy" },
            { letter: "C", text: "now sees the data as a genuine achievement" },
            { letter: "D", text: "does not understand what the probes recorded" }
          ],
          correct: "C"
        }
      ]
    },

    /* 11 · FUNCTIONAL TEXT · community gardens */
    {
      id: "g11-ri-c96-plot-rules",
      family: "G11",
      title: "Eastside Commons Plot Guidelines",
      kind: "Functional text · 11.RI",
      blurb: "Fees, spigot hours, the shared herb bed, and what happens to a plot nobody clears by October 31.",
      level: 1,
      passage:
        "<p><strong>Eastside Commons Garden: Plot Holder Guidelines</strong></p>" +
        "<p>" + N(1) + "Welcome to Eastside Commons, where 48 raised-bed plots are available to neighborhood residents each growing season, April 1 through October 31. " +
        N(2) + "Please read these guidelines before signing your plot agreement.</p>" +
        "<p><strong>Getting Started</strong> " + N(3) + "Each household may rent one plot for $20 per season; reduced fees are available to anyone who asks the coordinator. " +
        N(4) + "Plots not planted by May 15 will be offered to the next family on the waiting list.</p>" +
        "<p><strong>Watering and Care</strong> " + N(5) + "Water is available from the two spigots beside the tool shed from 6 a.m. to 9 p.m. " +
        N(6) + "Please coil hoses after use so that no one trips on them. " +
        N(7) + "Keep your plot weeded and your plants inside its borders; vines that spread into a neighbor's bed may be trimmed back.</p>" +
        "<p><strong>Shared Spaces</strong> " + N(8) + "Tools in the shed may be borrowed by any plot holder but must be cleaned and returned the same day. " +
        N(9) + "The herb bed along the fence belongs to everyone, so feel free to pick what you need for dinner. " +
        N(10) + "Every plot holder is asked to give four hours each season to a Saturday workday.</p>" +
        "<p><strong>End of Season</strong> " + N(11) + "Clear all plants and stakes from your plot by October 31. " +
        N(12) + "Plots left uncleared will be cleaned by volunteers, and the household will lose its priority for next year.</p>" +
        "<p>" + N(13) + "Questions? Leave a note in the mailbox on the shed door for our coordinator, Beatriz Ocampo.</p>",
      claims: [
        {
          id: "purpose",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main purpose of the Eastside Commons guidelines?",
          choices: [
            { letter: "A", text: "to persuade residents to start a new garden elsewhere" },
            { letter: "B", text: "to explain the rules and duties of renting a plot" },
            { letter: "C", text: "to describe the history of the Eastside neighborhood" },
            { letter: "D", text: "to teach readers how to grow herbs along a fence" }
          ],
          correct: "B"
        },
        {
          id: "may15",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the Eastside Commons guidelines, what happens to a plot that has not been planted by May 15?",
          choices: [
            { letter: "A", text: "It is cleaned by volunteers at the next workday." },
            { letter: "B", text: "Its household is charged an extra twenty dollars." },
            { letter: "C", text: "It becomes part of the shared herb bed." },
            { letter: "D", text: "It is offered to the next family on the waiting list." }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The Eastside Commons guidelines are written mainly for an audience of —",
          choices: [
            { letter: "A", text: "residents who rent or plan to rent a garden plot" },
            { letter: "B", text: "city officials deciding whether to sell the land" },
            { letter: "C", text: "scientists who study soil in city neighborhoods" },
            { letter: "D", text: "tourists visiting the neighborhood for one day" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold headings in the Eastside Commons guidelines mainly help the reader by —",
          choices: [
            { letter: "A", text: "ranking the rules from most to least important" },
            { letter: "B", text: "showing which rules the coordinator wrote herself" },
            { letter: "C", text: "grouping the rules by topic and time of season" },
            { letter: "D", text: "listing the names of every current plot holder" }
          ],
          correct: "C"
        },
        {
          id: "fees",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The note in sentence 3 that reduced fees are available to anyone who asks serves mainly to —",
          choices: [
            { letter: "A", text: "warn that the price of a plot will rise next year" },
            { letter: "B", text: "assure readers that cost need not keep them out" },
            { letter: "C", text: "explain why only one plot is allowed per household" },
            { letter: "D", text: "suggest that the garden is short of money" }
          ],
          correct: "B"
        },
        {
          id: "consequence",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which sentence in the Eastside Commons guidelines makes clear that skipping the end-of-season cleanup has a consequence?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "D"
        }
      ]
    },

    /* 12 · VOCABULARY · storms and weather */
    {
      id: "g11-rv-c96-honest-odds",
      family: "G11",
      title: "An Honest Estimate",
      kind: "Vocabulary · 11.RV",
      blurb: "Why a dark sky can produce nothing, a clear one can flood a town, and forecasters talk in percentages.",
      level: 3,
      passage:
        "<p>" + N(1) + "Forecasting a thunderstorm is less like reading a schedule than like predicting the mood of a crowded room. " +
        N(2) + "A meteorologist can see that the ingredients are present: heat, moisture and a lifting force that pushes warm air upward. " +
        N(3) + "What she cannot always see is exactly where those ingredients will come together.</p>" +
        "<p>" + N(4) + "On a summer afternoon, a sky can look <strong>ominous</strong>, heavy with dark clouds that seem to threaten a downpour, and then produce nothing at all. " +
        N(5) + "The clouds may simply <strong>dissipate</strong>, breaking apart and fading as drier air mixes in. " +
        N(6) + "Ten miles away, a sky that looked harmless at noon can unload two inches of <strong>precipitation</strong>, the rain, hail or sleet that falls from clouds, in under an hour.</p>" +
        "<p>" + N(7) + "The reason lies in the air itself. " +
        N(8) + "Inside a growing storm, the air is <strong>turbulent</strong>, churning in violent, irregular currents that no instrument can track perfectly. " +
        N(9) + "Small differences in temperature or wind at the start of the day can grow into large differences by evening. " +
        N(10) + "That is why forecasters speak in percentages: a 40 percent chance of rain means that, on days with conditions like these, rain falls somewhere in the area about four times out of ten.</p>" +
        "<p>" + N(11) + "Storms are not truly random, but they are <strong>unpredictable</strong> in their details. " +
        N(12) + "A good forecast, one veteran forecaster likes to say, is not a promise; it is an honest <strong>estimate</strong> of the odds.</p>",
      claims: [
        {
          id: "dissipate",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word dissipate in sentence 5 begins with the prefix dis-, as do disperse and disappear. In dissipate, the prefix dis- helps signal —",
          choices: [
            { letter: "A", text: "a joining together" },
            { letter: "B", text: "a sudden increase" },
            { letter: "C", text: "a scattering apart" },
            { letter: "D", text: "a repeated action" }
          ],
          correct: "C"
        },
        {
          id: "unpredictable",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word unpredictable in sentence 11 combines the prefix un-, the root predict, and the suffix -able. Together, these parts show that the word means —",
          choices: [
            { letter: "A", text: "not able to be foretold" },
            { letter: "B", text: "able to be explained later" },
            { letter: "C", text: "foretold too many times" },
            { letter: "D", text: "never seen before" }
          ],
          correct: "A"
        },
        {
          id: "precipitation",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 6, the words set off by commas after precipitation show that the word refers to —",
          choices: [
            { letter: "A", text: "the speed at which clouds cross the sky" },
            { letter: "B", text: "water in any form falling from clouds" },
            { letter: "C", text: "the warm air that rises before a storm" },
            { letter: "D", text: "the damage left behind by a flood" }
          ],
          correct: "B"
        },
        {
          id: "turbulent",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 8, the phrase \"churning in violent, irregular currents\" shows that turbulent means —",
          choices: [
            { letter: "A", text: "warm and humid" },
            { letter: "B", text: "thin and clear" },
            { letter: "C", text: "slow and steady" },
            { letter: "D", text: "rough and disordered" }
          ],
          correct: "D"
        },
        {
          id: "ominous",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "The author chose ominous rather than dark to describe the afternoon sky in sentence 4. Compared with dark, ominous suggests that the sky —",
          choices: [
            { letter: "A", text: "seems to warn that something bad is coming" },
            { letter: "B", text: "has fewer clouds than usual for summer" },
            { letter: "C", text: "is lit by the setting sun" },
            { letter: "D", text: "looks peaceful and pleasant" }
          ],
          correct: "A"
        },
        {
          id: "estimate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 12, the contrast between a promise and an estimate suggests that estimate most nearly means —",
          choices: [
            { letter: "A", text: "a guarantee made to the public" },
            { letter: "B", text: "a guess made without evidence" },
            { letter: "C", text: "a careful, approximate judgment" },
            { letter: "D", text: "a record of past weather" }
          ],
          correct: "C"
        }
      ]
    },

    /* 13 · INFORMATIONAL · small-town bakery */
    {
      id: "g11-ri-c96-tiny-breaths",
      family: "G11",
      title: "Millions of Tiny Breaths",
      kind: "Informational · 11.RI",
      blurb: "Yeast makes the gas, gluten holds it, and temperature decides how fast a loaf of bread rises.",
      level: 2,
      passage:
        "<p>" + N(1) + "A loaf of bread begins as a dense, sticky lump, and yet a few hours later it can be tall, airy and full of holes. " +
        N(2) + "The change is the work of yeast, a single-celled fungus so small that a teaspoon of it holds billions of cells. " +
        N(3) + "When a baker mixes yeast with flour and water, the yeast feeds on sugars in the flour. " +
        N(4) + "As it feeds, it releases carbon dioxide gas and small amounts of alcohol, a process called fermentation.</p>" +
        "<p>" + N(5) + "Yeast alone, however, cannot make bread rise. " +
        N(6) + "The gas needs something to hold it. " +
        N(7) + "That job belongs to gluten, a network of proteins that forms when flour is mixed with water and kneaded. " +
        N(8) + "Kneading stretches the proteins into long, elastic strands, and those strands trap the gas the way a balloon traps air. " +
        N(9) + "Bread made from flour with little gluten, such as rye, tends to be heavier for exactly this reason.</p>" +
        "<p>" + N(10) + "Temperature controls the pace. " +
        N(11) + "Yeast works fastest in warm dough, around 75 to 80 degrees Fahrenheit, and slows almost to a stop in the refrigerator. " +
        N(12) + "Many bakers take advantage of this by letting dough rise slowly overnight in the cold, since a long fermentation gives the yeast time to produce flavorful compounds that a quick rise cannot.</p>" +
        "<p>" + N(13) + "In the oven, the gas expands one last time before the heat kills the yeast and sets the gluten in place. " +
        N(14) + "What comes out is, in a sense, a snapshot of millions of tiny breaths.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which of the following best summarizes the central idea of the passage about how bread rises?",
          choices: [
            { letter: "A", text: "Rye bread is healthier than bread made with other flours." },
            { letter: "B", text: "Bakers must knead dough for hours to keep yeast alive." },
            { letter: "C", text: "Ovens are the most important tool in any bakery." },
            { letter: "D", text: "Yeast makes gas, gluten traps it, and temperature sets the pace." }
          ],
          correct: "D"
        },
        {
          id: "rye",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to the passage, why does bread made from rye flour tend to be heavier?",
          choices: [
            { letter: "A", text: "It has less gluten to trap the gas." },
            { letter: "B", text: "It is usually baked at a higher heat." },
            { letter: "C", text: "Its yeast produces too much alcohol." },
            { letter: "D", text: "It rises too long in the refrigerator." }
          ],
          correct: "A"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Based on sentences 1 and 14, the author's attitude toward the way bread rises is best described as —",
          choices: [
            { letter: "A", text: "doubtful" },
            { letter: "B", text: "fascinated" },
            { letter: "C", text: "impatient" },
            { letter: "D", text: "disgusted" }
          ],
          correct: "B"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize the explanation in sentences 2-13 of the bread passage?",
          choices: [
            { letter: "A", text: "by comparing the breads of several countries" },
            { letter: "B", text: "by giving a recipe in numbered steps" },
            { letter: "C", text: "by taking up each factor in the rise in turn" },
            { letter: "D", text: "by arguing against a common baking myth" }
          ],
          correct: "C"
        },
        {
          id: "balloon",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In sentence 8, comparing gluten strands to a balloon helps the reader understand that gluten —",
          choices: [
            { letter: "A", text: "can burst if the oven gets too hot" },
            { letter: "B", text: "holds gas inside a stretchy structure" },
            { letter: "C", text: "is added to dough as a separate ingredient" },
            { letter: "D", text: "makes the bread float when it is wet" }
          ],
          correct: "B"
        },
        {
          id: "overnight",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail about bakers letting dough rise overnight in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "warn that cold dough often fails to rise" },
            { letter: "B", text: "explain why bakeries open so early" },
            { letter: "C", text: "suggest that refrigerators harm yeast" },
            { letter: "D", text: "show a practical use of temperature that improves flavor" }
          ],
          correct: "D"
        }
      ]
    },

    /* 14 · POETRY · small-town bakery */
    {
      id: "g11-rl-c96-four-oclock",
      family: "G11",
      title: "Four O'Clock",
      kind: "Poetry · 11.RL",
      blurb: "Before the town has found its shoes, the baker is already white to the wrists.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Before the town has found its shoes,<br>" +
        L(2) + "Mr. Ferreira is already white to the wrists,<br>" +
        L(3) + "folding the dough the way his father folded it,<br>" +
        L(4) + "a turn, a press, a turn again,<br>" +
        L(5) + "as if the motion were a sentence<br>" +
        L(6) + "he has said so often it no longer needs words.<br>" +
        L(7) + "The ovens tick awake behind him.<br>" +
        L(8) + "The street outside is dark and does not thank him.</p>" +
        "<p class=\"poem\">" +
        L(9) + "By seven the bell above the door<br>" +
        L(10) + "will not stop talking: the mail carrier,<br>" +
        L(11) + "the girl with the trumpet case, the man who never smiles<br>" +
        L(12) + "except at the cinnamon twist.<br>" +
        L(13) + "None of them will think of four o'clock.<br>" +
        L(14) + "He does not need them to.<br>" +
        L(15) + "The bread remembers for him, rising.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of \"Four O'Clock\"?",
          choices: [
            { letter: "A", text: "Unnoticed daily work can quietly sustain a community." },
            { letter: "B", text: "Customers should thank the people who serve them." },
            { letter: "C", text: "Children rarely continue the work of their parents." },
            { letter: "D", text: "Small towns are lonelier than large cities." }
          ],
          correct: "A"
        },
        {
          id: "line13",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Line 13, \"None of them will think of four o'clock,\" develops the poem mainly by —",
          choices: [
            { letter: "A", text: "revealing that the bakery opens too late for customers" },
            { letter: "B", text: "explaining why the street outside is still dark" },
            { letter: "C", text: "contrasting the customers' easy morning with his hidden labor" },
            { letter: "D", text: "suggesting that the customers dislike Mr. Ferreira" }
          ],
          correct: "C"
        },
        {
          id: "line14",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Line 14, \"He does not need them to,\" reveals that Mr. Ferreira —",
          choices: [
            { letter: "A", text: "is planning to close the bakery soon" },
            { letter: "B", text: "is content without being recognized" },
            { letter: "C", text: "resents the people who buy his bread" },
            { letter: "D", text: "wishes he had become a mail carrier" }
          ],
          correct: "B"
        },
        {
          id: "sentence",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In lines 5-6, comparing the folding motion to a sentence said so often \"it no longer needs words\" suggests that the work —",
          choices: [
            { letter: "A", text: "is confusing to anyone who watches it" },
            { letter: "B", text: "was taught to him in a language class" },
            { letter: "C", text: "is something he wants to explain to others" },
            { letter: "D", text: "has become deeply familiar, almost automatic" }
          ],
          correct: "D"
        },
        {
          id: "bell",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In lines 9-10, the statement that the bell above the door \"will not stop talking\" most nearly means that —",
          choices: [
            { letter: "A", text: "the bell is broken and rings by itself" },
            { letter: "B", text: "customers come in one after another" },
            { letter: "C", text: "the customers chat too loudly in line" },
            { letter: "D", text: "Mr. Ferreira talks to his customers" }
          ],
          correct: "B"
        },
        {
          id: "stanzas",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the shift from the first stanza to the second stanza of \"Four O'Clock\" shape the poem's meaning?",
          choices: [
            { letter: "A", text: "It moves from a busy shop to an empty one, showing loss." },
            { letter: "B", text: "It moves from the father's life to the son's childhood." },
            { letter: "C", text: "It moves from lonely early work to the busy morning it supports." },
            { letter: "D", text: "It moves from summer to winter, showing passing years." }
          ],
          correct: "C"
        }
      ]
    },

    /* 15 · PAIRED TEXTS · community gardens */
    {
      id: "g11-dsr-c96-linden-lot",
      family: "G11",
      title: "The Lot at Linden and Sixth",
      kind: "Paired texts · 11.DSR",
      blurb: "Meeting minutes record a garden plan and a missing group of neighbors; a high school junior writes back.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From the minutes of the Linden Heights Neighborhood Association, March meeting</strong></p>" +
        "<p>" + N(1) + "Members discussed the future of the vacant city lot at Linden and Sixth, which the city has offered to lease to the association for one dollar a year. " +
        N(2) + "Mr. Adebayo presented a plan for a community garden with twenty raised beds, a rain barrel system and a shaded bench area. " +
        N(3) + "He reported that thirty-one households have signed a list saying they would rent a bed. " +
        N(4) + "Ms. Kowalczyk raised concerns about water costs and asked who would care for the garden in winter. " +
        N(5) + "Mr. Adebayo answered that rain barrels would supply most of the water and that winter work would be minimal. " +
        N(6) + "Several members asked whether the lot could instead serve as a basketball court for neighborhood teenagers. " +
        N(7) + "No teenagers were present at the meeting. " +
        N(8) + "The vote was postponed until April.</p>" +
        "<p><strong>Text 2 — From a letter to the association by a high school junior</strong></p>" +
        "<p>" + N(9) + "I read the March minutes online, and I noticed the line saying that no teenagers were present. " +
        N(10) + "That is true, but the meeting was held at two o'clock on a school day. " +
        N(11) + "I support the garden, and so do most of my friends; what we want is a voice in how the lot is used. " +
        N(12) + "Why not set aside four of the twenty beds for the high school's environmental club? " +
        N(13) + "We could also paint a half-court on the paved strip along the alley, which the garden plan does not use. " +
        N(14) + "A lot this size can hold more than one idea. " +
        N(15) + "Please hold the April meeting in the evening, so that the people you are deciding for can come.</p>",
      claims: [
        {
          id: "central",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is central to both texts about the lot at Linden and Sixth?",
          choices: [
            { letter: "A", text: "how much the city charges to lease empty land" },
            { letter: "B", text: "how rain barrels can lower a garden's water costs" },
            { letter: "C", text: "why the environmental club needs more members" },
            { letter: "D", text: "how the vacant lot should be used, and by whom" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How does the junior's letter differ in purpose from the association's minutes?",
          choices: [
            { letter: "A", text: "The letter argues for inclusion; the minutes record a discussion." },
            { letter: "B", text: "The letter reports a vote; the minutes argue for a garden." },
            { letter: "C", text: "The letter opposes the garden; the minutes support a court." },
            { letter: "D", text: "The letter explains a budget; the minutes describe a school." }
          ],
          correct: "A"
        },
        {
          id: "present",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Both texts mention that no teenagers attended the March meeting (sentence 7). The letter presents this fact as —",
          choices: [
            { letter: "A", text: "proof that teenagers do not care about the lot" },
            { letter: "B", text: "a result of the meeting's time, not lack of interest" },
            { letter: "C", text: "a reason to cancel the April vote entirely" },
            { letter: "D", text: "an error that the minutes should correct" }
          ],
          correct: "B"
        },
        {
          id: "selecttwo",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that respond directly to the basketball court question recorded in sentence 6 of Text 1.",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A Linden Heights member who read both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the garden plan should be dropped in favor of a court" },
            { letter: "B", text: "the city is likely to raise the price of the lease" },
            { letter: "C", text: "an evening meeting and a shared plan could serve more neighbors" },
            { letter: "D", text: "Ms. Kowalczyk's water concerns have been fully settled" }
          ],
          correct: "C"
        },
        {
          id: "postponed",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word postponed in sentence 8 begins with the prefix post-, as do postscript and postgame. The prefix post- signals —",
          choices: [
            { letter: "A", text: "after" },
            { letter: "B", text: "before" },
            { letter: "C", text: "across" },
            { letter: "D", text: "against" }
          ],
          correct: "A"
        }
      ]
    },

    /* 16 · LITERARY · community gardens */
    {
      id: "g11-rl-c96-cilantro",
      family: "G11",
      title: "Twenty Hours",
      kind: "Literary · 11.RL",
      blurb: "Darnell signs up for the garden only to finish his service hours, then pulls up the wrong row.",
      level: 1,
      passage:
        "<p>" + N(1) + "Darnell had signed up for the Brookside Community Garden only because his school required twenty hours of service, and the garden was the closest place to his apartment. " +
        N(2) + "On his first Saturday, an older woman named Mrs. Huong Tran handed him a trowel and pointed at a bed crowded with weeds. " +
        N(3) + "\"Pull the ones without flowers,\" she said. " +
        N(4) + "Then she went back to her own plot without another word.</p>" +
        "<p>" + N(5) + "Darnell worked for an hour, sweating and annoyed, until he realized he had pulled up a whole row of small green shoots. " +
        N(6) + "His stomach dropped. " +
        N(7) + "He carried them over to Mrs. Tran, ready to be scolded. " +
        N(8) + "She looked at the shoots, then at him, and laughed. " +
        N(9) + "\"Cilantro,\" she said. \"No flowers yet. My mistake. I should have told you.\" " +
        N(10) + "She showed him how to replant them, pressing the soil gently around each stem like tucking a child into bed.</p>" +
        "<p>" + N(11) + "The next week, Darnell came back early. " +
        N(12) + "He asked which plants were which before he touched anything, and Mrs. Tran answered every question, naming each herb in English and then in Vietnamese. " +
        N(13) + "By August, his twenty hours were long finished. " +
        N(14) + "He kept coming anyway, and when the cilantro finally bloomed, small and white as spilled salt, he was the one who noticed first.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Darnell and Mrs. Tran?",
          choices: [
            { letter: "A", text: "Service requirements are a waste of students' time." },
            { letter: "B", text: "Kindness after a mistake can turn duty into real interest." },
            { letter: "C", text: "Older people are usually impatient with beginners." },
            { letter: "D", text: "Gardening is easiest for people who grew up on farms." }
          ],
          correct: "B"
        },
        {
          id: "laugh",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Mrs. Tran's reaction in sentences 8 and 9 is important to the plot because it —",
          choices: [
            { letter: "A", text: "turns Darnell's fear into the start of a friendship" },
            { letter: "B", text: "causes Darnell to quit the garden that afternoon" },
            { letter: "C", text: "reveals that the cilantro had already died" },
            { letter: "D", text: "explains why the garden needs more volunteers" }
          ],
          correct: "A"
        },
        {
          id: "asks",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Darnell's behavior in sentence 12 shows that he has become —",
          choices: [
            { letter: "A", text: "bored and careless" },
            { letter: "B", text: "nervous and silent" },
            { letter: "C", text: "proud and bossy" },
            { letter: "D", text: "careful and curious" }
          ],
          correct: "D"
        },
        {
          id: "tucking",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 10, comparing the replanting to tucking a child into bed suggests that Mrs. Tran handles the shoots —",
          choices: [
            { letter: "A", text: "quickly and carelessly" },
            { letter: "B", text: "with impatience and worry" },
            { letter: "C", text: "gently and with care" },
            { letter: "D", text: "only because she must" }
          ],
          correct: "C"
        },
        {
          id: "stomach",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 6, the short statement \"His stomach dropped\" conveys Darnell's —",
          choices: [
            { letter: "A", text: "hunger after an hour of work" },
            { letter: "B", text: "sudden sense of dread" },
            { letter: "C", text: "relief at finishing the job" },
            { letter: "D", text: "anger at Mrs. Tran's directions" }
          ],
          correct: "B"
        },
        {
          id: "anyway",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "In sentence 14, the word anyway suggests that Darnell keeps coming to the garden —",
          choices: [
            { letter: "A", text: "because his school added more required hours" },
            { letter: "B", text: "only on days when Mrs. Tran asks him to" },
            { letter: "C", text: "to make up for the cilantro he pulled" },
            { letter: "D", text: "even though he is no longer required to" }
          ],
          correct: "D"
        }
      ]
    },

    /* 17 · INFORMATIONAL · robotics club */
    {
      id: "g11-ri-c96-why-robots-wobble",
      family: "G11",
      title: "Why Robots Wobble",
      kind: "Informational · 11.RI",
      blurb: "A robot told to drive straight rarely does. Feedback control fixes that, and creates a new problem of its own.",
      level: 3,
      passage:
        "<p>" + N(1) + "A beginning robotics team usually discovers the same frustrating fact during its first week: telling a motor to run is not the same as making a robot go where you want. " +
        N(2) + "Program a robot to drive forward for three seconds, and it may drift left on one run and right on the next. " +
        N(3) + "Batteries lose voltage, wheels slip on dusty floors, and two motors that look identical rarely spin at precisely the same speed.</p>" +
        "<p>" + N(4) + "Experienced teams solve this problem with feedback control. " +
        N(5) + "Instead of issuing a command and hoping, the robot measures what is actually happening and corrects itself many times each second. " +
        N(6) + "A sensor on each wheel counts rotations; if the left wheel falls behind, the program sends that motor a little more power. " +
        N(7) + "The robot is, in effect, constantly asking how far it is from its goal and adjusting according to the answer.</p>" +
        "<p>" + N(8) + "Feedback brings its own difficulty, though. " +
        N(9) + "If a robot corrects too forcefully, it overshoots its target, then overcorrects in the other direction, and begins to wobble back and forth like a nervous tightrope walker. " +
        N(10) + "If it corrects too gently, it reacts so slowly that it never quite arrives. " +
        N(11) + "Tuning, the process of finding the right strength of correction, can take a team many evenings of trial, measurement and adjustment.</p>" +
        "<p>" + N(12) + "The lesson reaches beyond robots. " +
        N(13) + "Thermostats, cruise control and even the human body, which holds its temperature within a narrow range, all rely on the same principle: measure, compare, correct. " +
        N(14) + "Students who learn to tune a wobbling robot are learning one of the quiet ideas that keeps modern machines working.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of the passage about feedback control?",
          choices: [
            { letter: "A", text: "Beginning teams should buy better batteries and motors." },
            { letter: "B", text: "Feedback corrects a robot's errors but must be tuned, and the idea is widespread." },
            { letter: "C", text: "Robots that wobble are usually built from cheap parts." },
            { letter: "D", text: "Thermostats were the first machines to use sensors." }
          ],
          correct: "B"
        },
        {
          id: "tuning",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "Based on sentences 9 and 10, the reader can conclude that well-tuned feedback —",
          choices: [
            { letter: "A", text: "corrects as forcefully as the motors allow" },
            { letter: "B", text: "removes the need for wheel sensors" },
            { letter: "C", text: "balances between too strong and too weak a correction" },
            { letter: "D", text: "works only on robots that drive in straight lines" }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author's main purpose in the passage about wobbling robots is to —",
          choices: [
            { letter: "A", text: "explain how robots correct errors and why the idea matters widely" },
            { letter: "B", text: "persuade schools to give robotics clubs more money" },
            { letter: "C", text: "describe one team's victory at a regional competition" },
            { letter: "D", text: "warn readers that robots are becoming dangerous" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "Which description best matches the structure of the passage about feedback control?",
          choices: [
            { letter: "A", text: "a list of robot parts in order of their cost" },
            { letter: "B", text: "a story of one robot told from build to final match" },
            { letter: "C", text: "a comparison of two teams that chose different designs" },
            { letter: "D", text: "a problem, a solution, the solution's new problem, then wider uses" }
          ],
          correct: "D"
        },
        {
          id: "tightrope",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In sentence 9, comparing an overcorrecting robot to a nervous tightrope walker helps the reader understand that the robot —",
          choices: [
            { letter: "A", text: "is afraid of falling off the edge of the field" },
            { letter: "B", text: "swings back and forth as it tries to stay on course" },
            { letter: "C", text: "moves slowly because it is carrying a heavy load" },
            { letter: "D", text: "has been programmed to perform tricks for a crowd" }
          ],
          correct: "B"
        },
        {
          id: "examples",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the examples of thermostats, cruise control and the human body in sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "show that feedback is a principle found far beyond robots" },
            { letter: "B", text: "argue that robots will soon replace thermostats" },
            { letter: "C", text: "explain why the human body is hard to measure" },
            { letter: "D", text: "list careers that robotics students might choose" }
          ],
          correct: "A"
        }
      ]
    },

    /* 18 · VOCABULARY · robotics club */
    {
      id: "g11-rv-c96-gearheads",
      family: "G11",
      title: "The Westbrook Gearheads",
      kind: "Vocabulary · 11.RV",
      blurb: "A plywood box on wheels, a shattered gear, three hardware stores, and a judge who noticed.",
      level: 2,
      passage:
        "<p>" + N(1) + "The first robot the Westbrook Gearheads ever built was <strong>rudimentary</strong>: a plywood box on four wheels that could drive forward, stop, and do nothing else. " +
        N(2) + "Still, it was a start. " +
        N(3) + "Over the fall, the team turned that box into a <strong>prototype</strong>, an early test model meant to reveal problems before the final version was built. " +
        N(4) + "Every flaw the prototype exposed went on a whiteboard, and every Friday the team crossed a few off.</p>" +
        "<p>" + N(5) + "The club's captain, Soo-ah Park, insisted that the eight members <strong>collaborate</strong> rather than split into separate groups. " +
        N(6) + "Programmers sat beside builders, and builders sat beside the two students designing the robot's arm, so that a change in one part never surprised the people working on another. " +
        N(7) + "Before each test, someone had to <strong>calibrate</strong> the distance sensor, adjusting it against a tape measure until its readings matched the true distance to the wall.</p>" +
        "<p>" + N(8) + "In January, a gear inside the arm shattered two days before a scrimmage. " +
        N(9) + "Most of the team wanted to withdraw. " +
        N(10) + "Soo-ah, however, was <strong>tenacious</strong>; she spent the evening calling three hardware stores until one had a replacement, and the arm worked by morning. " +
        N(11) + "The team lost the scrimmage anyway. " +
        N(12) + "Afterward, a judge told them their robot was the most <strong>ingenious</strong> design she had seen from a first-year team, full of clever solutions to problems she had not expected beginners to notice.</p>",
      claims: [
        {
          id: "prototype",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word prototype in sentence 3 contains the Greek root proto-, meaning first, as in protagonist. This root helps show that a prototype is —",
          choices: [
            { letter: "A", text: "a robot that wins first place" },
            { letter: "B", text: "the last version of a design" },
            { letter: "C", text: "a drawing made by the team captain" },
            { letter: "D", text: "an early model built before the final one" }
          ],
          correct: "D"
        },
        {
          id: "collaborate",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word collaborate in sentence 5 begins with col-, a form of the prefix co- meaning together, as in coexist and cooperate. This prefix suggests that collaborate means —",
          choices: [
            { letter: "A", text: "compete against one another" },
            { letter: "B", text: "work jointly with others" },
            { letter: "C", text: "take turns working alone" },
            { letter: "D", text: "follow a leader's orders" }
          ],
          correct: "B"
        },
        {
          id: "calibrate",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the phrase after the comma shows that calibrate means —",
          choices: [
            { letter: "A", text: "adjust an instrument so it reads accurately" },
            { letter: "B", text: "replace a broken part with a new one" },
            { letter: "C", text: "paint a sensor so it is easy to see" },
            { letter: "D", text: "remove a sensor before a match" }
          ],
          correct: "A"
        },
        {
          id: "rudimentary",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Sentence 1's description of a box that could \"drive forward, stop, and do nothing else\" shows that rudimentary means —",
          choices: [
            { letter: "A", text: "dangerous" },
            { letter: "B", text: "expensive" },
            { letter: "C", text: "basic" },
            { letter: "D", text: "hidden" }
          ],
          correct: "C"
        },
        {
          id: "tenacious",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "The author describes Soo-ah as tenacious in sentence 10. Compared with stubborn, tenacious suggests a quality that is —",
          choices: [
            { letter: "A", text: "foolish and unreasonable" },
            { letter: "B", text: "shy and hesitant" },
            { letter: "C", text: "admirably persistent" },
            { letter: "D", text: "rude and demanding" }
          ],
          correct: "C"
        },
        {
          id: "ingenious",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 12, the word ingenious, used by the judge about the Gearheads' robot, most nearly means —",
          choices: [
            { letter: "A", text: "easily broken" },
            { letter: "B", text: "old-fashioned" },
            { letter: "C", text: "noisy and slow" },
            { letter: "D", text: "cleverly inventive" }
          ],
          correct: "D"
        }
      ]
    },

    /* 19 · PAIRED TEXTS · small-town bakery */
    {
      id: "g11-dsr-c96-larkin-street",
      family: "G11",
      title: "Last Loaves on Larkin Street",
      kind: "Paired texts · 11.DSR",
      blurb: "A newspaper reports a sixty-year-old bakery's closing; the owner tapes her own goodbye to the window.",
      level: 1,
      passage:
        "<p><strong>Text 1 — From the Crane Hollow Courier, \"Corner Bakery to Close After Sixty Years\"</strong></p>" +
        "<p>" + N(1) + "The Larkin Street Bakery, a fixture of downtown Crane Hollow since 1966, will close its doors on June 30. " +
        N(2) + "Owner Gwen Mbeki, 71, said she has been unable to find a buyer willing to keep the business running. " +
        N(3) + "Rising prices for flour, butter and electricity have also squeezed the shop's thin profits, she said. " +
        N(4) + "The bakery employs four people, including two high school students who work weekend shifts. " +
        N(5) + "Town officials said they hope a new business will move into the building, which sits across from the courthouse. " +
        N(6) + "Longtime customers have already begun lining up early to buy the shop's famous rye loaves before they disappear.</p>" +
        "<p><strong>Text 2 — From a note taped to the bakery's front window</strong></p>" +
        "<p>" + N(7) + "Dear neighbors, after fifty-one years behind this counter, I am hanging up my apron. " +
        N(8) + "I won't pretend it is easy. " +
        N(9) + "I have watched your children grow from kids pointing at the cookie case into adults ordering birthday cakes for their own kids. " +
        N(10) + "The ovens are old and so am I, and no one has stepped forward to take them on. " +
        N(11) + "To Rafael and Jenna, my weekend crew: you are the best bakers I ever trained, and I hope you open a shop of your own someday. " +
        N(12) + "Thank you for every early morning you shared with us. " +
        N(13) + "And don't worry about the rye. The recipe is going home with Jenna, so ask her nicely.</p>",
      claims: [
        {
          id: "bothfact",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which fact about the Larkin Street Bakery appears in both texts?",
          choices: [
            { letter: "A", text: "The bakery sits across from the courthouse." },
            { letter: "B", text: "Flour and butter prices have risen sharply." },
            { letter: "C", text: "No one has come forward to keep the bakery going." },
            { letter: "D", text: "The bakery will close its doors on June 30." }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How does the purpose of Gwen Mbeki's window note differ from the purpose of the Courier article?",
          choices: [
            { letter: "A", text: "The note asks for a buyer; the article thanks customers." },
            { letter: "B", text: "The note says a personal goodbye; the article reports the news." },
            { letter: "C", text: "The note explains prices; the article describes recipes." },
            { letter: "D", text: "The note announces a sale; the article argues against closing." }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the Courier article, the tone of the window note is more —",
          choices: [
            { letter: "A", text: "warm and personal" },
            { letter: "B", text: "angry and blaming" },
            { letter: "C", text: "formal and factual" },
            { letter: "D", text: "anxious and fearful" }
          ],
          correct: "A"
        },
        {
          id: "selecttwo",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Select TWO sentences from Text 2 that add personal detail about the weekend workers mentioned in sentence 4 of Text 1.",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "fixture",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 1, the words \"since 1966\" help show that a fixture is something that —",
          choices: [
            { letter: "A", text: "has been repaired many times" },
            { letter: "B", text: "is about to be sold to a buyer" },
            { letter: "C", text: "was built by the town government" },
            { letter: "D", text: "has long been a lasting part of a place" }
          ],
          correct: "D"
        },
        {
          id: "squeezed",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the word squeezed, used to describe the bakery's profits, most nearly means —",
          choices: [
            { letter: "A", text: "shrunk under pressure" },
            { letter: "B", text: "hidden from view" },
            { letter: "C", text: "shared among workers" },
            { letter: "D", text: "counted by hand" }
          ],
          correct: "A"
        }
      ]
    },

    /* 20 · LITERARY · robotics club */
    {
      id: "g11-rl-c96-power-connector",
      family: "G11",
      title: "Item One",
      kind: "Literary · 11.RL",
      blurb: "The robot dies in the middle of a semifinal, and its driver writes a checklist on a strip of tape.",
      level: 2,
      passage:
        "<p>" + N(1) + "Forty seconds into the semifinal, the Ironwood robot stopped in the middle of the field, its lights still glowing but its wheels perfectly still. " +
        N(2) + "Jun Takahashi, at the controls, pushed the joystick forward again and again, as though force could reach through the radio signal. " +
        N(3) + "Nothing. " +
        N(4) + "The match ended with Ironwood losing by sixty points, and the crowd's groan rolled down from the bleachers like distant thunder.</p>" +
        "<p>" + N(5) + "In the pit, the team found the problem in minutes: a loose wire on the main power connector, shaken free by a hard collision. " +
        N(6) + "Jun had been supposed to check that connector before the match. " +
        N(7) + "He had checked the arm, the sensors and the battery, but the connector had looked fine, and he had been in a hurry.</p>" +
        "<p>" + N(8) + "Nobody blamed him out loud. " +
        N(9) + "That was almost worse. " +
        N(10) + "While the others packed the toolboxes, Jun took a roll of electrical tape and a marker, wrote a twelve-item checklist on a long strip of tape, and stuck it to the robot's frame where no driver could miss it. " +
        N(11) + "Item one, in capital letters, read POWER CONNECTOR: PULL IT.</p>" +
        "<p>" + N(12) + "Two months later, at the state qualifier, a freshman driver named Ama Owusu stood beside the robot before her first match, tracing the tape with her finger. " +
        N(13) + "At item one she tugged the connector, frowned, and called for a screwdriver.</p>",
      claims: [
        {
          id: "checked",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The details in sentences 6 and 7 about what Jun did and did not check contribute to the plot mainly by —",
          choices: [
            { letter: "A", text: "showing that the battery caused the robot to stop" },
            { letter: "B", text: "revealing that his rushed mistake caused the failure" },
            { letter: "C", text: "proving that another team damaged the robot" },
            { letter: "D", text: "explaining why the team won the next match" }
          ],
          correct: "B"
        },
        {
          id: "worse",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Sentences 8 and 9, \"Nobody blamed him out loud. That was almost worse,\" reveal that Jun —",
          choices: [
            { letter: "A", text: "is relieved that no one noticed his mistake" },
            { letter: "B", text: "believes his teammates are secretly pleased" },
            { letter: "C", text: "feels his guilt more sharply because no one scolds him" },
            { letter: "D", text: "plans to blame the loss on the freshman driver" }
          ],
          correct: "C"
        },
        {
          id: "thunder",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 4, comparing the crowd's groan to distant thunder mainly emphasizes —",
          choices: [
            { letter: "A", text: "the heavy, rolling sound of the crowd's disappointment" },
            { letter: "B", text: "a storm that is about to stop the competition" },
            { letter: "C", text: "the crowd's excitement about the next match" },
            { letter: "D", text: "how far away the bleachers are from the field" }
          ],
          correct: "A"
        },
        {
          id: "force",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "In sentence 2, the phrase \"as though force could reach through the radio signal\" suggests that Jun is —",
          choices: [
            { letter: "A", text: "calmly testing a new control setting" },
            { letter: "B", text: "showing off for the crowd in the bleachers" },
            { letter: "C", text: "trying to break the joystick on purpose" },
            { letter: "D", text: "desperate and unwilling to accept the failure" }
          ],
          correct: "D"
        },
        {
          id: "pullit",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 11, the words \"PULL IT\" suggest that the checklist requires drivers to —",
          choices: [
            { letter: "A", text: "remove the connector before every match" },
            { letter: "B", text: "physically test the connector, not just look at it" },
            { letter: "C", text: "pull the robot off the field if it stops" },
            { letter: "D", text: "ask a coach to inspect the connector for them" }
          ],
          correct: "B"
        },
        {
          id: "ama",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The final paragraph, set two months later with Ama Owusu, resolves the story mainly by showing that —",
          choices: [
            { letter: "A", text: "Ama is a more skilled driver than Jun ever was" },
            { letter: "B", text: "the team has decided to replace its old robot" },
            { letter: "C", text: "Jun's checklist catches the same problem for a new driver" },
            { letter: "D", text: "the state qualifier uses different rules than the semifinal" }
          ],
          correct: "C"
        }
      ]
    },

    /* 21 · INFORMATIONAL · storms and weather */
    {
      id: "g11-ri-c96-counting-thunder",
      family: "G11",
      title: "Counting the Thunder",
      kind: "Informational · 11.RI",
      blurb: "How a storm charges itself, why thunder arrives late, and what that delay can tell you.",
      level: 1,
      passage:
        "<p>" + N(1) + "Lightning is a giant spark of electricity that jumps between a cloud and the ground or between two parts of a cloud. " +
        N(2) + "Inside a thunderstorm, tiny ice crystals and soft hail called graupel collide as strong winds carry them up and down. " +
        N(3) + "These collisions strip electric charges from the particles, and over time the top of the cloud becomes positively charged while the bottom becomes negatively charged. " +
        N(4) + "When the difference grows large enough, the air can no longer keep the charges apart, and a bolt of lightning flashes.</p>" +
        "<p>" + N(5) + "Thunder is the sound lightning makes. " +
        N(6) + "A bolt heats the air around it to about 50,000 degrees Fahrenheit in a fraction of a second, which is hotter than the surface of the sun. " +
        N(7) + "The air expands so quickly that it creates a booming shock wave. " +
        N(8) + "Because light travels much faster than sound, people see the flash before they hear the boom.</p>" +
        "<p>" + N(9) + "That delay can be useful. " +
        N(10) + "Sound travels about one mile in five seconds, so counting the seconds between a flash and its thunder and dividing by five gives a rough distance to the strike. " +
        N(11) + "A count of fifteen, for example, means the lightning was about three miles away.</p>" +
        "<p>" + N(12) + "Weather safety experts offer a simple rule: when thunder roars, go indoors. " +
        N(13) + "Lightning can strike ten miles or more from the storm that produces it, so if you can hear thunder at all, you are close enough to be in danger. " +
        N(14) + "Waiting thirty minutes after the last thunder before going back outside is the safest choice.</p>",
      claims: [
        {
          id: "main",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "What is the main idea of the passage about lightning and thunder?",
          choices: [
            { letter: "A", text: "Thunder is more dangerous than lightning during a storm." },
            { letter: "B", text: "Graupel is the most common kind of hail in storms." },
            { letter: "C", text: "Lightning strikes only within three miles of a storm." },
            { letter: "D", text: "Knowing how lightning and thunder form can help people stay safe." }
          ],
          correct: "D"
        },
        {
          id: "tencount",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to sentence 10, a person who counts ten seconds between a flash and its thunder can estimate that the lightning was about —",
          choices: [
            { letter: "A", text: "half a mile away" },
            { letter: "B", text: "two miles away" },
            { letter: "C", text: "five miles away" },
            { letter: "D", text: "ten miles away" }
          ],
          correct: "B"
        },
        {
          id: "safety",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author's purpose in sentences 12-14 of the lightning passage is mainly to —",
          choices: [
            { letter: "A", text: "advise readers on how to stay safe" },
            { letter: "B", text: "describe how experts measure thunder" },
            { letter: "C", text: "explain how graupel forms in clouds" },
            { letter: "D", text: "entertain readers with a storm story" }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize the passage about lightning and thunder?",
          choices: [
            { letter: "A", text: "by telling about one storm from beginning to end" },
            { letter: "B", text: "by comparing storms in summer and in winter" },
            { letter: "C", text: "by moving from how lightning forms to thunder, distance and safety" },
            { letter: "D", text: "by answering a list of questions from readers" }
          ],
          correct: "C"
        },
        {
          id: "sun",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "In sentence 6, comparing the heated air to the surface of the sun helps the reader understand —",
          choices: [
            { letter: "A", text: "why lightning is brighter during the day" },
            { letter: "B", text: "how extremely hot a lightning bolt is" },
            { letter: "C", text: "that lightning comes from the sun" },
            { letter: "D", text: "how long a bolt of lightning lasts" }
          ],
          correct: "B"
        },
        {
          id: "tenmiles",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail in sentence 13 that lightning can strike ten miles from its storm mainly to —",
          choices: [
            { letter: "A", text: "explain why hearing any thunder means you are in danger" },
            { letter: "B", text: "show that most storms are larger than they appear" },
            { letter: "C", text: "suggest that counting seconds is not useful" },
            { letter: "D", text: "describe how thunder travels across long distances" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
