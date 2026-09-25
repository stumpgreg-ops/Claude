/* SOL Labyrinth — v7 content: Grade 10 informational reading (10.RI).
 * Eight original Virginia EOC-style packs: four informational articles, two
 * functional texts (a job posting and a club constitution excerpt) and two
 * argument pieces. No VDOE / copyrighted text. Loaded after content.js;
 * pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── Informational · level 1 ───────────── */
    {
      id: "g10-ri-weatherstation",
      family: "G10",
      title: "Roof Station Nine",
      kind: "Informational · 10.RI",
      blurb: "A school weather station and the students who keep it honest.",
      level: 1,
      passage:
        "<p>" + N(1) + "On the flat roof above the science wing sits a white box the size of a mailbox, and it has not missed an hour of work since October. " +
        N(2) + "The box is a weather station, and it belongs to the tenth-grade earth science classes at Millbrook High. " +
        N(3) + "Inside are a thermometer, a humidity sensor, and a barometer that measures air pressure; outside, a set of spinning cups counts the wind, and a small funnel collects rain. " +
        N(4) + "Every ten minutes the station sends its readings over the school's wireless network to a laptop in Room 204. " +
        N(5) + "From there the numbers travel to a citizen-science network that pools data from more than four hundred school stations across the state. " +
        N(6) + "Students rotate through the job of station keeper, which means clearing leaves from the rain funnel, replacing the batteries each semester, and comparing the readings with the official airport station twelve miles away. " +
        N(7) + "The comparison matters because a roof is not a field: dark tar absorbs heat, so the station usually reads two or three degrees warmer than the airport on sunny afternoons. " +
        N(8) + "Rather than hide that difference, the class records it and explains it in a note attached to the data. " +
        N(9) + "In March, a keeper noticed that the barometer had dropped sharply overnight and warned the class that a storm was likely before the morning news said so. " +
        N(10) + "The teacher, Ms. Okafor, says the goal is not to replace the weather service. " +
        N(11) + "\"The goal,\" she says, \"is for students to know what a number means before they trust it.\"" +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the passage?",
          choices: [
            { letter: "A", text: "A school weather station gives students real data and teaches them to judge what numbers mean." },
            { letter: "B", text: "The official airport station is more reliable than any weather station built on a school roof." },
            { letter: "C", text: "Dark roofing materials make rooftop temperature readings warmer than readings in open fields." },
            { letter: "D", text: "Citizen-science networks depend on schools to replace sensor batteries every semester." }
          ],
          correct: "A"
        },
        {
          id: "detail",
          sol: "10.RI.1.B",
          stem: "Which sentence explains why the roof readings differ from the airport readings?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "example",
          sol: "10.RI.1.C",
          stem: "The author includes the story in sentence 9 mainly to —",
          choices: [
            { letter: "A", text: "show that the forecast on the morning news is often wrong" },
            { letter: "B", text: "give an example of a student using the data to make a prediction" },
            { letter: "C", text: "explain how a barometer measures changes in air pressure" },
            { letter: "D", text: "prove that the station needs new batteries every March" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "Sentences 3 through 5 are organized mainly to —",
          choices: [
            { letter: "A", text: "compare the school station with the airport station" },
            { letter: "B", text: "list the problems that leaves cause in the rain funnel" },
            { letter: "C", text: "explain why Ms. Okafor started the weather program" },
            { letter: "D", text: "trace a reading from the sensors to the statewide network" }
          ],
          correct: "D"
        },
        {
          id: "wordmean",
          sol: "10.RV.1.C",
          stem: "In sentence 5, the word pools most nearly means —",
          choices: [
            { letter: "A", text: "drains away" },
            { letter: "B", text: "gathers together" },
            { letter: "C", text: "divides evenly" },
            { letter: "D", text: "measures carefully" }
          ],
          correct: "B"
        },
        {
          id: "quote",
          sol: "10.RI.2.B",
          stem: "The quotation in sentence 11 mainly emphasizes that —",
          choices: [
            { letter: "A", text: "students should trust the weather service more than their own data" },
            { letter: "B", text: "the class hopes to make a better forecast than the airport does" },
            { letter: "C", text: "a number is useful only after a person understands where it came from" },
            { letter: "D", text: "the weather service plans to replace school stations with its own" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-turtlecrossing",
      family: "G10",
      title: "Turtle Crossing",
      kind: "Informational · 10.RI",
      blurb: "A student count changes a road, and a town, for the turtles' sake.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every June, painted turtles leave Harlow Pond and cross Mill Road to lay their eggs in the sandy field on the other side. " +
        N(2) + "For years, drivers on Mill Road did not know this, and the environmental club at Harlow High kept finding the results on the shoulder. " +
        N(3) + "In the spring of last year, club members decided to count instead of complain. " +
        N(4) + "Working in pairs before school, they walked a half-mile stretch of the road each morning for six weeks and recorded every turtle they saw, alive or not. " +
        N(5) + "The total was 143 turtles, and 41 of them had not made it across. " +
        N(6) + "The students brought their tally, along with a map showing where most crossings happened, to a town council meeting in July. " +
        N(7) + "The council agreed to three changes. " +
        N(8) + "First, two yellow warning signs now stand at each end of the stretch from May through July. " +
        N(9) + "Second, the speed limit on that section drops from 40 to 25 miles per hour during the same months. " +
        N(10) + "Third, a low mesh fence guides turtles toward a concrete culvert that already runs under the road, so many of them never touch the pavement at all. " +
        N(11) + "This June, the club repeated its count. " +
        N(12) + "The total was almost the same, 138 turtles, but only 9 were found on the road. " +
        N(13) + "Club president Dara Whitfield says the fence deserves most of the credit. " +
        N(14) + "\"The signs help,\" she says, \"but a turtle cannot read a sign, and a fence does not need to be noticed to work.\"" +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which of these best summarizes the passage?",
          choices: [
            { letter: "A", text: "Painted turtles cross Mill Road every June to reach a sandy nesting field across from the pond." },
            { letter: "B", text: "Student data persuaded a town to make changes that sharply cut turtle deaths on a road." },
            { letter: "C", text: "A town council voted to lower the speed limit on Mill Road during the summer months." },
            { letter: "D", text: "Turtles cannot read signs, so warning signs alone do little to keep them off the road." }
          ],
          correct: "B"
        },
        {
          id: "numbers",
          sol: "10.RI.1.B",
          stem: "Which pair of numbers from the passage best shows that the changes worked?",
          choices: [
            { letter: "A", text: "143 and 138" },
            { letter: "B", text: "40 and 25" },
            { letter: "C", text: "143 and 41" },
            { letter: "D", text: "41 and 9" }
          ],
          correct: "D"
        },
        {
          id: "quote",
          sol: "10.RI.1.C",
          stem: "The author includes the quotation in sentence 14 mainly to —",
          choices: [
            { letter: "A", text: "explain why the fence works even when drivers ignore the signs" },
            { letter: "B", text: "suggest that the signs should be removed to save the town money" },
            { letter: "C", text: "show that Dara disagrees with the council's other two changes" },
            { letter: "D", text: "argue that the turtles should be moved to a safer pond" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "How are sentences 8 through 10 organized?",
          choices: [
            { letter: "A", text: "in the order the club members discovered each problem" },
            { letter: "B", text: "from the least expensive change to the most expensive" },
            { letter: "C", text: "as a numbered list of the changes the council approved" },
            { letter: "D", text: "as a comparison between the old road and the new road" }
          ],
          correct: "C"
        },
        {
          id: "wordmean",
          sol: "10.RV.1.C",
          stem: "In sentence 6, the word tally most nearly means —",
          choices: [
            { letter: "A", text: "request" },
            { letter: "B", text: "count" },
            { letter: "C", text: "photograph" },
            { letter: "D", text: "complaint" }
          ],
          correct: "B"
        },
        {
          id: "phrase",
          sol: "10.RI.2.B",
          stem: "In sentence 3, the phrase count instead of complain mainly suggests that the club —",
          choices: [
            { letter: "A", text: "had grown tired of attending town council meetings" },
            { letter: "B", text: "believed that drivers would never change their habits" },
            { letter: "C", text: "planned to stop paying attention to the turtles altogether" },
            { letter: "D", text: "wanted evidence rather than opinions to bring to the town" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────── Functional text · level 1 ───────────── */
    {
      id: "g10-ri-poolattendant",
      family: "G10",
      title: "Pool Deck Attendant Wanted",
      kind: "Functional text · 10.RI",
      blurb: "A summer job posting from the town recreation office.",
      level: 1,
      passage:
        "<p><strong>SEASONAL POOL DECK ATTENDANT — Cedar Park Community Pool</strong></p>" +
        "<p>" + N(1) + "<strong>Position.</strong> Cedar Park is hiring four deck attendants for the summer season, June 8 through August 23. " +
        N(2) + "Attendants are not lifeguards; they do not enter the water on duty and are not responsible for rescues. " +
        N(3) + "<strong>Duties.</strong> Attendants check wristbands at the gate, keep the deck clear of glass and food, and log the chemical readings the pool manager takes each hour. " +
        N(4) + "During the last thirty minutes of each shift, attendants stack chairs, hose the deck, and lock the storage shed. " +
        N(5) + "<strong>Requirements.</strong> Applicants must be at least 15 years old by June 1 and must complete the town's free two-hour safety orientation before their first shift. " +
        N(6) + "A work permit is required for applicants under 16; forms are available in the school counseling office. " +
        N(7) + "Attendants must be able to stand for four hours and lift a stacked pair of deck chairs, about 30 pounds. " +
        N(8) + "<strong>Schedule and pay.</strong> Shifts are four hours, and each attendant works three to five shifts per week, including at least one weekend shift. " +
        N(9) + "Pay is $14.50 per hour, with a $0.75 raise for any attendant who returns for a second summer. " +
        N(10) + "<strong>How to apply.</strong> Submit the online form on the town recreation website by May 15. " +
        N(11) + "Applicants who list a reference other than a family member will be contacted first. " +
        N(12) + "Interviews last ten minutes and take place at the pool office; bring a photo ID. " +
        N(13) + "Send questions to the recreation office rather than the pool, since the pool phone is answered only during lessons." +
        "</p>",
      claims: [
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "This posting is written mainly for —",
          choices: [
            { letter: "A", text: "parents looking for swim lessons for young children" },
            { letter: "B", text: "students who want a summer job at the pool" },
            { letter: "C", text: "lifeguards hoping for a raise in their second summer" },
            { letter: "D", text: "town officials who approve the pool's yearly budget" }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "10.RI.1.B",
          stem: "According to the posting, which applicant will be contacted first?",
          choices: [
            { letter: "A", text: "one who is already 16 years old" },
            { letter: "B", text: "one who has worked at the pool before" },
            { letter: "C", text: "one who lists a reference who is not a relative" },
            { letter: "D", text: "one who submits the form before May 1" }
          ],
          correct: "C"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          stem: "The bold headings help a reader mainly by —",
          choices: [
            { letter: "A", text: "ranking the duties from most important to least important" },
            { letter: "B", text: "showing which rules have changed since last summer" },
            { letter: "C", text: "explaining why the pool needs four attendants this season" },
            { letter: "D", text: "dividing the posting into sections that can be scanned quickly" }
          ],
          correct: "D"
        },
        {
          id: "duties",
          sol: "10.RI.1.A",
          stem: "Taken together, sentences 3 and 4 show that the job mainly involves —",
          choices: [
            { letter: "A", text: "keeping the deck safe, clean, and orderly" },
            { letter: "B", text: "teaching swimming lessons to young children" },
            { letter: "C", text: "testing the pool chemicals every hour" },
            { letter: "D", text: "selling wristbands at the front gate" }
          ],
          correct: "A"
        },
        {
          id: "wordmean",
          sol: "10.RV.1.C",
          stem: "In sentence 6, the word permit most nearly means —",
          choices: [
            { letter: "A", text: "a document giving official permission" },
            { letter: "B", text: "a schedule of assigned shifts" },
            { letter: "C", text: "a written reference from a teacher" },
            { letter: "D", text: "a badge worn while on duty" }
          ],
          correct: "A"
        },
        {
          id: "raise",
          sol: "10.RI.2.B",
          stem: "The posting mentions the $0.75 raise in sentence 9 mainly to —",
          choices: [
            { letter: "A", text: "explain why the pay is lower than at other pools" },
            { letter: "B", text: "warn that first-year attendants earn less than lifeguards" },
            { letter: "C", text: "show that the town's budget has grown this year" },
            { letter: "D", text: "encourage attendants to come back for another summer" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────── Informational · level 2 ───────────── */
    {
      id: "g10-ri-toollibrary",
      family: "G10",
      title: "The Tool Library",
      kind: "Informational · 10.RI",
      blurb: "A former fire station that lends drills, ladders, and a guitar-shaped cake pan.",
      level: 2,
      passage:
        "<p>" + N(1) + "The Eastgate Tool Library does not lend books. " +
        N(2) + "It lends ladders, drills, tile cutters, and a cake pan shaped like a guitar, all from a former fire station that the neighborhood association leases for a dollar a year. " +
        N(3) + "The idea came from a retired carpenter named Luis Arriaga, who noticed that most households own a power drill and use it for about fifteen minutes a year. " +
        N(4) + "A tool that sits in a closet, he argued, is a tool that could be in someone else's hands. " +
        N(5) + "Members pay a sliding annual fee, from nothing to sixty dollars, and can borrow up to five tools at a time for one week. " +
        N(6) + "Volunteers check each tool back in, test it, and tag anything that needs repair. " +
        N(7) + "The inventory has grown from 90 donated tools in the first year to more than 1,400 today, and nearly all of it came from garages within a mile of the building. " +
        N(8) + "Growth brought a problem. " +
        N(9) + "In the second year, about one tool in ten came back late or not at all, and volunteers spent Saturdays chasing borrowers instead of fixing tools. " +
        N(10) + "Instead of adding fines, the board added a text-message reminder two days before a tool was due and a simple online renewal button. " +
        N(11) + "Late returns fell by more than half within three months. " +
        N(12) + "The library now hosts a monthly repair night, where members bring broken lamps and wobbly chairs and learn to fix them. " +
        N(13) + "Arriaga likes to say the building still answers emergencies; they are just smaller now." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which sentence best expresses the idea that the whole passage develops?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "Sentences 8 through 11 are organized as —",
          choices: [
            { letter: "A", text: "a problem followed by a solution and its result" },
            { letter: "B", text: "a comparison between two neighborhoods" },
            { letter: "C", text: "a list of tools in order of popularity" },
            { letter: "D", text: "a series of steps for borrowing a tool" }
          ],
          correct: "A"
        },
        {
          id: "detail",
          sol: "10.RI.1.B",
          stem: "Which detail best supports the idea that the library depends on its own neighborhood?",
          choices: [
            { letter: "A", text: "Members can borrow up to five tools at a time." },
            { letter: "B", text: "The board added a text-message reminder two days before the due date." },
            { letter: "C", text: "The fee ranges from nothing to sixty dollars." },
            { letter: "D", text: "Nearly all the tools came from garages within a mile." }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "10.RI.2.C",
          stem: "Which sentence provides the strongest evidence that the change described in sentence 10 succeeded?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "wordmean",
          sol: "10.RV.1.C",
          stem: "In sentence 5, the phrase sliding annual fee most nearly means a fee that —",
          choices: [
            { letter: "A", text: "increases each year a member stays" },
            { letter: "B", text: "varies depending on what a member can pay" },
            { letter: "C", text: "must be paid in weekly installments" },
            { letter: "D", text: "is refunded when tools come back on time" }
          ],
          correct: "B"
        },
        {
          id: "remark",
          sol: "10.RI.2.B",
          stem: "In sentence 13, Arriaga's remark that the building still answers emergencies is meant to —",
          choices: [
            { letter: "A", text: "warn that the fire station could be needed again during a disaster" },
            { letter: "B", text: "complain that members treat small repairs as if they were urgent" },
            { letter: "C", text: "explain why the neighborhood association charges so little rent" },
            { letter: "D", text: "link the library's purpose with the building's past in a playful way" }
          ],
          correct: "D"
        }
      ]
    },
    /* ───────────── Functional text · level 2 ───────────── */
    {
      id: "g10-ri-clubbylaws",
      family: "G10",
      title: "Article III: Officers",
      kind: "Functional text · 10.RI",
      blurb: "An excerpt from a garden club's constitution on elections and vacancies.",
      level: 2,
      passage:
        "<p><strong>CONSTITUTION OF THE NORTHSIDE HIGH SCHOOL GARDEN CLUB — Article III: Officers and Elections (excerpt)</strong></p>" +
        "<p>" + N(1) + "<strong>Section 1. Officers.</strong> The club shall have four officers: a president, a vice president, a treasurer, and a plot coordinator. " +
        N(2) + "The plot coordinator assigns garden beds each season and keeps the watering schedule, an office created after two beds went unwatered for a month because no one knew whose turn it was. " +
        N(3) + "<strong>Section 2. Eligibility.</strong> Any member who has attended at least six meetings in the current school year may run for office. " +
        N(4) + "A member may hold only one office at a time, and no member may serve as president for more than two consecutive terms. " +
        N(5) + "<strong>Section 3. Elections.</strong> Elections shall be held at the last regular meeting in April, and officers shall take office on June 1 so that the new plot coordinator, not the outgoing one, assigns the summer beds. " +
        N(6) + "Voting shall be by secret ballot, counted by the faculty sponsor and one member who is not running. " +
        N(7) + "If no candidate receives a majority, a second vote shall be held between the two candidates with the most votes. " +
        N(8) + "<strong>Section 4. Vacancies.</strong> If an office becomes vacant before March, a special election shall be held within three weeks. " +
        N(9) + "If an office becomes vacant in March or later, the remaining officers shall appoint a member to serve until June. " +
        N(10) + "<strong>Section 5. Removal.</strong> An officer who misses three consecutive meetings without notifying the president may be removed by a two-thirds vote of the members present, provided that the officer received notice of the vote at least one week in advance." +
        "</p>",
      claims: [
        {
          id: "purpose",
          sol: "10.RI.1.C",
          stem: "The main purpose of Article III is to —",
          choices: [
            { letter: "A", text: "describe the history of the garden club" },
            { letter: "B", text: "set the rules for choosing and replacing club officers" },
            { letter: "C", text: "explain how the garden beds are watered each summer" },
            { letter: "D", text: "persuade members to run for president" }
          ],
          correct: "B"
        },
        {
          id: "vacancy",
          sol: "10.RI.1.B",
          stem: "According to Section 4, what happens if the treasurer resigns in April?",
          choices: [
            { letter: "A", text: "A special election is held within three weeks." },
            { letter: "B", text: "The vice president takes over the treasurer's duties." },
            { letter: "C", text: "The remaining officers appoint a member to serve until June." },
            { letter: "D", text: "The office stays empty until the next regular election." }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "How is Article III organized?",
          choices: [
            { letter: "A", text: "as a timeline of one club year from September to June" },
            { letter: "B", text: "as a list of officers ranked by importance" },
            { letter: "C", text: "as a set of problems followed by their solutions" },
            { letter: "D", text: "as numbered sections, each covering one topic about officers" }
          ],
          correct: "D"
        },
        {
          id: "inference",
          sol: "10.RI.2.C",
          stem: "Which statement is best supported by sentences 2 and 5 together?",
          choices: [
            { letter: "A", text: "Some club rules were written to keep past problems with the beds from repeating." },
            { letter: "B", text: "The club has struggled to find members willing to serve as plot coordinator." },
            { letter: "C", text: "The faculty sponsor, not the plot coordinator, decides which beds are planted each summer." },
            { letter: "D", text: "The outgoing officers usually refuse to help the newly elected officers during the summer." }
          ],
          correct: "A"
        },
        {
          id: "wordmean",
          sol: "10.RV.1.C",
          stem: "In sentence 4, the word consecutive most nearly means —",
          choices: [
            { letter: "A", text: "elected" },
            { letter: "B", text: "shared" },
            { letter: "C", text: "one after another" },
            { letter: "D", text: "shortened" }
          ],
          correct: "C"
        },
        {
          id: "condition",
          sol: "10.RI.2.B",
          stem: "The phrase provided that in sentence 10 is included mainly to —",
          choices: [
            { letter: "A", text: "make sure an officer is not removed without warning" },
            { letter: "B", text: "explain how the president records attendance at meetings" },
            { letter: "C", text: "require the faculty sponsor to approve every removal vote" },
            { letter: "D", text: "limit removal votes to the last meeting in April" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────── Argument · level 2 ───────────── */
    {
      id: "g10-ri-courtyard",
      family: "G10",
      title: "Unlock the Courtyard",
      kind: "Argument · 10.RI",
      blurb: "A student op-ed asking for one locked door to be opened.",
      level: 2,
      passage:
        "<p>" + N(1) + "In the middle of our building is a courtyard most students have seen only through the second-floor hallway windows. " +
        N(2) + "It has four benches, a dead fountain, and a door that has been locked since before any current student enrolled. " +
        N(3) + "The reasons for keeping it locked are supervision and litter, and both deserve a real answer rather than an eye roll. " +
        N(4) + "Here is the answer. " +
        N(5) + "The courtyard is enclosed on all four sides by classrooms, so a teacher glancing up from a desk can see all of it, which is more than anyone can say for the parking lot at lunch. " +
        N(6) + "As for litter, the district schools that opened similar spaces used one simple rule: the courtyard closes for a week the first time it is left dirty. " +
        N(7) + "At one of those schools, the rule has been used exactly once in four years. " +
        N(8) + "The benefits are not vague. " +
        N(9) + "Biology classes could plant and measure a garden bed instead of watching a video about one. " +
        N(10) + "Students who find the cafeteria loud, and there are more of us than teachers realize, would have somewhere quieter to eat. " +
        N(11) + "The cost is a lock that works and a supervision slot that teachers already fill in the cafeteria. " +
        N(12) + "Nobody is asking for a fountain repair or a landscaping budget. " +
        N(13) + "We are asking for a key to be turned. " +
        N(14) + "If the courtyard is a mess by October, lock it again and we will not argue. " +
        N(15) + "But a space in the center of the school that no one may enter is not a safety policy; it is a habit." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the author's main claim?",
          choices: [
            { letter: "A", text: "The school should unlock the courtyard so students and classes can use it." },
            { letter: "B", text: "The cafeteria is too loud for many students to eat there comfortably." },
            { letter: "C", text: "Teachers already supervise students in the parking lot during lunch." },
            { letter: "D", text: "The dead fountain should be repaired before the courtyard is reopened." }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "10.RI.2.C",
          stem: "Which sentence gives the strongest evidence that the rule in sentence 6 rarely needs to be enforced?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "The author organizes sentences 3 through 7 by —",
          choices: [
            { letter: "A", text: "describing the courtyard from the outside to the inside" },
            { letter: "B", text: "listing the benefits from least to most important" },
            { letter: "C", text: "naming two objections and answering each in turn" },
            { letter: "D", text: "comparing the courtyard with the cafeteria" }
          ],
          correct: "C"
        },
        {
          id: "contrast",
          sol: "10.RI.2.B",
          stem: "In sentence 15, the author contrasts a safety policy with a habit in order to —",
          choices: [
            { letter: "A", text: "admit that supervising the courtyard would be unsafe for teachers" },
            { letter: "B", text: "praise the school for keeping a clear and consistent safety policy" },
            { letter: "C", text: "argue that habits are harder to change than written policies" },
            { letter: "D", text: "suggest the locked door continues out of routine, not reasoning" }
          ],
          correct: "D"
        },
        {
          id: "test",
          sol: "10.RI.1.C",
          stem: "The author includes sentence 14 mainly to —",
          choices: [
            { letter: "A", text: "warn that students will stop using the courtyard by October" },
            { letter: "B", text: "show willingness to accept a fair test of the idea" },
            { letter: "C", text: "describe how messy the courtyard already is" },
            { letter: "D", text: "demand that the door be locked again immediately" }
          ],
          correct: "B"
        },
        {
          id: "wordmean",
          sol: "10.RV.1.C",
          stem: "In sentence 8, the word vague most nearly means —",
          choices: [
            { letter: "A", text: "expensive" },
            { letter: "B", text: "temporary" },
            { letter: "C", text: "unclear" },
            { letter: "D", text: "surprising" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────── Informational · level 3 ───────────── */
    {
      id: "g10-ri-bridgebats",
      family: "G10",
      title: "The Bridge Colony",
      kind: "Informational · 10.RI",
      blurb: "Eleven summers of bat counts reshape a highway repair.",
      level: 3,
      passage:
        "<p>" + N(1) + "When the state transportation department announced that the Kessler Creek bridge would be resurfaced, the loudest objection came not from commuters but from a biology teacher with a clipboard. " +
        N(2) + "For eleven summers, Ana Reyes had led students to the creek bank at dusk to count the bats that pour from the bridge's expansion joints, the gaps that let the concrete deck stretch in heat and shrink in cold. " +
        N(3) + "Her counts, made with hand clickers and later confirmed by an infrared camera, put the colony at roughly 40,000 animals, nearly all female, raising pups in the warm crevices from May to August. " +
        N(4) + "Resurfacing meant sealing those joints. " +
        N(5) + "The department's first proposal was to seal them in April, before the bats returned; the second was to seal them in September, after the pups could fly. " +
        N(6) + "Reyes's data complicated both. " +
        N(7) + "Her records showed that the colony arrived earlier in warm springs and stayed later in mild autumns, so a calendar date was a poor substitute for an observation. " +
        N(8) + "The compromise was, in its way, an engineering lesson. " +
        N(9) + "The joints were sealed in late September, but only after a night count showed fewer than 200 bats. " +
        N(10) + "A year in advance, bat boxes built by Reyes's students to match the joints' dimensions were bolted beneath the deck so the colony would have somewhere to go. " +
        N(11) + "The following May, the boxes held an estimated 26,000 bats. " +
        N(12) + "It was not the full colony, and Reyes is careful to say so. " +
        N(13) + "But it was proof that a bridge can be maintained without evicting its oldest tenants, provided that someone has been counting." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "The passage as a whole mainly develops the idea that —",
          choices: [
            { letter: "A", text: "careful observation can shape a public project to serve people and wildlife alike" },
            { letter: "B", text: "highway bridges should never be resurfaced during the summer breeding months" },
            { letter: "C", text: "bat boxes are a poor replacement for the natural roosting sites bats prefer" },
            { letter: "D", text: "the transportation department ignored the concerns of local commuters" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "10.RI.2.C",
          stem: "Which sentence best supports the idea that fixed dates were the wrong tool for scheduling the work?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "The author structures sentences 4 through 7 mainly to —",
          choices: [
            { letter: "A", text: "compare the bats' behavior in spring with their behavior in autumn" },
            { letter: "B", text: "describe the steps of the resurfacing process in the order they occurred" },
            { letter: "C", text: "explain how the infrared camera improved the accuracy of the counts" },
            { letter: "D", text: "present two proposed solutions and then show why the data undermined both" }
          ],
          correct: "D"
        },
        {
          id: "tenants",
          sol: "10.RI.2.B",
          stem: "In sentence 13, the author calls the bats the bridge's oldest tenants in order to —",
          choices: [
            { letter: "A", text: "complain that the colony damages the concrete deck" },
            { letter: "B", text: "suggest the bats have a rightful place there that deserves respect" },
            { letter: "C", text: "imply that the bats will eventually be removed anyway" },
            { letter: "D", text: "explain why the bats prefer the joints to the boxes" }
          ],
          correct: "B"
        },
        {
          id: "honest",
          sol: "10.RI.1.C",
          stem: "Sentence 12 is included mainly to —",
          choices: [
            { letter: "A", text: "reveal that the bat boxes failed to attract any of the colony's bats" },
            { letter: "B", text: "keep the claim in sentence 13 honest by admitting the result was partial" },
            { letter: "C", text: "suggest that Reyes doubts the accuracy of her students' counts" },
            { letter: "D", text: "argue that the joints should be reopened the following summer" }
          ],
          correct: "B"
        },
        {
          id: "wordmean",
          sol: "10.RV.1.C",
          stem: "In sentence 6, the word complicated most nearly means —",
          choices: [
            { letter: "A", text: "confirmed" },
            { letter: "B", text: "postponed" },
            { letter: "C", text: "made less simple" },
            { letter: "D", text: "rejected" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────── Argument · level 3 ───────────── */
    {
      id: "g10-ri-trifold",
      family: "G10",
      title: "Retire the Trifold",
      kind: "Argument · 10.RI",
      blurb: "An argument that the science fair should stop requiring a cardboard board.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every February, the gym fills with three hundred cardboard trifolds, and a quarter of the projects are judged largely on whether a student owns a good printer. " +
        N(2) + "The trifold has been the fair's official format for as long as anyone remembers, and the reasons for keeping it are not silly: judges can walk a row quickly, and a fixed format keeps the competition fair. " +
        N(3) + "I want to question the second reason, because it does most of the work. " +
        N(4) + "A format is fair only if every student has the same access to it. " +
        N(5) + "Last year's rubric gave up to fifteen of one hundred points for visual presentation, and the top ten projects averaged fourteen. " +
        N(6) + "Several of those boards were professionally printed at a cost the fair does not reimburse. " +
        N(7) + "Meanwhile, a project on soil bacteria that two judges called the most rigorous in the building finished twelfth, with a board hand-lettered in marker. " +
        N(8) + "Rigorous and twelfth should not appear in the same sentence. " +
        N(9) + "The fix is not to ban the trifold but to stop requiring it. " +
        N(10) + "A student could present on a board, a laptop, or a single printed page with the data table front and center, and judges would score the science, not the surface. " +
        N(11) + "Would judging take longer? " +
        N(12) + "Slightly, and a fair that already runs four hours can spare twenty minutes. " +
        N(13) + "Would some students still spend money? " +
        N(14) + "Of course, but the rubric would no longer reward them for it. " +
        N(15) + "We hold the fair to find out who can ask a good question and answer it carefully. " +
        N(16) + "A cardboard wall was never the question." +
        "</p>",
      claims: [
        {
          id: "proposal",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the author's proposal?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "C"
        },
        {
          id: "support",
          sol: "10.RI.2.C",
          stem: "The author supports the claim in sentence 4 mainly by —",
          choices: [
            { letter: "A", text: "citing rubric points and the cost of professional printing" },
            { letter: "B", text: "quoting judges who prefer laptops to cardboard boards" },
            { letter: "C", text: "describing how long the fair takes to judge each year" },
            { letter: "D", text: "listing the schools that have already dropped the trifold" }
          ],
          correct: "A"
        },
        {
          id: "questions",
          sol: "10.RI.2.B",
          stem: "The author asks the questions in sentences 11 and 13 mainly to —",
          choices: [
            { letter: "A", text: "show uncertainty about whether the proposal will work" },
            { letter: "B", text: "raise likely objections so they can be answered briefly" },
            { letter: "C", text: "invite the judges to reply to the piece in writing" },
            { letter: "D", text: "suggest that the fair should be shortened by an hour" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "10.RI.2.A",
          stem: "How does the author organize sentences 2 through 4?",
          choices: [
            { letter: "A", text: "by describing the fair's history from its founding to the present" },
            { letter: "B", text: "by comparing this year's fair with the one held the previous year" },
            { letter: "C", text: "by listing the costs of a trifold from cheapest to most expensive" },
            { letter: "D", text: "by granting the reasons for the format, then isolating one to challenge" }
          ],
          correct: "D"
        },
        {
          id: "echo",
          sol: "10.RI.2.B",
          stem: "Sentence 8 is effective mainly because it —",
          choices: [
            { letter: "A", text: "introduces new evidence about the soil bacteria project" },
            { letter: "B", text: "repeats two words from sentence 7 to make the unfairness sound absurd" },
            { letter: "C", text: "quotes the judges' exact words about the soil bacteria project" },
            { letter: "D", text: "explains how the rubric assigns points for rigor and presentation" }
          ],
          correct: "B"
        },
        {
          id: "wordmean",
          sol: "10.RV.1.C",
          stem: "In sentence 7, the word rigorous most nearly means —",
          choices: [
            { letter: "A", text: "colorful and neat" },
            { letter: "B", text: "expensive and rare" },
            { letter: "C", text: "long and complicated" },
            { letter: "D", text: "thorough and careful" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
