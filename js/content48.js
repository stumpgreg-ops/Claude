/* SOL Labyrinth — Grade 9 long packs (expansion file 48, VA 9.RL / 9.RI / 9.RV / 9.DSR): inventors and patents,
 * a marching band, a botanical garden and kayaking. Original text only; no VDOE / copyrighted material.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LITERARY ───────────────────────── */
    {
      id: "g9-rl-c48-halfstep",
      family: "G9",
      title: "The Half-Step",
      kind: "Literary · 9.RL",
      blurb: "A freshman trumpet player keeps landing a hair behind ninety other marchers, and nobody can tell her why.",
      level: 2,
      passage:
        "<p>" + N(1) + "For three weeks, Ifeoma Okafor had been landing her left foot a hair after everyone else's. " +
        N(2) + "It happened in only one place: the company front, the moment near the end of the show when all ninety members of the Westbrook High marching band stepped forward in a single line and played the loudest chord of the night. " +
        N(3) + "From the bleachers, no one could see it. " +
        N(4) + "From the field, it felt like a pebble in her shoe that only she could feel.</p>" +
        "<p>" + N(5) + "\"You're rushing to fix it, and then you're late again,\" said Rafael Quintero, the trumpet section leader, after Tuesday's rehearsal. " +
        N(6) + "He was a senior who wore his visor backward, kept spare valve oil in every pocket, and never raised his voice. " +
        N(7) + "\"Count out loud if you have to.\" " +
        N(8) + "So she counted out loud, and then under her breath, and then in her head while brushing her teeth. " +
        N(9) + "She practiced the step in her driveway with a metronome clicking on the porch rail, and in the driveway she was perfect, step after step, until her little brother begged her to turn the clicking off.</p>" +
        "<p>" + N(10) + "On the field she was not. " +
        N(11) + "By Thursday, the director, Mr. Haldane, had started glancing in her direction during the company front, and his glance felt heavier than any instrument she had ever carried. " +
        N(12) + "Ifeoma began to dread the last forty seconds of the show the way some people dread the dentist's chair. " +
        N(13) + "She wondered whether giving a freshman a spot on the front line had been a mistake, and whether someone steadier should have it instead.</p>" +
        "<p>" + N(14) + "The answer arrived during Friday's walk-through, when the drum major, Tasha Bell, stopped the band and made everyone hold the final chord without moving. " +
        N(15) + "In that pause, Ifeoma heard something she had never noticed: a second, fainter chord bouncing back from the concrete wall of the press box across the field. " +
        N(16) + "It was the band's own sound, returning a half-beat late. " +
        N(17) + "She had been listening so hard for the beat that she had been marching to its echo.</p>" +
        "<p>" + N(18) + "That night, under the lights, she did not count out loud. " +
        N(19) + "She kept her eyes on Tasha's white gloves, rising and falling above the podium, and let the echo go by like a car passing on another street. " +
        N(20) + "Her left foot hit the turf with ninety others. " +
        N(21) + "Afterward, Rafael bumped her shoulder with his. " +
        N(22) + "\"What changed?\" he asked. " +
        N(23) + "\"I stopped listening,\" she said, and then, seeing his face, she laughed. " +
        N(24) + "\"I mean I started watching.\"</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the story about Ifeoma's marching problem?",
          choices: [
            { letter: "A", text: "Hard work in practice always carries over to a performance." },
            { letter: "B", text: "Solving a problem sometimes means changing what you pay attention to." },
            { letter: "C", text: "Leaders should correct mistakes privately rather than in public." },
            { letter: "D", text: "New members should not be placed in the most visible roles." }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Ifeoma in the first three paragraphs?",
          choices: [
            { letter: "A", text: "She is careless about the details of her marching." },
            { letter: "B", text: "She is openly angry at her section leader's advice." },
            { letter: "C", text: "She is confident that the problem lies with others." },
            { letter: "D", text: "She is determined but growing doubtful of herself." }
          ],
          correct: "D"
        },
        {
          id: "pebble",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 4, the author compares Ifeoma's timing problem to a pebble in a shoe mainly to show that it is —",
          choices: [
            { letter: "A", text: "small but constantly bothersome to her" },
            { letter: "B", text: "painful enough to stop her from marching" },
            { letter: "C", text: "something the audience notices right away" },
            { letter: "D", text: "a problem caused by her new uniform" }
          ],
          correct: "A"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the stadium setting shape the central problem of \"The Half-Step\"?",
          choices: [
            { letter: "A", text: "The bleachers block the director's view of the trumpets." },
            { letter: "B", text: "The turf is too slick for the band to step together." },
            { letter: "C", text: "A wall sends back a delayed sound that throws off her step." },
            { letter: "D", text: "The field is too wide for the band to hear Mr. Haldane." }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the story stays close to Ifeoma's own thoughts and senses, the reader —",
          choices: [
            { letter: "A", text: "knows about the echo long before Ifeoma does" },
            { letter: "B", text: "learns exactly what Mr. Haldane thinks of her" },
            { letter: "C", text: "shares her confusion until she hears the echo" },
            { letter: "D", text: "sees the show as the crowd in the stands sees it" }
          ],
          correct: "C"
        },
        {
          id: "glance",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer from sentence 11 that Ifeoma —",
          choices: [
            { letter: "A", text: "feels pressure from the director's attention even though he says nothing" },
            { letter: "B", text: "expects Mr. Haldane to give her a heavier instrument to carry" },
            { letter: "C", text: "believes the director is really watching a different player" },
            { letter: "D", text: "is relieved that the director has finally noticed her effort" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "Ifeoma's final lines in sentences 23 and 24 create a tone that is best described as —",
          choices: [
            { letter: "A", text: "bitter and defensive" },
            { letter: "B", text: "nervous and uncertain" },
            { letter: "C", text: "formal and serious" },
            { letter: "D", text: "lighthearted and relieved" }
          ],
          correct: "D"
        },
        {
          id: "car",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 19, the comparison of the echo to a car passing on another street mainly suggests that Ifeoma —",
          choices: [
            { letter: "A", text: "can no longer hear the echo at all during the show" },
            { letter: "B", text: "notices the echo but no longer lets it guide her" },
            { letter: "C", text: "is distracted by traffic noise outside the stadium" },
            { letter: "D", text: "wishes the band could perform somewhere quieter" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c48-heron-island",
      family: "G9",
      title: "The Back Seat",
      kind: "Literary · 9.RL",
      blurb: "Priya gets the steering seat of a tandem kayak, and the lake has opinions about it.",
      level: 1,
      passage:
        "<p>" + N(1) + "The rental kayak was bright orange and twelve feet long, and it had two seats, which was exactly the problem. " +
        N(2) + "Priya Raman wanted the back one. " +
        N(3) + "\"Whoever sits in back steers,\" the woman at the Lake Corran boathouse had explained, handing them two paddles and two life jackets. " +
        N(4) + "\"The person in front sets the pace.\" " +
        N(5) + "Priya's father had shrugged and climbed into the front seat without a word, which surprised her, because he usually liked to be in charge of the car, the grill, and the television remote.</p>" +
        "<p>" + N(6) + "Their goal was Heron Island, a small hump of pines about a mile across the water, where the boathouse map promised a picnic table and a trail to an old stone fire tower. " +
        N(7) + "For the first ten minutes, the kayak traced a path that looked like a sleepy snake. " +
        N(8) + "Priya would pull hard on the left, and the bow would swing too far right; she would pull hard on the right, and it would swing too far left. " +
        N(9) + "\"We're visiting every part of the lake,\" her father said cheerfully, waving his paddle at a family of ducks they had now passed three times. " +
        N(10) + "Priya did not answer. " +
        N(11) + "Her face felt hot, and not from the sun.</p>" +
        "<p>" + N(12) + "Halfway across, the wind began to push from the west, raising small, choppy waves that slapped against the hull and sent cold spray over the deck and onto Priya's knees. " +
        N(13) + "The kayak felt unsteady, as if the lake were testing it. " +
        N(14) + "Priya noticed that every time she fought the wind with big, angry strokes, digging the blade deep and yanking it back, the boat wobbled more and drifted farther off course. " +
        N(15) + "So she tried something different. " +
        N(16) + "She made her strokes shorter and smoother, and she watched the island instead of the water right in front of her. " +
        N(17) + "Slowly, the bow stopped wandering. " +
        N(18) + "It pointed at the pines and stayed there, like a compass needle that had finally made up its mind.</p>" +
        "<p>" + N(19) + "Her father had matched her rhythm without being asked, his paddle dipping when hers did. " +
        N(20) + "When the kayak scraped onto the island's rocky beach, he climbed out, stretched, and looked back at the long, straight wake still fading behind them on the gray-green water, a line so neat it could have been drawn with a ruler. " +
        N(21) + "\"Good line,\" he said. " +
        N(22) + "Priya pulled her paddle across her lap. " +
        N(23) + "\"Why did you let me take the back?\" she asked. " +
        N(24) + "He smiled and handed her a water bottle. " +
        N(25) + "\"Because I already know how to steer,\" he said. " +
        N(26) + "\"I wanted to see you figure it out.\"</p>",
      claims: [
        {
          id: "setup",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "In sentence 3, the boathouse worker's explanation is important to the plot mainly because it —",
          choices: [
            { letter: "A", text: "warns the family that Lake Corran can be dangerous" },
            { letter: "B", text: "shows that the worker does not trust Priya to paddle" },
            { letter: "C", text: "sets up the question of who controls the kayak's path" },
            { letter: "D", text: "explains why the rental kayak is painted bright orange" }
          ],
          correct: "C"
        },
        {
          id: "father",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentence 5, readers can infer that Mr. Raman's choice of seat is —",
          choices: [
            { letter: "A", text: "unusual for him and made on purpose" },
            { letter: "B", text: "the result of misunderstanding the worker" },
            { letter: "C", text: "a sign that he is afraid of steering" },
            { letter: "D", text: "a way to avoid paddling very hard" }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "How does Priya change between paragraph 2 and paragraph 3?",
          choices: [
            { letter: "A", text: "She grows angrier at her father for joking about the trip." },
            { letter: "B", text: "She gives up steering and lets the wind choose the path." },
            { letter: "C", text: "She loses interest in the island and turns her attention to the lake." },
            { letter: "D", text: "She moves from frustrated struggling to calm, careful adjusting." }
          ],
          correct: "D"
        },
        {
          id: "snake",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "The comparison of the kayak's path to a sleepy snake in sentence 7 suggests that the boat is —",
          choices: [
            { letter: "A", text: "moving too slowly to ever reach the island" },
            { letter: "B", text: "moving in a wandering, curving line" },
            { letter: "C", text: "in danger of tipping over in the waves" },
            { letter: "D", text: "drifting backward toward the boathouse" }
          ],
          correct: "B"
        },
        {
          id: "unsteady",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "In sentence 13, the prefix un- in unsteady signals that the kayak is —",
          choices: [
            { letter: "A", text: "not holding a firm balance" },
            { letter: "B", text: "steady again after a wobble" },
            { letter: "C", text: "steadier than it was before" },
            { letter: "D", text: "built to stay steady in wind" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the narrator stays close to Priya throughout the trip to Heron Island, the reader —",
          choices: [
            { letter: "A", text: "knows from the start why her father chose the front" },
            { letter: "B", text: "hears what the boathouse worker thinks of the family" },
            { letter: "C", text: "learns her feelings but waits to learn her father's reasons" },
            { letter: "D", text: "sees the trip mainly through her father's memories" }
          ],
          correct: "C"
        },
        {
          id: "compass",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 18, comparing the bow to a compass needle that had finally made up its mind mainly shows that —",
          choices: [
            { letter: "A", text: "the kayak has turned north, away from the island" },
            { letter: "B", text: "the kayak now holds a steady course toward the island" },
            { letter: "C", text: "Priya has decided to paddle back to the boathouse" },
            { letter: "D", text: "the west wind has finally stopped blowing" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme do Mr. Raman's final words in sentences 25 and 26 best support?",
          choices: [
            { letter: "A", text: "Parents should always take control in risky situations." },
            { letter: "B", text: "Strength matters more than experience when paddling." },
            { letter: "C", text: "Winning an argument matters less than reaching a goal." },
            { letter: "D", text: "People often learn best when given room to solve problems." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c48-prior-art",
      family: "G9",
      title: "Prior Art",
      kind: "Literary · 9.RL",
      blurb: "Mateo is one form away from patenting his clothespin when his great-aunt brings down an old notebook.",
      level: 3,
      passage:
        "<p>" + N(1) + "Mateo Ferreira had spent most of October building a better clothespin, and by November he was ready to make it official. " +
        N(2) + "His version had a spring hidden inside a sleeve of molded plastic, so it could not pinch fingers or snap loose in the wind, and it cost, by his math, eleven cents to make. " +
        N(3) + "He had a drawing, a prototype printed at the public library, and a website open on his laptop that explained how to apply for a patent. " +
        N(4) + "All that remained was the paperwork, which he planned to finish before dinner.</p>" +
        "<p>" + N(5) + "His great-aunt Celeste, who lived in the apartment above the family's hardware store, came down at four o'clock for her coffee and found him hunched over the screen. " +
        N(6) + "She read over his shoulder for a long minute. " +
        N(7) + "Then, without a word, she climbed back upstairs, and Mateo heard the scrape of a trunk being dragged across her floor. " +
        N(8) + "When she returned, she set a spiral notebook beside his keyboard, its cardboard cover as soft as cloth from years of handling. " +
        N(9) + "On page thirty-one, in faded blue ink and dated 1987, was a clothespin with a spring hidden inside a sleeve.</p>" +
        "<p>" + N(10) + "Mateo stared at the page until the lines blurred. " +
        N(11) + "The website had a term for this, and he had read it only an hour earlier: prior art, meaning any earlier evidence that an idea already existed. " +
        N(12) + "His clothespin was not new. " +
        N(13) + "It had been sleeping in a trunk for nearly forty years, waiting to embarrass him. " +
        N(14) + "\"Why didn't you patent it?\" he asked, and his voice came out sharper than he intended.</p>" +
        "<p>" + N(15) + "Celeste shrugged. " +
        N(16) + "\"I was working two jobs, and the forms cost money I didn't have,\" she said. " +
        N(17) + "\"Besides, mine never worked. " +
        N(18) + "The spring rusted in a week.\" " +
        N(19) + "She tapped his prototype, which had hung on the clothesline outside the store through two rainstorms without a single orange spot. " +
        N(20) + "\"How did you stop it?\" " +
        N(21) + "Mateo explained the coated wire he had found in the store's fishing aisle, and as he talked, he noticed that his great-aunt was writing in the margin of her old notebook, adding notes beside a drawing she had abandoned before he was born.</p>" +
        "<p>" + N(22) + "They worked at the counter until the streetlights came on. " +
        N(23) + "Celeste remembered a version of the hinge she had tried and discarded; Mateo saw why it had failed and how it might not. " +
        N(24) + "The two notebooks, hers in ink and his on a screen, seemed to be talking to each other across forty years. " +
        N(25) + "By nine o'clock, the drawing no longer looked like his clothespin or hers. " +
        N(26) + "It had a wider grip, a drainage slot, and a coated spring, and neither of them could have drawn it alone. " +
        N(27) + "When his mother called them for a very late dinner, Mateo closed the patent website without finishing the forms. " +
        N(28) + "He was no longer sure whose name belonged on them, and to his surprise, the question did not bother him at all.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the ending of Mateo's story best develop?",
          choices: [
            { letter: "A", text: "New ideas often grow from earlier attempts that people share." },
            { letter: "B", text: "Inventors should protect their ideas before showing anyone." },
            { letter: "C", text: "Old notebooks are more valuable than modern websites." },
            { letter: "D", text: "Young people invent more successfully than adults do." }
          ],
          correct: "A"
        },
        {
          id: "sharp",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sentence 14 mainly shows that, at this moment, Mateo feels —",
          choices: [
            { letter: "A", text: "curious about how patents worked in 1987" },
            { letter: "B", text: "proud that his great-aunt shared his idea" },
            { letter: "C", text: "hurt and defensive about losing his claim" },
            { letter: "D", text: "worried that his great-aunt is unwell" }
          ],
          correct: "C"
        },
        {
          id: "sleeping",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 13, the author describes the old clothespin drawing as sleeping in a trunk mainly to suggest that the idea —",
          choices: [
            { letter: "A", text: "was too fragile to be taken out and handled" },
            { letter: "B", text: "had existed, unused and unseen, for many years" },
            { letter: "C", text: "was something Celeste had tried to hide from Mateo" },
            { letter: "D", text: "had lost all its value because it was so old" }
          ],
          correct: "B"
        },
        {
          id: "cloth",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "The image in sentence 8 of a notebook cover as soft as cloth mainly suggests that —",
          choices: [
            { letter: "A", text: "the notebook was made of an unusual material" },
            { letter: "B", text: "Celeste had stored the notebook somewhere damp" },
            { letter: "C", text: "the notebook had been bought fairly recently" },
            { letter: "D", text: "Celeste had returned to her notebook again and again" }
          ],
          correct: "D"
        },
        {
          id: "store",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the family's hardware store contribute to the resolution of the conflict in \"Prior Art\"?",
          choices: [
            { letter: "A", text: "Its busy counter keeps Mateo from finishing the forms." },
            { letter: "B", text: "Its customers had already bought Celeste's 1987 design." },
            { letter: "C", text: "Its upstairs apartment keeps Celeste away from the work." },
            { letter: "D", text: "Its fishing aisle supplied the wire that fixed the rust." }
          ],
          correct: "D"
        },
        {
          id: "hunched",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "Sentence 5 says Celeste found Mateo hunched over the screen. Compared with sitting at the screen, the word hunched suggests that he is —",
          choices: [
            { letter: "A", text: "relaxed and casually browsing" },
            { letter: "B", text: "bent forward in intense focus" },
            { letter: "C", text: "sitting up tall with pride" },
            { letter: "D", text: "tired and ready to give up" }
          ],
          correct: "B"
        },
        {
          id: "talking",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 24, the author says the two notebooks seemed to be talking to each other across forty years mainly to show that —",
          choices: [
            { letter: "A", text: "Celeste and Mateo were reading their notes aloud" },
            { letter: "B", text: "the old notebook held a secret message for Mateo" },
            { letter: "C", text: "the old and new designs were improving each other" },
            { letter: "D", text: "the forty-year-old ideas were hard to understand" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the final sentence of \"Prior Art\" (sentence 28) is best described as —",
          choices: [
            { letter: "A", text: "content and quietly surprised" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "anxious and uncertain" },
            { letter: "D", text: "playful and teasing" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── INFORMATIONAL ───────────────────────── */
    {
      id: "g9-ri-c48-palm-house",
      family: "G9",
      title: "The Building That Breathes",
      kind: "Informational · 9.RI",
      blurb: "How a 1911 glasshouse keeps a rainforest alive through northern winters, and why it nearly failed.",
      level: 2,
      passage:
        "<p>" + N(1) + "Visitors who step into the Palm House at the Alder Point Botanical Garden usually do the same thing first: they take off their jackets. " +
        N(2) + "Even in January, the air inside the tall glass building stays near 75 degrees Fahrenheit, and the humidity hovers around 80 percent, close to the conditions of a tropical rainforest. " +
        N(3) + "What most visitors never notice is that the building is doing a great deal of work to stay that way. " +
        N(4) + "A glasshouse, it turns out, is less like a box and more like a set of lungs.</p>" +
        "<p>" + N(5) + "The Palm House was built in 1911 with a simple but clever design. " +
        N(6) + "Rows of hinged windows called vents line both the base of the walls and the peak of the roof. " +
        N(7) + "When the sun heats the air inside, that warm air rises and escapes through the roof vents, pulling cooler air in through the low ones. " +
        N(8) + "Gardeners once opened and closed these vents by hand, cranking long iron rods several times a day. " +
        N(9) + "Today, sensors read the temperature every five minutes and signal small motors to adjust each vent, but the principle has not changed in more than a century.</p>" +
        "<p>" + N(10) + "By 2019, however, the building was struggling. " +
        N(11) + "Rust had frozen dozens of vents in place, and a survey found that nearly one in five glass panes was cracked or missing. " +
        N(12) + "On hot summer afternoons, temperatures near the roof climbed above 100 degrees, and several of the garden's oldest palms showed scorched, browning fronds. " +
        N(13) + "The garden closed the Palm House for a two-year restoration that replaced 2,400 panes and rebuilt every vent hinge. " +
        N(14) + "According to the garden's records, the highest summer temperature measured near the roof dropped by 14 degrees in the first year after the work was finished.</p>" +
        "<p>" + N(15) + "Heat is only part of the challenge. " +
        N(16) + "Many tropical plants depend on steady moisture, so the restored building also includes a misting system that sprays a fine fog through nozzles hidden in the iron beams. " +
        N(17) + "The fog does more than water the leaves; as it evaporates, it absorbs heat and cools the air, much as sweat cools skin. " +
        N(18) + "Head horticulturist Delphine Arceneaux describes the system as \"the building's way of sweating on purpose.\"</p>" +
        "<p>" + N(19) + "Some visitors ask whether it is worth so much effort to keep palms alive in a place where snow falls each winter. " +
        N(20) + "Arceneaux points out that the Palm House holds several species that are increasingly rare in the wild, including a fan palm whose native forest has shrunk sharply in recent decades. " +
        N(21) + "Seeds collected here have been shared with other gardens, creating what she calls \"a backup copy\" of plants that could someday disappear. " +
        N(22) + "In her view, the building is not only a display but also a kind of insurance. " +
        N(23) + "Whether visitors come for science or simply to escape the cold, the Palm House rewards them with something rare: a piece of the tropics that keeps itself alive, one breath at a time.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the article about the Palm House?",
          choices: [
            { letter: "A", text: "The Palm House was built in 1911 and still uses its first vents." },
            { letter: "B", text: "Tropical plants should be grown only in their native forests." },
            { letter: "C", text: "Most visitors come to Alder Point to escape cold weather." },
            { letter: "D", text: "The Palm House depends on design and upkeep to keep rare plants alive." }
          ],
          correct: "D"
        },
        {
          id: "lungs",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author compares the glasshouse to a set of lungs in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "suggest that the building is unhealthy and needs repair" },
            { letter: "B", text: "introduce the idea that the building keeps moving air in and out" },
            { letter: "C", text: "show that plants breathe in exactly the same way people do" },
            { letter: "D", text: "explain why visitors take off their jackets at the door" }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the article, why did temperatures near the Palm House roof climb so high before the restoration?",
          choices: [
            { letter: "A", text: "Rusted vents could no longer open to let hot air escape." },
            { letter: "B", text: "The misting system sprayed far too much water on the plants." },
            { letter: "C", text: "The sensors measured the temperature only once a day." },
            { letter: "D", text: "Visitors left the doors open on summer afternoons." }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The article about the Alder Point glasshouse is mainly organized by —",
          choices: [
            { letter: "A", text: "comparing the Palm House with several other famous glasshouses" },
            { letter: "B", text: "listing the plants in the order that visitors walk past them" },
            { letter: "C", text: "explaining how it works, then a problem and repair, then its value" },
            { letter: "D", text: "telling the garden's full history in order from 1911 to today" }
          ],
          correct: "C"
        },
        {
          id: "frozen",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 11, the statement that rust had frozen dozens of vents in place means the vents were —",
          choices: [
            { letter: "A", text: "covered in ice during the winter" },
            { letter: "B", text: "stuck so that they could not move" },
            { letter: "C", text: "cooled below a safe temperature" },
            { letter: "D", text: "removed and stored for later repair" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence provides the strongest evidence that the Palm House restoration achieved its goal?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "D"
        },
        {
          id: "hort",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word horticulturist in sentence 18 contains the Latin root hort, meaning garden. A horticulturist is most likely a person who —",
          choices: [
            { letter: "A", text: "specializes in growing and caring for plants" },
            { letter: "B", text: "designs and builds large glass buildings" },
            { letter: "C", text: "studies long-term patterns in the weather" },
            { letter: "D", text: "leads tours for visitors to the garden" }
          ],
          correct: "A"
        },
        {
          id: "factop",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the Palm House article presents an interpretation rather than a measurable fact?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 22" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c48-patent-bargain",
      family: "G9",
      title: "The Patent Bargain",
      kind: "Informational · 9.RI",
      blurb: "Why an inventor would publish every secret of a design, and what the public gives back.",
      level: 3,
      passage:
        "<p>" + N(1) + "Suppose a carpenter invents a hinge that never squeaks. " +
        N(2) + "She faces a hard choice. " +
        N(3) + "If she keeps the design secret, she can sell hinges for as long as no one figures out how they work, but the moment a rival takes one apart, her advantage disappears. " +
        N(4) + "If she shares the design openly, anyone can copy it tomorrow. " +
        N(5) + "A patent is a third path, and it rests on an unusual bargain between an inventor and the public.</p>" +
        "<p>" + N(6) + "Under that bargain, the inventor agrees to explain the invention fully, in writing and drawings clear enough that a skilled person could build it. " +
        N(7) + "In exchange, the government grants the inventor the right to stop others from making, using, or selling the invention for a limited time, which in the United States is generally twenty years from the date the application is filed. " +
        N(8) + "When that time ends, the invention passes into the public domain, and anyone may use it freely. " +
        N(9) + "The secret, in other words, is not locked away; it is published, lent out, and eventually given back to everyone.</p>" +
        "<p>" + N(10) + "Not every idea qualifies. " +
        N(11) + "Patent examiners, the officials who review applications, ask whether an invention is new, whether it is useful, and whether it would have been obvious to someone skilled in that field. " +
        N(12) + "The last test is often the hardest to pass. " +
        N(13) + "A squeakless hinge might be new, but if it simply adds oil to an ordinary hinge, an examiner could reasonably decide that any carpenter would have thought of that. " +
        N(14) + "Examiners also search earlier patents, journals, and products for what is called prior art, evidence that the idea already existed before the applicant claimed it.</p>" +
        "<p>" + N(15) + "The system has changed in revealing ways over time. " +
        N(16) + "For much of the 1800s, American applicants were expected to submit a small working model along with their papers, and the patent office filled hallways with thousands of tiny machines. " +
        N(17) + "The requirement was eventually dropped as the models piled up and storing them became a burden; detailed drawings proved just as useful and far easier to file. " +
        N(18) + "Today, applications are submitted electronically, and searches that once took weeks among paper files can take minutes.</p>" +
        "<p>" + N(19) + "Critics argue that the system can be slow and expensive, and that large companies with many lawyers may use patents to block smaller competitors rather than to reward creativity. " +
        N(20) + "Supporters reply that without some protection, few people would invest years in developing an idea that could be copied the day it appeared. " +
        N(21) + "Both sides tend to agree on one point: the published descriptions themselves have become an enormous library of human ingenuity. " +
        N(22) + "Even an inventor who never files an application can learn from that library and perhaps, after studying a hundred hinges, design a better one.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of \"The Patent Bargain\"?",
          choices: [
            { letter: "A", text: "Patents mainly help large companies block smaller rivals." },
            { letter: "B", text: "Inventors are always wiser to keep their designs secret." },
            { letter: "C", text: "A patent trades full disclosure for a limited time of protection." },
            { letter: "D", text: "The patent office once filled its halls with small models." }
          ],
          correct: "C"
        },
        {
          id: "hinge",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author begins with the example of the carpenter's hinge in sentences 1–4 mainly to —",
          choices: [
            { letter: "A", text: "make the choice that patents address concrete and easy to picture" },
            { letter: "B", text: "prove that hinges are the most commonly patented invention" },
            { letter: "C", text: "argue that keeping a design secret is the wisest plan" },
            { letter: "D", text: "describe how carpenters helped to write early patent law" }
          ],
          correct: "A"
        },
        {
          id: "ends",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the article, what happens to a patented invention when its protection period ends?",
          choices: [
            { letter: "A", text: "The inventor must apply again to keep control of it." },
            { letter: "B", text: "The government takes ownership of the design." },
            { letter: "C", text: "Its drawings are removed from the public record." },
            { letter: "D", text: "It enters the public domain for anyone to use." }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Sentences 15–18 of the patent article are organized mainly to show —",
          choices: [
            { letter: "A", text: "a problem with patent examiners and its solution" },
            { letter: "B", text: "how the patent process has changed from past to present" },
            { letter: "C", text: "a comparison of American and foreign patent laws" },
            { letter: "D", text: "the steps an inventor follows to file an application" }
          ],
          correct: "B"
        },
        {
          id: "burden",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 17, the word burden most nearly means —",
          choices: [
            { letter: "A", text: "a legal requirement" },
            { letter: "B", text: "a valuable collection" },
            { letter: "C", text: "a public display" },
            { letter: "D", text: "a heavy load to manage" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the patent article reports a disputed viewpoint rather than a settled fact?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 16" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "C"
        },
        {
          id: "library",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written collection instead of library in sentence 21. Compared with collection, the word library suggests that the patent descriptions are —",
          choices: [
            { letter: "A", text: "old and rarely consulted" },
            { letter: "B", text: "organized and open for learning" },
            { letter: "C", text: "private and carefully guarded" },
            { letter: "D", text: "messy and difficult to search" }
          ],
          correct: "B"
        },
        {
          id: "support",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the claim in sentence 12 that the obviousness test is often the hardest to pass?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "A"
        }
      ]
    },
    /* ───────────────────────── ARGUMENT ───────────────────────── */
    {
      id: "g9-ri-c48-count-band",
      family: "G9",
      title: "Make Band Count",
      kind: "Argument · 9.RI",
      blurb: "A student columnist argues that a full marching season should earn physical education credit.",
      level: 2,
      passage:
        "<p>" + N(1) + "Every August, while most students at Lindell High are still sleeping in, the marching band is on the practice field at 7:30 a.m., carrying instruments that weigh up to thirty-five pounds through drills that last three hours. " +
        N(2) + "By the first football game, a typical member has marched well over a hundred miles. " +
        N(3) + "Yet when band members build their schedules, they must still fit in a full year of physical education, as if they had spent the summer on a couch. " +
        N(4) + "Lindell should allow students who complete a full marching season to earn their physical education credit through band.</p>" +
        "<p>" + N(5) + "The physical demands of marching are real and measurable. " +
        N(6) + "Last fall, our band director asked twenty volunteers to wear step-counting watches during rehearsals. " +
        N(7) + "On rehearsal days, they averaged just over 14,000 steps, compared with about 6,500 steps on days without rehearsal. " +
        N(8) + "Members also hold their instruments at shoulder height for long stretches, which builds the kind of upper-body endurance that a PE unit on weight training aims to develop. " +
        N(9) + "Anyone who has watched a sousaphone player climb the bleachers after a halftime show knows this is not a relaxing hobby.</p>" +
        "<p>" + N(10) + "Changing the policy would also free up room in crowded schedules. " +
        N(11) + "Many band members take advanced courses, and a required PE class can push out an elective such as a second language or a computer science course. " +
        N(12) + "Three neighboring districts already allow some form of band-for-PE substitution, and their students have not shown any drop in fitness test results.</p>" +
        "<p>" + N(13) + "Some teachers worry that band students would miss important lessons on health, nutrition, and lifelong fitness that PE classes include. " +
        N(14) + "That concern is fair. " +
        N(15) + "However, it has a simple solution: students who substitute band could complete the health unit online or in a short summer session, as students at one of those neighboring schools already do. " +
        N(16) + "Others argue that allowing band would open the door for every club to ask for PE credit. " +
        N(17) + "But few clubs require hours of sustained physical activity each week, and the school could set a clear standard, such as a minimum number of rehearsal hours, that any activity would have to meet.</p>" +
        "<p>" + N(18) + "Band members are not asking to skip exercise; they are asking for the exercise they already do to be counted. " +
        N(19) + "A school that truly values both the arts and physical health should recognize that marching band delivers both at once. " +
        N(20) + "The school board meets on March 3 in the Lindell library. " +
        N(21) + "Students, parents, and teachers who agree should attend that meeting and ask the board to make band count.</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence best states the columnist's central claim about marching band and PE credit?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "B"
        },
        {
          id: "measure",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which detail provides the most measurable evidence that marching is physically demanding?",
          choices: [
            { letter: "A", text: "a sousaphone player climbing the bleachers" },
            { letter: "B", text: "the band practicing at 7:30 in the morning" },
            { letter: "C", text: "an average of over 14,000 steps on rehearsal days" },
            { letter: "D", text: "the statement that band is not a relaxing hobby" }
          ],
          correct: "C"
        },
        {
          id: "concede",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "The columnist includes sentences 13 and 14 mainly to —",
          choices: [
            { letter: "A", text: "acknowledge an objection before answering it" },
            { letter: "B", text: "admit that the proposal should be dropped" },
            { letter: "C", text: "explain why health classes are unnecessary" },
            { letter: "D", text: "show that most teachers support the plan" }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Which choice best describes how the argument in \"Make Band Count\" is organized?",
          choices: [
            { letter: "A", text: "a problem followed by several unrelated stories" },
            { letter: "B", text: "a step-by-step account of one band season" },
            { letter: "C", text: "a side-by-side comparison of three districts' rules" },
            { letter: "D", text: "a claim, reasons, answers to objections, and a call to act" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the column is the writer's opinion rather than a statement that could be checked?",
          choices: [
            { letter: "A", text: "Sentence 19" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "A"
        },
        {
          id: "health",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the columnist, how could band students still receive the health lessons that PE includes?",
          choices: [
            { letter: "A", text: "by attending a weekly nutrition talk during rehearsal" },
            { letter: "B", text: "by completing the health unit online or in summer" },
            { letter: "C", text: "by passing a fitness test at the end of the season" },
            { letter: "D", text: "by joining a second club that teaches health topics" }
          ],
          correct: "B"
        },
        {
          id: "nodrop",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence best supports the writer's point that the change would not harm students' fitness?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "D"
        },
        {
          id: "sustained",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 17, the word sustained most nearly means —",
          choices: [
            { letter: "A", text: "supported by a coach" },
            { letter: "B", text: "short and intense" },
            { letter: "C", text: "kept up over a long time" },
            { letter: "D", text: "required by school law" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── VOCABULARY ───────────────────────── */
    {
      id: "g9-rv-c48-seed-room",
      family: "G9",
      title: "Tray Eleven",
      kind: "Vocabulary · 9.RV",
      blurb: "Yusuf wanted to give garden tours. Instead he gets a back room full of trays that refuse to sprout.",
      level: 1,
      passage:
        "<p>" + N(1) + "When Yusuf Haddad signed up to volunteer at the Cedar Hollow Botanic Garden, he pictured himself giving tours of the rose garden or feeding the koi in the lily pond. " +
        N(2) + "Instead, on his first Saturday, he was led to a windowless back room lined with metal shelves and plastic trays of what looked like plain dirt. " +
        N(3) + "\"These are seeds of the marsh blazing star,\" said Mr. Halvorsen, the retired chemistry teacher who ran the seed room. " +
        N(4) + "\"Only a few hundred of these plants are left in the wild. " +
        N(5) + "Our job is to help them <strong>germinate</strong>, to wake up and send out their first roots and shoots.\"</p>" +
        "<p>" + N(6) + "The job, Yusuf soon learned, was mostly waiting. " +
        N(7) + "Every morning he checked each tray's temperature, misted the soil with a spray bottle, and recorded the results in a binder. " +
        N(8) + "Mr. Halvorsen insisted that he be <strong>vigilant</strong>, because a tray that dried out for even a single afternoon could lose every seed in it. " +
        N(9) + "Yusuf wrote down \"no change\" so many times that the words began to look like a foreign language. " +
        N(10) + "After three weeks, the trays were still bare except for a <strong>sparse</strong> fuzz of green moss in one corner, a few thin threads scattered far apart.</p>" +
        "<p>" + N(11) + "\"Maybe they're duds,\" Yusuf said one Saturday, setting down the spray bottle harder than he meant to. " +
        N(12) + "Mr. Halvorsen did not seem bothered. " +
        N(13) + "He held a tray up to the light from the hallway door. " +
        N(14) + "\"Some seeds take two months,\" he said. " +
        N(15) + "\"Some take a winter. " +
        N(16) + "Plants that live in harsh places learn not to rush.\" " +
        N(17) + "Then he added, almost to himself, \"People who work with them have to learn the same thing.\"</p>" +
        "<p>" + N(18) + "Yusuf kept misting. " +
        N(19) + "He kept writing \"no change.\" " +
        N(20) + "He was not sure why he continued, except that quitting seemed to mean the seeds had won an argument he had not finished making. " +
        N(21) + "He decided he would <strong>persevere</strong> until the end of the season, whether anything grew or not.</p>" +
        "<p>" + N(22) + "In the sixth week, he lifted the plastic cover off tray eleven and stopped. " +
        N(23) + "A tiny stem, no taller than an eyelash, had pushed up through the soil, topped by two leaves so thin and <strong>translucent</strong> that the light passed straight through them. " +
        N(24) + "By the next Saturday there were nineteen more. " +
        N(25) + "Mr. Halvorsen recorded the number himself, in neat block letters, and then handed Yusuf the pen. " +
        N(26) + "\"Next spring, these go out to the marsh,\" he said. " +
        N(27) + "\"With luck, they'll <strong>flourish</strong> there long after both of us have forgotten this room.\" " +
        N(28) + "Yusuf looked at the trays and doubted he would ever forget it.</p>",
      claims: [
        {
          id: "germinate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 5, which words best help the reader understand the meaning of germinate?",
          choices: [
            { letter: "A", text: "seeds of the marsh blazing star" },
            { letter: "B", text: "only a few hundred of these plants" },
            { letter: "C", text: "wake up and send out their first roots" },
            { letter: "D", text: "our job is to help them" }
          ],
          correct: "C"
        },
        {
          id: "vigilant",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As Mr. Halvorsen uses it in sentence 8, the word vigilant most nearly means —",
          choices: [
            { letter: "A", text: "carefully watchful for problems" },
            { letter: "B", text: "patient and slow to act" },
            { letter: "C", text: "skilled at planting seeds" },
            { letter: "D", text: "nervous about losing a job" }
          ],
          correct: "A"
        },
        {
          id: "sparse",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "The phrase a few thin threads scattered far apart in sentence 10 shows that sparse means —",
          choices: [
            { letter: "A", text: "brightly colored" },
            { letter: "B", text: "thinly spread out" },
            { letter: "C", text: "thickly packed" },
            { letter: "D", text: "quickly growing" }
          ],
          correct: "B"
        },
        {
          id: "argument",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sentence 20 suggests that Yusuf keeps working in the seed room mainly because he —",
          choices: [
            { letter: "A", text: "is required to finish a set number of hours" },
            { letter: "B", text: "expects Mr. Halvorsen to reward his effort" },
            { letter: "C", text: "has figured out when the seeds will sprout" },
            { letter: "D", text: "does not want to admit defeat to the seeds" }
          ],
          correct: "D"
        },
        {
          id: "translucent",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "In translucent (sentence 23), trans- means through and luc- relates to light. Translucent most nearly means —",
          choices: [
            { letter: "A", text: "covered in a fine fuzz" },
            { letter: "B", text: "letting light pass through" },
            { letter: "C", text: "curled tightly shut" },
            { letter: "D", text: "darker than the soil" }
          ],
          correct: "B"
        },
        {
          id: "persevere",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written continue instead of persevere in sentence 21. Compared with continue, persevere suggests —",
          choices: [
            { letter: "A", text: "working fast to finish early" },
            { letter: "B", text: "stopping often to rest" },
            { letter: "C", text: "following orders without thought" },
            { letter: "D", text: "keeping on despite discouragement" }
          ],
          correct: "D"
        },
        {
          id: "foreign",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 9, saying the words \"no change\" began to look like a foreign language mainly emphasizes that —",
          choices: [
            { letter: "A", text: "writing them again and again made them feel empty" },
            { letter: "B", text: "Yusuf was secretly studying another language" },
            { letter: "C", text: "the binder was written in Mr. Halvorsen's code" },
            { letter: "D", text: "Yusuf's handwriting had become hard to read" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is developed through Yusuf's weeks in the Cedar Hollow seed room?",
          choices: [
            { letter: "A", text: "Volunteer work is always less exciting than expected." },
            { letter: "B", text: "Rare plants are best left alone in the wild." },
            { letter: "C", text: "Patience can lead to rewards that arrive slowly." },
            { letter: "D", text: "Young people learn more from books than mentors." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rv-c48-read-river",
      family: "G9",
      title: "Reading the River",
      kind: "Vocabulary · 9.RV",
      blurb: "Eddies, hydraulics, strainers and V's: what whitewater kayakers see that people on the bank miss.",
      level: 3,
      passage:
        "<p>" + N(1) + "To a person standing on the bank, a river can look like a single moving surface, as uniform as a conveyor belt. " +
        N(2) + "To an experienced whitewater kayaker, the same stretch of water is a crowded map of currents, each with its own direction, speed, and temper. " +
        N(3) + "Learning to <strong>discern</strong> these differences, to notice what a casual observer misses, is the first skill taught on guided trips with the Two Forks Paddling School, and instructors there insist it matters more than strength.</p>" +
        "<p>" + N(4) + "The most welcoming feature on a river is the eddy. " +
        N(5) + "When water flows around a boulder, it leaves a pocket behind the rock where the current slows, swirls, and may even move gently upstream. " +
        N(6) + "Kayakers use eddies the way hikers use benches, ducking into them to rest, scout ahead, or wait for a partner. " +
        N(7) + "The line between the main current and the eddy, however, can be <strong>turbulent</strong>, a churning seam where water moving in opposite directions collides and can spin a boat sideways.</p>" +
        "<p>" + N(8) + "Other features are more <strong>deceptive</strong>. " +
        N(9) + "A smooth, horizontal line across the river can look harmless from upstream, but it may mark a low dam or ledge. " +
        N(10) + "Below such a drop, water can curl back on itself in a recirculating wave called a hydraulic, which can trap a boat, or a swimmer, in a repeating loop. " +
        N(11) + "Instructor Amara Nwosu tells new students that \"the quietest-looking water is sometimes the loudest problem.\" " +
        N(12) + "Fallen trees, called strainers, are similar: water passes through their branches easily, but a person or a kayak cannot.</p>" +
        "<p>" + N(13) + "Reading these features is not a matter of memorizing a list. " +
        N(14) + "Changes in the river can be nearly <strong>imperceptible</strong> from a boat: a slight bulge in the surface may signal a submerged rock, and a faint V-shape pointing downstream usually marks the deepest, safest channel between two obstacles. " +
        N(15) + "A V pointing upstream, by contrast, often means a rock lies just beneath its tip. " +
        N(16) + "Paddlers who learn to spot these clues can <strong>negotiate</strong> a rapid by choosing a path through it, rather than simply hoping the current will carry them safely.</p>" +
        "<p>" + N(17) + "Even skilled kayakers respect how quickly conditions change. " +
        N(18) + "A rapid that is gentle in August can become <strong>formidable</strong> after a spring storm, when higher water hides familiar rocks and doubles the current's speed. " +
        N(19) + "For that reason, Two Forks guides scout unfamiliar rapids from shore before running them, no matter how many years they have paddled. " +
        N(20) + "A river, Nwosu says, is \"a book that rewrites itself every season.\" " +
        N(21) + "The paddlers who stay safest are the ones who never assume they have finished reading it.</p>",
      claims: [
        {
          id: "discern",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which phrase in sentence 3 best helps the reader understand the meaning of discern?",
          choices: [
            { letter: "A", text: "to notice what a casual observer misses" },
            { letter: "B", text: "the first skill taught on guided trips" },
            { letter: "C", text: "with the Two Forks Paddling School" },
            { letter: "D", text: "it matters more than strength" }
          ],
          correct: "A"
        },
        {
          id: "benches",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 6, the comparison of eddies to the benches hikers use suggests that eddies are —",
          choices: [
            { letter: "A", text: "crowded spots that kayakers avoid" },
            { letter: "B", text: "the fastest part of the river" },
            { letter: "C", text: "built by park workers for visitors" },
            { letter: "D", text: "places where paddlers can pause" }
          ],
          correct: "D"
        },
        {
          id: "turbulent",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written rough instead of turbulent in sentence 7. Compared with rough, turbulent places more emphasis on water that is —",
          choices: [
            { letter: "A", text: "cold and unpleasant to touch" },
            { letter: "B", text: "shallow and full of rocks" },
            { letter: "C", text: "churning in wild, confused motion" },
            { letter: "D", text: "slow and hard to paddle through" }
          ],
          correct: "C"
        },
        {
          id: "imperceptible",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "Imperceptible (sentence 14) is built from im- (not), percept (notice), and -ible (able to be). The word most nearly means —",
          choices: [
            { letter: "A", text: "impossible to cross safely" },
            { letter: "B", text: "too slight to be easily noticed" },
            { letter: "C", text: "clearly visible from shore" },
            { letter: "D", text: "likely to change quickly" }
          ],
          correct: "B"
        },
        {
          id: "quotation",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes Nwosu's statement in sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "show that hydraulics make a great deal of noise" },
            { letter: "B", text: "suggest that instructors exaggerate river dangers" },
            { letter: "C", text: "stress that calm-looking water can hide danger" },
            { letter: "D", text: "explain how a strainer forms in a river" }
          ],
          correct: "C"
        },
        {
          id: "negotiate",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "Compared with float down, the word negotiate in sentence 16 suggests that a paddler moves through a rapid —",
          choices: [
            { letter: "A", text: "with active, careful choices" },
            { letter: "B", text: "with no effort at all" },
            { letter: "C", text: "in a race against others" },
            { letter: "D", text: "after arguing with a guide" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the author mainly organize sentences 4–16 of \"Reading the River\"?",
          choices: [
            { letter: "A", text: "by telling the story of one trip in time order" },
            { letter: "B", text: "by comparing whitewater kayaking with hiking" },
            { letter: "C", text: "by listing the causes of spring floods" },
            { letter: "D", text: "by describing river features and what each means" }
          ],
          correct: "D"
        },
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the article about whitewater kayaking?",
          choices: [
            { letter: "A", text: "Eddies are the most dangerous feature in any river." },
            { letter: "B", text: "Safe paddling depends on reading a river's changing features." },
            { letter: "C", text: "Strength is the most important skill in whitewater paddling." },
            { letter: "D", text: "Rivers are always calmer in August than in the spring." }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── PAIRED TEXTS ───────────────────────── */
    {
      id: "g9-dsr-c48-sectionals",
      family: "G9",
      title: "Six Forty-Five",
      kind: "Paired texts · 9.DSR",
      blurb: "A band director's memo announces early-morning sectionals; a clarinet player's blog explains why her bus can't make it.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Memo from the Director of Bands</strong></p>" +
        "<p>" + N(1) + "Beginning Tuesday, October 14, the Riverside Falls High School Marching Band will add two morning sectional rehearsals each week, on Tuesdays and Thursdays from 6:45 to 7:35 a.m. in the band room. " +
        N(2) + "Sectionals are small-group rehearsals in which each instrument family works on its own music with a section leader. " +
        N(3) + "Our regional assessment is on November 8, and judges score not only the full band's sound but also the clarity of each section. " +
        N(4) + "Last year, our woodwinds received the lowest section score in the band, largely because we never had time to rehearse them apart from the brass and percussion. " +
        N(5) + "Evening rehearsals are already three hours long, and adding more time after school would send students home well after dark. " +
        N(6) + "Morning sectionals solve this problem without lengthening the evening. " +
        N(7) + "Attendance is expected for all members. " +
        N(8) + "Students who miss more than two sectionals without an excused absence may be moved to an alternate position in the show. " +
        N(9) + "I know early mornings are hard, and I appreciate the commitment each of you makes to this band. " +
        N(10) + "Light breakfast, including fruit and granola bars, will be provided by the band boosters each morning. " +
        N(11) + "Families with questions may contact me through the school email system. " +
        N(12) + "Thank you for helping us bring our best sound to Riverside Falls. " +
        N(13) + "— Mr. Teodor Brandt</p>" +
        "<p><strong>Text 2 — Post on a Student's Music Blog</strong></p>" +
        "<p>" + N(14) + "I love this band, so I want to say this carefully. " +
        N(15) + "The new morning sectionals are a good idea, and I think Mr. Brandt is right that the woodwinds need more time. " +
        N(16) + "I sit second chair clarinet, and I saw our score sheet last year; it was not pretty. " +
        N(17) + "But my bus, Route 9, does not reach school until 7:20, which means I would arrive with fifteen minutes left in a fifty-minute rehearsal. " +
        N(18) + "My parents both leave for work at 6:00, so a ride is not an option. " +
        N(19) + "At least four other woodwind players ride buses from the east side of the county, and our section can't fix its sound if a third of us are missing. " +
        N(20) + "I'm not asking to skip sectionals. " +
        N(21) + "I'm asking whether the woodwinds could meet during lunch on those days instead, or whether the late-arriving players could record our parts and get feedback online. " +
        N(22) + "The memo says students who miss more than two sectionals may lose their spots, and that worries me, because missing them won't be a choice for us. " +
        N(23) + "I plan to bring this up at Thursday's section meeting. " +
        N(24) + "If enough of us explain our bus schedules, maybe we can find a time that works for the whole section, not just the people who live close by. " +
        N(25) + "— Hana Sato</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea do both Mr. Brandt's memo and Hana's post support?",
          choices: [
            { letter: "A", text: "Woodwind sectionals should be moved to lunch." },
            { letter: "B", text: "Students who miss sectionals should lose their spots." },
            { letter: "C", text: "The woodwind section needs extra rehearsal time." },
            { letter: "D", text: "Evening rehearsals should be made longer." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The memo and the blog post differ mainly in how they view —",
          choices: [
            { letter: "A", text: "whether a morning schedule works for every member" },
            { letter: "B", text: "whether the regional assessment really matters" },
            { letter: "C", text: "whether section leaders are needed at rehearsals" },
            { letter: "D", text: "whether the boosters should provide breakfast" }
          ],
          correct: "A"
        },
        {
          id: "respond",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which sentence from Text 1 does Hana respond to most directly in sentence 22?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "D"
        },
        {
          id: "conclude",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader combining both texts could best conclude that Mr. Brandt's sectional plan —",
          choices: [
            { letter: "A", text: "will be canceled before the November assessment" },
            { letter: "B", text: "may leave out some of the players it means to help" },
            { letter: "C", text: "was designed mainly to punish late-arriving students" },
            { letter: "D", text: "has already raised the woodwinds' section score" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Select TWO details that together best show a conflict between the sectional schedule and some students' transportation.",
          choices: [
            { letter: "A", text: "Sectionals run from 6:45 to 7:35 a.m. (sentence 1)." },
            { letter: "B", text: "Judges score each section's clarity (sentence 3)." },
            { letter: "C", text: "Route 9 does not reach school until 7:20 (sentence 17)." },
            { letter: "D", text: "Boosters will provide breakfast each morning (sentence 10)." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "The main purpose of Mr. Brandt's memo is to —",
          choices: [
            { letter: "A", text: "persuade more students to join the woodwind section" },
            { letter: "B", text: "announce a new rehearsal schedule and explain its reasons" },
            { letter: "C", text: "apologize to families for last year's low assessment score" },
            { letter: "D", text: "ask families to volunteer for the band boosters" }
          ],
          correct: "B"
        },
        {
          id: "lowscore",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the memo, why did the Riverside Falls woodwinds receive the lowest section score last year?",
          choices: [
            { letter: "A", text: "Several players missed the assessment." },
            { letter: "B", text: "Their music was harder than the brass parts." },
            { letter: "C", text: "Their section leader graduated early." },
            { letter: "D", text: "They rarely rehearsed apart from the others." }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does Hana mainly organize her blog post?",
          choices: [
            { letter: "A", text: "She lists the band's upcoming events in time order." },
            { letter: "B", text: "She praises the plan, explains a problem, then suggests fixes." },
            { letter: "C", text: "She compares her bus route with routes at other schools." },
            { letter: "D", text: "She retells last year's assessment from start to finish." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-dsr-c48-seed-drill",
      family: "G9",
      title: "The Folding Drill",
      kind: "Paired texts · 9.DSR",
      blurb: "A museum-style history of a hill-country inventor's patent fight, paired with the journal entry where she decided to fight it.",
      level: 3,
      passage:
        "<p><strong>Text 1 — The Arreola Seed Drill</strong></p>" +
        "<p>" + N(1) + "In 1894, a farmer named Josefina Arreola, working a small plot in the dry hill country of New Mexico Territory, built a seed planter that could be folded flat and carried on the back of a mule. " +
        N(2) + "Most seed drills of the time were heavy, wheeled machines designed for the broad, level fields of the Midwest. " +
        N(3) + "They were nearly useless on narrow terraces and rocky slopes. " +
        N(4) + "Arreola's drill used a hinged frame and a single wooden wheel, and it dropped seeds at a steady spacing that saved both seed and labor. " +
        N(5) + "Neighbors borrowed it so often that she began building copies to sell. " +
        N(6) + "In 1897, she received a patent for the design. " +
        N(7) + "Two years later, a large implement company began selling a folding planter with a nearly identical hinge. " +
        N(8) + "Arreola's lawyer argued that the company had copied her patented design, and the case dragged on for more than three years. " +
        N(9) + "The court finally ruled in her favor, but the legal costs consumed most of the money her drills had earned. " +
        N(10) + "Historians today point to the case as an example of how the patent system could protect a small inventor, though at a price. " +
        N(11) + "A restored Arreola drill is displayed at a regional farm museum, where a label describes her as \"an inventor shaped by the land she farmed.\"</p>" +
        "<p><strong>Text 2 — From the Journal of Josefina Arreola, 1899</strong></p>" +
        "<p>" + N(12) + "The letter from the lawyer came today, and I read it twice by the lamp before I understood that we must go to court. " +
        N(13) + "Teodoro says I should let the matter go, that a company with a hundred workers will outlast one woman with a mule. " +
        N(14) + "Perhaps he is right. " +
        N(15) + "But I keep thinking of the first spring I used the drill, when the rows on the upper terrace came up as straight as stitches, and old Senora Baca came to the fence to see what kind of magic I was using. " +
        N(16) + "There was no magic. " +
        N(17) + "There were eleven months of broken hinges and splinters, and a winter when I burned the first two frames for firewood because I was so angry at them. " +
        N(18) + "The company did not spend those eleven months. " +
        N(19) + "They spent an afternoon with my drawing. " +
        N(20) + "I do not need to be rich from this. " +
        N(21) + "I need the paper with my name on it to mean what it says. " +
        N(22) + "Tomorrow I will write to the lawyer and tell him to go on. " +
        N(23) + "If it costs every drill I have sold, then at least the cost will be mine to choose, and not theirs to choose for me.</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea becomes clear only when both texts about the Arreola drill are read together?",
          choices: [
            { letter: "A", text: "The court ruled for Arreola after more than three years." },
            { letter: "B", text: "Arreola accepted the case's cost because the patent's meaning mattered." },
            { letter: "C", text: "The company's hinge was nearly identical to Arreola's hinge." },
            { letter: "D", text: "Arreola's neighbors often borrowed her seed drill." }
          ],
          correct: "B"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The two texts about the folding seed drill differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "argues that Arreola should have dropped the case, while Text 2 disagrees" },
            { letter: "B", text: "focuses on the court ruling, while Text 2 describes the museum" },
            { letter: "C", text: "reports events from a distance, while Text 2 reveals her motives" },
            { letter: "D", text: "praises the implement company, while Text 2 criticizes it" }
          ],
          correct: "C"
        },
        {
          id: "cost",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Sentence 23 of Text 2 helps the reader understand which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 11" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "D"
        },
        {
          id: "label",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Based on both texts, the museum label quoted in sentence 11 seems accurate because —",
          choices: [
            { letter: "A", text: "Text 2 shows the design came from long work on her own terraces" },
            { letter: "B", text: "Text 2 shows she sold her first drills to the implement company" },
            { letter: "C", text: "Text 1 explains that she studied Midwest farm machines closely" },
            { letter: "D", text: "Text 1 says she built the drill to sell to large companies" }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Select TWO sentences from Text 2 that best show why Arreola believes the company's planter was unfair.",
          choices: [
            { letter: "A", text: "Sentence 18" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "adds",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "How does Text 2 add to the reader's understanding of sentence 4 in Text 1?",
          choices: [
            { letter: "A", text: "It shows Arreola copied the hinge from another farmer." },
            { letter: "B", text: "It shows the steady spacing came after months of failures." },
            { letter: "C", text: "It shows the drill was first designed for Midwest fields." },
            { letter: "D", text: "It shows the wooden wheel was added by Teodoro." }
          ],
          correct: "B"
        },
        {
          id: "teodoro",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "In sentence 13, Teodoro's comment suggests that he believes —",
          choices: [
            { letter: "A", text: "Arreola's drill is not as good as the company's" },
            { letter: "B", text: "the lawyer has given Arreola poor advice" },
            { letter: "C", text: "Arreola should sell her patent to the company" },
            { letter: "D", text: "the company's size makes her chances poor" }
          ],
          correct: "D"
        },
        {
          id: "dragged",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "Text 1 says the case dragged on (sentence 8). Compared with continued, the phrase dragged on suggests that the case was —",
          choices: [
            { letter: "A", text: "exciting and closely watched" },
            { letter: "B", text: "short and easily settled" },
            { letter: "C", text: "slow, tiring, and frustrating" },
            { letter: "D", text: "secret and rarely discussed" }
          ],
          correct: "C"
        }
      ]
    },
    /* ───────────────────────── POETRY ───────────────────────── */
    {
      id: "g9-rl-c48-closing-time",
      family: "G9",
      title: "Closing Time at the Garden",
      kind: "Poetry · 9.RL",
      blurb: "The last visitor walks out of a botanical garden at five o'clock and thinks about an old oak.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "At five o'clock the gardener locks the gate,<br>" +
        L(2) + "and I am the last one walking down the path,<br>" +
        L(3) + "my sketchbook full of leaves I could not finish.<br>" +
        L(4) + "The roses have already turned their faces<br>" +
        L(5) + "toward the wall where the last light lingers,<br>" +
        L(6) + "like students watching the clock on Friday.<br>" +
        L(7) + "The fountain keeps on talking to itself,<br>" +
        L(8) + "telling the same short story it told at noon.<br>" +
        L(9) + "A bee, too late for any flower, circles<br>" +
        L(10) + "my sleeve as if it might turn out to be a lily.<br>" +
        L(11) + "In the glasshouse, the ferns are breathing fog<br>" +
        L(12) + "against the windows, soft as a sleeping dog.<br>" +
        L(13) + "Nobody here is in a hurry. Nothing<br>" +
        L(14) + "checks its phone or asks me what's for dinner.<br>" +
        L(15) + "The oak that shades the bench was planted, says<br>" +
        L(16) + "the little metal sign, a hundred years ago<br>" +
        L(17) + "by someone who would never sit beneath it.<br>" +
        L(18) + "I think about that someone as I walk:<br>" +
        L(19) + "a shovel, a bucket, a seed the size of a thumb,<br>" +
        L(20) + "a shade she gave away to strangers.<br>" +
        L(21) + "The gardener waves and jingles all her keys.<br>" +
        L(22) + "I close my sketchbook on a half-drawn leaf.<br>" +
        L(23) + "Tomorrow I will come back and finish it,<br>" +
        L(24) + "and the oak will not have noticed I was gone.</p>",
      claims: [
        {
          id: "roses",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 6, the speaker compares the roses to students watching the clock on Friday mainly to suggest that the roses seem —",
          choices: [
            { letter: "A", text: "bored by the garden's visitors" },
            { letter: "B", text: "eager for the day to end" },
            { letter: "C", text: "afraid of the coming dark" },
            { letter: "D", text: "proud of their bright colors" }
          ],
          correct: "B"
        },
        {
          id: "fountain",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "Lines 7 and 8 describe the fountain as talking to itself. This image mainly creates a sense of —",
          choices: [
            { letter: "A", text: "a loud noise that disturbs the speaker" },
            { letter: "B", text: "a secret that only the gardener knows" },
            { letter: "C", text: "a broken fountain that needs repair" },
            { letter: "D", text: "a steady, peaceful sound that repeats" }
          ],
          correct: "D"
        },
        {
          id: "planter",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Lines 15–20 suggest that the speaker admires the person who planted the oak because she —",
          choices: [
            { letter: "A", text: "did work that would help others long after her" },
            { letter: "B", text: "built the glasshouse where the ferns now grow" },
            { letter: "C", text: "was famous across the city for her gardening" },
            { letter: "D", text: "planted the oak to shade her own house" }
          ],
          correct: "A"
        },
        {
          id: "ferns",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.1",
          stem: "The description in lines 11 and 12 of ferns breathing fog, soft as a sleeping dog, is an example of —",
          choices: [
            { letter: "A", text: "hyperbole that exaggerates the glasshouse's heat" },
            { letter: "B", text: "alliteration that imitates the sound of rain" },
            { letter: "C", text: "a simile that makes the glasshouse feel alive and calm" },
            { letter: "D", text: "a flashback to the speaker's childhood pet" }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "\"Closing Time at the Garden\" is told from the point of view of —",
          choices: [
            { letter: "A", text: "the gardener who locks the gate" },
            { letter: "B", text: "the old oak beside the bench" },
            { letter: "C", text: "a bee looking for a late flower" },
            { letter: "D", text: "a visitor who stays until closing" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The overall tone of the poem about closing time is best described as —",
          choices: [
            { letter: "A", text: "calm and reflective" },
            { letter: "B", text: "tense and fearful" },
            { letter: "C", text: "playful and silly" },
            { letter: "D", text: "sad and regretful" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem set in the botanical garden?",
          choices: [
            { letter: "A", text: "People should finish every task before leaving." },
            { letter: "B", text: "Gardens are lonelier at night than during the day." },
            { letter: "C", text: "Slowing down helps a person notice gifts left by others." },
            { letter: "D", text: "Nature cares deeply about the people who visit it." }
          ],
          correct: "C"
        },
        {
          id: "noticed",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In line 24, the statement that the oak will not have noticed I was gone mainly suggests that —",
          choices: [
            { letter: "A", text: "the speaker feels hurt that the garden ignores her" },
            { letter: "B", text: "the oak's long life makes one absence seem small" },
            { letter: "C", text: "the oak will be cut down before the next day" },
            { letter: "D", text: "the gardener will forget the speaker by morning" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── DRAMA ───────────────────────── */
    {
      id: "g9-rl-c48-put-in",
      family: "G9",
      title: "The Put-In",
      kind: "Drama · 9.RL",
      blurb: "Esi is ready to run Kettle Drop. The river gauge, her brother and a passing branch are not so sure.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A gravel launch beside the Ossaway River, early on a bright Saturday morning in late May, with pine trees leaning over the water. " +
        N(2) + "Two kayaks rest on the bank, and a painted gauge on a wooden post shows the water level. " +
        N(3) + "ESI MENSAH, fifteen, is already zipped into her life jacket. " +
        N(4) + "Her older brother, KWAME, studies the gauge, while their cousin DARIO sits on a cooler eating a banana and watching the two of them with the calm interest of someone at a tennis match.</em></p>" +
        "<p><strong>ESI:</strong> " + N(5) + "Come on, it's perfect. " +
        N(6) + "The sun's out, the water's moving, and Kettle Drop is right around the bend. " +
        N(7) + "We've been talking about this run all summer, and you promised me last August that this year I'd be ready.</p>" +
        "<p><strong>KWAME:</strong> " + N(8) + "<em>(tapping the post)</em> The gauge says four and a half feet. " +
        N(9) + "Two weeks ago, when you said it was too easy, it said two.</p>" +
        "<p><strong>ESI:</strong> " + N(10) + "So it's faster. " +
        N(11) + "Faster is more fun.</p>" +
        "<p><strong>DARIO:</strong> " + N(12) + "<em>(aside, to the audience)</em> She said the same thing about the roller coaster at the county fair, right before she lost her sunglasses and her lunch.</p>" +
        "<p><strong>KWAME:</strong> " + N(13) + "At two feet, Kettle Drop is a slide. " +
        N(14) + "At four and a half, the big rock in the middle is underwater, and there's a hole behind it that doesn't let go of anything, not a boat, not a paddle, not you.</p>" +
        "<p><strong>ESI:</strong> " + N(15) + "<em>(crossing her arms)</em> You've run it a hundred times.</p>" +
        "<p><strong>KWAME:</strong> " + N(16) + "At two feet. " +
        N(17) + "Never at this level.</p>" +
        "<p><strong>ESI:</strong> " + N(18) + "<em>(aside)</em> He's not scared of the river. " +
        N(19) + "He's scared Mom will find out he let me go.</p>" +
        "<p><strong>DARIO:</strong> " + N(20) + "<em>(standing, brushing off his shorts)</em> What if we paddled the upper stretch instead and carried the boats around Kettle Drop on the trail, the way the summer camp groups do?</p>" +
        "<p><strong>ESI:</strong> " + N(21) + "Carry them? " +
        N(22) + "That's a half-mile of mud.</p>" +
        "<p><strong>KWAME:</strong> " + N(23) + "It's a half-mile of mud that ends with all three of us eating lunch at the take-out, dry, with all our gear and all our teeth.</p>" +
        "<p><em>" + N(24) + "Esi looks at the gauge for a long moment. " +
        N(25) + "Upriver, a branch the size of a canoe slides past the launch, spinning slowly in the brown current, its leaves still green. " +
        N(26) + "All three watch it disappear around the bend.</em></p>" +
        "<p><strong>ESI:</strong> " + N(27) + "<em>(quietly)</em> That was moving pretty fast.</p>" +
        "<p><strong>KWAME:</strong> " + N(28) + "Yeah. " +
        N(29) + "It was.</p>" +
        "<p><strong>ESI:</strong> " + N(30) + "<em>(picking up the front of her kayak)</em> Fine. " +
        N(31) + "But I'm carrying the light end, and Dario's carrying the cooler.</p>" +
        "<p><strong>DARIO:</strong> " + N(32) + "<em>(aside, grinning)</em> That's what she calls losing an argument: winning the next one.</p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The playwright uses Dario's aside in sentence 12 mainly to —",
          choices: [
            { letter: "A", text: "reveal, with humor, a pattern in Esi's love of thrills" },
            { letter: "B", text: "show that Dario is secretly angry at his cousin" },
            { letter: "C", text: "explain the safety rules of the Ossaway River" },
            { letter: "D", text: "hint that Dario would rather go home early" }
          ],
          correct: "A"
        },
        {
          id: "aside2",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Esi's aside in sentences 18 and 19 shows that she —",
          choices: [
            { letter: "A", text: "plans to tell their mother about the trip" },
            { letter: "B", text: "privately agrees that the water is too high" },
            { letter: "C", text: "thinks Kwame fears their mother, not the river" },
            { letter: "D", text: "is secretly afraid of running Kettle Drop" }
          ],
          correct: "C"
        },
        {
          id: "branch",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage directions in sentences 24–26, which describe the passing branch, mainly serve to —",
          choices: [
            { letter: "A", text: "introduce a new character into the scene" },
            { letter: "B", text: "show the river's power in a way that sways Esi" },
            { letter: "C", text: "suggest that one of the kayaks is damaged" },
            { letter: "D", text: "mark a jump forward in time to the afternoon" }
          ],
          correct: "B"
        },
        {
          id: "gauge",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the river gauge on the post affect the plot of \"The Put-In\"?",
          choices: [
            { letter: "A", text: "It shows the group has arrived at the wrong river." },
            { letter: "B", text: "It tells the cousins when it is time for lunch." },
            { letter: "C", text: "It proves that Esi has run Kettle Drop before." },
            { letter: "D", text: "It gives Kwame clear proof that conditions changed." }
          ],
          correct: "D"
        },
        {
          id: "kwame",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Kwame in this scene?",
          choices: [
            { letter: "A", text: "timid and unwilling to paddle at all" },
            { letter: "B", text: "bossy and uninterested in others' ideas" },
            { letter: "C", text: "cautious and steady, relying on facts" },
            { letter: "D", text: "careless about his sister's safety" }
          ],
          correct: "C"
        },
        {
          id: "arms",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction in sentence 15, in which Esi crosses her arms, mainly shows that she is —",
          choices: [
            { letter: "A", text: "resisting her brother's warning" },
            { letter: "B", text: "cold in the early morning air" },
            { letter: "C", text: "ready to launch her kayak" },
            { letter: "D", text: "agreeing with Dario's plan" }
          ],
          correct: "A"
        },
        {
          id: "aside3",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Dario's final aside in sentence 32 creates humor mainly because it —",
          choices: [
            { letter: "A", text: "reveals that Dario will carry the light end" },
            { letter: "B", text: "shows that Esi still plans to run Kettle Drop" },
            { letter: "C", text: "tells the audience that Kwame lost the debate" },
            { letter: "D", text: "suggests Esi saves face by winning a small point" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "Which word best describes the tone of the ending of the scene at the Ossaway River?",
          choices: [
            { letter: "A", text: "bitter" },
            { letter: "B", text: "good-humored" },
            { letter: "C", text: "frightening" },
            { letter: "D", text: "mournful" }
          ],
          correct: "B"
        }
      ]
    },
    /* ───────────────────────── FUNCTIONAL TEXT ───────────────────────── */
    {
      id: "g9-ri-c48-inventors-showcase",
      family: "G9",
      title: "Young Inventors Showcase",
      kind: "Functional text · 9.RI",
      blurb: "Entry rules for a county library's invention fair: deadlines, display boards, notebooks and judging.",
      level: 1,
      passage:
        "<p><strong>Marlow County Library: Young Inventors Showcase</strong><br>" +
        N(1) + "The Marlow County Library invites students in grades 6 through 12 to enter the eleventh annual Young Inventors Showcase on Saturday, April 18, from 10:00 a.m. to 3:00 p.m. in the Main Branch Community Room. " +
        N(2) + "The showcase celebrates original inventions that solve everyday problems at home, at school, or in the community. " +
        N(3) + "Entry is free, and every participant receives a certificate.</p>" +
        "<p><strong>Who May Enter</strong><br>" +
        N(4) + "Students may enter alone or in teams of up to three. " +
        N(5) + "Each student may appear on only one entry, whether individual or team. " +
        N(6) + "Every entry must have an adult sponsor, such as a teacher, parent, or club leader, who signs the entry form.</p>" +
        "<p><strong>How to Enter</strong><br>" +
        N(7) + "Submit the entry form at any library branch or online by Friday, March 27. " +
        N(8) + "The form asks for a project title, a one-paragraph description of the problem your invention solves, and a labeled sketch. " +
        N(9) + "Late entries cannot be accepted, because judges need two weeks to review descriptions before the event.</p>" +
        "<p><strong>What to Bring</strong><br>" +
        N(10) + "Bring your prototype, a working or partial model of your invention, along with a display board no larger than 36 by 48 inches. " +
        N(11) + "Your board should show the problem, your design process, and at least one test you performed, with its results. " +
        N(12) + "Electrical outlets are limited; if your invention needs power, check the box on the entry form so we can assign you a table near an outlet. " +
        N(13) + "Inventions may not include open flames, sharp blades, or chemicals that require safety goggles or gloves.</p>" +
        "<p><strong>Inventor's Notebook</strong><br>" +
        N(14) + "Each entry must include an inventor's notebook, a dated record of your ideas, sketches, failures, and changes. " +
        N(15) + "Judges often say the notebook tells them more about an inventor than the finished model does. " +
        N(16) + "Messy pages are welcome; crossed-out ideas and failed tests show how your thinking developed over time.</p>" +
        "<p><strong>Judging</strong><br>" +
        N(17) + "Entries are scored on originality (30 points), usefulness (30 points), evidence of testing (20 points), and the inventor's notebook (20 points). " +
        N(18) + "Ribbons are awarded in two divisions, grades 6 through 8 and grades 9 through 12. " +
        N(19) + "First-place winners in each division receive a one-hour meeting with a volunteer from the county's small-business center, who can explain how inventors protect their ideas, including the basics of applying for a patent.</p>" +
        "<p><strong>Questions?</strong><br>" +
        N(20) + "Contact the Teen Services desk at the Main Branch or visit the showcase page on the library website, where photos of past winners are posted.</p>",
      claims: [
        {
          id: "late",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the showcase guidelines, why are late entries not accepted?",
          choices: [
            { letter: "A", text: "The community room is already fully booked." },
            { letter: "B", text: "Sponsors must sign all forms by a set date." },
            { letter: "C", text: "Judges need two weeks to review descriptions." },
            { letter: "D", text: "Ribbons are ordered based on the entry count." }
          ],
          correct: "C"
        },
        {
          id: "summary",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best summarizes the Young Inventors Showcase guidelines?",
          choices: [
            { letter: "A", text: "They explain who may enter, how to enter, and how entries are judged." },
            { letter: "B", text: "They argue that every student should try to become an inventor." },
            { letter: "C", text: "They describe the history of the showcase since its first year." },
            { letter: "D", text: "They teach students the full process of applying for a patent." }
          ],
          correct: "A"
        },
        {
          id: "notebook",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Owen plans to bring a working hand-crank flashlight and a display board but no notebook. Which sentence shows that his entry would be incomplete?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 12" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the information in the showcase guidelines mainly organized?",
          choices: [
            { letter: "A", text: "as a story about one student's invention" },
            { letter: "B", text: "in headed sections, each on one part of the event" },
            { letter: "C", text: "as a comparison of the two age divisions" },
            { letter: "D", text: "in order of importance, from judging to entering" }
          ],
          correct: "B"
        },
        {
          id: "messy",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The guidelines include sentence 16 mainly to —",
          choices: [
            { letter: "A", text: "reassure students that notebooks need not look perfect" },
            { letter: "B", text: "warn students that messy notebooks will lose points" },
            { letter: "C", text: "explain how the judges score an entry's originality" },
            { letter: "D", text: "describe what belongs on each student's display board" }
          ],
          correct: "A"
        },
        {
          id: "prototype",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The prefix proto- means first. Based on this and sentence 10, a prototype is —",
          choices: [
            { letter: "A", text: "a final product that is ready to sell" },
            { letter: "B", text: "a drawing submitted with the entry form" },
            { letter: "C", text: "an early model built to test an idea" },
            { letter: "D", text: "a copy of another inventor's design" }
          ],
          correct: "C"
        },
        {
          id: "power",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the guidelines, what should a student do if an invention needs electricity?",
          choices: [
            { letter: "A", text: "bring a long extension cord from home" },
            { letter: "B", text: "check a box on the form to get a table near an outlet" },
            { letter: "C", text: "ask the Teen Services desk on the day of the event" },
            { letter: "D", text: "switch to batteries, because outlets are not allowed" }
          ],
          correct: "B"
        },
        {
          id: "factrule",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the guidelines reports a view held by others rather than stating a rule?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 9" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "D"
        }
      ]
    },
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
