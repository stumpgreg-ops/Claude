/* SOL Labyrinth — Grade 9 mid-tier packs (v5.15 expansion, content44): a mechanic's garage, a radio station,
 * ice skating and a mountain rescue team. Original text only; no VDOE / copyrighted material.
 * Loaded after content.js; pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  var L = function (i) { return '<span class="n">' + i + '</span> '; };     // numbered poem line

  var PACKS = [
    /* ───────────── 1. Literary · garage (level 1) ───────────── */
    {
      id: "g9-rl-c44-singing-car",
      family: "G9",
      title: "The Singing Hatchback",
      kind: "Literary · 9.RL",
      blurb: "Nadia has only swept her uncle's garage, until a customer's car starts to sing.",
      level: 1,
      passage:
        "<p>" + N(1) + "Every Saturday for three months, Nadia Okafor had swept the floor of her uncle's garage, stacked the oil filters by size, and kept her questions to herself. " +
        N(2) + "Uncle Emeka said a good mechanic learned with her eyes first and her hands later, and Nadia was tired of waiting for later. " +
        N(3) + "On a gray morning in March, Mrs. Lindqvist rolled her old green hatchback into the second bay and announced that it was \"singing\" at her. " +
        N(4) + "Ray, the senior mechanic, drove it around the block twice and came back shaking his head. " +
        N(5) + "\"Nothing,\" he said. \"Quiet as a library.\" " +
        N(6) + "Mrs. Lindqvist frowned. " +
        N(7) + "\"It only sings in the morning,\" she insisted, \"when I back out of my driveway.\"</p>" +
        "<p>" + N(8) + "Nadia set down her broom. " +
        N(9) + "The car had been sitting in the cold lot for an hour before Ray warmed it up for his test drive. " +
        N(10) + "She asked, as politely as she could manage, whether she could try one thing. " +
        N(11) + "Ray shrugged and tossed her the keys, which she had not expected. " +
        N(12) + "Nadia let the engine idle without revving it, then rolled the hatchback slowly backward over the lip of the bay door. " +
        N(13) + "A thin squeal rose from the front wheel, sharp as a teakettle, and then faded as the car settled. " +
        N(14) + "Ray crouched beside the tire with a flashlight. " +
        N(15) + "After a long minute, he pointed to a rubber bushing on the suspension that had dried out and cracked. " +
        N(16) + "\"Cold rubber gets stiff,\" he said. \"Once it warms up, it hides.\" " +
        N(17) + "He did not say she was right, but he let her hold the light while he worked.</p>" +
        "<p>" + N(18) + "When Uncle Emeka returned from the parts store, Ray told him the whole story without leaving anything out. " +
        N(19) + "Her uncle listened, nodded once, and walked to his toolbox. " +
        N(20) + "He came back with a mechanic's stethoscope, its rubber tubes worn soft from years of use, and hung it around Nadia's neck. " +
        N(21) + "\"Eyes first,\" he said, \"and then ears. Hands can wait one more week.\" " +
        N(22) + "Nadia laughed, but she did not take the stethoscope off until closing time." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does the story of Nadia and the hatchback best develop?",
          choices: [
            { letter: "A", text: "Older workers rarely listen to the ideas of beginners." },
            { letter: "B", text: "Paying close attention to details can earn a person trust." },
            { letter: "C", text: "Customers usually understand their cars better than mechanics." },
            { letter: "D", text: "Learning a trade is mostly a matter of waiting patiently." }
          ],
          correct: "B"
        },
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Nadia in sentences 8 through 12?",
          choices: [
            { letter: "A", text: "She is impatient and ignores the senior mechanic's advice." },
            { letter: "B", text: "She is nervous and hopes someone else will solve the problem." },
            { letter: "C", text: "She is bored with sweeping and wants to leave the garage early." },
            { letter: "D", text: "She is observant and respectful but determined to help." }
          ],
          correct: "D"
        },
        {
          id: "simile",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 13, comparing the squeal to a teakettle mainly emphasizes that the sound is —",
          choices: [
            { letter: "A", text: "high and piercing" },
            { letter: "B", text: "low and rumbling" },
            { letter: "C", text: "warm and pleasant" },
            { letter: "D", text: "loud and constant" }
          ],
          correct: "A"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentences 9 and 16, why did Ray's test drive fail to reveal the noise?",
          choices: [
            { letter: "A", text: "He drove too quickly to hear anything from the wheels." },
            { letter: "B", text: "The bushing had already been replaced by another worker." },
            { letter: "C", text: "He had warmed the car, so the rubber part softened and went quiet." },
            { letter: "D", text: "Mrs. Lindqvist had described the wrong wheel to him." }
          ],
          correct: "C"
        },
        {
          id: "dialogue",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Uncle Emeka's words in sentence 21 mainly reveal that he —",
          choices: [
            { letter: "A", text: "is proud of Nadia but still wants her to learn step by step" },
            { letter: "B", text: "is annoyed that Nadia drove a customer's car without asking" },
            { letter: "C", text: "plans to hire Nadia as a full mechanic the next morning" },
            { letter: "D", text: "thinks Ray should have found the problem much sooner" }
          ],
          correct: "A"
        },
        {
          id: "word",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 3, Mrs. Lindqvist's word \"singing\" most nearly refers to —",
          choices: [
            { letter: "A", text: "the radio playing music too loudly" },
            { letter: "B", text: "an odd, repeated noise from the car" },
            { letter: "C", text: "her own habit of humming while driving" },
            { letter: "D", text: "a warning bell from the dashboard" }
          ],
          correct: "B"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the narrator follows Nadia closely, the reader learns —",
          choices: [
            { letter: "A", text: "exactly what Ray privately thinks of Nadia's idea" },
            { letter: "B", text: "why Mrs. Lindqvist chose this particular garage" },
            { letter: "C", text: "how long Uncle Emeka has owned the business" },
            { letter: "D", text: "what Nadia notices about the car sitting in the cold" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 2. Literary · radio station (level 2) ───────────── */
    {
      id: "g9-rl-c44-dead-air",
      family: "G9",
      title: "Dead Air",
      kind: "Literary · 9.RL",
      blurb: "On his first solo overnight shift, Joaquin's radio station suddenly goes silent.",
      level: 2,
      passage:
        "<p>" + N(1) + "The rule at KVLR was simple: whatever happens, never let the station go silent. " +
        N(2) + "Joaquin Herrera had seen it on his first day, written on a sticky note above the microphone, and he heard it again from Mrs. Baca, the station manager, who said it the way other people said good night. " +
        N(3) + "Tonight was his first solo overnight shift, and so far the rule had been easy to follow, because a computer did most of the work. " +
        N(4) + "The automation system played songs, station IDs, and a recorded weather report in a loop until six in the morning; Joaquin only had to watch the screen and log each hour.</p>" +
        "<p>" + N(5) + "At 2:14 a.m., the screen froze. " +
        N(6) + "The song ended, and the meter on the board dropped to nothing, a flat line where sound should have been. " +
        N(7) + "Joaquin's stomach dropped with it. " +
        N(8) + "He stabbed at the restart button, but the computer only hummed and showed a spinning wheel. " +
        N(9) + "Somewhere out in the dark, people were hearing nothing at all.</p>" +
        "<p>" + N(10) + "He pulled the microphone toward him. " +
        N(11) + "His voice, when it came out, sounded thin and too young. " +
        N(12) + "\"This is KVLR, ninety-one point three, Las Piedras,\" he said. \"We're having a little trouble, so you're stuck with me for a minute.\" " +
        N(13) + "He read the weather from the printout on the desk: clear skies, a low of twenty-eight, wind out of the north. " +
        N(14) + "Then the phone line blinked. " +
        N(15) + "A trucker named Wendell was calling from a rest stop on the highway, and he wanted to know if the kid on the radio was all right. " +
        N(16) + "Joaquin admitted that he was not sure, and Wendell laughed and told him about the night his own truck had died in a snowstorm forty miles from the nearest town. " +
        N(17) + "For eleven minutes they talked about engines, diners, and the stars you could see when the headlights were off. " +
        N(18) + "By the time the computer finally rebooted, two more listeners had called just to say they were awake too.</p>" +
        "<p>" + N(19) + "Joaquin started the next song and sat back, his hands still shaking. " +
        N(20) + "In the log, under 2:14, he wrote \"equipment failure.\" " +
        N(21) + "Then, after a moment, he added a second line: \"Not alone out there.\"" +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best developed by Joaquin's experience during the overnight shift?",
          choices: [
            { letter: "A", text: "Facing a fear can reveal connections a person did not expect." },
            { letter: "B", text: "Machines are more reliable than people during emergencies." },
            { letter: "C", text: "Following a rule matters more than how a person feels." },
            { letter: "D", text: "Young workers should never be left alone on a night shift." }
          ],
          correct: "A"
        },
        {
          id: "detail",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The detail in sentence 9 about people out in the dark mainly emphasizes that Joaquin —",
          choices: [
            { letter: "A", text: "is afraid to be alone in the empty building" },
            { letter: "B", text: "wishes he had chosen a daytime shift instead" },
            { letter: "C", text: "feels responsible for listeners he cannot see" },
            { letter: "D", text: "doubts that anyone listens to the station at night" }
          ],
          correct: "C"
        },
        {
          id: "mood",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 6, the image of a flat line where sound should have been creates a mood that is —",
          choices: [
            { letter: "A", text: "calm and peaceful" },
            { letter: "B", text: "playful and light" },
            { letter: "C", text: "proud and hopeful" },
            { letter: "D", text: "alarming and empty" }
          ],
          correct: "D"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Readers can best infer that Wendell calls the station because he —",
          choices: [
            { letter: "A", text: "wants to request a song for the long drive" },
            { letter: "B", text: "hears the nervous voice and wants to help" },
            { letter: "C", text: "needs a report on the roads ahead of him" },
            { letter: "D", text: "plans to complain to the station manager" }
          ],
          correct: "B"
        },
        {
          id: "change",
          sol: "9.RL.1.C",
          sub: "9.RL.1.C.1",
          stem: "How does Joaquin change between sentence 11 and sentence 21?",
          choices: [
            { letter: "A", text: "He goes from trusting the computer to refusing to use it." },
            { letter: "B", text: "He goes from enjoying the job to planning to quit it." },
            { letter: "C", text: "He goes from feeling exposed to feeling linked to listeners." },
            { letter: "D", text: "He goes from respecting the rule to deciding it is foolish." }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the second line Joaquin writes in the log is best described as —",
          choices: [
            { letter: "A", text: "quietly grateful" },
            { letter: "B", text: "bitter and tired" },
            { letter: "C", text: "formal and dull" },
            { letter: "D", text: "boastful and loud" }
          ],
          correct: "A"
        },
        {
          id: "figure",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "Sentence 7 says Joaquin's stomach dropped along with the meter. This figurative statement mainly shows that —",
          choices: [
            { letter: "A", text: "he had skipped dinner before the overnight shift" },
            { letter: "B", text: "his fear rose the instant the sound disappeared" },
            { letter: "C", text: "the meter was broken before his shift began" },
            { letter: "D", text: "he felt relieved that the long night was over" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 3. Literary · ice skating (level 3) ───────────── */
    {
      id: "g9-rl-c44-figure-eight",
      family: "G9",
      title: "The First Pattern",
      kind: "Literary · 9.RL",
      blurb: "A year after an injury, Leila helps with a beginner skating class and remembers why she started.",
      level: 3,
      passage:
        "<p>" + N(1) + "For eight years, the ice had been a place where Leila Haddad was graded. " +
        N(2) + "Every jump earned a number, every wobble cost a fraction of a point, and every Saturday morning began with her coach's stopwatch clicking like a small, impatient insect. " +
        N(3) + "Then, last February, a landing went wrong, her ankle folded beneath her, and the doctors spoke in months instead of weeks. " +
        N(4) + "By the time the cast came off, her old training group had moved on to a new season, and Leila had stopped answering their messages.</p>" +
        "<p>" + N(5) + "Now she stood at the edge of the Riverside municipal rink in borrowed rental skates, holding a clipboard with six names on it. " +
        N(6) + "Her aunt had signed her up to help with the beginner class, insisting that Leila needed to be around ice \"without being on trial.\" " +
        N(7) + "The students were six and seven years old, bundled so thickly that they moved like small, determined mailboxes. " +
        N(8) + "Within five minutes, a girl named Pilar had fallen four times. " +
        N(9) + "Each time, she lay on her back for a moment, studied the ceiling, and then rolled onto her knees, exactly the way Leila had shown the group. " +
        N(10) + "She did not look at the coach for a score. " +
        N(11) + "She looked only at the ice ahead of her.</p>" +
        "<p>" + N(12) + "Near the end of class, Pilar tugged Leila's sleeve and asked if she could do \"a real trick.\" " +
        N(13) + "Leila hesitated. " +
        N(14) + "Her ankle was healed, the doctors said, but she had not tried anything harder than a crossover since the fall. " +
        N(15) + "Instead of a jump, she pushed off and traced a slow figure eight, the first pattern she had ever learned, back before anyone had given her a number. " +
        N(16) + "Her blades hissed softly, and the loops she left behind were clean and nearly perfect, though no one was writing them down. " +
        N(17) + "When she glided back, Pilar was clapping with both mittens. " +
        N(18) + "\"Can you teach me that one?\" she asked. " +
        N(19) + "Leila looked down at the two circles cut into the ice, already fading under the lights. " +
        N(20) + "\"That one is where everybody starts,\" she said, and she was surprised to find herself smiling." +
        "</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme does Leila's figure eight near the end of the story best support?",
          choices: [
            { letter: "A", text: "Injuries usually end an athlete's love of a sport." },
            { letter: "B", text: "Young children learn faster than older students do." },
            { letter: "C", text: "Hard work always leads to winning a competition." },
            { letter: "D", text: "Joy in an activity can return once judging is set aside." }
          ],
          correct: "D"
        },
        {
          id: "structure",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "The author begins with Leila's competitive past in sentences 1 through 4 mainly to —",
          choices: [
            { letter: "A", text: "contrast the pressure she felt then with the freedom of the final scene" },
            { letter: "B", text: "explain the scoring rules that judges use at competitions" },
            { letter: "C", text: "show that Leila still plans to return to her training group" },
            { letter: "D", text: "suggest that her coach was responsible for the injury" }
          ],
          correct: "A"
        },
        {
          id: "image",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 2, comparing the stopwatch to a small, impatient insect suggests that the stopwatch was —",
          choices: [
            { letter: "A", text: "old and likely to break at any moment" },
            { letter: "B", text: "a constant, irritating source of pressure" },
            { letter: "C", text: "a gift Leila treasured from her coach" },
            { letter: "D", text: "too quiet for the skaters to notice" }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Based on sentences 9 through 11, Pilar's falls most likely affect Leila because Pilar —",
          choices: [
            { letter: "A", text: "is the most talented skater in the beginner group" },
            { letter: "B", text: "reminds Leila of her own injury last February" },
            { letter: "C", text: "keeps trying without worrying about being judged" },
            { letter: "D", text: "refuses to follow the steps Leila demonstrated" }
          ],
          correct: "C"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the beginner class at the municipal rink affect Leila?",
          choices: [
            { letter: "A", text: "It lets her feel the ice again without the pressure of scores." },
            { letter: "B", text: "It convinces her that teaching is harder than competing." },
            { letter: "C", text: "It makes her regret ignoring her old training group." },
            { letter: "D", text: "It shows her that rental skates are unsafe for jumps." }
          ],
          correct: "A"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of the final scene in sentences 17 through 20 is best described as —",
          choices: [
            { letter: "A", text: "tense and uncertain" },
            { letter: "B", text: "sad and regretful" },
            { letter: "C", text: "warm and hopeful" },
            { letter: "D", text: "cold and distant" }
          ],
          correct: "C"
        },
        {
          id: "connote",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The aunt could have said Leila needed ice without being judged. Compared with judged, the phrase on trial (sentence 6) adds a sense that Leila's skating had felt —",
          choices: [
            { letter: "A", text: "like an easy game played among friends" },
            { letter: "B", text: "like a chore she had already outgrown" },
            { letter: "C", text: "like a show put on to please her aunt" },
            { letter: "D", text: "like a serious test with heavy stakes" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 4. Literary · mountain rescue (level 2) ───────────── */
    {
      id: "g9-rl-c44-split-rock",
      family: "G9",
      title: "Split Rock",
      kind: "Literary · 9.RL",
      blurb: "A trainee on a rescue team is stuck in the command van until a photo changes the search.",
      level: 2,
      passage:
        "<p>" + N(1) + "The command post for the Sawtooth Valley Search and Rescue team was a white van parked at the trailhead, and Amaru Quispe's job was to sit inside it and listen. " +
        N(2) + "At seventeen, he was the youngest volunteer on the roster, still a trainee, which meant the adults hiked into the mountains while he wrote down every radio call on a yellow pad. " +
        N(3) + "The missing hiker was Gerald Pruitt, a retired teacher who had gone out at dawn to photograph birds. " +
        N(4) + "Four teams were already sweeping the main trail with headlamps, their voices crackling in and out of the speaker.</p>" +
        "<p>" + N(5) + "Around nine, Mr. Pruitt's daughter, Colleen, knocked on the van door. " +
        N(6) + "Her hands were wrapped around a paper cup of coffee she had not touched. " +
        N(7) + "\"He sent me this at noon,\" she said, holding out her phone. " +
        N(8) + "The photo showed a narrow waterfall beside a boulder split cleanly down the middle, as if someone had dropped an axe on it. " +
        N(9) + "Amaru stared at the screen. " +
        N(10) + "He had seen that boulder before, on a training hike in June, but not on the main trail. " +
        N(11) + "It sat half a mile up the Larkspur Creek spur, a faint path that branched off where the trail crossed an old rockslide.</p>" +
        "<p>" + N(12) + "Outside, Dana Whitfield, the team leader, was bent over a map with two deputies. " +
        N(13) + "Amaru felt the trainee rule pressing on him: listen, write, don't interrupt. " +
        N(14) + "He stood, sat down, and stood again. " +
        N(15) + "Then he took the phone, walked out into the cold, and said, \"Excuse me, Dana. I think he took the spur.\" " +
        N(16) + "Dana studied the picture just long enough to recognize the split rock. " +
        N(17) + "\"Team Two,\" she said into her radio, \"turn around at the rockslide and take Larkspur.\" " +
        N(18) + "Forty minutes later, the speaker crackled: they had found Mr. Pruitt against a tree with a twisted knee, cold but talking.</p>" +
        "<p>" + N(19) + "Colleen cried into her coffee, and Amaru wrote the time on his pad because that was his job. " +
        N(20) + "Before the teams came down, Dana stepped into the van and picked up a marker. " +
        N(21) + "On the whiteboard, under the word CLUES, she wrote one line: \"Split rock, Quispe.\" " +
        N(22) + "\"Listening counts,\" she said, and went back out into the dark." +
        "</p>",
      claims: [
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which sentence best shows that Amaru struggles over whether to speak up?",
          choices: [
            { letter: "A", text: "Sentence 2, which explains that he records every radio call" },
            { letter: "B", text: "Sentence 10, which explains where he first saw the boulder" },
            { letter: "C", text: "Sentence 14, which shows him standing, sitting, and standing" },
            { letter: "D", text: "Sentence 19, which shows him writing the time on his pad" }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Sentences 10 and 11 suggest that the four teams had not found Mr. Pruitt because they —",
          choices: [
            { letter: "A", text: "were searching a trail he had already left" },
            { letter: "B", text: "had stopped searching once it grew dark" },
            { letter: "C", text: "could not hear one another on the radios" },
            { letter: "D", text: "were waiting for his daughter to arrive" }
          ],
          correct: "A"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the setting of the command van shape Amaru's part in the plot?",
          choices: [
            { letter: "A", text: "It makes him too cold to think clearly about the search." },
            { letter: "B", text: "It lets him hear the leader's plans before anyone else." },
            { letter: "C", text: "It allows him to see the whole valley from the trailhead." },
            { letter: "D", text: "It keeps him from searching, so he helps by noticing a clue." }
          ],
          correct: "D"
        },
        {
          id: "simile",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.2",
          stem: "In sentence 8, saying the boulder looked as if someone had dropped an axe on it mainly helps the reader see that the rock —",
          choices: [
            { letter: "A", text: "was dangerous for hikers to climb on" },
            { letter: "B", text: "had a sharp, unusual crack easy to recognize" },
            { letter: "C", text: "had recently been damaged by a work crew" },
            { letter: "D", text: "was too small to be seen from the trail" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best supported by Dana's note on the whiteboard and her final words?",
          choices: [
            { letter: "A", text: "Rules exist mainly to keep young people out of danger." },
            { letter: "B", text: "Careful attention can matter as much as physical effort." },
            { letter: "C", text: "Family members often slow down a rescue operation." },
            { letter: "D", text: "Experienced leaders seldom make mistakes in a crisis." }
          ],
          correct: "B"
        },
        {
          id: "dialogue",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Dana's quick radio order in sentence 17 mainly reveals that she —",
          choices: [
            { letter: "A", text: "doubts the trainee but wants to avoid an argument" },
            { letter: "B", text: "is angry that Team Two chose the wrong path" },
            { letter: "C", text: "has already guessed where Mr. Pruitt went" },
            { letter: "D", text: "acts decisively once she confirms the clue herself" }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "Because the narrator stays with Amaru in the van, the discovery of Mr. Pruitt in sentence 18 is presented —",
          choices: [
            { letter: "A", text: "through Dana's thoughts as she climbs the spur" },
            { letter: "B", text: "through Mr. Pruitt's memory of the long day" },
            { letter: "C", text: "only through a voice on the radio speaker" },
            { letter: "D", text: "only through Colleen's later description" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 5. Drama · radio station (level 2) ───────────── */
    {
      id: "g9-rl-c44-trivia-hour",
      family: "G9",
      title: "Thursday Trivia",
      kind: "Drama · 9.RL",
      blurb: "A school radio host discovers that the station's champion caller is someone he knows very well.",
      level: 2,
      passage:
        "<p><em>A cramped radio booth at Eastfield High School, lunch period. Two microphones, a soundboard covered in tape labels, and a desk phone with a blinking light. PRIYA, a confident senior, and DESMOND, a careful junior, wear oversized headphones. A red sign above the door reads ON AIR.</em></p>" +
        "<p>" + N(1) + "PRIYA: <em>[into the microphone]</em> Welcome back to Thursday Trivia on Radio Eastfield! " +
        N(2) + "Our next caller has already won twice this month, which I'm told is a station record. " +
        N(3) + "Caller, you're on the air! " +
        N(4) + "VOICE ON PHONE: <em>[warm, slightly crackly]</em> Hello, dear. This is Bea from Maple Street. " +
        N(5) + "DESMOND: <em>[freezing, then turning to the audience, aside]</em> Bea from Maple Street packs my lunch every morning. " +
        N(6) + "She also calls me \"Dessie\" in front of my friends. " +
        N(7) + "PRIYA: Bea, you are one win away from the championship mug. Desmond, read her the question! " +
        N(8) + "DESMOND: <em>[clearing his throat, in a deeper voice than usual]</em> Which planet has the longest day in the solar system? " +
        N(9) + "BEA: Oh, that's Venus, sweetheart. " +
        N(10) + "Dessie explained that one at dinner last week, with the mashed potatoes as the sun. " +
        N(11) + "<em>[PRIYA turns slowly to stare at DESMOND. He slides lower in his chair until only his headphones show above the desk.]</em> " +
        N(12) + "PRIYA: <em>[delighted]</em> Dessie? " +
        N(13) + "DESMOND: <em>[very fast]</em> That's correct, Bea, Venus is correct, congratulations, we will mail the mug. " +
        N(14) + "BEA: Don't mail it, honey. I'll just take it out of your backpack. " +
        N(15) + "<em>[PRIYA covers her mouth with both hands to keep from laughing on air. The phone light goes dark.]</em> " +
        N(16) + "PRIYA: Well, listeners, it seems our champion has inside information. " +
        N(17) + "DESMOND: <em>[sighing, then to the audience, aside]</em> Three wins, and every answer came from our dinner table. " +
        N(18) + "I suppose that makes me the real champion. " +
        N(19) + "PRIYA: <em>[leaning into her microphone]</em> Coming up after the break, a brand-new rule for Thursday Trivia: no relatives of the hosts may call in. " +
        N(20) + "DESMOND: <em>[into his microphone, smiling in spite of himself]</em> And no co-hosts may tell the entire school what my grandmother calls me. " +
        N(21) + "<em>[He reaches up and switches off the ON AIR sign. Blackout.]</em></p>",
      claims: [
        {
          id: "aside",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Desmond's aside in sentences 5 and 6 creates dramatic irony because —",
          choices: [
            { letter: "A", text: "Bea already knows that Desmond is reading the questions" },
            { letter: "B", text: "the audience learns who Bea is before Priya does" },
            { letter: "C", text: "Priya has planned the call to embarrass Desmond" },
            { letter: "D", text: "the listeners can hear everything Desmond says" }
          ],
          correct: "B"
        },
        {
          id: "aside2",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "Desmond's second aside, in sentences 17 and 18, mainly reveals that he —",
          choices: [
            { letter: "A", text: "is starting to find humor in his embarrassment" },
            { letter: "B", text: "wants Bea removed from the contest for cheating" },
            { letter: "C", text: "is angry that Priya laughed during the broadcast" },
            { letter: "D", text: "plans to stop helping his grandmother with trivia" }
          ],
          correct: "A"
        },
        {
          id: "direction",
          sol: "9.RL.1.D",
          sub: "9.RL.1.D.2",
          stem: "The stage direction in sentence 11, in which Priya stares and Desmond slides lower, mainly shows that —",
          choices: [
            { letter: "A", text: "the booth chairs are uncomfortable and too low" },
            { letter: "B", text: "Desmond is trying to fix a problem with the board" },
            { letter: "C", text: "Priya is angry that the call is running long" },
            { letter: "D", text: "Priya has caught on and Desmond is embarrassed" }
          ],
          correct: "D"
        },
        {
          id: "char",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Which statement best describes Desmond during the broadcast?",
          choices: [
            { letter: "A", text: "He is proud of his grandmother and brags about her wins." },
            { letter: "B", text: "He is bored with trivia and wishes the show would end." },
            { letter: "C", text: "He is flustered but tries to keep the show running." },
            { letter: "D", text: "He is jealous that Priya is the more popular host." }
          ],
          correct: "C"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The overall tone of the radio booth scene is best described as —",
          choices: [
            { letter: "A", text: "tense and suspicious" },
            { letter: "B", text: "lighthearted and teasing" },
            { letter: "C", text: "serious and instructive" },
            { letter: "D", text: "gloomy and regretful" }
          ],
          correct: "B"
        },
        {
          id: "setting",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "How does the setting, a live broadcast, add to the humor of the scene?",
          choices: [
            { letter: "A", text: "The poor phone line makes Bea's answers hard to hear." },
            { letter: "B", text: "The lunch period keeps most students from listening." },
            { letter: "C", text: "Desmond cannot stop Bea because everyone is listening." },
            { letter: "D", text: "The soundboard breaks just as Bea begins to answer." }
          ],
          correct: "C"
        },
        {
          id: "infer",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "Bea's reply in sentence 14 suggests that she —",
          choices: [
            { letter: "A", text: "does not want the mug after all" },
            { letter: "B", text: "is worried about the cost of postage" },
            { letter: "C", text: "has forgotten which station she called" },
            { letter: "D", text: "knows exactly who is hosting the show" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 6. Poetry · ice skating (level 1) ───────────── */
    {
      id: "g9-rl-c44-first-lap",
      family: "G9",
      title: "First Lap",
      kind: "Poetry · 9.RL",
      blurb: "A beginner skater makes it around the rink with a little help and a lot of wall.",
      level: 1,
      passage:
        "<p class=\"poem\">" +
        L(1) + "My hand stays glued to the wall the whole first lap,<br>" +
        L(2) + "the cold rail biting through my thin red glove.<br>" +
        L(3) + "Out in the middle, a girl spins like a coin<br>" +
        L(4) + "somebody flicked across a kitchen table,<br>" +
        L(5) + "and a man in a black jacket glides backward,<br>" +
        L(6) + "hands folded, bored, as if the ice were carpet.<br>" +
        L(7) + "My blades do not agree with each other.<br>" +
        L(8) + "One wants to go to Ohio. One wants to stay home.<br>" +
        L(9) + "My father skates beside me without speaking,<br>" +
        L(10) + "close enough to catch, far enough to let me fall.<br>" +
        L(11) + "I fall. The ice is harder than it looks<br>" +
        L(12) + "and wetter than I thought, and nobody laughs.<br>" +
        L(13) + "He holds out a hand. I take the wall instead.<br>" +
        L(14) + "Second lap, the wall and I are less close.<br>" +
        L(15) + "By the third, I let go for three whole strides,<br>" +
        L(16) + "three strides that belong to no one but me,<br>" +
        L(17) + "and the rink grows wide as a frozen lake<br>" +
        L(18) + "with the lights on and the music playing<br>" +
        L(19) + "just for the people brave enough to wobble.<br>" +
        L(20) + "My father grins. I pretend I didn't see.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which statement best expresses a theme of the poem \"First Lap\"?",
          choices: [
            { letter: "A", text: "Experts make difficult skills look far too easy." },
            { letter: "B", text: "Parents should always hold on to a child who is learning." },
            { letter: "C", text: "Independence often grows through small, brave steps." },
            { letter: "D", text: "Falling in public is the worst part of trying something new." }
          ],
          correct: "C"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In lines 3 and 4, the poet compares the spinning girl to a flicked coin mainly to show that she —",
          choices: [
            { letter: "A", text: "turns quickly and easily" },
            { letter: "B", text: "is about to lose her balance" },
            { letter: "C", text: "is skating for spare change" },
            { letter: "D", text: "moves slowly and carefully" }
          ],
          correct: "A"
        },
        {
          id: "image",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "Line 8 (One wants to go to Ohio. One wants to stay home.) suggests that the speaker's skates —",
          choices: [
            { letter: "A", text: "are too tight for the speaker's feet" },
            { letter: "B", text: "were borrowed from someone in another state" },
            { letter: "C", text: "need to be sharpened before the next lap" },
            { letter: "D", text: "slide in different directions, out of control" }
          ],
          correct: "D"
        },
        {
          id: "pov",
          sol: "9.RL.2.C",
          sub: "9.RL.2.C.1",
          stem: "The poem \"First Lap\" is told from the point of view of —",
          choices: [
            { letter: "A", text: "a father teaching his child to skate" },
            { letter: "B", text: "a beginner on a first trip around a rink" },
            { letter: "C", text: "a skilled skater watching from the middle" },
            { letter: "D", text: "a rink worker who keeps the ice smooth" }
          ],
          correct: "B"
        },
        {
          id: "tone",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "The tone of line 20 is best described as —",
          choices: [
            { letter: "A", text: "angry and hurt" },
            { letter: "B", text: "secretly pleased" },
            { letter: "C", text: "deeply worried" },
            { letter: "D", text: "openly bored" }
          ],
          correct: "B"
        },
        {
          id: "infer",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "Line 10 (close enough to catch, far enough to let me fall) suggests that the father —",
          choices: [
            { letter: "A", text: "is too nervous to skate near the speaker" },
            { letter: "B", text: "is paying more attention to other skaters" },
            { letter: "C", text: "does not know how to skate very well himself" },
            { letter: "D", text: "stays near but lets the speaker learn alone" }
          ],
          correct: "D"
        },
        {
          id: "word",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In line 2, the word biting most nearly means —",
          choices: [
            { letter: "A", text: "chewing loudly" },
            { letter: "B", text: "holding tightly" },
            { letter: "C", text: "stinging sharply" },
            { letter: "D", text: "tearing slowly" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 7. Poetry · mountain rescue (level 3) ───────────── */
    {
      id: "g9-rl-c44-cairns",
      family: "G9",
      title: "Cairns",
      kind: "Poetry · 9.RL",
      blurb: "A rescue team climbs through fog, guided by stone towers built by strangers.",
      level: 3,
      passage:
        "<p class=\"poem\">" +
        L(1) + "Above the tree line, the fog erases the trail<br>" +
        L(2) + "the way a wet thumb smudges a pencil map.<br>" +
        L(3) + "We walk by cairns, those small stone towers<br>" +
        L(4) + "stacked by hands we will never shake,<br>" +
        L(5) + "hikers and herders and rescuers before us<br>" +
        L(6) + "who stopped in weather like this and decided<br>" +
        L(7) + "that the next person deserved a sign.<br>" +
        L(8) + "Each cairn is a sentence with one word: here.<br>" +
        L(9) + "Our radios hiss. Somewhere above, a climber<br>" +
        L(10) + "is waiting with a broken wrist and a whistle,<br>" +
        L(11) + "and the mountain keeps its silence like a secret<br>" +
        L(12) + "it has never once agreed to share.<br>" +
        L(13) + "We count the cairns aloud: eleven, twelve.<br>" +
        L(14) + "At thirteen, someone has knocked the tower down,<br>" +
        L(15) + "and the stones lie scattered like dropped coins.<br>" +
        L(16) + "Nobody speaks. Then our leader kneels<br>" +
        L(17) + "and builds it back, stone over careful stone,<br>" +
        L(18) + "her gloves dark with frost, her breath a small cloud,<br>" +
        L(19) + "not for us, who already know the way,<br>" +
        L(20) + "but for whoever climbs here after the thaw.<br>" +
        L(21) + "We find the climber at the nineteenth tower,<br>" +
        L(22) + "shivering, laughing, alive.</p>",
      claims: [
        {
          id: "theme",
          sol: "9.RL.1.A",
          sub: "9.RL.1.A.1",
          stem: "Which theme is best developed in the poem \"Cairns\"?",
          choices: [
            { letter: "A", text: "People can guide and protect strangers they will never meet." },
            { letter: "B", text: "Mountains are too dangerous for anyone to climb in fog." },
            { letter: "C", text: "Leaders should never stop moving during an emergency." },
            { letter: "D", text: "Old trail markers should be replaced with modern signs." }
          ],
          correct: "A"
        },
        {
          id: "simile",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "In lines 1 and 2, the poet compares the fog to a wet thumb on a pencil map mainly to show that the fog —",
          choices: [
            { letter: "A", text: "leaves the rocks slippery and wet" },
            { letter: "B", text: "moves slowly up the mountainside" },
            { letter: "C", text: "makes the team's paper map useless" },
            { letter: "D", text: "blurs and hides the path ahead" }
          ],
          correct: "D"
        },
        {
          id: "image",
          sol: "9.RL.2.A",
          sub: "9.RL.2.A.2",
          stem: "Line 8 (Each cairn is a sentence with one word: here.) suggests that each cairn —",
          choices: [
            { letter: "A", text: "has a word carved into its top stone" },
            { letter: "B", text: "gives a simple, clear message to travelers" },
            { letter: "C", text: "marks a place where a climber was lost" },
            { letter: "D", text: "is too small to be useful in the fog" }
          ],
          correct: "B"
        },
        {
          id: "shift",
          sol: "9.RL.2.B",
          sub: "9.RL.2.B.1",
          stem: "How does the tone shift in the last two lines of \"Cairns\" (lines 21 and 22)?",
          choices: [
            { letter: "A", text: "from calm and patient to angry and rushed" },
            { letter: "B", text: "from proud and certain to doubtful and sad" },
            { letter: "C", text: "from tense and searching to relieved and glad" },
            { letter: "D", text: "from cheerful and playful to grim and serious" }
          ],
          correct: "C"
        },
        {
          id: "structure",
          sol: "9.RL.1.B",
          sub: "9.RL.1.B.2",
          stem: "The poet includes the knocked-down cairn in lines 14 and 15 mainly to —",
          choices: [
            { letter: "A", text: "set up the leader's choice to rebuild it for later climbers" },
            { letter: "B", text: "show that the team has lost its way in the fog" },
            { letter: "C", text: "suggest that the injured climber destroyed the marker" },
            { letter: "D", text: "explain why the team decides to turn back down" }
          ],
          correct: "A"
        },
        {
          id: "leader",
          sol: "9.RL.3.B",
          sub: "9.RL.3.B.1",
          stem: "The leader's actions in lines 16 through 20 best show that she is —",
          choices: [
            { letter: "A", text: "unsure of the route and stalling for time" },
            { letter: "B", text: "more interested in stones than in the climber" },
            { letter: "C", text: "tired and in need of a rest before going on" },
            { letter: "D", text: "patient and responsible even during a search" }
          ],
          correct: "D"
        },
        {
          id: "figure",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "Lines 11 and 12 say the mountain keeps its silence like a secret. This figure of speech mainly suggests that —",
          choices: [
            { letter: "A", text: "the team members are too tired to talk" },
            { letter: "B", text: "the mountain is quieter than usual that day" },
            { letter: "C", text: "the climber's location is hidden and hard to find" },
            { letter: "D", text: "the radios have stopped working in the cold" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 8. Informational · mountain rescue (level 1) ───────────── */
    {
      id: "g9-ri-c44-search-map",
      family: "G9",
      title: "A Pencil, a Map, and Questions",
      kind: "Informational · 9.RI",
      blurb: "How volunteer search teams use questions, records and clues to find lost hikers.",
      level: 1,
      passage:
        "<p>" + N(1) + "When a hiker goes missing in the mountains, many people imagine rescuers spreading out in a long line and walking every inch of the forest. " +
        N(2) + "In reality, most volunteer search and rescue teams begin with something less dramatic: information. " +
        N(3) + "The first hour of a search is usually spent asking questions rather than hiking.</p>" +
        "<p>" + N(4) + "Searchers start by interviewing family and friends. " +
        N(5) + "They want to know the missing person's age, health, experience, and plans, as well as what the person was wearing and carrying. " +
        N(6) + "Even small details matter. " +
        N(7) + "A bright orange jacket is easier to spot from a ridge, and a hiker without a flashlight is less likely to keep moving after dark.</p>" +
        "<p>" + N(8) + "Next, team leaders turn to records of past searches. " +
        N(9) + "Over many years, rescue groups have collected data on thousands of cases, noting how far different kinds of lost people traveled and what they did. " +
        N(10) + "For example, the records show that young children often hide or curl up in sheltered spots, while experienced hikers tend to keep walking, sometimes following streams or ridges downhill. " +
        N(11) + "Using this information, leaders draw circles on a map around the last known location and divide the area into sections ranked by probability, or likelihood, of finding the person there.</p>" +
        "<p>" + N(12) + "The first teams sent out are usually small \"hasty teams\" of two or three fast-moving searchers. " +
        N(13) + "They check the most likely places quickly: trails, trail junctions, streams, and shelters. " +
        N(14) + "Behind them come larger teams who search each section more slowly and thoroughly.</p>" +
        "<p>" + N(15) + "All searchers are trained in clue awareness. " +
        N(16) + "A candy wrapper, a footprint, or a broken branch may reveal which direction a person went. " +
        N(17) + "In one common training exercise, a single granola bar wrapper left at a fork in the trail leads searchers away from the main path and toward a creek, where the \"lost\" hiker is waiting.</p>" +
        "<p>" + N(18) + "Search and rescue still requires strong legs and long nights. " +
        N(19) + "But the most successful searches start with a pencil, a map, and careful questions." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best expresses the central idea of the article about finding lost hikers?",
          choices: [
            { letter: "A", text: "Successful searches depend on gathering and using information." },
            { letter: "B", text: "Hasty teams find most lost hikers within the first hour." },
            { letter: "C", text: "Children are harder to find than adults in the mountains." },
            { letter: "D", text: "Searchers should walk in long lines to cover every inch." }
          ],
          correct: "A"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, why do searchers ask what the missing person was wearing?",
          choices: [
            { letter: "A", text: "Family members need a list for the police report." },
            { letter: "B", text: "Warm clothing proves the person planned a long hike." },
            { letter: "C", text: "Clothing can affect how easily the person is spotted." },
            { letter: "D", text: "Searchers must bring matching gear to the trailhead." }
          ],
          correct: "C"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The article about lost hikers is mainly organized by —",
          choices: [
            { letter: "A", text: "comparing searches in summer with searches in winter" },
            { letter: "B", text: "telling the story of one rescue from start to finish" },
            { letter: "C", text: "listing problems with searches and then their causes" },
            { letter: "D", text: "describing the stages of a search in the usual order" }
          ],
          correct: "D"
        },
        {
          id: "hikers",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to sentence 10, how do experienced hikers usually behave when they are lost?",
          choices: [
            { letter: "A", text: "They hide in a sheltered spot and wait for help." },
            { letter: "B", text: "They keep moving, often following streams or ridges." },
            { letter: "C", text: "They climb to the highest point to call for help." },
            { letter: "D", text: "They return to the last trail junction they passed." }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the claim that a small clue can change the direction of a search?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 9" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "D"
        },
        {
          id: "context",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 11, which words best help the reader understand the meaning of probability?",
          choices: [
            { letter: "A", text: "draw circles on a map" },
            { letter: "B", text: "or likelihood" },
            { letter: "C", text: "the last known location" },
            { letter: "D", text: "divide the area into sections" }
          ],
          correct: "B"
        },
        {
          id: "opening",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author begins with what many people imagine about searches (sentence 1) mainly to —",
          choices: [
            { letter: "A", text: "set up a contrast with how searches really begin" },
            { letter: "B", text: "show that long lines are the best search method" },
            { letter: "C", text: "suggest that most readers have joined a search" },
            { letter: "D", text: "explain why rescuers need strong legs and lights" }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 9. Informational · ice skating (level 2) ───────────── */
    {
      id: "g9-ri-c44-rink-ice",
      family: "G9",
      title: "Building a Sheet of Ice",
      kind: "Informational · 9.RI",
      blurb: "The hidden pipes, paper-thin layers and hot water behind an indoor skating rink.",
      level: 2,
      passage:
        "<p>" + N(1) + "To a skater gliding across an indoor rink, the ice looks like a single smooth slab. " +
        N(2) + "In fact, it is a carefully built structure only about an inch thick, made in many thin layers and kept frozen by a system hidden underneath. " +
        N(3) + "Creating it can take several days, and keeping it in good shape takes work every few hours.</p>" +
        "<p>" + N(4) + "The process begins with the floor. " +
        N(5) + "Most indoor rinks sit on a concrete slab threaded with miles of narrow pipes. " +
        N(6) + "A refrigeration plant pumps a very cold liquid, often a salty brine, through these pipes. " +
        N(7) + "The brine absorbs heat from the concrete above it and carries that heat away, chilling the floor to well below freezing.</p>" +
        "<p>" + N(8) + "Workers then spray the cold concrete with a fine mist of water. " +
        N(9) + "If they poured a deep flood all at once, the water would freeze unevenly and trap air bubbles, creating weak, cloudy ice. " +
        N(10) + "Instead, they add layer after layer, some thinner than a sheet of paper, letting each one freeze before the next. " +
        N(11) + "After the first few layers, the crew paints the surface white, which is why rink ice looks bright instead of gray. " +
        N(12) + "Lines and logos are painted next, and then more clear layers seal the paint beneath the surface.</p>" +
        "<p>" + N(13) + "Once skating begins, blades carve grooves and scatter loose snow. " +
        N(14) + "Between sessions, a resurfacing machine rolls slowly across the rink. " +
        N(15) + "A sharp blade shaves off a thin layer of the scarred top, and the machine collects the shavings. " +
        N(16) + "Then it spreads a thin film of hot water behind it. " +
        N(17) + "Hot water may seem like a strange choice, but it melts into the tiny cuts and bonds with the ice below before it freezes, leaving a glassy finish.</p>" +
        "<p>" + N(18) + "Rink managers say the work is never truly finished. " +
        N(19) + "Hockey players often prefer harder, colder ice for speed, while figure skaters usually want slightly softer ice that grips their blades during jumps and landings. " +
        N(20) + "Some rinks adjust the temperature by a degree or two depending on who is skating that day." +
        "</p>",
      claims: [
        {
          id: "main",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "What is the main idea of the article about indoor rink ice?",
          choices: [
            { letter: "A", text: "Hockey players and figure skaters rarely share a rink." },
            { letter: "B", text: "Refrigeration plants are the costliest part of a rink." },
            { letter: "C", text: "Rink ice is a built and maintained surface, not a plain slab." },
            { letter: "D", text: "Painting the ice white is the hardest step for rink crews." }
          ],
          correct: "C"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, why do workers add water in thin layers instead of one deep flood?",
          choices: [
            { letter: "A", text: "A deep flood would freeze unevenly and trap air bubbles." },
            { letter: "B", text: "Thin layers let the crew use far less water overall." },
            { letter: "C", text: "A deep flood would wash away the painted lines and logos." },
            { letter: "D", text: "Thin layers keep the brine pipes from cracking in the cold." }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "Sentences 4 through 12 are mainly organized —",
          choices: [
            { letter: "A", text: "as a comparison of two different kinds of rinks" },
            { letter: "B", text: "in sequence, following the steps of building the ice" },
            { letter: "C", text: "as a problem followed by several possible solutions" },
            { letter: "D", text: "from the most important step to the least important" }
          ],
          correct: "B"
        },
        {
          id: "craft",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The author includes sentence 17 about hot water mainly to —",
          choices: [
            { letter: "A", text: "warn readers that resurfacing machines can be unsafe" },
            { letter: "B", text: "show that most rinks waste a great deal of energy" },
            { letter: "C", text: "argue that cold water would work just as well" },
            { letter: "D", text: "explain a step that might seem surprising to readers" }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "The author's main purpose in the article about rink ice is to —",
          choices: [
            { letter: "A", text: "inform readers about how rink ice is made and kept" },
            { letter: "B", text: "persuade readers to take up figure skating lessons" },
            { letter: "C", text: "entertain readers with a story about a rink worker" },
            { letter: "D", text: "convince rink managers to raise their temperatures" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that the needs of different skaters affect how a rink is kept?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 13" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "C"
        },
        {
          id: "prefix",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word resurfacing in sentence 14 begins with the prefix re-. Based on the prefix and the passage, resurfacing means —",
          choices: [
            { letter: "A", text: "removing the ice completely from the floor" },
            { letter: "B", text: "checking the surface for cracks and holes" },
            { letter: "C", text: "painting new lines on top of the old ones" },
            { letter: "D", text: "giving the ice a fresh top layer once again" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 10. Informational · radio (level 3) ───────────── */
    {
      id: "g9-ri-c44-night-signal",
      family: "G9",
      title: "The Night Sky Carries the Signal",
      kind: "Informational · 9.RI",
      blurb: "Why an AM station from far away can reach your radio after dark and then vanish by morning.",
      level: 3,
      passage:
        "<p>" + N(1) + "On a clear winter night, a listener in a small farming town can sometimes turn the dial of an old AM radio and hear a ball game broadcast from a city several states away. " +
        N(2) + "By morning, that same station has vanished into static. " +
        N(3) + "The station did not change its signal; the sky did.</p>" +
        "<p>" + N(4) + "AM radio signals travel in two main ways. " +
        N(5) + "Some move along the ground, following the curve of the earth for a limited distance; these are called ground waves. " +
        N(6) + "Others angle upward into the sky, where they meet the ionosphere, a region of the upper atmosphere filled with electrically charged particles created by sunlight.</p>" +
        "<p>" + N(7) + "During the day, the lowest part of the ionosphere, called the D layer, is thick and active. " +
        N(8) + "It soaks up the AM signals that strike it, the way a sponge soaks up spilled water, so the sky waves weaken and fade. " +
        N(9) + "After sunset, however, the D layer quickly thins and nearly disappears. " +
        N(10) + "Signals can then climb to higher layers that act less like a sponge and more like a mirror, bending the waves back toward the ground hundreds of miles from the transmitter. " +
        N(11) + "Sometimes a signal bounces between sky and earth more than once, which explains how a broadcast can skip across half a continent.</p>" +
        "<p>" + N(12) + "This nightly reach is not always welcome. " +
        N(13) + "Because many stations share the same few frequencies, distant signals can collide with local ones and create a jumble of overlapping voices. " +
        N(14) + "To prevent this, government regulators require many AM stations to lower their power or change the direction of their signals at sunset. " +
        N(15) + "A few stations are permitted to broadcast at full strength all night, a policy originally meant to serve rural listeners who had no nearby station.</p>" +
        "<p>" + N(16) + "Some engineers argue that these old rules should be updated, while others insist that they still protect listeners. " +
        N(17) + "Either way, every evening the atmosphere quietly rearranges itself, and the radio map of the country is redrawn until dawn." +
        "</p>",
      claims: [
        {
          id: "summary",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which choice best summarizes the passage about AM radio at night?",
          choices: [
            { letter: "A", text: "AM radio is losing listeners because its signals are weak." },
            { letter: "B", text: "Night changes in the sky let AM signals reach far, for good and ill." },
            { letter: "C", text: "Ground waves are stronger than sky waves at every hour." },
            { letter: "D", text: "Rural listeners prefer distant stations over local ones." }
          ],
          correct: "B"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the passage, why do AM sky waves fade during the day?",
          choices: [
            { letter: "A", text: "Stations must lower their power while the sun is up." },
            { letter: "B", text: "Ground waves block them from rising into the sky." },
            { letter: "C", text: "Too many stations share the same frequencies by day." },
            { letter: "D", text: "The thick D layer of the ionosphere absorbs them." }
          ],
          correct: "D"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which idea in the passage is presented as a matter of debate rather than as established fact?",
          choices: [
            { letter: "A", text: "that the old nighttime rules for AM stations should be updated" },
            { letter: "B", text: "that the D layer thins and nearly disappears after sunset" },
            { letter: "C", text: "that ground waves follow the curve of the earth" },
            { letter: "D", text: "that many stations share the same few frequencies" }
          ],
          correct: "A"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How does the author mainly organize sentences 7 through 11?",
          choices: [
            { letter: "A", text: "by listing the stations that can be heard at night" },
            { letter: "B", text: "by telling how the first radio station was built" },
            { letter: "C", text: "by contrasting what happens to signals by day and by night" },
            { letter: "D", text: "by presenting a problem and the rules that solved it" }
          ],
          correct: "C"
        },
        {
          id: "analogy",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The comparisons to a sponge in sentence 8 and a mirror in sentence 10 help the reader understand that —",
          choices: [
            { letter: "A", text: "one layer absorbs signals while higher layers reflect them" },
            { letter: "B", text: "radio waves are made of water and light at the same time" },
            { letter: "C", text: "the ionosphere can be seen clearly from the ground" },
            { letter: "D", text: "transmitters are built from sponges and mirrors" }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that the nightly reach of AM signals can cause problems?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 6" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 11" }
          ],
          correct: "C"
        },
        {
          id: "connote",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written changes instead of quietly rearranges itself in sentence 17. Compared with changes, the phrase quietly rearranges itself suggests a shift that is —",
          choices: [
            { letter: "A", text: "sudden and violent" },
            { letter: "B", text: "rare and dangerous" },
            { letter: "C", text: "loud and confusing" },
            { letter: "D", text: "orderly and unnoticed" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 11. Vocabulary · garage (level 1) ───────────── */
    {
      id: "g9-rv-c44-flicker",
      family: "G9",
      title: "The Flickering Headlights",
      kind: "Vocabulary · 9.RV",
      blurb: "An apprentice mechanic learns a new word, and a new habit, on her first day.",
      level: 1,
      passage:
        "<p>" + N(1) + "On her first day as an apprentice at Delgado Auto Repair, Ji-woo Park learned that she was officially a <strong>novice</strong>. " +
        N(2) + "Rosa Delgado, who owned the shop, said the word kindly, the way a swim coach might say \"beginner,\" but Ji-woo still felt it pinned to her shirt like a name tag. " +
        N(3) + "Her first job was a pickup truck whose headlights flickered off and on without any pattern. " +
        N(4) + "\"An <strong>intermittent</strong> problem,\" Rosa said. \"It comes and goes, so it's the hardest kind to catch.\" " +
        N(5) + "Ji-woo made a <strong>tentative</strong> guess that the bulbs were bad, her voice rising at the end as if she were asking a question. " +
        N(6) + "Rosa shook her head. " +
        N(7) + "\"Before you replace anything, you have to <strong>diagnose</strong> it,\" she said. \"Find the real cause first, or you're just throwing parts at a mystery.\"</p>" +
        "<p>" + N(8) + "Together they traced the wires from the headlights back toward the battery. " +
        N(9) + "Rosa was <strong>meticulous</strong>, checking every connector twice, wiping each one clean, and writing down what she found in a small notebook. " +
        N(10) + "Near the battery, Ji-woo spotted a clamp crusted with a chalky green-white powder. " +
        N(11) + "\"<strong>Corrosion</strong>,\" Rosa said, pleased. \"Moisture and metal, eating at each other slowly for years.\" " +
        N(12) + "The crust had made the connection loose, so the headlights lost power whenever the truck hit a bump. " +
        N(13) + "Ji-woo scrubbed the clamp with a wire brush and a paste of baking soda and water until the metal shone. " +
        N(14) + "When she tightened it, the headlights burned steady, and they stayed that way while Rosa rocked the truck back and forth with both hands.</p>" +
        "<p>" + N(15) + "That evening, Ji-woo copied Rosa's habit and started her own notebook. " +
        N(16) + "On the first page, she wrote the date, the truck's problem, and the cure. " +
        N(17) + "Under that, she added one more line: \"Novice, day one. Not a mystery anymore.\" " +
        N(18) + "By the end of the month, the notebook was half full, and she noticed that Rosa had stopped introducing her as the new kid. " +
        N(19) + "Now Rosa simply said, \"This is Ji-woo. Ask her about headlights.\"" +
        "</p>",
      claims: [
        {
          id: "intermittent",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Rosa's explanation in sentence 4 shows that intermittent means —",
          choices: [
            { letter: "A", text: "growing worse every single day" },
            { letter: "B", text: "happening now and then, not all the time" },
            { letter: "C", text: "caused by a part that is brand new" },
            { letter: "D", text: "simple to repair in a few minutes" }
          ],
          correct: "B"
        },
        {
          id: "meticulous",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "Which phrase from the passage best helps the reader understand what meticulous means in sentence 9?",
          choices: [
            { letter: "A", text: "traced the wires back toward the battery" },
            { letter: "B", text: "spotted a clamp crusted with powder" },
            { letter: "C", text: "checking every connector twice" },
            { letter: "D", text: "rocked the truck back and forth" }
          ],
          correct: "C"
        },
        {
          id: "diagnose",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "The word diagnose in sentence 7 comes from Greek parts meaning \"to know thoroughly.\" Based on these parts and the passage, diagnose most nearly means to —",
          choices: [
            { letter: "A", text: "identify the true cause of a problem" },
            { letter: "B", text: "replace a part as quickly as possible" },
            { letter: "C", text: "describe a problem to a customer" },
            { letter: "D", text: "order new parts from a supplier" }
          ],
          correct: "A"
        },
        {
          id: "suffix",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "Corrosion is formed by adding the suffix -ion to corrode, turning an action into a result. Which word from the passage is formed the same way?",
          choices: [
            { letter: "A", text: "tentative" },
            { letter: "B", text: "headlights" },
            { letter: "C", text: "notebook" },
            { letter: "D", text: "connection" }
          ],
          correct: "D"
        },
        {
          id: "nametag",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 2, Ji-woo feels the word novice pinned to her shirt like a name tag. This comparison suggests that to her, the word —",
          choices: [
            { letter: "A", text: "seems like a label everyone can see" },
            { letter: "B", text: "is a compliment she is proud to wear" },
            { letter: "C", text: "was printed on her uniform by mistake" },
            { letter: "D", text: "will be forgotten by the end of the day" }
          ],
          correct: "A"
        },
        {
          id: "tentative",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author could have written that Ji-woo simply made a guess. The word tentative in sentence 5 adds a sense that her guess was —",
          choices: [
            { letter: "A", text: "loud and confident" },
            { letter: "B", text: "uncertain and hesitant" },
            { letter: "C", text: "careless and rude" },
            { letter: "D", text: "clever and correct" }
          ],
          correct: "B"
        },
        {
          id: "novice",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "Rosa says novice the way a swim coach might say beginner (sentence 2). This suggests that Rosa uses novice in a way that is —",
          choices: [
            { letter: "A", text: "mocking and meant to embarrass" },
            { letter: "B", text: "angry and meant as a warning" },
            { letter: "C", text: "formal and meant to impress" },
            { letter: "D", text: "neutral and meant kindly" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 12. Vocabulary · mountain rescue (level 3) ───────────── */
    {
      id: "g9-rv-c44-snow-dog",
      family: "G9",
      title: "Juniper Under the Snow",
      kind: "Vocabulary · 9.RV",
      blurb: "A ski patroller and her young border collie train to find people buried by avalanches.",
      level: 3,
      passage:
        "<p>" + N(1) + "Training an avalanche rescue dog is <strong>rigorous</strong> work, demanding daily practice for two or three years before a dog is certified. " +
        N(2) + "Sigrid Halvorsen learned this the winter she began training Juniper, a young border collie with one white ear and a habit of sneezing when she was excited. " +
        N(3) + "Their first lessons looked more like a game than a job. " +
        N(4) + "Sigrid would hide behind a snowbank, call Juniper's name, and reward her with a tug toy the instant the dog found her. " +
        N(5) + "Gradually, the hiding places became deeper and less <strong>conspicuous</strong>, until Sigrid was buried in a snow cave with no footprints leading to it, invisible from even three steps away.</p>" +
        "<p>" + N(6) + "Juniper's sense of smell made the task possible. " +
        N(7) + "A dog's nose is so <strong>acute</strong> that it can detect human scent rising through a meter or more of packed snow, drifting up in amounts <strong>imperceptible</strong> to any person standing on the surface. " +
        N(8) + "On a good day, Juniper could search an area the size of a football field in the time it would take twenty people with probe poles to cover a small corner of it.</p>" +
        "<p>" + N(9) + "Not every day was good. " +
        N(10) + "In February, a storm left the training slope a maze of wind-carved drifts, and the scent swirled in every direction. " +
        N(11) + "Juniper ran in circles, nose down and then up, plainly <strong>disoriented</strong>, while Sigrid's toes went numb inside her boots. " +
        N(12) + "Another dog might have quit, but Juniper was <strong>tenacious</strong>. " +
        N(13) + "She worked the slope in widening loops for forty minutes, sneezing, digging, abandoning holes, and starting again. " +
        N(14) + "Finally she stopped above a smooth patch of snow, gave a single sharp bark, and began to dig like a machine that had just been switched on. " +
        N(15) + "Two feet down, she reached the volunteer who had been waiting in the cave, and Sigrid cheered loudly enough to echo off the ridge.</p>" +
        "<p>" + N(16) + "That evening, the patrol director wrote in the training log that Juniper had \"found a needle in a snowstorm.\" " +
        N(17) + "Sigrid crossed out the word needle and wrote friend instead, because no one on the mountain, least of all Juniper, had ever treated the search as a hunt for objects." +
        "</p>",
      claims: [
        {
          id: "conspicuous",
          sol: "9.RV.1.B",
          sub: "9.RV.1.B.1",
          stem: "In sentence 5, the snow cave that is invisible from three steps away helps show that conspicuous means —",
          choices: [
            { letter: "A", text: "cold and uncomfortable" },
            { letter: "B", text: "deep and narrow" },
            { letter: "C", text: "easy to notice" },
            { letter: "D", text: "safe to enter" }
          ],
          correct: "C"
        },
        {
          id: "imperceptible",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "Imperceptible in sentence 7 joins the prefix im- (\"not\") to the root of perceive. Based on these parts, imperceptible means —",
          choices: [
            { letter: "A", text: "too slight to be noticed" },
            { letter: "B", text: "strong enough to be harmful" },
            { letter: "C", text: "able to be measured exactly" },
            { letter: "D", text: "likely to change very quickly" }
          ],
          correct: "A"
        },
        {
          id: "disoriented",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "Disoriented in sentence 11 adds dis- (\"lose\" or \"undo\") to orient, which means to find one's position. Based on its parts, a disoriented dog is one that —",
          choices: [
            { letter: "A", text: "refuses to follow its handler" },
            { letter: "B", text: "is too tired to keep searching" },
            { letter: "C", text: "has been trained for many years" },
            { letter: "D", text: "has lost its sense of direction" }
          ],
          correct: "D"
        },
        {
          id: "rigorous",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "The author calls the training rigorous instead of simply hard (sentence 1). Rigorous adds a sense that the training is —",
          choices: [
            { letter: "A", text: "unfair and cruel to the dogs" },
            { letter: "B", text: "strict, thorough, and demanding" },
            { letter: "C", text: "quick, cheap, and easy to finish" },
            { letter: "D", text: "playful and mostly for fun" }
          ],
          correct: "B"
        },
        {
          id: "tenacious",
          sol: "9.RV.1.D",
          sub: "9.RV.1.D.2",
          stem: "Sentence 12 calls Juniper tenacious. Compared with the word stubborn, tenacious has a connotation that is more —",
          choices: [
            { letter: "A", text: "admiring, suggesting determined effort" },
            { letter: "B", text: "critical, suggesting she will not obey" },
            { letter: "C", text: "fearful, suggesting she may be hurt" },
            { letter: "D", text: "neutral, suggesting she is simply large" }
          ],
          correct: "A"
        },
        {
          id: "needle",
          sol: "9.RV.1.E",
          sub: "9.RV.1.E.2",
          stem: "The director's phrase found a needle in a snowstorm (sentence 16) plays on a familiar saying to suggest that Juniper —",
          choices: [
            { letter: "A", text: "lost a small tool while she was digging" },
            { letter: "B", text: "searched the slope far too slowly" },
            { letter: "C", text: "succeeded at a nearly impossible task" },
            { letter: "D", text: "was trained to look for metal objects" }
          ],
          correct: "C"
        },
        {
          id: "machine",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 14, comparing Juniper to a machine that had just been switched on mainly emphasizes —",
          choices: [
            { letter: "A", text: "how noisy the dog was during training" },
            { letter: "B", text: "her sudden, powerful burst of digging" },
            { letter: "C", text: "that she needed rest after the search" },
            { letter: "D", text: "how carefully Sigrid had programmed her" }
          ],
          correct: "B"
        }
      ]
    },

    /* ───────────── 13. Functional text · mountain rescue (level 1) ───────────── */
    {
      id: "g9-ri-c44-junior-volunteers",
      family: "G9",
      title: "Junior Volunteer Program",
      kind: "Functional text · 9.RI",
      blurb: "A mountain rescue team's guide for teens who want to join as junior volunteers.",
      level: 1,
      passage:
        "<p><strong>Cedar Ridge Mountain Rescue: Junior Volunteer Program</strong></p>" +
        "<p><strong>Who Can Apply</strong><br>" + N(1) + "Students ages 15 to 18 who live in Pine County or Alder County may apply for the Junior Volunteer Program. " +
        N(2) + "No outdoor experience is required, but applicants must be able to hike five miles while carrying a loaded pack. " +
        N(3) + "Applicants under 18 need a parent or guardian's signature on the permission form.</p>" +
        "<p><strong>What Juniors Do</strong><br>" + N(4) + "Junior volunteers support the team in many ways, but they never enter avalanche terrain or join technical rope rescues. " +
        N(5) + "Juniors staff the radio at the command post, help organize equipment, assist with community safety talks, and join practice searches on marked trails. " +
        N(6) + "After one year of training and a passing score on the field skills test, juniors may join real searches in low-risk areas with an adult partner.</p>" +
        "<p><strong>Training Requirements</strong><br>" + N(7) + "All juniors must complete the following before their first practice search: " +
        N(8) + "a 16-hour first aid course, which the team provides free of charge; " +
        N(9) + "the map and compass workshop held on two Saturdays in October; " +
        N(10) + "and a radio procedures class, taught online. " +
        N(11) + "Attendance at monthly team meetings is mandatory for all members. " +
        N(12) + "A junior who misses two meetings in a row will be placed on inactive status until he or she meets with the training officer.</p>" +
        "<p><strong>Gear</strong><br>" + N(13) + "The team lends each junior a helmet, a headlamp, a radio, and a red team jacket. " +
        N(14) + "Juniors must supply their own hiking boots, rain gear, and a daypack. " +
        N(15) + "Families who need help buying gear may request assistance from the team's equipment fund; no one is turned away because of cost.</p>" +
        "<p><strong>How to Apply</strong><br>" + N(16) + "Submit the online application by September 15. " +
        N(17) + "Selected applicants will be invited to an interview and a short fitness hike in late September. " +
        N(18) + "New juniors begin training the first week of October. " +
        N(19) + "Questions? Contact training officer Mei-Lin Zhao at the team's headquarters on Ridge Road on Tuesday or Thursday evenings.</p>",
      claims: [
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "The main purpose of the Cedar Ridge program guide is to —",
          choices: [
            { letter: "A", text: "tell the story of a rescue that a junior helped with" },
            { letter: "B", text: "warn families about the dangers of mountain hiking" },
            { letter: "C", text: "ask local businesses to donate gear to the team" },
            { letter: "D", text: "explain who can join the program and what juniors do" }
          ],
          correct: "D"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to the guide, what must a junior do before joining a real search?",
          choices: [
            { letter: "A", text: "buy a helmet, a headlamp, and a radio" },
            { letter: "B", text: "train for a year and pass the field skills test" },
            { letter: "C", text: "lead a community safety talk on the radio" },
            { letter: "D", text: "turn 18 and sign the permission form alone" }
          ],
          correct: "B"
        },
        {
          id: "headings",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "The headings in the Cedar Ridge guide mainly help readers —",
          choices: [
            { letter: "A", text: "find information on one topic quickly" },
            { letter: "B", text: "follow the events of a search in order" },
            { letter: "C", text: "compare two different rescue teams" },
            { letter: "D", text: "understand the history of the team" }
          ],
          correct: "A"
        },
        {
          id: "cost",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "The guide includes the statement that no one is turned away because of cost (sentence 15) mainly to —",
          choices: [
            { letter: "A", text: "explain why juniors must buy their own jackets" },
            { letter: "B", text: "show that the equipment fund is nearly empty" },
            { letter: "C", text: "reassure families that gear costs need not stop them" },
            { letter: "D", text: "encourage juniors to raise money for the team" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.2",
          stem: "Which sentence best supports the idea that the team limits the danger juniors face?",
          choices: [
            { letter: "A", text: "Sentence 2" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "B"
        },
        {
          id: "summary",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which statement best summarizes the junior program described in the guide?",
          choices: [
            { letter: "A", text: "Teens train steadily and take safe roles before real searches." },
            { letter: "B", text: "Teens with hiking experience lead searches on their own." },
            { letter: "C", text: "Teens pay for their training and supply all their own gear." },
            { letter: "D", text: "Teens may join any rescue once they finish first aid class." }
          ],
          correct: "A"
        },
        {
          id: "inactive",
          sol: "9.RV.1.C",
          sub: "9.RV.1.C.1",
          stem: "Inactive in sentence 12 begins with the prefix in-, meaning \"not.\" A junior placed on inactive status is one who —",
          choices: [
            { letter: "A", text: "has been removed from the team forever" },
            { letter: "B", text: "has been promoted to a full team member" },
            { letter: "C", text: "is not taking part as a member for now" },
            { letter: "D", text: "is in charge of the team's monthly meetings" }
          ],
          correct: "C"
        }
      ]
    },

    /* ───────────── 14. Argument · garage (level 2) ───────────── */
    {
      id: "g9-ri-c44-open-the-shop",
      family: "G9",
      title: "Open the Garage Doors",
      kind: "Argument · 9.RI",
      blurb: "A student editorial argues that Lakemont High should bring back its auto shop.",
      level: 2,
      passage:
        "<p>" + N(1) + "Twenty years ago, Lakemont High School had a fully equipped auto shop, with three lifts, a tire machine, and a waiting list of students who wanted in. " +
        N(2) + "Today that space is a storage room for old desks. " +
        N(3) + "Lakemont is not alone; many schools have closed their automotive programs to save money and make room for other courses. " +
        N(4) + "It is time to open those garage doors again.</p>" +
        "<p>" + N(5) + "First, auto classes prepare students for jobs that are waiting for them. " +
        N(6) + "Repair shops in our region report that they cannot hire enough technicians, and the county workforce office lists auto technician as one of its fastest-growing careers. " +
        N(7) + "A student who graduates with basic training and a certification can begin earning a paycheck right away, often at a shop that will pay for further training.</p>" +
        "<p>" + N(8) + "Second, the garage teaches skills that every student needs, whether or not they become mechanics. " +
        N(9) + "Diagnosing a car's problem requires reading manuals, measuring carefully, testing ideas, and admitting when a first guess is wrong. " +
        N(10) + "Those are the same habits that science teachers try to build in a lab, but in a garage the results are immediate: the engine starts, or it doesn't.</p>" +
        "<p>" + N(11) + "Some people argue that shop classes are too expensive, and they have a point. " +
        N(12) + "Lifts and diagnostic computers cost money, and car technology changes quickly. " +
        N(13) + "However, schools do not have to pay for everything alone. " +
        N(14) + "Local dealerships and repair shops often donate tools and older vehicles, and some will send technicians to help teach. " +
        N(15) + "A partnership like this costs far less than building a program from nothing.</p>" +
        "<p>" + N(16) + "Others worry that cars are becoming too complicated for teenagers, especially as electric vehicles become common. " +
        N(17) + "But that is exactly why schools should act now. " +
        N(18) + "The technicians who will repair tomorrow's cars are sitting in today's classrooms, and if no one hands them a wrench, the industry will be left stranded on the side of the road.</p>" +
        "<p>" + N(19) + "Our district should form a committee this year to study reopening the Lakemont shop. " +
        N(20) + "The storage room is still there, and the old floor drains still work. " +
        N(21) + "All we are missing is the will to turn the key." +
        "</p>",
      claims: [
        {
          id: "claim",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "Which sentence from the editorial best states the writer's main claim?",
          choices: [
            { letter: "A", text: "Sentence 3" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 12" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "The writer's main purpose in the Lakemont editorial is to —",
          choices: [
            { letter: "A", text: "explain how lifts and diagnostic computers work" },
            { letter: "B", text: "describe the history of Lakemont High School" },
            { letter: "C", text: "compare electric cars with gasoline-powered cars" },
            { letter: "D", text: "persuade the district to consider reopening auto shop" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "Which sentence provides the strongest evidence that auto classes can lead to available jobs?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 2" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 15" }
          ],
          correct: "A"
        },
        {
          id: "counter",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.2",
          stem: "In sentences 11 and 12, the writer admits that shop classes are expensive mainly to —",
          choices: [
            { letter: "A", text: "show that the editorial's own plan cannot work" },
            { letter: "B", text: "persuade readers to raise money for new lifts" },
            { letter: "C", text: "acknowledge an objection before answering it" },
            { letter: "D", text: "explain why the old auto shop was closed" }
          ],
          correct: "C"
        },
        {
          id: "opinion",
          sol: "9.RI.1.C",
          sub: "9.RI.1.C.1",
          stem: "Which statement from the editorial is an opinion rather than a fact?",
          choices: [
            { letter: "A", text: "Today that space is a storage room for old desks." },
            { letter: "B", text: "It is time to open those garage doors again." },
            { letter: "C", text: "Lifts and diagnostic computers cost money." },
            { letter: "D", text: "The storage room is still there." }
          ],
          correct: "B"
        },
        {
          id: "org",
          sol: "9.RI.2.A",
          sub: "9.RI.2.A.1",
          stem: "How is the body of the editorial (sentences 5 through 18) mainly organized?",
          choices: [
            { letter: "A", text: "two reasons in favor, then two objections with replies" },
            { letter: "B", text: "a timeline of the shop from its opening to its closing" },
            { letter: "C", text: "a list of steps for students who want to become mechanics" },
            { letter: "D", text: "a comparison of Lakemont with a nearby high school" }
          ],
          correct: "A"
        },
        {
          id: "figure",
          sol: "9.RV.1.F",
          sub: "9.RV.1.F.1",
          stem: "In sentence 18, saying the industry will be left stranded on the side of the road suggests that without new technicians, the repair industry will —",
          choices: [
            { letter: "A", text: "move its shops away from busy highways" },
            { letter: "B", text: "stop building electric vehicles entirely" },
            { letter: "C", text: "hire only drivers who never break down" },
            { letter: "D", text: "be stuck and unable to keep up with demand" }
          ],
          correct: "D"
        }
      ]
    },

    /* ───────────── 15. Paired texts · garage (level 2) ───────────── */
    {
      id: "g9-dsr-c44-electric-bay",
      family: "G9",
      title: "The Electric Bay: News Story + Mechanic's Blog",
      kind: "Paired texts · 9.DSR",
      blurb: "A garage owner worries about electric cars; a mechanic who took the training writes about what he found.",
      level: 2,
      passage:
        "<p><strong>Text 1 — \"Small Garage, Big Change,\" from the Brightwater Weekly</strong></p>" +
        "<p>" + N(1) + "For forty-one years, Hollis Street Auto has fixed the cars of Brightwater the same way: oil changes, brake jobs, and engine repairs. " +
        N(2) + "Now owner Marguerite Fontaine says the shop must change or risk fading away. " +
        N(3) + "Electric vehicles have no oil to change, no spark plugs, and no exhaust system, which removes many of the routine jobs that keep small garages busy. " +
        N(4) + "Electric motors also have far fewer moving parts than gasoline engines. " +
        N(5) + "\"Fewer parts means fewer repairs,\" Fontaine said. \"That's good for drivers and hard for us.\" " +
        N(6) + "Training is another hurdle. " +
        N(7) + "Electric cars carry high-voltage battery systems that can seriously injure an untrained worker, so technicians need special courses and safety equipment before they touch them. " +
        N(8) + "Fontaine estimates that preparing her three mechanics will cost about twelve thousand dollars. " +
        N(9) + "Still, she plans to start this spring. " +
        N(10) + "Electric cars make up a small share of the vehicles in Brightwater, but dealers report that sales climb each year. " +
        N(11) + "\"If I wait until half the town drives electric,\" she said, \"they'll already have found someone else.\"</p>" +
        "<p><strong>Text 2 — \"Gloves First,\" a post on technician Yusuf Demir's blog</strong></p>" +
        "<p>" + N(12) + "Last fall, my boss sent me to a two-week course on servicing electric vehicles, and I went in grumbling. " +
        N(13) + "I had spent eighteen years learning the sounds of engines, and I was not eager to start over. " +
        N(14) + "The first morning, the instructor made us practice putting on insulated gloves and testing them for tiny holes, and I wondered whether I would ever touch a real car. " +
        N(15) + "By the end of the week, though, I realized that electric cars still need much of the work I already knew how to do. " +
        N(16) + "They still have tires, brakes, suspension, air conditioning, and windshield wipers. " +
        N(17) + "They are heavy, too, so their tires and suspension parts often wear out faster than those on gas cars. " +
        N(18) + "What changed most was not my toolbox but my patience: high-voltage systems demand that you slow down and follow every safety step. " +
        N(19) + "Last month, I repaired a cooling pump on a customer's electric hatchback, and she told me she had been driving forty miles to find a shop that would take it. " +
        N(20) + "Now she drives four blocks. " +
        N(21) + "For a small garage, that's a customer worth keeping.</p>",
      claims: [
        {
          id: "shared",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which idea do both texts about electric vehicles support?",
          choices: [
            { letter: "A", text: "Electric cars will soon replace every gasoline car in town." },
            { letter: "B", text: "Training courses for mechanics are too costly to be worth it." },
            { letter: "C", text: "Small garages can still find work by preparing for electric cars." },
            { letter: "D", text: "Electric cars need more repairs than gasoline cars do." }
          ],
          correct: "C"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The two texts about the electric bay differ mainly in that Text 1 —",
          choices: [
            { letter: "A", text: "reports an owner's worries and plans, while Text 2 shares a worker's experience" },
            { letter: "B", text: "argues against electric cars, while Text 2 argues in favor of them" },
            { letter: "C", text: "gives step-by-step repair directions, while Text 2 tells a story" },
            { letter: "D", text: "describes a large dealership, while Text 2 describes a home garage" }
          ],
          correct: "A"
        },
        {
          id: "answer",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Which sentence from Text 2 most directly answers the worry in sentence 3 of Text 1 that routine jobs will disappear?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 14" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 20" }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Taken together, the two texts suggest that Fontaine's training plan will most likely —",
          choices: [
            { letter: "A", text: "force Hollis Street Auto to stop doing brake jobs" },
            { letter: "B", text: "help her shop keep customers who might go elsewhere" },
            { letter: "C", text: "make her mechanics forget their gasoline-engine skills" },
            { letter: "D", text: "fail because electric cars almost never need repairs" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "9.DSR.C",
          sub: "9.DSR.C.1",
          stem: "Select TWO sentences that together best show that safety training is a key part of working on electric cars.",
          choices: [
            { letter: "A", text: "Sentence 5" },
            { letter: "B", text: "Sentence 7" },
            { letter: "C", text: "Sentence 10" },
            { letter: "D", text: "Sentence 14" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "tone",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Compared with Fontaine's comments in Text 1, Yusuf Demir's post in Text 2 sounds more —",
          choices: [
            { letter: "A", text: "angry and impatient" },
            { letter: "B", text: "formal and distant" },
            { letter: "C", text: "fearful and gloomy" },
            { letter: "D", text: "personal and reassured" }
          ],
          correct: "D"
        },
        {
          id: "detail",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "According to Text 2, why do tires and suspension parts on electric cars often wear out faster?",
          choices: [
            { letter: "A", text: "Electric cars are heavy." },
            { letter: "B", text: "Electric cars drive faster." },
            { letter: "C", text: "Drivers skip oil changes." },
            { letter: "D", text: "The batteries leak acid." }
          ],
          correct: "A"
        }
      ]
    },

    /* ───────────── 16. Paired texts · radio (level 3) ───────────── */
    {
      id: "g9-dsr-c44-overnight",
      family: "G9",
      title: "The Overnight Hours: Station Notice + Listener Letter",
      kind: "Paired texts · 9.DSR",
      blurb: "A community station plans to automate its overnight shows; a night-shift nurse writes back.",
      level: 3,
      passage:
        "<p><strong>Text 1 — Notice from KTMB Community Radio</strong></p>" +
        "<p>" + N(1) + "Beginning March 1, KTMB will replace live hosts between midnight and 6 a.m. with an automated program of music and recorded station announcements. " +
        N(2) + "This was not an easy decision. " +
        N(3) + "For the past year, we have struggled to fill overnight shifts; on eleven nights last fall, a single volunteer covered six hours alone because no one else signed up. " +
        N(4) + "Our last listener survey also found that fewer than four percent of responses came from people who tune in after midnight. " +
        N(5) + "Running the building overnight costs the station roughly nine thousand dollars a year in heating, lighting, and security. " +
        N(6) + "Automation will allow us to put that money toward our local news program, which listeners rank as our most valuable service. " +
        N(7) + "We want to be clear that KTMB is not going silent. " +
        N(8) + "The overnight hours will still carry music selected by our volunteer hosts, along with weather updates recorded each evening. " +
        N(9) + "Volunteers who currently host overnight shows are invited to move to weekend slots. " +
        N(10) + "We thank everyone who has kept the lights on through the night for so many years. — Teodora Lungu, Station Manager</p>" +
        "<p><strong>Text 2 — Letter from a Listener</strong></p>" +
        "<p>" + N(11) + "I am one of the four percent. " +
        N(12) + "I work the night shift at Valley General Hospital, and on my drive home at 3 a.m., KTMB is the only voice on the road. " +
        N(13) + "I understand the station's troubles with money and volunteers, and I do not doubt the numbers. " +
        N(14) + "But a survey counts only the people who fill out surveys, and it may miss those who are working while everyone else sleeps. " +
        N(15) + "Bakers, truck drivers, security guards, and nurses rarely have time to answer questionnaires. " +
        N(16) + "More important, a recorded weather report cannot do what a live host can. " +
        N(17) + "Two winters ago, when ice closed the river bridge at 4 a.m., the overnight host read the detour route every fifteen minutes, and I got home safely because of it. " +
        N(18) + "A playlist would have kept playing songs. " +
        N(19) + "I am not asking for six live hours every night. " +
        N(20) + "Even one live hour, from 3 to 4 a.m., or a host who can be reached by phone in an emergency, would keep the station truly local. " +
        N(21) + "Please don't let the quietest hours become the emptiest ones. — Lucia Benavides, RN</p>",
      claims: [
        {
          id: "agree",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "On which point do the writers of the two KTMB texts agree?",
          choices: [
            { letter: "A", text: "The survey proves that almost no one listens at night." },
            { letter: "B", text: "Weekend shows matter more than the overnight hours." },
            { letter: "C", text: "Recorded weather reports are as useful as live ones." },
            { letter: "D", text: "The station faces real money and volunteer problems." }
          ],
          correct: "D"
        },
        {
          id: "challenge",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "In sentence 14, the writer of Text 2 most directly challenges the evidence in which sentence from Text 1?",
          choices: [
            { letter: "A", text: "Sentence 1" },
            { letter: "B", text: "Sentence 4" },
            { letter: "C", text: "Sentence 6" },
            { letter: "D", text: "Sentence 9" }
          ],
          correct: "B"
        },
        {
          id: "respond",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "How does Text 2 respond to the promise in sentence 8 of Text 1 that recorded weather updates will continue overnight?",
          choices: [
            { letter: "A", text: "It argues that recordings cannot report sudden emergencies." },
            { letter: "B", text: "It thanks the station for keeping the weather on the air." },
            { letter: "C", text: "It claims that the weather updates are usually inaccurate." },
            { letter: "D", text: "It asks for weather updates to be recorded each morning." }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "The two KTMB texts differ mainly in how they view —",
          choices: [
            { letter: "A", text: "the quality of the station's local news program" },
            { letter: "B", text: "the hard work of the station's weekend volunteers" },
            { letter: "C", text: "the value of a live voice during the overnight hours" },
            { letter: "D", text: "the cost of heating and lighting the station building" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "9.DSR.C",
          sub: "9.DSR.C.1",
          stem: "Select TWO sentences from Text 2 that best support the claim that a live host provides something automation cannot.",
          choices: [
            { letter: "A", text: "Sentence 12" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 17" },
            { letter: "D", text: "Sentence 18" }
          ],
          correct: ["C", "D"]
        },
        {
          id: "next",
          sol: "9.DSR.D",
          sub: "9.DSR.D.2",
          stem: "Using both texts, which plan would best address the station's concerns and the listener's request?",
          choices: [
            { letter: "A", text: "automate most overnight hours but keep one live hour" },
            { letter: "B", text: "cancel the local news program to pay for night hosts" },
            { letter: "C", text: "keep six live overnight hours with a single volunteer" },
            { letter: "D", text: "stop broadcasting completely between midnight and 6 a.m." }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "9.RI.1.A",
          sub: "9.RI.1.A.1",
          stem: "The main purpose of the station manager's notice in Text 1 is to —",
          choices: [
            { letter: "A", text: "ask listeners to vote on the overnight schedule" },
            { letter: "B", text: "announce a change and explain the reasons for it" },
            { letter: "C", text: "recruit new volunteers for the overnight shift" },
            { letter: "D", text: "describe the history of the station's night shows" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
