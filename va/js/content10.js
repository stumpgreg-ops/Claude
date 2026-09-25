/* SOL Labyrinth — Grade 11 informational reading (11.RI): articles, essays,
 * functional/workplace texts and argument pieces. Original text only.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* ───────────────────────── ARTICLES & ESSAYS ───────────────────────── */
    {
      id: "g11-ri-crows",
      family: "G11",
      title: "The Crow Census",
      kind: "Informational · 11.RI",
      blurb: "A city stops chasing its crows and starts counting them.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every evening from November to March, thousands of crows fly into the sycamores along Fenwick Avenue and settle there for the night. " +
        N(2) + "For years, downtown business owners treated the roost as a nuisance, and the city tried everything from recorded hawk calls to bright lights to move the birds along. " +
        N(3) + "In 2021, a biology teacher at Fenwick High proposed a different response: instead of scattering the crows, count them. " +
        N(4) + "The Crow Census, as her students named it, now runs on twelve winter evenings each year. " +
        N(5) + "Volunteers stand at eight fixed spots along the avenue, tally the birds passing overhead in ten-minute blocks, and enter their totals into a shared spreadsheet before they go home. " +
        N(6) + "The numbers surprised everyone. " +
        N(7) + "The roost was not growing, as merchants had assumed; it had held steady at roughly nine thousand birds for three winters, and it shrank during weeks when the weather was mild. " +
        N(8) + "The census also showed that the crows arrived from the same three directions every night, which suggested they were spending their days at farms and landfills outside town rather than in the city itself. " +
        N(9) + "The city used the data to change its approach. " +
        N(10) + "Rather than paying for more noise machines, it scheduled sidewalk cleaning for the mornings after the largest counts and planted no new trees along the two blocks where the birds gather. " +
        N(11) + "The students gained something too: a data set that has now been cited in two regional bird surveys, and proof that patient counting can be more persuasive than any siren." +
        "</p>",
      claims: [
        {
          id: "mainidea",
          sol: "11.RI.1.A",
          stem: "Which statement best expresses the main idea of the passage?",
          choices: [
            { letter: "A", text: "Crows are a nuisance that no city has managed to control." },
            { letter: "B", text: "Careful observation gave a city a better way to handle its crows." },
            { letter: "C", text: "Students should run more science projects during the winter." },
            { letter: "D", text: "Noise machines and bright lights are the best way to move birds." }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "11.RI.1.B",
          stem: "According to the passage, what did the census reveal about the size of the roost?",
          choices: [
            { letter: "A", text: "It had doubled since the city began using hawk calls." },
            { letter: "B", text: "It grew larger during weeks of mild weather." },
            { letter: "C", text: "It had stayed at about nine thousand birds for three winters." },
            { letter: "D", text: "It was smaller than any of the merchants had guessed." }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "11.RI.2.A",
          stem: "Which description best matches the structure of the passage?",
          choices: [
            { letter: "A", text: "a problem, a new approach, its findings, and the results of those findings" },
            { letter: "B", text: "a series of arguments for and against removing the roost from downtown" },
            { letter: "C", text: "a comparison between crows and other birds that roost in cities" },
            { letter: "D", text: "a step-by-step guide for organizing and running a bird count" }
          ],
          correct: "A"
        },
        {
          id: "sentence6",
          sol: "11.RI.2.B",
          stem: "Sentence 6 serves mainly to —",
          choices: [
            { letter: "A", text: "signal that the findings that follow were unexpected" },
            { letter: "B", text: "explain why the volunteers stopped counting early" },
            { letter: "C", text: "show that the merchants had been correct all along" },
            { letter: "D", text: "introduce the teacher who designed the census" }
          ],
          correct: "A"
        },
        {
          id: "nuisance",
          sol: "11.RV.1.C",
          stem: "In sentence 2, the word nuisance most nearly means —",
          choices: [
            { letter: "A", text: "a natural wonder" },
            { letter: "B", text: "a business opportunity" },
            { letter: "C", text: "a scientific puzzle" },
            { letter: "D", text: "a source of annoyance" }
          ],
          correct: "D"
        },
        {
          id: "inference",
          sol: "11.RI.1.B",
          stem: "Based on sentence 11, the reader can conclude that the students' data —",
          choices: [
            { letter: "A", text: "was rejected by the regional bird surveys" },
            { letter: "B", text: "earned respect beyond the city itself" },
            { letter: "C", text: "convinced the city to buy more sirens" },
            { letter: "D", text: "was collected only during the first winter" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-ri-toollibrary",
      family: "G11",
      title: "The Library That Lends Hammers",
      kind: "Informational · 11.RI",
      blurb: "A public library adds a collection that will never fit on a shelf.",
      level: 1,
      passage:
        "<p>" + N(1) + "The Ridgeview Public Library added a new kind of collection in 2022, and none of it fits on a shelf. " +
        N(2) + "Behind the reference desk, a locked cage holds cordless drills, ladders, a tile cutter, two sewing machines, and a pressure washer, all available with a library card for one week. " +
        N(3) + "The idea came from a survey taken after a spring storm, when dozens of residents asked where they could borrow a chainsaw to clear fallen branches. " +
        N(4) + "Most people who need a tool need it once. " +
        N(5) + "A homeowner who buys a tile cutter for one bathroom floor will store it in a garage for twenty years, while a renter who cannot afford the tool may simply leave the job undone. " +
        N(6) + "The tool library solves both problems by treating a drill the way it treats a novel: as something a community can share. " +
        N(7) + "The collection started with forty donated items and now holds more than three hundred. " +
        N(8) + "Each tool is inspected on return, and a volunteer known around the building as the \"tool doctor\" repairs anything that comes back damaged. " +
        N(9) + "Late fees are the same as for books, which means small, but a borrower who loses an item must pay to replace it. " +
        N(10) + "Circulation numbers tell the story. " +
        N(11) + "In its first full year, the tool collection was checked out more than four thousand times, and the library's overall card sign-ups rose by a fifth. " +
        N(12) + "Librarians say the most popular item is not the pressure washer but a simple stud finder, a tool almost no one wants to own and nearly everyone eventually needs." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which sentence best states the central idea of the passage?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "origin",
          sol: "11.RI.1.B",
          stem: "According to the passage, what prompted the library to start lending tools?",
          choices: [
            { letter: "A", text: "A donation of forty items from a hardware store" },
            { letter: "B", text: "A request from the volunteer known as the tool doctor" },
            { letter: "C", text: "Responses to a survey taken after a storm" },
            { letter: "D", text: "A drop in the number of library card sign-ups" }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "11.RI.1.C",
          stem: "The author wrote this passage mainly to —",
          choices: [
            { letter: "A", text: "inform readers about how a library's tool collection works and why it succeeds" },
            { letter: "B", text: "persuade readers to donate their unused tools to a public library" },
            { letter: "C", text: "describe the damage caused by a spring storm in the town of Ridgeview" },
            { letter: "D", text: "compare the cost of buying tools with the cost of renting them from a store" }
          ],
          correct: "A"
        },
        {
          id: "novel",
          sol: "11.RI.2.B",
          stem: "In sentence 6, comparing a drill to a novel helps the reader understand that —",
          choices: [
            { letter: "A", text: "tools are more fragile than books" },
            { letter: "B", text: "the library plans to replace books with tools" },
            { letter: "C", text: "novels are borrowed more often than drills" },
            { letter: "D", text: "sharing is the principle behind both collections" }
          ],
          correct: "D"
        },
        {
          id: "circulation",
          sol: "11.RV.1.C",
          stem: "In sentence 10, the word circulation most nearly refers to —",
          choices: [
            { letter: "A", text: "the flow of air through the building" },
            { letter: "B", text: "the number of times items are borrowed" },
            { letter: "C", text: "the route a volunteer walks to inspect tools" },
            { letter: "D", text: "the money the library collects in fees" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "11.RI.2.C",
          stem: "Which sentence gives numerical evidence of how often the tools are borrowed?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-heatmap",
      family: "G11",
      title: "Mapping the Heat",
      kind: "Informational · 11.RI",
      blurb: "Sixty volunteers, twenty routes, one hot afternoon, and a map the council could not ignore.",
      level: 2,
      passage:
        "<p>" + N(1) + "On the hottest afternoon of last July, sixty volunteers in Delmar drove twenty routes at the same hour with small sensors clipped to their car windows, recording the air temperature every second. " +
        N(2) + "The project, run by the county health office with students from two high schools, produced the city's first block-by-block heat map, and the results were sharper than anyone expected. " +
        N(3) + "At 3 p.m., the temperature outside the downtown transit center read 104 degrees, while a neighborhood of older homes and mature oaks two miles away read 91. " +
        N(4) + "Thirteen degrees is not a rounding error; it is the difference between an uncomfortable wait for a bus and a dangerous one. " +
        N(5) + "The pattern was consistent. " +
        N(6) + "The hottest streets shared three features: wide asphalt, few trees, and flat commercial roofs that store heat all day and release it after dark. " +
        N(7) + "The coolest streets had shade, grass, and water nearby. " +
        N(8) + "None of this was news to the people who live on the hot blocks, but until the map existed, their complaints were anecdotes, and anecdotes rarely move a budget. " +
        N(9) + "A map is harder to dismiss. " +
        N(10) + "Within six months, the city council voted to plant four hundred trees along the five hottest corridors, add shade at the twelve hottest bus stops, and require light-colored roofing on new commercial buildings. " +
        N(11) + "The students who drove the routes now present the data at community meetings, and the county will repeat the survey every three years to see whether the changes are working. " +
        N(12) + "The heat was always there; what changed is that someone finally wrote it down." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which of the following best summarizes the central idea of the passage?",
          choices: [
            { letter: "A", text: "Turning residents' complaints into measured data gave the city a reason to act." },
            { letter: "B", text: "Delmar's downtown is thirteen degrees hotter than its residential neighborhoods." },
            { letter: "C", text: "Trees and light-colored roofs are the only reliable ways to cool a city." },
            { letter: "D", text: "High school students should be included in every county health project." }
          ],
          correct: "A"
        },
        {
          id: "select2",
          sol: "11.RI.1.B",
          stem: "Select TWO sentences that identify physical features that affect a street's temperature.",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: ["B", "C"]
        },
        {
          id: "rounding",
          sol: "11.RI.2.B",
          stem: "In sentence 4, the author calls the thirteen-degree gap not a rounding error mainly to —",
          choices: [
            { letter: "A", text: "stress that the difference is large enough to matter for safety" },
            { letter: "B", text: "admit that the sensors on the car windows may have been inaccurate" },
            { letter: "C", text: "suggest that the volunteers made mistakes in their arithmetic" },
            { letter: "D", text: "compare the new survey with earlier, less precise heat maps" }
          ],
          correct: "A"
        },
        {
          id: "anecdotes",
          sol: "11.RV.1.C",
          stem: "In sentence 8, the word anecdotes most nearly means —",
          choices: [
            { letter: "A", text: "official measurements" },
            { letter: "B", text: "formal complaints filed with a court" },
            { letter: "C", text: "brief personal accounts" },
            { letter: "D", text: "exaggerated rumors" }
          ],
          correct: "C"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          stem: "How does the author organize sentences 8–10?",
          choices: [
            { letter: "A", text: "by contrasting the experiences of two different neighborhoods" },
            { letter: "B", text: "by listing the steps volunteers followed on the day of the survey" },
            { letter: "C", text: "by ranking the council's decisions from least to most costly" },
            { letter: "D", text: "by explaining why the data mattered and then showing what it produced" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "11.RI.1.C",
          stem: "The final sentence mainly suggests that —",
          choices: [
            { letter: "A", text: "the heat problem was created by the survey itself" },
            { letter: "B", text: "recording a problem can be the first step toward solving it" },
            { letter: "C", text: "residents had been unaware of the heat until the map appeared" },
            { letter: "D", text: "the city should have drawn its own map years earlier" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-ri-quietroom",
      family: "G11",
      title: "The Quietest Room",
      kind: "Informational · 11.RI",
      blurb: "An essay on why almost nobody can stand more than half an hour of real silence.",
      level: 3,
      passage:
        "<p>" + N(1) + "Most people imagine silence as an absence, a room with the noise scooped out, but the engineers who build anechoic chambers know it as something closer to a substance. " +
        N(2) + "Their rooms are boxes within boxes: a concrete shell, an inner chamber floating on springs, and walls of foam wedges a yard deep that swallow sound instead of reflecting it. " +
        N(3) + "Step inside, let the door seal, and the first sensation is not peace but pressure, as though the air has thickened. " +
        N(4) + "Within a minute, the visitor hears the body's own machinery: the pulse in the ears, the whine of the nervous system, the click of a swallow that ordinary life buries under traffic and refrigerators. " +
        N(5) + "Few people last more than half an hour. " +
        N(6) + "It is tempting to conclude that humans are simply addicted to noise, but the more careful explanation is that hearing evolved as a navigation tool, not a luxury. " +
        N(7) + "A room without echoes is a room without edges; the brain, deprived of the small reflections it uses to judge distance, keeps searching for walls it cannot find. " +
        N(8) + "The chambers exist for practical reasons. " +
        N(9) + "Phone makers test microphones in them, hearing researchers calibrate instruments, and automakers listen for the hum a passenger never consciously notices but finds irritating on a long drive. " +
        N(10) + "Yet the visitors who sign up for tours are rarely engineers. " +
        N(11) + "They come, most admit, to find out whether they can stand it, and they leave with a more modest discovery: the quiet they long for on a crowded bus was never quiet at all, only noise they had agreed to stop hearing." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          stem: "Which statement best captures the essay's central idea?",
          choices: [
            { letter: "A", text: "Anechoic chambers are used mainly by phone and car manufacturers." },
            { letter: "B", text: "True silence is unsettling because hearing is built for orientation, not comfort." },
            { letter: "C", text: "Humans are addicted to noise and cannot tolerate quiet rooms for long." },
            { letter: "D", text: "Engineers should design chambers that are more pleasant for visitors." }
          ],
          correct: "B"
        },
        {
          id: "substance",
          sol: "11.RI.2.B",
          stem: "In sentence 1, the author contrasts absence with substance mainly to —",
          choices: [
            { letter: "A", text: "explain how the chambers are constructed" },
            { letter: "B", text: "argue that silence cannot be measured by instruments" },
            { letter: "C", text: "challenge the reader's assumption about what silence is" },
            { letter: "D", text: "show that engineers disagree with most people" }
          ],
          correct: "C"
        },
        {
          id: "edges",
          sol: "11.RI.1.B",
          stem: "Sentence 7 supports the explanation in sentence 6 by —",
          choices: [
            { letter: "A", text: "giving an example of a luxury the brain enjoys" },
            { letter: "B", text: "describing what the brain does when its usual cues are missing" },
            { letter: "C", text: "listing the reflections that make a room feel comfortable" },
            { letter: "D", text: "proving that the visitors were imagining the pressure" }
          ],
          correct: "B"
        },
        {
          id: "calibrate",
          sol: "11.RV.1.C",
          stem: "In sentence 9, the word calibrate most nearly means —",
          choices: [
            { letter: "A", text: "adjust for accuracy" },
            { letter: "B", text: "sell at a discount" },
            { letter: "C", text: "replace with newer models" },
            { letter: "D", text: "store in a safe place" }
          ],
          correct: "A"
        },
        {
          id: "practical",
          sol: "11.RI.2.A",
          stem: "The author includes sentences 8 and 9 mainly to —",
          choices: [
            { letter: "A", text: "prove that the chambers are dangerous to most visitors" },
            { letter: "B", text: "explain why engineers rarely take the public tours" },
            { letter: "C", text: "compare the hum of a car with the whine of a phone" },
            { letter: "D", text: "note the chambers' practical uses before returning to the visitors" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward the visitors in sentence 11 is best described as —",
          choices: [
            { letter: "A", text: "mocking and impatient" },
            { letter: "B", text: "alarmed and protective" },
            { letter: "C", text: "gently ironic" },
            { letter: "D", text: "coldly scientific" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── FUNCTIONAL / WORKPLACE TEXTS ───────────────────────── */
    {
      id: "g11-ri-scholarship",
      family: "G11",
      title: "Future Builders FAQ",
      kind: "Functional text · 11.RI",
      blurb: "The questions-and-answers page for a community scholarship.",
      level: 1,
      passage:
        "<p><strong>HARBORLINE COMMUNITY FOUNDATION — FUTURE BUILDERS SCHOLARSHIP: FREQUENTLY ASKED QUESTIONS</strong></p>" +
        "<p>" + N(1) + "<strong>Who can apply?</strong> Any senior who attends a public high school in Harbor County, has a grade point average of 2.75 or higher, and plans to enroll in a two-year or four-year program next fall. " +
        N(2) + "Trade and apprenticeship programs count, as long as the program issues a certificate or degree. " +
        N(3) + "<strong>How much is the award?</strong> Ten students receive $2,000 each, paid directly to the school the student attends, not to the student. " +
        N(4) + "Winners may renew the award for a second year by submitting a transcript showing full-time enrollment and a 2.5 average or better. " +
        N(5) + "<strong>What do I have to submit?</strong> The online form, one recommendation from an adult who is not a relative, and a 400-word essay about a problem in your community and what you did about it. " +
        N(6) + "Essays that describe a plan you have not yet started are welcome, but the committee gives more weight to work already done. " +
        N(7) + "<strong>Does financial need matter?</strong> Yes, but it is not the only factor; the committee also considers effort, leadership, and the quality of the essay. " +
        N(8) + "<strong>When is the deadline?</strong> Applications close at 11:59 p.m. on February 28, and late submissions are not reviewed for any reason, including technical problems, so do not wait until the final hour. " +
        N(9) + "<strong>How will I hear back?</strong> Every applicant receives an email by April 15; winners are also invited to a breakfast in May, where each recipient speaks for two minutes about the problem in the essay. " +
        N(10) + "Questions not answered here may be sent to the scholarship coordinator through the contact page." +
        "</p>",
      claims: [
        {
          id: "audience",
          sol: "11.RI.1.C",
          stem: "The intended audience for this text is —",
          choices: [
            { letter: "A", text: "teachers writing recommendation letters" },
            { letter: "B", text: "high school seniors considering applying for the award" },
            { letter: "C", text: "foundation members choosing the winners" },
            { letter: "D", text: "college financial aid officers" }
          ],
          correct: "B"
        },
        {
          id: "payment",
          sol: "11.RI.1.B",
          stem: "According to the FAQ, the $2,000 award is —",
          choices: [
            { letter: "A", text: "mailed to the student's home address" },
            { letter: "B", text: "split between the student and the school" },
            { letter: "C", text: "sent directly to the school the student attends" },
            { letter: "D", text: "given only to students in four-year programs" }
          ],
          correct: "C"
        },
        {
          id: "bestchance",
          sol: "11.RI.1.B",
          stem: "A student who wants the best chance of winning should most likely —",
          choices: [
            { letter: "A", text: "describe a community project that has already been completed" },
            { letter: "B", text: "ask a parent to write the recommendation" },
            { letter: "C", text: "submit the application on the evening of February 28" },
            { letter: "D", text: "choose a four-year college rather than a trade program" }
          ],
          correct: "A"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          stem: "The bold headings in the text help the reader by —",
          choices: [
            { letter: "A", text: "ranking the requirements from most to least important" },
            { letter: "B", text: "showing the order in which the committee reads each application" },
            { letter: "C", text: "summarizing the essay topic chosen for each year" },
            { letter: "D", text: "grouping information under the questions applicants are likely to ask" }
          ],
          correct: "D"
        },
        {
          id: "renew",
          sol: "11.RV.1.C",
          stem: "In sentence 4, the word renew most nearly means —",
          choices: [
            { letter: "A", text: "apply for a different scholarship" },
            { letter: "B", text: "extend for another period" },
            { letter: "C", text: "return the money to the foundation" },
            { letter: "D", text: "increase the amount of the award" }
          ],
          correct: "B"
        },
        {
          id: "deadline",
          sol: "11.RI.2.C",
          stem: "Which sentence makes clear that the deadline will be enforced strictly?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g11-ri-lease",
      family: "G11",
      title: "Maple Court Lease Summary",
      kind: "Functional text · 11.RI",
      blurb: "A plain-language summary handed to new tenants with their keys.",
      level: 2,
      passage:
        "<p><strong>MAPLE COURT APARTMENTS — PLAIN-LANGUAGE LEASE SUMMARY</strong> <em>(This summary does not replace the signed lease. Where the two differ, the lease controls.)</em></p>" +
        "<p>" + N(1) + "<strong>Term and rent.</strong> The lease runs for twelve months beginning on the move-in date, and rent of $1,150 is due on the first of each month. " +
        N(2) + "Rent received after the fifth carries a $50 late fee, and a second late payment within six months allows management to require rent by certified check. " +
        N(3) + "<strong>Deposit.</strong> A security deposit equal to one month's rent is held in a separate account and returned within thirty days of move-out, minus the cost of repairing damage beyond normal wear. " +
        N(4) + "Faded paint, small nail holes, and worn carpet are normal wear; a broken cabinet door or a stained wall is not. " +
        N(5) + "<strong>Repairs.</strong> Tenants report problems through the online portal, and management must respond within two business days for routine items and within twenty-four hours for anything involving heat, water, or locks. " +
        N(6) + "Tenants may not hire outside repair workers and deduct the cost from rent unless management has failed to respond within the required time and the tenant has given written notice. " +
        N(7) + "<strong>Guests and quiet hours.</strong> A guest staying more than fourteen nights in a month must be added to the lease. " +
        N(8) + "Quiet hours run from 10 p.m. to 7 a.m., and three documented noise complaints in a year are grounds for non-renewal. " +
        N(9) + "<strong>Ending early.</strong> A tenant who leaves before the term ends owes rent until a new tenant moves in or the term ends, whichever comes first, plus a $300 re-listing fee. " +
        N(10) + "Management agrees to advertise the unit promptly, since the sooner it is rented, the less the departing tenant owes." +
        "</p>",
      claims: [
        {
          id: "controls",
          sol: "11.RI.1.C",
          stem: "The note in the heading that the lease controls mainly warns readers that —",
          choices: [
            { letter: "A", text: "the summary has more legal weight than the signed lease" },
            { letter: "B", text: "the signed lease is the final authority if the two documents disagree" },
            { letter: "C", text: "management can change the summary at any time without notice" },
            { letter: "D", text: "tenants must sign both documents before they move in" }
          ],
          correct: "B"
        },
        {
          id: "furnace",
          sol: "11.RI.1.B",
          stem: "Based on sentences 5 and 6, a tenant whose furnace stops working may hire an outside repair worker and deduct the cost only if —",
          choices: [
            { letter: "A", text: "the repair bill comes to less than one month's rent" },
            { letter: "B", text: "the problem is first reported through the online portal" },
            { letter: "C", text: "management misses the twenty-four-hour deadline and has received written notice" },
            { letter: "D", text: "the tenant has lived in the unit for at least six months" }
          ],
          correct: "C"
        },
        {
          id: "deposit",
          sol: "11.RI.1.B",
          stem: "According to the summary, which of the following would be deducted from a security deposit?",
          choices: [
            { letter: "A", text: "Faded paint in the living room" },
            { letter: "B", text: "Small nail holes from hanging pictures" },
            { letter: "C", text: "Carpet worn from ordinary use" },
            { letter: "D", text: "A cabinet door that has been broken" }
          ],
          correct: "D"
        },
        {
          id: "organized",
          sol: "11.RI.2.A",
          stem: "How is the information in the summary organized?",
          choices: [
            { letter: "A", text: "In the order a tenant would encounter each issue during a single day" },
            { letter: "B", text: "By topic, with a heading that names each section's subject" },
            { letter: "C", text: "From the least expensive penalty to the most expensive one" },
            { letter: "D", text: "As a numbered list of steps for signing the lease" }
          ],
          correct: "B"
        },
        {
          id: "grounds",
          sol: "11.RV.1.C",
          stem: "In sentence 8, the phrase grounds for non-renewal most nearly means —",
          choices: [
            { letter: "A", text: "a reason management may decline to offer a new lease" },
            { letter: "B", text: "an office where noise complaints are filed" },
            { letter: "C", text: "a fee charged when a lease ends early" },
            { letter: "D", text: "a warning that rent will rise next year" }
          ],
          correct: "A"
        },
        {
          id: "sentence10",
          sol: "11.RI.2.C",
          stem: "Sentence 10 is included mainly to —",
          choices: [
            { letter: "A", text: "reassure a departing tenant that the cost of leaving early is limited" },
            { letter: "B", text: "warn departing tenants that the re-listing fee may increase" },
            { letter: "C", text: "explain how management screens and chooses new tenants" },
            { letter: "D", text: "describe where and how the empty unit will be advertised" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── ARGUMENT ───────────────────────── */
    {
      id: "g11-ri-referees",
      family: "G11",
      title: "A Whistle and a Wage",
      kind: "Argument · 11.RI",
      blurb: "An op-ed asking a youth soccer league to pay its teenage referees.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every fall Saturday, the Crestline youth soccer league fields forty games, and every one is officiated by a teenager who is paid nothing. " +
        N(2) + "The league calls this \"volunteer service,\" and for years it worked, because referees were mostly older siblings of players who would be at the field anyway. " +
        N(3) + "That is no longer true. " +
        N(4) + "Last season the league lost thirty-one of its fifty certified referees before October, and eleven games were played with a parent holding the whistle. " +
        N(5) + "The board's response was a recruitment poster. " +
        N(6) + "The problem is not that teenagers are unwilling to work; it is that the league is competing with employers who pay. " +
        N(7) + "A sixteen-year-old can earn $14 an hour scooping ice cream two blocks from the field, and no amount of gratitude closes that gap. " +
        N(8) + "Some board members argue that paying referees would force the league to raise registration fees, and they are right that the money must come from somewhere. " +
        N(9) + "But the figures are smaller than they sound. " +
        N(10) + "Paying each referee $25 a game for forty games comes to $1,000 a week, about $8 per player for a season, less than the cost of the participation medal every child already receives. " +
        N(11) + "The neighboring Bell Valley league began paying its referees two years ago and now has a waiting list of applicants. " +
        N(12) + "Paid referees also show up, stay for the full schedule, and, because they can be dismissed for poor work, take the training seriously. " +
        N(13) + "The league should approve the stipend at its next meeting and let the ice cream shop find its own workers." +
        "</p>",
      claims: [
        {
          id: "action",
          sol: "11.RI.1.A",
          stem: "Which sentence most directly states the action the author wants the league to take?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 13" }
          ],
          correct: "D"
        },
        {
          id: "otherleague",
          sol: "11.RI.2.C",
          stem: "Which sentence offers evidence that another league has succeeded by paying referees?",
          choices: [
            { letter: "A", text: "Sentence 4" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "C"
        },
        {
          id: "concern",
          sol: "11.RI.2.C",
          stem: "The author responds to the board members' concern in sentence 8 by —",
          choices: [
            { letter: "A", text: "denying that registration fees would change at all" },
            { letter: "B", text: "showing that the cost per player is small" },
            { letter: "C", text: "suggesting that parents continue to referee for free" },
            { letter: "D", text: "proposing that the participation medals be made cheaper" }
          ],
          correct: "B"
        },
        {
          id: "icecream",
          sol: "11.RI.2.B",
          stem: "The author mentions the ice cream shop in sentences 7 and 13 mainly to —",
          choices: [
            { letter: "A", text: "illustrate the paid work that competes with refereeing" },
            { letter: "B", text: "criticize teenagers for choosing easy jobs over sports" },
            { letter: "C", text: "suggest that the league open its own concession stand" },
            { letter: "D", text: "praise local businesses that hire high school students" }
          ],
          correct: "A"
        },
        {
          id: "stipend",
          sol: "11.RV.1.C",
          stem: "In sentence 13, the word stipend most nearly means —",
          choices: [
            { letter: "A", text: "a training program" },
            { letter: "B", text: "a written schedule" },
            { letter: "C", text: "a fixed payment" },
            { letter: "D", text: "a penalty for absence" }
          ],
          correct: "C"
        },
        {
          id: "poster",
          sol: "11.RI.1.C",
          stem: "The author's tone in sentence 5 is best described as —",
          choices: [
            { letter: "A", text: "hopeful" },
            { letter: "B", text: "dismissive" },
            { letter: "C", text: "grateful" },
            { letter: "D", text: "confused" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-ri-attendance",
      family: "G11",
      title: "The Trophy for Showing Up",
      kind: "Argument · 11.RI",
      blurb: "An essay arguing that perfect attendance awards reward the wrong thing.",
      level: 3,
      passage:
        "<p>" + N(1) + "Each June, our district hands out perfect attendance certificates with the same ceremony as honor roll, and each June I wonder what, exactly, we are rewarding. " +
        N(2) + "The award does not measure effort, learning, or growth; it measures whether a body occupied a chair on 180 specific days, which depends less on character than on immune systems, family cars, and luck. " +
        N(3) + "Worse, the award punishes the sensible decision. " +
        N(4) + "A student with a fever who stays home protects thirty classmates and loses the certificate; one who comes in sick keeps the certificate and shares the fever. " +
        N(5) + "Defenders argue that the award builds habits, and there is something to this: attendance predicts graduation more reliably than almost any other single number. " +
        N(6) + "But a correlation is not a lever. " +
        N(7) + "Students who attend regularly graduate because the conditions that get them to school — stable housing, an adult at home in the morning, a school they do not dread — also get them to a diploma. " +
        N(8) + "A certificate changes none of those conditions. " +
        N(9) + "The evidence on incentives is not kind to the award either. " +
        N(10) + "When a large district in another state offered prizes for perfect attendance, absences did not fall; in one study, award recipients actually missed more days the following year, apparently because the recognition made them feel they had done enough. " +
        N(11) + "If we want students in seats, the tools are unglamorous: a phone call home on the second absence, a nurse on duty every day, a bus that arrives. " +
        N(12) + "Give the ceremony to the students who came back after being gone, and retire the trophy for never leaving." +
        "</p>",
      claims: [
        {
          id: "position",
          sol: "11.RI.1.A",
          stem: "Which statement best summarizes the author's position?",
          choices: [
            { letter: "A", text: "Perfect attendance awards reward luck, discourage sensible choices, and do not improve attendance." },
            { letter: "B", text: "Attendance matters more than grades, so the award should be expanded to more students." },
            { letter: "C", text: "Students who miss school should be given the same certificates as those who attend." },
            { letter: "D", text: "Districts should replace attendance awards with cash prizes that have proven effective." }
          ],
          correct: "A"
        },
        {
          id: "select2",
          sol: "11.RI.2.C",
          stem: "Select TWO sentences that describe a study or a statistical finding.",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 10" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "lever",
          sol: "11.RI.2.B",
          stem: "In sentence 6, the statement a correlation is not a lever mainly means that —",
          choices: [
            { letter: "A", text: "attendance and graduation are unrelated in most districts" },
            { letter: "B", text: "a link between two things does not mean changing one will change the other" },
            { letter: "C", text: "the district's own data on graduation rates is unreliable" },
            { letter: "D", text: "certificates should be replaced with more practical tools" }
          ],
          correct: "B"
        },
        {
          id: "concession",
          sol: "11.RI.2.C",
          stem: "The author's concession in sentence 5 strengthens the argument mainly by —",
          choices: [
            { letter: "A", text: "showing that the defenders of the award are being dishonest" },
            { letter: "B", text: "proving that attendance has no connection to graduation" },
            { letter: "C", text: "granting the other side's strongest point before explaining its limits" },
            { letter: "D", text: "shifting the discussion from graduation rates to immune systems" }
          ],
          correct: "C"
        },
        {
          id: "unglamorous",
          sol: "11.RV.1.C",
          stem: "In sentence 11, the word unglamorous most nearly means —",
          choices: [
            { letter: "A", text: "expensive and untested" },
            { letter: "B", text: "illegal in most districts" },
            { letter: "C", text: "popular with students" },
            { letter: "D", text: "plain and unexciting" }
          ],
          correct: "D"
        },
        {
          id: "cameback",
          sol: "11.RI.1.C",
          stem: "The proposal in the final sentence reveals that the author values —",
          choices: [
            { letter: "A", text: "perseverance after setbacks over unbroken streaks" },
            { letter: "B", text: "public ceremonies over paper certificates" },
            { letter: "C", text: "strict punishment over public recognition" },
            { letter: "D", text: "honor roll grades over attendance records" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
