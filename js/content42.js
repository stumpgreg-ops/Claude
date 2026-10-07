/* SOL Labyrinth — Grade 9 medium-tier expansion packs (v5.15): a fictional ancient city, sports science,
 * dance competitions and a county fair. 19 packs, 6 questions each. Original text only.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* 1 ─ Literary, level 1 — county fair */
    {
      id: "g9-rl-c42-goat-ring",
      family: "G9",
      title: "Harder to Spray On",
      kind: "Literary · 9.RL",
      blurb: "Malia's stubborn goat freezes in the show ring at the county fair.",
      level: 1,
      passage:
        "<p>" + N(1) + "By noon on judging day, the goat barn at the Harlan County Fair smelled like hay, sunscreen, and nerves. " +
        N(2) + "Malia Fonoti had brushed Pepper three times, but the little brown goat kept rolling in the straw as if she held a grudge against clean coats. " +
        N(3) + "Two stalls down, a boy named Curtis was spraying his goat with a shiny product that Malia's family could not afford. " +
        N(4) + "\"Don't watch him,\" her grandmother said, handing her a damp towel. " +
        N(5) + "\"Watch your animal.\" " +
        N(6) + "When the class was called, Malia led Pepper into the ring, and the goat planted her hooves in the sawdust like a fence post. " +
        N(7) + "The crowd laughed. " +
        N(8) + "Malia's face burned, but she remembered the hours of practice in the backyard, crouched low, speaking softly, waiting. " +
        N(9) + "She knelt, scratched the spot under Pepper's chin, and whispered the nonsense song she always used. " +
        N(10) + "Pepper's ears flicked, and she walked forward as if the whole thing had been her idea. " +
        N(11) + "The judge, a tall woman in a straw hat, ran her hands along each goat's back and asked every exhibitor two questions. " +
        N(12) + "Malia answered both without looking at Curtis once. " +
        N(13) + "She placed third, and Curtis won, his goat glittering under the lights. " +
        N(14) + "Afterward, the judge stopped at Pepper's stall. " +
        N(15) + "\"Your goat trusts you,\" she said. \"That is harder to spray on.\" " +
        N(16) + "Malia's grandmother only nodded, but on the drive home she hummed the nonsense song the whole way." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme is best supported by Malia's day at the fair?",
          choices: [
            { letter: "A", text: "First place is the only true measure of hard work." },
            { letter: "B", text: "Expensive products give some exhibitors an unfair edge." },
            { letter: "C", text: "Patient trust matters more than a polished look." },
            { letter: "D", text: "Grandparents usually know more than young people do." }
          ],
          correct: "C"
        },
        {
          id: "focus",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows that Malia stays focused on her own work?",
          choices: [
            { letter: "A", text: "Sentence 12: She answers without looking at Curtis once." },
            { letter: "B", text: "Sentence 2: She brushes Pepper three separate times." },
            { letter: "C", text: "Sentence 7: The crowd laughs when Pepper stops." },
            { letter: "D", text: "Sentence 13: Curtis's goat glitters brightly under the show lights." }
          ],
          correct: "A"
        },
        {
          id: "fencepost",
          sol: "9.RL.2.A",
          stem: "In sentence 6, the author compares Pepper to a fence post mainly to show that the goat —",
          choices: [
            { letter: "A", text: "is tired from the long morning" },
            { letter: "B", text: "is posing proudly for the judge" },
            { letter: "C", text: "is too heavy for Malia to lead" },
            { letter: "D", text: "refuses to move at all" }
          ],
          correct: "D"
        },
        {
          id: "barn",
          sol: "9.RL.3.A",
          stem: "The smells listed in sentence 1 mainly suggest that judging day is —",
          choices: [
            { letter: "A", text: "a quiet and ordinary afternoon" },
            { letter: "B", text: "busy and tense at the same time" },
            { letter: "C", text: "mostly about the animals' health" },
            { letter: "D", text: "ending sooner than people expected" }
          ],
          correct: "B"
        },
        {
          id: "exhibitor",
          sol: "9.RV.1.C",
          stem: "In sentence 11, the word exhibitor most nearly means —",
          choices: [
            { letter: "A", text: "a person who judges the animals" },
            { letter: "B", text: "a person who shows an animal" },
            { letter: "C", text: "a visitor watching from the stands" },
            { letter: "D", text: "a worker who cleans the stalls" }
          ],
          correct: "B"
        },
        {
          id: "hum",
          sol: "9.RL.1.B",
          stem: "Based on sentence 16, readers can best infer that Malia's grandmother —",
          choices: [
            { letter: "A", text: "is disappointed that Malia did not win" },
            { letter: "B", text: "wishes she had bought the shiny spray" },
            { letter: "C", text: "is proud of how Malia handled Pepper" },
            { letter: "D", text: "plans to enter her own goat next year" }
          ],
          correct: "C"
        }
      ]
    },

    /* 2 ─ Literary, level 2 — dance competition */
    {
      id: "g9-rl-c42-stamp-clap",
      family: "G9",
      title: "Stamp, Clap, Clap",
      kind: "Literary · 9.RL",
      blurb: "The music cuts out halfway through the Northfield crew's routine.",
      level: 2,
      passage:
        "<p>" + N(1) + "Forty seconds into the routine at the Tri-State Dance Classic, the music died. " +
        N(2) + "One moment the bass was rattling the bleachers; the next, the gym held nothing but the squeak of sixteen sneakers. " +
        N(3) + "Dayo Adeyemi, captain of the Northfield crew, felt the silence settle on her shoulders like a wet coat. " +
        N(4) + "The rules allowed a restart, but only if the whole crew left the floor, and leaving meant losing the energy they had spent months building. " +
        N(5) + "Behind her, Marcus had already frozen with one arm in the air, waiting for someone to decide. " +
        N(6) + "Dayo did not look at the judges' table. " +
        N(7) + "Instead she stamped once, hard, on the wooden floor, then clapped twice. " +
        N(8) + "It was the counting pattern they had used in the church parking lot all summer, back when nobody owned a speaker that worked. " +
        N(9) + "Stamp, clap, clap. " +
        N(10) + "One by one, the others picked it up, until the whole gym seemed to be keeping time with them. " +
        N(11) + "A few people in the stands began to clap along, unsure at first and then loudly. " +
        N(12) + "The crew finished to the beat of their own feet, a little ragged on the turns but completely together on the final freeze. " +
        N(13) + "When the sound technician finally waved an apology, the crowd was already standing. " +
        N(14) + "Northfield placed second, losing points for timing. " +
        N(15) + "In the van afterward, Marcus asked why she had not simply restarted. " +
        N(16) + "Dayo watched the streetlights slide past the window for a while. " +
        N(17) + "\"We didn't learn it with music,\" she said. \"We learned it with each other.\"" +
        "</p>",
      claims: [
        {
          id: "restart",
          sol: "9.RL.1.B",
          stem: "Based on sentence 4, readers can infer that Dayo avoids a restart mainly because she —",
          choices: [
            { letter: "A", text: "does not know the rules of the contest" },
            { letter: "B", text: "fears the crew would lose its momentum" },
            { letter: "C", text: "wants to finish before the other crews" },
            { letter: "D", text: "thinks the judges have already left" }
          ],
          correct: "B"
        },
        {
          id: "leader",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Dayo as a leader?",
          choices: [
            { letter: "A", text: "She waits for the adults in charge to solve problems." },
            { letter: "B", text: "She cares most about what the judges think." },
            { letter: "C", text: "She blames others when something goes wrong." },
            { letter: "D", text: "She acts quickly and trusts her crew's history." }
          ],
          correct: "D"
        },
        {
          id: "keeping",
          sol: "9.RL.2.B",
          stem: "In sentence 10, the image of the whole gym keeping time with the crew mainly creates a mood of —",
          choices: [
            { letter: "A", text: "growing energy shared by everyone" },
            { letter: "B", text: "confusion spreading through the stands" },
            { letter: "C", text: "quiet worry among the judges" },
            { letter: "D", text: "boredom as the routine drags on" }
          ],
          correct: "A"
        },
        {
          id: "silentgym",
          sol: "9.RL.3.B",
          stem: "How does the sudden silence of the gym in sentence 2 affect the crew?",
          choices: [
            { letter: "A", text: "It lets them hear the judges' comments." },
            { letter: "B", text: "It makes them dance much faster than they had planned." },
            { letter: "C", text: "It leaves them exposed and unsure what to do." },
            { letter: "D", text: "It convinces them to walk off the floor." }
          ],
          correct: "C"
        },
        {
          id: "endtone",
          sol: "9.RL.2.C",
          stem: "The tone of Dayo's words in sentence 17 is best described as —",
          choices: [
            { letter: "A", text: "bitter about the timing penalty" },
            { letter: "B", text: "nervous about the next contest" },
            { letter: "C", text: "playful and teasing toward Marcus" },
            { letter: "D", text: "calm and quietly certain" }
          ],
          correct: "D"
        },
        {
          id: "wetcoat",
          sol: "9.RV.1.F",
          stem: "In sentence 3, saying the silence settled on Dayo's shoulders like a wet coat suggests that the silence feels —",
          choices: [
            { letter: "A", text: "cold, heavy, and hard to shake off" },
            { letter: "B", text: "refreshing after a long, hot routine" },
            { letter: "C", text: "familiar from earlier practices" },
            { letter: "D", text: "funny to the people in the stands" }
          ],
          correct: "A"
        }
      ]
    },

    /* 3 ─ Literary, level 3 — fictional ancient city */
    {
      id: "g9-rl-c42-granary-tally",
      family: "G9",
      title: "The Granary Tally",
      kind: "Literary · 9.RL",
      blurb: "An apprentice scribe in the river city of Tal Orisse must decide what to write.",
      level: 3,
      passage:
        "<p>" + N(1) + "In the river city of Tal Orisse, every grain of barley was counted twice: once by the porters who carried it and once by the scribes who pressed its number into wet clay. " +
        N(2) + "Nemu had been an apprentice for three floods, long enough to know that the second count mattered more. " +
        N(3) + "That spring the river rose late and fell early, and the eastern granary, which should have held four hundred baskets, held barely two hundred and sixty. " +
        N(4) + "Steward Ankhet stood over her while she worked, his shadow lying across the tablet like a hand. " +
        N(5) + "\"Write four hundred,\" he said quietly. " +
        N(6) + "\"The council meets at dusk, and a frightened council makes foolish laws.\" " +
        N(7) + "Nemu understood his reasoning; she had seen the market riots of her childhood, when rumors of hunger spread faster than any boat. " +
        N(8) + "Yet she also remembered her teacher's rule, cut above the door of the scribes' hall: the clay does not argue, so it must not lie. " +
        N(9) + "A false number would not fill a single basket. " +
        N(10) + "It would only send the city into summer believing it was safe. " +
        N(11) + "She pressed the true figure into the tablet, stroke by careful stroke, and beneath it she added a second line: the western fields could be planted again if the canal gates were opened before the heat. " +
        N(12) + "Ankhet read it in silence. " +
        N(13) + "For a long moment Nemu heard only the river beyond the wall, patient and indifferent. " +
        N(14) + "Then the steward rolled the tablet in damp linen and tucked it under his arm. " +
        N(15) + "\"Come with me,\" he said. \"If they are going to be frightened, they should also be told what to do.\"" +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does Nemu's decision most clearly develop?",
          choices: [
            { letter: "A", text: "Leaders should hide bad news to keep the peace." },
            { letter: "B", text: "Hard truths are most useful when paired with a plan." },
            { letter: "C", text: "Young workers should always obey their superiors." },
            { letter: "D", text: "Natural disasters cannot be prepared for in any way at all." }
          ],
          correct: "B"
        },
        {
          id: "riots",
          sol: "9.RL.3.A",
          stem: "The memory of the market riots in sentence 7 mainly helps the reader understand —",
          choices: [
            { letter: "A", text: "why Nemu first chose to become a scribe" },
            { letter: "B", text: "how the city's boats carried barley to market" },
            { letter: "C", text: "why the steward's request is tempting to Nemu" },
            { letter: "D", text: "how the council punished people who spread rumors" }
          ],
          correct: "C"
        },
        {
          id: "river",
          sol: "9.RL.2.B",
          stem: "In sentence 13, describing the river as patient and indifferent mainly suggests that —",
          choices: [
            { letter: "A", text: "nature will not change to suit the city's hopes" },
            { letter: "B", text: "the flood will soon return to normal" },
            { letter: "C", text: "Nemu finds the river's sound comforting" },
            { letter: "D", text: "the steward is waiting for the water to rise again soon" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because the story is told closely through Nemu's thoughts, the reader —",
          choices: [
            { letter: "A", text: "learns what each council member plans to say at dusk" },
            { letter: "B", text: "knows exactly what the steward is feeling" },
            { letter: "C", text: "sees the scene from the porters' position" },
            { letter: "D", text: "understands both sides of the choice she weighs" }
          ],
          correct: "D"
        },
        {
          id: "steward",
          sol: "9.RL.1.B",
          stem: "Based on sentences 14 and 15, readers can best infer that Ankhet —",
          choices: [
            { letter: "A", text: "plans to punish Nemu in front of the council" },
            { letter: "B", text: "intends to rewrite the tablet on his own" },
            { letter: "C", text: "has been persuaded by the plan Nemu added" },
            { letter: "D", text: "no longer believes the granary is short" }
          ],
          correct: "C"
        },
        {
          id: "shadow",
          sol: "9.RV.1.E",
          stem: "The author describes Ankhet's shadow lying across the tablet like a hand (sentence 4) mainly to emphasize —",
          choices: [
            { letter: "A", text: "the late hour of the afternoon" },
            { letter: "B", text: "the pressure he puts on Nemu's work" },
            { letter: "C", text: "his kindness toward the apprentice" },
            { letter: "D", text: "the darkness inside the scribes' hall" }
          ],
          correct: "B"
        }
      ]
    },

    /* 4 ─ Literary, level 2 — sports science */
    {
      id: "g9-rl-c42-treadmill-test",
      family: "G9",
      title: "The Last Number",
      kind: "Literary · 9.RL",
      blurb: "Rafael joins a university fitness study and dreads the moment he has to stop.",
      level: 2,
      passage:
        "<p>" + N(1) + "The mask over Rafael's mouth and nose smelled like a new rubber ball, and the tube attached to it ran to a machine that beeped every time he breathed. " +
        N(2) + "He had volunteered for the university's youth endurance study because his cross-country coach said it would be interesting. " +
        N(3) + "Now, jogging on a treadmill that tilted a little higher every two minutes, interesting felt like the wrong word. " +
        N(4) + "Dr. Okafor, the researcher, watched a screen of jagged green lines and called out the time in a voice as even as a metronome. " +
        N(5) + "\"Eleven minutes. You're doing fine.\" " +
        N(6) + "Rafael's legs were not doing fine. " +
        N(7) + "His thighs burned, his shoes felt filled with sand, and he could hear his own heartbeat in his ears. " +
        N(8) + "The worst part was knowing that the test ended only when he decided to grab the rail and stop. " +
        N(9) + "Whatever number appeared then would be his, printed on a sheet, compared with everyone else's. " +
        N(10) + "At thirteen minutes and forty seconds, he grabbed the rail. " +
        N(11) + "The belt slowed, and he bent over, gasping, already ashamed. " +
        N(12) + "Dr. Okafor did not look disappointed. " +
        N(13) + "She turned the screen toward him and pointed to the place where one green line suddenly bent upward. " +
        N(14) + "\"That bend is the point where your body started working harder to clear the burn,\" she said. " +
        N(15) + "\"Training can push it later. Now we know where to start.\" " +
        N(16) + "Rafael stared at the line. " +
        N(17) + "He had expected a grade, but this looked more like a map." +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which statement best describes how Rafael changes during the story?",
          choices: [
            { letter: "A", text: "He moves from shame about stopping to curiosity about his data." },
            { letter: "B", text: "He moves from excitement about the study to boredom with it." },
            { letter: "C", text: "He moves from trust in his coach to anger at him." },
            { letter: "D", text: "He moves from confidence in his strong legs to a fear of running." }
          ],
          correct: "A"
        },
        {
          id: "metronome",
          sol: "9.RL.2.A",
          stem: "In sentence 4, Dr. Okafor's voice is compared to a metronome mainly to show that it is —",
          choices: [
            { letter: "A", text: "loud enough to hear over the machine" },
            { letter: "B", text: "musical and pleasant to listen to" },
            { letter: "C", text: "impatient with how slowly he runs" },
            { letter: "D", text: "steady and free of strong emotion" }
          ],
          correct: "D"
        },
        {
          id: "map",
          sol: "9.RL.2.C",
          stem: "The author ends the story with the contrast between a grade and a map most likely to show that Rafael —",
          choices: [
            { letter: "A", text: "plans to quit the cross-country team" },
            { letter: "B", text: "now sees the result as a guide, not a judgment" },
            { letter: "C", text: "still believes he failed the endurance test" },
            { letter: "D", text: "is confused by the scientist's technical explanation" }
          ],
          correct: "B"
        },
        {
          id: "tilt",
          sol: "9.RL.3.A",
          stem: "The detail that the treadmill tilts higher every two minutes (sentence 3) mainly helps build the plot by —",
          choices: [
            { letter: "A", text: "explaining why the study needs volunteers" },
            { letter: "B", text: "showing that the machine is broken" },
            { letter: "C", text: "making the pressure on Rafael rise steadily" },
            { letter: "D", text: "giving Rafael a reason to trust his coach's advice" }
          ],
          correct: "C"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which idea does the story most clearly develop about measuring performance?",
          choices: [
            { letter: "A", text: "A test result can show where growth begins." },
            { letter: "B", text: "Scientists care little about how athletes feel." },
            { letter: "C", text: "Only the highest scores are worth recording." },
            { letter: "D", text: "Comparing runners with each other is unfair." }
          ],
          correct: "A"
        },
        {
          id: "volunteered",
          sol: "9.RV.1.B",
          stem: "The word volunteered in sentence 2 shares a root with voluntary. That root carries the idea of —",
          choices: [
            { letter: "A", text: "being paid for work" },
            { letter: "B", text: "being forced by rules" },
            { letter: "C", text: "acting by one's own will" },
            { letter: "D", text: "working as part of a team" }
          ],
          correct: "C"
        }
      ]
    },

    /* 5 ─ Literary, level 1 — county fair */
    {
      id: "g9-rl-c42-crooked-lattice",
      family: "G9",
      title: "The Crooked Lattice",
      kind: "Literary · 9.RL",
      blurb: "Benny makes the crust for his grandfather's county fair peach pie for the first time.",
      level: 1,
      passage:
        "<p>" + N(1) + "My grandfather, Teodoro Ruiz, has entered a peach pie in the Linwood County Fair every August for twenty-two years. " +
        N(2) + "This year, for the first time, he let me make the crust. " +
        N(3) + "I rolled it out on the kitchen table at six in the morning while he sliced peaches and pretended not to watch. " +
        N(4) + "The dough tore twice. " +
        N(5) + "Each time, I wanted to throw it out and start over, but Abuelo just handed me a little water and said, \"Pinch it. Dough forgives.\" " +
        N(6) + "By the time the pie came out of the oven, the lattice on top leaned to one side like a fence after a storm. " +
        N(7) + "I asked if we should buy a pie from the grocery store and pretend. " +
        N(8) + "Abuelo laughed so hard he had to sit down. " +
        N(9) + "At the fair, our pie sat on a long white table between a perfect cherry tart and an apple pie with leaves cut into its crust. " +
        N(10) + "I could not stop staring at our crooked lattice. " +
        N(11) + "The three judges took small bites from every entry, wrote on their clipboards, and moved on without a word. " +
        N(12) + "When the ribbons were pinned, ours had none. " +
        N(13) + "Then a judge with flour on her sleeve came back and tucked a small card under our plate. " +
        N(14) + "It said: Best filling on the table. Fix the crust and come back. " +
        N(15) + "Abuelo read it twice and handed it to me. " +
        N(16) + "\"She is talking to you,\" he said. " +
        N(17) + "I put the card in my wallet, and I have practiced crusts every Sunday since." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"The Crooked Lattice\"?",
          choices: [
            { letter: "A", text: "Contests reward only people who never make mistakes." },
            { letter: "B", text: "Store-bought food is easier than homemade food." },
            { letter: "C", text: "Family traditions should never be changed by anyone." },
            { letter: "D", text: "A mistake can be a starting point for growth." }
          ],
          correct: "D"
        },
        {
          id: "laugh",
          sol: "9.RL.1.B",
          stem: "Readers can best infer that Abuelo laughs in sentence 8 because he —",
          choices: [
            { letter: "A", text: "is embarrassed by the crooked pie" },
            { letter: "B", text: "finds the idea of faking the pie absurd" },
            { letter: "C", text: "thinks a store pie would surely win" },
            { letter: "D", text: "wants Benny to give up on baking pies for good" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.3.B",
          stem: "Because Benny tells the story in the first person, the reader —",
          choices: [
            { letter: "A", text: "shares his worry about the crooked crust directly" },
            { letter: "B", text: "learns what each of the judges thought of every pie" },
            { letter: "C", text: "knows exactly what Abuelo is privately thinking" },
            { letter: "D", text: "sees the contest from behind the judges' table" }
          ],
          correct: "A"
        },
        {
          id: "fence",
          sol: "9.RL.2.A",
          stem: "In sentence 6, the lattice is compared to a fence after a storm mainly to show that it is —",
          choices: [
            { letter: "A", text: "dark and badly burned" },
            { letter: "B", text: "strong and sturdy" },
            { letter: "C", text: "tilted and uneven" },
            { letter: "D", text: "soaked with peach juice" }
          ],
          correct: "C"
        },
        {
          id: "entry",
          sol: "9.RV.1.C",
          stem: "In sentence 11, the word entry most nearly means —",
          choices: [
            { letter: "A", text: "a pie submitted to the contest" },
            { letter: "B", text: "a door leading into the fair barn" },
            { letter: "C", text: "a note written by one of the judges" },
            { letter: "D", text: "a ticket used to get into the fair" }
          ],
          correct: "A"
        },
        {
          id: "response",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows how Benny responds to the judge's card?",
          choices: [
            { letter: "A", text: "Sentence 10: He stares at the crooked lattice." },
            { letter: "B", text: "Sentence 12: He sees that their pie has no ribbon." },
            { letter: "C", text: "Sentence 15: Abuelo reads the card twice." },
            { letter: "D", text: "Sentence 17: He keeps the card and practices." }
          ],
          correct: "D"
        }
      ]
    },

    /* 6 ─ Informational, level 1 — sports science */
    {
      id: "g9-ri-c42-sleep-training",
      family: "G9",
      title: "The Training You Do in Bed",
      kind: "Informational · 9.RI",
      blurb: "Why sports scientists call sleep an athlete's most underrated workout.",
      level: 1,
      passage:
        "<p>" + N(1) + "Most athletes think of training as something that happens on a field, a track, or a court. " +
        N(2) + "Sports scientists increasingly point to a quieter part of the schedule: sleep. " +
        N(3) + "During deep sleep, the body releases growth hormone, which helps repair muscle fibers that were strained during exercise. " +
        N(4) + "Sleep also gives the brain time to store new skills, such as the timing of a jump shot or the rhythm of a swim stroke. " +
        N(5) + "When sleep is cut short, these processes are interrupted. " +
        N(6) + "In one study, a group of college basketball players were asked to extend their sleep to about ten hours a night for several weeks. " +
        N(7) + "By the end, their sprint times had improved and their free-throw accuracy had risen by roughly nine percent. " +
        N(8) + "Other research has linked short sleep in teenage athletes to a higher rate of injuries, possibly because tired athletes react more slowly. " +
        N(9) + "Teenagers face a special challenge. " +
        N(10) + "Their internal body clocks naturally shift later during adolescence, so many feel wide awake at 11 p.m. but must wake at 6 a.m. for school or early practice. " +
        N(11) + "Experts generally recommend eight to ten hours of sleep for teens, yet surveys suggest most get fewer than eight. " +
        N(12) + "Coaches can help by avoiding very early practices and late-night team chats. " +
        N(13) + "Athletes can help themselves by keeping a regular bedtime, even on weekends, and putting screens away an hour before sleep. " +
        N(14) + "No supplement or new pair of shoes can replace what happens during those hours in the dark. " +
        N(15) + "For an athlete, a good night's sleep may be the most underrated workout of all." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          stem: "What is the main idea of \"The Training You Do in Bed\"?",
          choices: [
            { letter: "A", text: "Teen athletes should refuse to attend early practices." },
            { letter: "B", text: "Sleep is a vital part of athletic training." },
            { letter: "C", text: "Growth hormone is the main key to building muscle." },
            { letter: "D", text: "Basketball players need more sleep than other athletes do." }
          ],
          correct: "B"
        },
        {
          id: "teens",
          sol: "9.RI.1.B",
          stem: "According to the article, why do many teenagers have trouble getting enough sleep?",
          choices: [
            { letter: "A", text: "Their body clocks shift later while school starts early." },
            { letter: "B", text: "They drink too much caffeine before their practices." },
            { letter: "C", text: "They train for more hours each week than adults do." },
            { letter: "D", text: "Their muscles need less time to repair than adults' muscles do." }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "The article is mainly organized by —",
          choices: [
            { letter: "A", text: "telling one athlete's season in time order" },
            { letter: "B", text: "comparing basketball with swimming and track" },
            { letter: "C", text: "listing the steps in a weekly workout" },
            { letter: "D", text: "explaining effects, then offering solutions" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          stem: "Which sentence states the author's opinion rather than a reported finding?",
          choices: [
            { letter: "A", text: "Sentence 3, about growth hormone and muscle repair" },
            { letter: "B", text: "Sentence 7, about sprint times and free throws" },
            { letter: "C", text: "Sentence 15, about the most underrated workout" },
            { letter: "D", text: "Sentence 11, about expert advice and surveys" }
          ],
          correct: "C"
        },
        {
          id: "underrated",
          sol: "9.RV.1.B",
          stem: "In sentence 15, the word underrated most nearly means —",
          choices: [
            { letter: "A", text: "valued less than it deserves" },
            { letter: "B", text: "practiced more than is needed" },
            { letter: "C", text: "disliked by most coaches" },
            { letter: "D", text: "harder than it first looks" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.3.A",
          stem: "Which sentence offers the strongest evidence that extra sleep can improve athletic performance?",
          choices: [
            { letter: "A", text: "Sentence 2: Scientists point to sleep." },
            { letter: "B", text: "Sentence 7: Sprint times and free throws improved." },
            { letter: "C", text: "Sentence 12: Coaches can avoid early practices." },
            { letter: "D", text: "Sentence 14: No new pair of shoes can replace sleep." }
          ],
          correct: "B"
        }
      ]
    },

    /* 7 ─ Informational, level 2 — fictional ancient city */
    {
      id: "g9-ri-c42-stepwells",
      family: "G9",
      title: "The Stepwells of Kesh-Aram",
      kind: "Informational · 9.RI",
      blurb: "How an imagined desert city kept thirty thousand people supplied with water.",
      level: 2,
      passage:
        "<p>" + N(1) + "The desert city of Kesh-Aram received rain on perhaps ten days a year, yet at its height it supported more than thirty thousand people. " +
        N(2) + "Archaeologists who have studied its ruins agree that the city's survival depended on water engineering, not luck. " +
        N(3) + "The most visible remains are its stepwells, deep stone pits lined with staircases that zigzag down to the water table. " +
        N(4) + "As the groundwater rose and fell with the seasons, residents simply walked down to wherever the water happened to be. " +
        N(5) + "A large stepwell near the city's center descends nine stories and could have served several thousand households. " +
        N(6) + "Less visible, but perhaps more important, were the qanats, sloping underground tunnels that carried water from distant hills into the city. " +
        N(7) + "Because the tunnels ran beneath the surface, very little water was lost to evaporation in the hot sun. " +
        N(8) + "Survey teams have traced one qanat for more than eleven kilometers. " +
        N(9) + "Clay tablets found in a collapsed storeroom list the names of \"keepers of the wells,\" officials who assigned water to each neighborhood. " +
        N(10) + "Some scholars believe these keepers held as much power as the city's priests, although the tablets alone cannot prove this. " +
        N(11) + "The system was not perfect. " +
        N(12) + "Layers of silt in the lower steps suggest that the wells were neglected during the city's final century, and the qanats may have collapsed after a series of earthquakes. " +
        N(13) + "Still, for nearly six hundred years, Kesh-Aram turned a dry valley into a crowded, working city. " +
        N(14) + "Engineers studying water shortages in desert regions today have begun to look at its tunnels with new respect." +
        "</p>",
      claims: [
        {
          id: "central",
          sol: "9.RI.1.A",
          stem: "The central idea of the passage is that Kesh-Aram —",
          choices: [
            { letter: "A", text: "was abandoned mainly because of earthquakes" },
            { letter: "B", text: "was ruled by a small group of powerful priests" },
            { letter: "C", text: "thrived because of clever water systems" },
            { letter: "D", text: "received more rain than nearby desert cities" }
          ],
          correct: "C"
        },
        {
          id: "qanat",
          sol: "9.RI.1.B",
          stem: "According to the passage, why did the qanats lose so little water?",
          choices: [
            { letter: "A", text: "They were lined with polished stone." },
            { letter: "B", text: "They were guarded by the keepers of the wells." },
            { letter: "C", text: "They were filled only during the rainy season." },
            { letter: "D", text: "They ran underground, out of the hot sun." }
          ],
          correct: "D"
        },
        {
          id: "turn",
          sol: "9.RI.2.B",
          stem: "The author includes sentence 11, The system was not perfect, mainly to —",
          choices: [
            { letter: "A", text: "shift from the system's strengths to its weaknesses" },
            { letter: "B", text: "prove that the city was poorly governed by its priests" },
            { letter: "C", text: "introduce the officials called keepers of the wells" },
            { letter: "D", text: "explain how the stepwells were first built" }
          ],
          correct: "A"
        },
        {
          id: "silt",
          sol: "9.RI.3.A",
          stem: "Which sentence gives the strongest evidence that the wells were neglected late in the city's history?",
          choices: [
            { letter: "A", text: "Sentence 5, about the nine-story central stepwell" },
            { letter: "B", text: "Sentence 12, about layers of silt in the lower steps" },
            { letter: "C", text: "Sentence 9, about the tablets naming the keepers" },
            { letter: "D", text: "Sentence 14, about engineers studying the tunnels today" }
          ],
          correct: "B"
        },
        {
          id: "speculation",
          sol: "9.RI.1.C",
          stem: "Which statement from the passage is a speculation rather than a confirmed fact?",
          choices: [
            { letter: "A", text: "Survey teams have traced one qanat for eleven kilometers." },
            { letter: "B", text: "The stepwells are stone pits lined with staircases." },
            { letter: "C", text: "Clay tablets list the names of the keepers of the wells." },
            { letter: "D", text: "The keepers held as much power as the priests." }
          ],
          correct: "D"
        },
        {
          id: "vapor",
          sol: "9.RV.1.B",
          stem: "The word evaporation in sentence 7 contains the root vapor. Based on this root, evaporation most nearly means —",
          choices: [
            { letter: "A", text: "water turning into a gas" },
            { letter: "B", text: "water soaking into the soil" },
            { letter: "C", text: "water freezing into ice" },
            { letter: "D", text: "water flowing down a hill" }
          ],
          correct: "A"
        }
      ]
    },

    /* 8 ─ Informational, level 3 — dance competitions */
    {
      id: "g9-ri-c42-scoreboard",
      family: "G9",
      title: "Behind the Judges' Table",
      kind: "Informational · 9.RI",
      blurb: "How competitive dance routines are actually scored, and why judges disagree.",
      level: 3,
      passage:
        "<p>" + N(1) + "To a spectator, a dance competition can look like a contest of pure feeling: the crowd cheers loudest for the routine that moves it, and everyone waits to see whether the judges agree. " +
        N(2) + "Behind the judges' table, however, the process is far more structured. " +
        N(3) + "At most large competitions, each judge scores a routine in several separate categories, commonly technique, choreography, performance, and overall impression. " +
        N(4) + "Technique covers the measurable basics, such as whether turns are balanced, landings are controlled, and dancers stay in time with the music. " +
        N(5) + "Choreography rewards the design of the routine itself, including how well the movement fits the music and how fully the dancers use the floor. " +
        N(6) + "Performance, the hardest category to define, asks whether the dancers project emotion and hold the audience's attention. " +
        N(7) + "Scores from a panel of three to five judges are then combined, and some events drop the highest and lowest score to limit the effect of any one judge's taste. " +
        N(8) + "Even so, disagreements are common. " +
        N(9) + "A judge trained in ballet may value clean lines and pointed feet, while one with a hip-hop background may prize groove and musicality. " +
        N(10) + "Critics argue that this makes results feel random; supporters reply that a mix of backgrounds keeps any single style from dominating. " +
        N(11) + "Many competitions now give dancers recorded comments from each judge, which often prove more useful than the score. " +
        N(12) + "A number tells a team where it placed, but a judge's voice explaining that the second formation drifted off the beat tells it what to fix. " +
        N(13) + "In that sense, the scoreboard is only the surface of the conversation." +
        "</p>",
      claims: [
        {
          id: "org",
          sol: "9.RI.2.A",
          stem: "The passage is mainly organized by —",
          choices: [
            { letter: "A", text: "tracing the history of dance contests over time" },
            { letter: "B", text: "contrasting an outside view with how judging works" },
            { letter: "C", text: "comparing ballet and hip-hop routines one step at a time" },
            { letter: "D", text: "listing contest rules in their order of importance" }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "9.RI.2.B",
          stem: "The author begins with sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "argue that crowds are better judges than trained experts" },
            { letter: "B", text: "describe the author's favorite routine from a contest" },
            { letter: "C", text: "present a common view that the passage then complicates" },
            { letter: "D", text: "define the technique category for new dancers" }
          ],
          correct: "C"
        },
        {
          id: "drop",
          sol: "9.RI.1.B",
          stem: "According to the passage, why do some events drop the highest and lowest scores?",
          choices: [
            { letter: "A", text: "To limit the influence of one judge's taste." },
            { letter: "B", text: "To finish the long competition day more quickly." },
            { letter: "C", text: "To reward the teams that happen to perform last." },
            { letter: "D", text: "To give hip-hop crews an advantage over ballet." }
          ],
          correct: "A"
        },
        {
          id: "argument",
          sol: "9.RI.1.C",
          stem: "Which sentence reports competing opinions rather than describing how scoring works?",
          choices: [
            { letter: "A", text: "Sentence 4, about turns, landings, and timing" },
            { letter: "B", text: "Sentence 5, about the design of a routine" },
            { letter: "C", text: "Sentence 7, about combining the judges' scores" },
            { letter: "D", text: "Sentence 10, about critics and supporters" }
          ],
          correct: "D"
        },
        {
          id: "support",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the claim in sentence 11 that recorded comments are often more useful than scores?",
          choices: [
            { letter: "A", text: "Sentence 3, which names the four scoring categories" },
            { letter: "B", text: "Sentence 9, which contrasts ballet and hip-hop judges" },
            { letter: "C", text: "Sentence 12, which shows a comment naming what to fix" },
            { letter: "D", text: "Sentence 8, which says disagreements are common" }
          ],
          correct: "C"
        },
        {
          id: "surface",
          sol: "9.RV.1.F",
          stem: "In sentence 13, calling the scoreboard only the surface of the conversation suggests that —",
          choices: [
            { letter: "A", text: "scores reveal only part of what judges think" },
            { letter: "B", text: "scoreboards are often too small to read easily" },
            { letter: "C", text: "judges talk with each other during routines" },
            { letter: "D", text: "crowds usually ignore the official results" }
          ],
          correct: "A"
        }
      ]
    },

    /* 9 ─ Vocabulary, level 2 — county fair */
    {
      id: "g9-rv-c42-barn-c",
      family: "G9",
      title: "Night Shift in Barn C",
      kind: "Vocabulary · 9.RV",
      blurb: "Hana keeps watch over the fair's calves while a thunderstorm rolls through.",
      level: 2,
      passage:
        "<p>" + N(1) + "The rain had turned the fairgrounds into a field of mud, and by nine o'clock the 4-H kids in Barn C looked as <strong>bedraggled</strong> as their animals. " +
        N(2) + "Hana Kobayashi had drawn the night shift, which meant checking water buckets, sweeping aisles, and making sure no calf kicked loose from its tie. " +
        N(3) + "Her older cousin Joaquin called the job \"babysitting cows,\" but Hana was <strong>diligent</strong> about it, writing each check on a clipboard with the exact time. " +
        N(4) + "Around ten, a thunderclap shook the metal roof, and the calves <strong>jostled</strong> against one another, bawling and stamping in their pens. " +
        N(5) + "One heifer, a nervous red one named Biscuit, pulled so hard on her rope that the post creaked. " +
        N(6) + "Hana did not shout. " +
        N(7) + "She slipped into the pen, rested a palm on Biscuit's neck, and talked about nothing in particular, the weather and the funnel cakes and the Ferris wheel, until the animal's breathing slowed. " +
        N(8) + "The storm moved east, and the barn settled into a quiet <strong>reprieve</strong>, broken only by the drip of water from the eaves. " +
        N(9) + "At midnight, the barn superintendent, Mr. Delacroix, came by to <strong>appraise</strong> the aisles. " +
        N(10) + "He looked at the swept floor, the full buckets, and the clipboard with its neat column of times. " +
        N(11) + "Then he looked at Biscuit, chewing calmly as if no storm had ever happened. " +
        N(12) + "\"Your cousin said you'd be bored,\" he told Hana. " +
        N(13) + "\"You don't look bored.\" " +
        N(14) + "She wasn't. " +
        N(15) + "She felt <strong>exuberant</strong>, though she was careful only to smile, because the calves had finally fallen asleep." +
        "</p>",
      claims: [
        {
          id: "bedraggled",
          sol: "9.RV.1.C",
          stem: "In sentence 1, the word bedraggled most nearly means —",
          choices: [
            { letter: "A", text: "wet, muddy, and messy" },
            { letter: "B", text: "cheerful and lively" },
            { letter: "C", text: "hungry and restless" },
            { letter: "D", text: "proud and well groomed" }
          ],
          correct: "A"
        },
        {
          id: "super",
          sol: "9.RV.1.B",
          stem: "The word superintendent in sentence 9 begins with the prefix super-, meaning \"over\" or \"above.\" A superintendent is most likely someone who —",
          choices: [
            { letter: "A", text: "cleans the barns late into the night" },
            { letter: "B", text: "raises more calves than anyone" },
            { letter: "C", text: "oversees the barn and its workers" },
            { letter: "D", text: "judges the cattle on show day" }
          ],
          correct: "C"
        },
        {
          id: "jostled",
          sol: "9.RV.1.E",
          stem: "The author could have written moved instead of jostled in sentence 4. Compared with moved, the word jostled adds a sense of —",
          choices: [
            { letter: "A", text: "slow, careful stepping" },
            { letter: "B", text: "rough, crowded pushing" },
            { letter: "C", text: "cheerful, playful games" },
            { letter: "D", text: "sleepy, peaceful stillness" }
          ],
          correct: "B"
        },
        {
          id: "babysitting",
          sol: "9.RV.1.F",
          stem: "Joaquin's description of the job as babysitting cows (sentence 3) suggests that he thinks the job is —",
          choices: [
            { letter: "A", text: "dangerous and exhausting" },
            { letter: "B", text: "important to the fair's success" },
            { letter: "C", text: "better suited to an adult" },
            { letter: "D", text: "dull and unimportant" }
          ],
          correct: "D"
        },
        {
          id: "reprieve",
          sol: "9.RV.1.C",
          stem: "In sentence 8, the word reprieve most nearly means —",
          choices: [
            { letter: "A", text: "a sudden, loud warning" },
            { letter: "B", text: "a long and very tiring journey" },
            { letter: "C", text: "a careful inspection" },
            { letter: "D", text: "a short break from trouble" }
          ],
          correct: "D"
        },
        {
          id: "exuberant",
          sol: "9.RL.2.C",
          stem: "The author says Hana feels exuberant in sentence 15 but shows her only smiling. This choice mainly shows that Hana —",
          choices: [
            { letter: "A", text: "keeps her strong joy quiet for the calves' sake" },
            { letter: "B", text: "is secretly disappointed in Mr. Delacroix" },
            { letter: "C", text: "is too tired by midnight to feel very much" },
            { letter: "D", text: "wants her cousin to hear about all of her hard work" }
          ],
          correct: "A"
        }
      ]
    },

    /* 10 ─ Vocabulary, level 3 — fictional ancient city */
    {
      id: "g9-rv-c42-sarvesh-market",
      family: "G9",
      title: "Market Day in Sarvesh",
      kind: "Vocabulary · 9.RV",
      blurb: "A potter's son bargains alone for the first time at the great river market.",
      level: 3,
      passage:
        "<p>" + N(1) + "On the first day of every moon, the great market of Sarvesh spilled out of its walls and filled the riverbank with a <strong>cacophony</strong> of goats, bells, drums, and shouting merchants. " +
        N(2) + "Ilyas, the potter's son, had been sent with a single basket of bowls and strict instructions to come home with salt, lamp oil, and every copper he could spare. " +
        N(3) + "His father's profit that season had been <strong>meager</strong>, barely enough to repair the kiln after the spring rains cracked it. " +
        N(4) + "The first trader Ilyas approached, a woman draped in <strong>ornate</strong> blue cloth stitched with silver birds, picked up a bowl and <strong>scrutinized</strong> it, turning it slowly in the light as though searching for a lie hidden in the glaze. " +
        N(5) + "\"Three coppers,\" she said. " +
        N(6) + "Ilyas knew the bowls were worth five. " +
        N(7) + "He had watched his father <strong>haggle</strong> for years, and he had learned that the best bargainers never sounded eager. " +
        N(8) + "He shrugged, took the bowl gently back, and began wrapping it in straw. " +
        N(9) + "\"Four,\" the woman said, before he had finished the first knot. " +
        N(10) + "By the time the sun stood over the temple roof, his basket was empty and his purse was heavier than he had dared to hope. " +
        N(11) + "He bought the salt and the oil, then paused at a stall selling honey cakes. " +
        N(12) + "His father had told him to be <strong>prudent</strong>. " +
        N(13) + "Ilyas counted his coins twice, bought one small cake, and broke it in half to carry home. " +
        N(14) + "Walking back through the gate, he felt the noise of the market fall away behind him like a river sinking into sand." +
        "</p>",
      claims: [
        {
          id: "cacophony",
          sol: "9.RV.1.C",
          stem: "In sentence 1, the word cacophony most nearly means —",
          choices: [
            { letter: "A", text: "a colorful parade" },
            { letter: "B", text: "a pleasant song" },
            { letter: "C", text: "a harsh mix of loud sounds" },
            { letter: "D", text: "a large, pushing crowd of buyers" }
          ],
          correct: "C"
        },
        {
          id: "meager",
          sol: "9.RV.1.B",
          stem: "As used in sentence 3, the word meager most nearly means —",
          choices: [
            { letter: "A", text: "scarcely enough" },
            { letter: "B", text: "surprisingly large" },
            { letter: "C", text: "carefully saved" },
            { letter: "D", text: "unfairly taken" }
          ],
          correct: "A"
        },
        {
          id: "scrutinized",
          sol: "9.RV.1.E",
          stem: "The author could have written looked at instead of scrutinized in sentence 4. Compared with looked at, scrutinized suggests the trader is —",
          choices: [
            { letter: "A", text: "bored by the potter's plain goods" },
            { letter: "B", text: "admiring the color of the glaze" },
            { letter: "C", text: "hurrying to finish a quick sale" },
            { letter: "D", text: "examining it closely for a flaw" }
          ],
          correct: "D"
        },
        {
          id: "sand",
          sol: "9.RV.1.F",
          stem: "In sentence 14, saying the noise fell away like a river sinking into sand suggests that the sound —",
          choices: [
            { letter: "A", text: "grows suddenly louder near the gate" },
            { letter: "B", text: "fades slowly until it is gone" },
            { letter: "C", text: "follows Ilyas all the way home" },
            { letter: "D", text: "turns into the sound of the river" }
          ],
          correct: "B"
        },
        {
          id: "prudent",
          sol: "9.RV.1.C",
          stem: "Which sentence best helps the reader understand the meaning of prudent in sentence 12?",
          choices: [
            { letter: "A", text: "Sentence 13: He counts twice and buys one small cake." },
            { letter: "B", text: "Sentence 9: The trader raises her price to four." },
            { letter: "C", text: "Sentence 11: He pauses at a honey cake stall." },
            { letter: "D", text: "Sentence 10: His purse is far heavier than he had hoped." }
          ],
          correct: "A"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          stem: "The images in sentence 1 (goats, bells, drums, and shouting merchants) mainly create a mood that is —",
          choices: [
            { letter: "A", text: "peaceful and sleepy" },
            { letter: "B", text: "gloomy and quietly threatening" },
            { letter: "C", text: "lively and overwhelming" },
            { letter: "D", text: "formal and solemn" }
          ],
          correct: "C"
        }
      ]
    },

    /* 11 ─ Vocabulary, level 1 — sports science */
    {
      id: "g9-rv-c42-warm-up",
      family: "G9",
      title: "Rethinking the Warm-Up",
      kind: "Vocabulary · 9.RV",
      blurb: "Why many coaches have traded long, still stretches for moving warm-ups.",
      level: 1,
      passage:
        "<p>" + N(1) + "For decades, many teams began practice by sitting in a circle and holding long stretches, reaching for their toes and counting slowly to thirty. " +
        N(2) + "This kind of <strong>static</strong> stretching, in which a muscle is held still in one lengthened position, felt like the responsible way to prepare for exercise. " +
        N(3) + "Sports scientists now recommend a different approach. " +
        N(4) + "A <strong>dynamic</strong> warm-up uses controlled, moving exercises such as leg swings, high knees, lunges, and skipping. " +
        N(5) + "These movements gradually <strong>elevate</strong> the heart rate and send more blood to the muscles that are about to work. " +
        N(6) + "Warm muscles are more flexible, so they are less likely to tear when an athlete suddenly sprints or jumps. " +
        N(7) + "Research also suggests that holding long stretches right before competition can briefly reduce a muscle's power, leaving it a little like a rubber band that has been pulled out too long. " +
        N(8) + "A dynamic routine, by contrast, can <strong>enhance</strong> performance by waking up the connection between the brain and the muscles. " +
        N(9) + "This does not mean static stretching is useless. " +
        N(10) + "Done after practice, when muscles are already warm, it can help athletes <strong>sustain</strong> their flexibility over a whole season. " +
        N(11) + "The key is timing. " +
        N(12) + "A <strong>rigid</strong> rule that every stretch is good at every moment ignores how the body actually responds. " +
        N(13) + "Coaches who switch to dynamic warm-ups often report that players arrive at the first drill looking awake rather than stiff." +
        "</p>",
      claims: [
        {
          id: "static",
          sol: "9.RV.1.C",
          stem: "In sentence 2, the word static most nearly means —",
          choices: [
            { letter: "A", text: "painful and difficult" },
            { letter: "B", text: "not moving" },
            { letter: "C", text: "done in pairs" },
            { letter: "D", text: "very fast" }
          ],
          correct: "B"
        },
        {
          id: "dyna",
          sol: "9.RV.1.B",
          stem: "The word dynamic in sentence 4 shares a root with dynamo and dynamite. That root carries the idea of —",
          choices: [
            { letter: "A", text: "safety and care" },
            { letter: "B", text: "rest and sleep" },
            { letter: "C", text: "careful measuring" },
            { letter: "D", text: "power and energy" }
          ],
          correct: "D"
        },
        {
          id: "rigid",
          sol: "9.RV.1.E",
          stem: "Compared with the word firm, the word rigid in sentence 12 suggests a rule that is —",
          choices: [
            { letter: "A", text: "too stiff to bend when it should" },
            { letter: "B", text: "carefully tested by scientists" },
            { letter: "C", text: "popular with nearly every single coach" },
            { letter: "D", text: "easy for players to remember" }
          ],
          correct: "A"
        },
        {
          id: "rubber",
          sol: "9.RV.1.F",
          stem: "In sentence 7, comparing an overstretched muscle to a rubber band pulled out too long suggests that the muscle —",
          choices: [
            { letter: "A", text: "is certain to tear" },
            { letter: "B", text: "has grown stronger" },
            { letter: "C", text: "has lost some of its snap" },
            { letter: "D", text: "needs ice applied right away" }
          ],
          correct: "C"
        },
        {
          id: "enhance",
          sol: "9.RV.1.C",
          stem: "In sentence 8, the word enhance most nearly means —",
          choices: [
            { letter: "A", text: "replace" },
            { letter: "B", text: "measure" },
            { letter: "C", text: "improve" },
            { letter: "D", text: "limit" }
          ],
          correct: "C"
        },
        {
          id: "useless",
          sol: "9.RI.2.B",
          stem: "The author includes sentence 9, This does not mean static stretching is useless, mainly to —",
          choices: [
            { letter: "A", text: "qualify the argument against static stretching" },
            { letter: "B", text: "show that the research described earlier was wrong" },
            { letter: "C", text: "explain how to do leg swings correctly" },
            { letter: "D", text: "give an example of a team using a new warm-up" }
          ],
          correct: "A"
        }
      ]
    },

    /* 12 ─ Paired texts, level 2 — county fair */
    {
      id: "g9-dsr-c42-fair-dates",
      family: "G9",
      title: "Moving the Fair: Board Notice + Club Leader's Letter",
      kind: "Paired texts · 9.DSR",
      blurb: "The fair board wants a cooler September fair; a 4-H leader worries about harvest.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Notice from the Mercer County Fair Board</strong></p>" +
        "<p>" + N(1) + "Beginning next year, the Mercer County Fair will move from the second week of August to the last week of September. " +
        N(2) + "For three summers in a row, afternoon temperatures during fair week have topped 98 degrees. " +
        N(3) + "Last August, two show animals died of heat stress, and the first-aid tent treated forty-one visitors for heat exhaustion. " +
        N(4) + "Attendance on the hottest afternoons fell by nearly a third, which hurts the youth programs that depend on ticket sales. " +
        N(5) + "Weather records for the past twenty years show that late-September highs average around 78 degrees. " +
        N(6) + "The board believes cooler days will protect animals and guests and bring more families back to the grounds. " +
        N(7) + "A full schedule will be shared in the spring, and we thank everyone for their patience as we plan.</p>" +
        "<p><strong>Text 2 — Letter from a 4-H Club Leader</strong></p>" +
        "<p>" + N(8) + "I understand why the board is worried about the heat; I was in the barn the afternoon those animals were lost. " +
        N(9) + "But late September is the busiest month of the year for many of the families who show at this fair. " +
        N(10) + "Corn and soybean harvest begins then, and most of our older 4-H members drive tractors or haul grain for their parents. " +
        N(11) + "School will also be in session, so students will miss class to care for their animals. " +
        N(12) + "I fear we will trade one problem for another and lose our exhibitors instead of our visitors. " +
        N(13) + "Before the date is final, I ask the board to consider a compromise: keep August, but move livestock shows to the early morning and add misting fans to every barn. " +
        N(14) + "Our members helped build this fair. " +
        N(15) + "They deserve a voice in when it happens." +
        "</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          stem: "Which idea do both writers accept?",
          choices: [
            { letter: "A", text: "The fair should be cancelled for a year." },
            { letter: "B", text: "Heat at the August fair has been a real danger." },
            { letter: "C", text: "The fair should move to late September." },
            { letter: "D", text: "Ticket sales matter more than the fair's exhibitors." }
          ],
          correct: "B"
        },
        {
          id: "challenge",
          sol: "9.DSR.E",
          stem: "In sentence 12, the club leader most directly challenges which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 2, about temperatures above 98 degrees" },
            { letter: "B", text: "Sentence 3, about animals lost to heat stress" },
            { letter: "C", text: "Sentence 6, about bringing more families back" },
            { letter: "D", text: "Sentence 5, about average September highs" }
          ],
          correct: "C"
        },
        {
          id: "combine",
          sol: "9.DSR.E",
          stem: "A reader combining both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the board has already accepted the morning shows" },
            { letter: "B", text: "most visitors would rather attend in the fall" },
            { letter: "C", text: "the 4-H leader doubts the board's heat records" },
            { letter: "D", text: "each possible date carries real drawbacks" }
          ],
          correct: "D"
        },
        {
          id: "fact",
          sol: "9.RI.1.C",
          stem: "Which sentence is a factual report rather than a prediction or an opinion?",
          choices: [
            { letter: "A", text: "Sentence 3, about the animals and the first-aid tent" },
            { letter: "B", text: "Sentence 6, about what the cooler days are expected to bring" },
            { letter: "C", text: "Sentence 12, about losing the fair's exhibitors" },
            { letter: "D", text: "Sentence 15, about what the members deserve" }
          ],
          correct: "A"
        },
        {
          id: "harvest",
          sol: "9.RI.3.A",
          stem: "Which detail from Text 2 best supports the leader's claim that a September fair would hurt exhibitors?",
          choices: [
            { letter: "A", text: "Sentence 8: The leader was in the barn that day." },
            { letter: "B", text: "Sentence 10: Older members work the harvest then." },
            { letter: "C", text: "Sentence 14: Members helped build the fair." },
            { letter: "D", text: "Sentence 13: Misting fans could cool every one of the barns." }
          ],
          correct: "B"
        },
        {
          id: "groups",
          sol: "9.DSR.D",
          stem: "Which TWO sentences best show the different groups each writer is most concerned about? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 5, about twenty years of weather records" },
            { letter: "B", text: "Sentence 14, about who helped build the fair" },
            { letter: "C", text: "Sentence 6, about protecting animals and guests" },
            { letter: "D", text: "Sentence 12, about losing exhibitors, not visitors" }
          ],
          correct: ["C", "D"]
        }
      ]
    },

    /* 13 ─ Paired texts, level 3 — fictional ancient city */
    {
      id: "g9-dsr-c42-marrowen",
      family: "G9",
      title: "Why Marrowen Faded: Lecture + Soil Report",
      kind: "Paired texts · 9.DSR",
      blurb: "A historian blames new sea routes; a soil scientist points to the fields.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From a Historian's Lecture on Marrowen</strong></p>" +
        "<p>" + N(1) + "For four centuries, the city of Marrowen grew rich because every caravan crossing the Ochre Plain had to pass through its gates. " +
        N(2) + "Merchants paid a tax on each bale of cloth and jar of oil, and that money built the city's famous terraced temples. " +
        N(3) + "Then, about eight hundred years ago, sailors from the southern coast learned to ride the seasonal winds across the gulf. " +
        N(4) + "A single ship could carry as much cargo as two hundred camels, and it paid no tax at Marrowen's gates. " +
        N(5) + "Within two generations, the caravans had dwindled to a trickle. " +
        N(6) + "Tax records carved on the temple walls show the city's income falling by more than half in fifty years. " +
        N(7) + "Marrowen was not destroyed; it was simply bypassed, and a city built on trade cannot survive once the trade goes elsewhere.</p>" +
        "<p><strong>Text 2 — From an Article by a Soil Scientist</strong></p>" +
        "<p>" + N(8) + "Historians often blame Marrowen's decline on the new sea routes, but the ground beneath the city tells a different story. " +
        N(9) + "Marrowen fed itself by irrigating its fields with river water, and river water always carries small amounts of salt. " +
        N(10) + "Over centuries, as water evaporated from the fields, that salt built up in the soil. " +
        N(11) + "Samples taken from the ancient farmland show salt levels high enough to stunt barley, the city's main crop. " +
        N(12) + "Pollen buried in the same layers shows barley gradually giving way to hardier weeds. " +
        N(13) + "A city can recover from losing customers, but it cannot recover from losing its bread. " +
        N(14) + "The sea routes may have hurt Marrowen, yet the slow poisoning of its fields left the city with nothing to fall back on." +
        "</p>",
      claims: [
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The two texts differ mainly in —",
          choices: [
            { letter: "A", text: "whether Marrowen was a real trading city" },
            { letter: "B", text: "when the city was first founded and by whom" },
            { letter: "C", text: "how the terraced temples were paid for" },
            { letter: "D", text: "what they name as the main cause of decline" }
          ],
          correct: "D"
        },
        {
          id: "respond",
          sol: "9.DSR.E",
          stem: "In sentence 8, the soil scientist most directly responds to which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 7, which says the city was bypassed by trade" },
            { letter: "B", text: "Sentence 2, which says the merchants' taxes built the temples" },
            { letter: "C", text: "Sentence 4, which compares a ship with camels" },
            { letter: "D", text: "Sentence 1, which describes the caravan route" }
          ],
          correct: "A"
        },
        {
          id: "together",
          sol: "9.DSR.D",
          stem: "Which idea becomes clear only when both texts are read together?",
          choices: [
            { letter: "A", text: "Marrowen grew wealthy by taxing passing caravans." },
            { letter: "B", text: "Salt slowly built up in the soil of Marrowen's fields." },
            { letter: "C", text: "Marrowen may have faced two crises at once." },
            { letter: "D", text: "Ships could carry more cargo than two hundred camels." }
          ],
          correct: "C"
        },
        {
          id: "central2",
          sol: "9.RI.1.A",
          stem: "Which statement best expresses the central idea of Text 2?",
          choices: [
            { letter: "A", text: "Marrowen's temples were paid for with farm profits." },
            { letter: "B", text: "Salty soil slowly destroyed the city's food supply." },
            { letter: "C", text: "Barley is the hardiest crop for dry farmland." },
            { letter: "D", text: "The sea routes had no effect at all on Marrowen." }
          ],
          correct: "B"
        },
        {
          id: "samples",
          sol: "9.RI.3.A",
          stem: "Which sentence from Text 2 most directly supports the claim in sentence 10 that salt built up in the soil?",
          choices: [
            { letter: "A", text: "Sentence 8, about what historians usually say" },
            { letter: "B", text: "Sentence 13, about losing customers and losing bread" },
            { letter: "C", text: "Sentence 11, about salt levels in soil samples" },
            { letter: "D", text: "Sentence 14, about the city having no fallback" }
          ],
          correct: "C"
        },
        {
          id: "records",
          sol: "9.DSR.E",
          stem: "Which TWO sentences describe physical records that the writers use as evidence? Select TWO.",
          choices: [
            { letter: "A", text: "Sentence 6, about tax records carved on temple walls" },
            { letter: "B", text: "Sentence 5, about the caravans dwindling to a trickle" },
            { letter: "C", text: "Sentence 13, about losing customers versus bread" },
            { letter: "D", text: "Sentence 12, about pollen buried in the soil layers" }
          ],
          correct: ["A", "D"]
        }
      ]
    },

    /* 14 ─ Paired texts, level 1 — dance competitions */
    {
      id: "g9-dsr-c42-stage-nerves",
      family: "G9",
      title: "Stage Nerves: Journal + Coach's Column",
      kind: "Paired texts · 9.DSR",
      blurb: "Lucia writes about freezing in rehearsal; a coach explains where nerves come from.",
      level: 1,
      passage:
        "<p><strong>Text 1 — From Lucia's Practice Journal</strong></p>" +
        "<p>" + N(1) + "Regionals are on Saturday, and my hands have been shaking since Tuesday. " +
        N(2) + "Every time I picture the stage, my stomach drops like I missed a step on the stairs. " +
        N(3) + "Today at rehearsal I froze in the middle of my solo and lost the whole second half, even though I have danced it a hundred times in our tiny kitchen. " +
        N(4) + "Ms. Grant told me to stop and breathe, then walk through it slowly without music. " +
        N(5) + "Halfway through, my feet remembered before my brain did. " +
        N(6) + "I still felt shaky, but I finished. " +
        N(7) + "Tonight I wrote the counts on an index card and taped it to my mirror. " +
        N(8) + "Maybe the nerves are not going away. " +
        N(9) + "Maybe I just have to learn to dance next to them.</p>" +
        "<p><strong>Text 2 — From a Dance Coach's Advice Column</strong></p>" +
        "<p>" + N(10) + "Nearly every performer feels nervous before a competition, and that feeling has a physical cause. " +
        N(11) + "When the brain senses pressure, it releases adrenaline, which speeds up the heart and sends energy to the muscles. " +
        N(12) + "This reaction can cause shaking hands, a fluttering stomach, or a sudden blank memory. " +
        N(13) + "The good news is that the same energy can sharpen a performance once a dancer learns to manage it. " +
        N(14) + "Slow breathing, with a longer exhale than inhale, signals the body to calm down. " +
        N(15) + "Marking a routine, or walking through it at half speed, helps the body recall movements even when the mind feels empty. " +
        N(16) + "Many experienced dancers say they never stop feeling nervous; they simply learn to treat the feeling as a sign that they care." +
        "</p>",
      claims: [
        {
          id: "both",
          sol: "9.DSR.D",
          stem: "Which idea is supported by both texts?",
          choices: [
            { letter: "A", text: "Nerves can be managed even if they never disappear." },
            { letter: "B", text: "Dancers should not compete until they feel fully calm." },
            { letter: "C", text: "Practicing without music is a waste of rehearsal time." },
            { letter: "D", text: "Adrenaline makes dancers forget their routines on purpose." }
          ],
          correct: "A"
        },
        {
          id: "explain",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 2 best explains what happens to Lucia in sentence 5?",
          choices: [
            { letter: "A", text: "Sentence 11, about adrenaline and the heart" },
            { letter: "B", text: "Sentence 14, about breathing out slowly" },
            { letter: "C", text: "Sentence 16, about treating nerves as caring" },
            { letter: "D", text: "Sentence 15, about marking a routine" }
          ],
          correct: "D"
        },
        {
          id: "lucia",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Lucia at the end of Text 1?",
          choices: [
            { letter: "A", text: "She has decided to quit the competition." },
            { letter: "B", text: "She is still nervous but willing to go on." },
            { letter: "C", text: "She is certain she will win at Regionals." },
            { letter: "D", text: "She is angry at Ms. Grant for stopping her." }
          ],
          correct: "B"
        },
        {
          id: "breath",
          sol: "9.RI.1.B",
          stem: "According to Text 2, what does slow breathing with a longer exhale do?",
          choices: [
            { letter: "A", text: "It raises the dancer's heart rate." },
            { letter: "B", text: "It helps the dancer hear the music." },
            { letter: "C", text: "It signals the body to calm down." },
            { letter: "D", text: "It releases more adrenaline." }
          ],
          correct: "C"
        },
        {
          id: "voice",
          sol: "9.DSR.E",
          stem: "Compared with Lucia's journal, the coach's column sounds more —",
          choices: [
            { letter: "A", text: "personal and deeply uncertain" },
            { letter: "B", text: "angry and critical" },
            { letter: "C", text: "playful and silly" },
            { letter: "D", text: "general and explanatory" }
          ],
          correct: "D"
        },
        {
          id: "pairing",
          sol: "9.DSR.D",
          stem: "The purpose of pairing Lucia's journal with the coach's column is most likely to —",
          choices: [
            { letter: "A", text: "prove that journals are more honest than columns" },
            { letter: "B", text: "show the science behind one dancer's experience" },
            { letter: "C", text: "compare two different routines for the same contest" },
            { letter: "D", text: "argue that coaches understand dancers better" }
          ],
          correct: "B"
        }
      ]
    },

    /* 15 ─ Poetry, level 2 — dance competitions */
    {
      id: "g9-rl-c42-floor-count",
      family: "G9",
      title: "Floor Count",
      kind: "Poetry · 9.RL",
      blurb: "A dancer waits in the wings for her turn at a competition.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Behind the curtain, the stage lights hum like bees<br>" +
        L(2) + "waiting for someone brave enough to step inside the hive.<br>" +
        L(3) + "I tighten my laces twice, then once again,<br>" +
        L(4) + "as if a knot could hold my courage in.<br>" +
        L(5) + "The girl before me spins and spins,<br>" +
        L(6) + "a coin flipped bright across a tabletop,<br>" +
        L(7) + "and the judges' pencils scratch like rain on tin.<br>" +
        L(8) + "Five, six, seven, eight: my body knows the count<br>" +
        L(9) + "even when my head forgets its name.<br>" +
        L(10) + "The music opens like a door.<br>" +
        L(11) + "I walk through it.<br>" +
        L(12) + "The floor is warm from every foot before mine,<br>" +
        L(13) + "a borrowed courage pressed into the wood,<br>" +
        L(14) + "and I add my own, and leave it there for the next." +
        "</p>",
      claims: [
        {
          id: "hive",
          sol: "9.RL.2.A",
          stem: "In lines 1 and 2, the lights are compared to humming bees and the stage to a hive mainly to suggest that the stage feels —",
          choices: [
            { letter: "A", text: "sweet and welcoming to dancers" },
            { letter: "B", text: "quiet, dark, and nearly empty" },
            { letter: "C", text: "buzzing with energy and a little risky" },
            { letter: "D", text: "too bright for anyone on it to see clearly" }
          ],
          correct: "C"
        },
        {
          id: "coin",
          sol: "9.RL.2.B",
          stem: "The image in line 6, a coin flipped bright across a tabletop, mainly emphasizes the other dancer's —",
          choices: [
            { letter: "A", text: "quick, shining spins" },
            { letter: "B", text: "nervous mistakes" },
            { letter: "C", text: "slow, careful ending" },
            { letter: "D", text: "heavy, glittering costume" }
          ],
          correct: "A"
        },
        {
          id: "speaker",
          sol: "9.RL.3.B",
          stem: "The poem \"Floor Count\" is told from the point of view of —",
          choices: [
            { letter: "A", text: "a judge scoring the routines" },
            { letter: "B", text: "a dancer waiting to perform" },
            { letter: "C", text: "a parent in the front row" },
            { letter: "D", text: "the girl who dances first" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of \"Floor Count\"?",
          choices: [
            { letter: "A", text: "Competitions reward only the most talented dancers." },
            { letter: "B", text: "Fear disappears the moment a performer is on stage." },
            { letter: "C", text: "Judges care more about technique than about courage." },
            { letter: "D", text: "Courage can be shared and passed on to others." }
          ],
          correct: "D"
        },
        {
          id: "short",
          sol: "9.RL.2.C",
          stem: "The poet makes line 11, I walk through it, much shorter than the lines around it most likely to —",
          choices: [
            { letter: "A", text: "stress a simple, decisive step" },
            { letter: "B", text: "show that the speaker forgot the dance" },
            { letter: "C", text: "slow the poem before a sad ending" },
            { letter: "D", text: "suggest that the music has stopped" }
          ],
          correct: "A"
        },
        {
          id: "borrowed",
          sol: "9.RV.1.E",
          stem: "In line 13, the word borrowed suggests that the courage the speaker feels —",
          choices: [
            { letter: "A", text: "was taken unfairly from the other dancers" },
            { letter: "B", text: "must be returned right away" },
            { letter: "C", text: "belongs only to the judges" },
            { letter: "D", text: "came partly from earlier dancers" }
          ],
          correct: "D"
        }
      ]
    },

    /* 16 ─ Poetry, level 3 — fictional ancient city */
    {
      id: "g9-rl-c42-ithrenne",
      family: "G9",
      title: "What the Stones Keep",
      kind: "Poetry · 9.RL",
      blurb: "A traveler stands in the ruined square of the ancient city of Ithrenne.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Ithrenne was a city once. The guidebook says<br>" +
        L(2) + "ten thousand lamps were lit here every dusk.<br>" +
        L(3) + "Now wind is the only merchant in the square,<br>" +
        L(4) + "selling dust to no one, shouting in the stones.<br>" +
        L(5) + "A doorway stands without a house behind it,<br>" +
        L(6) + "a mouth that has forgotten what it meant to say.<br>" +
        L(7) + "Somewhere a child once ran this very street,<br>" +
        L(8) + "late for supper, sandals slapping clay;<br>" +
        L(9) + "somewhere a baker scolded a fallen loaf.<br>" +
        L(10) + "The stones remember none of it, and all of it:<br>" +
        L(11) + "the groove a thousand carts wore in the gate,<br>" +
        L(12) + "the step worn hollow by a thousand feet.<br>" +
        L(13) + "I set my sneaker in that hollow, lightly,<br>" +
        L(14) + "and feel the city lean to read my weight,<br>" +
        L(15) + "one more traveler it will someday hold." +
        "</p>",
      claims: [
        {
          id: "merchant",
          sol: "9.RL.2.B",
          stem: "Lines 3 and 4, in which the wind is the only merchant selling dust, mainly create a mood of —",
          choices: [
            { letter: "A", text: "cheerful busyness" },
            { letter: "B", text: "lonely emptiness" },
            { letter: "C", text: "sudden danger" },
            { letter: "D", text: "proud celebration" }
          ],
          correct: "B"
        },
        {
          id: "shift",
          sol: "9.RL.3.A",
          stem: "How does the ending of the poem (lines 13–15) differ from its beginning (lines 1–4)?",
          choices: [
            { letter: "A", text: "It shifts from present ruin to past glory." },
            { letter: "B", text: "It shifts from hope to deep sadness." },
            { letter: "C", text: "It shifts from the speaker's voice to the guidebook's words." },
            { letter: "D", text: "It shifts from observing the city to joining its story." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which theme does \"What the Stones Keep\" most clearly develop?",
          choices: [
            { letter: "A", text: "Places hold traces of ordinary lives long after they end." },
            { letter: "B", text: "Ancient cities were more beautiful than modern ones." },
            { letter: "C", text: "Travelers should never touch or walk on historic ruins at all." },
            { letter: "D", text: "Guidebooks rarely tell the truth about the past." }
          ],
          correct: "A"
        },
        {
          id: "noneall",
          sol: "9.RL.2.C",
          stem: "In line 10, the phrase none of it, and all of it is best understood to mean that the stones —",
          choices: [
            { letter: "A", text: "were carved to record every event in careful writing" },
            { letter: "B", text: "have been damaged beyond all recognition" },
            { letter: "C", text: "hold no memories but still bear the marks of use" },
            { letter: "D", text: "remember only the most important people" }
          ],
          correct: "C"
        },
        {
          id: "lean",
          sol: "9.RL.1.B",
          stem: "Line 14, feel the city lean to read my weight, suggests that the speaker —",
          choices: [
            { letter: "A", text: "fears the old stones might collapse" },
            { letter: "B", text: "wishes she had stayed on the tour bus" },
            { letter: "C", text: "imagines the city taking note of her" },
            { letter: "D", text: "is too tired to keep on walking" }
          ],
          correct: "C"
        },
        {
          id: "doorway",
          sol: "9.RV.1.F",
          stem: "In lines 5 and 6, calling the doorway a mouth that has forgotten what it meant to say suggests that the doorway —",
          choices: [
            { letter: "A", text: "is about to fall down in the wind" },
            { letter: "B", text: "no longer serves its old purpose" },
            { letter: "C", text: "is decorated with carved stone faces" },
            { letter: "D", text: "leads to a hidden room" }
          ],
          correct: "B"
        }
      ]
    },

    /* 17 ─ Drama, level 2 — county fair */
    {
      id: "g9-rl-c42-ring-toss",
      family: "G9",
      title: "The Ring-Toss Booth",
      kind: "Drama · 9.RL",
      blurb: "Kofi wants to ride the Ferris wheel; his twin Amara is running the club booth.",
      level: 2,
      passage:
        "<p><em>The 4-H club's ring-toss booth at the Calloway County Fair, eight o'clock at night. Behind it, the lights of the Ferris wheel blink on and off. AMARA and KOFI MENSAH, twins, stand behind a counter crowded with glass bottles.</em></p>" +
        "<p><strong>AMARA:</strong> " + N(1) + "Three more hours, Kofi. " + N(2) + "The club needs every dollar for the new barn fans.</p>" +
        "<p><strong>KOFI:</strong> " + N(3) + "I know, I know. <em>(stretching, glancing toward the Ferris wheel)</em> " + N(4) + "Devon and the others are already getting in line.</p>" +
        "<p><strong>KOFI</strong> <em>(aside)</em><strong>:</strong> " + N(5) + "If I leave now, she'll handle it. " + N(6) + "She always handles everything.</p>" +
        "<p><strong>AMARA</strong> <em>(to a small boy holding three rings)</em><strong>:</strong> " + N(7) + "Lean in a little, and toss it soft, like you're handing it to the bottle.</p>" +
        "<p><em>The boy's ring lands. He shrieks with joy. AMARA hands him a stuffed frog.</em></p>" +
        "<p><strong>AMARA</strong> <em>(aside)</em><strong>:</strong> " + N(8) + "He's going to leave. " + N(9) + "I can see it in his shoes; they're already pointed at the Ferris wheel.</p>" +
        "<p><strong>KOFI:</strong> " + N(10) + "Hey, Amara, what if I took a short break? " + N(11) + "Twenty minutes, tops.</p>" +
        "<p><strong>AMARA:</strong> " + N(12) + "Go. " + N(13) + "It's fine.</p>" +
        "<p><em>KOFI takes two steps and stops. He watches AMARA restack the bottles alone while a line of children grows longer at the counter.</em></p>" +
        "<p><strong>KOFI</strong> <em>(aside)</em><strong>:</strong> " + N(14) + "\"It's fine\" is what she says when it isn't.</p>" +
        "<p><em>He walks back and picks up a bucket of rings.</em></p>" +
        "<p><strong>KOFI:</strong> " + N(15) + "Devon can save me a seat for the last ride. " + N(16) + "Who's next? " + N(17) + "Step right up!</p>" +
        "<p><strong>AMARA</strong> <em>(quietly, smiling)</em><strong>:</strong> " + N(18) + "Lean in a little.</p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          stem: "Kofi's aside in sentences 5 and 6 mainly reveals that he —",
          choices: [
            { letter: "A", text: "assumes his sister will cover for him" },
            { letter: "B", text: "is worried about paying for the barn fans" },
            { letter: "C", text: "dislikes running the ring-toss game" },
            { letter: "D", text: "plans to win a prize for Amara" }
          ],
          correct: "A"
        },
        {
          id: "aside2",
          sol: "9.RL.1.D",
          stem: "Amara's aside in sentences 8 and 9 shows the audience that she —",
          choices: [
            { letter: "A", text: "has not noticed the Ferris wheel at all" },
            { letter: "B", text: "wants to ride the Ferris wheel herself" },
            { letter: "C", text: "has already guessed what Kofi is planning" },
            { letter: "D", text: "is annoyed with the little boy who won the frog" }
          ],
          correct: "C"
        },
        {
          id: "aside3",
          sol: "9.RL.1.D",
          stem: "Kofi's aside in sentence 14 shows that he —",
          choices: [
            { letter: "A", text: "believes Amara means exactly what she says" },
            { letter: "B", text: "is irritated that she agreed so quickly" },
            { letter: "C", text: "has forgotten about his friends in line" },
            { letter: "D", text: "understands what his sister really means" }
          ],
          correct: "D"
        },
        {
          id: "direction",
          sol: "9.RL.3.B",
          stem: "The stage direction after sentence 13, in which Kofi watches Amara restack the bottles alone, mainly serves to —",
          choices: [
            { letter: "A", text: "explain the rules of the ring-toss game" },
            { letter: "B", text: "show what changes Kofi's mind" },
            { letter: "C", text: "prove that the booth is losing money" },
            { letter: "D", text: "introduce Devon as a new character" }
          ],
          correct: "B"
        },
        {
          id: "decision",
          sol: "9.RL.1.C",
          stem: "Which statement best describes Kofi's decision at the end of the scene?",
          choices: [
            { letter: "A", text: "He chooses fun over his duties." },
            { letter: "B", text: "He leaves but feels guilty later." },
            { letter: "C", text: "He puts the club and Amara first." },
            { letter: "D", text: "He tricks Amara into working alone." }
          ],
          correct: "C"
        },
        {
          id: "repeat",
          sol: "9.RL.1.D",
          stem: "When Amara repeats Lean in a little in sentence 18, readers can infer that she —",
          choices: [
            { letter: "A", text: "is criticizing Kofi's poor aim" },
            { letter: "B", text: "secretly wants Kofi to go again" },
            { letter: "C", text: "forgot she already told the boy" },
            { letter: "D", text: "is quietly welcoming him back" }
          ],
          correct: "D"
        }
      ]
    },

    /* 18 ─ Functional text, level 1 — sports science */
    {
      id: "g9-ri-c42-fitness-day",
      family: "G9",
      title: "Fitness Testing Day",
      kind: "Functional text · 9.RI",
      blurb: "The PE department's instructions for the fall fitness assessment.",
      level: 1,
      passage:
        "<p><strong>Ridgeview High School Physical Education: Fitness Testing Day</strong></p>" +
        "<p>" + N(1) + "On Thursday, October 15, all ninth-grade PE classes will complete the fall fitness assessment in the main gym. " +
        N(2) + "Results are used to set personal goals for the semester, not to calculate grades.</p>" +
        "<p><strong>Before the Test</strong> " + N(3) + "Eat a light meal or snack two to three hours before your class period. " +
        N(4) + "Drink water throughout the morning, but avoid large amounts in the last thirty minutes. " +
        N(5) + "Wear athletic shoes with laces; sandals and slip-on shoes are not permitted on the testing floor.</p>" +
        "<p><strong>Testing Stations</strong> " + N(6) + "You will rotate through four stations in this order: the sit-and-reach flexibility test, the push-up test, the plank hold, and the 20-meter shuttle run. " +
        N(7) + "The shuttle run comes last because it is the most tiring; completing it earlier could lower your scores at the other stations. " +
        N(8) + "At each station, a partner will count your repetitions and record them on your score card.</p>" +
        "<p><strong>Safety</strong> " + N(9) + "Stop any test immediately if you feel dizzy, unusually short of breath, or pain in your chest. " +
        N(10) + "Tell a teacher right away; you will be able to finish the test on a makeup day. " +
        N(11) + "Students with a medical excuse on file will serve as scorekeepers.</p>" +
        "<p><strong>After the Test</strong> " + N(12) + "Walk one easy lap around the gym before sitting down. " +
        N(13) + "Your score card will be returned next week along with a goal sheet.</p>",
      claims: [
        {
          id: "shuttle",
          sol: "9.RI.1.B",
          stem: "According to the instructions, why is the shuttle run the final station?",
          choices: [
            { letter: "A", text: "It needs the most equipment to set up." },
            { letter: "B", text: "It is the only one a teacher scores." },
            { letter: "C", text: "It is the most tiring of the four." },
            { letter: "D", text: "It must be done outside the main gym." }
          ],
          correct: "C"
        },
        {
          id: "order",
          sol: "9.RI.2.A",
          stem: "The sections of the instructions are arranged mainly —",
          choices: [
            { letter: "A", text: "in the order a student will need them" },
            { letter: "B", text: "by comparing two kinds of fitness tests" },
            { letter: "C", text: "as a problem followed by its solution" },
            { letter: "D", text: "from the most to the least important rule" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          stem: "What is the main purpose of this document?",
          choices: [
            { letter: "A", text: "to persuade students to join a sports team" },
            { letter: "B", text: "to report last year's fitness test results" },
            { letter: "C", text: "to warn students about common PE injuries" },
            { letter: "D", text: "to prepare students for testing day" }
          ],
          correct: "D"
        },
        {
          id: "goals",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the idea that the test is meant to help students improve rather than to judge them?",
          choices: [
            { letter: "A", text: "Sentence 5, about wearing shoes with laces" },
            { letter: "B", text: "Sentence 2, about personal goals, not grades" },
            { letter: "C", text: "Sentence 9, about stopping if you feel dizzy" },
            { letter: "D", text: "Sentence 8, about partners counting repetitions" }
          ],
          correct: "B"
        },
        {
          id: "headings",
          sol: "9.RI.2.B",
          stem: "The headings such as Before the Test and After the Test mainly help readers —",
          choices: [
            { letter: "A", text: "understand the scientific terms" },
            { letter: "B", text: "find what to do at each stage" },
            { letter: "C", text: "compare their scores with friends" },
            { letter: "D", text: "learn who wrote the instructions" }
          ],
          correct: "B"
        },
        {
          id: "assessment",
          sol: "9.RV.1.B",
          stem: "As used in sentence 1, the word assessment is closest in meaning to —",
          choices: [
            { letter: "A", text: "celebration" },
            { letter: "B", text: "schedule" },
            { letter: "C", text: "requirement" },
            { letter: "D", text: "evaluation" }
          ],
          correct: "D"
        }
      ]
    },

    /* 19 ─ Argument, level 3 — dance competitions */
    {
      id: "g9-ri-c42-score-sheets",
      family: "G9",
      title: "Show Us the Score Sheets",
      kind: "Argument · 9.RI",
      blurb: "A dance team member argues that competitions should publish every judge's marks.",
      level: 3,
      passage:
        "<p>" + N(1) + "Every spring, our school's dance team spends months preparing for the state showcase, and every spring the results arrive as a single number on a printed sheet. " +
        N(2) + "Last year we placed sixth out of eleven teams. " +
        N(3) + "We still do not know why. " +
        N(4) + "Competitions should be required to give every team its full score sheet, broken down by category and by judge. " +
        N(5) + "The first reason is fairness. " +
        N(6) + "When teams can see only a final total, a single judge's unusual score can quietly decide the outcome, and no one would ever know. " +
        N(7) + "Publishing each judge's marks would make such patterns visible and encourage judges to score carefully. " +
        N(8) + "The second reason is learning. " +
        N(9) + "A gymnast who falls off the beam can watch the video and see the problem, but a dance team that loses three points for \"spacing\" has no idea which formation went wrong. " +
        N(10) + "Detailed scores would turn a disappointing day into a plan for next season. " +
        N(11) + "Some organizers argue that publishing scores would invite arguments and hurt young dancers' feelings. " +
        N(12) + "Those concerns are real, but they underestimate us. " +
        N(13) + "Dancers already take correction every day in the studio; we are used to hearing what needs fixing. " +
        N(14) + "What hurts more is working for months and walking away with a number that explains nothing. " +
        N(15) + "Competitions that ask students for their best effort owe them an honest account of how that effort was judged." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          stem: "Which sentence best states the writer's central claim?",
          choices: [
            { letter: "A", text: "Sentence 2, about placing sixth of eleven" },
            { letter: "B", text: "Sentence 4, about giving teams full score sheets" },
            { letter: "C", text: "Sentence 11, about the concerns that organizers raise" },
            { letter: "D", text: "Sentence 9, about the gymnast and the video" }
          ],
          correct: "B"
        },
        {
          id: "fact",
          sol: "9.RI.1.C",
          stem: "Which sentence from the editorial is a factual report rather than an opinion?",
          choices: [
            { letter: "A", text: "Sentence 12, about underestimating dancers" },
            { letter: "B", text: "Sentence 15, about what competitions owe students" },
            { letter: "C", text: "Sentence 7, about what publishing marks would do" },
            { letter: "D", text: "Sentence 2, about the team's sixth-place finish" }
          ],
          correct: "D"
        },
        {
          id: "support",
          sol: "9.RI.3.A",
          stem: "Which sentence best supports the writer's point that a single total score does not help dancers improve?",
          choices: [
            { letter: "A", text: "Sentence 9, about losing points for spacing" },
            { letter: "B", text: "Sentence 5, which names fairness as a reason" },
            { letter: "C", text: "Sentence 11, about arguments and hurt feelings" },
            { letter: "D", text: "Sentence 1, about months of preparation" }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "9.RI.2.B",
          stem: "The writer includes sentences 11 and 12 mainly to —",
          choices: [
            { letter: "A", text: "introduce a third reason for publishing scores" },
            { letter: "B", text: "admit that the team performed poorly" },
            { letter: "C", text: "address an opposing view, then answer it" },
            { letter: "D", text: "describe how competition judges are trained" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          stem: "The editorial is mainly organized —",
          choices: [
            { letter: "A", text: "as a claim, two reasons, then a rebuttal" },
            { letter: "B", text: "as a story of one season told in time order" },
            { letter: "C", text: "as a comparison of dance and gymnastics" },
            { letter: "D", text: "as a list of steps for scoring a routine" }
          ],
          correct: "A"
        },
        {
          id: "fairness",
          sol: "9.RI.1.B",
          stem: "According to the writer, why would publishing each judge's marks improve fairness?",
          choices: [
            { letter: "A", text: "It would let teams pick their own judges." },
            { letter: "B", text: "It would make each competition shorter." },
            { letter: "C", text: "It would give dancers more time to rehearse." },
            { letter: "D", text: "It would make unusual scores visible." }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
