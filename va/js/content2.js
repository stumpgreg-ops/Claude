/* SOL Labyrinth — v4 content expansion.
 * Original Grades 9–11 VA EOC Reading SOL-style packs: poetry, drama, functional
 * text, argument, vocabulary-in-context and paired texts. No VDOE / copyrighted
 * text. Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var EXTRA = [
    /* ───────────────────────── GRADE 9 ───────────────────────── */
    {
      id: "g9-rl-poem-locker",
      family: "G9",
      title: "Locker 212",
      kind: "Poetry · 9.RL",
      blurb: "A poem about the last locker at the end of the hall.",
      passage:
        "<p class=\"poem\">" +
        L(1) + "Mine is the last one, the corner nobody wants,<br>" +
        L(2) + "where the hallway gives up and turns into a wall.<br>" +
        L(3) + "The dent in the door is older than I am;<br>" +
        L(4) + "some kid before me lost a fight with it and left.<br>" +
        L(5) + "Every morning the combination is a small prayer:<br>" +
        L(6) + "left, right, left, and the door coughs open<br>" +
        L(7) + "like it is surprised to see me again.<br>" +
        L(8) + "Inside: a jacket, a bent folder, a photo taped crooked,<br>" +
        L(9) + "the whole museum of a person who is still being built.<br>" +
        L(10) + "At 2:45 the hall becomes a river and I am the rock,<br>" +
        L(11) + "shouldering my bag while the current shouts past.<br>" +
        L(12) + "Nobody chooses the corner. The corner chooses you,<br>" +
        L(13) + "and then, one slow year at a time, it becomes yours.<br>" +
        L(14) + "Left, right, left. The door coughs. I am here." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          stem: "Which statement best expresses a theme of the poem?",
          choices: [
            { letter: "A", text: "A place that starts out unwanted can become part of who you are." },
            { letter: "B", text: "Old lockers should be replaced before they injure a student." },
            { letter: "C", text: "The best lockers are always found closest to the front doors." },
            { letter: "D", text: "Students who fight with their lockers usually lose the fight." }
          ],
          correct: "A"
        },
        {
          id: "fig",
          sol: "9.RL.2.B",
          stem: "In line 10, the speaker compares the hallway to a river mainly to show that —",
          choices: [
            { letter: "A", text: "the school floods every afternoon when it rains" },
            { letter: "B", text: "the crowd moves as one loud, unstoppable force around the speaker" },
            { letter: "C", text: "the speaker enjoys swimming more than walking to the bus" },
            { letter: "D", text: "the locker is located next to the water fountain by the exit" }
          ],
          correct: "B"
        },
        {
          id: "personify",
          sol: "9.RL.2.A",
          stem: "The phrase the door coughs open (line 6) is an example of —",
          choices: [
            { letter: "A", text: "hyperbole, because the door is described as impossibly loud" },
            { letter: "B", text: "a simile, because it compares the door to a sick person using like" },
            { letter: "C", text: "personification, because the door is given a human action" },
            { letter: "D", text: "onomatopoeia, because the word coughs imitates a locker's bell" }
          ],
          correct: "C"
        },
        {
          id: "shift",
          sol: "9.RL.3.A",
          stem: "How does the poem's ending (lines 12–14) differ from its beginning (lines 1–4)?",
          choices: [
            { letter: "A", text: "It shifts from the speaker's own locker to a description of the whole school." },
            { letter: "B", text: "It repeats the opening images to show that nothing about the locker has changed." },
            { letter: "C", text: "It moves from resentment of the corner to quiet ownership of it." },
            { letter: "D", text: "It reveals that the speaker has finally been moved to a better locker." }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.1.B",
          stem: "Line 9, the whole museum of a person who is still being built, suggests that the speaker —",
          choices: [
            { letter: "A", text: "plans to donate the locker's contents to the school museum" },
            { letter: "B", text: "sees the objects as a record of an identity that is not finished yet" },
            { letter: "C", text: "is embarrassed that the locker is messier than everyone else's" },
            { letter: "D", text: "has kept the same items since the first day of kindergarten" }
          ],
          correct: "B"
        },
        {
          id: "repeat",
          sol: "9.RL.2.C",
          stem: "The poet repeats left, right, left in lines 6 and 14 most likely to —",
          choices: [
            { letter: "A", text: "show that the speaker keeps forgetting the combination" },
            { letter: "B", text: "give directions to the reader for finding the locker" },
            { letter: "C", text: "suggest that the daily routine has become a steadying ritual" },
            { letter: "D", text: "prove that the lock is broken and needs to be reset" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g9-rl-drama-busstop",
      family: "G9",
      title: "Bus Stop, 6:52",
      kind: "Drama · 9.RL",
      blurb: "Two friends, one bench, and a scholarship form due today.",
      passage:
        "<p><em>Setting: a bus shelter before sunrise. A bench, a flickering light. NIA sits with a folder on her lap. MARCUS enters at a jog, backpack half-zipped.</em></p>" +
        "<p>" + N(1) + "<strong>MARCUS</strong> <em>(out of breath)</em>: Tell me it hasn't come. " +
        N(2) + "<strong>NIA</strong>: It hasn't come. You can stop running. " +
        N(3) + "<strong>MARCUS</strong> <em>(sitting, then standing again)</em>: Did you sign it? " +
        N(4) + "<strong>NIA</strong> <em>(not looking up)</em>: I signed my name. I haven't signed the part where I say what I want to do with my life. " +
        N(5) + "<strong>MARCUS</strong>: It's a paragraph, Nia. You write paragraphs in your sleep. " +
        N(6) + "<strong>NIA</strong>: A paragraph is easy when it's about somebody else. " +
        N(7) + "<em>(A long pause. The light buzzes.)</em> " +
        N(8) + "<strong>MARCUS</strong> <em>(gently)</em>: Write the thing you told me on the roof last summer. The clinic. The thing about your grandmother's hands. " +
        N(9) + "<strong>NIA</strong>: That was a story, not a plan. " +
        N(10) + "<strong>MARCUS</strong>: Every plan is a story somebody was brave enough to write down. " +
        N(11) + "<em>(NIA finally looks at him. She uncaps her pen. Headlights sweep across the shelter.)</em> " +
        N(12) + "<strong>NIA</strong>: If this bus is early, I will never forgive it." +
        "</p>",
      claims: [
        {
          id: "stagedir",
          sol: "9.RL.3.B",
          stem: "The stage direction sitting, then standing again in sentence 3 mainly reveals that Marcus is —",
          choices: [
            { letter: "A", text: "too tired from running to stay in one position" },
            { letter: "B", text: "anxious and unable to settle until he knows the form is done" },
            { letter: "C", text: "annoyed that Nia has taken the only seat on the bench" },
            { letter: "D", text: "watching for the bus so that he can board first" }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.1.C",
          stem: "Which sentence best shows that Nia's struggle is about confidence rather than skill?",
          choices: [
            { letter: "A", text: "Sentence 2: It hasn't come. You can stop running." },
            { letter: "B", text: "Sentence 6: A paragraph is easy when it's about somebody else." },
            { letter: "C", text: "Sentence 9: That was a story, not a plan." },
            { letter: "D", text: "Sentence 12: If this bus is early, I will never forgive it." }
          ],
          correct: "B"
        },
        {
          id: "line10",
          sol: "9.RL.1.B",
          stem: "Marcus's line in sentence 10 is meant to convince Nia that —",
          choices: [
            { letter: "A", text: "she should write fiction instead of a scholarship essay" },
            { letter: "B", text: "her memory of last summer is not accurate enough to use" },
            { letter: "C", text: "the difference between a dream and a plan is the courage to commit to it" },
            { letter: "D", text: "the scholarship committee prefers stories about grandparents" }
          ],
          correct: "C"
        },
        {
          id: "resolve",
          sol: "9.RL.3.A",
          stem: "What does the stage direction in sentence 11 signal about the scene's conflict?",
          choices: [
            { letter: "A", text: "The bus has arrived before Nia could finish, so the conflict is lost." },
            { letter: "B", text: "Nia has decided to act, and the approaching bus raises the pressure to finish." },
            { letter: "C", text: "Marcus has given up and is walking away toward the headlights." },
            { letter: "D", text: "The flickering light has finally gone out, ending the conversation." }
          ],
          correct: "B"
        },
        {
          id: "humor",
          sol: "9.RL.2.C",
          stem: "The playwright ends with sentence 12 most likely to —",
          choices: [
            { letter: "A", text: "release tension with humor while showing Nia now wants the time to write" },
            { letter: "B", text: "reveal that Nia is angry at Marcus for pressuring her" },
            { letter: "C", text: "explain why the bus schedule at this stop is unreliable" },
            { letter: "D", text: "suggest that Nia has decided to skip school and stay on the bench" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-ri-lab-safety",
      family: "G9",
      title: "Chem Lab Safety Card",
      kind: "Functional text · 9.RI",
      blurb: "A one-page safety card taped beside the lab door.",
      passage:
        "<p><strong>ROOM 118 — LAB SAFETY CARD (Read before every lab)</strong></p>" +
        "<p>" + N(1) + "<strong>Before you begin.</strong> Goggles are worn from the moment the teacher says \"stations\" until the final rinse, not just while pouring. " +
        N(2) + "Long hair is tied back; sleeves are pushed above the wrist; open shoes are traded for the loaner sneakers on the shelf. " +
        N(3) + "<strong>During the lab.</strong> Read the full procedure before touching any bottle, because several steps in this unit must happen in a strict order. " +
        N(4) + "Waft, never sniff: fan vapors toward your nose with one hand rather than putting your face over the container. " +
        N(5) + "If a substance touches skin, use the sink for fifteen minutes by the clock, and tell the teacher while you rinse, not after. " +
        N(6) + "<strong>After the lab.</strong> Nothing is poured down the drain unless the label on the waste jug says the same thing as the label on your beaker. " +
        N(7) + "Wipe the station, then wash your hands even if you wore gloves, because gloves protect your hands, not the doorknob you touch next. " +
        N(8) + "<strong>Why so strict?</strong> Last year's only lab injury happened in the final two minutes, when a student removed goggles early to pack up faster. " +
        N(9) + "Rules that feel like extra work are usually written after someone learned the hard way." +
        "</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.C",
          stem: "The main purpose of this text is to —",
          choices: [
            { letter: "A", text: "persuade students to sign up for chemistry next year" },
            { letter: "B", text: "explain the steps students must follow to stay safe in the lab" },
            { letter: "C", text: "describe the injury that occurred during last year's lab" },
            { letter: "D", text: "compare the safety rules of Room 118 with those of other rooms" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "9.RI.2.B",
          stem: "The author organizes sentences 1–7 mainly by —",
          choices: [
            { letter: "A", text: "listing problems and then offering a solution for each one" },
            { letter: "B", text: "comparing safe lab behavior to unsafe lab behavior" },
            { letter: "C", text: "presenting rules in the order of a lab session: before, during, after" },
            { letter: "D", text: "ranking the rules from least important to most important" }
          ],
          correct: "C"
        },
        {
          id: "detail",
          sol: "9.RI.1.B",
          stem: "According to the card, why must students wash their hands even after wearing gloves?",
          choices: [
            { letter: "A", text: "Gloves are reused by the next class and must be kept clean." },
            { letter: "B", text: "Gloves protect the hands but not the surfaces touched afterward." },
            { letter: "C", text: "The sink is the only way to remove the goggle marks from skin." },
            { letter: "D", text: "The teacher cannot check gloves for holes during the lab." }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "9.RI.1.A",
          stem: "Sentence 9 is included mainly to —",
          choices: [
            { letter: "A", text: "warn that students who break the rules will be removed from the lab" },
            { letter: "B", text: "explain that strict-seeming rules usually come from real past accidents" },
            { letter: "C", text: "suggest that the rules will be rewritten to be shorter next year" },
            { letter: "D", text: "argue that the safety card is too long for students to read" }
          ],
          correct: "B"
        },
        {
          id: "wordmean",
          sol: "9.RV.1.C",
          stem: "In sentence 4, the word waft most nearly means to —",
          choices: [
            { letter: "A", text: "fan gently through the air" },
            { letter: "B", text: "pour slowly into a beaker" },
            { letter: "C", text: "cover tightly with a lid" },
            { letter: "D", text: "measure carefully by the clock" }
          ],
          correct: "A"
        },
        {
          id: "example",
          sol: "9.RI.2.A",
          stem: "The author includes the story in sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "support the rule in sentence 1 with a specific real example" },
            { letter: "B", text: "show that the loaner sneakers in sentence 2 are uncomfortable" },
            { letter: "C", text: "prove that wafting in sentence 4 does not always work" },
            { letter: "D", text: "explain why the waste jug in sentence 6 must be labeled" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g9-rv-wordwall",
      family: "G9",
      title: "The Volunteer Shift",
      kind: "Vocabulary · 9.RV",
      blurb: "A Saturday at the food pantry, with five words to work out from context.",
      passage:
        "<p>" + N(1) + "By nine the pantry line stretched past the barber shop, and Devin, who had been <strong>reluctant</strong> to give up a Saturday, found he no longer wanted to be anywhere else. " +
        N(2) + "Ms. Ortiz ran the intake table with <strong>meticulous</strong> care, checking each family's card twice and writing every number in the same neat blue ink. " +
        N(3) + "\"Speed is nice,\" she told him, \"but a mistake here means a family goes home with half of what they need.\" " +
        N(4) + "The freezer in the back had been <strong>dormant</strong> since spring, unplugged and taped shut, until a donated shipment of chicken forced them to wake it up. " +
        N(5) + "Devin worried that one bad afternoon would <strong>undermine</strong> the trust Ms. Ortiz had built with the neighborhood over ten years. " +
        N(6) + "\"That's not how trust works,\" she said. \"One rough day doesn't dig the foundation out. Ten rough days might.\" " +
        N(7) + "When a delivery truck arrived two hours late, the driver's excuse — a flat tire on the bridge — seemed <strong>plausible</strong>, so nobody argued; they just formed a chain and passed boxes hand to hand. " +
        N(8) + "By noon Devin's arms ached, and the word Saturday had quietly changed its meaning." +
        "</p>",
      claims: [
        {
          id: "reluctant",
          sol: "9.RV.1.B",
          stem: "In sentence 1, the word reluctant most nearly means —",
          choices: [
            { letter: "A", text: "eager" },
            { letter: "B", text: "unwilling" },
            { letter: "C", text: "unable" },
            { letter: "D", text: "forgetful" }
          ],
          correct: "B"
        },
        {
          id: "meticulous",
          sol: "9.RV.1.C",
          stem: "Which words from sentence 2 best help the reader understand the meaning of meticulous?",
          choices: [
            { letter: "A", text: "ran the intake table" },
            { letter: "B", text: "checking each family's card twice" },
            { letter: "C", text: "the same neat blue ink" },
            { letter: "D", text: "with meticulous care" }
          ],
          correct: "B"
        },
        {
          id: "dormant",
          sol: "9.RV.1.C",
          stem: "In sentence 4, dormant most nearly means —",
          choices: [
            { letter: "A", text: "broken beyond repair" },
            { letter: "B", text: "recently installed" },
            { letter: "C", text: "inactive for a period of time" },
            { letter: "D", text: "too small to hold the shipment" }
          ],
          correct: "C"
        },
        {
          id: "undermine",
          sol: "9.RV.1.E",
          stem: "Ms. Ortiz's reply in sentence 6 uses the image of a foundation to clarify that undermine means to —",
          choices: [
            { letter: "A", text: "weaken something gradually from below" },
            { letter: "B", text: "rebuild something after it collapses" },
            { letter: "C", text: "measure how deep something goes" },
            { letter: "D", text: "protect something from bad weather" }
          ],
          correct: "A"
        },
        {
          id: "plausible",
          sol: "9.RV.1.B",
          stem: "In sentence 7, an excuse that is plausible is one that —",
          choices: [
            { letter: "A", text: "has been proven true by a witness" },
            { letter: "B", text: "sounds reasonable enough to believe" },
            { letter: "C", text: "is obviously invented on the spot" },
            { letter: "D", text: "is repeated by every delivery driver" }
          ],
          correct: "B"
        },
        {
          id: "shiftmeaning",
          sol: "9.RV.1.F",
          stem: "Sentence 8 says the word Saturday had quietly changed its meaning. The author uses this figurative statement to show that Devin —",
          choices: [
            { letter: "A", text: "has forgotten which day of the week it is" },
            { letter: "B", text: "now connects the day with purpose instead of free time" },
            { letter: "C", text: "plans to look the word up in a dictionary" },
            { letter: "D", text: "is too tired to remember the meaning of common words" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g9-dsr-compost",
      family: "G9",
      title: "Compost Pilot: Memo + Student Letter",
      kind: "Paired texts · 9.DSR",
      blurb: "A cafeteria memo and a student's letter disagree about the same three bins.",
      passage:
        "<p><strong>Text 1 — Cafeteria Memo (from Facilities)</strong></p>" +
        "<p>" + N(1) + "Beginning Monday, three green compost bins will replace one of the two trash cans at each lunch line exit. " +
        N(2) + "Only food scraps and paper napkins belong in green; plastic forks, milk cartons and foil go in gray. " +
        N(3) + "A student monitor will stand at each station for the first two weeks to answer questions and redirect mistakes. " +
        N(4) + "During last spring's trial, contamination (wrong items in the green bin) fell from 40 percent in week one to 9 percent by week three, which is the level our hauler requires. " +
        N(5) + "We expect to divert roughly 300 pounds of waste per week from the landfill.</p>" +
        "<p><strong>Text 2 — Letter to the Editor, <em>The Falcon Feed</em></strong></p>" +
        "<p>" + N(6) + "I support composting, but I am worried about the plan, not the idea. " +
        N(7) + "Lunch is 24 minutes long, and last spring the line at the bins stretched to the door while monitors sorted people's trays. " +
        N(8) + "Some students simply threw everything in the gray can to make it to class on time. " +
        N(9) + "If the school wants 9 percent contamination to last after the monitors leave, it needs pictures on the bins, not people in front of them. " +
        N(10) + "Signs are cheaper than volunteers and never go back to class." +
        "</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          stem: "Which idea do both texts support?",
          choices: [
            { letter: "A", text: "Composting in the cafeteria is worth doing." },
            { letter: "B", text: "Student monitors should stay for the whole year." },
            { letter: "C", text: "Lunch should be extended to thirty minutes." },
            { letter: "D", text: "The gray cans should be removed entirely." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          stem: "The two texts differ mainly in how they view —",
          choices: [
            { letter: "A", text: "whether food scraps belong in the green bin" },
            { letter: "B", text: "whether monitors are the best way to keep contamination low" },
            { letter: "C", text: "how many pounds of waste the school produces each week" },
            { letter: "D", text: "whether the hauler's 9 percent requirement is fair" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.DSR.E",
          stem: "Which sentence from Text 1 does the writer of Text 2 most directly challenge?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 3" },
            { letter: "D", text: "Sentence 5" }
          ],
          correct: "C"
        },
        {
          id: "purpose2",
          sol: "9.RI.1.C",
          stem: "The writer of Text 2 includes sentence 8 mainly to —",
          choices: [
            { letter: "A", text: "prove that students do not care about the environment" },
            { letter: "B", text: "show a real consequence of the long line described in sentence 7" },
            { letter: "C", text: "explain why the gray cans are larger than the green bins" },
            { letter: "D", text: "praise the monitors for sorting trays quickly" }
          ],
          correct: "B"
        },
        {
          id: "synth",
          sol: "9.DSR.E",
          stem: "A reader combining both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the spring trial failed and should not be repeated" },
            { letter: "B", text: "the plan may work at first but needs a strategy for after the monitors leave" },
            { letter: "C", text: "the school will save money by ending the composting program" },
            { letter: "D", text: "students refuse to follow any rule about where trash goes" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────────────────── GRADE 10 ───────────────────────── */
    {
      id: "g10-rl-maproom",
      family: "G10",
      title: "The Map Room",
      kind: "Literary · 9–10.RL",
      blurb: "Detention in the old map room turns into something else.",
      passage:
        "<p>" + N(1) + "The map room had not been a real classroom since before the renovation, which is why Mr. Bell used it for detention: nobody could find you there, including, most days, Mr. Bell. " +
        N(2) + "Priya sat under a pull-down map of a Europe that no longer existed, its countries the wrong colors and, in two places, the wrong names. " +
        N(3) + "She was there for the same reason as always: mouth first, thinking second. " +
        N(4) + "Across the room, a freshman she didn't know was tracing a river with his finger and whispering the towns along it like a song. " +
        N(5) + "\"That river's called something else now,\" Priya said, because silence made her itch. " +
        N(6) + "\"I know,\" he said. \"My grandmother lived on it. She still uses the old name. She says a map is just the last person who got to decide.\" " +
        N(7) + "Priya looked at the map again — at the borders drawn by people who had never stood on them — and, for once, said nothing. " +
        N(8) + "When Mr. Bell finally remembered them, he found two students arguing quietly over a country that had changed its name three times, and he decided, against all policy, to leave the door open and come back later." +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "10.RL.1.C",
          stem: "Sentence 3 characterizes Priya as someone who —",
          choices: [
            { letter: "A", text: "enjoys detention because the map room is quiet" },
            { letter: "B", text: "speaks before she considers the consequences" },
            { letter: "C", text: "has never been in trouble before this day" },
            { letter: "D", text: "prefers geography to every other subject" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the story?",
          choices: [
            { letter: "A", text: "Old maps are more accurate than new ones." },
            { letter: "B", text: "Listening can reveal that the labels we accept were chosen by someone." },
            { letter: "C", text: "Teachers should never leave students unsupervised." },
            { letter: "D", text: "Freshmen know more about geography than older students." }
          ],
          correct: "B"
        },
        {
          id: "quote",
          sol: "10.RL.2.B",
          stem: "The grandmother's saying in sentence 6, a map is just the last person who got to decide, suggests that —",
          choices: [
            { letter: "A", text: "maps are drawn by whoever holds power at the time" },
            { letter: "B", text: "the grandmother once worked as a mapmaker" },
            { letter: "C", text: "old maps should be thrown away when borders change" },
            { letter: "D", text: "the freshman is planning to redraw the map himself" }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "10.RL.1.B",
          stem: "Which sentence best shows a change in Priya?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: "D"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in the story is most ironic?",
          choices: [
            { letter: "A", text: "A room meant as punishment becomes the place where real learning happens." },
            { letter: "B", text: "The map of Europe is hanging in a school in the United States." },
            { letter: "C", text: "The freshman knows the towns along the river by heart." },
            { letter: "D", text: "Priya sits under the map instead of standing beside it." }
          ],
          correct: "A"
        },
        {
          id: "ending",
          sol: "10.RL.3.A",
          stem: "Mr. Bell's decision in sentence 8 mainly serves to —",
          choices: [
            { letter: "A", text: "show that he has forgotten the school's detention policy" },
            { letter: "B", text: "confirm that the students will be punished more severely later" },
            { letter: "C", text: "reinforce the story's idea that curiosity deserves room to continue" },
            { letter: "D", text: "explain why the map room will be renovated next year" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rl-poem-laundromat",
      family: "G10",
      title: "Midnight Laundromat",
      kind: "Poetry · 9–10.RL",
      blurb: "A poem about the night shift of ordinary life.",
      passage:
        "<p class=\"poem\">" +
        L(1) + "Everyone here is waiting for something to finish.<br>" +
        L(2) + "The dryers turn like slow planets, each with its own weather,<br>" +
        L(3) + "and the man by the window reads the same page twice<br>" +
        L(4) + "because the words keep sliding off, tired as socks.<br>" +
        L(5) + "My mother folds with her eyes closed. She could do this<br>" +
        L(6) + "in a burning building; she has done it in worse.<br>" +
        L(7) + "The fluorescent light hums a note nobody chose,<br>" +
        L(8) + "and we all sing along without opening our mouths.<br>" +
        L(9) + "At 12:40 a girl my age comes in with a hamper and a textbook,<br>" +
        L(10) + "and we nod the way soldiers nod in old movies —<br>" +
        L(11) + "same war, different trench.<br>" +
        L(12) + "When the last machine sighs and stops,<br>" +
        L(13) + "my mother hands me a stack still warm as bread<br>" +
        L(14) + "and we carry the week home in our arms." +
        "</p>",
      claims: [
        {
          id: "tone",
          sol: "10.RL.2.B",
          stem: "The overall tone of the poem is best described as —",
          choices: [
            { letter: "A", text: "bitter and resentful" },
            { letter: "B", text: "weary but tender" },
            { letter: "C", text: "playful and carefree" },
            { letter: "D", text: "fearful and tense" }
          ],
          correct: "B"
        },
        {
          id: "simile",
          sol: "10.RL.2.B",
          stem: "In line 4, comparing the words to socks that are tired mainly emphasizes —",
          choices: [
            { letter: "A", text: "how boring the man finds his book" },
            { letter: "B", text: "how exhaustion makes even simple tasks slip away" },
            { letter: "C", text: "how the laundromat sells socks near the window" },
            { letter: "D", text: "how the man has lost one of his socks in a dryer" }
          ],
          correct: "B"
        },
        {
          id: "lines10",
          sol: "10.RL.2.C",
          stem: "Lines 10–11 suggest that the speaker and the girl —",
          choices: [
            { letter: "A", text: "have known each other since elementary school" },
            { letter: "B", text: "are competing for the last working dryer" },
            { letter: "C", text: "recognize that they share the same kind of hard life without speaking" },
            { letter: "D", text: "both plan to join the military after graduation" }
          ],
          correct: "C"
        },
        {
          id: "mother",
          sol: "10.RL.1.C",
          stem: "Lines 5–6 characterize the mother as —",
          choices: [
            { letter: "A", text: "careless because she folds without looking" },
            { letter: "B", text: "someone whose competence has been shaped by hardship" },
            { letter: "C", text: "afraid of the building catching fire" },
            { letter: "D", text: "too tired to notice that the speaker is present" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "10.RL.1.A",
          stem: "The final image, we carry the week home in our arms (line 14), best supports the idea that —",
          choices: [
            { letter: "A", text: "the laundry is heavier than the speaker expected" },
            { letter: "B", text: "ordinary chores hold the weight and warmth of a family's shared life" },
            { letter: "C", text: "the family will need to return to the laundromat tomorrow" },
            { letter: "D", text: "the speaker resents having to help with the laundry" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "10.RL.3.A",
          stem: "How does line 1 function in the poem?",
          choices: [
            { letter: "A", text: "It states a claim that the rest of the poem argues against." },
            { letter: "B", text: "It introduces an idea of waiting that the following images develop." },
            { letter: "C", text: "It describes the speaker's mother before she is named." },
            { letter: "D", text: "It sets the poem in the morning, before the machines start." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-ri-latestart",
      family: "G10",
      title: "The Case for 8:30",
      kind: "Argument · 9–10.RI",
      blurb: "An editorial arguing for a later first bell.",
      passage:
        "<p>" + N(1) + "Our first bell rings at 7:20, which means the average student on the east side of the county is at a bus stop in the dark at 6:25. " +
        N(2) + "Pediatric sleep researchers have been consistent for a decade: teenage bodies release melatonin later at night than adult bodies do, so a teenager who is in bed by ten is often not able to fall asleep until close to midnight. " +
        N(3) + "The math is simple and unforgiving. " +
        N(4) + "Critics argue that a later start pushes practices and part-time jobs into the evening, and they are right that the day cannot stretch forever. " +
        N(5) + "But the two districts nearest ours that moved their bell to 8:30 reported fewer first-period absences, a drop in tardies, and, in one case, a measurable decline in fender-benders in the student lot. " +
        N(6) + "Nobody claims a later bell will turn every C into an A. " +
        N(7) + "The claim is narrower and harder to dismiss: students who are awake learn more than students who are present. " +
        N(8) + "We ask the board to pilot an 8:30 start at one high school for a single year and to publish the attendance data, good or bad. " +
        N(9) + "If the numbers do not move, we will be the first to say so." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the author's central claim?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 7" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "counter",
          sol: "10.RI.2.C",
          stem: "In sentence 4, the author addresses the opposing view mainly to —",
          choices: [
            { letter: "A", text: "prove that critics do not understand sleep research" },
            { letter: "B", text: "show fairness by admitting a real cost before answering it" },
            { letter: "C", text: "argue that practices and jobs should be eliminated" },
            { letter: "D", text: "suggest that the school day should be shortened instead" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which sentence provides evidence from outside the author's own district?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 5" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "C"
        },
        {
          id: "wordchoice",
          sol: "10.RI.2.B",
          stem: "The author describes the math as unforgiving in sentence 3 to emphasize that —",
          choices: [
            { letter: "A", text: "students struggle with math homework late at night" },
            { letter: "B", text: "the sleep deficit follows directly from the schedule and cannot be wished away" },
            { letter: "C", text: "the researchers made calculation errors in their study" },
            { letter: "D", text: "the bus routes on the east side are too long to fix" }
          ],
          correct: "B"
        },
        {
          id: "proposal",
          sol: "10.RI.1.C",
          stem: "Sentences 8 and 9 strengthen the argument by —",
          choices: [
            { letter: "A", text: "demanding an immediate change at every school in the county" },
            { letter: "B", text: "proposing a limited test and promising to accept the results" },
            { letter: "C", text: "listing the names of the researchers cited in sentence 2" },
            { letter: "D", text: "describing what a typical morning looks like for a student" }
          ],
          correct: "B"
        },
        {
          id: "narrow",
          sol: "10.RI.2.A",
          stem: "The author includes sentence 6 mainly to —",
          choices: [
            { letter: "A", text: "avoid overstating the benefits so the real claim seems more credible" },
            { letter: "B", text: "admit that a later start will lower most students' grades" },
            { letter: "C", text: "explain how grades are calculated in first period" },
            { letter: "D", text: "argue that grades matter less than attendance" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rv-debate",
      family: "G10",
      title: "The Debate Notebook",
      kind: "Vocabulary · 9–10.RV",
      blurb: "A debate team captain's notes, with five words in context.",
      passage:
        "<p>" + N(1) + "Coach told us to be <strong>candid</strong> in our self-reviews, so I will start with the truth: my second rebuttal fell apart. " +
        N(2) + "The link between my evidence and my claim was <strong>tenuous</strong> — a thread, not a rope — and the other team pulled on it until it snapped. " +
        N(3) + "Jamal tried to <strong>corroborate</strong> my numbers with a second source, but the two studies measured different years, so the judges were not convinced. " +
        N(4) + "I am <strong>ambivalent</strong> about switching to the affirmative side next tournament: it fits my speaking style better, yet I have spent all season building negative cases. " +
        N(5) + "Priya remains the most <strong>prolific</strong> writer on the team; she drafted six new cases over winter break while the rest of us finished one. " +
        N(6) + "Next practice: fewer sources, stronger links, and a rebuttal that could survive somebody tugging on it." +
        "</p>",
      claims: [
        {
          id: "candid",
          sol: "10.RV.1.B",
          stem: "In sentence 1, candid most nearly means —",
          choices: [
            { letter: "A", text: "brief" },
            { letter: "B", text: "honest" },
            { letter: "C", text: "polite" },
            { letter: "D", text: "confident" }
          ],
          correct: "B"
        },
        {
          id: "tenuous",
          sol: "10.RV.1.C",
          stem: "The phrase a thread, not a rope in sentence 2 helps the reader understand that tenuous means —",
          choices: [
            { letter: "A", text: "tightly woven" },
            { letter: "B", text: "weak and easily broken" },
            { letter: "C", text: "hidden from view" },
            { letter: "D", text: "long and complicated" }
          ],
          correct: "B"
        },
        {
          id: "corroborate",
          sol: "10.RV.1.B",
          stem: "In sentence 3, to corroborate evidence is to —",
          choices: [
            { letter: "A", text: "confirm it with additional support" },
            { letter: "B", text: "replace it with a newer study" },
            { letter: "C", text: "read it aloud to the judges" },
            { letter: "D", text: "question whether it is accurate" }
          ],
          correct: "A"
        },
        {
          id: "ambivalent",
          sol: "10.RV.1.C",
          stem: "Which part of sentence 4 best shows the meaning of ambivalent?",
          choices: [
            { letter: "A", text: "switching to the affirmative side" },
            { letter: "B", text: "next tournament" },
            { letter: "C", text: "it fits my speaking style better, yet I have spent all season" },
            { letter: "D", text: "building negative cases" }
          ],
          correct: "C"
        },
        {
          id: "prolific",
          sol: "10.RV.1.A",
          stem: "The word prolific in sentence 5 is related to the word proliferate. Both words share a root that carries the idea of —",
          choices: [
            { letter: "A", text: "producing in large quantities" },
            { letter: "B", text: "speaking in front of a crowd" },
            { letter: "C", text: "winning against an opponent" },
            { letter: "D", text: "resting during a break" }
          ],
          correct: "A"
        },
        {
          id: "extended",
          sol: "9.RV.1.F",
          stem: "Sentence 6 returns to the image of tugging on a rebuttal. This repeated figure of speech mainly —",
          choices: [
            { letter: "A", text: "shows that the writer has learned to build stronger, more connected arguments" },
            { letter: "B", text: "suggests the team will practice with real ropes next week" },
            { letter: "C", text: "proves that the judges were unfair in their scoring" },
            { letter: "D", text: "reveals that the writer plans to quit the debate team" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-dsr-robotics",
      family: "G10",
      title: "Robotics Budget: Summary + Advisor Email",
      kind: "Paired texts · 9–10.DSR",
      blurb: "A club treasurer's summary and the advisor's reply do not quite agree.",
      passage:
        "<p><strong>Text 1 — Treasurer's Budget Summary (posted to the club board)</strong></p>" +
        "<p>" + N(1) + "Balance after fall fundraiser: $1,840. " +
        N(2) + "Regional registration ($600) is due November 1; hotel for two nights ($900) is due December 15. " +
        N(3) + "That leaves $340 for parts, and our drive train alone needs a $410 motor set. " +
        N(4) + "Proposal: skip the hotel, drive both days (2 hours each way), and put the $900 toward parts and a spare battery. " +
        N(5) + "Sleeping at home costs nothing and keeps us fully funded through spring.</p>" +
        "<p><strong>Text 2 — Email from Ms. Duarte, Club Advisor</strong></p>" +
        "<p>" + N(6) + "Thank you for the clear numbers, Theo — they match my ledger exactly. " +
        N(7) + "I cannot approve the drive-both-days plan, and I want to explain rather than just say no. " +
        N(8) + "Day one ends at 9 p.m.; with the drive, students would be home after 11 and back on the road at 5 a.m., and the district does not allow overnight-length travel days for student drivers. " +
        N(9) + "What I can do: request the parts grant the district offers to first-time regional teams, which covers up to $500 and takes about three weeks. " +
        N(10) + "If we apply Monday, the motor set is covered before the hotel bill comes due." +
        "</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do the two texts agree?",
          choices: [
            { letter: "A", text: "The team should skip the hotel to save money." },
            { letter: "B", text: "The club's current numbers are accurate." },
            { letter: "C", text: "The motor set is not necessary this year." },
            { letter: "D", text: "The regional should be moved to the spring." }
          ],
          correct: "B"
        },
        {
          id: "reason",
          sol: "9.DSR.D",
          stem: "Ms. Duarte rejects Theo's proposal mainly because of —",
          choices: [
            { letter: "A", text: "the cost of gas for two round trips" },
            { letter: "B", text: "a district rule about travel and safety" },
            { letter: "C", text: "her belief that the hotel is already paid for" },
            { letter: "D", text: "her doubt that the numbers are correct" }
          ],
          correct: "B"
        },
        {
          id: "solves",
          sol: "10.DSR.E",
          stem: "How does Text 2 address the problem raised in sentence 3 of Text 1?",
          choices: [
            { letter: "A", text: "By suggesting the team buy a cheaper motor set" },
            { letter: "B", text: "By offering a grant that could cover the parts shortfall" },
            { letter: "C", text: "By canceling the hotel reservation" },
            { letter: "D", text: "By moving the registration deadline to December" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "10.RI.2.B",
          stem: "Sentence 7 reveals that Ms. Duarte's purpose is to —",
          choices: [
            { letter: "A", text: "scold Theo for posting the summary publicly" },
            { letter: "B", text: "refuse the plan while keeping the relationship respectful" },
            { letter: "C", text: "hand the decision back to the club members" },
            { letter: "D", text: "avoid giving any reason for her decision" }
          ],
          correct: "B"
        },
        {
          id: "synth",
          sol: "10.DSR.E",
          stem: "Using both texts, what is the most likely next step for the club?",
          choices: [
            { letter: "A", text: "Apply for the district parts grant right away" },
            { letter: "B", text: "Cancel the regional competition" },
            { letter: "C", text: "Hold a second fall fundraiser for $900" },
            { letter: "D", text: "Ask parents to drive students home at 11 p.m." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────────────────── GRADE 11 ───────────────────────── */
    {
      id: "g11-rl-ninetynine",
      family: "G11",
      title: "Ninety-Nine Cents",
      kind: "Literary · 9–11.RL",
      blurb: "A cashier, a jar of pennies, and the last customer of the night.",
      passage:
        "<p>" + N(1) + "The register at the Corner Mart kept a jar of pennies beside it, a small brass-colored charity that Lena's manager called \"the give-a-take\" and that Lena privately called the debt. " +
        N(2) + "Every shift she watched the jar rise and fall like a tide that never quite reached the same mark twice. " +
        N(3) + "At 10:52 a boy came in for a carton of milk, counted out coins with the concentration of a surgeon, and came up one penny short. " +
        N(4) + "Lena had been trained to point at the jar; instead she found herself looking at the boy's shoes, which had been somebody else's shoes first. " +
        N(5) + "\"Take one,\" she said, and then, because the jar was empty, \"Take mine,\" and slid a penny from her own tip cup across the counter as if it weighed something. " +
        N(6) + "The boy did not thank her; he simply nodded, the way you nod at a thing that is correct. " +
        N(7) + "After he left, Lena stood in the buzzing light and thought about all the people who had filled the jar without ever knowing whose milk they were buying. " +
        N(8) + "She dropped a dime into the empty jar, then a quarter, then, feeling foolish and not stopping, the rest of the cup." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses a theme of the passage?",
          choices: [
            { letter: "A", text: "Small acts of generosity connect strangers who never meet." },
            { letter: "B", text: "Stores lose money when employees give away change." },
            { letter: "C", text: "Children should be taught to count coins before shopping." },
            { letter: "D", text: "Working the late shift makes people careless with money." }
          ],
          correct: "A"
        },
        {
          id: "names",
          sol: "11.RL.2.B",
          stem: "The contrast between the manager's name for the jar and Lena's private name for it (sentence 1) suggests that Lena —",
          choices: [
            { letter: "A", text: "dislikes her manager and wants a different job" },
            { letter: "B", text: "sees the jar as an obligation rather than a cheerful gimmick" },
            { letter: "C", text: "believes the jar is being stolen from by customers" },
            { letter: "D", text: "thinks the jar should hold dollars instead of pennies" }
          ],
          correct: "B"
        },
        {
          id: "simile",
          sol: "11.RL.2.B",
          stem: "In sentence 3, comparing the boy's counting to a surgeon's concentration emphasizes that —",
          choices: [
            { letter: "A", text: "the boy hopes to become a doctor someday" },
            { letter: "B", text: "each coin matters enormously to him" },
            { letter: "C", text: "the store is as clean and bright as a hospital" },
            { letter: "D", text: "the boy is stalling to avoid going home" }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "11.RL.1.B",
          stem: "The detail about the boy's shoes in sentence 4 mainly serves to —",
          choices: [
            { letter: "A", text: "explain why Lena decides not to follow her training" },
            { letter: "B", text: "show that the boy is a regular customer at the store" },
            { letter: "C", text: "suggest that the boy has walked a long way to the store" },
            { letter: "D", text: "reveal that Lena once owned the same pair of shoes" }
          ],
          correct: "A"
        },
        {
          id: "nod",
          sol: "11.RL.1.C",
          stem: "The boy's response in sentence 6 is best interpreted as —",
          choices: [
            { letter: "A", text: "rudeness, because he refuses to say thank you" },
            { letter: "B", text: "a dignified acceptance that treats the penny as fair, not as charity" },
            { letter: "C", text: "confusion, because he does not understand what Lena has done" },
            { letter: "D", text: "fear that the manager will see the exchange" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "11.RL.3.A",
          stem: "The final sentence resolves the passage by showing that Lena —",
          choices: [
            { letter: "A", text: "has decided to quit before the manager notices the empty jar" },
            { letter: "B", text: "now joins the chain of anonymous givers she described in sentence 7" },
            { letter: "C", text: "is angry at herself for giving away her tips" },
            { letter: "D", text: "expects the boy to return and repay the penny" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rl-poem-river",
      family: "G11",
      title: "What the River Keeps",
      kind: "Poetry · 9–11.RL",
      blurb: "A poem in two stanzas about a flooded town and what came back.",
      passage:
        "<p class=\"poem\">" +
        L(1) + "The river took the bridge, the bakery, the bench<br>" +
        L(2) + "where my grandfather argued with the same three men<br>" +
        L(3) + "for forty years about nothing that mattered and everything that did.<br>" +
        L(4) + "It took the photographs and left the frames.<br>" +
        L(5) + "It took the town's one traffic light and, for a week,<br>" +
        L(6) + "we drove like people who trusted each other.<br><br>" +
        L(7) + "What the river keeps, it keeps forever, they say,<br>" +
        L(8) + "but I have seen the bench come back, board by board,<br>" +
        L(9) + "carried up the bank by three old men and one boy<br>" +
        L(10) + "who was not old yet and did not know he was being taught.<br>" +
        L(11) + "The water remembers nothing. That is its whole talent.<br>" +
        L(12) + "We are the ones who have to carry things uphill." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          stem: "Which statement best expresses the central idea of the second stanza?",
          choices: [
            { letter: "A", text: "Nature always wins in the end, no matter what people build." },
            { letter: "B", text: "Communities rebuild what matters by passing effort and memory to the next generation." },
            { letter: "C", text: "Old men should not be allowed to do heavy work after a flood." },
            { letter: "D", text: "The river will flood again unless the town builds a taller bridge." }
          ],
          correct: "B"
        },
        {
          id: "paradox",
          sol: "11.RL.2.B",
          stem: "Line 3, about nothing that mattered and everything that did, is an example of —",
          choices: [
            { letter: "A", text: "a paradox that captures how small daily talk carries deep meaning" },
            { letter: "B", text: "a simile comparing the men's arguments to the river" },
            { letter: "C", text: "onomatopoeia imitating the sound of the argument" },
            { letter: "D", text: "an allusion to a famous historical debate" }
          ],
          correct: "A"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Lines 5–6 are ironic because —",
          choices: [
            { letter: "A", text: "the traffic light was the only thing in town that did not flood" },
            { letter: "B", text: "losing the device meant to control drivers produced more cooperation, not less" },
            { letter: "C", text: "the speaker did not have a driver's license during the flood" },
            { letter: "D", text: "the town never had a traffic light before the flood" }
          ],
          correct: "B"
        },
        {
          id: "boy",
          sol: "11.RL.1.B",
          stem: "Line 10 implies that the boy —",
          choices: [
            { letter: "A", text: "is being punished for something he did during the flood" },
            { letter: "B", text: "is absorbing the town's values simply by helping" },
            { letter: "C", text: "resents the old men for making him carry boards" },
            { letter: "D", text: "is the speaker's grandfather as a child" }
          ],
          correct: "B"
        },
        {
          id: "talent",
          sol: "11.RL.2.B",
          stem: "In line 11, calling forgetting the river's whole talent is best described as —",
          choices: [
            { letter: "A", text: "praise for how efficiently the river clears debris" },
            { letter: "B", text: "personification with a critical edge, contrasting the river with people who must remember" },
            { letter: "C", text: "a scientific explanation of how floodwater moves" },
            { letter: "D", text: "a joke about the town's poor memory for flood warnings" }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RL.3.A",
          stem: "How does the poem's two-stanza structure shape its meaning?",
          choices: [
            { letter: "A", text: "The first stanza lists losses; the second answers them with recovery and responsibility." },
            { letter: "B", text: "The first stanza is set in the present; the second is set in the distant past." },
            { letter: "C", text: "Both stanzas repeat the same images to show that nothing has changed." },
            { letter: "D", text: "The first stanza is spoken by the river; the second by the grandfather." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g11-ri-losthour",
      family: "G11",
      title: "The Lost Hour",
      kind: "Informational · 9–11.RI",
      blurb: "A short essay on why the clocks still jump twice a year.",
      passage:
        "<p>" + N(1) + "Twice a year, most Americans change their clocks and complain about it, which raises a fair question: if nearly everyone dislikes the ritual, why does it persist? " +
        N(2) + "The practice was sold during the First World War as a way to save fuel, on the theory that an extra hour of evening daylight meant an hour of lamps left off. " +
        N(3) + "That logic was weaker than it sounded, since people simply used the light — and the electricity — at different hours, but the idea had two powerful allies: retailers, who noticed that shoppers spend more when it is bright after work, and sports leagues, whose evening games filled with fans. " +
        N(4) + "Farmers, often blamed for the change, actually fought it; cows do not read clocks, and a milk truck that arrives an hour earlier by the calendar is simply an hour too early for the cow. " +
        N(5) + "Modern studies complicate the picture further. " +
        N(6) + "Heart attacks and car crashes rise slightly in the days after the spring change, when the population loses an hour of sleep, while the fall change brings a small, temporary increase in evening pedestrian accidents as darkness arrives before the commute ends. " +
        N(7) + "Several states have voted to stop switching, yet they cannot act alone, because federal law currently allows a state to opt out of the change only by staying on standard time year-round — the option almost nobody prefers. " +
        N(8) + "So the ritual continues, held in place not by anyone's enthusiasm but by a stalemate: the old reasons are gone, and the new ones cannot agree on which hour to keep." +
        "</p>",
      claims: [
        {
          id: "mainidea",
          sol: "11.RI.1.A",
          stem: "Which sentence best states the main idea of the passage?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 8" }
          ],
          correct: "D"
        },
        {
          id: "organization",
          sol: "11.RI.2.A",
          stem: "The author organizes the passage mainly by —",
          choices: [
            { letter: "A", text: "posing a question, tracing the history, and then explaining why the question is still unresolved" },
            { letter: "B", text: "comparing the United States with countries that never changed their clocks" },
            { letter: "C", text: "listing the steps a state must follow to change its time zone" },
            { letter: "D", text: "arguing that farmers were right and everyone else was wrong" }
          ],
          correct: "A"
        },
        {
          id: "cows",
          sol: "11.RI.2.C",
          stem: "The author includes the detail about cows in sentence 4 mainly to —",
          choices: [
            { letter: "A", text: "correct a common misconception with a concrete, slightly humorous example" },
            { letter: "B", text: "argue that dairy farming is more important than retail" },
            { letter: "C", text: "explain how the milk delivery schedule was invented" },
            { letter: "D", text: "show that animals suffer more than people during the change" }
          ],
          correct: "A"
        },
        {
          id: "select2",
          sol: "11.RI.1.B",
          stem: "Select TWO sentences that provide evidence that the time change carries real risks.",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 3" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 7" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "stalemate",
          sol: "11.RV.1.C",
          stem: "In sentence 8, the word stalemate most nearly means —",
          choices: [
            { letter: "A", text: "a tradition that people celebrate" },
            { letter: "B", text: "a deadlock in which no side can win" },
            { letter: "C", text: "a law that has recently expired" },
            { letter: "D", text: "an agreement reached after a long debate" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "11.RI.1.C",
          stem: "The author's attitude toward the clock change is best described as —",
          choices: [
            { letter: "A", text: "nostalgic and approving" },
            { letter: "B", text: "wryly skeptical" },
            { letter: "C", text: "angry and demanding" },
            { letter: "D", text: "neutral and uninterested" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-rv-fence",
      family: "G11",
      title: "Rhetoric on the Fence",
      kind: "Vocabulary · 9–11.RV",
      blurb: "A speech-class reflection with six advanced words in context.",
      passage:
        "<p>" + N(1) + "Phones in the hallway are so <strong>ubiquitous</strong> that my speech about them felt, at first, like arguing against weather. " +
        N(2) + "I chose an <strong>austere</strong> style — no jokes, no slides, one plain claim repeated three ways — because Ms. Farrow said a spare speech makes a crowded topic feel new. " +
        N(3) + "My evidence had to be <strong>pragmatic</strong>: not studies about attention in general, but the actual number of minutes our own bell schedule loses to phone checks each week. " +
        N(4) + "The applause was <strong>ephemeral</strong>, gone before I reached my seat, but the questions afterward lasted through lunch. " +
        N(5) + "One classmate said the speech <strong>vindicated</strong> the teachers who had asked for phone pouches last year; she said it proved they were right all along. " +
        N(6) + "I am not sure it proved anything so grand, but I learned that the strongest word in a speech is often the one you leave out." +
        "</p>",
      claims: [
        {
          id: "ubiquitous",
          sol: "11.RV.1.B",
          stem: "The comparison to arguing against weather in sentence 1 helps show that ubiquitous means —",
          choices: [
            { letter: "A", text: "present everywhere" },
            { letter: "B", text: "extremely expensive" },
            { letter: "C", text: "banned by the school" },
            { letter: "D", text: "difficult to repair" }
          ],
          correct: "A"
        },
        {
          id: "austere",
          sol: "11.RV.1.C",
          stem: "Which detail from sentence 2 best clarifies the meaning of austere?",
          choices: [
            { letter: "A", text: "Ms. Farrow said" },
            { letter: "B", text: "no jokes, no slides, one plain claim" },
            { letter: "C", text: "a crowded topic" },
            { letter: "D", text: "feel new" }
          ],
          correct: "B"
        },
        {
          id: "pragmatic",
          sol: "11.RV.1.B",
          stem: "In sentence 3, pragmatic evidence is evidence that is —",
          choices: [
            { letter: "A", text: "based on emotion rather than facts" },
            { letter: "B", text: "practical and tied to the specific situation" },
            { letter: "C", text: "collected by professional researchers" },
            { letter: "D", text: "too general to apply to one school" }
          ],
          correct: "B"
        },
        {
          id: "ephemeral",
          sol: "9.RV.1.C",
          stem: "In sentence 4, the phrase gone before I reached my seat shows that ephemeral means —",
          choices: [
            { letter: "A", text: "louder than expected" },
            { letter: "B", text: "polite but insincere" },
            { letter: "C", text: "lasting only a very short time" },
            { letter: "D", text: "delayed until later" }
          ],
          correct: "C"
        },
        {
          id: "vindicated",
          sol: "10.RV.1.B",
          stem: "In sentence 5, the classmate's second statement restates vindicated as meaning —",
          choices: [
            { letter: "A", text: "punished for a mistake" },
            { letter: "B", text: "shown to have been right" },
            { letter: "C", text: "ignored by the school board" },
            { letter: "D", text: "forced to change a decision" }
          ],
          correct: "B"
        },
        {
          id: "connotation",
          sol: "10.RV.1.A",
          stem: "The author could have written plain instead of austere in sentence 2. Compared with plain, the word austere adds a connotation of —",
          choices: [
            { letter: "A", text: "carelessness and laziness" },
            { letter: "B", text: "deliberate, disciplined restraint" },
            { letter: "C", text: "wealth and luxury" },
            { letter: "D", text: "confusion and disorder" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g11-dsr-skatepark",
      family: "G11",
      title: "Skate Park: Council Minutes + Op-Ed",
      kind: "Paired texts · 9–11.DSR",
      blurb: "Official minutes and a student op-ed describe the same vote very differently.",
      passage:
        "<p><strong>Text 1 — Town Council Minutes (excerpt)</strong></p>" +
        "<p>" + N(1) + "Item 7: Proposal to convert the vacant Elm Street lot into a public skate park. " +
        N(2) + "Public comment: 14 speakers in favor (11 under age 18), 6 opposed, citing noise and liability. " +
        N(3) + "Staff report: construction estimate $185,000; annual maintenance $9,000; insurance rider $4,200. " +
        N(4) + "Motion to approve failed 3–4. " +
        N(5) + "Motion to fund a $12,000 feasibility study, including a noise survey and a review of comparable parks in three neighboring towns, passed 6–1. " +
        N(6) + "Item returns to the agenda in March.</p>" +
        "<p><strong>Text 2 — Student Op-Ed, <em>The Ridgeline</em></strong></p>" +
        "<p>" + N(7) + "Fourteen of us stood up on Tuesday night and told the council exactly what happens on a Friday when there is nowhere to go, and four of them voted no anyway. " +
        N(8) + "We were told to wait for a study. " +
        N(9) + "I understand studies; I also understand that a study is the polite way an adult says later. " +
        N(10) + "Here is what the study will find: the lot is empty, the nearest park is nine miles away, and the six people worried about noise all live on a street that already has a fire station. " +
        N(11) + "March is four months from now. Nobody's Friday night is scheduled for March." +
        "</p>",
      claims: [
        {
          id: "facts",
          sol: "11.DSR.D",
          stem: "Which fact appears in both texts?",
          choices: [
            { letter: "A", text: "The park would cost $185,000 to build." },
            { letter: "B", text: "Fourteen speakers supported the proposal." },
            { letter: "C", text: "The nearest existing park is nine miles away." },
            { letter: "D", text: "The council vote on the study was 6–1." }
          ],
          correct: "B"
        },
        {
          id: "interpret",
          sol: "11.DSR.E",
          stem: "The two texts interpret the vote in sentence 5 differently. The op-ed presents the feasibility study as —",
          choices: [
            { letter: "A", text: "a generous compromise that the students should accept" },
            { letter: "B", text: "a delay tactic that postpones a decision students need now" },
            { letter: "C", text: "an unnecessary expense that will bankrupt the town" },
            { letter: "D", text: "a scientific process that will prove the opponents right" }
          ],
          correct: "B"
        },
        {
          id: "omit",
          sol: "11.DSR.D",
          stem: "Which detail from the minutes does the op-ed leave out that a reader would need in order to judge the council's caution fairly?",
          choices: [
            { letter: "A", text: "The number of speakers who were under 18" },
            { letter: "B", text: "The cost of construction, maintenance and insurance" },
            { letter: "C", text: "The location of the vacant lot" },
            { letter: "D", text: "The month the item returns to the agenda" }
          ],
          correct: "B"
        },
        {
          id: "rhetoric",
          sol: "11.RI.2.C",
          stem: "In sentence 9, the writer defines a study as the polite way an adult says later mainly to —",
          choices: [
            { letter: "A", text: "explain the scientific method to younger readers" },
            { letter: "B", text: "frame the council's decision as dismissive through a sharp, memorable line" },
            { letter: "C", text: "praise the council for being polite to the students" },
            { letter: "D", text: "suggest that the students should conduct their own study" }
          ],
          correct: "B"
        },
        {
          id: "select2",
          sol: "11.DSR.E",
          stem: "Select TWO sentences from Text 2 that respond directly to the noise concern recorded in Text 1.",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 8" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "synth",
          sol: "10.DSR.E",
          stem: "A reader who uses both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the council has permanently rejected the skate park" },
            { letter: "B", text: "the proposal is still alive, but cost and noise concerns must be answered before a final vote" },
            { letter: "C", text: "the students' testimony had no effect on the council" },
            { letter: "D", text: "the neighboring towns have all refused to build skate parks" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < EXTRA.length; i++) P.push(EXTRA[i]);
  global.HEIST_PACKS_V4 = EXTRA;
})(typeof window !== "undefined" ? window : global);
