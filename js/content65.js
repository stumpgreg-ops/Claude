/* SOL Labyrinth — v5.15 expansion: Grade 10 medium packs (Virginia G10), file c65.
 * Twenty-two original packs (170–290 word passages, 12–16 line poems, paired texts
 * 110–150 words each) built around a science fair, a mechanic's garage, a radio
 * station and ice skating. Original text only. Loaded after content.js; pushes into
 * the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    {
      id: "g10-rl-c65-traybee",
      family: "G10",
      title: "Tray B",
      kind: "Literary · 10.RL",
      blurb: "A science fair tray that never sprouted, and a student who decides to show it anyway.",
      level: 2,
      passage:
        "<p>" + N(1) + "Amara Osei had planned her science fair project for three months, and for three months the radish seeds in tray B had refused to grow. " +
        N(2) + "Her hypothesis was simple: seeds watered with recycled dishwater would sprout faster than seeds watered from the tap. " +
        N(3) + "Tray A, the tap water tray, was a small green forest. " +
        N(4) + "Tray B looked like a parking lot after a snowstorm, gray and flat and silent. " +
        N(5) + "The night before the fair, her older brother Kofi suggested she just leave tray B at home. " +
        N(6) + "\"Judges like results,\" he said, shrugging. " +
        N(7) + "\"Nobody gives a ribbon to dirt.\"</p>" +
        "<p>" + N(8) + "Amara almost agreed. " +
        N(9) + "Then she opened her notebook and saw her own handwriting from the first week: Whatever happens, write it down. " +
        N(10) + "She stayed up until midnight adding a new panel titled What Went Wrong, listing the soap she had never measured and the grease that might have coated the seeds.</p>" +
        "<p>" + N(11) + "At the fair, the first judge, a tall woman with reading glasses on a chain, walked right past the green tray. " +
        N(12) + "She stopped at the gray one. " +
        N(13) + "\"Tell me about this,\" she said. " +
        N(14) + "Amara explained for ten minutes, and the judge asked more questions than she had expected, nodding at every answer. " +
        N(15) + "When the ribbons were handed out, Amara's said Honorable Mention, not first place. " +
        N(16) + "She taped it beside tray B, not tray A. " +
        N(17) + "Kofi looked at it for a long moment, then picked up a pencil and asked her how much soap would be too much.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme does Amara's experience with tray B best support?",
          choices: [
            { letter: "A", text: "Judges reward the projects that grow the most." },
            { letter: "B", text: "An honest account of failure can have real value." },
            { letter: "C", text: "Older siblings usually give the wisest advice." },
            { letter: "D", text: "A simple hypothesis is always the safest choice." }
          ],
          correct: "B"
        },
        {
          id: "notebook",
          sol: "10.RL.1.C",
          stem: "Sentences 9 and 10 characterize Amara as someone who —",
          choices: [
            { letter: "A", text: "worries mostly about what her brother thinks" },
            { letter: "B", text: "gives up once an experiment goes badly" },
            { letter: "C", text: "prefers decorating displays to doing research" },
            { letter: "D", text: "holds herself to the rule she set at the start" }
          ],
          correct: "D"
        },
        {
          id: "parkinglot",
          sol: "10.RL.2.A",
          stem: "In sentence 4, comparing tray B to a parking lot after a snowstorm mainly emphasizes that the tray —",
          choices: [
            { letter: "A", text: "looks lifeless and empty" },
            { letter: "B", text: "has become too cold for seeds" },
            { letter: "C", text: "is larger than tray A" },
            { letter: "D", text: "was left outside overnight" }
          ],
          correct: "A"
        },
        {
          id: "judgewalk",
          sol: "10.RL.3.A",
          stem: "The author has the judge walk past the green tray and stop at the gray one (sentences 11 and 12) mainly to —",
          choices: [
            { letter: "A", text: "suggest that the judge did not see tray A" },
            { letter: "B", text: "show that the judge disliked radishes" },
            { letter: "C", text: "reveal that the failed tray drew real interest" },
            { letter: "D", text: "explain why Amara won first place" }
          ],
          correct: "C"
        },
        {
          id: "kofi",
          sol: "10.RL.1.B",
          stem: "Kofi's question in sentence 17 shows a change in that he now —",
          choices: [
            { letter: "A", text: "wants Amara to stop entering science fairs" },
            { letter: "B", text: "believes the judges made a mistake" },
            { letter: "C", text: "plans to enter the fair himself next year" },
            { letter: "D", text: "takes the failed experiment seriously" }
          ],
          correct: "D"
        },
        {
          id: "refused",
          sol: "10.RV.1.C",
          stem: "In sentence 1, saying the seeds had refused to grow most nearly suggests that they —",
          choices: [
            { letter: "A", text: "did not grow despite Amara's efforts" },
            { letter: "B", text: "grew in the wrong direction" },
            { letter: "C", text: "were never planted in tray B" },
            { letter: "D", text: "grew only after the fair" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c65-starpattern",
      family: "G10",
      title: "The Star Pattern",
      kind: "Literary · 10.RL",
      blurb: "A torque wrench, a set of lug nuts, and a grandfather who notices everything.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every Saturday, Teo Marquez swept the floor of his grandfather's garage on Alder Street before the first customer arrived. " +
        N(2) + "This Saturday, Grandpa Rafael handed him a torque wrench instead of a broom. " +
        N(3) + "\"Mrs. Lin's tires,\" he said. " +
        N(4) + "\"Five lug nuts each, and tighten them in a star pattern, not a circle.\"</p>" +
        "<p>" + N(5) + "Teo had watched his grandfather do this a hundred times, but his hands felt clumsy holding the heavy tool. " +
        N(6) + "He started on the first nut and turned until the wrench clicked. " +
        N(7) + "Then he moved to the next nut beside it. " +
        N(8) + "\"Star,\" said Grandpa Rafael from across the room, without looking up from the engine he was fixing. " +
        N(9) + "Teo's face went hot. " +
        N(10) + "He loosened the nut and started again, skipping across the wheel the way his grandfather had drawn it on a scrap of cardboard: one, three, five, two, four. " +
        N(11) + "By the fourth tire, the clicks came in a steady rhythm, like a clock that knew what it was doing.</p>" +
        "<p>" + N(12) + "When Mrs. Lin drove away, Teo asked why the pattern mattered so much. " +
        N(13) + "\"If you tighten in a circle, the wheel sits crooked,\" his grandfather said. " +
        N(14) + "\"It will look fine today, but it will wobble next month.\" " +
        N(15) + "He wiped his hands on a red rag and tossed it to Teo. " +
        N(16) + "\"Most of this job is doing things right when nobody would know the difference.\" " +
        N(17) + "Teo folded the rag and put it in his own back pocket.</p>",
      claims: [
        {
          id: "grandpa",
          sol: "10.RL.1.C",
          stem: "Sentence 8 characterizes Grandpa Rafael as someone who —",
          choices: [
            { letter: "A", text: "is too busy to help his grandson" },
            { letter: "B", text: "pays close attention even while working" },
            { letter: "C", text: "enjoys embarrassing people in front of others" },
            { letter: "D", text: "has forgotten which customer is waiting" }
          ],
          correct: "B"
        },
        {
          id: "mastery",
          sol: "10.RL.1.B",
          stem: "Which sentence best shows that Teo has finally mastered the lug-nut pattern?",
          choices: [
            { letter: "A", text: "Sentence 6: He started on the first nut and turned until the wrench clicked." },
            { letter: "B", text: "Sentence 7: Then he moved to the next nut beside it." },
            { letter: "C", text: "Sentence 9: Teo's face went hot." },
            { letter: "D", text: "Sentence 11: By the fourth tire, the clicks came in a steady rhythm." }
          ],
          correct: "D"
        },
        {
          id: "clock",
          sol: "10.RL.2.A",
          stem: "The simile in sentence 11, like a clock that knew what it was doing, suggests that Teo's work has become —",
          choices: [
            { letter: "A", text: "regular and confident" },
            { letter: "B", text: "slow and tiring" },
            { letter: "C", text: "loud and careless" },
            { letter: "D", text: "rushed and mechanical" }
          ],
          correct: "A"
        },
        {
          id: "hotface",
          sol: "10.RL.2.B",
          stem: "The details in sentences 5 and 9, the clumsy hands and the hot face, mainly create a mood of —",
          choices: [
            { letter: "A", text: "quiet boredom" },
            { letter: "B", text: "growing anger" },
            { letter: "C", text: "embarrassed uncertainty" },
            { letter: "D", text: "playful excitement" }
          ],
          correct: "C"
        },
        {
          id: "nobody",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme developed through Grandpa Rafael's advice about the star pattern?",
          choices: [
            { letter: "A", text: "Customers notice every small mistake a mechanic makes." },
            { letter: "B", text: "Old methods should give way to faster ones." },
            { letter: "C", text: "Young workers learn best by watching, not doing." },
            { letter: "D", text: "Careful work matters even when its effects are hidden." }
          ],
          correct: "D"
        },
        {
          id: "crooked",
          sol: "10.RV.1.B",
          stem: "Grandpa Rafael's warning in sentence 14 helps explain that a wheel that sits crooked is one that —",
          choices: [
            { letter: "A", text: "is missing one of its lug nuts" },
            { letter: "B", text: "is not mounted evenly" },
            { letter: "C", text: "needs a brand-new tire" },
            { letter: "D", text: "has been painted the wrong color" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rl-c65-deadair",
      family: "G10",
      title: "Dead Air",
      kind: "Literary · 10.RL",
      blurb: "A missing guest, a silent studio, and an intern with nothing but a memory of her grandmother's radio.",
      level: 3,
      passage:
        "<p>" + N(1) + "At WKRN, the community station that broadcast from the second floor of a laundromat, the worst sound in the world was no sound at all. " +
        N(2) + "Station manager Delphine Arceneaux called it dead air, and she had taped a sign above the board: Silence is the only mistake listeners remember.</p>" +
        "<p>" + N(3) + "At 7:58 on Thursday, Ines Batista, sixteen and three weeks into her internship, sat alone in front of that sign. " +
        N(4) + "The guest for the eight o'clock hour, a beekeeper who was supposed to talk about honey prices, had not arrived. " +
        N(5) + "Delphine was stuck in traffic on the bridge. " +
        N(6) + "The song playing on air had two minutes left, then one. " +
        N(7) + "Ines looked at the stack of notes she had prepared for the beekeeper, all of them questions, none of them answers.</p>" +
        "<p>" + N(8) + "When the song ended, she leaned toward the microphone and heard herself say, \"My grandmother kept a radio on her windowsill in Ponce.\" " +
        N(9) + "She told listeners how the radio had been the color of a lime, how it hummed before it spoke, how her grandmother turned it up for the news and down for the arguments. " +
        N(10) + "She talked for six minutes without looking at the clock. " +
        N(11) + "The phone line lit up twice: one caller wanted to describe his own grandfather's radio, and another asked whether the beekeeper was ever coming.</p>" +
        "<p>" + N(12) + "At 8:09, the beekeeper rushed in, apologizing, sticky with what he insisted was only rain. " +
        N(13) + "Delphine arrived ten minutes later, breathless, and found Ines calmly asking him about wildflower honey. " +
        N(14) + "Afterward, Delphine took a marker and added one line to the sign. " +
        N(15) + "It now read: Silence is the only mistake listeners remember, unless someone fills it with something true.</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The conflict Ines faces in sentences 3 through 7 is best described as a struggle between —",
          choices: [
            { letter: "A", text: "her loyalty to Delphine and her wish to quit" },
            { letter: "B", text: "her lack of a plan and the need to keep talking" },
            { letter: "C", text: "her dislike of honey and the guest's topic" },
            { letter: "D", text: "her grandmother's advice and the station's rules" }
          ],
          correct: "B"
        },
        {
          id: "signtone",
          sol: "10.RL.2.C",
          stem: "The tone of Delphine's revised sign in sentence 15 is best described as —",
          choices: [
            { letter: "A", text: "stern and threatening" },
            { letter: "B", text: "sarcastic and bitter" },
            { letter: "C", text: "nervous and unsure" },
            { letter: "D", text: "approving and wiser" }
          ],
          correct: "D"
        },
        {
          id: "frame",
          sol: "10.RL.3.A",
          stem: "The author introduces the station's sign in sentence 2 and returns to it in sentence 15 mainly to —",
          choices: [
            { letter: "A", text: "show how Ines's broadcast changed the manager's view of silence" },
            { letter: "B", text: "prove that Delphine never trusted her interns" },
            { letter: "C", text: "explain why the station is above a laundromat" },
            { letter: "D", text: "hint that the beekeeper will not return" }
          ],
          correct: "A"
        },
        {
          id: "calm",
          sol: "10.RL.1.C",
          stem: "Sentence 13 characterizes Ines after her unplanned broadcast as —",
          choices: [
            { letter: "A", text: "still shaken and unable to continue" },
            { letter: "B", text: "annoyed that the guest was late" },
            { letter: "C", text: "composed and back on task" },
            { letter: "D", text: "eager to leave the studio" }
          ],
          correct: "C"
        },
        {
          id: "lime",
          sol: "10.RL.2.B",
          stem: "The details in sentence 9 about the lime-colored radio that hummed before it spoke mainly create a mood that is —",
          choices: [
            { letter: "A", text: "affectionate and nostalgic" },
            { letter: "B", text: "tense and frightening" },
            { letter: "C", text: "formal and distant" },
            { letter: "D", text: "rushed and confused" }
          ],
          correct: "A"
        },
        {
          id: "breathless",
          sol: "10.RV.1.D",
          stem: "The author describes Delphine as breathless in sentence 13 rather than tired. Compared with tired, breathless suggests that she —",
          choices: [
            { letter: "A", text: "has been sleeping in her car" },
            { letter: "B", text: "is too ill to work" },
            { letter: "C", text: "has been hurrying to get there" },
            { letter: "D", text: "is bored by the guest" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rl-c65-spiral",
      family: "G10",
      title: "The Spiral",
      kind: "Literary · 10.RL",
      blurb: "A fall on a double toe loop, a ninth-place finish, and a coach who asks about something else.",
      level: 2,
      passage:
        "<p>" + N(1) + "Lucía Ferreira had landed the double toe loop forty times in practice that week, and she fell on it in the first thirty seconds of her regional program. " +
        N(2) + "The ice was colder against her palms than she expected, and the music kept going without her, bright and careless. " +
        N(3) + "For one long second she considered skating to the boards and leaving. " +
        N(4) + "Instead, she pushed up, found the music at the next phrase, and finished the program with a smile she did not feel. " +
        N(5) + "Her score put her ninth out of eleven.</p>" +
        "<p>" + N(6) + "In the hallway behind the rink, Coach Bergstrom handed her a water bottle and said nothing about the jump. " +
        N(7) + "\"Tell me about the spiral at the end,\" he said instead. " +
        N(8) + "Lucía blinked. " +
        N(9) + "The spiral was the easiest element she had, a long glide on one leg with the other stretched behind her. " +
        N(10) + "\"It was fine,\" she said. " +
        N(11) + "\"It was the best one you have ever done,\" he said. " +
        N(12) + "\"You were angry, and you held it for six full seconds anyway.\"</p>" +
        "<p>" + N(13) + "She wanted to argue that nobody cared about spirals, that ninth place was ninth place. " +
        N(14) + "But she remembered the glide, how the rink had seemed to tilt toward her, and how quiet her mind had been. " +
        N(15) + "On the bus home, she opened her notebook to the page where she listed goals. " +
        N(16) + "Under Land the double toe, she wrote a new line in smaller letters: Keep going when I don't.</p>",
      claims: [
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which theme is best developed through Lucía's regional program and its aftermath?",
          choices: [
            { letter: "A", text: "Practice guarantees a perfect performance." },
            { letter: "B", text: "Coaches should hide the truth from athletes." },
            { letter: "C", text: "Recovering from a mistake can reveal hidden strength." },
            { letter: "D", text: "Only first place makes a competition worthwhile." }
          ],
          correct: "C"
        },
        {
          id: "careless",
          sol: "10.RL.2.A",
          stem: "In sentence 2, the author describes the music as bright and careless mainly to suggest that —",
          choices: [
            { letter: "A", text: "the performance moves on without regard for her fall" },
            { letter: "B", text: "the sound system at the rink was too loud" },
            { letter: "C", text: "Lucía had chosen music that was too cheerful" },
            { letter: "D", text: "the audience stopped listening to the music" }
          ],
          correct: "A"
        },
        {
          id: "coachask",
          sol: "10.RL.3.A",
          stem: "Coach Bergstrom's choice to ask about the spiral instead of the jump (sentences 6 and 7) mainly serves to —",
          choices: [
            { letter: "A", text: "show that he did not watch the program" },
            { letter: "B", text: "shift Lucía's attention to what she did well" },
            { letter: "C", text: "warn Lucía that her spiral needs more work" },
            { letter: "D", text: "explain the scoring rules for spirals" }
          ],
          correct: "B"
        },
        {
          id: "ninth",
          sol: "10.RL.1.C",
          stem: "Sentence 13 reveals that, at first, Lucía —",
          choices: [
            { letter: "A", text: "believes spirals are her strongest skill" },
            { letter: "B", text: "is pleased with her ninth-place score" },
            { letter: "C", text: "plans to change coaches before next season" },
            { letter: "D", text: "measures her performance only by her placing" }
          ],
          correct: "D"
        },
        {
          id: "newline",
          sol: "10.RL.2.C",
          stem: "The tone of the goal Lucía adds to her notebook in sentence 16 is best described as —",
          choices: [
            { letter: "A", text: "bitter and defeated" },
            { letter: "B", text: "boastful and loud" },
            { letter: "C", text: "careless and joking" },
            { letter: "D", text: "quietly determined" }
          ],
          correct: "D"
        },
        {
          id: "regional",
          sol: "10.RV.1.A",
          stem: "The word regional in sentence 1 is formed from region plus the suffix -al, as in coastal and national. Based on these parts, a regional program is one that —",
          choices: [
            { letter: "A", text: "is performed alone without music" },
            { letter: "B", text: "belongs to a competition for a certain area" },
            { letter: "C", text: "repeats the same jump many times" },
            { letter: "D", text: "is judged only by the skater's coach" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rl-c65-byear",
      family: "G10",
      title: "By Ear",
      kind: "Literary · 10.RL",
      blurb: "A ticking pickup, a customer with four articles, and an apprentice told to listen.",
      level: 3,
      passage:
        "<p>" + N(1) + "Aunt Rania Haddad could diagnose a car with her eyes closed, and she sometimes did, just to irritate the customers who had already looked up the answer online. " +
        N(2) + "Noor, who spent her summer mornings at the garage, had spent most of June trying to learn the trick. " +
        N(3) + "Every engine sounded the same to her: a growl, a hum, a rattle that might be important or might be a loose license plate.</p>" +
        "<p>" + N(4) + "On a slow Tuesday, a man named Mr. Abernathy pulled in with a pickup that ticked like a nervous watch. " +
        N(5) + "He announced that it was the timing belt, that he had read four articles, and that he only needed a price. " +
        N(6) + "Aunt Rania tossed Noor a flashlight. " +
        N(7) + "\"You listen,\" she said, and walked into the office to answer the phone.</p>" +
        "<p>" + N(8) + "Noor's heart thudded. " +
        N(9) + "She knelt beside the truck, shut her eyes the way her aunt did, and tried to separate the noise into pieces. " +
        N(10) + "The tick was quick and light, and it sped up when Mr. Abernathy pressed the gas. " +
        N(11) + "It seemed to come from low and to the right, not from the front of the engine where a belt would be. " +
        N(12) + "She opened her eyes and aimed the flashlight at the exhaust pipe, where a heat shield hung by a single rusted bolt, tapping the metal each time the engine shook.</p>" +
        "<p>" + N(13) + "\"It's not the belt,\" she said. " +
        N(14) + "Mr. Abernathy frowned and asked whether she was sure, because the articles had been very convincing. " +
        N(15) + "Through the office window, Aunt Rania raised one eyebrow and kept talking on the phone. " +
        N(16) + "She had not been on a call at all, Noor realized later; the line had been silent the whole time.</p>",
      claims: [
        {
          id: "tension",
          sol: "10.RL.1.B",
          stem: "The tension in the scene with Mr. Abernathy's pickup comes mainly from —",
          choices: [
            { letter: "A", text: "Mr. Abernathy refusing to pay for the repair" },
            { letter: "B", text: "Aunt Rania arguing with someone on the phone" },
            { letter: "C", text: "Noor being asked to find the problem by herself" },
            { letter: "D", text: "the truck catching fire in the garage" }
          ],
          correct: "C"
        },
        {
          id: "irony",
          sol: "10.RL.2.C",
          stem: "Which situation in the story about the ticking pickup is most ironic?",
          choices: [
            { letter: "A", text: "The customer who read four articles is wrong, and the nervous beginner is right." },
            { letter: "B", text: "Aunt Rania can diagnose most cars with her eyes closed tight." },
            { letter: "C", text: "Noor spends all of her summer mornings working at the garage." },
            { letter: "D", text: "The loose heat shield is held on by only one rusted bolt." }
          ],
          correct: "A"
        },
        {
          id: "deadline",
          sol: "10.RL.3.A",
          stem: "The author waits until sentence 16 to reveal that Aunt Rania was not on a call mainly to —",
          choices: [
            { letter: "A", text: "show that the phone in the office was broken" },
            { letter: "B", text: "suggest that Aunt Rania was avoiding Mr. Abernathy" },
            { letter: "C", text: "explain why the repair took so long to finish" },
            { letter: "D", text: "let the reader discover with Noor that the test was staged" }
          ],
          correct: "D"
        },
        {
          id: "mood",
          sol: "10.RL.2.B",
          stem: "The details in sentences 8 and 9, the thudding heart and the closed eyes, mainly create a mood of —",
          choices: [
            { letter: "A", text: "lazy calm" },
            { letter: "B", text: "tense concentration" },
            { letter: "C", text: "angry frustration" },
            { letter: "D", text: "cheerful confidence" }
          ],
          correct: "B"
        },
        {
          id: "lesson",
          sol: "10.RL.1.A",
          stem: "Which idea about learning a skill does Noor's work on the pickup most clearly develop?",
          choices: [
            { letter: "A", text: "Skill grows from breaking a problem into careful observations." },
            { letter: "B", text: "Reading about a problem is better than examining it." },
            { letter: "C", text: "Beginners should never be trusted with real customers." },
            { letter: "D", text: "Talent with engines is something a person is born with." }
          ],
          correct: "A"
        },
        {
          id: "diagnose",
          sol: "10.RV.1.C",
          stem: "In sentence 1, the word diagnose most nearly means —",
          choices: [
            { letter: "A", text: "repair it quickly and cheaply" },
            { letter: "B", text: "describe it loudly to others" },
            { letter: "C", text: "drive it carefully on a test" },
            { letter: "D", text: "identify the cause of a problem" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-rl-c65-bigbertha",
      family: "G10",
      title: "Big Bertha",
      kind: "Literary · 10.RL",
      blurb: "After the public skate, a new rink helper rides along on the resurfacing machine.",
      level: 1,
      passage:
        "<p>" + N(1) + "The public skate at Riverside Rink ended at nine, and by 9:05 the ice looked like a chalkboard after a long school day. " +
        N(2) + "Scratches crossed it in every direction, and someone had dropped a mitten near the penalty box. " +
        N(3) + "Ellis Park, fifteen and in his second week as a rink helper, picked up the mitten and waited by the gate.</p>" +
        "<p>" + N(4) + "Mrs. Danforth drove the resurfacing machine, a boxy blue vehicle that the staff called Big Bertha. " +
        N(5) + "She had driven it for twenty-two years. " +
        N(6) + "Tonight she stopped beside Ellis and patted the empty seat next to her. " +
        N(7) + "\"Hop on,\" she said. " +
        N(8) + "\"You watch the edges, and I'll watch the middle.\"</p>" +
        "<p>" + N(9) + "They rolled onto the ice slowly, and Ellis was surprised by how gentle the machine felt. " +
        N(10) + "Behind them, a thin layer of warm water spread across the surface and began to freeze. " +
        N(11) + "Mrs. Danforth drove in long ovals, each one overlapping the last by a few inches. " +
        N(12) + "\"Miss a strip, and the hockey kids will find it in the morning,\" she said. " +
        N(13) + "Ellis leaned out and called whenever the edge of the blade drifted from the boards. " +
        N(14) + "After twelve laps, the scratches were gone. " +
        N(15) + "The ice gleamed under the lights, smooth and dark as a pond at night.</p>" +
        "<p>" + N(16) + "Mrs. Danforth parked Big Bertha and handed Ellis the keys to hang on the hook. " +
        N(17) + "\"Tomorrow you drive one lap,\" she said, and Ellis held the keys a moment longer than he needed to.</p>",
      claims: [
        {
          id: "chalkboard",
          sol: "10.RL.2.A",
          stem: "In sentence 1, the author compares the ice to a chalkboard after a long school day mainly to show that the ice —",
          choices: [
            { letter: "A", text: "is too thin for skating" },
            { letter: "B", text: "is marked up from heavy use" },
            { letter: "C", text: "has turned a dark color" },
            { letter: "D", text: "is used for lessons" }
          ],
          correct: "B"
        },
        {
          id: "overlap",
          sol: "10.RL.1.B",
          stem: "Which sentence best explains why Mrs. Danforth drives each oval so that it overlaps the last?",
          choices: [
            { letter: "A", text: "Sentence 5: She had driven it for twenty-two years." },
            { letter: "B", text: "Sentence 9: They rolled onto the ice slowly." },
            { letter: "C", text: "Sentence 14: After twelve laps, the scratches were gone." },
            { letter: "D", text: "Sentence 12: Miss a strip, and the hockey kids will find it in the morning." }
          ],
          correct: "D"
        },
        {
          id: "contrast",
          sol: "10.RL.3.A",
          stem: "The author contrasts the ice in sentence 2 with the ice in sentence 15 mainly to —",
          choices: [
            { letter: "A", text: "show the result of the careful resurfacing" },
            { letter: "B", text: "explain why the public skate ended early" },
            { letter: "C", text: "suggest that the rink is too old to use" },
            { letter: "D", text: "describe how the weather changed outside" }
          ],
          correct: "A"
        },
        {
          id: "pond",
          sol: "10.RL.2.B",
          stem: "The image in sentence 15, smooth and dark as a pond at night, creates a mood that is —",
          choices: [
            { letter: "A", text: "eerie and threatening" },
            { letter: "B", text: "busy and noisy" },
            { letter: "C", text: "calm and complete" },
            { letter: "D", text: "gloomy and lonely" }
          ],
          correct: "C"
        },
        {
          id: "keys",
          sol: "10.RL.1.A",
          stem: "Which theme is best supported by the ending, when Ellis holds the keys a moment longer than he needs to?",
          choices: [
            { letter: "A", text: "Machines are more reliable than people." },
            { letter: "B", text: "Hard work should always be paid in money." },
            { letter: "C", text: "Being trusted with responsibility can build pride." },
            { letter: "D", text: "Young workers often take jobs too lightly." }
          ],
          correct: "C"
        },
        {
          id: "nickname",
          sol: "10.RV.1.D",
          stem: "The staff call the machine Big Bertha rather than simply the resurfacer. Compared with the resurfacer, the nickname suggests that the staff —",
          choices: [
            { letter: "A", text: "feel fond of the machine" },
            { letter: "B", text: "are afraid of the machine" },
            { letter: "C", text: "think the machine is new" },
            { letter: "D", text: "want to sell the machine" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c65-skywave",
      family: "G10",
      title: "Radio After Dark",
      kind: "Informational · 10.RI",
      blurb: "Why a faraway AM station can suddenly come in clearly on a night drive.",
      level: 2,
      passage:
        "<p>" + N(1) + "Many drivers have noticed something strange on long night trips: an AM station from a city hundreds of miles away suddenly comes in clearly, as if it were broadcasting from the next town. " +
        N(2) + "The explanation lies about fifty miles overhead, in a layer of the atmosphere called the ionosphere. " +
        N(3) + "Sunlight strikes this region with enough energy to strip electrons from gas molecules, leaving electrically charged particles behind.</p>" +
        "<p>" + N(4) + "During the day, the lowest part of the ionosphere, known as the D layer, absorbs AM radio waves that travel upward. " +
        N(5) + "Those signals simply fade out, so daytime AM listeners usually hear only stations within about a hundred miles. " +
        N(6) + "After sunset, the D layer weakens quickly because there is no sunlight to keep it charged. " +
        N(7) + "AM waves then pass through it and reach a higher layer that acts like a mirror, bending the signals back toward the ground. " +
        N(8) + "A single signal can bounce between the sky and the earth several times, landing far from its source. " +
        N(9) + "Engineers call this skywave propagation.</p>" +
        "<p>" + N(10) + "The effect is not always welcome. " +
        N(11) + "Because distant stations can now reach the same areas, they may interfere with local stations broadcasting on nearby frequencies. " +
        N(12) + "For this reason, many small AM stations are required to lower their power or go off the air at sunset.</p>" +
        "<p>" + N(13) + "FM signals behave differently. " +
        N(14) + "Their higher frequencies pass straight through the ionosphere at night as well as during the day, so FM range stays roughly the same around the clock. " +
        N(15) + "For a night driver, then, the AM dial can feel like a window that opens only after dark.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about AM radio after dark?",
          choices: [
            { letter: "A", text: "FM radio is more reliable than AM radio at all hours." },
            { letter: "B", text: "Small stations should be allowed to broadcast all night." },
            { letter: "C", text: "Changes in the ionosphere at night let AM signals travel farther." },
            { letter: "D", text: "Sunlight damages radio equipment during the daytime." }
          ],
          correct: "C"
        },
        {
          id: "dlayer",
          sol: "10.RI.1.B",
          stem: "According to the passage, why do daytime AM signals usually reach only about a hundred miles?",
          choices: [
            { letter: "A", text: "The D layer absorbs the signals that travel upward." },
            { letter: "B", text: "Stations are required to lower their power by day." },
            { letter: "C", text: "FM stations crowd the AM frequencies during the day." },
            { letter: "D", text: "The higher layer bends the signals into the ground." }
          ],
          correct: "A"
        },
        {
          id: "problemrule",
          sol: "10.RI.2.A",
          stem: "Sentences 10 through 12 are organized mainly as —",
          choices: [
            { letter: "A", text: "a list of stations in order of their power" },
            { letter: "B", text: "a comparison of day and night listening habits" },
            { letter: "C", text: "a definition followed by several examples" },
            { letter: "D", text: "a problem caused by skywaves and a rule that responds to it" }
          ],
          correct: "D"
        },
        {
          id: "mirror",
          sol: "10.RI.2.B",
          stem: "The author compares the higher layer of the ionosphere to a mirror in sentence 7 to emphasize that it —",
          choices: [
            { letter: "A", text: "can be seen clearly from the ground" },
            { letter: "B", text: "sends radio signals back toward the earth" },
            { letter: "C", text: "is made of a thin sheet of glass" },
            { letter: "D", text: "absorbs signals just as the D layer does" }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "10.RI.1.C",
          stem: "The author begins with the experience of drivers on night trips in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "warn readers against driving after dark" },
            { letter: "B", text: "open with a familiar puzzle the article then explains" },
            { letter: "C", text: "prove that most drivers prefer AM stations" },
            { letter: "D", text: "compare AM stations in two different cities" }
          ],
          correct: "B"
        },
        {
          id: "interfere",
          sol: "10.RV.1.A",
          stem: "The word interfere in sentence 11 begins with the prefix inter-, meaning between, as in interstate and interact. Based on this, stations that interfere with each other —",
          choices: [
            { letter: "A", text: "share the same owner and staff" },
            { letter: "B", text: "trade programs with one another" },
            { letter: "C", text: "come between and disrupt one another's signals" },
            { letter: "D", text: "broadcast only during the daytime" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c65-slipperyice",
      family: "G10",
      title: "The Slippery Question",
      kind: "Informational · 10.RI",
      blurb: "The textbook explanation for why ice is slippery turned out to be mostly wrong.",
      level: 3,
      passage:
        "<p>" + N(1) + "For more than a century, a simple explanation of why ice is slippery appeared in textbooks: a skate blade presses so hard on the ice that it melts a thin film of water, and the skater glides on that film. " +
        N(2) + "The idea is tidy, but physicists now consider it mostly wrong. " +
        N(3) + "Calculations show that a skater's weight lowers the melting point of ice by less than one degree Celsius. " +
        N(4) + "That small change cannot explain why ice is slippery at minus twenty degrees, or why a person standing still in ordinary shoes can fall.</p>" +
        "<p>" + N(5) + "A second explanation focused on friction. " +
        N(6) + "As a blade slides, rubbing produces heat, and that heat could melt a microscopic layer of water. " +
        N(7) + "This effect is real, yet it cannot account for the slipperiness of ice that is not moving against anything.</p>" +
        "<p>" + N(8) + "The most widely supported explanation today points to the surface itself. " +
        N(9) + "Researchers using sensitive instruments have found that the top few layers of molecules on ice are loosely bound, behaving partly like a liquid even far below freezing. " +
        N(10) + "Some recent studies suggest that this surface layer may be closer to a rolling layer of tiny ice particles than to true water. " +
        N(11) + "Scientists still disagree about the exact details, and experiments continue. " +
        N(12) + "What is clear is that the slick surface exists before any skate touches it.</p>" +
        "<p>" + N(13) + "The old textbook explanation survived for so long partly because it was easy to picture. " +
        N(14) + "Its story is a useful reminder that a convincing explanation is not the same as a correct one.</p>",
      claims: [
        {
          id: "organize",
          sol: "10.RI.2.A",
          stem: "How does the author organize the explanations of slipperiness in sentences 1 through 12?",
          choices: [
            { letter: "A", text: "by describing older explanations and their flaws before the current one" },
            { letter: "B", text: "by listing the steps a skater takes to glide across the ice" },
            { letter: "C", text: "by comparing ice in winter with ice in spring" },
            { letter: "D", text: "by telling the life story of one physicist" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "10.RI.1.B",
          stem: "Which sentence offers the strongest evidence against the pressure-melting explanation?",
          choices: [
            { letter: "A", text: "Sentence 2: The idea is tidy, but physicists now consider it mostly wrong." },
            { letter: "B", text: "Sentence 6: As a blade slides, rubbing produces heat." },
            { letter: "C", text: "Sentence 4: That small change cannot explain why ice is slippery at minus twenty degrees." },
            { letter: "D", text: "Sentence 13: The old textbook explanation survived because it was easy to picture." }
          ],
          correct: "C"
        },
        {
          id: "speculation",
          sol: "10.RI.1.C",
          stem: "Which statement in the article about ice is presented as a possibility rather than a settled finding?",
          choices: [
            { letter: "A", text: "A skater's weight lowers the melting point by less than one degree." },
            { letter: "B", text: "Rubbing a blade across ice produces heat." },
            { letter: "C", text: "The slick surface exists before any skate touches it." },
            { letter: "D", text: "The surface layer may be closer to rolling ice particles than to water." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "10.RI.2.C",
          stem: "The author's tone toward the old textbook explanation in sentences 13 and 14 is best described as —",
          choices: [
            { letter: "A", text: "mocking and dismissive" },
            { letter: "B", text: "critical but understanding" },
            { letter: "C", text: "admiring and defensive" },
            { letter: "D", text: "confused and uncertain" }
          ],
          correct: "B"
        },
        {
          id: "summary",
          sol: "10.RI.1.A",
          stem: "Which of these best summarizes the article about why ice is slippery?",
          choices: [
            { letter: "A", text: "Skates melt ice through pressure, which is why skaters glide so easily." },
            { letter: "B", text: "Friction is the only reason ice is slippery, and scientists now agree on it." },
            { letter: "C", text: "Ice is slick mainly because of its loose surface layer, though details are debated." },
            { letter: "D", text: "Ice is slippery only at temperatures close to its melting point." }
          ],
          correct: "C"
        },
        {
          id: "friction",
          sol: "10.RI.2.B",
          stem: "The author includes sentence 7 mainly to —",
          choices: [
            { letter: "A", text: "show why the friction explanation is incomplete" },
            { letter: "B", text: "prove that skates do not produce any heat" },
            { letter: "C", text: "introduce the pressure-melting explanation" },
            { letter: "D", text: "describe an experiment with moving ice" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c65-fairtest",
      family: "G10",
      title: "What Did You Keep the Same?",
      kind: "Informational · 10.RI",
      blurb: "The question science fair judges love to ask, and why controlled variables matter.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every science fair judge has a favorite question, and many of them ask the same one: \"What did you keep the same?\" " +
        N(2) + "The question is about controlled variables, the conditions a student holds steady so that only one factor changes at a time.</p>" +
        "<p>" + N(3) + "Imagine a student testing whether music helps plants grow. " +
        N(4) + "She places one plant beside a speaker and another in a quiet room. " +
        N(5) + "After three weeks, the musical plant is taller. " +
        N(6) + "The result seems clear, but a judge will soon ask about the two rooms. " +
        N(7) + "Did both plants get the same amount of sunlight? " +
        N(8) + "Were they given the same water, the same soil, the same size pot? " +
        N(9) + "If the quiet room was also darker, the student cannot know whether the music or the light made the difference.</p>" +
        "<p>" + N(10) + "A careful experiment changes only one thing, called the independent variable, and measures its effect on another thing, called the dependent variable. " +
        N(11) + "In the plant project, the music is the independent variable and the height of the plant is the dependent variable. " +
        N(12) + "Everything else must stay constant. " +
        N(13) + "Good projects also include more than one plant in each group. " +
        N(14) + "A single plant might grow slowly because of a weak seed, but ten plants give a more reliable average.</p>" +
        "<p>" + N(15) + "Judges are not impressed by expensive equipment or dramatic results. " +
        N(16) + "They want to see that a student understood how to design a fair test. " +
        N(17) + "A simple experiment with careful controls will usually score higher than a flashy one with none.</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about the judge's favorite question?",
          choices: [
            { letter: "A", text: "Expensive equipment is the key to winning a science fair." },
            { letter: "B", text: "Strong projects change one factor and hold the others steady." },
            { letter: "C", text: "Music has been proven to help plants grow taller." },
            { letter: "D", text: "Judges care most about how dramatic the results are." }
          ],
          correct: "B"
        },
        {
          id: "light",
          sol: "10.RI.1.B",
          stem: "According to the passage, why can't the student in the plant example be sure that music caused the growth?",
          choices: [
            { letter: "A", text: "She used only plants of the same kind." },
            { letter: "B", text: "She measured height instead of leaf color." },
            { letter: "C", text: "She ran the test for only three weeks." },
            { letter: "D", text: "The quiet room may have had less light." }
          ],
          correct: "D"
        },
        {
          id: "example",
          sol: "10.RI.2.A",
          stem: "Sentences 3 through 9 are organized mainly as —",
          choices: [
            { letter: "A", text: "an example that shows what goes wrong without controls" },
            { letter: "B", text: "a list of rules for entering a science fair" },
            { letter: "C", text: "a comparison of two different judges" },
            { letter: "D", text: "a timeline of a plant's growth from seed to flower" }
          ],
          correct: "A"
        },
        {
          id: "questions",
          sol: "10.RI.2.B",
          stem: "The author includes the questions in sentences 7 and 8 mainly to —",
          choices: [
            { letter: "A", text: "show that the author does not know the answers" },
            { letter: "B", text: "suggest that plants need more water than soil" },
            { letter: "C", text: "model the kinds of questions a judge would ask" },
            { letter: "D", text: "explain how to build a speaker for plants" }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The article about controlled variables is written mainly for —",
          choices: [
            { letter: "A", text: "students preparing science fair projects" },
            { letter: "B", text: "gardeners choosing music for their plants" },
            { letter: "C", text: "companies that sell lab equipment" },
            { letter: "D", text: "parents who serve as fair volunteers" }
          ],
          correct: "A"
        },
        {
          id: "flashy",
          sol: "10.RI.2.C",
          stem: "The author's tone toward flashy projects in sentences 15 through 17 is best described as —",
          choices: [
            { letter: "A", text: "openly envious" },
            { letter: "B", text: "deeply angry" },
            { letter: "C", text: "mildly skeptical" },
            { letter: "D", text: "highly amused" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-ri-c65-enginelight",
      family: "G10",
      title: "The Little Orange Engine",
      kind: "Informational · 10.RI",
      blurb: "What the check engine light really tells a driver, and what it doesn't.",
      level: 2,
      passage:
        "<p>" + N(1) + "Few dashboard symbols cause as much worry as the small orange outline of an engine, the warning lamp most drivers call the check engine light. " +
        N(2) + "Its message is frustratingly vague. " +
        N(3) + "The lamp might mean a loose gas cap, or it might mean a failing part that could damage the engine.</p>" +
        "<p>" + N(4) + "To find out which, mechanics rely on a system called on-board diagnostics. " +
        N(5) + "Since the mid-1990s, cars sold in the United States have been required to include a standard diagnostic port, usually hidden under the dashboard near the driver's knees. " +
        N(6) + "A technician plugs a scanner into this port and reads a short code, such as P0420, that points toward the problem area. " +
        N(7) + "The first letter identifies the general system, and the numbers narrow it down.</p>" +
        "<p>" + N(8) + "A code, however, is not a diagnosis. " +
        N(9) + "P0420 indicates that a catalytic converter is not working efficiently, but the cause could be the converter itself, a faulty sensor, or a leak in the exhaust. " +
        N(10) + "A good mechanic treats the code as the beginning of an investigation rather than the end.</p>" +
        "<p>" + N(11) + "Inexpensive scanners now let drivers read codes at home, and many auto parts stores will read them for free. " +
        N(12) + "This access can save money and prevent panic over minor issues. " +
        N(13) + "It can also tempt drivers to replace expensive parts based on a code alone. " +
        N(14) + "Mechanics tell stories of customers who bought three sensors before learning that a cracked hose was to blame. " +
        N(15) + "The orange light, in the end, is less like a doctor's verdict and more like a patient saying, \"Something hurts.\"</p>",
      claims: [
        {
          id: "central",
          sol: "10.RI.1.A",
          stem: "Which statement best expresses the central idea of the article about the check engine light?",
          choices: [
            { letter: "A", text: "Drivers should never read their own diagnostic codes." },
            { letter: "B", text: "A loose gas cap is the most common cause of the light." },
            { letter: "C", text: "Diagnostic codes point to problems but still require investigation." },
            { letter: "D", text: "Cars built before the 1990s were easier to repair." }
          ],
          correct: "C"
        },
        {
          id: "notdiagnosis",
          sol: "10.RI.1.B",
          stem: "Which detail best supports the claim in sentence 8 that a code is not a diagnosis?",
          choices: [
            { letter: "A", text: "P0420 can come from a bad converter, a sensor, or an exhaust leak." },
            { letter: "B", text: "The diagnostic port is hidden under the dashboard." },
            { letter: "C", text: "Auto parts stores will often read codes for free." },
            { letter: "D", text: "The first letter of a code names the general system." }
          ],
          correct: "A"
        },
        {
          id: "benefitrisk",
          sol: "10.RI.2.A",
          stem: "The author organizes sentences 11 through 14 mainly by —",
          choices: [
            { letter: "A", text: "tracing the history of the scanner from start to finish" },
            { letter: "B", text: "presenting a benefit of home scanners and then a risk" },
            { letter: "C", text: "defining a term and then giving its origin" },
            { letter: "D", text: "comparing two mechanics who use different tools" }
          ],
          correct: "B"
        },
        {
          id: "vague",
          sol: "10.RI.2.C",
          stem: "In sentence 2, calling the light's message frustratingly vague gives the article a tone that is —",
          choices: [
            { letter: "A", text: "angry at car companies" },
            { letter: "B", text: "amused by worried drivers" },
            { letter: "C", text: "neutral and technical" },
            { letter: "D", text: "sympathetic to drivers" }
          ],
          correct: "D"
        },
        {
          id: "sensors",
          sol: "10.RI.1.C",
          stem: "The author includes the story about three sensors in sentence 14 mainly to —",
          choices: [
            { letter: "A", text: "prove that sensors are poorly made" },
            { letter: "B", text: "explain how to replace a cracked hose" },
            { letter: "C", text: "praise customers who do their own repairs" },
            { letter: "D", text: "illustrate the cost of trusting a code alone" }
          ],
          correct: "D"
        },
        {
          id: "gnos",
          sol: "10.RV.1.A",
          stem: "The word diagnostics in sentence 4 contains the prefix dia-, meaning through, and the root gnos-, meaning know, as in prognosis. Based on these parts, a diagnostic system helps people —",
          choices: [
            { letter: "A", text: "know a problem by examining it closely" },
            { letter: "B", text: "drive through traffic more quickly" },
            { letter: "C", text: "repair an engine without any tools" },
            { letter: "D", text: "forget about minor warning lights" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c65-resurfacer",
      family: "G10",
      title: "Ten Minutes to New Ice",
      kind: "Informational · 10.RI",
      blurb: "How an ice resurfacer shaves, washes and floods a rink between periods.",
      level: 1,
      passage:
        "<p>" + N(1) + "Between periods of a hockey game, a large machine circles the rink, and within ten minutes the scarred ice looks new again. " +
        N(2) + "The ice resurfacer may look like a simple vehicle, but it performs several jobs at once.</p>" +
        "<p>" + N(3) + "First, a sharp steel blade under the machine shaves a thin layer off the top of the ice. " +
        N(4) + "This removes the grooves and chips left by skates. " +
        N(5) + "A horizontal screw called an auger then gathers the loose shavings, often called snow, and a vertical auger lifts them into a large tank at the front of the machine. " +
        N(6) + "Next, the machine washes the ice. " +
        N(7) + "Water sprays onto the surface to loosen dirt in the deeper cuts, and a vacuum pulls the dirty water back up. " +
        N(8) + "Finally, a cloth towel dragged behind the machine spreads a thin layer of hot water. " +
        N(9) + "Hot water is used because it melts the very top of the old ice slightly, which helps the new layer bond and freeze smoothly.</p>" +
        "<p>" + N(10) + "The driver must follow a careful pattern, usually a series of overlapping ovals, so that no strip is missed. " +
        N(11) + "A skilled driver can resurface a full rink in less than ten minutes. " +
        N(12) + "At the end of each run, the driver dumps the snow tank in a pit outside the rink, where the shavings slowly melt.</p>" +
        "<p>" + N(13) + "The first resurfacers were built in the late 1940s, when a rink owner grew tired of the hour-long job of scraping and flooding the ice by hand. " +
        N(14) + "Today the machines are so familiar that many fans consider the resurfacing break part of the show.</p>",
      claims: [
        {
          id: "sequence",
          sol: "10.RI.2.A",
          stem: "How is the explanation in sentences 3 through 9 mainly organized?",
          choices: [
            { letter: "A", text: "from the most expensive part to the cheapest" },
            { letter: "B", text: "as a problem followed by several solutions" },
            { letter: "C", text: "in the order the machine performs its tasks" },
            { letter: "D", text: "as a comparison of old and new machines" }
          ],
          correct: "C"
        },
        {
          id: "hotwater",
          sol: "10.RI.1.B",
          stem: "According to the passage, why does the resurfacer spread hot water rather than cold?",
          choices: [
            { letter: "A", text: "Hot water slightly melts the old surface so the new layer bonds." },
            { letter: "B", text: "Hot water cleans the dirt out of the deepest skate cuts." },
            { letter: "C", text: "Hot water keeps the snow tank from freezing solid." },
            { letter: "D", text: "Hot water makes the machine easier for the driver to steer." }
          ],
          correct: "A"
        },
        {
          id: "preview",
          sol: "10.RI.2.B",
          stem: "The author includes sentence 2 about the resurfacer mainly to —",
          choices: [
            { letter: "A", text: "argue that the machine is too complicated" },
            { letter: "B", text: "preview that the machine does more than it seems" },
            { letter: "C", text: "describe the color and shape of the machine" },
            { letter: "D", text: "explain why hockey games have three periods" }
          ],
          correct: "B"
        },
        {
          id: "centralsent",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the central idea of the passage about the ice resurfacer?",
          choices: [
            { letter: "A", text: "Sentence 4: This removes the grooves and chips left by skates." },
            { letter: "B", text: "Sentence 12: The driver dumps the snow tank in a pit outside the rink." },
            { letter: "C", text: "Sentence 11: A skilled driver can resurface a full rink in less than ten minutes." },
            { letter: "D", text: "Sentence 2: The ice resurfacer may look simple, but it performs several jobs at once." }
          ],
          correct: "D"
        },
        {
          id: "history",
          sol: "10.RI.1.C",
          stem: "The author mentions the rink owner in sentence 13 mainly to —",
          choices: [
            { letter: "A", text: "name the person who drives the machine today" },
            { letter: "B", text: "give a brief history of why the machine was invented" },
            { letter: "C", text: "show that scraping by hand worked better" },
            { letter: "D", text: "explain why fans enjoy the resurfacing break" }
          ],
          correct: "B"
        },
        {
          id: "show",
          sol: "10.RI.2.C",
          stem: "The tone of sentence 14, about fans and the resurfacing break, is best described as —",
          choices: [
            { letter: "A", text: "lightly appreciative" },
            { letter: "B", text: "sharply critical" },
            { letter: "C", text: "anxious and worried" },
            { letter: "D", text: "dry and impatient" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c65-entryrules",
      family: "G10",
      title: "Hollins Valley Fair Rules",
      kind: "Functional text · 10.RI",
      blurb: "The entry rules sheet for a regional high school science fair.",
      level: 1,
      passage:
        "<p><strong>Hollins Valley Regional Science Fair: Entry Rules</strong></p>" +
        "<p><strong>Eligibility.</strong> " + N(1) + "Students in grades 9 through 12 who attend a school in Hollins Valley County may enter. " +
        N(2) + "Teams may include up to three students, and every team member must be present at judging.</p>" +
        "<p><strong>Registration.</strong> " + N(3) + "Online registration closes at 5:00 p.m. on February 14. " +
        N(4) + "Late entries will not be accepted for any reason. " +
        N(5) + "Projects involving live animals, human subjects, or hazardous chemicals must also submit Form R-2, signed by a supervising teacher, at least two weeks before registration closes.</p>" +
        "<p><strong>Display Requirements.</strong> " + N(6) + "Displays may not exceed 30 inches deep, 48 inches wide, and 108 inches tall, measured from the table. " +
        N(7) + "Open flames, glass containers, and liquids of any kind are prohibited at the display, though photographs of them are welcome. " +
        N(8) + "Every display must include a written abstract of no more than 250 words.</p>" +
        "<p><strong>Judging.</strong> " + N(9) + "Judges will visit each project between 9:00 and 11:30 a.m. " +
        N(10) + "Students should be prepared to explain their procedure and results in about five minutes. " +
        N(11) + "Projects are scored in four categories: research question, design and method, data analysis, and presentation. " +
        N(12) + "Design and method is weighted most heavily, counting for 40 percent of the total score.</p>" +
        "<p><strong>Awards.</strong> " + N(13) + "First-place winners in each category advance to the state fair in April. " +
        N(14) + "Awards will be announced at 2:00 p.m. in the gymnasium, and students need not be present to receive them.</p>",
      claims: [
        {
          id: "formr2",
          sol: "10.RI.1.B",
          stem: "According to the rules sheet, which project would need to submit Form R-2?",
          choices: [
            { letter: "A", text: "a project comparing three bridge designs" },
            { letter: "B", text: "a display showing photographs of a flame" },
            { letter: "C", text: "a project timing classmates' reaction speeds" },
            { letter: "D", text: "a team of three students testing magnets" }
          ],
          correct: "C"
        },
        {
          id: "headings",
          sol: "10.RI.2.A",
          stem: "How do the bold headings on the Hollins Valley rules sheet help a student?",
          choices: [
            { letter: "A", text: "They show which rules matter most to the judges." },
            { letter: "B", text: "They let a student find the rules for each stage quickly." },
            { letter: "C", text: "They list the four categories used for scoring." },
            { letter: "D", text: "They explain why each rule was created." }
          ],
          correct: "B"
        },
        {
          id: "prohibited",
          sol: "10.RV.1.B",
          stem: "In sentence 7, prohibited items are contrasted with photographs that are welcome. Based on this contrast, prohibited most nearly means —",
          choices: [
            { letter: "A", text: "not allowed" },
            { letter: "B", text: "highly valued" },
            { letter: "C", text: "easily broken" },
            { letter: "D", text: "rarely seen" }
          ],
          correct: "A"
        },
        {
          id: "audience",
          sol: "10.RI.1.C",
          stem: "The Hollins Valley rules sheet is written mainly for —",
          choices: [
            { letter: "A", text: "judges deciding how to score each category" },
            { letter: "B", text: "teachers who run the state fair in April" },
            { letter: "C", text: "parents planning to attend the awards" },
            { letter: "D", text: "high school students planning to enter" }
          ],
          correct: "D"
        },
        {
          id: "weight",
          sol: "10.RI.2.B",
          stem: "The rules sheet includes sentence 12 about how categories are weighted mainly to —",
          choices: [
            { letter: "A", text: "warn students that presentation does not count" },
            { letter: "B", text: "explain how judges are chosen for the fair" },
            { letter: "C", text: "remind students of the registration deadline" },
            { letter: "D", text: "signal which part of a project matters most" }
          ],
          correct: "D"
        },
        {
          id: "strict",
          sol: "10.RI.1.A",
          stem: "Taken together, sentences 4 and 14 show that the fair is —",
          choices: [
            { letter: "A", text: "strict about deadlines but flexible about attending the awards" },
            { letter: "B", text: "flexible about deadlines but strict about attending the awards" },
            { letter: "C", text: "strict about both deadlines and attending the awards" },
            { letter: "D", text: "flexible about both deadlines and attending the awards" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-ri-c65-autolab",
      family: "G10",
      title: "Keep the Garage Open",
      kind: "Argument · 10.RI",
      blurb: "A student editorial argues that the school board should not close the auto technology lab.",
      level: 3,
      passage:
        "<p>" + N(1) + "When the Brookfield school board meets next month, it will decide whether to close the automotive technology lab to make room for a second computer lab. " +
        N(2) + "That would be a mistake. " +
        N(3) + "The auto lab teaches skills that are useful, hard to find, and surprisingly academic.</p>" +
        "<p>" + N(4) + "Consider usefulness first. " +
        N(5) + "Nearly every family in Brookfield depends on a car, and a basic repair at a shop can cost several hundred dollars. " +
        N(6) + "Students who learn to change brake pads or trace an electrical fault save their families real money, sometimes before they even graduate. " +
        N(7) + "The skills are also in demand. " +
        N(8) + "Local garage owners say they cannot hire enough trained technicians, and last spring, four of the lab's eleven seniors received job offers before graduation.</p>" +
        "<p>" + N(9) + "Some board members argue that cars are becoming computers on wheels, so students should study computers instead. " +
        N(10) + "They are half right. " +
        N(11) + "Modern vehicles do contain dozens of computers, which is exactly why the auto lab now teaches students to read sensor data and diagnose software faults alongside turning wrenches. " +
        N(12) + "Closing the lab would not prepare students for that future; it would hand it to someone else.</p>" +
        "<p>" + N(13) + "Finally, the work is more academic than critics assume. " +
        N(14) + "Diagnosing a misfiring engine requires forming a hypothesis, testing it, and revising it, which is the scientific method with grease on its hands. " +
        N(15) + "Students who struggle to see the point of a physics worksheet often see it instantly when a gear ratio decides whether a car can climb a hill. " +
        N(16) + "The board should keep the auto lab open and fund it as the advanced technical classroom it already is.</p>",
      claims: [
        {
          id: "claim",
          sol: "10.RI.1.A",
          stem: "Which sentence best states the writer's central claim about the Brookfield auto lab?",
          choices: [
            { letter: "A", text: "Sentence 5: Nearly every family in Brookfield depends on a car." },
            { letter: "B", text: "Sentence 16: The board should keep the auto lab open and fund it." },
            { letter: "C", text: "Sentence 9: Cars are becoming computers on wheels." },
            { letter: "D", text: "Sentence 11: Modern vehicles do contain dozens of computers." }
          ],
          correct: "B"
        },
        {
          id: "demand",
          sol: "10.RI.1.B",
          stem: "Which detail from the editorial best supports the claim that the lab's skills are in demand?",
          choices: [
            { letter: "A", text: "A basic repair at a shop can cost several hundred dollars." },
            { letter: "B", text: "The board may build a second computer lab in the space." },
            { letter: "C", text: "Four of the lab's eleven seniors received job offers." },
            { letter: "D", text: "A gear ratio decides whether a car can climb a hill." }
          ],
          correct: "C"
        },
        {
          id: "halfright",
          sol: "10.RI.2.C",
          stem: "In sentences 9 through 12, the writer responds to the opposing view mainly by —",
          choices: [
            { letter: "A", text: "agreeing in part and then turning it into support for the lab" },
            { letter: "B", text: "ignoring it and moving on to the cost of repairs" },
            { letter: "C", text: "attacking the board members who hold that view" },
            { letter: "D", text: "admitting that the board's plan is the better one" }
          ],
          correct: "A"
        },
        {
          id: "opinion",
          sol: "10.RI.1.C",
          stem: "Which statement from the editorial is closest to an opinion rather than a verifiable fact?",
          choices: [
            { letter: "A", text: "Modern vehicles contain dozens of computers." },
            { letter: "B", text: "Four of eleven seniors received job offers last spring." },
            { letter: "C", text: "The board will meet next month to decide the lab's future." },
            { letter: "D", text: "Closing the lab would hand that future to someone else." }
          ],
          correct: "D"
        },
        {
          id: "grease",
          sol: "10.RI.2.B",
          stem: "The writer calls engine diagnosis the scientific method with grease on its hands (sentence 14) mainly to —",
          choices: [
            { letter: "A", text: "warn students that the lab is messy" },
            { letter: "B", text: "connect hands-on repair to academic thinking" },
            { letter: "C", text: "suggest that science classes need more tools" },
            { letter: "D", text: "complain that the lab lacks proper cleaning" }
          ],
          correct: "B"
        },
        {
          id: "trace",
          sol: "10.RV.1.D",
          stem: "In sentence 6, the writer says students trace an electrical fault rather than find it. Compared with find, trace suggests a process that is —",
          choices: [
            { letter: "A", text: "lucky and sudden" },
            { letter: "B", text: "quick and careless" },
            { letter: "C", text: "careful and step by step" },
            { letter: "D", text: "loud and dangerous" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rv-c65-overnight",
      family: "G10",
      title: "The Overnight Shift",
      kind: "Vocabulary · 10.RV",
      blurb: "A storm knocks out the overnight program, and a quiet host starts talking.",
      level: 2,
      passage:
        "<p>" + N(1) + "The overnight host at KVLR, a soft-spoken man named Gideon Oduya, had a voice so <strong>resonant</strong> that it seemed to fill the tiny studio the way warm water fills a bath. " +
        N(2) + "Aiyana Begay, a high school junior volunteering for the summer, had expected him to be talkative off the air too. " +
        N(3) + "Instead he was <strong>laconic</strong>, answering most of her questions with a nod or a single word. " +
        N(4) + "\"Levels,\" he would say, pointing at a meter, and she would adjust the volume. " +
        N(5) + "His hands moved across the soundboard in quick, <strong>deft</strong> motions, never missing a switch, even in the dark.</p>" +
        "<p>" + N(6) + "At 2 a.m. one night, a thunderstorm knocked out the station's prerecorded program. " +
        N(7) + "The board erupted in a <strong>cacophony</strong> of beeps, static, and a warning buzzer that would not stop. " +
        N(8) + "Gideon silenced the alarms, leaned toward the microphone, and began an <strong>impromptu</strong> broadcast, describing the storm from the studio window with no script at all. " +
        N(9) + "He invited Aiyana to read the weather alerts as they arrived. " +
        N(10) + "Her voice shook on the first one but steadied by the third. " +
        N(11) + "Listeners called in from farms and night shifts, telling them where the lightning was striking.</p>" +
        "<p>" + N(12) + "By dawn, Gideon and Aiyana had built a <strong>rapport</strong> that a month of quiet nods had not created, and they were finishing each other's sentences on air. " +
        N(13) + "When the regular program returned at five, Gideon said more words to her than he had all summer. " +
        N(14) + "\"Good radio,\" he said. " +
        N(15) + "\"Same time tomorrow.\"</p>",
      claims: [
        {
          id: "laconic",
          sol: "10.RV.1.C",
          stem: "In sentence 3, the word laconic most nearly means —",
          choices: [
            { letter: "A", text: "rude and unfriendly" },
            { letter: "B", text: "nervous and shy" },
            { letter: "C", text: "using very few words" },
            { letter: "D", text: "speaking very softly" }
          ],
          correct: "C"
        },
        {
          id: "impromptu",
          sol: "10.RV.1.B",
          stem: "Which phrase from sentence 8 best helps the reader understand the meaning of impromptu?",
          choices: [
            { letter: "A", text: "with no script at all" },
            { letter: "B", text: "silenced the alarms" },
            { letter: "C", text: "leaned toward the microphone" },
            { letter: "D", text: "from the studio window" }
          ],
          correct: "A"
        },
        {
          id: "cacophony",
          sol: "10.RV.1.A",
          stem: "The word cacophony comes from Greek parts meaning bad and sound; the second part also appears in phonics and telephone. Based on these parts, the cacophony in sentence 7 is —",
          choices: [
            { letter: "A", text: "a pleasant tune played softly" },
            { letter: "B", text: "a message sent by telephone" },
            { letter: "C", text: "a sudden loss of all sound" },
            { letter: "D", text: "a harsh jumble of noises" }
          ],
          correct: "D"
        },
        {
          id: "deft",
          sol: "10.RV.1.D",
          stem: "The author describes Gideon's hands as deft rather than simply fast. Compared with fast, deft suggests movements that are —",
          choices: [
            { letter: "A", text: "hurried and sloppy" },
            { letter: "B", text: "skillful and precise" },
            { letter: "C", text: "slow and tired" },
            { letter: "D", text: "rough and forceful" }
          ],
          correct: "B"
        },
        {
          id: "rapport",
          sol: "10.RV.1.C",
          stem: "As used in sentence 12, the word rapport most nearly means —",
          choices: [
            { letter: "A", text: "a written report" },
            { letter: "B", text: "a friendly argument" },
            { letter: "C", text: "a work schedule" },
            { letter: "D", text: "a close, easy connection" }
          ],
          correct: "D"
        },
        {
          id: "resonant",
          sol: "10.RV.1.B",
          stem: "In sentence 1, the comparison to warm water filling a bath helps explain that a resonant voice is one that —",
          choices: [
            { letter: "A", text: "is high and thin" },
            { letter: "B", text: "is quiet and hard to hear" },
            { letter: "C", text: "is deep and full" },
            { letter: "D", text: "is fast and sharp" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "g10-rv-c65-flicker",
      family: "G10",
      title: "The Flicker",
      kind: "Vocabulary · 10.RV",
      blurb: "Headlights that fail only some nights, and an apprentice who keeps careful notes.",
      level: 3,
      passage:
        "<p>" + N(1) + "The problem with Ms. Farrow's sedan was <strong>intermittent</strong>: the headlights flickered on some nights and worked perfectly on others. " +
        N(2) + "Three shops had already failed to fix it, and Ms. Farrow was so <strong>exasperated</strong> that she dropped the keys on the counter at Moriyama Auto without saying hello. " +
        N(3) + "Kenji Moriyama handed the job to his apprentice, Tavita Faleolo, with a warning. " +
        N(4) + "\"Electrical gremlins hide,\" he said. " +
        N(5) + "\"You find them by being patient, not clever.\"</p>" +
        "<p>" + N(6) + "Tavita's first tools were <strong>rudimentary</strong>: a test light, a roll of tape, and a notebook. " +
        N(7) + "She was <strong>scrupulous</strong> about recording every test, writing down the time, the temperature, and whether the lights had flickered. " +
        N(8) + "After two days, a pattern appeared. " +
        N(9) + "The flickering happened only after rain. " +
        N(10) + "That clue led her to a connector behind the front bumper, where the metal pins had turned green and crusty. " +
        N(11) + "Water had seeped in through a cracked seal, and the <strong>corroded</strong> pins carried current only when they happened to touch.</p>" +
        "<p>" + N(12) + "Tavita wanted to rebuild the entire wiring harness, a repair that would take a week. " +
        N(13) + "Kenji, more <strong>pragmatic</strong>, suggested replacing the single connector and sealing it properly, which would solve the problem for a fraction of the cost. " +
        N(14) + "Ms. Farrow picked up her car the next afternoon. " +
        N(15) + "She drove it through the car wash twice on purpose, then came back to shake Tavita's hand.</p>",
      claims: [
        {
          id: "intermittent",
          sol: "10.RV.1.B",
          stem: "Which phrase from the passage best shows the meaning of intermittent?",
          choices: [
            { letter: "A", text: "three shops had already failed to fix it" },
            { letter: "B", text: "flickered on some nights and worked perfectly on others" },
            { letter: "C", text: "dropped the keys on the counter without saying hello" },
            { letter: "D", text: "the metal pins had turned green and crusty" }
          ],
          correct: "B"
        },
        {
          id: "rudimentary",
          sol: "10.RV.1.C",
          stem: "In sentence 6, the word rudimentary most nearly means —",
          choices: [
            { letter: "A", text: "basic and simple" },
            { letter: "B", text: "costly and rare" },
            { letter: "C", text: "broken and old" },
            { letter: "D", text: "borrowed and new" }
          ],
          correct: "A"
        },
        {
          id: "exasperated",
          sol: "10.RV.1.D",
          stem: "The author describes Ms. Farrow as exasperated rather than annoyed in sentence 2. Compared with annoyed, exasperated suggests that she —",
          choices: [
            { letter: "A", text: "is mildly bothered by a small delay" },
            { letter: "B", text: "is pleased to try a new shop" },
            { letter: "C", text: "is embarrassed about her old car" },
            { letter: "D", text: "has run out of patience after repeated failures" }
          ],
          correct: "D"
        },
        {
          id: "corroded",
          sol: "10.RV.1.A",
          stem: "The word corroded in sentence 11 shares a root with rodent, from a Latin word meaning to gnaw. This root suggests that corroded pins have been —",
          choices: [
            { letter: "A", text: "bent out of shape by force" },
            { letter: "B", text: "painted to prevent rust" },
            { letter: "C", text: "slowly eaten away" },
            { letter: "D", text: "chewed apart by mice" }
          ],
          correct: "C"
        },
        {
          id: "pragmatic",
          sol: "10.RV.1.C",
          stem: "As used in sentence 13, the word pragmatic most nearly means —",
          choices: [
            { letter: "A", text: "focused on practical results" },
            { letter: "B", text: "eager to try new ideas" },
            { letter: "C", text: "unwilling to spend any money" },
            { letter: "D", text: "worried about small details" }
          ],
          correct: "A"
        },
        {
          id: "scrupulous",
          sol: "10.RV.1.B",
          stem: "Sentence 7 says Tavita recorded the time, the temperature, and the lights for every test. These details help the reader understand that scrupulous means —",
          choices: [
            { letter: "A", text: "quick and confident" },
            { letter: "B", text: "extremely careful and thorough" },
            { letter: "C", text: "secretive and quiet" },
            { letter: "D", text: "bored and distracted" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "g10-rv-c65-pondlesson",
      family: "G10",
      title: "First Time on the Pond",
      kind: "Vocabulary · 10.RV",
      blurb: "A cousin's patient lesson on a frozen pond, one fall at a time.",
      level: 1,
      passage:
        "<p>" + N(1) + "Bilal had never stood on skates before, and his first steps onto the frozen pond were <strong>tentative</strong>, each foot testing the ice as if it might crack. " +
        N(2) + "His cousin Farida, who had skated since she was five, glided backward in front of him. " +
        N(3) + "\"Every <strong>novice</strong> looks like that,\" she said. " +
        N(4) + "\"I did too, once.\"</p>" +
        "<p>" + N(5) + "Bilal's balance was <strong>precarious</strong>; his arms windmilled, and his skates slid in two different directions. " +
        N(6) + "He fell four times in ten minutes. " +
        N(7) + "Each time, Farida helped him up without laughing, and Bilal tried to keep his <strong>composure</strong>, though his cheeks burned. " +
        N(8) + "The wind was <strong>relentless</strong>, pushing against them without a single pause. " +
        N(9) + "Farida showed him how to bend his knees and lean forward slightly, like someone about to sit in a chair that isn't there. " +
        N(10) + "She skated beside him, holding his elbow, then only his sleeve, then nothing at all.</p>" +
        "<p>" + N(11) + "Near the end of the hour, Bilal pushed off and coasted almost ten feet before he realized Farida had let go. " +
        N(12) + "He didn't fall. " +
        N(13) + "His mood was suddenly <strong>buoyant</strong>, and he laughed so loudly that a man ice fishing across the pond looked up. " +
        N(14) + "On the walk home, Bilal asked whether they could come back tomorrow. " +
        N(15) + "Farida pretended to think about it, then said yes before he could ask again.</p>",
      claims: [
        {
          id: "tentative",
          sol: "10.RV.1.C",
          stem: "In sentence 1, the word tentative most nearly means —",
          choices: [
            { letter: "A", text: "quick and bold" },
            { letter: "B", text: "hesitant and unsure" },
            { letter: "C", text: "heavy and loud" },
            { letter: "D", text: "graceful and smooth" }
          ],
          correct: "B"
        },
        {
          id: "precarious",
          sol: "10.RV.1.B",
          stem: "Which phrase from the passage best helps explain why Bilal's balance is called precarious?",
          choices: [
            { letter: "A", text: "glided backward in front of him" },
            { letter: "B", text: "holding his elbow, then only his sleeve" },
            { letter: "C", text: "his skates slid in two different directions" },
            { letter: "D", text: "said yes before he could ask again" }
          ],
          correct: "C"
        },
        {
          id: "novice",
          sol: "10.RV.1.A",
          stem: "The word novice in sentence 3 shares the Latin root nov-, meaning new, with novel and renovate. Based on this root, a novice is —",
          choices: [
            { letter: "A", text: "a beginner" },
            { letter: "B", text: "a coach" },
            { letter: "C", text: "a champion" },
            { letter: "D", text: "a judge" }
          ],
          correct: "A"
        },
        {
          id: "relentless",
          sol: "10.RV.1.A",
          stem: "The word relentless in sentence 8 is built from relent, meaning to let up, and the suffix -less, meaning without. Based on these parts, relentless means —",
          choices: [
            { letter: "A", text: "gentle and warm" },
            { letter: "B", text: "sudden and brief" },
            { letter: "C", text: "cold and wet" },
            { letter: "D", text: "never letting up" }
          ],
          correct: "D"
        },
        {
          id: "buoyant",
          sol: "10.RV.1.D",
          stem: "The author describes Bilal's mood as buoyant rather than happy in sentence 13. Compared with happy, buoyant suggests a feeling that is —",
          choices: [
            { letter: "A", text: "calm and sleepy" },
            { letter: "B", text: "light and lifted up" },
            { letter: "C", text: "proud and boastful" },
            { letter: "D", text: "nervous and shaky" }
          ],
          correct: "B"
        },
        {
          id: "composure",
          sol: "10.RV.1.B",
          stem: "Sentence 7 says Bilal tried to keep his composure though his cheeks burned. This detail suggests that composure means —",
          choices: [
            { letter: "A", text: "a warm layer of winter clothing" },
            { letter: "B", text: "physical strength in the legs" },
            { letter: "C", text: "a quick sense of humor" },
            { letter: "D", text: "calm control of one's feelings" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-dsr-c65-filters",
      family: "G10",
      title: "Clear Is Not Clean",
      kind: "Paired texts · 10.DSR",
      blurb: "A student's journal about a water filter project, paired with the judge's scoring notes.",
      level: 2,
      passage:
        "<p><strong>Text 1 — From Mateo Lindgren's Project Journal</strong></p>" +
        "<p>" + N(1) + "My water filter project is finished, and I am still not sure it worked. " +
        N(2) + "I built three filters from sand, gravel, and charcoal, and I poured the same muddy pond water through each one. " +
        N(3) + "Filter C produced the clearest water, but clear is not the same as clean, and I had no way to test for bacteria. " +
        N(4) + "I wrote that limit on my display in red marker so no one would think I was claiming the water was safe to drink. " +
        N(5) + "My friend Dario said the red marker made my project look weak. " +
        N(6) + "Maybe he is right. " +
        N(7) + "But I would rather a judge know exactly what I measured than imagine I measured more. " +
        N(8) + "Tomorrow I find out whether that choice costs me.</p>" +
        "<p><strong>Text 2 — Judge's Scoring Notes, Project 47</strong></p>" +
        "<p>" + N(9) + "The student asks a clear question and uses a reasonable design, testing three filters with identical water samples. " +
        N(10) + "Clarity was measured with a homemade turbidity tube, and results are recorded in a well-organized table. " +
        N(11) + "The display openly states that the project did not test for bacteria, and this is exactly the kind of honest limitation we hope to see. " +
        N(12) + "Many projects this year claimed their water was drinkable without any evidence. " +
        N(13) + "A suggested next step is to partner with the high school biology lab to culture samples. " +
        N(14) + "Design and method earns 36 of 40 points, and data analysis earns 22 of 25. " +
        N(15) + "Overall, this is one of the most scientifically mature projects at the fair, and I recommend it for the regional round.</p>",
      claims: [
        {
          id: "agree",
          sol: "10.DSR.D",
          stem: "On which point do Mateo's journal and the judge's notes agree?",
          choices: [
            { letter: "A", text: "Filter C made the water safe to drink." },
            { letter: "B", text: "Red marker makes a display look weak." },
            { letter: "C", text: "A project should state clearly what it did not test." },
            { letter: "D", text: "Pond water is too muddy for a fair project." }
          ],
          correct: "C"
        },
        {
          id: "worry",
          sol: "10.DSR.E",
          stem: "Using both texts, a reader can best conclude that the worry Mateo expresses in sentence 8 —",
          choices: [
            { letter: "A", text: "was unfounded, since the judge praised that choice" },
            { letter: "B", text: "was correct, since the judge lowered his score" },
            { letter: "C", text: "was shared by the judge, who disliked the marker" },
            { letter: "D", text: "was ignored, since the judge never saw the display" }
          ],
          correct: "A"
        },
        {
          id: "selecttwo",
          sol: "10.DSR.D",
          stem: "Select TWO sentences, one from each text, that together show the red-marker note was a strength rather than a weakness.",
          choices: [
            { letter: "A", text: "Sentence 5: My friend Dario said the red marker made my project look weak." },
            { letter: "B", text: "Sentence 4: I wrote that limit on my display in red marker." },
            { letter: "C", text: "Sentence 11: This is exactly the kind of honest limitation we hope to see." },
            { letter: "D", text: "Sentence 14: Design and method earns 36 of 40 points." }
          ],
          correct: ["B", "C"]
        },
        {
          id: "others",
          sol: "10.DSR.E",
          stem: "How does sentence 12 in Text 2 add to the reader's understanding of Mateo's decision in Text 1?",
          choices: [
            { letter: "A", text: "It shows that Mateo copied another student's display." },
            { letter: "B", text: "It proves that Mateo's water really was drinkable." },
            { letter: "C", text: "It explains why Dario entered a different project." },
            { letter: "D", text: "It shows that his honesty set him apart from others." }
          ],
          correct: "D"
        },
        {
          id: "turbidity",
          sol: "10.RI.1.B",
          stem: "According to Text 2, how was the clarity of the filtered water measured?",
          choices: [
            { letter: "A", text: "by sending samples to a biology lab" },
            { letter: "B", text: "with a homemade turbidity tube" },
            { letter: "C", text: "by tasting each of the samples" },
            { letter: "D", text: "with a kit that tests for bacteria" }
          ],
          correct: "B"
        },
        {
          id: "journaltone",
          sol: "10.RI.2.C",
          stem: "The tone of Mateo's journal entry is best described as —",
          choices: [
            { letter: "A", text: "uncertain but principled" },
            { letter: "B", text: "proud and boastful" },
            { letter: "C", text: "angry and resentful" },
            { letter: "D", text: "careless and bored" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-dsr-c65-nightowls",
      family: "G10",
      title: "Six Calls a Night",
      kind: "Paired texts · 10.DSR",
      blurb: "A station director ends a midnight call-in show; one of its callers writes back.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Memo From the WPLM Station Director</strong></p>" +
        "<p>" + N(1) + "To all WPLM volunteers: beginning June 1, Night Owls, our midnight call-in program, will be replaced by automated music from midnight to 5 a.m. " +
        N(2) + "This decision was not easy. " +
        N(3) + "Our records show that the program averages only six calls per night, and our overnight electricity and staffing costs have risen nearly 30 percent in two years. " +
        N(4) + "Automated programming will let us move those funds to our daytime news coverage, which reaches far more listeners across the county every day. " +
        N(5) + "I know many of you have given up late nights for this show, and I am grateful for every one of them. " +
        N(6) + "Please direct any questions to me, Lorraine Castellanos, at the front office.</p>" +
        "<p><strong>Text 2 — A Letter From Listener Walt Szymanski</strong></p>" +
        "<p>" + N(7) + "Ms. Castellanos, I am one of your six calls. " +
        N(8) + "I drive a bread truck between two and five in the morning, and Night Owls is the only voice on my route that answers back. " +
        N(9) + "Six calls a night may sound small, but you are not counting the people who listen without calling: the nurses on break, the bakers, the man who sweeps the bus station. " +
        N(10) + "I understand that electricity costs money. " +
        N(11) + "But a machine playing songs cannot tell me when the bridge is icy, the way your host did last February. " +
        N(12) + "If the show must change, please consider shortening it rather than ending it. " +
        N(13) + "Two hours of a real person would still mean something to those of us awake while the city sleeps.</p>",
      claims: [
        {
          id: "differ",
          sol: "10.DSR.D",
          stem: "The memo and the letter differ mainly in how they interpret —",
          choices: [
            { letter: "A", text: "the cost of daytime news coverage" },
            { letter: "B", text: "the meaning of six calls per night" },
            { letter: "C", text: "the date the program will end" },
            { letter: "D", text: "the work of the station's volunteers" }
          ],
          correct: "B"
        },
        {
          id: "challenge",
          sol: "10.DSR.E",
          stem: "Which sentence from Text 1 does Walt Szymanski most directly challenge in sentence 9?",
          choices: [
            { letter: "A", text: "Sentence 2: This decision was not easy." },
            { letter: "B", text: "Sentence 5: I know many of you have given up late nights for this show." },
            { letter: "C", text: "Sentence 6: Please direct any questions to me at the front office." },
            { letter: "D", text: "Sentence 3: The program averages only six calls per night." }
          ],
          correct: "D"
        },
        {
          id: "compromise",
          sol: "10.DSR.E",
          stem: "Based on both texts, which plan would best address the concerns of both writers?",
          choices: [
            { letter: "A", text: "ending all daytime news to pay for Night Owls" },
            { letter: "B", text: "replacing every program with automated music" },
            { letter: "C", text: "keeping a shorter live show and automating the rest" },
            { letter: "D", text: "asking Walt to host the program himself" }
          ],
          correct: "C"
        },
        {
          id: "bothaccept",
          sol: "10.DSR.D",
          stem: "Select TWO statements that both Lorraine Castellanos and Walt Szymanski would most likely accept.",
          choices: [
            { letter: "A", text: "Running the overnight program costs the station money." },
            { letter: "B", text: "Automated music can do everything a live host does." },
            { letter: "C", text: "Some listeners do call the program during the night." },
            { letter: "D", text: "Daytime news matters less than the overnight show." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "icybridge",
          sol: "10.RI.1.C",
          stem: "Walt includes the example of the icy bridge in sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "complain about the city's road crews" },
            { letter: "B", text: "show a service a live host gives that music cannot" },
            { letter: "C", text: "explain why he drives a bread truck at night" },
            { letter: "D", text: "prove that winter is the station's busiest season" }
          ],
          correct: "B"
        },
        {
          id: "lettertone",
          sol: "10.RI.2.C",
          stem: "The tone of Walt Szymanski's letter is best described as —",
          choices: [
            { letter: "A", text: "furious and threatening" },
            { letter: "B", text: "cheerful and joking" },
            { letter: "C", text: "formal and indifferent" },
            { letter: "D", text: "respectful but persuasive" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-dsr-c65-eastgate",
      family: "G10",
      title: "The Eastgate Rink",
      kind: "Paired texts · 10.DSR",
      blurb: "A news brief about a rink closing for repairs, and a young skater's blog about the same news.",
      level: 1,
      passage:
        "<p><strong>Text 1 — Lakeview Weekly: Eastgate Rink to Close for Repairs</strong></p>" +
        "<p>" + N(1) + "The Eastgate Community Rink will close on January 8 for at least six weeks while crews replace a refrigeration pipe that burst during last week's warm spell. " +
        N(2) + "Parks director Owen Halvorsen said the pipe was more than forty years old. " +
        N(3) + "\"We have patched it for a decade,\" he said. " +
        N(4) + "\"This time the patch will not hold.\" " +
        N(5) + "The repair is expected to cost $85,000, paid from the city's emergency maintenance fund. " +
        N(6) + "The rink, which opened in 1981, serves more than 9,000 skaters each winter. " +
        N(7) + "Youth hockey games will move to the Fairmont arena, about twenty minutes away by car. " +
        N(8) + "Public skating will be suspended until the rink reopens, and season passes will be extended by the number of days lost.</p>" +
        "<p><strong>Text 2 — From a Skater's Blog, Edges and Ends</strong></p>" +
        "<p>" + N(9) + "I have skated at Eastgate every Saturday since I was seven. " +
        N(10) + "It is not a fancy rink. " +
        N(11) + "The boards are dented, the music speaker crackles, and the hot chocolate machine has been broken since I was nine. " +
        N(12) + "But it is twelve minutes from my house by bike, and Fairmont is twenty minutes by car, which my family does not have. " +
        N(13) + "So for six weeks, maybe more, I will not skate. " +
        N(14) + "I'm not angry at the city, because a burst pipe is a burst pipe. " +
        N(15) + "I just wish someone had replaced it before it broke, back when it only needed a patch. " +
        N(16) + "Until then, I'll be the kid pressing her face to the fence, watching the ice turn back to water.</p>",
      claims: [
        {
          id: "bothsay",
          sol: "10.DSR.D",
          stem: "Both the Lakeview Weekly article and the skater's blog agree that —",
          choices: [
            { letter: "A", text: "the rink will be closed for at least several weeks" },
            { letter: "B", text: "the city should have built a new rink years ago" },
            { letter: "C", text: "season passes will be extended for every skater" },
            { letter: "D", text: "the hot chocolate machine will finally be fixed" }
          ],
          correct: "A"
        },
        {
          id: "blogdiffer",
          sol: "10.DSR.D",
          stem: "How does the blog in Text 2 differ from the news article in Text 1?",
          choices: [
            { letter: "A", text: "It gives the exact cost of the repair." },
            { letter: "B", text: "It quotes the parks director at length." },
            { letter: "C", text: "It shows how the closing affects one skater." },
            { letter: "D", text: "It explains how refrigeration pipes work." }
          ],
          correct: "C"
        },
        {
          id: "fairmont",
          sol: "10.DSR.E",
          stem: "Using both texts, a reader can conclude that moving to the Fairmont arena will be hardest for —",
          choices: [
            { letter: "A", text: "the crews repairing the burst pipe" },
            { letter: "B", text: "skaters whose families do not have cars" },
            { letter: "C", text: "hockey players who live near Fairmont" },
            { letter: "D", text: "the city's emergency maintenance fund" }
          ],
          correct: "B"
        },
        {
          id: "patch",
          sol: "10.DSR.E",
          stem: "The blogger's wish in sentence 15 most directly responds to which statement in Text 1?",
          choices: [
            { letter: "A", text: "Sentence 6: The rink serves more than 9,000 skaters each winter." },
            { letter: "B", text: "Sentence 7: Youth hockey games will move to the Fairmont arena." },
            { letter: "C", text: "Sentence 5: The repair is expected to cost $85,000." },
            { letter: "D", text: "Sentence 3: We have patched it for a decade." }
          ],
          correct: "D"
        },
        {
          id: "fair",
          sol: "10.RL.1.C",
          stem: "Sentence 14 characterizes the blogger as someone who —",
          choices: [
            { letter: "A", text: "blames the city for the burst pipe" },
            { letter: "B", text: "accepts the situation fairly despite her disappointment" },
            { letter: "C", text: "plans to complain at the next city meeting" },
            { letter: "D", text: "does not really care about skating" }
          ],
          correct: "B"
        },
        {
          id: "fence",
          sol: "10.RL.2.B",
          stem: "The final image in sentence 16, watching the ice turn back to water, creates a mood that is —",
          choices: [
            { letter: "A", text: "wistful and a little sad" },
            { letter: "B", text: "angry and rebellious" },
            { letter: "C", text: "playful and silly" },
            { letter: "D", text: "frightened and tense" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c65-lastskate",
      family: "G10",
      title: "After the Last Skate",
      kind: "Poetry · 10.RL",
      blurb: "Fourteen lines: a rink worker reads the marks left in the ice before the machine wipes them away.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "The lights go off in sections, row by row,<br>" +
        L(2) + "until the rink is one long breath of blue.<br>" +
        L(3) + "The skaters' shouts have drifted out the door<br>" +
        L(4) + "like smoke that never knew which way to go.<br>" +
        L(5) + "Ten thousand lines are carved across the floor,<br>" +
        L(6) + "each one a sentence someone started, then let go:<br>" +
        L(7) + "a child's first wobble, a racer's sharpened bend,<br>" +
        L(8) + "a figure eight that circled back to start.<br>" +
        L(9) + "I am the one who stays to sweep the stands.<br>" +
        L(10) + "I read the ice the way you'd read a card<br>" +
        L(11) + "left on a table, written in a hurry,<br>" +
        L(12) + "signed by strangers I will never meet.<br>" +
        L(13) + "Tomorrow the machine will smooth the story.<br>" +
        L(14) + "Tonight I let it stay, unfinished, at my feet." +
        "</p>",
      claims: [
        {
          id: "sentences",
          sol: "10.RL.2.A",
          stem: "In lines 5 and 6, the speaker compares the marks in the ice to —",
          choices: [
            { letter: "A", text: "smoke drifting out of a door" },
            { letter: "B", text: "sentences people began and left unfinished" },
            { letter: "C", text: "rows of lights switching off" },
            { letter: "D", text: "a card signed by close friends" }
          ],
          correct: "B"
        },
        {
          id: "breath",
          sol: "10.RL.2.B",
          stem: "The image in line 2, one long breath of blue, creates a mood that is —",
          choices: [
            { letter: "A", text: "hushed and still" },
            { letter: "B", text: "bright and festive" },
            { letter: "C", text: "cold and hostile" },
            { letter: "D", text: "loud and crowded" }
          ],
          correct: "A"
        },
        {
          id: "line9",
          sol: "10.RL.3.A",
          stem: "How does line 9 of After the Last Skate function in the poem?",
          choices: [
            { letter: "A", text: "It ends the description of the skaters' marks." },
            { letter: "B", text: "It explains why the lights go off in sections." },
            { letter: "C", text: "It reveals that the speaker is a skater who fell." },
            { letter: "D", text: "It introduces the speaker as a worker who stays behind." }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which statement best expresses a theme of the poem about the rink at closing?",
          choices: [
            { letter: "A", text: "Machines will one day replace human workers." },
            { letter: "B", text: "Skating is a sport best enjoyed alone." },
            { letter: "C", text: "Ordinary traces of others' lives can be worth noticing." },
            { letter: "D", text: "Strangers should sign their names to their work." }
          ],
          correct: "C"
        },
        {
          id: "closingtone",
          sol: "10.RL.2.C",
          stem: "The tone of lines 13 and 14 of the rink poem is best described as —",
          choices: [
            { letter: "A", text: "tender and reflective" },
            { letter: "B", text: "impatient and annoyed" },
            { letter: "C", text: "fearful and uneasy" },
            { letter: "D", text: "proud and boastful" }
          ],
          correct: "A"
        },
        {
          id: "sharpened",
          sol: "10.RV.1.C",
          stem: "In line 7, the word sharpened, describing a racer's bend, most nearly means —",
          choices: [
            { letter: "A", text: "dangerous and reckless" },
            { letter: "B", text: "slow and wide" },
            { letter: "C", text: "crooked and wobbly" },
            { letter: "D", text: "tight and precise" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "g10-rl-c65-betweenstations",
      family: "G10",
      title: "Between Stations",
      kind: "Poetry · 10.RL",
      blurb: "Fourteen lines: a grandfather turns the dial night after night, listening for home.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My grandfather coaxed the old receiver, slow,<br>" +
        L(2) + "his thumb on the dial like a safecracker's thumb,<br>" +
        L(3) + "listening past the static for a voice<br>" +
        L(4) + "from a country he had left at twenty-one.<br>" +
        L(5) + "Most nights he found only the sea of hiss,<br>" +
        L(6) + "a crackle like grease in a pan, a whistle, a hum.<br>" +
        L(7) + "Still, he kept turning, a quarter inch, then less,<br>" +
        L(8) + "as if the dial had a lock and he the sum.<br>" +
        L(9) + "Once, near midnight, a woman's voice came through,<br>" +
        L(10) + "reading the weather for a coast I'd never see.<br>" +
        L(11) + "He didn't move. He didn't call me over.<br>" +
        L(12) + "He only shut his eyes, and I could see<br>" +
        L(13) + "the rain she promised for a village far away<br>" +
        L(14) + "come falling, somehow, on the room and him and me." +
        "</p>",
      claims: [
        {
          id: "safecracker",
          sol: "10.RL.2.A",
          stem: "In line 2, comparing the grandfather's thumb to a safecracker's thumb suggests that he —",
          choices: [
            { letter: "A", text: "is trying to break the radio" },
            { letter: "B", text: "is hiding something from the speaker" },
            { letter: "C", text: "turns the dial with delicate, patient care" },
            { letter: "D", text: "has injured his hand on the dial" }
          ],
          correct: "C"
        },
        {
          id: "persist",
          sol: "10.RL.1.C",
          stem: "Lines 7 and 8 characterize the grandfather as —",
          choices: [
            { letter: "A", text: "patient and persistent" },
            { letter: "B", text: "careless and hurried" },
            { letter: "C", text: "angry and frustrated" },
            { letter: "D", text: "bored and distracted" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "10.RL.2.C",
          stem: "How does the tone of lines 9 through 14 differ from the tone of lines 5 through 8?",
          choices: [
            { letter: "A", text: "It moves from hope to bitter disappointment." },
            { letter: "B", text: "It moves from patient searching to quiet wonder." },
            { letter: "C", text: "It moves from calm to sudden alarm." },
            { letter: "D", text: "It moves from joy to boredom." }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "10.RL.1.A",
          stem: "Which idea do the final lines of Between Stations most clearly develop?",
          choices: [
            { letter: "A", text: "Old radios work better than new ones." },
            { letter: "B", text: "Weather reports are rarely accurate." },
            { letter: "C", text: "Grandparents should share stories aloud." },
            { letter: "D", text: "A small sound from home can create a shared moment." }
          ],
          correct: "D"
        },
        {
          id: "motive",
          sol: "10.RL.1.B",
          stem: "Line 4 helps explain that the grandfather keeps searching the dial because he —",
          choices: [
            { letter: "A", text: "wants to fix the static in the receiver" },
            { letter: "B", text: "needs a weather report for his job" },
            { letter: "C", text: "is trying to teach the speaker about radios" },
            { letter: "D", text: "hopes to hear a voice from the country he left" }
          ],
          correct: "D"
        },
        {
          id: "coaxed",
          sol: "10.RV.1.D",
          stem: "The poet says the grandfather coaxed the receiver rather than tuned it. Compared with tuned, coaxed suggests that he —",
          choices: [
            { letter: "A", text: "handled it gently, as if persuading it" },
            { letter: "B", text: "forced it roughly until it worked" },
            { letter: "C", text: "ignored it most of the time" },
            { letter: "D", text: "followed the steps in a manual" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "g10-rl-c65-stationwagon",
      family: "G10",
      title: "The Green Wagon",
      kind: "Drama · 10.RL",
      blurb: "A salvage yard offer, a jammed tire machine, and a father who wants to hear an old car start one more time.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A small family garage at dusk, where an old green station wagon sits with its hood up while BAYO ADEYEMI, in his fifties, leans into the engine and his daughter FOLAKE, seventeen, enters with a clipboard.</em></p>" +
        "<p><strong>FOLAKE:</strong> " + N(2) + "Dad, the man from the salvage yard called again. " +
        N(3) + "He'll give us eight hundred for the wagon if we tow it Friday.</p>" +
        "<p><strong>BAYO:</strong> <em>(not looking up)</em> " + N(4) + "Hand me the ten-millimeter socket.</p>" +
        "<p><strong>FOLAKE:</strong> " + N(5) + "That's not an answer.</p>" +
        "<p><strong>BAYO:</strong> " + N(6) + "It's the answer to the question I asked.</p>" +
        "<p><strong>FOLAKE:</strong> <em>(handing him the socket)</em> " + N(7) + "Eight hundred dollars is half of a new tire machine. " +
        N(8) + "Ours jams twice a week. " +
        N(9) + "We lose customers when it jams.</p>" +
        "<p><strong>BAYO:</strong> " + N(10) + "Your grandmother drove this car to my first day of school. " +
        N(11) + "She drove it to my wedding. " +
        N(12) + "She drove it here, to this garage, the day we opened, and parked it right where it sits now.</p>" +
        "<p><strong>FOLAKE:</strong> <em>(softer)</em> " + N(13) + "I know. " +
        N(14) + "But it hasn't run in three years, Dad.</p>" +
        "<p><strong>BAYO:</strong> <em>(He straightens, wipes his hands, and looks at the car for a long moment.)</em> " + N(15) + "It doesn't need to run. " +
        N(16) + "It needs to be finished.</p>" +
        "<p><strong>FOLAKE:</strong> " + N(17) + "What does that mean?</p>" +
        "<p><strong>BAYO:</strong> " + N(18) + "It means I want to hear it start one more time before anyone tows it anywhere. " +
        "<em>(He holds out the socket.)</em> " + N(19) + "You have smaller hands. " +
        N(20) + "The bolt behind the alternator.</p>" +
        "<p><em>" + N(21) + "FOLAKE hesitates, then sets down the clipboard and takes the socket.</em></p>" +
        "<p><strong>FOLAKE:</strong> " + N(22) + "If it starts, we call the salvage yard?</p>" +
        "<p><strong>BAYO:</strong> " + N(23) + "If it starts, we talk.</p>",
      claims: [
        {
          id: "conflict",
          sol: "10.RL.1.B",
          stem: "The central conflict between Bayo and Folake is best described as a struggle between —",
          choices: [
            { letter: "A", text: "the garage's practical needs and the car's family meaning" },
            { letter: "B", text: "Folake's wish to drive and Bayo's fear of accidents" },
            { letter: "C", text: "the salvage yard's price and a better offer elsewhere" },
            { letter: "D", text: "Bayo's pride and his lack of mechanical skill" }
          ],
          correct: "A"
        },
        {
          id: "dodge",
          sol: "10.RL.1.C",
          stem: "Bayo's reply in sentence 6 characterizes him as —",
          choices: [
            { letter: "A", text: "confused about what Folake asked" },
            { letter: "B", text: "eager to sell the car quickly" },
            { letter: "C", text: "deliberately avoiding the topic" },
            { letter: "D", text: "angry at the salvage yard" }
          ],
          correct: "C"
        },
        {
          id: "clipboard",
          sol: "10.RL.3.A",
          stem: "The stage direction in sentence 21, in which Folake sets down the clipboard, mainly serves to —",
          choices: [
            { letter: "A", text: "show that she has decided to quit the garage" },
            { letter: "B", text: "show her setting business aside to join her father" },
            { letter: "C", text: "suggest that she has lost the salvage yard's number" },
            { letter: "D", text: "reveal that she does not know how to use a socket" }
          ],
          correct: "B"
        },
        {
          id: "finished",
          sol: "10.RL.2.C",
          stem: "In sentences 15 and 16, Bayo says the car does not need to run but needs to be finished. He most nearly means that —",
          choices: [
            { letter: "A", text: "the car should be painted before it is sold" },
            { letter: "B", text: "the car is already worth more than eight hundred" },
            { letter: "C", text: "Folake should finish her own work first" },
            { letter: "D", text: "he wants to complete his work on it before letting go" }
          ],
          correct: "D"
        },
        {
          id: "talk",
          sol: "10.RL.1.A",
          stem: "Which theme is best developed by the final exchange between Bayo and Folake in sentences 22 and 23?",
          choices: [
            { letter: "A", text: "Children should always obey their parents." },
            { letter: "B", text: "Old cars are never worth repairing." },
            { letter: "C", text: "Money matters more than memories." },
            { letter: "D", text: "Compromise can begin with a shared task." }
          ],
          correct: "D"
        },
        {
          id: "softer",
          sol: "10.RL.2.B",
          stem: "The stage direction (softer) before sentence 13 signals that Folake's tone has become —",
          choices: [
            { letter: "A", text: "sarcastic and cold" },
            { letter: "B", text: "gentler and more sympathetic" },
            { letter: "C", text: "louder and more demanding" },
            { letter: "D", text: "bored and impatient" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
