/* SOL Labyrinth — Grade 11 long packs (expansion v5.15, file 108): radio stations, ice skating,
 * mountain rescue and glassblowing. Thirteen long packs (390-520 words, 8 questions each).
 * Original text only; no published text, no real people. Loaded after content.js;
 * pushes into the live HEIST_PACKS array. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };
  var L = function (i) { return '<span class="n">' + i + '</span> '; };

  var PACKS = [
    /* 1 · LITERARY · radio station */
    {
      id: "g11-rl-c108-deadair",
      family: "G11",
      title: "Eleven Minutes",
      kind: "Literary · 11.RL",
      blurb: "A teen volunteer at a community radio station faces the one thing she was told never to allow.",
      level: 1,
      passage:
        "<p>" + N(1) + "At 2:14 on a Sunday morning, the computer that ran WQVR's overnight music froze with a gray box on its screen, and Esperanza Malave, who was seventeen and had been a volunteer for exactly six weeks, watched the level meters on the board drop to nothing. " +
        N(2) + "In radio, silence has a name. " +
        N(3) + "Mr. Asante, the station manager, had said it on her first day as if he were warning her about a hot stove: \"Dead air is the one thing we never give them.\" " +
        N(4) + "Now the dead air was hers.</p>" +
        "<p>" + N(5) + "She knew the steps for restarting the computer, and she began them, but the screen told her the restart would take eleven minutes. " +
        N(6) + "Eleven minutes was a lifetime. " +
        N(7) + "Somewhere out in the county, people who had chosen WQVR were hearing nothing and reaching for the dial.</p>" +
        "<p>" + N(8) + "Esperanza looked at the microphone the way a swimmer looks at cold water. " +
        N(9) + "She had never spoken on the air; her job was to log songs, answer the phone, and keep the coffee from burning. " +
        N(10) + "Her hand found the switch anyway. " +
        N(11) + "\"Good morning,\" she said, and her own voice in the headphones sounded thin and borrowed. " +
        N(12) + "\"This is WQVR, and our music computer has decided to take a break, so you're stuck with me for a few minutes.\"</p>" +
        "<p>" + N(13) + "She had no script, so she told them the truth. " +
        N(14) + "She described the studio: the cracked leather chair, the photographs of hosts who had retired before she was born, the window where the parking lot light buzzed like an insect. " +
        N(15) + "She read the weather off the printout taped to the wall. " +
        N(16) + "Then the phone line blinked.</p>" +
        "<p>" + N(17) + "The caller was a nurse named Corinne who was driving home from a twelve-hour shift. " +
        N(18) + "\"I thought my radio was broken,\" Corinne said. " +
        N(19) + "\"Then I heard you, and I thought, someone else is awake.\" " +
        N(20) + "A second caller, a baker already shaping dough for the morning, asked Esperanza what song she would play if the computer ever came back. " +
        N(21) + "She named one of her grandmother's old boleros, and the baker laughed and said he knew it.</p>" +
        "<p>" + N(22) + "When the computer finally returned, its music rolled in smooth and seamless, and Esperanza felt something close to disappointment. " +
        N(23) + "She wrote the outage in the log in her neatest handwriting: 2:14 to 2:25, technical failure, volunteer on air.</p>" +
        "<p>" + N(24) + "On Monday, Mr. Asante read the log and called her into his office. " +
        N(25) + "She braced herself for a lecture. " +
        N(26) + "Instead he played back the recording of her eleven minutes and listened without speaking, his chin resting on his fist. " +
        N(27) + "\"You broke the rule,\" he said finally. " +
        N(28) + "\"You gave them air that was alive.\" " +
        N(29) + "He handed her a schedule with a new line penciled in at the bottom: Saturday overnight, two to three, E. Malave. " +
        N(30) + "Below it, in smaller letters, he had written a single word: unscripted.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does Esperanza's night at WQVR most clearly develop?",
          choices: [
            { letter: "A", text: "Following a mentor's rules is the surest way to earn his trust." },
            { letter: "B", text: "Technology will eventually fail anyone who depends on it." },
            { letter: "C", text: "Honest, unpolished speech can connect people deeply." },
            { letter: "D", text: "Young volunteers are often handed too much responsibility." }
          ],
          correct: "C"
        },
        {
          id: "swimmer",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 8, comparing Esperanza to a swimmer looking at cold water suggests that she —",
          choices: [
            { letter: "A", text: "dreads the plunge but senses that she must take it" },
            { letter: "B", text: "is too chilled in the studio to think clearly" },
            { letter: "C", text: "has already decided that she will refuse to speak" },
            { letter: "D", text: "expects the listeners to be unfriendly toward her" }
          ],
          correct: "A"
        },
        {
          id: "noscript",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentences 13–15 reveal that, without a script, Esperanza —",
          choices: [
            { letter: "A", text: "invents stories to make the studio sound exciting" },
            { letter: "B", text: "repeats the station's rules to calm her nerves" },
            { letter: "C", text: "reads notes that Mr. Asante left for emergencies" },
            { letter: "D", text: "describes her surroundings in plain, honest detail" }
          ],
          correct: "D"
        },
        {
          id: "awake",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.2",
          stem: "Which sentence best supports the idea that Esperanza's broadcast eased a listener's sense of being alone?",
          choices: [
            { letter: "A", text: "Sentence 7" },
            { letter: "B", text: "Sentence 19" },
            { letter: "C", text: "Sentence 22" },
            { letter: "D", text: "Sentence 26" }
          ],
          correct: "B"
        },
        {
          id: "borrowed",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 11, the word borrowed suggests that Esperanza's on-air voice —",
          choices: [
            { letter: "A", text: "was copied from Mr. Asante's style of hosting" },
            { letter: "B", text: "did not yet feel as though it belonged to her" },
            { letter: "C", text: "was much quieter than the music before it" },
            { letter: "D", text: "sounded older than she actually was" }
          ],
          correct: "B"
        },
        {
          id: "lifetime",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "The exaggeration in sentence 6 that eleven minutes was a lifetime mainly emphasizes —",
          choices: [
            { letter: "A", text: "how slowly the station's aging equipment operates" },
            { letter: "B", text: "how little Esperanza knows about the computer" },
            { letter: "C", text: "how long listeners will wait before giving up" },
            { letter: "D", text: "how unbearable the silence feels to Esperanza" }
          ],
          correct: "D"
        },
        {
          id: "resolve",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Sentences 27–30 resolve the story by showing that Mr. Asante —",
          choices: [
            { letter: "A", text: "values the spirit of her broadcast over the letter of his rule" },
            { letter: "B", text: "plans to punish her with the least popular shift at the station" },
            { letter: "C", text: "has decided to replace the music computer with live hosts" },
            { letter: "D", text: "wants her to write scripts so another outage goes smoothly" }
          ],
          correct: "A"
        },
        {
          id: "seamless",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 22, the word smooth helps show that seamless most nearly means —",
          choices: [
            { letter: "A", text: "carefully stitched" },
            { letter: "B", text: "louder than before" },
            { letter: "C", text: "without any break" },
            { letter: "D", text: "without any feeling" }
          ],
          correct: "C"
        }
      ]
    },

    /* 2 · LITERARY · ice skating */
    {
      id: "g11-rl-c108-fallcount",
      family: "G11",
      title: "Two Hundred and Twelve",
      kind: "Literary · 11.RL",
      blurb: "A figure skater keeps a notebook of every fall, and learns what her coach thinks it really records.",
      level: 3,
      passage:
        "<p>" + N(1) + "The ice at the Fairlawn Regional Arena was the gray-white of old dishwater, and Mei Okabe could feel every groove in it through her blades as she circled, waiting for her name. " +
        N(2) + "Ninety seconds into her program came the double axel, the jump she had landed four hundred times in practice and missed, by her own careful count, two hundred and eleven.</p>" +
        "<p>" + N(3) + "She knew the number because Coach Wiśniewska had made her keep it. " +
        N(4) + "In September, on the first morning of the season, the coach had handed her a pocket notebook with a cardboard cover and said, \"Every fall goes in here.\" " +
        N(5) + "Mei, who was fifteen and proud, had assumed the notebook was a punishment. " +
        N(6) + "For weeks she wrote the marks small and slanted, as though she could make them take up less room.</p>" +
        "<p>" + N(7) + "Then one gray October morning the coach skated over, took the notebook, and flipped through it without expression. " +
        N(8) + "\"Two hundred falls,\" she said. " +
        N(9) + "\"And how many times did you stay down?\" " +
        N(10) + "Mei did not understand the question. " +
        N(11) + "\"None,\" she said. " +
        N(12) + "\"None,\" the coach repeated, and handed the notebook back as if it were a medal. " +
        N(13) + "\"This is not a record of falling, Mei. " +
        N(14) + "It is a record of standing up.\"</p>" +
        "<p>" + N(15) + "Mei had not believed her, not entirely. " +
        N(16) + "A record of standing up still had falls in it, and the judges did not hand out points for getting off the ice quickly.</p>" +
        "<p>" + N(17) + "Now the music began, a cello piece her mother called mournful and Mei privately called patient. " +
        N(18) + "She skated the opening as she had skated it in practice, her arms unhurried, her edges deep. " +
        N(19) + "The crowd was small and polite: parents in winter coats, a row of younger skaters with glitter on their cheeks, her brother Kenji holding a sign he had lettered himself and spelled wrong.</p>" +
        "<p>" + N(20) + "She set up for the axel, stepped forward, and launched. " +
        N(21) + "For a moment the arena turned around her like a slow carousel, and then the ice came up hard against her hip.</p>" +
        "<p>" + N(22) + "There is a silence that follows a fall in competition, a breath held by everyone in the building who has ever fallen. " +
        N(23) + "Mei heard it. " +
        N(24) + "She also heard, underneath it, the cello still going, steady and unbothered, as if nothing had happened at all. " +
        N(25) + "Two hundred and twelve, she thought, and she was up before she had finished thinking it.</p>" +
        "<p>" + N(26) + "She did not win. " +
        N(27) + "She finished sixth of fourteen, which on the scoreboard looked like an ordinary number. " +
        N(28) + "But afterward, in the cold hallway that smelled of rubber mats, she took out the notebook and made the newest mark, and for the first time she made it large, dark, and perfectly straight.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is most clearly developed through Mei's notebook and her fall at the regional competition?",
          choices: [
            { letter: "A", text: "Strict coaches produce stronger athletes than gentle ones do." },
            { letter: "B", text: "Resilience is measured by recovery, not by never failing." },
            { letter: "C", text: "Athletes should keep their mistakes private from family." },
            { letter: "D", text: "Talent matters less than the music a performer chooses." }
          ],
          correct: "B"
        },
        {
          id: "structure",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "The author structures \"Two Hundred and Twelve\" mainly by —",
          choices: [
            { letter: "A", text: "moving day by day from September to the competition" },
            { letter: "B", text: "alternating between Mei's view and her coach's view" },
            { letter: "C", text: "presenting the results first and then the program" },
            { letter: "D", text: "placing a flashback inside the scene at the arena" }
          ],
          correct: "D"
        },
        {
          id: "slanted",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 6 reveals that, early in the season, Mei —",
          choices: [
            { letter: "A", text: "was ashamed of her falls and tried to shrink them" },
            { letter: "B", text: "had trouble writing neatly while standing on the ice" },
            { letter: "C", text: "suspected the coach was exaggerating her mistakes" },
            { letter: "D", text: "kept the notebook mainly to impress her coach" }
          ],
          correct: "A"
        },
        {
          id: "medal",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 12, the coach hands the notebook back as if it were a medal. This comparison suggests that she —",
          choices: [
            { letter: "A", text: "is mocking Mei's pride with an exaggerated ceremony" },
            { letter: "B", text: "expects Mei to win a medal at the regional event" },
            { letter: "C", text: "sees the record of falls as something worth honoring" },
            { letter: "D", text: "wants Mei to stop counting her falls from now on" }
          ],
          correct: "C"
        },
        {
          id: "patient",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "The contrast between the mother's word mournful and Mei's word patient in sentence 17 suggests that Mei —",
          choices: [
            { letter: "A", text: "dislikes the music her mother chose for the program" },
            { letter: "B", text: "is too nervous to notice the mood of the cello piece" },
            { letter: "C", text: "hears a calm endurance in the music that suits her" },
            { letter: "D", text: "worries the judges will find the music too slow" }
          ],
          correct: "C"
        },
        {
          id: "echo",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Which detail from the competition scene most directly echoes the coach's lesson in sentences 13–14?",
          choices: [
            { letter: "A", text: "Mei rising before she finishes counting the fall" },
            { letter: "B", text: "Kenji's misspelled sign waving in the small crowd" },
            { letter: "C", text: "the gray-white color of the worn arena ice" },
            { letter: "D", text: "the sixth-place finish shown on the scoreboard" }
          ],
          correct: "A"
        },
        {
          id: "unbothered",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 24, the word unbothered describes the cello music as —",
          choices: [
            { letter: "A", text: "too quiet for the crowd to hear" },
            { letter: "B", text: "ignored by the judges and audience" },
            { letter: "C", text: "stopped only for a brief moment" },
            { letter: "D", text: "continuing calmly despite the fall" }
          ],
          correct: "D"
        },
        {
          id: "lastmark",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "The way Mei draws the newest mark in sentence 28 suggests that she has come to —",
          choices: [
            { letter: "A", text: "accept that she will never land the double axel" },
            { letter: "B", text: "view her falls as marks of recovery, not shame" },
            { letter: "C", text: "resent the judges for ranking her only sixth" },
            { letter: "D", text: "plan to stop keeping the notebook next season" }
          ],
          correct: "B"
        }
      ]
    },

    /* 3 · LITERARY · glassblowing */
    {
      id: "g11-rl-c108-annealer",
      family: "G11",
      title: "What Glass Remembers",
      kind: "Literary · 11.RL",
      blurb: "An impatient apprentice in a glassblowing studio learns why his teacher works so slowly.",
      level: 1,
      passage:
        "<p>" + N(1) + "The furnace at Brandão Glassworks never went out, not even on Sundays, and by the third week of his summer apprenticeship Ravi Menon had stopped noticing the roar of it, the way people who live beside the ocean stop hearing waves. " +
        N(2) + "What he had not stopped noticing was how slowly Mr. Brandão did everything.</p>" +
        "<p>" + N(3) + "The old glassblower gathered molten glass on the end of his pipe as though he were winding honey onto a spoon. " +
        N(4) + "He turned the pipe constantly, never hurrying, never stopping, and he shaped the glowing bubble with a wet pad of folded newspaper that hissed and smoked against it. " +
        N(5) + "A simple bowl could take him forty minutes. " +
        N(6) + "Ravi, who had watched dozens of videos of glassblowers online, was certain that he could do it in fifteen.</p>" +
        "<p>" + N(7) + "On a Thursday afternoon, while Mr. Brandão was on the phone with a supplier, Ravi got his chance. " +
        N(8) + "He gathered, blew, and shaped a small blue vase, and it came together so quickly that he laughed out loud. " +
        N(9) + "It was not perfect, but it was close, and it was his. " +
        N(10) + "He knocked it off the pipe, set it in the annealer, the oven that lets finished glass cool slowly overnight, and then, because he could not wait to hold it, he opened the door after an hour and lifted the vase out to look.</p>" +
        "<p>" + N(11) + "The sound it made was very small, like a knuckle tapping a window. " +
        N(12) + "A crack ran from the lip to the base, as straight and sudden as a line drawn with a ruler.</p>" +
        "<p>" + N(13) + "Ravi was still holding the two halves when Mr. Brandão came back. " +
        N(14) + "He waited for the old man to be angry. " +
        N(15) + "Instead Mr. Brandão took one half, turned it in the light, and nodded as if it had told him something interesting. " +
        N(16) + "\"Glass remembers,\" he said. " +
        N(17) + "\"If you cool it too fast, the outside gets hard while the inside is still moving. " +
        N(18) + "They pull against each other until one of them gives up.\"</p>" +
        "<p>" + N(19) + "Then he led Ravi to a dusty shelf at the back of the studio that Ravi had never paid attention to. " +
        N(20) + "On it sat a row of misshapen objects: a bowl that leaned like a tired dog, a green cup with a bubble trapped in its wall, a pitcher whose handle had slumped into a question mark. " +
        N(21) + "\"Mine,\" said Mr. Brandão. " +
        N(22) + "\"From my first year. " +
        N(23) + "I keep them to remember what my hands did before they learned to wait.\"</p>" +
        "<p>" + N(24) + "He set the cracked halves of the blue vase at the end of the row. " +
        N(25) + "The next morning Ravi gathered his glass slowly, turning and turning the pipe, and when his new vase went into the annealer he did not open the door until the following day.</p>",
      claims: [
        {
          id: "fifteen",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 6 mainly reveals that, at the start of the story, Ravi is —",
          choices: [
            { letter: "A", text: "overconfident about how easily the craft can be learned" },
            { letter: "B", text: "bored by the work and eager to leave the apprenticeship" },
            { letter: "C", text: "jealous of the time Mr. Brandão spends with suppliers" },
            { letter: "D", text: "afraid of the furnace and the heat of molten glass" }
          ],
          correct: "A"
        },
        {
          id: "honey",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "In sentence 3, comparing the gathering of glass to winding honey onto a spoon emphasizes Mr. Brandão's —",
          choices: [
            { letter: "A", text: "fondness for sweet foods during long workdays" },
            { letter: "B", text: "difficulty lifting the heavy glass on his pipe" },
            { letter: "C", text: "slow, steady control of a thick, flowing material" },
            { letter: "D", text: "habit of measuring materials before using them" }
          ],
          correct: "C"
        },
        {
          id: "foreshadow",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "Which detail from the first half of the story best foreshadows the cracked vase?",
          choices: [
            { letter: "A", text: "the roaring furnace that never goes out, even on Sundays (sentence 1)" },
            { letter: "B", text: "Ravi's certainty that he could work faster (sentence 6)" },
            { letter: "C", text: "Mr. Brandão's phone call with a glass supplier (sentence 7)" },
            { letter: "D", text: "the blue color of the glass Ravi uses (sentence 8)" }
          ],
          correct: "B"
        },
        {
          id: "remembers",
          sol: "11.RL.2.C",
          sub: "11.RL.2.C.2",
          stem: "Mr. Brandão's explanation in sentences 16–18 gives the glass human qualities. This personification mainly suggests that —",
          choices: [
            { letter: "A", text: "glass is too unpredictable for a beginner to handle" },
            { letter: "B", text: "Mr. Brandão cares more for materials than students" },
            { letter: "C", text: "the vase cracked because Ravi chose the wrong color" },
            { letter: "D", text: "rushing a process creates strains that show later" }
          ],
          correct: "D"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme do the cracked vase and Mr. Brandão's shelf of early pieces most clearly develop?",
          choices: [
            { letter: "A", text: "Older artists should pass their tools on to younger ones." },
            { letter: "B", text: "A finished object matters more than the effort behind it." },
            { letter: "C", text: "Students learn best by watching videos of experts." },
            { letter: "D", text: "Mastery grows out of mistakes that teach patience." }
          ],
          correct: "D"
        },
        {
          id: "slumped",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 20, the word slumped suggests that the pitcher's handle —",
          choices: [
            { letter: "A", text: "broke off and was glued back on later" },
            { letter: "B", text: "sagged out of shape while still soft" },
            { letter: "C", text: "was carved into a deliberate design" },
            { letter: "D", text: "had been polished to a high shine" }
          ],
          correct: "B"
        },
        {
          id: "ending",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the final paragraph (sentences 24–25) resolve the story of Ravi's apprenticeship?",
          choices: [
            { letter: "A", text: "It reveals that Mr. Brandão plans to sell the cracked vase." },
            { letter: "B", text: "It shows Ravi giving up glassblowing for the summer." },
            { letter: "C", text: "It shows Ravi applying the lesson by waiting." },
            { letter: "D", text: "It suggests that Ravi still doubts the old man's advice." }
          ],
          correct: "C"
        },
        {
          id: "misshapen",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 20, the word misshapen most nearly means —",
          choices: [
            { letter: "A", text: "irregularly formed" },
            { letter: "B", text: "carelessly painted" },
            { letter: "C", text: "recently repaired" },
            { letter: "D", text: "broken into pieces" }
          ],
          correct: "A"
        }
      ]
    },

    /* 4 · POETRY · mountain rescue */
    {
      id: "g11-rl-c108-searchgrid",
      family: "G11",
      title: "Search Grid",
      kind: "Poetry · 11.RL",
      blurb: "A volunteer on a mountain rescue line searches a fogged-in ridge for a lost boy.",
      level: 2,
      passage:
        "<p class=\"poem\">" +
        L(1) + "We walk the slope in a line, an arm's length apart,<br>" +
        L(2) + "eleven coats of orange stitched across the scree,<br>" +
        L(3) + "and no one speaks except to call his name<br>" +
        L(4) + "into a fog that swallows it like wool.<br>" +
        L(5) + "The map says this is ridge. The map is sure.<br>" +
        L(6) + "The mountain, under cloud, says nothing back.<br>" +
        L(7) + "I count my steps the way my trainer taught me:<br>" +
        L(8) + "forty, and look; forty, and look again.</p>" +
        "<p class=\"poem\">" +
        L(9) + "Somewhere a boy of twelve is sitting still<br>" +
        L(10) + "because his father told him once, If lost,<br>" +
        L(11) + "stay where you are and make yourself a tree.<br>" +
        L(12) + "I think of him as patient bark and root,<br>" +
        L(13) + "a small trunk holding to the ground it knows,<br>" +
        L(14) + "while we, the moving ones, are blind with weather.<br>" +
        L(15) + "The radio crackles: nothing on the east face.<br>" +
        L(16) + "Forty, and look. The fog is not our enemy;</p>" +
        "<p class=\"poem\">" +
        L(17) + "it is only the shape of what we do not know.<br>" +
        L(18) + "Then, low and to my left, a whistle, thin,<br>" +
        L(19) + "three notes, the signal every hiker is given,<br>" +
        L(20) + "and the whole line bends toward it like a river<br>" +
        L(21) + "finding the one way down a stubborn hill.<br>" +
        L(22) + "He is smaller than his name. He is cold.<br>" +
        L(23) + "He says, I stayed, as if confessing something,<br>" +
        L(24) + "and I tell him, Yes. That is how we found you.</p>",
      claims: [
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme is best supported by \"Search Grid\"?",
          choices: [
            { letter: "A", text: "Maps are more reliable than a rescuer's instincts." },
            { letter: "B", text: "Fog makes mountain rescue nearly impossible." },
            { letter: "C", text: "Children should never hike without a radio." },
            { letter: "D", text: "Staying calm and still can be its own courage." }
          ],
          correct: "D"
        },
        {
          id: "tree",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 11, the father's advice to make yourself a tree mainly means the boy should —",
          choices: [
            { letter: "A", text: "climb high enough to see above the thick fog" },
            { letter: "B", text: "stay in one place so searchers can reach him" },
            { letter: "C", text: "hide among the trees to stay out of the wind" },
            { letter: "D", text: "pretend to be brave even while he is afraid" }
          ],
          correct: "B"
        },
        {
          id: "mapsure",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "Lines 5–6 contrast the map, which is sure, with the mountain, which says nothing back. This contrast mainly creates a sense of —",
          choices: [
            { letter: "A", text: "uncertainty that the searchers' tools cannot remove" },
            { letter: "B", text: "anger at the mapmakers for their careless mistakes" },
            { letter: "C", text: "relief that the searchers already know the route" },
            { letter: "D", text: "humor about the rescuers' stubborn old habits" }
          ],
          correct: "A"
        },
        {
          id: "shift",
          sol: "11.RL.1.B",
          sub: "11.RL.1.B.1",
          stem: "How does the shift that begins in line 18 shape the meaning of \"Search Grid\"?",
          choices: [
            { letter: "A", text: "It moves from the rescuers' view to the father's view." },
            { letter: "B", text: "It replaces the hopeful tone with a sense of failure." },
            { letter: "C", text: "It turns an uncertain search into a sudden discovery." },
            { letter: "D", text: "It pauses the scene to explain how whistles are used." }
          ],
          correct: "C"
        },
        {
          id: "speaker",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "The repeated count in lines 7–8 and line 16 shows that the speaker is best described as —",
          choices: [
            { letter: "A", text: "disciplined, keeping a careful routine despite doubt" },
            { letter: "B", text: "impatient, wishing the search would move faster" },
            { letter: "C", text: "careless, skipping steps whenever the fog thickens" },
            { letter: "D", text: "frightened, convinced the boy will not be found" }
          ],
          correct: "A"
        },
        {
          id: "stubborn",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.1",
          stem: "In line 21, the word stubborn suggests that the hill —",
          choices: [
            { letter: "A", text: "is too steep for anyone to climb" },
            { letter: "B", text: "was named for a difficult hiker" },
            { letter: "C", text: "is covered in thick, tangled brush" },
            { letter: "D", text: "resists any easy path down its slope" }
          ],
          correct: "D"
        },
        {
          id: "confess",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Line 23, in which the boy says I stayed as if confessing something, implies that he —",
          choices: [
            { letter: "A", text: "is proud of having disobeyed his father" },
            { letter: "B", text: "worries that waiting was the wrong choice" },
            { letter: "C", text: "wants the rescuers to praise his bravery" },
            { letter: "D", text: "is too cold to remember what happened" }
          ],
          correct: "B"
        },
        {
          id: "river",
          sol: "11.RL.2.A",
          sub: "11.RL.2.A.2",
          stem: "In lines 20–21, the simile comparing the line of searchers to a river mainly emphasizes —",
          choices: [
            { letter: "A", text: "how loud the searchers become after the whistle" },
            { letter: "B", text: "how tired the rescuers feel after hours of walking" },
            { letter: "C", text: "how quickly the whole group turns to the signal" },
            { letter: "D", text: "how the rain has begun to flood the trail below" }
          ],
          correct: "C"
        }
      ]
    },

    /* 5 · DRAMA · radio station */
    {
      id: "g11-rl-c108-swapsell",
      family: "G11",
      title: "Eight Minutes to Ten",
      kind: "Drama · 11.RL",
      blurb: "On a Saturday call-in show, a veteran host notices that her most reliable caller has not called.",
      level: 2,
      passage:
        "<p><em>" + N(1) + "A cramped studio at WVLN, a small community station. A wall clock reads 9:52 a.m. ROSALIND PEREIRA, who has hosted the Saturday Swap and Sell call-in show for twenty-two years, sits at the microphone. FEMI OKORO, sixteen, runs the board behind the glass, wearing headphones too big for him. Coffee cups, a stack of index cards, and a battered desk phone crowd every surface.</em></p>" +
        "<p><strong>ROSALIND:</strong> " + N(2) + "<em>(into the mic, warm)</em> That's a lawn mower, gently used, forty dollars or best offer, and if you want it, call Darlene out on Route 9. " +
        N(3) + "We'll take one more call before the news.</p>" +
        "<p><strong>FEMI:</strong> " + N(4) + "<em>(over the talkback)</em> Lines are empty, Ms. Pereira.</p>" +
        "<p><strong>ROSALIND:</strong> " + N(5) + "<em>(muting her mic, frowning at the clock)</em> Empty. " +
        N(6) + "It's eight minutes to ten.</p>" +
        "<p><strong>FEMI:</strong> " + N(7) + "Is that bad?</p>" +
        "<p><strong>ROSALIND:</strong> " + N(8) + "Mr. Halvorsen calls at eight minutes to ten. " +
        N(9) + "Every Saturday for eleven years, he calls to sell the same rocking chair, and every Saturday nobody buys it, and he never once lowers the price.</p>" +
        "<p><strong>FEMI:</strong> " + N(10) + "<em>(laughing)</em> Maybe somebody finally did.</p>" +
        "<p><strong>ROSALIND:</strong> " + N(11) + "Nobody buys that chair, Femi. " +
        N(12) + "The chair isn't the point.</p>" +
        "<p><em>" + N(13) + "FEMI stops laughing. He looks at the silent phone panel, then at ROSALIND, who is tapping a pencil against the desk faster and faster.</em></p>" +
        "<p><strong>FEMI:</strong> " + N(14) + "You think something's wrong.</p>" +
        "<p><strong>ROSALIND:</strong> " + N(15) + "I think he's eighty-six and lives alone out on Pickett Hollow Road, and I think a man who hasn't missed a call in eleven years doesn't just forget.</p>" +
        "<p><strong>FEMI:</strong> " + N(16) + "<em>(pulling up the call log on his screen)</em> His number's in here from last week. " +
        N(17) + "I could call him during the news break.</p>" +
        "<p><strong>ROSALIND:</strong> " + N(18) + "<em>(after a pause)</em> Do it.</p>" +
        "<p><em>" + N(19) + "The news jingle plays. FEMI dials, holding his breath. ROSALIND turns in her chair to watch him through the glass. The second hand of the clock sweeps past the twelve. A long moment.</em></p>" +
        "<p><strong>FEMI:</strong> " + N(20) + "<em>(into the phone, relieved)</em> Mr. Halvorsen? " +
        N(21) + "It's Femi, from the station. " +
        N(22) + "<em>(listening)</em> No, sir, nobody's upset. " +
        N(23) + "<em>(He covers the mouthpiece and calls through the glass.)</em> His radio quit this morning. " +
        N(24) + "He's been sitting there thinking the station went off the air.</p>" +
        "<p><strong>ROSALIND:</strong> " + N(25) + "<em>(letting out a breath she seems to have held for some time)</em> Ask him if he can still hear us through his telephone.</p>" +
        "<p><em>" + N(26) + "The news ends. ROSALIND switches her mic back on.</em></p>" +
        "<p><strong>ROSALIND:</strong> " + N(27) + "Welcome back to Swap and Sell. " +
        N(28) + "We've got Mr. Halvorsen on the line, and I understand he has a rocking chair for us.</p>" +
        "<p><strong>FEMI:</strong> " + N(29) + "<em>(quietly, to himself, watching the phone light glow steady and green)</em> The chair isn't the point.</p>",
      claims: [
        {
          id: "rosalind",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.1",
          stem: "Sentence 15 reveals that Rosalind's concern about the missed call comes from —",
          choices: [
            { letter: "A", text: "her fear that the station will lose its sponsors" },
            { letter: "B", text: "her careful knowledge of a regular caller's life" },
            { letter: "C", text: "her worry that the show will end too early" },
            { letter: "D", text: "her belief that Femi has blocked the phone lines" }
          ],
          correct: "B"
        },
        {
          id: "theme",
          sol: "11.RL.1.A",
          sub: "11.RL.1.A.1",
          stem: "Which theme does the scene at WVLN most clearly develop?",
          choices: [
            { letter: "A", text: "Old technology should be replaced before it fails." },
            { letter: "B", text: "Young workers often notice problems that veterans miss." },
            { letter: "C", text: "Selling items over the radio is a dying tradition." },
            { letter: "D", text: "Small, faithful routines can hold a community together." }
          ],
          correct: "D"
        },
        {
          id: "point",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "Rosalind's statement in sentence 12 that the chair isn't the point mainly suggests that —",
          choices: [
            { letter: "A", text: "Mr. Halvorsen is asking far too much money for the chair" },
            { letter: "B", text: "Rosalind is tired of hearing about the same old furniture" },
            { letter: "C", text: "the weekly call matters as a connection more than a sale" },
            { letter: "D", text: "the station only allows listeners to sell new items" }
          ],
          correct: "C"
        },
        {
          id: "echo",
          sol: "11.RL.1.C",
          sub: "11.RL.1.C.2",
          stem: "Femi's repetition of Rosalind's line at the end of the scene (sentence 29) mainly shows that —",
          choices: [
            { letter: "A", text: "Femi now understands what the weekly call means" },
            { letter: "B", text: "Femi is mocking Rosalind's worry now that it is over" },
            { letter: "C", text: "Femi expects Mr. Halvorsen to finally sell the chair" },
            { letter: "D", text: "Femi wants listeners to hear his own opinion on the air" }
          ],
          correct: "A"
        },
        {
          id: "pencil",
          sol: "11.RL.1.D",
          sub: "11.RL.1.D.1",
          stem: "The stage directions in sentence 13 help the audience infer that Rosalind is —",
          choices: [
            { letter: "A", text: "growing more anxious as the minutes pass" },
            { letter: "B", text: "impatient with Femi's slow work on the board" },
            { letter: "C", text: "bored by the lack of callers that morning" },
            { letter: "D", text: "planning what she will say after the news" }
          ],
          correct: "A"
        },
        {
          id: "steady",
          sol: "11.RL.2.B",
          sub: "11.RL.2.B.2",
          stem: "In sentence 29, the word steady suggests that the phone light is —",
          choices: [
            { letter: "A", text: "blinking on and off rapidly" },
            { letter: "B", text: "slowly fading into darkness" },
            { letter: "C", text: "glowing without a flicker" },
            { letter: "D", text: "changing from red to green" }
          ],
          correct: "C"
        },
        {
          id: "gently",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 2, the phrase gently used, followed by a price of forty dollars or best offer, shows that the lawn mower is —",
          choices: [
            { letter: "A", text: "brand new and still in its box" },
            { letter: "B", text: "secondhand but in good shape" },
            { letter: "C", text: "broken and sold only for parts" },
            { letter: "D", text: "borrowed and due to be returned" }
          ],
          correct: "B"
        },
        {
          id: "irony",
          sol: "11.RL.2.D",
          sub: "11.RL.2.D.2",
          stem: "Mr. Halvorsen's belief that the station went off the air (sentence 24) is ironic because —",
          choices: [
            { letter: "A", text: "Femi had damaged the station's transmitter that morning" },
            { letter: "B", text: "Rosalind had already announced that the show was ending" },
            { letter: "C", text: "Mr. Halvorsen had sold his chair to another listener" },
            { letter: "D", text: "the station feared for him while he feared for it" }
          ],
          correct: "D"
        }
      ]
    },

    /* 6 · INFORMATIONAL · glassblowing */
    {
      id: "g11-ri-c108-annealing",
      family: "G11",
      title: "Patience at 2,000 Degrees",
      kind: "Informational · 11.RI",
      blurb: "Why the slowest step in glassblowing happens after the artist has put the tools down.",
      level: 2,
      passage:
        "<p>" + N(1) + "To a visitor, a glassblowing studio can look like a place of fire and speed: furnaces glowing orange, artists swinging long metal pipes, shining blobs that become bowls in minutes. " +
        N(2) + "But the most important step in making a piece of blown glass happens slowly, out of sight, and long after the artist has put down the tools. " +
        N(3) + "Understanding why requires a look at what glass actually is.</p>" +
        "<p>" + N(4) + "Most studio glass is made from silica sand melted together with soda ash and lime. " +
        N(5) + "At about 2,000 degrees Fahrenheit, this mixture becomes a glowing liquid with the consistency of thick syrup. " +
        N(6) + "Unlike water, which freezes suddenly at one temperature, glass stiffens gradually as it cools. " +
        N(7) + "Between roughly 1,000 and 1,800 degrees it is malleable: soft enough to stretch, fold, and inflate, yet firm enough to hold a shape for a few seconds. " +
        N(8) + "Glassblowers spend their careers working inside that narrow window.</p>" +
        "<p>" + N(9) + "The process begins with a gather. " +
        N(10) + "The artist dips the end of a hollow steel pipe into the furnace and turns it, collecting a glowing ball of molten glass on its tip. " +
        N(11) + "A puff of breath through the pipe creates a small bubble inside the gather. " +
        N(12) + "From there, the artist alternates between shaping the glass with wooden blocks, wet paper pads, and metal tools and returning it to a second furnace, called the glory hole, to reheat it whenever it grows too stiff to work. " +
        N(13) + "A single bowl may go back into the heat a dozen times.</p>" +
        "<p>" + N(14) + "When the form is finished, the piece is broken off the pipe and placed in an annealer, a temperature-controlled oven. " +
        N(15) + "Here is where patience matters most. " +
        N(16) + "As glass cools, its outer surface hardens before its interior does. " +
        N(17) + "If the temperature drops too fast, the hard outer layer and the still-shrinking inside pull against each other, locking stress into the piece. " +
        N(18) + "Such glass may look perfect for days or even months and then crack without warning, sometimes from nothing more than a change in room temperature. " +
        N(19) + "In the annealer, the glass is held near 900 degrees until the stress relaxes and is then cooled a few degrees at a time, often over twelve hours or more; large sculptures can take weeks.</p>" +
        "<p>" + N(20) + "Studios check their work with a simple test. " +
        N(21) + "When a piece is viewed between two sheets of polarizing film, trapped stress shows up as faint rainbow bands, while properly annealed glass appears clear and even. " +
        N(22) + "Some teachers make every student look at a poorly cooled piece this way at least once. " +
        N(23) + "The bands are a visible record of a hurried ending.</p>" +
        "<p>" + N(24) + "Glassblowing is often described as a dance with fire, and the description is fair. " +
        N(25) + "Yet the craft's most reliable lesson may come from the hours when nothing seems to happen. " +
        N(26) + "A bowl is not finished when it looks finished; it is finished when it can survive the world outside the oven.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best expresses the central idea of \"Patience at 2,000 Degrees\"?",
          choices: [
            { letter: "A", text: "Slow cooling is as essential to blown glass as fast shaping." },
            { letter: "B", text: "Glassblowing studios are risky places that require training." },
            { letter: "C", text: "Sand, soda ash, and lime are the main ingredients of glass." },
            { letter: "D", text: "Polarizing film is the best tool for judging finished glass." }
          ],
          correct: "A"
        },
        {
          id: "organize",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "The author organizes sentences 9–19 mainly by —",
          choices: [
            { letter: "A", text: "comparing glass with other materials such as water" },
            { letter: "B", text: "listing problems from least to most serious" },
            { letter: "C", text: "presenting a claim and then answering objections" },
            { letter: "D", text: "tracing the steps of the process in order" }
          ],
          correct: "D"
        },
        {
          id: "crack",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "Which sentence best explains why blown glass that is cooled too quickly may crack later?",
          choices: [
            { letter: "A", text: "Sentence 6" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 13" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "B"
        },
        {
          id: "reheat",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word reheat in sentence 12 begins with the prefix re-, as do rebuild and reconsider. In these words, the prefix re- signals that an action is —",
          choices: [
            { letter: "A", text: "done ahead of time" },
            { letter: "B", text: "done poorly" },
            { letter: "C", text: "done again" },
            { letter: "D", text: "done halfway" }
          ],
          correct: "C"
        },
        {
          id: "visitor",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author begins with a visitor's impression in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "warn readers that studios are too hot to visit safely" },
            { letter: "B", text: "describe the equipment a beginner must buy" },
            { letter: "C", text: "set up a contrast with the slow, hidden step" },
            { letter: "D", text: "prove that the fastest artists make the strongest work" }
          ],
          correct: "C"
        },
        {
          id: "malleable",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the explanation after the colon shows that malleable means —",
          choices: [
            { letter: "A", text: "likely to shatter" },
            { letter: "B", text: "able to be shaped" },
            { letter: "C", text: "clear as water" },
            { letter: "D", text: "cool to the touch" }
          ],
          correct: "B"
        },
        {
          id: "teachers",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the detail about teachers in sentence 22 mainly to —",
          choices: [
            { letter: "A", text: "criticize teachers who let students make mistakes" },
            { letter: "B", text: "explain how polarizing film is manufactured" },
            { letter: "C", text: "prove that most student pieces are poorly made" },
            { letter: "D", text: "show how studios teach the cost of rushing" }
          ],
          correct: "D"
        },
        {
          id: "attitude",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "The final paragraph suggests that the author regards the annealing stage with —",
          choices: [
            { letter: "A", text: "respect, as the true test of finished work" },
            { letter: "B", text: "impatience, as a delay artists must endure" },
            { letter: "C", text: "doubt, as a step that may not be necessary" },
            { letter: "D", text: "amusement, as the dullest part of the craft" }
          ],
          correct: "A"
        }
      ]
    },

    /* 7 · INFORMATIONAL · mountain rescue */
    {
      id: "g11-ri-c108-logistics",
      family: "G11",
      title: "The Quiet Logistics of a Rescue",
      kind: "Informational · 11.RI",
      blurb: "Mountain rescuers say most searches are won or lost long before anyone touches a rope.",
      level: 3,
      passage:
        "<p>" + N(1) + "Films about mountain rescue tend to focus on a single dramatic moment: a helicopter hovering beside a cliff, a rescuer dangling on a rope, a stranded climber reaching out a hand. " +
        N(2) + "Rescuers themselves describe their work differently. " +
        N(3) + "In their telling, most rescues are won or lost hours before anyone touches a rope, in phone calls, maps, checklists, and decisions about who goes where.</p>" +
        "<p>" + N(4) + "In much of the United States, mountain rescue is carried out by volunteer teams that work alongside a county sheriff or a park agency. " +
        N(5) + "Members are unpaid, and many hold ordinary jobs as teachers, electricians, or nurses. " +
        N(6) + "They train for years nonetheless, practicing rope systems, winter travel, wilderness first aid, and navigation in the dark. " +
        N(7) + "When a call comes in, a coordinator's first task is not to send everyone up the mountain at once but to gather information: where the person was last seen, what they were wearing, how experienced they are, and what the weather will do overnight.</p>" +
        "<p>" + N(8) + "Those answers shape the plan. " +
        N(9) + "Typically, a small hasty team of two or three fast-moving members departs first, checking trails, campsites, and other spots where lost hikers commonly end up. " +
        N(10) + "Behind them, larger groups prepare for a slower, more methodical search, walking in lines across a defined area so that no ground is skipped. " +
        N(11) + "Back at base, a coordinator tracks every team on a map, logs each radio check, and adjusts the plan as clues arrive.</p>" +
        "<p>" + N(12) + "The reason for all this structure is time. " +
        N(13) + "A lost hiker who spends a night in the open faces hypothermia, a dangerous drop in body temperature that can set in even when the air is well above freezing, especially if clothing is wet. " +
        N(14) + "The longer a search takes, the larger the area a missing person could have reached and the thinner a team must spread its people across it. " +
        N(15) + "A well-organized first few hours can keep a search small.</p>" +
        "<p>" + N(16) + "Rescuers are also blunt about their own safety. " +
        N(17) + "Team members are taught that a rescuer who becomes injured turns one emergency into two, so leaders routinely turn teams back when avalanche danger, lightning, or exhaustion makes conditions too risky. " +
        N(18) + "Such decisions can be painful, but veterans regard them as part of the job rather than a failure of it.</p>" +
        "<p>" + N(19) + "Finally, rescuers say that the person most capable of shortening a search is often the hiker. " +
        N(20) + "Leaving a detailed trip plan with someone at home, carrying a whistle and an extra layer, and staying in one place once lost can cut a search from days to hours. " +
        N(21) + "As one training manual for new volunteers puts it, \"We are very good at finding people who stay put.\" " +
        N(22) + "In that sense, a successful rescue begins long before anyone is lost: at the kitchen table, where a hiker writes down a route and promises to call by dark.</p>",
      claims: [
        {
          id: "central",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the central idea of \"The Quiet Logistics of a Rescue\"?",
          choices: [
            { letter: "A", text: "Volunteer rescuers are better trained than paid ones." },
            { letter: "B", text: "Helicopters have made mountain rescue faster and safer." },
            { letter: "C", text: "Most rescues depend on planning, not dramatic moments." },
            { letter: "D", text: "Hypothermia is the leading danger facing lost hikers." }
          ],
          correct: "C"
        },
        {
          id: "films",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author begins by describing scenes from films in sentence 1 mainly to —",
          choices: [
            { letter: "A", text: "contrast a popular image with rescuers' own view" },
            { letter: "B", text: "show that films about rescue are usually accurate" },
            { letter: "C", text: "explain why helicopters are rarely used in rescues" },
            { letter: "D", text: "suggest that rescuers enjoy being shown on screen" }
          ],
          correct: "A"
        },
        {
          id: "time",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does the author organize sentences 12–15?",
          choices: [
            { letter: "A", text: "by comparing two rescue methods side by side" },
            { letter: "B", text: "by telling a story about one particular search" },
            { letter: "C", text: "by listing objections to the volunteer system" },
            { letter: "D", text: "by explaining why speed drives the planning" }
          ],
          correct: "D"
        },
        {
          id: "hypo",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word hypothermia in sentence 13 begins with the prefix hypo-, as in hypodermic. Based on the definition in sentence 13, the prefix hypo- most likely means —",
          choices: [
            { letter: "A", text: "above or over" },
            { letter: "B", text: "below or under" },
            { letter: "C", text: "around or near" },
            { letter: "D", text: "against or opposite" }
          ],
          correct: "B"
        },
        {
          id: "coordinator",
          sol: "11.RI.2.B",
          sub: "11.RI.2.B.2",
          stem: "According to the passage, a rescue coordinator's first task when a call comes in is to —",
          choices: [
            { letter: "A", text: "send every team member up the mountain at once" },
            { letter: "B", text: "collect facts about the person and the weather" },
            { letter: "C", text: "request a helicopter to search from the air" },
            { letter: "D", text: "drive to the trailhead where the hiker parked" }
          ],
          correct: "B"
        },
        {
          id: "turnback",
          sol: "11.RI.2.C",
          sub: "11.RI.2.C.1",
          stem: "Which statement best describes the author's attitude toward leaders who turn teams back (sentences 17–18)?",
          choices: [
            { letter: "A", text: "The author suggests such leaders are too cautious to be useful." },
            { letter: "B", text: "The author implies that volunteers resent being sent home." },
            { letter: "C", text: "The author treats the practice as rare and unusual." },
            { letter: "D", text: "The author presents the choice as responsible, not a failure." }
          ],
          correct: "D"
        },
        {
          id: "stayput",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The author includes the quotation from a training manual in sentence 21 mainly to —",
          choices: [
            { letter: "A", text: "support the point that staying in place helps rescuers" },
            { letter: "B", text: "show that volunteers write most of their own manuals" },
            { letter: "C", text: "prove that every lost hiker is eventually found alive" },
            { letter: "D", text: "add humor to an otherwise serious set of instructions" }
          ],
          correct: "A"
        },
        {
          id: "agree",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Based on the passage as a whole, the author would most likely agree that —",
          choices: [
            { letter: "A", text: "volunteer teams should be replaced by paid staff" },
            { letter: "B", text: "films about rescue discourage people from volunteering" },
            { letter: "C", text: "hikers share responsibility for how fast they are found" },
            { letter: "D", text: "searches in mild weather require very little planning" }
          ],
          correct: "C"
        }
      ]
    },

    /* 8 · VOCABULARY · ice skating */
    {
      id: "g11-rv-c108-rinknight",
      family: "G11",
      title: "A Blank Page of Ice",
      kind: "Vocabulary · 11.RV",
      blurb: "A rink manager spends her nights making sure the morning's first skater finds perfect ice.",
      level: 1,
      passage:
        "<p>" + N(1) + "Most skaters at the Birch Hollow Ice Center never think about the ice beneath their blades until something goes wrong. " +
        N(2) + "Nadia Haddad thinks about little else. " +
        N(3) + "As the rink's operations manager, she spends her evenings making sure that the next morning's surface will be smooth, hard, and safe.</p>" +
        "<p>" + N(4) + "Her work is <strong>meticulous</strong>. " +
        N(5) + "Every night, after the last hockey practice ends, she drives the resurfacing machine across the rink in a slow, overlapping oval, never skipping a strip and never doubling back carelessly. " +
        N(6) + "A sharp blade underneath the machine shaves a thin layer off the top of the ice, removing the grooves and chips left by hundreds of skates. " +
        N(7) + "This constant <strong>abrasion</strong>, the scraping and grinding of steel against frozen water, roughens the surface more than most people realize. " +
        N(8) + "A single figure skating session can leave thousands of scratches.</p>" +
        "<p>" + N(9) + "After shaving, the machine collects the loose snow and washes the ice, carrying away dirt, scraps of stick tape, and other <strong>residue</strong> left behind. " +
        N(10) + "Finally, it lays down a thin sheet of warm water. " +
        N(11) + "Warm water may seem like an odd choice, but it melts slightly into the old surface before freezing, bonding the new layer firmly in place. " +
        N(12) + "Within minutes, the rink gleams.</p>" +
        "<p>" + N(13) + "Some of the changes Nadia makes are nearly <strong>imperceptible</strong>. " +
        N(14) + "A skater could not see the difference between ice that is one inch thick and ice that is one and a quarter inches thick, but Nadia can measure it, and she knows that thicker ice tends to be slower and softer. " +
        N(15) + "She drills small test holes each week to check the depth in a dozen spots, recording each number in a log. " +
        N(16) + "If one corner is building up, she adjusts how much water she lays down there. " +
        N(17) + "Her assistant, a college student named Bram, once called the log a diary for a frozen lake. " +
        N(18) + "Nadia did not laugh; she agreed.</p>" +
        "<p>" + N(19) + "The goal of all this effort is a <strong>pristine</strong> sheet: unmarked, level, and clear enough that the painted lines underneath look sharp. " +
        N(20) + "Figure skaters prefer slightly softer, warmer ice that grips their blades during jumps, while hockey players want it colder and harder for speed. " +
        N(21) + "Because the rink serves both, Nadia adjusts the temperature by a degree or two depending on who is scheduled first the next morning.</p>" +
        "<p>" + N(22) + "She admits the job can be lonely. " +
        N(23) + "Most nights she finishes after eleven, when the arena is dark and quiet except for the hum of the refrigeration pipes beneath the floor. " +
        N(24) + "But she says there is a particular satisfaction in leaving a surface no one else has touched yet. " +
        N(25) + "\"In the morning, the first skater gets a blank page,\" she says. " +
        N(26) + "\"My job is to make sure there are no smudges on it.\"</p>",
      claims: [
        {
          id: "meticulous",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which detail from sentence 5 best clarifies the meaning of meticulous in sentence 4?",
          choices: [
            { letter: "A", text: "after the last hockey practice ends" },
            { letter: "B", text: "never skipping a strip" },
            { letter: "C", text: "drives the resurfacing machine" },
            { letter: "D", text: "across the rink in a slow oval" }
          ],
          correct: "B"
        },
        {
          id: "abrasion",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the phrase set off by commas shows that abrasion means —",
          choices: [
            { letter: "A", text: "melting caused by heat" },
            { letter: "B", text: "cracking caused by cold" },
            { letter: "C", text: "freezing in thin layers" },
            { letter: "D", text: "wearing down by scraping" }
          ],
          correct: "D"
        },
        {
          id: "imperceptible",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "Imperceptible (sentence 13) has the prefix im-, as in impossible and imperfect, and the suffix -ible, meaning able to be. Imperceptible most nearly means —",
          choices: [
            { letter: "A", text: "not able to be noticed" },
            { letter: "B", text: "able to be measured easily" },
            { letter: "C", text: "not able to be repaired" },
            { letter: "D", text: "able to be seen at once" }
          ],
          correct: "A"
        },
        {
          id: "residue",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 9, the word residue most nearly refers to —",
          choices: [
            { letter: "A", text: "a thin layer of new water" },
            { letter: "B", text: "the blade that shaves the ice" },
            { letter: "C", text: "material left on a surface" },
            { letter: "D", text: "a crack beneath the ice" }
          ],
          correct: "C"
        },
        {
          id: "pristine",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "Compared with the word clean, the word pristine in sentence 19 suggests a surface that is —",
          choices: [
            { letter: "A", text: "slightly dirty but usable" },
            { letter: "B", text: "recently painted over" },
            { letter: "C", text: "cold and very hard" },
            { letter: "D", text: "untouched and perfect" }
          ],
          correct: "D"
        },
        {
          id: "bonding",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 11, the description of warm water melting into the old surface shows that bonding most nearly means —",
          choices: [
            { letter: "A", text: "joining tightly" },
            { letter: "B", text: "freezing quickly" },
            { letter: "C", text: "wearing away" },
            { letter: "D", text: "spreading thinly" }
          ],
          correct: "A"
        },
        {
          id: "diary",
          sol: "11.RV.1.F",
          sub: "11.RV.1.F.1",
          stem: "Bram's description of the log as a diary for a frozen lake (sentence 17) suggests that the log —",
          choices: [
            { letter: "A", text: "holds secrets Nadia keeps from skaters" },
            { letter: "B", text: "was copied from an old fishing record" },
            { letter: "C", text: "records the ice's condition over time" },
            { letter: "D", text: "is written in a careless, casual style" }
          ],
          correct: "C"
        },
        {
          id: "resurface",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word resurfacing (sentence 5) joins the prefix re- to the word surface. Based on the passage, resurfacing the rink means —",
          choices: [
            { letter: "A", text: "removing all of the ice at once" },
            { letter: "B", text: "giving the ice a new top layer" },
            { letter: "C", text: "painting new lines under the ice" },
            { letter: "D", text: "measuring how deep the ice is" }
          ],
          correct: "B"
        }
      ]
    },

    /* 9 · VOCABULARY · radio station */
    {
      id: "g11-rv-c108-nightsignal",
      family: "G11",
      title: "Somebody Out in the Dark",
      kind: "Vocabulary · 11.RV",
      blurb: "Why a small-town AM station can be heard hundreds of miles away, but only after sunset.",
      level: 3,
      passage:
        "<p>" + N(1) + "For most of the day, the signal from WTRL, a small AM station in the river town of Calder Falls, reaches about forty miles before it fades into hiss. " +
        N(2) + "After sunset, something strange happens. " +
        N(3) + "Listeners in places the station has never heard of begin to pick it up, faintly and <strong>intermittently</strong>, the voice of the evening host surfacing for a few seconds and then sinking back under a wash of noise.</p>" +
        "<p>" + N(4) + "The explanation lies high overhead. " +
        N(5) + "During daylight, a lower layer of the upper atmosphere absorbs much of an AM signal's energy, so the broadcast is quickly <strong>attenuated</strong>, weakened until it is too faint to hear. " +
        N(6) + "At night that layer largely disappears, and radio waves can bounce off higher layers and return to Earth hundreds of miles away. " +
        N(7) + "The effect is real but <strong>ephemeral</strong>; by sunrise it has vanished, and WTRL is a local station once more.</p>" +
        "<p>" + N(8) + "For a certain kind of hobbyist, these nighttime reflections are an invitation. " +
        N(9) + "So-called DX listeners, named for an old abbreviation for distance, spend hours turning a dial slowly through the static, trying to identify faraway stations. " +
        N(10) + "To an untrained ear, the AM band at midnight is a <strong>cacophony</strong>: whistles, crackles, half-sentences in several languages, music from two stations at once. " +
        N(11) + "Experienced listeners learn to pick out a single voice from the chaos the way a bird-watcher picks out a single song from a forest.</p>" +
        "<p>" + N(12) + "Many of these listeners send letters to the stations they catch, describing what they heard and when, in hopes of receiving a reply card confirming the reception. " +
        N(13) + "WTRL keeps its letters in three fat binders in the station's back office. " +
        N(14) + "They come from fishermen, truck drivers, retirees, and at least one high school physics class that turned the hunt into a semester project. " +
        N(15) + "The station's longtime engineer, Gus Ferreira, answers every one by hand.</p>" +
        "<p>" + N(16) + "The programming the distant listeners describe is as <strong>eclectic</strong> as the listeners themselves. " +
        N(17) + "On a single night, WTRL might air a high school basketball game, an hour of polka, a call-in show about vegetable gardening, and a church choir rehearsal recorded that afternoon. " +
        N(18) + "Nothing about the lineup is designed for a national audience, which may be exactly why strangers find it charming.</p>" +
        "<p>" + N(19) + "Small AM stations have struggled in recent decades, as listeners have drifted toward streaming services and newer forms of radio. " +
        N(20) + "Yet WTRL has remained <strong>tenacious</strong>, keeping its transmitter running through two floods, one ice storm, and a fundraising drive that ran the volunteers ragged. " +
        N(21) + "Ferreira says the binders are one reason. " +
        N(22) + "\"Every letter is proof,\" he says, \"that somebody out in the dark was listening.\"</p>",
      claims: [
        {
          id: "intermittently",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 3, the description of the host's voice surfacing and then sinking back helps show that intermittently means —",
          choices: [
            { letter: "A", text: "loudly and clearly" },
            { letter: "B", text: "in a foreign language" },
            { letter: "C", text: "only during the day" },
            { letter: "D", text: "on and off, not steadily" }
          ],
          correct: "D"
        },
        {
          id: "attenuated",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 5, the words that follow the comma show that attenuated means —",
          choices: [
            { letter: "A", text: "made weaker" },
            { letter: "B", text: "sent farther" },
            { letter: "C", text: "made clearer" },
            { letter: "D", text: "switched off" }
          ],
          correct: "A"
        },
        {
          id: "ephemeral",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 7, the word ephemeral most nearly means —",
          choices: [
            { letter: "A", text: "mysterious" },
            { letter: "B", text: "powerful" },
            { letter: "C", text: "short-lived" },
            { letter: "D", text: "dangerous" }
          ],
          correct: "C"
        },
        {
          id: "cacophony",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "As it is used in sentence 10 to describe the AM band at midnight, the word cacophony most nearly means —",
          choices: [
            { letter: "A", text: "a soothing kind of music" },
            { letter: "B", text: "a harsh jumble of sounds" },
            { letter: "C", text: "a long stretch of silence" },
            { letter: "D", text: "a carefully planned show" }
          ],
          correct: "B"
        },
        {
          id: "suffixly",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The suffix -ly in intermittently (sentence 3) shows that the word describes —",
          choices: [
            { letter: "A", text: "how an action happens" },
            { letter: "B", text: "a person who does an action" },
            { letter: "C", text: "a place where something is" },
            { letter: "D", text: "the state of being something" }
          ],
          correct: "A"
        },
        {
          id: "tenacious",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "The word tenacious in sentence 20 suggests that the station has been —",
          choices: [
            { letter: "A", text: "careless about its expenses" },
            { letter: "B", text: "unaware of its own troubles" },
            { letter: "C", text: "stubbornly set on surviving" },
            { letter: "D", text: "unwilling to change its shows" }
          ],
          correct: "C"
        },
        {
          id: "eclectic",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "Which sentence best illustrates the meaning of eclectic as it is used in sentence 16?",
          choices: [
            { letter: "A", text: "Sentence 13" },
            { letter: "B", text: "Sentence 15" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 17" }
          ],
          correct: "D"
        },
        {
          id: "trans",
          sol: "11.RV.1.C",
          sub: "11.RV.1.C.1",
          stem: "The word transmitter in sentence 20 begins with the prefix trans-, as do transport and transfer. The prefix trans- means —",
          choices: [
            { letter: "A", text: "under or below" },
            { letter: "B", text: "across or beyond" },
            { letter: "C", text: "before or ahead" },
            { letter: "D", text: "against or opposite" }
          ],
          correct: "B"
        }
      ]
    },

    /* 10 · PAIRED TEXTS · ice skating */
    {
      id: "g11-dsr-c108-lanternpark",
      family: "G11",
      title: "The Rink at Lantern Park",
      kind: "Paired texts · 11.DSR",
      blurb: "A news report and a resident's letter weigh whether a town should bring back its outdoor rink.",
      level: 2,
      passage:
        "<p><strong>Text 1 — Council Weighs Return of Outdoor Rink (Millbrook Weekly)</strong></p>" +
        "<p>" + N(1) + "The Millbrook Town Council heard a proposal Tuesday to bring back the outdoor skating rink at Lantern Park, which closed eleven years ago after a series of warm winters left the ice unsafe for much of the season. " +
        N(2) + "Parks director Yolanda Briggs told the council that a volunteer group has offered to build and maintain the rink, flooding it by hand each night when temperatures allow. " +
        N(3) + "The town's share of the cost would be about $6,000 a year for lighting, liability insurance, and a used water tank. " +
        N(4) + "Briggs cautioned that the rink's season is unpredictable. " +
        N(5) + "In the last decade, she said, Lantern Park averaged only twenty-three days a winter cold enough to keep natural ice solid, compared with about fifty days in the 1990s. " +
        N(6) + "Council member Ari Feldman questioned whether the money might be better spent helping families use the indoor arena in neighboring Dorset, where many Millbrook skaters already pay for ice time. " +
        N(7) + "Others noted that the indoor arena books most of its ice for hockey leagues, leaving few open hours for casual skaters. " +
        N(8) + "The council voted to request a cost estimate for a temporary refrigerated pad, which would extend the season but raise yearly expenses to roughly $25,000. " +
        N(9) + "A decision is expected in March.</p>" +
        "<p><strong>Text 2 — What the Pond Taught Me (letter to the editor)</strong></p>" +
        "<p>" + N(10) + "When I was nine, my grandfather laced my skates on a bench at Lantern Park while his breath made clouds over my head. " +
        N(11) + "The ice was bumpy, and there was a patch near the willow tree that everyone knew to avoid. " +
        N(12) + "It was the best place I have ever been. " +
        N(13) + "I read that the council is worried about the cost of reopening the rink, and I understand; six thousand dollars is real money for a town our size. " +
        N(14) + "But I would ask the council to count something besides dollars and days. " +
        N(15) + "The indoor arena in Dorset is wonderful if you play hockey, or if you can drive twenty minutes and pay for an hour. " +
        N(16) + "Lantern Park was free, and it was ours. " +
        N(17) + "Nobody signed up. " +
        N(18) + "Teenagers taught little kids to skate backward, and grandparents stood at the edge with thermoses, calling out advice nobody had asked for. " +
        N(19) + "If the ice lasts only three weeks, then let it be three good weeks. " +
        N(20) + "Some of the best things in a town are not open every day; they are the things people wait for. " +
        N(21) + "I would happily join the volunteers flooding the rink at midnight, and I suspect I would not be alone. " +
        "</p><p>— Lucía Ortega, Millbrook</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which subject is addressed in both the Millbrook Weekly report and the letter to the editor?",
          choices: [
            { letter: "A", text: "the cost to the town of reopening the rink" },
            { letter: "B", text: "the poor condition of the arena in Dorset" },
            { letter: "C", text: "the history of hockey leagues in Millbrook" },
            { letter: "D", text: "the danger of skating near the willow tree" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which statement best describes how the purposes of Text 1 and Text 2 differ?",
          choices: [
            { letter: "A", text: "Text 1 urges readers to skate indoors; Text 2 informs them about costs." },
            { letter: "B", text: "Text 1 tells a personal story; Text 2 relies mainly on statistics." },
            { letter: "C", text: "Text 1 reports a council debate; Text 2 argues for one side of it." },
            { letter: "D", text: "Text 1 criticizes the volunteers; Text 2 praises the parks director." }
          ],
          correct: "C"
        },
        {
          id: "closed",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to Text 1, why did the Lantern Park rink close eleven years ago?",
          choices: [
            { letter: "A", text: "The town could no longer afford insurance." },
            { letter: "B", text: "Warm winters made the ice unsafe too often." },
            { letter: "C", text: "Families preferred the arena in Dorset." },
            { letter: "D", text: "Volunteers stopped flooding the ice." }
          ],
          correct: "B"
        },
        {
          id: "respond",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How would the writer of Text 2 most likely respond to the statistic in sentence 5?",
          choices: [
            { letter: "A", text: "The figure must be wrong, since winters seem colder now." },
            { letter: "B", text: "The rink should be refrigerated so it lasts all winter." },
            { letter: "C", text: "The town should spend the money on the Dorset arena." },
            { letter: "D", text: "Even a short season would still be worth having." }
          ],
          correct: "D"
        },
        {
          id: "tone",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Compared with the tone of the Millbrook Weekly report, the tone of Lucía Ortega's letter is more —",
          choices: [
            { letter: "A", text: "neutral and factual" },
            { letter: "B", text: "angry and quick to accuse" },
            { letter: "C", text: "personal and nostalgic" },
            { letter: "D", text: "humorous and mocking" }
          ],
          correct: "C"
        },
        {
          id: "feldman",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which sentence from Text 2 most directly answers the question Council member Feldman raises in sentence 6?",
          choices: [
            { letter: "A", text: "Sentence 15" },
            { letter: "B", text: "Sentence 11" },
            { letter: "C", text: "Sentence 19" },
            { letter: "D", text: "Sentence 21" }
          ],
          correct: "A"
        },
        {
          id: "thermoses",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The writer of Text 2 includes the details in sentence 18 mainly to —",
          choices: [
            { letter: "A", text: "complain that grandparents gave too much advice" },
            { letter: "B", text: "prove that teenagers skate better than adults do" },
            { letter: "C", text: "explain why the ice near the willow was unsafe" },
            { letter: "D", text: "show how the free rink brought all ages together" }
          ],
          correct: "D"
        },
        {
          id: "conclude",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "A council member who read both texts could best conclude that —",
          choices: [
            { letter: "A", text: "the volunteers' offer means reopening would cost nothing" },
            { letter: "B", text: "the rink's value may lie in shared use, not season length" },
            { letter: "C", text: "the indoor arena already serves casual skaters well" },
            { letter: "D", text: "residents oppose spending any money on outdoor skating" }
          ],
          correct: "B"
        }
      ]
    },

    /* 11 · PAIRED TEXTS · mountain rescue */
    {
      id: "g11-dsr-c108-hollinsridge",
      family: "G11",
      title: "Easy Summit",
      kind: "Paired texts · 11.DSR",
      blurb: "A rescue team's annual report and a hiker's blog post look at the same problem from two sides.",
      level: 3,
      passage:
        "<p><strong>Text 1 — From the Annual Report of the Granite Notch Search and Rescue Team</strong></p>" +
        "<p>" + N(1) + "The team responded to sixty-two calls this year, the most in its twenty-eight-year history. " +
        N(2) + "Fifty-one of those calls involved day hikers rather than overnight backpackers or climbers. " +
        N(3) + "In the majority of day-hiker incidents, the subject was not injured; rather, the subject became lost, exhausted, or caught by darkness on a trail that was longer or steeper than expected. " +
        N(4) + "Our debriefs point to a recurring pattern. " +
        N(5) + "Many hikers now choose routes from photo-sharing apps and online lists, which highlight scenic summits but often omit elevation gain, trail conditions, or the time a round trip requires. " +
        N(6) + "Hikers who start in the afternoon in order to reach a viewpoint at sunset are especially likely to be caught descending in the dark without a headlamp. " +
        N(7) + "The team does not charge for rescues and does not intend to, because fear of a bill can lead people to delay calling for help until a situation becomes far more dangerous. " +
        N(8) + "Instead, we are expanding education: trailhead signs listing realistic round-trip times, a short video on what to carry, and partnerships with outdoor retailers. " +
        N(9) + "We also ask every hiker to remember three habits: tell someone your plan, turn around at a set time no matter how close the summit seems, and carry a light even on a morning hike.</p>" +
        "<p><strong>Text 2 — Sunset on Hollins Ridge (a hiker's blog post)</strong></p>" +
        "<p>" + N(10) + "I picked Hollins Ridge because of a single photograph: a girl in a yellow jacket standing on a granite ledge, the whole valley glowing orange below her. " +
        N(11) + "The caption said the summit was easy and the views were unreal. " +
        N(12) + "My friend Keiko and I started up the trail at 4:30 on an October afternoon, wearing sneakers and carrying one water bottle between us. " +
        N(13) + "Nobody told us the easy summit was four miles each way with two thousand feet of climbing. " +
        N(14) + "We reached the ledge just as the sun went down, and for about six minutes it was exactly like the photograph. " +
        N(15) + "Then it was dark. " +
        N(16) + "Our phone flashlights lasted until roughly the second mile of the descent, and after that we could not tell trail from forest. " +
        N(17) + "We sat down on a rock, and Keiko, who was colder than she admitted, finally said what I had been afraid to say: \"We need to call someone.\" " +
        N(18) + "I hesitated because I was embarrassed, and because I honestly wondered what it would cost. " +
        N(19) + "Two volunteers reached us a little before midnight with headlamps, jackets, and a thermos of cocoa. " +
        N(20) + "Neither of them lectured us. " +
        N(21) + "One just asked, on the walk down, where we had found the trail, and when I showed her the photograph, she nodded as if she had seen it many times before.</p>",
      claims: [
        {
          id: "both",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which idea is supported by both the Granite Notch report and the Hollins Ridge blog post?",
          choices: [
            { letter: "A", text: "Most rescues involve serious injuries to climbers." },
            { letter: "B", text: "Online images can lead hikers to misjudge a trail." },
            { letter: "C", text: "Volunteers prefer to rescue overnight backpackers." },
            { letter: "D", text: "Hikers who call for help are usually sent a bill." }
          ],
          correct: "B"
        },
        {
          id: "pattern",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Which sentence from Text 2 best illustrates the pattern described in sentence 6 of Text 1?",
          choices: [
            { letter: "A", text: "Sentence 10" },
            { letter: "B", text: "Sentence 17" },
            { letter: "C", text: "Sentence 20" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "D"
        },
        {
          id: "cost",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Sentence 18 of Text 2 most directly supports which reasoning from Text 1?",
          choices: [
            { letter: "A", text: "the decision not to charge for rescues (sentence 7)" },
            { letter: "B", text: "the plan to post round-trip times (sentence 8)" },
            { letter: "C", text: "the record number of calls this year (sentence 1)" },
            { letter: "D", text: "the advice to carry a light on every hike (sentence 9)" }
          ],
          correct: "A"
        },
        {
          id: "dayhikers",
          sol: "11.RI.1.B",
          sub: "11.RI.1.B.1",
          stem: "According to Text 1, in most day-hiker incidents the hikers —",
          choices: [
            { letter: "A", text: "had broken bones from falls on steep rock" },
            { letter: "B", text: "were climbers using ropes and gear" },
            { letter: "C", text: "were lost or worn out rather than hurt" },
            { letter: "D", text: "had ignored warnings posted by the team" }
          ],
          correct: "C"
        },
        {
          id: "approach",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "How do the two texts differ in their approach to the problem of underprepared hikers?",
          choices: [
            { letter: "A", text: "Text 1 blames hikers harshly; Text 2 excuses hikers entirely." },
            { letter: "B", text: "Text 1 tells a story; Text 2 presents data and practical advice." },
            { letter: "C", text: "Text 1 focuses on climbers; Text 2 focuses on backpackers." },
            { letter: "D", text: "Text 1 tracks a pattern in many calls; Text 2 tells one case." }
          ],
          correct: "D"
        },
        {
          id: "nod",
          sol: "11.DSR.D",
          sub: "11.DSR.D.2",
          stem: "Read alongside Text 1, the rescuer's nod in sentence 21 of Text 2 suggests that —",
          choices: [
            { letter: "A", text: "she wants to share the photograph on the team's website" },
            { letter: "B", text: "the photograph has drawn unprepared hikers before" },
            { letter: "C", text: "she is impressed by how far the two friends climbed" },
            { letter: "D", text: "she plans to report the hikers to the park rangers" }
          ],
          correct: "B"
        },
        {
          id: "sixminutes",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The writer of Text 2 includes the detail in sentence 14 that the view matched the photograph for about six minutes mainly to —",
          choices: [
            { letter: "A", text: "prove that the online caption was entirely honest" },
            { letter: "B", text: "explain why the friends chose to hike the ridge" },
            { letter: "C", text: "show how brief the reward was compared with its cost" },
            { letter: "D", text: "describe the weather conditions on the summit" }
          ],
          correct: "C"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The Granite Notch team most likely intends its report mainly for —",
          choices: [
            { letter: "A", text: "hikers and residents who might prevent future calls" },
            { letter: "B", text: "new volunteers who need training on rope systems" },
            { letter: "C", text: "retailers hoping to sell more climbing gear" },
            { letter: "D", text: "county officials planning to start billing hikers" }
          ],
          correct: "A"
        }
      ]
    },

    /* 12 · FUNCTIONAL TEXT · glassblowing */
    {
      id: "g11-ri-c108-emberstreet",
      family: "G11",
      title: "Beginner Workshop Guide",
      kind: "Functional text · 11.RI",
      blurb: "A glass studio's guide tells first-time students what to wear, what to avoid, and when to pick up their work.",
      level: 1,
      passage:
        "<p><strong>Ember Street Glass Studio · Beginner Workshop Guide</strong></p>" +
        "<p><strong>About the Workshop.</strong> " + N(1) + "Our two-hour beginner workshop introduces students ages fourteen and up to the basics of working with hot glass. " +
        N(2) + "Each participant will make one solid paperweight and one small ornament with step-by-step help from a studio instructor. " +
        N(3) + "No experience is needed, and classes are limited to six students so that each person gets plenty of time at the furnace. " +
        N(4) + "Participants under eighteen must have a parent or guardian sign the release form before the class begins.</p>" +
        "<p><strong>What to Wear.</strong> " + N(5) + "Wear clothing made of natural fibers such as cotton or wool; synthetic fabrics like polyester can melt if they come near the heat. " +
        N(6) + "Long pants and closed-toe leather or canvas shoes are required. " +
        N(7) + "Please tie back long hair and remove dangling jewelry, scarves, and loose sleeves. " +
        N(8) + "The studio is hot year-round, so we recommend a short-sleeved cotton shirt and a refillable water bottle.</p>" +
        "<p><strong>Safety Rules.</strong> " + N(9) + "All participants must wear the safety glasses provided by the studio at all times on the studio floor, even when they are only watching. " +
        N(10) + "These glasses filter the intense light from the furnace, which can damage eyes over time. " +
        N(11) + "Never touch glass, tools, or metal surfaces unless an instructor tells you it is safe; hot glass can look exactly like cool glass. " +
        N(12) + "Move slowly, keep to the marked walkways, and say \"behind you\" when walking past someone holding a pipe. " +
        N(13) + "If you feel dizzy or overheated, step outside the yellow line and tell an instructor immediately.</p>" +
        "<p><strong>Scheduling and Cancellations.</strong> " + N(14) + "Workshops run Thursday evenings at 6:00 p.m. and Saturday mornings at 10:00 a.m. " +
        N(15) + "The fee is $85 per person and covers all materials. " +
        N(16) + "Cancellations made at least seventy-two hours before the workshop receive a full refund. " +
        N(17) + "Cancellations made later than that may be moved to another date for a $15 rebooking fee but cannot be refunded. " +
        N(18) + "If the studio must cancel because of equipment trouble, you may choose either a full refund or a new date at no charge.</p>" +
        "<p><strong>Picking Up Your Piece.</strong> " + N(19) + "Finished glass cannot go home the same day. " +
        N(20) + "Every piece must cool slowly overnight in our annealing oven to prevent cracking. " +
        N(21) + "Pieces are ready for pickup after 2:00 p.m. on the second day after your workshop; a Thursday piece, for example, will be ready Saturday afternoon. " +
        N(22) + "We hold finished work for thirty days, after which unclaimed pieces are donated to a local school art program. " +
        N(23) + "If you cannot pick up in person, we can ship your piece for a flat $12 packing fee.</p>",
      claims: [
        {
          id: "summary",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Which statement best summarizes the information in the Ember Street workshop guide?",
          choices: [
            { letter: "A", text: "It argues that glassblowing is safer than other crafts." },
            { letter: "B", text: "It describes the history of the Ember Street studio." },
            { letter: "C", text: "It tells beginners how to prepare for and finish a class." },
            { letter: "D", text: "It lists advanced techniques for experienced students." }
          ],
          correct: "C"
        },
        {
          id: "polyester",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "According to the guide, why should students avoid wearing polyester to the workshop?",
          choices: [
            { letter: "A", text: "It can melt if it gets close to the heat." },
            { letter: "B", text: "It traps sweat in the hot studio air." },
            { letter: "C", text: "It snags easily on the metal tools." },
            { letter: "D", text: "It reflects the bright furnace light." }
          ],
          correct: "A"
        },
        {
          id: "cancel",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "Danielle signs up for a Saturday workshop and cancels at noon on the Thursday before it. Based on the guide, she can —",
          choices: [
            { letter: "A", text: "receive a full refund of her $85 fee" },
            { letter: "B", text: "move to another date by paying $15" },
            { letter: "C", text: "move to any open date at no charge" },
            { letter: "D", text: "receive a partial refund of $70" }
          ],
          correct: "B"
        },
        {
          id: "headings",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The bold headings in the Ember Street guide mainly help readers —",
          choices: [
            { letter: "A", text: "follow the order in which glass is shaped" },
            { letter: "B", text: "compare this studio with other local studios" },
            { letter: "C", text: "tell which of the rules are optional" },
            { letter: "D", text: "find information on one topic quickly" }
          ],
          correct: "D"
        },
        {
          id: "glasses",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "In the Safety Rules section, sentence 10 is included mainly to —",
          choices: [
            { letter: "A", text: "describe how the furnace is built and fueled" },
            { letter: "B", text: "explain the reason behind the glasses rule" },
            { letter: "C", text: "warn that the studio may cancel a workshop" },
            { letter: "D", text: "show that watching is safer than working" }
          ],
          correct: "B"
        },
        {
          id: "unclaimed",
          sol: "11.RV.1.B",
          sub: "11.RV.1.B.1",
          stem: "In sentence 22, the phrase after which signals that unclaimed pieces are ones that have —",
          choices: [
            { letter: "A", text: "not yet cooled completely" },
            { letter: "B", text: "not been paid for in full" },
            { letter: "C", text: "not been made by students" },
            { letter: "D", text: "not been picked up in time" }
          ],
          correct: "D"
        },
        {
          id: "audience",
          sol: "11.RI.1.A",
          sub: "11.RI.1.A.2",
          stem: "The intended audience of the Ember Street guide is most likely —",
          choices: [
            { letter: "A", text: "people thinking about taking a first class" },
            { letter: "B", text: "experienced artists seeking studio rental" },
            { letter: "C", text: "instructors who teach beginner workshops" },
            { letter: "D", text: "school art programs that receive donations" }
          ],
          correct: "A"
        },
        {
          id: "thursday",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "The example of a Thursday piece in sentence 21 serves mainly to —",
          choices: [
            { letter: "A", text: "show that Thursday classes are more popular" },
            { letter: "B", text: "explain why pieces must cool overnight" },
            { letter: "C", text: "clarify how the pickup timeline works" },
            { letter: "D", text: "suggest that Saturday classes are easier" }
          ],
          correct: "C"
        }
      ]
    },

    /* 13 · ARGUMENT · radio station */
    {
      id: "g11-ri-c108-stationback",
      family: "G11",
      title: "Turn the Station Back On",
      kind: "Argument · 11.RI",
      blurb: "A junior argues in the school paper that a silent student radio station deserves a second life.",
      level: 2,
      passage:
        "<p>" + N(1) + "In the corner of Room 114, behind a stack of broken music stands, sits a mixing board that nobody has switched on in six years. " +
        N(2) + "It once powered Ridgeview Radio, a student-run station that streamed game commentary, interviews, and music shows to anyone with an internet connection. " +
        N(3) + "When its faculty adviser retired, the station quietly went silent. " +
        N(4) + "It is time for Ridgeview to turn it back on.</p>" +
        "<p>" + N(5) + "A school radio station does something no other activity here does: it teaches students to speak clearly, in real time, to an audience they cannot see. " +
        N(6) + "Employers regularly list speaking skills among the abilities they value most, yet most of us practice speaking only a few times a year, in front of classmates who are mostly watching the clock. " +
        N(7) + "A weekly radio show would give dozens of students regular, low-pressure practice. " +
        N(8) + "Ask anyone who did it. " +
        N(9) + "My cousin, who hosted a Thursday sports show here as a sophomore, says it was the first time she learned to think on her feet without freezing.</p>" +
        "<p>" + N(10) + "A station would also connect parts of the school that rarely meet. " +
        N(11) + "Athletes could call their own games; the jazz band could premiere recordings; the Spanish club could run a bilingual hour. " +
        N(12) + "When the old station was running, according to past yearbooks, more than forty students from eleven different clubs appeared on air in a single year. " +
        N(13) + "That is the kind of crossover a cafeteria table cannot produce.</p>" +
        "<p>" + N(14) + "Some will argue that the school cannot afford it. " +
        N(15) + "The concern is fair, but the numbers are small. " +
        N(16) + "The equipment already exists, and a technology teacher who examined it last month found that it needs only about $400 in new cables and a replacement microphone. " +
        N(17) + "Free streaming software can handle the rest. " +
        N(18) + "Others will say students already have podcasts. " +
        N(19) + "But a podcast is recorded, edited, and polished; a live show is a commitment to show up at the same time every week and speak to whoever is listening. " +
        N(20) + "That discipline is precisely the point.</p>" +
        "<p>" + N(21) + "What the station truly needs is an adviser. " +
        N(22) + "I am asking any teacher willing to give one afternoon a week to consider it, and I am asking the administration to support the role with the same stipend given to other club advisers. " +
        N(23) + "Students are ready; a sign-up sheet I posted outside Room 114 collected thirty-one names in four days.</p>" +
        "<p>" + N(24) + "The board in the corner still works. " +
        N(25) + "All it needs is someone to flip the switch.</p>" +
        "<p>— Inés Kowalczyk, junior</p>",
      claims: [
        {
          id: "claim",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which statement best expresses the central claim of \"Turn the Station Back On\"?",
          choices: [
            { letter: "A", text: "Podcasts are a better choice than live radio for students." },
            { letter: "B", text: "The school spends too little on its technology classes." },
            { letter: "C", text: "Public speaking should be required in every class." },
            { letter: "D", text: "Ridgeview should restart its student radio station." }
          ],
          correct: "D"
        },
        {
          id: "interest",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.2",
          stem: "Which sentence provides the strongest evidence that current students want the station revived?",
          choices: [
            { letter: "A", text: "Sentence 9" },
            { letter: "B", text: "Sentence 23" },
            { letter: "C", text: "Sentence 16" },
            { letter: "D", text: "Sentence 12" }
          ],
          correct: "B"
        },
        {
          id: "objections",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.1",
          stem: "How does Inés organize sentences 14–20 of her argument?",
          choices: [
            { letter: "A", text: "by tracing the history of the station in order" },
            { letter: "B", text: "by comparing the station with other clubs" },
            { letter: "C", text: "by raising objections and answering each one" },
            { letter: "D", text: "by listing the steps for restarting the station" }
          ],
          correct: "C"
        },
        {
          id: "frame",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Inés begins and ends the essay with the image of the mixing board mainly to —",
          choices: [
            { letter: "A", text: "frame the argument with a concrete image of readiness" },
            { letter: "B", text: "suggest that Room 114 needs better storage space" },
            { letter: "C", text: "prove that the old equipment is too costly to fix" },
            { letter: "D", text: "honor the retired adviser who once ran the station" }
          ],
          correct: "A"
        },
        {
          id: "fair",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "In sentence 15, the author's attitude toward the concern about cost is best described as —",
          choices: [
            { letter: "A", text: "respectful but sure it is minor" },
            { letter: "B", text: "dismissive and openly mocking" },
            { letter: "C", text: "worried and deeply uncertain" },
            { letter: "D", text: "angry and quick to accuse" }
          ],
          correct: "A"
        },
        {
          id: "crossover",
          sol: "11.RI.2.A",
          sub: "11.RI.2.A.2",
          stem: "Inés includes the examples in sentence 11 mainly to —",
          choices: [
            { letter: "A", text: "list the clubs that currently need more members" },
            { letter: "B", text: "argue that athletes should be paid for commentary" },
            { letter: "C", text: "show how a station could bring groups together" },
            { letter: "D", text: "explain how bilingual broadcasting works" }
          ],
          correct: "C"
        },
        {
          id: "polished",
          sol: "11.RV.1.D",
          sub: "11.RV.1.D.1",
          stem: "In sentence 19, the word polished suggests that a podcast is —",
          choices: [
            { letter: "A", text: "shiny and attractive to look at" },
            { letter: "B", text: "carefully refined before release" },
            { letter: "C", text: "rude and careless in its language" },
            { letter: "D", text: "outdated compared with live radio" }
          ],
          correct: "B"
        },
        {
          id: "afford",
          sol: "11.RI.1.C",
          sub: "11.RI.1.C.1",
          stem: "Which detail does Inés use to answer the concern that the school cannot afford a station?",
          choices: [
            { letter: "A", text: "the thirty-one names on the sign-up sheet" },
            { letter: "B", text: "the cousin who hosted a sports show" },
            { letter: "C", text: "the forty students from eleven clubs" },
            { letter: "D", text: "the $400 repair estimate for the board" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
