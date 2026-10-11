/* SOL Labyrinth — Grade 9 long packs, expansion file 56 (VA 9.RL / 9.RI / 9.RV / 9.DSR): animal shelters,
 * public libraries, a school play backstage, and bridges and engineering (390–520 words; poems 22–28 lines;
 * paired texts 200–260 words each). Original text only; no VDOE / copyrighted material.
 * Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────────────────── LITERARY · animal shelter ───────────────────────── */
    {
      id: "g9-rl-c56-kennel-nine",
      family: "G9",
      title: "The Back of Kennel Nine",
      kind: "Literary · 9.RL",
      blurb: "A volunteer, a shy retired racing dog, and a library book read aloud to no one in particular.",
      level: 2,
      passage:
        "<p>" + N(1) + "The first time Teo Ramirez walked past kennel nine at the Harbor Street Animal Shelter, he thought it was empty. " +
        N(2) + "Then a gray shape at the very back lifted its head, and two dark eyes watched him the way a person watches a stranger on a dark sidewalk. " +
        N(3) + "The card on the gate said PILOT, GREYHOUND, 4 YEARS, RETIRED RACER, SHY. " +
        N(4) + "Someone had underlined SHY twice.</p>" +
        "<p>" + N(5) + "Teo had signed up to volunteer because he needed service hours, and he had pictured himself throwing tennis balls for dogs that bounced off the walls with joy. " +
        N(6) + "Instead, Mrs. Adebayo, the kennel manager, handed him a folding stool and a library book with a cracked spine. " +
        N(7) + "\"Pilot doesn't need exercise from you yet,\" she said. " +
        N(8) + "\"He needs to learn that a person can sit near him and want nothing.\" " +
        N(9) + "\"So I just sit there?\" Teo asked. " +
        N(10) + "\"You sit there, and you read out loud,\" she said. " +
        N(11) + "\"Not to him. Near him.\"</p>" +
        "<p>" + N(12) + "The book was about a sailor crossing the Atlantic alone, and for the first three afternoons the whole plan felt futile. " +
        N(13) + "Teo read about storms and broken masts while Pilot stayed pressed against the cinder blocks, as flat as a dropped coat. " +
        N(14) + "On the fourth day, Teo got bored and reached a hand through the bars, and Pilot scrambled so hard to get away that his nails screeched on the concrete. " +
        N(15) + "Teo pulled his hand back, his face hot. " +
        N(16) + "He had wanted the dog to prove that the afternoons were working, and he had made everything worse.</p>" +
        "<p>" + N(17) + "After that, he kept his hands on the book. " +
        N(18) + "He read about the sailor patching a sail with fishing line and about the long gray days with no land in sight. " +
        N(19) + "By the second week Pilot was lying in the middle of the kennel instead of the back. " +
        N(20) + "By the third week, he was lying near the gate, his long nose resting on his paws, his ears turning toward Teo's voice like small satellite dishes searching for a signal. " +
        N(21) + "Teo did not look at him directly; he simply read a little slower.</p>" +
        "<p>" + N(22) + "On a Saturday in November, Teo reached the last chapter, where the sailor finally sees a lighthouse blinking on the coast. " +
        N(23) + "As he read the final page, something warm and narrow pressed against his knee. " +
        N(24) + "Pilot had pushed his head through the gap in the gate, and he was leaning, the whole weight of his skull resting on Teo's leg. " +
        N(25) + "Teo kept reading, because he was afraid that if he stopped, the moment would end.</p>" +
        "<p>" + N(26) + "Two weeks later, a retired couple named the Lindqvists adopted Pilot. " +
        N(27) + "Mrs. Adebayo told Teo that Pilot had walked right up to them in the visiting room, which he had never done with anyone. " +
        N(28) + "Teo nodded, though his throat felt tight. " +
        N(29) + "That afternoon he carried the folding stool to kennel fourteen, where a nervous terrier mix was shaking in the corner. " +
        N(30) + "He opened a new book and began on page one.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme do Teo's afternoons with Pilot best develop?",
          choices: [
            { letter: "A", text: "Trust grows when people stop demanding quick proof of progress." },
            { letter: "B", text: "Volunteering is mostly a way to earn required service hours." },
            { letter: "C", text: "Animals respond best to firm and active daily training." },
            { letter: "D", text: "Reading aloud is the surest way to calm any frightened pet." }
          ],
          correct: "A"
        },
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sentences 14 through 16 reveal that at this point in the story Teo is —",
          choices: [
            { letter: "A", text: "afraid that Pilot is about to bite him" },
            { letter: "B", text: "angry at Mrs. Adebayo for her strange instructions" },
            { letter: "C", text: "impatient for a sign that his effort is paying off" },
            { letter: "D", text: "certain that Pilot will never trust anyone again" }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentence 8, Mrs. Adebayo most likely believes that Pilot —",
          choices: [
            { letter: "A", text: "needs far more running than the other shelter dogs do" },
            { letter: "B", text: "has learned to expect people to want something from him" },
            { letter: "C", text: "is too old to be adopted by a new family" },
            { letter: "D", text: "dislikes the sound of any human voice nearby" }
          ],
          correct: "B"
        },
        {
          id: "fig",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 20, comparing Pilot's ears to small satellite dishes mainly shows that Pilot is —",
          choices: [
            { letter: "A", text: "hearing frightening noises from other kennels" },
            { letter: "B", text: "still too frightened to move any closer" },
            { letter: "C", text: "bothered by the echoes in the concrete room" },
            { letter: "D", text: "beginning to pay close attention to Teo" }
          ],
          correct: "D"
        },
        {
          id: "plot",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the plot of the sailor's book connect to the events at the shelter?",
          choices: [
            { letter: "A", text: "The sailor sights land in the last chapter just as Pilot finally reaches Teo." },
            { letter: "B", text: "The storms in the book frighten Pilot into hiding at the back of the kennel." },
            { letter: "C", text: "The book teaches Teo a method for training dogs that he uses on Pilot." },
            { letter: "D", text: "The sailor's loneliness convinces Teo to quit volunteering at the shelter." }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the narrator follows Teo closely throughout the story, the reader —",
          choices: [
            { letter: "A", text: "knows exactly what Pilot is thinking in every scene" },
            { letter: "B", text: "learns Teo's feelings but judges Pilot's by his actions" },
            { letter: "C", text: "learns why Mrs. Adebayo chose that particular book" },
            { letter: "D", text: "sees the adoption from the Lindqvists' point of view" }
          ],
          correct: "B"
        },
        {
          id: "word",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 12, the word futile most nearly means —",
          choices: [
            { letter: "A", text: "harmful" },
            { letter: "B", text: "tiring" },
            { letter: "C", text: "embarrassing" },
            { letter: "D", text: "useless" }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The final two sentences, in which Teo carries the stool to kennel fourteen, give the ending a tone that is best described as —",
          choices: [
            { letter: "A", text: "openly heartbroken" },
            { letter: "B", text: "anxious and doubtful" },
            { letter: "C", text: "quietly determined" },
            { letter: "D", text: "lighthearted and joking" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── LITERARY · school play backstage ───────────────────────── */
    {
      id: "g9-rl-c56-blackout-cue",
      family: "G9",
      title: "Twelve Seconds of Dark",
      kind: "Literary · 9.RL",
      blurb: "Opening night, a blackout between acts, and the most important prop in the show is gone.",
      level: 3,
      passage:
        "<p>" + N(1) + "Backstage at Hollins Ridge High School smelled like sawdust, hairspray, and the hot dust that burns off stage lights, and on opening night Odalys Vega thought it was the best smell in the world. " +
        N(2) + "She sat on a stool in the stage-left wing with a headset clamped over her ears and a clipboard on her knee, its pages so marked up in pencil that the script underneath had nearly disappeared. " +
        N(3) + "As assistant stage manager, she had one rule she repeated to every new crew member: if the audience notices us, we did something wrong.</p>" +
        "<p>" + N(4) + "The first act of The Lantern Keeper's Daughter ran like a clock wound by careful hands. " +
        N(5) + "Doors opened on cue, the thunder sheet rumbled exactly when the storm began, and the painted sea glowed blue under the lights. " +
        N(6) + "During intermission Odalys walked the prop table with a flashlight, touching each object as she checked it off: the letter, the teacup, the coil of rope. " +
        N(7) + "The brass lantern, the most important prop in the show, sat in its taped outline where it belonged.</p>" +
        "<p>" + N(8) + "Act Two opened with a blackout. " +
        N(9) + "In the dark, the crew had twelve seconds to carry the lighthouse table onstage and set the lantern on it, and Rafael, who played the keeper, would light it during the first line of the scene. " +
        N(10) + "Odalys counted the seconds under her breath. " +
        N(11) + "At eight, a voice crackled in her headset: \"Table's set. Where's the lantern?\" " +
        N(12) + "She swung her flashlight, cupped low, toward the prop table. " +
        N(13) + "The taped outline was empty.</p>" +
        "<p>" + N(14) + "For a moment her mind was as blank as the dark stage. " +
        N(15) + "Then she remembered the battery camping lantern that the crew kept in the wing for emergencies, a dented green thing that looked nothing like a lighthouse. " +
        N(16) + "She grabbed it, ran in a crouch across the black floor, and pressed it into Rafael's hands just as the stage manager called, \"Lights up in three.\" " +
        N(17) + "Rafael looked down at the green plastic, then at her, and his eyebrows rose almost to his gray wig.</p>" +
        "<p>" + N(18) + "The lights came up. " +
        N(19) + "Odalys froze in the wing, waiting for a laugh from the audience. " +
        N(20) + "Rafael lifted the camping lantern, studied it, and said in his old keeper's voice, \"The brass one cracked in the storm. This will have to do, the way most things have to do.\" " +
        N(21) + "Then he clicked it on, and the scene went forward as if the line had always been in the script. " +
        N(22) + "Nobody laughed. " +
        N(23) + "In the third row, a woman nodded slowly, as though the keeper had said something wise.</p>" +
        "<p>" + N(24) + "After the curtain call, the missing brass lantern turned up on the stage-right prop table, where a freshman had moved it to polish it. " +
        N(25) + "Odalys expected the director, Ms. Ferreira, to be furious. " +
        N(26) + "Instead Ms. Ferreira read through her notes, stopped, and said, \"Act Two, scene one. The lantern. Nobody saw it.\" " +
        N(27) + "She meant it as praise. " +
        N(28) + "Odalys went back to the wing, wrote LANTERN, CHECK TWICE on the first page of her clipboard in thick black letters, and smiled at the empty stage.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which idea about backstage work does Odalys's opening night most clearly develop?",
          choices: [
            { letter: "A", text: "Actors deserve far more credit than the crew ever receives." },
            { letter: "B", text: "Good backstage work often succeeds when no one notices it." },
            { letter: "C", text: "A single mistake during a show always ruins the audience's night." },
            { letter: "D", text: "A director's praise matters more than an audience's reaction." }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Ms. Ferreira's comment Nobody saw it in sentence 26 counts as praise because it shows that —",
          choices: [
            { letter: "A", text: "she did not notice the green lantern herself" },
            { letter: "B", text: "the audience sat too far away to see the props" },
            { letter: "C", text: "she wanted to protect the freshman from blame" },
            { letter: "D", text: "the crew kept the problem hidden from the audience" }
          ],
          correct: "D"
        },
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows that Rafael can think quickly under pressure?",
          choices: [
            { letter: "A", text: "Sentence 9, which explains when he lights the lantern" },
            { letter: "B", text: "Sentence 17, which shows his eyebrows rising" },
            { letter: "C", text: "Sentence 20, which gives his invented line" },
            { letter: "D", text: "Sentence 23, which describes a woman nodding" }
          ],
          correct: "C"
        },
        {
          id: "image",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 4, describing the first act as a clock wound by careful hands mainly suggests that —",
          choices: [
            { letter: "A", text: "the crew's preparation made the act run smoothly" },
            { letter: "B", text: "the first act seemed to drag on for the audience" },
            { letter: "C", text: "the director controlled every move the actors made" },
            { letter: "D", text: "the actors were worried about running out of time" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "Across sentences 10 through 14, the mood shifts from —",
          choices: [
            { letter: "A", text: "calm routine to sudden alarm" },
            { letter: "B", text: "nervous fear to quiet relief" },
            { letter: "C", text: "excitement to dull boredom" },
            { letter: "D", text: "anger to playful amusement" }
          ],
          correct: "A"
        },
        {
          id: "plot",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The details in sentences 6 and 7 about the intermission check matter to the plot because they —",
          choices: [
            { letter: "A", text: "explain where the freshman later puts the lantern" },
            { letter: "B", text: "show that Odalys does not trust her own crew" },
            { letter: "C", text: "make the empty outline in sentence 13 more shocking" },
            { letter: "D", text: "reveal that the brass lantern was already cracked" }
          ],
          correct: "C"
        },
        {
          id: "figure",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 14, comparing Odalys's mind to the dark stage suggests that she —",
          choices: [
            { letter: "A", text: "is angry at the crew for the blackout" },
            { letter: "B", text: "briefly cannot think of any plan at all" },
            { letter: "C", text: "is afraid of moving around in the dark" },
            { letter: "D", text: "has memorized every cue in the show" }
          ],
          correct: "B"
        },
        {
          id: "nuance",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written walked instead of ran in a crouch in sentence 16. Compared with walked, ran in a crouch adds a sense of —",
          choices: [
            { letter: "A", text: "confusion and embarrassment" },
            { letter: "B", text: "playfulness and fun" },
            { letter: "C", text: "anger and frustration" },
            { letter: "D", text: "urgency and staying hidden" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── INFORMATIONAL · bridges ───────────────────────── */
    {
      id: "g9-ri-c56-built-to-bend",
      family: "G9",
      title: "Built to Bend",
      kind: "Informational · 9.RI",
      blurb: "Why a bridge that trembles under a truck is usually doing exactly what it was designed to do.",
      level: 2,
      passage:
        "<p>" + N(1) + "Stand in the middle of a long bridge as a heavy truck rumbles past, and you may feel something unsettling: the deck beneath your feet trembles. " +
        N(2) + "It is natural to assume that a moving bridge is a failing bridge. " +
        N(3) + "In fact, engineers design most large bridges to move, because a structure that cannot give a little will eventually break.</p>" +
        "<p>" + N(4) + "The most constant source of motion is temperature. " +
        N(5) + "Steel and concrete expand when they warm and contract when they cool. " +
        N(6) + "On a bridge several hundred meters long, the difference between a frigid January night and a scorching July afternoon can change the length of the deck by many centimeters. " +
        N(7) + "If the ends of the deck were locked tightly in place, that growth would have nowhere to go, and the deck could buckle or crack its supports. " +
        N(8) + "To prevent this, engineers install expansion joints, the metal gaps that look like interlocking fingers and make a thump-thump sound under car tires. " +
        N(9) + "The joints let the deck slide back and forth without leaving a dangerous opening in the road.</p>" +
        "<p>" + N(10) + "Wind creates a second kind of movement. " +
        N(11) + "A strong, steady wind pushes against a bridge from the side, but gusts and swirling air can also make the deck rise and fall in a rhythm. " +
        N(12) + "Every structure has a natural frequency, a speed at which it tends to vibrate when disturbed, much as a guitar string sounds a particular note when it is plucked. " +
        N(13) + "If the wind pushes in time with that frequency, each push adds to the last, and the motion grows larger, the way a child on a swing goes higher when someone pushes at just the right moment. " +
        N(14) + "Engineers therefore test scale models of long bridges in wind tunnels and shape the deck so that air flows smoothly around it.</p>" +
        "<p>" + N(15) + "Some bridges also carry devices called dampers, which work something like the shock absorbers on a car. " +
        N(16) + "A damper soaks up energy from a vibration and turns it into a small amount of heat, so the bridge settles down faster. " +
        N(17) + "One type, a tuned mass damper, is a heavy weight mounted on springs that sways opposite to the bridge's motion and cancels part of it. " +
        N(18) + "Pedestrian bridges sometimes need dampers more than highway bridges do, because hundreds of people walking in step can create a surprisingly strong rhythm.</p>" +
        "<p>" + N(19) + "None of this means that every shake is harmless. " +
        N(20) + "Inspectors visit bridges on a regular schedule, measuring cracks, checking bolts, and looking for rust where water collects. " +
        N(21) + "Some bridges now carry sensors that record movement every second and send the data to engineers, who can spot a change in a bridge's behavior long before a person on the deck would notice it. " +
        N(22) + "Many engineers say that this kind of monitoring is the most important advance in bridge safety in the past fifty years, though others give more credit to stronger steel.</p>" +
        "<p>" + N(23) + "The next time a bridge hums beneath you, it may help to remember that the movement is usually part of the plan. " +
        N(24) + "A bridge that bends is often a bridge built by people who understood exactly how much it should.</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of Built to Bend?",
          choices: [
            { letter: "A", text: "Expansion joints are the most important part of any bridge." },
            { letter: "B", text: "Wind is a far greater danger to bridges than temperature is." },
            { letter: "C", text: "Bridges are designed to move safely with heat, wind, and use." },
            { letter: "D", text: "Inspectors should visit every bridge more often than they do." }
          ],
          correct: "C"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, why do engineers install expansion joints?",
          choices: [
            { letter: "A", text: "To let the deck lengthen and shorten without damage." },
            { letter: "B", text: "To reduce the noise that car tires make on the deck." },
            { letter: "C", text: "To slow the wind as it moves across the bridge." },
            { letter: "D", text: "To hold the sensors that measure the bridge's motion." }
          ],
          correct: "A"
        },
        {
          id: "factview",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from Built to Bend presents a judgment that experts disagree about rather than an established fact?",
          choices: [
            { letter: "A", text: "Sentence 5, about steel and concrete expanding as they warm" },
            { letter: "B", text: "Sentence 12, about every structure's natural frequency" },
            { letter: "C", text: "Sentence 20, about inspectors visiting on a schedule" },
            { letter: "D", text: "Sentence 22, about the most important safety advance" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "After its introduction, the body of the passage is mainly organized by —",
          choices: [
            { letter: "A", text: "tracing the history of bridge building from oldest to newest" },
            { letter: "B", text: "explaining each cause of motion and how engineers respond" },
            { letter: "C", text: "comparing two well-known bridges point by point" },
            { letter: "D", text: "following one inspector through a single workday" }
          ],
          correct: "B"
        },
        {
          id: "craft",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The comparison to a child on a swing in sentence 13 helps the reader understand that —",
          choices: [
            { letter: "A", text: "children should not play on pedestrian bridges" },
            { letter: "B", text: "wind always pushes against a bridge from one side" },
            { letter: "C", text: "small pushes in rhythm can build into large motion" },
            { letter: "D", text: "bridges move much more in summer than in winter" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the claim in sentence 3 that a structure that cannot give a little will eventually break?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 15" },
            { letter: "D", text: "Sentence 23" }
          ],
          correct: "B"
        },
        {
          id: "word",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 6, the contrast with a scorching July afternoon shows that frigid means —",
          choices: [
            { letter: "A", text: "bitterly cold" },
            { letter: "B", text: "very windy" },
            { letter: "C", text: "completely dark" },
            { letter: "D", text: "rather damp" }
          ],
          correct: "A"
        },
        {
          id: "root",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word pedestrian in sentence 18 contains the Latin root ped, meaning foot. A pedestrian bridge is one that is —",
          choices: [
            { letter: "A", text: "held up by many small legs" },
            { letter: "B", text: "designed to carry heavy trucks" },
            { letter: "C", text: "opened only for special events" },
            { letter: "D", text: "built for people traveling on foot" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── INFORMATIONAL · public libraries ───────────────────────── */
    {
      id: "g9-ri-c56-lending-shelf",
      family: "G9",
      title: "The Library That Lends Ladders",
      kind: "Informational · 9.RI",
      blurb: "A town library where you can check out a telescope, a tile saw, or a cake pan shaped like a dinosaur.",
      level: 1,
      passage:
        "<p>" + N(1) + "Most people expect a public library to lend books, movies, and maybe a laptop. " +
        N(2) + "At the Wrenfield Public Library, a patron can also check out a ladder. " +
        N(3) + "Three years ago, the library opened a small room called the Lending Shelf, and today it holds more than four hundred objects that people need only once in a while. " +
        N(4) + "The collection includes cake pans shaped like dinosaurs, sewing machines, a telescope, fishing rods, a pressure washer, and a set of folding tables for parties.</p>" +
        "<p>" + N(5) + "The idea began with a question from a teenager. " +
        N(6) + "During a library board meeting, a high school junior named Amara Osei asked why her family had to buy a carpet cleaner they would use twice a year when the library already shared books that people read only once. " +
        N(7) + "The board members laughed, then realized she had a point. " +
        N(8) + "Within a year, the library had collected donated tools and bought others with a small grant.</p>" +
        "<p>" + N(9) + "Borrowing an object works much like borrowing a book. " +
        N(10) + "Patrons with a library card can take out up to three items for one week. " +
        N(11) + "Each item comes in a labeled bin with its instructions and a checklist of its parts. " +
        N(12) + "When the item comes back, a staff member counts the parts and cleans the item before it returns to the shelf. " +
        N(13) + "Larger tools, such as the tile saw, require a short safety lesson the first time a patron borrows them.</p>" +
        "<p>" + N(14) + "The program has been popular. " +
        N(15) + "Last year, items from the Lending Shelf were checked out more than six thousand times. " +
        N(16) + "The telescope has a waiting list nearly every month, and the dinosaur cake pan has been borrowed so often that the library bought a second one. " +
        N(17) + "According to head librarian Gerald Pike, about one in five people who borrowed an item had not used the library at all in the previous year. " +
        N(18) + "\"People come in for a drill,\" he said, \"and they leave with a drill and three books.\"</p>" +
        "<p>" + N(19) + "There have been problems. " +
        N(20) + "Some items come back broken or missing parts, and repairs cost money. " +
        N(21) + "A few residents have also questioned whether a library should spend its budget on hedge trimmers instead of books. " +
        N(22) + "Pike answers that the Lending Shelf costs less than two percent of the library's yearly budget. " +
        N(23) + "He believes it is one of the best uses of that money, though he admits that the town has never formally studied the question.</p>" +
        "<p>" + N(24) + "Libraries in other towns have begun calling Wrenfield for advice. " +
        N(25) + "The staff tell them to start small, to listen to what their own patrons need, and to buy extra cake pans. " +
        N(26) + "For Amara, now a college student, the success of the shelf still feels a little surprising. " +
        N(27) + "\"I just didn't want to buy a carpet cleaner,\" she said. " +
        N(28) + "\"I never thought it would become a whole room.\"</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the central idea of the article about the Wrenfield Lending Shelf?",
          choices: [
            { letter: "A", text: "Libraries should stop buying books and buy tools instead." },
            { letter: "B", text: "A library program that lends useful objects has succeeded." },
            { letter: "C", text: "Teenagers should attend more library board meetings." },
            { letter: "D", text: "Borrowing a tool is harder than simply buying one." }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the article, what must a patron do the first time he or she borrows the tile saw?",
          choices: [
            { letter: "A", text: "Take a short safety lesson." },
            { letter: "B", text: "Pay a small cleaning fee." },
            { letter: "C", text: "Bring an adult to sign a form." },
            { letter: "D", text: "Return it within two days." }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the Lending Shelf article states an opinion rather than a fact that could be checked?",
          choices: [
            { letter: "A", text: "Sentence 10: patrons can take out up to three items." },
            { letter: "B", text: "Sentence 15: items were checked out six thousand times." },
            { letter: "C", text: "Sentence 23: it is one of the best uses of the money." },
            { letter: "D", text: "Sentence 22: the shelf costs under two percent of the budget." }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The author organizes sentences 9 through 13 mainly by —",
          choices: [
            { letter: "A", text: "comparing Wrenfield's library with libraries in other towns" },
            { letter: "B", text: "describing a problem and then offering a solution to it" },
            { letter: "C", text: "telling the history of the library in reverse order" },
            { letter: "D", text: "walking through how an item is borrowed and returned" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes Gerald Pike's quotation about the drill in sentence 18 mainly to —",
          choices: [
            { letter: "A", text: "show that the shelf draws people to other library services" },
            { letter: "B", text: "prove that drills are the most borrowed item on the shelf" },
            { letter: "C", text: "suggest that patrons often forget to return their books" },
            { letter: "D", text: "explain how the library staff repair broken tools" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the claim in sentence 14 that the Lending Shelf has been popular?",
          choices: [
            { letter: "A", text: "Sentence 11" },
            { letter: "B", text: "Sentence 20" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: "C"
        },
        {
          id: "phrase",
          sol: "9.RV.1.E",
          sub: "9.RV.1.E.2",
          stem: "In sentence 7, the phrase she had a point most nearly means that Amara —",
          choices: [
            { letter: "A", text: "had been rude to the board members" },
            { letter: "B", text: "had asked her question at the wrong time" },
            { letter: "C", text: "had pointed to a problem in the room" },
            { letter: "D", text: "had made a sensible argument" }
          ],
          correct: "D"
        },
        {
          id: "connote",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 21, the author says some residents questioned the spending. Compared with attacked, the word questioned suggests that these residents were —",
          choices: [
            { letter: "A", text: "furious about the whole program" },
            { letter: "B", text: "raising doubts in a fairly calm way" },
            { letter: "C", text: "completely in favor of the shelf" },
            { letter: "D", text: "joking about the hedge trimmers" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── VOCABULARY · animal shelter fostering ───────────────────────── */
    {
      id: "g9-rv-c56-foster-house",
      family: "G9",
      title: "Our House, Their Waiting Room",
      kind: "Vocabulary · 9.RV",
      blurb: "A family fosters a hiding cat, a sock-stealing terrier, and a three-legged rabbit.",
      level: 1,
      passage:
        "<p>" + N(1) + "When my family signed up to foster animals for the Cedar Hollow Animal Rescue, my mother made one rule very clear. " +
        N(2) + "\"Our home is a <strong>provisional</strong> home,\" she said, tapping the paperwork on the kitchen table. " +
        N(3) + "\"These animals are staying with us only until they find their real families, and then we let them go.\" " +
        N(4) + "My little brother Kimo nodded seriously, and I pretended not to notice that he had already named the first kitten before it arrived.</p>" +
        "<p>" + N(5) + "Our first foster was a gray cat named Juniper who had been found living under a gas station. " +
        N(6) + "The rescue's coordinator, Ms. Halvorsen, warned us that Juniper would need time to <strong>acclimate</strong>, and that we should keep her in our quiet laundry room for a week while she got used to the smells and sounds of a house. " +
        N(7) + "For the first three days, Juniper hid behind the dryer. " +
        N(8) + "She was <strong>wary</strong> of every movement, flattening her ears whenever the washing machine started and hissing when Kimo opened the door too quickly. " +
        N(9) + "I started sitting on the laundry room floor to do my homework, and I let her decide whether to come out.</p>" +
        "<p>" + N(10) + "By the second week, Juniper had changed so much that she hardly seemed like the same animal. " +
        N(11) + "She grew so <strong>docile</strong> that she would lie in my lap while I brushed her, purring like a small engine idling in a driveway. " +
        N(12) + "Our second foster, a terrier mix named Biscuit, was a different story. " +
        N(13) + "Biscuit was <strong>tenacious</strong>: when he decided he wanted a sock, he would tug and twist and refuse to let go until the sock was his or the sock was gone. " +
        N(14) + "He chewed through four pairs in one month, and my father started calling the laundry basket the treasure chest.</p>" +
        "<p>" + N(15) + "Fostering taught me that caring for an animal is not a one-way street. " +
        N(16) + "We gave Juniper and Biscuit food, space, and patience, and they <strong>reciprocated</strong> in ways we had not expected. " +
        N(17) + "Juniper greeted me at the door every afternoon, and Biscuit got Kimo, who used to be afraid of dogs, to run laps around the backyard laughing. " +
        N(18) + "Every animal we fostered left our house a little braver than it had arrived, and I think we did too.</p>" +
        "<p>" + N(19) + "Saying goodbye was the hardest part. " +
        N(20) + "When a young couple adopted Juniper, I cried in the car on the way home, even though I knew that this was the whole point. " +
        N(21) + "Ms. Halvorsen told me that foster homes are like bridges: you are not supposed to live on them, only to cross them. " +
        N(22) + "I did not like hearing that at first, but now I understand what she meant. " +
        N(23) + "Last week, the couple sent us a photo of Juniper sleeping in a sunny window, and Kimo taped it to the refrigerator next to the photo of our newest foster, a three-legged rabbit named Pepper.</p>",
      claims: [
        {
          id: "provisional",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "The mother's explanation in sentence 3 shows that a provisional home in sentence 2 is one that is —",
          choices: [
            { letter: "A", text: "permanent and fully official" },
            { letter: "B", text: "meant to last only a while" },
            { letter: "C", text: "crowded and very noisy" },
            { letter: "D", text: "approved by the state government" }
          ],
          correct: "B"
        },
        {
          id: "acclimate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "As Ms. Halvorsen uses it in sentence 6, the word acclimate most nearly means to —",
          choices: [
            { letter: "A", text: "become used to new surroundings" },
            { letter: "B", text: "escape from a small space" },
            { letter: "C", text: "recover from a long illness" },
            { letter: "D", text: "make friends with other pets" }
          ],
          correct: "A"
        },
        {
          id: "wary",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which phrase best helps the reader understand the meaning of wary in sentence 8?",
          choices: [
            { letter: "A", text: "found living under a gas station" },
            { letter: "B", text: "the smells and sounds of a house" },
            { letter: "C", text: "hissing when Kimo opened the door" },
            { letter: "D", text: "sitting on the laundry room floor" }
          ],
          correct: "C"
        },
        {
          id: "docile",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "Compared with the word calm, the word docile in sentence 11 adds a sense that Juniper had become —",
          choices: [
            { letter: "A", text: "sleepy and bored with the house" },
            { letter: "B", text: "weak and tired from illness" },
            { letter: "C", text: "clever and sneaky around people" },
            { letter: "D", text: "gentle and easy to handle" }
          ],
          correct: "D"
        },
        {
          id: "tenacious",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have called Biscuit determined instead of tenacious in sentence 13. Given the details about the sock, tenacious adds a sense of —",
          choices: [
            { letter: "A", text: "a stubborn grip that will not let go" },
            { letter: "B", text: "quiet patience while waiting for food" },
            { letter: "C", text: "careful planning ahead of time" },
            { letter: "D", text: "nervous fear of strangers nearby" }
          ],
          correct: "A"
        },
        {
          id: "reciprocated",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 16, the word reciprocated most nearly means —",
          choices: [
            { letter: "A", text: "ran away from the house" },
            { letter: "B", text: "asked for more food" },
            { letter: "C", text: "gave something back in return" },
            { letter: "D", text: "refused to cooperate at all" }
          ],
          correct: "C"
        },
        {
          id: "bridges",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 21, Ms. Halvorsen compares foster homes to bridges mainly to show that a foster home is —",
          choices: [
            { letter: "A", text: "a structure that needs regular repair" },
            { letter: "B", text: "a risky place for very young animals" },
            { letter: "C", text: "a place that families should avoid" },
            { letter: "D", text: "a way for animals to reach a lasting home" }
          ],
          correct: "D"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which statement best describes how the narrator changes over the course of the fostering essay?",
          choices: [
            { letter: "A", text: "She stops fostering after Juniper is adopted." },
            { letter: "B", text: "She comes to accept that letting go is the purpose." },
            { letter: "C", text: "She grows less patient with each new animal." },
            { letter: "D", text: "She decides to keep Biscuit as her own pet." }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── VOCABULARY · bridge inspection ───────────────────────── */
    {
      id: "g9-rv-c56-under-the-deck",
      family: "G9",
      title: "Under the Deck",
      kind: "Vocabulary · 9.RV",
      blurb: "A career project takes Noor onto a narrow catwalk beneath the bridge she crosses every day.",
      level: 3,
      passage:
        "<p>" + N(1) + "Noor Haddad had crossed the Calder Creek bridge almost every day of her life, but she had never been underneath it until the morning her aunt Samira handed her a hard hat. " +
        N(2) + "Aunt Samira inspected bridges for the county, and Noor had asked to shadow her for a career project, imagining clipboards and a pleasant view of the water. " +
        N(3) + "Instead she found herself on a narrow catwalk beneath the deck, where pigeons muttered in the shadows and every passing car sounded like a drumroll overhead.</p>" +
        "<p>" + N(4) + "\"First rule,\" her aunt said, pointing her flashlight at a steel beam. " +
        N(5) + "\"We don't glance at anything. We <strong>scrutinize</strong> it.\" " +
        N(6) + "She ran her gloved thumb along a seam where two beams met, and a flake of orange crust broke away. " +
        N(7) + "\"<strong>Corrosion</strong>,\" she said. " +
        N(8) + "\"Water gets in, salt from the winter roads comes with it, and the steel slowly eats itself.\" " +
        N(9) + "Noor wrote the word in her notebook and drew an arrow to the rust-colored flake, which now looked less like dirt and more like a warning.</p>" +
        "<p>" + N(10) + "They spent two hours moving along the catwalk, measuring, photographing, and tapping concrete with a small hammer to listen for hollow spots. " +
        N(11) + "Most of the changes her aunt recorded were <strong>imperceptible</strong> to Noor; a crack the width of a hair looked to her like a line drawn by a sharp pencil, nothing more. " +
        N(12) + "Her aunt, though, compared each one to photographs from the last inspection and murmured the measurements aloud like a doctor taking a pulse. " +
        N(13) + "\"A crack doesn't scare me,\" she said. " +
        N(14) + "\"A crack that's growing does.\"</p>" +
        "<p>" + N(15) + "Near the middle of the bridge, Noor found something that made her stomach drop: a bolt was missing entirely, leaving an empty hole in a steel plate. " +
        N(16) + "Her aunt studied it calmly. " +
        N(17) + "\"This connection has six bolts, and it only needs four to carry the load,\" she said. " +
        N(18) + "\"The extra ones are <strong>redundant</strong> on purpose. Engineers build in backups, so one failure doesn't become a disaster.\" " +
        N(19) + "She marked the hole with yellow paint and added it to her repair list anyway. " +
        N(20) + "\"Backups are there to buy us time, not to let us ignore things.\"</p>" +
        "<p>" + N(21) + "At lunch, sitting on the tailgate of the county truck, Noor asked what her aunt would write in her report. " +
        N(22) + "\"That the bridge still has its <strong>integrity</strong>,\" Aunt Samira said, \"but that the county should <strong>mitigate</strong> the rust now, with new paint and better drainage, before small problems join together into a big one.\" " +
        N(23) + "She looked up at the deck, where a school bus was rumbling across. " +
        N(24) + "\"Nobody on that bus is thinking about us,\" she said, smiling. " +
        N(25) + "\"That's exactly how it should be.\"</p>" +
        "<p>" + N(26) + "On the drive home, Noor crossed the Calder Creek bridge again. " +
        N(27) + "The deck felt the same under the tires as always, but she pictured the yellow paint mark, the hair-thin cracks, and the five remaining bolts quietly doing the work of six, and she found herself sitting up a little straighter.</p>",
      claims: [
        {
          id: "scrutinize",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 5, the contrast with glance shows that scrutinize means to —",
          choices: [
            { letter: "A", text: "examine very closely" },
            { letter: "B", text: "look at only briefly" },
            { letter: "C", text: "photograph from afar" },
            { letter: "D", text: "repair right away" }
          ],
          correct: "A"
        },
        {
          id: "imperceptible",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word imperceptible joins the prefix im-, meaning not, with perceptible. Based on sentence 11, imperceptible changes are ones that —",
          choices: [
            { letter: "A", text: "are growing very rapidly" },
            { letter: "B", text: "have already been repaired" },
            { letter: "C", text: "are too small for Noor to notice" },
            { letter: "D", text: "appear only in old photographs" }
          ],
          correct: "C"
        },
        {
          id: "redundant",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which detail from sentences 15 through 19 best helps the reader understand the meaning of redundant?",
          choices: [
            { letter: "A", text: "The connection has six bolts but needs only four." },
            { letter: "B", text: "Aunt Samira marks the hole with yellow paint." },
            { letter: "C", text: "Noor feels her stomach drop at the empty hole." },
            { letter: "D", text: "Her aunt studies the missing bolt calmly." }
          ],
          correct: "A"
        },
        {
          id: "mitigate",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 22, the word mitigate most nearly means —",
          choices: [
            { letter: "A", text: "measure" },
            { letter: "B", text: "ignore" },
            { letter: "C", text: "hide" },
            { letter: "D", text: "lessen" }
          ],
          correct: "D"
        },
        {
          id: "integrity",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "Aunt Samira says the bridge still has its integrity rather than saying it is still okay. Compared with okay, integrity suggests that the bridge is —",
          choices: [
            { letter: "A", text: "attractive and newly painted" },
            { letter: "B", text: "structurally whole and sound" },
            { letter: "C", text: "honest and owned by good people" },
            { letter: "D", text: "old and due for replacement" }
          ],
          correct: "B"
        },
        {
          id: "eats",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 8, saying that the steel slowly eats itself is a figurative way of showing that corrosion —",
          choices: [
            { letter: "A", text: "makes the bridge noisier for drivers" },
            { letter: "B", text: "happens only during the summer" },
            { letter: "C", text: "gradually destroys the metal" },
            { letter: "D", text: "is caused by the pigeons nesting there" }
          ],
          correct: "C"
        },
        {
          id: "doctor",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 12, comparing Aunt Samira to a doctor taking a pulse mainly suggests that she —",
          choices: [
            { letter: "A", text: "thinks the bridge is about to collapse" },
            { letter: "B", text: "wishes she had chosen to be a doctor" },
            { letter: "C", text: "is worried about Noor's health" },
            { letter: "D", text: "checks the bridge with steady care" }
          ],
          correct: "D"
        },
        {
          id: "ending",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentences 24 through 27, the reader can infer that by the end of the day Noor —",
          choices: [
            { letter: "A", text: "is afraid to drive across the bridge again" },
            { letter: "B", text: "respects the hidden work that keeps it safe" },
            { letter: "C", text: "has decided to become a bridge inspector" },
            { letter: "D", text: "believes her aunt exaggerated the problems" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── PAIRED · public libraries ───────────────────────── */
    {
      id: "g9-dsr-c56-no-fines",
      family: "G9",
      title: "The Last Overdue Fine",
      kind: "Paired texts · 9.DSR",
      blurb: "A news article on a library that ended late fines, and a longtime patron's letter in reply.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Fines Out, Readers In</strong></p>" +
        "<p>" + N(1) + "Last January, the Port Avalon Public Library stopped charging fines for overdue books, and the results surprised even the people who had pushed for the change. " +
        N(2) + "Under the old system, a borrower who returned a book late paid twenty-five cents a day, and anyone who owed more than ten dollars lost the right to borrow anything at all. " +
        N(3) + "By the end of that system, nearly four thousand cardholders were blocked, and more than a third of them were under eighteen. " +
        N(4) + "\"A twelve-year-old who loses track of a library book shouldn't lose the library,\" said branch manager Lucia Brandt. " +
        N(5) + "In the first year without fines, the library restored those blocked accounts, and checkouts rose by eleven percent. " +
        N(6) + "More surprising, the share of books returned within a month of their due date stayed almost exactly the same. " +
        N(7) + "The library still sends reminder emails, and borrowers who keep an item more than six weeks are billed for its replacement until they bring it back. " +
        N(8) + "Fines had brought in about nineteen thousand dollars a year, but staff say that collecting them took hours that are now spent helping patrons. " +
        N(9) + "Brandt admits the change has not solved everything. " +
        N(10) + "\"Some books still come back late,\" she said. " +
        N(11) + "\"But now the kids come back with them.\" " +
        N(12) + "Several nearby library systems are watching Port Avalon's results before deciding whether to drop fines themselves.</p>" +
        "<p><strong>Text 2 — A Letter to the Editor</strong></p>" +
        "<p>" + N(13) + "I have used the Port Avalon library for forty years, and I am glad that more young people are walking through its doors. " +
        N(14) + "Still, I worry that the end of overdue fines teaches the wrong lesson. " +
        N(15) + "When I was a girl, a nickel fine was how I learned that borrowing something comes with a promise to return it on time. " +
        N(16) + "That lesson mattered to me far more than the nickel did, and I have kept it all my life. " +
        N(17) + "Your article reports that books come back at about the same rate as before, and I am pleased to hear it. " +
        N(18) + "But one year is a short time, and habits can change slowly. " +
        N(19) + "I also wonder about the waiting lists for new books. " +
        N(20) + "Last spring I waited nine weeks for a popular novel, and I suspect that someone ahead of me felt no hurry at all. " +
        N(21) + "I do not want the old ten-dollar limit back; locking children out of the library was clearly a mistake. " +
        N(22) + "Instead, I would suggest a small reward for returning books early, such as an extra renewal or a raffle ticket for the summer reading prize. " +
        N(23) + "A promise kept should still mean something, even if a promise broken no longer costs a quarter.</p>" +
        "<p>Margaret Ellison, Harbor District</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea about the old ten-dollar limit do both the article and the letter support?",
          choices: [
            { letter: "A", text: "Shutting young borrowers out of the library was wrong." },
            { letter: "B", text: "It taught borrowers to return books on time." },
            { letter: "C", text: "It should return once waiting lists grow longer." },
            { letter: "D", text: "It earned the library most of its yearly budget." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Fines Out, Readers In and Margaret Ellison's letter differ mainly in how they view —",
          choices: [
            { letter: "A", text: "whether more young people now use the library" },
            { letter: "B", text: "whether the library still sends reminder emails" },
            { letter: "C", text: "whether dropping fines weakens a sense of responsibility" },
            { letter: "D", text: "whether lost items should be billed for replacement" }
          ],
          correct: "C"
        },
        {
          id: "respond",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "In sentences 17 and 18, the letter writer responds most directly to which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "combine",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader who considers both the Port Avalon article and the letter could best conclude that —",
          choices: [
            { letter: "A", text: "the twenty-five-cent fine should return at once" },
            { letter: "B", text: "most borrowers now keep books for over six weeks" },
            { letter: "C", text: "fines were the library's largest source of money" },
            { letter: "D", text: "early results look good, but long-term effects are unclear" }
          ],
          correct: "D"
        },
        {
          id: "guess",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from Margaret Ellison's letter is based on a guess rather than on something she knows?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence from Text 1 gives the strongest evidence that fines were not what made borrowers return books on time?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 5" },
            { letter: "C", text: "Sentence 8" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "central",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of Fines Out, Readers In?",
          choices: [
            { letter: "A", text: "Port Avalon lost needed money when it stopped charging fines." },
            { letter: "B", text: "Ending fines brought readers back without hurting return rates." },
            { letter: "C", text: "Nearby libraries have already followed Port Avalon's example." },
            { letter: "D", text: "Reminder emails work better than fines for most borrowers." }
          ],
          correct: "B"
        },
        {
          id: "restored",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 5, the library restored the blocked accounts. In this context, restored most nearly means —",
          choices: [
            { letter: "A", text: "made usable again" },
            { letter: "B", text: "closed for good" },
            { letter: "C", text: "checked closely" },
            { letter: "D", text: "charged a fee" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── PAIRED · animal shelter adoption ───────────────────────── */
    {
      id: "g9-dsr-c56-closet-cat",
      family: "G9",
      title: "The Closet Tenant",
      kind: "Paired texts · 9.DSR",
      blurb: "A story about a new cat who will not leave the closet, paired with a shelter's first-week handout.",
      level: 3,
      passage:
        "<p><strong>Text 1 — from the story \"The Closet Tenant\"</strong></p>" +
        "<p>" + N(1) + "For two days after the adoption, the only proof that Ingrid Solberg owned a cat was the empty food bowl she found each morning. " +
        N(2) + "The cat, a black-and-white tabby the shelter had named Domino, had leaped out of the carrier the moment Ingrid opened it and vanished into the hall closet, behind the winter boots. " +
        N(3) + "Ingrid had imagined a cat on her lap by now, the two of them watching movies under a blanket. " +
        N(4) + "Instead she had a closet that breathed. " +
        N(5) + "On the first night she knelt in the doorway and called softly, holding out a strip of chicken like an offering at a shrine, but Domino only pressed deeper into the dark. " +
        N(6) + "On the second night she decided to stop trying. " +
        N(7) + "She set a lamp on the floor of the hall, sat with her back against the wall a few feet from the closet, and opened her math homework. " +
        N(8) + "She did not call. " +
        N(9) + "She did not reach. " +
        N(10) + "She only turned pages, as quietly as she could, while the radiator ticked like a slow clock. " +
        N(11) + "Near midnight, a white paw appeared on the closet floor, then a nose, then a pair of round green eyes that studied her as if she were a puzzle. " +
        N(12) + "Ingrid kept her pencil moving and her breath even. " +
        N(13) + "When Domino finally padded out and sniffed the edge of her notebook, she felt as if she had been handed something fragile that she must not drop.</p>" +
        "<p><strong>Text 2 — Your Cat's First Week Home (Brightwater County Animal Shelter)</strong></p>" +
        "<p>" + N(14) + "Most adopted cats need time before they feel safe in a new home, and hiding during the first few days is normal. " +
        N(15) + "A move means new smells, new sounds, and new people all at once, and a hiding place gives a cat a sense of control. " +
        N(16) + "To help, set up one quiet room with food, water, a litter box, and a box or covered bed where your cat can hide. " +
        N(17) + "Keep other pets and visitors out of this room for at least the first several days. " +
        N(18) + "Avoid pulling your cat out of a hiding spot, since being forced into the open can make a nervous animal more fearful. " +
        N(19) + "Instead, spend time in the room doing something calm, such as reading, so that your cat learns your presence is safe and predictable. " +
        N(20) + "Let the cat approach you first. " +
        N(21) + "Most cats begin exploring within one to two weeks, though some shy cats take a month or longer. " +
        N(22) + "Eating, using the litter box, and grooming are all signs that your cat is settling in, even if you rarely see it. " +
        N(23) + "If your cat has not eaten for more than a day, contact the shelter or a veterinarian. " +
        N(24) + "Patience during the first week is the best foundation for years of trust.</p>",
      claims: [
        {
          id: "pairing",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The author's purpose in pairing Ingrid's story with the Brightwater handout is most likely to —",
          choices: [
            { letter: "A", text: "prove that shelters give poor advice to new owners" },
            { letter: "B", text: "explain why Domino was given up to the shelter" },
            { letter: "C", text: "show one character living out the handout's advice" },
            { letter: "D", text: "compare cats and dogs as pets for new owners" }
          ],
          correct: "C"
        },
        {
          id: "bowl",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Read alongside the handout, what does the empty food bowl in sentence 1 reveal about Domino?",
          choices: [
            { letter: "A", text: "He is settling in, even though Ingrid rarely sees him." },
            { letter: "B", text: "He is not being given enough food each night." },
            { letter: "C", text: "Ingrid has been forgetting to fill his bowl." },
            { letter: "D", text: "Another animal in the house is eating his food." }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Select TWO sentences, one from each text, that together show the value of sitting quietly nearby instead of reaching for a shy cat.",
          choices: [
            { letter: "A", text: "Sentence 3: Ingrid imagined a cat on her lap." },
            { letter: "B", text: "Sentence 7: Ingrid sits against the wall with her homework." },
            { letter: "C", text: "Sentence 19: owners should do something calm in the room." },
            { letter: "D", text: "Sentence 23: owners should call if the cat stops eating." }
          ],
          correct: ["B", "C"]
        },
        {
          id: "compare",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Compared with the shelter handout, Ingrid's story presents the first days with a shy cat in a way that is more —",
          choices: [
            { letter: "A", text: "scientific and precise" },
            { letter: "B", text: "humorous and exaggerated" },
            { letter: "C", text: "critical and doubtful" },
            { letter: "D", text: "personal and emotional" }
          ],
          correct: "D"
        },
        {
          id: "ingrid",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Between the first night and the second, Ingrid changes from —",
          choices: [
            { letter: "A", text: "coaxing Domino out to letting him choose when to approach" },
            { letter: "B", text: "ignoring Domino to worrying about him constantly" },
            { letter: "C", text: "waiting patiently to demanding that he come out" },
            { letter: "D", text: "fearing the cat to finding him rather boring" }
          ],
          correct: "A"
        },
        {
          id: "why",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the handout, why should owners avoid pulling a cat out of its hiding spot?",
          choices: [
            { letter: "A", text: "The cat may badly scratch the owner's hands." },
            { letter: "B", text: "Being forced out can make a nervous cat more afraid." },
            { letter: "C", text: "Hiding spots are where most cats prefer to eat." },
            { letter: "D", text: "The cat must learn to come out on a schedule." }
          ],
          correct: "B"
        },
        {
          id: "breathed",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 4, the image of a closet that breathed mainly suggests that —",
          choices: [
            { letter: "A", text: "the closet has grown too warm for the cat" },
            { letter: "B", text: "Ingrid is afraid of the dark hallway" },
            { letter: "C", text: "the winter boots give off an unpleasant smell" },
            { letter: "D", text: "Ingrid senses Domino there without seeing him" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the Brightwater shelter handout in Text 2 mainly organized?",
          choices: [
            { letter: "A", text: "It tells one owner's story from start to finish." },
            { letter: "B", text: "It compares cats and dogs in a new home point by point." },
            { letter: "C", text: "It explains hiding, then gives advice, signs, and a warning." },
            { letter: "D", text: "It lists questions owners ask, each with a short answer." }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── POETRY · bridges ───────────────────────── */
    {
      id: "g9-rl-c56-footbridge",
      family: "G9",
      title: "What the Footbridge Knows",
      kind: "Poetry · 9.RL",
      blurb: "An old footbridge describes everyone who crosses it, and one name no one else can see.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "I am only planks and two old cables,<br>" +
        L(2) + "a hyphen of wood between one bank and the other,<br>" +
        L(3) + "but I have learned the weight of everyone in town.<br>" +
        L(4) + "Mornings, the mail carrier crosses fast,<br>" +
        L(5) + "her boots a drumroll on my back,<br>" +
        L(6) + "and the school kids come in a loose, loud flock,<br>" +
        L(7) + "jumping on my middle just to feel me sway.<br>" +
        L(8) + "I do not mind. I was built to bend.<br>" +
        L(9) + "Noon is the fisherman, slow as a heron,<br>" +
        L(10) + "who stops halfway and leans on my rail<br>" +
        L(11) + "to read the water like a newspaper.<br>" +
        L(12) + "Evenings bring the couple with the gray dog<br>" +
        L(13) + "who will not cross until they lift him,<br>" +
        L(14) + "trembling, into their arms.<br>" +
        L(15) + "In spring the creek forgets its manners.<br>" +
        L(16) + "It shoves branches at my legs, it shouts,<br>" +
        L(17) + "it climbs up almost to my boards,<br>" +
        L(18) + "and I hold, and I hold, and I hold.<br>" +
        L(19) + "One April a crew came with new bolts and a paint can.<br>" +
        L(20) + "A girl on the crew wrote her name<br>" +
        L(21) + "in pencil under my last plank, where no one looks.<br>" +
        L(22) + "I carry it the way I carry everyone:<br>" +
        L(23) + "without asking where they're going,<br>" +
        L(24) + "glad only that they get there.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the footbridge's description of the people who cross it best support?",
          choices: [
            { letter: "A", text: "Old structures should be replaced by stronger ones." },
            { letter: "B", text: "Quiet service to others can give life a purpose." },
            { letter: "C", text: "Nature always defeats the things that people build." },
            { letter: "D", text: "People rarely notice the beauty of a small creek." }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because What the Footbridge Knows is spoken by the bridge itself, the reader —",
          choices: [
            { letter: "A", text: "hears each crosser explain where he or she is going" },
            { letter: "B", text: "learns exactly how the crew repaired the cables" },
            { letter: "C", text: "learns about the town through what the bridge feels" },
            { letter: "D", text: "sees the creek through the fisherman's eyes" }
          ],
          correct: "C"
        },
        {
          id: "hyphen",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 2, calling the bridge a hyphen of wood suggests that the bridge —",
          choices: [
            { letter: "A", text: "joins two places the way a hyphen joins two words" },
            { letter: "B", text: "is far too short to be of much use to the town" },
            { letter: "C", text: "is shaped like a letter of the alphabet" },
            { letter: "D", text: "splits the town into two unfriendly halves" }
          ],
          correct: "A"
        },
        {
          id: "creek",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In lines 15 through 17, the creek is described as a person who forgets its manners mainly to show that in spring the creek is —",
          choices: [
            { letter: "A", text: "too shallow for the fisherman's line" },
            { letter: "B", text: "calm and pleasant for evening walkers" },
            { letter: "C", text: "frozen solid along both of its banks" },
            { letter: "D", text: "rising wildly and pushing at the bridge" }
          ],
          correct: "D"
        },
        {
          id: "repeat",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The poet repeats and I hold three times in line 18 most likely to —",
          choices: [
            { letter: "A", text: "stress the bridge's steady endurance in the flood" },
            { letter: "B", text: "hint that the bridge is about to break apart" },
            { letter: "C", text: "suggest that the bridge is holding the gray dog" },
            { letter: "D", text: "slow the poem down into a gentle lullaby" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "Compared with lines 4 through 14, the final six lines of the footbridge poem shift from —",
          choices: [
            { letter: "A", text: "a calm morning to a frightening storm" },
            { letter: "B", text: "the bridge's voice to the young girl's voice" },
            { letter: "C", text: "describing crossers to reflecting on carrying them" },
            { letter: "D", text: "complaints about the town to praise for the crew" }
          ],
          correct: "C"
        },
        {
          id: "newspaper",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In line 11, saying that the fisherman reads the water like a newspaper suggests that he —",
          choices: [
            { letter: "A", text: "is bored by the view from the bridge" },
            { letter: "B", text: "studies the creek closely for information" },
            { letter: "C", text: "brings a newspaper to read at lunchtime" },
            { letter: "D", text: "cannot see the water well in the sun" }
          ],
          correct: "B"
        },
        {
          id: "girl",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "What can the reader infer from lines 20 and 21 about the girl on the repair crew?",
          choices: [
            { letter: "A", text: "She did not trust the crew's new bolts." },
            { letter: "B", text: "She wanted everyone in town to see her name." },
            { letter: "C", text: "She was too young to help with the repairs." },
            { letter: "D", text: "She took private pride in her part of the work." }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────────────────── DRAMA · school play backstage ───────────────────────── */
    {
      id: "g9-rl-c56-places-please",
      family: "G9",
      title: "Places, Please",
      kind: "Drama · 9.RL",
      blurb: "Fifteen minutes to curtain, a king hiding in the costume closet, and a stage manager with a secret.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "The crowded dressing room at Fairmont High School, fifteen minutes before opening night of the spring musical. " +
        N(2) + "A long mirror is framed with bright bulbs, costumes hang from a rolling rack, and a narrow door at the back leads to the costume closet.</em></p>" +
        "<p><strong>SUNNY:</strong> <em>(holding a clipboard, speaking into her headset)</em> " + N(3) + "Fifteen minutes, everyone. " +
        N(4) + "Fifteen minutes to places.</p>" +
        "<p><strong>BEX:</strong> <em>(entering with an armful of props)</em> " + N(5) + "Has anyone seen Ikenna? " +
        N(6) + "His crown is still on my table, and he's in the very first scene.</p>" +
        "<p><strong>SUNNY:</strong> " + N(7) + "He signed in an hour ago. " +
        N(8) + "<em>(Aside, to the audience.)</em> And he's been inside the costume closet for twenty minutes, which is never a good sign.</p>" +
        "<p><em>" + N(9) + "The closet door opens a crack. " +
        N(10) + "IKENNA steps out in half of a king's costume, pale, gripping his script with both hands.</em></p>" +
        "<p><strong>IKENNA:</strong> " + N(11) + "I'm fine. " +
        N(12) + "I'm completely fine. " +
        N(13) + "I was just running my lines.</p>" +
        "<p><strong>BEX:</strong> " + N(14) + "In the closet?</p>" +
        "<p><strong>IKENNA:</strong> " + N(15) + "The acoustics are good in there. " +
        N(16) + "<em>(Aside.)</em> I have forgotten every word of the first song, and the auditorium is full of people who know my mother.</p>" +
        "<p><strong>SUNNY:</strong> <em>(gently, setting down her clipboard)</em> " + N(17) + "Bex, could you check the stage-right prop table for me? " +
        N(18) + "Twice?</p>" +
        "<p><strong>BEX:</strong> " + N(19) + "<em>(looking from one to the other, then nodding)</em> Twice. Got it. " +
        N(20) + "<em>(She exits.)</em></p>" +
        "<p><strong>SUNNY:</strong> " + N(21) + "Do you know what I do before every show? " +
        N(22) + "I throw up a little.</p>" +
        "<p><strong>IKENNA:</strong> " + N(23) + "You do not.</p>" +
        "<p><strong>SUNNY:</strong> " + N(24) + "Every single time, since sixth grade. " +
        N(25) + "Then I pick up my clipboard and call the cues anyway, because the cues don't care how my stomach feels. " +
        N(26) + "<em>(She hands him the crown.)</em> Neither does the first song. " +
        N(27) + "Your mouth remembers it even if your brain is pretending it doesn't.</p>" +
        "<p><strong>IKENNA:</strong> <em>(turning the crown over in his hands)</em> " + N(28) + "And what if it doesn't?</p>" +
        "<p><strong>SUNNY:</strong> " + N(29) + "Then the orchestra plays the introduction again, and you look royal while you wait. " +
        N(30) + "Kings are allowed to take their time.</p>" +
        "<p><em>" + N(31) + "IKENNA laughs, a short, surprised sound. " +
        N(32) + "He sets the crown on his head and studies himself in the mirror.</em></p>" +
        "<p><strong>MR. DELACROIX:</strong> <em>(offstage, over the speaker)</em> " + N(33) + "Five minutes, company. " +
        N(34) + "Five minutes.</p>" +
        "<p><strong>IKENNA:</strong> <em>(standing straighter)</em> " + N(35) + "Hey, Sunny? " +
        N(36) + "Do you really throw up before every show?</p>" +
        "<p><strong>SUNNY:</strong> <em>(picking up her clipboard, already heading for the door)</em> " + N(37) + "Places, Your Majesty.</p>" +
        "<p><em>" + N(38) + "She exits. " +
        N(39) + "IKENNA hums the first line of the song under his breath, quietly at first, then a little louder. " +
        N(40) + "The lights fade slowly on the empty dressing room and the glowing bulbs of the mirror.</em></p>",
      claims: [
        {
          id: "aside1",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Sunny's aside in sentence 8 mainly lets the audience know that she —",
          choices: [
            { letter: "A", text: "is angry that Bex has lost track of the crown" },
            { letter: "B", text: "plans to replace Ikenna with an understudy" },
            { letter: "C", text: "has forgotten what time the curtain goes up" },
            { letter: "D", text: "already suspects that Ikenna is struggling" }
          ],
          correct: "D"
        },
        {
          id: "aside2",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Ikenna's aside in sentence 16 creates dramatic irony because —",
          choices: [
            { letter: "A", text: "the audience knows his panic while he insists he is fine" },
            { letter: "B", text: "Bex already knows that he has forgotten the song" },
            { letter: "C", text: "Sunny cannot hear anything through her headset" },
            { letter: "D", text: "the song he forgot is not actually in the show" }
          ],
          correct: "A"
        },
        {
          id: "direction",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction in sentence 19, in which Bex looks from one to the other and then nods, mainly shows that Bex —",
          choices: [
            { letter: "A", text: "is confused about which prop table to check" },
            { letter: "B", text: "understands that Sunny wants time alone with Ikenna" },
            { letter: "C", text: "disagrees with Sunny's instructions about props" },
            { letter: "D", text: "is far too busy to notice Ikenna's fear" }
          ],
          correct: "B"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the setting, a dressing room minutes before curtain, shape Ikenna's conflict?",
          choices: [
            { letter: "A", text: "The bright mirror makes him worry about his costume." },
            { letter: "B", text: "The rolling rack lets him hide from the director." },
            { letter: "C", text: "The countdown makes his fear of forgetting more urgent." },
            { letter: "D", text: "The noise keeps him from hearing Sunny's advice." }
          ],
          correct: "C"
        },
        {
          id: "sunny",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes how Sunny handles Ikenna's stage fright?",
          choices: [
            { letter: "A", text: "She calms him by sharing her own nerves and a plan." },
            { letter: "B", text: "She scolds him for hiding and wasting everyone's time." },
            { letter: "C", text: "She reports him to Mr. Delacroix right away." },
            { letter: "D", text: "She ignores his fear and focuses on the props." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the final moments of Places, Please (sentences 35 through 40) is best described as —",
          choices: [
            { letter: "A", text: "tense and gloomy" },
            { letter: "B", text: "warmly encouraging" },
            { letter: "C", text: "sarcastic and bitter" },
            { letter: "D", text: "silly and chaotic" }
          ],
          correct: "B"
        },
        {
          id: "kings",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sunny's line in sentence 30 that kings are allowed to take their time moves the scene forward by —",
          choices: [
            { letter: "A", text: "revealing that the show will start late" },
            { letter: "B", text: "explaining why the orchestra is missing" },
            { letter: "C", text: "showing that Sunny wants to play the king" },
            { letter: "D", text: "turning Ikenna's role into a way to handle a slip" }
          ],
          correct: "D"
        },
        {
          id: "unanswered",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sunny leaves Ikenna's question in sentence 36 unanswered. The reader can best infer that —",
          choices: [
            { letter: "A", text: "she is embarrassed that she lied to him earlier" },
            { letter: "B", text: "she could not hear him over the backstage speaker" },
            { letter: "C", text: "whether it is true matters less than that it helped" },
            { letter: "D", text: "she is angry that he doubts her honesty" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── FUNCTIONAL TEXT · public libraries ───────────────────────── */
    {
      id: "g9-ri-c56-makerspace-guide",
      family: "G9",
      title: "Teen Makerspace Member Guide",
      kind: "Functional text · 9.RI",
      blurb: "How to join, earn badges, reserve a 3D printer, and keep your privileges at the library makerspace.",
      level: 1,
      passage:
        "<p><strong>Northgate Branch Library: Teen Makerspace Member Guide</strong></p>" +
        "<p>" + N(1) + "Welcome to the Teen Makerspace, a free workshop on the second floor of the Northgate Branch Library for patrons ages 13 to 18. " +
        N(2) + "The space includes two 3D printers, a vinyl cutter, sewing machines, a soldering station, and a recording booth. " +
        N(3) + "This guide explains how to become a member, how to reserve equipment, and what we expect from everyone who uses the room.</p>" +
        "<p><strong>Becoming a Member</strong> " + N(4) + "To join, bring your library card to the second-floor desk and complete the one-page member form. " +
        N(5) + "Patrons under 16 need a parent or guardian to sign the form. " +
        N(6) + "Every new member must also attend a 30-minute orientation, offered on Tuesdays at 4:00 p.m. and Saturdays at 11:00 a.m. " +
        N(7) + "After orientation, your card will be marked with a green M, and you may use the basic tools, such as the sewing machines and the recording booth.</p>" +
        "<p><strong>Earning Badges</strong> " + N(8) + "Some equipment can cause injuries or expensive damage if it is used incorrectly. " +
        N(9) + "For this reason, the 3D printers, the vinyl cutter, and the soldering station each require a separate badge. " +
        N(10) + "To earn a badge, sign up for a one-hour training session with a makerspace mentor and complete a short practice project while the mentor watches. " +
        N(11) + "Badges never expire, but a mentor may ask you to retrain if you have not used a machine in six months.</p>" +
        "<p><strong>Reserving Equipment</strong> " + N(12) + "Members may reserve any machine for up to two hours per day using the sign-up tablet by the door or the library's online calendar. " +
        N(13) + "Reservations open seven days in advance. " +
        N(14) + "If you are more than 15 minutes late, your reservation will be released to the next member on the waiting list. " +
        N(15) + "Walk-in use is welcome whenever a machine is free.</p>" +
        "<p><strong>Materials and Costs</strong> " + N(16) + "Use of the space and its tools is free. " +
        N(17) + "The library provides thread, scrap fabric, and basic soldering kits at no charge. " +
        N(18) + "3D printing costs 10 cents per gram of filament, which keeps most small projects under one dollar. " +
        N(19) + "Vinyl sheets are 50 cents each. " +
        N(20) + "Payment is due when you pick up your finished item at the desk.</p>" +
        "<p><strong>Space Rules</strong> " + N(21) + "Clean your work area and return all tools to their labeled bins before you leave. " +
        N(22) + "Food is not allowed, but drinks in closed containers may be kept on the counter by the window. " +
        N(23) + "Report any broken equipment to a staff member immediately rather than trying to fix it yourself. " +
        N(24) + "Members who break these rules may lose makerspace privileges for up to 30 days. " +
        N(25) + "We think the makerspace is the most exciting room in the library, and we can't wait to see what you build.</p>",
      claims: [
        {
          id: "join",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the guide, what must a 15-year-old do before using the makerspace sewing machines for the first time?",
          choices: [
            { letter: "A", text: "Get a guardian's signature and attend orientation." },
            { letter: "B", text: "Earn a separate badge from a makerspace mentor." },
            { letter: "C", text: "Reserve the machine seven days in advance." },
            { letter: "D", text: "Pay 50 cents for thread and scrap fabric." }
          ],
          correct: "A"
        },
        {
          id: "late",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the Reserving Equipment section, what happens if a member arrives 20 minutes late for a reservation?",
          choices: [
            { letter: "A", text: "The member must pay a late fee at the desk." },
            { letter: "B", text: "The member loses privileges for 30 days." },
            { letter: "C", text: "The time may go to someone on the waiting list." },
            { letter: "D", text: "The member's badge must be earned again." }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the Teen Makerspace Member Guide mainly organized?",
          choices: [
            { letter: "A", text: "As a story about one member's first visit." },
            { letter: "B", text: "Into headed sections that each cover one topic." },
            { letter: "C", text: "As a list of problems followed by solutions." },
            { letter: "D", text: "In time order from the day the room opened." }
          ],
          correct: "B"
        },
        {
          id: "s8",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The guide includes sentence 8 at the start of the Earning Badges section mainly to —",
          choices: [
            { letter: "A", text: "warn members that the room is unsafe" },
            { letter: "B", text: "describe the cost of fixing broken tools" },
            { letter: "C", text: "encourage members to try soldering" },
            { letter: "D", text: "explain why some machines need a badge" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the main purpose of the Northgate makerspace guide?",
          choices: [
            { letter: "A", text: "To explain how teens can join and use the space properly." },
            { letter: "B", text: "To persuade adults to donate tools to the library." },
            { letter: "C", text: "To compare the space with other libraries' workshops." },
            { letter: "D", text: "To describe the history of 3D printing technology." }
          ],
          correct: "A"
        },
        {
          id: "cheap",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence from the guide best supports the idea that most makerspace projects cost very little?",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 18" },
            { letter: "C", text: "Sentence 24" },
            { letter: "D", text: "Sentence 6" }
          ],
          correct: "B"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the makerspace guide expresses the library's opinion rather than a rule or a fact?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 22" },
            { letter: "D", text: "Sentence 25" }
          ],
          correct: "D"
        },
        {
          id: "privileges",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 24, the word privileges most nearly means —",
          choices: [
            { letter: "A", text: "required training sessions" },
            { letter: "B", text: "money owed for materials" },
            { letter: "C", text: "special rights to use something" },
            { letter: "D", text: "reserved blocks of time" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────────────────── ARGUMENT · bridges ───────────────────────── */
    {
      id: "g9-ri-c56-iron-bridge",
      family: "G9",
      title: "Give the Iron Bridge a Second Career",
      kind: "Argument · 9.RI",
      blurb: "A student argues that her town's 112-year-old truss bridge should carry walkers instead of becoming scrap.",
      level: 3,
      passage:
        "<p>" + N(1) + "For one hundred and twelve years, the iron truss bridge on Mill Road has carried Halbrook across the Tessaly River. " +
        N(2) + "Next spring, the county will open a new concrete bridge a quarter mile downstream, and the current plan calls for the old bridge to be torn down and sold for scrap. " +
        N(3) + "That plan is a mistake. " +
        N(4) + "The county should keep the iron bridge and convert it into a crossing for pedestrians and cyclists.</p>" +
        "<p>" + N(5) + "The first reason is safety. " +
        N(6) + "Right now, students at Halbrook High who live on the east side of the river have two choices: ride the bus or walk along the shoulder of Route 9, where trucks pass at fifty miles an hour. " +
        N(7) + "According to the county's own traffic study, about 140 students live within a mile of the old bridge. " +
        N(8) + "A car-free crossing would give them a direct, protected path to school, and it would do the same for the families who walk to the farmers market on Saturdays.</p>" +
        "<p>" + N(9) + "The second reason is cost. " +
        N(10) + "Demolition is not free. " +
        N(11) + "The county engineer's report estimates that removing the old bridge would cost $1.1 million, while repairing it for foot and bicycle traffic, which weighs far less than cars and trucks, would cost about $1.4 million. " +
        N(12) + "The difference is small compared with what the town would gain, and state grants for walking and biking paths could cover much of it.</p>" +
        "<p>" + N(13) + "The third reason is harder to measure but just as real. " +
        N(14) + "The iron bridge is the oldest structure in Halbrook still in daily use. " +
        N(15) + "Its crisscrossing beams appear on the town seal, on the high school yearbook cover, and in countless graduation photos. " +
        N(16) + "Tearing it down would be like ripping the first page out of the town's scrapbook. " +
        N(17) + "A town that saves its landmarks tells its young people that the past is worth caring for.</p>" +
        "<p>" + N(18) + "Some residents argue that the old bridge is simply worn out and that repairing it means throwing good money after bad. " +
        N(19) + "That concern deserves a serious answer. " +
        N(20) + "The engineer's report found that the bridge's main beams are sound; the rust is concentrated in the deck and railings, which would be replaced anyway. " +
        N(21) + "Others worry about the cost of upkeep in the future. " +
        N(22) + "Here the evidence is thinner, and the county should study the question carefully before voting. " +
        N(23) + "Still, towns of similar size have kept old bridges for walking, and none of them, as far as I can find, has regretted it.</p>" +
        "<p>" + N(24) + "The new bridge will move cars. " +
        N(25) + "The old one can move something else: students, families, and a town's sense of who it is. " +
        N(26) + "I urge the county board to vote against demolition at its March meeting and to give the iron bridge a second career.</p>" +
        "<p>Kalani Brooks, Grade 9, Halbrook High School</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the writer's central claim about the Mill Road bridge?",
          choices: [
            { letter: "A", text: "The county should save it as a crossing for walkers and cyclists." },
            { letter: "B", text: "The county should not build a new concrete bridge downstream." },
            { letter: "C", text: "The county should repair it so that cars can keep using it." },
            { letter: "D", text: "The county should let students ride bikes along Route 9." }
          ],
          correct: "A"
        },
        {
          id: "safety",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence gives the strongest evidence that many students would benefit from a car-free crossing?",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 14" },
            { letter: "D", text: "Sentence 24" }
          ],
          correct: "B"
        },
        {
          id: "cost",
          sol: "9.RI.3.B",
          sub: "9.RI.3.B.1",
          stem: "Which statement best evaluates the cost evidence in sentence 11?",
          choices: [
            { letter: "A", text: "It proves that repair would save the county money." },
            { letter: "B", text: "It is weak because it comes from a student writer." },
            { letter: "C", text: "It shows repair costs more, so the case relies on grants." },
            { letter: "D", text: "It shows that demolition costs more than repair does." }
          ],
          correct: "C"
        },
        {
          id: "limits",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "In which sentence does the writer admit that the evidence on one issue is limited?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 22" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The writer includes sentences 18 through 20 mainly to —",
          choices: [
            { letter: "A", text: "answer an opposing view with the engineer's findings" },
            { letter: "B", text: "admit that the bridge should probably be torn down" },
            { letter: "C", text: "describe how the bridge was first built and painted" },
            { letter: "D", text: "explain how state grants for bike paths are awarded" }
          ],
          correct: "A"
        },
        {
          id: "structure",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The body of the iron bridge editorial (sentences 5 through 23) is organized mainly as —",
          choices: [
            { letter: "A", text: "a timeline of the bridge's long history" },
            { letter: "B", text: "a point-by-point comparison of two bridges" },
            { letter: "C", text: "three reasons followed by answers to objections" },
            { letter: "D", text: "a single story told from one family's view" }
          ],
          correct: "C"
        },
        {
          id: "scrapbook",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 16, comparing demolition to ripping the first page out of the town's scrapbook suggests that the bridge —",
          choices: [
            { letter: "A", text: "is made of thin and easily damaged material" },
            { letter: "B", text: "is a treasured record of the town's early past" },
            { letter: "C", text: "appears in too many of the town's photographs" },
            { letter: "D", text: "should be moved into the town's history museum" }
          ],
          correct: "B"
        },
        {
          id: "career",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "In sentence 26, the writer asks for a second career for the bridge rather than a new use. Compared with new use, second career suggests that the bridge —",
          choices: [
            { letter: "A", text: "will earn money for the county" },
            { letter: "B", text: "must be retrained by engineers" },
            { letter: "C", text: "is too old to do useful work" },
            { letter: "D", text: "has served well and can keep working" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
