/* SOL Labyrinth — Grade 9 tiny packs (VA 9.RL / 9.RI / 9.RV / 9.DSR), expansion file 33.
 * 25 tiny texts (50–90 words; poems 6–8 lines; paired texts 35–45 words each) for the early nights.
 * Topics: storm chasing and weather, a high school orchestra, bike repair and cycling, a local history museum.
 * Original text only; no VDOE / copyrighted material. Pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    {
      id: "g9-rl-c33-green-sky",
      family: "G9",
      title: "Green Sky",
      kind: "Literary · 9.RL",
      blurb: "Mateo rides along on his first storm chase.",
      level: 1,
      passage:
        "<p>" + N(1) + "Aunt Rosa parked the van on a gravel shoulder and pointed west, where the sky had turned pea-soup green. " +
        N(2) + "Mateo had begged all summer to ride along, but now his hands would not stop shaking. " +
        N(3) + "\"Green means hail,\" Rosa said calmly, tapping the radar screen on the dashboard. " +
        N(4) + "She wrote the time in her notebook, called the weather office, and reported what she saw. " +
        N(5) + "Then she turned the van south, away from the storm. " +
        N(6) + "\"The job is to watch it,\" she said, \"not to win against it.\"" +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Aunt Rosa in this passage?",
          choices: [
            { letter: "A", text: "She is thrilled by danger and wants to get closer." },
            { letter: "B", text: "She is nervous and unsure of what to do next." },
            { letter: "C", text: "She is calm, careful, and focused on her task." },
            { letter: "D", text: "She is annoyed that Mateo came along on the chase." }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentence 2, readers can best infer that Mateo —",
          choices: [
            { letter: "A", text: "feels afraid even though he wanted to come" },
            { letter: "B", text: "is cold because the van has no heater" },
            { letter: "C", text: "regrets missing a summer trip with friends" },
            { letter: "D", text: "is excited to drive the van himself" }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 1, the word shoulder most nearly means —",
          choices: [
            { letter: "A", text: "a part of the body" },
            { letter: "B", text: "a heavy load to carry" },
            { letter: "C", text: "a hill beside a field" },
            { letter: "D", text: "the edge of a road" }
          ],
          correct: "D"
        },
        {
          id: "craft",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The author includes sentence 5 mainly to show that Rosa —",
          choices: [
            { letter: "A", text: "has lost track of where the storm is going" },
            { letter: "B", text: "puts safety ahead of getting a closer look" },
            { letter: "C", text: "wants to reach the weather office in person" },
            { letter: "D", text: "is giving up on storm chasing for good" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the passage?",
          choices: [
            { letter: "A", text: "Studying a danger well means respecting its power." },
            { letter: "B", text: "Young people should never join adults at work." },
            { letter: "C", text: "Technology has made weather harmless to watch." },
            { letter: "D", text: "Courage means staying near a storm the longest." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-ri-c33-storm-spotters",
      family: "G9",
      title: "Eyes on the Ground",
      kind: "Informational · 9.RI",
      blurb: "How trained volunteers help forecasters see what radar misses.",
      level: 1,
      passage:
        "<p>" + N(1) + "Weather radar can show where rain is falling, but it cannot always see what is happening close to the ground. " +
        N(2) + "That is why many weather offices train volunteers called storm spotters. " +
        N(3) + "In a free class, spotters learn to tell a harmless low cloud from a rotating wall cloud. " +
        N(4) + "During a storm, they report hail size, wind damage, and funnel clouds by phone or radio. " +
        N(5) + "Forecasters combine these reports with radar data before issuing warnings. " +
        N(6) + "A spotter's eyes can add precious minutes that help people reach shelter." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the main idea of the passage about storm spotters?",
          choices: [
            { letter: "A", text: "Radar has become useless for tracking modern storms." },
            { letter: "B", text: "Trained spotters give forecasters ground details radar can miss." },
            { letter: "C", text: "Wall clouds are the most dangerous kind of cloud." },
            { letter: "D", text: "Anyone can issue a storm warning with a phone." }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, what do spotters learn in their class?",
          choices: [
            { letter: "A", text: "how to repair damaged radar equipment" },
            { letter: "B", text: "how to drive safely through heavy hail" },
            { letter: "C", text: "how to write the official storm warnings" },
            { letter: "D", text: "how to tell a harmless cloud from a rotating one" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the passage mainly organized?",
          choices: [
            { letter: "A", text: "It describes a problem and then a solution to it." },
            { letter: "B", text: "It tells events in the order of one famous storm." },
            { letter: "C", text: "It compares two kinds of radar side by side." },
            { letter: "D", text: "It lists opinions from several different forecasters." }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 6, the word precious most nearly means —",
          choices: [
            { letter: "A", text: "costly" },
            { letter: "B", text: "delicate" },
            { letter: "C", text: "valuable" },
            { letter: "D", text: "beloved" }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The main purpose of this text is to —",
          choices: [
            { letter: "A", text: "warn readers to stay indoors during every storm" },
            { letter: "B", text: "explain how volunteer spotters support forecasters" },
            { letter: "C", text: "argue that weather offices need more radar" },
            { letter: "D", text: "tell the story of one spotter's scariest storm" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c33-before-storm",
      family: "G9",
      title: "Before the Storm",
      kind: "Poetry · 9.RL",
      blurb: "Seven lines on a porch as thunder gathers.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The air goes still, a held-in breath;<br>" +
        L(2) + "the maples flip their leaves to silver,<br>" +
        L(3) + "and swallows stitch the sky in low, quick seams.<br>" +
        L(4) + "Grandfather sets his coffee on the rail<br>" +
        L(5) + "and counts the seconds after light:<br>" +
        L(6) + "one, two, three, the thunder answers late.<br>" +
        L(7) + "\"Not yet,\" he says, and we stay out to watch." +
        "</p>",
      claims: [
        {
          id: "fig",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.1",
          stem: "In line 3, the poet compares the swallows' flight to —",
          choices: [
            { letter: "A", text: "falling rain" },
            { letter: "B", text: "a ringing bell" },
            { letter: "C", text: "sewing" },
            { letter: "D", text: "a drawn map" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "The images in lines 1 and 2 mainly create a mood that is —",
          choices: [
            { letter: "A", text: "tense and expectant" },
            { letter: "B", text: "cheerful and festive" },
            { letter: "C", text: "bored and sleepy" },
            { letter: "D", text: "angry and violent" }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of line 7 is best described as —",
          choices: [
            { letter: "A", text: "suddenly panicked" },
            { letter: "B", text: "gently mocking" },
            { letter: "C", text: "quietly regretful" },
            { letter: "D", text: "calmly confident" }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The poem is told from the point of view of —",
          choices: [
            { letter: "A", text: "the grandfather, speaking to himself" },
            { letter: "B", text: "someone on the porch with the grandfather" },
            { letter: "C", text: "a weather reporter on the radio" },
            { letter: "D", text: "the swallows flying overhead" }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that the grandfather counts seconds in lines 5 and 6 to —",
          choices: [
            { letter: "A", text: "judge how far away the storm still is" },
            { letter: "B", text: "time how long his coffee has cooled" },
            { letter: "C", text: "teach the speaker how to count aloud" },
            { letter: "D", text: "decide when the swallows will land" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rv-c33-chase-log",
      family: "G9",
      title: "The Chase Log",
      kind: "Vocabulary · 9.RV",
      blurb: "A student's log from a storm chase that did not go as planned.",
      level: 2,
      passage:
        "<p>" + N(1) + "Our forecast had been <strong>tentative</strong> all morning, hedged with words like maybe and possibly. " +
        N(2) + "By three o'clock, though, the clouds over the plains had grown <strong>ominous</strong>, dark and swollen at their bases. " +
        N(3) + "Dr. Okafor told us to stay <strong>vigilant</strong>, so we took turns watching every direction at once. " +
        N(4) + "When the rotation finally <strong>dissipated</strong>, breaking apart into harmless ragged shreds, the whole van exhaled. " +
        N(5) + "The storm had kept its secrets, and we drove home with a <strong>meager</strong> handful of photos." +
        "</p>",
      claims: [
        {
          id: "context",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from sentence 1 best help the reader understand the meaning of tentative?",
          choices: [
            { letter: "A", text: "Our forecast had been" },
            { letter: "B", text: "had been tentative all morning" },
            { letter: "C", text: "all morning, hedged with words" },
            { letter: "D", text: "hedged with words like maybe and possibly" }
          ],
          correct: "D"
        },
        {
          id: "meaning",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 4, the word dissipated most nearly means —",
          choices: [
            { letter: "A", text: "scattered and faded away" },
            { letter: "B", text: "grew stronger and faster" },
            { letter: "C", text: "moved toward the van" },
            { letter: "D", text: "stopped and stayed still" }
          ],
          correct: "A"
        },
        {
          id: "conno",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written dark instead of ominous in sentence 2. Compared with dark, the word ominous adds a sense that the clouds —",
          choices: [
            { letter: "A", text: "were moving very slowly" },
            { letter: "B", text: "were pleasant to look at" },
            { letter: "C", text: "warned of something harmful" },
            { letter: "D", text: "were higher than usual" }
          ],
          correct: "C"
        },
        {
          id: "fig",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 5, saying the storm had kept its secrets means that the storm —",
          choices: [
            { letter: "A", text: "was hidden from the radar the whole day" },
            { letter: "B", text: "did not show the chasers what they hoped to see" },
            { letter: "C", text: "was never mentioned in the morning forecast" },
            { letter: "D", text: "destroyed the photos the students had taken" }
          ],
          correct: "B"
        },
        {
          id: "phrase",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 4, the phrase the whole van exhaled suggests that the people in the van —",
          choices: [
            { letter: "A", text: "were tired from shouting" },
            { letter: "B", text: "had trouble breathing" },
            { letter: "C", text: "opened the windows for air" },
            { letter: "D", text: "relaxed with relief" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-dsr-c33-chaser-traffic",
      family: "G9",
      title: "Chasers on the Road",
      kind: "Paired texts · 9.DSR",
      blurb: "A researcher and a deputy look at amateur storm chasing.",
      level: 3,
      passage:
        "<p><strong>Text 1 — A Researcher's View</strong></p>" +
        "<p>" + N(1) + "Amateur chasers have filmed thousands of storms that no radar captured up close. " +
        N(2) + "Scientists now study these videos to learn how tornadoes form and fade. " +
        N(3) + "A single clear clip, shared quickly, can sharpen a forecaster's understanding for years.</p>" +
        "<p><strong>Text 2 — A County Deputy's View</strong></p>" +
        "<p>" + N(4) + "Last May, more than two hundred chaser cars crowded one narrow farm road in our county. " +
        N(5) + "When the storm turned, an ambulance needed twenty minutes to pass them. " +
        N(6) + "Curiosity is fine, but no video is worth blocking a rescue.</p>",
      claims: [
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The two texts differ mainly in how they view —",
          choices: [
            { letter: "A", text: "the way tornadoes form and fade" },
            { letter: "B", text: "the benefits and costs of amateur chasing" },
            { letter: "C", text: "the training that ambulance crews receive" },
            { letter: "D", text: "the size of farm roads in the county" }
          ],
          correct: "B"
        },
        {
          id: "shared",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea do both texts support?",
          choices: [
            { letter: "A", text: "Radar is better than video for studying storms." },
            { letter: "B", text: "Chasers should be banned from all county roads." },
            { letter: "C", text: "Ambulances should follow storm chasers." },
            { letter: "D", text: "Many amateurs now go out to chase storms." }
          ],
          correct: "D"
        },
        {
          id: "challenge",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which sentence from Text 1 does the deputy most directly challenge in sentence 6?",
          choices: [
            { letter: "A", text: "sentence 3, about the value of one clear clip" },
            { letter: "B", text: "sentence 2, about scientists studying videos" },
            { letter: "C", text: "sentence 1, about storms radar did not capture" },
            { letter: "D", text: "none, because the deputy agrees with Text 1" }
          ],
          correct: "A"
        },
        {
          id: "combine",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader combining both texts could best conclude that —",
          choices: [
            { letter: "A", text: "scientists no longer need forecasters at all" },
            { letter: "B", text: "most chasers are trained emergency workers" },
            { letter: "C", text: "chaser videos can help, but not at rescuers' expense" },
            { letter: "D", text: "farm roads are the safest place to watch storms" }
          ],
          correct: "C"
        },
        {
          id: "evid",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence offers the strongest evidence for the deputy's concern?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 5" },
            { letter: "C", text: "sentence 2" },
            { letter: "D", text: "sentence 3" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c33-museum-guide",
      family: "G9",
      title: "Student Visitor Guide",
      kind: "Functional text · 9.RI",
      blurb: "The rules handed out at a county history museum's front desk.",
      level: 1,
      passage:
        "<p><strong>HARLOW COUNTY HISTORY MUSEUM: STUDENT VISITOR GUIDE</strong></p>" +
        "<p>" + N(1) + "The museum is open Tuesday through Saturday, 10 a.m. to 4 p.m., and admission is free for students with a school ID. " +
        N(2) + "Backpacks must be left in the lockers by the front desk. " +
        N(3) + "Pencils are welcome in the galleries, but pens are not, because ink can permanently stain old documents. " +
        N(4) + "Photographs are allowed everywhere except the Letters Room, where camera flashes fade fragile paper. " +
        N(5) + "Ask at the desk for a scavenger-hunt sheet; finishers earn a free postcard." +
        "</p>",
      claims: [
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the visitor guide, why are pens not allowed in the galleries?",
          choices: [
            { letter: "A", text: "Pens are too noisy in quiet rooms." },
            { letter: "B", text: "Pens are sold only at the front desk." },
            { letter: "C", text: "Ink can stain old documents for good." },
            { letter: "D", text: "Pens are needed for the scavenger hunt." }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the Harlow County visitor guide mainly organized?",
          choices: [
            { letter: "A", text: "as a set of practical rules, some with reasons" },
            { letter: "B", text: "as the story of one student's museum visit" },
            { letter: "C", text: "as a comparison of two different museums" },
            { letter: "D", text: "as a timeline of the museum's history" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The main purpose of the Harlow County visitor guide is to —",
          choices: [
            { letter: "A", text: "persuade students to donate old letters" },
            { letter: "B", text: "describe the objects in the Letters Room" },
            { letter: "C", text: "explain why the museum charges admission" },
            { letter: "D", text: "prepare students for a visit to the museum" }
          ],
          correct: "D"
        },
        {
          id: "evid",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that some museum rules protect objects from light?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 4" },
            { letter: "C", text: "sentence 3" },
            { letter: "D", text: "sentence 5" }
          ],
          correct: "B"
        },
        {
          id: "word",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 4 of the visitor guide, the word fragile most nearly means —",
          choices: [
            { letter: "A", text: "easily damaged" },
            { letter: "B", text: "very valuable" },
            { letter: "C", text: "hard to read" },
            { letter: "D", text: "newly printed" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c33-second-chair",
      family: "G9",
      title: "Second Chair",
      kind: "Literary · 9.RL",
      blurb: "Hana lands one seat behind her rival in the viola section.",
      level: 2,
      passage:
        "<p>" + N(1) + "When Mr. Delgado posted the seating chart, Hana found her name in the second chair of the violas, one seat behind Priyanka. " +
        N(2) + "She told everyone she did not mind. " +
        N(3) + "At home, though, she played the hard passage from the symphony until her fingertips ached and her little brother started wearing earmuffs. " +
        N(4) + "At Friday rehearsal, Priyanka's bow slipped during the solo, and Hana quietly played the next measure for her. " +
        N(5) + "Priyanka caught her eye and nodded, and the line went on unbroken." +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows that Hana cares about her seat more than she admits?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 2" },
            { letter: "C", text: "sentence 5" },
            { letter: "D", text: "sentence 3" }
          ],
          correct: "D"
        },
        {
          id: "image",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "In sentence 3, the detail about Hana's brother wearing earmuffs mainly suggests that —",
          choices: [
            { letter: "A", text: "the house was cold that winter" },
            { letter: "B", text: "Hana practiced loudly and for a long time" },
            { letter: "C", text: "her brother also plays in the orchestra" },
            { letter: "D", text: "Hana rarely practiced at home" }
          ],
          correct: "B"
        },
        {
          id: "setup",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The details about the seating chart in sentence 1 mainly establish —",
          choices: [
            { letter: "A", text: "the cause of Hana's quiet disappointment" },
            { letter: "B", text: "the reason Mr. Delgado leaves the school" },
            { letter: "C", text: "the date of the spring concert" },
            { letter: "D", text: "the friendship between Hana and her brother" }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that Hana plays the measure in sentence 4 because she —",
          choices: [
            { letter: "A", text: "wants Mr. Delgado to move her to first chair" },
            { letter: "B", text: "hopes Priyanka will be embarrassed" },
            { letter: "C", text: "values the music more than the rivalry" },
            { letter: "D", text: "did not notice that Priyanka had stopped" }
          ],
          correct: "C"
        },
        {
          id: "conno",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written continued instead of went on unbroken in sentence 5. Compared with continued, the phrase went on unbroken adds a sense that the music —",
          choices: [
            { letter: "A", text: "became louder and faster" },
            { letter: "B", text: "had no gap at all" },
            { letter: "C", text: "ended much too soon" },
            { letter: "D", text: "sounded out of tune" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c33-tuning-note",
      family: "G9",
      title: "The Tuning Note",
      kind: "Drama · 9.RL",
      blurb: "Malik has a plan for the measure he keeps missing. Tess has a better one.",
      level: 2,
      passage:
        "<p><em>(The orchestra room after school. MALIK stares at a crumpled page of music.)</em></p>" +
        "<p><strong>MALIK:</strong> " + N(1) + "Measure forty again. <em>(Aside.)</em> " + N(2) + "If I fake a cough on Friday, nobody will hear me miss it.</p>" +
        "<p><strong>TESS:</strong> <em>(entering with her flute)</em> " + N(3) + "You've been in here since lunch, haven't you?</p>" +
        "<p><strong>MALIK:</strong> " + N(4) + "I'm just tuning. <em>(He plucks one string, too hard.)</em></p>" +
        "<p><strong>TESS:</strong> " + N(5) + "Funny, it sounds a lot like panic.</p>" +
        "<p><strong>MALIK:</strong> <em>(smoothing the page flat)</em> " + N(6) + "Fine. " + N(7) + "Play the melody with me, slowly, until I stop tripping.</p>",
      claims: [
        {
          id: "aside",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The aside in sentence 2 mainly reveals Malik's —",
          choices: [
            { letter: "A", text: "pride in his cello playing" },
            { letter: "B", text: "private plan to hide his mistake" },
            { letter: "C", text: "anger at Tess for interrupting" },
            { letter: "D", text: "wish to quit the orchestra" }
          ],
          correct: "B"
        },
        {
          id: "direction",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction after sentence 4, in which Malik plucks one string too hard, mainly shows that he —",
          choices: [
            { letter: "A", text: "has broken his instrument" },
            { letter: "B", text: "wants Tess to leave the room" },
            { letter: "C", text: "is showing off for his friend" },
            { letter: "D", text: "is more upset than he claims" }
          ],
          correct: "D"
        },
        {
          id: "hide",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.2",
          stem: "Which line best shows Malik speaking to Tess in a way that hides his real feelings?",
          choices: [
            { letter: "A", text: "sentence 4" },
            { letter: "B", text: "sentence 1" },
            { letter: "C", text: "sentence 7" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "A"
        },
        {
          id: "smooth",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction smoothing the page flat, before sentence 6, mainly suggests that Malik —",
          choices: [
            { letter: "A", text: "plans to throw the music away" },
            { letter: "B", text: "is tidying up to go home" },
            { letter: "C", text: "is ready to face the problem" },
            { letter: "D", text: "is hiding the page from Tess" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which statement best describes how Malik changes during the scene?",
          choices: [
            { letter: "A", text: "He moves from hiding his trouble to asking for help." },
            { letter: "B", text: "He moves from confidence to fear about the concert." },
            { letter: "C", text: "He moves from friendship with Tess to anger at her." },
            { letter: "D", text: "He moves from the cello to the flute." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-ri-c33-chain-stretch",
      family: "G9",
      title: "Why Chains Stretch",
      kind: "Informational · 9.RI",
      blurb: "What really happens inside a worn bike chain.",
      level: 1,
      passage:
        "<p>" + N(1) + "Riders often say a worn bike chain has \"stretched,\" but the metal does not really get longer. " +
        N(2) + "Instead, the tiny pins and rollers inside each link slowly wear down. " +
        N(3) + "As small gaps open, the chain sits a little higher on the gear teeth. " +
        N(4) + "That loose fit grinds down the gears, which cost far more than a chain. " +
        N(5) + "A cheap tool called a chain checker can measure this wear in seconds. " +
        N(6) + "Replacing a chain early is a small cost that prevents a large one." +
        "</p>",
      claims: [
        {
          id: "open",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author begins with sentence 1 of the chain article mainly to —",
          choices: [
            { letter: "A", text: "correct a common belief about chains" },
            { letter: "B", text: "describe how a chain checker works" },
            { letter: "C", text: "compare chains to other bike parts" },
            { letter: "D", text: "tell how chains were first invented" }
          ],
          correct: "A"
        },
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence best expresses the central idea of the chain article?",
          choices: [
            { letter: "A", text: "Chain checkers are the most useful bike tool." },
            { letter: "B", text: "Gears should be replaced every season." },
            { letter: "C", text: "Chains wear inside, and early replacement saves gears." },
            { letter: "D", text: "Metal chains slowly grow longer as they age." }
          ],
          correct: "C"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, what happens as small gaps open in a chain?",
          choices: [
            { letter: "A", text: "The links snap apart." },
            { letter: "B", text: "It rides higher on the gear teeth." },
            { letter: "C", text: "The pins grow larger." },
            { letter: "D", text: "It becomes too tight to pedal." }
          ],
          correct: "B"
        },
        {
          id: "evid",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that replacing a chain early saves money?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 2" },
            { letter: "C", text: "sentence 3" },
            { letter: "D", text: "sentence 4" }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 6, the word prevents most nearly means —",
          choices: [
            { letter: "A", text: "pays for" },
            { letter: "B", text: "keeps from happening" },
            { letter: "C", text: "makes worse" },
            { letter: "D", text: "announces ahead of time" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c33-blue-frame",
      family: "G9",
      title: "The Blue Frame",
      kind: "Literary · 9.RL",
      blurb: "Ines brings her grandmother's old bicycle back to life.",
      level: 3,
      passage:
        "<p>" + N(1) + "The bicycle had leaned in Abuela's shed for eleven years, its tires sagging like tired shoulders. " +
        N(2) + "Ines spent three Saturdays coaxing rust from the chain and teaching herself to true the warped back wheel. " +
        N(3) + "Her grandmother watched from a lawn chair and said nothing, which was how Abuela said most important things. " +
        N(4) + "On the fourth Saturday, Ines rode a wobbly loop around the block. " +
        N(5) + "When she returned, Abuela was standing, one hand pressed flat against her chest, as if holding a memory in place." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the story of the blue bicycle best support?",
          choices: [
            { letter: "A", text: "Old things should be replaced rather than repaired." },
            { letter: "B", text: "Restoring something old can honor the memories it holds." },
            { letter: "C", text: "Grandparents rarely understand what teenagers enjoy." },
            { letter: "D", text: "Learning a skill alone is always faster than with help." }
          ],
          correct: "B"
        },
        {
          id: "simile",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 1, the author compares the tires to tired shoulders mainly to show that the bicycle —",
          choices: [
            { letter: "A", text: "was too heavy for Ines to lift" },
            { letter: "B", text: "had been built for an adult rider" },
            { letter: "C", text: "was painted a dull, dusty color" },
            { letter: "D", text: "had been worn down by neglect" }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 2, the word true most nearly means to —",
          choices: [
            { letter: "A", text: "straighten" },
            { letter: "B", text: "prove honest" },
            { letter: "C", text: "paint" },
            { letter: "D", text: "replace" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the narrator reports what Abuela does but never what she thinks, the reader —",
          choices: [
            { letter: "A", text: "knows exactly why Abuela stopped riding" },
            { letter: "B", text: "learns the story from Abuela's memory" },
            { letter: "C", text: "must infer her feelings from her actions" },
            { letter: "D", text: "cannot tell whether Ines finished the repair" }
          ],
          correct: "C"
        },
        {
          id: "fig",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 5, the phrase as if holding a memory in place suggests that Abuela —",
          choices: [
            { letter: "A", text: "has a sudden pain from standing too fast" },
            { letter: "B", text: "is moved because the ride recalls her past" },
            { letter: "C", text: "is trying to remember where she parked" },
            { letter: "D", text: "wants Ines to put the bike back in the shed" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c33-old-photograph",
      family: "G9",
      title: "Reading an Old Photograph",
      kind: "Informational · 9.RI",
      blurb: "How museum curators date a picture nobody labeled.",
      level: 3,
      passage:
        "<p>" + N(1) + "When a box of unlabeled photographs arrives at a small history museum, curators rarely know who took them or when. " +
        N(2) + "Instead of guessing, they read the clues. " +
        N(3) + "Thick card mounts with gold edges usually point to the 1880s, while scalloped paper borders became fashionable decades later. " +
        N(4) + "Clothing, storefront signs, and even the shape of a car's headlights narrow the range further. " +
        N(5) + "Still, curators label most results \"circa,\" meaning \"around,\" because a single clue can mislead. " +
        N(6) + "A dated photograph, it turns out, is less a certainty than a careful argument." +
        "</p>",
      claims: [
        {
          id: "interp",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which sentence from the photograph article is an interpretation rather than a factual report?",
          choices: [
            { letter: "A", text: "sentence 3" },
            { letter: "B", text: "sentence 4" },
            { letter: "C", text: "sentence 2" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The photograph article is mainly organized by —",
          choices: [
            { letter: "A", text: "presenting a problem and the method used to handle it" },
            { letter: "B", text: "telling the life story of one photographer" },
            { letter: "C", text: "listing museums from oldest to newest" },
            { letter: "D", text: "comparing photographs with paintings" }
          ],
          correct: "A"
        },
        {
          id: "circa",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author of the photograph article includes sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "define a word that appears on every photograph" },
            { letter: "B", text: "suggest that curators often make careless errors" },
            { letter: "C", text: "show the limits of dating photographs by clues" },
            { letter: "D", text: "explain how car headlights changed over time" }
          ],
          correct: "C"
        },
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the central idea of the article about dating old photographs?",
          choices: [
            { letter: "A", text: "Curators can always find the exact date of a photo." },
            { letter: "B", text: "Curators weigh several clues to estimate a photo's age." },
            { letter: "C", text: "Gold-edged mounts are the most valuable photographs." },
            { letter: "D", text: "Small museums should refuse unlabeled donations." }
          ],
          correct: "B"
        },
        {
          id: "evid",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that curators use more than one kind of evidence?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 2" },
            { letter: "C", text: "sentence 4" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c33-paint-lane",
      family: "G9",
      title: "Paint Is Not Protection",
      kind: "Argument · 9.RI",
      blurb: "A student editorial about the bike lane outside school.",
      level: 3,
      passage:
        "<p>" + N(1) + "The new bike lane on Calloway Avenue is a stripe of white paint, and paint does not stop a car. " +
        N(2) + "Last spring, the student council counted forty-one students riding to school on that road each morning. " +
        N(3) + "Cities that added posts between bikes and traffic often saw more people ride. " +
        N(4) + "Some argue that barriers cost too much, yet a single set of plastic posts costs less than one new crossing signal. " +
        N(5) + "If the town wants students to bike, it should give them a lane that actually protects them." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the writer's main claim in the bike lane editorial?",
          choices: [
            { letter: "A", text: "Students should stop riding on Calloway Avenue." },
            { letter: "B", text: "The town should add barriers to the bike lane." },
            { letter: "C", text: "Crossing signals are a waste of town money." },
            { letter: "D", text: "The student council should repaint the lane." }
          ],
          correct: "B"
        },
        {
          id: "evid",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence gives local evidence that the lane affects many students?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 4" },
            { letter: "D", text: "sentence 5" }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "9.RI.2.B",
          sub: "9.RI.2.B.2",
          stem: "The writer includes sentence 4 of the editorial mainly to —",
          choices: [
            { letter: "A", text: "list the prices of several safety products" },
            { letter: "B", text: "admit that the plan is too expensive" },
            { letter: "C", text: "describe a crossing signal near the school" },
            { letter: "D", text: "answer an objection to the proposal" }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which statement from the editorial is closest to an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "The lane on Calloway Avenue is a stripe of white paint." },
            { letter: "B", text: "Forty-one students rode to school on that road." },
            { letter: "C", text: "The town should give students a lane that protects them." },
            { letter: "D", text: "The council counted riders last spring." }
          ],
          correct: "C"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the editorial, what happened in cities that added posts?",
          choices: [
            { letter: "A", text: "More people chose to ride." },
            { letter: "B", text: "Drivers stopped using the road." },
            { letter: "C", text: "Crossing signals were removed." },
            { letter: "D", text: "Bike lanes were made narrower." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rv-c33-first-rehearsal",
      family: "G9",
      title: "First Rehearsal",
      kind: "Vocabulary · 9.RV",
      blurb: "Forty noisy players, one raised baton, and a three-sentence speech.",
      level: 1,
      passage:
        "<p>" + N(1) + "The first rehearsal of the year was always <strong>chaotic</strong>, with forty students tuning, chatting, and dropping music stands at once. " +
        N(2) + "Then Ms. Adeyemi raised her baton, and the room fell <strong>hushed</strong>. " +
        N(3) + "She gave a <strong>brief</strong> speech, only three sentences long. " +
        N(4) + "\"Listen more than you play,\" she said, \"and you will always <strong>blend</strong> with the people around you.\" " +
        N(5) + "Jonah, a nervous freshman, felt his worry begin to <strong>dwindle</strong> as the first chord filled the room." +
        "</p>",
      claims: [
        {
          id: "context",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from sentence 1 best help the reader understand the meaning of chaotic?",
          choices: [
            { letter: "A", text: "The first rehearsal of the year was always" },
            { letter: "B", text: "of the year was always chaotic, with forty" },
            { letter: "C", text: "tuning, chatting, and dropping music stands at once" },
            { letter: "D", text: "always chaotic, with forty students" }
          ],
          correct: "C"
        },
        {
          id: "brief",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 3, the word brief most nearly means —",
          choices: [
            { letter: "A", text: "short" },
            { letter: "B", text: "serious" },
            { letter: "C", text: "written" },
            { letter: "D", text: "angry" }
          ],
          correct: "A"
        },
        {
          id: "conno",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written quiet instead of hushed in sentence 2. Compared with quiet, the word hushed adds a sense of —",
          choices: [
            { letter: "A", text: "boredom spreading through the room" },
            { letter: "B", text: "a loud noise about to begin" },
            { letter: "C", text: "students leaving one by one" },
            { letter: "D", text: "a sudden, respectful silence" }
          ],
          correct: "D"
        },
        {
          id: "blend",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 4, Ms. Adeyemi's advice that players will blend with the people around them means that players should —",
          choices: [
            { letter: "A", text: "sit closer together on stage" },
            { letter: "B", text: "fit their sound with the group's" },
            { letter: "C", text: "copy the clothes of the others" },
            { letter: "D", text: "play louder than their neighbors" }
          ],
          correct: "B"
        },
        {
          id: "dwindle",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 5, the word dwindle most nearly means to —",
          choices: [
            { letter: "A", text: "shrink gradually" },
            { letter: "B", text: "return suddenly" },
            { letter: "C", text: "grow stronger" },
            { letter: "D", text: "stay the same" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c33-photo-door",
      family: "G9",
      title: "The Photo by the Door",
      kind: "Literary · 9.RL",
      blurb: "A Saturday volunteer meets someone inside an old team picture.",
      level: 1,
      passage:
        "<p>" + N(1) + "Kofi volunteered at the Millbrook History Museum every Saturday, mostly dusting display cases. " +
        N(2) + "One morning an elderly man stopped at a photograph of the 1962 Millbrook High baseball team. " +
        N(3) + "He tapped the boy in the back row and said, \"That one is me, the worst hitter in the county.\" " +
        N(4) + "Kofi grabbed a notepad and asked him to tell the whole story. " +
        N(5) + "By closing time, the photo had a new label, and Kofi had decided that dusting was not his only job." +
        "</p>",
      claims: [
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer from sentence 3 that the elderly man —",
          choices: [
            { letter: "A", text: "is upset that the photo is on display" },
            { letter: "B", text: "remembers his past with good humor" },
            { letter: "C", text: "wants the museum to remove his picture" },
            { letter: "D", text: "was the team's best player" }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Kofi in this story?",
          choices: [
            { letter: "A", text: "bored and eager to go home" },
            { letter: "B", text: "shy and unwilling to speak" },
            { letter: "C", text: "strict about museum rules" },
            { letter: "D", text: "curious and quick to act" }
          ],
          correct: "D"
        },
        {
          id: "dust",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The author mentions dusting in sentence 1 mainly to show that Kofi's job —",
          choices: [
            { letter: "A", text: "seemed small before this visit" },
            { letter: "B", text: "was the most important in the museum" },
            { letter: "C", text: "was about to be taken away" },
            { letter: "D", text: "kept him away from the visitors" }
          ],
          correct: "A"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which idea does the story about the team photograph most clearly develop?",
          choices: [
            { letter: "A", text: "Sports are more important than history." },
            { letter: "B", text: "Old photographs should be kept in storage." },
            { letter: "C", text: "Ordinary people's memories bring history to life." },
            { letter: "D", text: "Volunteers should not speak to visitors." }
          ],
          correct: "C"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the museum setting affect Kofi by the end of the story?",
          choices: [
            { letter: "A", text: "It makes him want to quit volunteering." },
            { letter: "B", text: "It convinces him to try out for baseball." },
            { letter: "C", text: "It makes him nervous around older visitors." },
            { letter: "D", text: "It shows him that history includes living people." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-dsr-c33-section-practice",
      family: "G9",
      title: "Practice, Two Ways",
      kind: "Paired texts · 9.DSR",
      blurb: "A violinist's journal entry beside the orchestra director's email.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From Lucia's Practice Journal</strong></p>" +
        "<p>" + N(1) + "Today the second violins finally played the fast run together, all eight of us landing on the last note at once. " +
        N(2) + "Nobody cheered, but I saw Ben grin. " +
        N(3) + "Practicing alone for weeks felt pointless until that moment.</p>" +
        "<p><strong>Text 2 — Email from the Orchestra Director</strong></p>" +
        "<p>" + N(4) + "Students, please log at least twenty minutes of home practice five days a week before the spring concert. " +
        N(5) + "Section rehearsals depend on each player arriving prepared. " +
        N(6) + "A section can only move as quickly as its least prepared member.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea do the journal entry and the email both support?",
          choices: [
            { letter: "A", text: "Each player's practice matters to the group." },
            { letter: "B", text: "Home practice should last at least an hour." },
            { letter: "C", text: "The second violins are the best section." },
            { letter: "D", text: "Concerts matter more than rehearsals." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The journal entry and the email differ mainly in that the journal —",
          choices: [
            { letter: "A", text: "gives rules, while the email tells a story" },
            { letter: "B", text: "is about a concert, while the email is about tryouts" },
            { letter: "C", text: "describes a personal success, while the email gives instructions" },
            { letter: "D", text: "praises the director, while the email criticizes students" }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Compared with the director's email, Lucia's journal sounds more —",
          choices: [
            { letter: "A", text: "formal and official" },
            { letter: "B", text: "angry and impatient" },
            { letter: "C", text: "doubtful and worried" },
            { letter: "D", text: "personal and emotional" }
          ],
          correct: "D"
        },
        {
          id: "combine",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "A reader combining both texts could best conclude that Lucia's weeks of practice alone —",
          choices: [
            { letter: "A", text: "were wasted because no one cheered" },
            { letter: "B", text: "helped make her section's success possible" },
            { letter: "C", text: "were shorter than the director required" },
            { letter: "D", text: "caused the section to slow down" }
          ],
          correct: "B"
        },
        {
          id: "grin",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "In sentence 2, readers can infer that Ben's grin shows he —",
          choices: [
            { letter: "A", text: "thought the run sounded funny" },
            { letter: "B", text: "was laughing at a mistake" },
            { letter: "C", text: "was quietly proud of the section" },
            { letter: "D", text: "wanted Lucia to stop playing" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-ri-c33-oboe-first",
      family: "G9",
      title: "Why the Oboe Goes First",
      kind: "Informational · 9.RI",
      blurb: "The reason a whole orchestra waits for one note.",
      level: 1,
      passage:
        "<p>" + N(1) + "Before a concert, the oboe player sounds a single note, and the rest of the orchestra tunes to it. " +
        N(2) + "This tradition has practical roots. " +
        N(3) + "The oboe's bright, piercing tone is easy to hear across a crowded stage. " +
        N(4) + "Its pitch is also hard to change, because the instrument has no simple slide or peg to adjust. " +
        N(5) + "Strings, by contrast, can be tightened or loosened in seconds. " +
        N(6) + "So the steadiest instrument leads, and the flexible ones follow." +
        "</p>",
      claims: [
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, one reason the orchestra tunes to the oboe is that its tone —",
          choices: [
            { letter: "A", text: "is the softest on stage" },
            { letter: "B", text: "changes with the weather" },
            { letter: "C", text: "matches every string exactly" },
            { letter: "D", text: "is easy to hear clearly" }
          ],
          correct: "D"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Sentences 3 through 5 of the oboe passage are organized mainly as —",
          choices: [
            { letter: "A", text: "a story told in time order" },
            { letter: "B", text: "reasons, followed by a contrast" },
            { letter: "C", text: "a question and several opinions" },
            { letter: "D", text: "steps for playing the oboe" }
          ],
          correct: "B"
        },
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the main idea of the oboe passage?",
          choices: [
            { letter: "A", text: "Orchestras tune to the oboe for practical reasons." },
            { letter: "B", text: "The oboe is the hardest instrument to learn." },
            { letter: "C", text: "String players tune more often than anyone." },
            { letter: "D", text: "Concerts begin later than they used to." }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 3, the word piercing most nearly means —",
          choices: [
            { letter: "A", text: "painful to hear" },
            { letter: "B", text: "deep and rumbling" },
            { letter: "C", text: "sharp and clear" },
            { letter: "D", text: "soft and breathy" }
          ],
          correct: "C"
        },
        {
          id: "contrast",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author of the oboe passage includes sentence 5 mainly to —",
          choices: [
            { letter: "A", text: "explain how to tune a violin" },
            { letter: "B", text: "show why strings should follow the oboe" },
            { letter: "C", text: "argue that strings are louder than oboes" },
            { letter: "D", text: "suggest that oboes are out of date" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rl-c33-pruitt-road",
      family: "G9",
      title: "Downhill on Pruitt Road",
      kind: "Poetry · 9.RL",
      blurb: "Eight lines about learning to ride, then riding alone.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My father ran beside me once,<br>" +
        L(2) + "one hand a lifeline on the seat,<br>" +
        L(3) + "his breathing loud and close behind,<br>" +
        L(4) + "the gravel spitting at our feet.<br>" +
        L(5) + "Now I take Pruitt Road alone,<br>" +
        L(6) + "the wind a river in my ears,<br>" +
        L(7) + "and somewhere near the bottom of the hill<br>" +
        L(8) + "I feel the hand that disappeared." +
        "</p>",
      claims: [
        {
          id: "metaphor",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 6, the speaker compares the wind to a river mainly to suggest that the wind is —",
          choices: [
            { letter: "A", text: "cold and wet" },
            { letter: "B", text: "quiet and gentle" },
            { letter: "C", text: "rushing and steady" },
            { letter: "D", text: "blowing uphill" }
          ],
          correct: "C"
        },
        {
          id: "lifeline",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In line 2, calling the father's hand a lifeline mainly suggests that his hand —",
          choices: [
            { letter: "A", text: "made the young rider feel safe" },
            { letter: "B", text: "was pulling the bike too hard" },
            { letter: "C", text: "was tied to the seat with rope" },
            { letter: "D", text: "kept the speaker from going fast" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The poem about Pruitt Road is told from the point of view of —",
          choices: [
            { letter: "A", text: "a father teaching his child to ride" },
            { letter: "B", text: "a neighbor watching from a porch" },
            { letter: "C", text: "a child on the first day of riding" },
            { letter: "D", text: "an older rider recalling the past" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the Pruitt Road poem?",
          choices: [
            { letter: "A", text: "Riding alone is more fun than riding with family." },
            { letter: "B", text: "A loved one's support stays with us after they let go." },
            { letter: "C", text: "Gravel roads are too dangerous for new riders." },
            { letter: "D", text: "Parents should never let children ride downhill." }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In line 8, I feel the hand that disappeared means that the speaker —",
          choices: [
            { letter: "A", text: "still senses the father's support in memory" },
            { letter: "B", text: "has fallen and hurt one hand on the hill" },
            { letter: "C", text: "sees the father waiting at the bottom" },
            { letter: "D", text: "wishes someone would push the bike again" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rl-c33-wedding-cup",
      family: "G9",
      title: "The Wedding Cup",
      kind: "Drama · 9.RL",
      blurb: "A volunteer thinks she has broken a family treasure.",
      level: 3,
      passage:
        "<p><em>(A history museum, closing time. ELENA, a volunteer, stands frozen beside a shelf.)</em></p>" +
        "<p><strong>ELENA:</strong> <em>(hiding a teacup behind her back)</em> " + N(1) + "Everything's fine back here!</p>" +
        "<p><strong>MR. HASSAN:</strong> " + N(2) + "Good. " + N(3) + "The Nguyen wedding cup goes on display tomorrow.</p>" +
        "<p><strong>ELENA:</strong> <em>(Aside.)</em> " + N(4) + "The cup I just knocked over, with a crack down its side.</p>" +
        "<p><strong>MR. HASSAN:</strong> <em>(holding out his hand, gently)</em> " + N(5) + "That crack is ninety years old, Elena. " + N(6) + "It's in the records.</p>" +
        "<p><strong>ELENA:</strong> <em>(slowly bringing the cup forward)</em> " + N(7) + "So I didn't break it?</p>" +
        "<p><strong>MR. HASSAN:</strong> " + N(8) + "No, but next time, tell me first.</p>",
      claims: [
        {
          id: "irony",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.2",
          stem: "The aside in sentence 4 of The Wedding Cup creates dramatic irony because —",
          choices: [
            { letter: "A", text: "Mr. Hassan says the cup is already broken" },
            { letter: "B", text: "Elena speaks loudly so everyone can hear" },
            { letter: "C", text: "the audience learns what Elena is hiding" },
            { letter: "D", text: "the Nguyen family is waiting offstage" }
          ],
          correct: "C"
        },
        {
          id: "hand",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction holding out his hand, gently, mainly suggests that Mr. Hassan —",
          choices: [
            { letter: "A", text: "already suspects the truth and is not angry" },
            { letter: "B", text: "wants Elena to shake hands and go home" },
            { letter: "C", text: "is reaching for the museum records" },
            { letter: "D", text: "plans to punish Elena for the accident" }
          ],
          correct: "A"
        },
        {
          id: "cover",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.2",
          stem: "Which line best shows Elena saying something untrue to cover up what happened?",
          choices: [
            { letter: "A", text: "sentence 7" },
            { letter: "B", text: "sentence 4" },
            { letter: "C", text: "sentence 8" },
            { letter: "D", text: "sentence 1" }
          ],
          correct: "D"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the museum setting raise the stakes of Elena's problem?",
          choices: [
            { letter: "A", text: "The museum is closing for good the next day." },
            { letter: "B", text: "Its objects are family history that cannot be replaced." },
            { letter: "C", text: "Volunteers are not allowed in the building at night." },
            { letter: "D", text: "The shelf is too high for Elena to reach." }
          ],
          correct: "B"
        },
        {
          id: "lesson",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.2",
          stem: "Mr. Hassan's line in sentence 8 is meant to show Elena that —",
          choices: [
            { letter: "A", text: "she will not be allowed to volunteer again" },
            { letter: "B", text: "the cup was never meant to go on display" },
            { letter: "C", text: "he blames the Nguyen family for the crack" },
            { letter: "D", text: "honesty matters more than the accident" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rv-c33-ledger-room",
      family: "G9",
      title: "The Ledger Room",
      kind: "Vocabulary · 9.RV",
      blurb: "Why a museum treasures a store's list of nails and lamp oil.",
      level: 3,
      passage:
        "<p>" + N(1) + "The museum's oldest ledger, a general store's account book from 1871, is too <strong>brittle</strong> to open without gloves and a foam cradle. " +
        N(2) + "Its pages record <strong>mundane</strong> purchases: lamp oil, nails, two yards of calico. " +
        N(3) + "Yet historians find these lists <strong>invaluable</strong>, since they reveal what ordinary families could afford. " +
        N(4) + "A <strong>meticulous</strong> volunteer is now transcribing every entry, checking each smudged number twice. " +
        N(5) + "Her work will make the fragile book <strong>accessible</strong> to anyone with a computer, letting the store's customers speak again." +
        "</p>",
      claims: [
        {
          id: "prefix",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word invaluable in sentence 3 begins with the prefix in-, yet in this sentence it means —",
          choices: [
            { letter: "A", text: "not worth any money" },
            { letter: "B", text: "impossible to read" },
            { letter: "C", text: "easy to replace" },
            { letter: "D", text: "extremely valuable" }
          ],
          correct: "D"
        },
        {
          id: "context",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which words from sentence 4 best help the reader understand the meaning of meticulous?",
          choices: [
            { letter: "A", text: "A volunteer is now transcribing" },
            { letter: "B", text: "checking each smudged number twice" },
            { letter: "C", text: "is now transcribing every entry" },
            { letter: "D", text: "A meticulous volunteer is now" }
          ],
          correct: "B"
        },
        {
          id: "conno",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written common instead of mundane in sentence 2. Compared with common, the word mundane suggests that the purchases seem —",
          choices: [
            { letter: "A", text: "dull and unremarkable" },
            { letter: "B", text: "rare and expensive" },
            { letter: "C", text: "dangerous to handle" },
            { letter: "D", text: "popular with tourists" }
          ],
          correct: "A"
        },
        {
          id: "speak",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 5, saying the work will let the store's customers speak again means that readers will —",
          choices: [
            { letter: "A", text: "hear recordings of the customers' voices" },
            { letter: "B", text: "meet the customers' living relatives" },
            { letter: "C", text: "learn about the customers' lives from their records" },
            { letter: "D", text: "read letters the customers wrote to the store" }
          ],
          correct: "C"
        },
        {
          id: "yet",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author begins sentence 3 with the word Yet mainly to —",
          choices: [
            { letter: "A", text: "add another item to the list in sentence 2" },
            { letter: "B", text: "contrast how dull the entries seem with how useful they are" },
            { letter: "C", text: "show that the ledger is older than historians thought" },
            { letter: "D", text: "introduce the volunteer described in sentence 4" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-ri-c33-repair-night",
      family: "G9",
      title: "Free Repair Night",
      kind: "Functional text · 9.RI",
      blurb: "A flyer for a community bike workshop.",
      level: 2,
      passage:
        "<p><strong>EASTSIDE BIKE CO-OP: FREE REPAIR NIGHT</strong></p>" +
        "<p>" + N(1) + "Every Wednesday from 5 to 8 p.m., volunteer mechanics help you fix your own bike at 214 Larch Street. " +
        N(2) + "We teach; we do not repair bikes for you, so plan to get your hands greasy. " +
        N(3) + "Tools and stands are free; new parts like tubes and brake pads are sold at cost. " +
        N(4) + "Riders under 16 must bring a parent or guardian to sign a safety form. " +
        N(5) + "Arrive before 7 p.m., because we stop starting new repairs an hour before closing." +
        "</p>",
      claims: [
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the co-op flyer, why should riders arrive before 7 p.m.?",
          choices: [
            { letter: "A", text: "Parents leave at 7 p.m." },
            { letter: "B", text: "No new repairs begin after that time." },
            { letter: "C", text: "Parts are free only before 7 p.m." },
            { letter: "D", text: "The tools are put away at 7 p.m." }
          ],
          correct: "B"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the co-op flyer mainly organized?",
          choices: [
            { letter: "A", text: "as the story of one rider's repair" },
            { letter: "B", text: "as a list of bike parts and prices" },
            { letter: "C", text: "as a debate between two mechanics" },
            { letter: "D", text: "as details about when, how, and who" }
          ],
          correct: "D"
        },
        {
          id: "evid",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that riders are expected to do the work themselves?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 3" },
            { letter: "C", text: "sentence 4" },
            { letter: "D", text: "sentence 5" }
          ],
          correct: "A"
        },
        {
          id: "informal",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which phrase from the flyer is closest to a friendly comment rather than a rule or fact?",
          choices: [
            { letter: "A", text: "Every Wednesday from 5 to 8 p.m." },
            { letter: "B", text: "must bring a parent or guardian" },
            { letter: "C", text: "plan to get your hands greasy" },
            { letter: "D", text: "sold at cost" }
          ],
          correct: "C"
        },
        {
          id: "cost",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 3, parts that are sold at cost are sold —",
          choices: [
            { letter: "A", text: "for double the normal price" },
            { letter: "B", text: "for whatever the rider offers" },
            { letter: "C", text: "only to co-op members" },
            { letter: "D", text: "for what the co-op paid for them" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-rl-c33-barometer",
      family: "G9",
      title: "The Barometer",
      kind: "Literary · 9.RL",
      blurb: "Grandpa Teo trusts an old brass needle over any app.",
      level: 2,
      passage:
        "<p>" + N(1) + "Grandpa Teo trusted his brass barometer more than any phone app. " +
        N(2) + "Every morning he tapped its glass and read the needle the way other people read headlines. " +
        N(3) + "On Tuesday it dropped so fast that he called Nadia in from the yard before a single cloud appeared. " +
        N(4) + "She rolled her eyes and carried in the patio cushions anyway. " +
        N(5) + "An hour later, rain hammered the windows like a crowd demanding entry, and Grandpa simply poured two cups of tea." +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Grandpa Teo?",
          choices: [
            { letter: "A", text: "He is confident in his old, trusted methods." },
            { letter: "B", text: "He is afraid of storms and hides from them." },
            { letter: "C", text: "He is eager to learn new phone apps." },
            { letter: "D", text: "He is careless about the weather." }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 5, comparing the rain to a crowd demanding entry mainly shows that the rain was —",
          choices: [
            { letter: "A", text: "light and short" },
            { letter: "B", text: "warm and pleasant" },
            { letter: "C", text: "loud and forceful" },
            { letter: "D", text: "far away" }
          ],
          correct: "C"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the narrator shows Nadia's eye-roll but not her thoughts, the reader —",
          choices: [
            { letter: "A", text: "knows she is afraid of thunder" },
            { letter: "B", text: "learns the story from Grandpa's mind" },
            { letter: "C", text: "cannot tell whether it rained" },
            { letter: "D", text: "must infer that she doubts Grandpa" }
          ],
          correct: "D"
        },
        {
          id: "phrase",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 2, the phrase read the needle the way other people read headlines most nearly means that Grandpa —",
          choices: [
            { letter: "A", text: "never bothered to read the news" },
            { letter: "B", text: "checked it each day for news of what was coming" },
            { letter: "C", text: "could not see the needle very well" },
            { letter: "D", text: "wrote articles about the weather" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best supported by the story of the barometer?",
          choices: [
            { letter: "A", text: "Young people always know best." },
            { letter: "B", text: "Rain ruins most summer plans." },
            { letter: "C", text: "Phone apps are never accurate." },
            { letter: "D", text: "Old, trusted knowledge can still be wise." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-dsr-c33-ashby-mill",
      family: "G9",
      title: "The Ashby Mill",
      kind: "Paired texts · 9.DSR",
      blurb: "A museum plaque and a family memory describe the same textile mill.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Museum Plaque</strong></p>" +
        "<p>" + N(1) + "The Ashby Textile Mill opened in 1903 and employed nearly six hundred workers at its peak. " +
        N(2) + "Its looms produced cotton sheeting shipped up and down the East Coast. " +
        N(3) + "The mill closed in 1958 after newer factories opened farther south.</p>" +
        "<p><strong>Text 2 — From an Oral History Recording</strong></p>" +
        "<p>" + N(4) + "My mother started at the mill when she was fifteen. " +
        N(5) + "She said the looms were so loud that workers learned to read lips. " +
        N(6) + "When it closed, our whole street went quiet, and half our neighbors moved away.</p>",
      claims: [
        {
          id: "pairing",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The purpose of pairing the museum plaque with the oral history is to —",
          choices: [
            { letter: "A", text: "prove that the plaque's dates are wrong" },
            { letter: "B", text: "set official facts beside one family's experience" },
            { letter: "C", text: "explain how cotton sheeting was produced" },
            { letter: "D", text: "argue that the mill should be reopened" }
          ],
          correct: "B"
        },
        {
          id: "together",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea about the Ashby mill becomes clear only when both texts are read together?",
          choices: [
            { letter: "A", text: "The mill opened in the early 1900s." },
            { letter: "B", text: "The looms made a great deal of noise." },
            { letter: "C", text: "Newer factories were built farther south." },
            { letter: "D", text: "The 1958 closing changed a whole neighborhood." }
          ],
          correct: "D"
        },
        {
          id: "except",
          sol: "9.DSR.C",
          sub: "9.DSR.C.3",
          stem: "All of the following appear in the museum plaque EXCEPT —",
          choices: [
            { letter: "A", text: "the year the mill opened" },
            { letter: "B", text: "the number of workers at its peak" },
            { letter: "C", text: "how workers talked over the looms" },
            { letter: "D", text: "the reason the mill closed" }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which inference about the Ashby mill is best supported by both texts?",
          choices: [
            { letter: "A", text: "Many local people depended on the mill." },
            { letter: "B", text: "The mill paid higher wages than other jobs." },
            { letter: "C", text: "Most workers were older than fifteen." },
            { letter: "D", text: "The mill reopened after a few years." }
          ],
          correct: "A"
        },
        {
          id: "recall",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which statement is a personal recollection rather than a documented fact?",
          choices: [
            { letter: "A", text: "The mill employed nearly six hundred workers." },
            { letter: "B", text: "The mill closed in 1958." },
            { letter: "C", text: "The looms produced cotton sheeting." },
            { letter: "D", text: "Our whole street went quiet when it closed." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g9-ri-c33-short-labels",
      family: "G9",
      title: "Words on the Wall",
      kind: "Informational · 9.RI",
      blurb: "Why museum labels are kept so short.",
      level: 2,
      passage:
        "<p>" + N(1) + "Most museum labels hold fewer than seventy-five words, and that limit is no accident. " +
        N(2) + "Studies of visitors show that people stand before an object for only a few seconds before deciding whether to read. " +
        N(3) + "A short label invites them in; a dense paragraph sends them to the next case. " +
        N(4) + "At the Corbin County Museum, staff rewrote every label in the farming gallery last year. " +
        N(5) + "Afterward, guards noticed visitors lingering longer and reading aloud to their children." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence best expresses the central idea of the passage about museum labels?",
          choices: [
            { letter: "A", text: "Guards are the best judges of museum exhibits." },
            { letter: "B", text: "Farming galleries are the most popular rooms." },
            { letter: "C", text: "Labels are kept short because brief text keeps visitors reading." },
            { letter: "D", text: "Children should read every museum label aloud." }
          ],
          correct: "C"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "According to the passage, what happened after the Corbin County labels were rewritten?",
          choices: [
            { letter: "A", text: "Visitors stayed longer and read aloud." },
            { letter: "B", text: "The farming gallery was closed." },
            { letter: "C", text: "Labels grew to two hundred words." },
            { letter: "D", text: "Guards asked visitors to be quiet." }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The passage about museum labels is organized mainly by —",
          choices: [
            { letter: "A", text: "telling events from one guard's day" },
            { letter: "B", text: "comparing two museums' ticket prices" },
            { letter: "C", text: "listing steps for writing a label" },
            { letter: "D", text: "stating a general idea, then a local example" }
          ],
          correct: "D"
        },
        {
          id: "contrast",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author uses the contrast in sentence 3 mainly to show that —",
          choices: [
            { letter: "A", text: "visitors prefer paintings to objects" },
            { letter: "B", text: "a label's length affects what visitors do" },
            { letter: "C", text: "museum cases are placed too close together" },
            { letter: "D", text: "long labels contain more accurate facts" }
          ],
          correct: "B"
        },
        {
          id: "conno",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written staying instead of lingering in sentence 5. Compared with staying, the word lingering suggests that visitors —",
          choices: [
            { letter: "A", text: "were waiting for a tour guide" },
            { letter: "B", text: "had been told to remain in place" },
            { letter: "C", text: "were in no hurry to leave" },
            { letter: "D", text: "were lost inside the gallery" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-c33-last-chord",
      family: "G9",
      title: "The Last Chord",
      kind: "Literary · 9.RL",
      blurb: "Amara looks for her father in the fourth row.",
      level: 3,
      passage:
        "<p>" + N(1) + "The final chord hung in the auditorium like smoke that refused to clear, and Amara kept her bow on the string until the conductor's hand closed. " +
        N(2) + "Then the applause arrived all at once, a sudden rain. " +
        N(3) + "She looked for her father in the fourth row and found only an empty seat. " +
        N(4) + "Her stand partner squeezed her elbow. " +
        N(5) + "In the parking lot, her phone lit up with a blurry video a friend had filmed for him, and a message: \"Heard every note on my break at work.\"" +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which idea does the story of Amara's concert most clearly develop?",
          choices: [
            { letter: "A", text: "Concerts matter less than people think." },
            { letter: "B", text: "Friends are more reliable than family." },
            { letter: "C", text: "Hard work always earns loud applause." },
            { letter: "D", text: "Love can reach us even when people are absent." }
          ],
          correct: "D"
        },
        {
          id: "rain",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 2, describing the applause as a sudden rain suggests that it —",
          choices: [
            { letter: "A", text: "was polite and scattered" },
            { letter: "B", text: "came all at once and filled the room" },
            { letter: "C", text: "made the audience want to leave" },
            { letter: "D", text: "started before the music ended" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the ending in sentence 5 is best described as —",
          choices: [
            { letter: "A", text: "warm and reassuring" },
            { letter: "B", text: "bitter and resentful" },
            { letter: "C", text: "tense and fearful" },
            { letter: "D", text: "playful and silly" }
          ],
          correct: "A"
        },
        {
          id: "smoke",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 1, comparing the chord to smoke that refused to clear mainly shows that the sound —",
          choices: [
            { letter: "A", text: "was too quiet to hear" },
            { letter: "B", text: "made the players cough" },
            { letter: "C", text: "lingered in the air" },
            { letter: "D", text: "ended too quickly" }
          ],
          correct: "C"
        },
        {
          id: "elbow",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The detail in sentence 4 mainly emphasizes that —",
          choices: [
            { letter: "A", text: "Amara played a wrong note" },
            { letter: "B", text: "someone notices Amara's disappointment" },
            { letter: "C", text: "the concert has not yet ended" },
            { letter: "D", text: "the stand partner wants Amara's seat" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-rv-c33-repair-stand",
      family: "G9",
      title: "Lessons at the Repair Stand",
      kind: "Vocabulary · 9.RV",
      blurb: "A summer job in a tiny bike shop teaches more than brakes.",
      level: 1,
      passage:
        "<p>" + N(1) + "Mr. Ito's bike shop was <strong>cramped</strong>, with wheels hanging from the ceiling and barely room to turn around. " +
        N(2) + "On my first day, he showed me how to <strong>adjust</strong> a brake by turning a small barrel a quarter turn at a time. " +
        N(3) + "I was <strong>impatient</strong> and cranked it too far. " +
        N(4) + "He didn't scold me; he just loosened it and said, \"A bike tells you what it needs if you <strong>listen</strong>.\" " +
        N(5) + "By August, I could <strong>diagnose</strong> a squeak from across the room." +
        "</p>",
      claims: [
        {
          id: "image",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 1, the image of wheels hanging from the ceiling mainly helps show that the shop is —",
          choices: [
            { letter: "A", text: "crowded with very little space" },
            { letter: "B", text: "brand new and spotless" },
            { letter: "C", text: "closed for the summer" },
            { letter: "D", text: "too dark to work in" }
          ],
          correct: "A"
        },
        {
          id: "prefix",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "In sentence 3, the prefix im- in impatient means —",
          choices: [
            { letter: "A", text: "again" },
            { letter: "B", text: "before" },
            { letter: "C", text: "not" },
            { letter: "D", text: "very" }
          ],
          correct: "C"
        },
        {
          id: "listen",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "Mr. Ito's saying in sentence 4, A bike tells you what it needs if you listen, means that —",
          choices: [
            { letter: "A", text: "bikes should be ridden quietly" },
            { letter: "B", text: "the narrator talks too much at work" },
            { letter: "C", text: "brakes make noise when they are new" },
            { letter: "D", text: "careful attention reveals a bike's problems" }
          ],
          correct: "D"
        },
        {
          id: "conno",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.1",
          stem: "The author could have written notice instead of diagnose in sentence 5. Compared with notice, the word diagnose adds a sense of —",
          choices: [
            { letter: "A", text: "being annoyed by loud sounds" },
            { letter: "B", text: "skill in finding a problem's cause" },
            { letter: "C", text: "guessing without any training" },
            { letter: "D", text: "hearing from a long distance" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "Which statement best describes how the narrator changes over the summer?",
          choices: [
            { letter: "A", text: "from a skilled mechanic to a bored one" },
            { letter: "B", text: "from Mr. Ito's student to his boss" },
            { letter: "C", text: "from an impatient beginner to an attentive worker" },
            { letter: "D", text: "from a cyclist to someone who dislikes bikes" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
